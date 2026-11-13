var dh=0,Wc=1,uh=2;var Wr=1,hh=2,Hi=3,za=0,nn=1,An=2,ta=0,Vi=1,Xc=2,Yc=3,Jc=4,ph=5;var ti=100,fh=101,mh=102,gh=103,xh=104,vh=200,bh=201,_h=202,yh=203,Zc=204,Kc=205,Sh=206,Mh=207,Eh=208,Ah=209,Th=210,wh=211,Ch=212,Rh=213,Ph=214,Js=0,Zs=1,Ks=2,Ri=3,Qs=4,eo=5,to=6,no=7,Qc=0,Ih=1,Dh=2,zn=0,ed=1,td=2,nd=3,Xr=4,ad=5,id=6,rd=7;var sd=300,Ga=301,ni=302,Bo=303,zo=304,Yr=306,Pi=1e3,Xn=1001,ao=1002,Ht=1003,Lh=1004;var Jr=1005;var Vt=1006,Go=1007;var Ha=1008;var dn=1009,od=1010,ld=1011,ki=1012,Ho=1013,Gn=1014,Tn=1015,Hn=1016,Vo=1017,ko=1018,ji=1020,cd=35902,dd=35899,ud=1021,hd=1022,wn=1023,Yn=1026,Va=1027,jo=1028,$o=1029,ka=1030,qo=1031;var Wo=1033,Zr=33776,Kr=33777,Qr=33778,es=33779,Xo=35840,Yo=35841,Jo=35842,Zo=35843,Ko=36196,Qo=37492,el=37496,tl=37488,nl=37489,ts=37490,al=37491,il=37808,rl=37809,sl=37810,ol=37811,ll=37812,cl=37813,dl=37814,ul=37815,hl=37816,pl=37817,fl=37818,ml=37819,gl=37820,xl=37821,vl=36492,bl=36494,_l=36495,yl=36283,Sl=36284,ns=36285,Ml=36286;var yr=2300,io=2301,Xs=2302,Gc=2303,Hc=2400,Vc=2401,kc=2402;var Nh=3200;var El=0,Fh=1,ba="",Wt="srgb",Sr="srgb-linear",Mr="linear",xt="srgb";var Ys=7680;var Uh=519,Oh=512,Bh=513,zh=514,Al=515,Gh=516,Hh=517,Tl=518,Vh=519,kh=35044;var pd="300 es",On=2e3,Ii=2001;function om(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function lm(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Er(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function jh(){let a=Er("canvas");return a.style.display="block",a}var Nu={},Di=null;function fd(...a){let e="THREE."+a.shift();Di?Di("log",e,...a):console.log(e,...a)}function $h(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Ye(...a){a=$h(a);let e="THREE."+a.shift();if(Di)Di("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Qe(...a){a=$h(a);let e="THREE."+a.shift();if(Di)Di("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Ka(...a){let e=a.join(" ");e in Nu||(Nu[e]=!0,Ye(...a))}function qh(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wh={[Js]:Zs,[Ks]:to,[Qs]:no,[Ri]:eo,[Zs]:Js,[to]:Ks,[no]:Qs,[eo]:Ri},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pc=Math.PI/180,ro=180/Math.PI;function as(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[a&255]+$t[a>>8&255]+$t[a>>16&255]+$t[a>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function lt(a,e,t){return Math.max(e,Math.min(t,a))}function cm(a,e){return(a%e+e)%e}function fc(a,e,t){return(1-t)*a+t*e}function ur(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var je=class a{static{a.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],d=n[i+2],p=n[i+3],h=r[s+0],f=r[s+1],x=r[s+2],b=r[s+3];if(p!==b||l!==h||c!==f||d!==x){let m=l*h+c*f+d*x+p*b;m<0&&(h=-h,f=-f,x=-x,b=-b,m=-m);let u=1-o;if(m<.9995){let v=Math.acos(m),A=Math.sin(v);u=Math.sin(u*v)/A,o=Math.sin(o*v)/A,l=l*u+h*o,c=c*u+f*o,d=d*u+x*o,p=p*u+b*o}else{l=l*u+h*o,c=c*u+f*o,d=d*u+x*o,p=p*u+b*o;let v=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=v,c*=v,d*=v,p*=v}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,s){let o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],p=r[s],h=r[s+1],f=r[s+2],x=r[s+3];return e[t]=o*x+d*p+l*f-c*h,e[t+1]=l*x+d*h+c*p-o*f,e[t+2]=c*x+d*f+o*h-l*p,e[t+3]=d*x-o*p-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),p=o(r/2),h=l(n/2),f=l(i/2),x=l(r/2);switch(s){case"XYZ":this._x=h*d*p+c*f*x,this._y=c*f*p-h*d*x,this._z=c*d*x+h*f*p,this._w=c*d*p-h*f*x;break;case"YXZ":this._x=h*d*p+c*f*x,this._y=c*f*p-h*d*x,this._z=c*d*x-h*f*p,this._w=c*d*p+h*f*x;break;case"ZXY":this._x=h*d*p-c*f*x,this._y=c*f*p+h*d*x,this._z=c*d*x+h*f*p,this._w=c*d*p-h*f*x;break;case"ZYX":this._x=h*d*p-c*f*x,this._y=c*f*p+h*d*x,this._z=c*d*x-h*f*p,this._w=c*d*p+h*f*x;break;case"YZX":this._x=h*d*p+c*f*x,this._y=c*f*p+h*d*x,this._z=c*d*x-h*f*p,this._w=c*d*p-h*f*x;break;case"XZY":this._x=h*d*p-c*f*x,this._y=c*f*p-h*d*x,this._z=c*d*x+h*f*p,this._w=c*d*p+h*f*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],h=n+o+p;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+i*c-r*l,this._y=i*d+s*l+r*o-n*c,this._z=r*d+s*c+n*l-i*o,this._w=s*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class a{static{a.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*n),d=2*(o*t-r*i),p=2*(r*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-r*p,this.z=i+l*p+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mc=new L,Fu=new Zn,tt=class a{static{a.prototype.isMatrix3=!0}constructor(e,t,n,i,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c)}set(e,t,n,i,r,s,o,l,c){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],h=n[2],f=n[5],x=n[8],b=i[0],m=i[3],u=i[6],v=i[1],A=i[4],_=i[7],E=i[2],M=i[5],w=i[8];return r[0]=s*b+o*v+l*E,r[3]=s*m+o*A+l*M,r[6]=s*u+o*_+l*w,r[1]=c*b+d*v+p*E,r[4]=c*m+d*A+p*M,r[7]=c*u+d*_+p*w,r[2]=h*b+f*v+x*E,r[5]=h*m+f*A+x*M,r[8]=h*u+f*_+x*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*r*d+n*o*l+i*r*c-i*s*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,h=o*l-d*r,f=c*r-s*l,x=t*p+n*h+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=p*b,e[1]=(i*c-d*n)*b,e[2]=(o*n-i*s)*b,e[3]=h*b,e[4]=(d*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(s*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return Ka("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gc.makeScale(e,t)),this}rotate(e){return Ka("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gc.makeRotation(-e)),this}translate(e,t){return Ka("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gc=new tt,Uu=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dm(){let a={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===xt&&(i.r=fa(i.r),i.g=fa(i.g),i.b=fa(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===xt&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ba?Mr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Sr]:{primaries:e,whitePoint:n,transfer:Mr,toXYZ:Uu,fromXYZ:Ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Uu,fromXYZ:Ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),a}var dt=dm();function fa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ci(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var fi,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=Er("canvas")),fi.width=e.width,fi.height=e.height;let i=fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=fa(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fa(t[n]/255)*255):t[n]=fa(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},um=0,Li=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(xc(i[s].image)):r.push(xc(i[s]))}else r=xc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function xc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?so.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var hm=0,vc=new L,tn=class a extends Jn{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=Xn,i=Xn,r=Vt,s=Ha,o=wn,l=dn,c=a.DEFAULT_ANISOTROPY,d=ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=as(),this.name="",this.source=new Li(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=sd;tn.DEFAULT_ANISOTROPY=1;var Rt=class a{static{a.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],f=l[5],x=l[9],b=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+b)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,_=(f+1)/2,E=(u+1)/2,M=(d+h)/4,w=(p+b)/4,g=(x+m)/4;return A>_&&A>E?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=M/n,r=w/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=M/i,r=g/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=g/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-x)*(m-x)+(p-b)*(p-b)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(p-b)/v,this.z=(h-d)/v,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new tn(i),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Li(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends oo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ar=class extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var vt=class a{static{a.prototype.isMatrix4=!0}constructor(e,t,n,i,r,s,o,l,c,d,p,h,f,x,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c,d,p,h,f,x,b,m)}set(e,t,n,i,r,s,o,l,c,d,p,h,f,x,b,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=f,u[7]=x,u[11]=b,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),s=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let h=s*d,f=s*p,x=o*d,b=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=f+x*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=x+f*c,t[10]=s*l}else if(e.order==="YXZ"){let h=l*d,f=l*p,x=c*d,b=c*p;t[0]=h+b*o,t[4]=x*o-f,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=f*o-x,t[6]=b+h*o,t[10]=s*l}else if(e.order==="ZXY"){let h=l*d,f=l*p,x=c*d,b=c*p;t[0]=h-b*o,t[4]=-s*p,t[8]=x+f*o,t[1]=f+x*o,t[5]=s*d,t[9]=b-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let h=s*d,f=s*p,x=o*d,b=o*p;t[0]=l*d,t[4]=x*c-f,t[8]=h*c+b,t[1]=l*p,t[5]=b*c+h,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let h=s*l,f=s*c,x=o*l,b=o*c;t[0]=l*d,t[4]=b-h*p,t[8]=x*p+f,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*p+x,t[10]=h-b*p}else if(e.order==="XZY"){let h=s*l,f=s*c,x=o*l,b=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=h*p+b,t[5]=s*d,t[9]=f*p-x,t[2]=x*p-f,t[6]=o*d,t[10]=b*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,fm)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ra.crossVectors(n,fn),Ra.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ra.crossVectors(n,fn)),Ra.normalize(),Ts.crossVectors(fn,Ra),i[0]=Ra.x,i[4]=Ts.x,i[8]=fn.x,i[1]=Ra.y,i[5]=Ts.y,i[9]=fn.y,i[2]=Ra.z,i[6]=Ts.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],h=n[9],f=n[13],x=n[2],b=n[6],m=n[10],u=n[14],v=n[3],A=n[7],_=n[11],E=n[15],M=i[0],w=i[4],g=i[8],S=i[12],C=i[1],P=i[5],N=i[9],U=i[13],F=i[2],G=i[6],K=i[10],ee=i[14],q=i[3],Z=i[7],$=i[11],se=i[15];return r[0]=s*M+o*C+l*F+c*q,r[4]=s*w+o*P+l*G+c*Z,r[8]=s*g+o*N+l*K+c*$,r[12]=s*S+o*U+l*ee+c*se,r[1]=d*M+p*C+h*F+f*q,r[5]=d*w+p*P+h*G+f*Z,r[9]=d*g+p*N+h*K+f*$,r[13]=d*S+p*U+h*ee+f*se,r[2]=x*M+b*C+m*F+u*q,r[6]=x*w+b*P+m*G+u*Z,r[10]=x*g+b*N+m*K+u*$,r[14]=x*S+b*U+m*ee+u*se,r[3]=v*M+A*C+_*F+E*q,r[7]=v*w+A*P+_*G+E*Z,r[11]=v*g+A*N+_*K+E*$,r[15]=v*S+A*U+_*ee+E*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],f=e[14],x=e[3],b=e[7],m=e[11],u=e[15],v=l*f-c*h,A=o*f-c*p,_=o*h-l*p,E=s*f-c*d,M=s*h-l*d,w=s*p-o*d;return t*(b*v-m*A+u*_)-n*(x*v-m*E+u*M)+i*(x*A-b*E+u*w)-r*(x*_-b*M+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-n*(r*d-o*l)+i*(r*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],f=e[11],x=e[12],b=e[13],m=e[14],u=e[15],v=t*o-n*s,A=t*l-i*s,_=t*c-r*s,E=n*l-i*o,M=n*c-r*o,w=i*c-r*l,g=d*b-p*x,S=d*m-h*x,C=d*u-f*x,P=p*m-h*b,N=p*u-f*b,U=h*u-f*m,F=v*U-A*N+_*P+E*C-M*S+w*g;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/F;return e[0]=(o*U-l*N+c*P)*G,e[1]=(i*N-n*U-r*P)*G,e[2]=(b*w-m*M+u*E)*G,e[3]=(h*M-p*w-f*E)*G,e[4]=(l*C-s*U-c*S)*G,e[5]=(t*U-i*C+r*S)*G,e[6]=(m*_-x*w-u*A)*G,e[7]=(d*w-h*_+f*A)*G,e[8]=(s*N-o*C+c*g)*G,e[9]=(n*C-t*N-r*g)*G,e[10]=(x*M-b*_+u*v)*G,e[11]=(p*_-d*M-f*v)*G,e[12]=(o*S-s*P-l*g)*G,e[13]=(t*P-n*S+i*g)*G,e[14]=(b*A-x*E-m*v)*G,e[15]=(d*E-p*A+h*v)*G,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*s,0,c*l-i*o,d*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,p=o+o,h=r*c,f=r*d,x=r*p,b=s*d,m=s*p,u=o*p,v=l*c,A=l*d,_=l*p,E=n.x,M=n.y,w=n.z;return i[0]=(1-(b+u))*E,i[1]=(f+_)*E,i[2]=(x-A)*E,i[3]=0,i[4]=(f-_)*M,i[5]=(1-(h+u))*M,i[6]=(m+v)*M,i[7]=0,i[8]=(x+A)*w,i[9]=(m-v)*w,i[10]=(1-(h+b))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=mi.set(i[0],i[1],i[2]).length(),o=mi.set(i[4],i[5],i[6]).length(),l=mi.set(i[8],i[9],i[10]).length();r<0&&(s=-s),Ln.copy(this);let c=1/s,d=1/o,p=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=p,Ln.elements[9]*=p,Ln.elements[10]*=p,t.setFromRotationMatrix(Ln),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,s,o=On,l=!1){let c=this.elements,d=2*r/(t-e),p=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),x,b;if(l)x=r/(s-r),b=s*r/(s-r);else if(o===On)x=-(s+r)/(s-r),b=-2*s*r/(s-r);else if(o===Ii)x=-s/(s-r),b=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=On,l=!1){let c=this.elements,d=2/(t-e),p=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i),x,b;if(l)x=1/(s-r),b=s/(s-r);else if(o===On)x=-2/(s-r),b=-(s+r)/(s-r);else if(o===Ii)x=-1/(s-r),b=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},mi=new L,Ln=new vt,pm=new L(0,0,0),fm=new L(1,1,1),Ra=new L,Ts=new L,fn=new L,Bu=new vt,zu=new Zn,ma=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],d=i[9],p=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ma.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mm=0,Gu=new L,gi=new Zn,ca=new vt,ws=new L,hr=new L,gm=new L,xm=new Zn,Hu=new L(1,0,0),Vu=new L(0,1,0),ku=new L(0,0,1),ju={type:"added"},vm={type:"removed"},xi={type:"childadded",child:null},bc={type:"childremoved",child:null},_t=class a extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new L,t=new ma,n=new Zn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new tt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(hr,ws,this.up):ca.lookAt(ws,hr,this.up),this.quaternion.setFromRotationMatrix(ca),i&&(ca.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(ca),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ju),xi.child=e,this.dispatchEvent(xi),xi.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ju),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),h=s(e.skeletons),f=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=i,n;function s(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_t.DEFAULT_UP=new L(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pt=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},bm={type:"move"},Ni=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),u=this._getHandJoint(c,b);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&h>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function _c(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=cm(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=_c(s,r,e+1/3),this.g=_c(s,r,e),this.b=_c(s,r,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return dt.workingToColorSpace(qt.copy(this),e),Math.round(lt(qt.r*255,0,255))*65536+Math.round(lt(qt.g*255,0,255))*256+Math.round(lt(qt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(qt.copy(this),t);let n=qt.r,i=qt.g,r=qt.b,s=Math.max(n,i,r),o=Math.min(n,i,r),l,c,d=(o+s)/2;if(o===s)l=0,c=0;else{let p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Wt){dt.workingToColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,i=qt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+t,Pa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pa),e.getHSL(Cs);let n=fc(Pa.h,Cs.h,t),i=fc(Pa.s,Cs.s,t),r=fc(Pa.l,Cs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new qe;qe.NAMES=Xh;var wr=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cr=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new L,da=new L,yc=new L,ua=new L,vi=new L,bi=new L,$u=new L,Sc=new L,Mc=new L,Ec=new L,Ac=new Rt,Tc=new Rt,wc=new Rt,Na=class a{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),da.subVectors(n,t),yc.subVectors(e,t);let s=Nn.dot(Nn),o=Nn.dot(da),l=Nn.dot(yc),c=da.dot(da),d=da.dot(yc),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,f=(c*l-o*d)*h,x=(s*d-o*l)*h;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,ua)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ua.x),l.addScaledVector(s,ua.y),l.addScaledVector(o,ua.z),l)}static getInterpolatedAttribute(e,t,n,i,r,s){return Ac.setScalar(0),Tc.setScalar(0),wc.setScalar(0),Ac.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,n),wc.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Ac,r.x),s.addScaledVector(Tc,r.y),s.addScaledVector(wc,r.z),s}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),da.subVectors(e,t),Nn.cross(da).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Nn.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,s,o;vi.subVectors(i,n),bi.subVectors(r,n),Sc.subVectors(e,n);let l=vi.dot(Sc),c=bi.dot(Sc);if(l<=0&&c<=0)return t.copy(n);Mc.subVectors(e,i);let d=vi.dot(Mc),p=bi.dot(Mc);if(d>=0&&p<=d)return t.copy(i);let h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(vi,s);Ec.subVectors(e,r);let f=vi.dot(Ec),x=bi.dot(Ec);if(x>=0&&f<=x)return t.copy(r);let b=f*c-l*x;if(b<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(bi,o);let m=d*x-f*p;if(m<=0&&p-d>=0&&f-x>=0)return $u.subVectors(r,i),o=(p-d)/(p-d+(f-x)),t.copy(i).addScaledVector($u,o);let u=1/(m+b+h);return s=b*u,o=h*u,t.copy(n).addScaledVector(vi,s).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Fn):Fn.fromBufferAttribute(r,s),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Ps.subVectors(this.max,pr),_i.subVectors(e.a,pr),yi.subVectors(e.b,pr),Si.subVectors(e.c,pr),Ia.subVectors(yi,_i),Da.subVectors(Si,yi),Xa.subVectors(_i,Si);let t=[0,-Ia.z,Ia.y,0,-Da.z,Da.y,0,-Xa.z,Xa.y,Ia.z,0,-Ia.x,Da.z,0,-Da.x,Xa.z,0,-Xa.x,-Ia.y,Ia.x,0,-Da.y,Da.x,0,-Xa.y,Xa.x,0];return!Cc(t,_i,yi,Si,Ps)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,_i,yi,Si,Ps))?!1:(Is.crossVectors(Ia,Da),t=[Is.x,Is.y,Is.z],Cc(t,_i,yi,Si,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ha=[new L,new L,new L,new L,new L,new L,new L,new L],Fn=new L,Rs=new Kn,_i=new L,yi=new L,Si=new L,Ia=new L,Da=new L,Xa=new L,pr=new L,Ps=new L,Is=new L,Ya=new L;function Cc(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){Ya.fromArray(a,r);let o=i.x*Math.abs(Ya.x)+i.y*Math.abs(Ya.y)+i.z*Math.abs(Ya.z),l=e.dot(Ya),c=t.dot(Ya),d=n.dot(Ya);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Ut=new L,Ds=new je,_m=0,ft=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kh,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pr=class extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},ym=new Kn,fr=new L,Rc=new L,ga=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ym.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Rc)),this.expandByPoint(fr.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sm=0,Sn=new vt,Pc=new _t,Mi=new L,mn=new Kn,mr=new Kn,Gt=new L,ut=class a extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?Pr:Rr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(mn.min,mr.min),mn.expandByPoint(Gt),Gt.addVectors(mn.max,mr.max),mn.expandByPoint(Gt)):(mn.expandByPoint(mr.min),mn.expandByPoint(mr.max))}mn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Gt.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),Gt.add(Mi)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new L,l[g]=new L;let c=new L,d=new L,p=new L,h=new je,f=new je,x=new je,b=new L,m=new L;function u(g,S,C){c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,S),p.fromBufferAttribute(n,C),h.fromBufferAttribute(r,g),f.fromBufferAttribute(r,S),x.fromBufferAttribute(r,C),d.sub(c),p.sub(c),f.sub(h),x.sub(h);let P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(b.copy(d).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(P),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(P),o[g].add(b),o[S].add(b),o[C].add(b),l[g].add(m),l[S].add(m),l[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let g=0,S=v.length;g<S;++g){let C=v[g],P=C.start,N=C.count;for(let U=P,F=P+N;U<F;U+=3)u(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let A=new L,_=new L,E=new L,M=new L;function w(g){E.fromBufferAttribute(i,g),M.copy(E);let S=o[g];A.copy(S),A.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(M,S);let P=_.dot(l[g])<0?-1:1;s.setXYZW(g,A.x,A.y,A.z,P)}for(let g=0,S=v.length;g<S;++g){let C=v[g],P=C.start,N=C.count;for(let U=P,F=P+N;U<F;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new L,r=new L,s=new L,o=new L,l=new L,c=new L,d=new L,p=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){let x=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),s.fromBufferAttribute(t,m),d.subVectors(s,r),p.subVectors(i,r),d.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,r),p.subVectors(i,r),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,p=o.normalized,h=new c.constructor(l.length*d),f=0,x=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*d;for(let u=0;u<d;u++)h[x++]=c[f++]}return new ft(h,d,p)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){let f=c[p];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let d=i[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],p=r[c];for(let h=0,f=p.length;h<f;h++)d.push(p[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,d=s.length;c<d;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ic=new L,Mm=new L,Em=new tt,Un=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ic.subVectors(n,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Em.getNormalMatrix(e),i=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Am=0,xa=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Vi,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Kc,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(t){let r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Un().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pa=new L,Dc=new L,Ls=new L,Ns=new L,Ir=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,t),pa.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dc.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Ns.copy(this.origin).sub(Dc);let r=e.distanceTo(t)*.5,s=-this.direction.dot(Ls),o=Ns.dot(this.direction),l=-Ns.dot(Ls),c=Ns.lengthSq(),d=Math.abs(1-s*s),p,h,f,x;if(d>0)if(p=s*l-o,h=s*o-l,x=r*d,p>=0)if(h>=-x)if(h<=x){let b=1/d;p*=b,h*=b,f=p*(p+s*h+2*o)+h*(s*p+h+2*l)+c}else h=r,p=Math.max(0,-(s*h+o)),f=-p*p+h*(h+2*l)+c;else h=-r,p=Math.max(0,-(s*h+o)),f=-p*p+h*(h+2*l)+c;else h<=-x?(p=Math.max(0,-(-s*r+o)),h=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c):h<=x?(p=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(p=Math.max(0,-(s*r+o)),h=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+h*(h+2*l)+c);else h=s>0?-r:r,p=Math.max(0,-(s*h+o)),f=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Dc).addScaledVector(Ls,h),f}intersectSphere(e,t){if(e.radius<0)return null;pa.subVectors(e.center,this.origin);let n=pa.dot(this.direction),i=pa.dot(pa)-n*n,r=e.radius*e.radius;if(i>r)return null;let s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,t,n,i,r){let s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=e.x-s.x,h=e.y-s.y,f=e.z-s.z,x=t.x-s.x,b=t.y-s.y,m=t.z-s.z,u=n.x-s.x,v=n.y-s.y,A=n.z-s.z,_=Math.abs(l),E=Math.abs(c),M=Math.abs(d),w,g,S,C,P,N,U,F,G,K,ee,q;if(_>=E&&_>=M?(S=l,N=p,G=x,q=u,l>=0?(w=c,g=d,C=h,P=f,U=b,F=m,K=v,ee=A):(w=d,g=c,C=f,P=h,U=m,F=b,K=A,ee=v)):E>=M?(S=c,N=h,G=b,q=v,c>=0?(w=d,g=l,C=f,P=p,U=m,F=x,K=A,ee=u):(w=l,g=d,C=p,P=f,U=x,F=m,K=u,ee=A)):(S=d,N=f,G=m,q=A,d>=0?(w=l,g=c,C=p,P=h,U=x,F=b,K=u,ee=v):(w=c,g=l,C=h,P=p,U=b,F=x,K=v,ee=u)),S===0)return null;let Z=w/S,$=g/S,se=1/S,we=C-Z*N,W=P-$*N,ge=U-Z*G,Me=F-$*G,Se=K-Z*q,V=ee-$*q,H=Se*Me-V*ge,ce=we*V-W*Se,fe=ge*W-Me*we;if(i){if(H<0||ce<0||fe<0)return null}else if((H<0||ce<0||fe<0)&&(H>0||ce>0||fe>0))return null;let he=H+ce+fe;if(he===0)return null;let D=se*(H*N+ce*G+fe*q);return(he>0?D<0:D>0)?null:this.at(D/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qu=new vt,Ja=new Ir,Fs=new ga,Wu=new L,Us=new L,Os=new L,Bs=new L,Lc=new L,zs=new L,Xu=new L,Gs=new L,Ze=class extends _t{constructor(e=new ut,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],p=r[l];d!==0&&(Lc.fromBufferAttribute(p,e),s?zs.addScaledVector(Lc,d):zs.addScaledVector(Lc.sub(t),d))}t.add(zs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),Ja.copy(e.ray).recast(e.near),!(Fs.containsPoint(Ja.origin)===!1&&(Ja.intersectSphere(Fs,Wu)===null||Ja.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(qu.copy(r).invert(),Ja.copy(e.ray).applyMatrix4(qu),!(n.boundingBox!==null&&Ja.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ja)))}_computeIntersections(e,t,n){let i,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,b=h.length;x<b;x++){let m=h[x],u=s[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,E=A;_<E;_+=3){let M=o.getX(_),w=o.getX(_+1),g=o.getX(_+2);i=Hs(this,u,e,n,c,d,p,M,w,g),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=x,u=b;m<u;m+=3){let v=o.getX(m),A=o.getX(m+1),_=o.getX(m+2);i=Hs(this,s,e,n,c,d,p,v,A,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,b=h.length;x<b;x++){let m=h[x],u=s[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,E=A;_<E;_+=3){let M=_,w=_+1,g=_+2;i=Hs(this,u,e,n,c,d,p,M,w,g),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=x,u=b;m<u;m+=3){let v=m,A=m+1,_=m+2;i=Hs(this,s,e,n,c,d,p,v,A,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Tm(a,e,t,n,i,r,s,o){let l;if(e.side===nn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===za,o),l===null)return null;Gs.copy(o),Gs.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:a}}function Hs(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,Us),a.getVertexPosition(l,Os),a.getVertexPosition(c,Bs);let d=Tm(a,e,t,n,Us,Os,Bs,Xu);if(d){let p=new L;Na.getBarycoord(Xu,Us,Os,Bs,p),i&&(d.uv=Na.getInterpolatedAttribute(i,o,l,c,p,new je)),r&&(d.uv1=Na.getInterpolatedAttribute(r,o,l,c,p,new je)),s&&(d.normal=Na.getInterpolatedAttribute(s,o,l,c,p,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};Na.getNormal(Us,Os,Bs,h.normal),d.face=h,d.barycoord=p}return d}var Dr=class extends tn{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Ht,d=Ht,p,h){super(null,s,o,l,c,d,i,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=class extends ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ei=new vt,Yu=new vt,Vs=[],Ju=new Kn,wm=new vt,gr=new Ze,xr=new ga,Ot=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),Ju.copy(e.boundingBox).applyMatrix4(Ei),this.boundingBox.union(Ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ga),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),xr.copy(e.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[s+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ei),Yu.multiplyMatrices(n,Ei),gr.matrixWorld=Yu,gr.raycast(e,Vs);for(let s=0,o=Vs.length;s<o;s++){let l=Vs[s];l.instanceId=r,l.object=this,t.push(l)}Vs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dr(new Float32Array(i*this.count),i,this.count,jo,Tn));let r=this.morphTexture.source.data.data,s=0;for(let c=0;c<n.length;c++)s+=n[c];let o=this.geometry.morphTargetsRelative?1:1-s,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Za=new ga,Cm=new je(.5,.5),ks=new L,Ui=class{constructor(e=new Un,t=new Un,n=new Un,i=new Un,r=new Un,s=new Un){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],h=r[6],f=r[7],x=r[8],b=r[9],m=r[10],u=r[11],v=r[12],A=r[13],_=r[14],E=r[15];if(i[0].setComponents(c-s,f-d,u-x,E-v).normalize(),i[1].setComponents(c+s,f+d,u+x,E+v).normalize(),i[2].setComponents(c+o,f+p,u+b,E+A).normalize(),i[3].setComponents(c-o,f-p,u-b,E-A).normalize(),n)i[4].setComponents(l,h,m,_).normalize(),i[5].setComponents(c-l,f-h,u-m,E-_).normalize();else if(i[4].setComponents(c-l,f-h,u-m,E-_).normalize(),t===On)i[5].setComponents(c+l,f+h,u+m,E+_).normalize();else if(t===Ii)i[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Za.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Za.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Za)}intersectsSprite(e){Za.center.set(0,0,0);let t=Cm.distanceTo(e.center);return Za.radius=.7071067811865476+t,Za.applyMatrix4(e.matrixWorld),this.intersectsSphere(Za)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ks.x=i.normal.x>0?e.max.x:e.min.x,ks.y=i.normal.y>0?e.max.y:e.min.y,ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qn=class extends xa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},co=new L,uo=new L,Zu=new vt,vr=new Ir,js=new ga,Nc=new L,Ku=new L,ho=class extends _t{constructor(e=new ut,t=new Qn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)co.fromBufferAttribute(t,i-1),uo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=co.distanceTo(uo);e.setAttribute("lineDistance",new et(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=r,e.ray.intersectsSphere(js)===!1)return;Zu.copy(i).invert(),vr.copy(e.ray).applyMatrix4(Zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,s.start),x=Math.min(d.count,s.start+s.count);for(let b=f,m=x-1;b<m;b+=c){let u=d.getX(b),v=d.getX(b+1),A=$s(this,e,vr,l,u,v,b);A&&t.push(A)}if(this.isLineLoop){let b=d.getX(x-1),m=d.getX(f),u=$s(this,e,vr,l,b,m,x-1);u&&t.push(u)}}else{let f=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let b=f,m=x-1;b<m;b+=c){let u=$s(this,e,vr,l,b,b+1,b);u&&t.push(u)}if(this.isLineLoop){let b=$s(this,e,vr,l,x-1,f,x-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $s(a,e,t,n,i,r,s){let o=a.geometry.attributes.position;if(co.fromBufferAttribute(o,i),uo.fromBufferAttribute(o,r),t.distanceSqToSegment(co,uo,Nc,Ku)>n)return;Nc.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(Nc);if(!(c<e.near||c>e.far))return{distance:c,point:Ku.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}var Qu=new L,eh=new L,va=class extends ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Qu.fromBufferAttribute(t,i),eh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qu.distanceTo(eh);e.setAttribute("lineDistance",new et(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Lr=class extends tn{constructor(e=[],t=Ga,n,i,r,s,o,l,c,d){super(e,t,n,i,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oi=class extends tn{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fa=class extends tn{constructor(e,t,n=Gn,i,r,s,o=Ht,l=Ht,c,d=Yn,p=1){if(d!==Yn&&d!==Va)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:p};super(h,i,r,s,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Li(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},po=class extends Fa{constructor(e,t=Gn,n=Ga,i,r,s=Ht,o=Ht,l,c=Yn){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,i,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Nr=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yt=class a extends ut{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],d=[],p=[],h=0,f=0;x("z","y","x",-1,-1,n,t,e,s,r,0),x("z","y","x",1,-1,n,t,-e,s,r,1),x("x","z","y",1,1,e,n,t,i,s,2),x("x","z","y",1,-1,e,n,-t,i,s,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2));function x(b,m,u,v,A,_,E,M,w,g,S){let C=_/w,P=E/g,N=_/2,U=E/2,F=M/2,G=w+1,K=g+1,ee=0,q=0,Z=new L;for(let $=0;$<K;$++){let se=$*P-U;for(let we=0;we<G;we++){let W=we*C-N;Z[b]=W*v,Z[m]=se*A,Z[u]=F,c.push(Z.x,Z.y,Z.z),Z[b]=0,Z[m]=0,Z[u]=M>0?1:-1,d.push(Z.x,Z.y,Z.z),p.push(we/w),p.push(1-$/g),ee+=1}}for(let $=0;$<g;$++)for(let se=0;se<w;se++){let we=h+se+G*$,W=h+se+G*($+1),ge=h+(se+1)+G*($+1),Me=h+(se+1)+G*$;l.push(we,W,Me),l.push(W,ge,Me),q+=6}o.addGroup(f,q,S),f+=q,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Bi=class a extends ut{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],o=[],l=[],c=[],d=t/2,p=Math.PI/2*e,h=t,f=2*p+h,x=n*2+r,b=i+1,m=new L,u=new L;for(let v=0;v<=x;v++){let A=0,_=0,E=0,M=0;if(v<=n){let S=v/n,C=S*Math.PI/2;_=-d-e*Math.cos(C),E=e*Math.sin(C),M=-e*Math.cos(C),A=S*p}else if(v<=n+r){let S=(v-n)/r;_=-d+S*t,E=e,M=0,A=p+S*h}else{let S=(v-n-r)/n,C=S*Math.PI/2;_=d+e*Math.sin(C),E=e*Math.cos(C),M=e*Math.sin(C),A=p+h+S*p}let w=Math.max(0,Math.min(1,A/f)),g=0;v===0?g=.5/i:v===x&&(g=-.5/i);for(let S=0;S<=i;S++){let C=S/i,P=C*Math.PI*2,N=Math.sin(P),U=Math.cos(P);u.x=-E*U,u.y=_,u.z=E*N,o.push(u.x,u.y,u.z),m.set(-E*U,M,E*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+g,w)}if(v>0){let S=(v-1)*b;for(let C=0;C<i;C++){let P=S+C,N=S+C+1,U=v*b+C,F=v*b+C+1;s.push(P,N,U),s.push(N,F,U)}}}this.setIndex(s),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Fr=class a extends ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],s=[],o=[],l=[],c=new L,d=new je;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){let f=n+p/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(s[h]/e+1)/2,d.y=(s[h+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cn=class a extends ut{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let d=[],p=[],h=[],f=[],x=0,b=[],m=n/2,u=0;v(),s===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(f,2));function v(){let _=new L,E=new L,M=0,w=(t-e)/n;for(let g=0;g<=r;g++){let S=[],C=g/r,P=C*(t-e)+e;for(let N=0;N<=i;N++){let U=N/i,F=U*l+o,G=Math.sin(F),K=Math.cos(F);E.x=P*G,E.y=-C*n+m,E.z=P*K,p.push(E.x,E.y,E.z),_.set(G,w,K).normalize(),h.push(_.x,_.y,_.z),f.push(U,1-C),S.push(x++)}b.push(S)}for(let g=0;g<i;g++)for(let S=0;S<r;S++){let C=b[S][g],P=b[S+1][g],N=b[S+1][g+1],U=b[S][g+1];(e>0||S!==0)&&(d.push(C,P,U),M+=3),(t>0||S!==r-1)&&(d.push(P,N,U),M+=3)}c.addGroup(u,M,0),u+=M}function A(_){let E=x,M=new je,w=new L,g=0,S=_===!0?e:t,C=_===!0?1:-1;for(let N=1;N<=i;N++)p.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),x++;let P=x;for(let N=0;N<=i;N++){let F=N/i*l+o,G=Math.cos(F),K=Math.sin(F);w.x=S*K,w.y=m*C,w.z=S*G,p.push(w.x,w.y,w.z),h.push(0,C,0),M.x=G*.5+.5,M.y=K*.5*C+.5,f.push(M.x,M.y),x++}for(let N=0;N<i;N++){let U=E+N,F=P+N;_===!0?d.push(F,F+1,U):d.push(F+1,F,U),g+=3}c.addGroup(u,g,_===!0?1:2),u+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ur=class a extends cn{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fo=class a extends ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],s=[];o(i),c(n),d(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let A=new L,_=new L,E=new L;for(let M=0;M<t.length;M+=3)f(t[M+0],A),f(t[M+1],_),f(t[M+2],E),l(A,_,E,v)}function l(v,A,_,E){let M=E+1,w=[];for(let g=0;g<=M;g++){w[g]=[];let S=v.clone().lerp(_,g/M),C=A.clone().lerp(_,g/M),P=M-g;for(let N=0;N<=P;N++)N===0&&g===M?w[g][N]=S:w[g][N]=S.clone().lerp(C,N/P)}for(let g=0;g<M;g++)for(let S=0;S<2*(M-g)-1;S++){let C=Math.floor(S/2);S%2===0?(h(w[g][C+1]),h(w[g+1][C]),h(w[g][C])):(h(w[g][C+1]),h(w[g+1][C+1]),h(w[g+1][C]))}}function c(v){let A=new L;for(let _=0;_<r.length;_+=3)A.x=r[_+0],A.y=r[_+1],A.z=r[_+2],A.normalize().multiplyScalar(v),r[_+0]=A.x,r[_+1]=A.y,r[_+2]=A.z}function d(){let v=new L;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let _=m(v)/2/Math.PI+.5,E=u(v)/Math.PI+.5;s.push(_,1-E)}x(),p()}function p(){for(let v=0;v<s.length;v+=6){let A=s[v+0],_=s[v+2],E=s[v+4],M=Math.max(A,_,E),w=Math.min(A,_,E);M>.9&&w<.1&&(A<.2&&(s[v+0]+=1),_<.2&&(s[v+2]+=1),E<.2&&(s[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,A){let _=v*3;A.x=e[_+0],A.y=e[_+1],A.z=e[_+2]}function x(){let v=new L,A=new L,_=new L,E=new L,M=new je,w=new je,g=new je;for(let S=0,C=0;S<r.length;S+=9,C+=6){v.set(r[S+0],r[S+1],r[S+2]),A.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),M.set(s[C+0],s[C+1]),w.set(s[C+2],s[C+3]),g.set(s[C+4],s[C+5]),E.copy(v).add(A).add(_).divideScalar(3);let P=m(E);b(M,C+0,v,P),b(w,C+2,A,P),b(g,C+4,_,P)}}function b(v,A,_,E){E<0&&v.x===1&&(s[A]=v.x-1),_.x===0&&_.z===0&&(s[A]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);let d=n[i],h=n[i+1]-d,f=(s-d)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),l=t||(s.isVector2?new je:new L);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,i=[],r=[],s=[],o=new L,l=new vt;for(let f=0;f<=e;f++){let x=f/e;i[f]=this.getTangentAt(x,new L)}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE,d=Math.abs(i[0].x),p=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(lt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],f*x)),s[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Or=class extends Mn{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new je){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*p+this.aX,c=h*p+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mo=class extends Or{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function md(){let a=0,e=0,t=0,n=0;function i(r,s,o,l){a=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){i(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,p){let h=(s-r)/c-(o-r)/(c+d)+(o-s)/d,f=(o-s)/d-(l-s)/(d+p)+(l-o)/p;h*=d,f*=d,i(s,o,h,f)},calc:function(r){let s=r*r,o=s*r;return a+e*r+t*s+n*o}}}var th=new L,nh=new L,Fc=new md,Uc=new md,Oc=new md,zi=class extends Mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=i[(o-1)%r]:(nh.subVectors(i[0],i[1]).add(i[0]),c=nh);let p=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?d=i[(o+2)%r]:(th.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=th),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),f),b=Math.pow(p.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);b<1e-4&&(b=1),x<1e-4&&(x=b),m<1e-4&&(m=b),Fc.initNonuniformCatmullRom(c.x,p.x,h.x,d.x,x,b,m),Uc.initNonuniformCatmullRom(c.y,p.y,h.y,d.y,x,b,m),Oc.initNonuniformCatmullRom(c.z,p.z,h.z,d.z,x,b,m)}else this.curveType==="catmullrom"&&(Fc.initCatmullRom(c.x,p.x,h.x,d.x,this.tension),Uc.initCatmullRom(c.y,p.y,h.y,d.y,this.tension),Oc.initCatmullRom(c.z,p.z,h.z,d.z,this.tension));return n.set(Fc.calc(l),Uc.calc(l),Oc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ah(a,e,t,n,i){let r=(n-e)*.5,s=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*a+t}function Rm(a,e){let t=1-a;return t*t*e}function Pm(a,e){return 2*(1-a)*a*e}function Im(a,e){return a*a*e}function br(a,e,t,n){return Rm(a,e)+Pm(a,t)+Im(a,n)}function Dm(a,e){let t=1-a;return t*t*t*e}function Lm(a,e){let t=1-a;return 3*t*t*a*e}function Nm(a,e){return 3*(1-a)*a*a*e}function Fm(a,e){return a*a*a*e}function _r(a,e,t,n,i){return Dm(a,e)+Lm(a,t)+Nm(a,n)+Fm(a,i)}var go=class extends Mn{constructor(e=new je,t=new je,n=new je,i=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new je){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(_r(e,i.x,r.x,s.x,o.x),_r(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xo=class extends Mn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(_r(e,i.x,r.x,s.x,o.x),_r(e,i.y,r.y,s.y,o.y),_r(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends Mn{constructor(e=new je,t=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new je){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bo=class extends Mn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Mn{constructor(e=new je,t=new je,n=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new je){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(br(e,i.x,r.x,s.x),br(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends Mn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(br(e,i.x,r.x,s.x),br(e,i.y,r.y,s.y),br(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new je){let n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],c=i[s],d=i[s>i.length-2?i.length-1:s+1],p=i[s>i.length-3?i.length-1:s+2];return n.set(ah(o,l.x,c.x,d.x,p.x),ah(o,l.y,c.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new je().fromArray(i))}return this}},Um=Object.freeze({__proto__:null,ArcCurve:mo,CatmullRomCurve3:zi,CubicBezierCurve:go,CubicBezierCurve3:xo,EllipseCurve:Or,LineCurve:vo,LineCurve3:bo,QuadraticBezierCurve:_o,QuadraticBezierCurve3:Br,SplineCurve:yo});var Qa=class a extends fo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}};var ei=class a extends ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,p=e/o,h=t/l,f=[],x=[],b=[],m=[];for(let u=0;u<d;u++){let v=u*h-s;for(let A=0;A<c;A++){let _=A*p-r;x.push(_,-v,0),b.push(0,0,1),m.push(A/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){let A=v+c*u,_=v+c*(u+1),E=v+1+c*(u+1),M=v+1+c*u;f.push(A,_,M),f.push(_,E,M)}this.setIndex(f),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(b,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},zr=class a extends ut{constructor(e=.5,t=1,n=32,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],d=[],p=e,h=(t-e)/i,f=new L,x=new je;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){let u=r+m/n*s;f.x=p*Math.cos(u),f.y=p*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,d.push(x.x,x.y)}p+=h}for(let b=0;b<i;b++){let m=b*(n+1);for(let u=0;u<n;u++){let v=u+m,A=v,_=v+n+1,E=v+n+2,M=v+1;o.push(A,_,M),o.push(_,E,M)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ea=class a extends ut{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+o,Math.PI),c=0,d=[],p=new L,h=new L,f=[],x=[],b=[],m=[];for(let u=0;u<=n;u++){let v=[],A=u/n,_=s+A*o,E=e*Math.cos(_),M=Math.sqrt(e*e-E*E),w=0;u===0&&s===0?w=.5/t:u===n&&l===Math.PI&&(w=-.5/t);for(let g=0;g<=t;g++){let S=g/t,C=i+S*r;p.x=-M*Math.cos(C),p.y=E,p.z=M*Math.sin(C),x.push(p.x,p.y,p.z),h.copy(p).normalize(),b.push(h.x,h.y,h.z),m.push(S+w,1-A),v.push(c++)}d.push(v)}for(let u=0;u<n;u++)for(let v=0;v<t;v++){let A=d[u][v+1],_=d[u][v],E=d[u+1][v],M=d[u+1][v+1];(u!==0||s>0)&&f.push(A,_,M),(u!==n-1||l<Math.PI)&&f.push(_,E,M)}this.setIndex(f),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(b,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var En=class a extends ut{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:s,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],d=[],p=[],h=new L,f=new L,x=new L;for(let b=0;b<=n;b++){let m=s+b/n*o;for(let u=0;u<=i;u++){let v=u/i*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),x.subVectors(f,h).normalize(),d.push(x.x,x.y,x.z),p.push(u/i),p.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=i;m++){let u=(i+1)*b+m-1,v=(i+1)*(b-1)+m-1,A=(i+1)*(b-1)+m,_=(i+1)*b+m;l.push(u,v,_),l.push(v,A,_)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Gr=class a extends ut{constructor(e=new Br(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new L,l=new L,c=new je,d=new L,p=[],h=[],f=[],x=[];b(),this.setIndex(x),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(f,2));function b(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),v(),u()}function m(A){d=e.getPointAt(A/t,d);let _=s.normals[A],E=s.binormals[A];for(let M=0;M<=i;M++){let w=M/i*Math.PI*2,g=Math.sin(w),S=-Math.cos(w);l.x=S*_.x+g*E.x,l.y=S*_.y+g*E.y,l.z=S*_.z+g*E.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,p.push(o.x,o.y,o.z)}}function u(){for(let A=1;A<=t;A++)for(let _=1;_<=i;_++){let E=(i+1)*(A-1)+(_-1),M=(i+1)*A+(_-1),w=(i+1)*A+_,g=(i+1)*(A-1)+_;x.push(E,M,g),x.push(M,w,g)}}function v(){for(let A=0;A<=t;A++)for(let _=0;_<=i;_++)c.x=A/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new a(new Um[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ai(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(ih(i))i.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ih(i[0])){let r=[];for(let s=0,o=i.length;s<o;s++)r[s]=i[s].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Jt(a){let e={};for(let t=0;t<a.length;t++){let n=ai(a[t]);for(let i in n)e[i]=n[i]}return e}function ih(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Om(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function gd(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Yh={clone:ai,merge:Jt},Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=Om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(i.value);break;case"v2":this.uniforms[n].value=new je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new vt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},So=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bt=class extends xa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Mo=class extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eo=class extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ai(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Bc(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}var Ua=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{a:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break a;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends Ua{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=e,o=2*t-n;break;case kc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:s=e,l=2*n-t;break;case kc:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,f=this._weightNext,x=(n-t)/(i-t),b=x*x,m=b*x,u=-h*m+2*h*b-h*x,v=(1+h)*m+(-1.5-2*h)*b+(-.5+h)*x+1,A=(-1-f)*m+(1.5+f)*b+.5*x,_=f*m-f*b;for(let E=0;E!==o;++E)r[E]=u*s[d+E]+v*s[c+E]+A*s[l+E]+_*s[p+E];return r}},To=class extends Ua{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),p=1-d;for(let h=0;h!==o;++h)r[h]=s[c+h]*p+s[l+h]*d;return r}},wo=class extends Ua{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Co=class extends Ua{interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let x=(n-t)/(i-t),b=1-x;for(let m=0;m!==o;++m)r[m]=s[c+m]*b+s[l+m]*x;return r}let h=o*2,f=e-1;for(let x=0;x!==o;++x){let b=s[c+x],m=s[l+x],u=f*h+x*2,v=p[u],A=p[u+1],_=e*h+x*2,E=d[_],M=d[_+1],w=Hm(n,t,v,E,i);r[x]=Jh(w,b,A,M,m)}return r}};function Jh(a,e,t,n,i){let r=1-a;return r*r*r*e+3*r*r*a*t+3*r*a*a*n+a*a*a*i}function Gm(a,e,t,n,i){let r=1-a;return 3*r*r*(t-e)+6*r*a*(n-t)+3*a*a*(i-n)}function Hm(a,e,t,n,i){let r=(a-e)/(i-e);for(let s=0;s<8;s++){let o=Jh(r,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let l=Gm(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ai(t,this.TimeBufferType),this.values=Ai(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ai(e.times,Array),values:Ai(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Bc(e.settings)&&(n.settings={inTangents:Ai(e.settings.inTangents,Array),outTangents:Ai(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Co(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case Xs:t=this.InterpolantFactoryMethodSmooth;break;case Gc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return Xs;case this.InterpolantFactoryMethodBezier:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Bc(this.settings)&&(rh(this.settings.inTangents,e),rh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){Qe("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&lm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xs,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{let p=o*n,h=p-n,f=p+n;for(let x=0;x!==n;++x){let b=t[p+x];if(b!==t[h+x]||b!==t[f+x]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let p=o*n,h=s*n;for(let f=0;f!==n;++f)t[h+f]=t[p+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Bc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function rh(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=io;var Oa=class extends xn{constructor(e,t,n){super(e,t,n)}};Oa.prototype.ValueTypeName="bool";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=yr;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};Ro.prototype.ValueTypeName="color";var Po=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};Po.prototype.ValueTypeName="number";var Io=class extends Ua{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let d=c+o;c!==d;c+=4)Zn.slerpFlat(r,0,s,c-o,s,c,l);return r}},Hr=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends xn{constructor(e,t,n){super(e,t,n)}};Ba.prototype.ValueTypeName="string";Ba.prototype.ValueBufferType=Array;Ba.prototype.DefaultInterpolation=yr;Ba.prototype.InterpolantFactoryMethodLinear=void 0;Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};Do.prototype.ValueTypeName="vector";var Lo=class{constructor(e,t,n){let i=this,r=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,i.onProgress!==void 0&&i.onProgress(d,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){let p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,h=c.length;p<h;p+=2){let f=c[p],x=c[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zh=new Lo,No=class{constructor(e){this.manager=e!==void 0?e:Zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};No.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},kr=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zc=new vt,sh=new L,oh=new L,Fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(sh),oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ii||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qs=new L,Ws=new Zn,Wn=new L,jr=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qs,Ws,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ws,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qs,Ws,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qs,Ws,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},La=new L,lh=new je,ch=new je,Xt=class extends jr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(La.x,La.y).multiplyScalar(-e/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(La.x,La.y).multiplyScalar(-e/La.z)}getViewSize(e,t){return this.getViewBounds(e,lh,ch),t.subVectors(ch,lh)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gi=class extends jr{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jc=class extends Fo{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new jc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ti=-90,wi=1,Uo=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xt(Ti,wi,e,t);i.layers=this.layers,this.add(i);let r=new Xt(Ti,wi,e,t);r.layers=this.layers,this.add(r);let s=new Xt(Ti,wi,e,t);s.layers=this.layers,this.add(s);let o=new Xt(Ti,wi,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Ti,wi,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Ti,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ii)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,h,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Oo=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xd="\\[\\]\\.:\\/",Vm=new RegExp("["+xd+"]","g"),vd="[^"+xd+"]",km="[^"+xd.replace("\\.","")+"]",jm=/((?:WC+[\/:])*)/.source.replace("WC",vd),$m=/(WCOD+)?/.source.replace("WCOD",km),qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vd),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vd),Xm=new RegExp("^"+jm+$m+qm+Wm+"$"),Ym=["material","materials","bones","map"],$c=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vm,"")}static parseTrackName(e){let t=Xm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ym.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[i];if(s===void 0){let c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=$c;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X_=new Float32Array(1);var qr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ye("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var qc=class a{static{a.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function bd(a,e,t,n){let i=Jm(n);switch(t){case ud:return a*e;case jo:return a*e/i.components*i.byteLength;case $o:return a*e/i.components*i.byteLength;case ka:return a*e*2/i.components*i.byteLength;case qo:return a*e*2/i.components*i.byteLength;case hd:return a*e*3/i.components*i.byteLength;case wn:return a*e*4/i.components*i.byteLength;case Wo:return a*e*4/i.components*i.byteLength;case Zr:case Kr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Qr:case es:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Yo:case Zo:return Math.max(a,16)*Math.max(e,8)/4;case Xo:case Jo:return Math.max(a,8)*Math.max(e,8)/2;case Ko:case Qo:case tl:case nl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case el:case ts:case al:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case hl:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case vl:case bl:case _l:return Math.ceil(a/4)*Math.ceil(e/4)*16;case yl:case Sl:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ns:case Ml:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jm(a){switch(a){case dn:case od:return{byteLength:1,components:1};case ki:case ld:case Hn:return{byteLength:2,components:1};case Vo:case ko:return{byteLength:2,components:4};case Gn:case Ho:case Tn:return{byteLength:4,components:1};case cd:case dd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bp(){let a=null,e=!1,t=null,n=null;function i(r,s){n=a.requestAnimationFrame(i),t(r,s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function a0(a){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,p=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let d=l.array,p=l.updateRanges;if(a.bindBuffer(c,o),p.length===0)a.bufferSubData(c,0,d);else{p.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<p.length;f++){let x=p[h],b=p[f];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++h,p[h]=b)}p.length=h+1;for(let f=0,x=p.length;f<x;f++){let b=p[f];a.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:s}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x0=`#ifdef USE_IRIDESCENCE
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
#endif`,v0=`#ifdef USE_BUMPMAP
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,J0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,ng=`uniform sampler2D dfgLUT;
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
}`,ag=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,Cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kg=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rx=`uniform sampler2D t2D;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,ux=`#if DEPTH_PACKING == 3200
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
}`,hx=`#define DISTANCE
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
}`,px=`#define DISTANCE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,yx=`#define LAMBERT
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
}`,Sx=`#define MATCAP
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
}`,Mx=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,Ax=`#define NORMAL
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
}`,Tx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Cx=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Px=`#define TOON
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
}`,Ix=`#define TOON
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
}`,Dx=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Fx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:i0,alphahash_pars_fragment:r0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:d0,aomap_pars_fragment:u0,batching_pars_vertex:h0,batching_vertex:p0,begin_vertex:f0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:x0,bumpmap_pars_fragment:v0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:S0,color_fragment:M0,color_pars_fragment:E0,color_pars_vertex:A0,color_vertex:T0,common:w0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:R0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:D0,emissivemap_pars_fragment:L0,colorspace_fragment:N0,colorspace_pars_fragment:F0,envmap_fragment:U0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:J0,envmap_vertex:G0,fog_vertex:H0,fog_pars_vertex:V0,fog_fragment:k0,fog_pars_fragment:j0,gradientmap_pars_fragment:$0,lightmap_pars_fragment:q0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:Y0,lights_toon_fragment:Z0,lights_toon_pars_fragment:K0,lights_phong_fragment:Q0,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ag,lights_fragment_maps:ig,lights_fragment_end:rg,lightprobes_pars_fragment:sg,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:dg,map_fragment:ug,map_pars_fragment:hg,map_particle_fragment:pg,map_particle_pars_fragment:fg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:vg,morphnormal_vertex:bg,morphtarget_pars_vertex:_g,morphtarget_vertex:yg,normal_fragment_begin:Sg,normal_fragment_maps:Mg,normal_pars_fragment:Eg,normal_pars_vertex:Ag,normal_vertex:Tg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Cg,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Dg,packing:Lg,premultiplied_alpha_fragment:Ng,project_vertex:Fg,dithering_fragment:Ug,dithering_pars_fragment:Og,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Vg,shadowmask_pars_fragment:kg,skinbase_vertex:jg,skinning_pars_vertex:$g,skinning_vertex:qg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:Yg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Zg,transmission_fragment:Kg,transmission_pars_fragment:Qg,uv_pars_fragment:ex,uv_pars_vertex:tx,uv_vertex:nx,worldpos_vertex:ax,background_vert:ix,background_frag:rx,backgroundCube_vert:sx,backgroundCube_frag:ox,cube_vert:lx,cube_frag:cx,depth_vert:dx,depth_frag:ux,distance_vert:hx,distance_frag:px,equirect_vert:fx,equirect_frag:mx,linedashed_vert:gx,linedashed_frag:xx,meshbasic_vert:vx,meshbasic_frag:bx,meshlambert_vert:_x,meshlambert_frag:yx,meshmatcap_vert:Sx,meshmatcap_frag:Mx,meshnormal_vert:Ex,meshnormal_frag:Ax,meshphong_vert:Tx,meshphong_frag:wx,meshphysical_vert:Cx,meshphysical_frag:Rx,meshtoon_vert:Px,meshtoon_frag:Ix,points_vert:Dx,points_frag:Lx,shadow_vert:Nx,shadow_frag:Fx,sprite_vert:Ux,sprite_frag:Ox},De={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},aa={basic:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Jt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Jt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Jt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Jt([De.points,De.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Jt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Jt([De.common,De.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Jt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Jt([De.sprite,De.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Jt([De.common,De.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Jt([De.lights,De.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};aa.physical={uniforms:Jt([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var wl={r:0,b:0,g:0},Bx=new vt,_p=new tt;_p.set(-1,0,0,0,1,0,0,0,1);function zx(a,e,t,n,i,r){let s=new qe(0),o=i===!0?0:1,l,c,d=null,p=0,h=null;function f(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let _=v.backgroundBlurriness>0;A=e.get(A,_)}return A}function x(v){let A=!1,_=f(v);_===null?m(s,o):_&&_.isColor&&(m(_,1),A=!0);let E=a.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(a.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(v,A){let _=f(A);_&&(_.isCubeTexture||_.mapping===Yr)?(c===void 0&&(c=new Ze(new Yt(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ai(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bx.makeRotationFromEuler(A.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_p),c.material.toneMapped=dt.getTransfer(_.colorSpace)!==xt,(d!==_||p!==_.version||h!==a.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,h=a.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ze(new ei(2,2),new gn({name:"BackgroundMaterial",uniforms:ai(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=dt.getTransfer(_.colorSpace)!==xt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||h!==a.toneMapping)&&(l.material.needsUpdate=!0,d=_,p=_.version,h=a.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,A){v.getRGB(wl,gd(a)),t.buffers.color.setClear(wl.r,wl.g,wl.b,A,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(v,A=1){s.set(v),o=A,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(s,o)},render:x,addToRenderList:b,dispose:u}}function Gx(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,s=!1;function o(P,N,U,F,G){let K=!1,ee=p(P,F,U,N);r!==ee&&(r=ee,c(r.object)),K=f(P,F,U,G),K&&x(P,F,U,G),G!==null&&e.update(G,a.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,_(P,N,U,F),G!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return a.createVertexArray()}function c(P){return a.bindVertexArray(P)}function d(P){return a.deleteVertexArray(P)}function p(P,N,U,F){let G=F.wireframe===!0,K=n[N.id];K===void 0&&(K={},n[N.id]=K);let ee=P.isInstancedMesh===!0?P.id:0,q=K[ee];q===void 0&&(q={},K[ee]=q);let Z=q[U.id];Z===void 0&&(Z={},q[U.id]=Z);let $=Z[G];return $===void 0&&($=h(l()),Z[G]=$),$}function h(P){let N=[],U=[],F=[];for(let G=0;G<t;G++)N[G]=0,U[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:F,object:P,attributes:{},index:null}}function f(P,N,U,F){let G=r.attributes,K=N.attributes,ee=0,q=U.getAttributes();for(let Z in q)if(q[Z].location>=0){let se=G[Z],we=K[Z];if(we===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(we=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(we=P.instanceColor)),se===void 0||se.attribute!==we||we&&se.data!==we.data)return!0;ee++}return r.attributesNum!==ee||r.index!==F}function x(P,N,U,F){let G={},K=N.attributes,ee=0,q=U.getAttributes();for(let Z in q)if(q[Z].location>=0){let se=K[Z];se===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));let we={};we.attribute=se,se&&se.data&&(we.data=se.data),G[Z]=we,ee++}r.attributes=G,r.attributesNum=ee,r.index=F}function b(){let P=r.newAttributes;for(let N=0,U=P.length;N<U;N++)P[N]=0}function m(P){u(P,0)}function u(P,N){let U=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;U[P]=1,F[P]===0&&(a.enableVertexAttribArray(P),F[P]=1),G[P]!==N&&(a.vertexAttribDivisor(P,N),G[P]=N)}function v(){let P=r.newAttributes,N=r.enabledAttributes;for(let U=0,F=N.length;U<F;U++)N[U]!==P[U]&&(a.disableVertexAttribArray(U),N[U]=0)}function A(P,N,U,F,G,K,ee){ee===!0?a.vertexAttribIPointer(P,N,U,G,K):a.vertexAttribPointer(P,N,U,F,G,K)}function _(P,N,U,F){b();let G=F.attributes,K=U.getAttributes(),ee=N.defaultAttributeValues;for(let q in K){let Z=K[q];if(Z.location>=0){let $=G[q];if($===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let se=$.normalized,we=$.itemSize,W=e.get($);if(W===void 0)continue;let ge=W.buffer,Me=W.type,Se=W.bytesPerElement,V=Me===a.INT||Me===a.UNSIGNED_INT||$.gpuType===Ho;if($.isInterleavedBufferAttribute){let H=$.data,ce=H.stride,fe=$.offset;if(H.isInstancedInterleavedBuffer){for(let he=0;he<Z.locationSize;he++)u(Z.location+he,H.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let he=0;he<Z.locationSize;he++)m(Z.location+he);a.bindBuffer(a.ARRAY_BUFFER,ge);for(let he=0;he<Z.locationSize;he++)A(Z.location+he,we/Z.locationSize,Me,se,ce*Se,(fe+we/Z.locationSize*he)*Se,V)}else{if($.isInstancedBufferAttribute){for(let H=0;H<Z.locationSize;H++)u(Z.location+H,$.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let H=0;H<Z.locationSize;H++)m(Z.location+H);a.bindBuffer(a.ARRAY_BUFFER,ge);for(let H=0;H<Z.locationSize;H++)A(Z.location+H,we/Z.locationSize,Me,se,we*Se,we/Z.locationSize*H*Se,V)}}else if(ee!==void 0){let se=ee[q];if(se!==void 0)switch(se.length){case 2:a.vertexAttrib2fv(Z.location,se);break;case 3:a.vertexAttrib3fv(Z.location,se);break;case 4:a.vertexAttrib4fv(Z.location,se);break;default:a.vertexAttrib1fv(Z.location,se)}}}}v()}function E(){S();for(let P in n){let N=n[P];for(let U in N){let F=N[U];for(let G in F){let K=F[G];for(let ee in K)d(K[ee].object),delete K[ee];delete F[G]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let U in N){let F=N[U];for(let G in F){let K=F[G];for(let ee in K)d(K[ee].object),delete K[ee];delete F[G]}}delete n[P.id]}function w(P){for(let N in n){let U=n[N];for(let F in U){let G=U[F];if(G[P.id]===void 0)continue;let K=G[P.id];for(let ee in K)d(K[ee].object),delete K[ee];delete G[P.id]}}}function g(P){for(let N in n){let U=n[N],F=P.isInstancedMesh===!0?P.id:0,G=U[F];if(G!==void 0){for(let K in G){let ee=G[K];for(let q in ee)d(ee[q].object),delete ee[q];delete G[K]}delete U[F],Object.keys(U).length===0&&delete n[N]}}}function S(){C(),s=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function Hx(a,e,t){let n;function i(l){n=l}function r(l,c){a.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,d){d!==0&&(a.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Vx(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){return!(w!==wn&&n.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let g=w===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==dn&&w!==Tn&&!g&&n.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),u=a.getParameter(a.MAX_VERTEX_ATTRIBS),v=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),A=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=a.getParameter(a.MAX_SAMPLES),M=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:_,maxSamples:E,samples:M}}function kx(a){let e=this,t=null,n=0,i=!1,r=!1,s=new Un,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let f=p.length!==0||h||n!==0||i;return i=h,n=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,f){let x=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,u=a.get(p);if(!i||x===null||x.length===0||r&&!m)r?d(null):c();else{let v=r?0:n,A=v*4,_=u.clippingState||null;l.value=_,_=d(x,h,A,f);for(let E=0;E!==A;++E)_[E]=t[E];u.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,h,f,x){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,x!==!0||m===null){let u=f+b*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let A=0,_=f;A!==b;++A,_+=4)s.copy(p[A]).applyMatrix4(v,o),s.normal.toArray(m,_),m[_+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}var qi=4,jx=6,$x=20,qx=256,is=new Gi,Kh=new qe,_d=null,yd=0,Sd=0,Md=!1,Wx=new L,ii=new L,Rl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:s=256,position:o=Wx}=r;_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,yd,Sd),this._renderer.xr.enabled=Md,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ga||e.mapping===ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Hn,format:wn,colorSpace:Sr,depthBuffer:!1},i=Qh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xx(r)),this._blurMaterial=Jx(r,e,t),this._ggxMaterial=Yx(r,e,t)}return i}_compileMaterial(e){let t=new Ze(new ut,e);this._renderer.compile(t,is)}_sceneToCubeUV(e,t,n,i,r){let l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(Kh),p.toneMapping=zn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new Yt,new Bn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,u=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,u=!0):(m.color.copy(Kh),u=!0);for(let A=0;A<6;A++){let _=A%3;_===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[A],r.y,r.z)):_===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[A]));let E=this._cubeSize;$i(i,_*E,A>2?E:0,E,E),p.setRenderTarget(i),u&&p.render(b,l),p.render(e,l)}p.toneMapping=f,p.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ga||e.mapping===ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;$i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,is)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),h=c*1.25,f=p*h,{_lodMax:x}=this,b=this._sizeLods[n],m=3*b*(n>x-qi?n-x+qi:0),u=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,$i(r,m,u,3*b,2*b),i.setRenderTarget(r),i.render(o,is),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,$i(e,m,u,3*b,2*b),i.setRenderTarget(e),i.render(o,is)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,i,r){let s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[i],p=3*d*(i>this._lodMax-qi?i-this._lodMax+qi:0),h=4*(this._cubeSize-d);$i(t,p,h,3*d,2*d),s.setRenderTarget(t),s.render(l,is)}};function Xx(a){let e=[],t=[],n=a,i=a-qi+1+jx;for(let r=0;r<i;r++){let s=Math.pow(2,n);e.push(s);let o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,h=6,f=3,x=new Float32Array(f*h*p),b=new Float32Array(f*h*p);for(let u=0;u<p;u++){let v=u%3*2/3-1,A=u>2?0:-1,_=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];x.set(_,f*h*u);for(let E=0;E<h;E++){let M=d[E*2]*2-1,w=d[E*2+1]*2-1;u===0?ii.set(1,w,M):u===1?ii.set(-M,1,-w):u===2?ii.set(-M,w,1):u===3?ii.set(-1,w,-M):u===4?ii.set(-M,-1,w):ii.set(M,w,-1),ii.toArray(b,(u*h+E)*f)}}let m=new ut;m.setAttribute("position",new ft(x,f)),m.setAttribute("outputDirection",new ft(b,f)),t.push(new Ze(m,null)),n>qi&&n--}return{lodMeshes:t,sizeLods:e}}function Qh(a,e,t){let n=new ln(a,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Yx(a,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Jx(a,e,t){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function ep(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function tp(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Pl=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Lr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yt(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ta});r.uniforms.tEquirect.value=t;let s=new Ze(i,r),o=t.minFilter;return t.minFilter===Ha&&(t.minFilter=Vt),new Uo(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}};function Zx(a){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?s(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Bo||f===zo)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let b=new Pl(x.height);return b.fromEquirectangularTexture(a,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){let f=h.mapping,x=f===Bo||f===zo,b=f===Ga||f===ni;if(x||b){let m=t.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new Rl(a)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return x&&v&&v.height>0||b&&v&&l(v)?(n===null&&(n=new Rl(a)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Bo?h.mapping=Ga:f===zo&&(h.mapping=ni),h}function l(h){let f=0,x=6;for(let b=0;b<x;b++)h[b]!==void 0&&f++;return f===x}function c(h){let f=h.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function Kx(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ka("WebGLRenderer: "+n+" extension not supported."),i}}}function Qx(a,e,t,n){let i={},r=new WeakMap;function s(p){let h=p.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete i[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(p){let h=p.attributes;for(let f in h)e.update(h[f],a.ARRAY_BUFFER)}function c(p){let h=[],f=p.index,x=p.attributes.position,b=0;if(x===void 0)return;if(f!==null){let v=f.array;b=f.version;for(let A=0,_=v.length;A<_;A+=3){let E=v[A+0],M=v[A+1],w=v[A+2];h.push(E,M,M,w,w,E)}}else{let v=x.array;b=x.version;for(let A=0,_=v.length/3-1;A<_;A+=3){let E=A+0,M=A+1,w=A+2;h.push(E,M,M,w,w,E)}}let m=new(x.count>=65535?Pr:Rr)(h,1);m.version=b;let u=r.get(p);u&&e.remove(u),r.set(p,m)}function d(p){let h=r.get(p);if(h){let f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function ev(a,e,t){let n;function i(p){n=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,h){a.drawElements(n,h,r,p*s),t.update(h,n,1)}function c(p,h,f){f!==0&&(a.drawElementsInstanced(n,h,r,p*s,f),t.update(h,n,f))}function d(p,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,f);let b=0;for(let m=0;m<f;m++)b+=h[m];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function tv(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nv(a,e,t){let n=new WeakMap,i=new Rt;function r(s,o,l){let c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==p){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;f===!0&&(A=1),x===!0&&(A=2),b===!0&&(A=3);let _=o.attributes.position.count*A,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*E*4*p),w=new Ar(M,_,E,p);w.type=Tn,w.needsUpdate=!0;let g=A*4;for(let C=0;C<p;C++){let P=m[C],N=u[C],U=v[C],F=_*E*4*C;for(let G=0;G<P.count;G++){let K=G*g;f===!0&&(i.fromBufferAttribute(P,G),M[F+K+0]=i.x,M[F+K+1]=i.y,M[F+K+2]=i.z,M[F+K+3]=0),x===!0&&(i.fromBufferAttribute(N,G),M[F+K+4]=i.x,M[F+K+5]=i.y,M[F+K+6]=i.z,M[F+K+7]=0),b===!0&&(i.fromBufferAttribute(U,G),M[F+K+8]=i.x,M[F+K+9]=i.y,M[F+K+10]=i.z,M[F+K+11]=U.itemSize===4?i.w:1)}}h={count:p,texture:w,size:new je(_,E)},n.set(o,h),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",x),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:r}}function av(a,e,t,n,i){let r=new WeakMap;function s(c){let d=i.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}var iv={[ed]:"LINEAR_TONE_MAPPING",[td]:"REINHARD_TONE_MAPPING",[nd]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[id]:"AGX_TONE_MAPPING",[rd]:"NEUTRAL_TONE_MAPPING",[ad]:"CUSTOM_TONE_MAPPING"};function rv(a,e,t,n,i,r){let s=new ln(e,t,{type:a,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ut;c.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new et([0,2,0,0,2,0],2));let d=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ze(c,d),h=new Gi(-1,1,1,-1,0,1),f=null,x=null,b=!1,m,u=null,v=[],A=!1;this.setSize=function(_,E){s.setSize(_,E),o!==null&&o.setSize(_,E),l!==null&&l.setSize(_,E);for(let M=0;M<v.length;M++){let w=v[M];w.setSize&&w.setSize(_,E)}},this.setEffects=function(_){v=_,A=v.length>0&&v[0].isRenderPass===!0;let E=s.width,M=s.height;v.length>0&&o===null&&(o=new ln(E,M,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new ln(E,M,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){let g=v[w];g.setSize&&g.setSize(E,M)}},this.begin=function(_,E){if(b||_.toneMapping===zn&&v.length===0)return!1;if(u=E,E!==null){let M=E.width,w=E.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return A===!1&&_.setRenderTarget(s),m=_.toneMapping,_.toneMapping=zn,!0},this.hasRenderPass=function(){return A},this.end=function(_,E){_.toneMapping=m,b=!0;let M=s,w=o;for(let g=0;g<v.length;g++){let S=v[g];S.enabled!==!1&&(S.render(_,w,M,E),S.needsSwap!==!1&&(M=w,w=w===o?l:o))}if(f!==_.outputColorSpace||x!==_.toneMapping){f=_.outputColorSpace,x=_.toneMapping,d.defines={},dt.getTransfer(f)===xt&&(d.defines.SRGB_TRANSFER="");let g=iv[x];g&&(d.defines[g]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(u),_.render(p,h),u=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var yp=new tn,Td=new Fa(1,1),Sp=new Ar,Mp=new lo,Ep=new Lr,np=[],ap=[],ip=new Float32Array(16),rp=new Float32Array(9),sp=new Float32Array(4);function Xi(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,r=np[i];if(r===void 0&&(r=new Float32Array(i),np[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Bt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function zt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ll(a,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function sv(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function ov(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;a.uniform2fv(this.addr,e),zt(t,e)}}function lv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;a.uniform3fv(this.addr,e),zt(t,e)}}function cv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;a.uniform4fv(this.addr,e),zt(t,e)}}function dv(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;sp.set(n),a.uniformMatrix2fv(this.addr,!1,sp),zt(t,n)}}function uv(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;rp.set(n),a.uniformMatrix3fv(this.addr,!1,rp),zt(t,n)}}function hv(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;ip.set(n),a.uniformMatrix4fv(this.addr,!1,ip),zt(t,n)}}function pv(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function fv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;a.uniform2iv(this.addr,e),zt(t,e)}}function mv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;a.uniform3iv(this.addr,e),zt(t,e)}}function gv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;a.uniform4iv(this.addr,e),zt(t,e)}}function xv(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function vv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;a.uniform2uiv(this.addr,e),zt(t,e)}}function bv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;a.uniform3uiv(this.addr,e),zt(t,e)}}function _v(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;a.uniform4uiv(this.addr,e),zt(t,e)}}function yv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(Td.compareFunction=t.isReversedDepthBuffer()?Tl:Al,r=Td):r=yp,t.setTexture2D(e||r,i)}function Sv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mp,i)}function Mv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ep,i)}function Ev(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sp,i)}function Av(a){switch(a){case 5126:return sv;case 35664:return ov;case 35665:return lv;case 35666:return cv;case 35674:return dv;case 35675:return uv;case 35676:return hv;case 5124:case 35670:return pv;case 35667:case 35671:return fv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return xv;case 36294:return vv;case 36295:return bv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Tv(a,e){a.uniform1fv(this.addr,e)}function wv(a,e){let t=Xi(e,this.size,2);a.uniform2fv(this.addr,t)}function Cv(a,e){let t=Xi(e,this.size,3);a.uniform3fv(this.addr,t)}function Rv(a,e){let t=Xi(e,this.size,4);a.uniform4fv(this.addr,t)}function Pv(a,e){let t=Xi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Iv(a,e){let t=Xi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Dv(a,e){let t=Xi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Lv(a,e){a.uniform1iv(this.addr,e)}function Nv(a,e){a.uniform2iv(this.addr,e)}function Fv(a,e){a.uniform3iv(this.addr,e)}function Uv(a,e){a.uniform4iv(this.addr,e)}function Ov(a,e){a.uniform1uiv(this.addr,e)}function Bv(a,e){a.uniform2uiv(this.addr,e)}function zv(a,e){a.uniform3uiv(this.addr,e)}function Gv(a,e){a.uniform4uiv(this.addr,e)}function Hv(a,e,t){let n=this.cache,i=e.length,r=Ll(t,i);Bt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));let s;this.type===a.SAMPLER_2D_SHADOW?s=Td:s=yp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||s,r[o])}function Vv(a,e,t){let n=this.cache,i=e.length,r=Ll(t,i);Bt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Mp,r[s])}function kv(a,e,t){let n=this.cache,i=e.length,r=Ll(t,i);Bt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Ep,r[s])}function jv(a,e,t){let n=this.cache,i=e.length,r=Ll(t,i);Bt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Sp,r[s])}function $v(a){switch(a){case 5126:return Tv;case 35664:return wv;case 35665:return Cv;case 35666:return Rv;case 35674:return Pv;case 35675:return Iv;case 35676:return Dv;case 5124:case 35670:return Lv;case 35667:case 35671:return Nv;case 35668:case 35672:return Fv;case 35669:case 35673:return Uv;case 5125:return Ov;case 36294:return Bv;case 36295:return zv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return jv}}var wd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Av(t.type)}},Cd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}},Rd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ed=/(\w+)(\])?(\[|\.)?/g;function op(a,e){a.seq.push(e),a.map[e.id]=e}function qv(a,e,t){let n=a.name,i=n.length;for(Ed.lastIndex=0;;){let r=Ed.exec(n),s=Ed.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){op(t,c===void 0?new wd(o,a,e):new Cd(o,a,e));break}else{let p=t.map[o];p===void 0&&(p=new Rd(o),op(t,p)),t=p}}}var Wi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);qv(o,l,this)}let i=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let s=e[i];s.id in t&&n.push(s)}return n}};function lp(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var Wv=37297,Xv=0;function Yv(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){let o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}var cp=new tt;function Jv(a){dt._getMatrix(cp,dt.workingColorSpace,a);let e=`mat3( ${cp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(a)){case Mr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function dp(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Yv(a.getShaderSource(e),o)}else return r}function Zv(a,e){let t=Jv(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Kv={[ed]:"Linear",[td]:"Reinhard",[nd]:"Cineon",[Xr]:"ACESFilmic",[id]:"AgX",[rd]:"Neutral",[ad]:"Custom"};function Qv(a,e){let t=Kv[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cl=new L;function eb(){dt.getLuminanceCoefficients(Cl);let a=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tb(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function nb(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ab(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=a.getActiveAttrib(e,i),s=r.name,o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ss(a){return a!==""}function up(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hp(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(a){return a.replace(ib,sb)}var rb=new Map;function sb(a,e){let t=rt[e];if(t===void 0){let n=rb.get(e);if(n!==void 0)t=rt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pd(t)}var ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(a){return a.replace(ob,lb)}function lb(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fp(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}var cb={[Wr]:"SHADOWMAP_TYPE_PCF",[Hi]:"SHADOWMAP_TYPE_VSM"};function db(a){return cb[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ub={[Ga]:"ENVMAP_TYPE_CUBE",[ni]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE_UV"};function hb(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":ub[a.envMapMode]||"ENVMAP_TYPE_CUBE"}var pb={[ni]:"ENVMAP_MODE_REFRACTION"};function fb(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":pb[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mb={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[Ih]:"ENVMAP_BLENDING_MIX",[Dh]:"ENVMAP_BLENDING_ADD"};function gb(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":mb[a.combine]||"ENVMAP_BLENDING_NONE"}function xb(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vb(a,e,t,n){let i=a.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,l=db(t),c=hb(t),d=fb(t),p=gb(t),h=xb(t),f=tb(t),x=nb(r),b=i.createProgram(),m,u,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ss).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ss).join(`
`),u.length>0&&(u+=`
`)):(m=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),u=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?rt.tonemapping_pars_fragment:"",t.toneMapping!==zn?Qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Zv("linearToOutputTexel",t.outputColorSpace),eb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),s=Pd(s),s=up(s,t),s=hp(s,t),o=Pd(o),o=up(o,t),o=hp(o,t),s=pp(s),o=pp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let A=v+m+s,_=v+u+o,E=lp(i,i.VERTEX_SHADER,A),M=lp(i,i.FRAGMENT_SHADER,_);i.attachShader(b,E),i.attachShader(b,M),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function w(P){if(a.debug.checkShaderErrors){let N=i.getProgramInfoLog(b)||"",U=i.getShaderInfoLog(E)||"",F=i.getShaderInfoLog(M)||"",G=N.trim(),K=U.trim(),ee=F.trim(),q=!0,Z=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,b,E,M);else{let $=dp(i,E,"vertex"),se=dp(i,M,"fragment");Qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+$+`
`+se)}else G!==""?Ye("WebGLProgram: Program Info Log:",G):(K===""||ee==="")&&(Z=!1);Z&&(P.diagnostics={runnable:q,programLog:G,vertexShader:{log:K,prefix:m},fragmentShader:{log:ee,prefix:u}})}i.deleteShader(E),i.deleteShader(M),g=new Wi(i,b),S=ab(i,b)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(b,Wv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=M,this}var bb=0,Id=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dd(e),t.set(e,n)),n}},Dd=class{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}};function _b(a){return a===ka||a===ts||a===ns}function yb(a,e,t,n,i,r){let s=new Tr,o=new Id,l=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function b(g,S,C,P,N,U){let F=P.fog,G=N.geometry,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,ee=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=e.get(g.envMap||K,ee),Z=q&&q.mapping===Yr?q.image.height:null,$=f[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Ye("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));let se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,we=se!==void 0?se.length:0,W=0;G.morphAttributes.position!==void 0&&(W=1),G.morphAttributes.normal!==void 0&&(W=2),G.morphAttributes.color!==void 0&&(W=3);let ge,Me,Se,V;if($){let At=aa[$];ge=At.vertexShader,Me=At.fragmentShader}else{ge=g.vertexShader,Me=g.fragmentShader;let At=o.getVertexShaderStage(g),mt=o.getFragmentShaderStage(g);o.update(g,At,mt),Se=At.id,V=mt.id}let H=a.getRenderTarget(),ce=a.state.buffers.depth.getReversed(),fe=N.isInstancedMesh===!0,he=N.isBatchedMesh===!0,D=!!g.map,re=!!g.matcap,pe=!!q,ve=!!g.aoMap,be=!!g.lightMap,Re=!!g.bumpMap&&g.wireframe===!1,ue=!!g.normalMap,Q=!!g.displacementMap,J=!!g.emissiveMap,ie=!!g.metalnessMap,me=!!g.roughnessMap,I=g.anisotropy>0,Be=g.clearcoat>0,ye=g.dispersion>0,R=g.retroreflectivity>0,y=g.iridescence>0,O=g.sheen>0,k=g.transmission>0,ne=I&&!!g.anisotropyMap,_e=Be&&!!g.clearcoatMap,Ee=Be&&!!g.clearcoatNormalMap,ae=Be&&!!g.clearcoatRoughnessMap,oe=y&&!!g.iridescenceMap,Ae=y&&!!g.iridescenceThicknessMap,He=O&&!!g.sheenColorMap,Ce=O&&!!g.sheenRoughnessMap,Te=!!g.specularMap,$e=!!g.specularColorMap,Je=!!g.specularIntensityMap,at=k&&!!g.transmissionMap,z=k&&!!g.thicknessMap,Pe=!!g.gradientMap,de=!!g.alphaMap,Ie=g.alphaTest>0,Fe=!!g.alphaHash,xe=!!g.extensions,Xe=zn;g.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xe=a.toneMapping);let Ve={shaderID:$,shaderType:g.type,shaderName:g.name,vertexShader:ge,fragmentShader:Me,defines:g.defines,customVertexShaderID:Se,customFragmentShaderID:V,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:he,batchingColor:he&&N._colorsTexture!==null,instancing:fe,instancingColor:fe&&N.instanceColor!==null,instancingMorph:fe&&N.morphTexture!==null,outputColorSpace:H===null?a.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:D,matcap:re,envMap:pe,envMapMode:pe&&q.mapping,envMapCubeUVHeight:Z,aoMap:ve,lightMap:be,bumpMap:Re,normalMap:ue,displacementMap:Q,emissiveMap:J,normalMapObjectSpace:ue&&g.normalMapType===Fh,normalMapTangentSpace:ue&&g.normalMapType===El,packedNormalMap:ue&&g.normalMapType===El&&_b(g.normalMap.format),metalnessMap:ie,roughnessMap:me,anisotropy:I,anisotropyMap:ne,clearcoat:Be,clearcoatMap:_e,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ae,dispersion:ye,retroreflection:R,iridescence:y,iridescenceMap:oe,iridescenceThicknessMap:Ae,sheen:O,sheenColorMap:He,sheenRoughnessMap:Ce,specularMap:Te,specularColorMap:$e,specularIntensityMap:Je,transmission:k,transmissionMap:at,thicknessMap:z,gradientMap:Pe,opaque:g.transparent===!1&&g.blending===Vi&&g.alphaToCoverage===!1,alphaMap:de,alphaTest:Ie,alphaHash:Fe,combine:g.combine,mapUv:D&&x(g.map.channel),aoMapUv:ve&&x(g.aoMap.channel),lightMapUv:be&&x(g.lightMap.channel),bumpMapUv:Re&&x(g.bumpMap.channel),normalMapUv:ue&&x(g.normalMap.channel),displacementMapUv:Q&&x(g.displacementMap.channel),emissiveMapUv:J&&x(g.emissiveMap.channel),metalnessMapUv:ie&&x(g.metalnessMap.channel),roughnessMapUv:me&&x(g.roughnessMap.channel),anisotropyMapUv:ne&&x(g.anisotropyMap.channel),clearcoatMapUv:_e&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(g.sheenRoughnessMap.channel),specularMapUv:Te&&x(g.specularMap.channel),specularColorMapUv:$e&&x(g.specularColorMap.channel),specularIntensityMapUv:Je&&x(g.specularIntensityMap.channel),transmissionMapUv:at&&x(g.transmissionMap.channel),thicknessMapUv:z&&x(g.thicknessMap.channel),alphaMapUv:de&&x(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ue||I),vertexNormals:!!G.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(D||de),fog:!!F,useFog:g.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||G.attributes.normal===void 0&&ue===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ce,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:W,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:Xe,decodeVideoTexture:D&&g.map.isVideoTexture===!0&&dt.getTransfer(g.map.colorSpace)===xt,decodeVideoTextureEmissive:J&&g.emissiveMap.isVideoTexture===!0&&dt.getTransfer(g.emissiveMap.colorSpace)===xt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===An,flipSided:g.side===nn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:xe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&g.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function m(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let C in g.defines)S.push(C),S.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(u(S,g),v(S,g),S.push(a.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function u(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function v(g,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function A(g){let S=f[g.type],C;if(S){let P=aa[S];C=Yh.clone(P.uniforms)}else C=g.uniforms;return C}function _(g,S){let C=d.get(S);return C!==void 0?++C.usedTimes:(C=new vb(a,S,g,i),c.push(C),d.set(S,C)),C}function E(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function M(g){o.remove(g)}function w(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:A,acquireProgram:_,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:w}}function Sb(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Mb(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function mp(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function gp(){let a=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,x,b,m,u){let v=a[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:x,materialVariant:s(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:u},a[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=x,v.materialVariant=s(h),v.groupOrder=b,v.renderOrder=h.renderOrder,v.z=m,v.group=u),e++,v}function l(h,f,x,b,m,u,v){v.reversedDepth===!0&&(m=-m);let A=o(h,f,x,b,m,u);x.transmission>0?n.push(A):x.transparent===!0?i.push(A):t.push(A)}function c(h,f,x,b,m,u){let v=o(h,f,x,b,m,u);x.transmission>0?n.unshift(v):x.transparent===!0?i.unshift(v):t.unshift(v)}function d(h,f){t.length>1&&t.sort(h||Mb),n.length>1&&n.sort(f||mp),i.length>1&&i.sort(f||mp)}function p(){for(let h=e,f=a.length;h<f;h++){let x=a[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:p,sort:d}}function Eb(){let a=new WeakMap;function e(n,i){let r=a.get(n),s;return r===void 0?(s=new gp,a.set(n,[s])):i>=r.length?(s=new gp,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Ab(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new qe};break;case"SpotLight":t={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return a[e.id]=t,t}}}function Tb(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var wb=0;function Cb(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Rb(a){let e=new Ab,t=Tb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new vt,s=new vt;function o(c){let d=0,p=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,x=0,b=0,m=0,u=0,v=0,A=0,_=0,E=0,M=0,w=0,g=0,S=0,C=0;c.sort(Cb);for(let N=0,U=c.length;N<U;N++){let F=c[N],G=F.color,K=F.intensity,ee=F.distance,q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ka?q=F.shadow.map.texture:q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=G.r*K,p+=G.g*K,h+=G.b*K;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(F.sh.coefficients[Z],K);C++}else if(F.isSunLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let $=F.shadow,se=t.get(F);se.shadowIntensity=$.intensity,se.shadowBias=$.bias,se.shadowNormalBias=$.normalBias,se.shadowRadius=$.radius,se.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[x]=se,n.sunShadowMap[x]=q;let we=$.getViewportCount();for(let W=0;W<we;W++)n.sunShadowMatrix[b+W]=$.getMatrix(W),n.sunShadowCascade[b+W]=$._cascadeData[W];b+=we,x++}n.sun[f]=Z,f++}else if(F.isDirectionalLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let $=F.shadow,se=t.get(F);se.shadowIntensity=$.intensity,se.shadowBias=$.bias,se.shadowNormalBias=$.normalBias,se.shadowRadius=$.radius,se.shadowMapSize=$.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=F.shadow.matrix,E++}n.directional[m]=Z,m++}else if(F.isSpotLight){let Z=e.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(G).multiplyScalar(K),Z.distance=ee,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,n.spot[v]=Z;let $=F.shadow;if(F.map&&(n.spotLightMap[g]=F.map,g++,$.updateMatrices(F),F.castShadow&&S++),n.spotLightMatrix[v]=$.matrix,F.castShadow){let se=t.get(F);se.shadowIntensity=$.intensity,se.shadowBias=$.bias,se.shadowNormalBias=$.normalBias,se.shadowRadius=$.radius,se.shadowMapSize=$.mapSize,n.spotShadow[v]=se,n.spotShadowMap[v]=q,w++}v++}else if(F.isRectAreaLight){let Z=e.get(F);Z.color.copy(G).multiplyScalar(K),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=Z,A++}else if(F.isPointLight){let Z=e.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){let $=F.shadow,se=t.get(F);se.shadowIntensity=$.intensity,se.shadowBias=$.bias,se.shadowNormalBias=$.normalBias,se.shadowRadius=$.radius,se.shadowMapSize=$.mapSize,se.shadowCameraNear=$.camera.near,se.shadowCameraFar=$.camera.far,n.pointShadow[u]=se,n.pointShadowMap[u]=q,n.pointShadowMatrix[u]=F.shadow.matrix,M++}n.point[u]=Z,u++}else if(F.isHemisphereLight){let Z=e.get(F);Z.skyColor.copy(F.color).multiplyScalar(K),Z.groundColor.copy(F.groundColor).multiplyScalar(K),n.hemi[_]=Z,_++}}A>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=h;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==u||P.spotLength!==v||P.rectAreaLength!==A||P.hemiLength!==_||P.numSunShadows!==x||P.numDirectionalShadows!==E||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==g||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=A,n.point.length=u,n.hemi.length=_,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+g-S,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=u,P.spotLength=v,P.rectAreaLength=A,P.hemiLength=_,P.numSunShadows=x,P.numDirectionalShadows=E,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=g,P.numLightProbes=C,n.version=wb++)}function l(c,d){let p=0,h=0,f=0,x=0,b=0,m=0,u=d.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let _=c[v];if(_.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(u),p++}else if(_.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(u),h++}else if(_.isSpotLight){let E=n.spot[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(u),x++}else if(_.isRectAreaLight){let E=n.rectArea[b];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),s.identity(),r.copy(_.matrixWorld),r.premultiply(u),s.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),b++}else if(_.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),f++}else if(_.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(u),m++}}}return{setup:o,setupView:l,state:n}}function xp(a){let e=new Rb(a),t=[],n=[],i=[];function r(h){p.camera=h,t.length=0,n.length=0,i.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Pb(a){let e=new WeakMap;function t(i,r=0){let s=e.get(i),o;return s===void 0?(o=new xp(a),e.set(i,[o])):r>=s.length?(o=new xp(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
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
}`,Lb=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Nb=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],vp=new vt,rs=new L,Ad=new L;function Fb(a,e,t){let n=new Ui,i=new je,r=new je,s=new Rt,o=new Mo,l=new Eo,c={},d=t.maxTextureSize,p={[za]:nn,[nn]:za,[An]:An},h=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Ib,fragmentShader:Db}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let x=new ut;x.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ze(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wr;let u=this.type;this.render=function(M,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===hh&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wr);let S=a.getRenderTarget(),C=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),N=a.state;N.setBlending(ta),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=u!==this.type;U&&w.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(G=>G.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,G=M.length;F<G;F++){let K=M[F],ee=K.shadow;if(ee===void 0){Ye("WebGLShadowMap:",K,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);let q=ee.getFrameExtents();i.multiply(q),r.copy(ee.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/q.x),i.x=r.x*q.x,ee.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/q.y),i.y=r.y*q.y,ee.mapSize.y=r.y));let Z=a.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=Z,ee.map===null||U===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Hi){if(K.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new ln(i.x,i.y,{format:ka,type:Hn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),ee.map.texture.name=K.name+".shadowMap",ee.map.depthTexture=new Fa(i.x,i.y,Tn),ee.map.depthTexture.name=K.name+".shadowMapDepth",ee.map.depthTexture.format=Yn,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Ht,ee.map.depthTexture.magFilter=Ht}else K.isPointLight?(ee.map=new Pl(i.x),ee.map.depthTexture=new po(i.x,Gn)):(ee.map=new ln(i.x,i.y),ee.map.depthTexture=new Fa(i.x,i.y,Gn)),ee.map.depthTexture.name=K.name+".shadowMap",ee.map.depthTexture.format=Yn,this.type===Wr?(ee.map.depthTexture.compareFunction=Z?Tl:Al,ee.map.depthTexture.minFilter=Vt,ee.map.depthTexture.magFilter=Vt):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Ht,ee.map.depthTexture.magFilter=Ht);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==i.x||ee.map.height!==i.y)&&ee.map.setSize(i.x,i.y);let $=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();K.isPointLight!==!0&&ee.updateMatrices(K,g);for(let se=0;se<$;se++){let we=ee.getCamera(se);if(K.isPointLight){let W=ee.camera,ge=ee.matrix,Me=K.distance||W.far;Me!==W.far&&(W.far=Me,W.updateProjectionMatrix()),rs.setFromMatrixPosition(K.matrixWorld),W.position.copy(rs),Ad.copy(W.position),Ad.add(Lb[se]),W.up.copy(Nb[se]),W.lookAt(Ad),W.updateMatrixWorld(),ge.makeTranslation(-rs.x,-rs.y,-rs.z),vp.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(vp,W.coordinateSystem,W.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)a.setRenderTarget(ee.map,se),a.clear();else{se===0&&(a.setRenderTarget(ee.map),a.clear());let W=ee.getViewport(se);s.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),N.viewport(s)}n=ee.getFrustum(se),_(w,g,we,K,this.type)}ee.isPointLightShadow!==!0&&this.type===Hi&&v(ee,g),ee.needsUpdate=!1}u=this.type,m.needsUpdate=!1,a.setRenderTarget(S,C,P)};function v(M,w){let g=e.update(b);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new ln(i.x,i.y,{format:ka,type:Hn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(w,null,g,h,b,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(w,null,g,f,b,null)}function A(M,w,g,S){let C=null,P=g.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)C=P;else if(C=g.isPointLight===!0?l:o,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=C.uuid,U=w.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let G=F[U];G===void 0&&(G=C.clone(),F[U]=G,w.addEventListener("dispose",E)),C=G}if(C.visible=w.visible,C.wireframe=w.wireframe,S===Hi?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:p[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=a.properties.get(C);N.light=g}return C}function _(M,w,g,S,C){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Hi)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,M.matrixWorld);let U=e.update(M),F=M.material;if(Array.isArray(F)){let G=U.groups;for(let K=0,ee=G.length;K<ee;K++){let q=G[K],Z=F[q.materialIndex];if(Z&&Z.visible){let $=A(M,Z,S,C);M.onBeforeShadow(a,M,w,g,U,$,q),a.renderBufferDirect(g,null,U,$,M,q),M.onAfterShadow(a,M,w,g,U,$,q)}}}else if(F.visible){let G=A(M,F,S,C);M.onBeforeShadow(a,M,w,g,U,G,null),a.renderBufferDirect(g,null,U,G,M,null),M.onAfterShadow(a,M,w,g,U,G,null)}}let N=M.children;for(let U=0,F=N.length;U<F;U++)_(N[U],w,g,S,C)}function E(M){M.target.removeEventListener("dispose",E);for(let g in c){let S=c[g],C=M.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function Ub(a,e){function t(){let z=!1,Pe=new Rt,de=null,Ie=new Rt(0,0,0,0);return{setMask:function(Fe){de!==Fe&&!z&&(a.colorMask(Fe,Fe,Fe,Fe),de=Fe)},setLocked:function(Fe){z=Fe},setClear:function(Fe,xe,Xe,Ve,At){At===!0&&(Fe*=Ve,xe*=Ve,Xe*=Ve),Pe.set(Fe,xe,Xe,Ve),Ie.equals(Pe)===!1&&(a.clearColor(Fe,xe,Xe,Ve),Ie.copy(Pe))},reset:function(){z=!1,de=null,Ie.set(-1,0,0,0)}}}function n(){let z=!1,Pe=!1,de=null,Ie=null,Fe=null;return{setReversed:function(xe){if(Pe!==xe){let Xe=e.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Pe=xe;let Ve=Fe;Fe=null,this.setClear(Ve)}},getReversed:function(){return Pe},setTest:function(xe){xe?H(a.DEPTH_TEST):ce(a.DEPTH_TEST)},setMask:function(xe){de!==xe&&!z&&(a.depthMask(xe),de=xe)},setFunc:function(xe){if(Pe&&(xe=Wh[xe]),Ie!==xe){switch(xe){case Js:a.depthFunc(a.NEVER);break;case Zs:a.depthFunc(a.ALWAYS);break;case Ks:a.depthFunc(a.LESS);break;case Ri:a.depthFunc(a.LEQUAL);break;case Qs:a.depthFunc(a.EQUAL);break;case eo:a.depthFunc(a.GEQUAL);break;case to:a.depthFunc(a.GREATER);break;case no:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=xe}},setLocked:function(xe){z=xe},setClear:function(xe){Fe!==xe&&(Fe=xe,Pe&&(xe=1-xe),a.clearDepth(xe))},reset:function(){z=!1,de=null,Ie=null,Fe=null,Pe=!1}}}function i(){let z=!1,Pe=null,de=null,Ie=null,Fe=null,xe=null,Xe=null,Ve=null,At=null;return{setTest:function(mt){z||(mt?H(a.STENCIL_TEST):ce(a.STENCIL_TEST))},setMask:function(mt){Pe!==mt&&!z&&(a.stencilMask(mt),Pe=mt)},setFunc:function(mt,Dn,$n){(de!==mt||Ie!==Dn||Fe!==$n)&&(a.stencilFunc(mt,Dn,$n),de=mt,Ie=Dn,Fe=$n)},setOp:function(mt,Dn,$n){(xe!==mt||Xe!==Dn||Ve!==$n)&&(a.stencilOp(mt,Dn,$n),xe=mt,Xe=Dn,Ve=$n)},setLocked:function(mt){z=mt},setClear:function(mt){At!==mt&&(a.clearStencil(mt),At=mt)},reset:function(){z=!1,Pe=null,de=null,Ie=null,Fe=null,xe=null,Xe=null,Ve=null,At=null}}}let r=new t,s=new n,o=new i,l=new WeakMap,c=new WeakMap,d={},p={},h={},f=new WeakMap,x=[],b=null,m=!1,u=null,v=null,A=null,_=null,E=null,M=null,w=null,g=new qe(0,0,0),S=0,C=!1,P=null,N=null,U=null,F=null,G=null,K=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,q=0,Z=a.getParameter(a.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ee=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ee=q>=2);let $=null,se={},we=a.getParameter(a.SCISSOR_BOX),W=a.getParameter(a.VIEWPORT),ge=new Rt().fromArray(we),Me=new Rt().fromArray(W);function Se(z,Pe,de,Ie){let Fe=new Uint8Array(4),xe=a.createTexture();a.bindTexture(z,xe),a.texParameteri(z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<de;Xe++)z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY?a.texImage3D(Pe,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Fe):a.texImage2D(Pe+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Fe);return xe}let V={};V[a.TEXTURE_2D]=Se(a.TEXTURE_2D,a.TEXTURE_2D,1),V[a.TEXTURE_CUBE_MAP]=Se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[a.TEXTURE_2D_ARRAY]=Se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),V[a.TEXTURE_3D]=Se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(a.DEPTH_TEST),s.setFunc(Ri),Re(!1),ue(Wc),H(a.CULL_FACE),ve(ta);function H(z){d[z]!==!0&&(a.enable(z),d[z]=!0)}function ce(z){d[z]!==!1&&(a.disable(z),d[z]=!1)}function fe(z,Pe){return h[z]!==Pe?(a.bindFramebuffer(z,Pe),h[z]=Pe,z===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=Pe),z===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=Pe),!0):!1}function he(z,Pe){let de=x,Ie=!1;if(z){de=f.get(Pe),de===void 0&&(de=[],f.set(Pe,de));let Fe=z.textures;if(de.length!==Fe.length||de[0]!==a.COLOR_ATTACHMENT0){for(let xe=0,Xe=Fe.length;xe<Xe;xe++)de[xe]=a.COLOR_ATTACHMENT0+xe;de.length=Fe.length,Ie=!0}}else de[0]!==a.BACK&&(de[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(de)}function D(z){return b!==z?(a.useProgram(z),b=z,!0):!1}let re={[ti]:a.FUNC_ADD,[fh]:a.FUNC_SUBTRACT,[mh]:a.FUNC_REVERSE_SUBTRACT};re[gh]=a.MIN,re[xh]=a.MAX;let pe={[vh]:a.ZERO,[bh]:a.ONE,[_h]:a.SRC_COLOR,[Zc]:a.SRC_ALPHA,[Th]:a.SRC_ALPHA_SATURATE,[Eh]:a.DST_COLOR,[Sh]:a.DST_ALPHA,[yh]:a.ONE_MINUS_SRC_COLOR,[Kc]:a.ONE_MINUS_SRC_ALPHA,[Ah]:a.ONE_MINUS_DST_COLOR,[Mh]:a.ONE_MINUS_DST_ALPHA,[wh]:a.CONSTANT_COLOR,[Ch]:a.ONE_MINUS_CONSTANT_COLOR,[Rh]:a.CONSTANT_ALPHA,[Ph]:a.ONE_MINUS_CONSTANT_ALPHA};function ve(z,Pe,de,Ie,Fe,xe,Xe,Ve,At,mt){if(z===ta){m===!0&&(ce(a.BLEND),m=!1);return}if(m===!1&&(H(a.BLEND),m=!0),z!==ph){if(z!==u||mt!==C){if((v!==ti||E!==ti)&&(a.blendEquation(a.FUNC_ADD),v=ti,E=ti),mt)switch(z){case Vi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Xc:a.blendFunc(a.ONE,a.ONE);break;case Yc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Jc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Qe("WebGLState: Invalid blending: ",z);break}else switch(z){case Vi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Xc:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Yc:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",z);break}A=null,_=null,M=null,w=null,g.set(0,0,0),S=0,u=z,C=mt}return}Fe=Fe||Pe,xe=xe||de,Xe=Xe||Ie,(Pe!==v||Fe!==E)&&(a.blendEquationSeparate(re[Pe],re[Fe]),v=Pe,E=Fe),(de!==A||Ie!==_||xe!==M||Xe!==w)&&(a.blendFuncSeparate(pe[de],pe[Ie],pe[xe],pe[Xe]),A=de,_=Ie,M=xe,w=Xe),(Ve.equals(g)===!1||At!==S)&&(a.blendColor(Ve.r,Ve.g,Ve.b,At),g.copy(Ve),S=At),u=z,C=!1}function be(z,Pe){z.side===An?ce(a.CULL_FACE):H(a.CULL_FACE);let de=z.side===nn;Pe&&(de=!de),Re(de),z.blending===Vi&&z.transparent===!1?ve(ta):ve(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ie=z.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),J(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(a.SAMPLE_ALPHA_TO_COVERAGE):ce(a.SAMPLE_ALPHA_TO_COVERAGE)}function Re(z){P!==z&&(z?a.frontFace(a.CW):a.frontFace(a.CCW),P=z)}function ue(z){z!==dh?(H(a.CULL_FACE),z!==N&&(z===Wc?a.cullFace(a.BACK):z===uh?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ce(a.CULL_FACE),N=z}function Q(z){z!==U&&(ee&&a.lineWidth(z),U=z)}function J(z,Pe,de){z?(H(a.POLYGON_OFFSET_FILL),(F!==Pe||G!==de)&&(F=Pe,G=de,s.getReversed()&&(Pe=-Pe),a.polygonOffset(Pe,de))):ce(a.POLYGON_OFFSET_FILL)}function ie(z){z?H(a.SCISSOR_TEST):ce(a.SCISSOR_TEST)}function me(z){z===void 0&&(z=a.TEXTURE0+K-1),$!==z&&(a.activeTexture(z),$=z)}function I(z,Pe,de){de===void 0&&($===null?de=a.TEXTURE0+K-1:de=$);let Ie=se[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},se[de]=Ie),(Ie.type!==z||Ie.texture!==Pe)&&($!==de&&(a.activeTexture(de),$=de),a.bindTexture(z,Pe||V[z]),Ie.type=z,Ie.texture=Pe)}function Be(){let z=se[$];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ye(){try{a.compressedTexImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function R(){try{a.compressedTexImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function y(){try{a.texSubImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function O(){try{a.texSubImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function k(){try{a.compressedTexSubImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function ne(){try{a.compressedTexSubImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function _e(){try{a.texStorage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function Ee(){try{a.texStorage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function ae(){try{a.texImage2D(...arguments)}catch(z){Qe("WebGLState:",z)}}function oe(){try{a.texImage3D(...arguments)}catch(z){Qe("WebGLState:",z)}}function Ae(z){return p[z]!==void 0?p[z]:a.getParameter(z)}function He(z,Pe){p[z]!==Pe&&(a.pixelStorei(z,Pe),p[z]=Pe)}function Ce(z){ge.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),ge.copy(z))}function Te(z){Me.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),Me.copy(z))}function $e(z,Pe){let de=c.get(Pe);de===void 0&&(de=new WeakMap,c.set(Pe,de));let Ie=de.get(z);Ie===void 0&&(Ie=a.getUniformBlockIndex(Pe,z.name),de.set(z,Ie))}function Je(z,Pe){let Ie=c.get(Pe).get(z);l.get(Pe)!==Ie&&(a.uniformBlockBinding(Pe,Ie,z.__bindingPointIndex),l.set(Pe,Ie))}function at(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),d={},p={},$=null,se={},h={},f=new WeakMap,x=[],b=null,m=!1,u=null,v=null,A=null,_=null,E=null,M=null,w=null,g=new qe(0,0,0),S=0,C=!1,P=null,N=null,U=null,F=null,G=null,ge.set(0,0,a.canvas.width,a.canvas.height),Me.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:H,disable:ce,bindFramebuffer:fe,drawBuffers:he,useProgram:D,setBlending:ve,setMaterial:be,setFlipSided:Re,setCullFace:ue,setLineWidth:Q,setPolygonOffset:J,setScissorTest:ie,activeTexture:me,bindTexture:I,unbindTexture:Be,compressedTexImage2D:ye,compressedTexImage3D:R,texImage2D:ae,texImage3D:oe,pixelStorei:He,getParameter:Ae,updateUBOMapping:$e,uniformBlockBinding:Je,texStorage2D:_e,texStorage3D:Ee,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:ne,scissor:Ce,viewport:Te,reset:at}}function Ob(a,e,t,n,i,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap,p=new Set,h,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,y){return x?new OffscreenCanvas(R,y):Er("canvas")}function m(R,y,O){let k=1,ne=ye(R);if((ne.width>O||ne.height>O)&&(k=O/Math.max(ne.width,ne.height)),k<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let _e=Math.floor(k*ne.width),Ee=Math.floor(k*ne.height);h===void 0&&(h=b(_e,Ee));let ae=y?b(_e,Ee):h;return ae.width=_e,ae.height=Ee,ae.getContext("2d").drawImage(R,0,0,_e,Ee),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+_e+"x"+Ee+")."),ae}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function u(R){return R.generateMipmaps}function v(R){a.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?a.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function _(R,y,O,k,ne,_e=!1){if(R!==null){if(a[R]!==void 0)return a[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ee;k&&(Ee=e.get("EXT_texture_norm16"),Ee||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=y;if(y===a.RED&&(O===a.FLOAT&&(ae=a.R32F),O===a.HALF_FLOAT&&(ae=a.R16F),O===a.UNSIGNED_BYTE&&(ae=a.R8),O===a.UNSIGNED_SHORT&&Ee&&(ae=Ee.R16_EXT),O===a.SHORT&&Ee&&(ae=Ee.R16_SNORM_EXT)),y===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(ae=a.R8UI),O===a.UNSIGNED_SHORT&&(ae=a.R16UI),O===a.UNSIGNED_INT&&(ae=a.R32UI),O===a.BYTE&&(ae=a.R8I),O===a.SHORT&&(ae=a.R16I),O===a.INT&&(ae=a.R32I)),y===a.RG&&(O===a.FLOAT&&(ae=a.RG32F),O===a.HALF_FLOAT&&(ae=a.RG16F),O===a.UNSIGNED_BYTE&&(ae=a.RG8),O===a.UNSIGNED_SHORT&&Ee&&(ae=Ee.RG16_EXT),O===a.SHORT&&Ee&&(ae=Ee.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(ae=a.RG8UI),O===a.UNSIGNED_SHORT&&(ae=a.RG16UI),O===a.UNSIGNED_INT&&(ae=a.RG32UI),O===a.BYTE&&(ae=a.RG8I),O===a.SHORT&&(ae=a.RG16I),O===a.INT&&(ae=a.RG32I)),y===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(ae=a.RGB8UI),O===a.UNSIGNED_SHORT&&(ae=a.RGB16UI),O===a.UNSIGNED_INT&&(ae=a.RGB32UI),O===a.BYTE&&(ae=a.RGB8I),O===a.SHORT&&(ae=a.RGB16I),O===a.INT&&(ae=a.RGB32I)),y===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(ae=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(ae=a.RGBA16UI),O===a.UNSIGNED_INT&&(ae=a.RGBA32UI),O===a.BYTE&&(ae=a.RGBA8I),O===a.SHORT&&(ae=a.RGBA16I),O===a.INT&&(ae=a.RGBA32I)),y===a.RGB&&(O===a.UNSIGNED_SHORT&&Ee&&(ae=Ee.RGB16_EXT),O===a.SHORT&&Ee&&(ae=Ee.RGB16_SNORM_EXT),O===a.UNSIGNED_INT_5_9_9_9_REV&&(ae=a.RGB9_E5),O===a.UNSIGNED_INT_10F_11F_11F_REV&&(ae=a.R11F_G11F_B10F)),y===a.RGBA){let oe=_e?Mr:dt.getTransfer(ne);O===a.FLOAT&&(ae=a.RGBA32F),O===a.HALF_FLOAT&&(ae=a.RGBA16F),O===a.UNSIGNED_BYTE&&(ae=oe===xt?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT&&Ee&&(ae=Ee.RGBA16_EXT),O===a.SHORT&&Ee&&(ae=Ee.RGBA16_SNORM_EXT),O===a.UNSIGNED_SHORT_4_4_4_4&&(ae=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(ae=a.RGB5_A1)}return(ae===a.R16F||ae===a.R32F||ae===a.RG16F||ae===a.RG32F||ae===a.RGBA16F||ae===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function E(R,y){let O;return R?y===null||y===Gn||y===ji?O=a.DEPTH24_STENCIL8:y===Tn?O=a.DEPTH32F_STENCIL8:y===ki&&(O=a.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===ji?O=a.DEPTH_COMPONENT24:y===Tn?O=a.DEPTH_COMPONENT32F:y===ki&&(O=a.DEPTH_COMPONENT16),O}function M(R,y){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Vt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function w(R){let y=R.target;y.removeEventListener("dispose",w),S(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&p.delete(y)}function g(R){let y=R.target;y.removeEventListener("dispose",g),P(y)}function S(R){let y=n.get(R);if(y.__webglInit===void 0)return;let O=R.source,k=f.get(O);if(k){let ne=k[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(R),Object.keys(k).length===0&&f.delete(O)}n.remove(R)}function C(R){let y=n.get(R);a.deleteTexture(y.__webglTexture);let O=R.source,k=f.get(O);delete k[y.__cacheKey],s.memory.textures--}function P(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let ne=0;ne<y.__webglFramebuffer[k].length;ne++)a.deleteFramebuffer(y.__webglFramebuffer[k][ne]);else a.deleteFramebuffer(y.__webglFramebuffer[k]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)a.deleteFramebuffer(y.__webglFramebuffer[k]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let k=0;k<y.__webglColorRenderbuffer.length;k++)y.__webglColorRenderbuffer[k]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[k]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=R.textures;for(let k=0,ne=O.length;k<ne;k++){let _e=n.get(O[k]);_e.__webglTexture&&(a.deleteTexture(_e.__webglTexture),s.memory.textures--),n.remove(O[k])}n.remove(R)}let N=0;function U(){N=0}function F(){return N}function G(R){N=R}function K(){let R=N;return R>=i.maxTextures&&Ye("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function ee(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function q(R,y){let O=n.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){let k=R.image;if(k===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(O,R,y);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+y)}function Z(R,y){let O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){ce(O,R,y);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+y)}function $(R,y){let O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){ce(O,R,y);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+y)}function se(R,y){let O=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){fe(O,R,y);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+y)}let we={[Pi]:a.REPEAT,[Xn]:a.CLAMP_TO_EDGE,[ao]:a.MIRRORED_REPEAT},W={[Ht]:a.NEAREST,[Lh]:a.NEAREST_MIPMAP_NEAREST,[Jr]:a.NEAREST_MIPMAP_LINEAR,[Vt]:a.LINEAR,[Go]:a.LINEAR_MIPMAP_NEAREST,[Ha]:a.LINEAR_MIPMAP_LINEAR},ge={[Oh]:a.NEVER,[Vh]:a.ALWAYS,[Bh]:a.LESS,[Al]:a.LEQUAL,[zh]:a.EQUAL,[Tl]:a.GEQUAL,[Gh]:a.GREATER,[Hh]:a.NOTEQUAL};function Me(R,y){if(y.type===Tn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vt||y.magFilter===Go||y.magFilter===Jr||y.magFilter===Ha||y.minFilter===Vt||y.minFilter===Go||y.minFilter===Jr||y.minFilter===Ha)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,we[y.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,we[y.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,we[y.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,W[y.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,W[y.minFilter]),y.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ht||y.minFilter!==Jr&&y.minFilter!==Ha||y.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Se(R,y){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",w));let k=y.source,ne=f.get(k);ne===void 0&&(ne={},f.set(k,ne));let _e=ee(y);if(_e!==R.__cacheKey){ne[_e]===void 0&&(ne[_e]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),ne[_e].usedTimes++;let Ee=ne[R.__cacheKey];Ee!==void 0&&(ne[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(y)),R.__cacheKey=_e,R.__webglTexture=ne[_e].texture}return O}function V(R,y,O){return Math.floor(Math.floor(R/O)/y)}function H(R,y,O,k){let _e=R.updateRanges;if(_e.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,O,k,y.data);else{_e.sort((He,Ce)=>He.start-Ce.start);let Ee=0;for(let He=1;He<_e.length;He++){let Ce=_e[Ee],Te=_e[He],$e=Ce.start+Ce.count,Je=V(Te.start,y.width,4),at=V(Ce.start,y.width,4);Te.start<=$e+1&&Je===at&&V(Te.start+Te.count-1,y.width,4)===Je?Ce.count=Math.max(Ce.count,Te.start+Te.count-Ce.start):(++Ee,_e[Ee]=Te)}_e.length=Ee+1;let ae=t.getParameter(a.UNPACK_ROW_LENGTH),oe=t.getParameter(a.UNPACK_SKIP_PIXELS),Ae=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let He=0,Ce=_e.length;He<Ce;He++){let Te=_e[He],$e=Math.floor(Te.start/4),Je=Math.ceil(Te.count/4),at=$e%y.width,z=Math.floor($e/y.width),Pe=Je,de=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,at),t.pixelStorei(a.UNPACK_SKIP_ROWS,z),t.texSubImage2D(a.TEXTURE_2D,0,at,z,Pe,de,O,k,y.data)}R.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,ae),t.pixelStorei(a.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(a.UNPACK_SKIP_ROWS,Ae)}}function ce(R,y,O){let k=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=a.TEXTURE_3D);let ne=Se(R,y),_e=y.source;t.bindTexture(k,R.__webglTexture,a.TEXTURE0+O);let Ee=n.get(_e);if(_e.version!==Ee.__version||ne===!0){if(t.activeTexture(a.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let de=dt.getPrimaries(dt.workingColorSpace),Ie=y.colorSpace===ba?null:dt.getPrimaries(y.colorSpace),Fe=y.colorSpace===ba||de===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let oe=m(y.image,!1,i.maxTextureSize);oe=Be(y,oe);let Ae=r.convert(y.format,y.colorSpace),He=r.convert(y.type),Ce=_(y.internalFormat,Ae,He,y.normalized,y.colorSpace,y.isVideoTexture);Me(k,y);let Te,$e=y.mipmaps,Je=y.isVideoTexture!==!0,at=Ee.__version===void 0||ne===!0,z=_e.dataReady,Pe=M(y,oe);if(y.isDepthTexture)Ce=E(y.format===Va,y.type),at&&(Je?t.texStorage2D(a.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(a.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Ae,He,null));else if(y.isDataTexture)if($e.length>0){Je&&at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,$e[0].width,$e[0].height);for(let de=0,Ie=$e.length;de<Ie;de++)Te=$e[de],Je?z&&t.texSubImage2D(a.TEXTURE_2D,de,0,0,Te.width,Te.height,Ae,He,Te.data):t.texImage2D(a.TEXTURE_2D,de,Ce,Te.width,Te.height,0,Ae,He,Te.data);y.generateMipmaps=!1}else Je?(at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,oe.width,oe.height),z&&H(y,oe,Ae,He)):t.texImage2D(a.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Ae,He,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Je&&at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Ce,$e[0].width,$e[0].height,oe.depth);for(let de=0,Ie=$e.length;de<Ie;de++)if(Te=$e[de],y.format!==wn)if(Ae!==null)if(Je){if(z)if(y.layerUpdates.size>0){let Fe=bd(Te.width,Te.height,y.format,y.type);for(let xe of y.layerUpdates){let Xe=Te.data.subarray(xe*Fe/Te.data.BYTES_PER_ELEMENT,(xe+1)*Fe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,xe,Te.width,Te.height,1,Ae,Xe)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,oe.depth,Ae,Te.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,de,Ce,Te.width,Te.height,oe.depth,0,Te.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?z&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,0,Te.width,Te.height,oe.depth,Ae,He,Te.data):t.texImage3D(a.TEXTURE_2D_ARRAY,de,Ce,Te.width,Te.height,oe.depth,0,Ae,He,Te.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Je&&at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,$e[0].width,$e[0].height);for(let de=0,Ie=$e.length;de<Ie;de++)Te=$e[de],y.format!==wn?Ae!==null?Je?z&&t.compressedTexSubImage2D(a.TEXTURE_2D,de,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(a.TEXTURE_2D,de,Ce,Te.width,Te.height,0,Te.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?z&&t.texSubImage2D(a.TEXTURE_2D,de,0,0,Te.width,Te.height,Ae,He,Te.data):t.texImage2D(a.TEXTURE_2D,de,Ce,Te.width,Te.height,0,Ae,He,Te.data)}else if(y.isDataArrayTexture)if(Je){if(at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Ce,oe.width,oe.height,oe.depth),z)if(y.layerUpdates.size>0){let de=bd(oe.width,oe.height,y.format,y.type);for(let Ie of y.layerUpdates){let Fe=oe.data.subarray(Ie*de/oe.data.BYTES_PER_ELEMENT,(Ie+1)*de/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ie,oe.width,oe.height,1,Ae,He,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ae,He,oe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,Ae,He,oe.data);else if(y.isData3DTexture)Je?(at&&t.texStorage3D(a.TEXTURE_3D,Pe,Ce,oe.width,oe.height,oe.depth),z&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ae,He,oe.data)):t.texImage3D(a.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,Ae,He,oe.data);else if(y.isFramebufferTexture){if(at)if(Je)t.texStorage2D(a.TEXTURE_2D,Pe,Ce,oe.width,oe.height);else{let de=oe.width,Ie=oe.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(a.TEXTURE_2D,Fe,Ce,de,Ie,0,Ae,He,null),de>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){let de=a.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),oe.parentNode!==de){de.appendChild(oe),p.add(y),de.onpaint=Ie=>{let Fe=Ie.changedElements;for(let xe of p)Fe.includes(xe.image)&&(xe.needsUpdate=!0)},de.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,oe);else{let Fe=a.RGBA,xe=a.RGBA,Xe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Fe,xe,Xe,oe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if($e.length>0){if(Je&&at){let de=ye($e[0]);t.texStorage2D(a.TEXTURE_2D,Pe,Ce,de.width,de.height)}for(let de=0,Ie=$e.length;de<Ie;de++)Te=$e[de],Je?z&&t.texSubImage2D(a.TEXTURE_2D,de,0,0,Ae,He,Te):t.texImage2D(a.TEXTURE_2D,de,Ce,Ae,He,Te);y.generateMipmaps=!1}else if(Je){if(at){let de=ye(oe);t.texStorage2D(a.TEXTURE_2D,Pe,Ce,de.width,de.height)}z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ae,He,oe)}else t.texImage2D(a.TEXTURE_2D,0,Ce,Ae,He,oe);u(y)&&v(k),Ee.__version=_e.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function fe(R,y,O){if(y.image.length!==6)return;let k=Se(R,y),ne=y.source;t.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+O);let _e=n.get(ne);if(ne.version!==_e.__version||k===!0){t.activeTexture(a.TEXTURE0+O);let Ee=dt.getPrimaries(dt.workingColorSpace),ae=y.colorSpace===ba?null:dt.getPrimaries(y.colorSpace),oe=y.colorSpace===ba||Ee===ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,He=y.image[0]&&y.image[0].isDataTexture,Ce=[];for(let xe=0;xe<6;xe++)!Ae&&!He?Ce[xe]=m(y.image[xe],!0,i.maxCubemapSize):Ce[xe]=He?y.image[xe].image:y.image[xe],Ce[xe]=Be(y,Ce[xe]);let Te=Ce[0],$e=r.convert(y.format,y.colorSpace),Je=r.convert(y.type),at=_(y.internalFormat,$e,Je,y.normalized,y.colorSpace),z=y.isVideoTexture!==!0,Pe=_e.__version===void 0||k===!0,de=ne.dataReady,Ie=M(y,Te);Me(a.TEXTURE_CUBE_MAP,y);let Fe;if(Ae){z&&Pe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,at,Te.width,Te.height);for(let xe=0;xe<6;xe++){Fe=Ce[xe].mipmaps;for(let Xe=0;Xe<Fe.length;Xe++){let Ve=Fe[Xe];y.format!==wn?$e!==null?z?de&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,Ve.width,Ve.height,$e,Ve.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,at,Ve.width,Ve.height,0,Ve.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,Ve.width,Ve.height,$e,Je,Ve.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,at,Ve.width,Ve.height,0,$e,Je,Ve.data)}}}else{if(Fe=y.mipmaps,z&&Pe){Fe.length>0&&Ie++;let xe=ye(Ce[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(He){z?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ce[xe].width,Ce[xe].height,$e,Je,Ce[xe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Ce[xe].width,Ce[xe].height,0,$e,Je,Ce[xe].data);for(let Xe=0;Xe<Fe.length;Xe++){let At=Fe[Xe].image[xe].image;z?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,At.width,At.height,$e,Je,At.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,at,At.width,At.height,0,$e,Je,At.data)}}else{z?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,$e,Je,Ce[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,$e,Je,Ce[xe]);for(let Xe=0;Xe<Fe.length;Xe++){let Ve=Fe[Xe];z?de&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,$e,Je,Ve.image[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,at,$e,Je,Ve.image[xe])}}}u(y)&&v(a.TEXTURE_CUBE_MAP),_e.__version=ne.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function he(R,y,O,k,ne,_e){let Ee=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),oe=_(O.internalFormat,Ee,ae,O.normalized,O.colorSpace),Ae=n.get(y),He=n.get(O);if(He.__renderTarget=y,!Ae.__hasExternalTextures){let Ce=Math.max(1,y.width>>_e),Te=Math.max(1,y.height>>_e);ne===a.TEXTURE_3D||ne===a.TEXTURE_2D_ARRAY?t.texImage3D(ne,_e,oe,Ce,Te,y.depth,0,Ee,ae,null):t.texImage2D(ne,_e,oe,Ce,Te,0,Ee,ae,null)}t.bindFramebuffer(a.FRAMEBUFFER,R),me(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,k,ne,He.__webglTexture,0,ie(y)):(ne===a.TEXTURE_2D||ne>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,k,ne,He.__webglTexture,_e),t.bindFramebuffer(a.FRAMEBUFFER,null)}function D(R,y,O){if(a.bindRenderbuffer(a.RENDERBUFFER,R),y.depthBuffer){let k=y.depthTexture,ne=k&&k.isDepthTexture?k.type:null,_e=E(y.stencilBuffer,ne),Ee=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;me(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ie(y),_e,y.width,y.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,ie(y),_e,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,_e,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,R)}else{let k=y.textures;for(let ne=0;ne<k.length;ne++){let _e=k[ne],Ee=r.convert(_e.format,_e.colorSpace),ae=r.convert(_e.type),oe=_(_e.internalFormat,Ee,ae,_e.normalized,_e.colorSpace);me(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ie(y),oe,y.width,y.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,ie(y),oe,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,oe,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function re(R,y,O){let k=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(y.depthTexture);if(ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),ne.__webglTexture===void 0){ne.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture),Me(a.TEXTURE_CUBE_MAP,y.depthTexture);let Ae=r.convert(y.depthTexture.format),He=r.convert(y.depthTexture.type),Ce;y.depthTexture.format===Yn?Ce=a.DEPTH_COMPONENT24:y.depthTexture.format===Va&&(Ce=a.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ce,y.width,y.height,0,Ae,He,null)}}else q(y.depthTexture,0);let _e=ne.__webglTexture,Ee=ie(y),ae=k?a.TEXTURE_CUBE_MAP_POSITIVE_X+O:a.TEXTURE_2D,oe=y.depthTexture.format===Va?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===Yn)me(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,ae,_e,0,Ee):a.framebufferTexture2D(a.FRAMEBUFFER,oe,ae,_e,0);else if(y.depthTexture.format===Va)me(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,ae,_e,0,Ee):a.framebufferTexture2D(a.FRAMEBUFFER,oe,ae,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(R){let y=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let k=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),k){let ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",ne)};k.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=k}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)re(y.__webglFramebuffer[k],R,k);else{let k=R.texture.mipmaps;k&&k.length>0?re(y.__webglFramebuffer[0],R,0):re(y.__webglFramebuffer,R,0)}else if(O){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=a.createRenderbuffer(),D(y.__webglDepthbuffer[k],R,!1);else{let ne=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,_e=y.__webglDepthbuffer[k];a.bindRenderbuffer(a.RENDERBUFFER,_e),a.framebufferRenderbuffer(a.FRAMEBUFFER,ne,a.RENDERBUFFER,_e)}}else{let k=R.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),D(y.__webglDepthbuffer,R,!1);else{let ne=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,_e=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,_e),a.framebufferRenderbuffer(a.FRAMEBUFFER,ne,a.RENDERBUFFER,_e)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function ve(R,y,O){let k=n.get(R);y!==void 0&&he(k.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&pe(R)}function be(R){let y=R.texture,O=n.get(R),k=n.get(y);R.addEventListener("dispose",g);let ne=R.textures,_e=R.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(k.__webglTexture===void 0&&(k.__webglTexture=a.createTexture()),k.__version=y.version,s.memory.textures++),_e){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let oe=0;oe<y.mipmaps.length;oe++)O.__webglFramebuffer[ae][oe]=a.createFramebuffer()}else O.__webglFramebuffer[ae]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)O.__webglFramebuffer[ae]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(Ee)for(let ae=0,oe=ne.length;ae<oe;ae++){let Ae=n.get(ne[ae]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=a.createTexture(),s.memory.textures++)}if(R.samples>0&&me(R)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<ne.length;ae++){let oe=ne[ae];O.__webglColorRenderbuffer[ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);let Ae=r.convert(oe.format,oe.colorSpace),He=r.convert(oe.type),Ce=_(oe.internalFormat,Ae,He,oe.normalized,oe.colorSpace,R.isXRRenderTarget===!0),Te=ie(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,Te,Ce,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),D(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(_e){t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture),Me(a.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)he(O.__webglFramebuffer[ae][oe],R,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,oe);else he(O.__webglFramebuffer[ae],R,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);u(y)&&v(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ae=0,oe=ne.length;ae<oe;ae++){let Ae=ne[ae],He=n.get(Ae),Ce=a.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ce=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ce,He.__webglTexture),Me(Ce,Ae),he(O.__webglFramebuffer,R,Ae,a.COLOR_ATTACHMENT0+ae,Ce,0),u(Ae)&&v(Ce)}t.unbindTexture()}else{let ae=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ae,k.__webglTexture),Me(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)he(O.__webglFramebuffer[oe],R,y,a.COLOR_ATTACHMENT0,ae,oe);else he(O.__webglFramebuffer,R,y,a.COLOR_ATTACHMENT0,ae,0);u(y)&&v(ae),t.unbindTexture()}R.depthBuffer&&pe(R)}function Re(R){let y=R.textures;for(let O=0,k=y.length;O<k;O++){let ne=y[O];if(u(ne)){let _e=A(R),Ee=n.get(ne).__webglTexture;t.bindTexture(_e,Ee),v(_e),t.unbindTexture()}}}let ue=[],Q=[];function J(R){if(R.samples>0){if(me(R)===!1){let y=R.textures,O=R.width,k=R.height,ne=a.COLOR_BUFFER_BIT,_e=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ee=n.get(R),ae=y.length>1;if(ae)for(let Ae=0;Ae<y.length;Ae++)t.bindFramebuffer(a.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ee.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let oe=R.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=a.STENCIL_BUFFER_BIT)),ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);let He=n.get(y[Ae]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,O,k,0,0,O,k,ne,a.NEAREST),l===!0&&(ue.length=0,Q.length=0,ue.push(a.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ue.push(_e),Q.push(_e),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Q)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ae)for(let Ae=0;Ae<y.length;Ae++){t.bindFramebuffer(a.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ae]);let He=n.get(y[Ae]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ee.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,He,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function ie(R){return Math.min(i.maxSamples,R.samples)}function me(R){let y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function I(R){let y=s.render.frame;d.get(R)!==y&&(d.set(R,y),R.update())}function Be(R,y){let O=R.colorSpace,k=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Sr&&O!==ba&&(dt.getTransfer(O)===xt?(k!==wn||ne!==dn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",O)),y}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=U,this.getTextureUnits=F,this.setTextureUnits=G,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=se,this.rebindTextures=ve,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bb(a,e){function t(n,i=ba){let r,s=dt.getTransfer(i);if(n===dn)return a.UNSIGNED_BYTE;if(n===Vo)return a.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return a.UNSIGNED_SHORT_5_5_5_1;if(n===cd)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===dd)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===od)return a.BYTE;if(n===ld)return a.SHORT;if(n===ki)return a.UNSIGNED_SHORT;if(n===Ho)return a.INT;if(n===Gn)return a.UNSIGNED_INT;if(n===Tn)return a.FLOAT;if(n===Hn)return a.HALF_FLOAT;if(n===ud)return a.ALPHA;if(n===hd)return a.RGB;if(n===wn)return a.RGBA;if(n===Yn)return a.DEPTH_COMPONENT;if(n===Va)return a.DEPTH_STENCIL;if(n===jo)return a.RED;if(n===$o)return a.RED_INTEGER;if(n===ka)return a.RG;if(n===qo)return a.RG_INTEGER;if(n===Wo)return a.RGBA_INTEGER;if(n===Zr||n===Kr||n===Qr||n===es)if(s===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===Yo||n===Jo||n===Zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Qo||n===el||n===tl||n===nl||n===ts||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===Qo)return s===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tl)return r.COMPRESSED_R11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ts)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===il||n===rl||n===sl||n===ol||n===ll||n===cl||n===dl||n===ul||n===hl||n===pl||n===fl||n===ml||n===gl||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return s===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===bl||n===_l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return s===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===Sl||n===ns||n===Ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ns)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
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

}`,Ld=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gn({vertexShader:zb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nd=class extends Jn{constructor(e,t){super();let n=this,i=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,h=null,f=null,x=null,b=typeof XRWebGLBinding<"u",m=new Ld,u={},v=t.getContextAttributes(),A=null,_=null,E=[],M=[],w=new je,g=null,S=null,C=new Xt;C.viewport=new Rt;let P=new Xt;P.viewport=new Rt;let N=[C,P],U=new Oo,F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let H=E[V];return H===void 0&&(H=new Ni,E[V]=H),H.getTargetRaySpace()},this.getControllerGrip=function(V){let H=E[V];return H===void 0&&(H=new Ni,E[V]=H),H.getGripSpace()},this.getHand=function(V){let H=E[V];return H===void 0&&(H=new Ni,E[V]=H),H.getHandSpace()};function K(V){let H=M.indexOf(V.inputSource);if(H===-1)return;let ce=E[H];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||s),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function ee(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",q);for(let V=0;V<E.length;V++){let H=M[V];H!==null&&(M[V]=null,E[V].disconnect(H))}F=null,G=null,m.reset();for(let V in u)delete u[V];if(e.setRenderTarget(A),f=null,h=null,p=null,i=null,_=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(w.width,w.height,!1),S!==null){let V=S.camera;V.fov=S.fov,V.zoom=S.zoom,V.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,fe=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?Va:Yn,fe=v.stencil?ji:Gn);let D={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(D),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ln(h.textureWidth,h.textureHeight,{format:wn,type:dn,depthTexture:new Fa(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ln(f.framebufferWidth,f.framebufferHeight,{format:wn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(V){for(let H=0;H<V.removed.length;H++){let ce=V.removed[H],fe=M.indexOf(ce);fe>=0&&(M[fe]=null,E[fe].disconnect(ce))}for(let H=0;H<V.added.length;H++){let ce=V.added[H],fe=M.indexOf(ce);if(fe===-1){for(let D=0;D<E.length;D++)if(D>=M.length){M.push(ce),fe=D;break}else if(M[D]===null){M[D]=ce,fe=D;break}if(fe===-1)break}let he=E[fe];he&&he.connect(ce)}}let Z=new L,$=new L;function se(V,H,ce){Z.setFromMatrixPosition(H.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);let fe=Z.distanceTo($),he=H.projectionMatrix.elements,D=ce.projectionMatrix.elements,re=he[14]/(he[10]-1),pe=he[14]/(he[10]+1),ve=(he[9]+1)/he[5],be=(he[9]-1)/he[5],Re=(he[8]-1)/he[0],ue=(D[8]+1)/D[0],Q=re*Re,J=re*ue,ie=fe/(-Re+ue),me=ie*-Re;if(H.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(me),V.translateZ(ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),he[10]===-1)V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let I=re+ie,Be=pe+ie,ye=Q-me,R=J+(fe-me),y=ve*pe/Be*I,O=be*pe/Be*I;V.projectionMatrix.makePerspective(ye,R,y,O,I,Be),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function we(V,H){H===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(H.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let H=V.near,ce=V.far;m.texture!==null&&(m.depthNear>0&&(H=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),U.near=P.near=C.near=H,U.far=P.far=C.far=ce,(F!==U.near||G!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,G=U.far),U.layers.mask=V.layers.mask|6,C.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let fe=V.parent,he=U.cameras;we(U,fe);for(let D=0;D<he.length;D++)we(he[D],fe);he.length===2?se(U,C,P):U.projectionMatrix.copy(C.projectionMatrix),S===null&&V.isPerspectiveCamera&&(S={camera:V,fov:V.fov,zoom:V.zoom}),W(V,U,fe)};function W(V,H,ce){ce===null?V.matrix.copy(H.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(H.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ro*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(V){return u[V]};let ge=null;function Me(V,H){if(d=H.getViewerPose(c||s),x=H,d!==null){let ce=d.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let fe=!1;ce.length!==U.cameras.length&&(U.cameras.length=0,fe=!0);for(let pe=0;pe<ce.length;pe++){let ve=ce[pe],be=null;if(f!==null)be=f.getViewport(ve);else{let ue=p.getViewSubImage(h,ve);be=ue.viewport,pe===0&&(e.setRenderTargetTextures(_,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(_))}let Re=N[pe];Re===void 0&&(Re=new Xt,Re.layers.enable(pe),Re.viewport=new Rt,N[pe]=Re),Re.matrix.fromArray(ve.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ve.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(U.matrix.copy(Re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),fe===!0&&U.cameras.push(Re)}let he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let pe=p.getDepthInformation(ce[0]);pe&&pe.isValid&&pe.texture&&m.init(pe,i.renderState)}if(he&&he.includes("camera-access")&&b){e.state.unbindTexture(),p=n.getBinding();for(let pe=0;pe<ce.length;pe++){let ve=ce[pe].camera;if(ve){let be=u[ve];be||(be=new Nr,u[ve]=be);let Re=p.getCameraImage(ve);be.sourceTexture=Re}}}}for(let ce=0;ce<E.length;ce++){let fe=M[ce],he=E[ce];fe!==null&&he!==void 0&&he.update(fe,H,c||s)}ge&&ge(V,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),x=null}let Se=new bp;Se.setAnimationLoop(Me),this.setAnimationLoop=function(V){ge=V},this.dispose=function(){}}},Hb=new vt,Ap=new tt;Ap.set(-1,0,0,0,1,0,0,0,1);function Vb(a,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,gd(a)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,v,A,_){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),b(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,A):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===nn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===nn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=e.get(u),A=v.envMap,_=v.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(_)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ap),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,A){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=A*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function b(m,u){let v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kb(a,e,t,n){let i={},r={},s=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let M=E.program;n.uniformBlockBinding(_,M)}function c(_,E){let M=i[_.id];M===void 0&&(m(_),M=d(_),i[_.id]=M,_.addEventListener("dispose",v));let w=E.program;n.updateUBOMapping(_,w);let g=e.render.frame;r[_.id]!==g&&(h(_),r[_.id]=g)}function d(_){let E=p();_.__bindingPointIndex=E;let M=a.createBuffer(),w=_.__size,g=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,w,g),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,E,M),M}function p(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let E=i[_.id],M=_.uniforms,w=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,E);for(let g=0,S=M.length;g<S;g++){let C=M[g];if(Array.isArray(C))for(let P=0,N=C.length;P<N;P++)f(C[P],g,P,w);else f(C,g,0,w)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(_,E,M,w){if(b(_,E,M,w)===!0){let g=_.__offset,S=_.value;if(Array.isArray(S)){let C=0;for(let P=0;P<S.length;P++){let N=S[P],U=u(N);x(N,_.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(S,_.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,g,_.__data)}}function x(_,E,M){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,M)}function b(_,E,M,w){let g=_.value,S=E+"_"+M;if(w[S]===void 0)return typeof g=="number"||typeof g=="boolean"?w[S]=g:ArrayBuffer.isView(g)?w[S]=g.slice():w[S]=g.clone(),!0;{let C=w[S];if(typeof g=="number"||typeof g=="boolean"){if(C!==g)return w[S]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(C.equals(g)===!1)return C.copy(g),!0}}return!1}function m(_){let E=_.uniforms,M=0,w=16;for(let S=0,C=E.length;S<C;S++){let P=Array.isArray(E[S])?E[S]:[E[S]];for(let N=0,U=P.length;N<U;N++){let F=P[N],G=Array.isArray(F.value)?F.value:[F.value];for(let K=0,ee=G.length;K<ee;K++){let q=G[K],Z=u(q),$=M%w,se=$%Z.boundary,we=$+se;M+=se,we!==0&&w-we<Z.storage&&(M+=w-we),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Z.storage}}}let g=M%w;return g>0&&(M+=w-g),_.__size=M,_.__cache={},this}function u(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",_),E}function v(_){let E=_.target;E.removeEventListener("dispose",v);let M=s.indexOf(E.__bindingPointIndex);s.splice(M,1),a.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function A(){for(let _ in i)a.deleteBuffer(i[_]);s=[],i={},r={}}return{bind:l,update:c,dispose:A}}var jb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),na=null;function $b(){return na===null&&(na=new Dr(jb,16,16,ka,Hn),na.name="DFG_LUT",na.minFilter=Vt,na.magFilter=Vt,na.wrapS=Xn,na.wrapT=Xn,na.generateMipmaps=!1,na.needsUpdate=!0),na}var Il=class{constructor(e={}){let{canvas:t=jh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=dn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;let b=f,m=new Set([Wo,qo,$o]),u=new Set([dn,Gn,ki,ji,Vo,ko]),v=new Uint32Array(4),A=new Int32Array(4),_=new L,E=null,M=null,w=[],g=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,N=null,U=null,F=null,G=null;this._outputColorSpace=Wt;let K=0,ee=0,q=null,Z=-1,$=null,se=new Rt,we=new Rt,W=null,ge=new qe(0),Me=0,Se=t.width,V=t.height,H=1,ce=null,fe=null,he=new Rt(0,0,Se,V),D=new Rt(0,0,Se,V),re=!1,pe=new Ui,ve=!1,be=!1,Re=new vt,ue=new L,Q=new Rt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function me(){return q===null?H:1}let I=n;function Be(T,B){return t.getContext(T,B)}let ye,R,y,O,k,ne,_e,Ee,ae,oe,Ae,He,Ce,Te,$e,Je,at,z,Pe,de,Ie,Fe,xe;try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),I===null){let B="webgl2";if(I=Be(B,T),I===null)throw Be(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(T){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),Qe("WebGLRenderer: "+T.message),T}function Xe(){ye=new Kx(I),ye.init(),Ie=new Bb(I,ye),R=new Vx(I,ye,e,Ie),y=new Ub(I,ye),R.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),U=I.createFramebuffer(),F=I.createFramebuffer(),G=I.createFramebuffer(),O=new tv(I),k=new Sb,ne=new Ob(I,ye,y,k,R,Ie,O),_e=new Zx(C),Ee=new a0(I),Fe=new Gx(I,Ee),ae=new Qx(I,Ee,O,Fe),oe=new av(I,ae,Ee,Fe,O),z=new nv(I,R,ne),$e=new kx(k),Ae=new yb(C,_e,ye,R,Fe,$e),He=new Vb(C,k),Ce=new Eb,Te=new Pb(ye),at=new zx(C,_e,y,oe,x,l),Je=new Fb(C,oe,R),xe=new kb(I,O,R,y),Pe=new Hx(I,ye,O),de=new ev(I,ye,O),O.programs=Ae.programs,C.capabilities=R,C.extensions=ye,C.properties=k,C.renderLists=Ce,C.shadowMap=Je,C.state=y,C.info=O}b!==dn&&(S=new rv(b,t.width,t.height,o,i,r));let Ve=new Nd(C,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(Se,V,!1))},this.getSize=function(T){return T.set(Se,V)},this.setSize=function(T,B,te=!0){if(Ve.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=T,V=B,t.width=Math.floor(T*H),t.height=Math.floor(B*H),te===!0&&(t.style.width=T+"px",t.style.height=B+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Se*H,V*H).floor()},this.setDrawingBufferSize=function(T,B,te){Se=T,V=B,H=te,t.width=Math.floor(T*te),t.height=Math.floor(B*te),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(b===dn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(se)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,B,te,X){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,B,te,X),y.viewport(se.copy(he).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(D)},this.setScissor=function(T,B,te,X){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,B,te,X),y.scissor(we.copy(D).multiplyScalar(H).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){y.setScissorTest(re=T)},this.setOpaqueSort=function(T){ce=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,te=!0){let X=0;if(T){let Y=!1;if(q!==null){let Ne=q.texture.format;Y=m.has(Ne)}if(Y){let Ne=q.texture.type,Oe=u.has(Ne),Le=at.getClearColor(),ze=at.getClearAlpha(),ke=Le.r,it=Le.g,ot=Le.b;Oe?(v[0]=ke,v[1]=it,v[2]=ot,v[3]=ze,I.clearBufferuiv(I.COLOR,0,v)):(A[0]=ke,A[1]=it,A[2]=ot,A[3]=ze,I.clearBufferiv(I.COLOR,0,A))}else X|=I.COLOR_BUFFER_BIT}B&&(X|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),at.dispose(),Ce.dispose(),Te.dispose(),k.dispose(),_e.dispose(),oe.dispose(),Fe.dispose(),xe.dispose(),Ae.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Au),Ve.removeEventListener("sessionend",Tu),Wa.stop()};function At(T){T.preventDefault(),fd("WebGLRenderer: Context Lost."),P=!0}function mt(){fd("WebGLRenderer: Context Restored."),P=!1;let T=O.autoReset,B=Je.enabled,te=Je.autoUpdate,X=Je.needsUpdate,Y=Je.type;Xe(),O.autoReset=T,Je.enabled=B,Je.autoUpdate=te,Je.needsUpdate=X,Je.type=Y}function Dn(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $n(T){let B=T.target;B.removeEventListener("dispose",$n),em(B)}function em(T){tm(T),k.remove(T)}function tm(T){let B=k.get(T).programs;B!==void 0&&(B.forEach(function(te){Ae.releaseProgram(te)}),T.isShaderMaterial&&Ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,te,X,Y,Ne){B===null&&(B=J);let Oe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Le=im(T,B,te,X,Y);y.setMaterial(X,Oe);let ze=te.index,ke=1;if(X.wireframe===!0){if(ze=ae.getWireframeAttribute(te),ze===void 0)return;ke=2}let it=te.drawRange,ot=te.attributes.position,Ge=it.start*ke,gt=(it.start+it.count)*ke;Ne!==null&&(Ge=Math.max(Ge,Ne.start*ke),gt=Math.min(gt,(Ne.start+Ne.count)*ke)),ze!==null?(Ge=Math.max(Ge,0),gt=Math.min(gt,ze.count)):ot!=null&&(Ge=Math.max(Ge,0),gt=Math.min(gt,ot.count));let Ft=gt-Ge;if(Ft<0||Ft===1/0)return;Fe.setup(Y,X,Le,te,ze);let wt,St=Pe;if(ze!==null&&(wt=Ee.get(ze),St=de,St.setIndex(wt)),Y.isMesh)X.wireframe===!0?(y.setLineWidth(X.wireframeLinewidth*me()),St.setMode(I.LINES)):St.setMode(I.TRIANGLES);else if(Y.isLine){let jt=X.linewidth;jt===void 0&&(jt=1),y.setLineWidth(jt*me()),Y.isLineSegments?St.setMode(I.LINES):Y.isLineLoop?St.setMode(I.LINE_LOOP):St.setMode(I.LINE_STRIP)}else Y.isPoints?St.setMode(I.POINTS):Y.isSprite&&St.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let jt=Y._multiDrawStarts,Ue=Y._multiDrawCounts,en=Y._multiDrawCount,ht=ze?Ee.get(ze).bytesPerElement:1,yn=k.get(X).currentProgram.getUniforms();for(let qn=0;qn<en;qn++)yn.setValue(I,"_gl_DrawID",qn),St.render(jt[qn]/ht,Ue[qn])}else if(Y.isInstancedMesh)St.renderInstances(Ge,Ft,Y.count);else if(te.isInstancedBufferGeometry){let jt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ue=Math.min(te.instanceCount,jt);St.renderInstances(Ge,Ft,Ue)}else St.render(Ge,Ft)};function Eu(T,B,te,X){N!==null&&T.isNodeMaterial&&N.setObject(X,T),ve===!0&&$e.setState(T,te,!1),T.transparent===!0&&T.side===An&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,As(T,B,X),T.side=za,T.needsUpdate=!0,As(T,B,X),T.side=An):As(T,B,X)}this.compile=function(T,B,te=null){te===null&&(te=T),N!==null&&N.renderStart(T,B,te),M=Te.get(te),M.init(B),g.push(M),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),T!==te&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights(),N!==null&&N.updateLights(M.state.lightsArray),be=this.localClippingEnabled,ve=$e.init(this.clippingPlanes,be),ve===!0&&$e.setGlobalState(this.clippingPlanes,B),N!==null&&Je.render(M.state.shadowsArray,te,B);let X=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){let Le=Ne[Oe];Eu(Le,te,B,Y),X.add(Le)}else Eu(Ne,te,B,Y),X.add(Ne)}),M=g.pop(),N!==null&&N.renderEnd(),X},this.compileAsync=function(T,B,te=null){let X=this.compile(T,B,te);return new Promise(Y=>{function Ne(){if(X.forEach(function(Oe){let ze=k.get(Oe).currentProgram;(ze===void 0||ze.isReady())&&X.delete(Oe)}),X.size===0){Y(T);return}setTimeout(Ne,10)}ye.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let uc=null;function nm(T){uc&&uc(T)}function Au(){Wa.stop()}function Tu(){Wa.start()}let Wa=new bp;Wa.setAnimationLoop(nm),typeof self<"u"&&Wa.setContext(self),this.setAnimationLoop=function(T){uc=T,Ve.setAnimationLoop(T),T===null?Wa.stop():Wa.start()},Ve.addEventListener("sessionstart",Au),Ve.addEventListener("sessionend",Tu),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,B);let te=Ve.enabled===!0&&Ve.isPresenting===!0,X=S!==null&&(q===null||te)&&S.begin(C,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(B),B=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,B,q),M=Te.get(T,g.length),M.init(B),M.state.textureUnits=ne.getTextureUnits(),g.push(M),Re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),pe.setFromProjectionMatrix(Re,On,B.reversedDepth),be=this.localClippingEnabled,ve=$e.init(this.clippingPlanes,be),E=Ce.get(T,w.length),E.init(),w.push(E),Ve.enabled===!0&&Ve.isPresenting===!0){let Oe=C.xr.getDepthSensingMesh();Oe!==null&&hc(Oe,B,-1/0,C.sortObjects)}hc(T,B,0,C.sortObjects),E.finish(),N!==null&&N.updateLights(M.state.lightsArray),C.sortObjects===!0&&E.sort(ce,fe),ie=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,ie&&at.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&$e.beginShadows();let Y=M.state.shadowsArray;if(Je.render(Y,T,B),ve===!0&&$e.endShadows(),(X&&S.hasRenderPass())===!1){let Oe=E.opaque,Le=E.transmissive;if(M.setupLights(),B.isArrayCamera){let ze=B.cameras;if(Le.length>0)for(let ke=0,it=ze.length;ke<it;ke++){let ot=ze[ke];Cu(Oe,Le,T,ot)}ie&&at.render(T);for(let ke=0,it=ze.length;ke<it;ke++){let ot=ze[ke];wu(E,T,ot,ot.viewport)}}else Le.length>0&&Cu(Oe,Le,T,B),ie&&at.render(T),wu(E,T,B)}q!==null&&ee===0&&(ne.updateMultisampleRenderTarget(q),ne.updateRenderTargetMipmap(q)),X&&S.end(C),T.isScene===!0&&T.onAfterRender(C,T,B),Fe.resetDefaultState(),Z=-1,$=null,g.pop(),g.length>0?(M=g[g.length-1],ne.setTextureUnits(M.state.textureUnits),ve===!0&&$e.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,N!==null&&N.renderEnd()};function hc(T,B,te,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(pe)){X&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);let Oe=oe.update(T),Le=T.material;Le.visible&&E.push(T,Oe,Le,te,Q.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(pe))){let Oe=oe.update(T),Le=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Q.copy(T.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Q.copy(Oe.boundingSphere.center)),Q.applyMatrix4(T.matrixWorld).applyMatrix4(Re)),Array.isArray(Le)){let ze=Oe.groups;for(let ke=0,it=ze.length;ke<it;ke++){let ot=ze[ke],Ge=Le[ot.materialIndex];Ge&&Ge.visible&&E.push(T,Oe,Ge,te,Q.z,ot,B)}}else Le.visible&&E.push(T,Oe,Le,te,Q.z,null,B)}}let Ne=T.children;for(let Oe=0,Le=Ne.length;Oe<Le;Oe++)hc(Ne[Oe],B,te,X)}function wu(T,B,te,X){let{opaque:Y,transmissive:Ne,transparent:Oe}=T;M.setupLightsView(te),ve===!0&&$e.setGlobalState(C.clippingPlanes,te),X&&y.viewport(se.copy(X)),Y.length>0&&Es(Y,B,te),Ne.length>0&&Es(Ne,B,te),Oe.length>0&&Es(Oe,B,te),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Cu(T,B,te,X){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){let Ge=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new ln(1,1,{generateMipmaps:!0,type:Ge?Hn:dn,minFilter:Ha,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ne=M.state.transmissionRenderTarget[X.id],Oe=X.viewport||se;Ne.setSize(Oe.z*C.transmissionResolutionScale,Oe.w*C.transmissionResolutionScale);let Le=C.getRenderTarget(),ze=C.getActiveCubeFace(),ke=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(ge),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),ie&&at.render(te);let it=C.toneMapping;C.toneMapping=zn;let ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),ve===!0&&$e.setGlobalState(C.clippingPlanes,X),Es(T,te,X),ne.updateMultisampleRenderTarget(Ne),ne.updateRenderTargetMipmap(Ne),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let gt=0,Ft=B.length;gt<Ft;gt++){let wt=B[gt],{object:St,geometry:jt,material:Ue,group:en}=wt;if(Ue.side===An&&St.layers.test(X.layers)){let ht=Ue.side;Ue.side=nn,Ue.needsUpdate=!0,Ru(St,te,X,jt,Ue,en),Ue.side=ht,Ue.needsUpdate=!0,Ge=!0}}Ge===!0&&(ne.updateMultisampleRenderTarget(Ne),ne.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Le,ze,ke),C.setClearColor(ge,Me),ot!==void 0&&(X.viewport=ot),C.toneMapping=it}function Es(T,B,te){let X=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Ne=T.length;Y<Ne;Y++){let Oe=T[Y],{object:Le,geometry:ze,group:ke}=Oe,it=Oe.material;it.allowOverride===!0&&X!==null&&(it=X),Le.layers.test(te.layers)&&Ru(Le,B,te,ze,it,ke)}}function Ru(T,B,te,X,Y,Ne){N!==null&&Y.isNodeMaterial&&N.setObject(T,Y),T.onBeforeRender(C,B,te,X,Y,Ne),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(C,B,te,X,T,Ne),Y.transparent===!0&&Y.side===An&&Y.forceSinglePass===!1?(Y.side=nn,Y.needsUpdate=!0,C.renderBufferDirect(te,B,X,Y,T,Ne),Y.side=za,Y.needsUpdate=!0,C.renderBufferDirect(te,B,X,Y,T,Ne),Y.side=An):C.renderBufferDirect(te,B,X,Y,T,Ne),T.onAfterRender(C,B,te,X,Y,Ne)}function As(T,B,te){B.isScene!==!0&&(B=J);let X=k.get(T),Y=M.state.lights,Ne=M.state.shadowsArray,Oe=Y.state.version,Le=Ae.getParameters(T,Y.state,Ne,B,te,M.state.lightProbeGridArray),ze=Ae.getProgramCacheKey(Le),ke=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let it=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=_e.get(T.envMap||X.environment,it),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",$n),ke=new Map,X.programs=ke);let ot=ke.get(ze);if(ot!==void 0){if(X.currentProgram===ot&&X.lightsStateVersion===Oe)return Iu(T,Le),ot}else Le.uniforms=Ae.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,te,Le),T.onBeforeCompile(Le,C),ot=Ae.acquireProgram(Le,ze),ke.set(ze,ot),X.uniforms=Le.uniforms;let Ge=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=$e.uniform),Iu(T,Le),X.needsLights=sm(T),X.lightsStateVersion=Oe,X.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.sunLights.value=Y.state.sun,Ge.sunLightShadows.value=Y.state.sunShadow,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ge.sunShadowCascade.value=Y.state.sunShadowCascade,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=ot,X.uniformsList=null,ot}function Pu(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Wi.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Iu(T,B){let te=k.get(T);te.outputColorSpace=B.outputColorSpace,te.batching=B.batching,te.batchingColor=B.batchingColor,te.instancing=B.instancing,te.instancingColor=B.instancingColor,te.instancingMorph=B.instancingMorph,te.skinning=B.skinning,te.morphTargets=B.morphTargets,te.morphNormals=B.morphNormals,te.morphColors=B.morphColors,te.morphTargetsCount=B.morphTargetsCount,te.numClippingPlanes=B.numClippingPlanes,te.numIntersection=B.numClipIntersection,te.vertexAlphas=B.vertexAlphas,te.vertexTangents=B.vertexTangents,te.toneMapping=B.toneMapping}function am(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let te=0,X=T.length;te<X;te++){let Y=T[te];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function im(T,B,te,X,Y){B.isScene!==!0&&(B=J),ne.resetTextureUnits();let Ne=B.fog,Oe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Le=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:dt.workingColorSpace,ze=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,ke=_e.get(X.envMap||Oe,ze),it=X.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ot=!!te.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ge=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,Ft=!!te.morphAttributes.color,wt=zn;X.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(wt=C.toneMapping);let St=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,jt=St!==void 0?St.length:0,Ue=k.get(X),en=M.state.lights;if(ve===!0&&(be===!0||T!==$)){let Tt=T===$&&X.id===Z;$e.setState(X,T,Tt)}let ht=!1;X.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==en.state.version||Ue.outputColorSpace!==Le||Y.isBatchedMesh&&Ue.batching===!1||!Y.isBatchedMesh&&Ue.batching===!0||Y.isBatchedMesh&&Ue.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ue.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Y.isInstancedMesh&&Ue.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ue.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ue.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ue.instancingMorph===!1&&Y.morphTexture!==null||Ue.envMap!==ke||X.fog===!0&&Ue.fog!==Ne||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==$e.numPlanes||Ue.numIntersection!==$e.numIntersection)||Ue.vertexAlphas!==it||Ue.vertexTangents!==ot||Ue.morphTargets!==Ge||Ue.morphNormals!==gt||Ue.morphColors!==Ft||Ue.toneMapping!==wt||Ue.morphTargetsCount!==jt||!!Ue.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Ue.__version=X.version);let yn=Ue.currentProgram;ht===!0&&(yn=As(X,B,Y),N&&X.isNodeMaterial&&N.onUpdateProgram(X,yn,Ue));let qn=!1,Ta=!1,hi=!1,yt=yn.getUniforms(),Lt=Ue.uniforms;if(y.useProgram(yn.program)&&(qn=!0,Ta=!0,hi=!0),X.id!==Z&&(Z=X.id,Ta=!0),Ue.needsLights){let Tt=am(M.state.lightProbeGridArray,Y);Ue.lightProbeGrid!==Tt&&(Ue.lightProbeGrid=Tt,Ta=!0)}if(qn||$!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(I,"projectionMatrix",T.projectionMatrix),yt.setValue(I,"viewMatrix",T.matrixWorldInverse);let Ca=yt.map.cameraPosition;Ca!==void 0&&Ca.setValue(I,ue.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Ta=!0,hi=!0)}if(Ue.needsLights&&(en.state.sunShadowMap.length>0&&yt.setValue(I,"sunShadowMap",en.state.sunShadowMap,ne),en.state.directionalShadowMap.length>0&&yt.setValue(I,"directionalShadowMap",en.state.directionalShadowMap,ne),en.state.spotShadowMap.length>0&&yt.setValue(I,"spotShadowMap",en.state.spotShadowMap,ne),en.state.pointShadowMap.length>0&&yt.setValue(I,"pointShadowMap",en.state.pointShadowMap,ne)),Y.isSkinnedMesh){yt.setOptional(I,Y,"bindMatrix"),yt.setOptional(I,Y,"bindMatrixInverse");let Tt=Y.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),yt.setValue(I,"boneTexture",Tt.boneTexture,ne))}Y.isBatchedMesh&&(yt.setOptional(I,Y,"batchingTexture"),yt.setValue(I,"batchingTexture",Y._matricesTexture,ne),yt.setOptional(I,Y,"batchingIdTexture"),yt.setValue(I,"batchingIdTexture",Y._indirectTexture,ne),yt.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",Y._colorsTexture,ne));let wa=te.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0)&&z.update(Y,te,yn),(Ta||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,yt.setValue(I,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Lt.envMapIntensity.value=B.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=$b()),Ta){if(yt.setValue(I,"toneMappingExposure",C.toneMappingExposure),Ue.needsLights&&rm(Lt,hi),Ne&&X.fog===!0&&He.refreshFogUniforms(Lt,Ne),He.refreshMaterialUniforms(Lt,X,H,V,M.state.transmissionRenderTarget[T.id]),Ue.needsLights&&Ue.lightProbeGrid){let Tt=Ue.lightProbeGrid;Lt.probesSH.value=Tt.texture,Lt.probesMin.value.copy(Tt.boundingBox.min),Lt.probesMax.value.copy(Tt.boundingBox.max),Lt.probesResolution.value.copy(Tt.resolution)}Wi.upload(I,Pu(Ue),Lt,ne)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Wi.upload(I,Pu(Ue),Lt,ne),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yt.setValue(I,"center",Y.center),yt.setValue(I,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(I,"normalMatrix",Y.normalMatrix),yt.setValue(I,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Tt=X.uniformsGroups;for(let Ca=0,pi=Tt.length;Ca<pi;Ca++){let Lu=Tt[Ca];xe.update(Lu,yn),xe.bind(Lu,yn)}}return yn}function rm(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function sm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,B,te){let X=k.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),k.get(T.texture).__webglTexture=B,k.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:te,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let te=k.get(T);te.__webglFramebuffer=B,te.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,te=0){q=T,K=B,ee=te;let X=null,Y=!1,Ne=!1;if(T){let Le=k.get(T);if(Le.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,Le.__webglFramebuffer),se.copy(T.viewport),we.copy(T.scissor),W=T.scissorTest,y.viewport(se),y.scissor(we),y.setScissorTest(W),Z=-1;return}else if(Le.__webglFramebuffer===void 0)ne.setupRenderTarget(T);else if(Le.__hasExternalTextures)ne.rebindTextures(T,k.get(T.texture).__webglTexture,k.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let it=T.depthTexture;if(Le.__boundDepthTexture!==it){if(it!==null&&k.has(it)&&(T.width!==it.image.width||T.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(T)}}let ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);let ke=k.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?X=ke[B][te]:X=ke[B],Y=!0):T.samples>0&&ne.useMultisampledRTT(T)===!1?X=k.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[te]:X=ke,se.copy(T.viewport),we.copy(T.scissor),W=T.scissorTest}else se.copy(he).multiplyScalar(H).floor(),we.copy(D).multiplyScalar(H).floor(),W=re;if(te!==0&&(X=U),y.bindFramebuffer(I.FRAMEBUFFER,X)&&y.drawBuffers(T,X),y.viewport(se),y.scissor(we),y.setScissorTest(W),Y){let Le=k.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,te)}else if(Ne){let Le=B;for(let ze=0;ze<T.textures.length;ze++){let ke=k.get(T.textures[ze]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ze,ke.__webglTexture,te,Le)}}else if(T!==null&&te!==0){let Le=k.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,te)}Z=-1};function Du(T){let B=k.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=R.textureFormatReadable(T.format),B.__typeReadable=R.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,te,X,Y,Ne,Oe,Le=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=k.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){y.bindFramebuffer(I.FRAMEBUFFER,ze);try{let ke=T.textures[Le],it=ke.format,ot=ke.type;T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le);let Ge=Du(ke);if(Ge.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&te>=0&&te<=T.height-Y&&I.readPixels(B,te,X,Y,Ie.convert(it),Ie.convert(ot),Ne)}finally{let ke=q!==null?k.get(q).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,B,te,X,Y,Ne,Oe,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=k.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(B>=0&&B<=T.width-X&&te>=0&&te<=T.height-Y){y.bindFramebuffer(I.FRAMEBUFFER,ze);let ke=T.textures[Le],it=ke.format,ot=ke.type;T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le);let Ge=Du(ke);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,gt),I.bufferData(I.PIXEL_PACK_BUFFER,Ne.byteLength,I.STREAM_READ),I.readPixels(B,te,X,Y,Ie.convert(it),Ie.convert(ot),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Ft=q!==null?k.get(q).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,Ft);let wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qh(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,gt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ne),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(gt),I.deleteSync(wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,te=0){let X=Math.pow(2,-te),Y=Math.floor(T.image.width*X),Ne=Math.floor(T.image.height*X),Oe=B!==null?B.x:0,Le=B!==null?B.y:0;ne.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,te,0,0,Oe,Le,Y,Ne),y.unbindTexture()},this.copyTextureToTexture=function(T,B,te=null,X=null,Y=0,Ne=0){let Oe,Le,ze,ke,it,ot,Ge,gt,Ft,wt=T.isCompressedTexture?T.mipmaps[Ne]:T.image;if(te!==null)Oe=te.max.x-te.min.x,Le=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,it=te.min.y,ot=te.isBox3?te.min.z:0;else{let Lt=Math.pow(2,-Y);Oe=Math.floor(wt.width*Lt),Le=Math.floor(wt.height*Lt),T.isDataArrayTexture?ze=wt.depth:T.isData3DTexture?ze=Math.floor(wt.depth*Lt):ze=1,ke=0,it=0,ot=0}X!==null?(Ge=X.x,gt=X.y,Ft=X.z):(Ge=0,gt=0,Ft=0);let St=Ie.convert(B.format),jt=Ie.convert(B.type),Ue;B.isData3DTexture?(ne.setTexture3D(B,0),Ue=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ne.setTexture2DArray(B,0),Ue=I.TEXTURE_2D_ARRAY):(ne.setTexture2D(B,0),Ue=I.TEXTURE_2D),y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let en=y.getParameter(I.UNPACK_ROW_LENGTH),ht=y.getParameter(I.UNPACK_IMAGE_HEIGHT),yn=y.getParameter(I.UNPACK_SKIP_PIXELS),qn=y.getParameter(I.UNPACK_SKIP_ROWS),Ta=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,wt.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(I.UNPACK_SKIP_ROWS,it),y.pixelStorei(I.UNPACK_SKIP_IMAGES,ot);let hi=T.isDataArrayTexture||T.isData3DTexture,yt=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Lt=k.get(T),wa=k.get(B),Tt=k.get(Lt.__renderTarget),Ca=k.get(wa.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,Tt.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ca.__webglFramebuffer);for(let pi=0;pi<ze;pi++)hi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(T).__webglTexture,Y,ot+pi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(B).__webglTexture,Ne,Ft+pi)),I.blitFramebuffer(ke,it,Oe,Le,Ge,gt,Oe,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||k.has(T)){let Lt=k.get(T),wa=k.get(B);y.bindFramebuffer(I.READ_FRAMEBUFFER,F),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,G);for(let Tt=0;Tt<ze;Tt++)hi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,Y,ot+Tt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,Y),yt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wa.__webglTexture,Ne,Ft+Tt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wa.__webglTexture,Ne),Y!==0?I.blitFramebuffer(ke,it,Oe,Le,Ge,gt,Oe,Le,I.COLOR_BUFFER_BIT,I.NEAREST):yt?I.copyTexSubImage3D(Ue,Ne,Ge,gt,Ft+Tt,ke,it,Oe,Le):I.copyTexSubImage2D(Ue,Ne,Ge,gt,ke,it,Oe,Le);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Ue,Ne,Ge,gt,Ft,Oe,Le,ze,St,jt,wt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Ue,Ne,Ge,gt,Ft,Oe,Le,ze,St,wt.data):I.texSubImage3D(Ue,Ne,Ge,gt,Ft,Oe,Le,ze,St,jt,wt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ne,Ge,gt,Oe,Le,St,jt,wt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ne,Ge,gt,wt.width,wt.height,St,wt.data):I.texSubImage2D(I.TEXTURE_2D,Ne,Ge,gt,Oe,Le,St,jt,wt);y.pixelStorei(I.UNPACK_ROW_LENGTH,en),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),y.pixelStorei(I.UNPACK_SKIP_PIXELS,yn),y.pixelStorei(I.UNPACK_SKIP_ROWS,qn),y.pixelStorei(I.UNPACK_SKIP_IMAGES,Ta),Ne===0&&B.generateMipmaps&&I.generateMipmap(Ue),y.unbindTexture()},this.initRenderTarget=function(T){k.get(T).__webglFramebuffer===void 0&&ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){K=0,ee=0,q=null,y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Nl=a=>typeof matchMedia=="function"?matchMedia(a):{matches:!1,addEventListener(){}},Yi=Nl("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&Nl("(hover: none)").matches,eM=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,tM=Nl("(display-mode: standalone)").matches||Nl("(display-mode: fullscreen)").matches||navigator.standalone===!0,Tp=new URLSearchParams(location.search),qb={aces:"aces",agx:"agx",neutral:"neutral"},Fl={variante:Tp.get("visual")==="nuevo"?"nuevo":"base",get nuevo(){return this.variante==="nuevo"},tono:qb[Tp.get("tono")]??null};function wp(){let a=window.devicePixelRatio||1,e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??8,n=Yi&&(e<=3||t<=4);return Yi?{movil:!0,bajo:n,pixelRatio:Math.min(a,n?1.15:1.5),minPixelRatio:.8,sombra:n?512:1024,antialias:a<2,lluvia:n?.35:.55,autosPorCarril:n?2:3}:{movil:!1,bajo:!1,pixelRatio:Math.min(a,1.75),minPixelRatio:1,sombra:2048,antialias:!0,lluvia:1,autosPorCarril:4}}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(a,e,t,n,i=0){let r=Math.max(0,Math.min(typeof i=="number"?i:i?.[0]??0,t/2,n/2));return this.moveTo(a+r,e),this.arcTo(a+t,e,a+t,e+n,r),this.arcTo(a+t,e+n,a,e+n,r),this.arcTo(a,e+n,a,e,r),this.arcTo(a,e,a+t,e,r),this.closePath(),this});var ct=a=>String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Fd={via:"Calle 50 Luisa, Sabana Norte, San Jos\xE9",atribucion:"\xA9 OpenStreetMap contributors (ODbL)",eje:[[12.75,-245.62],[7.04,-157.59],[-1.69,-41.67],[-2.78,6.89],[-3.6,24.31],[-5.75,55.28],[-7.13,78.66],[-8.96,128.18],[-9.45,141.34],[-10.83,178.46],[-12.75,245.62]],largo:492.1,cruces:[{d:88.2,p:[7.04,-157.59],vias:["service:sin nombre"]},{d:204.5,p:[-1.69,-41.67],vias:["residential:sin nombre","service:sin nombre"]},{d:253.1,p:[-2.78,6.89],vias:["service:sin nombre"]},{d:270.6,p:[-3.6,24.31],vias:["service:sin nombre"]},{d:301.6,p:[-5.75,55.28],vias:["residential:Avenida 9"]},{d:325,p:[-7.13,78.66],vias:["service:sin nombre"]},{d:374.6,p:[-8.96,128.18],vias:["service:sin nombre"]},{d:387.8,p:[-9.45,141.34],vias:["service:sin nombre"]},{d:424.9,p:[-10.83,178.46],vias:["service:sin nombre"]},{d:492.1,p:[-12.75,245.62],vias:["residential:Calle 50","secondary:Avenida de Las Am\xE9ricas"]}],postes:[{id:"P01",p:[-3.32,-88.06],lado:"oeste",material:"concreto",herrajes:["cruceta","aisladores","reservas de fibra en aro (3 o m\xE1s)"],d:158.4},{id:"P02",p:[6.04,-76.43],lado:"este",material:"concreto",herrajes:["cruceta","aisladores","luminaria"],d:169.2},{id:"P04",p:[4.93,-61.74],lado:"este",material:"met\xE1lico gris sobre pedestal de concreto",herrajes:["brazo diagonal","retenida con protector amarillo (28 s)"],d:184},{id:"P05",p:[-7.06,-30.25],lado:"oeste",material:"concreto",herrajes:["transformador","reservas de fibra en aro","caja de empalme (47 s)"],d:216},{id:"P06",p:[-8.36,16.97],lado:"oeste",material:"concreto",herrajes:["reservas de fibra en aro (5 o m\xE1s)","marcas de colores de operadores (~2 m)"],d:263.5},{id:"P07",p:[-10.42,48.85],lado:"oeste",material:"concreto",herrajes:["transformador","luminaria"],d:295.5},{id:"P08",p:[-13.03,100.22],lado:"oeste",material:"concreto",herrajes:["haz telecom grande"],d:346.8},{id:"P09",p:[-14.7,145.19],lado:"oeste",material:"concreto",herrajes:["luminaria"],d:391.8},{id:"P12",p:[-6.79,215.69],lado:"este",material:"concreto",herrajes:["luminaria"],d:462},{id:"P11",p:[-7.78,250.32],lado:"este",material:"concreto con franja amarilla y negra",herrajes:["reservas de fibra en aro"],d:496.7}],tendido:[{de:"P01",a:"P05"},{de:"P05",a:"P06"},{de:"P06",a:"P07"},{de:"P07",a:"P08"},{de:"P08",a:"P09"},{de:"P09",a:"P12",nota:"cruza la calle"},{de:"P12",a:"P11"}],arboles:[[-7.17,-25.14],[-7.31,-18.74],[-7.45,-12.33],[-7.59,-5.92],[-7.74,.49],[-7.88,6.75],[-8.19,13.14],[-8.48,19.52],[-8.82,25.8],[-9.26,32.2],[-9.71,38.6],[-10.15,45.01],[-10.6,51.41],[-11.01,57.87],[-11.39,64.27],[-11.77,70.68],[-12.14,77.08],[-12.41,83.3],[-12.63,89.34],[-12.86,95.38],[-13.08,101.42],[-13.31,107.46],[-13.53,113.5],[-13.74,119.54],[-13.97,125.57],[-14.22,132.29],[-14.48,139.46],[-14.74,146.63],[-15.02,153.83],[-15.28,161.01],[-15.55,168.2],[-15.82,175.39],[-16.05,182.45],[-16.24,189.34],[-16.44,196.24],[-16.64,203.14],[-16.84,210.04],[-17.03,216.93]],otros:[{que:"retenida (viento) con protector amarillo",p:[4.64,-57.9],lado:"este",d:187.8},{que:"gabinete verde con r\xF3tulos de peligro y bolardo amarillo",p:[3.49,-42.57],lado:"este",d:203.2},{que:"caja de empalme en el tendido P01-P05",p:[-6.97,-34.1],lado:"oeste",d:212.2},{que:"se\xF1al de zona escolar",p:[-7.77,1.76],lado:"oeste",d:248.1},{que:"parqu\xEDmetro solar",p:[-8.31,15.7],lado:"oeste",d:262.2},{que:"espacios de estacionamiento 5019 \u2192 5001, 5,7 m cada uno",p:[-8.6,22.07],lado:"oeste",d:268.6},{que:"se\xF1al de estacionamiento E",p:[-9.88,41.17],lado:"oeste",d:287.8},{que:"se\xF1al 25 KPH velocidad m\xE1xima",p:[-11.39,64.27],lado:"oeste",d:310.9},{que:"se\xF1al de zona escolar",p:[-12.68,90.55],lado:"oeste",d:337.1},{que:"se\xF1al de estacionamiento E",p:[-13.21,105.05],lado:"oeste",d:351.6},{que:"se\xF1al de ALTO en la esquina",p:[-17.58,236.24],lado:"oeste",d:482.9},{que:"verja gris sobre muro bajo, al fondo de la acera",p:[-7.17,-25.14],lado:"oeste",d:221.2},{que:"verja y portones azules, al fondo de la acera",p:[-8.67,23.35],lado:"oeste",d:269.9}],lugares:[{nombre:"MEP - Edificio Bloque A",d:0,a:24,lado:"este"},{nombre:"Avenida 17",d:0,a:60,lado:"este"},{nombre:"MEP - Parqueo Este",d:88.2,a:37,lado:"este"},{nombre:"Museo Hist\xF3rico y Tecnol\xF3gico Grupo ICE",d:88.2,a:42,lado:"oeste"},{nombre:"Suites Cristina",d:88.2,a:38,lado:"este"},{nombre:"MEP - Edificio Bloque B",d:88.2,a:52,lado:"este"},{nombre:"Palma Real Hotel y Casino",d:204.5,a:42,lado:"este"},{nombre:"Parque Palma Real",d:204.5,a:21,lado:"este"},{nombre:"Cond. Corobic\xED del Oeste",d:253.1,a:32,lado:"este"},{nombre:"MTA",d:253.1,a:32,lado:"este"},{nombre:"Cond. Menorca",d:270.6,a:26,lado:"este"},{nombre:"Consensus Abogados",d:325,a:20,lado:"este"},{nombre:"Restaurant Flor de Loto",d:325,a:29,lado:"este"},{nombre:"Aptos. Balot de Escaz\xFA",d:325,a:20,lado:"este"},{nombre:"Oficentro Las Torres",d:374.6,a:19,lado:"este"},{nombre:"Soka Gakkai Internacional de Costa Rica",d:424.9,a:18,lado:"este"},{nombre:"Soda Alberto",d:424.9,a:29,lado:"este"},{nombre:"Subway",d:492.1,a:26,lado:"este"},{nombre:"Agencia ICE",d:492.1,a:36,lado:"este"},{nombre:"ICE",d:492.1,a:21,lado:"oeste"},{nombre:"ICE Sabana",d:492.1,a:20,lado:"oeste"},{nombre:"Uno Sports",d:492.1,a:34,lado:"este"},{nombre:"KFC",d:492.1,a:41,lado:"este"},{nombre:"Avenida de Las Am\xE9ricas",d:492.1,a:13,lado:"oeste"}]};var Ji={x0:-3468.56,z0:-2412.63,paso:10,w:641,h:600,escala:60,lat0:9.94045,lon0:-84.102,kx:1827.481,kz:1842.333,origen:1134,fuente:"Terrain Tiles (Mapzen, AWS Open Data): SRTM, GMTED2010, ETOPO1 y otras fuentes abiertas"};var Cp="./datos-BGOTRZWN.bin";function Rp(a){let e=[],t=0;for(let s=0;s<a.length-1;s++){let[o,l]=a[s],[c,d]=a[s+1],p=Math.hypot(c-o,d-l);e.push({x0:o,z0:l,tx:(c-o)/p,tz:(d-l)/p,l:p,d0:t}),t+=p}let n=s=>{let o=e[0];for(let l of e)if(l.d0<=s)o=l;else break;return o};function i(s,o=0,l={}){let c=n(s),d=s-c.d0;return l.x=c.x0+c.tx*d+c.tz*o,l.z=c.z0+c.tz*d-c.tx*o,l.tx=c.tx,l.tz=c.tz,l}function r(s,o,l={}){let c=1/0;for(let d=0;d<e.length;d++){let p=e[d],h=s-p.x0,f=o-p.z0,x=h*p.tx+f*p.tz;d>0&&(x=Math.max(0,x)),d<e.length-1&&(x=Math.min(p.l,x));let b=h-p.tx*x,m=f-p.tz*x,u=b*b+m*m;u<c&&(c=u,l.d=p.d0+x,l.a=b*p.tz-m*p.tx)}return l}return{largo:t,en:i,aVia:r}}function Pp(a,e,t,n){let i={},r={};return function(o,l){for(let h of t){let f=o.x-h.x,x=o.z-h.z,b=h.r+l,m=f*f+x*x;if(m<b*b&&m>1e-9){let u=b/Math.sqrt(m);o.x=h.x+f*u,o.z=h.z+x*u}}a.aVia(o.x,o.z,i);let c=Math.max(n.d0,Math.min(n.d1,i.d)),d=Math.max(-n.a,Math.min(n.a,i.a)),p=c!==i.d||d!==i.a;i.d=c,i.a=d;for(let h of e){if(i.d<=h.d0-l||i.d>=h.d1+l||i.a<=h.a0-l||i.a>=h.a1+l)continue;let f=i.d-(h.d0-l),x=h.d1+l-i.d,b=i.a-(h.a0-l),m=h.a1+l-i.a,u=Math.min(f,x,b,m);u===f?i.d=h.d0-l:u===x?i.d=h.d1+l:u===b?i.a=h.a0-l:i.a=h.a1+l,p=!0}return p&&(a.en(i.d,i.a,r),o.x=r.x,o.z=r.z),o}}var Ul=new qe;function _a(){let a=[],e=[],t=[],n=[];function i(l,c,d,p,h,f){let x=a.length/3;Ul.set(h);for(let b of[l,c,d,p])a.push(b[0],b[1],b[2]),e.push(Ul.r,Ul.g,Ul.b);f?t.push(...f):t.push(0,0,0,0,0,0,0,0),n.push(x,x+1,x+2,x,x+2,x+3)}function r(l,c,d,p,{techo:h=p,bahia:f=0,piso:x=3.2}={}){for(let b=0;b<4;b++){let m=l[b],u=l[(b+1)%4],v=f?Math.max(1,Math.round(Math.hypot(u[0]-m[0],u[1]-m[1])/f)):0,A=f?Math.max(1,Math.round((d-c)/x)):0;i([m[0],c,m[1]],[u[0],c,u[1]],[u[0],d,u[1]],[m[0],d,m[1]],p,[0,0,v,0,v,A,0,A])}i([l[0][0],d,l[0][1]],[l[1][0],d,l[1][1]],[l[2][0],d,l[2][1]],[l[3][0],d,l[3][1]],h)}function s(l,c,d,p,h,f,x,b=0,m){let u=Math.cos(b),v=Math.sin(b),A=p/2,_=f/2;r([[-A,-_],[-A,_],[A,_],[A,-_]].map(([E,M])=>[l+E*u+M*v,d-E*v+M*u]),c,c+h,x,m)}function o(){let l=new ut;return l.setAttribute("position",new et(a,3)),l.setAttribute("color",new et(e,3)),l.setAttribute("uv",new et(t,2)),l.setIndex(n),l.computeVertexNormals(),l}return{quad:i,prisma:r,caja:s,geometria:o}}var Ol=a=>()=>{a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};var Pt={asfalto:3882564,pintura:15329244,amarillo:14924079,acera:12433838,cordon:9736330,lote:7314520,pasto:6064713,concreto:11117980,madera:7035723,metal:9212569,losa:7630955,zinc:9325370},Ip=[14273972,13219740,14934230,12109004,14203296,13620930,14731686,11122630],an=3.65,Bl=6,vn=64,zl=3.25,kt=.15,Gl=.9,Dp=-2.45,Jb=[[/ICE Sabana/,{pisos:13,color:3108789,cartel:739983}],[/ICE|Museo/,{pisos:4,color:3834564,cartel:739983}],[/Hotel|Casino/,{pisos:9,color:15129016,cartel:8007214}],[/Cond|Aptos|Suites|Torres|MEP|Abogados|Soka/,{pisos:6,cartel:4082262}],[/Soda|Subway|KFC|Restaurant|Sports|MTA/,{pisos:1,cartel:10107678}]];function Zb(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,64),e.fillStyle="#e4e4e0",e.fillRect(0,58,64,6),e.fillStyle="#d2d2cc",e.fillRect(16,14,32,32);let t=e.createLinearGradient(0,16,0,44);t.addColorStop(0,"#7f9db5"),t.addColorStop(1,"#3d5468"),e.fillStyle=t,e.fillRect(18,16,28,28),e.fillStyle="#d2d2cc",e.fillRect(31,16,2,28);let n=new Oi(a);return n.wrapS=n.wrapT=Pi,n.colorSpace=Wt,n.anisotropy=4,n}function Lp(a,e){let t=Ol(50),n={},i=_a(),r=_a(),s=_a(),o=_a(),l=(D,re,pe=0)=>(e.en(D,re,n),[n.x,pe,n.z]),c=D=>(e.en(D,0,n),Math.atan2(n.tx,n.tz));function d(D,re,pe,ve,be,Re,ue,Q=8){let J=Math.max(1,Math.ceil((pe-re)/Q));for(let ie=0;ie<J;ie++){let me=re+(pe-re)*ie/J,I=re+(pe-re)*(ie+1)/J;D.quad(l(me,ve,Re),l(I,ve,Re),l(I,be,Re),l(me,be,Re),ue)}}let p=(D,re,pe,ve,be,Re,ue)=>{let Q=l(D,re),J=l(pe,ve);i.quad([Q[0],be,Q[2]],[J[0],be,J[2]],[J[0],Re,J[2]],[Q[0],Re,Q[2]],ue)},h=[0,...a.cruces.filter(D=>D.vias.some(re=>/^(residential|secondary)/.test(re))).map(D=>D.d)],f=-14,x=e.largo+14;d(i,f-60,x+60,-vn-40,vn+40,-.03,Pt.pasto,40),d(i,f,x,-an,an,0,Pt.asfalto);for(let D of h)for(let re of[-1,1])d(i,D-zl,D+zl,re>0?an:-vn-40,re>0?vn+40:-an,0,Pt.asfalto,8);let b=[];for(let D=0;D<h.length-1;D++)b.push([h[D]+zl,h[D+1]-zl]);for(let[D,re]of b)for(let pe of[-1,1]){let ve=pe>0?an:-Bl,be=pe>0?Bl:-an,Re=pe>0?Bl:-vn,ue=pe>0?vn:-Bl;d(i,D,re,ve,be,kt,Pt.acera),d(i,D,re,Re,ue,kt,Pt.lote,16);let Q=Math.ceil((re-D)/8);for(let J=0;J<Q;J++){let ie=D+(re-D)*J/Q,me=D+(re-D)*(J+1)/Q;pe>0?p(ie,an,me,an,0,kt,Pt.cordon):p(me,-an,ie,-an,0,kt,Pt.cordon)}pe>0?(p(D,vn,D,an,0,kt,Pt.cordon),p(re,an,re,vn,0,kt,Pt.cordon)):(p(D,-an,D,-vn,0,kt,Pt.cordon),p(re,-vn,re,-an,0,kt,Pt.cordon))}for(let D of[-1,1])d(i,f,x,D*3.42-.05,D*3.42+.05,.012,Pt.amarillo);let m=a.otros.find(D=>/espacios de estacionamiento/.test(D.que)),u={d0:m.d,n:19,paso:5.7,a:Dp};d(i,m.d-1,m.d+u.n*u.paso,-1.36,-1.26,.012,Pt.pintura);for(let D=0;D<=u.n;D++)d(i,m.d+D*5.7-.05,m.d+D*5.7+.05,-3.4,-1.3,.012,Pt.pintura);d(i,e.largo-6.4,e.largo-6,-1.3,3.4,.012,Pt.pintura);let v=[],A=[],_=[];for(let[D,re]of b)for(let pe of["este","oeste"])for(let ve=D+4;ve<re-12;){let be=Math.min(14+t()*16,re-4-ve),Re=7.4+t()*3,ue=12+t()*10;v.push({lado:pe,d0:ve,d1:ve+be,frente:Re,fondo:ue,pisos:1+Math.floor(t()*t()*5),color:Ip[Math.floor(t()*Ip.length)]}),ve+=be+1.5+t()*3}let E=[];for(let D of a.lugares){let re=v.filter(be=>be.lado===D.lado&&!be.nombre);if(!re.length)continue;let pe=re.reduce((be,Re)=>Math.abs((Re.d0+Re.d1)/2-D.d)<Math.abs((be.d0+be.d1)/2-D.d)?Re:be);if(pe.nombre=D.nombre,/Parque|Parqueo/.test(D.nombre)){pe.vacio=!0;continue}let ve=Jb.find(([be])=>be.test(D.nombre))?.[1]??{};Object.assign(pe,ve),E.push(pe)}for(let D of v){if(D.vacio)continue;let re=D.lado==="este"?1:-1,pe=re>0?D.frente:-(D.frente+D.fondo),ve=re>0?D.frente+D.fondo:-D.frente,be=D.pisos*3.2+.6,Re=[l(D.d0,pe),l(D.d1,pe),l(D.d1,ve),l(D.d0,ve)].map(ue=>[ue[0],ue[2]]);s.prisma(Re,kt,be,D.color,{techo:D.pisos<=2?Pt.zinc:Pt.losa,bahia:3}),A.push({d0:D.d0,d1:D.d1,a0:pe,a1:ve}),Object.assign(D,{a0:pe,a1:ve,h:be})}let M=document.createElement("canvas");M.width=M.height=1024;let w=M.getContext("2d");w.textAlign="center",w.textBaseline="middle",E.slice(0,32).forEach((D,re)=>{let pe=re%2,ve=re>>1,be=pe*512,Re=ve*64;w.fillStyle="#"+(D.cartel??2832970).toString(16).padStart(6,"0"),w.fillRect(be,Re,512,64),w.fillStyle="#fff",w.font="bold 34px system-ui, Arial, sans-serif";let ue=w.measureText(D.nombre).width;ue>480&&(w.font=`bold ${Math.floor(34*480/ue)}px system-ui, Arial, sans-serif`),w.fillText(D.nombre,be+256,Re+34);let Q=D.lado==="este"?1:-1,J=Q>0?D.a0-.06:D.a1+.06,ie=(D.d0+D.d1)/2,me=Math.min(D.d1-D.d0-2,9)/2,I=Math.min(D.h-.9,3.7),Be=l(ie-Q*me,J),ye=l(ie+Q*me,J),R=pe/2,y=R+.5,O=1-ve/16,k=O-1/16;o.quad([Be[0],I-.55,Be[2]],[ye[0],I-.55,ye[2]],[ye[0],I+.55,ye[2]],[Be[0],I+.55,Be[2]],16777215,[R,k,y,k,y,O,R,O])});let g=a.postes.map(D=>(e.aVia(D.p[0],D.p[1],n),{...D,x:D.p[0],z:D.p[1],d:n.d,a:n.a,rumbo:c(n.d)})),S=Object.fromEntries(g.map(D=>[D.id,D])),C=new Ot(new cn(.13,.18,9.6,10).translate(0,4.8,0),new bt({color:Pt.concreto,roughness:.9}),g.length),P=g.filter(D=>D.herrajes.some(re=>/reserva/.test(re))),N=new Ot(new En(.36,.035,6,18),new bt({color:1382170,roughness:.6}),P.length*2),U=new _t;g.forEach((D,re)=>{U.position.set(D.x,kt,D.z),U.rotation.set(0,0,0),U.updateMatrix(),C.setMatrixAt(re,U.matrix),D.herrajes.includes("cruceta")&&r.caja(D.x,9,D.z,2.2,.1,.12,Pt.madera,D.rumbo),_.push({x:D.x,z:D.z,r:.2})}),P.forEach((D,re)=>[-1,1].forEach((pe,ve)=>{let be=l(D.d+pe*.9,D.a,6.25);U.position.set(be[0],be[1],be[2]),U.rotation.set(0,D.rumbo+Math.PI/2,0),U.updateMatrix(),N.setMatrixAt(re*2+ve,U.matrix)}));let F=[],G=[],K=new qe;function ee(D,re,pe,ve){K.set(ve);for(let be=0;be<12;be++)for(let Re of[be/12,(be+1)/12])F.push(D[0]+(re[0]-D[0])*Re,D[1]+(re[1]-D[1])*Re-pe*4*Re*(1-Re),D[2]+(re[2]-D[2])*Re),G.push(K.r,K.g,K.b)}for(let D of a.tendido){let re=S[D.de],pe=S[D.a];for(let ve=0;ve<3;ve++)ee([re.x,6.3+ve*.18,re.z],[pe.x,6.3+ve*.18,pe.z],.55,921361);for(let ve of[-.95,0,.95])ee(l(re.d,re.a+ve,9.15),l(pe.d,pe.a+ve,9.15),.8,3356218)}let q=new ut;q.setAttribute("position",new et(F,3)),q.setAttribute("color",new et(G,3));let Z=a.arboles.map(D=>({x:D[0],z:D[1],k:.8+t()*.5}));for(let D of v)if(D.vacio)for(let re=0;re<6;re++){let pe=l(D.d0+t()*(D.d1-D.d0),(D.lado==="este"?1:-1)*(D.frente+2+t()*D.fondo));Z.push({x:pe[0],z:pe[2],k:1+t()*.6})}for(let D=0;D<26;D++){let re=l(t()*e.largo,(t()<.5?-1:1)*(38+t()*24));Z.push({x:re[0],z:re[2],k:1+t()*.8})}let $=new Ot(new cn(.13,.2,3,6).translate(0,1.5,0),new bt({color:5916210,roughness:1}),Z.length),se=new Ot(new Qa(1.7,1).translate(0,4.1,0),new bt({roughness:1,flatShading:!0}),Z.length);Z.forEach((D,re)=>{U.position.set(D.x,kt,D.z),U.rotation.set(0,t()*6,0),U.scale.setScalar(D.k),U.updateMatrix(),$.setMatrixAt(re,U.matrix),se.setMatrixAt(re,U.matrix),se.setColorAt(re,K.setHSL(.27+t()*.08,.45+t()*.15,.26+t()*.1)),_.push({x:D.x,z:D.z,r:.25})}),U.scale.setScalar(1);let we=(D,re,pe)=>{r.caja(D.p[0],kt,D.p[1],.06,2.3,.06,Pt.metal),r.caja(D.p[0],1.9,D.p[1],.56,.56,.04,re,pe)};for(let D of a.otros){e.aVia(D.p[0],D.p[1],n);let re=c(n.d);if(/ALTO/.test(D.que))we(D,12593182,re);else if(/25 KPH/.test(D.que))we(D,15856108,re);else if(/zona escolar/.test(D.que))we(D,15320363,re);else if(/estacionamiento E/.test(D.que))we(D,2056112,re);else if(/parquímetro/.test(D.que))r.caja(D.p[0],kt,D.p[1],.08,1.2,.08,Pt.metal),r.caja(D.p[0],1.3,D.p[1],.3,.45,.2,2903667,re);else if(/gabinete/.test(D.que)){r.caja(D.p[0],kt,D.p[1],.5,1.35,.95,3046735,re);let pe=l(n.d+.9,n.a-.5);r.caja(pe[0],kt,pe[2],.14,.9,.14,Pt.amarillo),A.push({d0:n.d-.5,d1:n.d+.5,a0:n.a-.3,a1:n.a+.3})}else/retenida/.test(D.que)?r.caja(D.p[0],kt,D.p[1],.12,2.2,.12,Pt.amarillo,re):/caja de empalme/.test(D.que)&&r.caja(D.p[0],6.05,D.p[1],.24,.24,.6,1184790,re)}let W=S.P05,ge=W.d+15,Me=l(ge,Dp),Se={x:Me[0],z:Me[2],rumbo:c(ge)},V=new pt,H=new bt({vertexColors:!0,roughness:.92}),ce=(D,re,{sombra:pe=!0,recibe:ve=!0}={})=>{let be=new Ze(D.geometria(),re);return be.castShadow=pe,be.receiveShadow=ve,be};V.add(ce(i,H,{sombra:!1}),ce(r,H),ce(s,new bt({map:Zb(),vertexColors:!0,roughness:.85})),ce(o,new Bn({map:Object.assign(new Oi(M),{colorSpace:Wt,anisotropy:4})}),{sombra:!1,recibe:!1}),new va(q,new Qn({vertexColors:!0})),C,N,$,se);for(let D of[C,$,se])D.castShadow=!0;V.traverse(D=>{D.matrixAutoUpdate=!1,D.updateMatrix()});let fe={};function he(D,re){if(e.aVia(D,re,fe),Math.abs(fe.a)<=an||Math.abs(fe.a)>vn)return 0;for(let[pe,ve]of b)if(fe.d>=pe&&fe.d<=ve)return kt;return 0}return{grupo:V,cajas:A,circulos:_,altura:he,postes:g,estacionamiento:u,limites:{d0:f+2,d1:x-2,a:vn-2},inicio:{d:ge-1,a:-4.5},dPick:ge,trabajo:W,estacionado:Se,BORDE:vn+40,D0:f-60,D1:x+60}}var Ud=2.5,ya=40,Vl=5,ri=128,Np=ri*Vl/2,Kb=12,Qb=14,Hl=(a,e)=>{let t=Math.imul(a,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function os(a,e){let t=Math.floor(a),n=Math.floor(e),i=a-t,r=e-n,s=i*i*(3-2*i),o=r*r*(3-2*r);return(Hl(t,n)*(1-s)+Hl(t+1,n)*s)*(1-o)+(Hl(t,n+1)*(1-s)+Hl(t+1,n+1)*s)*o}var bn=(a,e,t)=>{let n=Math.max(0,Math.min(1,(t-a)/(e-a)));return n*n*(3-2*n)},Cn=Object.fromEntries(Object.entries({fondo:2051950,arena:14272911,selva:3107626,potrero:7248450,sabana:10263114,nuboso:2381114,paramo:8157774,roca:7825754,pueblo:11118492,pasto:6064713}).map(([a,e])=>[a,new qe(e)]));function Fp(a,e,t,n,i=[]){let{x0:r,z0:s,paso:o,w:l,h:c}=e,d=Ud/e.escala,p=e.origen*d,h=-p,f=r+(l-1)*o,x=s+(c-1)*o,b={e:0,pend:0,llano:0},m={},u={dist:0,y:0},v=null;function A(ue,Q){let J=Math.max(0,Math.min(l-1.001,(ue-r)/o)),ie=Math.max(0,Math.min(c-1.001,(Q-s)/o)),me=J|0,I=ie|0,Be=J-me,ye=ie-I,R=I*l+me,y=a[R],O=a[R+1],k=a[R+l],ne=a[R+l+1],_e=(y*(1-Be)+O*Be)*(1-ye)+(k*(1-Be)+ne*Be)*ye;b.e=_e,b.pend=Math.hypot((O-y)*(1-ye)+(ne-k)*ye,(k-y)*(1-Be)+(ne-O)*Be)/(o*e.escala);let Ee=_e>0?Math.min(7,b.pend*16):0,ae=_e*d-p+Ee*((os(ue*.011,Q*.011)-.5)*1.5+(os(ue*.037,Q*.037)-.5)*.6);for(let oe of i){let Ae=ue-oe.x,He=Q-oe.z;if(Math.abs(Ae)>oe.R||Math.abs(He)>oe.R)continue;let Ce=Math.hypot(Ae,He),Te=oe.cima*d-p-oe.alto*Math.pow(Ce/oe.R,.85)-Math.max(0,6-Ce)*.8;Ce<oe.R&&Te>ae&&(ae=Te,b.pend=.5,b.e=(ae+p)/d)}return ae}function _(ue,Q){let J=A(ue,Q);if(b.llano=0,Math.abs(ue)<420&&Q>-480&&Q<480){t.aVia(ue,Q,m);let ie=Math.hypot(Math.max(0,Math.abs(m.a)-100),Math.max(0,-70-m.d,m.d-t.largo-70));if(ie<150){let me=bn(4,150,ie);J=(ie<4?-.6+.15*ie:0)*(1-me)+J*me,b.llano=1-me}}for(let ie of n){if(Math.abs(ue-ie.x)>ie.r+60||Math.abs(Q-ie.z)>ie.r+60)continue;let me=bn(ie.r,ie.r+60,Math.hypot(ue-ie.x,Q-ie.z));me<1&&(J=ie.y*(1-me)+J*me,b.llano=Math.max(b.llano,1-me))}return J}for(let ue of n)ue.y=Math.max(h+1.5,A(ue.x,ue.z));function E(ue,Q){let J=_(ue,Q);if(v&&v.cerca(ue,Q,u).dist<45){let ie=bn(16,45,u.dist);J=u.y*(1-ie)+J*ie}return J}let M=new qe;function w(ue,Q,J,ie){let me=b.e,I=b.pend*Ud,Be=os(ue*.06,Q*.06),ye=e.lon0+ue/e.kx,R=e.lat0-Q/e.kz;if(me<1)M.copy(Cn.arena).lerp(Cn.fondo,bn(0,45,-me));else if(me<14)M.copy(Cn.arena);else{let O=bn(84.72,85.15,-ye)*bn(9.7,10.15,R)*(1-bn(500,900,me));M.copy(Cn.selva).lerp(Cn.potrero,bn(.42,.7,Be)*(1-bn(.1,.3,I))).lerp(Cn.sabana,O*(.6+.4*Be)),M.lerp(Cn.nuboso,bn(1300,1900,me)).lerp(Cn.paramo,bn(2900,3300,me)).lerp(Cn.roca,bn(.75,1.2,I)),M.lerp(Cn.arena,1-bn(14,30,me))}b.llano>0&&M.lerp(Math.abs(ue)<420&&Math.abs(Q)<480?Cn.pasto:Cn.pueblo,b.llano*.8);let y=.88+Be*.24;J[ie]=M.r*y,J[ie+1]=M.g*y,J[ie+2]=M.b*y}let g=Math.floor((f-r)/ya)+1,S=Math.floor((x-s)/ya)+1,C=new Float32Array(g*S*3),P=new Float32Array(g*S*3),N=new Float32Array(g*S*3),U=new Uint32Array((g-1)*(S-1)*6),F=new ut;F.setAttribute("position",new ft(C,3)),F.setAttribute("color",new ft(P,3)),F.setAttribute("normal",new ft(N,3)),F.setIndex(new ft(U,1));function G(ue,Q,J,ie,me){for(let I=0;I<ie;I++)for(let Be=0;Be<J;Be++){let ye=(I*J+Be)*3,R=ue[(I*J+Math.max(0,Be-1))*3+1],y=ue[(I*J+Math.min(J-1,Be+1))*3+1],O=ue[(Math.max(0,I-1)*J+Be)*3+1],k=ue[(Math.min(ie-1,I+1)*J+Be)*3+1],ne=(R-y)/(2*me),_e=(O-k)/(2*me),Ee=Math.hypot(ne,1,_e);Q[ye]=ne/Ee,Q[ye+1]=1/Ee,Q[ye+2]=_e/Ee}}function K(){for(let ue=0;ue<S;ue++)for(let Q=0;Q<g;Q++){let J=(ue*g+Q)*3,ie=r+Q*ya,me=s+ue*ya;C[J]=ie,C[J+1]=E(ie,me),C[J+2]=me,w(ie,me,P,J)}G(C,N,g,S,ya);for(let ue of["position","color","normal"])F.attributes[ue].needsUpdate=!0;F.computeBoundingSphere()}function ee(ue,Q){let J=0;for(let ie=0;ie<S-1;ie++)for(let me=0;me<g-1;me++){if(me>=ue-8&&me<ue+8&&ie>=Q-8&&ie<Q+8)continue;let I=ie*g+me,Be=I+g;U[J++]=I,U[J++]=Be,U[J++]=I+1,U[J++]=I+1,U[J++]=Be,U[J++]=Be+1}F.setDrawRange(0,J),F.index.needsUpdate=!0}let q=ri+1,Z=q*q+4*q,$=new Float32Array(Z*3),se=new Float32Array(Z*3),we=new Float32Array(Z*3),W=new Float32Array(q*q*3),ge=new Float32Array(q*q*3),Me=[];for(let ue=0;ue<ri;ue++)for(let Q=0;Q<ri;Q++){let J=ue*q+Q,ie=J+q;Me.push(J,ie,J+1,J+1,ie,ie+1)}let Se=[[],[],[],[]];for(let ue=0;ue<q;ue++)Se[0].push(ue),Se[1].push(ri*q+ue),Se[2].push(ue*q),Se[3].push(ue*q+ri);Se.forEach((ue,Q)=>{for(let J=0;J<ri;J++){let ie=ue[J],me=ue[J+1],I=q*q+Q*q+J,Be=I+1;Q===0||Q===3?Me.push(ie,me,I,me,Be,I):Me.push(ie,I,me,me,I,Be)}});let V=new ut;V.setAttribute("position",new ft($,3)),V.setAttribute("color",new ft(se,3)),V.setAttribute("normal",new ft(we,3)),V.setIndex(Me);let H=new bt({vertexColors:!0,roughness:1,side:An}),ce=new Ze(F,H),fe=new Ze(V,H),he=new Ze(new ei(12e3,12e3).rotateX(-Math.PI/2),new bt({color:2847639,roughness:.22,metalness:.1,transparent:!0,opacity:.9}));he.position.y=h;let D=new pt;D.add(ce,fe,he);for(let ue of[ce,fe])ue.receiveShadow=!0,ue.frustumCulled=!1;let re=null,pe=null,ve=null;function be(ue){let{ci:Q,cj:J}=pe,ie=r+(Q-8)*ya,me=s+(J-8)*ya;for(let I=0;I<ue&&pe.fila<q;I++,pe.fila++){let Be=pe.fila,ye=me+Be*Vl;for(let R=0;R<q;R++){let y=(Be*q+R)*3,O=ie+R*Vl;W[y]=O,W[y+1]=E(O,ye),W[y+2]=ye,w(O,ye,ge,y)}}if(!(pe.fila<q)){$.set(W),se.set(ge),G($,we,q,q,Vl),Se.forEach((I,Be)=>I.forEach((ye,R)=>{let y=(q*q+Be*q+R)*3;$[y]=$[ye*3],$[y+1]=$[ye*3+1]-Kb,$[y+2]=$[ye*3+2];for(let O=0;O<3;O++)se[y+O]=se[ye*3+O],we[y+O]=we[ye*3+O]}));for(let I of["position","color","normal"])V.attributes[I].needsUpdate=!0;ee(Q,J),re={ci:Q,cj:J,x:ie+Np,z:me+Np},pe=null,ve?.(re.x,re.z)}}function Re(ue,Q,J=!1){let ie=Math.max(8,Math.min(g-9,Math.round((ue-r)/ya))),me=Math.max(8,Math.min(S-9,Math.round((Q-s)/ya)));!pe&&(!re||ie!==re.ci||me!==re.cj)&&(pe={ci:ie,cj:me,fila:0}),pe&&be(J?q:Qb)}return{grupo:D,MAR:h,EX:Ud,limites:{x0:r+60,x1:f-60,z0:s+60,z1:x-60},altura:E,alturaBase:_,relieve:A,cada:Re,muestra:b,listo(ue,Q){v=ue,ve=Q,K()}}}var e_=8,Zi=60,kl=46,t_=3.6;function Up(a,e,t){let n=a.map(o=>{let l=o.puntos,c=[],d=[];for(let b=0;b<l.length-1;b++){let m=l[Math.max(0,b-1)],u=l[b],v=l[b+1],A=l[Math.min(l.length-1,b+2)],_=Math.max(1,Math.ceil(Math.hypot(v[0]-u[0],v[1]-u[1])/e_));for(let E=0;E<_;E++){let M=E/_,w=M*M,g=w*M;c.push(.5*(2*u[0]+(v[0]-m[0])*M+(2*m[0]-5*u[0]+4*v[0]-A[0])*w+(3*u[0]-m[0]-3*v[0]+A[0])*g)),d.push(.5*(2*u[1]+(v[1]-m[1])*M+(2*m[1]-5*u[1]+4*v[1]-A[1])*w+(3*u[1]-m[1]-3*v[1]+A[1])*g))}}c.push(l.at(-1)[0]),d.push(l.at(-1)[1]);let p=c.length,h=c.map((b,m)=>Math.max(t+1.5,e(b,d[m])));o.y0!==void 0&&(h[0]=o.y0);for(let b=0;b<6e3;b++){let m=0;for(let u=1;u<p-1;u++)h[u]=Math.max(t+1.5,(h[u-1]+2*h[u]+h[u+1])/4);for(let u=1;u<p;u++)m=Math.max(m,Math.abs(h[u]-h[u-1])/Math.hypot(c[u]-c[u-1],d[u]-d[u-1]));if(m<.13&&b>20)break}let f=new Array(p),x=new Array(p);for(let b=0;b<p;b++){let m=Math.max(0,b-1),u=Math.min(p-1,b+1),v=Math.hypot(c[u]-c[m],d[u]-d[m])||1;f[b]=(d[u]-d[m])/v,x[b]=-(c[u]-c[m])/v}return{n:o.n,X:c,Z:d,Y:h,NX:f,NZ:x}}),i=new Map,r=(o,l)=>(o+2048)*4096+(l+2048);n.forEach((o,l)=>{for(let c=0;c<o.X.length-1;c++){let d=Math.floor((Math.min(o.X[c],o.X[c+1])-kl)/Zi),p=Math.floor((Math.max(o.X[c],o.X[c+1])+kl)/Zi),h=Math.floor((Math.min(o.Z[c],o.Z[c+1])-kl)/Zi),f=Math.floor((Math.max(o.Z[c],o.Z[c+1])+kl)/Zi);for(let x=d;x<=p;x++)for(let b=h;b<=f;b++){let m=r(x,b),u=i.get(m);u||i.set(m,u=[]),u.push(l,c)}}});function s(o,l,c){c.dist=1/0;let d=i.get(r(Math.floor(o/Zi),Math.floor(l/Zi)));if(!d)return c;for(let p=0;p<d.length;p+=2){let h=n[d[p]],f=d[p+1],x=h.X[f],b=h.Z[f],m=h.X[f+1]-x,u=h.Z[f+1]-b,v=m*m+u*u,A=Math.max(0,Math.min(1,((o-x)*m+(l-b)*u)/v)),_=Math.hypot(o-x-m*A,l-b-u*A);if(_<c.dist){let E=Math.sqrt(v);c.dist=_,c.y=h.Y[f]+(h.Y[f+1]-h.Y[f])*A,c.ruta=d[p],c.tx=m/E,c.tz=u/E}}return c}return{rutas:n,cerca:s,MEDIO:t_}}function Op(a,e=1500){let t=new Float32Array(e*2*12),n=new Float32Array(e*2*12),i=new Float32Array(e*2*12),r=new Uint32Array(e*2*6);for(let f=0;f<e*2;f++){r.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6);for(let x=0;x<4;x++)i[f*12+x*3+1]=1}let s=new ut;s.setAttribute("position",new ft(t,3)),s.setAttribute("color",new ft(n,3)),s.setAttribute("normal",new ft(i,3)),s.setIndex(new ft(r,1));let o=new Ze(s,new bt({vertexColors:!0,roughness:.95}));o.frustumCulled=!1,o.receiveShadow=!0;let l=new qe(3882564),c=new qe(14924079),d=0;function p(f,x,b,m,u,v){if(d>=e*2)return;let A=d++*12,_=x+1,E=[[x,b],[_,b],[_,m],[x,m]];for(let M=0;M<4;M++){let[w,g]=E[M];t[A+M*3]=f.X[w]+f.NX[w]*g,t[A+M*3+1]=f.Y[w]+u,t[A+M*3+2]=f.Z[w]+f.NZ[w]*g,n[A+M*3]=v.r,n[A+M*3+1]=v.g,n[A+M*3+2]=v.b}}function h(f,x,b){d=0;for(let m of a.rutas)for(let u=0;u<m.X.length-1;u++)Math.abs(m.X[u]-f)>b||Math.abs(m.Z[u]-x)>b||(p(m,u,-a.MEDIO,a.MEDIO,.12,l),u%2===0&&p(m,u,-.09,.09,.15,c));s.setDrawRange(0,d*6),s.attributes.position.needsUpdate=s.attributes.color.needsUpdate=!0}return{malla:o,rehacer:h}}var Ki=11,ls=240,jl=1100,si=(a,e,t)=>{let n=Math.imul(a,73856093)^Math.imul(e,19349663)^Math.imul(t,83492791);return n=Math.imul(n^n>>>15,2246822519),((n^n>>>13)>>>0)/4294967296},n_={palma:[5.2,.7,2.1,.7,5148474],selva:[4.2,1.1,2.3,2,2911019],seco:[3.2,1.2,3.1,1,8163132],cipres:[3,.9,1,2.7,2314810]};function Bp(a,e,t){let n=new Ot(new cn(.11,.17,1,6).translate(0,.5,0),new bt({color:5916210,roughness:1}),jl),i=new Ot(new Qa(1,1),new bt({roughness:1,flatShading:!0}),jl),r=new pt;r.add(n,i);for(let d of[n,i])d.frustumCulled=!1,d.count=0;let s=new _t,o=new qe,l={dist:0};function c(d,p){let h=0,f=Math.floor((d-ls)/Ki),x=Math.floor((d+ls)/Ki),b=Math.floor((p-ls)/Ki),m=Math.floor((p+ls)/Ki);for(let u=b;u<=m&&h<jl;u++)for(let v=f;v<=x&&h<jl;v++){let A=(v+si(v,u,1))*Ki,_=(u+si(v,u,2))*Ki;if(Math.hypot(A-d,_-p)>ls)continue;let E=a.altura(A,_),M=a.muestra,w=M.e;if(w<3||M.llano>.25||M.pend*a.EX>1.1||e.cerca(A,_,l).dist<12)continue;let g=t.lon0+A/t.kx,S=t.lat0-_/t.kz,C=-g>84.9&&S>9.85&&w<700,P=os(A*.013,_*.013),N=w>3e3?.06:C?.16+.3*P:.2+.75*P*P;if(si(v,u,3)>N)continue;let[U,F,G,K,ee]=n_[w<45?"palma":w>1900?"cipres":C?"seco":"selva"],q=.75+si(v,u,4)*.6;s.position.set(A,E-.1,_),s.rotation.set(0,si(v,u,5)*6.28,0),s.scale.set(F*q,U*q,F*q),s.updateMatrix(),n.setMatrixAt(h,s.matrix),s.position.y=E+U*q+K*q*.35,s.scale.set(G*q,K*q,G*q),s.updateMatrix(),i.setMatrixAt(h,s.matrix),i.setColorAt(h,o.set(ee).offsetHSL((si(v,u,6)-.5)*.04,0,(si(v,u,7)-.5)*.08)),h++}n.count=i.count=h,n.instanceMatrix.needsUpdate=i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return{grupo:r,rehacer:c}}var a_=3.1,i_=.95,r_=2.65,s_=27,o_=9,l_=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a));function zp(a,e){let t=_a(),n=15921902,i=9212569,r=(u,v,A,_,E,M,w)=>t.caja(u,v,A,_,E,M,w);r(0,.42,0,1.86,.5,5.2,n),r(0,.92,.75,1.78,.78,1.9,n),r(0,1.2,.75,1.82,.42,1.6,1976886),r(0,.92,2.15,1.7,.3,1,n);for(let u of[-.9,.9])r(u,.92,-1.45,.08,.42,2.3,n),r(u*1.035,.62,0,.03,.14,5,739983),r(u*1.035,.5,0,.03,.1,5,14924079);r(0,.92,-2.56,1.86,.42,.08,n);for(let u of[-.86,.86])for(let v of[1.6,-1.6])r(u,0,v,.26,.74,.74,1447963);for(let u of[1.4,-2.3]){for(let v of[-.85,.85])r(v,1.34,u,.06,.75,.06,i);r(0,2.06,u,1.8,.06,.06,i)}let s=new Ze(t.geometria(),new bt({vertexColors:!0,roughness:.6})),o=new pt;o.add(s),o.rotation.order="YXZ";let l={x:e.x,z:e.z,rumbo:e.rumbo,v:0,y:0,ox:e.x,oz:e.z,orumbo:e.rumbo},c=new L;function d(u,v,A,_=c){let E=Math.cos(l.rumbo),M=Math.sin(l.rumbo);return _.set(l.x+u*E+A*M,l.y+v,l.z-u*M+A*E)}function p(){let u=Math.cos(l.rumbo),v=Math.sin(l.rumbo),A=a(l.x+v*1.6,l.z+u*1.6),_=a(l.x-v*1.6,l.z-u*1.6),E=a(l.x+u*.9,l.z-v*.9),M=a(l.x-u*.9,l.z+v*.9);l.y=(A+_+E+M)/4,o.position.set(l.x,l.y,l.z),o.rotation.set(-Math.atan2(A-_,3.2),l.rumbo,Math.atan2(E-M,1.8))}function h(u,v,A,_){let E=A?s_:o_;v.mz>.05?l.v+=(l.v<0?12:4.5)*v.mz*u:v.mz<-.05?l.v+=(l.v>0?11:3)*v.mz*u:l.v-=Math.sign(l.v)*Math.min(Math.abs(l.v),1.6*u),l.v>E&&(l.v=Math.max(E,l.v-7*u)),l.v=Math.max(-5,l.v),l.rumbo+=l.v*Math.tan(-v.mx*.55/(1+Math.abs(l.v)*.09))/a_*u,l.x=Math.max(_.x0,Math.min(_.x1,l.x+Math.sin(l.rumbo)*l.v*u)),l.z=Math.max(_.z0,Math.min(_.z1,l.z+Math.cos(l.rumbo)*l.v*u)),l.ox=l.x,l.oz=l.z,l.orumbo=l.rumbo}function f(u,v,A){Object.assign(l,{x:u,z:v,rumbo:A,v:0,ox:u,oz:v,orumbo:A})}function x(u,v,A,_){l.ox=u,l.oz=v,l.orumbo=A,l.v=_}function b(u){let v=1-Math.exp(-u*10);l.x+=(l.ox-l.x)*v,l.z+=(l.oz-l.z)*v,l.rumbo+=l_(l.rumbo,l.orumbo)*v}function m(u,v){let A=Math.cos(l.rumbo),_=Math.sin(l.rumbo),E=u.x-l.x,M=u.z-l.z,w=E*A-M*_,g=E*_+M*A,S=i_+v,C=r_+v;Math.abs(w)>=S||Math.abs(g)>=C||(S-Math.abs(w)<C-Math.abs(g)?w=Math.sign(w||1)*S:g=Math.sign(g||1)*C,u.x=l.x+w*A+g*_,u.z=l.z-w*_+g*A)}return{grupo:o,st:l,local:d,asentar:p,conducir:h,fijar:f,remoto:x,seguir:b,empujar:m}}var cs={sanjose:{n:"San Jos\xE9",lat:9.9404,lon:-84.102,r:0},alajuela:{n:"Alajuela",lat:10.016,lon:-84.214,r:60},cartago:{n:"Cartago",lat:9.864,lon:-83.919,r:60},sanramon:{n:"San Ram\xF3n",lat:10.088,lon:-84.47,r:45},orotina:{n:"Orotina",lat:9.912,lon:-84.523,r:40},caldera:{n:"Caldera",lat:9.912,lon:-84.722,r:40},esparza:{n:"Esparza",lat:9.994,lon:-84.664,r:40},puntarenas:{n:"Puntarenas",lat:9.977,lon:-84.838,r:45},canas:{n:"Ca\xF1as",lat:10.428,lon:-85.094,r:45},liberia:{n:"Liberia",lat:10.634,lon:-85.44,r:60},lacruz:{n:"La Cruz",lat:11.073,lon:-85.632,r:35},penasblancas:{n:"Pe\xF1as Blancas \xB7 frontera con Nicaragua",lat:11.214,lon:-85.613,r:35},santacruz:{n:"Santa Cruz",lat:10.262,lon:-85.585,r:40},nicoya:{n:"Nicoya",lat:10.148,lon:-85.452,r:45},amistad:{n:"Puente La Amistad",lat:10.247,lon:-85.243,r:0},fortuna:{n:"La Fortuna",lat:10.471,lon:-84.645,r:40},arenal:{n:"Volc\xE1n Arenal",lat:10.463,lon:-84.703,r:0},tilaran:{n:"Tilar\xE1n",lat:10.473,lon:-84.968,r:35},monteverde:{n:"Monteverde",lat:10.31,lon:-84.82,r:0},poas:{n:"Volc\xE1n Po\xE1s",lat:10.198,lon:-84.231,r:0},irazu:{n:"Volc\xE1n Iraz\xFA",lat:9.979,lon:-83.852,r:0},guapiles:{n:"Gu\xE1piles",lat:10.215,lon:-83.79,r:45},siquirres:{n:"Siquirres",lat:10.098,lon:-83.507,r:40},limon:{n:"Lim\xF3n",lat:9.99,lon:-83.035,r:60},tortuguero:{n:"Tortuguero",lat:10.54,lon:-83.5,r:0},cahuita:{n:"Cahuita",lat:9.735,lon:-82.84,r:35},sixaola:{n:"Sixaola \xB7 frontera con Panam\xE1",lat:9.508,lon:-82.615,r:35},cerromuerte:{n:"Cerro de la Muerte",lat:9.56,lon:-83.75,r:0},chirripo:{n:"Cerro Chirrip\xF3",lat:9.484,lon:-83.489,r:0},sanisidro:{n:"San Isidro de El General",lat:9.376,lon:-83.703,r:50},buenosaires:{n:"Buenos Aires",lat:9.17,lon:-83.33,r:35},palmar:{n:"Palmar Norte",lat:8.96,lon:-83.46,r:40},neily:{n:"Ciudad Neily",lat:8.65,lon:-82.94,r:40},canoas:{n:"Paso Canoas \xB7 frontera con Panam\xE1",lat:8.534,lon:-82.84,r:35},jaco:{n:"Jac\xF3",lat:9.615,lon:-84.63,r:40},quepos:{n:"Quepos \xB7 Manuel Antonio",lat:9.43,lon:-84.16,r:40},dominical:{n:"Dominical",lat:9.25,lon:-83.86,r:30}},Gp=[{n:"Ruta 1 \xB7 Interamericana Norte",p:["@oeste","alajuela",[10.06,-84.33],"sanramon","esparza",[10.1,-84.82],[10.262,-84.965],"canas",[10.526,-85.255],"liberia","lacruz","penasblancas"]},{n:"Ruta 27",p:["@oeste",[9.915,-84.24],"orotina","caldera"]},{n:"Ruta 23",p:["caldera",[9.955,-84.715],[9.985,-84.735],[9.978,-84.775],[9.977,-84.805],"puntarenas"]},{n:"Ruta 34 \xB7 Costanera Sur",p:["orotina",[9.76,-84.61],"jaco",[9.52,-84.32],"quepos","dominical",[9.16,-83.74],"palmar"]},{n:"Ruta 2 \xB7 Interamericana Sur",p:["@este","cartago",[9.74,-83.94],"cerromuerte","sanisidro","buenosaires",[9.02,-83.3],"palmar",[8.7,-83.1],"neily","canoas"]},{n:"Ruta 32",p:["@este",[10.03,-84.06],[10.09,-84],[10.16,-83.93],"guapiles","siquirres",[10.07,-83.29],"limon"]},{n:"Ruta 36",p:["limon",[9.92,-83.045],[9.84,-82.975],[9.78,-82.93],"cahuita",[9.63,-82.85],"sixaola"]},{n:"Ruta 21",p:["liberia",[10.447,-85.56],"santacruz","nicoya"]},{n:"Ruta 18",p:[[10.262,-84.965],"amistad",[10.2,-85.35],"nicoya"]},{n:"Ruta 142",p:["sanramon",[10.25,-84.52],"fortuna",[10.5,-84.7],[10.505,-84.8],"tilaran","canas"]}],Hp=[{k:"arenal",R:90,alto:52,cima:1633}],Od=(a,e,t)=>[(t-a.lon0)*a.kx,-(e-a.lat0)*a.kz];var $l=[[-80,20,60,90],[-1,58,122,158],[0,214,200,150],[40,120,168,92],[600,70,130,70],[1500,52,100,70],[2500,128,118,84],[3300,170,160,140],[3900,225,222,215]];function Vp(a,e,t){let{w:n,h:i,paso:r,x0:s,z0:o}=e,l=document.createElement("canvas");l.width=n,l.height=i;let c=l.getContext("2d"),d=c.createImageData(n,i),p=d.data;for(let b=0;b<i;b++)for(let m=0;m<n;m++){let u=b*n+m,v=a[u],A=$l.length-2;for(;A>0&&v<$l[A][0];)A--;let _=$l[A],E=$l[A+1],M=Math.max(0,Math.min(1,(v-_[0])/(E[0]-_[0]))),w=v>0?Math.max(.55,Math.min(1.3,1+((a[u-1]??v)-(a[u+1]??v)+(a[u-n]??v)-(a[u+n]??v))/520)):1;for(let g=0;g<3;g++)p[u*4+g]=Math.min(255,(_[g+1]+(E[g+1]-_[g+1])*M)*w);p[u*4+3]=255}c.putImageData(d,0,0);let h=b=>(b-s)/r,f=b=>(b-o)/r;c.lineJoin=c.lineCap="round";for(let[b,m]of[[3.2,"rgba(40,30,20,.75)"],[1.6,"#F6E7A8"]]){c.lineWidth=b,c.strokeStyle=m;for(let u of t.rutas){c.beginPath();for(let v=0;v<u.X.length;v+=3)c.lineTo(h(u.X[v]),f(u.Z[v]));c.lineTo(h(u.X.at(-1)),f(u.Z.at(-1))),c.stroke()}}c.font="600 11px system-ui, Arial, sans-serif",c.textBaseline="middle",c.lineWidth=3;for(let b of Object.values(cs)){let m=h((b.lon-e.lon0)*e.kx),u=f(-(b.lat-e.lat0)*e.kz),v=b.n.split(" \xB7 ")[0];c.fillStyle=b.r?"#fff":"#FFD627",c.strokeStyle="rgba(0,20,40,.85)",c.beginPath(),c.arc(m,u,b.r?3:2.4,0,7),c.fill(),c.stroke();let A=m>n-110;c.textAlign=A?"right":"left",c.strokeText(v,m+(A?-6:6),u),c.fillText(v,m+(A?-6:6),u)}function x(b,m){b.width=n,b.height=i;let u=b.getContext("2d");u.drawImage(l,0,0);for(let v of[...m].reverse())u.save(),u.translate(h(v.x),f(v.z)),u.fillStyle=v.color,u.strokeStyle="#00182F",u.lineWidth=2,v.rumbo!==void 0?(u.rotate(-v.rumbo+Math.PI),u.beginPath(),u.moveTo(0,-9),u.lineTo(6,7),u.lineTo(0,3.5),u.lineTo(-6,7),u.closePath()):(u.beginPath(),u.arc(0,0,4.5,0,7)),u.stroke(),u.fill(),u.restore()}return{dibujar:x}}function kp(a,e,t,n,{a:i=1.8,b:r=3.2,s0:s=2.2,T:o=1.3}={}){let l=1-Math.pow(Math.max(0,a)/Math.max(.1,e),4);if(!isFinite(t))return i*l;let c=s+Math.max(0,a*o+a*n/(2*Math.sqrt(i*r)));return i*(l-Math.pow(c/Math.max(.1,t),2))}var jp=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534],ds=4.2;function $p(a,e,t){let n=Ol(7),i=-40,r=a.largo+80,s=[];for(let M=0;M<t;M++)s.push({d:i+r*M/t+n()*4,a:Gl,v:5,v0:5.5+n()*2.5,x:0,z:0,rumbo:0});let o=e.estacionamiento,l=[];for(let M=0;M<o.n;M++)n()<.55&&l.push({d:o.d0+(M+.5)*o.paso,a:o.a,v:0,x:0,z:0,rumbo:0});for(let M of l)e.cajas.push({d0:M.d-ds/2,d1:M.d+ds/2,a0:M.a-.9,a1:M.a+.9});let c=[...s,...l],d=c.length,p=new bt({roughness:.45,metalness:.3}),h=new Ot(new Yt(1.75,.62,ds).translate(0,.62,0),p,d),f=new Ot(new Yt(1.6,.52,2.1).translate(0,1.18,-.25),new bt({color:1778992,roughness:.2,metalness:.5}),d),x=new cn(.33,.33,.24,10).rotateZ(Math.PI/2),b=new Ot(x,new bt({color:1316119,roughness:.9}),d*4),m=new qe;c.forEach((M,w)=>h.setColorAt(w,m.set(jp[Math.floor(n()*jp.length)])));let u=new pt;u.add(h,f,b);for(let M of[h,f,b])M.frustumCulled=!1;let v=new _t,A={};function _(M){let w=c[M];a.en(w.d,w.a,A),w.x=A.x,w.z=A.z,w.rumbo=Math.atan2(A.tx,A.tz),v.position.set(A.x,0,A.z),v.rotation.set(0,w.rumbo,0),v.updateMatrix(),h.setMatrixAt(M,v.matrix),f.setMatrixAt(M,v.matrix);let g=Math.cos(w.rumbo),S=Math.sin(w.rumbo);[[-.82,1.35],[.82,1.35],[-.82,-1.35],[.82,-1.35]].forEach(([C,P],N)=>{v.position.set(A.x+C*g+P*S,.33,A.z-C*S+P*g),v.updateMatrix(),b.setMatrixAt(M*4+N,v.matrix)})}for(let M=0;M<d;M++)_(M);function E(M,w){let g=s.length;for(let S=0;S<g;S++){let C=s[S],P=s[(S+1)%g],N=g>1?(P.d-C.d+r)%r-ds-.4:1/0,U=g>1?C.v-P.v:0;for(let F of w){if(Math.abs(F.a-C.a)>1.9)continue;let G=(F.d-C.d+r)%r-ds/2-1.2;G<N&&G<40&&(N=G,U=C.v)}C.v=Math.max(0,C.v+kp(C.v,C.v0,Math.max(.1,N),U)*M),C.d+=C.v*M,C.d>i+r&&(C.d-=r),_(S)}h.instanceMatrix.needsUpdate=f.instanceMatrix.needsUpdate=b.instanceMatrix.needsUpdate=!0}return{grupo:u,todos:c,cada:E}}function Wp(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),r={},s={},o=a[0].morphTargetsRelative,l=new ut,c=0;for(let d=0;d<a.length;++d){let p=a[d],h=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,p=[];for(let h=0;h<a.length;++h){let f=a[h].index;for(let x=0;x<f.count;++x)p.push(f.getX(x)+d);d+=a[h].attributes.position.count}l.setIndex(p)}for(let d in r){let p=qp(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(let d in s){let p=s[d][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<p;++h){let f=[];for(let b=0;b<s[d].length;++b)f.push(s[d][b][h]);let x=qp(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(x)}}}return l}function qp(a){let e,t,n,i=-1,r=0;for(let c=0;c<a.length;++c){let d=a[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let s=new e(r),o=new ft(s,t,n),l=0;for(let c=0;c<a.length;++c){let d=a[c];if(d.isInterleavedBufferAttribute){let p=l/t;for(let h=0,f=d.count;h<f;h++)for(let x=0;x<t;x++){let b=d.getComponent(h,x);o.setComponent(h+p,x,b)}}else s.set(d.array,l);l+=d.count*t}return i!==void 0&&(o.gpuType=i),o}var Bd=new Map,un=(a,e={})=>{let t=a+JSON.stringify(e);return Bd.has(t)||Bd.set(t,new bt({color:a,roughness:.7,...e})),Bd.get(t)};function ql(a,e,t){let n=new Bi(e,Math.max(.001,a-2*e),4,10);n.translate(0,-a/2,0);let i=new Ze(n,t);return i.castShadow=!0,i}var Qi=.3,Wl=.29,Xp=new L(0,-1,-.4).normalize(),zd=new L,Gd=new L,oi=new L,Yp=new L,Jp=new L,Hd=new L,li=new L,Zp=new L,us=new L,c_=new vt,Vd={x:0,z:0};function Kp(a){let e=Math.asin(Math.max(-1,Math.min(1,a.x))),t=Math.cos(e);return Vd.z=e,Vd.x=t>1e-4?Math.atan2(-a.z/t,-a.y/t):0,Vd}var d_=.12;function Qp({camisa:a=16040475,pantalon:e=2046819,piel:t=13148794,pelo:n=2825492,uniforme:i=!0}={}){let r={camisa:un(a),pantalon:un(e),piel:un(t,{roughness:.6}),pelo:un(n,{roughness:.9}),casco:un(16766503,{roughness:.35}),arnes:un(10211642,{roughness:.6}),metal:un(12896978,{roughness:.25,metalness:.8}),plastico:un(2830134,{roughness:.5}),bota:un(3877408),lentes:un(1844272,{roughness:.1,metalness:.4}),guante:un(13214042,{roughness:.8}),reflectivo:un(14221135,{roughness:.4,emissive:3359744})},s=new pt,o=new pt;o.position.y=.92,s.add(o);let l=new Ze(new ea(.15,14,10),r.pantalon);l.scale.set(1.15,.8,.9),l.castShadow=!0,o.add(l);let c=Q=>{let J=new pt;J.position.set(Q*.095,-.04,0),o.add(J),J.add(ql(.45,.072,r.pantalon));let ie=new pt;ie.position.y=-.45,J.add(ie),ie.add(ql(.43,.058,r.pantalon));let me=new pt;me.position.y=-.43,ie.add(me);let I=new Ze(new Yt(.11,.085,.27),r.bota);return I.position.set(0,-.03,.06),I.castShadow=!0,me.add(I),{h:J,rod:ie,tob:me}},d=c(1),p=c(-1),h=new pt;h.position.y=.05,o.add(h);let f=new Ze(new Bi(.155,.34,6,14),r.camisa);if(f.position.y=.3,f.scale.set(1.12,1,.78),f.castShadow=!0,h.add(f),i)for(let Q of[.2,.38]){let J=new Ze(new cn(.176,.176,.035,20,1,!0),r.reflectivo);J.position.y=Q,J.scale.set(1.12,1,.8),h.add(J)}let x=new pt;x.position.y=.58,h.add(x);let b=new Ze(new ea(.105,18,14),r.piel);b.position.y=.13,b.scale.set(.92,1.05,1),b.castShadow=!0,x.add(b);let m=new Ze(new ea(.11,16,10,0,Math.PI*2,0,Math.PI*.55),r.pelo);m.position.y=.145,m.rotation.x=-.25,x.add(m);for(let Q of[-1,1]){let J=new Ze(new ea(.013,8,6),un(1118481));J.position.set(Q*.036,.15,.092),x.add(J)}let u=new Ze(new Yt(.13,.035,.02),r.lentes);u.position.set(0,.15,.1),u.visible=!1,x.add(u);let v=new pt;v.position.y=.19,v.visible=!1,x.add(v);let A=new Ze(new ea(.123,22,12,0,Math.PI*2,0,Math.PI/2),r.casco);A.castShadow=!0;let _=new Ze(new cn(.18,.18,.014,30),r.casco);_.position.y=.004,_.castShadow=!0;let E=new Ze(new En(.105,.006,6,22,Math.PI),r.plastico);E.rotation.set(0,Math.PI/2,Math.PI),E.position.y=-.03,v.add(A,_,E);let M=Q=>{let J=new pt;J.position.set(Q*.2,.5,0),h.add(J),J.add(ql(.3,.052,r.camisa));let ie=new pt;ie.position.y=-.3,J.add(ie),ie.add(ql(.27,.045,r.camisa));let me=new Ze(new ea(.05,10,8),r.piel);return me.position.y=-.29,ie.add(me),{h:J,codo:ie,mano:me}},w=M(1),g=M(-1),S=new Ze(new En(.05,.014,6,14),un(13938487,{metalness:.9,roughness:.2}));S.rotation.x=Math.PI/2,S.position.y=-.24,S.visible=!1,w.codo.add(S);let C=new pt;C.visible=!1;let P=[];for(let Q of[-1,1]){let J=[[.07,.02,.135],[.085,.3,.14],[.1,.5,.1],[.11,.6,0],[.1,.5,-.1],[.085,.3,-.14],[.07,.02,-.135]].map(([me,I,Be])=>new L(Q*me,I,Be)),ie=new Ze(new Gr(new zi(J),30,.016,6),r.arnes);h.add(ie),P.push(ie)}let N=new Ze(new Yt(.2,.03,.012),r.arnes);N.position.set(0,.36,.142),h.add(N),P.push(N);let U=new Ze(new En(.172,.017,8,36),r.arnes);U.rotation.x=Math.PI/2,U.scale.set(1.08,.82,1),U.position.y=.02,o.add(U),P.push(U);for(let Q of[d,p]){let J=new Ze(new En(.08,.013,8,24),r.arnes);J.rotation.x=Math.PI/2,J.position.y=-.12,Q.h.add(J),P.push(J)}let F=()=>new Ze(new En(.03,.008,8,18),r.metal),G=F();G.position.set(.19,.02,0),G.rotation.y=Math.PI/2,o.add(G);let K=F();K.position.set(-.19,.02,0),K.rotation.y=Math.PI/2,o.add(K);let ee=F();ee.position.set(0,.48,-.14),h.add(ee);let q=F();q.position.set(0,.2,.158),q.scale.setScalar(1.15),h.add(q);let Z=new Ze(new Yt(.034,.17,.012),r.arnes);Z.position.set(0,.285,.15),h.add(Z);let $=new Ze(new En(.024,.009,8,14,Math.PI*1.3),r.plastico);$.position.set(-.12,-.01,.13),$.rotation.z=Math.PI*.85,o.add($),P.push(G,K,ee,q,Z,$);let se=Q=>P.forEach(J=>{J.visible=Q});se(!1);let we=(Q,J,ie,me)=>{let I=new _t;return I.position.set(J,ie,me),Q.add(I),I},W={dIzq:we(G,0,0,0),dDer:we(K,0,0,0),porta:we($,0,0,0),dorsal:we(ee,0,0,0),frontal:we(q,0,-.02,0),pecho:we(h,0,.38,.2),cabeza:we(x,0,.32,0),manoI:we(w.mano,0,0,0),manoD:we(g.mano,0,0,0)};{let Q=new Set([u,S,...P,w.mano,g.mano]);v.traverse(J=>Q.add(J)),s.updateMatrixWorld(!0),s.traverse(J=>{if(!J.isGroup)return;let ie=new Map;for(let me of J.children)me.isMesh&&!Q.has(me)&&me.visible&&!me.children.length&&(ie.has(me.material)||ie.set(me.material,[]),ie.get(me.material).push(me));for(let[me,I]of ie){if(I.length<2)continue;let Be=I.map(R=>{R.updateMatrix();let y=(R.geometry.index?R.geometry.toNonIndexed():R.geometry.clone()).applyMatrix4(R.matrix);for(let O of Object.keys(y.attributes))["position","normal","uv"].includes(O)||y.deleteAttribute(O);return y}),ye=new Ze(Wp(Be,!1),me);ye.castShadow=I.some(R=>R.castShadow),I.forEach(R=>J.remove(R)),J.add(ye)}})}let ge=new Set;function Me(Q,J=!0){J?ge.add(Q):ge.delete(Q),Q==="casco"&&(v.visible=J),Q==="lentes"&&(u.visible=J),Q==="guantes"&&(w.mano.material=g.mano.material=J?r.guante:r.piel),Q==="arnes"&&se(J),Q==="reloj"&&(S.visible=J)}let Se=Fl.nuevo,V=[d.h,d.rod,d.tob,p.h,p.rod,p.tob,w.h,w.codo,g.h,g.codo,h,x,o],H=V.length*3+1,ce=new Float64Array(H),fe=new Float64Array(H),he=new Float64Array(H),D=null,re=Q=>{let J=0;for(let ie of V)Q[J++]=ie.rotation.x,Q[J++]=ie.rotation.y,Q[J++]=ie.rotation.z;Q[J]=o.position.y},pe=Q=>{let J=0;for(let ie of V)ie.rotation.set(Q[J++],Q[J++],Q[J++]);o.position.y=Q[J]};function ve(Q,J){if(h.updateMatrix(),zd.copy(J).sub(o.position).applyMatrix4(c_.copy(h.matrix).invert()),Gd.copy(Q.h.position),oi.subVectors(zd,Gd),oi.lengthSq()<1e-8)return;let ie=Math.max(Qi-Wl+.001,Math.min(Qi+Wl-.001,oi.length()));oi.normalize();let me=Math.acos(Math.max(-1,Math.min(1,(Qi*Qi+ie*ie-Wl*Wl)/(2*Qi*ie))));Jp.copy(Xp).addScaledVector(oi,-Xp.dot(oi)).normalize(),Hd.copy(oi).multiplyScalar(Math.cos(me)).addScaledVector(Jp,Math.sin(me)),Yp.copy(Gd).addScaledVector(Hd,Qi),li.subVectors(zd,Yp).normalize();let I=Kp(Hd);Q.h.rotation.set(I.x,0,I.z);let Be=Math.cos(I.x),ye=Math.sin(I.x),R=Math.cos(I.z),y=Math.sin(I.z),O=li.y*Be+li.z*ye,k=-li.y*ye+li.z*Be;Zp.set(li.x*R+O*y,-li.x*y+O*R,k);let ne=Kp(Zp);Q.codo.rotation.set(ne.x,0,ne.z)}function be(Q,J){if(Q==="escalar"){let ie=1.45+.06*J,me=1.45-.06*J;ve(w,us.set(.23,ie,.1+.268*ie-.04)),ve(g,us.set(-.23,me,.1+.268*me-.04))}else if(Q==="sostener"){let ie=.3414000000000001;ve(w,us.set(.23,1.05,ie)),ve(g,us.set(-.23,1.05,ie))}else Q==="banderero"?ve(g,us.set(-.22,1.62,.3)):Q==="caminar"&&(w.codo.rotation.x=-.25-.2*Math.max(0,J),g.codo.rotation.x=-.25-.2*Math.max(0,-J))}function Re({tipo:Q="idle",fase:J=0,t:ie=0,mirarArriba:me=0,dt:I}={}){let Be=Se&&I!==void 0&&D!==null&&Q!==D;Be&&re(ce);for(let y of[d.h,d.rod,d.tob,p.h,p.rod,p.tob,w.h,w.codo,g.h,g.codo,h,x,o])y.rotation.set(0,0,0);o.position.y=.92;let ye=Math.sin(J),R=Math.cos(J);if(w.h.rotation.z=-.12,g.h.rotation.z=.12,h.rotation.x=.02*Math.sin(ie*2),x.rotation.x=-me,Q==="caminar")d.h.rotation.x=ye*.55,p.h.rotation.x=-ye*.55,d.rod.rotation.x=Math.max(0,-ye)*.7,p.rod.rotation.x=Math.max(0,ye)*.7,w.h.rotation.x=-ye*.45,g.h.rotation.x=ye*.45,w.codo.rotation.x=-.3,g.codo.rotation.x=-.3,o.position.y=.92+Math.abs(R)*.025;else if(Q==="escalar")w.h.rotation.set(-2.5+ye*.3,0,-.18),w.codo.rotation.x=-.45-Math.max(0,ye)*.3,g.h.rotation.set(-2.5-ye*.3,0,.18),g.codo.rotation.x=-.45-Math.max(0,-ye)*.3,d.h.rotation.x=-.55-Math.max(0,ye)*.5,d.rod.rotation.x=.7+Math.max(0,ye)*.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.2-Math.max(0,-ye)*.5,p.rod.rotation.x=.25+Math.max(0,-ye)*.6,p.tob.rotation.x=-.05,h.rotation.x=.12,x.rotation.x=-.25-me;else if(Q==="trabajar"){let y=Math.sin(ie*3)*.1;w.h.rotation.set(-2.25+y,0,-.25),w.codo.rotation.x=-.6+y,g.h.rotation.set(-2-y,0,.3),g.codo.rotation.x=-.8-y,d.h.rotation.x=-.45,d.rod.rotation.x=.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.08,p.rod.rotation.x=.12,h.rotation.x=.14,x.rotation.x=-.35}else Q==="sostener"?(w.h.rotation.set(-1.35,0,-.1),g.h.rotation.set(-1.35,0,.1),w.codo.rotation.x=-.3,g.codo.rotation.x=-.3):Q==="senalar"?(g.h.rotation.set(-1.5,0,.5),g.codo.rotation.x=-.1,h.rotation.y=.2):Q==="cargar"?(w.h.rotation.set(-2.9,0,-.2),g.h.rotation.set(-2.9,0,.2),w.codo.rotation.x=-.2,g.codo.rotation.x=-.2,d.h.rotation.x=ye*.45,p.h.rotation.x=-ye*.45,d.rod.rotation.x=Math.max(0,-ye)*.6,p.rod.rotation.x=Math.max(0,ye)*.6):Q==="caida"?(w.h.rotation.set(-2.8+ye*.4,0,-.6),g.h.rotation.set(-2.6-ye*.4,0,.6),d.h.rotation.x=-.4+ye*.3,p.h.rotation.x=-.1-ye*.3,d.rod.rotation.x=.5,p.rod.rotation.x=.3):Q==="colgado"?(w.h.rotation.set(-2.9,0,-.3),g.h.rotation.set(-2.9,0,.3),d.h.rotation.x=-.3,p.h.rotation.x=-.1,d.rod.rotation.x=.4,p.rod.rotation.x=.3,h.rotation.x=-.1):Q==="tendido"?(w.h.rotation.set(-.3,0,-1.1),g.h.rotation.set(.2,0,1.3),w.codo.rotation.x=-.5,g.codo.rotation.x=-.2,d.h.rotation.set(.05,0,.12),p.h.rotation.set(-.15,0,-.08),p.rod.rotation.x=.35,x.rotation.y=.5):Q==="banderero"?(g.h.rotation.set(-1.55,0,.15),g.codo.rotation.x=-.15,w.h.rotation.set(-.9+Math.sin(ie*2.2)*.5,0,-.5),w.codo.rotation.x=-.4):Q==="celular"?(g.h.rotation.set(-1.1,0,.25),g.codo.rotation.x=-1.2,x.rotation.x=.45,d.h.rotation.x=ye*.45,p.h.rotation.x=-ye*.45,d.rod.rotation.x=Math.max(0,-ye)*.6,p.rod.rotation.x=Math.max(0,ye)*.6):(w.codo.rotation.x=-.08,g.codo.rotation.x=-.08);if(Se){if(be(Q,ye),re(fe),I===void 0)he.fill(0);else{if(Be)for(let O=0;O<H;O++)he[O]=ce[O]-fe[O];let y=Math.exp(-I/d_);for(let O=0;O<H;O++){let k=he[O]*y;Math.abs(k)<1e-4&&(k=0),he[O]=k,fe[O]+=k}pe(fe)}D=Q}}Re();let ue=new Set([s,o,d.h,d.rod,d.tob,p.h,p.rod,p.tob,h,x,w.h,w.codo,g.h,g.codo]);return s.updateMatrixWorld(!0),s.traverse(Q=>{ue.has(Q)||(Q.updateMatrix(),Q.matrixAutoUpdate=!1)}),{raiz:s,pose:Re,equipar:Me,equipado:ge,refs:W,M:r,partes:{pelvis:o,torso:h,cuello:x,bi:w,bd:g,pi:d,pd:p}}}var u_=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a)),kd={c:"cargar",e:"escalar",t:"trabajar",s:"sostener"};function jd(a){let e=Qp(a);return e.raiz.traverse(t=>{t.isMesh&&(t.castShadow=!1)}),e}function ef(a,e){let t=new Map;function n(s,o,l,c,d,p,h="i"){let f=t.get(s);return f||(f={id:s,p:jd(d),x:o,z:l,y:p??e(o,l),ox:o,oz:l,rumbo:c??0,orumbo:c??0,fase:Math.random()*6,d:0,a:0},f.p.equipar("casco",!!d?.uniforme),d?.arnes&&f.p.equipar("arnes"),a.add(f.p.raiz),t.set(s,f)),f.ox=o,f.oz=l,f.oy=p,f.pose=h,c!==void 0&&(f.orumbo=c),f}function i(s){let o=t.get(s);o&&(a.remove(o.p.raiz),t.delete(s))}function r(s,o,l){let c=1-Math.exp(-s*10);for(let d of t.values()){let p=(d.ox-d.x)*c,h=(d.oz-d.z)*c,f=((d.oy??e(d.x,d.z))-d.y)*c,x=Math.hypot(p,f,h);d.x+=p,d.z+=h,d.y+=f;let b=Math.hypot(p,h)/s>.25,m=kd[d.pose];d.rumbo=u_(d.rumbo,b&&!m?Math.atan2(p,h):d.orumbo)*c+d.rumbo*(1-c),d.p.raiz.position.set(d.x,d.y,d.z),d.p.raiz.rotation.y=d.rumbo;let u=Math.hypot(d.x-l.position.x,d.z-l.position.z);d.p.raiz.visible=u<140&&d.pose!=="o",u<60&&(d.fase+=x*4.19,d.p.pose({tipo:m??(b?"caminar":"idle"),fase:d.fase,t:o,dt:s}))}}return{mapa:t,fijar:n,quitar:i,cada:r}}function tf(a){let e=new Ot(new Fr(.5,16).rotateX(-Math.PI/2),new Bn({color:0,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a);e.frustumCulled=!1,e.renderOrder=1;let t=new _t;return{malla:e,fijar(n,i,r,s,o,l=o,c=0){t.position.set(i,r+.02,s),t.rotation.set(0,c,0),t.scale.set(o,1,l),t.updateMatrix(),e.setMatrixAt(n,t.matrix)},listo(n){e.count=Math.min(n,a),e.instanceMatrix.needsUpdate=!0}}}var $d=.16,Xl=56,Yl=a=>Math.abs(a)<$d?0:(a-Math.sign(a)*$d)/(1-$d);function nf(a,e){let t=new Set,n=new Set,i={mx:0,mz:0,gx:0,gy:0,correr:!1,accion:!1,vista:!1,origen:Yi?"t\xE1ctil":"teclado y rat\xF3n"},r=0,s=0,o={sensibilidad:1,invertir:!1};addEventListener("keydown",v=>{v.repeat||(t.add(v.code),i.origen="teclado y rat\xF3n",v.target?.tagName!=="INPUT"&&(v.code==="KeyE"&&n.add("accion"),v.code==="KeyV"&&n.add("vista"),v.code==="KeyR"&&n.add("radio"),v.code==="KeyM"&&n.add("mapa"),v.code==="KeyP"&&n.add("pausa"),v.code==="KeyH"&&n.add("bocina")))}),addEventListener("keyup",v=>t.delete(v.code)),addEventListener("blur",()=>t.clear());let l=(...v)=>v.some(A=>t.has(A))?1:0;a.addEventListener("click",()=>{!Yi&&document.pointerLockElement!==a&&a.requestPointerLock?.()?.catch?.(()=>{})}),addEventListener("mousemove",v=>{document.pointerLockElement===a&&(r+=v.movementX*.0024,s-=v.movementY*.0024)});let c={id:null,x0:0,y0:0,x:0,y:0},d={id:null,x:0,y:0},p=document.createElement("div"),h=document.createElement("div");p.className="mu-base",h.className="mu-perilla",p.append(h),p.hidden=!0,e.append(p),a.style.touchAction="none",a.addEventListener("pointerdown",v=>{v.pointerType==="touch"&&(i.origen="t\xE1ctil",v.clientX<innerWidth*.45&&c.id===null?(Object.assign(c,{id:v.pointerId,x0:v.clientX,y0:v.clientY,x:0,y:0}),p.style.left=v.clientX+"px",p.style.top=v.clientY+"px",h.style.transform="",p.hidden=!1):d.id===null&&Object.assign(d,{id:v.pointerId,x:v.clientX,y:v.clientY}))}),a.addEventListener("pointermove",v=>{if(v.pointerId===c.id){let A=(v.clientX-c.x0)/Xl,_=(v.clientY-c.y0)/Xl,E=Math.hypot(A,_);E>1&&(A/=E,_/=E),c.x=A,c.y=_,h.style.transform=`translate(${A*Xl}px, ${_*Xl}px)`}else v.pointerId===d.id&&(r+=(v.clientX-d.x)*.0052,s-=(v.clientY-d.y)*.0052,d.x=v.clientX,d.y=v.clientY)});let f=v=>{v.pointerId===c.id&&(c.id=null,c.x=c.y=0,p.hidden=!0),v.pointerId===d.id&&(d.id=null)};if(a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f),Yi)for(let[v,A,_]of[["pausa","\u23F8","Pausa"],["mapa","\u{1F5FA}","Mapa"],["radio","\u{1F4FB}","Radio"],["vista","\u{1F441}","Cambiar de vista"],["accion","\u270B","Acci\xF3n"]]){let E=document.createElement("button");E.className="mu-boton mu-"+v,E.textContent=A,E.setAttribute("aria-label",_),E.addEventListener("pointerdown",M=>{M.preventDefault(),n.add(v)}),e.append(E)}let x={},b={0:"accion",1:"atras",2:"radio",3:"vista",4:"bocina",8:"mapa",9:"pausa",12:"arriba",13:"abajo"};function m(v){let A=null;try{A=Array.from(navigator.getGamepads?.()??[]).find(P=>P?.connected&&P.mapping==="standard")}catch{}if(!A)return null;let _=Yl(A.axes[2]),E=Yl(A.axes[3]);(_||E)&&(r+=_*2.6*v,s-=E*1.9*v);let M=!1;for(let P in b){let N=!!A.buttons[P]?.pressed;N&&!x[P]&&(n.add(b[P]),M=!0),x[P]=N}let w=Yl(A.axes[0]),g=-Yl(A.axes[1]),S=!!(A.buttons[6]?.pressed||A.buttons[10]?.pressed),C=g>.6?"arriba":g<-.6?"abajo":null;return C&&x.pal!==C&&n.add(C),x.pal=C,(w||g||_||E||M)&&(i.origen="control"),{mx:w,mz:g,correr:S}}function u(v){let A=l("KeyD","ArrowRight")-l("KeyA","ArrowLeft"),_=l("KeyW","ArrowUp")-l("KeyS","ArrowDown"),E=!!l("ShiftLeft","ShiftRight");c.id!==null&&(A=c.x,_=-c.y,E=Math.hypot(A,_)>.92);let M=m(v);M&&(M.mx||M.mz)&&(A=M.mx,_=M.mz,E=M.correr);let w=Math.hypot(A,_);w>1&&(A/=w,_/=w),i.mx=A,i.mz=_,i.correr=E,i.gx=r*o.sensibilidad,i.gy=s*o.sensibilidad*(o.invertir?-1:1),r=s=0;for(let g of["accion","vista","radio","mapa","pausa","bocina","atras","arriba","abajo"])i[g]=n.has(g);return n.clear(),i}return{leer:u,pulsar:v=>n.add(v),mirada:o}}var h_=`
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
`;function af(){let a=document.createElement("style");a.textContent=h_,document.head.append(a);let e=document.createElement("div");return e.className="mu-capa",document.body.append(e),e}function rf(a,e){let t=document.createElement("div");t.className="mu-diag",t.hidden=!e;let n=document.createElement("div"),i=document.createElement("button");return i.textContent="Copiar diagn\xF3stico",i.addEventListener("click",async()=>{let r=`${n.textContent}
${navigator.userAgent}
${innerWidth}\xD7${innerHeight} \xB7 dpr ${devicePixelRatio}`;try{await navigator.clipboard.writeText(r),i.textContent="Copiado \u2713"}catch{i.textContent="No se pudo copiar"}setTimeout(()=>{i.textContent="Copiar diagn\xF3stico"},2e3)}),t.append(n,i),a.append(t),addEventListener("keydown",r=>{r.code==="F3"&&(r.preventDefault(),t.hidden=!t.hidden)}),{escribir:r=>{n.textContent=r},mostrar:r=>{t.hidden=!r}}}var ja={inspeccion:"GS-101 \xB7 Inspecci\xF3n de poster\xEDa (\xA75.6.3) \xB7 p. 21",demarcacion:"GS-101 \xB7 Demarcaci\xF3n (\xA75.6.2) \xB7 p. 21",equipo:"GS-101 \xB7 Trabajo seguro en postes (\xA75.6.1) \xB7 pp. 20\u201321"},sf={a:{texto:"El poste parece obviamente inseguro.",corto:"Poste obviamente inseguro",material:null,aplicaAntesDeSubir:!0,dibujable:!1},b:{texto:"El poste se mueve.",corto:"Poste que se mueve",material:null,aplicaAntesDeSubir:!0,dibujable:!1},c:{texto:"El poste est\xE1 inclinado.",corto:"Poste inclinado",material:null,aplicaAntesDeSubir:!0,dibujable:!0},d:{texto:"La base del poste se alter\xF3 mientras se trabajaba arriba.",corto:"Base alterada",material:null,aplicaAntesDeSubir:!1,dibujable:!1},e:{texto:"Al despojar el poste de algunos cables y retenidas, se observa que est\xE1 soportado por los cables.",corto:"Soportado por los cables",material:null,aplicaAntesDeSubir:!1,dibujable:!1},f:{texto:"El terreno presenta deslizamientos.",corto:"Deslizamiento del terreno",material:null,aplicaAntesDeSubir:!0,dibujable:!1},g:{texto:"Poste de madera con fisuras, quemado o podrido: el da\xF1o no debe superar una tercera parte del di\xE1metro. Tampoco nudos con agrietamiento, ni agrietamientos a lo largo que comprometan m\xE1s de una tercera parte del poste.",corto:"Madera fisurada o podrida",material:"madera",aplicaAntesDeSubir:!0,dibujable:!0},h:{texto:"Poste de metal con oxidaci\xF3n que supera una tercera parte del di\xE1metro, o con perforaciones superiores a una tercera parte del di\xE1metro, o con una l\xEDnea el\xE9ctrica en posible contacto directo con el poste.",corto:"Metal oxidado o perforado",material:"metal",aplicaAntesDeSubir:!0,dibujable:!0}},FM=Object.keys(sf).filter(a=>sf[a].aplicaAntesDeSubir);var BM=typeof __URL_PUBLICA__=="string"?__URL_PUBLICA__:globalThis.process?.env?.URL_PUBLICA||"https://ruben1155.github.io/cuadrilla-segura/",zM=typeof __PREFIJO__=="string"?__PREFIJO__:globalThis.process?.env?.PREFIJO_ALMACEN||"cuadrilla-segura:";var qd={url:"https://okhbiliodjuofzsjkolg.supabase.co",llave:"sb_publishable_F3-PMi9uLDPR655ZOCs60g_m0S_C6Ec"};var j={altura:"GS-101 \xB7 Trabajo seguro en alturas",escaleras:"GS-101 \xB7 Trabajo seguro en escaleras port\xE1tiles",amarre:"GS-101 \xB7 Paso a paso para el aseguramiento de la escalera a un poste",epp:"GS-101 \xB7 Uso de equipo de protecci\xF3n personal",general:"GS-101 \xB7 Lineamientos en seguridad general",electrico:"GS-101 \xB7 Trabajo seguro en proximidad de l\xEDneas energizadas",demarcacion:"GS-101 \xB7 Demarcaci\xF3n y se\xF1alizaci\xF3n del \xE1rea",emergencias:"GS-101 \xB7 Emergencias en trabajos en alturas",suspender:"GS-101 \xB7 Suspensi\xF3n de labores ante peligro no controlado",vehiculos:"GS-101 \xB7 Seguridad en la conducci\xF3n de veh\xEDculos",carga:"GS-101 \xB7 Lineamientos generales: manipulaci\xF3n de cargas",cuadrillas:"GS-101 \xB7 Cuadrillas de trabajo",reportes:"GS-101 \xB7 Reporte de incidentes y accidentes laborales",freno:"GS-101 \xB7 Equipo para trabajo en postes (freno para cuerda) \xB7 pr\xE1ctica de la cuadrilla: el freno va a la argolla frontal",m_altura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable",m_prep:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 Preparaci\xF3n antes de instalar",m_gaza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.8 Gazas, herrajes y accesorios",m_tension:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n",m_radio:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura",m_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.24 Rollos de reserva en redes a\xE9reas",m_rollo_poste:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de red en el poste (di\xE1metro del rollo de 40 a 50 cm)",m_calco:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas",m_preform:"Manual MNO-DS-GE-001 \xB7 Anexo 3: uso de preformados seg\xFAn di\xE1metro del cable",m_colores:"Manual MNO-DS-GE-001 \xB7 Anexo 4: c\xF3digo de colores EIA/TIA-598",m_cierre:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme",m_pruebas:"Manual MNO-DS-GE-001 \xB7 \xA76.7 Pruebas de aceptaci\xF3n",m_balona:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.6 Balona",m_postes:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.3.2 Distancia entre postes",m_ferrea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.5 Cruce de l\xEDnea f\xE9rrea",m_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 Preparaci\xF3n y limpieza de registros",m_subterranea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.2 y \xA76.2.1.3 Instalaci\xF3n subterr\xE1nea y selecci\xF3n de ductos",m_reserva_sub:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 Rollos de reserva en registros",m_tapas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.5 Dispositivos de seguridad de las tapas",poda_transito:"GS-101 \xB7 \xA75.6.10 n) Poda de \xE1rboles: en v\xEDas de alto tr\xE1nsito se pide colaboraci\xF3n a entidades como tr\xE1nsito \xB7 p. 40",confinado:"GS-101 \xB7 T\xE9rminos: espacio confinado",t_techo:"GS-101 \xB7 \xA75.6.7 Trabajo seguro en techos \xB7 p\xE1g. 30",t_techo_epp:"GS-101 \xB7 \xA75.6.7 Equipo de protecci\xF3n personal en techos \xB7 p\xE1g. 30",t_techo_escalera:"GS-101 \xB7 \xA75.6.7 a\u2013c Escalera para acceder al techo \xB7 p\xE1g. 30",t_techo_anclaje:"GS-101 \xB7 \xA75.6.7 d\u2013f Anclaje y l\xEDnea de vida provisional \xB7 p\xE1g. 30\u201331",t_techo_traslado:"GS-101 \xB7 \xA75.6.7 g Traslado al techo y descenso anclado \xB7 p\xE1g. 31",t_techo_caminar:"GS-101 \xB7 \xA75.6.7 h\u2013j Caminar en el techo y l\xE1minas \xB7 p\xE1g. 32",t_techo_clima:"GS-101 \xB7 \xA75.6.7 n Condiciones clim\xE1ticas adversas \xB7 p\xE1g. 33",t_techo_peligro:"GS-101 \xB7 \xA75.6.7 p Zonas inseguras del techo \xB7 p\xE1g. 33",t_escalera_base:"GS-101 \xB7 \xA75.6.4 g Escaleras port\xE1tiles: per\xEDmetro de 2 m \xB7 p\xE1g. 22\u201323",t_escalera_tres:"GS-101 \xB7 \xA75.6.4 Nota: tres pelda\xF1os superiores prohibidos \xB7 p\xE1g. 22",t_escalera_sola:"GS-101 \xB7 \xA75.6.4 i Un solo trabajador sobre la escalera \xB7 p\xE1g. 23",mt_epp:"GS-101 \xB7 5.6.9 EPP para trabajo en proximidad de l\xEDneas energizadas \xB7 p. 34",mt_identificar:"GS-101 \xB7 5.6.9 c) y observaciones 1 y 2 \xB7 p. 35",mt_distancias:"GS-101 \xB7 5.6.9 b) Distancias de instalaci\xF3n con el secundario (40 cm) y el neutro (80 cm) \xB7 p. 35",mt_tabla4:"GS-101 \xB7 5.6.9 e) Tabla N\xB0 4, distancias m\xEDnimas de seguridad \xB7 p. 37",mt_suspender:"GS-101 \xB7 5.6.9 f) Telecomunicaciones a menos de 80 cm de la primaria MT, en contacto con el secundario o al nivel de este \xB7 p. 37",mt_senal:"GS-101 \xB7 5.6.9 g) Se\xF1alizaci\xF3n del \xE1rea de trabajo a nivel de suelo \xB7 p. 37",mt_activa:"GS-101 \xB7 5.6.9 h) Todas las l\xEDneas el\xE9ctricas se consideran activas \xB7 p. 38",mt_frontera:"GS-101 \xB7 5.2 w) Fronteras de aproximaci\xF3n: solo personas calificadas cruzan el l\xEDmite \xB7 p. 12",mt_escalera:"GS-101 \xB7 5.6.4 q) Escaleras de abrir de fibra de vidrio; nota sobre escaleras de aluminio \xB7 p. 23",mt_guante_cuero:"GS-101 \xB7 5.3.4 b) Los guantes de cuero no son para trabajos en presencia de tensi\xF3n \xB7 p. 15",mt_rigidez:"GS-101 \xB7 5.1 d) Buena rigidez diel\xE9ctrica: no sujetarse de estructuras met\xE1licas cercanas \xB7 p. 9",poda_epp:"GS-101 \xB7 \xA75.6.10 d) y e) Equipo de protecci\xF3n para poda: careta, lentes, protecci\xF3n auditiva, cuerdas, casco de cuatro puntos con barbiquejo, guantes mec\xE1nicos, ropa y calzado institucionales \xB7 pp. 38\u201339",poda_mangas:"GS-101 \xB7 \xA75.6.10 t) Mangas, cuerdas o prendas sueltas pueden enredarse en la motosierra o en la rama \xB7 p. 40",poda_planificar:"GS-101 \xB7 \xA75.6.10 h) Planificaci\xF3n previa: \xE1rbol, terreno, clima, bienes, personas, animales, insectos, tr\xE1nsito y distancia a l\xEDneas \xB7 p. 39",poda_subir:"GS-101 \xB7 \xA75.6.10 f) El trabajador no se debe subir a un \xE1rbol \xB7 p. 39",poda_linea:"GS-101 \xB7 \xA75.6.10 b) y m) Ramas en aproximaci\xF3n o sobre la l\xEDnea energizada: informar y coordinar; no se cortan ramas sobre la l\xEDnea \xB7 pp. 38 y 40",poda_distancias:"GS-101 \xB7 \xA75.6.10 j) y k) Distancias m\xEDnimas: se trabaja fuera de ellas durante el corte y la ca\xEDda, tambi\xE9n para las ramas \xB7 p. 39",poda_cansancio:"GS-101 \xB7 \xA75.6.10 g) No operar maquinaria cansado ni con medicamentos que alteren la conciencia \xB7 p. 39",poda_senal:"GS-101 \xB7 \xA75.6.10 n) Se\xF1alizar el \xE1rea y advertir a terceros; en v\xEDas de alto tr\xE1nsito, pedir apoyo \xB7 p. 40",poda_trayectoria:"GS-101 \xB7 \xA75.6.10 o) Valorar la trayectoria de ca\xEDda y asegurar la zona con se\xF1alizaci\xF3n y personal que regule el paso \xB7 p. 40",poda_equipo:"GS-101 \xB7 \xA75.6.10 p) Revisar el equipo de poda antes de iniciar (cuchillos, mecates, otros dispositivos) \xB7 p. 40",poda_viento:"GS-101 \xB7 \xA75.6.10 q) Antes de cada corte: distancia a lo energizado, viento y vegetaci\xF3n que interfiera \xB7 p. 40",poda_cuerdas:"GS-101 \xB7 \xA75.6.10 r) Cuerdas de trabajo para evitar que la rama cambie de direcci\xF3n al caer \xB7 p. 40",poda_cuadrilla:"GS-101 \xB7 \xA75.4 e) Las cuadrillas de poda de \xE1rboles no pueden ser menores de dos miembros \xB7 p. 18",gal_autorizacion:"Manual MNO-DS-GE-001 \xB7 \xA74.1.6 y \xA74.1.7 Aviso al Centro de Operaciones y autorizaci\xF3n en SASET antes de intervenir fibras en operaci\xF3n",gal_senal:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) Per\xEDmetro del \xE1rea de trabajo asegurado con se\xF1alizaci\xF3n vial y peatonal",gal_vigia:"GS-101 \xB7 \xA75.4 c) Cuadrillas de m\xEDnimo dos personas. La fuente no describe c\xF3mo se vigila la tapa ni la comunicaci\xF3n (duda, ver PENDIENTES_SST.md, J10)",gal_atmosfera:"GS-101 \xB7 T\xE9rminos: espacio confinado (aberturas limitadas, ventilaci\xF3n desfavorable). La fuente no describe el procedimiento de atm\xF3sfera (duda, ver PENDIENTES_SST.md, J10)",gal_ingreso:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 c) Ingreso por escalera met\xE1lica cuando la profundidad lo amerita (aplicado a la galer\xEDa: duda, ver PENDIENTES_SST.md, J10)",gal_epp:"GS-101 \xB7 \xA75.3 Uso de EPP: lista propuesta para la galer\xEDa, a validar por Salud Ocupacional (ver PENDIENTES_SST.md, J10)",gal_respirador:"GS-101 \xB7 \xA75.3.3 f) Respiradores con filtros en lugares de escasa ventilaci\xF3n; los filtros se reemplazan cuando se saturan",gal_cables:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) No da\xF1ar los cables existentes; \xA76.2.2 radio de curvatura; \xA76.2.7.2 fijaciones con cobre en servicio",gal_pletinas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7.1 b) Pletinas peque\xF1as de 20 cm; d) el cable se sujeta del centro hacia los extremos",gal_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 b) y c) Rollo de reserva de 20 a 25 m en la galer\xEDa, en la pared opuesta al MDF, a la mayor altura posible",gal_50cm:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 d) En la pared del MDF, 50 cm libres desde la salida de los ductos hacia el fondo",gal_placas:"Manual MNO-DS-GE-001 \xB7 \xA76.4.2.3 a) y e) Placas acr\xEDlicas con origen y destino; dos placas en cada rollo de reserva",gal_sellado:"Manual MNO-DS-GE-001 \xB7 Anexo 1: sellado de los ductos en la galer\xEDa (espuma expandible reentrable; subductos con tapones de hule)",eri_antes:"GS-101 \xB7 \xA75.7 Antes a) y b): personal capacitado como equipo ERI y en rescate vertical; botiqu\xEDn b\xE1sico y equipos para rescate vertical (cuerdas de seguridad, mosquetones, pull-lift) \xB7 p. 42",eri_criticas:"GS-101 \xB7 \xA75.7 Antes d): los trabajos mayores de 12 m son muy cr\xEDticos; sistema de rescate en el sitio y persona competente en rescate \xB7 p. 42",eri_sistema:"GS-101 \xB7 \xA75.7 Antes c): reportar el deterioro o da\xF1o de los sistemas de prevenci\xF3n y protecci\xF3n contra ca\xEDdas \xB7 p. 42",eri_despejar:"GS-101 \xB7 \xA75.7 Durante a): despejar completamente el \xE1rea donde se present\xF3 el accidente \xB7 p. 42",eri_distancia:"GS-101 \xB7 \xA75.7 Durante b) y g): distancia prudente y segura; antes de un rescate, comprobar que el \xE1rea es segura y que uno est\xE1 protegido \xB7 pp. 42\u201343",eri_911:"GS-101 \xB7 \xA75.7 Durante e) y f): pedir ayuda al 9-1-1; no hacer maniobras de rescate de las que no se tenga conocimiento previo \xB7 p. 43",eri_no_mover:"GS-101 \xB7 \xA75.7 Durante d) y Despu\xE9s b): no mover a la v\xEDctima salvo raz\xF3n de seguridad; brindar tranquilidad a la v\xEDctima \xB7 p. 43",eri_terceros:"GS-101 \xB7 \xA75.7 Durante h): ning\xFAn trabajador informa a personas u organizaciones externas; solo la direcci\xF3n o personal autorizado \xB7 p. 43",eri_fuera:"GS-101 \xB7 \xA75.5 n): los equipos para trabajo en altura que hayan sido usados en pruebas o por una ca\xEDda libre quedan fuera de servicio \xB7 p. 21",sv_permiso:"GS-101 \xB7 \xA75.8 a) Solo conduce veh\xEDculos institucionales el funcionario con los permisos de conducir del ICE \xB7 p. 42",sv_revision:"GS-101 \xB7 \xA75.8 b) Antes de usar el veh\xEDculo se revisan los niveles de aceite, combustible y agua, luces, repuesto, documentos, se\xF1alizaci\xF3n, herramientas y llantas \xB7 p. 43",sv_ley:"GS-101 \xB7 \xA75.8 c) y l) Conducir responsablemente, respetando la Ley de Tr\xE1nsito, sin abusar de la destreza al conducir \xB7 p. 43",sv_celular:"GS-101 \xB7 \xA75.8 d) Queda prohibido el uso del celular durante la conducci\xF3n del veh\xEDculo \xB7 p. 43",sv_estacionar:"GS-101 \xB7 \xA75.8 e) Al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",sv_carga:"GS-101 \xB7 \xA75.8 g) Asegurar objetos, materiales, herramientas y equipos: son un riesgo en un frenado r\xE1pido, vuelco o colisi\xF3n \xB7 p. 43",sv_tablero:"GS-101 \xB7 \xA75.8 h) e i) Nada suelto en el tablero; no recoger objetos del piso ni lejos del alcance mientras se conduce \xB7 p. 43",sv_fatiga:"GS-101 \xB7 \xA75.8 m) Con cansancio o fatiga: detener el veh\xEDculo en un sitio seguro, bajarse, caminar y respirar; si va acompa\xF1ado, ceder la conducci\xF3n \xB7 p. 43",sv_calma:"GS-101 \xB7 \xA75.8 o) Manejar con calma, sin perder el control con otros conductores y evitando confrontaciones \xB7 p. 43",sv_mojado:"GS-101 \xB7 \xA75.8 p) En caminos con grava, arenosos o mojados, bajar la velocidad y manejar con cuidado \xB7 p. 44",sv_danos:"GS-101 \xB7 \xA75.8 q) Reportar los da\xF1os que se observen o causen al veh\xEDculo; no ocultarlos, pueden producir un accidente \xB7 p. 44",sv_alcohol:"GS-101 \xB7 \xA75.8 r) No conducir bajo los efectos del alcohol, drogas o medicamentos que causen somnolencia \xB7 p. 44",sv_defensivo:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Manejo defensivo y sus cinco elementos: conocimiento, estar alerta, previsi\xF3n, juicio y habilidad \xB7 diap. 4\u201311",sv_humano:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 El 90 % de los accidentes viales tiene origen en el factor humano \xB7 diap. 13",sv_estados:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Estados (prisa, frustraci\xF3n, cansancio, complacencia) y los errores que producen \xB7 diap. 17\u201325",sv_linea_fuego:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Errores: ojos no en la tarea y entrar en la l\xEDnea de fuego \xB7 diap. 26 y 30",sv_lluvia:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Factor lluvia: calle mojada (\xABespecie de jab\xF3n\xBB), carreteras, poca visibilidad y neblina \xB7 diap. 36\u201341",sv_visibilidad:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Poca visibilidad: reducir la velocidad; si es excesiva, detener el veh\xEDculo a un costado y esperar \xB7 diap. 40",sv_derrumbe:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Derrumbes originados por la lluvia \xB7 diap. 38 (qu\xE9 hacer ante uno: decisi\xF3n conservadora, ver PENDIENTES_SST.md, J12\u2013J13)",sv_sustancias:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Alcohol, drogas y f\xE1rmacos: efectos seg\xFAn la dosis; los f\xE1rmacos como factor accidentog\xE9nico \xB7 diap. 44\u201349",sv_minimos:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Nueve m\xEDnimos de seguridad vehicular, a revisar todos los d\xEDas antes de salir \xB7 diap. 51\u201352",sv_cinturon:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 M\xEDnimo 1: cintur\xF3n de seguridad retr\xE1ctil de 2 o 3 puntos \xB7 diap. 51",ev_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 \xB7 GS-101 \xB7 Delimitaci\xF3n del \xE1rea",ev_impaciente:"GS-101 \xB7 Cuadrillas en zonas de tr\xE1fico denso \xB7 Delimitaci\xF3n del \xE1rea de trabajo",gs31_ats:"GS-31 \xB7 \xA75.2.4 Antes de la ejecuci\xF3n diaria se realiza el ATS, con todos los trabajadores y liderado por el encargado o t\xE9cnico de la cuadrilla (A01-GS-31) \xB7 p. 10",gs31_cambios:"GS-31 \xB7 \xA75.2.5 Si cambia la planificaci\xF3n inicial (obra, proceso, equipos, personal) se aplica de nuevo el ATS \xB7 p. 10",gs31_f02:"GS-31 \xB7 \xA75.1.11 Las tareas con riesgos de situaci\xF3n cr\xEDtica se eval\xFAan con el F02-GS-31 An\xE1lisis de Tarea Cr\xEDtica \xB7 p. 5",gs31_gravedad:"GS-31 \xB7 \xA75.1.11 d) y f) Gravedad: la p\xE9rdida m\xE1s probable, en la escala 0, 2, 4 y 6 \xB7 p. 6",gs31_repetitividad:"GS-31 \xB7 \xA75.1.11 g) Repetitividad: n\xFAmero de colaboradores y cu\xE1nto de la jornada hace cada uno la tarea \xB7 p. 7",gs31_probabilidad:"GS-31 \xB7 \xA75.1.11 h) Probabilidad de esa p\xE9rdida, de \u22121 a +1 respecto al promedio \xB7 p. 7",gs31_criticidad:"GS-31 \xB7 \xA75.1.11 i) y k) GC = G + R + P (0 a 10): de 0 a 4 baja, m\xE1s de 4 y menos de 8 moderada, 8 o m\xE1s alta \xB7 pp. 7\u20138",gs31_controles:"GS-31 \xB7 \xA75.1.11 m) Controles m\xEDnimos: EPP y dispositivos, capacitaci\xF3n, protocolo de trabajo seguro y la normativa que los respalda \xB7 p. 8",ats_pizarra:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 ATS del d\xEDa: la pizarra (trabajo, herramientas y equipos, obra, fecha, personal y actividades numeradas) \xB7 diap. 46\u201347",ats_muerte:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Factores de muerte; si hay uno o m\xE1s, se revisan en conjunto las acciones a implementar \xB7 diap. 48",ats_riesgos:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Riesgos de cada tarea, manteniendo la numeraci\xF3n de las actividades \xB7 diap. 49",rec_anomalia:"GS-101 \xB7 \xA73.5 b) T\xE9cnico: informar al coordinador de cuadrilla y/o SST cualquier anomal\xEDa o desviaci\xF3n \xB7 p. 4",rec_inminente:"GS-101 \xB7 \xA75.6.4 g), final: si se observa inminente peligro para las personas, se interrumpe la actividad \xB7 p. 23",rec_cuasi:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) c) Casi incidente sin afectaci\xF3n a la salud: F01-GS-52 o F06-GS-52 \xB7 p. 41",rec_accidente:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) b) y d) Accidente: F07-GS-52 a la jefatura de inmediato, antes de terminar la jornada \xB7 pp. 40\u201341",rec_liderazgo:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Reporte por comportamientos: retroalimentaci\xF3n correctiva y registro en el F02-CSCON-SST-00-25 con firma del trabajador; aviso a la jefatura inmediata \xB7 diap. 68",sol_clima:"GS-101 \xB7 \xA75.1 e) Suspensi\xF3n de la actividad por condiciones clim\xE1ticas desfavorables: tormentas el\xE9ctricas, lluvias u otras que pongan en riesgo a los ejecutores \xB7 p. 9",demo_generacion_autorizacion:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 El ingreso a la planta solar se coordina con su encargado, con autorizaci\xF3n previa",demo_generacion_energizado:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los paneles generan electricidad mientras les da la luz: se tratan como energizados",demo_generacion_no_pisar:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 No se pisa ni se apoya nadie en los paneles ni en su estructura",demo_generacion_conexiones:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Solo personal calificado manipula conexiones e inversores, seg\xFAn el procedimiento de la planta",demo_generacion_danos:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los da\xF1os en paneles, cables o inversores se reportan y no se tocan",demo_generacion_calor:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Hidratarse, protegerse del sol y descansar a la sombra con frecuencia",mv_apoyo:"GS-101 \xB7 \xA75.6.6: el veh\xEDculo sirve de soporte a la escalera a medio vano \xB7 p. 28",mv_dos_puntos:"GS-101 \xB7 \xA75.6.6: la escalera se amarra al pant\xF3grafo y al eje de una llanta, a dos puntos \xB7 p. 28",mv_nudos:"GS-101 \xB7 \xA75.6.6: nudo ocho aplicado para dar tensi\xF3n y pata de chancho (ballestrinque) para terminar \xB7 p. 28",mv_subida:"GS-101 \xB7 \xA75.6.6: para subir y bajar, la cuerda de seguridad va sujetada a la escalera \xB7 p. 28",mv_bajada:"GS-101 \xB7 \xA75.6.4 j): subir y bajar de frente, con las manos libres y tres puntos de apoyo \xB7 p. 23",mv_tres:"GS-101 \xB7 \xA75.6.4, nota de la Tabla N\xB0 2: se proh\xEDbe el uso de los tres pelda\xF1os superiores \xB7 p. 22",mv_tabla2:"GS-101 \xB7 \xA75.6.4 f) y Tabla N\xB0 2: altura m\xE1xima permitida de uso de cada escalera \xB7 p. 22",mv_inspeccion:"GS-101 \xB7 \xA75.6.4 c), l), t) y u): revisar pelda\xF1os, uniones, largueros y patas antes de usar la escalera \xB7 pp. 22\u201324",mv_senalizacion:"GS-101 \xB7 \xA75.6.4 g): per\xEDmetro m\xEDnimo de 2 m alrededor de la escalera, con cintas y conos \xB7 pp. 22\u201323",mv_camion:"GS-101 \xB7 \xA75.8 e): al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",mv_herramientas:"GS-101 \xB7 \xA75.6.4 k): materiales y herramientas con bolso, mecate o cuerda \xB7 p. 23",mv_guardar:"GS-101 \xB7 \xA75.6.4 a) y d): la escalera se maneja entre dos y se deposita, no se tira; se limpian los desechos de los pelda\xF1os \xB7 p. 22",mv_mover:"GS-101 \xB7 \xA75.6.4 h): la escalera no se mueve ni se extiende mientras haya personal sobre ella \xB7 p. 23",cala_abertura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.2 Dimensi\xF3n de la cala: 1,5 m de largo por 1 m de ancho, como m\xEDnimo \xB7 p. 18",cala_pieza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tubo de reparaci\xF3n: 50 cm m\xE1s largo que la abertura entre los extremos del ducto \xB7 p. 18",cala_ranura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 La abertura del corte longitudinal queda arriba y se cierra con dos medias secciones de PVC y pegamento \xB7 p. 18",cala_amarras:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tres cintas met\xE1licas o tipo gaza con tornillo sin fin: una en cada extremo y otra en el centro \xB7 p. 18",cala_capas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.4 y Figura 2a: capas de cierre en su orden, espesor y material \xB7 p. 18",cala_empalme:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm, con preformado de 75 cm o menos \xB7 p. 52",cala_anclas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Anclas de seguridad: cada 500 m en tramos rectos de 1 km o m\xE1s, y en cruces de v\xEDa con vano mayor de 80 m en terreno plano \xB7 p. 36",cala_ancla_distancia:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Ubicaci\xF3n del ancla: la mitad de la altura, medida del herraje a la base del poste \xB7 p. 36",cr_cliente:"GS-101 \xB7 \xA75.6.8 a) y b) Observar el cielorraso antes de empezar y preguntar al cliente por sus condiciones \xB7 p. 33",cr_estructura:"GS-101 \xB7 \xA75.6.8 c) La estructura se observa sin corrosi\xF3n avanzada ni madera descompuesta, y estable \xB7 p. 33",cr_electrico:"GS-101 \xB7 \xA75.6.8 d) Cable el\xE9ctrico expuesto: el cliente desconecta la electricidad antes de subir; con guantes diel\xE9ctricos solo si no es posible \xB7 p. 33",cr_epp:"GS-101 \xB7 \xA75.6.8 e) EPP del cielorraso: anteojos, casco con barbiquejo y linterna, ropa, calzado, guantes diel\xE9ctricos y rodilleras \xB7 p. 34",cr_arnes:"GS-101 \xB7 \xA75.5 a) Trabajo a una altura, como en cielorrasos: equipo para trabajo en altura autorizado \xB7 p. 19",cr_extension:"GS-101 \xB7 \xA75.6.8 f) Valorar si es posible usar una extensi\xF3n de fibra para evitar subir al cielorraso \xB7 p. 34",cr_avispas:"GS-101 \xB7 \xA75.6.8 g) Al ingresar, verificar desde el suelo la ausencia de colmenas de avispas o similares \xB7 p. 34",cr_caminar:"GS-101 \xB7 \xA75.6.7 h) por analog\xEDa: caminar por la estructura y no sobre la l\xE1mina (el cielorraso no se cita: duda, ver PENDIENTES_SST.md, J19) \xB7 p. 32",cr_escalera_tipo:"GS-101 \xB7 \xA75.6.4 q) Escaleras de abrir de fibra de vidrio; nota: el aluminio solo donde no hay riesgo el\xE9ctrico \xB7 p. 23",el_provisional:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Arts. 111 y 113 del Reglamento de Seguridad en Construcciones: instalaciones provisionales seg\xFAn el C\xF3digo El\xE9ctrico de CR (entubado, adecuado a la tensi\xF3n nominal) \xB7 diap. 22\u201326",el_medidor:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 112: medidores el\xE9ctricos provisionales con base estable y protecci\xF3n del agua \xB7 diap. 22\u201326",el_tablero:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 114: tableros y cajas el\xE9ctricas tapados, identificados y cerrados \xB7 diap. 22\u201326",el_conductores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 115: conductores protegidos ante da\xF1os mec\xE1nicos de la construcci\xF3n (maquinaria, veh\xEDculos, agua, qu\xEDmicos) \xB7 diap. 27",el_epp:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 117: el personal en presencia de energ\xEDa el\xE9ctrica cuenta con protecci\xF3n diel\xE9ctrica; no usar el EPP diel\xE9ctrico es un acto inseguro \xB7 diap. 27 y 51",el_condiciones:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Condiciones inseguras: enchufes deteriorados, uniones deterioradas o sin aislamiento y conexiones fuera de norma \xB7 diap. 46\u201348",el_autorizacion:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: intervenir sin autorizaci\xF3n \xB7 diap. 51",el_mojado:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: manos o pies mojados; la piel h\xFAmeda tiene menor resistencia \xB7 diap. 13 y 51",el_combustible:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: materiales combustibles o explosivos donde se presente arco el\xE9ctrico; el arco es un fuego repentino con metal fundido \xB7 diap. 5 y 31",el_anexo_b:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: peligro inminente o alto riesgo (sin protecci\xF3n frente al contacto con partes energizadas o el cortocircuito; lluvia y tormentas el\xE9ctricas) \xB7 diap. 30\u201331",el_anexo_c:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo C del C\xF3digo El\xE9ctrico: lista de verificaci\xF3n de instalaciones el\xE9ctricas, aplicada en conjunto con el t\xE9cnico el\xE9ctrico \xB7 diap. 32\u201340",el_factores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Factores de la magnitud de un incidente el\xE9ctrico: intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria \xB7 diap. 9"};var GM=new Map([...Object.entries(j).map(([a,e])=>[e,a]),...Object.entries(ja).map(([a,e])=>[e,"poste_"+a])]);var p_=[{n:1,p:"\xBFA partir de qu\xE9 altura se considera trabajo en altura?",o:["M\xE1s de 1,80 m","M\xE1s de 3 m","M\xE1s de 1 m","Solo arriba de 5 m"],ref:j.altura},{n:1,p:"\xBFCu\xE1ntos trabajadores pueden estar sobre una escalera port\xE1til?",o:["Uno solo","Dos, si es de extensi\xF3n","Tres, si la escalera es larga","Los que quepan"],ref:j.escaleras},{n:1,p:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera en el poste?",o:["75\xB0","60\xB0","90\xB0","45\xB0"],ref:j.amarre},{n:1,p:"\xBFQu\xE9 pelda\xF1os de la escalera est\xE1 prohibido usar?",o:["Los tres superiores","Solo el primer pelda\xF1o","Ninguno","Los dos inferiores"],ref:j.escaleras},{n:1,p:"\xBFQu\xE9 per\xEDmetro m\xEDnimo se se\xF1aliza alrededor de la escalera?",o:["2 metros","50 cm","No hace falta","10 metros"],ref:j.escaleras},{n:1,p:"Al subir y bajar la escalera debo mantener\u2026",o:["Tres puntos de apoyo","Dos puntos de apoyo","Las manos ocupadas","Un punto de apoyo"],ref:j.escaleras},{n:1,p:"\xBFC\xF3mo se suben las herramientas a la escalera?",o:["Con bolso, mecate o cuerda","En las bolsas del pantal\xF3n","En la mano, pegadas al cuerpo","Que me las lancen desde abajo"],ref:j.escaleras},{n:1,p:"\xBFSe puede trabajar en altura con reloj, anillo o cadena?",o:["No, se proh\xEDbe todo tipo de alhaja","S\xED, si son peque\xF1os y no molestan","Solo el reloj, si no tiene correa met\xE1lica","S\xED, si van bajo el guante de cuero"],ref:j.altura},{n:1,p:"Ante un accidente en altura, \xBFa qu\xE9 n\xFAmero se pide ayuda?",o:["9-1-1","1-1-3","8-0-0","Se espera a la jefatura"],ref:j.emergencias},{n:1,p:"La escalera viaja en el techo del cami\xF3n. \xBFSubir a bajarla es trabajo en altura?",o:["S\xED: el techo est\xE1 a m\xE1s de 1,80 m","No: es solo un cami\xF3n de reparto","Solo si llueve fuerte, con viento","Solo si es de noche y est\xE1 oscuro"],ref:j.altura},{n:1,p:"Tu arn\xE9s tiene una costura reventada. \xBFQu\xE9 haces?",o:["No lo uso, informo y pido la sustituci\xF3n","Lo uso con cuidado, sin que se note","Lo refuerzo con cinta y lo uso hoy","Lo uso solo hoy, ma\xF1ana lo cambio"],ref:j.altura},{n:1,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable a\xE9reo sobre una acera, en su flecha m\xE1xima?",o:["4,5 m","3 m","6 m","2,5 m"],ref:j.m_altura},{n:1,p:"\xBFCu\xE1ntas calcoman\xEDas reflectivas de prevenci\xF3n van en el poste?",o:["Dos, una a cada lado","Una, en el centro del poste","Cuatro, dos a cada lado","Ninguna: no hace falta"],ref:j.m_calco},{n:1,p:"\xBFCu\xE1ntas personas, como m\xEDnimo, forman una cuadrilla de instalaci\xF3n de fibra?",o:["Dos: un t\xE9cnico y un asistente","Una, si tiene experiencia","Cuatro, con un supervisor de obra","Las que haya disponibles ese d\xEDa"],ref:j.cuadrillas},{n:2,p:"\xBFD\xF3nde se conecta preferiblemente la l\xEDnea de vida?",o:["En un anclaje por encima de la cabeza","En el portaganchos pl\xE1stico del arn\xE9s","En un cable telef\xF3nico de la red","A la altura de la cintura, en un pelda\xF1o"],ref:j.altura},{n:2,p:"La l\xEDnea de vida de 0,90 m se conecta en el arn\xE9s a la\u2026",o:["Argolla dorsal (espalda)","Argolla frontal (pecho)","Argolla D lateral","Portaganchos pl\xE1stico"],ref:j.altura},{n:2,p:"El freno para cuerda (o el carrito de la l\xEDnea vertical del cami\xF3n) se conecta a la\u2026",o:["Argolla frontal, a la altura del pecho y el ombligo","Argolla dorsal, en la espalda, junto a la l\xEDnea de 0,90 m","Argolla D lateral de la faja de posicionamiento","Hebilla del cintur\xF3n, sin ning\xFAn anclaje"],ref:j.freno},{n:2,p:"Antes de usar los guantes diel\xE9ctricos, adem\xE1s de revisarlos a la vista, se les hace\u2026",o:["La prueba de aire (inflarlos) para buscar fugas","Nada m\xE1s: con una mirada basta","Una prueba con agua caliente y jab\xF3n","Un estir\xF3n fuerte, de lado y de frente"],ref:j.epp},{n:2,p:"Los guantes diel\xE9ctricos clase 00 (etiqueta beige) protegen hasta\u2026",o:["500 V","1000 V","50 V","15 kV"],ref:j.epp},{n:2,p:"\xBFPor qu\xE9 se usa un guante de cuero sobre el guante diel\xE9ctrico?",o:["Para evitar perforaciones y rasgados del aislante","Para que no se resbale la mano en el trabajo","Porque el color se ve mejor en el poste","No se debe usar: el aislante ya basta solo"],ref:j.epp},{n:2,p:"El casco para trabajo en postes es ala ancha tipo II, con barbiquejo de\u2026",o:["Cuatro puntos","Dos puntos","Un punto","No lleva barbiquejo"],ref:j.epp},{n:2,p:"Resistencia m\xEDnima de un punto de anclaje por persona conectada:",o:["5000 lb (2272 kg)","500 lb","1000 kg","La de cualquier tubo firme"],ref:j.altura},{n:2,p:"Un equipo de altura que ya detuvo una ca\xEDda libre debe\u2026",o:["Quedar fuera de servicio","Revisarse y seguir us\xE1ndose","Lavarse y guardarse","Usarse solo en techos"],ref:j.altura},{n:2,p:"\xBFSe puede enrollar la l\xEDnea de vida para acortarla?",o:["No, est\xE1 prohibido","S\xED, dos vueltas","S\xED, si el anclaje est\xE1 bajo","Solo en escaleras"],ref:j.altura},{n:2,p:"\xBFCu\xE1ntos ganchos se pueden conectar en un mismo anillo D?",o:["Uno, salvo que el fabricante certifique otra cosa","Dos, si ambos son del mismo tama\xF1o","Tres, si el anillo es de acero grueso","Los que quepan en el anillo D"],ref:j.altura},{n:2,p:"La escalera de 28 pies (8,53 m) se traslada y coloca entre\u2026",o:["Dos personas, de estatura similar","Una persona, con ayuda de la cuerda","Tres personas, con la escalera abierta","Con el cami\xF3n en marcha, sin frenar"],ref:j.escaleras},{n:2,p:"L\xEDmite de carga manual para un trabajador sin limitaciones de salud:",o:["25 kg (20 kg para una trabajadora)","50 kg, con un compa\xF1ero que ayude","40 kg para todos los trabajadores","No hay l\xEDmite si el peso se reparte"],ref:j.carga},{n:2,p:"\xBFSe pueden usar calzas para nivelar la escalera?",o:["No: se busca nivelar el sitio sin calzas","S\xED, con piedras o pedazos de madera","S\xED, con bloques de concreto, si el piso est\xE1 flojo","Solo de noche, cuando hay menos tr\xE1nsito"],ref:j.escaleras},{n:3,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable en los cruces de calle?",o:["5 m","4,5 m","6,5 m","3,5 m"],ref:j.m_altura},{n:3,p:"Radio m\xEDnimo de curvatura de un cable de fibra \xF3ptica:",o:["20 veces su di\xE1metro","5 veces su di\xE1metro","2 veces su di\xE1metro","No hay m\xEDnimo"],ref:j.m_radio},{n:3,p:"Tensi\xF3n m\xE1xima recomendada si no hay datos del fabricante:",o:["250 kgf","50 kgf","1000 kgf","Sin l\xEDmite"],ref:j.m_tension},{n:3,p:"La balona de los cables en el poste debe medir como m\xE1ximo:",o:["10 cm","50 cm","1 m","No hay l\xEDmite"],ref:j.m_balona},{n:3,p:"Altura m\xEDnima de la gaza respecto al suelo:",o:["5 m","2 m","3 m","8 m"],ref:j.m_gaza},{n:3,p:"Si en el poste no hay secundario el\xE9ctrico, la gaza va a esta distancia del neutro:",o:["80 cm","10 cm","40 cm","2 m"],ref:j.m_gaza},{n:3,p:"Di\xE1metro del rollo de reserva en redes a\xE9reas:",o:["De 40 a 50 cm","De 5 a 10 cm","Unos 2 m de di\xE1metro","El que quepa"],ref:j.m_rollo_poste},{n:3,p:"Distancia del rollo de reserva al poste:",o:["75 cm","10 cm","2 m","No hay norma"],ref:j.m_reserva},{n:3,p:"Distancia normal entre postes en redes existentes:",o:["Entre 40 y 80 m","Entre 5 y 10 m","M\xE1s de 200 m siempre","No importa"],ref:j.m_postes},{n:3,p:"En un cruce sin apoyo, \xBFcu\xE1ntas calcoman\xEDas reflectivas se instalan?",o:["Dos a cada lado de la balona del cruce","Una en el centro del poste","Ninguna, el cruce no lo necesita","Solo si es de noche o llueve"],ref:j.m_balona},{n:3,p:"Todo cable que cruce una l\xEDnea de ferrocarril se instala\u2026",o:["De forma subterr\xE1nea, sin tendido a\xE9reo","A\xE9reo a 5 m, como en un cruce de calle","A\xE9reo a 4,5 m, como en una acera","A\xE9reo, con un poste a cada lado de la v\xEDa"],ref:j.m_ferrea},{n:3,p:"La fibra n\xFAmero 1 del c\xF3digo de colores EIA/TIA-598 es:",o:["Azul","Naranja","Verde","Caf\xE9"],ref:j.m_colores},{n:3,p:"Presi\xF3n de prueba de hermeticidad del cierre de empalme:",o:["8 psi","1 psi","30 psi","No se prueba"],ref:j.m_cierre},{n:3,p:"\xBFSe puede instalar un cable sobre un transformador o l\xEDnea el\xE9ctrica?",o:["Nunca","S\xED, si es diel\xE9ctrico","S\xED, con guantes","Solo de d\xEDa"],ref:j.m_prep},{n:3,p:"Longitud del rollo de reserva dentro de un registro:",o:["De 28 a 35 m","De 2 a 5 m","100 m","No se deja reserva"],ref:j.m_reserva_sub},{n:3,p:"\xBFSe recomienda pasar fibra y cobre por el mismo ducto?",o:["No, salvo excepciones justificadas","S\xED, siempre que est\xE9n bien sujetos","Solo si son delgados y de poco peso","Es obligatorio, seg\xFAn el jefe de obra"],ref:j.m_subterranea},{n:3,p:"Al instalar un cable directamente en un ducto, adem\xE1s se deja\u2026",o:["Una gu\xEDa para el halado de cables en el futuro","El ducto sin tapar, para ventilar","Agua jabonosa para lubricar el cable","Nada m\xE1s: el ducto ya queda listo"],ref:j.m_subterranea},{n:3,p:"Al terminar el trabajo en un registro, la tapa\u2026",o:["Se coloca asegurada con sus dispositivos de seguridad","Se deja abierta un rato para ventilar el registro","Se apoya sobre el borde sin asegurar","Se guarda en el cami\xF3n hasta el d\xEDa siguiente"],ref:j.m_tapas},{n:4,p:"Antes de usar el veh\xEDculo de la cuadrilla se revisa\u2026",o:["Aceite, combustible, agua, luces, llantas, repuesto, documentos, se\xF1alizaci\xF3n y herramientas","Solo el combustible y que el motor encienda bien, sin mirar nada m\xE1s del veh\xEDculo","Solo que las luces funcionen y que el veh\xEDculo se vea limpio por fuera","Nada: eso lo hace el taller una vez al a\xF1o, y el chofer solo maneja y reporta si algo suena raro"],ref:j.vehiculos},{n:4,p:"Al estacionar el cami\xF3n en la calle para trabajar, se debe\u2026",o:["Hacerlo en un lugar seguro y se\xF1alizar","Dejarlo donde caiga, con las luces apagadas","Subirlo completo a la acera","Dejarlo en el carril, es solo un rato"],ref:j.vehiculos},{n:4,p:"\xBFSe puede usar el celular mientras se conduce el veh\xEDculo institucional?",o:["No, est\xE1 prohibido","S\xED, con altavoz","S\xED, en sem\xE1foros","Solo para mensajes de trabajo"],ref:j.vehiculos},{n:4,p:"Si sientes cansancio o fatiga mientras conduces\u2026",o:["Te detienes en un sitio seguro, descansas o cedes el volante","Aceleras un poco para llegar antes de que se haga tarde","Bajas la ventana, pones m\xFAsica y sigues manejando","Tomas caf\xE9, te estiras en el carro y contin\xFAas sin parar"],ref:j.vehiculos},{n:4,p:"Las herramientas y materiales que van en el cami\xF3n deben ir\u2026",o:["Asegurados: en un frenazo o vuelco se vuelven proyectiles","Sueltos en la cajuela para sacarlos m\xE1s r\xE1pido","En el tablero, encima de la guantera","En el asiento del copiloto, sin amarrarlos"],ref:j.vehiculos},{n:4,p:"En una v\xEDa de tr\xE1fico denso, la cuadrilla debe\u2026",o:["Planificar con m\xE1s personal y alguien que regule el tr\xE1nsito","Trabajar m\xE1s r\xE1pido para liberar la v\xEDa","Trabajar sin conos para no estorbar","Ir una sola persona, para ahorrar gastos del d\xEDa"],ref:j.cuadrillas},{n:4,p:"Para trabajar en una v\xEDa de alto tr\xE1nsito, \xBFa qui\xE9n se puede pedir colaboraci\xF3n?",o:["A las autoridades de tr\xE1nsito","A los vecinos de la cuadra","A nadie: la cuadrilla se arregla sola","A los conductores que pasan por la v\xEDa"],ref:j.poda_transito},{n:4,p:"El GS-101 define viento fuerte como una velocidad constante mayor a\u2026",o:["40 km/h","10 km/h","100 km/h","20 km/h"],ref:j.altura},{n:4,p:"Si una l\xEDnea de telecomunicaciones queda m\xE1s cerca de lo permitido de la l\xEDnea primaria (media tensi\xF3n), \xBFqu\xE9 se hace?",o:["No se trabaja y se coordina la desconexi\xF3n con la empresa el\xE9ctrica","Se trabaja con guantes de cuero y con cuidado, sin tocar nada","Se trabaja r\xE1pido, antes de que llegue la distribuidora","Se ignora el riesgo si no se ven chispas ni humo en el poste"],ref:j.mt_suspender},{n:4,p:"Umbral de \xABno soltar\xBB de la corriente el\xE9ctrica en el cuerpo:",o:["10 mA","0,5 mA","1 A","100 A"],ref:j.electrico},{n:4,p:"\xBFA partir de qu\xE9 altura un trabajo se considera muy cr\xEDtico y exige rescate en sitio?",o:["M\xE1s de 12 m","M\xE1s de 3 m","M\xE1s de 30 m","M\xE1s de 100 m"],ref:j.emergencias},{n:4,p:"Tras una ca\xEDda, \xBFse mueve a la v\xEDctima?",o:["No, salvo que sea necesario por seguridad","S\xED, siempre, llev\xE1ndola a la sombra del poste","S\xED, para sentarla y darle agua de inmediato","S\xED, para llevarla en el cami\xF3n al hospital"],ref:j.emergencias},{n:4,p:"Un accidente laboral se reporta a la jefatura\u2026",o:["De inmediato, antes de terminar la jornada","Al final de la semana, con el resto de informes","Solo si hubo hospitalizaci\xF3n o incapacidad","No se reporta si fue leve y no dej\xF3 marca"],ref:j.reportes},{n:4,p:"Distancia t\xEDpica de ca\xEDda libre que considera el GS-101 al planificar un sistema antica\xEDdas:",o:["Por lo general, 1,80 m","5 m, seg\xFAn la altura del poste","10 cm, seg\xFAn el tipo de arn\xE9s","No importa la altura del trabajo"],ref:j.altura},{n:4,p:"\xBFCon qu\xE9 viento no se debe trabajar en techos?",o:["Vientos superiores a 60 km/h","Vientos superiores a 30 km/h","Vientos superiores a 90 km/h","El viento no es un factor en techos"],ref:j.t_techo_clima},{n:4,p:"\xBFCu\xE1ndo se deben identificar las l\xE1minas pl\xE1sticas, de policarbonato o tragaluces del techo?",o:["Desde el piso, antes de subir al techo","Cuando ya est\xE1s parado sobre el techo","Solo si llueve fuerte y hay viento","Nunca: no se ven de cerca"],ref:j.t_techo_caminar},{n:4,p:"Para caminar en un techo, \xBFpor d\xF3nde se debe hacer?",o:["Por los clavadores y los lugares m\xE1s c\xE9ntricos del techo","Por el borde del techo, para ver la calle","Por cualquier l\xE1mina, si no se ve da\xF1ada","Por la l\xE1mina m\xE1s cercana a la escalera"],ref:j.t_techo_caminar},{n:4,p:"Si no hay amarre seguro para la escalera, \xBFqu\xE9 es obligatorio?",o:["Que un compa\xF1ero de trabajo sostenga la escalera","Que la escalera se amarre a una l\xE1mina del techo","Que se suba con las manos ocupadas","Nada: la escalera se apoya sola"],ref:j.t_techo_escalera},{n:4,p:"\xBFCu\xE1nto debe sobrepasar la escalera la estructura a la que se apoya?",o:["1 metro o tres pelda\xF1os","30 cent\xEDmetros","No debe sobrepasarla","3 metros"],ref:j.t_techo_escalera},{n:4,p:"Al llegar al nivel del techo, \xBFa qu\xE9 distancia m\xEDnima del borde se debe retirar la persona antes de quitarse el equipo de altura?",o:["1 metro","50 cent\xEDmetros","No hay distancia m\xEDnima","3 metros"],ref:j.t_techo_traslado},{n:5,p:"\xBFQu\xE9 distancia m\xEDnima se exige entre un conductor de telecomunicaciones y una l\xEDnea primaria de media tensi\xF3n?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:j.mt_suspender,e:"Si la l\xEDnea de telecomunicaciones se sospecha a menos de 80 cm de la primaria de media tensi\xF3n, no se realiza ning\xFAn trabajo (GS-101 \xA75.6.9 f)."},{n:5,p:"\xBFQu\xE9 distancia se mantiene entre el conductor telef\xF3nico y el secundario el\xE9ctrico?",o:["0,40 m","0,55 m","0,70 m","2,50 m"],ref:j.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el secundario es de 40 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"\xBFY entre el conductor telef\xF3nico y el neutro?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:j.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el neutro es de 80 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"Una l\xEDnea de telecomunicaciones est\xE1 por encima o al mismo nivel que el secundario. \xBFQu\xE9 se hace?",o:["No se trabaja hasta coordinar con la distribuidora la desconexi\xF3n del circuito durante el trabajo","Se trabaja con cuidado, sin tocar el secundario ni el neutro, y se avisa al jefe de cuadrilla","Se sube con guantes de cuero y casco bien puesto, con la l\xEDnea de vida anclada al poste","Se trabaja de noche, cuando hay menos tr\xE1nsito y menos gente cerca del poste"],ref:j.mt_suspender,e:"GS-101 \xA75.6.9 f): en ese caso se coordina con la empresa de distribuci\xF3n la desconexi\xF3n del circuito durante el tiempo del trabajo."},{n:5,p:"Una persona no calificada quiere cruzar el l\xEDmite de aproximaci\xF3n de una l\xEDnea energizada. \xBFPuede?",o:["No, salvo acompa\xF1ada de una persona calificada","S\xED, si lleva guantes de cuero y casco","S\xED, si el trabajo es corto y se hace r\xE1pido","S\xED, si lleva anteojos de seguridad"],ref:j.mt_frontera,e:"Las personas no calificadas no cruzan ese l\xEDmite a menos que est\xE9n acompa\xF1adas por una persona calificada (GS-101 \xA75.2 w)."},{n:5,p:"Toda l\xEDnea el\xE9ctrica cerca del trabajo se considera\u2026",o:["Activa, hasta verificar lo contrario con la distribuidora","Desactivada si no hay ruido ni chispas en el poste","Activa solo si hay chispas o se oye zumbido","Inactiva si est\xE1 en el poste de telecomunicaciones"],ref:j.mt_activa,e:"Todas las l\xEDneas el\xE9ctricas se consideran activas. Si hace falta verificar el estado de tensi\xF3n, se coordina con la distribuidora (GS-101 \xA75.6.9 h)."},{n:4,p:"\xBFQui\xE9n debe verificar y asegurar el ascenso al poste antes de iniciar la actividad?",o:["El encargado de cuadrilla","El t\xE9cnico que sube","Cada trabajador por separado","Nadie: el ascenso se revisa al terminar"],ref:ja.inspeccion},{n:4,p:"\xBFQu\xE9 incluye la inspecci\xF3n de poster\xEDa antes del ascenso?",o:["El poste anterior, posterior, local y el tendido entre postes","Solo el poste donde se va a subir y el que tiene al lado","Solo el tendido entre los dos postes m\xE1s cercanos a la casa","Solo los postes de madera que se ven desde la calle"],ref:ja.inspeccion},{n:4,p:"Si se evidencia alguna de las fallas del \xA75.6.3, \xBFqu\xE9 se hace?",o:["No se realizar\xE1 el trabajo y se realizar\xE1 el reporte a la jefatura de manera inmediata","Se sube con m\xE1s cuidado, revisando cada pelda\xF1o del poste","Se reporta al terminar la jornada, con un informe escrito y firmado","Se apuntala el poste con un puntal de madera y luego se sube"],ref:ja.inspeccion},{n:4,p:"En un poste de madera, \xBFqu\xE9 da\xF1o por fisuras, quemado o podrido no debe superar la fuente?",o:["Una tercera parte del di\xE1metro","La mitad del di\xE1metro","Cualquier fisura es aceptable","Un cuarto del di\xE1metro"],ref:ja.inspeccion},{n:4,p:"En un poste de metal, \xBFqu\xE9 perforaciones son falla?",o:["Perforaciones superiores a una tercera parte del di\xE1metro","Cuando hay m\xE1s de una, aunque sean peque\xF1as","Cuando se ven desde el suelo, a simple vista","Nunca, si el poste sigue en pie"],ref:ja.inspeccion},{n:6,p:"\xBFQu\xE9 equipo de protecci\xF3n exige el GS-101 para la poda de \xE1rboles?",o:["Careta, lentes, protecci\xF3n auditiva, cuerdas de seguridad, casco de cuatro puntos con barbiquejo, guantes para riesgos mec\xE1nicos, ropa y calzado institucionales","Solo casco y guantes de cuero","Arn\xE9s de cuerpo completo y guantes diel\xE9ctricos","Solo lentes: el resto lo decide el encargado"],ref:j.poda_epp},{n:6,p:"\xBFPuede un trabajador subirse a un \xE1rbol para cortar una rama?",o:["No: el trabajador no se sube a un \xE1rbol","S\xED, con cuerdas de seguridad y un compa\xF1ero abajo","S\xED, si la rama es peque\xF1a","S\xED, con arn\xE9s de cuerpo completo"],ref:j.poda_subir},{n:6,p:"Una rama est\xE1 sobre una l\xEDnea energizada. \xBFQu\xE9 se hace?",o:["No se corta: se informa al Ejecutor del Proceso, que coordina con SST y el CLOR","Se corta despacio, con cuidado, sin tocar el cable","Se corta cuando la l\xEDnea se vea sin chispas","Se corta de noche, cuando hay menos gente"],ref:j.poda_linea},{n:6,p:"\xBFQu\xE9 se revisa antes de cada corte de rama?",o:["La distancia a lo energizado, la velocidad y direcci\xF3n del viento y la vegetaci\xF3n que puede interferir con la ca\xEDda","Solo que la motosierra arranque al primer jal\xF3n","Solo que el compa\xF1ero tenga el casco puesto","Nada: la experiencia dice cu\xE1ndo se corta"],ref:j.poda_viento},{n:6,p:"Antes de operar una motosierra, \xBFqu\xE9 condici\xF3n debe cumplir quien la opera?",o:["No estar cansado ni haber tomado medicamentos que alteren la conciencia","Tener un a\xF1o de experiencia, aunque est\xE9 cansado","Haber tomado caf\xE9 para estar alerta","Operarla solo si el supervisor no est\xE1 presente"],ref:j.poda_cansancio},{n:6,p:"\xBFCu\xE1ntos miembros, como m\xEDnimo, forman una cuadrilla de poda de \xE1rboles?",o:["Dos","Uno, si tiene experiencia","Uno, si el \xE1rbol es peque\xF1o","Tres, con un supervisor"],ref:j.poda_cuadrilla},{n:7,p:"\xBFCu\xE1ndo debe usarse el barbiquejo del casco?",o:["Cuando exista posibilidad de desprendimiento del casco por fuertes vientos, espacios confinados, postura corporal y trabajos en altura","Solo cuando el casco es nuevo","Nunca, porque incomoda al trabajar","Solo si el trabajo es de d\xEDa"],ref:j.epp},{n:7,p:"Los rollos de reserva en la galer\xEDa de cable deben tener una longitud\u2026",o:["Entre 20 a 25 m, de acuerdo con las condiciones del sitio","Entre 28 y 35 m, como en los registros","Entre 2 y 5 m","De 100 m siempre"],ref:j.gal_reserva},{n:7,p:"Los rollos de reserva en la galer\xEDa se colocan\u2026",o:["En la pared del lado opuesto al MDF, a la mayor altura posible, partiendo desde la pared final","En la pared del MDF, pegados a los ductos","En el piso, para que queden m\xE1s seguros","En cualquier pared, si hay espacio"],ref:j.gal_reserva},{n:7,p:"Si el rollo de reserva va en la pared del MDF, \xBFcu\xE1nto espacio se deja libre desde la salida de los ductos?",o:["50 cm hacia el fondo de la galer\xEDa","20 cm","1,20 m","No hace falta espacio"],ref:j.gal_50cm},{n:7,p:"\xBFCon qu\xE9 se fija el cable en las galer\xEDas?",o:["Con pletinas peque\xF1as (de 20 cm) y fajas pl\xE1sticas","Con clavos de madera en el muro","Con cinta adhesiva, sin pletinas","Con el cable suelto, para que se mueva"],ref:j.gal_pletinas},{n:7,p:"\xBFCu\xE1ntas placas de identificaci\xF3n se colocan en un rollo de reserva?",o:["Dos placas de identificaci\xF3n","Una sola, en el centro del rollo","Cuatro, dos a cada lado","Ninguna: el rollo no se identifica"],ref:j.gal_placas},{n:8,p:"\xBFQu\xE9 debe tener el personal t\xE9cnico para atender una emergencia en altura?",o:["Botiqu\xEDn b\xE1sico de primeros auxilios y equipos para rescate vertical: cuerdas de seguridad, mosquetones y pull-lift","Solo el botiqu\xEDn del cami\xF3n, si queda lugar","Solo las cuerdas de la escalera, sin mosquetones","Nada: la ayuda llega sola"],ref:j.eri_antes},{n:8,p:"\xBFCu\xE1ndo un trabajo en altura se considera muy cr\xEDtico?",o:["Cuando pasa de 12 metros de altura","Cuando pasa de 3 metros de altura","Cuando hay m\xE1s de dos trabajadores","Cuando llueve o hay viento"],ref:j.eri_criticas},{n:8,p:"Durante un accidente en altura, \xBFqu\xE9 se hace con el \xE1rea y con los trabajos?",o:["Se despeja completamente el \xE1rea y se suspenden de inmediato las actividades","Se sigue trabajando mientras llega la ayuda","Se despeja solo la mitad del \xE1rea, para no atrasar la labor","Se avisa a la cuadrilla de al lado y se sigue trabajando"],ref:j.eri_despejar},{n:8,p:"Durante una emergencia en altura, \xBFc\xF3mo se pide la ayuda de los cuerpos de emergencia?",o:["Por la l\xEDnea telef\xF3nica 9-1-1","Con un mensaje en el grupo de la cuadrilla","Esperando a que llegue la jefatura","Llevando a la v\xEDctima al hospital en la camioneta"],ref:j.eri_911},{n:8,p:"\xBFQu\xE9 maniobra de rescate se puede hacer si la cuadrilla no la conoce?",o:["Ninguna: no se hacen maniobras de rescate de las que no se tenga conocimiento previo","La que parezca m\xE1s r\xE1pida","Cualquiera, si son dos personas en el sitio","La que indique el compa\xF1ero que mira desde abajo"],ref:j.eri_911},{n:8,p:"Durante una emergencia, \xBFqui\xE9n puede dar informaci\xF3n a personas u organizaciones externas?",o:["Solo la direcci\xF3n o el personal autorizado, mediante comunicados oficiales","Cualquier trabajador de la cuadrilla","El compa\xF1ero que est\xE9 m\xE1s cerca de la prensa","Cualquier persona que pregunte, si dice ser familiar"],ref:j.eri_terceros},{n:9,p:"\xBFQu\xE9 es manejar a la defensiva?",o:["Conducir evitando accidentes a pesar de las acciones incorrectas de los dem\xE1s y de las condiciones adversas","Conducir r\xE1pido para pasar menos tiempo en la carretera","Responderles a los dem\xE1s conductores para que respeten","Manejar solo de d\xEDa y con buen clima"],ref:j.sv_defensivo},{n:9,p:"\xBFCu\xE1les son los cinco elementos del manejo defensivo?",o:["Conocimiento, estar alerta, previsi\xF3n, juicio y habilidad","Velocidad, reflejos, fuerza, suerte y experiencia","Licencia, seguro, marchamo, revisi\xF3n t\xE9cnica y placa","Prisa, frustraci\xF3n, cansancio, complacencia y descuido"],ref:j.sv_defensivo},{n:9,p:"\xBFQu\xE9 porcentaje de los accidentes viales tiene origen en el factor humano?",o:["El 90 %","El 10 %","La mitad","El 25 %"],ref:j.sv_humano},{n:9,p:"\xBFCu\xE1les son los cuatro estados que producen errores al conducir?",o:["Prisa, frustraci\xF3n, cansancio y complacencia","Lluvia, neblina, derrumbes y huecos","Alcohol, drogas, f\xE1rmacos y caf\xE9","Velocidad, curvas, pendientes y peraltes"],ref:j.sv_estados},{n:9,p:"La complacencia al volante es\u2026",o:["El exceso de confianza que lleva a relajar la atenci\xF3n","La falta de fuerzas despu\xE9s de un esfuerzo o por no descansar","La respuesta emocional ante un hecho no gestionado","La rapidez con que se hace una cosa"],ref:j.sv_estados},{n:9,p:"\xBFCada cu\xE1nto se revisan los nueve m\xEDnimos de seguridad vehicular?",o:["Todos los d\xEDas antes de salir con el automotor, siempre que aplique","Una vez al mes, en el taller","Solo cuando el veh\xEDculo hace un ruido raro","Una vez al a\xF1o, con la revisi\xF3n t\xE9cnica"],ref:j.sv_minimos},{n:9,p:"\xBFQu\xE9 dispositivos de advertencia deben estar en buen estado?",o:["Luces altas y bajas, de freno e intermitentes, la bocina y dos juegos de tri\xE1ngulos","Solo la bocina","Solo las luces delanteras","El radio y el aire acondicionado"],ref:j.sv_minimos},{n:9,p:"Seg\xFAn la capacitaci\xF3n, \xBFd\xF3nde se recomienda usar las llantas de recauche?",o:["Solo en la parte trasera del automotor","Solo adelante","En las cuatro posiciones","\xDAnicamente como repuesto"],ref:j.sv_minimos},{n:9,p:"\xBFQui\xE9n puede conducir un veh\xEDculo institucional?",o:["El funcionario que cuenta con los permisos de conducir del ICE","Cualquier compa\xF1ero con licencia","El primero que llegue al plantel","El que tenga m\xE1s experiencia, aunque no tenga el permiso"],ref:j.sv_permiso},{n:10,p:"Al empezar a llover, \xBFpor qu\xE9 se pone resbalosa la calle?",o:["Se forma una especie de jab\xF3n con los residuos de tierra, grasa y gasolina","Porque el agua enfr\xEDa el asfalto","Porque las llantas se desinflan con el agua","No cambia nada: el asfalto no resbala"],ref:j.sv_lluvia},{n:10,p:"En caminos con grava, arenosos o mojados, \xBFqu\xE9 pide el GS-101?",o:["Bajar la velocidad y manejar con cuidado","Subir la velocidad para no quedarse pegado","Frenar fuerte en cada curva","Ir pegado al veh\xEDculo de adelante para seguir su ruta"],ref:j.sv_mojado},{n:10,p:"Llueve tan fuerte que la falta de visibilidad es excesiva. \xBFQu\xE9 se hace?",o:["Detener el veh\xEDculo a un costado de la carretera y esperar que pase la tormenta","Seguir igual, con las luces altas","Seguir de cerca al veh\xEDculo de adelante","Acelerar para salir pronto de la tormenta"],ref:j.sv_visibilidad},{n:10,p:"\xBFPor qu\xE9 la neblina es una de las peores condiciones para conducir?",o:["La habilidad del conductor no puede mejorar la visibilidad ni permitirle aumentar la velocidad","Solo afecta a las motocicletas","Hace que el motor pierda potencia","No es peligrosa si se conoce el camino"],ref:j.sv_lluvia},{n:10,p:"Vas acompa\xF1ado y sientes cansancio al volante. \xBFQu\xE9 indica el GS-101?",o:["Detenerte en un sitio seguro, bajarte, caminar y ceder la conducci\xF3n al compa\xF1ero","Pedirle al compa\xF1ero que te hable para no dormirte","Subir el volumen del radio","Abrir la ventana y seguir hasta llegar"],ref:j.sv_fatiga},{n:10,p:"Con una dosis alta, el alcohol provoca\u2026",o:["Dificultad en el habla, incoordinaci\xF3n, juicio alterado y falta de control emocional","Mejores reflejos para manejar","M\xE1s atenci\xF3n en la carretera","Solo sue\xF1o, sin otros efectos"],ref:j.sv_sustancias},{n:10,p:"Observas o causas un da\xF1o al veh\xEDculo. \xBFQu\xE9 haces?",o:["Lo reportas: no se oculta, puede producir un accidente","Lo arreglas t\xFA en la casa","Lo callas si es peque\xF1o","Esperas a que otro compa\xF1ero lo note"],ref:j.sv_danos},{n:11,p:"\xBFCu\xE1ndo se hace el ATS (an\xE1lisis de trabajo seguro)?",o:["Antes de empezar las labores de cada d\xEDa, con toda la cuadrilla","Una vez por semana, solo el encargado","Al terminar la jornada, para el informe","Solo cuando ya hubo un accidente"],ref:j.gs31_ats},{n:11,p:"A media ma\xF1ana cambia el personal o llega otro equipo. \xBFQu\xE9 pide el GS-31?",o:["Aplicar de nuevo el ATS antes de seguir","Nada: el ATS de la ma\xF1ana sigue valiendo","Anotarlo en el informe del d\xEDa siguiente","Que el compa\xF1ero nuevo firme la pizarra sin leerla"],ref:j.gs31_cambios},{n:11,p:"Una tarea cr\xEDtica tiene un grado de criticidad (GC) de 8 o m\xE1s. \xBFQu\xE9 significa?",o:["Criticidad alta: se atiende primero","Criticidad baja: puede esperar","Criticidad moderada","Nada: el GC es solo un tr\xE1mite"],ref:j.gs31_criticidad},{n:11,p:"En la pizarra del ATS aparece un factor de muerte. \xBFQu\xE9 se hace?",o:["Se revisan en conjunto las acciones a implementar","Nada: es solo un dato de la pizarra","Lo resuelve el t\xE9cnico m\xE1s nuevo","Se anota y se revisa al d\xEDa siguiente"],ref:j.ats_muerte},{n:15,p:"Detectas una anomal\xEDa en el trabajo de tu cuadrilla. \xBFA qui\xE9n se lo informas?",o:["Al coordinador de cuadrilla y/o a SST","A nadie, si ya lo corregiste t\xFA","Solo al cliente, al terminar la obra","A la persona que lo hizo, para que lo anote despu\xE9s"],ref:j.rec_anomalia},{n:15,p:"Un compa\xF1ero sufre un accidente. \xBFQu\xE9 formulario se usa y cu\xE1ndo se avisa a la jefatura?",o:["F07-GS-52 Aviso inmediato, antes de terminar la jornada","F06-GS-52, la pr\xF3xima semana","F01-GS-52, al d\xEDa siguiente","Ning\xFAn formulario: basta con avisar en la charla"],ref:j.rec_accidente},{n:15,p:"Hubo un casi incidente y nadie se lastim\xF3. \xBFQu\xE9 formulario se usa?",o:["F06-GS-52 (o F01-GS-52 si fue grave)","F07-GS-52, el aviso inmediato","Ninguno, porque no hubo lesi\xF3n","El F02-CSCON-SST-00-25 con la firma del compa\xF1ero"],ref:j.rec_cuasi},{n:15,p:"Un compa\xF1ero incumple una regla de SST por primera vez, con riesgo bajo. \xBFQu\xE9 se hace?",o:["Retroalimentaci\xF3n positiva y correctiva, registro en el F02-CSCON-SST-00-25 con su firma, y aviso a la jefatura inmediata","Solo se le llama la atenci\xF3n en privado, sin registro","Se guarda para el informe del a\xF1o siguiente","Se le sanciona de inmediato, sin escuchar su versi\xF3n"],ref:j.rec_liderazgo},{n:15,p:"Hay un peligro inminente para las personas durante una tarea. \xBFQu\xE9 se hace?",o:["Se interrumpe la actividad","Se termina la tarea y luego se corrige","Se sigue con m\xE1s cuidado","Se avisa al final de la semana"],ref:j.rec_inminente},{n:16,p:"\xBFC\xF3mo se entra a una planta solar?",o:["Con autorizaci\xF3n, coordinado con el encargado de la planta","Entrando primero y avisando despu\xE9s","Por la cerca, si el port\xF3n est\xE1 cerrado","Como diga el primero que llegue"],ref:j.demo_generacion_autorizacion},{n:16,p:"\xBFCu\xE1ndo produce electricidad un panel solar?",o:["Mientras le da la luz: por eso se trata como energizado","Solo al mediod\xEDa","Solo si el inversor est\xE1 apagado","Nunca, si el panel est\xE1 sucio"],ref:j.demo_generacion_energizado},{n:16,p:"\xBFSe puede pisar o apoyarse en un panel para ver mejor?",o:["No: no se pisa ni se apoya nadie en los paneles","S\xED, si el panel est\xE1 limpio","S\xED, si la fila es corta","S\xED, con una tabla debajo"],ref:j.demo_generacion_no_pisar},{n:16,p:"\xBFQui\xE9n manipula las conexiones y los inversores de la planta?",o:["Solo personal calificado, seg\xFAn el procedimiento de la planta","Cualquier trabajador de la cuadrilla","Quien llegue primero a la caseta","Quien tenga la llave del port\xF3n"],ref:j.demo_generacion_conexiones},{n:16,p:"Ves un cable suelto y pelado en el camino de la planta. \xBFQu\xE9 haces?",o:["No lo tocas: lo marcas y lo reportas","Lo levantas con la mano para pasar","Lo cortas con la herramienta","Lo envuelves con cinta y sigues"],ref:j.demo_generacion_energizado},{n:16,p:"Llega una tormenta el\xE9ctrica mientras trabajan al aire libre. \xBFQu\xE9 indica el GS-101?",o:["Suspender la actividad por las condiciones del clima","Terminar la fila antes de bajar","Seguir trabajando: la tormenta todav\xEDa no ha llegado","Quedarse donde est\xE1n, a esperar"],ref:j.sol_clima},{n:16,p:"Encuentras un panel con el vidrio roto. \xBFQu\xE9 haces?",o:["Lo marcas y lo reportas al encargado de la planta, sin tocarlo","Lo cambias t\xFA, sin avisar","Lo tapas con cinta para la visita","Lo dejas para la pr\xF3xima visita sin avisar"],ref:j.demo_generacion_danos},{n:16,p:"Hace mucho sol y llevan un rato limpiando. \xBFQu\xE9 se hace?",o:["Tomar agua y descansar a la sombra con frecuencia","Seguir sin parar: el agua se toma al final","Quitarse el casco para refrescarse","Tomar solo caf\xE9, para no sudar"],ref:j.demo_generacion_calor},{n:13,p:"\xBFQu\xE9 sirve de apoyo a la escalera a medio vano, si no hay poste?",o:["El veh\xEDculo: la escalera se amarra a \xE9l","Nada: la escalera se apoya sola en el suelo","Solo un compa\xF1ero que la sostenga, sin amarrarla","El peso del trabajador sobre ella"],ref:j.mv_apoyo},{n:13,p:"\xBFEn cu\xE1ntos puntos se amarra la escalera a medio vano?",o:["En dos: al pant\xF3grafo y al eje de una llanta","En uno: basta con el pant\xF3grafo","En tres: se suma la cabina","No se amarra: el peso de la escalera basta"],ref:j.mv_dos_puntos},{n:13,p:"\xBFQu\xE9 nudo da la tensi\xF3n en el amarre a medio vano?",o:["Nudo ocho aplicado","Nudo alondra","Nudo gaza simple","Nudo ocho en l\xEDnea"],ref:j.mv_nudos},{n:13,p:"\xBFC\xF3mo termina el amarre a medio vano?",o:["Con pata de chancho (nudo ballestrinque)","Con un nudo alondra, sin asegurarlo","Con una gaza simple, suelta","Dejando la cuerda sin amarrar para ajustar despu\xE9s"],ref:j.mv_nudos},{n:13,p:"\xBFCon qu\xE9 se sube por una escalera a medio vano?",o:["Con la cuerda de seguridad sujetada a la escalera","Con la cuerda en el hombro, sin sujetarla","Con las manos ocupadas por herramientas","Sin cuerda, si la escalera es corta"],ref:j.mv_subida},{n:13,p:"Una escalera de 24 pies (7,32 m): \xBFhasta qu\xE9 altura de uso sirve?",o:["6,42 m","7,32 m","7,63 m","5,30 m"],ref:j.mv_tabla2},{n:13,p:"\xBFHasta qu\xE9 pelda\xF1o de la escalera se puede trabajar?",o:["Hasta el que alcanza el trabajo, sin llegar a los tres superiores","Hasta el \xFAltimo, para alcanzar mejor","En el tercero de arriba, si hace falta"],ref:j.mv_tres},{n:14,p:"\xBFQu\xE9 abertura m\xEDnima debe tener una cala para instalar el cable?",o:["1,5 m de largo por 1 m de ancho, como m\xEDnimo","1 m de largo por 1 m de ancho","1,5 m de largo por 0,5 m de ancho","0,8 m de largo por 0,8 m de ancho"],ref:j.cala_abertura},{n:14,p:"Si la abertura entre los extremos del ducto mide 40 cm, \xBFcu\xE1nto debe medir la pieza de PVC de reparaci\xF3n?",o:["90 cm: la abertura m\xE1s 50 cm","40 cm: lo mismo que la abertura","50 cm: solo el sobrante","1,20 m: el triple de la abertura"],ref:j.cala_pieza},{n:14,p:"\xBFHacia d\xF3nde queda la abertura del corte longitudinal de la pieza de reparaci\xF3n?",o:["Hacia arriba","Hacia abajo, contra el ducto","Hacia un costado","No importa la posici\xF3n"],ref:j.cala_ranura},{n:14,p:"\xBFCu\xE1ntas amarras de cinta met\xE1lica o tipo gaza llevan la reparaci\xF3n, y d\xF3nde?",o:["Tres: una en cada extremo y una en el centro","Dos: una en cada extremo","Cuatro: una cada 25 cm","Una sola, en el centro"],ref:j.cala_amarras},{n:14,p:"El preformado mide 75 cm o menos. \xBFA qu\xE9 distancia del poste va el cierre de empalme?",o:["75 cm","1,5 m","30 cm","2 m"],ref:j.cala_empalme},{n:14,p:"En el relleno de la cala, \xBFqu\xE9 capa va justo debajo del lastre?",o:["El material de la excavaci\xF3n, compactado al 95 % del Proctor","El tobacemento","El asfalto","La arena suelta"],ref:j.cala_capas},{n:14,p:"En un tramo recto de 1 km o m\xE1s, \xBFcada cu\xE1nto se ponen las anclas de seguridad?",o:["Cada 500 m","Cada 100 m","Cada 1 km, una sola","Solo en el poste m\xE1s alto"],ref:j.cala_anclas},{n:14,p:"\xBFA qu\xE9 distancia del poste se coloca cada ancla de seguridad?",o:["La mitad de la altura del poste, medida del herraje a la base","Un metro, sin importar la altura","Lo mismo que la altura del poste","Cinco metros, siempre"],ref:j.cala_ancla_distancia},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se le pregunta al cliente?",o:["C\xF3mo est\xE1n el cielorraso y la estructura, y si ha visto cables, goteras o avispas","Solo a qu\xE9 hora puede empezar el trabajo","Nada: si desde abajo se ve bien, se sube","Si puede pagar un trabajo extra"],ref:j.cr_cliente},{n:12,p:"Hay un cable el\xE9ctrico expuesto en el cielorraso. \xBFQu\xE9 se le pide al cliente?",o:["Que desconecte la electricidad antes de subir","Nada: se sube con cuidado, sin tocarlo","Que deje el cable al aire para revisarlo mejor","Que avise cuando el cable se caliente"],ref:j.cr_electrico},{n:12,p:"Si no es posible desconectar la electricidad del cielorraso, \xBFcon qu\xE9 se sube?",o:["Con guantes diel\xE9ctricos, despu\xE9s de revisar la zona a trabajar","Con guantes de cuero","Sin guantes, con cuidado","Con cualquier guante de trabajo"],ref:j.cr_electrico},{n:12,p:"Para trabajar en un cielorraso, \xBFqu\xE9 lleva el casco?",o:["Barbiquejo y linterna","Solo el barbiquejo, sin linterna","Solo la linterna, sin barbiquejo","Nada: el casco se usa solo en la calle"],ref:j.cr_epp},{n:12,p:"\xBFQu\xE9 se revisa desde el suelo antes de subir al cielorraso?",o:["Que no haya colmenas de avispas o similares","Solo la hora del d\xEDa","Que la escalera sea de aluminio","Nada: eso se revisa al terminar"],ref:j.cr_avispas},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se valora?",o:["Si una extensi\xF3n de fibra permite evitar subir","Si el cliente tiene caf\xE9","Cu\xE1nto pesa el trabajador","Si el d\xEDa est\xE1 soleado"],ref:j.cr_extension},{n:12,p:"La estructura del cielorraso debe observarse sin\u2026",o:["Corrosi\xF3n avanzada o madera descompuesta, y estable","Pintura nueva","R\xF3tulos de la oficina","Cables de colores"],ref:j.cr_estructura},{n:12,p:"Una escalera de abrir (tipo A) debe ser de\u2026",o:["Fibra de vidrio","Aluminio, siempre","Madera, sin importar el lugar","Cualquier material, si est\xE1 pintada"],ref:j.cr_escalera_tipo},{n:17,p:"En una obra, \xBFc\xF3mo deben estar los tableros y las cajas el\xE9ctricas?",o:["Tapados, identificados y cerrados","Abiertos, para revisar r\xE1pido los interruptores","Cerrados, aunque no tengan identificaci\xF3n","Como los dej\xF3 el \xFAltimo que los us\xF3"],ref:j.el_tablero},{n:17,p:"\xBFQu\xE9 necesita un medidor el\xE9ctrico provisional en la obra?",o:["Base estable y protecci\xF3n del agua","Solo un r\xF3tulo con el nombre de la obra","Estar en el suelo, donde nadie lo golpee","Nada: es provisional"],ref:j.el_medidor},{n:17,p:"\xBFDe qu\xE9 se protegen los conductores el\xE9ctricos en una obra?",o:["De los da\xF1os mec\xE1nicos: maquinaria, veh\xEDculos, agua y qu\xEDmicos","Solo del sol, con pintura","De nada: se cambian cuando se da\xF1an","Solo de la lluvia, con cinta aislante"],ref:j.el_conductores},{n:17,p:"\xBFCon qui\xE9n se aplica la lista de verificaci\xF3n del Anexo C del C\xF3digo El\xE9ctrico?",o:["En conjunto con un t\xE9cnico el\xE9ctrico","Solo, desde la oficina","Con el primer pe\xF3n que est\xE9 libre","Con el cliente, al entregar la obra"],ref:j.el_anexo_c},{n:17,p:"\xBFCu\xE1l de estos es un acto inseguro con electricidad?",o:["Intervenir sin autorizaci\xF3n","Usar el EPP diel\xE9ctrico","Reportar un enchufe deteriorado","Mantener el tablero cerrado"],ref:j.el_autorizacion},{n:17,p:"Con la piel h\xFAmeda o sudada, la resistencia del cuerpo a la corriente\u2026",o:["Baja","Sube","No cambia","Depende solo del calzado"],ref:j.el_mojado},{n:17,p:"\xBFQu\xE9 factores influyen en la magnitud de un incidente el\xE9ctrico?",o:["Intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria","Solo el color del cable","Solo la hora del d\xEDa","La marca del tablero y del medidor"],ref:j.el_factores},{n:17,p:"Seg\xFAn el Anexo B, una instalaci\xF3n es de peligro inminente o alto riesgo cuando\u2026",o:["Carece de protecci\xF3n frente al contacto con partes energizadas o el cortocircuito","Tiene m\xE1s de un tablero","Es provisional, aunque cumpla con todo","Alguien ya se lastim\xF3 en ella"],ref:j.el_anexo_b}],HM={registro:{titulo:"Una persona camina mirando el celular hacia el registro abierto",opciones:[{t:"STOP: Andr\xE9s la detiene y la gu\xEDa por fuera del \xE1rea se\xF1alizada",ok:!0},{t:"Le gritamos desde adentro del registro",ok:!1},{t:"Seguimos: los conos ya est\xE1n puestos",ok:!1},{t:"Ponemos la tapa encima con el compa\xF1ero adentro",ok:!1}],explicacion:"Un registro abierto es un hueco en plena acera. El per\xEDmetro se asegura con se\xF1alizaci\xF3n vial y peatonal y, si alguien entra al \xE1rea, se detiene la labor y se le gu\xEDa fuera.",ref:j.ev_registro,consecuencia:"La persona tropez\xF3 con el borde del registro y por poco cae adentro, sobre tu compa\xF1ero."},impaciente:{titulo:"Un conductor impaciente ignora el ALTO del banderero",opciones:[{t:"STOP: todos fuera de la calzada, dejamos pasar al veh\xEDculo y luego retomamos el control del tr\xE1nsito",ok:!0},{t:"Andr\xE9s se planta frente al auto para obligarlo a frenar",ok:!1},{t:"Seguimos pasando el cable: ya va a frenar",ok:!1},{t:"Le gritamos y le golpeamos el auto cuando pase",ok:!1}],explicacion:"Ninguna paleta detiene a un auto que no quiere detenerse. Ante un conductor que no respeta la se\xF1al, se evacua la calzada y nadie se le atraviesa; despu\xE9s se retoma el control (y se reporta si es necesario).",ref:j.ev_impaciente,consecuencia:"El auto pas\xF3 a cent\xEDmetros de Andr\xE9s, que estaba en medio de la calzada con la gu\xEDa del cable. La paleta ALTO no es un escudo."},peaton:{titulo:"Una persona entr\xF3 al \xE1rea se\xF1alizada",opciones:[{t:"Detengo la labor y pido a Andr\xE9s que gu\xEDe a la persona fuera del \xE1rea",ok:!0},{t:"Sigo tensando: ya casi termino",ok:!1},{t:"Le grito desde arriba que se aleje, sin dejar de trabajar",ok:!1},{t:"Bajo r\xE1pido por la escalera para sacarla yo",ok:!1}],explicacion:"El \xE1rea restringida protege a terceros de la ca\xEDda de herramientas o materiales. Se detiene la labor hasta despejarla.",ref:j.demarcacion,consecuencia:"Un herraje se solt\xF3 y cay\xF3 a medio metro de la persona. Nadie sali\xF3 herido, pero pudo terminar en tragedia."},companero:{titulo:"Andr\xE9s quiere subir a la escalera para ayudarte",opciones:[{t:"Lo detengo: solo un trabajador en la escalera; que suba el material con la cuerda",ok:!0},{t:"Que suba, son solo unos segundos",ok:!1},{t:"Que suba hasta la mitad y desde ah\xED me pase el herraje",ok:!1},{t:"Que me lance el herraje desde abajo",ok:!1}],explicacion:"Sobre la escalera port\xE1til se permite un solo trabajador. Los materiales se suben con bolso, mecate o cuerda.",ref:j.escaleras,consecuencia:"Con dos personas encima, la escalera se torci\xF3 en el amarre medio. Los dos quedaron colgando de la l\xEDnea de vida."},vehiculo:{titulo:"Un veh\xEDculo se acerca r\xE1pido al \xE1rea de trabajo",opciones:[{t:"Detengo la labor; Andr\xE9s regula el paso con la se\xF1alizaci\xF3n y esperamos a que pase",ok:!0},{t:"Sigo trabajando: los conos son suficientes",ok:!1},{t:"Bajo corriendo a quitar los conos del camino",ok:!1},{t:"Le hago se\xF1as desde la escalera sin dejar de trabajar",ok:!1}],explicacion:"La se\xF1alizaci\xF3n vial protege a la cuadrilla. Si un veh\xEDculo no respeta el \xE1rea, se detiene la labor y se regula el tr\xE1nsito antes de continuar.",ref:j.demarcacion,consecuencia:"El auto pas\xF3 rozando la escalera: la sacudida casi te tira. La se\xF1alizaci\xF3n sola no basta si nadie vigila el tr\xE1nsito."},tormenta:{titulo:"La lluvia se volvi\xF3 torrencial y hay rayer\xEDa",opciones:[{t:"Suspendo: aseguro herramientas, desciendo con tres puntos de apoyo y espero a que pase",ok:!0},{t:"Termino r\xE1pido el tensado antes de bajar",ok:!1},{t:"Me quedo arriba esperando a que escampe",ok:!1},{t:"Me quito los guantes mojados para tener m\xE1s agarre",ok:!1}],explicacion:"Se proh\xEDbe el trabajo en altura con tormenta el\xE9ctrica, lluvia torrencial o vientos de 60 km/h o m\xE1s.",ref:j.altura,consecuencia:"Un rayo cay\xF3 a dos cuadras. Con el agua, los pelda\xF1os quedaron resbalosos y perdiste un apoyo al bajar."},viento:{titulo:"Una r\xE1faga supera los 60 km/h mientras la cuadrilla trabaja en el techo",opciones:[{t:"Suspender la labor y bajar del techo, anclados a la l\xEDnea vertical de la escalera",ok:!0},{t:"Seguir: la r\xE1faga pasa en unos segundos",ok:!1},{t:"Seguir agachados, sin soltar el trabajo",ok:!1},{t:"Bajar de un salto para no esperar la escalera",ok:!1}],consecuencia:"Con vientos superiores a 60 km/h no se trabaja en techos.",explicacion:"No se debe trabajar en techos con vientos superiores a 60 km/h. Se suspende la labor y se baja de forma segura.",ref:j.t_techo_clima},presion:{titulo:"Andr\xE9s quiere subir ya: \xABel poste local se ve bien\xBB",opciones:[{t:"Seguimos: se inspeccionan el poste anterior, el local, el posterior y el tendido antes de subir",ok:!0},{t:"Subimos: el poste local est\xE1 bien",ok:!1},{t:"Que suba Andr\xE9s a revisar, es r\xE1pido",ok:!1},{t:"Subimos y revisamos los dem\xE1s postes despu\xE9s",ok:!1}],explicacion:"El encargado de cuadrilla verifica y asegura el ascenso al poste antes de iniciar la actividad. La inspecci\xF3n incluye el poste anterior, el posterior, el local y el tendido entre postes.",ref:ja.inspeccion,consecuencia:"El poste posterior ten\xEDa una falla visible. Subir sin inspeccionarlo habr\xEDa sido hacerlo sobre un poste no verificado."},poda_peaton:{titulo:"Un peat\xF3n camina por la acera y entra en la zona de ca\xEDda de la rama",opciones:[{t:"STOP: se detiene la labor y un compa\xF1ero lo gu\xEDa fuera de la zona se\xF1alizada",ok:!0},{t:"Le gritamos, pero seguimos cortando",ok:!1},{t:"Seguimos: la rama ya cay\xF3",ok:!1},{t:"Que pase r\xE1pido por debajo de la rama",ok:!1}],explicacion:"Mientras haya una rama por caer o ca\xEDda en la zona, la labor se detiene y se regula el paso: nadie camina dentro de la zona de ca\xEDda (GS-101 \xA75.6.10 n y o).",ref:j.poda_trayectoria,consecuencia:"La persona qued\xF3 bajo la rama. Quien corta debe detener la labor a tiempo."},galeria_vigia:{titulo:"El compa\xF1ero de afuera deja de responder desde la tapa mientras est\xE1s en la galer\xEDa",opciones:[{t:"STOP: se detiene la labor y quien est\xE1 adentro sale por la escalera",ok:!0},{t:"Seguimos: el compa\xF1ero seguro est\xE1 atento",ok:!1},{t:"Gritamos desde el fondo de la galer\xEDa y seguimos con las pletinas",ok:!1},{t:"Dejamos el detector y seguimos cerca del rollo",ok:!1}],explicacion:"Sin contacto con quien vigila la tapa, se detiene la labor y se sale. La fuente no describe la comunicaci\xF3n en espacios confinados: se anota como duda en PENDIENTES_SST.md (J10).",ref:j.gal_vigia,consecuencia:"Quien estaba adentro sigui\xF3 trabajando sin que nadie lo viera desde la tapa."}};var VM=p_.filter(a=>a.n===5);var of=[{urls:"stun:stun.l.google.com:19302"}],f_=11;function lf({sala:a,id:e,alMensaje:t,alPar:n}){let i=`realtime:mundo-${a}`,r={ws:"conectando",rtt:null,pares:new Map,presencia:!1},s,o=0,l=!1,c=!1,d=0,p=[],h=(g,S,C=i)=>{s?.readyState===1&&s.send(JSON.stringify({topic:C,event:g,payload:S,ref:String(++o)}))},f=(g,S)=>h("broadcast",{type:"broadcast",event:g,payload:S});function x(){r.ws="conectando",l=!1,s=new WebSocket(`${qd.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${qd.llave}&vsn=1.0.0`),s.onopen=()=>h("phx_join",{config:{broadcast:{self:!0},presence:{key:e},private:!1}}),s.onerror=()=>{r.ws="error"},s.onclose=()=>{r.ws!=="error"&&(r.ws="cerrado"),c||setTimeout(x,3e3)},s.onmessage=g=>{let S=JSON.parse(g.data);if(S.topic===i){if(S.event==="phx_reply"&&!l){if(S.payload?.status!=="ok"){r.ws="rechazado";return}l=!0,r.ws="unido",h("presence",{type:"presence",event:"track",payload:{id:e}}),f("eco",{id:e,t:performance.now()})}else if(S.event==="presence_state"){for(let C of Object.keys(S.payload))b(C);r.presencia=!0}else if(S.event==="presence_diff"){for(let C of Object.keys(S.payload.joins??{}))b(C);for(let C of Object.keys(S.payload.leaves??{}))C in(S.payload.joins??{})||m(C)}else if(S.event==="broadcast"){let C=S.payload.payload;S.payload.event==="eco"?C.id===e&&(r.rtt=performance.now()-C.t):C.de===e||r.pares.has(C.de)&&(S.payload.event==="rtc"?C.a===e&&C.sdp&&_(C).catch(()=>{}):(S.payload.event==="m"&&!r.pares.get(C.de).directo||S.payload.event==="f")&&t(C.m,C.de))}}}}function b(g){if(g===e||r.pares.has(g)||r.pares.size>=f_)return;let S={id:g,pc:null,canal:null,directo:!1,rtt:null};r.pares.set(g,S),n?.(g,!0),typeof RTCPeerConnection<"u"&&e<g&&A(S).catch(()=>{})}function m(g){let S=r.pares.get(g);S&&(S.pc?.close(),r.pares.delete(g),n?.(g,!1))}function u(g,S){g.canal=S,S.onopen=()=>{g.directo=!0},S.onclose=()=>{g.directo=!1},S.onmessage=C=>{let P=JSON.parse(C.data);P.t==="ping"?S.send(JSON.stringify({t:"pong",v:P.v})):P.t==="pong"?g.rtt=performance.now()-P.v:t(P,g.id)}}let v=g=>new Promise(S=>{if(g.iceGatheringState==="complete")return S();let C=setTimeout(S,2e3);g.addEventListener("icegatheringstatechange",()=>{g.iceGatheringState==="complete"&&(clearTimeout(C),S())})});async function A(g){g.pc?.close(),g.tOferta=performance.now(),g.intentos=(g.intentos??0)+1;let S=g.pc=new RTCPeerConnection({iceServers:of});u(g,S.createDataChannel("m",{ordered:!1,maxRetransmits:0})),await S.setLocalDescription(await S.createOffer()),await v(S),f("rtc",{de:e,a:g.id,sdp:S.localDescription})}async function _({de:g,sdp:S}){let C=r.pares.get(g);if(S.type==="offer"){C.pc?.close();let P=C.pc=new RTCPeerConnection({iceServers:of});P.ondatachannel=N=>u(C,N.channel),await P.setRemoteDescription(S),await P.setLocalDescription(await P.createAnswer()),await v(P),f("rtc",{de:e,a:g,sdp:P.localDescription})}else await C.pc?.setRemoteDescription(S)}function E(g){let S=JSON.stringify(g),C=!1;for(let N of r.pares.values())N.directo&&N.canal.readyState==="open"?N.canal.send(S):C=!0;let P=performance.now();C&&l&&P-d>500&&(d=P,f("m",{de:e,m:g}))}let M=g=>f("f",{de:e,m:g});p.push(setInterval(()=>h("heartbeat",{},"phoenix"),25e3)),p.push(setInterval(()=>{l&&f("eco",{id:e,t:performance.now()});for(let g of r.pares.values())g.directo&&g.canal.readyState==="open"?g.canal.send(JSON.stringify({t:"ping",v:performance.now()})):l&&e<g.id&&typeof RTCPeerConnection<"u"&&g.intentos<5&&performance.now()-g.tOferta>7e3&&A(g).catch(()=>{})},4e3)),x();function w(){c=!0,p.forEach(clearInterval);for(let g of[...r.pares.keys()])m(g);s?.close()}return{estado:r,enviar:E,fiable:M,cerrar:w}}var Wd=(a,e)=>Math.max(1,Math.round(a*(e==="aprendiz"?.65:1))),Xd=(a,e)=>Math.max(0,a-e),m_=(a,e)=>Math.min(100,a+e*.25),cf=a=>a>=90?3:a>=75?2:a>=60?1:0;function df(a){let e=100;for(let t of a)e=t.tipo==="acierto"?m_(e,t.puntos):Xd(e,t.puntos);return e}var Mt={encargado:{nombre:"Encargado de cuadrilla",corto:"Encargado",icono:"\u{1F4CB}",camisa:3108789,resumen:"Dirige el ATS, inspecciona el poste y comprueba la conexi\xF3n antes del ascenso."},sst:{nombre:"SST \xB7 prevencionista",corto:"SST",icono:"\u{1F9BA}",camisa:4170603,resumen:"Verifica el EPP y el \xE1rea de trabajo antes de que alguien suba."},liniero:{nombre:"Liniero",corto:"Liniero",icono:"\u{1F9D7}",camisa:16040475,resumen:"Lleva conos y cuerdas, arma el per\xEDmetro, sube y se asegura arriba."},auxiliar1:{nombre:"Auxiliar 1",corto:"Auxiliar 1",icono:"\u{1FA9C}",camisa:15304235,resumen:"Inspecciona y carga la escalera, la levanta a 75\xB0 y tensa la cuerda."},auxiliar2:{nombre:"Auxiliar 2",corto:"Auxiliar 2",icono:"\u{1FAA2}",camisa:13199902,resumen:"Carga la escalera, la presenta al poste y la amarra a media altura."}},uf=8,hs=["Listo","\xA1Alto!","Espera un momento","Escalera amarrada","Subiendo","Necesito ayuda"],ia=[{id:"ats",rol:"encargado",lugar:"pickup",nombre:"ATS del d\xEDa",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"\xBFC\xF3mo empieza la jornada?",opciones:["Con el ATS: toda la cuadrilla analiza los riesgos de la tarea y se reparten las funciones","Cada quien toma su equipo y el riesgo se analiza si aparece un problema","El encargado llena el ATS solo, mientras los dem\xE1s adelantan el trabajo"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"epp",rol:"sst",lugar:"pickup",nombre:"Revisar el EPP de la cuadrilla",accion:"Revisar el EPP",fisico:[],antes:["ats"],puntos:8,pregunta:"\xBFCu\xE1ndo se revisa el equipo de protecci\xF3n?",opciones:["Antes de usarlo, a la vista y con sus pruebas; lo que tenga defecto no se usa y se pide el cambio","Una vez por semestre, en la revisi\xF3n planificada con SST","Solo cuando es nuevo o cuando el da\xF1o se nota desde lejos"],porque:"Cada quien revisa su EPP antes de usarlo; el equipo de altura con defecto no se usa.",ref:"GS-101 \xB7 \xA75.3.8 a) EPP revisado antes de su uso y \xA75.5 f) equipo de altura con defecto no se usa (p\xE1gs. 17 y 19)"},{id:"inspeccion",rol:"auxiliar1",lugar:"pickup",nombre:"Inspeccionar la escalera",accion:"Inspeccionar la escalera",fisico:[],antes:["ats"],puntos:8,pregunta:"Antes de bajar la escalera del pick-up\u2026",opciones:["Reviso que no tenga piezas faltantes, da\xF1adas o flojas y que los pelda\xF1os est\xE9n limpios","Nada: con la inspecci\xF3n de cada a\xF1o es suficiente","La reviso arriba, cuando ya est\xE9 apoyada en el poste"],porque:"La escalera se inspecciona cada vez que se usa, antes de subir.",ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"cuerdas",rol:"liniero",lugar:"pickup",nombre:"Tomar conos y cuerdas",accion:"Tomar conos y cuerdas",fisico:[],antes:["ats"],puntos:6,pregunta:"\xBFQu\xE9 cuerda llevas para asegurar la escalera?",opciones:["Cuerda de seguridad est\xE1tica de 10 mm y 12 m, con capacidad de 24 kN","El mecate de nailon que haya en el pick-up","Cualquier cuerda, si se le hacen suficientes nudos"],porque:"El amarre se hace con cuerda de seguridad est\xE1tica de 10 mm, 12 m y 24 kN.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda de seguridad est\xE1tica de 10 mm, 12 m de largo y 24 kN (p. 26)"},{id:"tomar",rol:"auxiliar1",lugar:"pickup",nombre:"Bajar la escalera entre dos",accion:"Tomar la escalera",fisico:[],antes:["inspeccion"],puntos:8,pregunta:"La escalera es de 28 pies (8,53 m). \xBFC\xF3mo se traslada?",opciones:["Entre dos personas, deposit\xE1ndola, sin tirarla","La lleva uno solo al hombro, para ir m\xE1s r\xE1pido","Entre dos, y al llegar se deja caer junto al poste"],porque:"Desde 28 pies la escalera se traslada y se coloca entre dos, y se deposita: no se tira.",ref:"GS-101 \xB7 \xA75.6.4 a) y o) Escalera de 28 pies o m\xE1s: trasladada y colocada por 2 personas (p\xE1gs. 22\u201323)"},{id:"tomar2",rol:"auxiliar2",lugar:"pickup",nombre:"Tomar el otro extremo",accion:"Tomar el otro extremo de la escalera",fisico:[],antes:["inspeccion"],puntos:4,ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"llegada",rol:"auxiliar1",auto:!0,lugar:"poste",nombre:"Llevar la escalera al poste",fisico:["tomar","tomar2"],antes:[],puntos:0},{id:"poste",rol:"encargado",lugar:"poste",nombre:"Inspeccionar el poste",accion:"Inspeccionar el poste",fisico:[],antes:["ats"],puntos:10,pregunta:"\xBFQu\xE9 revisas antes de autorizar el ascenso al poste?",opciones:["Que no se mueva, no est\xE9 inclinado ni da\xF1ado; y tambi\xE9n el poste anterior, el posterior y el tendido","Solo que este poste est\xE9 a plomo; los vecinos no importan","Nada: si ayer se subi\xF3, hoy tambi\xE9n se puede"],porque:"El encargado inspecciona el poste, el anterior, el posterior y el tendido; con fallas no se trabaja y se reporta.",ref:"GS-101 \xB7 \xA75.6.3 Inspecci\xF3n de poster\xEDa por el encargado de cuadrilla (p. 21)"},{id:"perimetro",rol:"liniero",lugar:"poste",nombre:"Armar el per\xEDmetro",accion:"Colocar conos y cinta",fisico:["llegada","cuerdas"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se cierra el \xE1rea de la escalera?",opciones:["Con cinta y conos, a 2 m como m\xEDnimo alrededor de la escalera","Con un cono al pie de la escalera","En la acera no hace falta: solo en la calzada"],porque:"El \xE1rea se cierra y se se\xF1aliza a un m\xEDnimo de 2 m de la escalera.",ref:"GS-101 \xB7 \xA75.6.4 g) Cerramiento y se\xF1alizaci\xF3n a un m\xEDnimo de 2 m de la escalera (p\xE1gs. 22\u201323)"},{id:"cuerda_extension",rol:"liniero",lugar:"poste",nombre:"Cuerda en la extensi\xF3n",accion:"Instalar la cuerda en la escalera",fisico:["llegada","cuerdas"],antes:["poste"],puntos:10,pregunta:"Antes de levantar la escalera, \xBFd\xF3nde va la cuerda de seguridad?",opciones:["En el \xFAltimo pelda\xF1o de la extensi\xF3n: rodea el poste por detr\xE1s y baja por el frente; ser\xE1 la l\xEDnea de vida vertical","Se amarra cuando el liniero ya est\xE9 arriba","En el primer pelda\xF1o, para que no estorbe"],porque:"La cuerda se instala previamente en el \xFAltimo pelda\xF1o de la extensi\xF3n y, al bajar por el frente, es la l\xEDnea de vida vertical.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda en el \xFAltimo pelda\xF1o de la extensi\xF3n; sirve como l\xEDnea de vida vertical (p\xE1gs. 24\u201325)"},{id:"orientar",rol:"auxiliar2",lugar:"poste",nombre:"Presentar la escalera al poste",accion:"Presentar la escalera",fisico:["llegada"],antes:["cuerda_extension"],puntos:6,pregunta:"\xBFC\xF3mo queda la escalera frente al poste?",opciones:["La secci\xF3n fija hacia el poste; la que sube y baja, de frente al trabajador","La secci\xF3n que sube y baja, hacia el poste","De lado, apoyada en un solo larguero"],porque:"La parte fija queda hacia el poste y la que asciende y desciende, de frente al trabajador.",ref:"GS-101 \xB7 \xA75.6.5 a) Escalera de frente: la parte fija hacia el poste (p. 24)"},{id:"colocar",rol:"auxiliar1",lugar:"poste",nombre:"Levantar la escalera a 75\xB0",accion:"Levantar la escalera",fisico:["orientar"],antes:[],puntos:10,pregunta:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera?",opciones:["75\xB0: con la punta de los zapatos en la base y los brazos estirados, los dedos tocan los pelda\xF1os","60\xB0: m\xE1s acostada es m\xE1s estable","85\xB0: casi vertical, pegada al poste"],porque:"La escalera va a 75\xB0, o se comprueba con la prueba de los zapatos y los brazos estirados. Es lo mismo que separar la base un cuarto del largo de la escalera.",ref:"GS-101 \xB7 \xA75.6.5 a) \xC1ngulo de 75\xB0 o prueba de los brazos estirados (p. 24) \xB7 GS-98: base separada un cuarto de la longitud"},{id:"tensar",rol:"auxiliar1",lugar:"poste",nombre:"Tensar la cuerda que baja",accion:"Tensar la cuerda",fisico:["colocar","cuerda_extension"],antes:[],puntos:8,pregunta:"La cuerda baja por el frente y pasa por el primer pelda\xF1o. \xBFCon qu\xE9 nudo se bloquea al final?",opciones:["Con un ballestrinque (pata de chancho), despu\xE9s de tensarla con el ocho en l\xEDnea","Con un nudo corredizo, para soltarla r\xE1pido","Con varias vueltas al larguero, sin nudo"],porque:"Se tensa con el ocho en l\xEDnea o la gaza y se termina con una pata de chancho que bloquea la cuerda.",ref:"GS-101 \xB7 \xA75.6.5 c) Tensar con ocho en l\xEDnea o gaza y terminar con pata de chancho (p\xE1gs. 25\u201326)"},{id:"amarre_medio",rol:"auxiliar2",lugar:"poste",nombre:"Amarrar a media altura",accion:"Amarrar la escalera al poste",fisico:["colocar"],antes:[],puntos:10,pregunta:"\xBFEn cu\xE1ntos puntos debe quedar sujeta la escalera al poste?",opciones:["En dos como m\xEDnimo: arriba y en la parte media, con la cuerda de 12 m","En uno: con el amarre de arriba es suficiente","En ninguno, si un compa\xF1ero la sostiene"],porque:"El amarre en la parte media se hace siempre: la escalera queda sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea",accion:"Verificar el \xE1rea de trabajo",fisico:["colocar"],antes:["perimetro","tensar","amarre_medio","epp"],puntos:8,pregunta:"\xBFQu\xE9 confirmas antes de dar el visto bueno al ascenso?",opciones:["Per\xEDmetro armado, escalera amarrada en dos puntos y sin vientos fuertes, lluvia torrencial ni rayer\xEDa","Que el liniero tenga prisa: entre m\xE1s r\xE1pido, menos exposici\xF3n","Solo el per\xEDmetro; el clima se valora si alguien se queja"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:"GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23) \xB7 GS-98: el prevencionista verifica las condiciones antes de la tarea en altura"},{id:"carrito",rol:"liniero",lugar:"poste",nombre:"Conectar el carrito",accion:"Conectar el carrito a la cuerda",fisico:["colocar","cuerda_extension"],antes:["tensar"],puntos:12,pregunta:"El carrito (freno de cuerda) corre por la l\xEDnea de vida vertical. \xBFA qu\xE9 parte del arn\xE9s se conecta?",opciones:["A la argolla frontal, la del pecho","Al portaganchos del arn\xE9s","A una argolla lateral de la cadera"],porque:"La detenci\xF3n de ca\xEDdas solo se conecta a la argolla dorsal o a la pectoral. El portaganchos y las argollas laterales no detienen una ca\xEDda.",ref:"GS-98 \xB7 Sistemas personales de detenci\xF3n de ca\xEDdas: solo argollas de detenci\xF3n dorsal o pectoral \xB7 GS-101 \xA75.6.1 f) Freno para cuerda (p. 20)"},{id:"conexion",rol:"encargado",lugar:"poste",nombre:"Comprobar la conexi\xF3n",accion:"Comprobar la conexi\xF3n del liniero",fisico:["carrito"],antes:["area"],puntos:12,pregunta:"El liniero ya se conect\xF3. \xBFQu\xE9 haces antes de que suba?",opciones:["Compruebo con mis manos su conexi\xF3n y su arn\xE9s: un compa\xF1ero siempre la revisa","Le pregunto si est\xE1 listo y conf\xEDo en su palabra","Lo dejo subir y lo reviso desde abajo, a la vista"],porque:"Antes de subir, un compa\xF1ero comprueba que la conexi\xF3n est\xE9 correcta (conexi\xF3n falsa).",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)"},{id:"subir",rol:"liniero",lugar:"poste",nombre:"Subir la escalera",accion:"Subir",fisico:["colocar"],antes:["perimetro","amarre_medio","carrito","conexion"],puntos:12,pregunta:"\xBFC\xF3mo se sube?",opciones:["De frente, con las manos libres y tres puntos de apoyo; la herramienta sube por cuerda y no uso los tres pelda\xF1os de arriba","Con la herramienta en una mano y agarrado con la otra","Hasta el \xFAltimo pelda\xF1o, para alcanzar mejor"],porque:"Se sube de frente con tres puntos de apoyo, la herramienta sube por cuerda y los tres pelda\xF1os superiores est\xE1n prohibidos.",ref:"GS-101 \xB7 \xA75.6.4 j) y k) Tres puntos de apoyo; Tabla 2: prohibidos los tres pelda\xF1os superiores (p\xE1gs. 22\u201323)"},{id:"faja",rol:"liniero",lugar:"arriba",nombre:"Faja de posicionamiento",accion:"Colocar la faja de posicionamiento",fisico:["subir"],antes:[],puntos:12,pregunta:"\xBFC\xF3mo se coloca la faja de posicionamiento (estrobo)?",opciones:["De una argolla lateral, en M por un pelda\xF1o y al menos 3 cables de fibra, hasta la otra argolla lateral","Las dos puntas al portaganchos del arn\xE9s","Una punta a una argolla lateral y la otra suelta, para moverme mejor"],porque:"La faja va de argolla lateral a argolla lateral, abrazando en M un pelda\xF1o y al menos 3 cables de fibra. Sola no detiene una ca\xEDda: por eso sigue la l\xEDnea de vida.",ref:"GS-101 \xB7 \xA75.6.1 d) Faja de posicionamiento (estrobo) \xB7 GS-98: el posicionamiento no protege contra ca\xEDdas por s\xED solo \xB7 forma en M: pr\xE1ctica de la cuadrilla, en revisi\xF3n por Salud Ocupacional"},{id:"linea_vida",rol:"liniero",lugar:"arriba",nombre:"L\xEDnea de vida",accion:"Anclar la l\xEDnea de vida",fisico:["faja"],antes:[],puntos:12,pregunta:"\xBFD\xF3nde va la l\xEDnea de vida de tu argolla dorsal?",opciones:["A un punto de anclaje seguro, de preferencia arriba de la cabeza","Al mismo pelda\xF1o donde tengo la faja","A los cables de fibra"],porque:"La l\xEDnea de vida va del anillo dorsal a un punto de anclaje, de preferencia arriba de la cabeza. Un pelda\xF1o o un cable no son puntos de anclaje.",ref:"GS-101 \xB7 \xA75.5 h) e i) L\xEDnea de vida en el anillo dorsal, a un anclaje arriba de la cabeza (p. 19) \xB7 GS-98: el anclaje soporta 2 268 kg por persona"}];var Sa=Object.fromEntries(ia.map(a=>[a.id,a])),Yd=()=>({chofer:null,x:null,z:null,r:null}),Jd=()=>({fase:"sala",modo:"aprendiz",jugadores:{},hechos:{},fallos:{},eventos:[],pickup:Yd(),n:0}),Rn=(a,e)=>Object.keys(a.jugadores).find(t=>a.jugadores[t].rol===e)??null,g_=(a,e)=>String(a??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,e);function Zd(a,e){switch(a.n++,e?.t){case"entra":a.jugadores[e.id]={nombre:e.nombre,rol:a.jugadores[e.id]?.rol??null};break;case"sale":delete a.jugadores[e.id],a.pickup.chofer===e.id&&(a.pickup.chofer=null);break;case"rol":a.jugadores[e.id]&&(a.jugadores[e.id].rol=e.rol);break;case"modo":a.modo=e.modo;break;case"empezar":a.fase="trabajo",a.pickup=Yd();break;case"reiniciar":Object.assign(a,{fase:"sala",hechos:{},fallos:{},eventos:[],pickup:Yd()});break;case"conduce":a.pickup.chofer=e.id;break;case"aparca":a.pickup={chofer:null,x:e.x,z:e.z,r:e.r};break;case"hecho":if(!Sa[e.paso])break;a.hechos[e.paso]=e.rol,ia.every(t=>a.hechos[t.id])&&(a.fase="fin");break;case"falta":if(!Sa[e.paso])break;a.fallos[e.paso]=(a.fallos[e.paso]??0)+1,a.eventos.push({tipo:"falta",puntos:e.puntos,rol:e.rol,paso:e.paso,ref:e.ref,texto:e.texto});break}return a}function hf(a,e,t,n=!1){switch(e?.t){case"entra":return[{t:"entra",id:t,nombre:g_(e.nombre,16)||"Jugador"}];case"sale":return n&&a.jugadores[e.id]?[{t:"sale",id:e.id}]:[];case"rol":return!a.jugadores[t]||a.fase==="fin"||e.rol!==null&&!Mt[e.rol]?[]:e.rol&&Rn(a,e.rol)&&Rn(a,e.rol)!==t?[]:[{t:"rol",id:t,rol:e.rol}];case"modo":return a.fase==="sala"&&a.jugadores[t]&&["aprendiz","tecnico"].includes(e.modo)?[{t:"modo",modo:e.modo}]:[];case"empezar":return a.fase==="sala"&&(a.jugadores[t]?.rol||n&&e.demo)?[{t:"empezar"}]:[];case"reiniciar":return a.fase==="fin"&&(a.jugadores[t]||n)||n&&e.dev&&a.fase==="trabajo"?[{t:"reiniciar"}]:[];case"conduce":return a.jugadores[t]?.rol&&!a.pickup.chofer&&(a.fase==="fin"||a.fase==="trabajo"&&a.hechos.tomar&&a.hechos.tomar2)?[{t:"conduce",id:t}]:[];case"aparca":return a.pickup.chofer===t&&[e.x,e.z,e.r].every(Number.isFinite)&&Math.abs(e.x)<5e3&&Math.abs(e.z)<5e3?[{t:"aparca",x:e.x,z:e.z,r:e.r}]:[];case"auto":{let i=Sa[e.paso];return n&&i?.auto&&a.fase==="trabajo"&&!a.hechos[i.id]&&i.fisico.every(r=>a.hechos[r])?[{t:"hecho",paso:i.id,rol:i.rol,limpio:!0}]:[]}case"intento":{let i=Sa[e.paso];if(!i||i.auto||a.fase!=="trabajo"||a.hechos[i.id])return[];let r=n&&e.dev,s=n&&e.bot,o=r?i.rol:s?e.rol:a.jugadores[t]?.rol;if(o!==i.rol||s&&!r&&Rn(a,o))return[];if(!i.fisico.every(c=>a.hechos[c]))return[];let l=i.antes.find(c=>!a.hechos[c]);if(l)return a.modo==="aprendiz"?[]:[{t:"falta",paso:i.id,rol:o,puntos:Wd(uf,a.modo),ref:Sa[l].ref??i.ref,texto:`Faltaba \xAB${Sa[l].nombre}\xBB antes de \xAB${i.nombre}\xBB.`}];if(i.opciones){if(!Number.isInteger(e.opcion)||e.opcion<0||e.opcion>=i.opciones.length)return[];if(e.opcion!==0)return[{t:"falta",paso:i.id,rol:o,puntos:Wd(i.puntos,a.modo),ref:i.ref,texto:i.porque}]}return[{t:"hecho",paso:i.id,rol:o,limpio:!a.fallos[i.id]}]}}return[]}function er(a,e){return ia.filter(t=>t.rol===e&&!t.auto&&!a.hechos[t.id]&&t.fisico.every(n=>a.hechos[n])).map(t=>({paso:t,bloqueo:Sa[t.antes.find(n=>!a.hechos[n])]??null}))}var Kd=a=>ia.find(e=>!a.hechos[e.id]&&e.fisico.every(t=>a.hechos[t])&&e.antes.every(t=>a.hechos[t]))??null,tr=a=>Math.round(df(a.eventos)),Qd=a=>cf(tr(a));function pf(a){let e=Object.fromEntries(Object.keys(Mt).map(t=>[t,100]));for(let t of a.eventos)t.tipo==="falta"&&t.rol in e&&(e[t.rol]=Xd(e[t.rol],t.puntos));return e}function Jl(a){let e=[...a.id].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,7),t=a.opciones.map((n,i)=>i);for(let n=t.length-1;n>0;n--){e=e*1664525+1013904223>>>0;let i=e%(n+1);[t[n],t[i]]=[t[i],t[n]]}return t}var eu=(a,e)=>{for(let t=0;t<e.length;t++)a=a*31+e.charCodeAt(t)|0;return a};function ff({id:a,red:e,alEvento:t}){let n=Jd(),i=[],r=0,s=[],o=!1,l=-1e9,c=()=>e?[a,...e.estado.pares.keys()].sort()[0]:a,d=()=>c()===a,p=()=>!e||o||!!e.estado.presencia;function h(_){i.push(_),r=eu(r,JSON.stringify(_)),Zd(n,_),t?.(_,n)}function f(_,E,M){for(let w of hf(n,_,E,M)){let g=r;h(w),e?.fiable({t:"ev",n:n.n,h:g,ev:w})}}function x(_){p()?d()?f(_,a,!0):e.fiable({t:"pro",pro:_}):s.push(_)}function b(){if(s.length&&p()){let _=s;s=[],_.forEach(x)}}function m(){let _=Date.now();e&&_-l>1500&&(l=_,e.fiable({t:"pido"}))}let u=0;function v(_,E,M){if(M!==c()||_===n.n&&E===r){u=0;return}let w=Date.now();u?w-u>1e3&&m():u=w}function A(_,E){if(_?.t==="pro")d()&&f(_.pro,E,!1);else if(_?.t==="ev"){if(E!==c())return;_.n===n.n+1&&_.h===r?h(_.ev):m()}else if(_?.t==="pido")i.length&&e.fiable({t:"todo",evs:i});else if(_?.t==="todo"){if(!Array.isArray(_.evs)||!_.evs.length||_.evs.length>5e3)return;let M=_.evs.reduce((w,g)=>eu(w,JSON.stringify(g)),0);if(!(E===c()?M!==r:!i.length))return;n=Jd(),i=[],r=0;for(let w of _.evs)i.push(w),r=eu(r,JSON.stringify(w)),Zd(n,w);t?.(null,n)}}return{get E(){return n},get huella(){return r},anfitrion:d,idAnfitrion:c,proponer:x,recibir:A,pedir:m,cada:b,latido:v,jugarSolo:()=>{o=!0}}}var mf=4.6,ru=7.4,ps=ru*Math.sin(75*Math.PI/180),tu=ru*Math.cos(75*Math.PI/180),nu=4.8,x_=7,au=4.4,iu=40,_n={cuerda:15591122,cinta:15320363,faja:15320363,vida:14173227};function gf(a){let e=_a();for(let n of[-.21,.21])e.caja(n,-.04,a/2,.05,.08,a,15304235);for(let n=.3;n<a-.1;n+=.3)e.caja(0,-.02,n,.42,.035,.035,12172996);let t=new Ze(e.geometria(),new bt({vertexColors:!0,roughness:.7}));return t.castShadow=!1,t}function xf({via:a,barrio:e}){let t=e.trabajo,n={},i=(H,ce,fe=0)=>(a.en(H,ce,n),new L(n.x,fe,n.z)),r=i(t.d-tu,t.a,.15),s=i(t.d-.14,t.a,.15+ps),o=new L(s.x-r.x,0,s.z-r.z).normalize(),l=new L(o.z,0,-o.x),c=new L().subVectors(r,s).setY(0).normalize().multiplyScalar(.97).add(new L(0,.26,0)),d=Math.atan2(o.x,o.z),p=(H,ce=0,fe=new L)=>fe.lerpVectors(r,s,H/ps).addScaledVector(c,ce),h={pickup:i(e.dPick,-4.5),poste:i(t.d-2.6,t.a+.2)},f=i(t.d-2.2,t.a+.75),x={pickup:{encargado:[0,-4.4],sst:[1.3,-4.4],liniero:[-1.3,-4.4],auxiliar1:[-2.6,-4.4],auxiliar2:[2.6,-4.4]},poste:{encargado:[-3.6,1.3],sst:[-4.4,-1.2],liniero:[-2.55,0],auxiliar1:[-2.2,1],auxiliar2:[-.6,-1.1]}},b=(H,ce)=>ce==="pickup"?i(e.dPick+x.pickup[H][0],x.pickup[H][1]):i(t.d+x.poste[H][0],t.a+x.poste[H][1]),m=new pt,u=gf(mf),v=gf(ru),A=new L,_=new L,E=i(t.d-2.2,t.a+.75,.2),M=i(t.d-2.2-mf,t.a+.75,.2);v.position.copy(r),v.lookAt(s),v.visible=!1;let w=new Ot(new Ur(.17,.55,10).translate(0,.275,0),new bt({color:15227148,roughness:.6}),4),g=[[-tu-2,-2],[2,-2],[2,2],[-tu-2,2]].map(([H,ce])=>i(t.d+H,t.a+ce,.15)),S=new _t;g.forEach((H,ce)=>{S.position.copy(H),S.updateMatrix(),w.setMatrixAt(ce,S.matrix)}),w.visible=!1;let C=new ut,P=new Float32Array(iu*6),N=new Float32Array(iu*6);C.setAttribute("position",new ft(P,3)),C.setAttribute("color",new ft(N,3));let U=new va(C,new Qn({vertexColors:!0}));U.frustumCulled=!1;let F=new Ze(new Yt(.07,.12,.07),new bt({color:14173227,roughness:.4,metalness:.5})),G=new Ze(new zr(1.25,1.45,40).rotateX(-Math.PI/2),new Bn({color:16766503,transparent:!0,opacity:.8,depthWrite:!1}));G.visible=!1,m.add(u,v,w,U,F,G);let K=0,ee=new qe;function q(H,ce,fe){if(K>=iu)return;ee.set(fe);let he=K++*6;P[he]=H.x,P[he+1]=H.y,P[he+2]=H.z,P[he+3]=ce.x,P[he+4]=ce.y,P[he+5]=ce.z;for(let D=0;D<6;D+=3)N[he+D]=ee.r,N[he+D+1]=ee.g,N[he+D+2]=ee.b}let Z=0,$=Array.from({length:8},()=>new L),se={x:0,y:0,z:0,rumbo:d,pose:"e",fase:0},we=H=>!!(H.hechos.tomar&&H.hechos.tomar2&&!H.hechos.llegada);function W(){return p(Z*nu,.13,$[7]),se.x=$[7].x,se.y=$[7].y,se.z=$[7].z,se.pose=Z<1?"e":"t",se.fase=Z*26,se}function ge(H){let ce=H("auxiliar1"),fe=H("auxiliar2");return!!ce&&!!fe&&Math.hypot(ce.x-h.poste.x,ce.z-h.poste.z)<3.5&&Math.hypot(ce.x-fe.x,ce.z-fe.z)<au+1.5}function Me(H,ce,fe,he){if(!we(H)||ce!=="auxiliar2")return;let D=he("auxiliar1");if(!D)return;let re=fe.x-D.x,pe=fe.z-D.z,ve=Math.hypot(re,pe),be=au+.5;ve>be&&(fe.x=D.x+re/ve*be,fe.z=D.z+pe/ve*be)}function Se(H,ce,fe,he,D){let re=fe.hechos,pe=!!re.subir;if(Z=pe?Math.min(1,Z+H/x_):0,v.visible=!!re.colocar,u.visible=!re.colocar,!re.colocar){let be=he("auxiliar1"),Re=he("auxiliar2");we(fe)&&be&&Re?(u.position.set(be.x,(be.y??.15)+1.47,be.z),u.lookAt(Re.x,(Re.y??.15)+1.47,Re.z)):re.llegada?(u.position.copy(E),u.lookAt(M)):(u.position.copy(D.local(.4,2.16,-2.9,A)),u.lookAt(D.local(.4,2.16,1.7,_)))}if(w.visible=!!re.perimetro,K=0,re.perimetro)for(let be=0;be<4;be++)q($[0].copy(g[be]).setY(.62),$[1].copy(g[(be+1)%4]).setY(.62),_n.cinta);if(re.colocar&&re.cuerda_extension&&(p(ps-.3,0,$[0]),$[1].set(t.x,$[0].y-.1,t.z).addScaledVector(o,.2),q($[0],$[1],_n.cuerda),q($[1],p(ps-.6,.1,$[2]),_n.cuerda),q($[2],p(1.7,.1,$[3]),_n.cuerda),re.tensar&&q($[3],p(.35,.02,$[4]),_n.cuerda)),re.amarre_medio){let Re=[[.22,.22],[.22,-.22],[-.22,-.22],[-.22,.22]].map(([ue,Q],J)=>$[J].set(t.x+ue,3.65,t.z+Q));for(let ue=0;ue<4;ue++)q(Re[ue],Re[(ue+1)%4],_n.cuerda);for(let ue of[-1,1])q(p(3.4,0,$[4]).addScaledVector(l,ue*.21),$[5].set(t.x,3.65,t.z).addScaledVector(l,ue*.22),_n.cuerda)}let ve=he("liniero");if(F.visible=!!(re.carrito&&ve),F.visible){let be=$[5].set(ve.x,(ve.y??.15)+1.28,ve.z);p(Math.min(ps-.8,Math.max(1.3,be.y-.15)),.1,F.position),be.distanceTo(F.position)<1.6&&q(F.position,be.addScaledVector(o,.1),_n.cuerda)}if(pe&&ve&&Z>=1){let be=$[6].set(ve.x,ve.y,ve.z);if(re.faja){let Re=$[0].copy(be).addScaledVector(l,.2).setY(be.y+1),ue=$[1].copy(be).addScaledVector(l,-.2).setY(be.y+1),Q=p(nu+1.25,0,$[2]).addScaledVector(l,.15),J=p(nu+1.25,0,$[3]).addScaledVector(l,-.15),ie=$[4].set(t.x,6.3,t.z).addScaledVector(o,-.5);q(Re,Q,_n.faja),q(Q,ie,_n.faja),q(ie,J,_n.faja),q(J,ue,_n.faja)}re.linea_vida&&q($[0].copy(be).addScaledVector(o,-.14).setY(be.y+1.42),$[1].set(t.x,Math.min(9.2,be.y+2.5),t.z),_n.vida)}C.setDrawRange(0,K*2),C.attributes.position.needsUpdate=C.attributes.color.needsUpdate=!0,G.material.opacity=.55+.3*Math.sin(ce*4)}function V(H){G.visible=!!h[H],G.visible&&G.position.copy(h[H]).setY(.2)}return{grupo:m,zonas:h,puesto:b,metaEscalera:f,cargando:we,llego:ge,restringir:Me,cada:Se,marcar:V,puestoLiniero:W,rumbo:d,L_CARGA:au,get subida(){return Z},cima:s}}var v_=1.7,b_=1.25,__=1.6,vf=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a));function bf({sesion:a,obra:e,resolver:t,altura:n}){let i=new Map;function r(s,o,l){for(let c of Object.keys(Mt)){let d=!Rn(o,c);if(d&&!i.has(c)){let p=e.puesto(c,"pickup");i.set(c,{rol:c,x:p.x,z:p.z,y:.15,rumbo:0,pose:"i",fase:0,espera:0})}else d||i.delete(c)}if(a.anfitrion())for(let c of i.values()){let d=null,p=null,h=v_;if(c.pose="i",o.fase!=="trabajo")d=o.fase==="sala"?e.puesto(c.rol,"pickup"):null;else if(c.rol==="liniero"&&o.hechos.subir){let x=e.puestoLiniero();Object.assign(c,{x:x.x,z:x.z,y:x.y,rumbo:e.rumbo,pose:x.pose,fase:x.fase}),p=e.subida>=1?er(o,c.rol).find(b=>!b.bloqueo)?.paso:null}else if(e.cargando(o)&&/^auxiliar/.test(c.rol))if(c.pose="c",c.rol==="auxiliar1")d=e.metaEscalera,h=b_;else{let x=l("auxiliar1");if(x){let b=c.x-x.x,m=c.z-x.z,u=Math.hypot(b,m)||1,v=c.x,A=c.z;c.x=x.x+b/u*e.L_CARGA,c.z=x.z+m/u*e.L_CARGA,c.rumbo=vf(c.rumbo,Math.atan2(x.x-c.x,x.z-c.z)),c.fase+=Math.hypot(c.x-v,c.z-A)*4.19}}else p=er(o,c.rol).find(x=>!x.bloqueo)?.paso??null,d=e.puesto(c.rol,p?p.lugar:o.hechos.tomar&&o.hechos.tomar2?"poste":"pickup");let f=!d;if(d){let x=d.x-c.x,b=d.z-c.z,m=Math.hypot(x,b);if(m>.25){let u=Math.min(m,h*s);if(c.x+=x/m*u,c.z+=b/m*u,t(c,.3),c.rumbo=vf(c.rumbo,Math.atan2(x,b))*.25+c.rumbo*.75,c.fase+=u*4.19,c.rol==="auxiliar1"&&e.cargando(o)){let v=l("auxiliar2");v&&Math.hypot(v.x-c.x,v.z-c.z)>e.L_CARGA+.6&&(c.x-=x/m*u,c.z-=b/m*u)}}else f=!0;c.y=n(c.x,c.z)}p&&f?(c.espera+=s,c.espera>__&&(c.espera=0,a.proponer({t:"intento",paso:p.id,opcion:0,bot:!0,rol:c.rol}))):c.espera=0}}return{B:i,cada:r}}var Ke=null,ra=null,Ma=null,ar=null,ec=null,Ea=null,ms=null,su=null,Zl=null,ir=null,gs=null,nr=null,fs=null,xs=null,vs=null,y_=0,S_={},yf=!1,Ql=1,Kl=new Set,Sf=.55,M_=-8,E_=a=>10**(a/20);function A_(){try{Ke?.resume?.()?.catch?.(()=>{})}catch{}}function Mf(){if(Ke){A_();return}try{Ke=new(window.AudioContext||window.webkitAudioContext),Ma=Ke.createDynamicsCompressor(),Ma.threshold.value=-6,Ma.knee.value=8,Ma.ratio.value=6,Ma.attack.value=.003,Ma.release.value=.25,Ma.connect(Ke.destination),ra=Ke.createGain(),ra.gain.value=yf?0:Sf*Ql,ra.connect(Ma),ar=Ke.createGain(),ar.connect(ra),ec=Ke.createGain(),ec.connect(ra),Ea=Ke.createGain(),Ea.connect(ra),ms=Ke.createGain(),ms.gain.value=0;let a=Ke.createConvolver(),e=Math.floor(Ke.sampleRate*.6),t=Ke.createBuffer(1,e,Ke.sampleRate),n=t.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.exp(-i/(Ke.sampleRate*.12));a.buffer=t,su=Ke.createGain(),su.gain.value=1,ar.connect(ms).connect(a).connect(su).connect(ra),P_(),I_(Tf(S_))}catch{Ke=null}}function Ef(a){return Ql=Math.max(0,Math.min(1,a)),ra&&!yf&&(ra.gain.value=Sf*Ql),Ql}function T_(a,e="general"){return a?Kl.add(e):Kl.delete(e),Ea&&Ea.gain.setTargetAtTime(Kl.size?E_(M_):1,Ke.currentTime,.15),Kl.size>0}function It(a,e,{tipo:t="sine",vol:n=.3,ataque:i=.005,caida:r=null,glide:s=null,retardo:o=0,ui:l=!1}={}){if(!Ke)return;let c=Ke.currentTime+o,d=Ke.createOscillator(),p=Ke.createGain();d.type=t,d.frequency.setValueAtTime(a,c),s&&d.frequency.exponentialRampToValueAtTime(s,c+e),p.gain.setValueAtTime(0,c),p.gain.linearRampToValueAtTime(n,c+i),p.gain.exponentialRampToValueAtTime(1e-4,c+(r??e)),d.connect(p).connect(l?ec:ar),d.start(c),d.stop(c+e+.05)}var ou=new Map;function Af(a){if(!ou.has(a)){let e=Ke.createBuffer(1,2*a,Ke.sampleRate),t=e.getChannelData(0);for(let n=0;n<2*a;n++)t[n]=Math.random()*2-1;ou.set(a,e)}return ou.get(a)}function kn(a,{vol:e=.3,filtro:t="lowpass",f:n=1200,q:i=1,retardo:r=0,ataque:s=.005}={}){if(!Ke)return;let o=Ke.currentTime+r,l=Math.floor(Ke.sampleRate*a),c=Ke.createBufferSource();c.buffer=Af(l);let d=Ke.createBiquadFilter();d.type=t,d.frequency.value=n,d.Q.value=i;let p=Ke.createGain();p.gain.setValueAtTime(0,o),p.gain.linearRampToValueAtTime(e,o+s),p.gain.exponentialRampToValueAtTime(1e-4,o+a),c.connect(d).connect(p).connect(ar),c.start(o,Math.random()*l/Ke.sampleRate),c.stop(o+a+.05)}var Nt={clic:()=>It(880,.06,{tipo:"triangle",vol:.12,ui:!0}),hover:()=>It(1320,.03,{tipo:"sine",vol:.04,ui:!0}),ok:()=>{It(660,.12,{vol:.2,ui:!0}),It(990,.18,{vol:.2,retardo:.09,ui:!0})},logro:()=>[523,659,784,1047].forEach((a,e)=>It(a,.25,{tipo:"triangle",vol:.18,retardo:e*.09,ui:!0})),error:()=>{It(220,.22,{tipo:"sawtooth",vol:.14,glide:140})},alerta:()=>{It(1046,.09,{tipo:"square",vol:.07}),It(1046,.09,{tipo:"square",vol:.07,retardo:.16})},stop:()=>{It(392,.12,{tipo:"square",vol:.12}),It(294,.25,{tipo:"square",vol:.12,retardo:.12})},cono:()=>{kn(.12,{vol:.25,f:500}),It(160,.12,{vol:.2,glide:90})},metal:()=>{It(1800+Math.random()*300,.25,{tipo:"triangle",vol:.06}),It(2600,.15,{vol:.03})},paso:()=>kn(.08,{vol:.12,f:700+Math.random()*300}),cuerda:()=>kn(.35,{vol:.12,filtro:"bandpass",f:2200,q:2,ataque:.1}),chasquido:()=>{kn(.09,{vol:.6,filtro:"highpass",f:2500}),It(3200,.05,{tipo:"square",vol:.15})},golpe:()=>{kn(.4,{vol:.6,f:260}),It(70,.4,{vol:.5,glide:40})},tir\u00F3n:()=>{It(140,.3,{tipo:"sawtooth",vol:.2,glide:90}),kn(.25,{vol:.25,f:900})},trueno:()=>{kn(2.6,{vol:.7,f:160,ataque:.05}),kn(1.2,{vol:.4,f:600,retardo:.05})},tension:()=>It(180,.5,{tipo:"sawtooth",vol:.07,glide:420}),bocina:()=>{It(392,.35,{tipo:"square",vol:.12}),It(494,.35,{tipo:"square",vol:.1})},clip:()=>{It(1500,.05,{tipo:"square",vol:.08}),kn(.05,{vol:.15,filtro:"highpass",f:3e3,retardo:.02})},presion:()=>kn(.18,{vol:.1,filtro:"bandpass",f:1400,q:1.2}),insignia:()=>{[784,988,1319].forEach((a,e)=>It(a,.22,{tipo:"sine",vol:.16,retardo:e*.07,ui:!0}))},motosierra:()=>{kn(.9,{vol:.16,f:240}),It(96,.9,{tipo:"sawtooth",vol:.07,glide:120})}},_f={calle:{transito:1,viento:1,lluvia:1,reverb:0,zumbido:1},ducto:{transito:0,viento:0,lluvia:0,reverb:.3,zumbido:0},neutro:{transito:0,viento:1,lluvia:1,reverb:0,zumbido:0}},w_={aereo:"calle",techo:"calle",media:"calle",poste:"calle",poda:"calle",ducto:"ducto"},C_={aereo:.6,techo:.5,media:.5,poste:.5,poda:.3};function R_(a){let e=/^(\d{1,2})/.exec(a??"");if(!e)return .6;let t=+e[1];return t>=7&&t<9||t>=16&&t<19?1:t>=9&&t<16?.7:t>=19&&t<22?.4:.15}function Tf(a={}){let e=a.tipo??"aereo",t=_f[a.ambiente]?a.ambiente:w_[e]??"neutro",n=_f[t],i=/avenida/i.test(a.lugar??"")?1.3:1,r=(C_[e]??.5)*R_(a.hora)*i,s=Number.isFinite(a.viento)?a.viento:0,o=Math.max(0,Math.min(1,(s-8)/34));return{perfil:t,transito:Math.min(1,r)*n.transito*.09,viento:o*n.viento*.2,lluvia:n.lluvia,reverb:n.reverb*.6,zumbido:n.zumbido*.012}}var wf=null;function P_(){if(Zl||!Ke)return;let a=3,e=Math.floor(Ke.sampleRate*a),t=Af(e),n=()=>{let p=Ke.createBufferSource();return p.buffer=t,p.loop=!0,p.start(0,Math.random()*a),p};Zl=n();let i=Ke.createBiquadFilter();i.type="bandpass",i.frequency.value=3e3,i.Q.value=.4,ir=Ke.createGain(),ir.gain.value=0,Zl.connect(i).connect(ir).connect(Ea);let r=n(),s=Ke.createBiquadFilter();s.type="lowpass",s.frequency.value=400,gs=Ke.createGain(),gs.gain.value=0,r.connect(s).connect(gs).connect(Ea);let o=n(),l=Ke.createBiquadFilter();l.type="bandpass",l.frequency.value=500,l.Q.value=.6,nr=Ke.createGain(),nr.gain.value=0,fs=Ke.createOscillator(),fs.frequency.value=.2,xs=Ke.createGain(),xs.gain.value=0,fs.connect(xs).connect(nr.gain),o.connect(l).connect(nr).connect(Ea),fs.start();let c=Ke.createOscillator();c.type="triangle",c.frequency.value=55;let d=Ke.createBiquadFilter();d.type="lowpass",d.frequency.value=160,vs=Ke.createGain(),vs.gain.value=0,c.connect(d).connect(vs).connect(Ea),c.start(),wf={lfo:fs,fuentes:[Zl,r,o,c]}}function I_(a){if(!Ke||!ir)return;let e=Ke.currentTime;ir.gain.setTargetAtTime(y_*.35*a.lluvia,e,.6),gs.gain.setTargetAtTime(a.viento,e,.8),nr.gain.setTargetAtTime(a.transito,e,1.2),xs.gain.setTargetAtTime(a.transito*.5,e,1.2),vs.gain.setTargetAtTime(a.zumbido,e,1.2),ms.gain.setTargetAtTime(a.reverb,e,.3)}function D_(){return Ke?{ctx:Ke,compresor:Ma,maestro:ra,efectos:ar,interfaz:ec,ambiente:Ea,sala:ms,ambiente_:{lluvia:ir,viento:gs,transito:nr,zumbido:vs,lfo:xs,lfoFuente:wf?.lfo}}:null}typeof window<"u"&&(window.__audio={grafo:D_,ducking:T_,nivelesAmbiente:Tf});var bs={"teclado y rat\xF3n":{accion:"E",mundo:"WASD moverse \xB7 rat\xF3n mirar \xB7 E acci\xF3n \xB7 V vista \xB7 R radio \xB7 M mapa \xB7 P pausa \xB7 May\xFAs correr",panel:"Clic o 1\u20133 para elegir \xB7 \u2191 \u2193 mover \xB7 Enter aceptar \xB7 Esc volver",todo:"Teclado y rat\xF3n: WASD moverse, rat\xF3n mirar (clic en el juego para capturarlo), E acci\xF3n, V cambiar vista, R radio, M mapa, P o Esc pausa, May\xFAs correr, H bocina al volante."},t\u00E1ctil:{accion:"\u270B",mundo:"Izquierda: caminar \xB7 derecha: mirar \xB7 \u270B acci\xF3n \xB7 \u{1F441} vista \xB7 \u{1F4FB} radio \xB7 \u{1F5FA} mapa \xB7 \u23F8 pausa",panel:"Toca una opci\xF3n para elegirla",todo:"Pantalla t\xE1ctil: arrastra a la izquierda para caminar (al fondo, corres) y a la derecha para mirar. Botones: \u270B acci\xF3n, \u{1F441} vista, \u{1F4FB} radio, \u{1F5FA} mapa, \u23F8 pausa."},control:{accion:"\u24B6",mundo:"\u24C1 moverse \xB7 \u24C7 mirar \xB7 \u24B6 acci\xF3n \xB7 \u24CE vista \xB7 \u24CD radio \xB7 \u29C9 mapa \xB7 \u2630 pausa \xB7 LT correr",panel:"\u24B6 elegir \xB7 \u271A o \u24C1 mover \xB7 \u24B7 volver",todo:"Control: palanca izquierda moverse, derecha mirar, \u24B6 acci\xF3n, \u24CE vista, \u24CD radio, \u29C9 (Vista) mapa, \u2630 (Men\xFA) pausa, LT correr, LB bocina al volante. En los men\xFAs: cruceta o palanca para mover, \u24B6 elegir, \u24B7 volver."}},L_=`
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
`,Cf=["1","2","3","4","5","6"];function Rf(a,e){let t=document.createElement("style");t.textContent=L_,document.head.append(t);let n=(W,ge="div")=>{let Me=document.createElement(ge);return Me.className=W,a.append(Me),Me},i=n("mu-hud"),r=n("mu-lista","ol"),s=n("mu-aviso"),o=n("mu-avisos"),l=n("mu-fondo"),c=document.createElement("div");c.className="mu-panel",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),l.append(c),l.hidden=!0,i.hidden=r.hidden=s.hidden=!0;let d=null,p=!1,h=null,f=null,x=[],b="",m=0,u="teclado y rat\xF3n",v=n("mu-ayudas");try{b=localStorage["mundo:nombre"]??""}catch{}let A=()=>[...c.querySelectorAll("button:not([disabled]), input")];function _(W,ge,{cancela:Me=!1}={}){let Se=d===W?m:-1,V=d!==W;d=W,p=Me,c.innerHTML=ge+'<div class="mu-pie"></div>',l.hidden=!1,document.exitPointerLock?.();let H=A(),ce=H[Se]?Se:H.findIndex(fe=>fe.classList.contains("elegido"));M(ce>=0?ce:H.findIndex(fe=>fe.tagName==="BUTTON")),g(),V&&Nt.clic()}function E(){d=null,h=null,l.hidden=!0,c.innerHTML=""}function M(W){let ge=A();ge.length&&(m=(W+ge.length)%ge.length,ge.forEach((Me,Se)=>Me.classList.toggle("foco",Se===m)),ge[m].focus({preventScroll:!0}),ge[m].scrollIntoView?.({block:"nearest"}),ge[m].tagName==="INPUT"&&ge[m].setSelectionRange(ge[m].value.length,ge[m].value.length))}function w(W){let ge=A().indexOf(document.activeElement);M((ge>=0?ge:m)+W),Nt.hover()}let g=()=>{let W=c.querySelector(".mu-pie");W&&(W.textContent=bs[u].panel)};c.addEventListener("click",W=>{let ge=W.target.closest("button");if(!ge||ge.disabled)return;let{a:Me,v:Se}=ge.dataset;if(Me==="rol")S(),e.rol(Se);else if(Me==="modo")e.modo(Se);else if(Me==="empezar")S(),e.empezar();else if(Me==="unirse"){let V=c.querySelector("[name=codigo]").value.trim();V&&e.unirse(V)}else if(Me==="copiar")navigator.clipboard?.writeText(Se).then(()=>{ge.textContent="Enlace copiado \u2713"},()=>{ge.textContent=Se});else if(Me==="opcion")f=Number(Se),e.intento(h.id,f);else if(Me==="frase")e.radio(Number(Se)),E();else if(Me==="reiniciar")e.reiniciar();else if(Me==="cerrar")E();else if(Me==="ajuste"){let[V,H]=Se.split(":");e.ajuste(V,Number(H))}else Me==="dev"?e.dev(Se,ge):Me==="ir"?(e.ir(Se),E()):Me==="reporte"&&e.reporte()});function S(){let W=c.querySelector("[name=nombre]");if(W){b=W.value.trim().slice(0,16);try{localStorage["mundo:nombre"]=b}catch{}e.nombre(b)}}addEventListener("keydown",W=>{d&&((W.code==="Escape"||W.code==="KeyP"&&d==="pausa")&&p?E():W.code==="ArrowDown"?(W.preventDefault(),w(1)):W.code==="ArrowUp"?(W.preventDefault(),w(-1)):W.target.tagName!=="INPUT"&&/^(Digit|Numpad)[1-6]$/.test(W.code)&&c.querySelectorAll("[data-a=opcion],[data-a=frase]")[Number(W.code.slice(-1))-1]?.click())});function C(W,ge,{codigo:Me,enlace:Se,conectado:V,pares:H}){let ce=W.jugadores[ge]?.rol,fe=W.fase==="trabajo",he=c.querySelector("[name=nombre]")?.value??b,D=Object.entries(Mt).map(([re,pe])=>{let ve=Rn(W,re),be=ve&&ve!==ge;return`<button class="mu-op${ve===ge?" elegido":""}" data-a="rol" data-v="${re}"${be||!V?" disabled":""}>${pe.icono} <b>${ct(pe.nombre)}</b> \xB7 ${ve===ge?"T\xFA":be?ct(W.jugadores[ve].nombre):"compa\xF1ero autom\xE1tico"}<small>${ct(pe.resumen)}</small></button>`}).join("");_("sala",`
      <h1>Cuadrilla Segura \xB7 Mundo</h1>
      <p><small>Orden de trabajo: asegurar la escalera al poste y subir \xB7 Calle 50 Luisa, Sabana Norte. Contenido en revisi\xF3n por Salud Ocupacional.</small></p>
      <div class="mu-fila"><label>Tu nombre<input name="nombre" maxlength="16" autocomplete="off" value="${ct(he)}" placeholder="Como te ver\xE1n los dem\xE1s"></label>
        <div>Sala <b>${ct(Me)}</b> \xB7 ${V?`${H+1} en l\xEDnea`:"conectando\u2026"}<br><button class="mu-op" data-a="copiar" data-v="${ct(Se)}" style="margin:4px 0 0;min-height:36px;padding:6px 10px">Copiar enlace para invitar</button></div></div>
      <h2>${fe?"Trabajo en curso: elige un rol libre":"Elige tu rol"}</h2>${D}
      ${fe?"":`<h2>Dificultad</h2><div class="mu-fila">
        <button class="mu-op${W.modo==="aprendiz"?" elegido":""}" data-a="modo" data-v="aprendiz"${ce?"":" disabled"}><b>Aprendiz</b><small>Con pistas; el juego no deja saltarse el orden.</small></button>
        <button class="mu-op${W.modo==="tecnico"?" elegido":""}" data-a="modo" data-v="tecnico"${ce?"":" disabled"}><b>T\xE9cnico</b><small>Sin pistas; saltarse un paso es una falta.</small></button></div>
      <button class="mu-op mu-pri" data-a="empezar"${ce?"":" disabled"}>${ce?"Empezar el trabajo":"Elige un rol para empezar"}</button>`}
      <h2>Unirse a otra sala</h2><div class="mu-fila"><input name="codigo" maxlength="12" autocomplete="off" placeholder="C\xF3digo de sala"><button class="mu-op" data-a="unirse" style="margin:0">Unirse</button></div>`)}function P(W,ge,Me=[]){h?.id!==W.id&&(f=null),h=W,x=Me;let Se=Jl(W).map((V,H)=>`<button class="mu-op${Me.includes(V)?" mal":""}" data-a="opcion" data-v="${V}"${Me.includes(V)?" disabled":""}>${Cf[H]}. ${ct(W.opciones[V])}</button>`).join("");_("decision",`<h2>${ct(Mt[W.rol].nombre)} \xB7 ${ct(W.nombre)}</h2><h1>${ct(W.pregunta)}</h1>${Se}
      ${Me.length?`<div class="mu-nota"><b>No es as\xED.</b> ${ct(W.porque)}<br><small>${ct(W.ref)}</small></div>`:ge.modo==="aprendiz"?`<div class="mu-pista"><small>Pista: ${ct(W.ref)}</small></div>`:""}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Volver</button>`,{cancela:!0})}function N(W,ge){d!=="decision"||h?.id!==W.paso||(f!==null&&!x.includes(f)&&x.push(f),P(h,ge,x))}function U(){_("radio",`<h2>Radio</h2>${hs.map((W,ge)=>`<button class="mu-op" data-a="frase" data-v="${ge}">${Cf[ge]}. ${ct(W)}</button>`).join("")}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>`,{cancela:!0})}function F(W){_("mapa",'<h2>Costa Rica \xB7 escala 1:60 \xB7 \u25B2 t\xFA \xB7 \u25CB pick-up y cuadrilla</h2><canvas></canvas><button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>',{cancela:!0}),W(c.querySelector("canvas"))}function G(W){let ge=tr(W),Me=pf(W),Se=Object.entries(Mt).map(([V,H])=>{let ce=Rn(W,V),fe=W.eventos.filter(he=>he.tipo==="falta"&&he.rol===V);return`<tr><td>${H.icono} <b>${ct(H.corto)}</b><br><small>${ce?ct(W.jugadores[ce].nombre):"autom\xE1tico"}</small></td><td><b>${Me[V]}</b></td>
        <td>${fe.length?fe.map(he=>`${ct(he.texto)}<br><small>${ct(he.ref)}</small>`).join("<br>"):"<small>Sin faltas</small>"}</td></tr>`}).join("");_("fin",`<h1>Trabajo terminado ${"\u2605".repeat(Qd(W))}${"\u2606".repeat(3-Qd(W))}</h1>
      <p>Seguridad de la cuadrilla: <b>${ge} de 100</b> \xB7 modo ${W.modo==="tecnico"?"T\xE9cnico":"Aprendiz"}. El liniero qued\xF3 asegurado con el carrito, la faja de posicionamiento y la l\xEDnea de vida.</p>
      <table class="mu-tabla">${Se}</table>
      <p><small>Contenido en revisi\xF3n por Salud Ocupacional. La forma de la faja en M es pr\xE1ctica de la cuadrilla.</small></p>
      <button class="mu-op mu-pri" data-a="reiniciar">Volver a la sala</button>
      <button class="mu-op" data-a="cerrar" style="text-align:center">Seguir en el mundo</button>`,{cancela:!0})}function K(W,ge,Me,Se,V,H=""){i.hidden=r.hidden=!1,i.innerHTML=`<span class="mu-seg">Seguridad ${tr(W)}</span><b>${ge?`${Mt[ge].icono} ${ct(Mt[ge].nombre)}`:"\u{1F440} Observando"}</b><div class="mu-tarea">${ct(Me)}</div>${H?`<div class="mu-lugar">\u{1F4CD} ${ct(H)}</div>`:""}`;let ce=ia.find(fe=>!W.hechos[fe.id]&&fe.fisico.every(he=>W.hechos[he])&&fe.antes.every(he=>W.hechos[he]))?.id;r.innerHTML=ia.map(fe=>`<li class="${W.hechos[fe.id]?"hecho":fe.id===ce?"ahora":""}${fe.rol===ge?" mio":""}">${W.hechos[fe.id]?"\u2713":fe.id===ce?"\u25B8":"\xB7"} ${ct(fe.nombre)} <small>(${ct(Mt[fe.rol].corto)})</small></li>`).join(""),s.hidden=!Se,s.textContent=Se??"",s.classList.toggle("gris",!!V)}function ee(){i.hidden=r.hidden=s.hidden=!0}function q(W,ge="",Me=4.5){let Se=document.createElement("div");for(Se.className=ge,Se.innerHTML=W,o.append(Se);o.children.length>4;)o.firstChild.remove();setTimeout(()=>Se.remove(),Me*1e3)}let Z=[];function $(W){W.forEach((ge,Me)=>{let Se=Z[Me]??=n("mu-etq");Se.hidden=!ge.visible,ge.visible&&(Se.textContent!==ge.texto&&(Se.textContent=ge.texto),Se.style.left=ge.x+"px",Se.style.top=ge.y+"px")});for(let ge=W.length;ge<Z.length;ge++)Z[ge].hidden=!0}function se(W){if(W.origen!==u&&(u=W.origen,g()),v.hidden=!!d,!d){let ge=bs[u].mundo;v.textContent!==ge&&(v.textContent=ge);return}if(W.abajo&&w(1),W.arriba&&w(-1),W.accion&&W.origen==="control"){let ge=A()[m];ge?.tagName==="BUTTON"&&ge.click()}W.atras&&p&&E()}function we(W,ge,Me){let Se=(ce,fe,he)=>`<div class="mu-fila3"><span>${fe}</span><button class="mu-op" data-a="ajuste" data-v="${ce}:-1" aria-label="Bajar ${fe}">\u2212</button><b style="min-width:3.2em;text-align:center">${he}</b><button class="mu-op" data-a="ajuste" data-v="${ce}:1" aria-label="Subir ${fe}">+</button></div>`,V=(ce,fe,he)=>`<button class="mu-op${he?" elegido":""}" data-a="ajuste" data-v="${ce}:0">${he?"\u2611":"\u2610"} ${fe}</button>`,H=(ce,fe,he)=>`<button class="mu-op" data-a="${ce}" data-v="${fe}">${he}</button>`;_("pausa",`<h1>Pausa</h1><p><small>El juego sigue corriendo para tu cuadrilla.</small></p>
      ${H("cerrar","","\u25B6 Continuar")}${Me?.fase==="fin"?H("reporte","","\u{1F3C1} Ver el reporte del trabajo"):""}
      <h2>Sonido</h2>${Se("musica","M\xFAsica",Math.round(W.musica*10))}${Se("efectos","Efectos",Math.round(W.efectos*10))}
      <h2>Controles</h2>${Se("sensibilidad","Sensibilidad de la c\xE1mara",W.sensibilidad.toFixed(1))}${V("invertir","Invertir el eje vertical",W.invertir)}
      <p><small>${ct(bs[u].todo)}</small></p>
      <h2>Imagen</h2>${Se("resolucion","Resoluci\xF3n","\xD7"+W.resolucion.toFixed(2))}${V("diag","Panel de medidas",W.diag)}
      <h2>Desarrollo</h2>${V("dev","Opciones de desarrollador",W.dev)}
      ${W.dev?`<p><small>Cambian el trabajo de toda la sala (las propone el anfitri\xF3n). \xDAsalas para probar y para reportar fallos.</small></p>
        ${H("dev","reporte","\u{1F4CB} Copiar reporte del estado (para enviar a Claude)")}
        ${H("dev","paso","\u23ED Completar el paso que toca")}${H("dev","todo","\u23E9 Terminar el trabajo")}${H("dev","reiniciar","\u21BA Reiniciar el trabajo")}
        ${Se("tiempo","Velocidad del tiempo","\xD7"+W.tiempo)}${V("volar","Volar (sin colisiones, m\xE1s r\xE1pido)",W.volar)}${V("colisiones","Mostrar colisiones",W.colisiones)}
        <h2>Ir a</h2><div class="mu-fila">${ge.map(([ce,fe])=>H("ir",ce,ct(fe))).join("")}</div>`:""}`,{cancela:!0})}return{pausa:we,get origen(){return u},get abierto(){return d},get paso(){return h},get nombre(){return b},sala:C,decision:P,fallo:N,radio:U,mapa:F,fin:G,cerrar:E,tablero:K,ocultarTablero:ee,avisar:q,etiquetas:$,navegar:se}}var tc=60/116/2,N_=.25,lu=a=>440*2**((a-69)/12),F_=[[48,52,55],[45,48,52],[41,45,48],[43,47,50]],Pf=[[72,0,76,79,0,76,74,72,69,0,72,76,0,74,72,69,65,0,69,72,0,74,72,69,67,71,74,0,79,77,74,71],[79,0,79,77,76,0,74,76,72,0,0,76,74,72,69,0,77,0,76,74,72,0,69,72,74,0,71,72,74,76,77,79],[76,76,0,79,0,76,72,0,81,0,79,76,72,0,76,0,77,0,81,0,79,77,76,72,74,0,79,0,77,76,74,71]];function If(){let a=null,e=null,t=1,n=.5,i=0,r=0,s=null,o=null;function l(){if(Mf(),!a)try{a=new(window.AudioContext||window.webkitAudioContext),e=a.createGain(),e.gain.value=n*.22,e.connect(a.destination),s=a.createOscillator(),s.type="sawtooth",s.frequency.value=40;let b=a.createBiquadFilter();b.type="lowpass",b.frequency.value=420,o=a.createGain(),o.gain.value=0,s.connect(b).connect(o).connect(a.destination),s.start()}catch{a=null;return}a.state!=="running"&&a.resume?.().catch?.(()=>{})}for(let b of["pointerdown","keydown","touchend"])addEventListener(b,l,{passive:!0});function c(b,m,u,v,A,_){let E=a.createOscillator(),M=a.createGain();if(b==="pulso"){let g=new Float32Array(16),S=new Float32Array(16);for(let C=1;C<16;C++)g[C]=2/(C*Math.PI)*Math.sin(C*Math.PI*_);E.setPeriodicWave(a.createPeriodicWave(g,S))}else E.type=b;E.frequency.value=m,M.gain.setValueAtTime(A,u),M.gain.exponentialRampToValueAtTime(5e-4,u+v),E.connect(M).connect(e),E.start(u),E.stop(u+v+.02)}function d(b){let m=a.createOscillator(),u=a.createGain();m.frequency.setValueAtTime(140,b),m.frequency.exponentialRampToValueAtTime(45,b+.12),u.gain.setValueAtTime(.9,b),u.gain.exponentialRampToValueAtTime(.001,b+.14),m.connect(u).connect(e),m.start(b),m.stop(b+.16)}let p=null;function h(b,m){p??=(()=>{let _=a.createBuffer(1,a.sampleRate*.06,a.sampleRate),E=_.getChannelData(0);for(let M=0;M<E.length;M++)E[M]=Math.random()*2-1;return _})();let u=a.createBufferSource(),v=a.createBiquadFilter(),A=a.createGain();u.buffer=p,v.type="highpass",v.frequency.value=6e3,A.gain.setValueAtTime(m,b),A.gain.exponentialRampToValueAtTime(.001,b+.05),u.connect(v).connect(A).connect(e),u.start(b)}function f(b,m){let u=Math.floor(b/32)%Pf.length,v=b%32,A=F_[Math.floor(v/8)],_=Pf[u][v];_&&c("pulso",lu(_),m,tc*1.6,.22,.25),v%2===0&&c("triangle",lu(A[0]-12),m,tc*1.8,.5),c("pulso",lu(A[v%3]+12),m,tc*.5,.05,.125),v%4===0&&d(m),h(m,v%2?.05:.1)}function x(b=null){if(!a||a.state!=="running")return;if(i<a.currentTime&&(i=a.currentTime+.05),n>0)for(;i<a.currentTime+N_;)f(r++,i),i+=tc;else i=a.currentTime;let m=Math.abs(b??0),u=a.currentTime;s.frequency.setTargetAtTime(38+m*3.2,u,.15),o.gain.setTargetAtTime(b===null?0:(.05+Math.min(.08,m*.004))*t,u,.2)}return{desbloquear:l,cada:x,get activo(){return a?.state==="running"},volumen(b,m){n=b,t=m,Ef(m),e&&e.gain.setTargetAtTime(b*.22,a.currentTime,.1)},atenuar(b){e&&e.gain.setTargetAtTime(n*(b?.08:.22),a.currentTime,.3)}}}var Df={musica:.5,efectos:.8,sensibilidad:1,invertir:!1,resolucion:0,diag:!1,dev:!1,tiempo:1,volar:!1,colisiones:!1},Et=(()=>{try{return{...Df,...JSON.parse(localStorage["mundo:ajustes"]??"{}"),tiempo:1,volar:!1,colisiones:!1}}catch{return{...Df}}})(),U_=()=>{try{localStorage["mundo:ajustes"]=JSON.stringify(Et)}catch{}};Fl.variante="nuevo";var jn=new URLSearchParams(location.search),$a=wp(),fu=jn.has("demo"),Vf=(a,e)=>Number.isFinite(parseInt(jn.get(a)))?parseInt(jn.get(a)):e,nc=(...a)=>a.every(Number.isFinite),kf=new Int16Array(await(await fetch(new URL(Cp,import.meta.url))).arrayBuffer()),pn=new Il({antialias:$a.antialias,powerPreference:"high-performance"}),Aa=$a.pixelRatio;pn.setPixelRatio(Aa);pn.setSize(innerWidth,innerHeight);pn.toneMapping=Xr;pn.toneMappingExposure=1.05;pn.shadowMap.enabled=!0;pn.shadowMap.autoUpdate=!1;document.body.append(pn.domElement);var la=new Cr;la.background=new qe(10997738);la.fog=new wr(11850728,220,4200);var hn=new Xt(62,innerWidth/innerHeight,.2,7e3);la.add(new kr(14084607,7043669,1.15));var oa=new $r(16773590,2.7),O_=new L(.45,.78,.32).normalize();oa.castShadow=!0;oa.shadow.mapSize.setScalar($a.sombra);Object.assign(oa.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:260});oa.shadow.bias=-6e-4;oa.shadow.normalBias=.04;la.add(oa,oa.target);addEventListener("resize",()=>{hn.aspect=innerWidth/innerHeight,hn.updateProjectionMatrix(),pn.setSize(innerWidth,innerHeight)});var Qt=Rp(Fd.eje),Dt=Lp(Fd,Qt),oc=Object.entries(cs).map(([a,e])=>{let[t,n]=Od(Ji,e.lat,e.lon);return{k:a,n:e.n,x:t,z:n,r:e.r}}),di=Object.fromEntries(oc.map(a=>[a.k,a])),Pn=Fp(kf,Ji,Qt,oc.filter(a=>a.r>0),Hp.map(a=>({...a,x:di[a.k].x,z:di[a.k].z}))),ac=a=>{let e=Qt.en(Qt.largo,a);return[e.x,e.z]},qa=Up(Gp.map(a=>({n:a.n,y0:a.p[0][0]==="@"?0:void 0,puntos:a.p.flatMap(e=>e==="@oeste"?[ac(-Dt.BORDE),ac(-Dt.BORDE-60)]:e==="@este"?[ac(Dt.BORDE),ac(Dt.BORDE+60)]:[typeof e=="string"?[di[e].x,di[e].z]:Od(Ji,e[0],e[1])])})),Pn.alturaBase,Pn.MAR),jf=Op(qa),$f=Bp(Pn,qa,Ji),B_=Vp(kf,Ji,qa);Pn.listo(qa,(a,e)=>{jf.rehacer(a,e,420),$f.rehacer(a,e)});var ic={},qf=(a,e)=>Math.abs(a)<320&&Math.abs(e)<360&&(Qt.aVia(a,e,ic),Math.abs(ic.a)<=Dt.BORDE&&ic.d>=Dt.D0&&ic.d<=Dt.D1),ci=(a,e)=>qf(a,e)?Dt.altura(a,e):Math.max(Pn.altura(a,e),Pn.MAR-1),Ms=$p(Qt,Dt,Vf("autos",20)),mu=Pp(Qt,Dt.cajas,Dt.circulos,{d0:-1e9,d1:1e9,a:1e9}),Kt=ef(la,ci),ys=tf(96),Zt=xf({via:Qt,barrio:Dt}),nt=zp(ci,Dt.estacionado);la.add(Pn.grupo,jf.malla,$f.grupo,Dt.grupo,Ms.grupo,ys.malla,Zt.grupo,nt.grupo);var Lf=[11879996,3960757,5216859,9068464,13666862,4869975],z_=Array.from({length:Vf("gente",5)},(a,e)=>({id:"p"+e,d:30+e*83%(Qt.largo-60),a:e%2?4.4:-4.3,s:e%2?1:-1,v:1.15+e%3*.15,op:{camisa:Lf[e%Lf.length],uniforme:!1}})),cu={},rn=new L,gu={dist:0},xu=a=>({camisa:Mt[a].camisa,uniforme:!0,arnes:a==="liniero"}),sa=null;function vu(a){sa&&la.remove(sa.raiz),sa=jd(a?{camisa:Mt[a].camisa}:{}),sa.equipar("casco"),a==="liniero"&&sa.equipar("arnes"),la.add(sa.raiz)}vu(null);var Nf=Qt.en(Dt.inicio.d,Dt.inicio.a),le={x:Nf.x,z:Nf.z,y:.15,vx:0,vz:0,rumbo:Math.PI,fase:0,guinada:Math.PI,cabeceo:-.12,dist:4.2,primera:!1,d:0,a:0},dc=af(),lc=nf(pn.domElement,dc),Wf=rf(dc,jn.has("diag")||Et.diag);jn.has("dev")&&(Et.dev=!0);var cc=If(),Xf=Object.assign(document.createElement("div"),{className:"mu-chip",textContent:"\u{1F507} Toca la pantalla o pulsa una tecla para activar el sonido"});dc.append(Xf);Et.resolucion||(Et.resolucion=Aa);function Yf(){cc.volumen(Et.musica,Et.efectos),lc.mirada.sensibilidad=Et.sensibilidad,lc.mirada.invertir=Et.invertir,Aa=Et.resolucion,pn.setPixelRatio(Aa),Wf.mostrar(Et.diag||jn.has("diag")),Qf.visible=Et.colisiones}var In=(()=>{try{return localStorage["mundo:id"]??=Math.random().toString(36).slice(2,10)}catch{return Math.random().toString(36).slice(2,10)}})(),dr=(jn.get("sala")||"").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,12);dr||(dr=Array.from({length:4},()=>"abcdefghjkmnpqrstuvwxyz"[Math.floor(Math.random()*23)]).join(""),jn.set("sala",dr),history.replaceState(null,"","?"+jn));var G_=`${location.origin}${location.pathname}?sala=${dr}`,Ss=null,bu=jn.has("sinred"),Ff=0,ui=()=>We.E.jugadores[In]?.rol??null,st=Rf(dc,{nombre:a=>{let e=We.E.jugadores[In];e&&e.nombre!==(a||"Jugador")&&We.proponer({t:"entra",nombre:a})},rol:a=>{let e=We.E.jugadores[In];Ss=e?.rol===a?null:a,e||We.proponer({t:"entra",nombre:st.nombre}),We.proponer({t:"rol",rol:Ss})},modo:a=>We.proponer({t:"modo",modo:a}),empezar:()=>We.proponer({t:"empezar"}),unirse:a=>{location.search="?sala="+encodeURIComponent(a.toLowerCase())},intento:(a,e)=>We.proponer({t:"intento",paso:a,opcion:e}),reiniciar:()=>We.proponer({t:"reiniciar"}),ajuste:(a,e)=>{let t={musica:[0,1,.1],efectos:[0,1,.1],sensibilidad:[.3,3,.1],resolucion:[.5,2,.25],tiempo:[1,8,0]};if(a==="tiempo")Et.tiempo=e>0?Math.min(8,Et.tiempo*2):Math.max(1,Et.tiempo/2);else if(t[a]){let[n,i,r]=t[a];Et[a]=Math.round(Math.max(n,Math.min(i,Et[a]+e*r))*100)/100}else a in Et&&(Et[a]=!Et[a]);U_(),Yf(),st.pausa(Et,Su,We.E),Nt.clic()},dev:(a,e)=>{if(a==="reporte"){let t=JSON.stringify({fecha:new Date().toISOString(),info:(({texto:n,...i})=>i)(Mu()),estado:We.E,huella:We.huella,eventos:We.E.n,entrada:cr,navegador:navigator.userAgent,pantalla:[innerWidth,innerHeight,devicePixelRatio]},null,1);navigator.clipboard?.writeText(t).then(()=>{e.textContent="\u{1F4CB} Reporte copiado \u2713 (p\xE9galo en el chat)"},()=>{console.log(t),e.textContent="\u{1F4CB} No se pudo copiar: est\xE1 en la consola"});return}if(!We.anfitrion()){st.avisar("Solo el anfitri\xF3n de la sala puede cambiar el trabajo","falta");return}if(a==="reiniciar")We.proponer({t:"reiniciar",dev:!0});else if(We.E.fase==="trabajo")for(let t=0;t<(a==="todo"?40:1)&&We.E.fase==="trabajo";t++){let n=Kd(We.E);if(!n)break;We.proponer(n.auto?{t:"auto",paso:n.id}:{t:"intento",paso:n.id,opcion:0,dev:!0})}st.cerrar()},reporte:()=>st.fin(We.E),ir:a=>{let e=a==="poste"?Zt.zonas.poste:a==="pickup"?nt.local(2.2,0,0,new L):di[a];e&&(le.x=e.x+(di[a]?12:0),le.z=e.z,le.vx=le.vz=0)},radio:a=>{sn?.fiable({t:"radio",i:a}),Jf(a,In)}});function H_(a,e){Number.isInteger(a.n)&&We.latido(a.n,a.h,e);let t=We.E,n=t.jugadores[e]?.rol;if(n?nc(a.x,a.z,a.r)&&Math.abs(a.x)<5e3&&Math.abs(a.z)<5e3&&Kt.fijar("j:"+e,a.x,a.z,a.r,xu(n),nc(a.y)?Math.max(-80,Math.min(300,a.y)):void 0,a.o):Kt.quitar("j:"+e),Array.isArray(a.c)&&e===t.pickup.chofer&&nc(...a.c.slice(0,4))&&Math.abs(a.c[0])<5e3&&Math.abs(a.c[1])<5e3&&nt.remoto(a.c[0],a.c[1],a.c[2],a.c[3]),Array.isArray(a.b)&&e===We.idAnfitrion())for(let i of a.b.slice(0,8))Array.isArray(i)&&Object.hasOwn(Mt,i[0])&&nc(i[1],i[2],i[3],i[4])&&!Rn(t,i[0])&&Kt.fijar("b:"+i[0],i[1],i[2],i[4],xu(i[0]),Math.max(-80,Math.min(300,i[3])),i[5])}function Jf(a,e){let t=We.E.jugadores[e];!t||!hs[a]||(Nt.alerta(),st.avisar(`\u{1F4FB} <b>${ct(t.rol?Mt[t.rol].corto:"Sin rol")}</b> (${ct(t.nombre)}): ${ct(hs[a])}`,"radio"))}var sn=jn.has("sinred")?null:lf({sala:dr,id:In,alMensaje:(a,e)=>{a?.t==="p"?H_(a,e):a?.t==="radio"?Jf(a.i,e):We.recibir(a,e)},alPar:(a,e)=>{e?We.pedir():(Kt.quitar("j:"+a),We.anfitrion()&&We.proponer({t:"sale",id:a}))}}),We=ff({id:In,red:sn,alEvento:V_}),lr=bf({sesion:We,obra:Zt,resolver:mu,altura:ci});function Uf(){let a=ui();if(!a)return;let e=Zt.puesto(a,We.E.hechos.llegada?"poste":"pickup");le.x=e.x,le.z=e.z,le.vx=le.vz=0}function yu(){let a=We.E;fu||(a.fase!=="fin"&&st.abierto==="fin"&&st.cerrar(),a.fase==="sala"||a.fase==="trabajo"&&!ui()?(!st.abierto||st.abierto==="sala")&&st.sala(a,In,{codigo:dr,enlace:G_,conectado:bu,pares:sn?.estado.pares.size??0}):st.abierto==="sala"&&st.cerrar())}function V_(a,e){if(a)a.t==="rol"?(a.id===In?(vu(a.rol),a.rol&&e.fase==="trabajo"&&Uf()):Kt.quitar("j:"+a.id),a.rol&&Kt.quitar("b:"+a.rol)):a.t==="sale"?Kt.quitar("j:"+a.id):a.t==="empezar"?(st.cerrar(),Uf()):a.t==="hecho"?(st.avisar(`\u2713 <b>${ct(Mt[a.rol]?.corto)}</b>: ${ct(Sa[a.paso]?.nombre)}`),(j_[a.paso]??Nt.ok)(),e.fase==="fin"&&setTimeout(Nt.logro,600),st.paso?.id===a.paso&&st.cerrar()):a.t==="falta"&&(Nt.error(),st.avisar(`\u26A0 <b>${ct(Mt[a.rol]?.corto)}</b>: ${ct(a.texto)}<small>${ct(a.ref)}</small>`,"falta",9),st.fallo(a,e));else{for(let t of[...Kt.mapa.keys()])/^[jb]:/.test(t)&&Kt.quitar(t);Ss&&e.jugadores[In]?.rol!==Ss&&(e.jugadores[In]||We.proponer({t:"entra",nombre:st.nombre}),We.proponer({t:"rol",rol:Ss})),vu(ui())}yu()}var Of=new qr,_s=new L(1e9,0,0),sr=[],du=new Proxy({},{get:(a,e)=>bs[e]?.accion??"E"}),k_={pickup:"el pick-up",poste:"el poste"},j_={perimetro:Nt.cono,cuerda_extension:Nt.cuerda,tensar:Nt.cuerda,amarre_medio:Nt.cuerda,colocar:Nt.metal,tomar:Nt.metal,carrito:Nt.clip,faja:Nt.clip,linea_vida:Nt.clip,llegada:Nt.metal},Su=[["pickup","El pick-up"],["poste","El poste de trabajo"],...["cartago","limon","liberia","fortuna","puntarenas","sanisidro","penasblancas","canoas"].map(a=>[a,cs[a].n.split(" \xB7 ")[0]])],Bf=0,rc=0,uu=0,hu=0,zf=0,_u=0,Zf=0,cr="",Gf="",rr=-1,sc="",Hf=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a)),$_=a=>{let e=Rn(We.E,a);return Kt.mapa.get(e?"j:"+e:"b:"+a)},or=a=>a===ui()?le:We.anfitrion()&&lr.B.get(a)||$_(a),pu=a=>Math.hypot(le.x-Zt.zonas[a].x,le.z-Zt.zonas[a].z);function q_(){let a=oc[0],e=1/0;for(let n of oc){let i=Math.hypot(le.x-n.x,le.z-n.z);i<e&&(e=i,a=n)}return(qa.cerca(le.x,le.z,gu).dist<9?qa.rutas[gu.ruta].n+" \xB7 ":"")+(e<Math.max(90,a.r+40)?a.n:`${a.n} a ${e<1e3?Math.round(e/10)*10+" m":(e/1e3).toFixed(1).replace(".",",")+" km"}`)}function W_(a){let e=[{x:le.x,z:le.z,color:"#FFD627",rumbo:le.rumbo},{x:nt.st.x,z:nt.st.z,color:"#fff"}];for(let t in Mt){let n=t!==ui()&&or(t);n&&e.push({x:n.x,z:n.z,color:"#"+Mt[t].camisa.toString(16).padStart(6,"0")})}return e}Pn.cada(le.x,le.z,!0);document.getElementById("cargando")?.remove();function Kf(){requestAnimationFrame(Kf);let a=Math.min(.05,Of.getDelta())*Et.tiempo,e=Of.elapsedTime,t=performance.now(),n=lc.leer(a);cr=n.origen,We.cada();let i=We.E,r=ui(),s=!!st.abierto,o=i.pickup,l=o.chofer===In;if(st.navegar(n),s?((n.mapa&&st.abierto==="mapa"||n.pausa&&st.abierto==="pausa")&&st.cerrar(),n.mx=n.mz=n.gx=n.gy=0,n.accion=n.vista=!1,i.fase==="sala"&&(le.guinada+=a*.05)):n.pausa?st.pausa(Et,Su,We.E):n.radio&&i.fase==="trabajo"&&r?st.radio():n.mapa&&i.fase!=="sala"&&st.mapa(S=>B_.dibujar(S,W_(i))),l){let S=qf(nt.st.x,nt.st.z)||qa.cerca(nt.st.x,nt.st.z,gu).dist<5;nt.conducir(a,n,S,Pn.limites),mu(nt.st,1.3)}else o.chofer?nt.seguir(a):o.x===null?nt.fijar(Dt.estacionado.x,Dt.estacionado.z,Dt.estacionado.rumbo):nt.fijar(o.x,o.z,o.r);nt.asentar(),n.vista&&(le.primera=!le.primera),le.guinada-=n.gx,le.cabeceo=Math.max(le.primera?-1.3:-1.05,Math.min(le.primera?1.3:.55,le.cabeceo+n.gy)),l&&!n.gx&&Math.abs(nt.st.v)>.5&&(le.guinada+=Hf(le.guinada,nt.st.rumbo+Math.PI)*Math.min(1,a*2.5));let c=Math.sin(le.guinada),d=Math.cos(le.guinada),p=n.correr?3.9:1.7,h=1-Math.exp(-a*10),f=Zt.cargando(i)&&/^auxiliar/.test(r??""),x=f?"c":"i",b=0;if(l)le.x=nt.st.x,le.z=nt.st.z,le.y=nt.st.y,le.vx=le.vz=0,le.rumbo=nt.st.rumbo,x="o";else if(r==="liniero"&&i.hechos.subir){let S=Zt.puestoLiniero();le.x=S.x,le.z=S.z,le.y=S.y,le.vx=le.vz=0,le.rumbo=Zt.rumbo,le.fase=S.fase,x=S.pose}else{let S=f?Math.min(p,1.7):Et.volar?p*6:p,C=Pn.limites;le.vx+=((d*n.mx-c*n.mz)*S-le.vx)*h,le.vz+=((-c*n.mx-d*n.mz)*S-le.vz)*h,le.x=Math.max(C.x0,Math.min(C.x1,le.x+le.vx*a)),le.z=Math.max(C.z0,Math.min(C.z1,le.z+le.vz*a)),Et.volar||(mu(le,.32),nt.empujar(le,.32)),Zt.restringir(i,r,le,or),le.y+=(ci(le.x,le.z)-le.y)*Math.min(1,a*14),b=Math.hypot(le.vx,le.vz),le.primera?le.rumbo=Math.atan2(-c,-d):b>.3&&(le.rumbo+=Hf(le.rumbo,Math.atan2(le.vx,le.vz))*Math.min(1,a*12)),le.fase+=b*a*(n.correr?3.1:4.19),Math.floor(le.fase/Math.PI)!==Bf&&(Bf=Math.floor(le.fase/Math.PI),b>.4&&Nt.paso())}Qt.aVia(le.x,le.z,le),sa.raiz.position.set(le.x,le.y,le.z),sa.raiz.rotation.y=le.rumbo,sa.pose({tipo:kd[x]??(b>.25?"caminar":"idle"),fase:le.fase,t:e,dt:a}),le.dist+=((le.primera?0:l?8.5:4.2)-le.dist)*Math.min(1,a*9);let m=Math.cos(le.cabeceo),u=(l?0:.45)*Math.min(1,le.dist);l?nt.local(le.primera?.38:0,le.primera?1.42:2,le.primera?.62:0,rn):rn.set(le.x,le.y+1.62,le.z),hn.rotation.set(le.cabeceo,le.guinada,0,"YXZ"),hn.position.set(rn.x+c*m*le.dist+d*u,rn.y-Math.sin(le.cabeceo)*le.dist,rn.z+d*m*le.dist-c*u),hn.position.y=Math.max(hn.position.y,ci(hn.position.x,hn.position.z)+.4),hn.updateMatrixWorld(),sa.raiz.visible=le.dist>.7&&!l,Pn.cada(le.x,le.z);for(let S of z_)S.d+=S.s*S.v*a,S.d>Qt.largo-8?S.s=-1:S.d<8&&(S.s=1),Qt.en(S.d,S.a,cu),Kt.fijar(S.id,cu.x,cu.z,void 0,S.op);lr.cada(a,i,or);for(let S of lr.B.values())if(We.anfitrion())Kt.fijar("b:"+S.rol,S.x,S.z,S.rumbo,xu(S.rol),S.y,S.pose);else{let C=Kt.mapa.get("b:"+S.rol);C&&(S.x=C.x,S.z=C.z,S.y=C.y,S.rumbo=C.rumbo)}Kt.cada(a,e,hn),sr.length=0,sr.push(le);for(let S of Kt.mapa.values())Qt.aVia(S.x,S.z,S),sr.push(S);Ms.cada(a,sr),We.anfitrion()&&Zt.cargando(i)&&Zt.llego(or)&&We.proponer({t:"auto",paso:"llegada"}),Zt.cada(a,e,i,or,nt);let v="",A=null,_=!1,E=null;if(l)v=`Al volante \xB7 ${Math.round(Math.abs(nt.st.v)*3.6)} km/h`,A=Math.abs(nt.st.v)<2?`${du[cr]??"E"} \xB7 Bajar del pick-up`:null,n.accion&&A&&(We.proponer({t:"aparca",x:+nt.st.x.toFixed(2),z:+nt.st.z.toFixed(2),r:+nt.st.rumbo.toFixed(3)}),nt.local(1.75,0,.5,rn),le.x=rn.x,le.z=rn.z);else if(i.fase==="trabajo"&&r){let S=U=>U.lugar==="arriba"?r==="liniero"&&Zt.subida>=1:pu(U.lugar)<4.2,C=er(i,r),P=C.find(U=>!U.bloqueo),N=C.find(U=>!U.bloqueo&&S(U.paso))??C.find(U=>S(U.paso));if(f)v=`Lleva la escalera al poste con tu compa\xF1ero \xB7 ${Math.round(pu("poste"))} m`,E="poste";else if(P){let U=S(P.paso)||P.paso.lugar==="arriba";v=`Tu tarea: ${P.paso.nombre}${U?"":` \xB7 ${k_[P.paso.lugar]} est\xE1 a ${Math.round(pu(P.paso.lugar))} m`}`,E=U?null:P.paso.lugar}else{let U=Kd(i);v=U?`Espera: ${Mt[U.rol].corto} \u2192 ${U.nombre}`:"Trabajo terminado"}N&&!s&&(N.bloqueo&&i.modo==="aprendiz"?(A=`\u{1F512} Antes: ${N.bloqueo.nombre} (${Mt[N.bloqueo.rol].corto})`,_=!0):A=`${du[cr]??"E"} \xB7 ${N.paso.accion}`,n.accion&&(_?st.avisar(`\u{1F512} Primero: <b>${ct(N.bloqueo.nombre)}</b> (${ct(Mt[N.bloqueo.rol].corto)})`,"",3):N.paso.opciones&&!N.bloqueo?st.decision(N.paso,i):We.proponer({t:"intento",paso:N.paso.id})))}else i.fase==="trabajo"?v="Observando: los compa\xF1eros autom\xE1ticos hacen el trabajo":i.fase==="fin"&&(v="Trabajo terminado");!l&&!A&&!s&&r&&(i.fase==="fin"||i.fase==="trabajo"&&i.hechos.tomar&&i.hechos.tomar2)&&!o.chofer&&!(r==="liniero"&&i.hechos.subir)&&!f&&Math.hypot(le.x-nt.st.x,le.z-nt.st.z)<3.6&&(A=`${du[cr]??"E"} \xB7 Manejar el pick-up`,n.accion&&We.proponer({t:"conduce"})),Zt.marcar(E);let M=`${i.n}|${v}|${A}|${r}|${sc}`;i.fase==="sala"?st.ocultarTablero():M!==Gf&&(Gf=M,st.tablero(i,r,v,A,_,sc)),i.fase==="fin"?(rr<0&&(rr=e),rr!==null&&e-rr>3.5&&!st.abierto&&!fu&&(st.fin(i),rr=null)):rr=-1;let w=[];if(i.fase!=="sala")for(let S in Mt){if(S===r)continue;let C=or(S);if(!C)continue;rn.set(C.x,(C.y??.15)+2.02,C.z);let P=rn.distanceTo(hn.position);rn.project(hn);let N=Rn(i,S);w.push({visible:!s&&rn.z<1&&P<45&&Math.abs(rn.x)<1.05&&!(N&&N===o.chofer),x:(rn.x+1)/2*innerWidth,y:(1-rn.y)/2*innerHeight,texto:`${Mt[S].icono} ${Mt[S].corto}${N?" \xB7 "+i.jugadores[N].nombre:""}`})}st.etiquetas(w),cc.cada(l||o.chofer?nt.st.v:null),Xf.hidden=cc.activo,l&&n.bocina&&Nt.bocina();let g=0;for(let S of sr)(S!==le||!l)&&ys.fijar(g++,S.x,ci(S.x,S.z),S.z,.62);for(let S of Ms.todos)ys.fijar(g++,S.x,0,S.z,2.3,4.9,S.rumbo);if(ys.fijar(g++,nt.st.x,nt.st.y,nt.st.z,2.4,5.6,nt.st.rumbo),ys.listo(g),Math.hypot(le.x-_s.x,le.z-_s.z)>14&&(_s.set(le.x,le.y,le.z),oa.target.position.copy(_s),oa.position.copy(_s).addScaledVector(O_,120),oa.target.updateMatrixWorld(),pn.shadowMap.needsUpdate=!0),sn&&e-zf>.1){zf=e;let S={t:"p",x:+le.x.toFixed(2),z:+le.z.toFixed(2),y:+le.y.toFixed(2),r:+le.rumbo.toFixed(2),o:x};l&&(S.c=[+nt.st.x.toFixed(2),+nt.st.z.toFixed(2),+nt.st.rumbo.toFixed(3),+nt.st.v.toFixed(1)]),We.anfitrion()&&(S.n=i.n,S.h=We.huella,lr.B.size&&(S.b=[...lr.B.values()].map(C=>[C.rol,+C.x.toFixed(2),+C.z.toFixed(2),+C.y.toFixed(2),+C.rumbo.toFixed(2),C.pose]))),(r||We.anfitrion())&&sn.enviar(S)}if(pn.render(la,hn),uu+=performance.now()-t,rc++,e-hu>=1){_u=rc/(e-hu),Zf=uu/rc,rc=0,uu=0,hu=e,_u<27&&Aa>$a.minPixelRatio&&(Aa=Math.max($a.minPixelRatio,Aa-.15),pn.setPixelRatio(Aa)),sc=q_(),Wf.escribir(Mu().texto),sn&&!sn.estado.presencia&&e>6&&We.jugarSolo();let S=!sn||sn.estado.presencia||e>6,C=sn?.estado.pares.size??0;(S!==bu||C!==Ff)&&(bu=S,Ff=C,yu()),fu&&i.fase==="sala"&&We.anfitrion()&&We.proponer({t:"empezar",demo:!0})}}function Mu(){let a=pn.info.render,e=sn?[...sn.estado.pares.values()]:[],t=e.filter(r=>r.directo),n=We.E,i={fps:Math.round(_u),ms:+Zf.toFixed(1),llamadas:a.calls,triangulos:a.triangles,pixeles:+Aa.toFixed(2),entrada:cr,vista:le.primera?"1.\xAA persona":"3.\xAA persona",x:le.x,z:le.z,y:le.y,d:le.d,a:le.a,donde:sc,red:sn?.estado.ws??"apagada",rtt:sn?.estado.rtt,pares:e.length,directos:t.length,personas:sr.length,autos:Ms.todos.length,fase:n.fase,rol:ui(),hechos:Object.keys(n.hechos).length,pasos:ia.length,seguridad:tr(n),faltas:n.eventos.filter(r=>r.tipo==="falta").length,anfitrion:We.anfitrion(),panel:st.abierto,chofer:n.pickup.chofer===In,velocidad:nt.st.v};return i.texto=["Cuadrilla Segura \xB7 Mundo",`${i.fps} cuadros/s \xB7 ${i.ms} ms por cuadro (CPU)`,`${i.llamadas} llamadas de dibujo \xB7 ${Math.round(i.triangulos/1e3)} mil tri\xE1ngulos`,`resoluci\xF3n \xD7${i.pixeles} \xB7 sombra ${$a.sombra} \xB7 ${$a.movil?$a.bajo?"tel\xE9fono modesto":"tel\xE9fono":"escritorio"}`,`${i.personas} personas \xB7 ${i.autos} autos \xB7 ${i.vista} \xB7 ${i.entrada}`,`red: ${i.red}${i.rtt!=null?` \xB7 ida y vuelta ${Math.round(i.rtt)} ms`:""}${i.anfitrion?" \xB7 anfitri\xF3n":""}`,`otros jugadores: ${i.pares}${i.pares?` (${i.directos} con enlace directo${t[0]?.rtt!=null?`, ${Math.round(t[0].rtt)} ms`:""})`:""}`,`trabajo: ${i.fase} \xB7 ${i.hechos}/${i.pasos} pasos \xB7 seguridad ${i.seguridad}`,`\u{1F4CD} ${i.donde} \xB7 ${Math.round(i.x)}, ${Math.round(i.z)} \xB7 altura ${i.y.toFixed(1)} m`].join(`
`),i}var Qf=(()=>{let a=[],e={},t=(r,s)=>(Qt.en(r,s,e),[e.x,.3,e.z]);for(let r of Dt.cajas){let s=[t(r.d0,r.a0),t(r.d1,r.a0),t(r.d1,r.a1),t(r.d0,r.a1)];for(let o=0;o<4;o++)a.push(...s[o],...s[(o+1)%4])}for(let r of Dt.circulos)for(let s=0;s<8;s++){let o=s*Math.PI/4,l=o+Math.PI/4;a.push(r.x+Math.cos(o)*r.r,.3,r.z+Math.sin(o)*r.r,r.x+Math.cos(l)*r.r,.3,r.z+Math.sin(l)*r.r)}let n=new ut;n.setAttribute("position",new et(a,3));let i=new va(n,new Qn({color:16723285,depthTest:!1}));return i.renderOrder=9,i.visible=!1,la.add(i),i})();Yf();document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&!st.abierto&&We.E.fase!=="sala"&&st.pausa(Et,Su,We.E)});globalThis.__mundo={J:le,info:Mu,ajustes:Et,sonido:cc,colisiones:Qf,pendientes:er,ordenOpciones:Jl,red:sn,avatares:Kt,entrada:lc,via:Qt,barrio:Dt,trafico:Ms,obra:Zt,bots:lr,ui:st,terreno:Pn,carreteras:qa,pickup:nt,lugar:di,altura:ci,camara:hn,CARRIL:Gl,get sesion(){return We},get E(){return We.E}};yu();Kf();
