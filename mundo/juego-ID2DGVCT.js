var xh=0,Kc=1,bh=2;var Jr=1,vh=2,Vi=3,ka=0,an=1,Pn=2,aa=0,ji=1,Qc=2,ed=3,td=4,_h=5;var si=100,yh=101,Sh=102,Mh=103,Eh=104,Ah=200,Th=201,wh=202,Ch=203,nd=204,ad=205,Rh=206,Ph=207,Ih=208,Dh=209,Lh=210,Nh=211,Fh=212,Uh=213,Oh=214,to=0,no=1,ao=2,Di=3,io=4,ro=5,so=6,oo=7,id=0,Bh=1,zh=2,kn=0,rd=1,sd=2,od=3,Zr=4,ld=5,cd=6,dd=7;var ud=300,Va=301,oi=302,Vo=303,jo=304,Kr=306,Li=1e3,Jn=1001,lo=1002,Vt=1003,Gh=1004;var Qr=1005;var $t=1006,$o=1007;var ja=1008;var un=1009,hd=1010,pd=1011,$i=1012,qo=1013,Vn=1014,In=1015,jn=1016,Wo=1017,Xo=1018,qi=1020,fd=35902,md=35899,gd=1021,xd=1022,Dn=1023,Zn=1026,$a=1027,Yo=1028,Jo=1029,qa=1030,Zo=1031;var Ko=1033,es=33776,ts=33777,ns=33778,as=33779,Qo=35840,el=35841,tl=35842,nl=35843,al=36196,il=37492,rl=37496,sl=37488,ol=37489,is=37490,ll=37491,cl=37808,dl=37809,ul=37810,hl=37811,pl=37812,fl=37813,ml=37814,gl=37815,xl=37816,bl=37817,vl=37818,_l=37819,yl=37820,Sl=37821,Ml=36492,El=36494,Al=36495,Tl=36283,wl=36284,rs=36285,Cl=36286;var Er=2300,co=2301,Qs=2302,$c=2303,qc=2400,Wc=2401,Xc=2402;var Hh=3200;var Rl=0,kh=1,Sa="",kt="srgb",Ar="srgb-linear",Tr="linear",bt="srgb";var eo=7680;var Vh=519,jh=512,$h=513,qh=514,Pl=515,Wh=516,Xh=517,Il=518,Yh=519,Jh=35044;var bd="300 es",Hn=2e3,Ni=2001;function bm(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function vm(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function wr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Zh(){let a=wr("canvas");return a.style.display="block",a}var Hu={},Fi=null;function vd(...a){let e="THREE."+a.shift();Fi?Fi("log",e,...a):console.log(e,...a)}function Kh(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Je(...a){a=Kh(a);let e="THREE."+a.shift();if(Fi)Fi("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function et(...a){a=Kh(a);let e="THREE."+a.shift();if(Fi)Fi("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ai(...a){let e=a.join(" ");e in Hu||(Hu[e]=!0,Je(...a))}function Qh(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ep={[to]:no,[ao]:so,[io]:oo,[Di]:ro,[no]:to,[so]:ao,[oo]:io,[ro]:Di},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bc=Math.PI/180,uo=180/Math.PI;function ss(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[a&255]+Xt[a>>8&255]+Xt[a>>16&255]+Xt[a>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function lt(a,e,t){return Math.max(e,Math.min(t,a))}function _m(a,e){return(a%e+e)%e}function vc(a,e,t){return(1-t)*a+t*e}function fr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var je=class a{static{a.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],d=n[i+2],p=n[i+3],h=r[s+0],f=r[s+1],x=r[s+2],_=r[s+3];if(p!==_||l!==h||c!==f||d!==x){let m=l*h+c*f+d*x+p*_;m<0&&(h=-h,f=-f,x=-x,_=-_,m=-m);let u=1-o;if(m<.9995){let b=Math.acos(m),S=Math.sin(b);u=Math.sin(u*b)/S,o=Math.sin(o*b)/S,l=l*u+h*o,c=c*u+f*o,d=d*u+x*o,p=p*u+_*o}else{l=l*u+h*o,c=c*u+f*o,d=d*u+x*o,p=p*u+_*o;let b=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=b,c*=b,d*=b,p*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,s){let o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],p=r[s],h=r[s+1],f=r[s+2],x=r[s+3];return e[t]=o*x+d*p+l*f-c*h,e[t+1]=l*x+d*h+c*p-o*f,e[t+2]=c*x+d*f+o*h-l*p,e[t+3]=d*x-o*p-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),p=o(r/2),h=l(n/2),f=l(i/2),x=l(r/2);switch(s){case"XYZ":this._x=h*d*p+c*f*x,this._y=c*f*p-h*d*x,this._z=c*d*x+h*f*p,this._w=c*d*p-h*f*x;break;case"YXZ":this._x=h*d*p+c*f*x,this._y=c*f*p-h*d*x,this._z=c*d*x-h*f*p,this._w=c*d*p+h*f*x;break;case"ZXY":this._x=h*d*p-c*f*x,this._y=c*f*p+h*d*x,this._z=c*d*x+h*f*p,this._w=c*d*p-h*f*x;break;case"ZYX":this._x=h*d*p-c*f*x,this._y=c*f*p+h*d*x,this._z=c*d*x-h*f*p,this._w=c*d*p+h*f*x;break;case"YZX":this._x=h*d*p+c*f*x,this._y=c*f*p+h*d*x,this._z=c*d*x-h*f*p,this._w=c*d*p-h*f*x;break;case"XZY":this._x=h*d*p-c*f*x,this._y=c*f*p-h*d*x,this._z=c*d*x+h*f*p,this._w=c*d*p+h*f*x;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],h=n+o+p;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+i*c-r*l,this._y=i*d+s*l+r*o-n*c,this._z=r*d+s*c+n*l-i*o,this._w=s*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class a{static{a.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*n),d=2*(o*t-r*i),p=2*(r*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-r*p,this.z=i+l*p+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new F,ku=new Qn,nt=class a{static{a.prototype.isMatrix3=!0}constructor(e,t,n,i,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c)}set(e,t,n,i,r,s,o,l,c){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],h=n[2],f=n[5],x=n[8],_=i[0],m=i[3],u=i[6],b=i[1],S=i[4],v=i[7],E=i[2],M=i[5],T=i[8];return r[0]=s*_+o*b+l*E,r[3]=s*m+o*S+l*M,r[6]=s*u+o*v+l*T,r[1]=c*_+d*b+p*E,r[4]=c*m+d*S+p*M,r[7]=c*u+d*v+p*T,r[2]=h*_+f*b+x*E,r[5]=h*m+f*S+x*M,r[8]=h*u+f*v+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*r*d+n*o*l+i*r*c-i*s*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,h=o*l-d*r,f=c*r-s*l,x=t*p+n*h+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=p*_,e[1]=(i*c-d*n)*_,e[2]=(o*n-i*s)*_,e[3]=h*_,e[4]=(d*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(e,t)),this}rotate(e){return ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-e)),this}translate(e,t){return ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yc=new nt,Vu=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ym(){let a={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===bt&&(i.r=xa(i.r),i.g=xa(i.g),i.b=xa(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===bt&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sa?Tr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Ar]:{primaries:e,whitePoint:n,transfer:Tr,toXYZ:Vu,fromXYZ:ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Vu,fromXYZ:ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),a}var dt=ym();function xa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ii(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var xi,ho=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xi===void 0&&(xi=wr("canvas")),xi.width=e.width,xi.height=e.height;let i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=xa(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xa(t[n]/255)*255):t[n]=xa(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sm=0,Ui=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Sc(i[s].image)):r.push(Sc(i[s]))}else r=Sc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Sc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ho.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var Mm=0,Mc=new F,nn=class a extends Kn{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=Jn,i=Jn,r=$t,s=ja,o=Dn,l=un,c=a.DEFAULT_ANISOTROPY,d=Sa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ss(),this.name="",this.source=new Ui(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ud;nn.DEFAULT_ANISOTROPY=1;var Rt=class a{static{a.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],f=l[5],x=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,E=(u+1)/2,M=(d+h)/4,T=(p+_)/4,g=(x+m)/4;return S>v&&S>E?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=M/n,r=T/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=M/i,r=g/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=g/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-x)*(m-x)+(p-_)*(p-_)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(p-_)/b,this.z=(h-d)/b,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},po=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new nn(i),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ui(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends po{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Cr=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fo=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var vt=class a{static{a.prototype.isMatrix4=!0}constructor(e,t,n,i,r,s,o,l,c,d,p,h,f,x,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c,d,p,h,f,x,_,m)}set(e,t,n,i,r,s,o,l,c,d,p,h,f,x,_,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=f,u[7]=x,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),s=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let h=s*d,f=s*p,x=o*d,_=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=f+x*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=x+f*c,t[10]=s*l}else if(e.order==="YXZ"){let h=l*d,f=l*p,x=c*d,_=c*p;t[0]=h+_*o,t[4]=x*o-f,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=f*o-x,t[6]=_+h*o,t[10]=s*l}else if(e.order==="ZXY"){let h=l*d,f=l*p,x=c*d,_=c*p;t[0]=h-_*o,t[4]=-s*p,t[8]=x+f*o,t[1]=f+x*o,t[5]=s*d,t[9]=_-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let h=s*d,f=s*p,x=o*d,_=o*p;t[0]=l*d,t[4]=x*c-f,t[8]=h*c+_,t[1]=l*p,t[5]=_*c+h,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let h=s*l,f=s*c,x=o*l,_=o*c;t[0]=l*d,t[4]=_-h*p,t[8]=x*p+f,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*p+x,t[10]=h-_*p}else if(e.order==="XZY"){let h=s*l,f=s*c,x=o*l,_=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=h*p+_,t[5]=s*d,t[9]=f*p-x,t[2]=x*p-f,t[6]=o*d,t[10]=_*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Am)}lookAt(e,t,n){let i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ia.crossVectors(n,mn),Ia.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ia.crossVectors(n,mn)),Ia.normalize(),Is.crossVectors(mn,Ia),i[0]=Ia.x,i[4]=Is.x,i[8]=mn.x,i[1]=Ia.y,i[5]=Is.y,i[9]=mn.y,i[2]=Ia.z,i[6]=Is.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],h=n[9],f=n[13],x=n[2],_=n[6],m=n[10],u=n[14],b=n[3],S=n[7],v=n[11],E=n[15],M=i[0],T=i[4],g=i[8],A=i[12],C=i[1],R=i[5],I=i[9],U=i[13],L=i[2],B=i[6],Z=i[10],Q=i[14],q=i[3],J=i[7],j=i[11],se=i[15];return r[0]=s*M+o*C+l*L+c*q,r[4]=s*T+o*R+l*B+c*J,r[8]=s*g+o*I+l*Z+c*j,r[12]=s*A+o*U+l*Q+c*se,r[1]=d*M+p*C+h*L+f*q,r[5]=d*T+p*R+h*B+f*J,r[9]=d*g+p*I+h*Z+f*j,r[13]=d*A+p*U+h*Q+f*se,r[2]=x*M+_*C+m*L+u*q,r[6]=x*T+_*R+m*B+u*J,r[10]=x*g+_*I+m*Z+u*j,r[14]=x*A+_*U+m*Q+u*se,r[3]=b*M+S*C+v*L+E*q,r[7]=b*T+S*R+v*B+E*J,r[11]=b*g+S*I+v*Z+E*j,r[15]=b*A+S*U+v*Q+E*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],f=e[14],x=e[3],_=e[7],m=e[11],u=e[15],b=l*f-c*h,S=o*f-c*p,v=o*h-l*p,E=s*f-c*d,M=s*h-l*d,T=s*p-o*d;return t*(_*b-m*S+u*v)-n*(x*b-m*E+u*M)+i*(x*S-_*E+u*T)-r*(x*v-_*M+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-n*(r*d-o*l)+i*(r*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],f=e[11],x=e[12],_=e[13],m=e[14],u=e[15],b=t*o-n*s,S=t*l-i*s,v=t*c-r*s,E=n*l-i*o,M=n*c-r*o,T=i*c-r*l,g=d*_-p*x,A=d*m-h*x,C=d*u-f*x,R=p*m-h*_,I=p*u-f*_,U=h*u-f*m,L=b*U-S*I+v*R+E*C-M*A+T*g;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return e[0]=(o*U-l*I+c*R)*B,e[1]=(i*I-n*U-r*R)*B,e[2]=(_*T-m*M+u*E)*B,e[3]=(h*M-p*T-f*E)*B,e[4]=(l*C-s*U-c*A)*B,e[5]=(t*U-i*C+r*A)*B,e[6]=(m*v-x*T-u*S)*B,e[7]=(d*T-h*v+f*S)*B,e[8]=(s*I-o*C+c*g)*B,e[9]=(n*C-t*I-r*g)*B,e[10]=(x*M-_*v+u*b)*B,e[11]=(p*v-d*M-f*b)*B,e[12]=(o*A-s*R-l*g)*B,e[13]=(t*R-n*A+i*g)*B,e[14]=(_*S-x*E-m*b)*B,e[15]=(d*E-p*S+h*b)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*s,0,c*l-i*o,d*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,p=o+o,h=r*c,f=r*d,x=r*p,_=s*d,m=s*p,u=o*p,b=l*c,S=l*d,v=l*p,E=n.x,M=n.y,T=n.z;return i[0]=(1-(_+u))*E,i[1]=(f+v)*E,i[2]=(x-S)*E,i[3]=0,i[4]=(f-v)*M,i[5]=(1-(h+u))*M,i[6]=(m+b)*M,i[7]=0,i[8]=(x+S)*T,i[9]=(m-b)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=bi.set(i[0],i[1],i[2]).length(),o=bi.set(i[4],i[5],i[6]).length(),l=bi.set(i[8],i[9],i[10]).length();r<0&&(s=-s),On.copy(this);let c=1/s,d=1/o,p=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=d,On.elements[5]*=d,On.elements[6]*=d,On.elements[8]*=p,On.elements[9]*=p,On.elements[10]*=p,t.setFromRotationMatrix(On),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,s,o=Hn,l=!1){let c=this.elements,d=2*r/(t-e),p=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),x,_;if(l)x=r/(s-r),_=s*r/(s-r);else if(o===Hn)x=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===Ni)x=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=Hn,l=!1){let c=this.elements,d=2/(t-e),p=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i),x,_;if(l)x=1/(s-r),_=s/(s-r);else if(o===Hn)x=-2/(s-r),_=-(s+r)/(s-r);else if(o===Ni)x=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bi=new F,On=new vt,Em=new F(0,0,0),Am=new F(1,1,1),Ia=new F,Is=new F,mn=new F,$u=new vt,qu=new Qn,ba=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],d=i[9],p=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ba.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tm=0,Wu=new F,vi=new Qn,ha=new vt,Ds=new F,mr=new F,wm=new F,Cm=new Qn,Xu=new F(1,0,0),Yu=new F(0,1,0),Ju=new F(0,0,1),Zu={type:"added"},Rm={type:"removed"},_i={type:"childadded",child:null},Ec={type:"childremoved",child:null},_t=class a extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new F,t=new ba,n=new Qn,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new nt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(mr,Ds,this.up):ha.lookAt(Ds,mr,this.up),this.quaternion.setFromRotationMatrix(ha),i&&(ha.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(ha),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zu),_i.child=e,this.dispatchEvent(_i),_i.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zu),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),h=s(e.skeletons),f=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=i,n;function s(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new F(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ut=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pm={type:"move"},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&h>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Ac(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=_m(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Ac(s,r,e+1/3),this.g=Ac(s,r,e),this.b=Ac(s,r,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return dt.workingToColorSpace(Yt.copy(this),e),Math.round(lt(Yt.r*255,0,255))*65536+Math.round(lt(Yt.g*255,0,255))*256+Math.round(lt(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,i=Yt.g,r=Yt.b,s=Math.max(n,i,r),o=Math.min(n,i,r),l,c,d=(o+s)/2;if(o===s)l=0,c=0;else{let p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){dt.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,i=Yt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+t,Da.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Da),e.getHSL(Ls);let n=vc(Da.h,Ls.h,t),i=vc(Da.s,Ls.s,t),r=vc(Da.l,Ls.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new We;We.NAMES=tp;var Pr=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ir=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new F,pa=new F,Tc=new F,fa=new F,yi=new F,Si=new F,Ku=new F,wc=new F,Cc=new F,Rc=new F,Pc=new Rt,Ic=new Rt,Dc=new Rt,Ua=class a{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bn.subVectors(e,t),i.cross(Bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Bn.subVectors(i,t),pa.subVectors(n,t),Tc.subVectors(e,t);let s=Bn.dot(Bn),o=Bn.dot(pa),l=Bn.dot(Tc),c=pa.dot(pa),d=pa.dot(Tc),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,f=(c*l-o*d)*h,x=(s*d-o*l)*h;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,fa)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fa.x),l.addScaledVector(s,fa.y),l.addScaledVector(o,fa.z),l)}static getInterpolatedAttribute(e,t,n,i,r,s){return Pc.setScalar(0),Ic.setScalar(0),Dc.setScalar(0),Pc.fromBufferAttribute(e,t),Ic.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Pc,r.x),s.addScaledVector(Ic,r.y),s.addScaledVector(Dc,r.z),s}static isFrontFacing(e,t,n,i){return Bn.subVectors(n,t),pa.subVectors(e,t),Bn.cross(pa).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Bn.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,s,o;yi.subVectors(i,n),Si.subVectors(r,n),wc.subVectors(e,n);let l=yi.dot(wc),c=Si.dot(wc);if(l<=0&&c<=0)return t.copy(n);Cc.subVectors(e,i);let d=yi.dot(Cc),p=Si.dot(Cc);if(d>=0&&p<=d)return t.copy(i);let h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(yi,s);Rc.subVectors(e,r);let f=yi.dot(Rc),x=Si.dot(Rc);if(x>=0&&f<=x)return t.copy(r);let _=f*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Si,o);let m=d*x-f*p;if(m<=0&&p-d>=0&&f-x>=0)return Ku.subVectors(r,i),o=(p-d)/(p-d+(f-x)),t.copy(i).addScaledVector(Ku,o);let u=1/(m+_+h);return s=_*u,o=h*u,t.copy(n).addScaledVector(yi,s).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ea=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,zn):zn.fromBufferAttribute(r,s),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Fs.subVectors(this.max,gr),Mi.subVectors(e.a,gr),Ei.subVectors(e.b,gr),Ai.subVectors(e.c,gr),La.subVectors(Ei,Mi),Na.subVectors(Ai,Ei),Qa.subVectors(Mi,Ai);let t=[0,-La.z,La.y,0,-Na.z,Na.y,0,-Qa.z,Qa.y,La.z,0,-La.x,Na.z,0,-Na.x,Qa.z,0,-Qa.x,-La.y,La.x,0,-Na.y,Na.x,0,-Qa.y,Qa.x,0];return!Lc(t,Mi,Ei,Ai,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,Mi,Ei,Ai,Fs))?!1:(Us.crossVectors(La,Na),t=[Us.x,Us.y,Us.z],Lc(t,Mi,Ei,Ai,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ma=[new F,new F,new F,new F,new F,new F,new F,new F],zn=new F,Ns=new ea,Mi=new F,Ei=new F,Ai=new F,La=new F,Na=new F,Qa=new F,gr=new F,Fs=new F,Us=new F,ei=new F;function Lc(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){ei.fromArray(a,r);let o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),d=n.dot(ei);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Ot=new F,Os=new je,Im=0,mt=class extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Im++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jh,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Dr=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lr=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dm=new ea,xr=new F,Nc=new F,va=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Nc)),this.expandByPoint(xr.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lm=0,wn=new vt,Fc=new _t,Ti=new F,gn=new ea,br=new ea,Ht=new F,ht=class a extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Lr:Dr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(gn.min,br.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,br.max),gn.expandByPoint(Ht)):(gn.expandByPoint(br.min),gn.expandByPoint(br.max))}gn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ht.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),Ht.add(Ti)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new F,l[g]=new F;let c=new F,d=new F,p=new F,h=new je,f=new je,x=new je,_=new F,m=new F;function u(g,A,C){c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,A),p.fromBufferAttribute(n,C),h.fromBufferAttribute(r,g),f.fromBufferAttribute(r,A),x.fromBufferAttribute(r,C),d.sub(c),p.sub(c),f.sub(h),x.sub(h);let R=1/(f.x*x.y-x.x*f.y);isFinite(R)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(R),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(R),o[g].add(_),o[A].add(_),o[C].add(_),l[g].add(m),l[A].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let g=0,A=b.length;g<A;++g){let C=b[g],R=C.start,I=C.count;for(let U=R,L=R+I;U<L;U+=3)u(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let S=new F,v=new F,E=new F,M=new F;function T(g){E.fromBufferAttribute(i,g),M.copy(E);let A=o[g];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),v.crossVectors(M,A);let R=v.dot(l[g])<0?-1:1;s.setXYZW(g,S.x,S.y,S.z,R)}for(let g=0,A=b.length;g<A;++g){let C=b[g],R=C.start,I=C.count;for(let U=R,L=R+I;U<L;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new F,r=new F,s=new F,o=new F,l=new F,c=new F,d=new F,p=new F;if(e)for(let h=0,f=e.count;h<f;h+=3){let x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),d.subVectors(s,r),p.subVectors(i,r),d.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,r),p.subVectors(i,r),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d),f=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let u=0;u<d;u++)h[x++]=c[f++]}return new mt(h,d,p)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){let f=c[p];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let d=i[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],p=r[c];for(let h=0,f=p.length;h<f;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,d=s.length;c<d;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Uc=new F,Nm=new F,Fm=new nt,Gn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Uc.subVectors(n,t).cross(Nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fm.getNormalMatrix(e),i=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Um=0,_a=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=ji,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=ad,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(t){let r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ga=new F,Oc=new F,Bs=new F,zs=new F,Nr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ga.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,t),ga.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oc.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),zs.copy(this.origin).sub(Oc);let r=e.distanceTo(t)*.5,s=-this.direction.dot(Bs),o=zs.dot(this.direction),l=-zs.dot(Bs),c=zs.lengthSq(),d=Math.abs(1-s*s),p,h,f,x;if(d>0)if(p=s*l-o,h=s*o-l,x=r*d,p>=0)if(h>=-x)if(h<=x){let _=1/d;p*=_,h*=_,f=p*(p+s*h+2*o)+h*(s*p+h+2*l)+c}else h=r,p=Math.max(0,-(s*h+o)),f=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(s*h+o)),f=-p*p+h*(h+2*l)+c;else h<=-x?(p=Math.max(0,-(-s*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c):h<=x?(p=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(p=Math.max(0,-(s*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c);else h=s>0?-r:r,p=Math.max(0,-(s*h+o)),f=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Oc).addScaledVector(Bs,h),f}intersectSphere(e,t){if(e.radius<0)return null;ga.subVectors(e.center,this.origin);let n=ga.dot(this.direction),i=ga.dot(ga)-n*n,r=e.radius*e.radius;if(i>r)return null;let s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,t,n,i,r){let s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=e.x-s.x,h=e.y-s.y,f=e.z-s.z,x=t.x-s.x,_=t.y-s.y,m=t.z-s.z,u=n.x-s.x,b=n.y-s.y,S=n.z-s.z,v=Math.abs(l),E=Math.abs(c),M=Math.abs(d),T,g,A,C,R,I,U,L,B,Z,Q,q;if(v>=E&&v>=M?(A=l,I=p,B=x,q=u,l>=0?(T=c,g=d,C=h,R=f,U=_,L=m,Z=b,Q=S):(T=d,g=c,C=f,R=h,U=m,L=_,Z=S,Q=b)):E>=M?(A=c,I=h,B=_,q=b,c>=0?(T=d,g=l,C=f,R=p,U=m,L=x,Z=S,Q=u):(T=l,g=d,C=p,R=f,U=x,L=m,Z=u,Q=S)):(A=d,I=f,B=m,q=S,d>=0?(T=l,g=c,C=p,R=h,U=x,L=_,Z=u,Q=b):(T=c,g=l,C=h,R=p,U=_,L=x,Z=b,Q=u)),A===0)return null;let J=T/A,j=g/A,se=1/A,Se=C-J*I,k=R-j*I,ue=U-J*B,_e=L-j*B,Me=Z-J*q,V=Q-j*q,H=Me*_e-V*ue,ce=Se*V-k*Me,pe=ue*k-_e*Se;if(i){if(H<0||ce<0||pe<0)return null}else if((H<0||ce<0||pe<0)&&(H>0||ce>0||pe>0))return null;let fe=H+ce+pe;if(fe===0)return null;let N=se*(H*I+ce*B+pe*q);return(fe>0?N<0:N>0)?null:this.at(N/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qu=new vt,ti=new Nr,Gs=new va,eh=new F,Hs=new F,ks=new F,Vs=new F,Bc=new F,js=new F,th=new F,$s=new F,Ye=class extends _t{constructor(e=new ht,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],p=r[l];d!==0&&(Bc.fromBufferAttribute(p,e),s?js.addScaledVector(Bc,d):js.addScaledVector(Bc.sub(t),d))}t.add(js)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(Gs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Gs,eh)===null||ti.origin.distanceToSquared(eh)>(e.far-e.near)**2))&&(Qu.copy(r).invert(),ti.copy(e.ray).applyMatrix4(Qu),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let i,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,_=h.length;x<_;x++){let m=h[x],u=s[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,E=S;v<E;v+=3){let M=o.getX(v),T=o.getX(v+1),g=o.getX(v+2);i=qs(this,u,e,n,c,d,p,M,T,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=x,u=_;m<u;m+=3){let b=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=qs(this,s,e,n,c,d,p,b,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,_=h.length;x<_;x++){let m=h[x],u=s[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,E=S;v<E;v+=3){let M=v,T=v+1,g=v+2;i=qs(this,u,e,n,c,d,p,M,T,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=x,u=_;m<u;m+=3){let b=m,S=m+1,v=m+2;i=qs(this,s,e,n,c,d,p,b,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Om(a,e,t,n,i,r,s,o){let l;if(e.side===an?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===ka,o),l===null)return null;$s.copy(o),$s.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:a}}function qs(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,Hs),a.getVertexPosition(l,ks),a.getVertexPosition(c,Vs);let d=Om(a,e,t,n,Hs,ks,Vs,th);if(d){let p=new F;Ua.getBarycoord(th,Hs,ks,Vs,p),i&&(d.uv=Ua.getInterpolatedAttribute(i,o,l,c,p,new je)),r&&(d.uv1=Ua.getInterpolatedAttribute(r,o,l,c,p,new je)),s&&(d.normal=Ua.getInterpolatedAttribute(s,o,l,c,p,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new F,materialIndex:0};Ua.getNormal(Hs,ks,Vs,h.normal),d.face=h,d.barycoord=p}return d}var Fr=class extends nn{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Vt,d=Vt,p,h){super(null,s,o,l,c,d,i,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wi=new vt,nh=new vt,Ws=[],ah=new ea,Bm=new vt,vr=new Ye,_r=new va,Bt=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ea),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),ah.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),_r.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[s+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,wi),nh.multiplyMatrices(n,wi),vr.matrixWorld=nh,vr.raycast(e,Ws);for(let s=0,o=Ws.length;s<o;s++){let l=Ws[s];l.instanceId=r,l.object=this,t.push(l)}Ws.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(i*this.count),i,this.count,Yo,In));let r=this.morphTexture.source.data.data,s=0;for(let c=0;c<n.length;c++)s+=n[c];let o=this.geometry.morphTargetsRelative?1:1-s,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ni=new va,zm=new je(.5,.5),Xs=new F,zi=class{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,r=new Gn,s=new Gn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],h=r[6],f=r[7],x=r[8],_=r[9],m=r[10],u=r[11],b=r[12],S=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-s,f-d,u-x,E-b).normalize(),i[1].setComponents(c+s,f+d,u+x,E+b).normalize(),i[2].setComponents(c+o,f+p,u+_,E+S).normalize(),i[3].setComponents(c-o,f-p,u-_,E-S).normalize(),n)i[4].setComponents(l,h,m,v).normalize(),i[5].setComponents(c-l,f-h,u-m,E-v).normalize();else if(i[4].setComponents(c-l,f-h,u-m,E-v).normalize(),t===Hn)i[5].setComponents(c+l,f+h,u+m,E+v).normalize();else if(t===Ni)i[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);let t=zm.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ta=class extends _a{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mo=new F,go=new F,ih=new vt,yr=new Nr,Ys=new va,zc=new F,rh=new F,xo=class extends _t{constructor(e=new ht,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)mo.fromBufferAttribute(t,i-1),go.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mo.distanceTo(go);e.setAttribute("lineDistance",new tt(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;ih.copy(i).invert(),yr.copy(e.ray).applyMatrix4(ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,s.start),x=Math.min(d.count,s.start+s.count);for(let _=f,m=x-1;_<m;_+=c){let u=d.getX(_),b=d.getX(_+1),S=Js(this,e,yr,l,u,b,_);S&&t.push(S)}if(this.isLineLoop){let _=d.getX(x-1),m=d.getX(f),u=Js(this,e,yr,l,_,m,x-1);u&&t.push(u)}}else{let f=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let _=f,m=x-1;_<m;_+=c){let u=Js(this,e,yr,l,_,_+1,_);u&&t.push(u)}if(this.isLineLoop){let _=Js(this,e,yr,l,x-1,f,x-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Js(a,e,t,n,i,r,s){let o=a.geometry.attributes.position;if(mo.fromBufferAttribute(o,i),go.fromBufferAttribute(o,r),t.distanceSqToSegment(mo,go,zc,rh)>n)return;zc.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(zc);if(!(c<e.near||c>e.far))return{distance:c,point:rh.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}var sh=new F,oh=new F,ya=class extends xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)sh.fromBufferAttribute(t,i),oh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sh.distanceTo(oh);e.setAttribute("lineDistance",new tt(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ur=class extends nn{constructor(e=[],t=Va,n,i,r,s,o,l,c,d){super(e,t,n,i,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oa=class extends nn{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ba=class extends nn{constructor(e,t,n=Vn,i,r,s,o=Vt,l=Vt,c,d=Zn,p=1){if(d!==Zn&&d!==$a)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:p};super(h,i,r,s,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ui(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},bo=class extends Ba{constructor(e,t=Vn,n=Va,i,r,s=Vt,o=Vt,l,c=Zn){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,i,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Or=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zt=class a extends ht{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],d=[],p=[],h=0,f=0;x("z","y","x",-1,-1,n,t,e,s,r,0),x("z","y","x",1,-1,n,t,-e,s,r,1),x("x","z","y",1,1,e,n,t,i,s,2),x("x","z","y",1,-1,e,n,-t,i,s,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function x(_,m,u,b,S,v,E,M,T,g,A){let C=v/T,R=E/g,I=v/2,U=E/2,L=M/2,B=T+1,Z=g+1,Q=0,q=0,J=new F;for(let j=0;j<Z;j++){let se=j*R-U;for(let Se=0;Se<B;Se++){let k=Se*C-I;J[_]=k*b,J[m]=se*S,J[u]=L,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[u]=M>0?1:-1,d.push(J.x,J.y,J.z),p.push(Se/T),p.push(1-j/g),Q+=1}}for(let j=0;j<g;j++)for(let se=0;se<T;se++){let Se=h+se+B*j,k=h+se+B*(j+1),ue=h+(se+1)+B*(j+1),_e=h+(se+1)+B*j;l.push(Se,k,_e),l.push(k,ue,_e),q+=6}o.addGroup(f,q,A),f+=q,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Gi=class a extends ht{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],o=[],l=[],c=[],d=t/2,p=Math.PI/2*e,h=t,f=2*p+h,x=n*2+r,_=i+1,m=new F,u=new F;for(let b=0;b<=x;b++){let S=0,v=0,E=0,M=0;if(b<=n){let A=b/n,C=A*Math.PI/2;v=-d-e*Math.cos(C),E=e*Math.sin(C),M=-e*Math.cos(C),S=A*p}else if(b<=n+r){let A=(b-n)/r;v=-d+A*t,E=e,M=0,S=p+A*h}else{let A=(b-n-r)/n,C=A*Math.PI/2;v=d+e*Math.sin(C),E=e*Math.cos(C),M=e*Math.sin(C),S=p+h+A*p}let T=Math.max(0,Math.min(1,S/f)),g=0;b===0?g=.5/i:b===x&&(g=-.5/i);for(let A=0;A<=i;A++){let C=A/i,R=C*Math.PI*2,I=Math.sin(R),U=Math.cos(R);u.x=-E*U,u.y=v,u.z=E*I,o.push(u.x,u.y,u.z),m.set(-E*U,M,E*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+g,T)}if(b>0){let A=(b-1)*_;for(let C=0;C<i;C++){let R=A+C,I=A+C+1,U=b*_+C,L=b*_+C+1;s.push(R,I,U),s.push(I,L,U)}}}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Br=class a extends ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],s=[],o=[],l=[],c=new F,d=new je;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){let f=n+p/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(s[h]/e+1)/2,d.y=(s[h+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},dn=class a extends ht{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let d=[],p=[],h=[],f=[],x=0,_=[],m=n/2,u=0;b(),s===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function b(){let v=new F,E=new F,M=0,T=(t-e)/n;for(let g=0;g<=r;g++){let A=[],C=g/r,R=C*(t-e)+e;for(let I=0;I<=i;I++){let U=I/i,L=U*l+o,B=Math.sin(L),Z=Math.cos(L);E.x=R*B,E.y=-C*n+m,E.z=R*Z,p.push(E.x,E.y,E.z),v.set(B,T,Z).normalize(),h.push(v.x,v.y,v.z),f.push(U,1-C),A.push(x++)}_.push(A)}for(let g=0;g<i;g++)for(let A=0;A<r;A++){let C=_[A][g],R=_[A+1][g],I=_[A+1][g+1],U=_[A][g+1];(e>0||A!==0)&&(d.push(C,R,U),M+=3),(t>0||A!==r-1)&&(d.push(R,I,U),M+=3)}c.addGroup(u,M,0),u+=M}function S(v){let E=x,M=new je,T=new F,g=0,A=v===!0?e:t,C=v===!0?1:-1;for(let I=1;I<=i;I++)p.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),x++;let R=x;for(let I=0;I<=i;I++){let L=I/i*l+o,B=Math.cos(L),Z=Math.sin(L);T.x=A*Z,T.y=m*C,T.z=A*B,p.push(T.x,T.y,T.z),h.push(0,C,0),M.x=B*.5+.5,M.y=Z*.5*C+.5,f.push(M.x,M.y),x++}for(let I=0;I<i;I++){let U=E+I,L=R+I;v===!0?d.push(L,L+1,U):d.push(L+1,L,U),g+=3}c.addGroup(u,g,v===!0?1:2),u+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zr=class a extends dn{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vo=class a extends ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],s=[];o(i),c(n),d(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let S=new F,v=new F,E=new F;for(let M=0;M<t.length;M+=3)f(t[M+0],S),f(t[M+1],v),f(t[M+2],E),l(S,v,E,b)}function l(b,S,v,E){let M=E+1,T=[];for(let g=0;g<=M;g++){T[g]=[];let A=b.clone().lerp(v,g/M),C=S.clone().lerp(v,g/M),R=M-g;for(let I=0;I<=R;I++)I===0&&g===M?T[g][I]=A:T[g][I]=A.clone().lerp(C,I/R)}for(let g=0;g<M;g++)for(let A=0;A<2*(M-g)-1;A++){let C=Math.floor(A/2);A%2===0?(h(T[g][C+1]),h(T[g+1][C]),h(T[g][C])):(h(T[g][C+1]),h(T[g+1][C+1]),h(T[g+1][C]))}}function c(b){let S=new F;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(b),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function d(){let b=new F;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let v=m(b)/2/Math.PI+.5,E=u(b)/Math.PI+.5;s.push(v,1-E)}x(),p()}function p(){for(let b=0;b<s.length;b+=6){let S=s[b+0],v=s[b+2],E=s[b+4],M=Math.max(S,v,E),T=Math.min(S,v,E);M>.9&&T<.1&&(S<.2&&(s[b+0]+=1),v<.2&&(s[b+2]+=1),E<.2&&(s[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function f(b,S){let v=b*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function x(){let b=new F,S=new F,v=new F,E=new F,M=new je,T=new je,g=new je;for(let A=0,C=0;A<r.length;A+=9,C+=6){b.set(r[A+0],r[A+1],r[A+2]),S.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),M.set(s[C+0],s[C+1]),T.set(s[C+2],s[C+3]),g.set(s[C+4],s[C+5]),E.copy(b).add(S).add(v).divideScalar(3);let R=m(E);_(M,C+0,b,R),_(T,C+2,S,R),_(g,C+4,v,R)}}function _(b,S,v,E){E<0&&b.x===1&&(s[S]=b.x-1),v.x===0&&v.z===0&&(s[S]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);let d=n[i],h=n[i+1]-d,f=(s-d)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),l=t||(s.isVector2?new je:new F);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,i=[],r=[],s=[],o=new F,l=new vt;for(let f=0;f<=e;f++){let x=f/e;i[f]=this.getTangentAt(x,new F)}r[0]=new F,s[0]=new F;let c=Number.MAX_VALUE,d=Math.abs(i[0].x),p=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(lt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],f*x)),s[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gr=class extends Cn{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new je){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*p+this.aX,c=h*p+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_o=class extends Gr{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function _d(){let a=0,e=0,t=0,n=0;function i(r,s,o,l){a=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){i(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,p){let h=(s-r)/c-(o-r)/(c+d)+(o-s)/d,f=(o-s)/d-(l-s)/(d+p)+(l-o)/p;h*=d,f*=d,i(s,o,h,f)},calc:function(r){let s=r*r,o=s*r;return a+e*r+t*s+n*o}}}var lh=new F,ch=new F,Gc=new _d,Hc=new _d,kc=new _d,Hi=class extends Cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=i[(o-1)%r]:(ch.subVectors(i[0],i[1]).add(i[0]),c=ch);let p=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?d=i[(o+2)%r]:(lh.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=lh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),f),_=Math.pow(p.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),Gc.initNonuniformCatmullRom(c.x,p.x,h.x,d.x,x,_,m),Hc.initNonuniformCatmullRom(c.y,p.y,h.y,d.y,x,_,m),kc.initNonuniformCatmullRom(c.z,p.z,h.z,d.z,x,_,m)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,p.x,h.x,d.x,this.tension),Hc.initCatmullRom(c.y,p.y,h.y,d.y,this.tension),kc.initCatmullRom(c.z,p.z,h.z,d.z,this.tension));return n.set(Gc.calc(l),Hc.calc(l),kc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function dh(a,e,t,n,i){let r=(n-e)*.5,s=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*a+t}function Gm(a,e){let t=1-a;return t*t*e}function Hm(a,e){return 2*(1-a)*a*e}function km(a,e){return a*a*e}function Sr(a,e,t,n){return Gm(a,e)+Hm(a,t)+km(a,n)}function Vm(a,e){let t=1-a;return t*t*t*e}function jm(a,e){let t=1-a;return 3*t*t*a*e}function $m(a,e){return 3*(1-a)*a*a*e}function qm(a,e){return a*a*a*e}function Mr(a,e,t,n,i){return Vm(a,e)+jm(a,t)+$m(a,n)+qm(a,i)}var yo=class extends Cn{constructor(e=new je,t=new je,n=new je,i=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new je){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Mr(e,i.x,r.x,s.x,o.x),Mr(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},So=class extends Cn{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Mr(e,i.x,r.x,s.x,o.x),Mr(e,i.y,r.y,s.y,o.y),Mr(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mo=class extends Cn{constructor(e=new je,t=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new je){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends Cn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends Cn{constructor(e=new je,t=new je,n=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new je){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Sr(e,i.x,r.x,s.x),Sr(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends Cn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Sr(e,i.x,r.x,s.x),Sr(e,i.y,r.y,s.y),Sr(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new je){let n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],c=i[s],d=i[s>i.length-2?i.length-1:s+1],p=i[s>i.length-3?i.length-1:s+2];return n.set(dh(o,l.x,c.x,d.x,p.x),dh(o,l.y,c.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new je().fromArray(i))}return this}},Wm=Object.freeze({__proto__:null,ArcCurve:_o,CatmullRomCurve3:Hi,CubicBezierCurve:yo,CubicBezierCurve3:So,EllipseCurve:Gr,LineCurve:Mo,LineCurve3:Eo,QuadraticBezierCurve:Ao,QuadraticBezierCurve3:Hr,SplineCurve:To});var ii=class a extends vo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}};var ri=class a extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,p=e/o,h=t/l,f=[],x=[],_=[],m=[];for(let u=0;u<d;u++){let b=u*h-s;for(let S=0;S<c;S++){let v=S*p-r;x.push(v,-b,0),_.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){let S=b+c*u,v=b+c*(u+1),E=b+1+c*(u+1),M=b+1+c*u;f.push(S,v,M),f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},kr=class a extends ht{constructor(e=.5,t=1,n=32,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],d=[],p=e,h=(t-e)/i,f=new F,x=new je;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let u=r+m/n*s;f.x=p*Math.cos(u),f.y=p*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,d.push(x.x,x.y)}p+=h}for(let _=0;_<i;_++){let m=_*(n+1);for(let u=0;u<n;u++){let b=u+m,S=b,v=b+n+1,E=b+n+2,M=b+1;o.push(S,v,M),o.push(v,E,M)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var na=class a extends ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+o,Math.PI),c=0,d=[],p=new F,h=new F,f=[],x=[],_=[],m=[];for(let u=0;u<=n;u++){let b=[],S=u/n,v=s+S*o,E=e*Math.cos(v),M=Math.sqrt(e*e-E*E),T=0;u===0&&s===0?T=.5/t:u===n&&l===Math.PI&&(T=-.5/t);for(let g=0;g<=t;g++){let A=g/t,C=i+A*r;p.x=-M*Math.cos(C),p.y=E,p.z=M*Math.sin(C),x.push(p.x,p.y,p.z),h.copy(p).normalize(),_.push(h.x,h.y,h.z),m.push(A+T,1-S),b.push(c++)}d.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){let S=d[u][b+1],v=d[u][b],E=d[u+1][b],M=d[u+1][b+1];(u!==0||s>0)&&f.push(S,v,M),(u!==n-1||l<Math.PI)&&f.push(v,E,M)}this.setIndex(f),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rn=class a extends ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:s,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],d=[],p=[],h=new F,f=new F,x=new F;for(let _=0;_<=n;_++){let m=s+_/n*o;for(let u=0;u<=i;u++){let b=u/i*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),x.subVectors(f,h).normalize(),d.push(x.x,x.y,x.z),p.push(u/i),p.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let u=(i+1)*_+m-1,b=(i+1)*(_-1)+m-1,S=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(u,b,v),l.push(b,S,v)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Vr=class a extends ht{constructor(e=new Hr(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new F,l=new F,c=new je,d=new F,p=[],h=[],f=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2));function _(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),b(),u()}function m(S){d=e.getPointAt(S/t,d);let v=s.normals[S],E=s.binormals[S];for(let M=0;M<=i;M++){let T=M/i*Math.PI*2,g=Math.sin(T),A=-Math.cos(T);l.x=A*v.x+g*E.x,l.y=A*v.y+g*E.y,l.z=A*v.z+g*E.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,p.push(o.x,o.y,o.z)}}function u(){for(let S=1;S<=t;S++)for(let v=1;v<=i;v++){let E=(i+1)*(S-1)+(v-1),M=(i+1)*S+(v-1),T=(i+1)*S+v,g=(i+1)*(S-1)+v;x.push(E,M,g),x.push(M,T,g)}}function b(){for(let S=0;S<=t;S++)for(let v=0;v<=i;v++)c.x=S/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new a(new Wm[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function li(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(uh(i))i.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(uh(i[0])){let r=[];for(let s=0,o=i.length;s<o;s++)r[s]=i[s].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kt(a){let e={};for(let t=0;t<a.length;t++){let n=li(a[t]);for(let i in n)e[i]=n[i]}return e}function uh(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Xm(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function yd(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var np={clone:li,merge:Kt},Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=Xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(i.value);break;case"v2":this.uniforms[n].value=new je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new nt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new vt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wo=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ft=class extends _a{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Co=class extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ro=class extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ci(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Vc(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}var za=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{a:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break a;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Po=class extends za{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Wc:r=e,o=2*t-n;break;case Xc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wc:s=e,l=2*n-t;break;case Xc:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,f=this._weightNext,x=(n-t)/(i-t),_=x*x,m=_*x,u=-h*m+2*h*_-h*x,b=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*x+1,S=(-1-f)*m+(1.5+f)*_+.5*x,v=f*m-f*_;for(let E=0;E!==o;++E)r[E]=u*s[d+E]+b*s[c+E]+S*s[l+E]+v*s[p+E];return r}},Io=class extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),p=1-d;for(let h=0;h!==o;++h)r[h]=s[c+h]*p+s[l+h]*d;return r}},Do=class extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Lo=class extends za{interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let x=(n-t)/(i-t),_=1-x;for(let m=0;m!==o;++m)r[m]=s[c+m]*_+s[l+m]*x;return r}let h=o*2,f=e-1;for(let x=0;x!==o;++x){let _=s[c+x],m=s[l+x],u=f*h+x*2,b=p[u],S=p[u+1],v=e*h+x*2,E=d[v],M=d[v+1],T=Km(n,t,b,E,i);r[x]=ap(T,_,S,M,m)}return r}};function ap(a,e,t,n,i){let r=1-a;return r*r*r*e+3*r*r*a*t+3*r*a*a*n+a*a*a*i}function Zm(a,e,t,n,i){let r=1-a;return 3*r*r*(t-e)+6*r*a*(n-t)+3*a*a*(i-n)}function Km(a,e,t,n,i){let r=(a-e)/(i-e);for(let s=0;s<8;s++){let o=ap(r,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let l=Zm(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ci(t,this.TimeBufferType),this.values=Ci(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ci(e.times,Array),values:Ci(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Vc(e.settings)&&(n.settings={inTangents:Ci(e.settings.inTangents,Array),outTangents:Ci(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Lo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case co:t=this.InterpolantFactoryMethodLinear;break;case Qs:t=this.InterpolantFactoryMethodSmooth;break;case $c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return Qs;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Vc(this.settings)&&(hh(this.settings.inTangents,e),hh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){et("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&vm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qs,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{let p=o*n,h=p-n,f=p+n;for(let x=0;x!==n;++x){let _=t[p+x];if(_!==t[h+x]||_!==t[f+x]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let p=o*n,h=s*n;for(let f=0;f!==n;++f)t[h+f]=t[p+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Vc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function hh(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=co;var Ga=class extends vn{constructor(e,t,n){super(e,t,n)}};Ga.prototype.ValueTypeName="bool";Ga.prototype.ValueBufferType=Array;Ga.prototype.DefaultInterpolation=Er;Ga.prototype.InterpolantFactoryMethodLinear=void 0;Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends vn{constructor(e,t,n,i){super(e,t,n,i)}};No.prototype.ValueTypeName="color";var Fo=class extends vn{constructor(e,t,n,i){super(e,t,n,i)}};Fo.prototype.ValueTypeName="number";var Uo=class extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let d=c+o;c!==d;c+=4)Qn.slerpFlat(r,0,s,c-o,s,c,l);return r}},jr=class extends vn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}};jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends vn{constructor(e,t,n){super(e,t,n)}};Ha.prototype.ValueTypeName="string";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=Er;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends vn{constructor(e,t,n,i){super(e,t,n,i)}};Oo.prototype.ValueTypeName="vector";var Bo=class{constructor(e,t,n){let i=this,r=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,i.onProgress!==void 0&&i.onProgress(d,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){let p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,h=c.length;p<h;p+=2){let f=c[p],x=c[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ip=new Bo,zo=class{constructor(e){this.manager=e!==void 0?e:ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qr=class extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},jc=new vt,ph=new F,fh=new F,Go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ni||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zs=new F,Ks=new Qn,Yn=new F,Wr=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zs,Ks,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Ks,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zs,Ks,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,Ks,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fa=new F,mh=new je,gh=new je,Jt=class extends Wr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,t){return this.getViewBounds(e,mh,gh),t.subVectors(gh,mh)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ki=class extends Wr{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yc=class extends Go{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Yc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ri=-90,Pi=1,Ho=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Jt(Ri,Pi,e,t);i.layers=this.layers,this.add(i);let r=new Jt(Ri,Pi,e,t);r.layers=this.layers,this.add(r);let s=new Jt(Ri,Pi,e,t);s.layers=this.layers,this.add(s);let o=new Jt(Ri,Pi,e,t);o.layers=this.layers,this.add(o);let l=new Jt(Ri,Pi,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Ri,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(let c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ni)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,h,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ko=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Sd="\\[\\]\\.:\\/",Qm=new RegExp("["+Sd+"]","g"),Md="[^"+Sd+"]",e0="[^"+Sd.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",Md),n0=/(WCOD+)?/.source.replace("WCOD",e0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Md),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Md),r0=new RegExp("^"+t0+n0+a0+i0+"$"),s0=["material","materials","bones","map"],Jc=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qm,"")}static parseTrackName(e){let t=r0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);s0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[i];if(s===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Jc;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oy=new Float32Array(1);var Yr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Zc=class a{static{a.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Ed(a,e,t,n){let i=o0(n);switch(t){case gd:return a*e;case Yo:return a*e/i.components*i.byteLength;case Jo:return a*e/i.components*i.byteLength;case qa:return a*e*2/i.components*i.byteLength;case Zo:return a*e*2/i.components*i.byteLength;case xd:return a*e*3/i.components*i.byteLength;case Dn:return a*e*4/i.components*i.byteLength;case Ko:return a*e*4/i.components*i.byteLength;case es:case ts:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ns:case as:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(a,16)*Math.max(e,8)/4;case Qo:case tl:return Math.max(a,8)*Math.max(e,8)/2;case al:case il:case sl:case ol:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case rl:case is:case ll:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case pl:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ml:case El:case Al:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Tl:case wl:return Math.ceil(a/4)*Math.ceil(e/4)*8;case rs:case Cl:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(a){switch(a){case un:case hd:return{byteLength:1,components:1};case $i:case pd:case jn:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Vn:case qo:case In:return{byteLength:4,components:1};case fd:case md:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tp(){let a=null,e=!1,t=null,n=null;function i(r,s){n=a.requestAnimationFrame(i),t(r,s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function f0(a){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,p=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let d=l.array,p=l.updateRanges;if(a.bindBuffer(c,o),p.length===0)a.bufferSubData(c,0,d);else{p.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<p.length;f++){let x=p[h],_=p[f];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++h,p[h]=_)}p.length=h+1;for(let f=0,x=p.length;f<x;f++){let _=p[f];a.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:s}}var m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
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
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,pg=`uniform sampler2D dfgLUT;
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
}`,fg=`
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ag=`#if defined( USE_POINTS_UV )
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
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
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
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ex=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
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
}`,Sx=`#if DEPTH_PACKING == 3200
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
}`,Mx=`#define DISTANCE
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
}`,Ex=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Px=`uniform vec3 diffuse;
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
}`,Ix=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Nx=`#define MATCAP
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
}`,Fx=`#define NORMAL
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
}`,Ux=`#define NORMAL
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
}`,Ox=`#define PHONG
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
}`,Bx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,Gx=`#define STANDARD
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
}`,Hx=`#define TOON
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
}`,kx=`#define TOON
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
}`,Vx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,qx=`uniform vec3 color;
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
}`,Wx=`uniform float rotation;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:x0,alphamap_pars_fragment:b0,alphatest_fragment:v0,alphatest_pars_fragment:_0,aomap_fragment:y0,aomap_pars_fragment:S0,batching_pars_vertex:M0,batching_vertex:E0,begin_vertex:A0,beginnormal_vertex:T0,bsdfs:w0,iridescence_fragment:C0,bumpmap_pars_fragment:R0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:L0,color_fragment:N0,color_pars_fragment:F0,color_pars_vertex:U0,color_vertex:O0,common:B0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:G0,displacementmap_pars_vertex:H0,displacementmap_vertex:k0,emissivemap_fragment:V0,emissivemap_pars_fragment:j0,colorspace_fragment:$0,colorspace_pars_fragment:q0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:Y0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:og,envmap_vertex:Z0,fog_vertex:K0,fog_pars_vertex:Q0,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ag,lights_lambert_fragment:ig,lights_lambert_pars_fragment:rg,lights_pars_begin:sg,lights_toon_fragment:lg,lights_toon_pars_fragment:cg,lights_phong_fragment:dg,lights_phong_pars_fragment:ug,lights_physical_fragment:hg,lights_physical_pars_fragment:pg,lights_fragment_begin:fg,lights_fragment_maps:mg,lights_fragment_end:gg,lightprobes_pars_fragment:xg,logdepthbuf_fragment:bg,logdepthbuf_pars_fragment:vg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:yg,map_fragment:Sg,map_pars_fragment:Mg,map_particle_fragment:Eg,map_particle_pars_fragment:Ag,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Cg,morphcolor_vertex:Rg,morphnormal_vertex:Pg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Dg,normal_fragment_begin:Lg,normal_fragment_maps:Ng,normal_pars_fragment:Fg,normal_pars_vertex:Ug,normal_vertex:Og,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:kg,opaque_fragment:Vg,packing:jg,premultiplied_alpha_fragment:$g,project_vertex:qg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:Kg,shadowmap_vertex:Qg,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ax,skinnormal_vertex:ix,specularmap_fragment:rx,specularmap_pars_fragment:sx,tonemapping_fragment:ox,tonemapping_pars_fragment:lx,transmission_fragment:cx,transmission_pars_fragment:dx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:px,worldpos_vertex:fx,background_vert:mx,background_frag:gx,backgroundCube_vert:xx,backgroundCube_frag:bx,cube_vert:vx,cube_frag:_x,depth_vert:yx,depth_frag:Sx,distance_vert:Mx,distance_frag:Ex,equirect_vert:Ax,equirect_frag:Tx,linedashed_vert:wx,linedashed_frag:Cx,meshbasic_vert:Rx,meshbasic_frag:Px,meshlambert_vert:Ix,meshlambert_frag:Dx,meshmatcap_vert:Lx,meshmatcap_frag:Nx,meshnormal_vert:Fx,meshnormal_frag:Ux,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:zx,meshphysical_frag:Gx,meshtoon_vert:Hx,meshtoon_frag:kx,points_vert:Vx,points_frag:jx,shadow_vert:$x,shadow_frag:qx,sprite_vert:Wx,sprite_frag:Xx},De={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ra={basic:{uniforms:Kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Kt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Kt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new We(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Kt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Kt([De.points,De.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Kt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Kt([De.common,De.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Kt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Kt([De.sprite,De.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Kt([De.common,De.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Kt([De.lights,De.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ra.physical={uniforms:Kt([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Dl={r:0,b:0,g:0},Yx=new vt,wp=new nt;wp.set(-1,0,0,0,1,0,0,0,1);function Jx(a,e,t,n,i,r){let s=new We(0),o=i===!0?0:1,l,c,d=null,p=0,h=null;function f(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let v=b.backgroundBlurriness>0;S=e.get(S,v)}return S}function x(b){let S=!1,v=f(b);v===null?m(s,o):v&&v.isColor&&(m(v,1),S=!0);let E=a.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(a.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(b,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===Kr)?(c===void 0&&(c=new Ye(new Zt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:li(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wp),c.material.toneMapped=dt.getTransfer(v.colorSpace)!==bt,(d!==v||p!==v.version||h!==a.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,h=a.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new ri(2,2),new bn({name:"BackgroundMaterial",uniforms:li(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=dt.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||h!==a.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,h=a.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,S){b.getRGB(Dl,yd(a)),t.buffers.color.setClear(Dl.r,Dl.g,Dl.b,S,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,S=1){s.set(b),o=S,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(s,o)},render:x,addToRenderList:_,dispose:u}}function Zx(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,s=!1;function o(R,I,U,L,B){let Z=!1,Q=p(R,L,U,I);r!==Q&&(r=Q,c(r.object)),Z=f(R,L,U,B),Z&&x(R,L,U,B),B!==null&&e.update(B,a.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,v(R,I,U,L),B!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return a.createVertexArray()}function c(R){return a.bindVertexArray(R)}function d(R){return a.deleteVertexArray(R)}function p(R,I,U,L){let B=L.wireframe===!0,Z=n[I.id];Z===void 0&&(Z={},n[I.id]=Z);let Q=R.isInstancedMesh===!0?R.id:0,q=Z[Q];q===void 0&&(q={},Z[Q]=q);let J=q[U.id];J===void 0&&(J={},q[U.id]=J);let j=J[B];return j===void 0&&(j=h(l()),J[B]=j),j}function h(R){let I=[],U=[],L=[];for(let B=0;B<t;B++)I[B]=0,U[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:L,object:R,attributes:{},index:null}}function f(R,I,U,L){let B=r.attributes,Z=I.attributes,Q=0,q=U.getAttributes();for(let J in q)if(q[J].location>=0){let se=B[J],Se=Z[J];if(Se===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor)),se===void 0||se.attribute!==Se||Se&&se.data!==Se.data)return!0;Q++}return r.attributesNum!==Q||r.index!==L}function x(R,I,U,L){let B={},Z=I.attributes,Q=0,q=U.getAttributes();for(let J in q)if(q[J].location>=0){let se=Z[J];se===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));let Se={};Se.attribute=se,se&&se.data&&(Se.data=se.data),B[J]=Se,Q++}r.attributes=B,r.attributesNum=Q,r.index=L}function _(){let R=r.newAttributes;for(let I=0,U=R.length;I<U;I++)R[I]=0}function m(R){u(R,0)}function u(R,I){let U=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;U[R]=1,L[R]===0&&(a.enableVertexAttribArray(R),L[R]=1),B[R]!==I&&(a.vertexAttribDivisor(R,I),B[R]=I)}function b(){let R=r.newAttributes,I=r.enabledAttributes;for(let U=0,L=I.length;U<L;U++)I[U]!==R[U]&&(a.disableVertexAttribArray(U),I[U]=0)}function S(R,I,U,L,B,Z,Q){Q===!0?a.vertexAttribIPointer(R,I,U,B,Z):a.vertexAttribPointer(R,I,U,L,B,Z)}function v(R,I,U,L){_();let B=L.attributes,Z=U.getAttributes(),Q=I.defaultAttributeValues;for(let q in Z){let J=Z[q];if(J.location>=0){let j=B[q];if(j===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){let se=j.normalized,Se=j.itemSize,k=e.get(j);if(k===void 0)continue;let ue=k.buffer,_e=k.type,Me=k.bytesPerElement,V=_e===a.INT||_e===a.UNSIGNED_INT||j.gpuType===qo;if(j.isInterleavedBufferAttribute){let H=j.data,ce=H.stride,pe=j.offset;if(H.isInstancedInterleavedBuffer){for(let fe=0;fe<J.locationSize;fe++)u(J.location+fe,H.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let fe=0;fe<J.locationSize;fe++)m(J.location+fe);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let fe=0;fe<J.locationSize;fe++)S(J.location+fe,Se/J.locationSize,_e,se,ce*Me,(pe+Se/J.locationSize*fe)*Me,V)}else{if(j.isInstancedBufferAttribute){for(let H=0;H<J.locationSize;H++)u(J.location+H,j.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let H=0;H<J.locationSize;H++)m(J.location+H);a.bindBuffer(a.ARRAY_BUFFER,ue);for(let H=0;H<J.locationSize;H++)S(J.location+H,Se/J.locationSize,_e,se,Se*Me,Se/J.locationSize*H*Me,V)}}else if(Q!==void 0){let se=Q[q];if(se!==void 0)switch(se.length){case 2:a.vertexAttrib2fv(J.location,se);break;case 3:a.vertexAttrib3fv(J.location,se);break;case 4:a.vertexAttrib4fv(J.location,se);break;default:a.vertexAttrib1fv(J.location,se)}}}}b()}function E(){A();for(let R in n){let I=n[R];for(let U in I){let L=I[U];for(let B in L){let Z=L[B];for(let Q in Z)d(Z[Q].object),delete Z[Q];delete L[B]}}delete n[R]}}function M(R){if(n[R.id]===void 0)return;let I=n[R.id];for(let U in I){let L=I[U];for(let B in L){let Z=L[B];for(let Q in Z)d(Z[Q].object),delete Z[Q];delete L[B]}}delete n[R.id]}function T(R){for(let I in n){let U=n[I];for(let L in U){let B=U[L];if(B[R.id]===void 0)continue;let Z=B[R.id];for(let Q in Z)d(Z[Q].object),delete Z[Q];delete B[R.id]}}}function g(R){for(let I in n){let U=n[I],L=R.isInstancedMesh===!0?R.id:0,B=U[L];if(B!==void 0){for(let Z in B){let Q=B[Z];for(let q in Q)d(Q[q].object),delete Q[q];delete B[Z]}delete U[L],Object.keys(U).length===0&&delete n[I]}}}function A(){C(),s=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Kx(a,e,t){let n;function i(l){n=l}function r(l,c){a.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,d){d!==0&&(a.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Qx(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){return!(T!==Dn&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let g=T===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==un&&T!==In&&!g&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Je("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),u=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),S=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=a.getParameter(a.MAX_SAMPLES),M=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:M}}function eb(a){let e=this,t=null,n=0,i=!1,r=!1,s=new Gn,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let f=p.length!==0||h||n!==0||i;return i=h,n=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,f){let x=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,u=a.get(p);if(!i||x===null||x.length===0||r&&!m)r?d(null):c();else{let b=r?0:n,S=b*4,v=u.clippingState||null;l.value=v,v=d(x,h,S,f);for(let E=0;E!==S;++E)v[E]=t[E];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,h,f,x){let _=p!==null?p.length:0,m=null;if(_!==0){if(m=l.value,x!==!0||m===null){let u=f+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,v=f;S!==_;++S,v+=4)s.copy(p[S]).applyMatrix4(b,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Xi=4,tb=6,nb=20,ab=256,os=new ki,rp=new We,Ad=null,Td=0,wd=0,Cd=!1,ib=new F,ci=new F,Nl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:s=256,position:o=ib}=r;Ad=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Td,wd),this._renderer.xr.enabled=Cd,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Va||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:jn,format:Dn,colorSpace:Ar,depthBuffer:!1},i=sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rb(r)),this._blurMaterial=ob(r,e,t),this._ggxMaterial=sb(r,e,t)}return i}_compileMaterial(e){let t=new Ye(new ht,e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,n,i,r){let l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(rp),p.toneMapping=kn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new Zt,new xn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,u=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,u=!0):(m.color.copy(rp),u=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[S]));let E=this._cubeSize;Wi(i,v*E,S>2?E:0,E,E),p.setRenderTarget(i),u&&p.render(_,l),p.render(e,l)}p.toneMapping=f,p.autoClear=h,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Va||e.mapping===oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());let r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Wi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,os)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),h=c*1.25,f=p*h,{_lodMax:x}=this,_=this._sizeLods[n],m=3*_*(n>x-Xi?n-x+Xi:0),u=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,Wi(r,m,u,3*_,2*_),i.setRenderTarget(r),i.render(o,os),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Wi(e,m,u,3*_,2*_),i.setRenderTarget(e),i.render(o,os)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,i,r){let s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[i],p=3*d*(i>this._lodMax-Xi?i-this._lodMax+Xi:0),h=4*(this._cubeSize-d);Wi(t,p,h,3*d,2*d),s.setRenderTarget(t),s.render(l,os)}};function rb(a){let e=[],t=[],n=a,i=a-Xi+1+tb;for(let r=0;r<i;r++){let s=Math.pow(2,n);e.push(s);let o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,f=3,x=new Float32Array(f*h*p),_=new Float32Array(f*h*p);for(let u=0;u<p;u++){let b=u%3*2/3-1,S=u>2?0:-1,v=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];x.set(v,f*h*u);for(let E=0;E<h;E++){let M=d[E*2]*2-1,T=d[E*2+1]*2-1;u===0?ci.set(1,T,M):u===1?ci.set(-M,1,-T):u===2?ci.set(-M,T,1):u===3?ci.set(-1,T,-M):u===4?ci.set(-M,-1,T):ci.set(M,T,-1),ci.toArray(_,(u*h+E)*f)}}let m=new ht;m.setAttribute("position",new mt(x,f)),m.setAttribute("outputDirection",new mt(_,f)),t.push(new Ye(m,null)),n>Xi&&n--}return{lodMeshes:t,sizeLods:e}}function sp(a,e,t){let n=new cn(a,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function sb(a,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ab,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:aa,depthTest:!1,depthWrite:!1})}function ob(a,e,t){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:aa,depthTest:!1,depthWrite:!1})}function op(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:aa,depthTest:!1,depthWrite:!1})}function lp(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:aa,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fl=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ur(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:aa});r.uniforms.tEquirect.value=t;let s=new Ye(i,r),o=t.minFilter;return t.minFilter===ja&&(t.minFilter=$t),new Ho(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}};function lb(a){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?s(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Vo||f===jo)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let _=new Fl(x.height);return _.fromEquirectangularTexture(a,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let f=h.mapping,x=f===Vo||f===jo,_=f===Va||f===oi;if(x||_){let m=t.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new Nl(a)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return x&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Nl(a)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Vo?h.mapping=Va:f===jo&&(h.mapping=oi),h}function l(h){let f=0,x=6;for(let _=0;_<x;_++)h[_]!==void 0&&f++;return f===x}function c(h){let f=h.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function cb(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ai("WebGLRenderer: "+n+" extension not supported."),i}}}function db(a,e,t,n){let i={},r=new WeakMap;function s(p){let h=p.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete i[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(p){let h=p.attributes;for(let f in h)e.update(h[f],a.ARRAY_BUFFER)}function c(p){let h=[],f=p.index,x=p.attributes.position,_=0;if(x===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let S=0,v=b.length;S<v;S+=3){let E=b[S+0],M=b[S+1],T=b[S+2];h.push(E,M,M,T,T,E)}}else{let b=x.array;_=x.version;for(let S=0,v=b.length/3-1;S<v;S+=3){let E=S+0,M=S+1,T=S+2;h.push(E,M,M,T,T,E)}}let m=new(x.count>=65535?Lr:Dr)(h,1);m.version=_;let u=r.get(p);u&&e.remove(u),r.set(p,m)}function d(p){let h=r.get(p);if(h){let f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function ub(a,e,t){let n;function i(p){n=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,h){a.drawElements(n,h,r,p*s),t.update(h,n,1)}function c(p,h,f){f!==0&&(a.drawElementsInstanced(n,h,r,p*s,f),t.update(h,n,f))}function d(p,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function hb(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pb(a,e,t){let n=new WeakMap,i=new Rt;function r(s,o,l){let c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==p){let A=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;f===!0&&(S=1),x===!0&&(S=2),_===!0&&(S=3);let v=o.attributes.position.count*S,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*E*4*p),T=new Cr(M,v,E,p);T.type=In,T.needsUpdate=!0;let g=S*4;for(let C=0;C<p;C++){let R=m[C],I=u[C],U=b[C],L=v*E*4*C;for(let B=0;B<R.count;B++){let Z=B*g;f===!0&&(i.fromBufferAttribute(R,B),M[L+Z+0]=i.x,M[L+Z+1]=i.y,M[L+Z+2]=i.z,M[L+Z+3]=0),x===!0&&(i.fromBufferAttribute(I,B),M[L+Z+4]=i.x,M[L+Z+5]=i.y,M[L+Z+6]=i.z,M[L+Z+7]=0),_===!0&&(i.fromBufferAttribute(U,B),M[L+Z+8]=i.x,M[L+Z+9]=i.y,M[L+Z+10]=i.z,M[L+Z+11]=U.itemSize===4?i.w:1)}}h={count:p,texture:T,size:new je(v,E)},n.set(o,h),o.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",x),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:r}}function fb(a,e,t,n,i){let r=new WeakMap;function s(c){let d=i.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}var mb={[rd]:"LINEAR_TONE_MAPPING",[sd]:"REINHARD_TONE_MAPPING",[od]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[cd]:"AGX_TONE_MAPPING",[dd]:"NEUTRAL_TONE_MAPPING",[ld]:"CUSTOM_TONE_MAPPING"};function gb(a,e,t,n,i,r){let s=new cn(e,t,{type:a,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ht;c.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tt([0,2,0,0,2,0],2));let d=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ye(c,d),h=new ki(-1,1,1,-1,0,1),f=null,x=null,_=!1,m,u=null,b=[],S=!1;this.setSize=function(v,E){s.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let M=0;M<b.length;M++){let T=b[M];T.setSize&&T.setSize(v,E)}},this.setEffects=function(v){b=v,S=b.length>0&&b[0].isRenderPass===!0;let E=s.width,M=s.height;b.length>0&&o===null&&(o=new cn(E,M,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(E,M,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let g=b[T];g.setSize&&g.setSize(E,M)}},this.begin=function(v,E){if(_||v.toneMapping===kn&&b.length===0)return!1;if(u=E,E!==null){let M=E.width,T=E.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return S===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=kn,!0},this.hasRenderPass=function(){return S},this.end=function(v,E){v.toneMapping=m,_=!0;let M=s,T=o;for(let g=0;g<b.length;g++){let A=b[g];A.enabled!==!1&&(A.render(v,T,M,E),A.needsSwap!==!1&&(M=T,T=T===o?l:o))}if(f!==v.outputColorSpace||x!==v.toneMapping){f=v.outputColorSpace,x=v.toneMapping,d.defines={},dt.getTransfer(f)===bt&&(d.defines.SRGB_TRANSFER="");let g=mb[x];g&&(d.defines[g]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(u),v.render(p,h),u=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Cp=new nn,Id=new Ba(1,1),Rp=new Cr,Pp=new fo,Ip=new Ur,cp=[],dp=[],up=new Float32Array(16),hp=new Float32Array(9),pp=new Float32Array(4);function Ji(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,r=cp[i];if(r===void 0&&(r=new Float32Array(i),cp[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function zt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Gt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Bl(a,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function xb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function bb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;a.uniform2fv(this.addr,e),Gt(t,e)}}function vb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;a.uniform3fv(this.addr,e),Gt(t,e)}}function _b(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;a.uniform4fv(this.addr,e),Gt(t,e)}}function yb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;pp.set(n),a.uniformMatrix2fv(this.addr,!1,pp),Gt(t,n)}}function Sb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;hp.set(n),a.uniformMatrix3fv(this.addr,!1,hp),Gt(t,n)}}function Mb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;up.set(n),a.uniformMatrix4fv(this.addr,!1,up),Gt(t,n)}}function Eb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Ab(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;a.uniform2iv(this.addr,e),Gt(t,e)}}function Tb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;a.uniform3iv(this.addr,e),Gt(t,e)}}function wb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;a.uniform4iv(this.addr,e),Gt(t,e)}}function Cb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Rb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;a.uniform2uiv(this.addr,e),Gt(t,e)}}function Pb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;a.uniform3uiv(this.addr,e),Gt(t,e)}}function Ib(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;a.uniform4uiv(this.addr,e),Gt(t,e)}}function Db(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(Id.compareFunction=t.isReversedDepthBuffer()?Il:Pl,r=Id):r=Cp,t.setTexture2D(e||r,i)}function Lb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pp,i)}function Nb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ip,i)}function Fb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rp,i)}function Ub(a){switch(a){case 5126:return xb;case 35664:return bb;case 35665:return vb;case 35666:return _b;case 35674:return yb;case 35675:return Sb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Ab;case 35668:case 35672:return Tb;case 35669:case 35673:return wb;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Fb}}function Ob(a,e){a.uniform1fv(this.addr,e)}function Bb(a,e){let t=Ji(e,this.size,2);a.uniform2fv(this.addr,t)}function zb(a,e){let t=Ji(e,this.size,3);a.uniform3fv(this.addr,t)}function Gb(a,e){let t=Ji(e,this.size,4);a.uniform4fv(this.addr,t)}function Hb(a,e){let t=Ji(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function kb(a,e){let t=Ji(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Vb(a,e){let t=Ji(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function jb(a,e){a.uniform1iv(this.addr,e)}function $b(a,e){a.uniform2iv(this.addr,e)}function qb(a,e){a.uniform3iv(this.addr,e)}function Wb(a,e){a.uniform4iv(this.addr,e)}function Xb(a,e){a.uniform1uiv(this.addr,e)}function Yb(a,e){a.uniform2uiv(this.addr,e)}function Jb(a,e){a.uniform3uiv(this.addr,e)}function Zb(a,e){a.uniform4uiv(this.addr,e)}function Kb(a,e,t){let n=this.cache,i=e.length,r=Bl(t,i);zt(n,r)||(a.uniform1iv(this.addr,r),Gt(n,r));let s;this.type===a.SAMPLER_2D_SHADOW?s=Id:s=Cp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||s,r[o])}function Qb(a,e,t){let n=this.cache,i=e.length,r=Bl(t,i);zt(n,r)||(a.uniform1iv(this.addr,r),Gt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Pp,r[s])}function ev(a,e,t){let n=this.cache,i=e.length,r=Bl(t,i);zt(n,r)||(a.uniform1iv(this.addr,r),Gt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Ip,r[s])}function tv(a,e,t){let n=this.cache,i=e.length,r=Bl(t,i);zt(n,r)||(a.uniform1iv(this.addr,r),Gt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Rp,r[s])}function nv(a){switch(a){case 5126:return Ob;case 35664:return Bb;case 35665:return zb;case 35666:return Gb;case 35674:return Hb;case 35675:return kb;case 35676:return Vb;case 5124:case 35670:return jb;case 35667:case 35671:return $b;case 35668:case 35672:return qb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return Yb;case 36295:return Jb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}var Dd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ub(t.type)}},Ld=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nv(t.type)}},Nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Rd=/(\w+)(\])?(\[|\.)?/g;function fp(a,e){a.seq.push(e),a.map[e.id]=e}function av(a,e,t){let n=a.name,i=n.length;for(Rd.lastIndex=0;;){let r=Rd.exec(n),s=Rd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){fp(t,c===void 0?new Dd(o,a,e):new Ld(o,a,e));break}else{let p=t.map[o];p===void 0&&(p=new Nd(o),fp(t,p)),t=p}}}var Yi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);av(o,l,this)}let i=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let s=e[i];s.id in t&&n.push(s)}return n}};function mp(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var iv=37297,rv=0;function sv(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){let o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}var gp=new nt;function ov(a){dt._getMatrix(gp,dt.workingColorSpace,a);let e=`mat3( ${gp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(a)){case Tr:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function xp(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sv(a.getShaderSource(e),o)}else return r}function lv(a,e){let t=ov(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var cv={[rd]:"Linear",[sd]:"Reinhard",[od]:"Cineon",[Zr]:"ACESFilmic",[cd]:"AgX",[dd]:"Neutral",[ld]:"Custom"};function dv(a,e){let t=cv[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new F;function uv(){dt.getLuminanceCoefficients(Ll);let a=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hv(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function pv(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fv(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=a.getActiveAttrib(e,i),s=r.name,o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function cs(a){return a!==""}function bp(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vp(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(a){return a.replace(mv,xv)}var gv=new Map;function xv(a,e){let t=rt[e];if(t===void 0){let n=gv.get(e);if(n!==void 0)t=rt[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fd(t)}var bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(a){return a.replace(bv,vv)}function vv(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yp(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}var _v={[Jr]:"SHADOWMAP_TYPE_PCF",[Vi]:"SHADOWMAP_TYPE_VSM"};function yv(a){return _v[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sv={[Va]:"ENVMAP_TYPE_CUBE",[oi]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function Mv(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Sv[a.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ev={[oi]:"ENVMAP_MODE_REFRACTION"};function Av(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Ev[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Tv={[id]:"ENVMAP_BLENDING_MULTIPLY",[Bh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function wv(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Tv[a.combine]||"ENVMAP_BLENDING_NONE"}function Cv(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Rv(a,e,t,n){let i=a.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,l=yv(t),c=Mv(t),d=Av(t),p=wv(t),h=Cv(t),f=hv(t),x=pv(r),_=i.createProgram(),m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(cs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(cs).join(`
`),u.length>0&&(u+=`
`)):(m=[yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),u=[yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?rt.tonemapping_pars_fragment:"",t.toneMapping!==kn?dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),s=Fd(s),s=bp(s,t),s=vp(s,t),o=Fd(o),o=bp(o,t),o=vp(o,t),s=_p(s),o=_p(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=b+m+s,v=b+u+o,E=mp(i,i.VERTEX_SHADER,S),M=mp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(a.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(E)||"",L=i.getShaderInfoLog(M)||"",B=I.trim(),Z=U.trim(),Q=L.trim(),q=!0,J=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,_,E,M);else{let j=xp(i,E,"vertex"),se=xp(i,M,"fragment");et("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+j+`
`+se)}else B!==""?Je("WebGLProgram: Program Info Log:",B):(Z===""||Q==="")&&(J=!1);J&&(R.diagnostics={runnable:q,programLog:B,vertexShader:{log:Z,prefix:m},fragmentShader:{log:Q,prefix:u}})}i.deleteShader(E),i.deleteShader(M),g=new Yi(i,_),A=fv(i,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,iv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=M,this}var Pv=0,Ud=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Od(e),t.set(e,n)),n}},Od=class{constructor(e){this.id=Pv++,this.code=e,this.usedTimes=0}};function Iv(a){return a===qa||a===is||a===rs}function Dv(a,e,t,n,i,r){let s=new Rr,o=new Ud,l=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,A,C,R,I,U){let L=R.fog,B=I.geometry,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=e.get(g.envMap||Z,Q),J=q&&q.mapping===Kr?q.image.height:null,j=f[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Je("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));let se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=se!==void 0?se.length:0,k=0;B.morphAttributes.position!==void 0&&(k=1),B.morphAttributes.normal!==void 0&&(k=2),B.morphAttributes.color!==void 0&&(k=3);let ue,_e,Me,V;if(j){let At=ra[j];ue=At.vertexShader,_e=At.fragmentShader}else{ue=g.vertexShader,_e=g.fragmentShader;let At=o.getVertexShaderStage(g),gt=o.getFragmentShaderStage(g);o.update(g,At,gt),Me=At.id,V=gt.id}let H=a.getRenderTarget(),ce=a.state.buffers.depth.getReversed(),pe=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,N=!!g.map,oe=!!g.matcap,me=!!q,be=!!g.aoMap,ve=!!g.lightMap,Re=!!g.bumpMap&&g.wireframe===!1,he=!!g.normalMap,ee=!!g.displacementMap,K=!!g.emissiveMap,re=!!g.metalnessMap,ge=!!g.roughnessMap,D=g.anisotropy>0,Be=g.clearcoat>0,Ee=g.dispersion>0,P=g.retroreflectivity>0,y=g.iridescence>0,O=g.sheen>0,$=g.transmission>0,ne=D&&!!g.anisotropyMap,ye=Be&&!!g.clearcoatMap,Ae=Be&&!!g.clearcoatNormalMap,ie=Be&&!!g.clearcoatRoughnessMap,le=y&&!!g.iridescenceMap,Te=y&&!!g.iridescenceThicknessMap,He=O&&!!g.sheenColorMap,Ce=O&&!!g.sheenRoughnessMap,we=!!g.specularMap,qe=!!g.specularColorMap,Ze=!!g.specularIntensityMap,at=$&&!!g.transmissionMap,G=$&&!!g.thicknessMap,Pe=!!g.gradientMap,de=!!g.alphaMap,Ie=g.alphaTest>0,Fe=!!g.alphaHash,xe=!!g.extensions,Xe=kn;g.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xe=a.toneMapping);let ke={shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:ue,fragmentShader:_e,defines:g.defines,customVertexShaderID:Me,customFragmentShaderID:V,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:pe,instancingColor:pe&&I.instanceColor!==null,instancingMorph:pe&&I.morphTexture!==null,outputColorSpace:H===null?a.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:N,matcap:oe,envMap:me,envMapMode:me&&q.mapping,envMapCubeUVHeight:J,aoMap:be,lightMap:ve,bumpMap:Re,normalMap:he,displacementMap:ee,emissiveMap:K,normalMapObjectSpace:he&&g.normalMapType===kh,normalMapTangentSpace:he&&g.normalMapType===Rl,packedNormalMap:he&&g.normalMapType===Rl&&Iv(g.normalMap.format),metalnessMap:re,roughnessMap:ge,anisotropy:D,anisotropyMap:ne,clearcoat:Be,clearcoatMap:ye,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ie,dispersion:Ee,retroreflection:P,iridescence:y,iridescenceMap:le,iridescenceThicknessMap:Te,sheen:O,sheenColorMap:He,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:qe,specularIntensityMap:Ze,transmission:$,transmissionMap:at,thicknessMap:G,gradientMap:Pe,opaque:g.transparent===!1&&g.blending===ji&&g.alphaToCoverage===!1,alphaMap:de,alphaTest:Ie,alphaHash:Fe,combine:g.combine,mapUv:N&&x(g.map.channel),aoMapUv:be&&x(g.aoMap.channel),lightMapUv:ve&&x(g.lightMap.channel),bumpMapUv:Re&&x(g.bumpMap.channel),normalMapUv:he&&x(g.normalMap.channel),displacementMapUv:ee&&x(g.displacementMap.channel),emissiveMapUv:K&&x(g.emissiveMap.channel),metalnessMapUv:re&&x(g.metalnessMap.channel),roughnessMapUv:ge&&x(g.roughnessMap.channel),anisotropyMapUv:ne&&x(g.anisotropyMap.channel),clearcoatMapUv:ye&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(g.sheenRoughnessMap.channel),specularMapUv:we&&x(g.specularMap.channel),specularColorMapUv:qe&&x(g.specularColorMap.channel),specularIntensityMapUv:Ze&&x(g.specularIntensityMap.channel),transmissionMapUv:at&&x(g.transmissionMap.channel),thicknessMapUv:G&&x(g.thicknessMap.channel),alphaMapUv:de&&x(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(he||D),vertexNormals:!!B.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(N||de),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||B.attributes.normal===void 0&&he===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ce,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:k,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:Xe,decodeVideoTexture:N&&g.map.isVideoTexture===!0&&dt.getTransfer(g.map.colorSpace)===bt,decodeVideoTextureEmissive:K&&g.emissiveMap.isVideoTexture===!0&&dt.getTransfer(g.emissiveMap.colorSpace)===bt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Pn,flipSided:g.side===an,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:xe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&g.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(g){let A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(let C in g.defines)A.push(C),A.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(u(A,g),b(A,g),A.push(a.outputColorSpace)),A.push(g.customProgramCacheKey),A.join()}function u(g,A){g.push(A.precision),g.push(A.outputColorSpace),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.mapUv),g.push(A.alphaMapUv),g.push(A.lightMapUv),g.push(A.aoMapUv),g.push(A.bumpMapUv),g.push(A.normalMapUv),g.push(A.displacementMapUv),g.push(A.emissiveMapUv),g.push(A.metalnessMapUv),g.push(A.roughnessMapUv),g.push(A.anisotropyMapUv),g.push(A.clearcoatMapUv),g.push(A.clearcoatNormalMapUv),g.push(A.clearcoatRoughnessMapUv),g.push(A.iridescenceMapUv),g.push(A.iridescenceThicknessMapUv),g.push(A.sheenColorMapUv),g.push(A.sheenRoughnessMapUv),g.push(A.specularMapUv),g.push(A.specularColorMapUv),g.push(A.specularIntensityMapUv),g.push(A.transmissionMapUv),g.push(A.thicknessMapUv),g.push(A.combine),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numSunLights),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numSunLightShadows),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.numLightProbes),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function b(g,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function S(g){let A=f[g.type],C;if(A){let R=ra[A];C=np.clone(R.uniforms)}else C=g.uniforms;return C}function v(g,A){let C=d.get(A);return C!==void 0?++C.usedTimes:(C=new Rv(a,A,g,i),c.push(C),d.set(A,C)),C}function E(g){if(--g.usedTimes===0){let A=c.indexOf(g);c[A]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function M(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:T}}function Lv(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Nv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Sp(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Mp(){let a=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,x,_,m,u){let b=a[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:x,materialVariant:s(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:u},a[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=x,b.materialVariant=s(h),b.groupOrder=_,b.renderOrder=h.renderOrder,b.z=m,b.group=u),e++,b}function l(h,f,x,_,m,u,b){b.reversedDepth===!0&&(m=-m);let S=o(h,f,x,_,m,u);x.transmission>0?n.push(S):x.transparent===!0?i.push(S):t.push(S)}function c(h,f,x,_,m,u){let b=o(h,f,x,_,m,u);x.transmission>0?n.unshift(b):x.transparent===!0?i.unshift(b):t.unshift(b)}function d(h,f){t.length>1&&t.sort(h||Nv),n.length>1&&n.sort(f||Sp),i.length>1&&i.sort(f||Sp)}function p(){for(let h=e,f=a.length;h<f;h++){let x=a[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:p,sort:d}}function Fv(){let a=new WeakMap;function e(n,i){let r=a.get(n),s;return r===void 0?(s=new Mp,a.set(n,[s])):i>=r.length?(s=new Mp,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Uv(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new We};break;case"SpotLight":t={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return a[e.id]=t,t}}}function Ov(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var Bv=0;function zv(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Gv(a){let e=new Uv,t=Ov(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new vt,s=new vt;function o(c){let d=0,p=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,x=0,_=0,m=0,u=0,b=0,S=0,v=0,E=0,M=0,T=0,g=0,A=0,C=0;c.sort(zv);for(let I=0,U=c.length;I<U;I++){let L=c[I],B=L.color,Z=L.intensity,Q=L.distance,q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===qa?q=L.shadow.map.texture:q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=B.r*Z,p+=B.g*Z,h+=B.b*Z;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],Z);C++}else if(L.isSunLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,se=t.get(L);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[x]=se,n.sunShadowMap[x]=q;let Se=j.getViewportCount();for(let k=0;k<Se;k++)n.sunShadowMatrix[_+k]=j.getMatrix(k),n.sunShadowCascade[_+k]=j._cascadeData[k];_+=Se,x++}n.sun[f]=J,f++}else if(L.isDirectionalLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,se=t.get(L);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=L.shadow.matrix,E++}n.directional[m]=J,m++}else if(L.isSpotLight){let J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(B).multiplyScalar(Z),J.distance=Q,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[b]=J;let j=L.shadow;if(L.map&&(n.spotLightMap[g]=L.map,g++,j.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[b]=j.matrix,L.castShadow){let se=t.get(L);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,n.spotShadow[b]=se,n.spotShadowMap[b]=q,T++}b++}else if(L.isRectAreaLight){let J=e.get(L);J.color.copy(B).multiplyScalar(Z),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=J,S++}else if(L.isPointLight){let J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){let j=L.shadow,se=t.get(L);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,se.shadowCameraNear=j.camera.near,se.shadowCameraFar=j.camera.far,n.pointShadow[u]=se,n.pointShadowMap[u]=q,n.pointShadowMatrix[u]=L.shadow.matrix,M++}n.point[u]=J,u++}else if(L.isHemisphereLight){let J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(Z),J.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[v]=J,v++}}S>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=h;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==u||R.spotLength!==b||R.rectAreaLength!==S||R.hemiLength!==v||R.numSunShadows!==x||R.numDirectionalShadows!==E||R.numPointShadows!==M||R.numSpotShadows!==T||R.numSpotMaps!==g||R.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=S,n.point.length=u,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+g-A,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,R.sunLength=f,R.directionalLength=m,R.pointLength=u,R.spotLength=b,R.rectAreaLength=S,R.hemiLength=v,R.numSunShadows=x,R.numDirectionalShadows=E,R.numPointShadows=M,R.numSpotShadows=T,R.numSpotMaps=g,R.numLightProbes=C,n.version=Bv++)}function l(c,d){let p=0,h=0,f=0,x=0,_=0,m=0,u=d.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){let v=c[b];if(v.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(u),p++}else if(v.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(u),h++}else if(v.isSpotLight){let E=n.spot[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(u),x++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(u),s.identity(),r.copy(v.matrixWorld),r.premultiply(u),s.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(u),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(u),m++}}}return{setup:o,setupView:l,state:n}}function Ep(a){let e=new Gv(a),t=[],n=[],i=[];function r(h){p.camera=h,t.length=0,n.length=0,i.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Hv(a){let e=new WeakMap;function t(i,r=0){let s=e.get(i),o;return s===void 0?(o=new Ep(a),e.set(i,[o])):r>=s.length?(o=new Ep(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vv=`uniform sampler2D shadow_pass;
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
}`,jv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],$v=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ap=new vt,ls=new F,Pd=new F;function qv(a,e,t){let n=new zi,i=new je,r=new je,s=new Rt,o=new Co,l=new Ro,c={},d=t.maxTextureSize,p={[ka]:an,[an]:ka,[Pn]:Pn},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:kv,fragmentShader:Vv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let x=new ht;x.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ye(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let u=this.type;this.render=function(M,T,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===vh&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jr);let A=a.getRenderTarget(),C=a.getActiveCubeFace(),R=a.getActiveMipmapLevel(),I=a.state;I.setBlending(aa),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=u!==this.type;U&&T.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=M.length;L<B;L++){let Z=M[L],Q=Z.shadow;if(Q===void 0){Je("WebGLShadowMap:",Z,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let q=Q.getFrameExtents();i.multiply(q),r.copy(Q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/q.x),i.x=r.x*q.x,Q.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/q.y),i.y=r.y*q.y,Q.mapSize.y=r.y));let J=a.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=J,Q.map===null||U===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Vi){if(Z.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new cn(i.x,i.y,{format:qa,type:jn,minFilter:$t,magFilter:$t,generateMipmaps:!1}),Q.map.texture.name=Z.name+".shadowMap",Q.map.depthTexture=new Ba(i.x,i.y,In),Q.map.depthTexture.name=Z.name+".shadowMapDepth",Q.map.depthTexture.format=Zn,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Vt,Q.map.depthTexture.magFilter=Vt}else Z.isPointLight?(Q.map=new Fl(i.x),Q.map.depthTexture=new bo(i.x,Vn)):(Q.map=new cn(i.x,i.y),Q.map.depthTexture=new Ba(i.x,i.y,Vn)),Q.map.depthTexture.name=Z.name+".shadowMap",Q.map.depthTexture.format=Zn,this.type===Jr?(Q.map.depthTexture.compareFunction=J?Il:Pl,Q.map.depthTexture.minFilter=$t,Q.map.depthTexture.magFilter=$t):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Vt,Q.map.depthTexture.magFilter=Vt);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==i.x||Q.map.height!==i.y)&&Q.map.setSize(i.x,i.y);let j=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();Z.isPointLight!==!0&&Q.updateMatrices(Z,g);for(let se=0;se<j;se++){let Se=Q.getCamera(se);if(Z.isPointLight){let k=Q.camera,ue=Q.matrix,_e=Z.distance||k.far;_e!==k.far&&(k.far=_e,k.updateProjectionMatrix()),ls.setFromMatrixPosition(Z.matrixWorld),k.position.copy(ls),Pd.copy(k.position),Pd.add(jv[se]),k.up.copy($v[se]),k.lookAt(Pd),k.updateMatrixWorld(),ue.makeTranslation(-ls.x,-ls.y,-ls.z),Ap.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Ap,k.coordinateSystem,k.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)a.setRenderTarget(Q.map,se),a.clear();else{se===0&&(a.setRenderTarget(Q.map),a.clear());let k=Q.getViewport(se);s.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),I.viewport(s)}n=Q.getFrustum(se),v(T,g,Se,Z,this.type)}Q.isPointLightShadow!==!0&&this.type===Vi&&b(Q,g),Q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,a.setRenderTarget(A,C,R)};function b(M,T){let g=e.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new cn(i.x,i.y,{format:qa,type:jn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(T,null,g,h,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(T,null,g,f,_,null)}function S(M,T,g,A){let C=null,R=g.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)C=R;else if(C=g.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let I=C.uuid,U=T.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let B=L[U];B===void 0&&(B=C.clone(),L[U]=B,T.addEventListener("dispose",E)),C=B}if(C.visible=T.visible,C.wireframe=T.wireframe,A===Vi?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:p[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let I=a.properties.get(C);I.light=g}return C}function v(M,T,g,A,C){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Vi)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,M.matrixWorld);let U=e.update(M),L=M.material;if(Array.isArray(L)){let B=U.groups;for(let Z=0,Q=B.length;Z<Q;Z++){let q=B[Z],J=L[q.materialIndex];if(J&&J.visible){let j=S(M,J,A,C);M.onBeforeShadow(a,M,T,g,U,j,q),a.renderBufferDirect(g,null,U,j,M,q),M.onAfterShadow(a,M,T,g,U,j,q)}}}else if(L.visible){let B=S(M,L,A,C);M.onBeforeShadow(a,M,T,g,U,B,null),a.renderBufferDirect(g,null,U,B,M,null),M.onAfterShadow(a,M,T,g,U,B,null)}}let I=M.children;for(let U=0,L=I.length;U<L;U++)v(I[U],T,g,A,C)}function E(M){M.target.removeEventListener("dispose",E);for(let g in c){let A=c[g],C=M.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function Wv(a,e){function t(){let G=!1,Pe=new Rt,de=null,Ie=new Rt(0,0,0,0);return{setMask:function(Fe){de!==Fe&&!G&&(a.colorMask(Fe,Fe,Fe,Fe),de=Fe)},setLocked:function(Fe){G=Fe},setClear:function(Fe,xe,Xe,ke,At){At===!0&&(Fe*=ke,xe*=ke,Xe*=ke),Pe.set(Fe,xe,Xe,ke),Ie.equals(Pe)===!1&&(a.clearColor(Fe,xe,Xe,ke),Ie.copy(Pe))},reset:function(){G=!1,de=null,Ie.set(-1,0,0,0)}}}function n(){let G=!1,Pe=!1,de=null,Ie=null,Fe=null;return{setReversed:function(xe){if(Pe!==xe){let Xe=e.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Pe=xe;let ke=Fe;Fe=null,this.setClear(ke)}},getReversed:function(){return Pe},setTest:function(xe){xe?H(a.DEPTH_TEST):ce(a.DEPTH_TEST)},setMask:function(xe){de!==xe&&!G&&(a.depthMask(xe),de=xe)},setFunc:function(xe){if(Pe&&(xe=ep[xe]),Ie!==xe){switch(xe){case to:a.depthFunc(a.NEVER);break;case no:a.depthFunc(a.ALWAYS);break;case ao:a.depthFunc(a.LESS);break;case Di:a.depthFunc(a.LEQUAL);break;case io:a.depthFunc(a.EQUAL);break;case ro:a.depthFunc(a.GEQUAL);break;case so:a.depthFunc(a.GREATER);break;case oo:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=xe}},setLocked:function(xe){G=xe},setClear:function(xe){Fe!==xe&&(Fe=xe,Pe&&(xe=1-xe),a.clearDepth(xe))},reset:function(){G=!1,de=null,Ie=null,Fe=null,Pe=!1}}}function i(){let G=!1,Pe=null,de=null,Ie=null,Fe=null,xe=null,Xe=null,ke=null,At=null;return{setTest:function(gt){G||(gt?H(a.STENCIL_TEST):ce(a.STENCIL_TEST))},setMask:function(gt){Pe!==gt&&!G&&(a.stencilMask(gt),Pe=gt)},setFunc:function(gt,Un,Wn){(de!==gt||Ie!==Un||Fe!==Wn)&&(a.stencilFunc(gt,Un,Wn),de=gt,Ie=Un,Fe=Wn)},setOp:function(gt,Un,Wn){(xe!==gt||Xe!==Un||ke!==Wn)&&(a.stencilOp(gt,Un,Wn),xe=gt,Xe=Un,ke=Wn)},setLocked:function(gt){G=gt},setClear:function(gt){At!==gt&&(a.clearStencil(gt),At=gt)},reset:function(){G=!1,Pe=null,de=null,Ie=null,Fe=null,xe=null,Xe=null,ke=null,At=null}}}let r=new t,s=new n,o=new i,l=new WeakMap,c=new WeakMap,d={},p={},h={},f=new WeakMap,x=[],_=null,m=!1,u=null,b=null,S=null,v=null,E=null,M=null,T=null,g=new We(0,0,0),A=0,C=!1,R=null,I=null,U=null,L=null,B=null,Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,q=0,J=a.getParameter(a.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),Q=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Q=q>=2);let j=null,se={},Se=a.getParameter(a.SCISSOR_BOX),k=a.getParameter(a.VIEWPORT),ue=new Rt().fromArray(Se),_e=new Rt().fromArray(k);function Me(G,Pe,de,Ie){let Fe=new Uint8Array(4),xe=a.createTexture();a.bindTexture(G,xe),a.texParameteri(G,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(G,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<de;Xe++)G===a.TEXTURE_3D||G===a.TEXTURE_2D_ARRAY?a.texImage3D(Pe,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Fe):a.texImage2D(Pe+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Fe);return xe}let V={};V[a.TEXTURE_2D]=Me(a.TEXTURE_2D,a.TEXTURE_2D,1),V[a.TEXTURE_CUBE_MAP]=Me(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[a.TEXTURE_2D_ARRAY]=Me(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),V[a.TEXTURE_3D]=Me(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(a.DEPTH_TEST),s.setFunc(Di),Re(!1),he(Kc),H(a.CULL_FACE),be(aa);function H(G){d[G]!==!0&&(a.enable(G),d[G]=!0)}function ce(G){d[G]!==!1&&(a.disable(G),d[G]=!1)}function pe(G,Pe){return h[G]!==Pe?(a.bindFramebuffer(G,Pe),h[G]=Pe,G===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=Pe),G===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=Pe),!0):!1}function fe(G,Pe){let de=x,Ie=!1;if(G){de=f.get(Pe),de===void 0&&(de=[],f.set(Pe,de));let Fe=G.textures;if(de.length!==Fe.length||de[0]!==a.COLOR_ATTACHMENT0){for(let xe=0,Xe=Fe.length;xe<Xe;xe++)de[xe]=a.COLOR_ATTACHMENT0+xe;de.length=Fe.length,Ie=!0}}else de[0]!==a.BACK&&(de[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(de)}function N(G){return _!==G?(a.useProgram(G),_=G,!0):!1}let oe={[si]:a.FUNC_ADD,[yh]:a.FUNC_SUBTRACT,[Sh]:a.FUNC_REVERSE_SUBTRACT};oe[Mh]=a.MIN,oe[Eh]=a.MAX;let me={[Ah]:a.ZERO,[Th]:a.ONE,[wh]:a.SRC_COLOR,[nd]:a.SRC_ALPHA,[Lh]:a.SRC_ALPHA_SATURATE,[Ih]:a.DST_COLOR,[Rh]:a.DST_ALPHA,[Ch]:a.ONE_MINUS_SRC_COLOR,[ad]:a.ONE_MINUS_SRC_ALPHA,[Dh]:a.ONE_MINUS_DST_COLOR,[Ph]:a.ONE_MINUS_DST_ALPHA,[Nh]:a.CONSTANT_COLOR,[Fh]:a.ONE_MINUS_CONSTANT_COLOR,[Uh]:a.CONSTANT_ALPHA,[Oh]:a.ONE_MINUS_CONSTANT_ALPHA};function be(G,Pe,de,Ie,Fe,xe,Xe,ke,At,gt){if(G===aa){m===!0&&(ce(a.BLEND),m=!1);return}if(m===!1&&(H(a.BLEND),m=!0),G!==_h){if(G!==u||gt!==C){if((b!==si||E!==si)&&(a.blendEquation(a.FUNC_ADD),b=si,E=si),gt)switch(G){case ji:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Qc:a.blendFunc(a.ONE,a.ONE);break;case ed:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case td:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:et("WebGLState: Invalid blending: ",G);break}else switch(G){case ji:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Qc:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ed:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case td:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",G);break}S=null,v=null,M=null,T=null,g.set(0,0,0),A=0,u=G,C=gt}return}Fe=Fe||Pe,xe=xe||de,Xe=Xe||Ie,(Pe!==b||Fe!==E)&&(a.blendEquationSeparate(oe[Pe],oe[Fe]),b=Pe,E=Fe),(de!==S||Ie!==v||xe!==M||Xe!==T)&&(a.blendFuncSeparate(me[de],me[Ie],me[xe],me[Xe]),S=de,v=Ie,M=xe,T=Xe),(ke.equals(g)===!1||At!==A)&&(a.blendColor(ke.r,ke.g,ke.b,At),g.copy(ke),A=At),u=G,C=!1}function ve(G,Pe){G.side===Pn?ce(a.CULL_FACE):H(a.CULL_FACE);let de=G.side===an;Pe&&(de=!de),Re(de),G.blending===ji&&G.transparent===!1?be(aa):be(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);let Ie=G.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),K(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?H(a.SAMPLE_ALPHA_TO_COVERAGE):ce(a.SAMPLE_ALPHA_TO_COVERAGE)}function Re(G){R!==G&&(G?a.frontFace(a.CW):a.frontFace(a.CCW),R=G)}function he(G){G!==xh?(H(a.CULL_FACE),G!==I&&(G===Kc?a.cullFace(a.BACK):G===bh?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ce(a.CULL_FACE),I=G}function ee(G){G!==U&&(Q&&a.lineWidth(G),U=G)}function K(G,Pe,de){G?(H(a.POLYGON_OFFSET_FILL),(L!==Pe||B!==de)&&(L=Pe,B=de,s.getReversed()&&(Pe=-Pe),a.polygonOffset(Pe,de))):ce(a.POLYGON_OFFSET_FILL)}function re(G){G?H(a.SCISSOR_TEST):ce(a.SCISSOR_TEST)}function ge(G){G===void 0&&(G=a.TEXTURE0+Z-1),j!==G&&(a.activeTexture(G),j=G)}function D(G,Pe,de){de===void 0&&(j===null?de=a.TEXTURE0+Z-1:de=j);let Ie=se[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},se[de]=Ie),(Ie.type!==G||Ie.texture!==Pe)&&(j!==de&&(a.activeTexture(de),j=de),a.bindTexture(G,Pe||V[G]),Ie.type=G,Ie.texture=Pe)}function Be(){let G=se[j];G!==void 0&&G.type!==void 0&&(a.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ee(){try{a.compressedTexImage2D(...arguments)}catch(G){et("WebGLState:",G)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(G){et("WebGLState:",G)}}function y(){try{a.texSubImage2D(...arguments)}catch(G){et("WebGLState:",G)}}function O(){try{a.texSubImage3D(...arguments)}catch(G){et("WebGLState:",G)}}function $(){try{a.compressedTexSubImage2D(...arguments)}catch(G){et("WebGLState:",G)}}function ne(){try{a.compressedTexSubImage3D(...arguments)}catch(G){et("WebGLState:",G)}}function ye(){try{a.texStorage2D(...arguments)}catch(G){et("WebGLState:",G)}}function Ae(){try{a.texStorage3D(...arguments)}catch(G){et("WebGLState:",G)}}function ie(){try{a.texImage2D(...arguments)}catch(G){et("WebGLState:",G)}}function le(){try{a.texImage3D(...arguments)}catch(G){et("WebGLState:",G)}}function Te(G){return p[G]!==void 0?p[G]:a.getParameter(G)}function He(G,Pe){p[G]!==Pe&&(a.pixelStorei(G,Pe),p[G]=Pe)}function Ce(G){ue.equals(G)===!1&&(a.scissor(G.x,G.y,G.z,G.w),ue.copy(G))}function we(G){_e.equals(G)===!1&&(a.viewport(G.x,G.y,G.z,G.w),_e.copy(G))}function qe(G,Pe){let de=c.get(Pe);de===void 0&&(de=new WeakMap,c.set(Pe,de));let Ie=de.get(G);Ie===void 0&&(Ie=a.getUniformBlockIndex(Pe,G.name),de.set(G,Ie))}function Ze(G,Pe){let Ie=c.get(Pe).get(G);l.get(Pe)!==Ie&&(a.uniformBlockBinding(Pe,Ie,G.__bindingPointIndex),l.set(Pe,Ie))}function at(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),d={},p={},j=null,se={},h={},f=new WeakMap,x=[],_=null,m=!1,u=null,b=null,S=null,v=null,E=null,M=null,T=null,g=new We(0,0,0),A=0,C=!1,R=null,I=null,U=null,L=null,B=null,ue.set(0,0,a.canvas.width,a.canvas.height),_e.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:H,disable:ce,bindFramebuffer:pe,drawBuffers:fe,useProgram:N,setBlending:be,setMaterial:ve,setFlipSided:Re,setCullFace:he,setLineWidth:ee,setPolygonOffset:K,setScissorTest:re,activeTexture:ge,bindTexture:D,unbindTexture:Be,compressedTexImage2D:Ee,compressedTexImage3D:P,texImage2D:ie,texImage3D:le,pixelStorei:He,getParameter:Te,updateUBOMapping:qe,uniformBlockBinding:Ze,texStorage2D:ye,texStorage3D:Ae,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:$,compressedTexSubImage3D:ne,scissor:Ce,viewport:we,reset:at}}function Xv(a,e,t,n,i,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap,p=new Set,h,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return x?new OffscreenCanvas(P,y):wr("canvas")}function m(P,y,O){let $=1,ne=Ee(P);if((ne.width>O||ne.height>O)&&($=O/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ye=Math.floor($*ne.width),Ae=Math.floor($*ne.height);h===void 0&&(h=_(ye,Ae));let ie=y?_(ye,Ae):h;return ie.width=ye,ie.height=Ae,ie.getContext("2d").drawImage(P,0,0,ye,Ae),Je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ye+"x"+Ae+")."),ie}else return"data"in P&&Je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function u(P){return P.generateMipmaps}function b(P){a.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(P,y,O,$,ne,ye=!1){if(P!==null){if(a[P]!==void 0)return a[P];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ae;$&&(Ae=e.get("EXT_texture_norm16"),Ae||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=y;if(y===a.RED&&(O===a.FLOAT&&(ie=a.R32F),O===a.HALF_FLOAT&&(ie=a.R16F),O===a.UNSIGNED_BYTE&&(ie=a.R8),O===a.UNSIGNED_SHORT&&Ae&&(ie=Ae.R16_EXT),O===a.SHORT&&Ae&&(ie=Ae.R16_SNORM_EXT)),y===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(ie=a.R8UI),O===a.UNSIGNED_SHORT&&(ie=a.R16UI),O===a.UNSIGNED_INT&&(ie=a.R32UI),O===a.BYTE&&(ie=a.R8I),O===a.SHORT&&(ie=a.R16I),O===a.INT&&(ie=a.R32I)),y===a.RG&&(O===a.FLOAT&&(ie=a.RG32F),O===a.HALF_FLOAT&&(ie=a.RG16F),O===a.UNSIGNED_BYTE&&(ie=a.RG8),O===a.UNSIGNED_SHORT&&Ae&&(ie=Ae.RG16_EXT),O===a.SHORT&&Ae&&(ie=Ae.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(ie=a.RG8UI),O===a.UNSIGNED_SHORT&&(ie=a.RG16UI),O===a.UNSIGNED_INT&&(ie=a.RG32UI),O===a.BYTE&&(ie=a.RG8I),O===a.SHORT&&(ie=a.RG16I),O===a.INT&&(ie=a.RG32I)),y===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(ie=a.RGB8UI),O===a.UNSIGNED_SHORT&&(ie=a.RGB16UI),O===a.UNSIGNED_INT&&(ie=a.RGB32UI),O===a.BYTE&&(ie=a.RGB8I),O===a.SHORT&&(ie=a.RGB16I),O===a.INT&&(ie=a.RGB32I)),y===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(ie=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(ie=a.RGBA16UI),O===a.UNSIGNED_INT&&(ie=a.RGBA32UI),O===a.BYTE&&(ie=a.RGBA8I),O===a.SHORT&&(ie=a.RGBA16I),O===a.INT&&(ie=a.RGBA32I)),y===a.RGB&&(O===a.UNSIGNED_SHORT&&Ae&&(ie=Ae.RGB16_EXT),O===a.SHORT&&Ae&&(ie=Ae.RGB16_SNORM_EXT),O===a.UNSIGNED_INT_5_9_9_9_REV&&(ie=a.RGB9_E5),O===a.UNSIGNED_INT_10F_11F_11F_REV&&(ie=a.R11F_G11F_B10F)),y===a.RGBA){let le=ye?Tr:dt.getTransfer(ne);O===a.FLOAT&&(ie=a.RGBA32F),O===a.HALF_FLOAT&&(ie=a.RGBA16F),O===a.UNSIGNED_BYTE&&(ie=le===bt?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT&&Ae&&(ie=Ae.RGBA16_EXT),O===a.SHORT&&Ae&&(ie=Ae.RGBA16_SNORM_EXT),O===a.UNSIGNED_SHORT_4_4_4_4&&(ie=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(ie=a.RGB5_A1)}return(ie===a.R16F||ie===a.R32F||ie===a.RG16F||ie===a.RG32F||ie===a.RGBA16F||ie===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(P,y){let O;return P?y===null||y===Vn||y===qi?O=a.DEPTH24_STENCIL8:y===In?O=a.DEPTH32F_STENCIL8:y===$i&&(O=a.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Vn||y===qi?O=a.DEPTH_COMPONENT24:y===In?O=a.DEPTH_COMPONENT32F:y===$i&&(O=a.DEPTH_COMPONENT16),O}function M(P,y){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==$t?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function T(P){let y=P.target;y.removeEventListener("dispose",T),A(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&p.delete(y)}function g(P){let y=P.target;y.removeEventListener("dispose",g),R(y)}function A(P){let y=n.get(P);if(y.__webglInit===void 0)return;let O=P.source,$=f.get(O);if($){let ne=$[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(P),Object.keys($).length===0&&f.delete(O)}n.remove(P)}function C(P){let y=n.get(P);a.deleteTexture(y.__webglTexture);let O=P.source,$=f.get(O);delete $[y.__cacheKey],s.memory.textures--}function R(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let ne=0;ne<y.__webglFramebuffer[$].length;ne++)a.deleteFramebuffer(y.__webglFramebuffer[$][ne]);else a.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)a.deleteFramebuffer(y.__webglFramebuffer[$]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=P.textures;for(let $=0,ne=O.length;$<ne;$++){let ye=n.get(O[$]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),s.memory.textures--),n.remove(O[$])}n.remove(P)}let I=0;function U(){I=0}function L(){return I}function B(P){I=P}function Z(){let P=I;return P>=i.maxTextures&&Je("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function Q(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function q(P,y){let O=n.get(P);if(P.isVideoTexture&&D(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){let $=P.image;if($===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(O,P,y);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+y)}function J(P,y){let O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){ce(O,P,y);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+y)}function j(P,y){let O=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){ce(O,P,y);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+y)}function se(P,y){let O=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){pe(O,P,y);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+y)}let Se={[Li]:a.REPEAT,[Jn]:a.CLAMP_TO_EDGE,[lo]:a.MIRRORED_REPEAT},k={[Vt]:a.NEAREST,[Gh]:a.NEAREST_MIPMAP_NEAREST,[Qr]:a.NEAREST_MIPMAP_LINEAR,[$t]:a.LINEAR,[$o]:a.LINEAR_MIPMAP_NEAREST,[ja]:a.LINEAR_MIPMAP_LINEAR},ue={[jh]:a.NEVER,[Yh]:a.ALWAYS,[$h]:a.LESS,[Pl]:a.LEQUAL,[qh]:a.EQUAL,[Il]:a.GEQUAL,[Wh]:a.GREATER,[Xh]:a.NOTEQUAL};function _e(P,y){if(y.type===In&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===$t||y.magFilter===$o||y.magFilter===Qr||y.magFilter===ja||y.minFilter===$t||y.minFilter===$o||y.minFilter===Qr||y.minFilter===ja)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,Se[y.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,Se[y.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,Se[y.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,k[y.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,k[y.minFilter]),y.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vt||y.minFilter!==Qr&&y.minFilter!==ja||y.type===In&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Me(P,y){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",T));let $=y.source,ne=f.get($);ne===void 0&&(ne={},f.set($,ne));let ye=Q(y);if(ye!==P.__cacheKey){ne[ye]===void 0&&(ne[ye]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),ne[ye].usedTimes++;let Ae=ne[P.__cacheKey];Ae!==void 0&&(ne[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&C(y)),P.__cacheKey=ye,P.__webglTexture=ne[ye].texture}return O}function V(P,y,O){return Math.floor(Math.floor(P/O)/y)}function H(P,y,O,$){let ye=P.updateRanges;if(ye.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,O,$,y.data);else{ye.sort((He,Ce)=>He.start-Ce.start);let Ae=0;for(let He=1;He<ye.length;He++){let Ce=ye[Ae],we=ye[He],qe=Ce.start+Ce.count,Ze=V(we.start,y.width,4),at=V(Ce.start,y.width,4);we.start<=qe+1&&Ze===at&&V(we.start+we.count-1,y.width,4)===Ze?Ce.count=Math.max(Ce.count,we.start+we.count-Ce.start):(++Ae,ye[Ae]=we)}ye.length=Ae+1;let ie=t.getParameter(a.UNPACK_ROW_LENGTH),le=t.getParameter(a.UNPACK_SKIP_PIXELS),Te=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let He=0,Ce=ye.length;He<Ce;He++){let we=ye[He],qe=Math.floor(we.start/4),Ze=Math.ceil(we.count/4),at=qe%y.width,G=Math.floor(qe/y.width),Pe=Ze,de=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,at),t.pixelStorei(a.UNPACK_SKIP_ROWS,G),t.texSubImage2D(a.TEXTURE_2D,0,at,G,Pe,de,O,$,y.data)}P.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,ie),t.pixelStorei(a.UNPACK_SKIP_PIXELS,le),t.pixelStorei(a.UNPACK_SKIP_ROWS,Te)}}function ce(P,y,O){let $=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=a.TEXTURE_3D);let ne=Me(P,y),ye=y.source;t.bindTexture($,P.__webglTexture,a.TEXTURE0+O);let Ae=n.get(ye);if(ye.version!==Ae.__version||ne===!0){if(t.activeTexture(a.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let de=dt.getPrimaries(dt.workingColorSpace),Ie=y.colorSpace===Sa?null:dt.getPrimaries(y.colorSpace),Fe=y.colorSpace===Sa||de===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let le=m(y.image,!1,i.maxTextureSize);le=Be(y,le);let Te=r.convert(y.format,y.colorSpace),He=r.convert(y.type),Ce=v(y.internalFormat,Te,He,y.normalized,y.colorSpace,y.isVideoTexture);_e($,y);let we,qe=y.mipmaps,Ze=y.isVideoTexture!==!0,at=Ae.__version===void 0||ne===!0,G=ye.dataReady,Pe=M(y,le);if(y.isDepthTexture)Ce=E(y.format===$a,y.type),at&&(Ze?t.texStorage2D(a.TEXTURE_2D,1,Ce,le.width,le.height):t.texImage2D(a.TEXTURE_2D,0,Ce,le.width,le.height,0,Te,He,null));else if(y.isDataTexture)if(qe.length>0){Ze&&at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,qe[0].width,qe[0].height);for(let de=0,Ie=qe.length;de<Ie;de++)we=qe[de],Ze?G&&t.texSubImage2D(a.TEXTURE_2D,de,0,0,we.width,we.height,Te,He,we.data):t.texImage2D(a.TEXTURE_2D,de,Ce,we.width,we.height,0,Te,He,we.data);y.generateMipmaps=!1}else Ze?(at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,le.width,le.height),G&&H(y,le,Te,He)):t.texImage2D(a.TEXTURE_2D,0,Ce,le.width,le.height,0,Te,He,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Ce,qe[0].width,qe[0].height,le.depth);for(let de=0,Ie=qe.length;de<Ie;de++)if(we=qe[de],y.format!==Dn)if(Te!==null)if(Ze){if(G)if(y.layerUpdates.size>0){let Fe=Ed(we.width,we.height,y.format,y.type);for(let xe of y.layerUpdates){let Xe=we.data.subarray(xe*Fe/we.data.BYTES_PER_ELEMENT,(xe+1)*Fe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,xe,we.width,we.height,1,Te,Xe)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,0,we.width,we.height,le.depth,Te,we.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,de,Ce,we.width,we.height,le.depth,0,we.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?G&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,0,we.width,we.height,le.depth,Te,He,we.data):t.texImage3D(a.TEXTURE_2D_ARRAY,de,Ce,we.width,we.height,le.depth,0,Te,He,we.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ze&&at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,qe[0].width,qe[0].height);for(let de=0,Ie=qe.length;de<Ie;de++)we=qe[de],y.format!==Dn?Te!==null?Ze?G&&t.compressedTexSubImage2D(a.TEXTURE_2D,de,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(a.TEXTURE_2D,de,Ce,we.width,we.height,0,we.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?G&&t.texSubImage2D(a.TEXTURE_2D,de,0,0,we.width,we.height,Te,He,we.data):t.texImage2D(a.TEXTURE_2D,de,Ce,we.width,we.height,0,Te,He,we.data)}else if(y.isDataArrayTexture)if(Ze){if(at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Ce,le.width,le.height,le.depth),G)if(y.layerUpdates.size>0){let de=Ed(le.width,le.height,y.format,y.type);for(let Ie of y.layerUpdates){let Fe=le.data.subarray(Ie*de/le.data.BYTES_PER_ELEMENT,(Ie+1)*de/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ie,le.width,le.height,1,Te,He,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,He,le.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,Te,He,le.data);else if(y.isData3DTexture)Ze?(at&&t.texStorage3D(a.TEXTURE_3D,Pe,Ce,le.width,le.height,le.depth),G&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,He,le.data)):t.texImage3D(a.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,Te,He,le.data);else if(y.isFramebufferTexture){if(at)if(Ze)t.texStorage2D(a.TEXTURE_2D,Pe,Ce,le.width,le.height);else{let de=le.width,Ie=le.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(a.TEXTURE_2D,Fe,Ce,de,Ie,0,Te,He,null),de>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){let de=a.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),le.parentNode!==de){de.appendChild(le),p.add(y),de.onpaint=Ie=>{let Fe=Ie.changedElements;for(let xe of p)Fe.includes(xe.image)&&(xe.needsUpdate=!0)},de.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,le);else{let Fe=a.RGBA,xe=a.RGBA,Xe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Fe,xe,Xe,le)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(qe.length>0){if(Ze&&at){let de=Ee(qe[0]);t.texStorage2D(a.TEXTURE_2D,Pe,Ce,de.width,de.height)}for(let de=0,Ie=qe.length;de<Ie;de++)we=qe[de],Ze?G&&t.texSubImage2D(a.TEXTURE_2D,de,0,0,Te,He,we):t.texImage2D(a.TEXTURE_2D,de,Ce,Te,He,we);y.generateMipmaps=!1}else if(Ze){if(at){let de=Ee(le);t.texStorage2D(a.TEXTURE_2D,Pe,Ce,de.width,de.height)}G&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Te,He,le)}else t.texImage2D(a.TEXTURE_2D,0,Ce,Te,He,le);u(y)&&b($),Ae.__version=ye.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function pe(P,y,O){if(y.image.length!==6)return;let $=Me(P,y),ne=y.source;t.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+O);let ye=n.get(ne);if(ne.version!==ye.__version||$===!0){t.activeTexture(a.TEXTURE0+O);let Ae=dt.getPrimaries(dt.workingColorSpace),ie=y.colorSpace===Sa?null:dt.getPrimaries(y.colorSpace),le=y.colorSpace===Sa||Ae===ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,He=y.image[0]&&y.image[0].isDataTexture,Ce=[];for(let xe=0;xe<6;xe++)!Te&&!He?Ce[xe]=m(y.image[xe],!0,i.maxCubemapSize):Ce[xe]=He?y.image[xe].image:y.image[xe],Ce[xe]=Be(y,Ce[xe]);let we=Ce[0],qe=r.convert(y.format,y.colorSpace),Ze=r.convert(y.type),at=v(y.internalFormat,qe,Ze,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,Pe=ye.__version===void 0||$===!0,de=ne.dataReady,Ie=M(y,we);_e(a.TEXTURE_CUBE_MAP,y);let Fe;if(Te){G&&Pe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,at,we.width,we.height);for(let xe=0;xe<6;xe++){Fe=Ce[xe].mipmaps;for(let Xe=0;Xe<Fe.length;Xe++){let ke=Fe[Xe];y.format!==Dn?qe!==null?G?de&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,ke.width,ke.height,qe,ke.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,at,ke.width,ke.height,0,ke.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,ke.width,ke.height,qe,Ze,ke.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,at,ke.width,ke.height,0,qe,Ze,ke.data)}}}else{if(Fe=y.mipmaps,G&&Pe){Fe.length>0&&Ie++;let xe=Ee(Ce[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(He){G?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ce[xe].width,Ce[xe].height,qe,Ze,Ce[xe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Ce[xe].width,Ce[xe].height,0,qe,Ze,Ce[xe].data);for(let Xe=0;Xe<Fe.length;Xe++){let At=Fe[Xe].image[xe].image;G?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,At.width,At.height,qe,Ze,At.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,at,At.width,At.height,0,qe,Ze,At.data)}}else{G?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,qe,Ze,Ce[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,qe,Ze,Ce[xe]);for(let Xe=0;Xe<Fe.length;Xe++){let ke=Fe[Xe];G?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,qe,Ze,ke.image[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,at,qe,Ze,ke.image[xe])}}}u(y)&&b(a.TEXTURE_CUBE_MAP),ye.__version=ne.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function fe(P,y,O,$,ne,ye){let Ae=r.convert(O.format,O.colorSpace),ie=r.convert(O.type),le=v(O.internalFormat,Ae,ie,O.normalized,O.colorSpace),Te=n.get(y),He=n.get(O);if(He.__renderTarget=y,!Te.__hasExternalTextures){let Ce=Math.max(1,y.width>>ye),we=Math.max(1,y.height>>ye);ne===a.TEXTURE_3D||ne===a.TEXTURE_2D_ARRAY?t.texImage3D(ne,ye,le,Ce,we,y.depth,0,Ae,ie,null):t.texImage2D(ne,ye,le,Ce,we,0,Ae,ie,null)}t.bindFramebuffer(a.FRAMEBUFFER,P),ge(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,ne,He.__webglTexture,0,re(y)):(ne===a.TEXTURE_2D||ne>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,ne,He.__webglTexture,ye),t.bindFramebuffer(a.FRAMEBUFFER,null)}function N(P,y,O){if(a.bindRenderbuffer(a.RENDERBUFFER,P),y.depthBuffer){let $=y.depthTexture,ne=$&&$.isDepthTexture?$.type:null,ye=E(y.stencilBuffer,ne),Ae=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ge(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,re(y),ye,y.width,y.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,re(y),ye,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,ye,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ae,a.RENDERBUFFER,P)}else{let $=y.textures;for(let ne=0;ne<$.length;ne++){let ye=$[ne],Ae=r.convert(ye.format,ye.colorSpace),ie=r.convert(ye.type),le=v(ye.internalFormat,Ae,ie,ye.normalized,ye.colorSpace);ge(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,re(y),le,y.width,y.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,re(y),le,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,le,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function oe(P,y,O){let $=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(y.depthTexture);if(ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture),_e(a.TEXTURE_CUBE_MAP,y.depthTexture);let Te=r.convert(y.depthTexture.format),He=r.convert(y.depthTexture.type),Ce;y.depthTexture.format===Zn?Ce=a.DEPTH_COMPONENT24:y.depthTexture.format===$a&&(Ce=a.DEPTH24_STENCIL8);for(let we=0;we<6;we++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ce,y.width,y.height,0,Te,He,null)}}else q(y.depthTexture,0);let ye=ne.__webglTexture,Ae=re(y),ie=$?a.TEXTURE_CUBE_MAP_POSITIVE_X+O:a.TEXTURE_2D,le=y.depthTexture.format===$a?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===Zn)ge(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,le,ie,ye,0,Ae):a.framebufferTexture2D(a.FRAMEBUFFER,le,ie,ye,0);else if(y.depthTexture.format===$a)ge(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,le,ie,ye,0,Ae):a.framebufferTexture2D(a.FRAMEBUFFER,le,ie,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(P){let y=n.get(P),O=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",ne)};$.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=$}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let $=0;$<6;$++)oe(y.__webglFramebuffer[$],P,$);else{let $=P.texture.mipmaps;$&&$.length>0?oe(y.__webglFramebuffer[0],P,0):oe(y.__webglFramebuffer,P,0)}else if(O){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=a.createRenderbuffer(),N(y.__webglDepthbuffer[$],P,!1);else{let ne=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ye=y.__webglDepthbuffer[$];a.bindRenderbuffer(a.RENDERBUFFER,ye),a.framebufferRenderbuffer(a.FRAMEBUFFER,ne,a.RENDERBUFFER,ye)}}else{let $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),N(y.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ye=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ye),a.framebufferRenderbuffer(a.FRAMEBUFFER,ne,a.RENDERBUFFER,ye)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function be(P,y,O){let $=n.get(P);y!==void 0&&fe($.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&me(P)}function ve(P){let y=P.texture,O=n.get(P),$=n.get(y);P.addEventListener("dispose",g);let ne=P.textures,ye=P.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=y.version,s.memory.textures++),ye){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let le=0;le<y.mipmaps.length;le++)O.__webglFramebuffer[ie][le]=a.createFramebuffer()}else O.__webglFramebuffer[ie]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)O.__webglFramebuffer[ie]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(Ae)for(let ie=0,le=ne.length;ie<le;ie++){let Te=n.get(ne[ie]);Te.__webglTexture===void 0&&(Te.__webglTexture=a.createTexture(),s.memory.textures++)}if(P.samples>0&&ge(P)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){let le=ne[ie];O.__webglColorRenderbuffer[ie]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);let Te=r.convert(le.format,le.colorSpace),He=r.convert(le.type),Ce=v(le.internalFormat,Te,He,le.normalized,le.colorSpace,P.isXRRenderTarget===!0),we=re(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,we,Ce,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ie,a.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),N(O.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ye){t.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),_e(a.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)fe(O.__webglFramebuffer[ie][le],P,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le);else fe(O.__webglFramebuffer[ie],P,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);u(y)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ie=0,le=ne.length;ie<le;ie++){let Te=ne[ie],He=n.get(Te),Ce=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ce,He.__webglTexture),_e(Ce,Te),fe(O.__webglFramebuffer,P,Te,a.COLOR_ATTACHMENT0+ie,Ce,0),u(Te)&&b(Ce)}t.unbindTexture()}else{let ie=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),_e(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)fe(O.__webglFramebuffer[le],P,y,a.COLOR_ATTACHMENT0,ie,le);else fe(O.__webglFramebuffer,P,y,a.COLOR_ATTACHMENT0,ie,0);u(y)&&b(ie),t.unbindTexture()}P.depthBuffer&&me(P)}function Re(P){let y=P.textures;for(let O=0,$=y.length;O<$;O++){let ne=y[O];if(u(ne)){let ye=S(P),Ae=n.get(ne).__webglTexture;t.bindTexture(ye,Ae),b(ye),t.unbindTexture()}}}let he=[],ee=[];function K(P){if(P.samples>0){if(ge(P)===!1){let y=P.textures,O=P.width,$=P.height,ne=a.COLOR_BUFFER_BIT,ye=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=n.get(P),ie=y.length>1;if(ie)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let le=P.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=a.STENCIL_BUFFER_BIT)),ie){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let He=n.get(y[Te]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,O,$,0,0,O,$,ne,a.NEAREST),l===!0&&(he.length=0,ee.length=0,he.push(a.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(he.push(ye),ee.push(ye),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ee)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ie)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let He=n.get(y[Te]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.TEXTURE_2D,He,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function re(P){return Math.min(i.maxSamples,P.samples)}function ge(P){let y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(P){let y=s.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function Be(P,y){let O=P.colorSpace,$=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==Ar&&O!==Sa&&(dt.getTransfer(O)===bt?($!==Dn||ne!==un)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",O)),y}function Ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=se,this.rebindTextures=be,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yv(a,e){function t(n,i=Sa){let r,s=dt.getTransfer(i);if(n===un)return a.UNSIGNED_BYTE;if(n===Wo)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return a.UNSIGNED_SHORT_5_5_5_1;if(n===fd)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===md)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===hd)return a.BYTE;if(n===pd)return a.SHORT;if(n===$i)return a.UNSIGNED_SHORT;if(n===qo)return a.INT;if(n===Vn)return a.UNSIGNED_INT;if(n===In)return a.FLOAT;if(n===jn)return a.HALF_FLOAT;if(n===gd)return a.ALPHA;if(n===xd)return a.RGB;if(n===Dn)return a.RGBA;if(n===Zn)return a.DEPTH_COMPONENT;if(n===$a)return a.DEPTH_STENCIL;if(n===Yo)return a.RED;if(n===Jo)return a.RED_INTEGER;if(n===qa)return a.RG;if(n===Zo)return a.RG_INTEGER;if(n===Ko)return a.RGBA_INTEGER;if(n===es||n===ts||n===ns||n===as)if(s===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===il||n===rl||n===sl||n===ol||n===is||n===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===il)return s===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===is)return r.COMPRESSED_RG11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===dl||n===ul||n===hl||n===pl||n===fl||n===ml||n===gl||n===xl||n===bl||n===vl||n===_l||n===yl||n===Sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return s===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===El||n===Al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return s===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===wl||n===rs||n===Cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var Jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zv=`
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

}`,Bd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Or(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:Jv,fragmentShader:Zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zd=class extends Kn{constructor(e,t){super();let n=this,i=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,f=null,x=null,_=typeof XRWebGLBinding<"u",m=new Bd,u={},b=t.getContextAttributes(),S=null,v=null,E=[],M=[],T=new je,g=null,A=null,C=new Jt;C.viewport=new Rt;let R=new Jt;R.viewport=new Rt;let I=[C,R],U=new ko,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let H=E[V];return H===void 0&&(H=new Oi,E[V]=H),H.getTargetRaySpace()},this.getControllerGrip=function(V){let H=E[V];return H===void 0&&(H=new Oi,E[V]=H),H.getGripSpace()},this.getHand=function(V){let H=E[V];return H===void 0&&(H=new Oi,E[V]=H),H.getHandSpace()};function Z(V){let H=M.indexOf(V.inputSource);if(H===-1)return;let ce=E[H];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||s),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",q);for(let V=0;V<E.length;V++){let H=M[V];H!==null&&(M[V]=null,E[V].disconnect(H))}L=null,B=null,m.reset();for(let V in u)delete u[V];if(e.setRenderTarget(S),f=null,h=null,p=null,i=null,v=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(T.width,T.height,!1),A!==null){let V=A.camera;V.fov=A.fov,V.zoom=A.zoom,V.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,pe=null,fe=null;b.depth&&(fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=b.stencil?$a:Zn,pe=b.stencil?qi:Vn);let N={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(N),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new cn(h.textureWidth,h.textureHeight,{format:Dn,type:un,depthTexture:new Ba(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ce={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new cn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(V){for(let H=0;H<V.removed.length;H++){let ce=V.removed[H],pe=M.indexOf(ce);pe>=0&&(M[pe]=null,E[pe].disconnect(ce))}for(let H=0;H<V.added.length;H++){let ce=V.added[H],pe=M.indexOf(ce);if(pe===-1){for(let N=0;N<E.length;N++)if(N>=M.length){M.push(ce),pe=N;break}else if(M[N]===null){M[N]=ce,pe=N;break}if(pe===-1)break}let fe=E[pe];fe&&fe.connect(ce)}}let J=new F,j=new F;function se(V,H,ce){J.setFromMatrixPosition(H.matrixWorld),j.setFromMatrixPosition(ce.matrixWorld);let pe=J.distanceTo(j),fe=H.projectionMatrix.elements,N=ce.projectionMatrix.elements,oe=fe[14]/(fe[10]-1),me=fe[14]/(fe[10]+1),be=(fe[9]+1)/fe[5],ve=(fe[9]-1)/fe[5],Re=(fe[8]-1)/fe[0],he=(N[8]+1)/N[0],ee=oe*Re,K=oe*he,re=pe/(-Re+he),ge=re*-Re;if(H.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ge),V.translateZ(re),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),fe[10]===-1)V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let D=oe+re,Be=me+re,Ee=ee-ge,P=K+(pe-ge),y=be*me/Be*D,O=ve*me/Be*D;V.projectionMatrix.makePerspective(Ee,P,y,O,D,Be),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Se(V,H){H===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(H.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let H=V.near,ce=V.far;m.texture!==null&&(m.depthNear>0&&(H=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),U.near=R.near=C.near=H,U.far=R.far=C.far=ce,(L!==U.near||B!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,B=U.far),U.layers.mask=V.layers.mask|6,C.layers.mask=U.layers.mask&-5,R.layers.mask=U.layers.mask&-3;let pe=V.parent,fe=U.cameras;Se(U,pe);for(let N=0;N<fe.length;N++)Se(fe[N],pe);fe.length===2?se(U,C,R):U.projectionMatrix.copy(C.projectionMatrix),A===null&&V.isPerspectiveCamera&&(A={camera:V,fov:V.fov,zoom:V.zoom}),k(V,U,pe)};function k(V,H,ce){ce===null?V.matrix.copy(H.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(H.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=uo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(V){return u[V]};let ue=null;function _e(V,H){if(d=H.getViewerPose(c||s),x=H,d!==null){let ce=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let pe=!1;ce.length!==U.cameras.length&&(U.cameras.length=0,pe=!0);for(let me=0;me<ce.length;me++){let be=ce[me],ve=null;if(f!==null)ve=f.getViewport(be);else{let he=p.getViewSubImage(h,be);ve=he.viewport,me===0&&(e.setRenderTargetTextures(v,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(v))}let Re=I[me];Re===void 0&&(Re=new Jt,Re.layers.enable(me),Re.viewport=new Rt,I[me]=Re),Re.matrix.fromArray(be.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(be.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ve.x,ve.y,ve.width,ve.height),me===0&&(U.matrix.copy(Re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),pe===!0&&U.cameras.push(Re)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let me=p.getDepthInformation(ce[0]);me&&me.isValid&&me.texture&&m.init(me,i.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let me=0;me<ce.length;me++){let be=ce[me].camera;if(be){let ve=u[be];ve||(ve=new Or,u[be]=ve);let Re=p.getCameraImage(be);ve.sourceTexture=Re}}}}for(let ce=0;ce<E.length;ce++){let pe=M[ce],fe=E[ce];pe!==null&&fe!==void 0&&fe.update(pe,H,c||s)}ue&&ue(V,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),x=null}let Me=new Tp;Me.setAnimationLoop(_e),this.setAnimationLoop=function(V){ue=V},this.dispose=function(){}}},Kv=new vt,Dp=new nt;Dp.set(-1,0,0,0,1,0,0,0,1);function Qv(a,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,yd(a)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,b,S,v){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,b,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===an&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===an&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let b=e.get(u),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dp),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,b,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=S*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e_(a,e,t,n){let i={},r={},s=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let M=E.program;n.uniformBlockBinding(v,M)}function c(v,E){let M=i[v.id];M===void 0&&(m(v),M=d(v),i[v.id]=M,v.addEventListener("dispose",b));let T=E.program;n.updateUBOMapping(v,T);let g=e.render.frame;r[v.id]!==g&&(h(v),r[v.id]=g)}function d(v){let E=p();v.__bindingPointIndex=E;let M=a.createBuffer(),T=v.__size,g=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,T,g),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,E,M),M}function p(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let E=i[v.id],M=v.uniforms,T=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,E);for(let g=0,A=M.length;g<A;g++){let C=M[g];if(Array.isArray(C))for(let R=0,I=C.length;R<I;R++)f(C[R],g,R,T);else f(C,g,0,T)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(v,E,M,T){if(_(v,E,M,T)===!0){let g=v.__offset,A=v.value;if(Array.isArray(A)){let C=0;for(let R=0;R<A.length;R++){let I=A[R],U=u(I);x(I,v.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,v.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,g,v.__data)}}function x(v,E,M){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,M)}function _(v,E,M,T){let g=v.value,A=E+"_"+M;if(T[A]===void 0)return typeof g=="number"||typeof g=="boolean"?T[A]=g:ArrayBuffer.isView(g)?T[A]=g.slice():T[A]=g.clone(),!0;{let C=T[A];if(typeof g=="number"||typeof g=="boolean"){if(C!==g)return T[A]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(C.equals(g)===!1)return C.copy(g),!0}}return!1}function m(v){let E=v.uniforms,M=0,T=16;for(let A=0,C=E.length;A<C;A++){let R=Array.isArray(E[A])?E[A]:[E[A]];for(let I=0,U=R.length;I<U;I++){let L=R[I],B=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,Q=B.length;Z<Q;Z++){let q=B[Z],J=u(q),j=M%T,se=j%J.boundary,Se=j+se;M+=se,Se!==0&&T-Se<J.storage&&(M+=T-Se),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=J.storage}}}let g=M%T;return g>0&&(M+=T-g),v.__size=M,v.__cache={},this}function u(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",v),E}function b(v){let E=v.target;E.removeEventListener("dispose",b);let M=s.indexOf(E.__bindingPointIndex);s.splice(M,1),a.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function S(){for(let v in i)a.deleteBuffer(i[v]);s=[],i={},r={}}return{bind:l,update:c,dispose:S}}var t_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ia=null;function n_(){return ia===null&&(ia=new Fr(t_,16,16,qa,jn),ia.name="DFG_LUT",ia.minFilter=$t,ia.magFilter=$t,ia.wrapS=Jn,ia.wrapT=Jn,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}var Ul=class{constructor(e={}){let{canvas:t=Zh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;let _=f,m=new Set([Ko,Zo,Jo]),u=new Set([un,Vn,$i,qi,Wo,Xo]),b=new Uint32Array(4),S=new Int32Array(4),v=new F,E=null,M=null,T=[],g=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,I=null,U=null,L=null,B=null;this._outputColorSpace=kt;let Z=0,Q=0,q=null,J=-1,j=null,se=new Rt,Se=new Rt,k=null,ue=new We(0),_e=0,Me=t.width,V=t.height,H=1,ce=null,pe=null,fe=new Rt(0,0,Me,V),N=new Rt(0,0,Me,V),oe=!1,me=new zi,be=!1,ve=!1,Re=new vt,he=new F,ee=new Rt,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function ge(){return q===null?H:1}let D=n;function Be(w,z){return t.getContext(w,z)}let Ee,P,y,O,$,ne,ye,Ae,ie,le,Te,He,Ce,we,qe,Ze,at,G,Pe,de,Ie,Fe,xe;try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Un,!1),D===null){let z="webgl2";if(D=Be(z,w),D===null)throw Be(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(w){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),et("WebGLRenderer: "+w.message),w}function Xe(){Ee=new cb(D),Ee.init(),Ie=new Yv(D,Ee),P=new Qx(D,Ee,e,Ie),y=new Wv(D,Ee),P.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),U=D.createFramebuffer(),L=D.createFramebuffer(),B=D.createFramebuffer(),O=new hb(D),$=new Lv,ne=new Xv(D,Ee,y,$,P,Ie,O),ye=new lb(C),Ae=new f0(D),Fe=new Zx(D,Ae),ie=new db(D,Ae,O,Fe),le=new fb(D,ie,Ae,Fe,O),G=new pb(D,P,ne),qe=new eb($),Te=new Dv(C,ye,Ee,P,Fe,qe),He=new Qv(C,$),Ce=new Fv,we=new Hv(Ee),at=new Jx(C,ye,y,le,x,l),Ze=new qv(C,le,P),xe=new e_(D,O,P,y),Pe=new Kx(D,Ee,O),de=new ub(D,Ee,O),O.programs=Te.programs,C.capabilities=P,C.extensions=Ee,C.properties=$,C.renderLists=Ce,C.shadowMap=Ze,C.state=y,C.info=O}_!==un&&(A=new gb(_,t.width,t.height,o,i,r));let ke=new zd(C,D);this.xr=ke,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(Me,V,!1))},this.getSize=function(w){return w.set(Me,V)},this.setSize=function(w,z,te=!0){if(ke.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,V=z,t.width=Math.floor(w*H),t.height=Math.floor(z*H),te===!0&&(t.style.width=w+"px",t.style.height=z+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(Me*H,V*H).floor()},this.setDrawingBufferSize=function(w,z,te){Me=w,V=z,H=te,t.width=Math.floor(w*te),t.height=Math.floor(z*te),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(_===un){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(se)},this.getViewport=function(w){return w.copy(fe)},this.setViewport=function(w,z,te,X){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,z,te,X),y.viewport(se.copy(fe).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,z,te,X){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,z,te,X),y.scissor(Se.copy(N).multiplyScalar(H).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){y.setScissorTest(oe=w)},this.setOpaqueSort=function(w){ce=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,te=!0){let X=0;if(w){let Y=!1;if(q!==null){let Ne=q.texture.format;Y=m.has(Ne)}if(Y){let Ne=q.texture.type,Oe=u.has(Ne),Le=at.getClearColor(),ze=at.getClearAlpha(),Ve=Le.r,it=Le.g,ot=Le.b;Oe?(b[0]=Ve,b[1]=it,b[2]=ot,b[3]=ze,D.clearBufferuiv(D.COLOR,0,b)):(S[0]=Ve,S[1]=it,S[2]=ot,S[3]=ze,D.clearBufferiv(D.COLOR,0,S))}else X|=D.COLOR_BUFFER_BIT}z&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),at.dispose(),Ce.dispose(),we.dispose(),$.dispose(),ye.dispose(),le.dispose(),Fe.dispose(),xe.dispose(),Te.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Du),ke.removeEventListener("sessionend",Lu),Ka.stop()};function At(w){w.preventDefault(),vd("WebGLRenderer: Context Lost."),R=!0}function gt(){vd("WebGLRenderer: Context Restored."),R=!1;let w=O.autoReset,z=Ze.enabled,te=Ze.autoUpdate,X=Ze.needsUpdate,Y=Ze.type;Xe(),O.autoReset=w,Ze.enabled=z,Ze.autoUpdate=te,Ze.needsUpdate=X,Ze.type=Y}function Un(w){et("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wn(w){let z=w.target;z.removeEventListener("dispose",Wn),um(z)}function um(w){hm(w),$.remove(w)}function hm(w){let z=$.get(w).programs;z!==void 0&&(z.forEach(function(te){Te.releaseProgram(te)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,te,X,Y,Ne){z===null&&(z=K);let Oe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Le=mm(w,z,te,X,Y);y.setMaterial(X,Oe);let ze=te.index,Ve=1;if(X.wireframe===!0){if(ze=ie.getWireframeAttribute(te),ze===void 0)return;Ve=2}let it=te.drawRange,ot=te.attributes.position,Ge=it.start*Ve,xt=(it.start+it.count)*Ve;Ne!==null&&(Ge=Math.max(Ge,Ne.start*Ve),xt=Math.min(xt,(Ne.start+Ne.count)*Ve)),ze!==null?(Ge=Math.max(Ge,0),xt=Math.min(xt,ze.count)):ot!=null&&(Ge=Math.max(Ge,0),xt=Math.min(xt,ot.count));let Ut=xt-Ge;if(Ut<0||Ut===1/0)return;Fe.setup(Y,X,Le,te,ze);let wt,St=Pe;if(ze!==null&&(wt=Ae.get(ze),St=de,St.setIndex(wt)),Y.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*ge()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(Y.isLine){let Wt=X.linewidth;Wt===void 0&&(Wt=1),y.setLineWidth(Wt*ge()),Y.isLineSegments?St.setMode(D.LINES):Y.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else Y.isPoints?St.setMode(D.POINTS):Y.isSprite&&St.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Wt=Y._multiDrawStarts,Ue=Y._multiDrawCounts,tn=Y._multiDrawCount,pt=ze?Ae.get(ze).bytesPerElement:1,Tn=$.get(X).currentProgram.getUniforms();for(let Xn=0;Xn<tn;Xn++)Tn.setValue(D,"_gl_DrawID",Xn),St.render(Wt[Xn]/pt,Ue[Xn])}else if(Y.isInstancedMesh)St.renderInstances(Ge,Ut,Y.count);else if(te.isInstancedBufferGeometry){let Wt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ue=Math.min(te.instanceCount,Wt);St.renderInstances(Ge,Ut,Ue)}else St.render(Ge,Ut)};function Iu(w,z,te,X){I!==null&&w.isNodeMaterial&&I.setObject(X,w),be===!0&&qe.setState(w,te,!1),w.transparent===!0&&w.side===Pn&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Ps(w,z,X),w.side=ka,w.needsUpdate=!0,Ps(w,z,X),w.side=Pn):Ps(w,z,X)}this.compile=function(w,z,te=null){te===null&&(te=w),I!==null&&I.renderStart(w,z,te),M=we.get(te),M.init(z),g.push(M),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),w!==te&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),ve=this.localClippingEnabled,be=qe.init(this.clippingPlanes,ve),be===!0&&qe.setGlobalState(this.clippingPlanes,z),I!==null&&Ze.render(M.state.shadowsArray,te,z);let X=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){let Le=Ne[Oe];Iu(Le,te,z,Y),X.add(Le)}else Iu(Ne,te,z,Y),X.add(Ne)}),M=g.pop(),I!==null&&I.renderEnd(),X},this.compileAsync=function(w,z,te=null){let X=this.compile(w,z,te);return new Promise(Y=>{function Ne(){if(X.forEach(function(Oe){let ze=$.get(Oe).currentProgram;(ze===void 0||ze.isReady())&&X.delete(Oe)}),X.size===0){Y(w);return}setTimeout(Ne,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let gc=null;function pm(w){gc&&gc(w)}function Du(){Ka.stop()}function Lu(){Ka.start()}let Ka=new Tp;Ka.setAnimationLoop(pm),typeof self<"u"&&Ka.setContext(self),this.setAnimationLoop=function(w){gc=w,ke.setAnimationLoop(w),w===null?Ka.stop():Ka.start()},ke.addEventListener("sessionstart",Du),ke.addEventListener("sessionend",Lu),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(w,z);let te=ke.enabled===!0&&ke.isPresenting===!0,X=A!==null&&(q===null||te)&&A.begin(C,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(z),z=ke.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,z,q),M=we.get(w,g.length),M.init(z),M.state.textureUnits=ne.getTextureUnits(),g.push(M),Re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),me.setFromProjectionMatrix(Re,Hn,z.reversedDepth),ve=this.localClippingEnabled,be=qe.init(this.clippingPlanes,ve),E=Ce.get(w,T.length),E.init(),T.push(E),ke.enabled===!0&&ke.isPresenting===!0){let Oe=C.xr.getDepthSensingMesh();Oe!==null&&xc(Oe,z,-1/0,C.sortObjects)}xc(w,z,0,C.sortObjects),E.finish(),I!==null&&I.updateLights(M.state.lightsArray),C.sortObjects===!0&&E.sort(ce,pe),re=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,re&&at.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&qe.beginShadows();let Y=M.state.shadowsArray;if(Ze.render(Y,w,z),be===!0&&qe.endShadows(),(X&&A.hasRenderPass())===!1){let Oe=E.opaque,Le=E.transmissive;if(M.setupLights(),z.isArrayCamera){let ze=z.cameras;if(Le.length>0)for(let Ve=0,it=ze.length;Ve<it;Ve++){let ot=ze[Ve];Fu(Oe,Le,w,ot)}re&&at.render(w);for(let Ve=0,it=ze.length;Ve<it;Ve++){let ot=ze[Ve];Nu(E,w,ot,ot.viewport)}}else Le.length>0&&Fu(Oe,Le,w,z),re&&at.render(w),Nu(E,w,z)}q!==null&&Q===0&&(ne.updateMultisampleRenderTarget(q),ne.updateRenderTargetMipmap(q)),X&&A.end(C),w.isScene===!0&&w.onAfterRender(C,w,z),Fe.resetDefaultState(),J=-1,j=null,g.pop(),g.length>0?(M=g[g.length-1],ne.setTextureUnits(M.state.textureUnits),be===!0&&qe.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,I!==null&&I.renderEnd()};function xc(w,z,te,X){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(me)){X&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);let Oe=le.update(w),Le=w.material;Le.visible&&E.push(w,Oe,Le,te,ee.z,null,z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(me))){let Oe=le.update(w),Le=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ee.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ee.copy(Oe.boundingSphere.center)),ee.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(Le)){let ze=Oe.groups;for(let Ve=0,it=ze.length;Ve<it;Ve++){let ot=ze[Ve],Ge=Le[ot.materialIndex];Ge&&Ge.visible&&E.push(w,Oe,Ge,te,ee.z,ot,z)}}else Le.visible&&E.push(w,Oe,Le,te,ee.z,null,z)}}let Ne=w.children;for(let Oe=0,Le=Ne.length;Oe<Le;Oe++)xc(Ne[Oe],z,te,X)}function Nu(w,z,te,X){let{opaque:Y,transmissive:Ne,transparent:Oe}=w;M.setupLightsView(te),be===!0&&qe.setGlobalState(C.clippingPlanes,te),X&&y.viewport(se.copy(X)),Y.length>0&&Rs(Y,z,te),Ne.length>0&&Rs(Ne,z,te),Oe.length>0&&Rs(Oe,z,te),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Fu(w,z,te,X){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){let Ge=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new cn(1,1,{generateMipmaps:!0,type:Ge?jn:un,minFilter:ja,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ne=M.state.transmissionRenderTarget[X.id],Oe=X.viewport||se;Ne.setSize(Oe.z*C.transmissionResolutionScale,Oe.w*C.transmissionResolutionScale);let Le=C.getRenderTarget(),ze=C.getActiveCubeFace(),Ve=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(ue),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),re&&at.render(te);let it=C.toneMapping;C.toneMapping=kn;let ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),be===!0&&qe.setGlobalState(C.clippingPlanes,X),Rs(w,te,X),ne.updateMultisampleRenderTarget(Ne),ne.updateRenderTargetMipmap(Ne),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let xt=0,Ut=z.length;xt<Ut;xt++){let wt=z[xt],{object:St,geometry:Wt,material:Ue,group:tn}=wt;if(Ue.side===Pn&&St.layers.test(X.layers)){let pt=Ue.side;Ue.side=an,Ue.needsUpdate=!0,Uu(St,te,X,Wt,Ue,tn),Ue.side=pt,Ue.needsUpdate=!0,Ge=!0}}Ge===!0&&(ne.updateMultisampleRenderTarget(Ne),ne.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Le,ze,Ve),C.setClearColor(ue,_e),ot!==void 0&&(X.viewport=ot),C.toneMapping=it}function Rs(w,z,te){let X=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Ne=w.length;Y<Ne;Y++){let Oe=w[Y],{object:Le,geometry:ze,group:Ve}=Oe,it=Oe.material;it.allowOverride===!0&&X!==null&&(it=X),Le.layers.test(te.layers)&&Uu(Le,z,te,ze,it,Ve)}}function Uu(w,z,te,X,Y,Ne){I!==null&&Y.isNodeMaterial&&I.setObject(w,Y),w.onBeforeRender(C,z,te,X,Y,Ne),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(C,z,te,X,w,Ne),Y.transparent===!0&&Y.side===Pn&&Y.forceSinglePass===!1?(Y.side=an,Y.needsUpdate=!0,C.renderBufferDirect(te,z,X,Y,w,Ne),Y.side=ka,Y.needsUpdate=!0,C.renderBufferDirect(te,z,X,Y,w,Ne),Y.side=Pn):C.renderBufferDirect(te,z,X,Y,w,Ne),w.onAfterRender(C,z,te,X,Y,Ne)}function Ps(w,z,te){z.isScene!==!0&&(z=K);let X=$.get(w),Y=M.state.lights,Ne=M.state.shadowsArray,Oe=Y.state.version,Le=Te.getParameters(w,Y.state,Ne,z,te,M.state.lightProbeGridArray),ze=Te.getProgramCacheKey(Le),Ve=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let it=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=ye.get(w.envMap||X.environment,it),X.envMapRotation=X.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",Wn),Ve=new Map,X.programs=Ve);let ot=Ve.get(ze);if(ot!==void 0){if(X.currentProgram===ot&&X.lightsStateVersion===Oe)return Bu(w,Le),ot}else Le.uniforms=Te.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,te,Le),w.onBeforeCompile(Le,C),ot=Te.acquireProgram(Le,ze),Ve.set(ze,ot),X.uniforms=Le.uniforms;let Ge=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=qe.uniform),Bu(w,Le),X.needsLights=xm(w),X.lightsStateVersion=Oe,X.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.sunLights.value=Y.state.sun,Ge.sunLightShadows.value=Y.state.sunShadow,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ge.sunShadowCascade.value=Y.state.sunShadowCascade,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=ot,X.uniformsList=null,ot}function Ou(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=Yi.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Bu(w,z){let te=$.get(w);te.outputColorSpace=z.outputColorSpace,te.batching=z.batching,te.batchingColor=z.batchingColor,te.instancing=z.instancing,te.instancingColor=z.instancingColor,te.instancingMorph=z.instancingMorph,te.skinning=z.skinning,te.morphTargets=z.morphTargets,te.morphNormals=z.morphNormals,te.morphColors=z.morphColors,te.morphTargetsCount=z.morphTargetsCount,te.numClippingPlanes=z.numClippingPlanes,te.numIntersection=z.numClipIntersection,te.vertexAlphas=z.vertexAlphas,te.vertexTangents=z.vertexTangents,te.toneMapping=z.toneMapping}function fm(w,z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let te=0,X=w.length;te<X;te++){let Y=w[te];if(Y.texture!==null&&Y.boundingBox.containsPoint(v))return Y}return null}function mm(w,z,te,X,Y){z.isScene!==!0&&(z=K),ne.resetTextureUnits();let Ne=z.fog,Oe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,Le=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:dt.workingColorSpace,ze=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ve=ye.get(X.envMap||Oe,ze),it=X.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ot=!!te.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ge=!!te.morphAttributes.position,xt=!!te.morphAttributes.normal,Ut=!!te.morphAttributes.color,wt=kn;X.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(wt=C.toneMapping);let St=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Wt=St!==void 0?St.length:0,Ue=$.get(X),tn=M.state.lights;if(be===!0&&(ve===!0||w!==j)){let Tt=w===j&&X.id===J;qe.setState(X,w,Tt)}let pt=!1;X.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==tn.state.version||Ue.outputColorSpace!==Le||Y.isBatchedMesh&&Ue.batching===!1||!Y.isBatchedMesh&&Ue.batching===!0||Y.isBatchedMesh&&Ue.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ue.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Y.isInstancedMesh&&Ue.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ue.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ue.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ue.instancingMorph===!1&&Y.morphTexture!==null||Ue.envMap!==Ve||X.fog===!0&&Ue.fog!==Ne||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==qe.numPlanes||Ue.numIntersection!==qe.numIntersection)||Ue.vertexAlphas!==it||Ue.vertexTangents!==ot||Ue.morphTargets!==Ge||Ue.morphNormals!==xt||Ue.morphColors!==Ut||Ue.toneMapping!==wt||Ue.morphTargetsCount!==Wt||!!Ue.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ue.__version=X.version);let Tn=Ue.currentProgram;pt===!0&&(Tn=Ps(X,z,Y),I&&X.isNodeMaterial&&I.onUpdateProgram(X,Tn,Ue));let Xn=!1,Ca=!1,mi=!1,yt=Tn.getUniforms(),Lt=Ue.uniforms;if(y.useProgram(Tn.program)&&(Xn=!0,Ca=!0,mi=!0),X.id!==J&&(J=X.id,Ca=!0),Ue.needsLights){let Tt=fm(M.state.lightProbeGridArray,Y);Ue.lightProbeGrid!==Tt&&(Ue.lightProbeGrid=Tt,Ca=!0)}if(Xn||j!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),yt.setValue(D,"projectionMatrix",w.projectionMatrix),yt.setValue(D,"viewMatrix",w.matrixWorldInverse);let Pa=yt.map.cameraPosition;Pa!==void 0&&Pa.setValue(D,he.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,Ca=!0,mi=!0)}if(Ue.needsLights&&(tn.state.sunShadowMap.length>0&&yt.setValue(D,"sunShadowMap",tn.state.sunShadowMap,ne),tn.state.directionalShadowMap.length>0&&yt.setValue(D,"directionalShadowMap",tn.state.directionalShadowMap,ne),tn.state.spotShadowMap.length>0&&yt.setValue(D,"spotShadowMap",tn.state.spotShadowMap,ne),tn.state.pointShadowMap.length>0&&yt.setValue(D,"pointShadowMap",tn.state.pointShadowMap,ne)),Y.isSkinnedMesh){yt.setOptional(D,Y,"bindMatrix"),yt.setOptional(D,Y,"bindMatrixInverse");let Tt=Y.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),yt.setValue(D,"boneTexture",Tt.boneTexture,ne))}Y.isBatchedMesh&&(yt.setOptional(D,Y,"batchingTexture"),yt.setValue(D,"batchingTexture",Y._matricesTexture,ne),yt.setOptional(D,Y,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",Y._indirectTexture,ne),yt.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",Y._colorsTexture,ne));let Ra=te.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0)&&G.update(Y,te,Tn),(Ca||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,yt.setValue(D,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(Lt.envMapIntensity.value=z.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=n_()),Ca){if(yt.setValue(D,"toneMappingExposure",C.toneMappingExposure),Ue.needsLights&&gm(Lt,mi),Ne&&X.fog===!0&&He.refreshFogUniforms(Lt,Ne),He.refreshMaterialUniforms(Lt,X,H,V,M.state.transmissionRenderTarget[w.id]),Ue.needsLights&&Ue.lightProbeGrid){let Tt=Ue.lightProbeGrid;Lt.probesSH.value=Tt.texture,Lt.probesMin.value.copy(Tt.boundingBox.min),Lt.probesMax.value.copy(Tt.boundingBox.max),Lt.probesResolution.value.copy(Tt.resolution)}Yi.upload(D,Ou(Ue),Lt,ne)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Yi.upload(D,Ou(Ue),Lt,ne),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yt.setValue(D,"center",Y.center),yt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(D,"normalMatrix",Y.normalMatrix),yt.setValue(D,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Tt=X.uniformsGroups;for(let Pa=0,gi=Tt.length;Pa<gi;Pa++){let Gu=Tt[Pa];xe.update(Gu,Tn),xe.bind(Gu,Tn)}}return Tn}function gm(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.sunLights.needsUpdate=z,w.sunLightShadows.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function xm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,z,te){let X=$.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(w.texture).__webglTexture=z,$.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:te,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){let te=$.get(w);te.__webglFramebuffer=z,te.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,te=0){q=w,Z=z,Q=te;let X=null,Y=!1,Ne=!1;if(w){let Le=$.get(w);if(Le.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,Le.__webglFramebuffer),se.copy(w.viewport),Se.copy(w.scissor),k=w.scissorTest,y.viewport(se),y.scissor(Se),y.setScissorTest(k),J=-1;return}else if(Le.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(Le.__hasExternalTextures)ne.rebindTextures(w,$.get(w.texture).__webglTexture,$.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let it=w.depthTexture;if(Le.__boundDepthTexture!==it){if(it!==null&&$.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}let ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);let Ve=$.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?X=Ve[z][te]:X=Ve[z],Y=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?X=$.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?X=Ve[te]:X=Ve,se.copy(w.viewport),Se.copy(w.scissor),k=w.scissorTest}else se.copy(fe).multiplyScalar(H).floor(),Se.copy(N).multiplyScalar(H).floor(),k=oe;if(te!==0&&(X=U),y.bindFramebuffer(D.FRAMEBUFFER,X)&&y.drawBuffers(w,X),y.viewport(se),y.scissor(Se),y.setScissorTest(k),Y){let Le=$.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,te)}else if(Ne){let Le=z;for(let ze=0;ze<w.textures.length;ze++){let Ve=$.get(w.textures[ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,te,Le)}}else if(w!==null&&te!==0){let Le=$.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Le.__webglTexture,te)}J=-1};function zu(w){let z=$.get(w);return(z.__readFormat!==w.format||z.__readType!==w.type)&&(z.__readFormat=w.format,z.__readType=w.type,z.__formatReadable=P.textureFormatReadable(w.format),z.__typeReadable=P.textureTypeReadable(w.type)),z}this.readRenderTargetPixels=function(w,z,te,X,Y,Ne,Oe,Le=0){if(!(w&&w.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){y.bindFramebuffer(D.FRAMEBUFFER,ze);try{let Ve=w.textures[Le],it=Ve.format,ot=Ve.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Le);let Ge=zu(Ve);if(Ge.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-X&&te>=0&&te<=w.height-Y&&D.readPixels(z,te,X,Y,Ie.convert(it),Ie.convert(ot),Ne)}finally{let Ve=q!==null?$.get(q).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,z,te,X,Y,Ne,Oe,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(z>=0&&z<=w.width-X&&te>=0&&te<=w.height-Y){y.bindFramebuffer(D.FRAMEBUFFER,ze);let Ve=w.textures[Le],it=Ve.format,ot=Ve.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Le);let Ge=zu(Ve);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xt),D.bufferData(D.PIXEL_PACK_BUFFER,Ne.byteLength,D.STREAM_READ),D.readPixels(z,te,X,Y,Ie.convert(it),Ie.convert(ot),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ut=q!==null?$.get(q).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Ut);let wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Qh(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ne),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(xt),D.deleteSync(wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,te=0){let X=Math.pow(2,-te),Y=Math.floor(w.image.width*X),Ne=Math.floor(w.image.height*X),Oe=z!==null?z.x:0,Le=z!==null?z.y:0;ne.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,te,0,0,Oe,Le,Y,Ne),y.unbindTexture()},this.copyTextureToTexture=function(w,z,te=null,X=null,Y=0,Ne=0){let Oe,Le,ze,Ve,it,ot,Ge,xt,Ut,wt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(te!==null)Oe=te.max.x-te.min.x,Le=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,Ve=te.min.x,it=te.min.y,ot=te.isBox3?te.min.z:0;else{let Lt=Math.pow(2,-Y);Oe=Math.floor(wt.width*Lt),Le=Math.floor(wt.height*Lt),w.isDataArrayTexture?ze=wt.depth:w.isData3DTexture?ze=Math.floor(wt.depth*Lt):ze=1,Ve=0,it=0,ot=0}X!==null?(Ge=X.x,xt=X.y,Ut=X.z):(Ge=0,xt=0,Ut=0);let St=Ie.convert(z.format),Wt=Ie.convert(z.type),Ue;z.isData3DTexture?(ne.setTexture3D(z,0),Ue=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ne.setTexture2DArray(z,0),Ue=D.TEXTURE_2D_ARRAY):(ne.setTexture2D(z,0),Ue=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let tn=y.getParameter(D.UNPACK_ROW_LENGTH),pt=y.getParameter(D.UNPACK_IMAGE_HEIGHT),Tn=y.getParameter(D.UNPACK_SKIP_PIXELS),Xn=y.getParameter(D.UNPACK_SKIP_ROWS),Ca=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(D.UNPACK_SKIP_ROWS,it),y.pixelStorei(D.UNPACK_SKIP_IMAGES,ot);let mi=w.isDataArrayTexture||w.isData3DTexture,yt=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){let Lt=$.get(w),Ra=$.get(z),Tt=$.get(Lt.__renderTarget),Pa=$.get(Ra.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,Tt.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let gi=0;gi<ze;gi++)mi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(w).__webglTexture,Y,ot+gi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(z).__webglTexture,Ne,Ut+gi)),D.blitFramebuffer(Ve,it,Oe,Le,Ge,xt,Oe,Le,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||$.has(w)){let Lt=$.get(w),Ra=$.get(z);y.bindFramebuffer(D.READ_FRAMEBUFFER,L),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let Tt=0;Tt<ze;Tt++)mi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,Y,ot+Tt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Lt.__webglTexture,Y),yt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ra.__webglTexture,Ne,Ut+Tt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ra.__webglTexture,Ne),Y!==0?D.blitFramebuffer(Ve,it,Oe,Le,Ge,xt,Oe,Le,D.COLOR_BUFFER_BIT,D.NEAREST):yt?D.copyTexSubImage3D(Ue,Ne,Ge,xt,Ut+Tt,Ve,it,Oe,Le):D.copyTexSubImage2D(Ue,Ne,Ge,xt,Ve,it,Oe,Le);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else yt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ue,Ne,Ge,xt,Ut,Oe,Le,ze,St,Wt,wt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ue,Ne,Ge,xt,Ut,Oe,Le,ze,St,wt.data):D.texSubImage3D(Ue,Ne,Ge,xt,Ut,Oe,Le,ze,St,Wt,wt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ne,Ge,xt,Oe,Le,St,Wt,wt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ne,Ge,xt,wt.width,wt.height,St,wt.data):D.texSubImage2D(D.TEXTURE_2D,Ne,Ge,xt,Oe,Le,St,Wt,wt);y.pixelStorei(D.UNPACK_ROW_LENGTH,tn),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Tn),y.pixelStorei(D.UNPACK_SKIP_ROWS,Xn),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Ca),Ne===0&&z.generateMipmaps&&D.generateMipmap(Ue),y.unbindTexture()},this.initRenderTarget=function(w){$.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){Z=0,Q=0,q=null,y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var zl=a=>typeof matchMedia=="function"?matchMedia(a):{matches:!1,addEventListener(){}},Zi=zl("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&zl("(hover: none)").matches,pM=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,fM=zl("(display-mode: standalone)").matches||zl("(display-mode: fullscreen)").matches||navigator.standalone===!0,Lp=new URLSearchParams(location.search),a_={aces:"aces",agx:"agx",neutral:"neutral"},Gl={variante:Lp.get("visual")==="nuevo"?"nuevo":"base",get nuevo(){return this.variante==="nuevo"},tono:a_[Lp.get("tono")]??null};function Np(){let a=window.devicePixelRatio||1,e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??8,n=Zi&&(e<=3||t<=4);return Zi?{movil:!0,bajo:n,pixelRatio:Math.min(a,n?1.15:1.5),minPixelRatio:.8,sombra:n?512:1024,antialias:a<2,lluvia:n?.35:.55,autosPorCarril:n?2:3}:{movil:!1,bajo:!1,pixelRatio:Math.min(a,1.75),minPixelRatio:1,sombra:2048,antialias:!0,lluvia:1,autosPorCarril:4}}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(a,e,t,n,i=0){let r=Math.max(0,Math.min(typeof i=="number"?i:i?.[0]??0,t/2,n/2));return this.moveTo(a+r,e),this.arcTo(a+t,e,a+t,e+n,r),this.arcTo(a+t,e+n,a,e+n,r),this.arcTo(a,e+n,a,e,r),this.arcTo(a,e,a+t,e,r),this.closePath(),this});var ct=a=>String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Gd={via:"Calle 50 Luisa, Sabana Norte, San Jos\xE9",atribucion:"\xA9 OpenStreetMap contributors (ODbL)",eje:[[12.75,-245.62],[7.04,-157.59],[-1.69,-41.67],[-2.78,6.89],[-3.6,24.31],[-5.75,55.28],[-7.13,78.66],[-8.96,128.18],[-9.45,141.34],[-10.83,178.46],[-12.75,245.62]],largo:492.1,cruces:[{d:88.2,p:[7.04,-157.59],vias:["service:sin nombre"]},{d:204.5,p:[-1.69,-41.67],vias:["residential:sin nombre","service:sin nombre"]},{d:253.1,p:[-2.78,6.89],vias:["service:sin nombre"]},{d:270.6,p:[-3.6,24.31],vias:["service:sin nombre"]},{d:301.6,p:[-5.75,55.28],vias:["residential:Avenida 9"]},{d:325,p:[-7.13,78.66],vias:["service:sin nombre"]},{d:374.6,p:[-8.96,128.18],vias:["service:sin nombre"]},{d:387.8,p:[-9.45,141.34],vias:["service:sin nombre"]},{d:424.9,p:[-10.83,178.46],vias:["service:sin nombre"]},{d:492.1,p:[-12.75,245.62],vias:["residential:Calle 50","secondary:Avenida de Las Am\xE9ricas"]}],postes:[{id:"P01",p:[-3.32,-88.06],lado:"oeste",material:"concreto",herrajes:["cruceta","aisladores","reservas de fibra en aro (3 o m\xE1s)"],d:158.4},{id:"P02",p:[6.04,-76.43],lado:"este",material:"concreto",herrajes:["cruceta","aisladores","luminaria"],d:169.2},{id:"P04",p:[4.93,-61.74],lado:"este",material:"met\xE1lico gris sobre pedestal de concreto",herrajes:["brazo diagonal","retenida con protector amarillo (28 s)"],d:184},{id:"P05",p:[-7.06,-30.25],lado:"oeste",material:"concreto",herrajes:["transformador","reservas de fibra en aro","caja de empalme (47 s)"],d:216},{id:"P06",p:[-8.36,16.97],lado:"oeste",material:"concreto",herrajes:["reservas de fibra en aro (5 o m\xE1s)","marcas de colores de operadores (~2 m)"],d:263.5},{id:"P07",p:[-10.42,48.85],lado:"oeste",material:"concreto",herrajes:["transformador","luminaria"],d:295.5},{id:"P08",p:[-13.03,100.22],lado:"oeste",material:"concreto",herrajes:["haz telecom grande"],d:346.8},{id:"P09",p:[-14.7,145.19],lado:"oeste",material:"concreto",herrajes:["luminaria"],d:391.8},{id:"P12",p:[-6.79,215.69],lado:"este",material:"concreto",herrajes:["luminaria"],d:462},{id:"P11",p:[-7.78,250.32],lado:"este",material:"concreto con franja amarilla y negra",herrajes:["reservas de fibra en aro"],d:496.7}],tendido:[{de:"P01",a:"P05"},{de:"P05",a:"P06"},{de:"P06",a:"P07"},{de:"P07",a:"P08"},{de:"P08",a:"P09"},{de:"P09",a:"P12",nota:"cruza la calle"},{de:"P12",a:"P11"}],arboles:[[-7.17,-25.14],[-7.31,-18.74],[-7.45,-12.33],[-7.59,-5.92],[-7.74,.49],[-7.88,6.75],[-8.19,13.14],[-8.48,19.52],[-8.82,25.8],[-9.26,32.2],[-9.71,38.6],[-10.15,45.01],[-10.6,51.41],[-11.01,57.87],[-11.39,64.27],[-11.77,70.68],[-12.14,77.08],[-12.41,83.3],[-12.63,89.34],[-12.86,95.38],[-13.08,101.42],[-13.31,107.46],[-13.53,113.5],[-13.74,119.54],[-13.97,125.57],[-14.22,132.29],[-14.48,139.46],[-14.74,146.63],[-15.02,153.83],[-15.28,161.01],[-15.55,168.2],[-15.82,175.39],[-16.05,182.45],[-16.24,189.34],[-16.44,196.24],[-16.64,203.14],[-16.84,210.04],[-17.03,216.93]],otros:[{que:"retenida (viento) con protector amarillo",p:[4.64,-57.9],lado:"este",d:187.8},{que:"gabinete verde con r\xF3tulos de peligro y bolardo amarillo",p:[3.49,-42.57],lado:"este",d:203.2},{que:"caja de empalme en el tendido P01-P05",p:[-6.97,-34.1],lado:"oeste",d:212.2},{que:"se\xF1al de zona escolar",p:[-7.77,1.76],lado:"oeste",d:248.1},{que:"parqu\xEDmetro solar",p:[-8.31,15.7],lado:"oeste",d:262.2},{que:"espacios de estacionamiento 5019 \u2192 5001, 5,7 m cada uno",p:[-8.6,22.07],lado:"oeste",d:268.6},{que:"se\xF1al de estacionamiento E",p:[-9.88,41.17],lado:"oeste",d:287.8},{que:"se\xF1al 25 KPH velocidad m\xE1xima",p:[-11.39,64.27],lado:"oeste",d:310.9},{que:"se\xF1al de zona escolar",p:[-12.68,90.55],lado:"oeste",d:337.1},{que:"se\xF1al de estacionamiento E",p:[-13.21,105.05],lado:"oeste",d:351.6},{que:"se\xF1al de ALTO en la esquina",p:[-17.58,236.24],lado:"oeste",d:482.9},{que:"verja gris sobre muro bajo, al fondo de la acera",p:[-7.17,-25.14],lado:"oeste",d:221.2},{que:"verja y portones azules, al fondo de la acera",p:[-8.67,23.35],lado:"oeste",d:269.9}],lugares:[{nombre:"MEP - Edificio Bloque A",d:0,a:24,lado:"este"},{nombre:"Avenida 17",d:0,a:60,lado:"este"},{nombre:"MEP - Parqueo Este",d:88.2,a:37,lado:"este"},{nombre:"Museo Hist\xF3rico y Tecnol\xF3gico Grupo ICE",d:88.2,a:42,lado:"oeste"},{nombre:"Suites Cristina",d:88.2,a:38,lado:"este"},{nombre:"MEP - Edificio Bloque B",d:88.2,a:52,lado:"este"},{nombre:"Palma Real Hotel y Casino",d:204.5,a:42,lado:"este"},{nombre:"Parque Palma Real",d:204.5,a:21,lado:"este"},{nombre:"Cond. Corobic\xED del Oeste",d:253.1,a:32,lado:"este"},{nombre:"MTA",d:253.1,a:32,lado:"este"},{nombre:"Cond. Menorca",d:270.6,a:26,lado:"este"},{nombre:"Consensus Abogados",d:325,a:20,lado:"este"},{nombre:"Restaurant Flor de Loto",d:325,a:29,lado:"este"},{nombre:"Aptos. Balot de Escaz\xFA",d:325,a:20,lado:"este"},{nombre:"Oficentro Las Torres",d:374.6,a:19,lado:"este"},{nombre:"Soka Gakkai Internacional de Costa Rica",d:424.9,a:18,lado:"este"},{nombre:"Soda Alberto",d:424.9,a:29,lado:"este"},{nombre:"Subway",d:492.1,a:26,lado:"este"},{nombre:"Agencia ICE",d:492.1,a:36,lado:"este"},{nombre:"ICE",d:492.1,a:21,lado:"oeste"},{nombre:"ICE Sabana",d:492.1,a:20,lado:"oeste"},{nombre:"Uno Sports",d:492.1,a:34,lado:"este"},{nombre:"KFC",d:492.1,a:41,lado:"este"},{nombre:"Avenida de Las Am\xE9ricas",d:492.1,a:13,lado:"oeste"}]};var Ki={x0:-3468.56,z0:-2412.63,paso:10,w:641,h:600,escala:60,lat0:9.94045,lon0:-84.102,kx:1827.481,kz:1842.333,origen:1134,fuente:"Terrain Tiles (Mapzen, AWS Open Data): SRTM, GMTED2010, ETOPO1 y otras fuentes abiertas"};var Fp="./datos-BGOTRZWN.bin";function Up(a){let e=[],t=0;for(let s=0;s<a.length-1;s++){let[o,l]=a[s],[c,d]=a[s+1],p=Math.hypot(c-o,d-l);e.push({x0:o,z0:l,tx:(c-o)/p,tz:(d-l)/p,l:p,d0:t}),t+=p}let n=s=>{let o=e[0];for(let l of e)if(l.d0<=s)o=l;else break;return o};function i(s,o=0,l={}){let c=n(s),d=s-c.d0;return l.x=c.x0+c.tx*d+c.tz*o,l.z=c.z0+c.tz*d-c.tx*o,l.tx=c.tx,l.tz=c.tz,l}function r(s,o,l={}){let c=1/0;for(let d=0;d<e.length;d++){let p=e[d],h=s-p.x0,f=o-p.z0,x=h*p.tx+f*p.tz;d>0&&(x=Math.max(0,x)),d<e.length-1&&(x=Math.min(p.l,x));let _=h-p.tx*x,m=f-p.tz*x,u=_*_+m*m;u<c&&(c=u,l.d=p.d0+x,l.a=_*p.tz-m*p.tx)}return l}return{largo:t,en:i,aVia:r}}function Op(a,e,t,n){let i={},r={};return function(o,l){for(let h of t){let f=o.x-h.x,x=o.z-h.z,_=h.r+l,m=f*f+x*x;if(m<_*_&&m>1e-9){let u=_/Math.sqrt(m);o.x=h.x+f*u,o.z=h.z+x*u}}a.aVia(o.x,o.z,i);let c=Math.max(n.d0,Math.min(n.d1,i.d)),d=Math.max(-n.a,Math.min(n.a,i.a)),p=c!==i.d||d!==i.a;i.d=c,i.a=d;for(let h of e){if(i.d<=h.d0-l||i.d>=h.d1+l||i.a<=h.a0-l||i.a>=h.a1+l)continue;let f=i.d-(h.d0-l),x=h.d1+l-i.d,_=i.a-(h.a0-l),m=h.a1+l-i.a,u=Math.min(f,x,_,m);u===f?i.d=h.d0-l:u===x?i.d=h.d1+l:u===_?i.a=h.a0-l:i.a=h.a1+l,p=!0}return p&&(a.en(i.d,i.a,r),o.x=r.x,o.z=r.z),o}}var Hl=new We;function _n(){let a=[],e=[],t=[],n=[];function i(l,c,d,p,h,f){let x=a.length/3;Hl.set(h);for(let _ of[l,c,d,p])a.push(_[0],_[1],_[2]),e.push(Hl.r,Hl.g,Hl.b);f?t.push(...f):t.push(0,0,0,0,0,0,0,0),n.push(x,x+1,x+2,x,x+2,x+3)}function r(l,c,d,p,{techo:h=p,bahia:f=0,piso:x=3.2}={}){for(let _=0;_<4;_++){let m=l[_],u=l[(_+1)%4],b=f?Math.max(1,Math.round(Math.hypot(u[0]-m[0],u[1]-m[1])/f)):0,S=f?Math.max(1,Math.round((d-c)/x)):0;i([m[0],c,m[1]],[u[0],c,u[1]],[u[0],d,u[1]],[m[0],d,m[1]],p,[0,0,b,0,b,S,0,S])}i([l[0][0],d,l[0][1]],[l[1][0],d,l[1][1]],[l[2][0],d,l[2][1]],[l[3][0],d,l[3][1]],h)}function s(l,c,d,p,h,f,x,_=0,m){let u=Math.cos(_),b=Math.sin(_),S=p/2,v=f/2;r([[-S,-v],[-S,v],[S,v],[S,-v]].map(([E,M])=>[l+E*u+M*b,d-E*b+M*u]),c,c+h,x,m)}function o(){let l=new ht;return l.setAttribute("position",new tt(a,3)),l.setAttribute("color",new tt(e,3)),l.setAttribute("uv",new tt(t,2)),l.setIndex(n),l.computeVertexNormals(),l}return{quad:i,prisma:r,caja:s,geometria:o}}var Qi=a=>()=>{a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};var Pt={asfalto:3882564,pintura:15329244,amarillo:14924079,acera:12433838,cordon:9736330,lote:7314520,pasto:6064713,concreto:11117980,madera:7035723,metal:9212569,losa:7630955,zinc:9325370},Bp=[14273972,13219740,14934230,12109004,14203296,13620930,14731686,11122630],rn=3.65,kl=6,yn=64,Vl=3.25,qt=.15,jl=.9,zp=-2.45,o_=[[/ICE Sabana/,{pisos:13,color:3108789,cartel:739983}],[/ICE|Museo/,{pisos:4,color:3834564,cartel:739983}],[/Hotel|Casino/,{pisos:9,color:15129016,cartel:8007214}],[/Cond|Aptos|Suites|Torres|MEP|Abogados|Soka/,{pisos:6,cartel:4082262}],[/Soda|Subway|KFC|Restaurant|Sports|MTA/,{pisos:1,cartel:10107678}]];function l_(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,64),e.fillStyle="#e4e4e0",e.fillRect(0,58,64,6),e.fillStyle="#d2d2cc",e.fillRect(16,14,32,32);let t=e.createLinearGradient(0,16,0,44);t.addColorStop(0,"#7f9db5"),t.addColorStop(1,"#3d5468"),e.fillStyle=t,e.fillRect(18,16,28,28),e.fillStyle="#d2d2cc",e.fillRect(31,16,2,28);let n=new Oa(a);return n.wrapS=n.wrapT=Li,n.colorSpace=kt,n.anisotropy=4,n}function Gp(a,e){let t=Qi(50),n={},i=_n(),r=_n(),s=_n(),o=_n(),l=(N,oe,me=0)=>(e.en(N,oe,n),[n.x,me,n.z]),c=N=>(e.en(N,0,n),Math.atan2(n.tx,n.tz));function d(N,oe,me,be,ve,Re,he,ee=8){let K=Math.max(1,Math.ceil((me-oe)/ee));for(let re=0;re<K;re++){let ge=oe+(me-oe)*re/K,D=oe+(me-oe)*(re+1)/K;N.quad(l(ge,be,Re),l(D,be,Re),l(D,ve,Re),l(ge,ve,Re),he)}}let p=(N,oe,me,be,ve,Re,he)=>{let ee=l(N,oe),K=l(me,be);i.quad([ee[0],ve,ee[2]],[K[0],ve,K[2]],[K[0],Re,K[2]],[ee[0],Re,ee[2]],he)},h=[0,...a.cruces.filter(N=>N.vias.some(oe=>/^(residential|secondary)/.test(oe))).map(N=>N.d)],f=-14,x=e.largo+14;d(i,f-60,x+60,-yn-40,yn+40,-.03,Pt.pasto,40),d(i,f,x,-rn,rn,0,Pt.asfalto);for(let N of h)for(let oe of[-1,1])d(i,N-Vl,N+Vl,oe>0?rn:-yn-40,oe>0?yn+40:-rn,0,Pt.asfalto,8);let _=[];for(let N=0;N<h.length-1;N++)_.push([h[N]+Vl,h[N+1]-Vl]);for(let[N,oe]of _)for(let me of[-1,1]){let be=me>0?rn:-kl,ve=me>0?kl:-rn,Re=me>0?kl:-yn,he=me>0?yn:-kl;d(i,N,oe,be,ve,qt,Pt.acera),d(i,N,oe,Re,he,qt,Pt.lote,16);let ee=Math.ceil((oe-N)/8);for(let K=0;K<ee;K++){let re=N+(oe-N)*K/ee,ge=N+(oe-N)*(K+1)/ee;me>0?p(re,rn,ge,rn,0,qt,Pt.cordon):p(ge,-rn,re,-rn,0,qt,Pt.cordon)}me>0?(p(N,yn,N,rn,0,qt,Pt.cordon),p(oe,rn,oe,yn,0,qt,Pt.cordon)):(p(N,-rn,N,-yn,0,qt,Pt.cordon),p(oe,-yn,oe,-rn,0,qt,Pt.cordon))}for(let N of[-1,1])d(i,f,x,N*3.42-.05,N*3.42+.05,.012,Pt.amarillo);let m=a.otros.find(N=>/espacios de estacionamiento/.test(N.que)),u={d0:m.d,n:19,paso:5.7,a:zp};d(i,m.d-1,m.d+u.n*u.paso,-1.36,-1.26,.012,Pt.pintura);for(let N=0;N<=u.n;N++)d(i,m.d+N*5.7-.05,m.d+N*5.7+.05,-3.4,-1.3,.012,Pt.pintura);d(i,e.largo-6.4,e.largo-6,-1.3,3.4,.012,Pt.pintura);let b=[],S=[],v=[];for(let[N,oe]of _)for(let me of["este","oeste"])for(let be=N+4;be<oe-12;){let ve=Math.min(14+t()*16,oe-4-be),Re=7.4+t()*3,he=12+t()*10;b.push({lado:me,d0:be,d1:be+ve,frente:Re,fondo:he,pisos:1+Math.floor(t()*t()*5),color:Bp[Math.floor(t()*Bp.length)]}),be+=ve+1.5+t()*3}let E=[];for(let N of a.lugares){let oe=b.filter(ve=>ve.lado===N.lado&&!ve.nombre);if(!oe.length)continue;let me=oe.reduce((ve,Re)=>Math.abs((Re.d0+Re.d1)/2-N.d)<Math.abs((ve.d0+ve.d1)/2-N.d)?Re:ve);if(me.nombre=N.nombre,/Parque|Parqueo/.test(N.nombre)){me.vacio=!0;continue}let be=o_.find(([ve])=>ve.test(N.nombre))?.[1]??{};Object.assign(me,be),E.push(me)}for(let N of b){if(N.vacio)continue;let oe=N.lado==="este"?1:-1,me=oe>0?N.frente:-(N.frente+N.fondo),be=oe>0?N.frente+N.fondo:-N.frente,ve=N.pisos*3.2+.6,Re=[l(N.d0,me),l(N.d1,me),l(N.d1,be),l(N.d0,be)].map(he=>[he[0],he[2]]);s.prisma(Re,qt,ve,N.color,{techo:N.pisos<=2?Pt.zinc:Pt.losa,bahia:3}),S.push({d0:N.d0,d1:N.d1,a0:me,a1:be}),Object.assign(N,{a0:me,a1:be,h:ve})}let M=document.createElement("canvas");M.width=M.height=1024;let T=M.getContext("2d");T.textAlign="center",T.textBaseline="middle",E.slice(0,32).forEach((N,oe)=>{let me=oe%2,be=oe>>1,ve=me*512,Re=be*64;T.fillStyle="#"+(N.cartel??2832970).toString(16).padStart(6,"0"),T.fillRect(ve,Re,512,64),T.fillStyle="#fff",T.font="bold 34px system-ui, Arial, sans-serif";let he=T.measureText(N.nombre).width;he>480&&(T.font=`bold ${Math.floor(34*480/he)}px system-ui, Arial, sans-serif`),T.fillText(N.nombre,ve+256,Re+34);let ee=N.lado==="este"?1:-1,K=ee>0?N.a0-.06:N.a1+.06,re=(N.d0+N.d1)/2,ge=Math.min(N.d1-N.d0-2,9)/2,D=Math.min(N.h-.9,3.7),Be=l(re-ee*ge,K),Ee=l(re+ee*ge,K),P=me/2,y=P+.5,O=1-be/16,$=O-1/16;o.quad([Be[0],D-.55,Be[2]],[Ee[0],D-.55,Ee[2]],[Ee[0],D+.55,Ee[2]],[Be[0],D+.55,Be[2]],16777215,[P,$,y,$,y,O,P,O])});let g=a.postes.map(N=>(e.aVia(N.p[0],N.p[1],n),{...N,x:N.p[0],z:N.p[1],d:n.d,a:n.a,rumbo:c(n.d)})),A=Object.fromEntries(g.map(N=>[N.id,N])),C=new Bt(new dn(.13,.18,9.6,10).translate(0,4.8,0),new ft({color:Pt.concreto,roughness:.9}),g.length),R=g.filter(N=>N.herrajes.some(oe=>/reserva/.test(oe))),I=new Bt(new Rn(.36,.035,6,18),new ft({color:1382170,roughness:.6}),R.length*2),U=new _t;g.forEach((N,oe)=>{U.position.set(N.x,qt,N.z),U.rotation.set(0,0,0),U.updateMatrix(),C.setMatrixAt(oe,U.matrix),N.herrajes.includes("cruceta")&&r.caja(N.x,9,N.z,2.2,.1,.12,Pt.madera,N.rumbo),v.push({x:N.x,z:N.z,r:.2})}),R.forEach((N,oe)=>[-1,1].forEach((me,be)=>{let ve=l(N.d+me*.9,N.a,6.25);U.position.set(ve[0],ve[1],ve[2]),U.rotation.set(0,N.rumbo+Math.PI/2,0),U.updateMatrix(),I.setMatrixAt(oe*2+be,U.matrix)}));let L=[],B=[],Z=new We;function Q(N,oe,me,be){Z.set(be);for(let ve=0;ve<12;ve++)for(let Re of[ve/12,(ve+1)/12])L.push(N[0]+(oe[0]-N[0])*Re,N[1]+(oe[1]-N[1])*Re-me*4*Re*(1-Re),N[2]+(oe[2]-N[2])*Re),B.push(Z.r,Z.g,Z.b)}for(let N of a.tendido){let oe=A[N.de],me=A[N.a];for(let be=0;be<3;be++)Q([oe.x,6.3+be*.18,oe.z],[me.x,6.3+be*.18,me.z],.55,921361);for(let be of[-.95,0,.95])Q(l(oe.d,oe.a+be,9.15),l(me.d,me.a+be,9.15),.8,3356218)}let q=new ht;q.setAttribute("position",new tt(L,3)),q.setAttribute("color",new tt(B,3));let J=a.arboles.map(N=>({x:N[0],z:N[1],k:.8+t()*.5}));for(let N of b)if(N.vacio)for(let oe=0;oe<6;oe++){let me=l(N.d0+t()*(N.d1-N.d0),(N.lado==="este"?1:-1)*(N.frente+2+t()*N.fondo));J.push({x:me[0],z:me[2],k:1+t()*.6})}for(let N=0;N<26;N++){let oe=l(t()*e.largo,(t()<.5?-1:1)*(38+t()*24));J.push({x:oe[0],z:oe[2],k:1+t()*.8})}let j=new Bt(new dn(.13,.2,3,6).translate(0,1.5,0),new ft({color:5916210,roughness:1}),J.length),se=new Bt(new ii(1.7,1).translate(0,4.1,0),new ft({roughness:1,flatShading:!0}),J.length);J.forEach((N,oe)=>{U.position.set(N.x,qt,N.z),U.rotation.set(0,t()*6,0),U.scale.setScalar(N.k),U.updateMatrix(),j.setMatrixAt(oe,U.matrix),se.setMatrixAt(oe,U.matrix),se.setColorAt(oe,Z.setHSL(.27+t()*.08,.45+t()*.15,.26+t()*.1)),v.push({x:N.x,z:N.z,r:.25})}),U.scale.setScalar(1);let Se=(N,oe,me)=>{r.caja(N.p[0],qt,N.p[1],.06,2.3,.06,Pt.metal),r.caja(N.p[0],1.9,N.p[1],.56,.56,.04,oe,me)};for(let N of a.otros){e.aVia(N.p[0],N.p[1],n);let oe=c(n.d);if(/ALTO/.test(N.que))Se(N,12593182,oe);else if(/25 KPH/.test(N.que))Se(N,15856108,oe);else if(/zona escolar/.test(N.que))Se(N,15320363,oe);else if(/estacionamiento E/.test(N.que))Se(N,2056112,oe);else if(/parquímetro/.test(N.que))r.caja(N.p[0],qt,N.p[1],.08,1.2,.08,Pt.metal),r.caja(N.p[0],1.3,N.p[1],.3,.45,.2,2903667,oe);else if(/gabinete/.test(N.que)){r.caja(N.p[0],qt,N.p[1],.5,1.35,.95,3046735,oe);let me=l(n.d+.9,n.a-.5);r.caja(me[0],qt,me[2],.14,.9,.14,Pt.amarillo),S.push({d0:n.d-.5,d1:n.d+.5,a0:n.a-.3,a1:n.a+.3})}else/retenida/.test(N.que)?r.caja(N.p[0],qt,N.p[1],.12,2.2,.12,Pt.amarillo,oe):/caja de empalme/.test(N.que)&&r.caja(N.p[0],6.05,N.p[1],.24,.24,.6,1184790,oe)}let k=A.P05,ue=k.d+15,_e=l(ue,zp),Me={x:_e[0],z:_e[2],rumbo:c(ue)},V=new ut,H=new ft({vertexColors:!0,roughness:.92}),ce=(N,oe,{sombra:me=!0,recibe:be=!0}={})=>{let ve=new Ye(N.geometria(),oe);return ve.castShadow=me,ve.receiveShadow=be,ve};V.add(ce(i,H,{sombra:!1}),ce(r,H),ce(s,new ft({map:l_(),vertexColors:!0,roughness:.85})),ce(o,new xn({map:Object.assign(new Oa(M),{colorSpace:kt,anisotropy:4})}),{sombra:!1,recibe:!1}),new ya(q,new ta({vertexColors:!0})),C,I,j,se);for(let N of[C,j,se])N.castShadow=!0;V.traverse(N=>{N.matrixAutoUpdate=!1,N.updateMatrix()});let pe={};function fe(N,oe){if(e.aVia(N,oe,pe),Math.abs(pe.a)<=rn||Math.abs(pe.a)>yn)return 0;for(let[me,be]of _)if(pe.d>=me&&pe.d<=be)return qt;return 0}return{grupo:V,cajas:S,circulos:v,altura:fe,postes:g,estacionamiento:u,limites:{d0:f+2,d1:x-2,a:yn-2},inicio:{d:ue-1,a:-4.5},dPick:ue,trabajo:k,estacionado:Me,BORDE:yn+40,D0:f-60,D1:x+60}}var Hd=2.5,Ma=40,ql=5,di=128,Hp=di*ql/2,c_=12,d_=14,$l=(a,e)=>{let t=Math.imul(a,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function ds(a,e){let t=Math.floor(a),n=Math.floor(e),i=a-t,r=e-n,s=i*i*(3-2*i),o=r*r*(3-2*r);return($l(t,n)*(1-s)+$l(t+1,n)*s)*(1-o)+($l(t,n+1)*(1-s)+$l(t+1,n+1)*s)*o}var Sn=(a,e,t)=>{let n=Math.max(0,Math.min(1,(t-a)/(e-a)));return n*n*(3-2*n)},Nn=Object.fromEntries(Object.entries({fondo:2051950,arena:14272911,selva:3107626,potrero:7248450,sabana:10263114,nuboso:2381114,paramo:8157774,roca:7825754,pueblo:11118492,pasto:6064713}).map(([a,e])=>[a,new We(e)]));function kp(a,e,t,n,i=[]){let{x0:r,z0:s,paso:o,w:l,h:c}=e,d=Hd/e.escala,p=e.origen*d,h=-p,f=r+(l-1)*o,x=s+(c-1)*o,_={e:0,pend:0,llano:0},m={},u={dist:0,y:0},b=null;function S(he,ee){let K=Math.max(0,Math.min(l-1.001,(he-r)/o)),re=Math.max(0,Math.min(c-1.001,(ee-s)/o)),ge=K|0,D=re|0,Be=K-ge,Ee=re-D,P=D*l+ge,y=a[P],O=a[P+1],$=a[P+l],ne=a[P+l+1],ye=(y*(1-Be)+O*Be)*(1-Ee)+($*(1-Be)+ne*Be)*Ee;_.e=ye,_.pend=Math.hypot((O-y)*(1-Ee)+(ne-$)*Ee,($-y)*(1-Be)+(ne-O)*Be)/(o*e.escala);let Ae=ye>0?Math.min(7,_.pend*16):0,ie=ye*d-p+Ae*((ds(he*.011,ee*.011)-.5)*1.5+(ds(he*.037,ee*.037)-.5)*.6);for(let le of i){let Te=he-le.x,He=ee-le.z;if(Math.abs(Te)>le.R||Math.abs(He)>le.R)continue;let Ce=Math.hypot(Te,He),we=le.cima*d-p-le.alto*Math.pow(Ce/le.R,.85)-Math.max(0,6-Ce)*.8;Ce<le.R&&we>ie&&(ie=we,_.pend=.5,_.e=(ie+p)/d)}return ie}function v(he,ee){let K=S(he,ee);if(_.llano=0,Math.abs(he)<420&&ee>-480&&ee<480){t.aVia(he,ee,m);let re=Math.hypot(Math.max(0,Math.abs(m.a)-100),Math.max(0,-70-m.d,m.d-t.largo-70));if(re<150){let ge=Sn(4,150,re);K=(re<4?-.6+.15*re:0)*(1-ge)+K*ge,_.llano=1-ge}}for(let re of n){if(Math.abs(he-re.x)>re.r+60||Math.abs(ee-re.z)>re.r+60)continue;let ge=Sn(re.r,re.r+60,Math.hypot(he-re.x,ee-re.z));ge<1&&(K=re.y*(1-ge)+K*ge,_.llano=Math.max(_.llano,1-ge))}return K}for(let he of n)he.y=Math.max(h+1.5,S(he.x,he.z));function E(he,ee){let K=v(he,ee);if(b&&b.cerca(he,ee,u).dist<45){let re=Sn(16,45,u.dist);K=u.y*(1-re)+K*re}return K}let M=new We;function T(he,ee,K,re){let ge=_.e,D=_.pend*Hd,Be=ds(he*.06,ee*.06),Ee=e.lon0+he/e.kx,P=e.lat0-ee/e.kz;if(ge<1)M.copy(Nn.arena).lerp(Nn.fondo,Sn(0,45,-ge));else if(ge<14)M.copy(Nn.arena);else{let O=Sn(84.72,85.15,-Ee)*Sn(9.7,10.15,P)*(1-Sn(500,900,ge));M.copy(Nn.selva).lerp(Nn.potrero,Sn(.42,.7,Be)*(1-Sn(.1,.3,D))).lerp(Nn.sabana,O*(.6+.4*Be)),M.lerp(Nn.nuboso,Sn(1300,1900,ge)).lerp(Nn.paramo,Sn(2900,3300,ge)).lerp(Nn.roca,Sn(.75,1.2,D)),M.lerp(Nn.arena,1-Sn(14,30,ge))}_.llano>0&&M.lerp(Math.abs(he)<420&&Math.abs(ee)<480?Nn.pasto:Nn.pueblo,_.llano*.8);let y=.88+Be*.24;K[re]=M.r*y,K[re+1]=M.g*y,K[re+2]=M.b*y}let g=Math.floor((f-r)/Ma)+1,A=Math.floor((x-s)/Ma)+1,C=new Float32Array(g*A*3),R=new Float32Array(g*A*3),I=new Float32Array(g*A*3),U=new Uint32Array((g-1)*(A-1)*6),L=new ht;L.setAttribute("position",new mt(C,3)),L.setAttribute("color",new mt(R,3)),L.setAttribute("normal",new mt(I,3)),L.setIndex(new mt(U,1));function B(he,ee,K,re,ge){for(let D=0;D<re;D++)for(let Be=0;Be<K;Be++){let Ee=(D*K+Be)*3,P=he[(D*K+Math.max(0,Be-1))*3+1],y=he[(D*K+Math.min(K-1,Be+1))*3+1],O=he[(Math.max(0,D-1)*K+Be)*3+1],$=he[(Math.min(re-1,D+1)*K+Be)*3+1],ne=(P-y)/(2*ge),ye=(O-$)/(2*ge),Ae=Math.hypot(ne,1,ye);ee[Ee]=ne/Ae,ee[Ee+1]=1/Ae,ee[Ee+2]=ye/Ae}}function Z(){for(let he=0;he<A;he++)for(let ee=0;ee<g;ee++){let K=(he*g+ee)*3,re=r+ee*Ma,ge=s+he*Ma;C[K]=re,C[K+1]=E(re,ge),C[K+2]=ge,T(re,ge,R,K)}B(C,I,g,A,Ma);for(let he of["position","color","normal"])L.attributes[he].needsUpdate=!0;L.computeBoundingSphere()}function Q(he,ee){let K=0;for(let re=0;re<A-1;re++)for(let ge=0;ge<g-1;ge++){if(ge>=he-8&&ge<he+8&&re>=ee-8&&re<ee+8)continue;let D=re*g+ge,Be=D+g;U[K++]=D,U[K++]=Be,U[K++]=D+1,U[K++]=D+1,U[K++]=Be,U[K++]=Be+1}L.setDrawRange(0,K),L.index.needsUpdate=!0}let q=di+1,J=q*q+4*q,j=new Float32Array(J*3),se=new Float32Array(J*3),Se=new Float32Array(J*3),k=new Float32Array(q*q*3),ue=new Float32Array(q*q*3),_e=[];for(let he=0;he<di;he++)for(let ee=0;ee<di;ee++){let K=he*q+ee,re=K+q;_e.push(K,re,K+1,K+1,re,re+1)}let Me=[[],[],[],[]];for(let he=0;he<q;he++)Me[0].push(he),Me[1].push(di*q+he),Me[2].push(he*q),Me[3].push(he*q+di);Me.forEach((he,ee)=>{for(let K=0;K<di;K++){let re=he[K],ge=he[K+1],D=q*q+ee*q+K,Be=D+1;ee===0||ee===3?_e.push(re,ge,D,ge,Be,D):_e.push(re,D,ge,ge,D,Be)}});let V=new ht;V.setAttribute("position",new mt(j,3)),V.setAttribute("color",new mt(se,3)),V.setAttribute("normal",new mt(Se,3)),V.setIndex(_e);let H=new ft({vertexColors:!0,roughness:1,side:Pn}),ce=new Ye(L,H),pe=new Ye(V,H),fe=new Ye(new ri(12e3,12e3).rotateX(-Math.PI/2),new ft({color:2847639,roughness:.22,metalness:.1,transparent:!0,opacity:.9}));fe.position.y=h;let N=new ut;N.add(ce,pe,fe);for(let he of[ce,pe])he.receiveShadow=!0,he.frustumCulled=!1;let oe=null,me=null,be=null;function ve(he){let{ci:ee,cj:K}=me,re=r+(ee-8)*Ma,ge=s+(K-8)*Ma;for(let D=0;D<he&&me.fila<q;D++,me.fila++){let Be=me.fila,Ee=ge+Be*ql;for(let P=0;P<q;P++){let y=(Be*q+P)*3,O=re+P*ql;k[y]=O,k[y+1]=E(O,Ee),k[y+2]=Ee,T(O,Ee,ue,y)}}if(!(me.fila<q)){j.set(k),se.set(ue),B(j,Se,q,q,ql),Me.forEach((D,Be)=>D.forEach((Ee,P)=>{let y=(q*q+Be*q+P)*3;j[y]=j[Ee*3],j[y+1]=j[Ee*3+1]-c_,j[y+2]=j[Ee*3+2];for(let O=0;O<3;O++)se[y+O]=se[Ee*3+O],Se[y+O]=Se[Ee*3+O]}));for(let D of["position","color","normal"])V.attributes[D].needsUpdate=!0;Q(ee,K),oe={ci:ee,cj:K,x:re+Hp,z:ge+Hp},me=null,be?.(oe.x,oe.z)}}function Re(he,ee,K=!1){let re=Math.max(8,Math.min(g-9,Math.round((he-r)/Ma))),ge=Math.max(8,Math.min(A-9,Math.round((ee-s)/Ma)));!me&&(!oe||re!==oe.ci||ge!==oe.cj)&&(me={ci:re,cj:ge,fila:0}),me&&ve(K?q:d_)}return{grupo:N,MAR:h,EX:Hd,limites:{x0:r+60,x1:f-60,z0:s+60,z1:x-60},altura:E,alturaBase:v,relieve:S,cada:Re,muestra:_,listo(he,ee){b=he,be=ee,Z()}}}var u_=8,er=60,Wl=46,h_=3.6;function Vp(a,e,t,n=[]){let i=a.map(l=>{let c=l.puntos,d=[],p=[];for(let u=0;u<c.length-1;u++){let b=c[Math.max(0,u-1)],S=c[u],v=c[u+1],E=c[Math.min(c.length-1,u+2)],M=Math.max(1,Math.ceil(Math.hypot(v[0]-S[0],v[1]-S[1])/u_));for(let T=0;T<M;T++){let g=T/M,A=g*g,C=A*g;d.push(.5*(2*S[0]+(v[0]-b[0])*g+(2*b[0]-5*S[0]+4*v[0]-E[0])*A+(3*S[0]-b[0]-3*v[0]+E[0])*C)),p.push(.5*(2*S[1]+(v[1]-b[1])*g+(2*b[1]-5*S[1]+4*v[1]-E[1])*A+(3*S[1]-b[1]-3*v[1]+E[1])*C))}}d.push(c.at(-1)[0]),p.push(c.at(-1)[1]);let h=d.length,f=d.map((u,b)=>Math.max(t+1.5,e(u,p[b]))),x=new Uint8Array(h);l.y0!==void 0&&(f[0]=l.y0,x[0]=1);for(let u=0;u<h;u++)for(let b of n)Math.hypot(d[u]-b.x,p[u]-b.z)<b.r*.6&&(f[u]=Math.max(t+1.5,b.y),x[u]=1);x[h-1]=1;for(let u=0;u<6e3;u++){let b=0;for(let S=1;S<h-1;S++)x[S]||(f[S]=Math.max(t+1.5,(f[S-1]+2*f[S]+f[S+1])/4));for(let S=1;S<h;S++)b=Math.max(b,Math.abs(f[S]-f[S-1])/Math.hypot(d[S]-d[S-1],p[S]-p[S-1]));if(b<.13&&u>20)break}let _=new Array(h),m=new Array(h);for(let u=0;u<h;u++){let b=Math.max(0,u-1),S=Math.min(h-1,u+1),v=Math.hypot(d[S]-d[b],p[S]-p[b])||1;_[u]=(p[S]-p[b])/v,m[u]=-(d[S]-d[b])/v}return{n:l.n,X:d,Z:p,Y:f,NX:_,NZ:m}}),r=new Map,s=(l,c)=>(l+2048)*4096+(c+2048);i.forEach((l,c)=>{for(let d=0;d<l.X.length-1;d++){let p=Math.floor((Math.min(l.X[d],l.X[d+1])-Wl)/er),h=Math.floor((Math.max(l.X[d],l.X[d+1])+Wl)/er),f=Math.floor((Math.min(l.Z[d],l.Z[d+1])-Wl)/er),x=Math.floor((Math.max(l.Z[d],l.Z[d+1])+Wl)/er);for(let _=p;_<=h;_++)for(let m=f;m<=x;m++){let u=s(_,m),b=r.get(u);b||r.set(u,b=[]),b.push(c,d)}}});function o(l,c,d){d.dist=1/0;let p=r.get(s(Math.floor(l/er),Math.floor(c/er)));if(!p)return d;for(let h=0;h<p.length;h+=2){let f=i[p[h]],x=p[h+1],_=f.X[x],m=f.Z[x],u=f.X[x+1]-_,b=f.Z[x+1]-m,S=u*u+b*b,v=Math.max(0,Math.min(1,((l-_)*u+(c-m)*b)/S)),E=Math.hypot(l-_-u*v,c-m-b*v);if(E<d.dist){let M=Math.sqrt(S);d.dist=E,d.y=f.Y[x]+(f.Y[x+1]-f.Y[x])*v,d.ruta=p[h],d.tx=u/M,d.tz=b/M}}return d}return{rutas:i,cerca:o,MEDIO:h_}}function jp(a,e=1500){let t=new Float32Array(e*2*12),n=new Float32Array(e*2*12),i=new Float32Array(e*2*12),r=new Uint32Array(e*2*6);for(let f=0;f<e*2;f++){r.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6);for(let x=0;x<4;x++)i[f*12+x*3+1]=1}let s=new ht;s.setAttribute("position",new mt(t,3)),s.setAttribute("color",new mt(n,3)),s.setAttribute("normal",new mt(i,3)),s.setIndex(new mt(r,1));let o=new Ye(s,new ft({vertexColors:!0,roughness:.95}));o.frustumCulled=!1,o.receiveShadow=!0;let l=new We(3882564),c=new We(14924079),d=0;function p(f,x,_,m,u,b){if(d>=e*2)return;let S=d++*12,v=x+1,E=[[x,_],[v,_],[v,m],[x,m]];for(let M=0;M<4;M++){let[T,g]=E[M];t[S+M*3]=f.X[T]+f.NX[T]*g,t[S+M*3+1]=f.Y[T]+u,t[S+M*3+2]=f.Z[T]+f.NZ[T]*g,n[S+M*3]=b.r,n[S+M*3+1]=b.g,n[S+M*3+2]=b.b}}function h(f,x,_){d=0;for(let m of a.rutas)for(let u=0;u<m.X.length-1;u++)Math.abs(m.X[u]-f)>_||Math.abs(m.Z[u]-x)>_||(p(m,u,-a.MEDIO,a.MEDIO,.12,l),u%2===0&&p(m,u,-.09,.09,.15,c));s.setDrawRange(0,d*6),s.attributes.position.needsUpdate=s.attributes.color.needsUpdate=!0}return{malla:o,rehacer:h}}var tr=11,us=240,Xl=1100,ui=(a,e,t)=>{let n=Math.imul(a,73856093)^Math.imul(e,19349663)^Math.imul(t,83492791);return n=Math.imul(n^n>>>15,2246822519),((n^n>>>13)>>>0)/4294967296},p_={palma:[5.2,.7,2.1,.7,5148474],selva:[4.2,1.1,2.3,2,2911019],seco:[3.2,1.2,3.1,1,8163132],cipres:[3,.9,1,2.7,2314810]};function $p(a,e,t){let n=new Bt(new dn(.11,.17,1,6).translate(0,.5,0),new ft({color:5916210,roughness:1}),Xl),i=new Bt(new ii(1,1),new ft({roughness:1,flatShading:!0}),Xl),r=new ut;r.add(n,i);for(let d of[n,i])d.frustumCulled=!1,d.count=0;let s=new _t,o=new We,l={dist:0};function c(d,p){let h=0,f=Math.floor((d-us)/tr),x=Math.floor((d+us)/tr),_=Math.floor((p-us)/tr),m=Math.floor((p+us)/tr);for(let u=_;u<=m&&h<Xl;u++)for(let b=f;b<=x&&h<Xl;b++){let S=(b+ui(b,u,1))*tr,v=(u+ui(b,u,2))*tr;if(Math.hypot(S-d,v-p)>us)continue;let E=a.altura(S,v),M=a.muestra,T=M.e;if(T<3||M.llano>.25||M.pend*a.EX>1.1||e.cerca(S,v,l).dist<12)continue;let g=t.lon0+S/t.kx,A=t.lat0-v/t.kz,C=-g>84.9&&A>9.85&&T<700,R=ds(S*.013,v*.013),I=T>3e3?.06:C?.16+.3*R:.2+.75*R*R;if(ui(b,u,3)>I)continue;let[U,L,B,Z,Q]=p_[T<45?"palma":T>1900?"cipres":C?"seco":"selva"],q=.75+ui(b,u,4)*.6;s.position.set(S,E-.1,v),s.rotation.set(0,ui(b,u,5)*6.28,0),s.scale.set(L*q,U*q,L*q),s.updateMatrix(),n.setMatrixAt(h,s.matrix),s.position.y=E+U*q+Z*q*.35,s.scale.set(B*q,Z*q,B*q),s.updateMatrix(),i.setMatrixAt(h,s.matrix),i.setColorAt(h,o.set(Q).offsetHSL((ui(b,u,6)-.5)*.04,0,(ui(b,u,7)-.5)*.08)),h++}n.count=i.count=h,n.instanceMatrix.needsUpdate=i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return{grupo:r,rehacer:c}}var f_=3.1,m_=.95,g_=2.65,x_=27,b_=9,v_=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a));function qp(a,e){let t=_n(),n=15921902,i=9212569,r=(u,b,S,v,E,M,T)=>t.caja(u,b,S,v,E,M,T);r(0,.42,0,1.86,.5,5.2,n),r(0,.92,.75,1.78,.78,1.9,n),r(0,1.2,.75,1.82,.42,1.6,1976886),r(0,.92,2.15,1.7,.3,1,n);for(let u of[-.9,.9])r(u,.92,-1.45,.08,.42,2.3,n),r(u*1.035,.62,0,.03,.14,5,739983),r(u*1.035,.5,0,.03,.1,5,14924079);r(0,.92,-2.56,1.86,.42,.08,n);for(let u of[-.86,.86])for(let b of[1.6,-1.6])r(u,0,b,.26,.74,.74,1447963);for(let u of[1.4,-2.3]){for(let b of[-.85,.85])r(b,1.34,u,.06,.75,.06,i);r(0,2.06,u,1.8,.06,.06,i)}let s=new Ye(t.geometria(),new ft({vertexColors:!0,roughness:.6})),o=new ut;o.add(s),o.rotation.order="YXZ";let l={x:e.x,z:e.z,rumbo:e.rumbo,v:0,y:0,ox:e.x,oz:e.z,orumbo:e.rumbo},c=new F;function d(u,b,S,v=c){let E=Math.cos(l.rumbo),M=Math.sin(l.rumbo);return v.set(l.x+u*E+S*M,l.y+b,l.z-u*M+S*E)}function p(){let u=Math.cos(l.rumbo),b=Math.sin(l.rumbo),S=a(l.x+b*1.6,l.z+u*1.6),v=a(l.x-b*1.6,l.z-u*1.6),E=a(l.x+u*.9,l.z-b*.9),M=a(l.x-u*.9,l.z+b*.9);l.y=(S+v+E+M)/4,o.position.set(l.x,l.y,l.z),o.rotation.set(-Math.atan2(S-v,3.2),l.rumbo,Math.atan2(E-M,1.8))}function h(u,b,S,v){let E=S?x_:b_;b.mz>.05?l.v+=(l.v<0?12:4.5)*b.mz*u:b.mz<-.05?l.v+=(l.v>0?11:3)*b.mz*u:l.v-=Math.sign(l.v)*Math.min(Math.abs(l.v),1.6*u),l.v>E&&(l.v=Math.max(E,l.v-7*u)),l.v=Math.max(-5,l.v),l.rumbo+=l.v*Math.tan(-b.mx*.55/(1+Math.abs(l.v)*.09))/f_*u,l.x=Math.max(v.x0,Math.min(v.x1,l.x+Math.sin(l.rumbo)*l.v*u)),l.z=Math.max(v.z0,Math.min(v.z1,l.z+Math.cos(l.rumbo)*l.v*u)),l.ox=l.x,l.oz=l.z,l.orumbo=l.rumbo}function f(u,b,S){Object.assign(l,{x:u,z:b,rumbo:S,v:0,ox:u,oz:b,orumbo:S})}function x(u,b,S,v){l.ox=u,l.oz=b,l.orumbo=S,l.v=v}function _(u){let b=1-Math.exp(-u*10);l.x+=(l.ox-l.x)*b,l.z+=(l.oz-l.z)*b,l.rumbo+=v_(l.rumbo,l.orumbo)*b}function m(u,b){let S=Math.cos(l.rumbo),v=Math.sin(l.rumbo),E=u.x-l.x,M=u.z-l.z,T=E*S-M*v,g=E*v+M*S,A=m_+b,C=g_+b;Math.abs(T)>=A||Math.abs(g)>=C||(A-Math.abs(T)<C-Math.abs(g)?T=Math.sign(T||1)*A:g=Math.sign(g||1)*C,u.x=l.x+T*S+g*v,u.z=l.z-T*v+g*S)}return{grupo:o,st:l,local:d,asentar:p,conducir:h,fijar:f,remoto:x,seguir:_,empujar:m}}var hs={sanjose:{n:"San Jos\xE9",lat:9.9404,lon:-84.102,r:0},alajuela:{n:"Alajuela",lat:10.016,lon:-84.214,r:60},cartago:{n:"Cartago",lat:9.864,lon:-83.919,r:60},sanramon:{n:"San Ram\xF3n",lat:10.088,lon:-84.47,r:45},orotina:{n:"Orotina",lat:9.912,lon:-84.523,r:40},caldera:{n:"Caldera",lat:9.912,lon:-84.722,r:40},esparza:{n:"Esparza",lat:9.994,lon:-84.664,r:40},puntarenas:{n:"Puntarenas",lat:9.977,lon:-84.838,r:45},canas:{n:"Ca\xF1as",lat:10.428,lon:-85.094,r:45},liberia:{n:"Liberia",lat:10.634,lon:-85.44,r:60},lacruz:{n:"La Cruz",lat:11.073,lon:-85.632,r:35},penasblancas:{n:"Pe\xF1as Blancas \xB7 frontera con Nicaragua",lat:11.214,lon:-85.613,r:35},santacruz:{n:"Santa Cruz",lat:10.262,lon:-85.585,r:40},nicoya:{n:"Nicoya",lat:10.148,lon:-85.452,r:45},amistad:{n:"Puente La Amistad",lat:10.247,lon:-85.243,r:0},fortuna:{n:"La Fortuna",lat:10.471,lon:-84.645,r:40},arenal:{n:"Volc\xE1n Arenal",lat:10.463,lon:-84.703,r:0},tilaran:{n:"Tilar\xE1n",lat:10.473,lon:-84.968,r:35},monteverde:{n:"Monteverde",lat:10.31,lon:-84.82,r:0},poas:{n:"Volc\xE1n Po\xE1s",lat:10.198,lon:-84.231,r:0},irazu:{n:"Volc\xE1n Iraz\xFA",lat:9.979,lon:-83.852,r:0},guapiles:{n:"Gu\xE1piles",lat:10.215,lon:-83.79,r:45},siquirres:{n:"Siquirres",lat:10.098,lon:-83.507,r:40},limon:{n:"Lim\xF3n",lat:9.99,lon:-83.035,r:60},tortuguero:{n:"Tortuguero",lat:10.54,lon:-83.5,r:0},cahuita:{n:"Cahuita",lat:9.735,lon:-82.84,r:35},sixaola:{n:"Sixaola \xB7 frontera con Panam\xE1",lat:9.508,lon:-82.615,r:35},cerromuerte:{n:"Cerro de la Muerte",lat:9.56,lon:-83.75,r:0},chirripo:{n:"Cerro Chirrip\xF3",lat:9.484,lon:-83.489,r:0},sanisidro:{n:"San Isidro de El General",lat:9.376,lon:-83.703,r:50},buenosaires:{n:"Buenos Aires",lat:9.17,lon:-83.33,r:35},palmar:{n:"Palmar Norte",lat:8.96,lon:-83.46,r:40},neily:{n:"Ciudad Neily",lat:8.65,lon:-82.94,r:40},canoas:{n:"Paso Canoas \xB7 frontera con Panam\xE1",lat:8.534,lon:-82.84,r:35},jaco:{n:"Jac\xF3",lat:9.615,lon:-84.63,r:40},quepos:{n:"Quepos \xB7 Manuel Antonio",lat:9.43,lon:-84.16,r:40},dominical:{n:"Dominical",lat:9.25,lon:-83.86,r:30}},Wp=[{n:"Ruta 1 \xB7 Interamericana Norte",p:["@oeste","alajuela",[10.06,-84.33],"sanramon","esparza",[10.1,-84.82],[10.262,-84.965],"canas",[10.526,-85.255],"liberia","lacruz","penasblancas"]},{n:"Ruta 27",p:["@oeste",[9.915,-84.24],"orotina","caldera"]},{n:"Ruta 23",p:["caldera",[9.955,-84.715],[9.985,-84.735],[9.978,-84.775],[9.977,-84.805],"puntarenas"]},{n:"Ruta 34 \xB7 Costanera Sur",p:["orotina",[9.76,-84.61],"jaco",[9.52,-84.32],"quepos","dominical",[9.16,-83.74],"palmar"]},{n:"Ruta 2 \xB7 Interamericana Sur",p:["@este","cartago",[9.74,-83.94],"cerromuerte","sanisidro","buenosaires",[9.02,-83.3],"palmar",[8.7,-83.1],"neily","canoas"]},{n:"Ruta 32",p:["@este",[10.03,-84.06],[10.09,-84],[10.16,-83.93],"guapiles","siquirres",[10.07,-83.29],"limon"]},{n:"Ruta 36",p:["limon",[9.92,-83.045],[9.84,-82.975],[9.78,-82.93],"cahuita",[9.63,-82.85],"sixaola"]},{n:"Ruta 21",p:["liberia",[10.447,-85.56],"santacruz","nicoya"]},{n:"Ruta 18",p:[[10.262,-84.965],"amistad",[10.2,-85.35],"nicoya"]},{n:"Ruta 142",p:["sanramon",[10.25,-84.52],"fortuna",[10.5,-84.7],[10.505,-84.8],"tilaran","canas"]}],Xp=[{k:"arenal",R:90,alto:52,cima:1633}],kd=(a,e,t)=>[(t-a.lon0)*a.kx,-(e-a.lat0)*a.kz];var Yl=[[-80,20,60,90],[-1,58,122,158],[0,214,200,150],[40,120,168,92],[600,70,130,70],[1500,52,100,70],[2500,128,118,84],[3300,170,160,140],[3900,225,222,215]];function Yp(a,e,t){let{w:n,h:i,paso:r,x0:s,z0:o}=e,l=document.createElement("canvas");l.width=n,l.height=i;let c=l.getContext("2d"),d=c.createImageData(n,i),p=d.data;for(let _=0;_<i;_++)for(let m=0;m<n;m++){let u=_*n+m,b=a[u],S=Yl.length-2;for(;S>0&&b<Yl[S][0];)S--;let v=Yl[S],E=Yl[S+1],M=Math.max(0,Math.min(1,(b-v[0])/(E[0]-v[0]))),T=b>0?Math.max(.55,Math.min(1.3,1+((a[u-1]??b)-(a[u+1]??b)+(a[u-n]??b)-(a[u+n]??b))/520)):1;for(let g=0;g<3;g++)p[u*4+g]=Math.min(255,(v[g+1]+(E[g+1]-v[g+1])*M)*T);p[u*4+3]=255}c.putImageData(d,0,0);let h=_=>(_-s)/r,f=_=>(_-o)/r;c.lineJoin=c.lineCap="round";for(let[_,m]of[[3.2,"rgba(40,30,20,.75)"],[1.6,"#F6E7A8"]]){c.lineWidth=_,c.strokeStyle=m;for(let u of t.rutas){c.beginPath();for(let b=0;b<u.X.length;b+=3)c.lineTo(h(u.X[b]),f(u.Z[b]));c.lineTo(h(u.X.at(-1)),f(u.Z.at(-1))),c.stroke()}}c.font="600 11px system-ui, Arial, sans-serif",c.textBaseline="middle",c.lineWidth=3;for(let _ of Object.values(hs)){let m=h((_.lon-e.lon0)*e.kx),u=f(-(_.lat-e.lat0)*e.kz),b=_.n.split(" \xB7 ")[0];c.fillStyle=_.r?"#fff":"#FFD627",c.strokeStyle="rgba(0,20,40,.85)",c.beginPath(),c.arc(m,u,_.r?3:2.4,0,7),c.fill(),c.stroke();let S=m>n-110;c.textAlign=S?"right":"left",c.strokeText(b,m+(S?-6:6),u),c.fillText(b,m+(S?-6:6),u)}function x(_,m){_.width=n,_.height=i;let u=_.getContext("2d");u.drawImage(l,0,0);for(let b of[...m].reverse())u.save(),u.translate(h(b.x),f(b.z)),u.fillStyle=b.color,u.strokeStyle="#00182F",u.lineWidth=2,b.rumbo!==void 0?(u.rotate(-b.rumbo+Math.PI),u.beginPath(),u.moveTo(0,-9),u.lineTo(6,7),u.lineTo(0,3.5),u.lineTo(-6,7),u.closePath()):(u.beginPath(),u.arc(0,0,4.5,0,7)),u.stroke(),u.fill(),u.restore()}return{dibujar:x}}var __=800,y_=1200,Jp=[15260085,13230274,15910821,12178408,15852960,15120568,14207208,16052714,11130575],Mn={zinc:9325370,zincGris:9278361,blanco:16052714,piedra:12104358,pasto:7316826,cancha:5151301,linea:16053492,madera:8018492,metal:10133670,rojo:12597547,azul:2051727,amarillo:15320363};function Zp(a,e,t){let n=new ut,i={dist:0},r=new ft({vertexColors:!0,roughness:.85}),s=a.filter(h=>h.r>0||jd[h.k]).map(h=>({...h,malla:null,cajas:[]}));function o(h,f,x,_,m,u,b=4){if(h.r&&Math.hypot(f-h.x,x-h.z)>h.r-8)return null;let S=Math.cos(u),v=Math.sin(u),E=[];for(let[T,g]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,0]]){let A=f+T*_/2*S+g*m/2*v,C=x-T*_/2*v+g*m/2*S;if(t.cerca(A,C,i).dist<t.MEDIO+b)return null;E.push(e.altura(A,C))}let M=Math.min(...E);return Math.max(...E)-M>1?null:M-.3}function l(h){let f=_n(),x=Qi([...h.k].reduce((M,T)=>M*31+T.charCodeAt(0)|0,7)),_=[],m=t.cerca(h.x,h.z,i).dist<h.r?Math.atan2(i.tx,i.tz):x()*Math.PI,u=(M,T,g,A,C,R,I,U=I,L)=>{let B=o(h,M,T,g,A,C,L);return B===null?!1:(f.caja(M,B,T,g,R+.3,A,I,C,{techo:U}),_.push({x:M,z:T,c:Math.cos(C),s:Math.sin(C),hx:g/2,hz:A/2}),B)},b=(M,T,g,A,C,R,I)=>{let U=Math.cos(C),L=Math.sin(C),B=(Z,Q)=>[M+Z*U+Q*L,I,T-Z*L+Q*U];f.quad(B(-g/2,-A/2),B(-g/2,A/2),B(g/2,A/2),B(g/2,-A/2),R)},S=(M,T)=>[h.x+M*Math.cos(m)+T*Math.sin(m),h.z-M*Math.sin(m)+T*Math.cos(m)];if(h.r){let M=t.cerca(...S(18,0),i).dist>t.cerca(...S(-18,0),i).dist?1:-1,[T,g]=S(M*20,0),A=o(h,T,g,22,22,m,2)??e.altura(T,g);b(T,g,22,22,m,Mn.pasto,A+.32);for(let[Se,k]of[[-7,-7],[7,-7],[-7,7],[7,7]]){let[ue,_e]=S(M*20+Se,k);f.caja(ue,A,_e,.5,3.4,.5,5916210),f.caja(ue,A+3.2,_e,2.6,2,2.6,4094522)}let[C,R]=S(M*20,0);u(C,R,4.2,4.2,m+Math.PI/4,2.6,Mn.blanco,Mn.rojo,0);let I=h.k==="cartago",[U,L]=S(M*37,0),B=I?16:10,Z=I?30:18,Q=u(U,L,Z,B,m+Math.PI/2,I?13:8,I?16052714:Mn.blanco,I?7109257:Mn.zincGris,2);if(Q!==!1)for(let Se of I?[-5,5]:[0]){let[k,ue]=S(M*(37-Z/2+2),Se);f.caja(k,Q,ue,3.4,I?26:15,3.4,Mn.blanco,m,{techo:I?7109257:Mn.rojo}),f.caja(k,Q+(I?26:15),ue,1.6,3,1.6,I?7109257:Mn.rojo,m)}let[q,J]=S(M*20,34),j=o(h,q,J,26,40,m,2);if(j!==null){b(q,J,26,40,m,Mn.cancha,j+.32);for(let ue of[-1,1]){let[_e,Me]=S(M*20,34+ue*19);f.caja(_e,j+.3,Me,7.3,2.4,.12,Mn.linea,m)}let[Se,k]=S(M*20,34);b(Se,k,26,.25,m,Mn.linea,j+.34)}let se=0;for(let Se=-h.r;Se<=h.r;Se+=11)for(let k=-h.r;k<=h.r;k+=13){if(Math.abs(k-M*28)<22&&Math.abs(Se-12)<34||x()<.28)continue;let[ue,_e]=S(k+(x()-.5)*3,Se+(x()-.5)*3),Me=6+x()*4,V=7+x()*5,H=x()<.18?2:1,ce=x()<.12,pe=ce?15852960:Jp[Math.floor(x()*Jp.length)];if(u(ue,_e,Me,V,m+(x()<.5?0:Math.PI/2),H*3-.2,pe,x()<.7?Mn.zinc:Mn.zincGris)!==!1&&se++,se>60)break}}jd[h.k]?.({s:h,a:f,cajas:_,sobre:u,carreteras:t,terreno:e,q:i});let v=f.geometria();v.computeBoundingSphere();let E=new Ye(v,r);E.castShadow=E.receiveShadow=!0,E.matrixAutoUpdate=!1,E.userData.centro=[h.x,h.z],h.malla=E,h.cajas=_,n.add(E)}function c(h){n.remove(h.malla),h.malla.geometry.dispose(),h.malla=null,h.cajas=[]}function d(h,f){for(let x of s){let _=Math.hypot(h-x.x,f-x.z);!x.malla&&_<__?l(x):x.malla&&_>y_&&c(x)}}function p(h,f){for(let x of s)if(!(!x.malla||Math.abs(h.x-x.x)>x.r+90||Math.abs(h.z-x.z)>x.r+90))for(let _ of x.cajas){let m=h.x-_.x,u=h.z-_.z,b=m*_.c-u*_.s,S=m*_.s+u*_.c,v=_.hx+f,E=_.hz+f;Math.abs(b)>=v||Math.abs(S)>=E||(v-Math.abs(b)<E-Math.abs(S)?b=Math.sign(b||1)*v:S=Math.sign(S||1)*E,h.x=_.x+b*_.c+S*_.s,h.z=_.z-b*_.s+S*_.c)}return h}return{grupo:n,sitios:s,actualizar:d,empujar:p}}function Kp(a,e,t){let n=null,i=1/0;for(let c of a.rutas)for(let d=0;d<c.X.length;d++){let p=Math.hypot(c.X[d]-e,c.Z[d]-t);p<i&&(i=p,n={r:c,i:d})}let{r,i:s}=n,o=Math.min(r.X.length-1,s+1),l=Math.max(0,o-1);return{x:r.X[s],z:r.Z[s],y:r.Y[s],rumbo:Math.atan2(r.X[o]-r.X[l],r.Z[o]-r.Z[l]),nx:r.NX[s],nz:r.NZ[s]}}var Vd=({s:a,a:e,cajas:t,carreteras:n})=>{let i=Kp(n,a.x,a.z),r=n.MEDIO+6,s=i.x+i.nx*r,o=i.z+i.nz*r;e.caja(s,i.y,o,6,3.6,16,15131350,i.rumbo,{techo:3104399}),t.push({x:s,z:o,c:Math.cos(i.rumbo),s:Math.sin(i.rumbo),hx:3,hz:8});let l=i.x+i.nx*(n.MEDIO+1),c=i.z+i.nz*(n.MEDIO+1);e.caja(l,i.y,c,.3,1.2,.3,15320363,i.rumbo);for(let d=0;d<6;d++){let p=(d+.5)/6*2*n.MEDIO;e.caja(l-i.nx*p,i.y+1.05,c-i.nz*p,.12,.12,1.1,d%2?12597547:16053492,i.rumbo+Math.PI/2)}for(let[d,p]of[[0,2051727],[1,16053492],[2,12597547]]){let h=s+i.nx*4+Math.sin(i.rumbo)*(d*2.4-2.4),f=o+i.nz*4+Math.cos(i.rumbo)*(d*2.4-2.4);e.caja(h,i.y,f,.1,7,.1,10133670),e.caja(h,i.y+6,f+.5,.05,1,1.4,p,i.rumbo)}},jd={penasblancas:Vd,canoas:Vd,sixaola:Vd};jd.amistad=({s:a,a:e,carreteras:t})=>{let n=Kp(t,a.x,a.z),i=Math.sin(n.rumbo),r=Math.cos(n.rumbo),s=t.MEDIO+.6;for(let l of[-1,1])for(let c=-40;c<40;c+=4)e.caja(n.x+i*c+n.nx*l*s,n.y+.1,n.z+r*c+n.nz*l*s,.25,1.1,4,14277081,n.rumbo);e.caja(n.x+n.nx*(s+1.2),n.y-6,n.z+n.nz*(s+1.2),1.4,30,1.4,15263976,n.rumbo);let o=[n.x+n.nx*(s+1.2),n.y+23,n.z+n.nz*(s+1.2)];for(let l=-36;l<=36;l+=6)if(l){let c=[n.x+i*l+n.nx*s,n.y+1,n.z+r*l+n.nz*s],d=p=>[p[0],p[1]+.14,p[2]];e.quad(o,c,d(c),d(o),16053492),e.quad(d(o),d(c),c,o,16053492)}};function Qp(a){let e=[...new Set(a.rutas.map(c=>c.n.match(/Ruta (\d+)/)[1]))],t=document.createElement("canvas");t.width=512,t.height=64;let n=t.getContext("2d"),i=512/e.length;n.font="bold 40px system-ui, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",e.forEach((c,d)=>{n.fillStyle="#1C6B3A",n.fillRect(d*i,0,i,64),n.fillStyle="#fff",n.fillText(c,d*i+i/2,34),n.strokeStyle="#fff",n.lineWidth=3,n.strokeRect(d*i+3,3,i-6,58)});let r=_n(),s=_n();for(let c of a.rutas){let d=e.indexOf(c.n.match(/Ruta (\d+)/)[1]),p=d/e.length,h=(d+1)/e.length;for(let f=25;f<c.X.length-5;f+=50){let x=a.MEDIO+1.8,_=c.X[f]-c.NX[f]*x,m=c.Z[f]-c.NZ[f]*x,u=c.Y[f];r.caja(_,u-.2,m,.12,2.6,.12,10133670);let b=c.NZ[f],S=-c.NX[f],v=(E,M)=>[_+c.NX[f]*E*.6-b*.08,u+M,m+c.NZ[f]*E*.6-S*.08];s.quad(v(-1,1.9),v(1,1.9),v(1,2.7),v(-1,2.7),16777215,[p,0,h,0,h,1,p,1]),s.quad(v(1,1.9),v(-1,1.9),v(-1,2.7),v(1,2.7),16777215,[p,0,h,0,h,1,p,1])}}let o=new ut,l=new Oa(t);return l.colorSpace=kt,o.add(new Ye(r.geometria(),new ft({vertexColors:!0,roughness:.6})),new Ye(s.geometria(),new xn({map:l}))),o.traverse(c=>{c.matrixAutoUpdate=!1,c.updateMatrix(),c.geometry?.computeBoundingSphere()}),o}function ef(a,e,t,n,{a:i=1.8,b:r=3.2,s0:s=2.2,T:o=1.3}={}){let l=1-Math.pow(Math.max(0,a)/Math.max(.1,e),4);if(!isFinite(t))return i*l;let c=s+Math.max(0,a*o+a*n/(2*Math.sqrt(i*r)));return i*(l-Math.pow(c/Math.max(.1,t),2))}var tf=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534],ps=4.2;function nf(a,e,t){let n=Qi(7),i=-40,r=a.largo+80,s=[];for(let M=0;M<t;M++)s.push({d:i+r*M/t+n()*4,a:jl,v:5,v0:5.5+n()*2.5,x:0,z:0,rumbo:0});let o=e.estacionamiento,l=[];for(let M=0;M<o.n;M++){let T=o.d0+(M+.5)*o.paso;n()<.55&&Math.abs(T-e.dPick)>5.4&&l.push({d:T,a:o.a,v:0,x:0,z:0,rumbo:0})}for(let M of l)e.cajas.push({d0:M.d-ps/2,d1:M.d+ps/2,a0:M.a-.9,a1:M.a+.9});let c=[...s,...l],d=c.length,p=new ft({roughness:.45,metalness:.3}),h=new Bt(new Zt(1.75,.62,ps).translate(0,.62,0),p,d),f=new Bt(new Zt(1.6,.52,2.1).translate(0,1.18,-.25),new ft({color:1778992,roughness:.2,metalness:.5}),d),x=new dn(.33,.33,.24,10).rotateZ(Math.PI/2),_=new Bt(x,new ft({color:1316119,roughness:.9}),d*4),m=new We;c.forEach((M,T)=>h.setColorAt(T,m.set(tf[Math.floor(n()*tf.length)])));let u=new ut;u.add(h,f,_);for(let M of[h,f,_])M.frustumCulled=!1;let b=new _t,S={};function v(M){let T=c[M];a.en(T.d,T.a,S),T.x=S.x,T.z=S.z,T.rumbo=Math.atan2(S.tx,S.tz),b.position.set(S.x,0,S.z),b.rotation.set(0,T.rumbo,0),b.updateMatrix(),h.setMatrixAt(M,b.matrix),f.setMatrixAt(M,b.matrix);let g=Math.cos(T.rumbo),A=Math.sin(T.rumbo);[[-.82,1.35],[.82,1.35],[-.82,-1.35],[.82,-1.35]].forEach(([C,R],I)=>{b.position.set(S.x+C*g+R*A,.33,S.z-C*A+R*g),b.updateMatrix(),_.setMatrixAt(M*4+I,b.matrix)})}for(let M=0;M<d;M++)v(M);function E(M,T){let g=s.length;for(let A=0;A<g;A++){let C=s[A],R=s[(A+1)%g],I=g>1?(R.d-C.d+r)%r-ps-.4:1/0,U=g>1?C.v-R.v:0;for(let L of T){if(Math.abs(L.a-C.a)>1.9)continue;let B=(L.d-C.d+r)%r-ps/2-1.2;B<I&&B<40&&(I=B,U=C.v)}C.v=Math.max(0,C.v+ef(C.v,C.v0,Math.max(.1,I),U)*M),C.d+=C.v*M,C.d>i+r&&(C.d-=r),v(A)}h.instanceMatrix.needsUpdate=f.instanceMatrix.needsUpdate=_.instanceMatrix.needsUpdate=!0}return{grupo:u,todos:c,cada:E}}function rf(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),r={},s={},o=a[0].morphTargetsRelative,l=new ht,c=0;for(let d=0;d<a.length;++d){let p=a[d],h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,p=[];for(let h=0;h<a.length;++h){let f=a[h].index;for(let x=0;x<f.count;++x)p.push(f.getX(x)+d);d+=a[h].attributes.position.count}l.setIndex(p)}for(let d in r){let p=af(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(let d in s){let p=s[d][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<p;++h){let f=[];for(let _=0;_<s[d].length;++_)f.push(s[d][_][h]);let x=af(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(x)}}}return l}function af(a){let e,t,n,i=-1,r=0;for(let c=0;c<a.length;++c){let d=a[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let s=new e(r),o=new mt(s,t,n),l=0;for(let c=0;c<a.length;++c){let d=a[c];if(d.isInterleavedBufferAttribute){let p=l/t;for(let h=0,f=d.count;h<f;h++)for(let x=0;x<t;x++){let _=d.getComponent(h,x);o.setComponent(h+p,x,_)}}else s.set(d.array,l);l+=d.count*t}return i!==void 0&&(o.gpuType=i),o}var $d=new Map,hn=(a,e={})=>{let t=a+JSON.stringify(e);return $d.has(t)||$d.set(t,new ft({color:a,roughness:.7,...e})),$d.get(t)};function Jl(a,e,t){let n=new Gi(e,Math.max(.001,a-2*e),4,10);n.translate(0,-a/2,0);let i=new Ye(n,t);return i.castShadow=!0,i}var nr=.3,Zl=.29,sf=new F(0,-1,-.4).normalize(),qd=new F,Wd=new F,hi=new F,of=new F,lf=new F,Xd=new F,pi=new F,cf=new F,fs=new F,S_=new vt,Yd={x:0,z:0};function df(a){let e=Math.asin(Math.max(-1,Math.min(1,a.x))),t=Math.cos(e);return Yd.z=e,Yd.x=t>1e-4?Math.atan2(-a.z/t,-a.y/t):0,Yd}var M_=.12;function uf({camisa:a=16040475,pantalon:e=2046819,piel:t=13148794,pelo:n=2825492,uniforme:i=!0}={}){let r={camisa:hn(a),pantalon:hn(e),piel:hn(t,{roughness:.6}),pelo:hn(n,{roughness:.9}),casco:hn(16766503,{roughness:.35}),arnes:hn(10211642,{roughness:.6}),metal:hn(12896978,{roughness:.25,metalness:.8}),plastico:hn(2830134,{roughness:.5}),bota:hn(3877408),lentes:hn(1844272,{roughness:.1,metalness:.4}),guante:hn(13214042,{roughness:.8}),reflectivo:hn(14221135,{roughness:.4,emissive:3359744})},s=new ut,o=new ut;o.position.y=.92,s.add(o);let l=new Ye(new na(.15,14,10),r.pantalon);l.scale.set(1.15,.8,.9),l.castShadow=!0,o.add(l);let c=ee=>{let K=new ut;K.position.set(ee*.095,-.04,0),o.add(K),K.add(Jl(.45,.072,r.pantalon));let re=new ut;re.position.y=-.45,K.add(re),re.add(Jl(.43,.058,r.pantalon));let ge=new ut;ge.position.y=-.43,re.add(ge);let D=new Ye(new Zt(.11,.085,.27),r.bota);return D.position.set(0,-.03,.06),D.castShadow=!0,ge.add(D),{h:K,rod:re,tob:ge}},d=c(1),p=c(-1),h=new ut;h.position.y=.05,o.add(h);let f=new Ye(new Gi(.155,.34,6,14),r.camisa);if(f.position.y=.3,f.scale.set(1.12,1,.78),f.castShadow=!0,h.add(f),i)for(let ee of[.2,.38]){let K=new Ye(new dn(.176,.176,.035,20,1,!0),r.reflectivo);K.position.y=ee,K.scale.set(1.12,1,.8),h.add(K)}let x=new ut;x.position.y=.58,h.add(x);let _=new Ye(new na(.105,18,14),r.piel);_.position.y=.13,_.scale.set(.92,1.05,1),_.castShadow=!0,x.add(_);let m=new Ye(new na(.11,16,10,0,Math.PI*2,0,Math.PI*.55),r.pelo);m.position.y=.145,m.rotation.x=-.25,x.add(m);for(let ee of[-1,1]){let K=new Ye(new na(.013,8,6),hn(1118481));K.position.set(ee*.036,.15,.092),x.add(K)}let u=new Ye(new Zt(.13,.035,.02),r.lentes);u.position.set(0,.15,.1),u.visible=!1,x.add(u);let b=new ut;b.position.y=.19,b.visible=!1,x.add(b);let S=new Ye(new na(.123,22,12,0,Math.PI*2,0,Math.PI/2),r.casco);S.castShadow=!0;let v=new Ye(new dn(.18,.18,.014,30),r.casco);v.position.y=.004,v.castShadow=!0;let E=new Ye(new Rn(.105,.006,6,22,Math.PI),r.plastico);E.rotation.set(0,Math.PI/2,Math.PI),E.position.y=-.03,b.add(S,v,E);let M=ee=>{let K=new ut;K.position.set(ee*.2,.5,0),h.add(K),K.add(Jl(.3,.052,r.camisa));let re=new ut;re.position.y=-.3,K.add(re),re.add(Jl(.27,.045,r.camisa));let ge=new Ye(new na(.05,10,8),r.piel);return ge.position.y=-.29,re.add(ge),{h:K,codo:re,mano:ge}},T=M(1),g=M(-1),A=new Ye(new Rn(.05,.014,6,14),hn(13938487,{metalness:.9,roughness:.2}));A.rotation.x=Math.PI/2,A.position.y=-.24,A.visible=!1,T.codo.add(A);let C=new ut;C.visible=!1;let R=[];for(let ee of[-1,1]){let K=[[.07,.02,.135],[.085,.3,.14],[.1,.5,.1],[.11,.6,0],[.1,.5,-.1],[.085,.3,-.14],[.07,.02,-.135]].map(([ge,D,Be])=>new F(ee*ge,D,Be)),re=new Ye(new Vr(new Hi(K),30,.016,6),r.arnes);h.add(re),R.push(re)}let I=new Ye(new Zt(.2,.03,.012),r.arnes);I.position.set(0,.36,.142),h.add(I),R.push(I);let U=new Ye(new Rn(.172,.017,8,36),r.arnes);U.rotation.x=Math.PI/2,U.scale.set(1.08,.82,1),U.position.y=.02,o.add(U),R.push(U);for(let ee of[d,p]){let K=new Ye(new Rn(.08,.013,8,24),r.arnes);K.rotation.x=Math.PI/2,K.position.y=-.12,ee.h.add(K),R.push(K)}let L=()=>new Ye(new Rn(.03,.008,8,18),r.metal),B=L();B.position.set(.19,.02,0),B.rotation.y=Math.PI/2,o.add(B);let Z=L();Z.position.set(-.19,.02,0),Z.rotation.y=Math.PI/2,o.add(Z);let Q=L();Q.position.set(0,.48,-.14),h.add(Q);let q=L();q.position.set(0,.2,.158),q.scale.setScalar(1.15),h.add(q);let J=new Ye(new Zt(.034,.17,.012),r.arnes);J.position.set(0,.285,.15),h.add(J);let j=new Ye(new Rn(.024,.009,8,14,Math.PI*1.3),r.plastico);j.position.set(-.12,-.01,.13),j.rotation.z=Math.PI*.85,o.add(j),R.push(B,Z,Q,q,J,j);let se=ee=>R.forEach(K=>{K.visible=ee});se(!1);let Se=(ee,K,re,ge)=>{let D=new _t;return D.position.set(K,re,ge),ee.add(D),D},k={dIzq:Se(B,0,0,0),dDer:Se(Z,0,0,0),porta:Se(j,0,0,0),dorsal:Se(Q,0,0,0),frontal:Se(q,0,-.02,0),pecho:Se(h,0,.38,.2),cabeza:Se(x,0,.32,0),manoI:Se(T.mano,0,0,0),manoD:Se(g.mano,0,0,0)};{let ee=new Set([u,A,...R,T.mano,g.mano]);b.traverse(K=>ee.add(K)),s.updateMatrixWorld(!0),s.traverse(K=>{if(!K.isGroup)return;let re=new Map;for(let ge of K.children)ge.isMesh&&!ee.has(ge)&&ge.visible&&!ge.children.length&&(re.has(ge.material)||re.set(ge.material,[]),re.get(ge.material).push(ge));for(let[ge,D]of re){if(D.length<2)continue;let Be=D.map(P=>{P.updateMatrix();let y=(P.geometry.index?P.geometry.toNonIndexed():P.geometry.clone()).applyMatrix4(P.matrix);for(let O of Object.keys(y.attributes))["position","normal","uv"].includes(O)||y.deleteAttribute(O);return y}),Ee=new Ye(rf(Be,!1),ge);Ee.castShadow=D.some(P=>P.castShadow),D.forEach(P=>K.remove(P)),K.add(Ee)}})}let ue=new Set;function _e(ee,K=!0){K?ue.add(ee):ue.delete(ee),ee==="casco"&&(b.visible=K),ee==="lentes"&&(u.visible=K),ee==="guantes"&&(T.mano.material=g.mano.material=K?r.guante:r.piel),ee==="arnes"&&se(K),ee==="reloj"&&(A.visible=K)}let Me=Gl.nuevo,V=[d.h,d.rod,d.tob,p.h,p.rod,p.tob,T.h,T.codo,g.h,g.codo,h,x,o],H=V.length*3+1,ce=new Float64Array(H),pe=new Float64Array(H),fe=new Float64Array(H),N=null,oe=ee=>{let K=0;for(let re of V)ee[K++]=re.rotation.x,ee[K++]=re.rotation.y,ee[K++]=re.rotation.z;ee[K]=o.position.y},me=ee=>{let K=0;for(let re of V)re.rotation.set(ee[K++],ee[K++],ee[K++]);o.position.y=ee[K]};function be(ee,K){if(h.updateMatrix(),qd.copy(K).sub(o.position).applyMatrix4(S_.copy(h.matrix).invert()),Wd.copy(ee.h.position),hi.subVectors(qd,Wd),hi.lengthSq()<1e-8)return;let re=Math.max(nr-Zl+.001,Math.min(nr+Zl-.001,hi.length()));hi.normalize();let ge=Math.acos(Math.max(-1,Math.min(1,(nr*nr+re*re-Zl*Zl)/(2*nr*re))));lf.copy(sf).addScaledVector(hi,-sf.dot(hi)).normalize(),Xd.copy(hi).multiplyScalar(Math.cos(ge)).addScaledVector(lf,Math.sin(ge)),of.copy(Wd).addScaledVector(Xd,nr),pi.subVectors(qd,of).normalize();let D=df(Xd);ee.h.rotation.set(D.x,0,D.z);let Be=Math.cos(D.x),Ee=Math.sin(D.x),P=Math.cos(D.z),y=Math.sin(D.z),O=pi.y*Be+pi.z*Ee,$=-pi.y*Ee+pi.z*Be;cf.set(pi.x*P+O*y,-pi.x*y+O*P,$);let ne=df(cf);ee.codo.rotation.set(ne.x,0,ne.z)}function ve(ee,K){if(ee==="escalar"){let re=1.45+.06*K,ge=1.45-.06*K;be(T,fs.set(.23,re,.1+.268*re-.04)),be(g,fs.set(-.23,ge,.1+.268*ge-.04))}else if(ee==="sostener"){let re=.3414000000000001;be(T,fs.set(.23,1.05,re)),be(g,fs.set(-.23,1.05,re))}else ee==="banderero"?be(g,fs.set(-.22,1.62,.3)):ee==="caminar"&&(T.codo.rotation.x=-.25-.2*Math.max(0,K),g.codo.rotation.x=-.25-.2*Math.max(0,-K))}function Re({tipo:ee="idle",fase:K=0,t:re=0,mirarArriba:ge=0,dt:D}={}){let Be=Me&&D!==void 0&&N!==null&&ee!==N;Be&&oe(ce);for(let y of[d.h,d.rod,d.tob,p.h,p.rod,p.tob,T.h,T.codo,g.h,g.codo,h,x,o])y.rotation.set(0,0,0);o.position.y=.92;let Ee=Math.sin(K),P=Math.cos(K);if(T.h.rotation.z=-.12,g.h.rotation.z=.12,h.rotation.x=.02*Math.sin(re*2),x.rotation.x=-ge,ee==="caminar")d.h.rotation.x=Ee*.55,p.h.rotation.x=-Ee*.55,d.rod.rotation.x=Math.max(0,-Ee)*.7,p.rod.rotation.x=Math.max(0,Ee)*.7,T.h.rotation.x=-Ee*.45,g.h.rotation.x=Ee*.45,T.codo.rotation.x=-.3,g.codo.rotation.x=-.3,o.position.y=.92+Math.abs(P)*.025;else if(ee==="escalar")T.h.rotation.set(-2.5+Ee*.3,0,-.18),T.codo.rotation.x=-.45-Math.max(0,Ee)*.3,g.h.rotation.set(-2.5-Ee*.3,0,.18),g.codo.rotation.x=-.45-Math.max(0,-Ee)*.3,d.h.rotation.x=-.55-Math.max(0,Ee)*.5,d.rod.rotation.x=.7+Math.max(0,Ee)*.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.2-Math.max(0,-Ee)*.5,p.rod.rotation.x=.25+Math.max(0,-Ee)*.6,p.tob.rotation.x=-.05,h.rotation.x=.12,x.rotation.x=-.25-ge;else if(ee==="trabajar"){let y=Math.sin(re*3)*.1;T.h.rotation.set(-2.25+y,0,-.25),T.codo.rotation.x=-.6+y,g.h.rotation.set(-2-y,0,.3),g.codo.rotation.x=-.8-y,d.h.rotation.x=-.45,d.rod.rotation.x=.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.08,p.rod.rotation.x=.12,h.rotation.x=.14,x.rotation.x=-.35}else ee==="sostener"?(T.h.rotation.set(-1.35,0,-.1),g.h.rotation.set(-1.35,0,.1),T.codo.rotation.x=-.3,g.codo.rotation.x=-.3):ee==="senalar"?(g.h.rotation.set(-1.5,0,.5),g.codo.rotation.x=-.1,h.rotation.y=.2):ee==="cargar"?(T.h.rotation.set(-2.9,0,-.2),g.h.rotation.set(-2.9,0,.2),T.codo.rotation.x=-.2,g.codo.rotation.x=-.2,d.h.rotation.x=Ee*.45,p.h.rotation.x=-Ee*.45,d.rod.rotation.x=Math.max(0,-Ee)*.6,p.rod.rotation.x=Math.max(0,Ee)*.6):ee==="caida"?(T.h.rotation.set(-2.8+Ee*.4,0,-.6),g.h.rotation.set(-2.6-Ee*.4,0,.6),d.h.rotation.x=-.4+Ee*.3,p.h.rotation.x=-.1-Ee*.3,d.rod.rotation.x=.5,p.rod.rotation.x=.3):ee==="colgado"?(T.h.rotation.set(-2.9,0,-.3),g.h.rotation.set(-2.9,0,.3),d.h.rotation.x=-.3,p.h.rotation.x=-.1,d.rod.rotation.x=.4,p.rod.rotation.x=.3,h.rotation.x=-.1):ee==="tendido"?(T.h.rotation.set(-.3,0,-1.1),g.h.rotation.set(.2,0,1.3),T.codo.rotation.x=-.5,g.codo.rotation.x=-.2,d.h.rotation.set(.05,0,.12),p.h.rotation.set(-.15,0,-.08),p.rod.rotation.x=.35,x.rotation.y=.5):ee==="banderero"?(g.h.rotation.set(-1.55,0,.15),g.codo.rotation.x=-.15,T.h.rotation.set(-.9+Math.sin(re*2.2)*.5,0,-.5),T.codo.rotation.x=-.4):ee==="celular"?(g.h.rotation.set(-1.1,0,.25),g.codo.rotation.x=-1.2,x.rotation.x=.45,d.h.rotation.x=Ee*.45,p.h.rotation.x=-Ee*.45,d.rod.rotation.x=Math.max(0,-Ee)*.6,p.rod.rotation.x=Math.max(0,Ee)*.6):(T.codo.rotation.x=-.08,g.codo.rotation.x=-.08);if(Me){if(ve(ee,Ee),oe(pe),D===void 0)fe.fill(0);else{if(Be)for(let O=0;O<H;O++)fe[O]=ce[O]-pe[O];let y=Math.exp(-D/M_);for(let O=0;O<H;O++){let $=fe[O]*y;Math.abs($)<1e-4&&($=0),fe[O]=$,pe[O]+=$}me(pe)}N=ee}}Re();let he=new Set([s,o,d.h,d.rod,d.tob,p.h,p.rod,p.tob,h,x,T.h,T.codo,g.h,g.codo]);return s.updateMatrixWorld(!0),s.traverse(ee=>{he.has(ee)||(ee.updateMatrix(),ee.matrixAutoUpdate=!1)}),{raiz:s,pose:Re,equipar:_e,equipado:ue,refs:k,M:r,partes:{pelvis:o,torso:h,cuello:x,bi:T,bd:g,pi:d,pd:p}}}var E_=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a)),Jd={c:"cargar",e:"escalar",t:"trabajar",s:"sostener"};function Zd(a){let e=uf(a);return e.raiz.traverse(t=>{t.isMesh&&(t.castShadow=!1)}),e}function hf(a,e){let t=new Map;function n(s,o,l,c,d,p,h="i"){let f=t.get(s);return f||(f={id:s,p:Zd(d),x:o,z:l,y:p??e(o,l),ox:o,oz:l,rumbo:c??0,orumbo:c??0,fase:Math.random()*6,d:0,a:0},f.p.equipar("casco",!!d?.uniforme),d?.arnes&&f.p.equipar("arnes"),a.add(f.p.raiz),t.set(s,f)),f.ox=o,f.oz=l,f.oy=p,f.pose=h,c!==void 0&&(f.orumbo=c),f}function i(s){let o=t.get(s);o&&(a.remove(o.p.raiz),t.delete(s))}function r(s,o,l){let c=1-Math.exp(-s*10);for(let d of t.values()){let p=(d.ox-d.x)*c,h=(d.oz-d.z)*c,f=((d.oy??e(d.x,d.z))-d.y)*c,x=Math.hypot(p,f,h);d.x+=p,d.z+=h,d.y+=f;let _=Math.hypot(p,h)/s>.25,m=Jd[d.pose];d.rumbo=E_(d.rumbo,_&&!m?Math.atan2(p,h):d.orumbo)*c+d.rumbo*(1-c),d.p.raiz.position.set(d.x,d.y,d.z),d.p.raiz.rotation.y=d.rumbo;let u=Math.hypot(d.x-l.position.x,d.z-l.position.z);d.p.raiz.visible=u<140&&d.pose!=="o",u<60&&(d.fase+=x*4.19,d.p.pose({tipo:m??(_?"caminar":"idle"),fase:d.fase,t:o,dt:s}))}}return{mapa:t,fijar:n,quitar:i,cada:r}}function pf(a){let e=new Bt(new Br(.5,16).rotateX(-Math.PI/2),new xn({color:0,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a);e.frustumCulled=!1,e.renderOrder=1;let t=new _t;return{malla:e,fijar(n,i,r,s,o,l=o,c=0){t.position.set(i,r+.02,s),t.rotation.set(0,c,0),t.scale.set(o,1,l),t.updateMatrix(),e.setMatrixAt(n,t.matrix)},listo(n){e.count=Math.min(n,a),e.instanceMatrix.needsUpdate=!0}}}var Kd=.16,Kl=56,Ql=a=>Math.abs(a)<Kd?0:(a-Math.sign(a)*Kd)/(1-Kd);function ff(a,e){let t=new Set,n=new Set,i={mx:0,mz:0,gx:0,gy:0,correr:!1,accion:!1,vista:!1,origen:Zi?"t\xE1ctil":"teclado y rat\xF3n"},r=0,s=0,o={sensibilidad:1,invertir:!1};addEventListener("keydown",b=>{b.repeat||(t.add(b.code),i.origen="teclado y rat\xF3n",b.target?.tagName!=="INPUT"&&(b.code==="KeyE"&&n.add("accion"),b.code==="KeyV"&&n.add("vista"),b.code==="KeyR"&&n.add("radio"),b.code==="KeyM"&&n.add("mapa"),b.code==="KeyP"&&n.add("pausa"),b.code==="KeyH"&&n.add("bocina")))}),addEventListener("keyup",b=>t.delete(b.code)),addEventListener("blur",()=>t.clear());let l=(...b)=>b.some(S=>t.has(S))?1:0;a.addEventListener("click",()=>{!Zi&&document.pointerLockElement!==a&&a.requestPointerLock?.()?.catch?.(()=>{})}),addEventListener("mousemove",b=>{document.pointerLockElement===a&&(r+=b.movementX*.0024,s-=b.movementY*.0024)});let c={id:null,x0:0,y0:0,x:0,y:0},d={id:null,x:0,y:0},p=document.createElement("div"),h=document.createElement("div");p.className="mu-base",h.className="mu-perilla",p.append(h),p.hidden=!0,e.append(p),a.style.touchAction="none",a.addEventListener("pointerdown",b=>{b.pointerType==="touch"&&(i.origen="t\xE1ctil",b.clientX<innerWidth*.45&&c.id===null?(Object.assign(c,{id:b.pointerId,x0:b.clientX,y0:b.clientY,x:0,y:0}),p.style.left=b.clientX+"px",p.style.top=b.clientY+"px",h.style.transform="",p.hidden=!1):d.id===null&&Object.assign(d,{id:b.pointerId,x:b.clientX,y:b.clientY}))}),a.addEventListener("pointermove",b=>{if(b.pointerId===c.id){let S=(b.clientX-c.x0)/Kl,v=(b.clientY-c.y0)/Kl,E=Math.hypot(S,v);E>1&&(S/=E,v/=E),c.x=S,c.y=v,h.style.transform=`translate(${S*Kl}px, ${v*Kl}px)`}else b.pointerId===d.id&&(r+=(b.clientX-d.x)*.0052,s-=(b.clientY-d.y)*.0052,d.x=b.clientX,d.y=b.clientY)});let f=b=>{b.pointerId===c.id&&(c.id=null,c.x=c.y=0,p.hidden=!0),b.pointerId===d.id&&(d.id=null)};if(a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f),Zi)for(let[b,S,v]of[["pausa","\u23F8","Pausa"],["mapa","\u{1F5FA}","Mapa"],["radio","\u{1F4FB}","Radio"],["vista","\u{1F441}","Cambiar de vista"],["accion","\u270B","Acci\xF3n"]]){let E=document.createElement("button");E.className="mu-boton mu-"+b,E.textContent=S,E.setAttribute("aria-label",v),E.addEventListener("pointerdown",M=>{M.preventDefault(),n.add(b)}),e.append(E)}let x={},_={0:"accion",1:"atras",2:"radio",3:"vista",4:"bocina",8:"mapa",9:"pausa",12:"arriba",13:"abajo"};function m(b){let S=null;try{S=Array.from(navigator.getGamepads?.()??[]).find(R=>R?.connected&&R.mapping==="standard")}catch{}if(!S)return null;let v=Ql(S.axes[2]),E=Ql(S.axes[3]);(v||E)&&(r+=v*2.6*b,s-=E*1.9*b);let M=!1;for(let R in _){let I=!!S.buttons[R]?.pressed;I&&!x[R]&&(n.add(_[R]),M=!0),x[R]=I}let T=Ql(S.axes[0]),g=-Ql(S.axes[1]),A=!!(S.buttons[6]?.pressed||S.buttons[10]?.pressed),C=g>.6?"arriba":g<-.6?"abajo":null;return C&&x.pal!==C&&n.add(C),x.pal=C,(T||g||v||E||M)&&(i.origen="control"),{mx:T,mz:g,correr:A}}function u(b){let S=l("KeyD","ArrowRight")-l("KeyA","ArrowLeft"),v=l("KeyW","ArrowUp")-l("KeyS","ArrowDown"),E=!!l("ShiftLeft","ShiftRight");c.id!==null&&(S=c.x,v=-c.y,E=Math.hypot(S,v)>.92);let M=m(b);M&&(M.mx||M.mz)&&(S=M.mx,v=M.mz,E=M.correr);let T=Math.hypot(S,v);T>1&&(S/=T,v/=T),i.mx=S,i.mz=v,i.correr=E,i.gx=r*o.sensibilidad,i.gy=s*o.sensibilidad*(o.invertir?-1:1),r=s=0;for(let g of["accion","vista","radio","mapa","pausa","bocina","atras","arriba","abajo"])i[g]=n.has(g);return n.clear(),i}return{leer:u,pulsar:b=>n.add(b),mirada:o}}var A_=`
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
`;function mf(){let a=document.createElement("style");a.textContent=A_,document.head.append(a);let e=document.createElement("div");return e.className="mu-capa",document.body.append(e),e}function gf(a,e){let t=document.createElement("div");t.className="mu-diag",t.hidden=!e;let n=document.createElement("div"),i=document.createElement("button");return i.textContent="Copiar diagn\xF3stico",i.addEventListener("click",async()=>{let r=`${n.textContent}
${navigator.userAgent}
${innerWidth}\xD7${innerHeight} \xB7 dpr ${devicePixelRatio}`;try{await navigator.clipboard.writeText(r),i.textContent="Copiado \u2713"}catch{i.textContent="No se pudo copiar"}setTimeout(()=>{i.textContent="Copiar diagn\xF3stico"},2e3)}),t.append(n,i),a.append(t),addEventListener("keydown",r=>{r.code==="F3"&&(r.preventDefault(),t.hidden=!t.hidden)}),{escribir:r=>{n.textContent=r},mostrar:r=>{t.hidden=!r}}}var Wa={inspeccion:"GS-101 \xB7 Inspecci\xF3n de poster\xEDa (\xA75.6.3) \xB7 p. 21",demarcacion:"GS-101 \xB7 Demarcaci\xF3n (\xA75.6.2) \xB7 p. 21",equipo:"GS-101 \xB7 Trabajo seguro en postes (\xA75.6.1) \xB7 pp. 20\u201321"},xf={a:{texto:"El poste parece obviamente inseguro.",corto:"Poste obviamente inseguro",material:null,aplicaAntesDeSubir:!0,dibujable:!1},b:{texto:"El poste se mueve.",corto:"Poste que se mueve",material:null,aplicaAntesDeSubir:!0,dibujable:!1},c:{texto:"El poste est\xE1 inclinado.",corto:"Poste inclinado",material:null,aplicaAntesDeSubir:!0,dibujable:!0},d:{texto:"La base del poste se alter\xF3 mientras se trabajaba arriba.",corto:"Base alterada",material:null,aplicaAntesDeSubir:!1,dibujable:!1},e:{texto:"Al despojar el poste de algunos cables y retenidas, se observa que est\xE1 soportado por los cables.",corto:"Soportado por los cables",material:null,aplicaAntesDeSubir:!1,dibujable:!1},f:{texto:"El terreno presenta deslizamientos.",corto:"Deslizamiento del terreno",material:null,aplicaAntesDeSubir:!0,dibujable:!1},g:{texto:"Poste de madera con fisuras, quemado o podrido: el da\xF1o no debe superar una tercera parte del di\xE1metro. Tampoco nudos con agrietamiento, ni agrietamientos a lo largo que comprometan m\xE1s de una tercera parte del poste.",corto:"Madera fisurada o podrida",material:"madera",aplicaAntesDeSubir:!0,dibujable:!0},h:{texto:"Poste de metal con oxidaci\xF3n que supera una tercera parte del di\xE1metro, o con perforaciones superiores a una tercera parte del di\xE1metro, o con una l\xEDnea el\xE9ctrica en posible contacto directo con el poste.",corto:"Metal oxidado o perforado",material:"metal",aplicaAntesDeSubir:!0,dibujable:!0}},JM=Object.keys(xf).filter(a=>xf[a].aplicaAntesDeSubir);var QM=typeof __URL_PUBLICA__=="string"?__URL_PUBLICA__:globalThis.process?.env?.URL_PUBLICA||"https://ruben1155.github.io/cuadrilla-segura/",eE=typeof __PREFIJO__=="string"?__PREFIJO__:globalThis.process?.env?.PREFIJO_ALMACEN||"cuadrilla-segura:";var Qd={url:"https://okhbiliodjuofzsjkolg.supabase.co",llave:"sb_publishable_F3-PMi9uLDPR655ZOCs60g_m0S_C6Ec"};var W={altura:"GS-101 \xB7 Trabajo seguro en alturas",escaleras:"GS-101 \xB7 Trabajo seguro en escaleras port\xE1tiles",amarre:"GS-101 \xB7 Paso a paso para el aseguramiento de la escalera a un poste",epp:"GS-101 \xB7 Uso de equipo de protecci\xF3n personal",general:"GS-101 \xB7 Lineamientos en seguridad general",electrico:"GS-101 \xB7 Trabajo seguro en proximidad de l\xEDneas energizadas",demarcacion:"GS-101 \xB7 Demarcaci\xF3n y se\xF1alizaci\xF3n del \xE1rea",emergencias:"GS-101 \xB7 Emergencias en trabajos en alturas",suspender:"GS-101 \xB7 Suspensi\xF3n de labores ante peligro no controlado",vehiculos:"GS-101 \xB7 Seguridad en la conducci\xF3n de veh\xEDculos",carga:"GS-101 \xB7 Lineamientos generales: manipulaci\xF3n de cargas",cuadrillas:"GS-101 \xB7 Cuadrillas de trabajo",reportes:"GS-101 \xB7 Reporte de incidentes y accidentes laborales",freno:"GS-101 \xB7 Equipo para trabajo en postes (freno para cuerda) \xB7 pr\xE1ctica de la cuadrilla: el freno va a la argolla frontal",m_altura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable",m_prep:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 Preparaci\xF3n antes de instalar",m_gaza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.8 Gazas, herrajes y accesorios",m_tension:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n",m_radio:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura",m_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.24 Rollos de reserva en redes a\xE9reas",m_rollo_poste:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de red en el poste (di\xE1metro del rollo de 40 a 50 cm)",m_calco:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas",m_preform:"Manual MNO-DS-GE-001 \xB7 Anexo 3: uso de preformados seg\xFAn di\xE1metro del cable",m_colores:"Manual MNO-DS-GE-001 \xB7 Anexo 4: c\xF3digo de colores EIA/TIA-598",m_cierre:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme",m_pruebas:"Manual MNO-DS-GE-001 \xB7 \xA76.7 Pruebas de aceptaci\xF3n",m_balona:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.6 Balona",m_postes:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.3.2 Distancia entre postes",m_ferrea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.5 Cruce de l\xEDnea f\xE9rrea",m_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 Preparaci\xF3n y limpieza de registros",m_subterranea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.2 y \xA76.2.1.3 Instalaci\xF3n subterr\xE1nea y selecci\xF3n de ductos",m_reserva_sub:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 Rollos de reserva en registros",m_tapas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.5 Dispositivos de seguridad de las tapas",poda_transito:"GS-101 \xB7 \xA75.6.10 n) Poda de \xE1rboles: en v\xEDas de alto tr\xE1nsito se pide colaboraci\xF3n a entidades como tr\xE1nsito \xB7 p. 40",confinado:"GS-101 \xB7 T\xE9rminos: espacio confinado",t_techo:"GS-101 \xB7 \xA75.6.7 Trabajo seguro en techos \xB7 p\xE1g. 30",t_techo_epp:"GS-101 \xB7 \xA75.6.7 Equipo de protecci\xF3n personal en techos \xB7 p\xE1g. 30",t_techo_escalera:"GS-101 \xB7 \xA75.6.7 a\u2013c Escalera para acceder al techo \xB7 p\xE1g. 30",t_techo_anclaje:"GS-101 \xB7 \xA75.6.7 d\u2013f Anclaje y l\xEDnea de vida provisional \xB7 p\xE1g. 30\u201331",t_techo_traslado:"GS-101 \xB7 \xA75.6.7 g Traslado al techo y descenso anclado \xB7 p\xE1g. 31",t_techo_caminar:"GS-101 \xB7 \xA75.6.7 h\u2013j Caminar en el techo y l\xE1minas \xB7 p\xE1g. 32",t_techo_clima:"GS-101 \xB7 \xA75.6.7 n Condiciones clim\xE1ticas adversas \xB7 p\xE1g. 33",t_techo_peligro:"GS-101 \xB7 \xA75.6.7 p Zonas inseguras del techo \xB7 p\xE1g. 33",t_escalera_base:"GS-101 \xB7 \xA75.6.4 g Escaleras port\xE1tiles: per\xEDmetro de 2 m \xB7 p\xE1g. 22\u201323",t_escalera_tres:"GS-101 \xB7 \xA75.6.4 Nota: tres pelda\xF1os superiores prohibidos \xB7 p\xE1g. 22",t_escalera_sola:"GS-101 \xB7 \xA75.6.4 i Un solo trabajador sobre la escalera \xB7 p\xE1g. 23",mt_epp:"GS-101 \xB7 5.6.9 EPP para trabajo en proximidad de l\xEDneas energizadas \xB7 p. 34",mt_identificar:"GS-101 \xB7 5.6.9 c) y observaciones 1 y 2 \xB7 p. 35",mt_distancias:"GS-101 \xB7 5.6.9 b) Distancias de instalaci\xF3n con el secundario (40 cm) y el neutro (80 cm) \xB7 p. 35",mt_tabla4:"GS-101 \xB7 5.6.9 e) Tabla N\xB0 4, distancias m\xEDnimas de seguridad \xB7 p. 37",mt_suspender:"GS-101 \xB7 5.6.9 f) Telecomunicaciones a menos de 80 cm de la primaria MT, en contacto con el secundario o al nivel de este \xB7 p. 37",mt_senal:"GS-101 \xB7 5.6.9 g) Se\xF1alizaci\xF3n del \xE1rea de trabajo a nivel de suelo \xB7 p. 37",mt_activa:"GS-101 \xB7 5.6.9 h) Todas las l\xEDneas el\xE9ctricas se consideran activas \xB7 p. 38",mt_frontera:"GS-101 \xB7 5.2 w) Fronteras de aproximaci\xF3n: solo personas calificadas cruzan el l\xEDmite \xB7 p. 12",mt_escalera:"GS-101 \xB7 5.6.4 q) Escaleras de abrir de fibra de vidrio; nota sobre escaleras de aluminio \xB7 p. 23",mt_guante_cuero:"GS-101 \xB7 5.3.4 b) Los guantes de cuero no son para trabajos en presencia de tensi\xF3n \xB7 p. 15",mt_rigidez:"GS-101 \xB7 5.1 d) Buena rigidez diel\xE9ctrica: no sujetarse de estructuras met\xE1licas cercanas \xB7 p. 9",poda_epp:"GS-101 \xB7 \xA75.6.10 d) y e) Equipo de protecci\xF3n para poda: careta, lentes, protecci\xF3n auditiva, cuerdas, casco de cuatro puntos con barbiquejo, guantes mec\xE1nicos, ropa y calzado institucionales \xB7 pp. 38\u201339",poda_mangas:"GS-101 \xB7 \xA75.6.10 t) Mangas, cuerdas o prendas sueltas pueden enredarse en la motosierra o en la rama \xB7 p. 40",poda_planificar:"GS-101 \xB7 \xA75.6.10 h) Planificaci\xF3n previa: \xE1rbol, terreno, clima, bienes, personas, animales, insectos, tr\xE1nsito y distancia a l\xEDneas \xB7 p. 39",poda_subir:"GS-101 \xB7 \xA75.6.10 f) El trabajador no se debe subir a un \xE1rbol \xB7 p. 39",poda_linea:"GS-101 \xB7 \xA75.6.10 b) y m) Ramas en aproximaci\xF3n o sobre la l\xEDnea energizada: informar y coordinar; no se cortan ramas sobre la l\xEDnea \xB7 pp. 38 y 40",poda_distancias:"GS-101 \xB7 \xA75.6.10 j) y k) Distancias m\xEDnimas: se trabaja fuera de ellas durante el corte y la ca\xEDda, tambi\xE9n para las ramas \xB7 p. 39",poda_cansancio:"GS-101 \xB7 \xA75.6.10 g) No operar maquinaria cansado ni con medicamentos que alteren la conciencia \xB7 p. 39",poda_senal:"GS-101 \xB7 \xA75.6.10 n) Se\xF1alizar el \xE1rea y advertir a terceros; en v\xEDas de alto tr\xE1nsito, pedir apoyo \xB7 p. 40",poda_trayectoria:"GS-101 \xB7 \xA75.6.10 o) Valorar la trayectoria de ca\xEDda y asegurar la zona con se\xF1alizaci\xF3n y personal que regule el paso \xB7 p. 40",poda_equipo:"GS-101 \xB7 \xA75.6.10 p) Revisar el equipo de poda antes de iniciar (cuchillos, mecates, otros dispositivos) \xB7 p. 40",poda_viento:"GS-101 \xB7 \xA75.6.10 q) Antes de cada corte: distancia a lo energizado, viento y vegetaci\xF3n que interfiera \xB7 p. 40",poda_cuerdas:"GS-101 \xB7 \xA75.6.10 r) Cuerdas de trabajo para evitar que la rama cambie de direcci\xF3n al caer \xB7 p. 40",poda_cuadrilla:"GS-101 \xB7 \xA75.4 e) Las cuadrillas de poda de \xE1rboles no pueden ser menores de dos miembros \xB7 p. 18",gal_autorizacion:"Manual MNO-DS-GE-001 \xB7 \xA74.1.6 y \xA74.1.7 Aviso al Centro de Operaciones y autorizaci\xF3n en SASET antes de intervenir fibras en operaci\xF3n",gal_senal:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) Per\xEDmetro del \xE1rea de trabajo asegurado con se\xF1alizaci\xF3n vial y peatonal",gal_vigia:"GS-101 \xB7 \xA75.4 c) Cuadrillas de m\xEDnimo dos personas. La fuente no describe c\xF3mo se vigila la tapa ni la comunicaci\xF3n (duda, ver PENDIENTES_SST.md, J10)",gal_atmosfera:"GS-101 \xB7 T\xE9rminos: espacio confinado (aberturas limitadas, ventilaci\xF3n desfavorable). La fuente no describe el procedimiento de atm\xF3sfera (duda, ver PENDIENTES_SST.md, J10)",gal_ingreso:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 c) Ingreso por escalera met\xE1lica cuando la profundidad lo amerita (aplicado a la galer\xEDa: duda, ver PENDIENTES_SST.md, J10)",gal_epp:"GS-101 \xB7 \xA75.3 Uso de EPP: lista propuesta para la galer\xEDa, a validar por Salud Ocupacional (ver PENDIENTES_SST.md, J10)",gal_respirador:"GS-101 \xB7 \xA75.3.3 f) Respiradores con filtros en lugares de escasa ventilaci\xF3n; los filtros se reemplazan cuando se saturan",gal_cables:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) No da\xF1ar los cables existentes; \xA76.2.2 radio de curvatura; \xA76.2.7.2 fijaciones con cobre en servicio",gal_pletinas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7.1 b) Pletinas peque\xF1as de 20 cm; d) el cable se sujeta del centro hacia los extremos",gal_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 b) y c) Rollo de reserva de 20 a 25 m en la galer\xEDa, en la pared opuesta al MDF, a la mayor altura posible",gal_50cm:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 d) En la pared del MDF, 50 cm libres desde la salida de los ductos hacia el fondo",gal_placas:"Manual MNO-DS-GE-001 \xB7 \xA76.4.2.3 a) y e) Placas acr\xEDlicas con origen y destino; dos placas en cada rollo de reserva",gal_sellado:"Manual MNO-DS-GE-001 \xB7 Anexo 1: sellado de los ductos en la galer\xEDa (espuma expandible reentrable; subductos con tapones de hule)",eri_antes:"GS-101 \xB7 \xA75.7 Antes a) y b): personal capacitado como equipo ERI y en rescate vertical; botiqu\xEDn b\xE1sico y equipos para rescate vertical (cuerdas de seguridad, mosquetones, pull-lift) \xB7 p. 42",eri_criticas:"GS-101 \xB7 \xA75.7 Antes d): los trabajos mayores de 12 m son muy cr\xEDticos; sistema de rescate en el sitio y persona competente en rescate \xB7 p. 42",eri_sistema:"GS-101 \xB7 \xA75.7 Antes c): reportar el deterioro o da\xF1o de los sistemas de prevenci\xF3n y protecci\xF3n contra ca\xEDdas \xB7 p. 42",eri_despejar:"GS-101 \xB7 \xA75.7 Durante a): despejar completamente el \xE1rea donde se present\xF3 el accidente \xB7 p. 42",eri_distancia:"GS-101 \xB7 \xA75.7 Durante b) y g): distancia prudente y segura; antes de un rescate, comprobar que el \xE1rea es segura y que uno est\xE1 protegido \xB7 pp. 42\u201343",eri_911:"GS-101 \xB7 \xA75.7 Durante e) y f): pedir ayuda al 9-1-1; no hacer maniobras de rescate de las que no se tenga conocimiento previo \xB7 p. 43",eri_no_mover:"GS-101 \xB7 \xA75.7 Durante d) y Despu\xE9s b): no mover a la v\xEDctima salvo raz\xF3n de seguridad; brindar tranquilidad a la v\xEDctima \xB7 p. 43",eri_terceros:"GS-101 \xB7 \xA75.7 Durante h): ning\xFAn trabajador informa a personas u organizaciones externas; solo la direcci\xF3n o personal autorizado \xB7 p. 43",eri_fuera:"GS-101 \xB7 \xA75.5 n): los equipos para trabajo en altura que hayan sido usados en pruebas o por una ca\xEDda libre quedan fuera de servicio \xB7 p. 21",sv_permiso:"GS-101 \xB7 \xA75.8 a) Solo conduce veh\xEDculos institucionales el funcionario con los permisos de conducir del ICE \xB7 p. 42",sv_revision:"GS-101 \xB7 \xA75.8 b) Antes de usar el veh\xEDculo se revisan los niveles de aceite, combustible y agua, luces, repuesto, documentos, se\xF1alizaci\xF3n, herramientas y llantas \xB7 p. 43",sv_ley:"GS-101 \xB7 \xA75.8 c) y l) Conducir responsablemente, respetando la Ley de Tr\xE1nsito, sin abusar de la destreza al conducir \xB7 p. 43",sv_celular:"GS-101 \xB7 \xA75.8 d) Queda prohibido el uso del celular durante la conducci\xF3n del veh\xEDculo \xB7 p. 43",sv_estacionar:"GS-101 \xB7 \xA75.8 e) Al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",sv_carga:"GS-101 \xB7 \xA75.8 g) Asegurar objetos, materiales, herramientas y equipos: son un riesgo en un frenado r\xE1pido, vuelco o colisi\xF3n \xB7 p. 43",sv_tablero:"GS-101 \xB7 \xA75.8 h) e i) Nada suelto en el tablero; no recoger objetos del piso ni lejos del alcance mientras se conduce \xB7 p. 43",sv_fatiga:"GS-101 \xB7 \xA75.8 m) Con cansancio o fatiga: detener el veh\xEDculo en un sitio seguro, bajarse, caminar y respirar; si va acompa\xF1ado, ceder la conducci\xF3n \xB7 p. 43",sv_calma:"GS-101 \xB7 \xA75.8 o) Manejar con calma, sin perder el control con otros conductores y evitando confrontaciones \xB7 p. 43",sv_mojado:"GS-101 \xB7 \xA75.8 p) En caminos con grava, arenosos o mojados, bajar la velocidad y manejar con cuidado \xB7 p. 44",sv_danos:"GS-101 \xB7 \xA75.8 q) Reportar los da\xF1os que se observen o causen al veh\xEDculo; no ocultarlos, pueden producir un accidente \xB7 p. 44",sv_alcohol:"GS-101 \xB7 \xA75.8 r) No conducir bajo los efectos del alcohol, drogas o medicamentos que causen somnolencia \xB7 p. 44",sv_defensivo:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Manejo defensivo y sus cinco elementos: conocimiento, estar alerta, previsi\xF3n, juicio y habilidad \xB7 diap. 4\u201311",sv_humano:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 El 90 % de los accidentes viales tiene origen en el factor humano \xB7 diap. 13",sv_estados:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Estados (prisa, frustraci\xF3n, cansancio, complacencia) y los errores que producen \xB7 diap. 17\u201325",sv_linea_fuego:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Errores: ojos no en la tarea y entrar en la l\xEDnea de fuego \xB7 diap. 26 y 30",sv_lluvia:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Factor lluvia: calle mojada (\xABespecie de jab\xF3n\xBB), carreteras, poca visibilidad y neblina \xB7 diap. 36\u201341",sv_visibilidad:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Poca visibilidad: reducir la velocidad; si es excesiva, detener el veh\xEDculo a un costado y esperar \xB7 diap. 40",sv_derrumbe:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Derrumbes originados por la lluvia \xB7 diap. 38 (qu\xE9 hacer ante uno: decisi\xF3n conservadora, ver PENDIENTES_SST.md, J12\u2013J13)",sv_sustancias:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Alcohol, drogas y f\xE1rmacos: efectos seg\xFAn la dosis; los f\xE1rmacos como factor accidentog\xE9nico \xB7 diap. 44\u201349",sv_minimos:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Nueve m\xEDnimos de seguridad vehicular, a revisar todos los d\xEDas antes de salir \xB7 diap. 51\u201352",sv_cinturon:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 M\xEDnimo 1: cintur\xF3n de seguridad retr\xE1ctil de 2 o 3 puntos \xB7 diap. 51",ev_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 \xB7 GS-101 \xB7 Delimitaci\xF3n del \xE1rea",ev_impaciente:"GS-101 \xB7 Cuadrillas en zonas de tr\xE1fico denso \xB7 Delimitaci\xF3n del \xE1rea de trabajo",gs31_ats:"GS-31 \xB7 \xA75.2.4 Antes de la ejecuci\xF3n diaria se realiza el ATS, con todos los trabajadores y liderado por el encargado o t\xE9cnico de la cuadrilla (A01-GS-31) \xB7 p. 10",gs31_cambios:"GS-31 \xB7 \xA75.2.5 Si cambia la planificaci\xF3n inicial (obra, proceso, equipos, personal) se aplica de nuevo el ATS \xB7 p. 10",gs31_f02:"GS-31 \xB7 \xA75.1.11 Las tareas con riesgos de situaci\xF3n cr\xEDtica se eval\xFAan con el F02-GS-31 An\xE1lisis de Tarea Cr\xEDtica \xB7 p. 5",gs31_gravedad:"GS-31 \xB7 \xA75.1.11 d) y f) Gravedad: la p\xE9rdida m\xE1s probable, en la escala 0, 2, 4 y 6 \xB7 p. 6",gs31_repetitividad:"GS-31 \xB7 \xA75.1.11 g) Repetitividad: n\xFAmero de colaboradores y cu\xE1nto de la jornada hace cada uno la tarea \xB7 p. 7",gs31_probabilidad:"GS-31 \xB7 \xA75.1.11 h) Probabilidad de esa p\xE9rdida, de \u22121 a +1 respecto al promedio \xB7 p. 7",gs31_criticidad:"GS-31 \xB7 \xA75.1.11 i) y k) GC = G + R + P (0 a 10): de 0 a 4 baja, m\xE1s de 4 y menos de 8 moderada, 8 o m\xE1s alta \xB7 pp. 7\u20138",gs31_controles:"GS-31 \xB7 \xA75.1.11 m) Controles m\xEDnimos: EPP y dispositivos, capacitaci\xF3n, protocolo de trabajo seguro y la normativa que los respalda \xB7 p. 8",ats_pizarra:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 ATS del d\xEDa: la pizarra (trabajo, herramientas y equipos, obra, fecha, personal y actividades numeradas) \xB7 diap. 46\u201347",ats_muerte:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Factores de muerte; si hay uno o m\xE1s, se revisan en conjunto las acciones a implementar \xB7 diap. 48",ats_riesgos:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Riesgos de cada tarea, manteniendo la numeraci\xF3n de las actividades \xB7 diap. 49",rec_anomalia:"GS-101 \xB7 \xA73.5 b) T\xE9cnico: informar al coordinador de cuadrilla y/o SST cualquier anomal\xEDa o desviaci\xF3n \xB7 p. 4",rec_inminente:"GS-101 \xB7 \xA75.6.4 g), final: si se observa inminente peligro para las personas, se interrumpe la actividad \xB7 p. 23",rec_cuasi:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) c) Casi incidente sin afectaci\xF3n a la salud: F01-GS-52 o F06-GS-52 \xB7 p. 41",rec_accidente:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) b) y d) Accidente: F07-GS-52 a la jefatura de inmediato, antes de terminar la jornada \xB7 pp. 40\u201341",rec_liderazgo:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Reporte por comportamientos: retroalimentaci\xF3n correctiva y registro en el F02-CSCON-SST-00-25 con firma del trabajador; aviso a la jefatura inmediata \xB7 diap. 68",sol_clima:"GS-101 \xB7 \xA75.1 e) Suspensi\xF3n de la actividad por condiciones clim\xE1ticas desfavorables: tormentas el\xE9ctricas, lluvias u otras que pongan en riesgo a los ejecutores \xB7 p. 9",demo_generacion_autorizacion:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 El ingreso a la planta solar se coordina con su encargado, con autorizaci\xF3n previa",demo_generacion_energizado:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los paneles generan electricidad mientras les da la luz: se tratan como energizados",demo_generacion_no_pisar:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 No se pisa ni se apoya nadie en los paneles ni en su estructura",demo_generacion_conexiones:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Solo personal calificado manipula conexiones e inversores, seg\xFAn el procedimiento de la planta",demo_generacion_danos:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los da\xF1os en paneles, cables o inversores se reportan y no se tocan",demo_generacion_calor:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Hidratarse, protegerse del sol y descansar a la sombra con frecuencia",mv_apoyo:"GS-101 \xB7 \xA75.6.6: el veh\xEDculo sirve de soporte a la escalera a medio vano \xB7 p. 28",mv_dos_puntos:"GS-101 \xB7 \xA75.6.6: la escalera se amarra al pant\xF3grafo y al eje de una llanta, a dos puntos \xB7 p. 28",mv_nudos:"GS-101 \xB7 \xA75.6.6: nudo ocho aplicado para dar tensi\xF3n y pata de chancho (ballestrinque) para terminar \xB7 p. 28",mv_subida:"GS-101 \xB7 \xA75.6.6: para subir y bajar, la cuerda de seguridad va sujetada a la escalera \xB7 p. 28",mv_bajada:"GS-101 \xB7 \xA75.6.4 j): subir y bajar de frente, con las manos libres y tres puntos de apoyo \xB7 p. 23",mv_tres:"GS-101 \xB7 \xA75.6.4, nota de la Tabla N\xB0 2: se proh\xEDbe el uso de los tres pelda\xF1os superiores \xB7 p. 22",mv_tabla2:"GS-101 \xB7 \xA75.6.4 f) y Tabla N\xB0 2: altura m\xE1xima permitida de uso de cada escalera \xB7 p. 22",mv_inspeccion:"GS-101 \xB7 \xA75.6.4 c), l), t) y u): revisar pelda\xF1os, uniones, largueros y patas antes de usar la escalera \xB7 pp. 22\u201324",mv_senalizacion:"GS-101 \xB7 \xA75.6.4 g): per\xEDmetro m\xEDnimo de 2 m alrededor de la escalera, con cintas y conos \xB7 pp. 22\u201323",mv_camion:"GS-101 \xB7 \xA75.8 e): al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",mv_herramientas:"GS-101 \xB7 \xA75.6.4 k): materiales y herramientas con bolso, mecate o cuerda \xB7 p. 23",mv_guardar:"GS-101 \xB7 \xA75.6.4 a) y d): la escalera se maneja entre dos y se deposita, no se tira; se limpian los desechos de los pelda\xF1os \xB7 p. 22",mv_mover:"GS-101 \xB7 \xA75.6.4 h): la escalera no se mueve ni se extiende mientras haya personal sobre ella \xB7 p. 23",cala_abertura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.2 Dimensi\xF3n de la cala: 1,5 m de largo por 1 m de ancho, como m\xEDnimo \xB7 p. 18",cala_pieza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tubo de reparaci\xF3n: 50 cm m\xE1s largo que la abertura entre los extremos del ducto \xB7 p. 18",cala_ranura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 La abertura del corte longitudinal queda arriba y se cierra con dos medias secciones de PVC y pegamento \xB7 p. 18",cala_amarras:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tres cintas met\xE1licas o tipo gaza con tornillo sin fin: una en cada extremo y otra en el centro \xB7 p. 18",cala_capas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.4 y Figura 2a: capas de cierre en su orden, espesor y material \xB7 p. 18",cala_empalme:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm, con preformado de 75 cm o menos \xB7 p. 52",cala_anclas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Anclas de seguridad: cada 500 m en tramos rectos de 1 km o m\xE1s, y en cruces de v\xEDa con vano mayor de 80 m en terreno plano \xB7 p. 36",cala_ancla_distancia:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Ubicaci\xF3n del ancla: la mitad de la altura, medida del herraje a la base del poste \xB7 p. 36",cr_cliente:"GS-101 \xB7 \xA75.6.8 a) y b) Observar el cielorraso antes de empezar y preguntar al cliente por sus condiciones \xB7 p. 33",cr_estructura:"GS-101 \xB7 \xA75.6.8 c) La estructura se observa sin corrosi\xF3n avanzada ni madera descompuesta, y estable \xB7 p. 33",cr_electrico:"GS-101 \xB7 \xA75.6.8 d) Cable el\xE9ctrico expuesto: el cliente desconecta la electricidad antes de subir; con guantes diel\xE9ctricos solo si no es posible \xB7 p. 33",cr_epp:"GS-101 \xB7 \xA75.6.8 e) EPP del cielorraso: anteojos, casco con barbiquejo y linterna, ropa, calzado, guantes diel\xE9ctricos y rodilleras \xB7 p. 34",cr_arnes:"GS-101 \xB7 \xA75.5 a) Trabajo a una altura, como en cielorrasos: equipo para trabajo en altura autorizado \xB7 p. 19",cr_extension:"GS-101 \xB7 \xA75.6.8 f) Valorar si es posible usar una extensi\xF3n de fibra para evitar subir al cielorraso \xB7 p. 34",cr_avispas:"GS-101 \xB7 \xA75.6.8 g) Al ingresar, verificar desde el suelo la ausencia de colmenas de avispas o similares \xB7 p. 34",cr_caminar:"GS-101 \xB7 \xA75.6.7 h) por analog\xEDa: caminar por la estructura y no sobre la l\xE1mina (el cielorraso no se cita: duda, ver PENDIENTES_SST.md, J19) \xB7 p. 32",cr_escalera_tipo:"GS-101 \xB7 \xA75.6.4 q) Escaleras de abrir de fibra de vidrio; nota: el aluminio solo donde no hay riesgo el\xE9ctrico \xB7 p. 23",el_provisional:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Arts. 111 y 113 del Reglamento de Seguridad en Construcciones: instalaciones provisionales seg\xFAn el C\xF3digo El\xE9ctrico de CR (entubado, adecuado a la tensi\xF3n nominal) \xB7 diap. 22\u201326",el_medidor:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 112: medidores el\xE9ctricos provisionales con base estable y protecci\xF3n del agua \xB7 diap. 22\u201326",el_tablero:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 114: tableros y cajas el\xE9ctricas tapados, identificados y cerrados \xB7 diap. 22\u201326",el_conductores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 115: conductores protegidos ante da\xF1os mec\xE1nicos de la construcci\xF3n (maquinaria, veh\xEDculos, agua, qu\xEDmicos) \xB7 diap. 27",el_epp:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 117: el personal en presencia de energ\xEDa el\xE9ctrica cuenta con protecci\xF3n diel\xE9ctrica; no usar el EPP diel\xE9ctrico es un acto inseguro \xB7 diap. 27 y 51",el_condiciones:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Condiciones inseguras: enchufes deteriorados, uniones deterioradas o sin aislamiento y conexiones fuera de norma \xB7 diap. 46\u201348",el_autorizacion:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: intervenir sin autorizaci\xF3n \xB7 diap. 51",el_mojado:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: manos o pies mojados; la piel h\xFAmeda tiene menor resistencia \xB7 diap. 13 y 51",el_combustible:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: materiales combustibles o explosivos donde se presente arco el\xE9ctrico; el arco es un fuego repentino con metal fundido \xB7 diap. 5 y 31",el_anexo_b:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: peligro inminente o alto riesgo (sin protecci\xF3n frente al contacto con partes energizadas o el cortocircuito; lluvia y tormentas el\xE9ctricas) \xB7 diap. 30\u201331",el_anexo_c:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo C del C\xF3digo El\xE9ctrico: lista de verificaci\xF3n de instalaciones el\xE9ctricas, aplicada en conjunto con el t\xE9cnico el\xE9ctrico \xB7 diap. 32\u201340",el_factores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Factores de la magnitud de un incidente el\xE9ctrico: intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria \xB7 diap. 9"};var tE=new Map([...Object.entries(W).map(([a,e])=>[e,a]),...Object.entries(Wa).map(([a,e])=>[e,"poste_"+a])]);var T_=[{n:1,p:"\xBFA partir de qu\xE9 altura se considera trabajo en altura?",o:["M\xE1s de 1,80 m","M\xE1s de 3 m","M\xE1s de 1 m","Solo arriba de 5 m"],ref:W.altura},{n:1,p:"\xBFCu\xE1ntos trabajadores pueden estar sobre una escalera port\xE1til?",o:["Uno solo","Dos, si es de extensi\xF3n","Tres, si la escalera es larga","Los que quepan"],ref:W.escaleras},{n:1,p:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera en el poste?",o:["75\xB0","60\xB0","90\xB0","45\xB0"],ref:W.amarre},{n:1,p:"\xBFQu\xE9 pelda\xF1os de la escalera est\xE1 prohibido usar?",o:["Los tres superiores","Solo el primer pelda\xF1o","Ninguno","Los dos inferiores"],ref:W.escaleras},{n:1,p:"\xBFQu\xE9 per\xEDmetro m\xEDnimo se se\xF1aliza alrededor de la escalera?",o:["2 metros","50 cm","No hace falta","10 metros"],ref:W.escaleras},{n:1,p:"Al subir y bajar la escalera debo mantener\u2026",o:["Tres puntos de apoyo","Dos puntos de apoyo","Las manos ocupadas","Un punto de apoyo"],ref:W.escaleras},{n:1,p:"\xBFC\xF3mo se suben las herramientas a la escalera?",o:["Con bolso, mecate o cuerda","En las bolsas del pantal\xF3n","En la mano, pegadas al cuerpo","Que me las lancen desde abajo"],ref:W.escaleras},{n:1,p:"\xBFSe puede trabajar en altura con reloj, anillo o cadena?",o:["No, se proh\xEDbe todo tipo de alhaja","S\xED, si son peque\xF1os y no molestan","Solo el reloj, si no tiene correa met\xE1lica","S\xED, si van bajo el guante de cuero"],ref:W.altura},{n:1,p:"Ante un accidente en altura, \xBFa qu\xE9 n\xFAmero se pide ayuda?",o:["9-1-1","1-1-3","8-0-0","Se espera a la jefatura"],ref:W.emergencias},{n:1,p:"La escalera viaja en el techo del cami\xF3n. \xBFSubir a bajarla es trabajo en altura?",o:["S\xED: el techo est\xE1 a m\xE1s de 1,80 m","No: es solo un cami\xF3n de reparto","Solo si llueve fuerte, con viento","Solo si es de noche y est\xE1 oscuro"],ref:W.altura},{n:1,p:"Tu arn\xE9s tiene una costura reventada. \xBFQu\xE9 haces?",o:["No lo uso, informo y pido la sustituci\xF3n","Lo uso con cuidado, sin que se note","Lo refuerzo con cinta y lo uso hoy","Lo uso solo hoy, ma\xF1ana lo cambio"],ref:W.altura},{n:1,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable a\xE9reo sobre una acera, en su flecha m\xE1xima?",o:["4,5 m","3 m","6 m","2,5 m"],ref:W.m_altura},{n:1,p:"\xBFCu\xE1ntas calcoman\xEDas reflectivas de prevenci\xF3n van en el poste?",o:["Dos, una a cada lado","Una, en el centro del poste","Cuatro, dos a cada lado","Ninguna: no hace falta"],ref:W.m_calco},{n:1,p:"\xBFCu\xE1ntas personas, como m\xEDnimo, forman una cuadrilla de instalaci\xF3n de fibra?",o:["Dos: un t\xE9cnico y un asistente","Una, si tiene experiencia","Cuatro, con un supervisor de obra","Las que haya disponibles ese d\xEDa"],ref:W.cuadrillas},{n:2,p:"\xBFD\xF3nde se conecta preferiblemente la l\xEDnea de vida?",o:["En un anclaje por encima de la cabeza","En el portaganchos pl\xE1stico del arn\xE9s","En un cable telef\xF3nico de la red","A la altura de la cintura, en un pelda\xF1o"],ref:W.altura},{n:2,p:"La l\xEDnea de vida de 0,90 m se conecta en el arn\xE9s a la\u2026",o:["Argolla dorsal (espalda)","Argolla frontal (pecho)","Argolla D lateral","Portaganchos pl\xE1stico"],ref:W.altura},{n:2,p:"El freno para cuerda (o el carrito de la l\xEDnea vertical del cami\xF3n) se conecta a la\u2026",o:["Argolla frontal, a la altura del pecho y el ombligo","Argolla dorsal, en la espalda, junto a la l\xEDnea de 0,90 m","Argolla D lateral de la faja de posicionamiento","Hebilla del cintur\xF3n, sin ning\xFAn anclaje"],ref:W.freno},{n:2,p:"Antes de usar los guantes diel\xE9ctricos, adem\xE1s de revisarlos a la vista, se les hace\u2026",o:["La prueba de aire (inflarlos) para buscar fugas","Nada m\xE1s: con una mirada basta","Una prueba con agua caliente y jab\xF3n","Un estir\xF3n fuerte, de lado y de frente"],ref:W.epp},{n:2,p:"Los guantes diel\xE9ctricos clase 00 (etiqueta beige) protegen hasta\u2026",o:["500 V","1000 V","50 V","15 kV"],ref:W.epp},{n:2,p:"\xBFPor qu\xE9 se usa un guante de cuero sobre el guante diel\xE9ctrico?",o:["Para evitar perforaciones y rasgados del aislante","Para que no se resbale la mano en el trabajo","Porque el color se ve mejor en el poste","No se debe usar: el aislante ya basta solo"],ref:W.epp},{n:2,p:"El casco para trabajo en postes es ala ancha tipo II, con barbiquejo de\u2026",o:["Cuatro puntos","Dos puntos","Un punto","No lleva barbiquejo"],ref:W.epp},{n:2,p:"Resistencia m\xEDnima de un punto de anclaje por persona conectada:",o:["5000 lb (2272 kg)","500 lb","1000 kg","La de cualquier tubo firme"],ref:W.altura},{n:2,p:"Un equipo de altura que ya detuvo una ca\xEDda libre debe\u2026",o:["Quedar fuera de servicio","Revisarse y seguir us\xE1ndose","Lavarse y guardarse","Usarse solo en techos"],ref:W.altura},{n:2,p:"\xBFSe puede enrollar la l\xEDnea de vida para acortarla?",o:["No, est\xE1 prohibido","S\xED, dos vueltas","S\xED, si el anclaje est\xE1 bajo","Solo en escaleras"],ref:W.altura},{n:2,p:"\xBFCu\xE1ntos ganchos se pueden conectar en un mismo anillo D?",o:["Uno, salvo que el fabricante certifique otra cosa","Dos, si ambos son del mismo tama\xF1o","Tres, si el anillo es de acero grueso","Los que quepan en el anillo D"],ref:W.altura},{n:2,p:"La escalera de 28 pies (8,53 m) se traslada y coloca entre\u2026",o:["Dos personas, de estatura similar","Una persona, con ayuda de la cuerda","Tres personas, con la escalera abierta","Con el cami\xF3n en marcha, sin frenar"],ref:W.escaleras},{n:2,p:"L\xEDmite de carga manual para un trabajador sin limitaciones de salud:",o:["25 kg (20 kg para una trabajadora)","50 kg, con un compa\xF1ero que ayude","40 kg para todos los trabajadores","No hay l\xEDmite si el peso se reparte"],ref:W.carga},{n:2,p:"\xBFSe pueden usar calzas para nivelar la escalera?",o:["No: se busca nivelar el sitio sin calzas","S\xED, con piedras o pedazos de madera","S\xED, con bloques de concreto, si el piso est\xE1 flojo","Solo de noche, cuando hay menos tr\xE1nsito"],ref:W.escaleras},{n:3,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable en los cruces de calle?",o:["5 m","4,5 m","6,5 m","3,5 m"],ref:W.m_altura},{n:3,p:"Radio m\xEDnimo de curvatura de un cable de fibra \xF3ptica:",o:["20 veces su di\xE1metro","5 veces su di\xE1metro","2 veces su di\xE1metro","No hay m\xEDnimo"],ref:W.m_radio},{n:3,p:"Tensi\xF3n m\xE1xima recomendada si no hay datos del fabricante:",o:["250 kgf","50 kgf","1000 kgf","Sin l\xEDmite"],ref:W.m_tension},{n:3,p:"La balona de los cables en el poste debe medir como m\xE1ximo:",o:["10 cm","50 cm","1 m","No hay l\xEDmite"],ref:W.m_balona},{n:3,p:"Altura m\xEDnima de la gaza respecto al suelo:",o:["5 m","2 m","3 m","8 m"],ref:W.m_gaza},{n:3,p:"Si en el poste no hay secundario el\xE9ctrico, la gaza va a esta distancia del neutro:",o:["80 cm","10 cm","40 cm","2 m"],ref:W.m_gaza},{n:3,p:"Di\xE1metro del rollo de reserva en redes a\xE9reas:",o:["De 40 a 50 cm","De 5 a 10 cm","Unos 2 m de di\xE1metro","El que quepa"],ref:W.m_rollo_poste},{n:3,p:"Distancia del rollo de reserva al poste:",o:["75 cm","10 cm","2 m","No hay norma"],ref:W.m_reserva},{n:3,p:"Distancia normal entre postes en redes existentes:",o:["Entre 40 y 80 m","Entre 5 y 10 m","M\xE1s de 200 m siempre","No importa"],ref:W.m_postes},{n:3,p:"En un cruce sin apoyo, \xBFcu\xE1ntas calcoman\xEDas reflectivas se instalan?",o:["Dos a cada lado de la balona del cruce","Una en el centro del poste","Ninguna, el cruce no lo necesita","Solo si es de noche o llueve"],ref:W.m_balona},{n:3,p:"Todo cable que cruce una l\xEDnea de ferrocarril se instala\u2026",o:["De forma subterr\xE1nea, sin tendido a\xE9reo","A\xE9reo a 5 m, como en un cruce de calle","A\xE9reo a 4,5 m, como en una acera","A\xE9reo, con un poste a cada lado de la v\xEDa"],ref:W.m_ferrea},{n:3,p:"La fibra n\xFAmero 1 del c\xF3digo de colores EIA/TIA-598 es:",o:["Azul","Naranja","Verde","Caf\xE9"],ref:W.m_colores},{n:3,p:"Presi\xF3n de prueba de hermeticidad del cierre de empalme:",o:["8 psi","1 psi","30 psi","No se prueba"],ref:W.m_cierre},{n:3,p:"\xBFSe puede instalar un cable sobre un transformador o l\xEDnea el\xE9ctrica?",o:["Nunca","S\xED, si es diel\xE9ctrico","S\xED, con guantes","Solo de d\xEDa"],ref:W.m_prep},{n:3,p:"Longitud del rollo de reserva dentro de un registro:",o:["De 28 a 35 m","De 2 a 5 m","100 m","No se deja reserva"],ref:W.m_reserva_sub},{n:3,p:"\xBFSe recomienda pasar fibra y cobre por el mismo ducto?",o:["No, salvo excepciones justificadas","S\xED, siempre que est\xE9n bien sujetos","Solo si son delgados y de poco peso","Es obligatorio, seg\xFAn el jefe de obra"],ref:W.m_subterranea},{n:3,p:"Al instalar un cable directamente en un ducto, adem\xE1s se deja\u2026",o:["Una gu\xEDa para el halado de cables en el futuro","El ducto sin tapar, para ventilar","Agua jabonosa para lubricar el cable","Nada m\xE1s: el ducto ya queda listo"],ref:W.m_subterranea},{n:3,p:"Al terminar el trabajo en un registro, la tapa\u2026",o:["Se coloca asegurada con sus dispositivos de seguridad","Se deja abierta un rato para ventilar el registro","Se apoya sobre el borde sin asegurar","Se guarda en el cami\xF3n hasta el d\xEDa siguiente"],ref:W.m_tapas},{n:4,p:"Antes de usar el veh\xEDculo de la cuadrilla se revisa\u2026",o:["Aceite, combustible, agua, luces, llantas, repuesto, documentos, se\xF1alizaci\xF3n y herramientas","Solo el combustible y que el motor encienda bien, sin mirar nada m\xE1s del veh\xEDculo","Solo que las luces funcionen y que el veh\xEDculo se vea limpio por fuera","Nada: eso lo hace el taller una vez al a\xF1o, y el chofer solo maneja y reporta si algo suena raro"],ref:W.vehiculos},{n:4,p:"Al estacionar el cami\xF3n en la calle para trabajar, se debe\u2026",o:["Hacerlo en un lugar seguro y se\xF1alizar","Dejarlo donde caiga, con las luces apagadas","Subirlo completo a la acera","Dejarlo en el carril, es solo un rato"],ref:W.vehiculos},{n:4,p:"\xBFSe puede usar el celular mientras se conduce el veh\xEDculo institucional?",o:["No, est\xE1 prohibido","S\xED, con altavoz","S\xED, en sem\xE1foros","Solo para mensajes de trabajo"],ref:W.vehiculos},{n:4,p:"Si sientes cansancio o fatiga mientras conduces\u2026",o:["Te detienes en un sitio seguro, descansas o cedes el volante","Aceleras un poco para llegar antes de que se haga tarde","Bajas la ventana, pones m\xFAsica y sigues manejando","Tomas caf\xE9, te estiras en el carro y contin\xFAas sin parar"],ref:W.vehiculos},{n:4,p:"Las herramientas y materiales que van en el cami\xF3n deben ir\u2026",o:["Asegurados: en un frenazo o vuelco se vuelven proyectiles","Sueltos en la cajuela para sacarlos m\xE1s r\xE1pido","En el tablero, encima de la guantera","En el asiento del copiloto, sin amarrarlos"],ref:W.vehiculos},{n:4,p:"En una v\xEDa de tr\xE1fico denso, la cuadrilla debe\u2026",o:["Planificar con m\xE1s personal y alguien que regule el tr\xE1nsito","Trabajar m\xE1s r\xE1pido para liberar la v\xEDa","Trabajar sin conos para no estorbar","Ir una sola persona, para ahorrar gastos del d\xEDa"],ref:W.cuadrillas},{n:4,p:"Para trabajar en una v\xEDa de alto tr\xE1nsito, \xBFa qui\xE9n se puede pedir colaboraci\xF3n?",o:["A las autoridades de tr\xE1nsito","A los vecinos de la cuadra","A nadie: la cuadrilla se arregla sola","A los conductores que pasan por la v\xEDa"],ref:W.poda_transito},{n:4,p:"El GS-101 define viento fuerte como una velocidad constante mayor a\u2026",o:["40 km/h","10 km/h","100 km/h","20 km/h"],ref:W.altura},{n:4,p:"Si una l\xEDnea de telecomunicaciones queda m\xE1s cerca de lo permitido de la l\xEDnea primaria (media tensi\xF3n), \xBFqu\xE9 se hace?",o:["No se trabaja y se coordina la desconexi\xF3n con la empresa el\xE9ctrica","Se trabaja con guantes de cuero y con cuidado, sin tocar nada","Se trabaja r\xE1pido, antes de que llegue la distribuidora","Se ignora el riesgo si no se ven chispas ni humo en el poste"],ref:W.mt_suspender},{n:4,p:"Umbral de \xABno soltar\xBB de la corriente el\xE9ctrica en el cuerpo:",o:["10 mA","0,5 mA","1 A","100 A"],ref:W.electrico},{n:4,p:"\xBFA partir de qu\xE9 altura un trabajo se considera muy cr\xEDtico y exige rescate en sitio?",o:["M\xE1s de 12 m","M\xE1s de 3 m","M\xE1s de 30 m","M\xE1s de 100 m"],ref:W.emergencias},{n:4,p:"Tras una ca\xEDda, \xBFse mueve a la v\xEDctima?",o:["No, salvo que sea necesario por seguridad","S\xED, siempre, llev\xE1ndola a la sombra del poste","S\xED, para sentarla y darle agua de inmediato","S\xED, para llevarla en el cami\xF3n al hospital"],ref:W.emergencias},{n:4,p:"Un accidente laboral se reporta a la jefatura\u2026",o:["De inmediato, antes de terminar la jornada","Al final de la semana, con el resto de informes","Solo si hubo hospitalizaci\xF3n o incapacidad","No se reporta si fue leve y no dej\xF3 marca"],ref:W.reportes},{n:4,p:"Distancia t\xEDpica de ca\xEDda libre que considera el GS-101 al planificar un sistema antica\xEDdas:",o:["Por lo general, 1,80 m","5 m, seg\xFAn la altura del poste","10 cm, seg\xFAn el tipo de arn\xE9s","No importa la altura del trabajo"],ref:W.altura},{n:4,p:"\xBFCon qu\xE9 viento no se debe trabajar en techos?",o:["Vientos superiores a 60 km/h","Vientos superiores a 30 km/h","Vientos superiores a 90 km/h","El viento no es un factor en techos"],ref:W.t_techo_clima},{n:4,p:"\xBFCu\xE1ndo se deben identificar las l\xE1minas pl\xE1sticas, de policarbonato o tragaluces del techo?",o:["Desde el piso, antes de subir al techo","Cuando ya est\xE1s parado sobre el techo","Solo si llueve fuerte y hay viento","Nunca: no se ven de cerca"],ref:W.t_techo_caminar},{n:4,p:"Para caminar en un techo, \xBFpor d\xF3nde se debe hacer?",o:["Por los clavadores y los lugares m\xE1s c\xE9ntricos del techo","Por el borde del techo, para ver la calle","Por cualquier l\xE1mina, si no se ve da\xF1ada","Por la l\xE1mina m\xE1s cercana a la escalera"],ref:W.t_techo_caminar},{n:4,p:"Si no hay amarre seguro para la escalera, \xBFqu\xE9 es obligatorio?",o:["Que un compa\xF1ero de trabajo sostenga la escalera","Que la escalera se amarre a una l\xE1mina del techo","Que se suba con las manos ocupadas","Nada: la escalera se apoya sola"],ref:W.t_techo_escalera},{n:4,p:"\xBFCu\xE1nto debe sobrepasar la escalera la estructura a la que se apoya?",o:["1 metro o tres pelda\xF1os","30 cent\xEDmetros","No debe sobrepasarla","3 metros"],ref:W.t_techo_escalera},{n:4,p:"Al llegar al nivel del techo, \xBFa qu\xE9 distancia m\xEDnima del borde se debe retirar la persona antes de quitarse el equipo de altura?",o:["1 metro","50 cent\xEDmetros","No hay distancia m\xEDnima","3 metros"],ref:W.t_techo_traslado},{n:5,p:"\xBFQu\xE9 distancia m\xEDnima se exige entre un conductor de telecomunicaciones y una l\xEDnea primaria de media tensi\xF3n?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:W.mt_suspender,e:"Si la l\xEDnea de telecomunicaciones se sospecha a menos de 80 cm de la primaria de media tensi\xF3n, no se realiza ning\xFAn trabajo (GS-101 \xA75.6.9 f)."},{n:5,p:"\xBFQu\xE9 distancia se mantiene entre el conductor telef\xF3nico y el secundario el\xE9ctrico?",o:["0,40 m","0,55 m","0,70 m","2,50 m"],ref:W.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el secundario es de 40 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"\xBFY entre el conductor telef\xF3nico y el neutro?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:W.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el neutro es de 80 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"Una l\xEDnea de telecomunicaciones est\xE1 por encima o al mismo nivel que el secundario. \xBFQu\xE9 se hace?",o:["No se trabaja hasta coordinar con la distribuidora la desconexi\xF3n del circuito durante el trabajo","Se trabaja con cuidado, sin tocar el secundario ni el neutro, y se avisa al jefe de cuadrilla","Se sube con guantes de cuero y casco bien puesto, con la l\xEDnea de vida anclada al poste","Se trabaja de noche, cuando hay menos tr\xE1nsito y menos gente cerca del poste"],ref:W.mt_suspender,e:"GS-101 \xA75.6.9 f): en ese caso se coordina con la empresa de distribuci\xF3n la desconexi\xF3n del circuito durante el tiempo del trabajo."},{n:5,p:"Una persona no calificada quiere cruzar el l\xEDmite de aproximaci\xF3n de una l\xEDnea energizada. \xBFPuede?",o:["No, salvo acompa\xF1ada de una persona calificada","S\xED, si lleva guantes de cuero y casco","S\xED, si el trabajo es corto y se hace r\xE1pido","S\xED, si lleva anteojos de seguridad"],ref:W.mt_frontera,e:"Las personas no calificadas no cruzan ese l\xEDmite a menos que est\xE9n acompa\xF1adas por una persona calificada (GS-101 \xA75.2 w)."},{n:5,p:"Toda l\xEDnea el\xE9ctrica cerca del trabajo se considera\u2026",o:["Activa, hasta verificar lo contrario con la distribuidora","Desactivada si no hay ruido ni chispas en el poste","Activa solo si hay chispas o se oye zumbido","Inactiva si est\xE1 en el poste de telecomunicaciones"],ref:W.mt_activa,e:"Todas las l\xEDneas el\xE9ctricas se consideran activas. Si hace falta verificar el estado de tensi\xF3n, se coordina con la distribuidora (GS-101 \xA75.6.9 h)."},{n:4,p:"\xBFQui\xE9n debe verificar y asegurar el ascenso al poste antes de iniciar la actividad?",o:["El encargado de cuadrilla","El t\xE9cnico que sube","Cada trabajador por separado","Nadie: el ascenso se revisa al terminar"],ref:Wa.inspeccion},{n:4,p:"\xBFQu\xE9 incluye la inspecci\xF3n de poster\xEDa antes del ascenso?",o:["El poste anterior, posterior, local y el tendido entre postes","Solo el poste donde se va a subir y el que tiene al lado","Solo el tendido entre los dos postes m\xE1s cercanos a la casa","Solo los postes de madera que se ven desde la calle"],ref:Wa.inspeccion},{n:4,p:"Si se evidencia alguna de las fallas del \xA75.6.3, \xBFqu\xE9 se hace?",o:["No se realizar\xE1 el trabajo y se realizar\xE1 el reporte a la jefatura de manera inmediata","Se sube con m\xE1s cuidado, revisando cada pelda\xF1o del poste","Se reporta al terminar la jornada, con un informe escrito y firmado","Se apuntala el poste con un puntal de madera y luego se sube"],ref:Wa.inspeccion},{n:4,p:"En un poste de madera, \xBFqu\xE9 da\xF1o por fisuras, quemado o podrido no debe superar la fuente?",o:["Una tercera parte del di\xE1metro","La mitad del di\xE1metro","Cualquier fisura es aceptable","Un cuarto del di\xE1metro"],ref:Wa.inspeccion},{n:4,p:"En un poste de metal, \xBFqu\xE9 perforaciones son falla?",o:["Perforaciones superiores a una tercera parte del di\xE1metro","Cuando hay m\xE1s de una, aunque sean peque\xF1as","Cuando se ven desde el suelo, a simple vista","Nunca, si el poste sigue en pie"],ref:Wa.inspeccion},{n:6,p:"\xBFQu\xE9 equipo de protecci\xF3n exige el GS-101 para la poda de \xE1rboles?",o:["Careta, lentes, protecci\xF3n auditiva, cuerdas de seguridad, casco de cuatro puntos con barbiquejo, guantes para riesgos mec\xE1nicos, ropa y calzado institucionales","Solo casco y guantes de cuero","Arn\xE9s de cuerpo completo y guantes diel\xE9ctricos","Solo lentes: el resto lo decide el encargado"],ref:W.poda_epp},{n:6,p:"\xBFPuede un trabajador subirse a un \xE1rbol para cortar una rama?",o:["No: el trabajador no se sube a un \xE1rbol","S\xED, con cuerdas de seguridad y un compa\xF1ero abajo","S\xED, si la rama es peque\xF1a","S\xED, con arn\xE9s de cuerpo completo"],ref:W.poda_subir},{n:6,p:"Una rama est\xE1 sobre una l\xEDnea energizada. \xBFQu\xE9 se hace?",o:["No se corta: se informa al Ejecutor del Proceso, que coordina con SST y el CLOR","Se corta despacio, con cuidado, sin tocar el cable","Se corta cuando la l\xEDnea se vea sin chispas","Se corta de noche, cuando hay menos gente"],ref:W.poda_linea},{n:6,p:"\xBFQu\xE9 se revisa antes de cada corte de rama?",o:["La distancia a lo energizado, la velocidad y direcci\xF3n del viento y la vegetaci\xF3n que puede interferir con la ca\xEDda","Solo que la motosierra arranque al primer jal\xF3n","Solo que el compa\xF1ero tenga el casco puesto","Nada: la experiencia dice cu\xE1ndo se corta"],ref:W.poda_viento},{n:6,p:"Antes de operar una motosierra, \xBFqu\xE9 condici\xF3n debe cumplir quien la opera?",o:["No estar cansado ni haber tomado medicamentos que alteren la conciencia","Tener un a\xF1o de experiencia, aunque est\xE9 cansado","Haber tomado caf\xE9 para estar alerta","Operarla solo si el supervisor no est\xE1 presente"],ref:W.poda_cansancio},{n:6,p:"\xBFCu\xE1ntos miembros, como m\xEDnimo, forman una cuadrilla de poda de \xE1rboles?",o:["Dos","Uno, si tiene experiencia","Uno, si el \xE1rbol es peque\xF1o","Tres, con un supervisor"],ref:W.poda_cuadrilla},{n:7,p:"\xBFCu\xE1ndo debe usarse el barbiquejo del casco?",o:["Cuando exista posibilidad de desprendimiento del casco por fuertes vientos, espacios confinados, postura corporal y trabajos en altura","Solo cuando el casco es nuevo","Nunca, porque incomoda al trabajar","Solo si el trabajo es de d\xEDa"],ref:W.epp},{n:7,p:"Los rollos de reserva en la galer\xEDa de cable deben tener una longitud\u2026",o:["Entre 20 a 25 m, de acuerdo con las condiciones del sitio","Entre 28 y 35 m, como en los registros","Entre 2 y 5 m","De 100 m siempre"],ref:W.gal_reserva},{n:7,p:"Los rollos de reserva en la galer\xEDa se colocan\u2026",o:["En la pared del lado opuesto al MDF, a la mayor altura posible, partiendo desde la pared final","En la pared del MDF, pegados a los ductos","En el piso, para que queden m\xE1s seguros","En cualquier pared, si hay espacio"],ref:W.gal_reserva},{n:7,p:"Si el rollo de reserva va en la pared del MDF, \xBFcu\xE1nto espacio se deja libre desde la salida de los ductos?",o:["50 cm hacia el fondo de la galer\xEDa","20 cm","1,20 m","No hace falta espacio"],ref:W.gal_50cm},{n:7,p:"\xBFCon qu\xE9 se fija el cable en las galer\xEDas?",o:["Con pletinas peque\xF1as (de 20 cm) y fajas pl\xE1sticas","Con clavos de madera en el muro","Con cinta adhesiva, sin pletinas","Con el cable suelto, para que se mueva"],ref:W.gal_pletinas},{n:7,p:"\xBFCu\xE1ntas placas de identificaci\xF3n se colocan en un rollo de reserva?",o:["Dos placas de identificaci\xF3n","Una sola, en el centro del rollo","Cuatro, dos a cada lado","Ninguna: el rollo no se identifica"],ref:W.gal_placas},{n:8,p:"\xBFQu\xE9 debe tener el personal t\xE9cnico para atender una emergencia en altura?",o:["Botiqu\xEDn b\xE1sico de primeros auxilios y equipos para rescate vertical: cuerdas de seguridad, mosquetones y pull-lift","Solo el botiqu\xEDn del cami\xF3n, si queda lugar","Solo las cuerdas de la escalera, sin mosquetones","Nada: la ayuda llega sola"],ref:W.eri_antes},{n:8,p:"\xBFCu\xE1ndo un trabajo en altura se considera muy cr\xEDtico?",o:["Cuando pasa de 12 metros de altura","Cuando pasa de 3 metros de altura","Cuando hay m\xE1s de dos trabajadores","Cuando llueve o hay viento"],ref:W.eri_criticas},{n:8,p:"Durante un accidente en altura, \xBFqu\xE9 se hace con el \xE1rea y con los trabajos?",o:["Se despeja completamente el \xE1rea y se suspenden de inmediato las actividades","Se sigue trabajando mientras llega la ayuda","Se despeja solo la mitad del \xE1rea, para no atrasar la labor","Se avisa a la cuadrilla de al lado y se sigue trabajando"],ref:W.eri_despejar},{n:8,p:"Durante una emergencia en altura, \xBFc\xF3mo se pide la ayuda de los cuerpos de emergencia?",o:["Por la l\xEDnea telef\xF3nica 9-1-1","Con un mensaje en el grupo de la cuadrilla","Esperando a que llegue la jefatura","Llevando a la v\xEDctima al hospital en la camioneta"],ref:W.eri_911},{n:8,p:"\xBFQu\xE9 maniobra de rescate se puede hacer si la cuadrilla no la conoce?",o:["Ninguna: no se hacen maniobras de rescate de las que no se tenga conocimiento previo","La que parezca m\xE1s r\xE1pida","Cualquiera, si son dos personas en el sitio","La que indique el compa\xF1ero que mira desde abajo"],ref:W.eri_911},{n:8,p:"Durante una emergencia, \xBFqui\xE9n puede dar informaci\xF3n a personas u organizaciones externas?",o:["Solo la direcci\xF3n o el personal autorizado, mediante comunicados oficiales","Cualquier trabajador de la cuadrilla","El compa\xF1ero que est\xE9 m\xE1s cerca de la prensa","Cualquier persona que pregunte, si dice ser familiar"],ref:W.eri_terceros},{n:9,p:"\xBFQu\xE9 es manejar a la defensiva?",o:["Conducir evitando accidentes a pesar de las acciones incorrectas de los dem\xE1s y de las condiciones adversas","Conducir r\xE1pido para pasar menos tiempo en la carretera","Responderles a los dem\xE1s conductores para que respeten","Manejar solo de d\xEDa y con buen clima"],ref:W.sv_defensivo},{n:9,p:"\xBFCu\xE1les son los cinco elementos del manejo defensivo?",o:["Conocimiento, estar alerta, previsi\xF3n, juicio y habilidad","Velocidad, reflejos, fuerza, suerte y experiencia","Licencia, seguro, marchamo, revisi\xF3n t\xE9cnica y placa","Prisa, frustraci\xF3n, cansancio, complacencia y descuido"],ref:W.sv_defensivo},{n:9,p:"\xBFQu\xE9 porcentaje de los accidentes viales tiene origen en el factor humano?",o:["El 90 %","El 10 %","La mitad","El 25 %"],ref:W.sv_humano},{n:9,p:"\xBFCu\xE1les son los cuatro estados que producen errores al conducir?",o:["Prisa, frustraci\xF3n, cansancio y complacencia","Lluvia, neblina, derrumbes y huecos","Alcohol, drogas, f\xE1rmacos y caf\xE9","Velocidad, curvas, pendientes y peraltes"],ref:W.sv_estados},{n:9,p:"La complacencia al volante es\u2026",o:["El exceso de confianza que lleva a relajar la atenci\xF3n","La falta de fuerzas despu\xE9s de un esfuerzo o por no descansar","La respuesta emocional ante un hecho no gestionado","La rapidez con que se hace una cosa"],ref:W.sv_estados},{n:9,p:"\xBFCada cu\xE1nto se revisan los nueve m\xEDnimos de seguridad vehicular?",o:["Todos los d\xEDas antes de salir con el automotor, siempre que aplique","Una vez al mes, en el taller","Solo cuando el veh\xEDculo hace un ruido raro","Una vez al a\xF1o, con la revisi\xF3n t\xE9cnica"],ref:W.sv_minimos},{n:9,p:"\xBFQu\xE9 dispositivos de advertencia deben estar en buen estado?",o:["Luces altas y bajas, de freno e intermitentes, la bocina y dos juegos de tri\xE1ngulos","Solo la bocina","Solo las luces delanteras","El radio y el aire acondicionado"],ref:W.sv_minimos},{n:9,p:"Seg\xFAn la capacitaci\xF3n, \xBFd\xF3nde se recomienda usar las llantas de recauche?",o:["Solo en la parte trasera del automotor","Solo adelante","En las cuatro posiciones","\xDAnicamente como repuesto"],ref:W.sv_minimos},{n:9,p:"\xBFQui\xE9n puede conducir un veh\xEDculo institucional?",o:["El funcionario que cuenta con los permisos de conducir del ICE","Cualquier compa\xF1ero con licencia","El primero que llegue al plantel","El que tenga m\xE1s experiencia, aunque no tenga el permiso"],ref:W.sv_permiso},{n:10,p:"Al empezar a llover, \xBFpor qu\xE9 se pone resbalosa la calle?",o:["Se forma una especie de jab\xF3n con los residuos de tierra, grasa y gasolina","Porque el agua enfr\xEDa el asfalto","Porque las llantas se desinflan con el agua","No cambia nada: el asfalto no resbala"],ref:W.sv_lluvia},{n:10,p:"En caminos con grava, arenosos o mojados, \xBFqu\xE9 pide el GS-101?",o:["Bajar la velocidad y manejar con cuidado","Subir la velocidad para no quedarse pegado","Frenar fuerte en cada curva","Ir pegado al veh\xEDculo de adelante para seguir su ruta"],ref:W.sv_mojado},{n:10,p:"Llueve tan fuerte que la falta de visibilidad es excesiva. \xBFQu\xE9 se hace?",o:["Detener el veh\xEDculo a un costado de la carretera y esperar que pase la tormenta","Seguir igual, con las luces altas","Seguir de cerca al veh\xEDculo de adelante","Acelerar para salir pronto de la tormenta"],ref:W.sv_visibilidad},{n:10,p:"\xBFPor qu\xE9 la neblina es una de las peores condiciones para conducir?",o:["La habilidad del conductor no puede mejorar la visibilidad ni permitirle aumentar la velocidad","Solo afecta a las motocicletas","Hace que el motor pierda potencia","No es peligrosa si se conoce el camino"],ref:W.sv_lluvia},{n:10,p:"Vas acompa\xF1ado y sientes cansancio al volante. \xBFQu\xE9 indica el GS-101?",o:["Detenerte en un sitio seguro, bajarte, caminar y ceder la conducci\xF3n al compa\xF1ero","Pedirle al compa\xF1ero que te hable para no dormirte","Subir el volumen del radio","Abrir la ventana y seguir hasta llegar"],ref:W.sv_fatiga},{n:10,p:"Con una dosis alta, el alcohol provoca\u2026",o:["Dificultad en el habla, incoordinaci\xF3n, juicio alterado y falta de control emocional","Mejores reflejos para manejar","M\xE1s atenci\xF3n en la carretera","Solo sue\xF1o, sin otros efectos"],ref:W.sv_sustancias},{n:10,p:"Observas o causas un da\xF1o al veh\xEDculo. \xBFQu\xE9 haces?",o:["Lo reportas: no se oculta, puede producir un accidente","Lo arreglas t\xFA en la casa","Lo callas si es peque\xF1o","Esperas a que otro compa\xF1ero lo note"],ref:W.sv_danos},{n:11,p:"\xBFCu\xE1ndo se hace el ATS (an\xE1lisis de trabajo seguro)?",o:["Antes de empezar las labores de cada d\xEDa, con toda la cuadrilla","Una vez por semana, solo el encargado","Al terminar la jornada, para el informe","Solo cuando ya hubo un accidente"],ref:W.gs31_ats},{n:11,p:"A media ma\xF1ana cambia el personal o llega otro equipo. \xBFQu\xE9 pide el GS-31?",o:["Aplicar de nuevo el ATS antes de seguir","Nada: el ATS de la ma\xF1ana sigue valiendo","Anotarlo en el informe del d\xEDa siguiente","Que el compa\xF1ero nuevo firme la pizarra sin leerla"],ref:W.gs31_cambios},{n:11,p:"Una tarea cr\xEDtica tiene un grado de criticidad (GC) de 8 o m\xE1s. \xBFQu\xE9 significa?",o:["Criticidad alta: se atiende primero","Criticidad baja: puede esperar","Criticidad moderada","Nada: el GC es solo un tr\xE1mite"],ref:W.gs31_criticidad},{n:11,p:"En la pizarra del ATS aparece un factor de muerte. \xBFQu\xE9 se hace?",o:["Se revisan en conjunto las acciones a implementar","Nada: es solo un dato de la pizarra","Lo resuelve el t\xE9cnico m\xE1s nuevo","Se anota y se revisa al d\xEDa siguiente"],ref:W.ats_muerte},{n:15,p:"Detectas una anomal\xEDa en el trabajo de tu cuadrilla. \xBFA qui\xE9n se lo informas?",o:["Al coordinador de cuadrilla y/o a SST","A nadie, si ya lo corregiste t\xFA","Solo al cliente, al terminar la obra","A la persona que lo hizo, para que lo anote despu\xE9s"],ref:W.rec_anomalia},{n:15,p:"Un compa\xF1ero sufre un accidente. \xBFQu\xE9 formulario se usa y cu\xE1ndo se avisa a la jefatura?",o:["F07-GS-52 Aviso inmediato, antes de terminar la jornada","F06-GS-52, la pr\xF3xima semana","F01-GS-52, al d\xEDa siguiente","Ning\xFAn formulario: basta con avisar en la charla"],ref:W.rec_accidente},{n:15,p:"Hubo un casi incidente y nadie se lastim\xF3. \xBFQu\xE9 formulario se usa?",o:["F06-GS-52 (o F01-GS-52 si fue grave)","F07-GS-52, el aviso inmediato","Ninguno, porque no hubo lesi\xF3n","El F02-CSCON-SST-00-25 con la firma del compa\xF1ero"],ref:W.rec_cuasi},{n:15,p:"Un compa\xF1ero incumple una regla de SST por primera vez, con riesgo bajo. \xBFQu\xE9 se hace?",o:["Retroalimentaci\xF3n positiva y correctiva, registro en el F02-CSCON-SST-00-25 con su firma, y aviso a la jefatura inmediata","Solo se le llama la atenci\xF3n en privado, sin registro","Se guarda para el informe del a\xF1o siguiente","Se le sanciona de inmediato, sin escuchar su versi\xF3n"],ref:W.rec_liderazgo},{n:15,p:"Hay un peligro inminente para las personas durante una tarea. \xBFQu\xE9 se hace?",o:["Se interrumpe la actividad","Se termina la tarea y luego se corrige","Se sigue con m\xE1s cuidado","Se avisa al final de la semana"],ref:W.rec_inminente},{n:16,p:"\xBFC\xF3mo se entra a una planta solar?",o:["Con autorizaci\xF3n, coordinado con el encargado de la planta","Entrando primero y avisando despu\xE9s","Por la cerca, si el port\xF3n est\xE1 cerrado","Como diga el primero que llegue"],ref:W.demo_generacion_autorizacion},{n:16,p:"\xBFCu\xE1ndo produce electricidad un panel solar?",o:["Mientras le da la luz: por eso se trata como energizado","Solo al mediod\xEDa","Solo si el inversor est\xE1 apagado","Nunca, si el panel est\xE1 sucio"],ref:W.demo_generacion_energizado},{n:16,p:"\xBFSe puede pisar o apoyarse en un panel para ver mejor?",o:["No: no se pisa ni se apoya nadie en los paneles","S\xED, si el panel est\xE1 limpio","S\xED, si la fila es corta","S\xED, con una tabla debajo"],ref:W.demo_generacion_no_pisar},{n:16,p:"\xBFQui\xE9n manipula las conexiones y los inversores de la planta?",o:["Solo personal calificado, seg\xFAn el procedimiento de la planta","Cualquier trabajador de la cuadrilla","Quien llegue primero a la caseta","Quien tenga la llave del port\xF3n"],ref:W.demo_generacion_conexiones},{n:16,p:"Ves un cable suelto y pelado en el camino de la planta. \xBFQu\xE9 haces?",o:["No lo tocas: lo marcas y lo reportas","Lo levantas con la mano para pasar","Lo cortas con la herramienta","Lo envuelves con cinta y sigues"],ref:W.demo_generacion_energizado},{n:16,p:"Llega una tormenta el\xE9ctrica mientras trabajan al aire libre. \xBFQu\xE9 indica el GS-101?",o:["Suspender la actividad por las condiciones del clima","Terminar la fila antes de bajar","Seguir trabajando: la tormenta todav\xEDa no ha llegado","Quedarse donde est\xE1n, a esperar"],ref:W.sol_clima},{n:16,p:"Encuentras un panel con el vidrio roto. \xBFQu\xE9 haces?",o:["Lo marcas y lo reportas al encargado de la planta, sin tocarlo","Lo cambias t\xFA, sin avisar","Lo tapas con cinta para la visita","Lo dejas para la pr\xF3xima visita sin avisar"],ref:W.demo_generacion_danos},{n:16,p:"Hace mucho sol y llevan un rato limpiando. \xBFQu\xE9 se hace?",o:["Tomar agua y descansar a la sombra con frecuencia","Seguir sin parar: el agua se toma al final","Quitarse el casco para refrescarse","Tomar solo caf\xE9, para no sudar"],ref:W.demo_generacion_calor},{n:13,p:"\xBFQu\xE9 sirve de apoyo a la escalera a medio vano, si no hay poste?",o:["El veh\xEDculo: la escalera se amarra a \xE9l","Nada: la escalera se apoya sola en el suelo","Solo un compa\xF1ero que la sostenga, sin amarrarla","El peso del trabajador sobre ella"],ref:W.mv_apoyo},{n:13,p:"\xBFEn cu\xE1ntos puntos se amarra la escalera a medio vano?",o:["En dos: al pant\xF3grafo y al eje de una llanta","En uno: basta con el pant\xF3grafo","En tres: se suma la cabina","No se amarra: el peso de la escalera basta"],ref:W.mv_dos_puntos},{n:13,p:"\xBFQu\xE9 nudo da la tensi\xF3n en el amarre a medio vano?",o:["Nudo ocho aplicado","Nudo alondra","Nudo gaza simple","Nudo ocho en l\xEDnea"],ref:W.mv_nudos},{n:13,p:"\xBFC\xF3mo termina el amarre a medio vano?",o:["Con pata de chancho (nudo ballestrinque)","Con un nudo alondra, sin asegurarlo","Con una gaza simple, suelta","Dejando la cuerda sin amarrar para ajustar despu\xE9s"],ref:W.mv_nudos},{n:13,p:"\xBFCon qu\xE9 se sube por una escalera a medio vano?",o:["Con la cuerda de seguridad sujetada a la escalera","Con la cuerda en el hombro, sin sujetarla","Con las manos ocupadas por herramientas","Sin cuerda, si la escalera es corta"],ref:W.mv_subida},{n:13,p:"Una escalera de 24 pies (7,32 m): \xBFhasta qu\xE9 altura de uso sirve?",o:["6,42 m","7,32 m","7,63 m","5,30 m"],ref:W.mv_tabla2},{n:13,p:"\xBFHasta qu\xE9 pelda\xF1o de la escalera se puede trabajar?",o:["Hasta el que alcanza el trabajo, sin llegar a los tres superiores","Hasta el \xFAltimo, para alcanzar mejor","En el tercero de arriba, si hace falta"],ref:W.mv_tres},{n:14,p:"\xBFQu\xE9 abertura m\xEDnima debe tener una cala para instalar el cable?",o:["1,5 m de largo por 1 m de ancho, como m\xEDnimo","1 m de largo por 1 m de ancho","1,5 m de largo por 0,5 m de ancho","0,8 m de largo por 0,8 m de ancho"],ref:W.cala_abertura},{n:14,p:"Si la abertura entre los extremos del ducto mide 40 cm, \xBFcu\xE1nto debe medir la pieza de PVC de reparaci\xF3n?",o:["90 cm: la abertura m\xE1s 50 cm","40 cm: lo mismo que la abertura","50 cm: solo el sobrante","1,20 m: el triple de la abertura"],ref:W.cala_pieza},{n:14,p:"\xBFHacia d\xF3nde queda la abertura del corte longitudinal de la pieza de reparaci\xF3n?",o:["Hacia arriba","Hacia abajo, contra el ducto","Hacia un costado","No importa la posici\xF3n"],ref:W.cala_ranura},{n:14,p:"\xBFCu\xE1ntas amarras de cinta met\xE1lica o tipo gaza llevan la reparaci\xF3n, y d\xF3nde?",o:["Tres: una en cada extremo y una en el centro","Dos: una en cada extremo","Cuatro: una cada 25 cm","Una sola, en el centro"],ref:W.cala_amarras},{n:14,p:"El preformado mide 75 cm o menos. \xBFA qu\xE9 distancia del poste va el cierre de empalme?",o:["75 cm","1,5 m","30 cm","2 m"],ref:W.cala_empalme},{n:14,p:"En el relleno de la cala, \xBFqu\xE9 capa va justo debajo del lastre?",o:["El material de la excavaci\xF3n, compactado al 95 % del Proctor","El tobacemento","El asfalto","La arena suelta"],ref:W.cala_capas},{n:14,p:"En un tramo recto de 1 km o m\xE1s, \xBFcada cu\xE1nto se ponen las anclas de seguridad?",o:["Cada 500 m","Cada 100 m","Cada 1 km, una sola","Solo en el poste m\xE1s alto"],ref:W.cala_anclas},{n:14,p:"\xBFA qu\xE9 distancia del poste se coloca cada ancla de seguridad?",o:["La mitad de la altura del poste, medida del herraje a la base","Un metro, sin importar la altura","Lo mismo que la altura del poste","Cinco metros, siempre"],ref:W.cala_ancla_distancia},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se le pregunta al cliente?",o:["C\xF3mo est\xE1n el cielorraso y la estructura, y si ha visto cables, goteras o avispas","Solo a qu\xE9 hora puede empezar el trabajo","Nada: si desde abajo se ve bien, se sube","Si puede pagar un trabajo extra"],ref:W.cr_cliente},{n:12,p:"Hay un cable el\xE9ctrico expuesto en el cielorraso. \xBFQu\xE9 se le pide al cliente?",o:["Que desconecte la electricidad antes de subir","Nada: se sube con cuidado, sin tocarlo","Que deje el cable al aire para revisarlo mejor","Que avise cuando el cable se caliente"],ref:W.cr_electrico},{n:12,p:"Si no es posible desconectar la electricidad del cielorraso, \xBFcon qu\xE9 se sube?",o:["Con guantes diel\xE9ctricos, despu\xE9s de revisar la zona a trabajar","Con guantes de cuero","Sin guantes, con cuidado","Con cualquier guante de trabajo"],ref:W.cr_electrico},{n:12,p:"Para trabajar en un cielorraso, \xBFqu\xE9 lleva el casco?",o:["Barbiquejo y linterna","Solo el barbiquejo, sin linterna","Solo la linterna, sin barbiquejo","Nada: el casco se usa solo en la calle"],ref:W.cr_epp},{n:12,p:"\xBFQu\xE9 se revisa desde el suelo antes de subir al cielorraso?",o:["Que no haya colmenas de avispas o similares","Solo la hora del d\xEDa","Que la escalera sea de aluminio","Nada: eso se revisa al terminar"],ref:W.cr_avispas},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se valora?",o:["Si una extensi\xF3n de fibra permite evitar subir","Si el cliente tiene caf\xE9","Cu\xE1nto pesa el trabajador","Si el d\xEDa est\xE1 soleado"],ref:W.cr_extension},{n:12,p:"La estructura del cielorraso debe observarse sin\u2026",o:["Corrosi\xF3n avanzada o madera descompuesta, y estable","Pintura nueva","R\xF3tulos de la oficina","Cables de colores"],ref:W.cr_estructura},{n:12,p:"Una escalera de abrir (tipo A) debe ser de\u2026",o:["Fibra de vidrio","Aluminio, siempre","Madera, sin importar el lugar","Cualquier material, si est\xE1 pintada"],ref:W.cr_escalera_tipo},{n:17,p:"En una obra, \xBFc\xF3mo deben estar los tableros y las cajas el\xE9ctricas?",o:["Tapados, identificados y cerrados","Abiertos, para revisar r\xE1pido los interruptores","Cerrados, aunque no tengan identificaci\xF3n","Como los dej\xF3 el \xFAltimo que los us\xF3"],ref:W.el_tablero},{n:17,p:"\xBFQu\xE9 necesita un medidor el\xE9ctrico provisional en la obra?",o:["Base estable y protecci\xF3n del agua","Solo un r\xF3tulo con el nombre de la obra","Estar en el suelo, donde nadie lo golpee","Nada: es provisional"],ref:W.el_medidor},{n:17,p:"\xBFDe qu\xE9 se protegen los conductores el\xE9ctricos en una obra?",o:["De los da\xF1os mec\xE1nicos: maquinaria, veh\xEDculos, agua y qu\xEDmicos","Solo del sol, con pintura","De nada: se cambian cuando se da\xF1an","Solo de la lluvia, con cinta aislante"],ref:W.el_conductores},{n:17,p:"\xBFCon qui\xE9n se aplica la lista de verificaci\xF3n del Anexo C del C\xF3digo El\xE9ctrico?",o:["En conjunto con un t\xE9cnico el\xE9ctrico","Solo, desde la oficina","Con el primer pe\xF3n que est\xE9 libre","Con el cliente, al entregar la obra"],ref:W.el_anexo_c},{n:17,p:"\xBFCu\xE1l de estos es un acto inseguro con electricidad?",o:["Intervenir sin autorizaci\xF3n","Usar el EPP diel\xE9ctrico","Reportar un enchufe deteriorado","Mantener el tablero cerrado"],ref:W.el_autorizacion},{n:17,p:"Con la piel h\xFAmeda o sudada, la resistencia del cuerpo a la corriente\u2026",o:["Baja","Sube","No cambia","Depende solo del calzado"],ref:W.el_mojado},{n:17,p:"\xBFQu\xE9 factores influyen en la magnitud de un incidente el\xE9ctrico?",o:["Intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria","Solo el color del cable","Solo la hora del d\xEDa","La marca del tablero y del medidor"],ref:W.el_factores},{n:17,p:"Seg\xFAn el Anexo B, una instalaci\xF3n es de peligro inminente o alto riesgo cuando\u2026",o:["Carece de protecci\xF3n frente al contacto con partes energizadas o el cortocircuito","Tiene m\xE1s de un tablero","Es provisional, aunque cumpla con todo","Alguien ya se lastim\xF3 en ella"],ref:W.el_anexo_b}],nE={registro:{titulo:"Una persona camina mirando el celular hacia el registro abierto",opciones:[{t:"STOP: Andr\xE9s la detiene y la gu\xEDa por fuera del \xE1rea se\xF1alizada",ok:!0},{t:"Le gritamos desde adentro del registro",ok:!1},{t:"Seguimos: los conos ya est\xE1n puestos",ok:!1},{t:"Ponemos la tapa encima con el compa\xF1ero adentro",ok:!1}],explicacion:"Un registro abierto es un hueco en plena acera. El per\xEDmetro se asegura con se\xF1alizaci\xF3n vial y peatonal y, si alguien entra al \xE1rea, se detiene la labor y se le gu\xEDa fuera.",ref:W.ev_registro,consecuencia:"La persona tropez\xF3 con el borde del registro y por poco cae adentro, sobre tu compa\xF1ero."},impaciente:{titulo:"Un conductor impaciente ignora el ALTO del banderero",opciones:[{t:"STOP: todos fuera de la calzada, dejamos pasar al veh\xEDculo y luego retomamos el control del tr\xE1nsito",ok:!0},{t:"Andr\xE9s se planta frente al auto para obligarlo a frenar",ok:!1},{t:"Seguimos pasando el cable: ya va a frenar",ok:!1},{t:"Le gritamos y le golpeamos el auto cuando pase",ok:!1}],explicacion:"Ninguna paleta detiene a un auto que no quiere detenerse. Ante un conductor que no respeta la se\xF1al, se evacua la calzada y nadie se le atraviesa; despu\xE9s se retoma el control (y se reporta si es necesario).",ref:W.ev_impaciente,consecuencia:"El auto pas\xF3 a cent\xEDmetros de Andr\xE9s, que estaba en medio de la calzada con la gu\xEDa del cable. La paleta ALTO no es un escudo."},peaton:{titulo:"Una persona entr\xF3 al \xE1rea se\xF1alizada",opciones:[{t:"Detengo la labor y pido a Andr\xE9s que gu\xEDe a la persona fuera del \xE1rea",ok:!0},{t:"Sigo tensando: ya casi termino",ok:!1},{t:"Le grito desde arriba que se aleje, sin dejar de trabajar",ok:!1},{t:"Bajo r\xE1pido por la escalera para sacarla yo",ok:!1}],explicacion:"El \xE1rea restringida protege a terceros de la ca\xEDda de herramientas o materiales. Se detiene la labor hasta despejarla.",ref:W.demarcacion,consecuencia:"Un herraje se solt\xF3 y cay\xF3 a medio metro de la persona. Nadie sali\xF3 herido, pero pudo terminar en tragedia."},companero:{titulo:"Andr\xE9s quiere subir a la escalera para ayudarte",opciones:[{t:"Lo detengo: solo un trabajador en la escalera; que suba el material con la cuerda",ok:!0},{t:"Que suba, son solo unos segundos",ok:!1},{t:"Que suba hasta la mitad y desde ah\xED me pase el herraje",ok:!1},{t:"Que me lance el herraje desde abajo",ok:!1}],explicacion:"Sobre la escalera port\xE1til se permite un solo trabajador. Los materiales se suben con bolso, mecate o cuerda.",ref:W.escaleras,consecuencia:"Con dos personas encima, la escalera se torci\xF3 en el amarre medio. Los dos quedaron colgando de la l\xEDnea de vida."},vehiculo:{titulo:"Un veh\xEDculo se acerca r\xE1pido al \xE1rea de trabajo",opciones:[{t:"Detengo la labor; Andr\xE9s regula el paso con la se\xF1alizaci\xF3n y esperamos a que pase",ok:!0},{t:"Sigo trabajando: los conos son suficientes",ok:!1},{t:"Bajo corriendo a quitar los conos del camino",ok:!1},{t:"Le hago se\xF1as desde la escalera sin dejar de trabajar",ok:!1}],explicacion:"La se\xF1alizaci\xF3n vial protege a la cuadrilla. Si un veh\xEDculo no respeta el \xE1rea, se detiene la labor y se regula el tr\xE1nsito antes de continuar.",ref:W.demarcacion,consecuencia:"El auto pas\xF3 rozando la escalera: la sacudida casi te tira. La se\xF1alizaci\xF3n sola no basta si nadie vigila el tr\xE1nsito."},tormenta:{titulo:"La lluvia se volvi\xF3 torrencial y hay rayer\xEDa",opciones:[{t:"Suspendo: aseguro herramientas, desciendo con tres puntos de apoyo y espero a que pase",ok:!0},{t:"Termino r\xE1pido el tensado antes de bajar",ok:!1},{t:"Me quedo arriba esperando a que escampe",ok:!1},{t:"Me quito los guantes mojados para tener m\xE1s agarre",ok:!1}],explicacion:"Se proh\xEDbe el trabajo en altura con tormenta el\xE9ctrica, lluvia torrencial o vientos de 60 km/h o m\xE1s.",ref:W.altura,consecuencia:"Un rayo cay\xF3 a dos cuadras. Con el agua, los pelda\xF1os quedaron resbalosos y perdiste un apoyo al bajar."},viento:{titulo:"Una r\xE1faga supera los 60 km/h mientras la cuadrilla trabaja en el techo",opciones:[{t:"Suspender la labor y bajar del techo, anclados a la l\xEDnea vertical de la escalera",ok:!0},{t:"Seguir: la r\xE1faga pasa en unos segundos",ok:!1},{t:"Seguir agachados, sin soltar el trabajo",ok:!1},{t:"Bajar de un salto para no esperar la escalera",ok:!1}],consecuencia:"Con vientos superiores a 60 km/h no se trabaja en techos.",explicacion:"No se debe trabajar en techos con vientos superiores a 60 km/h. Se suspende la labor y se baja de forma segura.",ref:W.t_techo_clima},presion:{titulo:"Andr\xE9s quiere subir ya: \xABel poste local se ve bien\xBB",opciones:[{t:"Seguimos: se inspeccionan el poste anterior, el local, el posterior y el tendido antes de subir",ok:!0},{t:"Subimos: el poste local est\xE1 bien",ok:!1},{t:"Que suba Andr\xE9s a revisar, es r\xE1pido",ok:!1},{t:"Subimos y revisamos los dem\xE1s postes despu\xE9s",ok:!1}],explicacion:"El encargado de cuadrilla verifica y asegura el ascenso al poste antes de iniciar la actividad. La inspecci\xF3n incluye el poste anterior, el posterior, el local y el tendido entre postes.",ref:Wa.inspeccion,consecuencia:"El poste posterior ten\xEDa una falla visible. Subir sin inspeccionarlo habr\xEDa sido hacerlo sobre un poste no verificado."},poda_peaton:{titulo:"Un peat\xF3n camina por la acera y entra en la zona de ca\xEDda de la rama",opciones:[{t:"STOP: se detiene la labor y un compa\xF1ero lo gu\xEDa fuera de la zona se\xF1alizada",ok:!0},{t:"Le gritamos, pero seguimos cortando",ok:!1},{t:"Seguimos: la rama ya cay\xF3",ok:!1},{t:"Que pase r\xE1pido por debajo de la rama",ok:!1}],explicacion:"Mientras haya una rama por caer o ca\xEDda en la zona, la labor se detiene y se regula el paso: nadie camina dentro de la zona de ca\xEDda (GS-101 \xA75.6.10 n y o).",ref:W.poda_trayectoria,consecuencia:"La persona qued\xF3 bajo la rama. Quien corta debe detener la labor a tiempo."},galeria_vigia:{titulo:"El compa\xF1ero de afuera deja de responder desde la tapa mientras est\xE1s en la galer\xEDa",opciones:[{t:"STOP: se detiene la labor y quien est\xE1 adentro sale por la escalera",ok:!0},{t:"Seguimos: el compa\xF1ero seguro est\xE1 atento",ok:!1},{t:"Gritamos desde el fondo de la galer\xEDa y seguimos con las pletinas",ok:!1},{t:"Dejamos el detector y seguimos cerca del rollo",ok:!1}],explicacion:"Sin contacto con quien vigila la tapa, se detiene la labor y se sale. La fuente no describe la comunicaci\xF3n en espacios confinados: se anota como duda en PENDIENTES_SST.md (J10).",ref:W.gal_vigia,consecuencia:"Quien estaba adentro sigui\xF3 trabajando sin que nadie lo viera desde la tapa."}};var aE=T_.filter(a=>a.n===5);var bf=[{urls:"stun:stun.l.google.com:19302"}],w_=11;function vf({sala:a,id:e,alMensaje:t,alPar:n}){let i=`realtime:mundo-${a}`,r={ws:"conectando",rtt:null,pares:new Map,presencia:!1},s,o=0,l=!1,c=!1,d=0,p=[],h=(g,A,C=i)=>{s?.readyState===1&&s.send(JSON.stringify({topic:C,event:g,payload:A,ref:String(++o)}))},f=(g,A)=>h("broadcast",{type:"broadcast",event:g,payload:A});function x(){r.ws="conectando",l=!1,s=new WebSocket(`${Qd.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${Qd.llave}&vsn=1.0.0`),s.onopen=()=>h("phx_join",{config:{broadcast:{self:!0},presence:{key:e},private:!1}}),s.onerror=()=>{r.ws="error"},s.onclose=()=>{r.ws!=="error"&&(r.ws="cerrado"),c||setTimeout(x,3e3)},s.onmessage=g=>{let A=JSON.parse(g.data);if(A.topic===i){if(A.event==="phx_reply"&&!l){if(A.payload?.status!=="ok"){r.ws="rechazado";return}l=!0,r.ws="unido",h("presence",{type:"presence",event:"track",payload:{id:e}}),f("eco",{id:e,t:performance.now()})}else if(A.event==="presence_state"){for(let C of Object.keys(A.payload))_(C);r.presencia=!0}else if(A.event==="presence_diff"){for(let C of Object.keys(A.payload.joins??{}))_(C);for(let C of Object.keys(A.payload.leaves??{}))C in(A.payload.joins??{})||m(C)}else if(A.event==="broadcast"){let C=A.payload.payload;A.payload.event==="eco"?C.id===e&&(r.rtt=performance.now()-C.t):C.de===e||r.pares.has(C.de)&&(A.payload.event==="rtc"?C.a===e&&C.sdp&&v(C).catch(()=>{}):(A.payload.event==="m"&&!r.pares.get(C.de).directo||A.payload.event==="f")&&t(C.m,C.de))}}}}function _(g){if(g===e||r.pares.has(g)||r.pares.size>=w_)return;let A={id:g,pc:null,canal:null,directo:!1,rtt:null};r.pares.set(g,A),n?.(g,!0),typeof RTCPeerConnection<"u"&&e<g&&S(A).catch(()=>{})}function m(g){let A=r.pares.get(g);A&&(A.pc?.close(),r.pares.delete(g),n?.(g,!1))}function u(g,A){g.canal=A,A.onopen=()=>{g.directo=!0},A.onclose=()=>{g.directo=!1},A.onmessage=C=>{let R=JSON.parse(C.data);R.t==="ping"?A.send(JSON.stringify({t:"pong",v:R.v})):R.t==="pong"?g.rtt=performance.now()-R.v:t(R,g.id)}}let b=g=>new Promise(A=>{if(g.iceGatheringState==="complete")return A();let C=setTimeout(A,2e3);g.addEventListener("icegatheringstatechange",()=>{g.iceGatheringState==="complete"&&(clearTimeout(C),A())})});async function S(g){g.pc?.close(),g.tOferta=performance.now(),g.intentos=(g.intentos??0)+1;let A=g.pc=new RTCPeerConnection({iceServers:bf});u(g,A.createDataChannel("m",{ordered:!1,maxRetransmits:0})),await A.setLocalDescription(await A.createOffer()),await b(A),f("rtc",{de:e,a:g.id,sdp:A.localDescription})}async function v({de:g,sdp:A}){let C=r.pares.get(g);if(A.type==="offer"){C.pc?.close();let R=C.pc=new RTCPeerConnection({iceServers:bf});R.ondatachannel=I=>u(C,I.channel),await R.setRemoteDescription(A),await R.setLocalDescription(await R.createAnswer()),await b(R),f("rtc",{de:e,a:g,sdp:R.localDescription})}else await C.pc?.setRemoteDescription(A)}function E(g){let A=JSON.stringify(g),C=!1;for(let I of r.pares.values())I.directo&&I.canal.readyState==="open"?I.canal.send(A):C=!0;let R=performance.now();C&&l&&R-d>500&&(d=R,f("m",{de:e,m:g}))}let M=g=>f("f",{de:e,m:g});p.push(setInterval(()=>h("heartbeat",{},"phoenix"),25e3)),p.push(setInterval(()=>{l&&f("eco",{id:e,t:performance.now()});for(let g of r.pares.values())g.directo&&g.canal.readyState==="open"?g.canal.send(JSON.stringify({t:"ping",v:performance.now()})):l&&e<g.id&&typeof RTCPeerConnection<"u"&&g.intentos<5&&performance.now()-g.tOferta>7e3&&S(g).catch(()=>{})},4e3)),x();function T(){c=!0,p.forEach(clearInterval);for(let g of[...r.pares.keys()])m(g);s?.close()}return{estado:r,enviar:E,fiable:M,cerrar:T}}var eu=(a,e)=>Math.max(1,Math.round(a*(e==="aprendiz"?.65:1))),tu=(a,e)=>Math.max(0,a-e),C_=(a,e)=>Math.min(100,a+e*.25),_f=a=>a>=90?3:a>=75?2:a>=60?1:0;function yf(a){let e=100;for(let t of a)e=t.tipo==="acierto"?C_(e,t.puntos):tu(e,t.puntos);return e}var Mt={encargado:{nombre:"Encargado de cuadrilla",corto:"Encargado",icono:"\u{1F4CB}",camisa:3108789,resumen:"Dirige el ATS, inspecciona el poste y comprueba la conexi\xF3n antes del ascenso."},sst:{nombre:"SST \xB7 prevencionista",corto:"SST",icono:"\u{1F9BA}",camisa:4170603,resumen:"Verifica el EPP y el \xE1rea de trabajo antes de que alguien suba."},liniero:{nombre:"Liniero",corto:"Liniero",icono:"\u{1F9D7}",camisa:16040475,resumen:"Lleva conos y cuerdas, arma el per\xEDmetro, sube y se asegura arriba."},auxiliar1:{nombre:"Auxiliar 1",corto:"Auxiliar 1",icono:"\u{1FA9C}",camisa:15304235,resumen:"Inspecciona y carga la escalera, la levanta a 75\xB0 y tensa la cuerda."},auxiliar2:{nombre:"Auxiliar 2",corto:"Auxiliar 2",icono:"\u{1FAA2}",camisa:13199902,resumen:"Carga la escalera, la presenta al poste y la amarra a media altura."}},Sf=8,ms=["Listo","\xA1Alto!","Espera un momento","Escalera amarrada","Subiendo","Necesito ayuda"],sa=[{id:"ats",rol:"encargado",lugar:"pickup",nombre:"ATS del d\xEDa",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"\xBFC\xF3mo empieza la jornada?",opciones:["Con el ATS: toda la cuadrilla analiza los riesgos de la tarea y se reparten las funciones","Cada quien toma su equipo y el riesgo se analiza si aparece un problema","El encargado llena el ATS solo, mientras los dem\xE1s adelantan el trabajo"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"epp",rol:"sst",lugar:"pickup",nombre:"Revisar el EPP de la cuadrilla",accion:"Revisar el EPP",fisico:[],antes:["ats"],puntos:8,pregunta:"\xBFCu\xE1ndo se revisa el equipo de protecci\xF3n?",opciones:["Antes de usarlo, a la vista y con sus pruebas; lo que tenga defecto no se usa y se pide el cambio","Una vez por semestre, en la revisi\xF3n planificada con SST","Solo cuando es nuevo o cuando el da\xF1o se nota desde lejos"],porque:"Cada quien revisa su EPP antes de usarlo; el equipo de altura con defecto no se usa.",ref:"GS-101 \xB7 \xA75.3.8 a) EPP revisado antes de su uso y \xA75.5 f) equipo de altura con defecto no se usa (p\xE1gs. 17 y 19)"},{id:"inspeccion",rol:"auxiliar1",lugar:"pickup",nombre:"Inspeccionar la escalera",accion:"Inspeccionar la escalera",fisico:[],antes:["ats"],puntos:8,pregunta:"Antes de bajar la escalera del pick-up\u2026",opciones:["Reviso que no tenga piezas faltantes, da\xF1adas o flojas y que los pelda\xF1os est\xE9n limpios","Nada: con la inspecci\xF3n de cada a\xF1o es suficiente","La reviso arriba, cuando ya est\xE9 apoyada en el poste"],porque:"La escalera se inspecciona cada vez que se usa, antes de subir.",ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"cuerdas",rol:"liniero",lugar:"pickup",nombre:"Tomar conos y cuerdas",accion:"Tomar conos y cuerdas",fisico:[],antes:["ats"],puntos:6,pregunta:"\xBFQu\xE9 cuerda llevas para asegurar la escalera?",opciones:["Cuerda de seguridad est\xE1tica de 10 mm y 12 m, con capacidad de 24 kN","El mecate de nailon que haya en el pick-up","Cualquier cuerda, si se le hacen suficientes nudos"],porque:"El amarre se hace con cuerda de seguridad est\xE1tica de 10 mm, 12 m y 24 kN.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda de seguridad est\xE1tica de 10 mm, 12 m de largo y 24 kN (p. 26)"},{id:"tomar",rol:"auxiliar1",lugar:"pickup",nombre:"Bajar la escalera entre dos",accion:"Tomar la escalera",fisico:[],antes:["inspeccion"],puntos:8,pregunta:"La escalera es de 28 pies (8,53 m). \xBFC\xF3mo se traslada?",opciones:["Entre dos personas, deposit\xE1ndola, sin tirarla","La lleva uno solo al hombro, para ir m\xE1s r\xE1pido","Entre dos, y al llegar se deja caer junto al poste"],porque:"Desde 28 pies la escalera se traslada y se coloca entre dos, y se deposita: no se tira.",ref:"GS-101 \xB7 \xA75.6.4 a) y o) Escalera de 28 pies o m\xE1s: trasladada y colocada por 2 personas (p\xE1gs. 22\u201323)"},{id:"tomar2",rol:"auxiliar2",lugar:"pickup",nombre:"Tomar el otro extremo",accion:"Tomar el otro extremo de la escalera",fisico:[],antes:["inspeccion"],puntos:4,ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"llegada",rol:"auxiliar1",auto:!0,lugar:"poste",nombre:"Llevar la escalera al poste",fisico:["tomar","tomar2"],antes:[],puntos:0},{id:"poste",rol:"encargado",lugar:"poste",nombre:"Inspeccionar el poste",accion:"Inspeccionar el poste",fisico:[],antes:["ats"],puntos:10,pregunta:"\xBFQu\xE9 revisas antes de autorizar el ascenso al poste?",opciones:["Que no se mueva, no est\xE9 inclinado ni da\xF1ado; y tambi\xE9n el poste anterior, el posterior y el tendido","Solo que este poste est\xE9 a plomo; los vecinos no importan","Nada: si ayer se subi\xF3, hoy tambi\xE9n se puede"],porque:"El encargado inspecciona el poste, el anterior, el posterior y el tendido; con fallas no se trabaja y se reporta.",ref:"GS-101 \xB7 \xA75.6.3 Inspecci\xF3n de poster\xEDa por el encargado de cuadrilla (p. 21)"},{id:"perimetro",rol:"liniero",lugar:"poste",nombre:"Armar el per\xEDmetro",accion:"Colocar conos y cinta",fisico:["llegada","cuerdas"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se cierra el \xE1rea de la escalera?",opciones:["Con cinta y conos, a 2 m como m\xEDnimo alrededor de la escalera","Con un cono al pie de la escalera","En la acera no hace falta: solo en la calzada"],porque:"El \xE1rea se cierra y se se\xF1aliza a un m\xEDnimo de 2 m de la escalera.",ref:"GS-101 \xB7 \xA75.6.4 g) Cerramiento y se\xF1alizaci\xF3n a un m\xEDnimo de 2 m de la escalera (p\xE1gs. 22\u201323)"},{id:"cuerda_extension",rol:"liniero",lugar:"poste",nombre:"Cuerda en la extensi\xF3n",accion:"Instalar la cuerda en la escalera",fisico:["llegada","cuerdas"],antes:["poste"],puntos:10,pregunta:"Antes de levantar la escalera, \xBFd\xF3nde va la cuerda de seguridad?",opciones:["En el \xFAltimo pelda\xF1o de la extensi\xF3n: rodea el poste por detr\xE1s y baja por el frente; ser\xE1 la l\xEDnea de vida vertical","Se amarra cuando el liniero ya est\xE9 arriba","En el primer pelda\xF1o, para que no estorbe"],porque:"La cuerda se instala previamente en el \xFAltimo pelda\xF1o de la extensi\xF3n y, al bajar por el frente, es la l\xEDnea de vida vertical.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda en el \xFAltimo pelda\xF1o de la extensi\xF3n; sirve como l\xEDnea de vida vertical (p\xE1gs. 24\u201325)"},{id:"orientar",rol:"auxiliar2",lugar:"poste",nombre:"Presentar la escalera al poste",accion:"Presentar la escalera",fisico:["llegada"],antes:["cuerda_extension"],puntos:6,pregunta:"\xBFC\xF3mo queda la escalera frente al poste?",opciones:["La secci\xF3n fija hacia el poste; la que sube y baja, de frente al trabajador","La secci\xF3n que sube y baja, hacia el poste","De lado, apoyada en un solo larguero"],porque:"La parte fija queda hacia el poste y la que asciende y desciende, de frente al trabajador.",ref:"GS-101 \xB7 \xA75.6.5 a) Escalera de frente: la parte fija hacia el poste (p. 24)"},{id:"colocar",rol:"auxiliar1",lugar:"poste",nombre:"Levantar la escalera a 75\xB0",accion:"Levantar la escalera",fisico:["orientar"],antes:[],puntos:10,pregunta:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera?",opciones:["75\xB0: con la punta de los zapatos en la base y los brazos estirados, los dedos tocan los pelda\xF1os","60\xB0: m\xE1s acostada es m\xE1s estable","85\xB0: casi vertical, pegada al poste"],porque:"La escalera va a 75\xB0, o se comprueba con la prueba de los zapatos y los brazos estirados. Es lo mismo que separar la base un cuarto del largo de la escalera.",ref:"GS-101 \xB7 \xA75.6.5 a) \xC1ngulo de 75\xB0 o prueba de los brazos estirados (p. 24) \xB7 GS-98: base separada un cuarto de la longitud"},{id:"tensar",rol:"auxiliar1",lugar:"poste",nombre:"Tensar la cuerda que baja",accion:"Tensar la cuerda",fisico:["colocar","cuerda_extension"],antes:[],puntos:8,pregunta:"La cuerda baja por el frente y pasa por el primer pelda\xF1o. \xBFCon qu\xE9 nudo se bloquea al final?",opciones:["Con un ballestrinque (pata de chancho), despu\xE9s de tensarla con el ocho en l\xEDnea","Con un nudo corredizo, para soltarla r\xE1pido","Con varias vueltas al larguero, sin nudo"],porque:"Se tensa con el ocho en l\xEDnea o la gaza y se termina con una pata de chancho que bloquea la cuerda.",ref:"GS-101 \xB7 \xA75.6.5 c) Tensar con ocho en l\xEDnea o gaza y terminar con pata de chancho (p\xE1gs. 25\u201326)"},{id:"amarre_medio",rol:"auxiliar2",lugar:"poste",nombre:"Amarrar a media altura",accion:"Amarrar la escalera al poste",fisico:["colocar"],antes:[],puntos:10,pregunta:"\xBFEn cu\xE1ntos puntos debe quedar sujeta la escalera al poste?",opciones:["En dos como m\xEDnimo: arriba y en la parte media, con la cuerda de 12 m","En uno: con el amarre de arriba es suficiente","En ninguno, si un compa\xF1ero la sostiene"],porque:"El amarre en la parte media se hace siempre: la escalera queda sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea",accion:"Verificar el \xE1rea de trabajo",fisico:["colocar"],antes:["perimetro","tensar","amarre_medio","epp"],puntos:8,pregunta:"\xBFQu\xE9 confirmas antes de dar el visto bueno al ascenso?",opciones:["Per\xEDmetro armado, escalera amarrada en dos puntos y sin vientos fuertes, lluvia torrencial ni rayer\xEDa","Que el liniero tenga prisa: entre m\xE1s r\xE1pido, menos exposici\xF3n","Solo el per\xEDmetro; el clima se valora si alguien se queja"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:"GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23) \xB7 GS-98: el prevencionista verifica las condiciones antes de la tarea en altura"},{id:"carrito",rol:"liniero",lugar:"poste",nombre:"Conectar el carrito",accion:"Conectar el carrito a la cuerda",fisico:["colocar","cuerda_extension"],antes:["tensar"],puntos:12,pregunta:"El carrito (freno de cuerda) corre por la l\xEDnea de vida vertical. \xBFA qu\xE9 parte del arn\xE9s se conecta?",opciones:["A la argolla frontal, la del pecho","Al portaganchos del arn\xE9s","A una argolla lateral de la cadera"],porque:"La detenci\xF3n de ca\xEDdas solo se conecta a la argolla dorsal o a la pectoral. El portaganchos y las argollas laterales no detienen una ca\xEDda.",ref:"GS-98 \xB7 Sistemas personales de detenci\xF3n de ca\xEDdas: solo argollas de detenci\xF3n dorsal o pectoral \xB7 GS-101 \xA75.6.1 f) Freno para cuerda (p. 20)"},{id:"conexion",rol:"encargado",lugar:"poste",nombre:"Comprobar la conexi\xF3n",accion:"Comprobar la conexi\xF3n del liniero",fisico:["carrito"],antes:["area"],puntos:12,pregunta:"El liniero ya se conect\xF3. \xBFQu\xE9 haces antes de que suba?",opciones:["Compruebo con mis manos su conexi\xF3n y su arn\xE9s: un compa\xF1ero siempre la revisa","Le pregunto si est\xE1 listo y conf\xEDo en su palabra","Lo dejo subir y lo reviso desde abajo, a la vista"],porque:"Antes de subir, un compa\xF1ero comprueba que la conexi\xF3n est\xE9 correcta (conexi\xF3n falsa).",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)"},{id:"subir",rol:"liniero",lugar:"poste",nombre:"Subir la escalera",accion:"Subir",fisico:["colocar"],antes:["perimetro","amarre_medio","carrito","conexion"],puntos:12,pregunta:"\xBFC\xF3mo se sube?",opciones:["De frente, con las manos libres y tres puntos de apoyo; la herramienta sube por cuerda y no uso los tres pelda\xF1os de arriba","Con la herramienta en una mano y agarrado con la otra","Hasta el \xFAltimo pelda\xF1o, para alcanzar mejor"],porque:"Se sube de frente con tres puntos de apoyo, la herramienta sube por cuerda y los tres pelda\xF1os superiores est\xE1n prohibidos.",ref:"GS-101 \xB7 \xA75.6.4 j) y k) Tres puntos de apoyo; Tabla 2: prohibidos los tres pelda\xF1os superiores (p\xE1gs. 22\u201323)"},{id:"faja",rol:"liniero",lugar:"arriba",nombre:"Faja de posicionamiento",accion:"Colocar la faja de posicionamiento",fisico:["subir"],antes:[],puntos:12,pregunta:"\xBFC\xF3mo se coloca la faja de posicionamiento (estrobo)?",opciones:["De una argolla lateral, en M por un pelda\xF1o y al menos 3 cables de fibra, hasta la otra argolla lateral","Las dos puntas al portaganchos del arn\xE9s","Una punta a una argolla lateral y la otra suelta, para moverme mejor"],porque:"La faja va de argolla lateral a argolla lateral, abrazando en M un pelda\xF1o y al menos 3 cables de fibra. Sola no detiene una ca\xEDda: por eso sigue la l\xEDnea de vida.",ref:"GS-101 \xB7 \xA75.6.1 d) Faja de posicionamiento (estrobo) \xB7 GS-98: el posicionamiento no protege contra ca\xEDdas por s\xED solo \xB7 forma en M: pr\xE1ctica de la cuadrilla, en revisi\xF3n por Salud Ocupacional"},{id:"linea_vida",rol:"liniero",lugar:"arriba",nombre:"L\xEDnea de vida",accion:"Anclar la l\xEDnea de vida",fisico:["faja"],antes:[],puntos:12,pregunta:"\xBFD\xF3nde va la l\xEDnea de vida de tu argolla dorsal?",opciones:["A un punto de anclaje seguro, de preferencia arriba de la cabeza","Al mismo pelda\xF1o donde tengo la faja","A los cables de fibra"],porque:"La l\xEDnea de vida va del anillo dorsal a un punto de anclaje, de preferencia arriba de la cabeza. Un pelda\xF1o o un cable no son puntos de anclaje.",ref:"GS-101 \xB7 \xA75.5 h) e i) L\xEDnea de vida en el anillo dorsal, a un anclaje arriba de la cabeza (p. 19) \xB7 GS-98: el anclaje soporta 2 268 kg por persona"}];var Ea=Object.fromEntries(sa.map(a=>[a.id,a])),nu=()=>({chofer:null,pasajeros:[],x:null,z:null,r:null}),au=()=>({fase:"sala",modo:"aprendiz",jugadores:{},hechos:{},fallos:{},eventos:[],pickup:nu(),n:0}),Fn=(a,e)=>Object.keys(a.jugadores).find(t=>a.jugadores[t].rol===e)??null,R_=(a,e)=>String(a??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,e);function iu(a,e){switch(a.n++,e?.t){case"entra":a.jugadores[e.id]={nombre:e.nombre,rol:a.jugadores[e.id]?.rol??null};break;case"sale":delete a.jugadores[e.id],a.pickup.chofer===e.id&&(a.pickup.chofer=null),a.pickup.pasajeros=a.pickup.pasajeros.filter(t=>t!==e.id);break;case"rol":a.jugadores[e.id]&&(a.jugadores[e.id].rol=e.rol);break;case"modo":a.modo=e.modo;break;case"empezar":a.fase="trabajo",a.pickup=nu();break;case"reiniciar":Object.assign(a,{fase:"sala",hechos:{},fallos:{},eventos:[],pickup:nu()});break;case"conduce":a.pickup.chofer=e.id;break;case"aparca":a.pickup={chofer:null,pasajeros:[],x:e.x,z:e.z,r:e.r};break;case"sube":a.pickup.pasajeros.push(e.id);break;case"baja":a.pickup.pasajeros=a.pickup.pasajeros.filter(t=>t!==e.id);break;case"hecho":if(!Ea[e.paso])break;a.hechos[e.paso]=e.rol,sa.every(t=>a.hechos[t.id])&&(a.fase="fin");break;case"falta":if(!Ea[e.paso])break;a.fallos[e.paso]=(a.fallos[e.paso]??0)+1,a.eventos.push({tipo:"falta",puntos:e.puntos,rol:e.rol,paso:e.paso,ref:e.ref,texto:e.texto});break}return a}function Mf(a,e,t,n=!1){switch(e?.t){case"entra":return[{t:"entra",id:t,nombre:R_(e.nombre,16)||"Jugador"}];case"sale":return n&&a.jugadores[e.id]?[{t:"sale",id:e.id}]:[];case"rol":return!a.jugadores[t]||a.fase==="fin"||e.rol!==null&&!Mt[e.rol]?[]:e.rol&&Fn(a,e.rol)&&Fn(a,e.rol)!==t?[]:[{t:"rol",id:t,rol:e.rol}];case"modo":return a.fase==="sala"&&a.jugadores[t]&&["aprendiz","tecnico"].includes(e.modo)?[{t:"modo",modo:e.modo}]:[];case"empezar":return a.fase==="sala"&&(a.jugadores[t]?.rol||n&&e.demo)?[{t:"empezar"}]:[];case"reiniciar":return a.fase==="fin"&&(a.jugadores[t]||n)||n&&e.dev&&a.fase==="trabajo"?[{t:"reiniciar"}]:[];case"conduce":return a.jugadores[t]?.rol&&!a.pickup.chofer&&(a.fase==="fin"||a.fase==="trabajo"&&a.hechos.tomar&&a.hechos.tomar2)?[{t:"conduce",id:t}]:[];case"sube":return a.jugadores[t]?.rol&&a.pickup.chofer&&a.pickup.chofer!==t&&!a.pickup.pasajeros.includes(t)&&a.pickup.pasajeros.length<3?[{t:"sube",id:t}]:[];case"baja":return a.pickup.pasajeros.includes(t)?[{t:"baja",id:t}]:[];case"aparca":return a.pickup.chofer===t&&[e.x,e.z,e.r].every(Number.isFinite)&&Math.abs(e.x)<5e3&&Math.abs(e.z)<5e3?[{t:"aparca",x:e.x,z:e.z,r:e.r}]:[];case"auto":{let i=Ea[e.paso];return n&&i?.auto&&a.fase==="trabajo"&&!a.hechos[i.id]&&i.fisico.every(r=>a.hechos[r])?[{t:"hecho",paso:i.id,rol:i.rol,limpio:!0}]:[]}case"intento":{let i=Ea[e.paso];if(!i||i.auto||a.fase!=="trabajo"||a.hechos[i.id])return[];let r=n&&e.dev,s=n&&e.bot,o=r?i.rol:s?e.rol:a.jugadores[t]?.rol;if(o!==i.rol||s&&!r&&Fn(a,o))return[];if(!i.fisico.every(c=>a.hechos[c]))return[];let l=i.antes.find(c=>!a.hechos[c]);if(l)return a.modo==="aprendiz"?[]:[{t:"falta",paso:i.id,rol:o,puntos:eu(Sf,a.modo),ref:Ea[l].ref??i.ref,texto:`Faltaba \xAB${Ea[l].nombre}\xBB antes de \xAB${i.nombre}\xBB.`}];if(i.opciones){if(!Number.isInteger(e.opcion)||e.opcion<0||e.opcion>=i.opciones.length)return[];if(e.opcion!==0)return[{t:"falta",paso:i.id,rol:o,puntos:eu(i.puntos,a.modo),ref:i.ref,texto:i.porque}]}return[{t:"hecho",paso:i.id,rol:o,limpio:!a.fallos[i.id]}]}}return[]}function ar(a,e){return sa.filter(t=>t.rol===e&&!t.auto&&!a.hechos[t.id]&&t.fisico.every(n=>a.hechos[n])).map(t=>({paso:t,bloqueo:Ea[t.antes.find(n=>!a.hechos[n])]??null}))}var ru=a=>sa.find(e=>!a.hechos[e.id]&&e.fisico.every(t=>a.hechos[t])&&e.antes.every(t=>a.hechos[t]))??null,ir=a=>Math.round(yf(a.eventos)),su=a=>_f(ir(a));function Ef(a){let e=Object.fromEntries(Object.keys(Mt).map(t=>[t,100]));for(let t of a.eventos)t.tipo==="falta"&&t.rol in e&&(e[t.rol]=tu(e[t.rol],t.puntos));return e}function ec(a){let e=[...a.id].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,7),t=a.opciones.map((n,i)=>i);for(let n=t.length-1;n>0;n--){e=e*1664525+1013904223>>>0;let i=e%(n+1);[t[n],t[i]]=[t[i],t[n]]}return t}var ou=(a,e)=>{for(let t=0;t<e.length;t++)a=a*31+e.charCodeAt(t)|0;return a};function Af({id:a,red:e,alEvento:t}){let n=au(),i=[],r=0,s=[],o=!1,l=-1e9,c=()=>e?[a,...e.estado.pares.keys()].sort()[0]:a,d=()=>c()===a,p=()=>!e||o||!!e.estado.presencia;function h(v){i.push(v),r=ou(r,JSON.stringify(v)),iu(n,v),t?.(v,n)}function f(v,E,M){for(let T of Mf(n,v,E,M)){let g=r;h(T),e?.fiable({t:"ev",n:n.n,h:g,ev:T})}}function x(v){p()?d()?f(v,a,!0):e.fiable({t:"pro",pro:v}):s.push(v)}function _(){if(s.length&&p()){let v=s;s=[],v.forEach(x)}}function m(){let v=Date.now();e&&v-l>1500&&(l=v,e.fiable({t:"pido"}))}let u=0;function b(v,E,M){if(M!==c()||v===n.n&&E===r){u=0;return}let T=Date.now();u?T-u>1e3&&m():u=T}function S(v,E){if(v?.t==="pro")d()&&f(v.pro,E,!1);else if(v?.t==="ev"){if(E!==c())return;v.n===n.n+1&&v.h===r?h(v.ev):m()}else if(v?.t==="pido")i.length&&e.fiable({t:"todo",evs:i});else if(v?.t==="todo"){if(!Array.isArray(v.evs)||!v.evs.length||v.evs.length>5e3)return;let M=v.evs.reduce((T,g)=>ou(T,JSON.stringify(g)),0);if(!(E===c()?M!==r:!i.length))return;n=au(),i=[],r=0;for(let T of v.evs)i.push(T),r=ou(r,JSON.stringify(T)),iu(n,T);t?.(null,n)}}return{get E(){return n},get huella(){return r},anfitrion:d,idAnfitrion:c,proponer:x,recibir:S,pedir:m,cada:_,latido:b,jugarSolo:()=>{o=!0}}}var Tf=4.6,hu=7.4,gs=hu*Math.sin(75*Math.PI/180),lu=hu*Math.cos(75*Math.PI/180),cu=4.8,P_=7,du=4.4,uu=40,En={cuerda:15591122,cinta:15320363,faja:15320363,vida:14173227};function wf(a){let e=_n();for(let n of[-.21,.21])e.caja(n,-.04,a/2,.05,.08,a,15304235);for(let n=.3;n<a-.1;n+=.3)e.caja(0,-.02,n,.42,.035,.035,12172996);let t=new Ye(e.geometria(),new ft({vertexColors:!0,roughness:.7}));return t.castShadow=!1,t}function Cf({via:a,barrio:e}){let t=e.trabajo,n={},i=(H,ce,pe=0)=>(a.en(H,ce,n),new F(n.x,pe,n.z)),r=i(t.d-lu,t.a,.15),s=i(t.d-.14,t.a,.15+gs),o=new F(s.x-r.x,0,s.z-r.z).normalize(),l=new F(o.z,0,-o.x),c=new F().subVectors(r,s).setY(0).normalize().multiplyScalar(.97).add(new F(0,.26,0)),d=Math.atan2(o.x,o.z),p=(H,ce=0,pe=new F)=>pe.lerpVectors(r,s,H/gs).addScaledVector(c,ce),h={pickup:i(e.dPick,-4.5),poste:i(t.d-2.6,t.a+.2)},f=i(t.d-2.2,t.a+.75),x={pickup:{encargado:[0,-4.4],sst:[1.3,-4.4],liniero:[-1.3,-4.4],auxiliar1:[-2.6,-4.4],auxiliar2:[2.6,-4.4]},poste:{encargado:[-3.6,1.3],sst:[-4.4,-1.2],liniero:[-2.55,0],auxiliar1:[-2.2,1],auxiliar2:[-.6,-1.1]}},_=(H,ce)=>ce==="pickup"?i(e.dPick+x.pickup[H][0],x.pickup[H][1]):i(t.d+x.poste[H][0],t.a+x.poste[H][1]),m=new ut,u=wf(Tf),b=wf(hu),S=new F,v=new F,E=i(t.d-2.2,t.a+.75,.2),M=i(t.d-2.2-Tf,t.a+.75,.2);b.position.copy(r),b.lookAt(s),b.visible=!1;let T=new Bt(new zr(.17,.55,10).translate(0,.275,0),new ft({color:15227148,roughness:.6}),4),g=[[-lu-2,-2],[2,-2],[2,2],[-lu-2,2]].map(([H,ce])=>i(t.d+H,t.a+ce,.15)),A=new _t;g.forEach((H,ce)=>{A.position.copy(H),A.updateMatrix(),T.setMatrixAt(ce,A.matrix)}),T.visible=!1;let C=new ht,R=new Float32Array(uu*6),I=new Float32Array(uu*6);C.setAttribute("position",new mt(R,3)),C.setAttribute("color",new mt(I,3));let U=new ya(C,new ta({vertexColors:!0}));U.frustumCulled=!1;let L=new Ye(new Zt(.07,.12,.07),new ft({color:14173227,roughness:.4,metalness:.5})),B=new Ye(new kr(1.25,1.45,40).rotateX(-Math.PI/2),new xn({color:16766503,transparent:!0,opacity:.8,depthWrite:!1}));B.visible=!1,m.add(u,b,T,U,L,B);let Z=0,Q=new We;function q(H,ce,pe){if(Z>=uu)return;Q.set(pe);let fe=Z++*6;R[fe]=H.x,R[fe+1]=H.y,R[fe+2]=H.z,R[fe+3]=ce.x,R[fe+4]=ce.y,R[fe+5]=ce.z;for(let N=0;N<6;N+=3)I[fe+N]=Q.r,I[fe+N+1]=Q.g,I[fe+N+2]=Q.b}let J=0,j=Array.from({length:8},()=>new F),se={x:0,y:0,z:0,rumbo:d,pose:"e",fase:0},Se=H=>!!(H.hechos.tomar&&H.hechos.tomar2&&!H.hechos.llegada);function k(){return p(J*cu,.13,j[7]),se.x=j[7].x,se.y=j[7].y,se.z=j[7].z,se.pose=J<1?"e":"t",se.fase=J*26,se}function ue(H){let ce=H("auxiliar1"),pe=H("auxiliar2");return!!ce&&!!pe&&Math.hypot(ce.x-h.poste.x,ce.z-h.poste.z)<3.5&&Math.hypot(ce.x-pe.x,ce.z-pe.z)<du+1.5}function _e(H,ce,pe,fe){if(!Se(H)||ce!=="auxiliar2")return;let N=fe("auxiliar1");if(!N)return;let oe=pe.x-N.x,me=pe.z-N.z,be=Math.hypot(oe,me),ve=du+.5;be>ve&&(pe.x=N.x+oe/be*ve,pe.z=N.z+me/be*ve)}function Me(H,ce,pe,fe,N){let oe=pe.hechos,me=!!oe.subir&&pe.fase==="trabajo";if(J=me?Math.min(1,J+H/P_):0,b.visible=!!oe.colocar,u.visible=!oe.colocar,!oe.colocar){let ve=fe("auxiliar1"),Re=fe("auxiliar2");Se(pe)&&ve&&Re?(u.position.set(ve.x,(ve.y??.15)+1.47,ve.z),u.lookAt(Re.x,(Re.y??.15)+1.47,Re.z)):oe.llegada?(u.position.copy(E),u.lookAt(M)):(u.position.copy(N.local(.4,2.16,-2.9,S)),u.lookAt(N.local(.4,2.16,1.7,v)))}if(T.visible=!!oe.perimetro,Z=0,oe.perimetro)for(let ve=0;ve<4;ve++)q(j[0].copy(g[ve]).setY(.62),j[1].copy(g[(ve+1)%4]).setY(.62),En.cinta);if(oe.colocar&&oe.cuerda_extension&&(p(gs-.3,0,j[0]),j[1].set(t.x,j[0].y-.1,t.z).addScaledVector(o,.2),q(j[0],j[1],En.cuerda),q(j[1],p(gs-.6,.1,j[2]),En.cuerda),q(j[2],p(1.7,.1,j[3]),En.cuerda),oe.tensar&&q(j[3],p(.35,.02,j[4]),En.cuerda)),oe.amarre_medio){let Re=[[.22,.22],[.22,-.22],[-.22,-.22],[-.22,.22]].map(([he,ee],K)=>j[K].set(t.x+he,3.65,t.z+ee));for(let he=0;he<4;he++)q(Re[he],Re[(he+1)%4],En.cuerda);for(let he of[-1,1])q(p(3.4,0,j[4]).addScaledVector(l,he*.21),j[5].set(t.x,3.65,t.z).addScaledVector(l,he*.22),En.cuerda)}let be=fe("liniero");if(L.visible=!!(oe.carrito&&be),L.visible){let ve=j[5].set(be.x,(be.y??.15)+1.28,be.z);p(Math.min(gs-.8,Math.max(1.3,ve.y-.15)),.1,L.position),ve.distanceTo(L.position)<1.6&&q(L.position,ve.addScaledVector(o,.1),En.cuerda)}if(me&&be&&J>=1){let ve=j[6].set(be.x,be.y,be.z);if(oe.faja){let Re=j[0].copy(ve).addScaledVector(l,.2).setY(ve.y+1),he=j[1].copy(ve).addScaledVector(l,-.2).setY(ve.y+1),ee=p(cu+1.25,0,j[2]).addScaledVector(l,.15),K=p(cu+1.25,0,j[3]).addScaledVector(l,-.15),re=j[4].set(t.x,6.3,t.z).addScaledVector(o,-.5);q(Re,ee,En.faja),q(ee,re,En.faja),q(re,K,En.faja),q(K,he,En.faja)}oe.linea_vida&&q(j[0].copy(ve).addScaledVector(o,-.14).setY(ve.y+1.42),j[1].set(t.x,Math.min(9.2,ve.y+2.5),t.z),En.vida)}C.setDrawRange(0,Z*2),C.attributes.position.needsUpdate=C.attributes.color.needsUpdate=!0,B.material.opacity=.55+.3*Math.sin(ce*4)}function V(H){B.visible=!!h[H],B.visible&&B.position.copy(h[H]).setY(.2)}return{grupo:m,zonas:h,puesto:_,metaEscalera:f,cargando:Se,llego:ue,restringir:_e,cada:Me,marcar:V,puestoLiniero:k,rumbo:d,L_CARGA:du,get subida(){return J},cima:s}}var I_=1.7,D_=1.25,L_=1.6,Rf=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a));function Pf({sesion:a,obra:e,resolver:t,altura:n}){let i=new Map;function r(s,o,l){for(let c of Object.keys(Mt)){let d=!Fn(o,c);if(d&&!i.has(c)){let p=e.puesto(c,"pickup");i.set(c,{rol:c,x:p.x,z:p.z,y:.15,rumbo:0,pose:"i",fase:0,espera:0})}else d||i.delete(c)}if(a.anfitrion())for(let c of i.values()){let d=null,p=null,h=I_;if(c.pose="i",o.fase!=="trabajo"){if(d=o.fase==="sala"?e.puesto(c.rol,"pickup"):null,c.y>n(c.x,c.z)+.5){let x=e.zonas.poste;c.x=x.x,c.z=x.z,c.y=n(x.x,x.z)}}else if(c.rol==="liniero"&&o.hechos.subir){let x=e.puestoLiniero();Object.assign(c,{x:x.x,z:x.z,y:x.y,rumbo:e.rumbo,pose:x.pose,fase:x.fase}),p=e.subida>=1?ar(o,c.rol).find(_=>!_.bloqueo)?.paso:null}else if(e.cargando(o)&&/^auxiliar/.test(c.rol))if(c.pose="c",c.rol==="auxiliar1")d=e.metaEscalera,h=D_;else{let x=l("auxiliar1");if(x){let _=c.x-x.x,m=c.z-x.z,u=Math.hypot(_,m)||1,b=c.x,S=c.z;c.x=x.x+_/u*e.L_CARGA,c.z=x.z+m/u*e.L_CARGA,c.rumbo=Rf(c.rumbo,Math.atan2(x.x-c.x,x.z-c.z)),c.fase+=Math.hypot(c.x-b,c.z-S)*4.19}}else p=ar(o,c.rol).find(x=>!x.bloqueo)?.paso??null,d=e.puesto(c.rol,p?p.lugar:o.hechos.tomar&&o.hechos.tomar2?"poste":"pickup");let f=!d;if(d){let x=d.x-c.x,_=d.z-c.z,m=Math.hypot(x,_);if(m>.25){let u=Math.min(m,h*s);if(c.x+=x/m*u,c.z+=_/m*u,t(c,.3),c.rumbo=Rf(c.rumbo,Math.atan2(x,_))*.25+c.rumbo*.75,c.fase+=u*4.19,c.rol==="auxiliar1"&&e.cargando(o)){let b=l("auxiliar2");b&&Math.hypot(b.x-c.x,b.z-c.z)>e.L_CARGA+.6&&(c.x-=x/m*u,c.z-=_/m*u)}}else f=!0;c.y=n(c.x,c.z)}p&&f?(c.espera+=s,c.espera>L_&&(c.espera=0,a.proponer({t:"intento",paso:p.id,opcion:0,bot:!0,rol:c.rol}))):c.espera=0}}return{B:i,cada:r}}var Qe=null,oa=null,Aa=null,sr=null,ic=null,Ta=null,bs=null,pu=null,tc=null,or=null,vs=null,rr=null,xs=null,_s=null,ys=null,N_=0,F_={},Df=!1,ac=1,nc=new Set,Lf=.55,U_=-8,O_=a=>10**(a/20);function B_(){try{Qe?.resume?.()?.catch?.(()=>{})}catch{}}function Nf(){if(Qe){B_();return}try{Qe=new(window.AudioContext||window.webkitAudioContext),Aa=Qe.createDynamicsCompressor(),Aa.threshold.value=-6,Aa.knee.value=8,Aa.ratio.value=6,Aa.attack.value=.003,Aa.release.value=.25,Aa.connect(Qe.destination),oa=Qe.createGain(),oa.gain.value=Df?0:Lf*ac,oa.connect(Aa),sr=Qe.createGain(),sr.connect(oa),ic=Qe.createGain(),ic.connect(oa),Ta=Qe.createGain(),Ta.connect(oa),bs=Qe.createGain(),bs.gain.value=0;let a=Qe.createConvolver(),e=Math.floor(Qe.sampleRate*.6),t=Qe.createBuffer(1,e,Qe.sampleRate),n=t.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.exp(-i/(Qe.sampleRate*.12));a.buffer=t,pu=Qe.createGain(),pu.gain.value=1,sr.connect(bs).connect(a).connect(pu).connect(oa),V_(),j_(Of(F_))}catch{Qe=null}}function Ff(a){return ac=Math.max(0,Math.min(1,a)),oa&&!Df&&(oa.gain.value=Lf*ac),ac}function z_(a,e="general"){return a?nc.add(e):nc.delete(e),Ta&&Ta.gain.setTargetAtTime(nc.size?O_(U_):1,Qe.currentTime,.15),nc.size>0}function It(a,e,{tipo:t="sine",vol:n=.3,ataque:i=.005,caida:r=null,glide:s=null,retardo:o=0,ui:l=!1}={}){if(!Qe)return;let c=Qe.currentTime+o,d=Qe.createOscillator(),p=Qe.createGain();d.type=t,d.frequency.setValueAtTime(a,c),s&&d.frequency.exponentialRampToValueAtTime(s,c+e),p.gain.setValueAtTime(0,c),p.gain.linearRampToValueAtTime(n,c+i),p.gain.exponentialRampToValueAtTime(1e-4,c+(r??e)),d.connect(p).connect(l?ic:sr),d.start(c),d.stop(c+e+.05)}var fu=new Map;function Uf(a){if(!fu.has(a)){let e=Qe.createBuffer(1,2*a,Qe.sampleRate),t=e.getChannelData(0);for(let n=0;n<2*a;n++)t[n]=Math.random()*2-1;fu.set(a,e)}return fu.get(a)}function $n(a,{vol:e=.3,filtro:t="lowpass",f:n=1200,q:i=1,retardo:r=0,ataque:s=.005}={}){if(!Qe)return;let o=Qe.currentTime+r,l=Math.floor(Qe.sampleRate*a),c=Qe.createBufferSource();c.buffer=Uf(l);let d=Qe.createBiquadFilter();d.type=t,d.frequency.value=n,d.Q.value=i;let p=Qe.createGain();p.gain.setValueAtTime(0,o),p.gain.linearRampToValueAtTime(e,o+s),p.gain.exponentialRampToValueAtTime(1e-4,o+a),c.connect(d).connect(p).connect(sr),c.start(o,Math.random()*l/Qe.sampleRate),c.stop(o+a+.05)}var Nt={clic:()=>It(880,.06,{tipo:"triangle",vol:.12,ui:!0}),hover:()=>It(1320,.03,{tipo:"sine",vol:.04,ui:!0}),ok:()=>{It(660,.12,{vol:.2,ui:!0}),It(990,.18,{vol:.2,retardo:.09,ui:!0})},logro:()=>[523,659,784,1047].forEach((a,e)=>It(a,.25,{tipo:"triangle",vol:.18,retardo:e*.09,ui:!0})),error:()=>{It(220,.22,{tipo:"sawtooth",vol:.14,glide:140})},alerta:()=>{It(1046,.09,{tipo:"square",vol:.07}),It(1046,.09,{tipo:"square",vol:.07,retardo:.16})},stop:()=>{It(392,.12,{tipo:"square",vol:.12}),It(294,.25,{tipo:"square",vol:.12,retardo:.12})},cono:()=>{$n(.12,{vol:.25,f:500}),It(160,.12,{vol:.2,glide:90})},metal:()=>{It(1800+Math.random()*300,.25,{tipo:"triangle",vol:.06}),It(2600,.15,{vol:.03})},paso:()=>$n(.08,{vol:.12,f:700+Math.random()*300}),cuerda:()=>$n(.35,{vol:.12,filtro:"bandpass",f:2200,q:2,ataque:.1}),chasquido:()=>{$n(.09,{vol:.6,filtro:"highpass",f:2500}),It(3200,.05,{tipo:"square",vol:.15})},golpe:()=>{$n(.4,{vol:.6,f:260}),It(70,.4,{vol:.5,glide:40})},tir\u00F3n:()=>{It(140,.3,{tipo:"sawtooth",vol:.2,glide:90}),$n(.25,{vol:.25,f:900})},trueno:()=>{$n(2.6,{vol:.7,f:160,ataque:.05}),$n(1.2,{vol:.4,f:600,retardo:.05})},tension:()=>It(180,.5,{tipo:"sawtooth",vol:.07,glide:420}),bocina:()=>{It(392,.35,{tipo:"square",vol:.12}),It(494,.35,{tipo:"square",vol:.1})},clip:()=>{It(1500,.05,{tipo:"square",vol:.08}),$n(.05,{vol:.15,filtro:"highpass",f:3e3,retardo:.02})},presion:()=>$n(.18,{vol:.1,filtro:"bandpass",f:1400,q:1.2}),insignia:()=>{[784,988,1319].forEach((a,e)=>It(a,.22,{tipo:"sine",vol:.16,retardo:e*.07,ui:!0}))},motosierra:()=>{$n(.9,{vol:.16,f:240}),It(96,.9,{tipo:"sawtooth",vol:.07,glide:120})}},If={calle:{transito:1,viento:1,lluvia:1,reverb:0,zumbido:1},ducto:{transito:0,viento:0,lluvia:0,reverb:.3,zumbido:0},neutro:{transito:0,viento:1,lluvia:1,reverb:0,zumbido:0}},G_={aereo:"calle",techo:"calle",media:"calle",poste:"calle",poda:"calle",ducto:"ducto"},H_={aereo:.6,techo:.5,media:.5,poste:.5,poda:.3};function k_(a){let e=/^(\d{1,2})/.exec(a??"");if(!e)return .6;let t=+e[1];return t>=7&&t<9||t>=16&&t<19?1:t>=9&&t<16?.7:t>=19&&t<22?.4:.15}function Of(a={}){let e=a.tipo??"aereo",t=If[a.ambiente]?a.ambiente:G_[e]??"neutro",n=If[t],i=/avenida/i.test(a.lugar??"")?1.3:1,r=(H_[e]??.5)*k_(a.hora)*i,s=Number.isFinite(a.viento)?a.viento:0,o=Math.max(0,Math.min(1,(s-8)/34));return{perfil:t,transito:Math.min(1,r)*n.transito*.09,viento:o*n.viento*.2,lluvia:n.lluvia,reverb:n.reverb*.6,zumbido:n.zumbido*.012}}var Bf=null;function V_(){if(tc||!Qe)return;let a=3,e=Math.floor(Qe.sampleRate*a),t=Uf(e),n=()=>{let p=Qe.createBufferSource();return p.buffer=t,p.loop=!0,p.start(0,Math.random()*a),p};tc=n();let i=Qe.createBiquadFilter();i.type="bandpass",i.frequency.value=3e3,i.Q.value=.4,or=Qe.createGain(),or.gain.value=0,tc.connect(i).connect(or).connect(Ta);let r=n(),s=Qe.createBiquadFilter();s.type="lowpass",s.frequency.value=400,vs=Qe.createGain(),vs.gain.value=0,r.connect(s).connect(vs).connect(Ta);let o=n(),l=Qe.createBiquadFilter();l.type="bandpass",l.frequency.value=500,l.Q.value=.6,rr=Qe.createGain(),rr.gain.value=0,xs=Qe.createOscillator(),xs.frequency.value=.2,_s=Qe.createGain(),_s.gain.value=0,xs.connect(_s).connect(rr.gain),o.connect(l).connect(rr).connect(Ta),xs.start();let c=Qe.createOscillator();c.type="triangle",c.frequency.value=55;let d=Qe.createBiquadFilter();d.type="lowpass",d.frequency.value=160,ys=Qe.createGain(),ys.gain.value=0,c.connect(d).connect(ys).connect(Ta),c.start(),Bf={lfo:xs,fuentes:[tc,r,o,c]}}function j_(a){if(!Qe||!or)return;let e=Qe.currentTime;or.gain.setTargetAtTime(N_*.35*a.lluvia,e,.6),vs.gain.setTargetAtTime(a.viento,e,.8),rr.gain.setTargetAtTime(a.transito,e,1.2),_s.gain.setTargetAtTime(a.transito*.5,e,1.2),ys.gain.setTargetAtTime(a.zumbido,e,1.2),bs.gain.setTargetAtTime(a.reverb,e,.3)}function $_(){return Qe?{ctx:Qe,compresor:Aa,maestro:oa,efectos:sr,interfaz:ic,ambiente:Ta,sala:bs,ambiente_:{lluvia:or,viento:vs,transito:rr,zumbido:ys,lfo:_s,lfoFuente:Bf?.lfo}}:null}typeof window<"u"&&(window.__audio={grafo:$_,ducking:z_,nivelesAmbiente:Of});var Ss={"teclado y rat\xF3n":{accion:"E",mundo:"WASD moverse \xB7 rat\xF3n mirar \xB7 E acci\xF3n \xB7 V vista \xB7 R radio \xB7 M mapa \xB7 P pausa \xB7 May\xFAs correr",panel:"Clic o 1\u20133 para elegir \xB7 \u2191 \u2193 mover \xB7 Enter aceptar \xB7 Esc volver",todo:"Teclado y rat\xF3n: WASD moverse, rat\xF3n mirar (clic en el juego para capturarlo), E acci\xF3n, V cambiar vista, R radio, M mapa, P o Esc pausa, May\xFAs correr, H bocina al volante."},t\u00E1ctil:{accion:"\u270B",mundo:"Izquierda: caminar \xB7 derecha: mirar \xB7 \u270B acci\xF3n \xB7 \u{1F441} vista \xB7 \u{1F4FB} radio \xB7 \u{1F5FA} mapa \xB7 \u23F8 pausa",panel:"Toca una opci\xF3n para elegirla",todo:"Pantalla t\xE1ctil: arrastra a la izquierda para caminar (al fondo, corres) y a la derecha para mirar. Botones: \u270B acci\xF3n, \u{1F441} vista, \u{1F4FB} radio, \u{1F5FA} mapa, \u23F8 pausa."},control:{accion:"\u24B6",mundo:"\u24C1 moverse \xB7 \u24C7 mirar \xB7 \u24B6 acci\xF3n \xB7 \u24CE vista \xB7 \u24CD radio \xB7 \u29C9 mapa \xB7 \u2630 pausa \xB7 LT correr",panel:"\u24B6 elegir \xB7 \u271A o \u24C1 mover \xB7 \u24B7 volver",todo:"Control: palanca izquierda moverse, derecha mirar, \u24B6 acci\xF3n, \u24CE vista, \u24CD radio, \u29C9 (Vista) mapa, \u2630 (Men\xFA) pausa, LT correr, LB bocina al volante. En los men\xFAs: cruceta o palanca para mover, \u24B6 elegir, \u24B7 volver."}},q_=`
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
.mu-op:hover:not([disabled]){border-color:rgba(255,255,255,.35)}.mu-op:focus-visible,.mu-op.foco,.mu-panel input:focus-visible,.mu-panel input.foco{outline:3px solid #FFD627;outline-offset:1px}
.mu-pie{margin-top:10px;padding-top:8px;border-top:1px solid rgba(255,255,255,.15);font-size:12px;opacity:.8;text-align:center}
.mu-ayudas{position:absolute;left:50%;bottom:max(6px,env(safe-area-inset-bottom));transform:translateX(-50%);background:rgba(0,24,48,.55);border-radius:8px;padding:4px 10px;font:12px system-ui,sans-serif;white-space:nowrap;max-width:94vw;overflow:hidden;text-overflow:ellipsis;pointer-events:none}
.mu-fila3{display:grid;grid-template-columns:1fr auto auto auto;gap:6px;align-items:center;margin:4px 0}.mu-fila3 .mu-op{margin:0;min-height:38px;padding:6px 12px;text-align:center}
.mu-chip{position:absolute;right:max(8px,env(safe-area-inset-right));bottom:max(8px,env(safe-area-inset-bottom));background:rgba(0,24,48,.75);border-radius:999px;padding:4px 10px;font:12px system-ui,sans-serif;pointer-events:none}
.mu-op[disabled]{opacity:.45;cursor:default}.mu-op.elegido{border-color:#FFD627;background:#12507F}.mu-op.mal{border-color:#FF7A59;text-decoration:line-through}
.mu-op small{display:block}.mu-pri{background:#FFD627;color:#062846;font-weight:700;text-align:center}
.mu-nota{background:rgba(255,122,89,.16);border-left:4px solid #FF7A59;border-radius:6px;padding:8px 10px;margin:8px 0}
.mu-pista{background:rgba(255,214,39,.13);border-left:4px solid #FFD627;border-radius:6px;padding:8px 10px;margin:8px 0}
.mu-tabla{width:100%;border-collapse:collapse;font-size:14px}.mu-tabla td{padding:5px 6px;border-top:1px solid rgba(255,255,255,.14);vertical-align:top}
.mu-etq{position:absolute;transform:translate(-50%,-100%);background:rgba(0,24,48,.7);border-radius:6px;padding:1px 7px;font:12px system-ui,sans-serif;white-space:nowrap;pointer-events:none}
.mu-radio{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 156px)}
.mu-mapa{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 234px)}
.mu-pausa{bottom:calc(max(26px,env(safe-area-inset-bottom)) + 312px)}
.mu-lugar{margin-top:2px;opacity:.85;font-size:12px}
.mu-panel canvas{display:block;width:100%;max-height:68dvh;object-fit:contain;border-radius:8px;background:#1F4F6E}
@media (max-width:760px),(max-height:480px){.mu-lista{display:none}.mu-hud{font-size:13px}}
`,zf=["1","2","3","4","5","6"];function Gf(a,e){let t=document.createElement("style");t.textContent=q_,document.head.append(t);let n=(k,ue="div")=>{let _e=document.createElement(ue);return _e.className=k,a.append(_e),_e},i=n("mu-hud"),r=n("mu-lista","ol"),s=n("mu-aviso"),o=n("mu-avisos"),l=n("mu-fondo"),c=document.createElement("div");c.className="mu-panel",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),l.append(c),l.hidden=!0,i.hidden=r.hidden=s.hidden=!0;let d=null,p=!1,h=null,f=null,x=[],_="",m=0,u="teclado y rat\xF3n",b=n("mu-ayudas");try{_=localStorage["mundo:nombre"]??""}catch{}let S=()=>[...c.querySelectorAll("button:not([disabled]), input")];function v(k,ue,{cancela:_e=!1}={}){let Me=d===k?m:-1,V=d!==k;d=k,p=_e,c.innerHTML=ue+'<div class="mu-pie"></div>',l.hidden=!1,document.exitPointerLock?.();let H=S(),ce=H[Me]?Me:H.findIndex(pe=>pe.classList.contains("elegido"));M(ce>=0?ce:H.findIndex(pe=>pe.tagName==="BUTTON")),g(),V&&Nt.clic()}function E(){d=null,h=null,l.hidden=!0,c.innerHTML=""}function M(k){let ue=S();ue.length&&(m=(k+ue.length)%ue.length,ue.forEach((_e,Me)=>_e.classList.toggle("foco",Me===m)),ue[m].focus({preventScroll:!0}),ue[m].scrollIntoView?.({block:"nearest"}),ue[m].tagName==="INPUT"&&ue[m].setSelectionRange(ue[m].value.length,ue[m].value.length))}function T(k){let ue=S().indexOf(document.activeElement);M((ue>=0?ue:m)+k),Nt.hover()}let g=()=>{let k=c.querySelector(".mu-pie");k&&(k.textContent=Ss[u].panel)};c.addEventListener("click",k=>{let ue=k.target.closest("button");if(!ue||ue.disabled)return;let{a:_e,v:Me}=ue.dataset;if(_e==="rol")A(),e.rol(Me);else if(_e==="modo")e.modo(Me);else if(_e==="empezar")A(),e.empezar();else if(_e==="unirse"){let V=c.querySelector("[name=codigo]").value.trim();V&&e.unirse(V)}else if(_e==="copiar")navigator.clipboard?.writeText(Me).then(()=>{ue.textContent="Enlace copiado \u2713"},()=>{ue.textContent=Me});else if(_e==="opcion")f=Number(Me),e.intento(h.id,f);else if(_e==="frase")e.radio(Number(Me)),E();else if(_e==="reiniciar")e.reiniciar();else if(_e==="cerrar")E();else if(_e==="ajuste"){let[V,H]=Me.split(":");e.ajuste(V,Number(H))}else _e==="dev"?e.dev(Me,ue):_e==="ir"?(e.ir(Me),E()):_e==="reporte"&&e.reporte()});function A(){let k=c.querySelector("[name=nombre]");if(k){_=k.value.trim().slice(0,16);try{localStorage["mundo:nombre"]=_}catch{}e.nombre(_)}}addEventListener("keydown",k=>{d&&((k.code==="Escape"||k.code==="KeyP"&&d==="pausa")&&p?E():k.code==="ArrowDown"?(k.preventDefault(),T(1)):k.code==="ArrowUp"?(k.preventDefault(),T(-1)):k.target.tagName!=="INPUT"&&/^(Digit|Numpad)[1-6]$/.test(k.code)&&c.querySelectorAll("[data-a=opcion],[data-a=frase]")[Number(k.code.slice(-1))-1]?.click())});function C(k,ue,{codigo:_e,enlace:Me,conectado:V,pares:H}){let ce=k.jugadores[ue]?.rol,pe=k.fase==="trabajo",fe=c.querySelector("[name=nombre]")?.value??_,N=Object.entries(Mt).map(([oe,me])=>{let be=Fn(k,oe),ve=be&&be!==ue;return`<button class="mu-op${be===ue?" elegido":""}" data-a="rol" data-v="${oe}"${ve||!V?" disabled":""}>${me.icono} <b>${ct(me.nombre)}</b> \xB7 ${be===ue?"T\xFA":ve?ct(k.jugadores[be].nombre):"compa\xF1ero autom\xE1tico"}<small>${ct(me.resumen)}</small></button>`}).join("");v("sala",`
      <h1>Cuadrilla Segura \xB7 Mundo</h1>
      <p><small>Orden de trabajo: asegurar la escalera al poste y subir \xB7 Calle 50 Luisa, Sabana Norte. Contenido en revisi\xF3n por Salud Ocupacional.</small></p>
      <div class="mu-fila"><label>Tu nombre<input name="nombre" maxlength="16" autocomplete="off" value="${ct(fe)}" placeholder="Como te ver\xE1n los dem\xE1s"></label>
        <div>Sala <b>${ct(_e)}</b> \xB7 ${V?`${H+1} en l\xEDnea`:"conectando\u2026"}<br><button class="mu-op" data-a="copiar" data-v="${ct(Me)}" style="margin:4px 0 0;min-height:36px;padding:6px 10px">Copiar enlace para invitar</button></div></div>
      <h2>${pe?"Trabajo en curso: elige un rol libre":"Elige tu rol"}</h2>${N}
      ${pe?"":`<h2>Dificultad</h2><div class="mu-fila">
        <button class="mu-op${k.modo==="aprendiz"?" elegido":""}" data-a="modo" data-v="aprendiz"${ce?"":" disabled"}><b>Aprendiz</b><small>Con pistas; el juego no deja saltarse el orden.</small></button>
        <button class="mu-op${k.modo==="tecnico"?" elegido":""}" data-a="modo" data-v="tecnico"${ce?"":" disabled"}><b>T\xE9cnico</b><small>Sin pistas; saltarse un paso es una falta.</small></button></div>
      <button class="mu-op mu-pri" data-a="empezar"${ce?"":" disabled"}>${ce?"Empezar el trabajo":"Elige un rol para empezar"}</button>`}
      <h2>Unirse a otra sala</h2><div class="mu-fila"><input name="codigo" maxlength="12" autocomplete="off" placeholder="C\xF3digo de sala"><button class="mu-op" data-a="unirse" style="margin:0">Unirse</button></div>`)}function R(k,ue,_e=[]){h?.id!==k.id&&(f=null),h=k,x=_e;let Me=ec(k).map((V,H)=>`<button class="mu-op${_e.includes(V)?" mal":""}" data-a="opcion" data-v="${V}"${_e.includes(V)?" disabled":""}>${zf[H]}. ${ct(k.opciones[V])}</button>`).join("");v("decision",`<h2>${ct(Mt[k.rol].nombre)} \xB7 ${ct(k.nombre)}</h2><h1>${ct(k.pregunta)}</h1>${Me}
      ${_e.length?`<div class="mu-nota"><b>No es as\xED.</b> ${ct(k.porque)}<br><small>${ct(k.ref)}</small></div>`:ue.modo==="aprendiz"?`<div class="mu-pista"><small>Pista: ${ct(k.ref)}</small></div>`:""}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Volver</button>`,{cancela:!0})}function I(k,ue){d!=="decision"||h?.id!==k.paso||(f!==null&&!x.includes(f)&&x.push(f),R(h,ue,x))}function U(){v("radio",`<h2>Radio</h2>${ms.map((k,ue)=>`<button class="mu-op" data-a="frase" data-v="${ue}">${zf[ue]}. ${ct(k)}</button>`).join("")}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>`,{cancela:!0})}function L(k){v("mapa",'<h2>Costa Rica \xB7 escala 1:60 \xB7 \u25B2 t\xFA \xB7 \u25CB pick-up y cuadrilla</h2><canvas></canvas><button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>',{cancela:!0}),k(c.querySelector("canvas"))}function B(k){let ue=ir(k),_e=Ef(k),Me=Object.entries(Mt).map(([V,H])=>{let ce=Fn(k,V),pe=k.eventos.filter(fe=>fe.tipo==="falta"&&fe.rol===V);return`<tr><td>${H.icono} <b>${ct(H.corto)}</b><br><small>${ce?ct(k.jugadores[ce].nombre):"autom\xE1tico"}</small></td><td><b>${_e[V]}</b></td>
        <td>${pe.length?pe.map(fe=>`${ct(fe.texto)}<br><small>${ct(fe.ref)}</small>`).join("<br>"):"<small>Sin faltas</small>"}</td></tr>`}).join("");v("fin",`<h1>Trabajo terminado ${"\u2605".repeat(su(k))}${"\u2606".repeat(3-su(k))}</h1>
      <p>Seguridad de la cuadrilla: <b>${ue} de 100</b> \xB7 modo ${k.modo==="tecnico"?"T\xE9cnico":"Aprendiz"}. El liniero qued\xF3 asegurado con el carrito, la faja de posicionamiento y la l\xEDnea de vida.</p>
      <table class="mu-tabla">${Me}</table>
      <p><small>Contenido en revisi\xF3n por Salud Ocupacional. La forma de la faja en M es pr\xE1ctica de la cuadrilla.</small></p>
      <button class="mu-op mu-pri" data-a="reiniciar">Volver a la sala</button>
      <button class="mu-op" data-a="cerrar" style="text-align:center">Seguir en el mundo</button>`,{cancela:!0})}function Z(k,ue,_e,Me,V,H=""){i.hidden=r.hidden=!1,i.innerHTML=`<span class="mu-seg">Seguridad ${ir(k)}</span><b>${ue?`${Mt[ue].icono} ${ct(Mt[ue].nombre)}`:"\u{1F440} Observando"}</b><div class="mu-tarea">${ct(_e)}</div>${H?`<div class="mu-lugar">\u{1F4CD} ${ct(H)}</div>`:""}`;let ce=sa.find(pe=>!k.hechos[pe.id]&&pe.fisico.every(fe=>k.hechos[fe])&&pe.antes.every(fe=>k.hechos[fe]))?.id;r.innerHTML=sa.map(pe=>`<li class="${k.hechos[pe.id]?"hecho":pe.id===ce?"ahora":""}${pe.rol===ue?" mio":""}">${k.hechos[pe.id]?"\u2713":pe.id===ce?"\u25B8":"\xB7"} ${ct(pe.nombre)} <small>(${ct(Mt[pe.rol].corto)})</small></li>`).join(""),s.hidden=!Me,s.textContent=Me??"",s.classList.toggle("gris",!!V)}function Q(){i.hidden=r.hidden=s.hidden=!0}function q(k,ue="",_e=4.5){let Me=document.createElement("div");for(Me.className=ue,Me.innerHTML=k,o.append(Me);o.children.length>4;)o.firstChild.remove();setTimeout(()=>Me.remove(),_e*1e3)}let J=[];function j(k){k.forEach((ue,_e)=>{let Me=J[_e]??=n("mu-etq");Me.hidden=!ue.visible,ue.visible&&(Me.textContent!==ue.texto&&(Me.textContent=ue.texto),Me.style.left=ue.x+"px",Me.style.top=ue.y+"px")});for(let ue=k.length;ue<J.length;ue++)J[ue].hidden=!0}function se(k){if(k.origen!==u&&(u=k.origen,g()),b.hidden=!!d,!d){let ue=Ss[u].mundo;b.textContent!==ue&&(b.textContent=ue);return}if(k.abajo&&T(1),k.arriba&&T(-1),k.accion&&k.origen==="control"){let ue=S()[m];ue?.tagName==="BUTTON"&&ue.click()}k.atras&&p&&E()}function Se(k,ue,_e){let Me=(ce,pe,fe)=>`<div class="mu-fila3"><span>${pe}</span><button class="mu-op" data-a="ajuste" data-v="${ce}:-1" aria-label="Bajar ${pe}">\u2212</button><b style="min-width:3.2em;text-align:center">${fe}</b><button class="mu-op" data-a="ajuste" data-v="${ce}:1" aria-label="Subir ${pe}">+</button></div>`,V=(ce,pe,fe)=>`<button class="mu-op${fe?" elegido":""}" data-a="ajuste" data-v="${ce}:0">${fe?"\u2611":"\u2610"} ${pe}</button>`,H=(ce,pe,fe)=>`<button class="mu-op" data-a="${ce}" data-v="${pe}">${fe}</button>`;v("pausa",`<h1>Pausa</h1><p><small>El juego sigue corriendo para tu cuadrilla.</small></p>
      ${H("cerrar","","\u25B6 Continuar")}${_e?.fase==="fin"?H("reporte","","\u{1F3C1} Ver el reporte del trabajo"):""}
      <h2>Sonido</h2>${Me("musica","M\xFAsica",Math.round(k.musica*10))}${Me("efectos","Efectos",Math.round(k.efectos*10))}
      <h2>Controles</h2>${Me("sensibilidad","Sensibilidad de la c\xE1mara",k.sensibilidad.toFixed(1))}${V("invertir","Invertir el eje vertical",k.invertir)}
      <p><small>${ct(Ss[u].todo)}</small></p>
      <h2>Imagen</h2>${Me("resolucion","Resoluci\xF3n","\xD7"+k.resolucion.toFixed(2))}${V("diag","Panel de medidas",k.diag)}
      <h2>Desarrollo</h2>${V("dev","Opciones de desarrollador",k.dev)}
      ${k.dev?`<p><small>Cambian el trabajo de toda la sala (las propone el anfitri\xF3n). \xDAsalas para probar y para reportar fallos.</small></p>
        ${H("dev","reporte","\u{1F4CB} Copiar reporte del estado (para enviar a Claude)")}
        ${H("dev","paso","\u23ED Completar el paso que toca")}${H("dev","todo","\u23E9 Terminar el trabajo")}${H("dev","reiniciar","\u21BA Reiniciar el trabajo")}
        ${Me("tiempo","Velocidad del tiempo","\xD7"+k.tiempo)}${V("volar","Volar (sin colisiones, m\xE1s r\xE1pido)",k.volar)}${V("colisiones","Mostrar colisiones",k.colisiones)}
        <h2>Ir a</h2><div class="mu-fila">${ue.map(([ce,pe])=>H("ir",ce,ct(pe))).join("")}</div>`:""}`,{cancela:!0})}return{pausa:Se,get origen(){return u},get abierto(){return d},get paso(){return h},get nombre(){return _},sala:C,decision:R,fallo:I,radio:U,mapa:L,fin:B,cerrar:E,tablero:Z,ocultarTablero:Q,avisar:q,etiquetas:j,navegar:se}}var rc=60/116/2,W_=.25,mu=a=>440*2**((a-69)/12),X_=[[48,52,55],[45,48,52],[41,45,48],[43,47,50]],Hf=[[72,0,76,79,0,76,74,72,69,0,72,76,0,74,72,69,65,0,69,72,0,74,72,69,67,71,74,0,79,77,74,71],[79,0,79,77,76,0,74,76,72,0,0,76,74,72,69,0,77,0,76,74,72,0,69,72,74,0,71,72,74,76,77,79],[76,76,0,79,0,76,72,0,81,0,79,76,72,0,76,0,77,0,81,0,79,77,76,72,74,0,79,0,77,76,74,71]];function kf(){let a=null,e=null,t=1,n=.5,i=0,r=0,s=null,o=null;function l(){if(Nf(),!a)try{a=new(window.AudioContext||window.webkitAudioContext),e=a.createGain(),e.gain.value=n*.22,e.connect(a.destination),s=a.createOscillator(),s.type="sawtooth",s.frequency.value=40;let u=a.createBiquadFilter();u.type="lowpass",u.frequency.value=420,o=a.createGain(),o.gain.value=0,s.connect(u).connect(o).connect(a.destination),s.start()}catch{a=null;return}a.state!=="running"&&a.resume?.().catch?.(()=>{})}for(let u of["pointerdown","keydown","touchend"])addEventListener(u,l,{passive:!0});let c=new Map;function d(u){if(!c.has(u)){let S=new Float32Array(16),v=new Float32Array(16);for(let E=1;E<16;E++)S[E]=2/(E*Math.PI)*Math.sin(E*Math.PI*u);c.set(u,a.createPeriodicWave(S,v))}return c.get(u)}function p(u,b,S,v,E,M){let T=a.createOscillator(),g=a.createGain();u==="pulso"?T.setPeriodicWave(d(M)):T.type=u,T.frequency.value=b,g.gain.setValueAtTime(E,S),g.gain.exponentialRampToValueAtTime(5e-4,S+v),T.connect(g).connect(e),T.start(S),T.stop(S+v+.02)}function h(u){let b=a.createOscillator(),S=a.createGain();b.frequency.setValueAtTime(140,u),b.frequency.exponentialRampToValueAtTime(45,u+.12),S.gain.setValueAtTime(.9,u),S.gain.exponentialRampToValueAtTime(.001,u+.14),b.connect(S).connect(e),b.start(u),b.stop(u+.16)}let f=null;function x(u,b){f??=(()=>{let M=a.createBuffer(1,a.sampleRate*.06,a.sampleRate),T=M.getChannelData(0);for(let g=0;g<T.length;g++)T[g]=Math.random()*2-1;return M})();let S=a.createBufferSource(),v=a.createBiquadFilter(),E=a.createGain();S.buffer=f,v.type="highpass",v.frequency.value=6e3,E.gain.setValueAtTime(b,u),E.gain.exponentialRampToValueAtTime(.001,u+.05),S.connect(v).connect(E).connect(e),S.start(u)}function _(u,b){let S=Math.floor(u/32)%Hf.length,v=u%32,E=X_[Math.floor(v/8)],M=Hf[S][v];M&&p("pulso",mu(M),b,rc*1.6,.22,.25),v%2===0&&p("triangle",mu(E[0]-12),b,rc*1.8,.5),p("pulso",mu(E[v%3]+12),b,rc*.5,.05,.125),v%4===0&&h(b),x(b,v%2?.05:.1)}function m(u=null){if(!a||a.state!=="running")return;if(i<a.currentTime&&(i=a.currentTime+.05),n>0)for(;i<a.currentTime+W_;)_(r++,i),i+=rc;else i=a.currentTime;let b=Math.abs(u??0),S=a.currentTime;s.frequency.setTargetAtTime(38+b*3.2,S,.15),o.gain.setTargetAtTime(u===null?0:(.05+Math.min(.08,b*.004))*t,S,.2)}return{desbloquear:l,cada:m,get activo(){return a?.state==="running"},volumen(u,b){n=u,t=b,Ff(b),e&&e.gain.setTargetAtTime(u*.22,a.currentTime,.1)},atenuar(u){e&&e.gain.setTargetAtTime(n*(u?.08:.22),a.currentTime,.3)}}}var Vf={musica:.5,efectos:.8,sensibilidad:1,invertir:!1,resolucion:0,diag:!1,dev:!1,tiempo:1,volar:!1,colisiones:!1},Et=(()=>{try{return{...Vf,...JSON.parse(localStorage["mundo:ajustes"]??"{}"),tiempo:1,volar:!1,colisiones:!1}}catch{return{...Vf}}})(),Y_=()=>{try{localStorage["mundo:ajustes"]=JSON.stringify(Et)}catch{}};Gl.variante="nuevo";var qn=new URLSearchParams(location.search),Ya=Np(),yu=qn.has("demo"),Kf=(a,e)=>Number.isFinite(parseInt(qn.get(a)))?parseInt(qn.get(a)):e,sc=(...a)=>a.every(Number.isFinite),Qf=new Int16Array(await(await fetch(new URL(Fp,import.meta.url))).arrayBuffer()),fn=new Ul({antialias:Ya.antialias,powerPreference:"high-performance"}),wa=Ya.pixelRatio;fn.setPixelRatio(wa);fn.setSize(innerWidth,innerHeight);fn.toneMapping=Zr;fn.toneMappingExposure=1.05;fn.shadowMap.enabled=!0;fn.shadowMap.autoUpdate=!1;document.body.append(fn.domElement);var da=new Ir;da.background=new We(10997738);da.fog=new Pr(11850728,220,4200);var pn=new Jt(62,innerWidth/innerHeight,.2,7e3);da.add(new qr(14084607,7043669,1.15));var ca=new Xr(16773590,2.7),J_=new F(.45,.78,.32).normalize();ca.castShadow=!0;ca.shadow.mapSize.setScalar(Ya.sombra);Object.assign(ca.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:260});ca.shadow.bias=-6e-4;ca.shadow.normalBias=.04;da.add(ca,ca.target);addEventListener("resize",()=>{pn.aspect=innerWidth/innerHeight,pn.updateProjectionMatrix(),fn.setSize(innerWidth,innerHeight)});var en=Up(Gd.eje),Dt=Gp(Gd,en),pr=Object.entries(hs).map(([a,e])=>{let[t,n]=kd(Ki,e.lat,e.lon);return{k:a,n:e.n,x:t,z:n,r:e.r}}),fi=Object.fromEntries(pr.map(a=>[a.k,a])),An=kp(Qf,Ki,en,pr.filter(a=>a.r>0),Xp.map(a=>({...a,x:fi[a.k].x,z:fi[a.k].z}))),oc=a=>{let e=en.en(en.largo,a);return[e.x,e.z]},ua=Vp(Wp.map(a=>({n:a.n,y0:a.p[0][0]==="@"?0:void 0,puntos:a.p.flatMap(e=>e==="@oeste"?[oc(-Dt.BORDE),oc(-Dt.BORDE-60)]:e==="@este"?[oc(Dt.BORDE),oc(Dt.BORDE+60)]:[typeof e=="string"?[fi[e].x,fi[e].z]:kd(Ki,e[0],e[1])])})),An.alturaBase,An.MAR,pr.filter(a=>a.r>0)),em=jp(ua),tm=$p(An,ua,Ki),Z_=Yp(Qf,Ki,ua),ws=Zp(pr,An,ua),nm=Qp(ua);An.listo(ua,(a,e)=>{em.rehacer(a,e,420),tm.rehacer(a,e),ws.actualizar(a,e)});var lc={},am=(a,e)=>Math.abs(a)<320&&Math.abs(e)<360&&(en.aVia(a,e,lc),Math.abs(lc.a)<=Dt.BORDE&&lc.d>=Dt.D0&&lc.d<=Dt.D1),Ja=(a,e)=>am(a,e)?Dt.altura(a,e):Math.max(An.altura(a,e),An.MAR-1),Cs=nf(en,Dt,Kf("autos",20)),Su=Op(en,Dt.cajas,Dt.circulos,{d0:-1e9,d1:1e9,a:1e9}),Qt=hf(da,Ja),As=pf(96),jt=Cf({via:en,barrio:Dt}),Ke=qp(Ja,Dt.estacionado);da.add(An.grupo,em.malla,tm.grupo,ws.grupo,nm,Dt.grupo,Cs.grupo,As.malla,jt.grupo,Ke.grupo);var jf=[11879996,3960757,5216859,9068464,13666862,4869975],K_=Array.from({length:Kf("gente",5)},(a,e)=>({id:"p"+e,d:30+e*83%(en.largo-60),a:e%2?4.4:-4.3,s:e%2?1:-1,v:1.15+e%3*.15,op:{camisa:jf[e%jf.length],uniforme:!1}})),gu={},Ft=new F,Mu={dist:0},Eu=a=>({camisa:Mt[a].camisa,uniforme:!0,arnes:a==="liniero"}),la=null;function Au(a){la&&da.remove(la.raiz),la=Zd(a?{camisa:Mt[a].camisa}:{}),la.equipar("casco"),a==="liniero"&&la.equipar("arnes"),da.add(la.raiz)}Au(null);var $f=en.en(Dt.inicio.d,Dt.inicio.a),ae={x:$f.x,z:$f.z,y:.15,vx:0,vz:0,rumbo:Math.PI,fase:0,guinada:Math.PI,cabeceo:-.12,dist:4.2,primera:!1,d:0,a:0},mc=mf(),hc=ff(fn.domElement,mc),im=gf(mc,qn.has("diag")||Et.diag);qn.has("dev")&&(Et.dev=!0);var pc=kf(),rm=Object.assign(document.createElement("div"),{className:"mu-chip",textContent:"\u{1F507} Toca la pantalla o pulsa una tecla para activar el sonido"});mc.append(rm);Et.resolucion||(Et.resolucion=wa);function sm(){pc.volumen(Et.musica,Et.efectos),hc.mirada.sensibilidad=Et.sensibilidad,hc.mirada.invertir=Et.invertir,wa=Et.resolucion,fn.setPixelRatio(wa),im.mostrar(Et.diag||qn.has("diag")),dm.visible=Et.colisiones}var on=(()=>{try{return localStorage["mundo:id"]??=Math.random().toString(36).slice(2,10)}catch{return Math.random().toString(36).slice(2,10)}})(),hr=(qn.get("sala")||"").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,12);hr||(hr=Array.from({length:4},()=>"abcdefghjkmnpqrstuvwxyz"[Math.floor(Math.random()*23)]).join(""),qn.set("sala",hr),history.replaceState(null,"","?"+qn));var Q_=`${location.origin}${location.pathname}?sala=${hr}`,Ts=null,Tu=qn.has("sinred"),qf=0,Za=()=>$e.E.jugadores[on]?.rol??null,st=Gf(mc,{nombre:a=>{let e=$e.E.jugadores[on];e&&e.nombre!==(a||"Jugador")&&$e.proponer({t:"entra",nombre:a})},rol:a=>{let e=$e.E.jugadores[on];Ts=e?.rol===a?null:a,e||$e.proponer({t:"entra",nombre:st.nombre}),$e.proponer({t:"rol",rol:Ts})},modo:a=>$e.proponer({t:"modo",modo:a}),empezar:()=>$e.proponer({t:"empezar"}),unirse:a=>{location.search="?sala="+encodeURIComponent(a.toLowerCase())},intento:(a,e)=>$e.proponer({t:"intento",paso:a,opcion:e}),reiniciar:()=>$e.proponer({t:"reiniciar"}),ajuste:(a,e)=>{let t={musica:[0,1,.1],efectos:[0,1,.1],sensibilidad:[.3,3,.1],resolucion:[.5,2,.25],tiempo:[1,8,0]};if(a==="tiempo")Et.tiempo=e>0?Math.min(8,Et.tiempo*2):Math.max(1,Et.tiempo/2);else if(t[a]){let[n,i,r]=t[a];Et[a]=Math.round(Math.max(n,Math.min(i,Et[a]+e*r))*100)/100}else a in Et&&(Et[a]=!Et[a]);Y_(),sm(),st.pausa(Et,Ru,$e.E),Nt.clic()},dev:(a,e)=>{if(a==="reporte"){let t=JSON.stringify({fecha:new Date().toISOString(),info:(({texto:n,...i})=>i)(Pu()),estado:$e.E,huella:$e.huella,eventos:$e.E.n,entrada:Xa,navegador:navigator.userAgent,pantalla:[innerWidth,innerHeight,devicePixelRatio]},null,1);navigator.clipboard?.writeText(t).then(()=>{e.textContent="\u{1F4CB} Reporte copiado \u2713 (p\xE9galo en el chat)"},()=>{console.log(t),e.textContent="\u{1F4CB} No se pudo copiar: est\xE1 en la consola"});return}if(!$e.anfitrion()){st.avisar("Solo el anfitri\xF3n de la sala puede cambiar el trabajo","falta");return}if(a==="reiniciar")$e.proponer({t:"reiniciar",dev:!0});else if($e.E.fase==="trabajo")for(let t=0;t<(a==="todo"?40:1)&&$e.E.fase==="trabajo";t++){let n=ru($e.E);if(!n)break;$e.proponer(n.auto?{t:"auto",paso:n.id}:{t:"intento",paso:n.id,opcion:0,dev:!0})}st.cerrar()},reporte:()=>st.fin($e.E),ir:a=>{let e=a==="poste"?jt.zonas.poste:a==="pickup"?Ke.local(2.2,0,0,new F):fi[a];e&&(ae.x=e.x+(fi[a]?12:0),ae.z=e.z,ae.vx=ae.vz=0)},radio:a=>{sn?.fiable({t:"radio",i:a}),om(a,on)}});function ey(a,e){Number.isInteger(a.n)&&$e.latido(a.n,a.h,e);let t=$e.E,n=t.jugadores[e]?.rol;if(n?sc(a.x,a.z,a.r)&&Math.abs(a.x)<5e3&&Math.abs(a.z)<5e3&&Qt.fijar("j:"+e,a.x,a.z,a.r,Eu(n),sc(a.y)?Math.max(-80,Math.min(300,a.y)):void 0,a.o):Qt.quitar("j:"+e),Array.isArray(a.c)&&e===t.pickup.chofer&&sc(...a.c.slice(0,4))&&Math.abs(a.c[0])<5e3&&Math.abs(a.c[1])<5e3&&Ke.remoto(a.c[0],a.c[1],a.c[2],a.c[3]),Array.isArray(a.b)&&e===$e.idAnfitrion())for(let i of a.b.slice(0,8))Array.isArray(i)&&Object.hasOwn(Mt,i[0])&&sc(i[1],i[2],i[3],i[4])&&!Fn(t,i[0])&&Qt.fijar("b:"+i[0],i[1],i[2],i[4],Eu(i[0]),Math.max(-80,Math.min(300,i[3])),i[5])}function om(a,e){let t=$e.E.jugadores[e];!t||!ms[a]||(Nt.alerta(),st.avisar(`\u{1F4FB} <b>${ct(t.rol?Mt[t.rol].corto:"Sin rol")}</b> (${ct(t.nombre)}): ${ct(ms[a])}`,"radio"))}var sn=qn.has("sinred")?null:vf({sala:hr,id:on,alMensaje:(a,e)=>{a?.t==="p"?ey(a,e):a?.t==="radio"?om(a.i,e):$e.recibir(a,e)},alPar:(a,e)=>{e?$e.pedir():(Qt.quitar("j:"+a),$e.anfitrion()&&$e.proponer({t:"sale",id:a}))}}),$e=Af({id:on,red:sn,alEvento:ty}),ur=Pf({sesion:$e,obra:jt,resolver:Su,altura:Ja});function Wf(){let a=Za();if(!a)return;let e=jt.puesto(a,$e.E.hechos.llegada?"poste":"pickup");ae.x=e.x,ae.z=e.z,ae.vx=ae.vz=0}function Cu(){let a=$e.E;yu||(a.fase!=="fin"&&st.abierto==="fin"&&st.cerrar(),a.fase==="sala"||a.fase==="trabajo"&&!Za()?(!st.abierto||st.abierto==="sala")&&st.sala(a,on,{codigo:hr,enlace:Q_,conectado:Tu,pares:sn?.estado.pares.size??0}):st.abierto==="sala"&&st.cerrar())}function ty(a,e){if(a)if(a.t==="rol")a.id===on?(Au(a.rol),a.rol&&e.fase==="trabajo"&&Wf()):Qt.quitar("j:"+a.id),a.rol&&Qt.quitar("b:"+a.rol);else if(a.t==="sale")Qt.quitar("j:"+a.id);else if(a.t==="empezar")st.cerrar(),Wf();else if(a.t==="baja"&&a.id===on||a.t==="aparca"&&dc>=0){let[t,,n]=fc[dc]??fc[0];Ke.local(Math.sign(t)*1.75,0,n,Ft),ae.x=Ft.x,ae.z=Ft.z,dc=-1}else a.t==="hecho"?(st.avisar(`\u2713 <b>${ct(Mt[a.rol]?.corto)}</b>: ${ct(Ea[a.paso]?.nombre)}`),(ay[a.paso]??Nt.ok)(),e.fase==="fin"&&(setTimeout(Nt.logro,600),Za()==="liniero"&&(ae.x=jt.zonas.poste.x,ae.z=jt.zonas.poste.z,ae.y=Ja(ae.x,ae.z))),st.paso?.id===a.paso&&st.cerrar()):a.t==="falta"&&(Nt.error(),st.avisar(`\u26A0 <b>${ct(Mt[a.rol]?.corto)}</b>: ${ct(a.texto)}<small>${ct(a.ref)}</small>`,"falta",9),st.fallo(a,e));else{for(let t of[...Qt.mapa.keys()])/^[jb]:/.test(t)&&Qt.quitar(t);Ts&&e.jugadores[on]?.rol!==Ts&&(e.jugadores[on]||$e.proponer({t:"entra",nombre:st.nombre}),$e.proponer({t:"rol",rol:Ts})),Au(Za())}Cu()}var Xf=new Yr,Ms=new F(1e9,0,0),cr=[],Es=new Proxy({},{get:(a,e)=>Ss[e]?.accion??"E"}),ny={pickup:"el pick-up",poste:"el poste"},ay={perimetro:Nt.cono,cuerda_extension:Nt.cuerda,tensar:Nt.cuerda,amarre_medio:Nt.cuerda,colocar:Nt.metal,tomar:Nt.metal,carrito:Nt.clip,faja:Nt.clip,linea_vida:Nt.clip,llegada:Nt.metal},Ru=[["pickup","El pick-up"],["poste","El poste de trabajo"],...["cartago","limon","liberia","fortuna","puntarenas","sanisidro","penasblancas","canoas"].map(a=>[a,hs[a].n.split(" \xB7 ")[0]])],Yf=0,dc=-1,fc=[[-.38,0,.62],[.38,0,-.2],[-.38,0,-.2]],cc=0,xu=0,bu=0,Jf=0,wu=0,lm=0,Xa="",Zf="",lr=-1,uc="",vu=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a)),iy=a=>{let e=Fn($e.E,a);return Qt.mapa.get(e?"j:"+e:"b:"+a)},dr=a=>a===Za()?ae:$e.anfitrion()&&ur.B.get(a)||iy(a),_u=a=>Math.hypot(ae.x-jt.zonas[a].x,ae.z-jt.zonas[a].z);function ry(){let a=pr[0],e=1/0;for(let n of pr){let i=Math.hypot(ae.x-n.x,ae.z-n.z);i<e&&(e=i,a=n)}return(ua.cerca(ae.x,ae.z,Mu).dist<9?ua.rutas[Mu.ruta].n+" \xB7 ":"")+(e<Math.max(90,a.r+40)?a.n:`${a.n} a ${e<1e3?Math.round(e/10)*10+" m":(e/1e3).toFixed(1).replace(".",",")+" km"}`)}function sy(a){let e=[{x:ae.x,z:ae.z,color:"#FFD627",rumbo:ae.rumbo},{x:Ke.st.x,z:Ke.st.z,color:"#fff"}];for(let t in Mt){let n=t!==Za()&&dr(t);n&&e.push({x:n.x,z:n.z,color:"#"+Mt[t].camisa.toString(16).padStart(6,"0")})}return e}An.cada(ae.x,ae.z,!0);document.getElementById("cargando")?.remove();function cm(){requestAnimationFrame(cm);let a=Math.min(.05,Xf.getDelta())*Et.tiempo,e=Xf.elapsedTime,t=performance.now(),n=hc.leer(a);Xa=n.origen,$e.cada();let i=$e.E,r=Za(),s=!!st.abierto,o=i.pickup,l=o.chofer===on,c=o.pasajeros.indexOf(on),d=l||c>=0;if(st.navegar(n),s?((n.mapa&&st.abierto==="mapa"||n.pausa&&st.abierto==="pausa")&&st.cerrar(),n.mx=n.mz=n.gx=n.gy=0,n.accion=n.vista=!1,i.fase==="sala"&&(ae.guinada+=a*.05)):n.pausa?st.pausa(Et,Ru,$e.E):n.radio&&i.fase==="trabajo"&&r?st.radio():n.mapa&&i.fase!=="sala"&&st.mapa(R=>Z_.dibujar(R,sy(i))),l){let R=am(Ke.st.x,Ke.st.z)||ua.cerca(Ke.st.x,Ke.st.z,Mu).dist<5;Ke.conducir(a,n,R,An.limites),Su(Ke.st,1.3),ws.empujar(Ke.st,1.4)}else o.chofer?Ke.seguir(a):o.x===null?Ke.fijar(Dt.estacionado.x,Dt.estacionado.z,Dt.estacionado.rumbo):Ke.fijar(o.x,o.z,o.r);Ke.asentar(),n.vista&&(ae.primera=!ae.primera),ae.guinada-=n.gx,ae.cabeceo=Math.max(ae.primera?-1.3:-1.05,Math.min(ae.primera?1.3:.55,ae.cabeceo+n.gy)),l&&!n.gx&&Math.abs(Ke.st.v)>.5&&(ae.guinada+=vu(ae.guinada,Ke.st.rumbo+Math.PI)*Math.min(1,a*2.5));let p=Math.sin(ae.guinada),h=Math.cos(ae.guinada),f=n.correr?3.9:1.7,x=1-Math.exp(-a*10),_=jt.cargando(i)&&/^auxiliar/.test(r??""),m=_?"c":"i",u=0;if(d)Ke.local(...l?[0,0,0]:fc[c],Ft),ae.x=Ft.x,ae.z=Ft.z,ae.y=Ke.st.y,ae.vx=ae.vz=0,ae.rumbo=Ke.st.rumbo,m="o",!l&&Math.abs(Ke.st.v)>.5&&!n.gx&&(ae.guinada+=vu(ae.guinada,Ke.st.rumbo+Math.PI)*Math.min(1,a*2.5)),dc=l?-1:c;else if(r==="liniero"&&i.hechos.subir&&i.fase==="trabajo"){let R=jt.puestoLiniero();ae.x=R.x,ae.z=R.z,ae.y=R.y,ae.vx=ae.vz=0,ae.rumbo=jt.rumbo,ae.fase=R.fase,m=R.pose}else{let R=_?Math.min(f,1.7):Et.volar?f*6:f,I=An.limites;ae.vx+=((h*n.mx-p*n.mz)*R-ae.vx)*x,ae.vz+=((-p*n.mx-h*n.mz)*R-ae.vz)*x,ae.x=Math.max(I.x0,Math.min(I.x1,ae.x+ae.vx*a)),ae.z=Math.max(I.z0,Math.min(I.z1,ae.z+ae.vz*a)),Et.volar||(Su(ae,.32),Ke.empujar(ae,.32),ws.empujar(ae,.32)),jt.restringir(i,r,ae,dr),ae.y+=(Ja(ae.x,ae.z)-ae.y)*Math.min(1,a*14),u=Math.hypot(ae.vx,ae.vz),ae.primera?ae.rumbo=Math.atan2(-p,-h):u>.3&&(ae.rumbo+=vu(ae.rumbo,Math.atan2(ae.vx,ae.vz))*Math.min(1,a*12)),ae.fase+=u*a*(n.correr?3.1:4.19),Math.floor(ae.fase/Math.PI)!==Yf&&(Yf=Math.floor(ae.fase/Math.PI),u>.4&&Nt.paso())}en.aVia(ae.x,ae.z,ae),la.raiz.position.set(ae.x,ae.y,ae.z),la.raiz.rotation.y=ae.rumbo,la.pose({tipo:Jd[m]??(u>.25?"caminar":"idle"),fase:ae.fase,t:e,dt:a}),ae.dist+=((ae.primera?0:d?8.5:4.2)-ae.dist)*Math.min(1,a*9);let b=Math.cos(ae.cabeceo),S=(d?0:.45)*Math.min(1,ae.dist);if(d){let[R,,I]=l?[.38,0,.62]:fc[c];Ke.local(ae.primera?R:0,ae.primera?1.42:2,ae.primera?I:0,Ft)}else Ft.set(ae.x,ae.y+1.62,ae.z);pn.rotation.set(ae.cabeceo,ae.guinada,0,"YXZ"),pn.position.set(Ft.x+p*b*ae.dist+h*S,Ft.y-Math.sin(ae.cabeceo)*ae.dist,Ft.z+h*b*ae.dist-p*S),pn.position.y=Math.max(pn.position.y,Ja(pn.position.x,pn.position.z)+.4),pn.updateMatrixWorld(),la.raiz.visible=ae.dist>.7&&!d,An.cada(ae.x,ae.z);for(let R of K_)R.d+=R.s*R.v*a,R.d>en.largo-8?R.s=-1:R.d<8&&(R.s=1),en.en(R.d,R.a,gu),Qt.fijar(R.id,gu.x,gu.z,void 0,R.op);ur.cada(a,i,dr);for(let R of ur.B.values())if($e.anfitrion())Qt.fijar("b:"+R.rol,R.x,R.z,R.rumbo,Eu(R.rol),R.y,R.pose);else{let I=Qt.mapa.get("b:"+R.rol);I&&(R.x=I.x,R.z=I.z,R.y=I.y,R.rumbo=I.rumbo)}Qt.cada(a,e,pn),cr.length=0,cr.push(ae);for(let R of Qt.mapa.values())en.aVia(R.x,R.z,R),cr.push(R);Cs.cada(a,cr),$e.anfitrion()&&jt.cargando(i)&&jt.llego(dr)&&$e.proponer({t:"auto",paso:"llegada"}),jt.cada(a,e,i,dr,Ke);let v="",E=null,M=!1,T=null;if(c>=0)v=`De pasajero \xB7 ${Math.round(Math.abs(Ke.st.v)*3.6)} km/h`,E=Math.abs(Ke.st.v)<2?`${Es[Xa]} \xB7 Bajar del pick-up`:null,n.accion&&E&&$e.proponer({t:"baja"});else if(l)v=`Al volante \xB7 ${Math.round(Math.abs(Ke.st.v)*3.6)} km/h`,E=Math.abs(Ke.st.v)<2?`${Es[Xa]??"E"} \xB7 Bajar del pick-up`:null,n.accion&&E&&($e.proponer({t:"aparca",x:+Ke.st.x.toFixed(2),z:+Ke.st.z.toFixed(2),r:+Ke.st.rumbo.toFixed(3)}),Ke.local(1.75,0,.5,Ft),ae.x=Ft.x,ae.z=Ft.z);else if(i.fase==="trabajo"&&r){let R=B=>B.lugar==="arriba"?r==="liniero"&&jt.subida>=1:_u(B.lugar)<4.2,I=ar(i,r),U=I.find(B=>!B.bloqueo),L=I.find(B=>!B.bloqueo&&R(B.paso))??I.find(B=>R(B.paso));if(_)v=`Lleva la escalera al poste con tu compa\xF1ero \xB7 ${Math.round(_u("poste"))} m`,T="poste";else if(U){let B=R(U.paso)||U.paso.lugar==="arriba";v=`Tu tarea: ${U.paso.nombre}${B?"":` \xB7 ${ny[U.paso.lugar]} est\xE1 a ${Math.round(_u(U.paso.lugar))} m`}`,T=B?null:U.paso.lugar}else{let B=ru(i);v=B?`Espera: ${Mt[B.rol].corto} \u2192 ${B.nombre}`:"Trabajo terminado"}L&&!s&&(L.bloqueo&&i.modo==="aprendiz"?(E=`\u{1F512} Antes: ${L.bloqueo.nombre} (${Mt[L.bloqueo.rol].corto})`,M=!0):E=`${Es[Xa]??"E"} \xB7 ${L.paso.accion}`,n.accion&&(M?st.avisar(`\u{1F512} Primero: <b>${ct(L.bloqueo.nombre)}</b> (${ct(Mt[L.bloqueo.rol].corto)})`,"",3):L.paso.opciones&&!L.bloqueo?st.decision(L.paso,i):$e.proponer({t:"intento",paso:L.paso.id})))}else i.fase==="trabajo"?v="Observando: los compa\xF1eros autom\xE1ticos hacen el trabajo":i.fase==="fin"&&(v="Trabajo terminado");!d&&!E&&!s&&r&&o.chofer&&o.pasajeros.length<3&&Math.hypot(ae.x-Ke.st.x,ae.z-Ke.st.z)<3.6&&Math.abs(Ke.st.v)<2&&(E=`${Es[Xa]} \xB7 Subir al pick-up`,n.accion&&$e.proponer({t:"sube"})),!d&&!E&&!s&&r&&(i.fase==="fin"||i.fase==="trabajo"&&i.hechos.tomar&&i.hechos.tomar2)&&!o.chofer&&!(r==="liniero"&&i.hechos.subir&&i.fase==="trabajo")&&!_&&Math.hypot(ae.x-Ke.st.x,ae.z-Ke.st.z)<3.6&&(E=`${Es[Xa]??"E"} \xB7 Manejar el pick-up`,n.accion&&$e.proponer({t:"conduce"})),jt.marcar(T);let g=`${i.n}|${v}|${E}|${r}|${uc}`;i.fase==="sala"?st.ocultarTablero():g!==Zf&&(Zf=g,st.tablero(i,r,v,E,M,uc)),i.fase==="fin"?(lr<0&&(lr=e),lr!==null&&e-lr>3.5&&!st.abierto&&!yu&&(st.fin(i),lr=null)):lr=-1;let A=[];if(i.fase!=="sala")for(let R in Mt){if(R===r)continue;let I=dr(R);if(!I)continue;Ft.set(I.x,(I.y??.15)+2.02,I.z);let U=Ft.distanceTo(pn.position);Ft.project(pn);let L=Fn(i,R);A.push({visible:!s&&Ft.z<1&&U<45&&Math.abs(Ft.x)<1.05&&!(L&&L===o.chofer),x:(Ft.x+1)/2*innerWidth,y:(1-Ft.y)/2*innerHeight,texto:`${Mt[R].icono} ${Mt[R].corto}${L?" \xB7 "+i.jugadores[L].nombre:""}`})}st.etiquetas(A),pc.cada(l||o.chofer?Ke.st.v:null),rm.hidden=pc.activo,l&&n.bocina&&Nt.bocina();let C=0;for(let R of cr)(R!==ae||!d)&&As.fijar(C++,R.x,Ja(R.x,R.z),R.z,.62);for(let R of Cs.todos)As.fijar(C++,R.x,0,R.z,2.3,4.9,R.rumbo);if(As.fijar(C++,Ke.st.x,Ke.st.y,Ke.st.z,2.4,5.6,Ke.st.rumbo),As.listo(C),Math.hypot(ae.x-Ms.x,ae.z-Ms.z)>14&&(Ms.set(ae.x,ae.y,ae.z),ca.target.position.copy(Ms),ca.position.copy(Ms).addScaledVector(J_,120),ca.target.updateMatrixWorld(),fn.shadowMap.needsUpdate=!0),sn&&e-Jf>.1){Jf=e;let R={t:"p",x:+ae.x.toFixed(2),z:+ae.z.toFixed(2),y:+ae.y.toFixed(2),r:+ae.rumbo.toFixed(2),o:m};l&&(R.c=[+Ke.st.x.toFixed(2),+Ke.st.z.toFixed(2),+Ke.st.rumbo.toFixed(3),+Ke.st.v.toFixed(1)]),$e.anfitrion()&&(R.n=i.n,R.h=$e.huella,ur.B.size&&(R.b=[...ur.B.values()].map(I=>[I.rol,+I.x.toFixed(2),+I.z.toFixed(2),+I.y.toFixed(2),+I.rumbo.toFixed(2),I.pose]))),(r||$e.anfitrion())&&sn.enviar(R)}if(fn.render(da,pn),xu+=performance.now()-t,cc++,e-bu>=1){wu=cc/(e-bu),lm=xu/cc,cc=0,xu=0,bu=e,wu<27&&wa>Ya.minPixelRatio&&(wa=Math.max(Ya.minPixelRatio,wa-.15),fn.setPixelRatio(wa)),uc=ry(),im.escribir(Pu().texto),sn&&!sn.estado.presencia&&e>6&&$e.jugarSolo();let R=!sn||sn.estado.presencia||e>6,I=sn?.estado.pares.size??0;(R!==Tu||I!==qf)&&(Tu=R,qf=I,Cu()),yu&&i.fase==="sala"&&$e.anfitrion()&&$e.proponer({t:"empezar",demo:!0})}}function Pu(){let a=fn.info.render,e=sn?[...sn.estado.pares.values()]:[],t=e.filter(r=>r.directo),n=$e.E,i={fps:Math.round(wu),ms:+lm.toFixed(1),llamadas:a.calls,triangulos:a.triangles,pixeles:+wa.toFixed(2),entrada:Xa,vista:ae.primera?"1.\xAA persona":"3.\xAA persona",x:ae.x,z:ae.z,y:ae.y,d:ae.d,a:ae.a,donde:uc,red:sn?.estado.ws??"apagada",rtt:sn?.estado.rtt,pares:e.length,directos:t.length,personas:cr.length,autos:Cs.todos.length,fase:n.fase,rol:Za(),hechos:Object.keys(n.hechos).length,pasos:sa.length,seguridad:ir(n),faltas:n.eventos.filter(r=>r.tipo==="falta").length,anfitrion:$e.anfitrion(),panel:st.abierto,chofer:n.pickup.chofer===on,pasajero:n.pickup.pasajeros.includes(on),velocidad:Ke.st.v};return i.texto=["Cuadrilla Segura \xB7 Mundo",`${i.fps} cuadros/s \xB7 ${i.ms} ms por cuadro (CPU)`,`${i.llamadas} llamadas de dibujo \xB7 ${Math.round(i.triangulos/1e3)} mil tri\xE1ngulos`,`resoluci\xF3n \xD7${i.pixeles} \xB7 sombra ${Ya.sombra} \xB7 ${Ya.movil?Ya.bajo?"tel\xE9fono modesto":"tel\xE9fono":"escritorio"}`,`${i.personas} personas \xB7 ${i.autos} autos \xB7 ${i.vista} \xB7 ${i.entrada}`,`red: ${i.red}${i.rtt!=null?` \xB7 ida y vuelta ${Math.round(i.rtt)} ms`:""}${i.anfitrion?" \xB7 anfitri\xF3n":""}`,`otros jugadores: ${i.pares}${i.pares?` (${i.directos} con enlace directo${t[0]?.rtt!=null?`, ${Math.round(t[0].rtt)} ms`:""})`:""}`,`trabajo: ${i.fase} \xB7 ${i.hechos}/${i.pasos} pasos \xB7 seguridad ${i.seguridad}`,`\u{1F4CD} ${i.donde} \xB7 ${Math.round(i.x)}, ${Math.round(i.z)} \xB7 altura ${i.y.toFixed(1)} m`].join(`
`),i}var dm=(()=>{let a=[],e={},t=(r,s)=>(en.en(r,s,e),[e.x,.3,e.z]);for(let r of Dt.cajas){let s=[t(r.d0,r.a0),t(r.d1,r.a0),t(r.d1,r.a1),t(r.d0,r.a1)];for(let o=0;o<4;o++)a.push(...s[o],...s[(o+1)%4])}for(let r of Dt.circulos)for(let s=0;s<8;s++){let o=s*Math.PI/4,l=o+Math.PI/4;a.push(r.x+Math.cos(o)*r.r,.3,r.z+Math.sin(o)*r.r,r.x+Math.cos(l)*r.r,.3,r.z+Math.sin(l)*r.r)}let n=new ht;n.setAttribute("position",new tt(a,3));let i=new ya(n,new ta({color:16723285,depthTest:!1}));return i.renderOrder=9,i.visible=!1,da.add(i),i})();sm();document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&!st.abierto&&$e.E.fase!=="sala"&&st.pausa(Et,Ru,$e.E)});globalThis.__mundo={J:ae,info:Pu,ajustes:Et,sonido:pc,colisiones:dm,pueblos:ws,rotulos:nm,pendientes:ar,ordenOpciones:ec,red:sn,avatares:Qt,entrada:hc,via:en,barrio:Dt,trafico:Cs,obra:jt,bots:ur,ui:st,terreno:An,carreteras:ua,pickup:Ke,lugar:fi,altura:Ja,camara:pn,CARRIL:jl,get sesion(){return $e},get E(){return $e.E}};Cu();cm();
