(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.e5(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.e6(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.bJ(b)
return new s(c,this)}:function(){if(s===null)s=A.bJ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.bJ(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={bx:function bx(){},b0:function b0(a){this.a=a},Y:function Y(){},J:function J(){},u:function u(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
cA(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
eG(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
f(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aJ(a)
return s},
as(a){var s,r=$.c7
if(r==null)r=$.c7=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
b4(a){return A.d7(a)},
d7(a){var s,r,q,p
if(a instanceof A.i)return A.o(A.L(a),null)
s=J.U(a)
if(s===B.p||s===B.u||t.B.b(a)){r=B.e(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.o(A.L(a),null)},
q(a,b){if(a==null)J.aI(a)
throw A.d(A.dP(a,b))},
dP(a,b){var s,r="index",q=null
if(!A.cs(b))return new A.X(!0,b,r,q)
s=A.bj(J.aI(a))
if(b<0||b>=s)return A.c3(b,a,r,q,s)
return new A.b5(q,q,!0,b,r,"Value not in range")},
d(a){var s,r
if(a==null)a=new A.b3()
s=new Error()
s.dartException=a
r=A.e7
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
e7(){return J.aJ(this.dartException)},
bP(a){throw A.d(a)},
e4(a){throw A.d(A.ai(a))},
e3(a){if(a==null||typeof a!="object")return J.bw(a)
else return A.as(a)},
dR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.length
for(s=b.$ti,r=s.c,s=s.z[1],q=0;q<f;){p=q+1
o=a[q]
q=p+1
n=a[p]
r.a(o)
s.a(n)
if(typeof o=="string"){m=b.b
if(m==null){l=Object.create(null)
l["<non-identifier-key>"]=l
delete l["<non-identifier-key>"]
b.b=l
m=l}k=m[o]
if(k==null)m[o]=b.C(o,n)
else k.b=n}else if(typeof o=="number"&&(o&0x3fffffff)===o){j=b.c
if(j==null){l=Object.create(null)
l["<non-identifier-key>"]=l
delete l["<non-identifier-key>"]
b.c=l
j=l}k=j[o]
if(k==null)j[o]=b.C(o,n)
else k.b=n}else{i=b.d
if(i==null){l=Object.create(null)
l["<non-identifier-key>"]=l
delete l["<non-identifier-key>"]
b.d=l
i=l}h=J.bw(o)&0x3fffffff
g=i[h]
if(g==null)i[h]=[b.C(o,n)]
else{p=b.N(g,o)
if(p>=0)g[p].b=n
else g.push(b.C(o,n))}}}return b},
dX(a,b,c,d,e,f){t.Z.a(a)
switch(A.bj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bf("Unsupported number of arguments for wrapped closure"))},
dO(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.dX)
a.$identity=s
return s},
d1(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.au().constructor.prototype):Object.create(new A.N(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.c1(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.cY(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.c1(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
cY(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cW)}throw A.d("Error in functionType of tearoff")},
cZ(a,b,c,d){var s=A.c0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
c1(a,b,c,d){var s,r
if(c)return A.d0(a,b,d)
s=b.length
r=A.cZ(s,d,a,b)
return r},
d_(a,b,c,d){var s=A.c0,r=A.cX
switch(b?-1:a){case 0:throw A.d(new A.b6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
d0(a,b,c){var s,r
if($.bZ==null)$.bZ=A.bY("interceptor")
if($.c_==null)$.c_=A.bY("receiver")
s=b.length
r=A.d_(s,c,a,b)
return r},
bJ(a){return A.d1(a)},
cW(a,b){return A.bh(v.typeUniverse,A.L(a.a),b)},
c0(a){return a.a},
cX(a){return a.b},
bY(a){var s,r,q,p=new A.N("receiver","interceptor"),o=J.d5(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.cV("Field name "+a+" not found."))},
e5(a){throw A.d(new A.aN(a))},
dS(a){return v.getIsolateTag(a)},
ev(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
e0(a){var s,r,q,p,o,n=A.cn($.cw.$1(a)),m=$.bn[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bs[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.dq($.ct.$2(a,n))
if(q!=null){m=$.bn[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.bs[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.bv(s)
$.bn[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.bs[n]=s
return s}if(p==="-"){o=A.bv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.cy(a,s)
if(p==="*")throw A.d(A.cc(n))
if(v.leafTags[n]===true){o=A.bv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.cy(a,s)},
cy(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.bO(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
bv(a){return J.bO(a,!1,null,!!a.$iby)},
e2(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.bv(s)
else return J.bO(s,c,null,null)},
dV(){if(!0===$.bM)return
$.bM=!0
A.dW()},
dW(){var s,r,q,p,o,n,m,l
$.bn=Object.create(null)
$.bs=Object.create(null)
A.dU()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.cz.$1(o)
if(n!=null){m=A.e2(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
dU(){var s,r,q,p,o,n,m=B.j()
m=A.T(B.k,A.T(B.l,A.T(B.f,A.T(B.f,A.T(B.m,A.T(B.n,A.T(B.o(B.e),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.cw=new A.bp(p)
$.ct=new A.bq(o)
$.cz=new A.br(n)},
T(a,b){return a(b)||b},
H:function H(){},
ah:function ah(){},
aw:function aw(){},
au:function au(){},
N:function N(a,b){this.a=a
this.b=b},
b6:function b6(a){this.a=a},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
b1:function b1(a,b){this.a=a
this.b=b
this.c=null},
bp:function bp(a){this.a=a},
bq:function bq(a){this.a=a},
br:function br(a){this.a=a},
c9(a,b){var s=b.c
return s==null?b.c=A.bD(a,b.y,!0):s},
c8(a,b){var s=b.c
return s==null?b.c=A.aa(a,"c2",[b.y]):s},
ca(a){var s=a.x
if(s===6||s===7||s===8)return A.ca(a.y)
return s===11||s===12},
d8(a){return a.at},
bK(a){return A.bE(v.typeUniverse,a,!1)},
F(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.F(a,s,a0,a1)
if(r===s)return b
return A.ck(a,r,!0)
case 7:s=b.y
r=A.F(a,s,a0,a1)
if(r===s)return b
return A.bD(a,r,!0)
case 8:s=b.y
r=A.F(a,s,a0,a1)
if(r===s)return b
return A.cj(a,r,!0)
case 9:q=b.z
p=A.ac(a,q,a0,a1)
if(p===q)return b
return A.aa(a,b.y,p)
case 10:o=b.y
n=A.F(a,o,a0,a1)
m=b.z
l=A.ac(a,m,a0,a1)
if(n===o&&l===m)return b
return A.bB(a,n,l)
case 11:k=b.y
j=A.F(a,k,a0,a1)
i=b.z
h=A.dI(a,i,a0,a1)
if(j===k&&h===i)return b
return A.ci(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.ac(a,g,a0,a1)
o=b.y
n=A.F(a,o,a0,a1)
if(f===g&&n===o)return b
return A.bC(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.aL("Attempted to substitute unexpected RTI kind "+c))}},
ac(a,b,c,d){var s,r,q,p,o=b.length,n=A.bi(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.F(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
dJ(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.bi(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.F(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
dI(a,b,c,d){var s,r=b.a,q=A.ac(a,r,c,d),p=b.b,o=A.ac(a,p,c,d),n=b.c,m=A.dJ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ay()
s.a=q
s.b=o
s.c=m
return s},
aF(a,b){a[v.arrayRti]=b
return a},
dN(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.dT(s)
return a.$S()}return null},
cx(a,b){var s
if(A.ca(b))if(a instanceof A.H){s=A.dN(a)
if(s!=null)return s}return A.L(a)},
L(a){var s
if(a instanceof A.i){s=a.$ti
return s!=null?s:A.bF(a)}if(Array.isArray(a))return A.aE(a)
return A.bF(J.U(a))},
aE(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
eu(a){var s=a.$ti
return s!=null?s:A.bF(a)},
bF(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.dy(a,s)},
dy(a,b){var s=a instanceof A.H?a.__proto__.__proto__.constructor:b,r=A.dm(v.typeUniverse,s.name)
b.$ccache=r
return r},
dT(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.bE(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dx(a){var s,r,q,p,o=this
if(o===t.K)return A.S(o,a,A.dC)
if(!A.B(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.S(o,a,A.dF)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.cs
else if(r===t.i||r===t.H)q=A.dB
else if(r===t.N)q=A.dD
else q=r===t.y?A.bG:null
if(q!=null)return A.S(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.dY)){o.r="$i"+p
if(p==="z")return A.S(o,a,A.dA)
return A.S(o,a,A.dE)}}else if(s===7)return A.S(o,a,A.dv)
return A.S(o,a,A.dt)},
S(a,b,c){a.b=c
return a.b(b)},
dw(a){var s,r=this,q=A.ds
if(!A.B(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.dr
else if(r===t.K)q=A.dp
else{s=A.ad(r)
if(s)q=A.du}r.a=q
return r.a(a)},
bl(a){var s,r=a.x
if(!A.B(a))if(!(a===t._))if(!(a===t.F))if(r!==7)s=r===8&&A.bl(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
dt(a){var s=this
if(a==null)return A.bl(s)
return A.h(v.typeUniverse,A.cx(a,s),null,s,null)},
dv(a){if(a==null)return!0
return this.y.b(a)},
dE(a){var s,r=this
if(a==null)return A.bl(r)
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.U(a)[s]},
dA(a){var s,r=this
if(a==null)return A.bl(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.i)return!!a[s]
return!!J.U(a)[s]},
ds(a){var s,r=this
if(a==null){s=A.ad(r)
if(s)return a}else if(r.b(a))return a
A.cp(a,r)},
du(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.cp(a,s)},
cp(a,b){throw A.d(A.ch(A.cd(a,A.cx(a,b),A.o(b,null))))},
dM(a,b,c,d){var s=null
if(A.h(v.typeUniverse,a,s,b,s))return a
throw A.d(A.ch("The type argument '"+A.o(a,s)+"' is not a subtype of the type variable bound '"+A.o(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
cd(a,b,c){var s=A.aQ(a)
return s+": type '"+A.o(b==null?A.L(a):b,null)+"' is not a subtype of type '"+c+"'"},
ch(a){return new A.aB("TypeError: "+a)},
m(a,b){return new A.aB("TypeError: "+A.cd(a,null,b))},
dC(a){return a!=null},
dp(a){if(a!=null)return a
throw A.d(A.m(a,"Object"))},
dF(a){return!0},
dr(a){return a},
bG(a){return!0===a||!1===a},
ei(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.m(a,"bool"))},
ek(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.m(a,"bool"))},
ej(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.m(a,"bool?"))},
el(a){if(typeof a=="number")return a
throw A.d(A.m(a,"double"))},
en(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"double"))},
em(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"double?"))},
cs(a){return typeof a=="number"&&Math.floor(a)===a},
bj(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.m(a,"int"))},
ep(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.m(a,"int"))},
eo(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.m(a,"int?"))},
dB(a){return typeof a=="number"},
eq(a){if(typeof a=="number")return a
throw A.d(A.m(a,"num"))},
es(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"num"))},
er(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.m(a,"num?"))},
dD(a){return typeof a=="string"},
cn(a){if(typeof a=="string")return a
throw A.d(A.m(a,"String"))},
et(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.m(a,"String"))},
dq(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.m(a,"String?"))},
dH(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.o(a[q],b)
return s},
cq(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.aF([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.m(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.q(a5,j)
m=B.r.P(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.o(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.o(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.o(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.o(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.o(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
o(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.o(a.y,b)
return s}if(l===7){r=a.y
s=A.o(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.o(a.y,b)+">"
if(l===9){p=A.dK(a.y)
o=a.z
return o.length>0?p+("<"+A.dH(o,b)+">"):p}if(l===11)return A.cq(a,b,null)
if(l===12)return A.cq(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.q(b,n)
return b[n]}return"?"},
dK(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
dn(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
dm(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.bE(a,b,!1)
else if(typeof m=="number"){s=m
r=A.ab(a,5,"#")
q=A.bi(s)
for(p=0;p<s;++p)q[p]=r
o=A.aa(a,b,q)
n[b]=o
return o}else return m},
dk(a,b){return A.cl(a.tR,b)},
dj(a,b){return A.cl(a.eT,b)},
bE(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.cg(A.ce(a,null,b,c))
r.set(b,s)
return s},
bh(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.cg(A.ce(a,b,c,!0))
q.set(c,r)
return r},
dl(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.bB(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
E(a,b){b.a=A.dw
b.b=A.dx
return b},
ab(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.v(null,null)
s.x=b
s.at=c
r=A.E(a,s)
a.eC.set(c,r)
return r},
ck(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.dh(a,b,r,c)
a.eC.set(r,s)
return s},
dh(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.B(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.v(null,null)
q.x=6
q.y=b
q.at=c
return A.E(a,q)},
bD(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.dg(a,b,r,c)
a.eC.set(r,s)
return s},
dg(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.B(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.ad(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.F)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.ad(q.y))return q
else return A.c9(a,b)}}p=new A.v(null,null)
p.x=7
p.y=b
p.at=c
return A.E(a,p)},
cj(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.de(a,b,r,c)
a.eC.set(r,s)
return s},
de(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.B(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.aa(a,"c2",[b])
else if(b===t.P||b===t.T)return t.O}q=new A.v(null,null)
q.x=8
q.y=b
q.at=c
return A.E(a,q)},
di(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.v(null,null)
s.x=13
s.y=b
s.at=q
r=A.E(a,s)
a.eC.set(q,r)
return r},
aC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
dd(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
aa(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.v(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.E(a,r)
a.eC.set(p,q)
return q},
bB(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.aC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.v(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.E(a,o)
a.eC.set(q,n)
return n},
ci(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aC(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aC(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.dd(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.v(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.E(a,p)
a.eC.set(r,o)
return o},
bC(a,b,c,d){var s,r=b.at+("<"+A.aC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.df(a,b,c,r,d)
a.eC.set(r,s)
return s},
df(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.bi(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.F(a,b,r,0)
m=A.ac(a,c,r,0)
return A.bC(a,n,m,c!==m)}}l=new A.v(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.E(a,l)},
ce(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cg(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.d9(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.cf(a,r,h,g,!1)
else if(q===46)r=A.cf(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.D(a.u,a.e,g.pop()))
break
case 94:g.push(A.di(a.u,g.pop()))
break
case 35:g.push(A.ab(a.u,5,"#"))
break
case 64:g.push(A.ab(a.u,2,"@"))
break
case 126:g.push(A.ab(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.bA(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.aa(p,n,o))
else{m=A.D(p,a.e,n)
switch(m.x){case 11:g.push(A.bC(p,m,o,a.n))
break
default:g.push(A.bB(p,m,o))
break}}break
case 38:A.da(a,g)
break
case 42:p=a.u
g.push(A.ck(p,A.D(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.bD(p,A.D(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.cj(p,A.D(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.ay()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.bA(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.ci(p,A.D(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.bA(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.dc(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.D(a.u,a.e,i)},
d9(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
cf(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.dn(s,o.y)[p]
if(n==null)A.bP('No "'+p+'" in "'+A.d8(o)+'"')
d.push(A.bh(s,o,n))}else d.push(p)
return m},
da(a,b){var s=b.pop()
if(0===s){b.push(A.ab(a.u,1,"0&"))
return}if(1===s){b.push(A.ab(a.u,4,"1&"))
return}throw A.d(A.aL("Unexpected extended operation "+A.f(s)))},
D(a,b,c){if(typeof c=="string")return A.aa(a,c,a.sEA)
else if(typeof c=="number")return A.db(a,b,c)
else return c},
bA(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.D(a,b,c[s])},
dc(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.D(a,b,c[s])},
db(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.aL("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.aL("Bad index "+c+" for "+b.h(0)))},
h(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.B(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.B(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.h(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.h(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.h(a,b.y,c,d,e)
if(r===6)return A.h(a,b.y,c,d,e)
return r!==7}if(r===6)return A.h(a,b.y,c,d,e)
if(p===6){s=A.c9(a,d)
return A.h(a,b,c,s,e)}if(r===8){if(!A.h(a,b.y,c,d,e))return!1
return A.h(a,A.c8(a,b),c,d,e)}if(r===7){s=A.h(a,t.P,c,d,e)
return s&&A.h(a,b.y,c,d,e)}if(p===8){if(A.h(a,b,c,d.y,e))return!0
return A.h(a,b,c,A.c8(a,d),e)}if(p===7){s=A.h(a,b,c,t.P,e)
return s||A.h(a,b,c,d.y,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.h(a,k,c,j,e)||!A.h(a,j,e,k,c))return!1}return A.cr(a,b.y,c,d.y,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.cr(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.dz(a,b,c,d,e)}return!1},
cr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.h(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.h(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.h(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.h(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.h(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
dz(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bh(a,b,r[o])
return A.cm(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.cm(a,n,null,c,m,e)},
cm(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.h(a,r,d,q,f))return!1}return!0},
ad(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.B(a))if(r!==7)if(!(r===6&&A.ad(a.y)))s=r===8&&A.ad(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
dY(a){var s
if(!A.B(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
B(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
cl(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
bi(a){return a>0?new Array(a):v.typeUniverse.sEA},
v:function v(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
ay:function ay(){this.c=this.b=this.a=null},
be:function be(){},
aB:function aB(a){this.a=a},
y(a,b,c){return b.i("@<0>").J(c).i("c5<1,2>").a(A.dR(a,new A.a1(b.i("@<0>").J(c).i("a1<1,2>"))))},
d4(a,b,c){var s,r
if(A.bH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.aF([],t.s)
B.a.m($.p,a)
try{A.dG(a,s)}finally{if(0>=$.p.length)return A.q($.p,-1)
$.p.pop()}r=A.cb(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
c4(a,b,c){var s,r
if(A.bH(a))return b+"..."+c
s=new A.av(b)
B.a.m($.p,a)
try{r=s
r.a=A.cb(r.a,a,", ")}finally{if(0>=$.p.length)return A.q($.p,-1)
$.p.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
bH(a){var s,r
for(s=$.p.length,r=0;r<s;++r)if(a===$.p[r])return!0
return!1},
dG(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.l())return
s=A.f(l.gq())
B.a.m(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.q(b,-1)
r=b.pop()
if(0>=b.length)return A.q(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.l()){if(j<=4){B.a.m(b,A.f(p))
return}r=A.f(p)
if(0>=b.length)return A.q(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.l();p=o,o=n){n=l.gq();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.q(b,-1)
k-=b.pop().length+2;--j}B.a.m(b,"...")
return}}q=A.f(p)
r=A.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.q(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.m(b,m)
B.a.m(b,q)
B.a.m(b,r)},
c6(a){var s,r={}
if(A.bH(a))return"{...}"
s=new A.av("")
try{B.a.m($.p,a)
s.a+="{"
r.a=!0
a.A(0,new A.b2(r,s))
s.a+="}"}finally{if(0>=$.p.length)return A.q($.p,-1)
$.p.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
a2:function a2(){},
j:function j(){},
a3:function a3(){},
b2:function b2(a,b){this.a=a
this.b=b},
R:function R(){},
a9:function a9(){},
d3(a){if(a instanceof A.H)return a.h(0)
return"Instance of '"+A.b4(a)+"'"},
d6(a,b){var s,r,q,p=A.aF([],b.i("n<0>"))
for(s=a.$ti,r=new A.u(a,a.gj(a),s.i("u<j.E>")),s=s.i("j.E");r.l();){q=r.d
B.a.m(p,b.a(q==null?s.a(q):q))}return p},
cb(a,b,c){var s=J.cS(b)
if(!s.l())return a
if(c.length===0){do a+=A.f(s.gq())
while(s.l())}else{a+=A.f(s.gq())
for(;s.l();)a=a+c+A.f(s.gq())}return a},
aQ(a){if(typeof a=="number"||A.bG(a)||a==null)return J.aJ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.d3(a)},
aL(a){return new A.aK(a)},
cV(a){return new A.X(!1,null,null,a)},
c3(a,b,c,d,e){var s=A.bj(e==null?J.aI(b):e)
return new A.aZ(s,!0,a,c,"Index out of range")},
bz(a){return new A.bb(a)},
cc(a){return new A.ba(a)},
ai(a){return new A.aM(a)},
aP:function aP(){},
aK:function aK(a){this.a=a},
b3:function b3(){},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aZ:function aZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bb:function bb(a){this.a=a},
ba:function ba(a){this.a=a},
aM:function aM(a){this.a=a},
aN:function aN(a){this.a=a},
bf:function bf(a){this.a=a},
k:function k(){},
K:function K(){},
i:function i(){},
av:function av(a){this.a=a},
A(a){var s=new A.bc(a)
s.U(a)
return s},
G(a){return document.querySelector(a)},
c:function c(){},
ae:function ae(){},
af:function af(){},
M:function M(){},
w:function w(){},
r:function r(){},
bc:function bc(a){this.a=a
this.b=null},
bd:function bd(){},
aj:function aj(){},
aO:function aO(){},
a8:function a8(a,b){this.a=a
this.$ti=b},
b:function b(){},
a:function a(){},
ak:function ak(){},
am:function am(){},
e:function e(){},
a5:function a5(){},
at:function at(){},
a7:function a7(){},
P:function P(){},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ax:function ax(){},
az:function az(){},
aA:function aA(){},
aD:function aD(){},
co(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.bG(a))return a
if(t.f.b(a))return A.cu(a)
if(t.j.b(a)){s=[]
J.cR(a,new A.bk(s))
a=s}return a},
cu(a){var s={}
a.A(0,new A.bm(s))
return s},
bk:function bk(a){this.a=a},
bm:function bm(a){this.a=a},
b7:function b7(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a},
b9:function b9(){},
aH(a){var s,r=document.querySelector(a).offsetTop
r.toString
s=B.b.t(r)
r=window
r.toString
B.d.R(r,A.y(["top",s,"left",0,"behavior","smooth"],t.N,t.K))},
aR:function aR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aS:function aS(){},
aT:function aT(){},
aU:function aU(){},
aV:function aV(a){this.a=a},
aW:function aW(){},
aX:function aX(a){this.a=a},
aY:function aY(a){this.a=a},
e_(){var s=window
s.toString
B.d.G(s,"resize",new A.bu())},
dZ(){var s=window
s.toString
B.d.G(s,"scroll",new A.bt())},
dL(){var s,r,q,p,o,n,m,l="element"
for(s=$.cC(),r=0;r<9;++r){q=s[r]
p=J.bW(q.k(0,l))
o=window
o.toString
n="scrollY" in o
n.toString
if(n){o=o.scrollY
o.toString
o=B.b.t(o)}else{o=o.document.documentElement.scrollTop
o.toString
o=B.b.t(o)}if(p-200<=o){p=J.bW(q.k(0,l))
o=J.cT(q.k(0,l))
n=window
n.toString
m="scrollY" in n
m.toString
if(m){n=n.scrollY
n.toString
n=B.b.t(n)}else{n=n.document.documentElement.scrollTop
n.toString
n=B.b.t(n)}n=p+o>=n
p=n}else p=!1
if(p)J.bX(q.k(0,l),A.f(q.k(0,"self_classname"))+" "+A.f(q.k(0,"animate")))
else J.bX(q.k(0,l),"card")}},
bu:function bu(){},
bt:function bt(){},
e6(a){return A.bP(new A.b0("Field '"+a+"' has been assigned during initialization."))},
e1(){var s,r,q,p,o,n,m,l="animate",k=t.h,j=document
j.toString
A.dM(k,k,"T","querySelectorAll")
k=j.querySelectorAll(".right-panel")
k.toString
s=j.getElementById("fabout_me")
s.toString
r=j.getElementById("fsummary")
r.toString
q=j.getElementById("fportfolio")
q.toString
p=j.getElementById("working_experience")
p.toString
o=j.getElementById("fcontact")
o.toString
n=j.getElementById("colormode-switch")
n.toString
m=j.body
m.toString
new A.aR(new A.a8(k,t.U),s,r,q,p,o).$0()
new A.b7(n,m).O()
m=j.querySelector("#chinese-name")
if(m!=null)J.l(m,"\u9673\u6c38\u52f3")
k=j.querySelector("#english-name")
if(k!=null)J.l(k,"CHEN YUNG-HSUN")
k=j.querySelector("#birthday")
if(k!=null)J.l(k,"2022/02/18")
k=j.querySelector("#place-of-birth")
if(k!=null)J.l(k,"Taiwan")
k=j.querySelector("#address")
if(k!=null)J.l(k,u.a)
k=j.querySelector("#sex")
if(k!=null)J.l(k,"Male")
k=j.querySelector("#religion")
if(k!=null)J.l(k,"None")
k=j.querySelector("#email")
if(k!=null)J.l(k,"yonndo0218@gmail.com")
k=j.querySelector("#phone-number")
if(k!=null)J.l(k,"+886 918910076")
k=j.querySelector("#web")
if(k!=null)J.l(k,"None")
k=j.querySelector("#line")
if(k!=null)J.l(k,"@645pkuqe")
$.bQ().className="card "+A.f($.bT().k(0,l))
$.bS().className=A.f($.bV().k(0,l))
$.bR().className=A.f($.bU().k(0,l))
A.e_()
A.dZ()}},J={
bO(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bo(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.bM==null){A.dV()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.cc("Return interceptor for "+A.f(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.bg
if(o==null)o=$.bg=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.e0(a)
if(p!=null)return p
if(typeof a=="function")return B.t
s=Object.getPrototypeOf(a)
if(s==null)return B.h
if(s===Object.prototype)return B.h
if(typeof q=="function"){o=$.bg
if(o==null)o=$.bg=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.c,enumerable:false,writable:true,configurable:true})
return B.c}return B.c},
d5(a,b){a.fixed$length=Array
return a},
U(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a_.prototype
return J.ap.prototype}if(typeof a=="string")return J.Q.prototype
if(a==null)return J.ao.prototype
if(typeof a=="boolean")return J.an.prototype
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof A.i)return a
return J.bo(a)},
cv(a){if(typeof a=="string")return J.Q.prototype
if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof A.i)return a
return J.bo(a)},
bL(a){if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof A.i)return a
return J.bo(a)},
V(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof A.i)return a
return J.bo(a)},
cP(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).B(a,b)},
W(a,b,c){return J.V(a).G(a,b,c)},
cQ(a,b){return J.bL(a).v(a,b)},
cR(a,b){return J.bL(a).A(a,b)},
bw(a){return J.U(a).gn(a)},
cS(a){return J.bL(a).gu(a)},
aI(a){return J.cv(a).gj(a)},
cT(a){return J.V(a).ga0(a)},
bW(a){return J.V(a).ga1(a)},
cU(a){return J.V(a).gH(a)},
bX(a,b){return J.V(a).sY(a,b)},
l(a,b){return J.V(a).sa2(a,b)},
aJ(a){return J.U(a).h(a)},
Z:function Z(){},
an:function an(){},
ao:function ao(){},
t:function t(){},
I:function I(){},
ar:function ar(){},
a6:function a6(){},
x:function x(){},
n:function n(a){this.$ti=a},
b_:function b_(a){this.$ti=a},
ag:function ag(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a0:function a0(){},
a_:function a_(){},
ap:function ap(){},
Q:function Q(){}},B={}
var w=[A,J,B]
var $={}
A.bx.prototype={}
J.Z.prototype={
B(a,b){return a===b},
gn(a){return A.as(a)},
h(a){return"Instance of '"+A.b4(a)+"'"}}
J.an.prototype={
h(a){return String(a)},
gn(a){return a?519018:218159},
$ibI:1}
J.ao.prototype={
B(a,b){return null==b},
h(a){return"null"},
gn(a){return 0}}
J.t.prototype={}
J.I.prototype={
gn(a){return 0},
h(a){return String(a)}}
J.ar.prototype={}
J.a6.prototype={}
J.x.prototype={
h(a){var s=a[$.cB()]
if(s==null)return this.T(a)
return"JavaScript function for "+J.aJ(s)},
$iO:1}
J.n.prototype={
m(a,b){A.aE(a).c.a(b)
if(!!a.fixed$length)A.bP(A.bz("add"))
a.push(b)},
A(a,b){var s,r
A.aE(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.ai(a))}},
v(a,b){if(!(b<a.length))return A.q(a,b)
return a[b]},
h(a){return A.c4(a,"[","]")},
gu(a){return new J.ag(a,a.length,A.aE(a).i("ag<1>"))},
gn(a){return A.as(a)},
gj(a){return a.length},
$ik:1,
$iz:1}
J.b_.prototype={}
J.ag.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.e4(q))
s=r.c
if(s>=p){r.sK(null)
return!1}r.sK(q[s]);++r.c
return!0},
sK(a){this.d=this.$ti.i("1?").a(a)}}
J.a0.prototype={
t(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.bz(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
W(a,b){return(a|0)===a?a/b|0:this.X(a,b)},
X(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.bz("Result of truncating division is "+A.f(s)+": "+A.f(a)+" ~/ "+b))},
$iaG:1}
J.a_.prototype={$ibN:1}
J.ap.prototype={}
J.Q.prototype={
P(a,b){return a+b},
h(a){return a},
gn(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj(a){return a.length},
$iC:1}
A.b0.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.Y.prototype={}
A.J.prototype={
gu(a){var s=this
return new A.u(s,s.gj(s),s.$ti.i("u<J.E>"))}}
A.u.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.cv(q),o=p.gj(q)
if(r.b!==o)throw A.d(A.ai(q))
s=r.c
if(s>=o){r.sI(null)
return!1}r.sI(p.v(q,s));++r.c
return!0},
sI(a){this.d=this.$ti.i("1?").a(a)}}
A.a4.prototype={
gj(a){return J.aI(this.a)},
v(a,b){return this.b.$1(J.cQ(this.a,b))}}
A.H.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.cA(r==null?"unknown":r)+"'"},
$iO:1,
ga3(){return this},
$C:"$1",
$R:1,
$D:null}
A.ah.prototype={$C:"$2",$R:2}
A.aw.prototype={}
A.au.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.cA(s)+"'"}}
A.N.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.N))return!1
return this.$_target===b.$_target&&this.a===b.a},
gn(a){return(A.e3(this.a)^A.as(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.b4(this.a)+"'")}}
A.b6.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a1.prototype={
gj(a){return this.a},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.Z(b)},
Z(a){var s,r,q=this.d
if(q==null)return null
s=q[J.bw(a)&0x3fffffff]
r=this.N(s,a)
if(r<0)return null
return s[r].b},
A(a,b){var s,r,q=this
q.$ti.i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ai(q))
s=s.c}},
C(a,b){var s=this,r=s.$ti,q=new A.b1(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
N(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cP(a[r].a,b))return r
return-1},
h(a){return A.c6(this)},
$ic5:1}
A.b1.prototype={}
A.bp.prototype={
$1(a){return this.a(a)},
$S:2}
A.bq.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.br.prototype={
$1(a){return this.a(A.cn(a))},
$S:4}
A.v.prototype={
i(a){return A.bh(v.typeUniverse,this,a)},
J(a){return A.dl(v.typeUniverse,this,a)}}
A.ay.prototype={}
A.be.prototype={
h(a){return this.a}}
A.aB.prototype={}
A.a2.prototype={$ik:1,$iz:1}
A.j.prototype={
gu(a){return new A.u(a,this.gj(a),A.L(a).i("u<j.E>"))},
v(a,b){return this.k(a,b)},
A(a,b){var s,r
A.L(a).i("~(j.E)").a(b)
s=this.gj(a)
for(r=0;r<s;++r){b.$1(this.k(a,r))
if(s!==this.gj(a))throw A.d(A.ai(a))}},
h(a){return A.c4(a,"[","]")}}
A.a3.prototype={}
A.b2.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.f(a)
r.a=s+": "
r.a+=A.f(b)},
$S:5}
A.R.prototype={
gj(a){return this.a},
h(a){return A.c6(this)},
$iaq:1}
A.a9.prototype={}
A.aP.prototype={}
A.aK.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.aQ(s)
return"Assertion failed"}}
A.b3.prototype={
h(a){return"Throw of null."}}
A.X.prototype={
gF(){return"Invalid argument"+(!this.a?"(s)":"")},
gE(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gF()+q+o
if(!s.a)return n
return n+s.gE()+": "+A.aQ(s.b)}}
A.b5.prototype={
gF(){return"RangeError"},
gE(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.f(q):""
else if(q==null)s=": Not greater than or equal to "+A.f(r)
else if(q>r)s=": Not in inclusive range "+A.f(r)+".."+A.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.f(r)
return s}}
A.aZ.prototype={
gF(){return"RangeError"},
gE(){if(A.bj(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.bb.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.ba.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aM.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aQ(s)+"."}}
A.aN.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bf.prototype={
h(a){return"Exception: "+this.a}}
A.k.prototype={
gj(a){var s,r=this.gu(this)
for(s=0;r.l();)++s
return s},
h(a){return A.d4(this,"(",")")}}
A.K.prototype={
gn(a){return A.i.prototype.gn.call(this,this)},
h(a){return"null"}}
A.i.prototype={$ii:1,
B(a,b){return this===b},
gn(a){return A.as(this)},
h(a){return"Instance of '"+A.b4(this)+"'"},
toString(){return this.h(this)}}
A.av.prototype={
gj(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.c.prototype={}
A.ae.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.af.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.M.prototype={$iM:1}
A.w.prototype={
gj(a){return a.length}}
A.r.prototype={
gj(a){var s=a.length
s.toString
return s},
$ir:1}
A.bc.prototype={
U(a){var s=A.d6(this.a,t.A),r=A.aE(s)
this.sV(new A.a4(s,r.i("r(1)").a(new A.bd()),r.i("a4<1,r>")))},
p(a,b){var s,r,q
for(s=this.a,r=s.$ti,s=new A.u(s,s.gj(s),r.i("u<j.E>")),r=r.i("j.E");s.l();){q=s.d
if(q==null)q=r.a(q)
q.style[a]=b}},
sV(a){this.b=t.d.a(a)}}
A.bd.prototype={
$1(a){return t.c.a(J.cU(a))},
$S:6}
A.aj.prototype={}
A.aO.prototype={
h(a){var s=String(a)
s.toString
return s}}
A.a8.prototype={
gj(a){return this.a.length},
k(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.q(s,b)
return this.$ti.c.a(s[b])},
gH(a){return A.A(this)},
$id2:1}
A.b.prototype={
h(a){var s=a.localName
s.toString
return s},
ga0(a){var s=a.offsetHeight
s.toString
return B.b.t(s)},
ga1(a){var s=a.offsetTop
s.toString
return B.b.t(s)},
gH(a){var s=a.style
s.toString
return s},
sY(a,b){a.className=b},
$ib:1}
A.a.prototype={$ia:1}
A.ak.prototype={
M(a,b,c,d){this.D(a,b,t.o.a(c),d)},
G(a,b,c){return this.M(a,b,c,null)},
D(a,b,c,d){return a.addEventListener(b,A.dO(t.o.a(c),1),d)}}
A.am.prototype={
gj(a){return a.length}}
A.e.prototype={
h(a){var s=a.nodeValue
return s==null?this.S(a):s},
sa2(a,b){a.textContent=b},
$ie:1}
A.a5.prototype={
gj(a){var s=a.length
s.toString
return s},
k(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw A.d(A.c3(b,a,null,null,null))
s=a[b]
s.toString
return s},
v(a,b){if(!(b<a.length))return A.q(a,b)
return a[b]},
$iby:1,
$ik:1,
$iz:1}
A.at.prototype={
gj(a){return a.length}}
A.a7.prototype={
R(a,b){a.scrollTo(A.cu(b))
return}}
A.P.prototype={
gu(a){return new A.al(a,a.length,A.L(a).i("al<P.E>"))}}
A.al.prototype={
l(){var s=this,r=s.c+1,q=s.b
if(r<q){q=s.a
if(!(r>=0&&r<q.length))return A.q(q,r)
s.sL(q[r])
s.c=r
return!0}s.sL(null)
s.c=q
return!1},
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
sL(a){this.d=this.$ti.i("1?").a(a)}}
A.ax.prototype={}
A.az.prototype={}
A.aA.prototype={}
A.aD.prototype={}
A.bk.prototype={
$1(a){this.a.push(A.co(a))},
$S:7}
A.bm.prototype={
$2(a,b){this.a[a]=A.co(b)},
$S:8}
A.b7.prototype={
O(){J.W(this.a,"click",new A.b8(this))
B.i.M(this.b,"mouseover",new A.b9(),!1)},
$0(){return this.O()}}
A.b8.prototype={
$1(a){var s
t.z.a(a)
s=this.a.b
if(s.getAttribute("class")==="colormode-white")s.className="colormode-black"
else s.className="colormode-white"
return null},
$S:0}
A.b9.prototype={
$1(a){t.z.a(a)},
$S:1}
A.aR.prototype={
a_(){var s,r,q,p,o,n=this,m="click"
J.W(n.b,m,new A.aS())
J.W(n.c,m,new A.aT())
J.W(n.d,m,new A.aU())
J.W(n.e,m,new A.aV(n))
J.W(n.f,m,new A.aW())
for(s=n.a,r=s.$ti,s=new A.u(s,s.gj(s),r.i("u<j.E>")),q=t.o,r=r.i("j.E");s.l();){p=s.d
if(p==null)p=r.a(p)
o=J.V(p)
o.D(p,"mouseover",q.a(new A.aX(n)),null)
o.D(p,"mouseleave",q.a(new A.aY(n)),null)}},
$0(){var s="#00000020",r=this.a
A.A(r).p("backgroundColor","#ffffff20")
A.A(r).p("borderColor",s)
A.A(r).p("color",s)
this.a_()}}
A.aS.prototype={
$1(a){t.z.a(a)
return A.aH("#about-me")},
$S:0}
A.aT.prototype={
$1(a){t.z.a(a)
return A.aH("#summary")},
$S:0}
A.aU.prototype={
$1(a){t.z.a(a)
return A.aH("#portfolio")},
$S:0}
A.aV.prototype={
$1(a){t.z.a(a)
return A.aH("#working-experience")},
$S:0}
A.aW.prototype={
$1(a){t.z.a(a)
return A.aH("#contact")},
$S:0}
A.aX.prototype={
$1(a){var s
t.z.a(a)
s=this.a.a
A.A(s).p("backgroundColor","#ffffff")
A.A(s).p("borderColor","#000000")
A.A(s).p("color","#000000")},
$S:1}
A.aY.prototype={
$1(a){var s,r="#00000020"
t.z.a(a)
s=this.a.a
A.A(s).p("backgroundColor","#ffffff20")
A.A(s).p("borderColor",r)
A.A(s).p("color",r)},
$S:1}
A.bu.prototype={
$1(a){var s,r,q,p="#address",o="Taoyuan City,Taiwan"
t.z.a(a)
s=document
r=s.querySelector(".contact-intstant")
r.toString
q=window.innerWidth
q.toString
r.setAttribute("cols",B.q.W(q,20))
r=window.innerWidth
r.toString
if(r>=800){s=s.querySelector(p)
if(s!=null)J.l(s,u.a)}else{r=window.innerWidth
r.toString
if(r>=700){s=s.querySelector(p)
if(s!=null)J.l(s,"Zhongxing Rd. ,Longtan Dist. ,Taoyuan City ,Taiwan")}else{r=window.innerWidth
r.toString
if(r>=600){s=s.querySelector(p)
if(s!=null)J.l(s,"Longtan Dist. ,Taoyuan City,Taiwan")}else{r=window.innerWidth
r.toString
if(r>=500){s=s.querySelector(p)
if(s!=null)J.l(s,o)}else{s=s.querySelector(p)
if(s!=null)J.l(s,o)}}}}},
$S:1}
A.bt.prototype={
$1(a){t.z.a(a)
A.dL()},
$S:1};(function aliases(){var s=J.Z.prototype
s.S=s.h
s=J.I.prototype
s.T=s.h})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.i,null)
q(A.i,[A.bx,J.Z,J.ag,A.aP,A.k,A.u,A.H,A.R,A.b1,A.v,A.ay,A.a9,A.j,A.bf,A.K,A.av,A.aD,A.aj,A.P,A.al,A.b7,A.aR])
q(J.Z,[J.an,J.ao,J.t,J.n,J.a0,J.Q])
q(J.t,[J.I,A.ak,A.ax,A.aO,A.a,A.az])
q(J.I,[J.ar,J.a6,J.x])
r(J.b_,J.n)
q(J.a0,[J.a_,J.ap])
q(A.aP,[A.b0,A.b6,A.be,A.aK,A.b3,A.X,A.bb,A.ba,A.aM,A.aN])
r(A.Y,A.k)
r(A.J,A.Y)
r(A.a4,A.J)
q(A.H,[A.ah,A.aw,A.bp,A.br,A.bd,A.bk,A.b8,A.b9,A.aS,A.aT,A.aU,A.aV,A.aW,A.aX,A.aY,A.bu,A.bt])
q(A.aw,[A.au,A.N])
r(A.a3,A.R)
r(A.a1,A.a3)
q(A.ah,[A.bq,A.b2,A.bm])
r(A.aB,A.be)
r(A.a2,A.a9)
q(A.X,[A.b5,A.aZ])
q(A.ak,[A.e,A.a7])
q(A.e,[A.b,A.w])
r(A.c,A.b)
q(A.c,[A.ae,A.af,A.M,A.am,A.at])
r(A.r,A.ax)
r(A.bc,A.aD)
r(A.a8,A.a2)
r(A.aA,A.az)
r(A.a5,A.aA)
s(A.a9,A.j)
s(A.ax,A.aj)
s(A.az,A.j)
s(A.aA,A.P)
s(A.aD,A.aj)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bN:"int",dQ:"double",aG:"num",C:"String",bI:"bool",K:"Null",z:"List"},mangledNames:{},types:["~(a)","K(a)","@(@)","@(@,C)","@(C)","~(i?,i?)","r(@)","~(@)","~(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.dk(v.typeUniverse,JSON.parse('{"ar":"I","a6":"I","x":"I","e8":"a","ed":"a","ef":"b","e9":"c","eg":"c","ee":"e","ec":"e","ea":"w","eh":"w","an":{"bI":[]},"n":{"z":["1"],"k":["1"]},"b_":{"n":["1"],"z":["1"],"k":["1"]},"a0":{"aG":[]},"a_":{"bN":[],"aG":[]},"ap":{"aG":[]},"Q":{"C":[]},"Y":{"k":["1"]},"J":{"k":["1"]},"a4":{"J":["2"],"k":["2"],"J.E":"2"},"H":{"O":[]},"ah":{"O":[]},"aw":{"O":[]},"au":{"O":[]},"N":{"O":[]},"a1":{"R":["1","2"],"c5":["1","2"],"aq":["1","2"]},"a2":{"j":["1"],"z":["1"],"k":["1"]},"a3":{"R":["1","2"],"aq":["1","2"]},"R":{"aq":["1","2"]},"b":{"e":[]},"c":{"b":[],"e":[]},"ae":{"b":[],"e":[]},"af":{"b":[],"e":[]},"M":{"b":[],"e":[]},"w":{"e":[]},"a8":{"d2":["1"],"j":["1"],"z":["1"],"k":["1"],"j.E":"1"},"am":{"b":[],"e":[]},"a5":{"j":["e"],"P":["e"],"z":["e"],"by":["e"],"k":["e"],"j.E":"e","P.E":"e"},"at":{"b":[],"e":[]}}'))
A.dj(v.typeUniverse,JSON.parse('{"Y":1,"a2":1,"a3":2,"a9":1}'))
var u={a:"No. 8, Ln. 89, Sec. Jiulong, Zhongxing Rd., Longtan Dist., Taoyuan City 325009 , Taiwan (R.O.C.)"}
var t=(function rtii(){var s=A.bK
return{c:s("r"),h:s("b"),z:s("a"),Z:s("O"),R:s("k<@>"),s:s("n<C>"),b:s("n<@>"),T:s("ao"),g:s("x"),p:s("by<@>"),j:s("z<@>"),f:s("aq<@,@>"),P:s("K"),K:s("i"),N:s("C"),B:s("a6"),U:s("a8<b>"),y:s("bI"),i:s("dQ"),A:s("@"),S:s("bN"),F:s("0&*"),_:s("i*"),O:s("c2<K>?"),d:s("k<r>?"),X:s("i?"),o:s("@(a)?"),H:s("aG")}})();(function constants(){B.i=A.M.prototype
B.p=J.Z.prototype
B.a=J.n.prototype
B.q=J.a_.prototype
B.b=J.a0.prototype
B.r=J.Q.prototype
B.t=J.x.prototype
B.u=J.t.prototype
B.h=J.ar.prototype
B.c=J.a6.prototype
B.d=A.a7.prototype
B.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.j=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.o=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.l=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.n=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.f=function(hooks) { return hooks; }
})();(function staticFields(){$.bg=null
$.c7=null
$.c_=null
$.bZ=null
$.cw=null
$.ct=null
$.cz=null
$.bn=null
$.bs=null
$.bM=null
$.p=A.aF([],A.bK("n<i>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"eb","cB",()=>A.dS("_$dart_dartClosure"))
r($,"eC","bR",()=>{var q=A.G("#text-switch")
q.toString
return q})
r($,"eF","bS",()=>{var q=A.G("#yonndo")
q.toString
return q})
r($,"eA","bQ",()=>{var q=A.G("#simple-introduce")
q.toString
return q})
r($,"ex","cD",()=>{var q=A.G("#about-me")
q.toString
return q})
r($,"eB","cG",()=>{var q=A.G("#summary")
q.toString
return q})
r($,"ez","cF",()=>{var q=A.G("#portfolio")
q.toString
return q})
r($,"eD","cH",()=>{var q=A.G("#working-experience")
q.toString
return q})
r($,"eE","cI",()=>{var q=A.G("#working-experience-share")
q.toString
return q})
r($,"ey","cE",()=>{var q=A.G("#contact")
q.toString
return q})
r($,"eM","bU",()=>A.y(["element",$.bR(),"animate","animate__animated animate__fadeInTopRight","self_classname",""],t.N,t.A))
r($,"eP","bV",()=>A.y(["element",$.bS(),"animate","animate__animated animate__backInLeft","self_classname",""],t.N,t.A))
r($,"eK","bT",()=>A.y(["element",$.bQ(),"animate","animate__animated animate__backInRight","self_classname","card"],t.N,t.A))
r($,"eH","cJ",()=>A.y(["element",$.cD(),"animate","animate__animated animate__slideInRight","self_classname","card"],t.N,t.A))
r($,"eL","cM",()=>A.y(["element",$.cG(),"animate","animate__animated animate__slideInLeft","self_classname","card"],t.N,t.A))
r($,"eJ","cL",()=>A.y(["element",$.cF(),"animate","animate__animated animate__flash","self_classname","card"],t.N,t.A))
r($,"eN","cN",()=>A.y(["element",$.cH(),"animate","animate__animated animate__pulse","self_classname","card"],t.N,t.A))
r($,"eO","cO",()=>A.y(["element",$.cI(),"animate","animate__animated animate__pulse","self_classname","card"],t.N,t.A))
r($,"eI","cK",()=>A.y(["element",$.cE(),"animate","animate__animated animate__pulse","self_classname","card"],t.N,t.A))
r($,"ew","cC",()=>A.aF([$.bU(),$.bV(),$.bT(),$.cJ(),$.cM(),$.cL(),$.cN(),$.cO(),$.cK()],A.bK("n<aq<C,@>>")))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.t,MediaError:J.t,Navigator:J.t,NavigatorConcurrentHardware:J.t,NavigatorUserMediaError:J.t,OverconstrainedError:J.t,PositionError:J.t,GeolocationPositionError:J.t,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLButtonElement:A.c,HTMLCanvasElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.ae,HTMLAreaElement:A.af,HTMLBodyElement:A.M,CDATASection:A.w,CharacterData:A.w,Comment:A.w,ProcessingInstruction:A.w,Text:A.w,CSSStyleDeclaration:A.r,MSStyleCSSProperties:A.r,CSS2Properties:A.r,DOMException:A.aO,MathMLElement:A.b,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b,Element:A.b,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CompositionEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FocusEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,KeyboardEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MouseEvent:A.a,DragEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PointerEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TextEvent:A.a,TouchEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,UIEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,WheelEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,EventTarget:A.ak,HTMLFormElement:A.am,Document:A.e,DocumentFragment:A.e,HTMLDocument:A.e,ShadowRoot:A.e,XMLDocument:A.e,Attr:A.e,DocumentType:A.e,Node:A.e,NodeList:A.a5,RadioNodeList:A.a5,HTMLSelectElement:A.at,Window:A.a7,DOMWindow:A.a7})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.e1
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
