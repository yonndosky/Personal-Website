// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDClblKvZp7hzdJSdPK_l1JBrXh21Vf2Lo",
    authDomain: "personal-website-5cce8.firebaseapp.com",
    databaseURL: "https://personal-website-5cce8-default-rtdb.firebaseio.com",
    projectId: "personal-website-5cce8",
    storageBucket: "personal-website-5cce8.appspot.com",
    messagingSenderId: "295173413895",
    appId: "1:295173413895:web:7bb213021ea59294431ea2",
    measurementId: "G-D0BLDYMJ6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { getDatabase, get, set, update, remove, push, child, ref } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const db = getDatabase();

const formContactInstant = document.querySelector('#contact-intstant');

formContactInstant.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (ValidateEmail(formData.get('uemail'))) {
        try {

            updeteData('feedbacks/', formData.get('uemail'), formData.get('uname'), formData.get('umessage'));
            alert('已經留言成功!');
        } catch (error) {
            console.log(error);
            alert('留言失敗，請透過其他聯絡方式聯絡或在留言一次，造成您的困擾深感抱歉!');
        }
    } else {
        // alert("You have entered an invalid email address!");
        alert("請再檢查一次信箱是否輸入正確。");
    }

});

function setData(sRoot, name, message) {
    //
    try {
        set(ref(db, sRoot), {
            username: name,
            message: message,
        });
    } catch (error) {
        console.log(error);
    }
}
function updeteData(sRoot, email, name, message) {
    const postData = {
        username: name,
        message: message,
    };


    const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    email = email.replace('.','_dot_');
    updates[sRoot + email + '__random___' + newPostKey] = postData;

    return update(ref(db), updates);
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true);
    }
    return (false);
}