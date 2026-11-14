var Rh=0,sd=1,Ph=2;var es=1,Ih=2,Xi=3,Va=0,on=1,Un=2,da=0,Yi=1,od=2,ld=3,cd=4,Dh=5;var di=100,Lh=101,Nh=102,Fh=103,Uh=104,Oh=200,Bh=201,zh=202,Gh=203,dd=204,ud=205,Hh=206,kh=207,Vh=208,jh=209,qh=210,$h=211,Wh=212,Xh=213,Yh=214,ro=0,so=1,oo=2,Oi=3,lo=4,co=5,uo=6,ho=7,hd=0,Jh=1,Zh=2,Xn=0,pd=1,fd=2,md=3,ts=4,gd=5,bd=6,xd=7;var vd=300,ja=301,ui=302,Wo=303,Xo=304,ns=306,Bi=1e3,ia=1001,po=1002,qt=1003,Kh=1004;var as=1005;var Wt=1006,Yo=1007;var qa=1008;var mn=1009,_d=1010,yd=1011,Ji=1012,Jo=1013,Yn=1014,On=1015,Jn=1016,Zo=1017,Ko=1018,Zi=1020,Sd=35902,Md=35899,Ed=1021,Ad=1022,Bn=1023,ra=1026,$a=1027,Qo=1028,el=1029,Wa=1030,tl=1031;var nl=1033,is=33776,rs=33777,ss=33778,os=33779,al=35840,il=35841,rl=35842,sl=35843,ol=36196,ll=37492,cl=37496,dl=37488,ul=37489,ls=37490,hl=37491,pl=37808,fl=37809,ml=37810,gl=37811,bl=37812,xl=37813,vl=37814,_l=37815,yl=37816,Sl=37817,Ml=37818,El=37819,Al=37820,Tl=37821,wl=36492,Cl=36494,Rl=36495,Pl=36283,Il=36284,cs=36285,Dl=36286;var Cr=2300,fo=2301,ao=2302,Qc=2303,ed=2400,td=2401,nd=2402;var Qh=3200;var Ll=0,ep=1,Ea="",jt="srgb",Rr="srgb-linear",Pr="linear",yt="srgb";var io=7680;var tp=519,np=512,ap=513,ip=514,Nl=515,rp=516,sp=517,Fl=518,op=519,lp=35044;var Td="300 es",$n=2e3,zi=2001;function Ym(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Jm(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Ir(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function cp(){let a=Ir("canvas");return a.style.display="block",a}var Qu={},Gi=null;function wd(...a){let e="THREE."+a.shift();Gi?Gi("log",e,...a):console.log(e,...a)}function dp(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Je(...a){a=dp(a);let e="THREE."+a.shift();if(Gi)Gi("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function et(...a){a=dp(a);let e="THREE."+a.shift();if(Gi)Gi("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function oi(...a){let e=a.join(" ");e in Qu||(Qu[e]=!0,Je(...a))}function up(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var hp={[ro]:so,[oo]:uo,[lo]:ho,[Oi]:co,[so]:ro,[uo]:oo,[ho]:lo,[co]:Oi},sa=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tc=Math.PI/180,mo=180/Math.PI;function ds(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[a&255]+Zt[a>>8&255]+Zt[a>>16&255]+Zt[a>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function dt(a,e,t){return Math.max(e,Math.min(t,a))}function Zm(a,e){return(a%e+e)%e}function wc(a,e,t){return(1-t)*a+t*e}function xr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $e=class a{static{a.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oa=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],d=n[i+2],p=n[i+3],u=r[s+0],f=r[s+1],b=r[s+2],_=r[s+3];if(p!==_||l!==u||c!==f||d!==b){let m=l*u+c*f+d*b+p*_;m<0&&(u=-u,f=-f,b=-b,_=-_,m=-m);let h=1-o;if(m<.9995){let x=Math.acos(m),M=Math.sin(x);h=Math.sin(h*x)/M,o=Math.sin(o*x)/M,l=l*h+u*o,c=c*h+f*o,d=d*h+b*o,p=p*h+_*o}else{l=l*h+u*o,c=c*h+f*o,d=d*h+b*o,p=p*h+_*o;let x=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=x,c*=x,d*=x,p*=x}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,s){let o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],p=r[s],u=r[s+1],f=r[s+2],b=r[s+3];return e[t]=o*b+d*p+l*f-c*u,e[t+1]=l*b+d*u+c*p-o*f,e[t+2]=c*b+d*f+o*u-l*p,e[t+3]=d*b-o*p-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),p=o(r/2),u=l(n/2),f=l(i/2),b=l(r/2);switch(s){case"XYZ":this._x=u*d*p+c*f*b,this._y=c*f*p-u*d*b,this._z=c*d*b+u*f*p,this._w=c*d*p-u*f*b;break;case"YXZ":this._x=u*d*p+c*f*b,this._y=c*f*p-u*d*b,this._z=c*d*b-u*f*p,this._w=c*d*p+u*f*b;break;case"ZXY":this._x=u*d*p-c*f*b,this._y=c*f*p+u*d*b,this._z=c*d*b+u*f*p,this._w=c*d*p-u*f*b;break;case"ZYX":this._x=u*d*p-c*f*b,this._y=c*f*p+u*d*b,this._z=c*d*b-u*f*p,this._w=c*d*p+u*f*b;break;case"YZX":this._x=u*d*p+c*f*b,this._y=c*f*p+u*d*b,this._z=c*d*b-u*f*p,this._w=c*d*p-u*f*b;break;case"XZY":this._x=u*d*p-c*f*b,this._y=c*f*p-u*d*b,this._z=c*d*b+u*f*p,this._w=c*d*p+u*f*b;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+i*c-r*l,this._y=i*d+s*l+r*o-n*c,this._z=r*d+s*c+n*l-i*o,this._w=s*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class a{static{a.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*n),d=2*(o*t-r*i),p=2*(r*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-r*p,this.z=i+l*p+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cc=new O,eh=new oa,nt=class a{static{a.prototype.isMatrix3=!0}constructor(e,t,n,i,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c)}set(e,t,n,i,r,s,o,l,c){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],u=n[2],f=n[5],b=n[8],_=i[0],m=i[3],h=i[6],x=i[1],M=i[4],v=i[7],E=i[2],S=i[5],T=i[8];return r[0]=s*_+o*x+l*E,r[3]=s*m+o*M+l*S,r[6]=s*h+o*v+l*T,r[1]=c*_+d*x+p*E,r[4]=c*m+d*M+p*S,r[7]=c*h+d*v+p*T,r[2]=u*_+f*x+b*E,r[5]=u*m+f*M+b*S,r[8]=u*h+f*v+b*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*r*d+n*o*l+i*r*c-i*s*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*r,f=c*r-s*l,b=t*p+n*u+i*f;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/b;return e[0]=p*_,e[1]=(i*c-d*n)*_,e[2]=(o*n-i*s)*_,e[3]=u*_,e[4]=(d*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new nt,th=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Km(){let a={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===yt&&(i.r=_a(i.r),i.g=_a(i.g),i.b=_a(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===yt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ea?Pr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Rr]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),a}var ut=Km();function _a(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ui(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Si,go=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Ir("canvas")),Si.width=e.width,Si.height=e.height;let i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=_a(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_a(t[n]/255)*255):t[n]=_a(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qm=0,Hi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Pc(i[s].image)):r.push(Pc(i[s]))}else r=Pc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Pc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?go.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var e0=0,Ic=new O,sn=class a extends sa{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=ia,i=ia,r=Wt,s=qa,o=Bn,l=mn,c=a.DEFAULT_ANISOTROPY,d=Ea){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ds(),this.name="",this.source=new Hi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case ia:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case ia:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=vd;sn.DEFAULT_ANISOTROPY=1;var Pt=class a{static{a.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],f=l[5],b=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-_)<.01&&Math.abs(b-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+_)<.1&&Math.abs(b+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,E=(h+1)/2,S=(d+u)/4,T=(p+_)/4,g=(b+m)/4;return M>v&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=S/n,r=T/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=g/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=g/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-b)*(m-b)+(p-_)*(p-_)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-b)/x,this.y=(p-_)/x,this.z=(u-d)/x,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo=class extends sa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new sn(i),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Hi(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends bo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dr=class extends sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xo=class extends sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var St=class a{static{a.prototype.isMatrix4=!0}constructor(e,t,n,i,r,s,o,l,c,d,p,u,f,b,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c,d,p,u,f,b,_,m)}set(e,t,n,i,r,s,o,l,c,d,p,u,f,b,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=f,h[7]=b,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),s=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=s*d,f=s*p,b=o*d,_=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=f+b*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=b+f*c,t[10]=s*l}else if(e.order==="YXZ"){let u=l*d,f=l*p,b=c*d,_=c*p;t[0]=u+_*o,t[4]=b*o-f,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=f*o-b,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){let u=l*d,f=l*p,b=c*d,_=c*p;t[0]=u-_*o,t[4]=-s*p,t[8]=b+f*o,t[1]=f+b*o,t[5]=s*d,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let u=s*d,f=s*p,b=o*d,_=o*p;t[0]=l*d,t[4]=b*c-f,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=f*c-b,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let u=s*l,f=s*c,b=o*l,_=o*c;t[0]=l*d,t[4]=_-u*p,t[8]=b*p+f,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*p+b,t[10]=u-_*p}else if(e.order==="XZY"){let u=s*l,f=s*c,b=o*l,_=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=u*p+_,t[5]=s*d,t[9]=f*p-b,t[2]=b*p-f,t[6]=o*d,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,n){let i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Da.crossVectors(n,vn),Da.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Da.crossVectors(n,vn)),Da.normalize(),Fs.crossVectors(vn,Da),i[0]=Da.x,i[4]=Fs.x,i[8]=vn.x,i[1]=Da.y,i[5]=Fs.y,i[9]=vn.y,i[2]=Da.z,i[6]=Fs.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],u=n[9],f=n[13],b=n[2],_=n[6],m=n[10],h=n[14],x=n[3],M=n[7],v=n[11],E=n[15],S=i[0],T=i[4],g=i[8],A=i[12],C=i[1],I=i[5],N=i[9],D=i[13],R=i[2],U=i[6],F=i[10],H=i[14],$=i[3],W=i[7],te=i[11],le=i[15];return r[0]=s*S+o*C+l*R+c*$,r[4]=s*T+o*I+l*U+c*W,r[8]=s*g+o*N+l*F+c*te,r[12]=s*A+o*D+l*H+c*le,r[1]=d*S+p*C+u*R+f*$,r[5]=d*T+p*I+u*U+f*W,r[9]=d*g+p*N+u*F+f*te,r[13]=d*A+p*D+u*H+f*le,r[2]=b*S+_*C+m*R+h*$,r[6]=b*T+_*I+m*U+h*W,r[10]=b*g+_*N+m*F+h*te,r[14]=b*A+_*D+m*H+h*le,r[3]=x*S+M*C+v*R+E*$,r[7]=x*T+M*I+v*U+E*W,r[11]=x*g+M*N+v*F+E*te,r[15]=x*A+M*D+v*H+E*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],f=e[14],b=e[3],_=e[7],m=e[11],h=e[15],x=l*f-c*u,M=o*f-c*p,v=o*u-l*p,E=s*f-c*d,S=s*u-l*d,T=s*p-o*d;return t*(_*x-m*M+h*v)-n*(b*x-m*E+h*S)+i*(b*M-_*E+h*T)-r*(b*v-_*S+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-n*(r*d-o*l)+i*(r*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],f=e[11],b=e[12],_=e[13],m=e[14],h=e[15],x=t*o-n*s,M=t*l-i*s,v=t*c-r*s,E=n*l-i*o,S=n*c-r*o,T=i*c-r*l,g=d*_-p*b,A=d*m-u*b,C=d*h-f*b,I=p*m-u*_,N=p*h-f*_,D=u*h-f*m,R=x*D-M*N+v*I+E*C-S*A+T*g;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return e[0]=(o*D-l*N+c*I)*U,e[1]=(i*N-n*D-r*I)*U,e[2]=(_*T-m*S+h*E)*U,e[3]=(u*S-p*T-f*E)*U,e[4]=(l*C-s*D-c*A)*U,e[5]=(t*D-i*C+r*A)*U,e[6]=(m*v-b*T-h*M)*U,e[7]=(d*T-u*v+f*M)*U,e[8]=(s*N-o*C+c*g)*U,e[9]=(n*C-t*N-r*g)*U,e[10]=(b*S-_*v+h*x)*U,e[11]=(p*v-d*S-f*x)*U,e[12]=(o*A-s*I-l*g)*U,e[13]=(t*I-n*A+i*g)*U,e[14]=(_*M-b*E-m*x)*U,e[15]=(d*E-p*M+u*x)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*s,0,c*l-i*o,d*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,p=o+o,u=r*c,f=r*d,b=r*p,_=s*d,m=s*p,h=o*p,x=l*c,M=l*d,v=l*p,E=n.x,S=n.y,T=n.z;return i[0]=(1-(_+h))*E,i[1]=(f+v)*E,i[2]=(b-M)*E,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(u+h))*S,i[6]=(m+x)*S,i[7]=0,i[8]=(b+M)*T,i[9]=(m-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=Mi.set(i[0],i[1],i[2]).length(),o=Mi.set(i[4],i[5],i[6]).length(),l=Mi.set(i[8],i[9],i[10]).length();r<0&&(s=-s),kn.copy(this);let c=1/s,d=1/o,p=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=p,kn.elements[9]*=p,kn.elements[10]*=p,t.setFromRotationMatrix(kn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,s,o=$n,l=!1){let c=this.elements,d=2*r/(t-e),p=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),b,_;if(l)b=r/(s-r),_=s*r/(s-r);else if(o===$n)b=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===zi)b=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=b,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=$n,l=!1){let c=this.elements,d=2/(t-e),p=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),b,_;if(l)b=1/(s-r),_=s/(s-r);else if(o===$n)b=-2/(s-r),_=-(s+r)/(s-r);else if(o===zi)b=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=b,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mi=new O,kn=new St,t0=new O(0,0,0),n0=new O(1,1,1),Da=new O,Fs=new O,vn=new O,ah=new St,ih=new oa,ya=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],d=i[9],p=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ya.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a0=0,rh=new O,Ei=new oa,ma=new St,Us=new O,vr=new O,i0=new O,r0=new oa,sh=new O(1,0,0),oh=new O(0,1,0),lh=new O(0,0,1),ch={type:"added"},s0={type:"removed"},Ai={type:"childadded",child:null},Dc={type:"childremoved",child:null},bt=class a extends sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new O,t=new ya,n=new oa,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new nt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Us.copy(e):Us.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(vr,Us,this.up):ma.lookAt(Us,vr,this.up),this.quaternion.setFromRotationMatrix(ma),i&&(ma.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(ma),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),f=s(e.animations),b=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),b.length>0&&(n.nodes=b)}return n.object=i,n;function s(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new O(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ht=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},o0={type:"move"},ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),f=.02,b=.005;c.inputState.pinching&&u>f+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Lc(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Zm(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Lc(s,r,e+1/3),this.g=Lc(s,r,e),this.b=Lc(s,r,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ut.workingToColorSpace(Kt.copy(this),e),Math.round(dt(Kt.r*255,0,255))*65536+Math.round(dt(Kt.g*255,0,255))*256+Math.round(dt(Kt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,i=Kt.g,r=Kt.b,s=Math.max(n,i,r),o=Math.min(n,i,r),l,c,d=(o+s)/2;if(o===s)l=0,c=0;else{let p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=jt){ut.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,i=Kt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(La),this.setHSL(La.h+e,La.s+t,La.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(La),e.getHSL(Os);let n=wc(La.h,Os.h,t),i=wc(La.s,Os.s,t),r=wc(La.l,Os.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new ke;ke.NAMES=pp;var Nr=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fr=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new O,ga=new O,Nc=new O,ba=new O,Ti=new O,wi=new O,dh=new O,Fc=new O,Uc=new O,Oc=new O,Bc=new Pt,zc=new Pt,Gc=new Pt,Oa=class a{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vn.subVectors(e,t),i.cross(Vn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vn.subVectors(i,t),ga.subVectors(n,t),Nc.subVectors(e,t);let s=Vn.dot(Vn),o=Vn.dot(ga),l=Vn.dot(Nc),c=ga.dot(ga),d=ga.dot(Nc),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,f=(c*l-o*d)*u,b=(s*d-o*l)*u;return r.set(1-f-b,b,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,ba)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ba.x),l.addScaledVector(s,ba.y),l.addScaledVector(o,ba.z),l)}static getInterpolatedAttribute(e,t,n,i,r,s){return Bc.setScalar(0),zc.setScalar(0),Gc.setScalar(0),Bc.fromBufferAttribute(e,t),zc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Bc,r.x),s.addScaledVector(zc,r.y),s.addScaledVector(Gc,r.z),s}static isFrontFacing(e,t,n,i){return Vn.subVectors(n,t),ga.subVectors(e,t),Vn.cross(ga).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Vn.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,s,o;Ti.subVectors(i,n),wi.subVectors(r,n),Fc.subVectors(e,n);let l=Ti.dot(Fc),c=wi.dot(Fc);if(l<=0&&c<=0)return t.copy(n);Uc.subVectors(e,i);let d=Ti.dot(Uc),p=wi.dot(Uc);if(d>=0&&p<=d)return t.copy(i);let u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(Ti,s);Oc.subVectors(e,r);let f=Ti.dot(Oc),b=wi.dot(Oc);if(b>=0&&f<=b)return t.copy(r);let _=f*c-l*b;if(_<=0&&c>=0&&b<=0)return o=c/(c-b),t.copy(n).addScaledVector(wi,o);let m=d*b-f*p;if(m<=0&&p-d>=0&&f-b>=0)return dh.subVectors(r,i),o=(p-d)/(p-d+(f-b)),t.copy(i).addScaledVector(dh,o);let h=1/(m+_+u);return s=_*h,o=u*h,t.copy(n).addScaledVector(Ti,s).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},la=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,jn):jn.fromBufferAttribute(r,s),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),zs.subVectors(this.max,_r),Ci.subVectors(e.a,_r),Ri.subVectors(e.b,_r),Pi.subVectors(e.c,_r),Na.subVectors(Ri,Ci),Fa.subVectors(Pi,Ri),ai.subVectors(Ci,Pi);let t=[0,-Na.z,Na.y,0,-Fa.z,Fa.y,0,-ai.z,ai.y,Na.z,0,-Na.x,Fa.z,0,-Fa.x,ai.z,0,-ai.x,-Na.y,Na.x,0,-Fa.y,Fa.x,0,-ai.y,ai.x,0];return!Hc(t,Ci,Ri,Pi,zs)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Ci,Ri,Pi,zs))?!1:(Gs.crossVectors(Na,Fa),t=[Gs.x,Gs.y,Gs.z],Hc(t,Ci,Ri,Pi,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xa=[new O,new O,new O,new O,new O,new O,new O,new O],jn=new O,Bs=new la,Ci=new O,Ri=new O,Pi=new O,Na=new O,Fa=new O,ai=new O,_r=new O,zs=new O,Gs=new O,ii=new O;function Hc(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){ii.fromArray(a,r);let o=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=e.dot(ii),c=t.dot(ii),d=n.dot(ii);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var zt=new O,Hs=new $e,l0=0,gt=class extends sa{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lp,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ur=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},c0=new la,yr=new O,kc=new O,Sa=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):c0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(kc)),this.expandByPoint(yr.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},d0=0,Dn=new St,Vc=new bt,Ii=new O,_n=new la,Sr=new la,Vt=new O,pt=class a extends sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?Or:Ur)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(_n.min,Sr.min),_n.expandByPoint(Vt),Vt.addVectors(_n.max,Sr.max),_n.expandByPoint(Vt)):(_n.expandByPoint(Sr.min),_n.expandByPoint(Sr.max))}_n.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Vt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),Vt.add(Ii)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new O,l[g]=new O;let c=new O,d=new O,p=new O,u=new $e,f=new $e,b=new $e,_=new O,m=new O;function h(g,A,C){c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,A),p.fromBufferAttribute(n,C),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,A),b.fromBufferAttribute(r,C),d.sub(c),p.sub(c),f.sub(u),b.sub(u);let I=1/(f.x*b.y-b.x*f.y);isFinite(I)&&(_.copy(d).multiplyScalar(b.y).addScaledVector(p,-f.y).multiplyScalar(I),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-b.x).multiplyScalar(I),o[g].add(_),o[A].add(_),o[C].add(_),l[g].add(m),l[A].add(m),l[C].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let g=0,A=x.length;g<A;++g){let C=x[g],I=C.start,N=C.count;for(let D=I,R=I+N;D<R;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new O,v=new O,E=new O,S=new O;function T(g){E.fromBufferAttribute(i,g),S.copy(E);let A=o[g];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),v.crossVectors(S,A);let I=v.dot(l[g])<0?-1:1;s.setXYZW(g,M.x,M.y,M.z,I)}for(let g=0,A=x.length;g<A;++g){let C=x[g],I=C.start,N=C.count;for(let D=I,R=I+N;D<R;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new O,r=new O,s=new O,o=new O,l=new O,c=new O,d=new O,p=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){let b=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,b),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),d.subVectors(s,r),p.subVectors(i,r),d.cross(p),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,r),p.subVectors(i,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d),f=0,b=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let h=0;h<d;h++)u[b++]=c[f++]}return new gt(u,d,p)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){let u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let d=i[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],p=r[c];for(let u=0,f=p.length;u<f;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,d=s.length;c<d;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var jc=new O,u0=new O,h0=new nt,qn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=jc.subVectors(n,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||h0.getNormalMatrix(e),i=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},p0=0,Ma=class extends sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Yi,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=ud,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(t){let r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var va=new O,qc=new O,ks=new O,Vs=new O,Br=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=va.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,t),va.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qc.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Vs.copy(this.origin).sub(qc);let r=e.distanceTo(t)*.5,s=-this.direction.dot(ks),o=Vs.dot(this.direction),l=-Vs.dot(ks),c=Vs.lengthSq(),d=Math.abs(1-s*s),p,u,f,b;if(d>0)if(p=s*l-o,u=s*o-l,b=r*d,p>=0)if(u>=-b)if(u<=b){let _=1/d;p*=_,u*=_,f=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-b?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c):u<=b?(p=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(qc).addScaledVector(ks,u),f}intersectSphere(e,t){if(e.radius<0)return null;va.subVectors(e.center,this.origin);let n=va.dot(this.direction),i=va.dot(va)-n*n,r=e.radius*e.radius;if(i>r)return null;let s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,t,n,i,r){let s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=e.x-s.x,u=e.y-s.y,f=e.z-s.z,b=t.x-s.x,_=t.y-s.y,m=t.z-s.z,h=n.x-s.x,x=n.y-s.y,M=n.z-s.z,v=Math.abs(l),E=Math.abs(c),S=Math.abs(d),T,g,A,C,I,N,D,R,U,F,H,$;if(v>=E&&v>=S?(A=l,N=p,U=b,$=h,l>=0?(T=c,g=d,C=u,I=f,D=_,R=m,F=x,H=M):(T=d,g=c,C=f,I=u,D=m,R=_,F=M,H=x)):E>=S?(A=c,N=u,U=_,$=x,c>=0?(T=d,g=l,C=f,I=p,D=m,R=b,F=M,H=h):(T=l,g=d,C=p,I=f,D=b,R=m,F=h,H=M)):(A=d,N=f,U=m,$=M,d>=0?(T=l,g=c,C=p,I=u,D=b,R=_,F=h,H=x):(T=c,g=l,C=u,I=p,D=_,R=b,F=x,H=h)),A===0)return null;let W=T/A,te=g/A,le=1/A,Se=C-W*N,V=I-te*N,ce=D-W*U,be=R-te*U,Me=F-W*$,j=H-te*$,Q=Me*be-j*ce,ue=Se*j-V*Me,Ee=ce*V-be*Se;if(i){if(Q<0||ue<0||Ee<0)return null}else if((Q<0||ue<0||Ee<0)&&(Q>0||ue>0||Ee>0))return null;let J=Q+ue+Ee;if(J===0)return null;let B=le*(Q*N+ue*U+Ee*$);return(J>0?B<0:B>0)?null:this.at(B/J,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},uh=new St,ri=new Br,js=new Sa,hh=new O,qs=new O,$s=new O,Ws=new O,$c=new O,Xs=new O,ph=new O,Ys=new O,We=class extends bt{constructor(e=new pt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],p=r[l];d!==0&&($c.fromBufferAttribute(p,e),s?Xs.addScaledVector($c,d):Xs.addScaledVector($c.sub(t),d))}t.add(Xs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(js.containsPoint(ri.origin)===!1&&(ri.intersectSphere(js,hh)===null||ri.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(uh.copy(r).invert(),ri.copy(e.ray).applyMatrix4(uh),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let i,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let b=0,_=u.length;b<_;b++){let m=u[b],h=s[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=M;v<E;v+=3){let S=o.getX(v),T=o.getX(v+1),g=o.getX(v+2);i=Js(this,h,e,n,c,d,p,S,T,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let b=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=b,h=_;m<h;m+=3){let x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);i=Js(this,s,e,n,c,d,p,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let b=0,_=u.length;b<_;b++){let m=u[b],h=s[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=M;v<E;v+=3){let S=v,T=v+1,g=v+2;i=Js(this,h,e,n,c,d,p,S,T,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let b=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=b,h=_;m<h;m+=3){let x=m,M=m+1,v=m+2;i=Js(this,s,e,n,c,d,p,x,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function f0(a,e,t,n,i,r,s,o){let l;if(e.side===on?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===Va,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:a}}function Js(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,qs),a.getVertexPosition(l,$s),a.getVertexPosition(c,Ws);let d=f0(a,e,t,n,qs,$s,Ws,ph);if(d){let p=new O;Oa.getBarycoord(ph,qs,$s,Ws,p),i&&(d.uv=Oa.getInterpolatedAttribute(i,o,l,c,p,new $e)),r&&(d.uv1=Oa.getInterpolatedAttribute(r,o,l,c,p,new $e)),s&&(d.normal=Oa.getInterpolatedAttribute(s,o,l,c,p,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Oa.getNormal(qs,$s,Ws,u.normal),d.face=u,d.barycoord=p}return d}var zr=class extends sn{constructor(e=null,t=1,n=1,i,r,s,o,l,c=qt,d=qt,p,u){super(null,s,o,l,c,d,i,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vi=class extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Di=new St,fh=new St,Zs=[],mh=new la,m0=new St,Mr=new We,Er=new Sa,It=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new la),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),mh.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Er.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[s+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),fh.multiplyMatrices(n,Di),Mr.matrixWorld=fh,Mr.raycast(e,Zs);for(let s=0,o=Zs.length;s<o;s++){let l=Zs[s];l.instanceId=r,l.object=this,t.push(l)}Zs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zr(new Float32Array(i*this.count),i,this.count,Qo,On));let r=this.morphTexture.source.data.data,s=0;for(let c=0;c<n.length;c++)s+=n[c];let o=this.geometry.morphTargetsRelative?1:1-s,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},si=new Sa,g0=new $e(.5,.5),Ks=new O,ji=class{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,s=new qn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],u=r[6],f=r[7],b=r[8],_=r[9],m=r[10],h=r[11],x=r[12],M=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-s,f-d,h-b,E-x).normalize(),i[1].setComponents(c+s,f+d,h+b,E+x).normalize(),i[2].setComponents(c+o,f+p,h+_,E+M).normalize(),i[3].setComponents(c-o,f-p,h-_,E-M).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,h-m,E-v).normalize();else if(i[4].setComponents(c-l,f-u,h-m,E-v).normalize(),t===$n)i[5].setComponents(c+l,f+u,h+m,E+v).normalize();else if(t===zi)i[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){si.center.set(0,0,0);let t=g0.distanceTo(e.center);return si.radius=.7071067811865476+t,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ln=class extends Ma{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vo=new O,_o=new O,gh=new St,Ar=new Br,Qs=new Sa,Wc=new O,bh=new O,yo=class extends bt{constructor(e=new pt,t=new Ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)vo.fromBufferAttribute(t,i-1),_o.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vo.distanceTo(_o);e.setAttribute("lineDistance",new tt(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=r,e.ray.intersectsSphere(Qs)===!1)return;gh.copy(i).invert(),Ar.copy(e.ray).applyMatrix4(gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let f=Math.max(0,s.start),b=Math.min(d.count,s.start+s.count);for(let _=f,m=b-1;_<m;_+=c){let h=d.getX(_),x=d.getX(_+1),M=eo(this,e,Ar,l,h,x,_);M&&t.push(M)}if(this.isLineLoop){let _=d.getX(b-1),m=d.getX(f),h=eo(this,e,Ar,l,_,m,b-1);h&&t.push(h)}}else{let f=Math.max(0,s.start),b=Math.min(u.count,s.start+s.count);for(let _=f,m=b-1;_<m;_+=c){let h=eo(this,e,Ar,l,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){let _=eo(this,e,Ar,l,b-1,f,b-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function eo(a,e,t,n,i,r,s){let o=a.geometry.attributes.position;if(vo.fromBufferAttribute(o,i),_o.fromBufferAttribute(o,r),t.distanceSqToSegment(vo,_o,Wc,bh)>n)return;Wc.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(Wc);if(!(c<e.near||c>e.far))return{distance:c,point:bh.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}var xh=new O,vh=new O,Wn=class extends yo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)xh.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xh.distanceTo(vh);e.setAttribute("lineDistance",new tt(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gr=class extends sn{constructor(e=[],t=ja,n,i,r,s,o,l,c,d){super(e,t,n,i,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ba=class extends sn{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var za=class extends sn{constructor(e,t,n=Yn,i,r,s,o=qt,l=qt,c,d=ra,p=1){if(d!==ra&&d!==$a)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,i,r,s,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},So=class extends za{constructor(e,t=Yn,n=ja,i,r,s=qt,o=qt,l,c=ra){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,i,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hr=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ut=class a extends pt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],d=[],p=[],u=0,f=0;b("z","y","x",-1,-1,n,t,e,s,r,0),b("z","y","x",1,-1,n,t,-e,s,r,1),b("x","z","y",1,1,e,n,t,i,s,2),b("x","z","y",1,-1,e,n,-t,i,s,3),b("x","y","z",1,-1,e,t,n,i,r,4),b("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function b(_,m,h,x,M,v,E,S,T,g,A){let C=v/T,I=E/g,N=v/2,D=E/2,R=S/2,U=T+1,F=g+1,H=0,$=0,W=new O;for(let te=0;te<F;te++){let le=te*I-D;for(let Se=0;Se<U;Se++){let V=Se*C-N;W[_]=V*x,W[m]=le*M,W[h]=R,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[h]=S>0?1:-1,d.push(W.x,W.y,W.z),p.push(Se/T),p.push(1-te/g),H+=1}}for(let te=0;te<g;te++)for(let le=0;le<T;le++){let Se=u+le+U*te,V=u+le+U*(te+1),ce=u+(le+1)+U*(te+1),be=u+(le+1)+U*te;l.push(Se,V,be),l.push(V,ce,be),$+=6}o.addGroup(f,$,A),f+=$,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},qi=class a extends pt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],o=[],l=[],c=[],d=t/2,p=Math.PI/2*e,u=t,f=2*p+u,b=n*2+r,_=i+1,m=new O,h=new O;for(let x=0;x<=b;x++){let M=0,v=0,E=0,S=0;if(x<=n){let A=x/n,C=A*Math.PI/2;v=-d-e*Math.cos(C),E=e*Math.sin(C),S=-e*Math.cos(C),M=A*p}else if(x<=n+r){let A=(x-n)/r;v=-d+A*t,E=e,S=0,M=p+A*u}else{let A=(x-n-r)/n,C=A*Math.PI/2;v=d+e*Math.sin(C),E=e*Math.cos(C),S=e*Math.sin(C),M=p+u+A*p}let T=Math.max(0,Math.min(1,M/f)),g=0;x===0?g=.5/i:x===b&&(g=-.5/i);for(let A=0;A<=i;A++){let C=A/i,I=C*Math.PI*2,N=Math.sin(I),D=Math.cos(I);h.x=-E*D,h.y=v,h.z=E*N,o.push(h.x,h.y,h.z),m.set(-E*D,S,E*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+g,T)}if(x>0){let A=(x-1)*_;for(let C=0;C<i;C++){let I=A+C,N=A+C+1,D=x*_+C,R=x*_+C+1;s.push(I,N,D),s.push(N,R,D)}}}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},kr=class a extends pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],s=[],o=[],l=[],c=new O,d=new $e;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let f=n+p/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(s[u]/e+1)/2,d.y=(s[u+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xt=class a extends pt{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let d=[],p=[],u=[],f=[],b=0,_=[],m=n/2,h=0;x(),s===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function x(){let v=new O,E=new O,S=0,T=(t-e)/n;for(let g=0;g<=r;g++){let A=[],C=g/r,I=C*(t-e)+e;for(let N=0;N<=i;N++){let D=N/i,R=D*l+o,U=Math.sin(R),F=Math.cos(R);E.x=I*U,E.y=-C*n+m,E.z=I*F,p.push(E.x,E.y,E.z),v.set(U,T,F).normalize(),u.push(v.x,v.y,v.z),f.push(D,1-C),A.push(b++)}_.push(A)}for(let g=0;g<i;g++)for(let A=0;A<r;A++){let C=_[A][g],I=_[A+1][g],N=_[A+1][g+1],D=_[A][g+1];(e>0||A!==0)&&(d.push(C,I,D),S+=3),(t>0||A!==r-1)&&(d.push(I,N,D),S+=3)}c.addGroup(h,S,0),h+=S}function M(v){let E=b,S=new $e,T=new O,g=0,A=v===!0?e:t,C=v===!0?1:-1;for(let N=1;N<=i;N++)p.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),b++;let I=b;for(let N=0;N<=i;N++){let R=N/i*l+o,U=Math.cos(R),F=Math.sin(R);T.x=A*F,T.y=m*C,T.z=A*U,p.push(T.x,T.y,T.z),u.push(0,C,0),S.x=U*.5+.5,S.y=F*.5*C+.5,f.push(S.x,S.y),b++}for(let N=0;N<i;N++){let D=E+N,R=I+N;v===!0?d.push(R,R+1,D):d.push(R+1,R,D),g+=3}c.addGroup(h,g,v===!0?1:2),h+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vr=class a extends Xt{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mo=class a extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],s=[];o(i),c(n),d(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let M=new O,v=new O,E=new O;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],v),f(t[S+2],E),l(M,v,E,x)}function l(x,M,v,E){let S=E+1,T=[];for(let g=0;g<=S;g++){T[g]=[];let A=x.clone().lerp(v,g/S),C=M.clone().lerp(v,g/S),I=S-g;for(let N=0;N<=I;N++)N===0&&g===S?T[g][N]=A:T[g][N]=A.clone().lerp(C,N/I)}for(let g=0;g<S;g++)for(let A=0;A<2*(S-g)-1;A++){let C=Math.floor(A/2);A%2===0?(u(T[g][C+1]),u(T[g+1][C]),u(T[g][C])):(u(T[g][C+1]),u(T[g+1][C+1]),u(T[g+1][C]))}}function c(x){let M=new O;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function d(){let x=new O;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let v=m(x)/2/Math.PI+.5,E=h(x)/Math.PI+.5;s.push(v,1-E)}b(),p()}function p(){for(let x=0;x<s.length;x+=6){let M=s[x+0],v=s[x+2],E=s[x+4],S=Math.max(M,v,E),T=Math.min(M,v,E);S>.9&&T<.1&&(M<.2&&(s[x+0]+=1),v<.2&&(s[x+2]+=1),E<.2&&(s[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,M){let v=x*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function b(){let x=new O,M=new O,v=new O,E=new O,S=new $e,T=new $e,g=new $e;for(let A=0,C=0;A<r.length;A+=9,C+=6){x.set(r[A+0],r[A+1],r[A+2]),M.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),S.set(s[C+0],s[C+1]),T.set(s[C+2],s[C+3]),g.set(s[C+4],s[C+5]),E.copy(x).add(M).add(v).divideScalar(3);let I=m(E);_(S,C+0,x,I),_(T,C+2,M,I),_(g,C+4,v,I)}}function _(x,M,v,E){E<0&&x.x===1&&(s[M]=x.x-1),v.x===0&&v.z===0&&(s[M]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);let d=n[i],u=n[i+1]-d,f=(s-d)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),l=t||(s.isVector2?new $e:new O);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,i=[],r=[],s=[],o=new O,l=new St;for(let f=0;f<=e;f++){let b=f/e;i[f]=this.getTangentAt(b,new O)}r[0]=new O,s[0]=new O;let c=Number.MAX_VALUE,d=Math.abs(i[0].x),p=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let b=Math.acos(dt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,b))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(dt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let b=1;b<=e;b++)r[b].applyMatrix4(l.makeRotationAxis(i[b],f*b)),s[b].crossVectors(i[b],r[b])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},jr=class extends Nn{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new $e){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*d-f*p+this.aX,c=u*p+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Eo=class extends jr{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Cd(){let a=0,e=0,t=0,n=0;function i(r,s,o,l){a=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){i(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,p){let u=(s-r)/c-(o-r)/(c+d)+(o-s)/d,f=(o-s)/d-(l-s)/(d+p)+(l-o)/p;u*=d,f*=d,i(s,o,u,f)},calc:function(r){let s=r*r,o=s*r;return a+e*r+t*s+n*o}}}var _h=new O,yh=new O,Xc=new Cd,Yc=new Cd,Jc=new Cd,$i=class extends Nn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){let n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=i[(o-1)%r]:(yh.subVectors(i[0],i[1]).add(i[0]),c=yh);let p=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?d=i[(o+2)%r]:(_h.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=_h),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,b=Math.pow(c.distanceToSquared(p),f),_=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);_<1e-4&&(_=1),b<1e-4&&(b=_),m<1e-4&&(m=_),Xc.initNonuniformCatmullRom(c.x,p.x,u.x,d.x,b,_,m),Yc.initNonuniformCatmullRom(c.y,p.y,u.y,d.y,b,_,m),Jc.initNonuniformCatmullRom(c.z,p.z,u.z,d.z,b,_,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(c.x,p.x,u.x,d.x,this.tension),Yc.initCatmullRom(c.y,p.y,u.y,d.y,this.tension),Jc.initCatmullRom(c.z,p.z,u.z,d.z,this.tension));return n.set(Xc.calc(l),Yc.calc(l),Jc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sh(a,e,t,n,i){let r=(n-e)*.5,s=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*a+t}function b0(a,e){let t=1-a;return t*t*e}function x0(a,e){return 2*(1-a)*a*e}function v0(a,e){return a*a*e}function Tr(a,e,t,n){return b0(a,e)+x0(a,t)+v0(a,n)}function _0(a,e){let t=1-a;return t*t*t*e}function y0(a,e){let t=1-a;return 3*t*t*a*e}function S0(a,e){return 3*(1-a)*a*a*e}function M0(a,e){return a*a*a*e}function wr(a,e,t,n,i){return _0(a,e)+y0(a,t)+S0(a,n)+M0(a,i)}var Ao=class extends Nn{constructor(e=new $e,t=new $e,n=new $e,i=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $e){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(wr(e,i.x,r.x,s.x,o.x),wr(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},To=class extends Nn{constructor(e=new O,t=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new O){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(wr(e,i.x,r.x,s.x,o.x),wr(e,i.y,r.y,s.y,o.y),wr(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wo=class extends Nn{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends Nn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends Nn{constructor(e=new $e,t=new $e,n=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $e){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Tr(e,i.x,r.x,s.x),Tr(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends Nn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Tr(e,i.x,r.x,s.x),Tr(e,i.y,r.y,s.y),Tr(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){let n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],c=i[s],d=i[s>i.length-2?i.length-1:s+1],p=i[s>i.length-3?i.length-1:s+2];return n.set(Sh(o,l.x,c.x,d.x,p.x),Sh(o,l.y,c.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new $e().fromArray(i))}return this}},E0=Object.freeze({__proto__:null,ArcCurve:Eo,CatmullRomCurve3:$i,CubicBezierCurve:Ao,CubicBezierCurve3:To,EllipseCurve:jr,LineCurve:wo,LineCurve3:Co,QuadraticBezierCurve:Ro,QuadraticBezierCurve3:qr,SplineCurve:Po});var li=class a extends Mo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}};var ci=class a extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,p=e/o,u=t/l,f=[],b=[],_=[],m=[];for(let h=0;h<d;h++){let x=h*u-s;for(let M=0;M<c;M++){let v=M*p-r;b.push(v,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){let M=x+c*h,v=x+c*(h+1),E=x+1+c*(h+1),S=x+1+c*h;f.push(M,v,S),f.push(v,E,S)}this.setIndex(f),this.setAttribute("position",new tt(b,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},$r=class a extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],d=[],p=e,u=(t-e)/i,f=new O,b=new $e;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let h=r+m/n*s;f.x=p*Math.cos(h),f.y=p*Math.sin(h),l.push(f.x,f.y,f.z),c.push(0,0,1),b.x=(f.x/t+1)/2,b.y=(f.y/t+1)/2,d.push(b.x,b.y)}p+=u}for(let _=0;_<i;_++){let m=_*(n+1);for(let h=0;h<n;h++){let x=h+m,M=x,v=x+n+1,E=x+n+2,S=x+1;o.push(M,v,S),o.push(v,E,S)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ca=class a extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+o,Math.PI),c=0,d=[],p=new O,u=new O,f=[],b=[],_=[],m=[];for(let h=0;h<=n;h++){let x=[],M=h/n,v=s+M*o,E=e*Math.cos(v),S=Math.sqrt(e*e-E*E),T=0;h===0&&s===0?T=.5/t:h===n&&l===Math.PI&&(T=-.5/t);for(let g=0;g<=t;g++){let A=g/t,C=i+A*r;p.x=-S*Math.cos(C),p.y=E,p.z=S*Math.sin(C),b.push(p.x,p.y,p.z),u.copy(p).normalize(),_.push(u.x,u.y,u.z),m.push(A+T,1-M),x.push(c++)}d.push(x)}for(let h=0;h<n;h++)for(let x=0;x<t;x++){let M=d[h][x+1],v=d[h][x],E=d[h+1][x],S=d[h+1][x+1];(h!==0||s>0)&&f.push(M,v,S),(h!==n-1||l<Math.PI)&&f.push(v,E,S)}this.setIndex(f),this.setAttribute("position",new tt(b,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fn=class a extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:s,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],d=[],p=[],u=new O,f=new O,b=new O;for(let _=0;_<=n;_++){let m=s+_/n*o;for(let h=0;h<=i;h++){let x=h/i*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),b.subVectors(f,u).normalize(),d.push(b.x,b.y,b.z),p.push(h/i),p.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let h=(i+1)*_+m-1,x=(i+1)*(_-1)+m-1,M=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(h,x,v),l.push(x,M,v)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Wr=class a extends pt{constructor(e=new qr(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new O,l=new O,c=new $e,d=new O,p=[],u=[],f=[],b=[];_(),this.setIndex(b),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function _(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),x(),h()}function m(M){d=e.getPointAt(M/t,d);let v=s.normals[M],E=s.binormals[M];for(let S=0;S<=i;S++){let T=S/i*Math.PI*2,g=Math.sin(T),A=-Math.cos(T);l.x=A*v.x+g*E.x,l.y=A*v.y+g*E.y,l.z=A*v.z+g*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,p.push(o.x,o.y,o.z)}}function h(){for(let M=1;M<=t;M++)for(let v=1;v<=i;v++){let E=(i+1)*(M-1)+(v-1),S=(i+1)*M+(v-1),T=(i+1)*M+v,g=(i+1)*(M-1)+v;b.push(E,S,g),b.push(S,T,g)}}function x(){for(let M=0;M<=t;M++)for(let v=0;v<=i;v++)c.x=M/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new a(new E0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function hi(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(Mh(i))i.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Mh(i[0])){let r=[];for(let s=0,o=i.length;s<o;s++)r[s]=i[s].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function en(a){let e={};for(let t=0;t<a.length;t++){let n=hi(a[t]);for(let i in n)e[i]=n[i]}return e}function Mh(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function A0(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Rd(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var fp={clone:hi,merge:en},T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=A0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new nt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new St().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Io=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},st=class extends Ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Do=class extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lo=class extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Li(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Zc(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}var Ga=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{a:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break a;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},No=class extends Ga{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ed,endingEnd:ed}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case td:r=e,o=2*t-n;break;case nd:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case td:s=e,l=2*n-t;break;case nd:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,b=(n-t)/(i-t),_=b*b,m=_*b,h=-u*m+2*u*_-u*b,x=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*b+1,M=(-1-f)*m+(1.5+f)*_+.5*b,v=f*m-f*_;for(let E=0;E!==o;++E)r[E]=h*s[d+E]+x*s[c+E]+M*s[l+E]+v*s[p+E];return r}},Fo=class extends Ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),p=1-d;for(let u=0;u!==o;++u)r[u]=s[c+u]*p+s[l+u]*d;return r}},Uo=class extends Ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends Ga{interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let b=(n-t)/(i-t),_=1-b;for(let m=0;m!==o;++m)r[m]=s[c+m]*_+s[l+m]*b;return r}let u=o*2,f=e-1;for(let b=0;b!==o;++b){let _=s[c+b],m=s[l+b],h=f*u+b*2,x=p[h],M=p[h+1],v=e*u+b*2,E=d[v],S=d[v+1],T=R0(n,t,x,E,i);r[b]=mp(T,_,M,S,m)}return r}};function mp(a,e,t,n,i){let r=1-a;return r*r*r*e+3*r*r*a*t+3*r*a*a*n+a*a*a*i}function C0(a,e,t,n,i){let r=1-a;return 3*r*r*(t-e)+6*r*a*(n-t)+3*a*a*(i-n)}function R0(a,e,t,n,i){let r=(a-e)/(i-e);for(let s=0;s<8;s++){let o=mp(r,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let l=C0(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Li(t,this.TimeBufferType),this.values=Li(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Li(e.times,Array),values:Li(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Zc(e.settings)&&(n.settings={inTangents:Li(e.settings.inTangents,Array),outTangents:Li(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cr:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case ao:t=this.InterpolantFactoryMethodSmooth;break;case Qc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Zc(this.settings)&&(Eh(this.settings.inTangents,e),Eh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){et("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&Jm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ao,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{let p=o*n,u=p-n,f=p+n;for(let b=0;b!==n;++b){let _=t[p+b];if(_!==t[u+b]||_!==t[f+b]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let p=o*n,u=s*n;for(let f=0;f!==n;++f)t[u+f]=t[p+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Zc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Eh(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=fo;var Ha=class extends Mn{constructor(e,t,n){super(e,t,n)}};Ha.prototype.ValueTypeName="bool";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=Cr;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Mn{constructor(e,t,n,i){super(e,t,n,i)}};Bo.prototype.ValueTypeName="color";var zo=class extends Mn{constructor(e,t,n,i){super(e,t,n,i)}};zo.prototype.ValueTypeName="number";var Go=class extends Ga{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let d=c+o;c!==d;c+=4)oa.slerpFlat(r,0,s,c-o,s,c,l);return r}},Xr=class extends Mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Mn{constructor(e,t,n){super(e,t,n)}};ka.prototype.ValueTypeName="string";ka.prototype.ValueBufferType=Array;ka.prototype.DefaultInterpolation=Cr;ka.prototype.InterpolantFactoryMethodLinear=void 0;ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends Mn{constructor(e,t,n,i){super(e,t,n,i)}};Ho.prototype.ValueTypeName="vector";var ko=class{constructor(e,t,n){let i=this,r=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,i.onProgress!==void 0&&i.onProgress(d,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){let p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],b=c[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gp=new ko,Vo=class{constructor(e){this.manager=e!==void 0?e:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jr=class extends Yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Kc=new St,Ah=new O,Th=new O,jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ah),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Kc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===zi||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},to=new O,no=new oa,aa=new O,Zr=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(to,no,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,aa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(to,no,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ua=new O,wh=new $e,Ch=new $e,Qt=class extends Zr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Ch),t.subVectors(Ch,wh)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wi=class extends Zr{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ad=class extends jo{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new ad}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ni=-90,Fi=1,qo=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qt(Ni,Fi,e,t);i.layers=this.layers,this.add(i);let r=new Qt(Ni,Fi,e,t);r.layers=this.layers,this.add(r);let s=new Qt(Ni,Fi,e,t);s.layers=this.layers,this.add(s);let o=new Qt(Ni,Fi,e,t);o.layers=this.layers,this.add(o);let l=new Qt(Ni,Fi,e,t);l.layers=this.layers,this.add(l);let c=new Qt(Ni,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,f),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},$o=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Pd="\\[\\]\\.:\\/",P0=new RegExp("["+Pd+"]","g"),Id="[^"+Pd+"]",I0="[^"+Pd.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",Id),L0=/(WCOD+)?/.source.replace("WCOD",I0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Id),F0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Id),U0=new RegExp("^"+D0+L0+N0+F0+"$"),O0=["material","materials","bones","map"],id=class{constructor(e,t,n){let i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(P0,"")}static parseTrackName(e){let t=U0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);O0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[i];if(s===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=id;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ky=new Float32Array(1);var Qr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var rd=class a{static{a.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Dd(a,e,t,n){let i=B0(n);switch(t){case Ed:return a*e;case Qo:return a*e/i.components*i.byteLength;case el:return a*e/i.components*i.byteLength;case Wa:return a*e*2/i.components*i.byteLength;case tl:return a*e*2/i.components*i.byteLength;case Ad:return a*e*3/i.components*i.byteLength;case Bn:return a*e*4/i.components*i.byteLength;case nl:return a*e*4/i.components*i.byteLength;case is:case rs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ss:case os:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case il:case sl:return Math.max(a,16)*Math.max(e,8)/4;case al:case rl:return Math.max(a,8)*Math.max(e,8)/2;case ol:case ll:case dl:case ul:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case cl:case ls:case hl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case wl:case Cl:case Rl:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Pl:case Il:return Math.ceil(a/4)*Math.ceil(e/4)*8;case cs:case Dl:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B0(a){switch(a){case mn:case _d:return{byteLength:1,components:1};case Ji:case yd:case Jn:return{byteLength:2,components:1};case Zo:case Ko:return{byteLength:2,components:4};case Yn:case Jo:case On:return{byteLength:4,components:1};case Sd:case Md:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Bp(){let a=null,e=!1,t=null,n=null;function i(r,s){n=a.requestAnimationFrame(i),t(r,s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function q0(a){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,p=c.byteLength,u=a.createBuffer();a.bindBuffer(l,u),a.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let d=l.array,p=l.updateRanges;if(a.bindBuffer(c,o),p.length===0)a.bufferSubData(c,0,d);else{p.sort((f,b)=>f.start-b.start);let u=0;for(let f=1;f<p.length;f++){let b=p[u],_=p[f];_.start<=b.start+b.count+1?b.count=Math.max(b.count,_.start+_.count-b.start):(++u,p[u]=_)}p.length=u+1;for(let f=0,b=p.length;f<b;f++){let _=p[f];a.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:s}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
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
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
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
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
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
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mg=`#define PI 3.141592653589793
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
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
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
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,jg=`uniform sampler2D dfgLUT;
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
}`,qg=`
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nb=`#if defined( USE_POINTS_UV )
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
#endif`,ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
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
#endif`,cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
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
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ib=`float getShadowMask() {
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
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,Ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gb=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
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
}`,Qb=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,rx=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,dx=`#define MATCAP
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
}`,ux=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,fx=`#define PHONG
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
}`,mx=`#define PHONG
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
}`,gx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,xx=`#define TOON
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
}`,vx=`#define TOON
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
}`,_x=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:$0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:Y0,alphatest_fragment:J0,alphatest_pars_fragment:Z0,aomap_fragment:K0,aomap_pars_fragment:Q0,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ag,bsdfs:ig,iridescence_fragment:rg,bumpmap_pars_fragment:sg,clipping_planes_fragment:og,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:dg,color_fragment:ug,color_pars_fragment:hg,color_pars_vertex:pg,color_vertex:fg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:bg,displacementmap_pars_vertex:xg,displacementmap_vertex:vg,emissivemap_fragment:_g,emissivemap_pars_fragment:yg,colorspace_fragment:Sg,colorspace_pars_fragment:Mg,envmap_fragment:Eg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:Tg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Bg,envmap_vertex:Cg,fog_vertex:Rg,fog_pars_vertex:Pg,fog_fragment:Ig,fog_pars_fragment:Dg,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Fg,lights_lambert_pars_fragment:Ug,lights_pars_begin:Og,lights_toon_fragment:zg,lights_toon_pars_fragment:Gg,lights_phong_fragment:Hg,lights_phong_pars_fragment:kg,lights_physical_fragment:Vg,lights_physical_pars_fragment:jg,lights_fragment_begin:qg,lights_fragment_maps:$g,lights_fragment_end:Wg,lightprobes_pars_fragment:Xg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Kg,map_fragment:Qg,map_pars_fragment:eb,map_particle_fragment:tb,map_particle_pars_fragment:nb,metalnessmap_fragment:ab,metalnessmap_pars_fragment:ib,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ob,morphtarget_pars_vertex:lb,morphtarget_vertex:cb,normal_fragment_begin:db,normal_fragment_maps:ub,normal_pars_fragment:hb,normal_pars_vertex:pb,normal_vertex:fb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:xb,iridescence_pars_fragment:vb,opaque_fragment:_b,packing:yb,premultiplied_alpha_fragment:Sb,project_vertex:Mb,dithering_fragment:Eb,dithering_pars_fragment:Ab,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Cb,shadowmap_pars_vertex:Rb,shadowmap_vertex:Pb,shadowmask_pars_fragment:Ib,skinbase_vertex:Db,skinning_pars_vertex:Lb,skinning_vertex:Nb,skinnormal_vertex:Fb,specularmap_fragment:Ub,specularmap_pars_fragment:Ob,tonemapping_fragment:Bb,tonemapping_pars_fragment:zb,transmission_fragment:Gb,transmission_pars_fragment:Hb,uv_pars_fragment:kb,uv_pars_vertex:Vb,uv_vertex:jb,worldpos_vertex:qb,background_vert:$b,background_frag:Wb,backgroundCube_vert:Xb,backgroundCube_frag:Yb,cube_vert:Jb,cube_frag:Zb,depth_vert:Kb,depth_frag:Qb,distance_vert:ex,distance_frag:tx,equirect_vert:nx,equirect_frag:ax,linedashed_vert:ix,linedashed_frag:rx,meshbasic_vert:sx,meshbasic_frag:ox,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:dx,meshmatcap_frag:ux,meshnormal_vert:hx,meshnormal_frag:px,meshphong_vert:fx,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:bx,meshtoon_vert:xx,meshtoon_frag:vx,points_vert:_x,points_frag:yx,shadow_vert:Sx,shadow_frag:Mx,sprite_vert:Ex,sprite_frag:Ax},De={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ha={basic:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:en([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:en([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:en([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ke(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:en([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:en([De.points,De.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:en([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:en([De.common,De.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:en([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:en([De.sprite,De.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:en([De.common,De.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:en([De.lights,De.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ha.physical={uniforms:en([ha.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Ul={r:0,b:0,g:0},Tx=new St,zp=new nt;zp.set(-1,0,0,0,1,0,0,0,1);function wx(a,e,t,n,i,r){let s=new ke(0),o=i===!0?0:1,l,c,d=null,p=0,u=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let v=x.backgroundBlurriness>0;M=e.get(M,v)}return M}function b(x){let M=!1,v=f(x);v===null?m(s,o):v&&v.isColor&&(m(v,1),M=!0);let E=a.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(a.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(x,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===ns)?(c===void 0&&(c=new We(new Ut(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:hi(ha.backgroundCube.uniforms),vertexShader:ha.backgroundCube.vertexShader,fragmentShader:ha.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zp),c.material.toneMapped=ut.getTransfer(v.colorSpace)!==yt,(d!==v||p!==v.version||u!==a.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,u=a.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new We(new ci(2,2),new Sn({name:"BackgroundMaterial",uniforms:hi(ha.background.uniforms),vertexShader:ha.background.vertexShader,fragmentShader:ha.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,u=a.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(Ul,Rd(a)),t.buffers.color.setClear(Ul.r,Ul.g,Ul.b,M,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,M=1){s.set(x),o=M,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(s,o)},render:b,addToRenderList:_,dispose:h}}function Cx(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,s=!1;function o(I,N,D,R,U){let F=!1,H=p(I,R,D,N);r!==H&&(r=H,c(r.object)),F=f(I,R,D,U),F&&b(I,R,D,U),U!==null&&e.update(U,a.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,v(I,N,D,R),U!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return a.createVertexArray()}function c(I){return a.bindVertexArray(I)}function d(I){return a.deleteVertexArray(I)}function p(I,N,D,R){let U=R.wireframe===!0,F=n[N.id];F===void 0&&(F={},n[N.id]=F);let H=I.isInstancedMesh===!0?I.id:0,$=F[H];$===void 0&&($={},F[H]=$);let W=$[D.id];W===void 0&&(W={},$[D.id]=W);let te=W[U];return te===void 0&&(te=u(l()),W[U]=te),te}function u(I){let N=[],D=[],R=[];for(let U=0;U<t;U++)N[U]=0,D[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:R,object:I,attributes:{},index:null}}function f(I,N,D,R){let U=r.attributes,F=N.attributes,H=0,$=D.getAttributes();for(let W in $)if($[W].location>=0){let le=U[W],Se=F[W];if(Se===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),le===void 0||le.attribute!==Se||Se&&le.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function b(I,N,D,R){let U={},F=N.attributes,H=0,$=D.getAttributes();for(let W in $)if($[W].location>=0){let le=F[W];le===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(le=I.instanceColor));let Se={};Se.attribute=le,le&&le.data&&(Se.data=le.data),U[W]=Se,H++}r.attributes=U,r.attributesNum=H,r.index=R}function _(){let I=r.newAttributes;for(let N=0,D=I.length;N<D;N++)I[N]=0}function m(I){h(I,0)}function h(I,N){let D=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;D[I]=1,R[I]===0&&(a.enableVertexAttribArray(I),R[I]=1),U[I]!==N&&(a.vertexAttribDivisor(I,N),U[I]=N)}function x(){let I=r.newAttributes,N=r.enabledAttributes;for(let D=0,R=N.length;D<R;D++)N[D]!==I[D]&&(a.disableVertexAttribArray(D),N[D]=0)}function M(I,N,D,R,U,F,H){H===!0?a.vertexAttribIPointer(I,N,D,U,F):a.vertexAttribPointer(I,N,D,R,U,F)}function v(I,N,D,R){_();let U=R.attributes,F=D.getAttributes(),H=N.defaultAttributeValues;for(let $ in F){let W=F[$];if(W.location>=0){let te=U[$];if(te===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){let le=te.normalized,Se=te.itemSize,V=e.get(te);if(V===void 0)continue;let ce=V.buffer,be=V.type,Me=V.bytesPerElement,j=be===a.INT||be===a.UNSIGNED_INT||te.gpuType===Jo;if(te.isInterleavedBufferAttribute){let Q=te.data,ue=Q.stride,Ee=te.offset;if(Q.isInstancedInterleavedBuffer){for(let J=0;J<W.locationSize;J++)h(W.location+J,Q.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);a.bindBuffer(a.ARRAY_BUFFER,ce);for(let J=0;J<W.locationSize;J++)M(W.location+J,Se/W.locationSize,be,le,ue*Me,(Ee+Se/W.locationSize*J)*Me,j)}else{if(te.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)h(W.location+Q,te.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Q=0;Q<W.locationSize;Q++)m(W.location+Q);a.bindBuffer(a.ARRAY_BUFFER,ce);for(let Q=0;Q<W.locationSize;Q++)M(W.location+Q,Se/W.locationSize,be,le,Se*Me,Se/W.locationSize*Q*Me,j)}}else if(H!==void 0){let le=H[$];if(le!==void 0)switch(le.length){case 2:a.vertexAttrib2fv(W.location,le);break;case 3:a.vertexAttrib3fv(W.location,le);break;case 4:a.vertexAttrib4fv(W.location,le);break;default:a.vertexAttrib1fv(W.location,le)}}}}x()}function E(){A();for(let I in n){let N=n[I];for(let D in N){let R=N[D];for(let U in R){let F=R[U];for(let H in F)d(F[H].object),delete F[H];delete R[U]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let D in N){let R=N[D];for(let U in R){let F=R[U];for(let H in F)d(F[H].object),delete F[H];delete R[U]}}delete n[I.id]}function T(I){for(let N in n){let D=n[N];for(let R in D){let U=D[R];if(U[I.id]===void 0)continue;let F=U[I.id];for(let H in F)d(F[H].object),delete F[H];delete U[I.id]}}}function g(I){for(let N in n){let D=n[N],R=I.isInstancedMesh===!0?I.id:0,U=D[R];if(U!==void 0){for(let F in U){let H=U[F];for(let $ in H)d(H[$].object),delete H[$];delete U[F]}delete D[R],Object.keys(D).length===0&&delete n[N]}}}function A(){C(),s=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Rx(a,e,t){let n;function i(l){n=l}function r(l,c){a.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,d){d!==0&&(a.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Px(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){return!(T!==Bn&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let g=T===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==mn&&T!==On&&!g&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Je("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),h=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=a.getParameter(a.MAX_SAMPLES),S=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:b,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:E,samples:S}}function Ix(a){let e=this,t=null,n=0,i=!1,r=!1,s=new qn,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||n!==0||i;return i=u,n=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,f){let b=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,h=a.get(p);if(!i||b===null||b.length===0||r&&!m)r?d(null):c();else{let x=r?0:n,M=x*4,v=h.clippingState||null;l.value=v,v=d(b,u,M,f);for(let E=0;E!==M;++E)v[E]=t[E];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,f,b){let _=p!==null?p.length:0,m=null;if(_!==0){if(m=l.value,b!==!0||m===null){let h=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,v=f;M!==_;++M,v+=4)s.copy(p[M]).applyMatrix4(x,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Qi=4,Dx=6,Lx=20,Nx=256,us=new Wi,bp=new ke,Ld=null,Nd=0,Fd=0,Ud=!1,Fx=new O,pi=new O,Bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:s=256,position:o=Fx}=r;Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Nd,Fd),this._renderer.xr.enabled=Ud,e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ja||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Jn,format:Bn,colorSpace:Rr,depthBuffer:!1},i=xp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ux(r)),this._blurMaterial=Bx(r,e,t),this._ggxMaterial=Ox(r,e,t)}return i}_compileMaterial(e){let t=new We(new pt,e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,n,i,r){let l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(bp),p.toneMapping=Xn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new Ut,new yn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,h=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,h=!0):(m.color.copy(bp),h=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[M]));let E=this._cubeSize;Ki(i,v*E,M>2?E:0,E,E),p.setRenderTarget(i),h&&p.render(_,l),p.render(e,l)}p.toneMapping=f,p.autoClear=u,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ja||e.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vp());let r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ki(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,us)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=c*1.25,f=p*u,{_lodMax:b}=this,_=this._sizeLods[n],m=3*_*(n>b-Qi?n-b+Qi:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=b-t,Ki(r,m,h,3*_,2*_),i.setRenderTarget(r),i.render(o,us),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=b-n,Ki(e,m,h,3*_,2*_),i.setRenderTarget(e),i.render(o,us)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,i,r){let s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[i],p=3*d*(i>this._lodMax-Qi?i-this._lodMax+Qi:0),u=4*(this._cubeSize-d);Ki(t,p,u,3*d,2*d),s.setRenderTarget(t),s.render(l,us)}};function Ux(a){let e=[],t=[],n=a,i=a-Qi+1+Dx;for(let r=0;r<i;r++){let s=Math.pow(2,n);e.push(s);let o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,f=3,b=new Float32Array(f*u*p),_=new Float32Array(f*u*p);for(let h=0;h<p;h++){let x=h%3*2/3-1,M=h>2?0:-1,v=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];b.set(v,f*u*h);for(let E=0;E<u;E++){let S=d[E*2]*2-1,T=d[E*2+1]*2-1;h===0?pi.set(1,T,S):h===1?pi.set(-S,1,-T):h===2?pi.set(-S,T,1):h===3?pi.set(-1,T,-S):h===4?pi.set(-S,-1,T):pi.set(S,T,-1),pi.toArray(_,(h*u+E)*f)}}let m=new pt;m.setAttribute("position",new gt(b,f)),m.setAttribute("outputDirection",new gt(_,f)),t.push(new We(m,null)),n>Qi&&n--}return{lodMeshes:t,sizeLods:e}}function xp(a,e,t){let n=new fn(a,e,t);return n.texture.mapping=ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Ox(a,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function Bx(a,e,t){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:Lx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function vp(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function _p(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zl=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ut(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:da});r.uniforms.tEquirect.value=t;let s=new We(i,r),o=t.minFilter;return t.minFilter===qa&&(t.minFilter=Wt),new qo(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}};function zx(a){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?s(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wo||f===Xo)if(e.has(u)){let b=e.get(u).texture;return o(b,u.mapping)}else{let b=u.image;if(b&&b.height>0){let _=new zl(b.height);return _.fromEquirectangularTexture(a,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let f=u.mapping,b=f===Wo||f===Xo,_=f===ja||f===ui;if(b||_){let m=t.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new Bl(a)),m=b?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return b&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new Bl(a)),m=b?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===Wo?u.mapping=ja:f===Xo&&(u.mapping=ui),u}function l(u){let f=0,b=6;for(let _=0;_<b;_++)u[_]!==void 0&&f++;return f===b}function c(u){let f=u.target;f.removeEventListener("dispose",c);let b=e.get(f);b!==void 0&&(e.delete(f),b.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let b=t.get(f);b!==void 0&&(t.delete(f),b.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function Gx(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&oi("WebGLRenderer: "+n+" extension not supported."),i}}}function Hx(a,e,t,n){let i={},r=new WeakMap;function s(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let b in u.attributes)e.remove(u.attributes[b]);u.removeEventListener("dispose",s),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return i[u.id]===!0||(u.addEventListener("dispose",s),i[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)e.update(u[f],a.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,b=p.attributes.position,_=0;if(b===void 0)return;if(f!==null){let x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){let E=x[M+0],S=x[M+1],T=x[M+2];u.push(E,S,S,T,T,E)}}else{let x=b.array;_=b.version;for(let M=0,v=x.length/3-1;M<v;M+=3){let E=M+0,S=M+1,T=M+2;u.push(E,S,S,T,T,E)}}let m=new(b.count>=65535?Or:Ur)(u,1);m.version=_;let h=r.get(p);h&&e.remove(h),r.set(p,m)}function d(p){let u=r.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function kx(a,e,t){let n;function i(p){n=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){a.drawElements(n,u,r,p*s),t.update(u,n,1)}function c(p,u,f){f!==0&&(a.drawElementsInstanced(n,u,r,p*s,f),t.update(u,n,f))}function d(p,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Vx(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jx(a,e,t){let n=new WeakMap,i=new Pt;function r(s,o,l){let c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,u=n.get(o);if(u===void 0||u.count!==p){let A=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],M=0;f===!0&&(M=1),b===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*E*4*p),T=new Dr(S,v,E,p);T.type=On,T.needsUpdate=!0;let g=M*4;for(let C=0;C<p;C++){let I=m[C],N=h[C],D=x[C],R=v*E*4*C;for(let U=0;U<I.count;U++){let F=U*g;f===!0&&(i.fromBufferAttribute(I,U),S[R+F+0]=i.x,S[R+F+1]=i.y,S[R+F+2]=i.z,S[R+F+3]=0),b===!0&&(i.fromBufferAttribute(N,U),S[R+F+4]=i.x,S[R+F+5]=i.y,S[R+F+6]=i.z,S[R+F+7]=0),_===!0&&(i.fromBufferAttribute(D,U),S[R+F+8]=i.x,S[R+F+9]=i.y,S[R+F+10]=i.z,S[R+F+11]=D.itemSize===4?i.w:1)}}u={count:p,texture:T,size:new $e(v,E)},n.set(o,u),o.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let b=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",b),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:r}}function qx(a,e,t,n,i){let r=new WeakMap;function s(c){let d=i.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}var $x={[pd]:"LINEAR_TONE_MAPPING",[fd]:"REINHARD_TONE_MAPPING",[md]:"CINEON_TONE_MAPPING",[ts]:"ACES_FILMIC_TONE_MAPPING",[bd]:"AGX_TONE_MAPPING",[xd]:"NEUTRAL_TONE_MAPPING",[gd]:"CUSTOM_TONE_MAPPING"};function Wx(a,e,t,n,i,r){let s=new fn(e,t,{type:a,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new pt;c.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tt([0,2,0,0,2,0],2));let d=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new We(c,d),u=new Wi(-1,1,1,-1,0,1),f=null,b=null,_=!1,m,h=null,x=[],M=!1;this.setSize=function(v,E){s.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let S=0;S<x.length;S++){let T=x[S];T.setSize&&T.setSize(v,E)}},this.setEffects=function(v){x=v,M=x.length>0&&x[0].isRenderPass===!0;let E=s.width,S=s.height;x.length>0&&o===null&&(o=new fn(E,S,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(E,S,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<x.length;T++){let g=x[T];g.setSize&&g.setSize(E,S)}},this.begin=function(v,E){if(_||v.toneMapping===Xn&&x.length===0)return!1;if(h=E,E!==null){let S=E.width,T=E.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return M===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Xn,!0},this.hasRenderPass=function(){return M},this.end=function(v,E){v.toneMapping=m,_=!0;let S=s,T=o;for(let g=0;g<x.length;g++){let A=x[g];A.enabled!==!1&&(A.render(v,T,S,E),A.needsSwap!==!1&&(S=T,T=T===o?l:o))}if(f!==v.outputColorSpace||b!==v.toneMapping){f=v.outputColorSpace,b=v.toneMapping,d.defines={},ut.getTransfer(f)===yt&&(d.defines.SRGB_TRANSFER="");let g=$x[b];g&&(d.defines[g]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(h),v.render(p,u),h=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Gp=new sn,zd=new za(1,1),Hp=new Dr,kp=new xo,Vp=new Gr,yp=[],Sp=[],Mp=new Float32Array(16),Ep=new Float32Array(9),Ap=new Float32Array(4);function tr(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,r=yp[i];if(r===void 0&&(r=new Float32Array(i),yp[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Gt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ht(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function kl(a,e){let t=Sp[e];t===void 0&&(t=new Int32Array(e),Sp[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Xx(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Yx(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;a.uniform2fv(this.addr,e),Ht(t,e)}}function Jx(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;a.uniform3fv(this.addr,e),Ht(t,e)}}function Zx(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;a.uniform4fv(this.addr,e),Ht(t,e)}}function Kx(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Ap.set(n),a.uniformMatrix2fv(this.addr,!1,Ap),Ht(t,n)}}function Qx(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Ep.set(n),a.uniformMatrix3fv(this.addr,!1,Ep),Ht(t,n)}}function ev(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;Mp.set(n),a.uniformMatrix4fv(this.addr,!1,Mp),Ht(t,n)}}function tv(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function nv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;a.uniform2iv(this.addr,e),Ht(t,e)}}function av(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;a.uniform3iv(this.addr,e),Ht(t,e)}}function iv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;a.uniform4iv(this.addr,e),Ht(t,e)}}function rv(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function sv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;a.uniform2uiv(this.addr,e),Ht(t,e)}}function ov(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;a.uniform3uiv(this.addr,e),Ht(t,e)}}function lv(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;a.uniform4uiv(this.addr,e),Ht(t,e)}}function cv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(zd.compareFunction=t.isReversedDepthBuffer()?Fl:Nl,r=zd):r=Gp,t.setTexture2D(e||r,i)}function dv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||kp,i)}function uv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vp,i)}function hv(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hp,i)}function pv(a){switch(a){case 5126:return Xx;case 35664:return Yx;case 35665:return Jx;case 35666:return Zx;case 35674:return Kx;case 35675:return Qx;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return av;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return ov;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return hv}}function fv(a,e){a.uniform1fv(this.addr,e)}function mv(a,e){let t=tr(e,this.size,2);a.uniform2fv(this.addr,t)}function gv(a,e){let t=tr(e,this.size,3);a.uniform3fv(this.addr,t)}function bv(a,e){let t=tr(e,this.size,4);a.uniform4fv(this.addr,t)}function xv(a,e){let t=tr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function vv(a,e){let t=tr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function _v(a,e){let t=tr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function yv(a,e){a.uniform1iv(this.addr,e)}function Sv(a,e){a.uniform2iv(this.addr,e)}function Mv(a,e){a.uniform3iv(this.addr,e)}function Ev(a,e){a.uniform4iv(this.addr,e)}function Av(a,e){a.uniform1uiv(this.addr,e)}function Tv(a,e){a.uniform2uiv(this.addr,e)}function wv(a,e){a.uniform3uiv(this.addr,e)}function Cv(a,e){a.uniform4uiv(this.addr,e)}function Rv(a,e,t){let n=this.cache,i=e.length,r=kl(t,i);Gt(n,r)||(a.uniform1iv(this.addr,r),Ht(n,r));let s;this.type===a.SAMPLER_2D_SHADOW?s=zd:s=Gp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||s,r[o])}function Pv(a,e,t){let n=this.cache,i=e.length,r=kl(t,i);Gt(n,r)||(a.uniform1iv(this.addr,r),Ht(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||kp,r[s])}function Iv(a,e,t){let n=this.cache,i=e.length,r=kl(t,i);Gt(n,r)||(a.uniform1iv(this.addr,r),Ht(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Vp,r[s])}function Dv(a,e,t){let n=this.cache,i=e.length,r=kl(t,i);Gt(n,r)||(a.uniform1iv(this.addr,r),Ht(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Hp,r[s])}function Lv(a){switch(a){case 5126:return fv;case 35664:return mv;case 35665:return gv;case 35666:return bv;case 35674:return xv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return Sv;case 35668:case 35672:return Mv;case 35669:case 35673:return Ev;case 5125:return Av;case 36294:return Tv;case 36295:return wv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}var Gd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}},Hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}},kd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Od=/(\w+)(\])?(\[|\.)?/g;function Tp(a,e){a.seq.push(e),a.map[e.id]=e}function Nv(a,e,t){let n=a.name,i=n.length;for(Od.lastIndex=0;;){let r=Od.exec(n),s=Od.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Tp(t,c===void 0?new Gd(o,a,e):new Hd(o,a,e));break}else{let p=t.map[o];p===void 0&&(p=new kd(o),Tp(t,p)),t=p}}}var er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);Nv(o,l,this)}let i=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let s=e[i];s.id in t&&n.push(s)}return n}};function wp(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var Fv=37297,Uv=0;function Ov(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){let o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}var Cp=new nt;function Bv(a){ut._getMatrix(Cp,ut.workingColorSpace,a);let e=`mat3( ${Cp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(a)){case Pr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Rp(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ov(a.getShaderSource(e),o)}else return r}function zv(a,e){let t=Bv(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Gv={[pd]:"Linear",[fd]:"Reinhard",[md]:"Cineon",[ts]:"ACESFilmic",[bd]:"AgX",[xd]:"Neutral",[gd]:"Custom"};function Hv(a,e){let t=Gv[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new O;function kv(){ut.getLuminanceCoefficients(Ol);let a=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function jv(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qv(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=a.getActiveAttrib(e,i),s=r.name,o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ps(a){return a!==""}function Pp(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(a){return a.replace($v,Xv)}var Wv=new Map;function Xv(a,e){let t=ot[e];if(t===void 0){let n=Wv.get(e);if(n!==void 0)t=ot[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vd(t)}var Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(a){return a.replace(Yv,Jv)}function Jv(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lp(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}var Zv={[es]:"SHADOWMAP_TYPE_PCF",[Xi]:"SHADOWMAP_TYPE_VSM"};function Kv(a){return Zv[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qv={[ja]:"ENVMAP_TYPE_CUBE",[ui]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE_UV"};function e_(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Qv[a.envMapMode]||"ENVMAP_TYPE_CUBE"}var t_={[ui]:"ENVMAP_MODE_REFRACTION"};function n_(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":t_[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a_={[hd]:"ENVMAP_BLENDING_MULTIPLY",[Jh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function i_(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":a_[a.combine]||"ENVMAP_BLENDING_NONE"}function r_(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s_(a,e,t,n){let i=a.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,l=Kv(t),c=e_(t),d=n_(t),p=i_(t),u=r_(t),f=Vv(t),b=jv(r),_=i.createProgram(),m,h,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ps).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ps).join(`
`),h.length>0&&(h+=`
`)):(m=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),h=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,zv("linearToOutputTexel",t.outputColorSpace),kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),s=Vd(s),s=Pp(s,t),s=Ip(s,t),o=Vd(o),o=Pp(o,t),o=Ip(o,t),s=Dp(s),o=Dp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=x+m+s,v=x+h+o,E=wp(i,i.VERTEX_SHADER,M),S=wp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(I){if(a.debug.checkShaderErrors){let N=i.getProgramInfoLog(_)||"",D=i.getShaderInfoLog(E)||"",R=i.getShaderInfoLog(S)||"",U=N.trim(),F=D.trim(),H=R.trim(),$=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,_,E,S);else{let te=Rp(i,E,"vertex"),le=Rp(i,S,"fragment");et("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+te+`
`+le)}else U!==""?Je("WebGLProgram: Program Info Log:",U):(F===""||H==="")&&(W=!1);W&&(I.diagnostics={runnable:$,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:h}})}i.deleteShader(E),i.deleteShader(S),g=new er(i,_),A=qv(i,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,Fv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}var o_=0,jd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qd(e),t.set(e,n)),n}},qd=class{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}};function l_(a){return a===Wa||a===ls||a===cs}function c_(a,e,t,n,i,r){let s=new Lr,o=new jd,l=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,A,C,I,N,D){let R=I.fog,U=N.geometry,F=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,$=e.get(g.envMap||F,H),W=$&&$.mapping===ns?$.image.height:null,te=f[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&Je("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let le=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Se=le!==void 0?le.length:0,V=0;U.morphAttributes.position!==void 0&&(V=1),U.morphAttributes.normal!==void 0&&(V=2),U.morphAttributes.color!==void 0&&(V=3);let ce,be,Me,j;if(te){let Tt=ha[te];ce=Tt.vertexShader,be=Tt.fragmentShader}else{ce=g.vertexShader,be=g.fragmentShader;let Tt=o.getVertexShaderStage(g),vt=o.getFragmentShaderStage(g);o.update(g,Tt,vt),Me=Tt.id,j=vt.id}let Q=a.getRenderTarget(),ue=a.state.buffers.depth.getReversed(),Ee=N.isInstancedMesh===!0,J=N.isBatchedMesh===!0,B=!!g.map,pe=!!g.matcap,fe=!!$,Ae=!!g.aoMap,Re=!!g.lightMap,Le=!!g.bumpMap&&g.wireframe===!1,_e=!!g.normalMap,ae=!!g.displacementMap,ne=!!g.emissiveMap,de=!!g.metalnessMap,ee=!!g.roughnessMap,L=g.anisotropy>0,ve=g.clearcoat>0,me=g.dispersion>0,P=g.retroreflectivity>0,y=g.iridescence>0,z=g.sheen>0,q=g.transmission>0,Y=L&&!!g.anisotropyMap,ye=ve&&!!g.clearcoatMap,ge=ve&&!!g.clearcoatNormalMap,re=ve&&!!g.clearcoatRoughnessMap,se=y&&!!g.iridescenceMap,Te=y&&!!g.iridescenceThicknessMap,ze=z&&!!g.sheenColorMap,we=z&&!!g.sheenRoughnessMap,Ce=!!g.specularMap,Xe=!!g.specularColorMap,Ke=!!g.specularIntensityMap,it=q&&!!g.transmissionMap,k=q&&!!g.thicknessMap,Pe=!!g.gradientMap,he=!!g.alphaMap,Ie=g.alphaTest>0,Ue=!!g.alphaHash,xe=!!g.extensions,Ye=Xn;g.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ye=a.toneMapping);let je={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:ce,fragmentShader:be,defines:g.defines,customVertexShaderID:Me,customFragmentShaderID:j,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:J,batchingColor:J&&N._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,instancingMorph:Ee&&N.morphTexture!==null,outputColorSpace:Q===null?a.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:B,matcap:pe,envMap:fe,envMapMode:fe&&$.mapping,envMapCubeUVHeight:W,aoMap:Ae,lightMap:Re,bumpMap:Le,normalMap:_e,displacementMap:ae,emissiveMap:ne,normalMapObjectSpace:_e&&g.normalMapType===ep,normalMapTangentSpace:_e&&g.normalMapType===Ll,packedNormalMap:_e&&g.normalMapType===Ll&&l_(g.normalMap.format),metalnessMap:de,roughnessMap:ee,anisotropy:L,anisotropyMap:Y,clearcoat:ve,clearcoatMap:ye,clearcoatNormalMap:ge,clearcoatRoughnessMap:re,dispersion:me,retroreflection:P,iridescence:y,iridescenceMap:se,iridescenceThicknessMap:Te,sheen:z,sheenColorMap:ze,sheenRoughnessMap:we,specularMap:Ce,specularColorMap:Xe,specularIntensityMap:Ke,transmission:q,transmissionMap:it,thicknessMap:k,gradientMap:Pe,opaque:g.transparent===!1&&g.blending===Yi&&g.alphaToCoverage===!1,alphaMap:he,alphaTest:Ie,alphaHash:Ue,combine:g.combine,mapUv:B&&b(g.map.channel),aoMapUv:Ae&&b(g.aoMap.channel),lightMapUv:Re&&b(g.lightMap.channel),bumpMapUv:Le&&b(g.bumpMap.channel),normalMapUv:_e&&b(g.normalMap.channel),displacementMapUv:ae&&b(g.displacementMap.channel),emissiveMapUv:ne&&b(g.emissiveMap.channel),metalnessMapUv:de&&b(g.metalnessMap.channel),roughnessMapUv:ee&&b(g.roughnessMap.channel),anisotropyMapUv:Y&&b(g.anisotropyMap.channel),clearcoatMapUv:ye&&b(g.clearcoatMap.channel),clearcoatNormalMapUv:ge&&b(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&b(g.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&b(g.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(g.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&b(g.sheenColorMap.channel),sheenRoughnessMapUv:we&&b(g.sheenRoughnessMap.channel),specularMapUv:Ce&&b(g.specularMap.channel),specularColorMapUv:Xe&&b(g.specularColorMap.channel),specularIntensityMapUv:Ke&&b(g.specularIntensityMap.channel),transmissionMapUv:it&&b(g.transmissionMap.channel),thicknessMapUv:k&&b(g.thicknessMap.channel),alphaMapUv:he&&b(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_e||L),vertexNormals:!!U.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(B||he),fog:!!R,useFog:g.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||U.attributes.normal===void 0&&_e===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ue,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:V,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ye,decodeVideoTexture:B&&g.map.isVideoTexture===!0&&ut.getTransfer(g.map.colorSpace)===yt,decodeVideoTextureEmissive:ne&&g.emissiveMap.isVideoTexture===!0&&ut.getTransfer(g.emissiveMap.colorSpace)===yt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Un,flipSided:g.side===on,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:xe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&g.extensions.multiDraw===!0||J)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function m(g){let A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(let C in g.defines)A.push(C),A.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(h(A,g),x(A,g),A.push(a.outputColorSpace)),A.push(g.customProgramCacheKey),A.join()}function h(g,A){g.push(A.precision),g.push(A.outputColorSpace),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.mapUv),g.push(A.alphaMapUv),g.push(A.lightMapUv),g.push(A.aoMapUv),g.push(A.bumpMapUv),g.push(A.normalMapUv),g.push(A.displacementMapUv),g.push(A.emissiveMapUv),g.push(A.metalnessMapUv),g.push(A.roughnessMapUv),g.push(A.anisotropyMapUv),g.push(A.clearcoatMapUv),g.push(A.clearcoatNormalMapUv),g.push(A.clearcoatRoughnessMapUv),g.push(A.iridescenceMapUv),g.push(A.iridescenceThicknessMapUv),g.push(A.sheenColorMapUv),g.push(A.sheenRoughnessMapUv),g.push(A.specularMapUv),g.push(A.specularColorMapUv),g.push(A.specularIntensityMapUv),g.push(A.transmissionMapUv),g.push(A.thicknessMapUv),g.push(A.combine),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numSunLights),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numSunLightShadows),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.numLightProbes),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function x(g,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function M(g){let A=f[g.type],C;if(A){let I=ha[A];C=fp.clone(I.uniforms)}else C=g.uniforms;return C}function v(g,A){let C=d.get(A);return C!==void 0?++C.usedTimes:(C=new s_(a,A,g,i),c.push(C),d.set(A,C)),C}function E(g){if(--g.usedTimes===0){let A=c.indexOf(g);c[A]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function S(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:T}}function d_(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function u_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Np(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Fp(){let a=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,b,_,m,h){let x=a[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:b,materialVariant:s(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:h},a[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=b,x.materialVariant=s(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=m,x.group=h),e++,x}function l(u,f,b,_,m,h,x){x.reversedDepth===!0&&(m=-m);let M=o(u,f,b,_,m,h);b.transmission>0?n.push(M):b.transparent===!0?i.push(M):t.push(M)}function c(u,f,b,_,m,h){let x=o(u,f,b,_,m,h);b.transmission>0?n.unshift(x):b.transparent===!0?i.unshift(x):t.unshift(x)}function d(u,f){t.length>1&&t.sort(u||u_),n.length>1&&n.sort(f||Np),i.length>1&&i.sort(f||Np)}function p(){for(let u=e,f=a.length;u<f;u++){let b=a[u];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:p,sort:d}}function h_(){let a=new WeakMap;function e(n,i){let r=a.get(n),s;return r===void 0?(s=new Fp,a.set(n,[s])):i>=r.length?(s=new Fp,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function p_(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new ke};break;case"SpotLight":t={position:new O,direction:new O,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new O,halfWidth:new O,halfHeight:new O};break}return a[e.id]=t,t}}}function f_(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var m_=0;function g_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function b_(a){let e=new p_,t=f_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,r=new St,s=new St;function o(c){let d=0,p=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,b=0,_=0,m=0,h=0,x=0,M=0,v=0,E=0,S=0,T=0,g=0,A=0,C=0;c.sort(g_);for(let N=0,D=c.length;N<D;N++){let R=c[N],U=R.color,F=R.intensity,H=R.distance,$=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Wa?$=R.shadow.map.texture:$=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=U.r*F,p+=U.g*F,u+=U.b*F;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],F);C++}else if(R.isSunLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,le=t.get(R);le.shadowIntensity=te.intensity,le.shadowBias=te.bias,le.shadowNormalBias=te.normalBias,le.shadowRadius=te.radius,le.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[b]=le,n.sunShadowMap[b]=$;let Se=te.getViewportCount();for(let V=0;V<Se;V++)n.sunShadowMatrix[_+V]=te.getMatrix(V),n.sunShadowCascade[_+V]=te._cascadeData[V];_+=Se,b++}n.sun[f]=W,f++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,le=t.get(R);le.shadowIntensity=te.intensity,le.shadowBias=te.bias,le.shadowNormalBias=te.normalBias,le.shadowRadius=te.radius,le.shadowMapSize=te.mapSize,n.directionalShadow[m]=le,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=R.shadow.matrix,E++}n.directional[m]=W,m++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(U).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[x]=W;let te=R.shadow;if(R.map&&(n.spotLightMap[g]=R.map,g++,te.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[x]=te.matrix,R.castShadow){let le=t.get(R);le.shadowIntensity=te.intensity,le.shadowBias=te.bias,le.shadowNormalBias=te.normalBias,le.shadowRadius=te.radius,le.shadowMapSize=te.mapSize,n.spotShadow[x]=le,n.spotShadowMap[x]=$,T++}x++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(U).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=W,M++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let te=R.shadow,le=t.get(R);le.shadowIntensity=te.intensity,le.shadowBias=te.bias,le.shadowNormalBias=te.normalBias,le.shadowRadius=te.radius,le.shadowMapSize=te.mapSize,le.shadowCameraNear=te.camera.near,le.shadowCameraFar=te.camera.far,n.pointShadow[h]=le,n.pointShadowMap[h]=$,n.pointShadowMatrix[h]=R.shadow.matrix,S++}n.point[h]=W,h++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(F),W.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[v]=W,v++}}M>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==h||I.spotLength!==x||I.rectAreaLength!==M||I.hemiLength!==v||I.numSunShadows!==b||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==T||I.numSpotMaps!==g||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=M,n.point.length=h,n.hemi.length=v,n.sunShadow.length=b,n.sunShadowMap.length=b,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+g-A,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=h,I.spotLength=x,I.rectAreaLength=M,I.hemiLength=v,I.numSunShadows=b,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=T,I.numSpotMaps=g,I.numLightProbes=C,n.version=m_++)}function l(c,d){let p=0,u=0,f=0,b=0,_=0,m=0,h=d.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){let v=c[x];if(v.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(h),p++}else if(v.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(h),u++}else if(v.isSpotLight){let E=n.spot[b];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(h),b++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),s.identity(),r.copy(v.matrixWorld),r.premultiply(h),s.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:n}}function Up(a){let e=new b_(a),t=[],n=[],i=[];function r(u){p.camera=u,t.length=0,n.length=0,i.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function x_(a){let e=new WeakMap;function t(i,r=0){let s=e.get(i),o;return s===void 0?(o=new Up(a),e.set(i,[o])):r>=s.length?(o=new Up(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`,y_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],S_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Op=new St,hs=new O,Bd=new O;function M_(a,e,t){let n=new ji,i=new $e,r=new $e,s=new Pt,o=new Do,l=new Lo,c={},d=t.maxTextureSize,p={[Va]:on,[on]:Va,[Un]:Un},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:v_,fragmentShader:__}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let b=new pt;b.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new We(b,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=es;let h=this.type;this.render=function(S,T,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ih&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=es);let A=a.getRenderTarget(),C=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),N=a.state;N.setBlending(da),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=h!==this.type;D&&T.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=S.length;R<U;R++){let F=S[R],H=F.shadow;if(H===void 0){Je("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let $=H.getFrameExtents();i.multiply($),r.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/$.x),i.x=r.x*$.x,H.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/$.y),i.y=r.y*$.y,H.mapSize.y=r.y));let W=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||D===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xi){if(F.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new fn(i.x,i.y,{format:Wa,type:Jn,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new za(i.x,i.y,On),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=ra,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt}else F.isPointLight?(H.map=new zl(i.x),H.map.depthTexture=new So(i.x,Yn)):(H.map=new fn(i.x,i.y),H.map.depthTexture=new za(i.x,i.y,Yn)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=ra,this.type===es?(H.map.depthTexture.compareFunction=W?Fl:Nl,H.map.depthTexture.minFilter=Wt,H.map.depthTexture.magFilter=Wt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let te=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();F.isPointLight!==!0&&H.updateMatrices(F,g);for(let le=0;le<te;le++){let Se=H.getCamera(le);if(F.isPointLight){let V=H.camera,ce=H.matrix,be=F.distance||V.far;be!==V.far&&(V.far=be,V.updateProjectionMatrix()),hs.setFromMatrixPosition(F.matrixWorld),V.position.copy(hs),Bd.copy(V.position),Bd.add(y_[le]),V.up.copy(S_[le]),V.lookAt(Bd),V.updateMatrixWorld(),ce.makeTranslation(-hs.x,-hs.y,-hs.z),Op.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Op,V.coordinateSystem,V.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,le),a.clear();else{le===0&&(a.setRenderTarget(H.map),a.clear());let V=H.getViewport(le);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),N.viewport(s)}n=H.getFrustum(le),v(T,g,Se,F,this.type)}H.isPointLightShadow!==!0&&this.type===Xi&&x(H,g),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,a.setRenderTarget(A,C,I)};function x(S,T){let g=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new fn(i.x,i.y,{format:Wa,type:Jn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(T,null,g,u,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(T,null,g,f,_,null)}function M(S,T,g,A){let C=null,I=g.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)C=I;else if(C=g.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=C.uuid,D=T.uuid,R=c[N];R===void 0&&(R={},c[N]=R);let U=R[D];U===void 0&&(U=C.clone(),R[D]=U,T.addEventListener("dispose",E)),C=U}if(C.visible=T.visible,C.wireframe=T.wireframe,A===Xi?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:p[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=a.properties.get(C);N.light=g}return C}function v(S,T,g,A,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Xi)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,S.matrixWorld);let D=e.update(S),R=S.material;if(Array.isArray(R)){let U=D.groups;for(let F=0,H=U.length;F<H;F++){let $=U[F],W=R[$.materialIndex];if(W&&W.visible){let te=M(S,W,A,C);S.onBeforeShadow(a,S,T,g,D,te,$),a.renderBufferDirect(g,null,D,te,S,$),S.onAfterShadow(a,S,T,g,D,te,$)}}}else if(R.visible){let U=M(S,R,A,C);S.onBeforeShadow(a,S,T,g,D,U,null),a.renderBufferDirect(g,null,D,U,S,null),S.onAfterShadow(a,S,T,g,D,U,null)}}let N=S.children;for(let D=0,R=N.length;D<R;D++)v(N[D],T,g,A,C)}function E(S){S.target.removeEventListener("dispose",E);for(let g in c){let A=c[g],C=S.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function E_(a,e){function t(){let k=!1,Pe=new Pt,he=null,Ie=new Pt(0,0,0,0);return{setMask:function(Ue){he!==Ue&&!k&&(a.colorMask(Ue,Ue,Ue,Ue),he=Ue)},setLocked:function(Ue){k=Ue},setClear:function(Ue,xe,Ye,je,Tt){Tt===!0&&(Ue*=je,xe*=je,Ye*=je),Pe.set(Ue,xe,Ye,je),Ie.equals(Pe)===!1&&(a.clearColor(Ue,xe,Ye,je),Ie.copy(Pe))},reset:function(){k=!1,he=null,Ie.set(-1,0,0,0)}}}function n(){let k=!1,Pe=!1,he=null,Ie=null,Ue=null;return{setReversed:function(xe){if(Pe!==xe){let Ye=e.get("EXT_clip_control");xe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Pe=xe;let je=Ue;Ue=null,this.setClear(je)}},getReversed:function(){return Pe},setTest:function(xe){xe?Q(a.DEPTH_TEST):ue(a.DEPTH_TEST)},setMask:function(xe){he!==xe&&!k&&(a.depthMask(xe),he=xe)},setFunc:function(xe){if(Pe&&(xe=hp[xe]),Ie!==xe){switch(xe){case ro:a.depthFunc(a.NEVER);break;case so:a.depthFunc(a.ALWAYS);break;case oo:a.depthFunc(a.LESS);break;case Oi:a.depthFunc(a.LEQUAL);break;case lo:a.depthFunc(a.EQUAL);break;case co:a.depthFunc(a.GEQUAL);break;case uo:a.depthFunc(a.GREATER);break;case ho:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=xe}},setLocked:function(xe){k=xe},setClear:function(xe){Ue!==xe&&(Ue=xe,Pe&&(xe=1-xe),a.clearDepth(xe))},reset:function(){k=!1,he=null,Ie=null,Ue=null,Pe=!1}}}function i(){let k=!1,Pe=null,he=null,Ie=null,Ue=null,xe=null,Ye=null,je=null,Tt=null;return{setTest:function(vt){k||(vt?Q(a.STENCIL_TEST):ue(a.STENCIL_TEST))},setMask:function(vt){Pe!==vt&&!k&&(a.stencilMask(vt),Pe=vt)},setFunc:function(vt,Hn,ta){(he!==vt||Ie!==Hn||Ue!==ta)&&(a.stencilFunc(vt,Hn,ta),he=vt,Ie=Hn,Ue=ta)},setOp:function(vt,Hn,ta){(xe!==vt||Ye!==Hn||je!==ta)&&(a.stencilOp(vt,Hn,ta),xe=vt,Ye=Hn,je=ta)},setLocked:function(vt){k=vt},setClear:function(vt){Tt!==vt&&(a.clearStencil(vt),Tt=vt)},reset:function(){k=!1,Pe=null,he=null,Ie=null,Ue=null,xe=null,Ye=null,je=null,Tt=null}}}let r=new t,s=new n,o=new i,l=new WeakMap,c=new WeakMap,d={},p={},u={},f=new WeakMap,b=[],_=null,m=!1,h=null,x=null,M=null,v=null,E=null,S=null,T=null,g=new ke(0,0,0),A=0,C=!1,I=null,N=null,D=null,R=null,U=null,F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,$=0,W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=$>=2);let te=null,le={},Se=a.getParameter(a.SCISSOR_BOX),V=a.getParameter(a.VIEWPORT),ce=new Pt().fromArray(Se),be=new Pt().fromArray(V);function Me(k,Pe,he,Ie){let Ue=new Uint8Array(4),xe=a.createTexture();a.bindTexture(k,xe),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ye=0;Ye<he;Ye++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(Pe,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Ue):a.texImage2D(Pe+Ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ue);return xe}let j={};j[a.TEXTURE_2D]=Me(a.TEXTURE_2D,a.TEXTURE_2D,1),j[a.TEXTURE_CUBE_MAP]=Me(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[a.TEXTURE_2D_ARRAY]=Me(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),j[a.TEXTURE_3D]=Me(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Q(a.DEPTH_TEST),s.setFunc(Oi),Le(!1),_e(sd),Q(a.CULL_FACE),Ae(da);function Q(k){d[k]!==!0&&(a.enable(k),d[k]=!0)}function ue(k){d[k]!==!1&&(a.disable(k),d[k]=!1)}function Ee(k,Pe){return u[k]!==Pe?(a.bindFramebuffer(k,Pe),u[k]=Pe,k===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=Pe),k===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=Pe),!0):!1}function J(k,Pe){let he=b,Ie=!1;if(k){he=f.get(Pe),he===void 0&&(he=[],f.set(Pe,he));let Ue=k.textures;if(he.length!==Ue.length||he[0]!==a.COLOR_ATTACHMENT0){for(let xe=0,Ye=Ue.length;xe<Ye;xe++)he[xe]=a.COLOR_ATTACHMENT0+xe;he.length=Ue.length,Ie=!0}}else he[0]!==a.BACK&&(he[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(he)}function B(k){return _!==k?(a.useProgram(k),_=k,!0):!1}let pe={[di]:a.FUNC_ADD,[Lh]:a.FUNC_SUBTRACT,[Nh]:a.FUNC_REVERSE_SUBTRACT};pe[Fh]=a.MIN,pe[Uh]=a.MAX;let fe={[Oh]:a.ZERO,[Bh]:a.ONE,[zh]:a.SRC_COLOR,[dd]:a.SRC_ALPHA,[qh]:a.SRC_ALPHA_SATURATE,[Vh]:a.DST_COLOR,[Hh]:a.DST_ALPHA,[Gh]:a.ONE_MINUS_SRC_COLOR,[ud]:a.ONE_MINUS_SRC_ALPHA,[jh]:a.ONE_MINUS_DST_COLOR,[kh]:a.ONE_MINUS_DST_ALPHA,[$h]:a.CONSTANT_COLOR,[Wh]:a.ONE_MINUS_CONSTANT_COLOR,[Xh]:a.CONSTANT_ALPHA,[Yh]:a.ONE_MINUS_CONSTANT_ALPHA};function Ae(k,Pe,he,Ie,Ue,xe,Ye,je,Tt,vt){if(k===da){m===!0&&(ue(a.BLEND),m=!1);return}if(m===!1&&(Q(a.BLEND),m=!0),k!==Dh){if(k!==h||vt!==C){if((x!==di||E!==di)&&(a.blendEquation(a.FUNC_ADD),x=di,E=di),vt)switch(k){case Yi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case od:a.blendFunc(a.ONE,a.ONE);break;case ld:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case cd:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:et("WebGLState: Invalid blending: ",k);break}else switch(k){case Yi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case od:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ld:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cd:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",k);break}M=null,v=null,S=null,T=null,g.set(0,0,0),A=0,h=k,C=vt}return}Ue=Ue||Pe,xe=xe||he,Ye=Ye||Ie,(Pe!==x||Ue!==E)&&(a.blendEquationSeparate(pe[Pe],pe[Ue]),x=Pe,E=Ue),(he!==M||Ie!==v||xe!==S||Ye!==T)&&(a.blendFuncSeparate(fe[he],fe[Ie],fe[xe],fe[Ye]),M=he,v=Ie,S=xe,T=Ye),(je.equals(g)===!1||Tt!==A)&&(a.blendColor(je.r,je.g,je.b,Tt),g.copy(je),A=Tt),h=k,C=!1}function Re(k,Pe){k.side===Un?ue(a.CULL_FACE):Q(a.CULL_FACE);let he=k.side===on;Pe&&(he=!he),Le(he),k.blending===Yi&&k.transparent===!1?Ae(da):Ae(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ie=k.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(a.SAMPLE_ALPHA_TO_COVERAGE):ue(a.SAMPLE_ALPHA_TO_COVERAGE)}function Le(k){I!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),I=k)}function _e(k){k!==Rh?(Q(a.CULL_FACE),k!==N&&(k===sd?a.cullFace(a.BACK):k===Ph?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ue(a.CULL_FACE),N=k}function ae(k){k!==D&&(H&&a.lineWidth(k),D=k)}function ne(k,Pe,he){k?(Q(a.POLYGON_OFFSET_FILL),(R!==Pe||U!==he)&&(R=Pe,U=he,s.getReversed()&&(Pe=-Pe),a.polygonOffset(Pe,he))):ue(a.POLYGON_OFFSET_FILL)}function de(k){k?Q(a.SCISSOR_TEST):ue(a.SCISSOR_TEST)}function ee(k){k===void 0&&(k=a.TEXTURE0+F-1),te!==k&&(a.activeTexture(k),te=k)}function L(k,Pe,he){he===void 0&&(te===null?he=a.TEXTURE0+F-1:he=te);let Ie=le[he];Ie===void 0&&(Ie={type:void 0,texture:void 0},le[he]=Ie),(Ie.type!==k||Ie.texture!==Pe)&&(te!==he&&(a.activeTexture(he),te=he),a.bindTexture(k,Pe||j[k]),Ie.type=k,Ie.texture=Pe)}function ve(){let k=le[te];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function me(){try{a.compressedTexImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function y(){try{a.texSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function z(){try{a.texSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function q(){try{a.compressedTexSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function Y(){try{a.compressedTexSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function ye(){try{a.texStorage2D(...arguments)}catch(k){et("WebGLState:",k)}}function ge(){try{a.texStorage3D(...arguments)}catch(k){et("WebGLState:",k)}}function re(){try{a.texImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function se(){try{a.texImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function Te(k){return p[k]!==void 0?p[k]:a.getParameter(k)}function ze(k,Pe){p[k]!==Pe&&(a.pixelStorei(k,Pe),p[k]=Pe)}function we(k){ce.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),ce.copy(k))}function Ce(k){be.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),be.copy(k))}function Xe(k,Pe){let he=c.get(Pe);he===void 0&&(he=new WeakMap,c.set(Pe,he));let Ie=he.get(k);Ie===void 0&&(Ie=a.getUniformBlockIndex(Pe,k.name),he.set(k,Ie))}function Ke(k,Pe){let Ie=c.get(Pe).get(k);l.get(Pe)!==Ie&&(a.uniformBlockBinding(Pe,Ie,k.__bindingPointIndex),l.set(Pe,Ie))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),d={},p={},te=null,le={},u={},f=new WeakMap,b=[],_=null,m=!1,h=null,x=null,M=null,v=null,E=null,S=null,T=null,g=new ke(0,0,0),A=0,C=!1,I=null,N=null,D=null,R=null,U=null,ce.set(0,0,a.canvas.width,a.canvas.height),be.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Q,disable:ue,bindFramebuffer:Ee,drawBuffers:J,useProgram:B,setBlending:Ae,setMaterial:Re,setFlipSided:Le,setCullFace:_e,setLineWidth:ae,setPolygonOffset:ne,setScissorTest:de,activeTexture:ee,bindTexture:L,unbindTexture:ve,compressedTexImage2D:me,compressedTexImage3D:P,texImage2D:re,texImage3D:se,pixelStorei:ze,getParameter:Te,updateUBOMapping:Xe,uniformBlockBinding:Ke,texStorage2D:ye,texStorage3D:ge,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:Y,scissor:we,viewport:Ce,reset:it}}function A_(a,e,t,n,i,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap,p=new Set,u,f=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return b?new OffscreenCanvas(P,y):Ir("canvas")}function m(P,y,z){let q=1,Y=me(P);if((Y.width>z||Y.height>z)&&(q=z/Math.max(Y.width,Y.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ye=Math.floor(q*Y.width),ge=Math.floor(q*Y.height);u===void 0&&(u=_(ye,ge));let re=y?_(ye,ge):u;return re.width=ye,re.height=ge,re.getContext("2d").drawImage(P,0,0,ye,ge),Je("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ye+"x"+ge+")."),re}else return"data"in P&&Je("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),P;return P}function h(P){return P.generateMipmaps}function x(P){a.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(P,y,z,q,Y,ye=!1){if(P!==null){if(a[P]!==void 0)return a[P];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge;q&&(ge=e.get("EXT_texture_norm16"),ge||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=y;if(y===a.RED&&(z===a.FLOAT&&(re=a.R32F),z===a.HALF_FLOAT&&(re=a.R16F),z===a.UNSIGNED_BYTE&&(re=a.R8),z===a.UNSIGNED_SHORT&&ge&&(re=ge.R16_EXT),z===a.SHORT&&ge&&(re=ge.R16_SNORM_EXT)),y===a.RED_INTEGER&&(z===a.UNSIGNED_BYTE&&(re=a.R8UI),z===a.UNSIGNED_SHORT&&(re=a.R16UI),z===a.UNSIGNED_INT&&(re=a.R32UI),z===a.BYTE&&(re=a.R8I),z===a.SHORT&&(re=a.R16I),z===a.INT&&(re=a.R32I)),y===a.RG&&(z===a.FLOAT&&(re=a.RG32F),z===a.HALF_FLOAT&&(re=a.RG16F),z===a.UNSIGNED_BYTE&&(re=a.RG8),z===a.UNSIGNED_SHORT&&ge&&(re=ge.RG16_EXT),z===a.SHORT&&ge&&(re=ge.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(z===a.UNSIGNED_BYTE&&(re=a.RG8UI),z===a.UNSIGNED_SHORT&&(re=a.RG16UI),z===a.UNSIGNED_INT&&(re=a.RG32UI),z===a.BYTE&&(re=a.RG8I),z===a.SHORT&&(re=a.RG16I),z===a.INT&&(re=a.RG32I)),y===a.RGB_INTEGER&&(z===a.UNSIGNED_BYTE&&(re=a.RGB8UI),z===a.UNSIGNED_SHORT&&(re=a.RGB16UI),z===a.UNSIGNED_INT&&(re=a.RGB32UI),z===a.BYTE&&(re=a.RGB8I),z===a.SHORT&&(re=a.RGB16I),z===a.INT&&(re=a.RGB32I)),y===a.RGBA_INTEGER&&(z===a.UNSIGNED_BYTE&&(re=a.RGBA8UI),z===a.UNSIGNED_SHORT&&(re=a.RGBA16UI),z===a.UNSIGNED_INT&&(re=a.RGBA32UI),z===a.BYTE&&(re=a.RGBA8I),z===a.SHORT&&(re=a.RGBA16I),z===a.INT&&(re=a.RGBA32I)),y===a.RGB&&(z===a.UNSIGNED_SHORT&&ge&&(re=ge.RGB16_EXT),z===a.SHORT&&ge&&(re=ge.RGB16_SNORM_EXT),z===a.UNSIGNED_INT_5_9_9_9_REV&&(re=a.RGB9_E5),z===a.UNSIGNED_INT_10F_11F_11F_REV&&(re=a.R11F_G11F_B10F)),y===a.RGBA){let se=ye?Pr:ut.getTransfer(Y);z===a.FLOAT&&(re=a.RGBA32F),z===a.HALF_FLOAT&&(re=a.RGBA16F),z===a.UNSIGNED_BYTE&&(re=se===yt?a.SRGB8_ALPHA8:a.RGBA8),z===a.UNSIGNED_SHORT&&ge&&(re=ge.RGBA16_EXT),z===a.SHORT&&ge&&(re=ge.RGBA16_SNORM_EXT),z===a.UNSIGNED_SHORT_4_4_4_4&&(re=a.RGBA4),z===a.UNSIGNED_SHORT_5_5_5_1&&(re=a.RGB5_A1)}return(re===a.R16F||re===a.R32F||re===a.RG16F||re===a.RG32F||re===a.RGBA16F||re===a.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function E(P,y){let z;return P?y===null||y===Yn||y===Zi?z=a.DEPTH24_STENCIL8:y===On?z=a.DEPTH32F_STENCIL8:y===Ji&&(z=a.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yn||y===Zi?z=a.DEPTH_COMPONENT24:y===On?z=a.DEPTH_COMPONENT32F:y===Ji&&(z=a.DEPTH_COMPONENT16),z}function S(P,y){return h(P)===!0||P.isFramebufferTexture&&P.minFilter!==qt&&P.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function T(P){let y=P.target;y.removeEventListener("dispose",T),A(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&p.delete(y)}function g(P){let y=P.target;y.removeEventListener("dispose",g),I(y)}function A(P){let y=n.get(P);if(y.__webglInit===void 0)return;let z=P.source,q=f.get(z);if(q){let Y=q[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(P),Object.keys(q).length===0&&f.delete(z)}n.remove(P)}function C(P){let y=n.get(P);a.deleteTexture(y.__webglTexture);let z=P.source,q=f.get(z);delete q[y.__cacheKey],s.memory.textures--}function I(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Y=0;Y<y.__webglFramebuffer[q].length;Y++)a.deleteFramebuffer(y.__webglFramebuffer[q][Y]);else a.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)a.deleteFramebuffer(y.__webglFramebuffer[q]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=P.textures;for(let q=0,Y=z.length;q<Y;q++){let ye=n.get(z[q]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),s.memory.textures--),n.remove(z[q])}n.remove(P)}let N=0;function D(){N=0}function R(){return N}function U(P){N=P}function F(){let P=N;return P>=i.maxTextures&&Je("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function H(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function $(P,y){let z=n.get(P);if(P.isVideoTexture&&L(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let q=P.image;if(q===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,P,y);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,z.__webglTexture,a.TEXTURE0+y)}function W(P,y){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ue(z,P,y);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,z.__webglTexture,a.TEXTURE0+y)}function te(P,y){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ue(z,P,y);return}t.bindTexture(a.TEXTURE_3D,z.__webglTexture,a.TEXTURE0+y)}function le(P,y){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Ee(z,P,y);return}t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+y)}let Se={[Bi]:a.REPEAT,[ia]:a.CLAMP_TO_EDGE,[po]:a.MIRRORED_REPEAT},V={[qt]:a.NEAREST,[Kh]:a.NEAREST_MIPMAP_NEAREST,[as]:a.NEAREST_MIPMAP_LINEAR,[Wt]:a.LINEAR,[Yo]:a.LINEAR_MIPMAP_NEAREST,[qa]:a.LINEAR_MIPMAP_LINEAR},ce={[np]:a.NEVER,[op]:a.ALWAYS,[ap]:a.LESS,[Nl]:a.LEQUAL,[ip]:a.EQUAL,[Fl]:a.GEQUAL,[rp]:a.GREATER,[sp]:a.NOTEQUAL};function be(P,y){if(y.type===On&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wt||y.magFilter===Yo||y.magFilter===as||y.magFilter===qa||y.minFilter===Wt||y.minFilter===Yo||y.minFilter===as||y.minFilter===qa)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,Se[y.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,Se[y.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,Se[y.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,V[y.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,V[y.minFilter]),y.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qt||y.minFilter!==as&&y.minFilter!==qa||y.type===On&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Me(P,y){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",T));let q=y.source,Y=f.get(q);Y===void 0&&(Y={},f.set(q,Y));let ye=H(y);if(ye!==P.__cacheKey){Y[ye]===void 0&&(Y[ye]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Y[ye].usedTimes++;let ge=Y[P.__cacheKey];ge!==void 0&&(Y[P.__cacheKey].usedTimes--,ge.usedTimes===0&&C(y)),P.__cacheKey=ye,P.__webglTexture=Y[ye].texture}return z}function j(P,y,z){return Math.floor(Math.floor(P/z)/y)}function Q(P,y,z,q){let ye=P.updateRanges;if(ye.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,z,q,y.data);else{ye.sort((ze,we)=>ze.start-we.start);let ge=0;for(let ze=1;ze<ye.length;ze++){let we=ye[ge],Ce=ye[ze],Xe=we.start+we.count,Ke=j(Ce.start,y.width,4),it=j(we.start,y.width,4);Ce.start<=Xe+1&&Ke===it&&j(Ce.start+Ce.count-1,y.width,4)===Ke?we.count=Math.max(we.count,Ce.start+Ce.count-we.start):(++ge,ye[ge]=Ce)}ye.length=ge+1;let re=t.getParameter(a.UNPACK_ROW_LENGTH),se=t.getParameter(a.UNPACK_SKIP_PIXELS),Te=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let ze=0,we=ye.length;ze<we;ze++){let Ce=ye[ze],Xe=Math.floor(Ce.start/4),Ke=Math.ceil(Ce.count/4),it=Xe%y.width,k=Math.floor(Xe/y.width),Pe=Ke,he=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,it),t.pixelStorei(a.UNPACK_SKIP_ROWS,k),t.texSubImage2D(a.TEXTURE_2D,0,it,k,Pe,he,z,q,y.data)}P.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,re),t.pixelStorei(a.UNPACK_SKIP_PIXELS,se),t.pixelStorei(a.UNPACK_SKIP_ROWS,Te)}}function ue(P,y,z){let q=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=a.TEXTURE_3D);let Y=Me(P,y),ye=y.source;t.bindTexture(q,P.__webglTexture,a.TEXTURE0+z);let ge=n.get(ye);if(ye.version!==ge.__version||Y===!0){if(t.activeTexture(a.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let he=ut.getPrimaries(ut.workingColorSpace),Ie=y.colorSpace===Ea?null:ut.getPrimaries(y.colorSpace),Ue=y.colorSpace===Ea||he===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let se=m(y.image,!1,i.maxTextureSize);se=ve(y,se);let Te=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),we=v(y.internalFormat,Te,ze,y.normalized,y.colorSpace,y.isVideoTexture);be(q,y);let Ce,Xe=y.mipmaps,Ke=y.isVideoTexture!==!0,it=ge.__version===void 0||Y===!0,k=ye.dataReady,Pe=S(y,se);if(y.isDepthTexture)we=E(y.format===$a,y.type),it&&(Ke?t.texStorage2D(a.TEXTURE_2D,1,we,se.width,se.height):t.texImage2D(a.TEXTURE_2D,0,we,se.width,se.height,0,Te,ze,null));else if(y.isDataTexture)if(Xe.length>0){Ke&&it&&t.texStorage2D(a.TEXTURE_2D,Pe,we,Xe[0].width,Xe[0].height);for(let he=0,Ie=Xe.length;he<Ie;he++)Ce=Xe[he],Ke?k&&t.texSubImage2D(a.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Te,ze,Ce.data):t.texImage2D(a.TEXTURE_2D,he,we,Ce.width,Ce.height,0,Te,ze,Ce.data);y.generateMipmaps=!1}else Ke?(it&&t.texStorage2D(a.TEXTURE_2D,Pe,we,se.width,se.height),k&&Q(y,se,Te,ze)):t.texImage2D(a.TEXTURE_2D,0,we,se.width,se.height,0,Te,ze,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&it&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,we,Xe[0].width,Xe[0].height,se.depth);for(let he=0,Ie=Xe.length;he<Ie;he++)if(Ce=Xe[he],y.format!==Bn)if(Te!==null)if(Ke){if(k)if(y.layerUpdates.size>0){let Ue=Dd(Ce.width,Ce.height,y.format,y.type);for(let xe of y.layerUpdates){let Ye=Ce.data.subarray(xe*Ue/Ce.data.BYTES_PER_ELEMENT,(xe+1)*Ue/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,xe,Ce.width,Ce.height,1,Te,Ye)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,se.depth,Te,Ce.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,he,we,Ce.width,Ce.height,se.depth,0,Ce.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,se.depth,Te,ze,Ce.data):t.texImage3D(a.TEXTURE_2D_ARRAY,he,we,Ce.width,Ce.height,se.depth,0,Te,ze,Ce.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ke&&it&&t.texStorage2D(a.TEXTURE_2D,Pe,we,Xe[0].width,Xe[0].height);for(let he=0,Ie=Xe.length;he<Ie;he++)Ce=Xe[he],y.format!==Bn?Te!==null?Ke?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Te,Ce.data):t.compressedTexImage2D(a.TEXTURE_2D,he,we,Ce.width,Ce.height,0,Ce.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?k&&t.texSubImage2D(a.TEXTURE_2D,he,0,0,Ce.width,Ce.height,Te,ze,Ce.data):t.texImage2D(a.TEXTURE_2D,he,we,Ce.width,Ce.height,0,Te,ze,Ce.data)}else if(y.isDataArrayTexture)if(Ke){if(it&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,we,se.width,se.height,se.depth),k)if(y.layerUpdates.size>0){let he=Dd(se.width,se.height,y.format,y.type);for(let Ie of y.layerUpdates){let Ue=se.data.subarray(Ie*he/se.data.BYTES_PER_ELEMENT,(Ie+1)*he/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ie,se.width,se.height,1,Te,ze,Ue)}y.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,ze,se.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,Te,ze,se.data);else if(y.isData3DTexture)Ke?(it&&t.texStorage3D(a.TEXTURE_3D,Pe,we,se.width,se.height,se.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,ze,se.data)):t.texImage3D(a.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,Te,ze,se.data);else if(y.isFramebufferTexture){if(it)if(Ke)t.texStorage2D(a.TEXTURE_2D,Pe,we,se.width,se.height);else{let he=se.width,Ie=se.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(a.TEXTURE_2D,Ue,we,he,Ie,0,Te,ze,null),he>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){let he=a.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),se.parentNode!==he){he.appendChild(se),p.add(y),he.onpaint=Ie=>{let Ue=Ie.changedElements;for(let xe of p)Ue.includes(xe.image)&&(xe.needsUpdate=!0)},he.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,se);else{let Ue=a.RGBA,xe=a.RGBA,Ye=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ue,xe,Ye,se)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ke&&it){let he=me(Xe[0]);t.texStorage2D(a.TEXTURE_2D,Pe,we,he.width,he.height)}for(let he=0,Ie=Xe.length;he<Ie;he++)Ce=Xe[he],Ke?k&&t.texSubImage2D(a.TEXTURE_2D,he,0,0,Te,ze,Ce):t.texImage2D(a.TEXTURE_2D,he,we,Te,ze,Ce);y.generateMipmaps=!1}else if(Ke){if(it){let he=me(se);t.texStorage2D(a.TEXTURE_2D,Pe,we,he.width,he.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Te,ze,se)}else t.texImage2D(a.TEXTURE_2D,0,we,Te,ze,se);h(y)&&x(q),ge.__version=ye.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ee(P,y,z){if(y.image.length!==6)return;let q=Me(P,y),Y=y.source;t.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+z);let ye=n.get(Y);if(Y.version!==ye.__version||q===!0){t.activeTexture(a.TEXTURE0+z);let ge=ut.getPrimaries(ut.workingColorSpace),re=y.colorSpace===Ea?null:ut.getPrimaries(y.colorSpace),se=y.colorSpace===Ea||ge===re?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,ze=y.image[0]&&y.image[0].isDataTexture,we=[];for(let xe=0;xe<6;xe++)!Te&&!ze?we[xe]=m(y.image[xe],!0,i.maxCubemapSize):we[xe]=ze?y.image[xe].image:y.image[xe],we[xe]=ve(y,we[xe]);let Ce=we[0],Xe=r.convert(y.format,y.colorSpace),Ke=r.convert(y.type),it=v(y.internalFormat,Xe,Ke,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Pe=ye.__version===void 0||q===!0,he=Y.dataReady,Ie=S(y,Ce);be(a.TEXTURE_CUBE_MAP,y);let Ue;if(Te){k&&Pe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,it,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){Ue=we[xe].mipmaps;for(let Ye=0;Ye<Ue.length;Ye++){let je=Ue[Ye];y.format!==Bn?Xe!==null?k?he&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,je.width,je.height,Xe,je.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,it,je.width,je.height,0,je.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?he&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,je.width,je.height,Xe,Ke,je.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,it,je.width,je.height,0,Xe,Ke,je.data)}}}else{if(Ue=y.mipmaps,k&&Pe){Ue.length>0&&Ie++;let xe=me(we[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,it,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(ze){k?he&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,we[xe].width,we[xe].height,Xe,Ke,we[xe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,it,we[xe].width,we[xe].height,0,Xe,Ke,we[xe].data);for(let Ye=0;Ye<Ue.length;Ye++){let Tt=Ue[Ye].image[xe].image;k?he&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Tt.width,Tt.height,Xe,Ke,Tt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,it,Tt.width,Tt.height,0,Xe,Ke,Tt.data)}}else{k?he&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Xe,Ke,we[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,it,Xe,Ke,we[xe]);for(let Ye=0;Ye<Ue.length;Ye++){let je=Ue[Ye];k?he&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Xe,Ke,je.image[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,it,Xe,Ke,je.image[xe])}}}h(y)&&x(a.TEXTURE_CUBE_MAP),ye.__version=Y.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function J(P,y,z,q,Y,ye){let ge=r.convert(z.format,z.colorSpace),re=r.convert(z.type),se=v(z.internalFormat,ge,re,z.normalized,z.colorSpace),Te=n.get(y),ze=n.get(z);if(ze.__renderTarget=y,!Te.__hasExternalTextures){let we=Math.max(1,y.width>>ye),Ce=Math.max(1,y.height>>ye);Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?t.texImage3D(Y,ye,se,we,Ce,y.depth,0,ge,re,null):t.texImage2D(Y,ye,se,we,Ce,0,ge,re,null)}t.bindFramebuffer(a.FRAMEBUFFER,P),ee(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,q,Y,ze.__webglTexture,0,de(y)):(Y===a.TEXTURE_2D||Y>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,q,Y,ze.__webglTexture,ye),t.bindFramebuffer(a.FRAMEBUFFER,null)}function B(P,y,z){if(a.bindRenderbuffer(a.RENDERBUFFER,P),y.depthBuffer){let q=y.depthTexture,Y=q&&q.isDepthTexture?q.type:null,ye=E(y.stencilBuffer,Y),ge=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ee(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,de(y),ye,y.width,y.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,de(y),ye,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,ye,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,P)}else{let q=y.textures;for(let Y=0;Y<q.length;Y++){let ye=q[Y],ge=r.convert(ye.format,ye.colorSpace),re=r.convert(ye.type),se=v(ye.internalFormat,ge,re,ye.normalized,ye.colorSpace);ee(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,de(y),se,y.width,y.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,de(y),se,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,se,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function pe(P,y,z){let q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture),be(a.TEXTURE_CUBE_MAP,y.depthTexture);let Te=r.convert(y.depthTexture.format),ze=r.convert(y.depthTexture.type),we;y.depthTexture.format===ra?we=a.DEPTH_COMPONENT24:y.depthTexture.format===$a&&(we=a.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,we,y.width,y.height,0,Te,ze,null)}}else $(y.depthTexture,0);let ye=Y.__webglTexture,ge=de(y),re=q?a.TEXTURE_CUBE_MAP_POSITIVE_X+z:a.TEXTURE_2D,se=y.depthTexture.format===$a?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===ra)ee(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,re,ye,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,se,re,ye,0);else if(y.depthTexture.format===$a)ee(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,se,re,ye,0,ge):a.framebufferTexture2D(a.FRAMEBUFFER,se,re,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(P){let y=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Y)};q.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=q}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)pe(y.__webglFramebuffer[q],P,q);else{let q=P.texture.mipmaps;q&&q.length>0?pe(y.__webglFramebuffer[0],P,0):pe(y.__webglFramebuffer,P,0)}else if(z){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=a.createRenderbuffer(),B(y.__webglDepthbuffer[q],P,!1);else{let Y=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ye=y.__webglDepthbuffer[q];a.bindRenderbuffer(a.RENDERBUFFER,ye),a.framebufferRenderbuffer(a.FRAMEBUFFER,Y,a.RENDERBUFFER,ye)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),B(y.__webglDepthbuffer,P,!1);else{let Y=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ye=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ye),a.framebufferRenderbuffer(a.FRAMEBUFFER,Y,a.RENDERBUFFER,ye)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ae(P,y,z){let q=n.get(P);y!==void 0&&J(q.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),z!==void 0&&fe(P)}function Re(P){let y=P.texture,z=n.get(P),q=n.get(y);P.addEventListener("dispose",g);let Y=P.textures,ye=P.isWebGLCubeRenderTarget===!0,ge=Y.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture()),q.__version=y.version,s.memory.textures++),ye){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let se=0;se<y.mipmaps.length;se++)z.__webglFramebuffer[re][se]=a.createFramebuffer()}else z.__webglFramebuffer[re]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)z.__webglFramebuffer[re]=a.createFramebuffer()}else z.__webglFramebuffer=a.createFramebuffer();if(ge)for(let re=0,se=Y.length;re<se;re++){let Te=n.get(Y[re]);Te.__webglTexture===void 0&&(Te.__webglTexture=a.createTexture(),s.memory.textures++)}if(P.samples>0&&ee(P)===!1){z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<Y.length;re++){let se=Y[re];z.__webglColorRenderbuffer[re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,z.__webglColorRenderbuffer[re]);let Te=r.convert(se.format,se.colorSpace),ze=r.convert(se.type),we=v(se.internalFormat,Te,ze,se.normalized,se.colorSpace,P.isXRRenderTarget===!0),Ce=de(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,we,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.RENDERBUFFER,z.__webglColorRenderbuffer[re])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),B(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ye){t.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture),be(a.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)J(z.__webglFramebuffer[re][se],P,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,se);else J(z.__webglFramebuffer[re],P,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);h(y)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,se=Y.length;re<se;re++){let Te=Y[re],ze=n.get(Te),we=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(we,ze.__webglTexture),be(we,Te),J(z.__webglFramebuffer,P,Te,a.COLOR_ATTACHMENT0+re,we,0),h(Te)&&x(we)}t.unbindTexture()}else{let re=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),be(re,y),y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)J(z.__webglFramebuffer[se],P,y,a.COLOR_ATTACHMENT0,re,se);else J(z.__webglFramebuffer,P,y,a.COLOR_ATTACHMENT0,re,0);h(y)&&x(re),t.unbindTexture()}P.depthBuffer&&fe(P)}function Le(P){let y=P.textures;for(let z=0,q=y.length;z<q;z++){let Y=y[z];if(h(Y)){let ye=M(P),ge=n.get(Y).__webglTexture;t.bindTexture(ye,ge),x(ye),t.unbindTexture()}}}let _e=[],ae=[];function ne(P){if(P.samples>0){if(ee(P)===!1){let y=P.textures,z=P.width,q=P.height,Y=a.COLOR_BUFFER_BIT,ye=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=n.get(P),re=y.length>1;if(re)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let se=P.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Y|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Y|=a.STENCIL_BUFFER_BIT)),re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);let ze=n.get(y[Te]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ze,0)}a.blitFramebuffer(0,0,z,q,0,0,z,q,Y,a.NEAREST),l===!0&&(_e.length=0,ae.length=0,_e.push(a.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(_e.push(ye),ae.push(ye),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ae)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),re)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);let ze=n.get(y[Te]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.TEXTURE_2D,ze,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function de(P){return Math.min(i.maxSamples,P.samples)}function ee(P){let y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(P){let y=s.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function ve(P,y){let z=P.colorSpace,q=P.format,Y=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Rr&&z!==Ea&&(ut.getTransfer(z)===yt?(q!==Bn||Y!==mn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",z)),y}function me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.getTextureUnits=R,this.setTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=le,this.rebindTextures=Ae,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function T_(a,e){function t(n,i=Ea){let r,s=ut.getTransfer(i);if(n===mn)return a.UNSIGNED_BYTE;if(n===Zo)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Sd)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Md)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===_d)return a.BYTE;if(n===yd)return a.SHORT;if(n===Ji)return a.UNSIGNED_SHORT;if(n===Jo)return a.INT;if(n===Yn)return a.UNSIGNED_INT;if(n===On)return a.FLOAT;if(n===Jn)return a.HALF_FLOAT;if(n===Ed)return a.ALPHA;if(n===Ad)return a.RGB;if(n===Bn)return a.RGBA;if(n===ra)return a.DEPTH_COMPONENT;if(n===$a)return a.DEPTH_STENCIL;if(n===Qo)return a.RED;if(n===el)return a.RED_INTEGER;if(n===Wa)return a.RG;if(n===tl)return a.RG_INTEGER;if(n===nl)return a.RGBA_INTEGER;if(n===is||n===rs||n===ss||n===os)if(s===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ss)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===il||n===rl||n===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===ll||n===cl||n===dl||n===ul||n===ls||n===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===ll)return s===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dl)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ls)return r.COMPRESSED_RG11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===fl||n===ml||n===gl||n===bl||n===xl||n===vl||n===_l||n===yl||n===Sl||n===Ml||n===El||n===Al||n===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return s===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Cl||n===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return s===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Il||n===cs||n===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`,$d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:w_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wd=class extends sa{constructor(e,t){super();let n=this,i=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,f=null,b=null,_=typeof XRWebGLBinding<"u",m=new $d,h={},x=t.getContextAttributes(),M=null,v=null,E=[],S=[],T=new $e,g=null,A=null,C=new Qt;C.viewport=new Pt;let I=new Qt;I.viewport=new Pt;let N=[C,I],D=new $o,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=E[j];return Q===void 0&&(Q=new ki,E[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=E[j];return Q===void 0&&(Q=new ki,E[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=E[j];return Q===void 0&&(Q=new ki,E[j]=Q),Q.getHandSpace()};function F(j){let Q=S.indexOf(j.inputSource);if(Q===-1)return;let ue=E[Q];ue!==void 0&&(ue.update(j.inputSource,j.frame,c||s),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",$);for(let j=0;j<E.length;j++){let Q=S[j];Q!==null&&(S[j]=null,E[j].disconnect(Q))}R=null,U=null,m.reset();for(let j in h)delete h[j];if(e.setRenderTarget(M),f=null,u=null,p=null,i=null,v=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(T.width,T.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ee=null,J=null;x.depth&&(J=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?$a:ra,Ee=x.stencil?Zi:Yn);let B={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(B),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new fn(u.textureWidth,u.textureHeight,{format:Bn,type:mn,depthTexture:new za(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new fn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(j){for(let Q=0;Q<j.removed.length;Q++){let ue=j.removed[Q],Ee=S.indexOf(ue);Ee>=0&&(S[Ee]=null,E[Ee].disconnect(ue))}for(let Q=0;Q<j.added.length;Q++){let ue=j.added[Q],Ee=S.indexOf(ue);if(Ee===-1){for(let B=0;B<E.length;B++)if(B>=S.length){S.push(ue),Ee=B;break}else if(S[B]===null){S[B]=ue,Ee=B;break}if(Ee===-1)break}let J=E[Ee];J&&J.connect(ue)}}let W=new O,te=new O;function le(j,Q,ue){W.setFromMatrixPosition(Q.matrixWorld),te.setFromMatrixPosition(ue.matrixWorld);let Ee=W.distanceTo(te),J=Q.projectionMatrix.elements,B=ue.projectionMatrix.elements,pe=J[14]/(J[10]-1),fe=J[14]/(J[10]+1),Ae=(J[9]+1)/J[5],Re=(J[9]-1)/J[5],Le=(J[8]-1)/J[0],_e=(B[8]+1)/B[0],ae=pe*Le,ne=pe*_e,de=Ee/(-Le+_e),ee=de*-Le;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ee),j.translateZ(de),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),J[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let L=pe+de,ve=fe+de,me=ae-ee,P=ne+(Ee-ee),y=Ae*fe/ve*L,z=Re*fe/ve*L;j.projectionMatrix.makePerspective(me,P,y,z,L,ve),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Se(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,ue=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),D.near=I.near=C.near=Q,D.far=I.far=C.far=ue,(R!==D.near||U!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),R=D.near,U=D.far),D.layers.mask=j.layers.mask|6,C.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let Ee=j.parent,J=D.cameras;Se(D,Ee);for(let B=0;B<J.length;B++)Se(J[B],Ee);J.length===2?le(D,C,I):D.projectionMatrix.copy(C.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),V(j,D,Ee)};function V(j,Q,ue){ue===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=mo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(j){return h[j]};let ce=null;function be(j,Q){if(d=Q.getViewerPose(c||s),b=Q,d!==null){let ue=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ee=!1;ue.length!==D.cameras.length&&(D.cameras.length=0,Ee=!0);for(let fe=0;fe<ue.length;fe++){let Ae=ue[fe],Re=null;if(f!==null)Re=f.getViewport(Ae);else{let _e=p.getViewSubImage(u,Ae);Re=_e.viewport,fe===0&&(e.setRenderTargetTextures(v,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(v))}let Le=N[fe];Le===void 0&&(Le=new Qt,Le.layers.enable(fe),Le.viewport=new Pt,N[fe]=Le),Le.matrix.fromArray(Ae.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ae.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Re.x,Re.y,Re.width,Re.height),fe===0&&(D.matrix.copy(Le.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ee===!0&&D.cameras.push(Le)}let J=i.enabledFeatures;if(J&&J.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let fe=p.getDepthInformation(ue[0]);fe&&fe.isValid&&fe.texture&&m.init(fe,i.renderState)}if(J&&J.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let fe=0;fe<ue.length;fe++){let Ae=ue[fe].camera;if(Ae){let Re=h[Ae];Re||(Re=new Hr,h[Ae]=Re);let Le=p.getCameraImage(Ae);Re.sourceTexture=Le}}}}for(let ue=0;ue<E.length;ue++){let Ee=S[ue],J=E[ue];Ee!==null&&J!==void 0&&J.update(Ee,Q,c||s)}ce&&ce(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),b=null}let Me=new Bp;Me.setAnimationLoop(be),this.setAnimationLoop=function(j){ce=j},this.dispose=function(){}}},R_=new St,jp=new nt;jp.set(-1,0,0,0,1,0,0,0,1);function P_(a,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Rd(a)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,x,M,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),p(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),u(m,h),h.isMeshPhysicalMaterial&&f(m,h,v)):h.isMeshMatcapMaterial?(r(m,h),b(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,x,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===on&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===on&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let x=e.get(h),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jp),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=M*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===on&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I_(a,e,t,n){let i={},r={},s=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let S=E.program;n.uniformBlockBinding(v,S)}function c(v,E){let S=i[v.id];S===void 0&&(m(v),S=d(v),i[v.id]=S,v.addEventListener("dispose",x));let T=E.program;n.updateUBOMapping(v,T);let g=e.render.frame;r[v.id]!==g&&(u(v),r[v.id]=g)}function d(v){let E=p();v.__bindingPointIndex=E;let S=a.createBuffer(),T=v.__size,g=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,T,g),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,E,S),S}function p(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=i[v.id],S=v.uniforms,T=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,E);for(let g=0,A=S.length;g<A;g++){let C=S[g];if(Array.isArray(C))for(let I=0,N=C.length;I<N;I++)f(C[I],g,I,T);else f(C,g,0,T)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(v,E,S,T){if(_(v,E,S,T)===!0){let g=v.__offset,A=v.value;if(Array.isArray(A)){let C=0;for(let I=0;I<A.length;I++){let N=A[I],D=h(N);b(N,v.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(A,v.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,g,v.__data)}}function b(v,E,S){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,S)}function _(v,E,S,T){let g=v.value,A=E+"_"+S;if(T[A]===void 0)return typeof g=="number"||typeof g=="boolean"?T[A]=g:ArrayBuffer.isView(g)?T[A]=g.slice():T[A]=g.clone(),!0;{let C=T[A];if(typeof g=="number"||typeof g=="boolean"){if(C!==g)return T[A]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(C.equals(g)===!1)return C.copy(g),!0}}return!1}function m(v){let E=v.uniforms,S=0,T=16;for(let A=0,C=E.length;A<C;A++){let I=Array.isArray(E[A])?E[A]:[E[A]];for(let N=0,D=I.length;N<D;N++){let R=I[N],U=Array.isArray(R.value)?R.value:[R.value];for(let F=0,H=U.length;F<H;F++){let $=U[F],W=h($),te=S%T,le=te%W.boundary,Se=te+le;S+=le,Se!==0&&T-Se<W.storage&&(S+=T-Se),R.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=W.storage}}}let g=S%T;return g>0&&(S+=T-g),v.__size=S,v.__cache={},this}function h(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",v),E}function x(v){let E=v.target;E.removeEventListener("dispose",x);let S=s.indexOf(E.__bindingPointIndex);s.splice(S,1),a.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function M(){for(let v in i)a.deleteBuffer(i[v]);s=[],i={},r={}}return{bind:l,update:c,dispose:M}}var D_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ua=null;function L_(){return ua===null&&(ua=new zr(D_,16,16,Wa,Jn),ua.name="DFG_LUT",ua.minFilter=Wt,ua.magFilter=Wt,ua.wrapS=ia,ua.wrapT=ia,ua.generateMipmaps=!1,ua.needsUpdate=!0),ua}var Gl=class{constructor(e={}){let{canvas:t=cp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=s;let _=f,m=new Set([nl,tl,el]),h=new Set([mn,Yn,Ji,Zi,Zo,Ko]),x=new Uint32Array(4),M=new Int32Array(4),v=new O,E=null,S=null,T=[],g=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,N=null,D=null,R=null,U=null;this._outputColorSpace=jt;let F=0,H=0,$=null,W=-1,te=null,le=new Pt,Se=new Pt,V=null,ce=new ke(0),be=0,Me=t.width,j=t.height,Q=1,ue=null,Ee=null,J=new Pt(0,0,Me,j),B=new Pt(0,0,Me,j),pe=!1,fe=new ji,Ae=!1,Re=!1,Le=new St,_e=new O,ae=new Pt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function ee(){return $===null?Q:1}let L=n;function ve(w,G){return t.getContext(w,G)}let me,P,y,z,q,Y,ye,ge,re,se,Te,ze,we,Ce,Xe,Ke,it,k,Pe,he,Ie,Ue,xe;try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),L===null){let G="webgl2";if(L=ve(G,w),L===null)throw ve(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(w){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),et("WebGLRenderer: "+w.message),w}function Ye(){me=new Gx(L),me.init(),Ie=new T_(L,me),P=new Px(L,me,e,Ie),y=new E_(L,me),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),D=L.createFramebuffer(),R=L.createFramebuffer(),U=L.createFramebuffer(),z=new Vx(L),q=new d_,Y=new A_(L,me,y,q,P,Ie,z),ye=new zx(C),ge=new q0(L),Ue=new Cx(L,ge),re=new Hx(L,ge,z,Ue),se=new qx(L,re,ge,Ue,z),k=new jx(L,P,Y),Xe=new Ix(q),Te=new c_(C,ye,me,P,Ue,Xe),ze=new P_(C,q),we=new h_,Ce=new x_(me),it=new wx(C,ye,y,se,b,l),Ke=new M_(C,se,P),xe=new I_(L,z,P,y),Pe=new Rx(L,me,z),he=new kx(L,me,z),z.programs=Te.programs,C.capabilities=P,C.extensions=me,C.properties=q,C.renderLists=we,C.shadowMap=Ke,C.state=y,C.info=z}_!==mn&&(A=new Wx(_,t.width,t.height,o,i,r));let je=new Wd(C,L);this.xr=je,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(Me,j,!1))},this.getSize=function(w){return w.set(Me,j)},this.setSize=function(w,G,ie=!0){if(je.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,j=G,t.width=Math.floor(w*Q),t.height=Math.floor(G*Q),ie===!0&&(t.style.width=w+"px",t.style.height=G+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Me*Q,j*Q).floor()},this.setDrawingBufferSize=function(w,G,ie){Me=w,j=G,Q=ie,t.width=Math.floor(w*ie),t.height=Math.floor(G*ie),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(_===mn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(le)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,G,ie,Z){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,G,ie,Z),y.viewport(le.copy(J).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,G,ie,Z){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,G,ie,Z),y.scissor(Se.copy(B).multiplyScalar(Q).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){y.setScissorTest(pe=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){Ee=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,ie=!0){let Z=0;if(w){let K=!1;if($!==null){let Fe=$.texture.format;K=m.has(Fe)}if(K){let Fe=$.texture.type,Be=h.has(Fe),Ne=it.getClearColor(),Ge=it.getClearAlpha(),qe=Ne.r,rt=Ne.g,ct=Ne.b;Be?(x[0]=qe,x[1]=rt,x[2]=ct,x[3]=Ge,L.clearBufferuiv(L.COLOR,0,x)):(M[0]=qe,M[1]=rt,M[2]=ct,M[3]=Ge,L.clearBufferiv(L.COLOR,0,M))}else Z|=L.COLOR_BUFFER_BIT}G&&(Z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),it.dispose(),we.dispose(),Ce.dispose(),q.dispose(),ye.dispose(),se.dispose(),Ue.dispose(),xe.dispose(),Te.dispose(),je.dispose(),je.removeEventListener("sessionstart",ju),je.removeEventListener("sessionend",qu),ni.stop()};function Tt(w){w.preventDefault(),wd("WebGLRenderer: Context Lost."),I=!0}function vt(){wd("WebGLRenderer: Context Restored."),I=!1;let w=z.autoReset,G=Ke.enabled,ie=Ke.autoUpdate,Z=Ke.needsUpdate,K=Ke.type;Ye(),z.autoReset=w,Ke.enabled=G,Ke.autoUpdate=ie,Ke.needsUpdate=Z,Ke.type=K}function Hn(w){et("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ta(w){let G=w.target;G.removeEventListener("dispose",ta),km(G)}function km(w){Vm(w),q.remove(w)}function Vm(w){let G=q.get(w).programs;G!==void 0&&(G.forEach(function(ie){Te.releaseProgram(ie)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,ie,Z,K,Fe){G===null&&(G=ne);let Be=K.isMesh&&K.matrixWorld.determinantAffine()<0,Ne=$m(w,G,ie,Z,K);y.setMaterial(Z,Be);let Ge=ie.index,qe=1;if(Z.wireframe===!0){if(Ge=re.getWireframeAttribute(ie),Ge===void 0)return;qe=2}let rt=ie.drawRange,ct=ie.attributes.position,He=rt.start*qe,_t=(rt.start+rt.count)*qe;Fe!==null&&(He=Math.max(He,Fe.start*qe),_t=Math.min(_t,(Fe.start+Fe.count)*qe)),Ge!==null?(He=Math.max(He,0),_t=Math.min(_t,Ge.count)):ct!=null&&(He=Math.max(He,0),_t=Math.min(_t,ct.count));let Bt=_t-He;if(Bt<0||Bt===1/0)return;Ue.setup(K,Z,Ne,ie,Ge);let Ct,At=Pe;if(Ge!==null&&(Ct=ge.get(Ge),At=he,At.setIndex(Ct)),K.isMesh)Z.wireframe===!0?(y.setLineWidth(Z.wireframeLinewidth*ee()),At.setMode(L.LINES)):At.setMode(L.TRIANGLES);else if(K.isLine){let Jt=Z.linewidth;Jt===void 0&&(Jt=1),y.setLineWidth(Jt*ee()),K.isLineSegments?At.setMode(L.LINES):K.isLineLoop?At.setMode(L.LINE_LOOP):At.setMode(L.LINE_STRIP)}else K.isPoints?At.setMode(L.POINTS):K.isSprite&&At.setMode(L.TRIANGLES);if(K.isBatchedMesh)if(me.get("WEBGL_multi_draw"))At.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Jt=K._multiDrawStarts,Oe=K._multiDrawCounts,rn=K._multiDrawCount,mt=Ge?ge.get(Ge).bytesPerElement:1,In=q.get(Z).currentProgram.getUniforms();for(let na=0;na<rn;na++)In.setValue(L,"_gl_DrawID",na),At.render(Jt[na]/mt,Oe[na])}else if(K.isInstancedMesh)At.renderInstances(He,Bt,K.count);else if(ie.isInstancedBufferGeometry){let Jt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Oe=Math.min(ie.instanceCount,Jt);At.renderInstances(He,Bt,Oe)}else At.render(He,Bt)};function Vu(w,G,ie,Z){N!==null&&w.isNodeMaterial&&N.setObject(Z,w),Ae===!0&&Xe.setState(w,ie,!1),w.transparent===!0&&w.side===Un&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,Ns(w,G,Z),w.side=Va,w.needsUpdate=!0,Ns(w,G,Z),w.side=Un):Ns(w,G,Z)}this.compile=function(w,G,ie=null){ie===null&&(ie=w),N!==null&&N.renderStart(w,G,ie),S=Ce.get(ie),S.init(G),g.push(S),ie.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),w!==ie&&w.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),Re=this.localClippingEnabled,Ae=Xe.init(this.clippingPlanes,Re),Ae===!0&&Xe.setGlobalState(this.clippingPlanes,G),N!==null&&Ke.render(S.state.shadowsArray,ie,G);let Z=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Fe=K.material;if(Fe)if(Array.isArray(Fe))for(let Be=0;Be<Fe.length;Be++){let Ne=Fe[Be];Vu(Ne,ie,G,K),Z.add(Ne)}else Vu(Fe,ie,G,K),Z.add(Fe)}),S=g.pop(),N!==null&&N.renderEnd(),Z},this.compileAsync=function(w,G,ie=null){let Z=this.compile(w,G,ie);return new Promise(K=>{function Fe(){if(Z.forEach(function(Be){let Ge=q.get(Be).currentProgram;(Ge===void 0||Ge.isReady())&&Z.delete(Be)}),Z.size===0){K(w);return}setTimeout(Fe,10)}me.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ec=null;function jm(w){Ec&&Ec(w)}function ju(){ni.stop()}function qu(){ni.start()}let ni=new Bp;ni.setAnimationLoop(jm),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){Ec=w,je.setAnimationLoop(w),w===null?ni.stop():ni.start()},je.addEventListener("sessionstart",ju),je.addEventListener("sessionend",qu),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(w,G);let ie=je.enabled===!0&&je.isPresenting===!0,Z=A!==null&&($===null||ie)&&A.begin(C,$);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(G),G=je.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,G,$),S=Ce.get(w,g.length),S.init(G),S.state.textureUnits=Y.getTextureUnits(),g.push(S),Le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),fe.setFromProjectionMatrix(Le,$n,G.reversedDepth),Re=this.localClippingEnabled,Ae=Xe.init(this.clippingPlanes,Re),E=we.get(w,T.length),E.init(),T.push(E),je.enabled===!0&&je.isPresenting===!0){let Be=C.xr.getDepthSensingMesh();Be!==null&&Ac(Be,G,-1/0,C.sortObjects)}Ac(w,G,0,C.sortObjects),E.finish(),N!==null&&N.updateLights(S.state.lightsArray),C.sortObjects===!0&&E.sort(ue,Ee),de=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,de&&it.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Xe.beginShadows();let K=S.state.shadowsArray;if(Ke.render(K,w,G),Ae===!0&&Xe.endShadows(),(Z&&A.hasRenderPass())===!1){let Be=E.opaque,Ne=E.transmissive;if(S.setupLights(),G.isArrayCamera){let Ge=G.cameras;if(Ne.length>0)for(let qe=0,rt=Ge.length;qe<rt;qe++){let ct=Ge[qe];Wu(Be,Ne,w,ct)}de&&it.render(w);for(let qe=0,rt=Ge.length;qe<rt;qe++){let ct=Ge[qe];$u(E,w,ct,ct.viewport)}}else Ne.length>0&&Wu(Be,Ne,w,G),de&&it.render(w),$u(E,w,G)}$!==null&&H===0&&(Y.updateMultisampleRenderTarget($),Y.updateRenderTargetMipmap($)),Z&&A.end(C),w.isScene===!0&&w.onAfterRender(C,w,G),Ue.resetDefaultState(),W=-1,te=null,g.pop(),g.length>0?(S=g[g.length-1],Y.setTextureUnits(S.state.textureUnits),Ae===!0&&Xe.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,N!==null&&N.renderEnd()};function Ac(w,G,ie,Z){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)ie=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(fe)){Z&&ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Le);let Be=se.update(w),Ne=w.material;Ne.visible&&E.push(w,Be,Ne,ie,ae.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(fe))){let Be=se.update(w),Ne=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ae.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),ae.copy(Be.boundingSphere.center)),ae.applyMatrix4(w.matrixWorld).applyMatrix4(Le)),Array.isArray(Ne)){let Ge=Be.groups;for(let qe=0,rt=Ge.length;qe<rt;qe++){let ct=Ge[qe],He=Ne[ct.materialIndex];He&&He.visible&&E.push(w,Be,He,ie,ae.z,ct,G)}}else Ne.visible&&E.push(w,Be,Ne,ie,ae.z,null,G)}}let Fe=w.children;for(let Be=0,Ne=Fe.length;Be<Ne;Be++)Ac(Fe[Be],G,ie,Z)}function $u(w,G,ie,Z){let{opaque:K,transmissive:Fe,transparent:Be}=w;S.setupLightsView(ie),Ae===!0&&Xe.setGlobalState(C.clippingPlanes,ie),Z&&y.viewport(le.copy(Z)),K.length>0&&Ls(K,G,ie),Fe.length>0&&Ls(Fe,G,ie),Be.length>0&&Ls(Be,G,ie),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Wu(w,G,ie,Z){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let He=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new fn(1,1,{generateMipmaps:!0,type:He?Jn:mn,minFilter:qa,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Fe=S.state.transmissionRenderTarget[Z.id],Be=Z.viewport||le;Fe.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);let Ne=C.getRenderTarget(),Ge=C.getActiveCubeFace(),qe=C.getActiveMipmapLevel();C.setRenderTarget(Fe),C.getClearColor(ce),be=C.getClearAlpha(),be<1&&C.setClearColor(16777215,.5),C.clear(),de&&it.render(ie);let rt=C.toneMapping;C.toneMapping=Xn;let ct=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),Ae===!0&&Xe.setGlobalState(C.clippingPlanes,Z),Ls(w,ie,Z),Y.updateMultisampleRenderTarget(Fe),Y.updateRenderTargetMipmap(Fe),me.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let _t=0,Bt=G.length;_t<Bt;_t++){let Ct=G[_t],{object:At,geometry:Jt,material:Oe,group:rn}=Ct;if(Oe.side===Un&&At.layers.test(Z.layers)){let mt=Oe.side;Oe.side=on,Oe.needsUpdate=!0,Xu(At,ie,Z,Jt,Oe,rn),Oe.side=mt,Oe.needsUpdate=!0,He=!0}}He===!0&&(Y.updateMultisampleRenderTarget(Fe),Y.updateRenderTargetMipmap(Fe))}C.setRenderTarget(Ne,Ge,qe),C.setClearColor(ce,be),ct!==void 0&&(Z.viewport=ct),C.toneMapping=rt}function Ls(w,G,ie){let Z=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Fe=w.length;K<Fe;K++){let Be=w[K],{object:Ne,geometry:Ge,group:qe}=Be,rt=Be.material;rt.allowOverride===!0&&Z!==null&&(rt=Z),Ne.layers.test(ie.layers)&&Xu(Ne,G,ie,Ge,rt,qe)}}function Xu(w,G,ie,Z,K,Fe){N!==null&&K.isNodeMaterial&&N.setObject(w,K),w.onBeforeRender(C,G,ie,Z,K,Fe),w.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(C,G,ie,Z,w,Fe),K.transparent===!0&&K.side===Un&&K.forceSinglePass===!1?(K.side=on,K.needsUpdate=!0,C.renderBufferDirect(ie,G,Z,K,w,Fe),K.side=Va,K.needsUpdate=!0,C.renderBufferDirect(ie,G,Z,K,w,Fe),K.side=Un):C.renderBufferDirect(ie,G,Z,K,w,Fe),w.onAfterRender(C,G,ie,Z,K,Fe)}function Ns(w,G,ie){G.isScene!==!0&&(G=ne);let Z=q.get(w),K=S.state.lights,Fe=S.state.shadowsArray,Be=K.state.version,Ne=Te.getParameters(w,K.state,Fe,G,ie,S.state.lightProbeGridArray),Ge=Te.getProgramCacheKey(Ne),qe=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=ye.get(w.envMap||Z.environment,rt),Z.envMapRotation=Z.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,qe===void 0&&(w.addEventListener("dispose",ta),qe=new Map,Z.programs=qe);let ct=qe.get(Ge);if(ct!==void 0){if(Z.currentProgram===ct&&Z.lightsStateVersion===Be)return Ju(w,Ne),ct}else Ne.uniforms=Te.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,ie,Ne),w.onBeforeCompile(Ne,C),ct=Te.acquireProgram(Ne,Ge),qe.set(Ge,ct),Z.uniforms=Ne.uniforms;let He=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Xe.uniform),Ju(w,Ne),Z.needsLights=Xm(w),Z.lightsStateVersion=Be,Z.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.sunLights.value=K.state.sun,He.sunLightShadows.value=K.state.sunShadow,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.sunShadowMatrix.value=K.state.sunShadowMatrix,He.sunShadowCascade.value=K.state.sunShadowCascade,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=ct,Z.uniformsList=null,ct}function Yu(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=er.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Ju(w,G){let ie=q.get(w);ie.outputColorSpace=G.outputColorSpace,ie.batching=G.batching,ie.batchingColor=G.batchingColor,ie.instancing=G.instancing,ie.instancingColor=G.instancingColor,ie.instancingMorph=G.instancingMorph,ie.skinning=G.skinning,ie.morphTargets=G.morphTargets,ie.morphNormals=G.morphNormals,ie.morphColors=G.morphColors,ie.morphTargetsCount=G.morphTargetsCount,ie.numClippingPlanes=G.numClippingPlanes,ie.numIntersection=G.numClipIntersection,ie.vertexAlphas=G.vertexAlphas,ie.vertexTangents=G.vertexTangents,ie.toneMapping=G.toneMapping}function qm(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(G.matrixWorld);for(let ie=0,Z=w.length;ie<Z;ie++){let K=w[ie];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function $m(w,G,ie,Z,K){G.isScene!==!0&&(G=ne),Y.resetTextureUnits();let Fe=G.fog,Be=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Ne=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ut.workingColorSpace,Ge=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,qe=ye.get(Z.envMap||Be,Ge),rt=Z.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ct=!!ie.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!ie.morphAttributes.position,_t=!!ie.morphAttributes.normal,Bt=!!ie.morphAttributes.color,Ct=Xn;Z.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ct=C.toneMapping);let At=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Jt=At!==void 0?At.length:0,Oe=q.get(Z),rn=S.state.lights;if(Ae===!0&&(Re===!0||w!==te)){let wt=w===te&&Z.id===W;Xe.setState(Z,w,wt)}let mt=!1;Z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==rn.state.version||Oe.outputColorSpace!==Ne||K.isBatchedMesh&&Oe.batching===!1||!K.isBatchedMesh&&Oe.batching===!0||K.isBatchedMesh&&Oe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Oe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Oe.instancing===!1||!K.isInstancedMesh&&Oe.instancing===!0||K.isSkinnedMesh&&Oe.skinning===!1||!K.isSkinnedMesh&&Oe.skinning===!0||K.isInstancedMesh&&Oe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Oe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Oe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Oe.instancingMorph===!1&&K.morphTexture!==null||Oe.envMap!==qe||Z.fog===!0&&Oe.fog!==Fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Xe.numPlanes||Oe.numIntersection!==Xe.numIntersection)||Oe.vertexAlphas!==rt||Oe.vertexTangents!==ct||Oe.morphTargets!==He||Oe.morphNormals!==_t||Oe.morphColors!==Bt||Oe.toneMapping!==Ct||Oe.morphTargetsCount!==Jt||!!Oe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Oe.__version=Z.version);let In=Oe.currentProgram;mt===!0&&(In=Ns(Z,G,K),N&&Z.isNodeMaterial&&N.onUpdateProgram(Z,In,Oe));let na=!1,Ra=!1,_i=!1,Et=In.getUniforms(),Ft=Oe.uniforms;if(y.useProgram(In.program)&&(na=!0,Ra=!0,_i=!0),Z.id!==W&&(W=Z.id,Ra=!0),Oe.needsLights){let wt=qm(S.state.lightProbeGridArray,K);Oe.lightProbeGrid!==wt&&(Oe.lightProbeGrid=wt,Ra=!0)}if(na||te!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Et.setValue(L,"projectionMatrix",w.projectionMatrix),Et.setValue(L,"viewMatrix",w.matrixWorldInverse);let Ia=Et.map.cameraPosition;Ia!==void 0&&Ia.setValue(L,_e.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Et.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),te!==w&&(te=w,Ra=!0,_i=!0)}if(Oe.needsLights&&(rn.state.sunShadowMap.length>0&&Et.setValue(L,"sunShadowMap",rn.state.sunShadowMap,Y),rn.state.directionalShadowMap.length>0&&Et.setValue(L,"directionalShadowMap",rn.state.directionalShadowMap,Y),rn.state.spotShadowMap.length>0&&Et.setValue(L,"spotShadowMap",rn.state.spotShadowMap,Y),rn.state.pointShadowMap.length>0&&Et.setValue(L,"pointShadowMap",rn.state.pointShadowMap,Y)),K.isSkinnedMesh){Et.setOptional(L,K,"bindMatrix"),Et.setOptional(L,K,"bindMatrixInverse");let wt=K.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Et.setValue(L,"boneTexture",wt.boneTexture,Y))}K.isBatchedMesh&&(Et.setOptional(L,K,"batchingTexture"),Et.setValue(L,"batchingTexture",K._matricesTexture,Y),Et.setOptional(L,K,"batchingIdTexture"),Et.setValue(L,"batchingIdTexture",K._indirectTexture,Y),Et.setOptional(L,K,"batchingColorTexture"),K._colorsTexture!==null&&Et.setValue(L,"batchingColorTexture",K._colorsTexture,Y));let Pa=ie.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0)&&k.update(K,ie,In),(Ra||Oe.receiveShadow!==K.receiveShadow)&&(Oe.receiveShadow=K.receiveShadow,Et.setValue(L,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(Ft.envMapIntensity.value=G.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=L_()),Ra){if(Et.setValue(L,"toneMappingExposure",C.toneMappingExposure),Oe.needsLights&&Wm(Ft,_i),Fe&&Z.fog===!0&&ze.refreshFogUniforms(Ft,Fe),ze.refreshMaterialUniforms(Ft,Z,Q,j,S.state.transmissionRenderTarget[w.id]),Oe.needsLights&&Oe.lightProbeGrid){let wt=Oe.lightProbeGrid;Ft.probesSH.value=wt.texture,Ft.probesMin.value.copy(wt.boundingBox.min),Ft.probesMax.value.copy(wt.boundingBox.max),Ft.probesResolution.value.copy(wt.resolution)}er.upload(L,Yu(Oe),Ft,Y)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(er.upload(L,Yu(Oe),Ft,Y),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Et.setValue(L,"center",K.center),Et.setValue(L,"modelViewMatrix",K.modelViewMatrix),Et.setValue(L,"normalMatrix",K.normalMatrix),Et.setValue(L,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let wt=Z.uniformsGroups;for(let Ia=0,yi=wt.length;Ia<yi;Ia++){let Ku=wt[Ia];xe.update(Ku,In),xe.bind(Ku,In)}}return In}function Wm(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Xm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(w,G,ie){let Z=q.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=G,q.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ie,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let ie=q.get(w);ie.__webglFramebuffer=G,ie.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,ie=0){$=w,F=G,H=ie;let Z=null,K=!1,Fe=!1;if(w){let Ne=q.get(w);if(Ne.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,Ne.__webglFramebuffer),le.copy(w.viewport),Se.copy(w.scissor),V=w.scissorTest,y.viewport(le),y.scissor(Se),y.setScissorTest(V),W=-1;return}else if(Ne.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(Ne.__hasExternalTextures)Y.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let rt=w.depthTexture;if(Ne.__boundDepthTexture!==rt){if(rt!==null&&q.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}let Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Fe=!0);let qe=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?Z=qe[G][ie]:Z=qe[G],K=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?Z=q.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[ie]:Z=qe,le.copy(w.viewport),Se.copy(w.scissor),V=w.scissorTest}else le.copy(J).multiplyScalar(Q).floor(),Se.copy(B).multiplyScalar(Q).floor(),V=pe;if(ie!==0&&(Z=D),y.bindFramebuffer(L.FRAMEBUFFER,Z)&&y.drawBuffers(w,Z),y.viewport(le),y.scissor(Se),y.setScissorTest(V),K){let Ne=q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,ie)}else if(Fe){let Ne=G;for(let Ge=0;Ge<w.textures.length;Ge++){let qe=q.get(w.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,ie,Ne)}}else if(w!==null&&ie!==0){let Ne=q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ne.__webglTexture,ie)}W=-1};function Zu(w){let G=q.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=P.textureFormatReadable(w.format),G.__typeReadable=P.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,ie,Z,K,Fe,Be,Ne=0){if(!(w&&w.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){y.bindFramebuffer(L.FRAMEBUFFER,Ge);try{let qe=w.textures[Ne],rt=qe.format,ct=qe.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ne);let He=Zu(qe);if(He.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Z&&ie>=0&&ie<=w.height-K&&L.readPixels(G,ie,Z,K,Ie.convert(rt),Ie.convert(ct),Fe)}finally{let qe=$!==null?q.get($).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(w,G,ie,Z,K,Fe,Be,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge)if(G>=0&&G<=w.width-Z&&ie>=0&&ie<=w.height-K){y.bindFramebuffer(L.FRAMEBUFFER,Ge);let qe=w.textures[Ne],rt=qe.format,ct=qe.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ne);let He=Zu(qe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,_t),L.bufferData(L.PIXEL_PACK_BUFFER,Fe.byteLength,L.STREAM_READ),L.readPixels(G,ie,Z,K,Ie.convert(rt),Ie.convert(ct),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Bt=$!==null?q.get($).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Bt);let Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await up(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,_t),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Fe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(_t),L.deleteSync(Ct),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,ie=0){let Z=Math.pow(2,-ie),K=Math.floor(w.image.width*Z),Fe=Math.floor(w.image.height*Z),Be=G!==null?G.x:0,Ne=G!==null?G.y:0;Y.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,ie,0,0,Be,Ne,K,Fe),y.unbindTexture()},this.copyTextureToTexture=function(w,G,ie=null,Z=null,K=0,Fe=0){let Be,Ne,Ge,qe,rt,ct,He,_t,Bt,Ct=w.isCompressedTexture?w.mipmaps[Fe]:w.image;if(ie!==null)Be=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,Ge=ie.isBox3?ie.max.z-ie.min.z:1,qe=ie.min.x,rt=ie.min.y,ct=ie.isBox3?ie.min.z:0;else{let Ft=Math.pow(2,-K);Be=Math.floor(Ct.width*Ft),Ne=Math.floor(Ct.height*Ft),w.isDataArrayTexture?Ge=Ct.depth:w.isData3DTexture?Ge=Math.floor(Ct.depth*Ft):Ge=1,qe=0,rt=0,ct=0}Z!==null?(He=Z.x,_t=Z.y,Bt=Z.z):(He=0,_t=0,Bt=0);let At=Ie.convert(G.format),Jt=Ie.convert(G.type),Oe;G.isData3DTexture?(Y.setTexture3D(G,0),Oe=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Y.setTexture2DArray(G,0),Oe=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(G,0),Oe=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);let rn=y.getParameter(L.UNPACK_ROW_LENGTH),mt=y.getParameter(L.UNPACK_IMAGE_HEIGHT),In=y.getParameter(L.UNPACK_SKIP_PIXELS),na=y.getParameter(L.UNPACK_SKIP_ROWS),Ra=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),y.pixelStorei(L.UNPACK_SKIP_ROWS,rt),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ct);let _i=w.isDataArrayTexture||w.isData3DTexture,Et=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let Ft=q.get(w),Pa=q.get(G),wt=q.get(Ft.__renderTarget),Ia=q.get(Pa.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,wt.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ia.__webglFramebuffer);for(let yi=0;yi<Ge;yi++)_i&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(w).__webglTexture,K,ct+yi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(G).__webglTexture,Fe,Bt+yi)),L.blitFramebuffer(qe,rt,Be,Ne,He,_t,Be,Ne,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||q.has(w)){let Ft=q.get(w),Pa=q.get(G);y.bindFramebuffer(L.READ_FRAMEBUFFER,R),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,U);for(let wt=0;wt<Ge;wt++)_i?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,K,ct+wt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,K),Et?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pa.__webglTexture,Fe,Bt+wt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pa.__webglTexture,Fe),K!==0?L.blitFramebuffer(qe,rt,Be,Ne,He,_t,Be,Ne,L.COLOR_BUFFER_BIT,L.NEAREST):Et?L.copyTexSubImage3D(Oe,Fe,He,_t,Bt+wt,qe,rt,Be,Ne):L.copyTexSubImage2D(Oe,Fe,He,_t,qe,rt,Be,Ne);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Et?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Oe,Fe,He,_t,Bt,Be,Ne,Ge,At,Jt,Ct.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(Oe,Fe,He,_t,Bt,Be,Ne,Ge,At,Ct.data):L.texSubImage3D(Oe,Fe,He,_t,Bt,Be,Ne,Ge,At,Jt,Ct):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Fe,He,_t,Be,Ne,At,Jt,Ct.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Fe,He,_t,Ct.width,Ct.height,At,Ct.data):L.texSubImage2D(L.TEXTURE_2D,Fe,He,_t,Be,Ne,At,Jt,Ct);y.pixelStorei(L.UNPACK_ROW_LENGTH,rn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),y.pixelStorei(L.UNPACK_SKIP_PIXELS,In),y.pixelStorei(L.UNPACK_SKIP_ROWS,na),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Ra),Fe===0&&G.generateMipmaps&&L.generateMipmap(Oe),y.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){F=0,H=0,$=null,y.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Vl=a=>typeof matchMedia=="function"?matchMedia(a):{matches:!1,addEventListener(){}},nr=Vl("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&Vl("(hover: none)").matches,XM=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,YM=Vl("(display-mode: standalone)").matches||Vl("(display-mode: fullscreen)").matches||navigator.standalone===!0,qp=new URLSearchParams(location.search),N_={aces:"aces",agx:"agx",neutral:"neutral"},jl={variante:qp.get("visual")==="nuevo"?"nuevo":"base",get nuevo(){return this.variante==="nuevo"},tono:N_[qp.get("tono")]??null};function $p(){let a=window.devicePixelRatio||1,e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??8,n=nr&&(e<=3||t<=4);return nr?{movil:!0,bajo:n,pixelRatio:Math.min(a,n?1.15:1.5),minPixelRatio:.8,sombra:n?512:1024,antialias:a<2,lluvia:n?.35:.55,autosPorCarril:n?2:3}:{movil:!1,bajo:!1,pixelRatio:Math.min(a,1.75),minPixelRatio:1,sombra:2048,antialias:!0,lluvia:1,autosPorCarril:4}}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(a,e,t,n,i=0){let r=Math.max(0,Math.min(typeof i=="number"?i:i?.[0]??0,t/2,n/2));return this.moveTo(a+r,e),this.arcTo(a+t,e,a+t,e+n,r),this.arcTo(a+t,e+n,a,e+n,r),this.arcTo(a,e+n,a,e,r),this.arcTo(a,e,a+t,e,r),this.closePath(),this});var at=a=>String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Xd={via:"Calle 50 Luisa, Sabana Norte, San Jos\xE9",atribucion:"\xA9 OpenStreetMap contributors (ODbL)",eje:[[12.75,-245.62],[7.04,-157.59],[-1.69,-41.67],[-2.78,6.89],[-3.6,24.31],[-5.75,55.28],[-7.13,78.66],[-8.96,128.18],[-9.45,141.34],[-10.83,178.46],[-12.75,245.62]],largo:492.1,cruces:[{d:88.2,p:[7.04,-157.59],vias:["service:sin nombre"]},{d:204.5,p:[-1.69,-41.67],vias:["residential:sin nombre","service:sin nombre"]},{d:253.1,p:[-2.78,6.89],vias:["service:sin nombre"]},{d:270.6,p:[-3.6,24.31],vias:["service:sin nombre"]},{d:301.6,p:[-5.75,55.28],vias:["residential:Avenida 9"]},{d:325,p:[-7.13,78.66],vias:["service:sin nombre"]},{d:374.6,p:[-8.96,128.18],vias:["service:sin nombre"]},{d:387.8,p:[-9.45,141.34],vias:["service:sin nombre"]},{d:424.9,p:[-10.83,178.46],vias:["service:sin nombre"]},{d:492.1,p:[-12.75,245.62],vias:["residential:Calle 50","secondary:Avenida de Las Am\xE9ricas"]}],postes:[{id:"P01",p:[-3.32,-88.06],lado:"oeste",material:"concreto",herrajes:["cruceta","aisladores","reservas de fibra en aro (3 o m\xE1s)"],d:158.4},{id:"P02",p:[6.04,-76.43],lado:"este",material:"concreto",herrajes:["cruceta","aisladores","luminaria"],d:169.2},{id:"P04",p:[4.93,-61.74],lado:"este",material:"met\xE1lico gris sobre pedestal de concreto",herrajes:["brazo diagonal","retenida con protector amarillo (28 s)"],d:184},{id:"P05",p:[-7.06,-30.25],lado:"oeste",material:"concreto",herrajes:["transformador","reservas de fibra en aro","caja de empalme (47 s)"],d:216},{id:"P06",p:[-8.36,16.97],lado:"oeste",material:"concreto",herrajes:["reservas de fibra en aro (5 o m\xE1s)","marcas de colores de operadores (~2 m)"],d:263.5},{id:"P07",p:[-10.42,48.85],lado:"oeste",material:"concreto",herrajes:["transformador","luminaria"],d:295.5},{id:"P08",p:[-13.03,100.22],lado:"oeste",material:"concreto",herrajes:["haz telecom grande"],d:346.8},{id:"P09",p:[-14.7,145.19],lado:"oeste",material:"concreto",herrajes:["luminaria"],d:391.8},{id:"P12",p:[-6.79,215.69],lado:"este",material:"concreto",herrajes:["luminaria"],d:462},{id:"P11",p:[-7.78,250.32],lado:"este",material:"concreto con franja amarilla y negra",herrajes:["reservas de fibra en aro"],d:496.7}],tendido:[{de:"P01",a:"P05"},{de:"P05",a:"P06"},{de:"P06",a:"P07"},{de:"P07",a:"P08"},{de:"P08",a:"P09"},{de:"P09",a:"P12",nota:"cruza la calle"},{de:"P12",a:"P11"}],arboles:[[-7.17,-25.14],[-7.31,-18.74],[-7.45,-12.33],[-7.59,-5.92],[-7.74,.49],[-7.88,6.75],[-8.19,13.14],[-8.48,19.52],[-8.82,25.8],[-9.26,32.2],[-9.71,38.6],[-10.15,45.01],[-10.6,51.41],[-11.01,57.87],[-11.39,64.27],[-11.77,70.68],[-12.14,77.08],[-12.41,83.3],[-12.63,89.34],[-12.86,95.38],[-13.08,101.42],[-13.31,107.46],[-13.53,113.5],[-13.74,119.54],[-13.97,125.57],[-14.22,132.29],[-14.48,139.46],[-14.74,146.63],[-15.02,153.83],[-15.28,161.01],[-15.55,168.2],[-15.82,175.39],[-16.05,182.45],[-16.24,189.34],[-16.44,196.24],[-16.64,203.14],[-16.84,210.04],[-17.03,216.93]],otros:[{que:"retenida (viento) con protector amarillo",p:[4.64,-57.9],lado:"este",d:187.8},{que:"gabinete verde con r\xF3tulos de peligro y bolardo amarillo",p:[3.49,-42.57],lado:"este",d:203.2},{que:"caja de empalme en el tendido P01-P05",p:[-6.97,-34.1],lado:"oeste",d:212.2},{que:"se\xF1al de zona escolar",p:[-7.77,1.76],lado:"oeste",d:248.1},{que:"parqu\xEDmetro solar",p:[-8.31,15.7],lado:"oeste",d:262.2},{que:"espacios de estacionamiento 5019 \u2192 5001, 5,7 m cada uno",p:[-8.6,22.07],lado:"oeste",d:268.6},{que:"se\xF1al de estacionamiento E",p:[-9.88,41.17],lado:"oeste",d:287.8},{que:"se\xF1al 25 KPH velocidad m\xE1xima",p:[-11.39,64.27],lado:"oeste",d:310.9},{que:"se\xF1al de zona escolar",p:[-12.68,90.55],lado:"oeste",d:337.1},{que:"se\xF1al de estacionamiento E",p:[-13.21,105.05],lado:"oeste",d:351.6},{que:"se\xF1al de ALTO en la esquina",p:[-17.58,236.24],lado:"oeste",d:482.9},{que:"verja gris sobre muro bajo, al fondo de la acera",p:[-7.17,-25.14],lado:"oeste",d:221.2},{que:"verja y portones azules, al fondo de la acera",p:[-8.67,23.35],lado:"oeste",d:269.9}],lugares:[{nombre:"MEP - Edificio Bloque A",d:0,a:24,lado:"este"},{nombre:"Avenida 17",d:0,a:60,lado:"este"},{nombre:"MEP - Parqueo Este",d:88.2,a:37,lado:"este"},{nombre:"Museo Hist\xF3rico y Tecnol\xF3gico Grupo ICE",d:88.2,a:42,lado:"oeste"},{nombre:"Suites Cristina",d:88.2,a:38,lado:"este"},{nombre:"MEP - Edificio Bloque B",d:88.2,a:52,lado:"este"},{nombre:"Palma Real Hotel y Casino",d:204.5,a:42,lado:"este"},{nombre:"Parque Palma Real",d:204.5,a:21,lado:"este"},{nombre:"Cond. Corobic\xED del Oeste",d:253.1,a:32,lado:"este"},{nombre:"MTA",d:253.1,a:32,lado:"este"},{nombre:"Cond. Menorca",d:270.6,a:26,lado:"este"},{nombre:"Consensus Abogados",d:325,a:20,lado:"este"},{nombre:"Restaurant Flor de Loto",d:325,a:29,lado:"este"},{nombre:"Aptos. Balot de Escaz\xFA",d:325,a:20,lado:"este"},{nombre:"Oficentro Las Torres",d:374.6,a:19,lado:"este"},{nombre:"Soka Gakkai Internacional de Costa Rica",d:424.9,a:18,lado:"este"},{nombre:"Soda Alberto",d:424.9,a:29,lado:"este"},{nombre:"Subway",d:492.1,a:26,lado:"este"},{nombre:"Agencia ICE",d:492.1,a:36,lado:"este"},{nombre:"ICE",d:492.1,a:21,lado:"oeste"},{nombre:"ICE Sabana",d:492.1,a:20,lado:"oeste"},{nombre:"Uno Sports",d:492.1,a:34,lado:"este"},{nombre:"KFC",d:492.1,a:41,lado:"este"},{nombre:"Avenida de Las Am\xE9ricas",d:492.1,a:13,lado:"oeste"}]};var fi={x0:-3468.56,z0:-2412.63,paso:10,w:641,h:600,escala:60,lat0:9.94045,lon0:-84.102,kx:1827.481,kz:1842.333,origen:1134,fuente:"Terrain Tiles (Mapzen, AWS Open Data): SRTM, GMTED2010, ETOPO1 y otras fuentes abiertas"};var Wp="./datos-BGOTRZWN.bin";function Xp(a){let e=[],t=0;for(let s=0;s<a.length-1;s++){let[o,l]=a[s],[c,d]=a[s+1],p=Math.hypot(c-o,d-l);e.push({x0:o,z0:l,tx:(c-o)/p,tz:(d-l)/p,l:p,d0:t}),t+=p}let n=s=>{let o=e[0];for(let l of e)if(l.d0<=s)o=l;else break;return o};function i(s,o=0,l={}){let c=n(s),d=s-c.d0;return l.x=c.x0+c.tx*d+c.tz*o,l.z=c.z0+c.tz*d-c.tx*o,l.tx=c.tx,l.tz=c.tz,l}function r(s,o,l={}){let c=1/0;for(let d=0;d<e.length;d++){let p=e[d],u=s-p.x0,f=o-p.z0,b=u*p.tx+f*p.tz;d>0&&(b=Math.max(0,b)),d<e.length-1&&(b=Math.min(p.l,b));let _=u-p.tx*b,m=f-p.tz*b,h=_*_+m*m;h<c&&(c=h,l.d=p.d0+b,l.a=_*p.tz-m*p.tx)}return l}return{largo:t,en:i,aVia:r}}function Yp(a,e,t,n){let i={},r={};return function(o,l){for(let u of t){let f=o.x-u.x,b=o.z-u.z,_=u.r+l,m=f*f+b*b;if(m<_*_&&m>1e-9){let h=_/Math.sqrt(m);o.x=u.x+f*h,o.z=u.z+b*h}}a.aVia(o.x,o.z,i);let c=Math.max(n.d0,Math.min(n.d1,i.d)),d=Math.max(-n.a,Math.min(n.a,i.a)),p=c!==i.d||d!==i.a;i.d=c,i.a=d;for(let u of e){if(i.d<=u.d0-l||i.d>=u.d1+l||i.a<=u.a0-l||i.a>=u.a1+l)continue;let f=i.d-(u.d0-l),b=u.d1+l-i.d,_=i.a-(u.a0-l),m=u.a1+l-i.a,h=Math.min(f,b,_,m);h===f?i.d=u.d0-l:h===b?i.d=u.d1+l:h===_?i.a=u.a0-l:i.a=u.a1+l,p=!0}return p&&(a.en(i.d,i.a,r),o.x=r.x,o.z=r.z),o}}var ql=new ke;function An(){let a=[],e=[],t=[],n=[];function i(l,c,d,p,u,f){let b=a.length/3;ql.set(u);for(let _ of[l,c,d,p])a.push(_[0],_[1],_[2]),e.push(ql.r,ql.g,ql.b);f?t.push(...f):t.push(0,0,0,0,0,0,0,0),n.push(b,b+1,b+2,b,b+2,b+3)}function r(l,c,d,p,{techo:u=p,bahia:f=0,piso:b=3.2}={}){for(let _=0;_<4;_++){let m=l[_],h=l[(_+1)%4],x=f?Math.max(1,Math.round(Math.hypot(h[0]-m[0],h[1]-m[1])/f)):0,M=f?Math.max(1,Math.round((d-c)/b)):0;i([m[0],c,m[1]],[h[0],c,h[1]],[h[0],d,h[1]],[m[0],d,m[1]],p,[0,0,x,0,x,M,0,M])}i([l[0][0],d,l[0][1]],[l[1][0],d,l[1][1]],[l[2][0],d,l[2][1]],[l[3][0],d,l[3][1]],u)}function s(l,c,d,p,u,f,b,_=0,m){let h=Math.cos(_),x=Math.sin(_),M=p/2,v=f/2;r([[-M,-v],[-M,v],[M,v],[M,-v]].map(([E,S])=>[l+E*h+S*x,d-E*x+S*h]),c,c+u,b,m)}function o(){let l=new pt;return l.setAttribute("position",new tt(a,3)),l.setAttribute("color",new tt(e,3)),l.setAttribute("uv",new tt(t,2)),l.setIndex(n),l.computeVertexNormals(),l}return{quad:i,prisma:r,caja:s,geometria:o}}var Xa=a=>()=>{a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};var Dt={asfalto:3882564,pintura:15329244,amarillo:14924079,acera:12433838,cordon:9736330,lote:7314520,pasto:6064713,concreto:11117980,madera:7035723,metal:9212569,losa:7630955,zinc:9325370},Jp=[14273972,13219740,14934230,12109004,14203296,13620930,14731686,11122630],ln=3.65,$l=6,Tn=64,Wl=3.25,Yt=.15,Xl=.9,Zp=-2.45,B_=[[/ICE Sabana/,{pisos:13,color:3108789,cartel:739983}],[/ICE|Museo/,{pisos:4,color:3834564,cartel:739983}],[/Hotel|Casino/,{pisos:9,color:15129016,cartel:8007214}],[/Cond|Aptos|Suites|Torres|MEP|Abogados|Soka/,{pisos:6,cartel:4082262}],[/Soda|Subway|KFC|Restaurant|Sports|MTA/,{pisos:1,cartel:10107678}]];function z_(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,64),e.fillStyle="#e4e4e0",e.fillRect(0,58,64,6),e.fillStyle="#d2d2cc",e.fillRect(16,14,32,32);let t=e.createLinearGradient(0,16,0,44);t.addColorStop(0,"#7f9db5"),t.addColorStop(1,"#3d5468"),e.fillStyle=t,e.fillRect(18,16,28,28),e.fillStyle="#d2d2cc",e.fillRect(31,16,2,28);let n=new Ba(a);return n.wrapS=n.wrapT=Bi,n.colorSpace=jt,n.anisotropy=4,n}function Kp(a,e){let t=Xa(50),n={},i=An(),r=An(),s=An(),o=An(),l=(B,pe,fe=0)=>(e.en(B,pe,n),[n.x,fe,n.z]),c=B=>(e.en(B,0,n),Math.atan2(n.tx,n.tz));function d(B,pe,fe,Ae,Re,Le,_e,ae=8){let ne=Math.max(1,Math.ceil((fe-pe)/ae));for(let de=0;de<ne;de++){let ee=pe+(fe-pe)*de/ne,L=pe+(fe-pe)*(de+1)/ne;B.quad(l(ee,Ae,Le),l(L,Ae,Le),l(L,Re,Le),l(ee,Re,Le),_e)}}let p=(B,pe,fe,Ae,Re,Le,_e)=>{let ae=l(B,pe),ne=l(fe,Ae);i.quad([ae[0],Re,ae[2]],[ne[0],Re,ne[2]],[ne[0],Le,ne[2]],[ae[0],Le,ae[2]],_e)},u=[0,...a.cruces.filter(B=>B.vias.some(pe=>/^(residential|secondary)/.test(pe))).map(B=>B.d)],f=-14,b=e.largo+14;d(i,f-60,b+60,-Tn-40,Tn+40,-.03,Dt.pasto,40),d(i,f,b,-ln,ln,0,Dt.asfalto);for(let B of u)for(let pe of[-1,1])d(i,B-Wl,B+Wl,pe>0?ln:-Tn-40,pe>0?Tn+40:-ln,0,Dt.asfalto,8);let _=[];for(let B=0;B<u.length-1;B++)_.push([u[B]+Wl,u[B+1]-Wl]);for(let[B,pe]of _)for(let fe of[-1,1]){let Ae=fe>0?ln:-$l,Re=fe>0?$l:-ln,Le=fe>0?$l:-Tn,_e=fe>0?Tn:-$l;d(i,B,pe,Ae,Re,Yt,Dt.acera),d(i,B,pe,Le,_e,Yt,Dt.lote,16);let ae=Math.ceil((pe-B)/8);for(let ne=0;ne<ae;ne++){let de=B+(pe-B)*ne/ae,ee=B+(pe-B)*(ne+1)/ae;fe>0?p(de,ln,ee,ln,0,Yt,Dt.cordon):p(ee,-ln,de,-ln,0,Yt,Dt.cordon)}fe>0?(p(B,Tn,B,ln,0,Yt,Dt.cordon),p(pe,ln,pe,Tn,0,Yt,Dt.cordon)):(p(B,-ln,B,-Tn,0,Yt,Dt.cordon),p(pe,-Tn,pe,-ln,0,Yt,Dt.cordon))}for(let B of[-1,1])d(i,f,b,B*3.42-.05,B*3.42+.05,.012,Dt.amarillo);let m=a.otros.find(B=>/espacios de estacionamiento/.test(B.que)),h={d0:m.d,n:19,paso:5.7,a:Zp};d(i,m.d-1,m.d+h.n*h.paso,-1.36,-1.26,.012,Dt.pintura);for(let B=0;B<=h.n;B++)d(i,m.d+B*5.7-.05,m.d+B*5.7+.05,-3.4,-1.3,.012,Dt.pintura);d(i,e.largo-6.4,e.largo-6,-1.3,3.4,.012,Dt.pintura);let x=[],M=[],v=[];for(let[B,pe]of _)for(let fe of["este","oeste"])for(let Ae=B+4;Ae<pe-12;){let Re=Math.min(14+t()*16,pe-4-Ae),Le=7.4+t()*3,_e=12+t()*10;x.push({lado:fe,d0:Ae,d1:Ae+Re,frente:Le,fondo:_e,pisos:1+Math.floor(t()*t()*5),color:Jp[Math.floor(t()*Jp.length)]}),Ae+=Re+1.5+t()*3}let E=[];for(let B of a.lugares){let pe=x.filter(Re=>Re.lado===B.lado&&!Re.nombre);if(!pe.length)continue;let fe=pe.reduce((Re,Le)=>Math.abs((Le.d0+Le.d1)/2-B.d)<Math.abs((Re.d0+Re.d1)/2-B.d)?Le:Re);if(fe.nombre=B.nombre,/Parque|Parqueo/.test(B.nombre)){fe.vacio=!0;continue}let Ae=B_.find(([Re])=>Re.test(B.nombre))?.[1]??{};Object.assign(fe,Ae),E.push(fe)}for(let B of x){if(B.vacio)continue;let pe=B.lado==="este"?1:-1,fe=pe>0?B.frente:-(B.frente+B.fondo),Ae=pe>0?B.frente+B.fondo:-B.frente,Re=B.pisos*3.2+.6,Le=[l(B.d0,fe),l(B.d1,fe),l(B.d1,Ae),l(B.d0,Ae)].map(_e=>[_e[0],_e[2]]);s.prisma(Le,Yt,Re,B.color,{techo:B.pisos<=2?Dt.zinc:Dt.losa,bahia:3}),M.push({d0:B.d0,d1:B.d1,a0:fe,a1:Ae}),Object.assign(B,{a0:fe,a1:Ae,h:Re})}let S=document.createElement("canvas");S.width=S.height=1024;let T=S.getContext("2d");T.textAlign="center",T.textBaseline="middle",E.slice(0,32).forEach((B,pe)=>{let fe=pe%2,Ae=pe>>1,Re=fe*512,Le=Ae*64;T.fillStyle="#"+(B.cartel??2832970).toString(16).padStart(6,"0"),T.fillRect(Re,Le,512,64),T.fillStyle="#fff",T.font="bold 34px system-ui, Arial, sans-serif";let _e=T.measureText(B.nombre).width;_e>480&&(T.font=`bold ${Math.floor(34*480/_e)}px system-ui, Arial, sans-serif`),T.fillText(B.nombre,Re+256,Le+34);let ae=B.lado==="este"?1:-1,ne=ae>0?B.a0-.06:B.a1+.06,de=(B.d0+B.d1)/2,ee=Math.min(B.d1-B.d0-2,9)/2,L=Math.min(B.h-.9,3.7),ve=l(de-ae*ee,ne),me=l(de+ae*ee,ne),P=fe/2,y=P+.5,z=1-Ae/16,q=z-1/16;o.quad([ve[0],L-.55,ve[2]],[me[0],L-.55,me[2]],[me[0],L+.55,me[2]],[ve[0],L+.55,ve[2]],16777215,[P,q,y,q,y,z,P,z])});let g=a.postes.map(B=>(e.aVia(B.p[0],B.p[1],n),{...B,x:B.p[0],z:B.p[1],d:n.d,a:n.a,rumbo:c(n.d)})),A=Object.fromEntries(g.map(B=>[B.id,B])),C=new It(new Xt(.13,.18,9.6,10).translate(0,4.8,0),new st({color:Dt.concreto,roughness:.9}),g.length),I=g.filter(B=>B.herrajes.some(pe=>/reserva/.test(pe))),N=new It(new Fn(.36,.035,6,18),new st({color:1382170,roughness:.6}),I.length*2),D=new bt;g.forEach((B,pe)=>{D.position.set(B.x,Yt,B.z),D.rotation.set(0,0,0),D.updateMatrix(),C.setMatrixAt(pe,D.matrix),B.herrajes.includes("cruceta")&&r.caja(B.x,9,B.z,2.2,.1,.12,Dt.madera,B.rumbo),v.push({x:B.x,z:B.z,r:.2})}),I.forEach((B,pe)=>[-1,1].forEach((fe,Ae)=>{let Re=l(B.d+fe*.9,B.a,6.25);D.position.set(Re[0],Re[1],Re[2]),D.rotation.set(0,B.rumbo+Math.PI/2,0),D.updateMatrix(),N.setMatrixAt(pe*2+Ae,D.matrix)}));let R=[],U=[],F=new ke;function H(B,pe,fe,Ae){F.set(Ae);for(let Re=0;Re<12;Re++)for(let Le of[Re/12,(Re+1)/12])R.push(B[0]+(pe[0]-B[0])*Le,B[1]+(pe[1]-B[1])*Le-fe*4*Le*(1-Le),B[2]+(pe[2]-B[2])*Le),U.push(F.r,F.g,F.b)}for(let B of a.tendido){let pe=A[B.de],fe=A[B.a];for(let Ae=0;Ae<3;Ae++)H([pe.x,6.3+Ae*.18,pe.z],[fe.x,6.3+Ae*.18,fe.z],.55,921361);for(let Ae of[-.95,0,.95])H(l(pe.d,pe.a+Ae,9.15),l(fe.d,fe.a+Ae,9.15),.8,3356218)}let $=new pt;$.setAttribute("position",new tt(R,3)),$.setAttribute("color",new tt(U,3));let W=a.arboles.map(B=>({x:B[0],z:B[1],k:.8+t()*.5}));for(let B of x)if(B.vacio)for(let pe=0;pe<6;pe++){let fe=l(B.d0+t()*(B.d1-B.d0),(B.lado==="este"?1:-1)*(B.frente+2+t()*B.fondo));W.push({x:fe[0],z:fe[2],k:1+t()*.6})}for(let B=0;B<26;B++){let pe=l(t()*e.largo,(t()<.5?-1:1)*(38+t()*24));W.push({x:pe[0],z:pe[2],k:1+t()*.8})}let te=new It(new Xt(.13,.2,3,6).translate(0,1.5,0),new st({color:5916210,roughness:1}),W.length),le=new It(new li(1.7,1).translate(0,4.1,0),new st({roughness:1,flatShading:!0}),W.length);W.forEach((B,pe)=>{D.position.set(B.x,Yt,B.z),D.rotation.set(0,t()*6,0),D.scale.setScalar(B.k),D.updateMatrix(),te.setMatrixAt(pe,D.matrix),le.setMatrixAt(pe,D.matrix),le.setColorAt(pe,F.setHSL(.27+t()*.08,.45+t()*.15,.26+t()*.1)),v.push({x:B.x,z:B.z,r:.25})}),D.scale.setScalar(1);let Se=(B,pe,fe)=>{r.caja(B.p[0],Yt,B.p[1],.06,2.3,.06,Dt.metal),r.caja(B.p[0],1.9,B.p[1],.56,.56,.04,pe,fe)};for(let B of a.otros){e.aVia(B.p[0],B.p[1],n);let pe=c(n.d);if(/ALTO/.test(B.que))Se(B,12593182,pe);else if(/25 KPH/.test(B.que))Se(B,15856108,pe);else if(/zona escolar/.test(B.que))Se(B,15320363,pe);else if(/estacionamiento E/.test(B.que))Se(B,2056112,pe);else if(/parquímetro/.test(B.que))r.caja(B.p[0],Yt,B.p[1],.08,1.2,.08,Dt.metal),r.caja(B.p[0],1.3,B.p[1],.3,.45,.2,2903667,pe);else if(/gabinete/.test(B.que)){r.caja(B.p[0],Yt,B.p[1],.5,1.35,.95,3046735,pe);let fe=l(n.d+.9,n.a-.5);r.caja(fe[0],Yt,fe[2],.14,.9,.14,Dt.amarillo),M.push({d0:n.d-.5,d1:n.d+.5,a0:n.a-.3,a1:n.a+.3})}else/retenida/.test(B.que)?r.caja(B.p[0],Yt,B.p[1],.12,2.2,.12,Dt.amarillo,pe):/caja de empalme/.test(B.que)&&r.caja(B.p[0],6.05,B.p[1],.24,.24,.6,1184790,pe)}let V=A.P05,ce=V.d+15,be=l(ce,Zp),Me={x:be[0],z:be[2],rumbo:c(ce)},j=new ht,Q=new st({vertexColors:!0,roughness:.92}),ue=(B,pe,{sombra:fe=!0,recibe:Ae=!0}={})=>{let Re=new We(B.geometria(),pe);return Re.castShadow=fe,Re.receiveShadow=Ae,Re};j.add(ue(i,Q,{sombra:!1}),ue(r,Q),ue(s,new st({map:z_(),vertexColors:!0,roughness:.85})),ue(o,new yn({map:Object.assign(new Ba(S),{colorSpace:jt,anisotropy:4})}),{sombra:!1,recibe:!1}),new Wn($,new Ln({vertexColors:!0})),C,N,te,le);for(let B of[C,te,le])B.castShadow=!0;j.traverse(B=>{B.matrixAutoUpdate=!1,B.updateMatrix()});let Ee={};function J(B,pe){if(e.aVia(B,pe,Ee),Math.abs(Ee.a)<=ln||Math.abs(Ee.a)>Tn)return 0;for(let[fe,Ae]of _)if(Ee.d>=fe&&Ee.d<=Ae)return Yt;return 0}return{grupo:j,cajas:M,circulos:v,altura:J,postes:g,estacionamiento:h,limites:{d0:f+2,d1:b-2,a:Tn-2},inicio:{d:ce-1,a:-4.5},dPick:ce,trabajo:V,estacionado:Me,BORDE:Tn+40,D0:f-60,D1:b+60}}var Yd=2.5,Aa=40,Jl=5,mi=128,Qp=mi*Jl/2,G_=12,H_=14,Yl=(a,e)=>{let t=Math.imul(a,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function fs(a,e){let t=Math.floor(a),n=Math.floor(e),i=a-t,r=e-n,s=i*i*(3-2*i),o=r*r*(3-2*r);return(Yl(t,n)*(1-s)+Yl(t+1,n)*s)*(1-o)+(Yl(t,n+1)*(1-s)+Yl(t+1,n+1)*s)*o}var wn=(a,e,t)=>{let n=Math.max(0,Math.min(1,(t-a)/(e-a)));return n*n*(3-2*n)},zn=Object.fromEntries(Object.entries({fondo:2051950,arena:14272911,selva:3107626,potrero:7248450,sabana:10263114,nuboso:2381114,paramo:8157774,roca:7825754,pueblo:11118492,pasto:6064713}).map(([a,e])=>[a,new ke(e)]));function ef(a,e,t,n,i=[]){let{x0:r,z0:s,paso:o,w:l,h:c}=e,d=Yd/e.escala,p=e.origen*d,u=-p,f=r+(l-1)*o,b=s+(c-1)*o,_={e:0,pend:0,llano:0},m={},h={dist:0,y:0},x=null;function M(_e,ae){let ne=Math.max(0,Math.min(l-1.001,(_e-r)/o)),de=Math.max(0,Math.min(c-1.001,(ae-s)/o)),ee=ne|0,L=de|0,ve=ne-ee,me=de-L,P=L*l+ee,y=a[P],z=a[P+1],q=a[P+l],Y=a[P+l+1],ye=(y*(1-ve)+z*ve)*(1-me)+(q*(1-ve)+Y*ve)*me;_.e=ye,_.pend=Math.hypot((z-y)*(1-me)+(Y-q)*me,(q-y)*(1-ve)+(Y-z)*ve)/(o*e.escala);let ge=ye>0?Math.min(7,_.pend*16):0,re=ye*d-p+ge*((fs(_e*.011,ae*.011)-.5)*1.5+(fs(_e*.037,ae*.037)-.5)*.6);for(let se of i){let Te=_e-se.x,ze=ae-se.z;if(Math.abs(Te)>se.R||Math.abs(ze)>se.R)continue;let we=Math.hypot(Te,ze),Ce=se.cima*d-p-se.alto*Math.pow(we/se.R,.85)-Math.max(0,6-we)*.8;we<se.R&&Ce>re&&(re=Ce,_.pend=.5,_.e=(re+p)/d)}return re}function v(_e,ae){let ne=M(_e,ae);if(_.llano=0,Math.abs(_e)<420&&ae>-480&&ae<480){t.aVia(_e,ae,m);let de=Math.hypot(Math.max(0,Math.abs(m.a)-100),Math.max(0,-70-m.d,m.d-t.largo-70));if(de<150){let ee=wn(4,150,de);ne=(de<4?-.6+.15*de:0)*(1-ee)+ne*ee,_.llano=1-ee}}for(let de of n){if(Math.abs(_e-de.x)>de.r+60||Math.abs(ae-de.z)>de.r+60)continue;let ee=wn(de.r,de.r+60,Math.hypot(_e-de.x,ae-de.z));ee<1&&(ne=de.y*(1-ee)+ne*ee,_.llano=Math.max(_.llano,1-ee))}return ne}for(let _e of n)_e.y=Math.max(u+1.5,M(_e.x,_e.z));function E(_e,ae){let ne=v(_e,ae);if(x&&x.cerca(_e,ae,h).dist<45){let de=wn(16,45,h.dist);ne=h.y*(1-de)+ne*de}return ne}let S=new ke;function T(_e,ae,ne,de){let ee=_.e,L=_.pend*Yd,ve=fs(_e*.06,ae*.06),me=e.lon0+_e/e.kx,P=e.lat0-ae/e.kz;if(ee<1)S.copy(zn.arena).lerp(zn.fondo,wn(0,45,-ee));else if(ee<14)S.copy(zn.arena);else{let z=wn(84.72,85.15,-me)*wn(9.7,10.15,P)*(1-wn(500,900,ee));S.copy(zn.selva).lerp(zn.potrero,wn(.42,.7,ve)*(1-wn(.1,.3,L))).lerp(zn.sabana,z*(.6+.4*ve)),S.lerp(zn.nuboso,wn(1300,1900,ee)).lerp(zn.paramo,wn(2900,3300,ee)).lerp(zn.roca,wn(.75,1.2,L)),S.lerp(zn.arena,1-wn(14,30,ee))}_.llano>0&&S.lerp(Math.abs(_e)<420&&Math.abs(ae)<480?zn.pasto:zn.pueblo,_.llano*.8);let y=.88+ve*.24;ne[de]=S.r*y,ne[de+1]=S.g*y,ne[de+2]=S.b*y}let g=Math.floor((f-r)/Aa)+1,A=Math.floor((b-s)/Aa)+1,C=new Float32Array(g*A*3),I=new Float32Array(g*A*3),N=new Float32Array(g*A*3),D=new Uint32Array((g-1)*(A-1)*6),R=new pt;R.setAttribute("position",new gt(C,3)),R.setAttribute("color",new gt(I,3)),R.setAttribute("normal",new gt(N,3)),R.setIndex(new gt(D,1));function U(_e,ae,ne,de,ee){for(let L=0;L<de;L++)for(let ve=0;ve<ne;ve++){let me=(L*ne+ve)*3,P=_e[(L*ne+Math.max(0,ve-1))*3+1],y=_e[(L*ne+Math.min(ne-1,ve+1))*3+1],z=_e[(Math.max(0,L-1)*ne+ve)*3+1],q=_e[(Math.min(de-1,L+1)*ne+ve)*3+1],Y=(P-y)/(2*ee),ye=(z-q)/(2*ee),ge=Math.hypot(Y,1,ye);ae[me]=Y/ge,ae[me+1]=1/ge,ae[me+2]=ye/ge}}function F(){for(let _e=0;_e<A;_e++)for(let ae=0;ae<g;ae++){let ne=(_e*g+ae)*3,de=r+ae*Aa,ee=s+_e*Aa;C[ne]=de,C[ne+1]=E(de,ee),C[ne+2]=ee,T(de,ee,I,ne)}U(C,N,g,A,Aa);for(let _e of["position","color","normal"])R.attributes[_e].needsUpdate=!0;R.computeBoundingSphere()}function H(_e,ae){let ne=0;for(let de=0;de<A-1;de++)for(let ee=0;ee<g-1;ee++){if(ee>=_e-8&&ee<_e+8&&de>=ae-8&&de<ae+8)continue;let L=de*g+ee,ve=L+g;D[ne++]=L,D[ne++]=ve,D[ne++]=L+1,D[ne++]=L+1,D[ne++]=ve,D[ne++]=ve+1}R.setDrawRange(0,ne),R.index.needsUpdate=!0}let $=mi+1,W=$*$+4*$,te=new Float32Array(W*3),le=new Float32Array(W*3),Se=new Float32Array(W*3),V=new Float32Array($*$*3),ce=new Float32Array($*$*3),be=[];for(let _e=0;_e<mi;_e++)for(let ae=0;ae<mi;ae++){let ne=_e*$+ae,de=ne+$;be.push(ne,de,ne+1,ne+1,de,de+1)}let Me=[[],[],[],[]];for(let _e=0;_e<$;_e++)Me[0].push(_e),Me[1].push(mi*$+_e),Me[2].push(_e*$),Me[3].push(_e*$+mi);Me.forEach((_e,ae)=>{for(let ne=0;ne<mi;ne++){let de=_e[ne],ee=_e[ne+1],L=$*$+ae*$+ne,ve=L+1;ae===0||ae===3?be.push(de,ee,L,ee,ve,L):be.push(de,L,ee,ee,L,ve)}});let j=new pt;j.setAttribute("position",new gt(te,3)),j.setAttribute("color",new gt(le,3)),j.setAttribute("normal",new gt(Se,3)),j.setIndex(be);let Q=new st({vertexColors:!0,roughness:1,side:Un}),ue=new We(R,Q),Ee=new We(j,Q),J=new We(new ci(12e3,12e3).rotateX(-Math.PI/2),new st({color:2847639,roughness:.22,metalness:.1,transparent:!0,opacity:.9}));J.position.y=u;let B=new ht;B.add(ue,Ee,J);for(let _e of[ue,Ee])_e.receiveShadow=!0,_e.frustumCulled=!1;let pe=null,fe=null,Ae=null;function Re(_e){let{ci:ae,cj:ne}=fe,de=r+(ae-8)*Aa,ee=s+(ne-8)*Aa;for(let L=0;L<_e&&fe.fila<$;L++,fe.fila++){let ve=fe.fila,me=ee+ve*Jl;for(let P=0;P<$;P++){let y=(ve*$+P)*3,z=de+P*Jl;V[y]=z,V[y+1]=E(z,me),V[y+2]=me,T(z,me,ce,y)}}if(!(fe.fila<$)){te.set(V),le.set(ce),U(te,Se,$,$,Jl),Me.forEach((L,ve)=>L.forEach((me,P)=>{let y=($*$+ve*$+P)*3;te[y]=te[me*3],te[y+1]=te[me*3+1]-G_,te[y+2]=te[me*3+2];for(let z=0;z<3;z++)le[y+z]=le[me*3+z],Se[y+z]=Se[me*3+z]}));for(let L of["position","color","normal"])j.attributes[L].needsUpdate=!0;H(ae,ne),pe={ci:ae,cj:ne,x:de+Qp,z:ee+Qp},fe=null,Ae?.(pe.x,pe.z)}}function Le(_e,ae,ne=!1){let de=Math.max(8,Math.min(g-9,Math.round((_e-r)/Aa))),ee=Math.max(8,Math.min(A-9,Math.round((ae-s)/Aa)));!fe&&(!pe||de!==pe.ci||ee!==pe.cj)&&(fe={ci:de,cj:ee,fila:0}),fe&&Re(ne?$:H_)}return{grupo:B,MAR:u,EX:Yd,limites:{x0:r+60,x1:f-60,z0:s+60,z1:b-60},altura:E,alturaBase:v,relieve:M,cada:Le,muestra:_,listo(_e,ae){x=_e,Ae=ae,F()}}}var k_=8,ar=60,Zl=46,V_=3.6;function tf(a,e,t,n=[]){let i=a.map(l=>{let c=l.puntos,d=[],p=[];for(let h=0;h<c.length-1;h++){let x=c[Math.max(0,h-1)],M=c[h],v=c[h+1],E=c[Math.min(c.length-1,h+2)],S=Math.max(1,Math.ceil(Math.hypot(v[0]-M[0],v[1]-M[1])/k_));for(let T=0;T<S;T++){let g=T/S,A=g*g,C=A*g;d.push(.5*(2*M[0]+(v[0]-x[0])*g+(2*x[0]-5*M[0]+4*v[0]-E[0])*A+(3*M[0]-x[0]-3*v[0]+E[0])*C)),p.push(.5*(2*M[1]+(v[1]-x[1])*g+(2*x[1]-5*M[1]+4*v[1]-E[1])*A+(3*M[1]-x[1]-3*v[1]+E[1])*C))}}d.push(c.at(-1)[0]),p.push(c.at(-1)[1]);let u=d.length,f=d.map((h,x)=>Math.max(t+1.5,e(h,p[x]))),b=new Uint8Array(u);l.y0!==void 0&&(f[0]=l.y0,b[0]=1);for(let h=0;h<u;h++)for(let x of n)Math.hypot(d[h]-x.x,p[h]-x.z)<x.r*.6&&(f[h]=Math.max(t+1.5,x.y),b[h]=1);b[u-1]=1;for(let h=0;h<6e3;h++){let x=0;for(let M=1;M<u-1;M++)b[M]||(f[M]=Math.max(t+1.5,(f[M-1]+2*f[M]+f[M+1])/4));for(let M=1;M<u;M++)x=Math.max(x,Math.abs(f[M]-f[M-1])/Math.hypot(d[M]-d[M-1],p[M]-p[M-1]));if(x<.13&&h>20)break}let _=new Array(u),m=new Array(u);for(let h=0;h<u;h++){let x=Math.max(0,h-1),M=Math.min(u-1,h+1),v=Math.hypot(d[M]-d[x],p[M]-p[x])||1;_[h]=(p[M]-p[x])/v,m[h]=-(d[M]-d[x])/v}return{n:l.n,X:d,Z:p,Y:f,NX:_,NZ:m}}),r=new Map,s=(l,c)=>(l+2048)*4096+(c+2048);i.forEach((l,c)=>{for(let d=0;d<l.X.length-1;d++){let p=Math.floor((Math.min(l.X[d],l.X[d+1])-Zl)/ar),u=Math.floor((Math.max(l.X[d],l.X[d+1])+Zl)/ar),f=Math.floor((Math.min(l.Z[d],l.Z[d+1])-Zl)/ar),b=Math.floor((Math.max(l.Z[d],l.Z[d+1])+Zl)/ar);for(let _=p;_<=u;_++)for(let m=f;m<=b;m++){let h=s(_,m),x=r.get(h);x||r.set(h,x=[]),x.push(c,d)}}});function o(l,c,d){d.dist=1/0;let p=r.get(s(Math.floor(l/ar),Math.floor(c/ar)));if(!p)return d;for(let u=0;u<p.length;u+=2){let f=i[p[u]],b=p[u+1],_=f.X[b],m=f.Z[b],h=f.X[b+1]-_,x=f.Z[b+1]-m,M=h*h+x*x,v=Math.max(0,Math.min(1,((l-_)*h+(c-m)*x)/M)),E=Math.hypot(l-_-h*v,c-m-x*v);if(E<d.dist){let S=Math.sqrt(M);d.dist=E,d.y=f.Y[b]+(f.Y[b+1]-f.Y[b])*v,d.ruta=p[u],d.tx=h/S,d.tz=x/S}}return d}return{rutas:i,cerca:o,MEDIO:V_}}function nf(a,e=1500){let t=new Float32Array(e*2*12),n=new Float32Array(e*2*12),i=new Float32Array(e*2*12),r=new Uint32Array(e*2*6);for(let f=0;f<e*2;f++){r.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6);for(let b=0;b<4;b++)i[f*12+b*3+1]=1}let s=new pt;s.setAttribute("position",new gt(t,3)),s.setAttribute("color",new gt(n,3)),s.setAttribute("normal",new gt(i,3)),s.setIndex(new gt(r,1));let o=new We(s,new st({vertexColors:!0,roughness:.95}));o.frustumCulled=!1,o.receiveShadow=!0;let l=new ke(3882564),c=new ke(14924079),d=0;function p(f,b,_,m,h,x){if(d>=e*2)return;let M=d++*12,v=b+1,E=[[b,_],[v,_],[v,m],[b,m]];for(let S=0;S<4;S++){let[T,g]=E[S];t[M+S*3]=f.X[T]+f.NX[T]*g,t[M+S*3+1]=f.Y[T]+h,t[M+S*3+2]=f.Z[T]+f.NZ[T]*g,n[M+S*3]=x.r,n[M+S*3+1]=x.g,n[M+S*3+2]=x.b}}function u(f,b,_){d=0;for(let m of a.rutas)for(let h=0;h<m.X.length-1;h++)Math.abs(m.X[h]-f)>_||Math.abs(m.Z[h]-b)>_||(p(m,h,-a.MEDIO,a.MEDIO,.12,l),h%2===0&&p(m,h,-.09,.09,.15,c));s.setDrawRange(0,d*6),s.attributes.position.needsUpdate=s.attributes.color.needsUpdate=!0}return{malla:o,rehacer:u}}var ir=11,ms=240,Kl=1100,gi=(a,e,t)=>{let n=Math.imul(a,73856093)^Math.imul(e,19349663)^Math.imul(t,83492791);return n=Math.imul(n^n>>>15,2246822519),((n^n>>>13)>>>0)/4294967296},j_={palma:[5.2,.7,2.1,.7,5148474],selva:[4.2,1.1,2.3,2,2911019],seco:[3.2,1.2,3.1,1,8163132],cipres:[3,.9,1,2.7,2314810]};function af(a,e,t){let n=new It(new Xt(.11,.17,1,6).translate(0,.5,0),new st({color:5916210,roughness:1}),Kl),i=new It(new li(1,1),new st({roughness:1,flatShading:!0}),Kl),r=new ht;r.add(n,i);for(let d of[n,i])d.frustumCulled=!1,d.count=0;let s=new bt,o=new ke,l={dist:0};function c(d,p){let u=0,f=Math.floor((d-ms)/ir),b=Math.floor((d+ms)/ir),_=Math.floor((p-ms)/ir),m=Math.floor((p+ms)/ir);for(let h=_;h<=m&&u<Kl;h++)for(let x=f;x<=b&&u<Kl;x++){let M=(x+gi(x,h,1))*ir,v=(h+gi(x,h,2))*ir;if(Math.hypot(M-d,v-p)>ms)continue;let E=a.altura(M,v),S=a.muestra,T=S.e;if(T<3||S.llano>.25||S.pend*a.EX>1.1||e.cerca(M,v,l).dist<12)continue;let g=t.lon0+M/t.kx,A=t.lat0-v/t.kz,C=-g>84.9&&A>9.85&&T<700,I=fs(M*.013,v*.013),N=T>3e3?.06:C?.16+.3*I:.2+.75*I*I;if(gi(x,h,3)>N)continue;let[D,R,U,F,H]=j_[T<45?"palma":T>1900?"cipres":C?"seco":"selva"],$=.75+gi(x,h,4)*.6;s.position.set(M,E-.1,v),s.rotation.set(0,gi(x,h,5)*6.28,0),s.scale.set(R*$,D*$,R*$),s.updateMatrix(),n.setMatrixAt(u,s.matrix),s.position.y=E+D*$+F*$*.35,s.scale.set(U*$,F*$,U*$),s.updateMatrix(),i.setMatrixAt(u,s.matrix),i.setColorAt(u,o.set(H).offsetHSL((gi(x,h,6)-.5)*.04,0,(gi(x,h,7)-.5)*.08)),u++}n.count=i.count=u,n.instanceMatrix.needsUpdate=i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return{grupo:r,rehacer:c}}var q_=3.1,$_=.95,W_=2.65,X_=27,Y_=9,J_=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a));function rf(a,e){let t=An(),n=15921902,i=9212569,r=(h,x,M,v,E,S,T)=>t.caja(h,x,M,v,E,S,T);r(0,.42,0,1.86,.5,5.2,n),r(0,.92,.75,1.78,.78,1.9,n),r(0,1.2,.75,1.82,.42,1.6,1976886),r(0,.92,2.15,1.7,.3,1,n);for(let h of[-.9,.9])r(h,.92,-1.45,.08,.42,2.3,n),r(h*1.035,.62,0,.03,.14,5,739983),r(h*1.035,.5,0,.03,.1,5,14924079);r(0,.92,-2.56,1.86,.42,.08,n);for(let h of[-.86,.86])for(let x of[1.6,-1.6])r(h,0,x,.26,.74,.74,1447963);for(let h of[1.4,-2.3]){for(let x of[-.85,.85])r(x,1.34,h,.06,.75,.06,i);r(0,2.06,h,1.8,.06,.06,i)}let s=new We(t.geometria(),new st({vertexColors:!0,roughness:.6})),o=new ht;o.add(s),o.rotation.order="YXZ";let l={x:e.x,z:e.z,rumbo:e.rumbo,v:0,y:0,ox:e.x,oz:e.z,orumbo:e.rumbo},c=new O;function d(h,x,M,v=c){let E=Math.cos(l.rumbo),S=Math.sin(l.rumbo);return v.set(l.x+h*E+M*S,l.y+x,l.z-h*S+M*E)}function p(){let h=Math.cos(l.rumbo),x=Math.sin(l.rumbo),M=a(l.x+x*1.6,l.z+h*1.6),v=a(l.x-x*1.6,l.z-h*1.6),E=a(l.x+h*.9,l.z-x*.9),S=a(l.x-h*.9,l.z+x*.9);l.y=(M+v+E+S)/4,o.position.set(l.x,l.y,l.z),o.rotation.set(-Math.atan2(M-v,3.2),l.rumbo,Math.atan2(E-S,1.8))}function u(h,x,M,v){let E=M?X_:Y_;x.mz>.05?l.v+=(l.v<0?12:4.5)*x.mz*h:x.mz<-.05?l.v+=(l.v>0?11:3)*x.mz*h:l.v-=Math.sign(l.v)*Math.min(Math.abs(l.v),1.6*h),l.v>E&&(l.v=Math.max(E,l.v-7*h)),l.v=Math.max(-5,l.v),l.rumbo+=l.v*Math.tan(-x.mx*.55/(1+Math.abs(l.v)*.09))/q_*h,l.x=Math.max(v.x0,Math.min(v.x1,l.x+Math.sin(l.rumbo)*l.v*h)),l.z=Math.max(v.z0,Math.min(v.z1,l.z+Math.cos(l.rumbo)*l.v*h)),l.ox=l.x,l.oz=l.z,l.orumbo=l.rumbo}function f(h,x,M){Object.assign(l,{x:h,z:x,rumbo:M,v:0,ox:h,oz:x,orumbo:M})}function b(h,x,M,v){l.ox=h,l.oz=x,l.orumbo=M,l.v=v}function _(h){let x=1-Math.exp(-h*10);l.x+=(l.ox-l.x)*x,l.z+=(l.oz-l.z)*x,l.rumbo+=J_(l.rumbo,l.orumbo)*x}function m(h,x){let M=Math.cos(l.rumbo),v=Math.sin(l.rumbo),E=h.x-l.x,S=h.z-l.z,T=E*M-S*v,g=E*v+S*M,A=$_+x,C=W_+x;Math.abs(T)>=A||Math.abs(g)>=C||(A-Math.abs(T)<C-Math.abs(g)?T=Math.sign(T||1)*A:g=Math.sign(g||1)*C,h.x=l.x+T*M+g*v,h.z=l.z-T*v+g*M)}return{grupo:o,st:l,local:d,asentar:p,conducir:u,fijar:f,remoto:b,seguir:_,empujar:m}}var gs={sanjose:{n:"San Jos\xE9",lat:9.9404,lon:-84.102,r:0},alajuela:{n:"Alajuela",lat:10.016,lon:-84.214,r:60},cartago:{n:"Cartago",lat:9.864,lon:-83.919,r:60},sanramon:{n:"San Ram\xF3n",lat:10.088,lon:-84.47,r:45},orotina:{n:"Orotina",lat:9.912,lon:-84.523,r:40},caldera:{n:"Caldera",lat:9.912,lon:-84.722,r:40},esparza:{n:"Esparza",lat:9.994,lon:-84.664,r:40},puntarenas:{n:"Puntarenas",lat:9.977,lon:-84.838,r:45},canas:{n:"Ca\xF1as",lat:10.428,lon:-85.094,r:45},liberia:{n:"Liberia",lat:10.634,lon:-85.44,r:60},lacruz:{n:"La Cruz",lat:11.073,lon:-85.632,r:35},penasblancas:{n:"Pe\xF1as Blancas \xB7 frontera con Nicaragua",lat:11.214,lon:-85.613,r:35},santacruz:{n:"Santa Cruz",lat:10.262,lon:-85.585,r:40},nicoya:{n:"Nicoya",lat:10.148,lon:-85.452,r:45},amistad:{n:"Puente La Amistad",lat:10.247,lon:-85.243,r:0},fortuna:{n:"La Fortuna",lat:10.471,lon:-84.645,r:40},arenal:{n:"Volc\xE1n Arenal",lat:10.463,lon:-84.703,r:0},tilaran:{n:"Tilar\xE1n",lat:10.473,lon:-84.968,r:35},monteverde:{n:"Monteverde",lat:10.31,lon:-84.82,r:0},poas:{n:"Volc\xE1n Po\xE1s",lat:10.198,lon:-84.231,r:0},irazu:{n:"Volc\xE1n Iraz\xFA",lat:9.979,lon:-83.852,r:0},guapiles:{n:"Gu\xE1piles",lat:10.215,lon:-83.79,r:45},siquirres:{n:"Siquirres",lat:10.098,lon:-83.507,r:40},limon:{n:"Lim\xF3n",lat:9.99,lon:-83.035,r:60},tortuguero:{n:"Tortuguero",lat:10.54,lon:-83.5,r:0},cahuita:{n:"Cahuita",lat:9.735,lon:-82.84,r:35},sixaola:{n:"Sixaola \xB7 frontera con Panam\xE1",lat:9.508,lon:-82.615,r:35},cerromuerte:{n:"Cerro de la Muerte",lat:9.56,lon:-83.75,r:0},chirripo:{n:"Cerro Chirrip\xF3",lat:9.484,lon:-83.489,r:0},sanisidro:{n:"San Isidro de El General",lat:9.376,lon:-83.703,r:50},buenosaires:{n:"Buenos Aires",lat:9.17,lon:-83.33,r:35},palmar:{n:"Palmar Norte",lat:8.96,lon:-83.46,r:40},neily:{n:"Ciudad Neily",lat:8.65,lon:-82.94,r:40},canoas:{n:"Paso Canoas \xB7 frontera con Panam\xE1",lat:8.534,lon:-82.84,r:35},jaco:{n:"Jac\xF3",lat:9.615,lon:-84.63,r:40},quepos:{n:"Quepos \xB7 Manuel Antonio",lat:9.43,lon:-84.16,r:40},dominical:{n:"Dominical",lat:9.25,lon:-83.86,r:30}},sf=[{n:"Ruta 1 \xB7 Interamericana Norte",p:["@oeste","alajuela",[10.06,-84.33],"sanramon","esparza",[10.1,-84.82],[10.262,-84.965],"canas",[10.526,-85.255],"liberia","lacruz","penasblancas"]},{n:"Ruta 27",p:["@oeste",[9.915,-84.24],"orotina","caldera"]},{n:"Ruta 23",p:["caldera",[9.955,-84.715],[9.985,-84.735],[9.978,-84.775],[9.977,-84.805],"puntarenas"]},{n:"Ruta 34 \xB7 Costanera Sur",p:["orotina",[9.76,-84.61],"jaco",[9.52,-84.32],"quepos","dominical",[9.16,-83.74],"palmar"]},{n:"Ruta 2 \xB7 Interamericana Sur",p:["@este","cartago",[9.74,-83.94],"cerromuerte","sanisidro","buenosaires",[9.02,-83.3],"palmar",[8.7,-83.1],"neily","canoas"]},{n:"Ruta 32",p:["@este",[10.03,-84.06],[10.09,-84],[10.16,-83.93],"guapiles","siquirres",[10.07,-83.29],"limon"]},{n:"Ruta 36",p:["limon",[9.92,-83.045],[9.84,-82.975],[9.78,-82.93],"cahuita",[9.63,-82.85],"sixaola"]},{n:"Ruta 21",p:["liberia",[10.447,-85.56],"santacruz","nicoya"]},{n:"Ruta 18",p:[[10.262,-84.965],"amistad",[10.2,-85.35],"nicoya"]},{n:"Ruta 142",p:["sanramon",[10.25,-84.52],"fortuna",[10.5,-84.7],[10.505,-84.8],"tilaran","canas"]}],of=[{k:"arenal",R:90,alto:52,cima:1633}],Jd=(a,e,t)=>[(t-a.lon0)*a.kx,-(e-a.lat0)*a.kz];var Ql=[[-80,20,60,90],[-1,58,122,158],[0,214,200,150],[40,120,168,92],[600,70,130,70],[1500,52,100,70],[2500,128,118,84],[3300,170,160,140],[3900,225,222,215]];function lf(a,e,t){let{w:n,h:i,paso:r,x0:s,z0:o}=e,l=document.createElement("canvas");l.width=n,l.height=i;let c=l.getContext("2d"),d=c.createImageData(n,i),p=d.data;for(let _=0;_<i;_++)for(let m=0;m<n;m++){let h=_*n+m,x=a[h],M=Ql.length-2;for(;M>0&&x<Ql[M][0];)M--;let v=Ql[M],E=Ql[M+1],S=Math.max(0,Math.min(1,(x-v[0])/(E[0]-v[0]))),T=x>0?Math.max(.55,Math.min(1.3,1+((a[h-1]??x)-(a[h+1]??x)+(a[h-n]??x)-(a[h+n]??x))/520)):1;for(let g=0;g<3;g++)p[h*4+g]=Math.min(255,(v[g+1]+(E[g+1]-v[g+1])*S)*T);p[h*4+3]=255}c.putImageData(d,0,0);let u=_=>(_-s)/r,f=_=>(_-o)/r;c.lineJoin=c.lineCap="round";for(let[_,m]of[[3.2,"rgba(40,30,20,.75)"],[1.6,"#F6E7A8"]]){c.lineWidth=_,c.strokeStyle=m;for(let h of t.rutas){c.beginPath();for(let x=0;x<h.X.length;x+=3)c.lineTo(u(h.X[x]),f(h.Z[x]));c.lineTo(u(h.X.at(-1)),f(h.Z.at(-1))),c.stroke()}}c.font="600 11px system-ui, Arial, sans-serif",c.textBaseline="middle",c.lineWidth=3;for(let _ of Object.values(gs)){let m=u((_.lon-e.lon0)*e.kx),h=f(-(_.lat-e.lat0)*e.kz),x=_.n.split(" \xB7 ")[0];c.fillStyle=_.r?"#fff":"#FFD627",c.strokeStyle="rgba(0,20,40,.85)",c.beginPath(),c.arc(m,h,_.r?3:2.4,0,7),c.fill(),c.stroke();let M=m>n-110;c.textAlign=M?"right":"left",c.strokeText(x,m+(M?-6:6),h),c.fillText(x,m+(M?-6:6),h)}function b(_,m){_.width=n,_.height=i;let h=_.getContext("2d");h.drawImage(l,0,0);for(let x of[...m].reverse())h.save(),h.translate(u(x.x),f(x.z)),h.fillStyle=x.color,h.strokeStyle="#00182F",h.lineWidth=2,x.rumbo!==void 0?(h.rotate(-x.rumbo+Math.PI),h.beginPath(),h.moveTo(0,-9),h.lineTo(6,7),h.lineTo(0,3.5),h.lineTo(-6,7),h.closePath()):(h.beginPath(),h.arc(0,0,4.5,0,7)),h.stroke(),h.fill(),h.restore()}return{dibujar:b}}var Z_=800,K_=1200,cf=[15260085,13230274,15910821,12178408,15852960,15120568,14207208,16052714,11130575],Cn={zinc:9325370,zincGris:9278361,blanco:16052714,piedra:12104358,pasto:7316826,cancha:5151301,linea:16053492,madera:8018492,metal:10133670,rojo:12597547,azul:2051727,amarillo:15320363};function df(a,e,t){let n=new ht,i={dist:0},r=new st({vertexColors:!0,roughness:.85}),s=a.filter(u=>u.r>0||Kd[u.k]).map(u=>({...u,malla:null,cajas:[]}));function o(u,f,b,_,m,h,x=4){if(u.r&&Math.hypot(f-u.x,b-u.z)>u.r-8)return null;let M=Math.cos(h),v=Math.sin(h),E=[];for(let[T,g]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,0]]){let A=f+T*_/2*M+g*m/2*v,C=b-T*_/2*v+g*m/2*M;if(t.cerca(A,C,i).dist<t.MEDIO+x)return null;E.push(e.altura(A,C))}let S=Math.min(...E);return Math.max(...E)-S>1?null:S-.3}function l(u){let f=An(),b=Xa([...u.k].reduce((S,T)=>S*31+T.charCodeAt(0)|0,7)),_=[],m=t.cerca(u.x,u.z,i).dist<u.r?Math.atan2(i.tx,i.tz):b()*Math.PI,h=(S,T,g,A,C,I,N,D=N,R)=>{let U=o(u,S,T,g,A,C,R);return U===null?!1:(f.caja(S,U,T,g,I+.3,A,N,C,{techo:D}),_.push({x:S,z:T,c:Math.cos(C),s:Math.sin(C),hx:g/2,hz:A/2}),U)},x=(S,T,g,A,C,I,N)=>{let D=Math.cos(C),R=Math.sin(C),U=(F,H)=>[S+F*D+H*R,N,T-F*R+H*D];f.quad(U(-g/2,-A/2),U(-g/2,A/2),U(g/2,A/2),U(g/2,-A/2),I)},M=(S,T)=>[u.x+S*Math.cos(m)+T*Math.sin(m),u.z-S*Math.sin(m)+T*Math.cos(m)];if(u.r){let S=t.cerca(...M(18,0),i).dist>t.cerca(...M(-18,0),i).dist?1:-1,[T,g]=M(S*20,0),A=o(u,T,g,22,22,m,2)??e.altura(T,g);x(T,g,22,22,m,Cn.pasto,A+.32);for(let[Se,V]of[[-7,-7],[7,-7],[-7,7],[7,7]]){let[ce,be]=M(S*20+Se,V);f.caja(ce,A,be,.5,3.4,.5,5916210),f.caja(ce,A+3.2,be,2.6,2,2.6,4094522)}let[C,I]=M(S*20,0);h(C,I,4.2,4.2,m+Math.PI/4,2.6,Cn.blanco,Cn.rojo,0);let N=u.k==="cartago",[D,R]=M(S*37,0),U=N?16:10,F=N?30:18,H=h(D,R,F,U,m+Math.PI/2,N?13:8,N?16052714:Cn.blanco,N?7109257:Cn.zincGris,2);if(H!==!1)for(let Se of N?[-5,5]:[0]){let[V,ce]=M(S*(37-F/2+2),Se);f.caja(V,H,ce,3.4,N?26:15,3.4,Cn.blanco,m,{techo:N?7109257:Cn.rojo}),f.caja(V,H+(N?26:15),ce,1.6,3,1.6,N?7109257:Cn.rojo,m)}let[$,W]=M(S*20,34),te=o(u,$,W,26,40,m,2);if(te!==null){x($,W,26,40,m,Cn.cancha,te+.32);for(let ce of[-1,1]){let[be,Me]=M(S*20,34+ce*19);f.caja(be,te+.3,Me,7.3,2.4,.12,Cn.linea,m)}let[Se,V]=M(S*20,34);x(Se,V,26,.25,m,Cn.linea,te+.34)}let le=0;for(let Se=-u.r;Se<=u.r;Se+=11)for(let V=-u.r;V<=u.r;V+=13){if(Math.abs(V-S*28)<22&&Math.abs(Se-12)<34||b()<.28)continue;let[ce,be]=M(V+(b()-.5)*3,Se+(b()-.5)*3),Me=6+b()*4,j=7+b()*5,Q=b()<.18?2:1,ue=b()<.12,Ee=ue?15852960:cf[Math.floor(b()*cf.length)];if(h(ce,be,Me,j,m+(b()<.5?0:Math.PI/2),Q*3-.2,Ee,b()<.7?Cn.zinc:Cn.zincGris)!==!1&&le++,le>60)break}}Kd[u.k]?.({s:u,a:f,cajas:_,sobre:h,carreteras:t,terreno:e,q:i});let v=f.geometria();v.computeBoundingSphere();let E=new We(v,r);E.castShadow=E.receiveShadow=!0,E.matrixAutoUpdate=!1,E.userData.centro=[u.x,u.z],u.malla=E,u.cajas=_,n.add(E)}function c(u){n.remove(u.malla),u.malla.geometry.dispose(),u.malla=null,u.cajas=[]}function d(u,f){for(let b of s){let _=Math.hypot(u-b.x,f-b.z);!b.malla&&_<Z_?l(b):b.malla&&_>K_&&c(b)}}function p(u,f){for(let b of s)if(!(!b.malla||Math.abs(u.x-b.x)>b.r+90||Math.abs(u.z-b.z)>b.r+90))for(let _ of b.cajas){let m=u.x-_.x,h=u.z-_.z,x=m*_.c-h*_.s,M=m*_.s+h*_.c,v=_.hx+f,E=_.hz+f;Math.abs(x)>=v||Math.abs(M)>=E||(v-Math.abs(x)<E-Math.abs(M)?x=Math.sign(x||1)*v:M=Math.sign(M||1)*E,u.x=_.x+x*_.c+M*_.s,u.z=_.z-x*_.s+M*_.c)}return u}return{grupo:n,sitios:s,actualizar:d,empujar:p}}function uf(a,e,t){let n=null,i=1/0;for(let c of a.rutas)for(let d=0;d<c.X.length;d++){let p=Math.hypot(c.X[d]-e,c.Z[d]-t);p<i&&(i=p,n={r:c,i:d})}let{r,i:s}=n,o=Math.min(r.X.length-1,s+1),l=Math.max(0,o-1);return{x:r.X[s],z:r.Z[s],y:r.Y[s],rumbo:Math.atan2(r.X[o]-r.X[l],r.Z[o]-r.Z[l]),nx:r.NX[s],nz:r.NZ[s]}}var Zd=({s:a,a:e,cajas:t,carreteras:n})=>{let i=uf(n,a.x,a.z),r=n.MEDIO+6,s=i.x+i.nx*r,o=i.z+i.nz*r;e.caja(s,i.y,o,6,3.6,16,15131350,i.rumbo,{techo:3104399}),t.push({x:s,z:o,c:Math.cos(i.rumbo),s:Math.sin(i.rumbo),hx:3,hz:8});let l=i.x+i.nx*(n.MEDIO+1),c=i.z+i.nz*(n.MEDIO+1);e.caja(l,i.y,c,.3,1.2,.3,15320363,i.rumbo);for(let d=0;d<6;d++){let p=(d+.5)/6*2*n.MEDIO;e.caja(l-i.nx*p,i.y+1.05,c-i.nz*p,.12,.12,1.1,d%2?12597547:16053492,i.rumbo+Math.PI/2)}for(let[d,p]of[[0,2051727],[1,16053492],[2,12597547]]){let u=s+i.nx*4+Math.sin(i.rumbo)*(d*2.4-2.4),f=o+i.nz*4+Math.cos(i.rumbo)*(d*2.4-2.4);e.caja(u,i.y,f,.1,7,.1,10133670),e.caja(u,i.y+6,f+.5,.05,1,1.4,p,i.rumbo)}},Kd={penasblancas:Zd,canoas:Zd,sixaola:Zd};Kd.amistad=({s:a,a:e,carreteras:t})=>{let n=uf(t,a.x,a.z),i=Math.sin(n.rumbo),r=Math.cos(n.rumbo),s=t.MEDIO+.6;for(let l of[-1,1])for(let c=-40;c<40;c+=4)e.caja(n.x+i*c+n.nx*l*s,n.y+.1,n.z+r*c+n.nz*l*s,.25,1.1,4,14277081,n.rumbo);e.caja(n.x+n.nx*(s+1.2),n.y-6,n.z+n.nz*(s+1.2),1.4,30,1.4,15263976,n.rumbo);let o=[n.x+n.nx*(s+1.2),n.y+23,n.z+n.nz*(s+1.2)];for(let l=-36;l<=36;l+=6)if(l){let c=[n.x+i*l+n.nx*s,n.y+1,n.z+r*l+n.nz*s],d=p=>[p[0],p[1]+.14,p[2]];e.quad(o,c,d(c),d(o),16053492),e.quad(d(o),d(c),c,o,16053492)}};function hf(a){let e=[...new Set(a.rutas.map(c=>c.n.match(/Ruta (\d+)/)[1]))],t=document.createElement("canvas");t.width=512,t.height=64;let n=t.getContext("2d"),i=512/e.length;n.font="bold 40px system-ui, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",e.forEach((c,d)=>{n.fillStyle="#1C6B3A",n.fillRect(d*i,0,i,64),n.fillStyle="#fff",n.fillText(c,d*i+i/2,34),n.strokeStyle="#fff",n.lineWidth=3,n.strokeRect(d*i+3,3,i-6,58)});let r=An(),s=An();for(let c of a.rutas){let d=e.indexOf(c.n.match(/Ruta (\d+)/)[1]),p=d/e.length,u=(d+1)/e.length;for(let f=25;f<c.X.length-5;f+=50){let b=a.MEDIO+1.8,_=c.X[f]-c.NX[f]*b,m=c.Z[f]-c.NZ[f]*b,h=c.Y[f];r.caja(_,h-.2,m,.12,2.6,.12,10133670);let x=c.NZ[f],M=-c.NX[f],v=(E,S)=>[_+c.NX[f]*E*.6-x*.08,h+S,m+c.NZ[f]*E*.6-M*.08];s.quad(v(-1,1.9),v(1,1.9),v(1,2.7),v(-1,2.7),16777215,[p,0,u,0,u,1,p,1]),s.quad(v(1,1.9),v(-1,1.9),v(-1,2.7),v(1,2.7),16777215,[p,0,u,0,u,1,p,1])}}let o=new ht,l=new Ba(t);return l.colorSpace=jt,o.add(new We(r.geometria(),new st({vertexColors:!0,roughness:.6})),new We(s.geometria(),new yn({map:l}))),o.traverse(c=>{c.matrixAutoUpdate=!1,c.updateMatrix(),c.geometry?.computeBoundingSphere()}),o}function ec(a,e,t,n,{a:i=1.8,b:r=3.2,s0:s=2.2,T:o=1.3}={}){let l=1-Math.pow(Math.max(0,a)/Math.max(.1,e),4);if(!isFinite(t))return i*l;let c=s+Math.max(0,a*o+a*n/(2*Math.sqrt(i*r)));return i*(l-Math.pow(c/Math.max(.1,t),2))}var Qe=null,pa=null,Ta=null,sr=null,ic=null,wa=null,xs=null,Qd=null,tc=null,or=null,vs=null,rr=null,bs=null,_s=null,ys=null,ff=0,mf={},gf=!1,ac=1,nc=new Set,bf=.55,Q_=-8,ey=a=>10**(a/20);function ty(){try{Qe?.resume?.()?.catch?.(()=>{})}catch{}}function xf(){if(Qe){ty();return}try{Qe=new(window.AudioContext||window.webkitAudioContext),Ta=Qe.createDynamicsCompressor(),Ta.threshold.value=-6,Ta.knee.value=8,Ta.ratio.value=6,Ta.attack.value=.003,Ta.release.value=.25,Ta.connect(Qe.destination),pa=Qe.createGain(),pa.gain.value=gf?0:bf*ac,pa.connect(Ta),sr=Qe.createGain(),sr.connect(pa),ic=Qe.createGain(),ic.connect(pa),wa=Qe.createGain(),wa.connect(pa),xs=Qe.createGain(),xs.gain.value=0;let a=Qe.createConvolver(),e=Math.floor(Qe.sampleRate*.6),t=Qe.createBuffer(1,e,Qe.sampleRate),n=t.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.exp(-i/(Qe.sampleRate*.12));a.buffer=t,Qd=Qe.createGain(),Qd.gain.value=1,sr.connect(xs).connect(a).connect(Qd).connect(pa),sy(),Sf(tu(mf))}catch{Qe=null}}function vf(a){return ac=Math.max(0,Math.min(1,a)),pa&&!gf&&(pa.gain.value=bf*ac),ac}function ny(a,e="general"){return a?nc.add(e):nc.delete(e),wa&&wa.gain.setTargetAtTime(nc.size?ey(Q_):1,Qe.currentTime,.15),nc.size>0}function Lt(a,e,{tipo:t="sine",vol:n=.3,ataque:i=.005,caida:r=null,glide:s=null,retardo:o=0,ui:l=!1}={}){if(!Qe)return;let c=Qe.currentTime+o,d=Qe.createOscillator(),p=Qe.createGain();d.type=t,d.frequency.setValueAtTime(a,c),s&&d.frequency.exponentialRampToValueAtTime(s,c+e),p.gain.setValueAtTime(0,c),p.gain.linearRampToValueAtTime(n,c+i),p.gain.exponentialRampToValueAtTime(1e-4,c+(r??e)),d.connect(p).connect(l?ic:sr),d.start(c),d.stop(c+e+.05)}var eu=new Map;function _f(a){if(!eu.has(a)){let e=Qe.createBuffer(1,2*a,Qe.sampleRate),t=e.getChannelData(0);for(let n=0;n<2*a;n++)t[n]=Math.random()*2-1;eu.set(a,e)}return eu.get(a)}function Zn(a,{vol:e=.3,filtro:t="lowpass",f:n=1200,q:i=1,retardo:r=0,ataque:s=.005}={}){if(!Qe)return;let o=Qe.currentTime+r,l=Math.floor(Qe.sampleRate*a),c=Qe.createBufferSource();c.buffer=_f(l);let d=Qe.createBiquadFilter();d.type=t,d.frequency.value=n,d.Q.value=i;let p=Qe.createGain();p.gain.setValueAtTime(0,o),p.gain.linearRampToValueAtTime(e,o+s),p.gain.exponentialRampToValueAtTime(1e-4,o+a),c.connect(d).connect(p).connect(sr),c.start(o,Math.random()*l/Qe.sampleRate),c.stop(o+a+.05)}var ft={clic:()=>Lt(880,.06,{tipo:"triangle",vol:.12,ui:!0}),hover:()=>Lt(1320,.03,{tipo:"sine",vol:.04,ui:!0}),ok:()=>{Lt(660,.12,{vol:.2,ui:!0}),Lt(990,.18,{vol:.2,retardo:.09,ui:!0})},logro:()=>[523,659,784,1047].forEach((a,e)=>Lt(a,.25,{tipo:"triangle",vol:.18,retardo:e*.09,ui:!0})),error:()=>{Lt(220,.22,{tipo:"sawtooth",vol:.14,glide:140})},alerta:()=>{Lt(1046,.09,{tipo:"square",vol:.07}),Lt(1046,.09,{tipo:"square",vol:.07,retardo:.16})},stop:()=>{Lt(392,.12,{tipo:"square",vol:.12}),Lt(294,.25,{tipo:"square",vol:.12,retardo:.12})},cono:()=>{Zn(.12,{vol:.25,f:500}),Lt(160,.12,{vol:.2,glide:90})},metal:()=>{Lt(1800+Math.random()*300,.25,{tipo:"triangle",vol:.06}),Lt(2600,.15,{vol:.03})},paso:()=>Zn(.08,{vol:.12,f:700+Math.random()*300}),cuerda:()=>Zn(.35,{vol:.12,filtro:"bandpass",f:2200,q:2,ataque:.1}),chasquido:()=>{Zn(.09,{vol:.6,filtro:"highpass",f:2500}),Lt(3200,.05,{tipo:"square",vol:.15})},golpe:()=>{Zn(.4,{vol:.6,f:260}),Lt(70,.4,{vol:.5,glide:40})},tir\u00F3n:()=>{Lt(140,.3,{tipo:"sawtooth",vol:.2,glide:90}),Zn(.25,{vol:.25,f:900})},trueno:()=>{Zn(2.6,{vol:.7,f:160,ataque:.05}),Zn(1.2,{vol:.4,f:600,retardo:.05})},tension:()=>Lt(180,.5,{tipo:"sawtooth",vol:.07,glide:420}),bocina:()=>{Lt(392,.35,{tipo:"square",vol:.12}),Lt(494,.35,{tipo:"square",vol:.1})},clip:()=>{Lt(1500,.05,{tipo:"square",vol:.08}),Zn(.05,{vol:.15,filtro:"highpass",f:3e3,retardo:.02})},presion:()=>Zn(.18,{vol:.1,filtro:"bandpass",f:1400,q:1.2}),insignia:()=>{[784,988,1319].forEach((a,e)=>Lt(a,.22,{tipo:"sine",vol:.16,retardo:e*.07,ui:!0}))},motosierra:()=>{Zn(.9,{vol:.16,f:240}),Lt(96,.9,{tipo:"sawtooth",vol:.07,glide:120})}},pf={calle:{transito:1,viento:1,lluvia:1,reverb:0,zumbido:1},ducto:{transito:0,viento:0,lluvia:0,reverb:.3,zumbido:0},neutro:{transito:0,viento:1,lluvia:1,reverb:0,zumbido:0}},ay={aereo:"calle",techo:"calle",media:"calle",poste:"calle",poda:"calle",ducto:"ducto"},iy={aereo:.6,techo:.5,media:.5,poste:.5,poda:.3};function ry(a){let e=/^(\d{1,2})/.exec(a??"");if(!e)return .6;let t=+e[1];return t>=7&&t<9||t>=16&&t<19?1:t>=9&&t<16?.7:t>=19&&t<22?.4:.15}function tu(a={}){let e=a.tipo??"aereo",t=pf[a.ambiente]?a.ambiente:ay[e]??"neutro",n=pf[t],i=/avenida/i.test(a.lugar??"")?1.3:1,r=(iy[e]??.5)*ry(a.hora)*i,s=Number.isFinite(a.viento)?a.viento:0,o=Math.max(0,Math.min(1,(s-8)/34));return{perfil:t,transito:Math.min(1,r)*n.transito*.09,viento:o*n.viento*.2,lluvia:n.lluvia,reverb:n.reverb*.6,zumbido:n.zumbido*.012}}var yf=null;function sy(){if(tc||!Qe)return;let a=3,e=Math.floor(Qe.sampleRate*a),t=_f(e),n=()=>{let p=Qe.createBufferSource();return p.buffer=t,p.loop=!0,p.start(0,Math.random()*a),p};tc=n();let i=Qe.createBiquadFilter();i.type="bandpass",i.frequency.value=3e3,i.Q.value=.4,or=Qe.createGain(),or.gain.value=0,tc.connect(i).connect(or).connect(wa);let r=n(),s=Qe.createBiquadFilter();s.type="lowpass",s.frequency.value=400,vs=Qe.createGain(),vs.gain.value=0,r.connect(s).connect(vs).connect(wa);let o=n(),l=Qe.createBiquadFilter();l.type="bandpass",l.frequency.value=500,l.Q.value=.6,rr=Qe.createGain(),rr.gain.value=0,bs=Qe.createOscillator(),bs.frequency.value=.2,_s=Qe.createGain(),_s.gain.value=0,bs.connect(_s).connect(rr.gain),o.connect(l).connect(rr).connect(wa),bs.start();let c=Qe.createOscillator();c.type="triangle",c.frequency.value=55;let d=Qe.createBiquadFilter();d.type="lowpass",d.frequency.value=160,ys=Qe.createGain(),ys.gain.value=0,c.connect(d).connect(ys).connect(wa),c.start(),yf={lfo:bs,fuentes:[tc,r,o,c]}}function Sf(a){if(!Qe||!or)return;let e=Qe.currentTime;or.gain.setTargetAtTime(ff*.35*a.lluvia,e,.6),vs.gain.setTargetAtTime(a.viento,e,.8),rr.gain.setTargetAtTime(a.transito,e,1.2),_s.gain.setTargetAtTime(a.transito*.5,e,1.2),ys.gain.setTargetAtTime(a.zumbido,e,1.2),xs.gain.setTargetAtTime(a.reverb,e,.3)}function Mf(a){ff=Math.max(0,Math.min(1,a)),Qe&&Sf(tu(mf))}function oy(){return Qe?{ctx:Qe,compresor:Ta,maestro:pa,efectos:sr,interfaz:ic,ambiente:wa,sala:xs,ambiente_:{lluvia:or,viento:vs,transito:rr,zumbido:ys,lfo:_s,lfoFuente:yf?.lfo}}:null}typeof window<"u"&&(window.__audio={grafo:oy,ducking:ny,nivelesAmbiente:tu});var nu=26,Ef=420,ly=1.8,Af=40,au=1400,rc=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534,14254635];function Tf({escena:a,carreteras:e,terreno:t,meta:n}){let i=Xa(99),r=new ht;a.add(r);let s=e.rutas,o=Array.from({length:nu},(I,N)=>({ruta:0,s:0,sentido:1,v:0,v0:0,x:0,z:0,y:0,rumbo:0,camion:N%6===0,vivo:!1})),l=new It(new Ut(1,1,1).translate(0,.5,0),new st({roughness:.5,metalness:.25}),nu*2),c=new It(new Ut(1,1,1).translate(0,.5,0),new st({color:1382170,roughness:.9}),nu);for(let I of[l,c])I.frustumCulled=!1,I.count=0,r.add(I);let d=new ke,p=new bt;o.forEach((I,N)=>{l.setColorAt(N*2,d.set(I.camion?15131350:rc[N%rc.length])),l.setColorAt(N*2+1,d.set(I.camion?3104399:1778992))});function u(I){let N=s[I.ruta],D=N.X.length-1,R=Math.max(0,Math.min(D-1e-6,I.s)),U=Math.floor(R),F=R-U,H=ly*I.sentido;I.x=N.X[U]+(N.X[U+1]-N.X[U])*F+N.NX[U]*H,I.z=N.Z[U]+(N.Z[U+1]-N.Z[U])*F+N.NZ[U]*H,I.y=N.Y[U]+(N.Y[U+1]-N.Y[U])*F+.12,I.rumbo=Math.atan2(N.X[U+1]-N.X[U],N.Z[U+1]-N.Z[U])+(I.sentido<0?Math.PI:0)}function f(I,N,D){for(let R=0;R<30;R++){let U=Math.floor(i()*s.length),F=s[U],H=Math.floor(i()*(F.X.length-2)),$=Math.hypot(F.X[H]-N,F.Z[H]-D);if(!($<100||$>Ef)){Object.assign(I,{ruta:U,s:H+i(),sentido:i()<.5?1:-1,vivo:!0,v0:(I.camion?13:17)+i()*5}),I.v=I.v0*.8,u(I);return}}I.vivo=!1}function b(I,N,D,R){let U=0;for(let F of o){if((!F.vivo||Math.hypot(F.x-N,F.z-D)>Ef+60)&&f(F,N,D),!F.vivo)continue;let H=1/0,$=0,W=Math.sin(F.rumbo),te=Math.cos(F.rumbo);for(let ce of o){if(ce===F||!ce.vivo||ce.ruta!==F.ruta||ce.sentido!==F.sentido)continue;let be=(ce.s-F.s)*F.sentido*8-5;be>-4&&be<H&&(H=Math.max(.1,be),$=F.v-ce.v)}for(let ce of R){let be=ce.x-F.x,Me=ce.z-F.z,j=be*W+Me*te,Q=Math.abs(be*te-Me*W);j>0&&Q<1.8&&j-3<H&&(H=Math.max(.1,j-3),$=F.v)}if(F.v=Math.max(0,F.v+ec(F.v,F.v0,H,$)*I),F.s+=F.sentido*F.v*I/8,F.s<=0||F.s>=s[F.ruta].X.length-1){F.vivo=!1;continue}u(F);let le=F.camion?7:4.3,Se=F.camion?2.3:1.8,V=F.camion?2.6:1.25;p.position.set(F.x,F.y+.3,F.z),p.rotation.set(0,F.rumbo,0),p.scale.set(Se,V,le),p.updateMatrix(),l.setMatrixAt(U*2,p.matrix),p.position.set(F.x+W*(F.camion?le*.38:0),F.y+.3+(F.camion?0:V*.9),F.z+te*(F.camion?le*.38:0)),p.scale.set(Se*.92,F.camion?V*1.05:.55,F.camion?1.8:le*.5),p.updateMatrix(),l.setMatrixAt(U*2+1,p.matrix),p.position.set(F.x,F.y,F.z),p.scale.set(Se+.1,.55,le*.8),p.updateMatrix(),c.setMatrixAt(U,p.matrix),U!==o.indexOf(F)&&(l.setColorAt(U*2,d.set(F.camion?15131350:rc[o.indexOf(F)%rc.length])),l.setColorAt(U*2+1,d.set(F.camion?3104399:1778992))),U++}l.count=U*2,c.count=U,l.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0)}let _=Array.from({length:Af},()=>({x:1e9,z:0,y:0,rumbo:0,meta:0,t:0})),m=new It(new Ut(1,1,1).translate(0,.5,0),new st({roughness:.9}),Af*2);m.frustumCulled=!1,r.add(m);let h={dist:0},x=[15920870,4864556,11565642,2762018],M=(I,N)=>{let D=t.altura(I,N),R=t.muestra;return R.e>15&&R.e<1800&&R.llano<.1&&R.pend*t.EX<.5&&e.cerca(I,N,h).dist>14?D:null};function v(I,N,D){_.forEach((R,U)=>{if(Math.hypot(R.x-N,R.z-D)>260){let H=Math.floor(U/4),$=H*2.4+i()*.5,W=70+H%5*35,te=N+Math.cos($)*W+i()*10,le=D+Math.sin($)*W+i()*10,Se=M(te,le);if(Se===null){R.x=1e9;return}Object.assign(R,{x:te,z:le,y:Se,rumbo:i()*6.3,meta:i()*6.3,t:i()*8}),m.setColorAt(U*2,d.set(x[U%4])),m.setColorAt(U*2+1,d.set(x[U%4]))}R.t-=I,R.t<0&&(R.t=4+i()*8,R.meta=R.rumbo+(i()-.5)*2);let F=R.t>5;if(R.rumbo+=(R.meta-R.rumbo)*Math.min(1,I),F){let H=R.x+Math.sin(R.rumbo)*.4*I,$=R.z+Math.cos(R.rumbo)*.4*I,W=M(H,$);W!==null?(R.x=H,R.z=$,R.y=W):R.meta+=Math.PI}p.position.set(R.x,R.y+.55,R.z),p.rotation.set(0,R.rumbo,0),p.scale.set(.7,.75,1.7),p.updateMatrix(),m.setMatrixAt(U*2,p.matrix),p.position.set(R.x+Math.sin(R.rumbo)*.95,R.y+(F?.95:.6),R.z+Math.cos(R.rumbo)*.95),p.scale.set(.42,.42,.6),p.updateMatrix(),m.setMatrixAt(U*2+1,p.matrix)}),m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0)}let E=new Float32Array(au*6),S=new pt;S.setAttribute("position",new gt(E,3));let T=new Wn(S,new Ln({color:12571622,transparent:!0,opacity:.55}));T.frustumCulled=!1,r.add(T);for(let I=0;I<au;I++)E[I*6]=(i()-.5)*60,E[I*6+1]=i()*30,E[I*6+2]=(i()-.5)*60;let g={lluvia:0,meta:0,niebla:0,region:"",reloj:0};function A(I,N){let D=n.lon0+I/n.kx,R=n.lat0-N/n.kz;t.relieve(I,N);let U=t.muestra.e,F=D>-84&&R>9.4,H=R<9.3,$=D<-84.9&&R>9.85;return{humedad:$?.1:F?.75:H?.6:.35,neblina:U>1400?Math.min(1,(U-1400)/1200):0,nombre:$?"seco":F?"Caribe":H?"zona sur":"Valle Central"}}function C(I,N,D){g.reloj-=I;let R=A(N.position.x,N.position.z);g.region=R.nombre,g.reloj<0&&(g.reloj=40+i()*60,g.meta=i()<R.humedad?.4+i()*.6:0),D!==null&&(g.meta=D),g.lluvia+=(g.meta-g.lluvia)*Math.min(1,I*.3),g.niebla+=(R.neblina-g.niebla)*Math.min(1,I*.5);let U=Math.round(au*g.lluvia);for(let F=0;F<U;F++){let H=E[F*6+1]-22*I;H<-4&&(H=26,E[F*6]=(i()-.5)*60,E[F*6+2]=(i()-.5)*60),E[F*6+1]=H,E[F*6+3]=E[F*6]+.05,E[F*6+4]=H-.7,E[F*6+5]=E[F*6+2]}return S.setDrawRange(0,U*2),S.attributes.position.needsUpdate=!0,T.position.set(N.position.x,N.position.y-8,N.position.z),Mf(g.lluvia),g}return{grupo:r,autos:o,vacas:_,clima:g,cada(I,N,D,R,U,F=null){return b(I,D,R,U),v(I,D,R),C(I,N,F)}}}var wf=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534],Ss=4.2;function Cf(a,e,t){let n=Xa(7),i=-40,r=a.largo+80,s=[];for(let S=0;S<t;S++)s.push({d:i+r*S/t+n()*4,a:Xl,v:5,v0:5.5+n()*2.5,x:0,z:0,rumbo:0});let o=e.estacionamiento,l=[];for(let S=0;S<o.n;S++){let T=o.d0+(S+.5)*o.paso;n()<.55&&Math.abs(T-e.dPick)>5.4&&l.push({d:T,a:o.a,v:0,x:0,z:0,rumbo:0})}for(let S of l)e.cajas.push({d0:S.d-Ss/2,d1:S.d+Ss/2,a0:S.a-.9,a1:S.a+.9});let c=[...s,...l],d=c.length,p=new st({roughness:.45,metalness:.3}),u=new It(new Ut(1.75,.62,Ss).translate(0,.62,0),p,d),f=new It(new Ut(1.6,.52,2.1).translate(0,1.18,-.25),new st({color:1778992,roughness:.2,metalness:.5}),d),b=new Xt(.33,.33,.24,10).rotateZ(Math.PI/2),_=new It(b,new st({color:1316119,roughness:.9}),d*4),m=new ke;c.forEach((S,T)=>u.setColorAt(T,m.set(wf[Math.floor(n()*wf.length)])));let h=new ht;h.add(u,f,_);for(let S of[u,f,_])S.frustumCulled=!1;let x=new bt,M={};function v(S){let T=c[S];a.en(T.d,T.a,M),T.x=M.x,T.z=M.z,T.rumbo=Math.atan2(M.tx,M.tz),x.position.set(M.x,0,M.z),x.rotation.set(0,T.rumbo,0),x.updateMatrix(),u.setMatrixAt(S,x.matrix),f.setMatrixAt(S,x.matrix);let g=Math.cos(T.rumbo),A=Math.sin(T.rumbo);[[-.82,1.35],[.82,1.35],[-.82,-1.35],[.82,-1.35]].forEach(([C,I],N)=>{x.position.set(M.x+C*g+I*A,.33,M.z-C*A+I*g),x.updateMatrix(),_.setMatrixAt(S*4+N,x.matrix)})}for(let S=0;S<d;S++)v(S);function E(S,T){let g=s.length;for(let A=0;A<g;A++){let C=s[A],I=s[(A+1)%g],N=g>1?(I.d-C.d+r)%r-Ss-.4:1/0,D=g>1?C.v-I.v:0;for(let R of T){if(Math.abs(R.a-C.a)>1.9)continue;let U=(R.d-C.d+r)%r-Ss/2-1.2;U<N&&U<40&&(N=U,D=C.v)}C.v=Math.max(0,C.v+ec(C.v,C.v0,Math.max(.1,N),D)*S),C.d+=C.v*S,C.d>i+r&&(C.d-=r),v(A)}u.instanceMatrix.needsUpdate=f.instanceMatrix.needsUpdate=_.instanceMatrix.needsUpdate=!0}return{grupo:h,todos:c,cada:E}}function Pf(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),r={},s={},o=a[0].morphTargetsRelative,l=new pt,c=0;for(let d=0;d<a.length;++d){let p=a[d],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,p=[];for(let u=0;u<a.length;++u){let f=a[u].index;for(let b=0;b<f.count;++b)p.push(f.getX(b)+d);d+=a[u].attributes.position.count}l.setIndex(p)}for(let d in r){let p=Rf(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(let d in s){let p=s[d][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let u=0;u<p;++u){let f=[];for(let _=0;_<s[d].length;++_)f.push(s[d][_][u]);let b=Rf(f);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(b)}}}return l}function Rf(a){let e,t,n,i=-1,r=0;for(let c=0;c<a.length;++c){let d=a[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let s=new e(r),o=new gt(s,t,n),l=0;for(let c=0;c<a.length;++c){let d=a[c];if(d.isInterleavedBufferAttribute){let p=l/t;for(let u=0,f=d.count;u<f;u++)for(let b=0;b<t;b++){let _=d.getComponent(u,b);o.setComponent(u+p,b,_)}}else s.set(d.array,l);l+=d.count*t}return i!==void 0&&(o.gpuType=i),o}var iu=new Map,gn=(a,e={})=>{let t=a+JSON.stringify(e);return iu.has(t)||iu.set(t,new st({color:a,roughness:.7,...e})),iu.get(t)};function sc(a,e,t){let n=new qi(e,Math.max(.001,a-2*e),4,10);n.translate(0,-a/2,0);let i=new We(n,t);return i.castShadow=!0,i}var lr=.3,oc=.29,If=new O(0,-1,-.4).normalize(),ru=new O,su=new O,bi=new O,Df=new O,Lf=new O,ou=new O,xi=new O,Nf=new O,Ms=new O,cy=new St,lu={x:0,z:0};function Ff(a){let e=Math.asin(Math.max(-1,Math.min(1,a.x))),t=Math.cos(e);return lu.z=e,lu.x=t>1e-4?Math.atan2(-a.z/t,-a.y/t):0,lu}var dy=.12;function Uf({camisa:a=16040475,pantalon:e=2046819,piel:t=13148794,pelo:n=2825492,uniforme:i=!0}={}){let r={camisa:gn(a),pantalon:gn(e),piel:gn(t,{roughness:.6}),pelo:gn(n,{roughness:.9}),casco:gn(16766503,{roughness:.35}),arnes:gn(10211642,{roughness:.6}),metal:gn(12896978,{roughness:.25,metalness:.8}),plastico:gn(2830134,{roughness:.5}),bota:gn(3877408),lentes:gn(1844272,{roughness:.1,metalness:.4}),guante:gn(13214042,{roughness:.8}),reflectivo:gn(14221135,{roughness:.4,emissive:3359744})},s=new ht,o=new ht;o.position.y=.92,s.add(o);let l=new We(new ca(.15,14,10),r.pantalon);l.scale.set(1.15,.8,.9),l.castShadow=!0,o.add(l);let c=ae=>{let ne=new ht;ne.position.set(ae*.095,-.04,0),o.add(ne),ne.add(sc(.45,.072,r.pantalon));let de=new ht;de.position.y=-.45,ne.add(de),de.add(sc(.43,.058,r.pantalon));let ee=new ht;ee.position.y=-.43,de.add(ee);let L=new We(new Ut(.11,.085,.27),r.bota);return L.position.set(0,-.03,.06),L.castShadow=!0,ee.add(L),{h:ne,rod:de,tob:ee}},d=c(1),p=c(-1),u=new ht;u.position.y=.05,o.add(u);let f=new We(new qi(.155,.34,6,14),r.camisa);if(f.position.y=.3,f.scale.set(1.12,1,.78),f.castShadow=!0,u.add(f),i)for(let ae of[.2,.38]){let ne=new We(new Xt(.176,.176,.035,20,1,!0),r.reflectivo);ne.position.y=ae,ne.scale.set(1.12,1,.8),u.add(ne)}let b=new ht;b.position.y=.58,u.add(b);let _=new We(new ca(.105,18,14),r.piel);_.position.y=.13,_.scale.set(.92,1.05,1),_.castShadow=!0,b.add(_);let m=new We(new ca(.11,16,10,0,Math.PI*2,0,Math.PI*.55),r.pelo);m.position.y=.145,m.rotation.x=-.25,b.add(m);for(let ae of[-1,1]){let ne=new We(new ca(.013,8,6),gn(1118481));ne.position.set(ae*.036,.15,.092),b.add(ne)}let h=new We(new Ut(.13,.035,.02),r.lentes);h.position.set(0,.15,.1),h.visible=!1,b.add(h);let x=new ht;x.position.y=.19,x.visible=!1,b.add(x);let M=new We(new ca(.123,22,12,0,Math.PI*2,0,Math.PI/2),r.casco);M.castShadow=!0;let v=new We(new Xt(.18,.18,.014,30),r.casco);v.position.y=.004,v.castShadow=!0;let E=new We(new Fn(.105,.006,6,22,Math.PI),r.plastico);E.rotation.set(0,Math.PI/2,Math.PI),E.position.y=-.03,x.add(M,v,E);let S=ae=>{let ne=new ht;ne.position.set(ae*.2,.5,0),u.add(ne),ne.add(sc(.3,.052,r.camisa));let de=new ht;de.position.y=-.3,ne.add(de),de.add(sc(.27,.045,r.camisa));let ee=new We(new ca(.05,10,8),r.piel);return ee.position.y=-.29,de.add(ee),{h:ne,codo:de,mano:ee}},T=S(1),g=S(-1),A=new We(new Fn(.05,.014,6,14),gn(13938487,{metalness:.9,roughness:.2}));A.rotation.x=Math.PI/2,A.position.y=-.24,A.visible=!1,T.codo.add(A);let C=new ht;C.visible=!1;let I=[];for(let ae of[-1,1]){let ne=[[.07,.02,.135],[.085,.3,.14],[.1,.5,.1],[.11,.6,0],[.1,.5,-.1],[.085,.3,-.14],[.07,.02,-.135]].map(([ee,L,ve])=>new O(ae*ee,L,ve)),de=new We(new Wr(new $i(ne),30,.016,6),r.arnes);u.add(de),I.push(de)}let N=new We(new Ut(.2,.03,.012),r.arnes);N.position.set(0,.36,.142),u.add(N),I.push(N);let D=new We(new Fn(.172,.017,8,36),r.arnes);D.rotation.x=Math.PI/2,D.scale.set(1.08,.82,1),D.position.y=.02,o.add(D),I.push(D);for(let ae of[d,p]){let ne=new We(new Fn(.08,.013,8,24),r.arnes);ne.rotation.x=Math.PI/2,ne.position.y=-.12,ae.h.add(ne),I.push(ne)}let R=()=>new We(new Fn(.03,.008,8,18),r.metal),U=R();U.position.set(.19,.02,0),U.rotation.y=Math.PI/2,o.add(U);let F=R();F.position.set(-.19,.02,0),F.rotation.y=Math.PI/2,o.add(F);let H=R();H.position.set(0,.48,-.14),u.add(H);let $=R();$.position.set(0,.2,.158),$.scale.setScalar(1.15),u.add($);let W=new We(new Ut(.034,.17,.012),r.arnes);W.position.set(0,.285,.15),u.add(W);let te=new We(new Fn(.024,.009,8,14,Math.PI*1.3),r.plastico);te.position.set(-.12,-.01,.13),te.rotation.z=Math.PI*.85,o.add(te),I.push(U,F,H,$,W,te);let le=ae=>I.forEach(ne=>{ne.visible=ae});le(!1);let Se=(ae,ne,de,ee)=>{let L=new bt;return L.position.set(ne,de,ee),ae.add(L),L},V={dIzq:Se(U,0,0,0),dDer:Se(F,0,0,0),porta:Se(te,0,0,0),dorsal:Se(H,0,0,0),frontal:Se($,0,-.02,0),pecho:Se(u,0,.38,.2),cabeza:Se(b,0,.32,0),manoI:Se(T.mano,0,0,0),manoD:Se(g.mano,0,0,0)};{let ae=new Set([h,A,...I,T.mano,g.mano]);x.traverse(ne=>ae.add(ne)),s.updateMatrixWorld(!0),s.traverse(ne=>{if(!ne.isGroup)return;let de=new Map;for(let ee of ne.children)ee.isMesh&&!ae.has(ee)&&ee.visible&&!ee.children.length&&(de.has(ee.material)||de.set(ee.material,[]),de.get(ee.material).push(ee));for(let[ee,L]of de){if(L.length<2)continue;let ve=L.map(P=>{P.updateMatrix();let y=(P.geometry.index?P.geometry.toNonIndexed():P.geometry.clone()).applyMatrix4(P.matrix);for(let z of Object.keys(y.attributes))["position","normal","uv"].includes(z)||y.deleteAttribute(z);return y}),me=new We(Pf(ve,!1),ee);me.castShadow=L.some(P=>P.castShadow),L.forEach(P=>ne.remove(P)),ne.add(me)}})}let ce=new Set;function be(ae,ne=!0){ne?ce.add(ae):ce.delete(ae),ae==="casco"&&(x.visible=ne),ae==="lentes"&&(h.visible=ne),ae==="guantes"&&(T.mano.material=g.mano.material=ne?r.guante:r.piel),ae==="arnes"&&le(ne),ae==="reloj"&&(A.visible=ne)}let Me=jl.nuevo,j=[d.h,d.rod,d.tob,p.h,p.rod,p.tob,T.h,T.codo,g.h,g.codo,u,b,o],Q=j.length*3+1,ue=new Float64Array(Q),Ee=new Float64Array(Q),J=new Float64Array(Q),B=null,pe=ae=>{let ne=0;for(let de of j)ae[ne++]=de.rotation.x,ae[ne++]=de.rotation.y,ae[ne++]=de.rotation.z;ae[ne]=o.position.y},fe=ae=>{let ne=0;for(let de of j)de.rotation.set(ae[ne++],ae[ne++],ae[ne++]);o.position.y=ae[ne]};function Ae(ae,ne){if(u.updateMatrix(),ru.copy(ne).sub(o.position).applyMatrix4(cy.copy(u.matrix).invert()),su.copy(ae.h.position),bi.subVectors(ru,su),bi.lengthSq()<1e-8)return;let de=Math.max(lr-oc+.001,Math.min(lr+oc-.001,bi.length()));bi.normalize();let ee=Math.acos(Math.max(-1,Math.min(1,(lr*lr+de*de-oc*oc)/(2*lr*de))));Lf.copy(If).addScaledVector(bi,-If.dot(bi)).normalize(),ou.copy(bi).multiplyScalar(Math.cos(ee)).addScaledVector(Lf,Math.sin(ee)),Df.copy(su).addScaledVector(ou,lr),xi.subVectors(ru,Df).normalize();let L=Ff(ou);ae.h.rotation.set(L.x,0,L.z);let ve=Math.cos(L.x),me=Math.sin(L.x),P=Math.cos(L.z),y=Math.sin(L.z),z=xi.y*ve+xi.z*me,q=-xi.y*me+xi.z*ve;Nf.set(xi.x*P+z*y,-xi.x*y+z*P,q);let Y=Ff(Nf);ae.codo.rotation.set(Y.x,0,Y.z)}function Re(ae,ne){if(ae==="escalar"){let de=1.45+.06*ne,ee=1.45-.06*ne;Ae(T,Ms.set(.23,de,.1+.268*de-.04)),Ae(g,Ms.set(-.23,ee,.1+.268*ee-.04))}else if(ae==="sostener"){let de=.3414000000000001;Ae(T,Ms.set(.23,1.05,de)),Ae(g,Ms.set(-.23,1.05,de))}else ae==="banderero"?Ae(g,Ms.set(-.22,1.62,.3)):ae==="caminar"&&(T.codo.rotation.x=-.25-.2*Math.max(0,ne),g.codo.rotation.x=-.25-.2*Math.max(0,-ne))}function Le({tipo:ae="idle",fase:ne=0,t:de=0,mirarArriba:ee=0,dt:L}={}){let ve=Me&&L!==void 0&&B!==null&&ae!==B;ve&&pe(ue);for(let y of[d.h,d.rod,d.tob,p.h,p.rod,p.tob,T.h,T.codo,g.h,g.codo,u,b,o])y.rotation.set(0,0,0);o.position.y=.92;let me=Math.sin(ne),P=Math.cos(ne);if(T.h.rotation.z=-.12,g.h.rotation.z=.12,u.rotation.x=.02*Math.sin(de*2),b.rotation.x=-ee,ae==="caminar")d.h.rotation.x=me*.55,p.h.rotation.x=-me*.55,d.rod.rotation.x=Math.max(0,-me)*.7,p.rod.rotation.x=Math.max(0,me)*.7,T.h.rotation.x=-me*.45,g.h.rotation.x=me*.45,T.codo.rotation.x=-.3,g.codo.rotation.x=-.3,o.position.y=.92+Math.abs(P)*.025;else if(ae==="escalar")T.h.rotation.set(-2.5+me*.3,0,-.18),T.codo.rotation.x=-.45-Math.max(0,me)*.3,g.h.rotation.set(-2.5-me*.3,0,.18),g.codo.rotation.x=-.45-Math.max(0,-me)*.3,d.h.rotation.x=-.55-Math.max(0,me)*.5,d.rod.rotation.x=.7+Math.max(0,me)*.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.2-Math.max(0,-me)*.5,p.rod.rotation.x=.25+Math.max(0,-me)*.6,p.tob.rotation.x=-.05,u.rotation.x=.12,b.rotation.x=-.25-ee;else if(ae==="trabajar"){let y=Math.sin(de*3)*.1;T.h.rotation.set(-2.25+y,0,-.25),T.codo.rotation.x=-.6+y,g.h.rotation.set(-2-y,0,.3),g.codo.rotation.x=-.8-y,d.h.rotation.x=-.45,d.rod.rotation.x=.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.08,p.rod.rotation.x=.12,u.rotation.x=.14,b.rotation.x=-.35}else ae==="sostener"?(T.h.rotation.set(-1.35,0,-.1),g.h.rotation.set(-1.35,0,.1),T.codo.rotation.x=-.3,g.codo.rotation.x=-.3):ae==="senalar"?(g.h.rotation.set(-1.5,0,.5),g.codo.rotation.x=-.1,u.rotation.y=.2):ae==="cargar"?(T.h.rotation.set(-2.9,0,-.2),g.h.rotation.set(-2.9,0,.2),T.codo.rotation.x=-.2,g.codo.rotation.x=-.2,d.h.rotation.x=me*.45,p.h.rotation.x=-me*.45,d.rod.rotation.x=Math.max(0,-me)*.6,p.rod.rotation.x=Math.max(0,me)*.6):ae==="caida"?(T.h.rotation.set(-2.8+me*.4,0,-.6),g.h.rotation.set(-2.6-me*.4,0,.6),d.h.rotation.x=-.4+me*.3,p.h.rotation.x=-.1-me*.3,d.rod.rotation.x=.5,p.rod.rotation.x=.3):ae==="colgado"?(T.h.rotation.set(-2.9,0,-.3),g.h.rotation.set(-2.9,0,.3),d.h.rotation.x=-.3,p.h.rotation.x=-.1,d.rod.rotation.x=.4,p.rod.rotation.x=.3,u.rotation.x=-.1):ae==="tendido"?(T.h.rotation.set(-.3,0,-1.1),g.h.rotation.set(.2,0,1.3),T.codo.rotation.x=-.5,g.codo.rotation.x=-.2,d.h.rotation.set(.05,0,.12),p.h.rotation.set(-.15,0,-.08),p.rod.rotation.x=.35,b.rotation.y=.5):ae==="banderero"?(g.h.rotation.set(-1.55,0,.15),g.codo.rotation.x=-.15,T.h.rotation.set(-.9+Math.sin(de*2.2)*.5,0,-.5),T.codo.rotation.x=-.4):ae==="celular"?(g.h.rotation.set(-1.1,0,.25),g.codo.rotation.x=-1.2,b.rotation.x=.45,d.h.rotation.x=me*.45,p.h.rotation.x=-me*.45,d.rod.rotation.x=Math.max(0,-me)*.6,p.rod.rotation.x=Math.max(0,me)*.6):(T.codo.rotation.x=-.08,g.codo.rotation.x=-.08);if(Me){if(Re(ae,me),pe(Ee),L===void 0)J.fill(0);else{if(ve)for(let z=0;z<Q;z++)J[z]=ue[z]-Ee[z];let y=Math.exp(-L/dy);for(let z=0;z<Q;z++){let q=J[z]*y;Math.abs(q)<1e-4&&(q=0),J[z]=q,Ee[z]+=q}fe(Ee)}B=ae}}Le();let _e=new Set([s,o,d.h,d.rod,d.tob,p.h,p.rod,p.tob,u,b,T.h,T.codo,g.h,g.codo]);return s.updateMatrixWorld(!0),s.traverse(ae=>{_e.has(ae)||(ae.updateMatrix(),ae.matrixAutoUpdate=!1)}),{raiz:s,pose:Le,equipar:be,equipado:ce,refs:V,M:r,partes:{pelvis:o,torso:u,cuello:b,bi:T,bd:g,pi:d,pd:p}}}var uy=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a)),cu={c:"cargar",e:"escalar",t:"trabajar",s:"sostener"};function du(a){let e=Uf(a);return e.raiz.traverse(t=>{t.isMesh&&(t.castShadow=!1)}),e}function Of(a,e){let t=new Map;function n(s,o,l,c,d,p,u="i"){let f=t.get(s);return f||(f={id:s,p:du(d),x:o,z:l,y:p??e(o,l),ox:o,oz:l,rumbo:c??0,orumbo:c??0,fase:Math.random()*6,d:0,a:0},f.p.equipar("casco",!!d?.uniforme),d?.arnes&&f.p.equipar("arnes"),a.add(f.p.raiz),t.set(s,f)),f.ox=o,f.oz=l,f.oy=p,f.pose=u,c!==void 0&&(f.orumbo=c),f}function i(s){let o=t.get(s);o&&(a.remove(o.p.raiz),t.delete(s))}function r(s,o,l){let c=1-Math.exp(-s*10);for(let d of t.values()){let p=(d.ox-d.x)*c,u=(d.oz-d.z)*c,f=((d.oy??e(d.x,d.z))-d.y)*c,b=Math.hypot(p,f,u);d.x+=p,d.z+=u,d.y+=f;let _=Math.hypot(p,u)/s>.25,m=cu[d.pose];d.rumbo=uy(d.rumbo,_&&!m?Math.atan2(p,u):d.orumbo)*c+d.rumbo*(1-c),d.p.raiz.position.set(d.x,d.y,d.z),d.p.raiz.rotation.y=d.rumbo;let h=Math.hypot(d.x-l.position.x,d.z-l.position.z);d.p.raiz.visible=h<140&&d.pose!=="o",h<60&&(d.fase+=b*4.19,d.p.pose({tipo:m??(_?"caminar":"idle"),fase:d.fase,t:o,dt:s}))}}return{mapa:t,fijar:n,quitar:i,cada:r}}function Bf(a){let e=new It(new kr(.5,16).rotateX(-Math.PI/2),new yn({color:0,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a);e.frustumCulled=!1,e.renderOrder=1;let t=new bt;return{malla:e,fijar(n,i,r,s,o,l=o,c=0){t.position.set(i,r+.02,s),t.rotation.set(0,c,0),t.scale.set(o,1,l),t.updateMatrix(),e.setMatrixAt(n,t.matrix)},listo(n){e.count=Math.min(n,a),e.instanceMatrix.needsUpdate=!0}}}var uu=.16,lc=56,cc=a=>Math.abs(a)<uu?0:(a-Math.sign(a)*uu)/(1-uu);function zf(a,e){let t=new Set,n=new Set,i={mx:0,mz:0,gx:0,gy:0,correr:!1,accion:!1,vista:!1,origen:nr?"t\xE1ctil":"teclado y rat\xF3n"},r=0,s=0,o={sensibilidad:1,invertir:!1};addEventListener("keydown",x=>{x.repeat||(t.add(x.code),i.origen="teclado y rat\xF3n",x.target?.tagName!=="INPUT"&&(x.code==="KeyE"&&n.add("accion"),x.code==="KeyV"&&n.add("vista"),x.code==="KeyR"&&n.add("radio"),x.code==="KeyM"&&n.add("mapa"),x.code==="KeyP"&&n.add("pausa"),x.code==="KeyH"&&n.add("bocina")))}),addEventListener("keyup",x=>t.delete(x.code)),addEventListener("blur",()=>t.clear());let l=(...x)=>x.some(M=>t.has(M))?1:0;a.addEventListener("click",()=>{!nr&&document.pointerLockElement!==a&&a.requestPointerLock?.()?.catch?.(()=>{})}),addEventListener("mousemove",x=>{document.pointerLockElement===a&&(r+=x.movementX*.0024,s-=x.movementY*.0024)});let c={id:null,x0:0,y0:0,x:0,y:0},d={id:null,x:0,y:0},p=document.createElement("div"),u=document.createElement("div");p.className="mu-base",u.className="mu-perilla",p.append(u),p.hidden=!0,e.append(p),a.style.touchAction="none",a.addEventListener("pointerdown",x=>{x.pointerType==="touch"&&(i.origen="t\xE1ctil",x.clientX<innerWidth*.45&&c.id===null?(Object.assign(c,{id:x.pointerId,x0:x.clientX,y0:x.clientY,x:0,y:0}),p.style.left=x.clientX+"px",p.style.top=x.clientY+"px",u.style.transform="",p.hidden=!1):d.id===null&&Object.assign(d,{id:x.pointerId,x:x.clientX,y:x.clientY}))}),a.addEventListener("pointermove",x=>{if(x.pointerId===c.id){let M=(x.clientX-c.x0)/lc,v=(x.clientY-c.y0)/lc,E=Math.hypot(M,v);E>1&&(M/=E,v/=E),c.x=M,c.y=v,u.style.transform=`translate(${M*lc}px, ${v*lc}px)`}else x.pointerId===d.id&&(r+=(x.clientX-d.x)*.0052,s-=(x.clientY-d.y)*.0052,d.x=x.clientX,d.y=x.clientY)});let f=x=>{x.pointerId===c.id&&(c.id=null,c.x=c.y=0,p.hidden=!0),x.pointerId===d.id&&(d.id=null)};if(a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f),nr)for(let[x,M,v]of[["pausa","\u23F8","Pausa"],["mapa","\u{1F5FA}","Mapa"],["radio","\u{1F4FB}","Radio"],["vista","\u{1F441}","Cambiar de vista"],["accion","\u270B","Acci\xF3n"]]){let E=document.createElement("button");E.className="mu-boton mu-"+x,E.textContent=M,E.setAttribute("aria-label",v),E.addEventListener("pointerdown",S=>{S.preventDefault(),n.add(x)}),e.append(E)}let b={},_={0:"accion",1:"atras",2:"radio",3:"vista",4:"bocina",8:"mapa",9:"pausa",12:"arriba",13:"abajo"};function m(x){let M=null;try{M=Array.from(navigator.getGamepads?.()??[]).find(I=>I?.connected&&I.mapping==="standard")}catch{}if(!M)return null;let v=cc(M.axes[2]),E=cc(M.axes[3]);(v||E)&&(r+=v*2.6*x,s-=E*1.9*x);let S=!1;for(let I in _){let N=!!M.buttons[I]?.pressed;N&&!b[I]&&(n.add(_[I]),S=!0),b[I]=N}let T=cc(M.axes[0]),g=-cc(M.axes[1]),A=!!(M.buttons[6]?.pressed||M.buttons[10]?.pressed),C=g>.6?"arriba":g<-.6?"abajo":null;return C&&b.pal!==C&&n.add(C),b.pal=C,(T||g||v||E||S)&&(i.origen="control"),{mx:T,mz:g,correr:A}}function h(x){let M=l("KeyD","ArrowRight")-l("KeyA","ArrowLeft"),v=l("KeyW","ArrowUp")-l("KeyS","ArrowDown"),E=!!l("ShiftLeft","ShiftRight");c.id!==null&&(M=c.x,v=-c.y,E=Math.hypot(M,v)>.92);let S=m(x);S&&(S.mx||S.mz)&&(M=S.mx,v=S.mz,E=S.correr);let T=Math.hypot(M,v);T>1&&(M/=T,v/=T),i.mx=M,i.mz=v,i.correr=E,i.gx=r*o.sensibilidad,i.gy=s*o.sensibilidad*(o.invertir?-1:1),r=s=0;for(let g of["accion","vista","radio","mapa","pausa","bocina","atras","arriba","abajo"])i[g]=n.has(g);return n.clear(),i}return{leer:h,pulsar:x=>n.add(x),mirada:o}}var hy=`
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
`;function Gf(){let a=document.createElement("style");a.textContent=hy,document.head.append(a);let e=document.createElement("div");return e.className="mu-capa",document.body.append(e),e}function Hf(a,e){let t=document.createElement("div");t.className="mu-diag",t.hidden=!e;let n=document.createElement("div"),i=document.createElement("button");return i.textContent="Copiar diagn\xF3stico",i.addEventListener("click",async()=>{let r=`${n.textContent}
${navigator.userAgent}
${innerWidth}\xD7${innerHeight} \xB7 dpr ${devicePixelRatio}`;try{await navigator.clipboard.writeText(r),i.textContent="Copiado \u2713"}catch{i.textContent="No se pudo copiar"}setTimeout(()=>{i.textContent="Copiar diagn\xF3stico"},2e3)}),t.append(n,i),a.append(t),addEventListener("keydown",r=>{r.code==="F3"&&(r.preventDefault(),t.hidden=!t.hidden)}),{escribir:r=>{n.textContent=r},mostrar:r=>{t.hidden=!r}}}var Ya={inspeccion:"GS-101 \xB7 Inspecci\xF3n de poster\xEDa (\xA75.6.3) \xB7 p. 21",demarcacion:"GS-101 \xB7 Demarcaci\xF3n (\xA75.6.2) \xB7 p. 21",equipo:"GS-101 \xB7 Trabajo seguro en postes (\xA75.6.1) \xB7 pp. 20\u201321"},kf={a:{texto:"El poste parece obviamente inseguro.",corto:"Poste obviamente inseguro",material:null,aplicaAntesDeSubir:!0,dibujable:!1},b:{texto:"El poste se mueve.",corto:"Poste que se mueve",material:null,aplicaAntesDeSubir:!0,dibujable:!1},c:{texto:"El poste est\xE1 inclinado.",corto:"Poste inclinado",material:null,aplicaAntesDeSubir:!0,dibujable:!0},d:{texto:"La base del poste se alter\xF3 mientras se trabajaba arriba.",corto:"Base alterada",material:null,aplicaAntesDeSubir:!1,dibujable:!1},e:{texto:"Al despojar el poste de algunos cables y retenidas, se observa que est\xE1 soportado por los cables.",corto:"Soportado por los cables",material:null,aplicaAntesDeSubir:!1,dibujable:!1},f:{texto:"El terreno presenta deslizamientos.",corto:"Deslizamiento del terreno",material:null,aplicaAntesDeSubir:!0,dibujable:!1},g:{texto:"Poste de madera con fisuras, quemado o podrido: el da\xF1o no debe superar una tercera parte del di\xE1metro. Tampoco nudos con agrietamiento, ni agrietamientos a lo largo que comprometan m\xE1s de una tercera parte del poste.",corto:"Madera fisurada o podrida",material:"madera",aplicaAntesDeSubir:!0,dibujable:!0},h:{texto:"Poste de metal con oxidaci\xF3n que supera una tercera parte del di\xE1metro, o con perforaciones superiores a una tercera parte del di\xE1metro, o con una l\xEDnea el\xE9ctrica en posible contacto directo con el poste.",corto:"Metal oxidado o perforado",material:"metal",aplicaAntesDeSubir:!0,dibujable:!0}},UE=Object.keys(kf).filter(a=>kf[a].aplicaAntesDeSubir);var zE=typeof __URL_PUBLICA__=="string"?__URL_PUBLICA__:globalThis.process?.env?.URL_PUBLICA||"https://ruben1155.github.io/cuadrilla-segura/",GE=typeof __PREFIJO__=="string"?__PREFIJO__:globalThis.process?.env?.PREFIJO_ALMACEN||"cuadrilla-segura:";var hu={url:"https://okhbiliodjuofzsjkolg.supabase.co",llave:"sb_publishable_F3-PMi9uLDPR655ZOCs60g_m0S_C6Ec"};var X={altura:"GS-101 \xB7 Trabajo seguro en alturas",escaleras:"GS-101 \xB7 Trabajo seguro en escaleras port\xE1tiles",amarre:"GS-101 \xB7 Paso a paso para el aseguramiento de la escalera a un poste",epp:"GS-101 \xB7 Uso de equipo de protecci\xF3n personal",general:"GS-101 \xB7 Lineamientos en seguridad general",electrico:"GS-101 \xB7 Trabajo seguro en proximidad de l\xEDneas energizadas",demarcacion:"GS-101 \xB7 Demarcaci\xF3n y se\xF1alizaci\xF3n del \xE1rea",emergencias:"GS-101 \xB7 Emergencias en trabajos en alturas",suspender:"GS-101 \xB7 Suspensi\xF3n de labores ante peligro no controlado",vehiculos:"GS-101 \xB7 Seguridad en la conducci\xF3n de veh\xEDculos",carga:"GS-101 \xB7 Lineamientos generales: manipulaci\xF3n de cargas",cuadrillas:"GS-101 \xB7 Cuadrillas de trabajo",reportes:"GS-101 \xB7 Reporte de incidentes y accidentes laborales",freno:"GS-101 \xB7 Equipo para trabajo en postes (freno para cuerda) \xB7 pr\xE1ctica de la cuadrilla: el freno va a la argolla frontal",m_altura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable",m_prep:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 Preparaci\xF3n antes de instalar",m_gaza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.8 Gazas, herrajes y accesorios",m_tension:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n",m_radio:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura",m_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.24 Rollos de reserva en redes a\xE9reas",m_rollo_poste:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de red en el poste (di\xE1metro del rollo de 40 a 50 cm)",m_calco:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas",m_preform:"Manual MNO-DS-GE-001 \xB7 Anexo 3: uso de preformados seg\xFAn di\xE1metro del cable",m_colores:"Manual MNO-DS-GE-001 \xB7 Anexo 4: c\xF3digo de colores EIA/TIA-598",m_cierre:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme",m_pruebas:"Manual MNO-DS-GE-001 \xB7 \xA76.7 Pruebas de aceptaci\xF3n",m_balona:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.6 Balona",m_postes:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.3.2 Distancia entre postes",m_ferrea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.5 Cruce de l\xEDnea f\xE9rrea",m_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 Preparaci\xF3n y limpieza de registros",m_subterranea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.2 y \xA76.2.1.3 Instalaci\xF3n subterr\xE1nea y selecci\xF3n de ductos",m_reserva_sub:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 Rollos de reserva en registros",m_tapas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.5 Dispositivos de seguridad de las tapas",poda_transito:"GS-101 \xB7 \xA75.6.10 n) Poda de \xE1rboles: en v\xEDas de alto tr\xE1nsito se pide colaboraci\xF3n a entidades como tr\xE1nsito \xB7 p. 40",confinado:"GS-101 \xB7 T\xE9rminos: espacio confinado",t_techo:"GS-101 \xB7 \xA75.6.7 Trabajo seguro en techos \xB7 p\xE1g. 30",t_techo_epp:"GS-101 \xB7 \xA75.6.7 Equipo de protecci\xF3n personal en techos \xB7 p\xE1g. 30",t_techo_escalera:"GS-101 \xB7 \xA75.6.7 a\u2013c Escalera para acceder al techo \xB7 p\xE1g. 30",t_techo_anclaje:"GS-101 \xB7 \xA75.6.7 d\u2013f Anclaje y l\xEDnea de vida provisional \xB7 p\xE1g. 30\u201331",t_techo_traslado:"GS-101 \xB7 \xA75.6.7 g Traslado al techo y descenso anclado \xB7 p\xE1g. 31",t_techo_caminar:"GS-101 \xB7 \xA75.6.7 h\u2013j Caminar en el techo y l\xE1minas \xB7 p\xE1g. 32",t_techo_clima:"GS-101 \xB7 \xA75.6.7 n Condiciones clim\xE1ticas adversas \xB7 p\xE1g. 33",t_techo_peligro:"GS-101 \xB7 \xA75.6.7 p Zonas inseguras del techo \xB7 p\xE1g. 33",t_escalera_base:"GS-101 \xB7 \xA75.6.4 g Escaleras port\xE1tiles: per\xEDmetro de 2 m \xB7 p\xE1g. 22\u201323",t_escalera_tres:"GS-101 \xB7 \xA75.6.4 Nota: tres pelda\xF1os superiores prohibidos \xB7 p\xE1g. 22",t_escalera_sola:"GS-101 \xB7 \xA75.6.4 i Un solo trabajador sobre la escalera \xB7 p\xE1g. 23",mt_epp:"GS-101 \xB7 5.6.9 EPP para trabajo en proximidad de l\xEDneas energizadas \xB7 p. 34",mt_identificar:"GS-101 \xB7 5.6.9 c) y observaciones 1 y 2 \xB7 p. 35",mt_distancias:"GS-101 \xB7 5.6.9 b) Distancias de instalaci\xF3n con el secundario (40 cm) y el neutro (80 cm) \xB7 p. 35",mt_tabla4:"GS-101 \xB7 5.6.9 e) Tabla N\xB0 4, distancias m\xEDnimas de seguridad \xB7 p. 37",mt_suspender:"GS-101 \xB7 5.6.9 f) Telecomunicaciones a menos de 80 cm de la primaria MT, en contacto con el secundario o al nivel de este \xB7 p. 37",mt_senal:"GS-101 \xB7 5.6.9 g) Se\xF1alizaci\xF3n del \xE1rea de trabajo a nivel de suelo \xB7 p. 37",mt_activa:"GS-101 \xB7 5.6.9 h) Todas las l\xEDneas el\xE9ctricas se consideran activas \xB7 p. 38",mt_frontera:"GS-101 \xB7 5.2 w) Fronteras de aproximaci\xF3n: solo personas calificadas cruzan el l\xEDmite \xB7 p. 12",mt_escalera:"GS-101 \xB7 5.6.4 q) Escaleras de abrir de fibra de vidrio; nota sobre escaleras de aluminio \xB7 p. 23",mt_guante_cuero:"GS-101 \xB7 5.3.4 b) Los guantes de cuero no son para trabajos en presencia de tensi\xF3n \xB7 p. 15",mt_rigidez:"GS-101 \xB7 5.1 d) Buena rigidez diel\xE9ctrica: no sujetarse de estructuras met\xE1licas cercanas \xB7 p. 9",poda_epp:"GS-101 \xB7 \xA75.6.10 d) y e) Equipo de protecci\xF3n para poda: careta, lentes, protecci\xF3n auditiva, cuerdas, casco de cuatro puntos con barbiquejo, guantes mec\xE1nicos, ropa y calzado institucionales \xB7 pp. 38\u201339",poda_mangas:"GS-101 \xB7 \xA75.6.10 t) Mangas, cuerdas o prendas sueltas pueden enredarse en la motosierra o en la rama \xB7 p. 40",poda_planificar:"GS-101 \xB7 \xA75.6.10 h) Planificaci\xF3n previa: \xE1rbol, terreno, clima, bienes, personas, animales, insectos, tr\xE1nsito y distancia a l\xEDneas \xB7 p. 39",poda_subir:"GS-101 \xB7 \xA75.6.10 f) El trabajador no se debe subir a un \xE1rbol \xB7 p. 39",poda_linea:"GS-101 \xB7 \xA75.6.10 b) y m) Ramas en aproximaci\xF3n o sobre la l\xEDnea energizada: informar y coordinar; no se cortan ramas sobre la l\xEDnea \xB7 pp. 38 y 40",poda_distancias:"GS-101 \xB7 \xA75.6.10 j) y k) Distancias m\xEDnimas: se trabaja fuera de ellas durante el corte y la ca\xEDda, tambi\xE9n para las ramas \xB7 p. 39",poda_cansancio:"GS-101 \xB7 \xA75.6.10 g) No operar maquinaria cansado ni con medicamentos que alteren la conciencia \xB7 p. 39",poda_senal:"GS-101 \xB7 \xA75.6.10 n) Se\xF1alizar el \xE1rea y advertir a terceros; en v\xEDas de alto tr\xE1nsito, pedir apoyo \xB7 p. 40",poda_trayectoria:"GS-101 \xB7 \xA75.6.10 o) Valorar la trayectoria de ca\xEDda y asegurar la zona con se\xF1alizaci\xF3n y personal que regule el paso \xB7 p. 40",poda_equipo:"GS-101 \xB7 \xA75.6.10 p) Revisar el equipo de poda antes de iniciar (cuchillos, mecates, otros dispositivos) \xB7 p. 40",poda_viento:"GS-101 \xB7 \xA75.6.10 q) Antes de cada corte: distancia a lo energizado, viento y vegetaci\xF3n que interfiera \xB7 p. 40",poda_cuerdas:"GS-101 \xB7 \xA75.6.10 r) Cuerdas de trabajo para evitar que la rama cambie de direcci\xF3n al caer \xB7 p. 40",poda_cuadrilla:"GS-101 \xB7 \xA75.4 e) Las cuadrillas de poda de \xE1rboles no pueden ser menores de dos miembros \xB7 p. 18",gal_autorizacion:"Manual MNO-DS-GE-001 \xB7 \xA74.1.6 y \xA74.1.7 Aviso al Centro de Operaciones y autorizaci\xF3n en SASET antes de intervenir fibras en operaci\xF3n",gal_senal:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) Per\xEDmetro del \xE1rea de trabajo asegurado con se\xF1alizaci\xF3n vial y peatonal",gal_vigia:"GS-101 \xB7 \xA75.4 c) Cuadrillas de m\xEDnimo dos personas. La fuente no describe c\xF3mo se vigila la tapa ni la comunicaci\xF3n (duda, ver PENDIENTES_SST.md, J10)",gal_atmosfera:"GS-101 \xB7 T\xE9rminos: espacio confinado (aberturas limitadas, ventilaci\xF3n desfavorable). La fuente no describe el procedimiento de atm\xF3sfera (duda, ver PENDIENTES_SST.md, J10)",gal_ingreso:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 c) Ingreso por escalera met\xE1lica cuando la profundidad lo amerita (aplicado a la galer\xEDa: duda, ver PENDIENTES_SST.md, J10)",gal_epp:"GS-101 \xB7 \xA75.3 Uso de EPP: lista propuesta para la galer\xEDa, a validar por Salud Ocupacional (ver PENDIENTES_SST.md, J10)",gal_respirador:"GS-101 \xB7 \xA75.3.3 f) Respiradores con filtros en lugares de escasa ventilaci\xF3n; los filtros se reemplazan cuando se saturan",gal_cables:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) No da\xF1ar los cables existentes; \xA76.2.2 radio de curvatura; \xA76.2.7.2 fijaciones con cobre en servicio",gal_pletinas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7.1 b) Pletinas peque\xF1as de 20 cm; d) el cable se sujeta del centro hacia los extremos",gal_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 b) y c) Rollo de reserva de 20 a 25 m en la galer\xEDa, en la pared opuesta al MDF, a la mayor altura posible",gal_50cm:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 d) En la pared del MDF, 50 cm libres desde la salida de los ductos hacia el fondo",gal_placas:"Manual MNO-DS-GE-001 \xB7 \xA76.4.2.3 a) y e) Placas acr\xEDlicas con origen y destino; dos placas en cada rollo de reserva",gal_sellado:"Manual MNO-DS-GE-001 \xB7 Anexo 1: sellado de los ductos en la galer\xEDa (espuma expandible reentrable; subductos con tapones de hule)",eri_antes:"GS-101 \xB7 \xA75.7 Antes a) y b): personal capacitado como equipo ERI y en rescate vertical; botiqu\xEDn b\xE1sico y equipos para rescate vertical (cuerdas de seguridad, mosquetones, pull-lift) \xB7 p. 42",eri_criticas:"GS-101 \xB7 \xA75.7 Antes d): los trabajos mayores de 12 m son muy cr\xEDticos; sistema de rescate en el sitio y persona competente en rescate \xB7 p. 42",eri_sistema:"GS-101 \xB7 \xA75.7 Antes c): reportar el deterioro o da\xF1o de los sistemas de prevenci\xF3n y protecci\xF3n contra ca\xEDdas \xB7 p. 42",eri_despejar:"GS-101 \xB7 \xA75.7 Durante a): despejar completamente el \xE1rea donde se present\xF3 el accidente \xB7 p. 42",eri_distancia:"GS-101 \xB7 \xA75.7 Durante b) y g): distancia prudente y segura; antes de un rescate, comprobar que el \xE1rea es segura y que uno est\xE1 protegido \xB7 pp. 42\u201343",eri_911:"GS-101 \xB7 \xA75.7 Durante e) y f): pedir ayuda al 9-1-1; no hacer maniobras de rescate de las que no se tenga conocimiento previo \xB7 p. 43",eri_no_mover:"GS-101 \xB7 \xA75.7 Durante d) y Despu\xE9s b): no mover a la v\xEDctima salvo raz\xF3n de seguridad; brindar tranquilidad a la v\xEDctima \xB7 p. 43",eri_terceros:"GS-101 \xB7 \xA75.7 Durante h): ning\xFAn trabajador informa a personas u organizaciones externas; solo la direcci\xF3n o personal autorizado \xB7 p. 43",eri_fuera:"GS-101 \xB7 \xA75.5 n): los equipos para trabajo en altura que hayan sido usados en pruebas o por una ca\xEDda libre quedan fuera de servicio \xB7 p. 21",sv_permiso:"GS-101 \xB7 \xA75.8 a) Solo conduce veh\xEDculos institucionales el funcionario con los permisos de conducir del ICE \xB7 p. 42",sv_revision:"GS-101 \xB7 \xA75.8 b) Antes de usar el veh\xEDculo se revisan los niveles de aceite, combustible y agua, luces, repuesto, documentos, se\xF1alizaci\xF3n, herramientas y llantas \xB7 p. 43",sv_ley:"GS-101 \xB7 \xA75.8 c) y l) Conducir responsablemente, respetando la Ley de Tr\xE1nsito, sin abusar de la destreza al conducir \xB7 p. 43",sv_celular:"GS-101 \xB7 \xA75.8 d) Queda prohibido el uso del celular durante la conducci\xF3n del veh\xEDculo \xB7 p. 43",sv_estacionar:"GS-101 \xB7 \xA75.8 e) Al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",sv_carga:"GS-101 \xB7 \xA75.8 g) Asegurar objetos, materiales, herramientas y equipos: son un riesgo en un frenado r\xE1pido, vuelco o colisi\xF3n \xB7 p. 43",sv_tablero:"GS-101 \xB7 \xA75.8 h) e i) Nada suelto en el tablero; no recoger objetos del piso ni lejos del alcance mientras se conduce \xB7 p. 43",sv_fatiga:"GS-101 \xB7 \xA75.8 m) Con cansancio o fatiga: detener el veh\xEDculo en un sitio seguro, bajarse, caminar y respirar; si va acompa\xF1ado, ceder la conducci\xF3n \xB7 p. 43",sv_calma:"GS-101 \xB7 \xA75.8 o) Manejar con calma, sin perder el control con otros conductores y evitando confrontaciones \xB7 p. 43",sv_mojado:"GS-101 \xB7 \xA75.8 p) En caminos con grava, arenosos o mojados, bajar la velocidad y manejar con cuidado \xB7 p. 44",sv_danos:"GS-101 \xB7 \xA75.8 q) Reportar los da\xF1os que se observen o causen al veh\xEDculo; no ocultarlos, pueden producir un accidente \xB7 p. 44",sv_alcohol:"GS-101 \xB7 \xA75.8 r) No conducir bajo los efectos del alcohol, drogas o medicamentos que causen somnolencia \xB7 p. 44",sv_defensivo:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Manejo defensivo y sus cinco elementos: conocimiento, estar alerta, previsi\xF3n, juicio y habilidad \xB7 diap. 4\u201311",sv_humano:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 El 90 % de los accidentes viales tiene origen en el factor humano \xB7 diap. 13",sv_estados:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Estados (prisa, frustraci\xF3n, cansancio, complacencia) y los errores que producen \xB7 diap. 17\u201325",sv_linea_fuego:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Errores: ojos no en la tarea y entrar en la l\xEDnea de fuego \xB7 diap. 26 y 30",sv_lluvia:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Factor lluvia: calle mojada (\xABespecie de jab\xF3n\xBB), carreteras, poca visibilidad y neblina \xB7 diap. 36\u201341",sv_visibilidad:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Poca visibilidad: reducir la velocidad; si es excesiva, detener el veh\xEDculo a un costado y esperar \xB7 diap. 40",sv_derrumbe:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Derrumbes originados por la lluvia \xB7 diap. 38 (qu\xE9 hacer ante uno: decisi\xF3n conservadora, ver PENDIENTES_SST.md, J12\u2013J13)",sv_sustancias:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Alcohol, drogas y f\xE1rmacos: efectos seg\xFAn la dosis; los f\xE1rmacos como factor accidentog\xE9nico \xB7 diap. 44\u201349",sv_minimos:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Nueve m\xEDnimos de seguridad vehicular, a revisar todos los d\xEDas antes de salir \xB7 diap. 51\u201352",sv_cinturon:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 M\xEDnimo 1: cintur\xF3n de seguridad retr\xE1ctil de 2 o 3 puntos \xB7 diap. 51",ev_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 \xB7 GS-101 \xB7 Delimitaci\xF3n del \xE1rea",ev_impaciente:"GS-101 \xB7 Cuadrillas en zonas de tr\xE1fico denso \xB7 Delimitaci\xF3n del \xE1rea de trabajo",gs31_ats:"GS-31 \xB7 \xA75.2.4 Antes de la ejecuci\xF3n diaria se realiza el ATS, con todos los trabajadores y liderado por el encargado o t\xE9cnico de la cuadrilla (A01-GS-31) \xB7 p. 10",gs31_cambios:"GS-31 \xB7 \xA75.2.5 Si cambia la planificaci\xF3n inicial (obra, proceso, equipos, personal) se aplica de nuevo el ATS \xB7 p. 10",gs31_f02:"GS-31 \xB7 \xA75.1.11 Las tareas con riesgos de situaci\xF3n cr\xEDtica se eval\xFAan con el F02-GS-31 An\xE1lisis de Tarea Cr\xEDtica \xB7 p. 5",gs31_gravedad:"GS-31 \xB7 \xA75.1.11 d) y f) Gravedad: la p\xE9rdida m\xE1s probable, en la escala 0, 2, 4 y 6 \xB7 p. 6",gs31_repetitividad:"GS-31 \xB7 \xA75.1.11 g) Repetitividad: n\xFAmero de colaboradores y cu\xE1nto de la jornada hace cada uno la tarea \xB7 p. 7",gs31_probabilidad:"GS-31 \xB7 \xA75.1.11 h) Probabilidad de esa p\xE9rdida, de \u22121 a +1 respecto al promedio \xB7 p. 7",gs31_criticidad:"GS-31 \xB7 \xA75.1.11 i) y k) GC = G + R + P (0 a 10): de 0 a 4 baja, m\xE1s de 4 y menos de 8 moderada, 8 o m\xE1s alta \xB7 pp. 7\u20138",gs31_controles:"GS-31 \xB7 \xA75.1.11 m) Controles m\xEDnimos: EPP y dispositivos, capacitaci\xF3n, protocolo de trabajo seguro y la normativa que los respalda \xB7 p. 8",ats_pizarra:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 ATS del d\xEDa: la pizarra (trabajo, herramientas y equipos, obra, fecha, personal y actividades numeradas) \xB7 diap. 46\u201347",ats_muerte:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Factores de muerte; si hay uno o m\xE1s, se revisan en conjunto las acciones a implementar \xB7 diap. 48",ats_riesgos:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Riesgos de cada tarea, manteniendo la numeraci\xF3n de las actividades \xB7 diap. 49",rec_anomalia:"GS-101 \xB7 \xA73.5 b) T\xE9cnico: informar al coordinador de cuadrilla y/o SST cualquier anomal\xEDa o desviaci\xF3n \xB7 p. 4",rec_inminente:"GS-101 \xB7 \xA75.6.4 g), final: si se observa inminente peligro para las personas, se interrumpe la actividad \xB7 p. 23",rec_cuasi:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) c) Casi incidente sin afectaci\xF3n a la salud: F01-GS-52 o F06-GS-52 \xB7 p. 41",rec_accidente:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) b) y d) Accidente: F07-GS-52 a la jefatura de inmediato, antes de terminar la jornada \xB7 pp. 40\u201341",rec_liderazgo:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Reporte por comportamientos: retroalimentaci\xF3n correctiva y registro en el F02-CSCON-SST-00-25 con firma del trabajador; aviso a la jefatura inmediata \xB7 diap. 68",sol_clima:"GS-101 \xB7 \xA75.1 e) Suspensi\xF3n de la actividad por condiciones clim\xE1ticas desfavorables: tormentas el\xE9ctricas, lluvias u otras que pongan en riesgo a los ejecutores \xB7 p. 9",demo_generacion_autorizacion:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 El ingreso a la planta solar se coordina con su encargado, con autorizaci\xF3n previa",demo_generacion_energizado:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los paneles generan electricidad mientras les da la luz: se tratan como energizados",demo_generacion_no_pisar:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 No se pisa ni se apoya nadie en los paneles ni en su estructura",demo_generacion_conexiones:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Solo personal calificado manipula conexiones e inversores, seg\xFAn el procedimiento de la planta",demo_generacion_danos:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los da\xF1os en paneles, cables o inversores se reportan y no se tocan",demo_generacion_calor:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Hidratarse, protegerse del sol y descansar a la sombra con frecuencia",mv_apoyo:"GS-101 \xB7 \xA75.6.6: el veh\xEDculo sirve de soporte a la escalera a medio vano \xB7 p. 28",mv_dos_puntos:"GS-101 \xB7 \xA75.6.6: la escalera se amarra al pant\xF3grafo y al eje de una llanta, a dos puntos \xB7 p. 28",mv_nudos:"GS-101 \xB7 \xA75.6.6: nudo ocho aplicado para dar tensi\xF3n y pata de chancho (ballestrinque) para terminar \xB7 p. 28",mv_subida:"GS-101 \xB7 \xA75.6.6: para subir y bajar, la cuerda de seguridad va sujetada a la escalera \xB7 p. 28",mv_bajada:"GS-101 \xB7 \xA75.6.4 j): subir y bajar de frente, con las manos libres y tres puntos de apoyo \xB7 p. 23",mv_tres:"GS-101 \xB7 \xA75.6.4, nota de la Tabla N\xB0 2: se proh\xEDbe el uso de los tres pelda\xF1os superiores \xB7 p. 22",mv_tabla2:"GS-101 \xB7 \xA75.6.4 f) y Tabla N\xB0 2: altura m\xE1xima permitida de uso de cada escalera \xB7 p. 22",mv_inspeccion:"GS-101 \xB7 \xA75.6.4 c), l), t) y u): revisar pelda\xF1os, uniones, largueros y patas antes de usar la escalera \xB7 pp. 22\u201324",mv_senalizacion:"GS-101 \xB7 \xA75.6.4 g): per\xEDmetro m\xEDnimo de 2 m alrededor de la escalera, con cintas y conos \xB7 pp. 22\u201323",mv_camion:"GS-101 \xB7 \xA75.8 e): al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",mv_herramientas:"GS-101 \xB7 \xA75.6.4 k): materiales y herramientas con bolso, mecate o cuerda \xB7 p. 23",mv_guardar:"GS-101 \xB7 \xA75.6.4 a) y d): la escalera se maneja entre dos y se deposita, no se tira; se limpian los desechos de los pelda\xF1os \xB7 p. 22",mv_mover:"GS-101 \xB7 \xA75.6.4 h): la escalera no se mueve ni se extiende mientras haya personal sobre ella \xB7 p. 23",cala_abertura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.2 Dimensi\xF3n de la cala: 1,5 m de largo por 1 m de ancho, como m\xEDnimo \xB7 p. 18",cala_pieza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tubo de reparaci\xF3n: 50 cm m\xE1s largo que la abertura entre los extremos del ducto \xB7 p. 18",cala_ranura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 La abertura del corte longitudinal queda arriba y se cierra con dos medias secciones de PVC y pegamento \xB7 p. 18",cala_amarras:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tres cintas met\xE1licas o tipo gaza con tornillo sin fin: una en cada extremo y otra en el centro \xB7 p. 18",cala_capas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.4 y Figura 2a: capas de cierre en su orden, espesor y material \xB7 p. 18",cala_empalme:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm, con preformado de 75 cm o menos \xB7 p. 52",cala_anclas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Anclas de seguridad: cada 500 m en tramos rectos de 1 km o m\xE1s, y en cruces de v\xEDa con vano mayor de 80 m en terreno plano \xB7 p. 36",cala_ancla_distancia:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Ubicaci\xF3n del ancla: la mitad de la altura, medida del herraje a la base del poste \xB7 p. 36",cr_cliente:"GS-101 \xB7 \xA75.6.8 a) y b) Observar el cielorraso antes de empezar y preguntar al cliente por sus condiciones \xB7 p. 33",cr_estructura:"GS-101 \xB7 \xA75.6.8 c) La estructura se observa sin corrosi\xF3n avanzada ni madera descompuesta, y estable \xB7 p. 33",cr_electrico:"GS-101 \xB7 \xA75.6.8 d) Cable el\xE9ctrico expuesto: el cliente desconecta la electricidad antes de subir; con guantes diel\xE9ctricos solo si no es posible \xB7 p. 33",cr_epp:"GS-101 \xB7 \xA75.6.8 e) EPP del cielorraso: anteojos, casco con barbiquejo y linterna, ropa, calzado, guantes diel\xE9ctricos y rodilleras \xB7 p. 34",cr_arnes:"GS-101 \xB7 \xA75.5 a) Trabajo a una altura, como en cielorrasos: equipo para trabajo en altura autorizado \xB7 p. 19",cr_extension:"GS-101 \xB7 \xA75.6.8 f) Valorar si es posible usar una extensi\xF3n de fibra para evitar subir al cielorraso \xB7 p. 34",cr_avispas:"GS-101 \xB7 \xA75.6.8 g) Al ingresar, verificar desde el suelo la ausencia de colmenas de avispas o similares \xB7 p. 34",cr_caminar:"GS-101 \xB7 \xA75.6.7 h) por analog\xEDa: caminar por la estructura y no sobre la l\xE1mina (el cielorraso no se cita: duda, ver PENDIENTES_SST.md, J19) \xB7 p. 32",cr_escalera_tipo:"GS-101 \xB7 \xA75.6.4 q) Escaleras de abrir de fibra de vidrio; nota: el aluminio solo donde no hay riesgo el\xE9ctrico \xB7 p. 23",el_provisional:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Arts. 111 y 113 del Reglamento de Seguridad en Construcciones: instalaciones provisionales seg\xFAn el C\xF3digo El\xE9ctrico de CR (entubado, adecuado a la tensi\xF3n nominal) \xB7 diap. 22\u201326",el_medidor:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 112: medidores el\xE9ctricos provisionales con base estable y protecci\xF3n del agua \xB7 diap. 22\u201326",el_tablero:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 114: tableros y cajas el\xE9ctricas tapados, identificados y cerrados \xB7 diap. 22\u201326",el_conductores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 115: conductores protegidos ante da\xF1os mec\xE1nicos de la construcci\xF3n (maquinaria, veh\xEDculos, agua, qu\xEDmicos) \xB7 diap. 27",el_epp:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 117: el personal en presencia de energ\xEDa el\xE9ctrica cuenta con protecci\xF3n diel\xE9ctrica; no usar el EPP diel\xE9ctrico es un acto inseguro \xB7 diap. 27 y 51",el_condiciones:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Condiciones inseguras: enchufes deteriorados, uniones deterioradas o sin aislamiento y conexiones fuera de norma \xB7 diap. 46\u201348",el_autorizacion:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: intervenir sin autorizaci\xF3n \xB7 diap. 51",el_mojado:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: manos o pies mojados; la piel h\xFAmeda tiene menor resistencia \xB7 diap. 13 y 51",el_combustible:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: materiales combustibles o explosivos donde se presente arco el\xE9ctrico; el arco es un fuego repentino con metal fundido \xB7 diap. 5 y 31",el_anexo_b:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: peligro inminente o alto riesgo (sin protecci\xF3n frente al contacto con partes energizadas o el cortocircuito; lluvia y tormentas el\xE9ctricas) \xB7 diap. 30\u201331",el_anexo_c:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo C del C\xF3digo El\xE9ctrico: lista de verificaci\xF3n de instalaciones el\xE9ctricas, aplicada en conjunto con el t\xE9cnico el\xE9ctrico \xB7 diap. 32\u201340",el_factores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Factores de la magnitud de un incidente el\xE9ctrico: intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria \xB7 diap. 9"};var HE=new Map([...Object.entries(X).map(([a,e])=>[e,a]),...Object.entries(Ya).map(([a,e])=>[e,"poste_"+a])]);var py=[{n:1,p:"\xBFA partir de qu\xE9 altura se considera trabajo en altura?",o:["M\xE1s de 1,80 m","M\xE1s de 3 m","M\xE1s de 1 m","Solo arriba de 5 m"],ref:X.altura},{n:1,p:"\xBFCu\xE1ntos trabajadores pueden estar sobre una escalera port\xE1til?",o:["Uno solo","Dos, si es de extensi\xF3n","Tres, si la escalera es larga","Los que quepan"],ref:X.escaleras},{n:1,p:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera en el poste?",o:["75\xB0","60\xB0","90\xB0","45\xB0"],ref:X.amarre},{n:1,p:"\xBFQu\xE9 pelda\xF1os de la escalera est\xE1 prohibido usar?",o:["Los tres superiores","Solo el primer pelda\xF1o","Ninguno","Los dos inferiores"],ref:X.escaleras},{n:1,p:"\xBFQu\xE9 per\xEDmetro m\xEDnimo se se\xF1aliza alrededor de la escalera?",o:["2 metros","50 cm","No hace falta","10 metros"],ref:X.escaleras},{n:1,p:"Al subir y bajar la escalera debo mantener\u2026",o:["Tres puntos de apoyo","Dos puntos de apoyo","Las manos ocupadas","Un punto de apoyo"],ref:X.escaleras},{n:1,p:"\xBFC\xF3mo se suben las herramientas a la escalera?",o:["Con bolso, mecate o cuerda","En las bolsas del pantal\xF3n","En la mano, pegadas al cuerpo","Que me las lancen desde abajo"],ref:X.escaleras},{n:1,p:"\xBFSe puede trabajar en altura con reloj, anillo o cadena?",o:["No, se proh\xEDbe todo tipo de alhaja","S\xED, si son peque\xF1os y no molestan","Solo el reloj, si no tiene correa met\xE1lica","S\xED, si van bajo el guante de cuero"],ref:X.altura},{n:1,p:"Ante un accidente en altura, \xBFa qu\xE9 n\xFAmero se pide ayuda?",o:["9-1-1","1-1-3","8-0-0","Se espera a la jefatura"],ref:X.emergencias},{n:1,p:"La escalera viaja en el techo del cami\xF3n. \xBFSubir a bajarla es trabajo en altura?",o:["S\xED: el techo est\xE1 a m\xE1s de 1,80 m","No: es solo un cami\xF3n de reparto","Solo si llueve fuerte, con viento","Solo si es de noche y est\xE1 oscuro"],ref:X.altura},{n:1,p:"Tu arn\xE9s tiene una costura reventada. \xBFQu\xE9 haces?",o:["No lo uso, informo y pido la sustituci\xF3n","Lo uso con cuidado, sin que se note","Lo refuerzo con cinta y lo uso hoy","Lo uso solo hoy, ma\xF1ana lo cambio"],ref:X.altura},{n:1,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable a\xE9reo sobre una acera, en su flecha m\xE1xima?",o:["4,5 m","3 m","6 m","2,5 m"],ref:X.m_altura},{n:1,p:"\xBFCu\xE1ntas calcoman\xEDas reflectivas de prevenci\xF3n van en el poste?",o:["Dos, una a cada lado","Una, en el centro del poste","Cuatro, dos a cada lado","Ninguna: no hace falta"],ref:X.m_calco},{n:1,p:"\xBFCu\xE1ntas personas, como m\xEDnimo, forman una cuadrilla de instalaci\xF3n de fibra?",o:["Dos: un t\xE9cnico y un asistente","Una, si tiene experiencia","Cuatro, con un supervisor de obra","Las que haya disponibles ese d\xEDa"],ref:X.cuadrillas},{n:2,p:"\xBFD\xF3nde se conecta preferiblemente la l\xEDnea de vida?",o:["En un anclaje por encima de la cabeza","En el portaganchos pl\xE1stico del arn\xE9s","En un cable telef\xF3nico de la red","A la altura de la cintura, en un pelda\xF1o"],ref:X.altura},{n:2,p:"La l\xEDnea de vida de 0,90 m se conecta en el arn\xE9s a la\u2026",o:["Argolla dorsal (espalda)","Argolla frontal (pecho)","Argolla D lateral","Portaganchos pl\xE1stico"],ref:X.altura},{n:2,p:"El freno para cuerda (o el carrito de la l\xEDnea vertical del cami\xF3n) se conecta a la\u2026",o:["Argolla frontal, a la altura del pecho y el ombligo","Argolla dorsal, en la espalda, junto a la l\xEDnea de 0,90 m","Argolla D lateral de la faja de posicionamiento","Hebilla del cintur\xF3n, sin ning\xFAn anclaje"],ref:X.freno},{n:2,p:"Antes de usar los guantes diel\xE9ctricos, adem\xE1s de revisarlos a la vista, se les hace\u2026",o:["La prueba de aire (inflarlos) para buscar fugas","Nada m\xE1s: con una mirada basta","Una prueba con agua caliente y jab\xF3n","Un estir\xF3n fuerte, de lado y de frente"],ref:X.epp},{n:2,p:"Los guantes diel\xE9ctricos clase 00 (etiqueta beige) protegen hasta\u2026",o:["500 V","1000 V","50 V","15 kV"],ref:X.epp},{n:2,p:"\xBFPor qu\xE9 se usa un guante de cuero sobre el guante diel\xE9ctrico?",o:["Para evitar perforaciones y rasgados del aislante","Para que no se resbale la mano en el trabajo","Porque el color se ve mejor en el poste","No se debe usar: el aislante ya basta solo"],ref:X.epp},{n:2,p:"El casco para trabajo en postes es ala ancha tipo II, con barbiquejo de\u2026",o:["Cuatro puntos","Dos puntos","Un punto","No lleva barbiquejo"],ref:X.epp},{n:2,p:"Resistencia m\xEDnima de un punto de anclaje por persona conectada:",o:["5000 lb (2272 kg)","500 lb","1000 kg","La de cualquier tubo firme"],ref:X.altura},{n:2,p:"Un equipo de altura que ya detuvo una ca\xEDda libre debe\u2026",o:["Quedar fuera de servicio","Revisarse y seguir us\xE1ndose","Lavarse y guardarse","Usarse solo en techos"],ref:X.altura},{n:2,p:"\xBFSe puede enrollar la l\xEDnea de vida para acortarla?",o:["No, est\xE1 prohibido","S\xED, dos vueltas","S\xED, si el anclaje est\xE1 bajo","Solo en escaleras"],ref:X.altura},{n:2,p:"\xBFCu\xE1ntos ganchos se pueden conectar en un mismo anillo D?",o:["Uno, salvo que el fabricante certifique otra cosa","Dos, si ambos son del mismo tama\xF1o","Tres, si el anillo es de acero grueso","Los que quepan en el anillo D"],ref:X.altura},{n:2,p:"La escalera de 28 pies (8,53 m) se traslada y coloca entre\u2026",o:["Dos personas, de estatura similar","Una persona, con ayuda de la cuerda","Tres personas, con la escalera abierta","Con el cami\xF3n en marcha, sin frenar"],ref:X.escaleras},{n:2,p:"L\xEDmite de carga manual para un trabajador sin limitaciones de salud:",o:["25 kg (20 kg para una trabajadora)","50 kg, con un compa\xF1ero que ayude","40 kg para todos los trabajadores","No hay l\xEDmite si el peso se reparte"],ref:X.carga},{n:2,p:"\xBFSe pueden usar calzas para nivelar la escalera?",o:["No: se busca nivelar el sitio sin calzas","S\xED, con piedras o pedazos de madera","S\xED, con bloques de concreto, si el piso est\xE1 flojo","Solo de noche, cuando hay menos tr\xE1nsito"],ref:X.escaleras},{n:3,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable en los cruces de calle?",o:["5 m","4,5 m","6,5 m","3,5 m"],ref:X.m_altura},{n:3,p:"Radio m\xEDnimo de curvatura de un cable de fibra \xF3ptica:",o:["20 veces su di\xE1metro","5 veces su di\xE1metro","2 veces su di\xE1metro","No hay m\xEDnimo"],ref:X.m_radio},{n:3,p:"Tensi\xF3n m\xE1xima recomendada si no hay datos del fabricante:",o:["250 kgf","50 kgf","1000 kgf","Sin l\xEDmite"],ref:X.m_tension},{n:3,p:"La balona de los cables en el poste debe medir como m\xE1ximo:",o:["10 cm","50 cm","1 m","No hay l\xEDmite"],ref:X.m_balona},{n:3,p:"Altura m\xEDnima de la gaza respecto al suelo:",o:["5 m","2 m","3 m","8 m"],ref:X.m_gaza},{n:3,p:"Si en el poste no hay secundario el\xE9ctrico, la gaza va a esta distancia del neutro:",o:["80 cm","10 cm","40 cm","2 m"],ref:X.m_gaza},{n:3,p:"Di\xE1metro del rollo de reserva en redes a\xE9reas:",o:["De 40 a 50 cm","De 5 a 10 cm","Unos 2 m de di\xE1metro","El que quepa"],ref:X.m_rollo_poste},{n:3,p:"Distancia del rollo de reserva al poste:",o:["75 cm","10 cm","2 m","No hay norma"],ref:X.m_reserva},{n:3,p:"Distancia normal entre postes en redes existentes:",o:["Entre 40 y 80 m","Entre 5 y 10 m","M\xE1s de 200 m siempre","No importa"],ref:X.m_postes},{n:3,p:"En un cruce sin apoyo, \xBFcu\xE1ntas calcoman\xEDas reflectivas se instalan?",o:["Dos a cada lado de la balona del cruce","Una en el centro del poste","Ninguna, el cruce no lo necesita","Solo si es de noche o llueve"],ref:X.m_balona},{n:3,p:"Todo cable que cruce una l\xEDnea de ferrocarril se instala\u2026",o:["De forma subterr\xE1nea, sin tendido a\xE9reo","A\xE9reo a 5 m, como en un cruce de calle","A\xE9reo a 4,5 m, como en una acera","A\xE9reo, con un poste a cada lado de la v\xEDa"],ref:X.m_ferrea},{n:3,p:"La fibra n\xFAmero 1 del c\xF3digo de colores EIA/TIA-598 es:",o:["Azul","Naranja","Verde","Caf\xE9"],ref:X.m_colores},{n:3,p:"Presi\xF3n de prueba de hermeticidad del cierre de empalme:",o:["8 psi","1 psi","30 psi","No se prueba"],ref:X.m_cierre},{n:3,p:"\xBFSe puede instalar un cable sobre un transformador o l\xEDnea el\xE9ctrica?",o:["Nunca","S\xED, si es diel\xE9ctrico","S\xED, con guantes","Solo de d\xEDa"],ref:X.m_prep},{n:3,p:"Longitud del rollo de reserva dentro de un registro:",o:["De 28 a 35 m","De 2 a 5 m","100 m","No se deja reserva"],ref:X.m_reserva_sub},{n:3,p:"\xBFSe recomienda pasar fibra y cobre por el mismo ducto?",o:["No, salvo excepciones justificadas","S\xED, siempre que est\xE9n bien sujetos","Solo si son delgados y de poco peso","Es obligatorio, seg\xFAn el jefe de obra"],ref:X.m_subterranea},{n:3,p:"Al instalar un cable directamente en un ducto, adem\xE1s se deja\u2026",o:["Una gu\xEDa para el halado de cables en el futuro","El ducto sin tapar, para ventilar","Agua jabonosa para lubricar el cable","Nada m\xE1s: el ducto ya queda listo"],ref:X.m_subterranea},{n:3,p:"Al terminar el trabajo en un registro, la tapa\u2026",o:["Se coloca asegurada con sus dispositivos de seguridad","Se deja abierta un rato para ventilar el registro","Se apoya sobre el borde sin asegurar","Se guarda en el cami\xF3n hasta el d\xEDa siguiente"],ref:X.m_tapas},{n:4,p:"Antes de usar el veh\xEDculo de la cuadrilla se revisa\u2026",o:["Aceite, combustible, agua, luces, llantas, repuesto, documentos, se\xF1alizaci\xF3n y herramientas","Solo el combustible y que el motor encienda bien, sin mirar nada m\xE1s del veh\xEDculo","Solo que las luces funcionen y que el veh\xEDculo se vea limpio por fuera","Nada: eso lo hace el taller una vez al a\xF1o, y el chofer solo maneja y reporta si algo suena raro"],ref:X.vehiculos},{n:4,p:"Al estacionar el cami\xF3n en la calle para trabajar, se debe\u2026",o:["Hacerlo en un lugar seguro y se\xF1alizar","Dejarlo donde caiga, con las luces apagadas","Subirlo completo a la acera","Dejarlo en el carril, es solo un rato"],ref:X.vehiculos},{n:4,p:"\xBFSe puede usar el celular mientras se conduce el veh\xEDculo institucional?",o:["No, est\xE1 prohibido","S\xED, con altavoz","S\xED, en sem\xE1foros","Solo para mensajes de trabajo"],ref:X.vehiculos},{n:4,p:"Si sientes cansancio o fatiga mientras conduces\u2026",o:["Te detienes en un sitio seguro, descansas o cedes el volante","Aceleras un poco para llegar antes de que se haga tarde","Bajas la ventana, pones m\xFAsica y sigues manejando","Tomas caf\xE9, te estiras en el carro y contin\xFAas sin parar"],ref:X.vehiculos},{n:4,p:"Las herramientas y materiales que van en el cami\xF3n deben ir\u2026",o:["Asegurados: en un frenazo o vuelco se vuelven proyectiles","Sueltos en la cajuela para sacarlos m\xE1s r\xE1pido","En el tablero, encima de la guantera","En el asiento del copiloto, sin amarrarlos"],ref:X.vehiculos},{n:4,p:"En una v\xEDa de tr\xE1fico denso, la cuadrilla debe\u2026",o:["Planificar con m\xE1s personal y alguien que regule el tr\xE1nsito","Trabajar m\xE1s r\xE1pido para liberar la v\xEDa","Trabajar sin conos para no estorbar","Ir una sola persona, para ahorrar gastos del d\xEDa"],ref:X.cuadrillas},{n:4,p:"Para trabajar en una v\xEDa de alto tr\xE1nsito, \xBFa qui\xE9n se puede pedir colaboraci\xF3n?",o:["A las autoridades de tr\xE1nsito","A los vecinos de la cuadra","A nadie: la cuadrilla se arregla sola","A los conductores que pasan por la v\xEDa"],ref:X.poda_transito},{n:4,p:"El GS-101 define viento fuerte como una velocidad constante mayor a\u2026",o:["40 km/h","10 km/h","100 km/h","20 km/h"],ref:X.altura},{n:4,p:"Si una l\xEDnea de telecomunicaciones queda m\xE1s cerca de lo permitido de la l\xEDnea primaria (media tensi\xF3n), \xBFqu\xE9 se hace?",o:["No se trabaja y se coordina la desconexi\xF3n con la empresa el\xE9ctrica","Se trabaja con guantes de cuero y con cuidado, sin tocar nada","Se trabaja r\xE1pido, antes de que llegue la distribuidora","Se ignora el riesgo si no se ven chispas ni humo en el poste"],ref:X.mt_suspender},{n:4,p:"Umbral de \xABno soltar\xBB de la corriente el\xE9ctrica en el cuerpo:",o:["10 mA","0,5 mA","1 A","100 A"],ref:X.electrico},{n:4,p:"\xBFA partir de qu\xE9 altura un trabajo se considera muy cr\xEDtico y exige rescate en sitio?",o:["M\xE1s de 12 m","M\xE1s de 3 m","M\xE1s de 30 m","M\xE1s de 100 m"],ref:X.emergencias},{n:4,p:"Tras una ca\xEDda, \xBFse mueve a la v\xEDctima?",o:["No, salvo que sea necesario por seguridad","S\xED, siempre, llev\xE1ndola a la sombra del poste","S\xED, para sentarla y darle agua de inmediato","S\xED, para llevarla en el cami\xF3n al hospital"],ref:X.emergencias},{n:4,p:"Un accidente laboral se reporta a la jefatura\u2026",o:["De inmediato, antes de terminar la jornada","Al final de la semana, con el resto de informes","Solo si hubo hospitalizaci\xF3n o incapacidad","No se reporta si fue leve y no dej\xF3 marca"],ref:X.reportes},{n:4,p:"Distancia t\xEDpica de ca\xEDda libre que considera el GS-101 al planificar un sistema antica\xEDdas:",o:["Por lo general, 1,80 m","5 m, seg\xFAn la altura del poste","10 cm, seg\xFAn el tipo de arn\xE9s","No importa la altura del trabajo"],ref:X.altura},{n:4,p:"\xBFCon qu\xE9 viento no se debe trabajar en techos?",o:["Vientos superiores a 60 km/h","Vientos superiores a 30 km/h","Vientos superiores a 90 km/h","El viento no es un factor en techos"],ref:X.t_techo_clima},{n:4,p:"\xBFCu\xE1ndo se deben identificar las l\xE1minas pl\xE1sticas, de policarbonato o tragaluces del techo?",o:["Desde el piso, antes de subir al techo","Cuando ya est\xE1s parado sobre el techo","Solo si llueve fuerte y hay viento","Nunca: no se ven de cerca"],ref:X.t_techo_caminar},{n:4,p:"Para caminar en un techo, \xBFpor d\xF3nde se debe hacer?",o:["Por los clavadores y los lugares m\xE1s c\xE9ntricos del techo","Por el borde del techo, para ver la calle","Por cualquier l\xE1mina, si no se ve da\xF1ada","Por la l\xE1mina m\xE1s cercana a la escalera"],ref:X.t_techo_caminar},{n:4,p:"Si no hay amarre seguro para la escalera, \xBFqu\xE9 es obligatorio?",o:["Que un compa\xF1ero de trabajo sostenga la escalera","Que la escalera se amarre a una l\xE1mina del techo","Que se suba con las manos ocupadas","Nada: la escalera se apoya sola"],ref:X.t_techo_escalera},{n:4,p:"\xBFCu\xE1nto debe sobrepasar la escalera la estructura a la que se apoya?",o:["1 metro o tres pelda\xF1os","30 cent\xEDmetros","No debe sobrepasarla","3 metros"],ref:X.t_techo_escalera},{n:4,p:"Al llegar al nivel del techo, \xBFa qu\xE9 distancia m\xEDnima del borde se debe retirar la persona antes de quitarse el equipo de altura?",o:["1 metro","50 cent\xEDmetros","No hay distancia m\xEDnima","3 metros"],ref:X.t_techo_traslado},{n:5,p:"\xBFQu\xE9 distancia m\xEDnima se exige entre un conductor de telecomunicaciones y una l\xEDnea primaria de media tensi\xF3n?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:X.mt_suspender,e:"Si la l\xEDnea de telecomunicaciones se sospecha a menos de 80 cm de la primaria de media tensi\xF3n, no se realiza ning\xFAn trabajo (GS-101 \xA75.6.9 f)."},{n:5,p:"\xBFQu\xE9 distancia se mantiene entre el conductor telef\xF3nico y el secundario el\xE9ctrico?",o:["0,40 m","0,55 m","0,70 m","2,50 m"],ref:X.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el secundario es de 40 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"\xBFY entre el conductor telef\xF3nico y el neutro?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:X.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el neutro es de 80 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"Una l\xEDnea de telecomunicaciones est\xE1 por encima o al mismo nivel que el secundario. \xBFQu\xE9 se hace?",o:["No se trabaja hasta coordinar con la distribuidora la desconexi\xF3n del circuito durante el trabajo","Se trabaja con cuidado, sin tocar el secundario ni el neutro, y se avisa al jefe de cuadrilla","Se sube con guantes de cuero y casco bien puesto, con la l\xEDnea de vida anclada al poste","Se trabaja de noche, cuando hay menos tr\xE1nsito y menos gente cerca del poste"],ref:X.mt_suspender,e:"GS-101 \xA75.6.9 f): en ese caso se coordina con la empresa de distribuci\xF3n la desconexi\xF3n del circuito durante el tiempo del trabajo."},{n:5,p:"Una persona no calificada quiere cruzar el l\xEDmite de aproximaci\xF3n de una l\xEDnea energizada. \xBFPuede?",o:["No, salvo acompa\xF1ada de una persona calificada","S\xED, si lleva guantes de cuero y casco","S\xED, si el trabajo es corto y se hace r\xE1pido","S\xED, si lleva anteojos de seguridad"],ref:X.mt_frontera,e:"Las personas no calificadas no cruzan ese l\xEDmite a menos que est\xE9n acompa\xF1adas por una persona calificada (GS-101 \xA75.2 w)."},{n:5,p:"Toda l\xEDnea el\xE9ctrica cerca del trabajo se considera\u2026",o:["Activa, hasta verificar lo contrario con la distribuidora","Desactivada si no hay ruido ni chispas en el poste","Activa solo si hay chispas o se oye zumbido","Inactiva si est\xE1 en el poste de telecomunicaciones"],ref:X.mt_activa,e:"Todas las l\xEDneas el\xE9ctricas se consideran activas. Si hace falta verificar el estado de tensi\xF3n, se coordina con la distribuidora (GS-101 \xA75.6.9 h)."},{n:4,p:"\xBFQui\xE9n debe verificar y asegurar el ascenso al poste antes de iniciar la actividad?",o:["El encargado de cuadrilla","El t\xE9cnico que sube","Cada trabajador por separado","Nadie: el ascenso se revisa al terminar"],ref:Ya.inspeccion},{n:4,p:"\xBFQu\xE9 incluye la inspecci\xF3n de poster\xEDa antes del ascenso?",o:["El poste anterior, posterior, local y el tendido entre postes","Solo el poste donde se va a subir y el que tiene al lado","Solo el tendido entre los dos postes m\xE1s cercanos a la casa","Solo los postes de madera que se ven desde la calle"],ref:Ya.inspeccion},{n:4,p:"Si se evidencia alguna de las fallas del \xA75.6.3, \xBFqu\xE9 se hace?",o:["No se realizar\xE1 el trabajo y se realizar\xE1 el reporte a la jefatura de manera inmediata","Se sube con m\xE1s cuidado, revisando cada pelda\xF1o del poste","Se reporta al terminar la jornada, con un informe escrito y firmado","Se apuntala el poste con un puntal de madera y luego se sube"],ref:Ya.inspeccion},{n:4,p:"En un poste de madera, \xBFqu\xE9 da\xF1o por fisuras, quemado o podrido no debe superar la fuente?",o:["Una tercera parte del di\xE1metro","La mitad del di\xE1metro","Cualquier fisura es aceptable","Un cuarto del di\xE1metro"],ref:Ya.inspeccion},{n:4,p:"En un poste de metal, \xBFqu\xE9 perforaciones son falla?",o:["Perforaciones superiores a una tercera parte del di\xE1metro","Cuando hay m\xE1s de una, aunque sean peque\xF1as","Cuando se ven desde el suelo, a simple vista","Nunca, si el poste sigue en pie"],ref:Ya.inspeccion},{n:6,p:"\xBFQu\xE9 equipo de protecci\xF3n exige el GS-101 para la poda de \xE1rboles?",o:["Careta, lentes, protecci\xF3n auditiva, cuerdas de seguridad, casco de cuatro puntos con barbiquejo, guantes para riesgos mec\xE1nicos, ropa y calzado institucionales","Solo casco y guantes de cuero","Arn\xE9s de cuerpo completo y guantes diel\xE9ctricos","Solo lentes: el resto lo decide el encargado"],ref:X.poda_epp},{n:6,p:"\xBFPuede un trabajador subirse a un \xE1rbol para cortar una rama?",o:["No: el trabajador no se sube a un \xE1rbol","S\xED, con cuerdas de seguridad y un compa\xF1ero abajo","S\xED, si la rama es peque\xF1a","S\xED, con arn\xE9s de cuerpo completo"],ref:X.poda_subir},{n:6,p:"Una rama est\xE1 sobre una l\xEDnea energizada. \xBFQu\xE9 se hace?",o:["No se corta: se informa al Ejecutor del Proceso, que coordina con SST y el CLOR","Se corta despacio, con cuidado, sin tocar el cable","Se corta cuando la l\xEDnea se vea sin chispas","Se corta de noche, cuando hay menos gente"],ref:X.poda_linea},{n:6,p:"\xBFQu\xE9 se revisa antes de cada corte de rama?",o:["La distancia a lo energizado, la velocidad y direcci\xF3n del viento y la vegetaci\xF3n que puede interferir con la ca\xEDda","Solo que la motosierra arranque al primer jal\xF3n","Solo que el compa\xF1ero tenga el casco puesto","Nada: la experiencia dice cu\xE1ndo se corta"],ref:X.poda_viento},{n:6,p:"Antes de operar una motosierra, \xBFqu\xE9 condici\xF3n debe cumplir quien la opera?",o:["No estar cansado ni haber tomado medicamentos que alteren la conciencia","Tener un a\xF1o de experiencia, aunque est\xE9 cansado","Haber tomado caf\xE9 para estar alerta","Operarla solo si el supervisor no est\xE1 presente"],ref:X.poda_cansancio},{n:6,p:"\xBFCu\xE1ntos miembros, como m\xEDnimo, forman una cuadrilla de poda de \xE1rboles?",o:["Dos","Uno, si tiene experiencia","Uno, si el \xE1rbol es peque\xF1o","Tres, con un supervisor"],ref:X.poda_cuadrilla},{n:7,p:"\xBFCu\xE1ndo debe usarse el barbiquejo del casco?",o:["Cuando exista posibilidad de desprendimiento del casco por fuertes vientos, espacios confinados, postura corporal y trabajos en altura","Solo cuando el casco es nuevo","Nunca, porque incomoda al trabajar","Solo si el trabajo es de d\xEDa"],ref:X.epp},{n:7,p:"Los rollos de reserva en la galer\xEDa de cable deben tener una longitud\u2026",o:["Entre 20 a 25 m, de acuerdo con las condiciones del sitio","Entre 28 y 35 m, como en los registros","Entre 2 y 5 m","De 100 m siempre"],ref:X.gal_reserva},{n:7,p:"Los rollos de reserva en la galer\xEDa se colocan\u2026",o:["En la pared del lado opuesto al MDF, a la mayor altura posible, partiendo desde la pared final","En la pared del MDF, pegados a los ductos","En el piso, para que queden m\xE1s seguros","En cualquier pared, si hay espacio"],ref:X.gal_reserva},{n:7,p:"Si el rollo de reserva va en la pared del MDF, \xBFcu\xE1nto espacio se deja libre desde la salida de los ductos?",o:["50 cm hacia el fondo de la galer\xEDa","20 cm","1,20 m","No hace falta espacio"],ref:X.gal_50cm},{n:7,p:"\xBFCon qu\xE9 se fija el cable en las galer\xEDas?",o:["Con pletinas peque\xF1as (de 20 cm) y fajas pl\xE1sticas","Con clavos de madera en el muro","Con cinta adhesiva, sin pletinas","Con el cable suelto, para que se mueva"],ref:X.gal_pletinas},{n:7,p:"\xBFCu\xE1ntas placas de identificaci\xF3n se colocan en un rollo de reserva?",o:["Dos placas de identificaci\xF3n","Una sola, en el centro del rollo","Cuatro, dos a cada lado","Ninguna: el rollo no se identifica"],ref:X.gal_placas},{n:8,p:"\xBFQu\xE9 debe tener el personal t\xE9cnico para atender una emergencia en altura?",o:["Botiqu\xEDn b\xE1sico de primeros auxilios y equipos para rescate vertical: cuerdas de seguridad, mosquetones y pull-lift","Solo el botiqu\xEDn del cami\xF3n, si queda lugar","Solo las cuerdas de la escalera, sin mosquetones","Nada: la ayuda llega sola"],ref:X.eri_antes},{n:8,p:"\xBFCu\xE1ndo un trabajo en altura se considera muy cr\xEDtico?",o:["Cuando pasa de 12 metros de altura","Cuando pasa de 3 metros de altura","Cuando hay m\xE1s de dos trabajadores","Cuando llueve o hay viento"],ref:X.eri_criticas},{n:8,p:"Durante un accidente en altura, \xBFqu\xE9 se hace con el \xE1rea y con los trabajos?",o:["Se despeja completamente el \xE1rea y se suspenden de inmediato las actividades","Se sigue trabajando mientras llega la ayuda","Se despeja solo la mitad del \xE1rea, para no atrasar la labor","Se avisa a la cuadrilla de al lado y se sigue trabajando"],ref:X.eri_despejar},{n:8,p:"Durante una emergencia en altura, \xBFc\xF3mo se pide la ayuda de los cuerpos de emergencia?",o:["Por la l\xEDnea telef\xF3nica 9-1-1","Con un mensaje en el grupo de la cuadrilla","Esperando a que llegue la jefatura","Llevando a la v\xEDctima al hospital en la camioneta"],ref:X.eri_911},{n:8,p:"\xBFQu\xE9 maniobra de rescate se puede hacer si la cuadrilla no la conoce?",o:["Ninguna: no se hacen maniobras de rescate de las que no se tenga conocimiento previo","La que parezca m\xE1s r\xE1pida","Cualquiera, si son dos personas en el sitio","La que indique el compa\xF1ero que mira desde abajo"],ref:X.eri_911},{n:8,p:"Durante una emergencia, \xBFqui\xE9n puede dar informaci\xF3n a personas u organizaciones externas?",o:["Solo la direcci\xF3n o el personal autorizado, mediante comunicados oficiales","Cualquier trabajador de la cuadrilla","El compa\xF1ero que est\xE9 m\xE1s cerca de la prensa","Cualquier persona que pregunte, si dice ser familiar"],ref:X.eri_terceros},{n:9,p:"\xBFQu\xE9 es manejar a la defensiva?",o:["Conducir evitando accidentes a pesar de las acciones incorrectas de los dem\xE1s y de las condiciones adversas","Conducir r\xE1pido para pasar menos tiempo en la carretera","Responderles a los dem\xE1s conductores para que respeten","Manejar solo de d\xEDa y con buen clima"],ref:X.sv_defensivo},{n:9,p:"\xBFCu\xE1les son los cinco elementos del manejo defensivo?",o:["Conocimiento, estar alerta, previsi\xF3n, juicio y habilidad","Velocidad, reflejos, fuerza, suerte y experiencia","Licencia, seguro, marchamo, revisi\xF3n t\xE9cnica y placa","Prisa, frustraci\xF3n, cansancio, complacencia y descuido"],ref:X.sv_defensivo},{n:9,p:"\xBFQu\xE9 porcentaje de los accidentes viales tiene origen en el factor humano?",o:["El 90 %","El 10 %","La mitad","El 25 %"],ref:X.sv_humano},{n:9,p:"\xBFCu\xE1les son los cuatro estados que producen errores al conducir?",o:["Prisa, frustraci\xF3n, cansancio y complacencia","Lluvia, neblina, derrumbes y huecos","Alcohol, drogas, f\xE1rmacos y caf\xE9","Velocidad, curvas, pendientes y peraltes"],ref:X.sv_estados},{n:9,p:"La complacencia al volante es\u2026",o:["El exceso de confianza que lleva a relajar la atenci\xF3n","La falta de fuerzas despu\xE9s de un esfuerzo o por no descansar","La respuesta emocional ante un hecho no gestionado","La rapidez con que se hace una cosa"],ref:X.sv_estados},{n:9,p:"\xBFCada cu\xE1nto se revisan los nueve m\xEDnimos de seguridad vehicular?",o:["Todos los d\xEDas antes de salir con el automotor, siempre que aplique","Una vez al mes, en el taller","Solo cuando el veh\xEDculo hace un ruido raro","Una vez al a\xF1o, con la revisi\xF3n t\xE9cnica"],ref:X.sv_minimos},{n:9,p:"\xBFQu\xE9 dispositivos de advertencia deben estar en buen estado?",o:["Luces altas y bajas, de freno e intermitentes, la bocina y dos juegos de tri\xE1ngulos","Solo la bocina","Solo las luces delanteras","El radio y el aire acondicionado"],ref:X.sv_minimos},{n:9,p:"Seg\xFAn la capacitaci\xF3n, \xBFd\xF3nde se recomienda usar las llantas de recauche?",o:["Solo en la parte trasera del automotor","Solo adelante","En las cuatro posiciones","\xDAnicamente como repuesto"],ref:X.sv_minimos},{n:9,p:"\xBFQui\xE9n puede conducir un veh\xEDculo institucional?",o:["El funcionario que cuenta con los permisos de conducir del ICE","Cualquier compa\xF1ero con licencia","El primero que llegue al plantel","El que tenga m\xE1s experiencia, aunque no tenga el permiso"],ref:X.sv_permiso},{n:10,p:"Al empezar a llover, \xBFpor qu\xE9 se pone resbalosa la calle?",o:["Se forma una especie de jab\xF3n con los residuos de tierra, grasa y gasolina","Porque el agua enfr\xEDa el asfalto","Porque las llantas se desinflan con el agua","No cambia nada: el asfalto no resbala"],ref:X.sv_lluvia},{n:10,p:"En caminos con grava, arenosos o mojados, \xBFqu\xE9 pide el GS-101?",o:["Bajar la velocidad y manejar con cuidado","Subir la velocidad para no quedarse pegado","Frenar fuerte en cada curva","Ir pegado al veh\xEDculo de adelante para seguir su ruta"],ref:X.sv_mojado},{n:10,p:"Llueve tan fuerte que la falta de visibilidad es excesiva. \xBFQu\xE9 se hace?",o:["Detener el veh\xEDculo a un costado de la carretera y esperar que pase la tormenta","Seguir igual, con las luces altas","Seguir de cerca al veh\xEDculo de adelante","Acelerar para salir pronto de la tormenta"],ref:X.sv_visibilidad},{n:10,p:"\xBFPor qu\xE9 la neblina es una de las peores condiciones para conducir?",o:["La habilidad del conductor no puede mejorar la visibilidad ni permitirle aumentar la velocidad","Solo afecta a las motocicletas","Hace que el motor pierda potencia","No es peligrosa si se conoce el camino"],ref:X.sv_lluvia},{n:10,p:"Vas acompa\xF1ado y sientes cansancio al volante. \xBFQu\xE9 indica el GS-101?",o:["Detenerte en un sitio seguro, bajarte, caminar y ceder la conducci\xF3n al compa\xF1ero","Pedirle al compa\xF1ero que te hable para no dormirte","Subir el volumen del radio","Abrir la ventana y seguir hasta llegar"],ref:X.sv_fatiga},{n:10,p:"Con una dosis alta, el alcohol provoca\u2026",o:["Dificultad en el habla, incoordinaci\xF3n, juicio alterado y falta de control emocional","Mejores reflejos para manejar","M\xE1s atenci\xF3n en la carretera","Solo sue\xF1o, sin otros efectos"],ref:X.sv_sustancias},{n:10,p:"Observas o causas un da\xF1o al veh\xEDculo. \xBFQu\xE9 haces?",o:["Lo reportas: no se oculta, puede producir un accidente","Lo arreglas t\xFA en la casa","Lo callas si es peque\xF1o","Esperas a que otro compa\xF1ero lo note"],ref:X.sv_danos},{n:11,p:"\xBFCu\xE1ndo se hace el ATS (an\xE1lisis de trabajo seguro)?",o:["Antes de empezar las labores de cada d\xEDa, con toda la cuadrilla","Una vez por semana, solo el encargado","Al terminar la jornada, para el informe","Solo cuando ya hubo un accidente"],ref:X.gs31_ats},{n:11,p:"A media ma\xF1ana cambia el personal o llega otro equipo. \xBFQu\xE9 pide el GS-31?",o:["Aplicar de nuevo el ATS antes de seguir","Nada: el ATS de la ma\xF1ana sigue valiendo","Anotarlo en el informe del d\xEDa siguiente","Que el compa\xF1ero nuevo firme la pizarra sin leerla"],ref:X.gs31_cambios},{n:11,p:"Una tarea cr\xEDtica tiene un grado de criticidad (GC) de 8 o m\xE1s. \xBFQu\xE9 significa?",o:["Criticidad alta: se atiende primero","Criticidad baja: puede esperar","Criticidad moderada","Nada: el GC es solo un tr\xE1mite"],ref:X.gs31_criticidad},{n:11,p:"En la pizarra del ATS aparece un factor de muerte. \xBFQu\xE9 se hace?",o:["Se revisan en conjunto las acciones a implementar","Nada: es solo un dato de la pizarra","Lo resuelve el t\xE9cnico m\xE1s nuevo","Se anota y se revisa al d\xEDa siguiente"],ref:X.ats_muerte},{n:15,p:"Detectas una anomal\xEDa en el trabajo de tu cuadrilla. \xBFA qui\xE9n se lo informas?",o:["Al coordinador de cuadrilla y/o a SST","A nadie, si ya lo corregiste t\xFA","Solo al cliente, al terminar la obra","A la persona que lo hizo, para que lo anote despu\xE9s"],ref:X.rec_anomalia},{n:15,p:"Un compa\xF1ero sufre un accidente. \xBFQu\xE9 formulario se usa y cu\xE1ndo se avisa a la jefatura?",o:["F07-GS-52 Aviso inmediato, antes de terminar la jornada","F06-GS-52, la pr\xF3xima semana","F01-GS-52, al d\xEDa siguiente","Ning\xFAn formulario: basta con avisar en la charla"],ref:X.rec_accidente},{n:15,p:"Hubo un casi incidente y nadie se lastim\xF3. \xBFQu\xE9 formulario se usa?",o:["F06-GS-52 (o F01-GS-52 si fue grave)","F07-GS-52, el aviso inmediato","Ninguno, porque no hubo lesi\xF3n","El F02-CSCON-SST-00-25 con la firma del compa\xF1ero"],ref:X.rec_cuasi},{n:15,p:"Un compa\xF1ero incumple una regla de SST por primera vez, con riesgo bajo. \xBFQu\xE9 se hace?",o:["Retroalimentaci\xF3n positiva y correctiva, registro en el F02-CSCON-SST-00-25 con su firma, y aviso a la jefatura inmediata","Solo se le llama la atenci\xF3n en privado, sin registro","Se guarda para el informe del a\xF1o siguiente","Se le sanciona de inmediato, sin escuchar su versi\xF3n"],ref:X.rec_liderazgo},{n:15,p:"Hay un peligro inminente para las personas durante una tarea. \xBFQu\xE9 se hace?",o:["Se interrumpe la actividad","Se termina la tarea y luego se corrige","Se sigue con m\xE1s cuidado","Se avisa al final de la semana"],ref:X.rec_inminente},{n:16,p:"\xBFC\xF3mo se entra a una planta solar?",o:["Con autorizaci\xF3n, coordinado con el encargado de la planta","Entrando primero y avisando despu\xE9s","Por la cerca, si el port\xF3n est\xE1 cerrado","Como diga el primero que llegue"],ref:X.demo_generacion_autorizacion},{n:16,p:"\xBFCu\xE1ndo produce electricidad un panel solar?",o:["Mientras le da la luz: por eso se trata como energizado","Solo al mediod\xEDa","Solo si el inversor est\xE1 apagado","Nunca, si el panel est\xE1 sucio"],ref:X.demo_generacion_energizado},{n:16,p:"\xBFSe puede pisar o apoyarse en un panel para ver mejor?",o:["No: no se pisa ni se apoya nadie en los paneles","S\xED, si el panel est\xE1 limpio","S\xED, si la fila es corta","S\xED, con una tabla debajo"],ref:X.demo_generacion_no_pisar},{n:16,p:"\xBFQui\xE9n manipula las conexiones y los inversores de la planta?",o:["Solo personal calificado, seg\xFAn el procedimiento de la planta","Cualquier trabajador de la cuadrilla","Quien llegue primero a la caseta","Quien tenga la llave del port\xF3n"],ref:X.demo_generacion_conexiones},{n:16,p:"Ves un cable suelto y pelado en el camino de la planta. \xBFQu\xE9 haces?",o:["No lo tocas: lo marcas y lo reportas","Lo levantas con la mano para pasar","Lo cortas con la herramienta","Lo envuelves con cinta y sigues"],ref:X.demo_generacion_energizado},{n:16,p:"Llega una tormenta el\xE9ctrica mientras trabajan al aire libre. \xBFQu\xE9 indica el GS-101?",o:["Suspender la actividad por las condiciones del clima","Terminar la fila antes de bajar","Seguir trabajando: la tormenta todav\xEDa no ha llegado","Quedarse donde est\xE1n, a esperar"],ref:X.sol_clima},{n:16,p:"Encuentras un panel con el vidrio roto. \xBFQu\xE9 haces?",o:["Lo marcas y lo reportas al encargado de la planta, sin tocarlo","Lo cambias t\xFA, sin avisar","Lo tapas con cinta para la visita","Lo dejas para la pr\xF3xima visita sin avisar"],ref:X.demo_generacion_danos},{n:16,p:"Hace mucho sol y llevan un rato limpiando. \xBFQu\xE9 se hace?",o:["Tomar agua y descansar a la sombra con frecuencia","Seguir sin parar: el agua se toma al final","Quitarse el casco para refrescarse","Tomar solo caf\xE9, para no sudar"],ref:X.demo_generacion_calor},{n:13,p:"\xBFQu\xE9 sirve de apoyo a la escalera a medio vano, si no hay poste?",o:["El veh\xEDculo: la escalera se amarra a \xE9l","Nada: la escalera se apoya sola en el suelo","Solo un compa\xF1ero que la sostenga, sin amarrarla","El peso del trabajador sobre ella"],ref:X.mv_apoyo},{n:13,p:"\xBFEn cu\xE1ntos puntos se amarra la escalera a medio vano?",o:["En dos: al pant\xF3grafo y al eje de una llanta","En uno: basta con el pant\xF3grafo","En tres: se suma la cabina","No se amarra: el peso de la escalera basta"],ref:X.mv_dos_puntos},{n:13,p:"\xBFQu\xE9 nudo da la tensi\xF3n en el amarre a medio vano?",o:["Nudo ocho aplicado","Nudo alondra","Nudo gaza simple","Nudo ocho en l\xEDnea"],ref:X.mv_nudos},{n:13,p:"\xBFC\xF3mo termina el amarre a medio vano?",o:["Con pata de chancho (nudo ballestrinque)","Con un nudo alondra, sin asegurarlo","Con una gaza simple, suelta","Dejando la cuerda sin amarrar para ajustar despu\xE9s"],ref:X.mv_nudos},{n:13,p:"\xBFCon qu\xE9 se sube por una escalera a medio vano?",o:["Con la cuerda de seguridad sujetada a la escalera","Con la cuerda en el hombro, sin sujetarla","Con las manos ocupadas por herramientas","Sin cuerda, si la escalera es corta"],ref:X.mv_subida},{n:13,p:"Una escalera de 24 pies (7,32 m): \xBFhasta qu\xE9 altura de uso sirve?",o:["6,42 m","7,32 m","7,63 m","5,30 m"],ref:X.mv_tabla2},{n:13,p:"\xBFHasta qu\xE9 pelda\xF1o de la escalera se puede trabajar?",o:["Hasta el que alcanza el trabajo, sin llegar a los tres superiores","Hasta el \xFAltimo, para alcanzar mejor","En el tercero de arriba, si hace falta"],ref:X.mv_tres},{n:14,p:"\xBFQu\xE9 abertura m\xEDnima debe tener una cala para instalar el cable?",o:["1,5 m de largo por 1 m de ancho, como m\xEDnimo","1 m de largo por 1 m de ancho","1,5 m de largo por 0,5 m de ancho","0,8 m de largo por 0,8 m de ancho"],ref:X.cala_abertura},{n:14,p:"Si la abertura entre los extremos del ducto mide 40 cm, \xBFcu\xE1nto debe medir la pieza de PVC de reparaci\xF3n?",o:["90 cm: la abertura m\xE1s 50 cm","40 cm: lo mismo que la abertura","50 cm: solo el sobrante","1,20 m: el triple de la abertura"],ref:X.cala_pieza},{n:14,p:"\xBFHacia d\xF3nde queda la abertura del corte longitudinal de la pieza de reparaci\xF3n?",o:["Hacia arriba","Hacia abajo, contra el ducto","Hacia un costado","No importa la posici\xF3n"],ref:X.cala_ranura},{n:14,p:"\xBFCu\xE1ntas amarras de cinta met\xE1lica o tipo gaza llevan la reparaci\xF3n, y d\xF3nde?",o:["Tres: una en cada extremo y una en el centro","Dos: una en cada extremo","Cuatro: una cada 25 cm","Una sola, en el centro"],ref:X.cala_amarras},{n:14,p:"El preformado mide 75 cm o menos. \xBFA qu\xE9 distancia del poste va el cierre de empalme?",o:["75 cm","1,5 m","30 cm","2 m"],ref:X.cala_empalme},{n:14,p:"En el relleno de la cala, \xBFqu\xE9 capa va justo debajo del lastre?",o:["El material de la excavaci\xF3n, compactado al 95 % del Proctor","El tobacemento","El asfalto","La arena suelta"],ref:X.cala_capas},{n:14,p:"En un tramo recto de 1 km o m\xE1s, \xBFcada cu\xE1nto se ponen las anclas de seguridad?",o:["Cada 500 m","Cada 100 m","Cada 1 km, una sola","Solo en el poste m\xE1s alto"],ref:X.cala_anclas},{n:14,p:"\xBFA qu\xE9 distancia del poste se coloca cada ancla de seguridad?",o:["La mitad de la altura del poste, medida del herraje a la base","Un metro, sin importar la altura","Lo mismo que la altura del poste","Cinco metros, siempre"],ref:X.cala_ancla_distancia},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se le pregunta al cliente?",o:["C\xF3mo est\xE1n el cielorraso y la estructura, y si ha visto cables, goteras o avispas","Solo a qu\xE9 hora puede empezar el trabajo","Nada: si desde abajo se ve bien, se sube","Si puede pagar un trabajo extra"],ref:X.cr_cliente},{n:12,p:"Hay un cable el\xE9ctrico expuesto en el cielorraso. \xBFQu\xE9 se le pide al cliente?",o:["Que desconecte la electricidad antes de subir","Nada: se sube con cuidado, sin tocarlo","Que deje el cable al aire para revisarlo mejor","Que avise cuando el cable se caliente"],ref:X.cr_electrico},{n:12,p:"Si no es posible desconectar la electricidad del cielorraso, \xBFcon qu\xE9 se sube?",o:["Con guantes diel\xE9ctricos, despu\xE9s de revisar la zona a trabajar","Con guantes de cuero","Sin guantes, con cuidado","Con cualquier guante de trabajo"],ref:X.cr_electrico},{n:12,p:"Para trabajar en un cielorraso, \xBFqu\xE9 lleva el casco?",o:["Barbiquejo y linterna","Solo el barbiquejo, sin linterna","Solo la linterna, sin barbiquejo","Nada: el casco se usa solo en la calle"],ref:X.cr_epp},{n:12,p:"\xBFQu\xE9 se revisa desde el suelo antes de subir al cielorraso?",o:["Que no haya colmenas de avispas o similares","Solo la hora del d\xEDa","Que la escalera sea de aluminio","Nada: eso se revisa al terminar"],ref:X.cr_avispas},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se valora?",o:["Si una extensi\xF3n de fibra permite evitar subir","Si el cliente tiene caf\xE9","Cu\xE1nto pesa el trabajador","Si el d\xEDa est\xE1 soleado"],ref:X.cr_extension},{n:12,p:"La estructura del cielorraso debe observarse sin\u2026",o:["Corrosi\xF3n avanzada o madera descompuesta, y estable","Pintura nueva","R\xF3tulos de la oficina","Cables de colores"],ref:X.cr_estructura},{n:12,p:"Una escalera de abrir (tipo A) debe ser de\u2026",o:["Fibra de vidrio","Aluminio, siempre","Madera, sin importar el lugar","Cualquier material, si est\xE1 pintada"],ref:X.cr_escalera_tipo},{n:17,p:"En una obra, \xBFc\xF3mo deben estar los tableros y las cajas el\xE9ctricas?",o:["Tapados, identificados y cerrados","Abiertos, para revisar r\xE1pido los interruptores","Cerrados, aunque no tengan identificaci\xF3n","Como los dej\xF3 el \xFAltimo que los us\xF3"],ref:X.el_tablero},{n:17,p:"\xBFQu\xE9 necesita un medidor el\xE9ctrico provisional en la obra?",o:["Base estable y protecci\xF3n del agua","Solo un r\xF3tulo con el nombre de la obra","Estar en el suelo, donde nadie lo golpee","Nada: es provisional"],ref:X.el_medidor},{n:17,p:"\xBFDe qu\xE9 se protegen los conductores el\xE9ctricos en una obra?",o:["De los da\xF1os mec\xE1nicos: maquinaria, veh\xEDculos, agua y qu\xEDmicos","Solo del sol, con pintura","De nada: se cambian cuando se da\xF1an","Solo de la lluvia, con cinta aislante"],ref:X.el_conductores},{n:17,p:"\xBFCon qui\xE9n se aplica la lista de verificaci\xF3n del Anexo C del C\xF3digo El\xE9ctrico?",o:["En conjunto con un t\xE9cnico el\xE9ctrico","Solo, desde la oficina","Con el primer pe\xF3n que est\xE9 libre","Con el cliente, al entregar la obra"],ref:X.el_anexo_c},{n:17,p:"\xBFCu\xE1l de estos es un acto inseguro con electricidad?",o:["Intervenir sin autorizaci\xF3n","Usar el EPP diel\xE9ctrico","Reportar un enchufe deteriorado","Mantener el tablero cerrado"],ref:X.el_autorizacion},{n:17,p:"Con la piel h\xFAmeda o sudada, la resistencia del cuerpo a la corriente\u2026",o:["Baja","Sube","No cambia","Depende solo del calzado"],ref:X.el_mojado},{n:17,p:"\xBFQu\xE9 factores influyen en la magnitud de un incidente el\xE9ctrico?",o:["Intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria","Solo el color del cable","Solo la hora del d\xEDa","La marca del tablero y del medidor"],ref:X.el_factores},{n:17,p:"Seg\xFAn el Anexo B, una instalaci\xF3n es de peligro inminente o alto riesgo cuando\u2026",o:["Carece de protecci\xF3n frente al contacto con partes energizadas o el cortocircuito","Tiene m\xE1s de un tablero","Es provisional, aunque cumpla con todo","Alguien ya se lastim\xF3 en ella"],ref:X.el_anexo_b}],kE={registro:{titulo:"Una persona camina mirando el celular hacia el registro abierto",opciones:[{t:"STOP: Andr\xE9s la detiene y la gu\xEDa por fuera del \xE1rea se\xF1alizada",ok:!0},{t:"Le gritamos desde adentro del registro",ok:!1},{t:"Seguimos: los conos ya est\xE1n puestos",ok:!1},{t:"Ponemos la tapa encima con el compa\xF1ero adentro",ok:!1}],explicacion:"Un registro abierto es un hueco en plena acera. El per\xEDmetro se asegura con se\xF1alizaci\xF3n vial y peatonal y, si alguien entra al \xE1rea, se detiene la labor y se le gu\xEDa fuera.",ref:X.ev_registro,consecuencia:"La persona tropez\xF3 con el borde del registro y por poco cae adentro, sobre tu compa\xF1ero."},impaciente:{titulo:"Un conductor impaciente ignora el ALTO del banderero",opciones:[{t:"STOP: todos fuera de la calzada, dejamos pasar al veh\xEDculo y luego retomamos el control del tr\xE1nsito",ok:!0},{t:"Andr\xE9s se planta frente al auto para obligarlo a frenar",ok:!1},{t:"Seguimos pasando el cable: ya va a frenar",ok:!1},{t:"Le gritamos y le golpeamos el auto cuando pase",ok:!1}],explicacion:"Ninguna paleta detiene a un auto que no quiere detenerse. Ante un conductor que no respeta la se\xF1al, se evacua la calzada y nadie se le atraviesa; despu\xE9s se retoma el control (y se reporta si es necesario).",ref:X.ev_impaciente,consecuencia:"El auto pas\xF3 a cent\xEDmetros de Andr\xE9s, que estaba en medio de la calzada con la gu\xEDa del cable. La paleta ALTO no es un escudo."},peaton:{titulo:"Una persona entr\xF3 al \xE1rea se\xF1alizada",opciones:[{t:"Detengo la labor y pido a Andr\xE9s que gu\xEDe a la persona fuera del \xE1rea",ok:!0},{t:"Sigo tensando: ya casi termino",ok:!1},{t:"Le grito desde arriba que se aleje, sin dejar de trabajar",ok:!1},{t:"Bajo r\xE1pido por la escalera para sacarla yo",ok:!1}],explicacion:"El \xE1rea restringida protege a terceros de la ca\xEDda de herramientas o materiales. Se detiene la labor hasta despejarla.",ref:X.demarcacion,consecuencia:"Un herraje se solt\xF3 y cay\xF3 a medio metro de la persona. Nadie sali\xF3 herido, pero pudo terminar en tragedia."},companero:{titulo:"Andr\xE9s quiere subir a la escalera para ayudarte",opciones:[{t:"Lo detengo: solo un trabajador en la escalera; que suba el material con la cuerda",ok:!0},{t:"Que suba, son solo unos segundos",ok:!1},{t:"Que suba hasta la mitad y desde ah\xED me pase el herraje",ok:!1},{t:"Que me lance el herraje desde abajo",ok:!1}],explicacion:"Sobre la escalera port\xE1til se permite un solo trabajador. Los materiales se suben con bolso, mecate o cuerda.",ref:X.escaleras,consecuencia:"Con dos personas encima, la escalera se torci\xF3 en el amarre medio. Los dos quedaron colgando de la l\xEDnea de vida."},vehiculo:{titulo:"Un veh\xEDculo se acerca r\xE1pido al \xE1rea de trabajo",opciones:[{t:"Detengo la labor; Andr\xE9s regula el paso con la se\xF1alizaci\xF3n y esperamos a que pase",ok:!0},{t:"Sigo trabajando: los conos son suficientes",ok:!1},{t:"Bajo corriendo a quitar los conos del camino",ok:!1},{t:"Le hago se\xF1as desde la escalera sin dejar de trabajar",ok:!1}],explicacion:"La se\xF1alizaci\xF3n vial protege a la cuadrilla. Si un veh\xEDculo no respeta el \xE1rea, se detiene la labor y se regula el tr\xE1nsito antes de continuar.",ref:X.demarcacion,consecuencia:"El auto pas\xF3 rozando la escalera: la sacudida casi te tira. La se\xF1alizaci\xF3n sola no basta si nadie vigila el tr\xE1nsito."},tormenta:{titulo:"La lluvia se volvi\xF3 torrencial y hay rayer\xEDa",opciones:[{t:"Suspendo: aseguro herramientas, desciendo con tres puntos de apoyo y espero a que pase",ok:!0},{t:"Termino r\xE1pido el tensado antes de bajar",ok:!1},{t:"Me quedo arriba esperando a que escampe",ok:!1},{t:"Me quito los guantes mojados para tener m\xE1s agarre",ok:!1}],explicacion:"Se proh\xEDbe el trabajo en altura con tormenta el\xE9ctrica, lluvia torrencial o vientos de 60 km/h o m\xE1s.",ref:X.altura,consecuencia:"Un rayo cay\xF3 a dos cuadras. Con el agua, los pelda\xF1os quedaron resbalosos y perdiste un apoyo al bajar."},viento:{titulo:"Una r\xE1faga supera los 60 km/h mientras la cuadrilla trabaja en el techo",opciones:[{t:"Suspender la labor y bajar del techo, anclados a la l\xEDnea vertical de la escalera",ok:!0},{t:"Seguir: la r\xE1faga pasa en unos segundos",ok:!1},{t:"Seguir agachados, sin soltar el trabajo",ok:!1},{t:"Bajar de un salto para no esperar la escalera",ok:!1}],consecuencia:"Con vientos superiores a 60 km/h no se trabaja en techos.",explicacion:"No se debe trabajar en techos con vientos superiores a 60 km/h. Se suspende la labor y se baja de forma segura.",ref:X.t_techo_clima},presion:{titulo:"Andr\xE9s quiere subir ya: \xABel poste local se ve bien\xBB",opciones:[{t:"Seguimos: se inspeccionan el poste anterior, el local, el posterior y el tendido antes de subir",ok:!0},{t:"Subimos: el poste local est\xE1 bien",ok:!1},{t:"Que suba Andr\xE9s a revisar, es r\xE1pido",ok:!1},{t:"Subimos y revisamos los dem\xE1s postes despu\xE9s",ok:!1}],explicacion:"El encargado de cuadrilla verifica y asegura el ascenso al poste antes de iniciar la actividad. La inspecci\xF3n incluye el poste anterior, el posterior, el local y el tendido entre postes.",ref:Ya.inspeccion,consecuencia:"El poste posterior ten\xEDa una falla visible. Subir sin inspeccionarlo habr\xEDa sido hacerlo sobre un poste no verificado."},poda_peaton:{titulo:"Un peat\xF3n camina por la acera y entra en la zona de ca\xEDda de la rama",opciones:[{t:"STOP: se detiene la labor y un compa\xF1ero lo gu\xEDa fuera de la zona se\xF1alizada",ok:!0},{t:"Le gritamos, pero seguimos cortando",ok:!1},{t:"Seguimos: la rama ya cay\xF3",ok:!1},{t:"Que pase r\xE1pido por debajo de la rama",ok:!1}],explicacion:"Mientras haya una rama por caer o ca\xEDda en la zona, la labor se detiene y se regula el paso: nadie camina dentro de la zona de ca\xEDda (GS-101 \xA75.6.10 n y o).",ref:X.poda_trayectoria,consecuencia:"La persona qued\xF3 bajo la rama. Quien corta debe detener la labor a tiempo."},galeria_vigia:{titulo:"El compa\xF1ero de afuera deja de responder desde la tapa mientras est\xE1s en la galer\xEDa",opciones:[{t:"STOP: se detiene la labor y quien est\xE1 adentro sale por la escalera",ok:!0},{t:"Seguimos: el compa\xF1ero seguro est\xE1 atento",ok:!1},{t:"Gritamos desde el fondo de la galer\xEDa y seguimos con las pletinas",ok:!1},{t:"Dejamos el detector y seguimos cerca del rollo",ok:!1}],explicacion:"Sin contacto con quien vigila la tapa, se detiene la labor y se sale. La fuente no describe la comunicaci\xF3n en espacios confinados: se anota como duda en PENDIENTES_SST.md (J10).",ref:X.gal_vigia,consecuencia:"Quien estaba adentro sigui\xF3 trabajando sin que nadie lo viera desde la tapa."}};var VE=py.filter(a=>a.n===5);var Vf=[{urls:"stun:stun.l.google.com:19302"}],fy=11;function jf({sala:a,id:e,alMensaje:t,alPar:n}){let i=`realtime:mundo-${a}`,r={ws:"conectando",rtt:null,pares:new Map,presencia:!1},s,o=0,l=!1,c=!1,d=0,p=[],u=(g,A,C=i)=>{s?.readyState===1&&s.send(JSON.stringify({topic:C,event:g,payload:A,ref:String(++o)}))},f=(g,A)=>u("broadcast",{type:"broadcast",event:g,payload:A});function b(){r.ws="conectando",l=!1,s=new WebSocket(`${hu.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${hu.llave}&vsn=1.0.0`),s.onopen=()=>u("phx_join",{config:{broadcast:{self:!0},presence:{key:e},private:!1}}),s.onerror=()=>{r.ws="error"},s.onclose=()=>{r.ws!=="error"&&(r.ws="cerrado"),c||setTimeout(b,3e3)},s.onmessage=g=>{let A=JSON.parse(g.data);if(A.topic===i){if(A.event==="phx_reply"&&!l){if(A.payload?.status!=="ok"){r.ws="rechazado";return}l=!0,r.ws="unido",u("presence",{type:"presence",event:"track",payload:{id:e}}),f("eco",{id:e,t:performance.now()})}else if(A.event==="presence_state"){for(let C of Object.keys(A.payload))_(C);r.presencia=!0}else if(A.event==="presence_diff"){for(let C of Object.keys(A.payload.joins??{}))_(C);for(let C of Object.keys(A.payload.leaves??{}))C in(A.payload.joins??{})||m(C)}else if(A.event==="broadcast"){let C=A.payload.payload;A.payload.event==="eco"?C.id===e&&(r.rtt=performance.now()-C.t):C.de===e||r.pares.has(C.de)&&(A.payload.event==="rtc"?C.a===e&&C.sdp&&v(C).catch(()=>{}):(A.payload.event==="m"&&!r.pares.get(C.de).directo||A.payload.event==="f")&&t(C.m,C.de))}}}}function _(g){if(g===e||r.pares.has(g)||r.pares.size>=fy)return;let A={id:g,pc:null,canal:null,directo:!1,rtt:null};r.pares.set(g,A),n?.(g,!0),typeof RTCPeerConnection<"u"&&e<g&&M(A).catch(()=>{})}function m(g){let A=r.pares.get(g);A&&(A.pc?.close(),r.pares.delete(g),n?.(g,!1))}function h(g,A){g.canal=A,A.onopen=()=>{g.directo=!0},A.onclose=()=>{g.directo=!1},A.onmessage=C=>{let I=JSON.parse(C.data);I.t==="ping"?A.send(JSON.stringify({t:"pong",v:I.v})):I.t==="pong"?g.rtt=performance.now()-I.v:t(I,g.id)}}let x=g=>new Promise(A=>{if(g.iceGatheringState==="complete")return A();let C=setTimeout(A,2e3);g.addEventListener("icegatheringstatechange",()=>{g.iceGatheringState==="complete"&&(clearTimeout(C),A())})});async function M(g){g.pc?.close(),g.tOferta=performance.now(),g.intentos=(g.intentos??0)+1;let A=g.pc=new RTCPeerConnection({iceServers:Vf});h(g,A.createDataChannel("m",{ordered:!1,maxRetransmits:0})),await A.setLocalDescription(await A.createOffer()),await x(A),f("rtc",{de:e,a:g.id,sdp:A.localDescription})}async function v({de:g,sdp:A}){let C=r.pares.get(g);if(A.type==="offer"){C.pc?.close();let I=C.pc=new RTCPeerConnection({iceServers:Vf});I.ondatachannel=N=>h(C,N.channel),await I.setRemoteDescription(A),await I.setLocalDescription(await I.createAnswer()),await x(I),f("rtc",{de:e,a:g,sdp:I.localDescription})}else await C.pc?.setRemoteDescription(A)}function E(g){let A=JSON.stringify(g),C=!1;for(let N of r.pares.values())N.directo&&N.canal.readyState==="open"?N.canal.send(A):C=!0;let I=performance.now();C&&l&&I-d>500&&(d=I,f("m",{de:e,m:g}))}let S=g=>f("f",{de:e,m:g});p.push(setInterval(()=>u("heartbeat",{},"phoenix"),25e3)),p.push(setInterval(()=>{l&&f("eco",{id:e,t:performance.now()});for(let g of r.pares.values())g.directo&&g.canal.readyState==="open"?g.canal.send(JSON.stringify({t:"ping",v:performance.now()})):l&&e<g.id&&typeof RTCPeerConnection<"u"&&g.intentos<5&&performance.now()-g.tOferta>7e3&&M(g).catch(()=>{})},4e3)),b();function T(){c=!0,p.forEach(clearInterval);for(let g of[...r.pares.keys()])m(g);s?.close()}return{estado:r,enviar:E,fiable:S,cerrar:T}}var pu=(a,e)=>Math.max(1,Math.round(a*(e==="aprendiz"?.65:1))),fu=(a,e)=>Math.max(0,a-e),my=(a,e)=>Math.min(100,a+e*.25),qf=a=>a>=90?3:a>=75?2:a>=60?1:0;function $f(a){let e=100;for(let t of a)e=t.tipo==="acierto"?my(e,t.puntos):fu(e,t.puntos);return e}var Wf={encargado:{nombre:"Encargado de cuadrilla",corto:"Encargado",icono:"\u{1F4CB}",camisa:3108789,resumen:"Dirige el ATS, inspecciona el poste y comprueba la conexi\xF3n antes del ascenso."},sst:{nombre:"SST \xB7 prevencionista",corto:"SST",icono:"\u{1F9BA}",camisa:4170603,resumen:"Verifica el EPP y el \xE1rea de trabajo antes de que alguien suba."},liniero:{nombre:"Liniero",corto:"Liniero",icono:"\u{1F9D7}",camisa:16040475,resumen:"Lleva conos y cuerdas, arma el per\xEDmetro, sube y se asegura arriba."},auxiliar1:{nombre:"Auxiliar 1",corto:"Auxiliar 1",icono:"\u{1FA9C}",camisa:15304235,resumen:"Inspecciona y carga la escalera, la levanta a 75\xB0 y tensa la cuerda."},auxiliar2:{nombre:"Auxiliar 2",corto:"Auxiliar 2",icono:"\u{1FAA2}",camisa:13199902,resumen:"Carga la escalera, la presenta al poste y la amarra a media altura."}},Xf=8,Yf=["Listo","\xA1Alto!","Espera un momento","Escalera amarrada","Subiendo","Necesito ayuda"],Jf=[{id:"ats",rol:"encargado",lugar:"pickup",nombre:"ATS del d\xEDa",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"\xBFC\xF3mo empieza la jornada?",opciones:["Con el ATS: toda la cuadrilla analiza los riesgos de la tarea y se reparten las funciones","Cada quien toma su equipo y el riesgo se analiza si aparece un problema","El encargado llena el ATS solo, mientras los dem\xE1s adelantan el trabajo"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"epp",rol:"sst",lugar:"pickup",nombre:"Revisar el EPP de la cuadrilla",accion:"Revisar el EPP",fisico:[],antes:["ats"],puntos:8,pregunta:"\xBFCu\xE1ndo se revisa el equipo de protecci\xF3n?",opciones:["Antes de usarlo, a la vista y con sus pruebas; lo que tenga defecto no se usa y se pide el cambio","Una vez por semestre, en la revisi\xF3n planificada con SST","Solo cuando es nuevo o cuando el da\xF1o se nota desde lejos"],porque:"Cada quien revisa su EPP antes de usarlo; el equipo de altura con defecto no se usa.",ref:"GS-101 \xB7 \xA75.3.8 a) EPP revisado antes de su uso y \xA75.5 f) equipo de altura con defecto no se usa (p\xE1gs. 17 y 19)"},{id:"inspeccion",rol:"auxiliar1",lugar:"pickup",nombre:"Inspeccionar la escalera",accion:"Inspeccionar la escalera",fisico:[],antes:["ats"],puntos:8,pregunta:"Antes de bajar la escalera del pick-up\u2026",opciones:["Reviso que no tenga piezas faltantes, da\xF1adas o flojas y que los pelda\xF1os est\xE9n limpios","Nada: con la inspecci\xF3n de cada a\xF1o es suficiente","La reviso arriba, cuando ya est\xE9 apoyada en el poste"],porque:"La escalera se inspecciona cada vez que se usa, antes de subir.",ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"cuerdas",rol:"liniero",lugar:"pickup",nombre:"Tomar conos y cuerdas",accion:"Tomar conos y cuerdas",fisico:[],antes:["ats"],puntos:6,pregunta:"\xBFQu\xE9 cuerda llevas para asegurar la escalera?",opciones:["Cuerda de seguridad est\xE1tica de 10 mm y 12 m, con capacidad de 24 kN","El mecate de nailon que haya en el pick-up","Cualquier cuerda, si se le hacen suficientes nudos"],porque:"El amarre se hace con cuerda de seguridad est\xE1tica de 10 mm, 12 m y 24 kN.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda de seguridad est\xE1tica de 10 mm, 12 m de largo y 24 kN (p. 26)"},{id:"tomar",rol:"auxiliar1",lugar:"pickup",nombre:"Bajar la escalera entre dos",accion:"Tomar la escalera",fisico:[],antes:["inspeccion"],puntos:8,pregunta:"La escalera es de 28 pies (8,53 m). \xBFC\xF3mo se traslada?",opciones:["Entre dos personas, deposit\xE1ndola, sin tirarla","La lleva uno solo al hombro, para ir m\xE1s r\xE1pido","Entre dos, y al llegar se deja caer junto al poste"],porque:"Desde 28 pies la escalera se traslada y se coloca entre dos, y se deposita: no se tira.",ref:"GS-101 \xB7 \xA75.6.4 a) y o) Escalera de 28 pies o m\xE1s: trasladada y colocada por 2 personas (p\xE1gs. 22\u201323)"},{id:"tomar2",rol:"auxiliar2",lugar:"pickup",nombre:"Tomar el otro extremo",accion:"Tomar el otro extremo de la escalera",fisico:[],antes:["inspeccion"],puntos:4,ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"llegada",rol:"auxiliar1",auto:!0,lugar:"poste",nombre:"Llevar la escalera al poste",fisico:["tomar","tomar2"],antes:[],puntos:0},{id:"poste",rol:"encargado",lugar:"poste",nombre:"Inspeccionar el poste",accion:"Inspeccionar el poste",fisico:[],antes:["ats"],puntos:10,pregunta:"\xBFQu\xE9 revisas antes de autorizar el ascenso al poste?",opciones:["Que no se mueva, no est\xE9 inclinado ni da\xF1ado; y tambi\xE9n el poste anterior, el posterior y el tendido","Solo que este poste est\xE9 a plomo; los vecinos no importan","Nada: si ayer se subi\xF3, hoy tambi\xE9n se puede"],porque:"El encargado inspecciona el poste, el anterior, el posterior y el tendido; con fallas no se trabaja y se reporta.",ref:"GS-101 \xB7 \xA75.6.3 Inspecci\xF3n de poster\xEDa por el encargado de cuadrilla (p. 21)"},{id:"perimetro",rol:"liniero",lugar:"poste",nombre:"Armar el per\xEDmetro",accion:"Colocar conos y cinta",fisico:["llegada","cuerdas"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se cierra el \xE1rea de la escalera?",opciones:["Con cinta y conos, a 2 m como m\xEDnimo alrededor de la escalera","Con un cono al pie de la escalera","En la acera no hace falta: solo en la calzada"],porque:"El \xE1rea se cierra y se se\xF1aliza a un m\xEDnimo de 2 m de la escalera.",ref:"GS-101 \xB7 \xA75.6.4 g) Cerramiento y se\xF1alizaci\xF3n a un m\xEDnimo de 2 m de la escalera (p\xE1gs. 22\u201323)"},{id:"cuerda_extension",rol:"liniero",lugar:"poste",nombre:"Cuerda en la extensi\xF3n",accion:"Instalar la cuerda en la escalera",fisico:["llegada","cuerdas"],antes:["poste"],puntos:10,pregunta:"Antes de levantar la escalera, \xBFd\xF3nde va la cuerda de seguridad?",opciones:["En el \xFAltimo pelda\xF1o de la extensi\xF3n: rodea el poste por detr\xE1s y baja por el frente; ser\xE1 la l\xEDnea de vida vertical","Se amarra cuando el liniero ya est\xE9 arriba","En el primer pelda\xF1o, para que no estorbe"],porque:"La cuerda se instala previamente en el \xFAltimo pelda\xF1o de la extensi\xF3n y, al bajar por el frente, es la l\xEDnea de vida vertical.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda en el \xFAltimo pelda\xF1o de la extensi\xF3n; sirve como l\xEDnea de vida vertical (p\xE1gs. 24\u201325)"},{id:"orientar",rol:"auxiliar2",lugar:"poste",nombre:"Presentar la escalera al poste",accion:"Presentar la escalera",fisico:["llegada"],antes:["cuerda_extension"],puntos:6,pregunta:"\xBFC\xF3mo queda la escalera frente al poste?",opciones:["La secci\xF3n fija hacia el poste; la que sube y baja, de frente al trabajador","La secci\xF3n que sube y baja, hacia el poste","De lado, apoyada en un solo larguero"],porque:"La parte fija queda hacia el poste y la que asciende y desciende, de frente al trabajador.",ref:"GS-101 \xB7 \xA75.6.5 a) Escalera de frente: la parte fija hacia el poste (p. 24)"},{id:"colocar",rol:"auxiliar1",lugar:"poste",nombre:"Levantar la escalera a 75\xB0",accion:"Levantar la escalera",fisico:["orientar"],antes:[],puntos:10,pregunta:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera?",opciones:["75\xB0: con la punta de los zapatos en la base y los brazos estirados, los dedos tocan los pelda\xF1os","60\xB0: m\xE1s acostada es m\xE1s estable","85\xB0: casi vertical, pegada al poste"],porque:"La escalera va a 75\xB0, o se comprueba con la prueba de los zapatos y los brazos estirados. Es lo mismo que separar la base un cuarto del largo de la escalera.",ref:"GS-101 \xB7 \xA75.6.5 a) \xC1ngulo de 75\xB0 o prueba de los brazos estirados (p. 24) \xB7 GS-98: base separada un cuarto de la longitud"},{id:"tensar",rol:"auxiliar1",lugar:"poste",nombre:"Tensar la cuerda que baja",accion:"Tensar la cuerda",fisico:["colocar","cuerda_extension"],antes:[],puntos:8,pregunta:"La cuerda baja por el frente y pasa por el primer pelda\xF1o. \xBFCon qu\xE9 nudo se bloquea al final?",opciones:["Con un ballestrinque (pata de chancho), despu\xE9s de tensarla con el ocho en l\xEDnea","Con un nudo corredizo, para soltarla r\xE1pido","Con varias vueltas al larguero, sin nudo"],porque:"Se tensa con el ocho en l\xEDnea o la gaza y se termina con una pata de chancho que bloquea la cuerda.",ref:"GS-101 \xB7 \xA75.6.5 c) Tensar con ocho en l\xEDnea o gaza y terminar con pata de chancho (p\xE1gs. 25\u201326)"},{id:"amarre_medio",rol:"auxiliar2",lugar:"poste",nombre:"Amarrar a media altura",accion:"Amarrar la escalera al poste",fisico:["colocar"],antes:[],puntos:10,pregunta:"\xBFEn cu\xE1ntos puntos debe quedar sujeta la escalera al poste?",opciones:["En dos como m\xEDnimo: arriba y en la parte media, con la cuerda de 12 m","En uno: con el amarre de arriba es suficiente","En ninguno, si un compa\xF1ero la sostiene"],porque:"El amarre en la parte media se hace siempre: la escalera queda sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea",accion:"Verificar el \xE1rea de trabajo",fisico:["colocar"],antes:["perimetro","tensar","amarre_medio","epp"],puntos:8,pregunta:"\xBFQu\xE9 confirmas antes de dar el visto bueno al ascenso?",opciones:["Per\xEDmetro armado, escalera amarrada en dos puntos y sin vientos fuertes, lluvia torrencial ni rayer\xEDa","Que el liniero tenga prisa: entre m\xE1s r\xE1pido, menos exposici\xF3n","Solo el per\xEDmetro; el clima se valora si alguien se queja"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:"GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23) \xB7 GS-98: el prevencionista verifica las condiciones antes de la tarea en altura"},{id:"carrito",rol:"liniero",lugar:"poste",nombre:"Conectar el carrito",accion:"Conectar el carrito a la cuerda",fisico:["colocar","cuerda_extension"],antes:["tensar"],puntos:12,pregunta:"El carrito (freno de cuerda) corre por la l\xEDnea de vida vertical. \xBFA qu\xE9 parte del arn\xE9s se conecta?",opciones:["A la argolla frontal, la del pecho","Al portaganchos del arn\xE9s","A una argolla lateral de la cadera"],porque:"La detenci\xF3n de ca\xEDdas solo se conecta a la argolla dorsal o a la pectoral. El portaganchos y las argollas laterales no detienen una ca\xEDda.",ref:"GS-98 \xB7 Sistemas personales de detenci\xF3n de ca\xEDdas: solo argollas de detenci\xF3n dorsal o pectoral \xB7 GS-101 \xA75.6.1 f) Freno para cuerda (p. 20)"},{id:"conexion",rol:"encargado",lugar:"poste",nombre:"Comprobar la conexi\xF3n",accion:"Comprobar la conexi\xF3n del liniero",fisico:["carrito"],antes:["area"],puntos:12,pregunta:"El liniero ya se conect\xF3. \xBFQu\xE9 haces antes de que suba?",opciones:["Compruebo con mis manos su conexi\xF3n y su arn\xE9s: un compa\xF1ero siempre la revisa","Le pregunto si est\xE1 listo y conf\xEDo en su palabra","Lo dejo subir y lo reviso desde abajo, a la vista"],porque:"Antes de subir, un compa\xF1ero comprueba que la conexi\xF3n est\xE9 correcta (conexi\xF3n falsa).",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)"},{id:"subir",rol:"liniero",lugar:"poste",nombre:"Subir la escalera",accion:"Subir",fisico:["colocar"],antes:["perimetro","amarre_medio","carrito","conexion"],puntos:12,pregunta:"\xBFC\xF3mo se sube?",opciones:["De frente, con las manos libres y tres puntos de apoyo; la herramienta sube por cuerda y no uso los tres pelda\xF1os de arriba","Con la herramienta en una mano y agarrado con la otra","Hasta el \xFAltimo pelda\xF1o, para alcanzar mejor"],porque:"Se sube de frente con tres puntos de apoyo, la herramienta sube por cuerda y los tres pelda\xF1os superiores est\xE1n prohibidos.",ref:"GS-101 \xB7 \xA75.6.4 j) y k) Tres puntos de apoyo; Tabla 2: prohibidos los tres pelda\xF1os superiores (p\xE1gs. 22\u201323)"},{id:"faja",rol:"liniero",lugar:"arriba",nombre:"Faja de posicionamiento",accion:"Colocar la faja de posicionamiento",fisico:["subir"],antes:[],puntos:12,pregunta:"\xBFC\xF3mo se coloca la faja de posicionamiento (estrobo)?",opciones:["De una argolla lateral, en M por un pelda\xF1o y al menos 3 cables de fibra, hasta la otra argolla lateral","Las dos puntas al portaganchos del arn\xE9s","Una punta a una argolla lateral y la otra suelta, para moverme mejor"],porque:"La faja va de argolla lateral a argolla lateral, abrazando en M un pelda\xF1o y al menos 3 cables de fibra. Sola no detiene una ca\xEDda: por eso sigue la l\xEDnea de vida.",ref:"GS-101 \xB7 \xA75.6.1 d) Faja de posicionamiento (estrobo) \xB7 GS-98: el posicionamiento no protege contra ca\xEDdas por s\xED solo \xB7 forma en M: pr\xE1ctica de la cuadrilla, en revisi\xF3n por Salud Ocupacional"},{id:"linea_vida",rol:"liniero",lugar:"arriba",nombre:"L\xEDnea de vida",accion:"Anclar la l\xEDnea de vida",fisico:["faja"],antes:[],puntos:12,pregunta:"\xBFD\xF3nde va la l\xEDnea de vida de tu argolla dorsal?",opciones:["A un punto de anclaje seguro, de preferencia arriba de la cabeza","Al mismo pelda\xF1o donde tengo la faja","A los cables de fibra"],porque:"La l\xEDnea de vida va del anillo dorsal a un punto de anclaje, de preferencia arriba de la cabeza. Un pelda\xF1o o un cable no son puntos de anclaje.",ref:"GS-101 \xB7 \xA75.5 h) e i) L\xEDnea de vida en el anillo dorsal, a un anclaje arriba de la cabeza (p. 19) \xB7 GS-98: el anclaje soporta 2 268 kg por persona"}];var Zf={encargado:"Planifica el cruce en el ATS, revisa la ruta y las distancias a las l\xEDneas el\xE9ctricas y comprueba la altura final.",sst:"Se\xF1aliza la calle, detiene el tr\xE1nsito mientras el cable cruza y lo libera al final.",liniero:"Sube a P05, coloca la polea, hala y tensa el cable, lo fija con preformado y deja la reserva.",auxiliar1:"Monta la bobina en P04, cuida la curvatura del cable y coloca los conos en la calle.",auxiliar2:"Amarra la gu\xEDa al cable y cruza la calle con ella cuando el tr\xE1nsito est\xE1 detenido."},Kf=["Listo","\xA1Alto!","Espera un momento","Tr\xE1nsito detenido","Halando","Necesito ayuda"],Es="GS-101 \xB7 \xA75.6.2 Demarcaci\xF3n: cinta amarilla de precauci\xF3n, conos reflectivos y rotulaci\xF3n (p. 21)",Qf=[{id:"t_ats",rol:"encargado",lugar:"pickup",nombre:"ATS del tendido",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"El cable nuevo va de P04 a P05 y cruza la calle. \xBFCu\xE1ndo se analiza ese riesgo?",opciones:["En el ATS, antes de empezar y con toda la cuadrilla: el cruce, el tr\xE1nsito y qui\xE9n hace qu\xE9","Cuando el cable ya est\xE9 sobre la calle, si hay tr\xE1nsito","El encargado lo anota solo; los dem\xE1s van sacando la bobina"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"t_ruta",rol:"encargado",lugar:"poste",nombre:"Revisar la ruta",accion:"Revisar postes y retenidas",fisico:[],antes:["t_ats"],puntos:10,pregunta:"Antes de tender, \xBFqu\xE9 revisas en la ruta del cable?",opciones:["Que los postes, las retenidas y las anclas est\xE9n en buen estado, aplomados, anclados y con la altura adecuada","Solo el poste donde va a subir el liniero","Nada: los postes los revisa el due\xF1o de la poster\xEDa"],porque:"Antes de un tendido a\xE9reo se comprueba que postes, retenidas y anclas est\xE9n en buen estado, aplomados, anclados y con la altura adecuada.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 a) Preparaci\xF3n antes de instalar: postes, retenidas y anclas (p. 23)"},{id:"t_distancias",rol:"encargado",lugar:"poste",nombre:"Distancias a lo el\xE9ctrico",accion:"Revisar las distancias",fisico:[],antes:["t_ruta"],puntos:12,pregunta:"P05 tiene un transformador. \xBFPor d\xF3nde va el cable nuevo?",opciones:["Nunca sobre el transformador ni sobre l\xEDneas el\xE9ctricas: a 40 cm de la secundaria (80 cm del neutro si no hay secundaria) y a 1 m de las ramas","Por encima del transformador, donde no estorba a nadie","Pegado a la secundaria: es de baja tensi\xF3n"],porque:"Ning\xFAn cable se instala sobre un transformador o una l\xEDnea el\xE9ctrica. Distancias m\xEDnimas: 40 cm a la secundaria, 80 cm al neutro si no hay secundaria, 50 cm a r\xF3tulos y 1 m a ramas.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 b) y c) Distancias a l\xEDneas el\xE9ctricas, r\xF3tulos y ramas; nunca sobre transformador (p. 23)"},{id:"t_senal",rol:"sst",lugar:"calle",nombre:"Se\xF1alizar la calle",accion:"Se\xF1alizar el cruce",fisico:[],antes:["t_ats"],puntos:10,pregunta:"El cable va a pasar sobre la calle. \xBFC\xF3mo se asegura el \xE1rea?",opciones:["Se delimita con conos y cinta, se advierte a los conductores y una persona por sentido regula el tr\xE1nsito mientras el cable cruza","Un cono junto a cada poste; la calle sigue igual","No hace falta: el cable va por arriba"],porque:"La zona de trabajo se delimita con cinta, conos y rotulaci\xF3n seg\xFAn la zona. Para pasar el cable sobre la calle, una persona regula el tr\xE1nsito en cada sentido.",ref:`${Es} \xB7 un banderero por sentido: igual que en la jornada del cruce de calle, en revisi\xF3n por Salud Ocupacional`},{id:"t_conos",rol:"auxiliar1",lugar:"calle",nombre:"Conos en los dos sentidos",accion:"Colocar los conos",fisico:[],antes:["t_senal"],puntos:6,ref:Es},{id:"t_bobina",rol:"auxiliar1",lugar:"bobina",nombre:"Montar la bobina",accion:"Montar la bobina",fisico:[],antes:["t_ats"],puntos:10,pregunta:"La bobina est\xE1 en su soporte junto a P04. \xBFQu\xE9 cuidas cuando el cable sale de ella?",opciones:["Que nunca se doble con un radio menor a 20 veces su di\xE1metro","Que salga r\xE1pido: las curvas se enderezan al tensar","Hacer un rollo apretado en el suelo para que no se enrede"],porque:"En el tendido el cable no puede tener curvaturas con un radio menor a 20 veces su di\xE1metro: la fibra se da\xF1a.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura: 20 veces el di\xE1metro del cable (p. 16)"},{id:"t_guia",rol:"auxiliar2",lugar:"bobina",nombre:"Amarrar la gu\xEDa al cable",accion:"Amarrar la gu\xEDa",fisico:["t_bobina"],antes:[],puntos:4},{id:"t_alto",rol:"sst",lugar:"calle",nombre:"Detener el tr\xE1nsito",accion:"Dar el ALTO",fisico:["t_senal"],antes:["t_conos"],puntos:8,ref:Es},{id:"t_subir",rol:"liniero",lugar:"poste",nombre:"Subir a P05",accion:"Subir",fisico:[],antes:["t_distancias"],puntos:12,pregunta:"La escalera qued\xF3 amarrada a P05 en la ma\xF1ana. \xBFQu\xE9 haces antes de subir?",opciones:["Reviso que siga amarrada en dos puntos, conecto el carrito a la argolla del pecho y un compa\xF1ero comprueba la conexi\xF3n","Subo directo: ya se asegur\xF3 en la ma\xF1ana","Subo y me conecto cuando llegue arriba"],porque:"La escalera se sujeta en m\xEDnimo dos puntos, y antes de subir un compa\xF1ero comprueba la conexi\xF3n del arn\xE9s.",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19) \xB7 \xA75.6.5 c) escalera sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"t_polea",rol:"liniero",lugar:"arriba",nombre:"Polea en el herraje",accion:"Colocar la polea",fisico:["t_subir"],antes:[],puntos:4},{id:"t_cruzar",rol:"auxiliar2",lugar:"poste",nombre:"Cruzar con la gu\xEDa",accion:"Entregar la gu\xEDa al liniero",fisico:["t_guia"],antes:["t_alto","t_polea"],puntos:12,pregunta:"Llevas la gu\xEDa de P04 a P05. \xBFCu\xE1ndo cruzas la calle?",opciones:["Cuando el tr\xE1nsito est\xE1 detenido en los dos sentidos y la zona est\xE1 libre de veh\xEDculos","Entre auto y auto, r\xE1pido","Cuando quiera: la gu\xEDa es liviana y los autos la ven"],porque:"La gu\xEDa y el cable solo pasan sobre la calzada con el tr\xE1nsito detenido en los dos sentidos y la zona libre.",ref:`${Es} \xB7 tr\xE1nsito detenido en los dos sentidos: igual que en la jornada del cruce de calle, en revisi\xF3n por Salud Ocupacional`},{id:"t_tension",rol:"liniero",lugar:"arriba",nombre:"Halar y tensar el cable",accion:"Tensar el cable",fisico:["t_cruzar"],antes:[],puntos:12,pregunta:"El fabricante de este cable no da tensiones. \xBFCon cu\xE1nta lo tiendes?",opciones:["250 kg como m\xE1ximo (un cuarto de tonelada), con un pull-lift para no pasar de 2700 N","Lo m\xE1s tenso posible, para que no haga flecha","La que aguante el herraje"],porque:"Se siguen las tensiones del fabricante. Si no hay, se aplica como m\xE1ximo 250 kg, con pull-lift, para no pasar de 2700 N.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n: m\xE1ximo 250 kg sin datos del fabricante (p. 31)"},{id:"t_preformado",rol:"liniero",lugar:"arriba",nombre:"Fijar con preformado",accion:"Colocar el preformado",fisico:["t_tension"],antes:[],puntos:10,pregunta:"\xBFQu\xE9 preformado usas para fijar el cable al herraje?",opciones:["El que corresponde al di\xE1metro del cable (o a su fabricante), seg\xFAn la tabla del manual","Cualquiera de los que hay en el pick-up","Ninguno: se amarra con alambre al herraje"],porque:"El preformado se elige seg\xFAn el fabricante o el di\xE1metro del cable (Anexo 3 del manual).",ref:"Manual MNO-DS-GE-001 \xB7 Anexo 3 Uso de preformados seg\xFAn fabricante o di\xE1metro del cable (p. 82)"},{id:"t_abrir",rol:"sst",lugar:"calle",nombre:"Liberar el tr\xE1nsito",accion:"Dar el SIGA",fisico:["t_preformado"],antes:[],puntos:6,ref:Es},{id:"t_reserva",rol:"liniero",lugar:"arriba",nombre:"Dejar la reserva",accion:"Dejar el rollo de reserva",fisico:["t_preformado"],antes:[],puntos:10,pregunta:"En P05 se va a empalmar este cable m\xE1s adelante. \xBFQu\xE9 dejas en el poste?",opciones:["Un rollo de al menos 25 m, de 40 a 50 cm de di\xE1metro","Nada: se corta justo en el herraje","Un rollo de 5 m, bien apretado para que no estorbe"],porque:"En cada extremo de un tendido nuevo se deja un rollo de 25 m como m\xEDnimo, de 40 a 50 cm de di\xE1metro, para el empalme.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de 25 m en cada extremo para el empalme (p. 23)"},{id:"t_calco",rol:"liniero",lugar:"arriba",nombre:"Calcoman\xEDas reflectivas",accion:"Poner las calcoman\xEDas",fisico:["t_preformado"],antes:[],puntos:8,pregunta:"\xBFD\xF3nde van las calcoman\xEDas reflectivas amarillas?",opciones:["Dos, una a cada lado del poste, directamente sobre la fibra","Sobre el preformado, que se ve m\xE1s","Una sola, en medio de la calle"],porque:"Se colocan dos cintas reflectivas de precauci\xF3n, una a cada lado del poste, sobre la fibra y no sobre el preformado ni la retenida.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas de prevenci\xF3n (p. 39)"},{id:"t_altura",rol:"encargado",lugar:"calle",nombre:"Comprobar la altura",accion:"Medir la altura del cruce",fisico:["t_preformado"],antes:["t_reserva","t_calco"],puntos:12,pregunta:"El cable qued\xF3 sobre la calle. \xBFQu\xE9 altura m\xEDnima debe tener en su punto m\xE1s bajo?",opciones:["5 m sobre la calle, en la flecha m\xE1xima (4,5 m si fuera sobre la acera)","4,5 m: es lo mismo en la calle que en la acera","La que d\xE9: lo importante es que no toque los autos"],porque:"La altura m\xEDnima en la flecha m\xE1xima es de 5 m en los cruces de calle y de 4,5 m sobre aceras, procurando siempre m\xE1s.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable: 5 m en cruces de calle, 4,5 m sobre aceras (p. 26)"}];var nm={encargado:"Dirige el ATS, dicta el plano de empalme por radio y rotula el empalme.",sst:"Se\xF1aliza la mesa de empalme en la acera y verifica el \xE1rea y el clima antes de cada ascenso.",liniero:"Es el empalmador: baja el cierre, fusiona las fibras seg\xFAn el plano, revisa cada empalme y sube a fijar el cierre.",auxiliar1:"Arma la mesa de empalme y mide cada empalme con el OTDR.",auxiliar2:"Cierra y prueba la hermeticidad del cierre y enrolla las colas."},am=["Listo","\xA1Alto!","Espera un momento","Repite el plano","Fusionando","Necesito ayuda"],em="GS-101 \xB7 \xA75.6.2 Demarcaci\xF3n: cinta amarilla de precauci\xF3n, conos reflectivos y rotulaci\xF3n (p. 21)",tm="GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)",xy="GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23)",im=[{id:"e_ats",rol:"encargado",lugar:"pickup",nombre:"ATS del empalme",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"Hoy se empalma en P05: dos ascensos y trabajo en la acera. \xBFQui\xE9nes hacen el ATS?",opciones:["Toda la cuadrilla, antes de empezar y con el encargado al frente","Solo el empalmador, que es quien sube","El encargado, al terminar, para dejarlo firmado"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"e_senal",rol:"sst",lugar:"mesa",nombre:"Se\xF1alizar la mesa de empalme",accion:"Colocar conos y cinta",fisico:[],antes:["e_ats"],puntos:6,ref:em},{id:"e_area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea y el clima",accion:"Verificar el \xE1rea de trabajo",fisico:[],antes:["e_ats"],puntos:10,pregunta:"El liniero va a subir a P05. \xBFCon qu\xE9 condiciones no se trabaja en la escalera?",opciones:["Con vientos fuertes, lluvia torrencial o rayer\xEDa; y el \xE1rea tiene que estar cerrada","Solo si hay rayos encima del poste","El clima no importa si la escalera est\xE1 amarrada"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:xy},{id:"e_subir",rol:"liniero",lugar:"poste",nombre:"Subir a P05",accion:"Subir",fisico:[],antes:["e_area"],puntos:10,ref:tm},{id:"e_bajar",rol:"liniero",lugar:"arriba",nombre:"Bajar el cierre",accion:"Bajar el cierre con sus colas",fisico:["e_subir"],antes:[],puntos:10,pregunta:"El cierre tiene colas de 15 a 20 m a cada lado. \xBFPara qu\xE9?",opciones:["Para bajar el empalme y trabajarlo c\xF3modamente a nivel del suelo","Para que el cable no quede tenso entre los postes","Para tener de d\xF3nde cortar si el empalme sale mal"],porque:"Las colas del empalme a\xE9reo (15 a 20 m por lado) tienen que permitir intervenir el empalme c\xF3modamente a nivel del suelo.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.2 a) Colas del empalme a\xE9reo de 15 a 20 m, para trabajarlo a nivel del suelo (p. 45)"},{id:"e_mesa",rol:"auxiliar1",lugar:"mesa",nombre:"Armar la mesa de empalme",accion:"Armar la mesa",fisico:[],antes:["e_senal"],puntos:6,ref:em},{id:"e_dictar",rol:"encargado",lugar:"mesa",nombre:"Dictar el plano",accion:"Dictar el plano por radio",fisico:["e_bajar"],antes:[],puntos:4,dicta:"Plano de empalme: fibra 7 del tubo azul, cable nuevo con cable existente."},{id:"e_fusion",rol:"liniero",lugar:"mesa",nombre:"Fusionar seg\xFAn el plano",accion:"Fusionar la fibra",fisico:["e_bajar","e_mesa"],antes:["e_dictar"],puntos:12,pregunta:"El encargado dict\xF3: fibra 7 del tubo azul. \xBFQu\xE9 color buscas en los dos cables?",opciones:["Roja: azul, naranja, verde, caf\xE9, gris, blanca y la 7 es la roja","Violeta: es la s\xE9ptima del tubo","Negra: despu\xE9s de la blanca viene la negra"],porque:"Todo empalme respeta el c\xF3digo de colores EIA/TIA-598: 1 azul, 2 naranja, 3 verde, 4 caf\xE9, 5 gris, 6 blanco, 7 rojo, 8 negro, 9 amarillo, 10 violeta, 11 rosado, 12 aqua.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.4 Empalme seg\xFAn c\xF3digo de colores (p. 47) y Anexo 4 EIA/TIA-598 (p. 83)"},{id:"e_monitor",rol:"liniero",lugar:"mesa",nombre:"Revisar la fusi\xF3n",accion:"Revisar el monitor",fisico:["e_fusion"],antes:[],puntos:10,pregunta:"En el monitor de la empalmadora el empalme muestra una burbuja. \xBFQu\xE9 haces?",opciones:["Lo corto y lo rehago desde la preparaci\xF3n: no se aceptan gradas, burbujas ni l\xEDneas transversales","Le doy una segunda fusi\xF3n encima para corregirlo","Lo dejo: una burbuja no pierde luz"],porque:"No se aceptan empalmes con gradas, burbujas o l\xEDneas transversales en el monitor de la empalmadora, ni se hace doble fusi\xF3n.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.6 Acabado de las fibras empalmadas: sin gradas, burbujas ni doble fusi\xF3n (p. 48)"},{id:"e_otdr",rol:"auxiliar1",lugar:"mesa",nombre:"Medir con el OTDR",accion:"Medir el empalme",fisico:["e_monitor"],antes:[],puntos:12,pregunta:"El OTDR mide el empalme de la fibra 7: 0,41 dB en un sentido. \xBFQu\xE9 se hace?",opciones:["Se rehace: pasa de 0,33 dB. Se vuelve a fusionar, previa preparaci\xF3n, hasta 5 veces","Se acepta: cualquier empalme por debajo de 0,5 dB sirve","Se acepta si el promedio de todo el cable da bien"],porque:"Cada empalme debe dar 0,15 dB o menos de promedio y como m\xE1ximo 0,33 dB en un sentido. Si pasa de 0,33 dB se vuelve a fusionar, previa preparaci\xF3n, hasta 5 veces.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.7.4 b) P\xE9rdida por empalme: \u2264 0,15 dB de promedio y \u2264 0,33 dB en un sentido; hasta 5 fusiones (p. 66)"},{id:"e_refusion",rol:"liniero",lugar:"mesa",nombre:"Rehacer la fusi\xF3n",accion:"Volver a fusionar (0,12 dB)",fisico:["e_otdr"],antes:[],puntos:4},{id:"e_cierre",rol:"auxiliar2",lugar:"mesa",nombre:"Cerrar y probar el cierre",accion:"Presurizar el cierre",fisico:["e_refusion"],antes:[],puntos:10,pregunta:"\xBFC\xF3mo se comprueba que el cierre qued\xF3 herm\xE9tico?",opciones:["Se presuriza a 8 psi (560 g/cm\xB2) por 15 minutos como m\xE1ximo y despu\xE9s se libera la presi\xF3n","Se presuriza al m\xE1ximo y se deja as\xED, para que no entre agua","Se moja con agua y se mira si sale aire"],porque:"El cierre se presuriza con 560 g/cm\xB2 (8 psi) para verificar su hermeticidad, con la v\xE1lvula accesible; la prueba dura 15 minutos como m\xE1ximo y luego se libera la presi\xF3n.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme: prueba a 8 psi, m\xE1ximo 15 minutos, y liberar la presi\xF3n (p. 45)"},{id:"e_colas",rol:"auxiliar2",lugar:"mesa",nombre:"Enrollar las colas",accion:"Enrollar las colas (40 a 50 cm)",fisico:["e_cierre"],antes:[],puntos:4},{id:"e_rotulo",rol:"encargado",lugar:"mesa",nombre:"Rotular el empalme",accion:"Rotular el empalme",fisico:["e_cierre"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se identifica un empalme a\xE9reo?",opciones:["Una identificaci\xF3n a cada lado del empalme, sujeta con alambre, con el origen y el extremo del enlace","Con el nombre del empalmador escrito en el cierre","No hace falta: el plano ya dice d\xF3nde est\xE1"],porque:"Las identificaciones se sujetan al cable con alambre, una a cada lado del empalme, indicando el origen y el extremo l\xF3gico del enlace.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.6.13 Rotulaci\xF3n del empalme a\xE9reo (p. 65)"},{id:"e_subir2",rol:"liniero",lugar:"poste",nombre:"Subir con el cierre",accion:"Subir",fisico:["e_colas"],antes:["e_rotulo"],puntos:10,ref:tm},{id:"e_fijar",rol:"liniero",lugar:"arriba",nombre:"Fijar el cierre",accion:"Fijar el cierre",fisico:["e_subir2"],antes:[],puntos:12,pregunta:"\xBFA qu\xE9 distancia del poste va el cierre de empalme?",opciones:["A 75 cm; si el preformado es m\xE1s largo, m\xE1s lejos, para que el cierre no quede sujeto al preformado","Pegado al poste, para que no se mueva","En medio del vano, donde no estorba"],porque:"El cierre va a 75 cm del poste; si el preformado mide m\xE1s de 75 cm, se aleja para que no quede sujeto a \xE9l.",ref:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm (p. 52)"}];var Mt=Wf,rm=Xf,Kn={escalera:{nombre:"Escalera al poste",lugar:"Calle 50 Luisa, Sabana Norte \xB7 poste P05",resumen:"Asegurar la escalera al poste y subir.",roles:Object.fromEntries(Object.entries(Mt).map(([a,e])=>[a,e.resumen])),pasos:Jf,frases:Yf,ascensos:[["subir",null]],lista:!1,libera:["tomar","tomar2"],reposo:a=>a.hechos.tomar&&a.hechos.tomar2?"poste":"pickup",fin:"El liniero qued\xF3 asegurado con el carrito, la faja de posicionamiento y la l\xEDnea de vida.",nota:"La forma de la faja en M es pr\xE1ctica de la cuadrilla."},tendido:{nombre:"Tendido a\xE9reo",lugar:"Calle 50 Luisa, Sabana Norte \xB7 de P04 a P05, cruzando la calle",resumen:"Halar un cable de fibra nuevo sobre la calle, tensarlo, fijarlo y dejar la reserva.",roles:Zf,pasos:Qf,frases:Kf,ascensos:[["t_subir",null]],lista:!0,libera:[],reposo:(a,e)=>e==="sst"||e==="auxiliar1"?"calle":e==="auxiliar2"&&!a.hechos.t_cruzar?"bobina":"poste",fin:"El cable cruza la calle a 5 m o m\xE1s, fijado con preformado y con su reserva para el empalme.",nota:"Lo de un banderero por sentido viene de la jornada del cruce de calle."},empalme:{nombre:"Empalme a\xE9reo",lugar:"Calle 50 Luisa, Sabana Norte \xB7 caja de empalme de P05",resumen:"Bajar el cierre de P05, empalmar en la acera seg\xFAn el plano, medir, cerrar y volver a subirlo.",roles:nm,pasos:im,frases:am,ascensos:[["e_subir","e_bajar"],["e_subir2",null]],lista:!0,libera:[],reposo:(a,e)=>e==="liniero"||e==="sst"?"poste":a.hechos.e_bajar||e==="auxiliar1"?"mesa":"pickup",fin:"La fibra 7 qued\xF3 empalmada y medida, y el cierre, probado, rotulado y fijado a 75 cm del poste.",nota:"El riesgo de la fibra rota y del l\xE1ser no se trata aqu\xED: no tiene fuente aprobada todav\xEDa."}};for(let[a,e]of Object.entries(Kn))for(let t of e.pasos)t.trabajo=a;var Rn={};for(let a of Object.values(Kn))for(let e of a.pasos){if(Rn[e.id])throw new Error(`Paso repetido entre trabajos: ${e.id}`);Rn[e.id]=e}var tn=a=>Object.hasOwn(Kn,a.trabajo)?Kn[a.trabajo]:Kn.escalera,Ja=a=>tn(a).pasos,Za=a=>tn(a).ascensos.some(([e,t])=>a.hechos[e]&&!(t&&a.hechos[t])),sm=(a,e)=>tn(a).ascensos.some(([,t])=>t===e);var dc=(a,e)=>Object.hasOwn(Rn,e)&&Rn[e].trabajo===a.trabajo?Rn[e]:null,mu=()=>({chofer:null,pasajeros:[],x:null,z:null,r:null}),gu=()=>({fase:"sala",modo:"aprendiz",trabajo:"escalera",jugadores:{},hechos:{},fallos:{},eventos:[],pickup:mu(),n:0}),Gn=(a,e)=>Object.keys(a.jugadores).find(t=>a.jugadores[t].rol===e)??null,_y=(a,e)=>String(a??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,e);function bu(a,e){switch(a.n++,e?.t){case"entra":a.jugadores[e.id]={nombre:e.nombre,rol:a.jugadores[e.id]?.rol??null};break;case"sale":delete a.jugadores[e.id],a.pickup.chofer===e.id&&(a.pickup.chofer=null),a.pickup.pasajeros=a.pickup.pasajeros.filter(t=>t!==e.id);break;case"rol":a.jugadores[e.id]&&(a.jugadores[e.id].rol=e.rol);break;case"modo":a.modo=e.modo;break;case"trabajo":if(!Object.hasOwn(Kn,e.trabajo))break;a.trabajo=e.trabajo,a.hechos={},a.fallos={},a.eventos=[];break;case"empezar":a.fase="trabajo",a.pickup=mu();break;case"reiniciar":Object.assign(a,{fase:"sala",hechos:{},fallos:{},eventos:[],pickup:mu()});break;case"conduce":a.pickup.chofer=e.id;break;case"aparca":a.pickup={chofer:null,pasajeros:[],x:e.x,z:e.z,r:e.r};break;case"sube":a.pickup.pasajeros.push(e.id);break;case"baja":a.pickup.pasajeros=a.pickup.pasajeros.filter(t=>t!==e.id);break;case"hecho":if(!dc(a,e.paso))break;a.hechos[e.paso]=e.rol,Ja(a).every(t=>a.hechos[t.id])&&(a.fase="fin");break;case"falta":if(!dc(a,e.paso))break;a.fallos[e.paso]=(a.fallos[e.paso]??0)+1,a.eventos.push({tipo:"falta",puntos:e.puntos,rol:e.rol,paso:e.paso,ref:e.ref,texto:e.texto});break}return a}function om(a,e,t,n=!1){switch(e?.t){case"entra":return[{t:"entra",id:t,nombre:_y(e.nombre,16)||"Jugador"}];case"sale":return n&&a.jugadores[e.id]?[{t:"sale",id:e.id}]:[];case"rol":return!a.jugadores[t]||a.fase==="fin"||e.rol!==null&&!Mt[e.rol]?[]:e.rol&&Gn(a,e.rol)&&Gn(a,e.rol)!==t?[]:[{t:"rol",id:t,rol:e.rol}];case"modo":return a.fase==="sala"&&a.jugadores[t]&&["aprendiz","tecnico"].includes(e.modo)?[{t:"modo",modo:e.modo}]:[];case"trabajo":return a.fase==="sala"&&(a.jugadores[t]||n)&&Object.hasOwn(Kn,e.trabajo)&&e.trabajo!==a.trabajo?[{t:"trabajo",trabajo:e.trabajo}]:[];case"empezar":return a.fase==="sala"&&(a.jugadores[t]?.rol||n&&e.demo)?[{t:"empezar"}]:[];case"reiniciar":return a.fase==="fin"&&(a.jugadores[t]||n)||n&&e.dev&&a.fase==="trabajo"?[{t:"reiniciar"}]:[];case"conduce":return a.jugadores[t]?.rol&&!a.pickup.chofer&&vu(a)?[{t:"conduce",id:t}]:[];case"sube":return a.jugadores[t]?.rol&&a.pickup.chofer&&a.pickup.chofer!==t&&!a.pickup.pasajeros.includes(t)&&a.pickup.pasajeros.length<3?[{t:"sube",id:t}]:[];case"baja":return a.pickup.pasajeros.includes(t)?[{t:"baja",id:t}]:[];case"aparca":return a.pickup.chofer===t&&[e.x,e.z,e.r].every(Number.isFinite)&&Math.abs(e.x)<5e3&&Math.abs(e.z)<5e3?[{t:"aparca",x:e.x,z:e.z,r:e.r}]:[];case"auto":{let i=dc(a,e.paso);return n&&i?.auto&&a.fase==="trabajo"&&!a.hechos[i.id]&&i.fisico.every(r=>a.hechos[r])?[{t:"hecho",paso:i.id,rol:i.rol,limpio:!0}]:[]}case"intento":{let i=dc(a,e.paso);if(!i||i.auto||a.fase!=="trabajo"||a.hechos[i.id])return[];let r=n&&e.dev,s=n&&e.bot,o=r?i.rol:s?e.rol:a.jugadores[t]?.rol;if(o!==i.rol||s&&!r&&Gn(a,o))return[];if(!i.fisico.every(c=>a.hechos[c]))return[];let l=i.antes.find(c=>!a.hechos[c]);if(l)return a.modo==="aprendiz"?[]:[{t:"falta",paso:i.id,rol:o,puntos:pu(rm,a.modo),ref:Rn[l].ref??i.ref,texto:`Faltaba \xAB${Rn[l].nombre}\xBB antes de \xAB${i.nombre}\xBB.`}];if(i.opciones){if(!Number.isInteger(e.opcion)||e.opcion<0||e.opcion>=i.opciones.length)return[];if(e.opcion!==0)return[{t:"falta",paso:i.id,rol:o,puntos:pu(i.puntos,a.modo),ref:i.ref,texto:i.porque}]}return[{t:"hecho",paso:i.id,rol:o,limpio:!a.fallos[i.id]}]}}return[]}function cr(a,e){return Ja(a).filter(t=>t.rol===e&&!t.auto&&!a.hechos[t.id]&&t.fisico.every(n=>a.hechos[n])).map(t=>({paso:t,bloqueo:Rn[t.antes.find(n=>!a.hechos[n])]??null}))}var xu=a=>Ja(a).find(e=>!a.hechos[e.id]&&e.fisico.every(t=>a.hechos[t])&&e.antes.every(t=>a.hechos[t]))??null,vu=a=>a.fase==="fin"||a.fase==="trabajo"&&tn(a).libera.every(e=>a.hechos[e]),dr=a=>Math.round($f(a.eventos)),_u=a=>qf(dr(a));function lm(a){let e=Object.fromEntries(Object.keys(Mt).map(t=>[t,100]));for(let t of a.eventos)t.tipo==="falta"&&t.rol in e&&(e[t.rol]=fu(e[t.rol],t.puntos));return e}function uc(a){let e=[...a.id].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,7),t=a.opciones.map((n,i)=>i);for(let n=t.length-1;n>0;n--){e=e*1664525+1013904223>>>0;let i=e%(n+1);[t[n],t[i]]=[t[i],t[n]]}return t}var yu=(a,e)=>{for(let t=0;t<e.length;t++)a=a*31+e.charCodeAt(t)|0;return a};function cm({id:a,red:e,alEvento:t}){let n=gu(),i=[],r=0,s=[],o=!1,l=-1e9,c=()=>e?[a,...e.estado.pares.keys()].sort()[0]:a,d=()=>c()===a,p=()=>!e||o||!!e.estado.presencia;function u(v){i.push(v),r=yu(r,JSON.stringify(v)),bu(n,v),t?.(v,n)}function f(v,E,S){for(let T of om(n,v,E,S)){let g=r;u(T),e?.fiable({t:"ev",n:n.n,h:g,ev:T})}}function b(v){p()?d()?f(v,a,!0):e.fiable({t:"pro",pro:v}):s.push(v)}function _(){if(s.length&&p()){let v=s;s=[],v.forEach(b)}}function m(){let v=Date.now();e&&v-l>1500&&(l=v,e.fiable({t:"pido"}))}let h=0;function x(v,E,S){if(S!==c()||v===n.n&&E===r){h=0;return}let T=Date.now();h?T-h>1e3&&m():h=T}function M(v,E){if(v?.t==="pro")d()&&f(v.pro,E,!1);else if(v?.t==="ev"){if(E!==c())return;v.n===n.n+1&&v.h===r?u(v.ev):m()}else if(v?.t==="pido")i.length&&e.fiable({t:"todo",evs:i});else if(v?.t==="todo"){if(!Array.isArray(v.evs)||!v.evs.length||v.evs.length>5e3)return;let S=v.evs.reduce((T,g)=>yu(T,JSON.stringify(g)),0);if(!(E===c()?S!==r:!i.length))return;n=gu(),i=[],r=0;for(let T of v.evs)i.push(T),r=yu(r,JSON.stringify(T)),bu(n,T);t?.(null,n)}}return{get E(){return n},get huella(){return r},anfitrion:d,idAnfitrion:c,proponer:b,recibir:M,pedir:m,cada:_,latido:x,jugarSolo:()=>{o=!0}}}var dm=4.6,Tu=7.4,As=Tu*Math.sin(75*Math.PI/180),Su=Tu*Math.cos(75*Math.PI/180),Mu=4.8,yy=7,Eu=4.4,Au=72,hc=6,kt={cuerda:15591122,cinta:15320363,faja:15320363,vida:14173227,fibra:1711136,calco:16765471};function um(a){let e=An();for(let n of[-.21,.21])e.caja(n,-.04,a/2,.05,.08,a,15304235);for(let n=.3;n<a-.1;n+=.3)e.caja(0,-.02,n,.42,.035,.035,12172996);let t=new We(e.geometria(),new st({vertexColors:!0,roughness:.7}));return t.castShadow=!1,t}function hm({via:a,barrio:e}){let t=e.trabajo,n=e.postes.find(ee=>ee.id==="P04"),i={},r=(ee,L,ve=0)=>(a.en(ee,L,i),new O(i.x,ve,i.z)),s=r(t.d-Su,t.a,.15),o=r(t.d-.14,t.a,.15+As),l=new O(o.x-s.x,0,o.z-s.z).normalize(),c=new O(l.z,0,-l.x),d=new O().subVectors(s,o).setY(0).normalize().multiplyScalar(.97).add(new O(0,.26,0)),p=Math.atan2(l.x,l.z),u=(ee,L=0,ve=new O)=>ve.lerpVectors(s,o,ee/As).addScaledVector(d,L),f={pickup:r(e.dPick,-4.5),poste:r(t.d-2.6,t.a+.2),bobina:r(n.d+1.6,n.a-1.4),calle:r((n.d+t.d)/2,0),mesa:r(t.d-7,t.a+.6)},b=r(t.d-2.2,t.a+.75),_={pickup:{encargado:[0,-4.4],sst:[1.3,-4.4],liniero:[-1.3,-4.4],auxiliar1:[-2.6,-4.4],auxiliar2:[2.6,-4.4]},poste:{encargado:[-3.6,1.3],sst:[-4.4,-1.2],liniero:[-2.55,0],auxiliar1:[-2.2,1],auxiliar2:[-.6,-1.1]}},m={calle:{sst:[-3,-1.6],auxiliar1:[3,1.6],encargado:[0,-2.8],liniero:[0,2.8],auxiliar2:[-1.5,2.2]},bobina:{auxiliar1:[0,-1.2],auxiliar2:[-1.2,-.3],encargado:[1.2,-.3],sst:[0,-2.4],liniero:[-1.2,-2]},mesa:{liniero:[0,1.1],auxiliar1:[1.3,.9],auxiliar2:[-1.3,.9],encargado:[1.6,-.6],sst:[-1.8,-.4]}},h={calle:[(n.d+t.d)/2,0],bobina:[n.d+1.6,n.a-1.4],mesa:[t.d-7,t.a+.6]},x=(ee,L)=>L==="pickup"?r(e.dPick+_.pickup[ee][0],_.pickup[ee][1]):m[L]?r(h[L][0]+m[L][ee][0],h[L][1]+m[L][ee][1]):r(t.d+_.poste[ee][0],t.a+_.poste[ee][1]),M=new ht,v=um(dm),E=um(Tu),S=new O,T=new O,g=r(t.d-2.2,t.a+.75,.2),A=r(t.d-2.2-dm,t.a+.75,.2);E.position.copy(s),E.lookAt(o),E.visible=!1;let C=new It(new Vr(.17,.55,10).translate(0,.275,0),new st({color:15227148,roughness:.6}),8),I=[[-Su-2,-2],[2,-2],[2,2],[-Su-2,2]].map(([ee,L])=>r(t.d+ee,t.a+L,.15)),N=new bt,D=[[-11,1.8],[-8,1.2],[11,-1.8],[8,-1.2]].map(([ee,L])=>r((n.d+t.d)/2+ee,L,.15));[...I,...D].forEach((ee,L)=>{N.position.copy(ee),N.updateMatrix(),C.setMatrixAt(L,N.matrix)}),C.visible=!1;let R=new pt,U=new Float32Array(Au*6),F=new Float32Array(Au*6);R.setAttribute("position",new gt(U,3)),R.setAttribute("color",new gt(F,3));let H=new Wn(R,new Ln({vertexColors:!0}));H.frustumCulled=!1;let $=new We(new Ut(.07,.12,.07),new st({color:14173227,roughness:.4,metalness:.5})),W=new We(new $r(1.25,1.45,40).rotateX(-Math.PI/2),new yn({color:16766503,transparent:!0,opacity:.8,depthWrite:!1}));W.visible=!1;let te=new We(new Xt(.6,.6,.7,18).rotateZ(Math.PI/2),new st({color:9071172,roughness:.9}));te.position.copy(f.bobina).setY(.75),te.rotation.y=n.rumbo,te.visible=!1;let le=new O(n.x,hc,n.z),Se=new O(t.x,hc,t.z),V=new We(new Ut(1.3,.8,.65).translate(0,.4,0),new st({color:5989488,roughness:.8}));V.position.copy(f.mesa).setY(.15),V.rotation.y=p,V.visible=!1;let ce=new We(new Xt(.13,.13,.62,12).rotateZ(Math.PI/2),new st({color:2303531,roughness:.5}));ce.rotation.y=p,ce.visible=!1;let be=f.mesa.clone().setY(1.08),Me=Se.clone().addScaledVector(new O().subVectors(le,Se).setY(0).normalize(),.75).setY(hc-.1);M.add(v,E,C,H,$,W,te,V,ce);let j=0,Q=new ke;function ue(ee,L,ve){if(j>=Au)return;Q.set(ve);let me=j++*6;U[me]=ee.x,U[me+1]=ee.y,U[me+2]=ee.z,U[me+3]=L.x,U[me+4]=L.y,U[me+5]=L.z;for(let P=0;P<6;P+=3)F[me+P]=Q.r,F[me+P+1]=Q.g,F[me+P+2]=Q.b}let Ee=0,J=Array.from({length:8},()=>new O),B={x:0,y:0,z:0,rumbo:p,pose:"e",fase:0},pe=ee=>!!(ee.hechos.tomar&&ee.hechos.tomar2&&!ee.hechos.llegada);function fe(){return u(Ee*Mu,.13,J[7]),B.x=J[7].x,B.y=J[7].y,B.z=J[7].z,B.pose=Ee<1?"e":"t",B.fase=Ee*26,B}function Ae(ee){let L=ee("auxiliar1"),ve=ee("auxiliar2");return!!L&&!!ve&&Math.hypot(L.x-f.poste.x,L.z-f.poste.z)<3.5&&Math.hypot(L.x-ve.x,L.z-ve.z)<Eu+1.5}function Re(ee,L,ve,me){if(!pe(ee)||L!=="auxiliar2")return;let P=me("auxiliar1");if(!P)return;let y=ve.x-P.x,z=ve.z-P.z,q=Math.hypot(y,z),Y=Eu+.5;q>Y&&(ve.x=P.x+y/q*Y,ve.z=P.z+z/q*Y)}function Le(ee,L,ve,me,P=12){for(let y=0;y<P;y++){let z=y/P,q=(y+1)/P;J[0].lerpVectors(ee,L,z),J[0].y-=ve*Math.sin(Math.PI*z),J[1].lerpVectors(ee,L,q),J[1].y-=ve*Math.sin(Math.PI*q),ue(J[0],J[1],me)}}function _e(ee,L){if(ee.t_tension){if(Le(le,Se,.5,kt.fibra),ee.t_calco)for(let ve of[.06,.94])J[0].lerpVectors(le,Se,ve),J[0].y-=.5*Math.sin(Math.PI*ve),J[1].copy(J[0]),J[1].y+=.12,ue(J[0],J[1],kt.calco)}else if(ee.t_cruzar)Le(le,Se,2.4,kt.fibra);else if(ee.t_guia){let ve=L("auxiliar2");ve&&ue(J[2].copy(te.position).setY(1.3),J[3].set(ve.x,(ve.y??.15)+1,ve.z),kt.cuerda)}}function ae(ee){let L=ee.e_bajar&&!ee.e_fijar;if(ce.visible=!0,ce.position.copy(L?be:Me),L)for(let ve of[-.25,.25])J[0].copy(Se).setY(hc-.2),J[0].x+=ve*.3,J[1].lerpVectors(J[0],be,.5),J[1].y-=.4,J[1].x+=ve,ue(J[0],J[1],kt.fibra),ue(J[1],J[2].copy(be).setX(be.x+ve),kt.fibra)}function ne(ee,L,ve,me,P){let y=tn(ve),z=Za(ve),q=z&&ve.fase==="trabajo",Y=y.lista?{...ve.hechos,colocar:1,cuerda_extension:1,tensar:1,amarre_medio:1,perimetro:1,carrito:z,faja:z,linea_vida:z}:ve.hechos;if(Ee=q?Math.min(1,Ee+ee/yy):0,E.visible=!!Y.colocar,v.visible=!Y.colocar,!Y.colocar){let ge=me("auxiliar1"),re=me("auxiliar2");pe(ve)&&ge&&re?(v.position.set(ge.x,(ge.y??.15)+1.47,ge.z),v.lookAt(re.x,(re.y??.15)+1.47,re.z)):Y.llegada?(v.position.copy(g),v.lookAt(A)):(v.position.copy(P.local(.4,2.16,-2.9,S)),v.lookAt(P.local(.4,2.16,1.7,T)))}if(C.visible=!!Y.perimetro,C.count=Y.t_conos&&!Y.t_abrir?8:4,te.visible=ve.trabajo==="tendido",V.visible=ve.trabajo==="empalme",ce.visible=!1,j=0,Y.perimetro)for(let ge=0;ge<4;ge++)ue(J[0].copy(I[ge]).setY(.62),J[1].copy(I[(ge+1)%4]).setY(.62),kt.cinta);if(Y.colocar&&Y.cuerda_extension&&(u(As-.3,0,J[0]),J[1].set(t.x,J[0].y-.1,t.z).addScaledVector(l,.2),ue(J[0],J[1],kt.cuerda),ue(J[1],u(As-.6,.1,J[2]),kt.cuerda),ue(J[2],u(1.7,.1,J[3]),kt.cuerda),Y.tensar&&ue(J[3],u(.35,.02,J[4]),kt.cuerda)),Y.amarre_medio){let re=[[.22,.22],[.22,-.22],[-.22,-.22],[-.22,.22]].map(([se,Te],ze)=>J[ze].set(t.x+se,3.65,t.z+Te));for(let se=0;se<4;se++)ue(re[se],re[(se+1)%4],kt.cuerda);for(let se of[-1,1])ue(u(3.4,0,J[4]).addScaledVector(c,se*.21),J[5].set(t.x,3.65,t.z).addScaledVector(c,se*.22),kt.cuerda)}let ye=me("liniero");if($.visible=!!(Y.carrito&&ye),$.visible){let ge=J[5].set(ye.x,(ye.y??.15)+1.28,ye.z);u(Math.min(As-.8,Math.max(1.3,ge.y-.15)),.1,$.position),ge.distanceTo($.position)<1.6&&ue($.position,ge.addScaledVector(l,.1),kt.cuerda)}if(q&&ye&&Ee>=1){let ge=J[6].set(ye.x,ye.y,ye.z);if(Y.faja){let re=J[0].copy(ge).addScaledVector(c,.2).setY(ge.y+1),se=J[1].copy(ge).addScaledVector(c,-.2).setY(ge.y+1),Te=u(Mu+1.25,0,J[2]).addScaledVector(c,.15),ze=u(Mu+1.25,0,J[3]).addScaledVector(c,-.15),we=J[4].set(t.x,6.3,t.z).addScaledVector(l,-.5);ue(re,Te,kt.faja),ue(Te,we,kt.faja),ue(we,ze,kt.faja),ue(ze,se,kt.faja)}Y.linea_vida&&ue(J[0].copy(ge).addScaledVector(l,-.14).setY(ge.y+1.42),J[1].set(t.x,Math.min(9.2,ge.y+2.5),t.z),kt.vida)}ve.trabajo==="tendido"&&_e(Y,me),ve.trabajo==="empalme"&&ae(Y),R.setDrawRange(0,j*2),R.attributes.position.needsUpdate=R.attributes.color.needsUpdate=!0,W.material.opacity=.55+.3*Math.sin(L*4)}function de(ee){W.visible=!!f[ee],W.visible&&W.position.copy(f[ee]).setY(.2)}return{grupo:M,zonas:f,puesto:x,metaEscalera:b,cargando:pe,llego:Ae,restringir:Re,cada:ne,marcar:de,puestoLiniero:fe,rumbo:p,L_CARGA:Eu,get subida(){return Ee},cima:o}}var Sy=1.7,My=1.25,Ey=1.6,pm=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a));function fm({sesion:a,obra:e,resolver:t,altura:n}){let i=new Map;function r(s,o,l){for(let c of Object.keys(Mt)){let d=!Gn(o,c);if(d&&!i.has(c)){let p=e.puesto(c,"pickup");i.set(c,{rol:c,x:p.x,z:p.z,y:.15,rumbo:0,pose:"i",fase:0,espera:0})}else d||i.delete(c)}if(a.anfitrion())for(let c of i.values()){let d=null,p=null,u=Sy;if(c.pose="i",c.y>n(c.x,c.z)+.5&&!(o.fase==="trabajo"&&Za(o))){let b=e.zonas.poste;c.x=b.x,c.z=b.z,c.y=n(b.x,b.z)}if(o.fase!=="trabajo")d=o.fase==="sala"?e.puesto(c.rol,"pickup"):null;else if(c.rol==="liniero"&&Za(o)){let b=e.puestoLiniero();Object.assign(c,{x:b.x,z:b.z,y:b.y,rumbo:e.rumbo,pose:b.pose,fase:b.fase}),p=e.subida>=1?cr(o,c.rol).find(_=>!_.bloqueo)?.paso:null}else if(e.cargando(o)&&/^auxiliar/.test(c.rol))if(c.pose="c",c.rol==="auxiliar1")d=e.metaEscalera,u=My;else{let b=l("auxiliar1");if(b){let _=c.x-b.x,m=c.z-b.z,h=Math.hypot(_,m)||1,x=c.x,M=c.z;c.x=b.x+_/h*e.L_CARGA,c.z=b.z+m/h*e.L_CARGA,c.rumbo=pm(c.rumbo,Math.atan2(b.x-c.x,b.z-c.z)),c.fase+=Math.hypot(c.x-x,c.z-M)*4.19}}else p=cr(o,c.rol).find(b=>!b.bloqueo)?.paso??null,d=e.puesto(c.rol,p?p.lugar:tn(o).reposo(o,c.rol));let f=!d;if(d){let b=d.x-c.x,_=d.z-c.z,m=Math.hypot(b,_);if(m>.25){let h=Math.min(m,u*s);if(c.x+=b/m*h,c.z+=_/m*h,t(c,.3),c.rumbo=pm(c.rumbo,Math.atan2(b,_))*.25+c.rumbo*.75,c.fase+=h*4.19,c.rol==="auxiliar1"&&e.cargando(o)){let x=l("auxiliar2");x&&Math.hypot(x.x-c.x,x.z-c.z)>e.L_CARGA+.6&&(c.x-=b/m*h,c.z-=_/m*h)}}else f=!0;c.y=n(c.x,c.z)}p&&f?(c.espera+=s,c.espera>Ey&&(c.espera=0,a.proponer({t:"intento",paso:p.id,opcion:0,bot:!0,rol:c.rol}))):c.espera=0}}return{B:i,cada:r}}var Ts={"teclado y rat\xF3n":{accion:"E",mundo:"WASD moverse \xB7 rat\xF3n mirar \xB7 E acci\xF3n \xB7 V vista \xB7 R radio \xB7 M mapa \xB7 P pausa \xB7 May\xFAs correr",panel:"Clic o 1\u20133 para elegir \xB7 \u2191 \u2193 mover \xB7 Enter aceptar \xB7 Esc volver",todo:"Teclado y rat\xF3n: WASD moverse, rat\xF3n mirar (clic en el juego para capturarlo), E acci\xF3n, V cambiar vista, R radio, M mapa, P o Esc pausa, May\xFAs correr, H bocina al volante."},t\u00E1ctil:{accion:"\u270B",mundo:"Izquierda: caminar \xB7 derecha: mirar \xB7 \u270B acci\xF3n \xB7 \u{1F441} vista \xB7 \u{1F4FB} radio \xB7 \u{1F5FA} mapa \xB7 \u23F8 pausa",panel:"Toca una opci\xF3n para elegirla",todo:"Pantalla t\xE1ctil: arrastra a la izquierda para caminar (al fondo, corres) y a la derecha para mirar. Botones: \u270B acci\xF3n, \u{1F441} vista, \u{1F4FB} radio, \u{1F5FA} mapa, \u23F8 pausa."},control:{accion:"\u24B6",mundo:"\u24C1 moverse \xB7 \u24C7 mirar \xB7 \u24B6 acci\xF3n \xB7 \u24CE vista \xB7 \u24CD radio \xB7 \u29C9 mapa \xB7 \u2630 pausa \xB7 LT correr",panel:"\u24B6 elegir \xB7 \u271A o \u24C1 mover \xB7 \u24B7 volver",todo:"Control: palanca izquierda moverse, derecha mirar, \u24B6 acci\xF3n, \u24CE vista, \u24CD radio, \u29C9 (Vista) mapa, \u2630 (Men\xFA) pausa, LT correr, LB bocina al volante. En los men\xFAs: cruceta o palanca para mover, \u24B6 elegir, \u24B7 volver."}},Ay=`
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
`,mm=["1","2","3","4","5","6"];function gm(a,e){let t=document.createElement("style");t.textContent=Ay,document.head.append(t);let n=(V,ce="div")=>{let be=document.createElement(ce);return be.className=V,a.append(be),be},i=n("mu-hud"),r=n("mu-lista","ol"),s=n("mu-aviso"),o=n("mu-avisos"),l=n("mu-fondo"),c=document.createElement("div");c.className="mu-panel",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),l.append(c),l.hidden=!0,i.hidden=r.hidden=s.hidden=!0;let d=null,p=!1,u=null,f=null,b=[],_="",m=0,h="teclado y rat\xF3n",x=n("mu-ayudas");try{_=localStorage["mundo:nombre"]??""}catch{}let M=()=>[...c.querySelectorAll("button:not([disabled]), input")];function v(V,ce,{cancela:be=!1}={}){let Me=d===V?m:-1,j=d!==V;d=V,p=be,c.innerHTML=ce+'<div class="mu-pie"></div>',l.hidden=!1,document.exitPointerLock?.();let Q=M(),ue=Q[Me]?Me:Q.findIndex(Ee=>Ee.classList.contains("elegido"));S(ue>=0?ue:Q.findIndex(Ee=>Ee.tagName==="BUTTON")),g(),j&&ft.clic()}function E(){d=null,u=null,l.hidden=!0,c.innerHTML=""}function S(V){let ce=M();ce.length&&(m=(V+ce.length)%ce.length,ce.forEach((be,Me)=>be.classList.toggle("foco",Me===m)),ce[m].focus({preventScroll:!0}),ce[m].scrollIntoView?.({block:"nearest"}),ce[m].tagName==="INPUT"&&ce[m].setSelectionRange(ce[m].value.length,ce[m].value.length))}function T(V){let ce=M().indexOf(document.activeElement);S((ce>=0?ce:m)+V),ft.hover()}let g=()=>{let V=c.querySelector(".mu-pie");V&&(V.textContent=Ts[h].panel)};c.addEventListener("click",V=>{let ce=V.target.closest("button");if(!ce||ce.disabled)return;let{a:be,v:Me}=ce.dataset;if(be==="rol")A(),e.rol(Me);else if(be==="modo")e.modo(Me);else if(be==="trabajo")e.trabajo(Me);else if(be==="empezar")A(),e.empezar();else if(be==="unirse"){let j=c.querySelector("[name=codigo]").value.trim();j&&e.unirse(j)}else if(be==="copiar")navigator.clipboard?.writeText(Me).then(()=>{ce.textContent="Enlace copiado \u2713"},()=>{ce.textContent=Me});else if(be==="opcion")f=Number(Me),e.intento(u.id,f);else if(be==="frase")e.radio(Number(Me)),E();else if(be==="reiniciar")e.reiniciar();else if(be==="cerrar")E();else if(be==="ajuste"){let[j,Q]=Me.split(":");e.ajuste(j,Number(Q))}else be==="dev"?e.dev(Me,ce):be==="ir"?(e.ir(Me),E()):be==="reporte"&&e.reporte()});function A(){let V=c.querySelector("[name=nombre]");if(V){_=V.value.trim().slice(0,16);try{localStorage["mundo:nombre"]=_}catch{}e.nombre(_)}}addEventListener("keydown",V=>{d&&((V.code==="Escape"||V.code==="KeyP"&&d==="pausa")&&p?E():V.code==="ArrowDown"?(V.preventDefault(),T(1)):V.code==="ArrowUp"?(V.preventDefault(),T(-1)):V.target.tagName!=="INPUT"&&/^(Digit|Numpad)[1-6]$/.test(V.code)&&c.querySelectorAll("[data-a=opcion],[data-a=frase]")[Number(V.code.slice(-1))-1]?.click())});function C(V,ce,{codigo:be,enlace:Me,conectado:j,pares:Q}){let ue=V.jugadores[ce]?.rol,Ee=V.fase==="trabajo",J=tn(V),B=c.querySelector("[name=nombre]")?.value??_,pe=Object.entries(Mt).map(([fe,Ae])=>{let Re=Gn(V,fe),Le=Re&&Re!==ce;return`<button class="mu-op${Re===ce?" elegido":""}" data-a="rol" data-v="${fe}"${Le||!j?" disabled":""}>${Ae.icono} <b>${at(Ae.nombre)}</b> \xB7 ${Re===ce?"T\xFA":Le?at(V.jugadores[Re].nombre):"compa\xF1ero autom\xE1tico"}<small>${at(J.roles[fe])}</small></button>`}).join("");v("sala",`
      <h1>Cuadrilla Segura \xB7 Mundo</h1>
      <p><small>Orden de trabajo: ${at(J.nombre)} \xB7 ${at(J.lugar)}. Contenido en revisi\xF3n por Salud Ocupacional.</small></p>
      <div class="mu-fila"><label>Tu nombre<input name="nombre" maxlength="16" autocomplete="off" value="${at(B)}" placeholder="Como te ver\xE1n los dem\xE1s"></label>
        <div>Sala <b>${at(be)}</b> \xB7 ${j?`${Q+1} en l\xEDnea`:"conectando\u2026"}<br><button class="mu-op" data-a="copiar" data-v="${at(Me)}" style="margin:4px 0 0;min-height:36px;padding:6px 10px">Copiar enlace para invitar</button></div></div>
      <h2>${Ee?"Trabajo en curso: elige un rol libre":"Elige tu rol"}</h2>${pe}
      ${Ee||Object.keys(Kn).length<2?"":`<h2>Orden de trabajo</h2>${Object.entries(Kn).map(([fe,Ae])=>`<button class="mu-op${V.trabajo===fe?" elegido":""}" data-a="trabajo" data-v="${fe}"${ue?"":" disabled"}><b>${at(Ae.nombre)}</b><small>${at(Ae.resumen)}</small></button>`).join("")}`}
      ${Ee?"":`<h2>Dificultad</h2><div class="mu-fila">
        <button class="mu-op${V.modo==="aprendiz"?" elegido":""}" data-a="modo" data-v="aprendiz"${ue?"":" disabled"}><b>Aprendiz</b><small>Con pistas; el juego no deja saltarse el orden.</small></button>
        <button class="mu-op${V.modo==="tecnico"?" elegido":""}" data-a="modo" data-v="tecnico"${ue?"":" disabled"}><b>T\xE9cnico</b><small>Sin pistas; saltarse un paso es una falta.</small></button></div>
      <button class="mu-op mu-pri" data-a="empezar"${ue?"":" disabled"}>${ue?"Empezar el trabajo":"Elige un rol para empezar"}</button>`}
      <h2>Unirse a otra sala</h2><div class="mu-fila"><input name="codigo" maxlength="12" autocomplete="off" placeholder="C\xF3digo de sala"><button class="mu-op" data-a="unirse" style="margin:0">Unirse</button></div>`)}function I(V,ce,be=[]){u?.id!==V.id&&(f=null),u=V,b=be;let Me=uc(V).map((j,Q)=>`<button class="mu-op${be.includes(j)?" mal":""}" data-a="opcion" data-v="${j}"${be.includes(j)?" disabled":""}>${mm[Q]}. ${at(V.opciones[j])}</button>`).join("");v("decision",`<h2>${at(Mt[V.rol].nombre)} \xB7 ${at(V.nombre)}</h2><h1>${at(V.pregunta)}</h1>${Me}
      ${be.length?`<div class="mu-nota"><b>No es as\xED.</b> ${at(V.porque)}<br><small>${at(V.ref)}</small></div>`:ce.modo==="aprendiz"?`<div class="mu-pista"><small>Pista: ${at(V.ref)}</small></div>`:""}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Volver</button>`,{cancela:!0})}function N(V,ce){d!=="decision"||u?.id!==V.paso||(f!==null&&!b.includes(f)&&b.push(f),I(u,ce,b))}function D(V){v("radio",`<h2>Radio</h2>${tn(V).frases.map((ce,be)=>`<button class="mu-op" data-a="frase" data-v="${be}">${mm[be]}. ${at(ce)}</button>`).join("")}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>`,{cancela:!0})}function R(V){v("mapa",'<h2>Costa Rica \xB7 escala 1:60 \xB7 \u25B2 t\xFA \xB7 \u25CB pick-up y cuadrilla</h2><canvas></canvas><button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>',{cancela:!0}),V(c.querySelector("canvas"))}function U(V){let ce=dr(V),be=lm(V),Me=Object.entries(Mt).map(([j,Q])=>{let ue=Gn(V,j),Ee=V.eventos.filter(J=>J.tipo==="falta"&&J.rol===j);return`<tr><td>${Q.icono} <b>${at(Q.corto)}</b><br><small>${ue?at(V.jugadores[ue].nombre):"autom\xE1tico"}</small></td><td><b>${be[j]}</b></td>
        <td>${Ee.length?Ee.map(J=>`${at(J.texto)}<br><small>${at(J.ref)}</small>`).join("<br>"):"<small>Sin faltas</small>"}</td></tr>`}).join("");v("fin",`<h1>Trabajo terminado ${"\u2605".repeat(_u(V))}${"\u2606".repeat(3-_u(V))}</h1>
      <p>Seguridad de la cuadrilla: <b>${ce} de 100</b> \xB7 modo ${V.modo==="tecnico"?"T\xE9cnico":"Aprendiz"}. ${at(tn(V).fin)}</p>
      <table class="mu-tabla">${Me}</table>
      <p><small>Contenido en revisi\xF3n por Salud Ocupacional. ${at(tn(V).nota)}</small></p>
      <button class="mu-op mu-pri" data-a="reiniciar">Volver a la sala</button>
      <button class="mu-op" data-a="cerrar" style="text-align:center">Seguir en el mundo</button>`,{cancela:!0})}function F(V,ce,be,Me,j,Q=""){i.hidden=r.hidden=!1,i.innerHTML=`<span class="mu-seg">Seguridad ${dr(V)}</span><b>${ce?`${Mt[ce].icono} ${at(Mt[ce].nombre)}`:"\u{1F440} Observando"}</b><div class="mu-tarea">${at(be)}</div>${Q?`<div class="mu-lugar">\u{1F4CD} ${at(Q)}</div>`:""}`;let ue=Ja(V),Ee=ue.find(J=>!V.hechos[J.id]&&J.fisico.every(B=>V.hechos[B])&&J.antes.every(B=>V.hechos[B]))?.id;r.innerHTML=ue.map(J=>`<li class="${V.hechos[J.id]?"hecho":J.id===Ee?"ahora":""}${J.rol===ce?" mio":""}">${V.hechos[J.id]?"\u2713":J.id===Ee?"\u25B8":"\xB7"} ${at(J.nombre)} <small>(${at(Mt[J.rol].corto)})</small></li>`).join(""),s.hidden=!Me,s.textContent=Me??"",s.classList.toggle("gris",!!j)}function H(){i.hidden=r.hidden=s.hidden=!0}function $(V,ce="",be=4.5){let Me=document.createElement("div");for(Me.className=ce,Me.innerHTML=V,o.append(Me);o.children.length>4;)o.firstChild.remove();setTimeout(()=>Me.remove(),be*1e3)}let W=[];function te(V){V.forEach((ce,be)=>{let Me=W[be]??=n("mu-etq");Me.hidden=!ce.visible,ce.visible&&(Me.textContent!==ce.texto&&(Me.textContent=ce.texto),Me.style.left=ce.x+"px",Me.style.top=ce.y+"px")});for(let ce=V.length;ce<W.length;ce++)W[ce].hidden=!0}function le(V){if(V.origen!==h&&(h=V.origen,g()),x.hidden=!!d,!d){let ce=Ts[h].mundo;x.textContent!==ce&&(x.textContent=ce);return}if(V.abajo&&T(1),V.arriba&&T(-1),V.accion&&V.origen==="control"){let ce=M()[m];ce?.tagName==="BUTTON"&&ce.click()}V.atras&&p&&E()}function Se(V,ce,be){let Me=(ue,Ee,J)=>`<div class="mu-fila3"><span>${Ee}</span><button class="mu-op" data-a="ajuste" data-v="${ue}:-1" aria-label="Bajar ${Ee}">\u2212</button><b style="min-width:3.2em;text-align:center">${J}</b><button class="mu-op" data-a="ajuste" data-v="${ue}:1" aria-label="Subir ${Ee}">+</button></div>`,j=(ue,Ee,J)=>`<button class="mu-op${J?" elegido":""}" data-a="ajuste" data-v="${ue}:0">${J?"\u2611":"\u2610"} ${Ee}</button>`,Q=(ue,Ee,J)=>`<button class="mu-op" data-a="${ue}" data-v="${Ee}">${J}</button>`;v("pausa",`<h1>Pausa</h1><p><small>El juego sigue corriendo para tu cuadrilla.</small></p>
      ${Q("cerrar","","\u25B6 Continuar")}${be?.fase==="fin"?Q("reporte","","\u{1F3C1} Ver el reporte del trabajo"):""}
      <h2>Sonido</h2>${Me("musica","M\xFAsica",Math.round(V.musica*10))}${Me("efectos","Efectos",Math.round(V.efectos*10))}
      <h2>Controles</h2>${Me("sensibilidad","Sensibilidad de la c\xE1mara",V.sensibilidad.toFixed(1))}${j("invertir","Invertir el eje vertical",V.invertir)}
      <p><small>${at(Ts[h].todo)}</small></p>
      <h2>Imagen</h2>${Me("resolucion","Resoluci\xF3n","\xD7"+V.resolucion.toFixed(2))}${j("diag","Panel de medidas",V.diag)}
      <h2>Desarrollo</h2>${j("dev","Opciones de desarrollador",V.dev)}
      ${V.dev?`<p><small>Cambian el trabajo de toda la sala (las propone el anfitri\xF3n). \xDAsalas para probar y para reportar fallos.</small></p>
        ${Q("dev","reporte","\u{1F4CB} Copiar reporte del estado (para enviar a Claude)")}
        ${Q("dev","paso","\u23ED Completar el paso que toca")}${Q("dev","todo","\u23E9 Terminar el trabajo")}${Q("dev","reiniciar","\u21BA Reiniciar el trabajo")}
        ${Me("tiempo","Velocidad del tiempo","\xD7"+V.tiempo)}${j("volar","Volar (sin colisiones, m\xE1s r\xE1pido)",V.volar)}${j("colisiones","Mostrar colisiones",V.colisiones)}<button class="mu-op" data-a="ajuste" data-v="lluvia:0">\u{1F327} Lluvia: ${V.lluvia}</button>
        <h2>Ir a</h2><div class="mu-fila">${ce.map(([ue,Ee])=>Q("ir",ue,at(Ee))).join("")}</div>`:""}`,{cancela:!0})}return{pausa:Se,get origen(){return h},get abierto(){return d},get paso(){return u},get nombre(){return _},sala:C,decision:I,fallo:N,radio:D,mapa:R,fin:U,cerrar:E,tablero:F,ocultarTablero:H,avisar:$,etiquetas:te,navegar:le}}var pc=60/116/2,Ty=.25,wu=a=>440*2**((a-69)/12),wy=[[48,52,55],[45,48,52],[41,45,48],[43,47,50]],bm=[[72,0,76,79,0,76,74,72,69,0,72,76,0,74,72,69,65,0,69,72,0,74,72,69,67,71,74,0,79,77,74,71],[79,0,79,77,76,0,74,76,72,0,0,76,74,72,69,0,77,0,76,74,72,0,69,72,74,0,71,72,74,76,77,79],[76,76,0,79,0,76,72,0,81,0,79,76,72,0,76,0,77,0,81,0,79,77,76,72,74,0,79,0,77,76,74,71]];function xm(){let a=null,e=null,t=1,n=.5,i=0,r=0,s=null,o=null;function l(){if(xf(),!a)try{a=new(window.AudioContext||window.webkitAudioContext),e=a.createGain(),e.gain.value=n*.22,e.connect(a.destination),s=a.createOscillator(),s.type="sawtooth",s.frequency.value=40;let h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=420,o=a.createGain(),o.gain.value=0,s.connect(h).connect(o).connect(a.destination),s.start()}catch{a=null;return}a.state!=="running"&&a.resume?.().catch?.(()=>{})}for(let h of["pointerdown","keydown","touchend"])addEventListener(h,l,{passive:!0});let c=new Map;function d(h){if(!c.has(h)){let M=new Float32Array(16),v=new Float32Array(16);for(let E=1;E<16;E++)M[E]=2/(E*Math.PI)*Math.sin(E*Math.PI*h);c.set(h,a.createPeriodicWave(M,v))}return c.get(h)}function p(h,x,M,v,E,S){let T=a.createOscillator(),g=a.createGain();h==="pulso"?T.setPeriodicWave(d(S)):T.type=h,T.frequency.value=x,g.gain.setValueAtTime(E,M),g.gain.exponentialRampToValueAtTime(5e-4,M+v),T.connect(g).connect(e),T.start(M),T.stop(M+v+.02)}function u(h){let x=a.createOscillator(),M=a.createGain();x.frequency.setValueAtTime(140,h),x.frequency.exponentialRampToValueAtTime(45,h+.12),M.gain.setValueAtTime(.9,h),M.gain.exponentialRampToValueAtTime(.001,h+.14),x.connect(M).connect(e),x.start(h),x.stop(h+.16)}let f=null;function b(h,x){f??=(()=>{let S=a.createBuffer(1,a.sampleRate*.06,a.sampleRate),T=S.getChannelData(0);for(let g=0;g<T.length;g++)T[g]=Math.random()*2-1;return S})();let M=a.createBufferSource(),v=a.createBiquadFilter(),E=a.createGain();M.buffer=f,v.type="highpass",v.frequency.value=6e3,E.gain.setValueAtTime(x,h),E.gain.exponentialRampToValueAtTime(.001,h+.05),M.connect(v).connect(E).connect(e),M.start(h)}function _(h,x){let M=Math.floor(h/32)%bm.length,v=h%32,E=wy[Math.floor(v/8)],S=bm[M][v];S&&p("pulso",wu(S),x,pc*1.6,.22,.25),v%2===0&&p("triangle",wu(E[0]-12),x,pc*1.8,.5),p("pulso",wu(E[v%3]+12),x,pc*.5,.05,.125),v%4===0&&u(x),b(x,v%2?.05:.1)}function m(h=null){if(!a||a.state!=="running")return;if(i<a.currentTime&&(i=a.currentTime+.05),n>0)for(;i<a.currentTime+Ty;)_(r++,i),i+=pc;else i=a.currentTime;let x=Math.abs(h??0),M=a.currentTime;s.frequency.setTargetAtTime(38+x*3.2,M,.15),o.gain.setTargetAtTime(h===null?0:(.05+Math.min(.08,x*.004))*t,M,.2)}return{desbloquear:l,cada:m,get activo(){return a?.state==="running"},volumen(h,x){n=h,t=x,vf(x),e&&e.gain.setTargetAtTime(h*.22,a.currentTime,.1)},atenuar(h){e&&e.gain.setTargetAtTime(n*(h?.08:.22),a.currentTime,.3)}}}var vm={musica:.5,efectos:.8,sensibilidad:1,invertir:!1,resolucion:0,diag:!1,dev:!1,tiempo:1,volar:!1,colisiones:!1,lluvia:"auto"},xt=(()=>{try{return{...vm,...JSON.parse(localStorage["mundo:ajustes"]??"{}"),tiempo:1,volar:!1,colisiones:!1,lluvia:"auto"}}catch{return{...vm}}})(),Cy=()=>{try{localStorage["mundo:ajustes"]=JSON.stringify(xt)}catch{}};jl.variante="nuevo";var Pn=new URLSearchParams(location.search),Qa=$p(),Lu=Pn.has("demo"),Rm=(a,e)=>Number.isFinite(parseInt(Pn.get(a)))?parseInt(Pn.get(a)):e,fc=(...a)=>a.every(Number.isFinite),Pm=new Int16Array(await(await fetch(new URL(Wp,import.meta.url))).arrayBuffer()),bn=new Gl({antialias:Qa.antialias,powerPreference:"high-performance"}),Ca=Qa.pixelRatio;bn.setPixelRatio(Ca);bn.setSize(innerWidth,innerHeight);bn.toneMapping=ts;bn.toneMappingExposure=1.05;bn.shadowMap.enabled=!0;bn.shadowMap.autoUpdate=!1;document.body.append(bn.domElement);var un=new Fr;un.background=new ke(10997738);un.fog=new Nr(11850728,220,4200);var cn=new Qt(62,innerWidth/innerHeight,.2,7e3);un.add(new Jr(14084607,7043669,1.15));var Qn=new Kr(16773590,2.7),Ry=new O(.45,.78,.32).normalize();Qn.castShadow=!0;Qn.shadow.mapSize.setScalar(Qa.sombra);Object.assign(Qn.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:260});Qn.shadow.bias=-6e-4;Qn.shadow.normalBias=.04;un.add(Qn,Qn.target);addEventListener("resize",()=>{cn.aspect=innerWidth/innerHeight,cn.updateProjectionMatrix(),bn.setSize(innerWidth,innerHeight)});var an=Xp(Xd.eje),Nt=Kp(Xd,an),br=Object.entries(gs).map(([a,e])=>{let[t,n]=Jd(fi,e.lat,e.lon);return{k:a,n:e.n,x:t,z:n,r:e.r}}),vi=Object.fromEntries(br.map(a=>[a.k,a])),xn=ef(Pm,fi,an,br.filter(a=>a.r>0),of.map(a=>({...a,x:vi[a.k].x,z:vi[a.k].z}))),mc=a=>{let e=an.en(an.largo,a);return[e.x,e.z]},ea=tf(sf.map(a=>({n:a.n,y0:a.p[0][0]==="@"?0:void 0,puntos:a.p.flatMap(e=>e==="@oeste"?[mc(-Nt.BORDE),mc(-Nt.BORDE-60)]:e==="@este"?[mc(Nt.BORDE),mc(Nt.BORDE+60)]:[typeof e=="string"?[vi[e].x,vi[e].z]:Jd(fi,e[0],e[1])])})),xn.alturaBase,xn.MAR,br.filter(a=>a.r>0)),Im=nf(ea),Dm=af(xn,ea,fi),Py=lf(Pm,fi,ea),Is=df(br,xn,ea),Lm=hf(ea);xn.listo(ea,(a,e)=>{Im.rehacer(a,e,420),Dm.rehacer(a,e),Is.actualizar(a,e)});var gc={},Nm=(a,e)=>Math.abs(a)<320&&Math.abs(e)<360&&(an.aVia(a,e,gc),Math.abs(gc.a)<=Nt.BORDE&&gc.d>=Nt.D0&&gc.d<=Nt.D1),ei=(a,e)=>Nm(a,e)?Nt.altura(a,e):Math.max(xn.altura(a,e),xn.MAR-1),Ds=Cf(an,Nt,Rm("autos",20)),Nu=Yp(an,Nt.cajas,Nt.circulos,{d0:-1e9,d1:1e9,a:1e9}),nn=Of(un,ei),Rs=Bf(96),$t=hm({via:an,barrio:Nt}),Ze=rf(ei,Nt.estacionado),fr=Tf({escena:un,carreteras:ea,terreno:xn,meta:fi}),Iy=new ke(10997738),_m=new ke(8293529),Dy=new ke(11850728);un.add(xn.grupo,Im.malla,Dm.grupo,Is.grupo,Lm,Nt.grupo,Ds.grupo,Rs.malla,$t.grupo,Ze.grupo);var ym=[11879996,3960757,5216859,9068464,13666862,4869975],Ly=Array.from({length:Rm("gente",5)},(a,e)=>({id:"p"+e,d:30+e*83%(an.largo-60),a:e%2?4.4:-4.3,s:e%2?1:-1,v:1.15+e%3*.15,op:{camisa:ym[e%ym.length],uniforme:!1}})),Cu={},Ot=new O,Fu={dist:0},Uu=a=>({camisa:Mt[a].camisa,uniforme:!0,arnes:a==="liniero"}),fa=null;function Ou(a){fa&&un.remove(fa.raiz),fa=du(a?{camisa:Mt[a].camisa}:{}),fa.equipar("casco"),a==="liniero"&&fa.equipar("arnes"),un.add(fa.raiz)}Ou(null);var Sm=an.en(Nt.inicio.d,Nt.inicio.a),oe={x:Sm.x,z:Sm.z,y:.15,vx:0,vz:0,rumbo:Math.PI,fase:0,guinada:Math.PI,cabeceo:-.12,dist:4.2,primera:!1,d:0,a:0},Mc=Gf(),_c=zf(bn.domElement,Mc),Fm=Hf(Mc,Pn.has("diag")||xt.diag);Pn.has("dev")&&(xt.dev=!0);var yc=xm(),Um=Object.assign(document.createElement("div"),{className:"mu-chip",textContent:"\u{1F507} Toca la pantalla o pulsa una tecla para activar el sonido"});Mc.append(Um);xt.resolucion||(xt.resolucion=Ca);function Om(){yc.volumen(xt.musica,xt.efectos),_c.mirada.sensibilidad=xt.sensibilidad,_c.mirada.invertir=xt.invertir,Ca=xt.resolucion,bn.setPixelRatio(Ca),Fm.mostrar(xt.diag||Pn.has("diag")),Hm.visible=xt.colisiones}var hn=(()=>{try{return localStorage["mundo:id"]??=Math.random().toString(36).slice(2,10)}catch{return Math.random().toString(36).slice(2,10)}})(),gr=(Pn.get("sala")||"").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,12);gr||(gr=Array.from({length:4},()=>"abcdefghjkmnpqrstuvwxyz"[Math.floor(Math.random()*23)]).join(""),Pn.set("sala",gr),history.replaceState(null,"","?"+Pn));var Ny=`${location.origin}${location.pathname}?sala=${gr}`,Ps=null,Bu=Pn.has("sinred"),Mm=0,ti=()=>Ve.E.jugadores[hn]?.rol??null,lt=gm(Mc,{nombre:a=>{let e=Ve.E.jugadores[hn];e&&e.nombre!==(a||"Jugador")&&Ve.proponer({t:"entra",nombre:a})},rol:a=>{let e=Ve.E.jugadores[hn];Ps=e?.rol===a?null:a,e||Ve.proponer({t:"entra",nombre:lt.nombre}),Ve.proponer({t:"rol",rol:Ps})},modo:a=>Ve.proponer({t:"modo",modo:a}),trabajo:a=>Ve.proponer({t:"trabajo",trabajo:a}),empezar:()=>Ve.proponer({t:"empezar"}),unirse:a=>{location.search="?sala="+encodeURIComponent(a.toLowerCase())},intento:(a,e)=>Ve.proponer({t:"intento",paso:a,opcion:e}),reiniciar:()=>Ve.proponer({t:"reiniciar"}),ajuste:(a,e)=>{let t={musica:[0,1,.1],efectos:[0,1,.1],sensibilidad:[.3,3,.1],resolucion:[.5,2,.25],tiempo:[1,8,0]};if(a==="lluvia")xt.lluvia={auto:"s\xED",s\u00ED:"no",no:"auto"}[xt.lluvia];else if(a==="tiempo")xt.tiempo=e>0?Math.min(8,xt.tiempo*2):Math.max(1,xt.tiempo/2);else if(t[a]){let[n,i,r]=t[a];xt[a]=Math.round(Math.max(n,Math.min(i,xt[a]+e*r))*100)/100}else a in xt&&(xt[a]=!xt[a]);Cy(),Om(),lt.pausa(xt,Hu,Ve.E),ft.clic()},dev:(a,e)=>{if(a==="reporte"){let t=JSON.stringify({fecha:new Date().toISOString(),info:(({texto:n,...i})=>i)(ku()),estado:Ve.E,huella:Ve.huella,eventos:Ve.E.n,entrada:Ka,navegador:navigator.userAgent,pantalla:[innerWidth,innerHeight,devicePixelRatio]},null,1);navigator.clipboard?.writeText(t).then(()=>{e.textContent="\u{1F4CB} Reporte copiado \u2713 (p\xE9galo en el chat)"},()=>{console.log(t),e.textContent="\u{1F4CB} No se pudo copiar: est\xE1 en la consola"});return}if(!Ve.anfitrion()){lt.avisar("Solo el anfitri\xF3n de la sala puede cambiar el trabajo","falta");return}if(a==="reiniciar")Ve.proponer({t:"reiniciar",dev:!0});else if(Ve.E.fase==="trabajo")for(let t=0;t<(a==="todo"?40:1)&&Ve.E.fase==="trabajo";t++){let n=xu(Ve.E);if(!n)break;Ve.proponer(n.auto?{t:"auto",paso:n.id}:{t:"intento",paso:n.id,opcion:0,dev:!0})}lt.cerrar()},reporte:()=>lt.fin(Ve.E),ir:a=>{let e=a==="poste"?$t.zonas.poste:a==="pickup"?Ze.local(2.2,0,0,new O):vi[a];e&&(oe.x=e.x+(vi[a]?12:0),oe.z=e.z,oe.vx=oe.vz=0)},radio:a=>{dn?.fiable({t:"radio",i:a}),Bm(a,hn)}});function Fy(a,e){Number.isInteger(a.n)&&Ve.latido(a.n,a.h,e);let t=Ve.E,n=t.jugadores[e]?.rol;if(n?fc(a.x,a.z,a.r)&&Math.abs(a.x)<5e3&&Math.abs(a.z)<5e3&&nn.fijar("j:"+e,a.x,a.z,a.r,Uu(n),fc(a.y)?Math.max(-80,Math.min(300,a.y)):void 0,a.o):nn.quitar("j:"+e),Array.isArray(a.c)&&e===t.pickup.chofer&&fc(...a.c.slice(0,4))&&Math.abs(a.c[0])<5e3&&Math.abs(a.c[1])<5e3&&Ze.remoto(a.c[0],a.c[1],a.c[2],a.c[3]),Array.isArray(a.b)&&e===Ve.idAnfitrion())for(let i of a.b.slice(0,8))Array.isArray(i)&&Object.hasOwn(Mt,i[0])&&fc(i[1],i[2],i[3],i[4])&&!Gn(t,i[0])&&nn.fijar("b:"+i[0],i[1],i[2],i[4],Uu(i[0]),Math.max(-80,Math.min(300,i[3])),i[5])}function Bm(a,e){let t=Ve.E.jugadores[e],n=tn(Ve.E).frases[a];!t||!n||(ft.alerta(),lt.avisar(`\u{1F4FB} <b>${at(t.rol?Mt[t.rol].corto:"Sin rol")}</b> (${at(t.nombre)}): ${at(n)}`,"radio"))}var dn=Pn.has("sinred")?null:jf({sala:gr,id:hn,alMensaje:(a,e)=>{a?.t==="p"?Fy(a,e):a?.t==="radio"?Bm(a.i,e):Ve.recibir(a,e)},alPar:(a,e)=>{e?Ve.pedir():(nn.quitar("j:"+a),Ve.anfitrion()&&Ve.proponer({t:"sale",id:a}))}}),Ve=cm({id:hn,red:dn,alEvento:Uy}),mr=fm({sesion:Ve,obra:$t,resolver:Nu,altura:ei});function Em(){let a=ti();if(!a)return;let e=$t.puesto(a,Ve.E.hechos.llegada?"poste":"pickup");oe.x=e.x,oe.z=e.z,oe.vx=oe.vz=0}function Gu(){let a=Ve.E;Lu||(a.fase!=="fin"&&lt.abierto==="fin"&&lt.cerrar(),a.fase==="sala"||a.fase==="trabajo"&&!ti()?(!lt.abierto||lt.abierto==="sala")&&lt.sala(a,hn,{codigo:gr,enlace:Ny,conectado:Bu,pares:dn?.estado.pares.size??0}):lt.abierto==="sala"&&lt.cerrar())}function Uy(a,e){if(a)if(a.t==="rol")a.id===hn?(Ou(a.rol),a.rol&&e.fase==="trabajo"&&Em()):nn.quitar("j:"+a.id),a.rol&&nn.quitar("b:"+a.rol);else if(a.t==="sale")nn.quitar("j:"+a.id);else if(a.t==="empezar")lt.cerrar(),Em();else if(a.t==="baja"&&a.id===hn||a.t==="aparca"&&xc>=0){let[t,,n]=Sc[xc]??Sc[0];Ze.local(Math.sign(t)*1.75,0,n,Ot),oe.x=Ot.x,oe.z=Ot.z,xc=-1}else a.t==="hecho"?(lt.avisar(`\u2713 <b>${at(Mt[a.rol]?.corto)}</b>: ${at(Rn[a.paso]?.nombre)}`),(By[a.paso]??ft.ok)(),Rn[a.paso]?.dicta&&lt.avisar(`\u{1F4FB} <b>${at(Mt[a.rol]?.corto)}</b>: ${at(Rn[a.paso].dicta)}`,"radio",12),e.fase==="fin"&&setTimeout(ft.logro,600),(e.fase==="fin"||sm(e,a.paso))&&ti()==="liniero"&&(oe.x=$t.zonas.poste.x,oe.z=$t.zonas.poste.z,oe.y=ei(oe.x,oe.z)),lt.paso?.id===a.paso&&lt.cerrar()):a.t==="falta"&&(ft.error(),lt.avisar(`\u26A0 <b>${at(Mt[a.rol]?.corto)}</b>: ${at(a.texto)}<small>${at(a.ref)}</small>`,"falta",9),lt.fallo(a,e));else{for(let t of[...nn.mapa.keys()])/^[jb]:/.test(t)&&nn.quitar(t);Ps&&e.jugadores[hn]?.rol!==Ps&&(e.jugadores[hn]||Ve.proponer({t:"entra",nombre:lt.nombre}),Ve.proponer({t:"rol",rol:Ps})),Ou(ti())}Gu()}var Am=new Qr,ws=new O(1e9,0,0),hr=[],Cs=new Proxy({},{get:(a,e)=>Ts[e]?.accion??"E"}),Oy={mesa:"la mesa de empalme",bobina:"la bobina, junto a P04,",calle:"el cruce de la calle",pickup:"el pick-up",poste:"el poste"},By={e_senal:ft.cono,e_bajar:ft.cuerda,e_fusion:ft.clip,e_refusion:ft.clip,e_cierre:ft.metal,e_fijar:ft.clip,t_conos:ft.cono,t_guia:ft.cuerda,t_cruzar:ft.cuerda,t_polea:ft.metal,t_tension:ft.cuerda,t_preformado:ft.clip,t_subir:ft.clip,perimetro:ft.cono,cuerda_extension:ft.cuerda,tensar:ft.cuerda,amarre_medio:ft.cuerda,colocar:ft.metal,tomar:ft.metal,carrito:ft.clip,faja:ft.clip,linea_vida:ft.clip,llegada:ft.metal},Hu=[["pickup","El pick-up"],["poste","El poste de trabajo"],...["cartago","limon","liberia","fortuna","puntarenas","sanisidro","penasblancas","canoas"].map(a=>[a,gs[a].n.split(" \xB7 ")[0]])],Tm=0,xc=-1,Sc=[[-.38,0,.62],[.38,0,-.2],[-.38,0,-.2]],bc=0,Ru=0,Pu=0,wm=0,zu=0,zm=0,Ka="",Cm="",ur=-1,vc="",Iu=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a)),zy=a=>{let e=Gn(Ve.E,a);return nn.mapa.get(e?"j:"+e:"b:"+a)},pr=a=>a===ti()?oe:Ve.anfitrion()&&mr.B.get(a)||zy(a),Du=a=>Math.hypot(oe.x-$t.zonas[a].x,oe.z-$t.zonas[a].z);function Gy(){let a=br[0],e=1/0;for(let n of br){let i=Math.hypot(oe.x-n.x,oe.z-n.z);i<e&&(e=i,a=n)}return(ea.cerca(oe.x,oe.z,Fu).dist<9?ea.rutas[Fu.ruta].n+" \xB7 ":"")+(e<Math.max(90,a.r+40)?a.n:`${a.n} a ${e<1e3?Math.round(e/10)*10+" m":(e/1e3).toFixed(1).replace(".",",")+" km"}`)}function Hy(a){let e=[{x:oe.x,z:oe.z,color:"#FFD627",rumbo:oe.rumbo},{x:Ze.st.x,z:Ze.st.z,color:"#fff"}];for(let t in Mt){let n=t!==ti()&&pr(t);n&&e.push({x:n.x,z:n.z,color:"#"+Mt[t].camisa.toString(16).padStart(6,"0")})}return e}xn.cada(oe.x,oe.z,!0);document.getElementById("cargando")?.remove();function Gm(){requestAnimationFrame(Gm);let a=Math.min(.05,Am.getDelta())*xt.tiempo,e=Am.elapsedTime,t=performance.now(),n=_c.leer(a);Ka=n.origen,Ve.cada();let i=Ve.E,r=ti(),s=!!lt.abierto,o=i.pickup,l=o.chofer===hn,c=o.pasajeros.indexOf(hn),d=l||c>=0;if(lt.navegar(n),s?((n.mapa&&lt.abierto==="mapa"||n.pausa&&lt.abierto==="pausa")&&lt.cerrar(),n.mx=n.mz=n.gx=n.gy=0,n.accion=n.vista=!1,i.fase==="sala"&&(oe.guinada+=a*.05)):n.pausa?lt.pausa(xt,Hu,Ve.E):n.radio&&i.fase==="trabajo"&&r?lt.radio(i):n.mapa&&i.fase!=="sala"&&lt.mapa(D=>Py.dibujar(D,Hy(i))),l){let D=Nm(Ze.st.x,Ze.st.z)||ea.cerca(Ze.st.x,Ze.st.z,Fu).dist<5;Ze.conducir(a,n,D,xn.limites),Nu(Ze.st,1.3),Is.empujar(Ze.st,1.4)}else o.chofer?Ze.seguir(a):o.x===null?Ze.fijar(Nt.estacionado.x,Nt.estacionado.z,Nt.estacionado.rumbo):Ze.fijar(o.x,o.z,o.r);Ze.asentar(),n.vista&&(oe.primera=!oe.primera),oe.guinada-=n.gx,oe.cabeceo=Math.max(oe.primera?-1.3:-1.05,Math.min(oe.primera?1.3:.55,oe.cabeceo+n.gy)),l&&!n.gx&&Math.abs(Ze.st.v)>.5&&(oe.guinada+=Iu(oe.guinada,Ze.st.rumbo+Math.PI)*Math.min(1,a*2.5));let p=Math.sin(oe.guinada),u=Math.cos(oe.guinada),f=n.correr?3.9:1.7,b=1-Math.exp(-a*10),_=$t.cargando(i)&&/^auxiliar/.test(r??""),m=_?"c":"i",h=0;if(d)Ze.local(...l?[0,0,0]:Sc[c],Ot),oe.x=Ot.x,oe.z=Ot.z,oe.y=Ze.st.y,oe.vx=oe.vz=0,oe.rumbo=Ze.st.rumbo,m="o",!l&&Math.abs(Ze.st.v)>.5&&!n.gx&&(oe.guinada+=Iu(oe.guinada,Ze.st.rumbo+Math.PI)*Math.min(1,a*2.5)),xc=l?-1:c;else if(r==="liniero"&&Za(i)&&i.fase==="trabajo"){let D=$t.puestoLiniero();oe.x=D.x,oe.z=D.z,oe.y=D.y,oe.vx=oe.vz=0,oe.rumbo=$t.rumbo,oe.fase=D.fase,m=D.pose}else{let D=_?Math.min(f,1.7):xt.volar?f*6:f,R=xn.limites;oe.vx+=((u*n.mx-p*n.mz)*D-oe.vx)*b,oe.vz+=((-p*n.mx-u*n.mz)*D-oe.vz)*b,oe.x=Math.max(R.x0,Math.min(R.x1,oe.x+oe.vx*a)),oe.z=Math.max(R.z0,Math.min(R.z1,oe.z+oe.vz*a)),xt.volar||(Nu(oe,.32),Ze.empujar(oe,.32),Is.empujar(oe,.32)),$t.restringir(i,r,oe,pr),oe.y+=(ei(oe.x,oe.z)-oe.y)*Math.min(1,a*14),h=Math.hypot(oe.vx,oe.vz),oe.primera?oe.rumbo=Math.atan2(-p,-u):h>.3&&(oe.rumbo+=Iu(oe.rumbo,Math.atan2(oe.vx,oe.vz))*Math.min(1,a*12)),oe.fase+=h*a*(n.correr?3.1:4.19),Math.floor(oe.fase/Math.PI)!==Tm&&(Tm=Math.floor(oe.fase/Math.PI),h>.4&&ft.paso())}an.aVia(oe.x,oe.z,oe),fa.raiz.position.set(oe.x,oe.y,oe.z),fa.raiz.rotation.y=oe.rumbo,fa.pose({tipo:cu[m]??(h>.25?"caminar":"idle"),fase:oe.fase,t:e,dt:a}),oe.dist+=((oe.primera?0:d?8.5:4.2)-oe.dist)*Math.min(1,a*9);let x=Math.cos(oe.cabeceo),M=(d?0:.45)*Math.min(1,oe.dist);if(d){let[D,,R]=l?[.38,0,.62]:Sc[c];Ze.local(oe.primera?D:0,oe.primera?1.42:2,oe.primera?R:0,Ot)}else Ot.set(oe.x,oe.y+1.62,oe.z);cn.rotation.set(oe.cabeceo,oe.guinada,0,"YXZ"),cn.position.set(Ot.x+p*x*oe.dist+u*M,Ot.y-Math.sin(oe.cabeceo)*oe.dist,Ot.z+u*x*oe.dist-p*M),cn.position.y=Math.max(cn.position.y,ei(cn.position.x,cn.position.z)+.4),cn.updateMatrixWorld(),fa.raiz.visible=oe.dist>.7&&!d,xn.cada(oe.x,oe.z);for(let D of Ly)D.d+=D.s*D.v*a,D.d>an.largo-8?D.s=-1:D.d<8&&(D.s=1),an.en(D.d,D.a,Cu),nn.fijar(D.id,Cu.x,Cu.z,void 0,D.op);mr.cada(a,i,pr);for(let D of mr.B.values())if(Ve.anfitrion())nn.fijar("b:"+D.rol,D.x,D.z,D.rumbo,Uu(D.rol),D.y,D.pose);else{let R=nn.mapa.get("b:"+D.rol);R&&(D.x=R.x,D.z=R.z,D.y=R.y,D.rumbo=R.rumbo)}nn.cada(a,e,cn),hr.length=0,hr.push(oe);for(let D of nn.mapa.values())an.aVia(D.x,D.z,D),hr.push(D);Ds.cada(a,hr);let v=fr.cada(a,cn,oe.x,oe.z,[oe,Ze.st],xt.lluvia==="auto"?null:xt.lluvia==="s\xED"?1:0),E=Math.max(v.lluvia*.8,v.niebla);un.fog.far=4200-3700*E,un.fog.near=220-180*E,un.background.copy(Iy).lerp(_m,E),un.fog.color.copy(Dy).lerp(_m,E),Qn.intensity=2.7-1.6*v.lluvia,Ve.anfitrion()&&$t.cargando(i)&&$t.llego(pr)&&Ve.proponer({t:"auto",paso:"llegada"}),$t.cada(a,e,i,pr,Ze);let S="",T=null,g=!1,A=null;if(c>=0)S=`De pasajero \xB7 ${Math.round(Math.abs(Ze.st.v)*3.6)} km/h`,T=Math.abs(Ze.st.v)<2?`${Cs[Ka]} \xB7 Bajar del pick-up`:null,n.accion&&T&&Ve.proponer({t:"baja"});else if(l)S=`Al volante \xB7 ${Math.round(Math.abs(Ze.st.v)*3.6)} km/h`,T=Math.abs(Ze.st.v)<2?`${Cs[Ka]??"E"} \xB7 Bajar del pick-up`:null,n.accion&&T&&(Ve.proponer({t:"aparca",x:+Ze.st.x.toFixed(2),z:+Ze.st.z.toFixed(2),r:+Ze.st.rumbo.toFixed(3)}),Ze.local(1.75,0,.5,Ot),oe.x=Ot.x,oe.z=Ot.z);else if(i.fase==="trabajo"&&r){let D=H=>H.lugar==="arriba"?r==="liniero"&&$t.subida>=1:Du(H.lugar)<4.2,R=cr(i,r),U=R.find(H=>!H.bloqueo),F=R.find(H=>!H.bloqueo&&D(H.paso))??R.find(H=>D(H.paso));if(_)S=`Lleva la escalera al poste con tu compa\xF1ero \xB7 ${Math.round(Du("poste"))} m`,A="poste";else if(U){let H=D(U.paso)||U.paso.lugar==="arriba";S=`Tu tarea: ${U.paso.nombre}${H?"":` \xB7 ${Oy[U.paso.lugar]} est\xE1 a ${Math.round(Du(U.paso.lugar))} m`}`,A=H?null:U.paso.lugar}else{let H=xu(i);S=H?`Espera: ${Mt[H.rol].corto} \u2192 ${H.nombre}`:"Trabajo terminado"}F&&!s&&(F.bloqueo&&i.modo==="aprendiz"?(T=`\u{1F512} Antes: ${F.bloqueo.nombre} (${Mt[F.bloqueo.rol].corto})`,g=!0):T=`${Cs[Ka]??"E"} \xB7 ${F.paso.accion}`,n.accion&&(g?lt.avisar(`\u{1F512} Primero: <b>${at(F.bloqueo.nombre)}</b> (${at(Mt[F.bloqueo.rol].corto)})`,"",3):F.paso.opciones&&!F.bloqueo?lt.decision(F.paso,i):Ve.proponer({t:"intento",paso:F.paso.id})))}else i.fase==="trabajo"?S="Observando: los compa\xF1eros autom\xE1ticos hacen el trabajo":i.fase==="fin"&&(S="Trabajo terminado");!d&&!T&&!s&&r&&o.chofer&&o.pasajeros.length<3&&Math.hypot(oe.x-Ze.st.x,oe.z-Ze.st.z)<3.6&&Math.abs(Ze.st.v)<2&&(T=`${Cs[Ka]} \xB7 Subir al pick-up`,n.accion&&Ve.proponer({t:"sube"})),!d&&!T&&!s&&r&&vu(i)&&!o.chofer&&!(r==="liniero"&&Za(i)&&i.fase==="trabajo")&&!_&&Math.hypot(oe.x-Ze.st.x,oe.z-Ze.st.z)<3.6&&(T=`${Cs[Ka]??"E"} \xB7 Manejar el pick-up`,n.accion&&Ve.proponer({t:"conduce"})),$t.marcar(A);let C=`${i.n}|${S}|${T}|${r}|${vc}`;i.fase==="sala"?lt.ocultarTablero():C!==Cm&&(Cm=C,lt.tablero(i,r,S,T,g,vc)),i.fase==="fin"?(ur<0&&(ur=e),ur!==null&&e-ur>3.5&&!lt.abierto&&!Lu&&(lt.fin(i),ur=null)):ur=-1;let I=[];if(i.fase!=="sala")for(let D in Mt){if(D===r)continue;let R=pr(D);if(!R)continue;Ot.set(R.x,(R.y??.15)+2.02,R.z);let U=Ot.distanceTo(cn.position);Ot.project(cn);let F=Gn(i,D);I.push({visible:!s&&Ot.z<1&&U<45&&Math.abs(Ot.x)<1.05&&!(F&&F===o.chofer),x:(Ot.x+1)/2*innerWidth,y:(1-Ot.y)/2*innerHeight,texto:`${Mt[D].icono} ${Mt[D].corto}${F?" \xB7 "+i.jugadores[F].nombre:""}`})}lt.etiquetas(I),yc.cada(l||o.chofer?Ze.st.v:null),Um.hidden=yc.activo,l&&n.bocina&&ft.bocina();let N=0;for(let D of hr)(D!==oe||!d)&&Rs.fijar(N++,D.x,ei(D.x,D.z),D.z,.62);for(let D of Ds.todos)Rs.fijar(N++,D.x,0,D.z,2.3,4.9,D.rumbo);if(Rs.fijar(N++,Ze.st.x,Ze.st.y,Ze.st.z,2.4,5.6,Ze.st.rumbo),Rs.listo(N),Math.hypot(oe.x-ws.x,oe.z-ws.z)>14&&(ws.set(oe.x,oe.y,oe.z),Qn.target.position.copy(ws),Qn.position.copy(ws).addScaledVector(Ry,120),Qn.target.updateMatrixWorld(),bn.shadowMap.needsUpdate=!0),dn&&e-wm>.1){wm=e;let D={t:"p",x:+oe.x.toFixed(2),z:+oe.z.toFixed(2),y:+oe.y.toFixed(2),r:+oe.rumbo.toFixed(2),o:m};l&&(D.c=[+Ze.st.x.toFixed(2),+Ze.st.z.toFixed(2),+Ze.st.rumbo.toFixed(3),+Ze.st.v.toFixed(1)]),Ve.anfitrion()&&(D.n=i.n,D.h=Ve.huella,mr.B.size&&(D.b=[...mr.B.values()].map(R=>[R.rol,+R.x.toFixed(2),+R.z.toFixed(2),+R.y.toFixed(2),+R.rumbo.toFixed(2),R.pose]))),(r||Ve.anfitrion())&&dn.enviar(D)}if(bn.render(un,cn),Ru+=performance.now()-t,bc++,e-Pu>=1){zu=bc/(e-Pu),zm=Ru/bc,bc=0,Ru=0,Pu=e,zu<27&&Ca>Qa.minPixelRatio&&(Ca=Math.max(Qa.minPixelRatio,Ca-.15),bn.setPixelRatio(Ca)),vc=Gy(),Fm.escribir(ku().texto),dn&&!dn.estado.presencia&&e>6&&Ve.jugarSolo();let D=!dn||dn.estado.presencia||e>6,R=dn?.estado.pares.size??0;(D!==Bu||R!==Mm)&&(Bu=D,Mm=R,Gu()),Lu&&i.fase==="sala"&&Ve.anfitrion()&&(Pn.has("trabajo")&&Ve.proponer({t:"trabajo",trabajo:Pn.get("trabajo")}),Ve.proponer({t:"empezar",demo:!0}))}}function ku(){let a=bn.info.render,e=dn?[...dn.estado.pares.values()]:[],t=e.filter(r=>r.directo),n=Ve.E,i={fps:Math.round(zu),ms:+zm.toFixed(1),llamadas:a.calls,triangulos:a.triangles,pixeles:+Ca.toFixed(2),entrada:Ka,vista:oe.primera?"1.\xAA persona":"3.\xAA persona",x:oe.x,z:oe.z,y:oe.y,d:oe.d,a:oe.a,donde:vc,red:dn?.estado.ws??"apagada",rtt:dn?.estado.rtt,pares:e.length,directos:t.length,personas:hr.length,autos:Ds.todos.length,fase:n.fase,rol:ti(),hechos:Object.keys(n.hechos).length,trabajo:n.trabajo,pasos:Ja(n).length,seguridad:dr(n),faltas:n.eventos.filter(r=>r.tipo==="falta").length,anfitrion:Ve.anfitrion(),panel:lt.abierto,clima:`${fr.clima.region}${fr.clima.lluvia>.1?", lloviendo":""}${fr.clima.niebla>.2?", neblina":""}`,autosRuta:fr.autos.filter(r=>r.vivo).length,chofer:n.pickup.chofer===hn,pasajero:n.pickup.pasajeros.includes(hn),velocidad:Ze.st.v};return i.texto=["Cuadrilla Segura \xB7 Mundo",`${i.fps} cuadros/s \xB7 ${i.ms} ms por cuadro (CPU)`,`${i.llamadas} llamadas de dibujo \xB7 ${Math.round(i.triangulos/1e3)} mil tri\xE1ngulos`,`resoluci\xF3n \xD7${i.pixeles} \xB7 sombra ${Qa.sombra} \xB7 ${Qa.movil?Qa.bajo?"tel\xE9fono modesto":"tel\xE9fono":"escritorio"}`,`${i.personas} personas \xB7 ${i.autos} autos \xB7 ${i.vista} \xB7 ${i.entrada}`,`red: ${i.red}${i.rtt!=null?` \xB7 ida y vuelta ${Math.round(i.rtt)} ms`:""}${i.anfitrion?" \xB7 anfitri\xF3n":""}`,`otros jugadores: ${i.pares}${i.pares?` (${i.directos} con enlace directo${t[0]?.rtt!=null?`, ${Math.round(t[0].rtt)} ms`:""})`:""}`,`trabajo: ${i.fase} \xB7 ${i.hechos}/${i.pasos} pasos \xB7 seguridad ${i.seguridad}`,`clima: ${i.clima} \xB7 ${i.autosRuta} veh\xEDculos en las rutas`,`\u{1F4CD} ${i.donde} \xB7 ${Math.round(i.x)}, ${Math.round(i.z)} \xB7 altura ${i.y.toFixed(1)} m`].join(`
`),i}var Hm=(()=>{let a=[],e={},t=(r,s)=>(an.en(r,s,e),[e.x,.3,e.z]);for(let r of Nt.cajas){let s=[t(r.d0,r.a0),t(r.d1,r.a0),t(r.d1,r.a1),t(r.d0,r.a1)];for(let o=0;o<4;o++)a.push(...s[o],...s[(o+1)%4])}for(let r of Nt.circulos)for(let s=0;s<8;s++){let o=s*Math.PI/4,l=o+Math.PI/4;a.push(r.x+Math.cos(o)*r.r,.3,r.z+Math.sin(o)*r.r,r.x+Math.cos(l)*r.r,.3,r.z+Math.sin(l)*r.r)}let n=new pt;n.setAttribute("position",new tt(a,3));let i=new Wn(n,new Ln({color:16723285,depthTest:!1}));return i.renderOrder=9,i.visible=!1,un.add(i),i})();Om();document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&!lt.abierto&&Ve.E.fase!=="sala"&&lt.pausa(xt,Hu,Ve.E)});globalThis.__mundo={vida:fr,J:oe,info:ku,ajustes:xt,sonido:yc,colisiones:Hm,pueblos:Is,rotulos:Lm,pendientes:cr,ordenOpciones:uc,red:dn,avatares:nn,entrada:_c,via:an,barrio:Nt,trafico:Ds,obra:$t,bots:mr,ui:lt,terreno:xn,carreteras:ea,pickup:Ze,lugar:vi,altura:ei,camara:cn,CARRIL:Xl,get sesion(){return Ve},get E(){return Ve.E}};Gu();Gm();
