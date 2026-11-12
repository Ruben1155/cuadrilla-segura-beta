var cu=0,Jl=1,du=2;var _r=1,uu=2,_a=3,yi=0,Yt=1,Bn=2,Gn=0,ya=1,Zl=2,Kl=3,Ql=4,hu=5;var Ui=100,pu=101,fu=102,mu=103,gu=104,xu=200,vu=201,bu=202,_u=203,ec=204,tc=205,yu=206,Su=207,Mu=208,Eu=209,Au=210,Tu=211,wu=212,Cu=213,Ru=214,ms=0,gs=1,xs=2,la=3,vs=4,bs=5,_s=6,ys=7,nc=0,Pu=1,Iu=2,An=0,ic=1,ac=2,rc=3,yr=4,sc=5,oc=6,lc=7;var cc=300,Si=301,Fi=302,io=303,ao=304,Sr=306,ca=1e3,Dn=1001,Ss=1002,Nt=1003,Lu=1004;var Mr=1005;var Ut=1006,ro=1007;var Mi=1008;var en=1009,dc=1010,uc=1011,Sa=1012,so=1013,Tn=1014,mn=1015,wn=1016,oo=1017,lo=1018,Ma=1020,hc=35902,pc=35899,fc=1021,mc=1022,gn=1023,Nn=1026,Ei=1027,co=1028,uo=1029,Ai=1030,ho=1031;var po=1033,Er=33776,Ar=33777,Tr=33778,wr=33779,fo=35840,mo=35841,go=35842,xo=35843,vo=36196,bo=37492,_o=37496,yo=37488,So=37489,Cr=37490,Mo=37491,Eo=37808,Ao=37809,To=37810,wo=37811,Co=37812,Ro=37813,Po=37814,Io=37815,Lo=37816,Do=37817,No=37818,Uo=37819,Fo=37820,Oo=37821,zo=36492,Bo=36494,Go=36495,ko=36283,Vo=36284,Rr=36285,Ho=36286;var Wa=2300,Ms=2301,ps=2302,Hl=2303,jl=2400,ql=2401,Wl=2402;var Du=3200;var jo=0,Nu=1,ni="",Gt="srgb",Xa="srgb-linear",Ya="linear",ut="srgb";var fs=7680;var Uu=519,Fu=512,Ou=513,zu=514,qo=515,Bu=516,Gu=517,Wo=518,ku=519,Vu=35044;var gc="300 es",Mn=2e3,da=2001;function Lp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){let i=$a("canvas");return i.style.display="block",i}var Dd={},ua=null;function xc(...i){let e="THREE."+i.shift();ua?ua("log",e,...i):console.log(e,...i)}function ju(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=ju(i);let e="THREE."+i.shift();if(ua)ua("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=ju(i);let e="THREE."+i.shift();if(ua)ua("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Di(...i){let e=i.join(" ");e in Dd||(Dd[e]=!0,Ve(...i))}function qu(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wu={[ms]:gs,[xs]:_s,[vs]:ys,[la]:bs,[gs]:ms,[_s]:xs,[ys]:vs,[bs]:la},Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let a=n[e];if(a!==void 0){let r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gl=Math.PI/180,Es=180/Math.PI;function Pr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Np(i,e){return(i%e+e)%e}function xl(i,e,t){return(1-t)*i+t*e}function Fa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Mc=class Mc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mc.prototype.isVector2=!0;var Fe=Mc,Fn=class{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let l=n[a+0],c=n[a+1],d=n[a+2],p=n[a+3],u=r[s+0],f=r[s+1],x=r[s+2],_=r[s+3];if(p!==_||l!==u||c!==f||d!==x){let g=l*u+c*f+d*x+p*_;g<0&&(u=-u,f=-f,x=-x,_=-_,g=-g);let h=1-o;if(g<.9995){let y=Math.acos(g),C=Math.sin(y);h=Math.sin(h*y)/C,o=Math.sin(o*y)/C,l=l*h+u*o,c=c*h+f*o,d=d*h+x*o,p=p*h+_*o}else{l=l*h+u*o,c=c*h+f*o,d=d*h+x*o,p=p*h+_*o;let y=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=y,c*=y,d*=y,p*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,a,r,s){let o=n[a],l=n[a+1],c=n[a+2],d=n[a+3],p=r[s],u=r[s+1],f=r[s+2],x=r[s+3];return e[t]=o*x+d*p+l*f-c*u,e[t+1]=l*x+d*u+c*p-o*f,e[t+2]=c*x+d*f+o*u-l*p,e[t+3]=d*x-o*p-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(a/2),p=o(r/2),u=l(n/2),f=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=u*d*p+c*f*x,this._y=c*f*p-u*d*x,this._z=c*d*x+u*f*p,this._w=c*d*p-u*f*x;break;case"YXZ":this._x=u*d*p+c*f*x,this._y=c*f*p-u*d*x,this._z=c*d*x-u*f*p,this._w=c*d*p+u*f*x;break;case"ZXY":this._x=u*d*p-c*f*x,this._y=c*f*p+u*d*x,this._z=c*d*x+u*f*p,this._w=c*d*p-u*f*x;break;case"ZYX":this._x=u*d*p-c*f*x,this._y=c*f*p+u*d*x,this._z=c*d*x-u*f*p,this._w=c*d*p+u*f*x;break;case"YZX":this._x=u*d*p+c*f*x,this._y=c*f*p+u*d*x,this._z=c*d*x-u*f*p,this._w=c*d*p-u*f*x;break;case"XZY":this._x=u*d*p-c*f*x,this._y=c*f*p-u*d*x,this._z=c*d*x+u*f*p,this._w=c*d*p+u*f*x;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(s-a)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(a+s)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(a+s)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(s-a)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-n*c,this._z=r*d+s*c+n*l-a*o,this._w=s*d-n*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ec=class Ec{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*n),d=2*(o*t-r*a),p=2*(r*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-r*p,this.z=a+l*p+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-n*l,this.z=n*o-a*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ec.prototype.isVector3=!0;var L=Ec,vl=new L,Nd=new Fn,Ac=class Ac{constructor(e,t,n,a,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c)}set(e,t,n,a,r,s,o,l,c){let d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],u=n[2],f=n[5],x=n[8],_=a[0],g=a[3],h=a[6],y=a[1],C=a[4],b=a[7],T=a[2],E=a[5],M=a[8];return r[0]=s*_+o*y+l*T,r[3]=s*g+o*C+l*E,r[6]=s*h+o*b+l*M,r[1]=c*_+d*y+p*T,r[4]=c*g+d*C+p*E,r[7]=c*h+d*b+p*M,r[2]=u*_+f*y+x*T,r[5]=u*g+f*C+x*E,r[8]=u*h+f*b+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*r*d+n*o*l+a*r*c-a*s*l}invert(){let e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*r,f=c*r-s*l,x=t*p+n*u+a*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=p*_,e[1]=(a*c-d*n)*_,e[2]=(o*n-a*s)*_,e[3]=u*_,e[4]=(d*t-a*l)*_,e[5]=(a*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bl.makeScale(e,t)),this}rotate(e){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ac.prototype.isMatrix3=!0;var $e=Ac,bl=new $e,Ud=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){let i={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ut&&(a.r=Kn(a.r),a.g=Kn(a.g),a.b=Kn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ut&&(a.r=oa(a.r),a.g=oa(a.g),a.b=oa(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ni?Ya:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xa]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var rt=Up();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xi,As=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=$a("canvas")),Xi.width=e.width,Xi.height=e.height;let a=Xi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$a("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Kn(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,ha=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(_l(a[s].image)):r.push(_l(a[s]))}else r=_l(a);n.url=r}return t||(e.images[this.uuid]=n),n}};function _l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?As.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var Op=0,yl=new L,Xt=class i extends Un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Dn,a=Dn,r=Ut,s=Mi,o=gn,l=en,c=i.DEFAULT_ANISOTROPY,d=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Pr(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yl).x}get height(){return this.source.getSize(yl).y}get depth(){return this.source.getSize(yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ss:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ss:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=cc;Xt.DEFAULT_ANISOTROPY=1;var Tc=class Tc{constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r,l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],f=l[5],x=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,b=(f+1)/2,T=(h+1)/2,E=(d+u)/4,M=(p+_)/4,m=(x+g)/4;return C>b&&C>T?C<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(C),a=E/n,r=M/n):b>T?b<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(b),n=E/a,r=m/a):T<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(T),n=M/r,a=m/r),this.set(n,a,r,t),this}let y=Math.sqrt((g-x)*(g-x)+(p-_)*(p-_)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(p-_)/y,this.z=(u-d)/y,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tc.prototype.isVector4=!0;var At=Tc,Ts=class extends Un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let a={width:e,height:t,depth:n.depth},r=new Xt(a),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let a=Object.assign({},e.textures[t].image);this.textures[t].source=new ha(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Ts{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ja=class extends Xt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ws=class extends Xt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var no=class no{constructor(e,t,n,a,r,s,o,l,c,d,p,u,f,x,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c,d,p,u,f,x,_,g)}set(e,t,n,a,r,s,o,l,c,d,p,u,f,x,_,g){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=a,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=f,h[7]=x,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new no().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,a=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),s=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=s*d,f=s*p,x=o*d,_=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=f+x*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=x+f*c,t[10]=s*l}else if(e.order==="YXZ"){let u=l*d,f=l*p,x=c*d,_=c*p;t[0]=u+_*o,t[4]=x*o-f,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=f*o-x,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){let u=l*d,f=l*p,x=c*d,_=c*p;t[0]=u-_*o,t[4]=-s*p,t[8]=x+f*o,t[1]=f+x*o,t[5]=s*d,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let u=s*d,f=s*p,x=o*d,_=o*p;t[0]=l*d,t[4]=x*c-f,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let u=s*l,f=s*c,x=o*l,_=o*c;t[0]=l*d,t[4]=_-u*p,t[8]=x*p+f,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*p+x,t[10]=u-_*p}else if(e.order==="XZY"){let u=s*l,f=s*c,x=o*l,_=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=u*p+_,t[5]=s*d,t[9]=f*p-x,t[2]=x*p-f,t[6]=o*d,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Bp)}lookAt(e,t,n){let a=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),di.crossVectors(n,nn),di.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),di.crossVectors(n,nn)),di.normalize(),qr.crossVectors(nn,di),a[0]=di.x,a[4]=qr.x,a[8]=nn.x,a[1]=di.y,a[5]=qr.y,a[9]=nn.y,a[2]=di.z,a[6]=qr.z,a[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],u=n[9],f=n[13],x=n[2],_=n[6],g=n[10],h=n[14],y=n[3],C=n[7],b=n[11],T=n[15],E=a[0],M=a[4],m=a[8],S=a[12],w=a[1],P=a[5],F=a[9],B=a[13],N=a[2],H=a[6],U=a[10],k=a[14],Z=a[3],V=a[7],j=a[11],ee=a[15];return r[0]=s*E+o*w+l*N+c*Z,r[4]=s*M+o*P+l*H+c*V,r[8]=s*m+o*F+l*U+c*j,r[12]=s*S+o*B+l*k+c*ee,r[1]=d*E+p*w+u*N+f*Z,r[5]=d*M+p*P+u*H+f*V,r[9]=d*m+p*F+u*U+f*j,r[13]=d*S+p*B+u*k+f*ee,r[2]=x*E+_*w+g*N+h*Z,r[6]=x*M+_*P+g*H+h*V,r[10]=x*m+_*F+g*U+h*j,r[14]=x*S+_*B+g*k+h*ee,r[3]=y*E+C*w+b*N+T*Z,r[7]=y*M+C*P+b*H+T*V,r[11]=y*m+C*F+b*U+T*j,r[15]=y*S+C*B+b*k+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],f=e[14],x=e[3],_=e[7],g=e[11],h=e[15],y=l*f-c*u,C=o*f-c*p,b=o*u-l*p,T=s*f-c*d,E=s*u-l*d,M=s*p-o*d;return t*(_*y-g*C+h*b)-n*(x*y-g*T+h*E)+a*(x*C-_*T+h*M)-r*(x*b-_*E+g*M)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],a=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-n*(r*d-o*l)+a*(r*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],f=e[11],x=e[12],_=e[13],g=e[14],h=e[15],y=t*o-n*s,C=t*l-a*s,b=t*c-r*s,T=n*l-a*o,E=n*c-r*o,M=a*c-r*l,m=d*_-p*x,S=d*g-u*x,w=d*h-f*x,P=p*g-u*_,F=p*h-f*_,B=u*h-f*g,N=y*B-C*F+b*P+T*w-E*S+M*m;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/N;return e[0]=(o*B-l*F+c*P)*H,e[1]=(a*F-n*B-r*P)*H,e[2]=(_*M-g*E+h*T)*H,e[3]=(u*E-p*M-f*T)*H,e[4]=(l*w-s*B-c*S)*H,e[5]=(t*B-a*w+r*S)*H,e[6]=(g*b-x*M-h*C)*H,e[7]=(d*M-u*b+f*C)*H,e[8]=(s*F-o*w+c*m)*H,e[9]=(n*w-t*F-r*m)*H,e[10]=(x*E-_*b+h*y)*H,e[11]=(p*b-d*E-f*y)*H,e[12]=(o*S-s*P-l*m)*H,e[13]=(t*P-n*S+a*m)*H,e[14]=(_*C-x*T-g*y)*H,e[15]=(d*T-p*C+u*y)*H,this}scale(e){let t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+n,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+n,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){let a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,p=o+o,u=r*c,f=r*d,x=r*p,_=s*d,g=s*p,h=o*p,y=l*c,C=l*d,b=l*p,T=n.x,E=n.y,M=n.z;return a[0]=(1-(_+h))*T,a[1]=(f+b)*T,a[2]=(x-C)*T,a[3]=0,a[4]=(f-b)*E,a[5]=(1-(u+h))*E,a[6]=(g+y)*E,a[7]=0,a[8]=(x+C)*M,a[9]=(g-y)*M,a[10]=(1-(u+_))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=Yi.set(a[0],a[1],a[2]).length(),o=Yi.set(a[4],a[5],a[6]).length(),l=Yi.set(a[8],a[9],a[10]).length();r<0&&(s=-s),bn.copy(this);let c=1/s,d=1/o,p=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=p,bn.elements[9]*=p,bn.elements[10]*=p,t.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,a,r,s,o=Mn,l=!1){let c=this.elements,d=2*r/(t-e),p=2*r/(n-a),u=(t+e)/(t-e),f=(n+a)/(n-a),x,_;if(l)x=r/(s-r),_=s*r/(s-r);else if(o===Mn)x=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===da)x=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=Mn,l=!1){let c=this.elements,d=2/(t-e),p=2/(n-a),u=-(t+e)/(t-e),f=-(n+a)/(n-a),x,_;if(l)x=1/(s-r),_=s/(s-r);else if(o===Mn)x=-2/(s-r),_=-(s+r)/(s-r);else if(o===da)x=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};no.prototype.isMatrix4=!0;var ht=no,Yi=new L,bn=new ht,zp=new L(0,0,0),Bp=new L(1,1,1),di=new L,qr=new L,nn=new L,Od=new ht,zd=new Fn,Qn=class i{constructor(e=0,t=0,n=0,a=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],u=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zd.setFromEuler(this),this.setFromQuaternion(zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var Za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gp=0,Bd=new L,$i=new Fn,Xn=new ht,Wr=new L,Oa=new L,kp=new L,Vp=new Fn,Gd=new L(1,0,0),kd=new L(0,1,0),Vd=new L(0,0,1),Hd={type:"added"},Hp={type:"removed"},Ji={type:"childadded",child:null},Sl={type:"childremoved",child:null},gt=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Qn,n=new Fn,a=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new $e}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(kd,e)}rotateZ(e){return this.rotateOnAxis(Vd,e)}translateOnAxis(e,t){return Bd.copy(e).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(kd,e)}translateZ(e){return this.translateOnAxis(Vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);let a=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Oa,Wr,this.up):Xn.lookAt(Wr,Oa,this.up),this.quaternion.setFromRotationMatrix(Xn),a&&(Xn.extractRotation(a.matrixWorld),$i.setFromRotationMatrix(Xn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*a,r[13]+=n-r[1]*t-r[5]*n-r[9]*a,r[14]+=a-r[2]*t-r[6]*n-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),f=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=a,n;function s(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new L(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jp={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=rt.workingColorSpace){if(e=Np(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ml(s,r,e+1/3),this.g=Ml(s,r,e),this.b=Ml(s,r,e-1/3)}return rt.colorSpaceToWorking(this,a),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return rt.workingToColorSpace(Bt.copy(this),e),Math.round(at(Bt.r*255,0,255))*65536+Math.round(at(Bt.g*255,0,255))*256+Math.round(at(Bt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,a=Bt.g,r=Bt.b,s=Math.max(n,a,r),o=Math.min(n,a,r),l,c,d=(o+s)/2;if(o===s)l=0,c=0;else{let p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(a-r)/p+(a<r?6:0);break;case a:l=(r-n)/p+2;break;case r:l=(n-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Gt){rt.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,a=Bt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Xr);let n=xl(ui.h,Xr.h,t),a=xl(ui.s,Xr.s,t),r=xl(ui.l,Xr.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new qe;qe.NAMES=Xu;var Ka=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qa=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_n=new L,Yn=new L,El=new L,$n=new L,Zi=new L,Ki=new L,jd=new L,Al=new L,Tl=new L,wl=new L,Cl=new At,Rl=new At,Pl=new At,mi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),_n.subVectors(e,t),a.cross(_n);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){_n.subVectors(a,t),Yn.subVectors(n,t),El.subVectors(e,t);let s=_n.dot(_n),o=_n.dot(Yn),l=_n.dot(El),c=Yn.dot(Yn),d=Yn.dot(El),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,f=(c*l-o*d)*u,x=(s*d-o*l)*u;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,a,r,s,o,l){return this.getBarycoord(e,t,n,a,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(s,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(e,t,n,a,r,s){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,n),Pl.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Cl,r.x),s.addScaledVector(Rl,r.y),s.addScaledVector(Pl,r.z),s}static isFrontFacing(e,t,n,a){return _n.subVectors(n,t),Yn.subVectors(e,t),_n.cross(Yn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),_n.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,a=this.b,r=this.c,s,o;Zi.subVectors(a,n),Ki.subVectors(r,n),Al.subVectors(e,n);let l=Zi.dot(Al),c=Ki.dot(Al);if(l<=0&&c<=0)return t.copy(n);Tl.subVectors(e,a);let d=Zi.dot(Tl),p=Ki.dot(Tl);if(d>=0&&p<=d)return t.copy(a);let u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(Zi,s);wl.subVectors(e,r);let f=Zi.dot(wl),x=Ki.dot(wl);if(x>=0&&f<=x)return t.copy(r);let _=f*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Ki,o);let g=d*x-f*p;if(g<=0&&p-d>=0&&f-x>=0)return jd.subVectors(r,a),o=(p-d)/(p-d+(f-x)),t.copy(a).addScaledVector(jd,o);let h=1/(g+_+u);return s=_*h,o=u*h,t.copy(n).addScaledVector(Zi,s).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},On=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,yn):yn.fromBufferAttribute(r,s),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}let a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),$r.subVectors(this.max,za),Qi.subVectors(e.a,za),ea.subVectors(e.b,za),ta.subVectors(e.c,za),hi.subVectors(ea,Qi),pi.subVectors(ta,ea),Ri.subVectors(Qi,ta);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Ri.z,Ri.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Ri.z,0,-Ri.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Ri.y,Ri.x,0];return!Il(t,Qi,ea,ta,$r)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,Qi,ea,ta,$r))?!1:(Jr.crossVectors(hi,pi),t=[Jr.x,Jr.y,Jr.z],Il(t,Qi,ea,ta,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,Yr=new On,Qi=new L,ea=new L,ta=new L,hi=new L,pi=new L,Ri=new L,za=new L,$r=new L,Jr=new L,Pi=new L;function Il(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Pi.fromArray(i,r);let o=a.x*Math.abs(Pi.x)+a.y*Math.abs(Pi.y)+a.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),d=n.dot(Pi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Ct=new L,Zr=new Fe,qp=0,Dt=class extends Un{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vu,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),a=Kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),a=Kt(a,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var tr=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wp=new On,Ba=new L,Ll=new L,ei=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);let t=Ba.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ba,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(Ll)),this.expandByPoint(Ba.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xp=0,un=new ht,Dl=new gt,na=new L,an=new On,Ga=new On,Lt=new L,xt=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lp(e)?tr:er)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let a=0,r=e.length;a<r;a++){let s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let a=0;a<n;a++){let r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(an.min,Ga.min),an.expandByPoint(Lt),Lt.addVectors(an.max,Ga.max),an.expandByPoint(Lt)):(an.expandByPoint(Ga.min),an.expandByPoint(Ga.max))}an.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)Lt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(Lt));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Lt.fromBufferAttribute(o,c),l&&(na.fromBufferAttribute(e,c),Lt.add(na)),a=Math.max(a,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,a=t.normal,r=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let m=0;m<n.count;m++)o[m]=new L,l[m]=new L;let c=new L,d=new L,p=new L,u=new Fe,f=new Fe,x=new Fe,_=new L,g=new L;function h(m,S,w){c.fromBufferAttribute(n,m),d.fromBufferAttribute(n,S),p.fromBufferAttribute(n,w),u.fromBufferAttribute(r,m),f.fromBufferAttribute(r,S),x.fromBufferAttribute(r,w),d.sub(c),p.sub(c),f.sub(u),x.sub(u);let P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(P),g.copy(p).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(P),o[m].add(_),o[S].add(_),o[w].add(_),l[m].add(g),l[S].add(g),l[w].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let m=0,S=y.length;m<S;++m){let w=y[m],P=w.start,F=w.count;for(let B=P,N=P+F;B<N;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let C=new L,b=new L,T=new L,E=new L;function M(m){T.fromBufferAttribute(a,m),E.copy(T);let S=o[m];C.copy(S),C.sub(T.multiplyScalar(T.dot(S))).normalize(),b.crossVectors(E,S);let P=b.dot(l[m])<0?-1:1;s.setXYZW(m,C.x,C.y,C.z,P)}for(let m=0,S=y.length;m<S;++m){let w=y[m],P=w.start,F=w.count;for(let B=P,N=P+F;B<N;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let a=new L,r=new L,s=new L,o=new L,l=new L,c=new L,d=new L,p=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)a.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,r),p.subVectors(a,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d),f=0,x=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let h=0;h<d;h++)u[x++]=c[f++]}return new Dt(u,d,p)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){let u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let a={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];d.push(f.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let a=e.attributes;for(let c in a){let d=a[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],p=r[c];for(let u=0,f=p.length;u<f;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,d=s.length;c<d;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nl=new L,Yp=new L,$p=new $e,Sn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let a=Nl.subVectors(n,t).cross(Yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let a=e.delta(Nl),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$p.getNormalMatrix(e),a=this.coplanarPoint(Nl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jp=0,ti=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=ya,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(t){let r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Zn=new L,Ul=new L,Kr=new L,Qr=new L,nr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ul.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Ul);let r=e.distanceTo(t)*.5,s=-this.direction.dot(Kr),o=Qr.dot(this.direction),l=-Qr.dot(Kr),c=Qr.lengthSq(),d=Math.abs(1-s*s),p,u,f,x;if(d>0)if(p=s*l-o,u=s*o-l,x=r*d,p>=0)if(u>=-x)if(u<=x){let _=1/d;p*=_,u*=_,f=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-x?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c):u<=x?(p=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Ul).addScaledVector(Kr,u),f}intersectSphere(e,t){if(e.radius<0)return null;Zn.subVectors(e.center,this.origin);let n=Zn.dot(this.direction),a=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(a>r)return null;let s=Math.sqrt(r-a),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,a,r){let s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=e.x-s.x,u=e.y-s.y,f=e.z-s.z,x=t.x-s.x,_=t.y-s.y,g=t.z-s.z,h=n.x-s.x,y=n.y-s.y,C=n.z-s.z,b=Math.abs(l),T=Math.abs(c),E=Math.abs(d),M,m,S,w,P,F,B,N,H,U,k,Z;if(b>=T&&b>=E?(S=l,F=p,H=x,Z=h,l>=0?(M=c,m=d,w=u,P=f,B=_,N=g,U=y,k=C):(M=d,m=c,w=f,P=u,B=g,N=_,U=C,k=y)):T>=E?(S=c,F=u,H=_,Z=y,c>=0?(M=d,m=l,w=f,P=p,B=g,N=x,U=C,k=h):(M=l,m=d,w=p,P=f,B=x,N=g,U=h,k=C)):(S=d,F=f,H=g,Z=C,d>=0?(M=l,m=c,w=p,P=u,B=x,N=_,U=h,k=y):(M=c,m=l,w=u,P=p,B=_,N=x,U=y,k=h)),S===0)return null;let V=M/S,j=m/S,ee=1/S,de=w-V*F,Ee=P-j*F,Xe=B-V*H,Je=N-j*H,Ke=U-V*Z,Q=k-j*Z,X=Ke*Je-Q*Xe,ue=de*Q-Ee*Ke,I=Xe*Ee-Je*de;if(a){if(X<0||ue<0||I<0)return null}else if((X<0||ue<0||I<0)&&(X>0||ue>0||I>0))return null;let q=X+ue+I;if(q===0)return null;let ie=ee*(X*F+ue*H+I*Z);return(q>0?ie<0:ie>0)?null:this.at(ie/q,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},En=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qd=new ht,Ii=new nr,es=new ei,Wd=new L,ts=new L,ns=new L,is=new L,Fl=new L,as=new L,Xd=new L,rs=new L,Ze=class extends gt{constructor(e=new xt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);let o=this.morphTargetInfluences;if(r&&o){as.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],p=r[l];d!==0&&(Fl.fromBufferAttribute(p,e),s?as.addScaledVector(Fl,d):as.addScaledVector(Fl.sub(t),d))}t.add(as)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(es.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(es,Wd)===null||Ii.origin.distanceToSquared(Wd)>(e.far-e.near)**2))&&(qd.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(qd),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let a,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,_=u.length;x<_;x++){let g=u[x],h=s[g.materialIndex],y=Math.max(g.start,f.start),C=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,T=C;b<T;b+=3){let E=o.getX(b),M=o.getX(b+1),m=o.getX(b+2);a=ss(this,h,e,n,c,d,p,E,M,m),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{let x=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=x,h=_;g<h;g+=3){let y=o.getX(g),C=o.getX(g+1),b=o.getX(g+2);a=ss(this,s,e,n,c,d,p,y,C,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,_=u.length;x<_;x++){let g=u[x],h=s[g.materialIndex],y=Math.max(g.start,f.start),C=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,T=C;b<T;b+=3){let E=b,M=b+1,m=b+2;a=ss(this,h,e,n,c,d,p,E,M,m),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{let x=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=x,h=_;g<h;g+=3){let y=g,C=g+1,b=g+2;a=ss(this,s,e,n,c,d,p,y,C,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}};function Zp(i,e,t,n,a,r,s,o){let l;if(e.side===Yt?l=n.intersectTriangle(s,r,a,!0,o):l=n.intersectTriangle(a,r,s,e.side===yi,o),l===null)return null;rs.copy(o),rs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rs);return c<t.near||c>t.far?null:{distance:c,point:rs.clone(),object:i}}function ss(i,e,t,n,a,r,s,o,l,c){i.getVertexPosition(o,ts),i.getVertexPosition(l,ns),i.getVertexPosition(c,is);let d=Zp(i,e,t,n,ts,ns,is,Xd);if(d){let p=new L;mi.getBarycoord(Xd,ts,ns,is,p),a&&(d.uv=mi.getInterpolatedAttribute(a,o,l,c,p,new Fe)),r&&(d.uv1=mi.getInterpolatedAttribute(r,o,l,c,p,new Fe)),s&&(d.normal=mi.getInterpolatedAttribute(s,o,l,c,p,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};mi.getNormal(ts,ns,is,u.normal),d.face=u,d.barycoord=p}return d}var ir=class extends Xt{constructor(e=null,t=1,n=1,a,r,s,o,l,c=Nt,d=Nt,p,u){super(null,s,o,l,c,d,a,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fa=class extends Dt{constructor(e,t,n,a=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ia=new ht,Yd=new ht,os=[],$d=new On,Kp=new ht,ka=new Ze,Va=new ei,Vt=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<n;a++)this.setMatrixAt(a,Kp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ia),$d.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union($d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ia),Va.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(Va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,a=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=a[s+o]}raycast(e,t){let n=this.matrixWorld,a=this.count;if(ka.geometry=this.geometry,ka.material=this.material,ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(n),e.ray.intersectsSphere(Va)!==!1))for(let r=0;r<a;r++){this.getMatrixAt(r,ia),Yd.multiplyMatrices(n,ia),ka.matrixWorld=Yd,ka.raycast(e,os);for(let s=0,o=os.length;s<o;s++){let l=os[s];l.instanceId=r,l.object=this,t.push(l)}os.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,a=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(a*this.count),a,this.count,co,mn));let r=this.morphTexture.source.data.data,s=0;for(let c=0;c<n.length;c++)s+=n[c];let o=this.geometry.morphTargetsRelative?1:1-s,l=a*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new ei,Qp=new Fe(.5,.5),ls=new L,ma=class{constructor(e=new Sn,t=new Sn,n=new Sn,a=new Sn,r=new Sn,s=new Sn){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){let a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],u=r[6],f=r[7],x=r[8],_=r[9],g=r[10],h=r[11],y=r[12],C=r[13],b=r[14],T=r[15];if(a[0].setComponents(c-s,f-d,h-x,T-y).normalize(),a[1].setComponents(c+s,f+d,h+x,T+y).normalize(),a[2].setComponents(c+o,f+p,h+_,T+C).normalize(),a[3].setComponents(c-o,f-p,h-_,T-C).normalize(),n)a[4].setComponents(l,u,g,b).normalize(),a[5].setComponents(c-l,f-u,h-g,T-b).normalize();else if(a[4].setComponents(c-l,f-u,h-g,T-b).normalize(),t===Mn)a[5].setComponents(c+l,f+u,h+g,T+b).normalize();else if(t===da)a[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=Qp.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let a=t[n];if(ls.x=a.normal.x>0?e.max.x:e.min.x,ls.y=a.normal.y>0?e.max.y:e.min.y,ls.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gi=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cs=new L,Rs=new L,Jd=new ht,Ha=new nr,cs=new ei,Ol=new L,Zd=new L,Ps=class extends gt{constructor(e=new xt,t=new gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let a=1,r=t.count;a<r;a++)Cs.fromBufferAttribute(t,a-1),Rs.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Cs.distanceTo(Rs);e.setAttribute("lineDistance",new Ye(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(a),cs.radius+=r,e.ray.intersectsSphere(cs)===!1)return;Jd.copy(a).invert(),Ha.copy(e.ray).applyMatrix4(Jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let f=Math.max(0,s.start),x=Math.min(d.count,s.start+s.count);for(let _=f,g=x-1;_<g;_+=c){let h=d.getX(_),y=d.getX(_+1),C=ds(this,e,Ha,l,h,y,_);C&&t.push(C)}if(this.isLineLoop){let _=d.getX(x-1),g=d.getX(f),h=ds(this,e,Ha,l,_,g,x-1);h&&t.push(h)}}else{let f=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let _=f,g=x-1;_<g;_+=c){let h=ds(this,e,Ha,l,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){let _=ds(this,e,Ha,l,x-1,f,x-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){let o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ds(i,e,t,n,a,r,s){let o=i.geometry.attributes.position;if(Cs.fromBufferAttribute(o,a),Rs.fromBufferAttribute(o,r),t.distanceSqToSegment(Cs,Rs,Ol,Zd)>n)return;Ol.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ol);if(!(c<e.near||c>e.far))return{distance:c,point:Zd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Kd=new L,Qd=new L,Ni=class extends Ps{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let a=0,r=t.count;a<r;a+=2)Kd.fromBufferAttribute(t,a),Qd.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Kd.distanceTo(Qd);e.setAttribute("lineDistance",new Ye(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ar=class extends Xt{constructor(e=[],t=Si,n,a,r,s,o,l,c,d){super(e,t,n,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends Xt{constructor(e,t,n,a,r,s,o,l,c){super(e,t,n,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends Xt{constructor(e,t,n=Tn,a,r,s,o=Nt,l=Nt,c,d=Nn,p=1){if(d!==Nn&&d!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,a,r,s,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Is=class extends xi{constructor(e,t=Tn,n=Si,a,r,s=Nt,o=Nt,l,c=Nn){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,a,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},rr=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ht=class i extends xt{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};let o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],d=[],p=[],u=0,f=0;x("z","y","x",-1,-1,n,t,e,s,r,0),x("z","y","x",1,-1,n,t,-e,s,r,1),x("x","z","y",1,1,e,n,t,a,s,2),x("x","z","y",1,-1,e,n,-t,a,s,3),x("x","y","z",1,-1,e,t,n,a,r,4),x("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function x(_,g,h,y,C,b,T,E,M,m,S){let w=b/M,P=T/m,F=b/2,B=T/2,N=E/2,H=M+1,U=m+1,k=0,Z=0,V=new L;for(let j=0;j<U;j++){let ee=j*P-B;for(let de=0;de<H;de++){let Ee=de*w-F;V[_]=Ee*y,V[g]=ee*C,V[h]=N,c.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[h]=E>0?1:-1,d.push(V.x,V.y,V.z),p.push(de/M),p.push(1-j/m),k+=1}}for(let j=0;j<m;j++)for(let ee=0;ee<M;ee++){let de=u+ee+H*j,Ee=u+ee+H*(j+1),Xe=u+(ee+1)+H*(j+1),Je=u+(ee+1)+H*j;l.push(de,Ee,Je),l.push(Ee,Xe,Je),Z+=6}o.addGroup(f,Z,S),f+=Z,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xa=class i extends xt{constructor(e=1,t=1,n=4,a=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:a,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),a=Math.max(3,Math.floor(a)),r=Math.max(1,Math.floor(r));let s=[],o=[],l=[],c=[],d=t/2,p=Math.PI/2*e,u=t,f=2*p+u,x=n*2+r,_=a+1,g=new L,h=new L;for(let y=0;y<=x;y++){let C=0,b=0,T=0,E=0;if(y<=n){let S=y/n,w=S*Math.PI/2;b=-d-e*Math.cos(w),T=e*Math.sin(w),E=-e*Math.cos(w),C=S*p}else if(y<=n+r){let S=(y-n)/r;b=-d+S*t,T=e,E=0,C=p+S*u}else{let S=(y-n-r)/n,w=S*Math.PI/2;b=d+e*Math.sin(w),T=e*Math.cos(w),E=e*Math.sin(w),C=p+u+S*p}let M=Math.max(0,Math.min(1,C/f)),m=0;y===0?m=.5/a:y===x&&(m=-.5/a);for(let S=0;S<=a;S++){let w=S/a,P=w*Math.PI*2,F=Math.sin(P),B=Math.cos(P);h.x=-T*B,h.y=b,h.z=T*F,o.push(h.x,h.y,h.z),g.set(-T*B,E,T*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(w+m,M)}if(y>0){let S=(y-1)*_;for(let w=0;w<a;w++){let P=S+w,F=S+w+1,B=y*_+w,N=y*_+w+1;s.push(P,F,B),s.push(F,N,B)}}}this.setIndex(s),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},sr=class i extends xt{constructor(e=1,t=32,n=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:a},t=Math.max(3,t);let r=[],s=[],o=[],l=[],c=new L,d=new Fe;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let f=n+p/t*a;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(s[u]/e+1)/2,d.y=(s[u+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},hn=class i extends xt{constructor(e=1,t=1,n=1,a=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),r=Math.floor(r);let d=[],p=[],u=[],f=[],x=0,_=[],g=n/2,h=0;y(),s===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(f,2));function y(){let b=new L,T=new L,E=0,M=(t-e)/n;for(let m=0;m<=r;m++){let S=[],w=m/r,P=w*(t-e)+e;for(let F=0;F<=a;F++){let B=F/a,N=B*l+o,H=Math.sin(N),U=Math.cos(N);T.x=P*H,T.y=-w*n+g,T.z=P*U,p.push(T.x,T.y,T.z),b.set(H,M,U).normalize(),u.push(b.x,b.y,b.z),f.push(B,1-w),S.push(x++)}_.push(S)}for(let m=0;m<a;m++)for(let S=0;S<r;S++){let w=_[S][m],P=_[S+1][m],F=_[S+1][m+1],B=_[S][m+1];(e>0||S!==0)&&(d.push(w,P,B),E+=3),(t>0||S!==r-1)&&(d.push(P,F,B),E+=3)}c.addGroup(h,E,0),h+=E}function C(b){let T=x,E=new Fe,M=new L,m=0,S=b===!0?e:t,w=b===!0?1:-1;for(let F=1;F<=a;F++)p.push(0,g*w,0),u.push(0,w,0),f.push(.5,.5),x++;let P=x;for(let F=0;F<=a;F++){let N=F/a*l+o,H=Math.cos(N),U=Math.sin(N);M.x=S*U,M.y=g*w,M.z=S*H,p.push(M.x,M.y,M.z),u.push(0,w,0),E.x=H*.5+.5,E.y=U*.5*w+.5,f.push(E.x,E.y),x++}for(let F=0;F<a;F++){let B=T+F,N=P+F;b===!0?d.push(N,N+1,B):d.push(N+1,N,B),m+=3}c.addGroup(h,m,b===!0?1:2),h+=m}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class i extends hn{constructor(e=1,t=1,n=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,n,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ls=class i extends xt{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};let r=[],s=[];o(a),c(n),d(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let C=new L,b=new L,T=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],C),f(t[E+1],b),f(t[E+2],T),l(C,b,T,y)}function l(y,C,b,T){let E=T+1,M=[];for(let m=0;m<=E;m++){M[m]=[];let S=y.clone().lerp(b,m/E),w=C.clone().lerp(b,m/E),P=E-m;for(let F=0;F<=P;F++)F===0&&m===E?M[m][F]=S:M[m][F]=S.clone().lerp(w,F/P)}for(let m=0;m<E;m++)for(let S=0;S<2*(E-m)-1;S++){let w=Math.floor(S/2);S%2===0?(u(M[m][w+1]),u(M[m+1][w]),u(M[m][w])):(u(M[m][w+1]),u(M[m+1][w+1]),u(M[m+1][w]))}}function c(y){let C=new L;for(let b=0;b<r.length;b+=3)C.x=r[b+0],C.y=r[b+1],C.z=r[b+2],C.normalize().multiplyScalar(y),r[b+0]=C.x,r[b+1]=C.y,r[b+2]=C.z}function d(){let y=new L;for(let C=0;C<r.length;C+=3){y.x=r[C+0],y.y=r[C+1],y.z=r[C+2];let b=g(y)/2/Math.PI+.5,T=h(y)/Math.PI+.5;s.push(b,1-T)}x(),p()}function p(){for(let y=0;y<s.length;y+=6){let C=s[y+0],b=s[y+2],T=s[y+4],E=Math.max(C,b,T),M=Math.min(C,b,T);E>.9&&M<.1&&(C<.2&&(s[y+0]+=1),b<.2&&(s[y+2]+=1),T<.2&&(s[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,C){let b=y*3;C.x=e[b+0],C.y=e[b+1],C.z=e[b+2]}function x(){let y=new L,C=new L,b=new L,T=new L,E=new Fe,M=new Fe,m=new Fe;for(let S=0,w=0;S<r.length;S+=9,w+=6){y.set(r[S+0],r[S+1],r[S+2]),C.set(r[S+3],r[S+4],r[S+5]),b.set(r[S+6],r[S+7],r[S+8]),E.set(s[w+0],s[w+1]),M.set(s[w+2],s[w+3]),m.set(s[w+4],s[w+5]),T.copy(y).add(C).add(b).divideScalar(3);let P=g(T);_(E,w+0,y,P),_(M,w+2,C,P),_(m,w+4,b,P)}}function _(y,C,b,T){T<0&&y.x===1&&(s[C]=y.x-1),b.x===0&&b.z===0&&(s[C]=T/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(a),t.push(r),a=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),a=0,r=n.length,s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=n[a]-s,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,n[a]===s)return a/(r-1);let d=n[a],u=n[a+1]-d,f=(s-d)/u;return(a+f)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);let s=this.getPoint(a),o=this.getPoint(r),l=t||(s.isVector2?new Fe:new L);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,a=[],r=[],s=[],o=new L,l=new ht;for(let f=0;f<=e;f++){let x=f/e;a[f]=this.getTangentAt(x,new L)}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE,d=Math.abs(a[0].x),p=Math.abs(a[0].y),u=Math.abs(a[0].z);d<=c&&(c=d,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(a[0],n).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(a[f-1],a[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(at(a[f-1].dot(a[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}s[f].crossVectors(a[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(a[x],f*x)),s[x].crossVectors(a[x],r[x])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},lr=class extends pn{constructor(e=0,t=0,n=1,a=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Fe){let n=t,a=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(s?r=0:r=a),this.aClockwise===!0&&!s&&(r===a?r=-a:r=r-a);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*d-f*p+this.aX,c=u*p+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ds=class extends lr{constructor(e,t,n,a,r,s){super(e,t,n,n,a,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,e=0,t=0,n=0;function a(r,s,o,l){i=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){a(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,p){let u=(s-r)/c-(o-r)/(c+d)+(o-s)/d,f=(o-s)/d-(l-s)/(d+p)+(l-o)/p;u*=d,f*=d,a(s,o,u,f)},calc:function(r){let s=r*r,o=s*r;return i+e*r+t*s+n*o}}}var eu=new L,tu=new L,zl=new vc,Bl=new vc,Gl=new vc,va=class extends pn{constructor(e=[],t=!1,n="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=a}getPoint(e,t=new L){let n=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=a[(o-1)%r]:(tu.subVectors(a[0],a[1]).add(a[0]),c=tu);let p=a[o%r],u=a[(o+1)%r];if(this.closed||o+2<r?d=a[(o+2)%r]:(eu.subVectors(a[r-1],a[r-2]).add(a[r-1]),d=eu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),f),_=Math.pow(p.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),zl.initNonuniformCatmullRom(c.x,p.x,u.x,d.x,x,_,g),Bl.initNonuniformCatmullRom(c.y,p.y,u.y,d.y,x,_,g),Gl.initNonuniformCatmullRom(c.z,p.z,u.z,d.z,x,_,g)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(c.x,p.x,u.x,d.x,this.tension),Bl.initCatmullRom(c.y,p.y,u.y,d.y,this.tension),Gl.initCatmullRom(c.z,p.z,u.z,d.z,this.tension));return n.set(zl.calc(l),Bl.calc(l),Gl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(new L().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nu(i,e,t,n,a){let r=(n-e)*.5,s=(a-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*i+t}function ef(i,e){let t=1-i;return t*t*e}function tf(i,e){return 2*(1-i)*i*e}function nf(i,e){return i*i*e}function ja(i,e,t,n){return ef(i,e)+tf(i,t)+nf(i,n)}function af(i,e){let t=1-i;return t*t*t*e}function rf(i,e){let t=1-i;return 3*t*t*i*e}function sf(i,e){return 3*(1-i)*i*i*e}function of(i,e){return i*i*i*e}function qa(i,e,t,n,a){return af(i,e)+rf(i,t)+sf(i,n)+of(i,a)}var Ns=class extends pn{constructor(e=new Fe,t=new Fe,n=new Fe,a=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=a}getPoint(e,t=new Fe){let n=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(qa(e,a.x,r.x,s.x,o.x),qa(e,a.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Us=class extends pn{constructor(e=new L,t=new L,n=new L,a=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=a}getPoint(e,t=new L){let n=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(qa(e,a.x,r.x,s.x,o.x),qa(e,a.y,r.y,s.y,o.y),qa(e,a.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fs=class extends pn{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends pn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zs=class extends pn{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,a=this.v0,r=this.v1,s=this.v2;return n.set(ja(e,a.x,r.x,s.x),ja(e,a.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cr=class extends pn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,a=this.v0,r=this.v1,s=this.v2;return n.set(ja(e,a.x,r.x,s.x),ja(e,a.y,r.y,s.y),ja(e,a.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bs=class extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,a=this.points,r=(a.length-1)*e,s=Math.floor(r),o=r-s,l=a[s===0?s:s-1],c=a[s],d=a[s>a.length-2?a.length-1:s+1],p=a[s>a.length-3?a.length-1:s+2];return n.set(nu(o,l.x,c.x,d.x,p.x),nu(o,l.y,c.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(new Fe().fromArray(a))}return this}},lf=Object.freeze({__proto__:null,ArcCurve:Ds,CatmullRomCurve3:va,CubicBezierCurve:Ns,CubicBezierCurve3:Us,EllipseCurve:lr,LineCurve:Fs,LineCurve3:Os,QuadraticBezierCurve:zs,QuadraticBezierCurve3:cr,SplineCurve:Bs});var dr=class i extends Ls{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,a=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ur=class i extends xt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};let r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,d=l+1,p=e/o,u=t/l,f=[],x=[],_=[],g=[];for(let h=0;h<d;h++){let y=h*u-s;for(let C=0;C<c;C++){let b=C*p-r;x.push(b,-y,0),_.push(0,0,1),g.push(C/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){let C=y+c*h,b=y+c*(h+1),T=y+1+c*(h+1),E=y+1+c*h;f.push(C,b,E),f.push(b,T,E)}this.setIndex(f),this.setAttribute("position",new Ye(x,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},hr=class i extends xt{constructor(e=.5,t=1,n=32,a=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:a,thetaStart:r,thetaLength:s},n=Math.max(3,n),a=Math.max(1,a);let o=[],l=[],c=[],d=[],p=e,u=(t-e)/a,f=new L,x=new Fe;for(let _=0;_<=a;_++){for(let g=0;g<=n;g++){let h=r+g/n*s;f.x=p*Math.cos(h),f.y=p*Math.sin(h),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,d.push(x.x,x.y)}p+=u}for(let _=0;_<a;_++){let g=_*(n+1);for(let h=0;h<n;h++){let y=h+g,C=y,b=y+n+1,T=y+n+2,E=y+1;o.push(C,b,E),o.push(b,T,E)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var zn=class i extends xt{constructor(e=1,t=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+o,Math.PI),c=0,d=[],p=new L,u=new L,f=[],x=[],_=[],g=[];for(let h=0;h<=n;h++){let y=[],C=h/n,b=s+C*o,T=e*Math.cos(b),E=Math.sqrt(e*e-T*T),M=0;h===0&&s===0?M=.5/t:h===n&&l===Math.PI&&(M=-.5/t);for(let m=0;m<=t;m++){let S=m/t,w=a+S*r;p.x=-E*Math.cos(w),p.y=T,p.z=E*Math.sin(w),x.push(p.x,p.y,p.z),u.copy(p).normalize(),_.push(u.x,u.y,u.z),g.push(S+M,1-C),y.push(c++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){let C=d[h][y+1],b=d[h][y],T=d[h+1][y],E=d[h+1][y+1];(h!==0||s>0)&&f.push(C,b,E),(h!==n-1||l<Math.PI)&&f.push(b,T,E)}this.setIndex(f),this.setAttribute("position",new Ye(x,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fn=class i extends xt{constructor(e=1,t=.4,n=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},n=Math.floor(n),a=Math.floor(a);let l=[],c=[],d=[],p=[],u=new L,f=new L,x=new L;for(let _=0;_<=n;_++){let g=s+_/n*o;for(let h=0;h<=a;h++){let y=h/a*r;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),x.subVectors(f,u).normalize(),d.push(x.x,x.y,x.z),p.push(h/a),p.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=a;g++){let h=(a+1)*_+g-1,y=(a+1)*(_-1)+g-1,C=(a+1)*(_-1)+g,b=(a+1)*_+g;l.push(h,y,b),l.push(y,C,b)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var pr=class i extends xt{constructor(e=new cr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,a=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:a,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new L,l=new L,c=new Fe,d=new L,p=[],u=[],f=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(f,2));function _(){for(let C=0;C<t;C++)g(C);g(r===!1?t:0),y(),h()}function g(C){d=e.getPointAt(C/t,d);let b=s.normals[C],T=s.binormals[C];for(let E=0;E<=a;E++){let M=E/a*Math.PI*2,m=Math.sin(M),S=-Math.cos(M);l.x=S*b.x+m*T.x,l.y=S*b.y+m*T.y,l.z=S*b.z+m*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,p.push(o.x,o.y,o.z)}}function h(){for(let C=1;C<=t;C++)for(let b=1;b<=a;b++){let T=(a+1)*(C-1)+(b-1),E=(a+1)*C+(b-1),M=(a+1)*C+b,m=(a+1)*(C-1)+b;x.push(T,E,m),x.push(E,M,m)}}function y(){for(let C=0;C<=t;C++)for(let b=0;b<=a;b++)c.x=C/t,c.y=b/a,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new lf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let a=i[t][n];if(iu(a))a.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(iu(a[0])){let r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][n]=r}else e[t][n]=a.slice();else e[t][n]=a}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let a in n)e[a]=n[a]}return e}function iu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Yu={clone:Oi,merge:jt},df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(a.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(a.value);break;case"v3":this.uniforms[n].value=new L().fromArray(a.value);break;case"v4":this.uniforms[n].value=new At().fromArray(a.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(a.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gs=class extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rt=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ks=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vs=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function aa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vi=class{constructor(e,t,n,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,a=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<a)){for(let o=n+2;;){if(a===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=a,a=t[++n],e<a)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(a=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(a=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,a)}return this.interpolate_(n,r,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,a=this.valueSize,r=e*a;for(let s=0;s!==a;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hs=class extends vi{constructor(e,t,n,a){super(e,t,n,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jl,endingEnd:jl}}intervalChanged_(e,t,n){let a=this.parameterPositions,r=e-2,s=e+1,o=a[r],l=a[s];if(o===void 0)switch(this.getSettings_().endingStart){case ql:r=e,o=2*t-n;break;case Wl:r=a.length-2,o=t+a[r]-a[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ql:s=e,l=2*n-t;break;case Wl:s=1,l=n+a[1]-a[0];break;default:s=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,t,n,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-t)/(a-t),_=x*x,g=_*x,h=-u*g+2*u*_-u*x,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*x+1,C=(-1-f)*g+(1.5+f)*_+.5*x,b=f*g-f*_;for(let T=0;T!==o;++T)r[T]=h*s[d+T]+y*s[c+T]+C*s[l+T]+b*s[p+T];return r}},js=class extends vi{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e,t,n,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(a-t),p=1-d;for(let u=0;u!==o;++u)r[u]=s[c+u]*p+s[l+u]*d;return r}},qs=class extends vi{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e){return this.copySampleValue_(e-1)}},Ws=class extends vi{interpolate_(e,t,n,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let x=(n-t)/(a-t),_=1-x;for(let g=0;g!==o;++g)r[g]=s[c+g]*_+s[l+g]*x;return r}let u=o*2,f=e-1;for(let x=0;x!==o;++x){let _=s[c+x],g=s[l+x],h=f*u+x*2,y=p[h],C=p[h+1],b=e*u+x*2,T=d[b],E=d[b+1],M=pf(n,t,y,T,a);r[x]=$u(M,_,C,E,g)}return r}};function $u(i,e,t,n,a){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*a}function hf(i,e,t,n,a){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(a-n)}function pf(i,e,t,n,a){let r=(i-e)/(a-e);for(let s=0;s<8;s++){let o=$u(r,e,t,n,a)-i;if(Math.abs(o)<1e-10)break;let l=hf(r,e,t,n,a);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var sn=class{constructor(e,t,n,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(n.interpolation=a),kl(e.settings)&&(n.settings={inTangents:aa(e.settings.inTangents,Array),outTangents:aa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new js(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ws(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case Ms:t=this.InterpolantFactoryMethodLinear;break;case ps:t=this.InterpolantFactoryMethodSmooth;break;case Hl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Ms;case this.InterpolantFactoryMethodSmooth:return ps;case this.InterpolantFactoryMethodBezier:return Hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,a=t.length;n!==a;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,a=t.length;n!==a;++n)t[n]*=e;kl(this.settings)&&(au(this.settings.inTangents,e),au(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,a=n.length,r=0,s=a-1;for(;r!==a&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==a){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,a=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){We("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(a!==void 0&&Dp(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),a=this.getInterpolation()===ps,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(a)l=!0;else{let p=o*n,u=p-n,f=p+n;for(let x=0;x!==n;++x){let _=t[p+x];if(_!==t[u+x]||_!==t[f+x]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let p=o*n,u=s*n;for(let f=0;f!==n;++f)t[u+f]=t[p+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,a=new n(this.name,e,t);return a.createInterpolant=this.createInterpolant,kl(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function au(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Ms;var bi=class extends sn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Wa;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends sn{constructor(e,t,n,a){super(e,t,n,a)}};Xs.prototype.ValueTypeName="color";var Ys=class extends sn{constructor(e,t,n,a){super(e,t,n,a)}};Ys.prototype.ValueTypeName="number";var $s=class extends vi{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e,t,n,a){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(a-t),c=e*o;for(let d=c+o;c!==d;c+=4)Fn.slerpFlat(r,0,s,c-o,s,c,l);return r}},fr=class extends sn{constructor(e,t,n,a){super(e,t,n,a)}InterpolantFactoryMethodLinear(e){return new $s(this.times,this.values,this.getValueSize(),e)}};fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends sn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Wa;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Js=class extends sn{constructor(e,t,n,a){super(e,t,n,a)}};Js.prototype.ValueTypeName="vector";var Zs=class{constructor(e,t,n){let a=this,r=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&a.onStart!==void 0&&a.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,a.onProgress!==void 0&&a.onProgress(d,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){let p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],x=c[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ju=new Zs,Ks=class{constructor(e){this.manager=e!==void 0?e:Ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(a,r){n.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gr=class extends mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vl=new ht,ru=new L,su=new L,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(su),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){Vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,l=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===da||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},us=new L,hs=new Fn,Ln=new L,xr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,hs,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,hs,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(us,hs,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,hs,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new L,ou=new Fe,lu=new Fe,kt=class extends xr{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,ou,lu),t.subVectors(lu,ou)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gl*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*n/c,a*=s.width/l,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ba=class extends xr{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=n-e,s=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xl=class extends Qs{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vr=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Xl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ra=-90,sa=1,eo=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new kt(ra,sa,e,t);a.layers=this.layers,this.add(a);let r=new kt(ra,sa,e,t);r.layers=this.layers,this.add(r);let s=new kt(ra,sa,e,t);s.layers=this.layers,this.add(s);let o=new kt(ra,sa,e,t);o.layers=this.layers,this.add(o);let l=new kt(ra,sa,e,t);l.layers=this.layers,this.add(l);let c=new kt(ra,sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,l]=t;for(let c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},to=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _c="\\[\\]\\.:\\/",ff=new RegExp("["+_c+"]","g"),yc="[^"+_c+"]",mf="[^"+_c.replace("\\.","")+"]",gf=/((?:WC+[\/:])*)/.source.replace("WC",yc),xf=/(WCOD+)?/.source.replace("WCOD",mf),vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),bf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),_f=new RegExp("^"+gf+xf+vf+bf+"$"),yf=["material","materials","bones","map"],Yl=class{constructor(e,t,n){let a=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,a=this._bindings[n];a!==void 0&&a.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=n.length;a!==r;++a)n[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ff,"")}static parseTrackName(e){let t=_f.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=n.nodeName&&n.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=n.nodeName.substring(a+1);yf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,a),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},a=n(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let a=0,r=n.length;a!==r;++a)e[t++]=n[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let a=0,r=n.length;a!==r;++a)n[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let a=0,r=n.length;a!==r;++a)n[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let a=0,r=n.length;a!==r;++a)n[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,a=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[a];if(s===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Yl;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qv=new Float32Array(1);var br=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ve("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var wc=class wc{constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=a,this}};wc.prototype.isMatrix2=!0;var $l=wc;function Sc(i,e,t,n){let a=Sf(n);switch(t){case fc:return i*e;case co:return i*e/a.components*a.byteLength;case uo:return i*e/a.components*a.byteLength;case Ai:return i*e*2/a.components*a.byteLength;case ho:return i*e*2/a.components*a.byteLength;case mc:return i*e*3/a.components*a.byteLength;case gn:return i*e*4/a.components*a.byteLength;case po:return i*e*4/a.components*a.byteLength;case Er:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:case xo:return Math.max(i,16)*Math.max(e,8)/4;case fo:case go:return Math.max(i,8)*Math.max(e,8)/2;case vo:case bo:case yo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case Cr:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zo:case Bo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ko:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rr:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sf(i){switch(i){case en:case dc:return{byteLength:1,components:1};case Sa:case uc:case wn:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case Tn:case so:case mn:return{byteLength:4,components:1};case hc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function vh(){let i=null,e=!1,t=null,n=null;function a(r,s){n=i.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rf(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let d=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<p.length;f++){let x=p[u],_=p[f];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++u,p[u]=_)}p.length=u+1;for(let f=0,x=p.length;f<x;f++){let _=p[f];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Cm=`uniform sampler2D dfgLUT;
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
}`,Rm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
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
}`,Yg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Kg=`#define PHONG
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
}`,Qg=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Pf,alphahash_pars_fragment:If,alphamap_fragment:Lf,alphamap_pars_fragment:Df,alphatest_fragment:Nf,alphatest_pars_fragment:Uf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:zf,batching_vertex:Bf,begin_vertex:Gf,beginnormal_vertex:kf,bsdfs:Vf,iridescence_fragment:Hf,bumpmap_pars_fragment:jf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:Yf,color_fragment:$f,color_pars_fragment:Jf,color_pars_vertex:Zf,color_vertex:Kf,common:Qf,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:am,emissivemap_pars_fragment:rm,colorspace_fragment:sm,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:dm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Sm,envmap_vertex:hm,fog_vertex:pm,fog_pars_vertex:fm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:xm,lightmap_pars_fragment:vm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:_m,lights_pars_begin:ym,lights_toon_fragment:Mm,lights_toon_pars_fragment:Em,lights_phong_fragment:Am,lights_phong_pars_fragment:Tm,lights_physical_fragment:wm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Rm,lights_fragment_maps:Pm,lights_fragment_end:Im,lightprobes_pars_fragment:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Fm,map_fragment:Om,map_pars_fragment:zm,map_particle_fragment:Bm,map_particle_pars_fragment:Gm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Hm,morphcolor_vertex:jm,morphnormal_vertex:qm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:Ym,normal_fragment_maps:$m,normal_pars_fragment:Jm,normal_pars_vertex:Zm,normal_vertex:Km,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:ag,packing:rg,premultiplied_alpha_fragment:sg,project_vertex:og,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:dg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:pg,shadowmap_vertex:fg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:xg,skinning_vertex:vg,skinnormal_vertex:bg,specularmap_fragment:_g,specularmap_pars_fragment:yg,tonemapping_fragment:Sg,tonemapping_pars_fragment:Mg,transmission_fragment:Eg,transmission_pars_fragment:Ag,uv_pars_fragment:Tg,uv_pars_vertex:wg,uv_vertex:Cg,worldpos_vertex:Rg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Ng,cube_frag:Ug,depth_vert:Fg,depth_frag:Og,distance_vert:zg,distance_frag:Bg,equirect_vert:Gg,equirect_frag:kg,linedashed_vert:Vg,linedashed_frag:Hg,meshbasic_vert:jg,meshbasic_frag:qg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:Yg,meshmatcap_frag:$g,meshnormal_vert:Jg,meshnormal_frag:Zg,meshphong_vert:Kg,meshphong_frag:Qg,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:a0,points_frag:r0,shadow_vert:s0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},Se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Vn={basic:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:jt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:jt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:jt([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:jt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:jt([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:jt([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:jt([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:jt([Se.lights,Se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Vn.physical={uniforms:jt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Xo={r:0,b:0,g:0},d0=new ht,bh=new $e;bh.set(-1,0,0,0,1,0,0,0,1);function u0(i,e,t,n,a,r){let s=new qe(0),o=a===!0?0:1,l,c,d=null,p=0,u=null;function f(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){let b=y.backgroundBlurriness>0;C=e.get(C,b)}return C}function x(y){let C=!1,b=f(y);b===null?g(s,o):b&&b.isColor&&(g(b,1),C=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,C){let b=f(C);b&&(b.isCubeTexture||b.mapping===Sr)?(c===void 0&&(c=new Ze(new Ht(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Oi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(C.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bh),c.material.toneMapped=rt.getTransfer(b.colorSpace)!==ut,(d!==b||p!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,p=b.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ze(new ur(2,2),new rn({name:"BackgroundMaterial",uniforms:Oi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=rt.getTransfer(b.colorSpace)!==ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||p!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,p=b.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,C){y.getRGB(Xo,bc(i)),t.buffers.color.setClear(Xo.r,Xo.g,Xo.b,C,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,C=1){s.set(y),o=C,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(s,o)},render:x,addToRenderList:_,dispose:h}}function h0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null),r=a,s=!1;function o(P,F,B,N,H){let U=!1,k=p(P,N,B,F);r!==k&&(r=k,c(r.object)),U=f(P,N,B,H),U&&x(P,N,B,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(U||s)&&(s=!1,b(P,F,B,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function p(P,F,B,N){let H=N.wireframe===!0,U=n[F.id];U===void 0&&(U={},n[F.id]=U);let k=P.isInstancedMesh===!0?P.id:0,Z=U[k];Z===void 0&&(Z={},U[k]=Z);let V=Z[B.id];V===void 0&&(V={},Z[B.id]=V);let j=V[H];return j===void 0&&(j=u(l()),V[H]=j),j}function u(P){let F=[],B=[],N=[];for(let H=0;H<t;H++)F[H]=0,B[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,F,B,N){let H=r.attributes,U=F.attributes,k=0,Z=B.getAttributes();for(let V in Z)if(Z[V].location>=0){let ee=H[V],de=U[V];if(de===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function x(P,F,B,N){let H={},U=F.attributes,k=0,Z=B.getAttributes();for(let V in Z)if(Z[V].location>=0){let ee=U[V];ee===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),H[V]=de,k++}r.attributes=H,r.attributesNum=k,r.index=N}function _(){let P=r.newAttributes;for(let F=0,B=P.length;F<B;F++)P[F]=0}function g(P){h(P,0)}function h(P,F){let B=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;B[P]=1,N[P]===0&&(i.enableVertexAttribArray(P),N[P]=1),H[P]!==F&&(i.vertexAttribDivisor(P,F),H[P]=F)}function y(){let P=r.newAttributes,F=r.enabledAttributes;for(let B=0,N=F.length;B<N;B++)F[B]!==P[B]&&(i.disableVertexAttribArray(B),F[B]=0)}function C(P,F,B,N,H,U,k){k===!0?i.vertexAttribIPointer(P,F,B,H,U):i.vertexAttribPointer(P,F,B,N,H,U)}function b(P,F,B,N){_();let H=N.attributes,U=B.getAttributes(),k=F.defaultAttributeValues;for(let Z in U){let V=U[Z];if(V.location>=0){let j=H[Z];if(j===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){let ee=j.normalized,de=j.itemSize,Ee=e.get(j);if(Ee===void 0)continue;let Xe=Ee.buffer,Je=Ee.type,Ke=Ee.bytesPerElement,Q=Je===i.INT||Je===i.UNSIGNED_INT||j.gpuType===so;if(j.isInterleavedBufferAttribute){let X=j.data,ue=X.stride,I=j.offset;if(X.isInstancedInterleavedBuffer){for(let q=0;q<V.locationSize;q++)h(V.location+q,X.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let q=0;q<V.locationSize;q++)g(V.location+q);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let q=0;q<V.locationSize;q++)C(V.location+q,de/V.locationSize,Je,ee,ue*Ke,(I+de/V.locationSize*q)*Ke,Q)}else{if(j.isInstancedBufferAttribute){for(let X=0;X<V.locationSize;X++)h(V.location+X,j.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let X=0;X<V.locationSize;X++)g(V.location+X);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let X=0;X<V.locationSize;X++)C(V.location+X,de/V.locationSize,Je,ee,de*Ke,de/V.locationSize*X*Ke,Q)}}else if(k!==void 0){let ee=k[Z];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(V.location,ee);break;case 3:i.vertexAttrib3fv(V.location,ee);break;case 4:i.vertexAttrib4fv(V.location,ee);break;default:i.vertexAttrib1fv(V.location,ee)}}}}y()}function T(){S();for(let P in n){let F=n[P];for(let B in F){let N=F[B];for(let H in N){let U=N[H];for(let k in U)d(U[k].object),delete U[k];delete N[H]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let B in F){let N=F[B];for(let H in N){let U=N[H];for(let k in U)d(U[k].object),delete U[k];delete N[H]}}delete n[P.id]}function M(P){for(let F in n){let B=n[F];for(let N in B){let H=B[N];if(H[P.id]===void 0)continue;let U=H[P.id];for(let k in U)d(U[k].object),delete U[k];delete H[P.id]}}}function m(P){for(let F in n){let B=n[F],N=P.isInstancedMesh===!0?P.id:0,H=B[N];if(H!==void 0){for(let U in H){let k=H[U];for(let Z in k)d(k[Z].object),delete k[Z];delete H[U]}delete B[N],Object.keys(B).length===0&&delete n[F]}}}function S(){w(),s=!0,r!==a&&(r=a,c(r.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:S,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:m,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function p0(i,e,t){let n;function a(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function f0(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(M){return!(M!==gn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let m=M===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==en&&M!==mn&&!m&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ve("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:b,maxSamples:T,samples:E}}function m0(i){let e=this,t=null,n=0,a=!1,r=!1,s=new Sn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||n!==0||a;return a=u,n=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,f){let x=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,h=i.get(p);if(!a||x===null||x.length===0||r&&!g)r?d(null):c();else{let y=r?0:n,C=y*4,b=h.clippingState||null;l.value=b,b=d(x,u,C,f);for(let T=0;T!==C;++T)b[T]=t[T];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,f,x){let _=p!==null?p.length:0,g=null;if(_!==0){if(g=l.value,x!==!0||g===null){let h=f+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<h)&&(g=new Float32Array(h));for(let C=0,b=f;C!==_;++C,b+=4)s.copy(p[C]).applyMatrix4(y,o),s.normal.toArray(g,b),g[b+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Aa=4,g0=6,x0=20,v0=256,Ir=new ba,Zu=new qe,Cc=null,Rc=0,Pc=0,Ic=!1,b0=new L,zi=new L,$o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,r={}){let{size:s=256,position:o=b0}=r;Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Rc,Pc),this._renderer.xr.enabled=Ic,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:wn,format:gn,colorSpace:Xa,depthBuffer:!1},a=Ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_0(r)),this._blurMaterial=S0(r,e,t),this._ggxMaterial=y0(r,e,t)}return a}_compileMaterial(e){let t=new Ze(new xt,e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,n,a,r){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(Zu),p.toneMapping=An,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new Ht,new En({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,h=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,h=!0):(g.color.copy(Zu),h=!0);for(let C=0;C<6;C++){let b=C%3;b===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[C],r.y,r.z)):b===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[C]));let T=this._cubeSize;Ea(a,b*T,C>2?T:0,T,T),p.setRenderTarget(a),h&&p.render(_,l),p.render(e,l)}p.toneMapping=f,p.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,a=e.mapping===Si||e.mapping===Fi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ir)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=c*1.25,f=p*u,{_lodMax:x}=this,_=this._sizeLods[n],g=3*_*(n>x-Aa?n-x+Aa:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,Ea(r,g,h,3*_,2*_),a.setRenderTarget(r),a.render(o,Ir),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Ea(e,g,h,3*_,2*_),a.setRenderTarget(e),a.render(o,Ir)}_blur(e,t,n,a){let r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,a,r){let s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[a],p=3*d*(a>this._lodMax-Aa?a-this._lodMax+Aa:0),u=4*(this._cubeSize-d);Ea(t,p,u,3*d,2*d),s.setRenderTarget(t),s.render(l,Ir)}};function _0(i){let e=[],t=[],n=i,a=i-Aa+1+g0;for(let r=0;r<a;r++){let s=Math.pow(2,n);e.push(s);let o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,f=3,x=new Float32Array(f*u*p),_=new Float32Array(f*u*p);for(let h=0;h<p;h++){let y=h%3*2/3-1,C=h>2?0:-1,b=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];x.set(b,f*u*h);for(let T=0;T<u;T++){let E=d[T*2]*2-1,M=d[T*2+1]*2-1;h===0?zi.set(1,M,E):h===1?zi.set(-E,1,-M):h===2?zi.set(-E,M,1):h===3?zi.set(-1,M,-E):h===4?zi.set(-E,-1,M):zi.set(E,M,-1),zi.toArray(_,(h*u+T)*f)}}let g=new xt;g.setAttribute("position",new Dt(x,f)),g.setAttribute("outputDirection",new Dt(_,f)),t.push(new Ze(g,null)),n>Aa&&n--}return{lodMeshes:t,sizeLods:e}}function Ku(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function y0(i,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function S0(i,e,t){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:x0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Qu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function eh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jo=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new ar(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ht(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Gn});r.uniforms.tEquirect.value=t;let s=new Ze(a,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Ut),new eo(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}};function M0(i){let e=new WeakMap,t=new WeakMap,n=null;function a(u,f=!1){return u==null?null:f?s(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===io||f===ao)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let _=new Jo(x.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let f=u.mapping,x=f===io||f===ao,_=f===Si||f===Fi;if(x||_){let g=t.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new $o(i)),g=x?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return x&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new $o(i)),g=x?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,f){return f===io?u.mapping=Si:f===ao&&(u.mapping=Fi),u}function l(u){let f=0,x=6;for(let _=0;_<x;_++)u[_]!==void 0&&f++;return f===x}function c(u){let f=u.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:p}}function E0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let a=t(n);return a===null&&Di("WebGLRenderer: "+n+" extension not supported."),a}}}function A0(i,e,t,n){let a={},r=new WeakMap;function s(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",s),delete a[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,x=p.attributes.position,_=0;if(x===void 0)return;if(f!==null){let y=f.array;_=f.version;for(let C=0,b=y.length;C<b;C+=3){let T=y[C+0],E=y[C+1],M=y[C+2];u.push(T,E,E,M,M,T)}}else{let y=x.array;_=x.version;for(let C=0,b=y.length/3-1;C<b;C+=3){let T=C+0,E=C+1,M=C+2;u.push(T,E,E,M,M,T)}}let g=new(x.count>=65535?tr:er)(u,1);g.version=_;let h=r.get(p);h&&e.remove(h),r.set(p,g)}function d(p){let u=r.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function T0(i,e,t){let n;function a(p){n=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*s),t.update(u,n,1)}function c(p,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,p*s,f),t.update(u,n,f))}function d(p,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];t.update(_,n,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function w0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function C0(i,e,t){let n=new WeakMap,a=new At;function r(s,o,l){let c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,u=n.get(o);if(u===void 0||u.count!==p){let S=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],C=0;f===!0&&(C=1),x===!0&&(C=2),_===!0&&(C=3);let b=o.attributes.position.count*C,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*T*4*p),M=new Ja(E,b,T,p);M.type=mn,M.needsUpdate=!0;let m=C*4;for(let w=0;w<p;w++){let P=g[w],F=h[w],B=y[w],N=b*T*4*w;for(let H=0;H<P.count;H++){let U=H*m;f===!0&&(a.fromBufferAttribute(P,H),E[N+U+0]=a.x,E[N+U+1]=a.y,E[N+U+2]=a.z,E[N+U+3]=0),x===!0&&(a.fromBufferAttribute(F,H),E[N+U+4]=a.x,E[N+U+5]=a.y,E[N+U+6]=a.z,E[N+U+7]=0),_===!0&&(a.fromBufferAttribute(B,H),E[N+U+8]=a.x,E[N+U+9]=a.y,E[N+U+10]=a.z,E[N+U+11]=B.itemSize===4?a.w:1)}}u={count:p,texture:M,size:new Fe(b,T)},n.set(o,u),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function R0(i,e,t,n,a){let r=new WeakMap;function s(c){let d=a.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}var P0={[ic]:"LINEAR_TONE_MAPPING",[ac]:"REINHARD_TONE_MAPPING",[rc]:"CINEON_TONE_MAPPING",[yr]:"ACES_FILMIC_TONE_MAPPING",[oc]:"AGX_TONE_MAPPING",[lc]:"NEUTRAL_TONE_MAPPING",[sc]:"CUSTOM_TONE_MAPPING"};function I0(i,e,t,n,a,r){let s=new Qt(e,t,{type:i,depthBuffer:a,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new xt;c.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let d=new Gs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ze(c,d),u=new ba(-1,1,1,-1,0,1),f=null,x=null,_=!1,g,h=null,y=[],C=!1;this.setSize=function(b,T){s.setSize(b,T),o!==null&&o.setSize(b,T),l!==null&&l.setSize(b,T);for(let E=0;E<y.length;E++){let M=y[E];M.setSize&&M.setSize(b,T)}},this.setEffects=function(b){y=b,C=y.length>0&&y[0].isRenderPass===!0;let T=s.width,E=s.height;y.length>0&&o===null&&(o=new Qt(T,E,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new Qt(T,E,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let M=0;M<y.length;M++){let m=y[M];m.setSize&&m.setSize(T,E)}},this.begin=function(b,T){if(_||b.toneMapping===An&&y.length===0)return!1;if(h=T,T!==null){let E=T.width,M=T.height;(s.width!==E||s.height!==M)&&this.setSize(E,M)}return C===!1&&b.setRenderTarget(s),g=b.toneMapping,b.toneMapping=An,!0},this.hasRenderPass=function(){return C},this.end=function(b,T){b.toneMapping=g,_=!0;let E=s,M=o;for(let m=0;m<y.length;m++){let S=y[m];S.enabled!==!1&&(S.render(b,M,E,T),S.needsSwap!==!1&&(E=M,M=M===o?l:o))}if(f!==b.outputColorSpace||x!==b.toneMapping){f=b.outputColorSpace,x=b.toneMapping,d.defines={},rt.getTransfer(f)===ut&&(d.defines.SRGB_TRANSFER="");let m=P0[x];m&&(d.defines[m]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(h),b.render(p,u),h=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var _h=new Xt,Nc=new xi(1,1),yh=new Ja,Sh=new ws,Mh=new ar,th=[],nh=[],ih=new Float32Array(16),ah=new Float32Array(9),rh=new Float32Array(4);function wa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let a=e*t,r=th[a];if(r===void 0&&(r=new Float32Array(a),th[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qo(i,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function L0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function N0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function U0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function F0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),It(t,n)}}function O0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),It(t,n)}}function z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),It(t,n)}}function B0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function G0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function k0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function H0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function W0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function X0(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=t.isReversedDepthBuffer()?Wo:qo,r=Nc):r=_h,t.setTexture2D(e||r,a)}function Y0(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Sh,a)}function $0(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Mh,a)}function J0(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||yh,a)}function Z0(i){switch(i){case 5126:return L0;case 35664:return D0;case 35665:return N0;case 35666:return U0;case 35674:return F0;case 35675:return O0;case 35676:return z0;case 5124:case 35670:return B0;case 35667:case 35671:return G0;case 35668:case 35672:return k0;case 35669:case 35673:return V0;case 5125:return H0;case 36294:return j0;case 36295:return q0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return J0}}function K0(i,e){i.uniform1fv(this.addr,e)}function Q0(i,e){let t=wa(e,this.size,2);i.uniform2fv(this.addr,t)}function ex(i,e){let t=wa(e,this.size,3);i.uniform3fv(this.addr,t)}function tx(i,e){let t=wa(e,this.size,4);i.uniform4fv(this.addr,t)}function nx(i,e){let t=wa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ix(i,e){let t=wa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ax(i,e){let t=wa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rx(i,e){i.uniform1iv(this.addr,e)}function sx(i,e){i.uniform2iv(this.addr,e)}function ox(i,e){i.uniform3iv(this.addr,e)}function lx(i,e){i.uniform4iv(this.addr,e)}function cx(i,e){i.uniform1uiv(this.addr,e)}function dx(i,e){i.uniform2uiv(this.addr,e)}function ux(i,e){i.uniform3uiv(this.addr,e)}function hx(i,e){i.uniform4uiv(this.addr,e)}function px(i,e,t){let n=this.cache,a=e.length,r=Qo(t,a);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));let s;this.type===i.SAMPLER_2D_SHADOW?s=Nc:s=_h;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function fx(i,e,t){let n=this.cache,a=e.length,r=Qo(t,a);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Sh,r[s])}function mx(i,e,t){let n=this.cache,a=e.length,r=Qo(t,a);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Mh,r[s])}function gx(i,e,t){let n=this.cache,a=e.length,r=Qo(t,a);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||yh,r[s])}function xx(i){switch(i){case 5126:return K0;case 35664:return Q0;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return ax;case 5124:case 35670:return rx;case 35667:case 35671:return sx;case 35668:case 35672:return ox;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return dx;case 36295:return ux;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}var Uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z0(t.type)}},Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xx(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let a=this.seq;for(let r=0,s=a.length;r!==s;++r){let o=a[r];o.setValue(e,t[o.id],n)}}},Lc=/(\w+)(\])?(\[|\.)?/g;function sh(i,e){i.seq.push(e),i.map[e.id]=e}function vx(i,e,t){let n=i.name,a=n.length;for(Lc.lastIndex=0;;){let r=Lc.exec(n),s=Lc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){sh(t,c===void 0?new Uc(o,i,e):new Fc(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Oc(o),sh(t,p)),t=p}}}var Ta=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);vx(o,l,this)}let a=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,n,a){let r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){let a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){let n=[];for(let a=0,r=e.length;a!==r;++a){let s=e[a];s.id in t&&n.push(s)}return n}};function oh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var bx=37297,_x=0;function yx(i,e){let t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){let o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}var lh=new $e;function Sx(i){rt._getMatrix(lh,rt.workingColorSpace,i);let e=`mat3( ${lh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Ya:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ch(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yx(i.getShaderSource(e),o)}else return r}function Mx(i,e){let t=Sx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ex={[ic]:"Linear",[ac]:"Reinhard",[rc]:"Cineon",[yr]:"ACESFilmic",[oc]:"AgX",[lc]:"Neutral",[sc]:"Custom"};function Ax(i,e){let t=Ex[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yo=new L;function Tx(){rt.getLuminanceCoefficients(Yo);let i=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Cx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){let r=i.getActiveAttrib(e,a),s=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Dr(i){return i!==""}function dh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(Px,Lx)}var Ix=new Map;function Lx(i,e){let t=nt[e];if(t===void 0){let n=Ix.get(e);if(n!==void 0)t=nt[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zc(t)}var Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(Dx,Nx)}function Nx(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function ph(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ux={[_r]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function Fx(i){return Ux[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ox={[Si]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE_UV"};function zx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ox[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bx={[Fi]:"ENVMAP_MODE_REFRACTION"};function Gx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kx={[nc]:"ENVMAP_BLENDING_MULTIPLY",[Pu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function Vx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kx[i.combine]||"ENVMAP_BLENDING_NONE"}function Hx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jx(i,e,t,n){let a=i.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,l=Fx(t),c=zx(t),d=Gx(t),p=Vx(t),u=Hx(t),f=wx(t),x=Cx(r),_=a.createProgram(),g,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Dr).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Dr).join(`
`),h.length>0&&(h+=`
`)):(g=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),h=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?nt.tonemapping_pars_fragment:"",t.toneMapping!==An?Ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Mx("linearToOutputTexel",t.outputColorSpace),Tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),s=zc(s),s=dh(s,t),s=uh(s,t),o=zc(o),o=dh(o,t),o=uh(o,t),s=hh(s),o=hh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let C=y+g+s,b=y+h+o,T=oh(a,a.VERTEX_SHADER,C),E=oh(a,a.FRAGMENT_SHADER,b);a.attachShader(_,T),a.attachShader(_,E),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function M(P){if(i.debug.checkShaderErrors){let F=a.getProgramInfoLog(_)||"",B=a.getShaderInfoLog(T)||"",N=a.getShaderInfoLog(E)||"",H=F.trim(),U=B.trim(),k=N.trim(),Z=!0,V=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,_,T,E);else{let j=ch(a,T,"vertex"),ee=ch(a,E,"fragment");We("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+j+`
`+ee)}else H!==""?Ve("WebGLProgram: Program Info Log:",H):(U===""||k==="")&&(V=!1);V&&(P.diagnostics={runnable:Z,programLog:H,vertexShader:{log:U,prefix:g},fragmentShader:{log:k,prefix:h}})}a.deleteShader(T),a.deleteShader(E),m=new Ta(a,_),S=Rx(a,_)}let m;this.getUniforms=function(){return m===void 0&&M(this),m};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(_,bx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_x++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}var qx=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gc(e),t.set(e,n)),n}},Gc=class{constructor(e){this.id=qx++,this.code=e,this.usedTimes=0}};function Wx(i){return i===Ai||i===Cr||i===Rr}function Xx(i,e,t,n,a,r){let s=new Za,o=new Bc,l=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return l.add(m),m===0?"uv":`uv${m}`}function _(m,S,w,P,F,B){let N=P.fog,H=F.geometry,U=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?P.environment:null,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,Z=e.get(m.envMap||U,k),V=Z&&Z.mapping===Sr?Z.image.height:null,j=f[m.type];m.precision!==null&&(u=n.getMaxPrecision(m.precision),u!==m.precision&&Ve("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));let ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ee!==void 0?ee.length:0,Ee=0;H.morphAttributes.position!==void 0&&(Ee=1),H.morphAttributes.normal!==void 0&&(Ee=2),H.morphAttributes.color!==void 0&&(Ee=3);let Xe,Je,Ke,Q;if(j){let vt=Vn[j];Xe=vt.vertexShader,Je=vt.fragmentShader}else{Xe=m.vertexShader,Je=m.fragmentShader;let vt=o.getVertexShaderStage(m),ct=o.getFragmentShaderStage(m);o.update(m,vt,ct),Ke=vt.id,Q=ct.id}let X=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),I=F.isInstancedMesh===!0,q=F.isBatchedMesh===!0,ie=!!m.map,we=!!m.matcap,le=!!Z,oe=!!m.aoMap,Oe=!!m.lightMap,Ce=!!m.bumpMap&&m.wireframe===!1,je=!!m.normalMap,ce=!!m.displacementMap,he=!!m.emissiveMap,_e=!!m.metalnessMap,ze=!!m.roughnessMap,D=m.anisotropy>0,lt=m.clearcoat>0,Pe=m.dispersion>0,R=m.retroreflectivity>0,v=m.iridescence>0,G=m.sheen>0,J=m.transmission>0,te=D&&!!m.anisotropyMap,pe=lt&&!!m.clearcoatMap,me=lt&&!!m.clearcoatNormalMap,ne=lt&&!!m.clearcoatRoughnessMap,re=v&&!!m.iridescenceMap,ge=v&&!!m.iridescenceThicknessMap,Be=G&&!!m.sheenColorMap,ye=G&&!!m.sheenRoughnessMap,xe=!!m.specularMap,Ge=!!m.specularColorMap,He=!!m.specularIntensityMap,Qe=J&&!!m.transmissionMap,z=J&&!!m.thicknessMap,ve=!!m.gradientMap,ae=!!m.alphaMap,be=m.alphaTest>0,Te=!!m.alphaHash,se=!!m.extensions,ke=An;m.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ke=i.toneMapping);let Ne={shaderID:j,shaderType:m.type,shaderName:m.name,vertexShader:Xe,fragmentShader:Je,defines:m.defines,customVertexShaderID:Ke,customFragmentShaderID:Q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:q,batchingColor:q&&F._colorsTexture!==null,instancing:I,instancingColor:I&&F.instanceColor!==null,instancingMorph:I&&F.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ie,matcap:we,envMap:le,envMapMode:le&&Z.mapping,envMapCubeUVHeight:V,aoMap:oe,lightMap:Oe,bumpMap:Ce,normalMap:je,displacementMap:ce,emissiveMap:he,normalMapObjectSpace:je&&m.normalMapType===Nu,normalMapTangentSpace:je&&m.normalMapType===jo,packedNormalMap:je&&m.normalMapType===jo&&Wx(m.normalMap.format),metalnessMap:_e,roughnessMap:ze,anisotropy:D,anisotropyMap:te,clearcoat:lt,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:ne,dispersion:Pe,retroreflection:R,iridescence:v,iridescenceMap:re,iridescenceThicknessMap:ge,sheen:G,sheenColorMap:Be,sheenRoughnessMap:ye,specularMap:xe,specularColorMap:Ge,specularIntensityMap:He,transmission:J,transmissionMap:Qe,thicknessMap:z,gradientMap:ve,opaque:m.transparent===!1&&m.blending===ya&&m.alphaToCoverage===!1,alphaMap:ae,alphaTest:be,alphaHash:Te,combine:m.combine,mapUv:ie&&x(m.map.channel),aoMapUv:oe&&x(m.aoMap.channel),lightMapUv:Oe&&x(m.lightMap.channel),bumpMapUv:Ce&&x(m.bumpMap.channel),normalMapUv:je&&x(m.normalMap.channel),displacementMapUv:ce&&x(m.displacementMap.channel),emissiveMapUv:he&&x(m.emissiveMap.channel),metalnessMapUv:_e&&x(m.metalnessMap.channel),roughnessMapUv:ze&&x(m.roughnessMap.channel),anisotropyMapUv:te&&x(m.anisotropyMap.channel),clearcoatMapUv:pe&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(m.sheenRoughnessMap.channel),specularMapUv:xe&&x(m.specularMap.channel),specularColorMapUv:Ge&&x(m.specularColorMap.channel),specularIntensityMapUv:He&&x(m.specularIntensityMap.channel),transmissionMapUv:Qe&&x(m.transmissionMap.channel),thicknessMapUv:z&&x(m.thicknessMap.channel),alphaMapUv:ae&&x(m.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(je||D),vertexNormals:!!H.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(ie||ae),fog:!!N,useFog:m.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||H.attributes.normal===void 0&&je===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ue,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:ie&&m.map.isVideoTexture===!0&&rt.getTransfer(m.map.colorSpace)===ut,decodeVideoTextureEmissive:he&&m.emissiveMap.isVideoTexture===!0&&rt.getTransfer(m.emissiveMap.colorSpace)===ut,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Bn,flipSided:m.side===Yt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:se&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&m.extensions.multiDraw===!0||q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function g(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let w in m.defines)S.push(w),S.push(m.defines[w]);return m.isRawShaderMaterial===!1&&(h(S,m),y(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function h(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapCubeUVHeight),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.morphAttributeCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function y(m,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),m.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),m.push(s.mask)}function C(m){let S=f[m.type],w;if(S){let P=Vn[S];w=Yu.clone(P.uniforms)}else w=m.uniforms;return w}function b(m,S){let w=d.get(S);return w!==void 0?++w.usedTimes:(w=new jx(i,S,m,a),c.push(w),d.set(S,w)),w}function T(m){if(--m.usedTimes===0){let S=c.indexOf(m);c[S]=c[c.length-1],c.pop(),d.delete(m.cacheKey),m.destroy()}}function E(m){o.remove(m)}function M(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:C,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:M}}function Yx(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,l){i.get(s)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function $x(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mh(){let i=[],e=0,t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,_,g,h){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:x,materialVariant:s(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:h},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=x,y.materialVariant=s(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=g,y.group=h),e++,y}function l(u,f,x,_,g,h,y){y.reversedDepth===!0&&(g=-g);let C=o(u,f,x,_,g,h);x.transmission>0?n.push(C):x.transparent===!0?a.push(C):t.push(C)}function c(u,f,x,_,g,h){let y=o(u,f,x,_,g,h);x.transmission>0?n.unshift(y):x.transparent===!0?a.unshift(y):t.unshift(y)}function d(u,f){t.length>1&&t.sort(u||$x),n.length>1&&n.sort(f||fh),a.length>1&&a.sort(f||fh)}function p(){for(let u=e,f=i.length;u<f;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:l,unshift:c,finish:p,sort:d}}function Jx(){let i=new WeakMap;function e(n,a){let r=i.get(n),s;return r===void 0?(s=new mh,i.set(n,[s])):a>=r.length?(s=new mh,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new qe};break;case"SpotLight":t={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Kx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Qx=0;function ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tv(i){let e=new Zx,t=Kx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let a=new L,r=new ht,s=new ht;function o(c){let d=0,p=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,x=0,_=0,g=0,h=0,y=0,C=0,b=0,T=0,E=0,M=0,m=0,S=0,w=0;c.sort(ev);for(let F=0,B=c.length;F<B;F++){let N=c[F],H=N.color,U=N.intensity,k=N.distance,Z=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ai?Z=N.shadow.map.texture:Z=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=H.r*U,p+=H.g*U,u+=H.b*U;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],U);w++}else if(N.isSunLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,ee=t.get(N);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[x]=ee,n.sunShadowMap[x]=Z;let de=j.getViewportCount();for(let Ee=0;Ee<de;Ee++)n.sunShadowMatrix[_+Ee]=j.getMatrix(Ee),n.sunShadowCascade[_+Ee]=j._cascadeData[Ee];_+=de,x++}n.sun[f]=V,f++}else if(N.isDirectionalLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,ee=t.get(N);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=N.shadow.matrix,T++}n.directional[g]=V,g++}else if(N.isSpotLight){let V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(H).multiplyScalar(U),V.distance=k,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[y]=V;let j=N.shadow;if(N.map&&(n.spotLightMap[m]=N.map,m++,j.updateMatrices(N),N.castShadow&&S++),n.spotLightMatrix[y]=j.matrix,N.castShadow){let ee=t.get(N);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=Z,M++}y++}else if(N.isRectAreaLight){let V=e.get(N);V.color.copy(H).multiplyScalar(U),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[C]=V,C++}else if(N.isPointLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let j=N.shadow,ee=t.get(N);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,n.pointShadow[h]=ee,n.pointShadowMap[h]=Z,n.pointShadowMatrix[h]=N.shadow.matrix,E++}n.point[h]=V,h++}else if(N.isHemisphereLight){let V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(U),V.groundColor.copy(N.groundColor).multiplyScalar(U),n.hemi[b]=V,b++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==h||P.spotLength!==y||P.rectAreaLength!==C||P.hemiLength!==b||P.numSunShadows!==x||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==m||P.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=C,n.point.length=h,n.hemi.length=b,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+m-S,n.spotLightMap.length=m,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,P.sunLength=f,P.directionalLength=g,P.pointLength=h,P.spotLength=y,P.rectAreaLength=C,P.hemiLength=b,P.numSunShadows=x,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=m,P.numLightProbes=w,n.version=Qx++)}function l(c,d){let p=0,u=0,f=0,x=0,_=0,g=0,h=d.matrixWorldInverse;for(let y=0,C=c.length;y<C;y++){let b=c[y];if(b.isSunLight){let T=n.sun[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(h),p++}else if(b.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(h),u++}else if(b.isSpotLight){let T=n.spot[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(h),x++}else if(b.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),s.identity(),r.copy(b.matrixWorld),r.premultiply(h),s.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(h),f++}else if(b.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:n}}function gh(i){let e=new tv(i),t=[],n=[],a=[];function r(u){p.camera=u,t.length=0,n.length=0,a.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function l(u){a.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function nv(i){let e=new WeakMap;function t(a,r=0){let s=e.get(a),o;return s===void 0?(o=new gh(i),e.set(a,[o])):r>=s.length?(o=new gh(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`,rv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],sv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],xh=new ht,Lr=new L,Dc=new L;function ov(i,e,t){let n=new ma,a=new Fe,r=new Fe,s=new At,o=new ks,l=new Vs,c={},d=t.maxTextureSize,p={[yi]:Yt,[Yt]:yi,[Bn]:Bn},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:iv,fragmentShader:av}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new xt;x.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ze(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_r;let h=this.type;this.render=function(E,M,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===uu&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_r);let S=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=h!==this.type;B&&M.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(H=>H.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,H=E.length;N<H;N++){let U=E[N],k=U.shadow;if(k===void 0){Ve("WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);let Z=k.getFrameExtents();a.multiply(Z),r.copy(k.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/Z.x),a.x=r.x*Z.x,k.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/Z.y),a.y=r.y*Z.y,k.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=V,k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===_a){if(U.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Qt(a.x,a.y,{format:Ai,type:wn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),k.map.texture.name=U.name+".shadowMap",k.map.depthTexture=new xi(a.x,a.y,mn),k.map.depthTexture.name=U.name+".shadowMapDepth",k.map.depthTexture.format=Nn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt}else U.isPointLight?(k.map=new Jo(a.x),k.map.depthTexture=new Is(a.x,Tn)):(k.map=new Qt(a.x,a.y),k.map.depthTexture=new xi(a.x,a.y,Tn)),k.map.depthTexture.name=U.name+".shadowMap",k.map.depthTexture.format=Nn,this.type===_r?(k.map.depthTexture.compareFunction=V?Wo:qo,k.map.depthTexture.minFilter=Ut,k.map.depthTexture.magFilter=Ut):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==a.x||k.map.height!==a.y)&&k.map.setSize(a.x,a.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();U.isPointLight!==!0&&k.updateMatrices(U,m);for(let ee=0;ee<j;ee++){let de=k.getCamera(ee);if(U.isPointLight){let Ee=k.camera,Xe=k.matrix,Je=U.distance||Ee.far;Je!==Ee.far&&(Ee.far=Je,Ee.updateProjectionMatrix()),Lr.setFromMatrixPosition(U.matrixWorld),Ee.position.copy(Lr),Dc.copy(Ee.position),Dc.add(rv[ee]),Ee.up.copy(sv[ee]),Ee.lookAt(Dc),Ee.updateMatrixWorld(),Xe.makeTranslation(-Lr.x,-Lr.y,-Lr.z),xh.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),k._frustum.setFromProjectionMatrix(xh,Ee.coordinateSystem,Ee.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(k.map),i.clear());let Ee=k.getViewport(ee);s.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),F.viewport(s)}n=k.getFrustum(ee),b(M,m,de,U,this.type)}k.isPointLightShadow!==!0&&this.type===_a&&y(k,m),k.needsUpdate=!1}h=this.type,g.needsUpdate=!1,i.setRenderTarget(S,w,P)};function y(E,M){let m=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Qt(a.x,a.y,{format:Ai,type:wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(M,null,m,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(M,null,m,f,_,null)}function C(E,M,m,S){let w=null,P=m.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)w=P;else if(w=m.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let F=w.uuid,B=M.uuid,N=c[F];N===void 0&&(N={},c[F]=N);let H=N[B];H===void 0&&(H=w.clone(),N[B]=H,M.addEventListener("dispose",T)),w=H}if(w.visible=M.visible,w.wireframe=M.wireframe,S===_a?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:p[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,m.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=i.properties.get(w);F.light=m}return w}function b(E,M,m,S,w){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===_a)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,E.matrixWorld);let B=e.update(E),N=E.material;if(Array.isArray(N)){let H=B.groups;for(let U=0,k=H.length;U<k;U++){let Z=H[U],V=N[Z.materialIndex];if(V&&V.visible){let j=C(E,V,S,w);E.onBeforeShadow(i,E,M,m,B,j,Z),i.renderBufferDirect(m,null,B,j,E,Z),E.onAfterShadow(i,E,M,m,B,j,Z)}}}else if(N.visible){let H=C(E,N,S,w);E.onBeforeShadow(i,E,M,m,B,H,null),i.renderBufferDirect(m,null,B,H,E,null),E.onAfterShadow(i,E,M,m,B,H,null)}}let F=E.children;for(let B=0,N=F.length;B<N;B++)b(F[B],M,m,S,w)}function T(E){E.target.removeEventListener("dispose",T);for(let m in c){let S=c[m],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function lv(i,e){function t(){let z=!1,ve=new At,ae=null,be=new At(0,0,0,0);return{setMask:function(Te){ae!==Te&&!z&&(i.colorMask(Te,Te,Te,Te),ae=Te)},setLocked:function(Te){z=Te},setClear:function(Te,se,ke,Ne,vt){vt===!0&&(Te*=Ne,se*=Ne,ke*=Ne),ve.set(Te,se,ke,Ne),be.equals(ve)===!1&&(i.clearColor(Te,se,ke,Ne),be.copy(ve))},reset:function(){z=!1,ae=null,be.set(-1,0,0,0)}}}function n(){let z=!1,ve=!1,ae=null,be=null,Te=null;return{setReversed:function(se){if(ve!==se){let ke=e.get("EXT_clip_control");se?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ve=se;let Ne=Te;Te=null,this.setClear(Ne)}},getReversed:function(){return ve},setTest:function(se){se?X(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(se){ae!==se&&!z&&(i.depthMask(se),ae=se)},setFunc:function(se){if(ve&&(se=Wu[se]),be!==se){switch(se){case ms:i.depthFunc(i.NEVER);break;case gs:i.depthFunc(i.ALWAYS);break;case xs:i.depthFunc(i.LESS);break;case la:i.depthFunc(i.LEQUAL);break;case vs:i.depthFunc(i.EQUAL);break;case bs:i.depthFunc(i.GEQUAL);break;case _s:i.depthFunc(i.GREATER);break;case ys:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=se}},setLocked:function(se){z=se},setClear:function(se){Te!==se&&(Te=se,ve&&(se=1-se),i.clearDepth(se))},reset:function(){z=!1,ae=null,be=null,Te=null,ve=!1}}}function a(){let z=!1,ve=null,ae=null,be=null,Te=null,se=null,ke=null,Ne=null,vt=null;return{setTest:function(ct){z||(ct?X(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(ct){ve!==ct&&!z&&(i.stencilMask(ct),ve=ct)},setFunc:function(ct,vn,Pn){(ae!==ct||be!==vn||Te!==Pn)&&(i.stencilFunc(ct,vn,Pn),ae=ct,be=vn,Te=Pn)},setOp:function(ct,vn,Pn){(se!==ct||ke!==vn||Ne!==Pn)&&(i.stencilOp(ct,vn,Pn),se=ct,ke=vn,Ne=Pn)},setLocked:function(ct){z=ct},setClear:function(ct){vt!==ct&&(i.clearStencil(ct),vt=ct)},reset:function(){z=!1,ve=null,ae=null,be=null,Te=null,se=null,ke=null,Ne=null,vt=null}}}let r=new t,s=new n,o=new a,l=new WeakMap,c=new WeakMap,d={},p={},u={},f=new WeakMap,x=[],_=null,g=!1,h=null,y=null,C=null,b=null,T=null,E=null,M=null,m=new qe(0,0,0),S=0,w=!1,P=null,F=null,B=null,N=null,H=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Z=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=Z>=2);let j=null,ee={},de=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),Xe=new At().fromArray(de),Je=new At().fromArray(Ee);function Ke(z,ve,ae,be){let Te=new Uint8Array(4),se=i.createTexture();i.bindTexture(z,se),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<ae;ke++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ve+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return se}let Q={};Q[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),X(i.DEPTH_TEST),s.setFunc(la),Ce(!1),je(Jl),X(i.CULL_FACE),oe(Gn);function X(z){d[z]!==!0&&(i.enable(z),d[z]=!0)}function ue(z){d[z]!==!1&&(i.disable(z),d[z]=!1)}function I(z,ve){return u[z]!==ve?(i.bindFramebuffer(z,ve),u[z]=ve,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function q(z,ve){let ae=x,be=!1;if(z){ae=f.get(ve),ae===void 0&&(ae=[],f.set(ve,ae));let Te=z.textures;if(ae.length!==Te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ke=Te.length;se<ke;se++)ae[se]=i.COLOR_ATTACHMENT0+se;ae.length=Te.length,be=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,be=!0);be&&i.drawBuffers(ae)}function ie(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let we={[Ui]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};we[mu]=i.MIN,we[gu]=i.MAX;let le={[xu]:i.ZERO,[vu]:i.ONE,[bu]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[Au]:i.SRC_ALPHA_SATURATE,[Mu]:i.DST_COLOR,[yu]:i.DST_ALPHA,[_u]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[Eu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[wu]:i.ONE_MINUS_CONSTANT_COLOR,[Cu]:i.CONSTANT_ALPHA,[Ru]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(z,ve,ae,be,Te,se,ke,Ne,vt,ct){if(z===Gn){g===!0&&(ue(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),z!==hu){if(z!==h||ct!==w){if((y!==Ui||T!==Ui)&&(i.blendEquation(i.FUNC_ADD),y=Ui,T=Ui),ct)switch(z){case ya:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFunc(i.ONE,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",z);break}else switch(z){case ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kl:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",z);break}C=null,b=null,E=null,M=null,m.set(0,0,0),S=0,h=z,w=ct}return}Te=Te||ve,se=se||ae,ke=ke||be,(ve!==y||Te!==T)&&(i.blendEquationSeparate(we[ve],we[Te]),y=ve,T=Te),(ae!==C||be!==b||se!==E||ke!==M)&&(i.blendFuncSeparate(le[ae],le[be],le[se],le[ke]),C=ae,b=be,E=se,M=ke),(Ne.equals(m)===!1||vt!==S)&&(i.blendColor(Ne.r,Ne.g,Ne.b,vt),m.copy(Ne),S=vt),h=z,w=!1}function Oe(z,ve){z.side===Bn?ue(i.CULL_FACE):X(i.CULL_FACE);let ae=z.side===Yt;ve&&(ae=!ae),Ce(ae),z.blending===ya&&z.transparent===!1?oe(Gn):oe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);let be=z.stencilWrite;o.setTest(be),be&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),he(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function je(z){z!==cu?(X(i.CULL_FACE),z!==F&&(z===Jl?i.cullFace(i.BACK):z===du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),F=z}function ce(z){z!==B&&(k&&i.lineWidth(z),B=z)}function he(z,ve,ae){z?(X(i.POLYGON_OFFSET_FILL),(N!==ve||H!==ae)&&(N=ve,H=ae,s.getReversed()&&(ve=-ve),i.polygonOffset(ve,ae))):ue(i.POLYGON_OFFSET_FILL)}function _e(z){z?X(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function ze(z){z===void 0&&(z=i.TEXTURE0+U-1),j!==z&&(i.activeTexture(z),j=z)}function D(z,ve,ae){ae===void 0&&(j===null?ae=i.TEXTURE0+U-1:ae=j);let be=ee[ae];be===void 0&&(be={type:void 0,texture:void 0},ee[ae]=be),(be.type!==z||be.texture!==ve)&&(j!==ae&&(i.activeTexture(ae),j=ae),i.bindTexture(z,ve||Q[z]),be.type=z,be.texture=ve)}function lt(){let z=ee[j];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(z){We("WebGLState:",z)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(z){We("WebGLState:",z)}}function v(){try{i.texSubImage2D(...arguments)}catch(z){We("WebGLState:",z)}}function G(){try{i.texSubImage3D(...arguments)}catch(z){We("WebGLState:",z)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(z){We("WebGLState:",z)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(z){We("WebGLState:",z)}}function pe(){try{i.texStorage2D(...arguments)}catch(z){We("WebGLState:",z)}}function me(){try{i.texStorage3D(...arguments)}catch(z){We("WebGLState:",z)}}function ne(){try{i.texImage2D(...arguments)}catch(z){We("WebGLState:",z)}}function re(){try{i.texImage3D(...arguments)}catch(z){We("WebGLState:",z)}}function ge(z){return p[z]!==void 0?p[z]:i.getParameter(z)}function Be(z,ve){p[z]!==ve&&(i.pixelStorei(z,ve),p[z]=ve)}function ye(z){Xe.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Xe.copy(z))}function xe(z){Je.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Je.copy(z))}function Ge(z,ve){let ae=c.get(ve);ae===void 0&&(ae=new WeakMap,c.set(ve,ae));let be=ae.get(z);be===void 0&&(be=i.getUniformBlockIndex(ve,z.name),ae.set(z,be))}function He(z,ve){let be=c.get(ve).get(z);l.get(ve)!==be&&(i.uniformBlockBinding(ve,be,z.__bindingPointIndex),l.set(ve,be))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},j=null,ee={},u={},f=new WeakMap,x=[],_=null,g=!1,h=null,y=null,C=null,b=null,T=null,E=null,M=null,m=new qe(0,0,0),S=0,w=!1,P=null,F=null,B=null,N=null,H=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:X,disable:ue,bindFramebuffer:I,drawBuffers:q,useProgram:ie,setBlending:oe,setMaterial:Oe,setFlipSided:Ce,setCullFace:je,setLineWidth:ce,setPolygonOffset:he,setScissorTest:_e,activeTexture:ze,bindTexture:D,unbindTexture:lt,compressedTexImage2D:Pe,compressedTexImage3D:R,texImage2D:ne,texImage3D:re,pixelStorei:Be,getParameter:ge,updateUBOMapping:Ge,uniformBlockBinding:He,texStorage2D:pe,texStorage3D:me,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:J,compressedTexSubImage3D:te,scissor:ye,viewport:xe,reset:Qe}}function cv(i,e,t,n,a,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap,p=new Set,u,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return x?new OffscreenCanvas(R,v):$a("canvas")}function g(R,v,G){let J=1,te=Pe(R);if((te.width>G||te.height>G)&&(J=G/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(J*te.width),me=Math.floor(J*te.height);u===void 0&&(u=_(pe,me));let ne=v?_(pe,me):u;return ne.width=pe,ne.height=me,ne.getContext("2d").drawImage(R,0,0,pe,me),Ve("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+pe+"x"+me+")."),ne}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function h(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,v,G,J,te,pe=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me;J&&(me=e.get("EXT_texture_norm16"),me||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=v;if(v===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8),G===i.UNSIGNED_SHORT&&me&&(ne=me.R16_EXT),G===i.SHORT&&me&&(ne=me.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),v===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8),G===i.UNSIGNED_SHORT&&me&&(ne=me.RG16_EXT),G===i.SHORT&&me&&(ne=me.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RG8UI),G===i.UNSIGNED_SHORT&&(ne=i.RG16UI),G===i.UNSIGNED_INT&&(ne=i.RG32UI),G===i.BYTE&&(ne=i.RG8I),G===i.SHORT&&(ne=i.RG16I),G===i.INT&&(ne=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),G===i.UNSIGNED_INT&&(ne=i.RGB32UI),G===i.BYTE&&(ne=i.RGB8I),G===i.SHORT&&(ne=i.RGB16I),G===i.INT&&(ne=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),G===i.UNSIGNED_INT&&(ne=i.RGBA32UI),G===i.BYTE&&(ne=i.RGBA8I),G===i.SHORT&&(ne=i.RGBA16I),G===i.INT&&(ne=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&me&&(ne=me.RGB16_EXT),G===i.SHORT&&me&&(ne=me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),v===i.RGBA){let re=pe?Ya:rt.getTransfer(te);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=re===ut?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&me&&(ne=me.RGBA16_EXT),G===i.SHORT&&me&&(ne=me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(R,v){let G;return R?v===null||v===Tn||v===Ma?G=i.DEPTH24_STENCIL8:v===mn?G=i.DEPTH32F_STENCIL8:v===Sa&&(G=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Tn||v===Ma?G=i.DEPTH_COMPONENT24:v===mn?G=i.DEPTH_COMPONENT32F:v===Sa&&(G=i.DEPTH_COMPONENT16),G}function E(R,v){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Ut?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function M(R){let v=R.target;v.removeEventListener("dispose",M),S(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&p.delete(v)}function m(R){let v=R.target;v.removeEventListener("dispose",m),P(v)}function S(R){let v=n.get(R);if(v.__webglInit===void 0)return;let G=R.source,J=f.get(G);if(J){let te=J[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(R),Object.keys(J).length===0&&f.delete(G)}n.remove(R)}function w(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let G=R.source,J=f.get(G);delete J[v.__cacheKey],s.memory.textures--}function P(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let te=0;te<v.__webglFramebuffer[J].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[J][te]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let G=R.textures;for(let J=0,te=G.length;J<te;J++){let pe=n.get(G[J]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),s.memory.textures--),n.remove(G[J])}n.remove(R)}let F=0;function B(){F=0}function N(){return F}function H(R){F=R}function U(){let R=F;return R>=a.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),F+=1,R}function k(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Z(R,v){let G=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let J=R.image;if(J===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(G,R,v);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function V(R,v){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ue(G,R,v);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function j(R,v){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ue(G,R,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function ee(R,v){let G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){I(G,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let de={[ca]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Ss]:i.MIRRORED_REPEAT},Ee={[Nt]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},Xe={[Fu]:i.NEVER,[ku]:i.ALWAYS,[Ou]:i.LESS,[qo]:i.LEQUAL,[zu]:i.EQUAL,[Wo]:i.GEQUAL,[Bu]:i.GREATER,[Gu]:i.NOTEQUAL};function Je(R,v){if(v.type===mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ut||v.magFilter===ro||v.magFilter===Mr||v.magFilter===Mi||v.minFilter===Ut||v.minFilter===ro||v.minFilter===Mr||v.minFilter===Mi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,de[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,de[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,de[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ee[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ee[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nt||v.minFilter!==Mr&&v.minFilter!==Mi||v.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(R,v){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",M));let J=v.source,te=f.get(J);te===void 0&&(te={},f.set(J,te));let pe=k(v);if(pe!==R.__cacheKey){te[pe]===void 0&&(te[pe]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,G=!0),te[pe].usedTimes++;let me=te[R.__cacheKey];me!==void 0&&(te[R.__cacheKey].usedTimes--,me.usedTimes===0&&w(v)),R.__cacheKey=pe,R.__webglTexture=te[pe].texture}return G}function Q(R,v,G){return Math.floor(Math.floor(R/G)/v)}function X(R,v,G,J){let pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,J,v.data);else{pe.sort((Be,ye)=>Be.start-ye.start);let me=0;for(let Be=1;Be<pe.length;Be++){let ye=pe[me],xe=pe[Be],Ge=ye.start+ye.count,He=Q(xe.start,v.width,4),Qe=Q(ye.start,v.width,4);xe.start<=Ge+1&&He===Qe&&Q(xe.start+xe.count-1,v.width,4)===He?ye.count=Math.max(ye.count,xe.start+xe.count-ye.start):(++me,pe[me]=xe)}pe.length=me+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Be=0,ye=pe.length;Be<ye;Be++){let xe=pe[Be],Ge=Math.floor(xe.start/4),He=Math.ceil(xe.count/4),Qe=Ge%v.width,z=Math.floor(Ge/v.width),ve=He,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Qe,z,ve,ae,G,J,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function ue(R,v,G){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let te=Ke(R,v),pe=v.source;t.bindTexture(J,R.__webglTexture,i.TEXTURE0+G);let me=n.get(pe);if(pe.version!==me.__version||te===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ae=rt.getPrimaries(rt.workingColorSpace),be=v.colorSpace===ni?null:rt.getPrimaries(v.colorSpace),Te=v.colorSpace===ni||ae===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let re=g(v.image,!1,a.maxTextureSize);re=lt(v,re);let ge=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),ye=b(v.internalFormat,ge,Be,v.normalized,v.colorSpace,v.isVideoTexture);Je(J,v);let xe,Ge=v.mipmaps,He=v.isVideoTexture!==!0,Qe=me.__version===void 0||te===!0,z=pe.dataReady,ve=E(v,re);if(v.isDepthTexture)ye=T(v.format===Ei,v.type),Qe&&(He?t.texStorage2D(i.TEXTURE_2D,1,ye,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ye,re.width,re.height,0,ge,Be,null));else if(v.isDataTexture)if(Ge.length>0){He&&Qe&&t.texStorage2D(i.TEXTURE_2D,ve,ye,Ge[0].width,Ge[0].height);for(let ae=0,be=Ge.length;ae<be;ae++)xe=Ge[ae],He?z&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,xe.width,xe.height,ge,Be,xe.data):t.texImage2D(i.TEXTURE_2D,ae,ye,xe.width,xe.height,0,ge,Be,xe.data);v.generateMipmaps=!1}else He?(Qe&&t.texStorage2D(i.TEXTURE_2D,ve,ye,re.width,re.height),z&&X(v,re,ge,Be)):t.texImage2D(i.TEXTURE_2D,0,ye,re.width,re.height,0,ge,Be,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ye,Ge[0].width,Ge[0].height,re.depth);for(let ae=0,be=Ge.length;ae<be;ae++)if(xe=Ge[ae],v.format!==gn)if(ge!==null)if(He){if(z)if(v.layerUpdates.size>0){let Te=Sc(xe.width,xe.height,v.format,v.type);for(let se of v.layerUpdates){let ke=xe.data.subarray(se*Te/xe.data.BYTES_PER_ELEMENT,(se+1)*Te/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,se,xe.width,xe.height,1,ge,ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,re.depth,ge,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,ye,xe.width,xe.height,re.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,re.depth,ge,Be,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,ye,xe.width,xe.height,re.depth,0,ge,Be,xe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{He&&Qe&&t.texStorage2D(i.TEXTURE_2D,ve,ye,Ge[0].width,Ge[0].height);for(let ae=0,be=Ge.length;ae<be;ae++)xe=Ge[ae],v.format!==gn?ge!==null?He?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,ye,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?z&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,xe.width,xe.height,ge,Be,xe.data):t.texImage2D(i.TEXTURE_2D,ae,ye,xe.width,xe.height,0,ge,Be,xe.data)}else if(v.isDataArrayTexture)if(He){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ye,re.width,re.height,re.depth),z)if(v.layerUpdates.size>0){let ae=Sc(re.width,re.height,v.format,v.type);for(let be of v.layerUpdates){let Te=re.data.subarray(be*ae/re.data.BYTES_PER_ELEMENT,(be+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,re.width,re.height,1,ge,Be,Te)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Be,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,re.width,re.height,re.depth,0,ge,Be,re.data);else if(v.isData3DTexture)He?(Qe&&t.texStorage3D(i.TEXTURE_3D,ve,ye,re.width,re.height,re.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Be,re.data)):t.texImage3D(i.TEXTURE_3D,0,ye,re.width,re.height,re.depth,0,ge,Be,re.data);else if(v.isFramebufferTexture){if(Qe)if(He)t.texStorage2D(i.TEXTURE_2D,ve,ye,re.width,re.height);else{let ae=re.width,be=re.height;for(let Te=0;Te<ve;Te++)t.texImage2D(i.TEXTURE_2D,Te,ye,ae,be,0,ge,Be,null),ae>>=1,be>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),re.parentNode!==ae){ae.appendChild(re),p.add(v),ae.onpaint=be=>{let Te=be.changedElements;for(let se of p)Te.includes(se.image)&&(se.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let Te=i.RGBA,se=i.RGBA,ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,se,ke,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(He&&Qe){let ae=Pe(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ve,ye,ae.width,ae.height)}for(let ae=0,be=Ge.length;ae<be;ae++)xe=Ge[ae],He?z&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ge,Be,xe):t.texImage2D(i.TEXTURE_2D,ae,ye,ge,Be,xe);v.generateMipmaps=!1}else if(He){if(Qe){let ae=Pe(re);t.texStorage2D(i.TEXTURE_2D,ve,ye,ae.width,ae.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Be,re)}else t.texImage2D(i.TEXTURE_2D,0,ye,ge,Be,re);h(v)&&y(J),me.__version=pe.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function I(R,v,G){if(v.image.length!==6)return;let J=Ke(R,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let pe=n.get(te);if(te.version!==pe.__version||J===!0){t.activeTexture(i.TEXTURE0+G);let me=rt.getPrimaries(rt.workingColorSpace),ne=v.colorSpace===ni?null:rt.getPrimaries(v.colorSpace),re=v.colorSpace===ni||me===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!ge&&!Be?ye[se]=g(v.image[se],!0,a.maxCubemapSize):ye[se]=Be?v.image[se].image:v.image[se],ye[se]=lt(v,ye[se]);let xe=ye[0],Ge=r.convert(v.format,v.colorSpace),He=r.convert(v.type),Qe=b(v.internalFormat,Ge,He,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,ve=pe.__version===void 0||J===!0,ae=te.dataReady,be=E(v,xe);Je(i.TEXTURE_CUBE_MAP,v);let Te;if(ge){z&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Qe,xe.width,xe.height);for(let se=0;se<6;se++){Te=ye[se].mipmaps;for(let ke=0;ke<Te.length;ke++){let Ne=Te[ke];v.format!==gn?Ge!==null?z?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ne.width,Ne.height,Ge,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Qe,Ne.width,Ne.height,0,Ne.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,0,0,Ne.width,Ne.height,Ge,He,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke,Qe,Ne.width,Ne.height,0,Ge,He,Ne.data)}}}else{if(Te=v.mipmaps,z&&ve){Te.length>0&&be++;let se=Pe(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(Be){z?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Ge,He,ye[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,ye[se].width,ye[se].height,0,Ge,He,ye[se].data);for(let ke=0;ke<Te.length;ke++){let vt=Te[ke].image[se].image;z?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,vt.width,vt.height,Ge,He,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Qe,vt.width,vt.height,0,Ge,He,vt.data)}}else{z?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ge,He,ye[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Ge,He,ye[se]);for(let ke=0;ke<Te.length;ke++){let Ne=Te[ke];z?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,0,0,Ge,He,Ne.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke+1,Qe,Ge,He,Ne.image[se])}}}h(v)&&y(i.TEXTURE_CUBE_MAP),pe.__version=te.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function q(R,v,G,J,te,pe){let me=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),re=b(G.internalFormat,me,ne,G.normalized,G.colorSpace),ge=n.get(v),Be=n.get(G);if(Be.__renderTarget=v,!ge.__hasExternalTextures){let ye=Math.max(1,v.width>>pe),xe=Math.max(1,v.height>>pe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,pe,re,ye,xe,v.depth,0,me,ne,null):t.texImage2D(te,pe,re,ye,xe,0,me,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ze(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,te,Be.__webglTexture,0,_e(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,te,Be.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(R,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let J=v.depthTexture,te=J&&J.isDepthTexture?J.type:null,pe=T(v.stencilBuffer,te),me=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ze(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(v),pe,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(v),pe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pe,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,R)}else{let J=v.textures;for(let te=0;te<J.length;te++){let pe=J[te],me=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),re=b(pe.internalFormat,me,ne,pe.normalized,pe.colorSpace);ze(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(v),re,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(v),re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,re,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(R,v,G){let J=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",M)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v.depthTexture);let ge=r.convert(v.depthTexture.format),Be=r.convert(v.depthTexture.type),ye;v.depthTexture.format===Nn?ye=i.DEPTH_COMPONENT24:v.depthTexture.format===Ei&&(ye=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ye,v.width,v.height,0,ge,Be,null)}}else Z(v.depthTexture,0);let pe=te.__webglTexture,me=_e(v),ne=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,re=v.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Nn)ze(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,pe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,pe,0);else if(v.depthTexture.format===Ei)ze(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,pe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(R){let v=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=J}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let J=0;J<6;J++)we(v.__webglFramebuffer[J],R,J);else{let J=R.texture.mipmaps;J&&J.length>0?we(v.__webglFramebuffer[0],R,0):we(v.__webglFramebuffer,R,0)}else if(G){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),ie(v.__webglDepthbuffer[J],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,pe)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ie(v.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,v,G){let J=n.get(R);v!==void 0&&q(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&le(R)}function Oe(R){let v=R.texture,G=n.get(R),J=n.get(v);R.addEventListener("dispose",m);let te=R.textures,pe=R.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,s.memory.textures++),pe){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let re=0;re<v.mipmaps.length;re++)G.__webglFramebuffer[ne][re]=i.createFramebuffer()}else G.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)G.__webglFramebuffer[ne]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(me)for(let ne=0,re=te.length;ne<re;ne++){let ge=n.get(te[ne]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),s.memory.textures++)}if(R.samples>0&&ze(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let re=te[ne];G.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);let ge=r.convert(re.format,re.colorSpace),Be=r.convert(re.type),ye=b(re.internalFormat,ge,Be,re.normalized,re.colorSpace,R.isXRRenderTarget===!0),xe=_e(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ye,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)q(G.__webglFramebuffer[ne][re],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else q(G.__webglFramebuffer[ne],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);h(v)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ne=0,re=te.length;ne<re;ne++){let ge=te[ne],Be=n.get(ge),ye=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Be.__webglTexture),Je(ye,ge),q(G.__webglFramebuffer,R,ge,i.COLOR_ATTACHMENT0+ne,ye,0),h(ge)&&y(ye)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,J.__webglTexture),Je(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)q(G.__webglFramebuffer[re],R,v,i.COLOR_ATTACHMENT0,ne,re);else q(G.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ne,0);h(v)&&y(ne),t.unbindTexture()}R.depthBuffer&&le(R)}function Ce(R){let v=R.textures;for(let G=0,J=v.length;G<J;G++){let te=v[G];if(h(te)){let pe=C(R),me=n.get(te).__webglTexture;t.bindTexture(pe,me),y(pe),t.unbindTexture()}}}let je=[],ce=[];function he(R){if(R.samples>0){if(ze(R)===!1){let v=R.textures,G=R.width,J=R.height,te=i.COLOR_BUFFER_BIT,pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(R),ne=v.length>1;if(ne)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let re=R.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);let Be=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,te,i.NEAREST),l===!0&&(je.length=0,ce.length=0,je.push(i.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(je.push(pe),ce.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);let Be=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function _e(R){return Math.min(a.maxSamples,R.samples)}function ze(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(R){let v=s.render.frame;d.get(R)!==v&&(d.set(R,v),R.update())}function lt(R,v){let G=R.colorSpace,J=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Xa&&G!==ni&&(rt.getTransfer(G)===ut?(J!==gn||te!==en)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",G)),v}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=ee,this.rebindTextures=oe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dv(i,e){function t(n,a=ni){let r,s=rt.getTransfer(a);if(n===en)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return i.BYTE;if(n===uc)return i.SHORT;if(n===Sa)return i.UNSIGNED_SHORT;if(n===so)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===mc)return i.RGB;if(n===gn)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===co)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===Er||n===Ar||n===Tr||n===wr)if(s===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===mo||n===go||n===xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===bo||n===_o||n===yo||n===So||n===Cr||n===Mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===bo)return s===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_o)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===So)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Cr)return r.COMPRESSED_RG11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Eo||n===Ao||n===To||n===wo||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return s===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Bo||n===Go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return s===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ko||n===Vo||n===Rr||n===Ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ma?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new rr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:uv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends Un{constructor(e,t){super();let n=this,a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,f=null,x=null,_=typeof XRWebGLBinding<"u",g=new kc,h={},y=t.getContextAttributes(),C=null,b=null,T=[],E=[],M=new Fe,m=null,S=null,w=new kt;w.viewport=new At;let P=new kt;P.viewport=new At;let F=[w,P],B=new to,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let X=T[Q];return X===void 0&&(X=new pa,T[Q]=X),X.getTargetRaySpace()},this.getControllerGrip=function(Q){let X=T[Q];return X===void 0&&(X=new pa,T[Q]=X),X.getGripSpace()},this.getHand=function(Q){let X=T[Q];return X===void 0&&(X=new pa,T[Q]=X),X.getHandSpace()};function U(Q){let X=E.indexOf(Q.inputSource);if(X===-1)return;let ue=T[X];ue!==void 0&&(ue.update(Q.inputSource,Q.frame,c||s),ue.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){a.removeEventListener("select",U),a.removeEventListener("selectstart",U),a.removeEventListener("selectend",U),a.removeEventListener("squeeze",U),a.removeEventListener("squeezestart",U),a.removeEventListener("squeezeend",U),a.removeEventListener("end",k),a.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<T.length;Q++){let X=E[Q];X!==null&&(E[Q]=null,T[Q].disconnect(X))}N=null,H=null,g.reset();for(let Q in h)delete h[Q];if(e.setRenderTarget(C),f=null,u=null,p=null,a=null,b=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(M.width,M.height,!1),S!==null){let Q=S.camera;Q.fov=S.fov,Q.zoom=S.zoom,Q.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(a,t)),p},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",U),a.addEventListener("selectstart",U),a.addEventListener("selectend",U),a.addEventListener("squeeze",U),a.addEventListener("squeezestart",U),a.addEventListener("squeezeend",U),a.addEventListener("end",k),a.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(M),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,I=null,q=null;y.depth&&(q=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?Ei:Nn,I=y.stencil?Ma:Tn);let ie={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(ie),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Qt(u.textureWidth,u.textureHeight,{format:gn,type:en,depthTexture:new xi(u.textureWidth,u.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(a,t,ue),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Qt(f.framebufferWidth,f.framebufferHeight,{format:gn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Ke.setContext(a),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Q){for(let X=0;X<Q.removed.length;X++){let ue=Q.removed[X],I=E.indexOf(ue);I>=0&&(E[I]=null,T[I].disconnect(ue))}for(let X=0;X<Q.added.length;X++){let ue=Q.added[X],I=E.indexOf(ue);if(I===-1){for(let ie=0;ie<T.length;ie++)if(ie>=E.length){E.push(ue),I=ie;break}else if(E[ie]===null){E[ie]=ue,I=ie;break}if(I===-1)break}let q=T[I];q&&q.connect(ue)}}let V=new L,j=new L;function ee(Q,X,ue){V.setFromMatrixPosition(X.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);let I=V.distanceTo(j),q=X.projectionMatrix.elements,ie=ue.projectionMatrix.elements,we=q[14]/(q[10]-1),le=q[14]/(q[10]+1),oe=(q[9]+1)/q[5],Oe=(q[9]-1)/q[5],Ce=(q[8]-1)/q[0],je=(ie[8]+1)/ie[0],ce=we*Ce,he=we*je,_e=I/(-Ce+je),ze=_e*-Ce;if(X.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ze),Q.translateZ(_e),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),q[10]===-1)Q.projectionMatrix.copy(X.projectionMatrix),Q.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let D=we+_e,lt=le+_e,Pe=ce-ze,R=he+(I-ze),v=oe*le/lt*D,G=Oe*le/lt*D;Q.projectionMatrix.makePerspective(Pe,R,v,G,D,lt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function de(Q,X){X===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(X.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let X=Q.near,ue=Q.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),B.near=P.near=w.near=X,B.far=P.far=w.far=ue,(N!==B.near||H!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,H=B.far),B.layers.mask=Q.layers.mask|6,w.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let I=Q.parent,q=B.cameras;de(B,I);for(let ie=0;ie<q.length;ie++)de(q[ie],I);q.length===2?ee(B,w,P):B.projectionMatrix.copy(w.projectionMatrix),S===null&&Q.isPerspectiveCamera&&(S={camera:Q,fov:Q.fov,zoom:Q.zoom}),Ee(Q,B,I)};function Ee(Q,X,ue){ue===null?Q.matrix.copy(X.matrixWorld):(Q.matrix.copy(ue.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(X.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(X.projectionMatrix),Q.projectionMatrixInverse.copy(X.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Es*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Q){return h[Q]};let Xe=null;function Je(Q,X){if(d=X.getViewerPose(c||s),x=X,d!==null){let ue=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let I=!1;ue.length!==B.cameras.length&&(B.cameras.length=0,I=!0);for(let le=0;le<ue.length;le++){let oe=ue[le],Oe=null;if(f!==null)Oe=f.getViewport(oe);else{let je=p.getViewSubImage(u,oe);Oe=je.viewport,le===0&&(e.setRenderTargetTextures(b,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(b))}let Ce=F[le];Ce===void 0&&(Ce=new kt,Ce.layers.enable(le),Ce.viewport=new At,F[le]=Ce),Ce.matrix.fromArray(oe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(oe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),le===0&&(B.matrix.copy(Ce.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),I===!0&&B.cameras.push(Ce)}let q=a.enabledFeatures;if(q&&q.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let le=p.getDepthInformation(ue[0]);le&&le.isValid&&le.texture&&g.init(le,a.renderState)}if(q&&q.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let le=0;le<ue.length;le++){let oe=ue[le].camera;if(oe){let Oe=h[oe];Oe||(Oe=new rr,h[oe]=Oe);let Ce=p.getCameraImage(oe);Oe.sourceTexture=Ce}}}}for(let ue=0;ue<T.length;ue++){let I=E[ue],q=T[ue];I!==null&&q!==void 0&&q.update(I,X,c||s)}Xe&&Xe(Q,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),x=null}let Ke=new vh;Ke.setAnimationLoop(Je),this.setAnimationLoop=function(Q){Xe=Q},this.dispose=function(){}}},pv=new ht,Eh=new $e;Eh.set(-1,0,0,0,1,0,0,0,1);function fv(i,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function n(g,h){h.color.getRGB(g.fogColor.value,bc(i)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function a(g,h,y,C,b){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(g,h):h.isMeshLambertMaterial?(r(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(g,h),p(g,h)):h.isMeshPhongMaterial?(r(g,h),d(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(g,h),u(g,h),h.isMeshPhysicalMaterial&&f(g,h,b)):h.isMeshMatcapMaterial?(r(g,h),x(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),_(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(s(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,y,C):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Yt&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Yt&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let y=e.get(h),C=y.envMap,b=y.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(b)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Eh),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function s(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,y,C){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*y,g.scale.value=C*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function f(g,h,y){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yt&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){let y=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function mv(i,e,t,n){let a={},r={},s=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){let E=T.program;n.uniformBlockBinding(b,E)}function c(b,T){let E=a[b.id];E===void 0&&(g(b),E=d(b),a[b.id]=E,b.addEventListener("dispose",y));let M=T.program;n.updateUBOMapping(b,M);let m=e.render.frame;r[b.id]!==m&&(u(b),r[b.id]=m)}function d(b){let T=p();b.__bindingPointIndex=T;let E=i.createBuffer(),M=b.__size,m=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function p(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let T=a[b.id],E=b.uniforms,M=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let m=0,S=E.length;m<S;m++){let w=E[m];if(Array.isArray(w))for(let P=0,F=w.length;P<F;P++)f(w[P],m,P,M);else f(w,m,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,T,E,M){if(_(b,T,E,M)===!0){let m=b.__offset,S=b.value;if(Array.isArray(S)){let w=0;for(let P=0;P<S.length;P++){let F=S[P],B=h(F);x(F,b.__data,w),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(w+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(S,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,b.__data)}}function x(b,T,E){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,E)}function _(b,T,E,M){let m=b.value,S=T+"_"+E;if(M[S]===void 0)return typeof m=="number"||typeof m=="boolean"?M[S]=m:ArrayBuffer.isView(m)?M[S]=m.slice():M[S]=m.clone(),!0;{let w=M[S];if(typeof m=="number"||typeof m=="boolean"){if(w!==m)return M[S]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(w.equals(m)===!1)return w.copy(m),!0}}return!1}function g(b){let T=b.uniforms,E=0,M=16;for(let S=0,w=T.length;S<w;S++){let P=Array.isArray(T[S])?T[S]:[T[S]];for(let F=0,B=P.length;F<B;F++){let N=P[F],H=Array.isArray(N.value)?N.value:[N.value];for(let U=0,k=H.length;U<k;U++){let Z=H[U],V=h(Z),j=E%M,ee=j%V.boundary,de=j+ee;E+=ee,de!==0&&M-de<V.storage&&(E+=M-de),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=V.storage}}}let m=E%M;return m>0&&(E+=M-m),b.__size=E,b.__cache={},this}function h(b){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",b),T}function y(b){let T=b.target;T.removeEventListener("dispose",y);let E=s.indexOf(T.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(a[T.id]),delete a[T.id],delete r[T.id]}function C(){for(let b in a)i.deleteBuffer(a[b]);s=[],a={},r={}}return{bind:l,update:c,dispose:C}}var gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function xv(){return kn===null&&(kn=new ir(gv,16,16,Ai,wn),kn.name="DFG_LUT",kn.minFilter=Ut,kn.magFilter=Ut,kn.wrapS=Dn,kn.wrapT=Dn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var Zo=class{constructor(e={}){let{canvas:t=Hu(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=en}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;let _=f,g=new Set([po,ho,uo]),h=new Set([en,Tn,Sa,Ma,oo,lo]),y=new Uint32Array(4),C=new Int32Array(4),b=new L,T=null,E=null,M=[],m=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,P=!1,F=null,B=null,N=null,H=null;this._outputColorSpace=Gt;let U=0,k=0,Z=null,V=-1,j=null,ee=new At,de=new At,Ee=null,Xe=new qe(0),Je=0,Ke=t.width,Q=t.height,X=1,ue=null,I=null,q=new At(0,0,Ke,Q),ie=new At(0,0,Ke,Q),we=!1,le=new ma,oe=!1,Oe=!1,Ce=new ht,je=new L,ce=new At,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function ze(){return Z===null?X:1}let D=n;function lt(A,O){return t.getContext(A,O)}let Pe,R,v,G,J,te,pe,me,ne,re,ge,Be,ye,xe,Ge,He,Qe,z,ve,ae,be,Te,se;try{let A={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",vn,!1),D===null){let O="webgl2";if(D=lt(O,A),D===null)throw lt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(A){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),We("WebGLRenderer: "+A.message),A}function ke(){Pe=new E0(D),Pe.init(),be=new dv(D,Pe),R=new f0(D,Pe,e,be),v=new lv(D,Pe),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),B=D.createFramebuffer(),N=D.createFramebuffer(),H=D.createFramebuffer(),G=new w0(D),J=new Yx,te=new cv(D,Pe,v,J,R,be,G),pe=new M0(w),me=new Rf(D),Te=new h0(D,me),ne=new A0(D,me,G,Te),re=new R0(D,ne,me,Te,G),z=new C0(D,R,te),Ge=new m0(J),ge=new Xx(w,pe,Pe,R,Te,Ge),Be=new fv(w,J),ye=new Jx,xe=new nv(Pe),Qe=new u0(w,pe,v,re,x,l),He=new ov(w,re,R),se=new mv(D,G,R,v),ve=new p0(D,Pe,G),ae=new T0(D,Pe,G),G.programs=ge.programs,w.capabilities=R,w.extensions=Pe,w.properties=J,w.renderLists=ye,w.shadowMap=He,w.state=v,w.info=G}_!==en&&(S=new I0(_,t.width,t.height,o,a,r));let Ne=new Vc(w,D);this.xr=Ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(Ke,Q,!1))},this.getSize=function(A){return A.set(Ke,Q)},this.setSize=function(A,O,K=!0){if(Ne.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=A,Q=O,t.width=Math.floor(A*X),t.height=Math.floor(O*X),K===!0&&(t.style.width=A+"px",t.style.height=O+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(Ke*X,Q*X).floor()},this.setDrawingBufferSize=function(A,O,K){Ke=A,Q=O,X=K,t.width=Math.floor(A*K),t.height=Math.floor(O*K),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(_===en){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(q)},this.setViewport=function(A,O,K,Y){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,O,K,Y),v.viewport(ee.copy(q).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,O,K,Y){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,O,K,Y),v.scissor(de.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){v.setScissorTest(we=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,K=!0){let Y=0;if(A){let $=!1;if(Z!==null){let Ae=Z.texture.format;$=g.has(Ae)}if($){let Ae=Z.texture.type,Ie=h.has(Ae),Me=Qe.getClearColor(),Le=Qe.getClearAlpha(),Ue=Me.r,tt=Me.g,it=Me.b;Ie?(y[0]=Ue,y[1]=tt,y[2]=it,y[3]=Le,D.clearBufferuiv(D.COLOR,0,y)):(C[0]=Ue,C[1]=tt,C[2]=it,C[3]=Le,D.clearBufferiv(D.COLOR,0,C))}else Y|=D.COLOR_BUFFER_BIT}O&&(Y|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Qe.dispose(),ye.dispose(),xe.dispose(),J.dispose(),pe.dispose(),re.dispose(),Te.dispose(),se.dispose(),ge.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Ed),Ne.removeEventListener("sessionend",Ad),Ci.stop()};function vt(A){A.preventDefault(),xc("WebGLRenderer: Context Lost."),P=!0}function ct(){xc("WebGLRenderer: Context Restored."),P=!1;let A=G.autoReset,O=He.enabled,K=He.autoUpdate,Y=He.needsUpdate,$=He.type;ke(),G.autoReset=A,He.enabled=O,He.autoUpdate=K,He.needsUpdate=Y,He.type=$}function vn(A){We("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pn(A){let O=A.target;O.removeEventListener("dispose",Pn),Ap(O)}function Ap(A){Tp(A),J.remove(A)}function Tp(A){let O=J.get(A).programs;O!==void 0&&(O.forEach(function(K){ge.releaseProgram(K)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,K,Y,$,Ae){O===null&&(O=he);let Ie=$.isMesh&&$.matrixWorld.determinantAffine()<0,Me=Rp(A,O,K,Y,$);v.setMaterial(Y,Ie);let Le=K.index,Ue=1;if(Y.wireframe===!0){if(Le=ne.getWireframeAttribute(K),Le===void 0)return;Ue=2}let tt=K.drawRange,it=K.attributes.position,De=tt.start*Ue,dt=(tt.start+tt.count)*Ue;Ae!==null&&(De=Math.max(De,Ae.start*Ue),dt=Math.min(dt,(Ae.start+Ae.count)*Ue)),Le!==null?(De=Math.max(De,0),dt=Math.min(dt,Le.count)):it!=null&&(De=Math.max(De,0),dt=Math.min(dt,it.count));let wt=dt-De;if(wt<0||wt===1/0)return;Te.setup($,Y,Me,K,Le);let yt,mt=ve;if(Le!==null&&(yt=me.get(Le),mt=ae,mt.setIndex(yt)),$.isMesh)Y.wireframe===!0?(v.setLineWidth(Y.wireframeLinewidth*ze()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if($.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),v.setLineWidth(Ot*ze()),$.isLineSegments?mt.setMode(D.LINES):$.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else $.isPoints?mt.setMode(D.POINTS):$.isSprite&&mt.setMode(D.TRIANGLES);if($.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))mt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ot=$._multiDrawStarts,Re=$._multiDrawCounts,Wt=$._multiDrawCount,ot=Le?me.get(Le).bytesPerElement:1,dn=J.get(Y).currentProgram.getUniforms();for(let In=0;In<Wt;In++)dn.setValue(D,"_gl_DrawID",In),mt.render(Ot[In]/ot,Re[In])}else if($.isInstancedMesh)mt.renderInstances(De,wt,$.count);else if(K.isInstancedBufferGeometry){let Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Re=Math.min(K.instanceCount,Ot);mt.renderInstances(De,wt,Re)}else mt.render(De,wt)};function Md(A,O,K,Y){F!==null&&A.isNodeMaterial&&F.setObject(Y,A),oe===!0&&Ge.setState(A,K,!1),A.transparent===!0&&A.side===Bn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,jr(A,O,Y),A.side=yi,A.needsUpdate=!0,jr(A,O,Y),A.side=Bn):jr(A,O,Y)}this.compile=function(A,O,K=null){K===null&&(K=A),F!==null&&F.renderStart(A,O,K),E=xe.get(K),E.init(O),m.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),A!==K&&A.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Oe=this.localClippingEnabled,oe=Ge.init(this.clippingPlanes,Oe),oe===!0&&Ge.setGlobalState(this.clippingPlanes,O),F!==null&&He.render(E.state.shadowsArray,K,O);let Y=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){let Me=Ae[Ie];Md(Me,K,O,$),Y.add(Me)}else Md(Ae,K,O,$),Y.add(Ae)}),E=m.pop(),F!==null&&F.renderEnd(),Y},this.compileAsync=function(A,O,K=null){let Y=this.compile(A,O,K);return new Promise($=>{function Ae(){if(Y.forEach(function(Ie){let Le=J.get(Ie).currentProgram;(Le===void 0||Le.isReady())&&Y.delete(Ie)}),Y.size===0){$(A);return}setTimeout(Ae,10)}Pe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let fl=null;function wp(A){fl&&fl(A)}function Ed(){Ci.stop()}function Ad(){Ci.start()}let Ci=new vh;Ci.setAnimationLoop(wp),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){fl=A,Ne.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},Ne.addEventListener("sessionstart",Ed),Ne.addEventListener("sessionend",Ad),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(A,O);let K=Ne.enabled===!0&&Ne.isPresenting===!0,Y=S!==null&&(Z===null||K)&&S.begin(w,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(O),O=Ne.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,O,Z),E=xe.get(A,m.length),E.init(O),E.state.textureUnits=te.getTextureUnits(),m.push(E),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),le.setFromProjectionMatrix(Ce,Mn,O.reversedDepth),Oe=this.localClippingEnabled,oe=Ge.init(this.clippingPlanes,Oe),T=ye.get(A,M.length),T.init(),M.push(T),Ne.enabled===!0&&Ne.isPresenting===!0){let Ie=w.xr.getDepthSensingMesh();Ie!==null&&ml(Ie,O,-1/0,w.sortObjects)}ml(A,O,0,w.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),w.sortObjects===!0&&T.sort(ue,I),_e=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,_e&&Qe.addToRenderList(T,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Ge.beginShadows();let $=E.state.shadowsArray;if(He.render($,A,O),oe===!0&&Ge.endShadows(),(Y&&S.hasRenderPass())===!1){let Ie=T.opaque,Me=T.transmissive;if(E.setupLights(),O.isArrayCamera){let Le=O.cameras;if(Me.length>0)for(let Ue=0,tt=Le.length;Ue<tt;Ue++){let it=Le[Ue];wd(Ie,Me,A,it)}_e&&Qe.render(A);for(let Ue=0,tt=Le.length;Ue<tt;Ue++){let it=Le[Ue];Td(T,A,it,it.viewport)}}else Me.length>0&&wd(Ie,Me,A,O),_e&&Qe.render(A),Td(T,A,O)}Z!==null&&k===0&&(te.updateMultisampleRenderTarget(Z),te.updateRenderTargetMipmap(Z)),Y&&S.end(w),A.isScene===!0&&A.onAfterRender(w,A,O),Te.resetDefaultState(),V=-1,j=null,m.pop(),m.length>0?(E=m[m.length-1],te.setTextureUnits(E.state.textureUnits),oe===!0&&Ge.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,M.pop(),M.length>0?T=M[M.length-1]:T=null,F!==null&&F.renderEnd()};function ml(A,O,K,Y){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(le)){Y&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);let Ie=re.update(A),Me=A.material;Me.visible&&T.push(A,Ie,Me,K,ce.z,null,O)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(le))){let Ie=re.update(A),Me=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ce.copy(Ie.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(Me)){let Le=Ie.groups;for(let Ue=0,tt=Le.length;Ue<tt;Ue++){let it=Le[Ue],De=Me[it.materialIndex];De&&De.visible&&T.push(A,Ie,De,K,ce.z,it,O)}}else Me.visible&&T.push(A,Ie,Me,K,ce.z,null,O)}}let Ae=A.children;for(let Ie=0,Me=Ae.length;Ie<Me;Ie++)ml(Ae[Ie],O,K,Y)}function Td(A,O,K,Y){let{opaque:$,transmissive:Ae,transparent:Ie}=A;E.setupLightsView(K),oe===!0&&Ge.setGlobalState(w.clippingPlanes,K),Y&&v.viewport(ee.copy(Y)),$.length>0&&Hr($,O,K),Ae.length>0&&Hr(Ae,O,K),Ie.length>0&&Hr(Ie,O,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function wd(A,O,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){let De=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new Qt(1,1,{generateMipmaps:!0,type:De?wn:en,minFilter:Mi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Ae=E.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||ee;Ae.setSize(Ie.z*w.transmissionResolutionScale,Ie.w*w.transmissionResolutionScale);let Me=w.getRenderTarget(),Le=w.getActiveCubeFace(),Ue=w.getActiveMipmapLevel();w.setRenderTarget(Ae),w.getClearColor(Xe),Je=w.getClearAlpha(),Je<1&&w.setClearColor(16777215,.5),w.clear(),_e&&Qe.render(K);let tt=w.toneMapping;w.toneMapping=An;let it=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),oe===!0&&Ge.setGlobalState(w.clippingPlanes,Y),Hr(A,K,Y),te.updateMultisampleRenderTarget(Ae),te.updateRenderTargetMipmap(Ae),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let dt=0,wt=O.length;dt<wt;dt++){let yt=O[dt],{object:mt,geometry:Ot,material:Re,group:Wt}=yt;if(Re.side===Bn&&mt.layers.test(Y.layers)){let ot=Re.side;Re.side=Yt,Re.needsUpdate=!0,Cd(mt,K,Y,Ot,Re,Wt),Re.side=ot,Re.needsUpdate=!0,De=!0}}De===!0&&(te.updateMultisampleRenderTarget(Ae),te.updateRenderTargetMipmap(Ae))}w.setRenderTarget(Me,Le,Ue),w.setClearColor(Xe,Je),it!==void 0&&(Y.viewport=it),w.toneMapping=tt}function Hr(A,O,K){let Y=O.isScene===!0?O.overrideMaterial:null;for(let $=0,Ae=A.length;$<Ae;$++){let Ie=A[$],{object:Me,geometry:Le,group:Ue}=Ie,tt=Ie.material;tt.allowOverride===!0&&Y!==null&&(tt=Y),Me.layers.test(K.layers)&&Cd(Me,O,K,Le,tt,Ue)}}function Cd(A,O,K,Y,$,Ae){F!==null&&$.isNodeMaterial&&F.setObject(A,$),A.onBeforeRender(w,O,K,Y,$,Ae),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(w,O,K,Y,A,Ae),$.transparent===!0&&$.side===Bn&&$.forceSinglePass===!1?($.side=Yt,$.needsUpdate=!0,w.renderBufferDirect(K,O,Y,$,A,Ae),$.side=yi,$.needsUpdate=!0,w.renderBufferDirect(K,O,Y,$,A,Ae),$.side=Bn):w.renderBufferDirect(K,O,Y,$,A,Ae),A.onAfterRender(w,O,K,Y,$,Ae)}function jr(A,O,K){O.isScene!==!0&&(O=he);let Y=J.get(A),$=E.state.lights,Ae=E.state.shadowsArray,Ie=$.state.version,Me=ge.getParameters(A,$.state,Ae,O,K,E.state.lightProbeGridArray),Le=ge.getProgramCacheKey(Me),Ue=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=pe.get(A.envMap||Y.environment,tt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ue===void 0&&(A.addEventListener("dispose",Pn),Ue=new Map,Y.programs=Ue);let it=Ue.get(Le);if(it!==void 0){if(Y.currentProgram===it&&Y.lightsStateVersion===Ie)return Pd(A,Me),it}else Me.uniforms=ge.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,K,Me),A.onBeforeCompile(Me,w),it=ge.acquireProgram(Me,Le),Ue.set(Le,it),Y.uniforms=Me.uniforms;let De=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=Ge.uniform),Pd(A,Me),Y.needsLights=Ip(A),Y.lightsStateVersion=Ie,Y.needsLights&&(De.ambientLightColor.value=$.state.ambient,De.lightProbe.value=$.state.probe,De.sunLights.value=$.state.sun,De.sunLightShadows.value=$.state.sunShadow,De.directionalLights.value=$.state.directional,De.directionalLightShadows.value=$.state.directionalShadow,De.spotLights.value=$.state.spot,De.spotLightShadows.value=$.state.spotShadow,De.rectAreaLights.value=$.state.rectArea,De.ltc_1.value=$.state.rectAreaLTC1,De.ltc_2.value=$.state.rectAreaLTC2,De.pointLights.value=$.state.point,De.pointLightShadows.value=$.state.pointShadow,De.hemisphereLights.value=$.state.hemi,De.sunShadowMatrix.value=$.state.sunShadowMatrix,De.sunShadowCascade.value=$.state.sunShadowCascade,De.directionalShadowMatrix.value=$.state.directionalShadowMatrix,De.spotLightMatrix.value=$.state.spotLightMatrix,De.spotLightMap.value=$.state.spotLightMap,De.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=it,Y.uniformsList=null,it}function Rd(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=Ta.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Pd(A,O){let K=J.get(A);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function Cp(A,O){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(O.matrixWorld);for(let K=0,Y=A.length;K<Y;K++){let $=A[K];if($.texture!==null&&$.boundingBox.containsPoint(b))return $}return null}function Rp(A,O,K,Y,$){O.isScene!==!0&&(O=he),te.resetTextureUnits();let Ae=O.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,Me=Z===null?w.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:rt.workingColorSpace,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ue=pe.get(Y.envMap||Ie,Le),tt=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,it=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,wt=!!K.morphAttributes.color,yt=An;Y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(yt=w.toneMapping);let mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ot=mt!==void 0?mt.length:0,Re=J.get(Y),Wt=E.state.lights;if(oe===!0&&(Oe===!0||A!==j)){let bt=A===j&&Y.id===V;Ge.setState(Y,A,bt)}let ot=!1;Y.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Wt.state.version||Re.outputColorSpace!==Me||$.isBatchedMesh&&Re.batching===!1||!$.isBatchedMesh&&Re.batching===!0||$.isBatchedMesh&&Re.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Re.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Re.instancing===!1||!$.isInstancedMesh&&Re.instancing===!0||$.isSkinnedMesh&&Re.skinning===!1||!$.isSkinnedMesh&&Re.skinning===!0||$.isInstancedMesh&&Re.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Re.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Re.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Re.instancingMorph===!1&&$.morphTexture!==null||Re.envMap!==Ue||Y.fog===!0&&Re.fog!==Ae||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ge.numPlanes||Re.numIntersection!==Ge.numIntersection)||Re.vertexAlphas!==tt||Re.vertexTangents!==it||Re.morphTargets!==De||Re.morphNormals!==dt||Re.morphColors!==wt||Re.toneMapping!==yt||Re.morphTargetsCount!==Ot||!!Re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Re.__version=Y.version);let dn=Re.currentProgram;ot===!0&&(dn=jr(Y,O,$),F&&Y.isNodeMaterial&&F.onUpdateProgram(Y,dn,Re));let In=!1,oi=!1,qi=!1,pt=dn.getUniforms(),Tt=Re.uniforms;if(v.useProgram(dn.program)&&(In=!0,oi=!0,qi=!0),Y.id!==V&&(V=Y.id,oi=!0),Re.needsLights){let bt=Cp(E.state.lightProbeGridArray,$);Re.lightProbeGrid!==bt&&(Re.lightProbeGrid=bt,oi=!0)}if(In||j!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",A.projectionMatrix),pt.setValue(D,"viewMatrix",A.matrixWorldInverse);let ci=pt.map.cameraPosition;ci!==void 0&&ci.setValue(D,je.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,oi=!0,qi=!0)}if(Re.needsLights&&(Wt.state.sunShadowMap.length>0&&pt.setValue(D,"sunShadowMap",Wt.state.sunShadowMap,te),Wt.state.directionalShadowMap.length>0&&pt.setValue(D,"directionalShadowMap",Wt.state.directionalShadowMap,te),Wt.state.spotShadowMap.length>0&&pt.setValue(D,"spotShadowMap",Wt.state.spotShadowMap,te),Wt.state.pointShadowMap.length>0&&pt.setValue(D,"pointShadowMap",Wt.state.pointShadowMap,te)),$.isSkinnedMesh){pt.setOptional(D,$,"bindMatrix"),pt.setOptional(D,$,"bindMatrixInverse");let bt=$.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(D,"boneTexture",bt.boneTexture,te))}$.isBatchedMesh&&(pt.setOptional(D,$,"batchingTexture"),pt.setValue(D,"batchingTexture",$._matricesTexture,te),pt.setOptional(D,$,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",$._indirectTexture,te),pt.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",$._colorsTexture,te));let li=K.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&z.update($,K,dn),(oi||Re.receiveShadow!==$.receiveShadow)&&(Re.receiveShadow=$.receiveShadow,pt.setValue(D,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Tt.envMapIntensity.value=O.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=xv()),oi){if(pt.setValue(D,"toneMappingExposure",w.toneMappingExposure),Re.needsLights&&Pp(Tt,qi),Ae&&Y.fog===!0&&Be.refreshFogUniforms(Tt,Ae),Be.refreshMaterialUniforms(Tt,Y,X,Q,E.state.transmissionRenderTarget[A.id]),Re.needsLights&&Re.lightProbeGrid){let bt=Re.lightProbeGrid;Tt.probesSH.value=bt.texture,Tt.probesMin.value.copy(bt.boundingBox.min),Tt.probesMax.value.copy(bt.boundingBox.max),Tt.probesResolution.value.copy(bt.resolution)}Ta.upload(D,Rd(Re),Tt,te)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ta.upload(D,Rd(Re),Tt,te),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(D,"center",$.center),pt.setValue(D,"modelViewMatrix",$.modelViewMatrix),pt.setValue(D,"normalMatrix",$.normalMatrix),pt.setValue(D,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let bt=Y.uniformsGroups;for(let ci=0,Wi=bt.length;ci<Wi;ci++){let Ld=bt[ci];se.update(Ld,dn),se.bind(Ld,dn)}}return dn}function Pp(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Ip(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,O,K){let Y=J.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),J.get(A.texture).__webglTexture=O,J.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let K=J.get(A);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,K=0){Z=A,U=O,k=K;let Y=null,$=!1,Ae=!1;if(A){let Me=J.get(A);if(Me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,Me.__webglFramebuffer),ee.copy(A.viewport),de.copy(A.scissor),Ee=A.scissorTest,v.viewport(ee),v.scissor(de),v.setScissorTest(Ee),V=-1;return}else if(Me.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(Me.__hasExternalTextures)te.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(Me.__boundDepthTexture!==tt){if(tt!==null&&J.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}let Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ae=!0);let Ue=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?Y=Ue[O][K]:Y=Ue[O],$=!0):A.samples>0&&te.useMultisampledRTT(A)===!1?Y=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?Y=Ue[K]:Y=Ue,ee.copy(A.viewport),de.copy(A.scissor),Ee=A.scissorTest}else ee.copy(q).multiplyScalar(X).floor(),de.copy(ie).multiplyScalar(X).floor(),Ee=we;if(K!==0&&(Y=B),v.bindFramebuffer(D.FRAMEBUFFER,Y)&&v.drawBuffers(A,Y),v.viewport(ee),v.scissor(de),v.setScissorTest(Ee),$){let Me=J.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,K)}else if(Ae){let Me=O;for(let Le=0;Le<A.textures.length;Le++){let Ue=J.get(A.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,K,Me)}}else if(A!==null&&K!==0){let Me=J.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,K)}V=-1};function Id(A){let O=J.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=R.textureFormatReadable(A.format),O.__typeReadable=R.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,K,Y,$,Ae,Ie,Me=0){if(!(A&&A.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){v.bindFramebuffer(D.FRAMEBUFFER,Le);try{let Ue=A.textures[Me],tt=Ue.format,it=Ue.type;A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);let De=Id(Ue);if(De.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Y&&K>=0&&K<=A.height-$&&D.readPixels(O,K,Y,$,be.convert(tt),be.convert(it),Ae)}finally{let Ue=Z!==null?J.get(Z).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,O,K,Y,$,Ae,Ie,Me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(O>=0&&O<=A.width-Y&&K>=0&&K<=A.height-$){v.bindFramebuffer(D.FRAMEBUFFER,Le);let Ue=A.textures[Me],tt=Ue.format,it=Ue.type;A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);let De=Id(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.bufferData(D.PIXEL_PACK_BUFFER,Ae.byteLength,D.STREAM_READ),D.readPixels(O,K,Y,$,be.convert(tt),be.convert(it),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let wt=Z!==null?J.get(Z).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,wt);let yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await qu(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ae),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(dt),D.deleteSync(yt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,K=0){let Y=Math.pow(2,-K),$=Math.floor(A.image.width*Y),Ae=Math.floor(A.image.height*Y),Ie=O!==null?O.x:0,Me=O!==null?O.y:0;te.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Ie,Me,$,Ae),v.unbindTexture()},this.copyTextureToTexture=function(A,O,K=null,Y=null,$=0,Ae=0){let Ie,Me,Le,Ue,tt,it,De,dt,wt,yt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(K!==null)Ie=K.max.x-K.min.x,Me=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,tt=K.min.y,it=K.isBox3?K.min.z:0;else{let Tt=Math.pow(2,-$);Ie=Math.floor(yt.width*Tt),Me=Math.floor(yt.height*Tt),A.isDataArrayTexture?Le=yt.depth:A.isData3DTexture?Le=Math.floor(yt.depth*Tt):Le=1,Ue=0,tt=0,it=0}Y!==null?(De=Y.x,dt=Y.y,wt=Y.z):(De=0,dt=0,wt=0);let mt=be.convert(O.format),Ot=be.convert(O.type),Re;O.isData3DTexture?(te.setTexture3D(O,0),Re=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(te.setTexture2DArray(O,0),Re=D.TEXTURE_2D_ARRAY):(te.setTexture2D(O,0),Re=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let Wt=v.getParameter(D.UNPACK_ROW_LENGTH),ot=v.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=v.getParameter(D.UNPACK_SKIP_PIXELS),In=v.getParameter(D.UNPACK_SKIP_ROWS),oi=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Ue),v.pixelStorei(D.UNPACK_SKIP_ROWS,tt),v.pixelStorei(D.UNPACK_SKIP_IMAGES,it);let qi=A.isDataArrayTexture||A.isData3DTexture,pt=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let Tt=J.get(A),li=J.get(O),bt=J.get(Tt.__renderTarget),ci=J.get(li.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,bt.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Wi=0;Wi<Le;Wi++)qi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,J.get(A).__webglTexture,$,it+Wi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,J.get(O).__webglTexture,Ae,wt+Wi)),D.blitFramebuffer(Ue,tt,Ie,Me,De,dt,Ie,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||J.has(A)){let Tt=J.get(A),li=J.get(O);v.bindFramebuffer(D.READ_FRAMEBUFFER,N),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let bt=0;bt<Le;bt++)qi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,$,it+bt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tt.__webglTexture,$),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,li.__webglTexture,Ae,wt+bt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,li.__webglTexture,Ae),$!==0?D.blitFramebuffer(Ue,tt,Ie,Me,De,dt,Ie,Me,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(Re,Ae,De,dt,wt+bt,Ue,tt,Ie,Me):D.copyTexSubImage2D(Re,Ae,De,dt,Ue,tt,Ie,Me);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Re,Ae,De,dt,wt,Ie,Me,Le,mt,Ot,yt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,Ae,De,dt,wt,Ie,Me,Le,mt,yt.data):D.texSubImage3D(Re,Ae,De,dt,wt,Ie,Me,Le,mt,Ot,yt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ae,De,dt,Ie,Me,mt,Ot,yt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ae,De,dt,yt.width,yt.height,mt,yt.data):D.texSubImage2D(D.TEXTURE_2D,Ae,De,dt,Ie,Me,mt,Ot,yt);v.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),v.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),v.pixelStorei(D.UNPACK_SKIP_ROWS,In),v.pixelStorei(D.UNPACK_SKIP_IMAGES,oi),Ae===0&&O.generateMipmaps&&D.generateMipmap(Re),v.unbindTexture()},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&te.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){U=0,k=0,Z=null,v.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var el=i=>typeof matchMedia=="function"?matchMedia(i):{matches:!1,addEventListener(){}},Ca=el("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&el("(hover: none)").matches,Zy=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ky=el("(display-mode: standalone)").matches||el("(display-mode: fullscreen)").matches||navigator.standalone===!0,Ah=new URLSearchParams(location.search),vv={aces:"aces",agx:"agx",neutral:"neutral"},tl={variante:Ah.get("visual")==="nuevo"?"nuevo":"base",get nuevo(){return this.variante==="nuevo"},tono:vv[Ah.get("tono")]??null};function Th(){let i=window.devicePixelRatio||1,e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??8,n=Ca&&(e<=3||t<=4);return Ca?{movil:!0,bajo:n,pixelRatio:Math.min(i,n?1.15:1.5),minPixelRatio:.8,sombra:n?512:1024,antialias:i<2,lluvia:n?.35:.55,autosPorCarril:n?2:3}:{movil:!1,bajo:!1,pixelRatio:Math.min(i,1.75),minPixelRatio:1,sombra:2048,antialias:!0,lluvia:1,autosPorCarril:4}}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(i,e,t,n,a=0){let r=Math.max(0,Math.min(typeof a=="number"?a:a?.[0]??0,t/2,n/2));return this.moveTo(i+r,e),this.arcTo(i+t,e,i+t,e+n,r),this.arcTo(i+t,e+n,i,e+n,r),this.arcTo(i,e+n,i,e,r),this.arcTo(i,e,i+t,e,r),this.closePath(),this});var st=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Hc={via:"Calle 50 Luisa, Sabana Norte, San Jos\xE9",atribucion:"\xA9 OpenStreetMap contributors (ODbL)",eje:[[12.75,-245.62],[7.04,-157.59],[-1.69,-41.67],[-2.78,6.89],[-3.6,24.31],[-5.75,55.28],[-7.13,78.66],[-8.96,128.18],[-9.45,141.34],[-10.83,178.46],[-12.75,245.62]],largo:492.1,cruces:[{d:88.2,p:[7.04,-157.59],vias:["service:sin nombre"]},{d:204.5,p:[-1.69,-41.67],vias:["residential:sin nombre","service:sin nombre"]},{d:253.1,p:[-2.78,6.89],vias:["service:sin nombre"]},{d:270.6,p:[-3.6,24.31],vias:["service:sin nombre"]},{d:301.6,p:[-5.75,55.28],vias:["residential:Avenida 9"]},{d:325,p:[-7.13,78.66],vias:["service:sin nombre"]},{d:374.6,p:[-8.96,128.18],vias:["service:sin nombre"]},{d:387.8,p:[-9.45,141.34],vias:["service:sin nombre"]},{d:424.9,p:[-10.83,178.46],vias:["service:sin nombre"]},{d:492.1,p:[-12.75,245.62],vias:["residential:Calle 50","secondary:Avenida de Las Am\xE9ricas"]}],postes:[{id:"P01",p:[-3.32,-88.06],lado:"oeste",material:"concreto",herrajes:["cruceta","aisladores","reservas de fibra en aro (3 o m\xE1s)"],d:158.4},{id:"P02",p:[6.04,-76.43],lado:"este",material:"concreto",herrajes:["cruceta","aisladores","luminaria"],d:169.2},{id:"P04",p:[4.93,-61.74],lado:"este",material:"met\xE1lico gris sobre pedestal de concreto",herrajes:["brazo diagonal","retenida con protector amarillo (28 s)"],d:184},{id:"P05",p:[-7.06,-30.25],lado:"oeste",material:"concreto",herrajes:["transformador","reservas de fibra en aro","caja de empalme (47 s)"],d:216},{id:"P06",p:[-8.36,16.97],lado:"oeste",material:"concreto",herrajes:["reservas de fibra en aro (5 o m\xE1s)","marcas de colores de operadores (~2 m)"],d:263.5},{id:"P07",p:[-10.42,48.85],lado:"oeste",material:"concreto",herrajes:["transformador","luminaria"],d:295.5},{id:"P08",p:[-13.03,100.22],lado:"oeste",material:"concreto",herrajes:["haz telecom grande"],d:346.8},{id:"P09",p:[-14.7,145.19],lado:"oeste",material:"concreto",herrajes:["luminaria"],d:391.8},{id:"P12",p:[-6.79,215.69],lado:"este",material:"concreto",herrajes:["luminaria"],d:462},{id:"P11",p:[-7.78,250.32],lado:"este",material:"concreto con franja amarilla y negra",herrajes:["reservas de fibra en aro"],d:496.7}],tendido:[{de:"P01",a:"P05"},{de:"P05",a:"P06"},{de:"P06",a:"P07"},{de:"P07",a:"P08"},{de:"P08",a:"P09"},{de:"P09",a:"P12",nota:"cruza la calle"},{de:"P12",a:"P11"}],arboles:[[-7.17,-25.14],[-7.31,-18.74],[-7.45,-12.33],[-7.59,-5.92],[-7.74,.49],[-7.88,6.75],[-8.19,13.14],[-8.48,19.52],[-8.82,25.8],[-9.26,32.2],[-9.71,38.6],[-10.15,45.01],[-10.6,51.41],[-11.01,57.87],[-11.39,64.27],[-11.77,70.68],[-12.14,77.08],[-12.41,83.3],[-12.63,89.34],[-12.86,95.38],[-13.08,101.42],[-13.31,107.46],[-13.53,113.5],[-13.74,119.54],[-13.97,125.57],[-14.22,132.29],[-14.48,139.46],[-14.74,146.63],[-15.02,153.83],[-15.28,161.01],[-15.55,168.2],[-15.82,175.39],[-16.05,182.45],[-16.24,189.34],[-16.44,196.24],[-16.64,203.14],[-16.84,210.04],[-17.03,216.93]],otros:[{que:"retenida (viento) con protector amarillo",p:[4.64,-57.9],lado:"este",d:187.8},{que:"gabinete verde con r\xF3tulos de peligro y bolardo amarillo",p:[3.49,-42.57],lado:"este",d:203.2},{que:"caja de empalme en el tendido P01-P05",p:[-6.97,-34.1],lado:"oeste",d:212.2},{que:"se\xF1al de zona escolar",p:[-7.77,1.76],lado:"oeste",d:248.1},{que:"parqu\xEDmetro solar",p:[-8.31,15.7],lado:"oeste",d:262.2},{que:"espacios de estacionamiento 5019 \u2192 5001, 5,7 m cada uno",p:[-8.6,22.07],lado:"oeste",d:268.6},{que:"se\xF1al de estacionamiento E",p:[-9.88,41.17],lado:"oeste",d:287.8},{que:"se\xF1al 25 KPH velocidad m\xE1xima",p:[-11.39,64.27],lado:"oeste",d:310.9},{que:"se\xF1al de zona escolar",p:[-12.68,90.55],lado:"oeste",d:337.1},{que:"se\xF1al de estacionamiento E",p:[-13.21,105.05],lado:"oeste",d:351.6},{que:"se\xF1al de ALTO en la esquina",p:[-17.58,236.24],lado:"oeste",d:482.9},{que:"verja gris sobre muro bajo, al fondo de la acera",p:[-7.17,-25.14],lado:"oeste",d:221.2},{que:"verja y portones azules, al fondo de la acera",p:[-8.67,23.35],lado:"oeste",d:269.9}],lugares:[{nombre:"MEP - Edificio Bloque A",d:0,a:24,lado:"este"},{nombre:"Avenida 17",d:0,a:60,lado:"este"},{nombre:"MEP - Parqueo Este",d:88.2,a:37,lado:"este"},{nombre:"Museo Hist\xF3rico y Tecnol\xF3gico Grupo ICE",d:88.2,a:42,lado:"oeste"},{nombre:"Suites Cristina",d:88.2,a:38,lado:"este"},{nombre:"MEP - Edificio Bloque B",d:88.2,a:52,lado:"este"},{nombre:"Palma Real Hotel y Casino",d:204.5,a:42,lado:"este"},{nombre:"Parque Palma Real",d:204.5,a:21,lado:"este"},{nombre:"Cond. Corobic\xED del Oeste",d:253.1,a:32,lado:"este"},{nombre:"MTA",d:253.1,a:32,lado:"este"},{nombre:"Cond. Menorca",d:270.6,a:26,lado:"este"},{nombre:"Consensus Abogados",d:325,a:20,lado:"este"},{nombre:"Restaurant Flor de Loto",d:325,a:29,lado:"este"},{nombre:"Aptos. Balot de Escaz\xFA",d:325,a:20,lado:"este"},{nombre:"Oficentro Las Torres",d:374.6,a:19,lado:"este"},{nombre:"Soka Gakkai Internacional de Costa Rica",d:424.9,a:18,lado:"este"},{nombre:"Soda Alberto",d:424.9,a:29,lado:"este"},{nombre:"Subway",d:492.1,a:26,lado:"este"},{nombre:"Agencia ICE",d:492.1,a:36,lado:"este"},{nombre:"ICE",d:492.1,a:21,lado:"oeste"},{nombre:"ICE Sabana",d:492.1,a:20,lado:"oeste"},{nombre:"Uno Sports",d:492.1,a:34,lado:"este"},{nombre:"KFC",d:492.1,a:41,lado:"este"},{nombre:"Avenida de Las Am\xE9ricas",d:492.1,a:13,lado:"oeste"}]};function wh(i){let e=[],t=0;for(let s=0;s<i.length-1;s++){let[o,l]=i[s],[c,d]=i[s+1],p=Math.hypot(c-o,d-l);e.push({x0:o,z0:l,tx:(c-o)/p,tz:(d-l)/p,l:p,d0:t}),t+=p}let n=s=>{let o=e[0];for(let l of e)if(l.d0<=s)o=l;else break;return o};function a(s,o=0,l={}){let c=n(s),d=s-c.d0;return l.x=c.x0+c.tx*d+c.tz*o,l.z=c.z0+c.tz*d-c.tx*o,l.tx=c.tx,l.tz=c.tz,l}function r(s,o,l={}){let c=1/0;for(let d=0;d<e.length;d++){let p=e[d],u=s-p.x0,f=o-p.z0,x=u*p.tx+f*p.tz;d>0&&(x=Math.max(0,x)),d<e.length-1&&(x=Math.min(p.l,x));let _=u-p.tx*x,g=f-p.tz*x,h=_*_+g*g;h<c&&(c=h,l.d=p.d0+x,l.a=_*p.tz-g*p.tx)}return l}return{largo:t,en:a,aVia:r}}function Ch(i,e,t,n){let a={},r={};return function(o,l){for(let u of t){let f=o.x-u.x,x=o.z-u.z,_=u.r+l,g=f*f+x*x;if(g<_*_&&g>1e-9){let h=_/Math.sqrt(g);o.x=u.x+f*h,o.z=u.z+x*h}}i.aVia(o.x,o.z,a);let c=Math.max(n.d0,Math.min(n.d1,a.d)),d=Math.max(-n.a,Math.min(n.a,a.a)),p=c!==a.d||d!==a.a;a.d=c,a.a=d;for(let u of e){if(a.d<=u.d0-l||a.d>=u.d1+l||a.a<=u.a0-l||a.a>=u.a1+l)continue;let f=a.d-(u.d0-l),x=u.d1+l-a.d,_=a.a-(u.a0-l),g=u.a1+l-a.a,h=Math.min(f,x,_,g);h===f?a.d=u.d0-l:h===x?a.d=u.d1+l:h===_?a.a=u.a0-l:a.a=u.a1+l,p=!0}return p&&(i.en(a.d,a.a,r),o.x=r.x,o.z=r.z),o}}var nl=new qe;function Gi(){let i=[],e=[],t=[],n=[];function a(l,c,d,p,u,f){let x=i.length/3;nl.set(u);for(let _ of[l,c,d,p])i.push(_[0],_[1],_[2]),e.push(nl.r,nl.g,nl.b);f?t.push(...f):t.push(0,0,0,0,0,0,0,0),n.push(x,x+1,x+2,x,x+2,x+3)}function r(l,c,d,p,{techo:u=p,bahia:f=0,piso:x=3.2}={}){for(let _=0;_<4;_++){let g=l[_],h=l[(_+1)%4],y=f?Math.max(1,Math.round(Math.hypot(h[0]-g[0],h[1]-g[1])/f)):0,C=f?Math.max(1,Math.round((d-c)/x)):0;a([g[0],c,g[1]],[h[0],c,h[1]],[h[0],d,h[1]],[g[0],d,g[1]],p,[0,0,y,0,y,C,0,C])}a([l[0][0],d,l[0][1]],[l[1][0],d,l[1][1]],[l[2][0],d,l[2][1]],[l[3][0],d,l[3][1]],u)}function s(l,c,d,p,u,f,x,_=0,g){let h=Math.cos(_),y=Math.sin(_),C=p/2,b=f/2;r([[-C,-b],[-C,b],[C,b],[C,-b]].map(([T,E])=>[l+T*h+E*y,d-T*y+E*h]),c,c+u,x,g)}function o(){let l=new xt;return l.setAttribute("position",new Ye(i,3)),l.setAttribute("color",new Ye(e,3)),l.setAttribute("uv",new Ye(t,2)),l.setIndex(n),l.computeVertexNormals(),l}return{quad:a,prisma:r,caja:s,geometria:o}}var il=i=>()=>{i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};var _t={asfalto:3882564,pintura:15329244,amarillo:14924079,acera:12433838,cordon:9736330,lote:7314520,pasto:6064713,concreto:11117980,madera:7035723,metal:9212569,losa:7630955,zinc:9325370},Rh=[14273972,13219740,14934230,12109004,14203296,13620930,14731686,11122630],$t=3.65,al=6,Cn=64,rl=3.25,Ft=.15,sl=.9,ki=-2.45,_v=[[/ICE Sabana/,{pisos:13,color:3108789,fondo:739983}],[/ICE|Museo/,{pisos:4,color:3834564,fondo:739983}],[/Hotel|Casino/,{pisos:9,color:15129016,fondo:8007214}],[/Cond|Aptos|Suites|Torres|MEP|Abogados|Soka/,{pisos:6,fondo:4082262}],[/Soda|Subway|KFC|Restaurant|Sports|MTA/,{pisos:1,fondo:10107678}]];function yv(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,64),e.fillStyle="#e4e4e0",e.fillRect(0,58,64,6),e.fillStyle="#d2d2cc",e.fillRect(16,14,32,32);let t=e.createLinearGradient(0,16,0,44);t.addColorStop(0,"#7f9db5"),t.addColorStop(1,"#3d5468"),e.fillStyle=t,e.fillRect(18,16,28,28),e.fillStyle="#d2d2cc",e.fillRect(31,16,2,28);let n=new ga(i);return n.wrapS=n.wrapT=ca,n.colorSpace=Gt,n.anisotropy=4,n}function Ph(i,e){let t=il(50),n={},a=Gi(),r=Gi(),s=Gi(),o=Gi(),l=(I,q,ie=0)=>(e.en(I,q,n),[n.x,ie,n.z]),c=I=>(e.en(I,0,n),Math.atan2(n.tx,n.tz));function d(I,q,ie,we,le,oe,Oe,Ce=8){let je=Math.max(1,Math.ceil((ie-q)/Ce));for(let ce=0;ce<je;ce++){let he=q+(ie-q)*ce/je,_e=q+(ie-q)*(ce+1)/je;I.quad(l(he,we,oe),l(_e,we,oe),l(_e,le,oe),l(he,le,oe),Oe)}}let p=(I,q,ie,we,le,oe,Oe)=>{let Ce=l(I,q),je=l(ie,we);a.quad([Ce[0],le,Ce[2]],[je[0],le,je[2]],[je[0],oe,je[2]],[Ce[0],oe,Ce[2]],Oe)},u=[0,...i.cruces.filter(I=>I.vias.some(q=>/^(residential|secondary)/.test(q))).map(I=>I.d)],f=-14,x=e.largo+14;d(a,f-60,x+60,-Cn-40,Cn+40,-.03,_t.pasto,40),d(a,f,x,-$t,$t,0,_t.asfalto);for(let I of u)for(let q of[-1,1])d(a,I-rl,I+rl,q>0?$t:-Cn,q>0?Cn:-$t,0,_t.asfalto,8);let _=[];for(let I=0;I<u.length-1;I++)_.push([u[I]+rl,u[I+1]-rl]);for(let[I,q]of _)for(let ie of[-1,1]){let we=ie>0?$t:-al,le=ie>0?al:-$t,oe=ie>0?al:-Cn,Oe=ie>0?Cn:-al;d(a,I,q,we,le,Ft,_t.acera),d(a,I,q,oe,Oe,Ft,_t.lote,16);let Ce=Math.ceil((q-I)/8);for(let je=0;je<Ce;je++){let ce=I+(q-I)*je/Ce,he=I+(q-I)*(je+1)/Ce;ie>0?p(ce,$t,he,$t,0,Ft,_t.cordon):p(he,-$t,ce,-$t,0,Ft,_t.cordon)}ie>0?(p(I,Cn,I,$t,0,Ft,_t.cordon),p(q,$t,q,Cn,0,Ft,_t.cordon)):(p(I,-$t,I,-Cn,0,Ft,_t.cordon),p(q,-Cn,q,-$t,0,Ft,_t.cordon))}for(let I of[-1,1])d(a,f,x,I*3.42-.05,I*3.42+.05,.012,_t.amarillo);let g=i.otros.find(I=>/espacios de estacionamiento/.test(I.que)),h={d0:g.d,n:19,paso:5.7,a:ki};d(a,g.d-1,g.d+h.n*h.paso,-1.36,-1.26,.012,_t.pintura);for(let I=0;I<=h.n;I++)d(a,g.d+I*5.7-.05,g.d+I*5.7+.05,-3.4,-1.3,.012,_t.pintura);d(a,e.largo-6.4,e.largo-6,-1.3,3.4,.012,_t.pintura);let y=[],C=[],b=[];for(let[I,q]of _)for(let ie of["este","oeste"])for(let we=I+4;we<q-12;){let le=Math.min(14+t()*16,q-4-we),oe=7.4+t()*3,Oe=12+t()*10;y.push({lado:ie,d0:we,d1:we+le,frente:oe,fondo:Oe,pisos:1+Math.floor(t()*t()*5),color:Rh[Math.floor(t()*Rh.length)]}),we+=le+1.5+t()*3}let T=[];for(let I of i.lugares){let q=y.filter(le=>le.lado===I.lado&&!le.nombre);if(!q.length)continue;let ie=q.reduce((le,oe)=>Math.abs((oe.d0+oe.d1)/2-I.d)<Math.abs((le.d0+le.d1)/2-I.d)?oe:le);if(ie.nombre=I.nombre,/Parque|Parqueo/.test(I.nombre)){ie.vacio=!0;continue}let we=_v.find(([le])=>le.test(I.nombre))?.[1]??{};Object.assign(ie,we),T.push(ie)}for(let I of y){if(I.vacio)continue;let q=I.lado==="este"?1:-1,ie=q>0?I.frente:-(I.frente+I.fondo),we=q>0?I.frente+I.fondo:-I.frente,le=I.pisos*3.2+.6,oe=[l(I.d0,ie),l(I.d1,ie),l(I.d1,we),l(I.d0,we)].map(Oe=>[Oe[0],Oe[2]]);s.prisma(oe,Ft,le,I.color,{techo:I.pisos<=2?_t.zinc:_t.losa,bahia:3}),C.push({d0:I.d0,d1:I.d1,a0:ie,a1:we}),Object.assign(I,{a0:ie,a1:we,h:le})}let E=document.createElement("canvas");E.width=E.height=1024;let M=E.getContext("2d");M.textAlign="center",M.textBaseline="middle",T.slice(0,32).forEach((I,q)=>{let ie=q%2,we=q>>1,le=ie*512,oe=we*64;M.fillStyle="#"+(I.fondo??2832970).toString(16).padStart(6,"0"),M.fillRect(le,oe,512,64),M.fillStyle="#fff",M.font="bold 34px system-ui, Arial, sans-serif";let Oe=M.measureText(I.nombre).width;Oe>480&&(M.font=`bold ${Math.floor(34*480/Oe)}px system-ui, Arial, sans-serif`),M.fillText(I.nombre,le+256,oe+34);let Ce=I.lado==="este"?1:-1,je=Ce>0?I.a0-.06:I.a1+.06,ce=(I.d0+I.d1)/2,he=Math.min(I.d1-I.d0-2,9)/2,_e=Math.min(I.h-.9,3.7),ze=l(ce-Ce*he,je),D=l(ce+Ce*he,je),lt=ie/2,Pe=lt+.5,R=1-we/16,v=R-1/16;o.quad([ze[0],_e-.55,ze[2]],[D[0],_e-.55,D[2]],[D[0],_e+.55,D[2]],[ze[0],_e+.55,ze[2]],16777215,[lt,v,Pe,v,Pe,R,lt,R])});let m=i.postes.map(I=>(e.aVia(I.p[0],I.p[1],n),{...I,x:I.p[0],z:I.p[1],d:n.d,a:n.a,rumbo:c(n.d)})),S=Object.fromEntries(m.map(I=>[I.id,I])),w=new Vt(new hn(.13,.18,9.6,10).translate(0,4.8,0),new Rt({color:_t.concreto,roughness:.9}),m.length),P=m.filter(I=>I.herrajes.some(q=>/reserva/.test(q))),F=new Vt(new fn(.36,.035,6,18),new Rt({color:1382170,roughness:.6}),P.length*2),B=new gt;m.forEach((I,q)=>{B.position.set(I.x,Ft,I.z),B.rotation.set(0,0,0),B.updateMatrix(),w.setMatrixAt(q,B.matrix),I.herrajes.includes("cruceta")&&r.caja(I.x,9,I.z,2.2,.1,.12,_t.madera,I.rumbo),b.push({x:I.x,z:I.z,r:.2})}),P.forEach((I,q)=>[-1,1].forEach((ie,we)=>{let le=l(I.d+ie*.9,I.a,6.25);B.position.set(le[0],le[1],le[2]),B.rotation.set(0,I.rumbo+Math.PI/2,0),B.updateMatrix(),F.setMatrixAt(q*2+we,B.matrix)}));let N=[],H=[],U=new qe;function k(I,q,ie,we){U.set(we);for(let le=0;le<12;le++)for(let oe of[le/12,(le+1)/12])N.push(I[0]+(q[0]-I[0])*oe,I[1]+(q[1]-I[1])*oe-ie*4*oe*(1-oe),I[2]+(q[2]-I[2])*oe),H.push(U.r,U.g,U.b)}for(let I of i.tendido){let q=S[I.de],ie=S[I.a];for(let we=0;we<3;we++)k([q.x,6.3+we*.18,q.z],[ie.x,6.3+we*.18,ie.z],.55,921361);for(let we of[-.95,0,.95])k(l(q.d,q.a+we,9.15),l(ie.d,ie.a+we,9.15),.8,3356218)}let Z=new xt;Z.setAttribute("position",new Ye(N,3)),Z.setAttribute("color",new Ye(H,3));let V=i.arboles.map(I=>({x:I[0],z:I[1],k:.8+t()*.5}));for(let I of y)if(I.vacio)for(let q=0;q<6;q++){let ie=l(I.d0+t()*(I.d1-I.d0),(I.lado==="este"?1:-1)*(I.frente+2+t()*I.fondo));V.push({x:ie[0],z:ie[2],k:1+t()*.6})}for(let I=0;I<26;I++){let q=l(t()*e.largo,(t()<.5?-1:1)*(38+t()*24));V.push({x:q[0],z:q[2],k:1+t()*.8})}let j=new Vt(new hn(.13,.2,3,6).translate(0,1.5,0),new Rt({color:5916210,roughness:1}),V.length),ee=new Vt(new dr(1.7,1).translate(0,4.1,0),new Rt({roughness:1,flatShading:!0}),V.length);V.forEach((I,q)=>{B.position.set(I.x,Ft,I.z),B.rotation.set(0,t()*6,0),B.scale.setScalar(I.k),B.updateMatrix(),j.setMatrixAt(q,B.matrix),ee.setMatrixAt(q,B.matrix),ee.setColorAt(q,U.setHSL(.27+t()*.08,.45+t()*.15,.26+t()*.1)),b.push({x:I.x,z:I.z,r:.25})}),B.scale.setScalar(1);let de=(I,q,ie)=>{r.caja(I.p[0],Ft,I.p[1],.06,2.3,.06,_t.metal),r.caja(I.p[0],1.9,I.p[1],.56,.56,.04,q,ie)};for(let I of i.otros){e.aVia(I.p[0],I.p[1],n);let q=c(n.d);if(/ALTO/.test(I.que))de(I,12593182,q);else if(/25 KPH/.test(I.que))de(I,15856108,q);else if(/zona escolar/.test(I.que))de(I,15320363,q);else if(/estacionamiento E/.test(I.que))de(I,2056112,q);else if(/parquímetro/.test(I.que))r.caja(I.p[0],Ft,I.p[1],.08,1.2,.08,_t.metal),r.caja(I.p[0],1.3,I.p[1],.3,.45,.2,2903667,q);else if(/gabinete/.test(I.que)){r.caja(I.p[0],Ft,I.p[1],.5,1.35,.95,3046735,q);let ie=l(n.d+.9,n.a-.5);r.caja(ie[0],Ft,ie[2],.14,.9,.14,_t.amarillo),C.push({d0:n.d-.5,d1:n.d+.5,a0:n.a-.3,a1:n.a+.3})}else/retenida/.test(I.que)?r.caja(I.p[0],Ft,I.p[1],.12,2.2,.12,_t.amarillo,q):/caja de empalme/.test(I.que)&&r.caja(I.p[0],6.05,I.p[1],.24,.24,.6,1184790,q)}let Ee=S.P05,Xe=Ee.d+15;{let I=l(Xe,ki),q=c(Xe),ie=Math.cos(q),we=Math.sin(q),le=(oe,Oe,Ce,je,ce,he,_e)=>r.caja(I[0]+oe*ie+Ce*we,Oe,I[2]-oe*we+Ce*ie,je,ce,he,_e,q);le(0,.42,0,1.86,.5,5.2,15921902),le(0,.92,.75,1.78,.78,1.9,15921902),le(0,1.2,.75,1.82,.42,1.6,1976886),le(0,.92,2.15,1.7,.3,1,15921902);for(let oe of[-.9,.9])le(oe,.92,-1.45,.08,.42,2.3,15921902),le(oe*1.035,.62,0,.03,.14,5,739983),le(oe*1.035,.5,0,.03,.1,5,_t.amarillo);le(0,.92,-2.56,1.86,.42,.08,15921902);for(let oe of[-.86,.86])for(let Oe of[1.6,-1.6])le(oe,0,Oe,.26,.74,.74,1447963);for(let oe of[1.4,-2.3]){for(let Oe of[-.85,.85])le(Oe,1.34,oe,.06,.75,.06,_t.metal);le(0,2.06,oe,1.8,.06,.06,_t.metal)}C.push({d0:Xe-2.7,d1:Xe+2.7,a0:ki-1,a1:ki+1})}let Je=new Mt,Ke=new Rt({vertexColors:!0,roughness:.92}),Q=(I,q,{sombra:ie=!0,recibe:we=!0}={})=>{let le=new Ze(I.geometria(),q);return le.castShadow=ie,le.receiveShadow=we,le};Je.add(Q(a,Ke,{sombra:!1}),Q(r,Ke),Q(s,new Rt({map:yv(),vertexColors:!0,roughness:.85})),Q(o,new En({map:Object.assign(new ga(E),{colorSpace:Gt,anisotropy:4})}),{sombra:!1,recibe:!1}),new Ni(Z,new gi({vertexColors:!0})),w,F,j,ee);for(let I of[w,j,ee])I.castShadow=!0;Je.traverse(I=>{I.matrixAutoUpdate=!1,I.updateMatrix()});let X={};function ue(I,q){if(e.aVia(I,q,X),Math.abs(X.a)<=$t)return 0;for(let[ie,we]of _)if(X.d>=ie&&X.d<=we)return Ft;return 0}return{grupo:Je,cajas:C,circulos:b,altura:ue,postes:m,estacionamiento:h,limites:{d0:f+2,d1:x-2,a:Cn-2},inicio:{d:Xe-1,a:-4.5},dPick:Xe,trabajo:Ee}}function Ih(i,e,t,n,{a=1.8,b:r=3.2,s0:s=2.2,T:o=1.3}={}){let l=1-Math.pow(Math.max(0,i)/Math.max(.1,e),4);if(!isFinite(t))return a*l;let c=s+Math.max(0,i*o+i*n/(2*Math.sqrt(a*r)));return a*(l-Math.pow(c/Math.max(.1,t),2))}var Lh=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534],Nr=4.2;function Dh(i,e,t){let n=il(7),a=-40,r=i.largo+80,s=[];for(let E=0;E<t;E++)s.push({d:a+r*E/t+n()*4,a:sl,v:5,v0:5.5+n()*2.5,x:0,z:0,rumbo:0});let o=e.estacionamiento,l=[];for(let E=0;E<o.n;E++)n()<.55&&l.push({d:o.d0+(E+.5)*o.paso,a:o.a,v:0,x:0,z:0,rumbo:0});for(let E of l)e.cajas.push({d0:E.d-Nr/2,d1:E.d+Nr/2,a0:E.a-.9,a1:E.a+.9});let c=[...s,...l],d=c.length,p=new Rt({roughness:.45,metalness:.3}),u=new Vt(new Ht(1.75,.62,Nr).translate(0,.62,0),p,d),f=new Vt(new Ht(1.6,.52,2.1).translate(0,1.18,-.25),new Rt({color:1778992,roughness:.2,metalness:.5}),d),x=new hn(.33,.33,.24,10).rotateZ(Math.PI/2),_=new Vt(x,new Rt({color:1316119,roughness:.9}),d*4),g=new qe;c.forEach((E,M)=>u.setColorAt(M,g.set(Lh[Math.floor(n()*Lh.length)])));let h=new Mt;h.add(u,f,_);for(let E of[u,f,_])E.frustumCulled=!1;let y=new gt,C={};function b(E){let M=c[E];i.en(M.d,M.a,C),M.x=C.x,M.z=C.z,M.rumbo=Math.atan2(C.tx,C.tz),y.position.set(C.x,0,C.z),y.rotation.set(0,M.rumbo,0),y.updateMatrix(),u.setMatrixAt(E,y.matrix),f.setMatrixAt(E,y.matrix);let m=Math.cos(M.rumbo),S=Math.sin(M.rumbo);[[-.82,1.35],[.82,1.35],[-.82,-1.35],[.82,-1.35]].forEach(([w,P],F)=>{y.position.set(C.x+w*m+P*S,.33,C.z-w*S+P*m),y.updateMatrix(),_.setMatrixAt(E*4+F,y.matrix)})}for(let E=0;E<d;E++)b(E);function T(E,M){let m=s.length;for(let S=0;S<m;S++){let w=s[S],P=s[(S+1)%m],F=m>1?(P.d-w.d+r)%r-Nr-.4:1/0,B=m>1?w.v-P.v:0;for(let N of M){if(Math.abs(N.a-w.a)>1.9)continue;let H=(N.d-w.d+r)%r-Nr/2-1.2;H<F&&H<40&&(F=H,B=w.v)}w.v=Math.max(0,w.v+Ih(w.v,w.v0,Math.max(.1,F),B)*E),w.d+=w.v*E,w.d>a+r&&(w.d-=r),b(S)}u.instanceMatrix.needsUpdate=f.instanceMatrix.needsUpdate=_.instanceMatrix.needsUpdate=!0}return{grupo:h,todos:c,cada:T}}function Uh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),a=new Set(Object.keys(i[0].morphAttributes)),r={},s={},o=i[0].morphTargetsRelative,l=new xt,c=0;for(let d=0;d<i.length;++d){let p=i[d],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!a.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,p=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let x=0;x<f.count;++x)p.push(f.getX(x)+d);d+=i[u].attributes.position.count}l.setIndex(p)}for(let d in r){let p=Nh(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(let d in s){let p=s[d][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let u=0;u<p;++u){let f=[];for(let _=0;_<s[d].length;++_)f.push(s[d][_][u]);let x=Nh(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(x)}}}return l}function Nh(i){let e,t,n,a=-1,r=0;for(let c=0;c<i.length;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=d.gpuType),a!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let s=new e(r),o=new Dt(s,t,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let p=l/t;for(let u=0,f=d.count;u<f;u++)for(let x=0;x<t;x++){let _=d.getComponent(u,x);o.setComponent(u+p,x,_)}}else s.set(d.array,l);l+=d.count*t}return a!==void 0&&(o.gpuType=a),o}var jc=new Map,tn=(i,e={})=>{let t=i+JSON.stringify(e);return jc.has(t)||jc.set(t,new Rt({color:i,roughness:.7,...e})),jc.get(t)};function ol(i,e,t){let n=new xa(e,Math.max(.001,i-2*e),4,10);n.translate(0,-i/2,0);let a=new Ze(n,t);return a.castShadow=!0,a}var Ra=.3,ll=.29,Fh=new L(0,-1,-.4).normalize(),qc=new L,Wc=new L,Vi=new L,Oh=new L,zh=new L,Xc=new L,Hi=new L,Bh=new L,Ur=new L,Sv=new ht,Yc={x:0,z:0};function Gh(i){let e=Math.asin(Math.max(-1,Math.min(1,i.x))),t=Math.cos(e);return Yc.z=e,Yc.x=t>1e-4?Math.atan2(-i.z/t,-i.y/t):0,Yc}var Mv=.12;function kh({camisa:i=16040475,pantalon:e=2046819,piel:t=13148794,pelo:n=2825492,uniforme:a=!0}={}){let r={camisa:tn(i),pantalon:tn(e),piel:tn(t,{roughness:.6}),pelo:tn(n,{roughness:.9}),casco:tn(16766503,{roughness:.35}),arnes:tn(10211642,{roughness:.6}),metal:tn(12896978,{roughness:.25,metalness:.8}),plastico:tn(2830134,{roughness:.5}),bota:tn(3877408),lentes:tn(1844272,{roughness:.1,metalness:.4}),guante:tn(13214042,{roughness:.8}),reflectivo:tn(14221135,{roughness:.4,emissive:3359744})},s=new Mt,o=new Mt;o.position.y=.92,s.add(o);let l=new Ze(new zn(.15,14,10),r.pantalon);l.scale.set(1.15,.8,.9),l.castShadow=!0,o.add(l);let c=ce=>{let he=new Mt;he.position.set(ce*.095,-.04,0),o.add(he),he.add(ol(.45,.072,r.pantalon));let _e=new Mt;_e.position.y=-.45,he.add(_e),_e.add(ol(.43,.058,r.pantalon));let ze=new Mt;ze.position.y=-.43,_e.add(ze);let D=new Ze(new Ht(.11,.085,.27),r.bota);return D.position.set(0,-.03,.06),D.castShadow=!0,ze.add(D),{h:he,rod:_e,tob:ze}},d=c(1),p=c(-1),u=new Mt;u.position.y=.05,o.add(u);let f=new Ze(new xa(.155,.34,6,14),r.camisa);if(f.position.y=.3,f.scale.set(1.12,1,.78),f.castShadow=!0,u.add(f),a)for(let ce of[.2,.38]){let he=new Ze(new hn(.176,.176,.035,20,1,!0),r.reflectivo);he.position.y=ce,he.scale.set(1.12,1,.8),u.add(he)}let x=new Mt;x.position.y=.58,u.add(x);let _=new Ze(new zn(.105,18,14),r.piel);_.position.y=.13,_.scale.set(.92,1.05,1),_.castShadow=!0,x.add(_);let g=new Ze(new zn(.11,16,10,0,Math.PI*2,0,Math.PI*.55),r.pelo);g.position.y=.145,g.rotation.x=-.25,x.add(g);for(let ce of[-1,1]){let he=new Ze(new zn(.013,8,6),tn(1118481));he.position.set(ce*.036,.15,.092),x.add(he)}let h=new Ze(new Ht(.13,.035,.02),r.lentes);h.position.set(0,.15,.1),h.visible=!1,x.add(h);let y=new Mt;y.position.y=.19,y.visible=!1,x.add(y);let C=new Ze(new zn(.123,22,12,0,Math.PI*2,0,Math.PI/2),r.casco);C.castShadow=!0;let b=new Ze(new hn(.18,.18,.014,30),r.casco);b.position.y=.004,b.castShadow=!0;let T=new Ze(new fn(.105,.006,6,22,Math.PI),r.plastico);T.rotation.set(0,Math.PI/2,Math.PI),T.position.y=-.03,y.add(C,b,T);let E=ce=>{let he=new Mt;he.position.set(ce*.2,.5,0),u.add(he),he.add(ol(.3,.052,r.camisa));let _e=new Mt;_e.position.y=-.3,he.add(_e),_e.add(ol(.27,.045,r.camisa));let ze=new Ze(new zn(.05,10,8),r.piel);return ze.position.y=-.29,_e.add(ze),{h:he,codo:_e,mano:ze}},M=E(1),m=E(-1),S=new Ze(new fn(.05,.014,6,14),tn(13938487,{metalness:.9,roughness:.2}));S.rotation.x=Math.PI/2,S.position.y=-.24,S.visible=!1,M.codo.add(S);let w=new Mt;w.visible=!1;let P=[];for(let ce of[-1,1]){let he=[[.07,.02,.135],[.085,.3,.14],[.1,.5,.1],[.11,.6,0],[.1,.5,-.1],[.085,.3,-.14],[.07,.02,-.135]].map(([ze,D,lt])=>new L(ce*ze,D,lt)),_e=new Ze(new pr(new va(he),30,.016,6),r.arnes);u.add(_e),P.push(_e)}let F=new Ze(new Ht(.2,.03,.012),r.arnes);F.position.set(0,.36,.142),u.add(F),P.push(F);let B=new Ze(new fn(.172,.017,8,36),r.arnes);B.rotation.x=Math.PI/2,B.scale.set(1.08,.82,1),B.position.y=.02,o.add(B),P.push(B);for(let ce of[d,p]){let he=new Ze(new fn(.08,.013,8,24),r.arnes);he.rotation.x=Math.PI/2,he.position.y=-.12,ce.h.add(he),P.push(he)}let N=()=>new Ze(new fn(.03,.008,8,18),r.metal),H=N();H.position.set(.19,.02,0),H.rotation.y=Math.PI/2,o.add(H);let U=N();U.position.set(-.19,.02,0),U.rotation.y=Math.PI/2,o.add(U);let k=N();k.position.set(0,.48,-.14),u.add(k);let Z=N();Z.position.set(0,.2,.158),Z.scale.setScalar(1.15),u.add(Z);let V=new Ze(new Ht(.034,.17,.012),r.arnes);V.position.set(0,.285,.15),u.add(V);let j=new Ze(new fn(.024,.009,8,14,Math.PI*1.3),r.plastico);j.position.set(-.12,-.01,.13),j.rotation.z=Math.PI*.85,o.add(j),P.push(H,U,k,Z,V,j);let ee=ce=>P.forEach(he=>{he.visible=ce});ee(!1);let de=(ce,he,_e,ze)=>{let D=new gt;return D.position.set(he,_e,ze),ce.add(D),D},Ee={dIzq:de(H,0,0,0),dDer:de(U,0,0,0),porta:de(j,0,0,0),dorsal:de(k,0,0,0),frontal:de(Z,0,-.02,0),pecho:de(u,0,.38,.2),cabeza:de(x,0,.32,0),manoI:de(M.mano,0,0,0),manoD:de(m.mano,0,0,0)};{let ce=new Set([h,S,...P,M.mano,m.mano]);y.traverse(he=>ce.add(he)),s.updateMatrixWorld(!0),s.traverse(he=>{if(!he.isGroup)return;let _e=new Map;for(let ze of he.children)ze.isMesh&&!ce.has(ze)&&ze.visible&&!ze.children.length&&(_e.has(ze.material)||_e.set(ze.material,[]),_e.get(ze.material).push(ze));for(let[ze,D]of _e){if(D.length<2)continue;let lt=D.map(R=>{R.updateMatrix();let v=(R.geometry.index?R.geometry.toNonIndexed():R.geometry.clone()).applyMatrix4(R.matrix);for(let G of Object.keys(v.attributes))["position","normal","uv"].includes(G)||v.deleteAttribute(G);return v}),Pe=new Ze(Uh(lt,!1),ze);Pe.castShadow=D.some(R=>R.castShadow),D.forEach(R=>he.remove(R)),he.add(Pe)}})}let Xe=new Set;function Je(ce,he=!0){he?Xe.add(ce):Xe.delete(ce),ce==="casco"&&(y.visible=he),ce==="lentes"&&(h.visible=he),ce==="guantes"&&(M.mano.material=m.mano.material=he?r.guante:r.piel),ce==="arnes"&&ee(he),ce==="reloj"&&(S.visible=he)}let Ke=tl.nuevo,Q=[d.h,d.rod,d.tob,p.h,p.rod,p.tob,M.h,M.codo,m.h,m.codo,u,x,o],X=Q.length*3+1,ue=new Float64Array(X),I=new Float64Array(X),q=new Float64Array(X),ie=null,we=ce=>{let he=0;for(let _e of Q)ce[he++]=_e.rotation.x,ce[he++]=_e.rotation.y,ce[he++]=_e.rotation.z;ce[he]=o.position.y},le=ce=>{let he=0;for(let _e of Q)_e.rotation.set(ce[he++],ce[he++],ce[he++]);o.position.y=ce[he]};function oe(ce,he){if(u.updateMatrix(),qc.copy(he).sub(o.position).applyMatrix4(Sv.copy(u.matrix).invert()),Wc.copy(ce.h.position),Vi.subVectors(qc,Wc),Vi.lengthSq()<1e-8)return;let _e=Math.max(Ra-ll+.001,Math.min(Ra+ll-.001,Vi.length()));Vi.normalize();let ze=Math.acos(Math.max(-1,Math.min(1,(Ra*Ra+_e*_e-ll*ll)/(2*Ra*_e))));zh.copy(Fh).addScaledVector(Vi,-Fh.dot(Vi)).normalize(),Xc.copy(Vi).multiplyScalar(Math.cos(ze)).addScaledVector(zh,Math.sin(ze)),Oh.copy(Wc).addScaledVector(Xc,Ra),Hi.subVectors(qc,Oh).normalize();let D=Gh(Xc);ce.h.rotation.set(D.x,0,D.z);let lt=Math.cos(D.x),Pe=Math.sin(D.x),R=Math.cos(D.z),v=Math.sin(D.z),G=Hi.y*lt+Hi.z*Pe,J=-Hi.y*Pe+Hi.z*lt;Bh.set(Hi.x*R+G*v,-Hi.x*v+G*R,J);let te=Gh(Bh);ce.codo.rotation.set(te.x,0,te.z)}function Oe(ce,he){if(ce==="escalar"){let _e=1.45+.06*he,ze=1.45-.06*he;oe(M,Ur.set(.23,_e,.1+.268*_e-.04)),oe(m,Ur.set(-.23,ze,.1+.268*ze-.04))}else if(ce==="sostener"){let _e=.3414000000000001;oe(M,Ur.set(.23,1.05,_e)),oe(m,Ur.set(-.23,1.05,_e))}else ce==="banderero"?oe(m,Ur.set(-.22,1.62,.3)):ce==="caminar"&&(M.codo.rotation.x=-.25-.2*Math.max(0,he),m.codo.rotation.x=-.25-.2*Math.max(0,-he))}function Ce({tipo:ce="idle",fase:he=0,t:_e=0,mirarArriba:ze=0,dt:D}={}){let lt=Ke&&D!==void 0&&ie!==null&&ce!==ie;lt&&we(ue);for(let v of[d.h,d.rod,d.tob,p.h,p.rod,p.tob,M.h,M.codo,m.h,m.codo,u,x,o])v.rotation.set(0,0,0);o.position.y=.92;let Pe=Math.sin(he),R=Math.cos(he);if(M.h.rotation.z=-.12,m.h.rotation.z=.12,u.rotation.x=.02*Math.sin(_e*2),x.rotation.x=-ze,ce==="caminar")d.h.rotation.x=Pe*.55,p.h.rotation.x=-Pe*.55,d.rod.rotation.x=Math.max(0,-Pe)*.7,p.rod.rotation.x=Math.max(0,Pe)*.7,M.h.rotation.x=-Pe*.45,m.h.rotation.x=Pe*.45,M.codo.rotation.x=-.3,m.codo.rotation.x=-.3,o.position.y=.92+Math.abs(R)*.025;else if(ce==="escalar")M.h.rotation.set(-2.5+Pe*.3,0,-.18),M.codo.rotation.x=-.45-Math.max(0,Pe)*.3,m.h.rotation.set(-2.5-Pe*.3,0,.18),m.codo.rotation.x=-.45-Math.max(0,-Pe)*.3,d.h.rotation.x=-.55-Math.max(0,Pe)*.5,d.rod.rotation.x=.7+Math.max(0,Pe)*.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.2-Math.max(0,-Pe)*.5,p.rod.rotation.x=.25+Math.max(0,-Pe)*.6,p.tob.rotation.x=-.05,u.rotation.x=.12,x.rotation.x=-.25-ze;else if(ce==="trabajar"){let v=Math.sin(_e*3)*.1;M.h.rotation.set(-2.25+v,0,-.25),M.codo.rotation.x=-.6+v,m.h.rotation.set(-2-v,0,.3),m.codo.rotation.x=-.8-v,d.h.rotation.x=-.45,d.rod.rotation.x=.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.08,p.rod.rotation.x=.12,u.rotation.x=.14,x.rotation.x=-.35}else ce==="sostener"?(M.h.rotation.set(-1.35,0,-.1),m.h.rotation.set(-1.35,0,.1),M.codo.rotation.x=-.3,m.codo.rotation.x=-.3):ce==="senalar"?(m.h.rotation.set(-1.5,0,.5),m.codo.rotation.x=-.1,u.rotation.y=.2):ce==="cargar"?(M.h.rotation.set(-2.9,0,-.2),m.h.rotation.set(-2.9,0,.2),M.codo.rotation.x=-.2,m.codo.rotation.x=-.2,d.h.rotation.x=Pe*.45,p.h.rotation.x=-Pe*.45,d.rod.rotation.x=Math.max(0,-Pe)*.6,p.rod.rotation.x=Math.max(0,Pe)*.6):ce==="caida"?(M.h.rotation.set(-2.8+Pe*.4,0,-.6),m.h.rotation.set(-2.6-Pe*.4,0,.6),d.h.rotation.x=-.4+Pe*.3,p.h.rotation.x=-.1-Pe*.3,d.rod.rotation.x=.5,p.rod.rotation.x=.3):ce==="colgado"?(M.h.rotation.set(-2.9,0,-.3),m.h.rotation.set(-2.9,0,.3),d.h.rotation.x=-.3,p.h.rotation.x=-.1,d.rod.rotation.x=.4,p.rod.rotation.x=.3,u.rotation.x=-.1):ce==="tendido"?(M.h.rotation.set(-.3,0,-1.1),m.h.rotation.set(.2,0,1.3),M.codo.rotation.x=-.5,m.codo.rotation.x=-.2,d.h.rotation.set(.05,0,.12),p.h.rotation.set(-.15,0,-.08),p.rod.rotation.x=.35,x.rotation.y=.5):ce==="banderero"?(m.h.rotation.set(-1.55,0,.15),m.codo.rotation.x=-.15,M.h.rotation.set(-.9+Math.sin(_e*2.2)*.5,0,-.5),M.codo.rotation.x=-.4):ce==="celular"?(m.h.rotation.set(-1.1,0,.25),m.codo.rotation.x=-1.2,x.rotation.x=.45,d.h.rotation.x=Pe*.45,p.h.rotation.x=-Pe*.45,d.rod.rotation.x=Math.max(0,-Pe)*.6,p.rod.rotation.x=Math.max(0,Pe)*.6):(M.codo.rotation.x=-.08,m.codo.rotation.x=-.08);if(Ke){if(Oe(ce,Pe),we(I),D===void 0)q.fill(0);else{if(lt)for(let G=0;G<X;G++)q[G]=ue[G]-I[G];let v=Math.exp(-D/Mv);for(let G=0;G<X;G++){let J=q[G]*v;Math.abs(J)<1e-4&&(J=0),q[G]=J,I[G]+=J}le(I)}ie=ce}}Ce();let je=new Set([s,o,d.h,d.rod,d.tob,p.h,p.rod,p.tob,u,x,M.h,M.codo,m.h,m.codo]);return s.updateMatrixWorld(!0),s.traverse(ce=>{je.has(ce)||(ce.updateMatrix(),ce.matrixAutoUpdate=!1)}),{raiz:s,pose:Ce,equipar:Je,equipado:Xe,refs:Ee,M:r,partes:{pelvis:o,torso:u,cuello:x,bi:M,bd:m,pi:d,pd:p}}}var Ev=(i,e)=>i+Math.atan2(Math.sin(e-i),Math.cos(e-i)),$c={c:"cargar",e:"escalar",t:"trabajar",s:"sostener"};function Jc(i){let e=kh(i);return e.raiz.traverse(t=>{t.isMesh&&(t.castShadow=!1)}),e}function Vh(i,e){let t=new Map;function n(s,o,l,c,d,p,u="i"){let f=t.get(s);return f||(f={id:s,p:Jc(d),x:o,z:l,y:p??e(o,l),ox:o,oz:l,rumbo:c??0,orumbo:c??0,fase:Math.random()*6,d:0,a:0},f.p.equipar("casco",!!d?.uniforme),d?.arnes&&f.p.equipar("arnes"),i.add(f.p.raiz),t.set(s,f)),f.ox=o,f.oz=l,f.oy=p,f.pose=u,c!==void 0&&(f.orumbo=c),f}function a(s){let o=t.get(s);o&&(i.remove(o.p.raiz),t.delete(s))}function r(s,o,l){let c=1-Math.exp(-s*10);for(let d of t.values()){let p=(d.ox-d.x)*c,u=(d.oz-d.z)*c,f=((d.oy??e(d.x,d.z))-d.y)*c,x=Math.hypot(p,f,u);d.x+=p,d.z+=u,d.y+=f;let _=Math.hypot(p,u)/s>.25,g=$c[d.pose];d.rumbo=Ev(d.rumbo,_&&!g?Math.atan2(p,u):d.orumbo)*c+d.rumbo*(1-c),d.p.raiz.position.set(d.x,d.y,d.z),d.p.raiz.rotation.y=d.rumbo;let h=Math.hypot(d.x-l.position.x,d.z-l.position.z);d.p.raiz.visible=h<140,h<60&&(d.fase+=x*4.19,d.p.pose({tipo:g??(_?"caminar":"idle"),fase:d.fase,t:o,dt:s}))}}return{mapa:t,fijar:n,quitar:a,cada:r}}function Hh(i){let e=new Vt(new sr(.5,16).rotateX(-Math.PI/2),new En({color:0,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i);e.frustumCulled=!1,e.renderOrder=1;let t=new gt;return{malla:e,fijar(n,a,r,s,o,l=o,c=0){t.position.set(a,r+.02,s),t.rotation.set(0,c,0),t.scale.set(o,1,l),t.updateMatrix(),e.setMatrixAt(n,t.matrix)},listo(n){e.count=Math.min(n,i),e.instanceMatrix.needsUpdate=!0}}}var Zc=.16,cl=56,dl=i=>Math.abs(i)<Zc?0:(i-Math.sign(i)*Zc)/(1-Zc);function jh(i,e){let t=new Set,n=new Set,a={mx:0,mz:0,gx:0,gy:0,correr:!1,accion:!1,vista:!1,origen:Ca?"t\xE1ctil":"teclado y rat\xF3n"},r=0,s=0;addEventListener("keydown",h=>{h.repeat||(t.add(h.code),a.origen="teclado y rat\xF3n",h.target?.tagName!=="INPUT"&&(h.code==="KeyE"&&n.add("accion"),h.code==="KeyV"&&n.add("vista"),h.code==="KeyR"&&n.add("radio")))}),addEventListener("keyup",h=>t.delete(h.code)),addEventListener("blur",()=>t.clear());let o=(...h)=>h.some(y=>t.has(y))?1:0;i.addEventListener("click",()=>{!Ca&&document.pointerLockElement!==i&&i.requestPointerLock?.()?.catch?.(()=>{})}),addEventListener("mousemove",h=>{document.pointerLockElement===i&&(r+=h.movementX*.0024,s-=h.movementY*.0024)});let l={id:null,x0:0,y0:0,x:0,y:0},c={id:null,x:0,y:0},d=document.createElement("div"),p=document.createElement("div");d.className="mu-base",p.className="mu-perilla",d.append(p),d.hidden=!0,e.append(d),i.style.touchAction="none",i.addEventListener("pointerdown",h=>{h.pointerType==="touch"&&(a.origen="t\xE1ctil",h.clientX<innerWidth*.45&&l.id===null?(Object.assign(l,{id:h.pointerId,x0:h.clientX,y0:h.clientY,x:0,y:0}),d.style.left=h.clientX+"px",d.style.top=h.clientY+"px",p.style.transform="",d.hidden=!1):c.id===null&&Object.assign(c,{id:h.pointerId,x:h.clientX,y:h.clientY}))}),i.addEventListener("pointermove",h=>{if(h.pointerId===l.id){let y=(h.clientX-l.x0)/cl,C=(h.clientY-l.y0)/cl,b=Math.hypot(y,C);b>1&&(y/=b,C/=b),l.x=y,l.y=C,p.style.transform=`translate(${y*cl}px, ${C*cl}px)`}else h.pointerId===c.id&&(r+=(h.clientX-c.x)*.0052,s-=(h.clientY-c.y)*.0052,c.x=h.clientX,c.y=h.clientY)});let u=h=>{h.pointerId===l.id&&(l.id=null,l.x=l.y=0,d.hidden=!0),h.pointerId===c.id&&(c.id=null)};if(i.addEventListener("pointerup",u),i.addEventListener("pointercancel",u),Ca)for(let[h,y,C]of[["radio","\u{1F4FB}","Radio"],["vista","\u{1F441}","Cambiar de vista"],["accion","\u270B","Acci\xF3n"]]){let b=document.createElement("button");b.className="mu-boton mu-"+h,b.textContent=y,b.setAttribute("aria-label",C),b.addEventListener("pointerdown",T=>{T.preventDefault(),n.add(h)}),e.append(b)}let f={},x={0:"accion",1:"atras",2:"radio",3:"vista",12:"arriba",13:"abajo"};function _(h){let y=null;try{y=Array.from(navigator.getGamepads?.()??[]).find(w=>w?.connected&&w.mapping==="standard")}catch{}if(!y)return null;let C=dl(y.axes[2]),b=dl(y.axes[3]);(C||b)&&(r+=C*2.6*h,s-=b*1.9*h);let T=!1;for(let w in x){let P=!!y.buttons[w]?.pressed;P&&!f[w]&&(n.add(x[w]),T=!0),f[w]=P}let E=dl(y.axes[0]),M=-dl(y.axes[1]),m=!!(y.buttons[6]?.pressed||y.buttons[10]?.pressed),S=M>.6?"arriba":M<-.6?"abajo":null;return S&&f.pal!==S&&n.add(S),f.pal=S,(E||M||C||b||T)&&(a.origen="control"),{mx:E,mz:M,correr:m}}function g(h){let y=o("KeyD","ArrowRight")-o("KeyA","ArrowLeft"),C=o("KeyW","ArrowUp")-o("KeyS","ArrowDown"),b=!!o("ShiftLeft","ShiftRight");l.id!==null&&(y=l.x,C=-l.y,b=Math.hypot(y,C)>.92);let T=_(h);T&&(T.mx||T.mz)&&(y=T.mx,C=T.mz,b=T.correr);let E=Math.hypot(y,C);E>1&&(y/=E,C/=E),a.mx=y,a.mz=C,a.correr=b,a.gx=r,a.gy=s,r=s=0;for(let M of["accion","vista","radio","atras","arriba","abajo"])a[M]=n.has(M);return n.clear(),a}return{leer:g,pulsar:h=>n.add(h)}}var Av=`
.mu-capa{position:fixed;inset:0;pointer-events:none;font:12px/1.35 ui-monospace,Consolas,monospace;color:#fff;user-select:none;-webkit-user-select:none}
.mu-capa>*{pointer-events:auto}
.mu-diag{position:absolute;left:max(8px,env(safe-area-inset-left));bottom:max(8px,env(safe-area-inset-bottom));background:rgba(0,24,48,.72);border-radius:8px;padding:8px 10px;white-space:pre;max-width:92vw;overflow:hidden}
.mu-diag button{display:block;margin-top:6px;font:inherit;color:#fff;background:#0B4A8F;border:0;border-radius:6px;padding:6px 10px;min-height:32px}
.mu-diag button:focus-visible,.mu-boton:focus-visible{outline:2px solid #FFD627;outline-offset:2px}
.mu-ayuda{position:absolute;left:50%;bottom:max(10px,env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(0,24,48,.6);border-radius:8px;padding:6px 12px;font:13px system-ui,sans-serif;text-align:center;pointer-events:none}
.mu-base{position:absolute;width:112px;height:112px;margin:-56px 0 0 -56px;border-radius:50%;background:rgba(255,255,255,.14);border:2px solid rgba(255,255,255,.45);pointer-events:none}
.mu-perilla{position:absolute;left:50%;top:50%;width:52px;height:52px;margin:-26px 0 0 -26px;border-radius:50%;background:rgba(255,255,255,.75)}
.mu-boton{position:absolute;right:max(18px,env(safe-area-inset-right));width:64px;height:64px;border-radius:50%;border:2px solid rgba(255,255,255,.6);background:rgba(0,48,90,.6);color:#fff;font-size:26px;touch-action:none}
.mu-accion{bottom:max(26px,env(safe-area-inset-bottom))}
.mu-vista{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 78px)}
`;function qh(){let i=document.createElement("style");i.textContent=Av,document.head.append(i);let e=document.createElement("div");return e.className="mu-capa",document.body.append(e),e}function Wh(i,e){let t=document.createElement("div");t.className="mu-diag",t.hidden=!e;let n=document.createElement("div"),a=document.createElement("button");return a.textContent="Copiar diagn\xF3stico",a.addEventListener("click",async()=>{let r=`${n.textContent}
${navigator.userAgent}
${innerWidth}\xD7${innerHeight} \xB7 dpr ${devicePixelRatio}`;try{await navigator.clipboard.writeText(r),a.textContent="Copiado \u2713"}catch{a.textContent="No se pudo copiar"}setTimeout(()=>{a.textContent="Copiar diagn\xF3stico"},2e3)}),t.append(n,a),i.append(t),addEventListener("keydown",r=>{r.code==="F3"&&(r.preventDefault(),t.hidden=!t.hidden)}),{escribir:r=>{n.textContent=r}}}var Ti={inspeccion:"GS-101 \xB7 Inspecci\xF3n de poster\xEDa (\xA75.6.3) \xB7 p. 21",demarcacion:"GS-101 \xB7 Demarcaci\xF3n (\xA75.6.2) \xB7 p. 21",equipo:"GS-101 \xB7 Trabajo seguro en postes (\xA75.6.1) \xB7 pp. 20\u201321"},Xh={a:{texto:"El poste parece obviamente inseguro.",corto:"Poste obviamente inseguro",material:null,aplicaAntesDeSubir:!0,dibujable:!1},b:{texto:"El poste se mueve.",corto:"Poste que se mueve",material:null,aplicaAntesDeSubir:!0,dibujable:!1},c:{texto:"El poste est\xE1 inclinado.",corto:"Poste inclinado",material:null,aplicaAntesDeSubir:!0,dibujable:!0},d:{texto:"La base del poste se alter\xF3 mientras se trabajaba arriba.",corto:"Base alterada",material:null,aplicaAntesDeSubir:!1,dibujable:!1},e:{texto:"Al despojar el poste de algunos cables y retenidas, se observa que est\xE1 soportado por los cables.",corto:"Soportado por los cables",material:null,aplicaAntesDeSubir:!1,dibujable:!1},f:{texto:"El terreno presenta deslizamientos.",corto:"Deslizamiento del terreno",material:null,aplicaAntesDeSubir:!0,dibujable:!1},g:{texto:"Poste de madera con fisuras, quemado o podrido: el da\xF1o no debe superar una tercera parte del di\xE1metro. Tampoco nudos con agrietamiento, ni agrietamientos a lo largo que comprometan m\xE1s de una tercera parte del poste.",corto:"Madera fisurada o podrida",material:"madera",aplicaAntesDeSubir:!0,dibujable:!0},h:{texto:"Poste de metal con oxidaci\xF3n que supera una tercera parte del di\xE1metro, o con perforaciones superiores a una tercera parte del di\xE1metro, o con una l\xEDnea el\xE9ctrica en posible contacto directo con el poste.",corto:"Metal oxidado o perforado",material:"metal",aplicaAntesDeSubir:!0,dibujable:!0}},yS=Object.keys(Xh).filter(i=>Xh[i].aplicaAntesDeSubir);var ES=typeof __URL_PUBLICA__=="string"?__URL_PUBLICA__:globalThis.process?.env?.URL_PUBLICA||"https://ruben1155.github.io/cuadrilla-segura/",AS=typeof __PREFIJO__=="string"?__PREFIJO__:globalThis.process?.env?.PREFIJO_ALMACEN||"cuadrilla-segura:";var Kc={url:"https://okhbiliodjuofzsjkolg.supabase.co",llave:"sb_publishable_F3-PMi9uLDPR655ZOCs60g_m0S_C6Ec"};var W={altura:"GS-101 \xB7 Trabajo seguro en alturas",escaleras:"GS-101 \xB7 Trabajo seguro en escaleras port\xE1tiles",amarre:"GS-101 \xB7 Paso a paso para el aseguramiento de la escalera a un poste",epp:"GS-101 \xB7 Uso de equipo de protecci\xF3n personal",general:"GS-101 \xB7 Lineamientos en seguridad general",electrico:"GS-101 \xB7 Trabajo seguro en proximidad de l\xEDneas energizadas",demarcacion:"GS-101 \xB7 Demarcaci\xF3n y se\xF1alizaci\xF3n del \xE1rea",emergencias:"GS-101 \xB7 Emergencias en trabajos en alturas",suspender:"GS-101 \xB7 Suspensi\xF3n de labores ante peligro no controlado",vehiculos:"GS-101 \xB7 Seguridad en la conducci\xF3n de veh\xEDculos",carga:"GS-101 \xB7 Lineamientos generales: manipulaci\xF3n de cargas",cuadrillas:"GS-101 \xB7 Cuadrillas de trabajo",reportes:"GS-101 \xB7 Reporte de incidentes y accidentes laborales",freno:"GS-101 \xB7 Equipo para trabajo en postes (freno para cuerda) \xB7 pr\xE1ctica de la cuadrilla: el freno va a la argolla frontal",m_altura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable",m_prep:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 Preparaci\xF3n antes de instalar",m_gaza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.8 Gazas, herrajes y accesorios",m_tension:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n",m_radio:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura",m_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.24 Rollos de reserva en redes a\xE9reas",m_rollo_poste:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de red en el poste (di\xE1metro del rollo de 40 a 50 cm)",m_calco:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas",m_preform:"Manual MNO-DS-GE-001 \xB7 Anexo 3: uso de preformados seg\xFAn di\xE1metro del cable",m_colores:"Manual MNO-DS-GE-001 \xB7 Anexo 4: c\xF3digo de colores EIA/TIA-598",m_cierre:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme",m_pruebas:"Manual MNO-DS-GE-001 \xB7 \xA76.7 Pruebas de aceptaci\xF3n",m_balona:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.6 Balona",m_postes:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.3.2 Distancia entre postes",m_ferrea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.5 Cruce de l\xEDnea f\xE9rrea",m_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 Preparaci\xF3n y limpieza de registros",m_subterranea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.2 y \xA76.2.1.3 Instalaci\xF3n subterr\xE1nea y selecci\xF3n de ductos",m_reserva_sub:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 Rollos de reserva en registros",m_tapas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.5 Dispositivos de seguridad de las tapas",poda_transito:"GS-101 \xB7 \xA75.6.10 n) Poda de \xE1rboles: en v\xEDas de alto tr\xE1nsito se pide colaboraci\xF3n a entidades como tr\xE1nsito \xB7 p. 40",confinado:"GS-101 \xB7 T\xE9rminos: espacio confinado",t_techo:"GS-101 \xB7 \xA75.6.7 Trabajo seguro en techos \xB7 p\xE1g. 30",t_techo_epp:"GS-101 \xB7 \xA75.6.7 Equipo de protecci\xF3n personal en techos \xB7 p\xE1g. 30",t_techo_escalera:"GS-101 \xB7 \xA75.6.7 a\u2013c Escalera para acceder al techo \xB7 p\xE1g. 30",t_techo_anclaje:"GS-101 \xB7 \xA75.6.7 d\u2013f Anclaje y l\xEDnea de vida provisional \xB7 p\xE1g. 30\u201331",t_techo_traslado:"GS-101 \xB7 \xA75.6.7 g Traslado al techo y descenso anclado \xB7 p\xE1g. 31",t_techo_caminar:"GS-101 \xB7 \xA75.6.7 h\u2013j Caminar en el techo y l\xE1minas \xB7 p\xE1g. 32",t_techo_clima:"GS-101 \xB7 \xA75.6.7 n Condiciones clim\xE1ticas adversas \xB7 p\xE1g. 33",t_techo_peligro:"GS-101 \xB7 \xA75.6.7 p Zonas inseguras del techo \xB7 p\xE1g. 33",t_escalera_base:"GS-101 \xB7 \xA75.6.4 g Escaleras port\xE1tiles: per\xEDmetro de 2 m \xB7 p\xE1g. 22\u201323",t_escalera_tres:"GS-101 \xB7 \xA75.6.4 Nota: tres pelda\xF1os superiores prohibidos \xB7 p\xE1g. 22",t_escalera_sola:"GS-101 \xB7 \xA75.6.4 i Un solo trabajador sobre la escalera \xB7 p\xE1g. 23",mt_epp:"GS-101 \xB7 5.6.9 EPP para trabajo en proximidad de l\xEDneas energizadas \xB7 p. 34",mt_identificar:"GS-101 \xB7 5.6.9 c) y observaciones 1 y 2 \xB7 p. 35",mt_distancias:"GS-101 \xB7 5.6.9 b) Distancias de instalaci\xF3n con el secundario (40 cm) y el neutro (80 cm) \xB7 p. 35",mt_tabla4:"GS-101 \xB7 5.6.9 e) Tabla N\xB0 4, distancias m\xEDnimas de seguridad \xB7 p. 37",mt_suspender:"GS-101 \xB7 5.6.9 f) Telecomunicaciones a menos de 80 cm de la primaria MT, en contacto con el secundario o al nivel de este \xB7 p. 37",mt_senal:"GS-101 \xB7 5.6.9 g) Se\xF1alizaci\xF3n del \xE1rea de trabajo a nivel de suelo \xB7 p. 37",mt_activa:"GS-101 \xB7 5.6.9 h) Todas las l\xEDneas el\xE9ctricas se consideran activas \xB7 p. 38",mt_frontera:"GS-101 \xB7 5.2 w) Fronteras de aproximaci\xF3n: solo personas calificadas cruzan el l\xEDmite \xB7 p. 12",mt_escalera:"GS-101 \xB7 5.6.4 q) Escaleras de abrir de fibra de vidrio; nota sobre escaleras de aluminio \xB7 p. 23",mt_guante_cuero:"GS-101 \xB7 5.3.4 b) Los guantes de cuero no son para trabajos en presencia de tensi\xF3n \xB7 p. 15",mt_rigidez:"GS-101 \xB7 5.1 d) Buena rigidez diel\xE9ctrica: no sujetarse de estructuras met\xE1licas cercanas \xB7 p. 9",poda_epp:"GS-101 \xB7 \xA75.6.10 d) y e) Equipo de protecci\xF3n para poda: careta, lentes, protecci\xF3n auditiva, cuerdas, casco de cuatro puntos con barbiquejo, guantes mec\xE1nicos, ropa y calzado institucionales \xB7 pp. 38\u201339",poda_mangas:"GS-101 \xB7 \xA75.6.10 t) Mangas, cuerdas o prendas sueltas pueden enredarse en la motosierra o en la rama \xB7 p. 40",poda_planificar:"GS-101 \xB7 \xA75.6.10 h) Planificaci\xF3n previa: \xE1rbol, terreno, clima, bienes, personas, animales, insectos, tr\xE1nsito y distancia a l\xEDneas \xB7 p. 39",poda_subir:"GS-101 \xB7 \xA75.6.10 f) El trabajador no se debe subir a un \xE1rbol \xB7 p. 39",poda_linea:"GS-101 \xB7 \xA75.6.10 b) y m) Ramas en aproximaci\xF3n o sobre la l\xEDnea energizada: informar y coordinar; no se cortan ramas sobre la l\xEDnea \xB7 pp. 38 y 40",poda_distancias:"GS-101 \xB7 \xA75.6.10 j) y k) Distancias m\xEDnimas: se trabaja fuera de ellas durante el corte y la ca\xEDda, tambi\xE9n para las ramas \xB7 p. 39",poda_cansancio:"GS-101 \xB7 \xA75.6.10 g) No operar maquinaria cansado ni con medicamentos que alteren la conciencia \xB7 p. 39",poda_senal:"GS-101 \xB7 \xA75.6.10 n) Se\xF1alizar el \xE1rea y advertir a terceros; en v\xEDas de alto tr\xE1nsito, pedir apoyo \xB7 p. 40",poda_trayectoria:"GS-101 \xB7 \xA75.6.10 o) Valorar la trayectoria de ca\xEDda y asegurar la zona con se\xF1alizaci\xF3n y personal que regule el paso \xB7 p. 40",poda_equipo:"GS-101 \xB7 \xA75.6.10 p) Revisar el equipo de poda antes de iniciar (cuchillos, mecates, otros dispositivos) \xB7 p. 40",poda_viento:"GS-101 \xB7 \xA75.6.10 q) Antes de cada corte: distancia a lo energizado, viento y vegetaci\xF3n que interfiera \xB7 p. 40",poda_cuerdas:"GS-101 \xB7 \xA75.6.10 r) Cuerdas de trabajo para evitar que la rama cambie de direcci\xF3n al caer \xB7 p. 40",poda_cuadrilla:"GS-101 \xB7 \xA75.4 e) Las cuadrillas de poda de \xE1rboles no pueden ser menores de dos miembros \xB7 p. 18",gal_autorizacion:"Manual MNO-DS-GE-001 \xB7 \xA74.1.6 y \xA74.1.7 Aviso al Centro de Operaciones y autorizaci\xF3n en SASET antes de intervenir fibras en operaci\xF3n",gal_senal:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) Per\xEDmetro del \xE1rea de trabajo asegurado con se\xF1alizaci\xF3n vial y peatonal",gal_vigia:"GS-101 \xB7 \xA75.4 c) Cuadrillas de m\xEDnimo dos personas. La fuente no describe c\xF3mo se vigila la tapa ni la comunicaci\xF3n (duda, ver PENDIENTES_SST.md, J10)",gal_atmosfera:"GS-101 \xB7 T\xE9rminos: espacio confinado (aberturas limitadas, ventilaci\xF3n desfavorable). La fuente no describe el procedimiento de atm\xF3sfera (duda, ver PENDIENTES_SST.md, J10)",gal_ingreso:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 c) Ingreso por escalera met\xE1lica cuando la profundidad lo amerita (aplicado a la galer\xEDa: duda, ver PENDIENTES_SST.md, J10)",gal_epp:"GS-101 \xB7 \xA75.3 Uso de EPP: lista propuesta para la galer\xEDa, a validar por Salud Ocupacional (ver PENDIENTES_SST.md, J10)",gal_respirador:"GS-101 \xB7 \xA75.3.3 f) Respiradores con filtros en lugares de escasa ventilaci\xF3n; los filtros se reemplazan cuando se saturan",gal_cables:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) No da\xF1ar los cables existentes; \xA76.2.2 radio de curvatura; \xA76.2.7.2 fijaciones con cobre en servicio",gal_pletinas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7.1 b) Pletinas peque\xF1as de 20 cm; d) el cable se sujeta del centro hacia los extremos",gal_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 b) y c) Rollo de reserva de 20 a 25 m en la galer\xEDa, en la pared opuesta al MDF, a la mayor altura posible",gal_50cm:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 d) En la pared del MDF, 50 cm libres desde la salida de los ductos hacia el fondo",gal_placas:"Manual MNO-DS-GE-001 \xB7 \xA76.4.2.3 a) y e) Placas acr\xEDlicas con origen y destino; dos placas en cada rollo de reserva",gal_sellado:"Manual MNO-DS-GE-001 \xB7 Anexo 1: sellado de los ductos en la galer\xEDa (espuma expandible reentrable; subductos con tapones de hule)",eri_antes:"GS-101 \xB7 \xA75.7 Antes a) y b): personal capacitado como equipo ERI y en rescate vertical; botiqu\xEDn b\xE1sico y equipos para rescate vertical (cuerdas de seguridad, mosquetones, pull-lift) \xB7 p. 42",eri_criticas:"GS-101 \xB7 \xA75.7 Antes d): los trabajos mayores de 12 m son muy cr\xEDticos; sistema de rescate en el sitio y persona competente en rescate \xB7 p. 42",eri_sistema:"GS-101 \xB7 \xA75.7 Antes c): reportar el deterioro o da\xF1o de los sistemas de prevenci\xF3n y protecci\xF3n contra ca\xEDdas \xB7 p. 42",eri_despejar:"GS-101 \xB7 \xA75.7 Durante a): despejar completamente el \xE1rea donde se present\xF3 el accidente \xB7 p. 42",eri_distancia:"GS-101 \xB7 \xA75.7 Durante b) y g): distancia prudente y segura; antes de un rescate, comprobar que el \xE1rea es segura y que uno est\xE1 protegido \xB7 pp. 42\u201343",eri_911:"GS-101 \xB7 \xA75.7 Durante e) y f): pedir ayuda al 9-1-1; no hacer maniobras de rescate de las que no se tenga conocimiento previo \xB7 p. 43",eri_no_mover:"GS-101 \xB7 \xA75.7 Durante d) y Despu\xE9s b): no mover a la v\xEDctima salvo raz\xF3n de seguridad; brindar tranquilidad a la v\xEDctima \xB7 p. 43",eri_terceros:"GS-101 \xB7 \xA75.7 Durante h): ning\xFAn trabajador informa a personas u organizaciones externas; solo la direcci\xF3n o personal autorizado \xB7 p. 43",eri_fuera:"GS-101 \xB7 \xA75.5 n): los equipos para trabajo en altura que hayan sido usados en pruebas o por una ca\xEDda libre quedan fuera de servicio \xB7 p. 21",sv_permiso:"GS-101 \xB7 \xA75.8 a) Solo conduce veh\xEDculos institucionales el funcionario con los permisos de conducir del ICE \xB7 p. 42",sv_revision:"GS-101 \xB7 \xA75.8 b) Antes de usar el veh\xEDculo se revisan los niveles de aceite, combustible y agua, luces, repuesto, documentos, se\xF1alizaci\xF3n, herramientas y llantas \xB7 p. 43",sv_ley:"GS-101 \xB7 \xA75.8 c) y l) Conducir responsablemente, respetando la Ley de Tr\xE1nsito, sin abusar de la destreza al conducir \xB7 p. 43",sv_celular:"GS-101 \xB7 \xA75.8 d) Queda prohibido el uso del celular durante la conducci\xF3n del veh\xEDculo \xB7 p. 43",sv_estacionar:"GS-101 \xB7 \xA75.8 e) Al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",sv_carga:"GS-101 \xB7 \xA75.8 g) Asegurar objetos, materiales, herramientas y equipos: son un riesgo en un frenado r\xE1pido, vuelco o colisi\xF3n \xB7 p. 43",sv_tablero:"GS-101 \xB7 \xA75.8 h) e i) Nada suelto en el tablero; no recoger objetos del piso ni lejos del alcance mientras se conduce \xB7 p. 43",sv_fatiga:"GS-101 \xB7 \xA75.8 m) Con cansancio o fatiga: detener el veh\xEDculo en un sitio seguro, bajarse, caminar y respirar; si va acompa\xF1ado, ceder la conducci\xF3n \xB7 p. 43",sv_calma:"GS-101 \xB7 \xA75.8 o) Manejar con calma, sin perder el control con otros conductores y evitando confrontaciones \xB7 p. 43",sv_mojado:"GS-101 \xB7 \xA75.8 p) En caminos con grava, arenosos o mojados, bajar la velocidad y manejar con cuidado \xB7 p. 44",sv_danos:"GS-101 \xB7 \xA75.8 q) Reportar los da\xF1os que se observen o causen al veh\xEDculo; no ocultarlos, pueden producir un accidente \xB7 p. 44",sv_alcohol:"GS-101 \xB7 \xA75.8 r) No conducir bajo los efectos del alcohol, drogas o medicamentos que causen somnolencia \xB7 p. 44",sv_defensivo:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Manejo defensivo y sus cinco elementos: conocimiento, estar alerta, previsi\xF3n, juicio y habilidad \xB7 diap. 4\u201311",sv_humano:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 El 90 % de los accidentes viales tiene origen en el factor humano \xB7 diap. 13",sv_estados:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Estados (prisa, frustraci\xF3n, cansancio, complacencia) y los errores que producen \xB7 diap. 17\u201325",sv_linea_fuego:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Errores: ojos no en la tarea y entrar en la l\xEDnea de fuego \xB7 diap. 26 y 30",sv_lluvia:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Factor lluvia: calle mojada (\xABespecie de jab\xF3n\xBB), carreteras, poca visibilidad y neblina \xB7 diap. 36\u201341",sv_visibilidad:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Poca visibilidad: reducir la velocidad; si es excesiva, detener el veh\xEDculo a un costado y esperar \xB7 diap. 40",sv_derrumbe:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Derrumbes originados por la lluvia \xB7 diap. 38 (qu\xE9 hacer ante uno: decisi\xF3n conservadora, ver PENDIENTES_SST.md, J12\u2013J13)",sv_sustancias:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Alcohol, drogas y f\xE1rmacos: efectos seg\xFAn la dosis; los f\xE1rmacos como factor accidentog\xE9nico \xB7 diap. 44\u201349",sv_minimos:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Nueve m\xEDnimos de seguridad vehicular, a revisar todos los d\xEDas antes de salir \xB7 diap. 51\u201352",sv_cinturon:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 M\xEDnimo 1: cintur\xF3n de seguridad retr\xE1ctil de 2 o 3 puntos \xB7 diap. 51",ev_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 \xB7 GS-101 \xB7 Delimitaci\xF3n del \xE1rea",ev_impaciente:"GS-101 \xB7 Cuadrillas en zonas de tr\xE1fico denso \xB7 Delimitaci\xF3n del \xE1rea de trabajo",gs31_ats:"GS-31 \xB7 \xA75.2.4 Antes de la ejecuci\xF3n diaria se realiza el ATS, con todos los trabajadores y liderado por el encargado o t\xE9cnico de la cuadrilla (A01-GS-31) \xB7 p. 10",gs31_cambios:"GS-31 \xB7 \xA75.2.5 Si cambia la planificaci\xF3n inicial (obra, proceso, equipos, personal) se aplica de nuevo el ATS \xB7 p. 10",gs31_f02:"GS-31 \xB7 \xA75.1.11 Las tareas con riesgos de situaci\xF3n cr\xEDtica se eval\xFAan con el F02-GS-31 An\xE1lisis de Tarea Cr\xEDtica \xB7 p. 5",gs31_gravedad:"GS-31 \xB7 \xA75.1.11 d) y f) Gravedad: la p\xE9rdida m\xE1s probable, en la escala 0, 2, 4 y 6 \xB7 p. 6",gs31_repetitividad:"GS-31 \xB7 \xA75.1.11 g) Repetitividad: n\xFAmero de colaboradores y cu\xE1nto de la jornada hace cada uno la tarea \xB7 p. 7",gs31_probabilidad:"GS-31 \xB7 \xA75.1.11 h) Probabilidad de esa p\xE9rdida, de \u22121 a +1 respecto al promedio \xB7 p. 7",gs31_criticidad:"GS-31 \xB7 \xA75.1.11 i) y k) GC = G + R + P (0 a 10): de 0 a 4 baja, m\xE1s de 4 y menos de 8 moderada, 8 o m\xE1s alta \xB7 pp. 7\u20138",gs31_controles:"GS-31 \xB7 \xA75.1.11 m) Controles m\xEDnimos: EPP y dispositivos, capacitaci\xF3n, protocolo de trabajo seguro y la normativa que los respalda \xB7 p. 8",ats_pizarra:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 ATS del d\xEDa: la pizarra (trabajo, herramientas y equipos, obra, fecha, personal y actividades numeradas) \xB7 diap. 46\u201347",ats_muerte:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Factores de muerte; si hay uno o m\xE1s, se revisan en conjunto las acciones a implementar \xB7 diap. 48",ats_riesgos:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Riesgos de cada tarea, manteniendo la numeraci\xF3n de las actividades \xB7 diap. 49",rec_anomalia:"GS-101 \xB7 \xA73.5 b) T\xE9cnico: informar al coordinador de cuadrilla y/o SST cualquier anomal\xEDa o desviaci\xF3n \xB7 p. 4",rec_inminente:"GS-101 \xB7 \xA75.6.4 g), final: si se observa inminente peligro para las personas, se interrumpe la actividad \xB7 p. 23",rec_cuasi:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) c) Casi incidente sin afectaci\xF3n a la salud: F01-GS-52 o F06-GS-52 \xB7 p. 41",rec_accidente:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) b) y d) Accidente: F07-GS-52 a la jefatura de inmediato, antes de terminar la jornada \xB7 pp. 40\u201341",rec_liderazgo:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Reporte por comportamientos: retroalimentaci\xF3n correctiva y registro en el F02-CSCON-SST-00-25 con firma del trabajador; aviso a la jefatura inmediata \xB7 diap. 68",sol_clima:"GS-101 \xB7 \xA75.1 e) Suspensi\xF3n de la actividad por condiciones clim\xE1ticas desfavorables: tormentas el\xE9ctricas, lluvias u otras que pongan en riesgo a los ejecutores \xB7 p. 9",demo_generacion_autorizacion:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 El ingreso a la planta solar se coordina con su encargado, con autorizaci\xF3n previa",demo_generacion_energizado:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los paneles generan electricidad mientras les da la luz: se tratan como energizados",demo_generacion_no_pisar:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 No se pisa ni se apoya nadie en los paneles ni en su estructura",demo_generacion_conexiones:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Solo personal calificado manipula conexiones e inversores, seg\xFAn el procedimiento de la planta",demo_generacion_danos:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los da\xF1os en paneles, cables o inversores se reportan y no se tocan",demo_generacion_calor:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Hidratarse, protegerse del sol y descansar a la sombra con frecuencia",mv_apoyo:"GS-101 \xB7 \xA75.6.6: el veh\xEDculo sirve de soporte a la escalera a medio vano \xB7 p. 28",mv_dos_puntos:"GS-101 \xB7 \xA75.6.6: la escalera se amarra al pant\xF3grafo y al eje de una llanta, a dos puntos \xB7 p. 28",mv_nudos:"GS-101 \xB7 \xA75.6.6: nudo ocho aplicado para dar tensi\xF3n y pata de chancho (ballestrinque) para terminar \xB7 p. 28",mv_subida:"GS-101 \xB7 \xA75.6.6: para subir y bajar, la cuerda de seguridad va sujetada a la escalera \xB7 p. 28",mv_bajada:"GS-101 \xB7 \xA75.6.4 j): subir y bajar de frente, con las manos libres y tres puntos de apoyo \xB7 p. 23",mv_tres:"GS-101 \xB7 \xA75.6.4, nota de la Tabla N\xB0 2: se proh\xEDbe el uso de los tres pelda\xF1os superiores \xB7 p. 22",mv_tabla2:"GS-101 \xB7 \xA75.6.4 f) y Tabla N\xB0 2: altura m\xE1xima permitida de uso de cada escalera \xB7 p. 22",mv_inspeccion:"GS-101 \xB7 \xA75.6.4 c), l), t) y u): revisar pelda\xF1os, uniones, largueros y patas antes de usar la escalera \xB7 pp. 22\u201324",mv_senalizacion:"GS-101 \xB7 \xA75.6.4 g): per\xEDmetro m\xEDnimo de 2 m alrededor de la escalera, con cintas y conos \xB7 pp. 22\u201323",mv_camion:"GS-101 \xB7 \xA75.8 e): al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",mv_herramientas:"GS-101 \xB7 \xA75.6.4 k): materiales y herramientas con bolso, mecate o cuerda \xB7 p. 23",mv_guardar:"GS-101 \xB7 \xA75.6.4 a) y d): la escalera se maneja entre dos y se deposita, no se tira; se limpian los desechos de los pelda\xF1os \xB7 p. 22",mv_mover:"GS-101 \xB7 \xA75.6.4 h): la escalera no se mueve ni se extiende mientras haya personal sobre ella \xB7 p. 23",cala_abertura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.2 Dimensi\xF3n de la cala: 1,5 m de largo por 1 m de ancho, como m\xEDnimo \xB7 p. 18",cala_pieza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tubo de reparaci\xF3n: 50 cm m\xE1s largo que la abertura entre los extremos del ducto \xB7 p. 18",cala_ranura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 La abertura del corte longitudinal queda arriba y se cierra con dos medias secciones de PVC y pegamento \xB7 p. 18",cala_amarras:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tres cintas met\xE1licas o tipo gaza con tornillo sin fin: una en cada extremo y otra en el centro \xB7 p. 18",cala_capas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.4 y Figura 2a: capas de cierre en su orden, espesor y material \xB7 p. 18",cala_empalme:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm, con preformado de 75 cm o menos \xB7 p. 52",cala_anclas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Anclas de seguridad: cada 500 m en tramos rectos de 1 km o m\xE1s, y en cruces de v\xEDa con vano mayor de 80 m en terreno plano \xB7 p. 36",cala_ancla_distancia:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Ubicaci\xF3n del ancla: la mitad de la altura, medida del herraje a la base del poste \xB7 p. 36",cr_cliente:"GS-101 \xB7 \xA75.6.8 a) y b) Observar el cielorraso antes de empezar y preguntar al cliente por sus condiciones \xB7 p. 33",cr_estructura:"GS-101 \xB7 \xA75.6.8 c) La estructura se observa sin corrosi\xF3n avanzada ni madera descompuesta, y estable \xB7 p. 33",cr_electrico:"GS-101 \xB7 \xA75.6.8 d) Cable el\xE9ctrico expuesto: el cliente desconecta la electricidad antes de subir; con guantes diel\xE9ctricos solo si no es posible \xB7 p. 33",cr_epp:"GS-101 \xB7 \xA75.6.8 e) EPP del cielorraso: anteojos, casco con barbiquejo y linterna, ropa, calzado, guantes diel\xE9ctricos y rodilleras \xB7 p. 34",cr_arnes:"GS-101 \xB7 \xA75.5 a) Trabajo a una altura, como en cielorrasos: equipo para trabajo en altura autorizado \xB7 p. 19",cr_extension:"GS-101 \xB7 \xA75.6.8 f) Valorar si es posible usar una extensi\xF3n de fibra para evitar subir al cielorraso \xB7 p. 34",cr_avispas:"GS-101 \xB7 \xA75.6.8 g) Al ingresar, verificar desde el suelo la ausencia de colmenas de avispas o similares \xB7 p. 34",cr_caminar:"GS-101 \xB7 \xA75.6.7 h) por analog\xEDa: caminar por la estructura y no sobre la l\xE1mina (el cielorraso no se cita: duda, ver PENDIENTES_SST.md, J19) \xB7 p. 32",cr_escalera_tipo:"GS-101 \xB7 \xA75.6.4 q) Escaleras de abrir de fibra de vidrio; nota: el aluminio solo donde no hay riesgo el\xE9ctrico \xB7 p. 23",el_provisional:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Arts. 111 y 113 del Reglamento de Seguridad en Construcciones: instalaciones provisionales seg\xFAn el C\xF3digo El\xE9ctrico de CR (entubado, adecuado a la tensi\xF3n nominal) \xB7 diap. 22\u201326",el_medidor:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 112: medidores el\xE9ctricos provisionales con base estable y protecci\xF3n del agua \xB7 diap. 22\u201326",el_tablero:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 114: tableros y cajas el\xE9ctricas tapados, identificados y cerrados \xB7 diap. 22\u201326",el_conductores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 115: conductores protegidos ante da\xF1os mec\xE1nicos de la construcci\xF3n (maquinaria, veh\xEDculos, agua, qu\xEDmicos) \xB7 diap. 27",el_epp:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 117: el personal en presencia de energ\xEDa el\xE9ctrica cuenta con protecci\xF3n diel\xE9ctrica; no usar el EPP diel\xE9ctrico es un acto inseguro \xB7 diap. 27 y 51",el_condiciones:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Condiciones inseguras: enchufes deteriorados, uniones deterioradas o sin aislamiento y conexiones fuera de norma \xB7 diap. 46\u201348",el_autorizacion:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: intervenir sin autorizaci\xF3n \xB7 diap. 51",el_mojado:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: manos o pies mojados; la piel h\xFAmeda tiene menor resistencia \xB7 diap. 13 y 51",el_combustible:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: materiales combustibles o explosivos donde se presente arco el\xE9ctrico; el arco es un fuego repentino con metal fundido \xB7 diap. 5 y 31",el_anexo_b:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: peligro inminente o alto riesgo (sin protecci\xF3n frente al contacto con partes energizadas o el cortocircuito; lluvia y tormentas el\xE9ctricas) \xB7 diap. 30\u201331",el_anexo_c:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo C del C\xF3digo El\xE9ctrico: lista de verificaci\xF3n de instalaciones el\xE9ctricas, aplicada en conjunto con el t\xE9cnico el\xE9ctrico \xB7 diap. 32\u201340",el_factores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Factores de la magnitud de un incidente el\xE9ctrico: intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria \xB7 diap. 9"};var TS=new Map([...Object.entries(W).map(([i,e])=>[e,i]),...Object.entries(Ti).map(([i,e])=>[e,"poste_"+i])]);var Tv=[{n:1,p:"\xBFA partir de qu\xE9 altura se considera trabajo en altura?",o:["M\xE1s de 1,80 m","M\xE1s de 3 m","M\xE1s de 1 m","Solo arriba de 5 m"],ref:W.altura},{n:1,p:"\xBFCu\xE1ntos trabajadores pueden estar sobre una escalera port\xE1til?",o:["Uno solo","Dos, si es de extensi\xF3n","Tres, si la escalera es larga","Los que quepan"],ref:W.escaleras},{n:1,p:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera en el poste?",o:["75\xB0","60\xB0","90\xB0","45\xB0"],ref:W.amarre},{n:1,p:"\xBFQu\xE9 pelda\xF1os de la escalera est\xE1 prohibido usar?",o:["Los tres superiores","Solo el primer pelda\xF1o","Ninguno","Los dos inferiores"],ref:W.escaleras},{n:1,p:"\xBFQu\xE9 per\xEDmetro m\xEDnimo se se\xF1aliza alrededor de la escalera?",o:["2 metros","50 cm","No hace falta","10 metros"],ref:W.escaleras},{n:1,p:"Al subir y bajar la escalera debo mantener\u2026",o:["Tres puntos de apoyo","Dos puntos de apoyo","Las manos ocupadas","Un punto de apoyo"],ref:W.escaleras},{n:1,p:"\xBFC\xF3mo se suben las herramientas a la escalera?",o:["Con bolso, mecate o cuerda","En las bolsas del pantal\xF3n","En la mano, pegadas al cuerpo","Que me las lancen desde abajo"],ref:W.escaleras},{n:1,p:"\xBFSe puede trabajar en altura con reloj, anillo o cadena?",o:["No, se proh\xEDbe todo tipo de alhaja","S\xED, si son peque\xF1os y no molestan","Solo el reloj, si no tiene correa met\xE1lica","S\xED, si van bajo el guante de cuero"],ref:W.altura},{n:1,p:"Ante un accidente en altura, \xBFa qu\xE9 n\xFAmero se pide ayuda?",o:["9-1-1","1-1-3","8-0-0","Se espera a la jefatura"],ref:W.emergencias},{n:1,p:"La escalera viaja en el techo del cami\xF3n. \xBFSubir a bajarla es trabajo en altura?",o:["S\xED: el techo est\xE1 a m\xE1s de 1,80 m","No: es solo un cami\xF3n de reparto","Solo si llueve fuerte, con viento","Solo si es de noche y est\xE1 oscuro"],ref:W.altura},{n:1,p:"Tu arn\xE9s tiene una costura reventada. \xBFQu\xE9 haces?",o:["No lo uso, informo y pido la sustituci\xF3n","Lo uso con cuidado, sin que se note","Lo refuerzo con cinta y lo uso hoy","Lo uso solo hoy, ma\xF1ana lo cambio"],ref:W.altura},{n:1,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable a\xE9reo sobre una acera, en su flecha m\xE1xima?",o:["4,5 m","3 m","6 m","2,5 m"],ref:W.m_altura},{n:1,p:"\xBFCu\xE1ntas calcoman\xEDas reflectivas de prevenci\xF3n van en el poste?",o:["Dos, una a cada lado","Una, en el centro del poste","Cuatro, dos a cada lado","Ninguna: no hace falta"],ref:W.m_calco},{n:1,p:"\xBFCu\xE1ntas personas, como m\xEDnimo, forman una cuadrilla de instalaci\xF3n de fibra?",o:["Dos: un t\xE9cnico y un asistente","Una, si tiene experiencia","Cuatro, con un supervisor de obra","Las que haya disponibles ese d\xEDa"],ref:W.cuadrillas},{n:2,p:"\xBFD\xF3nde se conecta preferiblemente la l\xEDnea de vida?",o:["En un anclaje por encima de la cabeza","En el portaganchos pl\xE1stico del arn\xE9s","En un cable telef\xF3nico de la red","A la altura de la cintura, en un pelda\xF1o"],ref:W.altura},{n:2,p:"La l\xEDnea de vida de 0,90 m se conecta en el arn\xE9s a la\u2026",o:["Argolla dorsal (espalda)","Argolla frontal (pecho)","Argolla D lateral","Portaganchos pl\xE1stico"],ref:W.altura},{n:2,p:"El freno para cuerda (o el carrito de la l\xEDnea vertical del cami\xF3n) se conecta a la\u2026",o:["Argolla frontal, a la altura del pecho y el ombligo","Argolla dorsal, en la espalda, junto a la l\xEDnea de 0,90 m","Argolla D lateral de la faja de posicionamiento","Hebilla del cintur\xF3n, sin ning\xFAn anclaje"],ref:W.freno},{n:2,p:"Antes de usar los guantes diel\xE9ctricos, adem\xE1s de revisarlos a la vista, se les hace\u2026",o:["La prueba de aire (inflarlos) para buscar fugas","Nada m\xE1s: con una mirada basta","Una prueba con agua caliente y jab\xF3n","Un estir\xF3n fuerte, de lado y de frente"],ref:W.epp},{n:2,p:"Los guantes diel\xE9ctricos clase 00 (etiqueta beige) protegen hasta\u2026",o:["500 V","1000 V","50 V","15 kV"],ref:W.epp},{n:2,p:"\xBFPor qu\xE9 se usa un guante de cuero sobre el guante diel\xE9ctrico?",o:["Para evitar perforaciones y rasgados del aislante","Para que no se resbale la mano en el trabajo","Porque el color se ve mejor en el poste","No se debe usar: el aislante ya basta solo"],ref:W.epp},{n:2,p:"El casco para trabajo en postes es ala ancha tipo II, con barbiquejo de\u2026",o:["Cuatro puntos","Dos puntos","Un punto","No lleva barbiquejo"],ref:W.epp},{n:2,p:"Resistencia m\xEDnima de un punto de anclaje por persona conectada:",o:["5000 lb (2272 kg)","500 lb","1000 kg","La de cualquier tubo firme"],ref:W.altura},{n:2,p:"Un equipo de altura que ya detuvo una ca\xEDda libre debe\u2026",o:["Quedar fuera de servicio","Revisarse y seguir us\xE1ndose","Lavarse y guardarse","Usarse solo en techos"],ref:W.altura},{n:2,p:"\xBFSe puede enrollar la l\xEDnea de vida para acortarla?",o:["No, est\xE1 prohibido","S\xED, dos vueltas","S\xED, si el anclaje est\xE1 bajo","Solo en escaleras"],ref:W.altura},{n:2,p:"\xBFCu\xE1ntos ganchos se pueden conectar en un mismo anillo D?",o:["Uno, salvo que el fabricante certifique otra cosa","Dos, si ambos son del mismo tama\xF1o","Tres, si el anillo es de acero grueso","Los que quepan en el anillo D"],ref:W.altura},{n:2,p:"La escalera de 28 pies (8,53 m) se traslada y coloca entre\u2026",o:["Dos personas, de estatura similar","Una persona, con ayuda de la cuerda","Tres personas, con la escalera abierta","Con el cami\xF3n en marcha, sin frenar"],ref:W.escaleras},{n:2,p:"L\xEDmite de carga manual para un trabajador sin limitaciones de salud:",o:["25 kg (20 kg para una trabajadora)","50 kg, con un compa\xF1ero que ayude","40 kg para todos los trabajadores","No hay l\xEDmite si el peso se reparte"],ref:W.carga},{n:2,p:"\xBFSe pueden usar calzas para nivelar la escalera?",o:["No: se busca nivelar el sitio sin calzas","S\xED, con piedras o pedazos de madera","S\xED, con bloques de concreto, si el piso est\xE1 flojo","Solo de noche, cuando hay menos tr\xE1nsito"],ref:W.escaleras},{n:3,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable en los cruces de calle?",o:["5 m","4,5 m","6,5 m","3,5 m"],ref:W.m_altura},{n:3,p:"Radio m\xEDnimo de curvatura de un cable de fibra \xF3ptica:",o:["20 veces su di\xE1metro","5 veces su di\xE1metro","2 veces su di\xE1metro","No hay m\xEDnimo"],ref:W.m_radio},{n:3,p:"Tensi\xF3n m\xE1xima recomendada si no hay datos del fabricante:",o:["250 kgf","50 kgf","1000 kgf","Sin l\xEDmite"],ref:W.m_tension},{n:3,p:"La balona de los cables en el poste debe medir como m\xE1ximo:",o:["10 cm","50 cm","1 m","No hay l\xEDmite"],ref:W.m_balona},{n:3,p:"Altura m\xEDnima de la gaza respecto al suelo:",o:["5 m","2 m","3 m","8 m"],ref:W.m_gaza},{n:3,p:"Si en el poste no hay secundario el\xE9ctrico, la gaza va a esta distancia del neutro:",o:["80 cm","10 cm","40 cm","2 m"],ref:W.m_gaza},{n:3,p:"Di\xE1metro del rollo de reserva en redes a\xE9reas:",o:["De 40 a 50 cm","De 5 a 10 cm","Unos 2 m de di\xE1metro","El que quepa"],ref:W.m_rollo_poste},{n:3,p:"Distancia del rollo de reserva al poste:",o:["75 cm","10 cm","2 m","No hay norma"],ref:W.m_reserva},{n:3,p:"Distancia normal entre postes en redes existentes:",o:["Entre 40 y 80 m","Entre 5 y 10 m","M\xE1s de 200 m siempre","No importa"],ref:W.m_postes},{n:3,p:"En un cruce sin apoyo, \xBFcu\xE1ntas calcoman\xEDas reflectivas se instalan?",o:["Dos a cada lado de la balona del cruce","Una en el centro del poste","Ninguna, el cruce no lo necesita","Solo si es de noche o llueve"],ref:W.m_balona},{n:3,p:"Todo cable que cruce una l\xEDnea de ferrocarril se instala\u2026",o:["De forma subterr\xE1nea, sin tendido a\xE9reo","A\xE9reo a 5 m, como en un cruce de calle","A\xE9reo a 4,5 m, como en una acera","A\xE9reo, con un poste a cada lado de la v\xEDa"],ref:W.m_ferrea},{n:3,p:"La fibra n\xFAmero 1 del c\xF3digo de colores EIA/TIA-598 es:",o:["Azul","Naranja","Verde","Caf\xE9"],ref:W.m_colores},{n:3,p:"Presi\xF3n de prueba de hermeticidad del cierre de empalme:",o:["8 psi","1 psi","30 psi","No se prueba"],ref:W.m_cierre},{n:3,p:"\xBFSe puede instalar un cable sobre un transformador o l\xEDnea el\xE9ctrica?",o:["Nunca","S\xED, si es diel\xE9ctrico","S\xED, con guantes","Solo de d\xEDa"],ref:W.m_prep},{n:3,p:"Longitud del rollo de reserva dentro de un registro:",o:["De 28 a 35 m","De 2 a 5 m","100 m","No se deja reserva"],ref:W.m_reserva_sub},{n:3,p:"\xBFSe recomienda pasar fibra y cobre por el mismo ducto?",o:["No, salvo excepciones justificadas","S\xED, siempre que est\xE9n bien sujetos","Solo si son delgados y de poco peso","Es obligatorio, seg\xFAn el jefe de obra"],ref:W.m_subterranea},{n:3,p:"Al instalar un cable directamente en un ducto, adem\xE1s se deja\u2026",o:["Una gu\xEDa para el halado de cables en el futuro","El ducto sin tapar, para ventilar","Agua jabonosa para lubricar el cable","Nada m\xE1s: el ducto ya queda listo"],ref:W.m_subterranea},{n:3,p:"Al terminar el trabajo en un registro, la tapa\u2026",o:["Se coloca asegurada con sus dispositivos de seguridad","Se deja abierta un rato para ventilar el registro","Se apoya sobre el borde sin asegurar","Se guarda en el cami\xF3n hasta el d\xEDa siguiente"],ref:W.m_tapas},{n:4,p:"Antes de usar el veh\xEDculo de la cuadrilla se revisa\u2026",o:["Aceite, combustible, agua, luces, llantas, repuesto, documentos, se\xF1alizaci\xF3n y herramientas","Solo el combustible y que el motor encienda bien, sin mirar nada m\xE1s del veh\xEDculo","Solo que las luces funcionen y que el veh\xEDculo se vea limpio por fuera","Nada: eso lo hace el taller una vez al a\xF1o, y el chofer solo maneja y reporta si algo suena raro"],ref:W.vehiculos},{n:4,p:"Al estacionar el cami\xF3n en la calle para trabajar, se debe\u2026",o:["Hacerlo en un lugar seguro y se\xF1alizar","Dejarlo donde caiga, con las luces apagadas","Subirlo completo a la acera","Dejarlo en el carril, es solo un rato"],ref:W.vehiculos},{n:4,p:"\xBFSe puede usar el celular mientras se conduce el veh\xEDculo institucional?",o:["No, est\xE1 prohibido","S\xED, con altavoz","S\xED, en sem\xE1foros","Solo para mensajes de trabajo"],ref:W.vehiculos},{n:4,p:"Si sientes cansancio o fatiga mientras conduces\u2026",o:["Te detienes en un sitio seguro, descansas o cedes el volante","Aceleras un poco para llegar antes de que se haga tarde","Bajas la ventana, pones m\xFAsica y sigues manejando","Tomas caf\xE9, te estiras en el carro y contin\xFAas sin parar"],ref:W.vehiculos},{n:4,p:"Las herramientas y materiales que van en el cami\xF3n deben ir\u2026",o:["Asegurados: en un frenazo o vuelco se vuelven proyectiles","Sueltos en la cajuela para sacarlos m\xE1s r\xE1pido","En el tablero, encima de la guantera","En el asiento del copiloto, sin amarrarlos"],ref:W.vehiculos},{n:4,p:"En una v\xEDa de tr\xE1fico denso, la cuadrilla debe\u2026",o:["Planificar con m\xE1s personal y alguien que regule el tr\xE1nsito","Trabajar m\xE1s r\xE1pido para liberar la v\xEDa","Trabajar sin conos para no estorbar","Ir una sola persona, para ahorrar gastos del d\xEDa"],ref:W.cuadrillas},{n:4,p:"Para trabajar en una v\xEDa de alto tr\xE1nsito, \xBFa qui\xE9n se puede pedir colaboraci\xF3n?",o:["A las autoridades de tr\xE1nsito","A los vecinos de la cuadra","A nadie: la cuadrilla se arregla sola","A los conductores que pasan por la v\xEDa"],ref:W.poda_transito},{n:4,p:"El GS-101 define viento fuerte como una velocidad constante mayor a\u2026",o:["40 km/h","10 km/h","100 km/h","20 km/h"],ref:W.altura},{n:4,p:"Si una l\xEDnea de telecomunicaciones queda m\xE1s cerca de lo permitido de la l\xEDnea primaria (media tensi\xF3n), \xBFqu\xE9 se hace?",o:["No se trabaja y se coordina la desconexi\xF3n con la empresa el\xE9ctrica","Se trabaja con guantes de cuero y con cuidado, sin tocar nada","Se trabaja r\xE1pido, antes de que llegue la distribuidora","Se ignora el riesgo si no se ven chispas ni humo en el poste"],ref:W.mt_suspender},{n:4,p:"Umbral de \xABno soltar\xBB de la corriente el\xE9ctrica en el cuerpo:",o:["10 mA","0,5 mA","1 A","100 A"],ref:W.electrico},{n:4,p:"\xBFA partir de qu\xE9 altura un trabajo se considera muy cr\xEDtico y exige rescate en sitio?",o:["M\xE1s de 12 m","M\xE1s de 3 m","M\xE1s de 30 m","M\xE1s de 100 m"],ref:W.emergencias},{n:4,p:"Tras una ca\xEDda, \xBFse mueve a la v\xEDctima?",o:["No, salvo que sea necesario por seguridad","S\xED, siempre, llev\xE1ndola a la sombra del poste","S\xED, para sentarla y darle agua de inmediato","S\xED, para llevarla en el cami\xF3n al hospital"],ref:W.emergencias},{n:4,p:"Un accidente laboral se reporta a la jefatura\u2026",o:["De inmediato, antes de terminar la jornada","Al final de la semana, con el resto de informes","Solo si hubo hospitalizaci\xF3n o incapacidad","No se reporta si fue leve y no dej\xF3 marca"],ref:W.reportes},{n:4,p:"Distancia t\xEDpica de ca\xEDda libre que considera el GS-101 al planificar un sistema antica\xEDdas:",o:["Por lo general, 1,80 m","5 m, seg\xFAn la altura del poste","10 cm, seg\xFAn el tipo de arn\xE9s","No importa la altura del trabajo"],ref:W.altura},{n:4,p:"\xBFCon qu\xE9 viento no se debe trabajar en techos?",o:["Vientos superiores a 60 km/h","Vientos superiores a 30 km/h","Vientos superiores a 90 km/h","El viento no es un factor en techos"],ref:W.t_techo_clima},{n:4,p:"\xBFCu\xE1ndo se deben identificar las l\xE1minas pl\xE1sticas, de policarbonato o tragaluces del techo?",o:["Desde el piso, antes de subir al techo","Cuando ya est\xE1s parado sobre el techo","Solo si llueve fuerte y hay viento","Nunca: no se ven de cerca"],ref:W.t_techo_caminar},{n:4,p:"Para caminar en un techo, \xBFpor d\xF3nde se debe hacer?",o:["Por los clavadores y los lugares m\xE1s c\xE9ntricos del techo","Por el borde del techo, para ver la calle","Por cualquier l\xE1mina, si no se ve da\xF1ada","Por la l\xE1mina m\xE1s cercana a la escalera"],ref:W.t_techo_caminar},{n:4,p:"Si no hay amarre seguro para la escalera, \xBFqu\xE9 es obligatorio?",o:["Que un compa\xF1ero de trabajo sostenga la escalera","Que la escalera se amarre a una l\xE1mina del techo","Que se suba con las manos ocupadas","Nada: la escalera se apoya sola"],ref:W.t_techo_escalera},{n:4,p:"\xBFCu\xE1nto debe sobrepasar la escalera la estructura a la que se apoya?",o:["1 metro o tres pelda\xF1os","30 cent\xEDmetros","No debe sobrepasarla","3 metros"],ref:W.t_techo_escalera},{n:4,p:"Al llegar al nivel del techo, \xBFa qu\xE9 distancia m\xEDnima del borde se debe retirar la persona antes de quitarse el equipo de altura?",o:["1 metro","50 cent\xEDmetros","No hay distancia m\xEDnima","3 metros"],ref:W.t_techo_traslado},{n:5,p:"\xBFQu\xE9 distancia m\xEDnima se exige entre un conductor de telecomunicaciones y una l\xEDnea primaria de media tensi\xF3n?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:W.mt_suspender,e:"Si la l\xEDnea de telecomunicaciones se sospecha a menos de 80 cm de la primaria de media tensi\xF3n, no se realiza ning\xFAn trabajo (GS-101 \xA75.6.9 f)."},{n:5,p:"\xBFQu\xE9 distancia se mantiene entre el conductor telef\xF3nico y el secundario el\xE9ctrico?",o:["0,40 m","0,55 m","0,70 m","2,50 m"],ref:W.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el secundario es de 40 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"\xBFY entre el conductor telef\xF3nico y el neutro?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:W.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el neutro es de 80 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"Una l\xEDnea de telecomunicaciones est\xE1 por encima o al mismo nivel que el secundario. \xBFQu\xE9 se hace?",o:["No se trabaja hasta coordinar con la distribuidora la desconexi\xF3n del circuito durante el trabajo","Se trabaja con cuidado, sin tocar el secundario ni el neutro, y se avisa al jefe de cuadrilla","Se sube con guantes de cuero y casco bien puesto, con la l\xEDnea de vida anclada al poste","Se trabaja de noche, cuando hay menos tr\xE1nsito y menos gente cerca del poste"],ref:W.mt_suspender,e:"GS-101 \xA75.6.9 f): en ese caso se coordina con la empresa de distribuci\xF3n la desconexi\xF3n del circuito durante el tiempo del trabajo."},{n:5,p:"Una persona no calificada quiere cruzar el l\xEDmite de aproximaci\xF3n de una l\xEDnea energizada. \xBFPuede?",o:["No, salvo acompa\xF1ada de una persona calificada","S\xED, si lleva guantes de cuero y casco","S\xED, si el trabajo es corto y se hace r\xE1pido","S\xED, si lleva anteojos de seguridad"],ref:W.mt_frontera,e:"Las personas no calificadas no cruzan ese l\xEDmite a menos que est\xE9n acompa\xF1adas por una persona calificada (GS-101 \xA75.2 w)."},{n:5,p:"Toda l\xEDnea el\xE9ctrica cerca del trabajo se considera\u2026",o:["Activa, hasta verificar lo contrario con la distribuidora","Desactivada si no hay ruido ni chispas en el poste","Activa solo si hay chispas o se oye zumbido","Inactiva si est\xE1 en el poste de telecomunicaciones"],ref:W.mt_activa,e:"Todas las l\xEDneas el\xE9ctricas se consideran activas. Si hace falta verificar el estado de tensi\xF3n, se coordina con la distribuidora (GS-101 \xA75.6.9 h)."},{n:4,p:"\xBFQui\xE9n debe verificar y asegurar el ascenso al poste antes de iniciar la actividad?",o:["El encargado de cuadrilla","El t\xE9cnico que sube","Cada trabajador por separado","Nadie: el ascenso se revisa al terminar"],ref:Ti.inspeccion},{n:4,p:"\xBFQu\xE9 incluye la inspecci\xF3n de poster\xEDa antes del ascenso?",o:["El poste anterior, posterior, local y el tendido entre postes","Solo el poste donde se va a subir y el que tiene al lado","Solo el tendido entre los dos postes m\xE1s cercanos a la casa","Solo los postes de madera que se ven desde la calle"],ref:Ti.inspeccion},{n:4,p:"Si se evidencia alguna de las fallas del \xA75.6.3, \xBFqu\xE9 se hace?",o:["No se realizar\xE1 el trabajo y se realizar\xE1 el reporte a la jefatura de manera inmediata","Se sube con m\xE1s cuidado, revisando cada pelda\xF1o del poste","Se reporta al terminar la jornada, con un informe escrito y firmado","Se apuntala el poste con un puntal de madera y luego se sube"],ref:Ti.inspeccion},{n:4,p:"En un poste de madera, \xBFqu\xE9 da\xF1o por fisuras, quemado o podrido no debe superar la fuente?",o:["Una tercera parte del di\xE1metro","La mitad del di\xE1metro","Cualquier fisura es aceptable","Un cuarto del di\xE1metro"],ref:Ti.inspeccion},{n:4,p:"En un poste de metal, \xBFqu\xE9 perforaciones son falla?",o:["Perforaciones superiores a una tercera parte del di\xE1metro","Cuando hay m\xE1s de una, aunque sean peque\xF1as","Cuando se ven desde el suelo, a simple vista","Nunca, si el poste sigue en pie"],ref:Ti.inspeccion},{n:6,p:"\xBFQu\xE9 equipo de protecci\xF3n exige el GS-101 para la poda de \xE1rboles?",o:["Careta, lentes, protecci\xF3n auditiva, cuerdas de seguridad, casco de cuatro puntos con barbiquejo, guantes para riesgos mec\xE1nicos, ropa y calzado institucionales","Solo casco y guantes de cuero","Arn\xE9s de cuerpo completo y guantes diel\xE9ctricos","Solo lentes: el resto lo decide el encargado"],ref:W.poda_epp},{n:6,p:"\xBFPuede un trabajador subirse a un \xE1rbol para cortar una rama?",o:["No: el trabajador no se sube a un \xE1rbol","S\xED, con cuerdas de seguridad y un compa\xF1ero abajo","S\xED, si la rama es peque\xF1a","S\xED, con arn\xE9s de cuerpo completo"],ref:W.poda_subir},{n:6,p:"Una rama est\xE1 sobre una l\xEDnea energizada. \xBFQu\xE9 se hace?",o:["No se corta: se informa al Ejecutor del Proceso, que coordina con SST y el CLOR","Se corta despacio, con cuidado, sin tocar el cable","Se corta cuando la l\xEDnea se vea sin chispas","Se corta de noche, cuando hay menos gente"],ref:W.poda_linea},{n:6,p:"\xBFQu\xE9 se revisa antes de cada corte de rama?",o:["La distancia a lo energizado, la velocidad y direcci\xF3n del viento y la vegetaci\xF3n que puede interferir con la ca\xEDda","Solo que la motosierra arranque al primer jal\xF3n","Solo que el compa\xF1ero tenga el casco puesto","Nada: la experiencia dice cu\xE1ndo se corta"],ref:W.poda_viento},{n:6,p:"Antes de operar una motosierra, \xBFqu\xE9 condici\xF3n debe cumplir quien la opera?",o:["No estar cansado ni haber tomado medicamentos que alteren la conciencia","Tener un a\xF1o de experiencia, aunque est\xE9 cansado","Haber tomado caf\xE9 para estar alerta","Operarla solo si el supervisor no est\xE1 presente"],ref:W.poda_cansancio},{n:6,p:"\xBFCu\xE1ntos miembros, como m\xEDnimo, forman una cuadrilla de poda de \xE1rboles?",o:["Dos","Uno, si tiene experiencia","Uno, si el \xE1rbol es peque\xF1o","Tres, con un supervisor"],ref:W.poda_cuadrilla},{n:7,p:"\xBFCu\xE1ndo debe usarse el barbiquejo del casco?",o:["Cuando exista posibilidad de desprendimiento del casco por fuertes vientos, espacios confinados, postura corporal y trabajos en altura","Solo cuando el casco es nuevo","Nunca, porque incomoda al trabajar","Solo si el trabajo es de d\xEDa"],ref:W.epp},{n:7,p:"Los rollos de reserva en la galer\xEDa de cable deben tener una longitud\u2026",o:["Entre 20 a 25 m, de acuerdo con las condiciones del sitio","Entre 28 y 35 m, como en los registros","Entre 2 y 5 m","De 100 m siempre"],ref:W.gal_reserva},{n:7,p:"Los rollos de reserva en la galer\xEDa se colocan\u2026",o:["En la pared del lado opuesto al MDF, a la mayor altura posible, partiendo desde la pared final","En la pared del MDF, pegados a los ductos","En el piso, para que queden m\xE1s seguros","En cualquier pared, si hay espacio"],ref:W.gal_reserva},{n:7,p:"Si el rollo de reserva va en la pared del MDF, \xBFcu\xE1nto espacio se deja libre desde la salida de los ductos?",o:["50 cm hacia el fondo de la galer\xEDa","20 cm","1,20 m","No hace falta espacio"],ref:W.gal_50cm},{n:7,p:"\xBFCon qu\xE9 se fija el cable en las galer\xEDas?",o:["Con pletinas peque\xF1as (de 20 cm) y fajas pl\xE1sticas","Con clavos de madera en el muro","Con cinta adhesiva, sin pletinas","Con el cable suelto, para que se mueva"],ref:W.gal_pletinas},{n:7,p:"\xBFCu\xE1ntas placas de identificaci\xF3n se colocan en un rollo de reserva?",o:["Dos placas de identificaci\xF3n","Una sola, en el centro del rollo","Cuatro, dos a cada lado","Ninguna: el rollo no se identifica"],ref:W.gal_placas},{n:8,p:"\xBFQu\xE9 debe tener el personal t\xE9cnico para atender una emergencia en altura?",o:["Botiqu\xEDn b\xE1sico de primeros auxilios y equipos para rescate vertical: cuerdas de seguridad, mosquetones y pull-lift","Solo el botiqu\xEDn del cami\xF3n, si queda lugar","Solo las cuerdas de la escalera, sin mosquetones","Nada: la ayuda llega sola"],ref:W.eri_antes},{n:8,p:"\xBFCu\xE1ndo un trabajo en altura se considera muy cr\xEDtico?",o:["Cuando pasa de 12 metros de altura","Cuando pasa de 3 metros de altura","Cuando hay m\xE1s de dos trabajadores","Cuando llueve o hay viento"],ref:W.eri_criticas},{n:8,p:"Durante un accidente en altura, \xBFqu\xE9 se hace con el \xE1rea y con los trabajos?",o:["Se despeja completamente el \xE1rea y se suspenden de inmediato las actividades","Se sigue trabajando mientras llega la ayuda","Se despeja solo la mitad del \xE1rea, para no atrasar la labor","Se avisa a la cuadrilla de al lado y se sigue trabajando"],ref:W.eri_despejar},{n:8,p:"Durante una emergencia en altura, \xBFc\xF3mo se pide la ayuda de los cuerpos de emergencia?",o:["Por la l\xEDnea telef\xF3nica 9-1-1","Con un mensaje en el grupo de la cuadrilla","Esperando a que llegue la jefatura","Llevando a la v\xEDctima al hospital en la camioneta"],ref:W.eri_911},{n:8,p:"\xBFQu\xE9 maniobra de rescate se puede hacer si la cuadrilla no la conoce?",o:["Ninguna: no se hacen maniobras de rescate de las que no se tenga conocimiento previo","La que parezca m\xE1s r\xE1pida","Cualquiera, si son dos personas en el sitio","La que indique el compa\xF1ero que mira desde abajo"],ref:W.eri_911},{n:8,p:"Durante una emergencia, \xBFqui\xE9n puede dar informaci\xF3n a personas u organizaciones externas?",o:["Solo la direcci\xF3n o el personal autorizado, mediante comunicados oficiales","Cualquier trabajador de la cuadrilla","El compa\xF1ero que est\xE9 m\xE1s cerca de la prensa","Cualquier persona que pregunte, si dice ser familiar"],ref:W.eri_terceros},{n:9,p:"\xBFQu\xE9 es manejar a la defensiva?",o:["Conducir evitando accidentes a pesar de las acciones incorrectas de los dem\xE1s y de las condiciones adversas","Conducir r\xE1pido para pasar menos tiempo en la carretera","Responderles a los dem\xE1s conductores para que respeten","Manejar solo de d\xEDa y con buen clima"],ref:W.sv_defensivo},{n:9,p:"\xBFCu\xE1les son los cinco elementos del manejo defensivo?",o:["Conocimiento, estar alerta, previsi\xF3n, juicio y habilidad","Velocidad, reflejos, fuerza, suerte y experiencia","Licencia, seguro, marchamo, revisi\xF3n t\xE9cnica y placa","Prisa, frustraci\xF3n, cansancio, complacencia y descuido"],ref:W.sv_defensivo},{n:9,p:"\xBFQu\xE9 porcentaje de los accidentes viales tiene origen en el factor humano?",o:["El 90 %","El 10 %","La mitad","El 25 %"],ref:W.sv_humano},{n:9,p:"\xBFCu\xE1les son los cuatro estados que producen errores al conducir?",o:["Prisa, frustraci\xF3n, cansancio y complacencia","Lluvia, neblina, derrumbes y huecos","Alcohol, drogas, f\xE1rmacos y caf\xE9","Velocidad, curvas, pendientes y peraltes"],ref:W.sv_estados},{n:9,p:"La complacencia al volante es\u2026",o:["El exceso de confianza que lleva a relajar la atenci\xF3n","La falta de fuerzas despu\xE9s de un esfuerzo o por no descansar","La respuesta emocional ante un hecho no gestionado","La rapidez con que se hace una cosa"],ref:W.sv_estados},{n:9,p:"\xBFCada cu\xE1nto se revisan los nueve m\xEDnimos de seguridad vehicular?",o:["Todos los d\xEDas antes de salir con el automotor, siempre que aplique","Una vez al mes, en el taller","Solo cuando el veh\xEDculo hace un ruido raro","Una vez al a\xF1o, con la revisi\xF3n t\xE9cnica"],ref:W.sv_minimos},{n:9,p:"\xBFQu\xE9 dispositivos de advertencia deben estar en buen estado?",o:["Luces altas y bajas, de freno e intermitentes, la bocina y dos juegos de tri\xE1ngulos","Solo la bocina","Solo las luces delanteras","El radio y el aire acondicionado"],ref:W.sv_minimos},{n:9,p:"Seg\xFAn la capacitaci\xF3n, \xBFd\xF3nde se recomienda usar las llantas de recauche?",o:["Solo en la parte trasera del automotor","Solo adelante","En las cuatro posiciones","\xDAnicamente como repuesto"],ref:W.sv_minimos},{n:9,p:"\xBFQui\xE9n puede conducir un veh\xEDculo institucional?",o:["El funcionario que cuenta con los permisos de conducir del ICE","Cualquier compa\xF1ero con licencia","El primero que llegue al plantel","El que tenga m\xE1s experiencia, aunque no tenga el permiso"],ref:W.sv_permiso},{n:10,p:"Al empezar a llover, \xBFpor qu\xE9 se pone resbalosa la calle?",o:["Se forma una especie de jab\xF3n con los residuos de tierra, grasa y gasolina","Porque el agua enfr\xEDa el asfalto","Porque las llantas se desinflan con el agua","No cambia nada: el asfalto no resbala"],ref:W.sv_lluvia},{n:10,p:"En caminos con grava, arenosos o mojados, \xBFqu\xE9 pide el GS-101?",o:["Bajar la velocidad y manejar con cuidado","Subir la velocidad para no quedarse pegado","Frenar fuerte en cada curva","Ir pegado al veh\xEDculo de adelante para seguir su ruta"],ref:W.sv_mojado},{n:10,p:"Llueve tan fuerte que la falta de visibilidad es excesiva. \xBFQu\xE9 se hace?",o:["Detener el veh\xEDculo a un costado de la carretera y esperar que pase la tormenta","Seguir igual, con las luces altas","Seguir de cerca al veh\xEDculo de adelante","Acelerar para salir pronto de la tormenta"],ref:W.sv_visibilidad},{n:10,p:"\xBFPor qu\xE9 la neblina es una de las peores condiciones para conducir?",o:["La habilidad del conductor no puede mejorar la visibilidad ni permitirle aumentar la velocidad","Solo afecta a las motocicletas","Hace que el motor pierda potencia","No es peligrosa si se conoce el camino"],ref:W.sv_lluvia},{n:10,p:"Vas acompa\xF1ado y sientes cansancio al volante. \xBFQu\xE9 indica el GS-101?",o:["Detenerte en un sitio seguro, bajarte, caminar y ceder la conducci\xF3n al compa\xF1ero","Pedirle al compa\xF1ero que te hable para no dormirte","Subir el volumen del radio","Abrir la ventana y seguir hasta llegar"],ref:W.sv_fatiga},{n:10,p:"Con una dosis alta, el alcohol provoca\u2026",o:["Dificultad en el habla, incoordinaci\xF3n, juicio alterado y falta de control emocional","Mejores reflejos para manejar","M\xE1s atenci\xF3n en la carretera","Solo sue\xF1o, sin otros efectos"],ref:W.sv_sustancias},{n:10,p:"Observas o causas un da\xF1o al veh\xEDculo. \xBFQu\xE9 haces?",o:["Lo reportas: no se oculta, puede producir un accidente","Lo arreglas t\xFA en la casa","Lo callas si es peque\xF1o","Esperas a que otro compa\xF1ero lo note"],ref:W.sv_danos},{n:11,p:"\xBFCu\xE1ndo se hace el ATS (an\xE1lisis de trabajo seguro)?",o:["Antes de empezar las labores de cada d\xEDa, con toda la cuadrilla","Una vez por semana, solo el encargado","Al terminar la jornada, para el informe","Solo cuando ya hubo un accidente"],ref:W.gs31_ats},{n:11,p:"A media ma\xF1ana cambia el personal o llega otro equipo. \xBFQu\xE9 pide el GS-31?",o:["Aplicar de nuevo el ATS antes de seguir","Nada: el ATS de la ma\xF1ana sigue valiendo","Anotarlo en el informe del d\xEDa siguiente","Que el compa\xF1ero nuevo firme la pizarra sin leerla"],ref:W.gs31_cambios},{n:11,p:"Una tarea cr\xEDtica tiene un grado de criticidad (GC) de 8 o m\xE1s. \xBFQu\xE9 significa?",o:["Criticidad alta: se atiende primero","Criticidad baja: puede esperar","Criticidad moderada","Nada: el GC es solo un tr\xE1mite"],ref:W.gs31_criticidad},{n:11,p:"En la pizarra del ATS aparece un factor de muerte. \xBFQu\xE9 se hace?",o:["Se revisan en conjunto las acciones a implementar","Nada: es solo un dato de la pizarra","Lo resuelve el t\xE9cnico m\xE1s nuevo","Se anota y se revisa al d\xEDa siguiente"],ref:W.ats_muerte},{n:15,p:"Detectas una anomal\xEDa en el trabajo de tu cuadrilla. \xBFA qui\xE9n se lo informas?",o:["Al coordinador de cuadrilla y/o a SST","A nadie, si ya lo corregiste t\xFA","Solo al cliente, al terminar la obra","A la persona que lo hizo, para que lo anote despu\xE9s"],ref:W.rec_anomalia},{n:15,p:"Un compa\xF1ero sufre un accidente. \xBFQu\xE9 formulario se usa y cu\xE1ndo se avisa a la jefatura?",o:["F07-GS-52 Aviso inmediato, antes de terminar la jornada","F06-GS-52, la pr\xF3xima semana","F01-GS-52, al d\xEDa siguiente","Ning\xFAn formulario: basta con avisar en la charla"],ref:W.rec_accidente},{n:15,p:"Hubo un casi incidente y nadie se lastim\xF3. \xBFQu\xE9 formulario se usa?",o:["F06-GS-52 (o F01-GS-52 si fue grave)","F07-GS-52, el aviso inmediato","Ninguno, porque no hubo lesi\xF3n","El F02-CSCON-SST-00-25 con la firma del compa\xF1ero"],ref:W.rec_cuasi},{n:15,p:"Un compa\xF1ero incumple una regla de SST por primera vez, con riesgo bajo. \xBFQu\xE9 se hace?",o:["Retroalimentaci\xF3n positiva y correctiva, registro en el F02-CSCON-SST-00-25 con su firma, y aviso a la jefatura inmediata","Solo se le llama la atenci\xF3n en privado, sin registro","Se guarda para el informe del a\xF1o siguiente","Se le sanciona de inmediato, sin escuchar su versi\xF3n"],ref:W.rec_liderazgo},{n:15,p:"Hay un peligro inminente para las personas durante una tarea. \xBFQu\xE9 se hace?",o:["Se interrumpe la actividad","Se termina la tarea y luego se corrige","Se sigue con m\xE1s cuidado","Se avisa al final de la semana"],ref:W.rec_inminente},{n:16,p:"\xBFC\xF3mo se entra a una planta solar?",o:["Con autorizaci\xF3n, coordinado con el encargado de la planta","Entrando primero y avisando despu\xE9s","Por la cerca, si el port\xF3n est\xE1 cerrado","Como diga el primero que llegue"],ref:W.demo_generacion_autorizacion},{n:16,p:"\xBFCu\xE1ndo produce electricidad un panel solar?",o:["Mientras le da la luz: por eso se trata como energizado","Solo al mediod\xEDa","Solo si el inversor est\xE1 apagado","Nunca, si el panel est\xE1 sucio"],ref:W.demo_generacion_energizado},{n:16,p:"\xBFSe puede pisar o apoyarse en un panel para ver mejor?",o:["No: no se pisa ni se apoya nadie en los paneles","S\xED, si el panel est\xE1 limpio","S\xED, si la fila es corta","S\xED, con una tabla debajo"],ref:W.demo_generacion_no_pisar},{n:16,p:"\xBFQui\xE9n manipula las conexiones y los inversores de la planta?",o:["Solo personal calificado, seg\xFAn el procedimiento de la planta","Cualquier trabajador de la cuadrilla","Quien llegue primero a la caseta","Quien tenga la llave del port\xF3n"],ref:W.demo_generacion_conexiones},{n:16,p:"Ves un cable suelto y pelado en el camino de la planta. \xBFQu\xE9 haces?",o:["No lo tocas: lo marcas y lo reportas","Lo levantas con la mano para pasar","Lo cortas con la herramienta","Lo envuelves con cinta y sigues"],ref:W.demo_generacion_energizado},{n:16,p:"Llega una tormenta el\xE9ctrica mientras trabajan al aire libre. \xBFQu\xE9 indica el GS-101?",o:["Suspender la actividad por las condiciones del clima","Terminar la fila antes de bajar","Seguir trabajando: la tormenta todav\xEDa no ha llegado","Quedarse donde est\xE1n, a esperar"],ref:W.sol_clima},{n:16,p:"Encuentras un panel con el vidrio roto. \xBFQu\xE9 haces?",o:["Lo marcas y lo reportas al encargado de la planta, sin tocarlo","Lo cambias t\xFA, sin avisar","Lo tapas con cinta para la visita","Lo dejas para la pr\xF3xima visita sin avisar"],ref:W.demo_generacion_danos},{n:16,p:"Hace mucho sol y llevan un rato limpiando. \xBFQu\xE9 se hace?",o:["Tomar agua y descansar a la sombra con frecuencia","Seguir sin parar: el agua se toma al final","Quitarse el casco para refrescarse","Tomar solo caf\xE9, para no sudar"],ref:W.demo_generacion_calor},{n:13,p:"\xBFQu\xE9 sirve de apoyo a la escalera a medio vano, si no hay poste?",o:["El veh\xEDculo: la escalera se amarra a \xE9l","Nada: la escalera se apoya sola en el suelo","Solo un compa\xF1ero que la sostenga, sin amarrarla","El peso del trabajador sobre ella"],ref:W.mv_apoyo},{n:13,p:"\xBFEn cu\xE1ntos puntos se amarra la escalera a medio vano?",o:["En dos: al pant\xF3grafo y al eje de una llanta","En uno: basta con el pant\xF3grafo","En tres: se suma la cabina","No se amarra: el peso de la escalera basta"],ref:W.mv_dos_puntos},{n:13,p:"\xBFQu\xE9 nudo da la tensi\xF3n en el amarre a medio vano?",o:["Nudo ocho aplicado","Nudo alondra","Nudo gaza simple","Nudo ocho en l\xEDnea"],ref:W.mv_nudos},{n:13,p:"\xBFC\xF3mo termina el amarre a medio vano?",o:["Con pata de chancho (nudo ballestrinque)","Con un nudo alondra, sin asegurarlo","Con una gaza simple, suelta","Dejando la cuerda sin amarrar para ajustar despu\xE9s"],ref:W.mv_nudos},{n:13,p:"\xBFCon qu\xE9 se sube por una escalera a medio vano?",o:["Con la cuerda de seguridad sujetada a la escalera","Con la cuerda en el hombro, sin sujetarla","Con las manos ocupadas por herramientas","Sin cuerda, si la escalera es corta"],ref:W.mv_subida},{n:13,p:"Una escalera de 24 pies (7,32 m): \xBFhasta qu\xE9 altura de uso sirve?",o:["6,42 m","7,32 m","7,63 m","5,30 m"],ref:W.mv_tabla2},{n:13,p:"\xBFHasta qu\xE9 pelda\xF1o de la escalera se puede trabajar?",o:["Hasta el que alcanza el trabajo, sin llegar a los tres superiores","Hasta el \xFAltimo, para alcanzar mejor","En el tercero de arriba, si hace falta"],ref:W.mv_tres},{n:14,p:"\xBFQu\xE9 abertura m\xEDnima debe tener una cala para instalar el cable?",o:["1,5 m de largo por 1 m de ancho, como m\xEDnimo","1 m de largo por 1 m de ancho","1,5 m de largo por 0,5 m de ancho","0,8 m de largo por 0,8 m de ancho"],ref:W.cala_abertura},{n:14,p:"Si la abertura entre los extremos del ducto mide 40 cm, \xBFcu\xE1nto debe medir la pieza de PVC de reparaci\xF3n?",o:["90 cm: la abertura m\xE1s 50 cm","40 cm: lo mismo que la abertura","50 cm: solo el sobrante","1,20 m: el triple de la abertura"],ref:W.cala_pieza},{n:14,p:"\xBFHacia d\xF3nde queda la abertura del corte longitudinal de la pieza de reparaci\xF3n?",o:["Hacia arriba","Hacia abajo, contra el ducto","Hacia un costado","No importa la posici\xF3n"],ref:W.cala_ranura},{n:14,p:"\xBFCu\xE1ntas amarras de cinta met\xE1lica o tipo gaza llevan la reparaci\xF3n, y d\xF3nde?",o:["Tres: una en cada extremo y una en el centro","Dos: una en cada extremo","Cuatro: una cada 25 cm","Una sola, en el centro"],ref:W.cala_amarras},{n:14,p:"El preformado mide 75 cm o menos. \xBFA qu\xE9 distancia del poste va el cierre de empalme?",o:["75 cm","1,5 m","30 cm","2 m"],ref:W.cala_empalme},{n:14,p:"En el relleno de la cala, \xBFqu\xE9 capa va justo debajo del lastre?",o:["El material de la excavaci\xF3n, compactado al 95 % del Proctor","El tobacemento","El asfalto","La arena suelta"],ref:W.cala_capas},{n:14,p:"En un tramo recto de 1 km o m\xE1s, \xBFcada cu\xE1nto se ponen las anclas de seguridad?",o:["Cada 500 m","Cada 100 m","Cada 1 km, una sola","Solo en el poste m\xE1s alto"],ref:W.cala_anclas},{n:14,p:"\xBFA qu\xE9 distancia del poste se coloca cada ancla de seguridad?",o:["La mitad de la altura del poste, medida del herraje a la base","Un metro, sin importar la altura","Lo mismo que la altura del poste","Cinco metros, siempre"],ref:W.cala_ancla_distancia},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se le pregunta al cliente?",o:["C\xF3mo est\xE1n el cielorraso y la estructura, y si ha visto cables, goteras o avispas","Solo a qu\xE9 hora puede empezar el trabajo","Nada: si desde abajo se ve bien, se sube","Si puede pagar un trabajo extra"],ref:W.cr_cliente},{n:12,p:"Hay un cable el\xE9ctrico expuesto en el cielorraso. \xBFQu\xE9 se le pide al cliente?",o:["Que desconecte la electricidad antes de subir","Nada: se sube con cuidado, sin tocarlo","Que deje el cable al aire para revisarlo mejor","Que avise cuando el cable se caliente"],ref:W.cr_electrico},{n:12,p:"Si no es posible desconectar la electricidad del cielorraso, \xBFcon qu\xE9 se sube?",o:["Con guantes diel\xE9ctricos, despu\xE9s de revisar la zona a trabajar","Con guantes de cuero","Sin guantes, con cuidado","Con cualquier guante de trabajo"],ref:W.cr_electrico},{n:12,p:"Para trabajar en un cielorraso, \xBFqu\xE9 lleva el casco?",o:["Barbiquejo y linterna","Solo el barbiquejo, sin linterna","Solo la linterna, sin barbiquejo","Nada: el casco se usa solo en la calle"],ref:W.cr_epp},{n:12,p:"\xBFQu\xE9 se revisa desde el suelo antes de subir al cielorraso?",o:["Que no haya colmenas de avispas o similares","Solo la hora del d\xEDa","Que la escalera sea de aluminio","Nada: eso se revisa al terminar"],ref:W.cr_avispas},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se valora?",o:["Si una extensi\xF3n de fibra permite evitar subir","Si el cliente tiene caf\xE9","Cu\xE1nto pesa el trabajador","Si el d\xEDa est\xE1 soleado"],ref:W.cr_extension},{n:12,p:"La estructura del cielorraso debe observarse sin\u2026",o:["Corrosi\xF3n avanzada o madera descompuesta, y estable","Pintura nueva","R\xF3tulos de la oficina","Cables de colores"],ref:W.cr_estructura},{n:12,p:"Una escalera de abrir (tipo A) debe ser de\u2026",o:["Fibra de vidrio","Aluminio, siempre","Madera, sin importar el lugar","Cualquier material, si est\xE1 pintada"],ref:W.cr_escalera_tipo},{n:17,p:"En una obra, \xBFc\xF3mo deben estar los tableros y las cajas el\xE9ctricas?",o:["Tapados, identificados y cerrados","Abiertos, para revisar r\xE1pido los interruptores","Cerrados, aunque no tengan identificaci\xF3n","Como los dej\xF3 el \xFAltimo que los us\xF3"],ref:W.el_tablero},{n:17,p:"\xBFQu\xE9 necesita un medidor el\xE9ctrico provisional en la obra?",o:["Base estable y protecci\xF3n del agua","Solo un r\xF3tulo con el nombre de la obra","Estar en el suelo, donde nadie lo golpee","Nada: es provisional"],ref:W.el_medidor},{n:17,p:"\xBFDe qu\xE9 se protegen los conductores el\xE9ctricos en una obra?",o:["De los da\xF1os mec\xE1nicos: maquinaria, veh\xEDculos, agua y qu\xEDmicos","Solo del sol, con pintura","De nada: se cambian cuando se da\xF1an","Solo de la lluvia, con cinta aislante"],ref:W.el_conductores},{n:17,p:"\xBFCon qui\xE9n se aplica la lista de verificaci\xF3n del Anexo C del C\xF3digo El\xE9ctrico?",o:["En conjunto con un t\xE9cnico el\xE9ctrico","Solo, desde la oficina","Con el primer pe\xF3n que est\xE9 libre","Con el cliente, al entregar la obra"],ref:W.el_anexo_c},{n:17,p:"\xBFCu\xE1l de estos es un acto inseguro con electricidad?",o:["Intervenir sin autorizaci\xF3n","Usar el EPP diel\xE9ctrico","Reportar un enchufe deteriorado","Mantener el tablero cerrado"],ref:W.el_autorizacion},{n:17,p:"Con la piel h\xFAmeda o sudada, la resistencia del cuerpo a la corriente\u2026",o:["Baja","Sube","No cambia","Depende solo del calzado"],ref:W.el_mojado},{n:17,p:"\xBFQu\xE9 factores influyen en la magnitud de un incidente el\xE9ctrico?",o:["Intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria","Solo el color del cable","Solo la hora del d\xEDa","La marca del tablero y del medidor"],ref:W.el_factores},{n:17,p:"Seg\xFAn el Anexo B, una instalaci\xF3n es de peligro inminente o alto riesgo cuando\u2026",o:["Carece de protecci\xF3n frente al contacto con partes energizadas o el cortocircuito","Tiene m\xE1s de un tablero","Es provisional, aunque cumpla con todo","Alguien ya se lastim\xF3 en ella"],ref:W.el_anexo_b}],wS={registro:{titulo:"Una persona camina mirando el celular hacia el registro abierto",opciones:[{t:"STOP: Andr\xE9s la detiene y la gu\xEDa por fuera del \xE1rea se\xF1alizada",ok:!0},{t:"Le gritamos desde adentro del registro",ok:!1},{t:"Seguimos: los conos ya est\xE1n puestos",ok:!1},{t:"Ponemos la tapa encima con el compa\xF1ero adentro",ok:!1}],explicacion:"Un registro abierto es un hueco en plena acera. El per\xEDmetro se asegura con se\xF1alizaci\xF3n vial y peatonal y, si alguien entra al \xE1rea, se detiene la labor y se le gu\xEDa fuera.",ref:W.ev_registro,consecuencia:"La persona tropez\xF3 con el borde del registro y por poco cae adentro, sobre tu compa\xF1ero."},impaciente:{titulo:"Un conductor impaciente ignora el ALTO del banderero",opciones:[{t:"STOP: todos fuera de la calzada, dejamos pasar al veh\xEDculo y luego retomamos el control del tr\xE1nsito",ok:!0},{t:"Andr\xE9s se planta frente al auto para obligarlo a frenar",ok:!1},{t:"Seguimos pasando el cable: ya va a frenar",ok:!1},{t:"Le gritamos y le golpeamos el auto cuando pase",ok:!1}],explicacion:"Ninguna paleta detiene a un auto que no quiere detenerse. Ante un conductor que no respeta la se\xF1al, se evacua la calzada y nadie se le atraviesa; despu\xE9s se retoma el control (y se reporta si es necesario).",ref:W.ev_impaciente,consecuencia:"El auto pas\xF3 a cent\xEDmetros de Andr\xE9s, que estaba en medio de la calzada con la gu\xEDa del cable. La paleta ALTO no es un escudo."},peaton:{titulo:"Una persona entr\xF3 al \xE1rea se\xF1alizada",opciones:[{t:"Detengo la labor y pido a Andr\xE9s que gu\xEDe a la persona fuera del \xE1rea",ok:!0},{t:"Sigo tensando: ya casi termino",ok:!1},{t:"Le grito desde arriba que se aleje, sin dejar de trabajar",ok:!1},{t:"Bajo r\xE1pido por la escalera para sacarla yo",ok:!1}],explicacion:"El \xE1rea restringida protege a terceros de la ca\xEDda de herramientas o materiales. Se detiene la labor hasta despejarla.",ref:W.demarcacion,consecuencia:"Un herraje se solt\xF3 y cay\xF3 a medio metro de la persona. Nadie sali\xF3 herido, pero pudo terminar en tragedia."},companero:{titulo:"Andr\xE9s quiere subir a la escalera para ayudarte",opciones:[{t:"Lo detengo: solo un trabajador en la escalera; que suba el material con la cuerda",ok:!0},{t:"Que suba, son solo unos segundos",ok:!1},{t:"Que suba hasta la mitad y desde ah\xED me pase el herraje",ok:!1},{t:"Que me lance el herraje desde abajo",ok:!1}],explicacion:"Sobre la escalera port\xE1til se permite un solo trabajador. Los materiales se suben con bolso, mecate o cuerda.",ref:W.escaleras,consecuencia:"Con dos personas encima, la escalera se torci\xF3 en el amarre medio. Los dos quedaron colgando de la l\xEDnea de vida."},vehiculo:{titulo:"Un veh\xEDculo se acerca r\xE1pido al \xE1rea de trabajo",opciones:[{t:"Detengo la labor; Andr\xE9s regula el paso con la se\xF1alizaci\xF3n y esperamos a que pase",ok:!0},{t:"Sigo trabajando: los conos son suficientes",ok:!1},{t:"Bajo corriendo a quitar los conos del camino",ok:!1},{t:"Le hago se\xF1as desde la escalera sin dejar de trabajar",ok:!1}],explicacion:"La se\xF1alizaci\xF3n vial protege a la cuadrilla. Si un veh\xEDculo no respeta el \xE1rea, se detiene la labor y se regula el tr\xE1nsito antes de continuar.",ref:W.demarcacion,consecuencia:"El auto pas\xF3 rozando la escalera: la sacudida casi te tira. La se\xF1alizaci\xF3n sola no basta si nadie vigila el tr\xE1nsito."},tormenta:{titulo:"La lluvia se volvi\xF3 torrencial y hay rayer\xEDa",opciones:[{t:"Suspendo: aseguro herramientas, desciendo con tres puntos de apoyo y espero a que pase",ok:!0},{t:"Termino r\xE1pido el tensado antes de bajar",ok:!1},{t:"Me quedo arriba esperando a que escampe",ok:!1},{t:"Me quito los guantes mojados para tener m\xE1s agarre",ok:!1}],explicacion:"Se proh\xEDbe el trabajo en altura con tormenta el\xE9ctrica, lluvia torrencial o vientos de 60 km/h o m\xE1s.",ref:W.altura,consecuencia:"Un rayo cay\xF3 a dos cuadras. Con el agua, los pelda\xF1os quedaron resbalosos y perdiste un apoyo al bajar."},viento:{titulo:"Una r\xE1faga supera los 60 km/h mientras la cuadrilla trabaja en el techo",opciones:[{t:"Suspender la labor y bajar del techo, anclados a la l\xEDnea vertical de la escalera",ok:!0},{t:"Seguir: la r\xE1faga pasa en unos segundos",ok:!1},{t:"Seguir agachados, sin soltar el trabajo",ok:!1},{t:"Bajar de un salto para no esperar la escalera",ok:!1}],consecuencia:"Con vientos superiores a 60 km/h no se trabaja en techos.",explicacion:"No se debe trabajar en techos con vientos superiores a 60 km/h. Se suspende la labor y se baja de forma segura.",ref:W.t_techo_clima},presion:{titulo:"Andr\xE9s quiere subir ya: \xABel poste local se ve bien\xBB",opciones:[{t:"Seguimos: se inspeccionan el poste anterior, el local, el posterior y el tendido antes de subir",ok:!0},{t:"Subimos: el poste local est\xE1 bien",ok:!1},{t:"Que suba Andr\xE9s a revisar, es r\xE1pido",ok:!1},{t:"Subimos y revisamos los dem\xE1s postes despu\xE9s",ok:!1}],explicacion:"El encargado de cuadrilla verifica y asegura el ascenso al poste antes de iniciar la actividad. La inspecci\xF3n incluye el poste anterior, el posterior, el local y el tendido entre postes.",ref:Ti.inspeccion,consecuencia:"El poste posterior ten\xEDa una falla visible. Subir sin inspeccionarlo habr\xEDa sido hacerlo sobre un poste no verificado."},poda_peaton:{titulo:"Un peat\xF3n camina por la acera y entra en la zona de ca\xEDda de la rama",opciones:[{t:"STOP: se detiene la labor y un compa\xF1ero lo gu\xEDa fuera de la zona se\xF1alizada",ok:!0},{t:"Le gritamos, pero seguimos cortando",ok:!1},{t:"Seguimos: la rama ya cay\xF3",ok:!1},{t:"Que pase r\xE1pido por debajo de la rama",ok:!1}],explicacion:"Mientras haya una rama por caer o ca\xEDda en la zona, la labor se detiene y se regula el paso: nadie camina dentro de la zona de ca\xEDda (GS-101 \xA75.6.10 n y o).",ref:W.poda_trayectoria,consecuencia:"La persona qued\xF3 bajo la rama. Quien corta debe detener la labor a tiempo."},galeria_vigia:{titulo:"El compa\xF1ero de afuera deja de responder desde la tapa mientras est\xE1s en la galer\xEDa",opciones:[{t:"STOP: se detiene la labor y quien est\xE1 adentro sale por la escalera",ok:!0},{t:"Seguimos: el compa\xF1ero seguro est\xE1 atento",ok:!1},{t:"Gritamos desde el fondo de la galer\xEDa y seguimos con las pletinas",ok:!1},{t:"Dejamos el detector y seguimos cerca del rollo",ok:!1}],explicacion:"Sin contacto con quien vigila la tapa, se detiene la labor y se sale. La fuente no describe la comunicaci\xF3n en espacios confinados: se anota como duda en PENDIENTES_SST.md (J10).",ref:W.gal_vigia,consecuencia:"Quien estaba adentro sigui\xF3 trabajando sin que nadie lo viera desde la tapa."}};var CS=Tv.filter(i=>i.n===5);var Yh=[{urls:"stun:stun.l.google.com:19302"}],wv=11;function $h({sala:i,id:e,alMensaje:t,alPar:n}){let a=`realtime:mundo-${i}`,r={ws:"conectando",rtt:null,pares:new Map,presencia:!1},s,o=0,l=!1,c=!1,d=0,p=[],u=(m,S,w=a)=>{s?.readyState===1&&s.send(JSON.stringify({topic:w,event:m,payload:S,ref:String(++o)}))},f=(m,S)=>u("broadcast",{type:"broadcast",event:m,payload:S});function x(){r.ws="conectando",l=!1,s=new WebSocket(`${Kc.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${Kc.llave}&vsn=1.0.0`),s.onopen=()=>u("phx_join",{config:{broadcast:{self:!0},presence:{key:e},private:!1}}),s.onerror=()=>{r.ws="error"},s.onclose=()=>{r.ws!=="error"&&(r.ws="cerrado"),c||setTimeout(x,3e3)},s.onmessage=m=>{let S=JSON.parse(m.data);if(S.topic===a){if(S.event==="phx_reply"&&!l){if(S.payload?.status!=="ok"){r.ws="rechazado";return}l=!0,r.ws="unido",u("presence",{type:"presence",event:"track",payload:{id:e}}),f("eco",{id:e,t:performance.now()})}else if(S.event==="presence_state"){for(let w of Object.keys(S.payload))_(w);r.presencia=!0}else if(S.event==="presence_diff"){for(let w of Object.keys(S.payload.joins??{}))_(w);for(let w of Object.keys(S.payload.leaves??{}))w in(S.payload.joins??{})||g(w)}else if(S.event==="broadcast"){let w=S.payload.payload;S.payload.event==="eco"?w.id===e&&(r.rtt=performance.now()-w.t):w.de===e||r.pares.has(w.de)&&(S.payload.event==="rtc"?w.a===e&&w.sdp&&b(w).catch(()=>{}):(S.payload.event==="m"&&!r.pares.get(w.de).directo||S.payload.event==="f")&&t(w.m,w.de))}}}}function _(m){if(m===e||r.pares.has(m)||r.pares.size>=wv)return;let S={id:m,pc:null,canal:null,directo:!1,rtt:null};r.pares.set(m,S),n?.(m,!0),typeof RTCPeerConnection<"u"&&e<m&&C(S).catch(()=>{})}function g(m){let S=r.pares.get(m);S&&(S.pc?.close(),r.pares.delete(m),n?.(m,!1))}function h(m,S){m.canal=S,S.onopen=()=>{m.directo=!0},S.onclose=()=>{m.directo=!1},S.onmessage=w=>{let P=JSON.parse(w.data);P.t==="ping"?S.send(JSON.stringify({t:"pong",v:P.v})):P.t==="pong"?m.rtt=performance.now()-P.v:t(P,m.id)}}let y=m=>new Promise(S=>{if(m.iceGatheringState==="complete")return S();let w=setTimeout(S,2e3);m.addEventListener("icegatheringstatechange",()=>{m.iceGatheringState==="complete"&&(clearTimeout(w),S())})});async function C(m){m.pc?.close(),m.tOferta=performance.now(),m.intentos=(m.intentos??0)+1;let S=m.pc=new RTCPeerConnection({iceServers:Yh});h(m,S.createDataChannel("m",{ordered:!1,maxRetransmits:0})),await S.setLocalDescription(await S.createOffer()),await y(S),f("rtc",{de:e,a:m.id,sdp:S.localDescription})}async function b({de:m,sdp:S}){let w=r.pares.get(m);if(S.type==="offer"){w.pc?.close();let P=w.pc=new RTCPeerConnection({iceServers:Yh});P.ondatachannel=F=>h(w,F.channel),await P.setRemoteDescription(S),await P.setLocalDescription(await P.createAnswer()),await y(P),f("rtc",{de:e,a:m,sdp:P.localDescription})}else await w.pc?.setRemoteDescription(S)}function T(m){let S=JSON.stringify(m),w=!1;for(let F of r.pares.values())F.directo&&F.canal.readyState==="open"?F.canal.send(S):w=!0;let P=performance.now();w&&l&&P-d>500&&(d=P,f("m",{de:e,m}))}let E=m=>f("f",{de:e,m});p.push(setInterval(()=>u("heartbeat",{},"phoenix"),25e3)),p.push(setInterval(()=>{l&&f("eco",{id:e,t:performance.now()});for(let m of r.pares.values())m.directo&&m.canal.readyState==="open"?m.canal.send(JSON.stringify({t:"ping",v:performance.now()})):l&&e<m.id&&typeof RTCPeerConnection<"u"&&m.intentos<5&&performance.now()-m.tOferta>7e3&&C(m).catch(()=>{})},4e3)),x();function M(){c=!0,p.forEach(clearInterval);for(let m of[...r.pares.keys()])g(m);s?.close()}return{estado:r,enviar:T,fiable:E,cerrar:M}}var Qc=(i,e)=>Math.max(1,Math.round(i*(e==="aprendiz"?.65:1))),ed=(i,e)=>Math.max(0,i-e),Cv=(i,e)=>Math.min(100,i+e*.25),Jh=i=>i>=90?3:i>=75?2:i>=60?1:0;function Zh(i){let e=100;for(let t of i)e=t.tipo==="acierto"?Cv(e,t.puntos):ed(e,t.puntos);return e}var Et={encargado:{nombre:"Encargado de cuadrilla",corto:"Encargado",icono:"\u{1F4CB}",camisa:3108789,resumen:"Dirige el ATS, inspecciona el poste y comprueba la conexi\xF3n antes del ascenso."},sst:{nombre:"SST \xB7 prevencionista",corto:"SST",icono:"\u{1F9BA}",camisa:4170603,resumen:"Verifica el EPP y el \xE1rea de trabajo antes de que alguien suba."},liniero:{nombre:"Liniero",corto:"Liniero",icono:"\u{1F9D7}",camisa:16040475,resumen:"Lleva conos y cuerdas, arma el per\xEDmetro, sube y se asegura arriba."},auxiliar1:{nombre:"Auxiliar 1",corto:"Auxiliar 1",icono:"\u{1FA9C}",camisa:15304235,resumen:"Inspecciona y carga la escalera, la levanta a 75\xB0 y tensa la cuerda."},auxiliar2:{nombre:"Auxiliar 2",corto:"Auxiliar 2",icono:"\u{1FAA2}",camisa:13199902,resumen:"Carga la escalera, la presenta al poste y la amarra a media altura."}},Kh=8,Fr=["Listo","\xA1Alto!","Espera un momento","Escalera amarrada","Subiendo","Necesito ayuda"],Hn=[{id:"ats",rol:"encargado",lugar:"pickup",nombre:"ATS del d\xEDa",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"\xBFC\xF3mo empieza la jornada?",opciones:["Con el ATS: toda la cuadrilla analiza los riesgos de la tarea y se reparten las funciones","Cada quien toma su equipo y el riesgo se analiza si aparece un problema","El encargado llena el ATS solo, mientras los dem\xE1s adelantan el trabajo"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"epp",rol:"sst",lugar:"pickup",nombre:"Revisar el EPP de la cuadrilla",accion:"Revisar el EPP",fisico:[],antes:["ats"],puntos:8,pregunta:"\xBFCu\xE1ndo se revisa el equipo de protecci\xF3n?",opciones:["Antes de usarlo, a la vista y con sus pruebas; lo que tenga defecto no se usa y se pide el cambio","Una vez por semestre, en la revisi\xF3n planificada con SST","Solo cuando es nuevo o cuando el da\xF1o se nota desde lejos"],porque:"Cada quien revisa su EPP antes de usarlo; el equipo de altura con defecto no se usa.",ref:"GS-101 \xB7 \xA75.3.8 a) EPP revisado antes de su uso y \xA75.5 f) equipo de altura con defecto no se usa (p\xE1gs. 17 y 19)"},{id:"inspeccion",rol:"auxiliar1",lugar:"pickup",nombre:"Inspeccionar la escalera",accion:"Inspeccionar la escalera",fisico:[],antes:["ats"],puntos:8,pregunta:"Antes de bajar la escalera del pick-up\u2026",opciones:["Reviso que no tenga piezas faltantes, da\xF1adas o flojas y que los pelda\xF1os est\xE9n limpios","Nada: con la inspecci\xF3n de cada a\xF1o es suficiente","La reviso arriba, cuando ya est\xE9 apoyada en el poste"],porque:"La escalera se inspecciona cada vez que se usa, antes de subir.",ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"cuerdas",rol:"liniero",lugar:"pickup",nombre:"Tomar conos y cuerdas",accion:"Tomar conos y cuerdas",fisico:[],antes:["ats"],puntos:6,pregunta:"\xBFQu\xE9 cuerda llevas para asegurar la escalera?",opciones:["Cuerda de seguridad est\xE1tica de 10 mm y 12 m, con capacidad de 24 kN","El mecate de nailon que haya en el pick-up","Cualquier cuerda, si se le hacen suficientes nudos"],porque:"El amarre se hace con cuerda de seguridad est\xE1tica de 10 mm, 12 m y 24 kN.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda de seguridad est\xE1tica de 10 mm, 12 m de largo y 24 kN (p. 26)"},{id:"tomar",rol:"auxiliar1",lugar:"pickup",nombre:"Bajar la escalera entre dos",accion:"Tomar la escalera",fisico:[],antes:["inspeccion"],puntos:8,pregunta:"La escalera es de 28 pies (8,53 m). \xBFC\xF3mo se traslada?",opciones:["Entre dos personas, deposit\xE1ndola, sin tirarla","La lleva uno solo al hombro, para ir m\xE1s r\xE1pido","Entre dos, y al llegar se deja caer junto al poste"],porque:"Desde 28 pies la escalera se traslada y se coloca entre dos, y se deposita: no se tira.",ref:"GS-101 \xB7 \xA75.6.4 a) y o) Escalera de 28 pies o m\xE1s: trasladada y colocada por 2 personas (p\xE1gs. 22\u201323)"},{id:"tomar2",rol:"auxiliar2",lugar:"pickup",nombre:"Tomar el otro extremo",accion:"Tomar el otro extremo de la escalera",fisico:[],antes:["inspeccion"],puntos:4,ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"llegada",rol:"auxiliar1",auto:!0,lugar:"poste",nombre:"Llevar la escalera al poste",fisico:["tomar","tomar2"],antes:[],puntos:0},{id:"poste",rol:"encargado",lugar:"poste",nombre:"Inspeccionar el poste",accion:"Inspeccionar el poste",fisico:[],antes:["ats"],puntos:10,pregunta:"\xBFQu\xE9 revisas antes de autorizar el ascenso al poste?",opciones:["Que no se mueva, no est\xE9 inclinado ni da\xF1ado; y tambi\xE9n el poste anterior, el posterior y el tendido","Solo que este poste est\xE9 a plomo; los vecinos no importan","Nada: si ayer se subi\xF3, hoy tambi\xE9n se puede"],porque:"El encargado inspecciona el poste, el anterior, el posterior y el tendido; con fallas no se trabaja y se reporta.",ref:"GS-101 \xB7 \xA75.6.3 Inspecci\xF3n de poster\xEDa por el encargado de cuadrilla (p. 21)"},{id:"perimetro",rol:"liniero",lugar:"poste",nombre:"Armar el per\xEDmetro",accion:"Colocar conos y cinta",fisico:["llegada","cuerdas"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se cierra el \xE1rea de la escalera?",opciones:["Con cinta y conos, a 2 m como m\xEDnimo alrededor de la escalera","Con un cono al pie de la escalera","En la acera no hace falta: solo en la calzada"],porque:"El \xE1rea se cierra y se se\xF1aliza a un m\xEDnimo de 2 m de la escalera.",ref:"GS-101 \xB7 \xA75.6.4 g) Cerramiento y se\xF1alizaci\xF3n a un m\xEDnimo de 2 m de la escalera (p\xE1gs. 22\u201323)"},{id:"cuerda_extension",rol:"liniero",lugar:"poste",nombre:"Cuerda en la extensi\xF3n",accion:"Instalar la cuerda en la escalera",fisico:["llegada","cuerdas"],antes:["poste"],puntos:10,pregunta:"Antes de levantar la escalera, \xBFd\xF3nde va la cuerda de seguridad?",opciones:["En el \xFAltimo pelda\xF1o de la extensi\xF3n: rodea el poste por detr\xE1s y baja por el frente; ser\xE1 la l\xEDnea de vida vertical","Se amarra cuando el liniero ya est\xE9 arriba","En el primer pelda\xF1o, para que no estorbe"],porque:"La cuerda se instala previamente en el \xFAltimo pelda\xF1o de la extensi\xF3n y, al bajar por el frente, es la l\xEDnea de vida vertical.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda en el \xFAltimo pelda\xF1o de la extensi\xF3n; sirve como l\xEDnea de vida vertical (p\xE1gs. 24\u201325)"},{id:"orientar",rol:"auxiliar2",lugar:"poste",nombre:"Presentar la escalera al poste",accion:"Presentar la escalera",fisico:["llegada"],antes:["cuerda_extension"],puntos:6,pregunta:"\xBFC\xF3mo queda la escalera frente al poste?",opciones:["La secci\xF3n fija hacia el poste; la que sube y baja, de frente al trabajador","La secci\xF3n que sube y baja, hacia el poste","De lado, apoyada en un solo larguero"],porque:"La parte fija queda hacia el poste y la que asciende y desciende, de frente al trabajador.",ref:"GS-101 \xB7 \xA75.6.5 a) Escalera de frente: la parte fija hacia el poste (p. 24)"},{id:"colocar",rol:"auxiliar1",lugar:"poste",nombre:"Levantar la escalera a 75\xB0",accion:"Levantar la escalera",fisico:["orientar"],antes:[],puntos:10,pregunta:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera?",opciones:["75\xB0: con la punta de los zapatos en la base y los brazos estirados, los dedos tocan los pelda\xF1os","60\xB0: m\xE1s acostada es m\xE1s estable","85\xB0: casi vertical, pegada al poste"],porque:"La escalera va a 75\xB0, o se comprueba con la prueba de los zapatos y los brazos estirados. Es lo mismo que separar la base un cuarto del largo de la escalera.",ref:"GS-101 \xB7 \xA75.6.5 a) \xC1ngulo de 75\xB0 o prueba de los brazos estirados (p. 24) \xB7 GS-98: base separada un cuarto de la longitud"},{id:"tensar",rol:"auxiliar1",lugar:"poste",nombre:"Tensar la cuerda que baja",accion:"Tensar la cuerda",fisico:["colocar","cuerda_extension"],antes:[],puntos:8,pregunta:"La cuerda baja por el frente y pasa por el primer pelda\xF1o. \xBFCon qu\xE9 nudo se bloquea al final?",opciones:["Con un ballestrinque (pata de chancho), despu\xE9s de tensarla con el ocho en l\xEDnea","Con un nudo corredizo, para soltarla r\xE1pido","Con varias vueltas al larguero, sin nudo"],porque:"Se tensa con el ocho en l\xEDnea o la gaza y se termina con una pata de chancho que bloquea la cuerda.",ref:"GS-101 \xB7 \xA75.6.5 c) Tensar con ocho en l\xEDnea o gaza y terminar con pata de chancho (p\xE1gs. 25\u201326)"},{id:"amarre_medio",rol:"auxiliar2",lugar:"poste",nombre:"Amarrar a media altura",accion:"Amarrar la escalera al poste",fisico:["colocar"],antes:[],puntos:10,pregunta:"\xBFEn cu\xE1ntos puntos debe quedar sujeta la escalera al poste?",opciones:["En dos como m\xEDnimo: arriba y en la parte media, con la cuerda de 12 m","En uno: con el amarre de arriba es suficiente","En ninguno, si un compa\xF1ero la sostiene"],porque:"El amarre en la parte media se hace siempre: la escalera queda sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea",accion:"Verificar el \xE1rea de trabajo",fisico:["colocar"],antes:["perimetro","tensar","amarre_medio","epp"],puntos:8,pregunta:"\xBFQu\xE9 confirmas antes de dar el visto bueno al ascenso?",opciones:["Per\xEDmetro armado, escalera amarrada en dos puntos y sin vientos fuertes, lluvia torrencial ni rayer\xEDa","Que el liniero tenga prisa: entre m\xE1s r\xE1pido, menos exposici\xF3n","Solo el per\xEDmetro; el clima se valora si alguien se queja"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:"GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23) \xB7 GS-98: el prevencionista verifica las condiciones antes de la tarea en altura"},{id:"carrito",rol:"liniero",lugar:"poste",nombre:"Conectar el carrito",accion:"Conectar el carrito a la cuerda",fisico:["colocar","cuerda_extension"],antes:["tensar"],puntos:12,pregunta:"El carrito (freno de cuerda) corre por la l\xEDnea de vida vertical. \xBFA qu\xE9 parte del arn\xE9s se conecta?",opciones:["A la argolla frontal, la del pecho","Al portaganchos del arn\xE9s","A una argolla lateral de la cadera"],porque:"La detenci\xF3n de ca\xEDdas solo se conecta a la argolla dorsal o a la pectoral. El portaganchos y las argollas laterales no detienen una ca\xEDda.",ref:"GS-98 \xB7 Sistemas personales de detenci\xF3n de ca\xEDdas: solo argollas de detenci\xF3n dorsal o pectoral \xB7 GS-101 \xA75.6.1 f) Freno para cuerda (p. 20)"},{id:"conexion",rol:"encargado",lugar:"poste",nombre:"Comprobar la conexi\xF3n",accion:"Comprobar la conexi\xF3n del liniero",fisico:["carrito"],antes:["area"],puntos:12,pregunta:"El liniero ya se conect\xF3. \xBFQu\xE9 haces antes de que suba?",opciones:["Compruebo con mis manos su conexi\xF3n y su arn\xE9s: un compa\xF1ero siempre la revisa","Le pregunto si est\xE1 listo y conf\xEDo en su palabra","Lo dejo subir y lo reviso desde abajo, a la vista"],porque:"Antes de subir, un compa\xF1ero comprueba que la conexi\xF3n est\xE9 correcta (conexi\xF3n falsa).",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)"},{id:"subir",rol:"liniero",lugar:"poste",nombre:"Subir la escalera",accion:"Subir",fisico:["colocar"],antes:["perimetro","amarre_medio","carrito","conexion"],puntos:12,pregunta:"\xBFC\xF3mo se sube?",opciones:["De frente, con las manos libres y tres puntos de apoyo; la herramienta sube por cuerda y no uso los tres pelda\xF1os de arriba","Con la herramienta en una mano y agarrado con la otra","Hasta el \xFAltimo pelda\xF1o, para alcanzar mejor"],porque:"Se sube de frente con tres puntos de apoyo, la herramienta sube por cuerda y los tres pelda\xF1os superiores est\xE1n prohibidos.",ref:"GS-101 \xB7 \xA75.6.4 j) y k) Tres puntos de apoyo; Tabla 2: prohibidos los tres pelda\xF1os superiores (p\xE1gs. 22\u201323)"},{id:"faja",rol:"liniero",lugar:"arriba",nombre:"Faja de posicionamiento",accion:"Colocar la faja de posicionamiento",fisico:["subir"],antes:[],puntos:12,pregunta:"\xBFC\xF3mo se coloca la faja de posicionamiento (estrobo)?",opciones:["De una argolla lateral, en M por un pelda\xF1o y al menos 3 cables de fibra, hasta la otra argolla lateral","Las dos puntas al portaganchos del arn\xE9s","Una punta a una argolla lateral y la otra suelta, para moverme mejor"],porque:"La faja va de argolla lateral a argolla lateral, abrazando en M un pelda\xF1o y al menos 3 cables de fibra. Sola no detiene una ca\xEDda: por eso sigue la l\xEDnea de vida.",ref:"GS-101 \xB7 \xA75.6.1 d) Faja de posicionamiento (estrobo) \xB7 GS-98: el posicionamiento no protege contra ca\xEDdas por s\xED solo \xB7 forma en M: pr\xE1ctica de la cuadrilla, en revisi\xF3n por Salud Ocupacional"},{id:"linea_vida",rol:"liniero",lugar:"arriba",nombre:"L\xEDnea de vida",accion:"Anclar la l\xEDnea de vida",fisico:["faja"],antes:[],puntos:12,pregunta:"\xBFD\xF3nde va la l\xEDnea de vida de tu argolla dorsal?",opciones:["A un punto de anclaje seguro, de preferencia arriba de la cabeza","Al mismo pelda\xF1o donde tengo la faja","A los cables de fibra"],porque:"La l\xEDnea de vida va del anillo dorsal a un punto de anclaje, de preferencia arriba de la cabeza. Un pelda\xF1o o un cable no son puntos de anclaje.",ref:"GS-101 \xB7 \xA75.5 h) e i) L\xEDnea de vida en el anillo dorsal, a un anclaje arriba de la cabeza (p. 19) \xB7 GS-98: el anclaje soporta 2 268 kg por persona"}];var ii=Object.fromEntries(Hn.map(i=>[i.id,i])),td=()=>({fase:"sala",modo:"aprendiz",jugadores:{},hechos:{},fallos:{},eventos:[],n:0}),xn=(i,e)=>Object.keys(i.jugadores).find(t=>i.jugadores[t].rol===e)??null,Rv=(i,e)=>String(i??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,e);function nd(i,e){switch(i.n++,e?.t){case"entra":i.jugadores[e.id]={nombre:e.nombre,rol:i.jugadores[e.id]?.rol??null};break;case"sale":delete i.jugadores[e.id];break;case"rol":i.jugadores[e.id]&&(i.jugadores[e.id].rol=e.rol);break;case"modo":i.modo=e.modo;break;case"empezar":i.fase="trabajo";break;case"reiniciar":Object.assign(i,{fase:"sala",hechos:{},fallos:{},eventos:[]});break;case"hecho":if(!ii[e.paso])break;i.hechos[e.paso]=e.rol,Hn.every(t=>i.hechos[t.id])&&(i.fase="fin");break;case"falta":if(!ii[e.paso])break;i.fallos[e.paso]=(i.fallos[e.paso]??0)+1,i.eventos.push({tipo:"falta",puntos:e.puntos,rol:e.rol,paso:e.paso,ref:e.ref,texto:e.texto});break}return i}function Qh(i,e,t,n=!1){switch(e?.t){case"entra":return[{t:"entra",id:t,nombre:Rv(e.nombre,16)||"Jugador"}];case"sale":return n&&i.jugadores[e.id]?[{t:"sale",id:e.id}]:[];case"rol":return!i.jugadores[t]||i.fase==="fin"||e.rol!==null&&!Et[e.rol]?[]:e.rol&&xn(i,e.rol)&&xn(i,e.rol)!==t?[]:[{t:"rol",id:t,rol:e.rol}];case"modo":return i.fase==="sala"&&i.jugadores[t]&&["aprendiz","tecnico"].includes(e.modo)?[{t:"modo",modo:e.modo}]:[];case"empezar":return i.fase==="sala"&&(i.jugadores[t]?.rol||n&&e.demo)?[{t:"empezar"}]:[];case"reiniciar":return i.fase==="fin"&&(i.jugadores[t]||n)?[{t:"reiniciar"}]:[];case"auto":{let a=ii[e.paso];return n&&a?.auto&&i.fase==="trabajo"&&!i.hechos[a.id]&&a.fisico.every(r=>i.hechos[r])?[{t:"hecho",paso:a.id,rol:a.rol,limpio:!0}]:[]}case"intento":{let a=ii[e.paso];if(!a||a.auto||i.fase!=="trabajo"||i.hechos[a.id])return[];let r=n&&e.bot,s=r?e.rol:i.jugadores[t]?.rol;if(s!==a.rol||r&&xn(i,s))return[];if(!a.fisico.every(l=>i.hechos[l]))return[];let o=a.antes.find(l=>!i.hechos[l]);if(o)return i.modo==="aprendiz"?[]:[{t:"falta",paso:a.id,rol:s,puntos:Qc(Kh,i.modo),ref:ii[o].ref??a.ref,texto:`Faltaba \xAB${ii[o].nombre}\xBB antes de \xAB${a.nombre}\xBB.`}];if(a.opciones){if(!Number.isInteger(e.opcion)||e.opcion<0||e.opcion>=a.opciones.length)return[];if(e.opcion!==0)return[{t:"falta",paso:a.id,rol:s,puntos:Qc(a.puntos,i.modo),ref:a.ref,texto:a.porque}]}return[{t:"hecho",paso:a.id,rol:s,limpio:!i.fallos[a.id]}]}}return[]}function Or(i,e){return Hn.filter(t=>t.rol===e&&!t.auto&&!i.hechos[t.id]&&t.fisico.every(n=>i.hechos[n])).map(t=>({paso:t,bloqueo:ii[t.antes.find(n=>!i.hechos[n])]??null}))}var ep=i=>Hn.find(e=>!i.hechos[e.id]&&e.fisico.every(t=>i.hechos[t])&&e.antes.every(t=>i.hechos[t]))??null,Pa=i=>Math.round(Zh(i.eventos)),id=i=>Jh(Pa(i));function tp(i){let e=Object.fromEntries(Object.keys(Et).map(t=>[t,100]));for(let t of i.eventos)t.tipo==="falta"&&t.rol in e&&(e[t.rol]=ed(e[t.rol],t.puntos));return e}function np(i){let e=[...i.id].reduce((n,a)=>n*31+a.charCodeAt(0)>>>0,7),t=i.opciones.map((n,a)=>a);for(let n=t.length-1;n>0;n--){e=e*1664525+1013904223>>>0;let a=e%(n+1);[t[n],t[a]]=[t[a],t[n]]}return t}var ad=(i,e)=>{for(let t=0;t<e.length;t++)i=i*31+e.charCodeAt(t)|0;return i};function ip({id:i,red:e,alEvento:t}){let n=td(),a=[],r=0,s=[],o=!1,l=-1e9,c=()=>e?[i,...e.estado.pares.keys()].sort()[0]:i,d=()=>c()===i,p=()=>!e||o||!!e.estado.presencia;function u(b){a.push(b),r=ad(r,JSON.stringify(b)),nd(n,b),t?.(b,n)}function f(b,T,E){for(let M of Qh(n,b,T,E)){let m=r;u(M),e?.fiable({t:"ev",n:n.n,h:m,ev:M})}}function x(b){p()?d()?f(b,i,!0):e.fiable({t:"pro",pro:b}):s.push(b)}function _(){if(s.length&&p()){let b=s;s=[],b.forEach(x)}}function g(){let b=Date.now();e&&b-l>1500&&(l=b,e.fiable({t:"pido"}))}let h=0;function y(b,T,E){if(E!==c()||b===n.n&&T===r){h=0;return}let M=Date.now();h?M-h>1e3&&g():h=M}function C(b,T){if(b?.t==="pro")d()&&f(b.pro,T,!1);else if(b?.t==="ev"){if(T!==c())return;b.n===n.n+1&&b.h===r?u(b.ev):g()}else if(b?.t==="pido")a.length&&e.fiable({t:"todo",evs:a});else if(b?.t==="todo"){if(!Array.isArray(b.evs)||!b.evs.length||b.evs.length>5e3)return;let E=b.evs.reduce((M,m)=>ad(M,JSON.stringify(m)),0);if(!(T===c()?E!==r:!a.length))return;n=td(),a=[],r=0;for(let M of b.evs)a.push(M),r=ad(r,JSON.stringify(M)),nd(n,M);t?.(null,n)}}return{get E(){return n},get huella(){return r},anfitrion:d,idAnfitrion:c,proponer:x,recibir:C,pedir:g,cada:_,latido:y,jugarSolo:()=>{o=!0}}}var ap=4.6,cd=7.4,zr=cd*Math.sin(75*Math.PI/180),rd=cd*Math.cos(75*Math.PI/180),sd=4.8,Pv=7,od=4.4,ld=40,on={cuerda:15591122,cinta:15320363,faja:15320363,vida:14173227};function rp(i){let e=Gi();for(let n of[-.21,.21])e.caja(n,-.04,i/2,.05,.08,i,15304235);for(let n=.3;n<i-.1;n+=.3)e.caja(0,-.02,n,.42,.035,.035,12172996);let t=new Ze(e.geometria(),new Rt({vertexColors:!0,roughness:.7}));return t.castShadow=!1,t}function sp({via:i,barrio:e}){let t=e.trabajo,n={},a=(X,ue,I=0)=>(i.en(X,ue,n),new L(n.x,I,n.z)),r=a(t.d-rd,t.a,.15),s=a(t.d-.14,t.a,.15+zr),o=new L(s.x-r.x,0,s.z-r.z).normalize(),l=new L(o.z,0,-o.x),c=new L().subVectors(r,s).setY(0).normalize().multiplyScalar(.97).add(new L(0,.26,0)),d=Math.atan2(o.x,o.z),p=(X,ue=0,I=new L)=>I.lerpVectors(r,s,X/zr).addScaledVector(c,ue),u={pickup:a(e.dPick,-4.5),poste:a(t.d-2.6,t.a+.2)},f=a(t.d-2.2,t.a+.75),x={pickup:{encargado:[0,-4.4],sst:[1.3,-4.4],liniero:[-1.3,-4.4],auxiliar1:[-2.6,-4.4],auxiliar2:[2.6,-4.4]},poste:{encargado:[-3.6,1.3],sst:[-4.4,-1.2],liniero:[-2.55,0],auxiliar1:[-2.2,1],auxiliar2:[-.6,-1.1]}},_=(X,ue)=>ue==="pickup"?a(e.dPick+x.pickup[X][0],x.pickup[X][1]):a(t.d+x.poste[X][0],t.a+x.poste[X][1]),g=new Mt,h=rp(ap),y=rp(cd),C=a(e.dPick-2.9,ki+.4,2.16),b=a(e.dPick+1.7,ki+.4,2.16),T=a(t.d-2.2,t.a+.75,.2),E=a(t.d-2.2-ap,t.a+.75,.2);y.position.copy(r),y.lookAt(s),y.visible=!1;let M=new Vt(new or(.17,.55,10).translate(0,.275,0),new Rt({color:15227148,roughness:.6}),4),m=[[-rd-2,-2],[2,-2],[2,2],[-rd-2,2]].map(([X,ue])=>a(t.d+X,t.a+ue,.15)),S=new gt;m.forEach((X,ue)=>{S.position.copy(X),S.updateMatrix(),M.setMatrixAt(ue,S.matrix)}),M.visible=!1;let w=new xt,P=new Float32Array(ld*6),F=new Float32Array(ld*6);w.setAttribute("position",new Dt(P,3)),w.setAttribute("color",new Dt(F,3));let B=new Ni(w,new gi({vertexColors:!0}));B.frustumCulled=!1;let N=new Ze(new Ht(.07,.12,.07),new Rt({color:14173227,roughness:.4,metalness:.5})),H=new Ze(new hr(1.25,1.45,40).rotateX(-Math.PI/2),new En({color:16766503,transparent:!0,opacity:.8,depthWrite:!1}));H.visible=!1,g.add(h,y,M,B,N,H);let U=0,k=new qe;function Z(X,ue,I){if(U>=ld)return;k.set(I);let q=U++*6;P[q]=X.x,P[q+1]=X.y,P[q+2]=X.z,P[q+3]=ue.x,P[q+4]=ue.y,P[q+5]=ue.z;for(let ie=0;ie<6;ie+=3)F[q+ie]=k.r,F[q+ie+1]=k.g,F[q+ie+2]=k.b}let V=0,j=Array.from({length:8},()=>new L),ee={x:0,y:0,z:0,rumbo:d,pose:"e",fase:0},de=X=>!!(X.hechos.tomar&&X.hechos.tomar2&&!X.hechos.llegada);function Ee(){return p(V*sd,.13,j[7]),ee.x=j[7].x,ee.y=j[7].y,ee.z=j[7].z,ee.pose=V<1?"e":"t",ee.fase=V*26,ee}function Xe(X){let ue=X("auxiliar1"),I=X("auxiliar2");return!!ue&&!!I&&Math.hypot((ue.x+I.x)/2-u.poste.x,(ue.z+I.z)/2-u.poste.z)<3.5}function Je(X,ue,I,q){if(!de(X)||!/^auxiliar/.test(ue))return;let ie=q(ue==="auxiliar1"?"auxiliar2":"auxiliar1");if(!ie)return;let we=I.x-ie.x,le=I.z-ie.z,oe=Math.hypot(we,le);oe>.001&&(I.x=ie.x+we/oe*od,I.z=ie.z+le/oe*od)}function Ke(X,ue,I,q){let ie=I.hechos,we=!!ie.subir;if(V=we?Math.min(1,V+X/Pv):0,y.visible=!!ie.colocar,h.visible=!ie.colocar,!ie.colocar){let oe=q("auxiliar1"),Oe=q("auxiliar2");de(I)&&oe&&Oe?(h.position.set(oe.x,(oe.y??.15)+1.47,oe.z),h.lookAt(Oe.x,(Oe.y??.15)+1.47,Oe.z)):ie.llegada?(h.position.copy(T),h.lookAt(E)):(h.position.copy(C),h.lookAt(b))}if(M.visible=!!ie.perimetro,U=0,ie.perimetro)for(let oe=0;oe<4;oe++)Z(j[0].copy(m[oe]).setY(.62),j[1].copy(m[(oe+1)%4]).setY(.62),on.cinta);if(ie.colocar&&ie.cuerda_extension&&(p(zr-.3,0,j[0]),j[1].set(t.x,j[0].y-.1,t.z).addScaledVector(o,.2),Z(j[0],j[1],on.cuerda),Z(j[1],p(zr-.6,.1,j[2]),on.cuerda),Z(j[2],p(1.7,.1,j[3]),on.cuerda),ie.tensar&&Z(j[3],p(.35,.02,j[4]),on.cuerda)),ie.amarre_medio){let Oe=[[.22,.22],[.22,-.22],[-.22,-.22],[-.22,.22]].map(([Ce,je],ce)=>j[ce].set(t.x+Ce,3.65,t.z+je));for(let Ce=0;Ce<4;Ce++)Z(Oe[Ce],Oe[(Ce+1)%4],on.cuerda);for(let Ce of[-1,1])Z(p(3.4,0,j[4]).addScaledVector(l,Ce*.21),j[5].set(t.x,3.65,t.z).addScaledVector(l,Ce*.22),on.cuerda)}let le=q("liniero");if(N.visible=!!(ie.carrito&&le),N.visible){let oe=j[5].set(le.x,(le.y??.15)+1.28,le.z);p(Math.min(zr-.8,Math.max(1.3,oe.y-.15)),.1,N.position),oe.distanceTo(N.position)<1.6&&Z(N.position,oe.addScaledVector(o,.1),on.cuerda)}if(we&&le&&V>=1){let oe=j[6].set(le.x,le.y,le.z);if(ie.faja){let Oe=j[0].copy(oe).addScaledVector(l,.2).setY(oe.y+1),Ce=j[1].copy(oe).addScaledVector(l,-.2).setY(oe.y+1),je=p(sd+1.25,0,j[2]).addScaledVector(l,.15),ce=p(sd+1.25,0,j[3]).addScaledVector(l,-.15),he=j[4].set(t.x,6.3,t.z).addScaledVector(o,-.5);Z(Oe,je,on.faja),Z(je,he,on.faja),Z(he,ce,on.faja),Z(ce,Ce,on.faja)}ie.linea_vida&&Z(j[0].copy(oe).addScaledVector(o,-.14).setY(oe.y+1.42),j[1].set(t.x,Math.min(9.2,oe.y+2.5),t.z),on.vida)}w.setDrawRange(0,U*2),w.attributes.position.needsUpdate=w.attributes.color.needsUpdate=!0,H.material.opacity=.55+.3*Math.sin(ue*4)}function Q(X){H.visible=!!u[X],H.visible&&H.position.copy(u[X]).setY(.2)}return{grupo:g,zonas:u,puesto:_,metaEscalera:f,cargando:de,llego:Xe,restringir:Je,cada:Ke,marcar:Q,puestoLiniero:Ee,rumbo:d,L_CARGA:od,get subida(){return V},cima:s}}var Iv=1.7,Lv=1.25,Dv=1.6,op=(i,e)=>i+Math.atan2(Math.sin(e-i),Math.cos(e-i));function lp({sesion:i,obra:e,resolver:t,altura:n}){let a=new Map;function r(s,o,l){for(let c of Object.keys(Et)){let d=!xn(o,c);if(d&&!a.has(c)){let p=e.puesto(c,"pickup");a.set(c,{rol:c,x:p.x,z:p.z,y:.15,rumbo:0,pose:"i",fase:0,espera:0})}else d||a.delete(c)}if(i.anfitrion())for(let c of a.values()){let d=null,p=null,u=Iv;if(c.pose="i",o.fase!=="trabajo")d=o.fase==="sala"?e.puesto(c.rol,"pickup"):null;else if(c.rol==="liniero"&&o.hechos.subir){let x=e.puestoLiniero();Object.assign(c,{x:x.x,z:x.z,y:x.y,rumbo:e.rumbo,pose:x.pose,fase:x.fase}),p=e.subida>=1?Or(o,c.rol).find(_=>!_.bloqueo)?.paso:null}else if(e.cargando(o)&&/^auxiliar/.test(c.rol))if(c.pose="c",c.rol==="auxiliar1")d=e.metaEscalera,u=Lv;else{let x=l("auxiliar1");if(x){let _=c.x-x.x,g=c.z-x.z,h=Math.hypot(_,g)||1,y=c.x,C=c.z;c.x=x.x+_/h*e.L_CARGA,c.z=x.z+g/h*e.L_CARGA,c.rumbo=op(c.rumbo,Math.atan2(x.x-c.x,x.z-c.z)),c.fase+=Math.hypot(c.x-y,c.z-C)*4.19}}else p=Or(o,c.rol).find(x=>!x.bloqueo)?.paso??null,d=e.puesto(c.rol,p?p.lugar:o.hechos.tomar&&o.hechos.tomar2?"poste":"pickup");let f=!d;if(d){let x=d.x-c.x,_=d.z-c.z,g=Math.hypot(x,_);if(g>.25){let h=Math.min(g,u*s);if(c.x+=x/g*h,c.z+=_/g*h,t(c,.3),c.rumbo=op(c.rumbo,Math.atan2(x,_))*.25+c.rumbo*.75,c.fase+=h*4.19,c.rol==="auxiliar1"&&e.cargando(o)){let y=l("auxiliar2");y&&Math.hypot(y.x-c.x,y.z-c.z)>e.L_CARGA+.6&&(c.x-=x/g*h,c.z-=_/g*h)}}else f=!0;c.y=n(c.x,c.z)}p&&f?(c.espera+=s,c.espera>Dv&&(c.espera=0,i.proponer({t:"intento",paso:p.id,opcion:0,bot:!0,rol:c.rol}))):c.espera=0}}return{B:a,cada:r}}var Nv=`
.mu-capa button{font:inherit;color:inherit;cursor:pointer}
.mu-hud{position:absolute;left:max(8px,env(safe-area-inset-left));top:max(8px,env(safe-area-inset-top));max-width:min(62vw,430px);background:rgba(0,24,48,.74);border-radius:10px;padding:8px 12px;font:14px/1.35 system-ui,sans-serif;pointer-events:none}
.mu-hud b{font-size:15px}.mu-seg{float:right;margin-left:14px;font-weight:600}.mu-tarea{margin-top:3px;color:#FFE27A}
.mu-lista{position:absolute;right:max(8px,env(safe-area-inset-right));top:max(8px,env(safe-area-inset-top));margin:0;padding:8px 12px 8px 10px;list-style:none;background:rgba(0,24,48,.66);border-radius:10px;font:12px/1.5 system-ui,sans-serif;pointer-events:none;max-height:72vh;overflow:hidden}
.mu-lista li{opacity:.62}.mu-lista li.hecho{opacity:.9;color:#9BE08F}.mu-lista li.ahora{opacity:1;font-weight:700}.mu-lista li.mio{color:#FFE27A}.mu-lista li.hecho.mio{color:#9BE08F}
.mu-aviso{position:absolute;left:50%;bottom:max(18px,env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(0,24,48,.82);border:2px solid #FFD627;border-radius:999px;padding:8px 18px;font:600 15px system-ui,sans-serif;white-space:nowrap;max-width:92vw;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
.mu-aviso.gris{border-color:rgba(255,255,255,.4);font-weight:400}
.mu-avisos{position:absolute;left:50%;top:max(64px,env(safe-area-inset-top));transform:translateX(-50%);display:flex;flex-direction:column;gap:6px;align-items:center;width:min(92vw,560px);pointer-events:none}
.mu-avisos div{background:rgba(0,24,48,.86);border-radius:8px;padding:7px 12px;font:13px/1.35 system-ui,sans-serif;border-left:4px solid #9BE08F}
.mu-avisos div.falta{border-left-color:#FF7A59}.mu-avisos div.radio{border-left-color:#7CC4FF}.mu-avisos small{display:block;opacity:.8}
.mu-fondo{position:absolute;inset:0;background:rgba(0,16,32,.55);display:flex;align-items:center;justify-content:center;padding:10px}
.mu-fondo[hidden]{display:none}
.mu-panel{background:#062846;border:1px solid rgba(255,255,255,.18);border-radius:14px;padding:16px 18px;width:min(620px,100%);max-height:calc(100dvh - 20px);overflow:auto;font:15px/1.4 system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.5)}
.mu-panel h1{margin:0 0 2px;font-size:20px}.mu-panel h2{margin:14px 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:.06em;opacity:.75}
.mu-panel p{margin:4px 0 10px}.mu-panel small{opacity:.78}
.mu-panel input{font:inherit;color:#fff;background:#0B3A63;border:1px solid rgba(255,255,255,.3);border-radius:8px;padding:8px 10px;min-height:40px;box-sizing:border-box;width:100%}
.mu-fila{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.mu-fila>*{flex:1 1 140px}
.mu-op{display:block;width:100%;text-align:left;background:#0B3A63;border:2px solid transparent;border-radius:10px;padding:10px 12px;margin:6px 0;min-height:46px}
.mu-op:hover:not([disabled]){border-color:rgba(255,255,255,.35)}.mu-op:focus-visible,.mu-panel input:focus-visible{outline:3px solid #FFD627;outline-offset:1px}
.mu-op[disabled]{opacity:.45;cursor:default}.mu-op.elegido{border-color:#FFD627;background:#12507F}.mu-op.mal{border-color:#FF7A59;text-decoration:line-through}
.mu-op small{display:block}.mu-pri{background:#FFD627;color:#062846;font-weight:700;text-align:center}
.mu-nota{background:rgba(255,122,89,.16);border-left:4px solid #FF7A59;border-radius:6px;padding:8px 10px;margin:8px 0}
.mu-pista{background:rgba(255,214,39,.13);border-left:4px solid #FFD627;border-radius:6px;padding:8px 10px;margin:8px 0}
.mu-tabla{width:100%;border-collapse:collapse;font-size:14px}.mu-tabla td{padding:5px 6px;border-top:1px solid rgba(255,255,255,.14);vertical-align:top}
.mu-etq{position:absolute;transform:translate(-50%,-100%);background:rgba(0,24,48,.7);border-radius:6px;padding:1px 7px;font:12px system-ui,sans-serif;white-space:nowrap;pointer-events:none}
.mu-radio{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 156px)}
@media (max-width:760px),(max-height:480px){.mu-lista{display:none}.mu-hud{font-size:13px}}
`,cp=["1","2","3","4","5","6"];function dp(i,e){let t=document.createElement("style");t.textContent=Nv,document.head.append(t);let n=(U,k="div")=>{let Z=document.createElement(k);return Z.className=U,i.append(Z),Z},a=n("mu-hud"),r=n("mu-lista","ol"),s=n("mu-aviso"),o=n("mu-avisos"),l=n("mu-fondo"),c=document.createElement("div");c.className="mu-panel",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),l.append(c),l.hidden=!0,a.hidden=r.hidden=s.hidden=!0;let d=null,p=!1,u=null,f=null,x=[],_="";try{_=localStorage["mundo:nombre"]??""}catch{}let g=()=>[...c.querySelectorAll("button:not([disabled]), input")];function h(U,k,{cancela:Z=!1}={}){let V=d===U?g().indexOf(document.activeElement):-1;d=U,p=Z,c.innerHTML=k,l.hidden=!1,document.exitPointerLock?.();let j=g(),ee=j[V]??j.find(de=>de.classList.contains("elegido"))??j.find(de=>de.tagName==="BUTTON");ee?.focus(),ee?.tagName==="INPUT"&&ee.setSelectionRange(ee.value.length,ee.value.length)}function y(){d=null,u=null,l.hidden=!0,c.innerHTML=""}function C(U){let k=g(),Z=k.indexOf(document.activeElement);k[(Z+U+k.length)%k.length]?.focus()}c.addEventListener("click",U=>{let k=U.target.closest("button");if(!k||k.disabled)return;let{a:Z,v:V}=k.dataset;if(Z==="rol")b(),e.rol(V);else if(Z==="modo")e.modo(V);else if(Z==="empezar")b(),e.empezar();else if(Z==="unirse"){let j=c.querySelector("[name=codigo]").value.trim();j&&e.unirse(j)}else Z==="copiar"?navigator.clipboard?.writeText(V).then(()=>{k.textContent="Enlace copiado \u2713"},()=>{k.textContent=V}):Z==="opcion"?(f=Number(V),e.intento(u.id,f)):Z==="frase"?(e.radio(Number(V)),y()):Z==="reiniciar"?e.reiniciar():Z==="cerrar"&&y()});function b(){let U=c.querySelector("[name=nombre]");if(U){_=U.value.trim().slice(0,16);try{localStorage["mundo:nombre"]=_}catch{}e.nombre(_)}}addEventListener("keydown",U=>{d&&(U.code==="Escape"&&p?y():U.code==="ArrowDown"?(U.preventDefault(),C(1)):U.code==="ArrowUp"?(U.preventDefault(),C(-1)):U.target.tagName!=="INPUT"&&/^(Digit|Numpad)[1-6]$/.test(U.code)&&c.querySelectorAll("[data-a=opcion],[data-a=frase]")[Number(U.code.slice(-1))-1]?.click())});function T(U,k,{codigo:Z,enlace:V,conectado:j,pares:ee}){let de=U.jugadores[k]?.rol,Ee=U.fase==="trabajo",Xe=c.querySelector("[name=nombre]")?.value??_,Je=Object.entries(Et).map(([Ke,Q])=>{let X=xn(U,Ke),ue=X&&X!==k;return`<button class="mu-op${X===k?" elegido":""}" data-a="rol" data-v="${Ke}"${ue||!j?" disabled":""}>${Q.icono} <b>${st(Q.nombre)}</b> \xB7 ${X===k?"T\xFA":ue?st(U.jugadores[X].nombre):"compa\xF1ero autom\xE1tico"}<small>${st(Q.resumen)}</small></button>`}).join("");h("sala",`
      <h1>Cuadrilla Segura \xB7 Mundo</h1>
      <p><small>Orden de trabajo: asegurar la escalera al poste y subir \xB7 Calle 50 Luisa, Sabana Norte. Contenido en revisi\xF3n por Salud Ocupacional.</small></p>
      <div class="mu-fila"><label>Tu nombre<input name="nombre" maxlength="16" autocomplete="off" value="${st(Xe)}" placeholder="Como te ver\xE1n los dem\xE1s"></label>
        <div>Sala <b>${st(Z)}</b> \xB7 ${j?`${ee+1} en l\xEDnea`:"conectando\u2026"}<br><button class="mu-op" data-a="copiar" data-v="${st(V)}" style="margin:4px 0 0;min-height:36px;padding:6px 10px">Copiar enlace para invitar</button></div></div>
      <h2>${Ee?"Trabajo en curso: elige un rol libre":"Elige tu rol"}</h2>${Je}
      ${Ee?"":`<h2>Dificultad</h2><div class="mu-fila">
        <button class="mu-op${U.modo==="aprendiz"?" elegido":""}" data-a="modo" data-v="aprendiz"${de?"":" disabled"}><b>Aprendiz</b><small>Con pistas; el juego no deja saltarse el orden.</small></button>
        <button class="mu-op${U.modo==="tecnico"?" elegido":""}" data-a="modo" data-v="tecnico"${de?"":" disabled"}><b>T\xE9cnico</b><small>Sin pistas; saltarse un paso es una falta.</small></button></div>
      <button class="mu-op mu-pri" data-a="empezar"${de?"":" disabled"}>${de?"Empezar el trabajo":"Elige un rol para empezar"}</button>`}
      <h2>Unirse a otra sala</h2><div class="mu-fila"><input name="codigo" maxlength="12" autocomplete="off" placeholder="C\xF3digo de sala"><button class="mu-op" data-a="unirse" style="margin:0">Unirse</button></div>`)}function E(U,k,Z=[]){u?.id!==U.id&&(f=null),u=U,x=Z;let V=np(U).map((j,ee)=>`<button class="mu-op${Z.includes(j)?" mal":""}" data-a="opcion" data-v="${j}"${Z.includes(j)?" disabled":""}>${cp[ee]}. ${st(U.opciones[j])}</button>`).join("");h("decision",`<h2>${st(Et[U.rol].nombre)} \xB7 ${st(U.nombre)}</h2><h1>${st(U.pregunta)}</h1>${V}
      ${Z.length?`<div class="mu-nota"><b>No es as\xED.</b> ${st(U.porque)}<br><small>${st(U.ref)}</small></div>`:k.modo==="aprendiz"?`<div class="mu-pista"><small>Pista: ${st(U.ref)}</small></div>`:""}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Volver (Esc)</button>`,{cancela:!0})}function M(U,k){d!=="decision"||u?.id!==U.paso||(f!==null&&!x.includes(f)&&x.push(f),E(u,k,x))}function m(){h("radio",`<h2>Radio</h2>${Fr.map((U,k)=>`<button class="mu-op" data-a="frase" data-v="${k}">${cp[k]}. ${st(U)}</button>`).join("")}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar (Esc)</button>`,{cancela:!0})}function S(U){let k=Pa(U),Z=tp(U),V=Object.entries(Et).map(([j,ee])=>{let de=xn(U,j),Ee=U.eventos.filter(Xe=>Xe.tipo==="falta"&&Xe.rol===j);return`<tr><td>${ee.icono} <b>${st(ee.corto)}</b><br><small>${de?st(U.jugadores[de].nombre):"autom\xE1tico"}</small></td><td><b>${Z[j]}</b></td>
        <td>${Ee.length?Ee.map(Xe=>`${st(Xe.texto)}<br><small>${st(Xe.ref)}</small>`).join("<br>"):"<small>Sin faltas</small>"}</td></tr>`}).join("");h("fin",`<h1>Trabajo terminado ${"\u2605".repeat(id(U))}${"\u2606".repeat(3-id(U))}</h1>
      <p>Seguridad de la cuadrilla: <b>${k} de 100</b> \xB7 modo ${U.modo==="tecnico"?"T\xE9cnico":"Aprendiz"}. El liniero qued\xF3 asegurado con el carrito, la faja de posicionamiento y la l\xEDnea de vida.</p>
      <table class="mu-tabla">${V}</table>
      <p><small>Contenido en revisi\xF3n por Salud Ocupacional. La forma de la faja en M es pr\xE1ctica de la cuadrilla.</small></p>
      <button class="mu-op mu-pri" data-a="reiniciar">Volver a la sala</button>`)}function w(U,k,Z,V,j){a.hidden=r.hidden=!1,a.innerHTML=`<span class="mu-seg">Seguridad ${Pa(U)}</span><b>${k?`${Et[k].icono} ${st(Et[k].nombre)}`:"\u{1F440} Observando"}</b><div class="mu-tarea">${st(Z)}</div>`;let ee=Hn.find(de=>!U.hechos[de.id]&&de.fisico.every(Ee=>U.hechos[Ee])&&de.antes.every(Ee=>U.hechos[Ee]))?.id;r.innerHTML=Hn.map(de=>`<li class="${U.hechos[de.id]?"hecho":de.id===ee?"ahora":""}${de.rol===k?" mio":""}">${U.hechos[de.id]?"\u2713":de.id===ee?"\u25B8":"\xB7"} ${st(de.nombre)} <small>(${st(Et[de.rol].corto)})</small></li>`).join(""),s.hidden=!V,s.textContent=V??"",s.classList.toggle("gris",!!j)}function P(){a.hidden=r.hidden=s.hidden=!0}function F(U,k="",Z=4.5){let V=document.createElement("div");for(V.className=k,V.innerHTML=U,o.append(V);o.children.length>4;)o.firstChild.remove();setTimeout(()=>V.remove(),Z*1e3)}let B=[];function N(U){U.forEach((k,Z)=>{let V=B[Z]??(B[Z]=n("mu-etq"));V.hidden=!k.visible,k.visible&&(V.textContent!==k.texto&&(V.textContent=k.texto),V.style.left=k.x+"px",V.style.top=k.y+"px")});for(let k=U.length;k<B.length;k++)B[k].hidden=!0}function H(U){d&&(U.abajo&&C(1),U.arriba&&C(-1),U.accion&&U.origen==="control"&&document.activeElement?.click?.(),U.atras&&p&&y())}return{get abierto(){return d},get paso(){return u},get nombre(){return _},sala:T,decision:E,fallo:M,radio:m,fin:S,cerrar:y,tablero:w,ocultarTablero:P,avisar:F,etiquetas:N,navegar:H}}tl.variante="nuevo";var ri=new URLSearchParams(location.search),wi=Th(),md=ri.has("demo"),vp=(i,e)=>Number.isFinite(parseInt(ri.get(i)))?parseInt(ri.get(i)):e,dd=(...i)=>i.every(Number.isFinite),ln=new Zo({antialias:wi.antialias,powerPreference:"high-performance"}),La=wi.pixelRatio;ln.setPixelRatio(La);ln.setSize(innerWidth,innerHeight);ln.toneMapping=yr;ln.toneMappingExposure=1.05;ln.shadowMap.enabled=!0;ln.shadowMap.autoUpdate=!1;document.body.append(ln.domElement);var si=new Qa;si.background=new qe(10997738);si.fog=new Ka(12179176,70,300);var ai=new kt(62,innerWidth/innerHeight,.1,420);si.add(new gr(14084607,7043669,1.15));var qn=new vr(16773590,2.7),Uv=new L(.45,.78,.32).normalize();qn.castShadow=!0;qn.shadow.mapSize.setScalar(wi.sombra);Object.assign(qn.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:260});qn.shadow.bias=-6e-4;qn.shadow.normalBias=.04;si.add(qn,qn.target);addEventListener("resize",()=>{ai.aspect=innerWidth/innerHeight,ai.updateProjectionMatrix(),ln.setSize(innerWidth,innerHeight)});var Rn=wh(Hc.eje),cn=Ph(Hc,Rn),Vr=Dh(Rn,cn,vp("autos",20)),bp=Ch(Rn,cn.cajas,cn.circulos,cn.limites),qt=Vh(si,cn.altura),pl=Hh(96),Jt=sp({via:Rn,barrio:cn});si.add(cn.grupo,Vr.grupo,pl.malla,Jt.grupo);var up=[11879996,3960757,5216859,9068464,13666862,4869975],Fv=Array.from({length:vp("gente",5)},(i,e)=>({id:"p"+e,d:30+e*83%(Rn.largo-60),a:e%2?4.4:-4.3,s:e%2?1:-1,v:1.15+e%3*.15,op:{camisa:up[e%up.length],uniforme:!1}})),ud={},ji=new L,gd=i=>({camisa:Et[i].camisa,uniforme:!0,arnes:i==="liniero"}),jn=null;function xd(i){jn&&si.remove(jn.raiz),jn=Jc(i?{camisa:Et[i].camisa}:{}),jn.equipar("casco"),i==="liniero"&&jn.equipar("arnes"),si.add(jn.raiz)}xd(null);var hp=Rn.en(cn.inicio.d,cn.inicio.a),fe={x:hp.x,z:hp.z,y:.15,vx:0,vz:0,rumbo:Math.PI,fase:0,guinada:Math.PI,cabeceo:-.12,dist:4.2,primera:!1,d:0,a:0},yd=qh(),_p=jh(ln.domElement,yd),Ov=Wh(yd,ri.has("diag")),Wn=(()=>{try{return localStorage["mundo:id"]??(localStorage["mundo:id"]=Math.random().toString(36).slice(2,10))}catch{return Math.random().toString(36).slice(2,10)}})(),Na=(ri.get("sala")||"").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,12);Na||(Na=Array.from({length:4},()=>"abcdefghjkmnpqrstuvwxyz"[Math.floor(Math.random()*23)]).join(""),ri.set("sala",Na),history.replaceState(null,"","?"+ri));var zv=`${location.origin}${location.pathname}?sala=${Na}`,kr=null,vd=ri.has("sinred"),pp=0,Ua=()=>et.E.jugadores[Wn]?.rol??null,ft=dp(yd,{nombre:i=>{let e=et.E.jugadores[Wn];e&&e.nombre!==(i||"Jugador")&&et.proponer({t:"entra",nombre:i})},rol:i=>{let e=et.E.jugadores[Wn];kr=e?.rol===i?null:i,e||et.proponer({t:"entra",nombre:ft.nombre}),et.proponer({t:"rol",rol:kr})},modo:i=>et.proponer({t:"modo",modo:i}),empezar:()=>et.proponer({t:"empezar"}),unirse:i=>{location.search="?sala="+encodeURIComponent(i.toLowerCase())},intento:(i,e)=>et.proponer({t:"intento",paso:i,opcion:e}),reiniciar:()=>et.proponer({t:"reiniciar"}),radio:i=>{Zt?.fiable({t:"radio",i}),yp(i,Wn)}});function Bv(i,e){Number.isInteger(i.n)&&et.latido(i.n,i.h,e);let t=et.E,n=t.jugadores[e]?.rol;if(n?dd(i.x,i.z,i.r)&&Math.abs(i.x)<500&&Math.abs(i.z)<500&&qt.fijar("j:"+e,i.x,i.z,i.r,gd(n),dd(i.y)?Math.max(0,Math.min(10,i.y)):void 0,i.o):qt.quitar("j:"+e),Array.isArray(i.b)&&e===et.idAnfitrion())for(let a of i.b.slice(0,8))Array.isArray(a)&&Object.hasOwn(Et,a[0])&&dd(a[1],a[2],a[3],a[4])&&!xn(t,a[0])&&qt.fijar("b:"+a[0],a[1],a[2],a[4],gd(a[0]),Math.max(0,Math.min(10,a[3])),a[5])}function yp(i,e){let t=et.E.jugadores[e];!t||!Fr[i]||ft.avisar(`\u{1F4FB} <b>${st(t.rol?Et[t.rol].corto:"Sin rol")}</b> (${st(t.nombre)}): ${st(Fr[i])}`,"radio")}var Zt=ri.has("sinred")?null:$h({sala:Na,id:Wn,alMensaje:(i,e)=>{i?.t==="p"?Bv(i,e):i?.t==="radio"?yp(i.i,e):et.recibir(i,e)},alPar:(i,e)=>{e?et.pedir():(qt.quitar("j:"+i),et.anfitrion()&&et.proponer({t:"sale",id:i}))}}),et=ip({id:Wn,red:Zt,alEvento:Gv}),Da=lp({sesion:et,obra:Jt,resolver:bp,altura:cn.altura});function fp(){let i=Ua();if(!i)return;let e=Jt.puesto(i,et.E.hechos.llegada?"poste":"pickup");fe.x=e.x,fe.z=e.z,fe.vx=fe.vz=0}function Sd(){let i=et.E;md||(i.fase!=="fin"&&ft.abierto==="fin"&&ft.cerrar(),i.fase==="sala"||i.fase==="trabajo"&&!Ua()?(!ft.abierto||ft.abierto==="sala")&&ft.sala(i,Wn,{codigo:Na,enlace:zv,conectado:vd,pares:Zt?.estado.pares.size??0}):ft.abierto==="sala"&&ft.cerrar())}function Gv(i,e){if(i)i.t==="rol"?(i.id===Wn?(xd(i.rol),i.rol&&e.fase==="trabajo"&&fp()):qt.quitar("j:"+i.id),i.rol&&qt.quitar("b:"+i.rol)):i.t==="sale"?qt.quitar("j:"+i.id):i.t==="empezar"?(ft.cerrar(),fp()):i.t==="hecho"?(ft.avisar(`\u2713 <b>${st(Et[i.rol]?.corto)}</b>: ${st(ii[i.paso]?.nombre)}`),ft.paso?.id===i.paso&&ft.cerrar()):i.t==="falta"&&(ft.avisar(`\u26A0 <b>${st(Et[i.rol]?.corto)}</b>: ${st(i.texto)}<small>${st(i.ref)}</small>`,"falta",9),ft.fallo(i,e));else{for(let t of[...qt.mapa.keys()])/^[jb]:/.test(t)&&qt.quitar(t);kr&&e.jugadores[Wn]?.rol!==kr&&(e.jugadores[Wn]||et.proponer({t:"entra",nombre:ft.nombre}),et.proponer({t:"rol",rol:kr})),xd(Ua())}Sd()}var mp=new br,Br=new L(1e9,0,0),Ia=[],kv={"teclado y rat\xF3n":"E",t\u00E1ctil:"\u270B",control:"\u24B6"},Vv={pickup:"el pick-up",poste:"el poste"},ul=0,hd=0,pd=0,gp=0,bd=0,Sp=0,_d="",xp="",hl=-1,Hv=(i,e)=>Math.atan2(Math.sin(e-i),Math.cos(e-i)),jv=i=>{let e=xn(et.E,i);return qt.mapa.get(e?"j:"+e:"b:"+i)},Gr=i=>i===Ua()?fe:et.anfitrion()&&Da.B.get(i)||jv(i),fd=i=>Math.hypot(fe.x-Jt.zonas[i].x,fe.z-Jt.zonas[i].z);function Mp(){requestAnimationFrame(Mp);let i=Math.min(.05,mp.getDelta()),e=mp.elapsedTime,t=performance.now(),n=_p.leer(i);_d=n.origen,et.cada();let a=et.E,r=Ua(),s=!!ft.abierto;ft.navegar(n),s?(n.mx=n.mz=n.gx=n.gy=0,n.accion=n.vista=!1,a.fase==="sala"&&(fe.guinada+=i*.05)):n.radio&&a.fase==="trabajo"&&r&&ft.radio(),n.vista&&(fe.primera=!fe.primera),fe.guinada-=n.gx,fe.cabeceo=Math.max(fe.primera?-1.3:-1.05,Math.min(fe.primera?1.3:.55,fe.cabeceo+n.gy));let o=Math.sin(fe.guinada),l=Math.cos(fe.guinada),c=n.correr?3.9:1.7,d=1-Math.exp(-i*10),p=Jt.cargando(a)&&/^auxiliar/.test(r??""),u=p?"c":"i",f=0;if(r==="liniero"&&a.hechos.subir){let M=Jt.puestoLiniero();fe.x=M.x,fe.z=M.z,fe.y=M.y,fe.vx=fe.vz=0,fe.rumbo=Jt.rumbo,fe.fase=M.fase,u=M.pose}else{let M=p?Math.min(c,1.7):c;fe.vx+=((l*n.mx-o*n.mz)*M-fe.vx)*d,fe.vz+=((-o*n.mx-l*n.mz)*M-fe.vz)*d,fe.x+=fe.vx*i,fe.z+=fe.vz*i,bp(fe,.32),Jt.restringir(a,r,fe,Gr),fe.y+=(cn.altura(fe.x,fe.z)-fe.y)*Math.min(1,i*14),f=Math.hypot(fe.vx,fe.vz),fe.primera?fe.rumbo=Math.atan2(-o,-l):f>.3&&(fe.rumbo+=Hv(fe.rumbo,Math.atan2(fe.vx,fe.vz))*Math.min(1,i*12)),fe.fase+=f*i*(n.correr?3.1:4.19)}Rn.aVia(fe.x,fe.z,fe),jn.raiz.position.set(fe.x,fe.y,fe.z),jn.raiz.rotation.y=fe.rumbo,jn.pose({tipo:$c[u]??(f>.25?"caminar":"idle"),fase:fe.fase,t:e,dt:i}),fe.dist+=((fe.primera?0:4.2)-fe.dist)*Math.min(1,i*9);let x=Math.cos(fe.cabeceo),_=.45*Math.min(1,fe.dist);ai.rotation.set(fe.cabeceo,fe.guinada,0,"YXZ"),ai.position.set(fe.x+o*x*fe.dist+l*_,Math.max(.35,fe.y+1.62-Math.sin(fe.cabeceo)*fe.dist),fe.z+l*x*fe.dist-o*_),ai.updateMatrixWorld(),jn.raiz.visible=fe.dist>.7;for(let M of Fv)M.d+=M.s*M.v*i,M.d>Rn.largo-8?M.s=-1:M.d<8&&(M.s=1),Rn.en(M.d,M.a,ud),qt.fijar(M.id,ud.x,ud.z,void 0,M.op);Da.cada(i,a,Gr);for(let M of Da.B.values())if(et.anfitrion())qt.fijar("b:"+M.rol,M.x,M.z,M.rumbo,gd(M.rol),M.y,M.pose);else{let m=qt.mapa.get("b:"+M.rol);m&&(M.x=m.x,M.z=m.z,M.y=m.y,M.rumbo=m.rumbo)}qt.cada(i,e,ai),Ia.length=0,Ia.push(fe);for(let M of qt.mapa.values())Rn.aVia(M.x,M.z,M),Ia.push(M);Vr.cada(i,Ia),et.anfitrion()&&Jt.cargando(a)&&Jt.llego(Gr)&&et.proponer({t:"auto",paso:"llegada"}),Jt.cada(i,e,a,Gr);let g="",h=null,y=!1,C=null;if(a.fase==="trabajo"&&r){let M=P=>P.lugar==="arriba"?r==="liniero"&&Jt.subida>=1:fd(P.lugar)<4.2,m=Or(a,r),S=m.find(P=>!P.bloqueo),w=m.find(P=>!P.bloqueo&&M(P.paso))??m.find(P=>M(P.paso));if(p)g=`Lleva la escalera al poste con tu compa\xF1ero \xB7 ${Math.round(fd("poste"))} m`,C="poste";else if(S){let P=M(S.paso)||S.paso.lugar==="arriba";g=`Tu tarea: ${S.paso.nombre}${P?"":` \xB7 ${Vv[S.paso.lugar]} est\xE1 a ${Math.round(fd(S.paso.lugar))} m`}`,C=P?null:S.paso.lugar}else{let P=ep(a);g=P?`Espera: ${Et[P.rol].corto} \u2192 ${P.nombre}`:"Trabajo terminado"}w&&!s&&(w.bloqueo&&a.modo==="aprendiz"?(h=`\u{1F512} Antes: ${w.bloqueo.nombre} (${Et[w.bloqueo.rol].corto})`,y=!0):h=`${kv[_d]??"E"} \xB7 ${w.paso.accion}`,n.accion&&(y?ft.avisar(`\u{1F512} Primero: <b>${st(w.bloqueo.nombre)}</b> (${st(Et[w.bloqueo.rol].corto)})`,"",3):w.paso.opciones&&!w.bloqueo?ft.decision(w.paso,a):et.proponer({t:"intento",paso:w.paso.id})))}else a.fase==="trabajo"?g="Observando: los compa\xF1eros autom\xE1ticos hacen el trabajo":a.fase==="fin"&&(g="Trabajo terminado");Jt.marcar(C);let b=`${a.n}|${g}|${h}|${r}`;a.fase==="sala"?ft.ocultarTablero():b!==xp&&(xp=b,ft.tablero(a,r,g,h,y)),a.fase==="fin"?(hl<0&&(hl=e),e-hl>3.5&&ft.abierto!=="fin"&&!md&&ft.fin(a)):hl=-1;let T=[];if(a.fase!=="sala")for(let M in Et){if(M===r)continue;let m=Gr(M);if(!m)continue;ji.set(m.x,(m.y??.15)+2.02,m.z);let S=ji.distanceTo(ai.position);ji.project(ai);let w=xn(a,M);T.push({visible:!s&&ji.z<1&&S<45&&Math.abs(ji.x)<1.05,x:(ji.x+1)/2*innerWidth,y:(1-ji.y)/2*innerHeight,texto:`${Et[M].icono} ${Et[M].corto}${w?" \xB7 "+a.jugadores[w].nombre:""}`})}ft.etiquetas(T);let E=0;for(let M of Ia)pl.fijar(E++,M.x,cn.altura(M.x,M.z),M.z,.62);for(let M of Vr.todos)pl.fijar(E++,M.x,0,M.z,2.3,4.9,M.rumbo);if(pl.listo(E),Math.hypot(fe.x-Br.x,fe.z-Br.z)>14&&(Br.set(fe.x,0,fe.z),qn.target.position.copy(Br),qn.position.copy(Br).addScaledVector(Uv,120),qn.target.updateMatrixWorld(),ln.shadowMap.needsUpdate=!0),Zt&&e-gp>.1){gp=e;let M={t:"p",x:+fe.x.toFixed(2),z:+fe.z.toFixed(2),y:+fe.y.toFixed(2),r:+fe.rumbo.toFixed(2),o:u};et.anfitrion()&&(M.n=a.n,M.h=et.huella,Da.B.size&&(M.b=[...Da.B.values()].map(m=>[m.rol,+m.x.toFixed(2),+m.z.toFixed(2),+m.y.toFixed(2),+m.rumbo.toFixed(2),m.pose]))),(r||et.anfitrion())&&Zt.enviar(M)}if(ln.render(si,ai),hd+=performance.now()-t,ul++,e-pd>=1){bd=ul/(e-pd),Sp=hd/ul,ul=0,hd=0,pd=e,bd<27&&La>wi.minPixelRatio&&(La=Math.max(wi.minPixelRatio,La-.15),ln.setPixelRatio(La)),Ov.escribir(Ep().texto),Zt&&!Zt.estado.presencia&&e>6&&et.jugarSolo();let M=!Zt||Zt.estado.presencia||e>6,m=Zt?.estado.pares.size??0;(M!==vd||m!==pp)&&(vd=M,pp=m,Sd()),md&&a.fase==="sala"&&et.anfitrion()&&et.proponer({t:"empezar",demo:!0})}}function Ep(){let i=ln.info.render,e=Zt?[...Zt.estado.pares.values()]:[],t=e.filter(r=>r.directo),n=et.E,a={fps:Math.round(bd),ms:+Sp.toFixed(1),llamadas:i.calls,triangulos:i.triangles,pixeles:+La.toFixed(2),entrada:_d,vista:fe.primera?"1.\xAA persona":"3.\xAA persona",x:fe.x,z:fe.z,d:fe.d,a:fe.a,red:Zt?.estado.ws??"apagada",rtt:Zt?.estado.rtt,pares:e.length,directos:t.length,personas:Ia.length,autos:Vr.todos.length,fase:n.fase,rol:Ua(),hechos:Object.keys(n.hechos).length,pasos:Hn.length,seguridad:Pa(n),faltas:n.eventos.filter(r=>r.tipo==="falta").length,anfitrion:et.anfitrion(),panel:ft.abierto};return a.texto=["Cuadrilla Segura \xB7 Mundo",`${a.fps} cuadros/s \xB7 ${a.ms} ms por cuadro (CPU)`,`${a.llamadas} llamadas de dibujo \xB7 ${Math.round(a.triangulos/1e3)} mil tri\xE1ngulos`,`resoluci\xF3n \xD7${a.pixeles} \xB7 sombra ${wi.sombra} \xB7 ${wi.movil?wi.bajo?"tel\xE9fono modesto":"tel\xE9fono":"escritorio"}`,`${a.personas} personas \xB7 ${a.autos} autos \xB7 ${a.vista} \xB7 ${a.entrada}`,`red: ${a.red}${a.rtt!=null?` \xB7 ida y vuelta ${Math.round(a.rtt)} ms`:""}${a.anfitrion?" \xB7 anfitri\xF3n":""}`,`otros jugadores: ${a.pares}${a.pares?` (${a.directos} con enlace directo${t[0]?.rtt!=null?`, ${Math.round(t[0].rtt)} ms`:""})`:""}`,`trabajo: ${a.fase} \xB7 ${a.hechos}/${a.pasos} pasos \xB7 seguridad ${a.seguridad}`].join(`
`),a}globalThis.__mundo={J:fe,info:Ep,red:Zt,avatares:qt,entrada:_p,via:Rn,barrio:cn,trafico:Vr,obra:Jt,bots:Da,ui:ft,CARRIL:sl,get sesion(){return et},get E(){return et.E}};Sd();Mp();
