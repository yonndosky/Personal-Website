(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.dr(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.ds(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bj(b)
return new t(c,this)}:function(){if(t===null)t=A.bj(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bj(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={b8:function b8(){},ax:function ax(a){this.a=a},
c1(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
k(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.al(a)
return t},
a9(a){var t,s=$.bA
if(s==null)s=$.bA=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
aB(a){return A.cs(a)},
cs(a){var t,s,r,q
if(a instanceof A.f)return A.m(A.ai(a),null)
t=J.K(a)
if(t===B.p||t===B.u||u.B.b(a)){s=B.e(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.m(A.ai(a),null)},
b_(a,b){if(a==null)J.bq(a)
throw A.d(A.d8(a,b))},
d8(a,b){var t,s="index"
if(!A.bS(b))return new A.L(!0,b,s,null)
t=A.bf(J.bq(a))
if(b<0||b>=t)return new A.av(t,!0,b,s,"Index out of range")
return new A.aC(!0,b,s,"Value not in range")},
d(a){var t,s
if(a==null)a=new A.aA()
t=new Error()
t.dartException=a
s=A.dt
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
dt(){return J.al(this.dartException)},
bo(a){throw A.d(a)},
dq(a){throw A.d(A.b7(a))},
dp(a){if(a==null||typeof a!="object")return J.b5(a)
else return A.a9(a)},
da(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=a.length
for(t=b.$ti,s=t.c,t=t.z[1],r=0;r<g;){q=r+1
p=a[r]
r=q+1
o=a[q]
s.a(p)
t.a(o)
if(typeof p=="string"){n=b.b
if(n==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.b=m
n=m}l=n[p]
if(l==null)n[p]=b.n(p,o)
else l.b=o}else if(typeof p=="number"&&(p&0x3fffffff)===p){k=b.c
if(k==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.c=m
k=m}l=k[p]
if(l==null)k[p]=b.n(p,o)
else l.b=o}else{j=b.d
if(j==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.d=m
j=m}i=J.b5(p)&0x3fffffff
h=j[i]
if(h==null)j[i]=[b.n(p,o)]
else{q=b.G(h,p)
if(q>=0)h[q].b=o
else h.push(b.n(p,o))}}}return b},
dh(a,b,c,d,e,f){u.Z.a(a)
switch(A.bf(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.aK("Unsupported number of arguments for wrapped closure"))},
d7(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.dh)
a.$identity=t
return t},
cp(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.ab().constructor.prototype):Object.create(new A.E(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bv(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cl(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bv(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cl(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cj)}throw A.d("Error in functionType of tearoff")},
cm(a,b,c,d){var t=A.bu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bv(a,b,c,d){var t,s
if(c)return A.co(a,b,d)
t=b.length
s=A.cm(t,d,a,b)
return s},
cn(a,b,c,d){var t=A.bu,s=A.ck
switch(b?-1:a){case 0:throw A.d(new A.aD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
co(a,b,c){var t,s
if($.bs==null)$.bs=A.br("interceptor")
if($.bt==null)$.bt=A.br("receiver")
t=b.length
s=A.cn(t,c,a,b)
return s},
bj(a){return A.cp(a)},
cj(a,b){return A.aM(v.typeUniverse,A.ai(a.a),b)},
bu(a){return a.a},
ck(a){return a.b},
br(a){var t,s,r,q=new A.E("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.d(A.ci("Field name "+a+" not found."))},
dr(a){throw A.d(new A.ap(a))},
dc(a){return v.getIsolateTag(a)},
dO(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
dl(a){var t,s,r,q,p,o=A.aP($.bW.$1(a)),n=$.aU[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aZ[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cM($.bU.$2(a,o))
if(r!=null){n=$.aU[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aZ[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.b2(t)
$.aU[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.aZ[o]=t
return t}if(q==="-"){p=A.b2(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bY(a,t)
if(q==="*")throw A.d(A.bE(o))
if(v.leafTags[o]===true){p=A.b2(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bY(a,t)},
bY(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bn(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
b2(a){return J.bn(a,!1,null,!!a.$idy)},
dn(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.b2(t)
else return J.bn(t,c,null,null)},
df(){if(!0===$.bl)return
$.bl=!0
A.dg()},
dg(){var t,s,r,q,p,o,n,m
$.aU=Object.create(null)
$.aZ=Object.create(null)
A.de()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bZ.$1(p)
if(o!=null){n=A.dn(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
de(){var t,s,r,q,p,o,n=B.j()
n=A.J(B.k,A.J(B.l,A.J(B.f,A.J(B.f,A.J(B.m,A.J(B.n,A.J(B.o(B.e),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bW=new A.aW(q)
$.bU=new A.aX(p)
$.bZ=new A.aY(o)},
J(a,b){return a(b)||b},
z:function z(){},
a1:function a1(){},
ad:function ad(){},
ab:function ab(){},
E:function E(a,b){this.a=a
this.b=b},
aD:function aD(a){this.a=a},
P:function P(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ay:function ay(a,b){this.a=a
this.b=b
this.c=null},
aW:function aW(a){this.a=a},
aX:function aX(a){this.a=a},
aY:function aY(a){this.a=a},
bC(a,b){var t=b.c
return t==null?b.c=A.bd(a,b.y,!0):t},
bB(a,b){var t=b.c
return t==null?b.c=A.U(a,"bw",[b.y]):t},
bD(a){var t=a.x
if(t===6||t===7||t===8)return A.bD(a.y)
return t===11||t===12},
ct(a){return a.at},
aV(a){return A.be(v.typeUniverse,a,!1)},
x(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.x(a,t,c,a0)
if(s===t)return b
return A.bL(a,s,!0)
case 7:t=b.y
s=A.x(a,t,c,a0)
if(s===t)return b
return A.bd(a,s,!0)
case 8:t=b.y
s=A.x(a,t,c,a0)
if(s===t)return b
return A.bK(a,s,!0)
case 9:r=b.z
q=A.W(a,r,c,a0)
if(q===r)return b
return A.U(a,b.y,q)
case 10:p=b.y
o=A.x(a,p,c,a0)
n=b.z
m=A.W(a,n,c,a0)
if(o===p&&m===n)return b
return A.bb(a,o,m)
case 11:l=b.y
k=A.x(a,l,c,a0)
j=b.z
i=A.d2(a,j,c,a0)
if(k===l&&i===j)return b
return A.bJ(a,k,i)
case 12:h=b.z
a0+=h.length
g=A.W(a,h,c,a0)
p=b.y
o=A.x(a,p,c,a0)
if(g===h&&o===p)return b
return A.bc(a,o,g,!0)
case 13:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.an("Attempted to substitute unexpected RTI kind "+d))}},
W(a,b,c,d){var t,s,r,q,p=b.length,o=A.aN(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.x(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
d3(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aN(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.x(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
d2(a,b,c,d){var t,s=b.a,r=A.W(a,s,c,d),q=b.b,p=A.W(a,q,c,d),o=b.c,n=A.d3(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.ae()
t.a=r
t.b=p
t.c=n
return t},
aS(a,b){a[v.arrayRti]=b
return a},
d6(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.dd(t)
return a.$S()}return null},
bX(a,b){var t
if(A.bD(b))if(a instanceof A.z){t=A.d6(a)
if(t!=null)return t}return A.ai(a)},
ai(a){var t
if(a instanceof A.f){t=a.$ti
return t!=null?t:A.bg(a)}if(Array.isArray(a))return A.aO(a)
return A.bg(J.K(a))},
aO(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
dN(a){var t=a.$ti
return t!=null?t:A.bg(a)},
bg(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cU(a,t)},
cU(a,b){var t=a instanceof A.z?a.__proto__.__proto__.constructor:b,s=A.cJ(v.typeUniverse,t.name)
b.$ccache=s
return s},
dd(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.be(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
cT(a){var t,s,r,q,p=this
if(p===u.K)return A.I(p,a,A.cY)
if(!A.t(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.I(p,a,A.d0)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.bS
else if(s===u.i||s===u.H)r=A.cX
else if(s===u.N)r=A.cZ
else r=s===u.y?A.bh:null
if(r!=null)return A.I(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.di)){p.r="$i"+q
if(q==="a7")return A.I(p,a,A.cW)
return A.I(p,a,A.d_)}}else if(t===7)return A.I(p,a,A.cR)
return A.I(p,a,A.cP)},
I(a,b,c){a.b=c
return a.b(b)},
cS(a){var t,s=this,r=A.cO
if(!A.t(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.cN
else if(s===u.K)r=A.cL
else{t=A.Y(s)
if(t)r=A.cQ}s.a=r
return s.a(a)},
aR(a){var t,s=a.x
if(!A.t(a))if(!(a===u._))if(!(a===u.F))if(s!==7)t=s===8&&A.aR(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cP(a){var t=this
if(a==null)return A.aR(t)
return A.e(v.typeUniverse,A.bX(a,t),null,t,null)},
cR(a){if(a==null)return!0
return this.y.b(a)},
d_(a){var t,s=this
if(a==null)return A.aR(s)
t=s.r
if(a instanceof A.f)return!!a[t]
return!!J.K(a)[t]},
cW(a){var t,s=this
if(a==null)return A.aR(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.f)return!!a[t]
return!!J.K(a)[t]},
cO(a){var t,s=this
if(a==null){t=A.Y(s)
if(t)return a}else if(s.b(a))return a
A.bP(a,s)},
cQ(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.bP(a,t)},
bP(a,b){throw A.d(A.cz(A.bF(a,A.bX(a,b),A.m(b,null))))},
bF(a,b,c){var t=A.as(a)
return t+": type '"+A.m(b==null?A.ai(a):b,null)+"' is not a subtype of type '"+c+"'"},
cz(a){return new A.af("TypeError: "+a)},
i(a,b){return new A.af("TypeError: "+A.bF(a,null,b))},
cY(a){return a!=null},
cL(a){if(a!=null)return a
throw A.d(A.i(a,"Object"))},
d0(a){return!0},
cN(a){return a},
bh(a){return!0===a||!1===a},
dB(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.i(a,"bool"))},
dD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.i(a,"bool"))},
dC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.i(a,"bool?"))},
dE(a){if(typeof a=="number")return a
throw A.d(A.i(a,"double"))},
dG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.i(a,"double"))},
dF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.i(a,"double?"))},
bS(a){return typeof a=="number"&&Math.floor(a)===a},
bf(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.i(a,"int"))},
dI(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.i(a,"int"))},
dH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.i(a,"int?"))},
cX(a){return typeof a=="number"},
dJ(a){if(typeof a=="number")return a
throw A.d(A.i(a,"num"))},
dL(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.i(a,"num"))},
dK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.i(a,"num?"))},
cZ(a){return typeof a=="string"},
aP(a){if(typeof a=="string")return a
throw A.d(A.i(a,"String"))},
dM(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.i(a,"String"))},
cM(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.i(a,"String?"))},
d1(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.m(a[r],b)
return t},
bQ(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.aS([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.v(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.b_(a4,k)
n=B.r.J(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.m(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.m(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.m(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.m(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.m(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
m(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.m(a.y,b)
return t}if(m===7){s=a.y
t=A.m(s,b)
r=s.x
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.m(a.y,b)+">"
if(m===9){q=A.d4(a.y)
p=a.z
return p.length>0?q+("<"+A.d1(p,b)+">"):q}if(m===11)return A.bQ(a,b,null)
if(m===12)return A.bQ(a.y,b,a.z)
if(m===13){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b_(b,o)
return b[o]}return"?"},
d4(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cK(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cJ(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.be(a,b,!1)
else if(typeof n=="number"){t=n
s=A.V(a,5,"#")
r=A.aN(t)
for(q=0;q<t;++q)r[q]=s
p=A.U(a,b,r)
o[b]=p
return p}else return n},
cH(a,b){return A.bM(a.tR,b)},
cG(a,b){return A.bM(a.eT,b)},
be(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bI(A.bG(a,null,b,c))
s.set(b,t)
return t},
aM(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bI(A.bG(a,b,c,!0))
r.set(c,s)
return s},
cI(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.bb(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
w(a,b){b.a=A.cS
b.b=A.cT
return b},
V(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.n(null,null)
t.x=b
t.at=c
s=A.w(a,t)
a.eC.set(c,s)
return s},
bL(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.cE(a,b,s,c)
a.eC.set(s,t)
return t},
cE(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.t(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.n(null,null)
r.x=6
r.y=b
r.at=c
return A.w(a,r)},
bd(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cD(a,b,s,c)
a.eC.set(s,t)
return t},
cD(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.t(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.Y(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.F)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.Y(r.y))return r
else return A.bC(a,b)}}q=new A.n(null,null)
q.x=7
q.y=b
q.at=c
return A.w(a,q)},
bK(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cB(a,b,s,c)
a.eC.set(s,t)
return t},
cB(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.t(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.U(a,"bw",[b])
else if(b===u.P||b===u.T)return u.O}r=new A.n(null,null)
r.x=8
r.y=b
r.at=c
return A.w(a,r)},
cF(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.n(null,null)
t.x=13
t.y=b
t.at=r
s=A.w(a,t)
a.eC.set(r,s)
return s},
ag(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
cA(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
U(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.ag(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.n(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.w(a,s)
a.eC.set(q,r)
return r},
bb(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.ag(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.n(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.w(a,p)
a.eC.set(r,o)
return o},
bJ(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.ag(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.ag(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cA(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.n(null,null)
q.x=11
q.y=b
q.z=c
q.at=s
p=A.w(a,q)
a.eC.set(s,p)
return p},
bc(a,b,c,d){var t,s=b.at+("<"+A.ag(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cC(a,b,c,s,d)
a.eC.set(s,t)
return t},
cC(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aN(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.x(a,b,s,0)
n=A.W(a,c,s,0)
return A.bc(a,o,n,c!==n)}}m=new A.n(null,null)
m.x=12
m.y=b
m.z=c
m.at=d
return A.w(a,m)},
bG(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bI(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=A.cv(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=A.bH(a,s,i,h,!1)
else if(r===46)s=A.bH(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(A.v(a.u,a.e,h.pop()))
break
case 94:h.push(A.cF(a.u,h.pop()))
break
case 35:h.push(A.V(a.u,5,"#"))
break
case 64:h.push(A.V(a.u,2,"@"))
break
case 126:h.push(A.V(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
A.ba(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(A.U(q,o,p))
else{n=A.v(q,a.e,o)
switch(n.x){case 11:h.push(A.bc(q,n,p,a.n))
break
default:h.push(A.bb(q,n,p))
break}}break
case 38:A.cw(a,h)
break
case 42:q=a.u
h.push(A.bL(q,A.v(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(A.bd(q,A.v(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(A.bK(q,A.v(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new A.ae()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
A.ba(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(A.bJ(q,A.v(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
A.ba(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
A.cy(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return A.v(a.u,a.e,j)},
cv(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bH(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.cK(t,p.y)[q]
if(o==null)A.bo('No "'+q+'" in "'+A.ct(p)+'"')
d.push(A.aM(t,p,o))}else d.push(q)
return n},
cw(a,b){var t=b.pop()
if(0===t){b.push(A.V(a.u,1,"0&"))
return}if(1===t){b.push(A.V(a.u,4,"1&"))
return}throw A.d(A.an("Unexpected extended operation "+A.k(t)))},
v(a,b,c){if(typeof c=="string")return A.U(a,c,a.sEA)
else if(typeof c=="number")return A.cx(a,b,c)
else return c},
ba(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.v(a,b,c[t])},
cy(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.v(a,b,c[t])},
cx(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.an("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.an("Bad index "+c+" for "+b.h(0)))},
e(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.t(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.t(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(A.e(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.e(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.e(a,b.y,c,d,e)
if(s===6)return A.e(a,b.y,c,d,e)
return s!==7}if(s===6)return A.e(a,b.y,c,d,e)
if(q===6){t=A.bC(a,d)
return A.e(a,b,c,t,e)}if(s===8){if(!A.e(a,b.y,c,d,e))return!1
return A.e(a,A.bB(a,b),c,d,e)}if(s===7){t=A.e(a,u.P,c,d,e)
return t&&A.e(a,b.y,c,d,e)}if(q===8){if(A.e(a,b,c,d.y,e))return!0
return A.e(a,b,c,A.bB(a,d),e)}if(q===7){t=A.e(a,b,c,u.P,e)
return t||A.e(a,b,c,d.y,e)}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.z
o=d.z
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!A.e(a,l,c,k,e)||!A.e(a,k,e,l,c))return!1}return A.bR(a,b.y,c,d.y,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return A.bR(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.cV(a,b,c,d,e)}return!1},
bR(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.e(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.e(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.e(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.e(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.e(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
cV(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aM(a,b,s[p])
return A.bN(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.bN(a,o,null,c,n,e)},
bN(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.e(a,s,d,r,f))return!1}return!0},
Y(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.t(a))if(s!==7)if(!(s===6&&A.Y(a.y)))t=s===8&&A.Y(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
di(a){var t
if(!A.t(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
t(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
bM(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aN(a){return a>0?new Array(a):v.typeUniverse.sEA},
n:function n(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
ae:function ae(){this.c=this.b=this.a=null},
aJ:function aJ(){},
af:function af(a){this.a=a},
h(a,b,c){return b.k("@<0>").D(c).k("by<1,2>").a(A.da(a,new A.P(b.k("@<0>").D(c).k("P<1,2>"))))},
cr(a,b,c){var t,s
if(A.bT(a))return b+"..."+c
t=new A.ac(b)
B.a.v($.r,a)
try{s=t
s.a=A.cu(s.a,a,", ")}finally{if(0>=$.r.length)return A.b_($.r,-1)
$.r.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
bT(a){var t,s
for(t=$.r.length,s=0;s<t;++s)if(a===$.r[s])return!0
return!1},
bz(a){var t,s={}
if(A.bT(a))return"{...}"
t=new A.ac("")
try{B.a.v($.r,a)
t.a+="{"
s.a=!0
a.p(0,new A.az(s,t))
t.a+="}"}finally{if(0>=$.r.length)return A.b_($.r,-1)
$.r.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
R:function R(){},
az:function az(a,b){this.a=a
this.b=b},
H:function H(){},
cq(a){if(a instanceof A.z)return a.h(0)
return"Instance of '"+A.aB(a)+"'"},
cu(a,b,c){var t,s=A.aO(b),r=new J.a0(b,b.length,s.k("a0<1>"))
if(!r.B())return a
if(c.length===0){s=s.c
do{t=r.d
a+=A.k(t==null?s.a(t):t)}while(r.B())}else{t=r.d
a+=A.k(t==null?s.c.a(t):t)
for(s=s.c;r.B();){t=r.d
a=a+c+A.k(t==null?s.a(t):t)}}return a},
as(a){if(typeof a=="number"||A.bh(a)||a==null)return J.al(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cq(a)},
an(a){return new A.am(a)},
ci(a){return new A.L(!1,null,null,a)},
b9(a){return new A.aI(a)},
bE(a){return new A.aH(a)},
b7(a){return new A.ao(a)},
ar:function ar(){},
am:function am(a){this.a=a},
aA:function aA(){},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aI:function aI(a){this.a=a},
aH:function aH(a){this.a=a},
ao:function ao(a){this.a=a},
ap:function ap(a){this.a=a},
aK:function aK(a){this.a=a},
C:function C(){},
f:function f(){},
ac:function ac(a){this.a=a},
X(){var t=document
t.toString
return t},
y(a){return document.querySelector(a)},
c:function c(){},
Z:function Z(){},
a_:function a_(){},
D:function D(){},
aq:function aq(){},
b:function b(){},
a:function a(){},
a2:function a2(){},
a3:function a3(){},
B:function B(){},
aa:function aa(){},
T:function T(){},
bO(a){var t
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.bh(a))return a
if(u.f.b(a))return A.bV(a)
if(u.j.b(a)){t=[]
B.a.p(a,new A.aQ(t))
a=t}return a},
bV(a){var t={}
a.p(0,new A.aT(t))
return t},
aQ:function aQ(a){this.a=a},
aT:function aT(a){this.a=a},
aE:function aE(a,b){this.a=a
this.b=b},
aF:function aF(a){this.a=a},
aG:function aG(){},
at:function at(){},
au:function au(a){this.a=a},
dk(){var t=window
t.toString
B.d.A(t,"resize",new A.b1())},
c0(a){var t,s=document.querySelector(".contact-intstant")
s.toString
t=B.q.O(a,20)
s.setAttribute("cols",t)},
c_(a){var t,s=document.querySelector("#address")
s.toString
if(a>=800)J.l(s,"No. 8, Ln. 89, Sec. Jiulong, Zhongxing Rd., Longtan Dist., Taoyuan City 325009 , Taiwan (R.O.C.)")
else if(a>=700)J.l(s,"Zhongxing Rd. ,Longtan Dist. ,Taoyuan City ,Taiwan")
else{t=J.ah(s)
if(a>=600)t.sC(s,"Longtan Dist. ,Taoyuan City,Taiwan")
else t.sC(s,"Taoyuan City,Taiwan")}},
dj(){var t=window
t.toString
B.d.A(t,"scroll",new A.b0())},
d5(){var t,s,r,q,p,o,n="selector"
for(t=$.c3(),s=0;s<9;++s){r=t[s]
q=J.ch(r.i(0,n))
p=window
p.toString
o="scrollY" in p
o.toString
if(o){p=p.scrollY
p.toString
p=B.b.q(p)}else{p=p.document.documentElement.scrollTop
p.toString
p=B.b.q(p)}if(q-200<=p)J.b6(r.i(0,n),A.k(r.i(0,"self_classname"))+" "+A.k(r.i(0,"animate")))}},
b1:function b1(){},
b0:function b0(){},
ds(a){return A.bo(new A.ax("Field '"+a+"' has been assigned during initialization."))},
dm(){var t,s="selector",r="animate",q=document,p=q.getElementById("colormode-switch")
p.toString
t=q.body
t.toString
new A.at().I()
new A.aE(p,t).H()
t=q.querySelector("#chinese-name")
if(t!=null)J.l(t,$.o().i(0,"chinese_name"))
p=q.querySelector("#english-name")
if(p!=null)J.l(p,$.o().i(0,"english_name"))
p=q.querySelector("#birthday")
if(p!=null)J.l(p,$.o().i(0,"birthday"))
p=q.querySelector("#place-of-birth")
if(p!=null)J.l(p,$.o().i(0,"place_of_birth"))
p=q.querySelector("#sex")
if(p!=null)J.l(p,$.o().i(0,"sex"))
p=q.querySelector("#religion")
if(p!=null)J.l(p,$.o().i(0,"religion"))
p=q.querySelector("#email")
if(p!=null)J.l(p,$.o().i(0,"email"))
p=q.querySelector("#phone-number")
if(p!=null)J.l(p,$.o().i(0,"phone_number"))
p=q.querySelector("#web")
if(p!=null)J.l(p,$.o().i(0,"web"))
p=q.querySelector("#line")
if(p!=null)J.l(p,$.o().i(0,"line"))
p=q.querySelector("#dream")
if(p!=null)J.l(p,$.o().i(0,"vision"))
J.b6($.b3().i(0,s),"card "+A.k($.b3().i(0,r)))
q=q.querySelector(A.aP($.ak().i(0,"selector_id")))
q.toString
q.className=A.k($.ak().i(0,r))
J.b6($.b4().i(0,s),A.k($.b4().i(0,r)))
q=window.innerWidth
q.toString
A.c0(q)
A.c_(q)
A.dk()
A.dj()}},J={
bn(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bk(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.bl==null){A.df()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.bE("Return interceptor for "+A.k(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.aL
if(p==null)p=$.aL=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dl(a)
if(q!=null)return q
if(typeof a=="function")return B.t
t=Object.getPrototypeOf(a)
if(t==null)return B.h
if(t===Object.prototype)return B.h
if(typeof r=="function"){p=$.aL
if(p==null)p=$.aL=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.c,enumerable:false,writable:true,configurable:true})
return B.c}return B.c},
K(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.N.prototype
return J.a6.prototype}if(typeof a=="string")return J.G.prototype
if(a==null)return J.a5.prototype
if(typeof a=="boolean")return J.a4.prototype
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
return a}if(a instanceof A.f)return a
return J.bk(a)},
db(a){if(typeof a=="string")return J.G.prototype
if(a==null)return a
if(a.constructor==Array)return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
return a}if(a instanceof A.f)return a
return J.bk(a)},
ah(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
return a}if(a instanceof A.f)return a
return J.bk(a)},
cg(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).m(a,b)},
bp(a,b,c){return J.ah(a).A(a,b,c)},
b5(a){return J.K(a).gj(a)},
bq(a){return J.db(a).gl(a)},
ch(a){return J.ah(a).gT(a)},
b6(a,b){return J.ah(a).sR(a,b)},
l(a,b){return J.ah(a).sC(a,b)},
al(a){return J.K(a).h(a)},
M:function M(){},
a4:function a4(){},
a5:function a5(){},
p:function p(){},
A:function A(){},
a8:function a8(){},
S:function S(){},
u:function u(){},
j:function j(a){this.$ti=a},
aw:function aw(a){this.$ti=a},
a0:function a0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
O:function O(){},
N:function N(){},
a6:function a6(){},
G:function G(){}},B={}
var w=[A,J,B]
var $={}
A.b8.prototype={}
J.M.prototype={
m(a,b){return a===b},
gj(a){return A.a9(a)},
h(a){return"Instance of '"+A.aB(a)+"'"}}
J.a4.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
$ibi:1}
J.a5.prototype={
m(a,b){return null==b},
h(a){return"null"},
gj(a){return 0}}
J.p.prototype={}
J.A.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.a8.prototype={}
J.S.prototype={}
J.u.prototype={
h(a){var t=a[$.c2()]
if(t==null)return this.M(a)
return"JavaScript function for "+J.al(t)},
$iF:1}
J.j.prototype={
v(a,b){A.aO(a).c.a(b)
if(!!a.fixed$length)A.bo(A.b9("add"))
a.push(b)},
p(a,b){var t,s
A.aO(a).k("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw A.d(A.b7(a))}},
h(a){return A.cr(a,"[","]")},
gj(a){return A.a9(a)},
gl(a){return a.length},
$ibx:1,
$ia7:1}
J.aw.prototype={}
J.a0.prototype={
B(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.dq(r))
t=s.c
if(t>=q){s.sE(null)
return!1}s.sE(r[t]);++s.c
return!0},
sE(a){this.d=this.$ti.k("1?").a(a)}}
J.O.prototype={
q(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.b9(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
O(a,b){return(a|0)===a?a/b|0:this.P(a,b)},
P(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.b9("Result of truncating division is "+A.k(t)+": "+A.k(a)+" ~/ "+b))},
$iaj:1}
J.N.prototype={$ibm:1}
J.a6.prototype={}
J.G.prototype={
J(a,b){return a+b},
h(a){return a},
gj(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gl(a){return a.length},
$iq:1}
A.ax.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.z.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.c1(s==null?"unknown":s)+"'"},
$iF:1,
gU(){return this},
$C:"$1",
$R:1,
$D:null}
A.a1.prototype={$C:"$2",$R:2}
A.ad.prototype={}
A.ab.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.c1(t)+"'"}}
A.E.prototype={
m(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.E))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dp(this.a)^A.a9(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aB(this.a)+"'")}}
A.aD.prototype={
h(a){return"RuntimeError: "+this.a}}
A.P.prototype={
gl(a){return this.a},
i(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.S(b)},
S(a){var t,s,r=this.d
if(r==null)return null
t=r[J.b5(a)&0x3fffffff]
s=this.G(t,a)
if(s<0)return null
return t[s].b},
p(a,b){var t,s,r=this
r.$ti.k("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.d(A.b7(r))
t=t.c}},
n(a,b){var t=this,s=t.$ti,r=new A.ay(s.c.a(a),s.z[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
G(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.cg(a[s].a,b))return s
return-1},
h(a){return A.bz(this)},
$iby:1}
A.ay.prototype={}
A.aW.prototype={
$1(a){return this.a(a)},
$S:2}
A.aX.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.aY.prototype={
$1(a){return this.a(A.aP(a))},
$S:4}
A.n.prototype={
k(a){return A.aM(v.typeUniverse,this,a)},
D(a){return A.cI(v.typeUniverse,this,a)}}
A.ae.prototype={}
A.aJ.prototype={
h(a){return this.a}}
A.af.prototype={}
A.R.prototype={}
A.az.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.k(a)
s.a=t+": "
s.a+=A.k(b)},
$S:5}
A.H.prototype={
gl(a){return this.a},
h(a){return A.bz(this)},
$iQ:1}
A.ar.prototype={}
A.am.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.as(t)
return"Assertion failed"}}
A.aA.prototype={
h(a){return"Throw of null."}}
A.L.prototype={
gu(){return"Invalid argument"+(!this.a?"(s)":"")},
gt(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gu()+r+p
if(!t.a)return o
return o+t.gt()+": "+A.as(t.b)}}
A.aC.prototype={
gu(){return"RangeError"},
gt(){return""}}
A.av.prototype={
gu(){return"RangeError"},
gt(){if(A.bf(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gl(a){return this.f}}
A.aI.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aH.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.ao.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.as(t)+"."}}
A.ap.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.aK.prototype={
h(a){return"Exception: "+this.a}}
A.C.prototype={
gj(a){return A.f.prototype.gj.call(this,this)},
h(a){return"null"}}
A.f.prototype={$if:1,
m(a,b){return this===b},
gj(a){return A.a9(this)},
h(a){return"Instance of '"+A.aB(this)+"'"},
toString(){return this.h(this)}}
A.ac.prototype={
gl(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.c.prototype={}
A.Z.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.a_.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.D.prototype={$iD:1}
A.aq.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.b.prototype={
h(a){var t=a.localName
t.toString
return t},
gT(a){var t=a.offsetTop
t.toString
return B.b.q(t)},
sR(a,b){a.className=b},
$ib:1}
A.a.prototype={$ia:1}
A.a2.prototype={
F(a,b,c,d){this.N(a,b,u.o.a(c),d)},
A(a,b,c){return this.F(a,b,c,null)},
N(a,b,c,d){return a.addEventListener(b,A.d7(u.o.a(c),1),d)}}
A.a3.prototype={
gl(a){return a.length}}
A.B.prototype={
h(a){var t=a.nodeValue
return t==null?this.L(a):t},
sC(a,b){a.textContent=b}}
A.aa.prototype={
gl(a){return a.length}}
A.T.prototype={
K(a,b){a.scrollTo(A.bV(b))
return}}
A.aQ.prototype={
$1(a){this.a.push(A.bO(a))},
$S:1}
A.aT.prototype={
$2(a,b){this.a[a]=A.bO(b)},
$S:6}
A.aE.prototype={
H(){J.bp(this.a,"click",new A.aF(this))
B.i.F(this.b,"mouseover",new A.aG(),!1)},
$0(){return this.H()}}
A.aF.prototype={
$1(a){var t
u.A.a(a)
t=this.a.b
if(t.getAttribute("class")==="colormode-white")t.className="colormode-black"
else t.className="colormode-white"
return null},
$S:7}
A.aG.prototype={
$1(a){u.A.a(a)},
$S:0}
A.at.prototype={
I(){var t,s,r
for(t=$.c4(),s=0;s<6;++s){r=t[s]
J.bp(r.i(0,"element"),"click",new A.au(r))}},
$0(){this.I()}}
A.au.prototype={
$1(a){var t,s=A.aP(this.a.i(0,"selector_id"))
s=document.querySelector(s).offsetTop
s.toString
t=B.b.q(s)
s=window
s.toString
B.d.K(s,A.h(["top",t,"left",0,"behavior","smooth"],u.N,u.K))
return null},
$S:1}
A.b1.prototype={
$1(a){var t
u.A.a(a)
window.innerWidth.toString
t=window.innerWidth
t.toString
A.c0(t)
A.c_(t)},
$S:0}
A.b0.prototype={
$1(a){u.A.a(a)
A.d5()},
$S:0};(function aliases(){var t=J.M.prototype
t.L=t.h
t=J.A.prototype
t.M=t.h})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(A.f,null)
s(A.f,[A.b8,J.M,J.a0,A.ar,A.z,A.H,A.ay,A.n,A.ae,A.aK,A.C,A.ac,A.aE,A.at])
s(J.M,[J.a4,J.a5,J.p,J.j,J.O,J.G])
s(J.p,[J.A,A.a2,A.aq,A.a])
s(J.A,[J.a8,J.S,J.u])
t(J.aw,J.j)
s(J.O,[J.N,J.a6])
s(A.ar,[A.ax,A.aD,A.aJ,A.am,A.aA,A.L,A.aI,A.aH,A.ao,A.ap])
s(A.z,[A.a1,A.ad,A.aW,A.aY,A.aQ,A.aF,A.aG,A.au,A.b1,A.b0])
s(A.ad,[A.ab,A.E])
t(A.R,A.H)
t(A.P,A.R)
s(A.a1,[A.aX,A.az,A.aT])
t(A.af,A.aJ)
s(A.L,[A.aC,A.av])
s(A.a2,[A.B,A.T])
t(A.b,A.B)
t(A.c,A.b)
s(A.c,[A.Z,A.a_,A.D,A.a3,A.aa])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bm:"int",d9:"double",aj:"num",q:"String",bi:"bool",C:"Null",a7:"List"},mangledNames:{},types:["C(a)","~(@)","@(@)","@(@,q)","@(q)","~(f?,f?)","~(@,@)","~(a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cH(v.typeUniverse,JSON.parse('{"a8":"A","S":"A","u":"A","du":"a","dx":"a","dz":"b","dv":"c","dA":"c","a4":{"bi":[]},"j":{"a7":["1"],"bx":["1"]},"aw":{"j":["1"],"a7":["1"],"bx":["1"]},"O":{"aj":[]},"N":{"bm":[],"aj":[]},"a6":{"aj":[]},"G":{"q":[]},"z":{"F":[]},"a1":{"F":[]},"ad":{"F":[]},"ab":{"F":[]},"E":{"F":[]},"P":{"H":["1","2"],"by":["1","2"],"Q":["1","2"]},"R":{"H":["1","2"],"Q":["1","2"]},"H":{"Q":["1","2"]},"c":{"b":[]},"Z":{"b":[]},"a_":{"b":[]},"D":{"b":[]},"a3":{"b":[]},"aa":{"b":[]}}'))
A.cG(v.typeUniverse,JSON.parse('{"R":2}'))
var u=(function rtii(){var t=A.aV
return{A:t("a"),Z:t("F"),s:t("j<q>"),b:t("j<@>"),T:t("a5"),g:t("u"),j:t("a7<@>"),f:t("Q<@,@>"),P:t("C"),K:t("f"),N:t("q"),B:t("S"),y:t("bi"),i:t("d9"),z:t("@"),S:t("bm"),F:t("0&*"),_:t("f*"),O:t("bw<C>?"),X:t("f?"),o:t("@(a)?"),H:t("aj")}})();(function constants(){B.i=A.D.prototype
B.p=J.M.prototype
B.a=J.j.prototype
B.q=J.N.prototype
B.b=J.O.prototype
B.r=J.G.prototype
B.t=J.u.prototype
B.u=J.p.prototype
B.h=J.a8.prototype
B.c=J.S.prototype
B.d=A.T.prototype
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
})();(function staticFields(){$.aL=null
$.bA=null
$.bt=null
$.bs=null
$.bW=null
$.bU=null
$.bZ=null
$.aU=null
$.aZ=null
$.bl=null
$.r=A.aS([],A.aV("j<f>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"dw","c2",()=>A.dc("_$dart_dartClosure"))
s($,"e0","b4",()=>{var r=A.y("#text-switch")
r.toString
return A.h(["selector",r,"animate","animate__animated animate__fadeInTopRight","self_classname",""],u.N,u.z)})
s($,"dZ","b3",()=>{var r=A.y("#simple-introduce")
r.toString
return A.h(["selector",r,"animate","animate__animated animate__backInRight","self_classname","card"],u.N,u.z)})
s($,"dR","c5",()=>{var r=A.y("#about-me")
r.toString
return A.h(["selector",r,"animate","animate__animated animate__slideInRight","self_classname","card"],u.N,u.z)})
s($,"e_","cd",()=>{var r=A.y("#summary")
r.toString
return A.h(["selector",r,"animate","animate__animated animate__slideInLeft","self_classname","card"],u.N,u.z)})
s($,"dY","cc",()=>{var r=A.y("#portfolio")
r.toString
return A.h(["selector",r,"animate","animate__animated animate__flash","self_classname","card"],u.N,u.z)})
s($,"e1","ce",()=>{var r=A.y("#working-experience")
r.toString
return A.h(["selector",r,"animate","animate__animated animate__pulse","self_classname","card"],u.N,u.z)})
s($,"e2","cf",()=>{var r=A.y("#working-experience-share")
r.toString
return A.h(["selector",r,"animate","animate__animated animate__pulse","self_classname","card"],u.N,u.z)})
s($,"dS","c6",()=>{var r=A.y("#contact")
r.toString
return A.h(["selector",r,"animate","animate__animated animate__pulse","self_classname","card"],u.N,u.z)})
s($,"e3","ak",()=>{var r,q=A.X().getElementById("fYonndo")
q.toString
r=A.y("#yonndo")
r.toString
return A.h(["element",q,"selector",r,"selector_id","#yonndo","animate","animate__animated animate__backInLeft","self_classname",""],u.N,u.z)})
s($,"dT","c7",()=>{var r=A.X().getElementById("fabout_me")
r.toString
return A.h(["element",r,"selector_id","#about-me"],u.N,u.z)})
s($,"dX","cb",()=>{var r=A.X().getElementById("fsummary")
r.toString
return A.h(["element",r,"selector_id","#summary"],u.N,u.z)})
s($,"dW","ca",()=>{var r=A.X().getElementById("fportfolio")
r.toString
return A.h(["element",r,"selector_id","#portfolio"],u.N,u.z)})
s($,"dV","c9",()=>{var r=A.X().getElementById("fworking_experience")
r.toString
return A.h(["element",r,"selector_id","#working-experience"],u.N,u.z)})
s($,"dU","c8",()=>{var r=A.X().getElementById("fcontact")
r.toString
return A.h(["element",r,"selector_id","#contact"],u.N,u.z)})
s($,"dP","c3",()=>A.aS([$.b4(),$.ak(),$.b3(),$.c5(),$.cd(),$.cc(),$.ce(),$.cf(),$.c6()],A.aV("j<Q<q,@>>")))
s($,"dQ","c4",()=>A.aS([$.ak(),$.c7(),$.cb(),$.ca(),$.c9(),$.c8()],A.aV("j<Q<q,@>>")))
s($,"e4","o",()=>{var r=u.N
return A.h(["chinese_name","\u9673\u6c38\u52f3","english_name","CHEN YUNG-HSUN","birthday","2022/02/18","place_of_birth","Taiwan","sex","Male","religion","None","email","yonndo0218@gmail.com","phone_number","+886 918910076","line","","web","https://yonndosky.github.io/Personal-Website/","vision","\u5728\u7562\u696d\u4e4b\u5f8c\uff0c\u60f3\u8981\u5728\u570b\u969b\u4f01\u696d\u4e0b\u7684\u516c\u53f8\u5de5\u4f5c\uff0c\u800c\u4e14\u4e5f\u6703\u60f3\u5728\u8d8a\u5357\u6216\u662f\u65e5\u672c\u9577\u671f\u5de5\u4f5c\uff0c\u70ba\u6b64\u5df2\u7d93\u6709\u53d6\u5f97\u4e86\u65e5\u8a9e\u7684\u8b49\u7167\uff0c\u8d8a\u5357\u8a9e\u7684\u8b49\u7167\u4e5f\u6b63\u5728\u7c4c\u5099\u4e2d\uff0c\u800c\u82f1\u6587\u7684\u8a71\u5df2\u7d93\u6709\u8003\u904eToeic\u4e86\uff0c\n      \u800c\u7a0b\u5f0f\u8a9e\u8a00\u7684\u90e8\u5206\u6700\u64c5\u9577\u7684\u662fDart\u6b21\u4e4b\u5c31\u662fPython\uff0c\u800c\u5728\u6b64\u4e4b\u5916\u4e5f\u6709\u770b\u8a31\u591a\u4e0d\u540c\u9818\u57df\u7684\u66f8\u7c4d\uff0c\u4f7f\u81ea\u5df1\u7684\u77e5\u8b58\u91cf\u8c50\u5bcc\u591a\u5143\u3002"],r,r)})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.p,MediaError:J.p,NavigatorUserMediaError:J.p,OverconstrainedError:J.p,PositionError:J.p,GeolocationPositionError:J.p,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLButtonElement:A.c,HTMLCanvasElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLImageElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.Z,HTMLAreaElement:A.a_,HTMLBodyElement:A.D,DOMException:A.aq,MathMLElement:A.b,SVGAElement:A.b,SVGAnimateElement:A.b,SVGAnimateMotionElement:A.b,SVGAnimateTransformElement:A.b,SVGAnimationElement:A.b,SVGCircleElement:A.b,SVGClipPathElement:A.b,SVGDefsElement:A.b,SVGDescElement:A.b,SVGDiscardElement:A.b,SVGEllipseElement:A.b,SVGFEBlendElement:A.b,SVGFEColorMatrixElement:A.b,SVGFEComponentTransferElement:A.b,SVGFECompositeElement:A.b,SVGFEConvolveMatrixElement:A.b,SVGFEDiffuseLightingElement:A.b,SVGFEDisplacementMapElement:A.b,SVGFEDistantLightElement:A.b,SVGFEFloodElement:A.b,SVGFEFuncAElement:A.b,SVGFEFuncBElement:A.b,SVGFEFuncGElement:A.b,SVGFEFuncRElement:A.b,SVGFEGaussianBlurElement:A.b,SVGFEImageElement:A.b,SVGFEMergeElement:A.b,SVGFEMergeNodeElement:A.b,SVGFEMorphologyElement:A.b,SVGFEOffsetElement:A.b,SVGFEPointLightElement:A.b,SVGFESpecularLightingElement:A.b,SVGFESpotLightElement:A.b,SVGFETileElement:A.b,SVGFETurbulenceElement:A.b,SVGFilterElement:A.b,SVGForeignObjectElement:A.b,SVGGElement:A.b,SVGGeometryElement:A.b,SVGGraphicsElement:A.b,SVGImageElement:A.b,SVGLineElement:A.b,SVGLinearGradientElement:A.b,SVGMarkerElement:A.b,SVGMaskElement:A.b,SVGMetadataElement:A.b,SVGPathElement:A.b,SVGPatternElement:A.b,SVGPolygonElement:A.b,SVGPolylineElement:A.b,SVGRadialGradientElement:A.b,SVGRectElement:A.b,SVGScriptElement:A.b,SVGSetElement:A.b,SVGStopElement:A.b,SVGStyleElement:A.b,SVGElement:A.b,SVGSVGElement:A.b,SVGSwitchElement:A.b,SVGSymbolElement:A.b,SVGTSpanElement:A.b,SVGTextContentElement:A.b,SVGTextElement:A.b,SVGTextPathElement:A.b,SVGTextPositioningElement:A.b,SVGTitleElement:A.b,SVGUseElement:A.b,SVGViewElement:A.b,SVGGradientElement:A.b,SVGComponentTransferFunctionElement:A.b,SVGFEDropShadowElement:A.b,SVGMPathElement:A.b,Element:A.b,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CompositionEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FocusEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,KeyboardEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MouseEvent:A.a,DragEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PointerEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TextEvent:A.a,TouchEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,UIEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,WheelEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,EventTarget:A.a2,HTMLFormElement:A.a3,Document:A.B,HTMLDocument:A.B,XMLDocument:A.B,Node:A.B,HTMLSelectElement:A.aa,Window:A.T,DOMWindow:A.T})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,DOMException:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,Document:true,HTMLDocument:true,XMLDocument:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.dm
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
