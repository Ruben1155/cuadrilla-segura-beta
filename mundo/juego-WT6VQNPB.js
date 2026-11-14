var jh=0,yd=1,qh=2;var us=1,$h=2,Ki=3,Xa=0,Zt=1,zn=2,ma=0,Qi=1,Sd=2,Md=3,Ed=4,Wh=5;var pi=100,Xh=101,Yh=102,Jh=103,Zh=104,Kh=200,Qh=201,ep=202,tp=203,Ad=204,Td=205,np=206,ap=207,ip=208,rp=209,sp=210,op=211,lp=212,cp=213,dp=214,vo=0,_o=1,yo=2,Hi=3,So=4,Mo=5,Eo=6,Ao=7,rl=0,up=1,hp=2,Zn=0,wd=1,Cd=2,Rd=3,hs=4,Pd=5,Id=6,Dd=7;var Ld=300,Ya=301,fi=302,sl=303,ol=304,ps=306,Va=1e3,oa=1001,To=1002,Wt=1003,pp=1004;var fs=1005;var Jt=1006,ll=1007;var Ja=1008;var Sn=1009,Nd=1010,Fd=1011,er=1012,cl=1013,Kn=1014,Gn=1015,Qn=1016,dl=1017,ul=1018,tr=1020,Ud=35902,Od=35899,Bd=1021,zd=1022,Hn=1023,la=1026,Za=1027,hl=1028,pl=1029,Ka=1030,fl=1031;var ml=1033,ms=33776,gs=33777,xs=33778,bs=33779,gl=35840,xl=35841,bl=35842,vl=35843,_l=36196,yl=37492,Sl=37496,Ml=37488,El=37489,vs=37490,Al=37491,Tl=37808,wl=37809,Cl=37810,Rl=37811,Pl=37812,Il=37813,Dl=37814,Ll=37815,Nl=37816,Fl=37817,Ul=37818,Ol=37819,Bl=37820,zl=37821,Gl=36492,Hl=36494,kl=36495,Vl=36283,jl=36284,_s=36285,ql=36286;var Or=2300,wo=2301,xo=2302,pd=2303,fd=2400,md=2401,gd=2402;var fp=3200;var ys=0,mp=1,Ca="",Ut="srgb",Br="srgb-linear",zr="linear",Et="srgb";var bo=7680;var gp=519,xp=512,bp=513,vp=514,$l=515,_p=516,yp=517,Wl=518,Sp=519,Mp=35044;var Gd="300 es",Yn=2e3,ki=2001;function b0(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function v0(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Gr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ep(){let a=Gr("canvas");return a.style.display="block",a}var fh={},Vi=null;function Hd(...a){let e="THREE."+a.shift();Vi?Vi("log",e,...a):console.log(e,...a)}function Ap(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Qe(...a){a=Ap(a);let e="THREE."+a.shift();if(Vi)Vi("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function at(...a){a=Ap(a);let e="THREE."+a.shift();if(Vi)Vi("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ui(...a){let e=a.join(" ");e in fh||(fh[e]=!0,Qe(...a))}function Tp(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wp={[vo]:_o,[yo]:Eo,[So]:Ao,[Hi]:Mo,[_o]:vo,[Eo]:yo,[Ao]:So,[Mo]:Hi},ca=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gc=Math.PI/180,Co=180/Math.PI;function Ss(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[a&255]+rn[a>>8&255]+rn[a>>16&255]+rn[a>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function pt(a,e,t){return Math.max(e,Math.min(t,a))}function _0(a,e){return(a%e+e)%e}function Hc(a,e,t){return(1-t)*a+t*e}function wr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xe=class a{static{a.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},da=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let c=n[i+0],l=n[i+1],d=n[i+2],u=n[i+3],h=r[s+0],f=r[s+1],g=r[s+2],v=r[s+3];if(u!==v||c!==h||l!==f||d!==g){let m=c*h+l*f+d*g+u*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),M=Math.sin(b);p=Math.sin(p*b)/M,o=Math.sin(o*b)/M,c=c*p+h*o,l=l*p+f*o,d=d*p+g*o,u=u*p+v*o}else{c=c*p+h*o,l=l*p+f*o,d=d*p+g*o,u=u*p+v*o;let b=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=b,l*=b,d*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,s){let o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],u=r[s],h=r[s+1],f=r[s+2],g=r[s+3];return e[t]=o*g+d*u+c*f-l*h,e[t+1]=c*g+d*h+l*u-o*f,e[t+2]=l*g+d*f+o*h-c*u,e[t+3]=d*g-o*u-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),u=o(r/2),h=c(n/2),f=c(i/2),g=c(r/2);switch(s){case"XYZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"YZX":this._x=h*d*u+l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u-h*f*g;break;case"XZY":this._x=h*d*u-l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u+h*f*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(s-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(d-c)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(c+d)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(s-i)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+s*o+i*l-r*c,this._y=i*d+s*c+r*o-n*l,this._z=r*d+s*l+n*c-i*o,this._w=s*d-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,s=-s,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class a{static{a.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*i-o*n),d=2*(o*t-r*i),u=2*(r*n-s*t);return this.x=t+c*l+s*u-o*d,this.y=n+c*d+o*l-r*u,this.z=i+c*u+r*d-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*s-n*c,this.z=n*o-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new U,mh=new da,st=class a{static{a.prototype.isMatrix3=!0}constructor(e,t,n,i,r,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,c,l)}set(e,t,n,i,r,s,o,c,l){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=s,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],b=i[1],M=i[4],_=i[7],A=i[2],E=i[5],T=i[8];return r[0]=s*v+o*b+c*A,r[3]=s*m+o*M+c*E,r[6]=s*p+o*_+c*T,r[1]=l*v+d*b+u*A,r[4]=l*m+d*M+u*E,r[7]=l*p+d*_+u*T,r[2]=h*v+f*b+g*A,r[5]=h*m+f*M+g*E,r[8]=h*p+f*_+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*s*d-t*o*l-n*r*d+n*o*c+i*r*l-i*s*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*s-o*l,h=o*c-d*r,f=l*r-s*c,g=t*u+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(i*l-d*n)*v,e[2]=(o*n-i*s)*v,e[3]=h*v,e[4]=(d*t-i*c)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(s*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-i*l,i*c,-i*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vc.makeScale(e,t)),this}rotate(e){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vc.makeRotation(-e)),this}translate(e,t){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vc=new st,gh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){let a={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Et&&(i.r=Aa(i.r),i.g=Aa(i.g),i.b=Aa(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Et&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ca?zr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Br]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:gh,fromXYZ:xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:gh,fromXYZ:xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),a}var ft=y0();function Aa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Gi(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Ti,Ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=Gr("canvas")),Ti.width=e.width,Ti.height=e.height;let i=Ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Aa(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Aa(t[n]/255)*255):t[n]=Aa(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},S0=0,ji=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(jc(i[s].image)):r.push(jc(i[s]))}else r=jc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function jc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ro.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var M0=0,qc=new U,fn=class a extends ca{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=oa,i=oa,r=Jt,s=Ja,o=Hn,c=Sn,l=a.DEFAULT_ANISOTROPY,d=Ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ss(),this.name="",this.source=new ji(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case oa:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case oa:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Ld;fn.DEFAULT_ANISOTROPY=1;var Nt=class a{static{a.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,_=(f+1)/2,A=(p+1)/2,E=(d+h)/4,T=(u+v)/4,x=(g+m)/4;return M>_&&M>A?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=T/n):_>A?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=x/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=x/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(h-d)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Po=class extends ca{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new fn(i),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ji(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Po{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hr=class extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var _t=class a{static{a.prototype.isMatrix4=!0}constructor(e,t,n,i,r,s,o,c,l,d,u,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,c,l,d,u,h,f,g,v,m)}set(e,t,n,i,r,s,o,c,l,d,u,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),s=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=s*d,f=s*u,g=o*d,v=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=h-v*l,t[9]=-o*c,t[2]=v-h*l,t[6]=g+f*l,t[10]=s*c}else if(e.order==="YXZ"){let h=c*d,f=c*u,g=l*d,v=l*u;t[0]=h+v*o,t[4]=g*o-f,t[8]=s*l,t[1]=s*u,t[5]=s*d,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=s*c}else if(e.order==="ZXY"){let h=c*d,f=c*u,g=l*d,v=l*u;t[0]=h-v*o,t[4]=-s*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*d,t[9]=v-h*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){let h=s*d,f=s*u,g=o*d,v=o*u;t[0]=c*d,t[4]=g*l-f,t[8]=h*l+v,t[1]=c*u,t[5]=v*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){let h=s*c,f=s*l,g=o*c,v=o*l;t[0]=c*d,t[4]=v-h*u,t[8]=g*u+f,t[1]=u,t[5]=s*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*u+g,t[10]=h-v*u}else if(e.order==="XZY"){let h=s*c,f=s*l,g=o*c,v=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+v,t[5]=s*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,A0)}lookAt(e,t,n){let i=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Oa.crossVectors(n,An),Oa.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Oa.crossVectors(n,An)),Oa.normalize(),Xs.crossVectors(An,Oa),i[0]=Oa.x,i[4]=Xs.x,i[8]=An.x,i[1]=Oa.y,i[5]=Xs.y,i[9]=An.y,i[2]=Oa.z,i[6]=Xs.z,i[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],M=n[7],_=n[11],A=n[15],E=i[0],T=i[4],x=i[8],S=i[12],w=i[1],D=i[5],F=i[9],P=i[13],I=i[2],N=i[6],B=i[10],q=i[14],k=i[3],V=i[7],H=i[11],te=i[15];return r[0]=s*E+o*w+c*I+l*k,r[4]=s*T+o*D+c*N+l*V,r[8]=s*x+o*F+c*B+l*H,r[12]=s*S+o*P+c*q+l*te,r[1]=d*E+u*w+h*I+f*k,r[5]=d*T+u*D+h*N+f*V,r[9]=d*x+u*F+h*B+f*H,r[13]=d*S+u*P+h*q+f*te,r[2]=g*E+v*w+m*I+p*k,r[6]=g*T+v*D+m*N+p*V,r[10]=g*x+v*F+m*B+p*H,r[14]=g*S+v*P+m*q+p*te,r[3]=b*E+M*w+_*I+A*k,r[7]=b*T+M*D+_*N+A*V,r[11]=b*x+M*F+_*B+A*H,r[15]=b*S+M*P+_*q+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],b=c*f-l*h,M=o*f-l*u,_=o*h-c*u,A=s*f-l*d,E=s*h-c*d,T=s*u-o*d;return t*(v*b-m*M+p*_)-n*(g*b-m*A+p*E)+i*(g*M-v*A+p*T)-r*(g*_-v*E+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],s=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(s*d-o*l)-n*(r*d-o*c)+i*(r*l-s*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=t*o-n*s,M=t*c-i*s,_=t*l-r*s,A=n*c-i*o,E=n*l-r*o,T=i*l-r*c,x=d*v-u*g,S=d*m-h*g,w=d*p-f*g,D=u*m-h*v,F=u*p-f*v,P=h*p-f*m,I=b*P-M*F+_*D+A*w-E*S+T*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/I;return e[0]=(o*P-c*F+l*D)*N,e[1]=(i*F-n*P-r*D)*N,e[2]=(v*T-m*E+p*A)*N,e[3]=(h*E-u*T-f*A)*N,e[4]=(c*w-s*P-l*S)*N,e[5]=(t*P-i*w+r*S)*N,e[6]=(m*_-g*T-p*M)*N,e[7]=(d*T-h*_+f*M)*N,e[8]=(s*F-o*w+l*x)*N,e[9]=(n*w-t*F-r*x)*N,e[10]=(g*E-v*_+p*b)*N,e[11]=(u*_-d*E-f*b)*N,e[12]=(o*S-s*D-c*x)*N,e[13]=(t*D-n*S+i*x)*N,e[14]=(v*M-g*A-m*b)*N,e[15]=(d*A-u*M+h*b)*N,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,l=r*s,d=r*o;return this.set(l*s+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*s,0,l*c-i*o,d*c+i*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,l=r+r,d=s+s,u=o+o,h=r*l,f=r*d,g=r*u,v=s*d,m=s*u,p=o*u,b=c*l,M=c*d,_=c*u,A=n.x,E=n.y,T=n.z;return i[0]=(1-(v+p))*A,i[1]=(f+_)*A,i[2]=(g-M)*A,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(h+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+M)*T,i[9]=(m-b)*T,i[10]=(1-(h+v))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=wi.set(i[0],i[1],i[2]).length(),o=wi.set(i[4],i[5],i[6]).length(),c=wi.set(i[8],i[9],i[10]).length();r<0&&(s=-s),qn.copy(this);let l=1/s,d=1/o,u=1/c;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=d,qn.elements[5]*=d,qn.elements[6]*=d,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,s,o=Yn,c=!1){let l=this.elements,d=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),g,v;if(c)g=r/(s-r),v=s*r/(s-r);else if(o===Yn)g=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===ki)g=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=Yn,c=!1){let l=this.elements,d=2/(t-e),u=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i),g,v;if(c)g=1/(s-r),v=s/(s-r);else if(o===Yn)g=-2/(s-r),v=-(s+r)/(s-r);else if(o===ki)g=-1/(s-r),v=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wi=new U,qn=new _t,E0=new U(0,0,0),A0=new U(1,1,1),Oa=new U,Xs=new U,An=new U,bh=new _t,vh=new da,ua=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],s=i[4],o=i[8],c=i[1],l=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ua.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},T0=0,_h=new U,Ci=new da,_a=new _t,Ys=new U,Cr=new U,w0=new U,C0=new da,yh=new U(1,0,0),Sh=new U(0,1,0),Mh=new U(0,0,1),Eh={type:"added"},R0={type:"removed"},Ri={type:"childadded",child:null},$c={type:"childremoved",child:null},xt=class a extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new U,t=new ua,n=new da,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new st}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Cr,Ys,this.up):_a.lookAt(Ys,Cr,this.up),this.quaternion.setFromRotationMatrix(_a),i&&(_a.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(_a),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eh),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,w0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=s(e.geometries),c=s(e.materials),l=s(e.textures),d=s(e.images),u=s(e.shapes),h=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xt.DEFAULT_UP=new U(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ot=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},P0={type:"move"},qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Wc(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=_0(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Wc(s,r,e+1/3),this.g=Wc(s,r,e),this.b=Wc(s,r,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=Cp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ft.workingToColorSpace(sn.copy(this),e),Math.round(pt(sn.r*255,0,255))*65536+Math.round(pt(sn.g*255,0,255))*256+Math.round(pt(sn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,s=Math.max(n,i,r),o=Math.min(n,i,r),c,l,d=(o+s)/2;if(o===s)c=0,l=0;else{let u=s-o;switch(l=d<=.5?u/(s+o):u/(2-s-o),s){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Ut){ft.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ba),this.setHSL(Ba.h+e,Ba.s+t,Ba.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ba),e.getHSL(Js);let n=Hc(Ba.h,Js.h,t),i=Hc(Ba.s,Js.s,t),r=Hc(Ba.l,Js.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Be;Be.NAMES=Cp;var Vr=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hi=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new U,ya=new U,Xc=new U,Sa=new U,Pi=new U,Ii=new U,Ah=new U,Yc=new U,Jc=new U,Zc=new U,Kc=new Nt,Qc=new Nt,ed=new Nt,ka=class a{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$n.subVectors(i,t),ya.subVectors(n,t),Xc.subVectors(e,t);let s=$n.dot($n),o=$n.dot(ya),c=$n.dot(Xc),l=ya.dot(ya),d=ya.dot(Xc),u=s*l-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(l*c-o*d)*h,g=(s*d-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,t,n,i,r,s,o,c){return this.getBarycoord(e,t,n,i,Sa)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sa.x),c.addScaledVector(s,Sa.y),c.addScaledVector(o,Sa.z),c)}static getInterpolatedAttribute(e,t,n,i,r,s){return Kc.setScalar(0),Qc.setScalar(0),ed.setScalar(0),Kc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Kc,r.x),s.addScaledVector(Qc,r.y),s.addScaledVector(ed,r.z),s}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),ya.subVectors(e,t),$n.cross(ya).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),$n.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,s,o;Pi.subVectors(i,n),Ii.subVectors(r,n),Yc.subVectors(e,n);let c=Pi.dot(Yc),l=Ii.dot(Yc);if(c<=0&&l<=0)return t.copy(n);Jc.subVectors(e,i);let d=Pi.dot(Jc),u=Ii.dot(Jc);if(d>=0&&u<=d)return t.copy(i);let h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return s=c/(c-d),t.copy(n).addScaledVector(Pi,s);Zc.subVectors(e,r);let f=Pi.dot(Zc),g=Ii.dot(Zc);if(g>=0&&f<=g)return t.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ii,o);let m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Ah.subVectors(r,i),o=(u-d)/(u-d+(f-g)),t.copy(i).addScaledVector(Ah,o);let p=1/(m+v+h);return s=v*p,o=h*p,t.copy(n).addScaledVector(Pi,s).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ha=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Wn):Wn.fromBufferAttribute(r,s),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Ks.subVectors(this.max,Rr),Di.subVectors(e.a,Rr),Li.subVectors(e.b,Rr),Ni.subVectors(e.c,Rr),za.subVectors(Li,Di),Ga.subVectors(Ni,Li),oi.subVectors(Di,Ni);let t=[0,-za.z,za.y,0,-Ga.z,Ga.y,0,-oi.z,oi.y,za.z,0,-za.x,Ga.z,0,-Ga.x,oi.z,0,-oi.x,-za.y,za.x,0,-Ga.y,Ga.x,0,-oi.y,oi.x,0];return!td(t,Di,Li,Ni,Ks)||(t=[1,0,0,0,1,0,0,0,1],!td(t,Di,Li,Ni,Ks))?!1:(Qs.crossVectors(za,Ga),t=[Qs.x,Qs.y,Qs.z],td(t,Di,Li,Ni,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ma=[new U,new U,new U,new U,new U,new U,new U,new U],Wn=new U,Zs=new ha,Di=new U,Li=new U,Ni=new U,za=new U,Ga=new U,oi=new U,Rr=new U,Ks=new U,Qs=new U,li=new U;function td(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){li.fromArray(a,r);let o=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),c=e.dot(li),l=t.dot(li),d=n.dot(li);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var kt=new U,eo=new Xe,I0=0,gt=class extends ca{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mp,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var jr=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qr=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},D0=new ha,Pr=new U,nd=new U,Ta=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):D0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(nd)),this.expandByPoint(Pr.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},L0=0,Fn=new _t,ad=new xt,Fi=new U,Tn=new ha,Ir=new ha,$t=new U,mt=class a extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?qr:jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Tn.min,Ir.min),Tn.expandByPoint($t),$t.addVectors(Tn.max,Ir.max),Tn.expandByPoint($t)):(Tn.expandByPoint(Ir.min),Tn.expandByPoint(Ir.max))}Tn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)$t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared($t));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)$t.fromBufferAttribute(o,l),c&&(Fi.fromBufferAttribute(e,l),$t.add(Fi)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new U,c[x]=new U;let l=new U,d=new U,u=new U,h=new Xe,f=new Xe,g=new Xe,v=new U,m=new U;function p(x,S,w){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,w),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,w),d.sub(l),u.sub(l),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(D),o[x].add(v),o[S].add(v),o[w].add(v),c[x].add(m),c[S].add(m),c[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,S=b.length;x<S;++x){let w=b[x],D=w.start,F=w.count;for(let P=D,I=D+F;P<I;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new U,_=new U,A=new U,E=new U;function T(x){A.fromBufferAttribute(i,x),E.copy(A);let S=o[x];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),_.crossVectors(E,S);let D=_.dot(c[x])<0?-1:1;s.setXYZW(x,M.x,M.y,M.z,D)}for(let x=0,S=b.length;x<S;++x){let w=b[x],D=w.start,F=w.count;for(let P=D,I=D+F;P<I;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new U,r=new U,s=new U,o=new U,c=new U,l=new U,d=new U,u=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),d.subVectors(s,r),u.subVectors(i,r),d.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,r),u.subVectors(i,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,d=o.itemSize,u=o.normalized,h=new l.constructor(c.length*d),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*d;for(let p=0;p<d;p++)h[g++]=l[f++]}return new gt(h,d,u)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){let h=l[d],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){let f=l[u];d.push(f.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let d=i[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],u=r[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,d=s.length;l<d;l++){let u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var id=new U,N0=new U,F0=new st,Xn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=id.subVectors(n,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(id),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||F0.getNormalMatrix(e),i=this.coplanarPoint(id).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},U0=0,pa=class extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Qi,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Td,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let c=r[o];delete c.metadata,s.push(c)}return s}if(t){let r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ea=new U,rd=new U,to=new U,no=new U,$r=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ea.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,t),Ea.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rd.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),no.copy(this.origin).sub(rd);let r=e.distanceTo(t)*.5,s=-this.direction.dot(to),o=no.dot(this.direction),c=-no.dot(to),l=no.lengthSq(),d=Math.abs(1-s*s),u,h,f,g;if(d>0)if(u=s*c-o,h=s*o-c,g=r*d,u>=0)if(h>=-g)if(h<=g){let v=1/d;u*=v,h*=v,f=u*(u+s*h+2*o)+h*(s*u+h+2*c)+l}else h=r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-s*r+o)),h=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(u=Math.max(0,-(s*r+o)),h=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+h*(h+2*c)+l);else h=s>0?-r:r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rd).addScaledVector(to,h),f}intersectSphere(e,t){if(e.radius<0)return null;Ea.subVectors(e.center,this.origin);let n=Ea.dot(this.direction),i=Ea.dot(Ea)-n*n,r=e.radius*e.radius;if(i>r)return null;let s=Math.sqrt(r-i),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,c,l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,t,n,i,r){let s=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,u=e.x-s.x,h=e.y-s.y,f=e.z-s.z,g=t.x-s.x,v=t.y-s.y,m=t.z-s.z,p=n.x-s.x,b=n.y-s.y,M=n.z-s.z,_=Math.abs(c),A=Math.abs(l),E=Math.abs(d),T,x,S,w,D,F,P,I,N,B,q,k;if(_>=A&&_>=E?(S=c,F=u,N=g,k=p,c>=0?(T=l,x=d,w=h,D=f,P=v,I=m,B=b,q=M):(T=d,x=l,w=f,D=h,P=m,I=v,B=M,q=b)):A>=E?(S=l,F=h,N=v,k=b,l>=0?(T=d,x=c,w=f,D=u,P=m,I=g,B=M,q=p):(T=c,x=d,w=u,D=f,P=g,I=m,B=p,q=M)):(S=d,F=f,N=m,k=M,d>=0?(T=c,x=l,w=u,D=h,P=g,I=v,B=p,q=b):(T=l,x=c,w=h,D=u,P=v,I=g,B=b,q=p)),S===0)return null;let V=T/S,H=x/S,te=1/S,ge=w-V*F,_e=D-H*F,He=P-V*N,Fe=I-H*N,Z=B-V*k,G=q-H*k,X=Z*Fe-G*He,he=ge*G-_e*Z,Me=He*_e-Fe*ge;if(i){if(X<0||he<0||Me<0)return null}else if((X<0||he<0||Me<0)&&(X>0||he>0||Me>0))return null;let fe=X+he+Me;if(fe===0)return null;let ye=te*(X*F+he*N+Me*k);return(fe>0?ye<0:ye>0)?null:this.at(ye/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Th=new _t,ci=new $r,ao=new Ta,wh=new U,io=new U,ro=new U,so=new U,sd=new U,oo=new U,Ch=new U,lo=new U,Ne=class extends xt{constructor(e=new mt,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],u=r[c];d!==0&&(sd.fromBufferAttribute(u,e),s?oo.addScaledVector(sd,d):oo.addScaledVector(sd.sub(t),d))}t.add(oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(ao.containsPoint(ci.origin)===!1&&(ci.intersectSphere(ao,wh)===null||ci.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Th.copy(r).invert(),ci.copy(e.ray).applyMatrix4(Th),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let i,r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=s[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,A=M;_<A;_+=3){let E=o.getX(_),T=o.getX(_+1),x=o.getX(_+2);i=co(this,p,e,n,l,d,u,E,T,x),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);i=co(this,s,e,n,l,d,u,b,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=s[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,A=M;_<A;_+=3){let E=_,T=_+1,x=_+2;i=co(this,p,e,n,l,d,u,E,T,x),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=m,M=m+1,_=m+2;i=co(this,s,e,n,l,d,u,b,M,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function O0(a,e,t,n,i,r,s,o){let c;if(e.side===Zt?c=n.intersectTriangle(s,r,i,!0,o):c=n.intersectTriangle(i,r,s,e.side===Xa,o),c===null)return null;lo.copy(o),lo.applyMatrix4(a.matrixWorld);let l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:a}}function co(a,e,t,n,i,r,s,o,c,l){a.getVertexPosition(o,io),a.getVertexPosition(c,ro),a.getVertexPosition(l,so);let d=O0(a,e,t,n,io,ro,so,Ch);if(d){let u=new U;ka.getBarycoord(Ch,io,ro,so,u),i&&(d.uv=ka.getInterpolatedAttribute(i,o,c,l,u,new Xe)),r&&(d.uv1=ka.getInterpolatedAttribute(r,o,c,l,u,new Xe)),s&&(d.normal=ka.getInterpolatedAttribute(s,o,c,l,u,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new U,materialIndex:0};ka.getNormal(io,ro,so,h.normal),d.face=h,d.barycoord=u}return d}var Wr=class extends fn{constructor(e=null,t=1,n=1,i,r,s,o,c,l=Wt,d=Wt,u,h){super(null,s,o,c,l,d,i,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $i=class extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ui=new _t,Rh=new _t,uo=[],Ph=new ha,B0=new _t,Dr=new Ne,Lr=new Ta,Lt=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,B0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ha),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),Ph.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Ph)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ta),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),Lr.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[s+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ui),Rh.multiplyMatrices(n,Ui),Dr.matrixWorld=Rh,Dr.raycast(e,uo);for(let s=0,o=uo.length;s<o;s++){let c=uo[s];c.instanceId=r,c.object=this,t.push(c)}uo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(i*this.count),i,this.count,hl,Gn));let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<n.length;l++)s+=n[l];let o=this.geometry.morphTargetsRelative?1:1-s,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},di=new Ta,z0=new Xe(.5,.5),ho=new U,Wi=class{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,r=new Xn,s=new Xn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let i=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],M=r[13],_=r[14],A=r[15];if(i[0].setComponents(l-s,f-d,p-g,A-b).normalize(),i[1].setComponents(l+s,f+d,p+g,A+b).normalize(),i[2].setComponents(l+o,f+u,p+v,A+M).normalize(),i[3].setComponents(l-o,f-u,p-v,A-M).normalize(),n)i[4].setComponents(c,h,m,_).normalize(),i[5].setComponents(l-c,f-h,p-m,A-_).normalize();else if(i[4].setComponents(l-c,f-h,p-m,A-_).normalize(),t===Yn)i[5].setComponents(l+c,f+h,p+m,A+_).normalize();else if(t===ki)i[5].setComponents(c,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);let t=z0.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Un=class extends pa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Do=new U,Lo=new U,Ih=new _t,Nr=new $r,po=new Ta,od=new U,Dh=new U,No=class extends xt{constructor(e=new mt,t=new Un){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Do.fromBufferAttribute(t,i-1),Lo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Do.distanceTo(Lo);e.setAttribute("lineDistance",new tt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;Ih.copy(i).invert(),Nr.copy(e.ray).applyMatrix4(Ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let v=f,m=g-1;v<m;v+=l){let p=d.getX(v),b=d.getX(v+1),M=fo(this,e,Nr,c,p,b,v);M&&t.push(M)}if(this.isLineLoop){let v=d.getX(g-1),m=d.getX(f),p=fo(this,e,Nr,c,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let v=f,m=g-1;v<m;v+=l){let p=fo(this,e,Nr,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=fo(this,e,Nr,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fo(a,e,t,n,i,r,s){let o=a.geometry.attributes.position;if(Do.fromBufferAttribute(o,i),Lo.fromBufferAttribute(o,r),t.distanceSqToSegment(Do,Lo,od,Dh)>n)return;od.applyMatrix4(a.matrixWorld);let l=e.ray.origin.distanceTo(od);if(!(l<e.near||l>e.far))return{distance:l,point:Dh.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}var Lh=new U,Nh=new U,Jn=class extends No{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Lh.fromBufferAttribute(t,i),Nh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lh.distanceTo(Nh);e.setAttribute("lineDistance",new tt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xr=class extends fn{constructor(e=[],t=Ya,n,i,r,s,o,c,l,d){super(e,t,n,i,r,s,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},On=class extends fn{constructor(e,t,n,i,r,s,o,c,l){super(e,t,n,i,r,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ja=class extends fn{constructor(e,t,n=Kn,i,r,s,o=Wt,c=Wt,l,d=la,u=1){if(d!==la&&d!==Za)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,i,r,s,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ji(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fo=class extends ja{constructor(e,t=Kn,n=Ya,i,r,s=Wt,o=Wt,c,l=la){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,i,r,s,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yr=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ce=class a extends mt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let c=[],l=[],d=[],u=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(u,2));function g(v,m,p,b,M,_,A,E,T,x,S){let w=_/T,D=A/x,F=_/2,P=A/2,I=E/2,N=T+1,B=x+1,q=0,k=0,V=new U;for(let H=0;H<B;H++){let te=H*D-P;for(let ge=0;ge<N;ge++){let _e=ge*w-F;V[v]=_e*b,V[m]=te*M,V[p]=I,l.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[p]=E>0?1:-1,d.push(V.x,V.y,V.z),u.push(ge/T),u.push(1-H/x),q+=1}}for(let H=0;H<x;H++)for(let te=0;te<T;te++){let ge=h+te+N*H,_e=h+te+N*(H+1),He=h+(te+1)+N*(H+1),Fe=h+(te+1)+N*H;c.push(ge,_e,Fe),c.push(_e,He,Fe),k+=6}o.addGroup(f,k,S),f+=k,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Xi=class a extends mt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],o=[],c=[],l=[],d=t/2,u=Math.PI/2*e,h=t,f=2*u+h,g=n*2+r,v=i+1,m=new U,p=new U;for(let b=0;b<=g;b++){let M=0,_=0,A=0,E=0;if(b<=n){let S=b/n,w=S*Math.PI/2;_=-d-e*Math.cos(w),A=e*Math.sin(w),E=-e*Math.cos(w),M=S*u}else if(b<=n+r){let S=(b-n)/r;_=-d+S*t,A=e,E=0,M=u+S*h}else{let S=(b-n-r)/n,w=S*Math.PI/2;_=d+e*Math.sin(w),A=e*Math.cos(w),E=e*Math.sin(w),M=u+h+S*u}let T=Math.max(0,Math.min(1,M/f)),x=0;b===0?x=.5/i:b===g&&(x=-.5/i);for(let S=0;S<=i;S++){let w=S/i,D=w*Math.PI*2,F=Math.sin(D),P=Math.cos(D);p.x=-A*P,p.y=_,p.z=A*F,o.push(p.x,p.y,p.z),m.set(-A*P,E,A*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(w+x,T)}if(b>0){let S=(b-1)*v;for(let w=0;w<i;w++){let D=S+w,F=S+w+1,P=b*v+w,I=b*v+w+1;s.push(D,F,P),s.push(F,I,P)}}}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Jr=class a extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],s=[],o=[],c=[],l=new U,d=new Xe;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),s.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(s[h]/e+1)/2,d.y=(s[h+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},At=class a extends mt{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let d=[],u=[],h=[],f=[],g=0,v=[],m=n/2,p=0;b(),s===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function b(){let _=new U,A=new U,E=0,T=(t-e)/n;for(let x=0;x<=r;x++){let S=[],w=x/r,D=w*(t-e)+e;for(let F=0;F<=i;F++){let P=F/i,I=P*c+o,N=Math.sin(I),B=Math.cos(I);A.x=D*N,A.y=-w*n+m,A.z=D*B,u.push(A.x,A.y,A.z),_.set(N,T,B).normalize(),h.push(_.x,_.y,_.z),f.push(P,1-w),S.push(g++)}v.push(S)}for(let x=0;x<i;x++)for(let S=0;S<r;S++){let w=v[S][x],D=v[S+1][x],F=v[S+1][x+1],P=v[S][x+1];(e>0||S!==0)&&(d.push(w,D,P),E+=3),(t>0||S!==r-1)&&(d.push(D,F,P),E+=3)}l.addGroup(p,E,0),p+=E}function M(_){let A=g,E=new Xe,T=new U,x=0,S=_===!0?e:t,w=_===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*w,0),h.push(0,w,0),f.push(.5,.5),g++;let D=g;for(let F=0;F<=i;F++){let I=F/i*c+o,N=Math.cos(I),B=Math.sin(I);T.x=S*B,T.y=m*w,T.z=S*N,u.push(T.x,T.y,T.z),h.push(0,w,0),E.x=N*.5+.5,E.y=B*.5*w+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){let P=A+F,I=D+F;_===!0?d.push(I,I+1,P):d.push(I+1,I,P),x+=3}l.addGroup(p,x,_===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zr=class a extends At{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Uo=class a extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],s=[];o(i),l(n),d(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let M=new U,_=new U,A=new U;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],_),f(t[E+2],A),c(M,_,A,b)}function c(b,M,_,A){let E=A+1,T=[];for(let x=0;x<=E;x++){T[x]=[];let S=b.clone().lerp(_,x/E),w=M.clone().lerp(_,x/E),D=E-x;for(let F=0;F<=D;F++)F===0&&x===E?T[x][F]=S:T[x][F]=S.clone().lerp(w,F/D)}for(let x=0;x<E;x++)for(let S=0;S<2*(E-x)-1;S++){let w=Math.floor(S/2);S%2===0?(h(T[x][w+1]),h(T[x+1][w]),h(T[x][w])):(h(T[x][w+1]),h(T[x+1][w+1]),h(T[x+1][w]))}}function l(b){let M=new U;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(b),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function d(){let b=new U;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let _=m(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;s.push(_,1-A)}g(),u()}function u(){for(let b=0;b<s.length;b+=6){let M=s[b+0],_=s[b+2],A=s[b+4],E=Math.max(M,_,A),T=Math.min(M,_,A);E>.9&&T<.1&&(M<.2&&(s[b+0]+=1),_<.2&&(s[b+2]+=1),A<.2&&(s[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function f(b,M){let _=b*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){let b=new U,M=new U,_=new U,A=new U,E=new Xe,T=new Xe,x=new Xe;for(let S=0,w=0;S<r.length;S+=9,w+=6){b.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),E.set(s[w+0],s[w+1]),T.set(s[w+2],s[w+3]),x.set(s[w+4],s[w+5]),A.copy(b).add(M).add(_).divideScalar(3);let D=m(A);v(E,w+0,b,D),v(T,w+2,M,D),v(x,w+4,_,D)}}function v(b,M,_,A){A<0&&b.x===1&&(s[M]=b.x-1),_.x===0&&_.z===0&&(s[M]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,s;t?s=t:s=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-s,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===s)return i/(r-1);let d=n[i],h=n[i+1]-d,f=(s-d)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),c=t||(s.isVector2?new Xe:new U);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,i=[],r=[],s=[],o=new U,c=new _t;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new U)}r[0]=new U,s[0]=new U;let l=Number.MAX_VALUE,d=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=l&&(l=d,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(pt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(pt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),s[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Kr=class extends Bn{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Xe){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oo=class extends Kr{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function kd(){let a=0,e=0,t=0,n=0;function i(r,s,o,c){a=r,e=o,t=-3*r+3*s-2*o-c,n=2*r-2*s+o+c}return{initCatmullRom:function(r,s,o,c,l){i(s,o,l*(o-r),l*(c-s))},initNonuniformCatmullRom:function(r,s,o,c,l,d,u){let h=(s-r)/l-(o-r)/(l+d)+(o-s)/d,f=(o-s)/d-(c-s)/(d+u)+(c-o)/u;h*=d,f*=d,i(s,o,h,f)},calc:function(r){let s=r*r,o=s*r;return a+e*r+t*s+n*o}}}var Fh=new U,Uh=new U,ld=new kd,cd=new kd,dd=new kd,Yi=class extends Bn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){let n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,d;this.closed||o>0?l=i[(o-1)%r]:(Uh.subVectors(i[0],i[1]).add(i[0]),l=Uh);let u=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?d=i[(o+2)%r]:(Fh.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=Fh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ld.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,g,v,m),cd.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,g,v,m),dd.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(ld.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),cd.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),dd.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return n.set(ld.calc(c),cd.calc(c),dd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Oh(a,e,t,n,i){let r=(n-e)*.5,s=(i-t)*.5,o=a*a,c=a*o;return(2*t-2*n+r+s)*c+(-3*t+3*n-2*r-s)*o+r*a+t}function G0(a,e){let t=1-a;return t*t*e}function H0(a,e){return 2*(1-a)*a*e}function k0(a,e){return a*a*e}function Fr(a,e,t,n){return G0(a,e)+H0(a,t)+k0(a,n)}function V0(a,e){let t=1-a;return t*t*t*e}function j0(a,e){let t=1-a;return 3*t*t*a*e}function q0(a,e){return 3*(1-a)*a*a*e}function $0(a,e){return a*a*a*e}function Ur(a,e,t,n,i){return V0(a,e)+j0(a,t)+q0(a,n)+$0(a,i)}var Bo=class extends Bn{constructor(e=new Xe,t=new Xe,n=new Xe,i=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Xe){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ur(e,i.x,r.x,s.x,o.x),Ur(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zo=class extends Bn{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Ur(e,i.x,r.x,s.x,o.x),Ur(e,i.y,r.y,s.y,o.y),Ur(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Go=class extends Bn{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends Bn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Bn{constructor(e=new Xe,t=new Xe,n=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Xe){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Fr(e,i.x,r.x,s.x),Fr(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends Bn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Fr(e,i.x,r.x,s.x),Fr(e,i.y,r.y,s.y),Fr(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){let n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,c=i[s===0?s:s-1],l=i[s],d=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(Oh(o,c.x,l.x,d.x,u.x),Oh(o,c.y,l.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Xe().fromArray(i))}return this}},W0=Object.freeze({__proto__:null,ArcCurve:Oo,CatmullRomCurve3:Yi,CubicBezierCurve:Bo,CubicBezierCurve3:zo,EllipseCurve:Kr,LineCurve:Go,LineCurve3:Ho,QuadraticBezierCurve:ko,QuadraticBezierCurve3:Qr,SplineCurve:Vo});var es=class a extends Uo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}};var wa=class a extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,u=e/o,h=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){let b=p*h-s;for(let M=0;M<l;M++){let _=M*u-r;g.push(_,-b,0),v.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let M=b+l*p,_=b+l*(p+1),A=b+1+l*(p+1),E=b+1+l*p;f.push(M,_,E),f.push(_,A,E)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},ts=class a extends mt{constructor(e=.5,t=1,n=32,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],d=[],u=e,h=(t-e)/i,f=new U,g=new Xe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let p=r+m/n*s;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let v=0;v<i;v++){let m=v*(n+1);for(let p=0;p<n;p++){let b=p+m,M=b,_=b+n+1,A=b+n+2,E=b+1;o.push(M,_,E),o.push(_,A,E)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var fa=class a extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(s+o,Math.PI),l=0,d=[],u=new U,h=new U,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let b=[],M=p/n,_=s+M*o,A=e*Math.cos(_),E=Math.sqrt(e*e-A*A),T=0;p===0&&s===0?T=.5/t:p===n&&c===Math.PI&&(T=-.5/t);for(let x=0;x<=t;x++){let S=x/t,w=i+S*r;u.x=-E*Math.cos(w),u.y=A,u.z=E*Math.sin(w),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(S+T,1-M),b.push(l++)}d.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let M=d[p][b+1],_=d[p][b],A=d[p+1][b],E=d[p+1][b+1];(p!==0||s>0)&&f.push(M,_,E),(p!==n-1||c<Math.PI)&&f.push(_,A,E)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yn=class a extends mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:s,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],d=[],u=[],h=new U,f=new U,g=new U;for(let v=0;v<=n;v++){let m=s+v/n*o;for(let p=0;p<=i;p++){let b=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),g.subVectors(f,h).normalize(),d.push(g.x,g.y,g.z),u.push(p/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){let p=(i+1)*v+m-1,b=(i+1)*(v-1)+m-1,M=(i+1)*(v-1)+m,_=(i+1)*v+m;c.push(p,b,_),c.push(b,M,_)}this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ns=class a extends mt{constructor(e=new Qr(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new U,c=new U,l=new Xe,d=new U,u=[],h=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function v(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),b(),p()}function m(M){d=e.getPointAt(M/t,d);let _=s.normals[M],A=s.binormals[M];for(let E=0;E<=i;E++){let T=E/i*Math.PI*2,x=Math.sin(T),S=-Math.cos(T);c.x=S*_.x+x*A.x,c.y=S*_.y+x*A.y,c.z=S*_.z+x*A.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=d.x+n*c.x,o.y=d.y+n*c.y,o.z=d.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let _=1;_<=i;_++){let A=(i+1)*(M-1)+(_-1),E=(i+1)*M+(_-1),T=(i+1)*M+_,x=(i+1)*(M-1)+_;g.push(A,E,x),g.push(E,T,x)}}function b(){for(let M=0;M<=t;M++)for(let _=0;_<=i;_++)l.x=M/t,l.y=_/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new a(new W0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function mi(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(Bh(i))i.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Bh(i[0])){let r=[];for(let s=0,o=i.length;s<o;s++)r[s]=i[s].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function on(a){let e={};for(let t=0;t<a.length;t++){let n=mi(a[t]);for(let i in n)e[i]=n[i]}return e}function Bh(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function X0(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Vd(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Rp={clone:mi,merge:on},Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(i.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new st().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jo=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},it=class extends pa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var as=class extends pa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ys,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=rl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qo=class extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$o=class extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oi(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function ud(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}var qa=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{a:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break a;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wo=class extends qa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],c=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case md:r=e,o=2*t-n;break;case gd:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case md:s=e,c=2*n-t;break;case gd:s=1,c=n+i[1]-i[0];break;default:s=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,b=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let A=0;A!==o;++A)r[A]=p*s[d+A]+b*s[l+A]+M*s[c+A]+_*s[u+A];return r}},Xo=class extends qa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(i-t),u=1-d;for(let h=0;h!==o;++h)r[h]=s[l+h]*u+s[c+h]*d;return r}},Yo=class extends qa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Jo=class extends qa{interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let g=(n-t)/(i-t),v=1-g;for(let m=0;m!==o;++m)r[m]=s[l+m]*v+s[c+m]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let v=s[l+g],m=s[c+g],p=f*h+g*2,b=u[p],M=u[p+1],_=e*h+g*2,A=d[_],E=d[_+1],T=K0(n,t,b,A,i);r[g]=Pp(T,v,M,E,m)}return r}};function Pp(a,e,t,n,i){let r=1-a;return r*r*r*e+3*r*r*a*t+3*r*a*a*n+a*a*a*i}function Z0(a,e,t,n,i){let r=1-a;return 3*r*r*(t-e)+6*r*a*(n-t)+3*a*a*(i-n)}function K0(a,e,t,n,i){let r=(a-e)/(i-e);for(let s=0;s<8;s++){let o=Pp(r,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let c=Z0(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Rn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oi(t,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oi(e.times,Array),values:Oi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ud(e.settings)&&(n.settings={inTangents:Oi(e.settings.inTangents,Array),outTangents:Oi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Jo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break;case pd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return pd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ud(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){at("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){at("KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(i!==void 0&&v0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){at("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,r=e.length-1,s=1;for(let o=1;o<r;++o){let c=!1,l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[h+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];let u=o*n,h=s*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,c=s*n,l=0;l!==n;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ud(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function zh(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=wo;var $a=class extends Rn{constructor(e,t,n){super(e,t,n)}};$a.prototype.ValueTypeName="bool";$a.prototype.ValueBufferType=Array;$a.prototype.DefaultInterpolation=Or;$a.prototype.InterpolantFactoryMethodLinear=void 0;$a.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends Rn{constructor(e,t,n,i){super(e,t,n,i)}};Zo.prototype.ValueTypeName="color";var Ko=class extends Rn{constructor(e,t,n,i){super(e,t,n,i)}};Ko.prototype.ValueTypeName="number";var Qo=class extends qa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let d=l+o;l!==d;l+=4)da.slerpFlat(r,0,s,l-o,s,l,c);return r}},is=class extends Rn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Rn{constructor(e,t,n){super(e,t,n)}};Wa.prototype.ValueTypeName="string";Wa.prototype.ValueBufferType=Array;Wa.prototype.DefaultInterpolation=Or;Wa.prototype.InterpolantFactoryMethodLinear=void 0;Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Rn{constructor(e,t,n,i){super(e,t,n,i)}};el.prototype.ValueTypeName="vector";var tl=class{constructor(e,t,n){let i=this,r=!1,s=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,i.onProgress!==void 0&&i.onProgress(d,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){let u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ip=new tl,nl=class{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},rs=class extends Ji{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hd=new _t,Gh=new U,Hh=new U,ss=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(hd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===ki||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mo=new U,go=new da,sa=new U,os=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mo,go,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,sa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(mo,go,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ha=new U,kh=new Xe,Vh=new Xe,Yt=class extends os{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z)}getViewSize(e,t){return this.getViewBounds(e,kh,Vh),t.subVectors(Vh,kh)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/c,t-=s.offsetY*n/l,i*=s.width/c,n*=s.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xd=class extends ss{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},ls=class extends Ji{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zi=class extends os{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,s=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bd=class extends ss{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends Ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new bd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Bi=-90,zi=1,al=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(Bi,zi,e,t);i.layers=this.layers,this.add(i);let r=new Yt(Bi,zi,e,t);r.layers=this.layers,this.add(r);let s=new Yt(Bi,zi,e,t);s.layers=this.layers,this.add(s);let o=new Yt(Bi,zi,e,t);o.layers=this.layers,this.add(o);let c=new Yt(Bi,zi,e,t);c.layers=this.layers,this.add(c);let l=new Yt(Bi,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,c]=t;for(let l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},il=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var jd="\\[\\]\\.:\\/",Q0=new RegExp("["+jd+"]","g"),qd="[^"+jd+"]",eg="[^"+jd.replace("\\.","")+"]",tg=/((?:WC+[\/:])*)/.source.replace("WC",qd),ng=/(WCOD+)?/.source.replace("WCOD",eg),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qd),ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qd),rg=new RegExp("^"+tg+ng+ag+ig+"$"),sg=["material","materials","bones","map"],vd=class{constructor(e,t,n){let i=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q0,"")}static parseTrackName(e){let t=rg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);sg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let s=e[i];if(s===void 0){let l=t.nodeName;at("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=vd;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sy=new Float32Array(1);var ds=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var _d=class a{static{a.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function $d(a,e,t,n){let i=og(n);switch(t){case Bd:return a*e;case hl:return a*e/i.components*i.byteLength;case pl:return a*e/i.components*i.byteLength;case Ka:return a*e*2/i.components*i.byteLength;case fl:return a*e*2/i.components*i.byteLength;case zd:return a*e*3/i.components*i.byteLength;case Hn:return a*e*4/i.components*i.byteLength;case ml:return a*e*4/i.components*i.byteLength;case ms:case gs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case xs:case bs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xl:case vl:return Math.max(a,16)*Math.max(e,8)/4;case gl:case bl:return Math.max(a,8)*Math.max(e,8)/2;case _l:case yl:case Ml:case El:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Sl:case vs:case Al:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Il:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case zl:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Gl:case Hl:case kl:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Vl:case jl:return Math.ceil(a/4)*Math.ceil(e/4)*8;case _s:case ql:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function og(a){switch(a){case Sn:case Nd:return{byteLength:1,components:1};case er:case Fd:case Qn:return{byteLength:2,components:1};case dl:case ul:return{byteLength:2,components:4};case Kn:case cl:case Gn:return{byteLength:4,components:1};case Ud:case Od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qp(){let a=null,e=!1,t=null,n=null;function i(r,s){n=a.requestAnimationFrame(i),t(r,s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function fg(a){let e=new WeakMap;function t(o,c){let l=o.array,d=o.usage,u=l.byteLength,h=a.createBuffer();a.bindBuffer(c,h),a.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=a.SHORT;else if(l instanceof Uint32Array)f=a.UNSIGNED_INT;else if(l instanceof Int32Array)f=a.INT;else if(l instanceof Int8Array)f=a.BYTE;else if(l instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let d=c.array,u=c.updateRanges;if(a.bindBuffer(l,o),u.length===0)a.bufferSubData(l,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){let g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];a.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:s}}var mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ox=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,px=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ax=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,db=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ub=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:mg,alphahash_pars_fragment:gg,alphamap_fragment:xg,alphamap_pars_fragment:bg,alphatest_fragment:vg,alphatest_pars_fragment:_g,aomap_fragment:yg,aomap_pars_fragment:Sg,batching_pars_vertex:Mg,batching_vertex:Eg,begin_vertex:Ag,beginnormal_vertex:Tg,bsdfs:wg,iridescence_fragment:Cg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Dg,clipping_planes_vertex:Lg,color_fragment:Ng,color_pars_fragment:Fg,color_pars_vertex:Ug,color_vertex:Og,common:Bg,cube_uv_reflection_fragment:zg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Hg,displacementmap_vertex:kg,emissivemap_fragment:Vg,emissivemap_pars_fragment:jg,colorspace_fragment:qg,colorspace_pars_fragment:$g,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:Yg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:ox,envmap_vertex:Zg,fog_vertex:Kg,fog_pars_vertex:Qg,fog_fragment:ex,fog_pars_fragment:tx,gradientmap_pars_fragment:nx,lightmap_pars_fragment:ax,lights_lambert_fragment:ix,lights_lambert_pars_fragment:rx,lights_pars_begin:sx,lights_toon_fragment:lx,lights_toon_pars_fragment:cx,lights_phong_fragment:dx,lights_phong_pars_fragment:ux,lights_physical_fragment:hx,lights_physical_pars_fragment:px,lights_fragment_begin:fx,lights_fragment_maps:mx,lights_fragment_end:gx,lightprobes_pars_fragment:xx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:yx,map_fragment:Sx,map_pars_fragment:Mx,map_particle_fragment:Ex,map_particle_pars_fragment:Ax,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:wx,morphinstance_vertex:Cx,morphcolor_vertex:Rx,morphnormal_vertex:Px,morphtarget_pars_vertex:Ix,morphtarget_vertex:Dx,normal_fragment_begin:Lx,normal_fragment_maps:Nx,normal_pars_fragment:Fx,normal_pars_vertex:Ux,normal_vertex:Ox,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Hx,iridescence_pars_fragment:kx,opaque_fragment:Vx,packing:jx,premultiplied_alpha_fragment:qx,project_vertex:$x,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:Yx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:Kx,shadowmap_vertex:Qx,shadowmask_pars_fragment:eb,skinbase_vertex:tb,skinning_pars_vertex:nb,skinning_vertex:ab,skinnormal_vertex:ib,specularmap_fragment:rb,specularmap_pars_fragment:sb,tonemapping_fragment:ob,tonemapping_pars_fragment:lb,transmission_fragment:cb,transmission_pars_fragment:db,uv_pars_fragment:ub,uv_pars_vertex:hb,uv_vertex:pb,worldpos_vertex:fb,background_vert:mb,background_frag:gb,backgroundCube_vert:xb,backgroundCube_frag:bb,cube_vert:vb,cube_frag:_b,depth_vert:yb,depth_frag:Sb,distance_vert:Mb,distance_frag:Eb,equirect_vert:Ab,equirect_frag:Tb,linedashed_vert:wb,linedashed_frag:Cb,meshbasic_vert:Rb,meshbasic_frag:Pb,meshlambert_vert:Ib,meshlambert_frag:Db,meshmatcap_vert:Lb,meshmatcap_frag:Nb,meshnormal_vert:Fb,meshnormal_frag:Ub,meshphong_vert:Ob,meshphong_frag:Bb,meshphysical_vert:zb,meshphysical_frag:Gb,meshtoon_vert:Hb,meshtoon_frag:kb,points_vert:Vb,points_frag:jb,shadow_vert:qb,shadow_frag:$b,sprite_vert:Wb,sprite_frag:Xb},Pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},xa={basic:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:on([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:on([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:on([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:on([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:on([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:on([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:on([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:on([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:on([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:on([Pe.common,Pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:on([Pe.lights,Pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};xa.physical={uniforms:on([xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Xl={r:0,b:0,g:0},Yb=new _t,ef=new st;ef.set(-1,0,0,0,1,0,0,0,1);function Jb(a,e,t,n,i,r){let s=new Be(0),o=i===!0?0:1,c,l,d=null,u=0,h=null;function f(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let _=b.backgroundBlurriness>0;M=e.get(M,_)}return M}function g(b){let M=!1,_=f(b);_===null?m(s,o):_&&_.isColor&&(m(_,1),M=!0);let A=a.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(a.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(b,M){let _=f(M);_&&(_.isCubeTexture||_.mapping===ps)?(l===void 0&&(l=new Ne(new Ce(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:mi(xa.backgroundCube.uniforms),vertexShader:xa.backgroundCube.vertexShader,fragmentShader:xa.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ef),l.material.toneMapped=ft.getTransfer(_.colorSpace)!==Et,(d!==_||u!==_.version||h!==a.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,h=a.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ne(new wa(2,2),new Cn({name:"BackgroundMaterial",uniforms:mi(xa.background.uniforms),vertexShader:xa.background.vertexShader,fragmentShader:xa.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ft.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||h!==a.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,h=a.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,M){b.getRGB(Xl,Vd(a)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,M=1){s.set(b),o=M,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(s,o)},render:g,addToRenderList:v,dispose:p}}function Zb(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,s=!1;function o(D,F,P,I,N){let B=!1,q=u(D,I,P,F);r!==q&&(r=q,l(r.object)),B=f(D,I,P,N),B&&g(D,I,P,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(B||s)&&(s=!1,_(D,F,P,I),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return a.createVertexArray()}function l(D){return a.bindVertexArray(D)}function d(D){return a.deleteVertexArray(D)}function u(D,F,P,I){let N=I.wireframe===!0,B=n[F.id];B===void 0&&(B={},n[F.id]=B);let q=D.isInstancedMesh===!0?D.id:0,k=B[q];k===void 0&&(k={},B[q]=k);let V=k[P.id];V===void 0&&(V={},k[P.id]=V);let H=V[N];return H===void 0&&(H=h(c()),V[N]=H),H}function h(D){let F=[],P=[],I=[];for(let N=0;N<t;N++)F[N]=0,P[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:P,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,F,P,I){let N=r.attributes,B=F.attributes,q=0,k=P.getAttributes();for(let V in k)if(k[V].location>=0){let te=N[V],ge=B[V];if(ge===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),te===void 0||te.attribute!==ge||ge&&te.data!==ge.data)return!0;q++}return r.attributesNum!==q||r.index!==I}function g(D,F,P,I){let N={},B=F.attributes,q=0,k=P.getAttributes();for(let V in k)if(k[V].location>=0){let te=B[V];te===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let ge={};ge.attribute=te,te&&te.data&&(ge.data=te.data),N[V]=ge,q++}r.attributes=N,r.attributesNum=q,r.index=I}function v(){let D=r.newAttributes;for(let F=0,P=D.length;F<P;F++)D[F]=0}function m(D){p(D,0)}function p(D,F){let P=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;P[D]=1,I[D]===0&&(a.enableVertexAttribArray(D),I[D]=1),N[D]!==F&&(a.vertexAttribDivisor(D,F),N[D]=F)}function b(){let D=r.newAttributes,F=r.enabledAttributes;for(let P=0,I=F.length;P<I;P++)F[P]!==D[P]&&(a.disableVertexAttribArray(P),F[P]=0)}function M(D,F,P,I,N,B,q){q===!0?a.vertexAttribIPointer(D,F,P,N,B):a.vertexAttribPointer(D,F,P,I,N,B)}function _(D,F,P,I){v();let N=I.attributes,B=P.getAttributes(),q=F.defaultAttributeValues;for(let k in B){let V=B[k];if(V.location>=0){let H=N[k];if(H===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),H!==void 0){let te=H.normalized,ge=H.itemSize,_e=e.get(H);if(_e===void 0)continue;let He=_e.buffer,Fe=_e.type,Z=_e.bytesPerElement,G=Fe===a.INT||Fe===a.UNSIGNED_INT||H.gpuType===cl;if(H.isInterleavedBufferAttribute){let X=H.data,he=X.stride,Me=H.offset;if(X.isInstancedInterleavedBuffer){for(let fe=0;fe<V.locationSize;fe++)p(V.location+fe,X.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let fe=0;fe<V.locationSize;fe++)m(V.location+fe);a.bindBuffer(a.ARRAY_BUFFER,He);for(let fe=0;fe<V.locationSize;fe++)M(V.location+fe,ge/V.locationSize,Fe,te,he*Z,(Me+ge/V.locationSize*fe)*Z,G)}else{if(H.isInstancedBufferAttribute){for(let X=0;X<V.locationSize;X++)p(V.location+X,H.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let X=0;X<V.locationSize;X++)m(V.location+X);a.bindBuffer(a.ARRAY_BUFFER,He);for(let X=0;X<V.locationSize;X++)M(V.location+X,ge/V.locationSize,Fe,te,ge*Z,ge/V.locationSize*X*Z,G)}}else if(q!==void 0){let te=q[k];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(V.location,te);break;case 3:a.vertexAttrib3fv(V.location,te);break;case 4:a.vertexAttrib4fv(V.location,te);break;default:a.vertexAttrib1fv(V.location,te)}}}}b()}function A(){S();for(let D in n){let F=n[D];for(let P in F){let I=F[P];for(let N in I){let B=I[N];for(let q in B)d(B[q].object),delete B[q];delete I[N]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let P in F){let I=F[P];for(let N in I){let B=I[N];for(let q in B)d(B[q].object),delete B[q];delete I[N]}}delete n[D.id]}function T(D){for(let F in n){let P=n[F];for(let I in P){let N=P[I];if(N[D.id]===void 0)continue;let B=N[D.id];for(let q in B)d(B[q].object),delete B[q];delete N[D.id]}}}function x(D){for(let F in n){let P=n[F],I=D.isInstancedMesh===!0?D.id:0,N=P[I];if(N!==void 0){for(let B in N){let q=N[B];for(let k in q)d(q[k].object),delete q[k];delete N[B]}delete P[I],Object.keys(P).length===0&&delete n[F]}}}function S(){w(),s=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Kb(a,e,t){let n;function i(c){n=c}function r(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,d){d!==0&&(a.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let f=0;f<d;f++)h+=l[f];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Qb(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){return!(T!==Hn&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Sn&&T!==Gn&&!x&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Qe("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),A=a.getParameter(a.MAX_SAMPLES),E=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,maxSamples:A,samples:E}}function ev(a){let e=this,t=null,n=0,i=!1,r=!1,s=new Xn,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=a.get(u);if(!i||g===null||g.length===0||r&&!m)r?d(null):l();else{let b=r?0:n,M=b*4,_=p.clippingState||null;c.value=_,_=d(g,h,M,f);for(let A=0;A!==M;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==v;++M,_+=4)s.copy(u[M]).applyMatrix4(b,o),s.normal.toArray(m,_),m[_+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var ar=4,tv=6,nv=20,av=256,Ms=new Zi,Dp=new Be,Wd=null,Xd=0,Yd=0,Jd=!1,iv=new U,gi=new U,rr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:s=256,position:o=iv}=r;Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,Xd,Yd),this._renderer.xr.enabled=Jd,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ya||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Qn,format:Hn,colorSpace:Br,depthBuffer:!1},i=Lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rv(r)),this._blurMaterial=ov(r,e,t),this._ggxMaterial=sv(r,e,t)}return i}_compileMaterial(e){let t=new Ne(new mt,e);this._renderer.compile(t,Ms)}_sceneToCubeUV(e,t,n,i,r){let c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Dp),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Ce,new wn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Dp),p=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[M],r.y,r.z)):_===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[M]));let A=this._cubeSize;nr(i,_*A,M>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(v,c),u.render(e,c)}u.toneMapping=f,u.autoClear=h,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ya||e.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;nr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Ms)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;let c=s.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=l*1.25,f=u*h,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-ar?n-g+ar:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,nr(r,m,p,3*v,2*v),i.setRenderTarget(r),i.render(o,Ms),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,nr(e,m,p,3*v,2*v),i.setRenderTarget(e),i.render(o,Ms)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,i,r){let s=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[i],u=3*d*(i>this._lodMax-ar?i-this._lodMax+ar:0),h=4*(this._cubeSize-d);nr(t,u,h,3*d,2*d),s.setRenderTarget(t),s.render(c,Ms)}};function rv(a){let e=[],t=[],n=a,i=a-ar+1+tv;for(let r=0;r<i;r++){let s=Math.pow(2,n);e.push(s);let o=1/(s-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,h=6,f=3,g=new Float32Array(f*h*u),v=new Float32Array(f*h*u);for(let p=0;p<u;p++){let b=p%3*2/3-1,M=p>2?0:-1,_=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];g.set(_,f*h*p);for(let A=0;A<h;A++){let E=d[A*2]*2-1,T=d[A*2+1]*2-1;p===0?gi.set(1,T,E):p===1?gi.set(-E,1,-T):p===2?gi.set(-E,T,1):p===3?gi.set(-1,T,-E):p===4?gi.set(-E,-1,T):gi.set(E,T,-1),gi.toArray(v,(p*h+A)*f)}}let m=new mt;m.setAttribute("position",new gt(g,f)),m.setAttribute("outputDirection",new gt(v,f)),t.push(new Ne(m,null)),n>ar&&n--}return{lodMeshes:t,sizeLods:e}}function Lp(a,e,t){let n=new _n(a,e,t);return n.texture.mapping=ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function sv(a,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function ov(a,e,t){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Np(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Fp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jl=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ce(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:ma});r.uniforms.tEquirect.value=t;let s=new Ne(i,r),o=t.minFilter;return t.minFilter===Ja&&(t.minFilter=Jt),new al(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}};function lv(a){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?s(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===sl||f===ol)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new Jl(g.height);return v.fromEquirectangularTexture(a,h),e.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let f=h.mapping,g=f===sl||f===ol,v=f===Ya||f===fi;if(g||v){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new rr(a)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new rr(a)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===sl?h.mapping=Ya:f===ol&&(h.mapping=fi),h}function c(h){let f=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function cv(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ui("WebGLRenderer: "+n+" extension not supported."),i}}}function dv(a,e,t,n){let i={},r=new WeakMap;function s(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function c(u){let h=u.attributes;for(let f in h)e.update(h[f],a.ARRAY_BUFFER)}function l(u){let h=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let b=f.array;v=f.version;for(let M=0,_=b.length;M<_;M+=3){let A=b[M+0],E=b[M+1],T=b[M+2];h.push(A,E,E,T,T,A)}}else{let b=g.array;v=g.version;for(let M=0,_=b.length/3-1;M<_;M+=3){let A=M+0,E=M+1,T=M+2;h.push(A,E,E,T,T,A)}}let m=new(g.count>=65535?qr:jr)(h,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function uv(a,e,t){let n;function i(u){n=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function c(u,h){a.drawElements(n,h,r,u*s),t.update(h,n,1)}function l(u,h,f){f!==0&&(a.drawElementsInstanced(n,h,r,u*s,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function hv(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:at("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pv(a,e,t){let n=new WeakMap,i=new Nt;function r(s,o,c){let l=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==u){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let _=o.attributes.position.count*M,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*A*4*u),T=new Hr(E,_,A,u);T.type=Gn,T.needsUpdate=!0;let x=M*4;for(let w=0;w<u;w++){let D=m[w],F=p[w],P=b[w],I=_*A*4*w;for(let N=0;N<D.count;N++){let B=N*x;f===!0&&(i.fromBufferAttribute(D,N),E[I+B+0]=i.x,E[I+B+1]=i.y,E[I+B+2]=i.z,E[I+B+3]=0),g===!0&&(i.fromBufferAttribute(F,N),E[I+B+4]=i.x,E[I+B+5]=i.y,E[I+B+6]=i.z,E[I+B+7]=0),v===!0&&(i.fromBufferAttribute(P,N),E[I+B+8]=i.x,E[I+B+9]=i.y,E[I+B+10]=i.z,E[I+B+11]=P.itemSize===4?i.w:1)}}h={count:u,texture:T,size:new Xe(_,A)},n.set(o,h),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(a,"morphTargetBaseInfluence",g),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:r}}function fv(a,e,t,n,i){let r=new WeakMap;function s(l){let d=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}var mv={[wd]:"LINEAR_TONE_MAPPING",[Cd]:"REINHARD_TONE_MAPPING",[Rd]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[Id]:"AGX_TONE_MAPPING",[Dd]:"NEUTRAL_TONE_MAPPING",[Pd]:"CUSTOM_TONE_MAPPING"};function gv(a,e,t,n,i,r){let s=new _n(e,t,{type:a,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new mt;l.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new tt([0,2,0,0,2,0],2));let d=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ne(l,d),h=new Zi(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,b=[],M=!1;this.setSize=function(_,A){s.setSize(_,A),o!==null&&o.setSize(_,A),c!==null&&c.setSize(_,A);for(let E=0;E<b.length;E++){let T=b[E];T.setSize&&T.setSize(_,A)}},this.setEffects=function(_){b=_,M=b.length>0&&b[0].isRenderPass===!0;let A=s.width,E=s.height;b.length>0&&o===null&&(o=new _n(A,E,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(A,E,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let x=b[T];x.setSize&&x.setSize(A,E)}},this.begin=function(_,A){if(v||_.toneMapping===Zn&&b.length===0)return!1;if(p=A,A!==null){let E=A.width,T=A.height;(s.width!==E||s.height!==T)&&this.setSize(E,T)}return M===!1&&_.setRenderTarget(s),m=_.toneMapping,_.toneMapping=Zn,!0},this.hasRenderPass=function(){return M},this.end=function(_,A){_.toneMapping=m,v=!0;let E=s,T=o;for(let x=0;x<b.length;x++){let S=b[x];S.enabled!==!1&&(S.render(_,T,E,A),S.needsSwap!==!1&&(E=T,T=T===o?c:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,d.defines={},ft.getTransfer(f)===Et&&(d.defines.SRGB_TRANSFER="");let x=mv[g];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(u,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var tf=new fn,Qd=new ja(1,1),nf=new Hr,af=new Io,rf=new Xr,Up=[],Op=[],Bp=new Float32Array(16),zp=new Float32Array(9),Gp=new Float32Array(4);function sr(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,r=Up[i];if(r===void 0&&(r=new Float32Array(i),Up[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Vt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function jt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ql(a,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function xv(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function bv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;a.uniform2fv(this.addr,e),jt(t,e)}}function vv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;a.uniform3fv(this.addr,e),jt(t,e)}}function _v(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;a.uniform4fv(this.addr,e),jt(t,e)}}function yv(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Vt(t,n))return;Gp.set(n),a.uniformMatrix2fv(this.addr,!1,Gp),jt(t,n)}}function Sv(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Vt(t,n))return;zp.set(n),a.uniformMatrix3fv(this.addr,!1,zp),jt(t,n)}}function Mv(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Vt(t,n))return;Bp.set(n),a.uniformMatrix4fv(this.addr,!1,Bp),jt(t,n)}}function Ev(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Av(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;a.uniform2iv(this.addr,e),jt(t,e)}}function Tv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;a.uniform3iv(this.addr,e),jt(t,e)}}function wv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;a.uniform4iv(this.addr,e),jt(t,e)}}function Cv(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Rv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;a.uniform2uiv(this.addr,e),jt(t,e)}}function Pv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;a.uniform3uiv(this.addr,e),jt(t,e)}}function Iv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;a.uniform4uiv(this.addr,e),jt(t,e)}}function Dv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(Qd.compareFunction=t.isReversedDepthBuffer()?Wl:$l,r=Qd):r=tf,t.setTexture2D(e||r,i)}function Lv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||af,i)}function Nv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rf,i)}function Fv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nf,i)}function Uv(a){switch(a){case 5126:return xv;case 35664:return bv;case 35665:return vv;case 35666:return _v;case 35674:return yv;case 35675:return Sv;case 35676:return Mv;case 5124:case 35670:return Ev;case 35667:case 35671:return Av;case 35668:case 35672:return Tv;case 35669:case 35673:return wv;case 5125:return Cv;case 36294:return Rv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Fv}}function Ov(a,e){a.uniform1fv(this.addr,e)}function Bv(a,e){let t=sr(e,this.size,2);a.uniform2fv(this.addr,t)}function zv(a,e){let t=sr(e,this.size,3);a.uniform3fv(this.addr,t)}function Gv(a,e){let t=sr(e,this.size,4);a.uniform4fv(this.addr,t)}function Hv(a,e){let t=sr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function kv(a,e){let t=sr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Vv(a,e){let t=sr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function jv(a,e){a.uniform1iv(this.addr,e)}function qv(a,e){a.uniform2iv(this.addr,e)}function $v(a,e){a.uniform3iv(this.addr,e)}function Wv(a,e){a.uniform4iv(this.addr,e)}function Xv(a,e){a.uniform1uiv(this.addr,e)}function Yv(a,e){a.uniform2uiv(this.addr,e)}function Jv(a,e){a.uniform3uiv(this.addr,e)}function Zv(a,e){a.uniform4uiv(this.addr,e)}function Kv(a,e,t){let n=this.cache,i=e.length,r=Ql(t,i);Vt(n,r)||(a.uniform1iv(this.addr,r),jt(n,r));let s;this.type===a.SAMPLER_2D_SHADOW?s=Qd:s=tf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||s,r[o])}function Qv(a,e,t){let n=this.cache,i=e.length,r=Ql(t,i);Vt(n,r)||(a.uniform1iv(this.addr,r),jt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||af,r[s])}function e1(a,e,t){let n=this.cache,i=e.length,r=Ql(t,i);Vt(n,r)||(a.uniform1iv(this.addr,r),jt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||rf,r[s])}function t1(a,e,t){let n=this.cache,i=e.length,r=Ql(t,i);Vt(n,r)||(a.uniform1iv(this.addr,r),jt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||nf,r[s])}function n1(a){switch(a){case 5126:return Ov;case 35664:return Bv;case 35665:return zv;case 35666:return Gv;case 35674:return Hv;case 35675:return kv;case 35676:return Vv;case 5124:case 35670:return jv;case 35667:case 35671:return qv;case 35668:case 35672:return $v;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return Yv;case 36295:return Jv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}var eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}},tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n1(t.type)}},nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Zd=/(\w+)(\])?(\[|\.)?/g;function Hp(a,e){a.seq.push(e),a.map[e.id]=e}function a1(a,e,t){let n=a.name,i=n.length;for(Zd.lastIndex=0;;){let r=Zd.exec(n),s=Zd.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===i){Hp(t,l===void 0?new eu(o,a,e):new tu(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new nu(o),Hp(t,u)),t=u}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);a1(o,c,this)}let i=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let s=e[i];s.id in t&&n.push(s)}return n}};function kp(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var i1=37297,r1=0;function s1(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){let o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}var Vp=new st;function o1(a){ft._getMatrix(Vp,ft.workingColorSpace,a);let e=`mat3( ${Vp.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(a)){case zr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function jp(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+s1(a.getShaderSource(e),o)}else return r}function l1(a,e){let t=o1(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var c1={[wd]:"Linear",[Cd]:"Reinhard",[Rd]:"Cineon",[hs]:"ACESFilmic",[Id]:"AgX",[Dd]:"Neutral",[Pd]:"Custom"};function d1(a,e){let t=c1[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yl=new U;function u1(){ft.getLuminanceCoefficients(Yl);let a=Yl.x.toFixed(4),e=Yl.y.toFixed(4),t=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function p1(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f1(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=a.getActiveAttrib(e,i),s=r.name,o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function As(a){return a!==""}function qp(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $p(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var m1=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(a){return a.replace(m1,x1)}var g1=new Map;function x1(a,e){let t=dt[e];if(t===void 0){let n=g1.get(e);if(n!==void 0)t=dt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return au(t)}var b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(a){return a.replace(b1,v1)}function v1(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xp(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _1={[us]:"SHADOWMAP_TYPE_PCF",[Ki]:"SHADOWMAP_TYPE_VSM"};function y1(a){return _1[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var S1={[Ya]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE_UV"};function M1(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":S1[a.envMapMode]||"ENVMAP_TYPE_CUBE"}var E1={[fi]:"ENVMAP_MODE_REFRACTION"};function A1(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":E1[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var T1={[rl]:"ENVMAP_BLENDING_MULTIPLY",[up]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function w1(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":T1[a.combine]||"ENVMAP_BLENDING_NONE"}function C1(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function R1(a,e,t,n){let i=a.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,c=y1(t),l=M1(t),d=A1(t),u=w1(t),h=C1(t),f=h1(t),g=p1(r),v=i.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),p.length>0&&(p+=`
`)):(m=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?dt.tonemapping_pars_fragment:"",t.toneMapping!==Zn?d1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,l1("linearToOutputTexel",t.outputColorSpace),u1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),s=au(s),s=qp(s,t),s=$p(s,t),o=au(o),o=qp(o,t),o=$p(o,t),s=Wp(s),o=Wp(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+s,_=b+p+o,A=kp(i,i.VERTEX_SHADER,M),E=kp(i,i.FRAGMENT_SHADER,_);i.attachShader(v,A),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(D){if(a.debug.checkShaderErrors){let F=i.getProgramInfoLog(v)||"",P=i.getShaderInfoLog(A)||"",I=i.getShaderInfoLog(E)||"",N=F.trim(),B=P.trim(),q=I.trim(),k=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(k=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,v,A,E);else{let H=jp(i,A,"vertex"),te=jp(i,E,"fragment");at("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+H+`
`+te)}else N!==""?Qe("WebGLProgram: Program Info Log:",N):(B===""||q==="")&&(V=!1);V&&(D.diagnostics={runnable:k,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(A),i.deleteShader(E),x=new ir(i,v),S=f1(i,v)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,i1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}var P1=0,iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ru(e),t.set(e,n)),n}},ru=class{constructor(e){this.id=P1++,this.code=e,this.usedTimes=0}};function I1(a){return a===Ka||a===vs||a===_s}function D1(a,e,t,n,i,r){let s=new kr,o=new iu,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,S,w,D,F,P){let I=D.fog,N=F.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||B,q),V=k&&k.mapping===ps?k.image.height:null,H=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Qe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let te=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ge=te!==void 0?te.length:0,_e=0;N.morphAttributes.position!==void 0&&(_e=1),N.morphAttributes.normal!==void 0&&(_e=2),N.morphAttributes.color!==void 0&&(_e=3);let He,Fe,Z,G;if(H){let Rt=xa[H];He=Rt.vertexShader,Fe=Rt.fragmentShader}else{He=x.vertexShader,Fe=x.fragmentShader;let Rt=o.getVertexShaderStage(x),St=o.getFragmentShaderStage(x);o.update(x,Rt,St),Z=Rt.id,G=St.id}let X=a.getRenderTarget(),he=a.state.buffers.depth.getReversed(),Me=F.isInstancedMesh===!0,fe=F.isBatchedMesh===!0,ye=!!x.map,De=!!x.matcap,ue=!!k,Je=!!x.aoMap,z=!!x.lightMap,de=!!x.bumpMap&&x.wireframe===!1,ie=!!x.normalMap,J=!!x.displacementMap,Y=!!x.emissiveMap,re=!!x.metalnessMap,me=!!x.roughnessMap,L=x.anisotropy>0,Re=x.clearcoat>0,se=x.dispersion>0,R=x.retroreflectivity>0,y=x.iridescence>0,O=x.sheen>0,W=x.transmission>0,ae=L&&!!x.anisotropyMap,xe=Re&&!!x.clearcoatMap,Se=Re&&!!x.clearcoatNormalMap,ne=Re&&!!x.clearcoatRoughnessMap,ce=y&&!!x.iridescenceMap,ve=y&&!!x.iridescenceThicknessMap,Oe=O&&!!x.sheenColorMap,Ee=O&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,ke=!!x.specularColorMap,Ke=!!x.specularIntensityMap,lt=W&&!!x.transmissionMap,$=W&&!!x.thicknessMap,Te=!!x.gradientMap,pe=!!x.alphaMap,we=x.alphaTest>0,Ue=!!x.alphaHash,be=!!x.extensions,Ze=Zn;x.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ze=a.toneMapping);let We={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:Fe,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:G,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:fe,batchingColor:fe&&F._colorsTexture!==null,instancing:Me,instancingColor:Me&&F.instanceColor!==null,instancingMorph:Me&&F.morphTexture!==null,outputColorSpace:X===null?a.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:De,envMap:ue,envMapMode:ue&&k.mapping,envMapCubeUVHeight:V,aoMap:Je,lightMap:z,bumpMap:de,normalMap:ie,displacementMap:J,emissiveMap:Y,normalMapObjectSpace:ie&&x.normalMapType===mp,normalMapTangentSpace:ie&&x.normalMapType===ys,packedNormalMap:ie&&x.normalMapType===ys&&I1(x.normalMap.format),metalnessMap:re,roughnessMap:me,anisotropy:L,anisotropyMap:ae,clearcoat:Re,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:ne,dispersion:se,retroreflection:R,iridescence:y,iridescenceMap:ce,iridescenceThicknessMap:ve,sheen:O,sheenColorMap:Oe,sheenRoughnessMap:Ee,specularMap:Ae,specularColorMap:ke,specularIntensityMap:Ke,transmission:W,transmissionMap:lt,thicknessMap:$,gradientMap:Te,opaque:x.transparent===!1&&x.blending===Qi&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:we,alphaHash:Ue,combine:x.combine,mapUv:ye&&g(x.map.channel),aoMapUv:Je&&g(x.aoMap.channel),lightMapUv:z&&g(x.lightMap.channel),bumpMapUv:de&&g(x.bumpMap.channel),normalMapUv:ie&&g(x.normalMap.channel),displacementMapUv:J&&g(x.displacementMap.channel),emissiveMapUv:Y&&g(x.emissiveMap.channel),metalnessMapUv:re&&g(x.metalnessMap.channel),roughnessMapUv:me&&g(x.roughnessMap.channel),anisotropyMapUv:ae&&g(x.anisotropyMap.channel),clearcoatMapUv:xe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(x.sheenRoughnessMap.channel),specularMapUv:Ae&&g(x.specularMap.channel),specularColorMapUv:ke&&g(x.specularColorMap.channel),specularIntensityMapUv:Ke&&g(x.specularIntensityMap.channel),transmissionMapUv:lt&&g(x.transmissionMap.channel),thicknessMapUv:$&&g(x.thicknessMap.channel),alphaMapUv:pe&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ie||L),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(ye||pe),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:_e,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&w.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:Y&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function m(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let w in x.defines)S.push(w),S.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(p(S,x),b(S,x),S.push(a.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),x.push(s.mask)}function M(x){let S=f[x.type],w;if(S){let D=xa[S];w=Rp.clone(D.uniforms)}else w=x.uniforms;return w}function _(x,S){let w=d.get(S);return w!==void 0?++w.usedTimes:(w=new R1(a,S,x,i),l.push(w),d.set(S,w)),w}function A(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:T}}function L1(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,c){a.get(s)[o]=c}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function N1(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Yp(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Jp(){let a=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,m,p){let b=a[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:s(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},a[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=s(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=m,b.group=p),e++,b}function c(h,f,g,v,m,p,b){b.reversedDepth===!0&&(m=-m);let M=o(h,f,g,v,m,p);g.transmission>0?n.push(M):g.transparent===!0?i.push(M):t.push(M)}function l(h,f,g,v,m,p){let b=o(h,f,g,v,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):t.unshift(b)}function d(h,f){t.length>1&&t.sort(h||N1),n.length>1&&n.sort(f||Yp),i.length>1&&i.sort(f||Yp)}function u(){for(let h=e,f=a.length;h<f;h++){let g=a[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:u,sort:d}}function F1(){let a=new WeakMap;function e(n,i){let r=a.get(n),s;return r===void 0?(s=new Jp,a.set(n,[s])):i>=r.length?(s=new Jp,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function U1(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return a[e.id]=t,t}}}function O1(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var B1=0;function z1(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function G1(a){let e=new U1,t=O1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let i=new U,r=new _t,s=new _t;function o(l){let d=0,u=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,M=0,_=0,A=0,E=0,T=0,x=0,S=0,w=0;l.sort(z1);for(let F=0,P=l.length;F<P;F++){let I=l[F],N=I.color,B=I.intensity,q=I.distance,k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ka?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=N.r*B,u+=N.g*B,h+=N.b*B;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],B);w++}else if(I.isSunLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,te=t.get(I);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=k;let ge=H.getViewportCount();for(let _e=0;_e<ge;_e++)n.sunShadowMatrix[v+_e]=H.getMatrix(_e),n.sunShadowCascade[v+_e]=H._cascadeData[_e];v+=ge,g++}n.sun[f]=V,f++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,te=t.get(I);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=I.shadow.matrix,A++}n.directional[m]=V,m++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(N).multiplyScalar(B),V.distance=q,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[b]=V;let H=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,H.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[b]=H.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=k,T++}b++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(N).multiplyScalar(B),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=V,M++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let H=I.shadow,te=t.get(I);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=V,p++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(B),V.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[_]=V,_++}}M>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==b||D.rectAreaLength!==M||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==T||D.numSpotMaps!==x||D.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=M,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=b,D.rectAreaLength=M,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=T,D.numSpotMaps=x,D.numLightProbes=w,n.version=B1++)}function c(l,d){let u=0,h=0,f=0,g=0,v=0,m=0,p=d.matrixWorldInverse;for(let b=0,M=l.length;b<M;b++){let _=l[b];if(_.isSunLight){let A=n.sun[u];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),h++}else if(_.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),s.identity(),r.copy(_.matrixWorld),r.premultiply(p),s.extractRotation(r),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),v++}else if(_.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Zp(a){let e=new G1(a),t=[],n=[],i=[];function r(h){u.camera=h,t.length=0,n.length=0,i.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function c(h){i.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function H1(a){let e=new WeakMap;function t(i,r=0){let s=e.get(i),o;return s===void 0?(o=new Zp(a),e.set(i,[o])):r>=s.length?(o=new Zp(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var k1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,j1=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],q1=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Kp=new _t,Es=new U,Kd=new U;function $1(a,e,t){let n=new Wi,i=new Xe,r=new Xe,s=new Nt,o=new qo,c=new $o,l={},d=t.maxTextureSize,u={[Xa]:Zt,[Zt]:Xa,[zn]:zn},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:k1,fragmentShader:V1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ne(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let p=this.type;this.render=function(E,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===$h&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let S=a.getRenderTarget(),w=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),F=a.state;F.setBlending(ma),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let P=p!==this.type;P&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(N=>N.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,N=E.length;I<N;I++){let B=E[I],q=B.shadow;if(q===void 0){Qe("WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let k=q.getFrameExtents();i.multiply(k),r.copy(q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/k.x),i.x=r.x*k.x,q.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/k.y),i.y=r.y*k.y,q.mapSize.y=r.y));let V=a.state.buffers.depth.getReversed();if(q.camera._reversedDepth=V,q.map===null||P===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ki){if(B.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new _n(i.x,i.y,{format:Ka,type:Qn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),q.map.texture.name=B.name+".shadowMap",q.map.depthTexture=new ja(i.x,i.y,Gn),q.map.depthTexture.name=B.name+".shadowMapDepth",q.map.depthTexture.format=la,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Wt,q.map.depthTexture.magFilter=Wt}else B.isPointLight?(q.map=new Jl(i.x),q.map.depthTexture=new Fo(i.x,Kn)):(q.map=new _n(i.x,i.y),q.map.depthTexture=new ja(i.x,i.y,Kn)),q.map.depthTexture.name=B.name+".shadowMap",q.map.depthTexture.format=la,this.type===us?(q.map.depthTexture.compareFunction=V?Wl:$l,q.map.depthTexture.minFilter=Jt,q.map.depthTexture.magFilter=Jt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Wt,q.map.depthTexture.magFilter=Wt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);let H=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();B.isPointLight!==!0&&q.updateMatrices(B,x);for(let te=0;te<H;te++){let ge=q.getCamera(te);if(B.isPointLight){let _e=q.camera,He=q.matrix,Fe=B.distance||_e.far;Fe!==_e.far&&(_e.far=Fe,_e.updateProjectionMatrix()),Es.setFromMatrixPosition(B.matrixWorld),_e.position.copy(Es),Kd.copy(_e.position),Kd.add(j1[te]),_e.up.copy(q1[te]),_e.lookAt(Kd),_e.updateMatrixWorld(),He.makeTranslation(-Es.x,-Es.y,-Es.z),Kp.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Kp,_e.coordinateSystem,_e.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)a.setRenderTarget(q.map,te),a.clear();else{te===0&&(a.setRenderTarget(q.map),a.clear());let _e=q.getViewport(te);s.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),F.viewport(s)}n=q.getFrustum(te),_(T,x,ge,B,this.type)}q.isPointLightShadow!==!0&&this.type===Ki&&b(q,x),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(S,w,D)};function b(E,T){let x=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new _n(i.x,i.y,{format:Ka,type:Qn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(T,null,x,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(T,null,x,f,v,null)}function M(E,T,x,S){let w=null,D=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)w=D;else if(w=x.isPointLight===!0?c:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=w.uuid,P=T.uuid,I=l[F];I===void 0&&(I={},l[F]=I);let N=I[P];N===void 0&&(N=w.clone(),I[P]=N,T.addEventListener("dispose",A)),w=N}if(w.visible=T.visible,w.wireframe=T.wireframe,S===Ki?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,x.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=a.properties.get(w);F.light=x}return w}function _(E,T,x,S,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Ki)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let P=e.update(E),I=E.material;if(Array.isArray(I)){let N=P.groups;for(let B=0,q=N.length;B<q;B++){let k=N[B],V=I[k.materialIndex];if(V&&V.visible){let H=M(E,V,S,w);E.onBeforeShadow(a,E,T,x,P,H,k),a.renderBufferDirect(x,null,P,H,E,k),E.onAfterShadow(a,E,T,x,P,H,k)}}}else if(I.visible){let N=M(E,I,S,w);E.onBeforeShadow(a,E,T,x,P,N,null),a.renderBufferDirect(x,null,P,N,E,null),E.onAfterShadow(a,E,T,x,P,N,null)}}let F=E.children;for(let P=0,I=F.length;P<I;P++)_(F[P],T,x,S,w)}function A(E){E.target.removeEventListener("dispose",A);for(let x in l){let S=l[x],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function W1(a,e){function t(){let $=!1,Te=new Nt,pe=null,we=new Nt(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!$&&(a.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){$=Ue},setClear:function(Ue,be,Ze,We,Rt){Rt===!0&&(Ue*=We,be*=We,Ze*=We),Te.set(Ue,be,Ze,We),we.equals(Te)===!1&&(a.clearColor(Ue,be,Ze,We),we.copy(Te))},reset:function(){$=!1,pe=null,we.set(-1,0,0,0)}}}function n(){let $=!1,Te=!1,pe=null,we=null,Ue=null;return{setReversed:function(be){if(Te!==be){let Ze=e.get("EXT_clip_control");be?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Te=be;let We=Ue;Ue=null,this.setClear(We)}},getReversed:function(){return Te},setTest:function(be){be?X(a.DEPTH_TEST):he(a.DEPTH_TEST)},setMask:function(be){pe!==be&&!$&&(a.depthMask(be),pe=be)},setFunc:function(be){if(Te&&(be=wp[be]),we!==be){switch(be){case vo:a.depthFunc(a.NEVER);break;case _o:a.depthFunc(a.ALWAYS);break;case yo:a.depthFunc(a.LESS);break;case Hi:a.depthFunc(a.LEQUAL);break;case So:a.depthFunc(a.EQUAL);break;case Mo:a.depthFunc(a.GEQUAL);break;case Eo:a.depthFunc(a.GREATER);break;case Ao:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}we=be}},setLocked:function(be){$=be},setClear:function(be){Ue!==be&&(Ue=be,Te&&(be=1-be),a.clearDepth(be))},reset:function(){$=!1,pe=null,we=null,Ue=null,Te=!1}}}function i(){let $=!1,Te=null,pe=null,we=null,Ue=null,be=null,Ze=null,We=null,Rt=null;return{setTest:function(St){$||(St?X(a.STENCIL_TEST):he(a.STENCIL_TEST))},setMask:function(St){Te!==St&&!$&&(a.stencilMask(St),Te=St)},setFunc:function(St,jn,ia){(pe!==St||we!==jn||Ue!==ia)&&(a.stencilFunc(St,jn,ia),pe=St,we=jn,Ue=ia)},setOp:function(St,jn,ia){(be!==St||Ze!==jn||We!==ia)&&(a.stencilOp(St,jn,ia),be=St,Ze=jn,We=ia)},setLocked:function(St){$=St},setClear:function(St){Rt!==St&&(a.clearStencil(St),Rt=St)},reset:function(){$=!1,Te=null,pe=null,we=null,Ue=null,be=null,Ze=null,We=null,Rt=null}}}let r=new t,s=new n,o=new i,c=new WeakMap,l=new WeakMap,d={},u={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,b=null,M=null,_=null,A=null,E=null,T=null,x=new Be(0,0,0),S=0,w=!1,D=null,F=null,P=null,I=null,N=null,B=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,k=0,V=a.getParameter(a.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=k>=2);let H=null,te={},ge=a.getParameter(a.SCISSOR_BOX),_e=a.getParameter(a.VIEWPORT),He=new Nt().fromArray(ge),Fe=new Nt().fromArray(_e);function Z($,Te,pe,we){let Ue=new Uint8Array(4),be=a.createTexture();a.bindTexture($,be),a.texParameteri($,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri($,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<pe;Ze++)$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?a.texImage3D(Te,0,a.RGBA,1,1,we,0,a.RGBA,a.UNSIGNED_BYTE,Ue):a.texImage2D(Te+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ue);return be}let G={};G[a.TEXTURE_2D]=Z(a.TEXTURE_2D,a.TEXTURE_2D,1),G[a.TEXTURE_CUBE_MAP]=Z(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[a.TEXTURE_2D_ARRAY]=Z(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),G[a.TEXTURE_3D]=Z(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),X(a.DEPTH_TEST),s.setFunc(Hi),de(!1),ie(yd),X(a.CULL_FACE),Je(ma);function X($){d[$]!==!0&&(a.enable($),d[$]=!0)}function he($){d[$]!==!1&&(a.disable($),d[$]=!1)}function Me($,Te){return h[$]!==Te?(a.bindFramebuffer($,Te),h[$]=Te,$===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=Te),$===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=Te),!0):!1}function fe($,Te){let pe=g,we=!1;if($){pe=f.get(Te),pe===void 0&&(pe=[],f.set(Te,pe));let Ue=$.textures;if(pe.length!==Ue.length||pe[0]!==a.COLOR_ATTACHMENT0){for(let be=0,Ze=Ue.length;be<Ze;be++)pe[be]=a.COLOR_ATTACHMENT0+be;pe.length=Ue.length,we=!0}}else pe[0]!==a.BACK&&(pe[0]=a.BACK,we=!0);we&&a.drawBuffers(pe)}function ye($){return v!==$?(a.useProgram($),v=$,!0):!1}let De={[pi]:a.FUNC_ADD,[Xh]:a.FUNC_SUBTRACT,[Yh]:a.FUNC_REVERSE_SUBTRACT};De[Jh]=a.MIN,De[Zh]=a.MAX;let ue={[Kh]:a.ZERO,[Qh]:a.ONE,[ep]:a.SRC_COLOR,[Ad]:a.SRC_ALPHA,[sp]:a.SRC_ALPHA_SATURATE,[ip]:a.DST_COLOR,[np]:a.DST_ALPHA,[tp]:a.ONE_MINUS_SRC_COLOR,[Td]:a.ONE_MINUS_SRC_ALPHA,[rp]:a.ONE_MINUS_DST_COLOR,[ap]:a.ONE_MINUS_DST_ALPHA,[op]:a.CONSTANT_COLOR,[lp]:a.ONE_MINUS_CONSTANT_COLOR,[cp]:a.CONSTANT_ALPHA,[dp]:a.ONE_MINUS_CONSTANT_ALPHA};function Je($,Te,pe,we,Ue,be,Ze,We,Rt,St){if($===ma){m===!0&&(he(a.BLEND),m=!1);return}if(m===!1&&(X(a.BLEND),m=!0),$!==Wh){if($!==p||St!==w){if((b!==pi||A!==pi)&&(a.blendEquation(a.FUNC_ADD),b=pi,A=pi),St)switch($){case Qi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Sd:a.blendFunc(a.ONE,a.ONE);break;case Md:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ed:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:at("WebGLState: Invalid blending: ",$);break}else switch($){case Qi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Sd:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Md:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ed:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",$);break}M=null,_=null,E=null,T=null,x.set(0,0,0),S=0,p=$,w=St}return}Ue=Ue||Te,be=be||pe,Ze=Ze||we,(Te!==b||Ue!==A)&&(a.blendEquationSeparate(De[Te],De[Ue]),b=Te,A=Ue),(pe!==M||we!==_||be!==E||Ze!==T)&&(a.blendFuncSeparate(ue[pe],ue[we],ue[be],ue[Ze]),M=pe,_=we,E=be,T=Ze),(We.equals(x)===!1||Rt!==S)&&(a.blendColor(We.r,We.g,We.b,Rt),x.copy(We),S=Rt),p=$,w=!1}function z($,Te){$.side===zn?he(a.CULL_FACE):X(a.CULL_FACE);let pe=$.side===Zt;Te&&(pe=!pe),de(pe),$.blending===Qi&&$.transparent===!1?Je(ma):Je($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),s.setFunc($.depthFunc),s.setTest($.depthTest),s.setMask($.depthWrite),r.setMask($.colorWrite);let we=$.stencilWrite;o.setTest(we),we&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Y($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?X(a.SAMPLE_ALPHA_TO_COVERAGE):he(a.SAMPLE_ALPHA_TO_COVERAGE)}function de($){D!==$&&($?a.frontFace(a.CW):a.frontFace(a.CCW),D=$)}function ie($){$!==jh?(X(a.CULL_FACE),$!==F&&($===yd?a.cullFace(a.BACK):$===qh?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):he(a.CULL_FACE),F=$}function J($){$!==P&&(q&&a.lineWidth($),P=$)}function Y($,Te,pe){$?(X(a.POLYGON_OFFSET_FILL),(I!==Te||N!==pe)&&(I=Te,N=pe,s.getReversed()&&(Te=-Te),a.polygonOffset(Te,pe))):he(a.POLYGON_OFFSET_FILL)}function re($){$?X(a.SCISSOR_TEST):he(a.SCISSOR_TEST)}function me($){$===void 0&&($=a.TEXTURE0+B-1),H!==$&&(a.activeTexture($),H=$)}function L($,Te,pe){pe===void 0&&(H===null?pe=a.TEXTURE0+B-1:pe=H);let we=te[pe];we===void 0&&(we={type:void 0,texture:void 0},te[pe]=we),(we.type!==$||we.texture!==Te)&&(H!==pe&&(a.activeTexture(pe),H=pe),a.bindTexture($,Te||G[$]),we.type=$,we.texture=Te)}function Re(){let $=te[H];$!==void 0&&$.type!==void 0&&(a.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function se(){try{a.compressedTexImage2D(...arguments)}catch($){at("WebGLState:",$)}}function R(){try{a.compressedTexImage3D(...arguments)}catch($){at("WebGLState:",$)}}function y(){try{a.texSubImage2D(...arguments)}catch($){at("WebGLState:",$)}}function O(){try{a.texSubImage3D(...arguments)}catch($){at("WebGLState:",$)}}function W(){try{a.compressedTexSubImage2D(...arguments)}catch($){at("WebGLState:",$)}}function ae(){try{a.compressedTexSubImage3D(...arguments)}catch($){at("WebGLState:",$)}}function xe(){try{a.texStorage2D(...arguments)}catch($){at("WebGLState:",$)}}function Se(){try{a.texStorage3D(...arguments)}catch($){at("WebGLState:",$)}}function ne(){try{a.texImage2D(...arguments)}catch($){at("WebGLState:",$)}}function ce(){try{a.texImage3D(...arguments)}catch($){at("WebGLState:",$)}}function ve($){return u[$]!==void 0?u[$]:a.getParameter($)}function Oe($,Te){u[$]!==Te&&(a.pixelStorei($,Te),u[$]=Te)}function Ee($){He.equals($)===!1&&(a.scissor($.x,$.y,$.z,$.w),He.copy($))}function Ae($){Fe.equals($)===!1&&(a.viewport($.x,$.y,$.z,$.w),Fe.copy($))}function ke($,Te){let pe=l.get(Te);pe===void 0&&(pe=new WeakMap,l.set(Te,pe));let we=pe.get($);we===void 0&&(we=a.getUniformBlockIndex(Te,$.name),pe.set($,we))}function Ke($,Te){let we=l.get(Te).get($);c.get(Te)!==we&&(a.uniformBlockBinding(Te,we,$.__bindingPointIndex),c.set(Te,we))}function lt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),d={},u={},H=null,te={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,b=null,M=null,_=null,A=null,E=null,T=null,x=new Be(0,0,0),S=0,w=!1,D=null,F=null,P=null,I=null,N=null,He.set(0,0,a.canvas.width,a.canvas.height),Fe.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:X,disable:he,bindFramebuffer:Me,drawBuffers:fe,useProgram:ye,setBlending:Je,setMaterial:z,setFlipSided:de,setCullFace:ie,setLineWidth:J,setPolygonOffset:Y,setScissorTest:re,activeTexture:me,bindTexture:L,unbindTexture:Re,compressedTexImage2D:se,compressedTexImage3D:R,texImage2D:ne,texImage3D:ce,pixelStorei:Oe,getParameter:ve,updateUBOMapping:ke,uniformBlockBinding:Ke,texStorage2D:xe,texStorage3D:Se,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:ae,scissor:Ee,viewport:Ae,reset:lt}}function X1(a,e,t,n,i,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,d=new WeakMap,u=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return g?new OffscreenCanvas(R,y):Gr("canvas")}function m(R,y,O){let W=1,ae=se(R);if((ae.width>O||ae.height>O)&&(W=O/Math.max(ae.width,ae.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let xe=Math.floor(W*ae.width),Se=Math.floor(W*ae.height);h===void 0&&(h=v(xe,Se));let ne=y?v(xe,Se):h;return ne.width=xe,ne.height=Se,ne.getContext("2d").drawImage(R,0,0,xe,Se),Qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+xe+"x"+Se+")."),ne}else return"data"in R&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){a.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?a.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function _(R,y,O,W,ae,xe=!1){if(R!==null){if(a[R]!==void 0)return a[R];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Se;W&&(Se=e.get("EXT_texture_norm16"),Se||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=y;if(y===a.RED&&(O===a.FLOAT&&(ne=a.R32F),O===a.HALF_FLOAT&&(ne=a.R16F),O===a.UNSIGNED_BYTE&&(ne=a.R8),O===a.UNSIGNED_SHORT&&Se&&(ne=Se.R16_EXT),O===a.SHORT&&Se&&(ne=Se.R16_SNORM_EXT)),y===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(ne=a.R8UI),O===a.UNSIGNED_SHORT&&(ne=a.R16UI),O===a.UNSIGNED_INT&&(ne=a.R32UI),O===a.BYTE&&(ne=a.R8I),O===a.SHORT&&(ne=a.R16I),O===a.INT&&(ne=a.R32I)),y===a.RG&&(O===a.FLOAT&&(ne=a.RG32F),O===a.HALF_FLOAT&&(ne=a.RG16F),O===a.UNSIGNED_BYTE&&(ne=a.RG8),O===a.UNSIGNED_SHORT&&Se&&(ne=Se.RG16_EXT),O===a.SHORT&&Se&&(ne=Se.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(ne=a.RG8UI),O===a.UNSIGNED_SHORT&&(ne=a.RG16UI),O===a.UNSIGNED_INT&&(ne=a.RG32UI),O===a.BYTE&&(ne=a.RG8I),O===a.SHORT&&(ne=a.RG16I),O===a.INT&&(ne=a.RG32I)),y===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(ne=a.RGB8UI),O===a.UNSIGNED_SHORT&&(ne=a.RGB16UI),O===a.UNSIGNED_INT&&(ne=a.RGB32UI),O===a.BYTE&&(ne=a.RGB8I),O===a.SHORT&&(ne=a.RGB16I),O===a.INT&&(ne=a.RGB32I)),y===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(ne=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(ne=a.RGBA16UI),O===a.UNSIGNED_INT&&(ne=a.RGBA32UI),O===a.BYTE&&(ne=a.RGBA8I),O===a.SHORT&&(ne=a.RGBA16I),O===a.INT&&(ne=a.RGBA32I)),y===a.RGB&&(O===a.UNSIGNED_SHORT&&Se&&(ne=Se.RGB16_EXT),O===a.SHORT&&Se&&(ne=Se.RGB16_SNORM_EXT),O===a.UNSIGNED_INT_5_9_9_9_REV&&(ne=a.RGB9_E5),O===a.UNSIGNED_INT_10F_11F_11F_REV&&(ne=a.R11F_G11F_B10F)),y===a.RGBA){let ce=xe?zr:ft.getTransfer(ae);O===a.FLOAT&&(ne=a.RGBA32F),O===a.HALF_FLOAT&&(ne=a.RGBA16F),O===a.UNSIGNED_BYTE&&(ne=ce===Et?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT&&Se&&(ne=Se.RGBA16_EXT),O===a.SHORT&&Se&&(ne=Se.RGBA16_SNORM_EXT),O===a.UNSIGNED_SHORT_4_4_4_4&&(ne=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(ne=a.RGB5_A1)}return(ne===a.R16F||ne===a.R32F||ne===a.RG16F||ne===a.RG32F||ne===a.RGBA16F||ne===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function A(R,y){let O;return R?y===null||y===Kn||y===tr?O=a.DEPTH24_STENCIL8:y===Gn?O=a.DEPTH32F_STENCIL8:y===er&&(O=a.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Kn||y===tr?O=a.DEPTH_COMPONENT24:y===Gn?O=a.DEPTH_COMPONENT32F:y===er&&(O=a.DEPTH_COMPONENT16),O}function E(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Jt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function T(R){let y=R.target;y.removeEventListener("dispose",T),S(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&u.delete(y)}function x(R){let y=R.target;y.removeEventListener("dispose",x),D(y)}function S(R){let y=n.get(R);if(y.__webglInit===void 0)return;let O=R.source,W=f.get(O);if(W){let ae=W[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(R),Object.keys(W).length===0&&f.delete(O)}n.remove(R)}function w(R){let y=n.get(R);a.deleteTexture(y.__webglTexture);let O=R.source,W=f.get(O);delete W[y.__cacheKey],s.memory.textures--}function D(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let ae=0;ae<y.__webglFramebuffer[W].length;ae++)a.deleteFramebuffer(y.__webglFramebuffer[W][ae]);else a.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)a.deleteFramebuffer(y.__webglFramebuffer[W]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=R.textures;for(let W=0,ae=O.length;W<ae;W++){let xe=n.get(O[W]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),s.memory.textures--),n.remove(O[W])}n.remove(R)}let F=0;function P(){F=0}function I(){return F}function N(R){F=R}function B(){let R=F;return R>=i.maxTextures&&Qe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function q(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function k(R,y){let O=n.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){let W=R.image;if(W===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{he(O,R,y);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+y)}function V(R,y){let O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){he(O,R,y);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+y)}function H(R,y){let O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){he(O,R,y);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+y)}function te(R,y){let O=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){Me(O,R,y);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+y)}let ge={[Va]:a.REPEAT,[oa]:a.CLAMP_TO_EDGE,[To]:a.MIRRORED_REPEAT},_e={[Wt]:a.NEAREST,[pp]:a.NEAREST_MIPMAP_NEAREST,[fs]:a.NEAREST_MIPMAP_LINEAR,[Jt]:a.LINEAR,[ll]:a.LINEAR_MIPMAP_NEAREST,[Ja]:a.LINEAR_MIPMAP_LINEAR},He={[xp]:a.NEVER,[Sp]:a.ALWAYS,[bp]:a.LESS,[$l]:a.LEQUAL,[vp]:a.EQUAL,[Wl]:a.GEQUAL,[_p]:a.GREATER,[yp]:a.NOTEQUAL};function Fe(R,y){if(y.type===Gn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Jt||y.magFilter===ll||y.magFilter===fs||y.magFilter===Ja||y.minFilter===Jt||y.minFilter===ll||y.minFilter===fs||y.minFilter===Ja)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,ge[y.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,ge[y.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,ge[y.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,_e[y.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==fs&&y.minFilter!==Ja||y.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Z(R,y){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",T));let W=y.source,ae=f.get(W);ae===void 0&&(ae={},f.set(W,ae));let xe=q(y);if(xe!==R.__cacheKey){ae[xe]===void 0&&(ae[xe]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),ae[xe].usedTimes++;let Se=ae[R.__cacheKey];Se!==void 0&&(ae[R.__cacheKey].usedTimes--,Se.usedTimes===0&&w(y)),R.__cacheKey=xe,R.__webglTexture=ae[xe].texture}return O}function G(R,y,O){return Math.floor(Math.floor(R/O)/y)}function X(R,y,O,W){let xe=R.updateRanges;if(xe.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,O,W,y.data);else{xe.sort((Oe,Ee)=>Oe.start-Ee.start);let Se=0;for(let Oe=1;Oe<xe.length;Oe++){let Ee=xe[Se],Ae=xe[Oe],ke=Ee.start+Ee.count,Ke=G(Ae.start,y.width,4),lt=G(Ee.start,y.width,4);Ae.start<=ke+1&&Ke===lt&&G(Ae.start+Ae.count-1,y.width,4)===Ke?Ee.count=Math.max(Ee.count,Ae.start+Ae.count-Ee.start):(++Se,xe[Se]=Ae)}xe.length=Se+1;let ne=t.getParameter(a.UNPACK_ROW_LENGTH),ce=t.getParameter(a.UNPACK_SKIP_PIXELS),ve=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let Oe=0,Ee=xe.length;Oe<Ee;Oe++){let Ae=xe[Oe],ke=Math.floor(Ae.start/4),Ke=Math.ceil(Ae.count/4),lt=ke%y.width,$=Math.floor(ke/y.width),Te=Ke,pe=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(a.UNPACK_SKIP_ROWS,$),t.texSubImage2D(a.TEXTURE_2D,0,lt,$,Te,pe,O,W,y.data)}R.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,ne),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(a.UNPACK_SKIP_ROWS,ve)}}function he(R,y,O){let W=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=a.TEXTURE_3D);let ae=Z(R,y),xe=y.source;t.bindTexture(W,R.__webglTexture,a.TEXTURE0+O);let Se=n.get(xe);if(xe.version!==Se.__version||ae===!0){if(t.activeTexture(a.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let pe=ft.getPrimaries(ft.workingColorSpace),we=y.colorSpace===Ca?null:ft.getPrimaries(y.colorSpace),Ue=y.colorSpace===Ca||pe===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let ce=m(y.image,!1,i.maxTextureSize);ce=Re(y,ce);let ve=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type),Ee=_(y.internalFormat,ve,Oe,y.normalized,y.colorSpace,y.isVideoTexture);Fe(W,y);let Ae,ke=y.mipmaps,Ke=y.isVideoTexture!==!0,lt=Se.__version===void 0||ae===!0,$=xe.dataReady,Te=E(y,ce);if(y.isDepthTexture)Ee=A(y.format===Za,y.type),lt&&(Ke?t.texStorage2D(a.TEXTURE_2D,1,Ee,ce.width,ce.height):t.texImage2D(a.TEXTURE_2D,0,Ee,ce.width,ce.height,0,ve,Oe,null));else if(y.isDataTexture)if(ke.length>0){Ke&&lt&&t.texStorage2D(a.TEXTURE_2D,Te,Ee,ke[0].width,ke[0].height);for(let pe=0,we=ke.length;pe<we;pe++)Ae=ke[pe],Ke?$&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,ve,Oe,Ae.data):t.texImage2D(a.TEXTURE_2D,pe,Ee,Ae.width,Ae.height,0,ve,Oe,Ae.data);y.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(a.TEXTURE_2D,Te,Ee,ce.width,ce.height),$&&X(y,ce,ve,Oe)):t.texImage2D(a.TEXTURE_2D,0,Ee,ce.width,ce.height,0,ve,Oe,ce.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&lt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Ee,ke[0].width,ke[0].height,ce.depth);for(let pe=0,we=ke.length;pe<we;pe++)if(Ae=ke[pe],y.format!==Hn)if(ve!==null)if(Ke){if($)if(y.layerUpdates.size>0){let Ue=$d(Ae.width,Ae.height,y.format,y.type);for(let be of y.layerUpdates){let Ze=Ae.data.subarray(be*Ue/Ae.data.BYTES_PER_ELEMENT,(be+1)*Ue/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,be,Ae.width,Ae.height,1,ve,Ze)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,ce.depth,ve,Ae.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,pe,Ee,Ae.width,Ae.height,ce.depth,0,Ae.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?$&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,ce.depth,ve,Oe,Ae.data):t.texImage3D(a.TEXTURE_2D_ARRAY,pe,Ee,Ae.width,Ae.height,ce.depth,0,ve,Oe,Ae.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ke&&lt&&t.texStorage2D(a.TEXTURE_2D,Te,Ee,ke[0].width,ke[0].height);for(let pe=0,we=ke.length;pe<we;pe++)Ae=ke[pe],y.format!==Hn?ve!==null?Ke?$&&t.compressedTexSubImage2D(a.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,ve,Ae.data):t.compressedTexImage2D(a.TEXTURE_2D,pe,Ee,Ae.width,Ae.height,0,Ae.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?$&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,ve,Oe,Ae.data):t.texImage2D(a.TEXTURE_2D,pe,Ee,Ae.width,Ae.height,0,ve,Oe,Ae.data)}else if(y.isDataArrayTexture)if(Ke){if(lt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Te,Ee,ce.width,ce.height,ce.depth),$)if(y.layerUpdates.size>0){let pe=$d(ce.width,ce.height,y.format,y.type);for(let we of y.layerUpdates){let Ue=ce.data.subarray(we*pe/ce.data.BYTES_PER_ELEMENT,(we+1)*pe/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,we,ce.width,ce.height,1,ve,Oe,Ue)}y.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Oe,ce.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ee,ce.width,ce.height,ce.depth,0,ve,Oe,ce.data);else if(y.isData3DTexture)Ke?(lt&&t.texStorage3D(a.TEXTURE_3D,Te,Ee,ce.width,ce.height,ce.depth),$&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Oe,ce.data)):t.texImage3D(a.TEXTURE_3D,0,Ee,ce.width,ce.height,ce.depth,0,ve,Oe,ce.data);else if(y.isFramebufferTexture){if(lt)if(Ke)t.texStorage2D(a.TEXTURE_2D,Te,Ee,ce.width,ce.height);else{let pe=ce.width,we=ce.height;for(let Ue=0;Ue<Te;Ue++)t.texImage2D(a.TEXTURE_2D,Ue,Ee,pe,we,0,ve,Oe,null),pe>>=1,we>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){let pe=a.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ce.parentNode!==pe){pe.appendChild(ce),u.add(y),pe.onpaint=we=>{let Ue=we.changedElements;for(let be of u)Ue.includes(be.image)&&(be.needsUpdate=!0)},pe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ce);else{let Ue=a.RGBA,be=a.RGBA,Ze=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ue,be,Ze,ce)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ke&&lt){let pe=se(ke[0]);t.texStorage2D(a.TEXTURE_2D,Te,Ee,pe.width,pe.height)}for(let pe=0,we=ke.length;pe<we;pe++)Ae=ke[pe],Ke?$&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,ve,Oe,Ae):t.texImage2D(a.TEXTURE_2D,pe,Ee,ve,Oe,Ae);y.generateMipmaps=!1}else if(Ke){if(lt){let pe=se(ce);t.texStorage2D(a.TEXTURE_2D,Te,Ee,pe.width,pe.height)}$&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ve,Oe,ce)}else t.texImage2D(a.TEXTURE_2D,0,Ee,ve,Oe,ce);p(y)&&b(W),Se.__version=xe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Me(R,y,O){if(y.image.length!==6)return;let W=Z(R,y),ae=y.source;t.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+O);let xe=n.get(ae);if(ae.version!==xe.__version||W===!0){t.activeTexture(a.TEXTURE0+O);let Se=ft.getPrimaries(ft.workingColorSpace),ne=y.colorSpace===Ca?null:ft.getPrimaries(y.colorSpace),ce=y.colorSpace===Ca||Se===ne?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ve=y.isCompressedTexture||y.image[0].isCompressedTexture,Oe=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let be=0;be<6;be++)!ve&&!Oe?Ee[be]=m(y.image[be],!0,i.maxCubemapSize):Ee[be]=Oe?y.image[be].image:y.image[be],Ee[be]=Re(y,Ee[be]);let Ae=Ee[0],ke=r.convert(y.format,y.colorSpace),Ke=r.convert(y.type),lt=_(y.internalFormat,ke,Ke,y.normalized,y.colorSpace),$=y.isVideoTexture!==!0,Te=xe.__version===void 0||W===!0,pe=ae.dataReady,we=E(y,Ae);Fe(a.TEXTURE_CUBE_MAP,y);let Ue;if(ve){$&&Te&&t.texStorage2D(a.TEXTURE_CUBE_MAP,we,lt,Ae.width,Ae.height);for(let be=0;be<6;be++){Ue=Ee[be].mipmaps;for(let Ze=0;Ze<Ue.length;Ze++){let We=Ue[Ze];y.format!==Hn?ke!==null?$?pe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,We.width,We.height,ke,We.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,lt,We.width,We.height,0,We.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,0,0,We.width,We.height,ke,Ke,We.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze,lt,We.width,We.height,0,ke,Ke,We.data)}}}else{if(Ue=y.mipmaps,$&&Te){Ue.length>0&&we++;let be=se(Ee[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,we,lt,be.width,be.height)}for(let be=0;be<6;be++)if(Oe){$?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ee[be].width,Ee[be].height,ke,Ke,Ee[be].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,Ee[be].width,Ee[be].height,0,ke,Ke,Ee[be].data);for(let Ze=0;Ze<Ue.length;Ze++){let Rt=Ue[Ze].image[be].image;$?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,Rt.width,Rt.height,ke,Ke,Rt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,lt,Rt.width,Rt.height,0,ke,Ke,Rt.data)}}else{$?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ke,Ke,Ee[be]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,lt,ke,Ke,Ee[be]);for(let Ze=0;Ze<Ue.length;Ze++){let We=Ue[Ze];$?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,0,0,ke,Ke,We.image[be]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ze+1,lt,ke,Ke,We.image[be])}}}p(y)&&b(a.TEXTURE_CUBE_MAP),xe.__version=ae.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function fe(R,y,O,W,ae,xe){let Se=r.convert(O.format,O.colorSpace),ne=r.convert(O.type),ce=_(O.internalFormat,Se,ne,O.normalized,O.colorSpace),ve=n.get(y),Oe=n.get(O);if(Oe.__renderTarget=y,!ve.__hasExternalTextures){let Ee=Math.max(1,y.width>>xe),Ae=Math.max(1,y.height>>xe);ae===a.TEXTURE_3D||ae===a.TEXTURE_2D_ARRAY?t.texImage3D(ae,xe,ce,Ee,Ae,y.depth,0,Se,ne,null):t.texImage2D(ae,xe,ce,Ee,Ae,0,Se,ne,null)}t.bindFramebuffer(a.FRAMEBUFFER,R),me(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,W,ae,Oe.__webglTexture,0,re(y)):(ae===a.TEXTURE_2D||ae>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,W,ae,Oe.__webglTexture,xe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ye(R,y,O){if(a.bindRenderbuffer(a.RENDERBUFFER,R),y.depthBuffer){let W=y.depthTexture,ae=W&&W.isDepthTexture?W.type:null,xe=A(y.stencilBuffer,ae),Se=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;me(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,re(y),xe,y.width,y.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,re(y),xe,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,xe,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Se,a.RENDERBUFFER,R)}else{let W=y.textures;for(let ae=0;ae<W.length;ae++){let xe=W[ae],Se=r.convert(xe.format,xe.colorSpace),ne=r.convert(xe.type),ce=_(xe.internalFormat,Se,ne,xe.normalized,xe.colorSpace);me(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,re(y),ce,y.width,y.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,re(y),ce,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,ce,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function De(R,y,O){let W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(y.depthTexture);if(ae.__renderTarget=y,(!ae.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),ae.__webglTexture===void 0){ae.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),Fe(a.TEXTURE_CUBE_MAP,y.depthTexture);let ve=r.convert(y.depthTexture.format),Oe=r.convert(y.depthTexture.type),Ee;y.depthTexture.format===la?Ee=a.DEPTH_COMPONENT24:y.depthTexture.format===Za&&(Ee=a.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Ee,y.width,y.height,0,ve,Oe,null)}}else k(y.depthTexture,0);let xe=ae.__webglTexture,Se=re(y),ne=W?a.TEXTURE_CUBE_MAP_POSITIVE_X+O:a.TEXTURE_2D,ce=y.depthTexture.format===Za?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===la)me(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ce,ne,xe,0,Se):a.framebufferTexture2D(a.FRAMEBUFFER,ce,ne,xe,0);else if(y.depthTexture.format===Za)me(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ce,ne,xe,0,Se):a.framebufferTexture2D(a.FRAMEBUFFER,ce,ne,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(R){let y=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",ae)};W.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=W}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)De(y.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?De(y.__webglFramebuffer[0],R,0):De(y.__webglFramebuffer,R,0)}else if(O){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=a.createRenderbuffer(),ye(y.__webglDepthbuffer[W],R,!1);else{let ae=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=y.__webglDepthbuffer[W];a.bindRenderbuffer(a.RENDERBUFFER,xe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ae,a.RENDERBUFFER,xe)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),ye(y.__webglDepthbuffer,R,!1);else{let ae=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,xe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ae,a.RENDERBUFFER,xe)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Je(R,y,O){let W=n.get(R);y!==void 0&&fe(W.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&ue(R)}function z(R){let y=R.texture,O=n.get(R),W=n.get(y);R.addEventListener("dispose",x);let ae=R.textures,xe=R.isWebGLCubeRenderTarget===!0,Se=ae.length>1;if(Se||(W.__webglTexture===void 0&&(W.__webglTexture=a.createTexture()),W.__version=y.version,s.memory.textures++),xe){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let ce=0;ce<y.mipmaps.length;ce++)O.__webglFramebuffer[ne][ce]=a.createFramebuffer()}else O.__webglFramebuffer[ne]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)O.__webglFramebuffer[ne]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(Se)for(let ne=0,ce=ae.length;ne<ce;ne++){let ve=n.get(ae[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture(),s.memory.textures++)}if(R.samples>0&&me(R)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<ae.length;ne++){let ce=ae[ne];O.__webglColorRenderbuffer[ne]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);let ve=r.convert(ce.format,ce.colorSpace),Oe=r.convert(ce.type),Ee=_(ce.internalFormat,ve,Oe,ce.normalized,ce.colorSpace,R.isXRRenderTarget===!0),Ae=re(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ae,Ee,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ne,a.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),ye(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(xe){t.bindTexture(a.TEXTURE_CUBE_MAP,W.__webglTexture),Fe(a.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)fe(O.__webglFramebuffer[ne][ce],R,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce);else fe(O.__webglFramebuffer[ne],R,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(y)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,ce=ae.length;ne<ce;ne++){let ve=ae[ne],Oe=n.get(ve),Ee=a.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ee=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Oe.__webglTexture),Fe(Ee,ve),fe(O.__webglFramebuffer,R,ve,a.COLOR_ATTACHMENT0+ne,Ee,0),p(ve)&&b(Ee)}t.unbindTexture()}else{let ne=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),Fe(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)fe(O.__webglFramebuffer[ce],R,y,a.COLOR_ATTACHMENT0,ne,ce);else fe(O.__webglFramebuffer,R,y,a.COLOR_ATTACHMENT0,ne,0);p(y)&&b(ne),t.unbindTexture()}R.depthBuffer&&ue(R)}function de(R){let y=R.textures;for(let O=0,W=y.length;O<W;O++){let ae=y[O];if(p(ae)){let xe=M(R),Se=n.get(ae).__webglTexture;t.bindTexture(xe,Se),b(xe),t.unbindTexture()}}}let ie=[],J=[];function Y(R){if(R.samples>0){if(me(R)===!1){let y=R.textures,O=R.width,W=R.height,ae=a.COLOR_BUFFER_BIT,xe=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=n.get(R),ne=y.length>1;if(ne)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ce=R.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=a.STENCIL_BUFFER_BIT)),ne){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);let Oe=n.get(y[ve]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Oe,0)}a.blitFramebuffer(0,0,O,W,0,0,O,W,ae,a.NEAREST),c===!0&&(ie.length=0,J.length=0,ie.push(a.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ie.push(xe),J.push(xe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,J)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);let Oe=n.get(y[ve]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Se.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.TEXTURE_2D,Oe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let y=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function re(R){return Math.min(i.maxSamples,R.samples)}function me(R){let y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(R){let y=s.render.frame;d.get(R)!==y&&(d.set(R,y),R.update())}function Re(R,y){let O=R.colorSpace,W=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Br&&O!==Ca&&(ft.getTransfer(O)===Et?(W!==Hn||ae!==Sn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",O)),y}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.getTextureUnits=I,this.setTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=te,this.rebindTextures=Je,this.setupRenderTarget=z,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Y1(a,e){function t(n,i=Ca){let r,s=ft.getTransfer(i);if(n===Sn)return a.UNSIGNED_BYTE;if(n===dl)return a.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Od)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nd)return a.BYTE;if(n===Fd)return a.SHORT;if(n===er)return a.UNSIGNED_SHORT;if(n===cl)return a.INT;if(n===Kn)return a.UNSIGNED_INT;if(n===Gn)return a.FLOAT;if(n===Qn)return a.HALF_FLOAT;if(n===Bd)return a.ALPHA;if(n===zd)return a.RGB;if(n===Hn)return a.RGBA;if(n===la)return a.DEPTH_COMPONENT;if(n===Za)return a.DEPTH_STENCIL;if(n===hl)return a.RED;if(n===pl)return a.RED_INTEGER;if(n===Ka)return a.RG;if(n===fl)return a.RG_INTEGER;if(n===ml)return a.RGBA_INTEGER;if(n===ms||n===gs||n===xs||n===bs)if(s===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===xl||n===bl||n===vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===yl||n===Sl||n===Ml||n===El||n===vs||n===Al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===yl)return s===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return r.COMPRESSED_R11_EAC;if(n===El)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vs)return r.COMPRESSED_RG11_EAC;if(n===Al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tl||n===wl||n===Cl||n===Rl||n===Pl||n===Il||n===Dl||n===Ll||n===Nl||n===Fl||n===Ul||n===Ol||n===Bl||n===zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ll)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return s===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Hl||n===kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return s===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===jl||n===_s||n===ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var J1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Yr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:J1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new wa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends ca{constructor(e,t){super();let n=this,i=null,r=1,s=null,o="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new su,p={},b=t.getContextAttributes(),M=null,_=null,A=[],E=[],T=new Xe,x=null,S=null,w=new Yt;w.viewport=new Nt;let D=new Yt;D.viewport=new Nt;let F=[w,D],P=new il,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=A[G];return X===void 0&&(X=new qi,A[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=A[G];return X===void 0&&(X=new qi,A[G]=X),X.getGripSpace()},this.getHand=function(G){let X=A[G];return X===void 0&&(X=new qi,A[G]=X),X.getHandSpace()};function B(G){let X=E.indexOf(G.inputSource);if(X===-1)return;let he=A[X];he!==void 0&&(he.update(G.inputSource,G.frame,l||s),he.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",k);for(let G=0;G<A.length;G++){let X=E[G];X!==null&&(E[G]=null,A[G].disconnect(X))}I=null,N=null,m.reset();for(let G in p)delete p[G];if(e.setRenderTarget(M),f=null,h=null,u=null,i=null,_=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),S!==null){let G=S.camera;G.fov=S.fov,G.zoom=S.zoom,G.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",q),i.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Me=null,fe=null;b.depth&&(fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=b.stencil?Za:la,Me=b.stencil?tr:Kn);let ye={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(ye),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new _n(h.textureWidth,h.textureHeight,{format:Hn,type:Sn,depthTexture:new ja(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let he={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new _n(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await i.requestReferenceSpace(o),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(G){for(let X=0;X<G.removed.length;X++){let he=G.removed[X],Me=E.indexOf(he);Me>=0&&(E[Me]=null,A[Me].disconnect(he))}for(let X=0;X<G.added.length;X++){let he=G.added[X],Me=E.indexOf(he);if(Me===-1){for(let ye=0;ye<A.length;ye++)if(ye>=E.length){E.push(he),Me=ye;break}else if(E[ye]===null){E[ye]=he,Me=ye;break}if(Me===-1)break}let fe=A[Me];fe&&fe.connect(he)}}let V=new U,H=new U;function te(G,X,he){V.setFromMatrixPosition(X.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);let Me=V.distanceTo(H),fe=X.projectionMatrix.elements,ye=he.projectionMatrix.elements,De=fe[14]/(fe[10]-1),ue=fe[14]/(fe[10]+1),Je=(fe[9]+1)/fe[5],z=(fe[9]-1)/fe[5],de=(fe[8]-1)/fe[0],ie=(ye[8]+1)/ye[0],J=De*de,Y=De*ie,re=Me/(-de+ie),me=re*-de;if(X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(me),G.translateZ(re),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),fe[10]===-1)G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let L=De+re,Re=ue+re,se=J-me,R=Y+(Me-me),y=Je*ue/Re*L,O=z*ue/Re*L;G.projectionMatrix.makePerspective(se,R,y,O,L,Re),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ge(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let X=G.near,he=G.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(he=m.depthFar)),P.near=D.near=w.near=X,P.far=D.far=w.far=he,(I!==P.near||N!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,N=P.far),P.layers.mask=G.layers.mask|6,w.layers.mask=P.layers.mask&-5,D.layers.mask=P.layers.mask&-3;let Me=G.parent,fe=P.cameras;ge(P,Me);for(let ye=0;ye<fe.length;ye++)ge(fe[ye],Me);fe.length===2?te(P,w,D):P.projectionMatrix.copy(w.projectionMatrix),S===null&&G.isPerspectiveCamera&&(S={camera:G,fov:G.fov,zoom:G.zoom}),_e(G,P,Me)};function _e(G,X,he){he===null?G.matrix.copy(X.matrixWorld):(G.matrix.copy(he.matrixWorld),G.matrix.invert(),G.matrix.multiply(X.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Co*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(G){return p[G]};let He=null;function Fe(G,X){if(d=X.getViewerPose(l||s),g=X,d!==null){let he=d.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Me=!1;he.length!==P.cameras.length&&(P.cameras.length=0,Me=!0);for(let ue=0;ue<he.length;ue++){let Je=he[ue],z=null;if(f!==null)z=f.getViewport(Je);else{let ie=u.getViewSubImage(h,Je);z=ie.viewport,ue===0&&(e.setRenderTargetTextures(_,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(_))}let de=F[ue];de===void 0&&(de=new Yt,de.layers.enable(ue),de.viewport=new Nt,F[ue]=de),de.matrix.fromArray(Je.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Je.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(z.x,z.y,z.width,z.height),ue===0&&(P.matrix.copy(de.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Me===!0&&P.cameras.push(de)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let ue=u.getDepthInformation(he[0]);ue&&ue.isValid&&ue.texture&&m.init(ue,i.renderState)}if(fe&&fe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ue=0;ue<he.length;ue++){let Je=he[ue].camera;if(Je){let z=p[Je];z||(z=new Yr,p[Je]=z);let de=u.getCameraImage(Je);z.sourceTexture=de}}}}for(let he=0;he<A.length;he++){let Me=E[he],fe=A[he];Me!==null&&fe!==void 0&&fe.update(Me,X,l||s)}He&&He(G,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let Z=new Qp;Z.setAnimationLoop(Fe),this.setAnimationLoop=function(G){He=G},this.dispose=function(){}}},K1=new _t,sf=new st;sf.set(-1,0,0,0,1,0,0,0,1);function Q1(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vd(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,M,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),M=b.envMap,_=b.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e_(a,e,t,n){let i={},r={},s=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,A){let E=A.program;n.uniformBlockBinding(_,E)}function l(_,A){let E=i[_.id];E===void 0&&(m(_),E=d(_),i[_.id]=E,_.addEventListener("dispose",b));let T=A.program;n.updateUBOMapping(_,T);let x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function d(_){let A=u();_.__bindingPointIndex=A;let E=a.createBuffer(),T=_.__size,x=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,T,x),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,A,E),E}function u(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let A=i[_.id],E=_.uniforms,T=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,A);for(let x=0,S=E.length;x<S;x++){let w=E[x];if(Array.isArray(w))for(let D=0,F=w.length;D<F;D++)f(w[D],x,D,T);else f(w,x,0,T)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(_,A,E,T){if(v(_,A,E,T)===!0){let x=_.__offset,S=_.value;if(Array.isArray(S)){let w=0;for(let D=0;D<S.length;D++){let F=S[D],P=p(F);g(F,_.__data,w),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(w+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,_.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,x,_.__data)}}function g(_,A,E){typeof _=="number"||typeof _=="boolean"?A[0]=_:_.isMatrix3?(A[0]=_.elements[0],A[1]=_.elements[1],A[2]=_.elements[2],A[3]=0,A[4]=_.elements[3],A[5]=_.elements[4],A[6]=_.elements[5],A[7]=0,A[8]=_.elements[6],A[9]=_.elements[7],A[10]=_.elements[8],A[11]=0):ArrayBuffer.isView(_)?A.set(new _.constructor(_.buffer,_.byteOffset,A.length)):_.toArray(A,E)}function v(_,A,E,T){let x=_.value,S=A+"_"+E;if(T[S]===void 0)return typeof x=="number"||typeof x=="boolean"?T[S]=x:ArrayBuffer.isView(x)?T[S]=x.slice():T[S]=x.clone(),!0;{let w=T[S];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return T[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function m(_){let A=_.uniforms,E=0,T=16;for(let S=0,w=A.length;S<w;S++){let D=Array.isArray(A[S])?A[S]:[A[S]];for(let F=0,P=D.length;F<P;F++){let I=D[F],N=Array.isArray(I.value)?I.value:[I.value];for(let B=0,q=N.length;B<q;B++){let k=N[B],V=p(k),H=E%T,te=H%V.boundary,ge=H+te;E+=te,ge!==0&&T-ge<V.storage&&(E+=T-ge),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=V.storage}}}let x=E%T;return x>0&&(E+=T-x),_.__size=E,_.__cache={},this}function p(_){let A={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(A.boundary=4,A.storage=4):_.isVector2?(A.boundary=8,A.storage=8):_.isVector3||_.isColor?(A.boundary=16,A.storage=12):_.isVector4?(A.boundary=16,A.storage=16):_.isMatrix3?(A.boundary=48,A.storage=48):_.isMatrix4?(A.boundary=64,A.storage=64):_.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(A.boundary=16,A.storage=_.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",_),A}function b(_){let A=_.target;A.removeEventListener("dispose",b);let E=s.indexOf(A.__bindingPointIndex);s.splice(E,1),a.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function M(){for(let _ in i)a.deleteBuffer(i[_]);s=[],i={},r={}}return{bind:c,update:l,dispose:M}}var t_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ga=null;function n_(){return ga===null&&(ga=new Wr(t_,16,16,Ka,Qn),ga.name="DFG_LUT",ga.minFilter=Jt,ga.magFilter=Jt,ga.wrapS=oa,ga.wrapT=oa,ga.generateMipmaps=!1,ga.needsUpdate=!0),ga}var Zl=class{constructor(e={}){let{canvas:t=Ep(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=s;let v=f,m=new Set([ml,fl,pl]),p=new Set([Sn,Kn,er,tr,dl,ul]),b=new Uint32Array(4),M=new Int32Array(4),_=new U,A=null,E=null,T=[],x=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,D=!1,F=null,P=null,I=null,N=null;this._outputColorSpace=Ut;let B=0,q=0,k=null,V=-1,H=null,te=new Nt,ge=new Nt,_e=null,He=new Be(0),Fe=0,Z=t.width,G=t.height,X=1,he=null,Me=null,fe=new Nt(0,0,Z,G),ye=new Nt(0,0,Z,G),De=!1,ue=new Wi,Je=!1,z=!1,de=new _t,ie=new U,J=new Nt,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function me(){return k===null?X:1}let L=n;function Re(C,j){return t.getContext(C,j)}let se,R,y,O,W,ae,xe,Se,ne,ce,ve,Oe,Ee,Ae,ke,Ke,lt,$,Te,pe,we,Ue,be;try{let C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",jn,!1),L===null){let j="webgl2";if(L=Re(j,C),L===null)throw Re(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(C){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",jn,!1),at("WebGLRenderer: "+C.message),C}function Ze(){se=new cv(L),se.init(),we=new Y1(L,se),R=new Qb(L,se,e,we),y=new W1(L,se),R.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),P=L.createFramebuffer(),I=L.createFramebuffer(),N=L.createFramebuffer(),O=new hv(L),W=new L1,ae=new X1(L,se,y,W,R,we,O),xe=new lv(w),Se=new fg(L),Ue=new Zb(L,Se),ne=new dv(L,Se,O,Ue),ce=new fv(L,ne,Se,Ue,O),$=new pv(L,R,ae),ke=new ev(W),ve=new D1(w,xe,se,R,Ue,ke),Oe=new Q1(w,W),Ee=new F1,Ae=new H1(se),lt=new Jb(w,xe,y,ce,g,c),Ke=new $1(w,ce,R),be=new e_(L,O,R,y),Te=new Kb(L,se,O),pe=new uv(L,se,O),O.programs=ve.programs,w.capabilities=R,w.extensions=se,w.properties=W,w.renderLists=Ee,w.shadowMap=Ke,w.state=y,w.info=O}v!==Sn&&(S=new gv(v,t.width,t.height,o,i,r));let We=new ou(w,L);this.xr=We,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(Z,G,!1))},this.getSize=function(C){return C.set(Z,G)},this.setSize=function(C,j,oe=!0){if(We.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,G=j,t.width=Math.floor(C*X),t.height=Math.floor(j*X),oe===!0&&(t.style.width=C+"px",t.style.height=j+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(Z*X,G*X).floor()},this.setDrawingBufferSize=function(C,j,oe){Z=C,G=j,X=oe,t.width=Math.floor(C*oe),t.height=Math.floor(j*oe),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(v===Sn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(te)},this.getViewport=function(C){return C.copy(fe)},this.setViewport=function(C,j,oe,Q){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,j,oe,Q),y.viewport(te.copy(fe).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,j,oe,Q){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,j,oe,Q),y.scissor(ge.copy(ye).multiplyScalar(X).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){y.setScissorTest(De=C)},this.setOpaqueSort=function(C){he=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,oe=!0){let Q=0;if(C){let ee=!1;if(k!==null){let Le=k.texture.format;ee=m.has(Le)}if(ee){let Le=k.texture.type,Ge=p.has(Le),Ie=lt.getClearColor(),Ve=lt.getClearAlpha(),Ye=Ie.r,ct=Ie.g,ht=Ie.b;Ge?(b[0]=Ye,b[1]=ct,b[2]=ht,b[3]=Ve,L.clearBufferuiv(L.COLOR,0,b)):(M[0]=Ye,M[1]=ct,M[2]=ht,M[3]=Ve,L.clearBufferiv(L.COLOR,0,M))}else Q|=L.COLOR_BUFFER_BIT}j&&(Q|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),F=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",jn,!1),lt.dispose(),Ee.dispose(),Ae.dispose(),W.dispose(),xe.dispose(),ce.dispose(),Ue.dispose(),be.dispose(),ve.dispose(),We.dispose(),We.removeEventListener("sessionstart",rh),We.removeEventListener("sessionend",sh),si.stop()};function Rt(C){C.preventDefault(),Hd("WebGLRenderer: Context Lost."),D=!0}function St(){Hd("WebGLRenderer: Context Restored."),D=!1;let C=O.autoReset,j=Ke.enabled,oe=Ke.autoUpdate,Q=Ke.needsUpdate,ee=Ke.type;Ze(),O.autoReset=C,Ke.enabled=j,Ke.autoUpdate=oe,Ke.needsUpdate=Q,Ke.type=ee}function jn(C){at("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ia(C){let j=C.target;j.removeEventListener("dispose",ia),u0(j)}function u0(C){h0(C),W.remove(C)}function h0(C){let j=W.get(C).programs;j!==void 0&&(j.forEach(function(oe){ve.releaseProgram(oe)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,oe,Q,ee,Le){j===null&&(j=Y);let Ge=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ie=m0(C,j,oe,Q,ee);y.setMaterial(Q,Ge);let Ve=oe.index,Ye=1;if(Q.wireframe===!0){if(Ve=ne.getWireframeAttribute(oe),Ve===void 0)return;Ye=2}let ct=oe.drawRange,ht=oe.attributes.position,je=ct.start*Ye,Mt=(ct.start+ct.count)*Ye;Le!==null&&(je=Math.max(je,Le.start*Ye),Mt=Math.min(Mt,(Le.start+Le.count)*Ye)),Ve!==null?(je=Math.max(je,0),Mt=Math.min(Mt,Ve.count)):ht!=null&&(je=Math.max(je,0),Mt=Math.min(Mt,ht.count));let Ht=Mt-je;if(Ht<0||Ht===1/0)return;Ue.setup(ee,Q,Ie,oe,Ve);let It,Ct=Te;if(Ve!==null&&(It=Se.get(Ve),Ct=pe,Ct.setIndex(It)),ee.isMesh)Q.wireframe===!0?(y.setLineWidth(Q.wireframeLinewidth*me()),Ct.setMode(L.LINES)):Ct.setMode(L.TRIANGLES);else if(ee.isLine){let an=Q.linewidth;an===void 0&&(an=1),y.setLineWidth(an*me()),ee.isLineSegments?Ct.setMode(L.LINES):ee.isLineLoop?Ct.setMode(L.LINE_LOOP):Ct.setMode(L.LINE_STRIP)}else ee.isPoints?Ct.setMode(L.POINTS):ee.isSprite&&Ct.setMode(L.TRIANGLES);if(ee.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let an=ee._multiDrawStarts,ze=ee._multiDrawCounts,pn=ee._multiDrawCount,vt=Ve?Se.get(Ve).bytesPerElement:1,Nn=W.get(Q).currentProgram.getUniforms();for(let ra=0;ra<pn;ra++)Nn.setValue(L,"_gl_DrawID",ra),Ct.render(an[ra]/vt,ze[ra])}else if(ee.isInstancedMesh)Ct.renderInstances(je,Ht,ee.count);else if(oe.isInstancedBufferGeometry){let an=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ze=Math.min(oe.instanceCount,an);Ct.renderInstances(je,Ht,ze)}else Ct.render(je,Ht)};function ih(C,j,oe,Q){F!==null&&C.isNodeMaterial&&F.setObject(Q,C),Je===!0&&ke.setState(C,oe,!1),C.transparent===!0&&C.side===zn&&C.forceSinglePass===!1?(C.side=Zt,C.needsUpdate=!0,Ws(C,j,Q),C.side=Xa,C.needsUpdate=!0,Ws(C,j,Q),C.side=zn):Ws(C,j,Q)}this.compile=function(C,j,oe=null){oe===null&&(oe=C),F!==null&&F.renderStart(C,j,oe),E=Ae.get(oe),E.init(j),x.push(E),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),C!==oe&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),z=this.localClippingEnabled,Je=ke.init(this.clippingPlanes,z),Je===!0&&ke.setGlobalState(this.clippingPlanes,j),F!==null&&Ke.render(E.state.shadowsArray,oe,j);let Q=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Le=ee.material;if(Le)if(Array.isArray(Le))for(let Ge=0;Ge<Le.length;Ge++){let Ie=Le[Ge];ih(Ie,oe,j,ee),Q.add(Ie)}else ih(Le,oe,j,ee),Q.add(Le)}),E=x.pop(),F!==null&&F.renderEnd(),Q},this.compileAsync=function(C,j,oe=null){let Q=this.compile(C,j,oe);return new Promise(ee=>{function Le(){if(Q.forEach(function(Ge){let Ve=W.get(Ge).currentProgram;(Ve===void 0||Ve.isReady())&&Q.delete(Ge)}),Q.size===0){ee(C);return}setTimeout(Le,10)}se.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Bc=null;function p0(C){Bc&&Bc(C)}function rh(){si.stop()}function sh(){si.start()}let si=new Qp;si.setAnimationLoop(p0),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(C){Bc=C,We.setAnimationLoop(C),C===null?si.stop():si.start()},We.addEventListener("sessionstart",rh),We.addEventListener("sessionend",sh),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(C,j);let oe=We.enabled===!0&&We.isPresenting===!0,Q=S!==null&&(k===null||oe)&&S.begin(w,k);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(j),j=We.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,j,k),E=Ae.get(C,x.length),E.init(j),E.state.textureUnits=ae.getTextureUnits(),x.push(E),de.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ue.setFromProjectionMatrix(de,Yn,j.reversedDepth),z=this.localClippingEnabled,Je=ke.init(this.clippingPlanes,z),A=Ee.get(C,T.length),A.init(),T.push(A),We.enabled===!0&&We.isPresenting===!0){let Ge=w.xr.getDepthSensingMesh();Ge!==null&&zc(Ge,j,-1/0,w.sortObjects)}zc(C,j,0,w.sortObjects),A.finish(),F!==null&&F.updateLights(E.state.lightsArray),w.sortObjects===!0&&A.sort(he,Me),re=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,re&&lt.addToRenderList(A,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&ke.beginShadows();let ee=E.state.shadowsArray;if(Ke.render(ee,C,j),Je===!0&&ke.endShadows(),(Q&&S.hasRenderPass())===!1){let Ge=A.opaque,Ie=A.transmissive;if(E.setupLights(),j.isArrayCamera){let Ve=j.cameras;if(Ie.length>0)for(let Ye=0,ct=Ve.length;Ye<ct;Ye++){let ht=Ve[Ye];lh(Ge,Ie,C,ht)}re&&lt.render(C);for(let Ye=0,ct=Ve.length;Ye<ct;Ye++){let ht=Ve[Ye];oh(A,C,ht,ht.viewport)}}else Ie.length>0&&lh(Ge,Ie,C,j),re&&lt.render(C),oh(A,C,j)}k!==null&&q===0&&(ae.updateMultisampleRenderTarget(k),ae.updateRenderTargetMipmap(k)),Q&&S.end(w),C.isScene===!0&&C.onAfterRender(w,C,j),Ue.resetDefaultState(),V=-1,H=null,x.pop(),x.length>0?(E=x[x.length-1],ae.setTextureUnits(E.state.textureUnits),Je===!0&&ke.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?A=T[T.length-1]:A=null,F!==null&&F.renderEnd()};function zc(C,j,oe,Q){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ue)){Q&&J.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);let Ge=ce.update(C),Ie=C.material;Ie.visible&&A.push(C,Ge,Ie,oe,J.z,null,j)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ue))){let Ge=ce.update(C),Ie=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),J.copy(C.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),J.copy(Ge.boundingSphere.center)),J.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(Ie)){let Ve=Ge.groups;for(let Ye=0,ct=Ve.length;Ye<ct;Ye++){let ht=Ve[Ye],je=Ie[ht.materialIndex];je&&je.visible&&A.push(C,Ge,je,oe,J.z,ht,j)}}else Ie.visible&&A.push(C,Ge,Ie,oe,J.z,null,j)}}let Le=C.children;for(let Ge=0,Ie=Le.length;Ge<Ie;Ge++)zc(Le[Ge],j,oe,Q)}function oh(C,j,oe,Q){let{opaque:ee,transmissive:Le,transparent:Ge}=C;E.setupLightsView(oe),Je===!0&&ke.setGlobalState(w.clippingPlanes,oe),Q&&y.viewport(te.copy(Q)),ee.length>0&&$s(ee,j,oe),Le.length>0&&$s(Le,j,oe),Ge.length>0&&$s(Ge,j,oe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function lh(C,j,oe,Q){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){let je=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new _n(1,1,{generateMipmaps:!0,type:je?Qn:Sn,minFilter:Ja,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Le=E.state.transmissionRenderTarget[Q.id],Ge=Q.viewport||te;Le.setSize(Ge.z*w.transmissionResolutionScale,Ge.w*w.transmissionResolutionScale);let Ie=w.getRenderTarget(),Ve=w.getActiveCubeFace(),Ye=w.getActiveMipmapLevel();w.setRenderTarget(Le),w.getClearColor(He),Fe=w.getClearAlpha(),Fe<1&&w.setClearColor(16777215,.5),w.clear(),re&&lt.render(oe);let ct=w.toneMapping;w.toneMapping=Zn;let ht=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),Je===!0&&ke.setGlobalState(w.clippingPlanes,Q),$s(C,oe,Q),ae.updateMultisampleRenderTarget(Le),ae.updateRenderTargetMipmap(Le),se.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Mt=0,Ht=j.length;Mt<Ht;Mt++){let It=j[Mt],{object:Ct,geometry:an,material:ze,group:pn}=It;if(ze.side===zn&&Ct.layers.test(Q.layers)){let vt=ze.side;ze.side=Zt,ze.needsUpdate=!0,ch(Ct,oe,Q,an,ze,pn),ze.side=vt,ze.needsUpdate=!0,je=!0}}je===!0&&(ae.updateMultisampleRenderTarget(Le),ae.updateRenderTargetMipmap(Le))}w.setRenderTarget(Ie,Ve,Ye),w.setClearColor(He,Fe),ht!==void 0&&(Q.viewport=ht),w.toneMapping=ct}function $s(C,j,oe){let Q=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Le=C.length;ee<Le;ee++){let Ge=C[ee],{object:Ie,geometry:Ve,group:Ye}=Ge,ct=Ge.material;ct.allowOverride===!0&&Q!==null&&(ct=Q),Ie.layers.test(oe.layers)&&ch(Ie,j,oe,Ve,ct,Ye)}}function ch(C,j,oe,Q,ee,Le){F!==null&&ee.isNodeMaterial&&F.setObject(C,ee),C.onBeforeRender(w,j,oe,Q,ee,Le),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(w,j,oe,Q,C,Le),ee.transparent===!0&&ee.side===zn&&ee.forceSinglePass===!1?(ee.side=Zt,ee.needsUpdate=!0,w.renderBufferDirect(oe,j,Q,ee,C,Le),ee.side=Xa,ee.needsUpdate=!0,w.renderBufferDirect(oe,j,Q,ee,C,Le),ee.side=zn):w.renderBufferDirect(oe,j,Q,ee,C,Le),C.onAfterRender(w,j,oe,Q,ee,Le)}function Ws(C,j,oe){j.isScene!==!0&&(j=Y);let Q=W.get(C),ee=E.state.lights,Le=E.state.shadowsArray,Ge=ee.state.version,Ie=ve.getParameters(C,ee.state,Le,j,oe,E.state.lightProbeGridArray),Ve=ve.getProgramCacheKey(Ie),Ye=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?j.environment:null,Q.fog=j.fog;let ct=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=xe.get(C.envMap||Q.environment,ct),Q.envMapRotation=Q.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",ia),Ye=new Map,Q.programs=Ye);let ht=Ye.get(Ve);if(ht!==void 0){if(Q.currentProgram===ht&&Q.lightsStateVersion===Ge)return uh(C,Ie),ht}else Ie.uniforms=ve.getUniforms(C),F!==null&&C.isNodeMaterial&&F.build(C,oe,Ie),C.onBeforeCompile(Ie,w),ht=ve.acquireProgram(Ie,Ve),Ye.set(Ve,ht),Q.uniforms=Ie.uniforms;let je=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=ke.uniform),uh(C,Ie),Q.needsLights=x0(C),Q.lightsStateVersion=Ge,Q.needsLights&&(je.ambientLightColor.value=ee.state.ambient,je.lightProbe.value=ee.state.probe,je.sunLights.value=ee.state.sun,je.sunLightShadows.value=ee.state.sunShadow,je.directionalLights.value=ee.state.directional,je.directionalLightShadows.value=ee.state.directionalShadow,je.spotLights.value=ee.state.spot,je.spotLightShadows.value=ee.state.spotShadow,je.rectAreaLights.value=ee.state.rectArea,je.ltc_1.value=ee.state.rectAreaLTC1,je.ltc_2.value=ee.state.rectAreaLTC2,je.pointLights.value=ee.state.point,je.pointLightShadows.value=ee.state.pointShadow,je.hemisphereLights.value=ee.state.hemi,je.sunShadowMatrix.value=ee.state.sunShadowMatrix,je.sunShadowCascade.value=ee.state.sunShadowCascade,je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,je.spotLightMatrix.value=ee.state.spotLightMatrix,je.spotLightMap.value=ee.state.spotLightMap,je.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=E.state.lightProbeGridArray.length>0,Q.currentProgram=ht,Q.uniformsList=null,ht}function dh(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=ir.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function uh(C,j){let oe=W.get(C);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function f0(C,j){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(j.matrixWorld);for(let oe=0,Q=C.length;oe<Q;oe++){let ee=C[oe];if(ee.texture!==null&&ee.boundingBox.containsPoint(_))return ee}return null}function m0(C,j,oe,Q,ee){j.isScene!==!0&&(j=Y),ae.resetTextureUnits();let Le=j.fog,Ge=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?j.environment:null,Ie=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ft.workingColorSpace,Ve=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ye=xe.get(Q.envMap||Ge,Ve),ct=Q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ht=!!oe.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),je=!!oe.morphAttributes.position,Mt=!!oe.morphAttributes.normal,Ht=!!oe.morphAttributes.color,It=Zn;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(It=w.toneMapping);let Ct=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,an=Ct!==void 0?Ct.length:0,ze=W.get(Q),pn=E.state.lights;if(Je===!0&&(z===!0||C!==H)){let Pt=C===H&&Q.id===V;ke.setState(Q,C,Pt)}let vt=!1;Q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==pn.state.version||ze.outputColorSpace!==Ie||ee.isBatchedMesh&&ze.batching===!1||!ee.isBatchedMesh&&ze.batching===!0||ee.isBatchedMesh&&ze.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&ze.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&ze.instancing===!1||!ee.isInstancedMesh&&ze.instancing===!0||ee.isSkinnedMesh&&ze.skinning===!1||!ee.isSkinnedMesh&&ze.skinning===!0||ee.isInstancedMesh&&ze.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ze.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ze.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ze.instancingMorph===!1&&ee.morphTexture!==null||ze.envMap!==Ye||Q.fog===!0&&ze.fog!==Le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ke.numPlanes||ze.numIntersection!==ke.numIntersection)||ze.vertexAlphas!==ct||ze.vertexTangents!==ht||ze.morphTargets!==je||ze.morphNormals!==Mt||ze.morphColors!==Ht||ze.toneMapping!==It||ze.morphTargetsCount!==an||!!ze.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,ze.__version=Q.version);let Nn=ze.currentProgram;vt===!0&&(Nn=Ws(Q,j,ee),F&&Q.isNodeMaterial&&F.onUpdateProgram(Q,Nn,ze));let ra=!1,Na=!1,Ei=!1,wt=Nn.getUniforms(),zt=ze.uniforms;if(y.useProgram(Nn.program)&&(ra=!0,Na=!0,Ei=!0),Q.id!==V&&(V=Q.id,Na=!0),ze.needsLights){let Pt=f0(E.state.lightProbeGridArray,ee);ze.lightProbeGrid!==Pt&&(ze.lightProbeGrid=Pt,Na=!0)}if(ra||H!==C){y.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),wt.setValue(L,"projectionMatrix",C.projectionMatrix),wt.setValue(L,"viewMatrix",C.matrixWorldInverse);let Ua=wt.map.cameraPosition;Ua!==void 0&&Ua.setValue(L,ie.setFromMatrixPosition(C.matrixWorld)),R.logarithmicDepthBuffer&&wt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&wt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),H!==C&&(H=C,Na=!0,Ei=!0)}if(ze.needsLights&&(pn.state.sunShadowMap.length>0&&wt.setValue(L,"sunShadowMap",pn.state.sunShadowMap,ae),pn.state.directionalShadowMap.length>0&&wt.setValue(L,"directionalShadowMap",pn.state.directionalShadowMap,ae),pn.state.spotShadowMap.length>0&&wt.setValue(L,"spotShadowMap",pn.state.spotShadowMap,ae),pn.state.pointShadowMap.length>0&&wt.setValue(L,"pointShadowMap",pn.state.pointShadowMap,ae)),ee.isSkinnedMesh){wt.setOptional(L,ee,"bindMatrix"),wt.setOptional(L,ee,"bindMatrixInverse");let Pt=ee.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),wt.setValue(L,"boneTexture",Pt.boneTexture,ae))}ee.isBatchedMesh&&(wt.setOptional(L,ee,"batchingTexture"),wt.setValue(L,"batchingTexture",ee._matricesTexture,ae),wt.setOptional(L,ee,"batchingIdTexture"),wt.setValue(L,"batchingIdTexture",ee._indirectTexture,ae),wt.setOptional(L,ee,"batchingColorTexture"),ee._colorsTexture!==null&&wt.setValue(L,"batchingColorTexture",ee._colorsTexture,ae));let Fa=oe.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0)&&$.update(ee,oe,Nn),(Na||ze.receiveShadow!==ee.receiveShadow)&&(ze.receiveShadow=ee.receiveShadow,wt.setValue(L,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&j.environment!==null&&(zt.envMapIntensity.value=j.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=n_()),Na){if(wt.setValue(L,"toneMappingExposure",w.toneMappingExposure),ze.needsLights&&g0(zt,Ei),Le&&Q.fog===!0&&Oe.refreshFogUniforms(zt,Le),Oe.refreshMaterialUniforms(zt,Q,X,G,E.state.transmissionRenderTarget[C.id]),ze.needsLights&&ze.lightProbeGrid){let Pt=ze.lightProbeGrid;zt.probesSH.value=Pt.texture,zt.probesMin.value.copy(Pt.boundingBox.min),zt.probesMax.value.copy(Pt.boundingBox.max),zt.probesResolution.value.copy(Pt.resolution)}ir.upload(L,dh(ze),zt,ae)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ir.upload(L,dh(ze),zt,ae),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&wt.setValue(L,"center",ee.center),wt.setValue(L,"modelViewMatrix",ee.modelViewMatrix),wt.setValue(L,"normalMatrix",ee.normalMatrix),wt.setValue(L,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let Pt=Q.uniformsGroups;for(let Ua=0,Ai=Pt.length;Ua<Ai;Ua++){let ph=Pt[Ua];be.update(ph,Nn),be.bind(ph,Nn)}}return Nn}function g0(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.sunLights.needsUpdate=j,C.sunLightShadows.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function x0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,j,oe){let Q=W.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),W.get(C.texture).__webglTexture=j,W.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:oe,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){let oe=W.get(C);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,oe=0){k=C,B=j,q=oe;let Q=null,ee=!1,Le=!1;if(C){let Ie=W.get(C);if(Ie.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,Ie.__webglFramebuffer),te.copy(C.viewport),ge.copy(C.scissor),_e=C.scissorTest,y.viewport(te),y.scissor(ge),y.setScissorTest(_e),V=-1;return}else if(Ie.__webglFramebuffer===void 0)ae.setupRenderTarget(C);else if(Ie.__hasExternalTextures)ae.rebindTextures(C,W.get(C.texture).__webglTexture,W.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ct=C.depthTexture;if(Ie.__boundDepthTexture!==ct){if(ct!==null&&W.has(ct)&&(C.width!==ct.image.width||C.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(C)}}let Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Le=!0);let Ye=W.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[j])?Q=Ye[j][oe]:Q=Ye[j],ee=!0):C.samples>0&&ae.useMultisampledRTT(C)===!1?Q=W.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?Q=Ye[oe]:Q=Ye,te.copy(C.viewport),ge.copy(C.scissor),_e=C.scissorTest}else te.copy(fe).multiplyScalar(X).floor(),ge.copy(ye).multiplyScalar(X).floor(),_e=De;if(oe!==0&&(Q=P),y.bindFramebuffer(L.FRAMEBUFFER,Q)&&y.drawBuffers(C,Q),y.viewport(te),y.scissor(ge),y.setScissorTest(_e),ee){let Ie=W.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,oe)}else if(Le){let Ie=j;for(let Ve=0;Ve<C.textures.length;Ve++){let Ye=W.get(C.textures[Ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ve,Ye.__webglTexture,oe,Ie)}}else if(C!==null&&oe!==0){let Ie=W.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,oe)}V=-1};function hh(C){let j=W.get(C);return(j.__readFormat!==C.format||j.__readType!==C.type)&&(j.__readFormat=C.format,j.__readType=C.type,j.__formatReadable=R.textureFormatReadable(C.format),j.__typeReadable=R.textureTypeReadable(C.type)),j}this.readRenderTargetPixels=function(C,j,oe,Q,ee,Le,Ge,Ie=0){if(!(C&&C.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){y.bindFramebuffer(L.FRAMEBUFFER,Ve);try{let Ye=C.textures[Ie],ct=Ye.format,ht=Ye.type;C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ie);let je=hh(Ye);if(je.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-Q&&oe>=0&&oe<=C.height-ee&&L.readPixels(j,oe,Q,ee,we.convert(ct),we.convert(ht),Le)}finally{let Ye=k!==null?W.get(k).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,j,oe,Q,ee,Le,Ge,Ie=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if(j>=0&&j<=C.width-Q&&oe>=0&&oe<=C.height-ee){y.bindFramebuffer(L.FRAMEBUFFER,Ve);let Ye=C.textures[Ie],ct=Ye.format,ht=Ye.type;C.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ie);let je=hh(Ye);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.bufferData(L.PIXEL_PACK_BUFFER,Le.byteLength,L.STREAM_READ),L.readPixels(j,oe,Q,ee,we.convert(ct),we.convert(ht),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ht=k!==null?W.get(k).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Ht);let It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Tp(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Le),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Mt),L.deleteSync(It),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,oe=0){let Q=Math.pow(2,-oe),ee=Math.floor(C.image.width*Q),Le=Math.floor(C.image.height*Q),Ge=j!==null?j.x:0,Ie=j!==null?j.y:0;ae.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,oe,0,0,Ge,Ie,ee,Le),y.unbindTexture()},this.copyTextureToTexture=function(C,j,oe=null,Q=null,ee=0,Le=0){let Ge,Ie,Ve,Ye,ct,ht,je,Mt,Ht,It=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ie=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,Ye=oe.min.x,ct=oe.min.y,ht=oe.isBox3?oe.min.z:0;else{let zt=Math.pow(2,-ee);Ge=Math.floor(It.width*zt),Ie=Math.floor(It.height*zt),C.isDataArrayTexture?Ve=It.depth:C.isData3DTexture?Ve=Math.floor(It.depth*zt):Ve=1,Ye=0,ct=0,ht=0}Q!==null?(je=Q.x,Mt=Q.y,Ht=Q.z):(je=0,Mt=0,Ht=0);let Ct=we.convert(j.format),an=we.convert(j.type),ze;j.isData3DTexture?(ae.setTexture3D(j,0),ze=L.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ae.setTexture2DArray(j,0),ze=L.TEXTURE_2D_ARRAY):(ae.setTexture2D(j,0),ze=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment);let pn=y.getParameter(L.UNPACK_ROW_LENGTH),vt=y.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=y.getParameter(L.UNPACK_SKIP_PIXELS),ra=y.getParameter(L.UNPACK_SKIP_ROWS),Na=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Ye),y.pixelStorei(L.UNPACK_SKIP_ROWS,ct),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ht);let Ei=C.isDataArrayTexture||C.isData3DTexture,wt=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){let zt=W.get(C),Fa=W.get(j),Pt=W.get(zt.__renderTarget),Ua=W.get(Fa.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,Pt.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ua.__webglFramebuffer);for(let Ai=0;Ai<Ve;Ai++)Ei&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(C).__webglTexture,ee,ht+Ai),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(j).__webglTexture,Le,Ht+Ai)),L.blitFramebuffer(Ye,ct,Ge,Ie,je,Mt,Ge,Ie,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||W.has(C)){let zt=W.get(C),Fa=W.get(j);y.bindFramebuffer(L.READ_FRAMEBUFFER,I),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,N);for(let Pt=0;Pt<Ve;Pt++)Ei?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,ee,ht+Pt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zt.__webglTexture,ee),wt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fa.__webglTexture,Le,Ht+Pt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fa.__webglTexture,Le),ee!==0?L.blitFramebuffer(Ye,ct,Ge,Ie,je,Mt,Ge,Ie,L.COLOR_BUFFER_BIT,L.NEAREST):wt?L.copyTexSubImage3D(ze,Le,je,Mt,Ht+Pt,Ye,ct,Ge,Ie):L.copyTexSubImage2D(ze,Le,je,Mt,Ye,ct,Ge,Ie);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else wt?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(ze,Le,je,Mt,Ht,Ge,Ie,Ve,Ct,an,It.data):j.isCompressedArrayTexture?L.compressedTexSubImage3D(ze,Le,je,Mt,Ht,Ge,Ie,Ve,Ct,It.data):L.texSubImage3D(ze,Le,je,Mt,Ht,Ge,Ie,Ve,Ct,an,It):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Le,je,Mt,Ge,Ie,Ct,an,It.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Le,je,Mt,It.width,It.height,Ct,It.data):L.texSubImage2D(L.TEXTURE_2D,Le,je,Mt,Ge,Ie,Ct,an,It);y.pixelStorei(L.UNPACK_ROW_LENGTH,pn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),y.pixelStorei(L.UNPACK_SKIP_ROWS,ra),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Na),Le===0&&j.generateMipmaps&&L.generateMipmap(ze),y.unbindTexture()},this.initRenderTarget=function(C){W.get(C).__webglFramebuffer===void 0&&ae.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ae.setTextureCube(C,0):C.isData3DTexture?ae.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ae.setTexture2DArray(C,0):ae.setTexture2D(C,0),y.unbindTexture()},this.resetState=function(){B=0,q=0,k=null,y.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var ec=class extends hi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ce;e.deleteAttribute("uv");let t=new it({side:Zt}),n=new it,i=new ls(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let s=new Lt(e,n,6),o=new xt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),s.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),s.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),s.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),s.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),s.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),s.setMatrixAt(5,o.matrix),this.add(s);let c=new Ne(e,or(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ne(e,or(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let d=new Ne(e,or(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new Ne(e,or(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let h=new Ne(e,or(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Ne(e,or(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function or(a){return new as({color:0,emissive:16777215,emissiveIntensity:a})}var tc=a=>typeof matchMedia=="function"?matchMedia(a):{matches:!1,addEventListener(){}},lr=tc("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&tc("(hover: none)").matches,CE=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,RE=tc("(display-mode: standalone)").matches||tc("(display-mode: fullscreen)").matches||navigator.standalone===!0,of=new URLSearchParams(location.search),a_={aces:"aces",agx:"agx",neutral:"neutral"},cr={variante:of.get("visual")==="nuevo"?"nuevo":"base",get nuevo(){return this.variante==="nuevo"},tono:a_[of.get("tono")]??null};function lf(){let a=window.devicePixelRatio||1,e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??8,n=lr&&(e<=3||t<=4);return lr?{movil:!0,bajo:n,pixelRatio:Math.min(a,n?1.15:1.5),minPixelRatio:.8,sombra:n?512:1024,antialias:a<2,lluvia:n?.35:.55,autosPorCarril:n?2:3}:{movil:!1,bajo:!1,pixelRatio:Math.min(a,1.75),minPixelRatio:1,sombra:2048,antialias:!0,lluvia:1,autosPorCarril:4}}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(a,e,t,n,i=0){let r=Math.max(0,Math.min(typeof i=="number"?i:i?.[0]??0,t/2,n/2));return this.moveTo(a+r,e),this.arcTo(a+t,e,a+t,e+n,r),this.arcTo(a+t,e+n,a,e+n,r),this.arcTo(a,e+n,a,e,r),this.arcTo(a,e,a+t,e,r),this.closePath(),this});var rt=a=>String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var lu={via:"Calle 50 Luisa, Sabana Norte, San Jos\xE9",atribucion:"\xA9 OpenStreetMap contributors (ODbL)",eje:[[12.75,-245.62],[7.04,-157.59],[-1.69,-41.67],[-2.78,6.89],[-3.6,24.31],[-5.75,55.28],[-7.13,78.66],[-8.96,128.18],[-9.45,141.34],[-10.83,178.46],[-12.75,245.62]],largo:492.1,cruces:[{d:88.2,p:[7.04,-157.59],vias:["service:sin nombre"]},{d:204.5,p:[-1.69,-41.67],vias:["residential:sin nombre","service:sin nombre"]},{d:253.1,p:[-2.78,6.89],vias:["service:sin nombre"]},{d:270.6,p:[-3.6,24.31],vias:["service:sin nombre"]},{d:301.6,p:[-5.75,55.28],vias:["residential:Avenida 9"]},{d:325,p:[-7.13,78.66],vias:["service:sin nombre"]},{d:374.6,p:[-8.96,128.18],vias:["service:sin nombre"]},{d:387.8,p:[-9.45,141.34],vias:["service:sin nombre"]},{d:424.9,p:[-10.83,178.46],vias:["service:sin nombre"]},{d:492.1,p:[-12.75,245.62],vias:["residential:Calle 50","secondary:Avenida de Las Am\xE9ricas"]}],postes:[{id:"P01",p:[-3.32,-88.06],lado:"oeste",material:"concreto",herrajes:["cruceta","aisladores","reservas de fibra en aro (3 o m\xE1s)"],d:158.4},{id:"P02",p:[6.04,-76.43],lado:"este",material:"concreto",herrajes:["cruceta","aisladores","luminaria"],d:169.2},{id:"P04",p:[4.93,-61.74],lado:"este",material:"met\xE1lico gris sobre pedestal de concreto",herrajes:["brazo diagonal","retenida con protector amarillo (28 s)"],d:184},{id:"P05",p:[-7.06,-30.25],lado:"oeste",material:"concreto",herrajes:["transformador","reservas de fibra en aro","caja de empalme (47 s)"],d:216},{id:"P06",p:[-8.36,16.97],lado:"oeste",material:"concreto",herrajes:["reservas de fibra en aro (5 o m\xE1s)","marcas de colores de operadores (~2 m)"],d:263.5},{id:"P07",p:[-10.42,48.85],lado:"oeste",material:"concreto",herrajes:["transformador","luminaria"],d:295.5},{id:"P08",p:[-13.03,100.22],lado:"oeste",material:"concreto",herrajes:["haz telecom grande"],d:346.8},{id:"P09",p:[-14.7,145.19],lado:"oeste",material:"concreto",herrajes:["luminaria"],d:391.8},{id:"P12",p:[-6.79,215.69],lado:"este",material:"concreto",herrajes:["luminaria"],d:462},{id:"P11",p:[-7.78,250.32],lado:"este",material:"concreto con franja amarilla y negra",herrajes:["reservas de fibra en aro"],d:496.7}],tendido:[{de:"P01",a:"P05"},{de:"P05",a:"P06"},{de:"P06",a:"P07"},{de:"P07",a:"P08"},{de:"P08",a:"P09"},{de:"P09",a:"P12",nota:"cruza la calle"},{de:"P12",a:"P11"}],arboles:[[-7.17,-25.14],[-7.31,-18.74],[-7.45,-12.33],[-7.59,-5.92],[-7.74,.49],[-7.88,6.75],[-8.19,13.14],[-8.48,19.52],[-8.82,25.8],[-9.26,32.2],[-9.71,38.6],[-10.15,45.01],[-10.6,51.41],[-11.01,57.87],[-11.39,64.27],[-11.77,70.68],[-12.14,77.08],[-12.41,83.3],[-12.63,89.34],[-12.86,95.38],[-13.08,101.42],[-13.31,107.46],[-13.53,113.5],[-13.74,119.54],[-13.97,125.57],[-14.22,132.29],[-14.48,139.46],[-14.74,146.63],[-15.02,153.83],[-15.28,161.01],[-15.55,168.2],[-15.82,175.39],[-16.05,182.45],[-16.24,189.34],[-16.44,196.24],[-16.64,203.14],[-16.84,210.04],[-17.03,216.93]],otros:[{que:"retenida (viento) con protector amarillo",p:[4.64,-57.9],lado:"este",d:187.8},{que:"gabinete verde con r\xF3tulos de peligro y bolardo amarillo",p:[3.49,-42.57],lado:"este",d:203.2},{que:"caja de empalme en el tendido P01-P05",p:[-6.97,-34.1],lado:"oeste",d:212.2},{que:"se\xF1al de zona escolar",p:[-7.77,1.76],lado:"oeste",d:248.1},{que:"parqu\xEDmetro solar",p:[-8.31,15.7],lado:"oeste",d:262.2},{que:"espacios de estacionamiento 5019 \u2192 5001, 5,7 m cada uno",p:[-8.6,22.07],lado:"oeste",d:268.6},{que:"se\xF1al de estacionamiento E",p:[-9.88,41.17],lado:"oeste",d:287.8},{que:"se\xF1al 25 KPH velocidad m\xE1xima",p:[-11.39,64.27],lado:"oeste",d:310.9},{que:"se\xF1al de zona escolar",p:[-12.68,90.55],lado:"oeste",d:337.1},{que:"se\xF1al de estacionamiento E",p:[-13.21,105.05],lado:"oeste",d:351.6},{que:"se\xF1al de ALTO en la esquina",p:[-17.58,236.24],lado:"oeste",d:482.9},{que:"verja gris sobre muro bajo, al fondo de la acera",p:[-7.17,-25.14],lado:"oeste",d:221.2},{que:"verja y portones azules, al fondo de la acera",p:[-8.67,23.35],lado:"oeste",d:269.9}],lugares:[{nombre:"MEP - Edificio Bloque A",d:0,a:24,lado:"este"},{nombre:"Avenida 17",d:0,a:60,lado:"este"},{nombre:"MEP - Parqueo Este",d:88.2,a:37,lado:"este"},{nombre:"Museo Hist\xF3rico y Tecnol\xF3gico Grupo ICE",d:88.2,a:42,lado:"oeste"},{nombre:"Suites Cristina",d:88.2,a:38,lado:"este"},{nombre:"MEP - Edificio Bloque B",d:88.2,a:52,lado:"este"},{nombre:"Palma Real Hotel y Casino",d:204.5,a:42,lado:"este"},{nombre:"Parque Palma Real",d:204.5,a:21,lado:"este"},{nombre:"Cond. Corobic\xED del Oeste",d:253.1,a:32,lado:"este"},{nombre:"MTA",d:253.1,a:32,lado:"este"},{nombre:"Cond. Menorca",d:270.6,a:26,lado:"este"},{nombre:"Consensus Abogados",d:325,a:20,lado:"este"},{nombre:"Restaurant Flor de Loto",d:325,a:29,lado:"este"},{nombre:"Aptos. Balot de Escaz\xFA",d:325,a:20,lado:"este"},{nombre:"Oficentro Las Torres",d:374.6,a:19,lado:"este"},{nombre:"Soka Gakkai Internacional de Costa Rica",d:424.9,a:18,lado:"este"},{nombre:"Soda Alberto",d:424.9,a:29,lado:"este"},{nombre:"Subway",d:492.1,a:26,lado:"este"},{nombre:"Agencia ICE",d:492.1,a:36,lado:"este"},{nombre:"ICE",d:492.1,a:21,lado:"oeste"},{nombre:"ICE Sabana",d:492.1,a:20,lado:"oeste"},{nombre:"Uno Sports",d:492.1,a:34,lado:"este"},{nombre:"KFC",d:492.1,a:41,lado:"este"},{nombre:"Avenida de Las Am\xE9ricas",d:492.1,a:13,lado:"oeste"}]};var xi={x0:-3468.56,z0:-2412.63,paso:10,w:641,h:600,escala:60,lat0:9.94045,lon0:-84.102,kx:1827.481,kz:1842.333,origen:1134,fuente:"Terrain Tiles (Mapzen, AWS Open Data): SRTM, GMTED2010, ETOPO1 y otras fuentes abiertas"};var cf="./datos-BGOTRZWN.bin";function df(a){let e=[],t=0;for(let s=0;s<a.length-1;s++){let[o,c]=a[s],[l,d]=a[s+1],u=Math.hypot(l-o,d-c);e.push({x0:o,z0:c,tx:(l-o)/u,tz:(d-c)/u,l:u,d0:t}),t+=u}let n=s=>{let o=e[0];for(let c of e)if(c.d0<=s)o=c;else break;return o};function i(s,o=0,c={}){let l=n(s),d=s-l.d0;return c.x=l.x0+l.tx*d+l.tz*o,c.z=l.z0+l.tz*d-l.tx*o,c.tx=l.tx,c.tz=l.tz,c}function r(s,o,c={}){let l=1/0;for(let d=0;d<e.length;d++){let u=e[d],h=s-u.x0,f=o-u.z0,g=h*u.tx+f*u.tz;d>0&&(g=Math.max(0,g)),d<e.length-1&&(g=Math.min(u.l,g));let v=h-u.tx*g,m=f-u.tz*g,p=v*v+m*m;p<l&&(l=p,c.d=u.d0+g,c.a=v*u.tz-m*u.tx)}return c}return{largo:t,en:i,aVia:r}}function uf(a,e,t,n){let i={},r={};return function(o,c){for(let h of t){let f=o.x-h.x,g=o.z-h.z,v=h.r+c,m=f*f+g*g;if(m<v*v&&m>1e-9){let p=v/Math.sqrt(m);o.x=h.x+f*p,o.z=h.z+g*p}}a.aVia(o.x,o.z,i);let l=Math.max(n.d0,Math.min(n.d1,i.d)),d=Math.max(-n.a,Math.min(n.a,i.a)),u=l!==i.d||d!==i.a;i.d=l,i.a=d;for(let h of e){if(i.d<=h.d0-c||i.d>=h.d1+c||i.a<=h.a0-c||i.a>=h.a1+c)continue;let f=i.d-(h.d0-c),g=h.d1+c-i.d,v=i.a-(h.a0-c),m=h.a1+c-i.a,p=Math.min(f,g,v,m);p===f?i.d=h.d0-c:p===g?i.d=h.d1+c:p===v?i.a=h.a0-c:i.a=h.a1+c,u=!0}return u&&(a.en(i.d,i.a,r),o.x=r.x,o.z=r.z),o}}function dr(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),r={},s={},o=a[0].morphTargetsRelative,c=new mt,l=0;for(let d=0;d<a.length;++d){let u=a[d],h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,d),l+=f}}if(t){let d=0,u=[];for(let h=0;h<a.length;++h){let f=a[h].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+d);d+=a[h].attributes.position.count}c.setIndex(u)}for(let d in r){let u=hf(r[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,u)}for(let d in s){let u=s[d][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let h=0;h<u;++h){let f=[];for(let v=0;v<s[d].length;++v)f.push(s[d][v][h]);let g=hf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(g)}}}return c}function hf(a){let e,t,n,i=-1,r=0;for(let l=0;l<a.length;++l){let d=a[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let s=new e(r),o=new gt(s,t,n),c=0;for(let l=0;l<a.length;++l){let d=a[l];if(d.isInterleavedBufferAttribute){let u=c/t;for(let h=0,f=d.count;h<f;h++)for(let g=0;g<t;g++){let v=d.getComponent(h,g);o.setComponent(h+u,g,v)}}else s.set(d.array,c);c+=d.count*t}return i!==void 0&&(o.gpuType=i),o}var nc=new Be;function cn(){let a=[],e=[],t=[],n=[];function i(c,l,d,u,h,f){let g=a.length/3;nc.set(h);for(let v of[c,l,d,u])a.push(v[0],v[1],v[2]),e.push(nc.r,nc.g,nc.b);f?t.push(...f):t.push(0,0,0,0,0,0,0,0),n.push(g,g+1,g+2,g,g+2,g+3)}function r(c,l,d,u,{techo:h=u,bahia:f=0,piso:g=3.2}={}){for(let v=0;v<4;v++){let m=c[v],p=c[(v+1)%4],b=f?Math.max(1,Math.round(Math.hypot(p[0]-m[0],p[1]-m[1])/f)):0,M=f?Math.max(1,Math.round((d-l)/g)):0;i([m[0],l,m[1]],[p[0],l,p[1]],[p[0],d,p[1]],[m[0],d,m[1]],u,[0,0,b,0,b,M,0,M])}i([c[0][0],d,c[0][1]],[c[1][0],d,c[1][1]],[c[2][0],d,c[2][1]],[c[3][0],d,c[3][1]],h)}function s(c,l,d,u,h,f,g,v=0,m){let p=Math.cos(v),b=Math.sin(v),M=u/2,_=f/2;r([[-M,-_],[-M,_],[M,_],[M,-_]].map(([A,E])=>[c+A*p+E*b,d-A*b+E*p]),l,l+h,g,m)}function o(){let c=new mt;return c.setAttribute("position",new tt(a,3)),c.setAttribute("color",new tt(e,3)),c.setAttribute("uv",new tt(t,2)),c.setIndex(n),c.computeVertexNormals(),c}return{quad:i,prisma:r,caja:s,geometria:o}}var Ra=a=>()=>{a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function ac(){let a=Ra(11),e=[];for(let n=0;n<6;n++){let i=n/6*6.283,r=n?.58:0,s=(.58+a()*.2)*(n?1:1.15),o=new es(s,0).rotateX(a()*3).rotateY(a()*3).translate(Math.cos(i)*r,(n%2?.22:-.08)+(n?0:.12),Math.sin(i)*r).toNonIndexed(),c=[1,.86,.74][n%3],l=new Float32Array(o.attributes.position.count*3).fill(c);o.setAttribute("color",new gt(l,3)),o.deleteAttribute("uv"),e.push(o)}let t=dr(e);return t.computeVertexNormals(),t}function o_(a){let e=a>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ur(a,e,t){let n=document.createElement("canvas");n.width=a,n.height=e;let i=n.getContext("2d");t(i,a,e);let r=new On(n);return r.wrapS=r.wrapT=Va,r.colorSpace=Ut,r.anisotropy=4,r}var ic=null;function pf(){if(ic)return ic;let a=o_(7),e=ur(256,256,(o,c,l)=>{o.fillStyle="#f2f2f2",o.fillRect(0,0,c,l);for(let d=0;d<4200;d++)o.fillStyle=`rgba(${a()<.5?"90,90,90":"255,255,255"},${.03+a()*.07})`,o.fillRect(a()*c,a()*l,1+a()*2.5,1+a()*2.5);for(let d=0;d<26;d++){let u=a()*c,h=o.createLinearGradient(u,0,u+6,0);h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(.5,"rgba(60,60,60,.05)"),h.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=h,o.fillRect(u,a()*l*.4,6,l)}}),t=ur(256,256,(o,c,l)=>{for(let d=0;d<c;d++){let u=.5+.5*Math.sin(d/c*Math.PI*2*8),h=Math.round(150+90*u);o.fillStyle=`rgb(${h},${h},${h+4})`,o.fillRect(d,0,1,l)}for(let d=0;d<90;d++)o.fillStyle=`rgba(120,70,40,${.04+a()*.09})`,o.fillRect(a()*c,a()*l,2+a()*10,1+a()*14);o.fillStyle="rgba(0,0,0,.22)",o.fillRect(0,l-3,c,3)}),n=ur(256,256,(o,c,l)=>{o.fillStyle="#dedad1",o.fillRect(0,0,c,l);for(let[d,u]of[[0,0],[c/2,0],[0,l/2],[c/2,l/2]]){let h=Math.round(a()*18-9);o.fillStyle=`rgba(${h>0?"255,255,255":"60,55,50"},${Math.abs(h)/100})`,o.fillRect(d,u,c/2,l/2)}for(let d=0;d<2600;d++)o.fillStyle=`rgba(${a()<.5?"80,80,80":"255,255,255"},${.04+a()*.08})`,o.fillRect(a()*c,a()*l,1+a()*2,1+a()*2);for(let d=0;d<5;d++){let u=o.createRadialGradient(0,0,0,0,0,18+a()*24);u.addColorStop(0,"rgba(70,60,50,.12)"),u.addColorStop(1,"rgba(70,60,50,0)"),o.save(),o.translate(a()*c,a()*l),o.fillStyle=u,o.fillRect(-45,-45,90,90),o.restore()}o.strokeStyle="rgba(70,66,58,.55)",o.lineWidth=3,o.strokeRect(1.5,1.5,c-3,l-3),o.beginPath(),o.moveTo(c/2,0),o.lineTo(c/2,l),o.moveTo(0,l/2),o.lineTo(c,l/2),o.stroke(),o.strokeStyle="rgba(255,255,255,.25)",o.lineWidth=1,o.beginPath(),o.moveTo(c/2+2,0),o.lineTo(c/2+2,l),o.moveTo(0,l/2+2),o.lineTo(c,l/2+2),o.stroke()}),i=ur(512,512,(o,c,l)=>{o.fillStyle="#585d65",o.fillRect(0,0,c,l);for(let d=0;d<22e3;d++){let u=70+Math.floor(a()*90);o.fillStyle=`rgba(${u},${u},${u},${.1+a()*.22})`,o.fillRect(a()*c,a()*l,1+a()*2,1+a()*2)}for(let d=0;d<3;d++){let u=40+a()*90,h=30+a()*70,f=a()*(c-u),g=a()*(l-h);o.fillStyle=`rgba(35,38,42,${.25+a()*.2})`,o.fillRect(f,g,u,h),o.strokeStyle="rgba(20,20,22,.35)",o.lineWidth=2,o.strokeRect(f,g,u,h)}for(let d=0;d<4;d++){let u=o.createRadialGradient(0,0,0,0,0,14+a()*18);u.addColorStop(0,"rgba(15,15,20,.35)"),u.addColorStop(1,"rgba(15,15,20,0)"),o.save(),o.translate(a()*c,a()*l),o.scale(1.8,1),o.fillStyle=u,o.fillRect(-40,-40,80,80),o.restore()}o.strokeStyle="rgba(20,20,22,.45)",o.lineWidth=1.2;for(let d=0;d<9;d++){o.beginPath();let u=a()*c,h=a()*l;o.moveTo(u,h);for(let f=0;f<7;f++)u+=(a()-.5)*60,h+=(a()-.5)*60,o.lineTo(u,h);o.stroke()}}),r=ur(512,512,(o,c,l)=>{o.fillStyle="#86ad70",o.fillRect(0,0,c,l);for(let d=0;d<14;d++){let u=o.createRadialGradient(0,0,0,0,0,40+a()*90),h=a()<.5?"60,120,50":"170,200,110";u.addColorStop(0,`rgba(${h},.18)`),u.addColorStop(1,`rgba(${h},0)`),o.save(),o.translate(a()*c,a()*l),o.fillStyle=u,o.fillRect(-130,-130,260,260),o.restore()}for(let d=0;d<2e4;d++){let u=a();o.fillStyle=u<.45?`rgba(40,100,40,${.08+a()*.16})`:u<.8?`rgba(180,215,120,${.08+a()*.14})`:`rgba(110,90,50,${.05+a()*.08})`,o.fillRect(a()*c,a()*l,1,2+a()*4)}}),s=ur(128,256,(o,c,l)=>{o.fillStyle="#d8d8d8",o.fillRect(0,0,c,l);for(let d=0;d<c;d+=3)o.fillStyle=`rgba(60,60,60,${.05+a()*.16})`,o.fillRect(d,0,1+a()*2,l);for(let d=0;d<40;d++)o.fillStyle="rgba(40,40,40,.18)",o.beginPath(),o.ellipse(a()*c,a()*l,2+a()*3,6+a()*12,0,0,7),o.fill()});return ic={estuco:e,zinc:t,acera:n,asfalto:i,pasto:r,madera:s},ic}var Ft={asfalto:3882564,pintura:15329244,amarillo:14924079,acera:12433838,cordon:9736330,lote:7314520,pasto:6064713,concreto:11117980,madera:7035723,metal:9212569,losa:7630955,zinc:9325370},ff=[14273972,13219740,14934230,12109004,14203296,13620930,14731686,11122630],Qt=3.65,rc=6,Pn=64,sc=3.25,Kt=.15,oc=.9,mf=-2.45,l_=[[/ICE Sabana/,{pisos:13,color:3108789,cartel:739983}],[/ICE|Museo/,{pisos:4,color:3834564,cartel:739983}],[/Hotel|Casino/,{pisos:9,color:15129016,cartel:8007214}],[/Cond|Aptos|Suites|Torres|MEP|Abogados|Soka/,{pisos:6,cartel:4082262}],[/Soda|Subway|KFC|Restaurant|Sports|MTA/,{pisos:1,cartel:10107678}]];function c_(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,64),e.fillStyle="#e4e4e0",e.fillRect(0,58,64,6),e.fillStyle="#d2d2cc",e.fillRect(16,14,32,32);let t=e.createLinearGradient(0,16,0,44);t.addColorStop(0,"#7f9db5"),t.addColorStop(1,"#3d5468"),e.fillStyle=t,e.fillRect(18,16,28,28),e.fillStyle="#d2d2cc",e.fillRect(31,16,2,28);let n=new On(a);return n.wrapS=n.wrapT=Va,n.colorSpace=Ut,n.anisotropy=4,n}function gf(a,e){let t=Ra(50),n={},i=cn(),r=cn(),s=cn(),o=cn(),c=Object.assign(cn(),{tile:4}),l=Object.assign(cn(),{tile:1.6}),d=Object.assign(cn(),{tile:7}),u=(z,de,ie=0)=>(e.en(z,de,n),[n.x,ie,n.z]),h=z=>(e.en(z,0,n),Math.atan2(n.tx,n.tz));function f(z,de,ie,J,Y,re,me,L=8){let Re=Math.max(1,Math.ceil((ie-de)/L));for(let se=0;se<Re;se++){let R=de+(ie-de)*se/Re,y=de+(ie-de)*(se+1)/Re,O=[u(R,J,re),u(y,J,re),u(y,Y,re),u(R,Y,re)];z.quad(...O,me,z.tile?O.flatMap(W=>[W[0]/z.tile,W[2]/z.tile]):void 0)}}let g=(z,de,ie,J,Y,re,me)=>{let L=u(z,de),Re=u(ie,J);i.quad([L[0],Y,L[2]],[Re[0],Y,Re[2]],[Re[0],re,Re[2]],[L[0],re,L[2]],me)},v=[0,...a.cruces.filter(z=>z.vias.some(de=>/^(residential|secondary)/.test(de))).map(z=>z.d)],m=-14,p=e.largo+14;f(d,m-60,p+60,-Pn-40,Pn+40,-.03,Ft.pasto,40),f(c,m,p,-Qt,Qt,0,Ft.asfalto);for(let z of v)for(let de of[-1,1])f(c,z-sc,z+sc,de>0?Qt:-Pn-40,de>0?Pn+40:-Qt,0,Ft.asfalto,8);let b=[];for(let z=0;z<v.length-1;z++)b.push([v[z]+sc,v[z+1]-sc]);for(let[z,de]of b)for(let ie of[-1,1]){let J=ie>0?Qt:-rc,Y=ie>0?rc:-Qt,re=ie>0?rc:-Pn,me=ie>0?Pn:-rc;f(l,z,de,J,Y,Kt,Ft.acera),f(d,z,de,re,me,Kt,Ft.lote,16);let L=Math.ceil((de-z)/8);for(let Re=0;Re<L;Re++){let se=z+(de-z)*Re/L,R=z+(de-z)*(Re+1)/L;ie>0?g(se,Qt,R,Qt,0,Kt,Ft.cordon):g(R,-Qt,se,-Qt,0,Kt,Ft.cordon)}ie>0?(g(z,Pn,z,Qt,0,Kt,Ft.cordon),g(de,Qt,de,Pn,0,Kt,Ft.cordon)):(g(z,-Qt,z,-Pn,0,Kt,Ft.cordon),g(de,-Pn,de,-Qt,0,Kt,Ft.cordon))}for(let z of[-1,1])f(i,m,p,z*3.42-.05,z*3.42+.05,.012,Ft.amarillo);let M=a.otros.find(z=>/espacios de estacionamiento/.test(z.que)),_={d0:M.d,n:19,paso:5.7,a:mf};f(i,M.d-1,M.d+_.n*_.paso,-1.36,-1.26,.012,Ft.pintura);for(let z=0;z<=_.n;z++)f(i,M.d+z*5.7-.05,M.d+z*5.7+.05,-3.4,-1.3,.012,Ft.pintura);f(i,e.largo-6.4,e.largo-6,-1.3,3.4,.012,Ft.pintura);let A=[],E=[],T=[];for(let[z,de]of b)for(let ie of["este","oeste"])for(let J=z+4;J<de-12;){let Y=Math.min(14+t()*16,de-4-J),re=7.4+t()*3,me=12+t()*10;A.push({lado:ie,d0:J,d1:J+Y,frente:re,fondo:me,pisos:1+Math.floor(t()*t()*5),color:ff[Math.floor(t()*ff.length)]}),J+=Y+1.5+t()*3}let x=[];for(let z of a.lugares){let de=A.filter(Y=>Y.lado===z.lado&&!Y.nombre);if(!de.length)continue;let ie=de.reduce((Y,re)=>Math.abs((re.d0+re.d1)/2-z.d)<Math.abs((Y.d0+Y.d1)/2-z.d)?re:Y);if(ie.nombre=z.nombre,/Parque|Parqueo/.test(z.nombre)){ie.vacio=!0;continue}let J=l_.find(([Y])=>Y.test(z.nombre))?.[1]??{};Object.assign(ie,J),x.push(ie)}for(let z of A){if(z.vacio)continue;let de=z.lado==="este"?1:-1,ie=de>0?z.frente:-(z.frente+z.fondo),J=de>0?z.frente+z.fondo:-z.frente,Y=z.pisos*3.2+.6,re=[u(z.d0,ie),u(z.d1,ie),u(z.d1,J),u(z.d0,J)].map(me=>[me[0],me[2]]);s.prisma(re,Kt,Y,z.color,{techo:z.pisos<=2?Ft.zinc:Ft.losa,bahia:3}),E.push({d0:z.d0,d1:z.d1,a0:ie,a1:J}),Object.assign(z,{a0:ie,a1:J,h:Y})}let S=document.createElement("canvas");S.width=S.height=1024;let w=S.getContext("2d");w.textAlign="center",w.textBaseline="middle",x.slice(0,32).forEach((z,de)=>{let ie=de%2,J=de>>1,Y=ie*512,re=J*64;w.fillStyle="#"+(z.cartel??2832970).toString(16).padStart(6,"0"),w.fillRect(Y,re,512,64),w.fillStyle="#fff",w.font="bold 34px system-ui, Arial, sans-serif";let me=w.measureText(z.nombre).width;me>480&&(w.font=`bold ${Math.floor(34*480/me)}px system-ui, Arial, sans-serif`),w.fillText(z.nombre,Y+256,re+34);let L=z.lado==="este"?1:-1,Re=L>0?z.a0-.06:z.a1+.06,se=(z.d0+z.d1)/2,R=Math.min(z.d1-z.d0-2,9)/2,y=Math.min(z.h-.9,3.7),O=u(se-L*R,Re),W=u(se+L*R,Re),ae=ie/2,xe=ae+.5,Se=1-J/16,ne=Se-1/16;o.quad([O[0],y-.55,O[2]],[W[0],y-.55,W[2]],[W[0],y+.55,W[2]],[O[0],y+.55,O[2]],16777215,[ae,ne,xe,ne,xe,Se,ae,Se])});let D=a.postes.map(z=>(e.aVia(z.p[0],z.p[1],n),{...z,x:z.p[0],z:z.p[1],d:n.d,a:n.a,rumbo:h(n.d)})),F=Object.fromEntries(D.map(z=>[z.id,z])),P=new Lt(new At(.13,.18,9.6,10).translate(0,4.8,0),new it({color:Ft.concreto,roughness:.9}),D.length),I=D.filter(z=>z.herrajes.some(de=>/reserva/.test(de))),N=new Lt(new yn(.36,.035,6,18),new it({color:1382170,roughness:.6}),I.length*2),B=new xt;D.forEach((z,de)=>{B.position.set(z.x,Kt,z.z),B.rotation.set(0,0,0),B.updateMatrix(),P.setMatrixAt(de,B.matrix),z.herrajes.includes("cruceta")&&r.caja(z.x,9,z.z,2.2,.1,.12,Ft.madera,z.rumbo),T.push({x:z.x,z:z.z,r:.2})}),I.forEach((z,de)=>[-1,1].forEach((ie,J)=>{let Y=u(z.d+ie*.9,z.a,6.25);B.position.set(Y[0],Y[1],Y[2]),B.rotation.set(0,z.rumbo+Math.PI/2,0),B.updateMatrix(),N.setMatrixAt(de*2+J,B.matrix)}));let q=[],k=[],V=new Be;function H(z,de,ie,J){V.set(J);for(let Y=0;Y<12;Y++)for(let re of[Y/12,(Y+1)/12])q.push(z[0]+(de[0]-z[0])*re,z[1]+(de[1]-z[1])*re-ie*4*re*(1-re),z[2]+(de[2]-z[2])*re),k.push(V.r,V.g,V.b)}for(let z of a.tendido){let de=F[z.de],ie=F[z.a];for(let J=0;J<3;J++)H([de.x,6.3+J*.18,de.z],[ie.x,6.3+J*.18,ie.z],.55,921361);for(let J of[-.95,0,.95])H(u(de.d,de.a+J,9.15),u(ie.d,ie.a+J,9.15),.8,3356218)}let te=new mt;te.setAttribute("position",new tt(q,3)),te.setAttribute("color",new tt(k,3));let ge=a.arboles.map(z=>({x:z[0],z:z[1],k:.8+t()*.5}));for(let z of A)if(z.vacio)for(let de=0;de<6;de++){let ie=u(z.d0+t()*(z.d1-z.d0),(z.lado==="este"?1:-1)*(z.frente+2+t()*z.fondo));ge.push({x:ie[0],z:ie[2],k:1+t()*.6})}for(let z=0;z<26;z++){let de=u(t()*e.largo,(t()<.5?-1:1)*(38+t()*24));ge.push({x:de[0],z:de[2],k:1+t()*.8})}let _e=new Lt(new At(.13,.2,3,6).translate(0,1.5,0),new it({color:5916210,roughness:1}),ge.length),He=new Lt(ac().scale(1.7,1.5,1.7).translate(0,4.1,0),new it({vertexColors:!0,roughness:1,flatShading:!0}),ge.length);ge.forEach((z,de)=>{B.position.set(z.x,Kt,z.z),B.rotation.set(0,t()*6,0),B.scale.setScalar(z.k),B.updateMatrix(),_e.setMatrixAt(de,B.matrix),He.setMatrixAt(de,B.matrix),He.setColorAt(de,V.setHSL(.27+t()*.08,.45+t()*.15,.26+t()*.1)),T.push({x:z.x,z:z.z,r:.25})}),B.scale.setScalar(1);let Fe=(z,de,ie)=>{r.caja(z.p[0],Kt,z.p[1],.06,2.3,.06,Ft.metal),r.caja(z.p[0],1.9,z.p[1],.56,.56,.04,de,ie)};for(let z of a.otros){e.aVia(z.p[0],z.p[1],n);let de=h(n.d);if(/ALTO/.test(z.que))Fe(z,12593182,de);else if(/25 KPH/.test(z.que))Fe(z,15856108,de);else if(/zona escolar/.test(z.que))Fe(z,15320363,de);else if(/estacionamiento E/.test(z.que))Fe(z,2056112,de);else if(/parquímetro/.test(z.que))r.caja(z.p[0],Kt,z.p[1],.08,1.2,.08,Ft.metal),r.caja(z.p[0],1.3,z.p[1],.3,.45,.2,2903667,de);else if(/gabinete/.test(z.que)){r.caja(z.p[0],Kt,z.p[1],.5,1.35,.95,3046735,de);let ie=u(n.d+.9,n.a-.5);r.caja(ie[0],Kt,ie[2],.14,.9,.14,Ft.amarillo),E.push({d0:n.d-.5,d1:n.d+.5,a0:n.a-.3,a1:n.a+.3})}else/retenida/.test(z.que)?r.caja(z.p[0],Kt,z.p[1],.12,2.2,.12,Ft.amarillo,de):/caja de empalme/.test(z.que)&&r.caja(z.p[0],6.05,z.p[1],.24,.24,.6,1184790,de)}let Z=F.P05,G=Z.d+15,X=u(G,mf),he={x:X[0],z:X[2],rumbo:h(G)},Me=new ot,fe=new it({vertexColors:!0,roughness:.92}),ye=pf(),De=(z,de,{sombra:ie=!0,recibe:J=!0}={})=>{let Y=new Ne(z.geometria(),de);return Y.castShadow=ie,Y.receiveShadow=J,Y};Me.add(De(i,fe,{sombra:!1}),De(c,new it({map:ye.asfalto,vertexColors:!0,roughness:.95}),{sombra:!1}),De(l,new it({map:ye.acera,vertexColors:!0,roughness:.95}),{sombra:!1}),De(d,new it({map:ye.pasto,vertexColors:!0,roughness:1}),{sombra:!1}),De(r,fe),De(s,new it({map:c_(),vertexColors:!0,roughness:.85})),De(o,new wn({map:Object.assign(new On(S),{colorSpace:Ut,anisotropy:4})}),{sombra:!1,recibe:!1}),new Jn(te,new Un({vertexColors:!0})),P,N,_e,He);for(let z of[P,_e,He])z.castShadow=!0;Me.traverse(z=>{z.matrixAutoUpdate=!1,z.updateMatrix()});let ue={};function Je(z,de){if(e.aVia(z,de,ue),Math.abs(ue.a)<=Qt||Math.abs(ue.a)>Pn)return 0;for(let[ie,J]of b)if(ue.d>=ie&&ue.d<=J)return Kt;return 0}return{grupo:Me,cajas:E,circulos:T,altura:Je,postes:D,estacionamiento:_,limites:{d0:m+2,d1:p-2,a:Pn-2},inicio:{d:G-1,a:-4.5},dPick:G,trabajo:Z,estacionado:he,BORDE:Pn+40,D0:m-60,D1:p+60}}var cu=2.5,Pa=40,cc=5,bi=128,xf=bi*cc/2,d_=12,u_=14,lc=(a,e)=>{let t=Math.imul(a,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function Ts(a,e){let t=Math.floor(a),n=Math.floor(e),i=a-t,r=e-n,s=i*i*(3-2*i),o=r*r*(3-2*r);return(lc(t,n)*(1-s)+lc(t+1,n)*s)*(1-o)+(lc(t,n+1)*(1-s)+lc(t+1,n+1)*s)*o}var In=(a,e,t)=>{let n=Math.max(0,Math.min(1,(t-a)/(e-a)));return n*n*(3-2*n)},kn=Object.fromEntries(Object.entries({fondo:2051950,arena:14272911,selva:3107626,potrero:7248450,sabana:10263114,nuboso:2381114,paramo:8157774,roca:7825754,pueblo:11118492,pasto:6064713}).map(([a,e])=>[a,new Be(e)]));function bf(a,e,t,n,i=[]){let{x0:r,z0:s,paso:o,w:c,h:l}=e,d=cu/e.escala,u=e.origen*d,h=-u,f=r+(c-1)*o,g=s+(l-1)*o,v={e:0,pend:0,llano:0},m={},p={dist:0,y:0},b=null;function M(ie,J){let Y=Math.max(0,Math.min(c-1.001,(ie-r)/o)),re=Math.max(0,Math.min(l-1.001,(J-s)/o)),me=Y|0,L=re|0,Re=Y-me,se=re-L,R=L*c+me,y=a[R],O=a[R+1],W=a[R+c],ae=a[R+c+1],xe=(y*(1-Re)+O*Re)*(1-se)+(W*(1-Re)+ae*Re)*se;v.e=xe,v.pend=Math.hypot((O-y)*(1-se)+(ae-W)*se,(W-y)*(1-Re)+(ae-O)*Re)/(o*e.escala);let Se=xe>0?Math.min(7,v.pend*16):0,ne=xe*d-u+Se*((Ts(ie*.011,J*.011)-.5)*1.5+(Ts(ie*.037,J*.037)-.5)*.6);for(let ce of i){let ve=ie-ce.x,Oe=J-ce.z;if(Math.abs(ve)>ce.R||Math.abs(Oe)>ce.R)continue;let Ee=Math.hypot(ve,Oe),Ae=ce.cima*d-u-ce.alto*Math.pow(Ee/ce.R,.85)-Math.max(0,6-Ee)*.8;Ee<ce.R&&Ae>ne&&(ne=Ae,v.pend=.5,v.e=(ne+u)/d)}return ne}function _(ie,J){let Y=M(ie,J);if(v.llano=0,Math.abs(ie)<420&&J>-480&&J<480){t.aVia(ie,J,m);let re=Math.hypot(Math.max(0,Math.abs(m.a)-100),Math.max(0,-70-m.d,m.d-t.largo-70));if(re<150){let me=In(4,150,re);Y=(re<4?-.6+.15*re:0)*(1-me)+Y*me,v.llano=1-me}}for(let re of n){if(Math.abs(ie-re.x)>re.r+60||Math.abs(J-re.z)>re.r+60)continue;let me=In(re.r,re.r+60,Math.hypot(ie-re.x,J-re.z));me<1&&(Y=re.y*(1-me)+Y*me,v.llano=Math.max(v.llano,1-me))}return Y}for(let ie of n)ie.y=Math.max(h+1.5,M(ie.x,ie.z));function A(ie,J){let Y=_(ie,J);if(b&&b.cerca(ie,J,p).dist<45){let re=In(16,45,p.dist);Y=p.y*(1-re)+Y*re}return Y}let E=new Be;function T(ie,J,Y,re){let me=v.e,L=v.pend*cu,Re=Ts(ie*.06,J*.06),se=e.lon0+ie/e.kx,R=e.lat0-J/e.kz;if(me<1)E.copy(kn.arena).lerp(kn.fondo,In(0,45,-me));else if(me<14)E.copy(kn.arena);else{let O=In(84.72,85.15,-se)*In(9.7,10.15,R)*(1-In(500,900,me));E.copy(kn.selva).lerp(kn.potrero,In(.42,.7,Re)*(1-In(.1,.3,L))).lerp(kn.sabana,O*(.6+.4*Re)),E.lerp(kn.nuboso,In(1300,1900,me)).lerp(kn.paramo,In(2900,3300,me)).lerp(kn.roca,In(.75,1.2,L)),E.lerp(kn.arena,1-In(14,30,me))}v.llano>0&&E.lerp(Math.abs(ie)<420&&Math.abs(J)<480?kn.pasto:kn.pueblo,v.llano*.8);let y=.88+Re*.24;Y[re]=E.r*y,Y[re+1]=E.g*y,Y[re+2]=E.b*y}let x=Math.floor((f-r)/Pa)+1,S=Math.floor((g-s)/Pa)+1,w=new Float32Array(x*S*3),D=new Float32Array(x*S*3),F=new Float32Array(x*S*3),P=new Uint32Array((x-1)*(S-1)*6),I=new mt;I.setAttribute("position",new gt(w,3)),I.setAttribute("color",new gt(D,3)),I.setAttribute("normal",new gt(F,3)),I.setIndex(new gt(P,1));function N(ie,J,Y,re,me){for(let L=0;L<re;L++)for(let Re=0;Re<Y;Re++){let se=(L*Y+Re)*3,R=ie[(L*Y+Math.max(0,Re-1))*3+1],y=ie[(L*Y+Math.min(Y-1,Re+1))*3+1],O=ie[(Math.max(0,L-1)*Y+Re)*3+1],W=ie[(Math.min(re-1,L+1)*Y+Re)*3+1],ae=(R-y)/(2*me),xe=(O-W)/(2*me),Se=Math.hypot(ae,1,xe);J[se]=ae/Se,J[se+1]=1/Se,J[se+2]=xe/Se}}function B(){for(let ie=0;ie<S;ie++)for(let J=0;J<x;J++){let Y=(ie*x+J)*3,re=r+J*Pa,me=s+ie*Pa;w[Y]=re,w[Y+1]=A(re,me),w[Y+2]=me,T(re,me,D,Y)}N(w,F,x,S,Pa);for(let ie of["position","color","normal"])I.attributes[ie].needsUpdate=!0;I.computeBoundingSphere()}function q(ie,J){let Y=0;for(let re=0;re<S-1;re++)for(let me=0;me<x-1;me++){if(me>=ie-8&&me<ie+8&&re>=J-8&&re<J+8)continue;let L=re*x+me,Re=L+x;P[Y++]=L,P[Y++]=Re,P[Y++]=L+1,P[Y++]=L+1,P[Y++]=Re,P[Y++]=Re+1}I.setDrawRange(0,Y),I.index.needsUpdate=!0}let k=bi+1,V=k*k+4*k,H=new Float32Array(V*3),te=new Float32Array(V*3),ge=new Float32Array(V*3),_e=new Float32Array(k*k*3),He=new Float32Array(k*k*3),Fe=[];for(let ie=0;ie<bi;ie++)for(let J=0;J<bi;J++){let Y=ie*k+J,re=Y+k;Fe.push(Y,re,Y+1,Y+1,re,re+1)}let Z=[[],[],[],[]];for(let ie=0;ie<k;ie++)Z[0].push(ie),Z[1].push(bi*k+ie),Z[2].push(ie*k),Z[3].push(ie*k+bi);Z.forEach((ie,J)=>{for(let Y=0;Y<bi;Y++){let re=ie[Y],me=ie[Y+1],L=k*k+J*k+Y,Re=L+1;J===0||J===3?Fe.push(re,me,L,me,Re,L):Fe.push(re,L,me,me,L,Re)}});let G=new mt;G.setAttribute("position",new gt(H,3)),G.setAttribute("color",new gt(te,3)),G.setAttribute("normal",new gt(ge,3)),G.setIndex(Fe);let X=new it({vertexColors:!0,roughness:1,side:zn}),he=new Ne(I,X),Me=new Ne(G,X),fe=new Ne(new wa(12e3,12e3).rotateX(-Math.PI/2),new it({color:2847639,roughness:.22,metalness:.1,transparent:!0,opacity:.9}));fe.position.y=h;let ye=new ot;ye.add(he,Me,fe);for(let ie of[he,Me])ie.receiveShadow=!0,ie.frustumCulled=!1;let De=null,ue=null,Je=null;function z(ie){let{ci:J,cj:Y}=ue,re=r+(J-8)*Pa,me=s+(Y-8)*Pa;for(let L=0;L<ie&&ue.fila<k;L++,ue.fila++){let Re=ue.fila,se=me+Re*cc;for(let R=0;R<k;R++){let y=(Re*k+R)*3,O=re+R*cc;_e[y]=O,_e[y+1]=A(O,se),_e[y+2]=se,T(O,se,He,y)}}if(!(ue.fila<k)){H.set(_e),te.set(He),N(H,ge,k,k,cc),Z.forEach((L,Re)=>L.forEach((se,R)=>{let y=(k*k+Re*k+R)*3;H[y]=H[se*3],H[y+1]=H[se*3+1]-d_,H[y+2]=H[se*3+2];for(let O=0;O<3;O++)te[y+O]=te[se*3+O],ge[y+O]=ge[se*3+O]}));for(let L of["position","color","normal"])G.attributes[L].needsUpdate=!0;q(J,Y),De={ci:J,cj:Y,x:re+xf,z:me+xf},ue=null,Je?.(De.x,De.z)}}function de(ie,J,Y=!1){let re=Math.max(8,Math.min(x-9,Math.round((ie-r)/Pa))),me=Math.max(8,Math.min(S-9,Math.round((J-s)/Pa)));!ue&&(!De||re!==De.ci||me!==De.cj)&&(ue={ci:re,cj:me,fila:0}),ue&&z(Y?k:u_)}return{grupo:ye,MAR:h,EX:cu,limites:{x0:r+60,x1:f-60,z0:s+60,z1:g-60},altura:A,alturaBase:_,relieve:M,cada:de,muestra:v,listo(ie,J){b=ie,Je=J,B()}}}var h_=8,hr=60,dc=46,p_=3.6;function vf(a,e,t,n=[]){let i=a.map(c=>{let l=c.puntos,d=[],u=[];for(let p=0;p<l.length-1;p++){let b=l[Math.max(0,p-1)],M=l[p],_=l[p+1],A=l[Math.min(l.length-1,p+2)],E=Math.max(1,Math.ceil(Math.hypot(_[0]-M[0],_[1]-M[1])/h_));for(let T=0;T<E;T++){let x=T/E,S=x*x,w=S*x;d.push(.5*(2*M[0]+(_[0]-b[0])*x+(2*b[0]-5*M[0]+4*_[0]-A[0])*S+(3*M[0]-b[0]-3*_[0]+A[0])*w)),u.push(.5*(2*M[1]+(_[1]-b[1])*x+(2*b[1]-5*M[1]+4*_[1]-A[1])*S+(3*M[1]-b[1]-3*_[1]+A[1])*w))}}d.push(l.at(-1)[0]),u.push(l.at(-1)[1]);let h=d.length,f=d.map((p,b)=>Math.max(t+1.5,e(p,u[b]))),g=new Uint8Array(h);c.y0!==void 0&&(f[0]=c.y0,g[0]=1);for(let p=0;p<h;p++)for(let b of n)Math.hypot(d[p]-b.x,u[p]-b.z)<b.r*.6&&(f[p]=Math.max(t+1.5,b.y),g[p]=1);g[h-1]=1;for(let p=0;p<6e3;p++){let b=0;for(let M=1;M<h-1;M++)g[M]||(f[M]=Math.max(t+1.5,(f[M-1]+2*f[M]+f[M+1])/4));for(let M=1;M<h;M++)b=Math.max(b,Math.abs(f[M]-f[M-1])/Math.hypot(d[M]-d[M-1],u[M]-u[M-1]));if(b<.13&&p>20)break}let v=new Array(h),m=new Array(h);for(let p=0;p<h;p++){let b=Math.max(0,p-1),M=Math.min(h-1,p+1),_=Math.hypot(d[M]-d[b],u[M]-u[b])||1;v[p]=(u[M]-u[b])/_,m[p]=-(d[M]-d[b])/_}return{n:c.n,X:d,Z:u,Y:f,NX:v,NZ:m}}),r=new Map,s=(c,l)=>(c+2048)*4096+(l+2048);i.forEach((c,l)=>{for(let d=0;d<c.X.length-1;d++){let u=Math.floor((Math.min(c.X[d],c.X[d+1])-dc)/hr),h=Math.floor((Math.max(c.X[d],c.X[d+1])+dc)/hr),f=Math.floor((Math.min(c.Z[d],c.Z[d+1])-dc)/hr),g=Math.floor((Math.max(c.Z[d],c.Z[d+1])+dc)/hr);for(let v=u;v<=h;v++)for(let m=f;m<=g;m++){let p=s(v,m),b=r.get(p);b||r.set(p,b=[]),b.push(l,d)}}});function o(c,l,d){d.dist=1/0;let u=r.get(s(Math.floor(c/hr),Math.floor(l/hr)));if(!u)return d;for(let h=0;h<u.length;h+=2){let f=i[u[h]],g=u[h+1],v=f.X[g],m=f.Z[g],p=f.X[g+1]-v,b=f.Z[g+1]-m,M=p*p+b*b,_=Math.max(0,Math.min(1,((c-v)*p+(l-m)*b)/M)),A=Math.hypot(c-v-p*_,l-m-b*_);if(A<d.dist){let E=Math.sqrt(M);d.dist=A,d.y=f.Y[g]+(f.Y[g+1]-f.Y[g])*_,d.ruta=u[h],d.tx=p/E,d.tz=b/E}}return d}return{rutas:i,cerca:o,MEDIO:p_}}function _f(a,e=1500){let t=new Float32Array(e*2*12),n=new Float32Array(e*2*12),i=new Float32Array(e*2*12),r=new Uint32Array(e*2*6);for(let f=0;f<e*2;f++){r.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6);for(let g=0;g<4;g++)i[f*12+g*3+1]=1}let s=new mt;s.setAttribute("position",new gt(t,3)),s.setAttribute("color",new gt(n,3)),s.setAttribute("normal",new gt(i,3)),s.setIndex(new gt(r,1));let o=new Ne(s,new it({vertexColors:!0,roughness:.95}));o.frustumCulled=!1,o.receiveShadow=!0;let c=new Be(3882564),l=new Be(14924079),d=0;function u(f,g,v,m,p,b){if(d>=e*2)return;let M=d++*12,_=g+1,A=[[g,v],[_,v],[_,m],[g,m]];for(let E=0;E<4;E++){let[T,x]=A[E];t[M+E*3]=f.X[T]+f.NX[T]*x,t[M+E*3+1]=f.Y[T]+p,t[M+E*3+2]=f.Z[T]+f.NZ[T]*x,n[M+E*3]=b.r,n[M+E*3+1]=b.g,n[M+E*3+2]=b.b}}function h(f,g,v){d=0;for(let m of a.rutas)for(let p=0;p<m.X.length-1;p++)Math.abs(m.X[p]-f)>v||Math.abs(m.Z[p]-g)>v||(u(m,p,-a.MEDIO,a.MEDIO,.12,c),p%2===0&&u(m,p,-.09,.09,.15,l));s.setDrawRange(0,d*6),s.attributes.position.needsUpdate=s.attributes.color.needsUpdate=!0}return{malla:o,rehacer:h}}var pr=11,ws=240,uc=1100,vi=(a,e,t)=>{let n=Math.imul(a,73856093)^Math.imul(e,19349663)^Math.imul(t,83492791);return n=Math.imul(n^n>>>15,2246822519),((n^n>>>13)>>>0)/4294967296},f_={palma:[5.2,.7,2.1,.7,5148474],selva:[4.2,1.1,2.3,2,2911019],seco:[3.2,1.2,3.1,1,8163132],cipres:[3,.9,1,2.7,2314810]};function yf(a,e,t){let n=new Lt(new At(.11,.17,1,6).translate(0,.5,0),new it({color:5916210,roughness:1}),uc),i=new Lt(ac(),new it({vertexColors:!0,roughness:1,flatShading:!0}),uc),r=new ot;r.add(n,i);for(let d of[n,i])d.frustumCulled=!1,d.count=0;let s=new xt,o=new Be,c={dist:0};function l(d,u){let h=0,f=Math.floor((d-ws)/pr),g=Math.floor((d+ws)/pr),v=Math.floor((u-ws)/pr),m=Math.floor((u+ws)/pr);for(let p=v;p<=m&&h<uc;p++)for(let b=f;b<=g&&h<uc;b++){let M=(b+vi(b,p,1))*pr,_=(p+vi(b,p,2))*pr;if(Math.hypot(M-d,_-u)>ws)continue;let A=a.altura(M,_),E=a.muestra,T=E.e;if(T<3||E.llano>.25||E.pend*a.EX>1.1||e.cerca(M,_,c).dist<12)continue;let x=t.lon0+M/t.kx,S=t.lat0-_/t.kz,w=-x>84.9&&S>9.85&&T<700,D=Ts(M*.013,_*.013),F=T>3e3?.06:w?.16+.3*D:.2+.75*D*D;if(vi(b,p,3)>F)continue;let[P,I,N,B,q]=f_[T<45?"palma":T>1900?"cipres":w?"seco":"selva"],k=.75+vi(b,p,4)*.6;s.position.set(M,A-.1,_),s.rotation.set(0,vi(b,p,5)*6.28,0),s.scale.set(I*k,P*k,I*k),s.updateMatrix(),n.setMatrixAt(h,s.matrix),s.position.y=A+P*k+B*k*.35,s.scale.set(N*k,B*k,N*k),s.updateMatrix(),i.setMatrixAt(h,s.matrix),i.setColorAt(h,o.set(q).offsetHSL((vi(b,p,6)-.5)*.04,0,(vi(b,p,7)-.5)*.08)),h++}n.count=i.count=h,n.instanceMatrix.needsUpdate=i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return{grupo:r,rehacer:l}}function m_(a){return JSON.stringify([a.type,a.map?.uuid??null,a.roughness,a.metalness,a.transparent,a.opacity,a.side,a.depthWrite,a.depthTest,a.emissive?.getHex(),a.emissiveIntensity,a.vertexColors,a.fog,a.flatShading,a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits,a.envMapIntensity,a.toneMapped,a.alphaTest,a.blending])}function g_(a){let e=a.clone();return e.color.set(16777215),e.vertexColors=!0,e.needsUpdate=!0,e}function x_(a,e,t){let n=a.index?a.toNonIndexed():a.clone();for(let i of Object.keys(n.attributes))["position","normal","uv","color"].includes(i)||n.deleteAttribute(i);if(n.attributes.uv||n.setAttribute("uv",new tt(new Float32Array(n.attributes.position.count*2),2)),n.attributes.normal||n.computeVertexNormals(),t&&!n.attributes.color){let i=e.color??new Be(1,1,1),r=n.attributes.position.count,s=new Float32Array(r*3);for(let o=0;o<r;o++)s[o*3]=i.r,s[o*3+1]=i.g,s[o*3+2]=i.b;n.setAttribute("color",new tt(s,3))}return t||n.deleteAttribute("color"),n}var Cs=new xt;function $e(a=0,e=0,t=0,n=0,i=0,r=0,s=1,o=s,c=s){return Cs.position.set(a,e,t),Cs.rotation.set(n,i,r),Cs.scale.set(s,o,c),Cs.updateMatrix(),Cs.matrix.clone()}function hc(){let a=new Map,e=cr.nuevo;return{add(t,n,i=null){let r=e?m_(n):n;a.has(r)||a.set(r,{mat:n,geos:[]});let s=x_(t,n,e);i&&s.applyMatrix4(i),a.get(r).geos.push(s)},construir({sombra:t=!0,recibe:n=!0}={}){let i=new ot;for(let{mat:r,geos:s}of a.values()){let o=new Ne(dr(s,!1),e?g_(r):r);o.castShadow=t,o.receiveShadow=n,i.add(o),s.forEach(c=>c.dispose())}return a.clear(),i}}}var Sf="./datos-ZQLP6CAY.png";var dn=(a,e={})=>new it({color:a,roughness:.6,...e}),_i={largoCaja:[-.95,2.85],techoY:2.36,accesoX:3.2,rungY:a=>.55+a*.3,N_RUNGS:7,ojal:new U(2.2,3.12,-.6),barandal:new U(1.2,2.78,-.95),espejo:new U(-2.45,1.95,1.2),escaleraRack:new U(.9,2.95,.45),cabina:new U(-1.75,2.3,0)};function Mf(a,e){let t=document.createElement("canvas");t.width=512,t.height=Math.round(512*e/a);let n=new On(t);n.colorSpace=Ut,n.anisotropy=4;let i=s=>{let o=t.getContext("2d");if(o.clearRect(0,0,t.width,t.height),o.fillStyle="#004E96",o.beginPath(),o.roundRect(0,0,t.width,t.height,26),o.fill(),o.fillStyle="#FFD627",o.fillRect(0,t.height-14,t.width,14),s){let c=(t.height-14)*.7,l=t.width*.82,d=Math.min(c/s.height,l/s.width),u=s.width*d,h=s.height*d;o.drawImage(s,(t.width-u)/2,(t.height-14-h)/2,u,h)}n.needsUpdate=!0};i(null);let r=new Image;return r.onload=()=>i(r),r.src=Sf,new Ne(new wa(a,e),new it({map:n,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2}))}function Ef(){let a=new ot,e=dn(16185076,{roughness:.32,metalness:.25}),t=dn(20118,{roughness:.4,metalness:.3}),n=dn(16766503,{roughness:.5}),i=dn(1711136,{roughness:.6,metalness:.3}),r=dn(10133672,{roughness:.35,metalness:.75}),s=dn(1912382,{roughness:.08,metalness:.6}),o=dn(1447706,{roughness:.9}),c=dn(7304573,{roughness:.6,metalness:.5}),l=dn(16773824,{emissive:8943428}),d=dn(13840175,{emissive:6689041}),u=hc();u.add(new Ce(5.9,.3,1.5),i,$e(-.05,.58,0));let h=[];for(let S of[-2.15,1.95])for(let w of[-1,1]){let D=new ot;D.position.set(S,.44,w);let F=new ot;D.add(F);let P=hc();P.add(new At(.44,.44,.32,22),o,$e(0,0,0,Math.PI/2)),P.add(new At(.27,.27,.34,16),r,$e(0,0,0,Math.PI/2));for(let I=0;I<5;I++){let N=I*Math.PI*2/5;P.add(new Ce(.06,.3,.02),i,$e(0,Math.cos(N)*.12,w*.175,0,0,N))}F.add(P.construir()),a.add(D),h.push({pivote:D,giro:F,delantera:S<0}),u.add(new Ce(1.05,.08,.42),i,$e(S,.93,w*1))}u.add(new Ce(.95,.62,2.08),e,$e(-2.58,.98,0)),u.add(new Ce(1.55,1.5,2.1),e,$e(-1.72,1.5,0)),u.add(new Ce(.05,.66,1.85),s,$e(-2.5,1.78,0));for(let S of[-1,1])u.add(new Ce(1,.6,.05),s,$e(-1.78,1.82,S*1.06)),u.add(new Ce(.04,1.35,.04),i,$e(-1.3,1.45,S*1.06)),u.add(new Ce(.04,1.35,.04),i,$e(-2.2,1.45,S*1.06)),u.add(new Ce(.22,.05,.06),r,$e(-1.5,1.45,S*1.08)),u.add(new Ce(.28,.2,.06),i,$e(-2.45,1.95,S*1.18)),u.add(new Ce(.04,.04,.15),i,$e(-2.45,1.9,S*1.1)),u.add(new Ce(.06,.2,.42),l,$e(-3.06,.93,S*.72)),u.add(new Ce(.06,.08,.3),dn(16751104,{emissive:6697728}),$e(-3.06,.74,S*.75));u.add(new Ce(.06,.3,1),i,$e(-3.06,.93,0)),u.add(new Ce(.2,.28,2.14),i,$e(-3.1,.55,0)),u.add(new Ce(1.7,.08,2.14),e,$e(-1.72,2.28,0)),u.add(new Ce(1,.06,1.9),c,$e(-1.72,2.34,0)),u.add(new Ce(1.56,.14,2.12),t,$e(-1.72,1,0)),u.add(new Ce(1.57,.05,2.13),n,$e(-1.72,1.1,0)),u.add(new Ce(.97,.1,2.1),t,$e(-2.58,.78,0));let f=.95,g=3.8;u.add(new Ce(g,1.55,2.2),e,$e(f,1.525,0)),u.add(new Ce(g+.02,.5,2.22),t,$e(f,.98,0)),u.add(new Ce(g+.03,.07,2.23),n,$e(f,1.26,0));for(let S of[-1,1]){for(let w of[-.35,.55,1.45,2.35])u.add(new Ce(.03,1.05,.03),i,$e(w,1.78,S*1.11));for(let w of[.1,1,1.9])u.add(new Ce(.2,.05,.05),r,$e(w,1.7,S*1.13));u.add(new Ce(g-.3,.03,.03),i,$e(f,2.3,S*1.11)),u.add(new Ce(g,.12,.1),i,$e(f,.8,S*1.12))}u.add(new Ce(.03,1.45,.03),i,$e(2.86,1.55,0)),u.add(new Ce(.04,1.5,.5),i,$e(2.86,1.55,0)),u.add(new Ce(.05,.08,.06),r,$e(2.88,1.5,.12)),u.add(new Ce(.05,.08,.06),r,$e(2.88,1.5,-.12)),u.add(new Ce(.25,.28,2.2),i,$e(2.95,.62,0));for(let S of[-1,1])u.add(new Ce(.06,.22,.32),d,$e(2.87,.95,S*.95)),u.add(new Ce(.04,.3,.02),n,$e(2.88,.5,S*1));u.add(new Ce(3.75,.05,2.05),c,$e(f,2.355,0));for(let S=-.8;S<2.8;S+=.2)u.add(new Ce(.04,.012,1.95),i,$e(S,2.385,0));for(let[S,w]of[[-.88,-.98],[-.88,.98],[2.78,-.98],[2.78,.98],[.95,-.98],[.95,.98]])u.add(new At(.035,.035,.46,8),r,$e(S,2.58,w));for(let S of[-.98,.98])u.add(new Ce(3.7,.05,.05),n,$e(f,2.82,S)),u.add(new Ce(3.7,.04,.04),r,$e(f,2.6,S));for(let S of[-.88,.95,2.78])u.add(new Ce(.05,.05,1.95),r,$e(S,2.82,0));u.add(new Ce(.3,.04,.3),r,$e(_i.ojal.x,2.4,_i.ojal.z)),u.add(new At(.045,.055,.76,10),n,$e(_i.ojal.x,2.78,_i.ojal.z));for(let S of[-1,1])u.add(new Ce(.05,2.1,.05),r,$e(2.96,1.4,S*.3));for(let S=0;S<_i.N_RUNGS;S++)u.add(new At(.018,.018,.6,8),r,$e(2.96,_i.rungY(S),0,Math.PI/2));for(let S of[-1,1])u.add(new Ce(.18,.04,.05),r,$e(2.9,2.4,S*.3));u.add(new At(.009,.009,2.75,6),n,$e(3.08,1.65,0)),u.add(new Ce(.16,.04,.1),r,$e(3.03,3,0)),u.add(new Ce(.1,.04,.1),r,$e(3.03,.28,0)),u.add(new Ce(.06,.06,.1),r,$e(3,3.02,0)),a.add(u.construir());for(let S of[-1,1]){let w=Mf(.84,.36);w.position.set(1,2.02,S*1.116),w.rotation.y=S>0?0:Math.PI,a.add(w);let D=Mf(.95,.3);D.position.set(-1.72,1.2,S*1.056),D.rotation.y=S>0?0:Math.PI,a.add(D)}let v=new it({color:16756736,emissive:16746496,emissiveIntensity:1,roughness:.3}),m=[];for(let S of[-.5,.5]){let w=new Ne(new Ce(.22,.12,.32),v.clone());w.position.set(-1.72,2.44,S),a.add(w),m.push(w)}let p=new Ne(new Ce(.26,.06,1.4),dn(2106410,{roughness:.4}));p.position.set(-1.72,2.37,0),a.add(p);let b=new ot,M=new Ne(new Ce(.13,.22,.11),dn(2303531,{roughness:.4,metalness:.6})),_=new Ne(new Ce(.135,.05,.115),n),A=new Ne(new yn(.04,.01,6,14),r);A.position.set(0,-.14,0),A.rotation.y=Math.PI/2,b.add(M,_,A),_.position.y=.04,b.position.set(3.1,.75,0),b.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),a.add(b);let E=new ot,T=hc(),x=dn(1118481,{roughness:.5});T.add(new At(.62,.62,.05,22),dn(11565626,{roughness:.85}),$e(0,.75,-.3,Math.PI/2)),T.add(new At(.62,.62,.05,22),dn(11565626,{roughness:.85}),$e(0,.75,.3,Math.PI/2)),T.add(new At(.46,.46,.55,22),x,$e(0,.75,0,Math.PI/2)),T.add(new At(.46,.46,.02,22),n,$e(0,.75,0,Math.PI/2)),T.add(new At(.06,.06,.8,8),r,$e(0,.75,0,Math.PI/2));for(let S of[-1,1])T.add(new Ce(.06,1,.06),r,$e(-.28,.5,S*.42,0,0,.35)),T.add(new Ce(.06,1,.06),r,$e(.28,.5,S*.42,0,0,-.35)),T.add(new Ce(.9,.05,.06),r,$e(0,.03,S*.42));return E.add(T.construir()),E.position.set(5.3,0,.1),a.add(E),a.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),a.updateMatrixWorld(!0),a.traverse(S=>{S!==a&&S!==b&&(S.updateMatrix(),S.matrixAutoUpdate=!1)}),{grupo:a,luces:m,carrito:b,carrete:E,ruedas:h,..._i}}var v_=4.1,__=1.15,y_=3.15,S_=27,M_=9,E_=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a));function Af(a,e){let t=Ef();t.grupo.rotation.y=Math.PI/2,t.grupo.updateMatrix(),t.carrete.visible=!1,t.grupo.traverse(v=>{v.isMesh&&(v.castShadow=!1)});let n=new ot;n.add(t.grupo),n.rotation.order="YXZ";let i={x:e.x,z:e.z,rumbo:e.rumbo,v:0,y:0,ox:e.x,oz:e.z,orumbo:e.rumbo},r=new U;function s(v,m,p,b=r){let M=Math.cos(i.rumbo),_=Math.sin(i.rumbo);return b.set(i.x+v*M+p*_,i.y+m,i.z-v*_+p*M)}function o(){let v=Math.cos(i.rumbo),m=Math.sin(i.rumbo),p=a(i.x+m*2.1,i.z+v*2.1),b=a(i.x-m*2.1,i.z-v*2.1),M=a(i.x+v*1,i.z-m*1),_=a(i.x-v*1,i.z+m*1);i.y=(p+b+M+_)/4,n.position.set(i.x,i.y,i.z),n.rotation.set(-Math.atan2(p-b,4.2),i.rumbo,Math.atan2(M-_,2))}let c=0;function l(v,m){c+=i.v*v/.44;for(let p of t.ruedas)p.giro.rotation.z=c,p.giro.updateMatrix(),p.delantera&&(p.pivote.rotation.y=m,p.pivote.updateMatrix())}function d(v,m,p,b){let M=p?S_:M_;m.mz>.05?i.v+=(i.v<0?12:4.5)*m.mz*v:m.mz<-.05?i.v+=(i.v>0?11:3)*m.mz*v:i.v-=Math.sign(i.v)*Math.min(Math.abs(i.v),1.6*v),i.v>M&&(i.v=Math.max(M,i.v-7*v)),i.v=Math.max(-5,i.v),i.rumbo+=i.v*Math.tan(-m.mx*.55/(1+Math.abs(i.v)*.09))/v_*v,i.x=Math.max(b.x0,Math.min(b.x1,i.x+Math.sin(i.rumbo)*i.v*v)),i.z=Math.max(b.z0,Math.min(b.z1,i.z+Math.cos(i.rumbo)*i.v*v)),i.ox=i.x,i.oz=i.z,i.orumbo=i.rumbo,l(v,-m.mx*.5)}function u(v,m,p){Object.assign(i,{x:v,z:m,rumbo:p,v:0,ox:v,oz:m,orumbo:p})}function h(v,m,p,b){i.ox=v,i.oz=m,i.orumbo=p,i.v=b}function f(v){let m=1-Math.exp(-v*10);i.x+=(i.ox-i.x)*m,i.z+=(i.oz-i.z)*m,i.rumbo+=E_(i.rumbo,i.orumbo)*m,l(v,0)}function g(v,m){let p=Math.cos(i.rumbo),b=Math.sin(i.rumbo),M=v.x-i.x,_=v.z-i.z,A=M*p-_*b,E=M*b+_*p,T=__+m,x=y_+m;Math.abs(A)>=T||Math.abs(E)>=x||(T-Math.abs(A)<x-Math.abs(E)?A=Math.sign(A||1)*T:E=Math.sign(E||1)*x,v.x=i.x+A*p+E*b,v.z=i.z-A*b+E*p)}return{grupo:n,camion:t,st:i,local:s,asentar:o,conducir:d,fijar:u,remoto:h,seguir:f,empujar:g}}var Rs={sanjose:{n:"San Jos\xE9",lat:9.9404,lon:-84.102,r:0},alajuela:{n:"Alajuela",lat:10.016,lon:-84.214,r:60},cartago:{n:"Cartago",lat:9.864,lon:-83.919,r:60},sanramon:{n:"San Ram\xF3n",lat:10.088,lon:-84.47,r:45},orotina:{n:"Orotina",lat:9.912,lon:-84.523,r:40},caldera:{n:"Caldera",lat:9.912,lon:-84.722,r:40},esparza:{n:"Esparza",lat:9.994,lon:-84.664,r:40},puntarenas:{n:"Puntarenas",lat:9.977,lon:-84.838,r:45},canas:{n:"Ca\xF1as",lat:10.428,lon:-85.094,r:45},liberia:{n:"Liberia",lat:10.634,lon:-85.44,r:60},lacruz:{n:"La Cruz",lat:11.073,lon:-85.632,r:35},penasblancas:{n:"Pe\xF1as Blancas \xB7 frontera con Nicaragua",lat:11.214,lon:-85.613,r:35},santacruz:{n:"Santa Cruz",lat:10.262,lon:-85.585,r:40},nicoya:{n:"Nicoya",lat:10.148,lon:-85.452,r:45},amistad:{n:"Puente La Amistad",lat:10.247,lon:-85.243,r:0},fortuna:{n:"La Fortuna",lat:10.471,lon:-84.645,r:40},arenal:{n:"Volc\xE1n Arenal",lat:10.463,lon:-84.703,r:0},tilaran:{n:"Tilar\xE1n",lat:10.473,lon:-84.968,r:35},monteverde:{n:"Monteverde",lat:10.31,lon:-84.82,r:0},poas:{n:"Volc\xE1n Po\xE1s",lat:10.198,lon:-84.231,r:0},irazu:{n:"Volc\xE1n Iraz\xFA",lat:9.979,lon:-83.852,r:0},guapiles:{n:"Gu\xE1piles",lat:10.215,lon:-83.79,r:45},siquirres:{n:"Siquirres",lat:10.098,lon:-83.507,r:40},limon:{n:"Lim\xF3n",lat:9.99,lon:-83.035,r:60},tortuguero:{n:"Tortuguero",lat:10.54,lon:-83.5,r:0},cahuita:{n:"Cahuita",lat:9.735,lon:-82.84,r:35},sixaola:{n:"Sixaola \xB7 frontera con Panam\xE1",lat:9.508,lon:-82.615,r:35},cerromuerte:{n:"Cerro de la Muerte",lat:9.56,lon:-83.75,r:0},chirripo:{n:"Cerro Chirrip\xF3",lat:9.484,lon:-83.489,r:0},sanisidro:{n:"San Isidro de El General",lat:9.376,lon:-83.703,r:50},buenosaires:{n:"Buenos Aires",lat:9.17,lon:-83.33,r:35},palmar:{n:"Palmar Norte",lat:8.96,lon:-83.46,r:40},neily:{n:"Ciudad Neily",lat:8.65,lon:-82.94,r:40},canoas:{n:"Paso Canoas \xB7 frontera con Panam\xE1",lat:8.534,lon:-82.84,r:35},jaco:{n:"Jac\xF3",lat:9.615,lon:-84.63,r:40},quepos:{n:"Quepos \xB7 Manuel Antonio",lat:9.43,lon:-84.16,r:40},dominical:{n:"Dominical",lat:9.25,lon:-83.86,r:30}},Tf=[{n:"Ruta 1 \xB7 Interamericana Norte",p:["@oeste","alajuela",[10.06,-84.33],"sanramon","esparza",[10.1,-84.82],[10.262,-84.965],"canas",[10.526,-85.255],"liberia","lacruz","penasblancas"]},{n:"Ruta 27",p:["@oeste",[9.915,-84.24],"orotina","caldera"]},{n:"Ruta 23",p:["caldera",[9.955,-84.715],[9.985,-84.735],[9.978,-84.775],[9.977,-84.805],"puntarenas"]},{n:"Ruta 34 \xB7 Costanera Sur",p:["orotina",[9.76,-84.61],"jaco",[9.52,-84.32],"quepos","dominical",[9.16,-83.74],"palmar"]},{n:"Ruta 2 \xB7 Interamericana Sur",p:["@este","cartago",[9.74,-83.94],"cerromuerte","sanisidro","buenosaires",[9.02,-83.3],"palmar",[8.7,-83.1],"neily","canoas"]},{n:"Ruta 32",p:["@este",[10.03,-84.06],[10.09,-84],[10.16,-83.93],"guapiles","siquirres",[10.07,-83.29],"limon"]},{n:"Ruta 36",p:["limon",[9.92,-83.045],[9.84,-82.975],[9.78,-82.93],"cahuita",[9.63,-82.85],"sixaola"]},{n:"Ruta 21",p:["liberia",[10.447,-85.56],"santacruz","nicoya"]},{n:"Ruta 18",p:[[10.262,-84.965],"amistad",[10.2,-85.35],"nicoya"]},{n:"Ruta 142",p:["sanramon",[10.25,-84.52],"fortuna",[10.5,-84.7],[10.505,-84.8],"tilaran","canas"]}],wf=[{k:"arenal",R:90,alto:52,cima:1633}],du=(a,e,t)=>[(t-a.lon0)*a.kx,-(e-a.lat0)*a.kz];var pc=[[-80,20,60,90],[-1,58,122,158],[0,214,200,150],[40,120,168,92],[600,70,130,70],[1500,52,100,70],[2500,128,118,84],[3300,170,160,140],[3900,225,222,215]];function Cf(a,e,t){let{w:n,h:i,paso:r,x0:s,z0:o}=e,c=document.createElement("canvas");c.width=n,c.height=i;let l=c.getContext("2d"),d=l.createImageData(n,i),u=d.data;for(let v=0;v<i;v++)for(let m=0;m<n;m++){let p=v*n+m,b=a[p],M=pc.length-2;for(;M>0&&b<pc[M][0];)M--;let _=pc[M],A=pc[M+1],E=Math.max(0,Math.min(1,(b-_[0])/(A[0]-_[0]))),T=b>0?Math.max(.55,Math.min(1.3,1+((a[p-1]??b)-(a[p+1]??b)+(a[p-n]??b)-(a[p+n]??b))/520)):1;for(let x=0;x<3;x++)u[p*4+x]=Math.min(255,(_[x+1]+(A[x+1]-_[x+1])*E)*T);u[p*4+3]=255}l.putImageData(d,0,0);let h=v=>(v-s)/r,f=v=>(v-o)/r;l.lineJoin=l.lineCap="round";for(let[v,m]of[[3.2,"rgba(40,30,20,.75)"],[1.6,"#F6E7A8"]]){l.lineWidth=v,l.strokeStyle=m;for(let p of t.rutas){l.beginPath();for(let b=0;b<p.X.length;b+=3)l.lineTo(h(p.X[b]),f(p.Z[b]));l.lineTo(h(p.X.at(-1)),f(p.Z.at(-1))),l.stroke()}}l.font="600 11px system-ui, Arial, sans-serif",l.textBaseline="middle",l.lineWidth=3;for(let v of Object.values(Rs)){let m=h((v.lon-e.lon0)*e.kx),p=f(-(v.lat-e.lat0)*e.kz),b=v.n.split(" \xB7 ")[0];l.fillStyle=v.r?"#fff":"#FFD627",l.strokeStyle="rgba(0,20,40,.85)",l.beginPath(),l.arc(m,p,v.r?3:2.4,0,7),l.fill(),l.stroke();let M=m>n-110;l.textAlign=M?"right":"left",l.strokeText(b,m+(M?-6:6),p),l.fillText(b,m+(M?-6:6),p)}function g(v,m){v.width=n,v.height=i;let p=v.getContext("2d");p.drawImage(c,0,0);for(let b of[...m].reverse())p.save(),p.translate(h(b.x),f(b.z)),p.fillStyle=b.color,p.strokeStyle="#00182F",p.lineWidth=2,b.rumbo!==void 0?(p.rotate(-b.rumbo+Math.PI),p.beginPath(),p.moveTo(0,-9),p.lineTo(6,7),p.lineTo(0,3.5),p.lineTo(-6,7),p.closePath()):(p.beginPath(),p.arc(0,0,4.5,0,7)),p.stroke(),p.fill(),p.restore()}return{dibujar:g}}var A_=800,T_=1200,Rf=[15260085,13230274,15910821,12178408,15852960,15120568,14207208,16052714,11130575],en={zinc:9325370,zincGris:9278361,blanco:16052714,piedra:12104358,pasto:7316826,cancha:5151301,linea:16053492,madera:8018492,metal:10133670,rojo:12597547,azul:2051727,amarillo:15320363};var w_=new Be,Pf=(a,e)=>w_.set(a).multiplyScalar(e).getHex();function C_(a,e,t,n,i,r,s,o,c,l,d,u){let h=Math.cos(s),f=Math.sin(s),g=(_,A)=>[e+_*h+A*f,n-_*f+A*h],v=o*3-.2+.3,m=r/2;a.caja(e,t,n,i+.1,.85,r+.1,Pf(c,.72),s),a.caja(e,t+v-.16,n,i+.16,.18,r+.16,en.blanco,s),a.caja(e,t+v,n,i+.7,.1,r+.7,Pf(l,.8),s,{techo:l});let p=(u()-.5)*i*.3,[b,M]=g(p,m+.03);if(a.caja(b,t+.3,M,1,2.15,.08,d?3104650:en.madera,s),d){let[_,A]=g(0,m+.6);a.caja(_,t+2.75,A,i*.85,.08,1.2,en.rojo,s)}for(let _=0;_<o;_++)for(let A of[-i*.3,i*.3]){if(_===0&&Math.abs(A-p)<1.4)continue;let[E,T]=g(A,m+.03),[x,S]=g(A,m+.07),w=t+.3+1.05+_*3;a.caja(E,w,T,1.45,1.3,.06,en.blanco,s),a.caja(x,w+.1,S,1.2,1.1,.05,2109503,s)}}function If(a,e,t){let n=new ot,i={dist:0},r=new it({vertexColors:!0,roughness:.85}),s=a.filter(h=>h.r>0||hu[h.k]).map(h=>({...h,malla:null,cajas:[]}));function o(h,f,g,v,m,p,b=4){if(h.r&&Math.hypot(f-h.x,g-h.z)>h.r-8)return null;let M=Math.cos(p),_=Math.sin(p),A=[];for(let[T,x]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,0]]){let S=f+T*v/2*M+x*m/2*_,w=g-T*v/2*_+x*m/2*M;if(t.cerca(S,w,i).dist<t.MEDIO+b)return null;A.push(e.altura(S,w))}let E=Math.min(...A);return Math.max(...A)-E>1?null:E-.3}function c(h){let f=cn(),g=Ra([...h.k].reduce((E,T)=>E*31+T.charCodeAt(0)|0,7)),v=[],m=t.cerca(h.x,h.z,i).dist<h.r?Math.atan2(i.tx,i.tz):g()*Math.PI,p=(E,T,x,S,w,D,F,P=F,I)=>{let N=o(h,E,T,x,S,w,I);return N===null?!1:(f.caja(E,N,T,x,D+.3,S,F,w,{techo:P}),v.push({x:E,z:T,c:Math.cos(w),s:Math.sin(w),hx:x/2,hz:S/2}),N)},b=(E,T,x,S,w,D,F)=>{let P=Math.cos(w),I=Math.sin(w),N=(B,q)=>[E+B*P+q*I,F,T-B*I+q*P];f.quad(N(-x/2,-S/2),N(-x/2,S/2),N(x/2,S/2),N(x/2,-S/2),D)},M=(E,T)=>[h.x+E*Math.cos(m)+T*Math.sin(m),h.z-E*Math.sin(m)+T*Math.cos(m)];if(h.r){let E=t.cerca(...M(18,0),i).dist>t.cerca(...M(-18,0),i).dist?1:-1,[T,x]=M(E*20,0),S=o(h,T,x,22,22,m,2)??e.altura(T,x);b(T,x,22,22,m,en.pasto,S+.32);for(let[ge,_e]of[[-7,-7],[7,-7],[-7,7],[7,7]]){let[He,Fe]=M(E*20+ge,_e);f.caja(He,S,Fe,.5,3.4,.5,5916210),f.caja(He,S+3.2,Fe,2.6,2,2.6,4094522)}let[w,D]=M(E*20,0);p(w,D,4.2,4.2,m+Math.PI/4,2.6,en.blanco,en.rojo,0);let F=h.k==="cartago",[P,I]=M(E*37,0),N=F?16:10,B=F?30:18,q=p(P,I,B,N,m+Math.PI/2,F?13:8,F?16052714:en.blanco,F?7109257:en.zincGris,2);if(q!==!1)for(let ge of F?[-5,5]:[0]){let[_e,He]=M(E*(37-B/2+2),ge);f.caja(_e,q,He,3.4,F?26:15,3.4,en.blanco,m,{techo:F?7109257:en.rojo}),f.caja(_e,q+(F?26:15),He,1.6,3,1.6,F?7109257:en.rojo,m)}let[k,V]=M(E*20,34),H=o(h,k,V,26,40,m,2);if(H!==null){b(k,V,26,40,m,en.cancha,H+.32);for(let He of[-1,1]){let[Fe,Z]=M(E*20,34+He*19);f.caja(Fe,H+.3,Z,7.3,2.4,.12,en.linea,m)}let[ge,_e]=M(E*20,34);b(ge,_e,26,.25,m,en.linea,H+.34)}let te=0;for(let ge=-h.r;ge<=h.r;ge+=11)for(let _e=-h.r;_e<=h.r;_e+=13){if(Math.abs(_e-E*28)<22&&Math.abs(ge-12)<34||g()<.28)continue;let[He,Fe]=M(_e+(g()-.5)*3,ge+(g()-.5)*3),Z=6+g()*4,G=7+g()*5,X=g()<.18?2:1,he=g()<.12,Me=he?15852960:Rf[Math.floor(g()*Rf.length)],fe=m+(g()<.5?0:Math.PI/2),ye=g()<.7?en.zinc:en.zincGris,De=p(He,Fe,Z,G,fe,X*3-.2,Me,ye);if(De!==!1&&(te++,C_(f,He,De,Fe,Z,G,fe,X,Me,ye,he,g)),te>60)break}}hu[h.k]?.({s:h,a:f,cajas:v,sobre:p,carreteras:t,terreno:e,q:i});let _=f.geometria();_.computeBoundingSphere();let A=new Ne(_,r);A.castShadow=A.receiveShadow=!0,A.matrixAutoUpdate=!1,A.userData.centro=[h.x,h.z],h.malla=A,h.cajas=v,n.add(A)}function l(h){n.remove(h.malla),h.malla.geometry.dispose(),h.malla=null,h.cajas=[]}function d(h,f){for(let g of s){let v=Math.hypot(h-g.x,f-g.z);!g.malla&&v<A_?c(g):g.malla&&v>T_&&l(g)}}function u(h,f){for(let g of s)if(!(!g.malla||Math.abs(h.x-g.x)>g.r+90||Math.abs(h.z-g.z)>g.r+90))for(let v of g.cajas){let m=h.x-v.x,p=h.z-v.z,b=m*v.c-p*v.s,M=m*v.s+p*v.c,_=v.hx+f,A=v.hz+f;Math.abs(b)>=_||Math.abs(M)>=A||(_-Math.abs(b)<A-Math.abs(M)?b=Math.sign(b||1)*_:M=Math.sign(M||1)*A,h.x=v.x+b*v.c+M*v.s,h.z=v.z-b*v.s+M*v.c)}return h}return{grupo:n,sitios:s,actualizar:d,empujar:u}}function Df(a,e,t){let n=null,i=1/0;for(let l of a.rutas)for(let d=0;d<l.X.length;d++){let u=Math.hypot(l.X[d]-e,l.Z[d]-t);u<i&&(i=u,n={r:l,i:d})}let{r,i:s}=n,o=Math.min(r.X.length-1,s+1),c=Math.max(0,o-1);return{x:r.X[s],z:r.Z[s],y:r.Y[s],rumbo:Math.atan2(r.X[o]-r.X[c],r.Z[o]-r.Z[c]),nx:r.NX[s],nz:r.NZ[s]}}var uu=({s:a,a:e,cajas:t,carreteras:n})=>{let i=Df(n,a.x,a.z),r=n.MEDIO+6,s=i.x+i.nx*r,o=i.z+i.nz*r;e.caja(s,i.y,o,6,3.6,16,15131350,i.rumbo,{techo:3104399}),t.push({x:s,z:o,c:Math.cos(i.rumbo),s:Math.sin(i.rumbo),hx:3,hz:8});let c=i.x+i.nx*(n.MEDIO+1),l=i.z+i.nz*(n.MEDIO+1);e.caja(c,i.y,l,.3,1.2,.3,15320363,i.rumbo);for(let d=0;d<6;d++){let u=(d+.5)/6*2*n.MEDIO;e.caja(c-i.nx*u,i.y+1.05,l-i.nz*u,.12,.12,1.1,d%2?12597547:16053492,i.rumbo+Math.PI/2)}for(let[d,u]of[[0,2051727],[1,16053492],[2,12597547]]){let h=s+i.nx*4+Math.sin(i.rumbo)*(d*2.4-2.4),f=o+i.nz*4+Math.cos(i.rumbo)*(d*2.4-2.4);e.caja(h,i.y,f,.1,7,.1,10133670),e.caja(h,i.y+6,f+.5,.05,1,1.4,u,i.rumbo)}},hu={penasblancas:uu,canoas:uu,sixaola:uu};hu.amistad=({s:a,a:e,carreteras:t})=>{let n=Df(t,a.x,a.z),i=Math.sin(n.rumbo),r=Math.cos(n.rumbo),s=t.MEDIO+.6;for(let c of[-1,1])for(let l=-40;l<40;l+=4)e.caja(n.x+i*l+n.nx*c*s,n.y+.1,n.z+r*l+n.nz*c*s,.25,1.1,4,14277081,n.rumbo);e.caja(n.x+n.nx*(s+1.2),n.y-6,n.z+n.nz*(s+1.2),1.4,30,1.4,15263976,n.rumbo);let o=[n.x+n.nx*(s+1.2),n.y+23,n.z+n.nz*(s+1.2)];for(let c=-36;c<=36;c+=6)if(c){let l=[n.x+i*c+n.nx*s,n.y+1,n.z+r*c+n.nz*s],d=u=>[u[0],u[1]+.14,u[2]];e.quad(o,l,d(l),d(o),16053492),e.quad(d(o),d(l),l,o,16053492)}};function Lf(a){let e=[...new Set(a.rutas.map(l=>l.n.match(/Ruta (\d+)/)[1]))],t=document.createElement("canvas");t.width=512,t.height=64;let n=t.getContext("2d"),i=512/e.length;n.font="bold 40px system-ui, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",e.forEach((l,d)=>{n.fillStyle="#1C6B3A",n.fillRect(d*i,0,i,64),n.fillStyle="#fff",n.fillText(l,d*i+i/2,34),n.strokeStyle="#fff",n.lineWidth=3,n.strokeRect(d*i+3,3,i-6,58)});let r=cn(),s=cn();for(let l of a.rutas){let d=e.indexOf(l.n.match(/Ruta (\d+)/)[1]),u=d/e.length,h=(d+1)/e.length;for(let f=25;f<l.X.length-5;f+=50){let g=a.MEDIO+1.8,v=l.X[f]-l.NX[f]*g,m=l.Z[f]-l.NZ[f]*g,p=l.Y[f];r.caja(v,p-.2,m,.12,2.6,.12,10133670);let b=l.NZ[f],M=-l.NX[f],_=(A,E)=>[v+l.NX[f]*A*.6-b*.08,p+E,m+l.NZ[f]*A*.6-M*.08];s.quad(_(-1,1.9),_(1,1.9),_(1,2.7),_(-1,2.7),16777215,[u,0,h,0,h,1,u,1]),s.quad(_(1,1.9),_(-1,1.9),_(-1,2.7),_(1,2.7),16777215,[u,0,h,0,h,1,u,1])}}let o=new ot,c=new On(t);return c.colorSpace=Ut,o.add(new Ne(r.geometria(),new it({vertexColors:!0,roughness:.6})),new Ne(s.geometria(),new wn({map:c}))),o.traverse(l=>{l.matrixAutoUpdate=!1,l.updateMatrix(),l.geometry?.computeBoundingSphere()}),o}function fc(a,e,t,n,{a:i=1.8,b:r=3.2,s0:s=2.2,T:o=1.3}={}){let c=1-Math.pow(Math.max(0,a)/Math.max(.1,e),4);if(!isFinite(t))return i*c;let l=s+Math.max(0,a*o+a*n/(2*Math.sqrt(i*r)));return i*(c-Math.pow(l/Math.max(.1,t),2))}var nt=null,ba=null,Ia=null,mr=null,bc=null,Da=null,Is=null,pu=null,mc=null,gr=null,Ds=null,fr=null,Ps=null,Ls=null,Ns=null,Ff=0,Uf={},Of=!1,xc=1,gc=new Set,Bf=.55,R_=-8,P_=a=>10**(a/20);function I_(){try{nt?.resume?.()?.catch?.(()=>{})}catch{}}function zf(){if(nt){I_();return}try{nt=new(window.AudioContext||window.webkitAudioContext),Ia=nt.createDynamicsCompressor(),Ia.threshold.value=-6,Ia.knee.value=8,Ia.ratio.value=6,Ia.attack.value=.003,Ia.release.value=.25,Ia.connect(nt.destination),ba=nt.createGain(),ba.gain.value=Of?0:Bf*xc,ba.connect(Ia),mr=nt.createGain(),mr.connect(ba),bc=nt.createGain(),bc.connect(ba),Da=nt.createGain(),Da.connect(ba),Is=nt.createGain(),Is.gain.value=0;let a=nt.createConvolver(),e=Math.floor(nt.sampleRate*.6),t=nt.createBuffer(1,e,nt.sampleRate),n=t.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.exp(-i/(nt.sampleRate*.12));a.buffer=t,pu=nt.createGain(),pu.gain.value=1,mr.connect(Is).connect(a).connect(pu).connect(ba),U_(),Vf(mu(Uf))}catch{nt=null}}function Gf(a){return xc=Math.max(0,Math.min(1,a)),ba&&!Of&&(ba.gain.value=Bf*xc),xc}function D_(a,e="general"){return a?gc.add(e):gc.delete(e),Da&&Da.gain.setTargetAtTime(gc.size?P_(R_):1,nt.currentTime,.15),gc.size>0}function Ot(a,e,{tipo:t="sine",vol:n=.3,ataque:i=.005,caida:r=null,glide:s=null,retardo:o=0,ui:c=!1}={}){if(!nt)return;let l=nt.currentTime+o,d=nt.createOscillator(),u=nt.createGain();d.type=t,d.frequency.setValueAtTime(a,l),s&&d.frequency.exponentialRampToValueAtTime(s,l+e),u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(n,l+i),u.gain.exponentialRampToValueAtTime(1e-4,l+(r??e)),d.connect(u).connect(c?bc:mr),d.start(l),d.stop(l+e+.05)}var fu=new Map;function Hf(a){if(!fu.has(a)){let e=nt.createBuffer(1,2*a,nt.sampleRate),t=e.getChannelData(0);for(let n=0;n<2*a;n++)t[n]=Math.random()*2-1;fu.set(a,e)}return fu.get(a)}function ea(a,{vol:e=.3,filtro:t="lowpass",f:n=1200,q:i=1,retardo:r=0,ataque:s=.005}={}){if(!nt)return;let o=nt.currentTime+r,c=Math.floor(nt.sampleRate*a),l=nt.createBufferSource();l.buffer=Hf(c);let d=nt.createBiquadFilter();d.type=t,d.frequency.value=n,d.Q.value=i;let u=nt.createGain();u.gain.setValueAtTime(0,o),u.gain.linearRampToValueAtTime(e,o+s),u.gain.exponentialRampToValueAtTime(1e-4,o+a),l.connect(d).connect(u).connect(mr),l.start(o,Math.random()*c/nt.sampleRate),l.stop(o+a+.05)}var bt={clic:()=>Ot(880,.06,{tipo:"triangle",vol:.12,ui:!0}),hover:()=>Ot(1320,.03,{tipo:"sine",vol:.04,ui:!0}),ok:()=>{Ot(660,.12,{vol:.2,ui:!0}),Ot(990,.18,{vol:.2,retardo:.09,ui:!0})},logro:()=>[523,659,784,1047].forEach((a,e)=>Ot(a,.25,{tipo:"triangle",vol:.18,retardo:e*.09,ui:!0})),error:()=>{Ot(220,.22,{tipo:"sawtooth",vol:.14,glide:140})},alerta:()=>{Ot(1046,.09,{tipo:"square",vol:.07}),Ot(1046,.09,{tipo:"square",vol:.07,retardo:.16})},stop:()=>{Ot(392,.12,{tipo:"square",vol:.12}),Ot(294,.25,{tipo:"square",vol:.12,retardo:.12})},cono:()=>{ea(.12,{vol:.25,f:500}),Ot(160,.12,{vol:.2,glide:90})},metal:()=>{Ot(1800+Math.random()*300,.25,{tipo:"triangle",vol:.06}),Ot(2600,.15,{vol:.03})},paso:()=>ea(.08,{vol:.12,f:700+Math.random()*300}),cuerda:()=>ea(.35,{vol:.12,filtro:"bandpass",f:2200,q:2,ataque:.1}),chasquido:()=>{ea(.09,{vol:.6,filtro:"highpass",f:2500}),Ot(3200,.05,{tipo:"square",vol:.15})},golpe:()=>{ea(.4,{vol:.6,f:260}),Ot(70,.4,{vol:.5,glide:40})},tir\u00F3n:()=>{Ot(140,.3,{tipo:"sawtooth",vol:.2,glide:90}),ea(.25,{vol:.25,f:900})},trueno:()=>{ea(2.6,{vol:.7,f:160,ataque:.05}),ea(1.2,{vol:.4,f:600,retardo:.05})},tension:()=>Ot(180,.5,{tipo:"sawtooth",vol:.07,glide:420}),bocina:()=>{Ot(392,.35,{tipo:"square",vol:.12}),Ot(494,.35,{tipo:"square",vol:.1})},clip:()=>{Ot(1500,.05,{tipo:"square",vol:.08}),ea(.05,{vol:.15,filtro:"highpass",f:3e3,retardo:.02})},presion:()=>ea(.18,{vol:.1,filtro:"bandpass",f:1400,q:1.2}),insignia:()=>{[784,988,1319].forEach((a,e)=>Ot(a,.22,{tipo:"sine",vol:.16,retardo:e*.07,ui:!0}))},motosierra:()=>{ea(.9,{vol:.16,f:240}),Ot(96,.9,{tipo:"sawtooth",vol:.07,glide:120})}},Nf={calle:{transito:1,viento:1,lluvia:1,reverb:0,zumbido:1},ducto:{transito:0,viento:0,lluvia:0,reverb:.3,zumbido:0},neutro:{transito:0,viento:1,lluvia:1,reverb:0,zumbido:0}},L_={aereo:"calle",techo:"calle",media:"calle",poste:"calle",poda:"calle",ducto:"ducto"},N_={aereo:.6,techo:.5,media:.5,poste:.5,poda:.3};function F_(a){let e=/^(\d{1,2})/.exec(a??"");if(!e)return .6;let t=+e[1];return t>=7&&t<9||t>=16&&t<19?1:t>=9&&t<16?.7:t>=19&&t<22?.4:.15}function mu(a={}){let e=a.tipo??"aereo",t=Nf[a.ambiente]?a.ambiente:L_[e]??"neutro",n=Nf[t],i=/avenida/i.test(a.lugar??"")?1.3:1,r=(N_[e]??.5)*F_(a.hora)*i,s=Number.isFinite(a.viento)?a.viento:0,o=Math.max(0,Math.min(1,(s-8)/34));return{perfil:t,transito:Math.min(1,r)*n.transito*.09,viento:o*n.viento*.2,lluvia:n.lluvia,reverb:n.reverb*.6,zumbido:n.zumbido*.012}}var kf=null;function U_(){if(mc||!nt)return;let a=3,e=Math.floor(nt.sampleRate*a),t=Hf(e),n=()=>{let u=nt.createBufferSource();return u.buffer=t,u.loop=!0,u.start(0,Math.random()*a),u};mc=n();let i=nt.createBiquadFilter();i.type="bandpass",i.frequency.value=3e3,i.Q.value=.4,gr=nt.createGain(),gr.gain.value=0,mc.connect(i).connect(gr).connect(Da);let r=n(),s=nt.createBiquadFilter();s.type="lowpass",s.frequency.value=400,Ds=nt.createGain(),Ds.gain.value=0,r.connect(s).connect(Ds).connect(Da);let o=n(),c=nt.createBiquadFilter();c.type="bandpass",c.frequency.value=500,c.Q.value=.6,fr=nt.createGain(),fr.gain.value=0,Ps=nt.createOscillator(),Ps.frequency.value=.2,Ls=nt.createGain(),Ls.gain.value=0,Ps.connect(Ls).connect(fr.gain),o.connect(c).connect(fr).connect(Da),Ps.start();let l=nt.createOscillator();l.type="triangle",l.frequency.value=55;let d=nt.createBiquadFilter();d.type="lowpass",d.frequency.value=160,Ns=nt.createGain(),Ns.gain.value=0,l.connect(d).connect(Ns).connect(Da),l.start(),kf={lfo:Ps,fuentes:[mc,r,o,l]}}function Vf(a){if(!nt||!gr)return;let e=nt.currentTime;gr.gain.setTargetAtTime(Ff*.35*a.lluvia,e,.6),Ds.gain.setTargetAtTime(a.viento,e,.8),fr.gain.setTargetAtTime(a.transito,e,1.2),Ls.gain.setTargetAtTime(a.transito*.5,e,1.2),Ns.gain.setTargetAtTime(a.zumbido,e,1.2),Is.gain.setTargetAtTime(a.reverb,e,.3)}function jf(a){Ff=Math.max(0,Math.min(1,a)),nt&&Vf(mu(Uf))}function O_(){return nt?{ctx:nt,compresor:Ia,maestro:ba,efectos:mr,interfaz:bc,ambiente:Da,sala:Is,ambiente_:{lluvia:gr,viento:Ds,transito:fr,zumbido:Ns,lfo:Ls,lfoFuente:kf?.lfo}}:null}typeof window<"u"&&(window.__audio={grafo:O_,ducking:D_,nivelesAmbiente:mu});var gu=26,qf=420,B_=1.8,$f=40,xu=1400,vc=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534,14254635];function Wf({escena:a,carreteras:e,terreno:t,meta:n}){let i=Ra(99),r=new ot;a.add(r);let s=e.rutas,o=Array.from({length:gu},(N,B)=>({ruta:0,s:0,sentido:1,v:0,v0:0,x:0,z:0,y:0,rumbo:0,camion:B%6===0,vivo:!1})),c=new Lt(new Ce(1,1,1).translate(0,.5,0),new it({roughness:.5,metalness:.25}),gu*2),l=new Lt(new Ce(1,1,1).translate(0,.5,0),new it({color:1382170,roughness:.9}),gu);for(let N of[c,l])N.frustumCulled=!1,N.count=0,r.add(N);let d=new Be,u=new xt;o.forEach((N,B)=>{c.setColorAt(B*2,d.set(N.camion?15131350:vc[B%vc.length])),c.setColorAt(B*2+1,d.set(N.camion?3104399:1778992))});function h(N){let B=s[N.ruta],q=B.X.length-1,k=Math.max(0,Math.min(q-1e-6,N.s)),V=Math.floor(k),H=k-V,te=-B_*N.sentido;N.x=B.X[V]+(B.X[V+1]-B.X[V])*H+B.NX[V]*te,N.z=B.Z[V]+(B.Z[V+1]-B.Z[V])*H+B.NZ[V]*te,N.y=B.Y[V]+(B.Y[V+1]-B.Y[V])*H+.12,N.rumbo=Math.atan2(B.X[V+1]-B.X[V],B.Z[V+1]-B.Z[V])+(N.sentido<0?Math.PI:0)}function f(N,B,q){for(let k=0;k<30;k++){let V=Math.floor(i()*s.length),H=s[V],te=Math.floor(i()*(H.X.length-2)),ge=Math.hypot(H.X[te]-B,H.Z[te]-q);if(!(ge<100||ge>qf)){Object.assign(N,{ruta:V,s:te+i(),sentido:i()<.5?1:-1,vivo:!0,v0:(N.camion?13:17)+i()*5}),N.v=N.v0*.8,h(N);return}}N.vivo=!1}function g(N,B,q,k){let V=0;for(let H of o){if((!H.vivo||Math.hypot(H.x-B,H.z-q)>qf+60)&&f(H,B,q),!H.vivo)continue;let te=1/0,ge=0,_e=Math.sin(H.rumbo),He=Math.cos(H.rumbo);for(let X of o){if(X===H||!X.vivo||X.ruta!==H.ruta||X.sentido!==H.sentido)continue;let he=(X.s-H.s)*H.sentido*8-5;he>-4&&he<te&&(te=Math.max(.1,he),ge=H.v-X.v)}for(let X of k){let he=X.x-H.x,Me=X.z-H.z,fe=he*_e+Me*He,ye=Math.abs(he*He-Me*_e);fe>0&&ye<1.8&&fe-3<te&&(te=Math.max(.1,fe-3),ge=H.v)}if(H.v=Math.max(0,H.v+fc(H.v,H.v0,te,ge)*N),H.s+=H.sentido*H.v*N/8,H.s<=0||H.s>=s[H.ruta].X.length-1){H.vivo=!1;continue}h(H);let Fe=H.camion?7:4.3,Z=H.camion?2.3:1.8,G=H.camion?2.6:1.25;u.position.set(H.x,H.y+.3,H.z),u.rotation.set(0,H.rumbo,0),u.scale.set(Z,G,Fe),u.updateMatrix(),c.setMatrixAt(V*2,u.matrix),u.position.set(H.x+_e*(H.camion?Fe*.38:0),H.y+.3+(H.camion?0:G*.9),H.z+He*(H.camion?Fe*.38:0)),u.scale.set(Z*.92,H.camion?G*1.05:.55,H.camion?1.8:Fe*.5),u.updateMatrix(),c.setMatrixAt(V*2+1,u.matrix),u.position.set(H.x,H.y,H.z),u.scale.set(Z+.1,.55,Fe*.8),u.updateMatrix(),l.setMatrixAt(V,u.matrix),V!==o.indexOf(H)&&(c.setColorAt(V*2,d.set(H.camion?15131350:vc[o.indexOf(H)%vc.length])),c.setColorAt(V*2+1,d.set(H.camion?3104399:1778992))),V++}c.count=V*2,l.count=V,c.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0)}let v=Array.from({length:$f},()=>({x:1e9,z:0,y:0,rumbo:0,meta:0,t:0})),m=cn(),p=15921128,b=2762276,M=(N,B,q,k,V,H,te)=>m.caja(N,B-V/2,q,k,V,H,te);M(0,1,0,.75,.8,1.7,p),M(0,1.05,.25,.77,.55,.7,b),M(0,1.25,1.05,.42,.45,.5,p),M(0,1.12,1.32,.3,.2,.18,14263194);for(let[N,B]of[[.25,.6],[-.25,.6],[.25,-.6],[-.25,-.6]])M(N,.31,B,.14,.62,.14,p);let _=new Lt(m.geometria(),new it({vertexColors:!0,roughness:.9}),$f);_.frustumCulled=!1,r.add(_);let A={dist:0},E=[16777215,13214334,15260872,9202256],T=(N,B)=>{let q=t.altura(N,B),k=t.muestra;return k.e>15&&k.e<1800&&k.llano<.1&&k.pend*t.EX<.5&&e.cerca(N,B,A).dist>14?q:null};function x(N,B,q){v.forEach((k,V)=>{if(Math.hypot(k.x-B,k.z-q)>260){let te=Math.floor(V/4),ge=te*2.4+i()*.5,_e=70+te%5*35,He=B+Math.cos(ge)*_e+i()*10,Fe=q+Math.sin(ge)*_e+i()*10,Z=T(He,Fe);if(Z===null){k.x=1e9;return}Object.assign(k,{x:He,z:Fe,y:Z,rumbo:i()*6.3,meta:i()*6.3,t:i()*8}),_.setColorAt(V,d.set(E[V%4]))}k.t-=N,k.t<0&&(k.t=4+i()*8,k.meta=k.rumbo+(i()-.5)*2);let H=k.t>5;if(k.rumbo+=(k.meta-k.rumbo)*Math.min(1,N),H){let te=k.x+Math.sin(k.rumbo)*.4*N,ge=k.z+Math.cos(k.rumbo)*.4*N,_e=T(te,ge);_e!==null?(k.x=te,k.z=ge,k.y=_e):(k.rumbo+=Math.PI,k.meta=k.rumbo,k.t=4)}u.position.set(k.x,k.y,k.z),u.rotation.set(0,k.rumbo,0),u.scale.set(1,1,1),u.updateMatrix(),_.setMatrixAt(V,u.matrix)}),_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0)}let S=new Float32Array(xu*6),w=new mt;w.setAttribute("position",new gt(S,3));let D=new Jn(w,new Un({color:12571622,transparent:!0,opacity:.55}));D.frustumCulled=!1,r.add(D);for(let N=0;N<xu;N++)S[N*6]=(i()-.5)*60,S[N*6+1]=i()*30,S[N*6+2]=(i()-.5)*60;let F={lluvia:0,meta:0,niebla:0,region:"",reloj:0};function P(N,B){let q=n.lon0+N/n.kx,k=n.lat0-B/n.kz;t.relieve(N,B);let V=t.muestra.e,H=q>-84&&k>9.4,te=k<9.3,ge=q<-84.9&&k>9.85;return{humedad:ge?.1:H?.75:te?.6:.35,neblina:V>1400?Math.min(1,(V-1400)/1200):0,nombre:ge?"seco":H?"Caribe":te?"zona sur":"Valle Central"}}function I(N,B,q){F.reloj-=N;let k=P(B.position.x,B.position.z);F.region=k.nombre,F.reloj<0&&(F.reloj=40+i()*60,F.meta=i()<k.humedad?.4+i()*.6:0),q!==null&&(F.meta=q),F.lluvia+=(F.meta-F.lluvia)*Math.min(1,N*.3),F.niebla+=(k.neblina-F.niebla)*Math.min(1,N*.5);let V=Math.round(xu*F.lluvia);for(let H=0;H<V;H++){let te=S[H*6+1]-22*N;te<-4&&(te=26,S[H*6]=(i()-.5)*60,S[H*6+2]=(i()-.5)*60),S[H*6+1]=te,S[H*6+3]=S[H*6]+.05,S[H*6+4]=te-.7,S[H*6+5]=S[H*6+2]}return w.setDrawRange(0,V*2),w.attributes.position.needsUpdate=!0,D.position.set(B.position.x,B.position.y-8,B.position.z),jf(F.lluvia),F}return{grupo:r,autos:o,vacas:v,clima:F,cada(N,B,q,k,V,H=null){return g(N,q,k,V),x(N,q,k),I(N,B,H)}}}var Xf=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534],Fs=4.2;function Yf(a,e,t){let n=Ra(7),i=-40,r=a.largo+80,s=[];for(let E=0;E<t;E++)s.push({d:i+r*E/t+n()*4,a:oc,v:5,v0:5.5+n()*2.5,x:0,z:0,rumbo:0});let o=e.estacionamiento,c=[];for(let E=0;E<o.n;E++){let T=o.d0+(E+.5)*o.paso;n()<.55&&Math.abs(T-e.dPick)>6.2&&Math.abs(T-e.trabajo.d)>7&&c.push({d:T,a:o.a,v:0,x:0,z:0,rumbo:0})}for(let E of c)e.cajas.push({d0:E.d-Fs/2,d1:E.d+Fs/2,a0:E.a-.9,a1:E.a+.9});let l=[...s,...c],d=l.length,u=new it({roughness:.45,metalness:.3}),h=new Lt(new Ce(1.75,.62,Fs).translate(0,.62,0),u,d),f=new Lt(new Ce(1.6,.52,2.1).translate(0,1.18,-.25),new it({color:1778992,roughness:.2,metalness:.5}),d),g=new At(.33,.33,.24,10).rotateZ(Math.PI/2),v=new Lt(g,new it({color:1316119,roughness:.9}),d*4),m=new Be;l.forEach((E,T)=>h.setColorAt(T,m.set(Xf[Math.floor(n()*Xf.length)])));let p=new ot;p.add(h,f,v);for(let E of[h,f,v])E.frustumCulled=!1;let b=new xt,M={};function _(E){let T=l[E];a.en(T.d,T.a,M),T.x=M.x,T.z=M.z,T.rumbo=Math.atan2(M.tx,M.tz),b.position.set(M.x,0,M.z),b.rotation.set(0,T.rumbo,0),b.updateMatrix(),h.setMatrixAt(E,b.matrix),f.setMatrixAt(E,b.matrix);let x=Math.cos(T.rumbo),S=Math.sin(T.rumbo);[[-.82,1.35],[.82,1.35],[-.82,-1.35],[.82,-1.35]].forEach(([w,D],F)=>{b.position.set(M.x+w*x+D*S,.33,M.z-w*S+D*x),b.updateMatrix(),v.setMatrixAt(E*4+F,b.matrix)})}for(let E=0;E<d;E++)_(E);function A(E,T){let x=s.length;for(let S=0;S<x;S++){let w=s[S],D=s[(S+1)%x],F=x>1?(D.d-w.d+r)%r-Fs-.4:1/0,P=x>1?w.v-D.v:0;for(let I of T){if(Math.abs(I.a-w.a)>1.9)continue;let N=(I.d-w.d+r)%r-Fs/2-1.2;N<F&&N<40&&(F=N,P=w.v)}w.v=Math.max(0,w.v+fc(w.v,w.v0,Math.max(.1,F),P)*E),w.d+=w.v*E,w.d>i+r&&(w.d-=r),_(S)}h.instanceMatrix.needsUpdate=f.instanceMatrix.needsUpdate=v.instanceMatrix.needsUpdate=!0}return{grupo:p,todos:l,cada:A}}var bu=new Map,Mn=(a,e={})=>{let t=a+JSON.stringify(e);return bu.has(t)||bu.set(t,new it({color:a,roughness:.7,...e})),bu.get(t)};function _c(a,e,t){let n=new Xi(e,Math.max(.001,a-2*e),4,10);n.translate(0,-a/2,0);let i=new Ne(n,t);return i.castShadow=!0,i}var xr=.3,yc=.29,Jf=new U(0,-1,-.4).normalize(),vu=new U,_u=new U,yi=new U,Zf=new U,Kf=new U,yu=new U,Si=new U,Qf=new U,Us=new U,z_=new _t,Su={x:0,z:0};function em(a){let e=Math.asin(Math.max(-1,Math.min(1,a.x))),t=Math.cos(e);return Su.z=e,Su.x=t>1e-4?Math.atan2(-a.z/t,-a.y/t):0,Su}var G_=.12;function tm({camisa:a=16040475,pantalon:e=2046819,piel:t=13148794,pelo:n=2825492,uniforme:i=!0}={}){let r={camisa:Mn(a),pantalon:Mn(e),piel:Mn(t,{roughness:.6}),pelo:Mn(n,{roughness:.9}),casco:Mn(16766503,{roughness:.35}),arnes:Mn(10211642,{roughness:.6}),metal:Mn(12896978,{roughness:.25,metalness:.8}),plastico:Mn(2830134,{roughness:.5}),bota:Mn(3877408),lentes:Mn(1844272,{roughness:.1,metalness:.4}),guante:Mn(13214042,{roughness:.8}),reflectivo:Mn(14221135,{roughness:.4,emissive:3359744})},s=new ot,o=new ot;o.position.y=.92,s.add(o);let c=new Ne(new fa(.15,14,10),r.pantalon);c.scale.set(1.15,.8,.9),c.castShadow=!0,o.add(c);let l=J=>{let Y=new ot;Y.position.set(J*.095,-.04,0),o.add(Y),Y.add(_c(.45,.072,r.pantalon));let re=new ot;re.position.y=-.45,Y.add(re),re.add(_c(.43,.058,r.pantalon));let me=new ot;me.position.y=-.43,re.add(me);let L=new Ne(new Ce(.11,.085,.27),r.bota);return L.position.set(0,-.03,.06),L.castShadow=!0,me.add(L),{h:Y,rod:re,tob:me}},d=l(1),u=l(-1),h=new ot;h.position.y=.05,o.add(h);let f=new Ne(new Xi(.155,.34,6,14),r.camisa);if(f.position.y=.3,f.scale.set(1.12,1,.78),f.castShadow=!0,h.add(f),i)for(let J of[.2,.38]){let Y=new Ne(new At(.176,.176,.035,20,1,!0),r.reflectivo);Y.position.y=J,Y.scale.set(1.12,1,.8),h.add(Y)}let g=new ot;g.position.y=.58,h.add(g);let v=new Ne(new fa(.105,18,14),r.piel);v.position.y=.13,v.scale.set(.92,1.05,1),v.castShadow=!0,g.add(v);let m=new Ne(new fa(.11,16,10,0,Math.PI*2,0,Math.PI*.55),r.pelo);m.position.y=.145,m.rotation.x=-.25,g.add(m);for(let J of[-1,1]){let Y=new Ne(new fa(.013,8,6),Mn(1118481));Y.position.set(J*.036,.15,.092),g.add(Y)}let p=new Ne(new Ce(.13,.035,.02),r.lentes);p.position.set(0,.15,.1),p.visible=!1,g.add(p);let b=new ot;b.position.y=.19,b.visible=!1,g.add(b);let M=new Ne(new fa(.123,22,12,0,Math.PI*2,0,Math.PI/2),r.casco);M.castShadow=!0;let _=new Ne(new At(.18,.18,.014,30),r.casco);_.position.y=.004,_.castShadow=!0;let A=new Ne(new yn(.105,.006,6,22,Math.PI),r.plastico);A.rotation.set(0,Math.PI/2,Math.PI),A.position.y=-.03,b.add(M,_,A);let E=J=>{let Y=new ot;Y.position.set(J*.2,.5,0),h.add(Y),Y.add(_c(.3,.052,r.camisa));let re=new ot;re.position.y=-.3,Y.add(re),re.add(_c(.27,.045,r.camisa));let me=new Ne(new fa(.05,10,8),r.piel);return me.position.y=-.29,re.add(me),{h:Y,codo:re,mano:me}},T=E(1),x=E(-1),S=new Ne(new yn(.05,.014,6,14),Mn(13938487,{metalness:.9,roughness:.2}));S.rotation.x=Math.PI/2,S.position.y=-.24,S.visible=!1,T.codo.add(S);let w=new ot;w.visible=!1;let D=[];for(let J of[-1,1]){let Y=[[.07,.02,.135],[.085,.3,.14],[.1,.5,.1],[.11,.6,0],[.1,.5,-.1],[.085,.3,-.14],[.07,.02,-.135]].map(([me,L,Re])=>new U(J*me,L,Re)),re=new Ne(new ns(new Yi(Y),30,.016,6),r.arnes);h.add(re),D.push(re)}let F=new Ne(new Ce(.2,.03,.012),r.arnes);F.position.set(0,.36,.142),h.add(F),D.push(F);let P=new Ne(new yn(.172,.017,8,36),r.arnes);P.rotation.x=Math.PI/2,P.scale.set(1.08,.82,1),P.position.y=.02,o.add(P),D.push(P);for(let J of[d,u]){let Y=new Ne(new yn(.08,.013,8,24),r.arnes);Y.rotation.x=Math.PI/2,Y.position.y=-.12,J.h.add(Y),D.push(Y)}let I=()=>new Ne(new yn(.03,.008,8,18),r.metal),N=I();N.position.set(.19,.02,0),N.rotation.y=Math.PI/2,o.add(N);let B=I();B.position.set(-.19,.02,0),B.rotation.y=Math.PI/2,o.add(B);let q=I();q.position.set(0,.48,-.14),h.add(q);let k=I();k.position.set(0,.2,.158),k.scale.setScalar(1.15),h.add(k);let V=new Ne(new Ce(.034,.17,.012),r.arnes);V.position.set(0,.285,.15),h.add(V);let H=new Ne(new yn(.024,.009,8,14,Math.PI*1.3),r.plastico);H.position.set(-.12,-.01,.13),H.rotation.z=Math.PI*.85,o.add(H),D.push(N,B,q,k,V,H);let te=J=>D.forEach(Y=>{Y.visible=J});te(!1);let ge=(J,Y,re,me)=>{let L=new xt;return L.position.set(Y,re,me),J.add(L),L},_e={dIzq:ge(N,0,0,0),dDer:ge(B,0,0,0),porta:ge(H,0,0,0),dorsal:ge(q,0,0,0),frontal:ge(k,0,-.02,0),pecho:ge(h,0,.38,.2),cabeza:ge(g,0,.32,0),manoI:ge(T.mano,0,0,0),manoD:ge(x.mano,0,0,0)};{let J=new Set([p,S,...D,T.mano,x.mano]);b.traverse(Y=>J.add(Y)),s.updateMatrixWorld(!0),s.traverse(Y=>{if(!Y.isGroup)return;let re=new Map;for(let me of Y.children)me.isMesh&&!J.has(me)&&me.visible&&!me.children.length&&(re.has(me.material)||re.set(me.material,[]),re.get(me.material).push(me));for(let[me,L]of re){if(L.length<2)continue;let Re=L.map(R=>{R.updateMatrix();let y=(R.geometry.index?R.geometry.toNonIndexed():R.geometry.clone()).applyMatrix4(R.matrix);for(let O of Object.keys(y.attributes))["position","normal","uv"].includes(O)||y.deleteAttribute(O);return y}),se=new Ne(dr(Re,!1),me);se.castShadow=L.some(R=>R.castShadow),L.forEach(R=>Y.remove(R)),Y.add(se)}})}let He=new Set;function Fe(J,Y=!0){Y?He.add(J):He.delete(J),J==="casco"&&(b.visible=Y),J==="lentes"&&(p.visible=Y),J==="guantes"&&(T.mano.material=x.mano.material=Y?r.guante:r.piel),J==="arnes"&&te(Y),J==="reloj"&&(S.visible=Y)}let Z=cr.nuevo,G=[d.h,d.rod,d.tob,u.h,u.rod,u.tob,T.h,T.codo,x.h,x.codo,h,g,o],X=G.length*3+1,he=new Float64Array(X),Me=new Float64Array(X),fe=new Float64Array(X),ye=null,De=J=>{let Y=0;for(let re of G)J[Y++]=re.rotation.x,J[Y++]=re.rotation.y,J[Y++]=re.rotation.z;J[Y]=o.position.y},ue=J=>{let Y=0;for(let re of G)re.rotation.set(J[Y++],J[Y++],J[Y++]);o.position.y=J[Y]};function Je(J,Y){if(h.updateMatrix(),vu.copy(Y).sub(o.position).applyMatrix4(z_.copy(h.matrix).invert()),_u.copy(J.h.position),yi.subVectors(vu,_u),yi.lengthSq()<1e-8)return;let re=Math.max(xr-yc+.001,Math.min(xr+yc-.001,yi.length()));yi.normalize();let me=Math.acos(Math.max(-1,Math.min(1,(xr*xr+re*re-yc*yc)/(2*xr*re))));Kf.copy(Jf).addScaledVector(yi,-Jf.dot(yi)).normalize(),yu.copy(yi).multiplyScalar(Math.cos(me)).addScaledVector(Kf,Math.sin(me)),Zf.copy(_u).addScaledVector(yu,xr),Si.subVectors(vu,Zf).normalize();let L=em(yu);J.h.rotation.set(L.x,0,L.z);let Re=Math.cos(L.x),se=Math.sin(L.x),R=Math.cos(L.z),y=Math.sin(L.z),O=Si.y*Re+Si.z*se,W=-Si.y*se+Si.z*Re;Qf.set(Si.x*R+O*y,-Si.x*y+O*R,W);let ae=em(Qf);J.codo.rotation.set(ae.x,0,ae.z)}function z(J,Y){if(J==="escalar"){let re=1.45+.06*Y,me=1.45-.06*Y;Je(T,Us.set(.23,re,.1+.268*re-.04)),Je(x,Us.set(-.23,me,.1+.268*me-.04))}else if(J==="sostener"){let re=.3414000000000001;Je(T,Us.set(.23,1.05,re)),Je(x,Us.set(-.23,1.05,re))}else J==="banderero"?Je(x,Us.set(-.22,1.62,.3)):J==="caminar"&&(T.codo.rotation.x=-.25-.2*Math.max(0,Y),x.codo.rotation.x=-.25-.2*Math.max(0,-Y))}function de({tipo:J="idle",fase:Y=0,t:re=0,mirarArriba:me=0,dt:L}={}){let Re=Z&&L!==void 0&&ye!==null&&J!==ye;Re&&De(he);for(let y of[d.h,d.rod,d.tob,u.h,u.rod,u.tob,T.h,T.codo,x.h,x.codo,h,g,o])y.rotation.set(0,0,0);o.position.y=.92;let se=Math.sin(Y),R=Math.cos(Y);if(T.h.rotation.z=-.12,x.h.rotation.z=.12,h.rotation.x=.02*Math.sin(re*2),g.rotation.x=-me,J==="caminar")d.h.rotation.x=se*.55,u.h.rotation.x=-se*.55,d.rod.rotation.x=Math.max(0,-se)*.7,u.rod.rotation.x=Math.max(0,se)*.7,T.h.rotation.x=-se*.45,x.h.rotation.x=se*.45,T.codo.rotation.x=-.3,x.codo.rotation.x=-.3,o.position.y=.92+Math.abs(R)*.025;else if(J==="escalar")T.h.rotation.set(-2.5+se*.3,0,-.18),T.codo.rotation.x=-.45-Math.max(0,se)*.3,x.h.rotation.set(-2.5-se*.3,0,.18),x.codo.rotation.x=-.45-Math.max(0,-se)*.3,d.h.rotation.x=-.55-Math.max(0,se)*.5,d.rod.rotation.x=.7+Math.max(0,se)*.6,d.tob.rotation.x=-.15,u.h.rotation.x=-.2-Math.max(0,-se)*.5,u.rod.rotation.x=.25+Math.max(0,-se)*.6,u.tob.rotation.x=-.05,h.rotation.x=.12,g.rotation.x=-.25-me;else if(J==="trabajar"){let y=Math.sin(re*3)*.1;T.h.rotation.set(-2.25+y,0,-.25),T.codo.rotation.x=-.6+y,x.h.rotation.set(-2-y,0,.3),x.codo.rotation.x=-.8-y,d.h.rotation.x=-.45,d.rod.rotation.x=.6,d.tob.rotation.x=-.15,u.h.rotation.x=-.08,u.rod.rotation.x=.12,h.rotation.x=.14,g.rotation.x=-.35}else J==="sostener"?(T.h.rotation.set(-1.35,0,-.1),x.h.rotation.set(-1.35,0,.1),T.codo.rotation.x=-.3,x.codo.rotation.x=-.3):J==="senalar"?(x.h.rotation.set(-1.5,0,.5),x.codo.rotation.x=-.1,h.rotation.y=.2):J==="cargar"?(T.h.rotation.set(-2.9,0,-.2),x.h.rotation.set(-2.9,0,.2),T.codo.rotation.x=-.2,x.codo.rotation.x=-.2,d.h.rotation.x=se*.45,u.h.rotation.x=-se*.45,d.rod.rotation.x=Math.max(0,-se)*.6,u.rod.rotation.x=Math.max(0,se)*.6):J==="caida"?(T.h.rotation.set(-2.8+se*.4,0,-.6),x.h.rotation.set(-2.6-se*.4,0,.6),d.h.rotation.x=-.4+se*.3,u.h.rotation.x=-.1-se*.3,d.rod.rotation.x=.5,u.rod.rotation.x=.3):J==="colgado"?(T.h.rotation.set(-2.9,0,-.3),x.h.rotation.set(-2.9,0,.3),d.h.rotation.x=-.3,u.h.rotation.x=-.1,d.rod.rotation.x=.4,u.rod.rotation.x=.3,h.rotation.x=-.1):J==="tendido"?(T.h.rotation.set(-.3,0,-1.1),x.h.rotation.set(.2,0,1.3),T.codo.rotation.x=-.5,x.codo.rotation.x=-.2,d.h.rotation.set(.05,0,.12),u.h.rotation.set(-.15,0,-.08),u.rod.rotation.x=.35,g.rotation.y=.5):J==="banderero"?(x.h.rotation.set(-1.55,0,.15),x.codo.rotation.x=-.15,T.h.rotation.set(-.9+Math.sin(re*2.2)*.5,0,-.5),T.codo.rotation.x=-.4):J==="celular"?(x.h.rotation.set(-1.1,0,.25),x.codo.rotation.x=-1.2,g.rotation.x=.45,d.h.rotation.x=se*.45,u.h.rotation.x=-se*.45,d.rod.rotation.x=Math.max(0,-se)*.6,u.rod.rotation.x=Math.max(0,se)*.6):(T.codo.rotation.x=-.08,x.codo.rotation.x=-.08);if(Z){if(z(J,se),De(Me),L===void 0)fe.fill(0);else{if(Re)for(let O=0;O<X;O++)fe[O]=he[O]-Me[O];let y=Math.exp(-L/G_);for(let O=0;O<X;O++){let W=fe[O]*y;Math.abs(W)<1e-4&&(W=0),fe[O]=W,Me[O]+=W}ue(Me)}ye=J}}de();let ie=new Set([s,o,d.h,d.rod,d.tob,u.h,u.rod,u.tob,h,g,T.h,T.codo,x.h,x.codo]);return s.updateMatrixWorld(!0),s.traverse(J=>{ie.has(J)||(J.updateMatrix(),J.matrixAutoUpdate=!1)}),{raiz:s,pose:de,equipar:Fe,equipado:He,refs:_e,M:r,partes:{pelvis:o,torso:h,cuello:g,bi:T,bd:x,pi:d,pd:u}}}var H_=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a)),Mu={c:"cargar",e:"escalar",t:"trabajar",s:"sostener"};function Eu(a){let e=tm(a);return e.raiz.traverse(t=>{t.isMesh&&(t.castShadow=!1)}),e}function nm(a,e){let t=new Map;function n(s,o,c,l,d,u,h="i"){let f=t.get(s);return f||(f={id:s,p:Eu(d),x:o,z:c,y:u??e(o,c),ox:o,oz:c,rumbo:l??0,orumbo:l??0,fase:Math.random()*6,d:0,a:0},f.p.equipar("casco",!!d?.uniforme),d?.arnes&&f.p.equipar("arnes"),a.add(f.p.raiz),t.set(s,f)),f.ox=o,f.oz=c,f.oy=u,f.pose=h,l!==void 0&&(f.orumbo=l),f}function i(s){let o=t.get(s);o&&(a.remove(o.p.raiz),t.delete(s))}function r(s,o,c){let l=1-Math.exp(-s*10);for(let d of t.values()){let u=(d.ox-d.x)*l,h=(d.oz-d.z)*l,f=((d.oy??e(d.x,d.z))-d.y)*l,g=Math.hypot(u,f,h);d.x+=u,d.z+=h,d.y+=f;let v=Math.hypot(u,h)/s>.25,m=Mu[d.pose];d.rumbo=H_(d.rumbo,v&&!m?Math.atan2(u,h):d.orumbo)*l+d.rumbo*(1-l),d.p.raiz.position.set(d.x,d.y,d.z),d.p.raiz.rotation.y=d.rumbo;let p=Math.hypot(d.x-c.position.x,d.z-c.position.z);d.p.raiz.visible=p<140&&d.pose!=="o",p<60&&(d.fase+=g*4.19,d.p.pose({tipo:m??(v?"caminar":"idle"),fase:d.fase,t:o,dt:s}))}}return{mapa:t,fijar:n,quitar:i,cada:r}}function am(a){let e=new Lt(new Jr(.5,16).rotateX(-Math.PI/2),new wn({color:0,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a);e.frustumCulled=!1,e.renderOrder=1;let t=new xt;return{malla:e,fijar(n,i,r,s,o,c=o,l=0){t.position.set(i,r+.02,s),t.rotation.set(0,l,0),t.scale.set(o,1,c),t.updateMatrix(),e.setMatrixAt(n,t.matrix)},listo(n){e.count=Math.min(n,a),e.instanceMatrix.needsUpdate=!0}}}var Au=.16,Sc=56,Mc=a=>Math.abs(a)<Au?0:(a-Math.sign(a)*Au)/(1-Au);function im(a,e){let t=new Set,n=new Set,i={mx:0,mz:0,gx:0,gy:0,correr:!1,accion:!1,vista:!1,origen:lr?"t\xE1ctil":"teclado y rat\xF3n"},r=0,s=0,o={sensibilidad:1,invertir:!1};addEventListener("keydown",b=>{b.repeat||(t.add(b.code),i.origen="teclado y rat\xF3n",b.target?.tagName!=="INPUT"&&(b.code==="KeyE"&&n.add("accion"),b.code==="KeyV"&&n.add("vista"),b.code==="KeyR"&&n.add("radio"),b.code==="KeyM"&&n.add("mapa"),b.code==="KeyP"&&n.add("pausa"),b.code==="KeyH"&&n.add("bocina")))}),addEventListener("keyup",b=>t.delete(b.code)),addEventListener("blur",()=>t.clear());let c=(...b)=>b.some(M=>t.has(M))?1:0;a.addEventListener("click",()=>{!lr&&document.pointerLockElement!==a&&a.requestPointerLock?.()?.catch?.(()=>{})}),addEventListener("mousemove",b=>{document.pointerLockElement===a&&(r+=b.movementX*.0024,s-=b.movementY*.0024)});let l={id:null,x0:0,y0:0,x:0,y:0},d={id:null,x:0,y:0},u=document.createElement("div"),h=document.createElement("div");u.className="mu-base",h.className="mu-perilla",u.append(h),u.hidden=!0,e.append(u),a.style.touchAction="none",a.addEventListener("pointerdown",b=>{b.pointerType==="touch"&&(i.origen="t\xE1ctil",b.clientX<innerWidth*.45&&l.id===null?(Object.assign(l,{id:b.pointerId,x0:b.clientX,y0:b.clientY,x:0,y:0}),u.style.left=b.clientX+"px",u.style.top=b.clientY+"px",h.style.transform="",u.hidden=!1):d.id===null&&Object.assign(d,{id:b.pointerId,x:b.clientX,y:b.clientY}))}),a.addEventListener("pointermove",b=>{if(b.pointerId===l.id){let M=(b.clientX-l.x0)/Sc,_=(b.clientY-l.y0)/Sc,A=Math.hypot(M,_);A>1&&(M/=A,_/=A),l.x=M,l.y=_,h.style.transform=`translate(${M*Sc}px, ${_*Sc}px)`}else b.pointerId===d.id&&(r+=(b.clientX-d.x)*.0052,s-=(b.clientY-d.y)*.0052,d.x=b.clientX,d.y=b.clientY)});let f=b=>{b.pointerId===l.id&&(l.id=null,l.x=l.y=0,u.hidden=!0),b.pointerId===d.id&&(d.id=null)};if(a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f),lr)for(let[b,M,_]of[["pausa","\u23F8","Pausa"],["mapa","\u{1F5FA}","Mapa"],["radio","\u{1F4FB}","Radio"],["vista","\u{1F441}","Cambiar de vista"],["accion","\u270B","Acci\xF3n"]]){let A=document.createElement("button");A.className="mu-boton mu-"+b,A.textContent=M,A.setAttribute("aria-label",_),A.addEventListener("pointerdown",E=>{E.preventDefault(),n.add(b)}),e.append(A)}let g={},v={0:"accion",1:"atras",2:"radio",3:"vista",4:"bocina",8:"mapa",9:"pausa",12:"arriba",13:"abajo"};function m(b){let M=null;try{M=Array.from(navigator.getGamepads?.()??[]).find(D=>D?.connected&&D.mapping==="standard")}catch{}if(!M)return null;let _=Mc(M.axes[2]),A=Mc(M.axes[3]);(_||A)&&(r+=_*2.6*b,s-=A*1.9*b);let E=!1;for(let D in v){let F=!!M.buttons[D]?.pressed;F&&!g[D]&&(n.add(v[D]),E=!0),g[D]=F}let T=Mc(M.axes[0]),x=-Mc(M.axes[1]),S=!!(M.buttons[6]?.pressed||M.buttons[10]?.pressed),w=x>.6?"arriba":x<-.6?"abajo":null;return w&&g.pal!==w&&n.add(w),g.pal=w,(T||x||_||A||E)&&(i.origen="control"),{mx:T,mz:x,correr:S}}function p(b){let M=c("KeyD","ArrowRight")-c("KeyA","ArrowLeft"),_=c("KeyW","ArrowUp")-c("KeyS","ArrowDown"),A=!!c("ShiftLeft","ShiftRight");l.id!==null&&(M=l.x,_=-l.y,A=Math.hypot(M,_)>.92);let E=m(b);E&&(E.mx||E.mz)&&(M=E.mx,_=E.mz,A=E.correr);let T=Math.hypot(M,_);T>1&&(M/=T,_/=T),i.mx=M,i.mz=_,i.correr=A,i.gx=r*o.sensibilidad,i.gy=s*o.sensibilidad*(o.invertir?-1:1),r=s=0;for(let x of["accion","vista","radio","mapa","pausa","bocina","atras","arriba","abajo"])i[x]=n.has(x);return n.clear(),i}return{leer:p,pulsar:b=>n.add(b),mirada:o}}var k_=`
.mu-capa{position:fixed;inset:0;pointer-events:none;font:12px/1.35 ui-monospace,Consolas,monospace;color:#fff;user-select:none;-webkit-user-select:none}
.mu-capa>*{pointer-events:auto}
.mu-diag{position:absolute;left:max(8px,env(safe-area-inset-left));bottom:max(8px,env(safe-area-inset-bottom));background:rgba(0,24,48,.72);border-radius:8px;padding:8px 10px;white-space:pre;max-width:92vw;overflow:hidden}
.mu-diag button{display:block;margin-top:6px;font:inherit;color:#fff;background:#0B4A8F;border:0;border-radius:6px;padding:6px 10px;min-height:32px}
.mu-diag button:focus-visible,.mu-boton:focus-visible{outline:2px solid #FFD627;outline-offset:2px}
.mu-ayuda{position:absolute;left:50%;bottom:max(10px,env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(0,24,48,.6);border-radius:8px;padding:6px 12px;font:13px system-ui,sans-serif;text-align:center;pointer-events:none}
.mu-base{position:absolute;width:112px;height:112px;margin:-56px 0 0 -56px;border-radius:50%;background:rgba(255,255,255,.14);border:2px solid rgba(255,255,255,.45);pointer-events:none}
.mu-perilla{position:absolute;left:50%;top:50%;width:52px;height:52px;margin:-26px 0 0 -26px;border-radius:50%;background:rgba(255,255,255,.75)}
.mu-boton{position:absolute;right:max(18px,env(safe-area-inset-right));width:64px;height:64px;border-radius:50%;border:3px solid rgba(255,255,255,.85);background:rgba(0,38,74,.88);color:#fff;font-size:26px;touch-action:none;box-shadow:0 6px 20px rgba(0,0,0,.25)}
.mu-boton:active{transform:scale(.94);background:#FFD627}
.mu-diag{font-family:ui-monospace,Consolas,monospace}
.mu-accion{bottom:max(26px,env(safe-area-inset-bottom))}
.mu-vista{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 78px)}
`;function rm(){let a=document.createElement("style");a.textContent=k_,document.head.append(a);let e=document.createElement("div");return e.className="mu-capa",document.body.append(e),e}function sm(a,e){let t=document.createElement("div");t.className="mu-diag",t.hidden=!e;let n=document.createElement("div"),i=document.createElement("button");return i.textContent="Copiar diagn\xF3stico",i.addEventListener("click",async()=>{let r=`${n.textContent}
${navigator.userAgent}
${innerWidth}\xD7${innerHeight} \xB7 dpr ${devicePixelRatio}`;try{await navigator.clipboard.writeText(r),i.textContent="Copiado \u2713"}catch{i.textContent="No se pudo copiar"}setTimeout(()=>{i.textContent="Copiar diagn\xF3stico"},2e3)}),t.append(n,i),a.append(t),addEventListener("keydown",r=>{r.code==="F3"&&(r.preventDefault(),t.hidden=!t.hidden)}),{escribir:r=>{n.textContent=r},mostrar:r=>{t.hidden=!r}}}var Qa={inspeccion:"GS-101 \xB7 Inspecci\xF3n de poster\xEDa (\xA75.6.3) \xB7 p. 21",demarcacion:"GS-101 \xB7 Demarcaci\xF3n (\xA75.6.2) \xB7 p. 21",equipo:"GS-101 \xB7 Trabajo seguro en postes (\xA75.6.1) \xB7 pp. 20\u201321"},om={a:{texto:"El poste parece obviamente inseguro.",corto:"Poste obviamente inseguro",material:null,aplicaAntesDeSubir:!0,dibujable:!1},b:{texto:"El poste se mueve.",corto:"Poste que se mueve",material:null,aplicaAntesDeSubir:!0,dibujable:!1},c:{texto:"El poste est\xE1 inclinado.",corto:"Poste inclinado",material:null,aplicaAntesDeSubir:!0,dibujable:!0},d:{texto:"La base del poste se alter\xF3 mientras se trabajaba arriba.",corto:"Base alterada",material:null,aplicaAntesDeSubir:!1,dibujable:!1},e:{texto:"Al despojar el poste de algunos cables y retenidas, se observa que est\xE1 soportado por los cables.",corto:"Soportado por los cables",material:null,aplicaAntesDeSubir:!1,dibujable:!1},f:{texto:"El terreno presenta deslizamientos.",corto:"Deslizamiento del terreno",material:null,aplicaAntesDeSubir:!0,dibujable:!1},g:{texto:"Poste de madera con fisuras, quemado o podrido: el da\xF1o no debe superar una tercera parte del di\xE1metro. Tampoco nudos con agrietamiento, ni agrietamientos a lo largo que comprometan m\xE1s de una tercera parte del poste.",corto:"Madera fisurada o podrida",material:"madera",aplicaAntesDeSubir:!0,dibujable:!0},h:{texto:"Poste de metal con oxidaci\xF3n que supera una tercera parte del di\xE1metro, o con perforaciones superiores a una tercera parte del di\xE1metro, o con una l\xEDnea el\xE9ctrica en posible contacto directo con el poste.",corto:"Metal oxidado o perforado",material:"metal",aplicaAntesDeSubir:!0,dibujable:!0}},CA=Object.keys(om).filter(a=>om[a].aplicaAntesDeSubir);var IA=typeof __URL_PUBLICA__=="string"?__URL_PUBLICA__:globalThis.process?.env?.URL_PUBLICA||"https://ruben1155.github.io/cuadrilla-segura/",DA=typeof __PREFIJO__=="string"?__PREFIJO__:globalThis.process?.env?.PREFIJO_ALMACEN||"cuadrilla-segura:";var Tu={url:"https://okhbiliodjuofzsjkolg.supabase.co",llave:"sb_publishable_F3-PMi9uLDPR655ZOCs60g_m0S_C6Ec"};var K={altura:"GS-101 \xB7 Trabajo seguro en alturas",escaleras:"GS-101 \xB7 Trabajo seguro en escaleras port\xE1tiles",amarre:"GS-101 \xB7 Paso a paso para el aseguramiento de la escalera a un poste",epp:"GS-101 \xB7 Uso de equipo de protecci\xF3n personal",general:"GS-101 \xB7 Lineamientos en seguridad general",electrico:"GS-101 \xB7 Trabajo seguro en proximidad de l\xEDneas energizadas",demarcacion:"GS-101 \xB7 Demarcaci\xF3n y se\xF1alizaci\xF3n del \xE1rea",emergencias:"GS-101 \xB7 Emergencias en trabajos en alturas",suspender:"GS-101 \xB7 Suspensi\xF3n de labores ante peligro no controlado",vehiculos:"GS-101 \xB7 Seguridad en la conducci\xF3n de veh\xEDculos",carga:"GS-101 \xB7 Lineamientos generales: manipulaci\xF3n de cargas",cuadrillas:"GS-101 \xB7 Cuadrillas de trabajo",reportes:"GS-101 \xB7 Reporte de incidentes y accidentes laborales",freno:"GS-101 \xB7 Equipo para trabajo en postes (freno para cuerda) \xB7 pr\xE1ctica de la cuadrilla: el freno va a la argolla frontal",m_altura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable",m_prep:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 Preparaci\xF3n antes de instalar",m_gaza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.8 Gazas, herrajes y accesorios",m_tension:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n",m_radio:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura",m_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.24 Rollos de reserva en redes a\xE9reas",m_rollo_poste:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de red en el poste (di\xE1metro del rollo de 40 a 50 cm)",m_calco:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas",m_preform:"Manual MNO-DS-GE-001 \xB7 Anexo 3: uso de preformados seg\xFAn di\xE1metro del cable",m_colores:"Manual MNO-DS-GE-001 \xB7 Anexo 4: c\xF3digo de colores EIA/TIA-598",m_cierre:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme",m_pruebas:"Manual MNO-DS-GE-001 \xB7 \xA76.7 Pruebas de aceptaci\xF3n",m_balona:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.6 Balona",m_postes:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.3.2 Distancia entre postes",m_ferrea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.5 Cruce de l\xEDnea f\xE9rrea",m_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 Preparaci\xF3n y limpieza de registros",m_subterranea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.2 y \xA76.2.1.3 Instalaci\xF3n subterr\xE1nea y selecci\xF3n de ductos",m_reserva_sub:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 Rollos de reserva en registros",m_tapas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.5 Dispositivos de seguridad de las tapas",poda_transito:"GS-101 \xB7 \xA75.6.10 n) Poda de \xE1rboles: en v\xEDas de alto tr\xE1nsito se pide colaboraci\xF3n a entidades como tr\xE1nsito \xB7 p. 40",confinado:"GS-101 \xB7 T\xE9rminos: espacio confinado",t_techo:"GS-101 \xB7 \xA75.6.7 Trabajo seguro en techos \xB7 p\xE1g. 30",t_techo_epp:"GS-101 \xB7 \xA75.6.7 Equipo de protecci\xF3n personal en techos \xB7 p\xE1g. 30",t_techo_escalera:"GS-101 \xB7 \xA75.6.7 a\u2013c Escalera para acceder al techo \xB7 p\xE1g. 30",t_techo_anclaje:"GS-101 \xB7 \xA75.6.7 d\u2013f Anclaje y l\xEDnea de vida provisional \xB7 p\xE1g. 30\u201331",t_techo_traslado:"GS-101 \xB7 \xA75.6.7 g Traslado al techo y descenso anclado \xB7 p\xE1g. 31",t_techo_caminar:"GS-101 \xB7 \xA75.6.7 h\u2013j Caminar en el techo y l\xE1minas \xB7 p\xE1g. 32",t_techo_clima:"GS-101 \xB7 \xA75.6.7 n Condiciones clim\xE1ticas adversas \xB7 p\xE1g. 33",t_techo_peligro:"GS-101 \xB7 \xA75.6.7 p Zonas inseguras del techo \xB7 p\xE1g. 33",t_escalera_base:"GS-101 \xB7 \xA75.6.4 g Escaleras port\xE1tiles: per\xEDmetro de 2 m \xB7 p\xE1g. 22\u201323",t_escalera_tres:"GS-101 \xB7 \xA75.6.4 Nota: tres pelda\xF1os superiores prohibidos \xB7 p\xE1g. 22",t_escalera_sola:"GS-101 \xB7 \xA75.6.4 i Un solo trabajador sobre la escalera \xB7 p\xE1g. 23",mt_epp:"GS-101 \xB7 5.6.9 EPP para trabajo en proximidad de l\xEDneas energizadas \xB7 p. 34",mt_identificar:"GS-101 \xB7 5.6.9 c) y observaciones 1 y 2 \xB7 p. 35",mt_distancias:"GS-101 \xB7 5.6.9 b) Distancias de instalaci\xF3n con el secundario (40 cm) y el neutro (80 cm) \xB7 p. 35",mt_tabla4:"GS-101 \xB7 5.6.9 e) Tabla N\xB0 4, distancias m\xEDnimas de seguridad \xB7 p. 37",mt_suspender:"GS-101 \xB7 5.6.9 f) Telecomunicaciones a menos de 80 cm de la primaria MT, en contacto con el secundario o al nivel de este \xB7 p. 37",mt_senal:"GS-101 \xB7 5.6.9 g) Se\xF1alizaci\xF3n del \xE1rea de trabajo a nivel de suelo \xB7 p. 37",mt_activa:"GS-101 \xB7 5.6.9 h) Todas las l\xEDneas el\xE9ctricas se consideran activas \xB7 p. 38",mt_frontera:"GS-101 \xB7 5.2 w) Fronteras de aproximaci\xF3n: solo personas calificadas cruzan el l\xEDmite \xB7 p. 12",mt_escalera:"GS-101 \xB7 5.6.4 q) Escaleras de abrir de fibra de vidrio; nota sobre escaleras de aluminio \xB7 p. 23",mt_guante_cuero:"GS-101 \xB7 5.3.4 b) Los guantes de cuero no son para trabajos en presencia de tensi\xF3n \xB7 p. 15",mt_rigidez:"GS-101 \xB7 5.1 d) Buena rigidez diel\xE9ctrica: no sujetarse de estructuras met\xE1licas cercanas \xB7 p. 9",poda_epp:"GS-101 \xB7 \xA75.6.10 d) y e) Equipo de protecci\xF3n para poda: careta, lentes, protecci\xF3n auditiva, cuerdas, casco de cuatro puntos con barbiquejo, guantes mec\xE1nicos, ropa y calzado institucionales \xB7 pp. 38\u201339",poda_mangas:"GS-101 \xB7 \xA75.6.10 t) Mangas, cuerdas o prendas sueltas pueden enredarse en la motosierra o en la rama \xB7 p. 40",poda_planificar:"GS-101 \xB7 \xA75.6.10 h) Planificaci\xF3n previa: \xE1rbol, terreno, clima, bienes, personas, animales, insectos, tr\xE1nsito y distancia a l\xEDneas \xB7 p. 39",poda_subir:"GS-101 \xB7 \xA75.6.10 f) El trabajador no se debe subir a un \xE1rbol \xB7 p. 39",poda_linea:"GS-101 \xB7 \xA75.6.10 b) y m) Ramas en aproximaci\xF3n o sobre la l\xEDnea energizada: informar y coordinar; no se cortan ramas sobre la l\xEDnea \xB7 pp. 38 y 40",poda_distancias:"GS-101 \xB7 \xA75.6.10 j) y k) Distancias m\xEDnimas: se trabaja fuera de ellas durante el corte y la ca\xEDda, tambi\xE9n para las ramas \xB7 p. 39",poda_cansancio:"GS-101 \xB7 \xA75.6.10 g) No operar maquinaria cansado ni con medicamentos que alteren la conciencia \xB7 p. 39",poda_senal:"GS-101 \xB7 \xA75.6.10 n) Se\xF1alizar el \xE1rea y advertir a terceros; en v\xEDas de alto tr\xE1nsito, pedir apoyo \xB7 p. 40",poda_trayectoria:"GS-101 \xB7 \xA75.6.10 o) Valorar la trayectoria de ca\xEDda y asegurar la zona con se\xF1alizaci\xF3n y personal que regule el paso \xB7 p. 40",poda_equipo:"GS-101 \xB7 \xA75.6.10 p) Revisar el equipo de poda antes de iniciar (cuchillos, mecates, otros dispositivos) \xB7 p. 40",poda_viento:"GS-101 \xB7 \xA75.6.10 q) Antes de cada corte: distancia a lo energizado, viento y vegetaci\xF3n que interfiera \xB7 p. 40",poda_cuerdas:"GS-101 \xB7 \xA75.6.10 r) Cuerdas de trabajo para evitar que la rama cambie de direcci\xF3n al caer \xB7 p. 40",poda_cuadrilla:"GS-101 \xB7 \xA75.4 e) Las cuadrillas de poda de \xE1rboles no pueden ser menores de dos miembros \xB7 p. 18",gal_autorizacion:"Manual MNO-DS-GE-001 \xB7 \xA74.1.6 y \xA74.1.7 Aviso al Centro de Operaciones y autorizaci\xF3n en SASET antes de intervenir fibras en operaci\xF3n",gal_senal:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) Per\xEDmetro del \xE1rea de trabajo asegurado con se\xF1alizaci\xF3n vial y peatonal",gal_vigia:"GS-101 \xB7 \xA75.4 c) Cuadrillas de m\xEDnimo dos personas. La fuente no describe c\xF3mo se vigila la tapa ni la comunicaci\xF3n (duda, ver PENDIENTES_SST.md, J10)",gal_atmosfera:"GS-101 \xB7 T\xE9rminos: espacio confinado (aberturas limitadas, ventilaci\xF3n desfavorable). La fuente no describe el procedimiento de atm\xF3sfera (duda, ver PENDIENTES_SST.md, J10)",gal_ingreso:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 c) Ingreso por escalera met\xE1lica cuando la profundidad lo amerita (aplicado a la galer\xEDa: duda, ver PENDIENTES_SST.md, J10)",gal_epp:"GS-101 \xB7 \xA75.3 Uso de EPP: lista propuesta para la galer\xEDa, a validar por Salud Ocupacional (ver PENDIENTES_SST.md, J10)",gal_respirador:"GS-101 \xB7 \xA75.3.3 f) Respiradores con filtros en lugares de escasa ventilaci\xF3n; los filtros se reemplazan cuando se saturan",gal_cables:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) No da\xF1ar los cables existentes; \xA76.2.2 radio de curvatura; \xA76.2.7.2 fijaciones con cobre en servicio",gal_pletinas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7.1 b) Pletinas peque\xF1as de 20 cm; d) el cable se sujeta del centro hacia los extremos",gal_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 b) y c) Rollo de reserva de 20 a 25 m en la galer\xEDa, en la pared opuesta al MDF, a la mayor altura posible",gal_50cm:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 d) En la pared del MDF, 50 cm libres desde la salida de los ductos hacia el fondo",gal_placas:"Manual MNO-DS-GE-001 \xB7 \xA76.4.2.3 a) y e) Placas acr\xEDlicas con origen y destino; dos placas en cada rollo de reserva",gal_sellado:"Manual MNO-DS-GE-001 \xB7 Anexo 1: sellado de los ductos en la galer\xEDa (espuma expandible reentrable; subductos con tapones de hule)",eri_antes:"GS-101 \xB7 \xA75.7 Antes a) y b): personal capacitado como equipo ERI y en rescate vertical; botiqu\xEDn b\xE1sico y equipos para rescate vertical (cuerdas de seguridad, mosquetones, pull-lift) \xB7 p. 42",eri_criticas:"GS-101 \xB7 \xA75.7 Antes d): los trabajos mayores de 12 m son muy cr\xEDticos; sistema de rescate en el sitio y persona competente en rescate \xB7 p. 42",eri_sistema:"GS-101 \xB7 \xA75.7 Antes c): reportar el deterioro o da\xF1o de los sistemas de prevenci\xF3n y protecci\xF3n contra ca\xEDdas \xB7 p. 42",eri_despejar:"GS-101 \xB7 \xA75.7 Durante a): despejar completamente el \xE1rea donde se present\xF3 el accidente \xB7 p. 42",eri_distancia:"GS-101 \xB7 \xA75.7 Durante b) y g): distancia prudente y segura; antes de un rescate, comprobar que el \xE1rea es segura y que uno est\xE1 protegido \xB7 pp. 42\u201343",eri_911:"GS-101 \xB7 \xA75.7 Durante e) y f): pedir ayuda al 9-1-1; no hacer maniobras de rescate de las que no se tenga conocimiento previo \xB7 p. 43",eri_no_mover:"GS-101 \xB7 \xA75.7 Durante d) y Despu\xE9s b): no mover a la v\xEDctima salvo raz\xF3n de seguridad; brindar tranquilidad a la v\xEDctima \xB7 p. 43",eri_terceros:"GS-101 \xB7 \xA75.7 Durante h): ning\xFAn trabajador informa a personas u organizaciones externas; solo la direcci\xF3n o personal autorizado \xB7 p. 43",eri_fuera:"GS-101 \xB7 \xA75.5 n): los equipos para trabajo en altura que hayan sido usados en pruebas o por una ca\xEDda libre quedan fuera de servicio \xB7 p. 21",sv_permiso:"GS-101 \xB7 \xA75.8 a) Solo conduce veh\xEDculos institucionales el funcionario con los permisos de conducir del ICE \xB7 p. 42",sv_revision:"GS-101 \xB7 \xA75.8 b) Antes de usar el veh\xEDculo se revisan los niveles de aceite, combustible y agua, luces, repuesto, documentos, se\xF1alizaci\xF3n, herramientas y llantas \xB7 p. 43",sv_ley:"GS-101 \xB7 \xA75.8 c) y l) Conducir responsablemente, respetando la Ley de Tr\xE1nsito, sin abusar de la destreza al conducir \xB7 p. 43",sv_celular:"GS-101 \xB7 \xA75.8 d) Queda prohibido el uso del celular durante la conducci\xF3n del veh\xEDculo \xB7 p. 43",sv_estacionar:"GS-101 \xB7 \xA75.8 e) Al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",sv_carga:"GS-101 \xB7 \xA75.8 g) Asegurar objetos, materiales, herramientas y equipos: son un riesgo en un frenado r\xE1pido, vuelco o colisi\xF3n \xB7 p. 43",sv_tablero:"GS-101 \xB7 \xA75.8 h) e i) Nada suelto en el tablero; no recoger objetos del piso ni lejos del alcance mientras se conduce \xB7 p. 43",sv_fatiga:"GS-101 \xB7 \xA75.8 m) Con cansancio o fatiga: detener el veh\xEDculo en un sitio seguro, bajarse, caminar y respirar; si va acompa\xF1ado, ceder la conducci\xF3n \xB7 p. 43",sv_calma:"GS-101 \xB7 \xA75.8 o) Manejar con calma, sin perder el control con otros conductores y evitando confrontaciones \xB7 p. 43",sv_mojado:"GS-101 \xB7 \xA75.8 p) En caminos con grava, arenosos o mojados, bajar la velocidad y manejar con cuidado \xB7 p. 44",sv_danos:"GS-101 \xB7 \xA75.8 q) Reportar los da\xF1os que se observen o causen al veh\xEDculo; no ocultarlos, pueden producir un accidente \xB7 p. 44",sv_alcohol:"GS-101 \xB7 \xA75.8 r) No conducir bajo los efectos del alcohol, drogas o medicamentos que causen somnolencia \xB7 p. 44",sv_defensivo:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Manejo defensivo y sus cinco elementos: conocimiento, estar alerta, previsi\xF3n, juicio y habilidad \xB7 diap. 4\u201311",sv_humano:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 El 90 % de los accidentes viales tiene origen en el factor humano \xB7 diap. 13",sv_estados:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Estados (prisa, frustraci\xF3n, cansancio, complacencia) y los errores que producen \xB7 diap. 17\u201325",sv_linea_fuego:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Errores: ojos no en la tarea y entrar en la l\xEDnea de fuego \xB7 diap. 26 y 30",sv_lluvia:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Factor lluvia: calle mojada (\xABespecie de jab\xF3n\xBB), carreteras, poca visibilidad y neblina \xB7 diap. 36\u201341",sv_visibilidad:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Poca visibilidad: reducir la velocidad; si es excesiva, detener el veh\xEDculo a un costado y esperar \xB7 diap. 40",sv_derrumbe:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Derrumbes originados por la lluvia \xB7 diap. 38 (qu\xE9 hacer ante uno: decisi\xF3n conservadora, ver PENDIENTES_SST.md, J12\u2013J13)",sv_sustancias:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Alcohol, drogas y f\xE1rmacos: efectos seg\xFAn la dosis; los f\xE1rmacos como factor accidentog\xE9nico \xB7 diap. 44\u201349",sv_minimos:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Nueve m\xEDnimos de seguridad vehicular, a revisar todos los d\xEDas antes de salir \xB7 diap. 51\u201352",sv_cinturon:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 M\xEDnimo 1: cintur\xF3n de seguridad retr\xE1ctil de 2 o 3 puntos \xB7 diap. 51",ev_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 \xB7 GS-101 \xB7 Delimitaci\xF3n del \xE1rea",ev_impaciente:"GS-101 \xB7 Cuadrillas en zonas de tr\xE1fico denso \xB7 Delimitaci\xF3n del \xE1rea de trabajo",gs31_ats:"GS-31 \xB7 \xA75.2.4 Antes de la ejecuci\xF3n diaria se realiza el ATS, con todos los trabajadores y liderado por el encargado o t\xE9cnico de la cuadrilla (A01-GS-31) \xB7 p. 10",gs31_cambios:"GS-31 \xB7 \xA75.2.5 Si cambia la planificaci\xF3n inicial (obra, proceso, equipos, personal) se aplica de nuevo el ATS \xB7 p. 10",gs31_f02:"GS-31 \xB7 \xA75.1.11 Las tareas con riesgos de situaci\xF3n cr\xEDtica se eval\xFAan con el F02-GS-31 An\xE1lisis de Tarea Cr\xEDtica \xB7 p. 5",gs31_gravedad:"GS-31 \xB7 \xA75.1.11 d) y f) Gravedad: la p\xE9rdida m\xE1s probable, en la escala 0, 2, 4 y 6 \xB7 p. 6",gs31_repetitividad:"GS-31 \xB7 \xA75.1.11 g) Repetitividad: n\xFAmero de colaboradores y cu\xE1nto de la jornada hace cada uno la tarea \xB7 p. 7",gs31_probabilidad:"GS-31 \xB7 \xA75.1.11 h) Probabilidad de esa p\xE9rdida, de \u22121 a +1 respecto al promedio \xB7 p. 7",gs31_criticidad:"GS-31 \xB7 \xA75.1.11 i) y k) GC = G + R + P (0 a 10): de 0 a 4 baja, m\xE1s de 4 y menos de 8 moderada, 8 o m\xE1s alta \xB7 pp. 7\u20138",gs31_controles:"GS-31 \xB7 \xA75.1.11 m) Controles m\xEDnimos: EPP y dispositivos, capacitaci\xF3n, protocolo de trabajo seguro y la normativa que los respalda \xB7 p. 8",ats_pizarra:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 ATS del d\xEDa: la pizarra (trabajo, herramientas y equipos, obra, fecha, personal y actividades numeradas) \xB7 diap. 46\u201347",ats_muerte:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Factores de muerte; si hay uno o m\xE1s, se revisan en conjunto las acciones a implementar \xB7 diap. 48",ats_riesgos:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Riesgos de cada tarea, manteniendo la numeraci\xF3n de las actividades \xB7 diap. 49",rec_anomalia:"GS-101 \xB7 \xA73.5 b) T\xE9cnico: informar al coordinador de cuadrilla y/o SST cualquier anomal\xEDa o desviaci\xF3n \xB7 p. 4",rec_inminente:"GS-101 \xB7 \xA75.6.4 g), final: si se observa inminente peligro para las personas, se interrumpe la actividad \xB7 p. 23",rec_cuasi:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) c) Casi incidente sin afectaci\xF3n a la salud: F01-GS-52 o F06-GS-52 \xB7 p. 41",rec_accidente:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) b) y d) Accidente: F07-GS-52 a la jefatura de inmediato, antes de terminar la jornada \xB7 pp. 40\u201341",rec_liderazgo:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Reporte por comportamientos: retroalimentaci\xF3n correctiva y registro en el F02-CSCON-SST-00-25 con firma del trabajador; aviso a la jefatura inmediata \xB7 diap. 68",sol_clima:"GS-101 \xB7 \xA75.1 e) Suspensi\xF3n de la actividad por condiciones clim\xE1ticas desfavorables: tormentas el\xE9ctricas, lluvias u otras que pongan en riesgo a los ejecutores \xB7 p. 9",demo_generacion_autorizacion:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 El ingreso a la planta solar se coordina con su encargado, con autorizaci\xF3n previa",demo_generacion_energizado:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los paneles generan electricidad mientras les da la luz: se tratan como energizados",demo_generacion_no_pisar:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 No se pisa ni se apoya nadie en los paneles ni en su estructura",demo_generacion_conexiones:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Solo personal calificado manipula conexiones e inversores, seg\xFAn el procedimiento de la planta",demo_generacion_danos:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los da\xF1os en paneles, cables o inversores se reportan y no se tocan",demo_generacion_calor:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Hidratarse, protegerse del sol y descansar a la sombra con frecuencia",mv_apoyo:"GS-101 \xB7 \xA75.6.6: el veh\xEDculo sirve de soporte a la escalera a medio vano \xB7 p. 28",mv_dos_puntos:"GS-101 \xB7 \xA75.6.6: la escalera se amarra al pant\xF3grafo y al eje de una llanta, a dos puntos \xB7 p. 28",mv_nudos:"GS-101 \xB7 \xA75.6.6: nudo ocho aplicado para dar tensi\xF3n y pata de chancho (ballestrinque) para terminar \xB7 p. 28",mv_subida:"GS-101 \xB7 \xA75.6.6: para subir y bajar, la cuerda de seguridad va sujetada a la escalera \xB7 p. 28",mv_bajada:"GS-101 \xB7 \xA75.6.4 j): subir y bajar de frente, con las manos libres y tres puntos de apoyo \xB7 p. 23",mv_tres:"GS-101 \xB7 \xA75.6.4, nota de la Tabla N\xB0 2: se proh\xEDbe el uso de los tres pelda\xF1os superiores \xB7 p. 22",mv_tabla2:"GS-101 \xB7 \xA75.6.4 f) y Tabla N\xB0 2: altura m\xE1xima permitida de uso de cada escalera \xB7 p. 22",mv_inspeccion:"GS-101 \xB7 \xA75.6.4 c), l), t) y u): revisar pelda\xF1os, uniones, largueros y patas antes de usar la escalera \xB7 pp. 22\u201324",mv_senalizacion:"GS-101 \xB7 \xA75.6.4 g): per\xEDmetro m\xEDnimo de 2 m alrededor de la escalera, con cintas y conos \xB7 pp. 22\u201323",mv_camion:"GS-101 \xB7 \xA75.8 e): al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",mv_herramientas:"GS-101 \xB7 \xA75.6.4 k): materiales y herramientas con bolso, mecate o cuerda \xB7 p. 23",mv_guardar:"GS-101 \xB7 \xA75.6.4 a) y d): la escalera se maneja entre dos y se deposita, no se tira; se limpian los desechos de los pelda\xF1os \xB7 p. 22",mv_mover:"GS-101 \xB7 \xA75.6.4 h): la escalera no se mueve ni se extiende mientras haya personal sobre ella \xB7 p. 23",cala_abertura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.2 Dimensi\xF3n de la cala: 1,5 m de largo por 1 m de ancho, como m\xEDnimo \xB7 p. 18",cala_pieza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tubo de reparaci\xF3n: 50 cm m\xE1s largo que la abertura entre los extremos del ducto \xB7 p. 18",cala_ranura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 La abertura del corte longitudinal queda arriba y se cierra con dos medias secciones de PVC y pegamento \xB7 p. 18",cala_amarras:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tres cintas met\xE1licas o tipo gaza con tornillo sin fin: una en cada extremo y otra en el centro \xB7 p. 18",cala_capas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.4 y Figura 2a: capas de cierre en su orden, espesor y material \xB7 p. 18",cala_empalme:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm, con preformado de 75 cm o menos \xB7 p. 52",cala_anclas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Anclas de seguridad: cada 500 m en tramos rectos de 1 km o m\xE1s, y en cruces de v\xEDa con vano mayor de 80 m en terreno plano \xB7 p. 36",cala_ancla_distancia:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Ubicaci\xF3n del ancla: la mitad de la altura, medida del herraje a la base del poste \xB7 p. 36",cr_cliente:"GS-101 \xB7 \xA75.6.8 a) y b) Observar el cielorraso antes de empezar y preguntar al cliente por sus condiciones \xB7 p. 33",cr_estructura:"GS-101 \xB7 \xA75.6.8 c) La estructura se observa sin corrosi\xF3n avanzada ni madera descompuesta, y estable \xB7 p. 33",cr_electrico:"GS-101 \xB7 \xA75.6.8 d) Cable el\xE9ctrico expuesto: el cliente desconecta la electricidad antes de subir; con guantes diel\xE9ctricos solo si no es posible \xB7 p. 33",cr_epp:"GS-101 \xB7 \xA75.6.8 e) EPP del cielorraso: anteojos, casco con barbiquejo y linterna, ropa, calzado, guantes diel\xE9ctricos y rodilleras \xB7 p. 34",cr_arnes:"GS-101 \xB7 \xA75.5 a) Trabajo a una altura, como en cielorrasos: equipo para trabajo en altura autorizado \xB7 p. 19",cr_extension:"GS-101 \xB7 \xA75.6.8 f) Valorar si es posible usar una extensi\xF3n de fibra para evitar subir al cielorraso \xB7 p. 34",cr_avispas:"GS-101 \xB7 \xA75.6.8 g) Al ingresar, verificar desde el suelo la ausencia de colmenas de avispas o similares \xB7 p. 34",cr_caminar:"GS-101 \xB7 \xA75.6.7 h) por analog\xEDa: caminar por la estructura y no sobre la l\xE1mina (el cielorraso no se cita: duda, ver PENDIENTES_SST.md, J19) \xB7 p. 32",cr_escalera_tipo:"GS-101 \xB7 \xA75.6.4 q) Escaleras de abrir de fibra de vidrio; nota: el aluminio solo donde no hay riesgo el\xE9ctrico \xB7 p. 23",el_provisional:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Arts. 111 y 113 del Reglamento de Seguridad en Construcciones: instalaciones provisionales seg\xFAn el C\xF3digo El\xE9ctrico de CR (entubado, adecuado a la tensi\xF3n nominal) \xB7 diap. 22\u201326",el_medidor:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 112: medidores el\xE9ctricos provisionales con base estable y protecci\xF3n del agua \xB7 diap. 22\u201326",el_tablero:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 114: tableros y cajas el\xE9ctricas tapados, identificados y cerrados \xB7 diap. 22\u201326",el_conductores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 115: conductores protegidos ante da\xF1os mec\xE1nicos de la construcci\xF3n (maquinaria, veh\xEDculos, agua, qu\xEDmicos) \xB7 diap. 27",el_epp:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 117: el personal en presencia de energ\xEDa el\xE9ctrica cuenta con protecci\xF3n diel\xE9ctrica; no usar el EPP diel\xE9ctrico es un acto inseguro \xB7 diap. 27 y 51",el_condiciones:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Condiciones inseguras: enchufes deteriorados, uniones deterioradas o sin aislamiento y conexiones fuera de norma \xB7 diap. 46\u201348",el_autorizacion:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: intervenir sin autorizaci\xF3n \xB7 diap. 51",el_mojado:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: manos o pies mojados; la piel h\xFAmeda tiene menor resistencia \xB7 diap. 13 y 51",el_combustible:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: materiales combustibles o explosivos donde se presente arco el\xE9ctrico; el arco es un fuego repentino con metal fundido \xB7 diap. 5 y 31",el_anexo_b:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: peligro inminente o alto riesgo (sin protecci\xF3n frente al contacto con partes energizadas o el cortocircuito; lluvia y tormentas el\xE9ctricas) \xB7 diap. 30\u201331",el_anexo_c:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo C del C\xF3digo El\xE9ctrico: lista de verificaci\xF3n de instalaciones el\xE9ctricas, aplicada en conjunto con el t\xE9cnico el\xE9ctrico \xB7 diap. 32\u201340",el_factores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Factores de la magnitud de un incidente el\xE9ctrico: intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria \xB7 diap. 9"};var LA=new Map([...Object.entries(K).map(([a,e])=>[e,a]),...Object.entries(Qa).map(([a,e])=>[e,"poste_"+a])]);var V_=[{n:1,p:"\xBFA partir de qu\xE9 altura se considera trabajo en altura?",o:["M\xE1s de 1,80 m","M\xE1s de 3 m","M\xE1s de 1 m","Solo arriba de 5 m"],ref:K.altura},{n:1,p:"\xBFCu\xE1ntos trabajadores pueden estar sobre una escalera port\xE1til?",o:["Uno solo","Dos, si es de extensi\xF3n","Tres, si la escalera es larga","Los que quepan"],ref:K.escaleras},{n:1,p:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera en el poste?",o:["75\xB0","60\xB0","90\xB0","45\xB0"],ref:K.amarre},{n:1,p:"\xBFQu\xE9 pelda\xF1os de la escalera est\xE1 prohibido usar?",o:["Los tres superiores","Solo el primer pelda\xF1o","Ninguno","Los dos inferiores"],ref:K.escaleras},{n:1,p:"\xBFQu\xE9 per\xEDmetro m\xEDnimo se se\xF1aliza alrededor de la escalera?",o:["2 metros","50 cm","No hace falta","10 metros"],ref:K.escaleras},{n:1,p:"Al subir y bajar la escalera debo mantener\u2026",o:["Tres puntos de apoyo","Dos puntos de apoyo","Las manos ocupadas","Un punto de apoyo"],ref:K.escaleras},{n:1,p:"\xBFC\xF3mo se suben las herramientas a la escalera?",o:["Con bolso, mecate o cuerda","En las bolsas del pantal\xF3n","En la mano, pegadas al cuerpo","Que me las lancen desde abajo"],ref:K.escaleras},{n:1,p:"\xBFSe puede trabajar en altura con reloj, anillo o cadena?",o:["No, se proh\xEDbe todo tipo de alhaja","S\xED, si son peque\xF1os y no molestan","Solo el reloj, si no tiene correa met\xE1lica","S\xED, si van bajo el guante de cuero"],ref:K.altura},{n:1,p:"Ante un accidente en altura, \xBFa qu\xE9 n\xFAmero se pide ayuda?",o:["9-1-1","1-1-3","8-0-0","Se espera a la jefatura"],ref:K.emergencias},{n:1,p:"La escalera viaja en el techo del cami\xF3n. \xBFSubir a bajarla es trabajo en altura?",o:["S\xED: el techo est\xE1 a m\xE1s de 1,80 m","No: es solo un cami\xF3n de reparto","Solo si llueve fuerte, con viento","Solo si es de noche y est\xE1 oscuro"],ref:K.altura},{n:1,p:"Tu arn\xE9s tiene una costura reventada. \xBFQu\xE9 haces?",o:["No lo uso, informo y pido la sustituci\xF3n","Lo uso con cuidado, sin que se note","Lo refuerzo con cinta y lo uso hoy","Lo uso solo hoy, ma\xF1ana lo cambio"],ref:K.altura},{n:1,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable a\xE9reo sobre una acera, en su flecha m\xE1xima?",o:["4,5 m","3 m","6 m","2,5 m"],ref:K.m_altura},{n:1,p:"\xBFCu\xE1ntas calcoman\xEDas reflectivas de prevenci\xF3n van en el poste?",o:["Dos, una a cada lado","Una, en el centro del poste","Cuatro, dos a cada lado","Ninguna: no hace falta"],ref:K.m_calco},{n:1,p:"\xBFCu\xE1ntas personas, como m\xEDnimo, forman una cuadrilla de instalaci\xF3n de fibra?",o:["Dos: un t\xE9cnico y un asistente","Una, si tiene experiencia","Cuatro, con un supervisor de obra","Las que haya disponibles ese d\xEDa"],ref:K.cuadrillas},{n:2,p:"\xBFD\xF3nde se conecta preferiblemente la l\xEDnea de vida?",o:["En un anclaje por encima de la cabeza","En el portaganchos pl\xE1stico del arn\xE9s","En un cable telef\xF3nico de la red","A la altura de la cintura, en un pelda\xF1o"],ref:K.altura},{n:2,p:"La l\xEDnea de vida de 0,90 m se conecta en el arn\xE9s a la\u2026",o:["Argolla dorsal (espalda)","Argolla frontal (pecho)","Argolla D lateral","Portaganchos pl\xE1stico"],ref:K.altura},{n:2,p:"El freno para cuerda (o el carrito de la l\xEDnea vertical del cami\xF3n) se conecta a la\u2026",o:["Argolla frontal, a la altura del pecho y el ombligo","Argolla dorsal, en la espalda, junto a la l\xEDnea de 0,90 m","Argolla D lateral de la faja de posicionamiento","Hebilla del cintur\xF3n, sin ning\xFAn anclaje"],ref:K.freno},{n:2,p:"Antes de usar los guantes diel\xE9ctricos, adem\xE1s de revisarlos a la vista, se les hace\u2026",o:["La prueba de aire (inflarlos) para buscar fugas","Nada m\xE1s: con una mirada basta","Una prueba con agua caliente y jab\xF3n","Un estir\xF3n fuerte, de lado y de frente"],ref:K.epp},{n:2,p:"Los guantes diel\xE9ctricos clase 00 (etiqueta beige) protegen hasta\u2026",o:["500 V","1000 V","50 V","15 kV"],ref:K.epp},{n:2,p:"\xBFPor qu\xE9 se usa un guante de cuero sobre el guante diel\xE9ctrico?",o:["Para evitar perforaciones y rasgados del aislante","Para que no se resbale la mano en el trabajo","Porque el color se ve mejor en el poste","No se debe usar: el aislante ya basta solo"],ref:K.epp},{n:2,p:"El casco para trabajo en postes es ala ancha tipo II, con barbiquejo de\u2026",o:["Cuatro puntos","Dos puntos","Un punto","No lleva barbiquejo"],ref:K.epp},{n:2,p:"Resistencia m\xEDnima de un punto de anclaje por persona conectada:",o:["5000 lb (2272 kg)","500 lb","1000 kg","La de cualquier tubo firme"],ref:K.altura},{n:2,p:"Un equipo de altura que ya detuvo una ca\xEDda libre debe\u2026",o:["Quedar fuera de servicio","Revisarse y seguir us\xE1ndose","Lavarse y guardarse","Usarse solo en techos"],ref:K.altura},{n:2,p:"\xBFSe puede enrollar la l\xEDnea de vida para acortarla?",o:["No, est\xE1 prohibido","S\xED, dos vueltas","S\xED, si el anclaje est\xE1 bajo","Solo en escaleras"],ref:K.altura},{n:2,p:"\xBFCu\xE1ntos ganchos se pueden conectar en un mismo anillo D?",o:["Uno, salvo que el fabricante certifique otra cosa","Dos, si ambos son del mismo tama\xF1o","Tres, si el anillo es de acero grueso","Los que quepan en el anillo D"],ref:K.altura},{n:2,p:"La escalera de 28 pies (8,53 m) se traslada y coloca entre\u2026",o:["Dos personas, de estatura similar","Una persona, con ayuda de la cuerda","Tres personas, con la escalera abierta","Con el cami\xF3n en marcha, sin frenar"],ref:K.escaleras},{n:2,p:"L\xEDmite de carga manual para un trabajador sin limitaciones de salud:",o:["25 kg (20 kg para una trabajadora)","50 kg, con un compa\xF1ero que ayude","40 kg para todos los trabajadores","No hay l\xEDmite si el peso se reparte"],ref:K.carga},{n:2,p:"\xBFSe pueden usar calzas para nivelar la escalera?",o:["No: se busca nivelar el sitio sin calzas","S\xED, con piedras o pedazos de madera","S\xED, con bloques de concreto, si el piso est\xE1 flojo","Solo de noche, cuando hay menos tr\xE1nsito"],ref:K.escaleras},{n:3,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable en los cruces de calle?",o:["5 m","4,5 m","6,5 m","3,5 m"],ref:K.m_altura},{n:3,p:"Radio m\xEDnimo de curvatura de un cable de fibra \xF3ptica:",o:["20 veces su di\xE1metro","5 veces su di\xE1metro","2 veces su di\xE1metro","No hay m\xEDnimo"],ref:K.m_radio},{n:3,p:"Tensi\xF3n m\xE1xima recomendada si no hay datos del fabricante:",o:["250 kgf","50 kgf","1000 kgf","Sin l\xEDmite"],ref:K.m_tension},{n:3,p:"La balona de los cables en el poste debe medir como m\xE1ximo:",o:["10 cm","50 cm","1 m","No hay l\xEDmite"],ref:K.m_balona},{n:3,p:"Altura m\xEDnima de la gaza respecto al suelo:",o:["5 m","2 m","3 m","8 m"],ref:K.m_gaza},{n:3,p:"Si en el poste no hay secundario el\xE9ctrico, la gaza va a esta distancia del neutro:",o:["80 cm","10 cm","40 cm","2 m"],ref:K.m_gaza},{n:3,p:"Di\xE1metro del rollo de reserva en redes a\xE9reas:",o:["De 40 a 50 cm","De 5 a 10 cm","Unos 2 m de di\xE1metro","El que quepa"],ref:K.m_rollo_poste},{n:3,p:"Distancia del rollo de reserva al poste:",o:["75 cm","10 cm","2 m","No hay norma"],ref:K.m_reserva},{n:3,p:"Distancia normal entre postes en redes existentes:",o:["Entre 40 y 80 m","Entre 5 y 10 m","M\xE1s de 200 m siempre","No importa"],ref:K.m_postes},{n:3,p:"En un cruce sin apoyo, \xBFcu\xE1ntas calcoman\xEDas reflectivas se instalan?",o:["Dos a cada lado de la balona del cruce","Una en el centro del poste","Ninguna, el cruce no lo necesita","Solo si es de noche o llueve"],ref:K.m_balona},{n:3,p:"Todo cable que cruce una l\xEDnea de ferrocarril se instala\u2026",o:["De forma subterr\xE1nea, sin tendido a\xE9reo","A\xE9reo a 5 m, como en un cruce de calle","A\xE9reo a 4,5 m, como en una acera","A\xE9reo, con un poste a cada lado de la v\xEDa"],ref:K.m_ferrea},{n:3,p:"La fibra n\xFAmero 1 del c\xF3digo de colores EIA/TIA-598 es:",o:["Azul","Naranja","Verde","Caf\xE9"],ref:K.m_colores},{n:3,p:"Presi\xF3n de prueba de hermeticidad del cierre de empalme:",o:["8 psi","1 psi","30 psi","No se prueba"],ref:K.m_cierre},{n:3,p:"\xBFSe puede instalar un cable sobre un transformador o l\xEDnea el\xE9ctrica?",o:["Nunca","S\xED, si es diel\xE9ctrico","S\xED, con guantes","Solo de d\xEDa"],ref:K.m_prep},{n:3,p:"Longitud del rollo de reserva dentro de un registro:",o:["De 28 a 35 m","De 2 a 5 m","100 m","No se deja reserva"],ref:K.m_reserva_sub},{n:3,p:"\xBFSe recomienda pasar fibra y cobre por el mismo ducto?",o:["No, salvo excepciones justificadas","S\xED, siempre que est\xE9n bien sujetos","Solo si son delgados y de poco peso","Es obligatorio, seg\xFAn el jefe de obra"],ref:K.m_subterranea},{n:3,p:"Al instalar un cable directamente en un ducto, adem\xE1s se deja\u2026",o:["Una gu\xEDa para el halado de cables en el futuro","El ducto sin tapar, para ventilar","Agua jabonosa para lubricar el cable","Nada m\xE1s: el ducto ya queda listo"],ref:K.m_subterranea},{n:3,p:"Al terminar el trabajo en un registro, la tapa\u2026",o:["Se coloca asegurada con sus dispositivos de seguridad","Se deja abierta un rato para ventilar el registro","Se apoya sobre el borde sin asegurar","Se guarda en el cami\xF3n hasta el d\xEDa siguiente"],ref:K.m_tapas},{n:4,p:"Antes de usar el veh\xEDculo de la cuadrilla se revisa\u2026",o:["Aceite, combustible, agua, luces, llantas, repuesto, documentos, se\xF1alizaci\xF3n y herramientas","Solo el combustible y que el motor encienda bien, sin mirar nada m\xE1s del veh\xEDculo","Solo que las luces funcionen y que el veh\xEDculo se vea limpio por fuera","Nada: eso lo hace el taller una vez al a\xF1o, y el chofer solo maneja y reporta si algo suena raro"],ref:K.vehiculos},{n:4,p:"Al estacionar el cami\xF3n en la calle para trabajar, se debe\u2026",o:["Hacerlo en un lugar seguro y se\xF1alizar","Dejarlo donde caiga, con las luces apagadas","Subirlo completo a la acera","Dejarlo en el carril, es solo un rato"],ref:K.vehiculos},{n:4,p:"\xBFSe puede usar el celular mientras se conduce el veh\xEDculo institucional?",o:["No, est\xE1 prohibido","S\xED, con altavoz","S\xED, en sem\xE1foros","Solo para mensajes de trabajo"],ref:K.vehiculos},{n:4,p:"Si sientes cansancio o fatiga mientras conduces\u2026",o:["Te detienes en un sitio seguro, descansas o cedes el volante","Aceleras un poco para llegar antes de que se haga tarde","Bajas la ventana, pones m\xFAsica y sigues manejando","Tomas caf\xE9, te estiras en el carro y contin\xFAas sin parar"],ref:K.vehiculos},{n:4,p:"Las herramientas y materiales que van en el cami\xF3n deben ir\u2026",o:["Asegurados: en un frenazo o vuelco se vuelven proyectiles","Sueltos en la cajuela para sacarlos m\xE1s r\xE1pido","En el tablero, encima de la guantera","En el asiento del copiloto, sin amarrarlos"],ref:K.vehiculos},{n:4,p:"En una v\xEDa de tr\xE1fico denso, la cuadrilla debe\u2026",o:["Planificar con m\xE1s personal y alguien que regule el tr\xE1nsito","Trabajar m\xE1s r\xE1pido para liberar la v\xEDa","Trabajar sin conos para no estorbar","Ir una sola persona, para ahorrar gastos del d\xEDa"],ref:K.cuadrillas},{n:4,p:"Para trabajar en una v\xEDa de alto tr\xE1nsito, \xBFa qui\xE9n se puede pedir colaboraci\xF3n?",o:["A las autoridades de tr\xE1nsito","A los vecinos de la cuadra","A nadie: la cuadrilla se arregla sola","A los conductores que pasan por la v\xEDa"],ref:K.poda_transito},{n:4,p:"El GS-101 define viento fuerte como una velocidad constante mayor a\u2026",o:["40 km/h","10 km/h","100 km/h","20 km/h"],ref:K.altura},{n:4,p:"Si una l\xEDnea de telecomunicaciones queda m\xE1s cerca de lo permitido de la l\xEDnea primaria (media tensi\xF3n), \xBFqu\xE9 se hace?",o:["No se trabaja y se coordina la desconexi\xF3n con la empresa el\xE9ctrica","Se trabaja con guantes de cuero y con cuidado, sin tocar nada","Se trabaja r\xE1pido, antes de que llegue la distribuidora","Se ignora el riesgo si no se ven chispas ni humo en el poste"],ref:K.mt_suspender},{n:4,p:"Umbral de \xABno soltar\xBB de la corriente el\xE9ctrica en el cuerpo:",o:["10 mA","0,5 mA","1 A","100 A"],ref:K.electrico},{n:4,p:"\xBFA partir de qu\xE9 altura un trabajo se considera muy cr\xEDtico y exige rescate en sitio?",o:["M\xE1s de 12 m","M\xE1s de 3 m","M\xE1s de 30 m","M\xE1s de 100 m"],ref:K.emergencias},{n:4,p:"Tras una ca\xEDda, \xBFse mueve a la v\xEDctima?",o:["No, salvo que sea necesario por seguridad","S\xED, siempre, llev\xE1ndola a la sombra del poste","S\xED, para sentarla y darle agua de inmediato","S\xED, para llevarla en el cami\xF3n al hospital"],ref:K.emergencias},{n:4,p:"Un accidente laboral se reporta a la jefatura\u2026",o:["De inmediato, antes de terminar la jornada","Al final de la semana, con el resto de informes","Solo si hubo hospitalizaci\xF3n o incapacidad","No se reporta si fue leve y no dej\xF3 marca"],ref:K.reportes},{n:4,p:"Distancia t\xEDpica de ca\xEDda libre que considera el GS-101 al planificar un sistema antica\xEDdas:",o:["Por lo general, 1,80 m","5 m, seg\xFAn la altura del poste","10 cm, seg\xFAn el tipo de arn\xE9s","No importa la altura del trabajo"],ref:K.altura},{n:4,p:"\xBFCon qu\xE9 viento no se debe trabajar en techos?",o:["Vientos superiores a 60 km/h","Vientos superiores a 30 km/h","Vientos superiores a 90 km/h","El viento no es un factor en techos"],ref:K.t_techo_clima},{n:4,p:"\xBFCu\xE1ndo se deben identificar las l\xE1minas pl\xE1sticas, de policarbonato o tragaluces del techo?",o:["Desde el piso, antes de subir al techo","Cuando ya est\xE1s parado sobre el techo","Solo si llueve fuerte y hay viento","Nunca: no se ven de cerca"],ref:K.t_techo_caminar},{n:4,p:"Para caminar en un techo, \xBFpor d\xF3nde se debe hacer?",o:["Por los clavadores y los lugares m\xE1s c\xE9ntricos del techo","Por el borde del techo, para ver la calle","Por cualquier l\xE1mina, si no se ve da\xF1ada","Por la l\xE1mina m\xE1s cercana a la escalera"],ref:K.t_techo_caminar},{n:4,p:"Si no hay amarre seguro para la escalera, \xBFqu\xE9 es obligatorio?",o:["Que un compa\xF1ero de trabajo sostenga la escalera","Que la escalera se amarre a una l\xE1mina del techo","Que se suba con las manos ocupadas","Nada: la escalera se apoya sola"],ref:K.t_techo_escalera},{n:4,p:"\xBFCu\xE1nto debe sobrepasar la escalera la estructura a la que se apoya?",o:["1 metro o tres pelda\xF1os","30 cent\xEDmetros","No debe sobrepasarla","3 metros"],ref:K.t_techo_escalera},{n:4,p:"Al llegar al nivel del techo, \xBFa qu\xE9 distancia m\xEDnima del borde se debe retirar la persona antes de quitarse el equipo de altura?",o:["1 metro","50 cent\xEDmetros","No hay distancia m\xEDnima","3 metros"],ref:K.t_techo_traslado},{n:5,p:"\xBFQu\xE9 distancia m\xEDnima se exige entre un conductor de telecomunicaciones y una l\xEDnea primaria de media tensi\xF3n?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:K.mt_suspender,e:"Si la l\xEDnea de telecomunicaciones se sospecha a menos de 80 cm de la primaria de media tensi\xF3n, no se realiza ning\xFAn trabajo (GS-101 \xA75.6.9 f)."},{n:5,p:"\xBFQu\xE9 distancia se mantiene entre el conductor telef\xF3nico y el secundario el\xE9ctrico?",o:["0,40 m","0,55 m","0,70 m","2,50 m"],ref:K.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el secundario es de 40 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"\xBFY entre el conductor telef\xF3nico y el neutro?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:K.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el neutro es de 80 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"Una l\xEDnea de telecomunicaciones est\xE1 por encima o al mismo nivel que el secundario. \xBFQu\xE9 se hace?",o:["No se trabaja hasta coordinar con la distribuidora la desconexi\xF3n del circuito durante el trabajo","Se trabaja con cuidado, sin tocar el secundario ni el neutro, y se avisa al jefe de cuadrilla","Se sube con guantes de cuero y casco bien puesto, con la l\xEDnea de vida anclada al poste","Se trabaja de noche, cuando hay menos tr\xE1nsito y menos gente cerca del poste"],ref:K.mt_suspender,e:"GS-101 \xA75.6.9 f): en ese caso se coordina con la empresa de distribuci\xF3n la desconexi\xF3n del circuito durante el tiempo del trabajo."},{n:5,p:"Una persona no calificada quiere cruzar el l\xEDmite de aproximaci\xF3n de una l\xEDnea energizada. \xBFPuede?",o:["No, salvo acompa\xF1ada de una persona calificada","S\xED, si lleva guantes de cuero y casco","S\xED, si el trabajo es corto y se hace r\xE1pido","S\xED, si lleva anteojos de seguridad"],ref:K.mt_frontera,e:"Las personas no calificadas no cruzan ese l\xEDmite a menos que est\xE9n acompa\xF1adas por una persona calificada (GS-101 \xA75.2 w)."},{n:5,p:"Toda l\xEDnea el\xE9ctrica cerca del trabajo se considera\u2026",o:["Activa, hasta verificar lo contrario con la distribuidora","Desactivada si no hay ruido ni chispas en el poste","Activa solo si hay chispas o se oye zumbido","Inactiva si est\xE1 en el poste de telecomunicaciones"],ref:K.mt_activa,e:"Todas las l\xEDneas el\xE9ctricas se consideran activas. Si hace falta verificar el estado de tensi\xF3n, se coordina con la distribuidora (GS-101 \xA75.6.9 h)."},{n:4,p:"\xBFQui\xE9n debe verificar y asegurar el ascenso al poste antes de iniciar la actividad?",o:["El encargado de cuadrilla","El t\xE9cnico que sube","Cada trabajador por separado","Nadie: el ascenso se revisa al terminar"],ref:Qa.inspeccion},{n:4,p:"\xBFQu\xE9 incluye la inspecci\xF3n de poster\xEDa antes del ascenso?",o:["El poste anterior, posterior, local y el tendido entre postes","Solo el poste donde se va a subir y el que tiene al lado","Solo el tendido entre los dos postes m\xE1s cercanos a la casa","Solo los postes de madera que se ven desde la calle"],ref:Qa.inspeccion},{n:4,p:"Si se evidencia alguna de las fallas del \xA75.6.3, \xBFqu\xE9 se hace?",o:["No se realizar\xE1 el trabajo y se realizar\xE1 el reporte a la jefatura de manera inmediata","Se sube con m\xE1s cuidado, revisando cada pelda\xF1o del poste","Se reporta al terminar la jornada, con un informe escrito y firmado","Se apuntala el poste con un puntal de madera y luego se sube"],ref:Qa.inspeccion},{n:4,p:"En un poste de madera, \xBFqu\xE9 da\xF1o por fisuras, quemado o podrido no debe superar la fuente?",o:["Una tercera parte del di\xE1metro","La mitad del di\xE1metro","Cualquier fisura es aceptable","Un cuarto del di\xE1metro"],ref:Qa.inspeccion},{n:4,p:"En un poste de metal, \xBFqu\xE9 perforaciones son falla?",o:["Perforaciones superiores a una tercera parte del di\xE1metro","Cuando hay m\xE1s de una, aunque sean peque\xF1as","Cuando se ven desde el suelo, a simple vista","Nunca, si el poste sigue en pie"],ref:Qa.inspeccion},{n:6,p:"\xBFQu\xE9 equipo de protecci\xF3n exige el GS-101 para la poda de \xE1rboles?",o:["Careta, lentes, protecci\xF3n auditiva, cuerdas de seguridad, casco de cuatro puntos con barbiquejo, guantes para riesgos mec\xE1nicos, ropa y calzado institucionales","Solo casco y guantes de cuero","Arn\xE9s de cuerpo completo y guantes diel\xE9ctricos","Solo lentes: el resto lo decide el encargado"],ref:K.poda_epp},{n:6,p:"\xBFPuede un trabajador subirse a un \xE1rbol para cortar una rama?",o:["No: el trabajador no se sube a un \xE1rbol","S\xED, con cuerdas de seguridad y un compa\xF1ero abajo","S\xED, si la rama es peque\xF1a","S\xED, con arn\xE9s de cuerpo completo"],ref:K.poda_subir},{n:6,p:"Una rama est\xE1 sobre una l\xEDnea energizada. \xBFQu\xE9 se hace?",o:["No se corta: se informa al Ejecutor del Proceso, que coordina con SST y el CLOR","Se corta despacio, con cuidado, sin tocar el cable","Se corta cuando la l\xEDnea se vea sin chispas","Se corta de noche, cuando hay menos gente"],ref:K.poda_linea},{n:6,p:"\xBFQu\xE9 se revisa antes de cada corte de rama?",o:["La distancia a lo energizado, la velocidad y direcci\xF3n del viento y la vegetaci\xF3n que puede interferir con la ca\xEDda","Solo que la motosierra arranque al primer jal\xF3n","Solo que el compa\xF1ero tenga el casco puesto","Nada: la experiencia dice cu\xE1ndo se corta"],ref:K.poda_viento},{n:6,p:"Antes de operar una motosierra, \xBFqu\xE9 condici\xF3n debe cumplir quien la opera?",o:["No estar cansado ni haber tomado medicamentos que alteren la conciencia","Tener un a\xF1o de experiencia, aunque est\xE9 cansado","Haber tomado caf\xE9 para estar alerta","Operarla solo si el supervisor no est\xE1 presente"],ref:K.poda_cansancio},{n:6,p:"\xBFCu\xE1ntos miembros, como m\xEDnimo, forman una cuadrilla de poda de \xE1rboles?",o:["Dos","Uno, si tiene experiencia","Uno, si el \xE1rbol es peque\xF1o","Tres, con un supervisor"],ref:K.poda_cuadrilla},{n:7,p:"\xBFCu\xE1ndo debe usarse el barbiquejo del casco?",o:["Cuando exista posibilidad de desprendimiento del casco por fuertes vientos, espacios confinados, postura corporal y trabajos en altura","Solo cuando el casco es nuevo","Nunca, porque incomoda al trabajar","Solo si el trabajo es de d\xEDa"],ref:K.epp},{n:7,p:"Los rollos de reserva en la galer\xEDa de cable deben tener una longitud\u2026",o:["Entre 20 a 25 m, de acuerdo con las condiciones del sitio","Entre 28 y 35 m, como en los registros","Entre 2 y 5 m","De 100 m siempre"],ref:K.gal_reserva},{n:7,p:"Los rollos de reserva en la galer\xEDa se colocan\u2026",o:["En la pared del lado opuesto al MDF, a la mayor altura posible, partiendo desde la pared final","En la pared del MDF, pegados a los ductos","En el piso, para que queden m\xE1s seguros","En cualquier pared, si hay espacio"],ref:K.gal_reserva},{n:7,p:"Si el rollo de reserva va en la pared del MDF, \xBFcu\xE1nto espacio se deja libre desde la salida de los ductos?",o:["50 cm hacia el fondo de la galer\xEDa","20 cm","1,20 m","No hace falta espacio"],ref:K.gal_50cm},{n:7,p:"\xBFCon qu\xE9 se fija el cable en las galer\xEDas?",o:["Con pletinas peque\xF1as (de 20 cm) y fajas pl\xE1sticas","Con clavos de madera en el muro","Con cinta adhesiva, sin pletinas","Con el cable suelto, para que se mueva"],ref:K.gal_pletinas},{n:7,p:"\xBFCu\xE1ntas placas de identificaci\xF3n se colocan en un rollo de reserva?",o:["Dos placas de identificaci\xF3n","Una sola, en el centro del rollo","Cuatro, dos a cada lado","Ninguna: el rollo no se identifica"],ref:K.gal_placas},{n:8,p:"\xBFQu\xE9 debe tener el personal t\xE9cnico para atender una emergencia en altura?",o:["Botiqu\xEDn b\xE1sico de primeros auxilios y equipos para rescate vertical: cuerdas de seguridad, mosquetones y pull-lift","Solo el botiqu\xEDn del cami\xF3n, si queda lugar","Solo las cuerdas de la escalera, sin mosquetones","Nada: la ayuda llega sola"],ref:K.eri_antes},{n:8,p:"\xBFCu\xE1ndo un trabajo en altura se considera muy cr\xEDtico?",o:["Cuando pasa de 12 metros de altura","Cuando pasa de 3 metros de altura","Cuando hay m\xE1s de dos trabajadores","Cuando llueve o hay viento"],ref:K.eri_criticas},{n:8,p:"Durante un accidente en altura, \xBFqu\xE9 se hace con el \xE1rea y con los trabajos?",o:["Se despeja completamente el \xE1rea y se suspenden de inmediato las actividades","Se sigue trabajando mientras llega la ayuda","Se despeja solo la mitad del \xE1rea, para no atrasar la labor","Se avisa a la cuadrilla de al lado y se sigue trabajando"],ref:K.eri_despejar},{n:8,p:"Durante una emergencia en altura, \xBFc\xF3mo se pide la ayuda de los cuerpos de emergencia?",o:["Por la l\xEDnea telef\xF3nica 9-1-1","Con un mensaje en el grupo de la cuadrilla","Esperando a que llegue la jefatura","Llevando a la v\xEDctima al hospital en la camioneta"],ref:K.eri_911},{n:8,p:"\xBFQu\xE9 maniobra de rescate se puede hacer si la cuadrilla no la conoce?",o:["Ninguna: no se hacen maniobras de rescate de las que no se tenga conocimiento previo","La que parezca m\xE1s r\xE1pida","Cualquiera, si son dos personas en el sitio","La que indique el compa\xF1ero que mira desde abajo"],ref:K.eri_911},{n:8,p:"Durante una emergencia, \xBFqui\xE9n puede dar informaci\xF3n a personas u organizaciones externas?",o:["Solo la direcci\xF3n o el personal autorizado, mediante comunicados oficiales","Cualquier trabajador de la cuadrilla","El compa\xF1ero que est\xE9 m\xE1s cerca de la prensa","Cualquier persona que pregunte, si dice ser familiar"],ref:K.eri_terceros},{n:9,p:"\xBFQu\xE9 es manejar a la defensiva?",o:["Conducir evitando accidentes a pesar de las acciones incorrectas de los dem\xE1s y de las condiciones adversas","Conducir r\xE1pido para pasar menos tiempo en la carretera","Responderles a los dem\xE1s conductores para que respeten","Manejar solo de d\xEDa y con buen clima"],ref:K.sv_defensivo},{n:9,p:"\xBFCu\xE1les son los cinco elementos del manejo defensivo?",o:["Conocimiento, estar alerta, previsi\xF3n, juicio y habilidad","Velocidad, reflejos, fuerza, suerte y experiencia","Licencia, seguro, marchamo, revisi\xF3n t\xE9cnica y placa","Prisa, frustraci\xF3n, cansancio, complacencia y descuido"],ref:K.sv_defensivo},{n:9,p:"\xBFQu\xE9 porcentaje de los accidentes viales tiene origen en el factor humano?",o:["El 90 %","El 10 %","La mitad","El 25 %"],ref:K.sv_humano},{n:9,p:"\xBFCu\xE1les son los cuatro estados que producen errores al conducir?",o:["Prisa, frustraci\xF3n, cansancio y complacencia","Lluvia, neblina, derrumbes y huecos","Alcohol, drogas, f\xE1rmacos y caf\xE9","Velocidad, curvas, pendientes y peraltes"],ref:K.sv_estados},{n:9,p:"La complacencia al volante es\u2026",o:["El exceso de confianza que lleva a relajar la atenci\xF3n","La falta de fuerzas despu\xE9s de un esfuerzo o por no descansar","La respuesta emocional ante un hecho no gestionado","La rapidez con que se hace una cosa"],ref:K.sv_estados},{n:9,p:"\xBFCada cu\xE1nto se revisan los nueve m\xEDnimos de seguridad vehicular?",o:["Todos los d\xEDas antes de salir con el automotor, siempre que aplique","Una vez al mes, en el taller","Solo cuando el veh\xEDculo hace un ruido raro","Una vez al a\xF1o, con la revisi\xF3n t\xE9cnica"],ref:K.sv_minimos},{n:9,p:"\xBFQu\xE9 dispositivos de advertencia deben estar en buen estado?",o:["Luces altas y bajas, de freno e intermitentes, la bocina y dos juegos de tri\xE1ngulos","Solo la bocina","Solo las luces delanteras","El radio y el aire acondicionado"],ref:K.sv_minimos},{n:9,p:"Seg\xFAn la capacitaci\xF3n, \xBFd\xF3nde se recomienda usar las llantas de recauche?",o:["Solo en la parte trasera del automotor","Solo adelante","En las cuatro posiciones","\xDAnicamente como repuesto"],ref:K.sv_minimos},{n:9,p:"\xBFQui\xE9n puede conducir un veh\xEDculo institucional?",o:["El funcionario que cuenta con los permisos de conducir del ICE","Cualquier compa\xF1ero con licencia","El primero que llegue al plantel","El que tenga m\xE1s experiencia, aunque no tenga el permiso"],ref:K.sv_permiso},{n:10,p:"Al empezar a llover, \xBFpor qu\xE9 se pone resbalosa la calle?",o:["Se forma una especie de jab\xF3n con los residuos de tierra, grasa y gasolina","Porque el agua enfr\xEDa el asfalto","Porque las llantas se desinflan con el agua","No cambia nada: el asfalto no resbala"],ref:K.sv_lluvia},{n:10,p:"En caminos con grava, arenosos o mojados, \xBFqu\xE9 pide el GS-101?",o:["Bajar la velocidad y manejar con cuidado","Subir la velocidad para no quedarse pegado","Frenar fuerte en cada curva","Ir pegado al veh\xEDculo de adelante para seguir su ruta"],ref:K.sv_mojado},{n:10,p:"Llueve tan fuerte que la falta de visibilidad es excesiva. \xBFQu\xE9 se hace?",o:["Detener el veh\xEDculo a un costado de la carretera y esperar que pase la tormenta","Seguir igual, con las luces altas","Seguir de cerca al veh\xEDculo de adelante","Acelerar para salir pronto de la tormenta"],ref:K.sv_visibilidad},{n:10,p:"\xBFPor qu\xE9 la neblina es una de las peores condiciones para conducir?",o:["La habilidad del conductor no puede mejorar la visibilidad ni permitirle aumentar la velocidad","Solo afecta a las motocicletas","Hace que el motor pierda potencia","No es peligrosa si se conoce el camino"],ref:K.sv_lluvia},{n:10,p:"Vas acompa\xF1ado y sientes cansancio al volante. \xBFQu\xE9 indica el GS-101?",o:["Detenerte en un sitio seguro, bajarte, caminar y ceder la conducci\xF3n al compa\xF1ero","Pedirle al compa\xF1ero que te hable para no dormirte","Subir el volumen del radio","Abrir la ventana y seguir hasta llegar"],ref:K.sv_fatiga},{n:10,p:"Con una dosis alta, el alcohol provoca\u2026",o:["Dificultad en el habla, incoordinaci\xF3n, juicio alterado y falta de control emocional","Mejores reflejos para manejar","M\xE1s atenci\xF3n en la carretera","Solo sue\xF1o, sin otros efectos"],ref:K.sv_sustancias},{n:10,p:"Observas o causas un da\xF1o al veh\xEDculo. \xBFQu\xE9 haces?",o:["Lo reportas: no se oculta, puede producir un accidente","Lo arreglas t\xFA en la casa","Lo callas si es peque\xF1o","Esperas a que otro compa\xF1ero lo note"],ref:K.sv_danos},{n:11,p:"\xBFCu\xE1ndo se hace el ATS (an\xE1lisis de trabajo seguro)?",o:["Antes de empezar las labores de cada d\xEDa, con toda la cuadrilla","Una vez por semana, solo el encargado","Al terminar la jornada, para el informe","Solo cuando ya hubo un accidente"],ref:K.gs31_ats},{n:11,p:"A media ma\xF1ana cambia el personal o llega otro equipo. \xBFQu\xE9 pide el GS-31?",o:["Aplicar de nuevo el ATS antes de seguir","Nada: el ATS de la ma\xF1ana sigue valiendo","Anotarlo en el informe del d\xEDa siguiente","Que el compa\xF1ero nuevo firme la pizarra sin leerla"],ref:K.gs31_cambios},{n:11,p:"Una tarea cr\xEDtica tiene un grado de criticidad (GC) de 8 o m\xE1s. \xBFQu\xE9 significa?",o:["Criticidad alta: se atiende primero","Criticidad baja: puede esperar","Criticidad moderada","Nada: el GC es solo un tr\xE1mite"],ref:K.gs31_criticidad},{n:11,p:"En la pizarra del ATS aparece un factor de muerte. \xBFQu\xE9 se hace?",o:["Se revisan en conjunto las acciones a implementar","Nada: es solo un dato de la pizarra","Lo resuelve el t\xE9cnico m\xE1s nuevo","Se anota y se revisa al d\xEDa siguiente"],ref:K.ats_muerte},{n:15,p:"Detectas una anomal\xEDa en el trabajo de tu cuadrilla. \xBFA qui\xE9n se lo informas?",o:["Al coordinador de cuadrilla y/o a SST","A nadie, si ya lo corregiste t\xFA","Solo al cliente, al terminar la obra","A la persona que lo hizo, para que lo anote despu\xE9s"],ref:K.rec_anomalia},{n:15,p:"Un compa\xF1ero sufre un accidente. \xBFQu\xE9 formulario se usa y cu\xE1ndo se avisa a la jefatura?",o:["F07-GS-52 Aviso inmediato, antes de terminar la jornada","F06-GS-52, la pr\xF3xima semana","F01-GS-52, al d\xEDa siguiente","Ning\xFAn formulario: basta con avisar en la charla"],ref:K.rec_accidente},{n:15,p:"Hubo un casi incidente y nadie se lastim\xF3. \xBFQu\xE9 formulario se usa?",o:["F06-GS-52 (o F01-GS-52 si fue grave)","F07-GS-52, el aviso inmediato","Ninguno, porque no hubo lesi\xF3n","El F02-CSCON-SST-00-25 con la firma del compa\xF1ero"],ref:K.rec_cuasi},{n:15,p:"Un compa\xF1ero incumple una regla de SST por primera vez, con riesgo bajo. \xBFQu\xE9 se hace?",o:["Retroalimentaci\xF3n positiva y correctiva, registro en el F02-CSCON-SST-00-25 con su firma, y aviso a la jefatura inmediata","Solo se le llama la atenci\xF3n en privado, sin registro","Se guarda para el informe del a\xF1o siguiente","Se le sanciona de inmediato, sin escuchar su versi\xF3n"],ref:K.rec_liderazgo},{n:15,p:"Hay un peligro inminente para las personas durante una tarea. \xBFQu\xE9 se hace?",o:["Se interrumpe la actividad","Se termina la tarea y luego se corrige","Se sigue con m\xE1s cuidado","Se avisa al final de la semana"],ref:K.rec_inminente},{n:16,p:"\xBFC\xF3mo se entra a una planta solar?",o:["Con autorizaci\xF3n, coordinado con el encargado de la planta","Entrando primero y avisando despu\xE9s","Por la cerca, si el port\xF3n est\xE1 cerrado","Como diga el primero que llegue"],ref:K.demo_generacion_autorizacion},{n:16,p:"\xBFCu\xE1ndo produce electricidad un panel solar?",o:["Mientras le da la luz: por eso se trata como energizado","Solo al mediod\xEDa","Solo si el inversor est\xE1 apagado","Nunca, si el panel est\xE1 sucio"],ref:K.demo_generacion_energizado},{n:16,p:"\xBFSe puede pisar o apoyarse en un panel para ver mejor?",o:["No: no se pisa ni se apoya nadie en los paneles","S\xED, si el panel est\xE1 limpio","S\xED, si la fila es corta","S\xED, con una tabla debajo"],ref:K.demo_generacion_no_pisar},{n:16,p:"\xBFQui\xE9n manipula las conexiones y los inversores de la planta?",o:["Solo personal calificado, seg\xFAn el procedimiento de la planta","Cualquier trabajador de la cuadrilla","Quien llegue primero a la caseta","Quien tenga la llave del port\xF3n"],ref:K.demo_generacion_conexiones},{n:16,p:"Ves un cable suelto y pelado en el camino de la planta. \xBFQu\xE9 haces?",o:["No lo tocas: lo marcas y lo reportas","Lo levantas con la mano para pasar","Lo cortas con la herramienta","Lo envuelves con cinta y sigues"],ref:K.demo_generacion_energizado},{n:16,p:"Llega una tormenta el\xE9ctrica mientras trabajan al aire libre. \xBFQu\xE9 indica el GS-101?",o:["Suspender la actividad por las condiciones del clima","Terminar la fila antes de bajar","Seguir trabajando: la tormenta todav\xEDa no ha llegado","Quedarse donde est\xE1n, a esperar"],ref:K.sol_clima},{n:16,p:"Encuentras un panel con el vidrio roto. \xBFQu\xE9 haces?",o:["Lo marcas y lo reportas al encargado de la planta, sin tocarlo","Lo cambias t\xFA, sin avisar","Lo tapas con cinta para la visita","Lo dejas para la pr\xF3xima visita sin avisar"],ref:K.demo_generacion_danos},{n:16,p:"Hace mucho sol y llevan un rato limpiando. \xBFQu\xE9 se hace?",o:["Tomar agua y descansar a la sombra con frecuencia","Seguir sin parar: el agua se toma al final","Quitarse el casco para refrescarse","Tomar solo caf\xE9, para no sudar"],ref:K.demo_generacion_calor},{n:13,p:"\xBFQu\xE9 sirve de apoyo a la escalera a medio vano, si no hay poste?",o:["El veh\xEDculo: la escalera se amarra a \xE9l","Nada: la escalera se apoya sola en el suelo","Solo un compa\xF1ero que la sostenga, sin amarrarla","El peso del trabajador sobre ella"],ref:K.mv_apoyo},{n:13,p:"\xBFEn cu\xE1ntos puntos se amarra la escalera a medio vano?",o:["En dos: al pant\xF3grafo y al eje de una llanta","En uno: basta con el pant\xF3grafo","En tres: se suma la cabina","No se amarra: el peso de la escalera basta"],ref:K.mv_dos_puntos},{n:13,p:"\xBFQu\xE9 nudo da la tensi\xF3n en el amarre a medio vano?",o:["Nudo ocho aplicado","Nudo alondra","Nudo gaza simple","Nudo ocho en l\xEDnea"],ref:K.mv_nudos},{n:13,p:"\xBFC\xF3mo termina el amarre a medio vano?",o:["Con pata de chancho (nudo ballestrinque)","Con un nudo alondra, sin asegurarlo","Con una gaza simple, suelta","Dejando la cuerda sin amarrar para ajustar despu\xE9s"],ref:K.mv_nudos},{n:13,p:"\xBFCon qu\xE9 se sube por una escalera a medio vano?",o:["Con la cuerda de seguridad sujetada a la escalera","Con la cuerda en el hombro, sin sujetarla","Con las manos ocupadas por herramientas","Sin cuerda, si la escalera es corta"],ref:K.mv_subida},{n:13,p:"Una escalera de 24 pies (7,32 m): \xBFhasta qu\xE9 altura de uso sirve?",o:["6,42 m","7,32 m","7,63 m","5,30 m"],ref:K.mv_tabla2},{n:13,p:"\xBFHasta qu\xE9 pelda\xF1o de la escalera se puede trabajar?",o:["Hasta el que alcanza el trabajo, sin llegar a los tres superiores","Hasta el \xFAltimo, para alcanzar mejor","En el tercero de arriba, si hace falta"],ref:K.mv_tres},{n:14,p:"\xBFQu\xE9 abertura m\xEDnima debe tener una cala para instalar el cable?",o:["1,5 m de largo por 1 m de ancho, como m\xEDnimo","1 m de largo por 1 m de ancho","1,5 m de largo por 0,5 m de ancho","0,8 m de largo por 0,8 m de ancho"],ref:K.cala_abertura},{n:14,p:"Si la abertura entre los extremos del ducto mide 40 cm, \xBFcu\xE1nto debe medir la pieza de PVC de reparaci\xF3n?",o:["90 cm: la abertura m\xE1s 50 cm","40 cm: lo mismo que la abertura","50 cm: solo el sobrante","1,20 m: el triple de la abertura"],ref:K.cala_pieza},{n:14,p:"\xBFHacia d\xF3nde queda la abertura del corte longitudinal de la pieza de reparaci\xF3n?",o:["Hacia arriba","Hacia abajo, contra el ducto","Hacia un costado","No importa la posici\xF3n"],ref:K.cala_ranura},{n:14,p:"\xBFCu\xE1ntas amarras de cinta met\xE1lica o tipo gaza llevan la reparaci\xF3n, y d\xF3nde?",o:["Tres: una en cada extremo y una en el centro","Dos: una en cada extremo","Cuatro: una cada 25 cm","Una sola, en el centro"],ref:K.cala_amarras},{n:14,p:"El preformado mide 75 cm o menos. \xBFA qu\xE9 distancia del poste va el cierre de empalme?",o:["75 cm","1,5 m","30 cm","2 m"],ref:K.cala_empalme},{n:14,p:"En el relleno de la cala, \xBFqu\xE9 capa va justo debajo del lastre?",o:["El material de la excavaci\xF3n, compactado al 95 % del Proctor","El tobacemento","El asfalto","La arena suelta"],ref:K.cala_capas},{n:14,p:"En un tramo recto de 1 km o m\xE1s, \xBFcada cu\xE1nto se ponen las anclas de seguridad?",o:["Cada 500 m","Cada 100 m","Cada 1 km, una sola","Solo en el poste m\xE1s alto"],ref:K.cala_anclas},{n:14,p:"\xBFA qu\xE9 distancia del poste se coloca cada ancla de seguridad?",o:["La mitad de la altura del poste, medida del herraje a la base","Un metro, sin importar la altura","Lo mismo que la altura del poste","Cinco metros, siempre"],ref:K.cala_ancla_distancia},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se le pregunta al cliente?",o:["C\xF3mo est\xE1n el cielorraso y la estructura, y si ha visto cables, goteras o avispas","Solo a qu\xE9 hora puede empezar el trabajo","Nada: si desde abajo se ve bien, se sube","Si puede pagar un trabajo extra"],ref:K.cr_cliente},{n:12,p:"Hay un cable el\xE9ctrico expuesto en el cielorraso. \xBFQu\xE9 se le pide al cliente?",o:["Que desconecte la electricidad antes de subir","Nada: se sube con cuidado, sin tocarlo","Que deje el cable al aire para revisarlo mejor","Que avise cuando el cable se caliente"],ref:K.cr_electrico},{n:12,p:"Si no es posible desconectar la electricidad del cielorraso, \xBFcon qu\xE9 se sube?",o:["Con guantes diel\xE9ctricos, despu\xE9s de revisar la zona a trabajar","Con guantes de cuero","Sin guantes, con cuidado","Con cualquier guante de trabajo"],ref:K.cr_electrico},{n:12,p:"Para trabajar en un cielorraso, \xBFqu\xE9 lleva el casco?",o:["Barbiquejo y linterna","Solo el barbiquejo, sin linterna","Solo la linterna, sin barbiquejo","Nada: el casco se usa solo en la calle"],ref:K.cr_epp},{n:12,p:"\xBFQu\xE9 se revisa desde el suelo antes de subir al cielorraso?",o:["Que no haya colmenas de avispas o similares","Solo la hora del d\xEDa","Que la escalera sea de aluminio","Nada: eso se revisa al terminar"],ref:K.cr_avispas},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se valora?",o:["Si una extensi\xF3n de fibra permite evitar subir","Si el cliente tiene caf\xE9","Cu\xE1nto pesa el trabajador","Si el d\xEDa est\xE1 soleado"],ref:K.cr_extension},{n:12,p:"La estructura del cielorraso debe observarse sin\u2026",o:["Corrosi\xF3n avanzada o madera descompuesta, y estable","Pintura nueva","R\xF3tulos de la oficina","Cables de colores"],ref:K.cr_estructura},{n:12,p:"Una escalera de abrir (tipo A) debe ser de\u2026",o:["Fibra de vidrio","Aluminio, siempre","Madera, sin importar el lugar","Cualquier material, si est\xE1 pintada"],ref:K.cr_escalera_tipo},{n:17,p:"En una obra, \xBFc\xF3mo deben estar los tableros y las cajas el\xE9ctricas?",o:["Tapados, identificados y cerrados","Abiertos, para revisar r\xE1pido los interruptores","Cerrados, aunque no tengan identificaci\xF3n","Como los dej\xF3 el \xFAltimo que los us\xF3"],ref:K.el_tablero},{n:17,p:"\xBFQu\xE9 necesita un medidor el\xE9ctrico provisional en la obra?",o:["Base estable y protecci\xF3n del agua","Solo un r\xF3tulo con el nombre de la obra","Estar en el suelo, donde nadie lo golpee","Nada: es provisional"],ref:K.el_medidor},{n:17,p:"\xBFDe qu\xE9 se protegen los conductores el\xE9ctricos en una obra?",o:["De los da\xF1os mec\xE1nicos: maquinaria, veh\xEDculos, agua y qu\xEDmicos","Solo del sol, con pintura","De nada: se cambian cuando se da\xF1an","Solo de la lluvia, con cinta aislante"],ref:K.el_conductores},{n:17,p:"\xBFCon qui\xE9n se aplica la lista de verificaci\xF3n del Anexo C del C\xF3digo El\xE9ctrico?",o:["En conjunto con un t\xE9cnico el\xE9ctrico","Solo, desde la oficina","Con el primer pe\xF3n que est\xE9 libre","Con el cliente, al entregar la obra"],ref:K.el_anexo_c},{n:17,p:"\xBFCu\xE1l de estos es un acto inseguro con electricidad?",o:["Intervenir sin autorizaci\xF3n","Usar el EPP diel\xE9ctrico","Reportar un enchufe deteriorado","Mantener el tablero cerrado"],ref:K.el_autorizacion},{n:17,p:"Con la piel h\xFAmeda o sudada, la resistencia del cuerpo a la corriente\u2026",o:["Baja","Sube","No cambia","Depende solo del calzado"],ref:K.el_mojado},{n:17,p:"\xBFQu\xE9 factores influyen en la magnitud de un incidente el\xE9ctrico?",o:["Intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria","Solo el color del cable","Solo la hora del d\xEDa","La marca del tablero y del medidor"],ref:K.el_factores},{n:17,p:"Seg\xFAn el Anexo B, una instalaci\xF3n es de peligro inminente o alto riesgo cuando\u2026",o:["Carece de protecci\xF3n frente al contacto con partes energizadas o el cortocircuito","Tiene m\xE1s de un tablero","Es provisional, aunque cumpla con todo","Alguien ya se lastim\xF3 en ella"],ref:K.el_anexo_b}],NA={registro:{titulo:"Una persona camina mirando el celular hacia el registro abierto",opciones:[{t:"STOP: Andr\xE9s la detiene y la gu\xEDa por fuera del \xE1rea se\xF1alizada",ok:!0},{t:"Le gritamos desde adentro del registro",ok:!1},{t:"Seguimos: los conos ya est\xE1n puestos",ok:!1},{t:"Ponemos la tapa encima con el compa\xF1ero adentro",ok:!1}],explicacion:"Un registro abierto es un hueco en plena acera. El per\xEDmetro se asegura con se\xF1alizaci\xF3n vial y peatonal y, si alguien entra al \xE1rea, se detiene la labor y se le gu\xEDa fuera.",ref:K.ev_registro,consecuencia:"La persona tropez\xF3 con el borde del registro y por poco cae adentro, sobre tu compa\xF1ero."},impaciente:{titulo:"Un conductor impaciente ignora el ALTO del banderero",opciones:[{t:"STOP: todos fuera de la calzada, dejamos pasar al veh\xEDculo y luego retomamos el control del tr\xE1nsito",ok:!0},{t:"Andr\xE9s se planta frente al auto para obligarlo a frenar",ok:!1},{t:"Seguimos pasando el cable: ya va a frenar",ok:!1},{t:"Le gritamos y le golpeamos el auto cuando pase",ok:!1}],explicacion:"Ninguna paleta detiene a un auto que no quiere detenerse. Ante un conductor que no respeta la se\xF1al, se evacua la calzada y nadie se le atraviesa; despu\xE9s se retoma el control (y se reporta si es necesario).",ref:K.ev_impaciente,consecuencia:"El auto pas\xF3 a cent\xEDmetros de Andr\xE9s, que estaba en medio de la calzada con la gu\xEDa del cable. La paleta ALTO no es un escudo."},peaton:{titulo:"Una persona entr\xF3 al \xE1rea se\xF1alizada",opciones:[{t:"Detengo la labor y pido a Andr\xE9s que gu\xEDe a la persona fuera del \xE1rea",ok:!0},{t:"Sigo tensando: ya casi termino",ok:!1},{t:"Le grito desde arriba que se aleje, sin dejar de trabajar",ok:!1},{t:"Bajo r\xE1pido por la escalera para sacarla yo",ok:!1}],explicacion:"El \xE1rea restringida protege a terceros de la ca\xEDda de herramientas o materiales. Se detiene la labor hasta despejarla.",ref:K.demarcacion,consecuencia:"Un herraje se solt\xF3 y cay\xF3 a medio metro de la persona. Nadie sali\xF3 herido, pero pudo terminar en tragedia."},companero:{titulo:"Andr\xE9s quiere subir a la escalera para ayudarte",opciones:[{t:"Lo detengo: solo un trabajador en la escalera; que suba el material con la cuerda",ok:!0},{t:"Que suba, son solo unos segundos",ok:!1},{t:"Que suba hasta la mitad y desde ah\xED me pase el herraje",ok:!1},{t:"Que me lance el herraje desde abajo",ok:!1}],explicacion:"Sobre la escalera port\xE1til se permite un solo trabajador. Los materiales se suben con bolso, mecate o cuerda.",ref:K.escaleras,consecuencia:"Con dos personas encima, la escalera se torci\xF3 en el amarre medio. Los dos quedaron colgando de la l\xEDnea de vida."},vehiculo:{titulo:"Un veh\xEDculo se acerca r\xE1pido al \xE1rea de trabajo",opciones:[{t:"Detengo la labor; Andr\xE9s regula el paso con la se\xF1alizaci\xF3n y esperamos a que pase",ok:!0},{t:"Sigo trabajando: los conos son suficientes",ok:!1},{t:"Bajo corriendo a quitar los conos del camino",ok:!1},{t:"Le hago se\xF1as desde la escalera sin dejar de trabajar",ok:!1}],explicacion:"La se\xF1alizaci\xF3n vial protege a la cuadrilla. Si un veh\xEDculo no respeta el \xE1rea, se detiene la labor y se regula el tr\xE1nsito antes de continuar.",ref:K.demarcacion,consecuencia:"El auto pas\xF3 rozando la escalera: la sacudida casi te tira. La se\xF1alizaci\xF3n sola no basta si nadie vigila el tr\xE1nsito."},tormenta:{titulo:"La lluvia se volvi\xF3 torrencial y hay rayer\xEDa",opciones:[{t:"Suspendo: aseguro herramientas, desciendo con tres puntos de apoyo y espero a que pase",ok:!0},{t:"Termino r\xE1pido el tensado antes de bajar",ok:!1},{t:"Me quedo arriba esperando a que escampe",ok:!1},{t:"Me quito los guantes mojados para tener m\xE1s agarre",ok:!1}],explicacion:"Se proh\xEDbe el trabajo en altura con tormenta el\xE9ctrica, lluvia torrencial o vientos de 60 km/h o m\xE1s.",ref:K.altura,consecuencia:"Un rayo cay\xF3 a dos cuadras. Con el agua, los pelda\xF1os quedaron resbalosos y perdiste un apoyo al bajar."},viento:{titulo:"Una r\xE1faga supera los 60 km/h mientras la cuadrilla trabaja en el techo",opciones:[{t:"Suspender la labor y bajar del techo, anclados a la l\xEDnea vertical de la escalera",ok:!0},{t:"Seguir: la r\xE1faga pasa en unos segundos",ok:!1},{t:"Seguir agachados, sin soltar el trabajo",ok:!1},{t:"Bajar de un salto para no esperar la escalera",ok:!1}],consecuencia:"Con vientos superiores a 60 km/h no se trabaja en techos.",explicacion:"No se debe trabajar en techos con vientos superiores a 60 km/h. Se suspende la labor y se baja de forma segura.",ref:K.t_techo_clima},presion:{titulo:"Andr\xE9s quiere subir ya: \xABel poste local se ve bien\xBB",opciones:[{t:"Seguimos: se inspeccionan el poste anterior, el local, el posterior y el tendido antes de subir",ok:!0},{t:"Subimos: el poste local est\xE1 bien",ok:!1},{t:"Que suba Andr\xE9s a revisar, es r\xE1pido",ok:!1},{t:"Subimos y revisamos los dem\xE1s postes despu\xE9s",ok:!1}],explicacion:"El encargado de cuadrilla verifica y asegura el ascenso al poste antes de iniciar la actividad. La inspecci\xF3n incluye el poste anterior, el posterior, el local y el tendido entre postes.",ref:Qa.inspeccion,consecuencia:"El poste posterior ten\xEDa una falla visible. Subir sin inspeccionarlo habr\xEDa sido hacerlo sobre un poste no verificado."},poda_peaton:{titulo:"Un peat\xF3n camina por la acera y entra en la zona de ca\xEDda de la rama",opciones:[{t:"STOP: se detiene la labor y un compa\xF1ero lo gu\xEDa fuera de la zona se\xF1alizada",ok:!0},{t:"Le gritamos, pero seguimos cortando",ok:!1},{t:"Seguimos: la rama ya cay\xF3",ok:!1},{t:"Que pase r\xE1pido por debajo de la rama",ok:!1}],explicacion:"Mientras haya una rama por caer o ca\xEDda en la zona, la labor se detiene y se regula el paso: nadie camina dentro de la zona de ca\xEDda (GS-101 \xA75.6.10 n y o).",ref:K.poda_trayectoria,consecuencia:"La persona qued\xF3 bajo la rama. Quien corta debe detener la labor a tiempo."},galeria_vigia:{titulo:"El compa\xF1ero de afuera deja de responder desde la tapa mientras est\xE1s en la galer\xEDa",opciones:[{t:"STOP: se detiene la labor y quien est\xE1 adentro sale por la escalera",ok:!0},{t:"Seguimos: el compa\xF1ero seguro est\xE1 atento",ok:!1},{t:"Gritamos desde el fondo de la galer\xEDa y seguimos con las pletinas",ok:!1},{t:"Dejamos el detector y seguimos cerca del rollo",ok:!1}],explicacion:"Sin contacto con quien vigila la tapa, se detiene la labor y se sale. La fuente no describe la comunicaci\xF3n en espacios confinados: se anota como duda en PENDIENTES_SST.md (J10).",ref:K.gal_vigia,consecuencia:"Quien estaba adentro sigui\xF3 trabajando sin que nadie lo viera desde la tapa."}};var FA=V_.filter(a=>a.n===5);var lm=[{urls:"stun:stun.l.google.com:19302"}],j_=11;function cm({sala:a,id:e,alMensaje:t,alPar:n}){let i=`realtime:mundo-${a}`,r={ws:"conectando",rtt:null,pares:new Map,presencia:!1},s,o=0,c=!1,l=!1,d=0,u=[],h=(x,S,w=i)=>{s?.readyState===1&&s.send(JSON.stringify({topic:w,event:x,payload:S,ref:String(++o)}))},f=(x,S)=>h("broadcast",{type:"broadcast",event:x,payload:S});function g(){r.ws="conectando",c=!1,s=new WebSocket(`${Tu.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${Tu.llave}&vsn=1.0.0`),s.onopen=()=>h("phx_join",{config:{broadcast:{self:!0},presence:{key:e},private:!1}}),s.onerror=()=>{r.ws="error"},s.onclose=()=>{r.ws!=="error"&&(r.ws="cerrado"),l||setTimeout(g,3e3)},s.onmessage=x=>{let S=JSON.parse(x.data);if(S.topic===i){if(S.event==="phx_reply"&&!c){if(S.payload?.status!=="ok"){r.ws="rechazado";return}c=!0,r.ws="unido",h("presence",{type:"presence",event:"track",payload:{id:e}}),f("eco",{id:e,t:performance.now()})}else if(S.event==="presence_state"){for(let w of Object.keys(S.payload))v(w);r.presencia=!0}else if(S.event==="presence_diff"){for(let w of Object.keys(S.payload.joins??{}))v(w);for(let w of Object.keys(S.payload.leaves??{}))w in(S.payload.joins??{})||m(w)}else if(S.event==="broadcast"){let w=S.payload.payload;S.payload.event==="eco"?w.id===e&&(r.rtt=performance.now()-w.t):w.de===e||r.pares.has(w.de)&&(S.payload.event==="rtc"?w.a===e&&w.sdp&&_(w).catch(()=>{}):(S.payload.event==="m"&&!r.pares.get(w.de).directo||S.payload.event==="f")&&t(w.m,w.de))}}}}function v(x){if(x===e||r.pares.has(x)||r.pares.size>=j_)return;let S={id:x,pc:null,canal:null,directo:!1,rtt:null};r.pares.set(x,S),n?.(x,!0),typeof RTCPeerConnection<"u"&&e<x&&M(S).catch(()=>{})}function m(x){let S=r.pares.get(x);S&&(S.pc?.close(),r.pares.delete(x),n?.(x,!1))}function p(x,S){x.canal=S,S.onopen=()=>{x.directo=!0},S.onclose=()=>{x.directo=!1},S.onmessage=w=>{let D=JSON.parse(w.data);D.t==="ping"?S.send(JSON.stringify({t:"pong",v:D.v})):D.t==="pong"?x.rtt=performance.now()-D.v:t(D,x.id)}}let b=x=>new Promise(S=>{if(x.iceGatheringState==="complete")return S();let w=setTimeout(S,2e3);x.addEventListener("icegatheringstatechange",()=>{x.iceGatheringState==="complete"&&(clearTimeout(w),S())})});async function M(x){x.pc?.close(),x.tOferta=performance.now(),x.intentos=(x.intentos??0)+1;let S=x.pc=new RTCPeerConnection({iceServers:lm});p(x,S.createDataChannel("m",{ordered:!1,maxRetransmits:0})),await S.setLocalDescription(await S.createOffer()),await b(S),f("rtc",{de:e,a:x.id,sdp:S.localDescription})}async function _({de:x,sdp:S}){let w=r.pares.get(x);if(S.type==="offer"){w.pc?.close();let D=w.pc=new RTCPeerConnection({iceServers:lm});D.ondatachannel=F=>p(w,F.channel),await D.setRemoteDescription(S),await D.setLocalDescription(await D.createAnswer()),await b(D),f("rtc",{de:e,a:x,sdp:D.localDescription})}else await w.pc?.setRemoteDescription(S)}function A(x){let S=JSON.stringify(x),w=!1;for(let F of r.pares.values())F.directo&&F.canal.readyState==="open"?F.canal.send(S):w=!0;let D=performance.now();w&&c&&D-d>500&&(d=D,f("m",{de:e,m:x}))}let E=x=>f("f",{de:e,m:x});u.push(setInterval(()=>h("heartbeat",{},"phoenix"),25e3)),u.push(setInterval(()=>{c&&f("eco",{id:e,t:performance.now()});for(let x of r.pares.values())x.directo&&x.canal.readyState==="open"?x.canal.send(JSON.stringify({t:"ping",v:performance.now()})):c&&e<x.id&&typeof RTCPeerConnection<"u"&&x.intentos<5&&performance.now()-x.tOferta>7e3&&M(x).catch(()=>{})},4e3)),g();function T(){l=!0,u.forEach(clearInterval);for(let x of[...r.pares.keys()])m(x);s?.close()}return{estado:r,enviar:A,fiable:E,cerrar:T}}var wu=(a,e)=>Math.max(1,Math.round(a*(e==="aprendiz"?.65:1))),Cu=(a,e)=>Math.max(0,a-e),q_=(a,e)=>Math.min(100,a+e*.25),dm=a=>a>=90?3:a>=75?2:a>=60?1:0;function um(a){let e=100;for(let t of a)e=t.tipo==="acierto"?q_(e,t.puntos):Cu(e,t.puntos);return e}var hm={encargado:{nombre:"Encargado de cuadrilla",corto:"Encargado",icono:"\u{1F4CB}",camisa:3108789,resumen:"Dirige el ATS, inspecciona el poste y comprueba la conexi\xF3n antes del ascenso."},sst:{nombre:"SST \xB7 prevencionista",corto:"SST",icono:"\u{1F9BA}",camisa:4170603,resumen:"Verifica el EPP y el \xE1rea de trabajo antes de que alguien suba."},liniero:{nombre:"Liniero",corto:"Liniero",icono:"\u{1F9D7}",camisa:16040475,resumen:"Lleva conos y cuerdas, arma el per\xEDmetro, sube y se asegura arriba."},auxiliar1:{nombre:"Auxiliar 1",corto:"Auxiliar 1",icono:"\u{1FA9C}",camisa:15304235,resumen:"Inspecciona y carga la escalera, la levanta a 75\xB0 y tensa la cuerda."},auxiliar2:{nombre:"Auxiliar 2",corto:"Auxiliar 2",icono:"\u{1FAA2}",camisa:13199902,resumen:"Carga la escalera, la presenta al poste y la amarra a media altura."}},pm=8,fm=["Listo","\xA1Alto!","Espera un momento","Escalera amarrada","Subiendo","Necesito ayuda"],mm=[{id:"ats",rol:"encargado",lugar:"pickup",nombre:"ATS del d\xEDa",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"\xBFC\xF3mo empieza la jornada?",opciones:["Con el ATS: toda la cuadrilla analiza los riesgos de la tarea y se reparten las funciones","Cada quien toma su equipo y el riesgo se analiza si aparece un problema","El encargado llena el ATS solo, mientras los dem\xE1s adelantan el trabajo"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"epp",rol:"sst",lugar:"pickup",nombre:"Revisar el EPP de la cuadrilla",accion:"Revisar el EPP",fisico:[],antes:["ats"],puntos:8,pregunta:"\xBFCu\xE1ndo se revisa el equipo de protecci\xF3n?",opciones:["Antes de usarlo, a la vista y con sus pruebas; lo que tenga defecto no se usa y se pide el cambio","Una vez por semestre, en la revisi\xF3n planificada con SST","Solo cuando es nuevo o cuando el da\xF1o se nota desde lejos"],porque:"Cada quien revisa su EPP antes de usarlo; el equipo de altura con defecto no se usa.",ref:"GS-101 \xB7 \xA75.3.8 a) EPP revisado antes de su uso y \xA75.5 f) equipo de altura con defecto no se usa (p\xE1gs. 17 y 19)"},{id:"inspeccion",rol:"auxiliar1",lugar:"pickup",nombre:"Inspeccionar la escalera",accion:"Inspeccionar la escalera",fisico:[],antes:["ats"],puntos:8,pregunta:"Antes de bajar la escalera del pick-up\u2026",opciones:["Reviso que no tenga piezas faltantes, da\xF1adas o flojas y que los pelda\xF1os est\xE9n limpios","Nada: con la inspecci\xF3n de cada a\xF1o es suficiente","La reviso arriba, cuando ya est\xE9 apoyada en el poste"],porque:"La escalera se inspecciona cada vez que se usa, antes de subir.",ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"cuerdas",rol:"liniero",lugar:"pickup",nombre:"Tomar conos y cuerdas",accion:"Tomar conos y cuerdas",fisico:[],antes:["ats"],puntos:6,pregunta:"\xBFQu\xE9 cuerda llevas para asegurar la escalera?",opciones:["Cuerda de seguridad est\xE1tica de 10 mm y 12 m, con capacidad de 24 kN","El mecate de nailon que haya en el pick-up","Cualquier cuerda, si se le hacen suficientes nudos"],porque:"El amarre se hace con cuerda de seguridad est\xE1tica de 10 mm, 12 m y 24 kN.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda de seguridad est\xE1tica de 10 mm, 12 m de largo y 24 kN (p. 26)"},{id:"tomar",rol:"auxiliar1",lugar:"pickup",nombre:"Bajar la escalera entre dos",accion:"Tomar la escalera",fisico:[],antes:["inspeccion"],puntos:8,pregunta:"La escalera es de 28 pies (8,53 m). \xBFC\xF3mo se traslada?",opciones:["Entre dos personas, deposit\xE1ndola, sin tirarla","La lleva uno solo al hombro, para ir m\xE1s r\xE1pido","Entre dos, y al llegar se deja caer junto al poste"],porque:"Desde 28 pies la escalera se traslada y se coloca entre dos, y se deposita: no se tira.",ref:"GS-101 \xB7 \xA75.6.4 a) y o) Escalera de 28 pies o m\xE1s: trasladada y colocada por 2 personas (p\xE1gs. 22\u201323)"},{id:"tomar2",rol:"auxiliar2",lugar:"pickup",nombre:"Tomar el otro extremo",accion:"Tomar el otro extremo de la escalera",fisico:[],antes:["inspeccion"],puntos:4,ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"llegada",rol:"auxiliar1",auto:!0,lugar:"poste",nombre:"Llevar la escalera al poste",fisico:["tomar","tomar2"],antes:[],puntos:0},{id:"poste",rol:"encargado",lugar:"poste",nombre:"Inspeccionar el poste",accion:"Inspeccionar el poste",fisico:[],antes:["ats"],puntos:10,pregunta:"\xBFQu\xE9 revisas antes de autorizar el ascenso al poste?",opciones:["Que no se mueva, no est\xE9 inclinado ni da\xF1ado; y tambi\xE9n el poste anterior, el posterior y el tendido","Solo que este poste est\xE9 a plomo; los vecinos no importan","Nada: si ayer se subi\xF3, hoy tambi\xE9n se puede"],porque:"El encargado inspecciona el poste, el anterior, el posterior y el tendido; con fallas no se trabaja y se reporta.",ref:"GS-101 \xB7 \xA75.6.3 Inspecci\xF3n de poster\xEDa por el encargado de cuadrilla (p. 21)"},{id:"perimetro",rol:"liniero",lugar:"poste",nombre:"Armar el per\xEDmetro",accion:"Colocar conos y cinta",fisico:["llegada","cuerdas"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se cierra el \xE1rea de la escalera?",opciones:["Con cinta y conos, a 2 m como m\xEDnimo alrededor de la escalera","Con un cono al pie de la escalera","En la acera no hace falta: solo en la calzada"],porque:"El \xE1rea se cierra y se se\xF1aliza a un m\xEDnimo de 2 m de la escalera.",ref:"GS-101 \xB7 \xA75.6.4 g) Cerramiento y se\xF1alizaci\xF3n a un m\xEDnimo de 2 m de la escalera (p\xE1gs. 22\u201323)"},{id:"cuerda_extension",rol:"liniero",lugar:"poste",nombre:"Cuerda en la extensi\xF3n",accion:"Instalar la cuerda en la escalera",fisico:["llegada","cuerdas"],antes:["poste"],puntos:10,pregunta:"Antes de levantar la escalera, \xBFd\xF3nde va la cuerda de seguridad?",opciones:["En el \xFAltimo pelda\xF1o de la extensi\xF3n: rodea el poste por detr\xE1s y baja por el frente; ser\xE1 la l\xEDnea de vida vertical","Se amarra cuando el liniero ya est\xE9 arriba","En el primer pelda\xF1o, para que no estorbe"],porque:"La cuerda se instala previamente en el \xFAltimo pelda\xF1o de la extensi\xF3n y, al bajar por el frente, es la l\xEDnea de vida vertical.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda en el \xFAltimo pelda\xF1o de la extensi\xF3n; sirve como l\xEDnea de vida vertical (p\xE1gs. 24\u201325)"},{id:"orientar",rol:"auxiliar2",lugar:"poste",nombre:"Presentar la escalera al poste",accion:"Presentar la escalera",fisico:["llegada"],antes:["cuerda_extension"],puntos:6,pregunta:"\xBFC\xF3mo queda la escalera frente al poste?",opciones:["La secci\xF3n fija hacia el poste; la que sube y baja, de frente al trabajador","La secci\xF3n que sube y baja, hacia el poste","De lado, apoyada en un solo larguero"],porque:"La parte fija queda hacia el poste y la que asciende y desciende, de frente al trabajador.",ref:"GS-101 \xB7 \xA75.6.5 a) Escalera de frente: la parte fija hacia el poste (p. 24)"},{id:"colocar",rol:"auxiliar1",lugar:"poste",nombre:"Levantar la escalera a 75\xB0",accion:"Levantar la escalera",fisico:["orientar"],antes:[],puntos:10,pregunta:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera?",opciones:["75\xB0: con la punta de los zapatos en la base y los brazos estirados, los dedos tocan los pelda\xF1os","60\xB0: m\xE1s acostada es m\xE1s estable","85\xB0: casi vertical, pegada al poste"],porque:"La escalera va a 75\xB0, o se comprueba con la prueba de los zapatos y los brazos estirados. Es lo mismo que separar la base un cuarto del largo de la escalera.",ref:"GS-101 \xB7 \xA75.6.5 a) \xC1ngulo de 75\xB0 o prueba de los brazos estirados (p. 24) \xB7 GS-98: base separada un cuarto de la longitud"},{id:"tensar",rol:"auxiliar1",lugar:"poste",nombre:"Tensar la cuerda que baja",accion:"Tensar la cuerda",fisico:["colocar","cuerda_extension"],antes:[],puntos:8,pregunta:"La cuerda baja por el frente y pasa por el primer pelda\xF1o. \xBFCon qu\xE9 nudo se bloquea al final?",opciones:["Con un ballestrinque (pata de chancho), despu\xE9s de tensarla con el ocho en l\xEDnea","Con un nudo corredizo, para soltarla r\xE1pido","Con varias vueltas al larguero, sin nudo"],porque:"Se tensa con el ocho en l\xEDnea o la gaza y se termina con una pata de chancho que bloquea la cuerda.",ref:"GS-101 \xB7 \xA75.6.5 c) Tensar con ocho en l\xEDnea o gaza y terminar con pata de chancho (p\xE1gs. 25\u201326)"},{id:"amarre_medio",rol:"auxiliar2",lugar:"poste",nombre:"Amarrar a media altura",accion:"Amarrar la escalera al poste",fisico:["colocar"],antes:[],puntos:10,pregunta:"\xBFEn cu\xE1ntos puntos debe quedar sujeta la escalera al poste?",opciones:["En dos como m\xEDnimo: arriba y en la parte media, con la cuerda de 12 m","En uno: con el amarre de arriba es suficiente","En ninguno, si un compa\xF1ero la sostiene"],porque:"El amarre en la parte media se hace siempre: la escalera queda sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea",accion:"Verificar el \xE1rea de trabajo",fisico:["colocar"],antes:["perimetro","tensar","amarre_medio","epp"],puntos:8,pregunta:"\xBFQu\xE9 confirmas antes de dar el visto bueno al ascenso?",opciones:["Per\xEDmetro armado, escalera amarrada en dos puntos y sin vientos fuertes, lluvia torrencial ni rayer\xEDa","Que el liniero tenga prisa: entre m\xE1s r\xE1pido, menos exposici\xF3n","Solo el per\xEDmetro; el clima se valora si alguien se queja"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:"GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23) \xB7 GS-98: el prevencionista verifica las condiciones antes de la tarea en altura"},{id:"carrito",rol:"liniero",lugar:"poste",nombre:"Conectar el carrito",accion:"Conectar el carrito a la cuerda",fisico:["colocar","cuerda_extension"],antes:["tensar"],puntos:12,pregunta:"El carrito (freno de cuerda) corre por la l\xEDnea de vida vertical. \xBFA qu\xE9 parte del arn\xE9s se conecta?",opciones:["A la argolla frontal, la del pecho","Al portaganchos del arn\xE9s","A una argolla lateral de la cadera"],porque:"La detenci\xF3n de ca\xEDdas solo se conecta a la argolla dorsal o a la pectoral. El portaganchos y las argollas laterales no detienen una ca\xEDda.",ref:"GS-98 \xB7 Sistemas personales de detenci\xF3n de ca\xEDdas: solo argollas de detenci\xF3n dorsal o pectoral \xB7 GS-101 \xA75.6.1 f) Freno para cuerda (p. 20)"},{id:"conexion",rol:"encargado",lugar:"poste",nombre:"Comprobar la conexi\xF3n",accion:"Comprobar la conexi\xF3n del liniero",fisico:["carrito"],antes:["area"],puntos:12,pregunta:"El liniero ya se conect\xF3. \xBFQu\xE9 haces antes de que suba?",opciones:["Compruebo con mis manos su conexi\xF3n y su arn\xE9s: un compa\xF1ero siempre la revisa","Le pregunto si est\xE1 listo y conf\xEDo en su palabra","Lo dejo subir y lo reviso desde abajo, a la vista"],porque:"Antes de subir, un compa\xF1ero comprueba que la conexi\xF3n est\xE9 correcta (conexi\xF3n falsa).",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)"},{id:"subir",rol:"liniero",lugar:"poste",nombre:"Subir la escalera",accion:"Subir",fisico:["colocar"],antes:["perimetro","amarre_medio","carrito","conexion"],puntos:12,pregunta:"\xBFC\xF3mo se sube?",opciones:["De frente, con las manos libres y tres puntos de apoyo; la herramienta sube por cuerda y no uso los tres pelda\xF1os de arriba","Con la herramienta en una mano y agarrado con la otra","Hasta el \xFAltimo pelda\xF1o, para alcanzar mejor"],porque:"Se sube de frente con tres puntos de apoyo, la herramienta sube por cuerda y los tres pelda\xF1os superiores est\xE1n prohibidos.",ref:"GS-101 \xB7 \xA75.6.4 j) y k) Tres puntos de apoyo; Tabla 2: prohibidos los tres pelda\xF1os superiores (p\xE1gs. 22\u201323)"},{id:"faja",rol:"liniero",lugar:"arriba",nombre:"Faja de posicionamiento",accion:"Colocar la faja de posicionamiento",fisico:["subir"],antes:[],puntos:12,pregunta:"\xBFC\xF3mo se coloca la faja de posicionamiento (estrobo)?",opciones:["De una argolla lateral, en M por un pelda\xF1o y al menos 3 cables de fibra, hasta la otra argolla lateral","Las dos puntas al portaganchos del arn\xE9s","Una punta a una argolla lateral y la otra suelta, para moverme mejor"],porque:"La faja va de argolla lateral a argolla lateral, abrazando en M un pelda\xF1o y al menos 3 cables de fibra. Sola no detiene una ca\xEDda: por eso sigue la l\xEDnea de vida.",ref:"GS-101 \xB7 \xA75.6.1 d) Faja de posicionamiento (estrobo) \xB7 GS-98: el posicionamiento no protege contra ca\xEDdas por s\xED solo \xB7 forma en M: pr\xE1ctica de la cuadrilla, en revisi\xF3n por Salud Ocupacional"},{id:"linea_vida",rol:"liniero",lugar:"arriba",nombre:"L\xEDnea de vida",accion:"Anclar la l\xEDnea de vida",fisico:["faja"],antes:[],puntos:12,pregunta:"\xBFD\xF3nde va la l\xEDnea de vida de tu argolla dorsal?",opciones:["A un punto de anclaje seguro, de preferencia arriba de la cabeza","Al mismo pelda\xF1o donde tengo la faja","A los cables de fibra"],porque:"La l\xEDnea de vida va del anillo dorsal a un punto de anclaje, de preferencia arriba de la cabeza. Un pelda\xF1o o un cable no son puntos de anclaje.",ref:"GS-101 \xB7 \xA75.5 h) e i) L\xEDnea de vida en el anillo dorsal, a un anclaje arriba de la cabeza (p. 19) \xB7 GS-98: el anclaje soporta 2 268 kg por persona"}];var gm={encargado:"Planifica el cruce en el ATS, revisa la ruta y las distancias a las l\xEDneas el\xE9ctricas y comprueba la altura final.",sst:"Se\xF1aliza la calle, detiene el tr\xE1nsito mientras el cable cruza y lo libera al final.",liniero:"Sube a P05, coloca la polea, hala y tensa el cable, lo fija con preformado y deja la reserva.",auxiliar1:"Monta la bobina en P04, cuida la curvatura del cable y coloca los conos en la calle.",auxiliar2:"Amarra la gu\xEDa al cable y cruza la calle con ella cuando el tr\xE1nsito est\xE1 detenido."},xm=["Listo","\xA1Alto!","Espera un momento","Tr\xE1nsito detenido","Halando","Necesito ayuda"],Os="GS-101 \xB7 \xA75.6.2 Demarcaci\xF3n: cinta amarilla de precauci\xF3n, conos reflectivos y rotulaci\xF3n (p. 21)",bm=[{id:"t_ats",rol:"encargado",lugar:"pickup",nombre:"ATS del tendido",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"El cable nuevo va de P04 a P05 y cruza la calle. \xBFCu\xE1ndo se analiza ese riesgo?",opciones:["En el ATS, antes de empezar y con toda la cuadrilla: el cruce, el tr\xE1nsito y qui\xE9n hace qu\xE9","Cuando el cable ya est\xE9 sobre la calle, si hay tr\xE1nsito","El encargado lo anota solo; los dem\xE1s van sacando la bobina"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"t_ruta",rol:"encargado",lugar:"poste",nombre:"Revisar la ruta",accion:"Revisar postes y retenidas",fisico:[],antes:["t_ats"],puntos:10,pregunta:"Antes de tender, \xBFqu\xE9 revisas en la ruta del cable?",opciones:["Que los postes, las retenidas y las anclas est\xE9n en buen estado, aplomados, anclados y con la altura adecuada","Solo el poste donde va a subir el liniero","Nada: los postes los revisa el due\xF1o de la poster\xEDa"],porque:"Antes de un tendido a\xE9reo se comprueba que postes, retenidas y anclas est\xE9n en buen estado, aplomados, anclados y con la altura adecuada.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 a) Preparaci\xF3n antes de instalar: postes, retenidas y anclas (p. 23)"},{id:"t_distancias",rol:"encargado",lugar:"poste",nombre:"Distancias a lo el\xE9ctrico",accion:"Revisar las distancias",fisico:[],antes:["t_ruta"],puntos:12,pregunta:"P05 tiene un transformador. \xBFPor d\xF3nde va el cable nuevo?",opciones:["Nunca sobre el transformador ni sobre l\xEDneas el\xE9ctricas: a 40 cm de la secundaria (80 cm del neutro si no hay secundaria) y a 1 m de las ramas","Por encima del transformador, donde no estorba a nadie","Pegado a la secundaria: es de baja tensi\xF3n"],porque:"Ning\xFAn cable se instala sobre un transformador o una l\xEDnea el\xE9ctrica. Distancias m\xEDnimas: 40 cm a la secundaria, 80 cm al neutro si no hay secundaria, 50 cm a r\xF3tulos y 1 m a ramas.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 b) y c) Distancias a l\xEDneas el\xE9ctricas, r\xF3tulos y ramas; nunca sobre transformador (p. 23)"},{id:"t_senal",rol:"sst",lugar:"calle",nombre:"Se\xF1alizar la calle",accion:"Se\xF1alizar el cruce",fisico:[],antes:["t_ats"],puntos:10,pregunta:"El cable va a pasar sobre la calle. \xBFC\xF3mo se asegura el \xE1rea?",opciones:["Se delimita con conos y cinta, se advierte a los conductores y una persona por sentido regula el tr\xE1nsito mientras el cable cruza","Un cono junto a cada poste; la calle sigue igual","No hace falta: el cable va por arriba"],porque:"La zona de trabajo se delimita con cinta, conos y rotulaci\xF3n seg\xFAn la zona. Para pasar el cable sobre la calle, una persona regula el tr\xE1nsito en cada sentido.",ref:`${Os} \xB7 un banderero por sentido: igual que en la jornada del cruce de calle, en revisi\xF3n por Salud Ocupacional`},{id:"t_conos",rol:"auxiliar1",lugar:"calle",nombre:"Conos en los dos sentidos",accion:"Colocar los conos",fisico:[],antes:["t_senal"],puntos:6,ref:Os},{id:"t_bobina",rol:"auxiliar1",lugar:"bobina",nombre:"Montar la bobina",accion:"Montar la bobina",fisico:[],antes:["t_ats"],puntos:10,pregunta:"La bobina est\xE1 en su soporte junto a P04. \xBFQu\xE9 cuidas cuando el cable sale de ella?",opciones:["Que nunca se doble con un radio menor a 20 veces su di\xE1metro","Que salga r\xE1pido: las curvas se enderezan al tensar","Hacer un rollo apretado en el suelo para que no se enrede"],porque:"En el tendido el cable no puede tener curvaturas con un radio menor a 20 veces su di\xE1metro: la fibra se da\xF1a.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura: 20 veces el di\xE1metro del cable (p. 16)"},{id:"t_guia",rol:"auxiliar2",lugar:"bobina",nombre:"Amarrar la gu\xEDa al cable",accion:"Amarrar la gu\xEDa",fisico:["t_bobina"],antes:[],puntos:4},{id:"t_alto",rol:"sst",lugar:"calle",nombre:"Detener el tr\xE1nsito",accion:"Dar el ALTO",fisico:["t_senal"],antes:["t_conos"],puntos:8,ref:Os},{id:"t_subir",rol:"liniero",lugar:"poste",nombre:"Subir a P05",accion:"Subir",fisico:[],antes:["t_distancias"],puntos:12,pregunta:"La escalera qued\xF3 amarrada a P05 en la ma\xF1ana. \xBFQu\xE9 haces antes de subir?",opciones:["Reviso que siga amarrada en dos puntos, conecto el carrito a la argolla del pecho y un compa\xF1ero comprueba la conexi\xF3n","Subo directo: ya se asegur\xF3 en la ma\xF1ana","Subo y me conecto cuando llegue arriba"],porque:"La escalera se sujeta en m\xEDnimo dos puntos, y antes de subir un compa\xF1ero comprueba la conexi\xF3n del arn\xE9s.",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19) \xB7 \xA75.6.5 c) escalera sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"t_polea",rol:"liniero",lugar:"arriba",nombre:"Polea en el herraje",accion:"Colocar la polea",fisico:["t_subir"],antes:[],puntos:4},{id:"t_cruzar",rol:"auxiliar2",lugar:"poste",nombre:"Cruzar con la gu\xEDa",accion:"Entregar la gu\xEDa al liniero",fisico:["t_guia"],antes:["t_alto","t_polea"],puntos:12,pregunta:"Llevas la gu\xEDa de P04 a P05. \xBFCu\xE1ndo cruzas la calle?",opciones:["Cuando el tr\xE1nsito est\xE1 detenido en los dos sentidos y la zona est\xE1 libre de veh\xEDculos","Entre auto y auto, r\xE1pido","Cuando quiera: la gu\xEDa es liviana y los autos la ven"],porque:"La gu\xEDa y el cable solo pasan sobre la calzada con el tr\xE1nsito detenido en los dos sentidos y la zona libre.",ref:`${Os} \xB7 tr\xE1nsito detenido en los dos sentidos: igual que en la jornada del cruce de calle, en revisi\xF3n por Salud Ocupacional`},{id:"t_tension",rol:"liniero",lugar:"arriba",nombre:"Halar y tensar el cable",accion:"Tensar el cable",fisico:["t_cruzar"],antes:[],puntos:12,pregunta:"El fabricante de este cable no da tensiones. \xBFCon cu\xE1nta lo tiendes?",opciones:["250 kg como m\xE1ximo (un cuarto de tonelada), con un pull-lift para no pasar de 2700 N","Lo m\xE1s tenso posible, para que no haga flecha","La que aguante el herraje"],porque:"Se siguen las tensiones del fabricante. Si no hay, se aplica como m\xE1ximo 250 kg, con pull-lift, para no pasar de 2700 N.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n: m\xE1ximo 250 kg sin datos del fabricante (p. 31)"},{id:"t_preformado",rol:"liniero",lugar:"arriba",nombre:"Fijar con preformado",accion:"Colocar el preformado",fisico:["t_tension"],antes:[],puntos:10,pregunta:"\xBFQu\xE9 preformado usas para fijar el cable al herraje?",opciones:["El que corresponde al di\xE1metro del cable (o a su fabricante), seg\xFAn la tabla del manual","Cualquiera de los que hay en el pick-up","Ninguno: se amarra con alambre al herraje"],porque:"El preformado se elige seg\xFAn el fabricante o el di\xE1metro del cable (Anexo 3 del manual).",ref:"Manual MNO-DS-GE-001 \xB7 Anexo 3 Uso de preformados seg\xFAn fabricante o di\xE1metro del cable (p. 82)"},{id:"t_abrir",rol:"sst",lugar:"calle",nombre:"Liberar el tr\xE1nsito",accion:"Dar el SIGA",fisico:["t_preformado"],antes:[],puntos:6,ref:Os},{id:"t_reserva",rol:"liniero",lugar:"arriba",nombre:"Dejar la reserva",accion:"Dejar el rollo de reserva",fisico:["t_preformado"],antes:[],puntos:10,pregunta:"En P05 se va a empalmar este cable m\xE1s adelante. \xBFQu\xE9 dejas en el poste?",opciones:["Un rollo de al menos 25 m, de 40 a 50 cm de di\xE1metro","Nada: se corta justo en el herraje","Un rollo de 5 m, bien apretado para que no estorbe"],porque:"En cada extremo de un tendido nuevo se deja un rollo de 25 m como m\xEDnimo, de 40 a 50 cm de di\xE1metro, para el empalme.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de 25 m en cada extremo para el empalme (p. 23)"},{id:"t_calco",rol:"liniero",lugar:"arriba",nombre:"Calcoman\xEDas reflectivas",accion:"Poner las calcoman\xEDas",fisico:["t_preformado"],antes:[],puntos:8,pregunta:"\xBFD\xF3nde van las calcoman\xEDas reflectivas amarillas?",opciones:["Dos, una a cada lado del poste, directamente sobre la fibra","Sobre el preformado, que se ve m\xE1s","Una sola, en medio de la calle"],porque:"Se colocan dos cintas reflectivas de precauci\xF3n, una a cada lado del poste, sobre la fibra y no sobre el preformado ni la retenida.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas de prevenci\xF3n (p. 39)"},{id:"t_altura",rol:"encargado",lugar:"calle",nombre:"Comprobar la altura",accion:"Medir la altura del cruce",fisico:["t_preformado"],antes:["t_reserva","t_calco"],puntos:12,pregunta:"El cable qued\xF3 sobre la calle. \xBFQu\xE9 altura m\xEDnima debe tener en su punto m\xE1s bajo?",opciones:["5 m sobre la calle, en la flecha m\xE1xima (4,5 m si fuera sobre la acera)","4,5 m: es lo mismo en la calle que en la acera","La que d\xE9: lo importante es que no toque los autos"],porque:"La altura m\xEDnima en la flecha m\xE1xima es de 5 m en los cruces de calle y de 4,5 m sobre aceras, procurando siempre m\xE1s.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable: 5 m en cruces de calle, 4,5 m sobre aceras (p. 26)"}];var ym={encargado:"Dirige el ATS, dicta el plano de empalme por radio y rotula el empalme.",sst:"Se\xF1aliza la mesa de empalme en la acera y verifica el \xE1rea y el clima antes de cada ascenso.",liniero:"Es el empalmador: baja el cierre, fusiona las fibras seg\xFAn el plano, revisa cada empalme y sube a fijar el cierre.",auxiliar1:"Arma la mesa de empalme y mide cada empalme con el OTDR.",auxiliar2:"Cierra y prueba la hermeticidad del cierre y enrolla las colas."},Sm=["Listo","\xA1Alto!","Espera un momento","Repite el plano","Fusionando","Necesito ayuda"],vm="GS-101 \xB7 \xA75.6.2 Demarcaci\xF3n: cinta amarilla de precauci\xF3n, conos reflectivos y rotulaci\xF3n (p. 21)",_m="GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)",X_="GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23)",Mm=[{id:"e_ats",rol:"encargado",lugar:"pickup",nombre:"ATS del empalme",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"Hoy se empalma en P05: dos ascensos y trabajo en la acera. \xBFQui\xE9nes hacen el ATS?",opciones:["Toda la cuadrilla, antes de empezar y con el encargado al frente","Solo el empalmador, que es quien sube","El encargado, al terminar, para dejarlo firmado"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"e_senal",rol:"sst",lugar:"mesa",nombre:"Se\xF1alizar la mesa de empalme",accion:"Colocar conos y cinta",fisico:[],antes:["e_ats"],puntos:6,ref:vm},{id:"e_area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea y el clima",accion:"Verificar el \xE1rea de trabajo",fisico:[],antes:["e_ats"],puntos:10,pregunta:"El liniero va a subir a P05. \xBFCon qu\xE9 condiciones no se trabaja en la escalera?",opciones:["Con vientos fuertes, lluvia torrencial o rayer\xEDa; y el \xE1rea tiene que estar cerrada","Solo si hay rayos encima del poste","El clima no importa si la escalera est\xE1 amarrada"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:X_},{id:"e_subir",rol:"liniero",lugar:"poste",nombre:"Subir a P05",accion:"Subir",fisico:[],antes:["e_area"],puntos:10,ref:_m},{id:"e_bajar",rol:"liniero",lugar:"arriba",nombre:"Bajar el cierre",accion:"Bajar el cierre con sus colas",fisico:["e_subir"],antes:[],puntos:10,pregunta:"El cierre tiene colas de 15 a 20 m a cada lado. \xBFPara qu\xE9?",opciones:["Para bajar el empalme y trabajarlo c\xF3modamente a nivel del suelo","Para que el cable no quede tenso entre los postes","Para tener de d\xF3nde cortar si el empalme sale mal"],porque:"Las colas del empalme a\xE9reo (15 a 20 m por lado) tienen que permitir intervenir el empalme c\xF3modamente a nivel del suelo.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.2 a) Colas del empalme a\xE9reo de 15 a 20 m, para trabajarlo a nivel del suelo (p. 45)"},{id:"e_mesa",rol:"auxiliar1",lugar:"mesa",nombre:"Armar la mesa de empalme",accion:"Armar la mesa",fisico:[],antes:["e_senal"],puntos:6,ref:vm},{id:"e_dictar",rol:"encargado",lugar:"mesa",nombre:"Dictar el plano",accion:"Dictar el plano por radio",fisico:["e_bajar"],antes:[],puntos:4,dicta:"Plano de empalme: fibra 7 del tubo azul, cable nuevo con cable existente."},{id:"e_fusion",rol:"liniero",lugar:"mesa",nombre:"Fusionar seg\xFAn el plano",accion:"Fusionar la fibra",fisico:["e_bajar","e_mesa"],antes:["e_dictar"],puntos:12,pregunta:"El encargado dict\xF3: fibra 7 del tubo azul. \xBFQu\xE9 color buscas en los dos cables?",opciones:["Roja: azul, naranja, verde, caf\xE9, gris, blanca y la 7 es la roja","Violeta: es la s\xE9ptima del tubo","Negra: despu\xE9s de la blanca viene la negra"],porque:"Todo empalme respeta el c\xF3digo de colores EIA/TIA-598: 1 azul, 2 naranja, 3 verde, 4 caf\xE9, 5 gris, 6 blanco, 7 rojo, 8 negro, 9 amarillo, 10 violeta, 11 rosado, 12 aqua.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.4 Empalme seg\xFAn c\xF3digo de colores (p. 47) y Anexo 4 EIA/TIA-598 (p. 83)"},{id:"e_monitor",rol:"liniero",lugar:"mesa",nombre:"Revisar la fusi\xF3n",accion:"Revisar el monitor",fisico:["e_fusion"],antes:[],puntos:10,pregunta:"En el monitor de la empalmadora el empalme muestra una burbuja. \xBFQu\xE9 haces?",opciones:["Lo corto y lo rehago desde la preparaci\xF3n: no se aceptan gradas, burbujas ni l\xEDneas transversales","Le doy una segunda fusi\xF3n encima para corregirlo","Lo dejo: una burbuja no pierde luz"],porque:"No se aceptan empalmes con gradas, burbujas o l\xEDneas transversales en el monitor de la empalmadora, ni se hace doble fusi\xF3n.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.6 Acabado de las fibras empalmadas: sin gradas, burbujas ni doble fusi\xF3n (p. 48)"},{id:"e_otdr",rol:"auxiliar1",lugar:"mesa",nombre:"Medir con el OTDR",accion:"Medir el empalme",fisico:["e_monitor"],antes:[],puntos:12,pregunta:"El OTDR mide el empalme de la fibra 7: 0,41 dB en un sentido. \xBFQu\xE9 se hace?",opciones:["Se rehace: pasa de 0,33 dB. Se vuelve a fusionar, previa preparaci\xF3n, hasta 5 veces","Se acepta: cualquier empalme por debajo de 0,5 dB sirve","Se acepta si el promedio de todo el cable da bien"],porque:"Cada empalme debe dar 0,15 dB o menos de promedio y como m\xE1ximo 0,33 dB en un sentido. Si pasa de 0,33 dB se vuelve a fusionar, previa preparaci\xF3n, hasta 5 veces.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.7.4 b) P\xE9rdida por empalme: \u2264 0,15 dB de promedio y \u2264 0,33 dB en un sentido; hasta 5 fusiones (p. 66)"},{id:"e_refusion",rol:"liniero",lugar:"mesa",nombre:"Rehacer la fusi\xF3n",accion:"Volver a fusionar (0,12 dB)",fisico:["e_otdr"],antes:[],puntos:4},{id:"e_cierre",rol:"auxiliar2",lugar:"mesa",nombre:"Cerrar y probar el cierre",accion:"Presurizar el cierre",fisico:["e_refusion"],antes:[],puntos:10,pregunta:"\xBFC\xF3mo se comprueba que el cierre qued\xF3 herm\xE9tico?",opciones:["Se presuriza a 8 psi (560 g/cm\xB2) por 15 minutos como m\xE1ximo y despu\xE9s se libera la presi\xF3n","Se presuriza al m\xE1ximo y se deja as\xED, para que no entre agua","Se moja con agua y se mira si sale aire"],porque:"El cierre se presuriza con 560 g/cm\xB2 (8 psi) para verificar su hermeticidad, con la v\xE1lvula accesible; la prueba dura 15 minutos como m\xE1ximo y luego se libera la presi\xF3n.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme: prueba a 8 psi, m\xE1ximo 15 minutos, y liberar la presi\xF3n (p. 45)"},{id:"e_colas",rol:"auxiliar2",lugar:"mesa",nombre:"Enrollar las colas",accion:"Enrollar las colas (40 a 50 cm)",fisico:["e_cierre"],antes:[],puntos:4},{id:"e_rotulo",rol:"encargado",lugar:"mesa",nombre:"Rotular el empalme",accion:"Rotular el empalme",fisico:["e_cierre"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se identifica un empalme a\xE9reo?",opciones:["Una identificaci\xF3n a cada lado del empalme, sujeta con alambre, con el origen y el extremo del enlace","Con el nombre del empalmador escrito en el cierre","No hace falta: el plano ya dice d\xF3nde est\xE1"],porque:"Las identificaciones se sujetan al cable con alambre, una a cada lado del empalme, indicando el origen y el extremo l\xF3gico del enlace.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.6.13 Rotulaci\xF3n del empalme a\xE9reo (p. 65)"},{id:"e_subir2",rol:"liniero",lugar:"poste",nombre:"Subir con el cierre",accion:"Subir",fisico:["e_colas"],antes:["e_rotulo"],puntos:10,ref:_m},{id:"e_fijar",rol:"liniero",lugar:"arriba",nombre:"Fijar el cierre",accion:"Fijar el cierre",fisico:["e_subir2"],antes:[],puntos:12,pregunta:"\xBFA qu\xE9 distancia del poste va el cierre de empalme?",opciones:["A 75 cm; si el preformado es m\xE1s largo, m\xE1s lejos, para que el cierre no quede sujeto al preformado","Pegado al poste, para que no se mueva","En medio del vano, donde no estorba"],porque:"El cierre va a 75 cm del poste; si el preformado mide m\xE1s de 75 cm, se aleja para que no quede sujeto a \xE9l.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm (p. 52)"}];var Tt=hm,Em=pm,ta={escalera:{nombre:"Escalera al poste",lugar:"Calle 50 Luisa, Sabana Norte \xB7 poste P05",resumen:"Asegurar la escalera al poste y subir.",roles:Object.fromEntries(Object.entries(Tt).map(([a,e])=>[a,e.resumen])),pasos:mm,frases:fm,ascensos:[["subir",null]],lista:!1,libera:["tomar","tomar2"],reposo:a=>a.hechos.tomar&&a.hechos.tomar2?"poste":"pickup",fin:"El liniero qued\xF3 asegurado con el carrito, la faja de posicionamiento y la l\xEDnea de vida.",nota:"La forma de la faja en M es pr\xE1ctica de la cuadrilla."},tendido:{nombre:"Tendido a\xE9reo",lugar:"Calle 50 Luisa, Sabana Norte \xB7 de P04 a P05, cruzando la calle",resumen:"Halar un cable de fibra nuevo sobre la calle, tensarlo, fijarlo y dejar la reserva.",roles:gm,pasos:bm,frases:xm,ascensos:[["t_subir",null]],lista:!0,libera:[],reposo:(a,e)=>e==="sst"||e==="auxiliar1"?"calle":e==="auxiliar2"&&!a.hechos.t_cruzar?"bobina":"poste",fin:"El cable cruza la calle a 5 m o m\xE1s, fijado con preformado y con su reserva para el empalme.",nota:"Lo de un banderero por sentido viene de la jornada del cruce de calle."},empalme:{nombre:"Empalme a\xE9reo",lugar:"Calle 50 Luisa, Sabana Norte \xB7 caja de empalme de P05",resumen:"Bajar el cierre de P05, empalmar en la acera seg\xFAn el plano, medir, cerrar y volver a subirlo.",roles:ym,pasos:Mm,frases:Sm,ascensos:[["e_subir","e_bajar"],["e_subir2",null]],lista:!0,libera:[],reposo:(a,e)=>e==="liniero"||e==="sst"?"poste":a.hechos.e_bajar||e==="auxiliar1"?"mesa":"pickup",fin:"La fibra 7 qued\xF3 empalmada y medida, y el cierre, probado, rotulado y fijado a 75 cm del poste.",nota:"El riesgo de la fibra rota y del l\xE1ser no se trata aqu\xED: no tiene fuente aprobada todav\xEDa."}};for(let[a,e]of Object.entries(ta))for(let t of e.pasos)t.trabajo=a;var Dn={};for(let a of Object.values(ta))for(let e of a.pasos){if(Dn[e.id])throw new Error(`Paso repetido entre trabajos: ${e.id}`);Dn[e.id]=e}var tn=a=>Object.hasOwn(ta,a.trabajo)?ta[a.trabajo]:ta.escalera,ei=a=>tn(a).pasos,ti=a=>tn(a).ascensos.some(([e,t])=>a.hechos[e]&&!(t&&a.hechos[t])),Am=(a,e)=>tn(a).ascensos.some(([,t])=>t===e);var Ec=(a,e)=>Object.hasOwn(Dn,e)&&Dn[e].trabajo===a.trabajo?Dn[e]:null,Ru=()=>({chofer:null,pasajeros:[],x:null,z:null,r:null}),Pu=()=>({fase:"sala",modo:"aprendiz",trabajo:"escalera",jugadores:{},hechos:{},fallos:{},eventos:[],pickup:Ru(),n:0}),Vn=(a,e)=>Object.keys(a.jugadores).find(t=>a.jugadores[t].rol===e)??null,J_=(a,e)=>String(a??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,e);function Iu(a,e){switch(a.n++,e?.t){case"entra":a.jugadores[e.id]={nombre:e.nombre,rol:a.jugadores[e.id]?.rol??null};break;case"sale":delete a.jugadores[e.id],a.pickup.chofer===e.id&&(a.pickup.chofer=null),a.pickup.pasajeros=a.pickup.pasajeros.filter(t=>t!==e.id);break;case"rol":a.jugadores[e.id]&&(a.jugadores[e.id].rol=e.rol);break;case"modo":a.modo=e.modo;break;case"trabajo":if(!Object.hasOwn(ta,e.trabajo))break;a.trabajo=e.trabajo,a.hechos={},a.fallos={},a.eventos=[];break;case"empezar":a.fase="trabajo",a.pickup=Ru();break;case"reiniciar":Object.assign(a,{fase:"sala",hechos:{},fallos:{},eventos:[],pickup:Ru()});break;case"conduce":a.pickup.chofer=e.id;break;case"aparca":a.pickup={chofer:null,pasajeros:[],x:e.x,z:e.z,r:e.r};break;case"sube":a.pickup.pasajeros.push(e.id);break;case"baja":a.pickup.pasajeros=a.pickup.pasajeros.filter(t=>t!==e.id);break;case"hecho":if(!Ec(a,e.paso))break;a.hechos[e.paso]=e.rol,ei(a).every(t=>a.hechos[t.id])&&(a.fase="fin");break;case"falta":if(!Ec(a,e.paso))break;a.fallos[e.paso]=(a.fallos[e.paso]??0)+1,a.eventos.push({tipo:"falta",puntos:e.puntos,rol:e.rol,paso:e.paso,ref:e.ref,texto:e.texto});break}return a}function Tm(a,e,t,n=!1){switch(e?.t){case"entra":return[{t:"entra",id:t,nombre:J_(e.nombre,16)||"Jugador"}];case"sale":return n&&a.jugadores[e.id]?[{t:"sale",id:e.id}]:[];case"rol":return!a.jugadores[t]||a.fase==="fin"||e.rol!==null&&!Tt[e.rol]?[]:e.rol&&Vn(a,e.rol)&&Vn(a,e.rol)!==t?[]:[{t:"rol",id:t,rol:e.rol}];case"modo":return a.fase==="sala"&&a.jugadores[t]&&["aprendiz","tecnico"].includes(e.modo)?[{t:"modo",modo:e.modo}]:[];case"trabajo":return a.fase==="sala"&&(a.jugadores[t]||n)&&Object.hasOwn(ta,e.trabajo)&&e.trabajo!==a.trabajo?[{t:"trabajo",trabajo:e.trabajo}]:[];case"empezar":return a.fase==="sala"&&(a.jugadores[t]?.rol||n&&e.demo)?[{t:"empezar"}]:[];case"reiniciar":return a.fase==="fin"&&(a.jugadores[t]||n)||n&&e.dev&&a.fase==="trabajo"?[{t:"reiniciar"}]:[];case"conduce":return a.jugadores[t]?.rol&&!a.pickup.chofer&&Lu(a)?[{t:"conduce",id:t}]:[];case"sube":return a.jugadores[t]?.rol&&a.pickup.chofer&&a.pickup.chofer!==t&&!a.pickup.pasajeros.includes(t)&&a.pickup.pasajeros.length<3?[{t:"sube",id:t}]:[];case"baja":return a.pickup.pasajeros.includes(t)?[{t:"baja",id:t}]:[];case"aparca":return a.pickup.chofer===t&&[e.x,e.z,e.r].every(Number.isFinite)&&Math.abs(e.x)<5e3&&Math.abs(e.z)<5e3?[{t:"aparca",x:e.x,z:e.z,r:e.r}]:[];case"auto":{let i=Ec(a,e.paso);return n&&i?.auto&&a.fase==="trabajo"&&!a.hechos[i.id]&&i.fisico.every(r=>a.hechos[r])?[{t:"hecho",paso:i.id,rol:i.rol,limpio:!0}]:[]}case"intento":{let i=Ec(a,e.paso);if(!i||i.auto||a.fase!=="trabajo"||a.hechos[i.id])return[];let r=n&&e.dev,s=n&&e.bot,o=r?i.rol:s?e.rol:a.jugadores[t]?.rol;if(o!==i.rol||s&&!r&&Vn(a,o))return[];if(!i.fisico.every(l=>a.hechos[l]))return[];let c=i.antes.find(l=>!a.hechos[l]);if(c)return a.modo==="aprendiz"?[]:[{t:"falta",paso:i.id,rol:o,puntos:wu(Em,a.modo),ref:Dn[c].ref??i.ref,texto:`Faltaba \xAB${Dn[c].nombre}\xBB antes de \xAB${i.nombre}\xBB.`}];if(i.opciones){if(!Number.isInteger(e.opcion)||e.opcion<0||e.opcion>=i.opciones.length)return[];if(e.opcion!==0)return[{t:"falta",paso:i.id,rol:o,puntos:wu(i.puntos,a.modo),ref:i.ref,texto:i.porque}]}return[{t:"hecho",paso:i.id,rol:o,limpio:!a.fallos[i.id]}]}}return[]}function br(a,e){return ei(a).filter(t=>t.rol===e&&!t.auto&&!a.hechos[t.id]&&t.fisico.every(n=>a.hechos[n])).map(t=>({paso:t,bloqueo:Dn[t.antes.find(n=>!a.hechos[n])]??null}))}var Du=a=>ei(a).find(e=>!a.hechos[e.id]&&e.fisico.every(t=>a.hechos[t])&&e.antes.every(t=>a.hechos[t]))??null,Lu=a=>a.fase==="fin"||a.fase==="trabajo"&&tn(a).libera.every(e=>a.hechos[e]),vr=a=>Math.round(um(a.eventos)),Nu=a=>dm(vr(a));function wm(a){let e=Object.fromEntries(Object.keys(Tt).map(t=>[t,100]));for(let t of a.eventos)t.tipo==="falta"&&t.rol in e&&(e[t.rol]=Cu(e[t.rol],t.puntos));return e}function Ac(a){let e=[...a.id].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,7),t=a.opciones.map((n,i)=>i);for(let n=t.length-1;n>0;n--){e=e*1664525+1013904223>>>0;let i=e%(n+1);[t[n],t[i]]=[t[i],t[n]]}return t}var Fu=(a,e)=>{for(let t=0;t<e.length;t++)a=a*31+e.charCodeAt(t)|0;return a};function Cm({id:a,red:e,alEvento:t}){let n=Pu(),i=[],r=0,s=[],o=!1,c=-1e9,l=()=>e?[a,...e.estado.pares.keys()].sort()[0]:a,d=()=>l()===a,u=()=>!e||o||!!e.estado.presencia;function h(_){i.push(_),r=Fu(r,JSON.stringify(_)),Iu(n,_),t?.(_,n)}function f(_,A,E){for(let T of Tm(n,_,A,E)){let x=r;h(T),e?.fiable({t:"ev",n:n.n,h:x,ev:T})}}function g(_){u()?d()?f(_,a,!0):e.fiable({t:"pro",pro:_}):s.push(_)}function v(){if(s.length&&u()){let _=s;s=[],_.forEach(g)}}function m(){let _=Date.now();e&&_-c>1500&&(c=_,e.fiable({t:"pido"}))}let p=0;function b(_,A,E){if(E!==l()||_===n.n&&A===r){p=0;return}let T=Date.now();p?T-p>1e3&&m():p=T}function M(_,A){if(_?.t==="pro")d()&&f(_.pro,A,!1);else if(_?.t==="ev"){if(A!==l())return;_.n===n.n+1&&_.h===r?h(_.ev):m()}else if(_?.t==="pido")i.length&&e.fiable({t:"todo",evs:i});else if(_?.t==="todo"){if(!Array.isArray(_.evs)||!_.evs.length||_.evs.length>5e3)return;let E=_.evs.reduce((T,x)=>Fu(T,JSON.stringify(x)),0);if(!(A===l()?E!==r:!i.length))return;n=Pu(),i=[],r=0;for(let T of _.evs)i.push(T),r=Fu(r,JSON.stringify(T)),Iu(n,T);t?.(null,n)}}return{get E(){return n},get huella(){return r},anfitrion:d,idAnfitrion:l,proponer:g,recibir:M,pedir:m,cada:v,latido:b,jugarSolo:()=>{o=!0}}}var Uu=4.6,Hu=7.4,Bs=Hu*Math.sin(75*Math.PI/180),Ou=Hu*Math.cos(75*Math.PI/180),Bu=4.8,Z_=7,zu=4.4,Gu=72,Tc=6,qt={cuerda:15591122,cinta:15320363,faja:15320363,vida:14173227,fibra:1711136,calco:16765471};function Rm(a){let e=cn();for(let n of[-.21,.21])e.caja(n,-.04,a/2,.05,.08,a,15304235);for(let n=.3;n<a-.1;n+=.3)e.caja(0,-.02,n,.42,.035,.035,12172996);let t=new Ne(e.geometria(),new it({vertexColors:!0,roughness:.7}));return t.castShadow=!1,t}function Pm({via:a,barrio:e,carrete:t}){let n=e.trabajo,i=e.postes.find(se=>se.id==="P04"),r={},s=(se,R,y=0)=>(a.en(se,R,r),new U(r.x,y,r.z)),o=-Math.sign(n.a)||1,c=(se,R,y)=>{let O=n.a-se*o;return s(n.d+R,O,y??(Math.abs(O)<Qt?.02:.15))},l=c(-Ou,0),d=c(-.14,0,.15+Bs),u=new U(d.x-l.x,0,d.z-l.z).normalize(),h=new U(u.z,0,-u.x),f=new U().subVectors(l,d).setY(0).normalize().multiplyScalar(.97).add(new U(0,.26,0)),g=Math.atan2(u.x,u.z),v=(se,R=0,y=new U)=>y.lerpVectors(l,d,se/Bs).addScaledVector(f,R),m={pickup:s(e.dPick,-4.5),poste:c(-2.6,.9,0),bobina:s(i.d+1.6,i.a-1.4),calle:s((i.d+n.d)/2,0),mesa:s(n.d-7,n.a+.6)},p=c(-2.2,.75,0),b={pickup:{encargado:[0,-4.4],sst:[1.3,-4.4],liniero:[-1.3,-4.4],auxiliar1:[-2.6,-4.4],auxiliar2:[2.6,-4.4]},poste:{encargado:[-3.6,1.3],sst:[-4.4,-1.2],liniero:[-2.55,0],auxiliar1:[-2.2,1],auxiliar2:[-.6,-1.1]}},M={calle:{sst:[-3,-1.6],auxiliar1:[3,1.6],encargado:[0,-2.8],liniero:[0,2.8],auxiliar2:[-1.5,2.2]},bobina:{auxiliar1:[0,-1.2],auxiliar2:[-1.2,-.3],encargado:[1.2,-.3],sst:[0,-2.4],liniero:[-1.2,-2]},mesa:{liniero:[0,1.1],auxiliar1:[1.3,.9],auxiliar2:[-1.3,.9],encargado:[1.6,-.6],sst:[-1.8,-.4]}},_={calle:[(i.d+n.d)/2,0],bobina:[i.d+1.6,i.a-1.4],mesa:[n.d-7,n.a+.6]},A=(se,R)=>R==="pickup"?s(e.dPick+b.pickup[se][0],b.pickup[se][1]):M[R]?s(_[R][0]+M[R][se][0],_[R][1]+M[R][se][1]):c(b.poste[se][0],b.poste[se][1],0),E=new ot,T=Rm(Uu),x=Rm(Hu),S=new U,w=new U,D=c(-2.2,.75+Uu/2),F=c(-2.2,.75-Uu/2);D.y=F.y+=.05,x.position.copy(l),x.lookAt(d),x.visible=!1;let P=new Lt(new Zr(.17,.55,10).translate(0,.275,0),new it({color:15227148,roughness:.6}),8),I=[[-Ou-2,-2],[2,-2],[2,2],[-Ou-2,2]].map(([se,R])=>c(se,R)),N=new xt,B=[[-11,1.8],[-8,1.2],[11,-1.8],[8,-1.2]].map(([se,R])=>s((i.d+n.d)/2+se,R,.15));[...I,...B].forEach((se,R)=>{N.position.copy(se),N.updateMatrix(),P.setMatrixAt(R,N.matrix)}),P.visible=!1;let q=new mt,k=new Float32Array(Gu*6),V=new Float32Array(Gu*6);q.setAttribute("position",new gt(k,3)),q.setAttribute("color",new gt(V,3));let H=new Jn(q,new Un({vertexColors:!0}));H.frustumCulled=!1;let te=new Ne(new Ce(.07,.12,.07),new it({color:14173227,roughness:.4,metalness:.5})),ge=new Ne(new ts(1.25,1.45,40).rotateX(-Math.PI/2),new wn({color:16766503,transparent:!0,opacity:.8,depthWrite:!1}));ge.visible=!1;let _e=t?t.clone():new Ne(new At(.6,.6,.7,18).rotateZ(Math.PI/2).translate(0,.75,0),new it({color:9071172,roughness:.9}));_e.matrixAutoUpdate=!0,_e.position.copy(m.bobina).setY(.15),_e.rotation.y=i.rumbo,_e.visible=!1;let He=new U(i.x,Tc,i.z),Fe=new U(n.x,Tc,n.z),Z=new Ne(new Ce(1.3,.8,.65).translate(0,.4,0),new it({color:5989488,roughness:.8}));Z.position.copy(m.mesa).setY(.15),Z.rotation.y=n.rumbo,Z.visible=!1;let G=new Ne(new At(.13,.13,.62,12).rotateZ(Math.PI/2),new it({color:2303531,roughness:.5}));G.rotation.y=n.rumbo,G.visible=!1;let X=m.mesa.clone().setY(1.08),he=Fe.clone().addScaledVector(new U().subVectors(He,Fe).setY(0).normalize(),.75).setY(Tc-.1);E.add(T,x,P,H,te,ge,_e,Z,G);let Me=0,fe=new Be;function ye(se,R,y){if(Me>=Gu)return;fe.set(y);let O=Me++*6;k[O]=se.x,k[O+1]=se.y,k[O+2]=se.z,k[O+3]=R.x,k[O+4]=R.y,k[O+5]=R.z;for(let W=0;W<6;W+=3)V[O+W]=fe.r,V[O+W+1]=fe.g,V[O+W+2]=fe.b}let De=0,ue=Array.from({length:8},()=>new U),Je={x:0,y:0,z:0,rumbo:g,pose:"e",fase:0},z=se=>!!(se.hechos.tomar&&se.hechos.tomar2&&!se.hechos.llegada);function de(){return v(De*Bu,.13,ue[7]),Je.x=ue[7].x,Je.y=ue[7].y,Je.z=ue[7].z,Je.pose=De<1?"e":"t",Je.fase=De*26,Je}function ie(se){let R=se("auxiliar1"),y=se("auxiliar2");return!!R&&!!y&&Math.hypot(R.x-m.poste.x,R.z-m.poste.z)<3.5&&Math.hypot(R.x-y.x,R.z-y.z)<zu+1.5}function J(se,R,y,O){if(!z(se)||R!=="auxiliar2")return;let W=O("auxiliar1");if(!W)return;let ae=y.x-W.x,xe=y.z-W.z,Se=Math.hypot(ae,xe),ne=zu+.5;Se>ne&&(y.x=W.x+ae/Se*ne,y.z=W.z+xe/Se*ne)}function Y(se,R,y,O,W=12){for(let ae=0;ae<W;ae++){let xe=ae/W,Se=(ae+1)/W;ue[0].lerpVectors(se,R,xe),ue[0].y-=y*Math.sin(Math.PI*xe),ue[1].lerpVectors(se,R,Se),ue[1].y-=y*Math.sin(Math.PI*Se),ye(ue[0],ue[1],O)}}function re(se,R){if(se.t_tension){if(Y(He,Fe,.5,qt.fibra),se.t_calco)for(let y of[.06,.94])ue[0].lerpVectors(He,Fe,y),ue[0].y-=.5*Math.sin(Math.PI*y),ue[1].copy(ue[0]),ue[1].y+=.12,ye(ue[0],ue[1],qt.calco)}else if(se.t_cruzar)Y(He,Fe,2.4,qt.fibra);else if(se.t_guia){let y=R("auxiliar2");y&&ye(ue[2].copy(_e.position).setY(1.25),ue[3].set(y.x,(y.y??.15)+1,y.z),qt.cuerda)}}function me(se){let R=se.e_bajar&&!se.e_fijar;if(G.visible=!0,G.position.copy(R?X:he),R)for(let y of[-.25,.25])ue[0].copy(Fe).setY(Tc-.2),ue[0].x+=y*.3,ue[1].lerpVectors(ue[0],X,.5),ue[1].y-=.4,ue[1].x+=y,ye(ue[0],ue[1],qt.fibra),ye(ue[1],ue[2].copy(X).setX(X.x+y),qt.fibra)}function L(se,R,y,O,W){let ae=tn(y),xe=ti(y),Se=xe&&y.fase==="trabajo",ne=ae.lista?{...y.hechos,colocar:1,cuerda_extension:1,tensar:1,amarre_medio:1,perimetro:1,carrito:xe,faja:xe,linea_vida:xe}:y.hechos;if(De=Se?Math.min(1,De+se/Z_):0,x.visible=!!ne.colocar,T.visible=!ne.colocar,!ne.colocar){let ve=O("auxiliar1"),Oe=O("auxiliar2");z(y)&&ve&&Oe?(T.position.set(ve.x,(ve.y??.15)+1.47,ve.z),T.lookAt(Oe.x,(Oe.y??.15)+1.47,Oe.z)):ne.llegada?(T.position.copy(D),T.lookAt(F)):(T.position.copy(W.local(.45,2.46,-2.85,S)),T.lookAt(W.local(.45,2.46,1.75,w)))}if(P.visible=!!ne.perimetro,P.count=ne.t_conos&&!ne.t_abrir?8:4,_e.visible=y.trabajo==="tendido",Z.visible=y.trabajo==="empalme",G.visible=!1,Me=0,ne.perimetro)for(let ve=0;ve<4;ve++)ye(ue[0].copy(I[ve]).setY(.62),ue[1].copy(I[(ve+1)%4]).setY(.62),qt.cinta);if(ne.colocar&&ne.cuerda_extension&&(v(Bs-.3,0,ue[0]),ue[1].set(n.x,ue[0].y-.1,n.z).addScaledVector(u,.2),ye(ue[0],ue[1],qt.cuerda),ye(ue[1],v(Bs-.6,.1,ue[2]),qt.cuerda),ye(ue[2],v(1.7,.1,ue[3]),qt.cuerda),ne.tensar&&ye(ue[3],v(.35,.02,ue[4]),qt.cuerda)),ne.amarre_medio){let Oe=[[.22,.22],[.22,-.22],[-.22,-.22],[-.22,.22]].map(([Ee,Ae],ke)=>ue[ke].set(n.x+Ee,3.65,n.z+Ae));for(let Ee=0;Ee<4;Ee++)ye(Oe[Ee],Oe[(Ee+1)%4],qt.cuerda);for(let Ee of[-1,1])ye(v(3.4,0,ue[4]).addScaledVector(h,Ee*.21),ue[5].set(n.x,3.65,n.z).addScaledVector(h,Ee*.22),qt.cuerda)}let ce=O("liniero");if(te.visible=!!(ne.carrito&&ce),te.visible){let ve=ue[5].set(ce.x,(ce.y??.15)+1.28,ce.z);v(Math.min(Bs-.8,Math.max(1.3,ve.y-.15)),.1,te.position),ve.distanceTo(te.position)<1.6&&ye(te.position,ve.addScaledVector(u,.1),qt.cuerda)}if(Se&&ce&&De>=1){let ve=ue[6].set(ce.x,ce.y,ce.z);if(ne.faja){let Oe=ue[0].copy(ve).addScaledVector(h,.2).setY(ve.y+1),Ee=ue[1].copy(ve).addScaledVector(h,-.2).setY(ve.y+1),Ae=v(Bu+1.25,0,ue[2]).addScaledVector(h,.15),ke=v(Bu+1.25,0,ue[3]).addScaledVector(h,-.15),Ke=ue[4].set(n.x,6.3,n.z).addScaledVector(u,-.5);ye(Oe,Ae,qt.faja),ye(Ae,Ke,qt.faja),ye(Ke,ke,qt.faja),ye(ke,Ee,qt.faja)}ne.linea_vida&&ye(ue[0].copy(ve).addScaledVector(u,-.14).setY(ve.y+1.42),ue[1].set(n.x,Math.min(9.2,ve.y+2.5),n.z),qt.vida)}y.trabajo==="tendido"&&re(ne,O),y.trabajo==="empalme"&&me(ne),q.setDrawRange(0,Me*2),q.attributes.position.needsUpdate=q.attributes.color.needsUpdate=!0,ge.material.opacity=.55+.3*Math.sin(R*4)}function Re(se){ge.visible=!!m[se],ge.visible&&ge.position.copy(m[se]).setY(.2)}return{grupo:E,zonas:m,puesto:A,metaEscalera:p,cargando:z,llego:ie,restringir:J,cada:L,marcar:Re,puestoLiniero:de,rumbo:g,L_CARGA:zu,get subida(){return De},cima:d}}var K_=1.7,Q_=1.25,ey=1.6,Im=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a));function Dm({sesion:a,obra:e,resolver:t,altura:n}){let i=new Map;function r(s,o,c){for(let l of Object.keys(Tt)){let d=!Vn(o,l);if(d&&!i.has(l)){let u=e.puesto(l,"pickup");i.set(l,{rol:l,x:u.x,z:u.z,y:.15,rumbo:0,pose:"i",fase:0,espera:0})}else d||i.delete(l)}if(a.anfitrion())for(let l of i.values()){let d=null,u=null,h=K_;if(l.pose="i",l.y>n(l.x,l.z)+.5&&!(o.fase==="trabajo"&&ti(o))){let g=e.zonas.poste;l.x=g.x,l.z=g.z,l.y=n(g.x,g.z)}if(o.fase!=="trabajo")d=o.fase==="sala"?e.puesto(l.rol,"pickup"):null;else if(l.rol==="liniero"&&ti(o)){let g=e.puestoLiniero();Object.assign(l,{x:g.x,z:g.z,y:g.y,rumbo:e.rumbo,pose:g.pose,fase:g.fase}),u=e.subida>=1?br(o,l.rol).find(v=>!v.bloqueo)?.paso:null}else if(e.cargando(o)&&/^auxiliar/.test(l.rol))if(l.pose="c",l.rol==="auxiliar1")d=e.metaEscalera,h=Q_;else{let g=c("auxiliar1");if(g){let v=l.x-g.x,m=l.z-g.z,p=Math.hypot(v,m)||1,b=l.x,M=l.z;l.x=g.x+v/p*e.L_CARGA,l.z=g.z+m/p*e.L_CARGA,l.rumbo=Im(l.rumbo,Math.atan2(g.x-l.x,g.z-l.z)),l.fase+=Math.hypot(l.x-b,l.z-M)*4.19}}else u=br(o,l.rol).find(g=>!g.bloqueo)?.paso??null,d=e.puesto(l.rol,u?u.lugar:tn(o).reposo(o,l.rol));let f=!d;if(d){let g=d.x-l.x,v=d.z-l.z,m=Math.hypot(g,v);if(m>.25){let p=Math.min(m,h*s);if(l.x+=g/m*p,l.z+=v/m*p,t(l,.3),l.rumbo=Im(l.rumbo,Math.atan2(g,v))*.25+l.rumbo*.75,l.fase+=p*4.19,l.rol==="auxiliar1"&&e.cargando(o)){let b=c("auxiliar2");b&&Math.hypot(b.x-l.x,b.z-l.z)>e.L_CARGA+.6&&(l.x-=g/m*p,l.z-=v/m*p)}}else f=!0;l.y=n(l.x,l.z)}u&&f?(l.espera+=s,l.espera>ey&&(l.espera=0,a.proponer({t:"intento",paso:u.id,opcion:0,bot:!0,rol:l.rol}))):l.espera=0}}return{B:i,cada:r}}var Lm="./datos-GBQ7LNXL.woff2";var Nm="./datos-2TPSQG6S.woff2";var Fm="./datos-ZMVHH4FS.woff2";var Um="./datos-IYAZYUDK.woff2";var o2=Promise.all([[Lm,500],[Nm,700],[Fm,800],[Um,900]].map(([a,e])=>new FontFace("Montserrat",`url(${a})`,{weight:String(e)}).load().then(t=>document.fonts.add(t)).catch(()=>{})));var zs={"teclado y rat\xF3n":{accion:"E",mundo:"WASD moverse \xB7 rat\xF3n mirar \xB7 E acci\xF3n \xB7 V vista \xB7 R radio \xB7 M mapa \xB7 P pausa \xB7 May\xFAs correr",panel:"Clic o 1\u20133 para elegir \xB7 \u2191 \u2193 mover \xB7 Enter aceptar \xB7 Esc volver",todo:"Teclado y rat\xF3n: WASD moverse, rat\xF3n mirar (clic en el juego para capturarlo), E acci\xF3n, V cambiar vista, R radio, M mapa, P o Esc pausa, May\xFAs correr, H bocina al volante."},t\u00E1ctil:{accion:"\u270B",mundo:"Izquierda: caminar \xB7 derecha: mirar \xB7 \u270B acci\xF3n \xB7 \u{1F441} vista \xB7 \u{1F4FB} radio \xB7 \u{1F5FA} mapa \xB7 \u23F8 pausa",panel:"Toca una opci\xF3n para elegirla",todo:"Pantalla t\xE1ctil: arrastra a la izquierda para caminar (al fondo, corres) y a la derecha para mirar. Botones: \u270B acci\xF3n, \u{1F441} vista, \u{1F4FB} radio, \u{1F5FA} mapa, \u23F8 pausa."},control:{accion:"\u24B6",mundo:"\u24C1 moverse \xB7 \u24C7 mirar \xB7 \u24B6 acci\xF3n \xB7 \u24CE vista \xB7 \u24CD radio \xB7 \u29C9 mapa \xB7 \u2630 pausa \xB7 LT correr",panel:"\u24B6 elegir \xB7 \u271A o \u24C1 mover \xB7 \u24B7 volver",todo:"Control: palanca izquierda moverse, derecha mirar, \u24B6 acci\xF3n, \u24CE vista, \u24CD radio, \u29C9 (Vista) mapa, \u2630 (Men\xFA) pausa, LT correr, LB bocina al volante. En los men\xFAs: cruceta o palanca para mover, \u24B6 elegir, \u24B7 volver."}},ry=`
.mu-capa{--azul:#004E96;--marino:#00305A;--tinta:#0A2342;--amarillo:#FFD627;--verde:#2BB673;--verde-txt:#17844f;--rojo:#E5484D;--rojo-txt:#C62F34;--panel:#F1F4F9;--gris:#5B6B7F;--chip:rgba(0,38,74,.88);font-family:'Montserrat','Segoe UI',system-ui,sans-serif}
.mu-capa button{font:inherit;color:inherit;cursor:pointer}
.mu-hud{position:absolute;left:max(12px,env(safe-area-inset-left));top:max(12px,env(safe-area-inset-top));max-width:min(56vw,400px);background:var(--chip);color:#fff;border-radius:16px;padding:10px 16px;box-shadow:0 6px 20px rgba(0,0,0,.2);backdrop-filter:blur(6px);pointer-events:none}
.mu-hud b{display:block;color:var(--amarillo);font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.mu-tarea{margin-top:2px;font-weight:800;font-size:16px;line-height:1.25}
.mu-lugar{margin-top:3px;opacity:.85;font-size:12px;font-weight:500}
.mu-ind{position:absolute;right:max(12px,env(safe-area-inset-right));top:max(12px,env(safe-area-inset-top));min-width:118px;background:var(--chip);color:#fff;border-radius:16px;padding:10px 16px;box-shadow:0 6px 20px rgba(0,0,0,.2);backdrop-filter:blur(6px);pointer-events:none}
.mu-ind label{display:block;font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--amarillo);text-transform:uppercase}
.mu-ind .v{font-weight:900;font-size:22px;font-variant-numeric:tabular-nums}
.mu-barra{height:8px;border-radius:4px;background:rgba(255,255,255,.18);margin-top:6px;overflow:hidden}.mu-barra i{display:block;height:100%;background:var(--verde);transition:width .5s,background .5s}
.mu-lista{position:absolute;right:max(12px,env(safe-area-inset-right));top:calc(max(12px,env(safe-area-inset-top)) + 92px);width:250px;margin:0;padding:12px 12px 8px;list-style:none;background:rgba(255,255,255,.93);color:var(--tinta);border-radius:18px;box-shadow:0 10px 30px rgba(0,30,70,.2);pointer-events:none;max-height:calc(100vh - 200px);overflow:hidden}
.mu-lista h4{margin:0 0 6px;font-size:11px;letter-spacing:.14em;color:var(--azul);text-transform:uppercase}
.mu-lista li{display:flex;gap:8px;align-items:center;padding:3px 0;font-size:12px;font-weight:600;color:var(--gris);line-height:1.2}
.mu-lista li i{flex:none;width:18px;height:18px;border-radius:50%;border:2px solid #c7d0dc;font-style:normal;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900;box-sizing:border-box}
.mu-lista li small{color:var(--gris);font-weight:500;opacity:.8}
.mu-lista li.mio{color:var(--tinta)}.mu-lista li.mio small{color:var(--azul);font-weight:700;opacity:1}
.mu-lista li.ahora{color:var(--tinta)}.mu-lista li.ahora i{border-color:var(--amarillo);background:var(--amarillo);color:var(--tinta);animation:mu-latido 1.2s infinite}
.mu-lista li.hecho{color:var(--tinta)}.mu-lista li.hecho i{border-color:var(--verde);background:var(--verde);color:#fff}
@keyframes mu-latido{50%{transform:scale(1.18)}}
.mu-aviso{position:absolute;left:50%;bottom:calc(max(10px,env(safe-area-inset-bottom)) + 34px);transform:translateX(-50%);display:flex;align-items:center;gap:10px;background:#fff;color:var(--tinta);border:3px solid var(--amarillo);border-radius:999px;padding:8px 20px 8px 10px;font-weight:800;font-size:15px;white-space:nowrap;max-width:92vw;overflow:hidden;text-overflow:ellipsis;box-shadow:0 10px 30px rgba(0,0,0,.25);pointer-events:none}
.mu-aviso.gris{border-color:#c7d0dc;color:var(--gris);font-weight:600;padding-left:20px}
.mu-tecla{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;padding:0 7px;border-radius:8px;background:var(--amarillo);color:var(--tinta);font-weight:900;font-size:14px;box-sizing:border-box}
.mu-avisos{position:absolute;left:50%;top:calc(max(12px,env(safe-area-inset-top)) + 84px);transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;align-items:center;width:min(70vw,560px);pointer-events:none}
.mu-avisos div{background:var(--verde-txt);color:#fff;border-radius:18px;padding:8px 18px;font-weight:700;font-size:14px;line-height:1.3;box-shadow:0 10px 30px rgba(0,0,0,.25);text-align:center;animation:mu-entra .3s ease-out}
.mu-avisos div.falta{background:var(--rojo-txt)}.mu-avisos div.radio{background:var(--marino);border:2px solid var(--amarillo)}
.mu-avisos small{display:block;font-weight:500;font-size:12px;opacity:.88;margin-top:2px}
@keyframes mu-entra{from{transform:translateY(-10px);opacity:0}}
.mu-fondo{position:absolute;inset:0;background:rgba(0,30,60,.42);display:flex;align-items:center;justify-content:center;padding:12px}
.mu-fondo[hidden]{display:none}
.mu-panel{background:#fff;color:var(--tinta);border-radius:24px;padding:22px 26px;width:min(640px,100%);max-height:calc(100dvh - 24px);overflow:auto;font-size:15px;line-height:1.4;box-shadow:0 30px 80px rgba(0,0,0,.35);animation:mu-aparece .35s cubic-bezier(.2,1.3,.4,1);box-sizing:border-box}
@keyframes mu-aparece{from{transform:scale(.92);opacity:0}}
.mu-panel h1{margin:6px 0 4px;font-size:22px;font-weight:900;line-height:1.15}
.mu-panel h2{display:flex;align-items:center;gap:12px;margin:14px 0 6px;font-size:12px;font-weight:800;letter-spacing:.14em;color:var(--azul);text-transform:uppercase}
.mu-panel h2::before{content:'';flex:none;width:30px;height:6px;border-radius:3px;background:var(--amarillo)}
.mu-panel>h2:first-child{margin-top:0}
.mu-panel p{margin:4px 0 10px;color:#3d4b5c}.mu-panel small{color:var(--gris)}
.mu-panel input{font:inherit;color:var(--tinta);background:var(--panel);border:2px solid #dfe5ee;border-radius:12px;padding:8px 12px;min-height:42px;box-sizing:border-box;width:100%}
.mu-fila{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.mu-fila>*{flex:1 1 140px}
.mu-op{display:flex;gap:12px;align-items:center;width:100%;text-align:left;background:#fff;color:var(--tinta);border:2px solid #dfe5ee;border-radius:16px;padding:10px 14px;margin:8px 0;min-height:48px;font-weight:700;box-sizing:border-box;transition:border-color .15s,background .15s,transform .1s}
.mu-op>span:last-child{flex:1}
.mu-op:hover:not([disabled]){border-color:var(--azul);background:#f5f9ff}
.mu-op:focus-visible,.mu-op.foco,.mu-panel input:focus-visible,.mu-panel input.foco{outline:3px solid var(--amarillo);outline-offset:2px;border-color:var(--azul)}
.mu-op small{display:block;font-weight:500;color:var(--gris);margin-top:2px}
.mu-op b{font-weight:800}
.mu-letra{flex:none;width:30px;height:30px;border-radius:50%;background:var(--panel);display:flex;align-items:center;justify-content:center;font-weight:900;color:var(--azul)}
.mu-op[disabled]{opacity:.5;cursor:default}
.mu-op.elegido{border-color:var(--azul);background:#eef4fb}
.mu-op.mal{border-color:var(--rojo);background:#fdecec;opacity:.85}.mu-op.mal .mu-letra{background:var(--rojo);color:#fff}.mu-op.mal>span:last-child{text-decoration:line-through}
.mu-pri{justify-content:center;background:var(--amarillo);border-color:var(--amarillo);color:var(--tinta);font-weight:800;border-radius:999px}
.mu-pri:hover:not([disabled]){background:#ffe066;border-color:#ffe066}
.mu-pie{margin-top:12px;padding-top:10px;border-top:1px solid #eef1f5;font-size:12px;color:var(--gris);text-align:center}
.mu-nota{background:#fdecec;border-left:5px solid var(--rojo);border-radius:14px;padding:10px 14px;margin:10px 0;line-height:1.45}
.mu-nota small{display:block;color:var(--azul);font-weight:700;margin-top:4px}
.mu-pista{background:var(--panel);border-left:5px solid var(--amarillo);border-radius:14px;padding:10px 14px;margin:10px 0}
.mu-pista small{color:var(--azul);font-weight:700}
.mu-tabla{width:100%;border-collapse:collapse;font-size:14px}.mu-tabla td{padding:8px 6px;border-top:1px solid #eef1f5;vertical-align:top}.mu-tabla td small{color:var(--azul)}
.mu-fila3{display:grid;grid-template-columns:1fr auto auto auto;gap:6px;align-items:center;margin:4px 0}.mu-fila3 .mu-op{margin:0;min-height:38px;padding:6px 12px;justify-content:center}
.mu-ayudas{position:absolute;left:50%;bottom:max(8px,env(safe-area-inset-bottom));transform:translateX(-50%);background:var(--chip);color:#fff;border-radius:999px;padding:5px 14px;font-size:12px;font-weight:600;white-space:nowrap;max-width:94vw;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
.mu-chip{position:absolute;right:max(12px,env(safe-area-inset-right));bottom:max(10px,env(safe-area-inset-bottom));background:var(--chip);color:#fff;border-radius:999px;padding:6px 14px;font-size:12px;font-weight:600;pointer-events:none}
.mu-etq{position:absolute;transform:translate(-50%,-100%);background:var(--chip);color:#fff;border-radius:999px;padding:2px 9px;font-size:11px;font-weight:700;white-space:nowrap;pointer-events:none}
.mu-radio{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 156px)}
.mu-mapa{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 234px)}
.mu-pausa{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 312px)}
.mu-panel canvas{display:block;width:100%;max-height:68dvh;object-fit:contain;border-radius:14px;background:#1F4F6E}
@media (max-width:760px),(max-height:480px){.mu-lista{display:none}.mu-hud{padding:8px 12px}.mu-tarea{font-size:14px}.mu-ind{padding:8px 12px;min-width:96px}.mu-ind .v{font-size:18px}.mu-panel{padding:16px 18px;border-radius:20px}.mu-panel h1{font-size:18px}.mu-op{margin:6px 0;min-height:44px}.mu-avisos{top:calc(max(8px,env(safe-area-inset-top)) + 64px)}}
`,Om=["1","2","3","4","5","6"];function Bm(a,e){let t=document.createElement("style");t.textContent=ry,document.head.append(t);let n=(Z,G="div")=>{let X=document.createElement(G);return X.className=Z,a.append(X),X},i=n("mu-hud"),r=n("mu-ind"),s=n("mu-lista","ol"),o=n("mu-aviso"),c=n("mu-avisos"),l=n("mu-fondo"),d=document.createElement("div");d.className="mu-panel",d.setAttribute("role","dialog"),d.setAttribute("aria-modal","true"),l.append(d),l.hidden=!0,i.hidden=r.hidden=s.hidden=o.hidden=!0;let u=null,h=!1,f=null,g=!1,v=null,m=null,p=[],b="",M=0,_="teclado y rat\xF3n",A=n("mu-ayudas");try{b=localStorage["mundo:nombre"]??""}catch{}let E=()=>[...d.querySelectorAll("button:not([disabled]), input")];function T(Z,G,{cancela:X=!1}={}){let he=f===Z?M:-1,Me=f!==Z;document.pointerLockElement?(u=document.pointerLockElement,h=!0):Z==="pausa"&&(h=!!u),f=Z,g=X,d.innerHTML=G+'<div class="mu-pie"></div>',l.hidden=!1,document.exitPointerLock?.();let fe=E(),ye=fe[he]?he:fe.findIndex(De=>De.classList.contains("elegido"));S(ye>=0?ye:fe.findIndex(De=>De.tagName==="BUTTON")),D(),Me&&bt.clic()}function x(){f=null,v=null,l.hidden=!0,d.innerHTML="",h&&u&&_==="teclado y rat\xF3n"&&!document.pointerLockElement&&u.requestPointerLock?.()?.catch?.(()=>{}),h=!1}function S(Z){let G=E();G.length&&(M=(Z+G.length)%G.length,G.forEach((X,he)=>X.classList.toggle("foco",he===M)),G[M].focus({preventScroll:!0}),G[M].scrollIntoView?.({block:"nearest"}),G[M].tagName==="INPUT"&&G[M].setSelectionRange(G[M].value.length,G[M].value.length))}function w(Z){let G=E().indexOf(document.activeElement);S((G>=0?G:M)+Z),bt.hover()}let D=()=>{let Z=d.querySelector(".mu-pie");Z&&(Z.textContent=zs[_].panel)};d.addEventListener("click",Z=>{let G=Z.target.closest("button");if(!G||G.disabled)return;let{a:X,v:he}=G.dataset;if(X==="rol")F(),e.rol(he);else if(X==="modo")e.modo(he);else if(X==="trabajo")e.trabajo(he);else if(X==="empezar")F(),e.empezar();else if(X==="unirse"){let Me=d.querySelector("[name=codigo]").value.trim();Me&&e.unirse(Me)}else if(X==="copiar")navigator.clipboard?.writeText(he).then(()=>{G.textContent="Enlace copiado \u2713"},()=>{G.textContent=he});else if(X==="opcion")m=Number(he),e.intento(v.id,m);else if(X==="frase")e.radio(Number(he)),x();else if(X==="reiniciar")e.reiniciar();else if(X==="cerrar")x();else if(X==="ajuste"){let[Me,fe]=he.split(":");e.ajuste(Me,Number(fe))}else X==="dev"?e.dev(he,G):X==="ir"?(e.ir(he),x()):X==="reporte"&&e.reporte()});function F(){let Z=d.querySelector("[name=nombre]");if(Z){b=Z.value.trim().slice(0,16);try{localStorage["mundo:nombre"]=b}catch{}e.nombre(b)}}addEventListener("keydown",Z=>{f&&((Z.code==="Escape"||Z.code==="KeyP"&&f==="pausa")&&g?x():Z.code==="ArrowDown"?(Z.preventDefault(),w(1)):Z.code==="ArrowUp"?(Z.preventDefault(),w(-1)):Z.target.tagName!=="INPUT"&&/^(Digit|Numpad)[1-6]$/.test(Z.code)&&d.querySelectorAll("[data-a=opcion],[data-a=frase]")[Number(Z.code.slice(-1))-1]?.click())});function P(Z,G,{codigo:X,enlace:he,conectado:Me,pares:fe}){let ye=Z.jugadores[G]?.rol,De=Z.fase==="trabajo",ue=tn(Z),Je=d.querySelector("[name=nombre]")?.value??b,z=Object.entries(Tt).map(([de,ie])=>{let J=Vn(Z,de),Y=J&&J!==G;return`<button class="mu-op${J===G?" elegido":""}" data-a="rol" data-v="${de}"${Y||!Me?" disabled":""}>${ie.icono} <b>${rt(ie.nombre)}</b> \xB7 ${J===G?"T\xFA":Y?rt(Z.jugadores[J].nombre):"compa\xF1ero autom\xE1tico"}<small>${rt(ue.roles[de])}</small></button>`}).join("");T("sala",`
      <h1>Cuadrilla Segura \xB7 Mundo</h1>
      <p><small>Orden de trabajo: ${rt(ue.nombre)} \xB7 ${rt(ue.lugar)}. Contenido en revisi\xF3n por Salud Ocupacional.</small></p>
      <div class="mu-fila"><label>Tu nombre<input name="nombre" maxlength="16" autocomplete="off" value="${rt(Je)}" placeholder="Como te ver\xE1n los dem\xE1s"></label>
        <div>Sala <b>${rt(X)}</b> \xB7 ${Me?`${fe+1} en l\xEDnea`:"conectando\u2026"}<br><button class="mu-op" data-a="copiar" data-v="${rt(he)}" style="margin:4px 0 0;min-height:36px;padding:6px 10px">Copiar enlace para invitar</button></div></div>
      <h2>${De?"Trabajo en curso: elige un rol libre":"Elige tu rol"}</h2>${z}
      ${De||Object.keys(ta).length<2?"":`<h2>Orden de trabajo</h2>${Object.entries(ta).map(([de,ie])=>`<button class="mu-op${Z.trabajo===de?" elegido":""}" data-a="trabajo" data-v="${de}"${ye?"":" disabled"}><b>${rt(ie.nombre)}</b><small>${rt(ie.resumen)}</small></button>`).join("")}`}
      ${De?"":`<h2>Dificultad</h2><div class="mu-fila">
        <button class="mu-op${Z.modo==="aprendiz"?" elegido":""}" data-a="modo" data-v="aprendiz"${ye?"":" disabled"}><b>Aprendiz</b><small>Con pistas; el juego no deja saltarse el orden.</small></button>
        <button class="mu-op${Z.modo==="tecnico"?" elegido":""}" data-a="modo" data-v="tecnico"${ye?"":" disabled"}><b>T\xE9cnico</b><small>Sin pistas; saltarse un paso es una falta.</small></button></div>
      <button class="mu-op mu-pri" data-a="empezar"${ye?"":" disabled"}>${ye?"Empezar el trabajo":"Elige un rol para empezar"}</button>`}
      <h2>Unirse a otra sala</h2><div class="mu-fila"><input name="codigo" maxlength="12" autocomplete="off" placeholder="C\xF3digo de sala"><button class="mu-op" data-a="unirse" style="margin:0">Unirse</button></div>`)}function I(Z,G,X=[]){v?.id!==Z.id&&(m=null),v=Z,p=X;let he=Ac(Z).map((Me,fe)=>`<button class="mu-op${X.includes(Me)?" mal":""}" data-a="opcion" data-v="${Me}"${X.includes(Me)?" disabled":""}><span class="mu-letra">${Om[fe]}</span><span>${rt(Z.opciones[Me])}</span></button>`).join("");T("decision",`<h2>${rt(Tt[Z.rol].nombre)} \xB7 ${rt(Z.nombre)}</h2><h1>${rt(Z.pregunta)}</h1>${he}
      ${X.length?`<div class="mu-nota"><b>No es as\xED.</b> ${rt(Z.porque)}<br><small>${rt(Z.ref)}</small></div>`:G.modo==="aprendiz"?`<div class="mu-pista"><small>Pista: ${rt(Z.ref)}</small></div>`:""}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Volver</button>`,{cancela:!0})}function N(Z,G){f!=="decision"||v?.id!==Z.paso||(m!==null&&!p.includes(m)&&p.push(m),I(v,G,p))}function B(Z){T("radio",`<h2>Radio</h2>${tn(Z).frases.map((G,X)=>`<button class="mu-op" data-a="frase" data-v="${X}"><span class="mu-letra">${Om[X]}</span><span>${rt(G)}</span></button>`).join("")}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>`,{cancela:!0})}function q(Z){T("mapa",'<h2>Costa Rica \xB7 escala 1:60 \xB7 \u25B2 t\xFA \xB7 \u25CB pick-up y cuadrilla</h2><canvas></canvas><button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>',{cancela:!0}),Z(d.querySelector("canvas"))}function k(Z){let G=vr(Z),X=wm(Z),he=Object.entries(Tt).map(([Me,fe])=>{let ye=Vn(Z,Me),De=Z.eventos.filter(ue=>ue.tipo==="falta"&&ue.rol===Me);return`<tr><td>${fe.icono} <b>${rt(fe.corto)}</b><br><small>${ye?rt(Z.jugadores[ye].nombre):"autom\xE1tico"}</small></td><td><b>${X[Me]}</b></td>
        <td>${De.length?De.map(ue=>`${rt(ue.texto)}<br><small>${rt(ue.ref)}</small>`).join("<br>"):"<small>Sin faltas</small>"}</td></tr>`}).join("");T("fin",`<h1>Trabajo terminado ${"\u2605".repeat(Nu(Z))}${"\u2606".repeat(3-Nu(Z))}</h1>
      <p>Seguridad de la cuadrilla: <b>${G} de 100</b> \xB7 modo ${Z.modo==="tecnico"?"T\xE9cnico":"Aprendiz"}. ${rt(tn(Z).fin)}</p>
      <table class="mu-tabla">${he}</table>
      <p><small>Contenido en revisi\xF3n por Salud Ocupacional. ${rt(tn(Z).nota)}</small></p>
      <button class="mu-op mu-pri" data-a="reiniciar">Volver a la sala</button>
      <button class="mu-op" data-a="cerrar" style="text-align:center">Seguir en el mundo</button>`,{cancela:!0})}function V(Z,G,X,he,Me,fe=""){i.hidden=r.hidden=s.hidden=!1,i.innerHTML=`<b>${G?`${Tt[G].icono} ${rt(Tt[G].nombre)}`:"\u{1F440} Observando"}</b><div class="mu-tarea">${rt(X)}</div>${fe?`<div class="mu-lugar">\u{1F4CD} ${rt(fe)}</div>`:""}`;let ye=vr(Z);r.innerHTML=`<label>Seguridad</label><div class="v">${ye}</div><div class="mu-barra"><i style="width:${ye}%;background:${ye>=80?"var(--verde)":ye>=50?"var(--amarillo)":"var(--rojo)"}"></i></div>`;let De=ei(Z),ue=De.find(z=>!Z.hechos[z.id]&&z.fisico.every(de=>Z.hechos[de])&&z.antes.every(de=>Z.hechos[de]))?.id;s.innerHTML=`<h4>${rt(tn(Z).nombre)} \xB7 ${Object.keys(Z.hechos).length}/${De.length}</h4>`+De.map((z,de)=>`<li class="${Z.hechos[z.id]?"hecho":z.id===ue?"ahora":""}${z.rol===G?" mio":""}"><i>${Z.hechos[z.id]?"\u2713":de+1}</i><span>${rt(z.nombre)} <small>${rt(Tt[z.rol].corto)}</small></span></li>`).join("");let Je=/^(\S{1,3}) · (.+)$/.exec(he??"");o.hidden=!he,o.classList.toggle("gris",!!Me),Je&&!Me?o.innerHTML=`<span class="mu-tecla">${rt(Je[1])}</span><span>${rt(Je[2])}</span>`:o.textContent=he??""}function H(){i.hidden=r.hidden=s.hidden=o.hidden=!0}function te(Z,G="",X=4.5){let he=document.createElement("div");for(he.className=G,he.innerHTML=Z,c.append(he);c.children.length>4;)c.firstChild.remove();setTimeout(()=>he.remove(),X*1e3)}let ge=[];function _e(Z){Z.forEach((G,X)=>{let he=ge[X]??=n("mu-etq");he.hidden=!G.visible,G.visible&&(he.textContent!==G.texto&&(he.textContent=G.texto),he.style.left=G.x+"px",he.style.top=G.y+"px")});for(let G=Z.length;G<ge.length;G++)ge[G].hidden=!0}function He(Z){if(Z.origen!==_&&(_=Z.origen,D()),A.hidden=!!f,!f){let G=zs[_].mundo;A.textContent!==G&&(A.textContent=G);return}if(Z.abajo&&w(1),Z.arriba&&w(-1),Z.accion&&Z.origen==="control"){let G=E()[M];G?.tagName==="BUTTON"&&G.click()}Z.atras&&g&&x()}function Fe(Z,G,X){let he=(ye,De,ue)=>`<div class="mu-fila3"><span>${De}</span><button class="mu-op" data-a="ajuste" data-v="${ye}:-1" aria-label="Bajar ${De}">\u2212</button><b style="min-width:3.2em;text-align:center">${ue}</b><button class="mu-op" data-a="ajuste" data-v="${ye}:1" aria-label="Subir ${De}">+</button></div>`,Me=(ye,De,ue)=>`<button class="mu-op${ue?" elegido":""}" data-a="ajuste" data-v="${ye}:0">${ue?"\u2611":"\u2610"} ${De}</button>`,fe=(ye,De,ue)=>`<button class="mu-op" data-a="${ye}" data-v="${De}">${ue}</button>`;T("pausa",`<h1>Pausa</h1><p><small>El juego sigue corriendo para tu cuadrilla.</small></p>
      ${fe("cerrar","","\u25B6 Continuar")}${X?.fase==="fin"?fe("reporte","","\u{1F3C1} Ver el reporte del trabajo"):""}
      <h2>Sonido</h2>${he("musica","M\xFAsica",Math.round(Z.musica*10))}${he("efectos","Efectos",Math.round(Z.efectos*10))}
      <h2>Controles</h2>${he("sensibilidad","Sensibilidad de la c\xE1mara",Z.sensibilidad.toFixed(1))}${Me("invertir","Invertir el eje vertical",Z.invertir)}
      <p><small>${rt(zs[_].todo)}</small></p>
      <h2>Imagen</h2>${he("resolucion","Resoluci\xF3n","\xD7"+Z.resolucion.toFixed(2))}${Me("diag","Panel de medidas",Z.diag)}
      <h2>Desarrollo</h2>${Me("dev","Opciones de desarrollador",Z.dev)}
      ${Z.dev?`<p><small>Cambian el trabajo de toda la sala (las propone el anfitri\xF3n). \xDAsalas para probar y para reportar fallos.</small></p>
        ${fe("dev","reporte","\u{1F4CB} Copiar reporte del estado (para enviar a Claude)")}
        ${fe("dev","paso","\u23ED Completar el paso que toca")}${fe("dev","todo","\u23E9 Terminar el trabajo")}${fe("dev","reiniciar","\u21BA Reiniciar el trabajo")}
        ${he("tiempo","Velocidad del tiempo","\xD7"+Z.tiempo)}${Me("volar","Volar (sin colisiones, m\xE1s r\xE1pido)",Z.volar)}${Me("colisiones","Mostrar colisiones",Z.colisiones)}<button class="mu-op" data-a="ajuste" data-v="lluvia:0">\u{1F327} Lluvia: ${Z.lluvia}</button>
        <h2>Ir a</h2><div class="mu-fila">${G.map(([ye,De])=>fe("ir",ye,rt(De))).join("")}</div>`:""}`,{cancela:!0})}return{pausa:Fe,get origen(){return _},get abierto(){return f},get paso(){return v},get nombre(){return b},sala:P,decision:I,fallo:N,radio:B,mapa:q,fin:k,cerrar:x,tablero:V,ocultarTablero:H,avisar:te,etiquetas:_e,navegar:He}}var wc=60/116/2,sy=.25,ku=a=>440*2**((a-69)/12),oy=[[48,52,55],[45,48,52],[41,45,48],[43,47,50]],zm=[[72,0,76,79,0,76,74,72,69,0,72,76,0,74,72,69,65,0,69,72,0,74,72,69,67,71,74,0,79,77,74,71],[79,0,79,77,76,0,74,76,72,0,0,76,74,72,69,0,77,0,76,74,72,0,69,72,74,0,71,72,74,76,77,79],[76,76,0,79,0,76,72,0,81,0,79,76,72,0,76,0,77,0,81,0,79,77,76,72,74,0,79,0,77,76,74,71]];function Gm(){let a=null,e=null,t=1,n=.5,i=0,r=0,s=null,o=null;function c(){if(zf(),!a)try{a=new(window.AudioContext||window.webkitAudioContext),e=a.createGain(),e.gain.value=n*.22,e.connect(a.destination),s=a.createOscillator(),s.type="sawtooth",s.frequency.value=40;let p=a.createBiquadFilter();p.type="lowpass",p.frequency.value=420,o=a.createGain(),o.gain.value=0,s.connect(p).connect(o).connect(a.destination),s.start()}catch{a=null;return}a.state!=="running"&&a.resume?.().catch?.(()=>{})}for(let p of["pointerdown","keydown","touchend"])addEventListener(p,c,{passive:!0});let l=new Map;function d(p){if(!l.has(p)){let M=new Float32Array(16),_=new Float32Array(16);for(let A=1;A<16;A++)M[A]=2/(A*Math.PI)*Math.sin(A*Math.PI*p);l.set(p,a.createPeriodicWave(M,_))}return l.get(p)}function u(p,b,M,_,A,E){let T=a.createOscillator(),x=a.createGain();p==="pulso"?T.setPeriodicWave(d(E)):T.type=p,T.frequency.value=b,x.gain.setValueAtTime(A,M),x.gain.exponentialRampToValueAtTime(5e-4,M+_),T.connect(x).connect(e),T.start(M),T.stop(M+_+.02)}function h(p){let b=a.createOscillator(),M=a.createGain();b.frequency.setValueAtTime(140,p),b.frequency.exponentialRampToValueAtTime(45,p+.12),M.gain.setValueAtTime(.9,p),M.gain.exponentialRampToValueAtTime(.001,p+.14),b.connect(M).connect(e),b.start(p),b.stop(p+.16)}let f=null;function g(p,b){f??=(()=>{let E=a.createBuffer(1,a.sampleRate*.06,a.sampleRate),T=E.getChannelData(0);for(let x=0;x<T.length;x++)T[x]=Math.random()*2-1;return E})();let M=a.createBufferSource(),_=a.createBiquadFilter(),A=a.createGain();M.buffer=f,_.type="highpass",_.frequency.value=6e3,A.gain.setValueAtTime(b,p),A.gain.exponentialRampToValueAtTime(.001,p+.05),M.connect(_).connect(A).connect(e),M.start(p)}function v(p,b){let M=Math.floor(p/32)%zm.length,_=p%32,A=oy[Math.floor(_/8)],E=zm[M][_];E&&u("pulso",ku(E),b,wc*1.6,.22,.25),_%2===0&&u("triangle",ku(A[0]-12),b,wc*1.8,.5),u("pulso",ku(A[_%3]+12),b,wc*.5,.05,.125),_%4===0&&h(b),g(b,_%2?.05:.1)}function m(p=null){if(!a||a.state!=="running")return;if(i<a.currentTime&&(i=a.currentTime+.05),n>0)for(;i<a.currentTime+sy;)v(r++,i),i+=wc;else i=a.currentTime;let b=Math.abs(p??0),M=a.currentTime;s.frequency.setTargetAtTime(38+b*3.2,M,.15),o.gain.setTargetAtTime(p===null?0:(.05+Math.min(.08,b*.004))*t,M,.2)}return{desbloquear:c,cada:m,get activo(){return a?.state==="running"},volumen(p,b){n=p,t=b,Gf(b),e&&e.gain.setTargetAtTime(p*.22,a.currentTime,.1)},atenuar(p){e&&e.gain.setTargetAtTime(n*(p?.08:.22),a.currentTime,.3)}}}var Hm={musica:.5,efectos:.8,sensibilidad:1,invertir:!1,resolucion:0,diag:!1,dev:!1,tiempo:1,volar:!1,colisiones:!1,lluvia:"auto"},yt=(()=>{try{return{...Hm,...JSON.parse(localStorage["mundo:ajustes"]??"{}"),tiempo:1,volar:!1,colisiones:!1,lluvia:"auto"}}catch{return{...Hm}}})(),ly=()=>{try{localStorage["mundo:ajustes"]=JSON.stringify(yt)}catch{}};cr.variante="nuevo";var Ln=new URLSearchParams(location.search),ai=lf(),Xu=Ln.has("demo"),Km=(a,e)=>Number.isFinite(parseInt(Ln.get(a)))?parseInt(Ln.get(a)):e,Cc=(...a)=>a.every(Number.isFinite),Qm=new Int16Array(await(await fetch(new URL(cf,import.meta.url))).arrayBuffer()),bn=new Zl({antialias:ai.antialias,powerPreference:"high-performance"}),La=ai.pixelRatio;bn.setPixelRatio(La);bn.setSize(innerWidth,innerHeight);bn.toneMapping=hs;bn.toneMappingExposure=1.05;bn.shadowMap.enabled=!0;bn.shadowMap.autoUpdate=!1;document.body.append(bn.domElement);var nn=new hi;nn.background=new Be(10997738);nn.fog=new Vr(11850728,220,4200);{let a=new rr(bn),e=new ec;nn.environment=a.fromScene(e,.04).texture,nn.environmentIntensity=.22,a.dispose(),e.dispose()}var mn=new Yt(62,innerWidth/innerHeight,.2,7e3);nn.add(new rs(14084607,7043669,1.15));var na=new cs(16773590,2.7),cy=new U(.45,.78,.32).normalize();na.castShadow=!0;na.shadow.mapSize.setScalar(ai.sombra);Object.assign(na.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:260});na.shadow.bias=-6e-4;na.shadow.normalBias=.04;nn.add(na,na.target);addEventListener("resize",()=>{mn.aspect=innerWidth/innerHeight,mn.updateProjectionMatrix(),bn.setSize(innerWidth,innerHeight)});var hn=df(lu.eje),Bt=gf(lu,hn),Tr=Object.entries(Rs).map(([a,e])=>{let[t,n]=du(xi,e.lat,e.lon);return{k:a,n:e.n,x:t,z:n,r:e.r}}),Mi=Object.fromEntries(Tr.map(a=>[a.k,a])),En=bf(Qm,xi,hn,Tr.filter(a=>a.r>0),wf.map(a=>({...a,x:Mi[a.k].x,z:Mi[a.k].z}))),Rc=a=>{let e=hn.en(hn.largo,a);return[e.x,e.z]},aa=vf(Tf.map(a=>({n:a.n,y0:a.p[0][0]==="@"?0:void 0,puntos:a.p.flatMap(e=>e==="@oeste"?[Rc(-Bt.BORDE),Rc(-Bt.BORDE-60)]:e==="@este"?[Rc(Bt.BORDE),Rc(Bt.BORDE+60)]:[typeof e=="string"?[Mi[e].x,Mi[e].z]:du(xi,e[0],e[1])])})),En.alturaBase,En.MAR,Tr.filter(a=>a.r>0)),e0=_f(aa),t0=yf(En,aa,xi),dy=Cf(Qm,xi,aa),js=If(Tr,En,aa),n0=Lf(aa);En.listo(aa,(a,e)=>{e0.rehacer(a,e,420),t0.rehacer(a,e),js.actualizar(a,e)});var Pc={},a0=(a,e)=>Math.abs(a)<320&&Math.abs(e)<360&&(hn.aVia(a,e,Pc),Math.abs(Pc.a)<=Bt.BORDE&&Pc.d>=Bt.D0&&Pc.d<=Bt.D1),ii=(a,e)=>a0(a,e)?Bt.altura(a,e):Math.max(En.altura(a,e),En.MAR-1),qs=Yf(hn,Bt,Km("autos",20)),Yu=uf(hn,Bt.cajas,Bt.circulos,{d0:-1e9,d1:1e9,a:1e9}),un=nm(nn,ii),ks=am(96),et=Af(ii,Bt.estacionado),Xt=Pm({via:hn,barrio:Bt,carrete:et.camion.carrete}),Mr=Wf({escena:nn,carreteras:aa,terreno:En,meta:xi}),uy=new Be(10997738),km=new Be(8293529),hy=new Be(11850728);nn.add(En.grupo,e0.malla,t0.grupo,js.grupo,n0,Bt.grupo,qs.grupo,ks.malla,Xt.grupo,et.grupo);var Vm=[11879996,3960757,5216859,9068464,13666862,4869975],py=Array.from({length:Km("gente",5)},(a,e)=>({id:"p"+e,d:30+e*83%(hn.largo-60),a:e%2?4.4:-4.3,s:e%2?1:-1,v:1.15+e%3*.15,op:{camisa:Vm[e%Vm.length],uniforme:!1}})),Vu={},Gt=new U,Ju={dist:0},Zu=a=>({camisa:Tt[a].camisa,uniforme:!0,arnes:a==="liniero"}),va=null;function Ku(a){va&&nn.remove(va.raiz),va=Eu(a?{camisa:Tt[a].camisa}:{}),va.equipar("casco"),a==="liniero"&&va.equipar("arnes"),nn.add(va.raiz)}Ku(null);var jm=hn.en(Bt.inicio.d,Bt.inicio.a),le={x:jm.x,z:jm.z,y:.15,vx:0,vz:0,rumbo:Math.PI,fase:0,guinada:Math.PI,cabeceo:-.12,dist:4.2,primera:!1,d:0,a:0},Oc=rm(),Nc=im(bn.domElement,Oc),i0=sm(Oc,Ln.has("diag")||yt.diag);Ln.has("dev")&&(yt.dev=!0);var Fc=Gm(),r0=Object.assign(document.createElement("div"),{className:"mu-chip",textContent:"\u{1F507} Toca la pantalla o pulsa una tecla para activar el sonido"});Oc.append(r0);yt.resolucion||(yt.resolucion=La);function s0(){Fc.volumen(yt.musica,yt.efectos),Nc.mirada.sensibilidad=yt.sensibilidad,Nc.mirada.invertir=yt.invertir,La=yt.resolucion,bn.setPixelRatio(La),i0.mostrar(yt.diag||Ln.has("diag")),d0.visible=yt.colisiones}var xn=(()=>{try{return localStorage["mundo:id"]??=Math.random().toString(36).slice(2,10)}catch{return Math.random().toString(36).slice(2,10)}})(),Ar=(Ln.get("sala")||"").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,12);Ar||(Ar=Array.from({length:4},()=>"abcdefghjkmnpqrstuvwxyz"[Math.floor(Math.random()*23)]).join(""),Ln.set("sala",Ar),history.replaceState(null,"","?"+Ln));var fy=`${location.origin}${location.pathname}?sala=${Ar}`,Vs=null,Qu=Ln.has("sinred"),qm=0,ri=()=>qe.E.jugadores[xn]?.rol??null,ut=Bm(Oc,{nombre:a=>{let e=qe.E.jugadores[xn];e&&e.nombre!==(a||"Jugador")&&qe.proponer({t:"entra",nombre:a})},rol:a=>{let e=qe.E.jugadores[xn];Vs=e?.rol===a?null:a,e||qe.proponer({t:"entra",nombre:ut.nombre}),qe.proponer({t:"rol",rol:Vs})},modo:a=>qe.proponer({t:"modo",modo:a}),trabajo:a=>qe.proponer({t:"trabajo",trabajo:a}),empezar:()=>qe.proponer({t:"empezar"}),unirse:a=>{location.search="?sala="+encodeURIComponent(a.toLowerCase())},intento:(a,e)=>qe.proponer({t:"intento",paso:a,opcion:e}),reiniciar:()=>qe.proponer({t:"reiniciar"}),ajuste:(a,e)=>{let t={musica:[0,1,.1],efectos:[0,1,.1],sensibilidad:[.3,3,.1],resolucion:[.5,2,.25],tiempo:[1,8,0]};if(a==="lluvia")yt.lluvia={auto:"s\xED",s\u00ED:"no",no:"auto"}[yt.lluvia];else if(a==="tiempo")yt.tiempo=e>0?Math.min(8,yt.tiempo*2):Math.max(1,yt.tiempo/2);else if(t[a]){let[n,i,r]=t[a];yt[a]=Math.round(Math.max(n,Math.min(i,yt[a]+e*r))*100)/100}else a in yt&&(yt[a]=!yt[a]);ly(),s0(),ut.pausa(yt,nh,qe.E),bt.clic()},dev:(a,e)=>{if(a==="reporte"){let t=JSON.stringify({fecha:new Date().toISOString(),info:(({texto:n,...i})=>i)(ah()),estado:qe.E,huella:qe.huella,eventos:qe.E.n,entrada:ni,navegador:navigator.userAgent,pantalla:[innerWidth,innerHeight,devicePixelRatio]},null,1);navigator.clipboard?.writeText(t).then(()=>{e.textContent="\u{1F4CB} Reporte copiado \u2713 (p\xE9galo en el chat)"},()=>{console.log(t),e.textContent="\u{1F4CB} No se pudo copiar: est\xE1 en la consola"});return}if(!qe.anfitrion()){ut.avisar("Solo el anfitri\xF3n de la sala puede cambiar el trabajo","falta");return}if(a==="reiniciar")qe.proponer({t:"reiniciar",dev:!0});else if(qe.E.fase==="trabajo")for(let t=0;t<(a==="todo"?40:1)&&qe.E.fase==="trabajo";t++){let n=Du(qe.E);if(!n)break;qe.proponer(n.auto?{t:"auto",paso:n.id}:{t:"intento",paso:n.id,opcion:0,dev:!0})}ut.cerrar()},reporte:()=>ut.fin(qe.E),ir:a=>{let e=a==="poste"?Xt.zonas.poste:a==="pickup"?et.local(2.2,0,0,new U):Mi[a];e&&(le.x=e.x+(Mi[a]?12:0),le.z=e.z,le.vx=le.vz=0)},radio:a=>{gn?.fiable({t:"radio",i:a}),o0(a,xn)}});function my(a,e){Number.isInteger(a.n)&&qe.latido(a.n,a.h,e);let t=qe.E,n=t.jugadores[e]?.rol;if(n?Cc(a.x,a.z,a.r)&&Math.abs(a.x)<5e3&&Math.abs(a.z)<5e3&&un.fijar("j:"+e,a.x,a.z,a.r,Zu(n),Cc(a.y)?Math.max(-80,Math.min(300,a.y)):void 0,a.o):un.quitar("j:"+e),Array.isArray(a.c)&&e===t.pickup.chofer&&Cc(...a.c.slice(0,4))&&Math.abs(a.c[0])<5e3&&Math.abs(a.c[1])<5e3&&et.remoto(a.c[0],a.c[1],a.c[2],a.c[3]),Array.isArray(a.b)&&e===qe.idAnfitrion())for(let i of a.b.slice(0,8))Array.isArray(i)&&Object.hasOwn(Tt,i[0])&&Cc(i[1],i[2],i[3],i[4])&&!Vn(t,i[0])&&un.fijar("b:"+i[0],i[1],i[2],i[4],Zu(i[0]),Math.max(-80,Math.min(300,i[3])),i[5])}function o0(a,e){let t=qe.E.jugadores[e],n=tn(qe.E).frases[a];!t||!n||(bt.alerta(),ut.avisar(`\u{1F4FB} <b>${rt(t.rol?Tt[t.rol].corto:"Sin rol")}</b> (${rt(t.nombre)}): ${rt(n)}`,"radio"))}var gn=Ln.has("sinred")?null:cm({sala:Ar,id:xn,alMensaje:(a,e)=>{a?.t==="p"?my(a,e):a?.t==="radio"?o0(a.i,e):qe.recibir(a,e)},alPar:(a,e)=>{e?qe.pedir():(un.quitar("j:"+a),qe.anfitrion()&&qe.proponer({t:"sale",id:a}))}}),qe=Cm({id:xn,red:gn,alEvento:gy}),Er=Dm({sesion:qe,obra:Xt,resolver:Yu,altura:ii});function $m(){let a=ri();if(!a)return;let e=Xt.puesto(a,qe.E.hechos.llegada?"poste":"pickup");le.x=e.x,le.z=e.z,le.vx=le.vz=0}function th(){let a=qe.E;Xu||(a.fase!=="fin"&&ut.abierto==="fin"&&ut.cerrar(),a.fase==="sala"||a.fase==="trabajo"&&!ri()?(!ut.abierto||ut.abierto==="sala")&&ut.sala(a,xn,{codigo:Ar,enlace:fy,conectado:Qu,pares:gn?.estado.pares.size??0}):ut.abierto==="sala"&&ut.cerrar())}function gy(a,e){if(a)if(a.t==="rol")a.id===xn?(Ku(a.rol),a.rol&&e.fase==="trabajo"&&$m()):un.quitar("j:"+a.id),a.rol&&un.quitar("b:"+a.rol);else if(a.t==="sale")un.quitar("j:"+a.id);else if(a.t==="empezar")ut.cerrar(),$m();else if(a.t==="baja"&&a.id===xn||a.t==="aparca"&&Dc>=0){let[t,,n]=Uc[Dc]??Uc[0];et.local(Math.sign(t)*1.8,0,n,Gt),le.x=Gt.x,le.z=Gt.z,Dc=-1}else a.t==="hecho"?(ut.avisar(`\u2713 <b>${rt(Tt[a.rol]?.corto)}</b>: ${rt(Dn[a.paso]?.nombre)}`),(by[a.paso]??bt.ok)(),Dn[a.paso]?.dicta&&ut.avisar(`\u{1F4FB} <b>${rt(Tt[a.rol]?.corto)}</b>: ${rt(Dn[a.paso].dicta)}`,"radio",12),e.fase==="fin"&&setTimeout(bt.logro,600),(e.fase==="fin"||Am(e,a.paso))&&ri()==="liniero"&&(le.x=Xt.zonas.poste.x,le.z=Xt.zonas.poste.z,le.y=ii(le.x,le.z)),ut.paso?.id===a.paso&&ut.cerrar()):a.t==="falta"&&(bt.error(),ut.avisar(`\u26A0 <b>${rt(Tt[a.rol]?.corto)}</b>: ${rt(a.texto)}<small>${rt(a.ref)}</small>`,"falta",9),ut.fallo(a,e));else{for(let t of[...un.mapa.keys()])/^[jb]:/.test(t)&&un.quitar(t);Vs&&e.jugadores[xn]?.rol!==Vs&&(e.jugadores[xn]||qe.proponer({t:"entra",nombre:ut.nombre}),qe.proponer({t:"rol",rol:Vs})),Ku(ri())}th()}var Wm=new ds,Gs=new U(1e9,0,0),yr=[],Hs=new Proxy({},{get:(a,e)=>zs[e]?.accion??"E"}),xy={mesa:"la mesa de empalme",bobina:"la bobina, junto a P04,",calle:"el cruce de la calle",pickup:"el pick-up",poste:"el poste"},by={e_senal:bt.cono,e_bajar:bt.cuerda,e_fusion:bt.clip,e_refusion:bt.clip,e_cierre:bt.metal,e_fijar:bt.clip,t_conos:bt.cono,t_guia:bt.cuerda,t_cruzar:bt.cuerda,t_polea:bt.metal,t_tension:bt.cuerda,t_preformado:bt.clip,t_subir:bt.clip,perimetro:bt.cono,cuerda_extension:bt.cuerda,tensar:bt.cuerda,amarre_medio:bt.cuerda,colocar:bt.metal,tomar:bt.metal,carrito:bt.clip,faja:bt.clip,linea_vida:bt.clip,llegada:bt.metal},nh=[["pickup","El pick-up"],["poste","El poste de trabajo"],...["cartago","limon","liberia","fortuna","puntarenas","sanisidro","penasblancas","canoas"].map(a=>[a,Rs[a].n.split(" \xB7 ")[0]])],Xm=0,Dc=-1,Uc=[[-.45,0,1.75],[.45,0,1.05],[-.45,0,1.05]],Ym=[.45,0,1.75],Ic=0,ju=0,qu=0,Jm=0,eh=0,l0=0,ni="",Zm="",_r=-1,Lc="",$u=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a)),vy=a=>{let e=Vn(qe.E,a);return un.mapa.get(e?"j:"+e:"b:"+a)},Sr=a=>a===ri()?le:qe.anfitrion()&&Er.B.get(a)||vy(a),Wu=a=>Math.hypot(le.x-Xt.zonas[a].x,le.z-Xt.zonas[a].z);function _y(){let a=Tr[0],e=1/0;for(let n of Tr){let i=Math.hypot(le.x-n.x,le.z-n.z);i<e&&(e=i,a=n)}return(aa.cerca(le.x,le.z,Ju).dist<9?aa.rutas[Ju.ruta].n+" \xB7 ":"")+(e<Math.max(90,a.r+40)?a.n:`${a.n} a ${e<1e3?Math.round(e/10)*10+" m":(e/1e3).toFixed(1).replace(".",",")+" km"}`)}function yy(a){let e=[{x:le.x,z:le.z,color:"#FFD627",rumbo:le.rumbo},{x:et.st.x,z:et.st.z,color:"#fff"}];for(let t in Tt){let n=t!==ri()&&Sr(t);n&&e.push({x:n.x,z:n.z,color:"#"+Tt[t].camisa.toString(16).padStart(6,"0")})}return e}En.cada(le.x,le.z,!0);document.getElementById("cargando")?.remove();function c0(){requestAnimationFrame(c0);let a=Math.min(.05,Wm.getDelta())*yt.tiempo,e=Wm.elapsedTime,t=performance.now(),n=Nc.leer(a);ni=n.origen,qe.cada();let i=qe.E,r=ri(),s=!!ut.abierto,o=i.pickup,c=o.chofer===xn,l=o.pasajeros.indexOf(xn),d=c||l>=0;if(ut.navegar(n),s?((n.mapa&&ut.abierto==="mapa"||n.pausa&&ut.abierto==="pausa")&&ut.cerrar(),n.mx=n.mz=n.gx=n.gy=0,n.accion=n.vista=!1,i.fase==="sala"&&(le.guinada+=a*.05)):n.pausa?ut.pausa(yt,nh,qe.E):n.radio&&i.fase==="trabajo"&&r?ut.radio(i):n.mapa&&i.fase!=="sala"&&ut.mapa(P=>dy.dibujar(P,yy(i))),c){let P=a0(et.st.x,et.st.z)||aa.cerca(et.st.x,et.st.z,Ju).dist<5;et.conducir(a,n,P,En.limites),Yu(et.st,1.3),js.empujar(et.st,1.4)}else o.chofer?et.seguir(a):o.x===null?et.fijar(Bt.estacionado.x,Bt.estacionado.z,Bt.estacionado.rumbo):et.fijar(o.x,o.z,o.r);et.asentar(),n.vista&&(le.primera=!le.primera),le.guinada-=n.gx,le.cabeceo=Math.max(le.primera?-1.3:-1.05,Math.min(le.primera?1.3:.55,le.cabeceo+n.gy)),c&&!n.gx&&Math.abs(et.st.v)>.5&&(le.guinada+=$u(le.guinada,et.st.rumbo+Math.PI)*Math.min(1,a*2.5));let u=Math.sin(le.guinada),h=Math.cos(le.guinada),f=n.correr?3.9:1.7,g=1-Math.exp(-a*10),v=Xt.cargando(i)&&/^auxiliar/.test(r??""),m=v?"c":"i",p=0;if(d)et.local(...c?Ym:Uc[l],Gt),le.x=Gt.x,le.z=Gt.z,le.y=et.st.y,le.vx=le.vz=0,le.rumbo=et.st.rumbo,m="o",!c&&Math.abs(et.st.v)>.5&&!n.gx&&(le.guinada+=$u(le.guinada,et.st.rumbo+Math.PI)*Math.min(1,a*2.5)),Dc=c?-1:l;else if(r==="liniero"&&ti(i)&&i.fase==="trabajo"){let P=Xt.puestoLiniero();le.x=P.x,le.z=P.z,le.y=P.y,le.vx=le.vz=0,le.rumbo=Xt.rumbo,le.fase=P.fase,m=P.pose}else{let P=v?Math.min(f,1.7):yt.volar?f*6:f,I=En.limites;le.vx+=((h*n.mx-u*n.mz)*P-le.vx)*g,le.vz+=((-u*n.mx-h*n.mz)*P-le.vz)*g,le.x=Math.max(I.x0,Math.min(I.x1,le.x+le.vx*a)),le.z=Math.max(I.z0,Math.min(I.z1,le.z+le.vz*a)),yt.volar||(Yu(le,.32),et.empujar(le,.32),js.empujar(le,.32)),Xt.restringir(i,r,le,Sr),le.y+=(ii(le.x,le.z)-le.y)*Math.min(1,a*14),p=Math.hypot(le.vx,le.vz),le.primera?le.rumbo=Math.atan2(-u,-h):p>.3&&(le.rumbo+=$u(le.rumbo,Math.atan2(le.vx,le.vz))*Math.min(1,a*12)),le.fase+=p*a*(n.correr?3.1:4.19),Math.floor(le.fase/Math.PI)!==Xm&&(Xm=Math.floor(le.fase/Math.PI),p>.4&&bt.paso())}hn.aVia(le.x,le.z,le),va.raiz.position.set(le.x,le.y,le.z),va.raiz.rotation.y=le.rumbo,va.pose({tipo:Mu[m]??(p>.25?"caminar":"idle"),fase:le.fase,t:e,dt:a}),le.dist+=((le.primera?0:d?8.5:4.2)-le.dist)*Math.min(1,a*9);let b=Math.cos(le.cabeceo),M=(d?0:.45)*Math.min(1,le.dist);if(d){let[P,,I]=c?Ym:Uc[l];et.local(le.primera?P:0,le.primera?2:2.7,le.primera?I:0,Gt)}else Gt.set(le.x,le.y+1.62,le.z);mn.rotation.set(le.cabeceo,le.guinada,0,"YXZ"),mn.position.set(Gt.x+u*b*le.dist+h*M,Gt.y-Math.sin(le.cabeceo)*le.dist,Gt.z+h*b*le.dist-u*M),mn.position.y=Math.max(mn.position.y,ii(mn.position.x,mn.position.z)+.4),mn.updateMatrixWorld(),va.raiz.visible=le.dist>.7&&!d,En.cada(le.x,le.z);for(let P of py)P.d+=P.s*P.v*a,P.d>hn.largo-8?P.s=-1:P.d<8&&(P.s=1),hn.en(P.d,P.a,Vu),un.fijar(P.id,Vu.x,Vu.z,void 0,P.op);Er.cada(a,i,Sr);for(let P of Er.B.values())if(qe.anfitrion())un.fijar("b:"+P.rol,P.x,P.z,P.rumbo,Zu(P.rol),P.y,P.pose);else{let I=un.mapa.get("b:"+P.rol);I&&(P.x=I.x,P.z=I.z,P.y=I.y,P.rumbo=I.rumbo)}un.cada(a,e,mn),yr.length=0,yr.push(le);for(let P of un.mapa.values())hn.aVia(P.x,P.z,P),yr.push(P);qs.cada(a,yr);let _=Mr.cada(a,mn,le.x,le.z,[le,et.st],yt.lluvia==="auto"?null:yt.lluvia==="s\xED"?1:0),A=Math.max(_.lluvia*.8,_.niebla);nn.fog.far=4200-3700*A,nn.fog.near=220-180*A,nn.background.copy(uy).lerp(km,A),nn.fog.color.copy(hy).lerp(km,A),na.intensity=2.7-1.6*_.lluvia,qe.anfitrion()&&Xt.cargando(i)&&Xt.llego(Sr)&&qe.proponer({t:"auto",paso:"llegada"}),Xt.cada(a,e,i,Sr,et);let E="",T=null,x=!1,S=null;if(l>=0)E=`De pasajero \xB7 ${Math.round(Math.abs(et.st.v)*3.6)} km/h`,T=Math.abs(et.st.v)<2?`${Hs[ni]} \xB7 Bajar del pick-up`:null,n.accion&&T&&qe.proponer({t:"baja"});else if(c)E=`Al volante \xB7 ${Math.round(Math.abs(et.st.v)*3.6)} km/h`,T=Math.abs(et.st.v)<2?`${Hs[ni]??"E"} \xB7 Bajar del pick-up`:null,n.accion&&T&&(qe.proponer({t:"aparca",x:+et.st.x.toFixed(2),z:+et.st.z.toFixed(2),r:+et.st.rumbo.toFixed(3)}),et.local(1.8,0,1.75,Gt),le.x=Gt.x,le.z=Gt.z);else if(i.fase==="trabajo"&&r){let P=q=>q.lugar==="arriba"?r==="liniero"&&Xt.subida>=1:Wu(q.lugar)<4.2,I=br(i,r),N=I.find(q=>!q.bloqueo),B=I.find(q=>!q.bloqueo&&P(q.paso))??I.find(q=>P(q.paso));if(v)E=`Lleva la escalera al poste con tu compa\xF1ero \xB7 ${Math.round(Wu("poste"))} m`,S="poste";else if(N){let q=P(N.paso)||N.paso.lugar==="arriba";E=`Tu tarea: ${N.paso.nombre}${q?"":` \xB7 ${xy[N.paso.lugar]} est\xE1 a ${Math.round(Wu(N.paso.lugar))} m`}`,S=q?null:N.paso.lugar}else{let q=Du(i);E=q?`Espera: ${Tt[q.rol].corto} \u2192 ${q.nombre}`:"Trabajo terminado"}B&&!s&&(B.bloqueo&&i.modo==="aprendiz"?(T=`\u{1F512} Antes: ${B.bloqueo.nombre} (${Tt[B.bloqueo.rol].corto})`,x=!0):T=`${Hs[ni]??"E"} \xB7 ${B.paso.accion}`,n.accion&&(x?ut.avisar(`\u{1F512} Primero: <b>${rt(B.bloqueo.nombre)}</b> (${rt(Tt[B.bloqueo.rol].corto)})`,"",3):B.paso.opciones&&!B.bloqueo?ut.decision(B.paso,i):qe.proponer({t:"intento",paso:B.paso.id})))}else i.fase==="trabajo"?E="Observando: los compa\xF1eros autom\xE1ticos hacen el trabajo":i.fase==="fin"&&(E="Trabajo terminado");!d&&!T&&!s&&r&&o.chofer&&o.pasajeros.length<3&&Math.hypot(le.x-et.st.x,le.z-et.st.z)<3.6&&Math.abs(et.st.v)<2&&(T=`${Hs[ni]} \xB7 Subir al pick-up`,n.accion&&qe.proponer({t:"sube"})),!d&&!T&&!s&&r&&Lu(i)&&!o.chofer&&!(r==="liniero"&&ti(i)&&i.fase==="trabajo")&&!v&&Math.hypot(le.x-et.st.x,le.z-et.st.z)<3.6&&(T=`${Hs[ni]??"E"} \xB7 Manejar el pick-up`,n.accion&&qe.proponer({t:"conduce"})),Xt.marcar(S);let w=`${i.n}|${E}|${T}|${r}|${Lc}`;i.fase==="sala"?ut.ocultarTablero():w!==Zm&&(Zm=w,ut.tablero(i,r,E,T,x,Lc)),i.fase==="fin"?(_r<0&&(_r=e),_r!==null&&e-_r>3.5&&!ut.abierto&&!Xu&&(ut.fin(i),_r=null)):_r=-1;let D=[];if(i.fase!=="sala")for(let P in Tt){if(P===r)continue;let I=Sr(P);if(!I)continue;Gt.set(I.x,(I.y??.15)+2.02,I.z);let N=Gt.distanceTo(mn.position);Gt.project(mn);let B=Vn(i,P);D.push({visible:!s&&Gt.z<1&&N<45&&Math.abs(Gt.x)<1.05&&!(B&&B===o.chofer),x:(Gt.x+1)/2*innerWidth,y:(1-Gt.y)/2*innerHeight,texto:`${Tt[P].icono} ${Tt[P].corto}${B?" \xB7 "+i.jugadores[B].nombre:""}`})}ut.etiquetas(D),Fc.cada(c||o.chofer?et.st.v:null),r0.hidden=Fc.activo,c&&n.bocina&&bt.bocina();let F=0;for(let P of yr)(P!==le||!d)&&ks.fijar(F++,P.x,ii(P.x,P.z),P.z,.62);for(let P of qs.todos)ks.fijar(F++,P.x,0,P.z,2.3,4.9,P.rumbo);if(ks.fijar(F++,et.st.x,et.st.y,et.st.z,2.6,6.4,et.st.rumbo),ks.listo(F),Math.hypot(le.x-Gs.x,le.z-Gs.z)>14&&(Gs.set(le.x,le.y,le.z),na.target.position.copy(Gs),na.position.copy(Gs).addScaledVector(cy,120),na.target.updateMatrixWorld(),bn.shadowMap.needsUpdate=!0),gn&&e-Jm>.1){Jm=e;let P={t:"p",x:+le.x.toFixed(2),z:+le.z.toFixed(2),y:+le.y.toFixed(2),r:+le.rumbo.toFixed(2),o:m};c&&(P.c=[+et.st.x.toFixed(2),+et.st.z.toFixed(2),+et.st.rumbo.toFixed(3),+et.st.v.toFixed(1)]),qe.anfitrion()&&(P.n=i.n,P.h=qe.huella,Er.B.size&&(P.b=[...Er.B.values()].map(I=>[I.rol,+I.x.toFixed(2),+I.z.toFixed(2),+I.y.toFixed(2),+I.rumbo.toFixed(2),I.pose]))),(r||qe.anfitrion())&&gn.enviar(P)}if(bn.render(nn,mn),ju+=performance.now()-t,Ic++,e-qu>=1){eh=Ic/(e-qu),l0=ju/Ic,Ic=0,ju=0,qu=e,eh<27&&La>ai.minPixelRatio&&(La=Math.max(ai.minPixelRatio,La-.15),bn.setPixelRatio(La)),Lc=_y(),i0.escribir(ah().texto),gn&&!gn.estado.presencia&&e>6&&qe.jugarSolo();let P=!gn||gn.estado.presencia||e>6,I=gn?.estado.pares.size??0;(P!==Qu||I!==qm)&&(Qu=P,qm=I,th()),Xu&&i.fase==="sala"&&qe.anfitrion()&&(Ln.has("trabajo")&&qe.proponer({t:"trabajo",trabajo:Ln.get("trabajo")}),qe.proponer({t:"empezar",demo:!0}))}}function ah(){let a=bn.info.render,e=gn?[...gn.estado.pares.values()]:[],t=e.filter(r=>r.directo),n=qe.E,i={fps:Math.round(eh),ms:+l0.toFixed(1),llamadas:a.calls,triangulos:a.triangles,pixeles:+La.toFixed(2),entrada:ni,vista:le.primera?"1.\xAA persona":"3.\xAA persona",x:le.x,z:le.z,y:le.y,d:le.d,a:le.a,donde:Lc,red:gn?.estado.ws??"apagada",rtt:gn?.estado.rtt,pares:e.length,directos:t.length,personas:yr.length,autos:qs.todos.length,fase:n.fase,rol:ri(),hechos:Object.keys(n.hechos).length,trabajo:n.trabajo,pasos:ei(n).length,seguridad:vr(n),faltas:n.eventos.filter(r=>r.tipo==="falta").length,anfitrion:qe.anfitrion(),panel:ut.abierto,clima:`${Mr.clima.region}${Mr.clima.lluvia>.1?", lloviendo":""}${Mr.clima.niebla>.2?", neblina":""}`,autosRuta:Mr.autos.filter(r=>r.vivo).length,chofer:n.pickup.chofer===xn,pasajero:n.pickup.pasajeros.includes(xn),velocidad:et.st.v};return i.texto=["Cuadrilla Segura \xB7 Mundo",`${i.fps} cuadros/s \xB7 ${i.ms} ms por cuadro (CPU)`,`${i.llamadas} llamadas de dibujo \xB7 ${Math.round(i.triangulos/1e3)} mil tri\xE1ngulos`,`resoluci\xF3n \xD7${i.pixeles} \xB7 sombra ${ai.sombra} \xB7 ${ai.movil?ai.bajo?"tel\xE9fono modesto":"tel\xE9fono":"escritorio"}`,`${i.personas} personas \xB7 ${i.autos} autos \xB7 ${i.vista} \xB7 ${i.entrada}`,`red: ${i.red}${i.rtt!=null?` \xB7 ida y vuelta ${Math.round(i.rtt)} ms`:""}${i.anfitrion?" \xB7 anfitri\xF3n":""}`,`otros jugadores: ${i.pares}${i.pares?` (${i.directos} con enlace directo${t[0]?.rtt!=null?`, ${Math.round(t[0].rtt)} ms`:""})`:""}`,`trabajo: ${i.fase} \xB7 ${i.hechos}/${i.pasos} pasos \xB7 seguridad ${i.seguridad}`,`clima: ${i.clima} \xB7 ${i.autosRuta} veh\xEDculos en las rutas`,`\u{1F4CD} ${i.donde} \xB7 ${Math.round(i.x)}, ${Math.round(i.z)} \xB7 altura ${i.y.toFixed(1)} m`].join(`
`),i}var d0=(()=>{let a=[],e={},t=(r,s)=>(hn.en(r,s,e),[e.x,.3,e.z]);for(let r of Bt.cajas){let s=[t(r.d0,r.a0),t(r.d1,r.a0),t(r.d1,r.a1),t(r.d0,r.a1)];for(let o=0;o<4;o++)a.push(...s[o],...s[(o+1)%4])}for(let r of Bt.circulos)for(let s=0;s<8;s++){let o=s*Math.PI/4,c=o+Math.PI/4;a.push(r.x+Math.cos(o)*r.r,.3,r.z+Math.sin(o)*r.r,r.x+Math.cos(c)*r.r,.3,r.z+Math.sin(c)*r.r)}let n=new mt;n.setAttribute("position",new tt(a,3));let i=new Jn(n,new Un({color:16723285,depthTest:!1}));return i.renderOrder=9,i.visible=!1,nn.add(i),i})();s0();document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&!ut.abierto&&qe.E.fase!=="sala"&&ut.pausa(yt,nh,qe.E)});globalThis.__mundo={vida:Mr,J:le,info:ah,ajustes:yt,sonido:Fc,colisiones:d0,pueblos:js,rotulos:n0,pendientes:br,ordenOpciones:Ac,red:gn,avatares:un,entrada:Nc,via:hn,barrio:Bt,trafico:qs,obra:Xt,bots:Er,ui:ut,terreno:En,carreteras:aa,pickup:et,lugar:Mi,altura:ii,camara:mn,CARRIL:oc,get sesion(){return qe},get E(){return qe.E}};th();c0();
