var lh=0,Ud=1,ch=2;var _o=1,dh=2,dr=3,ai=0,on=1,Gn=2,Ea=0,ur=1,zd=2,Od=3,Gd=4,uh=5;var Ei=100,ph=101,hh=102,fh=103,mh=104,gh=200,xh=201,bh=202,vh=203,Hd=204,kd=205,yh=206,_h=207,Sh=208,Eh=209,Mh=210,Ah=211,Th=212,wh=213,Ch=214,Ls=0,Fs=1,Ns=2,Ki=3,Bs=4,Us=5,zs=6,Os=7,vl=0,Rh=1,Ph=2,da=0,Vd=1,jd=2,qd=3,So=4,$d=5,Wd=6,Xd=7;var Yd=300,ii=301,Mi=302,yl=303,_l=304,Eo=306,Ka=1e3,ba=1001,Gs=1002,nn=1003,Ih=1004;var Mo=1005;var rn=1006,Sl=1007;var ri=1008;var Rn=1009,Jd=1010,Zd=1011,pr=1012,El=1013,ua=1014,Zn=1015,pa=1016,Ml=1017,Al=1018,hr=1020,Kd=35902,Qd=35899,eu=1021,tu=1022,Kn=1023,va=1026,oi=1027,Tl=1028,wl=1029,si=1030,Cl=1031;var Rl=1033,Ao=33776,To=33777,wo=33778,Co=33779,Pl=35840,Il=35841,Dl=35842,Ll=35843,Fl=36196,Nl=37492,Bl=37496,Ul=37488,zl=37489,Ro=37490,Ol=37491,Gl=37808,Hl=37809,kl=37810,Vl=37811,jl=37812,ql=37813,$l=37814,Wl=37815,Xl=37816,Yl=37817,Jl=37818,Zl=37819,Kl=37820,Ql=37821,ec=36492,tc=36494,nc=36495,ac=36283,ic=36284,Po=36285,rc=36286;var Xr=2300,Hs=2301,Is=2302,Rd=2303,Pd=2400,Id=2401,Dd=2402;var Dh=3200;var Io=0,Lh=1,za="",Ht="srgb",Yr="srgb-linear",Jr="linear",Ct="srgb";var Ds=7680;var Fh=519,Nh=512,Bh=513,Uh=514,oc=515,zh=516,Oh=517,sc=518,Gh=519,Hh=35044;var nu="300 es",sa=2e3,Qi=2001;function O0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function G0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kh(){let n=Zr("canvas");return n.style.display="block",n}var Dp={},er=null;function au(...n){let e="THREE."+n.shift();er?er("log",e,...n):console.log(e,...n)}function Vh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Qe(...n){n=Vh(n);let e="THREE."+n.shift();if(er)er("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function it(...n){n=Vh(n);let e="THREE."+n.shift();if(er)er("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function yi(...n){let e=n.join(" ");e in Dp||(Dp[e]=!0,Qe(...n))}function jh(n,e,t){return new Promise(function(a,i){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:a()}}setTimeout(r,t)})}var qh={[Ls]:Fs,[Ns]:zs,[Bs]:Os,[Ki]:Us,[Fs]:Ls,[zs]:Ns,[Os]:Bs,[Us]:Ki},ya=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){let a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){let a=this._listeners;if(a===void 0)return;let i=a[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let a=t[e.type];if(a!==void 0){e.target=this;let i=a.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nd=Math.PI/180,ks=180/Math.PI;function Do(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[a&255]+pn[a>>8&255]+pn[a>>16&255]+pn[a>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function H0(n,e){return(n%e+e)%e}function ad(n,e,t){return(1-t)*n+t*e}function zr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xe=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,a=this.y,i=e.elements;return this.x=i[0]*t+i[3]*a+i[6],this.y=i[1]*t+i[4]*a+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let a=this.dot(e)/t;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let a=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*a-o*i+e.x,this.y=r*i+o*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xn=class{constructor(e=0,t=0,a=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=i}static slerpFlat(e,t,a,i,r,o,s){let c=a[i+0],l=a[i+1],d=a[i+2],p=a[i+3],u=r[o+0],f=r[o+1],x=r[o+2],y=r[o+3];if(p!==y||c!==u||l!==f||d!==x){let m=c*u+l*f+d*x+p*y;m<0&&(u=-u,f=-f,x=-x,y=-y,m=-m);let h=1-s;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);h=Math.sin(h*b)/E,s=Math.sin(s*b)/E,c=c*h+u*s,l=l*h+f*s,d=d*h+x*s,p=p*h+y*s}else{c=c*h+u*s,l=l*h+f*s,d=d*h+x*s,p=p*h+y*s;let b=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=b,l*=b,d*=b,p*=b}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,a,i,r,o){let s=a[i],c=a[i+1],l=a[i+2],d=a[i+3],p=r[o],u=r[o+1],f=r[o+2],x=r[o+3];return e[t]=s*x+d*p+c*f-l*u,e[t+1]=c*x+d*u+l*p-s*f,e[t+2]=l*x+d*f+s*u-c*p,e[t+3]=d*x-s*p-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,i){return this._x=e,this._y=t,this._z=a,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let a=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(a/2),d=s(i/2),p=s(r/2),u=c(a/2),f=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=u*d*p+l*f*x,this._y=l*f*p-u*d*x,this._z=l*d*x+u*f*p,this._w=l*d*p-u*f*x;break;case"YXZ":this._x=u*d*p+l*f*x,this._y=l*f*p-u*d*x,this._z=l*d*x-u*f*p,this._w=l*d*p+u*f*x;break;case"ZXY":this._x=u*d*p-l*f*x,this._y=l*f*p+u*d*x,this._z=l*d*x+u*f*p,this._w=l*d*p-u*f*x;break;case"ZYX":this._x=u*d*p-l*f*x,this._y=l*f*p+u*d*x,this._z=l*d*x-u*f*p,this._w=l*d*p+u*f*x;break;case"YZX":this._x=u*d*p+l*f*x,this._y=l*f*p+u*d*x,this._z=l*d*x-u*f*p,this._w=l*d*p-u*f*x;break;case"XZY":this._x=u*d*p-l*f*x,this._y=l*f*p-u*d*x,this._z=l*d*x+u*f*p,this._w=l*d*p+u*f*x;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let a=t/2,i=Math.sin(a);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,a=t[0],i=t[4],r=t[8],o=t[1],s=t[5],c=t[9],l=t[2],d=t[6],p=t[10],u=a+s+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(a>s&&a>p){let f=2*Math.sqrt(1+a-s-p);this._w=(d-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(s>p){let f=2*Math.sqrt(1+s-a-p);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+d)/f}else{let f=2*Math.sqrt(1+p-a-s);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let a=this.angleTo(e);if(a===0)return this;let i=Math.min(1,t/a);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let a=e._x,i=e._y,r=e._z,o=e._w,s=t._x,c=t._y,l=t._z,d=t._w;return this._x=a*d+o*s+i*l-r*c,this._y=i*d+o*c+r*s-a*l,this._z=r*d+o*l+a*c-i*s,this._w=o*d-a*s-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let a=e._x,i=e._y,r=e._z,o=e._w,s=this.dot(e);s<0&&(a=-a,i=-i,r=-r,o=-o,s=-s);let c=1-t;if(s<.9995){let l=Math.acos(s),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+a*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+a*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),i=Math.sqrt(1-a),r=Math.sqrt(a);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,a=0){this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,a=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*a+r[6]*i,this.y=r[1]*t+r[4]*a+r[7]*i,this.z=r[2]*t+r[5]*a+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,a=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*a+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*a+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*a+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*a+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,a=this.y,i=this.z,r=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*i-s*a),d=2*(s*t-r*i),p=2*(r*a-o*t);return this.x=t+c*l+o*p-s*d,this.y=a+c*d+s*l-r*p,this.z=i+c*p+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,a=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*a+r[8]*i,this.y=r[1]*t+r[5]*a+r[9]*i,this.z=r[2]*t+r[6]*a+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let a=e.x,i=e.y,r=e.z,o=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*o-a*c,this.z=a*s-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let a=this.dot(e)/t;return Math.acos(gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,a=this.y-e.y,i=this.z-e.z;return t*t+a*a+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){let i=Math.sin(t)*e;return this.x=i*Math.sin(a),this.y=Math.cos(t)*e,this.z=i*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},id=new B,Lp=new Xn,st=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,a,i,r,o,s,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,i,r,o,s,c,l)}set(e,t,a,i,r,o,s,c,l){let d=this.elements;return d[0]=e,d[1]=i,d[2]=s,d[3]=t,d[4]=r,d[5]=c,d[6]=a,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let a=e.elements,i=t.elements,r=this.elements,o=a[0],s=a[3],c=a[6],l=a[1],d=a[4],p=a[7],u=a[2],f=a[5],x=a[8],y=i[0],m=i[3],h=i[6],b=i[1],E=i[4],v=i[7],M=i[2],A=i[5],w=i[8];return r[0]=o*y+s*b+c*M,r[3]=o*m+s*E+c*A,r[6]=o*h+s*v+c*w,r[1]=l*y+d*b+p*M,r[4]=l*m+d*E+p*A,r[7]=l*h+d*v+p*w,r[2]=u*y+f*b+x*M,r[5]=u*m+f*E+x*A,r[8]=u*h+f*v+x*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],a=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*s*l-a*r*d+a*s*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],a=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],p=d*o-s*l,u=s*c-d*r,f=l*r-o*c,x=t*p+a*u+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=p*y,e[1]=(i*l-d*a)*y,e[2]=(s*a-i*o)*y,e[3]=u*y,e[4]=(d*t-i*c)*y,e[5]=(i*r-s*t)*y,e[6]=f*y,e[7]=(a*c-l*t)*y,e[8]=(o*t-a*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,i,r,o,s){let c=Math.cos(r),l=Math.sin(r);return this.set(a*c,a*l,-a*(c*o+l*s)+o+e,-i*l,i*c,-i*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rd.makeScale(e,t)),this}rotate(e){return yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rd.makeRotation(-e)),this}translate(e,t){return yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,a=e.elements;for(let i=0;i<9;i++)if(t[i]!==a[i])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){let a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rd=new st,Fp=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k0(){let n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(i.r=Ba(i.r),i.g=Ba(i.g),i.b=Ba(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===za?Jr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return n.define({[Yr]:{primaries:e,whitePoint:a,transfer:Jr,toXYZ:Fp,fromXYZ:Np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:a,transfer:Ct,toXYZ:Fp,fromXYZ:Np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}var yt=k0();function Ba(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ui,Vs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ui===void 0&&(Ui=Zr("canvas")),Ui.width=e.width,Ui.height=e.height;let i=Ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),a=Ui}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);let i=a.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ba(r[o]/255)*255;return a.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Ba(t[a]/255)*255):t[a]=Ba(t[a]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V0=0,tr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let a={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(od(i[o].image)):r.push(od(i[o]))}else r=od(i);a.url=r}return t||(e.images[this.uuid]=a),a}};function od(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vs.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var j0=0,sd=new B,yn=class n extends ya{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,a=ba,i=ba,r=rn,o=ri,s=Kn,c=Rn,l=n.DEFAULT_ANISOTROPY,d=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Do(),this.name="",this.source=new tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let a=e[t];if(a===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&a&&i.isVector2&&a.isVector2||i&&a&&i.isVector3&&a.isVector3||i&&a&&i.isMatrix3&&a.isMatrix3?i.copy(a):this[t]=a}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case ba:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case ba:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Yd;yn.DEFAULT_ANISOTROPY=1;var Ot=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,a=0,i=1){this.x=e,this.y=t,this.z=a,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,i){return this.x=e,this.y=t,this.z=a,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,a=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*a+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*a+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*a+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*a+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,i,r,c=e.elements,l=c[0],d=c[4],p=c[8],u=c[1],f=c[5],x=c[9],y=c[2],m=c[6],h=c[10];if(Math.abs(d-u)<.01&&Math.abs(p-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,v=(f+1)/2,M=(h+1)/2,A=(d+u)/4,w=(p+y)/4,g=(x+m)/4;return E>v&&E>M?E<.01?(a=0,i=.707106781,r=.707106781):(a=Math.sqrt(E),i=A/a,r=w/a):v>M?v<.01?(a=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),a=A/i,r=g/i):M<.01?(a=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),a=w/r,i=g/r),this.set(a,i,r,t),this}let b=Math.sqrt((m-x)*(m-x)+(p-y)*(p-y)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(p-y)/b,this.z=(u-d)/b,this.w=Math.acos((l+f+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(gt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},js=class extends ya{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:a.depth},r=new yn(i),o=a.count;for(let s=0;s<o;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=a,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new tr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends js{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}},Kr=class extends yn{constructor(e=null,t=1,a=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qs=class extends yn{constructor(e=null,t=1,a=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var xt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,a,i,r,o,s,c,l,d,p,u,f,x,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,i,r,o,s,c,l,d,p,u,f,x,y,m)}set(e,t,a,i,r,o,s,c,l,d,p,u,f,x,y,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=a,h[12]=i,h[1]=r,h[5]=o,h[9]=s,h[13]=c,h[2]=l,h[6]=d,h[10]=p,h[14]=u,h[3]=f,h[7]=x,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){let t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,a=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=a[0]*i,t[1]=a[1]*i,t[2]=a[2]*i,t[3]=0,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=0,t[8]=a[8]*o,t[9]=a[9]*o,t[10]=a[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,a=e.x,i=e.y,r=e.z,o=Math.cos(a),s=Math.sin(a),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=o*d,f=o*p,x=s*d,y=s*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=f+x*l,t[5]=u-y*l,t[9]=-s*c,t[2]=y-u*l,t[6]=x+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*d,f=c*p,x=l*d,y=l*p;t[0]=u+y*s,t[4]=x*s-f,t[8]=o*l,t[1]=o*p,t[5]=o*d,t[9]=-s,t[2]=f*s-x,t[6]=y+u*s,t[10]=o*c}else if(e.order==="ZXY"){let u=c*d,f=c*p,x=l*d,y=l*p;t[0]=u-y*s,t[4]=-o*p,t[8]=x+f*s,t[1]=f+x*s,t[5]=o*d,t[9]=y-u*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){let u=o*d,f=o*p,x=s*d,y=s*p;t[0]=c*d,t[4]=x*l-f,t[8]=u*l+y,t[1]=c*p,t[5]=y*l+u,t[9]=f*l-x,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,x=s*c,y=s*l;t[0]=c*d,t[4]=y-u*p,t[8]=x*p+f,t[1]=p,t[5]=o*d,t[9]=-s*d,t[2]=-l*d,t[6]=f*p+x,t[10]=u-y*p}else if(e.order==="XZY"){let u=o*c,f=o*l,x=s*c,y=s*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=u*p+y,t[5]=o*d,t[9]=f*p-x,t[2]=x*p-f,t[6]=s*d,t[10]=y*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q0,e,$0)}lookAt(e,t,a){let i=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),$a.crossVectors(a,Fn),$a.lengthSq()===0&&(Math.abs(a.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),$a.crossVectors(a,Fn)),$a.normalize(),cs.crossVectors(Fn,$a),i[0]=$a.x,i[4]=cs.x,i[8]=Fn.x,i[1]=$a.y,i[5]=cs.y,i[9]=Fn.y,i[2]=$a.z,i[6]=cs.z,i[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let a=e.elements,i=t.elements,r=this.elements,o=a[0],s=a[4],c=a[8],l=a[12],d=a[1],p=a[5],u=a[9],f=a[13],x=a[2],y=a[6],m=a[10],h=a[14],b=a[3],E=a[7],v=a[11],M=a[15],A=i[0],w=i[4],g=i[8],_=i[12],T=i[1],D=i[5],N=i[9],k=i[13],C=i[2],F=i[6],V=i[10],O=i[14],j=i[3],G=i[7],Z=i[11],ie=i[15];return r[0]=o*A+s*T+c*C+l*j,r[4]=o*w+s*D+c*F+l*G,r[8]=o*g+s*N+c*V+l*Z,r[12]=o*_+s*k+c*O+l*ie,r[1]=d*A+p*T+u*C+f*j,r[5]=d*w+p*D+u*F+f*G,r[9]=d*g+p*N+u*V+f*Z,r[13]=d*_+p*k+u*O+f*ie,r[2]=x*A+y*T+m*C+h*j,r[6]=x*w+y*D+m*F+h*G,r[10]=x*g+y*N+m*V+h*Z,r[14]=x*_+y*k+m*O+h*ie,r[3]=b*A+E*T+v*C+M*j,r[7]=b*w+E*D+v*F+M*G,r[11]=b*g+E*N+v*V+M*Z,r[15]=b*_+E*k+v*O+M*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],a=e[4],i=e[8],r=e[12],o=e[1],s=e[5],c=e[9],l=e[13],d=e[2],p=e[6],u=e[10],f=e[14],x=e[3],y=e[7],m=e[11],h=e[15],b=c*f-l*u,E=s*f-l*p,v=s*u-c*p,M=o*f-l*d,A=o*u-c*d,w=o*p-s*d;return t*(y*b-m*E+h*v)-a*(x*b-m*M+h*A)+i*(x*E-y*M+h*w)-r*(x*v-y*A+m*w)}determinantAffine(){let e=this.elements,t=e[0],a=e[4],i=e[8],r=e[1],o=e[5],s=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-s*l)-a*(r*d-s*c)+i*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=a),this}invert(){let e=this.elements,t=e[0],a=e[1],i=e[2],r=e[3],o=e[4],s=e[5],c=e[6],l=e[7],d=e[8],p=e[9],u=e[10],f=e[11],x=e[12],y=e[13],m=e[14],h=e[15],b=t*s-a*o,E=t*c-i*o,v=t*l-r*o,M=a*c-i*s,A=a*l-r*s,w=i*l-r*c,g=d*y-p*x,_=d*m-u*x,T=d*h-f*x,D=p*m-u*y,N=p*h-f*y,k=u*h-f*m,C=b*k-E*N+v*D+M*T-A*_+w*g;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return e[0]=(s*k-c*N+l*D)*F,e[1]=(i*N-a*k-r*D)*F,e[2]=(y*w-m*A+h*M)*F,e[3]=(u*A-p*w-f*M)*F,e[4]=(c*T-o*k-l*_)*F,e[5]=(t*k-i*T+r*_)*F,e[6]=(m*v-x*w-h*E)*F,e[7]=(d*w-u*v+f*E)*F,e[8]=(o*N-s*T+l*g)*F,e[9]=(a*T-t*N-r*g)*F,e[10]=(x*A-y*v+h*b)*F,e[11]=(p*v-d*A-f*b)*F,e[12]=(s*_-o*D-c*g)*F,e[13]=(t*D-a*_+i*g)*F,e[14]=(y*E-x*M-m*b)*F,e[15]=(d*M-p*E+u*b)*F,this}scale(e){let t=this.elements,a=e.x,i=e.y,r=e.z;return t[0]*=a,t[4]*=i,t[8]*=r,t[1]*=a,t[5]*=i,t[9]*=r,t[2]*=a,t[6]*=i,t[10]*=r,t[3]*=a,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,i))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let a=Math.cos(t),i=Math.sin(t),r=1-a,o=e.x,s=e.y,c=e.z,l=r*o,d=r*s;return this.set(l*o+a,l*s-i*c,l*c+i*s,0,l*s+i*c,d*s+a,d*c-i*o,0,l*c-i*s,d*c+i*o,r*c*c+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,i,r,o){return this.set(1,a,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,a){let i=this.elements,r=t._x,o=t._y,s=t._z,c=t._w,l=r+r,d=o+o,p=s+s,u=r*l,f=r*d,x=r*p,y=o*d,m=o*p,h=s*p,b=c*l,E=c*d,v=c*p,M=a.x,A=a.y,w=a.z;return i[0]=(1-(y+h))*M,i[1]=(f+v)*M,i[2]=(x-E)*M,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(u+h))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(x+E)*w,i[9]=(m-b)*w,i[10]=(1-(u+y))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,a){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return a.set(1,1,1),t.identity(),this;let o=zi.set(i[0],i[1],i[2]).length(),s=zi.set(i[4],i[5],i[6]).length(),c=zi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),aa.copy(this);let l=1/o,d=1/s,p=1/c;return aa.elements[0]*=l,aa.elements[1]*=l,aa.elements[2]*=l,aa.elements[4]*=d,aa.elements[5]*=d,aa.elements[6]*=d,aa.elements[8]*=p,aa.elements[9]*=p,aa.elements[10]*=p,t.setFromRotationMatrix(aa),a.x=o,a.y=s,a.z=c,this}makePerspective(e,t,a,i,r,o,s=sa,c=!1){let l=this.elements,d=2*r/(t-e),p=2*r/(a-i),u=(t+e)/(t-e),f=(a+i)/(a-i),x,y;if(c)x=r/(o-r),y=o*r/(o-r);else if(s===sa)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(s===Qi)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,a,i,r,o,s=sa,c=!1){let l=this.elements,d=2/(t-e),p=2/(a-i),u=-(t+e)/(t-e),f=-(a+i)/(a-i),x,y;if(c)x=1/(o-r),y=o/(o-r);else if(s===sa)x=-2/(o-r),y=-(o+r)/(o-r);else if(s===Qi)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,a=e.elements;for(let i=0;i<16;i++)if(t[i]!==a[i])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){let a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}},zi=new B,aa=new xt,q0=new B(0,0,0),$0=new B(1,1,1),$a=new B,cs=new B,Fn=new B,Bp=new xt,Up=new Xn,Yn=class n{constructor(e=0,t=0,a=0,i=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,i=this._order){return this._x=e,this._y=t,this._z=a,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){let i=e.elements,r=i[0],o=i[4],s=i[8],c=i[1],l=i[5],d=i[9],p=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Up.setFromEuler(this),this.setFromQuaternion(Up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},W0=0,zp=new B,Oi=new Xn,Ia=new xt,ds=new B,Or=new B,X0=new B,Y0=new Xn,Op=new B(1,0,0),Gp=new B(0,1,0),Hp=new B(0,0,1),kp={type:"added"},J0={type:"removed"},Gi={type:"childadded",child:null},ld={type:"childremoved",child:null},_t=class n extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new Yn,a=new Xn,i=new B(1,1,1);function r(){a.setFromEuler(t,!1)}function o(){t.setFromQuaternion(a,void 0,!1)}t._onChange(r),a._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new st}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Hp,e)}translateOnAxis(e,t){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?ds.copy(e):ds.set(e,t,a);let i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(Or,ds,this.up):Ia.lookAt(ds,Or,this.up),this.quaternion.setFromRotationMatrix(Ia),i&&(Ia.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Ia),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kp),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0),ld.child=e,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kp),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,i=this.children.length;a<i;a++){let o=this.children[a].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,a=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*a-r[8]*i,r[13]+=a-r[1]*t-r[5]*a-r[9]*i,r[14]+=i-r[2]*t-r[6]*a-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t,a=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),t===!0){let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0,a)}}toJSON(e){let t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(s=>({...s})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let c=s.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){let c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){let s=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),p=o(e.shapes),u=o(e.skeletons),f=o(e.animations),x=o(e.nodes);s.length>0&&(a.geometries=s),c.length>0&&(a.materials=c),l.length>0&&(a.textures=l),d.length>0&&(a.images=d),p.length>0&&(a.shapes=p),u.length>0&&(a.skeletons=u),f.length>0&&(a.animations=f),x.length>0&&(a.nodes=x)}return a.object=i,a;function o(s){let c=[];for(let l in s){let d=s[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){let i=e.children[a];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new B(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rt=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z0={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let i=null,r=null,o=null,s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,a),h=this._getHandJoint(l,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),f=.02,x=.005;l.inputState.pinching&&u>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(i=t.getPose(e.targetRaySpace,a),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let a=new rt;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},us={h:0,s:0,l:0};function cd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Oe=class{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=a,yt.colorSpaceToWorking(this,i),this}setHSL(e,t,a,i=yt.workingColorSpace){if(e=H0(e,1),t=gt(t,0,1),a=gt(a,0,1),t===0)this.r=this.g=this.b=a;else{let r=a<=.5?a*(1+t):a+t-a*t,o=2*a-r;this.r=cd(o,r,e+1/3),this.g=cd(o,r,e),this.b=cd(o,r,e-1/3)}return yt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function a(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return a(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return a(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return a(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let a=$h[e.toLowerCase()];return a!==void 0?this.setHex(a,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return yt.workingToColorSpace(hn.copy(this),e),Math.round(gt(hn.r*255,0,255))*65536+Math.round(gt(hn.g*255,0,255))*256+Math.round(gt(hn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(hn.copy(this),t);let a=hn.r,i=hn.g,r=hn.b,o=Math.max(a,i,r),s=Math.min(a,i,r),c,l,d=(s+o)/2;if(s===o)c=0,l=0;else{let p=o-s;switch(l=d<=.5?p/(o+s):p/(2-o-s),o){case a:c=(i-r)/p+(i<r?6:0);break;case i:c=(r-a)/p+2;break;case r:c=(a-i)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ht){yt.workingToColorSpace(hn.copy(this),e);let t=hn.r,a=hn.g,i=hn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(i*255)})`}offsetHSL(e,t,a){return this.getHSL(Wa),this.setHSL(Wa.h+e,Wa.s+t,Wa.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Wa),e.getHSL(us);let a=ad(Wa.h,us.h,t),i=ad(Wa.s,us.s,t),r=ad(Wa.l,us.l,t);return this.setHSL(a,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,a=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*a+r[6]*i,this.g=r[1]*t+r[4]*a+r[7]*i,this.b=r[2]*t+r[5]*a+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Oe;Oe.NAMES=$h;var eo=class n{constructor(e,t=1,a=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=a}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_i=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ia=new B,Da=new B,dd=new B,La=new B,Hi=new B,ki=new B,Vp=new B,ud=new B,pd=new B,hd=new B,fd=new Ot,md=new Ot,gd=new Ot,Za=class n{constructor(e=new B,t=new B,a=new B){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,i){i.subVectors(a,t),ia.subVectors(e,t),i.cross(ia);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,a,i,r){ia.subVectors(i,t),Da.subVectors(a,t),dd.subVectors(e,t);let o=ia.dot(ia),s=ia.dot(Da),c=ia.dot(dd),l=Da.dot(Da),d=Da.dot(dd),p=o*l-s*s;if(p===0)return r.set(0,0,0),null;let u=1/p,f=(l*c-s*d)*u,x=(o*d-s*c)*u;return r.set(1-f-x,x,f)}static containsPoint(e,t,a,i){return this.getBarycoord(e,t,a,i,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,t,a,i,r,o,s,c){return this.getBarycoord(e,t,a,i,La)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,La.x),c.addScaledVector(o,La.y),c.addScaledVector(s,La.z),c)}static getInterpolatedAttribute(e,t,a,i,r,o){return fd.setScalar(0),md.setScalar(0),gd.setScalar(0),fd.fromBufferAttribute(e,t),md.fromBufferAttribute(e,a),gd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fd,r.x),o.addScaledVector(md,r.y),o.addScaledVector(gd,r.z),o}static isFrontFacing(e,t,a,i){return ia.subVectors(a,t),Da.subVectors(e,t),ia.cross(Da).dot(i)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,i){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,a,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),ia.cross(Da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,i,r){return n.getInterpolation(e,this.a,this.b,this.c,t,a,i,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let a=this.a,i=this.b,r=this.c,o,s;Hi.subVectors(i,a),ki.subVectors(r,a),ud.subVectors(e,a);let c=Hi.dot(ud),l=ki.dot(ud);if(c<=0&&l<=0)return t.copy(a);pd.subVectors(e,i);let d=Hi.dot(pd),p=ki.dot(pd);if(d>=0&&p<=d)return t.copy(i);let u=c*p-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(a).addScaledVector(Hi,o);hd.subVectors(e,r);let f=Hi.dot(hd),x=ki.dot(hd);if(x>=0&&f<=x)return t.copy(r);let y=f*l-c*x;if(y<=0&&l>=0&&x<=0)return s=l/(l-x),t.copy(a).addScaledVector(ki,s);let m=d*x-f*p;if(m<=0&&p-d>=0&&f-x>=0)return Vp.subVectors(r,i),s=(p-d)/(p-d+(f-x)),t.copy(i).addScaledVector(Vp,s);let h=1/(m+y+u);return o=y*h,s=u*h,t.copy(a).addScaledVector(Hi,o).addScaledVector(ki,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},la=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(ra.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(ra.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let a=ra.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let a=e.geometry;if(a!==void 0){let r=a.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=r.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,ra):ra.fromBufferAttribute(r,o),ra.applyMatrix4(e.matrixWorld),this.expandByPoint(ra);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ps.copy(a.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ra),ra.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),hs.subVectors(this.max,Gr),Vi.subVectors(e.a,Gr),ji.subVectors(e.b,Gr),qi.subVectors(e.c,Gr),Xa.subVectors(ji,Vi),Ya.subVectors(qi,ji),gi.subVectors(Vi,qi);let t=[0,-Xa.z,Xa.y,0,-Ya.z,Ya.y,0,-gi.z,gi.y,Xa.z,0,-Xa.x,Ya.z,0,-Ya.x,gi.z,0,-gi.x,-Xa.y,Xa.x,0,-Ya.y,Ya.x,0,-gi.y,gi.x,0];return!xd(t,Vi,ji,qi,hs)||(t=[1,0,0,0,1,0,0,0,1],!xd(t,Vi,ji,qi,hs))?!1:(fs.crossVectors(Xa,Ya),t=[fs.x,fs.y,fs.z],xd(t,Vi,ji,qi,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ra).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ra).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fa=[new B,new B,new B,new B,new B,new B,new B,new B],ra=new B,ps=new la,Vi=new B,ji=new B,qi=new B,Xa=new B,Ya=new B,gi=new B,Gr=new B,hs=new B,fs=new B,xi=new B;function xd(n,e,t,a,i){for(let r=0,o=n.length-3;r<=o;r+=3){xi.fromArray(n,r);let s=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),d=a.dot(xi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>s)return!1}return!0}var Jt=new B,ms=new Xe,K0=0,bt=class extends ya{constructor(e,t,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Hh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[a+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=zr(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Mn(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),a=Mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),a=Mn(a,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=i,this}setXYZW(e,t,a,i,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),a=Mn(a,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var to=class extends bt{constructor(e,t,a){super(new Uint16Array(e),t,a)}};var no=class extends bt{constructor(e,t,a){super(new Uint32Array(e),t,a)}};var tt=class extends bt{constructor(e,t,a){super(new Float32Array(e),t,a)}},Q0=new la,Hr=new B,bd=new B,Ua=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let a=this.center;t!==void 0?a.copy(t):Q0.setFromPoints(e).getCenter(a);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,a.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);let t=Hr.lengthSq();if(t>this.radius*this.radius){let a=Math.sqrt(t),i=(a-this.radius)*.5;this.center.addScaledVector(Hr,i/a),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(bd)),this.expandByPoint(Hr.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},eg=0,Wn=new xt,vd=new _t,$i=new B,Nn=new la,kr=new la,tn=new B,ft=class n extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O0(e)?no:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let a=this.attributes.normal;if(a!==void 0){let r=new st().getNormalMatrix(e);a.applyNormalMatrix(r),a.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,a){return Wn.makeTranslation(e,t,a),this.applyMatrix4(Wn),this}scale(e,t,a){return Wn.makeScale(e,t,a),this.applyMatrix4(Wn),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let a=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];a.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(a,3))}else{let a=Math.min(e.length,t.count);for(let i=0;i<a;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,i=t.length;a<i;a++){let r=t[a];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ua);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let a=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let s=t[r];kr.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(Nn.min,kr.min),Nn.expandByPoint(tn),tn.addVectors(Nn.max,kr.max),Nn.expandByPoint(tn)):(Nn.expandByPoint(kr.min),Nn.expandByPoint(kr.max))}Nn.getCenter(a);let i=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),i=Math.max(i,a.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let s=t[r],c=this.morphTargetsRelative;for(let l=0,d=s.count;l<d;l++)tn.fromBufferAttribute(s,l),c&&($i.fromBufferAttribute(e,l),tn.add($i)),i=Math.max(i,a.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let a=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==a.count)&&(o=new bt(new Float32Array(4*a.count),4),this.setAttribute("tangent",o));let s=[],c=[];for(let g=0;g<a.count;g++)s[g]=new B,c[g]=new B;let l=new B,d=new B,p=new B,u=new Xe,f=new Xe,x=new Xe,y=new B,m=new B;function h(g,_,T){l.fromBufferAttribute(a,g),d.fromBufferAttribute(a,_),p.fromBufferAttribute(a,T),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,_),x.fromBufferAttribute(r,T),d.sub(l),p.sub(l),f.sub(u),x.sub(u);let D=1/(f.x*x.y-x.x*f.y);isFinite(D)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(D),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(D),s[g].add(y),s[_].add(y),s[T].add(y),c[g].add(m),c[_].add(m),c[T].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let g=0,_=b.length;g<_;++g){let T=b[g],D=T.start,N=T.count;for(let k=D,C=D+N;k<C;k+=3)h(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new B,v=new B,M=new B,A=new B;function w(g){M.fromBufferAttribute(i,g),A.copy(M);let _=s[g];E.copy(_),E.sub(M.multiplyScalar(M.dot(_))).normalize(),v.crossVectors(A,_);let D=v.dot(c[g])<0?-1:1;o.setXYZW(g,E.x,E.y,E.z,D)}for(let g=0,_=b.length;g<_;++g){let T=b[g],D=T.start,N=T.count;for(let k=D,C=D+N;k<C;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==t.count)a=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let u=0,f=a.count;u<f;u++)a.setXYZ(u,0,0,0);let i=new B,r=new B,o=new B,s=new B,c=new B,l=new B,d=new B,p=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),d.subVectors(o,r),p.subVectors(i,r),d.cross(p),s.fromBufferAttribute(a,x),c.fromBufferAttribute(a,y),l.fromBufferAttribute(a,m),s.add(d),c.add(d),l.add(d),a.setXYZ(x,s.x,s.y,s.z),a.setXYZ(y,c.x,c.y,c.z),a.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),p.subVectors(i,r),d.cross(p),a.setXYZ(u+0,d.x,d.y,d.z),a.setXYZ(u+1,d.x,d.y,d.z),a.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(s,c){let l=s.array,d=s.itemSize,p=s.normalized,u=new l.constructor(c.length*d),f=0,x=0;for(let y=0,m=c.length;y<m;y++){s.isInterleavedBufferAttribute?f=c[y]*s.data.stride+s.offset:f=c[y]*d;for(let h=0;h<d;h++)u[x++]=l[f++]}return new bt(u,d,p)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,a=this.index.array,i=this.attributes;for(let s in i){let c=i[s],l=e(c,a);t.setAttribute(s,l)}let r=this.morphAttributes;for(let s in r){let c=[],l=r[s];for(let d=0,p=l.length;d<p;d++){let u=l[d],f=e(u,a);c.push(f)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,c=o.length;s<c;s++){let l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let a=this.attributes;for(let c in a){let l=a[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let p=0,u=l.length;p<u;p++){let f=l[p];d.push(f.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let a=e.index;a!==null&&this.setIndex(a.clone());let i=e.attributes;for(let l in i){let d=i[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],p=r[l];for(let u=0,f=p.length;u<f;u++)d.push(p[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yd=new B,tg=new B,ng=new st,oa=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,i){return this.normal.set(e,t,a),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){let i=yd.subVectors(a,t).cross(tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,a=!0){let i=e.delta(yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return a===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let a=t||ng.getNormalMatrix(e),i=this.coplanarPoint(yd).applyMatrix4(e),r=this.normal.applyMatrix3(a).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ag=0,_a=class extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=ur,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=kd,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let a=e[t];if(a===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(a):i&&i.isVector2&&a&&a.isVector2||i&&i.isEuler&&a&&a.isEuler||i&&i.isVector3&&a&&a.isVector3?i.copy(a):this[t]=a}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function i(r){let o=[];for(let s in r){let c=r[s];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(a.textures=r),o.length>0&&(a.images=o)}return a}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new oa().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Xe().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,a=null;if(t!==null){let i=t.length;a=new Array(i);for(let r=0;r!==i;++r)a[r]=t[r].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Na=new B,_d=new B,gs=new B,xs=new B,ao=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Na.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,t),Na.distanceToSquared(e))}distanceSqToSegment(e,t,a,i){_d.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(_d);let r=e.distanceTo(t)*.5,o=-this.direction.dot(gs),s=xs.dot(this.direction),c=-xs.dot(gs),l=xs.lengthSq(),d=Math.abs(1-o*o),p,u,f,x;if(d>0)if(p=o*c-s,u=o*s-c,x=r*d,p>=0)if(u>=-x)if(u<=x){let y=1/d;p*=y,u*=y,f=p*(p+o*u+2*s)+u*(o*p+u+2*c)+l}else u=r,p=Math.max(0,-(o*u+s)),f=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(o*u+s)),f=-p*p+u*(u+2*c)+l;else u<=-x?(p=Math.max(0,-(-o*r+s)),u=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+u*(u+2*c)+l):u<=x?(p=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(p=Math.max(0,-(o*r+s)),u=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+u*(u+2*c)+l);else u=o>0?-r:r,p=Math.max(0,-(o*u+s)),f=-p*p+u*(u+2*c)+l;return a&&a.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(_d).addScaledVector(gs,u),f}intersectSphere(e,t){if(e.radius<0)return null;Na.subVectors(e.center,this.origin);let a=Na.dot(this.direction),i=Na.dot(Na)-a*a,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),s=a-o,c=a+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){let a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,i,r,o,s,c,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(a=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(a=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),a>o||r>i||((r>a||isNaN(a))&&(a=r),(o<i||isNaN(i))&&(i=o),p>=0?(s=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(s=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),a>c||s>i)||((s>a||a!==a)&&(a=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(a>=0?a:i,t)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,t,a,i,r){let o=this.origin,s=this.direction,c=s.x,l=s.y,d=s.z,p=e.x-o.x,u=e.y-o.y,f=e.z-o.z,x=t.x-o.x,y=t.y-o.y,m=t.z-o.z,h=a.x-o.x,b=a.y-o.y,E=a.z-o.z,v=Math.abs(c),M=Math.abs(l),A=Math.abs(d),w,g,_,T,D,N,k,C,F,V,O,j;if(v>=M&&v>=A?(_=c,N=p,F=x,j=h,c>=0?(w=l,g=d,T=u,D=f,k=y,C=m,V=b,O=E):(w=d,g=l,T=f,D=u,k=m,C=y,V=E,O=b)):M>=A?(_=l,N=u,F=y,j=b,l>=0?(w=d,g=c,T=f,D=p,k=m,C=x,V=E,O=h):(w=c,g=d,T=p,D=f,k=x,C=m,V=h,O=E)):(_=d,N=f,F=m,j=E,d>=0?(w=c,g=l,T=p,D=u,k=x,C=y,V=h,O=b):(w=l,g=c,T=u,D=p,k=y,C=x,V=b,O=h)),_===0)return null;let G=w/_,Z=g/_,ie=1/_,xe=T-G*N,Ee=D-Z*N,Be=k-G*F,_e=C-Z*F,J=V-G*j,z=O-Z*j,$=J*_e-z*Be,pe=xe*z-Ee*J,ye=Be*Ee-_e*xe;if(i){if($<0||pe<0||ye<0)return null}else if(($<0||pe<0||ye<0)&&($>0||pe>0||ye>0))return null;let me=$+pe+ye;if(me===0)return null;let Ce=ie*($*N+pe*F+ye*j);return(me>0?Ce<0:Ce>0)?null:this.at(Ce/me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jp=new xt,bi=new ao,bs=new Ua,qp=new B,vs=new B,ys=new B,_s=new B,Sd=new B,Ss=new B,$p=new B,Es=new B,Fe=class extends _t{constructor(e=new ft,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let i=t[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let a=this.geometry,i=a.attributes.position,r=a.morphAttributes.position,o=a.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(r&&s){Ss.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=s[c],p=r[c];d!==0&&(Sd.fromBufferAttribute(p,e),o?Ss.addScaledVector(Sd,d):Ss.addScaledVector(Sd.sub(t),d))}t.add(Ss)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let a=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),bs.copy(a.boundingSphere),bs.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(bs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(bs,qp)===null||bi.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(jp.copy(r).invert(),bi.copy(e.ray).applyMatrix4(jp),!(a.boundingBox!==null&&bi.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,a){let i,r=this.geometry,o=this.material,s=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(s!==null)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let m=u[x],h=o[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,M=E;v<M;v+=3){let A=s.getX(v),w=s.getX(v+1),g=s.getX(v+2);i=Ms(this,h,e,a,l,d,p,A,w,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,f.start),y=Math.min(s.count,f.start+f.count);for(let m=x,h=y;m<h;m+=3){let b=s.getX(m),E=s.getX(m+1),v=s.getX(m+2);i=Ms(this,o,e,a,l,d,p,b,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=u.length;x<y;x++){let m=u[x],h=o[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,M=E;v<M;v+=3){let A=v,w=v+1,g=v+2;i=Ms(this,h,e,a,l,d,p,A,w,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=x,h=y;m<h;m+=3){let b=m,E=m+1,v=m+2;i=Ms(this,o,e,a,l,d,p,b,E,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function ig(n,e,t,a,i,r,o,s){let c;if(e.side===on?c=a.intersectTriangle(o,r,i,!0,s):c=a.intersectTriangle(i,r,o,e.side===ai,s),c===null)return null;Es.copy(s),Es.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Es);return l<t.near||l>t.far?null:{distance:l,point:Es.clone(),object:n}}function Ms(n,e,t,a,i,r,o,s,c,l){n.getVertexPosition(s,vs),n.getVertexPosition(c,ys),n.getVertexPosition(l,_s);let d=ig(n,e,t,a,vs,ys,_s,$p);if(d){let p=new B;Za.getBarycoord($p,vs,ys,_s,p),i&&(d.uv=Za.getInterpolatedAttribute(i,s,c,l,p,new Xe)),r&&(d.uv1=Za.getInterpolatedAttribute(r,s,c,l,p,new Xe)),o&&(d.normal=Za.getInterpolatedAttribute(o,s,c,l,p,new B),d.normal.dot(a.direction)>0&&d.normal.multiplyScalar(-1));let u={a:s,b:c,c:l,normal:new B,materialIndex:0};Za.getNormal(vs,ys,_s,u.normal),d.face=u,d.barycoord=p}return d}var io=class extends yn{constructor(e=null,t=1,a=1,i,r,o,s,c,l=nn,d=nn,p,u){super(null,o,s,c,l,d,i,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends bt{constructor(e,t,a,i=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wi=new xt,Wp=new xt,As=[],Xp=new la,rg=new xt,Vr=new Fe,jr=new Ua,Gt=class extends Fe{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<a;i++)this.setMatrixAt(i,rg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new la),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,Wi),Xp.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Xp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ua),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,Wi),jr.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let a=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=a.length+1,o=e*r+1;for(let s=0;s<a.length;s++)a[s]=i[o+s]}raycast(e,t){let a=this.matrixWorld,i=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(a),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wi),Wp.multiplyMatrices(a,Wi),Vr.matrixWorld=Wp,Vr.raycast(e,As);for(let o=0,s=As.length;o<s;o++){let c=As[o];c.instanceId=r,c.object=this,t.push(c)}As.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let a=t.morphTargetInfluences,i=a.length+1;this.morphTexture===null&&(this.morphTexture=new io(new Float32Array(i*this.count),i,this.count,Tl,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<a.length;l++)o+=a[l];let s=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=s,r.set(a,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vi=new Ua,og=new Xe(.5,.5),Ts=new B,ir=class{constructor(e=new oa,t=new oa,a=new oa,i=new oa,r=new oa,o=new oa){this.planes=[e,t,a,i,r,o]}set(e,t,a,i,r,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(a),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){let t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=sa,a=!1){let i=this.planes,r=e.elements,o=r[0],s=r[1],c=r[2],l=r[3],d=r[4],p=r[5],u=r[6],f=r[7],x=r[8],y=r[9],m=r[10],h=r[11],b=r[12],E=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-o,f-d,h-x,M-b).normalize(),i[1].setComponents(l+o,f+d,h+x,M+b).normalize(),i[2].setComponents(l+s,f+p,h+y,M+E).normalize(),i[3].setComponents(l-s,f-p,h-y,M-E).normalize(),a)i[4].setComponents(c,u,m,v).normalize(),i[5].setComponents(l-c,f-u,h-m,M-v).normalize();else if(i[4].setComponents(l-c,f-u,h-m,M-v).normalize(),t===sa)i[5].setComponents(l+c,f+u,h+m,M+v).normalize();else if(t===Qi)i[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);let t=og.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){let t=this.planes,a=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(a)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let a=0;a<6;a++){let i=t[a];if(Ts.x=i.normal.x>0?e.max.x:e.min.x,Ts.y=i.normal.y>0?e.max.y:e.min.y,Ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var wn=class extends _a{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$s=new B,Ws=new B,Yp=new xt,qr=new ao,ws=new Ua,Ed=new B,Jp=new B,Xs=class extends _t{constructor(e=new ft,t=new wn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,a=[0];for(let i=1,r=t.count;i<r;i++)$s.fromBufferAttribute(t,i-1),Ws.fromBufferAttribute(t,i),a[i]=a[i-1],a[i]+=$s.distanceTo(Ws);e.setAttribute("lineDistance",new tt(a,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let a=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ws.copy(a.boundingSphere),ws.applyMatrix4(i),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;Yp.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Yp);let s=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,d=a.index,u=a.attributes.position;if(d!==null){let f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=f,m=x-1;y<m;y+=l){let h=d.getX(y),b=d.getX(y+1),E=Cs(this,e,qr,c,h,b,y);E&&t.push(E)}if(this.isLineLoop){let y=d.getX(x-1),m=d.getX(f),h=Cs(this,e,qr,c,y,m,x-1);h&&t.push(h)}}else{let f=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=f,m=x-1;y<m;y+=l){let h=Cs(this,e,qr,c,y,y+1,y);h&&t.push(h)}if(this.isLineLoop){let y=Cs(this,e,qr,c,x-1,f,x-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let i=t[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function Cs(n,e,t,a,i,r,o){let s=n.geometry.attributes.position;if($s.fromBufferAttribute(s,i),Ws.fromBufferAttribute(s,r),t.distanceSqToSegment($s,Ws,Ed,Jp)>a)return;Ed.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ed);if(!(l<e.near||l>e.far))return{distance:l,point:Jp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Zp=new B,Kp=new B,Bn=class extends Xs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,a=[];for(let i=0,r=t.count;i<r;i+=2)Zp.fromBufferAttribute(t,i),Kp.fromBufferAttribute(t,i+1),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+Zp.distanceTo(Kp);e.setAttribute("lineDistance",new tt(a,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ro=class extends yn{constructor(e=[],t=ii,a,i,r,o,s,c,l,d){super(e,t,a,i,r,o,s,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Un=class extends yn{constructor(e,t,a,i,r,o,s,c,l){super(e,t,a,i,r,o,s,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qa=class extends yn{constructor(e,t,a=ua,i,r,o,s=nn,c=nn,l,d=va,p=1){if(d!==va&&d!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,i,r,o,s,c,d,a,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ys=class extends Qa{constructor(e,t=ua,a=ii,i,r,o=nn,s=nn,c,l=va){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,a,i,r,o,s,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oo=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pe=class n extends ft{constructor(e=1,t=1,a=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:i,heightSegments:r,depthSegments:o};let s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],p=[],u=0,f=0;x("z","y","x",-1,-1,a,t,e,o,r,0),x("z","y","x",1,-1,a,t,-e,o,r,1),x("x","z","y",1,1,e,a,t,i,o,2),x("x","z","y",1,-1,e,a,-t,i,o,3),x("x","y","z",1,-1,e,t,a,i,r,4),x("x","y","z",-1,-1,e,t,-a,i,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function x(y,m,h,b,E,v,M,A,w,g,_){let T=v/w,D=M/g,N=v/2,k=M/2,C=A/2,F=w+1,V=g+1,O=0,j=0,G=new B;for(let Z=0;Z<V;Z++){let ie=Z*D-k;for(let xe=0;xe<F;xe++){let Ee=xe*T-N;G[y]=Ee*b,G[m]=ie*E,G[h]=C,l.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[h]=A>0?1:-1,d.push(G.x,G.y,G.z),p.push(xe/w),p.push(1-Z/g),O+=1}}for(let Z=0;Z<g;Z++)for(let ie=0;ie<w;ie++){let xe=u+ie+F*Z,Ee=u+ie+F*(Z+1),Be=u+(ie+1)+F*(Z+1),_e=u+(ie+1)+F*Z;c.push(xe,Ee,_e),c.push(Ee,Be,_e),j+=6}s.addGroup(f,j,_),f+=j,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},rr=class n extends ft{constructor(e=1,t=1,a=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:a,radialSegments:i,heightSegments:r},t=Math.max(0,t),a=Math.max(1,Math.floor(a)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],s=[],c=[],l=[],d=t/2,p=Math.PI/2*e,u=t,f=2*p+u,x=a*2+r,y=i+1,m=new B,h=new B;for(let b=0;b<=x;b++){let E=0,v=0,M=0,A=0;if(b<=a){let _=b/a,T=_*Math.PI/2;v=-d-e*Math.cos(T),M=e*Math.sin(T),A=-e*Math.cos(T),E=_*p}else if(b<=a+r){let _=(b-a)/r;v=-d+_*t,M=e,A=0,E=p+_*u}else{let _=(b-a-r)/a,T=_*Math.PI/2;v=d+e*Math.sin(T),M=e*Math.cos(T),A=e*Math.sin(T),E=p+u+_*p}let w=Math.max(0,Math.min(1,E/f)),g=0;b===0?g=.5/i:b===x&&(g=-.5/i);for(let _=0;_<=i;_++){let T=_/i,D=T*Math.PI*2,N=Math.sin(D),k=Math.cos(D);h.x=-M*k,h.y=v,h.z=M*N,s.push(h.x,h.y,h.z),m.set(-M*k,A,M*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(T+g,w)}if(b>0){let _=(b-1)*y;for(let T=0;T<i;T++){let D=_+T,N=_+T+1,k=b*y+T,C=b*y+T+1;o.push(D,N,k),o.push(N,C,k)}}}this.setIndex(o),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},so=class n extends ft{constructor(e=1,t=32,a=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:a,thetaLength:i},t=Math.max(3,t);let r=[],o=[],s=[],c=[],l=new B,d=new Xe;o.push(0,0,0),s.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let f=a+p/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),s.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(s,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},At=class n extends ft{constructor(e=1,t=1,a=1,i=32,r=1,o=!1,s=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:a,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let d=[],p=[],u=[],f=[],x=0,y=[],m=a/2,h=0;b(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function b(){let v=new B,M=new B,A=0,w=(t-e)/a;for(let g=0;g<=r;g++){let _=[],T=g/r,D=T*(t-e)+e;for(let N=0;N<=i;N++){let k=N/i,C=k*c+s,F=Math.sin(C),V=Math.cos(C);M.x=D*F,M.y=-T*a+m,M.z=D*V,p.push(M.x,M.y,M.z),v.set(F,w,V).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-T),_.push(x++)}y.push(_)}for(let g=0;g<i;g++)for(let _=0;_<r;_++){let T=y[_][g],D=y[_+1][g],N=y[_+1][g+1],k=y[_][g+1];(e>0||_!==0)&&(d.push(T,D,k),A+=3),(t>0||_!==r-1)&&(d.push(D,N,k),A+=3)}l.addGroup(h,A,0),h+=A}function E(v){let M=x,A=new Xe,w=new B,g=0,_=v===!0?e:t,T=v===!0?1:-1;for(let N=1;N<=i;N++)p.push(0,m*T,0),u.push(0,T,0),f.push(.5,.5),x++;let D=x;for(let N=0;N<=i;N++){let C=N/i*c+s,F=Math.cos(C),V=Math.sin(C);w.x=_*V,w.y=m*T,w.z=_*F,p.push(w.x,w.y,w.z),u.push(0,T,0),A.x=F*.5+.5,A.y=V*.5*T+.5,f.push(A.x,A.y),x++}for(let N=0;N<i;N++){let k=M+N,C=D+N;v===!0?d.push(C,C+1,k):d.push(C+1,C,k),g+=3}l.addGroup(h,g,v===!0?1:2),h+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lo=class n extends At{constructor(e=1,t=1,a=32,i=1,r=!1,o=0,s=Math.PI*2){super(0,e,t,a,i,r,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:a,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:s}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Js=class n extends ft{constructor(e=[],t=[],a=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:a,detail:i};let r=[],o=[];s(i),l(a),d(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(b){let E=new B,v=new B,M=new B;for(let A=0;A<t.length;A+=3)f(t[A+0],E),f(t[A+1],v),f(t[A+2],M),c(E,v,M,b)}function c(b,E,v,M){let A=M+1,w=[];for(let g=0;g<=A;g++){w[g]=[];let _=b.clone().lerp(v,g/A),T=E.clone().lerp(v,g/A),D=A-g;for(let N=0;N<=D;N++)N===0&&g===A?w[g][N]=_:w[g][N]=_.clone().lerp(T,N/D)}for(let g=0;g<A;g++)for(let _=0;_<2*(A-g)-1;_++){let T=Math.floor(_/2);_%2===0?(u(w[g][T+1]),u(w[g+1][T]),u(w[g][T])):(u(w[g][T+1]),u(w[g+1][T+1]),u(w[g+1][T]))}}function l(b){let E=new B;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(b),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function d(){let b=new B;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];let v=m(b)/2/Math.PI+.5,M=h(b)/Math.PI+.5;o.push(v,1-M)}x(),p()}function p(){for(let b=0;b<o.length;b+=6){let E=o[b+0],v=o[b+2],M=o[b+4],A=Math.max(E,v,M),w=Math.min(E,v,M);A>.9&&w<.1&&(E<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),M<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,E){let v=b*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function x(){let b=new B,E=new B,v=new B,M=new B,A=new Xe,w=new Xe,g=new Xe;for(let _=0,T=0;_<r.length;_+=9,T+=6){b.set(r[_+0],r[_+1],r[_+2]),E.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),A.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),g.set(o[T+4],o[T+5]),M.copy(b).add(E).add(v).divideScalar(3);let D=m(M);y(A,T+0,b,D),y(w,T+2,E,D),y(g,T+4,v,D)}}function y(b,E,v,M){M<0&&b.x===1&&(o[E]=b.x-1),v.x===0&&v.z===0&&(o[E]=M/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function h(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let a=this.getUtoTmapping(e);return this.getPoint(a,t)}getPoints(e=5){let t=[];for(let a=0;a<=e;a++)t.push(this.getPoint(a/e));return t}getSpacedPoints(e=5){let t=[];for(let a=0;a<=e;a++)t.push(this.getPointAt(a/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],a,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)a=this.getPoint(o/e),r+=a.distanceTo(i),t.push(r),i=a;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let a=this.getLengths(),i=0,r=a.length,o;t?o=t:o=e*a[r-1];let s=0,c=r-1,l;for(;s<=c;)if(i=Math.floor(s+(c-s)/2),l=a[i]-o,l<0)s=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,a[i]===o)return i/(r-1);let d=a[i],u=a[i+1]-d,f=(o-d)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),s=this.getPoint(r),c=t||(o.isVector2?new Xe:new B);return c.copy(s).sub(o).normalize(),c}getTangentAt(e,t){let a=this.getUtoTmapping(e);return this.getTangent(a,t)}computeFrenetFrames(e,t=!1){let a=new B,i=[],r=[],o=[],s=new B,c=new xt;for(let f=0;f<=e;f++){let x=f/e;i[f]=this.getTangentAt(x,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE,d=Math.abs(i[0].x),p=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=l&&(l=d,a.set(1,0,0)),p<=l&&(l=p,a.set(0,1,0)),u<=l&&a.set(0,0,1),s.crossVectors(i[0],a).normalize(),r[0].crossVectors(i[0],s),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),s.crossVectors(i[f-1],i[f]),s.length()>Number.EPSILON){s.normalize();let x=Math.acos(gt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(s,x))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(gt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(s.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],f*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},co=class extends Jn{constructor(e=0,t=0,a=1,i=1,r=0,o=Math.PI*2,s=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=a,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=s,this.aRotation=c}getPoint(e,t=new Xe){let a=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let s=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*d-f*p+this.aX,l=u*p+f*d+this.aY}return a.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zs=class extends co{constructor(e,t,a,i,r,o){super(e,t,a,a,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function iu(){let n=0,e=0,t=0,a=0;function i(r,o,s,c){n=r,e=s,t=-3*r+3*o-2*s-c,a=2*r-2*o+s+c}return{initCatmullRom:function(r,o,s,c,l){i(o,s,l*(s-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,s,c,l,d,p){let u=(o-r)/l-(s-r)/(l+d)+(s-o)/d,f=(s-o)/d-(c-o)/(d+p)+(c-s)/p;u*=d,f*=d,i(o,s,u,f)},calc:function(r){let o=r*r,s=o*r;return n+e*r+t*o+a*s}}}var Qp=new B,eh=new B,Md=new iu,Ad=new iu,Td=new iu,Si=class extends Jn{constructor(e=[],t=!1,a="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=a,this.tension=i}getPoint(e,t=new B){let a=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,s=Math.floor(o),c=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/r)+1)*r:c===0&&s===r-1&&(s=r-2,c=1);let l,d;this.closed||s>0?l=i[(s-1)%r]:(eh.subVectors(i[0],i[1]).add(i[0]),l=eh);let p=i[s%r],u=i[(s+1)%r];if(this.closed||s+2<r?d=i[(s+2)%r]:(Qp.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=Qp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);y<1e-4&&(y=1),x<1e-4&&(x=y),m<1e-4&&(m=y),Md.initNonuniformCatmullRom(l.x,p.x,u.x,d.x,x,y,m),Ad.initNonuniformCatmullRom(l.y,p.y,u.y,d.y,x,y,m),Td.initNonuniformCatmullRom(l.z,p.z,u.z,d.z,x,y,m)}else this.curveType==="catmullrom"&&(Md.initCatmullRom(l.x,p.x,u.x,d.x,this.tension),Ad.initCatmullRom(l.y,p.y,u.y,d.y,this.tension),Td.initCatmullRom(l.z,p.z,u.z,d.z,this.tension));return a.set(Md.calc(c),Ad.calc(c),Td.calc(c)),a}copy(e){super.copy(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,a=this.points.length;t<a;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){let i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function th(n,e,t,a,i){let r=(a-e)*.5,o=(i-t)*.5,s=n*n,c=n*s;return(2*t-2*a+r+o)*c+(-3*t+3*a-2*r-o)*s+r*n+t}function sg(n,e){let t=1-n;return t*t*e}function lg(n,e){return 2*(1-n)*n*e}function cg(n,e){return n*n*e}function $r(n,e,t,a){return sg(n,e)+lg(n,t)+cg(n,a)}function dg(n,e){let t=1-n;return t*t*t*e}function ug(n,e){let t=1-n;return 3*t*t*n*e}function pg(n,e){return 3*(1-n)*n*n*e}function hg(n,e){return n*n*n*e}function Wr(n,e,t,a,i){return dg(n,e)+ug(n,t)+pg(n,a)+hg(n,i)}var Ks=class extends Jn{constructor(e=new Xe,t=new Xe,a=new Xe,i=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=a,this.v3=i}getPoint(e,t=new Xe){let a=t,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return a.set(Wr(e,i.x,r.x,o.x,s.x),Wr(e,i.y,r.y,o.y,s.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qs=class extends Jn{constructor(e=new B,t=new B,a=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=a,this.v3=i}getPoint(e,t=new B){let a=t,i=this.v0,r=this.v1,o=this.v2,s=this.v3;return a.set(Wr(e,i.x,r.x,o.x,s.x),Wr(e,i.y,r.y,o.y,s.y),Wr(e,i.z,r.z,o.z,s.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends Jn{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){let a=t;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends Jn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let a=t;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends Jn{constructor(e=new Xe,t=new Xe,a=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=a}getPoint(e,t=new Xe){let a=t,i=this.v0,r=this.v1,o=this.v2;return a.set($r(e,i.x,r.x,o.x),$r(e,i.y,r.y,o.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Jn{constructor(e=new B,t=new B,a=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=a}getPoint(e,t=new B){let a=t,i=this.v0,r=this.v1,o=this.v2;return a.set($r(e,i.x,r.x,o.x),$r(e,i.y,r.y,o.y),$r(e,i.z,r.z,o.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){let a=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),s=r-o,c=i[o===0?o:o-1],l=i[o],d=i[o>i.length-2?i.length-1:o+1],p=i[o>i.length-3?i.length-1:o+2];return a.set(th(s,c.x,l.x,d.x,p.x),th(s,c.y,l.y,d.y,p.y)),a}copy(e){super.copy(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,a=this.points.length;t<a;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,a=e.points.length;t<a;t++){let i=e.points[t];this.points.push(new Xe().fromArray(i))}return this}},fg=Object.freeze({__proto__:null,ArcCurve:Zs,CatmullRomCurve3:Si,CubicBezierCurve:Ks,CubicBezierCurve3:Qs,EllipseCurve:co,LineCurve:el,LineCurve3:tl,QuadraticBezierCurve:nl,QuadraticBezierCurve3:uo,SplineCurve:al});var or=class n extends Js{constructor(e=1,t=0){let a=(1+Math.sqrt(5))/2,i=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Sa=class n extends ft{constructor(e=1,t=1,a=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:i};let r=e/2,o=t/2,s=Math.floor(a),c=Math.floor(i),l=s+1,d=c+1,p=e/s,u=t/c,f=[],x=[],y=[],m=[];for(let h=0;h<d;h++){let b=h*u-o;for(let E=0;E<l;E++){let v=E*p-r;x.push(v,-b,0),y.push(0,0,1),m.push(E/s),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<s;b++){let E=b+l*h,v=b+l*(h+1),M=b+1+l*(h+1),A=b+1+l*h;f.push(E,v,A),f.push(v,M,A)}this.setIndex(f),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},po=class n extends ft{constructor(e=.5,t=1,a=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:a,phiSegments:i,thetaStart:r,thetaLength:o},a=Math.max(3,a),i=Math.max(1,i);let s=[],c=[],l=[],d=[],p=e,u=(t-e)/i,f=new B,x=new Xe;for(let y=0;y<=i;y++){for(let m=0;m<=a;m++){let h=r+m/a*o;f.x=p*Math.cos(h),f.y=p*Math.sin(h),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,d.push(x.x,x.y)}p+=u}for(let y=0;y<i;y++){let m=y*(a+1);for(let h=0;h<a;h++){let b=h+m,E=b,v=b+a+1,M=b+a+2,A=b+1;s.push(E,v,A),s.push(v,M,A)}}this.setIndex(s),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ca=class n extends ft{constructor(e=1,t=32,a=16,i=0,r=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:i,phiLength:r,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));let c=Math.min(o+s,Math.PI),l=0,d=[],p=new B,u=new B,f=[],x=[],y=[],m=[];for(let h=0;h<=a;h++){let b=[],E=h/a,v=o+E*s,M=e*Math.cos(v),A=Math.sqrt(e*e-M*M),w=0;h===0&&o===0?w=.5/t:h===a&&c===Math.PI&&(w=-.5/t);for(let g=0;g<=t;g++){let _=g/t,T=i+_*r;p.x=-A*Math.cos(T),p.y=M,p.z=A*Math.sin(T),x.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),m.push(_+w,1-E),b.push(l++)}d.push(b)}for(let h=0;h<a;h++)for(let b=0;b<t;b++){let E=d[h][b+1],v=d[h][b],M=d[h+1][b],A=d[h+1][b+1];(h!==0||o>0)&&f.push(E,v,A),(h!==a-1||c<Math.PI)&&f.push(v,M,A)}this.setIndex(f),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Cn=class n extends ft{constructor(e=1,t=.4,a=12,i=48,r=Math.PI*2,o=0,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:i,arc:r,thetaStart:o,thetaLength:s},a=Math.floor(a),i=Math.floor(i);let c=[],l=[],d=[],p=[],u=new B,f=new B,x=new B;for(let y=0;y<=a;y++){let m=o+y/a*s;for(let h=0;h<=i;h++){let b=h/i*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),x.subVectors(f,u).normalize(),d.push(x.x,x.y,x.z),p.push(h/i),p.push(y/a)}}for(let y=1;y<=a;y++)for(let m=1;m<=i;m++){let h=(i+1)*y+m-1,b=(i+1)*(y-1)+m-1,E=(i+1)*(y-1)+m,v=(i+1)*y+m;c.push(h,b,v),c.push(b,E,v)}this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var sr=class n extends ft{constructor(e=new uo(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,a=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:a,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let s=new B,c=new B,l=new Xe,d=new B,p=[],u=[],f=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function y(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),b(),h()}function m(E){d=e.getPointAt(E/t,d);let v=o.normals[E],M=o.binormals[E];for(let A=0;A<=i;A++){let w=A/i*Math.PI*2,g=Math.sin(w),_=-Math.cos(w);c.x=_*v.x+g*M.x,c.y=_*v.y+g*M.y,c.z=_*v.z+g*M.z,c.normalize(),u.push(c.x,c.y,c.z),s.x=d.x+a*c.x,s.y=d.y+a*c.y,s.z=d.z+a*c.z,p.push(s.x,s.y,s.z)}}function h(){for(let E=1;E<=t;E++)for(let v=1;v<=i;v++){let M=(i+1)*(E-1)+(v-1),A=(i+1)*E+(v-1),w=(i+1)*E+v,g=(i+1)*(E-1)+v;x.push(M,A,g),x.push(A,w,g)}}function b(){for(let E=0;E<=t;E++)for(let v=0;v<=i;v++)l.x=E/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new fg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ai(n){let e={};for(let t in n){e[t]={};for(let a in n[t]){let i=n[t][a];if(nh(i))i.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=i.clone();else if(Array.isArray(i))if(nh(i[0])){let r=[];for(let o=0,s=i.length;o<s;o++)r[o]=i[o].clone();e[t][a]=r}else e[t][a]=i.slice();else e[t][a]=i}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let a=Ai(n[t]);for(let i in a)e[i]=a[i]}return e}function nh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function mg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ru(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var Wh={clone:Ai,merge:fn},gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let a={};for(let i in this.extensions)this.extensions[i]===!0&&(a[i]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let a in e.uniforms){let i=e.uniforms[a];switch(this.uniforms[a]={},i.type){case"t":this.uniforms[a].value=t[i.value]||null;break;case"c":this.uniforms[a].value=new Oe().setHex(i.value);break;case"v2":this.uniforms[a].value=new Xe().fromArray(i.value);break;case"v3":this.uniforms[a].value=new B().fromArray(i.value);break;case"v4":this.uniforms[a].value=new Ot().fromArray(i.value);break;case"m3":this.uniforms[a].value=new st().fromArray(i.value);break;case"m4":this.uniforms[a].value=new xt().fromArray(i.value);break;default:this.uniforms[a].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},il=class extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends _a{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ho=class extends _a{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rl=class extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xi(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wd(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ei=class{constructor(e,t,a,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,a=this._cachedIndex,i=t[a],r=t[a-1];n:{e:{let o;t:{a:if(!(e<i)){for(let s=a+2;;){if(i===void 0){if(e<r)break a;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===s)break;if(r=i,i=t[++a],e<i)break e}o=t.length;break t}if(!(e>=r)){let s=t[1];e<s&&(a=2,r=s);for(let c=a-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===c)break;if(i=r,r=t[--a-1],e>=r)break e}o=a,a=0;break t}break n}for(;a<o;){let s=a+o>>>1;e<t[s]?o=s:a=s+1}if(i=t[a],r=t[a-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,r,i)}return this.interpolate_(a,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,a=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=a[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sl=class extends ei{constructor(e,t,a,i){super(e,t,a,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(e,t,a){let i=this.parameterPositions,r=e-2,o=e+1,s=i[r],c=i[o];if(s===void 0)switch(this.getSettings_().endingStart){case Id:r=e,s=2*t-a;break;case Dd:r=i.length-2,s=t+i[r]-i[r+1];break;default:r=e,s=a}if(c===void 0)switch(this.getSettings_().endingEnd){case Id:o=e,c=2*a-t;break;case Dd:o=1,c=a+i[1]-i[0];break;default:o=e-1,c=t}let l=(a-t)*.5,d=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(c-a),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,a,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(a-t)/(i-t),y=x*x,m=y*x,h=-u*m+2*u*y-u*x,b=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*x+1,E=(-1-f)*m+(1.5+f)*y+.5*x,v=f*m-f*y;for(let M=0;M!==s;++M)r[M]=h*o[d+M]+b*o[l+M]+E*o[c+M]+v*o[p+M];return r}},ll=class extends ei{constructor(e,t,a,i){super(e,t,a,i)}interpolate_(e,t,a,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,d=(a-t)/(i-t),p=1-d;for(let u=0;u!==s;++u)r[u]=o[l+u]*p+o[c+u]*d;return r}},cl=class extends ei{constructor(e,t,a,i){super(e,t,a,i)}interpolate_(e){return this.copySampleValue_(e-1)}},dl=class extends ei{interpolate_(e,t,a,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,d=this.inTangents,p=this.outTangents;if(!d||!p){let x=(a-t)/(i-t),y=1-x;for(let m=0;m!==s;++m)r[m]=o[l+m]*y+o[c+m]*x;return r}let u=s*2,f=e-1;for(let x=0;x!==s;++x){let y=o[l+x],m=o[c+x],h=f*u+x*2,b=p[h],E=p[h+1],v=e*u+x*2,M=d[v],A=d[v+1],w=vg(a,t,b,M,i);r[x]=Xh(w,y,E,A,m)}return r}};function Xh(n,e,t,a,i){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*a+n*n*n*i}function bg(n,e,t,a,i){let r=1-n;return 3*r*r*(t-e)+6*r*n*(a-t)+3*n*n*(i-a)}function vg(n,e,t,a,i){let r=(n-e)/(i-e);for(let o=0;o<8;o++){let s=Xh(r,e,t,a,i)-n;if(Math.abs(s)<1e-10)break;let c=bg(r,e,t,a,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-s/c))}return r}var On=class{constructor(e,t,a,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xi(t,this.TimeBufferType),this.values=Xi(a,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:Xi(e.times,Array),values:Xi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(a.interpolation=i),wd(e.settings)&&(a.settings={inTangents:Xi(e.settings.inTangents,Array),outTangents:Xi(e.settings.outTangents,Array)})}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case Is:t=this.InterpolantFactoryMethodSmooth;break;case Rd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Qe("KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return Is;case this.InterpolantFactoryMethodBezier:return Rd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let a=0,i=t.length;a!==i;++a)t[a]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let a=0,i=t.length;a!==i;++a)t[a]*=e;wd(this.settings)&&(ah(this.settings.inTangents,e),ah(this.settings.outTangents,e))}return this}trim(e,t){let a=this.times,i=a.length,r=0,o=i-1;for(;r!==i&&a[r]<e;)++r;for(;o!==-1&&a[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let s=this.getValueSize();this.times=a.slice(r,o),this.values=this.values.slice(r*s,o*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let a=this.times,i=this.values,r=a.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let s=0;s!==r;s++){let c=a[s];if(typeof c=="number"&&isNaN(c)){it("KeyframeTrack: Time is not a valid number.",this,s,c),e=!1;break}if(o!==null&&o>c){it("KeyframeTrack: Out of order keys.",this,s,c,o),e=!1;break}o=c}if(i!==void 0&&G0(i))for(let s=0,c=i.length;s!==c;++s){let l=i[s];if(isNaN(l)){it("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),i=this.getInterpolation()===Is,r=e.length-1,o=1;for(let s=1;s<r;++s){let c=!1,l=e[s],d=e[s+1];if(l!==d&&(s!==1||l!==e[0]))if(i)c=!0;else{let p=s*a,u=p-a,f=p+a;for(let x=0;x!==a;++x){let y=t[p+x];if(y!==t[u+x]||y!==t[f+x]){c=!0;break}}}if(c){if(s!==o){e[o]=e[s];let p=s*a,u=o*a;for(let f=0;f!==a;++f)t[u+f]=t[p+f]}++o}}if(r>0){e[o]=e[r];for(let s=r*a,c=o*a,l=0;l!==a;++l)t[c+l]=t[s+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*a)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),a=this.constructor,i=new a(this.name,e,t);return i.createInterpolant=this.createInterpolant,wd(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ah(n,e){for(let t=0,a=n.length;t!==a;t+=2)n[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Hs;var ti=class extends On{constructor(e,t,a){super(e,t,a)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Xr;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends On{constructor(e,t,a,i){super(e,t,a,i)}};ul.prototype.ValueTypeName="color";var pl=class extends On{constructor(e,t,a,i){super(e,t,a,i)}};pl.prototype.ValueTypeName="number";var hl=class extends ei{constructor(e,t,a,i){super(e,t,a,i)}interpolate_(e,t,a,i){let r=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=(a-t)/(i-t),l=e*s;for(let d=l+s;l!==d;l+=4)Xn.slerpFlat(r,0,o,l-s,o,l,c);return r}},fo=class extends On{constructor(e,t,a,i){super(e,t,a,i)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends On{constructor(e,t,a){super(e,t,a)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Xr;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends On{constructor(e,t,a,i){super(e,t,a,i)}};fl.prototype.ValueTypeName="vector";var ml=class{constructor(e,t,a){let i=this,r=!1,o=0,s=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(d){s++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,s),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=l.length;p<u;p+=2){let f=l[p],x=l[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yh=new ml,gl=class{constructor(e){this.manager=e!==void 0?e:Yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let a=this;return new Promise(function(i,r){a.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mo=class extends lr{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cd=new xt,ih=new B,rh=new B,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,a,i){Cd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(Cd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,s=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Qi||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rs=new B,Ps=new Xn,xa=new B,xo=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rs,Ps,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Ps,xa.set(1,1,1)).invert()}updateWorldMatrix(e,t,a=!1){super.updateWorldMatrix(e,t,a),this.matrixWorld.decompose(Rs,Ps,xa),xa.x===1&&xa.y===1&&xa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Ps,xa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ja=new B,oh=new Xe,sh=new Xe,an=class extends xo{constructor(e=50,t=1,a=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,t){return this.getViewBounds(e,oh,sh),t.subVectors(sh,oh)}setViewOffset(e,t,a,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nd*.5*this.fov)/this.zoom,a=2*t,i=this.aspect*a,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*a/l,i*=o.width/c,a*=o.height/l}let s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ld=class extends go{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},bo=class extends lr{constructor(e,t,a=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=i,this.shadow=new Ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},cr=class extends xo{constructor(e=-1,t=1,a=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=a-e,o=a+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fd=class extends go{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vo=class extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Fd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Yi=-90,Ji=1,xl=class extends _t{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(Yi,Ji,e,t);i.layers=this.layers,this.add(i);let r=new an(Yi,Ji,e,t);r.layers=this.layers,this.add(r);let o=new an(Yi,Ji,e,t);o.layers=this.layers,this.add(o);let s=new an(Yi,Ji,e,t);s.layers=this.layers,this.add(s);let c=new an(Yi,Ji,e,t);c.layers=this.layers,this.add(c);let l=new an(Yi,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[a,i,r,o,s,c]=t;for(let l of t)this.remove(l);if(e===sa)a.up.set(0,1,0),a.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qi)a.up.set(0,-1,0),a.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:a,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,s,c,l,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(a,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(a,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(a,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(a,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(a,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),a.texture.generateMipmaps=y,e.setRenderTarget(a,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,f),e.xr.enabled=x,a.texture.needsPMREMUpdate=!0}},bl=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ou="\\[\\]\\.:\\/",yg=new RegExp("["+ou+"]","g"),su="[^"+ou+"]",_g="[^"+ou.replace("\\.","")+"]",Sg=/((?:WC+[\/:])*)/.source.replace("WC",su),Eg=/(WCOD+)?/.source.replace("WCOD",_g),Mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),Ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),Tg=new RegExp("^"+Sg+Eg+Mg+Ag+"$"),wg=["material","materials","bones","map"],Nd=class{constructor(e,t,a){let i=a||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let a=this._targetGroup.nCachedObjects_,i=this._bindings[a];i!==void 0&&i.getValue(e,t)}setValue(e,t){let a=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=a.length;i!==r;++i)a[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}},Bt=class n{constructor(e,t,a){this.path=t,this.parsedPath=a||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,a):new n(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(e){let t=Tg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=a.nodeName&&a.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=a.nodeName.substring(i+1);wg.indexOf(r)!==-1&&(a.nodeName=a.nodeName.substring(0,i),a.objectName=r)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){let a=function(r){for(let o=0;o<r.length;o++){let s=r[o];if(s.name===t||s.uuid===t)return s;let c=a(s.children);if(c)return c}return null},i=a(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let a=this.resolvedProperty;for(let i=0,r=a.length;i!==r;++i)e[t++]=a[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let a=this.resolvedProperty;for(let i=0,r=a.length;i!==r;++i)a[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let a=this.resolvedProperty;for(let i=0,r=a.length;i!==r;++i)a[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let a=this.resolvedProperty;for(let i=0,r=a.length;i!==r;++i)a[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,a=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let l=t.objectIndex;switch(a){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(l!==void 0){if(e[l]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;it("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?s=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Nd;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nS=new Float32Array(1);var yo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Bd=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,a,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,a,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let a=0;a<4;a++)this.elements[a]=e[a+t];return this}set(e,t,a,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=a,r[3]=i,this}};function lu(n,e,t,a){let i=Cg(a);switch(t){case eu:return n*e;case Tl:return n*e/i.components*i.byteLength;case wl:return n*e/i.components*i.byteLength;case si:return n*e*2/i.components*i.byteLength;case Cl:return n*e*2/i.components*i.byteLength;case tu:return n*e*3/i.components*i.byteLength;case Kn:return n*e*4/i.components*i.byteLength;case Rl:return n*e*4/i.components*i.byteLength;case Ao:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:case Ll:return Math.max(n,16)*Math.max(e,8)/4;case Pl:case Dl:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case Nl:case Ul:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bl:case Ro:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ac:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Po:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cg(n){switch(n){case Rn:case Jd:return{byteLength:1,components:1};case pr:case Zd:case pa:return{byteLength:2,components:1};case Ml:case Al:return{byteLength:2,components:4};case ua:case El:case Zn:return{byteLength:4,components:1};case Kd:case Qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bf(){let n=null,e=!1,t=null,a=null;function i(r,o){a=n.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(a=n.requestAnimationFrame(i),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hg(n){let e=new WeakMap;function t(s,c){let l=s.array,d=s.usage,p=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,d),s.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:p}}function a(s,c,l){let d=c.array,p=c.updateRanges;if(n.bindBuffer(l,s),p.length===0)n.bufferSubData(l,0,d);else{p.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<p.length;f++){let x=p[u],y=p[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++u,p[u]=y)}p.length=u+1;for(let f=0,x=p.length;f<x;f++){let y=p[f];n.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);let c=e.get(s);c&&(n.deleteBuffer(c.buffer),e.delete(s))}function o(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){let d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}let l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(l.buffer,s,c),l.version=s.version}}return{get:i,remove:r,update:o}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tx=`#ifdef USE_IRIDESCENCE
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
#endif`,nx=`#ifdef USE_BUMPMAP
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ux=`#define PI 3.141592653589793
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
} // validated`,px=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hx=`vec3 transformedNormal = objectNormal;
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
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rx=`#ifdef USE_GRADIENTMAP
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
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
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
#endif`,Gx=`uniform sampler2D dfgLUT;
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
}`,Hx=`
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
#endif`,kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,Qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
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
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
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
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w1=`float getShadowMask() {
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
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
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
}`,Y1=`#if DEPTH_PACKING == 3200
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
}`,J1=`#define DISTANCE
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
}`,Z1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`uniform float scale;
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ab=`uniform vec3 diffuse;
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
}`,ib=`#define LAMBERT
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
}`,rb=`#define LAMBERT
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
}`,ob=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,lb=`#define NORMAL
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
}`,cb=`#define NORMAL
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
}`,db=`#define PHONG
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
}`,ub=`#define PHONG
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
}`,pb=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,fb=`#define TOON
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
}`,mb=`#define TOON
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
}`,gb=`uniform float size;
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
}`,xb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,vb=`uniform vec3 color;
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
}`,yb=`uniform float rotation;
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
}`,_b=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:kg,alphahash_pars_fragment:Vg,alphamap_fragment:jg,alphamap_pars_fragment:qg,alphatest_fragment:$g,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:Yg,batching_pars_vertex:Jg,batching_vertex:Zg,begin_vertex:Kg,beginnormal_vertex:Qg,bsdfs:ex,iridescence_fragment:tx,bumpmap_pars_fragment:nx,clipping_planes_fragment:ax,clipping_planes_pars_fragment:ix,clipping_planes_pars_vertex:rx,clipping_planes_vertex:ox,color_fragment:sx,color_pars_fragment:lx,color_pars_vertex:cx,color_vertex:dx,common:ux,cube_uv_reflection_fragment:px,defaultnormal_vertex:hx,displacementmap_pars_vertex:fx,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:xx,colorspace_fragment:bx,colorspace_pars_fragment:vx,envmap_fragment:yx,envmap_common_pars_fragment:_x,envmap_pars_fragment:Sx,envmap_pars_vertex:Ex,envmap_physical_pars_fragment:Fx,envmap_vertex:Mx,fog_vertex:Ax,fog_pars_vertex:Tx,fog_fragment:wx,fog_pars_fragment:Cx,gradientmap_pars_fragment:Rx,lightmap_pars_fragment:Px,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Dx,lights_pars_begin:Lx,lights_toon_fragment:Nx,lights_toon_pars_fragment:Bx,lights_phong_fragment:Ux,lights_phong_pars_fragment:zx,lights_physical_fragment:Ox,lights_physical_pars_fragment:Gx,lights_fragment_begin:Hx,lights_fragment_maps:kx,lights_fragment_end:Vx,lightprobes_pars_fragment:jx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:$x,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:Yx,map_pars_fragment:Jx,map_particle_fragment:Zx,map_particle_pars_fragment:Kx,metalnessmap_fragment:Qx,metalnessmap_pars_fragment:e1,morphinstance_vertex:t1,morphcolor_vertex:n1,morphnormal_vertex:a1,morphtarget_pars_vertex:i1,morphtarget_vertex:r1,normal_fragment_begin:o1,normal_fragment_maps:s1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:d1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:h1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:x1,premultiplied_alpha_fragment:b1,project_vertex:v1,dithering_fragment:y1,dithering_pars_fragment:_1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:E1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:A1,shadowmap_vertex:T1,shadowmask_pars_fragment:w1,skinbase_vertex:C1,skinning_pars_vertex:R1,skinning_vertex:P1,skinnormal_vertex:I1,specularmap_fragment:D1,specularmap_pars_fragment:L1,tonemapping_fragment:F1,tonemapping_pars_fragment:N1,transmission_fragment:B1,transmission_pars_fragment:U1,uv_pars_fragment:z1,uv_pars_vertex:O1,uv_vertex:G1,worldpos_vertex:H1,background_vert:k1,background_frag:V1,backgroundCube_vert:j1,backgroundCube_frag:q1,cube_vert:$1,cube_frag:W1,depth_vert:X1,depth_frag:Y1,distance_vert:J1,distance_frag:Z1,equirect_vert:K1,equirect_frag:Q1,linedashed_vert:eb,linedashed_frag:tb,meshbasic_vert:nb,meshbasic_frag:ab,meshlambert_vert:ib,meshlambert_frag:rb,meshmatcap_vert:ob,meshmatcap_frag:sb,meshnormal_vert:lb,meshnormal_frag:cb,meshphong_vert:db,meshphong_frag:ub,meshphysical_vert:pb,meshphysical_frag:hb,meshtoon_vert:fb,meshtoon_frag:mb,points_vert:gb,points_frag:xb,shadow_vert:bb,shadow_frag:vb,sprite_vert:yb,sprite_frag:_b},De={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Aa={basic:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Oe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:fn([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:fn([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:fn([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:fn([De.common,De.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:fn([De.lights,De.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Aa.physical={uniforms:fn([Aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var lc={r:0,b:0,g:0},Sb=new xt,vf=new st;vf.set(-1,0,0,0,1,0,0,0,1);function Eb(n,e,t,a,i,r){let o=new Oe(0),s=i===!0?0:1,c,l,d=null,p=0,u=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let v=b.backgroundBlurriness>0;E=e.get(E,v)}return E}function x(b){let E=!1,v=f(b);v===null?m(o,s):v&&v.isColor&&(m(v,1),E=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,E){let v=f(E);v&&(v.isCubeTexture||v.mapping===Eo)?(l===void 0&&(l=new Fe(new Pe(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Ai(Aa.backgroundCube.uniforms),vertexShader:Aa.backgroundCube.vertexShader,fragmentShader:Aa.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vf),l.material.toneMapped=yt.getTransfer(v.colorSpace)!==Ct,(d!==v||p!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Fe(new Sa(2,2),new zn({name:"BackgroundMaterial",uniforms:Ai(Aa.background.uniforms),vertexShader:Aa.background.vertexShader,fragmentShader:Aa.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=yt.getTransfer(v.colorSpace)!==Ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,E){b.getRGB(lc,ru(n)),t.buffers.color.setClear(lc.r,lc.g,lc.b,E,r)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),s=E,m(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(b){s=b,m(o,s)},render:x,addToRenderList:y,dispose:h}}function Mb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),a={},i=u(null),r=i,o=!1;function s(D,N,k,C,F){let V=!1,O=p(D,C,k,N);r!==O&&(r=O,l(r.object)),V=f(D,C,k,F),V&&x(D,C,k,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(D,N,k,C),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function d(D){return n.deleteVertexArray(D)}function p(D,N,k,C){let F=C.wireframe===!0,V=a[N.id];V===void 0&&(V={},a[N.id]=V);let O=D.isInstancedMesh===!0?D.id:0,j=V[O];j===void 0&&(j={},V[O]=j);let G=j[k.id];G===void 0&&(G={},j[k.id]=G);let Z=G[F];return Z===void 0&&(Z=u(c()),G[F]=Z),Z}function u(D){let N=[],k=[],C=[];for(let F=0;F<t;F++)N[F]=0,k[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:C,object:D,attributes:{},index:null}}function f(D,N,k,C){let F=r.attributes,V=N.attributes,O=0,j=k.getAttributes();for(let G in j)if(j[G].location>=0){let ie=F[G],xe=V[G];if(xe===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),ie===void 0||ie.attribute!==xe||xe&&ie.data!==xe.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function x(D,N,k,C){let F={},V=N.attributes,O=0,j=k.getAttributes();for(let G in j)if(j[G].location>=0){let ie=V[G];ie===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));let xe={};xe.attribute=ie,ie&&ie.data&&(xe.data=ie.data),F[G]=xe,O++}r.attributes=F,r.attributesNum=O,r.index=C}function y(){let D=r.newAttributes;for(let N=0,k=D.length;N<k;N++)D[N]=0}function m(D){h(D,0)}function h(D,N){let k=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;k[D]=1,C[D]===0&&(n.enableVertexAttribArray(D),C[D]=1),F[D]!==N&&(n.vertexAttribDivisor(D,N),F[D]=N)}function b(){let D=r.newAttributes,N=r.enabledAttributes;for(let k=0,C=N.length;k<C;k++)N[k]!==D[k]&&(n.disableVertexAttribArray(k),N[k]=0)}function E(D,N,k,C,F,V,O){O===!0?n.vertexAttribIPointer(D,N,k,F,V):n.vertexAttribPointer(D,N,k,C,F,V)}function v(D,N,k,C){y();let F=C.attributes,V=k.getAttributes(),O=N.defaultAttributeValues;for(let j in V){let G=V[j];if(G.location>=0){let Z=F[j];if(Z===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){let ie=Z.normalized,xe=Z.itemSize,Ee=e.get(Z);if(Ee===void 0)continue;let Be=Ee.buffer,_e=Ee.type,J=Ee.bytesPerElement,z=_e===n.INT||_e===n.UNSIGNED_INT||Z.gpuType===El;if(Z.isInterleavedBufferAttribute){let $=Z.data,pe=$.stride,ye=Z.offset;if($.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)h(G.location+me,$.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<G.locationSize;me++)m(G.location+me);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let me=0;me<G.locationSize;me++)E(G.location+me,xe/G.locationSize,_e,ie,pe*J,(ye+xe/G.locationSize*me)*J,z)}else{if(Z.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)h(G.location+$,Z.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let $=0;$<G.locationSize;$++)m(G.location+$);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let $=0;$<G.locationSize;$++)E(G.location+$,xe/G.locationSize,_e,ie,xe*J,xe/G.locationSize*$*J,z)}}else if(O!==void 0){let ie=O[j];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(G.location,ie);break;case 3:n.vertexAttrib3fv(G.location,ie);break;case 4:n.vertexAttrib4fv(G.location,ie);break;default:n.vertexAttrib1fv(G.location,ie)}}}}b()}function M(){_();for(let D in a){let N=a[D];for(let k in N){let C=N[k];for(let F in C){let V=C[F];for(let O in V)d(V[O].object),delete V[O];delete C[F]}}delete a[D]}}function A(D){if(a[D.id]===void 0)return;let N=a[D.id];for(let k in N){let C=N[k];for(let F in C){let V=C[F];for(let O in V)d(V[O].object),delete V[O];delete C[F]}}delete a[D.id]}function w(D){for(let N in a){let k=a[N];for(let C in k){let F=k[C];if(F[D.id]===void 0)continue;let V=F[D.id];for(let O in V)d(V[O].object),delete V[O];delete F[D.id]}}}function g(D){for(let N in a){let k=a[N],C=D.isInstancedMesh===!0?D.id:0,F=k[C];if(F!==void 0){for(let V in F){let O=F[V];for(let j in O)d(O[j].object),delete O[j];delete F[V]}delete k[C],Object.keys(k).length===0&&delete a[N]}}}function _(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:_,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Ab(n,e,t){let a;function i(c){a=c}function r(c,l){n.drawArrays(a,c,l),t.update(l,a,1)}function o(c,l,d){d!==0&&(n.drawArraysInstanced(a,c,l,d),t.update(l,a,d))}function s(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,c,0,l,0,d);let u=0;for(let f=0;f<d;f++)u+=l[f];t.update(u,a,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=s}function Tb(n,e,t,a){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Kn&&a.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(w){let g=w===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Rn&&w!==Zn&&!g&&a.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Qe("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,maxSamples:M,samples:A}}function wb(n){let e=this,t=null,a=0,i=!1,r=!1,o=new oa,s=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||a!==0||i;return i=u,a=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,f){let x=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,h=n.get(p);if(!i||x===null||x.length===0||r&&!m)r?d(null):l();else{let b=r?0:a,E=b*4,v=h.clippingState||null;c.value=v,v=d(x,u,E,f);for(let M=0;M!==E;++M)v[M]=t[M];h.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function d(p,u,f,x){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=c.value,x!==!0||m===null){let h=f+y*4,b=u.matrixWorldInverse;s.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,v=f;E!==y;++E,v+=4)o.copy(p[E]).applyMatrix4(b,s),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var mr=4,Cb=6,Rb=20,Pb=256,Lo=new cr,Jh=new Oe,cu=null,du=0,uu=0,pu=!1,Ib=new B,Ti=new B,xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,i=100,r={}){let{size:o=256,position:s=Ib}=r;cu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,a,i,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,du,uu),this._renderer.xr.enabled=pu,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:pa,format:Kn,colorSpace:Yr,depthBuffer:!1},i=Zh(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,a);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Db(r)),this._blurMaterial=Fb(r,e,t),this._ggxMaterial=Lb(r,e,t)}return i}_compileMaterial(e){let t=new Fe(new ft,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,a,i,r){let c=new an(90,1,t,a),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(Jh),p.toneMapping=da,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new Pe,new Tn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,h=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,h=!0):(m.color.copy(Jh),h=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[E]));let M=this._cubeSize;fr(i,v*M,E>2?M:0,M,M),p.setRenderTarget(i),h&&p.render(y,c),p.render(e,c)}p.toneMapping=f,p.autoClear=u,e.background=b}_textureToCubeUV(e,t){let a=this._renderer,i=e.mapping===ii||e.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let s=r.uniforms;s.envMap.value=e;let c=this._cubeSize;fr(t,0,0,3*c,2*c),a.setRenderTarget(t),a.render(o,Lo)}_applyPMREM(e){let t=this._renderer,a=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=a}_applyGGXFilter(e,t,a){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[a];s.material=o;let c=o.uniforms,l=a/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),u=l*1.25,f=p*u,{_lodMax:x}=this,y=this._sizeLods[a],m=3*y*(a>x-mr?a-x+mr:0),h=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=x-t,fr(r,m,h,3*y,2*y),i.setRenderTarget(r),i.render(s,Lo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-a,fr(e,m,h,3*y,2*y),i.setRenderTarget(e),i.render(s,Lo)}_blur(e,t,a,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,a,o),this._blurPass(r,e,a,a,o)}_blurPass(e,t,a,i,r){let o=this._renderer,s=this._blurMaterial,c=this._lodMeshes[i];c.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-a;let d=this._sizeLods[i],p=3*d*(i>this._lodMax-mr?i-this._lodMax+mr:0),u=4*(this._cubeSize-d);fr(t,p,u,3*d,2*d),o.setRenderTarget(t),o.render(c,Lo)}};function Db(n){let e=[],t=[],a=n,i=n-mr+1+Cb;for(let r=0;r<i;r++){let o=Math.pow(2,a);e.push(o);let s=1/(o-2),c=-s,l=1+s,d=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,u=6,f=3,x=new Float32Array(f*u*p),y=new Float32Array(f*u*p);for(let h=0;h<p;h++){let b=h%3*2/3-1,E=h>2?0:-1,v=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];x.set(v,f*u*h);for(let M=0;M<u;M++){let A=d[M*2]*2-1,w=d[M*2+1]*2-1;h===0?Ti.set(1,w,A):h===1?Ti.set(-A,1,-w):h===2?Ti.set(-A,w,1):h===3?Ti.set(-1,w,-A):h===4?Ti.set(-A,-1,w):Ti.set(A,w,-1),Ti.toArray(y,(h*u+M)*f)}}let m=new ft;m.setAttribute("position",new bt(x,f)),m.setAttribute("outputDirection",new bt(y,f)),t.push(new Fe(m,null)),a>mr&&a--}return{lodMeshes:t,sizeLods:e}}function Zh(n,e,t){let a=new An(n,e,t);return a.texture.mapping=Eo,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function fr(n,e,t,a,i){n.viewport.set(e,t,a,i),n.scissor.set(e,t,a,i)}function Lb(n,e,t){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Fb(n,e,t){return new zn({name:"SphericalGaussianBlur",defines:{SAMPLES:Rb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Kh(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Qh(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dc=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let a={width:e,height:e,depth:1},i=[a,a,a,a,a,a];this.texture=new ro(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pe(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Ai(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:on,blending:Ea});r.uniforms.tEquirect.value=t;let o=new Fe(i,r),s=t.minFilter;return t.minFilter===ri&&(t.minFilter=rn),new xl(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,a=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,a,i);e.setRenderTarget(r)}};function Nb(n){let e=new WeakMap,t=new WeakMap,a=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===yl||f===_l)if(e.has(u)){let x=e.get(u).texture;return s(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let y=new dc(x.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",l),s(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,x=f===yl||f===_l,y=f===ii||f===Mi;if(x||y){let m=t.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return a===null&&(a=new xr(n)),m=x?a.fromEquirectangular(u,m):a.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return x&&b&&b.height>0||y&&b&&c(b)?(a===null&&(a=new xr(n)),m=x?a.fromEquirectangular(u):a.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function s(u,f){return f===yl?u.mapping=ii:f===_l&&(u.mapping=Mi),u}function c(u){let f=0,x=6;for(let y=0;y<x;y++)u[y]!==void 0&&f++;return f===x}function l(u){let f=u.target;f.removeEventListener("dispose",l);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:i,dispose:p}}function Bb(n){let e={};function t(a){if(e[a]!==void 0)return e[a];let i=n.getExtension(a);return e[a]=i,i}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){let i=t(a);return i===null&&yi("WebGLRenderer: "+a+" extension not supported."),i}}}function Ub(n,e,t,a){let i={},r=new WeakMap;function o(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),a.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(p,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(p){let u=p.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function l(p){let u=[],f=p.index,x=p.attributes.position,y=0;if(x===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let E=0,v=b.length;E<v;E+=3){let M=b[E+0],A=b[E+1],w=b[E+2];u.push(M,A,A,w,w,M)}}else{let b=x.array;y=x.version;for(let E=0,v=b.length/3-1;E<v;E+=3){let M=E+0,A=E+1,w=E+2;u.push(M,A,A,w,w,M)}}let m=new(x.count>=65535?no:to)(u,1);m.version=y;let h=r.get(p);h&&e.remove(h),r.set(p,m)}function d(p){let u=r.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&l(p)}else l(p);return r.get(p)}return{get:s,update:c,getWireframeAttribute:d}}function zb(n,e,t){let a;function i(p){a=p}let r,o;function s(p){r=p.type,o=p.bytesPerElement}function c(p,u){n.drawElements(a,u,r,p*o),t.update(u,a,1)}function l(p,u,f){f!==0&&(n.drawElementsInstanced(a,u,r,p*o,f),t.update(u,a,f))}function d(p,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,u,0,r,p,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,a,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Ob(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(r,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(r/3);break;case n.LINES:t.lines+=s*(r/2);break;case n.LINE_STRIP:t.lines+=s*(r-1);break;case n.LINE_LOOP:t.lines+=s*r;break;case n.POINTS:t.points+=s*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:a}}function Gb(n,e,t){let a=new WeakMap,i=new Ot;function r(o,s,c){let l=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=d!==void 0?d.length:0,u=a.get(s);if(u===void 0||u.count!==p){let _=function(){w.dispose(),a.delete(s),s.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let f=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,y=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],h=s.morphAttributes.normal||[],b=s.morphAttributes.color||[],E=0;f===!0&&(E=1),x===!0&&(E=2),y===!0&&(E=3);let v=s.attributes.position.count*E,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*M*4*p),w=new Kr(A,v,M,p);w.type=Zn,w.needsUpdate=!0;let g=E*4;for(let T=0;T<p;T++){let D=m[T],N=h[T],k=b[T],C=v*M*4*T;for(let F=0;F<D.count;F++){let V=F*g;f===!0&&(i.fromBufferAttribute(D,F),A[C+V+0]=i.x,A[C+V+1]=i.y,A[C+V+2]=i.z,A[C+V+3]=0),x===!0&&(i.fromBufferAttribute(N,F),A[C+V+4]=i.x,A[C+V+5]=i.y,A[C+V+6]=i.z,A[C+V+7]=0),y===!0&&(i.fromBufferAttribute(k,F),A[C+V+8]=i.x,A[C+V+9]=i.y,A[C+V+10]=i.z,A[C+V+11]=k.itemSize===4?i.w:1)}}u={count:p,texture:w,size:new Xe(v,M)},a.set(s,u),s.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let x=s.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Hb(n,e,t,a,i){let r=new WeakMap;function o(l){let d=i.render.frame,p=l.geometry,u=e.get(l,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function s(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),a.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:s}}var kb={[Vd]:"LINEAR_TONE_MAPPING",[jd]:"REINHARD_TONE_MAPPING",[qd]:"CINEON_TONE_MAPPING",[So]:"ACES_FILMIC_TONE_MAPPING",[Wd]:"AGX_TONE_MAPPING",[Xd]:"NEUTRAL_TONE_MAPPING",[$d]:"CUSTOM_TONE_MAPPING"};function Vb(n,e,t,a,i,r){let o=new An(e,t,{type:n,depthBuffer:i,stencilBuffer:r,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ft;l.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new tt([0,2,0,0,2,0],2));let d=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Fe(l,d),u=new cr(-1,1,1,-1,0,1),f=null,x=null,y=!1,m,h=null,b=[],E=!1;this.setSize=function(v,M){o.setSize(v,M),s!==null&&s.setSize(v,M),c!==null&&c.setSize(v,M);for(let A=0;A<b.length;A++){let w=b[A];w.setSize&&w.setSize(v,M)}},this.setEffects=function(v){b=v,E=b.length>0&&b[0].isRenderPass===!0;let M=o.width,A=o.height;b.length>0&&s===null&&(s=new An(M,A,{type:pa,depthBuffer:!1,stencilBuffer:!1}),c=new An(M,A,{type:pa,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){let g=b[w];g.setSize&&g.setSize(M,A)}},this.begin=function(v,M){if(y||v.toneMapping===da&&b.length===0)return!1;if(h=M,M!==null){let A=M.width,w=M.height;(o.width!==A||o.height!==w)&&this.setSize(A,w)}return E===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=da,!0},this.hasRenderPass=function(){return E},this.end=function(v,M){v.toneMapping=m,y=!0;let A=o,w=s;for(let g=0;g<b.length;g++){let _=b[g];_.enabled!==!1&&(_.render(v,w,A,M),_.needsSwap!==!1&&(A=w,w=w===s?c:s))}if(f!==v.outputColorSpace||x!==v.toneMapping){f=v.outputColorSpace,x=v.toneMapping,d.defines={},yt.getTransfer(f)===Ct&&(d.defines.SRGB_TRANSFER="");let g=kb[x];g&&(d.defines[g]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(h),v.render(p,u),h=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var yf=new yn,mu=new Qa(1,1),_f=new Kr,Sf=new qs,Ef=new ro,ef=[],tf=[],nf=new Float32Array(16),af=new Float32Array(9),rf=new Float32Array(4);function br(n,e,t){let a=n[0];if(a<=0||a>0)return n;let i=e*t,r=ef[i];if(r===void 0&&(r=new Float32Array(i),ef[i]=r),e!==0){a.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(r,s)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,a=n.length;t<a;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,a=e.length;t<a;t++)n[t]=e[t]}function hc(n,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let a=0;a!==e;++a)t[a]=n.allocateTextureUnit();return t}function jb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function $b(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function Wb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function Xb(n,e){let t=this.cache,a=e.elements;if(a===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,a))return;rf.set(a),n.uniformMatrix2fv(this.addr,!1,rf),en(t,a)}}function Yb(n,e){let t=this.cache,a=e.elements;if(a===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,a))return;af.set(a),n.uniformMatrix3fv(this.addr,!1,af),en(t,a)}}function Jb(n,e){let t=this.cache,a=e.elements;if(a===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,a))return;nf.set(a),n.uniformMatrix4fv(this.addr,!1,nf),en(t,a)}}function Zb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function Qb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function rv(n,e,t){let a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(mu.compareFunction=t.isReversedDepthBuffer()?sc:oc,r=mu):r=yf,t.setTexture2D(e||r,i)}function ov(n,e,t){let a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i),t.setTexture3D(e||Sf,i)}function sv(n,e,t){let a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i),t.setTextureCube(e||Ef,i)}function lv(n,e,t){let a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(n.uniform1i(this.addr,i),a[0]=i),t.setTexture2DArray(e||_f,i)}function cv(n){switch(n){case 5126:return jb;case 35664:return qb;case 35665:return $b;case 35666:return Wb;case 35674:return Xb;case 35675:return Yb;case 35676:return Jb;case 5124:case 35670:return Zb;case 35667:case 35671:return Kb;case 35668:case 35672:return Qb;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return av;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return lv}}function dv(n,e){n.uniform1fv(this.addr,e)}function uv(n,e){let t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function pv(n,e){let t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function hv(n,e){let t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function fv(n,e){let t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mv(n,e){let t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gv(n,e){let t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xv(n,e){n.uniform1iv(this.addr,e)}function bv(n,e){n.uniform2iv(this.addr,e)}function vv(n,e){n.uniform3iv(this.addr,e)}function yv(n,e){n.uniform4iv(this.addr,e)}function _v(n,e){n.uniform1uiv(this.addr,e)}function Sv(n,e){n.uniform2uiv(this.addr,e)}function Ev(n,e){n.uniform3uiv(this.addr,e)}function Mv(n,e){n.uniform4uiv(this.addr,e)}function Av(n,e,t){let a=this.cache,i=e.length,r=hc(t,i);Qt(a,r)||(n.uniform1iv(this.addr,r),en(a,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=mu:o=yf;for(let s=0;s!==i;++s)t.setTexture2D(e[s]||o,r[s])}function Tv(n,e,t){let a=this.cache,i=e.length,r=hc(t,i);Qt(a,r)||(n.uniform1iv(this.addr,r),en(a,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Sf,r[o])}function wv(n,e,t){let a=this.cache,i=e.length,r=hc(t,i);Qt(a,r)||(n.uniform1iv(this.addr,r),en(a,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ef,r[o])}function Cv(n,e,t){let a=this.cache,i=e.length,r=hc(t,i);Qt(a,r)||(n.uniform1iv(this.addr,r),en(a,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_f,r[o])}function Rv(n){switch(n){case 5126:return dv;case 35664:return uv;case 35665:return pv;case 35666:return hv;case 35674:return fv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return bv;case 35668:case 35672:return vv;case 35669:case 35673:return yv;case 5125:return _v;case 36294:return Sv;case 36295:return Ev;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Cv}}var gu=class{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}},xu=class{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rv(t.type)}},bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let s=i[r];s.setValue(e,t[s.id],a)}}},hu=/(\w+)(\])?(\[|\.)?/g;function of(n,e){n.seq.push(e),n.map[e.id]=e}function Pv(n,e,t){let a=n.name,i=a.length;for(hu.lastIndex=0;;){let r=hu.exec(a),o=hu.lastIndex,s=r[1],c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===i){of(t,l===void 0?new gu(s,n,e):new xu(s,n,e));break}else{let p=t.map[s];p===void 0&&(p=new bu(s),of(t,p)),t=p}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){let s=e.getActiveUniform(t,o),c=e.getUniformLocation(t,s.name);Pv(s,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,a,i){let r=this.map[t];r!==void 0&&r.setValue(e,a,i)}setOptional(e,t,a){let i=t[a];i!==void 0&&this.setValue(e,a,i)}static upload(e,t,a,i){for(let r=0,o=t.length;r!==o;++r){let s=t[r],c=a[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){let a=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&a.push(o)}return a}};function sf(n,e,t){let a=n.createShader(e);return n.shaderSource(a,t),n.compileShader(a),a}var Iv=37297,Dv=0;function Lv(n,e){let t=n.split(`
`),a=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let s=o+1;a.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return a.join(`
`)}var lf=new st;function Fv(n){yt._getMatrix(lf,yt.workingColorSpace,n);let e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case Jr:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cf(n,e,t){let a=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(a&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Lv(n.getShaderSource(e),s)}else return r}function Nv(n,e){let t=Fv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Bv={[Vd]:"Linear",[jd]:"Reinhard",[qd]:"Cineon",[So]:"ACESFilmic",[Wd]:"AgX",[Xd]:"Neutral",[$d]:"Custom"};function Uv(n,e){let t=Bv[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cc=new B;function zv(){yt.getLuminanceCoefficients(cc);let n=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function Gv(n){let e=[];for(let t in n){let a=n[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function Hv(n,e){let t={},a=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<a;i++){let r=n.getActiveAttrib(e,i),o=r.name,s=1;r.type===n.FLOAT_MAT2&&(s=2),r.type===n.FLOAT_MAT3&&(s=3),r.type===n.FLOAT_MAT4&&(s=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function No(n){return n!==""}function df(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(n){return n.replace(kv,jv)}var Vv=new Map;function jv(n,e){let t=pt[e];if(t===void 0){let a=Vv.get(e);if(a!==void 0)t=pt[a],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vu(t)}var qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(n){return n.replace(qv,$v)}function $v(n,e,t,a){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Wv={[_o]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function Xv(n){return Wv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yv={[ii]:"ENVMAP_TYPE_CUBE",[Mi]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function Jv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Yv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zv={[Mi]:"ENVMAP_MODE_REFRACTION"};function Kv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Zv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[vl]:"ENVMAP_BLENDING_MULTIPLY",[Rh]:"ENVMAP_BLENDING_MIX",[Ph]:"ENVMAP_BLENDING_ADD"};function ey(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Qv[n.combine]||"ENVMAP_BLENDING_NONE"}function ty(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function ny(n,e,t,a){let i=n.getContext(),r=t.defines,o=t.vertexShader,s=t.fragmentShader,c=Xv(t),l=Jv(t),d=Kv(t),p=ey(t),u=ty(t),f=Ov(t),x=Gv(r),y=i.createProgram(),m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(No).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(No).join(`
`),h.length>0&&(h+=`
`)):(m=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),h=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==da?"#define TONE_MAPPING":"",t.toneMapping!==da?pt.tonemapping_pars_fragment:"",t.toneMapping!==da?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Nv("linearToOutputTexel",t.outputColorSpace),zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=vu(o),o=df(o,t),o=uf(o,t),s=vu(s),s=df(s,t),s=uf(s,t),o=pf(o),s=pf(s),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let E=b+m+o,v=b+h+s,M=sf(i,i.VERTEX_SHADER,E),A=sf(i,i.FRAGMENT_SHADER,v);i.attachShader(y,M),i.attachShader(y,A),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function w(D){if(n.debug.checkShaderErrors){let N=i.getProgramInfoLog(y)||"",k=i.getShaderInfoLog(M)||"",C=i.getShaderInfoLog(A)||"",F=N.trim(),V=k.trim(),O=C.trim(),j=!0,G=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,y,M,A);else{let Z=cf(i,M,"vertex"),ie=cf(i,A,"fragment");it("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Z+`
`+ie)}else F!==""?Qe("WebGLProgram: Program Info Log:",F):(V===""||O==="")&&(G=!1);G&&(D.diagnostics={runnable:j,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:h}})}i.deleteShader(M),i.deleteShader(A),g=new gr(i,y),_=Hv(i,y)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(y,Iv)),T},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=A,this}var ay=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,a){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(a)===!1&&(i.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){let t=this.shaderCache,a=t.get(e);return a===void 0&&(a=new _u(e),t.set(e,a)),a}},_u=class{constructor(e){this.id=ay++,this.code=e,this.usedTimes=0}};function iy(n){return n===si||n===Ro||n===Po}function ry(n,e,t,a,i,r){let o=new Qr,s=new yu,c=new Set,l=[],d=new Map,p=a.logarithmicDepthBuffer,u=a.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function y(g,_,T,D,N,k){let C=D.fog,F=N.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,j=e.get(g.envMap||V,O),G=j&&j.mapping===Eo?j.image.height:null,Z=f[g.type];g.precision!==null&&(u=a.getMaxPrecision(g.precision),u!==g.precision&&Qe("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,xe=ie!==void 0?ie.length:0,Ee=0;F.morphAttributes.position!==void 0&&(Ee=1),F.morphAttributes.normal!==void 0&&(Ee=2),F.morphAttributes.color!==void 0&&(Ee=3);let Be,_e,J,z;if(Z){let dt=Aa[Z];Be=dt.vertexShader,_e=dt.fragmentShader}else{Be=g.vertexShader,_e=g.fragmentShader;let dt=s.getVertexShaderStage(g),ct=s.getFragmentShaderStage(g);s.update(g,dt,ct),J=dt.id,z=ct.id}let $=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),ye=N.isInstancedMesh===!0,me=N.isBatchedMesh===!0,Ce=!!g.map,Ue=!!g.matcap,we=!!j,Je=!!g.aoMap,nt=!!g.lightMap,ke=!!g.bumpMap&&g.wireframe===!1,be=!!g.normalMap,te=!!g.displacementMap,ae=!!g.emissiveMap,fe=!!g.metalnessMap,L=!!g.roughnessMap,R=g.anisotropy>0,ne=g.clearcoat>0,oe=g.dispersion>0,P=g.retroreflectivity>0,S=g.iridescence>0,U=g.sheen>0,Y=g.transmission>0,H=R&&!!g.anisotropyMap,ge=ne&&!!g.clearcoatMap,ve=ne&&!!g.clearcoatNormalMap,ce=ne&&!!g.clearcoatRoughnessMap,de=S&&!!g.iridescenceMap,Se=S&&!!g.iridescenceThicknessMap,ze=U&&!!g.sheenColorMap,Te=U&&!!g.sheenRoughnessMap,Me=!!g.specularMap,Ve=!!g.specularColorMap,Ke=!!g.specularIntensityMap,lt=Y&&!!g.transmissionMap,X=Y&&!!g.thicknessMap,Re=!!g.gradientMap,q=!!g.alphaMap,le=g.alphaTest>0,he=!!g.alphaHash,ue=!!g.extensions,Ae=da;g.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ae=n.toneMapping);let Ie={shaderID:Z,shaderType:g.type,shaderName:g.name,vertexShader:Be,fragmentShader:_e,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:z,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:me,batchingColor:me&&N._colorsTexture!==null,instancing:ye,instancingColor:ye&&N.instanceColor!==null,instancingMorph:ye&&N.morphTexture!==null,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:Ue,envMap:we,envMapMode:we&&j.mapping,envMapCubeUVHeight:G,aoMap:Je,lightMap:nt,bumpMap:ke,normalMap:be,displacementMap:te,emissiveMap:ae,normalMapObjectSpace:be&&g.normalMapType===Lh,normalMapTangentSpace:be&&g.normalMapType===Io,packedNormalMap:be&&g.normalMapType===Io&&iy(g.normalMap.format),metalnessMap:fe,roughnessMap:L,anisotropy:R,anisotropyMap:H,clearcoat:ne,clearcoatMap:ge,clearcoatNormalMap:ve,clearcoatRoughnessMap:ce,dispersion:oe,retroreflection:P,iridescence:S,iridescenceMap:de,iridescenceThicknessMap:Se,sheen:U,sheenColorMap:ze,sheenRoughnessMap:Te,specularMap:Me,specularColorMap:Ve,specularIntensityMap:Ke,transmission:Y,transmissionMap:lt,thicknessMap:X,gradientMap:Re,opaque:g.transparent===!1&&g.blending===ur&&g.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:he,combine:g.combine,mapUv:Ce&&x(g.map.channel),aoMapUv:Je&&x(g.aoMap.channel),lightMapUv:nt&&x(g.lightMap.channel),bumpMapUv:ke&&x(g.bumpMap.channel),normalMapUv:be&&x(g.normalMap.channel),displacementMapUv:te&&x(g.displacementMap.channel),emissiveMapUv:ae&&x(g.emissiveMap.channel),metalnessMapUv:fe&&x(g.metalnessMap.channel),roughnessMapUv:L&&x(g.roughnessMap.channel),anisotropyMapUv:H&&x(g.anisotropyMap.channel),clearcoatMapUv:ge&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(g.sheenRoughnessMap.channel),specularMapUv:Me&&x(g.specularMap.channel),specularColorMapUv:Ve&&x(g.specularColorMap.channel),specularIntensityMapUv:Ke&&x(g.specularIntensityMap.channel),transmissionMapUv:lt&&x(g.transmissionMap.channel),thicknessMapUv:X&&x(g.thicknessMap.channel),alphaMapUv:q&&x(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(be||R),vertexNormals:!!F.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ce||q),fog:!!C,useFog:g.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||F.attributes.normal===void 0&&be===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ee,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&yt.getTransfer(g.map.colorSpace)===Ct,decodeVideoTextureEmissive:ae&&g.emissiveMap.isVideoTexture===!0&&yt.getTransfer(g.emissiveMap.colorSpace)===Ct,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Gn,flipSided:g.side===on,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ue&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&g.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function m(g){let _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(let T in g.defines)_.push(T),_.push(g.defines[T]);return g.isRawShaderMaterial===!1&&(h(_,g),b(_,g),_.push(n.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function h(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numSunLights),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numSunLightShadows),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function b(g,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function E(g){let _=f[g.type],T;if(_){let D=Aa[_];T=Wh.clone(D.uniforms)}else T=g.uniforms;return T}function v(g,_){let T=d.get(_);return T!==void 0?++T.usedTimes:(T=new ny(n,_,g,i),l.push(T),d.set(_,T)),T}function M(g){if(--g.usedTimes===0){let _=l.indexOf(g);l[_]=l[l.length-1],l.pop(),d.delete(g.cacheKey),g.destroy()}}function A(g){s.remove(g)}function w(){s.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:M,releaseShaderCache:A,programs:l,dispose:w}}function oy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function a(o){n.delete(o)}function i(o,s,c){n.get(o)[s]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:a,update:i,dispose:r}}function sy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ff(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mf(){let n=[],e=0,t=[],a=[],i=[];function r(){e=0,t.length=0,a.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function s(u,f,x,y,m,h){let b=n[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:x,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:h},n[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=x,b.materialVariant=o(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=m,b.group=h),e++,b}function c(u,f,x,y,m,h,b){b.reversedDepth===!0&&(m=-m);let E=s(u,f,x,y,m,h);x.transmission>0?a.push(E):x.transparent===!0?i.push(E):t.push(E)}function l(u,f,x,y,m,h){let b=s(u,f,x,y,m,h);x.transmission>0?a.unshift(b):x.transparent===!0?i.unshift(b):t.unshift(b)}function d(u,f){t.length>1&&t.sort(u||sy),a.length>1&&a.sort(f||ff),i.length>1&&i.sort(f||ff)}function p(){for(let u=e,f=n.length;u<f;u++){let x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:i,init:r,push:c,unshift:l,finish:p,sort:d}}function ly(){let n=new WeakMap;function e(a,i){let r=n.get(a),o;return r===void 0?(o=new mf,n.set(a,[o])):i>=r.length?(o=new mf,r.push(o)):o=r[i],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Oe};break;case"SpotLight":t={position:new B,direction:new B,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function dy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var uy=0;function py(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hy(n){let e=new cy,t=dy(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)a.probe.push(new B);let i=new B,r=new xt,o=new xt;function s(l){let d=0,p=0,u=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let f=0,x=0,y=0,m=0,h=0,b=0,E=0,v=0,M=0,A=0,w=0,g=0,_=0,T=0;l.sort(py);for(let N=0,k=l.length;N<k;N++){let C=l[N],F=C.color,V=C.intensity,O=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===si?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=F.r*V,p+=F.g*V,u+=F.b*V;else if(C.isLightProbe){for(let G=0;G<9;G++)a.probe[G].addScaledVector(C.sh.coefficients[G],V);T++}else if(C.isSunLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,ie=t.get(C);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),a.sunShadow[x]=ie,a.sunShadowMap[x]=j;let xe=Z.getViewportCount();for(let Ee=0;Ee<xe;Ee++)a.sunShadowMatrix[y+Ee]=Z.getMatrix(Ee),a.sunShadowCascade[y+Ee]=Z._cascadeData[Ee];y+=xe,x++}a.sun[f]=G,f++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,ie=t.get(C);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,a.directionalShadow[m]=ie,a.directionalShadowMap[m]=j,a.directionalShadowMatrix[m]=C.shadow.matrix,M++}a.directional[m]=G,m++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(F).multiplyScalar(V),G.distance=O,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,a.spot[b]=G;let Z=C.shadow;if(C.map&&(a.spotLightMap[g]=C.map,g++,Z.updateMatrices(C),C.castShadow&&_++),a.spotLightMatrix[b]=Z.matrix,C.castShadow){let ie=t.get(C);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,a.spotShadow[b]=ie,a.spotShadowMap[b]=j,w++}b++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(F).multiplyScalar(V),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),a.rectArea[E]=G,E++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Z=C.shadow,ie=t.get(C);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,ie.shadowCameraNear=Z.camera.near,ie.shadowCameraFar=Z.camera.far,a.pointShadow[h]=ie,a.pointShadowMap[h]=j,a.pointShadowMatrix[h]=C.shadow.matrix,A++}a.point[h]=G,h++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(V),G.groundColor.copy(C.groundColor).multiplyScalar(V),a.hemi[v]=G,v++}}E>0&&(n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=De.LTC_FLOAT_1,a.rectAreaLTC2=De.LTC_FLOAT_2):(a.rectAreaLTC1=De.LTC_HALF_1,a.rectAreaLTC2=De.LTC_HALF_2)),a.ambient[0]=d,a.ambient[1]=p,a.ambient[2]=u;let D=a.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==h||D.spotLength!==b||D.rectAreaLength!==E||D.hemiLength!==v||D.numSunShadows!==x||D.numDirectionalShadows!==M||D.numPointShadows!==A||D.numSpotShadows!==w||D.numSpotMaps!==g||D.numLightProbes!==T)&&(a.sun.length=f,a.directional.length=m,a.spot.length=b,a.rectArea.length=E,a.point.length=h,a.hemi.length=v,a.sunShadow.length=x,a.sunShadowMap.length=x,a.sunShadowMatrix.length=y,a.sunShadowCascade.length=y,a.directionalShadow.length=M,a.directionalShadowMap.length=M,a.directionalShadowMatrix.length=M,a.pointShadow.length=A,a.pointShadowMap.length=A,a.pointShadowMatrix.length=A,a.spotShadow.length=w,a.spotShadowMap.length=w,a.spotLightMatrix.length=w+g-_,a.spotLightMap.length=g,a.numSpotLightShadowsWithMaps=_,a.numLightProbes=T,D.sunLength=f,D.directionalLength=m,D.pointLength=h,D.spotLength=b,D.rectAreaLength=E,D.hemiLength=v,D.numSunShadows=x,D.numDirectionalShadows=M,D.numPointShadows=A,D.numSpotShadows=w,D.numSpotMaps=g,D.numLightProbes=T,a.version=uy++)}function c(l,d){let p=0,u=0,f=0,x=0,y=0,m=0,h=d.matrixWorldInverse;for(let b=0,E=l.length;b<E;b++){let v=l[b];if(v.isSunLight){let M=a.sun[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(h),p++}else if(v.isDirectionalLight){let M=a.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(h),u++}else if(v.isSpotLight){let M=a.spot[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(h),x++}else if(v.isRectAreaLight){let M=a.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),o.identity(),r.copy(v.matrixWorld),r.premultiply(h),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let M=a.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),f++}else if(v.isHemisphereLight){let M=a.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(h),m++}}}return{setup:s,setupView:c,state:a}}function gf(n){let e=new hy(n),t=[],a=[],i=[];function r(u){p.camera=u,t.length=0,a.length=0,i.length=0}function o(u){t.push(u)}function s(u){a.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:a,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function fy(n){let e=new WeakMap;function t(i,r=0){let o=e.get(i),s;return o===void 0?(s=new gf(n),e.set(i,[s])):r>=o.length?(s=new gf(n),o.push(s)):s=o[r],s}function a(){e=new WeakMap}return{get:t,dispose:a}}var my=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gy=`uniform sampler2D shadow_pass;
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
}`,xy=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],by=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],xf=new xt,Fo=new B,fu=new B;function vy(n,e,t){let a=new ir,i=new Xe,r=new Xe,o=new Ot,s=new rl,c=new ol,l={},d=t.maxTextureSize,p={[ai]:on,[on]:ai,[Gn]:Gn},u=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:my,fragmentShader:gy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new ft;x.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Fe(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let h=this.type;this.render=function(A,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===dh&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_o);let _=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ea),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=h!==this.type;k&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=A.length;C<F;C++){let V=A[C],O=V.shadow;if(O===void 0){Qe("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let j=O.getFrameExtents();i.multiply(j),r.copy(O.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/j.x),i.x=r.x*j.x,O.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/j.y),i.y=r.y*j.y,O.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===dr){if(V.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new An(i.x,i.y,{format:si,type:pa,minFilter:rn,magFilter:rn,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new Qa(i.x,i.y,Zn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=va,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn}else V.isPointLight?(O.map=new dc(i.x),O.map.depthTexture=new Ys(i.x,ua)):(O.map=new An(i.x,i.y),O.map.depthTexture=new Qa(i.x,i.y,ua)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=va,this.type===_o?(O.map.depthTexture.compareFunction=G?sc:oc,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let Z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();V.isPointLight!==!0&&O.updateMatrices(V,g);for(let ie=0;ie<Z;ie++){let xe=O.getCamera(ie);if(V.isPointLight){let Ee=O.camera,Be=O.matrix,_e=V.distance||Ee.far;_e!==Ee.far&&(Ee.far=_e,Ee.updateProjectionMatrix()),Fo.setFromMatrixPosition(V.matrixWorld),Ee.position.copy(Fo),fu.copy(Ee.position),fu.add(xy[ie]),Ee.up.copy(by[ie]),Ee.lookAt(fu),Ee.updateMatrixWorld(),Be.makeTranslation(-Fo.x,-Fo.y,-Fo.z),xf.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),O._frustum.setFromProjectionMatrix(xf,Ee.coordinateSystem,Ee.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(O.map),n.clear());let Ee=O.getViewport(ie);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),N.viewport(o)}a=O.getFrustum(ie),v(w,g,xe,V,this.type)}O.isPointLightShadow!==!0&&this.type===dr&&b(O,g),O.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(_,T,D)};function b(A,w){let g=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new An(i.x,i.y,{format:si,type:pa}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,g,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,g,f,y,null)}function E(A,w,g,_){let T=null,D=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)T=D;else if(T=g.isPointLight===!0?c:s,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=T.uuid,k=w.uuid,C=l[N];C===void 0&&(C={},l[N]=C);let F=C[k];F===void 0&&(F=T.clone(),C[k]=F,w.addEventListener("dispose",M)),T=F}if(T.visible=w.visible,T.wireframe=w.wireframe,_===dr?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:p[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,g.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=n.properties.get(T);N.light=g}return T}function v(A,w,g,_,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===dr)&&(!A.frustumCulled||A.intersectsFrustum(a))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let k=e.update(A),C=A.material;if(Array.isArray(C)){let F=k.groups;for(let V=0,O=F.length;V<O;V++){let j=F[V],G=C[j.materialIndex];if(G&&G.visible){let Z=E(A,G,_,T);A.onBeforeShadow(n,A,w,g,k,Z,j),n.renderBufferDirect(g,null,k,Z,A,j),A.onAfterShadow(n,A,w,g,k,Z,j)}}}else if(C.visible){let F=E(A,C,_,T);A.onBeforeShadow(n,A,w,g,k,F,null),n.renderBufferDirect(g,null,k,F,A,null),A.onAfterShadow(n,A,w,g,k,F,null)}}let N=A.children;for(let k=0,C=N.length;k<C;k++)v(N[k],w,g,_,T)}function M(A){A.target.removeEventListener("dispose",M);for(let g in l){let _=l[g],T=A.target.uuid;T in _&&(_[T].dispose(),delete _[T])}}}function yy(n,e){function t(){let X=!1,Re=new Ot,q=null,le=new Ot(0,0,0,0);return{setMask:function(he){q!==he&&!X&&(n.colorMask(he,he,he,he),q=he)},setLocked:function(he){X=he},setClear:function(he,ue,Ae,Ie,dt){dt===!0&&(he*=Ie,ue*=Ie,Ae*=Ie),Re.set(he,ue,Ae,Ie),le.equals(Re)===!1&&(n.clearColor(he,ue,Ae,Ie),le.copy(Re))},reset:function(){X=!1,q=null,le.set(-1,0,0,0)}}}function a(){let X=!1,Re=!1,q=null,le=null,he=null;return{setReversed:function(ue){if(Re!==ue){let Ae=e.get("EXT_clip_control");ue?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Re=ue;let Ie=he;he=null,this.setClear(Ie)}},getReversed:function(){return Re},setTest:function(ue){ue?$(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(ue){q!==ue&&!X&&(n.depthMask(ue),q=ue)},setFunc:function(ue){if(Re&&(ue=qh[ue]),le!==ue){switch(ue){case Ls:n.depthFunc(n.NEVER);break;case Fs:n.depthFunc(n.ALWAYS);break;case Ns:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case Bs:n.depthFunc(n.EQUAL);break;case Us:n.depthFunc(n.GEQUAL);break;case zs:n.depthFunc(n.GREATER);break;case Os:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=ue}},setLocked:function(ue){X=ue},setClear:function(ue){he!==ue&&(he=ue,Re&&(ue=1-ue),n.clearDepth(ue))},reset:function(){X=!1,q=null,le=null,he=null,Re=!1}}}function i(){let X=!1,Re=null,q=null,le=null,he=null,ue=null,Ae=null,Ie=null,dt=null;return{setTest:function(ct){X||(ct?$(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ct){Re!==ct&&!X&&(n.stencilMask(ct),Re=ct)},setFunc:function(ct,zt,Zt){(q!==ct||le!==zt||he!==Zt)&&(n.stencilFunc(ct,zt,Zt),q=ct,le=zt,he=Zt)},setOp:function(ct,zt,Zt){(ue!==ct||Ae!==zt||Ie!==Zt)&&(n.stencilOp(ct,zt,Zt),ue=ct,Ae=zt,Ie=Zt)},setLocked:function(ct){X=ct},setClear:function(ct){dt!==ct&&(n.clearStencil(ct),dt=ct)},reset:function(){X=!1,Re=null,q=null,le=null,he=null,ue=null,Ae=null,Ie=null,dt=null}}}let r=new t,o=new a,s=new i,c=new WeakMap,l=new WeakMap,d={},p={},u={},f=new WeakMap,x=[],y=null,m=!1,h=null,b=null,E=null,v=null,M=null,A=null,w=null,g=new Oe(0,0,0),_=0,T=!1,D=null,N=null,k=null,C=null,F=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,j=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=j>=2);let Z=null,ie={},xe=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Be=new Ot().fromArray(xe),_e=new Ot().fromArray(Ee);function J(X,Re,q,le){let he=new Uint8Array(4),ue=n.createTexture();n.bindTexture(X,ue),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<q;Ae++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Re+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ue}let z={};z[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),$(n.DEPTH_TEST),o.setFunc(Ki),ke(!1),be(Ud),$(n.CULL_FACE),Je(Ea);function $(X){d[X]!==!0&&(n.enable(X),d[X]=!0)}function pe(X){d[X]!==!1&&(n.disable(X),d[X]=!1)}function ye(X,Re){return u[X]!==Re?(n.bindFramebuffer(X,Re),u[X]=Re,X===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Re),X===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function me(X,Re){let q=x,le=!1;if(X){q=f.get(Re),q===void 0&&(q=[],f.set(Re,q));let he=X.textures;if(q.length!==he.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Ae=he.length;ue<Ae;ue++)q[ue]=n.COLOR_ATTACHMENT0+ue;q.length=he.length,le=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,le=!0);le&&n.drawBuffers(q)}function Ce(X){return y!==X?(n.useProgram(X),y=X,!0):!1}let Ue={[Ei]:n.FUNC_ADD,[ph]:n.FUNC_SUBTRACT,[hh]:n.FUNC_REVERSE_SUBTRACT};Ue[fh]=n.MIN,Ue[mh]=n.MAX;let we={[gh]:n.ZERO,[xh]:n.ONE,[bh]:n.SRC_COLOR,[Hd]:n.SRC_ALPHA,[Mh]:n.SRC_ALPHA_SATURATE,[Sh]:n.DST_COLOR,[yh]:n.DST_ALPHA,[vh]:n.ONE_MINUS_SRC_COLOR,[kd]:n.ONE_MINUS_SRC_ALPHA,[Eh]:n.ONE_MINUS_DST_COLOR,[_h]:n.ONE_MINUS_DST_ALPHA,[Ah]:n.CONSTANT_COLOR,[Th]:n.ONE_MINUS_CONSTANT_COLOR,[wh]:n.CONSTANT_ALPHA,[Ch]:n.ONE_MINUS_CONSTANT_ALPHA};function Je(X,Re,q,le,he,ue,Ae,Ie,dt,ct){if(X===Ea){m===!0&&(pe(n.BLEND),m=!1);return}if(m===!1&&($(n.BLEND),m=!0),X!==uh){if(X!==h||ct!==T){if((b!==Ei||M!==Ei)&&(n.blendEquation(n.FUNC_ADD),b=Ei,M=Ei),ct)switch(X){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zd:n.blendFunc(n.ONE,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",X);break}else switch(X){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Od:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gd:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",X);break}E=null,v=null,A=null,w=null,g.set(0,0,0),_=0,h=X,T=ct}return}he=he||Re,ue=ue||q,Ae=Ae||le,(Re!==b||he!==M)&&(n.blendEquationSeparate(Ue[Re],Ue[he]),b=Re,M=he),(q!==E||le!==v||ue!==A||Ae!==w)&&(n.blendFuncSeparate(we[q],we[le],we[ue],we[Ae]),E=q,v=le,A=ue,w=Ae),(Ie.equals(g)===!1||dt!==_)&&(n.blendColor(Ie.r,Ie.g,Ie.b,dt),g.copy(Ie),_=dt),h=X,T=!1}function nt(X,Re){X.side===Gn?pe(n.CULL_FACE):$(n.CULL_FACE);let q=X.side===on;Re&&(q=!q),ke(q),X.blending===ur&&X.transparent===!1?Je(Ea):Je(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let le=X.stencilWrite;s.setTest(le),le&&(s.setMask(X.stencilWriteMask),s.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),s.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ae(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(X){D!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),D=X)}function be(X){X!==lh?($(n.CULL_FACE),X!==N&&(X===Ud?n.cullFace(n.BACK):X===ch?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),N=X}function te(X){X!==k&&(O&&n.lineWidth(X),k=X)}function ae(X,Re,q){X?($(n.POLYGON_OFFSET_FILL),(C!==Re||F!==q)&&(C=Re,F=q,o.getReversed()&&(Re=-Re),n.polygonOffset(Re,q))):pe(n.POLYGON_OFFSET_FILL)}function fe(X){X?$(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function L(X){X===void 0&&(X=n.TEXTURE0+V-1),Z!==X&&(n.activeTexture(X),Z=X)}function R(X,Re,q){q===void 0&&(Z===null?q=n.TEXTURE0+V-1:q=Z);let le=ie[q];le===void 0&&(le={type:void 0,texture:void 0},ie[q]=le),(le.type!==X||le.texture!==Re)&&(Z!==q&&(n.activeTexture(q),Z=q),n.bindTexture(X,Re||z[X]),le.type=X,le.texture=Re)}function ne(){let X=ie[Z];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(X){it("WebGLState:",X)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(X){it("WebGLState:",X)}}function S(){try{n.texSubImage2D(...arguments)}catch(X){it("WebGLState:",X)}}function U(){try{n.texSubImage3D(...arguments)}catch(X){it("WebGLState:",X)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(X){it("WebGLState:",X)}}function H(){try{n.compressedTexSubImage3D(...arguments)}catch(X){it("WebGLState:",X)}}function ge(){try{n.texStorage2D(...arguments)}catch(X){it("WebGLState:",X)}}function ve(){try{n.texStorage3D(...arguments)}catch(X){it("WebGLState:",X)}}function ce(){try{n.texImage2D(...arguments)}catch(X){it("WebGLState:",X)}}function de(){try{n.texImage3D(...arguments)}catch(X){it("WebGLState:",X)}}function Se(X){return p[X]!==void 0?p[X]:n.getParameter(X)}function ze(X,Re){p[X]!==Re&&(n.pixelStorei(X,Re),p[X]=Re)}function Te(X){Be.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Be.copy(X))}function Me(X){_e.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),_e.copy(X))}function Ve(X,Re){let q=l.get(Re);q===void 0&&(q=new WeakMap,l.set(Re,q));let le=q.get(X);le===void 0&&(le=n.getUniformBlockIndex(Re,X.name),q.set(X,le))}function Ke(X,Re){let le=l.get(Re).get(X);c.get(Re)!==le&&(n.uniformBlockBinding(Re,le,X.__bindingPointIndex),c.set(Re,le))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},p={},Z=null,ie={},u={},f=new WeakMap,x=[],y=null,m=!1,h=null,b=null,E=null,v=null,M=null,A=null,w=null,g=new Oe(0,0,0),_=0,T=!1,D=null,N=null,k=null,C=null,F=null,Be.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:$,disable:pe,bindFramebuffer:ye,drawBuffers:me,useProgram:Ce,setBlending:Je,setMaterial:nt,setFlipSided:ke,setCullFace:be,setLineWidth:te,setPolygonOffset:ae,setScissorTest:fe,activeTexture:L,bindTexture:R,unbindTexture:ne,compressedTexImage2D:oe,compressedTexImage3D:P,texImage2D:ce,texImage3D:de,pixelStorei:ze,getParameter:Se,updateUBOMapping:Ve,uniformBlockBinding:Ke,texStorage2D:ge,texStorage3D:ve,texSubImage2D:S,texSubImage3D:U,compressedTexSubImage2D:Y,compressedTexSubImage3D:H,scissor:Te,viewport:Me,reset:lt}}function _y(n,e,t,a,i,r,o){let s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,d=new WeakMap,p=new Set,u,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,S){return x?new OffscreenCanvas(P,S):Zr("canvas")}function m(P,S,U){let Y=1,H=oe(P);if((H.width>U||H.height>U)&&(Y=U/Math.max(H.width,H.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ge=Math.floor(Y*H.width),ve=Math.floor(Y*H.height);u===void 0&&(u=y(ge,ve));let ce=S?y(ge,ve):u;return ce.width=ge,ce.height=ve,ce.getContext("2d").drawImage(P,0,0,ge,ve),Qe("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+ge+"x"+ve+")."),ce}else return"data"in P&&Qe("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),P;return P}function h(P){return P.generateMipmaps}function b(P){n.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,S,U,Y,H,ge=!1){if(P!==null){if(n[P]!==void 0)return n[P];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ve;Y&&(ve=e.get("EXT_texture_norm16"),ve||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=S;if(S===n.RED&&(U===n.FLOAT&&(ce=n.R32F),U===n.HALF_FLOAT&&(ce=n.R16F),U===n.UNSIGNED_BYTE&&(ce=n.R8),U===n.UNSIGNED_SHORT&&ve&&(ce=ve.R16_EXT),U===n.SHORT&&ve&&(ce=ve.R16_SNORM_EXT)),S===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(ce=n.R8UI),U===n.UNSIGNED_SHORT&&(ce=n.R16UI),U===n.UNSIGNED_INT&&(ce=n.R32UI),U===n.BYTE&&(ce=n.R8I),U===n.SHORT&&(ce=n.R16I),U===n.INT&&(ce=n.R32I)),S===n.RG&&(U===n.FLOAT&&(ce=n.RG32F),U===n.HALF_FLOAT&&(ce=n.RG16F),U===n.UNSIGNED_BYTE&&(ce=n.RG8),U===n.UNSIGNED_SHORT&&ve&&(ce=ve.RG16_EXT),U===n.SHORT&&ve&&(ce=ve.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(ce=n.RG8UI),U===n.UNSIGNED_SHORT&&(ce=n.RG16UI),U===n.UNSIGNED_INT&&(ce=n.RG32UI),U===n.BYTE&&(ce=n.RG8I),U===n.SHORT&&(ce=n.RG16I),U===n.INT&&(ce=n.RG32I)),S===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),U===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),U===n.UNSIGNED_INT&&(ce=n.RGB32UI),U===n.BYTE&&(ce=n.RGB8I),U===n.SHORT&&(ce=n.RGB16I),U===n.INT&&(ce=n.RGB32I)),S===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),U===n.UNSIGNED_INT&&(ce=n.RGBA32UI),U===n.BYTE&&(ce=n.RGBA8I),U===n.SHORT&&(ce=n.RGBA16I),U===n.INT&&(ce=n.RGBA32I)),S===n.RGB&&(U===n.UNSIGNED_SHORT&&ve&&(ce=ve.RGB16_EXT),U===n.SHORT&&ve&&(ce=ve.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),S===n.RGBA){let de=ge?Jr:yt.getTransfer(H);U===n.FLOAT&&(ce=n.RGBA32F),U===n.HALF_FLOAT&&(ce=n.RGBA16F),U===n.UNSIGNED_BYTE&&(ce=de===Ct?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&ve&&(ce=ve.RGBA16_EXT),U===n.SHORT&&ve&&(ce=ve.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(P,S){let U;return P?S===null||S===ua||S===hr?U=n.DEPTH24_STENCIL8:S===Zn?U=n.DEPTH32F_STENCIL8:S===pr&&(U=n.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ua||S===hr?U=n.DEPTH_COMPONENT24:S===Zn?U=n.DEPTH_COMPONENT32F:S===pr&&(U=n.DEPTH_COMPONENT16),U}function A(P,S){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function w(P){let S=P.target;S.removeEventListener("dispose",w),_(S),S.isVideoTexture&&d.delete(S),S.isHTMLTexture&&p.delete(S)}function g(P){let S=P.target;S.removeEventListener("dispose",g),D(S)}function _(P){let S=a.get(P);if(S.__webglInit===void 0)return;let U=P.source,Y=f.get(U);if(Y){let H=Y[S.__cacheKey];H.usedTimes--,H.usedTimes===0&&T(P),Object.keys(Y).length===0&&f.delete(U)}a.remove(P)}function T(P){let S=a.get(P);n.deleteTexture(S.__webglTexture);let U=P.source,Y=f.get(U);delete Y[S.__cacheKey],o.memory.textures--}function D(P){let S=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let H=0;H<S.__webglFramebuffer[Y].length;H++)n.deleteFramebuffer(S.__webglFramebuffer[Y][H]);else n.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[Y]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=P.textures;for(let Y=0,H=U.length;Y<H;Y++){let ge=a.get(U[Y]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),a.remove(U[Y])}a.remove(P)}let N=0;function k(){N=0}function C(){return N}function F(P){N=P}function V(){let P=N;return P>=i.maxTextures&&Qe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function O(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function j(P,S){let U=a.get(P);if(P.isVideoTexture&&R(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&U.__version!==P.version){let Y=P.image;if(Y===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(U,P,S);return}}else P.isExternalTexture&&(U.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+S)}function G(P,S){let U=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){pe(U,P,S);return}else P.isExternalTexture&&(U.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+S)}function Z(P,S){let U=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){pe(U,P,S);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+S)}function ie(P,S){let U=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&U.__version!==P.version){ye(U,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+S)}let xe={[Ka]:n.REPEAT,[ba]:n.CLAMP_TO_EDGE,[Gs]:n.MIRRORED_REPEAT},Ee={[nn]:n.NEAREST,[Ih]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Sl]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},Be={[Nh]:n.NEVER,[Gh]:n.ALWAYS,[Bh]:n.LESS,[oc]:n.LEQUAL,[Uh]:n.EQUAL,[sc]:n.GEQUAL,[zh]:n.GREATER,[Oh]:n.NOTEQUAL};function _e(P,S){if(S.type===Zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===Sl||S.magFilter===Mo||S.magFilter===ri||S.minFilter===rn||S.minFilter===Sl||S.minFilter===Mo||S.minFilter===ri)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,xe[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,xe[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,xe[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Ee[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Mo&&S.minFilter!==ri||S.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||a.get(S).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),a.get(S).__currentAnisotropy=S.anisotropy}}}function J(P,S){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",w));let Y=S.source,H=f.get(Y);H===void 0&&(H={},f.set(Y,H));let ge=O(S);if(ge!==P.__cacheKey){H[ge]===void 0&&(H[ge]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),H[ge].usedTimes++;let ve=H[P.__cacheKey];ve!==void 0&&(H[P.__cacheKey].usedTimes--,ve.usedTimes===0&&T(S)),P.__cacheKey=ge,P.__webglTexture=H[ge].texture}return U}function z(P,S,U){return Math.floor(Math.floor(P/U)/S)}function $(P,S,U,Y){let ge=P.updateRanges;if(ge.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,U,Y,S.data);else{ge.sort((ze,Te)=>ze.start-Te.start);let ve=0;for(let ze=1;ze<ge.length;ze++){let Te=ge[ve],Me=ge[ze],Ve=Te.start+Te.count,Ke=z(Me.start,S.width,4),lt=z(Te.start,S.width,4);Me.start<=Ve+1&&Ke===lt&&z(Me.start+Me.count-1,S.width,4)===Ke?Te.count=Math.max(Te.count,Me.start+Me.count-Te.start):(++ve,ge[ve]=Me)}ge.length=ve+1;let ce=t.getParameter(n.UNPACK_ROW_LENGTH),de=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ze=0,Te=ge.length;ze<Te;ze++){let Me=ge[ze],Ve=Math.floor(Me.start/4),Ke=Math.ceil(Me.count/4),lt=Ve%S.width,X=Math.floor(Ve/S.width),Re=Ke,q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,lt,X,Re,q,U,Y,S.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function pe(P,S,U){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);let H=J(P,S),ge=S.source;t.bindTexture(Y,P.__webglTexture,n.TEXTURE0+U);let ve=a.get(ge);if(ge.version!==ve.__version||H===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let q=yt.getPrimaries(yt.workingColorSpace),le=S.colorSpace===za?null:yt.getPrimaries(S.colorSpace),he=S.colorSpace===za||q===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let de=m(S.image,!1,i.maxTextureSize);de=ne(S,de);let Se=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),Te=v(S.internalFormat,Se,ze,S.normalized,S.colorSpace,S.isVideoTexture);_e(Y,S);let Me,Ve=S.mipmaps,Ke=S.isVideoTexture!==!0,lt=ve.__version===void 0||H===!0,X=ge.dataReady,Re=A(S,de);if(S.isDepthTexture)Te=M(S.format===oi,S.type),lt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Te,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Te,de.width,de.height,0,Se,ze,null));else if(S.isDataTexture)if(Ve.length>0){Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,Re,Te,Ve[0].width,Ve[0].height);for(let q=0,le=Ve.length;q<le;q++)Me=Ve[q],Ke?X&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,Se,ze,Me.data):t.texImage2D(n.TEXTURE_2D,q,Te,Me.width,Me.height,0,Se,ze,Me.data);S.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(n.TEXTURE_2D,Re,Te,de.width,de.height),X&&$(S,de,Se,ze)):t.texImage2D(n.TEXTURE_2D,0,Te,de.width,de.height,0,Se,ze,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ke&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Te,Ve[0].width,Ve[0].height,de.depth);for(let q=0,le=Ve.length;q<le;q++)if(Me=Ve[q],S.format!==Kn)if(Se!==null)if(Ke){if(X)if(S.layerUpdates.size>0){let he=lu(Me.width,Me.height,S.format,S.type);for(let ue of S.layerUpdates){let Ae=Me.data.subarray(ue*he/Me.data.BYTES_PER_ELEMENT,(ue+1)*he/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ue,Me.width,Me.height,1,Se,Ae)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,de.depth,Se,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Te,Me.width,Me.height,de.depth,0,Me.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,de.depth,Se,ze,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Te,Me.width,Me.height,de.depth,0,Se,ze,Me.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,Re,Te,Ve[0].width,Ve[0].height);for(let q=0,le=Ve.length;q<le;q++)Me=Ve[q],S.format!==Kn?Se!==null?Ke?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Te,Me.width,Me.height,0,Me.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?X&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,Se,ze,Me.data):t.texImage2D(n.TEXTURE_2D,q,Te,Me.width,Me.height,0,Se,ze,Me.data)}else if(S.isDataArrayTexture)if(Ke){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Te,de.width,de.height,de.depth),X)if(S.layerUpdates.size>0){let q=lu(de.width,de.height,S.format,S.type);for(let le of S.layerUpdates){let he=de.data.subarray(le*q/de.data.BYTES_PER_ELEMENT,(le+1)*q/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,Se,ze,he)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Se,ze,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,de.width,de.height,de.depth,0,Se,ze,de.data);else if(S.isData3DTexture)Ke?(lt&&t.texStorage3D(n.TEXTURE_3D,Re,Te,de.width,de.height,de.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Se,ze,de.data)):t.texImage3D(n.TEXTURE_3D,0,Te,de.width,de.height,de.depth,0,Se,ze,de.data);else if(S.isFramebufferTexture){if(lt)if(Ke)t.texStorage2D(n.TEXTURE_2D,Re,Te,de.width,de.height);else{let q=de.width,le=de.height;for(let he=0;he<Re;he++)t.texImage2D(n.TEXTURE_2D,he,Te,q,le,0,Se,ze,null),q>>=1,le>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),de.parentNode!==q){q.appendChild(de),p.add(S),q.onpaint=le=>{let he=le.changedElements;for(let ue of p)he.includes(ue.image)&&(ue.needsUpdate=!0)},q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,de);else{let he=n.RGBA,ue=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,he,ue,Ae,de)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(Ke&&lt){let q=oe(Ve[0]);t.texStorage2D(n.TEXTURE_2D,Re,Te,q.width,q.height)}for(let q=0,le=Ve.length;q<le;q++)Me=Ve[q],Ke?X&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se,ze,Me):t.texImage2D(n.TEXTURE_2D,q,Te,Se,ze,Me);S.generateMipmaps=!1}else if(Ke){if(lt){let q=oe(de);t.texStorage2D(n.TEXTURE_2D,Re,Te,q.width,q.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ze,de)}else t.texImage2D(n.TEXTURE_2D,0,Te,Se,ze,de);h(S)&&b(Y),ve.__version=ge.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ye(P,S,U){if(S.image.length!==6)return;let Y=J(P,S),H=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+U);let ge=a.get(H);if(H.version!==ge.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);let ve=yt.getPrimaries(yt.workingColorSpace),ce=S.colorSpace===za?null:yt.getPrimaries(S.colorSpace),de=S.colorSpace===za||ve===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,ze=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let ue=0;ue<6;ue++)!Se&&!ze?Te[ue]=m(S.image[ue],!0,i.maxCubemapSize):Te[ue]=ze?S.image[ue].image:S.image[ue],Te[ue]=ne(S,Te[ue]);let Me=Te[0],Ve=r.convert(S.format,S.colorSpace),Ke=r.convert(S.type),lt=v(S.internalFormat,Ve,Ke,S.normalized,S.colorSpace),X=S.isVideoTexture!==!0,Re=ge.__version===void 0||Y===!0,q=H.dataReady,le=A(S,Me);_e(n.TEXTURE_CUBE_MAP,S);let he;if(Se){X&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,lt,Me.width,Me.height);for(let ue=0;ue<6;ue++){he=Te[ue].mipmaps;for(let Ae=0;Ae<he.length;Ae++){let Ie=he[Ae];S.format!==Kn?Ve!==null?X?q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae,0,0,Ie.width,Ie.height,Ve,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae,lt,Ie.width,Ie.height,0,Ie.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae,0,0,Ie.width,Ie.height,Ve,Ke,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae,lt,Ie.width,Ie.height,0,Ve,Ke,Ie.data)}}}else{if(he=S.mipmaps,X&&Re){he.length>0&&le++;let ue=oe(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,lt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ze){X?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Te[ue].width,Te[ue].height,Ve,Ke,Te[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,lt,Te[ue].width,Te[ue].height,0,Ve,Ke,Te[ue].data);for(let Ae=0;Ae<he.length;Ae++){let dt=he[Ae].image[ue].image;X?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae+1,0,0,dt.width,dt.height,Ve,Ke,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae+1,lt,dt.width,dt.height,0,Ve,Ke,dt.data)}}else{X?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ve,Ke,Te[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,lt,Ve,Ke,Te[ue]);for(let Ae=0;Ae<he.length;Ae++){let Ie=he[Ae];X?q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae+1,0,0,Ve,Ke,Ie.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae+1,lt,Ve,Ke,Ie.image[ue])}}}h(S)&&b(n.TEXTURE_CUBE_MAP),ge.__version=H.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function me(P,S,U,Y,H,ge){let ve=r.convert(U.format,U.colorSpace),ce=r.convert(U.type),de=v(U.internalFormat,ve,ce,U.normalized,U.colorSpace),Se=a.get(S),ze=a.get(U);if(ze.__renderTarget=S,!Se.__hasExternalTextures){let Te=Math.max(1,S.width>>ge),Me=Math.max(1,S.height>>ge);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?t.texImage3D(H,ge,de,Te,Me,S.depth,0,ve,ce,null):t.texImage2D(H,ge,de,Te,Me,0,ve,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),L(S)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,H,ze.__webglTexture,0,fe(S)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,H,ze.__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(P,S,U){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){let Y=S.depthTexture,H=Y&&Y.isDepthTexture?Y.type:null,ge=M(S.stencilBuffer,H),ve=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;L(S)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(S),ge,S.width,S.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(S),ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,P)}else{let Y=S.textures;for(let H=0;H<Y.length;H++){let ge=Y[H],ve=r.convert(ge.format,ge.colorSpace),ce=r.convert(ge.type),de=v(ge.internalFormat,ve,ce,ge.normalized,ge.colorSpace);L(S)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(S),de,S.width,S.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(S),de,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,de,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(P,S,U){let Y=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=a.get(S.depthTexture);if(H.__renderTarget=S,(!H.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y){if(H.__webglInit===void 0&&(H.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),H.__webglTexture===void 0){H.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),_e(n.TEXTURE_CUBE_MAP,S.depthTexture);let Se=r.convert(S.depthTexture.format),ze=r.convert(S.depthTexture.type),Te;S.depthTexture.format===va?Te=n.DEPTH_COMPONENT24:S.depthTexture.format===oi&&(Te=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Te,S.width,S.height,0,Se,ze,null)}}else j(S.depthTexture,0);let ge=H.__webglTexture,ve=fe(S),ce=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,de=S.depthTexture.format===oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===va)L(S)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ce,ge,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,de,ce,ge,0);else if(S.depthTexture.format===oi)L(S)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ce,ge,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,de,ce,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(P){let S=a.get(P),U=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let H=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",H)};Y.addEventListener("dispose",H),S.__depthDisposeCallback=H}S.__boundDepthTexture=Y}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let Y=0;Y<6;Y++)Ue(S.__webglFramebuffer[Y],P,Y);else{let Y=P.texture.mipmaps;Y&&Y.length>0?Ue(S.__webglFramebuffer[0],P,0):Ue(S.__webglFramebuffer,P,0)}else if(U){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ce(S.__webglDepthbuffer[Y],P,!1);else{let H=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,ge)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ce(S.__webglDepthbuffer,P,!1);else{let H=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,ge)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(P,S,U){let Y=a.get(P);S!==void 0&&me(Y.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&we(P)}function nt(P){let S=P.texture,U=a.get(P),Y=a.get(S);P.addEventListener("dispose",g);let H=P.textures,ge=P.isWebGLCubeRenderTarget===!0,ve=H.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,o.memory.textures++),ge){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let de=0;de<S.mipmaps.length;de++)U.__webglFramebuffer[ce][de]=n.createFramebuffer()}else U.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)U.__webglFramebuffer[ce]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ce=0,de=H.length;ce<de;ce++){let Se=a.get(H[ce]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&L(P)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<H.length;ce++){let de=H[ce];U.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);let Se=r.convert(de.format,de.colorSpace),ze=r.convert(de.type),Te=v(de.internalFormat,Se,ze,de.normalized,de.colorSpace,P.isXRRenderTarget===!0),Me=fe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Te,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),_e(n.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)me(U.__webglFramebuffer[ce][de],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else me(U.__webglFramebuffer[ce],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);h(S)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,de=H.length;ce<de;ce++){let Se=H[ce],ze=a.get(Se),Te=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,ze.__webglTexture),_e(Te,Se),me(U.__webglFramebuffer,P,Se,n.COLOR_ATTACHMENT0+ce,Te,0),h(Se)&&b(Te)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),_e(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)me(U.__webglFramebuffer[de],P,S,n.COLOR_ATTACHMENT0,ce,de);else me(U.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,ce,0);h(S)&&b(ce),t.unbindTexture()}P.depthBuffer&&we(P)}function ke(P){let S=P.textures;for(let U=0,Y=S.length;U<Y;U++){let H=S[U];if(h(H)){let ge=E(P),ve=a.get(H).__webglTexture;t.bindTexture(ge,ve),b(ge),t.unbindTexture()}}}let be=[],te=[];function ae(P){if(P.samples>0){if(L(P)===!1){let S=P.textures,U=P.width,Y=P.height,H=n.COLOR_BUFFER_BIT,ge=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=a.get(P),ce=S.length>1;if(ce)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let de=P.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Se]);let ze=a.get(S[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,U,Y,0,0,U,Y,H,n.NEAREST),c===!0&&(be.length=0,te.length=0,be.push(n.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(be.push(ge),te.push(ge),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Se]);let ze=a.get(S[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function fe(P){return Math.min(i.maxSamples,P.samples)}function L(P){let S=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function R(P){let S=o.render.frame;d.get(P)!==S&&(d.set(P,S),P.update())}function ne(P,S){let U=P.colorSpace,Y=P.format,H=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||U!==Yr&&U!==za&&(yt.getTransfer(U)===Ct?(Y!==Kn||H!==Rn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",U)),S}function oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.getTextureUnits=C,this.setTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=ie,this.rebindTextures=Je,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sy(n,e){function t(a,i=za){let r,o=yt.getTransfer(i);if(a===Rn)return n.UNSIGNED_BYTE;if(a===Ml)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Al)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Kd)return n.UNSIGNED_INT_5_9_9_9_REV;if(a===Qd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(a===Jd)return n.BYTE;if(a===Zd)return n.SHORT;if(a===pr)return n.UNSIGNED_SHORT;if(a===El)return n.INT;if(a===ua)return n.UNSIGNED_INT;if(a===Zn)return n.FLOAT;if(a===pa)return n.HALF_FLOAT;if(a===eu)return n.ALPHA;if(a===tu)return n.RGB;if(a===Kn)return n.RGBA;if(a===va)return n.DEPTH_COMPONENT;if(a===oi)return n.DEPTH_STENCIL;if(a===Tl)return n.RED;if(a===wl)return n.RED_INTEGER;if(a===si)return n.RG;if(a===Cl)return n.RG_INTEGER;if(a===Rl)return n.RGBA_INTEGER;if(a===Ao||a===To||a===wo||a===Co)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Pl||a===Il||a===Dl||a===Ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Fl||a===Nl||a===Bl||a===Ul||a===zl||a===Ro||a===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Fl||a===Nl)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===Bl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(a===Ul)return r.COMPRESSED_R11_EAC;if(a===zl)return r.COMPRESSED_SIGNED_R11_EAC;if(a===Ro)return r.COMPRESSED_RG11_EAC;if(a===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Gl||a===Hl||a===kl||a===Vl||a===jl||a===ql||a===$l||a===Wl||a===Xl||a===Yl||a===Jl||a===Zl||a===Kl||a===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(a===Gl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Hl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===kl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Vl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===jl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ql)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===$l)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Wl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Xl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Yl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Jl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Zl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Kl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ql)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ec||a===tc||a===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(a===ec)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ac||a===ic||a===Po||a===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(a===ac)return r.COMPRESSED_RED_RGTC1_EXT;if(a===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hr?n.UNSIGNED_INT_24_8:n[a]!==void 0?n[a]:null}return{convert:t}}var Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`,Su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let a=new oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,a=new zn({vertexShader:Ey,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Sa(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends ya{constructor(e,t){super();let a=this,i=null,r=1,o=null,s="local-floor",c=1,l=null,d=null,p=null,u=null,f=null,x=null,y=typeof XRWebGLBinding<"u",m=new Su,h={},b=t.getContextAttributes(),E=null,v=null,M=[],A=[],w=new Xe,g=null,_=null,T=new an;T.viewport=new Ot;let D=new an;D.viewport=new Ot;let N=[T,D],k=new bl,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=M[z];return $===void 0&&($=new nr,M[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=M[z];return $===void 0&&($=new nr,M[z]=$),$.getGripSpace()},this.getHand=function(z){let $=M[z];return $===void 0&&($=new nr,M[z]=$),$.getHandSpace()};function V(z){let $=A.indexOf(z.inputSource);if($===-1)return;let pe=M[$];pe!==void 0&&(pe.update(z.inputSource,z.frame,l||o),pe.dispatchEvent({type:z.type,data:z.inputSource}))}function O(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",j);for(let z=0;z<M.length;z++){let $=A[z];$!==null&&(A[z]=null,M[z].disconnect($))}C=null,F=null,m.reset();for(let z in h)delete h[z];if(e.setRenderTarget(E),f=null,u=null,p=null,i=null,v=null,J.stop(),a.isPresenting=!1,e.setPixelRatio(g),e.setSize(w.width,w.height,!1),_!==null){let z=_.camera;z.fov=_.fov,z.zoom=_.zoom,z.updateProjectionMatrix(),_=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,a.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,a.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",O),i.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ye=null,me=null;b.depth&&(me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?oi:va,ye=b.stencil?hr:ua);let Ce={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Ce),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new An(u.textureWidth,u.textureHeight,{format:Kn,type:Rn,depthTexture:new Qa(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new An(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(s),J.setContext(i),J.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(z){for(let $=0;$<z.removed.length;$++){let pe=z.removed[$],ye=A.indexOf(pe);ye>=0&&(A[ye]=null,M[ye].disconnect(pe))}for(let $=0;$<z.added.length;$++){let pe=z.added[$],ye=A.indexOf(pe);if(ye===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=A.length){A.push(pe),ye=Ce;break}else if(A[Ce]===null){A[Ce]=pe,ye=Ce;break}if(ye===-1)break}let me=M[ye];me&&me.connect(pe)}}let G=new B,Z=new B;function ie(z,$,pe){G.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);let ye=G.distanceTo(Z),me=$.projectionMatrix.elements,Ce=pe.projectionMatrix.elements,Ue=me[14]/(me[10]-1),we=me[14]/(me[10]+1),Je=(me[9]+1)/me[5],nt=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],be=(Ce[8]+1)/Ce[0],te=Ue*ke,ae=Ue*be,fe=ye/(-ke+be),L=fe*-ke;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(L),z.translateZ(fe),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),me[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let R=Ue+fe,ne=we+fe,oe=te-L,P=ae+(ye-L),S=Je*we/ne*R,U=nt*we/ne*R;z.projectionMatrix.makePerspective(oe,P,S,U,R,ne),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function xe(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let $=z.near,pe=z.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),k.near=D.near=T.near=$,k.far=D.far=T.far=pe,(C!==k.near||F!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),C=k.near,F=k.far),k.layers.mask=z.layers.mask|6,T.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let ye=z.parent,me=k.cameras;xe(k,ye);for(let Ce=0;Ce<me.length;Ce++)xe(me[Ce],ye);me.length===2?ie(k,T,D):k.projectionMatrix.copy(T.projectionMatrix),_===null&&z.isPerspectiveCamera&&(_={camera:z,fov:z.fov,zoom:z.zoom}),Ee(z,k,ye)};function Ee(z,$,pe){pe===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(pe.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ks*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(z){c=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(z){return h[z]};let Be=null;function _e(z,$){if(d=$.getViewerPose(l||o),x=$,d!==null){let pe=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ye=!1;pe.length!==k.cameras.length&&(k.cameras.length=0,ye=!0);for(let we=0;we<pe.length;we++){let Je=pe[we],nt=null;if(f!==null)nt=f.getViewport(Je);else{let be=p.getViewSubImage(u,Je);nt=be.viewport,we===0&&(e.setRenderTargetTextures(v,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(v))}let ke=N[we];ke===void 0&&(ke=new an,ke.layers.enable(we),ke.viewport=new Ot,N[we]=ke),ke.matrix.fromArray(Je.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Je.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(nt.x,nt.y,nt.width,nt.height),we===0&&(k.matrix.copy(ke.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ye===!0&&k.cameras.push(ke)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){p=a.getBinding();let we=p.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&m.init(we,i.renderState)}if(me&&me.includes("camera-access")&&y){e.state.unbindTexture(),p=a.getBinding();for(let we=0;we<pe.length;we++){let Je=pe[we].camera;if(Je){let nt=h[Je];nt||(nt=new oo,h[Je]=nt);let ke=p.getCameraImage(Je);nt.sourceTexture=ke}}}}for(let pe=0;pe<M.length;pe++){let ye=A[pe],me=M[pe];ye!==null&&me!==void 0&&me.update(ye,$,l||o)}Be&&Be(z,$),$.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:$}),x=null}let J=new bf;J.setAnimationLoop(_e),this.setAnimationLoop=function(z){Be=z},this.dispose=function(){}}},Ay=new xt,Mf=new st;Mf.set(-1,0,0,0,1,0,0,0,1);function Ty(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function a(m,h){h.color.getRGB(m.fogColor.value,ru(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,b,E,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),p(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),u(m,h),h.isMeshPhysicalMaterial&&f(m,h,v)):h.isMeshMatcapMaterial?(r(m,h),x(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),y(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?c(m,h,b,E):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===on&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===on&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=e.get(h),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mf),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===on&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){let b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:i}}function wy(n,e,t,a){let i={},r={},o=[],s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let A=M.program;a.uniformBlockBinding(v,A)}function l(v,M){let A=i[v.id];A===void 0&&(m(v),A=d(v),i[v.id]=A,v.addEventListener("dispose",b));let w=M.program;a.updateUBOMapping(v,w);let g=e.render.frame;r[v.id]!==g&&(u(v),r[v.id]=g)}function d(v){let M=p();v.__bindingPointIndex=M;let A=n.createBuffer(),w=v.__size,g=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,w,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,A),A}function p(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=i[v.id],A=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let g=0,_=A.length;g<_;g++){let T=A[g];if(Array.isArray(T))for(let D=0,N=T.length;D<N;D++)f(T[D],g,D,w);else f(T,g,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,M,A,w){if(y(v,M,A,w)===!0){let g=v.__offset,_=v.value;if(Array.isArray(_)){let T=0;for(let D=0;D<_.length;D++){let N=_[D],k=h(N);x(N,v.__data,T),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(T+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(_,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,v.__data)}}function x(v,M,A){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,A)}function y(v,M,A,w){let g=v.value,_=M+"_"+A;if(w[_]===void 0)return typeof g=="number"||typeof g=="boolean"?w[_]=g:ArrayBuffer.isView(g)?w[_]=g.slice():w[_]=g.clone(),!0;{let T=w[_];if(typeof g=="number"||typeof g=="boolean"){if(T!==g)return w[_]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(T.equals(g)===!1)return T.copy(g),!0}}return!1}function m(v){let M=v.uniforms,A=0,w=16;for(let _=0,T=M.length;_<T;_++){let D=Array.isArray(M[_])?M[_]:[M[_]];for(let N=0,k=D.length;N<k;N++){let C=D[N],F=Array.isArray(C.value)?C.value:[C.value];for(let V=0,O=F.length;V<O;V++){let j=F[V],G=h(j),Z=A%w,ie=Z%G.boundary,xe=Z+ie;A+=ie,xe!==0&&w-xe<G.storage&&(A+=w-xe),C.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,A+=G.storage}}}let g=A%w;return g>0&&(A+=w-g),v.__size=A,v.__cache={},this}function h(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",v),M}function b(v){let M=v.target;M.removeEventListener("dispose",b);let A=o.indexOf(M.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function E(){for(let v in i)n.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:E}}var Cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ma=null;function Ry(){return Ma===null&&(Ma=new io(Cy,16,16,si,pa),Ma.name="DFG_LUT",Ma.minFilter=rn,Ma.magFilter=rn,Ma.wrapS=ba,Ma.wrapT=ba,Ma.generateMipmaps=!1,Ma.needsUpdate=!0),Ma}var uc=class{constructor(e={}){let{canvas:t=kh(),context:a=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=o;let y=f,m=new Set([Rl,Cl,wl]),h=new Set([Rn,ua,pr,hr,Ml,Al]),b=new Uint32Array(4),E=new Int32Array(4),v=new B,M=null,A=null,w=[],g=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,D=!1,N=null,k=null,C=null,F=null;this._outputColorSpace=Ht;let V=0,O=0,j=null,G=-1,Z=null,ie=new Ot,xe=new Ot,Ee=null,Be=new Oe(0),_e=0,J=t.width,z=t.height,$=1,pe=null,ye=null,me=new Ot(0,0,J,z),Ce=new Ot(0,0,J,z),Ue=!1,we=new ir,Je=!1,nt=!1,ke=new xt,be=new B,te=new Ot,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function L(){return j===null?$:1}let R=a;function ne(I,W){return t.getContext(I,W)}let oe,P,S,U,Y,H,ge,ve,ce,de,Se,ze,Te,Me,Ve,Ke,lt,X,Re,q,le,he,ue;try{let I={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",zt,!1),R===null){let W="webgl2";if(R=ne(W,I),R===null)throw ne(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(I){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",zt,!1),it("WebGLRenderer: "+I.message),I}function Ae(){oe=new Bb(R),oe.init(),le=new Sy(R,oe),P=new Tb(R,oe,e,le),S=new yy(R,oe),P.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),k=R.createFramebuffer(),C=R.createFramebuffer(),F=R.createFramebuffer(),U=new Ob(R),Y=new oy,H=new _y(R,oe,S,Y,P,le,U),ge=new Nb(T),ve=new Hg(R),he=new Mb(R,ve),ce=new Ub(R,ve,U,he),de=new Hb(R,ce,ve,he,U),X=new Gb(R,P,H),Ve=new wb(Y),Se=new ry(T,ge,oe,P,he,Ve),ze=new Ty(T,Y),Te=new ly,Me=new fy(oe),lt=new Eb(T,ge,S,de,x,c),Ke=new vy(T,de,P),ue=new wy(R,U,P,S),Re=new Ab(R,oe,U),q=new zb(R,oe,U),U.programs=Se.programs,T.capabilities=P,T.extensions=oe,T.properties=Y,T.renderLists=Te,T.shadowMap=Ke,T.state=S,T.info=U}y!==Rn&&(_=new Vb(y,t.width,t.height,s,i,r));let Ie=new Eu(T,R);this.xr=Ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let I=oe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=oe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(J,z,!1))},this.getSize=function(I){return I.set(J,z)},this.setSize=function(I,W,re=!0){if(Ie.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}J=I,z=W,t.width=Math.floor(I*$),t.height=Math.floor(W*$),re===!0&&(t.style.width=I+"px",t.style.height=W+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(J*$,z*$).floor()},this.setDrawingBufferSize=function(I,W,re){J=I,z=W,$=re,t.width=Math.floor(I*re),t.height=Math.floor(W*re),this.setViewport(0,0,I,W)},this.setEffects=function(I){if(y===Rn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let W=0;W<I.length;W++)if(I[W].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(ie)},this.getViewport=function(I){return I.copy(me)},this.setViewport=function(I,W,re,Q){I.isVector4?me.set(I.x,I.y,I.z,I.w):me.set(I,W,re,Q),S.viewport(ie.copy(me).multiplyScalar($).round())},this.getScissor=function(I){return I.copy(Ce)},this.setScissor=function(I,W,re,Q){I.isVector4?Ce.set(I.x,I.y,I.z,I.w):Ce.set(I,W,re,Q),S.scissor(xe.copy(Ce).multiplyScalar($).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(I){S.setScissorTest(Ue=I)},this.setOpaqueSort=function(I){pe=I},this.setTransparentSort=function(I){ye=I},this.getClearColor=function(I){return I.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(I=!0,W=!0,re=!0){let Q=0;if(I){let ee=!1;if(j!==null){let Ne=j.texture.format;ee=m.has(Ne)}if(ee){let Ne=j.texture.type,He=h.has(Ne),Le=lt.getClearColor(),$e=lt.getClearAlpha(),Ye=Le.r,ut=Le.g,mt=Le.b;He?(b[0]=Ye,b[1]=ut,b[2]=mt,b[3]=$e,R.clearBufferuiv(R.COLOR,0,b)):(E[0]=Ye,E[1]=ut,E[2]=mt,E[3]=$e,R.clearBufferiv(R.COLOR,0,E))}else Q|=R.COLOR_BUFFER_BIT}W&&(Q|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(Q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&R.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),N=I},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",zt,!1),lt.dispose(),Te.dispose(),Me.dispose(),Y.dispose(),ge.dispose(),de.dispose(),he.dispose(),ue.dispose(),Se.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",fi),Ie.removeEventListener("sessionend",mi),ma.stop()};function dt(I){I.preventDefault(),au("WebGLRenderer: Context Lost."),D=!0}function ct(){au("WebGLRenderer: Context Restored."),D=!1;let I=U.autoReset,W=Ke.enabled,re=Ke.autoUpdate,Q=Ke.needsUpdate,ee=Ke.type;Ae(),U.autoReset=I,Ke.enabled=W,Ke.autoUpdate=re,Ke.needsUpdate=Q,Ke.type=ee}function zt(I){it("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Zt(I){let W=I.target;W.removeEventListener("dispose",Zt),kt(W)}function kt(I){fa(I),Y.remove(I)}function fa(I){let W=Y.get(I).programs;W!==void 0&&(W.forEach(function(re){Se.releaseProgram(re)}),I.isShaderMaterial&&Se.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,re,Q,ee,Ne){W===null&&(W=ae);let He=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Le=B0(I,W,re,Q,ee);S.setMaterial(Q,He);let $e=re.index,Ye=1;if(Q.wireframe===!0){if($e=ce.getWireframeAttribute(re),$e===void 0)return;Ye=2}let ut=re.drawRange,mt=re.attributes.position,We=ut.start*Ye,wt=(ut.start+ut.count)*Ye;Ne!==null&&(We=Math.max(We,Ne.start*Ye),wt=Math.min(wt,(Ne.start+Ne.count)*Ye)),$e!==null?(We=Math.max(We,0),wt=Math.min(wt,$e.count)):mt!=null&&(We=Math.max(We,0),wt=Math.min(wt,mt.count));let Yt=wt-We;if(Yt<0||Yt===1/0)return;he.setup(ee,Q,Le,re,$e);let Nt,Dt=Re;if($e!==null&&(Nt=ve.get($e),Dt=q,Dt.setIndex(Nt)),ee.isMesh)Q.wireframe===!0?(S.setLineWidth(Q.wireframeLinewidth*L()),Dt.setMode(R.LINES)):Dt.setMode(R.TRIANGLES);else if(ee.isLine){let un=Q.linewidth;un===void 0&&(un=1),S.setLineWidth(un*L()),ee.isLineSegments?Dt.setMode(R.LINES):ee.isLineLoop?Dt.setMode(R.LINE_LOOP):Dt.setMode(R.LINE_STRIP)}else ee.isPoints?Dt.setMode(R.POINTS):ee.isSprite&&Dt.setMode(R.TRIANGLES);if(ee.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let un=ee._multiDrawStarts,Ge=ee._multiDrawCounts,vn=ee._multiDrawCount,Mt=$e?ve.get($e).bytesPerElement:1,$n=Y.get(Q).currentProgram.getUniforms();for(let ga=0;ga<vn;ga++)$n.setValue(R,"_gl_DrawID",ga),Dt.render(un[ga]/Mt,Ge[ga])}else if(ee.isInstancedMesh)Dt.renderInstances(We,Yt,ee.count);else if(re.isInstancedBufferGeometry){let un=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ge=Math.min(re.instanceCount,un);Dt.renderInstances(We,Yt,Ge)}else Dt.render(We,Yt)};function It(I,W,re,Q){N!==null&&I.isNodeMaterial&&N.setObject(Q,I),Je===!0&&Ve.setState(I,re,!1),I.transparent===!0&&I.side===Gn&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,ls(I,W,Q),I.side=ai,I.needsUpdate=!0,ls(I,W,Q),I.side=Gn):ls(I,W,Q)}this.compile=function(I,W,re=null){re===null&&(re=I),N!==null&&N.renderStart(I,W,re),A=Me.get(re),A.init(W),g.push(A),re.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),I!==re&&I.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),A.setupLights(),N!==null&&N.updateLights(A.state.lightsArray),nt=this.localClippingEnabled,Je=Ve.init(this.clippingPlanes,nt),Je===!0&&Ve.setGlobalState(this.clippingPlanes,W),N!==null&&Ke.render(A.state.shadowsArray,re,W);let Q=new Set;return I.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){let Le=Ne[He];It(Le,re,W,ee),Q.add(Le)}else It(Ne,re,W,ee),Q.add(Ne)}),A=g.pop(),N!==null&&N.renderEnd(),Q},this.compileAsync=function(I,W,re=null){let Q=this.compile(I,W,re);return new Promise(ee=>{function Ne(){if(Q.forEach(function(He){let $e=Y.get(He).currentProgram;($e===void 0||$e.isReady())&&Q.delete(He)}),Q.size===0){ee(I);return}setTimeout(Ne,10)}oe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Kt=null;function Ln(I){Kt&&Kt(I)}function fi(){ma.stop()}function mi(){ma.start()}let ma=new bf;ma.setAnimationLoop(Ln),typeof self<"u"&&ma.setContext(self),this.setAnimationLoop=function(I){Kt=I,Ie.setAnimationLoop(I),I===null?ma.stop():ma.start()},Ie.addEventListener("sessionstart",fi),Ie.addEventListener("sessionend",mi),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(I,W);let re=Ie.enabled===!0&&Ie.isPresenting===!0,Q=_!==null&&(j===null||re)&&_.begin(T,j);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(W),W=Ie.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,W,j),A=Me.get(I,g.length),A.init(W),A.state.textureUnits=H.getTextureUnits(),g.push(A),ke.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),we.setFromProjectionMatrix(ke,sa,W.reversedDepth),nt=this.localClippingEnabled,Je=Ve.init(this.clippingPlanes,nt),M=Te.get(I,w.length),M.init(),w.push(M),Ie.enabled===!0&&Ie.isPresenting===!0){let He=T.xr.getDepthSensingMesh();He!==null&&td(He,W,-1/0,T.sortObjects)}td(I,W,0,T.sortObjects),M.finish(),N!==null&&N.updateLights(A.state.lightsArray),T.sortObjects===!0&&M.sort(pe,ye),fe=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,fe&&lt.addToRenderList(M,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ve.beginShadows();let ee=A.state.shadowsArray;if(Ke.render(ee,I,W),Je===!0&&Ve.endShadows(),(Q&&_.hasRenderPass())===!1){let He=M.opaque,Le=M.transmissive;if(A.setupLights(),W.isArrayCamera){let $e=W.cameras;if(Le.length>0)for(let Ye=0,ut=$e.length;Ye<ut;Ye++){let mt=$e[Ye];Tp(He,Le,I,mt)}fe&&lt.render(I);for(let Ye=0,ut=$e.length;Ye<ut;Ye++){let mt=$e[Ye];Ap(M,I,mt,mt.viewport)}}else Le.length>0&&Tp(He,Le,I,W),fe&&lt.render(I),Ap(M,I,W)}j!==null&&O===0&&(H.updateMultisampleRenderTarget(j),H.updateRenderTargetMipmap(j)),Q&&_.end(T),I.isScene===!0&&I.onAfterRender(T,I,W),he.resetDefaultState(),G=-1,Z=null,g.pop(),g.length>0?(A=g[g.length-1],H.setTextureUnits(A.state.textureUnits),Je===!0&&Ve.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,N!==null&&N.renderEnd()};function td(I,W,re,Q){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)re=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLightProbeGrid)A.pushLightProbeGrid(I);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(we)){Q&&te.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ke);let He=de.update(I),Le=I.material;Le.visible&&M.push(I,He,Le,re,te.z,null,W)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(we))){let He=de.update(I),Le=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),te.copy(I.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),te.copy(He.boundingSphere.center)),te.applyMatrix4(I.matrixWorld).applyMatrix4(ke)),Array.isArray(Le)){let $e=He.groups;for(let Ye=0,ut=$e.length;Ye<ut;Ye++){let mt=$e[Ye],We=Le[mt.materialIndex];We&&We.visible&&M.push(I,He,We,re,te.z,mt,W)}}else Le.visible&&M.push(I,He,Le,re,te.z,null,W)}}let Ne=I.children;for(let He=0,Le=Ne.length;He<Le;He++)td(Ne[He],W,re,Q)}function Ap(I,W,re,Q){let{opaque:ee,transmissive:Ne,transparent:He}=I;A.setupLightsView(re),Je===!0&&Ve.setGlobalState(T.clippingPlanes,re),Q&&S.viewport(ie.copy(Q)),ee.length>0&&ss(ee,W,re),Ne.length>0&&ss(Ne,W,re),He.length>0&&ss(He,W,re),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Tp(I,W,re,Q){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Q.id]===void 0){let We=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Q.id]=new An(1,1,{generateMipmaps:!0,type:We?pa:Rn,minFilter:ri,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Ne=A.state.transmissionRenderTarget[Q.id],He=Q.viewport||ie;Ne.setSize(He.z*T.transmissionResolutionScale,He.w*T.transmissionResolutionScale);let Le=T.getRenderTarget(),$e=T.getActiveCubeFace(),Ye=T.getActiveMipmapLevel();T.setRenderTarget(Ne),T.getClearColor(Be),_e=T.getClearAlpha(),_e<1&&T.setClearColor(16777215,.5),T.clear(),fe&&lt.render(re);let ut=T.toneMapping;T.toneMapping=da;let mt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),A.setupLightsView(Q),Je===!0&&Ve.setGlobalState(T.clippingPlanes,Q),ss(I,re,Q),H.updateMultisampleRenderTarget(Ne),H.updateRenderTargetMipmap(Ne),oe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let wt=0,Yt=W.length;wt<Yt;wt++){let Nt=W[wt],{object:Dt,geometry:un,material:Ge,group:vn}=Nt;if(Ge.side===Gn&&Dt.layers.test(Q.layers)){let Mt=Ge.side;Ge.side=on,Ge.needsUpdate=!0,wp(Dt,re,Q,un,Ge,vn),Ge.side=Mt,Ge.needsUpdate=!0,We=!0}}We===!0&&(H.updateMultisampleRenderTarget(Ne),H.updateRenderTargetMipmap(Ne))}T.setRenderTarget(Le,$e,Ye),T.setClearColor(Be,_e),mt!==void 0&&(Q.viewport=mt),T.toneMapping=ut}function ss(I,W,re){let Q=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,Ne=I.length;ee<Ne;ee++){let He=I[ee],{object:Le,geometry:$e,group:Ye}=He,ut=He.material;ut.allowOverride===!0&&Q!==null&&(ut=Q),Le.layers.test(re.layers)&&wp(Le,W,re,$e,ut,Ye)}}function wp(I,W,re,Q,ee,Ne){N!==null&&ee.isNodeMaterial&&N.setObject(I,ee),I.onBeforeRender(T,W,re,Q,ee,Ne),I.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ee.onBeforeRender(T,W,re,Q,I,Ne),ee.transparent===!0&&ee.side===Gn&&ee.forceSinglePass===!1?(ee.side=on,ee.needsUpdate=!0,T.renderBufferDirect(re,W,Q,ee,I,Ne),ee.side=ai,ee.needsUpdate=!0,T.renderBufferDirect(re,W,Q,ee,I,Ne),ee.side=Gn):T.renderBufferDirect(re,W,Q,ee,I,Ne),I.onAfterRender(T,W,re,Q,ee,Ne)}function ls(I,W,re){W.isScene!==!0&&(W=ae);let Q=Y.get(I),ee=A.state.lights,Ne=A.state.shadowsArray,He=ee.state.version,Le=Se.getParameters(I,ee.state,Ne,W,re,A.state.lightProbeGridArray),$e=Se.getProgramCacheKey(Le),Ye=Q.programs;Q.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?W.environment:null,Q.fog=W.fog;let ut=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;Q.envMap=ge.get(I.envMap||Q.environment,ut),Q.envMapRotation=Q.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,Ye===void 0&&(I.addEventListener("dispose",Zt),Ye=new Map,Q.programs=Ye);let mt=Ye.get($e);if(mt!==void 0){if(Q.currentProgram===mt&&Q.lightsStateVersion===He)return Rp(I,Le),mt}else Le.uniforms=Se.getUniforms(I),N!==null&&I.isNodeMaterial&&N.build(I,re,Le),I.onBeforeCompile(Le,T),mt=Se.acquireProgram(Le,$e),Ye.set($e,mt),Q.uniforms=Le.uniforms;let We=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(We.clippingPlanes=Ve.uniform),Rp(I,Le),Q.needsLights=z0(I),Q.lightsStateVersion=He,Q.needsLights&&(We.ambientLightColor.value=ee.state.ambient,We.lightProbe.value=ee.state.probe,We.sunLights.value=ee.state.sun,We.sunLightShadows.value=ee.state.sunShadow,We.directionalLights.value=ee.state.directional,We.directionalLightShadows.value=ee.state.directionalShadow,We.spotLights.value=ee.state.spot,We.spotLightShadows.value=ee.state.spotShadow,We.rectAreaLights.value=ee.state.rectArea,We.ltc_1.value=ee.state.rectAreaLTC1,We.ltc_2.value=ee.state.rectAreaLTC2,We.pointLights.value=ee.state.point,We.pointLightShadows.value=ee.state.pointShadow,We.hemisphereLights.value=ee.state.hemi,We.sunShadowMatrix.value=ee.state.sunShadowMatrix,We.sunShadowCascade.value=ee.state.sunShadowCascade,We.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,We.spotLightMatrix.value=ee.state.spotLightMatrix,We.spotLightMap.value=ee.state.spotLightMap,We.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=A.state.lightProbeGridArray.length>0,Q.currentProgram=mt,Q.uniformsList=null,mt}function Cp(I){if(I.uniformsList===null){let W=I.currentProgram.getUniforms();I.uniformsList=gr.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function Rp(I,W){let re=Y.get(I);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function N0(I,W){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;v.setFromMatrixPosition(W.matrixWorld);for(let re=0,Q=I.length;re<Q;re++){let ee=I[re];if(ee.texture!==null&&ee.boundingBox.containsPoint(v))return ee}return null}function B0(I,W,re,Q,ee){W.isScene!==!0&&(W=ae),H.resetTextureUnits();let Ne=W.fog,He=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?W.environment:null,Le=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:yt.workingColorSpace,$e=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ye=ge.get(Q.envMap||He,$e),ut=Q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,mt=!!re.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),We=!!re.morphAttributes.position,wt=!!re.morphAttributes.normal,Yt=!!re.morphAttributes.color,Nt=da;Q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Nt=T.toneMapping);let Dt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,un=Dt!==void 0?Dt.length:0,Ge=Y.get(Q),vn=A.state.lights;if(Je===!0&&(nt===!0||I!==Z)){let Lt=I===Z&&Q.id===G;Ve.setState(Q,I,Lt)}let Mt=!1;Q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==vn.state.version||Ge.outputColorSpace!==Le||ee.isBatchedMesh&&Ge.batching===!1||!ee.isBatchedMesh&&Ge.batching===!0||ee.isBatchedMesh&&Ge.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Ge.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Ge.instancing===!1||!ee.isInstancedMesh&&Ge.instancing===!0||ee.isSkinnedMesh&&Ge.skinning===!1||!ee.isSkinnedMesh&&Ge.skinning===!0||ee.isInstancedMesh&&Ge.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ge.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ge.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ge.instancingMorph===!1&&ee.morphTexture!==null||Ge.envMap!==Ye||Q.fog===!0&&Ge.fog!==Ne||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ve.numPlanes||Ge.numIntersection!==Ve.numIntersection)||Ge.vertexAlphas!==ut||Ge.vertexTangents!==mt||Ge.morphTargets!==We||Ge.morphNormals!==wt||Ge.morphColors!==Yt||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==un||!!Ge.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ge.__version=Q.version);let $n=Ge.currentProgram;Mt===!0&&($n=ls(Q,W,ee),N&&Q.isNodeMaterial&&N.onUpdateProgram(Q,$n,Ge));let ga=!1,Va=!1,Ni=!1,Pt=$n.getUniforms(),Wt=Ge.uniforms;if(S.useProgram($n.program)&&(ga=!0,Va=!0,Ni=!0),Q.id!==G&&(G=Q.id,Va=!0),Ge.needsLights){let Lt=N0(A.state.lightProbeGridArray,ee);Ge.lightProbeGrid!==Lt&&(Ge.lightProbeGrid=Lt,Va=!0)}if(ga||Z!==I){S.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Pt.setValue(R,"projectionMatrix",I.projectionMatrix),Pt.setValue(R,"viewMatrix",I.matrixWorldInverse);let qa=Pt.map.cameraPosition;qa!==void 0&&qa.setValue(R,be.setFromMatrixPosition(I.matrixWorld)),P.logarithmicDepthBuffer&&Pt.setValue(R,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Pt.setValue(R,"isOrthographic",I.isOrthographicCamera===!0),Z!==I&&(Z=I,Va=!0,Ni=!0)}if(Ge.needsLights&&(vn.state.sunShadowMap.length>0&&Pt.setValue(R,"sunShadowMap",vn.state.sunShadowMap,H),vn.state.directionalShadowMap.length>0&&Pt.setValue(R,"directionalShadowMap",vn.state.directionalShadowMap,H),vn.state.spotShadowMap.length>0&&Pt.setValue(R,"spotShadowMap",vn.state.spotShadowMap,H),vn.state.pointShadowMap.length>0&&Pt.setValue(R,"pointShadowMap",vn.state.pointShadowMap,H)),ee.isSkinnedMesh){Pt.setOptional(R,ee,"bindMatrix"),Pt.setOptional(R,ee,"bindMatrixInverse");let Lt=ee.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Pt.setValue(R,"boneTexture",Lt.boneTexture,H))}ee.isBatchedMesh&&(Pt.setOptional(R,ee,"batchingTexture"),Pt.setValue(R,"batchingTexture",ee._matricesTexture,H),Pt.setOptional(R,ee,"batchingIdTexture"),Pt.setValue(R,"batchingIdTexture",ee._indirectTexture,H),Pt.setOptional(R,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Pt.setValue(R,"batchingColorTexture",ee._colorsTexture,H));let ja=re.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0)&&X.update(ee,re,$n),(Va||Ge.receiveShadow!==ee.receiveShadow)&&(Ge.receiveShadow=ee.receiveShadow,Pt.setValue(R,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&W.environment!==null&&(Wt.envMapIntensity.value=W.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Ry()),Va){if(Pt.setValue(R,"toneMappingExposure",T.toneMappingExposure),Ge.needsLights&&U0(Wt,Ni),Ne&&Q.fog===!0&&ze.refreshFogUniforms(Wt,Ne),ze.refreshMaterialUniforms(Wt,Q,$,z,A.state.transmissionRenderTarget[I.id]),Ge.needsLights&&Ge.lightProbeGrid){let Lt=Ge.lightProbeGrid;Wt.probesSH.value=Lt.texture,Wt.probesMin.value.copy(Lt.boundingBox.min),Wt.probesMax.value.copy(Lt.boundingBox.max),Wt.probesResolution.value.copy(Lt.resolution)}gr.upload(R,Cp(Ge),Wt,H)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(gr.upload(R,Cp(Ge),Wt,H),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Pt.setValue(R,"center",ee.center),Pt.setValue(R,"modelViewMatrix",ee.modelViewMatrix),Pt.setValue(R,"normalMatrix",ee.normalMatrix),Pt.setValue(R,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let Lt=Q.uniformsGroups;for(let qa=0,Bi=Lt.length;qa<Bi;qa++){let Ip=Lt[qa];ue.update(Ip,$n),ue.bind(Ip,$n)}}return $n}function U0(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.sunLights.needsUpdate=W,I.sunLightShadows.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function z0(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(I,W,re){let Q=Y.get(I);Q.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Y.get(I.texture).__webglTexture=W,Y.get(I.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:re,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,W){let re=Y.get(I);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,re=0){j=I,V=W,O=re;let Q=null,ee=!1,Ne=!1;if(I){let Le=Y.get(I);if(Le.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(R.FRAMEBUFFER,Le.__webglFramebuffer),ie.copy(I.viewport),xe.copy(I.scissor),Ee=I.scissorTest,S.viewport(ie),S.scissor(xe),S.setScissorTest(Ee),G=-1;return}else if(Le.__webglFramebuffer===void 0)H.setupRenderTarget(I);else if(Le.__hasExternalTextures)H.rebindTextures(I,Y.get(I.texture).__webglTexture,Y.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let ut=I.depthTexture;if(Le.__boundDepthTexture!==ut){if(ut!==null&&Y.has(ut)&&(I.width!==ut.image.width||I.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(I)}}let $e=I.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);let Ye=Y.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ye[W])?Q=Ye[W][re]:Q=Ye[W],ee=!0):I.samples>0&&H.useMultisampledRTT(I)===!1?Q=Y.get(I).__webglMultisampledFramebuffer:Array.isArray(Ye)?Q=Ye[re]:Q=Ye,ie.copy(I.viewport),xe.copy(I.scissor),Ee=I.scissorTest}else ie.copy(me).multiplyScalar($).floor(),xe.copy(Ce).multiplyScalar($).floor(),Ee=Ue;if(re!==0&&(Q=k),S.bindFramebuffer(R.FRAMEBUFFER,Q)&&S.drawBuffers(I,Q),S.viewport(ie),S.scissor(xe),S.setScissorTest(Ee),ee){let Le=Y.get(I.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,re)}else if(Ne){let Le=W;for(let $e=0;$e<I.textures.length;$e++){let Ye=Y.get(I.textures[$e]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+$e,Ye.__webglTexture,re,Le)}}else if(I!==null&&re!==0){let Le=Y.get(I.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Le.__webglTexture,re)}G=-1};function Pp(I){let W=Y.get(I);return(W.__readFormat!==I.format||W.__readType!==I.type)&&(W.__readFormat=I.format,W.__readType=I.type,W.__formatReadable=P.textureFormatReadable(I.format),W.__typeReadable=P.textureTypeReadable(I.type)),W}this.readRenderTargetPixels=function(I,W,re,Q,ee,Ne,He,Le=0){if(!(I&&I.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Y.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){S.bindFramebuffer(R.FRAMEBUFFER,$e);try{let Ye=I.textures[Le],ut=Ye.format,mt=Ye.type;I.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le);let We=Pp(Ye);if(We.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-Q&&re>=0&&re<=I.height-ee&&R.readPixels(W,re,Q,ee,le.convert(ut),le.convert(mt),Ne)}finally{let Ye=j!==null?Y.get(j).__webglFramebuffer:null;S.bindFramebuffer(R.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(I,W,re,Q,ee,Ne,He,Le=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=Y.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e)if(W>=0&&W<=I.width-Q&&re>=0&&re<=I.height-ee){S.bindFramebuffer(R.FRAMEBUFFER,$e);let Ye=I.textures[Le],ut=Ye.format,mt=Ye.type;I.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le);let We=Pp(Ye);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,wt),R.bufferData(R.PIXEL_PACK_BUFFER,Ne.byteLength,R.STREAM_READ),R.readPixels(W,re,Q,ee,le.convert(ut),le.convert(mt),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Yt=j!==null?Y.get(j).__webglFramebuffer:null;S.bindFramebuffer(R.FRAMEBUFFER,Yt);let Nt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await jh(R,Nt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,wt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ne),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(wt),R.deleteSync(Nt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,W=null,re=0){let Q=Math.pow(2,-re),ee=Math.floor(I.image.width*Q),Ne=Math.floor(I.image.height*Q),He=W!==null?W.x:0,Le=W!==null?W.y:0;H.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,re,0,0,He,Le,ee,Ne),S.unbindTexture()},this.copyTextureToTexture=function(I,W,re=null,Q=null,ee=0,Ne=0){let He,Le,$e,Ye,ut,mt,We,wt,Yt,Nt=I.isCompressedTexture?I.mipmaps[Ne]:I.image;if(re!==null)He=re.max.x-re.min.x,Le=re.max.y-re.min.y,$e=re.isBox3?re.max.z-re.min.z:1,Ye=re.min.x,ut=re.min.y,mt=re.isBox3?re.min.z:0;else{let Wt=Math.pow(2,-ee);He=Math.floor(Nt.width*Wt),Le=Math.floor(Nt.height*Wt),I.isDataArrayTexture?$e=Nt.depth:I.isData3DTexture?$e=Math.floor(Nt.depth*Wt):$e=1,Ye=0,ut=0,mt=0}Q!==null?(We=Q.x,wt=Q.y,Yt=Q.z):(We=0,wt=0,Yt=0);let Dt=le.convert(W.format),un=le.convert(W.type),Ge;W.isData3DTexture?(H.setTexture3D(W,0),Ge=R.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(H.setTexture2DArray(W,0),Ge=R.TEXTURE_2D_ARRAY):(H.setTexture2D(W,0),Ge=R.TEXTURE_2D),S.activeTexture(R.TEXTURE0),S.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,W.flipY),S.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),S.pixelStorei(R.UNPACK_ALIGNMENT,W.unpackAlignment);let vn=S.getParameter(R.UNPACK_ROW_LENGTH),Mt=S.getParameter(R.UNPACK_IMAGE_HEIGHT),$n=S.getParameter(R.UNPACK_SKIP_PIXELS),ga=S.getParameter(R.UNPACK_SKIP_ROWS),Va=S.getParameter(R.UNPACK_SKIP_IMAGES);S.pixelStorei(R.UNPACK_ROW_LENGTH,Nt.width),S.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Nt.height),S.pixelStorei(R.UNPACK_SKIP_PIXELS,Ye),S.pixelStorei(R.UNPACK_SKIP_ROWS,ut),S.pixelStorei(R.UNPACK_SKIP_IMAGES,mt);let Ni=I.isDataArrayTexture||I.isData3DTexture,Pt=W.isDataArrayTexture||W.isData3DTexture;if(I.isDepthTexture){let Wt=Y.get(I),ja=Y.get(W),Lt=Y.get(Wt.__renderTarget),qa=Y.get(ja.__renderTarget);S.bindFramebuffer(R.READ_FRAMEBUFFER,Lt.__webglFramebuffer),S.bindFramebuffer(R.DRAW_FRAMEBUFFER,qa.__webglFramebuffer);for(let Bi=0;Bi<$e;Bi++)Ni&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Y.get(I).__webglTexture,ee,mt+Bi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Y.get(W).__webglTexture,Ne,Yt+Bi)),R.blitFramebuffer(Ye,ut,He,Le,We,wt,He,Le,R.DEPTH_BUFFER_BIT,R.NEAREST);S.bindFramebuffer(R.READ_FRAMEBUFFER,null),S.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(ee!==0||I.isRenderTargetTexture||Y.has(I)){let Wt=Y.get(I),ja=Y.get(W);S.bindFramebuffer(R.READ_FRAMEBUFFER,C),S.bindFramebuffer(R.DRAW_FRAMEBUFFER,F);for(let Lt=0;Lt<$e;Lt++)Ni?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Wt.__webglTexture,ee,mt+Lt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Wt.__webglTexture,ee),Pt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ja.__webglTexture,Ne,Yt+Lt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ja.__webglTexture,Ne),ee!==0?R.blitFramebuffer(Ye,ut,He,Le,We,wt,He,Le,R.COLOR_BUFFER_BIT,R.NEAREST):Pt?R.copyTexSubImage3D(Ge,Ne,We,wt,Yt+Lt,Ye,ut,He,Le):R.copyTexSubImage2D(Ge,Ne,We,wt,Ye,ut,He,Le);S.bindFramebuffer(R.READ_FRAMEBUFFER,null),S.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Pt?I.isDataTexture||I.isData3DTexture?R.texSubImage3D(Ge,Ne,We,wt,Yt,He,Le,$e,Dt,un,Nt.data):W.isCompressedArrayTexture?R.compressedTexSubImage3D(Ge,Ne,We,wt,Yt,He,Le,$e,Dt,Nt.data):R.texSubImage3D(Ge,Ne,We,wt,Yt,He,Le,$e,Dt,un,Nt):I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ne,We,wt,He,Le,Dt,un,Nt.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ne,We,wt,Nt.width,Nt.height,Dt,Nt.data):R.texSubImage2D(R.TEXTURE_2D,Ne,We,wt,He,Le,Dt,un,Nt);S.pixelStorei(R.UNPACK_ROW_LENGTH,vn),S.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Mt),S.pixelStorei(R.UNPACK_SKIP_PIXELS,$n),S.pixelStorei(R.UNPACK_SKIP_ROWS,ga),S.pixelStorei(R.UNPACK_SKIP_IMAGES,Va),Ne===0&&W.generateMipmaps&&R.generateMipmap(Ge),S.unbindTexture()},this.initRenderTarget=function(I){Y.get(I).__webglFramebuffer===void 0&&H.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?H.setTextureCube(I,0):I.isData3DTexture?H.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?H.setTexture2DArray(I,0):H.setTexture2D(I,0),S.unbindTexture()},this.resetState=function(){V=0,O=0,j=null,S.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var fc=class extends _i{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Pe;e.deleteAttribute("uv");let t=new et({side:on}),a=new et,i=new bo(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Gt(e,a,6),s=new _t;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),o.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),o.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),o.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),o.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),o.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),o.setMatrixAt(5,s.matrix),this.add(o);let c=new Fe(e,vr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Fe(e,vr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let d=new Fe(e,vr(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let p=new Fe(e,vr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let u=new Fe(e,vr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Fe(e,vr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function vr(n){return new ho({color:0,emissive:16777215,emissiveIntensity:n})}var mc=n=>typeof matchMedia=="function"?matchMedia(n):{matches:!1,addEventListener(){}},yr=mc("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&mc("(hover: none)").matches,n2=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,a2=mc("(display-mode: standalone)").matches||mc("(display-mode: fullscreen)").matches||navigator.standalone===!0,Af=new URLSearchParams(location.search),Py={aces:"aces",agx:"agx",neutral:"neutral"},wi={variante:Af.get("visual")==="nuevo"?"nuevo":"base",get nuevo(){return this.variante==="nuevo"},tono:Py[Af.get("tono")]??null};function gc(){let n=window.devicePixelRatio||1,e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??8,a=yr&&(e<=3||t<=4);return yr?{movil:!0,bajo:a,pixelRatio:Math.min(n,a?1.15:1.5),minPixelRatio:.8,sombra:a?512:1024,antialias:n<2,lluvia:a?.35:.55,autosPorCarril:a?2:3}:{movil:!1,bajo:!1,pixelRatio:Math.min(n,1.75),minPixelRatio:1,sombra:2048,antialias:!0,lluvia:1,autosPorCarril:4}}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(n,e,t,a,i=0){let r=Math.max(0,Math.min(typeof i=="number"?i:i?.[0]??0,t/2,a/2));return this.moveTo(n+r,e),this.arcTo(n+t,e,n+t,e+a,r),this.arcTo(n+t,e+a,n,e+a,r),this.arcTo(n,e+a,n,e,r),this.arcTo(n,e,n+t,e,r),this.closePath(),this});var ot=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Mu={via:"Calle 50 Luisa, Sabana Norte, San Jos\xE9",atribucion:"\xA9 OpenStreetMap contributors (ODbL)",eje:[[12.75,-245.62],[7.04,-157.59],[-1.69,-41.67],[-2.78,6.89],[-3.6,24.31],[-5.75,55.28],[-7.13,78.66],[-8.96,128.18],[-9.45,141.34],[-10.83,178.46],[-12.75,245.62]],largo:492.1,cruces:[{d:88.2,p:[7.04,-157.59],vias:["service:sin nombre"]},{d:204.5,p:[-1.69,-41.67],vias:["residential:sin nombre","service:sin nombre"]},{d:253.1,p:[-2.78,6.89],vias:["service:sin nombre"]},{d:270.6,p:[-3.6,24.31],vias:["service:sin nombre"]},{d:301.6,p:[-5.75,55.28],vias:["residential:Avenida 9"]},{d:325,p:[-7.13,78.66],vias:["service:sin nombre"]},{d:374.6,p:[-8.96,128.18],vias:["service:sin nombre"]},{d:387.8,p:[-9.45,141.34],vias:["service:sin nombre"]},{d:424.9,p:[-10.83,178.46],vias:["service:sin nombre"]},{d:492.1,p:[-12.75,245.62],vias:["residential:Calle 50","secondary:Avenida de Las Am\xE9ricas"]}],postes:[{id:"P01",p:[-3.32,-88.06],lado:"oeste",material:"concreto",herrajes:["cruceta","aisladores","reservas de fibra en aro (3 o m\xE1s)"],d:158.4},{id:"P02",p:[6.04,-76.43],lado:"este",material:"concreto",herrajes:["cruceta","aisladores","luminaria"],d:169.2},{id:"P04",p:[4.93,-61.74],lado:"este",material:"met\xE1lico gris sobre pedestal de concreto",herrajes:["brazo diagonal","retenida con protector amarillo (28 s)"],d:184},{id:"P05",p:[-7.06,-30.25],lado:"oeste",material:"concreto",herrajes:["transformador","reservas de fibra en aro","caja de empalme (47 s)"],d:216},{id:"P06",p:[-8.36,16.97],lado:"oeste",material:"concreto",herrajes:["reservas de fibra en aro (5 o m\xE1s)","marcas de colores de operadores (~2 m)"],d:263.5},{id:"P07",p:[-10.42,48.85],lado:"oeste",material:"concreto",herrajes:["transformador","luminaria"],d:295.5},{id:"P08",p:[-13.03,100.22],lado:"oeste",material:"concreto",herrajes:["haz telecom grande"],d:346.8},{id:"P09",p:[-14.7,145.19],lado:"oeste",material:"concreto",herrajes:["luminaria"],d:391.8},{id:"P12",p:[-6.79,215.69],lado:"este",material:"concreto",herrajes:["luminaria"],d:462},{id:"P11",p:[-7.78,250.32],lado:"este",material:"concreto con franja amarilla y negra",herrajes:["reservas de fibra en aro"],d:496.7}],tendido:[{de:"P01",a:"P05"},{de:"P05",a:"P06"},{de:"P06",a:"P07"},{de:"P07",a:"P08"},{de:"P08",a:"P09"},{de:"P09",a:"P12",nota:"cruza la calle"},{de:"P12",a:"P11"}],arboles:[[-7.17,-25.14],[-7.31,-18.74],[-7.45,-12.33],[-7.59,-5.92],[-7.74,.49],[-7.88,6.75],[-8.19,13.14],[-8.48,19.52],[-8.82,25.8],[-9.26,32.2],[-9.71,38.6],[-10.15,45.01],[-10.6,51.41],[-11.01,57.87],[-11.39,64.27],[-11.77,70.68],[-12.14,77.08],[-12.41,83.3],[-12.63,89.34],[-12.86,95.38],[-13.08,101.42],[-13.31,107.46],[-13.53,113.5],[-13.74,119.54],[-13.97,125.57],[-14.22,132.29],[-14.48,139.46],[-14.74,146.63],[-15.02,153.83],[-15.28,161.01],[-15.55,168.2],[-15.82,175.39],[-16.05,182.45],[-16.24,189.34],[-16.44,196.24],[-16.64,203.14],[-16.84,210.04],[-17.03,216.93]],otros:[{que:"retenida (viento) con protector amarillo",p:[4.64,-57.9],lado:"este",d:187.8},{que:"gabinete verde con r\xF3tulos de peligro y bolardo amarillo",p:[3.49,-42.57],lado:"este",d:203.2},{que:"caja de empalme en el tendido P01-P05",p:[-6.97,-34.1],lado:"oeste",d:212.2},{que:"se\xF1al de zona escolar",p:[-7.77,1.76],lado:"oeste",d:248.1},{que:"parqu\xEDmetro solar",p:[-8.31,15.7],lado:"oeste",d:262.2},{que:"espacios de estacionamiento 5019 \u2192 5001, 5,7 m cada uno",p:[-8.6,22.07],lado:"oeste",d:268.6},{que:"se\xF1al de estacionamiento E",p:[-9.88,41.17],lado:"oeste",d:287.8},{que:"se\xF1al 25 KPH velocidad m\xE1xima",p:[-11.39,64.27],lado:"oeste",d:310.9},{que:"se\xF1al de zona escolar",p:[-12.68,90.55],lado:"oeste",d:337.1},{que:"se\xF1al de estacionamiento E",p:[-13.21,105.05],lado:"oeste",d:351.6},{que:"se\xF1al de ALTO en la esquina",p:[-17.58,236.24],lado:"oeste",d:482.9},{que:"verja gris sobre muro bajo, al fondo de la acera",p:[-7.17,-25.14],lado:"oeste",d:221.2},{que:"verja y portones azules, al fondo de la acera",p:[-8.67,23.35],lado:"oeste",d:269.9}],lugares:[{nombre:"MEP - Edificio Bloque A",d:0,a:24,lado:"este"},{nombre:"Avenida 17",d:0,a:60,lado:"este"},{nombre:"MEP - Parqueo Este",d:88.2,a:37,lado:"este"},{nombre:"Museo Hist\xF3rico y Tecnol\xF3gico Grupo ICE",d:88.2,a:42,lado:"oeste"},{nombre:"Suites Cristina",d:88.2,a:38,lado:"este"},{nombre:"MEP - Edificio Bloque B",d:88.2,a:52,lado:"este"},{nombre:"Palma Real Hotel y Casino",d:204.5,a:42,lado:"este"},{nombre:"Parque Palma Real",d:204.5,a:21,lado:"este"},{nombre:"Cond. Corobic\xED del Oeste",d:253.1,a:32,lado:"este"},{nombre:"MTA",d:253.1,a:32,lado:"este"},{nombre:"Cond. Menorca",d:270.6,a:26,lado:"este"},{nombre:"Consensus Abogados",d:325,a:20,lado:"este"},{nombre:"Restaurant Flor de Loto",d:325,a:29,lado:"este"},{nombre:"Aptos. Balot de Escaz\xFA",d:325,a:20,lado:"este"},{nombre:"Oficentro Las Torres",d:374.6,a:19,lado:"este"},{nombre:"Soka Gakkai Internacional de Costa Rica",d:424.9,a:18,lado:"este"},{nombre:"Soda Alberto",d:424.9,a:29,lado:"este"},{nombre:"Subway",d:492.1,a:26,lado:"este"},{nombre:"Agencia ICE",d:492.1,a:36,lado:"este"},{nombre:"ICE",d:492.1,a:21,lado:"oeste"},{nombre:"ICE Sabana",d:492.1,a:20,lado:"oeste"},{nombre:"Uno Sports",d:492.1,a:34,lado:"este"},{nombre:"KFC",d:492.1,a:41,lado:"este"},{nombre:"Avenida de Las Am\xE9ricas",d:492.1,a:13,lado:"oeste"}]};var Ci={x0:-3468.56,z0:-2412.63,paso:10,w:641,h:600,escala:60,lat0:9.94045,lon0:-84.102,kx:1827.481,kz:1842.333,origen:1134,fuente:"Terrain Tiles (Mapzen, AWS Open Data): SRTM, GMTED2010, ETOPO1 y otras fuentes abiertas"};var Tf="./datos-BGOTRZWN.bin";function wf(n){let e=[],t=0;for(let o=0;o<n.length-1;o++){let[s,c]=n[o],[l,d]=n[o+1],p=Math.hypot(l-s,d-c);e.push({x0:s,z0:c,tx:(l-s)/p,tz:(d-c)/p,l:p,d0:t}),t+=p}let a=o=>{let s=e[0];for(let c of e)if(c.d0<=o)s=c;else break;return s};function i(o,s=0,c={}){let l=a(o),d=o-l.d0;return c.x=l.x0+l.tx*d+l.tz*s,c.z=l.z0+l.tz*d-l.tx*s,c.tx=l.tx,c.tz=l.tz,c}function r(o,s,c={}){let l=1/0;for(let d=0;d<e.length;d++){let p=e[d],u=o-p.x0,f=s-p.z0,x=u*p.tx+f*p.tz;d>0&&(x=Math.max(0,x)),d<e.length-1&&(x=Math.min(p.l,x));let y=u-p.tx*x,m=f-p.tz*x,h=y*y+m*m;h<l&&(l=h,c.d=p.d0+x,c.a=y*p.tz-m*p.tx)}return c}return{largo:t,en:i,aVia:r}}function Cf(n,e,t,a){let i={},r={};return function(s,c){for(let u of t){let f=s.x-u.x,x=s.z-u.z,y=u.r+c,m=f*f+x*x;if(m<y*y&&m>1e-9){let h=y/Math.sqrt(m);s.x=u.x+f*h,s.z=u.z+x*h}}n.aVia(s.x,s.z,i);let l=Math.max(a.d0,Math.min(a.d1,i.d)),d=Math.max(-a.a,Math.min(a.a,i.a)),p=l!==i.d||d!==i.a;i.d=l,i.a=d;for(let u of e){if(i.d<=u.d0-c||i.d>=u.d1+c||i.a<=u.a0-c||i.a>=u.a1+c)continue;let f=i.d-(u.d0-c),x=u.d1+c-i.d,y=i.a-(u.a0-c),m=u.a1+c-i.a,h=Math.min(f,x,y,m);h===f?i.d=u.d0-c:h===x?i.d=u.d1+c:h===y?i.a=u.a0-c:i.a=u.a1+c,p=!0}return p&&(n.en(i.d,i.a,r),s.x=r.x,s.z=r.z),s}}function _r(n,e=!1){let t=n[0].index!==null,a=new Set(Object.keys(n[0].attributes)),i=new Set(Object.keys(n[0].morphAttributes)),r={},o={},s=n[0].morphTargetsRelative,c=new ft,l=0;for(let d=0;d<n.length;++d){let p=n[d],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!a.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),u++}if(u!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(s!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,d),l+=f}}if(t){let d=0,p=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let x=0;x<f.count;++x)p.push(f.getX(x)+d);d+=n[u].attributes.position.count}c.setIndex(p)}for(let d in r){let p=Rf(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,p)}for(let d in o){let p=o[d][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let u=0;u<p;++u){let f=[];for(let y=0;y<o[d].length;++y)f.push(o[d][y][u]);let x=Rf(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(x)}}}return c}function Rf(n){let e,t,a,i=-1,r=0;for(let l=0;l<n.length;++l){let d=n[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=d.normalized),a!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let o=new e(r),s=new bt(o,t,a),c=0;for(let l=0;l<n.length;++l){let d=n[l];if(d.isInterleavedBufferAttribute){let p=c/t;for(let u=0,f=d.count;u<f;u++)for(let x=0;x<t;x++){let y=d.getComponent(u,x);s.setComponent(u+p,x,y)}}else o.set(d.array,c);c+=d.count*t}return i!==void 0&&(s.gpuType=i),s}var xc=new Oe;function mn(){let n=[],e=[],t=[],a=[];function i(c,l,d,p,u,f){let x=n.length/3;xc.set(u);for(let y of[c,l,d,p])n.push(y[0],y[1],y[2]),e.push(xc.r,xc.g,xc.b);f?t.push(...f):t.push(0,0,0,0,0,0,0,0),a.push(x,x+1,x+2,x,x+2,x+3)}function r(c,l,d,p,{techo:u=p,bahia:f=0,piso:x=3.2}={}){for(let y=0;y<4;y++){let m=c[y],h=c[(y+1)%4],b=f?Math.max(1,Math.round(Math.hypot(h[0]-m[0],h[1]-m[1])/f)):0,E=f?Math.max(1,Math.round((d-l)/x)):0;i([m[0],l,m[1]],[h[0],l,h[1]],[h[0],d,h[1]],[m[0],d,m[1]],p,[0,0,b,0,b,E,0,E])}i([c[0][0],d,c[0][1]],[c[1][0],d,c[1][1]],[c[2][0],d,c[2][1]],[c[3][0],d,c[3][1]],u)}function o(c,l,d,p,u,f,x,y=0,m){let h=Math.cos(y),b=Math.sin(y),E=p/2,v=f/2;r([[-E,-v],[-E,v],[E,v],[E,-v]].map(([M,A])=>[c+M*h+A*b,d-M*b+A*h]),l,l+u,x,m)}function s(){let c=new ft;return c.setAttribute("position",new tt(n,3)),c.setAttribute("color",new tt(e,3)),c.setAttribute("uv",new tt(t,2)),c.setIndex(a),c.computeVertexNormals(),c}return{quad:i,prisma:r,caja:o,geometria:s}}var Ta=n=>()=>{n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};function bc(){let n=Ta(11),e=[];for(let a=0;a<6;a++){let i=a/6*6.283,r=a?.58:0,o=(.58+n()*.2)*(a?1:1.15),s=new or(o,0).rotateX(n()*3).rotateY(n()*3).translate(Math.cos(i)*r,(a%2?.22:-.08)+(a?0:.12),Math.sin(i)*r).toNonIndexed(),c=[1,.86,.74][a%3],l=new Float32Array(s.attributes.position.count*3).fill(c);s.setAttribute("color",new bt(l,3)),s.deleteAttribute("uv"),e.push(s)}let t=_r(e);return t.computeVertexNormals(),t}function Fy(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Sr(n,e,t){let a=document.createElement("canvas");a.width=n,a.height=e;let i=a.getContext("2d");t(i,n,e);let r=new Un(a);return r.wrapS=r.wrapT=Ka,r.colorSpace=Ht,r.anisotropy=4,r}var vc=null;function Au(){if(vc)return vc;let n=Fy(7),e=Sr(256,256,(s,c,l)=>{s.fillStyle="#f2f2f2",s.fillRect(0,0,c,l);for(let d=0;d<4200;d++)s.fillStyle=`rgba(${n()<.5?"90,90,90":"255,255,255"},${.03+n()*.07})`,s.fillRect(n()*c,n()*l,1+n()*2.5,1+n()*2.5);for(let d=0;d<26;d++){let p=n()*c,u=s.createLinearGradient(p,0,p+6,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(60,60,60,.05)"),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect(p,n()*l*.4,6,l)}}),t=Sr(256,256,(s,c,l)=>{for(let d=0;d<c;d++){let p=.5+.5*Math.sin(d/c*Math.PI*2*8),u=Math.round(150+90*p);s.fillStyle=`rgb(${u},${u},${u+4})`,s.fillRect(d,0,1,l)}for(let d=0;d<90;d++)s.fillStyle=`rgba(120,70,40,${.04+n()*.09})`,s.fillRect(n()*c,n()*l,2+n()*10,1+n()*14);s.fillStyle="rgba(0,0,0,.22)",s.fillRect(0,l-3,c,3)}),a=Sr(256,256,(s,c,l)=>{s.fillStyle="#dedad1",s.fillRect(0,0,c,l);for(let[d,p]of[[0,0],[c/2,0],[0,l/2],[c/2,l/2]]){let u=Math.round(n()*18-9);s.fillStyle=`rgba(${u>0?"255,255,255":"60,55,50"},${Math.abs(u)/100})`,s.fillRect(d,p,c/2,l/2)}for(let d=0;d<2600;d++)s.fillStyle=`rgba(${n()<.5?"80,80,80":"255,255,255"},${.04+n()*.08})`,s.fillRect(n()*c,n()*l,1+n()*2,1+n()*2);for(let d=0;d<5;d++){let p=s.createRadialGradient(0,0,0,0,0,18+n()*24);p.addColorStop(0,"rgba(70,60,50,.12)"),p.addColorStop(1,"rgba(70,60,50,0)"),s.save(),s.translate(n()*c,n()*l),s.fillStyle=p,s.fillRect(-45,-45,90,90),s.restore()}s.strokeStyle="rgba(70,66,58,.55)",s.lineWidth=3,s.strokeRect(1.5,1.5,c-3,l-3),s.beginPath(),s.moveTo(c/2,0),s.lineTo(c/2,l),s.moveTo(0,l/2),s.lineTo(c,l/2),s.stroke(),s.strokeStyle="rgba(255,255,255,.25)",s.lineWidth=1,s.beginPath(),s.moveTo(c/2+2,0),s.lineTo(c/2+2,l),s.moveTo(0,l/2+2),s.lineTo(c,l/2+2),s.stroke()}),i=Sr(512,512,(s,c,l)=>{s.fillStyle="#585d65",s.fillRect(0,0,c,l);for(let d=0;d<22e3;d++){let p=70+Math.floor(n()*90);s.fillStyle=`rgba(${p},${p},${p},${.1+n()*.22})`,s.fillRect(n()*c,n()*l,1+n()*2,1+n()*2)}for(let d=0;d<3;d++){let p=40+n()*90,u=30+n()*70,f=n()*(c-p),x=n()*(l-u);s.fillStyle=`rgba(35,38,42,${.25+n()*.2})`,s.fillRect(f,x,p,u),s.strokeStyle="rgba(20,20,22,.35)",s.lineWidth=2,s.strokeRect(f,x,p,u)}for(let d=0;d<4;d++){let p=s.createRadialGradient(0,0,0,0,0,14+n()*18);p.addColorStop(0,"rgba(15,15,20,.35)"),p.addColorStop(1,"rgba(15,15,20,0)"),s.save(),s.translate(n()*c,n()*l),s.scale(1.8,1),s.fillStyle=p,s.fillRect(-40,-40,80,80),s.restore()}s.strokeStyle="rgba(20,20,22,.45)",s.lineWidth=1.2;for(let d=0;d<9;d++){s.beginPath();let p=n()*c,u=n()*l;s.moveTo(p,u);for(let f=0;f<7;f++)p+=(n()-.5)*60,u+=(n()-.5)*60,s.lineTo(p,u);s.stroke()}}),r=Sr(512,512,(s,c,l)=>{s.fillStyle="#86ad70",s.fillRect(0,0,c,l);for(let d=0;d<14;d++){let p=s.createRadialGradient(0,0,0,0,0,40+n()*90),u=n()<.5?"60,120,50":"170,200,110";p.addColorStop(0,`rgba(${u},.18)`),p.addColorStop(1,`rgba(${u},0)`),s.save(),s.translate(n()*c,n()*l),s.fillStyle=p,s.fillRect(-130,-130,260,260),s.restore()}for(let d=0;d<2e4;d++){let p=n();s.fillStyle=p<.45?`rgba(40,100,40,${.08+n()*.16})`:p<.8?`rgba(180,215,120,${.08+n()*.14})`:`rgba(110,90,50,${.05+n()*.08})`,s.fillRect(n()*c,n()*l,1,2+n()*4)}}),o=Sr(128,256,(s,c,l)=>{s.fillStyle="#d8d8d8",s.fillRect(0,0,c,l);for(let d=0;d<c;d+=3)s.fillStyle=`rgba(60,60,60,${.05+n()*.16})`,s.fillRect(d,0,1+n()*2,l);for(let d=0;d<40;d++)s.fillStyle="rgba(40,40,40,.18)",s.beginPath(),s.ellipse(n()*c,n()*l,2+n()*3,6+n()*12,0,0,7),s.fill()});return vc={estuco:e,zinc:t,acera:a,asfalto:i,pasto:r,madera:o},vc}var yc=16777215,Ft={asfalto:3882564,pintura:15329244,amarillo:14924079,acera:12433838,cordon:9736330,lote:7314520,pasto:6064713,concreto:11117980,madera:7035723,metal:9212569,losa:7630955,zinc:9325370},Pf=[14273972,13219740,14934230,12109004,14203296,13620930,14731686,11122630],ln=3.65,_c=6,Hn=64,Sc=3.25,vt=.15,Ec=.9,If=-2.45,Ny=[[/ICE Sabana/,{pisos:13,color:3108789,cartel:739983}],[/ICE|Museo/,{pisos:4,color:3834564,cartel:739983}],[/Hotel|Casino/,{pisos:9,color:15129016,cartel:8007214}],[/Cond|Aptos|Suites|Torres|MEP|Abogados|Soka/,{pisos:6,cartel:4082262}],[/Soda|Subway|KFC|Restaurant|Sports|MTA/,{pisos:1,cartel:10107678}]];function By(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,64),e.fillStyle="#e4e4e0",e.fillRect(0,58,64,6),e.fillStyle="#d2d2cc",e.fillRect(16,14,32,32);let t=e.createLinearGradient(0,16,0,44);t.addColorStop(0,"#7f9db5"),t.addColorStop(1,"#3d5468"),e.fillStyle=t,e.fillRect(18,16,28,28),e.fillStyle="#d2d2cc",e.fillRect(31,16,2,28);let a=new Un(n);return a.wrapS=a.wrapT=Ka,a.colorSpace=Ht,a.anisotropy=4,a}function Df(n,e){let t=Ta(50),a={},i=mn(),r=mn(),o=mn(),s=mn(),c=Object.assign(mn(),{tile:4}),l=Object.assign(mn(),{tile:1.6}),d=Object.assign(mn(),{tile:7}),p=(L,R,ne=0)=>(e.en(L,R,a),[a.x,ne,a.z]),u=L=>(e.en(L,0,a),Math.atan2(a.tx,a.tz));function f(L,R,ne,oe,P,S,U,Y=8){let H=Math.max(1,Math.ceil((ne-R)/Y));for(let ge=0;ge<H;ge++){let ve=R+(ne-R)*ge/H,ce=R+(ne-R)*(ge+1)/H,de=[p(ve,oe,S),p(ce,oe,S),p(ce,P,S),p(ve,P,S)];L.quad(...de,U,L.tile?de.flatMap(Se=>[Se[0]/L.tile,Se[2]/L.tile]):void 0)}}let x=(L,R,ne,oe,P,S,U)=>{let Y=p(L,R),H=p(ne,oe);i.quad([Y[0],P,Y[2]],[H[0],P,H[2]],[H[0],S,H[2]],[Y[0],S,Y[2]],U)},y=[0,...n.cruces.filter(L=>L.vias.some(R=>/^(residential|secondary)/.test(R))).map(L=>L.d)],m=-14,h=e.largo+14;f(d,m-60,h+60,-Hn-40,Hn+40,-.03,14543058,40),f(c,m,h,-ln,ln,0,yc);for(let L of y)for(let R of[-1,1])f(c,L-Sc,L+Sc,R>0?ln:-Hn-40,R>0?Hn+40:-ln,0,yc,8);let b=[];for(let L=0;L<y.length-1;L++)b.push([y[L]+Sc,y[L+1]-Sc]);for(let[L,R]of b)for(let ne of[-1,1]){let oe=ne>0?ln:-_c,P=ne>0?_c:-ln,S=ne>0?_c:-Hn,U=ne>0?Hn:-_c;f(l,L,R,oe,P,vt,yc),f(d,L,R,S,U,vt,yc,16);let Y=Math.ceil((R-L)/8);for(let H=0;H<Y;H++){let ge=L+(R-L)*H/Y,ve=L+(R-L)*(H+1)/Y;ne>0?x(ge,ln,ve,ln,0,vt,Ft.cordon):x(ve,-ln,ge,-ln,0,vt,Ft.cordon)}ne>0?(x(L,Hn,L,ln,0,vt,Ft.cordon),x(R,ln,R,Hn,0,vt,Ft.cordon)):(x(L,-ln,L,-Hn,0,vt,Ft.cordon),x(R,-Hn,R,-ln,0,vt,Ft.cordon))}for(let L of[-1,1])f(i,m,h,L*3.42-.05,L*3.42+.05,.012,Ft.amarillo);let E=n.otros.find(L=>/espacios de estacionamiento/.test(L.que)),v={d0:E.d,n:19,paso:5.7,a:If};f(i,E.d-1,E.d+v.n*v.paso,-1.36,-1.26,.012,Ft.pintura);for(let L=0;L<=v.n;L++)f(i,E.d+L*5.7-.05,E.d+L*5.7+.05,-3.4,-1.3,.012,Ft.pintura);f(i,e.largo-6.4,e.largo-6,-1.3,3.4,.012,Ft.pintura);let M=[],A=[],w=[];for(let[L,R]of b)for(let ne of["este","oeste"])for(let oe=L+4;oe<R-12;){let P=Math.min(14+t()*16,R-4-oe),S=7.4+t()*3,U=12+t()*10;M.push({lado:ne,d0:oe,d1:oe+P,frente:S,fondo:U,pisos:1+Math.floor(t()*t()*5),color:Pf[Math.floor(t()*Pf.length)]}),oe+=P+1.5+t()*3}let g=[];for(let L of n.lugares){let R=M.filter(P=>P.lado===L.lado&&!P.nombre);if(!R.length)continue;let ne=R.reduce((P,S)=>Math.abs((S.d0+S.d1)/2-L.d)<Math.abs((P.d0+P.d1)/2-L.d)?S:P);if(ne.nombre=L.nombre,/Parque|Parqueo/.test(L.nombre)){ne.vacio=!0;continue}let oe=Ny.find(([P])=>P.test(L.nombre))?.[1]??{};Object.assign(ne,oe),g.push(ne)}for(let L of M){if(L.vacio)continue;let R=L.lado==="este"?1:-1,ne=R>0?L.frente:-(L.frente+L.fondo),oe=R>0?L.frente+L.fondo:-L.frente,P=L.pisos*3.2+.6,S=[p(L.d0,ne),p(L.d1,ne),p(L.d1,oe),p(L.d0,oe)].map(U=>[U[0],U[2]]);o.prisma(S,vt,P,L.color,{techo:L.pisos<=2?Ft.zinc:Ft.losa,bahia:3}),A.push({d0:L.d0,d1:L.d1,a0:ne,a1:oe}),Object.assign(L,{a0:ne,a1:oe,h:P})}let _=document.createElement("canvas");_.width=_.height=1024;let T=_.getContext("2d");T.textAlign="center",T.textBaseline="middle",g.slice(0,32).forEach((L,R)=>{let ne=R%2,oe=R>>1,P=ne*512,S=oe*64;T.fillStyle="#"+(L.cartel??2832970).toString(16).padStart(6,"0"),T.fillRect(P,S,512,64),T.fillStyle="#fff",T.font="bold 34px system-ui, Arial, sans-serif";let U=T.measureText(L.nombre).width;U>480&&(T.font=`bold ${Math.floor(34*480/U)}px system-ui, Arial, sans-serif`),T.fillText(L.nombre,P+256,S+34);let Y=L.lado==="este"?1:-1,H=Y>0?L.a0-.06:L.a1+.06,ge=(L.d0+L.d1)/2,ve=Math.min(L.d1-L.d0-2,9)/2,ce=Math.min(L.h-.9,3.7),de=p(ge-Y*ve,H),Se=p(ge+Y*ve,H),ze=ne/2,Te=ze+.5,Me=1-oe/16,Ve=Me-1/16;s.quad([de[0],ce-.55,de[2]],[Se[0],ce-.55,Se[2]],[Se[0],ce+.55,Se[2]],[de[0],ce+.55,de[2]],16777215,[ze,Ve,Te,Ve,Te,Me,ze,Me])});let D=n.postes.map(L=>(e.aVia(L.p[0],L.p[1],a),{...L,x:L.p[0],z:L.p[1],d:a.d,a:a.a,rumbo:u(a.d)})),N=Object.fromEntries(D.map(L=>[L.id,L])),k=new Gt(new At(.13,.18,9.6,10).translate(0,4.8,0),new et({color:Ft.concreto,roughness:.9}),D.length),C=D.filter(L=>L.herrajes.some(R=>/reserva/.test(R))),F=new Gt(new Cn(.36,.035,6,18),new et({color:1382170,roughness:.6}),C.length*2),V=new _t;D.forEach((L,R)=>{V.position.set(L.x,vt,L.z),V.rotation.set(0,0,0),V.updateMatrix(),k.setMatrixAt(R,V.matrix),L.herrajes.includes("cruceta")&&r.caja(L.x,9,L.z,2.2,.1,.12,Ft.madera,L.rumbo),w.push({x:L.x,z:L.z,r:.2})}),C.forEach((L,R)=>[-1,1].forEach((ne,oe)=>{let P=p(L.d+ne*.9,L.a,6.25);V.position.set(P[0],P[1],P[2]),V.rotation.set(0,L.rumbo+Math.PI/2,0),V.updateMatrix(),F.setMatrixAt(R*2+oe,V.matrix)}));let O=[],j=[],G=new Oe;function Z(L,R,ne,oe){G.set(oe);for(let P=0;P<12;P++)for(let S of[P/12,(P+1)/12])O.push(L[0]+(R[0]-L[0])*S,L[1]+(R[1]-L[1])*S-ne*4*S*(1-S),L[2]+(R[2]-L[2])*S),j.push(G.r,G.g,G.b)}for(let L of n.tendido){let R=N[L.de],ne=N[L.a];for(let oe=0;oe<3;oe++)Z([R.x,6.3+oe*.18,R.z],[ne.x,6.3+oe*.18,ne.z],.55,921361);for(let oe of[-.95,0,.95])Z(p(R.d,R.a+oe,9.15),p(ne.d,ne.a+oe,9.15),.8,3356218)}let ie=new ft;ie.setAttribute("position",new tt(O,3)),ie.setAttribute("color",new tt(j,3));let xe=n.arboles.map(L=>({x:L[0],z:L[1],k:.8+t()*.5}));for(let L of M)if(L.vacio)for(let R=0;R<6;R++){let ne=p(L.d0+t()*(L.d1-L.d0),(L.lado==="este"?1:-1)*(L.frente+2+t()*L.fondo));xe.push({x:ne[0],z:ne[2],k:1+t()*.6})}for(let L=0;L<26;L++){let R=p(t()*e.largo,(t()<.5?-1:1)*(38+t()*24));xe.push({x:R[0],z:R[2],k:1+t()*.8})}let Ee=new Gt(new At(.13,.2,3,6).translate(0,1.5,0),new et({color:5916210,roughness:1}),xe.length),Be=new Gt(bc().scale(1.7,1.5,1.7).translate(0,3.55,0),new et({vertexColors:!0,roughness:1,flatShading:!0}),xe.length);xe.forEach((L,R)=>{V.position.set(L.x,vt,L.z),V.rotation.set(0,t()*6,0),V.scale.setScalar(L.k),V.updateMatrix(),Ee.setMatrixAt(R,V.matrix),Be.setMatrixAt(R,V.matrix),Be.setColorAt(R,G.setHSL(.27+t()*.08,.45+t()*.15,.26+t()*.1)),w.push({x:L.x,z:L.z,r:.25})}),V.scale.setScalar(1);let _e=Ta(77),J=[12597547,3104650,3046735,15320363,8007214],z=(L,R)=>!D.some(ne=>Math.abs(ne.d-L)<2.6&&Math.abs(ne.a-R)<2)&&!xe.some(ne=>Math.hypot(ne.x-p(L,R)[0],ne.z-p(L,R)[2])<1.8),$=(L,R,ne,oe,P,S,U,Y=0)=>{let H=p(L,R);r.caja(H[0],ne,H[2],oe,P,S,U,u(L)+Y)},pe=(L,R)=>{let ne=p(L,R),oe=u(L);r.caja(ne[0],vt,ne[2],.3,5.4,.3,9073496,oe);for(let P=0;P<6;P++)r.caja(ne[0],vt+5.3,ne[2],3,.1,.5,P%2?4099642:3111475,oe+P*.52);for(let P=0;P<4;P++)r.caja(ne[0],vt+4.9,ne[2],2,.1,.45,3834422,oe+.26+P*.78);r.caja(ne[0],vt+4.6,ne[2],.4,.35,.4,8018476,oe),w.push({x:ne[0],z:ne[2],r:.25})};for(let L of M){let R=L.lado==="este"?1:-1,ne=R>0?L.a0:L.a1,oe=(L.d0+L.d1)/2,P=L.d1-L.d0,S=ne-R*.1;if(L.vacio){for(let H=0;H<3;H++)pe(L.d0+2+_e()*(P-4),R*(L.frente+2+_e()*6));continue}$(oe,S,vt,.2,.9,P+.1,9209210),$(oe,ne-R*.15,L.h-.45,.6,.2,P+.3,15723488),L.pisos<=2&&$(oe,ne-R*.5,L.h,1.3,.08,P+.6,5913136);let U=L.d0+2.5+_e()*(P-5),Y=L.nombre?3095109:J[Math.floor(_e()*5)];if($(U,S,vt,.12,2.2,1.2,Y),$(U,ne-R*(L.frente-5.9)/2-R*3,vt,L.frente-6+.2,.03,1.4,Ft.acera),!L.nombre&&L.pisos<=2)for(let H=0;H<6;H++)$(oe-P*.4+H*P*.16,ne-R*.8,2.45-H%2*0,1.6,.1,P*.16,H%2?16052714:12597547);if(_e()<.6)for(let H of[-1.2,1.2])$(U+H,ne-R*.6,vt,.45,.4,.45,11887901),$(U+H,ne-R*.6,vt+.4,.38,.3,.38,4099649);L.frente>8.8&&_e()<.4&&pe(L.d0+2+_e()*(P-4),R*(6+(L.frente-6)/2))}let ye=(L,R)=>{$(L,R*5.3,vt+.45,.5,.07,1.6,Ft.madera),$(L,R*5.55,vt+.45,.06,.5,1.6,Ft.madera);for(let ne of[-.7,.7])$(L+ne,R*5.3,vt,.4,.45,.07,Ft.metal);$(L+1.7,R*5.5,vt,.5,.85,.5,3042127),$(L+1.7,R*5.5,vt+.85,.56,.08,.56,1776928)};for(let[L,R]of b)for(let ne of[-1,1])for(let oe of[.3,.7]){let P=L+(R-L)*oe;_e()<.65&&z(P,ne*5.3)&&z(P+1.7,ne*5.5)&&ye(P,ne)}[[b[1],1],[b[b.length-2],-1]].forEach(([L,R])=>{if(!L)return;let ne=(L[0]+L[1])/2;for(let oe=0;oe<12&&!(z(ne,R*5)&&z(ne+2.2,R*4.3));oe++)ne+=3;$(ne,R*5,vt+2.4,1.9,.12,3.2,2051727),$(ne,R*5.65,vt,.06,2.4,3,12572646);for(let oe of[-1.5,1.5])$(ne+oe,R*4.2,vt,.1,2.4,.1,Ft.metal);$(ne,R*5.2,vt+.45,.45,.07,2.4,Ft.madera),$(ne+2.2,R*4.3,vt,.08,2.7,.08,Ft.metal),$(ne+2.2,R*4.3,vt+2.2,.06,.6,.7,Ft.amarillo)});let me=(L,R,ne)=>{r.caja(L.p[0],vt,L.p[1],.06,2.3,.06,Ft.metal),r.caja(L.p[0],1.9,L.p[1],.56,.56,.04,R,ne)};for(let L of n.otros){e.aVia(L.p[0],L.p[1],a);let R=u(a.d);if(/ALTO/.test(L.que))me(L,12593182,R);else if(/25 KPH/.test(L.que))me(L,15856108,R);else if(/zona escolar/.test(L.que))me(L,15320363,R);else if(/estacionamiento E/.test(L.que))me(L,2056112,R);else if(/parquímetro/.test(L.que))r.caja(L.p[0],vt,L.p[1],.08,1.2,.08,Ft.metal),r.caja(L.p[0],1.3,L.p[1],.3,.45,.2,2903667,R);else if(/gabinete/.test(L.que)){r.caja(L.p[0],vt,L.p[1],.5,1.35,.95,3046735,R);let ne=p(a.d+.9,a.a-.5);r.caja(ne[0],vt,ne[2],.14,.9,.14,Ft.amarillo),A.push({d0:a.d-.5,d1:a.d+.5,a0:a.a-.3,a1:a.a+.3})}else/retenida/.test(L.que)?r.caja(L.p[0],vt,L.p[1],.12,2.2,.12,Ft.amarillo,R):/caja de empalme/.test(L.que)&&r.caja(L.p[0],6.05,L.p[1],.24,.24,.6,1184790,R)}let Ce=N.P05,Ue=Ce.d+15,we=p(Ue,If),Je={x:we[0],z:we[2],rumbo:u(Ue)},nt=new rt,ke=new et({vertexColors:!0,roughness:.92}),be=Au(),te=(L,R,{sombra:ne=!0,recibe:oe=!0}={})=>{let P=new Fe(L.geometria(),R);return P.castShadow=ne,P.receiveShadow=oe,P};nt.add(te(i,ke,{sombra:!1}),te(c,new et({map:be.asfalto,vertexColors:!0,roughness:.95}),{sombra:!1}),te(l,new et({map:be.acera,vertexColors:!0,roughness:.95}),{sombra:!1}),te(d,new et({map:be.pasto,vertexColors:!0,roughness:1}),{sombra:!1}),te(r,ke),te(o,new et({map:By(),vertexColors:!0,roughness:.85})),te(s,new Tn({map:Object.assign(new Un(_),{colorSpace:Ht,anisotropy:4})}),{sombra:!1,recibe:!1}),new Bn(ie,new wn({vertexColors:!0})),k,F,Ee,Be);for(let L of[k,Ee,Be])L.castShadow=!0;nt.traverse(L=>{L.matrixAutoUpdate=!1,L.updateMatrix()});let ae={};function fe(L,R){if(e.aVia(L,R,ae),Math.abs(ae.a)<=ln||Math.abs(ae.a)>Hn)return 0;for(let[ne,oe]of b)if(ae.d>=ne&&ae.d<=oe)return vt;return 0}return{grupo:nt,cajas:A,circulos:w,altura:fe,postes:D,estacionamiento:v,limites:{d0:m+2,d1:h-2,a:Hn-2},inicio:{d:Ue-1,a:-4.5},dPick:Ue,trabajo:Ce,estacionado:Je,BORDE:Hn+40,D0:m-60,D1:h+60}}var Tu=2.5,Oa=40,Ac=5,Ri=128,Lf=Ri*Ac/2,Uy=12,zy=14,Mc=(n,e)=>{let t=Math.imul(n,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function Bo(n,e){let t=Math.floor(n),a=Math.floor(e),i=n-t,r=e-a,o=i*i*(3-2*i),s=r*r*(3-2*r);return(Mc(t,a)*(1-o)+Mc(t+1,a)*o)*(1-s)+(Mc(t,a+1)*(1-o)+Mc(t+1,a+1)*o)*s}var kn=(n,e,t)=>{let a=Math.max(0,Math.min(1,(t-n)/(e-n)));return a*a*(3-2*a)},Qn=Object.fromEntries(Object.entries({fondo:2051950,arena:14272911,selva:3107626,potrero:7248450,sabana:10263114,nuboso:2381114,paramo:8157774,roca:7825754,pueblo:11118492,pasto:6064713}).map(([n,e])=>[n,new Oe(e)]));function Ff(n,e,t,a,i=[]){let{x0:r,z0:o,paso:s,w:c,h:l}=e,d=Tu/e.escala,p=e.origen*d,u=-p,f=r+(c-1)*s,x=o+(l-1)*s,y={e:0,pend:0,llano:0},m={},h={dist:0,y:0},b=null;function E(be,te){let ae=Math.max(0,Math.min(c-1.001,(be-r)/s)),fe=Math.max(0,Math.min(l-1.001,(te-o)/s)),L=ae|0,R=fe|0,ne=ae-L,oe=fe-R,P=R*c+L,S=n[P],U=n[P+1],Y=n[P+c],H=n[P+c+1],ge=(S*(1-ne)+U*ne)*(1-oe)+(Y*(1-ne)+H*ne)*oe;y.e=ge,y.pend=Math.hypot((U-S)*(1-oe)+(H-Y)*oe,(Y-S)*(1-ne)+(H-U)*ne)/(s*e.escala);let ve=ge>0?Math.min(7,y.pend*16):0,ce=ge*d-p+ve*((Bo(be*.011,te*.011)-.5)*1.5+(Bo(be*.037,te*.037)-.5)*.6);for(let de of i){let Se=be-de.x,ze=te-de.z;if(Math.abs(Se)>de.R||Math.abs(ze)>de.R)continue;let Te=Math.hypot(Se,ze),Me=de.cima*d-p-de.alto*Math.pow(Te/de.R,.85)-Math.max(0,6-Te)*.8;Te<de.R&&Me>ce&&(ce=Me,y.pend=.5,y.e=(ce+p)/d)}return ce}function v(be,te){let ae=E(be,te);if(y.llano=0,Math.abs(be)<420&&te>-480&&te<480){t.aVia(be,te,m);let fe=Math.hypot(Math.max(0,Math.abs(m.a)-100),Math.max(0,-70-m.d,m.d-t.largo-70));if(fe<150){let L=kn(4,150,fe);ae=(fe<4?-.6+.15*fe:0)*(1-L)+ae*L,y.llano=1-L}}for(let fe of a){if(Math.abs(be-fe.x)>fe.r+60||Math.abs(te-fe.z)>fe.r+60)continue;let L=kn(fe.r,fe.r+60,Math.hypot(be-fe.x,te-fe.z));L<1&&(ae=fe.y*(1-L)+ae*L,y.llano=Math.max(y.llano,1-L))}return ae}for(let be of a)be.y=Math.max(u+1.5,E(be.x,be.z));function M(be,te){let ae=v(be,te);if(b&&b.cerca(be,te,h).dist<45){let fe=kn(16,45,h.dist);ae=h.y*(1-fe)+ae*fe}return ae}let A=new Oe;function w(be,te,ae,fe){let L=y.e,R=y.pend*Tu,ne=Bo(be*.06,te*.06),oe=e.lon0+be/e.kx,P=e.lat0-te/e.kz;if(L<1)A.copy(Qn.arena).lerp(Qn.fondo,kn(0,45,-L));else if(L<14)A.copy(Qn.arena);else{let U=kn(84.72,85.15,-oe)*kn(9.7,10.15,P)*(1-kn(500,900,L));A.copy(Qn.selva).lerp(Qn.potrero,kn(.42,.7,ne)*(1-kn(.1,.3,R))).lerp(Qn.sabana,U*(.6+.4*ne)),A.lerp(Qn.nuboso,kn(1300,1900,L)).lerp(Qn.paramo,kn(2900,3300,L)).lerp(Qn.roca,kn(.75,1.2,R)),A.lerp(Qn.arena,1-kn(14,30,L))}y.llano>0&&A.lerp(Math.abs(be)<420&&Math.abs(te)<480?Qn.pasto:Qn.pueblo,y.llano*.8);let S=.88+ne*.24;ae[fe]=A.r*S,ae[fe+1]=A.g*S,ae[fe+2]=A.b*S}let g=Math.floor((f-r)/Oa)+1,_=Math.floor((x-o)/Oa)+1,T=new Float32Array(g*_*3),D=new Float32Array(g*_*3),N=new Float32Array(g*_*3),k=new Uint32Array((g-1)*(_-1)*6),C=new ft;C.setAttribute("position",new bt(T,3)),C.setAttribute("color",new bt(D,3)),C.setAttribute("normal",new bt(N,3)),C.setIndex(new bt(k,1));function F(be,te,ae,fe,L){for(let R=0;R<fe;R++)for(let ne=0;ne<ae;ne++){let oe=(R*ae+ne)*3,P=be[(R*ae+Math.max(0,ne-1))*3+1],S=be[(R*ae+Math.min(ae-1,ne+1))*3+1],U=be[(Math.max(0,R-1)*ae+ne)*3+1],Y=be[(Math.min(fe-1,R+1)*ae+ne)*3+1],H=(P-S)/(2*L),ge=(U-Y)/(2*L),ve=Math.hypot(H,1,ge);te[oe]=H/ve,te[oe+1]=1/ve,te[oe+2]=ge/ve}}function V(){for(let be=0;be<_;be++)for(let te=0;te<g;te++){let ae=(be*g+te)*3,fe=r+te*Oa,L=o+be*Oa;T[ae]=fe,T[ae+1]=M(fe,L),T[ae+2]=L,w(fe,L,D,ae)}F(T,N,g,_,Oa);for(let be of["position","color","normal"])C.attributes[be].needsUpdate=!0;C.computeBoundingSphere()}function O(be,te){let ae=0;for(let fe=0;fe<_-1;fe++)for(let L=0;L<g-1;L++){if(L>=be-8&&L<be+8&&fe>=te-8&&fe<te+8)continue;let R=fe*g+L,ne=R+g;k[ae++]=R,k[ae++]=ne,k[ae++]=R+1,k[ae++]=R+1,k[ae++]=ne,k[ae++]=ne+1}C.setDrawRange(0,ae),C.index.needsUpdate=!0}let j=Ri+1,G=j*j+4*j,Z=new Float32Array(G*3),ie=new Float32Array(G*3),xe=new Float32Array(G*3),Ee=new Float32Array(j*j*3),Be=new Float32Array(j*j*3),_e=[];for(let be=0;be<Ri;be++)for(let te=0;te<Ri;te++){let ae=be*j+te,fe=ae+j;_e.push(ae,fe,ae+1,ae+1,fe,fe+1)}let J=[[],[],[],[]];for(let be=0;be<j;be++)J[0].push(be),J[1].push(Ri*j+be),J[2].push(be*j),J[3].push(be*j+Ri);J.forEach((be,te)=>{for(let ae=0;ae<Ri;ae++){let fe=be[ae],L=be[ae+1],R=j*j+te*j+ae,ne=R+1;te===0||te===3?_e.push(fe,L,R,L,ne,R):_e.push(fe,R,L,L,R,ne)}});let z=new ft;z.setAttribute("position",new bt(Z,3)),z.setAttribute("color",new bt(ie,3)),z.setAttribute("normal",new bt(xe,3)),z.setIndex(_e);let $=new et({vertexColors:!0,roughness:1,side:Gn}),pe=new Fe(C,$),ye=new Fe(z,$),me=new Fe(new Sa(12e3,12e3).rotateX(-Math.PI/2),new et({color:2847639,roughness:.22,metalness:.1,transparent:!0,opacity:.9}));me.position.y=u;let Ce=new rt;Ce.add(pe,ye,me);for(let be of[pe,ye])be.receiveShadow=!0,be.frustumCulled=!1;let Ue=null,we=null,Je=null;function nt(be){let{ci:te,cj:ae}=we,fe=r+(te-8)*Oa,L=o+(ae-8)*Oa;for(let R=0;R<be&&we.fila<j;R++,we.fila++){let ne=we.fila,oe=L+ne*Ac;for(let P=0;P<j;P++){let S=(ne*j+P)*3,U=fe+P*Ac;Ee[S]=U,Ee[S+1]=M(U,oe),Ee[S+2]=oe,w(U,oe,Be,S)}}if(!(we.fila<j)){Z.set(Ee),ie.set(Be),F(Z,xe,j,j,Ac),J.forEach((R,ne)=>R.forEach((oe,P)=>{let S=(j*j+ne*j+P)*3;Z[S]=Z[oe*3],Z[S+1]=Z[oe*3+1]-Uy,Z[S+2]=Z[oe*3+2];for(let U=0;U<3;U++)ie[S+U]=ie[oe*3+U],xe[S+U]=xe[oe*3+U]}));for(let R of["position","color","normal"])z.attributes[R].needsUpdate=!0;O(te,ae),Ue={ci:te,cj:ae,x:fe+Lf,z:L+Lf},we=null,Je?.(Ue.x,Ue.z)}}function ke(be,te,ae=!1){let fe=Math.max(8,Math.min(g-9,Math.round((be-r)/Oa))),L=Math.max(8,Math.min(_-9,Math.round((te-o)/Oa)));!we&&(!Ue||fe!==Ue.ci||L!==Ue.cj)&&(we={ci:fe,cj:L,fila:0}),we&&nt(ae?j:zy)}return{grupo:Ce,MAR:u,EX:Tu,limites:{x0:r+60,x1:f-60,z0:o+60,z1:x-60},altura:M,alturaBase:v,relieve:E,cada:ke,muestra:y,listo(be,te){b=be,Je=te,V()}}}var Oy=8,Er=60,Tc=46,Gy=3.6;function Nf(n,e,t,a=[]){let i=n.map(c=>{let l=c.puntos,d=[],p=[];for(let h=0;h<l.length-1;h++){let b=l[Math.max(0,h-1)],E=l[h],v=l[h+1],M=l[Math.min(l.length-1,h+2)],A=Math.max(1,Math.ceil(Math.hypot(v[0]-E[0],v[1]-E[1])/Oy));for(let w=0;w<A;w++){let g=w/A,_=g*g,T=_*g;d.push(.5*(2*E[0]+(v[0]-b[0])*g+(2*b[0]-5*E[0]+4*v[0]-M[0])*_+(3*E[0]-b[0]-3*v[0]+M[0])*T)),p.push(.5*(2*E[1]+(v[1]-b[1])*g+(2*b[1]-5*E[1]+4*v[1]-M[1])*_+(3*E[1]-b[1]-3*v[1]+M[1])*T))}}d.push(l.at(-1)[0]),p.push(l.at(-1)[1]);let u=d.length,f=d.map((h,b)=>Math.max(t+1.5,e(h,p[b]))),x=new Uint8Array(u);c.y0!==void 0&&(f[0]=c.y0,x[0]=1);for(let h=0;h<u;h++)for(let b of a)Math.hypot(d[h]-b.x,p[h]-b.z)<b.r*.6&&(f[h]=Math.max(t+1.5,b.y),x[h]=1);x[u-1]=1;for(let h=0;h<6e3;h++){let b=0;for(let E=1;E<u-1;E++)x[E]||(f[E]=Math.max(t+1.5,(f[E-1]+2*f[E]+f[E+1])/4));for(let E=1;E<u;E++)b=Math.max(b,Math.abs(f[E]-f[E-1])/Math.hypot(d[E]-d[E-1],p[E]-p[E-1]));if(b<.13&&h>20)break}let y=new Array(u),m=new Array(u);for(let h=0;h<u;h++){let b=Math.max(0,h-1),E=Math.min(u-1,h+1),v=Math.hypot(d[E]-d[b],p[E]-p[b])||1;y[h]=(p[E]-p[b])/v,m[h]=-(d[E]-d[b])/v}return{n:c.n,X:d,Z:p,Y:f,NX:y,NZ:m}}),r=new Map,o=(c,l)=>(c+2048)*4096+(l+2048);i.forEach((c,l)=>{for(let d=0;d<c.X.length-1;d++){let p=Math.floor((Math.min(c.X[d],c.X[d+1])-Tc)/Er),u=Math.floor((Math.max(c.X[d],c.X[d+1])+Tc)/Er),f=Math.floor((Math.min(c.Z[d],c.Z[d+1])-Tc)/Er),x=Math.floor((Math.max(c.Z[d],c.Z[d+1])+Tc)/Er);for(let y=p;y<=u;y++)for(let m=f;m<=x;m++){let h=o(y,m),b=r.get(h);b||r.set(h,b=[]),b.push(l,d)}}});function s(c,l,d){d.dist=1/0;let p=r.get(o(Math.floor(c/Er),Math.floor(l/Er)));if(!p)return d;for(let u=0;u<p.length;u+=2){let f=i[p[u]],x=p[u+1],y=f.X[x],m=f.Z[x],h=f.X[x+1]-y,b=f.Z[x+1]-m,E=h*h+b*b,v=Math.max(0,Math.min(1,((c-y)*h+(l-m)*b)/E)),M=Math.hypot(c-y-h*v,l-m-b*v);if(M<d.dist){let A=Math.sqrt(E);d.dist=M,d.y=f.Y[x]+(f.Y[x+1]-f.Y[x])*v,d.ruta=p[u],d.tx=h/A,d.tz=b/A}}return d}return{rutas:i,cerca:s,MEDIO:Gy}}function Bf(n,e=1500){let t=new Float32Array(e*2*12),a=new Float32Array(e*2*12),i=new Float32Array(e*2*12),r=new Uint32Array(e*2*6);for(let f=0;f<e*2;f++){r.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6);for(let x=0;x<4;x++)i[f*12+x*3+1]=1}let o=new ft;o.setAttribute("position",new bt(t,3)),o.setAttribute("color",new bt(a,3)),o.setAttribute("normal",new bt(i,3)),o.setIndex(new bt(r,1));let s=new Fe(o,new et({vertexColors:!0,roughness:.95}));s.frustumCulled=!1,s.receiveShadow=!0;let c=new Oe(3882564),l=new Oe(14924079),d=0;function p(f,x,y,m,h,b){if(d>=e*2)return;let E=d++*12,v=x+1,M=[[x,y],[v,y],[v,m],[x,m]];for(let A=0;A<4;A++){let[w,g]=M[A];t[E+A*3]=f.X[w]+f.NX[w]*g,t[E+A*3+1]=f.Y[w]+h,t[E+A*3+2]=f.Z[w]+f.NZ[w]*g,a[E+A*3]=b.r,a[E+A*3+1]=b.g,a[E+A*3+2]=b.b}}function u(f,x,y){d=0;for(let m of n.rutas)for(let h=0;h<m.X.length-1;h++)Math.abs(m.X[h]-f)>y||Math.abs(m.Z[h]-x)>y||(p(m,h,-n.MEDIO,n.MEDIO,.12,c),h%2===0&&p(m,h,-.09,.09,.15,l));o.setDrawRange(0,d*6),o.attributes.position.needsUpdate=o.attributes.color.needsUpdate=!0}return{malla:s,rehacer:u}}var Mr=11,Uo=240,wc=1100,li=(n,e,t)=>{let a=Math.imul(n,73856093)^Math.imul(e,19349663)^Math.imul(t,83492791);return a=Math.imul(a^a>>>15,2246822519),((a^a>>>13)>>>0)/4294967296},Hy={palma:[5.2,.7,2.1,.7,5148474],selva:[4.2,1.1,2.3,2,2911019],seco:[3.2,1.2,3.1,1,8163132],cipres:[3,.9,1,2.7,2314810]};function Uf(n,e,t){let a=new Gt(new At(.11,.17,1,6).translate(0,.5,0),new et({color:5916210,roughness:1}),wc),i=new Gt(bc(),new et({vertexColors:!0,roughness:1,flatShading:!0}),wc),r=new rt;r.add(a,i);for(let d of[a,i])d.frustumCulled=!1,d.count=0;let o=new _t,s=new Oe,c={dist:0};function l(d,p){let u=0,f=Math.floor((d-Uo)/Mr),x=Math.floor((d+Uo)/Mr),y=Math.floor((p-Uo)/Mr),m=Math.floor((p+Uo)/Mr);for(let h=y;h<=m&&u<wc;h++)for(let b=f;b<=x&&u<wc;b++){let E=(b+li(b,h,1))*Mr,v=(h+li(b,h,2))*Mr;if(Math.hypot(E-d,v-p)>Uo)continue;let M=n.altura(E,v),A=n.muestra,w=A.e;if(w<3||A.llano>.25||A.pend*n.EX>1.1||e.cerca(E,v,c).dist<12)continue;let g=t.lon0+E/t.kx,_=t.lat0-v/t.kz,T=-g>84.9&&_>9.85&&w<700,D=Bo(E*.013,v*.013),N=w>3e3?.06:T?.16+.3*D:.2+.75*D*D;if(li(b,h,3)>N)continue;let[k,C,F,V,O]=Hy[w<45?"palma":w>1900?"cipres":T?"seco":"selva"],j=.75+li(b,h,4)*.6,G=li(b,h,8),Z=w>=45&&w<1900&&G<.07,ie=w>=45&&w<1900&&G>=.07&&G<.15,xe=w<45,Ee=ie?F*1.5:F,Be=ie?V*.55:xe?V*.6:V,_e=Z?15234090:ie?10336160:O;o.position.set(E,M-.1,v),o.rotation.set(0,li(b,h,5)*6.28,0),o.scale.set(C*j,k*j,C*j),o.updateMatrix(),a.setMatrixAt(u,o.matrix),o.position.y=M+k*j+Be*j*.12,o.scale.set(Ee*j,Be*j,Ee*j),o.updateMatrix(),i.setMatrixAt(u,o.matrix),i.setColorAt(u,s.set(_e).offsetHSL((li(b,h,6)-.5)*.04,0,(li(b,h,7)-.5)*.08)),u++}a.count=i.count=u,a.instanceMatrix.needsUpdate=i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return{grupo:r,rehacer:l}}function ky(n){return JSON.stringify([n.type,n.map?.uuid??null,n.roughness,n.metalness,n.transparent,n.opacity,n.side,n.depthWrite,n.depthTest,n.emissive?.getHex(),n.emissiveIntensity,n.vertexColors,n.fog,n.flatShading,n.polygonOffset,n.polygonOffsetFactor,n.polygonOffsetUnits,n.envMapIntensity,n.toneMapped,n.alphaTest,n.blending])}function Vy(n){let e=n.clone();return e.color.set(16777215),e.vertexColors=!0,e.needsUpdate=!0,e}function jy(n,e,t){let a=n.index?n.toNonIndexed():n.clone();for(let i of Object.keys(a.attributes))["position","normal","uv","color"].includes(i)||a.deleteAttribute(i);if(a.attributes.uv||a.setAttribute("uv",new tt(new Float32Array(a.attributes.position.count*2),2)),a.attributes.normal||a.computeVertexNormals(),t&&!a.attributes.color){let i=e.color??new Oe(1,1,1),r=a.attributes.position.count,o=new Float32Array(r*3);for(let s=0;s<r;s++)o[s*3]=i.r,o[s*3+1]=i.g,o[s*3+2]=i.b;a.setAttribute("color",new tt(o,3))}return t||a.deleteAttribute("color"),a}var zo=new _t;function qe(n=0,e=0,t=0,a=0,i=0,r=0,o=1,s=o,c=o){return zo.position.set(n,e,t),zo.rotation.set(a,i,r),zo.scale.set(o,s,c),zo.updateMatrix(),zo.matrix.clone()}function Ar(){let n=new Map,e=wi.nuevo;return{add(t,a,i=null){let r=e?ky(a):a;n.has(r)||n.set(r,{mat:a,geos:[]});let o=jy(t,a,e);i&&o.applyMatrix4(i),n.get(r).geos.push(o)},construir({sombra:t=!0,recibe:a=!0}={}){let i=new rt;for(let{mat:r,geos:o}of n.values()){let s=new Fe(_r(o,!1),e?Vy(r):r);s.castShadow=t,s.receiveShadow=a,i.add(s),o.forEach(c=>c.dispose())}return n.clear(),i}}}var zf="./datos-ZQLP6CAY.png";var gn=(n,e={})=>new et({color:n,roughness:.6,...e}),Pi={largoCaja:[-.95,2.85],techoY:2.36,accesoX:3.2,rungY:n=>.55+n*.3,N_RUNGS:7,ojal:new B(2.2,3.12,-.6),barandal:new B(1.2,2.78,-.95),espejo:new B(-2.45,1.95,1.2),escaleraRack:new B(.9,2.95,.45),cabina:new B(-1.75,2.3,0)};function Of(n,e){let t=document.createElement("canvas");t.width=512,t.height=Math.round(512*e/n);let a=new Un(t);a.colorSpace=Ht,a.anisotropy=4;let i=o=>{let s=t.getContext("2d");if(s.clearRect(0,0,t.width,t.height),s.fillStyle="#004E96",s.beginPath(),s.roundRect(0,0,t.width,t.height,26),s.fill(),s.fillStyle="#FFD627",s.fillRect(0,t.height-14,t.width,14),o){let c=(t.height-14)*.7,l=t.width*.82,d=Math.min(c/o.height,l/o.width),p=o.width*d,u=o.height*d;s.drawImage(o,(t.width-p)/2,(t.height-14-u)/2,p,u)}a.needsUpdate=!0};i(null);let r=new Image;return r.onload=()=>i(r),r.src=zf,new Fe(new Sa(n,e),new et({map:a,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2}))}function Gf(){let n=new rt,e=gn(16185076,{roughness:.32,metalness:.25}),t=gn(20118,{roughness:.4,metalness:.3}),a=gn(16766503,{roughness:.5}),i=gn(1711136,{roughness:.6,metalness:.3}),r=gn(10133672,{roughness:.35,metalness:.75}),o=gn(1912382,{roughness:.08,metalness:.6}),s=gn(1447706,{roughness:.9}),c=gn(7304573,{roughness:.6,metalness:.5}),l=gn(16773824,{emissive:8943428}),d=gn(13840175,{emissive:6689041}),p=Ar();p.add(new Pe(5.9,.3,1.5),i,qe(-.05,.58,0));let u=[];for(let _ of[-2.15,1.95])for(let T of[-1,1]){let D=new rt;D.position.set(_,.44,T);let N=new rt;D.add(N);let k=Ar();k.add(new At(.44,.44,.32,22),s,qe(0,0,0,Math.PI/2)),k.add(new At(.27,.27,.34,16),r,qe(0,0,0,Math.PI/2));for(let C=0;C<5;C++){let F=C*Math.PI*2/5;k.add(new Pe(.06,.3,.02),i,qe(0,Math.cos(F)*.12,T*.175,0,0,F))}N.add(k.construir()),n.add(D),u.push({pivote:D,giro:N,delantera:_<0}),p.add(new Pe(1.05,.08,.42),i,qe(_,.93,T*1))}p.add(new Pe(.95,.62,2.08),e,qe(-2.58,.98,0)),p.add(new Pe(1.55,1.5,2.1),e,qe(-1.72,1.5,0)),p.add(new Pe(.05,.66,1.85),o,qe(-2.5,1.78,0));for(let _ of[-1,1])p.add(new Pe(1,.6,.05),o,qe(-1.78,1.82,_*1.06)),p.add(new Pe(.04,1.35,.04),i,qe(-1.3,1.45,_*1.06)),p.add(new Pe(.04,1.35,.04),i,qe(-2.2,1.45,_*1.06)),p.add(new Pe(.22,.05,.06),r,qe(-1.5,1.45,_*1.08)),p.add(new Pe(.28,.2,.06),i,qe(-2.45,1.95,_*1.18)),p.add(new Pe(.04,.04,.15),i,qe(-2.45,1.9,_*1.1)),p.add(new Pe(.06,.2,.42),l,qe(-3.06,.93,_*.72)),p.add(new Pe(.06,.08,.3),gn(16751104,{emissive:6697728}),qe(-3.06,.74,_*.75));p.add(new Pe(.06,.3,1),i,qe(-3.06,.93,0)),p.add(new Pe(.2,.28,2.14),i,qe(-3.1,.55,0)),p.add(new Pe(1.7,.08,2.14),e,qe(-1.72,2.28,0)),p.add(new Pe(1,.06,1.9),c,qe(-1.72,2.34,0)),p.add(new Pe(1.56,.14,2.12),t,qe(-1.72,1,0)),p.add(new Pe(1.57,.05,2.13),a,qe(-1.72,1.1,0)),p.add(new Pe(.97,.1,2.1),t,qe(-2.58,.78,0));let f=.95,x=3.8;p.add(new Pe(x,1.55,2.2),e,qe(f,1.525,0)),p.add(new Pe(x+.02,.5,2.22),t,qe(f,.98,0)),p.add(new Pe(x+.03,.07,2.23),a,qe(f,1.26,0));for(let _ of[-1,1]){for(let T of[-.35,.55,1.45,2.35])p.add(new Pe(.03,1.05,.03),i,qe(T,1.78,_*1.11));for(let T of[.1,1,1.9])p.add(new Pe(.2,.05,.05),r,qe(T,1.7,_*1.13));p.add(new Pe(x-.3,.03,.03),i,qe(f,2.3,_*1.11)),p.add(new Pe(x,.12,.1),i,qe(f,.8,_*1.12))}p.add(new Pe(.03,1.45,.03),i,qe(2.86,1.55,0)),p.add(new Pe(.04,1.5,.5),i,qe(2.86,1.55,0)),p.add(new Pe(.05,.08,.06),r,qe(2.88,1.5,.12)),p.add(new Pe(.05,.08,.06),r,qe(2.88,1.5,-.12)),p.add(new Pe(.25,.28,2.2),i,qe(2.95,.62,0));for(let _ of[-1,1])p.add(new Pe(.06,.22,.32),d,qe(2.87,.95,_*.95)),p.add(new Pe(.04,.3,.02),a,qe(2.88,.5,_*1));p.add(new Pe(3.75,.05,2.05),c,qe(f,2.355,0));for(let _=-.8;_<2.8;_+=.2)p.add(new Pe(.04,.012,1.95),i,qe(_,2.385,0));for(let[_,T]of[[-.88,-.98],[-.88,.98],[2.78,-.98],[2.78,.98],[.95,-.98],[.95,.98]])p.add(new At(.035,.035,.46,8),r,qe(_,2.58,T));for(let _ of[-.98,.98])p.add(new Pe(3.7,.05,.05),a,qe(f,2.82,_)),p.add(new Pe(3.7,.04,.04),r,qe(f,2.6,_));for(let _ of[-.88,.95,2.78])p.add(new Pe(.05,.05,1.95),r,qe(_,2.82,0));p.add(new Pe(.3,.04,.3),r,qe(Pi.ojal.x,2.4,Pi.ojal.z)),p.add(new At(.045,.055,.76,10),a,qe(Pi.ojal.x,2.78,Pi.ojal.z));for(let _ of[-1,1])p.add(new Pe(.05,2.1,.05),r,qe(2.96,1.4,_*.3));for(let _=0;_<Pi.N_RUNGS;_++)p.add(new At(.018,.018,.6,8),r,qe(2.96,Pi.rungY(_),0,Math.PI/2));for(let _ of[-1,1])p.add(new Pe(.18,.04,.05),r,qe(2.9,2.4,_*.3));p.add(new At(.009,.009,2.75,6),a,qe(3.08,1.65,0)),p.add(new Pe(.16,.04,.1),r,qe(3.03,3,0)),p.add(new Pe(.1,.04,.1),r,qe(3.03,.28,0)),p.add(new Pe(.06,.06,.1),r,qe(3,3.02,0)),n.add(p.construir());for(let _ of[-1,1]){let T=Of(.84,.36);T.position.set(1,2.02,_*1.116),T.rotation.y=_>0?0:Math.PI,n.add(T);let D=Of(.95,.3);D.position.set(-1.72,1.2,_*1.056),D.rotation.y=_>0?0:Math.PI,n.add(D)}let y=new et({color:16756736,emissive:16746496,emissiveIntensity:1,roughness:.3}),m=[];for(let _ of[-.5,.5]){let T=new Fe(new Pe(.22,.12,.32),y.clone());T.position.set(-1.72,2.44,_),n.add(T),m.push(T)}let h=new Fe(new Pe(.26,.06,1.4),gn(2106410,{roughness:.4}));h.position.set(-1.72,2.37,0),n.add(h);let b=new rt,E=new Fe(new Pe(.13,.22,.11),gn(2303531,{roughness:.4,metalness:.6})),v=new Fe(new Pe(.135,.05,.115),a),M=new Fe(new Cn(.04,.01,6,14),r);M.position.set(0,-.14,0),M.rotation.y=Math.PI/2,b.add(E,v,M),v.position.y=.04,b.position.set(3.1,.75,0),b.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),n.add(b);let A=new rt,w=Ar(),g=gn(1118481,{roughness:.5});w.add(new At(.62,.62,.05,22),gn(11565626,{roughness:.85}),qe(0,.75,-.3,Math.PI/2)),w.add(new At(.62,.62,.05,22),gn(11565626,{roughness:.85}),qe(0,.75,.3,Math.PI/2)),w.add(new At(.46,.46,.55,22),g,qe(0,.75,0,Math.PI/2)),w.add(new At(.46,.46,.02,22),a,qe(0,.75,0,Math.PI/2)),w.add(new At(.06,.06,.8,8),r,qe(0,.75,0,Math.PI/2));for(let _ of[-1,1])w.add(new Pe(.06,1,.06),r,qe(-.28,.5,_*.42,0,0,.35)),w.add(new Pe(.06,1,.06),r,qe(.28,.5,_*.42,0,0,-.35)),w.add(new Pe(.9,.05,.06),r,qe(0,.03,_*.42));return A.add(w.construir()),A.position.set(5.3,0,.1),n.add(A),n.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0)}),n.updateMatrixWorld(!0),n.traverse(_=>{_!==n&&_!==b&&(_.updateMatrix(),_.matrixAutoUpdate=!1)}),{grupo:n,luces:m,carrito:b,carrete:A,ruedas:u,...Pi}}var wu=new Map,Pn=(n,e={})=>{let t=n+JSON.stringify(e);return wu.has(t)||wu.set(t,new et({color:n,roughness:.7,...e})),wu.get(t)};function Cc(n,e,t){let a=new rr(e,Math.max(.001,n-2*e),4,10);a.translate(0,-n/2,0);let i=new Fe(a,t);return i.castShadow=!0,i}var Tr=.3,Rc=.29,Hf=new B(0,-1,-.4).normalize(),Cu=new B,Ru=new B,Ii=new B,kf=new B,Vf=new B,Pu=new B,Di=new B,jf=new B,Oo=new B,$y=new xt,Iu={x:0,z:0};function qf(n){let e=Math.asin(Math.max(-1,Math.min(1,n.x))),t=Math.cos(e);return Iu.z=e,Iu.x=t>1e-4?Math.atan2(-n.z/t,-n.y/t):0,Iu}var Wy=.12;function $f({camisa:n=16040475,pantalon:e=2046819,piel:t=13148794,pelo:a=2825492,uniforme:i=!0}={}){let r={camisa:Pn(n),pantalon:Pn(e),piel:Pn(t,{roughness:.6}),pelo:Pn(a,{roughness:.9}),casco:Pn(16766503,{roughness:.35}),arnes:Pn(10211642,{roughness:.6}),metal:Pn(12896978,{roughness:.25,metalness:.8}),plastico:Pn(2830134,{roughness:.5}),bota:Pn(3877408),lentes:Pn(1844272,{roughness:.1,metalness:.4}),guante:Pn(13214042,{roughness:.8}),reflectivo:Pn(14221135,{roughness:.4,emissive:3359744})},o=new rt,s=new rt;s.position.y=.92,o.add(s);let c=new Fe(new ca(.15,14,10),r.pantalon);c.scale.set(1.15,.8,.9),c.castShadow=!0,s.add(c);let l=te=>{let ae=new rt;ae.position.set(te*.095,-.04,0),s.add(ae),ae.add(Cc(.45,.072,r.pantalon));let fe=new rt;fe.position.y=-.45,ae.add(fe),fe.add(Cc(.43,.058,r.pantalon));let L=new rt;L.position.y=-.43,fe.add(L);let R=new Fe(new Pe(.11,.085,.27),r.bota);return R.position.set(0,-.03,.06),R.castShadow=!0,L.add(R),{h:ae,rod:fe,tob:L}},d=l(1),p=l(-1),u=new rt;u.position.y=.05,s.add(u);let f=new Fe(new rr(.155,.34,6,14),r.camisa);if(f.position.y=.3,f.scale.set(1.12,1,.78),f.castShadow=!0,u.add(f),i)for(let te of[.2,.38]){let ae=new Fe(new At(.176,.176,.035,20,1,!0),r.reflectivo);ae.position.y=te,ae.scale.set(1.12,1,.8),u.add(ae)}let x=new rt;x.position.y=.58,u.add(x);let y=new Fe(new ca(.105,18,14),r.piel);y.position.y=.13,y.scale.set(.92,1.05,1),y.castShadow=!0,x.add(y);let m=new Fe(new ca(.11,16,10,0,Math.PI*2,0,Math.PI*.55),r.pelo);m.position.y=.145,m.rotation.x=-.25,x.add(m);for(let te of[-1,1]){let ae=new Fe(new ca(.013,8,6),Pn(1118481));ae.position.set(te*.036,.15,.092),x.add(ae)}let h=new Fe(new Pe(.13,.035,.02),r.lentes);h.position.set(0,.15,.1),h.visible=!1,x.add(h);let b=new rt;b.position.y=.19,b.visible=!1,x.add(b);let E=new Fe(new ca(.123,22,12,0,Math.PI*2,0,Math.PI/2),r.casco);E.castShadow=!0;let v=new Fe(new At(.18,.18,.014,30),r.casco);v.position.y=.004,v.castShadow=!0;let M=new Fe(new Cn(.105,.006,6,22,Math.PI),r.plastico);M.rotation.set(0,Math.PI/2,Math.PI),M.position.y=-.03,b.add(E,v,M);let A=te=>{let ae=new rt;ae.position.set(te*.2,.5,0),u.add(ae),ae.add(Cc(.3,.052,r.camisa));let fe=new rt;fe.position.y=-.3,ae.add(fe),fe.add(Cc(.27,.045,r.camisa));let L=new Fe(new ca(.05,10,8),r.piel);return L.position.y=-.29,fe.add(L),{h:ae,codo:fe,mano:L}},w=A(1),g=A(-1),_=new Fe(new Cn(.05,.014,6,14),Pn(13938487,{metalness:.9,roughness:.2}));_.rotation.x=Math.PI/2,_.position.y=-.24,_.visible=!1,w.codo.add(_);let T=new rt;T.visible=!1;let D=[];for(let te of[-1,1]){let ae=[[.07,.02,.135],[.085,.3,.14],[.1,.5,.1],[.11,.6,0],[.1,.5,-.1],[.085,.3,-.14],[.07,.02,-.135]].map(([L,R,ne])=>new B(te*L,R,ne)),fe=new Fe(new sr(new Si(ae),30,.016,6),r.arnes);u.add(fe),D.push(fe)}let N=new Fe(new Pe(.2,.03,.012),r.arnes);N.position.set(0,.36,.142),u.add(N),D.push(N);let k=new Fe(new Cn(.172,.017,8,36),r.arnes);k.rotation.x=Math.PI/2,k.scale.set(1.08,.82,1),k.position.y=.02,s.add(k),D.push(k);for(let te of[d,p]){let ae=new Fe(new Cn(.08,.013,8,24),r.arnes);ae.rotation.x=Math.PI/2,ae.position.y=-.12,te.h.add(ae),D.push(ae)}let C=()=>new Fe(new Cn(.03,.008,8,18),r.metal),F=C();F.position.set(.19,.02,0),F.rotation.y=Math.PI/2,s.add(F);let V=C();V.position.set(-.19,.02,0),V.rotation.y=Math.PI/2,s.add(V);let O=C();O.position.set(0,.48,-.14),u.add(O);let j=C();j.position.set(0,.2,.158),j.scale.setScalar(1.15),u.add(j);let G=new Fe(new Pe(.034,.17,.012),r.arnes);G.position.set(0,.285,.15),u.add(G);let Z=new Fe(new Cn(.024,.009,8,14,Math.PI*1.3),r.plastico);Z.position.set(-.12,-.01,.13),Z.rotation.z=Math.PI*.85,s.add(Z),D.push(F,V,O,j,G,Z);let ie=te=>D.forEach(ae=>{ae.visible=te});ie(!1);let xe=(te,ae,fe,L)=>{let R=new _t;return R.position.set(ae,fe,L),te.add(R),R},Ee={dIzq:xe(F,0,0,0),dDer:xe(V,0,0,0),porta:xe(Z,0,0,0),dorsal:xe(O,0,0,0),frontal:xe(j,0,-.02,0),pecho:xe(u,0,.38,.2),cabeza:xe(x,0,.32,0),manoI:xe(w.mano,0,0,0),manoD:xe(g.mano,0,0,0)};{let te=new Set([h,_,...D,w.mano,g.mano]);b.traverse(ae=>te.add(ae)),o.updateMatrixWorld(!0),o.traverse(ae=>{if(!ae.isGroup)return;let fe=new Map;for(let L of ae.children)L.isMesh&&!te.has(L)&&L.visible&&!L.children.length&&(fe.has(L.material)||fe.set(L.material,[]),fe.get(L.material).push(L));for(let[L,R]of fe){if(R.length<2)continue;let ne=R.map(P=>{P.updateMatrix();let S=(P.geometry.index?P.geometry.toNonIndexed():P.geometry.clone()).applyMatrix4(P.matrix);for(let U of Object.keys(S.attributes))["position","normal","uv"].includes(U)||S.deleteAttribute(U);return S}),oe=new Fe(_r(ne,!1),L);oe.castShadow=R.some(P=>P.castShadow),R.forEach(P=>ae.remove(P)),ae.add(oe)}})}let Be=new Set;function _e(te,ae=!0){ae?Be.add(te):Be.delete(te),te==="casco"&&(b.visible=ae),te==="lentes"&&(h.visible=ae),te==="guantes"&&(w.mano.material=g.mano.material=ae?r.guante:r.piel),te==="arnes"&&ie(ae),te==="reloj"&&(_.visible=ae)}let J=wi.nuevo,z=[d.h,d.rod,d.tob,p.h,p.rod,p.tob,w.h,w.codo,g.h,g.codo,u,x,s],$=z.length*3+1,pe=new Float64Array($),ye=new Float64Array($),me=new Float64Array($),Ce=null,Ue=te=>{let ae=0;for(let fe of z)te[ae++]=fe.rotation.x,te[ae++]=fe.rotation.y,te[ae++]=fe.rotation.z;te[ae]=s.position.y},we=te=>{let ae=0;for(let fe of z)fe.rotation.set(te[ae++],te[ae++],te[ae++]);s.position.y=te[ae]};function Je(te,ae){if(u.updateMatrix(),Cu.copy(ae).sub(s.position).applyMatrix4($y.copy(u.matrix).invert()),Ru.copy(te.h.position),Ii.subVectors(Cu,Ru),Ii.lengthSq()<1e-8)return;let fe=Math.max(Tr-Rc+.001,Math.min(Tr+Rc-.001,Ii.length()));Ii.normalize();let L=Math.acos(Math.max(-1,Math.min(1,(Tr*Tr+fe*fe-Rc*Rc)/(2*Tr*fe))));Vf.copy(Hf).addScaledVector(Ii,-Hf.dot(Ii)).normalize(),Pu.copy(Ii).multiplyScalar(Math.cos(L)).addScaledVector(Vf,Math.sin(L)),kf.copy(Ru).addScaledVector(Pu,Tr),Di.subVectors(Cu,kf).normalize();let R=qf(Pu);te.h.rotation.set(R.x,0,R.z);let ne=Math.cos(R.x),oe=Math.sin(R.x),P=Math.cos(R.z),S=Math.sin(R.z),U=Di.y*ne+Di.z*oe,Y=-Di.y*oe+Di.z*ne;jf.set(Di.x*P+U*S,-Di.x*S+U*P,Y);let H=qf(jf);te.codo.rotation.set(H.x,0,H.z)}function nt(te,ae){if(te==="escalar"){let fe=1.45+.06*ae,L=1.45-.06*ae;Je(w,Oo.set(.23,fe,.1+.268*fe-.04)),Je(g,Oo.set(-.23,L,.1+.268*L-.04))}else if(te==="sostener"){let fe=.3414000000000001;Je(w,Oo.set(.23,1.05,fe)),Je(g,Oo.set(-.23,1.05,fe))}else te==="banderero"?Je(g,Oo.set(-.22,1.62,.3)):te==="caminar"&&(w.codo.rotation.x=-.25-.2*Math.max(0,ae),g.codo.rotation.x=-.25-.2*Math.max(0,-ae))}function ke({tipo:te="idle",fase:ae=0,t:fe=0,mirarArriba:L=0,dt:R}={}){let ne=J&&R!==void 0&&Ce!==null&&te!==Ce;ne&&Ue(pe);for(let S of[d.h,d.rod,d.tob,p.h,p.rod,p.tob,w.h,w.codo,g.h,g.codo,u,x,s])S.rotation.set(0,0,0);s.position.y=.92;let oe=Math.sin(ae),P=Math.cos(ae);if(w.h.rotation.z=-.12,g.h.rotation.z=.12,u.rotation.x=.02*Math.sin(fe*2),x.rotation.x=-L,te==="caminar")d.h.rotation.x=oe*.55,p.h.rotation.x=-oe*.55,d.rod.rotation.x=Math.max(0,-oe)*.7,p.rod.rotation.x=Math.max(0,oe)*.7,w.h.rotation.x=-oe*.45,g.h.rotation.x=oe*.45,w.codo.rotation.x=-.3,g.codo.rotation.x=-.3,s.position.y=.92+Math.abs(P)*.025;else if(te==="escalar")w.h.rotation.set(-2.5+oe*.3,0,-.18),w.codo.rotation.x=-.45-Math.max(0,oe)*.3,g.h.rotation.set(-2.5-oe*.3,0,.18),g.codo.rotation.x=-.45-Math.max(0,-oe)*.3,d.h.rotation.x=-.55-Math.max(0,oe)*.5,d.rod.rotation.x=.7+Math.max(0,oe)*.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.2-Math.max(0,-oe)*.5,p.rod.rotation.x=.25+Math.max(0,-oe)*.6,p.tob.rotation.x=-.05,u.rotation.x=.12,x.rotation.x=-.25-L;else if(te==="trabajar"){let S=Math.sin(fe*3)*.1;w.h.rotation.set(-2.25+S,0,-.25),w.codo.rotation.x=-.6+S,g.h.rotation.set(-2-S,0,.3),g.codo.rotation.x=-.8-S,d.h.rotation.x=-.45,d.rod.rotation.x=.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.08,p.rod.rotation.x=.12,u.rotation.x=.14,x.rotation.x=-.35}else te==="sostener"?(w.h.rotation.set(-1.35,0,-.1),g.h.rotation.set(-1.35,0,.1),w.codo.rotation.x=-.3,g.codo.rotation.x=-.3):te==="senalar"?(g.h.rotation.set(-1.5,0,.5),g.codo.rotation.x=-.1,u.rotation.y=.2):te==="cargar"?(w.h.rotation.set(-2.9,0,-.2),g.h.rotation.set(-2.9,0,.2),w.codo.rotation.x=-.2,g.codo.rotation.x=-.2,d.h.rotation.x=oe*.45,p.h.rotation.x=-oe*.45,d.rod.rotation.x=Math.max(0,-oe)*.6,p.rod.rotation.x=Math.max(0,oe)*.6):te==="caida"?(w.h.rotation.set(-2.8+oe*.4,0,-.6),g.h.rotation.set(-2.6-oe*.4,0,.6),d.h.rotation.x=-.4+oe*.3,p.h.rotation.x=-.1-oe*.3,d.rod.rotation.x=.5,p.rod.rotation.x=.3):te==="colgado"?(w.h.rotation.set(-2.9,0,-.3),g.h.rotation.set(-2.9,0,.3),d.h.rotation.x=-.3,p.h.rotation.x=-.1,d.rod.rotation.x=.4,p.rod.rotation.x=.3,u.rotation.x=-.1):te==="tendido"?(w.h.rotation.set(-.3,0,-1.1),g.h.rotation.set(.2,0,1.3),w.codo.rotation.x=-.5,g.codo.rotation.x=-.2,d.h.rotation.set(.05,0,.12),p.h.rotation.set(-.15,0,-.08),p.rod.rotation.x=.35,x.rotation.y=.5):te==="banderero"?(g.h.rotation.set(-1.55,0,.15),g.codo.rotation.x=-.15,w.h.rotation.set(-.9+Math.sin(fe*2.2)*.5,0,-.5),w.codo.rotation.x=-.4):te==="celular"?(g.h.rotation.set(-1.1,0,.25),g.codo.rotation.x=-1.2,x.rotation.x=.45,d.h.rotation.x=oe*.45,p.h.rotation.x=-oe*.45,d.rod.rotation.x=Math.max(0,-oe)*.6,p.rod.rotation.x=Math.max(0,oe)*.6):(w.codo.rotation.x=-.08,g.codo.rotation.x=-.08);if(J){if(nt(te,oe),Ue(ye),R===void 0)me.fill(0);else{if(ne)for(let U=0;U<$;U++)me[U]=pe[U]-ye[U];let S=Math.exp(-R/Wy);for(let U=0;U<$;U++){let Y=me[U]*S;Math.abs(Y)<1e-4&&(Y=0),me[U]=Y,ye[U]+=Y}we(ye)}Ce=te}}ke();let be=new Set([o,s,d.h,d.rod,d.tob,p.h,p.rod,p.tob,u,x,w.h,w.codo,g.h,g.codo]);return o.updateMatrixWorld(!0),o.traverse(te=>{be.has(te)||(te.updateMatrix(),te.matrixAutoUpdate=!1)}),{raiz:o,pose:ke,equipar:_e,equipado:Be,refs:Ee,M:r,partes:{pelvis:s,torso:u,cuello:x,bi:w,bd:g,pi:d,pd:p}}}var In=(n=>n?n==="real":!gc().movil)(new URLSearchParams(location.search).get("sombras")),Xy=(n,e)=>n+Math.atan2(Math.sin(e-n),Math.cos(e-n)),Du={c:"cargar",e:"escalar",t:"trabajar",s:"sostener"};function Lu(n){let e=$f(n);return e.raiz.traverse(t=>{t.isMesh&&(t.castShadow=In)}),e}function Wf(n,e){let t=new Map;function a(o,s,c,l,d,p,u="i"){let f=t.get(o);return f||(f={id:o,p:Lu(d),x:s,z:c,y:p??e(s,c),ox:s,oz:c,rumbo:l??0,orumbo:l??0,fase:Math.random()*6,d:0,a:0},f.p.equipar("casco",!!d?.uniforme),d?.arnes&&f.p.equipar("arnes"),n.add(f.p.raiz),t.set(o,f)),f.ox=s,f.oz=c,f.oy=p,f.pose=u,l!==void 0&&(f.orumbo=l),f}function i(o){let s=t.get(o);s&&(n.remove(s.p.raiz),t.delete(o))}function r(o,s,c){let l=1-Math.exp(-o*10);for(let d of t.values()){let p=(d.ox-d.x)*l,u=(d.oz-d.z)*l,f=((d.oy??e(d.x,d.z))-d.y)*l,x=Math.hypot(p,f,u);d.x+=p,d.z+=u,d.y+=f;let y=Math.hypot(p,u)/o>.25,m=Du[d.pose];d.rumbo=Xy(d.rumbo,y&&!m?Math.atan2(p,u):d.orumbo)*l+d.rumbo*(1-l),d.p.raiz.position.set(d.x,d.y,d.z),d.p.raiz.rotation.y=d.rumbo;let h=Math.hypot(d.x-c.position.x,d.z-c.position.z);d.p.raiz.visible=h<140&&d.pose!=="o",h<60&&(d.fase+=x*4.19,d.p.pose({tipo:m??(y?"caminar":"idle"),fase:d.fase,t:s,dt:o}))}}return{mapa:t,fijar:a,quitar:i,cada:r}}function Xf(n){let e=new Gt(new so(.5,16).rotateX(-Math.PI/2),new Tn({color:0,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n);e.frustumCulled=!1,e.renderOrder=1;let t=new _t;return{malla:e,fijar(a,i,r,o,s,c=s,l=0){t.position.set(i,r+.02,o),t.rotation.set(0,l,0),t.scale.set(s,1,c),t.updateMatrix(),e.setMatrixAt(a,t.matrix)},listo(a){e.count=Math.min(a,n),e.instanceMatrix.needsUpdate=!0}}}var Yy=4.1,Jy=1.15,Zy=3.15,Ky=27,Qy=9,e_=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n));function Yf(n,e){let t=Gf();t.grupo.rotation.y=Math.PI/2,t.grupo.updateMatrix(),t.carrete.visible=!1,t.grupo.traverse(y=>{y.isMesh&&(y.castShadow=In)});let a=new rt;a.add(t.grupo),a.rotation.order="YXZ";let i={x:e.x,z:e.z,rumbo:e.rumbo,v:0,y:0,ox:e.x,oz:e.z,orumbo:e.rumbo},r=new B;function o(y,m,h,b=r){let E=Math.cos(i.rumbo),v=Math.sin(i.rumbo);return b.set(i.x+y*E+h*v,i.y+m,i.z-y*v+h*E)}function s(){let y=Math.cos(i.rumbo),m=Math.sin(i.rumbo),h=n(i.x+m*2.1,i.z+y*2.1),b=n(i.x-m*2.1,i.z-y*2.1),E=n(i.x+y*1,i.z-m*1),v=n(i.x-y*1,i.z+m*1);i.y=(h+b+E+v)/4,a.position.set(i.x,i.y,i.z),a.rotation.set(-Math.atan2(h-b,4.2),i.rumbo,Math.atan2(E-v,2))}let c=0;function l(y,m){c+=i.v*y/.44;for(let h of t.ruedas)h.giro.rotation.z=c,h.giro.updateMatrix(),h.delantera&&(h.pivote.rotation.y=m,h.pivote.updateMatrix())}function d(y,m,h,b){let E=h?Ky:Qy;m.mz>.05?i.v+=(i.v<0?12:4.5)*m.mz*y:m.mz<-.05?i.v+=(i.v>0?11:3)*m.mz*y:i.v-=Math.sign(i.v)*Math.min(Math.abs(i.v),1.6*y),i.v>E&&(i.v=Math.max(E,i.v-7*y)),i.v=Math.max(-5,i.v),i.rumbo+=i.v*Math.tan(-m.mx*.55/(1+Math.abs(i.v)*.09))/Yy*y,i.x=Math.max(b.x0,Math.min(b.x1,i.x+Math.sin(i.rumbo)*i.v*y)),i.z=Math.max(b.z0,Math.min(b.z1,i.z+Math.cos(i.rumbo)*i.v*y)),i.ox=i.x,i.oz=i.z,i.orumbo=i.rumbo,l(y,-m.mx*.5)}function p(y,m,h){Object.assign(i,{x:y,z:m,rumbo:h,v:0,ox:y,oz:m,orumbo:h})}function u(y,m,h,b){i.ox=y,i.oz=m,i.orumbo=h,i.v=b}function f(y){let m=1-Math.exp(-y*10);i.x+=(i.ox-i.x)*m,i.z+=(i.oz-i.z)*m,i.rumbo+=e_(i.rumbo,i.orumbo)*m,l(y,0)}function x(y,m){let h=Math.cos(i.rumbo),b=Math.sin(i.rumbo),E=y.x-i.x,v=y.z-i.z,M=E*h-v*b,A=E*b+v*h,w=Jy+m,g=Zy+m;Math.abs(M)>=w||Math.abs(A)>=g||(w-Math.abs(M)<g-Math.abs(A)?M=Math.sign(M||1)*w:A=Math.sign(A||1)*g,y.x=i.x+M*h+A*b,y.z=i.z-M*b+A*h)}return{grupo:a,camion:t,st:i,local:o,asentar:s,conducir:d,fijar:p,remoto:u,seguir:f,empujar:x}}var Go={sanjose:{n:"San Jos\xE9",lat:9.9404,lon:-84.102,r:0},alajuela:{n:"Alajuela",lat:10.016,lon:-84.214,r:60},cartago:{n:"Cartago",lat:9.864,lon:-83.919,r:60},sanramon:{n:"San Ram\xF3n",lat:10.088,lon:-84.47,r:45},orotina:{n:"Orotina",lat:9.912,lon:-84.523,r:40},caldera:{n:"Caldera",lat:9.912,lon:-84.722,r:40},esparza:{n:"Esparza",lat:9.994,lon:-84.664,r:40},puntarenas:{n:"Puntarenas",lat:9.977,lon:-84.838,r:45},canas:{n:"Ca\xF1as",lat:10.428,lon:-85.094,r:45},liberia:{n:"Liberia",lat:10.634,lon:-85.44,r:60},lacruz:{n:"La Cruz",lat:11.073,lon:-85.632,r:35},penasblancas:{n:"Pe\xF1as Blancas \xB7 frontera con Nicaragua",lat:11.214,lon:-85.613,r:35},santacruz:{n:"Santa Cruz",lat:10.262,lon:-85.585,r:40},nicoya:{n:"Nicoya",lat:10.148,lon:-85.452,r:45},amistad:{n:"Puente La Amistad",lat:10.247,lon:-85.243,r:0},fortuna:{n:"La Fortuna",lat:10.471,lon:-84.645,r:40},arenal:{n:"Volc\xE1n Arenal",lat:10.463,lon:-84.703,r:0},tilaran:{n:"Tilar\xE1n",lat:10.473,lon:-84.968,r:35},monteverde:{n:"Monteverde",lat:10.31,lon:-84.82,r:0},poas:{n:"Volc\xE1n Po\xE1s",lat:10.198,lon:-84.231,r:0},irazu:{n:"Volc\xE1n Iraz\xFA",lat:9.979,lon:-83.852,r:0},guapiles:{n:"Gu\xE1piles",lat:10.215,lon:-83.79,r:45},siquirres:{n:"Siquirres",lat:10.098,lon:-83.507,r:40},limon:{n:"Lim\xF3n",lat:9.99,lon:-83.035,r:60},tortuguero:{n:"Tortuguero",lat:10.54,lon:-83.5,r:0},cahuita:{n:"Cahuita",lat:9.735,lon:-82.84,r:35},sixaola:{n:"Sixaola \xB7 frontera con Panam\xE1",lat:9.508,lon:-82.615,r:35},cerromuerte:{n:"Cerro de la Muerte",lat:9.56,lon:-83.75,r:0},chirripo:{n:"Cerro Chirrip\xF3",lat:9.484,lon:-83.489,r:0},sanisidro:{n:"San Isidro de El General",lat:9.376,lon:-83.703,r:50},buenosaires:{n:"Buenos Aires",lat:9.17,lon:-83.33,r:35},palmar:{n:"Palmar Norte",lat:8.96,lon:-83.46,r:40},neily:{n:"Ciudad Neily",lat:8.65,lon:-82.94,r:40},canoas:{n:"Paso Canoas \xB7 frontera con Panam\xE1",lat:8.534,lon:-82.84,r:35},jaco:{n:"Jac\xF3",lat:9.615,lon:-84.63,r:40},quepos:{n:"Quepos \xB7 Manuel Antonio",lat:9.43,lon:-84.16,r:40},dominical:{n:"Dominical",lat:9.25,lon:-83.86,r:30}},Jf=[{n:"Ruta 1 \xB7 Interamericana Norte",p:["@oeste","alajuela",[10.06,-84.33],"sanramon","esparza",[10.1,-84.82],[10.262,-84.965],"canas",[10.526,-85.255],"liberia","lacruz","penasblancas"]},{n:"Ruta 27",p:["@oeste",[9.915,-84.24],"orotina","caldera"]},{n:"Ruta 23",p:["caldera",[9.955,-84.715],[9.985,-84.735],[9.978,-84.775],[9.977,-84.805],"puntarenas"]},{n:"Ruta 34 \xB7 Costanera Sur",p:["orotina",[9.76,-84.61],"jaco",[9.52,-84.32],"quepos","dominical",[9.16,-83.74],"palmar"]},{n:"Ruta 2 \xB7 Interamericana Sur",p:["@este","cartago",[9.74,-83.94],"cerromuerte","sanisidro","buenosaires",[9.02,-83.3],"palmar",[8.7,-83.1],"neily","canoas"]},{n:"Ruta 32",p:["@este",[10.03,-84.06],[10.09,-84],[10.16,-83.93],"guapiles","siquirres",[10.07,-83.29],"limon"]},{n:"Ruta 36",p:["limon",[9.92,-83.045],[9.84,-82.975],[9.78,-82.93],"cahuita",[9.63,-82.85],"sixaola"]},{n:"Ruta 21",p:["liberia",[10.447,-85.56],"santacruz","nicoya"]},{n:"Ruta 18",p:[[10.262,-84.965],"amistad",[10.2,-85.35],"nicoya"]},{n:"Ruta 142",p:["sanramon",[10.25,-84.52],"fortuna",[10.5,-84.7],[10.505,-84.8],"tilaran","canas"]}],Zf=[{k:"arenal",R:90,alto:52,cima:1633}],Fu=(n,e,t)=>[(t-n.lon0)*n.kx,-(e-n.lat0)*n.kz];var Pc=[[-80,20,60,90],[-1,58,122,158],[0,214,200,150],[40,120,168,92],[600,70,130,70],[1500,52,100,70],[2500,128,118,84],[3300,170,160,140],[3900,225,222,215]];function Kf(n,e,t){let{w:a,h:i,paso:r,x0:o,z0:s}=e,c=document.createElement("canvas");c.width=a,c.height=i;let l=c.getContext("2d"),d=l.createImageData(a,i),p=d.data;for(let y=0;y<i;y++)for(let m=0;m<a;m++){let h=y*a+m,b=n[h],E=Pc.length-2;for(;E>0&&b<Pc[E][0];)E--;let v=Pc[E],M=Pc[E+1],A=Math.max(0,Math.min(1,(b-v[0])/(M[0]-v[0]))),w=b>0?Math.max(.55,Math.min(1.3,1+((n[h-1]??b)-(n[h+1]??b)+(n[h-a]??b)-(n[h+a]??b))/520)):1;for(let g=0;g<3;g++)p[h*4+g]=Math.min(255,(v[g+1]+(M[g+1]-v[g+1])*A)*w);p[h*4+3]=255}l.putImageData(d,0,0);let u=y=>(y-o)/r,f=y=>(y-s)/r;l.lineJoin=l.lineCap="round";for(let[y,m]of[[3.2,"rgba(40,30,20,.75)"],[1.6,"#F6E7A8"]]){l.lineWidth=y,l.strokeStyle=m;for(let h of t.rutas){l.beginPath();for(let b=0;b<h.X.length;b+=3)l.lineTo(u(h.X[b]),f(h.Z[b]));l.lineTo(u(h.X.at(-1)),f(h.Z.at(-1))),l.stroke()}}l.font="600 11px system-ui, Arial, sans-serif",l.textBaseline="middle",l.lineWidth=3;for(let y of Object.values(Go)){let m=u((y.lon-e.lon0)*e.kx),h=f(-(y.lat-e.lat0)*e.kz),b=y.n.split(" \xB7 ")[0];l.fillStyle=y.r?"#fff":"#FFD627",l.strokeStyle="rgba(0,20,40,.85)",l.beginPath(),l.arc(m,h,y.r?3:2.4,0,7),l.fill(),l.stroke();let E=m>a-110;l.textAlign=E?"right":"left",l.strokeText(b,m+(E?-6:6),h),l.fillText(b,m+(E?-6:6),h)}function x(y,m){y.width=a,y.height=i;let h=y.getContext("2d");h.drawImage(c,0,0);for(let b of[...m].reverse())h.save(),h.translate(u(b.x),f(b.z)),h.fillStyle=b.color,h.strokeStyle="#00182F",h.lineWidth=2,b.rumbo!==void 0?(h.rotate(-b.rumbo+Math.PI),h.beginPath(),h.moveTo(0,-9),h.lineTo(6,7),h.lineTo(0,3.5),h.lineTo(-6,7),h.closePath()):(h.beginPath(),h.arc(0,0,4.5,0,7)),h.stroke(),h.fill(),h.restore()}return{dibujar:x}}var t_=800,n_=1200,Qf=[15260085,13230274,15910821,12178408,15852960,15120568,14207208,16052714,11130575,15906354,5093036,15037299,6600182,16747109,11457921],St={zinc:9325370,zincGris:9278361,blanco:16052714,piedra:12104358,pasto:7316826,cancha:5151301,linea:16053492,madera:8018492,metal:10133670,rojo:12597547,azul:2051727,amarillo:15320363};var a_=new Oe,Ho=(n,e)=>a_.set(n).multiplyScalar(e).getHex();function i_(n,e,t,a,i,r,o,s,c,l,d,p,{alt:u,libre:f}){let x=Math.cos(o),y=Math.sin(o),m=(_,T)=>[e+_*x+T*y,a-_*y+T*x],h=s*3-.2+.3,b=r/2;n.caja(e,t,a,i+.1,.85,r+.1,Ho(c,.72),o),n.caja(e,t+h-.16,a,i+.16,.18,r+.16,St.blanco,o),n.caja(e,t+h,a,i+.7,.1,r+.7,Ho(l,.8),o,{techo:l});let E=(p()-.5)*i*.3,[v,M]=m(E,b+.03);if(n.caja(v,t+.3,M,1,2.15,.08,d?3104650:St.madera,o),d){let[_,T]=m(0,b+.6);n.caja(_,t+2.75,T,i*.85,.08,1.2,St.rojo,o)}for(let _=0;_<s;_++)for(let T of[-i*.3,i*.3]){if(_===0&&Math.abs(T-E)<1.4)continue;let[D,N]=m(T,b+.03),[k,C]=m(T,b+.07),F=t+.3+1.05+_*3;n.caja(D,F,N,1.45,1.3,.06,St.blanco,o),n.caja(k,F+.1,C,1.2,1.1,.05,2109503,o);for(let V of[-.4,0,.4]){let[O,j]=m(T+V,b+.12);n.caja(O,F-.05,j,.04,1.3,.04,1710618,o)}}let A=(_,T,D,N,k)=>{n.quad(_,T,D,N,k),n.quad(N,D,T,_,k)},w=(_,T,D)=>{let[N,k]=m(_,T);return[N,t+h+.1+D,k]};if(!d&&p()<.4){let _=i/2+.35,T=b+.35,D=1.3;A(w(_,-T,0),w(_,T,0),w(0,T,D),w(0,-T,D),l),A(w(-_,T,0),w(-_,-T,0),w(0,-T,D),w(0,T,D),l),A(w(-_,T,0),w(_,T,0),w(0,T,D),w(0,T,D),Ho(l,.85)),A(w(_,-T,0),w(-_,-T,0),w(0,-T,D),w(0,-T,D),Ho(l,.85))}else if(p()<.3){let[_,T]=m(i*.25,-r*.25);n.caja(_,t+h+.1,T,1.1,1.3,1.1,2832970,o)}if(d){let[_,T]=m(0,b+.2);n.caja(_,t+h+.1,T,i*.7,.9,.1,St.blanco,o),n.caja(_,t+h+.1,T,i*.7,.3,.12,St.azul,o);let[D,N]=m(E+1.5,b+.5);n.caja(D,t+.3,N,1,.9,.6,St.rojo,o),n.caja(D,t+1.2,N,1.04,.08,.64,St.blanco,o);return}let g=[St.rojo,St.amarillo,15231654,16052714];for(let _ of[-i*.38,i*.38]){let[T,D]=m(_,b+1.1);n.caja(T,t+.3,D,1.1,.75,.9,4099649,o);for(let N=0;N<3;N++){let[k,C]=m(_+(N-1)*.35,b+1.1+(p()-.5)*.5);n.caja(k,t+1,C,.18,.18,.18,g[Math.floor(p()*4)],o)}}if(p()<.35){let[_,T]=m(0,b+1.1);n.caja(_,t+2.8,T,i*.9,.1,2.2,Ho(l,.8),o,{techo:l});for(let D of[-i*.42,i*.42]){let[N,k]=m(D,b+2);n.caja(N,t+.3,k,.14,2.5,.14,St.blanco,o)}}if(p()<.65){let _=p()<.5?St.blanco:2369580,T=i/2+.6;for(let D=-T;D<=T+.01;D+=1.4){let[N,k]=m(D,b+3.2);if(f(N,k)&&(n.caja(N,u(N,k)-.1,k,.1,.9,.1,_,o),D<T-.01&&Math.abs(D+.7-E)>.9)){let[C,F]=m(D+.7,b+3.2);n.caja(C,u(C,F)+.5,F,1.4,.07,.05,_,o)}}}}function em(n,e,t){let a=new rt,i={dist:0},r=new et({vertexColors:!0,roughness:.85}),o=n.filter(u=>u.r>0||Bu[u.k]).map(u=>({...u,malla:null,cajas:[]}));function s(u,f,x,y,m,h,b=4){if(u.r&&Math.hypot(f-u.x,x-u.z)>u.r-8)return null;let E=Math.cos(h),v=Math.sin(h),M=[];for(let[w,g]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,0]]){let _=f+w*y/2*E+g*m/2*v,T=x-w*y/2*v+g*m/2*E;if(t.cerca(_,T,i).dist<t.MEDIO+b)return null;M.push(e.altura(_,T))}let A=Math.min(...M);return Math.max(...M)-A>1?null:A-.3}function c(u){let f=mn(),x=Ta([...u.k].reduce((w,g)=>w*31+g.charCodeAt(0)|0,7)),y=[],m=t.cerca(u.x,u.z,i).dist<u.r?Math.atan2(i.tx,i.tz):x()*Math.PI,h=(w,g,_,T,D,N,k,C=k,F)=>{let V=s(u,w,g,_,T,D,F);return V===null?!1:(f.caja(w,V,g,_,N+.3,T,k,D,{techo:C}),y.push({x:w,z:g,c:Math.cos(D),s:Math.sin(D),hx:_/2,hz:T/2}),V)},b=(w,g,_,T,D,N,k)=>{let C=Math.cos(D),F=Math.sin(D),V=(O,j)=>[w+O*C+j*F,k,g-O*F+j*C];f.quad(V(-_/2,-T/2),V(-_/2,T/2),V(_/2,T/2),V(_/2,-T/2),N)},E={alt:e.altura,libre:(w,g)=>t.cerca(w,g,i).dist>t.MEDIO+1.5},v=(w,g)=>[u.x+w*Math.cos(m)+g*Math.sin(m),u.z-w*Math.sin(m)+g*Math.cos(m)];if(u.r){let w=t.cerca(...v(18,0),i).dist>t.cerca(...v(-18,0),i).dist?1:-1,[g,_]=v(w*20,0),T=s(u,g,_,22,22,m,2)??e.altura(g,_);b(g,_,22,22,m,St.pasto,T+.32);let D=(Be,_e,J,z)=>{let[$,pe]=v(w*20+Be,_e);b($,pe,J,z,m,14209732,T+.345)};D(0,0,22,2.2),D(0,0,2.2,22);for(let[Be,_e]of[[-7,-7],[7,-7],[-7,7],[7,7]]){let[J,z]=v(w*20+Be,_e),$=(Be+_e)%14?1:.8;f.caja(J,T,z,.45,2.8,.45,5916210,m),f.caja(J,T+2.4,z,3.2*$,1.2,3.2*$,3107635,m),f.caja(J+.3,T+3.4,z-.2,2.3*$,1.1,2.3*$,Be>0&&_e>0?15234090:4099649,m+.4),f.caja(J-.2,T+4.4,z+.2,1.4*$,.9,1.4*$,Be>0&&_e>0?15764028:5810250,m+.8)}for(let[Be,_e,J]of[[0,6,0],[0,-6,0],[6,0,1],[-6,0,1]]){let[z,$]=v(w*20+Be,_e),pe=m+J*Math.PI/2;f.caja(z,T+.75,$,1.7,.08,.5,St.madera,pe),f.caja(z,T+1,$,1.7,.5,.06,St.madera,pe);for(let ye of[-.7,.7]){let me=Math.cos(pe),Ce=Math.sin(pe);f.caja(z+ye*me,T+.3,$-ye*Ce,.08,.5,.4,St.metal,pe)}}for(let[Be,_e]of[[-10,0],[10,0],[0,-10],[0,10]]){let[J,z]=v(w*20+Be,_e);f.caja(J,T+.3,z,.12,3.6,.12,2830131),f.caja(J,T+3.7,z,.45,.4,.45,16771488)}let[N,k]=v(w*20,0);h(N,k,4.2,4.2,m+Math.PI/4,2.6,St.blanco,St.rojo,0);let C=u.k==="cartago",[F,V]=v(w*37,0),O=C?16:10,j=C?30:18,G=h(F,V,j,O,m+Math.PI/2,C?13:8,C?16052714:St.blanco,C?7109257:St.zincGris,2);if(G!==!1)for(let Be of C?[-5,5]:[0]){let[_e,J]=v(w*(37-j/2+2),Be);f.caja(_e,G,J,3.4,C?26:15,3.4,St.blanco,m,{techo:C?7109257:St.rojo}),f.caja(_e,G+(C?26:15),J,1.6,3,1.6,C?7109257:St.rojo,m)}let[Z,ie]=v(w*20,34),xe=s(u,Z,ie,26,40,m,2);if(xe!==null){b(Z,ie,26,40,m,St.cancha,xe+.32);for(let J of[-1,1]){let[z,$]=v(w*20,34+J*19);f.caja(z,xe+.3,$,7.3,2.4,.12,St.linea,m)}let[Be,_e]=v(w*20,34);b(Be,_e,26,.25,m,St.linea,xe+.34)}let Ee=0;for(let Be=-u.r;Be<=u.r;Be+=11)for(let _e=-u.r;_e<=u.r;_e+=13){if(Math.abs(_e-w*28)<22&&Math.abs(Be-12)<34||x()<.28)continue;let[J,z]=v(_e+(x()-.5)*3,Be+(x()-.5)*3),$=6+x()*4,pe=7+x()*5,ye=x()<.18?2:1,me=x()<.12,Ce=me?15852960:Qf[Math.floor(x()*Qf.length)],Ue=m+(x()<.5?0:Math.PI/2),we=x()<.7?St.zinc:St.zincGris,Je=h(J,z,$,pe,Ue,ye*3-.2,Ce,we);if(Je!==!1&&(Ee++,i_(f,J,Je,z,$,pe,Ue,ye,Ce,we,me,x,E)),Ee>60)break}}if(u.r){let w=t.MEDIO,g=(F,V,O,j,G)=>{f.quad(F,V,O,j,G),f.quad(j,O,V,F,G)};for(let F of t.rutas)for(let V=0;V<F.X.length-1;V++)if(!(Math.hypot(F.X[V]-u.x,F.Z[V]-u.z)>u.r))for(let O of[-1,1]){let j=(G,Z)=>[F.X[G]+F.NX[G]*O*Z,F.Y[G]+.08,F.Z[G]+F.NZ[G]*O*Z];g(j(V,w+.3),j(V+1,w+.3),j(V+1,w+1.7),j(V,w+1.7),13223614)}let _=Uu(t,u.x,u.z),T=14,D=_.x+Math.sin(_.rumbo)*T+_.nx*(w+2.6),N=_.z+Math.cos(_.rumbo)*T+_.nz*(w+2.6),k=e.altura(D,N)-.1,C=_.rumbo;if(Math.hypot(_.x-u.x,_.z-u.z)<u.r){f.caja(D,k+2.4,N,1.5,.12,3.2,St.azul,C,{techo:St.azul}),f.caja(D+_.nx*.6,k,N+_.nz*.6,.08,2.4,3,12572646,C);for(let O of[-1.5,1.5])f.caja(D+Math.sin(C)*O,k,N+Math.cos(C)*O,.1,2.4,.1,St.metal);f.caja(D,k+.5,N,.4,.08,2.4,St.madera,C);let F=D-_.nx*2.2,V=N-_.nz*2.2;f.caja(F,k,V,.1,2.8,.1,St.metal),f.caja(F,k+2.4,V,.1,.6,.7,St.amarillo,C)}}Bu[u.k]?.({s:u,a:f,cajas:y,sobre:h,carreteras:t,terreno:e,q:i});let M=f.geometria();M.computeBoundingSphere();let A=new Fe(M,r);A.castShadow=A.receiveShadow=!0,A.matrixAutoUpdate=!1,A.userData.centro=[u.x,u.z],u.malla=A,u.cajas=y,a.add(A)}function l(u){a.remove(u.malla),u.malla.geometry.dispose(),u.malla=null,u.cajas=[]}function d(u,f){for(let x of o){let y=Math.hypot(u-x.x,f-x.z);!x.malla&&y<t_?c(x):x.malla&&y>n_&&l(x)}}function p(u,f){for(let x of o)if(!(!x.malla||Math.abs(u.x-x.x)>x.r+90||Math.abs(u.z-x.z)>x.r+90))for(let y of x.cajas){let m=u.x-y.x,h=u.z-y.z,b=m*y.c-h*y.s,E=m*y.s+h*y.c,v=y.hx+f,M=y.hz+f;Math.abs(b)>=v||Math.abs(E)>=M||(v-Math.abs(b)<M-Math.abs(E)?b=Math.sign(b||1)*v:E=Math.sign(E||1)*M,u.x=y.x+b*y.c+E*y.s,u.z=y.z-b*y.s+E*y.c)}return u}return{grupo:a,sitios:o,actualizar:d,empujar:p}}function Uu(n,e,t){let a=null,i=1/0;for(let l of n.rutas)for(let d=0;d<l.X.length;d++){let p=Math.hypot(l.X[d]-e,l.Z[d]-t);p<i&&(i=p,a={r:l,i:d})}let{r,i:o}=a,s=Math.min(r.X.length-1,o+1),c=Math.max(0,s-1);return{x:r.X[o],z:r.Z[o],y:r.Y[o],rumbo:Math.atan2(r.X[s]-r.X[c],r.Z[s]-r.Z[c]),nx:r.NX[o],nz:r.NZ[o]}}var Nu=({s:n,a:e,cajas:t,carreteras:a})=>{let i=Uu(a,n.x,n.z),r=a.MEDIO+6,o=i.x+i.nx*r,s=i.z+i.nz*r;e.caja(o,i.y,s,6,3.6,16,15131350,i.rumbo,{techo:3104399}),t.push({x:o,z:s,c:Math.cos(i.rumbo),s:Math.sin(i.rumbo),hx:3,hz:8});let c=i.x+i.nx*(a.MEDIO+1),l=i.z+i.nz*(a.MEDIO+1);e.caja(c,i.y,l,.3,1.2,.3,15320363,i.rumbo);for(let d=0;d<6;d++){let p=(d+.5)/6*2*a.MEDIO;e.caja(c-i.nx*p,i.y+1.05,l-i.nz*p,.12,.12,1.1,d%2?12597547:16053492,i.rumbo+Math.PI/2)}for(let[d,p]of[[0,2051727],[1,16053492],[2,12597547]]){let u=o+i.nx*4+Math.sin(i.rumbo)*(d*2.4-2.4),f=s+i.nz*4+Math.cos(i.rumbo)*(d*2.4-2.4);e.caja(u,i.y,f,.1,7,.1,10133670),e.caja(u,i.y+6,f+.5,.05,1,1.4,p,i.rumbo)}},Bu={penasblancas:Nu,canoas:Nu,sixaola:Nu};Bu.amistad=({s:n,a:e,carreteras:t})=>{let a=Uu(t,n.x,n.z),i=Math.sin(a.rumbo),r=Math.cos(a.rumbo),o=t.MEDIO+.6;for(let c of[-1,1])for(let l=-40;l<40;l+=4)e.caja(a.x+i*l+a.nx*c*o,a.y+.1,a.z+r*l+a.nz*c*o,.25,1.1,4,14277081,a.rumbo);e.caja(a.x+a.nx*(o+1.2),a.y-6,a.z+a.nz*(o+1.2),1.4,30,1.4,15263976,a.rumbo);let s=[a.x+a.nx*(o+1.2),a.y+23,a.z+a.nz*(o+1.2)];for(let c=-36;c<=36;c+=6)if(c){let l=[a.x+i*c+a.nx*o,a.y+1,a.z+r*c+a.nz*o],d=p=>[p[0],p[1]+.14,p[2]];e.quad(s,l,d(l),d(s),16053492),e.quad(d(s),d(l),l,s,16053492)}};function tm(n){let e=[...new Set(n.rutas.map(l=>l.n.match(/Ruta (\d+)/)[1]))],t=document.createElement("canvas");t.width=512,t.height=64;let a=t.getContext("2d"),i=512/e.length;a.font="bold 40px system-ui, Arial, sans-serif",a.textAlign="center",a.textBaseline="middle",e.forEach((l,d)=>{a.fillStyle="#1C6B3A",a.fillRect(d*i,0,i,64),a.fillStyle="#fff",a.fillText(l,d*i+i/2,34),a.strokeStyle="#fff",a.lineWidth=3,a.strokeRect(d*i+3,3,i-6,58)});let r=mn(),o=mn();for(let l of n.rutas){let d=e.indexOf(l.n.match(/Ruta (\d+)/)[1]),p=d/e.length,u=(d+1)/e.length;for(let f=25;f<l.X.length-5;f+=50){let x=n.MEDIO+1.8,y=l.X[f]-l.NX[f]*x,m=l.Z[f]-l.NZ[f]*x,h=l.Y[f];r.caja(y,h-.2,m,.12,2.6,.12,10133670);let b=l.NZ[f],E=-l.NX[f],v=(M,A)=>[y+l.NX[f]*M*.6-b*.08,h+A,m+l.NZ[f]*M*.6-E*.08];o.quad(v(-1,1.9),v(1,1.9),v(1,2.7),v(-1,2.7),16777215,[p,0,u,0,u,1,p,1]),o.quad(v(1,1.9),v(-1,1.9),v(-1,2.7),v(1,2.7),16777215,[p,0,u,0,u,1,p,1])}}let s=new rt,c=new Un(t);return c.colorSpace=Ht,s.add(new Fe(r.geometria(),new et({vertexColors:!0,roughness:.6})),new Fe(o.geometria(),new Tn({map:c}))),s.traverse(l=>{l.matrixAutoUpdate=!1,l.updateMatrix(),l.geometry?.computeBoundingSphere()}),s}var r_=38,o_=5,s_=250,nm=800,zu=900,Ou=9,am=[[8.4,.55],[7.3,.5],[6,.45]],Ic=8;function im(n,e,t,a){let i=t.filter(h=>h.r>0||h.k==="sanjose"),r={},o=null;function s(){if(o)return o;o=[];let h=0;for(let b of n.rutas){let E=0,v=-1;for(let M=1;M<b.X.length;M++){if(E+=Math.hypot(b.X[M]-b.X[M-1],b.Z[M]-b.Z[M-1]),E<r_)continue;E=0;let A=n.MEDIO+o_,w=b.X[M]+b.NX[M]*A,g=b.Z[M]+b.NZ[M]*A,_=i.reduce((D,N)=>{let k=Math.hypot(w-N.x,g-N.z);return k<s_&&k<(D?.d??1e9)?{k:N.k,d:k}:D},null);if(!_||a(w,g)||n.cerca(w,g,r).dist<n.MEDIO+1.5){v=-1;continue}v<0&&h++;let T=Math.hypot(b.NX[M],b.NZ[M])||1;o.push({x:w,z:g,y:e(w,g),tx:-b.NZ[M]/T,tz:b.NX[M]/T,nx:b.NX[M]/T,nz:b.NZ[M]/T,run:h,cerca:_.k}),v=M}}return o}let c=new At(.11,.17,Ou,7).translate(0,Ou/2,0),l=new Gt(c,new et({color:11118236,roughness:.9}),zu);l.count=0,l.frustumCulled=!1;let d=new Float32Array(zu*am.length*Ic*6),p=new ft;p.setAttribute("position",new bt(d,3));let u=new Bn(p,new wn({color:1974308}));u.frustumCulled=!1,p.setDrawRange(0,0);let f=new rt;f.add(l,u);let x=new xt;function y(h,b){let E=0,v=0,M=null;for(let A of s()){if(Math.abs(A.x-h)>nm||Math.abs(A.z-b)>nm||E>=zu){M=null;continue}if(l.setMatrixAt(E++,x.makeTranslation(A.x,A.y-.3,A.z)),M&&M.run===A.run)for(let[w,g]of am)for(let _=0;_<Ic;_++){for(let[T,D]of[[0,_/Ic],[3,(_+1)/Ic]])d[v+T]=M.x+(A.x-M.x)*D,d[v+T+2]=M.z+(A.z-M.z)*D,d[v+T+1]=M.y+(A.y-M.y)*D+w-g*Math.sin(Math.PI*D);v+=6}M=A}l.count=E,l.instanceMatrix.needsUpdate=!0,p.setDrawRange(0,v/3),p.attributes.position.needsUpdate=!0}function m(h,b=4){let E=t.find(T=>T.k===h),v=s().filter(T=>T.cerca===h),M=T=>Math.hypot(T.x-E.x,T.z-E.z),A=T=>Math.hypot(T.x,T.z),w=v.filter((T,D)=>M(T)>E.r+20&&v.slice(D,D+b).length===b&&v.slice(D,D+b).every(N=>N.run===T.run&&M(N)>E.r+20)),g=v.indexOf(w.sort((T,D)=>A(T)-A(D))[0]);if(g<0)throw new Error(`No hay ${b} postes seguidos junto a ${h}`);let _=v.slice(g,g+b);return A(_[0])<=A(_[b-1])?_:_.reverse()}return{grupo:f,postes:s,actualizar:y,tramo:m,ALTO:Ou}}function ko(n,e,t,a,{a:i=1.8,b:r=3.2,s0:o=2.2,T:s=1.3}={}){let c=1-Math.pow(Math.max(0,n)/Math.max(.1,e),4);if(!isFinite(t))return i*c;let l=o+Math.max(0,n*s+n*a/(2*Math.sqrt(i*r)));return i*(c-Math.pow(l/Math.max(.1,t),2))}var at=null,wa=null,Ga=null,Cr=null,Nc=null,Ha=null,jo=null,Gu=null,Dc=null,Rr=null,qo=null,wr=null,Vo=null,$o=null,Wo=null,om=0,sm={},lm=!1,Fc=1,Lc=new Set,cm=.55,l_=-8,c_=n=>10**(n/20);function d_(){try{at?.resume?.()?.catch?.(()=>{})}catch{}}function dm(){if(at){d_();return}try{at=new(window.AudioContext||window.webkitAudioContext),Ga=at.createDynamicsCompressor(),Ga.threshold.value=-6,Ga.knee.value=8,Ga.ratio.value=6,Ga.attack.value=.003,Ga.release.value=.25,Ga.connect(at.destination),wa=at.createGain(),wa.gain.value=lm?0:cm*Fc,wa.connect(Ga),Cr=at.createGain(),Cr.connect(wa),Nc=at.createGain(),Nc.connect(wa),Ha=at.createGain(),Ha.connect(wa),jo=at.createGain(),jo.gain.value=0;let n=at.createConvolver(),e=Math.floor(at.sampleRate*.6),t=at.createBuffer(1,e,at.sampleRate),a=t.getChannelData(0);for(let i=0;i<e;i++)a[i]=(Math.random()*2-1)*Math.exp(-i/(at.sampleRate*.12));n.buffer=t,Gu=at.createGain(),Gu.gain.value=1,Cr.connect(jo).connect(n).connect(Gu).connect(wa),m_(),fm(ku(sm))}catch{at=null}}function um(n){return Fc=Math.max(0,Math.min(1,n)),wa&&!lm&&(wa.gain.value=cm*Fc),Fc}function u_(n,e="general"){return n?Lc.add(e):Lc.delete(e),Ha&&Ha.gain.setTargetAtTime(Lc.size?c_(l_):1,at.currentTime,.15),Lc.size>0}function Vt(n,e,{tipo:t="sine",vol:a=.3,ataque:i=.005,caida:r=null,glide:o=null,retardo:s=0,ui:c=!1}={}){if(!at)return;let l=at.currentTime+s,d=at.createOscillator(),p=at.createGain();d.type=t,d.frequency.setValueAtTime(n,l),o&&d.frequency.exponentialRampToValueAtTime(o,l+e),p.gain.setValueAtTime(0,l),p.gain.linearRampToValueAtTime(a,l+i),p.gain.exponentialRampToValueAtTime(1e-4,l+(r??e)),d.connect(p).connect(c?Nc:Cr),d.start(l),d.stop(l+e+.05)}var Hu=new Map;function pm(n){if(!Hu.has(n)){let e=at.createBuffer(1,2*n,at.sampleRate),t=e.getChannelData(0);for(let a=0;a<2*n;a++)t[a]=Math.random()*2-1;Hu.set(n,e)}return Hu.get(n)}function ha(n,{vol:e=.3,filtro:t="lowpass",f:a=1200,q:i=1,retardo:r=0,ataque:o=.005}={}){if(!at)return;let s=at.currentTime+r,c=Math.floor(at.sampleRate*n),l=at.createBufferSource();l.buffer=pm(c);let d=at.createBiquadFilter();d.type=t,d.frequency.value=a,d.Q.value=i;let p=at.createGain();p.gain.setValueAtTime(0,s),p.gain.linearRampToValueAtTime(e,s+o),p.gain.exponentialRampToValueAtTime(1e-4,s+n),l.connect(d).connect(p).connect(Cr),l.start(s,Math.random()*c/at.sampleRate),l.stop(s+n+.05)}var Et={clic:()=>Vt(880,.06,{tipo:"triangle",vol:.12,ui:!0}),hover:()=>Vt(1320,.03,{tipo:"sine",vol:.04,ui:!0}),ok:()=>{Vt(660,.12,{vol:.2,ui:!0}),Vt(990,.18,{vol:.2,retardo:.09,ui:!0})},logro:()=>[523,659,784,1047].forEach((n,e)=>Vt(n,.25,{tipo:"triangle",vol:.18,retardo:e*.09,ui:!0})),error:()=>{Vt(220,.22,{tipo:"sawtooth",vol:.14,glide:140})},alerta:()=>{Vt(1046,.09,{tipo:"square",vol:.07}),Vt(1046,.09,{tipo:"square",vol:.07,retardo:.16})},stop:()=>{Vt(392,.12,{tipo:"square",vol:.12}),Vt(294,.25,{tipo:"square",vol:.12,retardo:.12})},cono:()=>{ha(.12,{vol:.25,f:500}),Vt(160,.12,{vol:.2,glide:90})},metal:()=>{Vt(1800+Math.random()*300,.25,{tipo:"triangle",vol:.06}),Vt(2600,.15,{vol:.03})},paso:()=>ha(.08,{vol:.12,f:700+Math.random()*300}),cuerda:()=>ha(.35,{vol:.12,filtro:"bandpass",f:2200,q:2,ataque:.1}),chasquido:()=>{ha(.09,{vol:.6,filtro:"highpass",f:2500}),Vt(3200,.05,{tipo:"square",vol:.15})},golpe:()=>{ha(.4,{vol:.6,f:260}),Vt(70,.4,{vol:.5,glide:40})},tir\u00F3n:()=>{Vt(140,.3,{tipo:"sawtooth",vol:.2,glide:90}),ha(.25,{vol:.25,f:900})},trueno:()=>{ha(2.6,{vol:.7,f:160,ataque:.05}),ha(1.2,{vol:.4,f:600,retardo:.05})},tension:()=>Vt(180,.5,{tipo:"sawtooth",vol:.07,glide:420}),bocina:()=>{Vt(392,.35,{tipo:"square",vol:.12}),Vt(494,.35,{tipo:"square",vol:.1})},clip:()=>{Vt(1500,.05,{tipo:"square",vol:.08}),ha(.05,{vol:.15,filtro:"highpass",f:3e3,retardo:.02})},presion:()=>ha(.18,{vol:.1,filtro:"bandpass",f:1400,q:1.2}),insignia:()=>{[784,988,1319].forEach((n,e)=>Vt(n,.22,{tipo:"sine",vol:.16,retardo:e*.07,ui:!0}))},motosierra:()=>{ha(.9,{vol:.16,f:240}),Vt(96,.9,{tipo:"sawtooth",vol:.07,glide:120})}},rm={calle:{transito:1,viento:1,lluvia:1,reverb:0,zumbido:1},ducto:{transito:0,viento:0,lluvia:0,reverb:.3,zumbido:0},neutro:{transito:0,viento:1,lluvia:1,reverb:0,zumbido:0}},p_={aereo:"calle",techo:"calle",media:"calle",poste:"calle",poda:"calle",ducto:"ducto"},h_={aereo:.6,techo:.5,media:.5,poste:.5,poda:.3};function f_(n){let e=/^(\d{1,2})/.exec(n??"");if(!e)return .6;let t=+e[1];return t>=7&&t<9||t>=16&&t<19?1:t>=9&&t<16?.7:t>=19&&t<22?.4:.15}function ku(n={}){let e=n.tipo??"aereo",t=rm[n.ambiente]?n.ambiente:p_[e]??"neutro",a=rm[t],i=/avenida/i.test(n.lugar??"")?1.3:1,r=(h_[e]??.5)*f_(n.hora)*i,o=Number.isFinite(n.viento)?n.viento:0,s=Math.max(0,Math.min(1,(o-8)/34));return{perfil:t,transito:Math.min(1,r)*a.transito*.09,viento:s*a.viento*.2,lluvia:a.lluvia,reverb:a.reverb*.6,zumbido:a.zumbido*.012}}var hm=null;function m_(){if(Dc||!at)return;let n=3,e=Math.floor(at.sampleRate*n),t=pm(e),a=()=>{let p=at.createBufferSource();return p.buffer=t,p.loop=!0,p.start(0,Math.random()*n),p};Dc=a();let i=at.createBiquadFilter();i.type="bandpass",i.frequency.value=3e3,i.Q.value=.4,Rr=at.createGain(),Rr.gain.value=0,Dc.connect(i).connect(Rr).connect(Ha);let r=a(),o=at.createBiquadFilter();o.type="lowpass",o.frequency.value=400,qo=at.createGain(),qo.gain.value=0,r.connect(o).connect(qo).connect(Ha);let s=a(),c=at.createBiquadFilter();c.type="bandpass",c.frequency.value=500,c.Q.value=.6,wr=at.createGain(),wr.gain.value=0,Vo=at.createOscillator(),Vo.frequency.value=.2,$o=at.createGain(),$o.gain.value=0,Vo.connect($o).connect(wr.gain),s.connect(c).connect(wr).connect(Ha),Vo.start();let l=at.createOscillator();l.type="triangle",l.frequency.value=55;let d=at.createBiquadFilter();d.type="lowpass",d.frequency.value=160,Wo=at.createGain(),Wo.gain.value=0,l.connect(d).connect(Wo).connect(Ha),l.start(),hm={lfo:Vo,fuentes:[Dc,r,s,l]}}function fm(n){if(!at||!Rr)return;let e=at.currentTime;Rr.gain.setTargetAtTime(om*.35*n.lluvia,e,.6),qo.gain.setTargetAtTime(n.viento,e,.8),wr.gain.setTargetAtTime(n.transito,e,1.2),$o.gain.setTargetAtTime(n.transito*.5,e,1.2),Wo.gain.setTargetAtTime(n.zumbido,e,1.2),jo.gain.setTargetAtTime(n.reverb,e,.3)}function mm(n){om=Math.max(0,Math.min(1,n)),at&&fm(ku(sm))}function g_(){return at?{ctx:at,compresor:Ga,maestro:wa,efectos:Cr,interfaz:Nc,ambiente:Ha,sala:jo,ambiente_:{lluvia:Rr,viento:qo,transito:wr,zumbido:Wo,lfo:$o,lfoFuente:hm?.lfo}}:null}typeof window<"u"&&(window.__audio={grafo:g_,ducking:u_,nivelesAmbiente:ku});var x_=26,gm=420,b_=1.8,xm=40,Vu=1400,bm=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534,14254635];function vm({escena:n,carreteras:e,terreno:t,meta:a,flota:i}){let r=Ta(99),o=new rt;n.add(o);let s=e.rutas,c=Array.from({length:x_},(C,F)=>({ruta:0,s:0,sentido:1,v:0,v0:0,x:0,z:0,y:0,rumbo:0,camion:F%6===0,vivo:!1}));c.forEach((C,F)=>{C.g=i.registrar(C.camion?15131350:bm[F%bm.length],C.camion,C.camion?5.4:4.3),C.g.visible=!1});let l=new Oe,d=new _t;function p(C){let F=s[C.ruta],V=F.X.length-1,O=Math.max(0,Math.min(V-1e-6,C.s)),j=Math.floor(O),G=O-j,Z=-b_*C.sentido;C.x=F.X[j]+(F.X[j+1]-F.X[j])*G+F.NX[j]*Z,C.z=F.Z[j]+(F.Z[j+1]-F.Z[j])*G+F.NZ[j]*Z,C.y=F.Y[j]+(F.Y[j+1]-F.Y[j])*G+.12,C.rumbo=Math.atan2(F.X[j+1]-F.X[j],F.Z[j+1]-F.Z[j])+(C.sentido<0?Math.PI:0)}function u(C,F,V){for(let O=0;O<30;O++){let j=Math.floor(r()*s.length),G=s[j],Z=Math.floor(r()*(G.X.length-2)),ie=Math.hypot(G.X[Z]-F,G.Z[Z]-V);if(!(ie<100||ie>gm)){Object.assign(C,{ruta:j,s:Z+r(),sentido:r()<.5?1:-1,vivo:!0,v0:(C.camion?13:17)+r()*5}),C.v=C.v0*.8,p(C);return}}C.vivo=!1}function f(C,F,V,O){let j=0;for(let G of c){if((!G.vivo||Math.hypot(G.x-F,G.z-V)>gm+60)&&u(G,F,V),G.g.visible=!1,!G.vivo)continue;let Z=1/0,ie=0,xe=Math.sin(G.rumbo),Ee=Math.cos(G.rumbo);for(let _e of c){if(_e===G||!_e.vivo||_e.ruta!==G.ruta||_e.sentido!==G.sentido)continue;let J=(_e.s-G.s)*G.sentido*8-5;J>-4&&J<Z&&(Z=Math.max(.1,J),ie=G.v-_e.v)}for(let _e of O){let J=_e.x-G.x,z=_e.z-G.z,$=J*xe+z*Ee,pe=Math.abs(J*Ee-z*xe);$>0&&pe<1.8&&$-3<Z&&(Z=Math.max(.1,$-3),ie=G.v)}let Be=ko(G.v,G.v0,Z,ie);if(G.v=Math.max(0,G.v+Be*C),G.s+=G.sentido*G.v*C/8,G.s<=0||G.s>=s[G.ruta].X.length-1){G.vivo=!1;continue}p(G),G.g.visible=!0,G.g.position.set(G.x,G.y-.1,G.z),G.g.rotation.y=G.rumbo-Math.PI/2,G.g.userData.freno.emissiveIntensity=Be<-.6?1:0,j++}}let x=Array.from({length:xm},()=>({x:1e9,z:0,y:0,rumbo:0,meta:0,t:0})),y=mn(),m=15921128,h=2762276,b=(C,F,V,O,j,G,Z)=>y.caja(C,F-j/2,V,O,j,G,Z);b(0,1,0,.75,.8,1.7,m),b(0,1.05,.25,.77,.55,.7,h),b(0,1.25,1.05,.42,.45,.5,m),b(0,1.12,1.32,.3,.2,.18,14263194);for(let[C,F]of[[.25,.6],[-.25,.6],[.25,-.6],[-.25,-.6]])b(C,.31,F,.14,.62,.14,m);let E=new Gt(y.geometria(),new et({vertexColors:!0,roughness:.9}),xm);E.frustumCulled=!1,o.add(E);let v={dist:0},M=[16777215,13214334,15260872,9202256],A=(C,F)=>{let V=t.altura(C,F),O=t.muestra;return O.e>15&&O.e<1800&&O.llano<.1&&O.pend*t.EX<.5&&e.cerca(C,F,v).dist>14?V:null};function w(C,F,V){x.forEach((O,j)=>{if(Math.hypot(O.x-F,O.z-V)>260){let Z=Math.floor(j/4),ie=Z*2.4+r()*.5,xe=70+Z%5*35,Ee=F+Math.cos(ie)*xe+r()*10,Be=V+Math.sin(ie)*xe+r()*10,_e=A(Ee,Be);if(_e===null){O.x=1e9;return}Object.assign(O,{x:Ee,z:Be,y:_e,rumbo:r()*6.3,meta:r()*6.3,t:r()*8}),E.setColorAt(j,l.set(M[j%4]))}O.t-=C,O.t<0&&(O.t=4+r()*8,O.meta=O.rumbo+(r()-.5)*2);let G=O.t>5;if(O.rumbo+=(O.meta-O.rumbo)*Math.min(1,C),G){let Z=O.x+Math.sin(O.rumbo)*.4*C,ie=O.z+Math.cos(O.rumbo)*.4*C,xe=A(Z,ie);xe!==null?(O.x=Z,O.z=ie,O.y=xe):(O.rumbo+=Math.PI,O.meta=O.rumbo,O.t=4)}d.position.set(O.x,O.y,O.z),d.rotation.set(0,O.rumbo,0),d.scale.set(1,1,1),d.updateMatrix(),E.setMatrixAt(j,d.matrix)}),E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0)}let g=new Float32Array(Vu*6),_=new ft;_.setAttribute("position",new bt(g,3));let T=new Bn(_,new wn({color:12571622,transparent:!0,opacity:.55}));T.frustumCulled=!1,o.add(T);for(let C=0;C<Vu;C++)g[C*6]=(r()-.5)*60,g[C*6+1]=r()*30,g[C*6+2]=(r()-.5)*60;let D={lluvia:0,meta:0,niebla:0,region:"",reloj:0};function N(C,F){let V=a.lon0+C/a.kx,O=a.lat0-F/a.kz;t.relieve(C,F);let j=t.muestra.e,G=V>-84&&O>9.4,Z=O<9.3,ie=V<-84.9&&O>9.85;return{humedad:ie?.1:G?.75:Z?.6:.35,neblina:j>1400?Math.min(1,(j-1400)/1200):0,nombre:ie?"seco":G?"Caribe":Z?"zona sur":"Valle Central"}}function k(C,F,V){D.reloj-=C;let O=N(F.position.x,F.position.z);D.region=O.nombre,D.reloj<0&&(D.reloj=40+r()*60,D.meta=r()<O.humedad?.4+r()*.6:0),V!==null&&(D.meta=V),D.lluvia+=(D.meta-D.lluvia)*Math.min(1,C*.3),D.niebla+=(O.neblina-D.niebla)*Math.min(1,C*.5);let j=Math.round(Vu*D.lluvia);for(let G=0;G<j;G++){let Z=g[G*6+1]-22*C;Z<-4&&(Z=26,g[G*6]=(r()-.5)*60,g[G*6+2]=(r()-.5)*60),g[G*6+1]=Z,g[G*6+3]=g[G*6]+.05,g[G*6+4]=Z-.7,g[G*6+5]=g[G*6+2]}return _.setDrawRange(0,j*2),_.attributes.position.needsUpdate=!0,T.position.set(F.position.x,F.position.y-8,F.position.z),mm(D.lluvia),D}return{grupo:o,autos:c,vacas:x,clima:D,cada(C,F,V,O,j,G=null){return f(C,V,O,j),w(C,V,O),k(C,F,G)}}}var ym=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534],Xo=4.2;function _m(n,e,t,a){let i=Ta(7),r=-40,o=n.largo+80,s=[];for(let m=0;m<t;m++)s.push({d:r+o*m/t+i()*4,a:Ec,v:5,v0:5.5+i()*2.5,x:0,z:0,rumbo:0});let c=e.estacionamiento,l=[];for(let m=0;m<c.n;m++){let h=c.d0+(m+.5)*c.paso;i()<.55&&Math.abs(h-e.dPick)>6.2&&Math.abs(h-e.trabajo.d)>7&&l.push({d:h,a:c.a,v:0,x:0,z:0,rumbo:0})}for(let m of l)e.cajas.push({d0:m.d-Xo/2,d1:m.d+Xo/2,a0:m.a-.9,a1:m.a+.9});let d=[...s,...l],p=d.length,u=d.map((m,h)=>a.registrar(ym[Math.floor(i()*ym.length)],h%4===3,Xo)),f={};function x(m){let h=d[m];n.en(h.d,h.a,f),h.x=f.x,h.z=f.z,h.rumbo=Math.atan2(f.tx,f.tz),u[m].position.set(f.x,0,f.z),u[m].rotation.y=h.rumbo-Math.PI/2}for(let m=0;m<p;m++)x(m);function y(m,h){let b=s.length;for(let E=0;E<b;E++){let v=s[E],M=s[(E+1)%b],A=b>1?(M.d-v.d+o)%o-Xo-.4:1/0,w=b>1?v.v-M.v:0;for(let _ of h){if(Math.abs(_.a-v.a)>1.9)continue;let T=(_.d-v.d+o)%o-Xo/2-1.2;T<A&&T<40&&(A=T,w=v.v)}let g=ko(v.v,v.v0,Math.max(.1,A),w);u[E].userData.freno.emissiveIntensity=g<-.6||v.v<.3?1:0,v.v=Math.max(0,v.v+g*m),v.d+=v.v*m,v.d>r+o&&(v.d-=o),x(E)}}return{todos:d,cada:y}}var Sm="./datos-GBQ7LNXL.woff2";var Em="./datos-2TPSQG6S.woff2";var Mm="./datos-ZMVHH4FS.woff2";var Am="./datos-IYAZYUDK.woff2";var dA=Promise.all([[Sm,500],[Em,700],[Mm,800],[Am,900]].map(([n,e])=>new FontFace("Montserrat",`url(${n})`,{weight:String(e)}).load().then(t=>document.fonts.add(t)).catch(()=>{})));function M_(n,e){let t={pintura:[],vidrio:[],reja:[],rueda:[],luz:[],freno:[]},a=(s,c,l,d,p,u,f)=>new xt().compose(new B(s,c,l),new Xn().setFromEuler(new Yn(d,0,0)),new B(p,u,f)),i=(s,c,l,d,p,u)=>a(s,c,l,0,d,p,u);t.pintura.push(i(0,.62,0,n,.72,1.85)),e?(t.pintura.push(i(.75,1.25,0,1.9,.78,1.7),i(-1.15,1.18,.85,1.7,.35,.06),i(-1.15,1.18,-.85,1.7,.35,.06)),t.reja.push(i(-1.15,.98,0,1.7,.08,1.7))):t.pintura.push(i(-.2,1.2,0,2.3,.7,1.65));let r=e?.75:-.2,o=e?1.7:2;t.vidrio.push(i(r,1.22,0,o,.5,1.68)),t.pintura.push(i(r,1.55,0,o+.1,.08,1.7));for(let s of[-1,1])for(let c of[-1,1])t.rueda.push(a(s*n*.32,.36,c*.88,Math.PI/2,.36,.26,.36));return t.luz.push(i(n/2,.7,.62,.06,.16,.4),i(n/2,.7,-.62,.06,.16,.4)),t.freno.push(i(-n/2,.7,.62,.06,.14,.4),i(-n/2,.7,-.62,.06,.14,.4)),t.reja.push(i(n/2+.02,.38,0,.12,.2,1.8),i(-n/2-.02,.38,0,.12,.2,1.8)),t}function Tm(n,e,t){let a=["pintura","vidrio","reja","rueda","luz","freno"],i={pintura:5,vidrio:1,reja:3,rueda:4,luz:2,freno:2},r={pintura:new Pe(1,1,1),vidrio:new Pe(1,1,1),reja:new Pe(1,1,1),rueda:new At(1,1,1,14),luz:new Pe(1,1,1),freno:new Pe(1,1,1)},o={pintura:new et({color:16777215,roughness:.35,metalness:.45}),vidrio:t.vidrio,reja:t.reja,rueda:t.reja,luz:new et({color:16774864,emissive:8943445,roughness:.6})},s=new et({color:13840175,emissive:16719904,emissiveIntensity:.25,roughness:.6}),c=new et({color:13840175,emissive:16719904,emissiveIntensity:1.6,roughness:.6}),l={};for(let y of a)l[y]=new Gt(r[y],y==="freno"?s:o[y],n*i[y]);let d=new Gt(r.freno,c,n*i.freno),p=new xt().makeScale(0,0,0),u=new xt,f=new Oe,x=[];for(let y of[...a,"encendido"]){let m=y==="encendido"?d:l[y];m.frustumCulled=!1,m.matrixAutoUpdate=!1,e.add(m);for(let h=0;h<m.count;h++)m.setMatrixAt(h,p);if(y==="pintura")for(let h=0;h<m.count;h++)m.setColorAt(h,f.set(16777215))}return{registrar(y,m,h){let b=x.length,E=new rt,v={on:!1};E.userData={freno:{set emissiveIntensity(A){v.on=A>.5}},largo:h},e.add(E);let M=M_(h,m);x.push({g:E,estado:v,partes:M,i:b});for(let A=0;A<i.pintura;A++)l.pintura.setColorAt(b*i.pintura+A,f.set(y));return l.pintura.instanceColor.needsUpdate=!0,E},actualizar(){for(let y of x){y.g.updateMatrix();let m=y.g.visible;for(let h of a)for(let b=0;b<i[h];b++){let E=y.i*i[h]+b,v=y.partes[h][b];if(h==="freno"){let M=m&&y.estado.on,A=m&&!y.estado.on;l.freno.setMatrixAt(E,v&&A?u.multiplyMatrices(y.g.matrix,v):p),d.setMatrixAt(E,v&&M?u.multiplyMatrices(y.g.matrix,v):p)}else l[h].setMatrixAt(E,v&&m?u.multiplyMatrices(y.g.matrix,v):p)}}for(let y of a)l[y].instanceMatrix.needsUpdate=!0;d.instanceMatrix.needsUpdate=!0}}}var ju=.16,Bc=56,Uc=n=>Math.abs(n)<ju?0:(n-Math.sign(n)*ju)/(1-ju);function wm(n,e){let t=new Set,a=new Set,i={mx:0,mz:0,gx:0,gy:0,correr:!1,accion:!1,vista:!1,origen:yr?"t\xE1ctil":"teclado y rat\xF3n"},r=0,o=0,s={sensibilidad:1,invertir:!1};addEventListener("keydown",b=>{b.repeat||(t.add(b.code),i.origen="teclado y rat\xF3n",b.target?.tagName!=="INPUT"&&(b.code==="KeyE"&&a.add("accion"),b.code==="KeyV"&&a.add("vista"),b.code==="KeyR"&&a.add("radio"),b.code==="KeyM"&&a.add("mapa"),b.code==="KeyP"&&a.add("pausa"),b.code==="KeyH"&&a.add("bocina")))}),addEventListener("keyup",b=>t.delete(b.code)),addEventListener("blur",()=>t.clear());let c=(...b)=>b.some(E=>t.has(E))?1:0;n.addEventListener("click",()=>{!yr&&document.pointerLockElement!==n&&n.requestPointerLock?.()?.catch?.(()=>{})}),addEventListener("mousemove",b=>{document.pointerLockElement===n&&(r+=b.movementX*.0024,o-=b.movementY*.0024)});let l={id:null,x0:0,y0:0,x:0,y:0},d={id:null,x:0,y:0},p=document.createElement("div"),u=document.createElement("div");p.className="mu-base",u.className="mu-perilla",p.append(u),p.hidden=!0,e.append(p),n.style.touchAction="none",n.addEventListener("pointerdown",b=>{b.pointerType==="touch"&&(i.origen="t\xE1ctil",b.clientX<innerWidth*.45&&l.id===null?(Object.assign(l,{id:b.pointerId,x0:b.clientX,y0:b.clientY,x:0,y:0}),p.style.left=b.clientX+"px",p.style.top=b.clientY+"px",u.style.transform="",p.hidden=!1):d.id===null&&Object.assign(d,{id:b.pointerId,x:b.clientX,y:b.clientY}))}),n.addEventListener("pointermove",b=>{if(b.pointerId===l.id){let E=(b.clientX-l.x0)/Bc,v=(b.clientY-l.y0)/Bc,M=Math.hypot(E,v);M>1&&(E/=M,v/=M),l.x=E,l.y=v,u.style.transform=`translate(${E*Bc}px, ${v*Bc}px)`}else b.pointerId===d.id&&(r+=(b.clientX-d.x)*.0052,o-=(b.clientY-d.y)*.0052,d.x=b.clientX,d.y=b.clientY)});let f=b=>{b.pointerId===l.id&&(l.id=null,l.x=l.y=0,p.hidden=!0),b.pointerId===d.id&&(d.id=null)};if(n.addEventListener("pointerup",f),n.addEventListener("pointercancel",f),yr)for(let[b,E,v]of[["pausa","\u23F8","Pausa"],["mapa","\u{1F5FA}","Mapa"],["radio","\u{1F4FB}","Radio"],["vista","\u{1F441}","Cambiar de vista"],["accion","\u270B","Acci\xF3n"]]){let M=document.createElement("button");M.className="mu-boton mu-"+b,M.textContent=E,M.setAttribute("aria-label",v),M.addEventListener("pointerdown",A=>{A.preventDefault(),a.add(b)}),e.append(M)}let x={},y={0:"accion",1:"atras",2:"radio",3:"vista",4:"bocina",8:"mapa",9:"pausa",12:"arriba",13:"abajo"};function m(b){let E=null;try{E=Array.from(navigator.getGamepads?.()??[]).find(D=>D?.connected&&D.mapping==="standard")}catch{}if(!E)return null;let v=Uc(E.axes[2]),M=Uc(E.axes[3]);(v||M)&&(r+=v*2.6*b,o-=M*1.9*b);let A=!1;for(let D in y){let N=!!E.buttons[D]?.pressed;N&&!x[D]&&(a.add(y[D]),A=!0),x[D]=N}let w=Uc(E.axes[0]),g=-Uc(E.axes[1]),_=!!(E.buttons[6]?.pressed||E.buttons[10]?.pressed),T=g>.6?"arriba":g<-.6?"abajo":null;return T&&x.pal!==T&&a.add(T),x.pal=T,(w||g||v||M||A)&&(i.origen="control"),{mx:w,mz:g,correr:_}}function h(b){let E=c("KeyD","ArrowRight")-c("KeyA","ArrowLeft"),v=c("KeyW","ArrowUp")-c("KeyS","ArrowDown"),M=!!c("ShiftLeft","ShiftRight");l.id!==null&&(E=l.x,v=-l.y,M=Math.hypot(E,v)>.92);let A=m(b);A&&(A.mx||A.mz)&&(E=A.mx,v=A.mz,M=A.correr);let w=Math.hypot(E,v);w>1&&(E/=w,v/=w),i.mx=E,i.mz=v,i.correr=M,i.gx=r*s.sensibilidad,i.gy=o*s.sensibilidad*(s.invertir?-1:1),r=o=0;for(let g of["accion","vista","radio","mapa","pausa","bocina","atras","arriba","abajo"])i[g]=a.has(g);return a.clear(),i}return{leer:h,pulsar:b=>a.add(b),mirada:s}}var A_=`
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
`;function Cm(){let n=document.createElement("style");n.textContent=A_,document.head.append(n);let e=document.createElement("div");return e.className="mu-capa",document.body.append(e),e}function Rm(n,e){let t=document.createElement("div");t.className="mu-diag",t.hidden=!e;let a=document.createElement("div"),i=document.createElement("button");return i.textContent="Copiar diagn\xF3stico",i.addEventListener("click",async()=>{let r=`${a.textContent}
${navigator.userAgent}
${innerWidth}\xD7${innerHeight} \xB7 dpr ${devicePixelRatio}`;try{await navigator.clipboard.writeText(r),i.textContent="Copiado \u2713"}catch{i.textContent="No se pudo copiar"}setTimeout(()=>{i.textContent="Copiar diagn\xF3stico"},2e3)}),t.append(a,i),n.append(t),addEventListener("keydown",r=>{r.code==="F3"&&(r.preventDefault(),t.hidden=!t.hidden)}),{escribir:r=>{a.textContent=r},mostrar:r=>{t.hidden=!r}}}var ci={inspeccion:"GS-101 \xB7 Inspecci\xF3n de poster\xEDa (\xA75.6.3) \xB7 p. 21",demarcacion:"GS-101 \xB7 Demarcaci\xF3n (\xA75.6.2) \xB7 p. 21",equipo:"GS-101 \xB7 Trabajo seguro en postes (\xA75.6.1) \xB7 pp. 20\u201321"},Pm={a:{texto:"El poste parece obviamente inseguro.",corto:"Poste obviamente inseguro",material:null,aplicaAntesDeSubir:!0,dibujable:!1},b:{texto:"El poste se mueve.",corto:"Poste que se mueve",material:null,aplicaAntesDeSubir:!0,dibujable:!1},c:{texto:"El poste est\xE1 inclinado.",corto:"Poste inclinado",material:null,aplicaAntesDeSubir:!0,dibujable:!0},d:{texto:"La base del poste se alter\xF3 mientras se trabajaba arriba.",corto:"Base alterada",material:null,aplicaAntesDeSubir:!1,dibujable:!1},e:{texto:"Al despojar el poste de algunos cables y retenidas, se observa que est\xE1 soportado por los cables.",corto:"Soportado por los cables",material:null,aplicaAntesDeSubir:!1,dibujable:!1},f:{texto:"El terreno presenta deslizamientos.",corto:"Deslizamiento del terreno",material:null,aplicaAntesDeSubir:!0,dibujable:!1},g:{texto:"Poste de madera con fisuras, quemado o podrido: el da\xF1o no debe superar una tercera parte del di\xE1metro. Tampoco nudos con agrietamiento, ni agrietamientos a lo largo que comprometan m\xE1s de una tercera parte del poste.",corto:"Madera fisurada o podrida",material:"madera",aplicaAntesDeSubir:!0,dibujable:!0},h:{texto:"Poste de metal con oxidaci\xF3n que supera una tercera parte del di\xE1metro, o con perforaciones superiores a una tercera parte del di\xE1metro, o con una l\xEDnea el\xE9ctrica en posible contacto directo con el poste.",corto:"Metal oxidado o perforado",material:"metal",aplicaAntesDeSubir:!0,dibujable:!0}},RA=Object.keys(Pm).filter(n=>Pm[n].aplicaAntesDeSubir);var DA=typeof __URL_PUBLICA__=="string"?__URL_PUBLICA__:globalThis.process?.env?.URL_PUBLICA||"https://ruben1155.github.io/cuadrilla-segura/",LA=typeof __PREFIJO__=="string"?__PREFIJO__:globalThis.process?.env?.PREFIJO_ALMACEN||"cuadrilla-segura:";var qu={url:"https://okhbiliodjuofzsjkolg.supabase.co",llave:"sb_publishable_F3-PMi9uLDPR655ZOCs60g_m0S_C6Ec"};var K={altura:"GS-101 \xB7 Trabajo seguro en alturas",escaleras:"GS-101 \xB7 Trabajo seguro en escaleras port\xE1tiles",amarre:"GS-101 \xB7 Paso a paso para el aseguramiento de la escalera a un poste",epp:"GS-101 \xB7 Uso de equipo de protecci\xF3n personal",general:"GS-101 \xB7 Lineamientos en seguridad general",electrico:"GS-101 \xB7 Trabajo seguro en proximidad de l\xEDneas energizadas",demarcacion:"GS-101 \xB7 Demarcaci\xF3n y se\xF1alizaci\xF3n del \xE1rea",emergencias:"GS-101 \xB7 Emergencias en trabajos en alturas",suspender:"GS-101 \xB7 Suspensi\xF3n de labores ante peligro no controlado",vehiculos:"GS-101 \xB7 Seguridad en la conducci\xF3n de veh\xEDculos",carga:"GS-101 \xB7 Lineamientos generales: manipulaci\xF3n de cargas",cuadrillas:"GS-101 \xB7 Cuadrillas de trabajo",reportes:"GS-101 \xB7 Reporte de incidentes y accidentes laborales",freno:"GS-101 \xB7 Equipo para trabajo en postes (freno para cuerda) \xB7 pr\xE1ctica de la cuadrilla: el freno va a la argolla frontal",m_altura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable",m_prep:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 Preparaci\xF3n antes de instalar",m_gaza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.8 Gazas, herrajes y accesorios",m_tension:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n",m_radio:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura",m_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.24 Rollos de reserva en redes a\xE9reas",m_rollo_poste:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de red en el poste (di\xE1metro del rollo de 40 a 50 cm)",m_calco:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas",m_preform:"Manual MNO-DS-GE-001 \xB7 Anexo 3: uso de preformados seg\xFAn di\xE1metro del cable",m_colores:"Manual MNO-DS-GE-001 \xB7 Anexo 4: c\xF3digo de colores EIA/TIA-598",m_cierre:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme",m_pruebas:"Manual MNO-DS-GE-001 \xB7 \xA76.7 Pruebas de aceptaci\xF3n",m_balona:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.6 Balona",m_postes:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.3.2 Distancia entre postes",m_ferrea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.5 Cruce de l\xEDnea f\xE9rrea",m_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 Preparaci\xF3n y limpieza de registros",m_subterranea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.2 y \xA76.2.1.3 Instalaci\xF3n subterr\xE1nea y selecci\xF3n de ductos",m_reserva_sub:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 Rollos de reserva en registros",m_tapas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.5 Dispositivos de seguridad de las tapas",poda_transito:"GS-101 \xB7 \xA75.6.10 n) Poda de \xE1rboles: en v\xEDas de alto tr\xE1nsito se pide colaboraci\xF3n a entidades como tr\xE1nsito \xB7 p. 40",confinado:"GS-101 \xB7 T\xE9rminos: espacio confinado",t_techo:"GS-101 \xB7 \xA75.6.7 Trabajo seguro en techos \xB7 p\xE1g. 30",t_techo_epp:"GS-101 \xB7 \xA75.6.7 Equipo de protecci\xF3n personal en techos \xB7 p\xE1g. 30",t_techo_escalera:"GS-101 \xB7 \xA75.6.7 a\u2013c Escalera para acceder al techo \xB7 p\xE1g. 30",t_techo_anclaje:"GS-101 \xB7 \xA75.6.7 d\u2013f Anclaje y l\xEDnea de vida provisional \xB7 p\xE1g. 30\u201331",t_techo_traslado:"GS-101 \xB7 \xA75.6.7 g Traslado al techo y descenso anclado \xB7 p\xE1g. 31",t_techo_caminar:"GS-101 \xB7 \xA75.6.7 h\u2013j Caminar en el techo y l\xE1minas \xB7 p\xE1g. 32",t_techo_clima:"GS-101 \xB7 \xA75.6.7 n Condiciones clim\xE1ticas adversas \xB7 p\xE1g. 33",t_techo_peligro:"GS-101 \xB7 \xA75.6.7 p Zonas inseguras del techo \xB7 p\xE1g. 33",t_escalera_base:"GS-101 \xB7 \xA75.6.4 g Escaleras port\xE1tiles: per\xEDmetro de 2 m \xB7 p\xE1g. 22\u201323",t_escalera_tres:"GS-101 \xB7 \xA75.6.4 Nota: tres pelda\xF1os superiores prohibidos \xB7 p\xE1g. 22",t_escalera_sola:"GS-101 \xB7 \xA75.6.4 i Un solo trabajador sobre la escalera \xB7 p\xE1g. 23",mt_epp:"GS-101 \xB7 5.6.9 EPP para trabajo en proximidad de l\xEDneas energizadas \xB7 p. 34",mt_identificar:"GS-101 \xB7 5.6.9 c) y observaciones 1 y 2 \xB7 p. 35",mt_distancias:"GS-101 \xB7 5.6.9 b) Distancias de instalaci\xF3n con el secundario (40 cm) y el neutro (80 cm) \xB7 p. 35",mt_tabla4:"GS-101 \xB7 5.6.9 e) Tabla N\xB0 4, distancias m\xEDnimas de seguridad \xB7 p. 37",mt_suspender:"GS-101 \xB7 5.6.9 f) Telecomunicaciones a menos de 80 cm de la primaria MT, en contacto con el secundario o al nivel de este \xB7 p. 37",mt_senal:"GS-101 \xB7 5.6.9 g) Se\xF1alizaci\xF3n del \xE1rea de trabajo a nivel de suelo \xB7 p. 37",mt_activa:"GS-101 \xB7 5.6.9 h) Todas las l\xEDneas el\xE9ctricas se consideran activas \xB7 p. 38",mt_frontera:"GS-101 \xB7 5.2 w) Fronteras de aproximaci\xF3n: solo personas calificadas cruzan el l\xEDmite \xB7 p. 12",mt_escalera:"GS-101 \xB7 5.6.4 q) Escaleras de abrir de fibra de vidrio; nota sobre escaleras de aluminio \xB7 p. 23",mt_guante_cuero:"GS-101 \xB7 5.3.4 b) Los guantes de cuero no son para trabajos en presencia de tensi\xF3n \xB7 p. 15",mt_rigidez:"GS-101 \xB7 5.1 d) Buena rigidez diel\xE9ctrica: no sujetarse de estructuras met\xE1licas cercanas \xB7 p. 9",poda_epp:"GS-101 \xB7 \xA75.6.10 d) y e) Equipo de protecci\xF3n para poda: careta, lentes, protecci\xF3n auditiva, cuerdas, casco de cuatro puntos con barbiquejo, guantes mec\xE1nicos, ropa y calzado institucionales \xB7 pp. 38\u201339",poda_mangas:"GS-101 \xB7 \xA75.6.10 t) Mangas, cuerdas o prendas sueltas pueden enredarse en la motosierra o en la rama \xB7 p. 40",poda_planificar:"GS-101 \xB7 \xA75.6.10 h) Planificaci\xF3n previa: \xE1rbol, terreno, clima, bienes, personas, animales, insectos, tr\xE1nsito y distancia a l\xEDneas \xB7 p. 39",poda_subir:"GS-101 \xB7 \xA75.6.10 f) El trabajador no se debe subir a un \xE1rbol \xB7 p. 39",poda_linea:"GS-101 \xB7 \xA75.6.10 b) y m) Ramas en aproximaci\xF3n o sobre la l\xEDnea energizada: informar y coordinar; no se cortan ramas sobre la l\xEDnea \xB7 pp. 38 y 40",poda_distancias:"GS-101 \xB7 \xA75.6.10 j) y k) Distancias m\xEDnimas: se trabaja fuera de ellas durante el corte y la ca\xEDda, tambi\xE9n para las ramas \xB7 p. 39",poda_cansancio:"GS-101 \xB7 \xA75.6.10 g) No operar maquinaria cansado ni con medicamentos que alteren la conciencia \xB7 p. 39",poda_senal:"GS-101 \xB7 \xA75.6.10 n) Se\xF1alizar el \xE1rea y advertir a terceros; en v\xEDas de alto tr\xE1nsito, pedir apoyo \xB7 p. 40",poda_trayectoria:"GS-101 \xB7 \xA75.6.10 o) Valorar la trayectoria de ca\xEDda y asegurar la zona con se\xF1alizaci\xF3n y personal que regule el paso \xB7 p. 40",poda_equipo:"GS-101 \xB7 \xA75.6.10 p) Revisar el equipo de poda antes de iniciar (cuchillos, mecates, otros dispositivos) \xB7 p. 40",poda_viento:"GS-101 \xB7 \xA75.6.10 q) Antes de cada corte: distancia a lo energizado, viento y vegetaci\xF3n que interfiera \xB7 p. 40",poda_cuerdas:"GS-101 \xB7 \xA75.6.10 r) Cuerdas de trabajo para evitar que la rama cambie de direcci\xF3n al caer \xB7 p. 40",poda_cuadrilla:"GS-101 \xB7 \xA75.4 e) Las cuadrillas de poda de \xE1rboles no pueden ser menores de dos miembros \xB7 p. 18",gal_autorizacion:"Manual MNO-DS-GE-001 \xB7 \xA74.1.6 y \xA74.1.7 Aviso al Centro de Operaciones y autorizaci\xF3n en SASET antes de intervenir fibras en operaci\xF3n",gal_senal:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) Per\xEDmetro del \xE1rea de trabajo asegurado con se\xF1alizaci\xF3n vial y peatonal",gal_vigia:"GS-101 \xB7 \xA75.4 c) Cuadrillas de m\xEDnimo dos personas. La fuente no describe c\xF3mo se vigila la tapa ni la comunicaci\xF3n (duda, ver PENDIENTES_SST.md, J10)",gal_atmosfera:"GS-101 \xB7 T\xE9rminos: espacio confinado (aberturas limitadas, ventilaci\xF3n desfavorable). La fuente no describe el procedimiento de atm\xF3sfera (duda, ver PENDIENTES_SST.md, J10)",gal_ingreso:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 c) Ingreso por escalera met\xE1lica cuando la profundidad lo amerita (aplicado a la galer\xEDa: duda, ver PENDIENTES_SST.md, J10)",gal_epp:"GS-101 \xB7 \xA75.3 Uso de EPP: lista propuesta para la galer\xEDa, a validar por Salud Ocupacional (ver PENDIENTES_SST.md, J10)",gal_respirador:"GS-101 \xB7 \xA75.3.3 f) Respiradores con filtros en lugares de escasa ventilaci\xF3n; los filtros se reemplazan cuando se saturan",gal_cables:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) No da\xF1ar los cables existentes; \xA76.2.2 radio de curvatura; \xA76.2.7.2 fijaciones con cobre en servicio",gal_pletinas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7.1 b) Pletinas peque\xF1as de 20 cm; d) el cable se sujeta del centro hacia los extremos",gal_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 b) y c) Rollo de reserva de 20 a 25 m en la galer\xEDa, en la pared opuesta al MDF, a la mayor altura posible",gal_50cm:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 d) En la pared del MDF, 50 cm libres desde la salida de los ductos hacia el fondo",gal_placas:"Manual MNO-DS-GE-001 \xB7 \xA76.4.2.3 a) y e) Placas acr\xEDlicas con origen y destino; dos placas en cada rollo de reserva",gal_sellado:"Manual MNO-DS-GE-001 \xB7 Anexo 1: sellado de los ductos en la galer\xEDa (espuma expandible reentrable; subductos con tapones de hule)",eri_antes:"GS-101 \xB7 \xA75.7 Antes a) y b): personal capacitado como equipo ERI y en rescate vertical; botiqu\xEDn b\xE1sico y equipos para rescate vertical (cuerdas de seguridad, mosquetones, pull-lift) \xB7 p. 42",eri_criticas:"GS-101 \xB7 \xA75.7 Antes d): los trabajos mayores de 12 m son muy cr\xEDticos; sistema de rescate en el sitio y persona competente en rescate \xB7 p. 42",eri_sistema:"GS-101 \xB7 \xA75.7 Antes c): reportar el deterioro o da\xF1o de los sistemas de prevenci\xF3n y protecci\xF3n contra ca\xEDdas \xB7 p. 42",eri_despejar:"GS-101 \xB7 \xA75.7 Durante a): despejar completamente el \xE1rea donde se present\xF3 el accidente \xB7 p. 42",eri_distancia:"GS-101 \xB7 \xA75.7 Durante b) y g): distancia prudente y segura; antes de un rescate, comprobar que el \xE1rea es segura y que uno est\xE1 protegido \xB7 pp. 42\u201343",eri_911:"GS-101 \xB7 \xA75.7 Durante e) y f): pedir ayuda al 9-1-1; no hacer maniobras de rescate de las que no se tenga conocimiento previo \xB7 p. 43",eri_no_mover:"GS-101 \xB7 \xA75.7 Durante d) y Despu\xE9s b): no mover a la v\xEDctima salvo raz\xF3n de seguridad; brindar tranquilidad a la v\xEDctima \xB7 p. 43",eri_terceros:"GS-101 \xB7 \xA75.7 Durante h): ning\xFAn trabajador informa a personas u organizaciones externas; solo la direcci\xF3n o personal autorizado \xB7 p. 43",eri_fuera:"GS-101 \xB7 \xA75.5 n): los equipos para trabajo en altura que hayan sido usados en pruebas o por una ca\xEDda libre quedan fuera de servicio \xB7 p. 21",sv_permiso:"GS-101 \xB7 \xA75.8 a) Solo conduce veh\xEDculos institucionales el funcionario con los permisos de conducir del ICE \xB7 p. 42",sv_revision:"GS-101 \xB7 \xA75.8 b) Antes de usar el veh\xEDculo se revisan los niveles de aceite, combustible y agua, luces, repuesto, documentos, se\xF1alizaci\xF3n, herramientas y llantas \xB7 p. 43",sv_ley:"GS-101 \xB7 \xA75.8 c) y l) Conducir responsablemente, respetando la Ley de Tr\xE1nsito, sin abusar de la destreza al conducir \xB7 p. 43",sv_celular:"GS-101 \xB7 \xA75.8 d) Queda prohibido el uso del celular durante la conducci\xF3n del veh\xEDculo \xB7 p. 43",sv_estacionar:"GS-101 \xB7 \xA75.8 e) Al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",sv_carga:"GS-101 \xB7 \xA75.8 g) Asegurar objetos, materiales, herramientas y equipos: son un riesgo en un frenado r\xE1pido, vuelco o colisi\xF3n \xB7 p. 43",sv_tablero:"GS-101 \xB7 \xA75.8 h) e i) Nada suelto en el tablero; no recoger objetos del piso ni lejos del alcance mientras se conduce \xB7 p. 43",sv_fatiga:"GS-101 \xB7 \xA75.8 m) Con cansancio o fatiga: detener el veh\xEDculo en un sitio seguro, bajarse, caminar y respirar; si va acompa\xF1ado, ceder la conducci\xF3n \xB7 p. 43",sv_calma:"GS-101 \xB7 \xA75.8 o) Manejar con calma, sin perder el control con otros conductores y evitando confrontaciones \xB7 p. 43",sv_mojado:"GS-101 \xB7 \xA75.8 p) En caminos con grava, arenosos o mojados, bajar la velocidad y manejar con cuidado \xB7 p. 44",sv_danos:"GS-101 \xB7 \xA75.8 q) Reportar los da\xF1os que se observen o causen al veh\xEDculo; no ocultarlos, pueden producir un accidente \xB7 p. 44",sv_alcohol:"GS-101 \xB7 \xA75.8 r) No conducir bajo los efectos del alcohol, drogas o medicamentos que causen somnolencia \xB7 p. 44",sv_defensivo:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Manejo defensivo y sus cinco elementos: conocimiento, estar alerta, previsi\xF3n, juicio y habilidad \xB7 diap. 4\u201311",sv_humano:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 El 90 % de los accidentes viales tiene origen en el factor humano \xB7 diap. 13",sv_estados:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Estados (prisa, frustraci\xF3n, cansancio, complacencia) y los errores que producen \xB7 diap. 17\u201325",sv_linea_fuego:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Errores: ojos no en la tarea y entrar en la l\xEDnea de fuego \xB7 diap. 26 y 30",sv_lluvia:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Factor lluvia: calle mojada (\xABespecie de jab\xF3n\xBB), carreteras, poca visibilidad y neblina \xB7 diap. 36\u201341",sv_visibilidad:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Poca visibilidad: reducir la velocidad; si es excesiva, detener el veh\xEDculo a un costado y esperar \xB7 diap. 40",sv_derrumbe:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Derrumbes originados por la lluvia \xB7 diap. 38 (qu\xE9 hacer ante uno: decisi\xF3n conservadora, ver PENDIENTES_SST.md, J12\u2013J13)",sv_sustancias:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Alcohol, drogas y f\xE1rmacos: efectos seg\xFAn la dosis; los f\xE1rmacos como factor accidentog\xE9nico \xB7 diap. 44\u201349",sv_minimos:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Nueve m\xEDnimos de seguridad vehicular, a revisar todos los d\xEDas antes de salir \xB7 diap. 51\u201352",sv_cinturon:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 M\xEDnimo 1: cintur\xF3n de seguridad retr\xE1ctil de 2 o 3 puntos \xB7 diap. 51",ev_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 \xB7 GS-101 \xB7 Delimitaci\xF3n del \xE1rea",ev_impaciente:"GS-101 \xB7 Cuadrillas en zonas de tr\xE1fico denso \xB7 Delimitaci\xF3n del \xE1rea de trabajo",gs31_ats:"GS-31 \xB7 \xA75.2.4 Antes de la ejecuci\xF3n diaria se realiza el ATS, con todos los trabajadores y liderado por el encargado o t\xE9cnico de la cuadrilla (A01-GS-31) \xB7 p. 10",gs31_cambios:"GS-31 \xB7 \xA75.2.5 Si cambia la planificaci\xF3n inicial (obra, proceso, equipos, personal) se aplica de nuevo el ATS \xB7 p. 10",gs31_f02:"GS-31 \xB7 \xA75.1.11 Las tareas con riesgos de situaci\xF3n cr\xEDtica se eval\xFAan con el F02-GS-31 An\xE1lisis de Tarea Cr\xEDtica \xB7 p. 5",gs31_gravedad:"GS-31 \xB7 \xA75.1.11 d) y f) Gravedad: la p\xE9rdida m\xE1s probable, en la escala 0, 2, 4 y 6 \xB7 p. 6",gs31_repetitividad:"GS-31 \xB7 \xA75.1.11 g) Repetitividad: n\xFAmero de colaboradores y cu\xE1nto de la jornada hace cada uno la tarea \xB7 p. 7",gs31_probabilidad:"GS-31 \xB7 \xA75.1.11 h) Probabilidad de esa p\xE9rdida, de \u22121 a +1 respecto al promedio \xB7 p. 7",gs31_criticidad:"GS-31 \xB7 \xA75.1.11 i) y k) GC = G + R + P (0 a 10): de 0 a 4 baja, m\xE1s de 4 y menos de 8 moderada, 8 o m\xE1s alta \xB7 pp. 7\u20138",gs31_controles:"GS-31 \xB7 \xA75.1.11 m) Controles m\xEDnimos: EPP y dispositivos, capacitaci\xF3n, protocolo de trabajo seguro y la normativa que los respalda \xB7 p. 8",ats_pizarra:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 ATS del d\xEDa: la pizarra (trabajo, herramientas y equipos, obra, fecha, personal y actividades numeradas) \xB7 diap. 46\u201347",ats_muerte:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Factores de muerte; si hay uno o m\xE1s, se revisan en conjunto las acciones a implementar \xB7 diap. 48",ats_riesgos:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Riesgos de cada tarea, manteniendo la numeraci\xF3n de las actividades \xB7 diap. 49",rec_anomalia:"GS-101 \xB7 \xA73.5 b) T\xE9cnico: informar al coordinador de cuadrilla y/o SST cualquier anomal\xEDa o desviaci\xF3n \xB7 p. 4",rec_inminente:"GS-101 \xB7 \xA75.6.4 g), final: si se observa inminente peligro para las personas, se interrumpe la actividad \xB7 p. 23",rec_cuasi:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) c) Casi incidente sin afectaci\xF3n a la salud: F01-GS-52 o F06-GS-52 \xB7 p. 41",rec_accidente:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) b) y d) Accidente: F07-GS-52 a la jefatura de inmediato, antes de terminar la jornada \xB7 pp. 40\u201341",rec_liderazgo:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Reporte por comportamientos: retroalimentaci\xF3n correctiva y registro en el F02-CSCON-SST-00-25 con firma del trabajador; aviso a la jefatura inmediata \xB7 diap. 68",sol_clima:"GS-101 \xB7 \xA75.1 e) Suspensi\xF3n de la actividad por condiciones clim\xE1ticas desfavorables: tormentas el\xE9ctricas, lluvias u otras que pongan en riesgo a los ejecutores \xB7 p. 9",demo_generacion_autorizacion:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 El ingreso a la planta solar se coordina con su encargado, con autorizaci\xF3n previa",demo_generacion_energizado:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los paneles generan electricidad mientras les da la luz: se tratan como energizados",demo_generacion_no_pisar:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 No se pisa ni se apoya nadie en los paneles ni en su estructura",demo_generacion_conexiones:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Solo personal calificado manipula conexiones e inversores, seg\xFAn el procedimiento de la planta",demo_generacion_danos:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los da\xF1os en paneles, cables o inversores se reportan y no se tocan",demo_generacion_calor:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Hidratarse, protegerse del sol y descansar a la sombra con frecuencia",mv_apoyo:"GS-101 \xB7 \xA75.6.6: el veh\xEDculo sirve de soporte a la escalera a medio vano \xB7 p. 28",mv_dos_puntos:"GS-101 \xB7 \xA75.6.6: la escalera se amarra al pant\xF3grafo y al eje de una llanta, a dos puntos \xB7 p. 28",mv_nudos:"GS-101 \xB7 \xA75.6.6: nudo ocho aplicado para dar tensi\xF3n y pata de chancho (ballestrinque) para terminar \xB7 p. 28",mv_subida:"GS-101 \xB7 \xA75.6.6: para subir y bajar, la cuerda de seguridad va sujetada a la escalera \xB7 p. 28",mv_bajada:"GS-101 \xB7 \xA75.6.4 j): subir y bajar de frente, con las manos libres y tres puntos de apoyo \xB7 p. 23",mv_tres:"GS-101 \xB7 \xA75.6.4, nota de la Tabla N\xB0 2: se proh\xEDbe el uso de los tres pelda\xF1os superiores \xB7 p. 22",mv_tabla2:"GS-101 \xB7 \xA75.6.4 f) y Tabla N\xB0 2: altura m\xE1xima permitida de uso de cada escalera \xB7 p. 22",mv_inspeccion:"GS-101 \xB7 \xA75.6.4 c), l), t) y u): revisar pelda\xF1os, uniones, largueros y patas antes de usar la escalera \xB7 pp. 22\u201324",mv_senalizacion:"GS-101 \xB7 \xA75.6.4 g): per\xEDmetro m\xEDnimo de 2 m alrededor de la escalera, con cintas y conos \xB7 pp. 22\u201323",mv_camion:"GS-101 \xB7 \xA75.8 e): al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",mv_herramientas:"GS-101 \xB7 \xA75.6.4 k): materiales y herramientas con bolso, mecate o cuerda \xB7 p. 23",mv_guardar:"GS-101 \xB7 \xA75.6.4 a) y d): la escalera se maneja entre dos y se deposita, no se tira; se limpian los desechos de los pelda\xF1os \xB7 p. 22",mv_mover:"GS-101 \xB7 \xA75.6.4 h): la escalera no se mueve ni se extiende mientras haya personal sobre ella \xB7 p. 23",cala_abertura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.2 Dimensi\xF3n de la cala: 1,5 m de largo por 1 m de ancho, como m\xEDnimo \xB7 p. 18",cala_pieza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tubo de reparaci\xF3n: 50 cm m\xE1s largo que la abertura entre los extremos del ducto \xB7 p. 18",cala_ranura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 La abertura del corte longitudinal queda arriba y se cierra con dos medias secciones de PVC y pegamento \xB7 p. 18",cala_amarras:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tres cintas met\xE1licas o tipo gaza con tornillo sin fin: una en cada extremo y otra en el centro \xB7 p. 18",cala_capas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.4 y Figura 2a: capas de cierre en su orden, espesor y material \xB7 p. 18",cala_empalme:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm, con preformado de 75 cm o menos \xB7 p. 52",cala_anclas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Anclas de seguridad: cada 500 m en tramos rectos de 1 km o m\xE1s, y en cruces de v\xEDa con vano mayor de 80 m en terreno plano \xB7 p. 36",cala_ancla_distancia:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Ubicaci\xF3n del ancla: la mitad de la altura, medida del herraje a la base del poste \xB7 p. 36",cr_cliente:"GS-101 \xB7 \xA75.6.8 a) y b) Observar el cielorraso antes de empezar y preguntar al cliente por sus condiciones \xB7 p. 33",cr_estructura:"GS-101 \xB7 \xA75.6.8 c) La estructura se observa sin corrosi\xF3n avanzada ni madera descompuesta, y estable \xB7 p. 33",cr_electrico:"GS-101 \xB7 \xA75.6.8 d) Cable el\xE9ctrico expuesto: el cliente desconecta la electricidad antes de subir; con guantes diel\xE9ctricos solo si no es posible \xB7 p. 33",cr_epp:"GS-101 \xB7 \xA75.6.8 e) EPP del cielorraso: anteojos, casco con barbiquejo y linterna, ropa, calzado, guantes diel\xE9ctricos y rodilleras \xB7 p. 34",cr_arnes:"GS-101 \xB7 \xA75.5 a) Trabajo a una altura, como en cielorrasos: equipo para trabajo en altura autorizado \xB7 p. 19",cr_extension:"GS-101 \xB7 \xA75.6.8 f) Valorar si es posible usar una extensi\xF3n de fibra para evitar subir al cielorraso \xB7 p. 34",cr_avispas:"GS-101 \xB7 \xA75.6.8 g) Al ingresar, verificar desde el suelo la ausencia de colmenas de avispas o similares \xB7 p. 34",cr_caminar:"GS-101 \xB7 \xA75.6.7 h) por analog\xEDa: caminar por la estructura y no sobre la l\xE1mina (el cielorraso no se cita: duda, ver PENDIENTES_SST.md, J19) \xB7 p. 32",cr_escalera_tipo:"GS-101 \xB7 \xA75.6.4 q) Escaleras de abrir de fibra de vidrio; nota: el aluminio solo donde no hay riesgo el\xE9ctrico \xB7 p. 23",el_provisional:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Arts. 111 y 113 del Reglamento de Seguridad en Construcciones: instalaciones provisionales seg\xFAn el C\xF3digo El\xE9ctrico de CR (entubado, adecuado a la tensi\xF3n nominal) \xB7 diap. 22\u201326",el_medidor:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 112: medidores el\xE9ctricos provisionales con base estable y protecci\xF3n del agua \xB7 diap. 22\u201326",el_tablero:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 114: tableros y cajas el\xE9ctricas tapados, identificados y cerrados \xB7 diap. 22\u201326",el_conductores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 115: conductores protegidos ante da\xF1os mec\xE1nicos de la construcci\xF3n (maquinaria, veh\xEDculos, agua, qu\xEDmicos) \xB7 diap. 27",el_epp:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 117: el personal en presencia de energ\xEDa el\xE9ctrica cuenta con protecci\xF3n diel\xE9ctrica; no usar el EPP diel\xE9ctrico es un acto inseguro \xB7 diap. 27 y 51",el_condiciones:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Condiciones inseguras: enchufes deteriorados, uniones deterioradas o sin aislamiento y conexiones fuera de norma \xB7 diap. 46\u201348",el_autorizacion:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: intervenir sin autorizaci\xF3n \xB7 diap. 51",el_mojado:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: manos o pies mojados; la piel h\xFAmeda tiene menor resistencia \xB7 diap. 13 y 51",el_combustible:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: materiales combustibles o explosivos donde se presente arco el\xE9ctrico; el arco es un fuego repentino con metal fundido \xB7 diap. 5 y 31",el_anexo_b:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: peligro inminente o alto riesgo (sin protecci\xF3n frente al contacto con partes energizadas o el cortocircuito; lluvia y tormentas el\xE9ctricas) \xB7 diap. 30\u201331",el_anexo_c:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo C del C\xF3digo El\xE9ctrico: lista de verificaci\xF3n de instalaciones el\xE9ctricas, aplicada en conjunto con el t\xE9cnico el\xE9ctrico \xB7 diap. 32\u201340",el_factores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Factores de la magnitud de un incidente el\xE9ctrico: intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria \xB7 diap. 9"};var FA=new Map([...Object.entries(K).map(([n,e])=>[e,n]),...Object.entries(ci).map(([n,e])=>[e,"poste_"+n])]);var T_=[{n:1,p:"\xBFA partir de qu\xE9 altura se considera trabajo en altura?",o:["M\xE1s de 1,80 m","M\xE1s de 3 m","M\xE1s de 1 m","Solo arriba de 5 m"],ref:K.altura},{n:1,p:"\xBFCu\xE1ntos trabajadores pueden estar sobre una escalera port\xE1til?",o:["Uno solo","Dos, si es de extensi\xF3n","Tres, si la escalera es larga","Los que quepan"],ref:K.escaleras},{n:1,p:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera en el poste?",o:["75\xB0","60\xB0","90\xB0","45\xB0"],ref:K.amarre},{n:1,p:"\xBFQu\xE9 pelda\xF1os de la escalera est\xE1 prohibido usar?",o:["Los tres superiores","Solo el primer pelda\xF1o","Ninguno","Los dos inferiores"],ref:K.escaleras},{n:1,p:"\xBFQu\xE9 per\xEDmetro m\xEDnimo se se\xF1aliza alrededor de la escalera?",o:["2 metros","50 cm","No hace falta","10 metros"],ref:K.escaleras},{n:1,p:"Al subir y bajar la escalera debo mantener\u2026",o:["Tres puntos de apoyo","Dos puntos de apoyo","Las manos ocupadas","Un punto de apoyo"],ref:K.escaleras},{n:1,p:"\xBFC\xF3mo se suben las herramientas a la escalera?",o:["Con bolso, mecate o cuerda","En las bolsas del pantal\xF3n","En la mano, pegadas al cuerpo","Que me las lancen desde abajo"],ref:K.escaleras},{n:1,p:"\xBFSe puede trabajar en altura con reloj, anillo o cadena?",o:["No, se proh\xEDbe todo tipo de alhaja","S\xED, si son peque\xF1os y no molestan","Solo el reloj, si no tiene correa met\xE1lica","S\xED, si van bajo el guante de cuero"],ref:K.altura},{n:1,p:"Ante un accidente en altura, \xBFa qu\xE9 n\xFAmero se pide ayuda?",o:["9-1-1","1-1-3","8-0-0","Se espera a la jefatura"],ref:K.emergencias},{n:1,p:"La escalera viaja en el techo del cami\xF3n. \xBFSubir a bajarla es trabajo en altura?",o:["S\xED: el techo est\xE1 a m\xE1s de 1,80 m","No: es solo un cami\xF3n de reparto","Solo si llueve fuerte, con viento","Solo si es de noche y est\xE1 oscuro"],ref:K.altura},{n:1,p:"Tu arn\xE9s tiene una costura reventada. \xBFQu\xE9 haces?",o:["No lo uso, informo y pido la sustituci\xF3n","Lo uso con cuidado, sin que se note","Lo refuerzo con cinta y lo uso hoy","Lo uso solo hoy, ma\xF1ana lo cambio"],ref:K.altura},{n:1,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable a\xE9reo sobre una acera, en su flecha m\xE1xima?",o:["4,5 m","3 m","6 m","2,5 m"],ref:K.m_altura},{n:1,p:"\xBFCu\xE1ntas calcoman\xEDas reflectivas de prevenci\xF3n van en el poste?",o:["Dos, una a cada lado","Una, en el centro del poste","Cuatro, dos a cada lado","Ninguna: no hace falta"],ref:K.m_calco},{n:1,p:"\xBFCu\xE1ntas personas, como m\xEDnimo, forman una cuadrilla de instalaci\xF3n de fibra?",o:["Dos: un t\xE9cnico y un asistente","Una, si tiene experiencia","Cuatro, con un supervisor de obra","Las que haya disponibles ese d\xEDa"],ref:K.cuadrillas},{n:2,p:"\xBFD\xF3nde se conecta preferiblemente la l\xEDnea de vida?",o:["En un anclaje por encima de la cabeza","En el portaganchos pl\xE1stico del arn\xE9s","En un cable telef\xF3nico de la red","A la altura de la cintura, en un pelda\xF1o"],ref:K.altura},{n:2,p:"La l\xEDnea de vida de 0,90 m se conecta en el arn\xE9s a la\u2026",o:["Argolla dorsal (espalda)","Argolla frontal (pecho)","Argolla D lateral","Portaganchos pl\xE1stico"],ref:K.altura},{n:2,p:"El freno para cuerda (o el carrito de la l\xEDnea vertical del cami\xF3n) se conecta a la\u2026",o:["Argolla frontal, a la altura del pecho y el ombligo","Argolla dorsal, en la espalda, junto a la l\xEDnea de 0,90 m","Argolla D lateral de la faja de posicionamiento","Hebilla del cintur\xF3n, sin ning\xFAn anclaje"],ref:K.freno},{n:2,p:"Antes de usar los guantes diel\xE9ctricos, adem\xE1s de revisarlos a la vista, se les hace\u2026",o:["La prueba de aire (inflarlos) para buscar fugas","Nada m\xE1s: con una mirada basta","Una prueba con agua caliente y jab\xF3n","Un estir\xF3n fuerte, de lado y de frente"],ref:K.epp},{n:2,p:"Los guantes diel\xE9ctricos clase 00 (etiqueta beige) protegen hasta\u2026",o:["500 V","1000 V","50 V","15 kV"],ref:K.epp},{n:2,p:"\xBFPor qu\xE9 se usa un guante de cuero sobre el guante diel\xE9ctrico?",o:["Para evitar perforaciones y rasgados del aislante","Para que no se resbale la mano en el trabajo","Porque el color se ve mejor en el poste","No se debe usar: el aislante ya basta solo"],ref:K.epp},{n:2,p:"El casco para trabajo en postes es ala ancha tipo II, con barbiquejo de\u2026",o:["Cuatro puntos","Dos puntos","Un punto","No lleva barbiquejo"],ref:K.epp},{n:2,p:"Resistencia m\xEDnima de un punto de anclaje por persona conectada:",o:["5000 lb (2272 kg)","500 lb","1000 kg","La de cualquier tubo firme"],ref:K.altura},{n:2,p:"Un equipo de altura que ya detuvo una ca\xEDda libre debe\u2026",o:["Quedar fuera de servicio","Revisarse y seguir us\xE1ndose","Lavarse y guardarse","Usarse solo en techos"],ref:K.altura},{n:2,p:"\xBFSe puede enrollar la l\xEDnea de vida para acortarla?",o:["No, est\xE1 prohibido","S\xED, dos vueltas","S\xED, si el anclaje est\xE1 bajo","Solo en escaleras"],ref:K.altura},{n:2,p:"\xBFCu\xE1ntos ganchos se pueden conectar en un mismo anillo D?",o:["Uno, salvo que el fabricante certifique otra cosa","Dos, si ambos son del mismo tama\xF1o","Tres, si el anillo es de acero grueso","Los que quepan en el anillo D"],ref:K.altura},{n:2,p:"La escalera de 28 pies (8,53 m) se traslada y coloca entre\u2026",o:["Dos personas, de estatura similar","Una persona, con ayuda de la cuerda","Tres personas, con la escalera abierta","Con el cami\xF3n en marcha, sin frenar"],ref:K.escaleras},{n:2,p:"L\xEDmite de carga manual para un trabajador sin limitaciones de salud:",o:["25 kg (20 kg para una trabajadora)","50 kg, con un compa\xF1ero que ayude","40 kg para todos los trabajadores","No hay l\xEDmite si el peso se reparte"],ref:K.carga},{n:2,p:"\xBFSe pueden usar calzas para nivelar la escalera?",o:["No: se busca nivelar el sitio sin calzas","S\xED, con piedras o pedazos de madera","S\xED, con bloques de concreto, si el piso est\xE1 flojo","Solo de noche, cuando hay menos tr\xE1nsito"],ref:K.escaleras},{n:3,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable en los cruces de calle?",o:["5 m","4,5 m","6,5 m","3,5 m"],ref:K.m_altura},{n:3,p:"Radio m\xEDnimo de curvatura de un cable de fibra \xF3ptica:",o:["20 veces su di\xE1metro","5 veces su di\xE1metro","2 veces su di\xE1metro","No hay m\xEDnimo"],ref:K.m_radio},{n:3,p:"Tensi\xF3n m\xE1xima recomendada si no hay datos del fabricante:",o:["250 kgf","50 kgf","1000 kgf","Sin l\xEDmite"],ref:K.m_tension},{n:3,p:"La balona de los cables en el poste debe medir como m\xE1ximo:",o:["10 cm","50 cm","1 m","No hay l\xEDmite"],ref:K.m_balona},{n:3,p:"Altura m\xEDnima de la gaza respecto al suelo:",o:["5 m","2 m","3 m","8 m"],ref:K.m_gaza},{n:3,p:"Si en el poste no hay secundario el\xE9ctrico, la gaza va a esta distancia del neutro:",o:["80 cm","10 cm","40 cm","2 m"],ref:K.m_gaza},{n:3,p:"Di\xE1metro del rollo de reserva en redes a\xE9reas:",o:["De 40 a 50 cm","De 5 a 10 cm","Unos 2 m de di\xE1metro","El que quepa"],ref:K.m_rollo_poste},{n:3,p:"Distancia del rollo de reserva al poste:",o:["75 cm","10 cm","2 m","No hay norma"],ref:K.m_reserva},{n:3,p:"Distancia normal entre postes en redes existentes:",o:["Entre 40 y 80 m","Entre 5 y 10 m","M\xE1s de 200 m siempre","No importa"],ref:K.m_postes},{n:3,p:"En un cruce sin apoyo, \xBFcu\xE1ntas calcoman\xEDas reflectivas se instalan?",o:["Dos a cada lado de la balona del cruce","Una en el centro del poste","Ninguna, el cruce no lo necesita","Solo si es de noche o llueve"],ref:K.m_balona},{n:3,p:"Todo cable que cruce una l\xEDnea de ferrocarril se instala\u2026",o:["De forma subterr\xE1nea, sin tendido a\xE9reo","A\xE9reo a 5 m, como en un cruce de calle","A\xE9reo a 4,5 m, como en una acera","A\xE9reo, con un poste a cada lado de la v\xEDa"],ref:K.m_ferrea},{n:3,p:"La fibra n\xFAmero 1 del c\xF3digo de colores EIA/TIA-598 es:",o:["Azul","Naranja","Verde","Caf\xE9"],ref:K.m_colores},{n:3,p:"Presi\xF3n de prueba de hermeticidad del cierre de empalme:",o:["8 psi","1 psi","30 psi","No se prueba"],ref:K.m_cierre},{n:3,p:"\xBFSe puede instalar un cable sobre un transformador o l\xEDnea el\xE9ctrica?",o:["Nunca","S\xED, si es diel\xE9ctrico","S\xED, con guantes","Solo de d\xEDa"],ref:K.m_prep},{n:3,p:"Longitud del rollo de reserva dentro de un registro:",o:["De 28 a 35 m","De 2 a 5 m","100 m","No se deja reserva"],ref:K.m_reserva_sub},{n:3,p:"\xBFSe recomienda pasar fibra y cobre por el mismo ducto?",o:["No, salvo excepciones justificadas","S\xED, siempre que est\xE9n bien sujetos","Solo si son delgados y de poco peso","Es obligatorio, seg\xFAn el jefe de obra"],ref:K.m_subterranea},{n:3,p:"Al instalar un cable directamente en un ducto, adem\xE1s se deja\u2026",o:["Una gu\xEDa para el halado de cables en el futuro","El ducto sin tapar, para ventilar","Agua jabonosa para lubricar el cable","Nada m\xE1s: el ducto ya queda listo"],ref:K.m_subterranea},{n:3,p:"Al terminar el trabajo en un registro, la tapa\u2026",o:["Se coloca asegurada con sus dispositivos de seguridad","Se deja abierta un rato para ventilar el registro","Se apoya sobre el borde sin asegurar","Se guarda en el cami\xF3n hasta el d\xEDa siguiente"],ref:K.m_tapas},{n:4,p:"Antes de usar el veh\xEDculo de la cuadrilla se revisa\u2026",o:["Aceite, combustible, agua, luces, llantas, repuesto, documentos, se\xF1alizaci\xF3n y herramientas","Solo el combustible y que el motor encienda bien, sin mirar nada m\xE1s del veh\xEDculo","Solo que las luces funcionen y que el veh\xEDculo se vea limpio por fuera","Nada: eso lo hace el taller una vez al a\xF1o, y el chofer solo maneja y reporta si algo suena raro"],ref:K.vehiculos},{n:4,p:"Al estacionar el cami\xF3n en la calle para trabajar, se debe\u2026",o:["Hacerlo en un lugar seguro y se\xF1alizar","Dejarlo donde caiga, con las luces apagadas","Subirlo completo a la acera","Dejarlo en el carril, es solo un rato"],ref:K.vehiculos},{n:4,p:"\xBFSe puede usar el celular mientras se conduce el veh\xEDculo institucional?",o:["No, est\xE1 prohibido","S\xED, con altavoz","S\xED, en sem\xE1foros","Solo para mensajes de trabajo"],ref:K.vehiculos},{n:4,p:"Si sientes cansancio o fatiga mientras conduces\u2026",o:["Te detienes en un sitio seguro, descansas o cedes el volante","Aceleras un poco para llegar antes de que se haga tarde","Bajas la ventana, pones m\xFAsica y sigues manejando","Tomas caf\xE9, te estiras en el carro y contin\xFAas sin parar"],ref:K.vehiculos},{n:4,p:"Las herramientas y materiales que van en el cami\xF3n deben ir\u2026",o:["Asegurados: en un frenazo o vuelco se vuelven proyectiles","Sueltos en la cajuela para sacarlos m\xE1s r\xE1pido","En el tablero, encima de la guantera","En el asiento del copiloto, sin amarrarlos"],ref:K.vehiculos},{n:4,p:"En una v\xEDa de tr\xE1fico denso, la cuadrilla debe\u2026",o:["Planificar con m\xE1s personal y alguien que regule el tr\xE1nsito","Trabajar m\xE1s r\xE1pido para liberar la v\xEDa","Trabajar sin conos para no estorbar","Ir una sola persona, para ahorrar gastos del d\xEDa"],ref:K.cuadrillas},{n:4,p:"Para trabajar en una v\xEDa de alto tr\xE1nsito, \xBFa qui\xE9n se puede pedir colaboraci\xF3n?",o:["A las autoridades de tr\xE1nsito","A los vecinos de la cuadra","A nadie: la cuadrilla se arregla sola","A los conductores que pasan por la v\xEDa"],ref:K.poda_transito},{n:4,p:"El GS-101 define viento fuerte como una velocidad constante mayor a\u2026",o:["40 km/h","10 km/h","100 km/h","20 km/h"],ref:K.altura},{n:4,p:"Si una l\xEDnea de telecomunicaciones queda m\xE1s cerca de lo permitido de la l\xEDnea primaria (media tensi\xF3n), \xBFqu\xE9 se hace?",o:["No se trabaja y se coordina la desconexi\xF3n con la empresa el\xE9ctrica","Se trabaja con guantes de cuero y con cuidado, sin tocar nada","Se trabaja r\xE1pido, antes de que llegue la distribuidora","Se ignora el riesgo si no se ven chispas ni humo en el poste"],ref:K.mt_suspender},{n:4,p:"Umbral de \xABno soltar\xBB de la corriente el\xE9ctrica en el cuerpo:",o:["10 mA","0,5 mA","1 A","100 A"],ref:K.electrico},{n:4,p:"\xBFA partir de qu\xE9 altura un trabajo se considera muy cr\xEDtico y exige rescate en sitio?",o:["M\xE1s de 12 m","M\xE1s de 3 m","M\xE1s de 30 m","M\xE1s de 100 m"],ref:K.emergencias},{n:4,p:"Tras una ca\xEDda, \xBFse mueve a la v\xEDctima?",o:["No, salvo que sea necesario por seguridad","S\xED, siempre, llev\xE1ndola a la sombra del poste","S\xED, para sentarla y darle agua de inmediato","S\xED, para llevarla en el cami\xF3n al hospital"],ref:K.emergencias},{n:4,p:"Un accidente laboral se reporta a la jefatura\u2026",o:["De inmediato, antes de terminar la jornada","Al final de la semana, con el resto de informes","Solo si hubo hospitalizaci\xF3n o incapacidad","No se reporta si fue leve y no dej\xF3 marca"],ref:K.reportes},{n:4,p:"Distancia t\xEDpica de ca\xEDda libre que considera el GS-101 al planificar un sistema antica\xEDdas:",o:["Por lo general, 1,80 m","5 m, seg\xFAn la altura del poste","10 cm, seg\xFAn el tipo de arn\xE9s","No importa la altura del trabajo"],ref:K.altura},{n:4,p:"\xBFCon qu\xE9 viento no se debe trabajar en techos?",o:["Vientos superiores a 60 km/h","Vientos superiores a 30 km/h","Vientos superiores a 90 km/h","El viento no es un factor en techos"],ref:K.t_techo_clima},{n:4,p:"\xBFCu\xE1ndo se deben identificar las l\xE1minas pl\xE1sticas, de policarbonato o tragaluces del techo?",o:["Desde el piso, antes de subir al techo","Cuando ya est\xE1s parado sobre el techo","Solo si llueve fuerte y hay viento","Nunca: no se ven de cerca"],ref:K.t_techo_caminar},{n:4,p:"Para caminar en un techo, \xBFpor d\xF3nde se debe hacer?",o:["Por los clavadores y los lugares m\xE1s c\xE9ntricos del techo","Por el borde del techo, para ver la calle","Por cualquier l\xE1mina, si no se ve da\xF1ada","Por la l\xE1mina m\xE1s cercana a la escalera"],ref:K.t_techo_caminar},{n:4,p:"Si no hay amarre seguro para la escalera, \xBFqu\xE9 es obligatorio?",o:["Que un compa\xF1ero de trabajo sostenga la escalera","Que la escalera se amarre a una l\xE1mina del techo","Que se suba con las manos ocupadas","Nada: la escalera se apoya sola"],ref:K.t_techo_escalera},{n:4,p:"\xBFCu\xE1nto debe sobrepasar la escalera la estructura a la que se apoya?",o:["1 metro o tres pelda\xF1os","30 cent\xEDmetros","No debe sobrepasarla","3 metros"],ref:K.t_techo_escalera},{n:4,p:"Al llegar al nivel del techo, \xBFa qu\xE9 distancia m\xEDnima del borde se debe retirar la persona antes de quitarse el equipo de altura?",o:["1 metro","50 cent\xEDmetros","No hay distancia m\xEDnima","3 metros"],ref:K.t_techo_traslado},{n:5,p:"\xBFQu\xE9 distancia m\xEDnima se exige entre un conductor de telecomunicaciones y una l\xEDnea primaria de media tensi\xF3n?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:K.mt_suspender,e:"Si la l\xEDnea de telecomunicaciones se sospecha a menos de 80 cm de la primaria de media tensi\xF3n, no se realiza ning\xFAn trabajo (GS-101 \xA75.6.9 f)."},{n:5,p:"\xBFQu\xE9 distancia se mantiene entre el conductor telef\xF3nico y el secundario el\xE9ctrico?",o:["0,40 m","0,55 m","0,70 m","2,50 m"],ref:K.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el secundario es de 40 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"\xBFY entre el conductor telef\xF3nico y el neutro?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:K.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el neutro es de 80 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"Una l\xEDnea de telecomunicaciones est\xE1 por encima o al mismo nivel que el secundario. \xBFQu\xE9 se hace?",o:["No se trabaja hasta coordinar con la distribuidora la desconexi\xF3n del circuito durante el trabajo","Se trabaja con cuidado, sin tocar el secundario ni el neutro, y se avisa al jefe de cuadrilla","Se sube con guantes de cuero y casco bien puesto, con la l\xEDnea de vida anclada al poste","Se trabaja de noche, cuando hay menos tr\xE1nsito y menos gente cerca del poste"],ref:K.mt_suspender,e:"GS-101 \xA75.6.9 f): en ese caso se coordina con la empresa de distribuci\xF3n la desconexi\xF3n del circuito durante el tiempo del trabajo."},{n:5,p:"Una persona no calificada quiere cruzar el l\xEDmite de aproximaci\xF3n de una l\xEDnea energizada. \xBFPuede?",o:["No, salvo acompa\xF1ada de una persona calificada","S\xED, si lleva guantes de cuero y casco","S\xED, si el trabajo es corto y se hace r\xE1pido","S\xED, si lleva anteojos de seguridad"],ref:K.mt_frontera,e:"Las personas no calificadas no cruzan ese l\xEDmite a menos que est\xE9n acompa\xF1adas por una persona calificada (GS-101 \xA75.2 w)."},{n:5,p:"Toda l\xEDnea el\xE9ctrica cerca del trabajo se considera\u2026",o:["Activa, hasta verificar lo contrario con la distribuidora","Desactivada si no hay ruido ni chispas en el poste","Activa solo si hay chispas o se oye zumbido","Inactiva si est\xE1 en el poste de telecomunicaciones"],ref:K.mt_activa,e:"Todas las l\xEDneas el\xE9ctricas se consideran activas. Si hace falta verificar el estado de tensi\xF3n, se coordina con la distribuidora (GS-101 \xA75.6.9 h)."},{n:4,p:"\xBFQui\xE9n debe verificar y asegurar el ascenso al poste antes de iniciar la actividad?",o:["El encargado de cuadrilla","El t\xE9cnico que sube","Cada trabajador por separado","Nadie: el ascenso se revisa al terminar"],ref:ci.inspeccion},{n:4,p:"\xBFQu\xE9 incluye la inspecci\xF3n de poster\xEDa antes del ascenso?",o:["El poste anterior, posterior, local y el tendido entre postes","Solo el poste donde se va a subir y el que tiene al lado","Solo el tendido entre los dos postes m\xE1s cercanos a la casa","Solo los postes de madera que se ven desde la calle"],ref:ci.inspeccion},{n:4,p:"Si se evidencia alguna de las fallas del \xA75.6.3, \xBFqu\xE9 se hace?",o:["No se realizar\xE1 el trabajo y se realizar\xE1 el reporte a la jefatura de manera inmediata","Se sube con m\xE1s cuidado, revisando cada pelda\xF1o del poste","Se reporta al terminar la jornada, con un informe escrito y firmado","Se apuntala el poste con un puntal de madera y luego se sube"],ref:ci.inspeccion},{n:4,p:"En un poste de madera, \xBFqu\xE9 da\xF1o por fisuras, quemado o podrido no debe superar la fuente?",o:["Una tercera parte del di\xE1metro","La mitad del di\xE1metro","Cualquier fisura es aceptable","Un cuarto del di\xE1metro"],ref:ci.inspeccion},{n:4,p:"En un poste de metal, \xBFqu\xE9 perforaciones son falla?",o:["Perforaciones superiores a una tercera parte del di\xE1metro","Cuando hay m\xE1s de una, aunque sean peque\xF1as","Cuando se ven desde el suelo, a simple vista","Nunca, si el poste sigue en pie"],ref:ci.inspeccion},{n:6,p:"\xBFQu\xE9 equipo de protecci\xF3n exige el GS-101 para la poda de \xE1rboles?",o:["Careta, lentes, protecci\xF3n auditiva, cuerdas de seguridad, casco de cuatro puntos con barbiquejo, guantes para riesgos mec\xE1nicos, ropa y calzado institucionales","Solo casco y guantes de cuero","Arn\xE9s de cuerpo completo y guantes diel\xE9ctricos","Solo lentes: el resto lo decide el encargado"],ref:K.poda_epp},{n:6,p:"\xBFPuede un trabajador subirse a un \xE1rbol para cortar una rama?",o:["No: el trabajador no se sube a un \xE1rbol","S\xED, con cuerdas de seguridad y un compa\xF1ero abajo","S\xED, si la rama es peque\xF1a","S\xED, con arn\xE9s de cuerpo completo"],ref:K.poda_subir},{n:6,p:"Una rama est\xE1 sobre una l\xEDnea energizada. \xBFQu\xE9 se hace?",o:["No se corta: se informa al Ejecutor del Proceso, que coordina con SST y el CLOR","Se corta despacio, con cuidado, sin tocar el cable","Se corta cuando la l\xEDnea se vea sin chispas","Se corta de noche, cuando hay menos gente"],ref:K.poda_linea},{n:6,p:"\xBFQu\xE9 se revisa antes de cada corte de rama?",o:["La distancia a lo energizado, la velocidad y direcci\xF3n del viento y la vegetaci\xF3n que puede interferir con la ca\xEDda","Solo que la motosierra arranque al primer jal\xF3n","Solo que el compa\xF1ero tenga el casco puesto","Nada: la experiencia dice cu\xE1ndo se corta"],ref:K.poda_viento},{n:6,p:"Antes de operar una motosierra, \xBFqu\xE9 condici\xF3n debe cumplir quien la opera?",o:["No estar cansado ni haber tomado medicamentos que alteren la conciencia","Tener un a\xF1o de experiencia, aunque est\xE9 cansado","Haber tomado caf\xE9 para estar alerta","Operarla solo si el supervisor no est\xE1 presente"],ref:K.poda_cansancio},{n:6,p:"\xBFCu\xE1ntos miembros, como m\xEDnimo, forman una cuadrilla de poda de \xE1rboles?",o:["Dos","Uno, si tiene experiencia","Uno, si el \xE1rbol es peque\xF1o","Tres, con un supervisor"],ref:K.poda_cuadrilla},{n:7,p:"\xBFCu\xE1ndo debe usarse el barbiquejo del casco?",o:["Cuando exista posibilidad de desprendimiento del casco por fuertes vientos, espacios confinados, postura corporal y trabajos en altura","Solo cuando el casco es nuevo","Nunca, porque incomoda al trabajar","Solo si el trabajo es de d\xEDa"],ref:K.epp},{n:7,p:"Los rollos de reserva en la galer\xEDa de cable deben tener una longitud\u2026",o:["Entre 20 a 25 m, de acuerdo con las condiciones del sitio","Entre 28 y 35 m, como en los registros","Entre 2 y 5 m","De 100 m siempre"],ref:K.gal_reserva},{n:7,p:"Los rollos de reserva en la galer\xEDa se colocan\u2026",o:["En la pared del lado opuesto al MDF, a la mayor altura posible, partiendo desde la pared final","En la pared del MDF, pegados a los ductos","En el piso, para que queden m\xE1s seguros","En cualquier pared, si hay espacio"],ref:K.gal_reserva},{n:7,p:"Si el rollo de reserva va en la pared del MDF, \xBFcu\xE1nto espacio se deja libre desde la salida de los ductos?",o:["50 cm hacia el fondo de la galer\xEDa","20 cm","1,20 m","No hace falta espacio"],ref:K.gal_50cm},{n:7,p:"\xBFCon qu\xE9 se fija el cable en las galer\xEDas?",o:["Con pletinas peque\xF1as (de 20 cm) y fajas pl\xE1sticas","Con clavos de madera en el muro","Con cinta adhesiva, sin pletinas","Con el cable suelto, para que se mueva"],ref:K.gal_pletinas},{n:7,p:"\xBFCu\xE1ntas placas de identificaci\xF3n se colocan en un rollo de reserva?",o:["Dos placas de identificaci\xF3n","Una sola, en el centro del rollo","Cuatro, dos a cada lado","Ninguna: el rollo no se identifica"],ref:K.gal_placas},{n:8,p:"\xBFQu\xE9 debe tener el personal t\xE9cnico para atender una emergencia en altura?",o:["Botiqu\xEDn b\xE1sico de primeros auxilios y equipos para rescate vertical: cuerdas de seguridad, mosquetones y pull-lift","Solo el botiqu\xEDn del cami\xF3n, si queda lugar","Solo las cuerdas de la escalera, sin mosquetones","Nada: la ayuda llega sola"],ref:K.eri_antes},{n:8,p:"\xBFCu\xE1ndo un trabajo en altura se considera muy cr\xEDtico?",o:["Cuando pasa de 12 metros de altura","Cuando pasa de 3 metros de altura","Cuando hay m\xE1s de dos trabajadores","Cuando llueve o hay viento"],ref:K.eri_criticas},{n:8,p:"Durante un accidente en altura, \xBFqu\xE9 se hace con el \xE1rea y con los trabajos?",o:["Se despeja completamente el \xE1rea y se suspenden de inmediato las actividades","Se sigue trabajando mientras llega la ayuda","Se despeja solo la mitad del \xE1rea, para no atrasar la labor","Se avisa a la cuadrilla de al lado y se sigue trabajando"],ref:K.eri_despejar},{n:8,p:"Durante una emergencia en altura, \xBFc\xF3mo se pide la ayuda de los cuerpos de emergencia?",o:["Por la l\xEDnea telef\xF3nica 9-1-1","Con un mensaje en el grupo de la cuadrilla","Esperando a que llegue la jefatura","Llevando a la v\xEDctima al hospital en la camioneta"],ref:K.eri_911},{n:8,p:"\xBFQu\xE9 maniobra de rescate se puede hacer si la cuadrilla no la conoce?",o:["Ninguna: no se hacen maniobras de rescate de las que no se tenga conocimiento previo","La que parezca m\xE1s r\xE1pida","Cualquiera, si son dos personas en el sitio","La que indique el compa\xF1ero que mira desde abajo"],ref:K.eri_911},{n:8,p:"Durante una emergencia, \xBFqui\xE9n puede dar informaci\xF3n a personas u organizaciones externas?",o:["Solo la direcci\xF3n o el personal autorizado, mediante comunicados oficiales","Cualquier trabajador de la cuadrilla","El compa\xF1ero que est\xE9 m\xE1s cerca de la prensa","Cualquier persona que pregunte, si dice ser familiar"],ref:K.eri_terceros},{n:9,p:"\xBFQu\xE9 es manejar a la defensiva?",o:["Conducir evitando accidentes a pesar de las acciones incorrectas de los dem\xE1s y de las condiciones adversas","Conducir r\xE1pido para pasar menos tiempo en la carretera","Responderles a los dem\xE1s conductores para que respeten","Manejar solo de d\xEDa y con buen clima"],ref:K.sv_defensivo},{n:9,p:"\xBFCu\xE1les son los cinco elementos del manejo defensivo?",o:["Conocimiento, estar alerta, previsi\xF3n, juicio y habilidad","Velocidad, reflejos, fuerza, suerte y experiencia","Licencia, seguro, marchamo, revisi\xF3n t\xE9cnica y placa","Prisa, frustraci\xF3n, cansancio, complacencia y descuido"],ref:K.sv_defensivo},{n:9,p:"\xBFQu\xE9 porcentaje de los accidentes viales tiene origen en el factor humano?",o:["El 90 %","El 10 %","La mitad","El 25 %"],ref:K.sv_humano},{n:9,p:"\xBFCu\xE1les son los cuatro estados que producen errores al conducir?",o:["Prisa, frustraci\xF3n, cansancio y complacencia","Lluvia, neblina, derrumbes y huecos","Alcohol, drogas, f\xE1rmacos y caf\xE9","Velocidad, curvas, pendientes y peraltes"],ref:K.sv_estados},{n:9,p:"La complacencia al volante es\u2026",o:["El exceso de confianza que lleva a relajar la atenci\xF3n","La falta de fuerzas despu\xE9s de un esfuerzo o por no descansar","La respuesta emocional ante un hecho no gestionado","La rapidez con que se hace una cosa"],ref:K.sv_estados},{n:9,p:"\xBFCada cu\xE1nto se revisan los nueve m\xEDnimos de seguridad vehicular?",o:["Todos los d\xEDas antes de salir con el automotor, siempre que aplique","Una vez al mes, en el taller","Solo cuando el veh\xEDculo hace un ruido raro","Una vez al a\xF1o, con la revisi\xF3n t\xE9cnica"],ref:K.sv_minimos},{n:9,p:"\xBFQu\xE9 dispositivos de advertencia deben estar en buen estado?",o:["Luces altas y bajas, de freno e intermitentes, la bocina y dos juegos de tri\xE1ngulos","Solo la bocina","Solo las luces delanteras","El radio y el aire acondicionado"],ref:K.sv_minimos},{n:9,p:"Seg\xFAn la capacitaci\xF3n, \xBFd\xF3nde se recomienda usar las llantas de recauche?",o:["Solo en la parte trasera del automotor","Solo adelante","En las cuatro posiciones","\xDAnicamente como repuesto"],ref:K.sv_minimos},{n:9,p:"\xBFQui\xE9n puede conducir un veh\xEDculo institucional?",o:["El funcionario que cuenta con los permisos de conducir del ICE","Cualquier compa\xF1ero con licencia","El primero que llegue al plantel","El que tenga m\xE1s experiencia, aunque no tenga el permiso"],ref:K.sv_permiso},{n:10,p:"Al empezar a llover, \xBFpor qu\xE9 se pone resbalosa la calle?",o:["Se forma una especie de jab\xF3n con los residuos de tierra, grasa y gasolina","Porque el agua enfr\xEDa el asfalto","Porque las llantas se desinflan con el agua","No cambia nada: el asfalto no resbala"],ref:K.sv_lluvia},{n:10,p:"En caminos con grava, arenosos o mojados, \xBFqu\xE9 pide el GS-101?",o:["Bajar la velocidad y manejar con cuidado","Subir la velocidad para no quedarse pegado","Frenar fuerte en cada curva","Ir pegado al veh\xEDculo de adelante para seguir su ruta"],ref:K.sv_mojado},{n:10,p:"Llueve tan fuerte que la falta de visibilidad es excesiva. \xBFQu\xE9 se hace?",o:["Detener el veh\xEDculo a un costado de la carretera y esperar que pase la tormenta","Seguir igual, con las luces altas","Seguir de cerca al veh\xEDculo de adelante","Acelerar para salir pronto de la tormenta"],ref:K.sv_visibilidad},{n:10,p:"\xBFPor qu\xE9 la neblina es una de las peores condiciones para conducir?",o:["La habilidad del conductor no puede mejorar la visibilidad ni permitirle aumentar la velocidad","Solo afecta a las motocicletas","Hace que el motor pierda potencia","No es peligrosa si se conoce el camino"],ref:K.sv_lluvia},{n:10,p:"Vas acompa\xF1ado y sientes cansancio al volante. \xBFQu\xE9 indica el GS-101?",o:["Detenerte en un sitio seguro, bajarte, caminar y ceder la conducci\xF3n al compa\xF1ero","Pedirle al compa\xF1ero que te hable para no dormirte","Subir el volumen del radio","Abrir la ventana y seguir hasta llegar"],ref:K.sv_fatiga},{n:10,p:"Con una dosis alta, el alcohol provoca\u2026",o:["Dificultad en el habla, incoordinaci\xF3n, juicio alterado y falta de control emocional","Mejores reflejos para manejar","M\xE1s atenci\xF3n en la carretera","Solo sue\xF1o, sin otros efectos"],ref:K.sv_sustancias},{n:10,p:"Observas o causas un da\xF1o al veh\xEDculo. \xBFQu\xE9 haces?",o:["Lo reportas: no se oculta, puede producir un accidente","Lo arreglas t\xFA en la casa","Lo callas si es peque\xF1o","Esperas a que otro compa\xF1ero lo note"],ref:K.sv_danos},{n:11,p:"\xBFCu\xE1ndo se hace el ATS (an\xE1lisis de trabajo seguro)?",o:["Antes de empezar las labores de cada d\xEDa, con toda la cuadrilla","Una vez por semana, solo el encargado","Al terminar la jornada, para el informe","Solo cuando ya hubo un accidente"],ref:K.gs31_ats},{n:11,p:"A media ma\xF1ana cambia el personal o llega otro equipo. \xBFQu\xE9 pide el GS-31?",o:["Aplicar de nuevo el ATS antes de seguir","Nada: el ATS de la ma\xF1ana sigue valiendo","Anotarlo en el informe del d\xEDa siguiente","Que el compa\xF1ero nuevo firme la pizarra sin leerla"],ref:K.gs31_cambios},{n:11,p:"Una tarea cr\xEDtica tiene un grado de criticidad (GC) de 8 o m\xE1s. \xBFQu\xE9 significa?",o:["Criticidad alta: se atiende primero","Criticidad baja: puede esperar","Criticidad moderada","Nada: el GC es solo un tr\xE1mite"],ref:K.gs31_criticidad},{n:11,p:"En la pizarra del ATS aparece un factor de muerte. \xBFQu\xE9 se hace?",o:["Se revisan en conjunto las acciones a implementar","Nada: es solo un dato de la pizarra","Lo resuelve el t\xE9cnico m\xE1s nuevo","Se anota y se revisa al d\xEDa siguiente"],ref:K.ats_muerte},{n:15,p:"Detectas una anomal\xEDa en el trabajo de tu cuadrilla. \xBFA qui\xE9n se lo informas?",o:["Al coordinador de cuadrilla y/o a SST","A nadie, si ya lo corregiste t\xFA","Solo al cliente, al terminar la obra","A la persona que lo hizo, para que lo anote despu\xE9s"],ref:K.rec_anomalia},{n:15,p:"Un compa\xF1ero sufre un accidente. \xBFQu\xE9 formulario se usa y cu\xE1ndo se avisa a la jefatura?",o:["F07-GS-52 Aviso inmediato, antes de terminar la jornada","F06-GS-52, la pr\xF3xima semana","F01-GS-52, al d\xEDa siguiente","Ning\xFAn formulario: basta con avisar en la charla"],ref:K.rec_accidente},{n:15,p:"Hubo un casi incidente y nadie se lastim\xF3. \xBFQu\xE9 formulario se usa?",o:["F06-GS-52 (o F01-GS-52 si fue grave)","F07-GS-52, el aviso inmediato","Ninguno, porque no hubo lesi\xF3n","El F02-CSCON-SST-00-25 con la firma del compa\xF1ero"],ref:K.rec_cuasi},{n:15,p:"Un compa\xF1ero incumple una regla de SST por primera vez, con riesgo bajo. \xBFQu\xE9 se hace?",o:["Retroalimentaci\xF3n positiva y correctiva, registro en el F02-CSCON-SST-00-25 con su firma, y aviso a la jefatura inmediata","Solo se le llama la atenci\xF3n en privado, sin registro","Se guarda para el informe del a\xF1o siguiente","Se le sanciona de inmediato, sin escuchar su versi\xF3n"],ref:K.rec_liderazgo},{n:15,p:"Hay un peligro inminente para las personas durante una tarea. \xBFQu\xE9 se hace?",o:["Se interrumpe la actividad","Se termina la tarea y luego se corrige","Se sigue con m\xE1s cuidado","Se avisa al final de la semana"],ref:K.rec_inminente},{n:16,p:"\xBFC\xF3mo se entra a una planta solar?",o:["Con autorizaci\xF3n, coordinado con el encargado de la planta","Entrando primero y avisando despu\xE9s","Por la cerca, si el port\xF3n est\xE1 cerrado","Como diga el primero que llegue"],ref:K.demo_generacion_autorizacion},{n:16,p:"\xBFCu\xE1ndo produce electricidad un panel solar?",o:["Mientras le da la luz: por eso se trata como energizado","Solo al mediod\xEDa","Solo si el inversor est\xE1 apagado","Nunca, si el panel est\xE1 sucio"],ref:K.demo_generacion_energizado},{n:16,p:"\xBFSe puede pisar o apoyarse en un panel para ver mejor?",o:["No: no se pisa ni se apoya nadie en los paneles","S\xED, si el panel est\xE1 limpio","S\xED, si la fila es corta","S\xED, con una tabla debajo"],ref:K.demo_generacion_no_pisar},{n:16,p:"\xBFQui\xE9n manipula las conexiones y los inversores de la planta?",o:["Solo personal calificado, seg\xFAn el procedimiento de la planta","Cualquier trabajador de la cuadrilla","Quien llegue primero a la caseta","Quien tenga la llave del port\xF3n"],ref:K.demo_generacion_conexiones},{n:16,p:"Ves un cable suelto y pelado en el camino de la planta. \xBFQu\xE9 haces?",o:["No lo tocas: lo marcas y lo reportas","Lo levantas con la mano para pasar","Lo cortas con la herramienta","Lo envuelves con cinta y sigues"],ref:K.demo_generacion_energizado},{n:16,p:"Llega una tormenta el\xE9ctrica mientras trabajan al aire libre. \xBFQu\xE9 indica el GS-101?",o:["Suspender la actividad por las condiciones del clima","Terminar la fila antes de bajar","Seguir trabajando: la tormenta todav\xEDa no ha llegado","Quedarse donde est\xE1n, a esperar"],ref:K.sol_clima},{n:16,p:"Encuentras un panel con el vidrio roto. \xBFQu\xE9 haces?",o:["Lo marcas y lo reportas al encargado de la planta, sin tocarlo","Lo cambias t\xFA, sin avisar","Lo tapas con cinta para la visita","Lo dejas para la pr\xF3xima visita sin avisar"],ref:K.demo_generacion_danos},{n:16,p:"Hace mucho sol y llevan un rato limpiando. \xBFQu\xE9 se hace?",o:["Tomar agua y descansar a la sombra con frecuencia","Seguir sin parar: el agua se toma al final","Quitarse el casco para refrescarse","Tomar solo caf\xE9, para no sudar"],ref:K.demo_generacion_calor},{n:13,p:"\xBFQu\xE9 sirve de apoyo a la escalera a medio vano, si no hay poste?",o:["El veh\xEDculo: la escalera se amarra a \xE9l","Nada: la escalera se apoya sola en el suelo","Solo un compa\xF1ero que la sostenga, sin amarrarla","El peso del trabajador sobre ella"],ref:K.mv_apoyo},{n:13,p:"\xBFEn cu\xE1ntos puntos se amarra la escalera a medio vano?",o:["En dos: al pant\xF3grafo y al eje de una llanta","En uno: basta con el pant\xF3grafo","En tres: se suma la cabina","No se amarra: el peso de la escalera basta"],ref:K.mv_dos_puntos},{n:13,p:"\xBFQu\xE9 nudo da la tensi\xF3n en el amarre a medio vano?",o:["Nudo ocho aplicado","Nudo alondra","Nudo gaza simple","Nudo ocho en l\xEDnea"],ref:K.mv_nudos},{n:13,p:"\xBFC\xF3mo termina el amarre a medio vano?",o:["Con pata de chancho (nudo ballestrinque)","Con un nudo alondra, sin asegurarlo","Con una gaza simple, suelta","Dejando la cuerda sin amarrar para ajustar despu\xE9s"],ref:K.mv_nudos},{n:13,p:"\xBFCon qu\xE9 se sube por una escalera a medio vano?",o:["Con la cuerda de seguridad sujetada a la escalera","Con la cuerda en el hombro, sin sujetarla","Con las manos ocupadas por herramientas","Sin cuerda, si la escalera es corta"],ref:K.mv_subida},{n:13,p:"Una escalera de 24 pies (7,32 m): \xBFhasta qu\xE9 altura de uso sirve?",o:["6,42 m","7,32 m","7,63 m","5,30 m"],ref:K.mv_tabla2},{n:13,p:"\xBFHasta qu\xE9 pelda\xF1o de la escalera se puede trabajar?",o:["Hasta el que alcanza el trabajo, sin llegar a los tres superiores","Hasta el \xFAltimo, para alcanzar mejor","En el tercero de arriba, si hace falta"],ref:K.mv_tres},{n:14,p:"\xBFQu\xE9 abertura m\xEDnima debe tener una cala para instalar el cable?",o:["1,5 m de largo por 1 m de ancho, como m\xEDnimo","1 m de largo por 1 m de ancho","1,5 m de largo por 0,5 m de ancho","0,8 m de largo por 0,8 m de ancho"],ref:K.cala_abertura},{n:14,p:"Si la abertura entre los extremos del ducto mide 40 cm, \xBFcu\xE1nto debe medir la pieza de PVC de reparaci\xF3n?",o:["90 cm: la abertura m\xE1s 50 cm","40 cm: lo mismo que la abertura","50 cm: solo el sobrante","1,20 m: el triple de la abertura"],ref:K.cala_pieza},{n:14,p:"\xBFHacia d\xF3nde queda la abertura del corte longitudinal de la pieza de reparaci\xF3n?",o:["Hacia arriba","Hacia abajo, contra el ducto","Hacia un costado","No importa la posici\xF3n"],ref:K.cala_ranura},{n:14,p:"\xBFCu\xE1ntas amarras de cinta met\xE1lica o tipo gaza llevan la reparaci\xF3n, y d\xF3nde?",o:["Tres: una en cada extremo y una en el centro","Dos: una en cada extremo","Cuatro: una cada 25 cm","Una sola, en el centro"],ref:K.cala_amarras},{n:14,p:"El preformado mide 75 cm o menos. \xBFA qu\xE9 distancia del poste va el cierre de empalme?",o:["75 cm","1,5 m","30 cm","2 m"],ref:K.cala_empalme},{n:14,p:"En el relleno de la cala, \xBFqu\xE9 capa va justo debajo del lastre?",o:["El material de la excavaci\xF3n, compactado al 95 % del Proctor","El tobacemento","El asfalto","La arena suelta"],ref:K.cala_capas},{n:14,p:"En un tramo recto de 1 km o m\xE1s, \xBFcada cu\xE1nto se ponen las anclas de seguridad?",o:["Cada 500 m","Cada 100 m","Cada 1 km, una sola","Solo en el poste m\xE1s alto"],ref:K.cala_anclas},{n:14,p:"\xBFA qu\xE9 distancia del poste se coloca cada ancla de seguridad?",o:["La mitad de la altura del poste, medida del herraje a la base","Un metro, sin importar la altura","Lo mismo que la altura del poste","Cinco metros, siempre"],ref:K.cala_ancla_distancia},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se le pregunta al cliente?",o:["C\xF3mo est\xE1n el cielorraso y la estructura, y si ha visto cables, goteras o avispas","Solo a qu\xE9 hora puede empezar el trabajo","Nada: si desde abajo se ve bien, se sube","Si puede pagar un trabajo extra"],ref:K.cr_cliente},{n:12,p:"Hay un cable el\xE9ctrico expuesto en el cielorraso. \xBFQu\xE9 se le pide al cliente?",o:["Que desconecte la electricidad antes de subir","Nada: se sube con cuidado, sin tocarlo","Que deje el cable al aire para revisarlo mejor","Que avise cuando el cable se caliente"],ref:K.cr_electrico},{n:12,p:"Si no es posible desconectar la electricidad del cielorraso, \xBFcon qu\xE9 se sube?",o:["Con guantes diel\xE9ctricos, despu\xE9s de revisar la zona a trabajar","Con guantes de cuero","Sin guantes, con cuidado","Con cualquier guante de trabajo"],ref:K.cr_electrico},{n:12,p:"Para trabajar en un cielorraso, \xBFqu\xE9 lleva el casco?",o:["Barbiquejo y linterna","Solo el barbiquejo, sin linterna","Solo la linterna, sin barbiquejo","Nada: el casco se usa solo en la calle"],ref:K.cr_epp},{n:12,p:"\xBFQu\xE9 se revisa desde el suelo antes de subir al cielorraso?",o:["Que no haya colmenas de avispas o similares","Solo la hora del d\xEDa","Que la escalera sea de aluminio","Nada: eso se revisa al terminar"],ref:K.cr_avispas},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se valora?",o:["Si una extensi\xF3n de fibra permite evitar subir","Si el cliente tiene caf\xE9","Cu\xE1nto pesa el trabajador","Si el d\xEDa est\xE1 soleado"],ref:K.cr_extension},{n:12,p:"La estructura del cielorraso debe observarse sin\u2026",o:["Corrosi\xF3n avanzada o madera descompuesta, y estable","Pintura nueva","R\xF3tulos de la oficina","Cables de colores"],ref:K.cr_estructura},{n:12,p:"Una escalera de abrir (tipo A) debe ser de\u2026",o:["Fibra de vidrio","Aluminio, siempre","Madera, sin importar el lugar","Cualquier material, si est\xE1 pintada"],ref:K.cr_escalera_tipo},{n:17,p:"En una obra, \xBFc\xF3mo deben estar los tableros y las cajas el\xE9ctricas?",o:["Tapados, identificados y cerrados","Abiertos, para revisar r\xE1pido los interruptores","Cerrados, aunque no tengan identificaci\xF3n","Como los dej\xF3 el \xFAltimo que los us\xF3"],ref:K.el_tablero},{n:17,p:"\xBFQu\xE9 necesita un medidor el\xE9ctrico provisional en la obra?",o:["Base estable y protecci\xF3n del agua","Solo un r\xF3tulo con el nombre de la obra","Estar en el suelo, donde nadie lo golpee","Nada: es provisional"],ref:K.el_medidor},{n:17,p:"\xBFDe qu\xE9 se protegen los conductores el\xE9ctricos en una obra?",o:["De los da\xF1os mec\xE1nicos: maquinaria, veh\xEDculos, agua y qu\xEDmicos","Solo del sol, con pintura","De nada: se cambian cuando se da\xF1an","Solo de la lluvia, con cinta aislante"],ref:K.el_conductores},{n:17,p:"\xBFCon qui\xE9n se aplica la lista de verificaci\xF3n del Anexo C del C\xF3digo El\xE9ctrico?",o:["En conjunto con un t\xE9cnico el\xE9ctrico","Solo, desde la oficina","Con el primer pe\xF3n que est\xE9 libre","Con el cliente, al entregar la obra"],ref:K.el_anexo_c},{n:17,p:"\xBFCu\xE1l de estos es un acto inseguro con electricidad?",o:["Intervenir sin autorizaci\xF3n","Usar el EPP diel\xE9ctrico","Reportar un enchufe deteriorado","Mantener el tablero cerrado"],ref:K.el_autorizacion},{n:17,p:"Con la piel h\xFAmeda o sudada, la resistencia del cuerpo a la corriente\u2026",o:["Baja","Sube","No cambia","Depende solo del calzado"],ref:K.el_mojado},{n:17,p:"\xBFQu\xE9 factores influyen en la magnitud de un incidente el\xE9ctrico?",o:["Intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria","Solo el color del cable","Solo la hora del d\xEDa","La marca del tablero y del medidor"],ref:K.el_factores},{n:17,p:"Seg\xFAn el Anexo B, una instalaci\xF3n es de peligro inminente o alto riesgo cuando\u2026",o:["Carece de protecci\xF3n frente al contacto con partes energizadas o el cortocircuito","Tiene m\xE1s de un tablero","Es provisional, aunque cumpla con todo","Alguien ya se lastim\xF3 en ella"],ref:K.el_anexo_b}],NA={registro:{titulo:"Una persona camina mirando el celular hacia el registro abierto",opciones:[{t:"STOP: Andr\xE9s la detiene y la gu\xEDa por fuera del \xE1rea se\xF1alizada",ok:!0},{t:"Le gritamos desde adentro del registro",ok:!1},{t:"Seguimos: los conos ya est\xE1n puestos",ok:!1},{t:"Ponemos la tapa encima con el compa\xF1ero adentro",ok:!1}],explicacion:"Un registro abierto es un hueco en plena acera. El per\xEDmetro se asegura con se\xF1alizaci\xF3n vial y peatonal y, si alguien entra al \xE1rea, se detiene la labor y se le gu\xEDa fuera.",ref:K.ev_registro,consecuencia:"La persona tropez\xF3 con el borde del registro y por poco cae adentro, sobre tu compa\xF1ero."},impaciente:{titulo:"Un conductor impaciente ignora el ALTO del banderero",opciones:[{t:"STOP: todos fuera de la calzada, dejamos pasar al veh\xEDculo y luego retomamos el control del tr\xE1nsito",ok:!0},{t:"Andr\xE9s se planta frente al auto para obligarlo a frenar",ok:!1},{t:"Seguimos pasando el cable: ya va a frenar",ok:!1},{t:"Le gritamos y le golpeamos el auto cuando pase",ok:!1}],explicacion:"Ninguna paleta detiene a un auto que no quiere detenerse. Ante un conductor que no respeta la se\xF1al, se evacua la calzada y nadie se le atraviesa; despu\xE9s se retoma el control (y se reporta si es necesario).",ref:K.ev_impaciente,consecuencia:"El auto pas\xF3 a cent\xEDmetros de Andr\xE9s, que estaba en medio de la calzada con la gu\xEDa del cable. La paleta ALTO no es un escudo."},peaton:{titulo:"Una persona entr\xF3 al \xE1rea se\xF1alizada",opciones:[{t:"Detengo la labor y pido a Andr\xE9s que gu\xEDe a la persona fuera del \xE1rea",ok:!0},{t:"Sigo tensando: ya casi termino",ok:!1},{t:"Le grito desde arriba que se aleje, sin dejar de trabajar",ok:!1},{t:"Bajo r\xE1pido por la escalera para sacarla yo",ok:!1}],explicacion:"El \xE1rea restringida protege a terceros de la ca\xEDda de herramientas o materiales. Se detiene la labor hasta despejarla.",ref:K.demarcacion,consecuencia:"Un herraje se solt\xF3 y cay\xF3 a medio metro de la persona. Nadie sali\xF3 herido, pero pudo terminar en tragedia."},companero:{titulo:"Andr\xE9s quiere subir a la escalera para ayudarte",opciones:[{t:"Lo detengo: solo un trabajador en la escalera; que suba el material con la cuerda",ok:!0},{t:"Que suba, son solo unos segundos",ok:!1},{t:"Que suba hasta la mitad y desde ah\xED me pase el herraje",ok:!1},{t:"Que me lance el herraje desde abajo",ok:!1}],explicacion:"Sobre la escalera port\xE1til se permite un solo trabajador. Los materiales se suben con bolso, mecate o cuerda.",ref:K.escaleras,consecuencia:"Con dos personas encima, la escalera se torci\xF3 en el amarre medio. Los dos quedaron colgando de la l\xEDnea de vida."},vehiculo:{titulo:"Un veh\xEDculo se acerca r\xE1pido al \xE1rea de trabajo",opciones:[{t:"Detengo la labor; Andr\xE9s regula el paso con la se\xF1alizaci\xF3n y esperamos a que pase",ok:!0},{t:"Sigo trabajando: los conos son suficientes",ok:!1},{t:"Bajo corriendo a quitar los conos del camino",ok:!1},{t:"Le hago se\xF1as desde la escalera sin dejar de trabajar",ok:!1}],explicacion:"La se\xF1alizaci\xF3n vial protege a la cuadrilla. Si un veh\xEDculo no respeta el \xE1rea, se detiene la labor y se regula el tr\xE1nsito antes de continuar.",ref:K.demarcacion,consecuencia:"El auto pas\xF3 rozando la escalera: la sacudida casi te tira. La se\xF1alizaci\xF3n sola no basta si nadie vigila el tr\xE1nsito."},tormenta:{titulo:"La lluvia se volvi\xF3 torrencial y hay rayer\xEDa",opciones:[{t:"Suspendo: aseguro herramientas, desciendo con tres puntos de apoyo y espero a que pase",ok:!0},{t:"Termino r\xE1pido el tensado antes de bajar",ok:!1},{t:"Me quedo arriba esperando a que escampe",ok:!1},{t:"Me quito los guantes mojados para tener m\xE1s agarre",ok:!1}],explicacion:"Se proh\xEDbe el trabajo en altura con tormenta el\xE9ctrica, lluvia torrencial o vientos de 60 km/h o m\xE1s.",ref:K.altura,consecuencia:"Un rayo cay\xF3 a dos cuadras. Con el agua, los pelda\xF1os quedaron resbalosos y perdiste un apoyo al bajar."},viento:{titulo:"Una r\xE1faga supera los 60 km/h mientras la cuadrilla trabaja en el techo",opciones:[{t:"Suspender la labor y bajar del techo, anclados a la l\xEDnea vertical de la escalera",ok:!0},{t:"Seguir: la r\xE1faga pasa en unos segundos",ok:!1},{t:"Seguir agachados, sin soltar el trabajo",ok:!1},{t:"Bajar de un salto para no esperar la escalera",ok:!1}],consecuencia:"Con vientos superiores a 60 km/h no se trabaja en techos.",explicacion:"No se debe trabajar en techos con vientos superiores a 60 km/h. Se suspende la labor y se baja de forma segura.",ref:K.t_techo_clima},presion:{titulo:"Andr\xE9s quiere subir ya: \xABel poste local se ve bien\xBB",opciones:[{t:"Seguimos: se inspeccionan el poste anterior, el local, el posterior y el tendido antes de subir",ok:!0},{t:"Subimos: el poste local est\xE1 bien",ok:!1},{t:"Que suba Andr\xE9s a revisar, es r\xE1pido",ok:!1},{t:"Subimos y revisamos los dem\xE1s postes despu\xE9s",ok:!1}],explicacion:"El encargado de cuadrilla verifica y asegura el ascenso al poste antes de iniciar la actividad. La inspecci\xF3n incluye el poste anterior, el posterior, el local y el tendido entre postes.",ref:ci.inspeccion,consecuencia:"El poste posterior ten\xEDa una falla visible. Subir sin inspeccionarlo habr\xEDa sido hacerlo sobre un poste no verificado."},poda_peaton:{titulo:"Un peat\xF3n camina por la acera y entra en la zona de ca\xEDda de la rama",opciones:[{t:"STOP: se detiene la labor y un compa\xF1ero lo gu\xEDa fuera de la zona se\xF1alizada",ok:!0},{t:"Le gritamos, pero seguimos cortando",ok:!1},{t:"Seguimos: la rama ya cay\xF3",ok:!1},{t:"Que pase r\xE1pido por debajo de la rama",ok:!1}],explicacion:"Mientras haya una rama por caer o ca\xEDda en la zona, la labor se detiene y se regula el paso: nadie camina dentro de la zona de ca\xEDda (GS-101 \xA75.6.10 n y o).",ref:K.poda_trayectoria,consecuencia:"La persona qued\xF3 bajo la rama. Quien corta debe detener la labor a tiempo."},galeria_vigia:{titulo:"El compa\xF1ero de afuera deja de responder desde la tapa mientras est\xE1s en la galer\xEDa",opciones:[{t:"STOP: se detiene la labor y quien est\xE1 adentro sale por la escalera",ok:!0},{t:"Seguimos: el compa\xF1ero seguro est\xE1 atento",ok:!1},{t:"Gritamos desde el fondo de la galer\xEDa y seguimos con las pletinas",ok:!1},{t:"Dejamos el detector y seguimos cerca del rollo",ok:!1}],explicacion:"Sin contacto con quien vigila la tapa, se detiene la labor y se sale. La fuente no describe la comunicaci\xF3n en espacios confinados: se anota como duda en PENDIENTES_SST.md (J10).",ref:K.gal_vigia,consecuencia:"Quien estaba adentro sigui\xF3 trabajando sin que nadie lo viera desde la tapa."}};var BA=T_.filter(n=>n.n===5);var Im=[{urls:"stun:stun.l.google.com:19302"}],w_=11;function Dm({sala:n,id:e,alMensaje:t,alPar:a}){let i=`realtime:mundo-${n}`,r={ws:"conectando",rtt:null,pares:new Map,presencia:!1},o,s=0,c=!1,l=!1,d=0,p=[],u=(g,_,T=i)=>{o?.readyState===1&&o.send(JSON.stringify({topic:T,event:g,payload:_,ref:String(++s)}))},f=(g,_)=>u("broadcast",{type:"broadcast",event:g,payload:_});function x(){r.ws="conectando",c=!1,o=new WebSocket(`${qu.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${qu.llave}&vsn=1.0.0`),o.onopen=()=>u("phx_join",{config:{broadcast:{self:!0},presence:{key:e},private:!1}}),o.onerror=()=>{r.ws="error"},o.onclose=()=>{r.ws!=="error"&&(r.ws="cerrado"),l||setTimeout(x,3e3)},o.onmessage=g=>{let _=JSON.parse(g.data);if(_.topic===i){if(_.event==="phx_reply"&&!c){if(_.payload?.status!=="ok"){r.ws="rechazado";return}c=!0,r.ws="unido",u("presence",{type:"presence",event:"track",payload:{id:e}}),f("eco",{id:e,t:performance.now()})}else if(_.event==="presence_state"){for(let T of Object.keys(_.payload))y(T);r.presencia=!0}else if(_.event==="presence_diff"){for(let T of Object.keys(_.payload.joins??{}))y(T);for(let T of Object.keys(_.payload.leaves??{}))T in(_.payload.joins??{})||m(T)}else if(_.event==="broadcast"){let T=_.payload.payload;_.payload.event==="eco"?T.id===e&&(r.rtt=performance.now()-T.t):T.de===e||r.pares.has(T.de)&&(_.payload.event==="rtc"?T.a===e&&T.sdp&&v(T).catch(()=>{}):(_.payload.event==="m"&&!r.pares.get(T.de).directo||_.payload.event==="f")&&t(T.m,T.de))}}}}function y(g){if(g===e||r.pares.has(g)||r.pares.size>=w_)return;let _={id:g,pc:null,canal:null,directo:!1,rtt:null};r.pares.set(g,_),a?.(g,!0),typeof RTCPeerConnection<"u"&&e<g&&E(_).catch(()=>{})}function m(g){let _=r.pares.get(g);_&&(_.pc?.close(),r.pares.delete(g),a?.(g,!1))}function h(g,_){g.canal=_,_.onopen=()=>{g.directo=!0},_.onclose=()=>{g.directo=!1},_.onmessage=T=>{let D=JSON.parse(T.data);D.t==="ping"?_.send(JSON.stringify({t:"pong",v:D.v})):D.t==="pong"?g.rtt=performance.now()-D.v:t(D,g.id)}}let b=g=>new Promise(_=>{if(g.iceGatheringState==="complete")return _();let T=setTimeout(_,2e3);g.addEventListener("icegatheringstatechange",()=>{g.iceGatheringState==="complete"&&(clearTimeout(T),_())})});async function E(g){g.pc?.close(),g.tOferta=performance.now(),g.intentos=(g.intentos??0)+1;let _=g.pc=new RTCPeerConnection({iceServers:Im});h(g,_.createDataChannel("m",{ordered:!1,maxRetransmits:0})),await _.setLocalDescription(await _.createOffer()),await b(_),f("rtc",{de:e,a:g.id,sdp:_.localDescription})}async function v({de:g,sdp:_}){let T=r.pares.get(g);if(_.type==="offer"){T.pc?.close();let D=T.pc=new RTCPeerConnection({iceServers:Im});D.ondatachannel=N=>h(T,N.channel),await D.setRemoteDescription(_),await D.setLocalDescription(await D.createAnswer()),await b(D),f("rtc",{de:e,a:g,sdp:D.localDescription})}else await T.pc?.setRemoteDescription(_)}function M(g){let _=JSON.stringify(g),T=!1;for(let N of r.pares.values())N.directo&&N.canal.readyState==="open"?N.canal.send(_):T=!0;let D=performance.now();T&&c&&D-d>500&&(d=D,f("m",{de:e,m:g}))}let A=g=>f("f",{de:e,m:g});p.push(setInterval(()=>u("heartbeat",{},"phoenix"),25e3)),p.push(setInterval(()=>{c&&f("eco",{id:e,t:performance.now()});for(let g of r.pares.values())g.directo&&g.canal.readyState==="open"?g.canal.send(JSON.stringify({t:"ping",v:performance.now()})):c&&e<g.id&&typeof RTCPeerConnection<"u"&&g.intentos<5&&performance.now()-g.tOferta>7e3&&E(g).catch(()=>{})},4e3)),x();function w(){l=!0,p.forEach(clearInterval);for(let g of[...r.pares.keys()])m(g);o?.close()}return{estado:r,enviar:M,fiable:A,cerrar:w}}var $u=(n,e)=>Math.max(1,Math.round(n*(e==="aprendiz"?.65:1))),Wu=(n,e)=>Math.max(0,n-e),C_=(n,e)=>Math.min(100,n+e*.25),Lm=n=>n>=90?3:n>=75?2:n>=60?1:0;function Fm(n){let e=100;for(let t of n)e=t.tipo==="acierto"?C_(e,t.puntos):Wu(e,t.puntos);return e}var Nm={encargado:{nombre:"Encargado de cuadrilla",corto:"Encargado",icono:"\u{1F4CB}",camisa:3108789,resumen:"Dirige el ATS, inspecciona el poste y comprueba la conexi\xF3n antes del ascenso."},sst:{nombre:"SST \xB7 prevencionista",corto:"SST",icono:"\u{1F9BA}",camisa:4170603,resumen:"Verifica el EPP y el \xE1rea de trabajo antes de que alguien suba."},liniero:{nombre:"Liniero",corto:"Liniero",icono:"\u{1F9D7}",camisa:16040475,resumen:"Lleva conos y cuerdas, arma el per\xEDmetro, sube y se asegura arriba."},auxiliar1:{nombre:"Auxiliar 1",corto:"Auxiliar 1",icono:"\u{1FA9C}",camisa:15304235,resumen:"Inspecciona y carga la escalera, la levanta a 75\xB0 y tensa la cuerda."},auxiliar2:{nombre:"Auxiliar 2",corto:"Auxiliar 2",icono:"\u{1FAA2}",camisa:13199902,resumen:"Carga la escalera, la presenta al poste y la amarra a media altura."}},Bm=8,Um=["Listo","\xA1Alto!","Espera un momento","Escalera amarrada","Subiendo","Necesito ayuda"],zm=[{id:"ats",rol:"encargado",lugar:"pickup",nombre:"ATS del d\xEDa",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"\xBFC\xF3mo empieza la jornada?",opciones:["Con el ATS: toda la cuadrilla analiza los riesgos de la tarea y se reparten las funciones","Cada quien toma su equipo y el riesgo se analiza si aparece un problema","El encargado llena el ATS solo, mientras los dem\xE1s adelantan el trabajo"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"epp",rol:"sst",lugar:"pickup",nombre:"Revisar el EPP de la cuadrilla",accion:"Revisar el EPP",fisico:[],antes:["ats"],puntos:8,pregunta:"\xBFCu\xE1ndo se revisa el equipo de protecci\xF3n?",opciones:["Antes de usarlo, a la vista y con sus pruebas; lo que tenga defecto no se usa y se pide el cambio","Una vez por semestre, en la revisi\xF3n planificada con SST","Solo cuando es nuevo o cuando el da\xF1o se nota desde lejos"],porque:"Cada quien revisa su EPP antes de usarlo; el equipo de altura con defecto no se usa.",ref:"GS-101 \xB7 \xA75.3.8 a) EPP revisado antes de su uso y \xA75.5 f) equipo de altura con defecto no se usa (p\xE1gs. 17 y 19)"},{id:"inspeccion",rol:"auxiliar1",lugar:"pickup",nombre:"Inspeccionar la escalera",accion:"Inspeccionar la escalera",fisico:[],antes:["ats"],puntos:8,pregunta:"Antes de bajar la escalera del pick-up\u2026",opciones:["Reviso que no tenga piezas faltantes, da\xF1adas o flojas y que los pelda\xF1os est\xE9n limpios","Nada: con la inspecci\xF3n de cada a\xF1o es suficiente","La reviso arriba, cuando ya est\xE9 apoyada en el poste"],porque:"La escalera se inspecciona cada vez que se usa, antes de subir.",ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"cuerdas",rol:"liniero",lugar:"pickup",nombre:"Tomar conos y cuerdas",accion:"Tomar conos y cuerdas",fisico:[],antes:["ats"],puntos:6,pregunta:"\xBFQu\xE9 cuerda llevas para asegurar la escalera?",opciones:["Cuerda de seguridad est\xE1tica de 10 mm y 12 m, con capacidad de 24 kN","El mecate de nailon que haya en el pick-up","Cualquier cuerda, si se le hacen suficientes nudos"],porque:"El amarre se hace con cuerda de seguridad est\xE1tica de 10 mm, 12 m y 24 kN.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda de seguridad est\xE1tica de 10 mm, 12 m de largo y 24 kN (p. 26)"},{id:"tomar",rol:"auxiliar1",lugar:"pickup",nombre:"Bajar la escalera entre dos",accion:"Tomar la escalera",fisico:[],antes:["inspeccion"],puntos:8,pregunta:"La escalera es de 28 pies (8,53 m). \xBFC\xF3mo se traslada?",opciones:["Entre dos personas, deposit\xE1ndola, sin tirarla","La lleva uno solo al hombro, para ir m\xE1s r\xE1pido","Entre dos, y al llegar se deja caer junto al poste"],porque:"Desde 28 pies la escalera se traslada y se coloca entre dos, y se deposita: no se tira.",ref:"GS-101 \xB7 \xA75.6.4 a) y o) Escalera de 28 pies o m\xE1s: trasladada y colocada por 2 personas (p\xE1gs. 22\u201323)"},{id:"tomar2",rol:"auxiliar2",lugar:"pickup",nombre:"Tomar el otro extremo",accion:"Tomar el otro extremo de la escalera",fisico:[],antes:["inspeccion"],puntos:4,ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"llegada",rol:"auxiliar1",auto:!0,lugar:"poste",nombre:"Llevar la escalera al poste",fisico:["tomar","tomar2"],antes:[],puntos:0},{id:"poste",rol:"encargado",lugar:"poste",nombre:"Inspeccionar el poste",accion:"Inspeccionar el poste",fisico:[],antes:["ats"],puntos:10,pregunta:"\xBFQu\xE9 revisas antes de autorizar el ascenso al poste?",opciones:["Que no se mueva, no est\xE9 inclinado ni da\xF1ado; y tambi\xE9n el poste anterior, el posterior y el tendido","Solo que este poste est\xE9 a plomo; los vecinos no importan","Nada: si ayer se subi\xF3, hoy tambi\xE9n se puede"],porque:"El encargado inspecciona el poste, el anterior, el posterior y el tendido; con fallas no se trabaja y se reporta.",ref:"GS-101 \xB7 \xA75.6.3 Inspecci\xF3n de poster\xEDa por el encargado de cuadrilla (p. 21)"},{id:"perimetro",rol:"liniero",lugar:"poste",nombre:"Armar el per\xEDmetro",accion:"Colocar conos y cinta",fisico:["llegada","cuerdas"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se cierra el \xE1rea de la escalera?",opciones:["Con cinta y conos, a 2 m como m\xEDnimo alrededor de la escalera","Con un cono al pie de la escalera","En la acera no hace falta: solo en la calzada"],porque:"El \xE1rea se cierra y se se\xF1aliza a un m\xEDnimo de 2 m de la escalera.",ref:"GS-101 \xB7 \xA75.6.4 g) Cerramiento y se\xF1alizaci\xF3n a un m\xEDnimo de 2 m de la escalera (p\xE1gs. 22\u201323)"},{id:"cuerda_extension",rol:"liniero",lugar:"poste",nombre:"Cuerda en la extensi\xF3n",accion:"Instalar la cuerda en la escalera",fisico:["llegada","cuerdas"],antes:["poste"],puntos:10,pregunta:"Antes de levantar la escalera, \xBFd\xF3nde va la cuerda de seguridad?",opciones:["En el \xFAltimo pelda\xF1o de la extensi\xF3n: rodea el poste por detr\xE1s y baja por el frente; ser\xE1 la l\xEDnea de vida vertical","Se amarra cuando el liniero ya est\xE9 arriba","En el primer pelda\xF1o, para que no estorbe"],porque:"La cuerda se instala previamente en el \xFAltimo pelda\xF1o de la extensi\xF3n y, al bajar por el frente, es la l\xEDnea de vida vertical.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda en el \xFAltimo pelda\xF1o de la extensi\xF3n; sirve como l\xEDnea de vida vertical (p\xE1gs. 24\u201325)"},{id:"orientar",rol:"auxiliar2",lugar:"poste",nombre:"Presentar la escalera al poste",accion:"Presentar la escalera",fisico:["llegada"],antes:["cuerda_extension"],puntos:6,pregunta:"\xBFC\xF3mo queda la escalera frente al poste?",opciones:["La secci\xF3n fija hacia el poste; la que sube y baja, de frente al trabajador","La secci\xF3n que sube y baja, hacia el poste","De lado, apoyada en un solo larguero"],porque:"La parte fija queda hacia el poste y la que asciende y desciende, de frente al trabajador.",ref:"GS-101 \xB7 \xA75.6.5 a) Escalera de frente: la parte fija hacia el poste (p. 24)"},{id:"colocar",rol:"auxiliar1",lugar:"poste",nombre:"Levantar la escalera a 75\xB0",accion:"Levantar la escalera",fisico:["orientar"],antes:[],puntos:10,pregunta:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera?",opciones:["75\xB0: con la punta de los zapatos en la base y los brazos estirados, los dedos tocan los pelda\xF1os","60\xB0: m\xE1s acostada es m\xE1s estable","85\xB0: casi vertical, pegada al poste"],porque:"La escalera va a 75\xB0, o se comprueba con la prueba de los zapatos y los brazos estirados. Es lo mismo que separar la base un cuarto del largo de la escalera.",ref:"GS-101 \xB7 \xA75.6.5 a) \xC1ngulo de 75\xB0 o prueba de los brazos estirados (p. 24) \xB7 GS-98: base separada un cuarto de la longitud"},{id:"tensar",rol:"auxiliar1",lugar:"poste",nombre:"Tensar la cuerda que baja",accion:"Tensar la cuerda",fisico:["colocar","cuerda_extension"],antes:[],puntos:8,pregunta:"La cuerda baja por el frente y pasa por el primer pelda\xF1o. \xBFCon qu\xE9 nudo se bloquea al final?",opciones:["Con un ballestrinque (pata de chancho), despu\xE9s de tensarla con el ocho en l\xEDnea","Con un nudo corredizo, para soltarla r\xE1pido","Con varias vueltas al larguero, sin nudo"],porque:"Se tensa con el ocho en l\xEDnea o la gaza y se termina con una pata de chancho que bloquea la cuerda.",ref:"GS-101 \xB7 \xA75.6.5 c) Tensar con ocho en l\xEDnea o gaza y terminar con pata de chancho (p\xE1gs. 25\u201326)"},{id:"amarre_medio",rol:"auxiliar2",lugar:"poste",nombre:"Amarrar a media altura",accion:"Amarrar la escalera al poste",fisico:["colocar"],antes:[],puntos:10,pregunta:"\xBFEn cu\xE1ntos puntos debe quedar sujeta la escalera al poste?",opciones:["En dos como m\xEDnimo: arriba y en la parte media, con la cuerda de 12 m","En uno: con el amarre de arriba es suficiente","En ninguno, si un compa\xF1ero la sostiene"],porque:"El amarre en la parte media se hace siempre: la escalera queda sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea",accion:"Verificar el \xE1rea de trabajo",fisico:["colocar"],antes:["perimetro","tensar","amarre_medio","epp"],puntos:8,pregunta:"\xBFQu\xE9 confirmas antes de dar el visto bueno al ascenso?",opciones:["Per\xEDmetro armado, escalera amarrada en dos puntos y sin vientos fuertes, lluvia torrencial ni rayer\xEDa","Que el liniero tenga prisa: entre m\xE1s r\xE1pido, menos exposici\xF3n","Solo el per\xEDmetro; el clima se valora si alguien se queja"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:"GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23) \xB7 GS-98: el prevencionista verifica las condiciones antes de la tarea en altura"},{id:"carrito",rol:"liniero",lugar:"poste",nombre:"Conectar el carrito",accion:"Conectar el carrito a la cuerda",fisico:["colocar","cuerda_extension"],antes:["tensar"],puntos:12,pregunta:"El carrito (freno de cuerda) corre por la l\xEDnea de vida vertical. \xBFA qu\xE9 parte del arn\xE9s se conecta?",opciones:["A la argolla frontal, la del pecho","Al portaganchos del arn\xE9s","A una argolla lateral de la cadera"],porque:"La detenci\xF3n de ca\xEDdas solo se conecta a la argolla dorsal o a la pectoral. El portaganchos y las argollas laterales no detienen una ca\xEDda.",ref:"GS-98 \xB7 Sistemas personales de detenci\xF3n de ca\xEDdas: solo argollas de detenci\xF3n dorsal o pectoral \xB7 GS-101 \xA75.6.1 f) Freno para cuerda (p. 20)"},{id:"conexion",rol:"encargado",lugar:"poste",nombre:"Comprobar la conexi\xF3n",accion:"Comprobar la conexi\xF3n del liniero",fisico:["carrito"],antes:["area"],puntos:12,pregunta:"El liniero ya se conect\xF3. \xBFQu\xE9 haces antes de que suba?",opciones:["Compruebo con mis manos su conexi\xF3n y su arn\xE9s: un compa\xF1ero siempre la revisa","Le pregunto si est\xE1 listo y conf\xEDo en su palabra","Lo dejo subir y lo reviso desde abajo, a la vista"],porque:"Antes de subir, un compa\xF1ero comprueba que la conexi\xF3n est\xE9 correcta (conexi\xF3n falsa).",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)"},{id:"subir",rol:"liniero",lugar:"poste",nombre:"Subir la escalera",accion:"Subir",fisico:["colocar"],antes:["perimetro","amarre_medio","carrito","conexion"],puntos:12,pregunta:"\xBFC\xF3mo se sube?",opciones:["De frente, con las manos libres y tres puntos de apoyo; la herramienta sube por cuerda y no uso los tres pelda\xF1os de arriba","Con la herramienta en una mano y agarrado con la otra","Hasta el \xFAltimo pelda\xF1o, para alcanzar mejor"],porque:"Se sube de frente con tres puntos de apoyo, la herramienta sube por cuerda y los tres pelda\xF1os superiores est\xE1n prohibidos.",ref:"GS-101 \xB7 \xA75.6.4 j) y k) Tres puntos de apoyo; Tabla 2: prohibidos los tres pelda\xF1os superiores (p\xE1gs. 22\u201323)"},{id:"faja",rol:"liniero",lugar:"arriba",nombre:"Faja de posicionamiento",accion:"Colocar la faja de posicionamiento",fisico:["subir"],antes:[],puntos:12,pregunta:"\xBFC\xF3mo se coloca la faja de posicionamiento (estrobo)?",opciones:["De una argolla lateral, en M por un pelda\xF1o y al menos 3 cables de fibra, hasta la otra argolla lateral","Las dos puntas al portaganchos del arn\xE9s","Una punta a una argolla lateral y la otra suelta, para moverme mejor"],porque:"La faja va de argolla lateral a argolla lateral, abrazando en M un pelda\xF1o y al menos 3 cables de fibra. Sola no detiene una ca\xEDda: por eso sigue la l\xEDnea de vida.",ref:"GS-101 \xB7 \xA75.6.1 d) Faja de posicionamiento (estrobo) \xB7 GS-98: el posicionamiento no protege contra ca\xEDdas por s\xED solo \xB7 forma en M: pr\xE1ctica de la cuadrilla, en revisi\xF3n por Salud Ocupacional"},{id:"linea_vida",rol:"liniero",lugar:"arriba",nombre:"L\xEDnea de vida",accion:"Anclar la l\xEDnea de vida",fisico:["faja"],antes:[],puntos:12,pregunta:"\xBFD\xF3nde va la l\xEDnea de vida de tu argolla dorsal?",opciones:["A un punto de anclaje seguro, de preferencia arriba de la cabeza","Al mismo pelda\xF1o donde tengo la faja","A los cables de fibra"],porque:"La l\xEDnea de vida va del anillo dorsal a un punto de anclaje, de preferencia arriba de la cabeza. Un pelda\xF1o o un cable no son puntos de anclaje.",ref:"GS-101 \xB7 \xA75.5 h) e i) L\xEDnea de vida en el anillo dorsal, a un anclaje arriba de la cabeza (p. 19) \xB7 GS-98: el anclaje soporta 2 268 kg por persona"}];var Om={encargado:"Planifica el cruce en el ATS, revisa la ruta y las distancias a las l\xEDneas el\xE9ctricas y comprueba la altura final.",sst:"Se\xF1aliza la calle, detiene el tr\xE1nsito mientras el cable cruza y lo libera al final.",liniero:"Sube a P05, coloca la polea, hala y tensa el cable, lo fija con preformado y deja la reserva.",auxiliar1:"Monta la bobina en P04, cuida la curvatura del cable y coloca los conos en la calle.",auxiliar2:"Amarra la gu\xEDa al cable y cruza la calle con ella cuando el tr\xE1nsito est\xE1 detenido."},Gm=["Listo","\xA1Alto!","Espera un momento","Tr\xE1nsito detenido","Halando","Necesito ayuda"],Yo="GS-101 \xB7 \xA75.6.2 Demarcaci\xF3n: cinta amarilla de precauci\xF3n, conos reflectivos y rotulaci\xF3n (p. 21)",Hm=[{id:"t_ats",rol:"encargado",lugar:"pickup",nombre:"ATS del tendido",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"El cable nuevo va de P04 a P05 y cruza la calle. \xBFCu\xE1ndo se analiza ese riesgo?",opciones:["En el ATS, antes de empezar y con toda la cuadrilla: el cruce, el tr\xE1nsito y qui\xE9n hace qu\xE9","Cuando el cable ya est\xE9 sobre la calle, si hay tr\xE1nsito","El encargado lo anota solo; los dem\xE1s van sacando la bobina"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"t_ruta",rol:"encargado",lugar:"poste",nombre:"Revisar la ruta",accion:"Revisar postes y retenidas",fisico:[],antes:["t_ats"],puntos:10,pregunta:"Antes de tender, \xBFqu\xE9 revisas en la ruta del cable?",opciones:["Que los postes, las retenidas y las anclas est\xE9n en buen estado, aplomados, anclados y con la altura adecuada","Solo el poste donde va a subir el liniero","Nada: los postes los revisa el due\xF1o de la poster\xEDa"],porque:"Antes de un tendido a\xE9reo se comprueba que postes, retenidas y anclas est\xE9n en buen estado, aplomados, anclados y con la altura adecuada.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 a) Preparaci\xF3n antes de instalar: postes, retenidas y anclas (p. 23)"},{id:"t_distancias",rol:"encargado",lugar:"poste",nombre:"Distancias a lo el\xE9ctrico",accion:"Revisar las distancias",fisico:[],antes:["t_ruta"],puntos:12,pregunta:"P05 tiene un transformador. \xBFPor d\xF3nde va el cable nuevo?",opciones:["Nunca sobre el transformador ni sobre l\xEDneas el\xE9ctricas: a 40 cm de la secundaria (80 cm del neutro si no hay secundaria) y a 1 m de las ramas","Por encima del transformador, donde no estorba a nadie","Pegado a la secundaria: es de baja tensi\xF3n"],porque:"Ning\xFAn cable se instala sobre un transformador o una l\xEDnea el\xE9ctrica. Distancias m\xEDnimas: 40 cm a la secundaria, 80 cm al neutro si no hay secundaria, 50 cm a r\xF3tulos y 1 m a ramas.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 b) y c) Distancias a l\xEDneas el\xE9ctricas, r\xF3tulos y ramas; nunca sobre transformador (p. 23)"},{id:"t_senal",rol:"sst",lugar:"calle",nombre:"Se\xF1alizar la calle",accion:"Se\xF1alizar el cruce",fisico:[],antes:["t_ats"],puntos:10,pregunta:"El cable va a pasar sobre la calle. \xBFC\xF3mo se asegura el \xE1rea?",opciones:["Se delimita con conos y cinta, se advierte a los conductores y una persona por sentido regula el tr\xE1nsito mientras el cable cruza","Un cono junto a cada poste; la calle sigue igual","No hace falta: el cable va por arriba"],porque:"La zona de trabajo se delimita con cinta, conos y rotulaci\xF3n seg\xFAn la zona. Para pasar el cable sobre la calle, una persona regula el tr\xE1nsito en cada sentido.",ref:`${Yo} \xB7 un banderero por sentido: igual que en la jornada del cruce de calle, en revisi\xF3n por Salud Ocupacional`},{id:"t_conos",rol:"auxiliar1",lugar:"calle",nombre:"Conos en los dos sentidos",accion:"Colocar los conos",fisico:[],antes:["t_senal"],puntos:6,ref:Yo},{id:"t_bobina",rol:"auxiliar1",lugar:"bobina",nombre:"Montar la bobina",accion:"Montar la bobina",fisico:[],antes:["t_ats"],puntos:10,pregunta:"La bobina est\xE1 en su soporte junto a P04. \xBFQu\xE9 cuidas cuando el cable sale de ella?",opciones:["Que nunca se doble con un radio menor a 20 veces su di\xE1metro","Que salga r\xE1pido: las curvas se enderezan al tensar","Hacer un rollo apretado en el suelo para que no se enrede"],porque:"En el tendido el cable no puede tener curvaturas con un radio menor a 20 veces su di\xE1metro: la fibra se da\xF1a.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura: 20 veces el di\xE1metro del cable (p. 16)"},{id:"t_guia",rol:"auxiliar2",lugar:"bobina",nombre:"Amarrar la gu\xEDa al cable",accion:"Amarrar la gu\xEDa",fisico:["t_bobina"],antes:[],puntos:4},{id:"t_alto",rol:"sst",lugar:"calle",nombre:"Detener el tr\xE1nsito",accion:"Dar el ALTO",fisico:["t_senal"],antes:["t_conos"],puntos:8,ref:Yo},{id:"t_subir",rol:"liniero",lugar:"poste",nombre:"Subir a P05",accion:"Subir",fisico:[],antes:["t_distancias"],puntos:12,pregunta:"La escalera qued\xF3 amarrada a P05 en la ma\xF1ana. \xBFQu\xE9 haces antes de subir?",opciones:["Reviso que siga amarrada en dos puntos, conecto el carrito a la argolla del pecho y un compa\xF1ero comprueba la conexi\xF3n","Subo directo: ya se asegur\xF3 en la ma\xF1ana","Subo y me conecto cuando llegue arriba"],porque:"La escalera se sujeta en m\xEDnimo dos puntos, y antes de subir un compa\xF1ero comprueba la conexi\xF3n del arn\xE9s.",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19) \xB7 \xA75.6.5 c) escalera sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"t_polea",rol:"liniero",lugar:"arriba",nombre:"Polea en el herraje",accion:"Colocar la polea",fisico:["t_subir"],antes:[],puntos:4},{id:"t_cruzar",rol:"auxiliar2",lugar:"poste",nombre:"Cruzar con la gu\xEDa",accion:"Entregar la gu\xEDa al liniero",fisico:["t_guia"],antes:["t_alto","t_polea"],puntos:12,pregunta:"Llevas la gu\xEDa de P04 a P05. \xBFCu\xE1ndo cruzas la calle?",opciones:["Cuando el tr\xE1nsito est\xE1 detenido en los dos sentidos y la zona est\xE1 libre de veh\xEDculos","Entre auto y auto, r\xE1pido","Cuando quiera: la gu\xEDa es liviana y los autos la ven"],porque:"La gu\xEDa y el cable solo pasan sobre la calzada con el tr\xE1nsito detenido en los dos sentidos y la zona libre.",ref:`${Yo} \xB7 tr\xE1nsito detenido en los dos sentidos: igual que en la jornada del cruce de calle, en revisi\xF3n por Salud Ocupacional`},{id:"t_tension",rol:"liniero",lugar:"arriba",nombre:"Halar y tensar el cable",accion:"Tensar el cable",fisico:["t_cruzar"],antes:[],puntos:12,pregunta:"El fabricante de este cable no da tensiones. \xBFCon cu\xE1nta lo tiendes?",opciones:["250 kg como m\xE1ximo (un cuarto de tonelada), con un pull-lift para no pasar de 2700 N","Lo m\xE1s tenso posible, para que no haga flecha","La que aguante el herraje"],porque:"Se siguen las tensiones del fabricante. Si no hay, se aplica como m\xE1ximo 250 kg, con pull-lift, para no pasar de 2700 N.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n: m\xE1ximo 250 kg sin datos del fabricante (p. 31)"},{id:"t_preformado",rol:"liniero",lugar:"arriba",nombre:"Fijar con preformado",accion:"Colocar el preformado",fisico:["t_tension"],antes:[],puntos:10,pregunta:"\xBFQu\xE9 preformado usas para fijar el cable al herraje?",opciones:["El que corresponde al di\xE1metro del cable (o a su fabricante), seg\xFAn la tabla del manual","Cualquiera de los que hay en el pick-up","Ninguno: se amarra con alambre al herraje"],porque:"El preformado se elige seg\xFAn el fabricante o el di\xE1metro del cable (Anexo 3 del manual).",ref:"Manual MNO-DS-GE-001 \xB7 Anexo 3 Uso de preformados seg\xFAn fabricante o di\xE1metro del cable (p. 82)"},{id:"t_abrir",rol:"sst",lugar:"calle",nombre:"Liberar el tr\xE1nsito",accion:"Dar el SIGA",fisico:["t_preformado"],antes:[],puntos:6,ref:Yo},{id:"t_reserva",rol:"liniero",lugar:"arriba",nombre:"Dejar la reserva",accion:"Dejar el rollo de reserva",fisico:["t_preformado"],antes:[],puntos:10,pregunta:"En P05 se va a empalmar este cable m\xE1s adelante. \xBFQu\xE9 dejas en el poste?",opciones:["Un rollo de al menos 25 m, de 40 a 50 cm de di\xE1metro","Nada: se corta justo en el herraje","Un rollo de 5 m, bien apretado para que no estorbe"],porque:"En cada extremo de un tendido nuevo se deja un rollo de 25 m como m\xEDnimo, de 40 a 50 cm de di\xE1metro, para el empalme.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de 25 m en cada extremo para el empalme (p. 23)"},{id:"t_calco",rol:"liniero",lugar:"arriba",nombre:"Calcoman\xEDas reflectivas",accion:"Poner las calcoman\xEDas",fisico:["t_preformado"],antes:[],puntos:8,pregunta:"\xBFD\xF3nde van las calcoman\xEDas reflectivas amarillas?",opciones:["Dos, una a cada lado del poste, directamente sobre la fibra","Sobre el preformado, que se ve m\xE1s","Una sola, en medio de la calle"],porque:"Se colocan dos cintas reflectivas de precauci\xF3n, una a cada lado del poste, sobre la fibra y no sobre el preformado ni la retenida.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas de prevenci\xF3n (p. 39)"},{id:"t_altura",rol:"encargado",lugar:"calle",nombre:"Comprobar la altura",accion:"Medir la altura del cruce",fisico:["t_preformado"],antes:["t_reserva","t_calco"],puntos:12,pregunta:"El cable qued\xF3 sobre la calle. \xBFQu\xE9 altura m\xEDnima debe tener en su punto m\xE1s bajo?",opciones:["5 m sobre la calle, en la flecha m\xE1xima (4,5 m si fuera sobre la acera)","4,5 m: es lo mismo en la calle que en la acera","La que d\xE9: lo importante es que no toque los autos"],porque:"La altura m\xEDnima en la flecha m\xE1xima es de 5 m en los cruces de calle y de 4,5 m sobre aceras, procurando siempre m\xE1s.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable: 5 m en cruces de calle, 4,5 m sobre aceras (p. 26)"}];var jm={encargado:"Dirige el ATS, dicta el plano de empalme por radio y rotula el empalme.",sst:"Se\xF1aliza la mesa de empalme en la acera y verifica el \xE1rea y el clima antes de cada ascenso.",liniero:"Es el empalmador: baja el cierre, fusiona las fibras seg\xFAn el plano, revisa cada empalme y sube a fijar el cierre.",auxiliar1:"Arma la mesa de empalme y mide cada empalme con el OTDR.",auxiliar2:"Cierra y prueba la hermeticidad del cierre y enrolla las colas."},qm=["Listo","\xA1Alto!","Espera un momento","Repite el plano","Fusionando","Necesito ayuda"],km="GS-101 \xB7 \xA75.6.2 Demarcaci\xF3n: cinta amarilla de precauci\xF3n, conos reflectivos y rotulaci\xF3n (p. 21)",Vm="GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)",I_="GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23)",$m=[{id:"e_ats",rol:"encargado",lugar:"pickup",nombre:"ATS del empalme",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"Hoy se empalma en P05: dos ascensos y trabajo en la acera. \xBFQui\xE9nes hacen el ATS?",opciones:["Toda la cuadrilla, antes de empezar y con el encargado al frente","Solo el empalmador, que es quien sube","El encargado, al terminar, para dejarlo firmado"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"e_senal",rol:"sst",lugar:"mesa",nombre:"Se\xF1alizar la mesa de empalme",accion:"Colocar conos y cinta",fisico:[],antes:["e_ats"],puntos:6,ref:km},{id:"e_area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea y el clima",accion:"Verificar el \xE1rea de trabajo",fisico:[],antes:["e_ats"],puntos:10,pregunta:"El liniero va a subir a P05. \xBFCon qu\xE9 condiciones no se trabaja en la escalera?",opciones:["Con vientos fuertes, lluvia torrencial o rayer\xEDa; y el \xE1rea tiene que estar cerrada","Solo si hay rayos encima del poste","El clima no importa si la escalera est\xE1 amarrada"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:I_},{id:"e_subir",rol:"liniero",lugar:"poste",nombre:"Subir a P05",accion:"Subir",fisico:[],antes:["e_area"],puntos:10,ref:Vm},{id:"e_bajar",rol:"liniero",lugar:"arriba",nombre:"Bajar el cierre",accion:"Bajar el cierre con sus colas",fisico:["e_subir"],antes:[],puntos:10,pregunta:"El cierre tiene colas de 15 a 20 m a cada lado. \xBFPara qu\xE9?",opciones:["Para bajar el empalme y trabajarlo c\xF3modamente a nivel del suelo","Para que el cable no quede tenso entre los postes","Para tener de d\xF3nde cortar si el empalme sale mal"],porque:"Las colas del empalme a\xE9reo (15 a 20 m por lado) tienen que permitir intervenir el empalme c\xF3modamente a nivel del suelo.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.2 a) Colas del empalme a\xE9reo de 15 a 20 m, para trabajarlo a nivel del suelo (p. 45)"},{id:"e_mesa",rol:"auxiliar1",lugar:"mesa",nombre:"Armar la mesa de empalme",accion:"Armar la mesa",fisico:[],antes:["e_senal"],puntos:6,ref:km},{id:"e_dictar",rol:"encargado",lugar:"mesa",nombre:"Dictar el plano",accion:"Dictar el plano por radio",fisico:["e_bajar"],antes:[],puntos:4,dicta:"Plano de empalme: fibra 7 del tubo azul, cable nuevo con cable existente."},{id:"e_fusion",rol:"liniero",lugar:"mesa",nombre:"Fusionar seg\xFAn el plano",accion:"Fusionar la fibra",fisico:["e_bajar","e_mesa"],antes:["e_dictar"],puntos:12,pregunta:"El encargado dict\xF3: fibra 7 del tubo azul. \xBFQu\xE9 color buscas en los dos cables?",opciones:["Roja: azul, naranja, verde, caf\xE9, gris, blanca y la 7 es la roja","Violeta: es la s\xE9ptima del tubo","Negra: despu\xE9s de la blanca viene la negra"],porque:"Todo empalme respeta el c\xF3digo de colores EIA/TIA-598: 1 azul, 2 naranja, 3 verde, 4 caf\xE9, 5 gris, 6 blanco, 7 rojo, 8 negro, 9 amarillo, 10 violeta, 11 rosado, 12 aqua.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.4 Empalme seg\xFAn c\xF3digo de colores (p. 47) y Anexo 4 EIA/TIA-598 (p. 83)"},{id:"e_monitor",rol:"liniero",lugar:"mesa",nombre:"Revisar la fusi\xF3n",accion:"Revisar el monitor",fisico:["e_fusion"],antes:[],puntos:10,pregunta:"En el monitor de la empalmadora el empalme muestra una burbuja. \xBFQu\xE9 haces?",opciones:["Lo corto y lo rehago desde la preparaci\xF3n: no se aceptan gradas, burbujas ni l\xEDneas transversales","Le doy una segunda fusi\xF3n encima para corregirlo","Lo dejo: una burbuja no pierde luz"],porque:"No se aceptan empalmes con gradas, burbujas o l\xEDneas transversales en el monitor de la empalmadora, ni se hace doble fusi\xF3n.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.6 Acabado de las fibras empalmadas: sin gradas, burbujas ni doble fusi\xF3n (p. 48)"},{id:"e_otdr",rol:"auxiliar1",lugar:"mesa",nombre:"Medir con el OTDR",accion:"Medir el empalme",fisico:["e_monitor"],antes:[],puntos:12,pregunta:"El OTDR mide el empalme de la fibra 7: 0,41 dB en un sentido. \xBFQu\xE9 se hace?",opciones:["Se rehace: pasa de 0,33 dB. Se vuelve a fusionar, previa preparaci\xF3n, hasta 5 veces","Se acepta: cualquier empalme por debajo de 0,5 dB sirve","Se acepta si el promedio de todo el cable da bien"],porque:"Cada empalme debe dar 0,15 dB o menos de promedio y como m\xE1ximo 0,33 dB en un sentido. Si pasa de 0,33 dB se vuelve a fusionar, previa preparaci\xF3n, hasta 5 veces.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.7.4 b) P\xE9rdida por empalme: \u2264 0,15 dB de promedio y \u2264 0,33 dB en un sentido; hasta 5 fusiones (p. 66)"},{id:"e_refusion",rol:"liniero",lugar:"mesa",nombre:"Rehacer la fusi\xF3n",accion:"Volver a fusionar (0,12 dB)",fisico:["e_otdr"],antes:[],puntos:4},{id:"e_cierre",rol:"auxiliar2",lugar:"mesa",nombre:"Cerrar y probar el cierre",accion:"Presurizar el cierre",fisico:["e_refusion"],antes:[],puntos:10,pregunta:"\xBFC\xF3mo se comprueba que el cierre qued\xF3 herm\xE9tico?",opciones:["Se presuriza a 8 psi (560 g/cm\xB2) por 15 minutos como m\xE1ximo y despu\xE9s se libera la presi\xF3n","Se presuriza al m\xE1ximo y se deja as\xED, para que no entre agua","Se moja con agua y se mira si sale aire"],porque:"El cierre se presuriza con 560 g/cm\xB2 (8 psi) para verificar su hermeticidad, con la v\xE1lvula accesible; la prueba dura 15 minutos como m\xE1ximo y luego se libera la presi\xF3n.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme: prueba a 8 psi, m\xE1ximo 15 minutos, y liberar la presi\xF3n (p. 45)"},{id:"e_colas",rol:"auxiliar2",lugar:"mesa",nombre:"Enrollar las colas",accion:"Enrollar las colas (40 a 50 cm)",fisico:["e_cierre"],antes:[],puntos:4},{id:"e_rotulo",rol:"encargado",lugar:"mesa",nombre:"Rotular el empalme",accion:"Rotular el empalme",fisico:["e_cierre"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se identifica un empalme a\xE9reo?",opciones:["Una identificaci\xF3n a cada lado del empalme, sujeta con alambre, con el origen y el extremo del enlace","Con el nombre del empalmador escrito en el cierre","No hace falta: el plano ya dice d\xF3nde est\xE1"],porque:"Las identificaciones se sujetan al cable con alambre, una a cada lado del empalme, indicando el origen y el extremo l\xF3gico del enlace.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.6.13 Rotulaci\xF3n del empalme a\xE9reo (p. 65)"},{id:"e_subir2",rol:"liniero",lugar:"poste",nombre:"Subir con el cierre",accion:"Subir",fisico:["e_colas"],antes:["e_rotulo"],puntos:10,ref:Vm},{id:"e_fijar",rol:"liniero",lugar:"arriba",nombre:"Fijar el cierre",accion:"Fijar el cierre",fisico:["e_subir2"],antes:[],puntos:12,pregunta:"\xBFA qu\xE9 distancia del poste va el cierre de empalme?",opciones:["A 75 cm; si el preformado es m\xE1s largo, m\xE1s lejos, para que el cierre no quede sujeto al preformado","Pegado al poste, para que no se mueva","En medio del vano, donde no estorba"],porque:"El cierre va a 75 cm del poste; si el preformado mide m\xE1s de 75 cm, se aleja para que no quede sujeto a \xE9l.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm (p. 52)"}];var Wm={encargado:"Planifica el tendido en el ATS, lleva la cuadrilla a Esparza y comprueba la altura final del cable.",sst:"Se\xF1aliza la acera y la orilla de la ruta a lo largo de los cuatro postes.",liniero:"Sube a cada poste, pone la polea y recibe la gu\xEDa; en el \xFAltimo tensa, fija con preformado y deja la reserva.",auxiliar1:"Monta la bobina y, desde el poste anterior, le entrega la gu\xEDa al liniero cuidando la curvatura.",auxiliar2:"Asegura la escalera en cada poste antes de que suba el liniero."},Xm=["Listo","\xA1Alto!","Espera un momento","Gu\xEDa va","Halando","Necesito ayuda"],L_="GS-101 \xB7 \xA75.6.2 Demarcaci\xF3n: cinta amarilla de precauci\xF3n, conos reflectivos y rotulaci\xF3n (p. 21)",zc="r_llegada",Xu=(n,e)=>[{id:`r_escalera${n}`,rol:"auxiliar2",lugar:`poste${n}`,nombre:`Asegurar la escalera en P${n}`,accion:"Amarrar la escalera en dos puntos",fisico:[e],antes:[],puntos:6,ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:`r_subir${n}`,rol:"liniero",lugar:`poste${n}`,nombre:`Subir a P${n}`,accion:"Subir",fisico:[`r_escalera${n}`],antes:[],puntos:6},{id:`r_entrega${n}`,rol:"auxiliar1",lugar:`poste${n-1}`,nombre:`Entregar la gu\xEDa desde P${n-1}`,accion:"Pasar la gu\xEDa al siguiente poste",fisico:[`r_subir${n}`],antes:[],puntos:6}],Ym=[{id:"r_ats",rol:"encargado",lugar:"pickup",nombre:"ATS del tendido en ruta",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"Hoy se tiende fibra por cuatro postes a la orilla de la ruta, en Esparza. \xBFCu\xE1ndo se analizan esos riesgos?",opciones:["En el ATS, antes de salir y con toda la cuadrilla: la ruta, el tr\xE1nsito, los postes y qui\xE9n hace qu\xE9","Al llegar a Esparza, cada quien en su poste","El encargado lo anota solo mientras los dem\xE1s cargan el pick-up"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:zc,rol:"encargado",auto:!0,lugar:"camion",nombre:"Llegar a Esparza con el pick-up",fisico:["r_ats"],antes:[],puntos:0},{id:"r_senal",rol:"sst",lugar:"camion",nombre:"Se\xF1alizar la orilla de la ruta",accion:"Se\xF1alizar el \xE1rea",fisico:[zc],antes:[],puntos:10,pregunta:"Se va a trabajar en cuatro postes junto a la ruta. \xBFC\xF3mo se asegura el \xE1rea?",opciones:["Se delimita con conos, cinta amarilla y rotulaci\xF3n a lo largo de los postes, antes de levantar la primera escalera","Solo con el pick-up estacionado con las luces encendidas","Un cono en el primer poste: los dem\xE1s se ven desde la calle"],porque:"La zona de trabajo se delimita con cinta amarilla de precauci\xF3n, conos reflectivos y rotulaci\xF3n seg\xFAn la zona.",ref:L_},{id:"r_bobina",rol:"auxiliar1",lugar:"carrete",nombre:"Montar la bobina junto a P1",accion:"Montar la bobina",fisico:[zc],antes:[],puntos:10,pregunta:"La gu\xEDa y el cable van a recorrer cuatro postes. \xBFQu\xE9 cuidas cuando el cable sale de la bobina?",opciones:["Que nunca se doble con un radio menor a 20 veces su di\xE1metro","Que salga r\xE1pido: las curvas se enderezan al tensar","Hacer un rollo apretado en el suelo para que no se enrede"],porque:"En el tendido el cable no puede tener curvaturas con un radio menor a 20 veces su di\xE1metro: la fibra se da\xF1a.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura: 20 veces el di\xE1metro del cable (p. 16)"},{id:"r_escalera1",rol:"auxiliar2",lugar:"poste1",nombre:"Asegurar la escalera en P1",accion:"Amarrar la escalera en dos puntos",fisico:[zc],antes:["r_senal"],puntos:10,pregunta:"Vas a mover la escalera de poste en poste. \xBFEn cu\xE1ntos puntos la sujetas en cada uno?",opciones:["En dos como m\xEDnimo: arriba y en la parte media, en cada poste","En uno: en los postes siguientes ya se sabe que aguanta","En ninguno, si un compa\xF1ero la sostiene"],porque:"El amarre en la parte media se hace siempre: la escalera queda sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"r_subir1",rol:"liniero",lugar:"poste1",nombre:"Subir a P1",accion:"Subir",fisico:["r_escalera1"],antes:["r_senal"],puntos:12,pregunta:"Vas a subir cuatro veces hoy, una por poste. \xBFQu\xE9 haces antes de cada subida?",opciones:["Conecto el carrito a la argolla del pecho y un compa\xF1ero comprueba la conexi\xF3n antes de subir","Solo la primera vez: despu\xE9s ya estoy conectado","Subo y me conecto cuando llegue arriba"],porque:"Antes de subir, un compa\xF1ero comprueba la conexi\xF3n del arn\xE9s; la escalera va sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19) \xB7 \xA75.6.5 c) escalera sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"r_polea1",rol:"liniero",lugar:"arriba",nombre:"Polea y gu\xEDa en P1, y bajar",accion:"Colocar la polea y pasar la gu\xEDa",fisico:["r_subir1","r_bobina"],antes:[],puntos:4},...Xu(2,"r_polea1"),{id:"r_polea2",rol:"liniero",lugar:"arriba",nombre:"Recibir la gu\xEDa en P2 y bajar",accion:"Pasar la gu\xEDa por la polea",fisico:["r_entrega2"],antes:[],puntos:4},...Xu(3,"r_polea2"),{id:"r_polea3",rol:"liniero",lugar:"arriba",nombre:"Recibir la gu\xEDa en P3 y bajar",accion:"Pasar la gu\xEDa por la polea",fisico:["r_entrega3"],antes:[],puntos:4},...Xu(4,"r_polea3"),{id:"r_tension",rol:"liniero",lugar:"arriba",nombre:"Halar y tensar desde P4",accion:"Tensar el cable",fisico:["r_entrega4"],antes:[],puntos:12,pregunta:"Recibiste la gu\xEDa en P4 y halaste el cable por los cuatro postes. El fabricante no da tensiones. \xBFCon cu\xE1nta lo tiendes?",opciones:["250 kg como m\xE1ximo (un cuarto de tonelada), con un pull-lift para no pasar de 2700 N","Lo m\xE1s tenso posible, para que no haga flecha en los tres vanos","La que aguante el herraje"],porque:"Se siguen las tensiones del fabricante. Si no hay, se aplica como m\xE1ximo 250 kg, con pull-lift, para no pasar de 2700 N.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n: m\xE1ximo 250 kg sin datos del fabricante (p. 31)"},{id:"r_preformado",rol:"liniero",lugar:"arriba",nombre:"Fijar con preformado",accion:"Colocar el preformado",fisico:["r_tension"],antes:[],puntos:10,pregunta:"El cable queda fijo en cada uno de los cuatro postes. \xBFQu\xE9 preformado usas?",opciones:["El que corresponde al di\xE1metro del cable (o a su fabricante), seg\xFAn la tabla del manual","Cualquiera de los que hay en el pick-up","Ninguno: se amarra con alambre al herraje"],porque:"El preformado se elige seg\xFAn el fabricante o el di\xE1metro del cable (Anexo 3 del manual).",ref:"Manual MNO-DS-GE-001 \xB7 Anexo 3 Uso de preformados seg\xFAn fabricante o di\xE1metro del cable (p. 82)"},{id:"r_reserva",rol:"liniero",lugar:"arriba",nombre:"Dejar la reserva y bajar",accion:"Dejar el rollo de reserva",fisico:["r_preformado"],antes:[],puntos:10,pregunta:"P1 y P4 son los extremos de este tendido nuevo. \xBFQu\xE9 se deja en cada uno?",opciones:["Un rollo de al menos 25 m, de 40 a 50 cm de di\xE1metro, en cada extremo","Nada: se corta justo en el herraje","Un rollo de 5 m solo en P4, bien apretado"],porque:"En cada extremo de un tendido nuevo se deja un rollo de 25 m como m\xEDnimo, de 40 a 50 cm de di\xE1metro, para el empalme.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de 25 m en cada extremo para el empalme (p. 23)"},{id:"r_altura",rol:"encargado",lugar:"poste3",nombre:"Comprobar la altura",accion:"Medir la altura del cable",fisico:["r_preformado"],antes:["r_reserva"],puntos:12,pregunta:"El cable va sobre la acera y cruza una entrada de veh\xEDculos. \xBFQu\xE9 altura m\xEDnima debe tener en la flecha m\xE1xima?",opciones:["4,5 m sobre la acera y 5 m donde cruza la calle","4,5 m en todo el tendido: es lo mismo en la calle que en la acera","La que d\xE9: lo importante es que no toque los autos"],porque:"La altura m\xEDnima en la flecha m\xE1xima es de 5 m en los cruces de calle y de 4,5 m sobre aceras, procurando siempre m\xE1s.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable: 5 m en cruces de calle, 4,5 m sobre aceras (p. 26)"}],Jm=n=>1+["r_polea1","r_polea2","r_polea3"].filter(e=>n.hechos[e]).length;var Rt=Nm,Zm=Bm,Vn={escalera:{nombre:"Escalera al poste",lugar:"Calle 50 Luisa, Sabana Norte \xB7 poste P05",resumen:"Asegurar la escalera al poste y subir.",roles:Object.fromEntries(Object.entries(Rt).map(([n,e])=>[n,e.resumen])),pasos:zm,frases:Um,ascensos:[["subir",null]],lista:!1,libera:["tomar","tomar2"],reposo:n=>n.hechos.tomar&&n.hechos.tomar2?"poste":"pickup",fin:"El liniero qued\xF3 asegurado con el carrito, la faja de posicionamiento y la l\xEDnea de vida.",nota:"La forma de la faja en M es pr\xE1ctica de la cuadrilla."},tendido:{nombre:"Tendido a\xE9reo",lugar:"Calle 50 Luisa, Sabana Norte \xB7 de P04 a P05, cruzando la calle",resumen:"Halar un cable de fibra nuevo sobre la calle, tensarlo, fijarlo y dejar la reserva.",roles:Om,pasos:Hm,frases:Gm,ascensos:[["t_subir",null]],lista:!0,libera:[],reposo:(n,e)=>e==="sst"||e==="auxiliar1"?"calle":e==="auxiliar2"&&!n.hechos.t_cruzar?"bobina":"poste",fin:"El cable cruza la calle a 5 m o m\xE1s, fijado con preformado y con su reserva para el empalme.",nota:"Lo de un banderero por sentido viene de la jornada del cruce de calle."},empalme:{nombre:"Empalme a\xE9reo",lugar:"Calle 50 Luisa, Sabana Norte \xB7 caja de empalme de P05",resumen:"Bajar el cierre de P05, empalmar en la acera seg\xFAn el plano, medir, cerrar y volver a subirlo.",roles:jm,pasos:$m,frases:qm,ascensos:[["e_subir","e_bajar"],["e_subir2",null]],lista:!0,libera:[],reposo:(n,e)=>e==="liniero"||e==="sst"?"poste":n.hechos.e_bajar||e==="auxiliar1"?"mesa":"pickup",fin:"La fibra 7 qued\xF3 empalmada y medida, y el cierre, probado, rotulado y fijado a 75 cm del poste.",nota:"El riesgo de la fibra rota y del l\xE1ser no se trata aqu\xED: no tiene fuente aprobada todav\xEDa."},ruta:{nombre:"Tendido en ruta",lugar:"Ruta 1, entrada de Esparza \xB7 cuatro postes seguidos (se llega en el pick-up)",resumen:"Manejar hasta Esparza y tender fibra nueva poste por poste: polea y gu\xEDa en cada uno, tensar, fijar y dejar la reserva.",roles:Wm,pasos:Ym,frases:Xm,ascensos:[["r_subir1","r_polea1"],["r_subir2","r_polea2"],["r_subir3","r_polea3"],["r_subir4","r_reserva"]],lista:!0,libera:["r_ats"],sitio:"esparza",viaje:"r_llegada",poste:Jm,reposo:n=>n.hechos.r_llegada?"poste":"pickup",fin:"El cable qued\xF3 tendido por los cuatro postes, a 4,5 m o m\xE1s sobre la acera, fijado con preformado y con reserva en los extremos.",nota:"Lo de trabajar en dos postes a la vez y el reparto de la gu\xEDa entre el liniero y el auxiliar 1 es pr\xE1ctica de la cuadrilla."}};for(let[n,e]of Object.entries(Vn))for(let t of e.pasos)t.trabajo=n;var jn={};for(let n of Object.values(Vn))for(let e of n.pasos){if(jn[e.id])throw new Error(`Paso repetido entre trabajos: ${e.id}`);jn[e.id]=e}var jt=n=>Object.hasOwn(Vn,n.trabajo)?Vn[n.trabajo]:Vn.escalera,di=n=>jt(n).pasos,ui=n=>jt(n).ascensos.some(([e,t])=>n.hechos[e]&&!(t&&n.hechos[t])),Km=(n,e)=>jt(n).ascensos.some(([,t])=>t===e);var Oc=(n,e)=>Object.hasOwn(jn,e)&&jn[e].trabajo===n.trabajo?jn[e]:null,Yu=()=>({chofer:null,pasajeros:[],x:null,z:null,r:null}),Ju=()=>({fase:"sala",modo:"aprendiz",trabajo:"escalera",jugadores:{},hechos:{},fallos:{},eventos:[],pickup:Yu(),n:0}),ea=(n,e)=>Object.keys(n.jugadores).find(t=>n.jugadores[t].rol===e)??null,N_=(n,e)=>String(n??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,e);function Zu(n,e){switch(n.n++,e?.t){case"entra":n.jugadores[e.id]={nombre:e.nombre,rol:n.jugadores[e.id]?.rol??null};break;case"sale":delete n.jugadores[e.id],n.pickup.chofer===e.id&&(n.pickup.chofer=null),n.pickup.pasajeros=n.pickup.pasajeros.filter(t=>t!==e.id);break;case"rol":n.jugadores[e.id]&&(n.jugadores[e.id].rol=e.rol);break;case"modo":n.modo=e.modo;break;case"trabajo":if(!Object.hasOwn(Vn,e.trabajo))break;n.trabajo=e.trabajo,n.hechos={},n.fallos={},n.eventos=[];break;case"empezar":n.fase="trabajo",n.pickup=Yu();break;case"reiniciar":Object.assign(n,{fase:"sala",hechos:{},fallos:{},eventos:[],pickup:Yu()});break;case"conduce":n.pickup.chofer=e.id;break;case"aparca":n.pickup={chofer:null,pasajeros:[],x:e.x,z:e.z,r:e.r};break;case"sube":n.pickup.pasajeros.push(e.id);break;case"baja":n.pickup.pasajeros=n.pickup.pasajeros.filter(t=>t!==e.id);break;case"hecho":if(!Oc(n,e.paso))break;n.hechos[e.paso]=e.rol,di(n).every(t=>n.hechos[t.id])&&(n.fase="fin");break;case"falta":if(!Oc(n,e.paso))break;n.fallos[e.paso]=(n.fallos[e.paso]??0)+1,n.eventos.push({tipo:"falta",puntos:e.puntos,rol:e.rol,paso:e.paso,ref:e.ref,texto:e.texto});break}return n}function Qm(n,e,t,a=!1){switch(e?.t){case"entra":return[{t:"entra",id:t,nombre:N_(e.nombre,16)||"Jugador"}];case"sale":return a&&n.jugadores[e.id]?[{t:"sale",id:e.id}]:[];case"rol":return!n.jugadores[t]||n.fase==="fin"||e.rol!==null&&!Rt[e.rol]?[]:e.rol&&ea(n,e.rol)&&ea(n,e.rol)!==t?[]:[{t:"rol",id:t,rol:e.rol}];case"modo":return n.fase==="sala"&&n.jugadores[t]&&["aprendiz","tecnico"].includes(e.modo)?[{t:"modo",modo:e.modo}]:[];case"trabajo":return n.fase==="sala"&&(n.jugadores[t]||a)&&Object.hasOwn(Vn,e.trabajo)&&e.trabajo!==n.trabajo?[{t:"trabajo",trabajo:e.trabajo}]:[];case"empezar":return n.fase==="sala"&&(n.jugadores[t]?.rol||a&&e.demo)?[{t:"empezar"}]:[];case"reiniciar":return n.fase==="fin"&&(n.jugadores[t]||a)||a&&e.dev&&n.fase==="trabajo"?[{t:"reiniciar"}]:[];case"conduce":return n.jugadores[t]?.rol&&!n.pickup.chofer&&Ku(n)?[{t:"conduce",id:t}]:[];case"sube":return n.jugadores[t]?.rol&&n.pickup.chofer&&n.pickup.chofer!==t&&!n.pickup.pasajeros.includes(t)&&n.pickup.pasajeros.length<3?[{t:"sube",id:t}]:[];case"baja":return n.pickup.pasajeros.includes(t)?[{t:"baja",id:t}]:[];case"aparca":return n.pickup.chofer===t&&[e.x,e.z,e.r].every(Number.isFinite)&&Math.abs(e.x)<5e3&&Math.abs(e.z)<5e3?[{t:"aparca",x:e.x,z:e.z,r:e.r}]:[];case"auto":{let i=Oc(n,e.paso);return a&&i?.auto&&n.fase==="trabajo"&&!n.hechos[i.id]&&i.fisico.every(r=>n.hechos[r])?[{t:"hecho",paso:i.id,rol:i.rol,limpio:!0}]:[]}case"intento":{let i=Oc(n,e.paso);if(!i||i.auto||n.fase!=="trabajo"||n.hechos[i.id])return[];let r=a&&e.dev,o=a&&e.bot,s=r?i.rol:o?e.rol:n.jugadores[t]?.rol;if(s!==i.rol||o&&!r&&ea(n,s))return[];if(!i.fisico.every(l=>n.hechos[l]))return[];let c=i.antes.find(l=>!n.hechos[l]);if(c)return n.modo==="aprendiz"?[]:[{t:"falta",paso:i.id,rol:s,puntos:$u(Zm,n.modo),ref:jn[c].ref??i.ref,texto:`Faltaba \xAB${jn[c].nombre}\xBB antes de \xAB${i.nombre}\xBB.`}];if(i.opciones){if(!Number.isInteger(e.opcion)||e.opcion<0||e.opcion>=i.opciones.length)return[];if(e.opcion!==0)return[{t:"falta",paso:i.id,rol:s,puntos:$u(i.puntos,n.modo),ref:i.ref,texto:i.porque}]}return[{t:"hecho",paso:i.id,rol:s,limpio:!n.fallos[i.id]}]}}return[]}function Pr(n,e){return di(n).filter(t=>t.rol===e&&!t.auto&&!n.hechos[t.id]&&t.fisico.every(a=>n.hechos[a])).map(t=>({paso:t,bloqueo:jn[t.antes.find(a=>!n.hechos[a])]??null}))}var Gc=n=>di(n).find(e=>!n.hechos[e.id]&&e.fisico.every(t=>n.hechos[t])&&e.antes.every(t=>n.hechos[t]))??null,Ku=n=>n.fase==="fin"||n.fase==="trabajo"&&jt(n).libera.every(e=>n.hechos[e]),Ir=n=>Math.round(Fm(n.eventos)),Qu=n=>Lm(Ir(n));function e0(n){let e=Object.fromEntries(Object.keys(Rt).map(t=>[t,100]));for(let t of n.eventos)t.tipo==="falta"&&t.rol in e&&(e[t.rol]=Wu(e[t.rol],t.puntos));return e}function Hc(n){let e=[...n.id].reduce((a,i)=>a*31+i.charCodeAt(0)>>>0,7),t=n.opciones.map((a,i)=>i);for(let a=t.length-1;a>0;a--){e=e*1664525+1013904223>>>0;let i=e%(a+1);[t[a],t[i]]=[t[i],t[a]]}return t}var ep=(n,e)=>{for(let t=0;t<e.length;t++)n=n*31+e.charCodeAt(t)|0;return n};function t0({id:n,red:e,alEvento:t}){let a=Ju(),i=[],r=0,o=[],s=!1,c=-1e9,l=()=>e?[n,...e.estado.pares.keys()].sort()[0]:n,d=()=>l()===n,p=()=>!e||s||!!e.estado.presencia;function u(v){i.push(v),r=ep(r,JSON.stringify(v)),Zu(a,v),t?.(v,a)}function f(v,M,A){for(let w of Qm(a,v,M,A)){let g=r;u(w),e?.fiable({t:"ev",n:a.n,h:g,ev:w})}}function x(v){p()?d()?f(v,n,!0):e.fiable({t:"pro",pro:v}):o.push(v)}function y(){if(o.length&&p()){let v=o;o=[],v.forEach(x)}}function m(){let v=Date.now();e&&v-c>1500&&(c=v,e.fiable({t:"pido"}))}let h=0;function b(v,M,A){if(A!==l()||v===a.n&&M===r){h=0;return}let w=Date.now();h?w-h>1e3&&m():h=w}function E(v,M){if(v?.t==="pro")d()&&f(v.pro,M,!1);else if(v?.t==="ev"){if(M!==l())return;v.n===a.n+1&&v.h===r?u(v.ev):m()}else if(v?.t==="pido")i.length&&e.fiable({t:"todo",evs:i});else if(v?.t==="todo"){if(!Array.isArray(v.evs)||!v.evs.length||v.evs.length>5e3)return;let A=v.evs.reduce((w,g)=>ep(w,JSON.stringify(g)),0);if(!(M===l()?A!==r:!i.length))return;a=Ju(),i=[],r=0;for(let w of v.evs)i.push(w),r=ep(r,JSON.stringify(w)),Zu(a,w);t?.(null,a)}}return{get E(){return a},get huella(){return r},anfitrion:d,idAnfitrion:l,proponer:x,recibir:E,pedir:m,cada:y,latido:b,jugarSolo:()=>{s=!0}}}var Jo=4.6,ip=7.4,Zo=ip*Math.sin(75*Math.PI/180),Ko=ip*Math.cos(75*Math.PI/180),tp=4.8,B_=7,np=4.4,ap=72,Qo=6,qt={cuerda:15591122,cinta:15320363,faja:15320363,vida:14173227,fibra:1711136,calco:16765471};function n0(n){let e=mn();for(let a of[-.21,.21])e.caja(a,-.04,n/2,.05,.08,n,15304235);for(let a=.3;a<n-.1;a+=.3)e.caja(0,-.02,a,.42,.035,.035,12172996);let t=new Fe(e.geometria(),new et({vertexColors:!0,roughness:.7}));return t.castShadow=In,t}function a0({via:n,barrio:e,carrete:t,ruta:a=null}){let i=e.trabajo,r=e.postes.find(q=>q.id==="P04"),o={},s=(q,le,he=0)=>(n.en(q,le,o),new B(o.x,he,o.z)),c=i,l=n.en,d=0,p=1,u=(q,le,he)=>{let ue=c.a-q*p;return l(c.d+le,ue,o),new B(o.x,he??(Math.abs(ue)<ln?.02:.15),o.z)},f,x,y,m,h,b,E=(q,le=0,he=new B)=>he.lerpVectors(f,x,q/Zo).addScaledVector(h,le);function v(q,le){c=q,l=le,p=-Math.sign(c.a)||1,f=u(-Ko,0),x=u(-.14,0,.15+Zo),y=new B(x.x-f.x,0,x.z-f.z).normalize(),m=new B(y.z,0,-y.x),h=new B().subVectors(f,x).setY(0).normalize().multiplyScalar(.97).add(new B(0,.26,0)),b=Math.atan2(y.x,y.z)}v(i,n.en);let M=8.6,A=q=>(le,he,ue)=>(ue.x=q.x+q.tx*le+q.nx*(he-M),ue.z=q.z+q.tz*le+q.nz*(he-M),ue),w=q=>({x:q.x,z:q.z,d:0,a:M,rumbo:Math.atan2(q.tx,q.tz)}),g={pickup:s(e.dPick,-4.5),poste:u(-2.6,.9,0),bobina:s(r.d+1.6,r.a-1.4),calle:s((r.d+c.d)/2,0),mesa:s(c.d-7,c.a+.6)},_=u(-2.2,.75,0),T=null;if(a){let[q,le]=a,he=le.x-q.x,ue=le.z-q.z,Ae=Math.hypot(he,ue),Ie=he/Ae,dt=ue/Ae;a.forEach((Zt,kt)=>{v(w(Zt),A(Zt)),g["poste"+(kt+1)]=u(-2.6,.9,Zt.y)}),v(i,n.en),g.carrete=new B(q.x-Ie*3-q.nx*1.5,q.y,q.z-dt*3-q.nz*1.5);let ct=q.x-Ie*10-q.nx*6.4,zt=q.z-dt*10-q.nz*6.4;T={x:ct,z:zt,r:Math.atan2(Ie,dt)},g.camion=new B(ct+q.nx*2.6,q.y,zt+q.nz*2.6)}let D=a?a[1].x-a[0].x:1,N=a?a[1].z-a[0].z:0,k=Math.hypot(D,N),C={encargado:[1.4,-.9],sst:[-1.4,-1.1],liniero:[0,-1.7],auxiliar1:[-.9,.9],auxiliar2:[.9,1.1]},F=(q,le)=>{let[he,ue]=C[le],Ae=a[0];return new B(q.x+D/k*he+Ae.nx*ue,q.y,q.z+N/k*he+Ae.nz*ue)},V=0,O={pickup:{encargado:[0,-4.4],sst:[1.3,-4.4],liniero:[-1.3,-4.4],auxiliar1:[-2.6,-4.4],auxiliar2:[2.6,-4.4]},poste:{encargado:[-3.6,1.3],sst:[-4.4,-1.2],liniero:[-2.55,0],auxiliar1:[-2.2,1],auxiliar2:[-.6,-1.1]}},j={calle:{sst:[-3,-1.6],auxiliar1:[3,1.6],encargado:[0,-2.8],liniero:[0,2.8],auxiliar2:[-1.5,2.2]},bobina:{auxiliar1:[0,-1.2],auxiliar2:[-1.2,-.3],encargado:[1.2,-.3],sst:[0,-2.4],liniero:[-1.2,-2]},mesa:{liniero:[0,1.1],auxiliar1:[1.3,.9],auxiliar2:[-1.3,.9],encargado:[1.6,-.6],sst:[-1.8,-.4]}},G={calle:[(r.d+c.d)/2,0],bobina:[r.d+1.6,r.a-1.4],mesa:[c.d-7,c.a+.6]},Z=(q,le)=>le==="pickup"?s(e.dPick+O.pickup[q][0],O.pickup[q][1]):j[le]?s(G[le][0]+j[le][q][0],G[le][1]+j[le][q][1]):le==="poste"+V||!g[le]||le==="poste"?u(O.poste[q][0],O.poste[q][1],0):F(g[le],q),ie=new rt,xe=n0(Jo),Ee=n0(ip),Be=new B,_e=new B,J=u(-2.2,.75+Jo/2),z=u(-2.2,.75-Jo/2);J.y=z.y+=.05,Ee.position.copy(f),Ee.lookAt(x),Ee.visible=!1;let $=new Gt(new lo(.17,.55,10).translate(0,.275,0),new et({color:15227148,roughness:.6}),8),pe=[[-Ko-2,-2],[2,-2],[2,2],[-Ko-2,2]].map(([q,le])=>u(q,le)),ye=new _t,me=[[-11,1.8],[-8,1.2],[11,-1.8],[8,-1.2]].map(([q,le])=>s((r.d+c.d)/2+q,le,.15));[...pe,...me].forEach((q,le)=>{ye.position.copy(q),ye.updateMatrix(),$.setMatrixAt(le,ye.matrix)}),$.visible=!1;function Ce(q){V=q;let le=q?a[q-1]:null;le?v(w(le),A(le)):v(i,n.en),d=le?le.y:0,ie.position.y=d,g.poste.copy(u(-2.6,.9,d)),_.copy(u(-2.2,.75,0)),J.copy(u(-2.2,.75+Jo/2)),z.copy(u(-2.2,.75-Jo/2)),J.y=z.y+=.05,Ee.position.copy(f),Ee.lookAt(x.x,x.y+d,x.z),[[-Ko-2,-2],[2,-2],[2,2],[-Ko-2,2]].forEach(([he,ue],Ae)=>{pe[Ae].copy(u(he,ue)),ye.position.copy(pe[Ae]),ye.updateMatrix(),$.setMatrixAt(Ae,ye.matrix)}),$.instanceMatrix.needsUpdate=!0}let Ue=new ft,we=new Float32Array(ap*6),Je=new Float32Array(ap*6);Ue.setAttribute("position",new bt(we,3)),Ue.setAttribute("color",new bt(Je,3));let nt=new Bn(Ue,new wn({vertexColors:!0}));nt.frustumCulled=!1;let ke=new Fe(new Pe(.07,.12,.07),new et({color:14173227,roughness:.4,metalness:.5})),be=new Fe(new po(1.25,1.45,40).rotateX(-Math.PI/2),new Tn({color:16766503,transparent:!0,opacity:.8,depthWrite:!1}));be.visible=!1;let te=t?t.clone():new Fe(new At(.6,.6,.7,18).rotateZ(Math.PI/2).translate(0,.75,0),new et({color:9071172,roughness:.9}));te.matrixAutoUpdate=!0,te.position.copy(g.bobina).setY(.15),te.rotation.y=r.rumbo,te.visible=!1;let ae=new B(r.x,Qo,r.z),fe=new B(c.x,Qo,c.z),L=new Fe(new Pe(1.3,.8,.65).translate(0,.4,0),new et({color:5989488,roughness:.8}));L.position.copy(g.mesa).setY(.15),L.rotation.y=c.rumbo,L.visible=!1;let R=new Fe(new At(.13,.13,.62,12).rotateZ(Math.PI/2),new et({color:2303531,roughness:.5}));R.rotation.y=c.rumbo,R.visible=!1;let ne=g.mesa.clone().setY(1.08),oe=fe.clone().addScaledVector(new B().subVectors(ae,fe).setY(0).normalize(),.75).setY(Qo-.1);ie.add(xe,Ee,$,nt,ke,be,te,L,R);let P=0,S=new Oe;function U(q,le,he){if(P>=ap)return;S.set(he);let ue=P++*6;we[ue]=q.x,we[ue+1]=q.y,we[ue+2]=q.z,we[ue+3]=le.x,we[ue+4]=le.y,we[ue+5]=le.z;for(let Ae=0;Ae<6;Ae+=3)Je[ue+Ae]=S.r,Je[ue+Ae+1]=S.g,Je[ue+Ae+2]=S.b}let Y=0,H=Array.from({length:8},()=>new B),ge={x:0,y:0,z:0,rumbo:b,pose:"e",fase:0},ve=q=>!!(q.hechos.tomar&&q.hechos.tomar2&&!q.hechos.llegada);function ce(){return E(Y*tp,.13,H[7]),ge.x=H[7].x,ge.y=H[7].y+d,ge.z=H[7].z,ge.pose=Y<1?"e":"t",ge.fase=Y*26,ge}function de(q){let le=q("auxiliar1"),he=q("auxiliar2");return!!le&&!!he&&Math.hypot(le.x-g.poste.x,le.z-g.poste.z)<3.5&&Math.hypot(le.x-he.x,le.z-he.z)<np+1.5}function Se(q,le,he,ue){if(!ve(q)||le!=="auxiliar2")return;let Ae=ue("auxiliar1");if(!Ae)return;let Ie=he.x-Ae.x,dt=he.z-Ae.z,ct=Math.hypot(Ie,dt),zt=np+.5;ct>zt&&(he.x=Ae.x+Ie/ct*zt,he.z=Ae.z+dt/ct*zt)}function ze(q,le,he,ue,Ae=12){for(let Ie=0;Ie<Ae;Ie++){let dt=Ie/Ae,ct=(Ie+1)/Ae;H[0].lerpVectors(q,le,dt),H[0].y-=he*Math.sin(Math.PI*dt),H[1].lerpVectors(q,le,ct),H[1].y-=he*Math.sin(Math.PI*ct),U(H[0],H[1],ue)}}function Te(q,le){if(q.t_tension){if(ze(ae,fe,.5,qt.fibra),q.t_calco)for(let he of[.06,.94])H[0].lerpVectors(ae,fe,he),H[0].y-=.5*Math.sin(Math.PI*he),H[1].copy(H[0]),H[1].y+=.12,U(H[0],H[1],qt.calco)}else if(q.t_cruzar)ze(ae,fe,2.4,qt.fibra);else if(q.t_guia){let he=le("auxiliar2");he&&U(H[2].copy(te.position).setY(1.25),H[3].set(he.x,(he.y??.15)+1,he.z),qt.cuerda)}}let Me=[new B,new B],Ve=(q,le)=>le.set(a[q].x,a[q].y-d+Qo,a[q].z);function Ke(q){let le=q.r_tension?a.length:["r_polea1","r_polea2","r_polea3","r_entrega4"].filter(he=>q[he]).length;le&&!q.r_tension&&U(H[2].copy(te.position).setY(te.position.y+1.1),Ve(0,H[3]),qt.cuerda);for(let he=1;he<le;he++)ze(Ve(he-1,Me[0]),Ve(he,Me[1]),q.r_tension?.5:1.4,q.r_tension?qt.fibra:qt.cuerda,8)}function lt(q){let le=q.e_bajar&&!q.e_fijar;if(R.visible=!0,R.position.copy(le?ne:oe),le)for(let he of[-.25,.25])H[0].copy(fe).setY(Qo-.2),H[0].x+=he*.3,H[1].lerpVectors(H[0],ne,.5),H[1].y-=.4,H[1].x+=he,U(H[0],H[1],qt.fibra),U(H[1],H[2].copy(ne).setX(ne.x+he),qt.fibra)}function X(q,le,he,ue,Ae){let Ie=jt(he),dt=ui(he),ct=dt&&he.fase==="trabajo",zt=Ie.sitio&&a?Math.min(a.length,Ie.poste(he)):0;zt!==V&&Ce(zt);let Zt=It=>{let Kt=ue(It);return Kt&&d?{x:Kt.x,y:(Kt.y??d+.15)-d,z:Kt.z}:Kt},kt=Ie.lista?{...he.hechos,colocar:1,cuerda_extension:1,tensar:1,amarre_medio:1,perimetro:1,carrito:dt,faja:dt,linea_vida:dt}:he.hechos;if(Y=ct?Math.min(1,Y+q/B_):0,Ee.visible=!!kt.colocar,xe.visible=!kt.colocar,!kt.colocar){let It=Zt("auxiliar1"),Kt=Zt("auxiliar2");ve(he)&&It&&Kt?(xe.position.set(It.x,(It.y??.15)+1.47,It.z),xe.lookAt(Kt.x,(Kt.y??.15)+1.47,Kt.z)):kt.llegada?(xe.position.copy(J),xe.lookAt(z)):(xe.position.copy(Ae.local(.45,2.46,-2.85,Be)),xe.lookAt(Ae.local(.45,2.46,1.75,_e)))}if($.visible=!!kt.perimetro,$.count=kt.t_conos&&!kt.t_abrir?8:4,te.visible=he.trabajo==="tendido"||zt>0,zt?(te.position.set(g.carrete.x,g.carrete.y-d+.15,g.carrete.z),te.rotation.y=b):(te.position.copy(g.bobina).setY(.15),te.rotation.y=r.rumbo),L.visible=he.trabajo==="empalme",R.visible=!1,P=0,kt.perimetro)for(let It=0;It<4;It++)U(H[0].copy(pe[It]).setY(.62),H[1].copy(pe[(It+1)%4]).setY(.62),qt.cinta);if(kt.colocar&&kt.cuerda_extension&&(E(Zo-.3,0,H[0]),H[1].set(c.x,H[0].y-.1,c.z).addScaledVector(y,.2),U(H[0],H[1],qt.cuerda),U(H[1],E(Zo-.6,.1,H[2]),qt.cuerda),U(H[2],E(1.7,.1,H[3]),qt.cuerda),kt.tensar&&U(H[3],E(.35,.02,H[4]),qt.cuerda)),kt.amarre_medio){let Kt=[[.22,.22],[.22,-.22],[-.22,-.22],[-.22,.22]].map(([Ln,fi],mi)=>H[mi].set(c.x+Ln,3.65,c.z+fi));for(let Ln=0;Ln<4;Ln++)U(Kt[Ln],Kt[(Ln+1)%4],qt.cuerda);for(let Ln of[-1,1])U(E(3.4,0,H[4]).addScaledVector(m,Ln*.21),H[5].set(c.x,3.65,c.z).addScaledVector(m,Ln*.22),qt.cuerda)}let fa=Zt("liniero");if(ke.visible=!!(kt.carrito&&fa),ke.visible){let It=H[5].set(fa.x,(fa.y??.15)+1.28,fa.z);E(Math.min(Zo-.8,Math.max(1.3,It.y-.15)),.1,ke.position),It.distanceTo(ke.position)<1.6&&U(ke.position,It.addScaledVector(y,.1),qt.cuerda)}if(ct&&fa&&Y>=1){let It=H[6].set(fa.x,fa.y,fa.z);if(kt.faja){let Kt=H[0].copy(It).addScaledVector(m,.2).setY(It.y+1),Ln=H[1].copy(It).addScaledVector(m,-.2).setY(It.y+1),fi=E(tp+1.25,0,H[2]).addScaledVector(m,.15),mi=E(tp+1.25,0,H[3]).addScaledVector(m,-.15),ma=H[4].set(c.x,6.3,c.z).addScaledVector(y,-.5);U(Kt,fi,qt.faja),U(fi,ma,qt.faja),U(ma,mi,qt.faja),U(mi,Ln,qt.faja)}kt.linea_vida&&U(H[0].copy(It).addScaledVector(y,-.14).setY(It.y+1.42),H[1].set(c.x,Math.min(9.2,It.y+2.5),c.z),qt.vida)}he.trabajo==="tendido"&&Te(kt,Zt),he.trabajo==="empalme"&&lt(kt),zt&&Ke(kt),Ue.setDrawRange(0,P*2),Ue.attributes.position.needsUpdate=Ue.attributes.color.needsUpdate=!0,be.material.opacity=.55+.3*Math.sin(le*4)}function Re(q){be.visible=!!g[q],be.visible&&be.position.copy(g[q]).setY(g[q].y-d+.2)}return{grupo:ie,zonas:g,parqueo:T,puesto:Z,metaEscalera:_,cargando:ve,llego:de,restringir:Se,cada:X,marcar:Re,puestoLiniero:ce,L_CARGA:np,get subida(){return Y},get rumbo(){return b},get cima(){return x}}}var U_=1.7,z_=1.25,O_=1.6,i0=(n,e)=>n+Math.atan2(Math.sin(e-n),Math.cos(e-n));function r0({sesion:n,obra:e,resolver:t,altura:a}){let i=new Map;function r(o,s,c){for(let l of Object.keys(Rt)){let d=!ea(s,l);if(d&&!i.has(l)){let p=e.puesto(l,"pickup");i.set(l,{rol:l,x:p.x,z:p.z,y:.15,rumbo:0,pose:"i",fase:0,espera:0})}else d||i.delete(l)}if(n.anfitrion())for(let l of i.values()){let d=null,p=null,u=U_;if(l.pose="i",l.y>a(l.x,l.z)+.5&&!(s.fase==="trabajo"&&ui(s))){let x=e.zonas.poste;l.x=x.x,l.z=x.z,l.y=a(x.x,x.z)}if(s.fase!=="trabajo")d=s.fase==="sala"?e.puesto(l.rol,"pickup"):null;else if(l.rol==="liniero"&&ui(s)){let x=e.puestoLiniero();Object.assign(l,{x:x.x,z:x.z,y:x.y,rumbo:e.rumbo,pose:x.pose,fase:x.fase}),p=e.subida>=1?Pr(s,l.rol).find(y=>!y.bloqueo)?.paso:null}else if(e.cargando(s)&&/^auxiliar/.test(l.rol))if(l.pose="c",l.rol==="auxiliar1")d=e.metaEscalera,u=z_;else{let x=c("auxiliar1");if(x){let y=l.x-x.x,m=l.z-x.z,h=Math.hypot(y,m)||1,b=l.x,E=l.z;l.x=x.x+y/h*e.L_CARGA,l.z=x.z+m/h*e.L_CARGA,l.rumbo=i0(l.rumbo,Math.atan2(x.x-l.x,x.z-l.z)),l.fase+=Math.hypot(l.x-b,l.z-E)*4.19}}else p=Pr(s,l.rol).find(x=>!x.bloqueo)?.paso??null,d=e.puesto(l.rol,p?p.lugar:jt(s).reposo(s,l.rol));let f=!d;if(d&&Math.hypot(d.x-l.x,d.z-l.z)>150&&(l.x=d.x,l.z=d.z),d){let x=d.x-l.x,y=d.z-l.z,m=Math.hypot(x,y);if(m>.25){let h=Math.min(m,u*o);if(l.x+=x/m*h,l.z+=y/m*h,t(l,.3),l.rumbo=i0(l.rumbo,Math.atan2(x,y))*.25+l.rumbo*.75,l.fase+=h*4.19,l.rol==="auxiliar1"&&e.cargando(s)){let b=c("auxiliar2");b&&Math.hypot(b.x-l.x,b.z-l.z)>e.L_CARGA+.6&&(l.x-=x/m*h,l.z-=y/m*h)}}else f=!0;l.y=a(l.x,l.z)}p&&f?(l.espera+=o,l.espera>O_&&(l.espera=0,n.proponer({t:"intento",paso:p.id,opcion:0,bot:!0,rol:l.rol}))):l.espera=0}}return{B:i,cada:r}}var es={"teclado y rat\xF3n":{accion:"E",mundo:"WASD moverse \xB7 rat\xF3n mirar \xB7 E acci\xF3n \xB7 V vista \xB7 R radio \xB7 M mapa \xB7 P pausa \xB7 May\xFAs correr",panel:"Clic o 1\u20133 para elegir \xB7 \u2191 \u2193 mover \xB7 Enter aceptar \xB7 Esc volver",todo:"Teclado y rat\xF3n: WASD moverse, rat\xF3n mirar (clic en el juego para capturarlo), E acci\xF3n, V cambiar vista, R radio, M mapa, P o Esc pausa, May\xFAs correr, H bocina al volante."},t\u00E1ctil:{accion:"\u270B",mundo:"Izquierda: caminar \xB7 derecha: mirar \xB7 \u270B acci\xF3n \xB7 \u{1F441} vista \xB7 \u{1F4FB} radio \xB7 \u{1F5FA} mapa \xB7 \u23F8 pausa",panel:"Toca una opci\xF3n para elegirla",todo:"Pantalla t\xE1ctil: arrastra a la izquierda para caminar (al fondo, corres) y a la derecha para mirar. Botones: \u270B acci\xF3n, \u{1F441} vista, \u{1F4FB} radio, \u{1F5FA} mapa, \u23F8 pausa."},control:{accion:"\u24B6",mundo:"\u24C1 moverse \xB7 \u24C7 mirar \xB7 \u24B6 acci\xF3n \xB7 \u24CE vista \xB7 \u24CD radio \xB7 \u29C9 mapa \xB7 \u2630 pausa \xB7 LT correr",panel:"\u24B6 elegir \xB7 \u271A o \u24C1 mover \xB7 \u24B7 volver",todo:"Control: palanca izquierda moverse, derecha mirar, \u24B6 acci\xF3n, \u24CE vista, \u24CD radio, \u29C9 (Vista) mapa, \u2630 (Men\xFA) pausa, LT correr, LB bocina al volante. En los men\xFAs: cruceta o palanca para mover, \u24B6 elegir, \u24B7 volver."}},G_=`
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
`,o0=["1","2","3","4","5","6"];function s0(n,e){let t=document.createElement("style");t.textContent=G_,document.head.append(t);let a=(J,z="div")=>{let $=document.createElement(z);return $.className=J,n.append($),$},i=a("mu-hud"),r=a("mu-ind"),o=a("mu-lista","ol"),s=a("mu-aviso"),c=a("mu-avisos"),l=a("mu-fondo"),d=document.createElement("div");d.className="mu-panel",d.setAttribute("role","dialog"),d.setAttribute("aria-modal","true"),l.append(d),l.hidden=!0,i.hidden=r.hidden=o.hidden=s.hidden=!0;let p=null,u=!1,f=null,x=!1,y=null,m=null,h=[],b="",E=0,v="teclado y rat\xF3n",M=a("mu-ayudas");try{b=localStorage["mundo:nombre"]??""}catch{}let A=()=>[...d.querySelectorAll("button:not([disabled]), input")];function w(J,z,{cancela:$=!1}={}){let pe=f===J?E:-1,ye=f!==J;document.pointerLockElement?(p=document.pointerLockElement,u=!0):J==="pausa"&&(u=!!p),f=J,x=$,d.innerHTML=z+'<div class="mu-pie"></div>',l.hidden=!1,document.exitPointerLock?.();let me=A(),Ce=me[pe]?pe:me.findIndex(Ue=>Ue.classList.contains("elegido"));_(Ce>=0?Ce:me.findIndex(Ue=>Ue.tagName==="BUTTON")),D(),ye&&Et.clic()}function g(){f=null,y=null,l.hidden=!0,d.innerHTML="",u&&p&&v==="teclado y rat\xF3n"&&!document.pointerLockElement&&p.requestPointerLock?.()?.catch?.(()=>{}),u=!1}function _(J){let z=A();z.length&&(E=(J+z.length)%z.length,z.forEach(($,pe)=>$.classList.toggle("foco",pe===E)),z[E].focus({preventScroll:!0}),z[E].scrollIntoView?.({block:"nearest"}),z[E].tagName==="INPUT"&&z[E].setSelectionRange(z[E].value.length,z[E].value.length))}function T(J){let z=A().indexOf(document.activeElement);_((z>=0?z:E)+J),Et.hover()}let D=()=>{let J=d.querySelector(".mu-pie");J&&(J.textContent=es[v].panel)};d.addEventListener("click",J=>{let z=J.target.closest("button");if(!z||z.disabled)return;let{a:$,v:pe}=z.dataset;if($==="rol")N(),e.rol(pe);else if($==="modo")e.modo(pe);else if($==="trabajo")e.trabajo(pe);else if($==="empezar")N(),e.empezar();else if($==="unirse"){let ye=d.querySelector("[name=codigo]").value.trim();ye&&e.unirse(ye)}else if($==="copiar")navigator.clipboard?.writeText(pe).then(()=>{z.textContent="Enlace copiado \u2713"},()=>{z.textContent=pe});else if($==="opcion")m=Number(pe),e.intento(y.id,m);else if($==="frase")e.radio(Number(pe)),g();else if($==="reiniciar")e.reiniciar();else if($==="cerrar")g();else if($==="ajuste"){let[ye,me]=pe.split(":");e.ajuste(ye,Number(me))}else $==="dev"?e.dev(pe,z):$==="ir"?(e.ir(pe),g()):$==="reporte"&&e.reporte()});function N(){let J=d.querySelector("[name=nombre]");if(J){b=J.value.trim().slice(0,16);try{localStorage["mundo:nombre"]=b}catch{}e.nombre(b)}}addEventListener("keydown",J=>{f&&((J.code==="Escape"||J.code==="KeyP"&&f==="pausa")&&x?g():J.code==="ArrowDown"?(J.preventDefault(),T(1)):J.code==="ArrowUp"?(J.preventDefault(),T(-1)):J.target.tagName!=="INPUT"&&/^(Digit|Numpad)[1-6]$/.test(J.code)&&d.querySelectorAll("[data-a=opcion],[data-a=frase]")[Number(J.code.slice(-1))-1]?.click())});function k(J,z,{codigo:$,enlace:pe,conectado:ye,pares:me}){let Ce=J.jugadores[z]?.rol,Ue=J.fase==="trabajo",we=jt(J),Je=d.querySelector("[name=nombre]")?.value??b,nt=Object.entries(Rt).map(([ke,be])=>{let te=ea(J,ke),ae=te&&te!==z;return`<button class="mu-op${te===z?" elegido":""}" data-a="rol" data-v="${ke}"${ae||!ye?" disabled":""}>${be.icono} <b>${ot(be.nombre)}</b> \xB7 ${te===z?"T\xFA":ae?ot(J.jugadores[te].nombre):"compa\xF1ero autom\xE1tico"}<small>${ot(we.roles[ke])}</small></button>`}).join("");w("sala",`
      <h1>Cuadrilla Segura \xB7 Mundo</h1>
      <p><small>Orden de trabajo: ${ot(we.nombre)} \xB7 ${ot(we.lugar)}. Contenido en revisi\xF3n por Salud Ocupacional.</small></p>
      <div class="mu-fila"><label>Tu nombre<input name="nombre" maxlength="16" autocomplete="off" value="${ot(Je)}" placeholder="Como te ver\xE1n los dem\xE1s"></label>
        <div>Sala <b>${ot($)}</b> \xB7 ${ye?`${me+1} en l\xEDnea`:"conectando\u2026"}<br><button class="mu-op" data-a="copiar" data-v="${ot(pe)}" style="margin:4px 0 0;min-height:36px;padding:6px 10px">Copiar enlace para invitar</button></div></div>
      <h2>${Ue?"Trabajo en curso: elige un rol libre":"Elige tu rol"}</h2>${nt}
      ${Ue||Object.keys(Vn).length<2?"":`<h2>Orden de trabajo</h2>${Object.entries(Vn).map(([ke,be])=>`<button class="mu-op${J.trabajo===ke?" elegido":""}" data-a="trabajo" data-v="${ke}"${Ce?"":" disabled"}><b>${ot(be.nombre)}</b><small>${ot(be.resumen)}</small></button>`).join("")}`}
      ${Ue?"":`<h2>Dificultad</h2><div class="mu-fila">
        <button class="mu-op${J.modo==="aprendiz"?" elegido":""}" data-a="modo" data-v="aprendiz"${Ce?"":" disabled"}><b>Aprendiz</b><small>Con pistas; el juego no deja saltarse el orden.</small></button>
        <button class="mu-op${J.modo==="tecnico"?" elegido":""}" data-a="modo" data-v="tecnico"${Ce?"":" disabled"}><b>T\xE9cnico</b><small>Sin pistas; saltarse un paso es una falta.</small></button></div>
      <button class="mu-op mu-pri" data-a="empezar"${Ce?"":" disabled"}>${Ce?"Empezar el trabajo":"Elige un rol para empezar"}</button>`}
      <h2>Unirse a otra sala</h2><div class="mu-fila"><input name="codigo" maxlength="12" autocomplete="off" placeholder="C\xF3digo de sala"><button class="mu-op" data-a="unirse" style="margin:0">Unirse</button></div>`)}function C(J,z,$=[]){y?.id!==J.id&&(m=null),y=J,h=$;let pe=Hc(J).map((ye,me)=>`<button class="mu-op${$.includes(ye)?" mal":""}" data-a="opcion" data-v="${ye}"${$.includes(ye)?" disabled":""}><span class="mu-letra">${o0[me]}</span><span>${ot(J.opciones[ye])}</span></button>`).join("");w("decision",`<h2>${ot(Rt[J.rol].nombre)} \xB7 ${ot(J.nombre)}</h2><h1>${ot(J.pregunta)}</h1>${pe}
      ${$.length?`<div class="mu-nota"><b>No es as\xED.</b> ${ot(J.porque)}<br><small>${ot(J.ref)}</small></div>`:z.modo==="aprendiz"?`<div class="mu-pista"><small>Pista: ${ot(J.ref)}</small></div>`:""}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Volver</button>`,{cancela:!0})}function F(J,z){f!=="decision"||y?.id!==J.paso||(m!==null&&!h.includes(m)&&h.push(m),C(y,z,h))}function V(J){w("radio",`<h2>Radio</h2>${jt(J).frases.map((z,$)=>`<button class="mu-op" data-a="frase" data-v="${$}"><span class="mu-letra">${o0[$]}</span><span>${ot(z)}</span></button>`).join("")}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>`,{cancela:!0})}function O(J){w("mapa",'<h2>Costa Rica \xB7 escala 1:60 \xB7 \u25B2 t\xFA \xB7 \u25CB pick-up y cuadrilla</h2><canvas></canvas><button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>',{cancela:!0}),J(d.querySelector("canvas"))}function j(J){let z=Ir(J),$=e0(J),pe=Object.entries(Rt).map(([ye,me])=>{let Ce=ea(J,ye),Ue=J.eventos.filter(we=>we.tipo==="falta"&&we.rol===ye);return`<tr><td>${me.icono} <b>${ot(me.corto)}</b><br><small>${Ce?ot(J.jugadores[Ce].nombre):"autom\xE1tico"}</small></td><td><b>${$[ye]}</b></td>
        <td>${Ue.length?Ue.map(we=>`${ot(we.texto)}<br><small>${ot(we.ref)}</small>`).join("<br>"):"<small>Sin faltas</small>"}</td></tr>`}).join("");w("fin",`<h1>Trabajo terminado ${"\u2605".repeat(Qu(J))}${"\u2606".repeat(3-Qu(J))}</h1>
      <p>Seguridad de la cuadrilla: <b>${z} de 100</b> \xB7 modo ${J.modo==="tecnico"?"T\xE9cnico":"Aprendiz"}. ${ot(jt(J).fin)}</p>
      <table class="mu-tabla">${pe}</table>
      <p><small>Contenido en revisi\xF3n por Salud Ocupacional. ${ot(jt(J).nota)}</small></p>
      <button class="mu-op mu-pri" data-a="reiniciar">Volver a la sala</button>
      <button class="mu-op" data-a="cerrar" style="text-align:center">Seguir en el mundo</button>`,{cancela:!0})}function G(J,z,$,pe,ye,me=""){i.hidden=r.hidden=o.hidden=!1,i.innerHTML=`<b>${z?`${Rt[z].icono} ${ot(Rt[z].nombre)}`:"\u{1F440} Observando"}</b><div class="mu-tarea">${ot($)}</div>${me?`<div class="mu-lugar">\u{1F4CD} ${ot(me)}</div>`:""}`;let Ce=Ir(J);r.innerHTML=`<label>Seguridad</label><div class="v">${Ce}</div><div class="mu-barra"><i style="width:${Ce}%;background:${Ce>=80?"var(--verde)":Ce>=50?"var(--amarillo)":"var(--rojo)"}"></i></div>`;let Ue=di(J),we=Ue.find(nt=>!J.hechos[nt.id]&&nt.fisico.every(ke=>J.hechos[ke])&&nt.antes.every(ke=>J.hechos[ke]))?.id;o.innerHTML=`<h4>${ot(jt(J).nombre)} \xB7 ${Object.keys(J.hechos).length}/${Ue.length}</h4>`+Ue.map((nt,ke)=>`<li class="${J.hechos[nt.id]?"hecho":nt.id===we?"ahora":""}${nt.rol===z?" mio":""}"><i>${J.hechos[nt.id]?"\u2713":ke+1}</i><span>${ot(nt.nombre)} <small>${ot(Rt[nt.rol].corto)}</small></span></li>`).join("");let Je=/^(\S{1,3}) · (.+)$/.exec(pe??"");s.hidden=!pe,s.classList.toggle("gris",!!ye),Je&&!ye?s.innerHTML=`<span class="mu-tecla">${ot(Je[1])}</span><span>${ot(Je[2])}</span>`:s.textContent=pe??""}function Z(){i.hidden=r.hidden=o.hidden=s.hidden=!0}function ie(J,z="",$=4.5){let pe=document.createElement("div");for(pe.className=z,pe.innerHTML=J,c.append(pe);c.children.length>4;)c.firstChild.remove();setTimeout(()=>pe.remove(),$*1e3)}let xe=[];function Ee(J){J.forEach((z,$)=>{let pe=xe[$]??=a("mu-etq");pe.hidden=!z.visible,z.visible&&(pe.textContent!==z.texto&&(pe.textContent=z.texto),pe.style.left=z.x+"px",pe.style.top=z.y+"px")});for(let z=J.length;z<xe.length;z++)xe[z].hidden=!0}function Be(J){if(J.origen!==v&&(v=J.origen,D()),M.hidden=!!f,!f){let z=es[v].mundo;M.textContent!==z&&(M.textContent=z);return}if(J.abajo&&T(1),J.arriba&&T(-1),J.accion&&J.origen==="control"){let z=A()[E];z?.tagName==="BUTTON"&&z.click()}J.atras&&x&&g()}function _e(J,z,$){let pe=(Ce,Ue,we)=>`<div class="mu-fila3"><span>${Ue}</span><button class="mu-op" data-a="ajuste" data-v="${Ce}:-1" aria-label="Bajar ${Ue}">\u2212</button><b style="min-width:3.2em;text-align:center">${we}</b><button class="mu-op" data-a="ajuste" data-v="${Ce}:1" aria-label="Subir ${Ue}">+</button></div>`,ye=(Ce,Ue,we)=>`<button class="mu-op${we?" elegido":""}" data-a="ajuste" data-v="${Ce}:0">${we?"\u2611":"\u2610"} ${Ue}</button>`,me=(Ce,Ue,we)=>`<button class="mu-op" data-a="${Ce}" data-v="${Ue}">${we}</button>`;w("pausa",`<h1>Pausa</h1><p><small>El juego sigue corriendo para tu cuadrilla.</small></p>
      ${me("cerrar","","\u25B6 Continuar")}${$?.fase==="fin"?me("reporte","","\u{1F3C1} Ver el reporte del trabajo"):""}
      <h2>Sonido</h2>${pe("musica","M\xFAsica",Math.round(J.musica*10))}${pe("efectos","Efectos",Math.round(J.efectos*10))}
      <h2>Controles</h2>${pe("sensibilidad","Sensibilidad de la c\xE1mara",J.sensibilidad.toFixed(1))}${ye("invertir","Invertir el eje vertical",J.invertir)}
      <p><small>${ot(es[v].todo)}</small></p>
      <h2>Imagen</h2>${pe("resolucion","Resoluci\xF3n","\xD7"+J.resolucion.toFixed(2))}${ye("diag","Panel de medidas",J.diag)}
      <h2>Desarrollo</h2>${ye("dev","Opciones de desarrollador",J.dev)}
      ${J.dev?`<p><small>Cambian el trabajo de toda la sala (las propone el anfitri\xF3n). \xDAsalas para probar y para reportar fallos.</small></p>
        ${me("dev","reporte","\u{1F4CB} Copiar reporte del estado (para enviar a Claude)")}
        ${me("dev","paso","\u23ED Completar el paso que toca")}${me("dev","todo","\u23E9 Terminar el trabajo")}${me("dev","reiniciar","\u21BA Reiniciar el trabajo")}
        ${pe("tiempo","Velocidad del tiempo","\xD7"+J.tiempo)}${ye("volar","Volar (sin colisiones, m\xE1s r\xE1pido)",J.volar)}${ye("colisiones","Mostrar colisiones",J.colisiones)}<button class="mu-op" data-a="ajuste" data-v="lluvia:0">\u{1F327} Lluvia: ${J.lluvia}</button>
        <h2>Ir a</h2><div class="mu-fila">${z.map(([Ce,Ue])=>me("ir",Ce,ot(Ue))).join("")}</div>`:""}`,{cancela:!0})}return{pausa:_e,get origen(){return v},get abierto(){return f},get paso(){return y},get nombre(){return b},sala:k,decision:C,fallo:F,radio:V,mapa:O,fin:j,cerrar:g,tablero:G,ocultarTablero:Z,avisar:ie,etiquetas:Ee,navegar:Be}}var kc=60/116/2,H_=.25,rp=n=>440*2**((n-69)/12),k_=[[48,52,55],[45,48,52],[41,45,48],[43,47,50]],l0=[[72,0,76,79,0,76,74,72,69,0,72,76,0,74,72,69,65,0,69,72,0,74,72,69,67,71,74,0,79,77,74,71],[79,0,79,77,76,0,74,76,72,0,0,76,74,72,69,0,77,0,76,74,72,0,69,72,74,0,71,72,74,76,77,79],[76,76,0,79,0,76,72,0,81,0,79,76,72,0,76,0,77,0,81,0,79,77,76,72,74,0,79,0,77,76,74,71]];function c0(){let n=null,e=null,t=1,a=.5,i=0,r=0,o=null,s=null;function c(){if(dm(),!n)try{n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain(),e.gain.value=a*.22,e.connect(n.destination),o=n.createOscillator(),o.type="sawtooth",o.frequency.value=40;let h=n.createBiquadFilter();h.type="lowpass",h.frequency.value=420,s=n.createGain(),s.gain.value=0,o.connect(h).connect(s).connect(n.destination),o.start()}catch{n=null;return}n.state!=="running"&&n.resume?.().catch?.(()=>{})}for(let h of["pointerdown","keydown","touchend"])addEventListener(h,c,{passive:!0});let l=new Map;function d(h){if(!l.has(h)){let E=new Float32Array(16),v=new Float32Array(16);for(let M=1;M<16;M++)E[M]=2/(M*Math.PI)*Math.sin(M*Math.PI*h);l.set(h,n.createPeriodicWave(E,v))}return l.get(h)}function p(h,b,E,v,M,A){let w=n.createOscillator(),g=n.createGain();h==="pulso"?w.setPeriodicWave(d(A)):w.type=h,w.frequency.value=b,g.gain.setValueAtTime(M,E),g.gain.exponentialRampToValueAtTime(5e-4,E+v),w.connect(g).connect(e),w.start(E),w.stop(E+v+.02)}function u(h){let b=n.createOscillator(),E=n.createGain();b.frequency.setValueAtTime(140,h),b.frequency.exponentialRampToValueAtTime(45,h+.12),E.gain.setValueAtTime(.9,h),E.gain.exponentialRampToValueAtTime(.001,h+.14),b.connect(E).connect(e),b.start(h),b.stop(h+.16)}let f=null;function x(h,b){f??=(()=>{let A=n.createBuffer(1,n.sampleRate*.06,n.sampleRate),w=A.getChannelData(0);for(let g=0;g<w.length;g++)w[g]=Math.random()*2-1;return A})();let E=n.createBufferSource(),v=n.createBiquadFilter(),M=n.createGain();E.buffer=f,v.type="highpass",v.frequency.value=6e3,M.gain.setValueAtTime(b,h),M.gain.exponentialRampToValueAtTime(.001,h+.05),E.connect(v).connect(M).connect(e),E.start(h)}function y(h,b){let E=Math.floor(h/32)%l0.length,v=h%32,M=k_[Math.floor(v/8)],A=l0[E][v];A&&p("pulso",rp(A),b,kc*1.6,.22,.25),v%2===0&&p("triangle",rp(M[0]-12),b,kc*1.8,.5),p("pulso",rp(M[v%3]+12),b,kc*.5,.05,.125),v%4===0&&u(b),x(b,v%2?.05:.1)}function m(h=null){if(!n||n.state!=="running")return;if(i<n.currentTime&&(i=n.currentTime+.05),a>0)for(;i<n.currentTime+H_;)y(r++,i),i+=kc;else i=n.currentTime;let b=Math.abs(h??0),E=n.currentTime;o.frequency.setTargetAtTime(38+b*3.2,E,.15),s.gain.setTargetAtTime(h===null?0:(.05+Math.min(.08,b*.004))*t,E,.2)}return{desbloquear:c,cada:m,get activo(){return n?.state==="running"},volumen(h,b){a=h,t=b,um(b),e&&e.gain.setTargetAtTime(h*.22,n.currentTime,.1)},atenuar(h){e&&e.gain.setTargetAtTime(a*(h?.08:.22),n.currentTime,.3)}}}var d0={musica:.5,efectos:.8,sensibilidad:1,invertir:!1,resolucion:0,diag:!1,dev:!1,tiempo:1,volar:!1,colisiones:!1,lluvia:"auto"},Tt=(()=>{try{return{...d0,...JSON.parse(localStorage["mundo:ajustes"]??"{}"),tiempo:1,volar:!1,colisiones:!1,lluvia:"auto"}}catch{return{...d0}}})(),V_=()=>{try{localStorage["mundo:ajustes"]=JSON.stringify(Tt)}catch{}};wi.variante="nuevo";var qn=new URLSearchParams(location.search),hi=gc(),dp=qn.has("demo"),xp=(n,e)=>Number.isFinite(parseInt(qn.get(n)))?parseInt(qn.get(n)):e,Vc=(...n)=>n.every(Number.isFinite),E0=new Int16Array(await(await fetch(new URL(Tf,import.meta.url))).arrayBuffer()),En=new uc({antialias:hi.antialias,powerPreference:"high-performance"}),ka=hi.pixelRatio;En.setPixelRatio(ka);En.setSize(innerWidth,innerHeight);En.toneMapping=So;En.toneMappingExposure=1.05;En.shadowMap.enabled=!0;En.shadowMap.autoUpdate=In;document.body.append(En.domElement);var dn=new _i;dn.background=new Oe(10997738);dn.fog=new eo(11850728,220,4200);{let n=new xr(En),e=new fc;dn.environment=n.fromScene(e,.04).texture,dn.environmentIntensity=.22,n.dispose(),e.dispose()}var _n=new an(62,innerWidth/innerHeight,.2,7e3);dn.add(new mo(14084607,7043669,1.15));var ta=new vo(16773590,2.7),j_=new B(.45,.78,.32).normalize();ta.castShadow=!0;ta.shadow.mapSize.setScalar(hi.sombra);var jc=In?32:48;Object.assign(ta.shadow.camera,{left:-jc,right:jc,top:jc,bottom:-jc,near:1,far:260});ta.shadow.bias=In?-4e-4:-6e-4;ta.shadow.normalBias=.04;ta.shadow.radius=2;dn.add(ta,ta.target);addEventListener("resize",()=>{_n.aspect=innerWidth/innerHeight,_n.updateProjectionMatrix(),En.setSize(innerWidth,innerHeight)});var bn=wf(Mu.eje),$t=Df(Mu,bn),Li=Object.entries(Go).map(([n,e])=>{let[t,a]=Fu(Ci,e.lat,e.lon);return{k:n,n:e.n,x:t,z:a,r:e.r}}),Fi=Object.fromEntries(Li.map(n=>[n.k,n])),Dn=Ff(E0,Ci,bn,Li.filter(n=>n.r>0),Zf.map(n=>({...n,x:Fi[n.k].x,z:Fi[n.k].z}))),qc=n=>{let e=bn.en(bn.largo,n);return[e.x,e.z]},na=Nf(Jf.map(n=>({n:n.n,y0:n.p[0][0]==="@"?0:void 0,puntos:n.p.flatMap(e=>e==="@oeste"?[qc(-$t.BORDE),qc(-$t.BORDE-60)]:e==="@este"?[qc($t.BORDE),qc($t.BORDE+60)]:[typeof e=="string"?[Fi[e].x,Fi[e].z]:Fu(Ci,e[0],e[1])])})),Dn.alturaBase,Dn.MAR,Li.filter(n=>n.r>0)),M0=Bf(na),A0=Uf(Dn,na,Ci),q_=Kf(E0,Ci,na),os=em(Li,Dn,na),T0=tm(na);Dn.listo(na,(n,e)=>{M0.rehacer(n,e,420),A0.rehacer(n,e),os.actualizar(n,e),_p.actualizar(n,e)});var $c={},bp=(n,e)=>Math.abs(n)<320&&Math.abs(e)<360&&(bn.aVia(n,e,$c),Math.abs($c.a)<=$t.BORDE&&$c.d>=$t.D0&&$c.d<=$t.D1),Pa=(n,e)=>bp(n,e)?$t.altura(n,e):Math.max(Dn.altura(n,e),Dn.MAR-1),vp=new rt,yp=Tm(xp("autos",20)+19+26,vp,{vidrio:new et({color:2109503,roughness:.1,metalness:.55}),reja:new et({color:1382428,roughness:.45,metalness:.5})});vp.traverse(n=>{n.isMesh&&(n.castShadow=In)});var Jc=_m(bn,$t,xp("autos",20),yp),up=Cf(bn,$t.cajas,$t.circulos,{d0:-1e9,d1:1e9,a:1e9}),xn=Wf(dn,Pa),as=Xf(96),Ze=Yf(Pa,$t.estacionado),_p=im(na,Pa,Li,bp),u0=Object.values(Vn).find(n=>n.sitio)?.sitio,Ut=a0({via:bn,barrio:$t,carrete:Ze.camion.carrete,ruta:u0?_p.tramo(u0):null}),Nr=vm({escena:dn,carreteras:na,terreno:Dn,meta:Ci,flota:yp}),$_=new Oe(10997738),p0=new Oe(8293529),W_=new Oe(11850728);dn.add(Dn.grupo,M0.malla,A0.grupo,os.grupo,_p.grupo,T0,$t.grupo,vp,as.malla,Ut.grupo,Ze.grupo);var h0=[11879996,3960757,5216859,9068464,13666862,4869975],X_=Array.from({length:xp("gente",5)},(n,e)=>({id:"p"+e,d:30+e*83%(bn.largo-60),a:e%2?4.4:-4.3,s:e%2?1:-1,v:1.15+e%3*.15,op:{camisa:h0[e%h0.length],uniforme:!1}})),op={},Xt=new B,pp={dist:0},hp=n=>({camisa:Rt[n].camisa,uniforme:!0,arnes:n==="liniero"}),Ca=null;function fp(n){Ca&&dn.remove(Ca.raiz),Ca=Lu(n?{camisa:Rt[n].camisa}:{}),Ca.equipar("casco"),n==="liniero"&&Ca.equipar("arnes"),dn.add(Ca.raiz)}fp(null);var f0=bn.en($t.inicio.d,$t.inicio.a),se={x:f0.x,z:f0.z,y:.15,vx:0,vz:0,rumbo:Math.PI,fase:0,guinada:Math.PI,cabeceo:-.12,dist:4.2,primera:!1,d:0,a:0},ed=Cm(),Zc=wm(En.domElement,ed),w0=Rm(ed,qn.has("diag")||Tt.diag);qn.has("dev")&&(Tt.dev=!0);var Kc=c0(),C0=Object.assign(document.createElement("div"),{className:"mu-chip",textContent:"\u{1F507} Toca la pantalla o pulsa una tecla para activar el sonido"});ed.append(C0);Tt.resolucion||(Tt.resolucion=ka);function R0(){Kc.volumen(Tt.musica,Tt.efectos),Zc.mirada.sensibilidad=Tt.sensibilidad,Zc.mirada.invertir=Tt.invertir,ka=Tt.resolucion,En.setPixelRatio(ka),w0.mostrar(Tt.diag||qn.has("diag")),F0.visible=Tt.colisiones}var cn=(()=>{try{return localStorage["mundo:id"]??=Math.random().toString(36).slice(2,10)}catch{return Math.random().toString(36).slice(2,10)}})(),Ur=(qn.get("sala")||"").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,12);Ur||(Ur=Array.from({length:4},()=>"abcdefghjkmnpqrstuvwxyz"[Math.floor(Math.random()*23)]).join(""),qn.set("sala",Ur),history.replaceState(null,"","?"+qn));var Y_=`${location.origin}${location.pathname}?sala=${Ur}`,rs=null,mp=qn.has("sinred"),m0=0,Ra=()=>je.E.jugadores[cn]?.rol??null,ht=s0(ed,{nombre:n=>{let e=je.E.jugadores[cn];e&&e.nombre!==(n||"Jugador")&&je.proponer({t:"entra",nombre:n})},rol:n=>{let e=je.E.jugadores[cn];rs=e?.rol===n?null:n,e||je.proponer({t:"entra",nombre:ht.nombre}),je.proponer({t:"rol",rol:rs})},modo:n=>je.proponer({t:"modo",modo:n}),trabajo:n=>je.proponer({t:"trabajo",trabajo:n}),empezar:()=>je.proponer({t:"empezar"}),unirse:n=>{location.search="?sala="+encodeURIComponent(n.toLowerCase())},intento:(n,e)=>je.proponer({t:"intento",paso:n,opcion:e}),reiniciar:()=>je.proponer({t:"reiniciar"}),ajuste:(n,e)=>{let t={musica:[0,1,.1],efectos:[0,1,.1],sensibilidad:[.3,3,.1],resolucion:[.5,2,.25],tiempo:[1,8,0]};if(n==="lluvia")Tt.lluvia={auto:"s\xED",s\u00ED:"no",no:"auto"}[Tt.lluvia];else if(n==="tiempo")Tt.tiempo=e>0?Math.min(8,Tt.tiempo*2):Math.max(1,Tt.tiempo/2);else if(t[n]){let[a,i,r]=t[n];Tt[n]=Math.round(Math.max(a,Math.min(i,Tt[n]+e*r))*100)/100}else n in Tt&&(Tt[n]=!Tt[n]);V_(),R0(),ht.pausa(Tt,Ep,je.E),Et.clic()},dev:(n,e)=>{if(n==="reporte"){let t=JSON.stringify({fecha:new Date().toISOString(),info:(({texto:a,...i})=>i)(Mp()),estado:je.E,huella:je.huella,eventos:je.E.n,entrada:pi,navegador:navigator.userAgent,pantalla:[innerWidth,innerHeight,devicePixelRatio]},null,1);navigator.clipboard?.writeText(t).then(()=>{e.textContent="\u{1F4CB} Reporte copiado \u2713 (p\xE9galo en el chat)"},()=>{console.log(t),e.textContent="\u{1F4CB} No se pudo copiar: est\xE1 en la consola"});return}if(!je.anfitrion()){ht.avisar("Solo el anfitri\xF3n de la sala puede cambiar el trabajo","falta");return}if(n==="reiniciar")je.proponer({t:"reiniciar",dev:!0});else if(je.E.fase==="trabajo")for(let t=0;t<(n==="todo"?40:1)&&je.E.fase==="trabajo";t++){let a=Gc(je.E);if(!a)break;je.proponer(a.auto?{t:"auto",paso:a.id}:{t:"intento",paso:a.id,opcion:0,dev:!0})}ht.cerrar()},reporte:()=>ht.fin(je.E),ir:n=>{let e=n==="poste"?Ut.zonas.poste:n==="pickup"?Ze.local(2.2,0,0,new B):Fi[n];e&&(se.x=e.x+(Fi[n]?12:0),se.z=e.z,se.vx=se.vz=0)},radio:n=>{Sn?.fiable({t:"radio",i:n}),P0(n,cn)}});function J_(n,e){Number.isInteger(n.n)&&je.latido(n.n,n.h,e);let t=je.E,a=t.jugadores[e]?.rol;if(a?Vc(n.x,n.z,n.r)&&Math.abs(n.x)<5e3&&Math.abs(n.z)<5e3&&xn.fijar("j:"+e,n.x,n.z,n.r,hp(a),Vc(n.y)?Math.max(-80,Math.min(300,n.y)):void 0,n.o):xn.quitar("j:"+e),Array.isArray(n.c)&&e===t.pickup.chofer&&Vc(...n.c.slice(0,4))&&Math.abs(n.c[0])<5e3&&Math.abs(n.c[1])<5e3&&Ze.remoto(n.c[0],n.c[1],n.c[2],n.c[3]),Array.isArray(n.b)&&e===je.idAnfitrion())for(let i of n.b.slice(0,8))Array.isArray(i)&&Object.hasOwn(Rt,i[0])&&Vc(i[1],i[2],i[3],i[4])&&!ea(t,i[0])&&xn.fijar("b:"+i[0],i[1],i[2],i[4],hp(i[0]),Math.max(-80,Math.min(300,i[3])),i[5])}function P0(n,e){let t=je.E.jugadores[e],a=jt(je.E).frases[n];!t||!a||(Et.alerta(),ht.avisar(`\u{1F4FB} <b>${ot(t.rol?Rt[t.rol].corto:"Sin rol")}</b> (${ot(t.nombre)}): ${ot(a)}`,"radio"))}var Sn=qn.has("sinred")?null:Dm({sala:Ur,id:cn,alMensaje:(n,e)=>{n?.t==="p"?J_(n,e):n?.t==="radio"?P0(n.i,e):je.recibir(n,e)},alPar:(n,e)=>{e?je.pedir():(xn.quitar("j:"+n),je.anfitrion()&&je.proponer({t:"sale",id:n}))}}),je=t0({id:cn,red:Sn,alEvento:Z_}),Br=r0({sesion:je,obra:Ut,resolver:up,altura:Pa});function g0(){let n=Ra();if(!n)return;let e=Ut.puesto(n,je.E.hechos.llegada?"poste":"pickup");se.x=e.x,se.z=e.z,se.vx=se.vz=0}function Sp(){let n=je.E;dp||(n.fase!=="fin"&&ht.abierto==="fin"&&ht.cerrar(),n.fase==="sala"||n.fase==="trabajo"&&!Ra()?(!ht.abierto||ht.abierto==="sala")&&ht.sala(n,cn,{codigo:Ur,enlace:Y_,conectado:mp,pares:Sn?.estado.pares.size??0}):ht.abierto==="sala"&&ht.cerrar())}function Z_(n,e){if(n)if(n.t==="rol")n.id===cn?(fp(n.rol),n.rol&&e.fase==="trabajo"&&g0()):xn.quitar("j:"+n.id),n.rol&&xn.quitar("b:"+n.rol);else if(n.t==="sale")xn.quitar("j:"+n.id);else if(n.t==="empezar")ht.cerrar(),g0();else if(n.t==="baja"&&n.id===cn||n.t==="aparca"&&Xc>=0){let[t,,a]=Qc[Xc]??Qc[0];Ze.local(Math.sign(t)*1.8,0,a,Xt),se.x=Xt.x,se.z=Xt.z,Xc=-1}else if(n.t==="hecho"){if(ht.avisar(`\u2713 <b>${ot(Rt[n.rol]?.corto)}</b>: ${ot(jn[n.paso]?.nombre)}`),(K_[n.paso]??Et.ok)(),n.paso===jt(e).viaje&&Ra()&&e.pickup.chofer!==cn&&!e.pickup.pasajeros.includes(cn)&&is("camion")>150){let t=Ut.puesto(Ra(),"camion");se.x=t.x,se.z=t.z,se.y=Pa(se.x,se.z),se.vx=se.vz=0}jn[n.paso]?.dicta&&ht.avisar(`\u{1F4FB} <b>${ot(Rt[n.rol]?.corto)}</b>: ${ot(jn[n.paso].dicta)}`,"radio",12),e.fase==="fin"&&setTimeout(Et.logro,600),(e.fase==="fin"||Km(e,n.paso))&&Ra()==="liniero"&&(se.x=Ut.zonas.poste.x,se.z=Ut.zonas.poste.z,se.y=Pa(se.x,se.z)),ht.paso?.id===n.paso&&ht.cerrar()}else n.t==="falta"&&(Et.error(),ht.avisar(`\u26A0 <b>${ot(Rt[n.rol]?.corto)}</b>: ${ot(n.texto)}<small>${ot(n.ref)}</small>`,"falta",9),ht.fallo(n,e));else{for(let t of[...xn.mapa.keys()])/^[jb]:/.test(t)&&xn.quitar(t);rs&&e.jugadores[cn]?.rol!==rs&&(e.jugadores[cn]||je.proponer({t:"entra",nombre:ht.nombre}),je.proponer({t:"rol",rol:rs})),fp(Ra())}Sp()}var x0=new yo,ts=new B(1e9,0,0),Lr=[],ns=new Proxy({},{get:(n,e)=>es[e]?.accion??"E"}),b0={mesa:"la mesa de empalme",bobina:"la bobina, junto a P04,",calle:"el cruce de la calle",pickup:"el pick-up",poste:"el poste",camion:"el pick-up en Esparza",carrete:"la bobina, antes de P1,",poste1:"P1",poste2:"P2",poste3:"P3",poste4:"P4"},K_={e_senal:Et.cono,e_bajar:Et.cuerda,e_fusion:Et.clip,e_refusion:Et.clip,e_cierre:Et.metal,e_fijar:Et.clip,t_conos:Et.cono,t_guia:Et.cuerda,t_cruzar:Et.cuerda,t_polea:Et.metal,t_tension:Et.cuerda,t_preformado:Et.clip,t_subir:Et.clip,perimetro:Et.cono,cuerda_extension:Et.cuerda,tensar:Et.cuerda,amarre_medio:Et.cuerda,colocar:Et.metal,tomar:Et.metal,carrito:Et.clip,faja:Et.clip,linea_vida:Et.clip,llegada:Et.metal},Ep=[["pickup","El pick-up"],["poste","El poste de trabajo"],...["cartago","limon","liberia","fortuna","puntarenas","sanisidro","penasblancas","canoas"].map(n=>[n,Go[n].n.split(" \xB7 ")[0]])],v0=0,Xc=-1,Qc=[[-.45,0,1.75],[.45,0,1.05],[-.45,0,1.05]],y0=[.45,0,1.75],Wc=0,sp=0,lp=0,_0=0,gp=0,I0=0,pi="",S0="",Dr=-1,Yc="",cp=(n,e)=>Math.atan2(Math.sin(e-n),Math.cos(e-n)),Q_=n=>{let e=ea(je.E,n);return xn.mapa.get(e?"j:"+e:"b:"+n)},Fr=n=>n===Ra()?se:je.anfitrion()&&Br.B.get(n)||Q_(n),D0=(n,e)=>Math.hypot(n.x-Ut.zonas[e].x,n.z-Ut.zonas[e].z),is=n=>D0(se,n);function eS(){let n=Li[0],e=1/0;for(let a of Li){let i=Math.hypot(se.x-a.x,se.z-a.z);i<e&&(e=i,n=a)}return(na.cerca(se.x,se.z,pp).dist<9?na.rutas[pp.ruta].n+" \xB7 ":"")+(e<Math.max(90,n.r+40)?n.n:`${n.n} a ${e<1e3?Math.round(e/10)*10+" m":(e/1e3).toFixed(1).replace(".",",")+" km"}`)}function tS(n){let e=[{x:se.x,z:se.z,color:"#FFD627",rumbo:se.rumbo},{x:Ze.st.x,z:Ze.st.z,color:"#fff"}];for(let t in Rt){let a=t!==Ra()&&Fr(t);a&&e.push({x:a.x,z:a.z,color:"#"+Rt[t].camisa.toString(16).padStart(6,"0")})}return jt(n).sitio&&n.fase==="trabajo"&&e.push({x:Ut.zonas.poste1.x,z:Ut.zonas.poste1.z,color:"#FF5A1F"}),e}Dn.cada(se.x,se.z,!0);document.getElementById("cargando")?.remove();function L0(){requestAnimationFrame(L0);let n=Math.min(.05,x0.getDelta())*Tt.tiempo,e=x0.elapsedTime,t=performance.now(),a=Zc.leer(n);pi=a.origen,je.cada();let i=je.E,r=Ra(),o=!!ht.abierto,s=i.pickup,c=s.chofer===cn,l=s.pasajeros.indexOf(cn),d=c||l>=0;if(ht.navegar(a),o?((a.mapa&&ht.abierto==="mapa"||a.pausa&&ht.abierto==="pausa")&&ht.cerrar(),a.mx=a.mz=a.gx=a.gy=0,a.accion=a.vista=!1,i.fase==="sala"&&(se.guinada+=n*.05)):a.pausa?ht.pausa(Tt,Ep,je.E):a.radio&&i.fase==="trabajo"&&r?ht.radio(i):a.mapa&&i.fase!=="sala"&&ht.mapa(C=>q_.dibujar(C,tS(i))),c){let C=bp(Ze.st.x,Ze.st.z)||na.cerca(Ze.st.x,Ze.st.z,pp).dist<5;Ze.conducir(n,a,C,Dn.limites),up(Ze.st,1.3),os.empujar(Ze.st,1.4)}else s.chofer?Ze.seguir(n):s.x===null&&Ut.parqueo&&i.fase==="trabajo"&&i.hechos[jt(i).viaje]?Ze.fijar(Ut.parqueo.x,Ut.parqueo.z,Ut.parqueo.r):s.x===null?Ze.fijar($t.estacionado.x,$t.estacionado.z,$t.estacionado.rumbo):Ze.fijar(s.x,s.z,s.r);Ze.asentar(),a.vista&&(se.primera=!se.primera),se.guinada-=a.gx,se.cabeceo=Math.max(se.primera?-1.3:-1.05,Math.min(se.primera?1.3:.55,se.cabeceo+a.gy)),c&&!a.gx&&Math.abs(Ze.st.v)>.5&&(se.guinada+=cp(se.guinada,Ze.st.rumbo+Math.PI)*Math.min(1,n*2.5));let p=Math.sin(se.guinada),u=Math.cos(se.guinada),f=a.correr?3.9:1.7,x=1-Math.exp(-n*10),y=Ut.cargando(i)&&/^auxiliar/.test(r??""),m=y?"c":"i",h=0;if(d)Ze.local(...c?y0:Qc[l],Xt),se.x=Xt.x,se.z=Xt.z,se.y=Ze.st.y,se.vx=se.vz=0,se.rumbo=Ze.st.rumbo,m="o",!c&&Math.abs(Ze.st.v)>.5&&!a.gx&&(se.guinada+=cp(se.guinada,Ze.st.rumbo+Math.PI)*Math.min(1,n*2.5)),Xc=c?-1:l;else if(r==="liniero"&&ui(i)&&i.fase==="trabajo"){let C=Ut.puestoLiniero();se.x=C.x,se.z=C.z,se.y=C.y,se.vx=se.vz=0,se.rumbo=Ut.rumbo,se.fase=C.fase,m=C.pose}else{let C=y?Math.min(f,1.7):Tt.volar?f*6:f,F=Dn.limites;se.vx+=((u*a.mx-p*a.mz)*C-se.vx)*x,se.vz+=((-p*a.mx-u*a.mz)*C-se.vz)*x,se.x=Math.max(F.x0,Math.min(F.x1,se.x+se.vx*n)),se.z=Math.max(F.z0,Math.min(F.z1,se.z+se.vz*n)),Tt.volar||(up(se,.32),Ze.empujar(se,.32),os.empujar(se,.32)),Ut.restringir(i,r,se,Fr),se.y+=(Pa(se.x,se.z)-se.y)*Math.min(1,n*14),h=Math.hypot(se.vx,se.vz),se.primera?se.rumbo=Math.atan2(-p,-u):h>.3&&(se.rumbo+=cp(se.rumbo,Math.atan2(se.vx,se.vz))*Math.min(1,n*12)),se.fase+=h*n*(a.correr?3.1:4.19),Math.floor(se.fase/Math.PI)!==v0&&(v0=Math.floor(se.fase/Math.PI),h>.4&&Et.paso())}bn.aVia(se.x,se.z,se),Ca.raiz.position.set(se.x,se.y,se.z),Ca.raiz.rotation.y=se.rumbo,Ca.pose({tipo:Du[m]??(h>.25?"caminar":"idle"),fase:se.fase,t:e,dt:n}),se.dist+=((se.primera?0:d?8.5:4.2)-se.dist)*Math.min(1,n*9);let b=Math.cos(se.cabeceo),E=(d?0:.45)*Math.min(1,se.dist);if(d){let[C,,F]=c?y0:Qc[l];Ze.local(se.primera?C:0,se.primera?2:2.7,se.primera?F:0,Xt)}else Xt.set(se.x,se.y+1.62,se.z);_n.rotation.set(se.cabeceo,se.guinada,0,"YXZ"),_n.position.set(Xt.x+p*b*se.dist+u*E,Xt.y-Math.sin(se.cabeceo)*se.dist,Xt.z+u*b*se.dist-p*E),_n.position.y=Math.max(_n.position.y,Pa(_n.position.x,_n.position.z)+.4),_n.updateMatrixWorld(),Ca.raiz.visible=se.dist>.7&&!d,Dn.cada(se.x,se.z);for(let C of X_)C.d+=C.s*C.v*n,C.d>bn.largo-8?C.s=-1:C.d<8&&(C.s=1),bn.en(C.d,C.a,op),xn.fijar(C.id,op.x,op.z,void 0,C.op);Br.cada(n,i,Fr);for(let C of Br.B.values())if(je.anfitrion())xn.fijar("b:"+C.rol,C.x,C.z,C.rumbo,hp(C.rol),C.y,C.pose);else{let F=xn.mapa.get("b:"+C.rol);F&&(C.x=F.x,C.z=F.z,C.y=F.y,C.rumbo=F.rumbo)}xn.cada(n,e,_n),Lr.length=0,Lr.push(se);for(let C of xn.mapa.values())bn.aVia(C.x,C.z,C),Lr.push(C);Jc.cada(n,Lr);let v=Nr.cada(n,_n,se.x,se.z,[se,Ze.st],Tt.lluvia==="auto"?null:Tt.lluvia==="s\xED"?1:0);yp.actualizar();let M=Math.max(v.lluvia*.8,v.niebla);dn.fog.far=4200-3700*M,dn.fog.near=220-180*M,dn.background.copy($_).lerp(p0,M),dn.fog.color.copy(W_).lerp(p0,M),ta.intensity=2.7-1.6*v.lluvia,je.anfitrion()&&Ut.cargando(i)&&Ut.llego(Fr)&&je.proponer({t:"auto",paso:"llegada"});let A=i.fase==="trabajo"&&Gc(i)?.id===jt(i).viaje?jt(i).viaje:null;A&&je.anfitrion()&&(D0(Ze.st,"poste1")<25||!Object.values(i.jugadores).some(C=>C.rol))&&je.proponer({t:"auto",paso:A}),Ut.cada(n,e,i,Fr,Ze);let w="",g=null,_=!1,T=null;if(l>=0)w=`De pasajero \xB7 ${Math.round(Math.abs(Ze.st.v)*3.6)} km/h`,g=Math.abs(Ze.st.v)<2?`${ns[pi]} \xB7 Bajar del pick-up`:null,a.accion&&g&&je.proponer({t:"baja"});else if(c)w=`Al volante \xB7 ${Math.round(Math.abs(Ze.st.v)*3.6)} km/h`,g=Math.abs(Ze.st.v)<2?`${ns[pi]??"E"} \xB7 Bajar del pick-up`:null,a.accion&&g&&(je.proponer({t:"aparca",x:+Ze.st.x.toFixed(2),z:+Ze.st.z.toFixed(2),r:+Ze.st.rumbo.toFixed(3)}),Ze.local(1.8,0,1.75,Xt),se.x=Xt.x,se.z=Xt.z);else if(i.fase==="trabajo"&&r){let C=j=>j.lugar==="arriba"?r==="liniero"&&Ut.subida>=1:is(j.lugar)<4.2,F=Pr(i,r),V=F.find(j=>!j.bloqueo),O=F.find(j=>!j.bloqueo&&C(j.paso))??F.find(j=>C(j.paso));if(A)w=`Maneja el pick-up con la cuadrilla hasta ${b0.poste1} en Esparza \xB7 ${Math.round(is("poste1"))} m (M: mapa)`,T="poste1";else if(y)w=`Lleva la escalera al poste con tu compa\xF1ero \xB7 ${Math.round(is("poste"))} m`,T="poste";else if(V){let j=C(V.paso)||V.paso.lugar==="arriba";w=`Tu tarea: ${V.paso.nombre}${j?"":` \xB7 ${b0[V.paso.lugar]} est\xE1 a ${Math.round(is(V.paso.lugar))} m`}`,T=j?null:V.paso.lugar}else{let j=Gc(i);w=j?`Espera: ${Rt[j.rol].corto} \u2192 ${j.nombre}`:"Trabajo terminado"}O&&!o&&(O.bloqueo&&i.modo==="aprendiz"?(g=`\u{1F512} Antes: ${O.bloqueo.nombre} (${Rt[O.bloqueo.rol].corto})`,_=!0):g=`${ns[pi]??"E"} \xB7 ${O.paso.accion}`,a.accion&&(_?ht.avisar(`\u{1F512} Primero: <b>${ot(O.bloqueo.nombre)}</b> (${ot(Rt[O.bloqueo.rol].corto)})`,"",3):O.paso.opciones&&!O.bloqueo?ht.decision(O.paso,i):je.proponer({t:"intento",paso:O.paso.id})))}else i.fase==="trabajo"?w="Observando: los compa\xF1eros autom\xE1ticos hacen el trabajo":i.fase==="fin"&&(w="Trabajo terminado");!d&&!g&&!o&&r&&s.chofer&&s.pasajeros.length<3&&Math.hypot(se.x-Ze.st.x,se.z-Ze.st.z)<3.6&&Math.abs(Ze.st.v)<2&&(g=`${ns[pi]} \xB7 Subir al pick-up`,a.accion&&je.proponer({t:"sube"})),!d&&!g&&!o&&r&&Ku(i)&&!s.chofer&&!(r==="liniero"&&ui(i)&&i.fase==="trabajo")&&!y&&Math.hypot(se.x-Ze.st.x,se.z-Ze.st.z)<3.6&&(g=`${ns[pi]??"E"} \xB7 Manejar el pick-up`,a.accion&&je.proponer({t:"conduce"})),Ut.marcar(T);let D=`${i.n}|${w}|${g}|${r}|${Yc}`;i.fase==="sala"?ht.ocultarTablero():D!==S0&&(S0=D,ht.tablero(i,r,w,g,_,Yc)),i.fase==="fin"?(Dr<0&&(Dr=e),Dr!==null&&e-Dr>3.5&&!ht.abierto&&!dp&&(ht.fin(i),Dr=null)):Dr=-1;let N=[];if(i.fase!=="sala")for(let C in Rt){if(C===r)continue;let F=Fr(C);if(!F)continue;Xt.set(F.x,(F.y??.15)+2.02,F.z);let V=Xt.distanceTo(_n.position);Xt.project(_n);let O=ea(i,C);N.push({visible:!o&&Xt.z<1&&V<45&&Math.abs(Xt.x)<1.05&&!(O&&O===s.chofer),x:(Xt.x+1)/2*innerWidth,y:(1-Xt.y)/2*innerHeight,texto:`${Rt[C].icono} ${Rt[C].corto}${O?" \xB7 "+i.jugadores[O].nombre:""}`})}ht.etiquetas(N),Kc.cada(c||s.chofer?Ze.st.v:null),C0.hidden=Kc.activo,c&&a.bocina&&Et.bocina();let k=0;if(!In)for(let C of Lr)(C!==se||!d)&&as.fijar(k++,C.x,Pa(C.x,C.z),C.z,.62);if(!In)for(let C of Jc.todos)as.fijar(k++,C.x,0,C.z,2.3,4.9,C.rumbo);if(In||as.fijar(k++,Ze.st.x,Ze.st.y,Ze.st.z,2.6,6.4,Ze.st.rumbo),as.listo(k),Math.hypot(se.x-ts.x,se.z-ts.z)>(In?5:14)&&(ts.set(se.x,se.y,se.z),ta.target.position.copy(ts),ta.position.copy(ts).addScaledVector(j_,120),ta.target.updateMatrixWorld(),En.shadowMap.needsUpdate=!0),Sn&&e-_0>.1){_0=e;let C={t:"p",x:+se.x.toFixed(2),z:+se.z.toFixed(2),y:+se.y.toFixed(2),r:+se.rumbo.toFixed(2),o:m};c&&(C.c=[+Ze.st.x.toFixed(2),+Ze.st.z.toFixed(2),+Ze.st.rumbo.toFixed(3),+Ze.st.v.toFixed(1)]),je.anfitrion()&&(C.n=i.n,C.h=je.huella,Br.B.size&&(C.b=[...Br.B.values()].map(F=>[F.rol,+F.x.toFixed(2),+F.z.toFixed(2),+F.y.toFixed(2),+F.rumbo.toFixed(2),F.pose]))),(r||je.anfitrion())&&Sn.enviar(C)}if(En.render(dn,_n),sp+=performance.now()-t,Wc++,e-lp>=1){gp=Wc/(e-lp),I0=sp/Wc,Wc=0,sp=0,lp=e,gp<27&&ka>hi.minPixelRatio&&(ka=Math.max(hi.minPixelRatio,ka-.15),En.setPixelRatio(ka)),Yc=eS(),w0.escribir(Mp().texto),Sn&&!Sn.estado.presencia&&e>6&&je.jugarSolo();let C=!Sn||Sn.estado.presencia||e>6,F=Sn?.estado.pares.size??0;(C!==mp||F!==m0)&&(mp=C,m0=F,Sp()),dp&&i.fase==="sala"&&je.anfitrion()&&(qn.has("trabajo")&&je.proponer({t:"trabajo",trabajo:qn.get("trabajo")}),je.proponer({t:"empezar",demo:!0}))}}function Mp(){let n=En.info.render,e=Sn?[...Sn.estado.pares.values()]:[],t=e.filter(r=>r.directo),a=je.E,i={fps:Math.round(gp),ms:+I0.toFixed(1),llamadas:n.calls,triangulos:n.triangles,pixeles:+ka.toFixed(2),entrada:pi,vista:se.primera?"1.\xAA persona":"3.\xAA persona",x:se.x,z:se.z,y:se.y,d:se.d,a:se.a,donde:Yc,red:Sn?.estado.ws??"apagada",rtt:Sn?.estado.rtt,pares:e.length,directos:t.length,personas:Lr.length,autos:Jc.todos.length,fase:a.fase,rol:Ra(),hechos:Object.keys(a.hechos).length,trabajo:a.trabajo,pasos:di(a).length,seguridad:Ir(a),faltas:a.eventos.filter(r=>r.tipo==="falta").length,anfitrion:je.anfitrion(),panel:ht.abierto,clima:`${Nr.clima.region}${Nr.clima.lluvia>.1?", lloviendo":""}${Nr.clima.niebla>.2?", neblina":""}`,autosRuta:Nr.autos.filter(r=>r.vivo).length,chofer:a.pickup.chofer===cn,pasajero:a.pickup.pasajeros.includes(cn),velocidad:Ze.st.v};return i.texto=["Cuadrilla Segura \xB7 Mundo",`${i.fps} cuadros/s \xB7 ${i.ms} ms por cuadro (CPU)`,`${i.llamadas} llamadas de dibujo \xB7 ${Math.round(i.triangulos/1e3)} mil tri\xE1ngulos`,`resoluci\xF3n \xD7${i.pixeles} \xB7 sombra ${hi.sombra} \xB7 ${hi.movil?hi.bajo?"tel\xE9fono modesto":"tel\xE9fono":"escritorio"}`,`${i.personas} personas \xB7 ${i.autos} autos \xB7 ${i.vista} \xB7 ${i.entrada}`,`red: ${i.red}${i.rtt!=null?` \xB7 ida y vuelta ${Math.round(i.rtt)} ms`:""}${i.anfitrion?" \xB7 anfitri\xF3n":""}`,`otros jugadores: ${i.pares}${i.pares?` (${i.directos} con enlace directo${t[0]?.rtt!=null?`, ${Math.round(t[0].rtt)} ms`:""})`:""}`,`trabajo: ${i.fase} \xB7 ${i.hechos}/${i.pasos} pasos \xB7 seguridad ${i.seguridad}`,`clima: ${i.clima} \xB7 ${i.autosRuta} veh\xEDculos en las rutas`,`\u{1F4CD} ${i.donde} \xB7 ${Math.round(i.x)}, ${Math.round(i.z)} \xB7 altura ${i.y.toFixed(1)} m`].join(`
`),i}var F0=(()=>{let n=[],e={},t=(r,o)=>(bn.en(r,o,e),[e.x,.3,e.z]);for(let r of $t.cajas){let o=[t(r.d0,r.a0),t(r.d1,r.a0),t(r.d1,r.a1),t(r.d0,r.a1)];for(let s=0;s<4;s++)n.push(...o[s],...o[(s+1)%4])}for(let r of $t.circulos)for(let o=0;o<8;o++){let s=o*Math.PI/4,c=s+Math.PI/4;n.push(r.x+Math.cos(s)*r.r,.3,r.z+Math.sin(s)*r.r,r.x+Math.cos(c)*r.r,.3,r.z+Math.sin(c)*r.r)}let a=new ft;a.setAttribute("position",new tt(n,3));let i=new Bn(a,new wn({color:16723285,depthTest:!1}));return i.renderOrder=9,i.visible=!1,dn.add(i),i})();R0();document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&!ht.abierto&&je.E.fase!=="sala"&&ht.pausa(Tt,Ep,je.E)});globalThis.__mundo={vida:Nr,J:se,info:Mp,ajustes:Tt,sonido:Kc,colisiones:F0,pueblos:os,rotulos:T0,pendientes:Pr,ordenOpciones:Hc,red:Sn,avatares:xn,entrada:Zc,via:bn,barrio:$t,trafico:Jc,obra:Ut,bots:Br,ui:ht,terreno:Dn,carreteras:na,pickup:Ze,lugar:Fi,altura:Pa,camara:_n,CARRIL:Ec,get sesion(){return je},get E(){return je.E}};Sp();L0();
