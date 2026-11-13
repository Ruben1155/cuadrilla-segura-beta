var Mh=0,td=1,Eh=2;var Zr=1,Ah=2,$i=3,ka=0,an=1,Ln=2,oa=0,qi=1,nd=2,ad=3,id=4,Th=5;var oi=100,wh=101,Ch=102,Rh=103,Ph=104,Ih=200,Dh=201,Lh=202,Nh=203,rd=204,sd=205,Fh=206,Uh=207,Oh=208,Bh=209,zh=210,Gh=211,Hh=212,kh=213,Vh=214,no=0,ao=1,io=2,Ni=3,ro=4,so=5,oo=6,lo=7,od=0,jh=1,$h=2,$n=0,ld=1,cd=2,dd=3,Kr=4,ud=5,hd=6,pd=7;var fd=300,Va=301,li=302,jo=303,$o=304,Qr=306,Fi=1e3,ta=1001,co=1002,jt=1003,qh=1004;var es=1005;var qt=1006,qo=1007;var ja=1008;var pn=1009,md=1010,gd=1011,Wi=1012,Wo=1013,qn=1014,Nn=1015,Wn=1016,Xo=1017,Yo=1018,Xi=1020,xd=35902,bd=35899,vd=1021,_d=1022,Fn=1023,na=1026,$a=1027,Jo=1028,Zo=1029,qa=1030,Ko=1031;var Qo=1033,ts=33776,ns=33777,as=33778,is=33779,el=35840,tl=35841,nl=35842,al=35843,il=36196,rl=37492,sl=37496,ol=37488,ll=37489,rs=37490,cl=37491,dl=37808,ul=37809,hl=37810,pl=37811,fl=37812,ml=37813,gl=37814,xl=37815,bl=37816,vl=37817,_l=37818,yl=37819,Sl=37820,Ml=37821,El=36492,Al=36494,Tl=36495,wl=36283,Cl=36284,ss=36285,Rl=36286;var Ar=2300,uo=2301,eo=2302,Xc=2303,Yc=2400,Jc=2401,Zc=2402;var Wh=3200;var Pl=0,Xh=1,Sa="",Vt="srgb",Tr="srgb-linear",wr="linear",_t="srgb";var to=7680;var Yh=519,Jh=512,Zh=513,Kh=514,Il=515,Qh=516,ep=517,Dl=518,tp=519,np=35044;var yd="300 es",Vn=2e3,Ui=2001;function Pm(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Im(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Cr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ap(){let a=Cr("canvas");return a.style.display="block",a}var Wu={},Oi=null;function Sd(...a){let e="THREE."+a.shift();Oi?Oi("log",e,...a):console.log(e,...a)}function ip(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Je(...a){a=ip(a);let e="THREE."+a.shift();if(Oi)Oi("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function et(...a){a=ip(a);let e="THREE."+a.shift();if(Oi)Oi("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ii(...a){let e=a.join(" ");e in Wu||(Wu[e]=!0,Je(...a))}function rp(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var sp={[no]:ao,[io]:oo,[ro]:lo,[Ni]:so,[ao]:no,[oo]:io,[lo]:ro,[so]:Ni},aa=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var yc=Math.PI/180,ho=180/Math.PI;function os(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[a&255]+Yt[a>>8&255]+Yt[a>>16&255]+Yt[a>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function lt(a,e,t){return Math.max(e,Math.min(t,a))}function Dm(a,e){return(a%e+e)%e}function Sc(a,e,t){return(1-t)*a+t*e}function mr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $e=class a{static{a.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ia=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],d=n[i+2],p=n[i+3],u=r[s+0],f=r[s+1],x=r[s+2],_=r[s+3];if(p!==_||l!==u||c!==f||d!==x){let m=l*u+c*f+d*x+p*_;m<0&&(u=-u,f=-f,x=-x,_=-_,m=-m);let h=1-o;if(m<.9995){let b=Math.acos(m),M=Math.sin(b);h=Math.sin(h*b)/M,o=Math.sin(o*b)/M,l=l*h+u*o,c=c*h+f*o,d=d*h+x*o,p=p*h+_*o}else{l=l*h+u*o,c=c*h+f*o,d=d*h+x*o,p=p*h+_*o;let b=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=b,c*=b,d*=b,p*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,r,s){let o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],p=r[s],u=r[s+1],f=r[s+2],x=r[s+3];return e[t]=o*x+d*p+l*f-c*u,e[t+1]=l*x+d*u+c*p-o*f,e[t+2]=c*x+d*f+o*u-l*p,e[t+3]=d*x-o*p-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),p=o(r/2),u=l(n/2),f=l(i/2),x=l(r/2);switch(s){case"XYZ":this._x=u*d*p+c*f*x,this._y=c*f*p-u*d*x,this._z=c*d*x+u*f*p,this._w=c*d*p-u*f*x;break;case"YXZ":this._x=u*d*p+c*f*x,this._y=c*f*p-u*d*x,this._z=c*d*x-u*f*p,this._w=c*d*p+u*f*x;break;case"ZXY":this._x=u*d*p-c*f*x,this._y=c*f*p+u*d*x,this._z=c*d*x+u*f*p,this._w=c*d*p-u*f*x;break;case"ZYX":this._x=u*d*p-c*f*x,this._y=c*f*p+u*d*x,this._z=c*d*x-u*f*p,this._w=c*d*p+u*f*x;break;case"YZX":this._x=u*d*p+c*f*x,this._y=c*f*p+u*d*x,this._z=c*d*x-u*f*p,this._w=c*d*p-u*f*x;break;case"XZY":this._x=u*d*p-c*f*x,this._y=c*f*p-u*d*x,this._z=c*d*x+u*f*p,this._w=c*d*p+u*f*x;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(d-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+i*c-r*l,this._y=i*d+s*l+r*o-n*c,this._z=r*d+s*c+n*l-i*o,this._w=s*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class a{static{a.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*n),d=2*(o*t-r*i),p=2*(r*n-s*t);return this.x=t+l*c+s*p-o*d,this.y=n+l*d+o*c-r*p,this.z=i+l*p+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mc=new B,Xu=new ia,nt=class a{static{a.prototype.isMatrix3=!0}constructor(e,t,n,i,r,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c)}set(e,t,n,i,r,s,o,l,c){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],p=n[7],u=n[2],f=n[5],x=n[8],_=i[0],m=i[3],h=i[6],b=i[1],M=i[4],v=i[7],E=i[2],S=i[5],T=i[8];return r[0]=s*_+o*b+l*E,r[3]=s*m+o*M+l*S,r[6]=s*h+o*v+l*T,r[1]=c*_+d*b+p*E,r[4]=c*m+d*M+p*S,r[7]=c*h+d*v+p*T,r[2]=u*_+f*b+x*E,r[5]=u*m+f*M+x*S,r[8]=u*h+f*v+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*r*d+n*o*l+i*r*c-i*s*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*s-o*c,u=o*l-d*r,f=c*r-s*l,x=t*p+n*u+i*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=p*_,e[1]=(i*c-d*n)*_,e[2]=(o*n-i*s)*_,e[3]=u*_,e[4]=(d*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ec=new nt,Yu=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lm(){let a={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===_t&&(i.r=ba(i.r),i.g=ba(i.g),i.b=ba(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===_t&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sa?wr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Tr]:{primaries:e,whitePoint:n,transfer:wr,toXYZ:Yu,fromXYZ:Ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Yu,fromXYZ:Ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),a}var ut=Lm();function ba(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Li(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var vi,po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vi===void 0&&(vi=Cr("canvas")),vi.width=e.width,vi.height=e.height;let i=vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=ba(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ba(t[n]/255)*255):t[n]=ba(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nm=0,Bi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Ac(i[s].image)):r.push(Ac(i[s]))}else r=Ac(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ac(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?po.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var Fm=0,Tc=new B,nn=class a extends aa{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=ta,i=ta,r=qt,s=ja,o=Fn,l=pn,c=a.DEFAULT_ANISOTROPY,d=Sa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=os(),this.name="",this.source=new Bi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fi:e.x=e.x-Math.floor(e.x);break;case ta:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fi:e.y=e.y-Math.floor(e.y);break;case ta:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=fd;nn.DEFAULT_ANISOTROPY=1;var Rt=class a{static{a.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],f=l[5],x=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,E=(h+1)/2,S=(d+u)/4,T=(p+_)/4,g=(x+m)/4;return M>v&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=S/n,r=T/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=g/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=g/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-x)*(m-x)+(p-_)*(p-_)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(p-_)/b,this.z=(u-d)/b,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fo=class extends aa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new nn(i),s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Bi(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends fo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rr=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mo=class extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var yt=class a{static{a.prototype.isMatrix4=!0}constructor(e,t,n,i,r,s,o,l,c,d,p,u,f,x,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c,d,p,u,f,x,_,m)}set(e,t,n,i,r,s,o,l,c,d,p,u,f,x,_,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=r,h[5]=s,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=p,h[14]=u,h[3]=f,h[7]=x,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),s=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=s*d,f=s*p,x=o*d,_=o*p;t[0]=l*d,t[4]=-l*p,t[8]=c,t[1]=f+x*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=x+f*c,t[10]=s*l}else if(e.order==="YXZ"){let u=l*d,f=l*p,x=c*d,_=c*p;t[0]=u+_*o,t[4]=x*o-f,t[8]=s*c,t[1]=s*p,t[5]=s*d,t[9]=-o,t[2]=f*o-x,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){let u=l*d,f=l*p,x=c*d,_=c*p;t[0]=u-_*o,t[4]=-s*p,t[8]=x+f*o,t[1]=f+x*o,t[5]=s*d,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let u=s*d,f=s*p,x=o*d,_=o*p;t[0]=l*d,t[4]=x*c-f,t[8]=u*c+_,t[1]=l*p,t[5]=_*c+u,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let u=s*l,f=s*c,x=o*l,_=o*c;t[0]=l*d,t[4]=_-u*p,t[8]=x*p+f,t[1]=p,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*p+x,t[10]=u-_*p}else if(e.order==="XZY"){let u=s*l,f=s*c,x=o*l,_=o*c;t[0]=l*d,t[4]=-p,t[8]=c*d,t[1]=u*p+_,t[5]=s*d,t[9]=f*p-x,t[2]=x*p-f,t[6]=o*d,t[10]=_*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Om)}lookAt(e,t,n){let i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ia.crossVectors(n,xn),Ia.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ia.crossVectors(n,xn)),Ia.normalize(),Ds.crossVectors(xn,Ia),i[0]=Ia.x,i[4]=Ds.x,i[8]=xn.x,i[1]=Ia.y,i[5]=Ds.y,i[9]=xn.y,i[2]=Ia.z,i[6]=Ds.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],p=n[5],u=n[9],f=n[13],x=n[2],_=n[6],m=n[10],h=n[14],b=n[3],M=n[7],v=n[11],E=n[15],S=i[0],T=i[4],g=i[8],A=i[12],C=i[1],P=i[5],L=i[9],I=i[13],R=i[2],U=i[6],F=i[10],H=i[14],j=i[3],Y=i[7],W=i[11],ae=i[15];return r[0]=s*S+o*C+l*R+c*j,r[4]=s*T+o*P+l*U+c*Y,r[8]=s*g+o*L+l*F+c*W,r[12]=s*A+o*I+l*H+c*ae,r[1]=d*S+p*C+u*R+f*j,r[5]=d*T+p*P+u*U+f*Y,r[9]=d*g+p*L+u*F+f*W,r[13]=d*A+p*I+u*H+f*ae,r[2]=x*S+_*C+m*R+h*j,r[6]=x*T+_*P+m*U+h*Y,r[10]=x*g+_*L+m*F+h*W,r[14]=x*A+_*I+m*H+h*ae,r[3]=b*S+M*C+v*R+E*j,r[7]=b*T+M*P+v*U+E*Y,r[11]=b*g+M*L+v*F+E*W,r[15]=b*A+M*I+v*H+E*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],f=e[14],x=e[3],_=e[7],m=e[11],h=e[15],b=l*f-c*u,M=o*f-c*p,v=o*u-l*p,E=s*f-c*d,S=s*u-l*d,T=s*p-o*d;return t*(_*b-m*M+h*v)-n*(x*b-m*E+h*S)+i*(x*M-_*E+h*T)-r*(x*v-_*S+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],s=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(s*d-o*c)-n*(r*d-o*l)+i*(r*c-s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],f=e[11],x=e[12],_=e[13],m=e[14],h=e[15],b=t*o-n*s,M=t*l-i*s,v=t*c-r*s,E=n*l-i*o,S=n*c-r*o,T=i*c-r*l,g=d*_-p*x,A=d*m-u*x,C=d*h-f*x,P=p*m-u*_,L=p*h-f*_,I=u*h-f*m,R=b*I-M*L+v*P+E*C-S*A+T*g;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return e[0]=(o*I-l*L+c*P)*U,e[1]=(i*L-n*I-r*P)*U,e[2]=(_*T-m*S+h*E)*U,e[3]=(u*S-p*T-f*E)*U,e[4]=(l*C-s*I-c*A)*U,e[5]=(t*I-i*C+r*A)*U,e[6]=(m*v-x*T-h*M)*U,e[7]=(d*T-u*v+f*M)*U,e[8]=(s*L-o*C+c*g)*U,e[9]=(n*C-t*L-r*g)*U,e[10]=(x*S-_*v+h*b)*U,e[11]=(p*v-d*S-f*b)*U,e[12]=(o*A-s*P-l*g)*U,e[13]=(t*P-n*A+i*g)*U,e[14]=(_*M-x*E-m*b)*U,e[15]=(d*E-p*M+u*b)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*s,0,c*l-i*o,d*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,p=o+o,u=r*c,f=r*d,x=r*p,_=s*d,m=s*p,h=o*p,b=l*c,M=l*d,v=l*p,E=n.x,S=n.y,T=n.z;return i[0]=(1-(_+h))*E,i[1]=(f+v)*E,i[2]=(x-M)*E,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(u+h))*S,i[6]=(m+b)*S,i[7]=0,i[8]=(x+M)*T,i[9]=(m-b)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let s=_i.set(i[0],i[1],i[2]).length(),o=_i.set(i[4],i[5],i[6]).length(),l=_i.set(i[8],i[9],i[10]).length();r<0&&(s=-s),zn.copy(this);let c=1/s,d=1/o,p=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=p,zn.elements[9]*=p,zn.elements[10]*=p,t.setFromRotationMatrix(zn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,s,o=Vn,l=!1){let c=this.elements,d=2*r/(t-e),p=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),x,_;if(l)x=r/(s-r),_=s*r/(s-r);else if(o===Vn)x=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===Ui)x=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=Vn,l=!1){let c=this.elements,d=2/(t-e),p=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),x,_;if(l)x=1/(s-r),_=s/(s-r);else if(o===Vn)x=-2/(s-r),_=-(s+r)/(s-r);else if(o===Ui)x=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_i=new B,zn=new yt,Um=new B(0,0,0),Om=new B(1,1,1),Ia=new B,Ds=new B,xn=new B,Zu=new yt,Ku=new ia,va=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],d=i[9],p=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};va.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bm=0,Qu=new B,yi=new ia,pa=new yt,Ls=new B,gr=new B,zm=new B,Gm=new ia,eh=new B(1,0,0),th=new B(0,1,0),nh=new B(0,0,1),ah={type:"added"},Hm={type:"removed"},Si={type:"childadded",child:null},wc={type:"childremoved",child:null},gt=class a extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new B,t=new va,n=new ia,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new nt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ls.copy(e):Ls.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(gr,Ls,this.up):pa.lookAt(Ls,gr,this.up),this.quaternion.setFromRotationMatrix(pa),i&&(pa.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(pa),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),Si.child=e,this.dispatchEvent(Si),Si.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hm),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),p=s(e.shapes),u=s(e.skeletons),f=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=i,n;function s(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new B(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ht=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},km={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(km)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Cc(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Dm(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Cc(s,r,e+1/3),this.g=Cc(s,r,e),this.b=Cc(s,r,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ut.workingToColorSpace(Jt.copy(this),e),Math.round(lt(Jt.r*255,0,255))*65536+Math.round(lt(Jt.g*255,0,255))*256+Math.round(lt(Jt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,i=Jt.g,r=Jt.b,s=Math.max(n,i,r),o=Math.min(n,i,r),l,c,d=(o+s)/2;if(o===s)l=0,c=0;else{let p=s-o;switch(c=d<=.5?p/(s+o):p/(2-s-o),s){case n:l=(i-r)/p+(i<r?6:0);break;case i:l=(r-n)/p+2;break;case r:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Vt){ut.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,i=Jt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+t,Da.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Da),e.getHSL(Ns);let n=Sc(Da.h,Ns.h,t),i=Sc(Da.s,Ns.s,t),r=Sc(Da.l,Ns.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new He;He.NAMES=op;var Ir=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new B,fa=new B,Rc=new B,ma=new B,Mi=new B,Ei=new B,ih=new B,Pc=new B,Ic=new B,Dc=new B,Lc=new Rt,Nc=new Rt,Fc=new Rt,Ua=class a{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gn.subVectors(e,t),i.cross(Gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gn.subVectors(i,t),fa.subVectors(n,t),Rc.subVectors(e,t);let s=Gn.dot(Gn),o=Gn.dot(fa),l=Gn.dot(Rc),c=fa.dot(fa),d=fa.dot(Rc),p=s*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,f=(c*l-o*d)*u,x=(s*d-o*l)*u;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,ma)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ma.x),l.addScaledVector(s,ma.y),l.addScaledVector(o,ma.z),l)}static getInterpolatedAttribute(e,t,n,i,r,s){return Lc.setScalar(0),Nc.setScalar(0),Fc.setScalar(0),Lc.fromBufferAttribute(e,t),Nc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(Lc,r.x),s.addScaledVector(Nc,r.y),s.addScaledVector(Fc,r.z),s}static isFrontFacing(e,t,n,i){return Gn.subVectors(n,t),fa.subVectors(e,t),Gn.cross(fa).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Gn.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,s,o;Mi.subVectors(i,n),Ei.subVectors(r,n),Pc.subVectors(e,n);let l=Mi.dot(Pc),c=Ei.dot(Pc);if(l<=0&&c<=0)return t.copy(n);Ic.subVectors(e,i);let d=Mi.dot(Ic),p=Ei.dot(Ic);if(d>=0&&p<=d)return t.copy(i);let u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(Mi,s);Dc.subVectors(e,r);let f=Mi.dot(Dc),x=Ei.dot(Dc);if(x>=0&&f<=x)return t.copy(r);let _=f*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Ei,o);let m=d*x-f*p;if(m<=0&&p-d>=0&&f-x>=0)return ih.subVectors(r,i),o=(p-d)/(p-d+(f-x)),t.copy(i).addScaledVector(ih,o);let h=1/(m+_+u);return s=_*h,o=u*h,t.copy(n).addScaledVector(Mi,s).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ra=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Hn):Hn.fromBufferAttribute(r,s),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Us.subVectors(this.max,xr),Ai.subVectors(e.a,xr),Ti.subVectors(e.b,xr),wi.subVectors(e.c,xr),La.subVectors(Ti,Ai),Na.subVectors(wi,Ti),ei.subVectors(Ai,wi);let t=[0,-La.z,La.y,0,-Na.z,Na.y,0,-ei.z,ei.y,La.z,0,-La.x,Na.z,0,-Na.x,ei.z,0,-ei.x,-La.y,La.x,0,-Na.y,Na.x,0,-ei.y,ei.x,0];return!Uc(t,Ai,Ti,wi,Us)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Ai,Ti,wi,Us))?!1:(Os.crossVectors(La,Na),t=[Os.x,Os.y,Os.z],Uc(t,Ai,Ti,wi,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ga=[new B,new B,new B,new B,new B,new B,new B,new B],Hn=new B,Fs=new ra,Ai=new B,Ti=new B,wi=new B,La=new B,Na=new B,ei=new B,xr=new B,Us=new B,Os=new B,ti=new B;function Uc(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){ti.fromArray(a,r);let o=i.x*Math.abs(ti.x)+i.y*Math.abs(ti.y)+i.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),d=n.dot(ti);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Bt=new B,Bs=new $e,Vm=0,mt=class extends aa{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=np,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Lr=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Nr=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jm=new ra,br=new B,Oc=new B,_a=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Oc)),this.expandByPoint(br.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$m=0,Rn=new yt,Bc=new gt,Ci=new B,bn=new ra,vr=new ra,kt=new B,pt=class a extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pm(e)?Nr:Lr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(bn.min,vr.min),bn.expandByPoint(kt),kt.addVectors(bn.max,vr.max),bn.expandByPoint(kt)):(bn.expandByPoint(vr.min),bn.expandByPoint(vr.max))}bn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)kt.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),kt.add(Ci)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new B,l[g]=new B;let c=new B,d=new B,p=new B,u=new $e,f=new $e,x=new $e,_=new B,m=new B;function h(g,A,C){c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,A),p.fromBufferAttribute(n,C),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,A),x.fromBufferAttribute(r,C),d.sub(c),p.sub(c),f.sub(u),x.sub(u);let P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(P),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(P),o[g].add(_),o[A].add(_),o[C].add(_),l[g].add(m),l[A].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let g=0,A=b.length;g<A;++g){let C=b[g],P=C.start,L=C.count;for(let I=P,R=P+L;I<R;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new B,v=new B,E=new B,S=new B;function T(g){E.fromBufferAttribute(i,g),S.copy(E);let A=o[g];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),v.crossVectors(S,A);let P=v.dot(l[g])<0?-1:1;s.setXYZW(g,M.x,M.y,M.z,P)}for(let g=0,A=b.length;g<A;++g){let C=b[g],P=C.start,L=C.count;for(let I=P,R=P+L;I<R;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new B,r=new B,s=new B,o=new B,l=new B,c=new B,d=new B,p=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){let x=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),d.subVectors(s,r),p.subVectors(i,r),d.cross(p),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,r),p.subVectors(i,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d),f=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let h=0;h<d;h++)u[x++]=c[f++]}return new mt(u,d,p)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,p=c.length;d<p;d++){let u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let d=i[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],p=r[c];for(let u=0,f=p.length;u<f;u++)d.push(p[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,d=s.length;c<d;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zc=new B,qm=new B,Wm=new nt,kn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=zc.subVectors(n,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wm.getNormalMatrix(e),i=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Xm=0,ya=class extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=os(),this.name="",this.type="Material",this.blending=qi,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let l=r[o];delete l.metadata,s.push(l)}return s}if(t){let r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var xa=new B,Gc=new B,zs=new B,Gs=new B,Fr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,t),xa.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gc.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),Gs.copy(this.origin).sub(Gc);let r=e.distanceTo(t)*.5,s=-this.direction.dot(zs),o=Gs.dot(this.direction),l=-Gs.dot(zs),c=Gs.lengthSq(),d=Math.abs(1-s*s),p,u,f,x;if(d>0)if(p=s*l-o,u=s*o-l,x=r*d,p>=0)if(u>=-x)if(u<=x){let _=1/d;p*=_,u*=_,f=p*(p+s*u+2*o)+u*(s*p+u+2*l)+c}else u=r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-x?(p=Math.max(0,-(-s*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c):u<=x?(p=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(p=Math.max(0,-(s*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c);else u=s>0?-r:r,p=Math.max(0,-(s*u+o)),f=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Gc).addScaledVector(zs,u),f}intersectSphere(e,t){if(e.radius<0)return null;xa.subVectors(e.center,this.origin);let n=xa.dot(this.direction),i=xa.dot(xa)-n*n,r=e.radius*e.radius;if(i>r)return null;let s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l,c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,t,n,i,r){let s=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,p=e.x-s.x,u=e.y-s.y,f=e.z-s.z,x=t.x-s.x,_=t.y-s.y,m=t.z-s.z,h=n.x-s.x,b=n.y-s.y,M=n.z-s.z,v=Math.abs(l),E=Math.abs(c),S=Math.abs(d),T,g,A,C,P,L,I,R,U,F,H,j;if(v>=E&&v>=S?(A=l,L=p,U=x,j=h,l>=0?(T=c,g=d,C=u,P=f,I=_,R=m,F=b,H=M):(T=d,g=c,C=f,P=u,I=m,R=_,F=M,H=b)):E>=S?(A=c,L=u,U=_,j=b,c>=0?(T=d,g=l,C=f,P=p,I=m,R=x,F=M,H=h):(T=l,g=d,C=p,P=f,I=x,R=m,F=h,H=M)):(A=d,L=f,U=m,j=M,d>=0?(T=l,g=c,C=p,P=u,I=x,R=_,F=h,H=b):(T=c,g=l,C=u,P=p,I=_,R=x,F=b,H=h)),A===0)return null;let Y=T/A,W=g/A,ae=1/A,ye=C-Y*L,$=P-W*L,ce=I-Y*U,be=R-W*U,Se=F-Y*j,q=H-W*j,V=Se*be-q*ce,de=ye*q-$*Se,pe=ce*$-be*ye;if(i){if(V<0||de<0||pe<0)return null}else if((V<0||de<0||pe<0)&&(V>0||de>0||pe>0))return null;let fe=V+de+pe;if(fe===0)return null;let O=ae*(V*L+de*U+pe*j);return(fe>0?O<0:O>0)?null:this.at(O/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rh=new yt,ni=new Fr,Hs=new _a,sh=new B,ks=new B,Vs=new B,js=new B,Hc=new B,$s=new B,oh=new B,qs=new B,Ye=class extends gt{constructor(e=new pt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],p=r[l];d!==0&&(Hc.fromBufferAttribute(p,e),s?$s.addScaledVector(Hc,d):$s.addScaledVector(Hc.sub(t),d))}t.add($s)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(Hs.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Hs,sh)===null||ni.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(rh.copy(r).invert(),ni.copy(e.ray).applyMatrix4(rh),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let i,r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,_=u.length;x<_;x++){let m=u[x],h=s[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,E=M;v<E;v+=3){let S=o.getX(v),T=o.getX(v+1),g=o.getX(v+2);i=Ws(this,h,e,n,c,d,p,S,T,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=x,h=_;m<h;m+=3){let b=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);i=Ws(this,s,e,n,c,d,p,b,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,_=u.length;x<_;x++){let m=u[x],h=s[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,E=M;v<E;v+=3){let S=v,T=v+1,g=v+2;i=Ws(this,h,e,n,c,d,p,S,T,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=x,h=_;m<h;m+=3){let b=m,M=m+1,v=m+2;i=Ws(this,s,e,n,c,d,p,b,M,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Ym(a,e,t,n,i,r,s,o){let l;if(e.side===an?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===ka,o),l===null)return null;qs.copy(o),qs.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:a}}function Ws(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,ks),a.getVertexPosition(l,Vs),a.getVertexPosition(c,js);let d=Ym(a,e,t,n,ks,Vs,js,oh);if(d){let p=new B;Ua.getBarycoord(oh,ks,Vs,js,p),i&&(d.uv=Ua.getInterpolatedAttribute(i,o,l,c,p,new $e)),r&&(d.uv1=Ua.getInterpolatedAttribute(r,o,l,c,p,new $e)),s&&(d.normal=Ua.getInterpolatedAttribute(s,o,l,c,p,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};Ua.getNormal(ks,Vs,js,u.normal),d.face=u,d.barycoord=p}return d}var Ur=class extends nn{constructor(e=null,t=1,n=1,i,r,s,o,l,c=jt,d=jt,p,u){super(null,s,o,l,c,d,i,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=class extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ri=new yt,lh=new yt,Xs=[],ch=new ra,Jm=new yt,_r=new Ye,yr=new _a,Pt=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ra),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),ch.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(ch)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _a),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),yr.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[s+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ri),lh.multiplyMatrices(n,Ri),_r.matrixWorld=lh,_r.raycast(e,Xs);for(let s=0,o=Xs.length;s<o;s++){let l=Xs[s];l.instanceId=r,l.object=this,t.push(l)}Xs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(i*this.count),i,this.count,Jo,Nn));let r=this.morphTexture.source.data.data,s=0;for(let c=0;c<n.length;c++)s+=n[c];let o=this.geometry.morphTargetsRelative?1:1-s,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ai=new _a,Zm=new $e(.5,.5),Ys=new B,Hi=class{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,s=new kn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let i=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],p=r[5],u=r[6],f=r[7],x=r[8],_=r[9],m=r[10],h=r[11],b=r[12],M=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-s,f-d,h-x,E-b).normalize(),i[1].setComponents(c+s,f+d,h+x,E+b).normalize(),i[2].setComponents(c+o,f+p,h+_,E+M).normalize(),i[3].setComponents(c-o,f-p,h-_,E-M).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,h-m,E-v).normalize();else if(i[4].setComponents(c-l,f-u,h-m,E-v).normalize(),t===Vn)i[5].setComponents(c+l,f+u,h+m,E+v).normalize();else if(t===Ui)i[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);let t=Zm.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ys.x=i.normal.x>0?e.max.x:e.min.x,Ys.y=i.normal.y>0?e.max.y:e.min.y,Ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pn=class extends ya{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},go=new B,xo=new B,dh=new yt,Sr=new Fr,Js=new _a,kc=new B,uh=new B,bo=class extends gt{constructor(e=new pt,t=new Pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)go.fromBufferAttribute(t,i-1),xo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=go.distanceTo(xo);e.setAttribute("lineDistance",new tt(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=r,e.ray.intersectsSphere(Js)===!1)return;dh.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(dh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let f=Math.max(0,s.start),x=Math.min(d.count,s.start+s.count);for(let _=f,m=x-1;_<m;_+=c){let h=d.getX(_),b=d.getX(_+1),M=Zs(this,e,Sr,l,h,b,_);M&&t.push(M)}if(this.isLineLoop){let _=d.getX(x-1),m=d.getX(f),h=Zs(this,e,Sr,l,_,m,x-1);h&&t.push(h)}}else{let f=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let _=f,m=x-1;_<m;_+=c){let h=Zs(this,e,Sr,l,_,_+1,_);h&&t.push(h)}if(this.isLineLoop){let _=Zs(this,e,Sr,l,x-1,f,x-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zs(a,e,t,n,i,r,s){let o=a.geometry.attributes.position;if(go.fromBufferAttribute(o,i),xo.fromBufferAttribute(o,r),t.distanceSqToSegment(go,xo,kc,uh)>n)return;kc.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(kc);if(!(c<e.near||c>e.far))return{distance:c,point:uh.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}var hh=new B,ph=new B,jn=class extends bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)hh.fromBufferAttribute(t,i),ph.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hh.distanceTo(ph);e.setAttribute("lineDistance",new tt(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Or=class extends nn{constructor(e=[],t=Va,n,i,r,s,o,l,c,d){super(e,t,n,i,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oa=class extends nn{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ba=class extends nn{constructor(e,t,n=qn,i,r,s,o=jt,l=jt,c,d=na,p=1){if(d!==na&&d!==$a)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,i,r,s,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vo=class extends Ba{constructor(e,t=qn,n=Va,i,r,s=jt,o=jt,l,c=na){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,i,r,s,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Br=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zt=class a extends pt{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let l=[],c=[],d=[],p=[],u=0,f=0;x("z","y","x",-1,-1,n,t,e,s,r,0),x("z","y","x",1,-1,n,t,-e,s,r,1),x("x","z","y",1,1,e,n,t,i,s,2),x("x","z","y",1,-1,e,n,-t,i,s,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function x(_,m,h,b,M,v,E,S,T,g,A){let C=v/T,P=E/g,L=v/2,I=E/2,R=S/2,U=T+1,F=g+1,H=0,j=0,Y=new B;for(let W=0;W<F;W++){let ae=W*P-I;for(let ye=0;ye<U;ye++){let $=ye*C-L;Y[_]=$*b,Y[m]=ae*M,Y[h]=R,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[h]=S>0?1:-1,d.push(Y.x,Y.y,Y.z),p.push(ye/T),p.push(1-W/g),H+=1}}for(let W=0;W<g;W++)for(let ae=0;ae<T;ae++){let ye=u+ae+U*W,$=u+ae+U*(W+1),ce=u+(ae+1)+U*(W+1),be=u+(ae+1)+U*W;l.push(ye,$,be),l.push($,ce,be),j+=6}o.addGroup(f,j,A),f+=j,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ki=class a extends pt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],o=[],l=[],c=[],d=t/2,p=Math.PI/2*e,u=t,f=2*p+u,x=n*2+r,_=i+1,m=new B,h=new B;for(let b=0;b<=x;b++){let M=0,v=0,E=0,S=0;if(b<=n){let A=b/n,C=A*Math.PI/2;v=-d-e*Math.cos(C),E=e*Math.sin(C),S=-e*Math.cos(C),M=A*p}else if(b<=n+r){let A=(b-n)/r;v=-d+A*t,E=e,S=0,M=p+A*u}else{let A=(b-n-r)/n,C=A*Math.PI/2;v=d+e*Math.sin(C),E=e*Math.cos(C),S=e*Math.sin(C),M=p+u+A*p}let T=Math.max(0,Math.min(1,M/f)),g=0;b===0?g=.5/i:b===x&&(g=-.5/i);for(let A=0;A<=i;A++){let C=A/i,P=C*Math.PI*2,L=Math.sin(P),I=Math.cos(P);h.x=-E*I,h.y=v,h.z=E*L,o.push(h.x,h.y,h.z),m.set(-E*I,S,E*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+g,T)}if(b>0){let A=(b-1)*_;for(let C=0;C<i;C++){let P=A+C,L=A+C+1,I=b*_+C,R=b*_+C+1;s.push(P,L,I),s.push(L,R,I)}}}this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zr=class a extends pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],s=[],o=[],l=[],c=new B,d=new $e;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){let f=n+p/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(s[u]/e+1)/2,d.y=(s[u+1]/e+1)/2,l.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},hn=class a extends pt{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let d=[],p=[],u=[],f=[],x=0,_=[],m=n/2,h=0;b(),s===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function b(){let v=new B,E=new B,S=0,T=(t-e)/n;for(let g=0;g<=r;g++){let A=[],C=g/r,P=C*(t-e)+e;for(let L=0;L<=i;L++){let I=L/i,R=I*l+o,U=Math.sin(R),F=Math.cos(R);E.x=P*U,E.y=-C*n+m,E.z=P*F,p.push(E.x,E.y,E.z),v.set(U,T,F).normalize(),u.push(v.x,v.y,v.z),f.push(I,1-C),A.push(x++)}_.push(A)}for(let g=0;g<i;g++)for(let A=0;A<r;A++){let C=_[A][g],P=_[A+1][g],L=_[A+1][g+1],I=_[A][g+1];(e>0||A!==0)&&(d.push(C,P,I),S+=3),(t>0||A!==r-1)&&(d.push(P,L,I),S+=3)}c.addGroup(h,S,0),h+=S}function M(v){let E=x,S=new $e,T=new B,g=0,A=v===!0?e:t,C=v===!0?1:-1;for(let L=1;L<=i;L++)p.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),x++;let P=x;for(let L=0;L<=i;L++){let R=L/i*l+o,U=Math.cos(R),F=Math.sin(R);T.x=A*F,T.y=m*C,T.z=A*U,p.push(T.x,T.y,T.z),u.push(0,C,0),S.x=U*.5+.5,S.y=F*.5*C+.5,f.push(S.x,S.y),x++}for(let L=0;L<i;L++){let I=E+L,R=P+L;v===!0?d.push(R,R+1,I):d.push(R+1,R,I),g+=3}c.addGroup(h,g,v===!0?1:2),h+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gr=class a extends hn{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_o=class a extends pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],s=[];o(i),c(n),d(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let M=new B,v=new B,E=new B;for(let S=0;S<t.length;S+=3)f(t[S+0],M),f(t[S+1],v),f(t[S+2],E),l(M,v,E,b)}function l(b,M,v,E){let S=E+1,T=[];for(let g=0;g<=S;g++){T[g]=[];let A=b.clone().lerp(v,g/S),C=M.clone().lerp(v,g/S),P=S-g;for(let L=0;L<=P;L++)L===0&&g===S?T[g][L]=A:T[g][L]=A.clone().lerp(C,L/P)}for(let g=0;g<S;g++)for(let A=0;A<2*(S-g)-1;A++){let C=Math.floor(A/2);A%2===0?(u(T[g][C+1]),u(T[g+1][C]),u(T[g][C])):(u(T[g][C+1]),u(T[g+1][C+1]),u(T[g+1][C]))}}function c(b){let M=new B;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(b),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function d(){let b=new B;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let v=m(b)/2/Math.PI+.5,E=h(b)/Math.PI+.5;s.push(v,1-E)}x(),p()}function p(){for(let b=0;b<s.length;b+=6){let M=s[b+0],v=s[b+2],E=s[b+4],S=Math.max(M,v,E),T=Math.min(M,v,E);S>.9&&T<.1&&(M<.2&&(s[b+0]+=1),v<.2&&(s[b+2]+=1),E<.2&&(s[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,M){let v=b*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function x(){let b=new B,M=new B,v=new B,E=new B,S=new $e,T=new $e,g=new $e;for(let A=0,C=0;A<r.length;A+=9,C+=6){b.set(r[A+0],r[A+1],r[A+2]),M.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),S.set(s[C+0],s[C+1]),T.set(s[C+2],s[C+3]),g.set(s[C+4],s[C+5]),E.copy(b).add(M).add(v).divideScalar(3);let P=m(E);_(S,C+0,b,P),_(T,C+2,M,P),_(g,C+4,v,P)}}function _(b,M,v,E){E<0&&b.x===1&&(s[M]=b.x-1),v.x===0&&v.z===0&&(s[M]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function h(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);let d=n[i],u=n[i+1]-d,f=(s-d)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),l=t||(s.isVector2?new $e:new B);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,i=[],r=[],s=[],o=new B,l=new yt;for(let f=0;f<=e;f++){let x=f/e;i[f]=this.getTangentAt(x,new B)}r[0]=new B,s[0]=new B;let c=Number.MAX_VALUE,d=Math.abs(i[0].x),p=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(lt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],f*x)),s[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hr=class extends In{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new $e){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*d-f*p+this.aX,c=u*p+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yo=class extends Hr{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Md(){let a=0,e=0,t=0,n=0;function i(r,s,o,l){a=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){i(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,d,p){let u=(s-r)/c-(o-r)/(c+d)+(o-s)/d,f=(o-s)/d-(l-s)/(d+p)+(l-o)/p;u*=d,f*=d,i(s,o,u,f)},calc:function(r){let s=r*r,o=s*r;return a+e*r+t*s+n*o}}}var fh=new B,mh=new B,Vc=new Md,jc=new Md,$c=new Md,Vi=class extends In{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){let n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e,o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=i[(o-1)%r]:(mh.subVectors(i[0],i[1]).add(i[0]),c=mh);let p=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?d=i[(o+2)%r]:(fh.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=fh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),f),_=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);_<1e-4&&(_=1),x<1e-4&&(x=_),m<1e-4&&(m=_),Vc.initNonuniformCatmullRom(c.x,p.x,u.x,d.x,x,_,m),jc.initNonuniformCatmullRom(c.y,p.y,u.y,d.y,x,_,m),$c.initNonuniformCatmullRom(c.z,p.z,u.z,d.z,x,_,m)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(c.x,p.x,u.x,d.x,this.tension),jc.initCatmullRom(c.y,p.y,u.y,d.y,this.tension),$c.initCatmullRom(c.z,p.z,u.z,d.z,this.tension));return n.set(Vc.calc(l),jc.calc(l),$c.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gh(a,e,t,n,i){let r=(n-e)*.5,s=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*a+t}function Km(a,e){let t=1-a;return t*t*e}function Qm(a,e){return 2*(1-a)*a*e}function e0(a,e){return a*a*e}function Mr(a,e,t,n){return Km(a,e)+Qm(a,t)+e0(a,n)}function t0(a,e){let t=1-a;return t*t*t*e}function n0(a,e){let t=1-a;return 3*t*t*a*e}function a0(a,e){return 3*(1-a)*a*a*e}function i0(a,e){return a*a*a*e}function Er(a,e,t,n,i){return t0(a,e)+n0(a,t)+a0(a,n)+i0(a,i)}var So=class extends In{constructor(e=new $e,t=new $e,n=new $e,i=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $e){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Er(e,i.x,r.x,s.x,o.x),Er(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mo=class extends In{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){let n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Er(e,i.x,r.x,s.x,o.x),Er(e,i.y,r.y,s.y,o.y),Er(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eo=class extends In{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends In{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends In{constructor(e=new $e,t=new $e,n=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $e){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Mr(e,i.x,r.x,s.x),Mr(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends In{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Mr(e,i.x,r.x,s.x),Mr(e,i.y,r.y,s.y),Mr(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){let n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],c=i[s],d=i[s>i.length-2?i.length-1:s+1],p=i[s>i.length-3?i.length-1:s+2];return n.set(gh(o,l.x,c.x,d.x,p.x),gh(o,l.y,c.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new $e().fromArray(i))}return this}},r0=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:Vi,CubicBezierCurve:So,CubicBezierCurve3:Mo,EllipseCurve:Hr,LineCurve:Eo,LineCurve3:Ao,QuadraticBezierCurve:To,QuadraticBezierCurve3:kr,SplineCurve:wo});var ri=class a extends _o{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}};var si=class a extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,p=e/o,u=t/l,f=[],x=[],_=[],m=[];for(let h=0;h<d;h++){let b=h*u-s;for(let M=0;M<c;M++){let v=M*p-r;x.push(v,-b,0),_.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){let M=b+c*h,v=b+c*(h+1),E=b+1+c*(h+1),S=b+1+c*h;f.push(M,v,S),f.push(v,E,S)}this.setIndex(f),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},Vr=class a extends pt{constructor(e=.5,t=1,n=32,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],d=[],p=e,u=(t-e)/i,f=new B,x=new $e;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let h=r+m/n*s;f.x=p*Math.cos(h),f.y=p*Math.sin(h),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,d.push(x.x,x.y)}p+=u}for(let _=0;_<i;_++){let m=_*(n+1);for(let h=0;h<n;h++){let b=h+m,M=b,v=b+n+1,E=b+n+2,S=b+1;o.push(M,v,S),o.push(v,E,S)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var sa=class a extends pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+o,Math.PI),c=0,d=[],p=new B,u=new B,f=[],x=[],_=[],m=[];for(let h=0;h<=n;h++){let b=[],M=h/n,v=s+M*o,E=e*Math.cos(v),S=Math.sqrt(e*e-E*E),T=0;h===0&&s===0?T=.5/t:h===n&&l===Math.PI&&(T=-.5/t);for(let g=0;g<=t;g++){let A=g/t,C=i+A*r;p.x=-S*Math.cos(C),p.y=E,p.z=S*Math.sin(C),x.push(p.x,p.y,p.z),u.copy(p).normalize(),_.push(u.x,u.y,u.z),m.push(A+T,1-M),b.push(c++)}d.push(b)}for(let h=0;h<n;h++)for(let b=0;b<t;b++){let M=d[h][b+1],v=d[h][b],E=d[h+1][b],S=d[h+1][b+1];(h!==0||s>0)&&f.push(M,v,S),(h!==n-1||l<Math.PI)&&f.push(v,E,S)}this.setIndex(f),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Dn=class a extends pt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:s,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],d=[],p=[],u=new B,f=new B,x=new B;for(let _=0;_<=n;_++){let m=s+_/n*o;for(let h=0;h<=i;h++){let b=h/i*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),x.subVectors(f,u).normalize(),d.push(x.x,x.y,x.z),p.push(h/i),p.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let h=(i+1)*_+m-1,b=(i+1)*(_-1)+m-1,M=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(h,b,v),l.push(b,M,v)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var jr=class a extends pt{constructor(e=new kr(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new B,l=new B,c=new $e,d=new B,p=[],u=[],f=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function _(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),b(),h()}function m(M){d=e.getPointAt(M/t,d);let v=s.normals[M],E=s.binormals[M];for(let S=0;S<=i;S++){let T=S/i*Math.PI*2,g=Math.sin(T),A=-Math.cos(T);l.x=A*v.x+g*E.x,l.y=A*v.y+g*E.y,l.z=A*v.z+g*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,p.push(o.x,o.y,o.z)}}function h(){for(let M=1;M<=t;M++)for(let v=1;v<=i;v++){let E=(i+1)*(M-1)+(v-1),S=(i+1)*M+(v-1),T=(i+1)*M+v,g=(i+1)*(M-1)+v;x.push(E,S,g),x.push(S,T,g)}}function b(){for(let M=0;M<=t;M++)for(let v=0;v<=i;v++)c.x=M/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new a(new r0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ci(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(xh(i))i.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(xh(i[0])){let r=[];for(let s=0,o=i.length;s<o;s++)r[s]=i[s].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kt(a){let e={};for(let t=0;t<a.length;t++){let n=ci(a[t]);for(let i in n)e[i]=n[i]}return e}function xh(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function s0(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ed(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var lp={clone:ci,merge:Kt},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(i.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new nt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Co=class extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ct=class extends ya{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ro=class extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Po=class extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pi(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function qc(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}var za=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{a:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break a;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Io=class extends za{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Jc:r=e,o=2*t-n;break;case Zc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:s=e,l=2*n-t;break;case Zc:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=s*d}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,x=(n-t)/(i-t),_=x*x,m=_*x,h=-u*m+2*u*_-u*x,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*x+1,M=(-1-f)*m+(1.5+f)*_+.5*x,v=f*m-f*_;for(let E=0;E!==o;++E)r[E]=h*s[d+E]+b*s[c+E]+M*s[l+E]+v*s[p+E];return r}},Do=class extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),p=1-d;for(let u=0;u!==o;++u)r[u]=s[c+u]*p+s[l+u]*d;return r}},Lo=class extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},No=class extends za{interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let x=(n-t)/(i-t),_=1-x;for(let m=0;m!==o;++m)r[m]=s[c+m]*_+s[l+m]*x;return r}let u=o*2,f=e-1;for(let x=0;x!==o;++x){let _=s[c+x],m=s[l+x],h=f*u+x*2,b=p[h],M=p[h+1],v=e*u+x*2,E=d[v],S=d[v+1],T=d0(n,t,b,E,i);r[x]=cp(T,_,M,S,m)}return r}};function cp(a,e,t,n,i){let r=1-a;return r*r*r*e+3*r*r*a*t+3*r*a*a*n+a*a*a*i}function c0(a,e,t,n,i){let r=1-a;return 3*r*r*(t-e)+6*r*a*(n-t)+3*a*a*(i-n)}function d0(a,e,t,n,i){let r=(a-e)/(i-e);for(let s=0;s<8;s++){let o=cp(r,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let l=c0(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pi(t,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pi(e.times,Array),values:Pi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),qc(e.settings)&&(n.settings={inTangents:Pi(e.settings.inTangents,Array),outTangents:Pi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new No(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case uo:t=this.InterpolantFactoryMethodLinear;break;case eo:t=this.InterpolantFactoryMethodSmooth;break;case Xc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return eo;case this.InterpolantFactoryMethodBezier:return Xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;qc(this.settings)&&(bh(this.settings.inTangents,e),bh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){et("KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&Im(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===eo,r=e.length-1,s=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{let p=o*n,u=p-n,f=p+n;for(let x=0;x!==n;++x){let _=t[p+x];if(_!==t[u+x]||_!==t[f+x]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let p=o*n,u=s*n;for(let f=0;f!==n;++f)t[u+f]=t[p+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,qc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function bh(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=uo;var Ga=class extends yn{constructor(e,t,n){super(e,t,n)}};Ga.prototype.ValueTypeName="bool";Ga.prototype.ValueBufferType=Array;Ga.prototype.DefaultInterpolation=Ar;Ga.prototype.InterpolantFactoryMethodLinear=void 0;Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Fo.prototype.ValueTypeName="color";var Uo=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Uo.prototype.ValueTypeName="number";var Oo=class extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let d=c+o;c!==d;c+=4)ia.slerpFlat(r,0,s,c-o,s,c,l);return r}},$r=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends yn{constructor(e,t,n){super(e,t,n)}};Ha.prototype.ValueTypeName="string";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=Ar;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Bo.prototype.ValueTypeName="vector";var zo=class{constructor(e,t,n){let i=this,r=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,s,o),r=!0},this.itemEnd=function(d){s++,i.onProgress!==void 0&&i.onProgress(d,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){let p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],x=c[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},dp=new zo,Go=class{constructor(e){this.manager=e!==void 0?e:dp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Go.DEFAULT_MATERIAL_NAME="__DEFAULT";var qr=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wr=class extends qr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wc=new yt,vh=new B,_h=new B,Ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(vh),_h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_h),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,s=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ui||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ks=new B,Qs=new ia,ea=new B,Xr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ks,Qs,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Qs,ea.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ks,Qs,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Qs,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fa=new B,yh=new $e,Sh=new $e,Zt=class extends Xr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,t){return this.getViewBounds(e,yh,Sh),t.subVectors(Sh,yh)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ji=class extends Xr{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends Ho{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ii=-90,Di=1,ko=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Zt(Ii,Di,e,t);i.layers=this.layers,this.add(i);let r=new Zt(Ii,Di,e,t);r.layers=this.layers,this.add(r);let s=new Zt(Ii,Di,e,t);s.layers=this.layers,this.add(s);let o=new Zt(Ii,Di,e,t);o.layers=this.layers,this.add(o);let l=new Zt(Ii,Di,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Ii,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ui)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Vo=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ad="\\[\\]\\.:\\/",u0=new RegExp("["+Ad+"]","g"),Td="[^"+Ad+"]",h0="[^"+Ad.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",Td),f0=/(WCOD+)?/.source.replace("WCOD",h0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Td),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Td),x0=new RegExp("^"+p0+f0+m0+g0+"$"),b0=["material","materials","bones","map"],Qc=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(e){let t=x0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);b0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let s=e[i];if(s===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Qc;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var Jr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ed=class a{static{a.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function wd(a,e,t,n){let i=v0(n);switch(t){case vd:return a*e;case Jo:return a*e/i.components*i.byteLength;case Zo:return a*e/i.components*i.byteLength;case qa:return a*e*2/i.components*i.byteLength;case Ko:return a*e*2/i.components*i.byteLength;case _d:return a*e*3/i.components*i.byteLength;case Fn:return a*e*4/i.components*i.byteLength;case Qo:return a*e*4/i.components*i.byteLength;case ts:case ns:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case as:case is:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case tl:case al:return Math.max(a,16)*Math.max(e,8)/4;case el:case nl:return Math.max(a,8)*Math.max(e,8)/2;case il:case rl:case ol:case ll:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case sl:case rs:case cl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case ml:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case gl:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case El:case Al:case Tl:return Math.ceil(a/4)*Math.ceil(e/4)*16;case wl:case Cl:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ss:case Rl:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v0(a){switch(a){case pn:case md:return{byteLength:1,components:1};case Wi:case gd:case Wn:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case qn:case Wo:case Nn:return{byteLength:4,components:1};case xd:case bd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Dp(){let a=null,e=!1,t=null,n=null;function i(r,s){n=a.requestAnimationFrame(i),t(r,s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function T0(a){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,p=c.byteLength,u=a.createBuffer();a.bindBuffer(l,u),a.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let d=l.array,p=l.updateRanges;if(a.bindBuffer(c,o),p.length===0)a.bufferSubData(c,0,d);else{p.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<p.length;f++){let x=p[u],_=p[f];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++u,p[u]=_)}p.length=u+1;for(let f=0,x=p.length;f<x;f++){let _=p[f];a.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:s}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
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
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vg=`#ifdef USE_ENVMAP
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
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eg=`PhysicalMaterial material;
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
#endif`,Ag=`uniform sampler2D dfgLUT;
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
}`,Tg=`
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Og=`#if defined( USE_POINTS_UV )
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
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hx=`float getShadowMask() {
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
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Fx=`#define DISTANCE
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
}`,Ux=`#define DISTANCE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,kx=`uniform vec3 diffuse;
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
}`,Vx=`#define LAMBERT
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
}`,jx=`#define LAMBERT
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
}`,$x=`#define MATCAP
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
}`,qx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,Jx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,Kx=`#define STANDARD
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
}`,Qx=`#define TOON
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
}`,eb=`#define TOON
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
}`,tb=`uniform float size;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ab=`#include <common>
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
}`,ib=`uniform vec3 color;
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
}`,rb=`uniform float rotation;
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
}`,sb=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:w0,alphahash_pars_fragment:C0,alphamap_fragment:R0,alphamap_pars_fragment:P0,alphatest_fragment:I0,alphatest_pars_fragment:D0,aomap_fragment:L0,aomap_pars_fragment:N0,batching_pars_vertex:F0,batching_vertex:U0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:G0,bumpmap_pars_fragment:H0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:$0,color_fragment:q0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:Y0,common:J0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:K0,displacementmap_pars_vertex:Q0,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ag,colorspace_pars_fragment:ig,envmap_fragment:rg,envmap_common_pars_fragment:sg,envmap_pars_fragment:og,envmap_pars_vertex:lg,envmap_physical_pars_fragment:vg,envmap_vertex:cg,fog_vertex:dg,fog_pars_vertex:ug,fog_fragment:hg,fog_pars_fragment:pg,gradientmap_pars_fragment:fg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:bg,lights_toon_fragment:_g,lights_toon_pars_fragment:yg,lights_phong_fragment:Sg,lights_phong_pars_fragment:Mg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Tg,lights_fragment_maps:wg,lights_fragment_end:Cg,lightprobes_pars_fragment:Rg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Lg,map_fragment:Ng,map_pars_fragment:Fg,map_particle_fragment:Ug,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphinstance_vertex:Gg,morphcolor_vertex:Hg,morphnormal_vertex:kg,morphtarget_pars_vertex:Vg,morphtarget_vertex:jg,normal_fragment_begin:$g,normal_fragment_maps:qg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:Yg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:ex,opaque_fragment:tx,packing:nx,premultiplied_alpha_fragment:ax,project_vertex:ix,dithering_fragment:rx,dithering_pars_fragment:sx,roughnessmap_fragment:ox,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:dx,shadowmap_vertex:ux,shadowmask_pars_fragment:hx,skinbase_vertex:px,skinning_pars_vertex:fx,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:xx,specularmap_pars_fragment:bx,tonemapping_fragment:vx,tonemapping_pars_fragment:_x,transmission_fragment:yx,transmission_pars_fragment:Sx,uv_pars_fragment:Mx,uv_pars_vertex:Ex,uv_vertex:Ax,worldpos_vertex:Tx,background_vert:wx,background_frag:Cx,backgroundCube_vert:Rx,backgroundCube_frag:Px,cube_vert:Ix,cube_frag:Dx,depth_vert:Lx,depth_frag:Nx,distance_vert:Fx,distance_frag:Ux,equirect_vert:Ox,equirect_frag:Bx,linedashed_vert:zx,linedashed_frag:Gx,meshbasic_vert:Hx,meshbasic_frag:kx,meshlambert_vert:Vx,meshlambert_frag:jx,meshmatcap_vert:$x,meshmatcap_frag:qx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:Yx,meshphong_frag:Jx,meshphysical_vert:Zx,meshphysical_frag:Kx,meshtoon_vert:Qx,meshtoon_frag:eb,points_vert:tb,points_frag:nb,shadow_vert:ab,shadow_frag:ib,sprite_vert:rb,sprite_frag:sb},De={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ca={basic:{uniforms:Kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Kt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Kt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Kt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new He(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Kt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Kt([De.points,De.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Kt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Kt([De.common,De.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Kt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Kt([De.sprite,De.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Kt([De.common,De.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Kt([De.lights,De.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ca.physical={uniforms:Kt([ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Ll={r:0,b:0,g:0},ob=new yt,Lp=new nt;Lp.set(-1,0,0,0,1,0,0,0,1);function lb(a,e,t,n,i,r){let s=new He(0),o=i===!0?0:1,l,c,d=null,p=0,u=null;function f(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){let v=b.backgroundBlurriness>0;M=e.get(M,v)}return M}function x(b){let M=!1,v=f(b);v===null?m(s,o):v&&v.isColor&&(m(v,1),M=!0);let E=a.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(a.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(b,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===Qr)?(c===void 0&&(c=new Ye(new zt(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:ci(ca.backgroundCube.uniforms),vertexShader:ca.backgroundCube.vertexShader,fragmentShader:ca.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ob.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lp),c.material.toneMapped=ut.getTransfer(v.colorSpace)!==_t,(d!==v||p!==v.version||u!==a.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,u=a.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new si(2,2),new _n({name:"BackgroundMaterial",uniforms:ci(ca.background.uniforms),vertexShader:ca.background.vertexShader,fragmentShader:ca.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,u=a.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,M){b.getRGB(Ll,Ed(a)),t.buffers.color.setClear(Ll.r,Ll.g,Ll.b,M,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,M=1){s.set(b),o=M,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(s,o)},render:x,addToRenderList:_,dispose:h}}function cb(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,s=!1;function o(P,L,I,R,U){let F=!1,H=p(P,R,I,L);r!==H&&(r=H,c(r.object)),F=f(P,R,I,U),F&&x(P,R,I,U),U!==null&&e.update(U,a.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,v(P,L,I,R),U!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return a.createVertexArray()}function c(P){return a.bindVertexArray(P)}function d(P){return a.deleteVertexArray(P)}function p(P,L,I,R){let U=R.wireframe===!0,F=n[L.id];F===void 0&&(F={},n[L.id]=F);let H=P.isInstancedMesh===!0?P.id:0,j=F[H];j===void 0&&(j={},F[H]=j);let Y=j[I.id];Y===void 0&&(Y={},j[I.id]=Y);let W=Y[U];return W===void 0&&(W=u(l()),Y[U]=W),W}function u(P){let L=[],I=[],R=[];for(let U=0;U<t;U++)L[U]=0,I[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:R,object:P,attributes:{},index:null}}function f(P,L,I,R){let U=r.attributes,F=L.attributes,H=0,j=I.getAttributes();for(let Y in j)if(j[Y].location>=0){let ae=U[Y],ye=F[Y];if(ye===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor)),ae===void 0||ae.attribute!==ye||ye&&ae.data!==ye.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function x(P,L,I,R){let U={},F=L.attributes,H=0,j=I.getAttributes();for(let Y in j)if(j[Y].location>=0){let ae=F[Y];ae===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));let ye={};ye.attribute=ae,ae&&ae.data&&(ye.data=ae.data),U[Y]=ye,H++}r.attributes=U,r.attributesNum=H,r.index=R}function _(){let P=r.newAttributes;for(let L=0,I=P.length;L<I;L++)P[L]=0}function m(P){h(P,0)}function h(P,L){let I=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;I[P]=1,R[P]===0&&(a.enableVertexAttribArray(P),R[P]=1),U[P]!==L&&(a.vertexAttribDivisor(P,L),U[P]=L)}function b(){let P=r.newAttributes,L=r.enabledAttributes;for(let I=0,R=L.length;I<R;I++)L[I]!==P[I]&&(a.disableVertexAttribArray(I),L[I]=0)}function M(P,L,I,R,U,F,H){H===!0?a.vertexAttribIPointer(P,L,I,U,F):a.vertexAttribPointer(P,L,I,R,U,F)}function v(P,L,I,R){_();let U=R.attributes,F=I.getAttributes(),H=L.defaultAttributeValues;for(let j in F){let Y=F[j];if(Y.location>=0){let W=U[j];if(W===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let ae=W.normalized,ye=W.itemSize,$=e.get(W);if($===void 0)continue;let ce=$.buffer,be=$.type,Se=$.bytesPerElement,q=be===a.INT||be===a.UNSIGNED_INT||W.gpuType===Wo;if(W.isInterleavedBufferAttribute){let V=W.data,de=V.stride,pe=W.offset;if(V.isInstancedInterleavedBuffer){for(let fe=0;fe<Y.locationSize;fe++)h(Y.location+fe,V.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let fe=0;fe<Y.locationSize;fe++)m(Y.location+fe);a.bindBuffer(a.ARRAY_BUFFER,ce);for(let fe=0;fe<Y.locationSize;fe++)M(Y.location+fe,ye/Y.locationSize,be,ae,de*Se,(pe+ye/Y.locationSize*fe)*Se,q)}else{if(W.isInstancedBufferAttribute){for(let V=0;V<Y.locationSize;V++)h(Y.location+V,W.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let V=0;V<Y.locationSize;V++)m(Y.location+V);a.bindBuffer(a.ARRAY_BUFFER,ce);for(let V=0;V<Y.locationSize;V++)M(Y.location+V,ye/Y.locationSize,be,ae,ye*Se,ye/Y.locationSize*V*Se,q)}}else if(H!==void 0){let ae=H[j];if(ae!==void 0)switch(ae.length){case 2:a.vertexAttrib2fv(Y.location,ae);break;case 3:a.vertexAttrib3fv(Y.location,ae);break;case 4:a.vertexAttrib4fv(Y.location,ae);break;default:a.vertexAttrib1fv(Y.location,ae)}}}}b()}function E(){A();for(let P in n){let L=n[P];for(let I in L){let R=L[I];for(let U in R){let F=R[U];for(let H in F)d(F[H].object),delete F[H];delete R[U]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let I in L){let R=L[I];for(let U in R){let F=R[U];for(let H in F)d(F[H].object),delete F[H];delete R[U]}}delete n[P.id]}function T(P){for(let L in n){let I=n[L];for(let R in I){let U=I[R];if(U[P.id]===void 0)continue;let F=U[P.id];for(let H in F)d(F[H].object),delete F[H];delete U[P.id]}}}function g(P){for(let L in n){let I=n[L],R=P.isInstancedMesh===!0?P.id:0,U=I[R];if(U!==void 0){for(let F in U){let H=U[F];for(let j in H)d(H[j].object),delete H[j];delete U[F]}delete I[R],Object.keys(I).length===0&&delete n[L]}}}function A(){C(),s=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function db(a,e,t){let n;function i(l){n=l}function r(l,c){a.drawArrays(n,l,c),t.update(c,n,1)}function s(l,c,d){d!==0&&(a.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function ub(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){return!(T!==Fn&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let g=T===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==pn&&T!==Nn&&!g&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Je("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),h=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=a.getParameter(a.MAX_SAMPLES),S=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,maxSamples:E,samples:S}}function hb(a){let e=this,t=null,n=0,i=!1,r=!1,s=new kn,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||n!==0||i;return i=u,n=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,f){let x=p.clippingPlanes,_=p.clipIntersection,m=p.clipShadows,h=a.get(p);if(!i||x===null||x.length===0||r&&!m)r?d(null):c();else{let b=r?0:n,M=b*4,v=h.clippingState||null;l.value=v,v=d(x,u,M,f);for(let E=0;E!==M;++E)v[E]=t[E];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,f,x){let _=p!==null?p.length:0,m=null;if(_!==0){if(m=l.value,x!==!0||m===null){let h=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,v=f;M!==_;++M,v+=4)s.copy(p[M]).applyMatrix4(b,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ji=4,pb=6,fb=20,mb=256,ls=new ji,up=new He,Cd=null,Rd=0,Pd=0,Id=!1,gb=new B,di=new B,Fl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:s=256,position:o=gb}=r;Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,Rd,Pd),this._renderer.xr.enabled=Id,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Va||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Wn,format:Fn,colorSpace:Tr,depthBuffer:!1},i=hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xb(r)),this._blurMaterial=vb(r,e,t),this._ggxMaterial=bb(r,e,t)}return i}_compileMaterial(e){let t=new Ye(new pt,e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,n,i,r){let l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(up),p.toneMapping=$n,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new zt,new vn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,h=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,h=!0):(m.color.copy(up),h=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[M]));let E=this._cubeSize;Yi(i,v*E,M>2?E:0,E,E),p.setRenderTarget(i),h&&p.render(_,l),p.render(e,l)}p.toneMapping=f,p.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Va||e.mapping===li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());let r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ls)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=c*1.25,f=p*u,{_lodMax:x}=this,_=this._sizeLods[n],m=3*_*(n>x-Ji?n-x+Ji:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=x-t,Yi(r,m,h,3*_,2*_),i.setRenderTarget(r),i.render(o,ls),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Yi(e,m,h,3*_,2*_),i.setRenderTarget(e),i.render(o,ls)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,s=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,s),this._blurPass(r,e,n,n,s)}_blurPass(e,t,n,i,r){let s=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[i],p=3*d*(i>this._lodMax-Ji?i-this._lodMax+Ji:0),u=4*(this._cubeSize-d);Yi(t,p,u,3*d,2*d),s.setRenderTarget(t),s.render(l,ls)}};function xb(a){let e=[],t=[],n=a,i=a-Ji+1+pb;for(let r=0;r<i;r++){let s=Math.pow(2,n);e.push(s);let o=1/(s-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,f=3,x=new Float32Array(f*u*p),_=new Float32Array(f*u*p);for(let h=0;h<p;h++){let b=h%3*2/3-1,M=h>2?0:-1,v=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];x.set(v,f*u*h);for(let E=0;E<u;E++){let S=d[E*2]*2-1,T=d[E*2+1]*2-1;h===0?di.set(1,T,S):h===1?di.set(-S,1,-T):h===2?di.set(-S,T,1):h===3?di.set(-1,T,-S):h===4?di.set(-S,-1,T):di.set(S,T,-1),di.toArray(_,(h*u+E)*f)}}let m=new pt;m.setAttribute("position",new mt(x,f)),m.setAttribute("outputDirection",new mt(_,f)),t.push(new Ye(m,null)),n>Ji&&n--}return{lodMeshes:t,sizeLods:e}}function hp(a,e,t){let n=new un(a,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function bb(a,e,t){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:oa,depthTest:!1,depthWrite:!1})}function vb(a,e,t){return new _n({name:"SphericalGaussianBlur",defines:{SAMPLES:fb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:oa,depthTest:!1,depthWrite:!1})}function pp(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:oa,depthTest:!1,depthWrite:!1})}function fp(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oa,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ul=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Or(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zt(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:oa});r.uniforms.tEquirect.value=t;let s=new Ye(i,r),o=t.minFilter;return t.minFilter===ja&&(t.minFilter=qt),new ko(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}};function _b(a){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?s(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===jo||f===$o)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let _=new Ul(x.height);return _.fromEquirectangularTexture(a,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let f=u.mapping,x=f===jo||f===$o,_=f===Va||f===li;if(x||_){let m=t.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new Fl(a)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return x&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Fl(a)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===jo?u.mapping=Va:f===$o&&(u.mapping=li),u}function l(u){let f=0,x=6;for(let _=0;_<x;_++)u[_]!==void 0&&f++;return f===x}function c(u){let f=u.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function yb(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ii("WebGLRenderer: "+n+" extension not supported."),i}}}function Sb(a,e,t,n){let i={},r=new WeakMap;function s(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",s),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return i[u.id]===!0||(u.addEventListener("dispose",s),i[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)e.update(u[f],a.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,x=p.attributes.position,_=0;if(x===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let M=0,v=b.length;M<v;M+=3){let E=b[M+0],S=b[M+1],T=b[M+2];u.push(E,S,S,T,T,E)}}else{let b=x.array;_=x.version;for(let M=0,v=b.length/3-1;M<v;M+=3){let E=M+0,S=M+1,T=M+2;u.push(E,S,S,T,T,E)}}let m=new(x.count>=65535?Nr:Lr)(u,1);m.version=_;let h=r.get(p);h&&e.remove(h),r.set(p,m)}function d(p){let u=r.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Mb(a,e,t){let n;function i(p){n=p}let r,s;function o(p){r=p.type,s=p.bytesPerElement}function l(p,u){a.drawElements(n,u,r,p*s),t.update(u,n,1)}function c(p,u,f){f!==0&&(a.drawElementsInstanced(n,u,r,p*s,f),t.update(u,n,f))}function d(p,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Eb(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ab(a,e,t){let n=new WeakMap,i=new Rt;function r(s,o,l){let c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,u=n.get(o);if(u===void 0||u.count!==p){let A=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;f===!0&&(M=1),x===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*E*4*p),T=new Rr(S,v,E,p);T.type=Nn,T.needsUpdate=!0;let g=M*4;for(let C=0;C<p;C++){let P=m[C],L=h[C],I=b[C],R=v*E*4*C;for(let U=0;U<P.count;U++){let F=U*g;f===!0&&(i.fromBufferAttribute(P,U),S[R+F+0]=i.x,S[R+F+1]=i.y,S[R+F+2]=i.z,S[R+F+3]=0),x===!0&&(i.fromBufferAttribute(L,U),S[R+F+4]=i.x,S[R+F+5]=i.y,S[R+F+6]=i.z,S[R+F+7]=0),_===!0&&(i.fromBufferAttribute(I,U),S[R+F+8]=i.x,S[R+F+9]=i.y,S[R+F+10]=i.z,S[R+F+11]=I.itemSize===4?i.w:1)}}u={count:p,texture:T,size:new $e(v,E)},n.set(o,u),o.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(a,"morphTargetBaseInfluence",x),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",u.size)}return{update:r}}function Tb(a,e,t,n,i){let r=new WeakMap;function s(c){let d=i.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}var wb={[ld]:"LINEAR_TONE_MAPPING",[cd]:"REINHARD_TONE_MAPPING",[dd]:"CINEON_TONE_MAPPING",[Kr]:"ACES_FILMIC_TONE_MAPPING",[hd]:"AGX_TONE_MAPPING",[pd]:"NEUTRAL_TONE_MAPPING",[ud]:"CUSTOM_TONE_MAPPING"};function Cb(a,e,t,n,i,r){let s=new un(e,t,{type:a,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new pt;c.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tt([0,2,0,0,2,0],2));let d=new Co({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ye(c,d),u=new ji(-1,1,1,-1,0,1),f=null,x=null,_=!1,m,h=null,b=[],M=!1;this.setSize=function(v,E){s.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let S=0;S<b.length;S++){let T=b[S];T.setSize&&T.setSize(v,E)}},this.setEffects=function(v){b=v,M=b.length>0&&b[0].isRenderPass===!0;let E=s.width,S=s.height;b.length>0&&o===null&&(o=new un(E,S,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new un(E,S,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let g=b[T];g.setSize&&g.setSize(E,S)}},this.begin=function(v,E){if(_||v.toneMapping===$n&&b.length===0)return!1;if(h=E,E!==null){let S=E.width,T=E.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return M===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=$n,!0},this.hasRenderPass=function(){return M},this.end=function(v,E){v.toneMapping=m,_=!0;let S=s,T=o;for(let g=0;g<b.length;g++){let A=b[g];A.enabled!==!1&&(A.render(v,T,S,E),A.needsSwap!==!1&&(S=T,T=T===o?l:o))}if(f!==v.outputColorSpace||x!==v.toneMapping){f=v.outputColorSpace,x=v.toneMapping,d.defines={},ut.getTransfer(f)===_t&&(d.defines.SRGB_TRANSFER="");let g=wb[x];g&&(d.defines[g]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(h),v.render(p,u),h=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Np=new nn,Nd=new Ba(1,1),Fp=new Rr,Up=new mo,Op=new Or,mp=[],gp=[],xp=new Float32Array(16),bp=new Float32Array(9),vp=new Float32Array(4);function Ki(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,r=mp[i];if(r===void 0&&(r=new Float32Array(i),mp[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Gt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ht(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function zl(a,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Rb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Pb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;a.uniform2fv(this.addr,e),Ht(t,e)}}function Ib(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;a.uniform3fv(this.addr,e),Ht(t,e)}}function Db(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;a.uniform4fv(this.addr,e),Ht(t,e)}}function Lb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;vp.set(n),a.uniformMatrix2fv(this.addr,!1,vp),Ht(t,n)}}function Nb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;bp.set(n),a.uniformMatrix3fv(this.addr,!1,bp),Ht(t,n)}}function Fb(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Gt(t,n))return;xp.set(n),a.uniformMatrix4fv(this.addr,!1,xp),Ht(t,n)}}function Ub(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Ob(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;a.uniform2iv(this.addr,e),Ht(t,e)}}function Bb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;a.uniform3iv(this.addr,e),Ht(t,e)}}function zb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;a.uniform4iv(this.addr,e),Ht(t,e)}}function Gb(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Hb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;a.uniform2uiv(this.addr,e),Ht(t,e)}}function kb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;a.uniform3uiv(this.addr,e),Ht(t,e)}}function Vb(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;a.uniform4uiv(this.addr,e),Ht(t,e)}}function jb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(Nd.compareFunction=t.isReversedDepthBuffer()?Dl:Il,r=Nd):r=Np,t.setTexture2D(e||r,i)}function $b(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Up,i)}function qb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Op,i)}function Wb(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fp,i)}function Xb(a){switch(a){case 5126:return Rb;case 35664:return Pb;case 35665:return Ib;case 35666:return Db;case 35674:return Lb;case 35675:return Nb;case 35676:return Fb;case 5124:case 35670:return Ub;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return Gb;case 36294:return Hb;case 36295:return kb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Wb}}function Yb(a,e){a.uniform1fv(this.addr,e)}function Jb(a,e){let t=Ki(e,this.size,2);a.uniform2fv(this.addr,t)}function Zb(a,e){let t=Ki(e,this.size,3);a.uniform3fv(this.addr,t)}function Kb(a,e){let t=Ki(e,this.size,4);a.uniform4fv(this.addr,t)}function Qb(a,e){let t=Ki(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function ev(a,e){let t=Ki(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function tv(a,e){let t=Ki(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function nv(a,e){a.uniform1iv(this.addr,e)}function av(a,e){a.uniform2iv(this.addr,e)}function iv(a,e){a.uniform3iv(this.addr,e)}function rv(a,e){a.uniform4iv(this.addr,e)}function sv(a,e){a.uniform1uiv(this.addr,e)}function ov(a,e){a.uniform2uiv(this.addr,e)}function lv(a,e){a.uniform3uiv(this.addr,e)}function cv(a,e){a.uniform4uiv(this.addr,e)}function dv(a,e,t){let n=this.cache,i=e.length,r=zl(t,i);Gt(n,r)||(a.uniform1iv(this.addr,r),Ht(n,r));let s;this.type===a.SAMPLER_2D_SHADOW?s=Nd:s=Np;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||s,r[o])}function uv(a,e,t){let n=this.cache,i=e.length,r=zl(t,i);Gt(n,r)||(a.uniform1iv(this.addr,r),Ht(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Up,r[s])}function hv(a,e,t){let n=this.cache,i=e.length,r=zl(t,i);Gt(n,r)||(a.uniform1iv(this.addr,r),Ht(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Op,r[s])}function pv(a,e,t){let n=this.cache,i=e.length,r=zl(t,i);Gt(n,r)||(a.uniform1iv(this.addr,r),Ht(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Fp,r[s])}function fv(a){switch(a){case 5126:return Yb;case 35664:return Jb;case 35665:return Zb;case 35666:return Kb;case 35674:return Qb;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return av;case 35668:case 35672:return iv;case 35669:case 35673:return rv;case 5125:return sv;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return pv}}var Fd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xb(t.type)}},Ud=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}},Od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Dd=/(\w+)(\])?(\[|\.)?/g;function _p(a,e){a.seq.push(e),a.map[e.id]=e}function mv(a,e,t){let n=a.name,i=n.length;for(Dd.lastIndex=0;;){let r=Dd.exec(n),s=Dd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){_p(t,c===void 0?new Fd(o,a,e):new Ud(o,a,e));break}else{let p=t.map[o];p===void 0&&(p=new Od(o),_p(t,p)),t=p}}}var Zi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);mv(o,l,this)}let i=[],r=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let s=e[i];s.id in t&&n.push(s)}return n}};function yp(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var gv=37297,xv=0;function bv(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){let o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}var Sp=new nt;function vv(a){ut._getMatrix(Sp,ut.workingColorSpace,a);let e=`mat3( ${Sp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(a)){case wr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Mp(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),r=(a.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bv(a.getShaderSource(e),o)}else return r}function _v(a,e){let t=vv(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var yv={[ld]:"Linear",[cd]:"Reinhard",[dd]:"Cineon",[Kr]:"ACESFilmic",[hd]:"AgX",[pd]:"Neutral",[ud]:"Custom"};function Sv(a,e){let t=yv[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nl=new B;function Mv(){ut.getLuminanceCoefficients(Nl);let a=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function Av(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=a.getActiveAttrib(e,i),s=r.name,o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ds(a){return a!==""}function Ep(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ap(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(a){return a.replace(wv,Rv)}var Cv=new Map;function Rv(a,e){let t=rt[e];if(t===void 0){let n=Cv.get(e);if(n!==void 0)t=rt[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bd(t)}var Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(a){return a.replace(Pv,Iv)}function Iv(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wp(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}var Dv={[Zr]:"SHADOWMAP_TYPE_PCF",[$i]:"SHADOWMAP_TYPE_VSM"};function Lv(a){return Dv[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nv={[Va]:"ENVMAP_TYPE_CUBE",[li]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE_UV"};function Fv(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Nv[a.envMapMode]||"ENVMAP_TYPE_CUBE"}var Uv={[li]:"ENVMAP_MODE_REFRACTION"};function Ov(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bv={[od]:"ENVMAP_BLENDING_MULTIPLY",[jh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function zv(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Bv[a.combine]||"ENVMAP_BLENDING_NONE"}function Gv(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hv(a,e,t,n){let i=a.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,l=Lv(t),c=Fv(t),d=Ov(t),p=zv(t),u=Gv(t),f=Ev(t),x=Av(r),_=i.createProgram(),m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ds).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ds).join(`
`),h.length>0&&(h+=`
`)):(m=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),h=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?rt.tonemapping_pars_fragment:"",t.toneMapping!==$n?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),Mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),s=Bd(s),s=Ep(s,t),s=Ap(s,t),o=Bd(o),o=Ep(o,t),o=Ap(o,t),s=Tp(s),o=Tp(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=b+m+s,v=b+h+o,E=yp(i,i.VERTEX_SHADER,M),S=yp(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(a.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(E)||"",R=i.getShaderInfoLog(S)||"",U=L.trim(),F=I.trim(),H=R.trim(),j=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,_,E,S);else{let W=Mp(i,E,"vertex"),ae=Mp(i,S,"fragment");et("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+W+`
`+ae)}else U!==""?Je("WebGLProgram: Program Info Log:",U):(F===""||H==="")&&(Y=!1);Y&&(P.diagnostics={runnable:j,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:h}})}i.deleteShader(E),i.deleteShader(S),g=new Zi(i,_),A=Tv(i,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,gv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}var kv=0,zd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gd(e),t.set(e,n)),n}},Gd=class{constructor(e){this.id=kv++,this.code=e,this.usedTimes=0}};function Vv(a){return a===qa||a===rs||a===ss}function jv(a,e,t,n,i,r){let s=new Pr,o=new zd,l=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,A,C,P,L,I){let R=P.fog,U=L.geometry,F=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,j=e.get(g.envMap||F,H),Y=j&&j.mapping===Qr?j.image.height:null,W=f[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&Je("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let ae=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ye=ae!==void 0?ae.length:0,$=0;U.morphAttributes.position!==void 0&&($=1),U.morphAttributes.normal!==void 0&&($=2),U.morphAttributes.color!==void 0&&($=3);let ce,be,Se,q;if(W){let At=ca[W];ce=At.vertexShader,be=At.fragmentShader}else{ce=g.vertexShader,be=g.fragmentShader;let At=o.getVertexShaderStage(g),bt=o.getFragmentShaderStage(g);o.update(g,At,bt),Se=At.id,q=bt.id}let V=a.getRenderTarget(),de=a.state.buffers.depth.getReversed(),pe=L.isInstancedMesh===!0,fe=L.isBatchedMesh===!0,O=!!g.map,oe=!!g.matcap,me=!!j,ve=!!g.aoMap,_e=!!g.lightMap,Re=!!g.bumpMap&&g.wireframe===!1,he=!!g.normalMap,ee=!!g.displacementMap,Q=!!g.emissiveMap,se=!!g.metalnessMap,ge=!!g.roughnessMap,N=g.anisotropy>0,Be=g.clearcoat>0,Ee=g.dispersion>0,D=g.retroreflectivity>0,y=g.iridescence>0,z=g.sheen>0,X=g.transmission>0,ne=N&&!!g.anisotropyMap,Me=Be&&!!g.clearcoatMap,Ae=Be&&!!g.clearcoatNormalMap,re=Be&&!!g.clearcoatRoughnessMap,le=y&&!!g.iridescenceMap,Te=y&&!!g.iridescenceThicknessMap,ke=z&&!!g.sheenColorMap,Ce=z&&!!g.sheenRoughnessMap,we=!!g.specularMap,We=!!g.specularColorMap,Ke=!!g.specularIntensityMap,at=X&&!!g.transmissionMap,k=X&&!!g.thicknessMap,Pe=!!g.gradientMap,ue=!!g.alphaMap,Ie=g.alphaTest>0,Fe=!!g.alphaHash,xe=!!g.extensions,Xe=$n;g.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Xe=a.toneMapping);let Ve={shaderID:W,shaderType:g.type,shaderName:g.name,vertexShader:ce,fragmentShader:be,defines:g.defines,customVertexShaderID:Se,customFragmentShaderID:q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:fe,batchingColor:fe&&L._colorsTexture!==null,instancing:pe,instancingColor:pe&&L.instanceColor!==null,instancingMorph:pe&&L.morphTexture!==null,outputColorSpace:V===null?a.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:O,matcap:oe,envMap:me,envMapMode:me&&j.mapping,envMapCubeUVHeight:Y,aoMap:ve,lightMap:_e,bumpMap:Re,normalMap:he,displacementMap:ee,emissiveMap:Q,normalMapObjectSpace:he&&g.normalMapType===Xh,normalMapTangentSpace:he&&g.normalMapType===Pl,packedNormalMap:he&&g.normalMapType===Pl&&Vv(g.normalMap.format),metalnessMap:se,roughnessMap:ge,anisotropy:N,anisotropyMap:ne,clearcoat:Be,clearcoatMap:Me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:re,dispersion:Ee,retroreflection:D,iridescence:y,iridescenceMap:le,iridescenceThicknessMap:Te,sheen:z,sheenColorMap:ke,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:We,specularIntensityMap:Ke,transmission:X,transmissionMap:at,thicknessMap:k,gradientMap:Pe,opaque:g.transparent===!1&&g.blending===qi&&g.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ie,alphaHash:Fe,combine:g.combine,mapUv:O&&x(g.map.channel),aoMapUv:ve&&x(g.aoMap.channel),lightMapUv:_e&&x(g.lightMap.channel),bumpMapUv:Re&&x(g.bumpMap.channel),normalMapUv:he&&x(g.normalMap.channel),displacementMapUv:ee&&x(g.displacementMap.channel),emissiveMapUv:Q&&x(g.emissiveMap.channel),metalnessMapUv:se&&x(g.metalnessMap.channel),roughnessMapUv:ge&&x(g.roughnessMap.channel),anisotropyMapUv:ne&&x(g.anisotropyMap.channel),clearcoatMapUv:Me&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(g.sheenRoughnessMap.channel),specularMapUv:we&&x(g.specularMap.channel),specularColorMapUv:We&&x(g.specularColorMap.channel),specularIntensityMapUv:Ke&&x(g.specularIntensityMap.channel),transmissionMapUv:at&&x(g.transmissionMap.channel),thicknessMapUv:k&&x(g.thicknessMap.channel),alphaMapUv:ue&&x(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(he||N),vertexNormals:!!U.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(O||ue),fog:!!R,useFog:g.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||U.attributes.normal===void 0&&he===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:de,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:$,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:Xe,decodeVideoTexture:O&&g.map.isVideoTexture===!0&&ut.getTransfer(g.map.colorSpace)===_t,decodeVideoTextureEmissive:Q&&g.emissiveMap.isVideoTexture===!0&&ut.getTransfer(g.emissiveMap.colorSpace)===_t,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ln,flipSided:g.side===an,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:xe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&g.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function m(g){let A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(let C in g.defines)A.push(C),A.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(h(A,g),b(A,g),A.push(a.outputColorSpace)),A.push(g.customProgramCacheKey),A.join()}function h(g,A){g.push(A.precision),g.push(A.outputColorSpace),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.mapUv),g.push(A.alphaMapUv),g.push(A.lightMapUv),g.push(A.aoMapUv),g.push(A.bumpMapUv),g.push(A.normalMapUv),g.push(A.displacementMapUv),g.push(A.emissiveMapUv),g.push(A.metalnessMapUv),g.push(A.roughnessMapUv),g.push(A.anisotropyMapUv),g.push(A.clearcoatMapUv),g.push(A.clearcoatNormalMapUv),g.push(A.clearcoatRoughnessMapUv),g.push(A.iridescenceMapUv),g.push(A.iridescenceThicknessMapUv),g.push(A.sheenColorMapUv),g.push(A.sheenRoughnessMapUv),g.push(A.specularMapUv),g.push(A.specularColorMapUv),g.push(A.specularIntensityMapUv),g.push(A.transmissionMapUv),g.push(A.thicknessMapUv),g.push(A.combine),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numSunLights),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numSunLightShadows),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.numLightProbes),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function b(g,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function M(g){let A=f[g.type],C;if(A){let P=ca[A];C=lp.clone(P.uniforms)}else C=g.uniforms;return C}function v(g,A){let C=d.get(A);return C!==void 0?++C.usedTimes:(C=new Hv(a,A,g,i),c.push(C),d.set(A,C)),C}function E(g){if(--g.usedTimes===0){let A=c.indexOf(g);c[A]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function S(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:T}}function $v(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function qv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Cp(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Rp(){let a=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,_,m,h){let b=a[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:x,materialVariant:s(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:h},a[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=x,b.materialVariant=s(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=m,b.group=h),e++,b}function l(u,f,x,_,m,h,b){b.reversedDepth===!0&&(m=-m);let M=o(u,f,x,_,m,h);x.transmission>0?n.push(M):x.transparent===!0?i.push(M):t.push(M)}function c(u,f,x,_,m,h){let b=o(u,f,x,_,m,h);x.transmission>0?n.unshift(b):x.transparent===!0?i.unshift(b):t.unshift(b)}function d(u,f){t.length>1&&t.sort(u||qv),n.length>1&&n.sort(f||Cp),i.length>1&&i.sort(f||Cp)}function p(){for(let u=e,f=a.length;u<f;u++){let x=a[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:p,sort:d}}function Wv(){let a=new WeakMap;function e(n,i){let r=a.get(n),s;return r===void 0?(s=new Rp,a.set(n,[s])):i>=r.length?(s=new Rp,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Xv(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new He};break;case"SpotLight":t={position:new B,direction:new B,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new B,halfWidth:new B,halfHeight:new B};break}return a[e.id]=t,t}}}function Yv(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var Jv=0;function Zv(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Kv(a){let e=new Xv,t=Yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new yt,s=new yt;function o(c){let d=0,p=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,x=0,_=0,m=0,h=0,b=0,M=0,v=0,E=0,S=0,T=0,g=0,A=0,C=0;c.sort(Zv);for(let L=0,I=c.length;L<I;L++){let R=c[L],U=R.color,F=R.intensity,H=R.distance,j=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===qa?j=R.shadow.map.texture:j=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=U.r*F,p+=U.g*F,u+=U.b*F;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(R.sh.coefficients[Y],F);C++}else if(R.isSunLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,ae=t.get(R);ae.shadowIntensity=W.intensity,ae.shadowBias=W.bias,ae.shadowNormalBias=W.normalBias,ae.shadowRadius=W.radius,ae.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[x]=ae,n.sunShadowMap[x]=j;let ye=W.getViewportCount();for(let $=0;$<ye;$++)n.sunShadowMatrix[_+$]=W.getMatrix($),n.sunShadowCascade[_+$]=W._cascadeData[$];_+=ye,x++}n.sun[f]=Y,f++}else if(R.isDirectionalLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,ae=t.get(R);ae.shadowIntensity=W.intensity,ae.shadowBias=W.bias,ae.shadowNormalBias=W.normalBias,ae.shadowRadius=W.radius,ae.shadowMapSize=W.mapSize,n.directionalShadow[m]=ae,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=R.shadow.matrix,E++}n.directional[m]=Y,m++}else if(R.isSpotLight){let Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(U).multiplyScalar(F),Y.distance=H,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,n.spot[b]=Y;let W=R.shadow;if(R.map&&(n.spotLightMap[g]=R.map,g++,W.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[b]=W.matrix,R.castShadow){let ae=t.get(R);ae.shadowIntensity=W.intensity,ae.shadowBias=W.bias,ae.shadowNormalBias=W.normalBias,ae.shadowRadius=W.radius,ae.shadowMapSize=W.mapSize,n.spotShadow[b]=ae,n.spotShadowMap[b]=j,T++}b++}else if(R.isRectAreaLight){let Y=e.get(R);Y.color.copy(U).multiplyScalar(F),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=Y,M++}else if(R.isPointLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){let W=R.shadow,ae=t.get(R);ae.shadowIntensity=W.intensity,ae.shadowBias=W.bias,ae.shadowNormalBias=W.normalBias,ae.shadowRadius=W.radius,ae.shadowMapSize=W.mapSize,ae.shadowCameraNear=W.camera.near,ae.shadowCameraFar=W.camera.far,n.pointShadow[h]=ae,n.pointShadowMap[h]=j,n.pointShadowMatrix[h]=R.shadow.matrix,S++}n.point[h]=Y,h++}else if(R.isHemisphereLight){let Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(F),Y.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[v]=Y,v++}}M>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==h||P.spotLength!==b||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==x||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==T||P.numSpotMaps!==g||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=M,n.point.length=h,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+g-A,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=h,P.spotLength=b,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=x,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=T,P.numSpotMaps=g,P.numLightProbes=C,n.version=Jv++)}function l(c,d){let p=0,u=0,f=0,x=0,_=0,m=0,h=d.matrixWorldInverse;for(let b=0,M=c.length;b<M;b++){let v=c[b];if(v.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(h),p++}else if(v.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(h),u++}else if(v.isSpotLight){let E=n.spot[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(h),x++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),s.identity(),r.copy(v.matrixWorld),r.premultiply(h),s.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),_++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:n}}function Pp(a){let e=new Kv(a),t=[],n=[],i=[];function r(u){p.camera=u,t.length=0,n.length=0,i.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function Qv(a){let e=new WeakMap;function t(i,r=0){let s=e.get(i),o;return s===void 0?(o=new Pp(a),e.set(i,[o])):r>=s.length?(o=new Pp(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`,n_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],a_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Ip=new yt,cs=new B,Ld=new B;function i_(a,e,t){let n=new Hi,i=new $e,r=new $e,s=new Rt,o=new Ro,l=new Po,c={},d=t.maxTextureSize,p={[ka]:an,[an]:ka,[Ln]:Ln},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let x=new pt;x.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ye(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let h=this.type;this.render=function(S,T,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ah&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);let A=a.getRenderTarget(),C=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),L=a.state;L.setBlending(oa),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=h!==this.type;I&&T.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=S.length;R<U;R++){let F=S[R],H=F.shadow;if(H===void 0){Je("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let j=H.getFrameExtents();i.multiply(j),r.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/j.x),i.x=r.x*j.x,H.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/j.y),i.y=r.y*j.y,H.mapSize.y=r.y));let Y=a.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||I===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===$i){if(F.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new un(i.x,i.y,{format:qa,type:Wn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Ba(i.x,i.y,Nn),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=na,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=jt,H.map.depthTexture.magFilter=jt}else F.isPointLight?(H.map=new Ul(i.x),H.map.depthTexture=new vo(i.x,qn)):(H.map=new un(i.x,i.y),H.map.depthTexture=new Ba(i.x,i.y,qn)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=na,this.type===Zr?(H.map.depthTexture.compareFunction=Y?Dl:Il,H.map.depthTexture.minFilter=qt,H.map.depthTexture.magFilter=qt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=jt,H.map.depthTexture.magFilter=jt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let W=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();F.isPointLight!==!0&&H.updateMatrices(F,g);for(let ae=0;ae<W;ae++){let ye=H.getCamera(ae);if(F.isPointLight){let $=H.camera,ce=H.matrix,be=F.distance||$.far;be!==$.far&&($.far=be,$.updateProjectionMatrix()),cs.setFromMatrixPosition(F.matrixWorld),$.position.copy(cs),Ld.copy($.position),Ld.add(n_[ae]),$.up.copy(a_[ae]),$.lookAt(Ld),$.updateMatrixWorld(),ce.makeTranslation(-cs.x,-cs.y,-cs.z),Ip.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ip,$.coordinateSystem,$.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)a.setRenderTarget(H.map,ae),a.clear();else{ae===0&&(a.setRenderTarget(H.map),a.clear());let $=H.getViewport(ae);s.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),L.viewport(s)}n=H.getFrustum(ae),v(T,g,ye,F,this.type)}H.isPointLightShadow!==!0&&this.type===$i&&b(H,g),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,a.setRenderTarget(A,C,P)};function b(S,T){let g=e.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new un(i.x,i.y,{format:qa,type:Wn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(T,null,g,u,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(T,null,g,f,_,null)}function M(S,T,g,A){let C=null,P=g.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)C=P;else if(C=g.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=C.uuid,I=T.uuid,R=c[L];R===void 0&&(R={},c[L]=R);let U=R[I];U===void 0&&(U=C.clone(),R[I]=U,T.addEventListener("dispose",E)),C=U}if(C.visible=T.visible,C.wireframe=T.wireframe,A===$i?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:p[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=a.properties.get(C);L.light=g}return C}function v(S,T,g,A,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===$i)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,S.matrixWorld);let I=e.update(S),R=S.material;if(Array.isArray(R)){let U=I.groups;for(let F=0,H=U.length;F<H;F++){let j=U[F],Y=R[j.materialIndex];if(Y&&Y.visible){let W=M(S,Y,A,C);S.onBeforeShadow(a,S,T,g,I,W,j),a.renderBufferDirect(g,null,I,W,S,j),S.onAfterShadow(a,S,T,g,I,W,j)}}}else if(R.visible){let U=M(S,R,A,C);S.onBeforeShadow(a,S,T,g,I,U,null),a.renderBufferDirect(g,null,I,U,S,null),S.onAfterShadow(a,S,T,g,I,U,null)}}let L=S.children;for(let I=0,R=L.length;I<R;I++)v(L[I],T,g,A,C)}function E(S){S.target.removeEventListener("dispose",E);for(let g in c){let A=c[g],C=S.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function r_(a,e){function t(){let k=!1,Pe=new Rt,ue=null,Ie=new Rt(0,0,0,0);return{setMask:function(Fe){ue!==Fe&&!k&&(a.colorMask(Fe,Fe,Fe,Fe),ue=Fe)},setLocked:function(Fe){k=Fe},setClear:function(Fe,xe,Xe,Ve,At){At===!0&&(Fe*=Ve,xe*=Ve,Xe*=Ve),Pe.set(Fe,xe,Xe,Ve),Ie.equals(Pe)===!1&&(a.clearColor(Fe,xe,Xe,Ve),Ie.copy(Pe))},reset:function(){k=!1,ue=null,Ie.set(-1,0,0,0)}}}function n(){let k=!1,Pe=!1,ue=null,Ie=null,Fe=null;return{setReversed:function(xe){if(Pe!==xe){let Xe=e.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Pe=xe;let Ve=Fe;Fe=null,this.setClear(Ve)}},getReversed:function(){return Pe},setTest:function(xe){xe?V(a.DEPTH_TEST):de(a.DEPTH_TEST)},setMask:function(xe){ue!==xe&&!k&&(a.depthMask(xe),ue=xe)},setFunc:function(xe){if(Pe&&(xe=sp[xe]),Ie!==xe){switch(xe){case no:a.depthFunc(a.NEVER);break;case ao:a.depthFunc(a.ALWAYS);break;case io:a.depthFunc(a.LESS);break;case Ni:a.depthFunc(a.LEQUAL);break;case ro:a.depthFunc(a.EQUAL);break;case so:a.depthFunc(a.GEQUAL);break;case oo:a.depthFunc(a.GREATER);break;case lo:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=xe}},setLocked:function(xe){k=xe},setClear:function(xe){Fe!==xe&&(Fe=xe,Pe&&(xe=1-xe),a.clearDepth(xe))},reset:function(){k=!1,ue=null,Ie=null,Fe=null,Pe=!1}}}function i(){let k=!1,Pe=null,ue=null,Ie=null,Fe=null,xe=null,Xe=null,Ve=null,At=null;return{setTest:function(bt){k||(bt?V(a.STENCIL_TEST):de(a.STENCIL_TEST))},setMask:function(bt){Pe!==bt&&!k&&(a.stencilMask(bt),Pe=bt)},setFunc:function(bt,Bn,Kn){(ue!==bt||Ie!==Bn||Fe!==Kn)&&(a.stencilFunc(bt,Bn,Kn),ue=bt,Ie=Bn,Fe=Kn)},setOp:function(bt,Bn,Kn){(xe!==bt||Xe!==Bn||Ve!==Kn)&&(a.stencilOp(bt,Bn,Kn),xe=bt,Xe=Bn,Ve=Kn)},setLocked:function(bt){k=bt},setClear:function(bt){At!==bt&&(a.clearStencil(bt),At=bt)},reset:function(){k=!1,Pe=null,ue=null,Ie=null,Fe=null,xe=null,Xe=null,Ve=null,At=null}}}let r=new t,s=new n,o=new i,l=new WeakMap,c=new WeakMap,d={},p={},u={},f=new WeakMap,x=[],_=null,m=!1,h=null,b=null,M=null,v=null,E=null,S=null,T=null,g=new He(0,0,0),A=0,C=!1,P=null,L=null,I=null,R=null,U=null,F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=j>=2);let W=null,ae={},ye=a.getParameter(a.SCISSOR_BOX),$=a.getParameter(a.VIEWPORT),ce=new Rt().fromArray(ye),be=new Rt().fromArray($);function Se(k,Pe,ue,Ie){let Fe=new Uint8Array(4),xe=a.createTexture();a.bindTexture(k,xe),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<ue;Xe++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(Pe,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Fe):a.texImage2D(Pe+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Fe);return xe}let q={};q[a.TEXTURE_2D]=Se(a.TEXTURE_2D,a.TEXTURE_2D,1),q[a.TEXTURE_CUBE_MAP]=Se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[a.TEXTURE_2D_ARRAY]=Se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),q[a.TEXTURE_3D]=Se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),V(a.DEPTH_TEST),s.setFunc(Ni),Re(!1),he(td),V(a.CULL_FACE),ve(oa);function V(k){d[k]!==!0&&(a.enable(k),d[k]=!0)}function de(k){d[k]!==!1&&(a.disable(k),d[k]=!1)}function pe(k,Pe){return u[k]!==Pe?(a.bindFramebuffer(k,Pe),u[k]=Pe,k===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=Pe),k===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=Pe),!0):!1}function fe(k,Pe){let ue=x,Ie=!1;if(k){ue=f.get(Pe),ue===void 0&&(ue=[],f.set(Pe,ue));let Fe=k.textures;if(ue.length!==Fe.length||ue[0]!==a.COLOR_ATTACHMENT0){for(let xe=0,Xe=Fe.length;xe<Xe;xe++)ue[xe]=a.COLOR_ATTACHMENT0+xe;ue.length=Fe.length,Ie=!0}}else ue[0]!==a.BACK&&(ue[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(ue)}function O(k){return _!==k?(a.useProgram(k),_=k,!0):!1}let oe={[oi]:a.FUNC_ADD,[wh]:a.FUNC_SUBTRACT,[Ch]:a.FUNC_REVERSE_SUBTRACT};oe[Rh]=a.MIN,oe[Ph]=a.MAX;let me={[Ih]:a.ZERO,[Dh]:a.ONE,[Lh]:a.SRC_COLOR,[rd]:a.SRC_ALPHA,[zh]:a.SRC_ALPHA_SATURATE,[Oh]:a.DST_COLOR,[Fh]:a.DST_ALPHA,[Nh]:a.ONE_MINUS_SRC_COLOR,[sd]:a.ONE_MINUS_SRC_ALPHA,[Bh]:a.ONE_MINUS_DST_COLOR,[Uh]:a.ONE_MINUS_DST_ALPHA,[Gh]:a.CONSTANT_COLOR,[Hh]:a.ONE_MINUS_CONSTANT_COLOR,[kh]:a.CONSTANT_ALPHA,[Vh]:a.ONE_MINUS_CONSTANT_ALPHA};function ve(k,Pe,ue,Ie,Fe,xe,Xe,Ve,At,bt){if(k===oa){m===!0&&(de(a.BLEND),m=!1);return}if(m===!1&&(V(a.BLEND),m=!0),k!==Th){if(k!==h||bt!==C){if((b!==oi||E!==oi)&&(a.blendEquation(a.FUNC_ADD),b=oi,E=oi),bt)switch(k){case qi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case nd:a.blendFunc(a.ONE,a.ONE);break;case ad:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case id:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:et("WebGLState: Invalid blending: ",k);break}else switch(k){case qi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case nd:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ad:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case id:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",k);break}M=null,v=null,S=null,T=null,g.set(0,0,0),A=0,h=k,C=bt}return}Fe=Fe||Pe,xe=xe||ue,Xe=Xe||Ie,(Pe!==b||Fe!==E)&&(a.blendEquationSeparate(oe[Pe],oe[Fe]),b=Pe,E=Fe),(ue!==M||Ie!==v||xe!==S||Xe!==T)&&(a.blendFuncSeparate(me[ue],me[Ie],me[xe],me[Xe]),M=ue,v=Ie,S=xe,T=Xe),(Ve.equals(g)===!1||At!==A)&&(a.blendColor(Ve.r,Ve.g,Ve.b,At),g.copy(Ve),A=At),h=k,C=!1}function _e(k,Pe){k.side===Ln?de(a.CULL_FACE):V(a.CULL_FACE);let ue=k.side===an;Pe&&(ue=!ue),Re(ue),k.blending===qi&&k.transparent===!1?ve(oa):ve(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ie=k.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?V(a.SAMPLE_ALPHA_TO_COVERAGE):de(a.SAMPLE_ALPHA_TO_COVERAGE)}function Re(k){P!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),P=k)}function he(k){k!==Mh?(V(a.CULL_FACE),k!==L&&(k===td?a.cullFace(a.BACK):k===Eh?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):de(a.CULL_FACE),L=k}function ee(k){k!==I&&(H&&a.lineWidth(k),I=k)}function Q(k,Pe,ue){k?(V(a.POLYGON_OFFSET_FILL),(R!==Pe||U!==ue)&&(R=Pe,U=ue,s.getReversed()&&(Pe=-Pe),a.polygonOffset(Pe,ue))):de(a.POLYGON_OFFSET_FILL)}function se(k){k?V(a.SCISSOR_TEST):de(a.SCISSOR_TEST)}function ge(k){k===void 0&&(k=a.TEXTURE0+F-1),W!==k&&(a.activeTexture(k),W=k)}function N(k,Pe,ue){ue===void 0&&(W===null?ue=a.TEXTURE0+F-1:ue=W);let Ie=ae[ue];Ie===void 0&&(Ie={type:void 0,texture:void 0},ae[ue]=Ie),(Ie.type!==k||Ie.texture!==Pe)&&(W!==ue&&(a.activeTexture(ue),W=ue),a.bindTexture(k,Pe||q[k]),Ie.type=k,Ie.texture=Pe)}function Be(){let k=ae[W];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ee(){try{a.compressedTexImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function D(){try{a.compressedTexImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function y(){try{a.texSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function z(){try{a.texSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function X(){try{a.compressedTexSubImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function ne(){try{a.compressedTexSubImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function Me(){try{a.texStorage2D(...arguments)}catch(k){et("WebGLState:",k)}}function Ae(){try{a.texStorage3D(...arguments)}catch(k){et("WebGLState:",k)}}function re(){try{a.texImage2D(...arguments)}catch(k){et("WebGLState:",k)}}function le(){try{a.texImage3D(...arguments)}catch(k){et("WebGLState:",k)}}function Te(k){return p[k]!==void 0?p[k]:a.getParameter(k)}function ke(k,Pe){p[k]!==Pe&&(a.pixelStorei(k,Pe),p[k]=Pe)}function Ce(k){ce.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),ce.copy(k))}function we(k){be.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),be.copy(k))}function We(k,Pe){let ue=c.get(Pe);ue===void 0&&(ue=new WeakMap,c.set(Pe,ue));let Ie=ue.get(k);Ie===void 0&&(Ie=a.getUniformBlockIndex(Pe,k.name),ue.set(k,Ie))}function Ke(k,Pe){let Ie=c.get(Pe).get(k);l.get(Pe)!==Ie&&(a.uniformBlockBinding(Pe,Ie,k.__bindingPointIndex),l.set(Pe,Ie))}function at(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),d={},p={},W=null,ae={},u={},f=new WeakMap,x=[],_=null,m=!1,h=null,b=null,M=null,v=null,E=null,S=null,T=null,g=new He(0,0,0),A=0,C=!1,P=null,L=null,I=null,R=null,U=null,ce.set(0,0,a.canvas.width,a.canvas.height),be.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:V,disable:de,bindFramebuffer:pe,drawBuffers:fe,useProgram:O,setBlending:ve,setMaterial:_e,setFlipSided:Re,setCullFace:he,setLineWidth:ee,setPolygonOffset:Q,setScissorTest:se,activeTexture:ge,bindTexture:N,unbindTexture:Be,compressedTexImage2D:Ee,compressedTexImage3D:D,texImage2D:re,texImage3D:le,pixelStorei:ke,getParameter:Te,updateUBOMapping:We,uniformBlockBinding:Ke,texStorage2D:Me,texStorage3D:Ae,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:ne,scissor:Ce,viewport:we,reset:at}}function s_(a,e,t,n,i,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap,p=new Set,u,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,y){return x?new OffscreenCanvas(D,y):Cr("canvas")}function m(D,y,z){let X=1,ne=Ee(D);if((ne.width>z||ne.height>z)&&(X=z/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Me=Math.floor(X*ne.width),Ae=Math.floor(X*ne.height);u===void 0&&(u=_(Me,Ae));let re=y?_(Me,Ae):u;return re.width=Me,re.height=Ae,re.getContext("2d").drawImage(D,0,0,Me,Ae),Je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Me+"x"+Ae+")."),re}else return"data"in D&&Je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function h(D){return D.generateMipmaps}function b(D){a.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?a.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(D,y,z,X,ne,Me=!1){if(D!==null){if(a[D]!==void 0)return a[D];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ae;X&&(Ae=e.get("EXT_texture_norm16"),Ae||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=y;if(y===a.RED&&(z===a.FLOAT&&(re=a.R32F),z===a.HALF_FLOAT&&(re=a.R16F),z===a.UNSIGNED_BYTE&&(re=a.R8),z===a.UNSIGNED_SHORT&&Ae&&(re=Ae.R16_EXT),z===a.SHORT&&Ae&&(re=Ae.R16_SNORM_EXT)),y===a.RED_INTEGER&&(z===a.UNSIGNED_BYTE&&(re=a.R8UI),z===a.UNSIGNED_SHORT&&(re=a.R16UI),z===a.UNSIGNED_INT&&(re=a.R32UI),z===a.BYTE&&(re=a.R8I),z===a.SHORT&&(re=a.R16I),z===a.INT&&(re=a.R32I)),y===a.RG&&(z===a.FLOAT&&(re=a.RG32F),z===a.HALF_FLOAT&&(re=a.RG16F),z===a.UNSIGNED_BYTE&&(re=a.RG8),z===a.UNSIGNED_SHORT&&Ae&&(re=Ae.RG16_EXT),z===a.SHORT&&Ae&&(re=Ae.RG16_SNORM_EXT)),y===a.RG_INTEGER&&(z===a.UNSIGNED_BYTE&&(re=a.RG8UI),z===a.UNSIGNED_SHORT&&(re=a.RG16UI),z===a.UNSIGNED_INT&&(re=a.RG32UI),z===a.BYTE&&(re=a.RG8I),z===a.SHORT&&(re=a.RG16I),z===a.INT&&(re=a.RG32I)),y===a.RGB_INTEGER&&(z===a.UNSIGNED_BYTE&&(re=a.RGB8UI),z===a.UNSIGNED_SHORT&&(re=a.RGB16UI),z===a.UNSIGNED_INT&&(re=a.RGB32UI),z===a.BYTE&&(re=a.RGB8I),z===a.SHORT&&(re=a.RGB16I),z===a.INT&&(re=a.RGB32I)),y===a.RGBA_INTEGER&&(z===a.UNSIGNED_BYTE&&(re=a.RGBA8UI),z===a.UNSIGNED_SHORT&&(re=a.RGBA16UI),z===a.UNSIGNED_INT&&(re=a.RGBA32UI),z===a.BYTE&&(re=a.RGBA8I),z===a.SHORT&&(re=a.RGBA16I),z===a.INT&&(re=a.RGBA32I)),y===a.RGB&&(z===a.UNSIGNED_SHORT&&Ae&&(re=Ae.RGB16_EXT),z===a.SHORT&&Ae&&(re=Ae.RGB16_SNORM_EXT),z===a.UNSIGNED_INT_5_9_9_9_REV&&(re=a.RGB9_E5),z===a.UNSIGNED_INT_10F_11F_11F_REV&&(re=a.R11F_G11F_B10F)),y===a.RGBA){let le=Me?wr:ut.getTransfer(ne);z===a.FLOAT&&(re=a.RGBA32F),z===a.HALF_FLOAT&&(re=a.RGBA16F),z===a.UNSIGNED_BYTE&&(re=le===_t?a.SRGB8_ALPHA8:a.RGBA8),z===a.UNSIGNED_SHORT&&Ae&&(re=Ae.RGBA16_EXT),z===a.SHORT&&Ae&&(re=Ae.RGBA16_SNORM_EXT),z===a.UNSIGNED_SHORT_4_4_4_4&&(re=a.RGBA4),z===a.UNSIGNED_SHORT_5_5_5_1&&(re=a.RGB5_A1)}return(re===a.R16F||re===a.R32F||re===a.RG16F||re===a.RG32F||re===a.RGBA16F||re===a.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function E(D,y){let z;return D?y===null||y===qn||y===Xi?z=a.DEPTH24_STENCIL8:y===Nn?z=a.DEPTH32F_STENCIL8:y===Wi&&(z=a.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qn||y===Xi?z=a.DEPTH_COMPONENT24:y===Nn?z=a.DEPTH_COMPONENT32F:y===Wi&&(z=a.DEPTH_COMPONENT16),z}function S(D,y){return h(D)===!0||D.isFramebufferTexture&&D.minFilter!==jt&&D.minFilter!==qt?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function T(D){let y=D.target;y.removeEventListener("dispose",T),A(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&p.delete(y)}function g(D){let y=D.target;y.removeEventListener("dispose",g),P(y)}function A(D){let y=n.get(D);if(y.__webglInit===void 0)return;let z=D.source,X=f.get(z);if(X){let ne=X[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(D),Object.keys(X).length===0&&f.delete(z)}n.remove(D)}function C(D){let y=n.get(D);a.deleteTexture(y.__webglTexture);let z=D.source,X=f.get(z);delete X[y.__cacheKey],s.memory.textures--}function P(D){let y=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let ne=0;ne<y.__webglFramebuffer[X].length;ne++)a.deleteFramebuffer(y.__webglFramebuffer[X][ne]);else a.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)a.deleteFramebuffer(y.__webglFramebuffer[X]);else a.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&a.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&a.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&a.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&a.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=D.textures;for(let X=0,ne=z.length;X<ne;X++){let Me=n.get(z[X]);Me.__webglTexture&&(a.deleteTexture(Me.__webglTexture),s.memory.textures--),n.remove(z[X])}n.remove(D)}let L=0;function I(){L=0}function R(){return L}function U(D){L=D}function F(){let D=L;return D>=i.maxTextures&&Je("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,D}function H(D){let y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function j(D,y){let z=n.get(D);if(D.isVideoTexture&&N(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&z.__version!==D.version){let X=D.image;if(X===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{de(z,D,y);return}}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,z.__webglTexture,a.TEXTURE0+y)}function Y(D,y){let z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){de(z,D,y);return}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,z.__webglTexture,a.TEXTURE0+y)}function W(D,y){let z=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){de(z,D,y);return}t.bindTexture(a.TEXTURE_3D,z.__webglTexture,a.TEXTURE0+y)}function ae(D,y){let z=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&z.__version!==D.version){pe(z,D,y);return}t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+y)}let ye={[Fi]:a.REPEAT,[ta]:a.CLAMP_TO_EDGE,[co]:a.MIRRORED_REPEAT},$={[jt]:a.NEAREST,[qh]:a.NEAREST_MIPMAP_NEAREST,[es]:a.NEAREST_MIPMAP_LINEAR,[qt]:a.LINEAR,[qo]:a.LINEAR_MIPMAP_NEAREST,[ja]:a.LINEAR_MIPMAP_LINEAR},ce={[Jh]:a.NEVER,[tp]:a.ALWAYS,[Zh]:a.LESS,[Il]:a.LEQUAL,[Kh]:a.EQUAL,[Dl]:a.GEQUAL,[Qh]:a.GREATER,[ep]:a.NOTEQUAL};function be(D,y){if(y.type===Nn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===qt||y.magFilter===qo||y.magFilter===es||y.magFilter===ja||y.minFilter===qt||y.minFilter===qo||y.minFilter===es||y.minFilter===ja)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(D,a.TEXTURE_WRAP_S,ye[y.wrapS]),a.texParameteri(D,a.TEXTURE_WRAP_T,ye[y.wrapT]),(D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY)&&a.texParameteri(D,a.TEXTURE_WRAP_R,ye[y.wrapR]),a.texParameteri(D,a.TEXTURE_MAG_FILTER,$[y.magFilter]),a.texParameteri(D,a.TEXTURE_MIN_FILTER,$[y.minFilter]),y.compareFunction&&(a.texParameteri(D,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(D,a.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===jt||y.minFilter!==es&&y.minFilter!==ja||y.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Se(D,y){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",T));let X=y.source,ne=f.get(X);ne===void 0&&(ne={},f.set(X,ne));let Me=H(y);if(Me!==D.__cacheKey){ne[Me]===void 0&&(ne[Me]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ne[Me].usedTimes++;let Ae=ne[D.__cacheKey];Ae!==void 0&&(ne[D.__cacheKey].usedTimes--,Ae.usedTimes===0&&C(y)),D.__cacheKey=Me,D.__webglTexture=ne[Me].texture}return z}function q(D,y,z){return Math.floor(Math.floor(D/z)/y)}function V(D,y,z,X){let Me=D.updateRanges;if(Me.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,y.width,y.height,z,X,y.data);else{Me.sort((ke,Ce)=>ke.start-Ce.start);let Ae=0;for(let ke=1;ke<Me.length;ke++){let Ce=Me[Ae],we=Me[ke],We=Ce.start+Ce.count,Ke=q(we.start,y.width,4),at=q(Ce.start,y.width,4);we.start<=We+1&&Ke===at&&q(we.start+we.count-1,y.width,4)===Ke?Ce.count=Math.max(Ce.count,we.start+we.count-Ce.start):(++Ae,Me[Ae]=we)}Me.length=Ae+1;let re=t.getParameter(a.UNPACK_ROW_LENGTH),le=t.getParameter(a.UNPACK_SKIP_PIXELS),Te=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,y.width);for(let ke=0,Ce=Me.length;ke<Ce;ke++){let we=Me[ke],We=Math.floor(we.start/4),Ke=Math.ceil(we.count/4),at=We%y.width,k=Math.floor(We/y.width),Pe=Ke,ue=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,at),t.pixelStorei(a.UNPACK_SKIP_ROWS,k),t.texSubImage2D(a.TEXTURE_2D,0,at,k,Pe,ue,z,X,y.data)}D.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,re),t.pixelStorei(a.UNPACK_SKIP_PIXELS,le),t.pixelStorei(a.UNPACK_SKIP_ROWS,Te)}}function de(D,y,z){let X=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=a.TEXTURE_3D);let ne=Se(D,y),Me=y.source;t.bindTexture(X,D.__webglTexture,a.TEXTURE0+z);let Ae=n.get(Me);if(Me.version!==Ae.__version||ne===!0){if(t.activeTexture(a.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ue=ut.getPrimaries(ut.workingColorSpace),Ie=y.colorSpace===Sa?null:ut.getPrimaries(y.colorSpace),Fe=y.colorSpace===Sa||ue===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment);let le=m(y.image,!1,i.maxTextureSize);le=Be(y,le);let Te=r.convert(y.format,y.colorSpace),ke=r.convert(y.type),Ce=v(y.internalFormat,Te,ke,y.normalized,y.colorSpace,y.isVideoTexture);be(X,y);let we,We=y.mipmaps,Ke=y.isVideoTexture!==!0,at=Ae.__version===void 0||ne===!0,k=Me.dataReady,Pe=S(y,le);if(y.isDepthTexture)Ce=E(y.format===$a,y.type),at&&(Ke?t.texStorage2D(a.TEXTURE_2D,1,Ce,le.width,le.height):t.texImage2D(a.TEXTURE_2D,0,Ce,le.width,le.height,0,Te,ke,null));else if(y.isDataTexture)if(We.length>0){Ke&&at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,We[0].width,We[0].height);for(let ue=0,Ie=We.length;ue<Ie;ue++)we=We[ue],Ke?k&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,we.width,we.height,Te,ke,we.data):t.texImage2D(a.TEXTURE_2D,ue,Ce,we.width,we.height,0,Te,ke,we.data);y.generateMipmaps=!1}else Ke?(at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,le.width,le.height),k&&V(y,le,Te,ke)):t.texImage2D(a.TEXTURE_2D,0,Ce,le.width,le.height,0,Te,ke,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Ce,We[0].width,We[0].height,le.depth);for(let ue=0,Ie=We.length;ue<Ie;ue++)if(we=We[ue],y.format!==Fn)if(Te!==null)if(Ke){if(k)if(y.layerUpdates.size>0){let Fe=wd(we.width,we.height,y.format,y.type);for(let xe of y.layerUpdates){let Xe=we.data.subarray(xe*Fe/we.data.BYTES_PER_ELEMENT,(xe+1)*Fe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,xe,we.width,we.height,1,Te,Xe)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,le.depth,Te,we.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ue,Ce,we.width,we.height,le.depth,0,we.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,le.depth,Te,ke,we.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ue,Ce,we.width,we.height,le.depth,0,Te,ke,we.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ke&&at&&t.texStorage2D(a.TEXTURE_2D,Pe,Ce,We[0].width,We[0].height);for(let ue=0,Ie=We.length;ue<Ie;ue++)we=We[ue],y.format!==Fn?Te!==null?Ke?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,ue,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(a.TEXTURE_2D,ue,Ce,we.width,we.height,0,we.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?k&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,we.width,we.height,Te,ke,we.data):t.texImage2D(a.TEXTURE_2D,ue,Ce,we.width,we.height,0,Te,ke,we.data)}else if(y.isDataArrayTexture)if(Ke){if(at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Pe,Ce,le.width,le.height,le.depth),k)if(y.layerUpdates.size>0){let ue=wd(le.width,le.height,y.format,y.type);for(let Ie of y.layerUpdates){let Fe=le.data.subarray(Ie*ue/le.data.BYTES_PER_ELEMENT,(Ie+1)*ue/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ie,le.width,le.height,1,Te,ke,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,ke,le.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,Te,ke,le.data);else if(y.isData3DTexture)Ke?(at&&t.texStorage3D(a.TEXTURE_3D,Pe,Ce,le.width,le.height,le.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,ke,le.data)):t.texImage3D(a.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,Te,ke,le.data);else if(y.isFramebufferTexture){if(at)if(Ke)t.texStorage2D(a.TEXTURE_2D,Pe,Ce,le.width,le.height);else{let ue=le.width,Ie=le.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(a.TEXTURE_2D,Fe,Ce,ue,Ie,0,Te,ke,null),ue>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in a){let ue=a.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),le.parentNode!==ue){ue.appendChild(le),p.add(y),ue.onpaint=Ie=>{let Fe=Ie.changedElements;for(let xe of p)Fe.includes(xe.image)&&(xe.needsUpdate=!0)},ue.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,le);else{let Fe=a.RGBA,xe=a.RGBA,Xe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Fe,xe,Xe,le)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(We.length>0){if(Ke&&at){let ue=Ee(We[0]);t.texStorage2D(a.TEXTURE_2D,Pe,Ce,ue.width,ue.height)}for(let ue=0,Ie=We.length;ue<Ie;ue++)we=We[ue],Ke?k&&t.texSubImage2D(a.TEXTURE_2D,ue,0,0,Te,ke,we):t.texImage2D(a.TEXTURE_2D,ue,Ce,Te,ke,we);y.generateMipmaps=!1}else if(Ke){if(at){let ue=Ee(le);t.texStorage2D(a.TEXTURE_2D,Pe,Ce,ue.width,ue.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Te,ke,le)}else t.texImage2D(a.TEXTURE_2D,0,Ce,Te,ke,le);h(y)&&b(X),Ae.__version=Me.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function pe(D,y,z){if(y.image.length!==6)return;let X=Se(D,y),ne=y.source;t.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+z);let Me=n.get(ne);if(ne.version!==Me.__version||X===!0){t.activeTexture(a.TEXTURE0+z);let Ae=ut.getPrimaries(ut.workingColorSpace),re=y.colorSpace===Sa?null:ut.getPrimaries(y.colorSpace),le=y.colorSpace===Sa||Ae===re?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,ke=y.image[0]&&y.image[0].isDataTexture,Ce=[];for(let xe=0;xe<6;xe++)!Te&&!ke?Ce[xe]=m(y.image[xe],!0,i.maxCubemapSize):Ce[xe]=ke?y.image[xe].image:y.image[xe],Ce[xe]=Be(y,Ce[xe]);let we=Ce[0],We=r.convert(y.format,y.colorSpace),Ke=r.convert(y.type),at=v(y.internalFormat,We,Ke,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Pe=Me.__version===void 0||X===!0,ue=ne.dataReady,Ie=S(y,we);be(a.TEXTURE_CUBE_MAP,y);let Fe;if(Te){k&&Pe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,at,we.width,we.height);for(let xe=0;xe<6;xe++){Fe=Ce[xe].mipmaps;for(let Xe=0;Xe<Fe.length;Xe++){let Ve=Fe[Xe];y.format!==Fn?We!==null?k?ue&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,Ve.width,Ve.height,We,Ve.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,at,Ve.width,Ve.height,0,Ve.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ue&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,0,0,Ve.width,Ve.height,We,Ke,Ve.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe,at,Ve.width,Ve.height,0,We,Ke,Ve.data)}}}else{if(Fe=y.mipmaps,k&&Pe){Fe.length>0&&Ie++;let xe=Ee(Ce[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,at,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(ke){k?ue&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ce[xe].width,Ce[xe].height,We,Ke,Ce[xe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,Ce[xe].width,Ce[xe].height,0,We,Ke,Ce[xe].data);for(let Xe=0;Xe<Fe.length;Xe++){let At=Fe[Xe].image[xe].image;k?ue&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,At.width,At.height,We,Ke,At.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,at,At.width,At.height,0,We,Ke,At.data)}}else{k?ue&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,We,Ke,Ce[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,at,We,Ke,Ce[xe]);for(let Xe=0;Xe<Fe.length;Xe++){let Ve=Fe[Xe];k?ue&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,0,0,We,Ke,Ve.image[xe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Xe+1,at,We,Ke,Ve.image[xe])}}}h(y)&&b(a.TEXTURE_CUBE_MAP),Me.__version=ne.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function fe(D,y,z,X,ne,Me){let Ae=r.convert(z.format,z.colorSpace),re=r.convert(z.type),le=v(z.internalFormat,Ae,re,z.normalized,z.colorSpace),Te=n.get(y),ke=n.get(z);if(ke.__renderTarget=y,!Te.__hasExternalTextures){let Ce=Math.max(1,y.width>>Me),we=Math.max(1,y.height>>Me);ne===a.TEXTURE_3D||ne===a.TEXTURE_2D_ARRAY?t.texImage3D(ne,Me,le,Ce,we,y.depth,0,Ae,re,null):t.texImage2D(ne,Me,le,Ce,we,0,Ae,re,null)}t.bindFramebuffer(a.FRAMEBUFFER,D),ge(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,X,ne,ke.__webglTexture,0,se(y)):(ne===a.TEXTURE_2D||ne>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,X,ne,ke.__webglTexture,Me),t.bindFramebuffer(a.FRAMEBUFFER,null)}function O(D,y,z){if(a.bindRenderbuffer(a.RENDERBUFFER,D),y.depthBuffer){let X=y.depthTexture,ne=X&&X.isDepthTexture?X.type:null,Me=E(y.stencilBuffer,ne),Ae=y.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ge(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,se(y),Me,y.width,y.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,se(y),Me,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,Me,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ae,a.RENDERBUFFER,D)}else{let X=y.textures;for(let ne=0;ne<X.length;ne++){let Me=X[ne],Ae=r.convert(Me.format,Me.colorSpace),re=r.convert(Me.type),le=v(Me.internalFormat,Ae,re,Me.normalized,Me.colorSpace);ge(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,se(y),le,y.width,y.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,se(y),le,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,le,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function oe(D,y,z){let X=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(y.depthTexture);if(ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture),be(a.TEXTURE_CUBE_MAP,y.depthTexture);let Te=r.convert(y.depthTexture.format),ke=r.convert(y.depthTexture.type),Ce;y.depthTexture.format===na?Ce=a.DEPTH_COMPONENT24:y.depthTexture.format===$a&&(Ce=a.DEPTH24_STENCIL8);for(let we=0;we<6;we++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ce,y.width,y.height,0,Te,ke,null)}}else j(y.depthTexture,0);let Me=ne.__webglTexture,Ae=se(y),re=X?a.TEXTURE_CUBE_MAP_POSITIVE_X+z:a.TEXTURE_2D,le=y.depthTexture.format===$a?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(y.depthTexture.format===na)ge(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,le,re,Me,0,Ae):a.framebufferTexture2D(a.FRAMEBUFFER,le,re,Me,0);else if(y.depthTexture.format===$a)ge(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,le,re,Me,0,Ae):a.framebufferTexture2D(a.FRAMEBUFFER,le,re,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(D){let y=n.get(D),z=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){let X=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",ne)};X.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=X}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)oe(y.__webglFramebuffer[X],D,X);else{let X=D.texture.mipmaps;X&&X.length>0?oe(y.__webglFramebuffer[0],D,0):oe(y.__webglFramebuffer,D,0)}else if(z){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=a.createRenderbuffer(),O(y.__webglDepthbuffer[X],D,!1);else{let ne=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer[X];a.bindRenderbuffer(a.RENDERBUFFER,Me),a.framebufferRenderbuffer(a.FRAMEBUFFER,ne,a.RENDERBUFFER,Me)}}else{let X=D.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=a.createRenderbuffer(),O(y.__webglDepthbuffer,D,!1);else{let ne=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Me),a.framebufferRenderbuffer(a.FRAMEBUFFER,ne,a.RENDERBUFFER,Me)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function ve(D,y,z){let X=n.get(D);y!==void 0&&fe(X.__webglFramebuffer,D,D.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),z!==void 0&&me(D)}function _e(D){let y=D.texture,z=n.get(D),X=n.get(y);D.addEventListener("dispose",g);let ne=D.textures,Me=D.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=a.createTexture()),X.__version=y.version,s.memory.textures++),Me){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let le=0;le<y.mipmaps.length;le++)z.__webglFramebuffer[re][le]=a.createFramebuffer()}else z.__webglFramebuffer[re]=a.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)z.__webglFramebuffer[re]=a.createFramebuffer()}else z.__webglFramebuffer=a.createFramebuffer();if(Ae)for(let re=0,le=ne.length;re<le;re++){let Te=n.get(ne[re]);Te.__webglTexture===void 0&&(Te.__webglTexture=a.createTexture(),s.memory.textures++)}if(D.samples>0&&ge(D)===!1){z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<ne.length;re++){let le=ne[re];z.__webglColorRenderbuffer[re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,z.__webglColorRenderbuffer[re]);let Te=r.convert(le.format,le.colorSpace),ke=r.convert(le.type),Ce=v(le.internalFormat,Te,ke,le.normalized,le.colorSpace,D.isXRRenderTarget===!0),we=se(D);a.renderbufferStorageMultisample(a.RENDERBUFFER,we,Ce,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+re,a.RENDERBUFFER,z.__webglColorRenderbuffer[re])}a.bindRenderbuffer(a.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),O(z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Me){t.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),be(a.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)fe(z.__webglFramebuffer[re][le],D,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else fe(z.__webglFramebuffer[re],D,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);h(y)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let re=0,le=ne.length;re<le;re++){let Te=ne[re],ke=n.get(Te),Ce=a.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ke.__webglTexture),be(Ce,Te),fe(z.__webglFramebuffer,D,Te,a.COLOR_ATTACHMENT0+re,Ce,0),h(Te)&&b(Ce)}t.unbindTexture()}else{let re=a.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(re=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(re,X.__webglTexture),be(re,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)fe(z.__webglFramebuffer[le],D,y,a.COLOR_ATTACHMENT0,re,le);else fe(z.__webglFramebuffer,D,y,a.COLOR_ATTACHMENT0,re,0);h(y)&&b(re),t.unbindTexture()}D.depthBuffer&&me(D)}function Re(D){let y=D.textures;for(let z=0,X=y.length;z<X;z++){let ne=y[z];if(h(ne)){let Me=M(D),Ae=n.get(ne).__webglTexture;t.bindTexture(Me,Ae),b(Me),t.unbindTexture()}}}let he=[],ee=[];function Q(D){if(D.samples>0){if(ge(D)===!1){let y=D.textures,z=D.width,X=D.height,ne=a.COLOR_BUFFER_BIT,Me=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=n.get(D),re=y.length>1;if(re)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let le=D.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=a.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=a.STENCIL_BUFFER_BIT)),re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let ke=n.get(y[Te]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ke,0)}a.blitFramebuffer(0,0,z,X,0,0,z,X,ne,a.NEAREST),l===!0&&(he.length=0,ee.length=0,he.push(a.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(he.push(Me),ee.push(Me),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ee)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),re)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let ke=n.get(y[Te]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ae.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Te,a.TEXTURE_2D,ke,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let y=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])}}}function se(D){return Math.min(i.maxSamples,D.samples)}function ge(D){let y=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(D){let y=s.render.frame;d.get(D)!==y&&(d.set(D,y),D.update())}function Be(D,y){let z=D.colorSpace,X=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==Tr&&z!==Sa&&(ut.getTransfer(z)===_t?(X!==Fn||ne!==pn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",z)),y}function Ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=ae,this.rebindTextures=ve,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o_(a,e){function t(n,i=Sa){let r,s=ut.getTransfer(i);if(n===pn)return a.UNSIGNED_BYTE;if(n===Xo)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return a.UNSIGNED_SHORT_5_5_5_1;if(n===xd)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===md)return a.BYTE;if(n===gd)return a.SHORT;if(n===Wi)return a.UNSIGNED_SHORT;if(n===Wo)return a.INT;if(n===qn)return a.UNSIGNED_INT;if(n===Nn)return a.FLOAT;if(n===Wn)return a.HALF_FLOAT;if(n===vd)return a.ALPHA;if(n===_d)return a.RGB;if(n===Fn)return a.RGBA;if(n===na)return a.DEPTH_COMPONENT;if(n===$a)return a.DEPTH_STENCIL;if(n===Jo)return a.RED;if(n===Zo)return a.RED_INTEGER;if(n===qa)return a.RG;if(n===Ko)return a.RG_INTEGER;if(n===Qo)return a.RGBA_INTEGER;if(n===ts||n===ns||n===as||n===is)if(s===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===rl||n===sl||n===ol||n===ll||n===rs||n===cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===rl)return s===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ol)return r.COMPRESSED_R11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rs)return r.COMPRESSED_RG11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dl||n===ul||n===hl||n===pl||n===fl||n===ml||n===gl||n===xl||n===bl||n===vl||n===_l||n===yl||n===Sl||n===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return s===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===Al||n===Tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===El)return s===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Cl||n===ss||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ss)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c_=`
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

}`,Hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _n({vertexShader:l_,fragmentShader:c_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kd=class extends aa{constructor(e,t){super();let n=this,i=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,f=null,x=null,_=typeof XRWebGLBinding<"u",m=new Hd,h={},b=t.getContextAttributes(),M=null,v=null,E=[],S=[],T=new $e,g=null,A=null,C=new Zt;C.viewport=new Rt;let P=new Zt;P.viewport=new Rt;let L=[C,P],I=new Vo,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let V=E[q];return V===void 0&&(V=new zi,E[q]=V),V.getTargetRaySpace()},this.getControllerGrip=function(q){let V=E[q];return V===void 0&&(V=new zi,E[q]=V),V.getGripSpace()},this.getHand=function(q){let V=E[q];return V===void 0&&(V=new zi,E[q]=V),V.getHandSpace()};function F(q){let V=S.indexOf(q.inputSource);if(V===-1)return;let de=E[V];de!==void 0&&(de.update(q.inputSource,q.frame,c||s),de.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",j);for(let q=0;q<E.length;q++){let V=S[q];V!==null&&(S[q]=null,E[q].disconnect(V))}R=null,U=null,m.reset();for(let q in h)delete h[q];if(e.setRenderTarget(M),f=null,u=null,p=null,i=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(T.width,T.height,!1),A!==null){let q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(i,t)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,pe=null,fe=null;b.depth&&(fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=b.stencil?$a:na,pe=b.stencil?Xi:qn);let O={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(O),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new un(u.textureWidth,u.textureHeight,{format:Fn,type:pn,depthTexture:new Ba(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let de={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new un(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(q){for(let V=0;V<q.removed.length;V++){let de=q.removed[V],pe=S.indexOf(de);pe>=0&&(S[pe]=null,E[pe].disconnect(de))}for(let V=0;V<q.added.length;V++){let de=q.added[V],pe=S.indexOf(de);if(pe===-1){for(let O=0;O<E.length;O++)if(O>=S.length){S.push(de),pe=O;break}else if(S[O]===null){S[O]=de,pe=O;break}if(pe===-1)break}let fe=E[pe];fe&&fe.connect(de)}}let Y=new B,W=new B;function ae(q,V,de){Y.setFromMatrixPosition(V.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);let pe=Y.distanceTo(W),fe=V.projectionMatrix.elements,O=de.projectionMatrix.elements,oe=fe[14]/(fe[10]-1),me=fe[14]/(fe[10]+1),ve=(fe[9]+1)/fe[5],_e=(fe[9]-1)/fe[5],Re=(fe[8]-1)/fe[0],he=(O[8]+1)/O[0],ee=oe*Re,Q=oe*he,se=pe/(-Re+he),ge=se*-Re;if(V.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ge),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),fe[10]===-1)q.projectionMatrix.copy(V.projectionMatrix),q.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let N=oe+se,Be=me+se,Ee=ee-ge,D=Q+(pe-ge),y=ve*me/Be*N,z=_e*me/Be*N;q.projectionMatrix.makePerspective(Ee,D,y,z,N,Be),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ye(q,V){V===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(V.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let V=q.near,de=q.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&(de=m.depthFar)),I.near=P.near=C.near=V,I.far=P.far=C.far=de,(R!==I.near||U!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,U=I.far),I.layers.mask=q.layers.mask|6,C.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;let pe=q.parent,fe=I.cameras;ye(I,pe);for(let O=0;O<fe.length;O++)ye(fe[O],pe);fe.length===2?ae(I,C,P):I.projectionMatrix.copy(C.projectionMatrix),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),$(q,I,pe)};function $(q,V,de){de===null?q.matrix.copy(V.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(V.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(V.projectionMatrix),q.projectionMatrixInverse.copy(V.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ho*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(q){return h[q]};let ce=null;function be(q,V){if(d=V.getViewerPose(c||s),x=V,d!==null){let de=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let pe=!1;de.length!==I.cameras.length&&(I.cameras.length=0,pe=!0);for(let me=0;me<de.length;me++){let ve=de[me],_e=null;if(f!==null)_e=f.getViewport(ve);else{let he=p.getViewSubImage(u,ve);_e=he.viewport,me===0&&(e.setRenderTargetTextures(v,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(v))}let Re=L[me];Re===void 0&&(Re=new Zt,Re.layers.enable(me),Re.viewport=new Rt,L[me]=Re),Re.matrix.fromArray(ve.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ve.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(_e.x,_e.y,_e.width,_e.height),me===0&&(I.matrix.copy(Re.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),pe===!0&&I.cameras.push(Re)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){p=n.getBinding();let me=p.getDepthInformation(de[0]);me&&me.isValid&&me.texture&&m.init(me,i.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),p=n.getBinding();for(let me=0;me<de.length;me++){let ve=de[me].camera;if(ve){let _e=h[ve];_e||(_e=new Br,h[ve]=_e);let Re=p.getCameraImage(ve);_e.sourceTexture=Re}}}}for(let de=0;de<E.length;de++){let pe=S[de],fe=E[de];pe!==null&&fe!==void 0&&fe.update(pe,V,c||s)}ce&&ce(q,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),x=null}let Se=new Dp;Se.setAnimationLoop(be),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}},d_=new yt,Bp=new nt;Bp.set(-1,0,0,0,1,0,0,0,1);function u_(a,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Ed(a)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,b,M,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),p(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),u(m,h),h.isMeshPhysicalMaterial&&f(m,h,v)):h.isMeshMatcapMaterial?(r(m,h),x(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,b,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===an&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===an&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let b=e.get(h),M=b.envMap,v=b.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bp),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=M*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){let b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function h_(a,e,t,n){let i={},r={},s=[],o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let S=E.program;n.uniformBlockBinding(v,S)}function c(v,E){let S=i[v.id];S===void 0&&(m(v),S=d(v),i[v.id]=S,v.addEventListener("dispose",b));let T=E.program;n.updateUBOMapping(v,T);let g=e.render.frame;r[v.id]!==g&&(u(v),r[v.id]=g)}function d(v){let E=p();v.__bindingPointIndex=E;let S=a.createBuffer(),T=v.__size,g=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,T,g),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,E,S),S}function p(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=i[v.id],S=v.uniforms,T=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,E);for(let g=0,A=S.length;g<A;g++){let C=S[g];if(Array.isArray(C))for(let P=0,L=C.length;P<L;P++)f(C[P],g,P,T);else f(C,g,0,T)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(v,E,S,T){if(_(v,E,S,T)===!0){let g=v.__offset,A=v.value;if(Array.isArray(A)){let C=0;for(let P=0;P<A.length;P++){let L=A[P],I=h(L);x(L,v.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,v.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,g,v.__data)}}function x(v,E,S){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,S)}function _(v,E,S,T){let g=v.value,A=E+"_"+S;if(T[A]===void 0)return typeof g=="number"||typeof g=="boolean"?T[A]=g:ArrayBuffer.isView(g)?T[A]=g.slice():T[A]=g.clone(),!0;{let C=T[A];if(typeof g=="number"||typeof g=="boolean"){if(C!==g)return T[A]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(C.equals(g)===!1)return C.copy(g),!0}}return!1}function m(v){let E=v.uniforms,S=0,T=16;for(let A=0,C=E.length;A<C;A++){let P=Array.isArray(E[A])?E[A]:[E[A]];for(let L=0,I=P.length;L<I;L++){let R=P[L],U=Array.isArray(R.value)?R.value:[R.value];for(let F=0,H=U.length;F<H;F++){let j=U[F],Y=h(j),W=S%T,ae=W%Y.boundary,ye=W+ae;S+=ae,ye!==0&&T-ye<Y.storage&&(S+=T-ye),R.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=Y.storage}}}let g=S%T;return g>0&&(S+=T-g),v.__size=S,v.__cache={},this}function h(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",v),E}function b(v){let E=v.target;E.removeEventListener("dispose",b);let S=s.indexOf(E.__bindingPointIndex);s.splice(S,1),a.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function M(){for(let v in i)a.deleteBuffer(i[v]);s=[],i={},r={}}return{bind:l,update:c,dispose:M}}var p_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),la=null;function f_(){return la===null&&(la=new Ur(p_,16,16,qa,Wn),la.name="DFG_LUT",la.minFilter=qt,la.magFilter=qt,la.wrapS=ta,la.wrapT=ta,la.generateMipmaps=!1,la.needsUpdate=!0),la}var Ol=class{constructor(e={}){let{canvas:t=ap(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;let _=f,m=new Set([Qo,Ko,Zo]),h=new Set([pn,qn,Wi,Xi,Xo,Yo]),b=new Uint32Array(4),M=new Int32Array(4),v=new B,E=null,S=null,T=[],g=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,L=null,I=null,R=null,U=null;this._outputColorSpace=Vt;let F=0,H=0,j=null,Y=-1,W=null,ae=new Rt,ye=new Rt,$=null,ce=new He(0),be=0,Se=t.width,q=t.height,V=1,de=null,pe=null,fe=new Rt(0,0,Se,q),O=new Rt(0,0,Se,q),oe=!1,me=new Hi,ve=!1,_e=!1,Re=new yt,he=new B,ee=new Rt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function ge(){return j===null?V:1}let N=n;function Be(w,G){return t.getContext(w,G)}let Ee,D,y,z,X,ne,Me,Ae,re,le,Te,ke,Ce,we,We,Ke,at,k,Pe,ue,Ie,Fe,xe;try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Bn,!1),N===null){let G="webgl2";if(N=Be(G,w),N===null)throw Be(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(w){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),et("WebGLRenderer: "+w.message),w}function Xe(){Ee=new yb(N),Ee.init(),Ie=new o_(N,Ee),D=new ub(N,Ee,e,Ie),y=new r_(N,Ee),D.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),I=N.createFramebuffer(),R=N.createFramebuffer(),U=N.createFramebuffer(),z=new Eb(N),X=new $v,ne=new s_(N,Ee,y,X,D,Ie,z),Me=new _b(C),Ae=new T0(N),Fe=new cb(N,Ae),re=new Sb(N,Ae,z,Fe),le=new Tb(N,re,Ae,Fe,z),k=new Ab(N,D,ne),We=new hb(X),Te=new jv(C,Me,Ee,D,Fe,We),ke=new u_(C,X),Ce=new Wv,we=new Qv(Ee),at=new lb(C,Me,y,le,x,l),Ke=new i_(C,le,D),xe=new h_(N,z,D,y),Pe=new db(N,Ee,z),ue=new Mb(N,Ee,z),z.programs=Te.programs,C.capabilities=D,C.extensions=Ee,C.properties=X,C.renderLists=Ce,C.shadowMap=Ke,C.state=y,C.info=z}_!==pn&&(A=new Cb(_,t.width,t.height,o,i,r));let Ve=new kd(C,N);this.xr=Ve,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(Se,q,!1))},this.getSize=function(w){return w.set(Se,q)},this.setSize=function(w,G,te=!0){if(Ve.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=w,q=G,t.width=Math.floor(w*V),t.height=Math.floor(G*V),te===!0&&(t.style.width=w+"px",t.style.height=G+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(Se*V,q*V).floor()},this.setDrawingBufferSize=function(w,G,te){Se=w,q=G,V=te,t.width=Math.floor(w*te),t.height=Math.floor(G*te),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(_===pn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ae)},this.getViewport=function(w){return w.copy(fe)},this.setViewport=function(w,G,te,Z){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,G,te,Z),y.viewport(ae.copy(fe).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,G,te,Z){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,G,te,Z),y.scissor(ye.copy(O).multiplyScalar(V).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){y.setScissorTest(oe=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,te=!0){let Z=0;if(w){let K=!1;if(j!==null){let Ne=j.texture.format;K=m.has(Ne)}if(K){let Ne=j.texture.type,Oe=h.has(Ne),Le=at.getClearColor(),ze=at.getClearAlpha(),je=Le.r,it=Le.g,ot=Le.b;Oe?(b[0]=je,b[1]=it,b[2]=ot,b[3]=ze,N.clearBufferuiv(N.COLOR,0,b)):(M[0]=je,M[1]=it,M[2]=ot,M[3]=ze,N.clearBufferiv(N.COLOR,0,M))}else Z|=N.COLOR_BUFFER_BIT}G&&(Z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),at.dispose(),Ce.dispose(),we.dispose(),X.dispose(),Me.dispose(),le.dispose(),Fe.dispose(),xe.dispose(),Te.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Bu),Ve.removeEventListener("sessionend",zu),Qa.stop()};function At(w){w.preventDefault(),Sd("WebGLRenderer: Context Lost."),P=!0}function bt(){Sd("WebGLRenderer: Context Restored."),P=!1;let w=z.autoReset,G=Ke.enabled,te=Ke.autoUpdate,Z=Ke.needsUpdate,K=Ke.type;Xe(),z.autoReset=w,Ke.enabled=G,Ke.autoUpdate=te,Ke.needsUpdate=Z,Ke.type=K}function Bn(w){et("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kn(w){let G=w.target;G.removeEventListener("dispose",Kn),Mm(G)}function Mm(w){Em(w),X.remove(w)}function Em(w){let G=X.get(w).programs;G!==void 0&&(G.forEach(function(te){Te.releaseProgram(te)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,te,Z,K,Ne){G===null&&(G=Q);let Oe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Le=wm(w,G,te,Z,K);y.setMaterial(Z,Oe);let ze=te.index,je=1;if(Z.wireframe===!0){if(ze=re.getWireframeAttribute(te),ze===void 0)return;je=2}let it=te.drawRange,ot=te.attributes.position,Ge=it.start*je,vt=(it.start+it.count)*je;Ne!==null&&(Ge=Math.max(Ge,Ne.start*je),vt=Math.min(vt,(Ne.start+Ne.count)*je)),ze!==null?(Ge=Math.max(Ge,0),vt=Math.min(vt,ze.count)):ot!=null&&(Ge=Math.max(Ge,0),vt=Math.min(vt,ot.count));let Ot=vt-Ge;if(Ot<0||Ot===1/0)return;Fe.setup(K,Z,Le,te,ze);let wt,Mt=Pe;if(ze!==null&&(wt=Ae.get(ze),Mt=ue,Mt.setIndex(wt)),K.isMesh)Z.wireframe===!0?(y.setLineWidth(Z.wireframeLinewidth*ge()),Mt.setMode(N.LINES)):Mt.setMode(N.TRIANGLES);else if(K.isLine){let Xt=Z.linewidth;Xt===void 0&&(Xt=1),y.setLineWidth(Xt*ge()),K.isLineSegments?Mt.setMode(N.LINES):K.isLineLoop?Mt.setMode(N.LINE_LOOP):Mt.setMode(N.LINE_STRIP)}else K.isPoints?Mt.setMode(N.POINTS):K.isSprite&&Mt.setMode(N.TRIANGLES);if(K.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))Mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Xt=K._multiDrawStarts,Ue=K._multiDrawCounts,tn=K._multiDrawCount,ft=ze?Ae.get(ze).bytesPerElement:1,Cn=X.get(Z).currentProgram.getUniforms();for(let Qn=0;Qn<tn;Qn++)Cn.setValue(N,"_gl_DrawID",Qn),Mt.render(Xt[Qn]/ft,Ue[Qn])}else if(K.isInstancedMesh)Mt.renderInstances(Ge,Ot,K.count);else if(te.isInstancedBufferGeometry){let Xt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ue=Math.min(te.instanceCount,Xt);Mt.renderInstances(Ge,Ot,Ue)}else Mt.render(Ge,Ot)};function Ou(w,G,te,Z){L!==null&&w.isNodeMaterial&&L.setObject(Z,w),ve===!0&&We.setState(w,te,!1),w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Is(w,G,Z),w.side=ka,w.needsUpdate=!0,Is(w,G,Z),w.side=Ln):Is(w,G,Z)}this.compile=function(w,G,te=null){te===null&&(te=w),L!==null&&L.renderStart(w,G,te),S=we.get(te),S.init(G),g.push(S),te.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),w!==te&&w.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),_e=this.localClippingEnabled,ve=We.init(this.clippingPlanes,_e),ve===!0&&We.setGlobalState(this.clippingPlanes,G),L!==null&&Ke.render(S.state.shadowsArray,te,G);let Z=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){let Le=Ne[Oe];Ou(Le,te,G,K),Z.add(Le)}else Ou(Ne,te,G,K),Z.add(Ne)}),S=g.pop(),L!==null&&L.renderEnd(),Z},this.compileAsync=function(w,G,te=null){let Z=this.compile(w,G,te);return new Promise(K=>{function Ne(){if(Z.forEach(function(Oe){let ze=X.get(Oe).currentProgram;(ze===void 0||ze.isReady())&&Z.delete(Oe)}),Z.size===0){K(w);return}setTimeout(Ne,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let vc=null;function Am(w){vc&&vc(w)}function Bu(){Qa.stop()}function zu(){Qa.start()}let Qa=new Dp;Qa.setAnimationLoop(Am),typeof self<"u"&&Qa.setContext(self),this.setAnimationLoop=function(w){vc=w,Ve.setAnimationLoop(w),w===null?Qa.stop():Qa.start()},Ve.addEventListener("sessionstart",Bu),Ve.addEventListener("sessionend",zu),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(w,G);let te=Ve.enabled===!0&&Ve.isPresenting===!0,Z=A!==null&&(j===null||te)&&A.begin(C,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(G),G=Ve.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,G,j),S=we.get(w,g.length),S.init(G),S.state.textureUnits=ne.getTextureUnits(),g.push(S),Re.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),me.setFromProjectionMatrix(Re,Vn,G.reversedDepth),_e=this.localClippingEnabled,ve=We.init(this.clippingPlanes,_e),E=Ce.get(w,T.length),E.init(),T.push(E),Ve.enabled===!0&&Ve.isPresenting===!0){let Oe=C.xr.getDepthSensingMesh();Oe!==null&&_c(Oe,G,-1/0,C.sortObjects)}_c(w,G,0,C.sortObjects),E.finish(),L!==null&&L.updateLights(S.state.lightsArray),C.sortObjects===!0&&E.sort(de,pe),se=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,se&&at.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&We.beginShadows();let K=S.state.shadowsArray;if(Ke.render(K,w,G),ve===!0&&We.endShadows(),(Z&&A.hasRenderPass())===!1){let Oe=E.opaque,Le=E.transmissive;if(S.setupLights(),G.isArrayCamera){let ze=G.cameras;if(Le.length>0)for(let je=0,it=ze.length;je<it;je++){let ot=ze[je];Hu(Oe,Le,w,ot)}se&&at.render(w);for(let je=0,it=ze.length;je<it;je++){let ot=ze[je];Gu(E,w,ot,ot.viewport)}}else Le.length>0&&Hu(Oe,Le,w,G),se&&at.render(w),Gu(E,w,G)}j!==null&&H===0&&(ne.updateMultisampleRenderTarget(j),ne.updateRenderTargetMipmap(j)),Z&&A.end(C),w.isScene===!0&&w.onAfterRender(C,w,G),Fe.resetDefaultState(),Y=-1,W=null,g.pop(),g.length>0?(S=g[g.length-1],ne.setTextureUnits(S.state.textureUnits),ve===!0&&We.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,L!==null&&L.renderEnd()};function _c(w,G,te,Z){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(me)){Z&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);let Oe=le.update(w),Le=w.material;Le.visible&&E.push(w,Oe,Le,te,ee.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(me))){let Oe=le.update(w),Le=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ee.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ee.copy(Oe.boundingSphere.center)),ee.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(Le)){let ze=Oe.groups;for(let je=0,it=ze.length;je<it;je++){let ot=ze[je],Ge=Le[ot.materialIndex];Ge&&Ge.visible&&E.push(w,Oe,Ge,te,ee.z,ot,G)}}else Le.visible&&E.push(w,Oe,Le,te,ee.z,null,G)}}let Ne=w.children;for(let Oe=0,Le=Ne.length;Oe<Le;Oe++)_c(Ne[Oe],G,te,Z)}function Gu(w,G,te,Z){let{opaque:K,transmissive:Ne,transparent:Oe}=w;S.setupLightsView(te),ve===!0&&We.setGlobalState(C.clippingPlanes,te),Z&&y.viewport(ae.copy(Z)),K.length>0&&Ps(K,G,te),Ne.length>0&&Ps(Ne,G,te),Oe.length>0&&Ps(Oe,G,te),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Hu(w,G,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let Ge=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new un(1,1,{generateMipmaps:!0,type:Ge?Wn:pn,minFilter:ja,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Ne=S.state.transmissionRenderTarget[Z.id],Oe=Z.viewport||ae;Ne.setSize(Oe.z*C.transmissionResolutionScale,Oe.w*C.transmissionResolutionScale);let Le=C.getRenderTarget(),ze=C.getActiveCubeFace(),je=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(ce),be=C.getClearAlpha(),be<1&&C.setClearColor(16777215,.5),C.clear(),se&&at.render(te);let it=C.toneMapping;C.toneMapping=$n;let ot=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),ve===!0&&We.setGlobalState(C.clippingPlanes,Z),Ps(w,te,Z),ne.updateMultisampleRenderTarget(Ne),ne.updateRenderTargetMipmap(Ne),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let vt=0,Ot=G.length;vt<Ot;vt++){let wt=G[vt],{object:Mt,geometry:Xt,material:Ue,group:tn}=wt;if(Ue.side===Ln&&Mt.layers.test(Z.layers)){let ft=Ue.side;Ue.side=an,Ue.needsUpdate=!0,ku(Mt,te,Z,Xt,Ue,tn),Ue.side=ft,Ue.needsUpdate=!0,Ge=!0}}Ge===!0&&(ne.updateMultisampleRenderTarget(Ne),ne.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Le,ze,je),C.setClearColor(ce,be),ot!==void 0&&(Z.viewport=ot),C.toneMapping=it}function Ps(w,G,te){let Z=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Ne=w.length;K<Ne;K++){let Oe=w[K],{object:Le,geometry:ze,group:je}=Oe,it=Oe.material;it.allowOverride===!0&&Z!==null&&(it=Z),Le.layers.test(te.layers)&&ku(Le,G,te,ze,it,je)}}function ku(w,G,te,Z,K,Ne){L!==null&&K.isNodeMaterial&&L.setObject(w,K),w.onBeforeRender(C,G,te,Z,K,Ne),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(C,G,te,Z,w,Ne),K.transparent===!0&&K.side===Ln&&K.forceSinglePass===!1?(K.side=an,K.needsUpdate=!0,C.renderBufferDirect(te,G,Z,K,w,Ne),K.side=ka,K.needsUpdate=!0,C.renderBufferDirect(te,G,Z,K,w,Ne),K.side=Ln):C.renderBufferDirect(te,G,Z,K,w,Ne),w.onAfterRender(C,G,te,Z,K,Ne)}function Is(w,G,te){G.isScene!==!0&&(G=Q);let Z=X.get(w),K=S.state.lights,Ne=S.state.shadowsArray,Oe=K.state.version,Le=Te.getParameters(w,K.state,Ne,G,te,S.state.lightProbeGridArray),ze=Te.getProgramCacheKey(Le),je=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let it=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=Me.get(w.envMap||Z.environment,it),Z.envMapRotation=Z.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,je===void 0&&(w.addEventListener("dispose",Kn),je=new Map,Z.programs=je);let ot=je.get(ze);if(ot!==void 0){if(Z.currentProgram===ot&&Z.lightsStateVersion===Oe)return ju(w,Le),ot}else Le.uniforms=Te.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,te,Le),w.onBeforeCompile(Le,C),ot=Te.acquireProgram(Le,ze),je.set(ze,ot),Z.uniforms=Le.uniforms;let Ge=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=We.uniform),ju(w,Le),Z.needsLights=Rm(w),Z.lightsStateVersion=Oe,Z.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.sunLights.value=K.state.sun,Ge.sunLightShadows.value=K.state.sunShadow,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.sunShadowMatrix.value=K.state.sunShadowMatrix,Ge.sunShadowCascade.value=K.state.sunShadowCascade,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=ot,Z.uniformsList=null,ot}function Vu(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=Zi.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function ju(w,G){let te=X.get(w);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Tm(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(G.matrixWorld);for(let te=0,Z=w.length;te<Z;te++){let K=w[te];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function wm(w,G,te,Z,K){G.isScene!==!0&&(G=Q),ne.resetTextureUnits();let Ne=G.fog,Oe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Le=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ut.workingColorSpace,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,je=Me.get(Z.envMap||Oe,ze),it=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ot=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ge=!!te.morphAttributes.position,vt=!!te.morphAttributes.normal,Ot=!!te.morphAttributes.color,wt=$n;Z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(wt=C.toneMapping);let Mt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Xt=Mt!==void 0?Mt.length:0,Ue=X.get(Z),tn=S.state.lights;if(ve===!0&&(_e===!0||w!==W)){let Tt=w===W&&Z.id===Y;We.setState(Z,w,Tt)}let ft=!1;Z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==tn.state.version||Ue.outputColorSpace!==Le||K.isBatchedMesh&&Ue.batching===!1||!K.isBatchedMesh&&Ue.batching===!0||K.isBatchedMesh&&Ue.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ue.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ue.instancing===!1||!K.isInstancedMesh&&Ue.instancing===!0||K.isSkinnedMesh&&Ue.skinning===!1||!K.isSkinnedMesh&&Ue.skinning===!0||K.isInstancedMesh&&Ue.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ue.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ue.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ue.instancingMorph===!1&&K.morphTexture!==null||Ue.envMap!==je||Z.fog===!0&&Ue.fog!==Ne||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==We.numPlanes||Ue.numIntersection!==We.numIntersection)||Ue.vertexAlphas!==it||Ue.vertexTangents!==ot||Ue.morphTargets!==Ge||Ue.morphNormals!==vt||Ue.morphColors!==Ot||Ue.toneMapping!==wt||Ue.morphTargetsCount!==Xt||!!Ue.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Ue.__version=Z.version);let Cn=Ue.currentProgram;ft===!0&&(Cn=Is(Z,G,K),L&&Z.isNodeMaterial&&L.onUpdateProgram(Z,Cn,Ue));let Qn=!1,Ca=!1,xi=!1,St=Cn.getUniforms(),Nt=Ue.uniforms;if(y.useProgram(Cn.program)&&(Qn=!0,Ca=!0,xi=!0),Z.id!==Y&&(Y=Z.id,Ca=!0),Ue.needsLights){let Tt=Tm(S.state.lightProbeGridArray,K);Ue.lightProbeGrid!==Tt&&(Ue.lightProbeGrid=Tt,Ca=!0)}if(Qn||W!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),St.setValue(N,"projectionMatrix",w.projectionMatrix),St.setValue(N,"viewMatrix",w.matrixWorldInverse);let Pa=St.map.cameraPosition;Pa!==void 0&&Pa.setValue(N,he.setFromMatrixPosition(w.matrixWorld)),D.logarithmicDepthBuffer&&St.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&St.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,Ca=!0,xi=!0)}if(Ue.needsLights&&(tn.state.sunShadowMap.length>0&&St.setValue(N,"sunShadowMap",tn.state.sunShadowMap,ne),tn.state.directionalShadowMap.length>0&&St.setValue(N,"directionalShadowMap",tn.state.directionalShadowMap,ne),tn.state.spotShadowMap.length>0&&St.setValue(N,"spotShadowMap",tn.state.spotShadowMap,ne),tn.state.pointShadowMap.length>0&&St.setValue(N,"pointShadowMap",tn.state.pointShadowMap,ne)),K.isSkinnedMesh){St.setOptional(N,K,"bindMatrix"),St.setOptional(N,K,"bindMatrixInverse");let Tt=K.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),St.setValue(N,"boneTexture",Tt.boneTexture,ne))}K.isBatchedMesh&&(St.setOptional(N,K,"batchingTexture"),St.setValue(N,"batchingTexture",K._matricesTexture,ne),St.setOptional(N,K,"batchingIdTexture"),St.setValue(N,"batchingIdTexture",K._indirectTexture,ne),St.setOptional(N,K,"batchingColorTexture"),K._colorsTexture!==null&&St.setValue(N,"batchingColorTexture",K._colorsTexture,ne));let Ra=te.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0)&&k.update(K,te,Cn),(Ca||Ue.receiveShadow!==K.receiveShadow)&&(Ue.receiveShadow=K.receiveShadow,St.setValue(N,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(Nt.envMapIntensity.value=G.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=f_()),Ca){if(St.setValue(N,"toneMappingExposure",C.toneMappingExposure),Ue.needsLights&&Cm(Nt,xi),Ne&&Z.fog===!0&&ke.refreshFogUniforms(Nt,Ne),ke.refreshMaterialUniforms(Nt,Z,V,q,S.state.transmissionRenderTarget[w.id]),Ue.needsLights&&Ue.lightProbeGrid){let Tt=Ue.lightProbeGrid;Nt.probesSH.value=Tt.texture,Nt.probesMin.value.copy(Tt.boundingBox.min),Nt.probesMax.value.copy(Tt.boundingBox.max),Nt.probesResolution.value.copy(Tt.resolution)}Zi.upload(N,Vu(Ue),Nt,ne)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Zi.upload(N,Vu(Ue),Nt,ne),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&St.setValue(N,"center",K.center),St.setValue(N,"modelViewMatrix",K.modelViewMatrix),St.setValue(N,"normalMatrix",K.normalMatrix),St.setValue(N,"modelMatrix",K.matrixWorld),Z.uniformsGroups!==void 0){let Tt=Z.uniformsGroups;for(let Pa=0,bi=Tt.length;Pa<bi;Pa++){let qu=Tt[Pa];xe.update(qu,Cn),xe.bind(qu,Cn)}}return Cn}function Cm(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Rm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,G,te){let Z=X.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=G,X.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let te=X.get(w);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,te=0){j=w,F=G,H=te;let Z=null,K=!1,Ne=!1;if(w){let Le=X.get(w);if(Le.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,Le.__webglFramebuffer),ae.copy(w.viewport),ye.copy(w.scissor),$=w.scissorTest,y.viewport(ae),y.scissor(ye),y.setScissorTest($),Y=-1;return}else if(Le.__webglFramebuffer===void 0)ne.setupRenderTarget(w);else if(Le.__hasExternalTextures)ne.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let it=w.depthTexture;if(Le.__boundDepthTexture!==it){if(it!==null&&X.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(w)}}let ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);let je=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[G])?Z=je[G][te]:Z=je[G],K=!0):w.samples>0&&ne.useMultisampledRTT(w)===!1?Z=X.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?Z=je[te]:Z=je,ae.copy(w.viewport),ye.copy(w.scissor),$=w.scissorTest}else ae.copy(fe).multiplyScalar(V).floor(),ye.copy(O).multiplyScalar(V).floor(),$=oe;if(te!==0&&(Z=I),y.bindFramebuffer(N.FRAMEBUFFER,Z)&&y.drawBuffers(w,Z),y.viewport(ae),y.scissor(ye),y.setScissorTest($),K){let Le=X.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,te)}else if(Ne){let Le=G;for(let ze=0;ze<w.textures.length;ze++){let je=X.get(w.textures[ze]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ze,je.__webglTexture,te,Le)}}else if(w!==null&&te!==0){let Le=X.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Le.__webglTexture,te)}Y=-1};function $u(w){let G=X.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=D.textureFormatReadable(w.format),G.__typeReadable=D.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,te,Z,K,Ne,Oe,Le=0){if(!(w&&w.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){y.bindFramebuffer(N.FRAMEBUFFER,ze);try{let je=w.textures[Le],it=je.format,ot=je.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Le);let Ge=$u(je);if(Ge.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Z&&te>=0&&te<=w.height-K&&N.readPixels(G,te,Z,K,Ie.convert(it),Ie.convert(ot),Ne)}finally{let je=j!==null?X.get(j).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(w,G,te,Z,K,Ne,Oe,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(G>=0&&G<=w.width-Z&&te>=0&&te<=w.height-K){y.bindFramebuffer(N.FRAMEBUFFER,ze);let je=w.textures[Le],it=je.format,ot=je.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Le);let Ge=$u(je);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.bufferData(N.PIXEL_PACK_BUFFER,Ne.byteLength,N.STREAM_READ),N.readPixels(G,te,Z,K,Ie.convert(it),Ie.convert(ot),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ot=j!==null?X.get(j).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Ot);let wt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rp(N,wt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ne),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(vt),N.deleteSync(wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,te=0){let Z=Math.pow(2,-te),K=Math.floor(w.image.width*Z),Ne=Math.floor(w.image.height*Z),Oe=G!==null?G.x:0,Le=G!==null?G.y:0;ne.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,te,0,0,Oe,Le,K,Ne),y.unbindTexture()},this.copyTextureToTexture=function(w,G,te=null,Z=null,K=0,Ne=0){let Oe,Le,ze,je,it,ot,Ge,vt,Ot,wt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(te!==null)Oe=te.max.x-te.min.x,Le=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,je=te.min.x,it=te.min.y,ot=te.isBox3?te.min.z:0;else{let Nt=Math.pow(2,-K);Oe=Math.floor(wt.width*Nt),Le=Math.floor(wt.height*Nt),w.isDataArrayTexture?ze=wt.depth:w.isData3DTexture?ze=Math.floor(wt.depth*Nt):ze=1,je=0,it=0,ot=0}Z!==null?(Ge=Z.x,vt=Z.y,Ot=Z.z):(Ge=0,vt=0,Ot=0);let Mt=Ie.convert(G.format),Xt=Ie.convert(G.type),Ue;G.isData3DTexture?(ne.setTexture3D(G,0),Ue=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ne.setTexture2DArray(G,0),Ue=N.TEXTURE_2D_ARRAY):(ne.setTexture2D(G,0),Ue=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let tn=y.getParameter(N.UNPACK_ROW_LENGTH),ft=y.getParameter(N.UNPACK_IMAGE_HEIGHT),Cn=y.getParameter(N.UNPACK_SKIP_PIXELS),Qn=y.getParameter(N.UNPACK_SKIP_ROWS),Ca=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,je),y.pixelStorei(N.UNPACK_SKIP_ROWS,it),y.pixelStorei(N.UNPACK_SKIP_IMAGES,ot);let xi=w.isDataArrayTexture||w.isData3DTexture,St=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let Nt=X.get(w),Ra=X.get(G),Tt=X.get(Nt.__renderTarget),Pa=X.get(Ra.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,Tt.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let bi=0;bi<ze;bi++)xi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(w).__webglTexture,K,ot+bi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(G).__webglTexture,Ne,Ot+bi)),N.blitFramebuffer(je,it,Oe,Le,Ge,vt,Oe,Le,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||X.has(w)){let Nt=X.get(w),Ra=X.get(G);y.bindFramebuffer(N.READ_FRAMEBUFFER,R),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,U);for(let Tt=0;Tt<ze;Tt++)xi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,K,ot+Tt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nt.__webglTexture,K),St?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ra.__webglTexture,Ne,Ot+Tt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ra.__webglTexture,Ne),K!==0?N.blitFramebuffer(je,it,Oe,Le,Ge,vt,Oe,Le,N.COLOR_BUFFER_BIT,N.NEAREST):St?N.copyTexSubImage3D(Ue,Ne,Ge,vt,Ot+Tt,je,it,Oe,Le):N.copyTexSubImage2D(Ue,Ne,Ge,vt,je,it,Oe,Le);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else St?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ue,Ne,Ge,vt,Ot,Oe,Le,ze,Mt,Xt,wt.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Ue,Ne,Ge,vt,Ot,Oe,Le,ze,Mt,wt.data):N.texSubImage3D(Ue,Ne,Ge,vt,Ot,Oe,Le,ze,Mt,Xt,wt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ne,Ge,vt,Oe,Le,Mt,Xt,wt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ne,Ge,vt,wt.width,wt.height,Mt,wt.data):N.texSubImage2D(N.TEXTURE_2D,Ne,Ge,vt,Oe,Le,Mt,Xt,wt);y.pixelStorei(N.UNPACK_ROW_LENGTH,tn),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Cn),y.pixelStorei(N.UNPACK_SKIP_ROWS,Qn),y.pixelStorei(N.UNPACK_SKIP_IMAGES,Ca),Ne===0&&G.generateMipmaps&&N.generateMipmap(Ue),y.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ne.setTextureCube(w,0):w.isData3DTexture?ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ne.setTexture2DArray(w,0):ne.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){F=0,H=0,j=null,y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Gl=a=>typeof matchMedia=="function"?matchMedia(a):{matches:!1,addEventListener(){}},Qi=Gl("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&Gl("(hover: none)").matches,AM=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,TM=Gl("(display-mode: standalone)").matches||Gl("(display-mode: fullscreen)").matches||navigator.standalone===!0,zp=new URLSearchParams(location.search),m_={aces:"aces",agx:"agx",neutral:"neutral"},Hl={variante:zp.get("visual")==="nuevo"?"nuevo":"base",get nuevo(){return this.variante==="nuevo"},tono:m_[zp.get("tono")]??null};function Gp(){let a=window.devicePixelRatio||1,e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??8,n=Qi&&(e<=3||t<=4);return Qi?{movil:!0,bajo:n,pixelRatio:Math.min(a,n?1.15:1.5),minPixelRatio:.8,sombra:n?512:1024,antialias:a<2,lluvia:n?.35:.55,autosPorCarril:n?2:3}:{movil:!1,bajo:!1,pixelRatio:Math.min(a,1.75),minPixelRatio:1,sombra:2048,antialias:!0,lluvia:1,autosPorCarril:4}}typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(a,e,t,n,i=0){let r=Math.max(0,Math.min(typeof i=="number"?i:i?.[0]??0,t/2,n/2));return this.moveTo(a+r,e),this.arcTo(a+t,e,a+t,e+n,r),this.arcTo(a+t,e+n,a,e+n,r),this.arcTo(a,e+n,a,e,r),this.arcTo(a,e,a+t,e,r),this.closePath(),this});var dt=a=>String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Vd={via:"Calle 50 Luisa, Sabana Norte, San Jos\xE9",atribucion:"\xA9 OpenStreetMap contributors (ODbL)",eje:[[12.75,-245.62],[7.04,-157.59],[-1.69,-41.67],[-2.78,6.89],[-3.6,24.31],[-5.75,55.28],[-7.13,78.66],[-8.96,128.18],[-9.45,141.34],[-10.83,178.46],[-12.75,245.62]],largo:492.1,cruces:[{d:88.2,p:[7.04,-157.59],vias:["service:sin nombre"]},{d:204.5,p:[-1.69,-41.67],vias:["residential:sin nombre","service:sin nombre"]},{d:253.1,p:[-2.78,6.89],vias:["service:sin nombre"]},{d:270.6,p:[-3.6,24.31],vias:["service:sin nombre"]},{d:301.6,p:[-5.75,55.28],vias:["residential:Avenida 9"]},{d:325,p:[-7.13,78.66],vias:["service:sin nombre"]},{d:374.6,p:[-8.96,128.18],vias:["service:sin nombre"]},{d:387.8,p:[-9.45,141.34],vias:["service:sin nombre"]},{d:424.9,p:[-10.83,178.46],vias:["service:sin nombre"]},{d:492.1,p:[-12.75,245.62],vias:["residential:Calle 50","secondary:Avenida de Las Am\xE9ricas"]}],postes:[{id:"P01",p:[-3.32,-88.06],lado:"oeste",material:"concreto",herrajes:["cruceta","aisladores","reservas de fibra en aro (3 o m\xE1s)"],d:158.4},{id:"P02",p:[6.04,-76.43],lado:"este",material:"concreto",herrajes:["cruceta","aisladores","luminaria"],d:169.2},{id:"P04",p:[4.93,-61.74],lado:"este",material:"met\xE1lico gris sobre pedestal de concreto",herrajes:["brazo diagonal","retenida con protector amarillo (28 s)"],d:184},{id:"P05",p:[-7.06,-30.25],lado:"oeste",material:"concreto",herrajes:["transformador","reservas de fibra en aro","caja de empalme (47 s)"],d:216},{id:"P06",p:[-8.36,16.97],lado:"oeste",material:"concreto",herrajes:["reservas de fibra en aro (5 o m\xE1s)","marcas de colores de operadores (~2 m)"],d:263.5},{id:"P07",p:[-10.42,48.85],lado:"oeste",material:"concreto",herrajes:["transformador","luminaria"],d:295.5},{id:"P08",p:[-13.03,100.22],lado:"oeste",material:"concreto",herrajes:["haz telecom grande"],d:346.8},{id:"P09",p:[-14.7,145.19],lado:"oeste",material:"concreto",herrajes:["luminaria"],d:391.8},{id:"P12",p:[-6.79,215.69],lado:"este",material:"concreto",herrajes:["luminaria"],d:462},{id:"P11",p:[-7.78,250.32],lado:"este",material:"concreto con franja amarilla y negra",herrajes:["reservas de fibra en aro"],d:496.7}],tendido:[{de:"P01",a:"P05"},{de:"P05",a:"P06"},{de:"P06",a:"P07"},{de:"P07",a:"P08"},{de:"P08",a:"P09"},{de:"P09",a:"P12",nota:"cruza la calle"},{de:"P12",a:"P11"}],arboles:[[-7.17,-25.14],[-7.31,-18.74],[-7.45,-12.33],[-7.59,-5.92],[-7.74,.49],[-7.88,6.75],[-8.19,13.14],[-8.48,19.52],[-8.82,25.8],[-9.26,32.2],[-9.71,38.6],[-10.15,45.01],[-10.6,51.41],[-11.01,57.87],[-11.39,64.27],[-11.77,70.68],[-12.14,77.08],[-12.41,83.3],[-12.63,89.34],[-12.86,95.38],[-13.08,101.42],[-13.31,107.46],[-13.53,113.5],[-13.74,119.54],[-13.97,125.57],[-14.22,132.29],[-14.48,139.46],[-14.74,146.63],[-15.02,153.83],[-15.28,161.01],[-15.55,168.2],[-15.82,175.39],[-16.05,182.45],[-16.24,189.34],[-16.44,196.24],[-16.64,203.14],[-16.84,210.04],[-17.03,216.93]],otros:[{que:"retenida (viento) con protector amarillo",p:[4.64,-57.9],lado:"este",d:187.8},{que:"gabinete verde con r\xF3tulos de peligro y bolardo amarillo",p:[3.49,-42.57],lado:"este",d:203.2},{que:"caja de empalme en el tendido P01-P05",p:[-6.97,-34.1],lado:"oeste",d:212.2},{que:"se\xF1al de zona escolar",p:[-7.77,1.76],lado:"oeste",d:248.1},{que:"parqu\xEDmetro solar",p:[-8.31,15.7],lado:"oeste",d:262.2},{que:"espacios de estacionamiento 5019 \u2192 5001, 5,7 m cada uno",p:[-8.6,22.07],lado:"oeste",d:268.6},{que:"se\xF1al de estacionamiento E",p:[-9.88,41.17],lado:"oeste",d:287.8},{que:"se\xF1al 25 KPH velocidad m\xE1xima",p:[-11.39,64.27],lado:"oeste",d:310.9},{que:"se\xF1al de zona escolar",p:[-12.68,90.55],lado:"oeste",d:337.1},{que:"se\xF1al de estacionamiento E",p:[-13.21,105.05],lado:"oeste",d:351.6},{que:"se\xF1al de ALTO en la esquina",p:[-17.58,236.24],lado:"oeste",d:482.9},{que:"verja gris sobre muro bajo, al fondo de la acera",p:[-7.17,-25.14],lado:"oeste",d:221.2},{que:"verja y portones azules, al fondo de la acera",p:[-8.67,23.35],lado:"oeste",d:269.9}],lugares:[{nombre:"MEP - Edificio Bloque A",d:0,a:24,lado:"este"},{nombre:"Avenida 17",d:0,a:60,lado:"este"},{nombre:"MEP - Parqueo Este",d:88.2,a:37,lado:"este"},{nombre:"Museo Hist\xF3rico y Tecnol\xF3gico Grupo ICE",d:88.2,a:42,lado:"oeste"},{nombre:"Suites Cristina",d:88.2,a:38,lado:"este"},{nombre:"MEP - Edificio Bloque B",d:88.2,a:52,lado:"este"},{nombre:"Palma Real Hotel y Casino",d:204.5,a:42,lado:"este"},{nombre:"Parque Palma Real",d:204.5,a:21,lado:"este"},{nombre:"Cond. Corobic\xED del Oeste",d:253.1,a:32,lado:"este"},{nombre:"MTA",d:253.1,a:32,lado:"este"},{nombre:"Cond. Menorca",d:270.6,a:26,lado:"este"},{nombre:"Consensus Abogados",d:325,a:20,lado:"este"},{nombre:"Restaurant Flor de Loto",d:325,a:29,lado:"este"},{nombre:"Aptos. Balot de Escaz\xFA",d:325,a:20,lado:"este"},{nombre:"Oficentro Las Torres",d:374.6,a:19,lado:"este"},{nombre:"Soka Gakkai Internacional de Costa Rica",d:424.9,a:18,lado:"este"},{nombre:"Soda Alberto",d:424.9,a:29,lado:"este"},{nombre:"Subway",d:492.1,a:26,lado:"este"},{nombre:"Agencia ICE",d:492.1,a:36,lado:"este"},{nombre:"ICE",d:492.1,a:21,lado:"oeste"},{nombre:"ICE Sabana",d:492.1,a:20,lado:"oeste"},{nombre:"Uno Sports",d:492.1,a:34,lado:"este"},{nombre:"KFC",d:492.1,a:41,lado:"este"},{nombre:"Avenida de Las Am\xE9ricas",d:492.1,a:13,lado:"oeste"}]};var ui={x0:-3468.56,z0:-2412.63,paso:10,w:641,h:600,escala:60,lat0:9.94045,lon0:-84.102,kx:1827.481,kz:1842.333,origen:1134,fuente:"Terrain Tiles (Mapzen, AWS Open Data): SRTM, GMTED2010, ETOPO1 y otras fuentes abiertas"};var Hp="./datos-BGOTRZWN.bin";function kp(a){let e=[],t=0;for(let s=0;s<a.length-1;s++){let[o,l]=a[s],[c,d]=a[s+1],p=Math.hypot(c-o,d-l);e.push({x0:o,z0:l,tx:(c-o)/p,tz:(d-l)/p,l:p,d0:t}),t+=p}let n=s=>{let o=e[0];for(let l of e)if(l.d0<=s)o=l;else break;return o};function i(s,o=0,l={}){let c=n(s),d=s-c.d0;return l.x=c.x0+c.tx*d+c.tz*o,l.z=c.z0+c.tz*d-c.tx*o,l.tx=c.tx,l.tz=c.tz,l}function r(s,o,l={}){let c=1/0;for(let d=0;d<e.length;d++){let p=e[d],u=s-p.x0,f=o-p.z0,x=u*p.tx+f*p.tz;d>0&&(x=Math.max(0,x)),d<e.length-1&&(x=Math.min(p.l,x));let _=u-p.tx*x,m=f-p.tz*x,h=_*_+m*m;h<c&&(c=h,l.d=p.d0+x,l.a=_*p.tz-m*p.tx)}return l}return{largo:t,en:i,aVia:r}}function Vp(a,e,t,n){let i={},r={};return function(o,l){for(let u of t){let f=o.x-u.x,x=o.z-u.z,_=u.r+l,m=f*f+x*x;if(m<_*_&&m>1e-9){let h=_/Math.sqrt(m);o.x=u.x+f*h,o.z=u.z+x*h}}a.aVia(o.x,o.z,i);let c=Math.max(n.d0,Math.min(n.d1,i.d)),d=Math.max(-n.a,Math.min(n.a,i.a)),p=c!==i.d||d!==i.a;i.d=c,i.a=d;for(let u of e){if(i.d<=u.d0-l||i.d>=u.d1+l||i.a<=u.a0-l||i.a>=u.a1+l)continue;let f=i.d-(u.d0-l),x=u.d1+l-i.d,_=i.a-(u.a0-l),m=u.a1+l-i.a,h=Math.min(f,x,_,m);h===f?i.d=u.d0-l:h===x?i.d=u.d1+l:h===_?i.a=u.a0-l:i.a=u.a1+l,p=!0}return p&&(a.en(i.d,i.a,r),o.x=r.x,o.z=r.z),o}}var kl=new He;function Mn(){let a=[],e=[],t=[],n=[];function i(l,c,d,p,u,f){let x=a.length/3;kl.set(u);for(let _ of[l,c,d,p])a.push(_[0],_[1],_[2]),e.push(kl.r,kl.g,kl.b);f?t.push(...f):t.push(0,0,0,0,0,0,0,0),n.push(x,x+1,x+2,x,x+2,x+3)}function r(l,c,d,p,{techo:u=p,bahia:f=0,piso:x=3.2}={}){for(let _=0;_<4;_++){let m=l[_],h=l[(_+1)%4],b=f?Math.max(1,Math.round(Math.hypot(h[0]-m[0],h[1]-m[1])/f)):0,M=f?Math.max(1,Math.round((d-c)/x)):0;i([m[0],c,m[1]],[h[0],c,h[1]],[h[0],d,h[1]],[m[0],d,m[1]],p,[0,0,b,0,b,M,0,M])}i([l[0][0],d,l[0][1]],[l[1][0],d,l[1][1]],[l[2][0],d,l[2][1]],[l[3][0],d,l[3][1]],u)}function s(l,c,d,p,u,f,x,_=0,m){let h=Math.cos(_),b=Math.sin(_),M=p/2,v=f/2;r([[-M,-v],[-M,v],[M,v],[M,-v]].map(([E,S])=>[l+E*h+S*b,d-E*b+S*h]),c,c+u,x,m)}function o(){let l=new pt;return l.setAttribute("position",new tt(a,3)),l.setAttribute("color",new tt(e,3)),l.setAttribute("uv",new tt(t,2)),l.setIndex(n),l.computeVertexNormals(),l}return{quad:i,prisma:r,caja:s,geometria:o}}var Wa=a=>()=>{a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};var It={asfalto:3882564,pintura:15329244,amarillo:14924079,acera:12433838,cordon:9736330,lote:7314520,pasto:6064713,concreto:11117980,madera:7035723,metal:9212569,losa:7630955,zinc:9325370},jp=[14273972,13219740,14934230,12109004,14203296,13620930,14731686,11122630],rn=3.65,Vl=6,En=64,jl=3.25,Wt=.15,$l=.9,$p=-2.45,v_=[[/ICE Sabana/,{pisos:13,color:3108789,cartel:739983}],[/ICE|Museo/,{pisos:4,color:3834564,cartel:739983}],[/Hotel|Casino/,{pisos:9,color:15129016,cartel:8007214}],[/Cond|Aptos|Suites|Torres|MEP|Abogados|Soka/,{pisos:6,cartel:4082262}],[/Soda|Subway|KFC|Restaurant|Sports|MTA/,{pisos:1,cartel:10107678}]];function __(){let a=document.createElement("canvas");a.width=a.height=64;let e=a.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,64),e.fillStyle="#e4e4e0",e.fillRect(0,58,64,6),e.fillStyle="#d2d2cc",e.fillRect(16,14,32,32);let t=e.createLinearGradient(0,16,0,44);t.addColorStop(0,"#7f9db5"),t.addColorStop(1,"#3d5468"),e.fillStyle=t,e.fillRect(18,16,28,28),e.fillStyle="#d2d2cc",e.fillRect(31,16,2,28);let n=new Oa(a);return n.wrapS=n.wrapT=Fi,n.colorSpace=Vt,n.anisotropy=4,n}function qp(a,e){let t=Wa(50),n={},i=Mn(),r=Mn(),s=Mn(),o=Mn(),l=(O,oe,me=0)=>(e.en(O,oe,n),[n.x,me,n.z]),c=O=>(e.en(O,0,n),Math.atan2(n.tx,n.tz));function d(O,oe,me,ve,_e,Re,he,ee=8){let Q=Math.max(1,Math.ceil((me-oe)/ee));for(let se=0;se<Q;se++){let ge=oe+(me-oe)*se/Q,N=oe+(me-oe)*(se+1)/Q;O.quad(l(ge,ve,Re),l(N,ve,Re),l(N,_e,Re),l(ge,_e,Re),he)}}let p=(O,oe,me,ve,_e,Re,he)=>{let ee=l(O,oe),Q=l(me,ve);i.quad([ee[0],_e,ee[2]],[Q[0],_e,Q[2]],[Q[0],Re,Q[2]],[ee[0],Re,ee[2]],he)},u=[0,...a.cruces.filter(O=>O.vias.some(oe=>/^(residential|secondary)/.test(oe))).map(O=>O.d)],f=-14,x=e.largo+14;d(i,f-60,x+60,-En-40,En+40,-.03,It.pasto,40),d(i,f,x,-rn,rn,0,It.asfalto);for(let O of u)for(let oe of[-1,1])d(i,O-jl,O+jl,oe>0?rn:-En-40,oe>0?En+40:-rn,0,It.asfalto,8);let _=[];for(let O=0;O<u.length-1;O++)_.push([u[O]+jl,u[O+1]-jl]);for(let[O,oe]of _)for(let me of[-1,1]){let ve=me>0?rn:-Vl,_e=me>0?Vl:-rn,Re=me>0?Vl:-En,he=me>0?En:-Vl;d(i,O,oe,ve,_e,Wt,It.acera),d(i,O,oe,Re,he,Wt,It.lote,16);let ee=Math.ceil((oe-O)/8);for(let Q=0;Q<ee;Q++){let se=O+(oe-O)*Q/ee,ge=O+(oe-O)*(Q+1)/ee;me>0?p(se,rn,ge,rn,0,Wt,It.cordon):p(ge,-rn,se,-rn,0,Wt,It.cordon)}me>0?(p(O,En,O,rn,0,Wt,It.cordon),p(oe,rn,oe,En,0,Wt,It.cordon)):(p(O,-rn,O,-En,0,Wt,It.cordon),p(oe,-En,oe,-rn,0,Wt,It.cordon))}for(let O of[-1,1])d(i,f,x,O*3.42-.05,O*3.42+.05,.012,It.amarillo);let m=a.otros.find(O=>/espacios de estacionamiento/.test(O.que)),h={d0:m.d,n:19,paso:5.7,a:$p};d(i,m.d-1,m.d+h.n*h.paso,-1.36,-1.26,.012,It.pintura);for(let O=0;O<=h.n;O++)d(i,m.d+O*5.7-.05,m.d+O*5.7+.05,-3.4,-1.3,.012,It.pintura);d(i,e.largo-6.4,e.largo-6,-1.3,3.4,.012,It.pintura);let b=[],M=[],v=[];for(let[O,oe]of _)for(let me of["este","oeste"])for(let ve=O+4;ve<oe-12;){let _e=Math.min(14+t()*16,oe-4-ve),Re=7.4+t()*3,he=12+t()*10;b.push({lado:me,d0:ve,d1:ve+_e,frente:Re,fondo:he,pisos:1+Math.floor(t()*t()*5),color:jp[Math.floor(t()*jp.length)]}),ve+=_e+1.5+t()*3}let E=[];for(let O of a.lugares){let oe=b.filter(_e=>_e.lado===O.lado&&!_e.nombre);if(!oe.length)continue;let me=oe.reduce((_e,Re)=>Math.abs((Re.d0+Re.d1)/2-O.d)<Math.abs((_e.d0+_e.d1)/2-O.d)?Re:_e);if(me.nombre=O.nombre,/Parque|Parqueo/.test(O.nombre)){me.vacio=!0;continue}let ve=v_.find(([_e])=>_e.test(O.nombre))?.[1]??{};Object.assign(me,ve),E.push(me)}for(let O of b){if(O.vacio)continue;let oe=O.lado==="este"?1:-1,me=oe>0?O.frente:-(O.frente+O.fondo),ve=oe>0?O.frente+O.fondo:-O.frente,_e=O.pisos*3.2+.6,Re=[l(O.d0,me),l(O.d1,me),l(O.d1,ve),l(O.d0,ve)].map(he=>[he[0],he[2]]);s.prisma(Re,Wt,_e,O.color,{techo:O.pisos<=2?It.zinc:It.losa,bahia:3}),M.push({d0:O.d0,d1:O.d1,a0:me,a1:ve}),Object.assign(O,{a0:me,a1:ve,h:_e})}let S=document.createElement("canvas");S.width=S.height=1024;let T=S.getContext("2d");T.textAlign="center",T.textBaseline="middle",E.slice(0,32).forEach((O,oe)=>{let me=oe%2,ve=oe>>1,_e=me*512,Re=ve*64;T.fillStyle="#"+(O.cartel??2832970).toString(16).padStart(6,"0"),T.fillRect(_e,Re,512,64),T.fillStyle="#fff",T.font="bold 34px system-ui, Arial, sans-serif";let he=T.measureText(O.nombre).width;he>480&&(T.font=`bold ${Math.floor(34*480/he)}px system-ui, Arial, sans-serif`),T.fillText(O.nombre,_e+256,Re+34);let ee=O.lado==="este"?1:-1,Q=ee>0?O.a0-.06:O.a1+.06,se=(O.d0+O.d1)/2,ge=Math.min(O.d1-O.d0-2,9)/2,N=Math.min(O.h-.9,3.7),Be=l(se-ee*ge,Q),Ee=l(se+ee*ge,Q),D=me/2,y=D+.5,z=1-ve/16,X=z-1/16;o.quad([Be[0],N-.55,Be[2]],[Ee[0],N-.55,Ee[2]],[Ee[0],N+.55,Ee[2]],[Be[0],N+.55,Be[2]],16777215,[D,X,y,X,y,z,D,z])});let g=a.postes.map(O=>(e.aVia(O.p[0],O.p[1],n),{...O,x:O.p[0],z:O.p[1],d:n.d,a:n.a,rumbo:c(n.d)})),A=Object.fromEntries(g.map(O=>[O.id,O])),C=new Pt(new hn(.13,.18,9.6,10).translate(0,4.8,0),new ct({color:It.concreto,roughness:.9}),g.length),P=g.filter(O=>O.herrajes.some(oe=>/reserva/.test(oe))),L=new Pt(new Dn(.36,.035,6,18),new ct({color:1382170,roughness:.6}),P.length*2),I=new gt;g.forEach((O,oe)=>{I.position.set(O.x,Wt,O.z),I.rotation.set(0,0,0),I.updateMatrix(),C.setMatrixAt(oe,I.matrix),O.herrajes.includes("cruceta")&&r.caja(O.x,9,O.z,2.2,.1,.12,It.madera,O.rumbo),v.push({x:O.x,z:O.z,r:.2})}),P.forEach((O,oe)=>[-1,1].forEach((me,ve)=>{let _e=l(O.d+me*.9,O.a,6.25);I.position.set(_e[0],_e[1],_e[2]),I.rotation.set(0,O.rumbo+Math.PI/2,0),I.updateMatrix(),L.setMatrixAt(oe*2+ve,I.matrix)}));let R=[],U=[],F=new He;function H(O,oe,me,ve){F.set(ve);for(let _e=0;_e<12;_e++)for(let Re of[_e/12,(_e+1)/12])R.push(O[0]+(oe[0]-O[0])*Re,O[1]+(oe[1]-O[1])*Re-me*4*Re*(1-Re),O[2]+(oe[2]-O[2])*Re),U.push(F.r,F.g,F.b)}for(let O of a.tendido){let oe=A[O.de],me=A[O.a];for(let ve=0;ve<3;ve++)H([oe.x,6.3+ve*.18,oe.z],[me.x,6.3+ve*.18,me.z],.55,921361);for(let ve of[-.95,0,.95])H(l(oe.d,oe.a+ve,9.15),l(me.d,me.a+ve,9.15),.8,3356218)}let j=new pt;j.setAttribute("position",new tt(R,3)),j.setAttribute("color",new tt(U,3));let Y=a.arboles.map(O=>({x:O[0],z:O[1],k:.8+t()*.5}));for(let O of b)if(O.vacio)for(let oe=0;oe<6;oe++){let me=l(O.d0+t()*(O.d1-O.d0),(O.lado==="este"?1:-1)*(O.frente+2+t()*O.fondo));Y.push({x:me[0],z:me[2],k:1+t()*.6})}for(let O=0;O<26;O++){let oe=l(t()*e.largo,(t()<.5?-1:1)*(38+t()*24));Y.push({x:oe[0],z:oe[2],k:1+t()*.8})}let W=new Pt(new hn(.13,.2,3,6).translate(0,1.5,0),new ct({color:5916210,roughness:1}),Y.length),ae=new Pt(new ri(1.7,1).translate(0,4.1,0),new ct({roughness:1,flatShading:!0}),Y.length);Y.forEach((O,oe)=>{I.position.set(O.x,Wt,O.z),I.rotation.set(0,t()*6,0),I.scale.setScalar(O.k),I.updateMatrix(),W.setMatrixAt(oe,I.matrix),ae.setMatrixAt(oe,I.matrix),ae.setColorAt(oe,F.setHSL(.27+t()*.08,.45+t()*.15,.26+t()*.1)),v.push({x:O.x,z:O.z,r:.25})}),I.scale.setScalar(1);let ye=(O,oe,me)=>{r.caja(O.p[0],Wt,O.p[1],.06,2.3,.06,It.metal),r.caja(O.p[0],1.9,O.p[1],.56,.56,.04,oe,me)};for(let O of a.otros){e.aVia(O.p[0],O.p[1],n);let oe=c(n.d);if(/ALTO/.test(O.que))ye(O,12593182,oe);else if(/25 KPH/.test(O.que))ye(O,15856108,oe);else if(/zona escolar/.test(O.que))ye(O,15320363,oe);else if(/estacionamiento E/.test(O.que))ye(O,2056112,oe);else if(/parquímetro/.test(O.que))r.caja(O.p[0],Wt,O.p[1],.08,1.2,.08,It.metal),r.caja(O.p[0],1.3,O.p[1],.3,.45,.2,2903667,oe);else if(/gabinete/.test(O.que)){r.caja(O.p[0],Wt,O.p[1],.5,1.35,.95,3046735,oe);let me=l(n.d+.9,n.a-.5);r.caja(me[0],Wt,me[2],.14,.9,.14,It.amarillo),M.push({d0:n.d-.5,d1:n.d+.5,a0:n.a-.3,a1:n.a+.3})}else/retenida/.test(O.que)?r.caja(O.p[0],Wt,O.p[1],.12,2.2,.12,It.amarillo,oe):/caja de empalme/.test(O.que)&&r.caja(O.p[0],6.05,O.p[1],.24,.24,.6,1184790,oe)}let $=A.P05,ce=$.d+15,be=l(ce,$p),Se={x:be[0],z:be[2],rumbo:c(ce)},q=new ht,V=new ct({vertexColors:!0,roughness:.92}),de=(O,oe,{sombra:me=!0,recibe:ve=!0}={})=>{let _e=new Ye(O.geometria(),oe);return _e.castShadow=me,_e.receiveShadow=ve,_e};q.add(de(i,V,{sombra:!1}),de(r,V),de(s,new ct({map:__(),vertexColors:!0,roughness:.85})),de(o,new vn({map:Object.assign(new Oa(S),{colorSpace:Vt,anisotropy:4})}),{sombra:!1,recibe:!1}),new jn(j,new Pn({vertexColors:!0})),C,L,W,ae);for(let O of[C,W,ae])O.castShadow=!0;q.traverse(O=>{O.matrixAutoUpdate=!1,O.updateMatrix()});let pe={};function fe(O,oe){if(e.aVia(O,oe,pe),Math.abs(pe.a)<=rn||Math.abs(pe.a)>En)return 0;for(let[me,ve]of _)if(pe.d>=me&&pe.d<=ve)return Wt;return 0}return{grupo:q,cajas:M,circulos:v,altura:fe,postes:g,estacionamiento:h,limites:{d0:f+2,d1:x-2,a:En-2},inicio:{d:ce-1,a:-4.5},dPick:ce,trabajo:$,estacionado:Se,BORDE:En+40,D0:f-60,D1:x+60}}var jd=2.5,Ma=40,Wl=5,hi=128,Wp=hi*Wl/2,y_=12,S_=14,ql=(a,e)=>{let t=Math.imul(a,374761393)+Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function us(a,e){let t=Math.floor(a),n=Math.floor(e),i=a-t,r=e-n,s=i*i*(3-2*i),o=r*r*(3-2*r);return(ql(t,n)*(1-s)+ql(t+1,n)*s)*(1-o)+(ql(t,n+1)*(1-s)+ql(t+1,n+1)*s)*o}var An=(a,e,t)=>{let n=Math.max(0,Math.min(1,(t-a)/(e-a)));return n*n*(3-2*n)},Un=Object.fromEntries(Object.entries({fondo:2051950,arena:14272911,selva:3107626,potrero:7248450,sabana:10263114,nuboso:2381114,paramo:8157774,roca:7825754,pueblo:11118492,pasto:6064713}).map(([a,e])=>[a,new He(e)]));function Xp(a,e,t,n,i=[]){let{x0:r,z0:s,paso:o,w:l,h:c}=e,d=jd/e.escala,p=e.origen*d,u=-p,f=r+(l-1)*o,x=s+(c-1)*o,_={e:0,pend:0,llano:0},m={},h={dist:0,y:0},b=null;function M(he,ee){let Q=Math.max(0,Math.min(l-1.001,(he-r)/o)),se=Math.max(0,Math.min(c-1.001,(ee-s)/o)),ge=Q|0,N=se|0,Be=Q-ge,Ee=se-N,D=N*l+ge,y=a[D],z=a[D+1],X=a[D+l],ne=a[D+l+1],Me=(y*(1-Be)+z*Be)*(1-Ee)+(X*(1-Be)+ne*Be)*Ee;_.e=Me,_.pend=Math.hypot((z-y)*(1-Ee)+(ne-X)*Ee,(X-y)*(1-Be)+(ne-z)*Be)/(o*e.escala);let Ae=Me>0?Math.min(7,_.pend*16):0,re=Me*d-p+Ae*((us(he*.011,ee*.011)-.5)*1.5+(us(he*.037,ee*.037)-.5)*.6);for(let le of i){let Te=he-le.x,ke=ee-le.z;if(Math.abs(Te)>le.R||Math.abs(ke)>le.R)continue;let Ce=Math.hypot(Te,ke),we=le.cima*d-p-le.alto*Math.pow(Ce/le.R,.85)-Math.max(0,6-Ce)*.8;Ce<le.R&&we>re&&(re=we,_.pend=.5,_.e=(re+p)/d)}return re}function v(he,ee){let Q=M(he,ee);if(_.llano=0,Math.abs(he)<420&&ee>-480&&ee<480){t.aVia(he,ee,m);let se=Math.hypot(Math.max(0,Math.abs(m.a)-100),Math.max(0,-70-m.d,m.d-t.largo-70));if(se<150){let ge=An(4,150,se);Q=(se<4?-.6+.15*se:0)*(1-ge)+Q*ge,_.llano=1-ge}}for(let se of n){if(Math.abs(he-se.x)>se.r+60||Math.abs(ee-se.z)>se.r+60)continue;let ge=An(se.r,se.r+60,Math.hypot(he-se.x,ee-se.z));ge<1&&(Q=se.y*(1-ge)+Q*ge,_.llano=Math.max(_.llano,1-ge))}return Q}for(let he of n)he.y=Math.max(u+1.5,M(he.x,he.z));function E(he,ee){let Q=v(he,ee);if(b&&b.cerca(he,ee,h).dist<45){let se=An(16,45,h.dist);Q=h.y*(1-se)+Q*se}return Q}let S=new He;function T(he,ee,Q,se){let ge=_.e,N=_.pend*jd,Be=us(he*.06,ee*.06),Ee=e.lon0+he/e.kx,D=e.lat0-ee/e.kz;if(ge<1)S.copy(Un.arena).lerp(Un.fondo,An(0,45,-ge));else if(ge<14)S.copy(Un.arena);else{let z=An(84.72,85.15,-Ee)*An(9.7,10.15,D)*(1-An(500,900,ge));S.copy(Un.selva).lerp(Un.potrero,An(.42,.7,Be)*(1-An(.1,.3,N))).lerp(Un.sabana,z*(.6+.4*Be)),S.lerp(Un.nuboso,An(1300,1900,ge)).lerp(Un.paramo,An(2900,3300,ge)).lerp(Un.roca,An(.75,1.2,N)),S.lerp(Un.arena,1-An(14,30,ge))}_.llano>0&&S.lerp(Math.abs(he)<420&&Math.abs(ee)<480?Un.pasto:Un.pueblo,_.llano*.8);let y=.88+Be*.24;Q[se]=S.r*y,Q[se+1]=S.g*y,Q[se+2]=S.b*y}let g=Math.floor((f-r)/Ma)+1,A=Math.floor((x-s)/Ma)+1,C=new Float32Array(g*A*3),P=new Float32Array(g*A*3),L=new Float32Array(g*A*3),I=new Uint32Array((g-1)*(A-1)*6),R=new pt;R.setAttribute("position",new mt(C,3)),R.setAttribute("color",new mt(P,3)),R.setAttribute("normal",new mt(L,3)),R.setIndex(new mt(I,1));function U(he,ee,Q,se,ge){for(let N=0;N<se;N++)for(let Be=0;Be<Q;Be++){let Ee=(N*Q+Be)*3,D=he[(N*Q+Math.max(0,Be-1))*3+1],y=he[(N*Q+Math.min(Q-1,Be+1))*3+1],z=he[(Math.max(0,N-1)*Q+Be)*3+1],X=he[(Math.min(se-1,N+1)*Q+Be)*3+1],ne=(D-y)/(2*ge),Me=(z-X)/(2*ge),Ae=Math.hypot(ne,1,Me);ee[Ee]=ne/Ae,ee[Ee+1]=1/Ae,ee[Ee+2]=Me/Ae}}function F(){for(let he=0;he<A;he++)for(let ee=0;ee<g;ee++){let Q=(he*g+ee)*3,se=r+ee*Ma,ge=s+he*Ma;C[Q]=se,C[Q+1]=E(se,ge),C[Q+2]=ge,T(se,ge,P,Q)}U(C,L,g,A,Ma);for(let he of["position","color","normal"])R.attributes[he].needsUpdate=!0;R.computeBoundingSphere()}function H(he,ee){let Q=0;for(let se=0;se<A-1;se++)for(let ge=0;ge<g-1;ge++){if(ge>=he-8&&ge<he+8&&se>=ee-8&&se<ee+8)continue;let N=se*g+ge,Be=N+g;I[Q++]=N,I[Q++]=Be,I[Q++]=N+1,I[Q++]=N+1,I[Q++]=Be,I[Q++]=Be+1}R.setDrawRange(0,Q),R.index.needsUpdate=!0}let j=hi+1,Y=j*j+4*j,W=new Float32Array(Y*3),ae=new Float32Array(Y*3),ye=new Float32Array(Y*3),$=new Float32Array(j*j*3),ce=new Float32Array(j*j*3),be=[];for(let he=0;he<hi;he++)for(let ee=0;ee<hi;ee++){let Q=he*j+ee,se=Q+j;be.push(Q,se,Q+1,Q+1,se,se+1)}let Se=[[],[],[],[]];for(let he=0;he<j;he++)Se[0].push(he),Se[1].push(hi*j+he),Se[2].push(he*j),Se[3].push(he*j+hi);Se.forEach((he,ee)=>{for(let Q=0;Q<hi;Q++){let se=he[Q],ge=he[Q+1],N=j*j+ee*j+Q,Be=N+1;ee===0||ee===3?be.push(se,ge,N,ge,Be,N):be.push(se,N,ge,ge,N,Be)}});let q=new pt;q.setAttribute("position",new mt(W,3)),q.setAttribute("color",new mt(ae,3)),q.setAttribute("normal",new mt(ye,3)),q.setIndex(be);let V=new ct({vertexColors:!0,roughness:1,side:Ln}),de=new Ye(R,V),pe=new Ye(q,V),fe=new Ye(new si(12e3,12e3).rotateX(-Math.PI/2),new ct({color:2847639,roughness:.22,metalness:.1,transparent:!0,opacity:.9}));fe.position.y=u;let O=new ht;O.add(de,pe,fe);for(let he of[de,pe])he.receiveShadow=!0,he.frustumCulled=!1;let oe=null,me=null,ve=null;function _e(he){let{ci:ee,cj:Q}=me,se=r+(ee-8)*Ma,ge=s+(Q-8)*Ma;for(let N=0;N<he&&me.fila<j;N++,me.fila++){let Be=me.fila,Ee=ge+Be*Wl;for(let D=0;D<j;D++){let y=(Be*j+D)*3,z=se+D*Wl;$[y]=z,$[y+1]=E(z,Ee),$[y+2]=Ee,T(z,Ee,ce,y)}}if(!(me.fila<j)){W.set($),ae.set(ce),U(W,ye,j,j,Wl),Se.forEach((N,Be)=>N.forEach((Ee,D)=>{let y=(j*j+Be*j+D)*3;W[y]=W[Ee*3],W[y+1]=W[Ee*3+1]-y_,W[y+2]=W[Ee*3+2];for(let z=0;z<3;z++)ae[y+z]=ae[Ee*3+z],ye[y+z]=ye[Ee*3+z]}));for(let N of["position","color","normal"])q.attributes[N].needsUpdate=!0;H(ee,Q),oe={ci:ee,cj:Q,x:se+Wp,z:ge+Wp},me=null,ve?.(oe.x,oe.z)}}function Re(he,ee,Q=!1){let se=Math.max(8,Math.min(g-9,Math.round((he-r)/Ma))),ge=Math.max(8,Math.min(A-9,Math.round((ee-s)/Ma)));!me&&(!oe||se!==oe.ci||ge!==oe.cj)&&(me={ci:se,cj:ge,fila:0}),me&&_e(Q?j:S_)}return{grupo:O,MAR:u,EX:jd,limites:{x0:r+60,x1:f-60,z0:s+60,z1:x-60},altura:E,alturaBase:v,relieve:M,cada:Re,muestra:_,listo(he,ee){b=he,ve=ee,F()}}}var M_=8,er=60,Xl=46,E_=3.6;function Yp(a,e,t,n=[]){let i=a.map(l=>{let c=l.puntos,d=[],p=[];for(let h=0;h<c.length-1;h++){let b=c[Math.max(0,h-1)],M=c[h],v=c[h+1],E=c[Math.min(c.length-1,h+2)],S=Math.max(1,Math.ceil(Math.hypot(v[0]-M[0],v[1]-M[1])/M_));for(let T=0;T<S;T++){let g=T/S,A=g*g,C=A*g;d.push(.5*(2*M[0]+(v[0]-b[0])*g+(2*b[0]-5*M[0]+4*v[0]-E[0])*A+(3*M[0]-b[0]-3*v[0]+E[0])*C)),p.push(.5*(2*M[1]+(v[1]-b[1])*g+(2*b[1]-5*M[1]+4*v[1]-E[1])*A+(3*M[1]-b[1]-3*v[1]+E[1])*C))}}d.push(c.at(-1)[0]),p.push(c.at(-1)[1]);let u=d.length,f=d.map((h,b)=>Math.max(t+1.5,e(h,p[b]))),x=new Uint8Array(u);l.y0!==void 0&&(f[0]=l.y0,x[0]=1);for(let h=0;h<u;h++)for(let b of n)Math.hypot(d[h]-b.x,p[h]-b.z)<b.r*.6&&(f[h]=Math.max(t+1.5,b.y),x[h]=1);x[u-1]=1;for(let h=0;h<6e3;h++){let b=0;for(let M=1;M<u-1;M++)x[M]||(f[M]=Math.max(t+1.5,(f[M-1]+2*f[M]+f[M+1])/4));for(let M=1;M<u;M++)b=Math.max(b,Math.abs(f[M]-f[M-1])/Math.hypot(d[M]-d[M-1],p[M]-p[M-1]));if(b<.13&&h>20)break}let _=new Array(u),m=new Array(u);for(let h=0;h<u;h++){let b=Math.max(0,h-1),M=Math.min(u-1,h+1),v=Math.hypot(d[M]-d[b],p[M]-p[b])||1;_[h]=(p[M]-p[b])/v,m[h]=-(d[M]-d[b])/v}return{n:l.n,X:d,Z:p,Y:f,NX:_,NZ:m}}),r=new Map,s=(l,c)=>(l+2048)*4096+(c+2048);i.forEach((l,c)=>{for(let d=0;d<l.X.length-1;d++){let p=Math.floor((Math.min(l.X[d],l.X[d+1])-Xl)/er),u=Math.floor((Math.max(l.X[d],l.X[d+1])+Xl)/er),f=Math.floor((Math.min(l.Z[d],l.Z[d+1])-Xl)/er),x=Math.floor((Math.max(l.Z[d],l.Z[d+1])+Xl)/er);for(let _=p;_<=u;_++)for(let m=f;m<=x;m++){let h=s(_,m),b=r.get(h);b||r.set(h,b=[]),b.push(c,d)}}});function o(l,c,d){d.dist=1/0;let p=r.get(s(Math.floor(l/er),Math.floor(c/er)));if(!p)return d;for(let u=0;u<p.length;u+=2){let f=i[p[u]],x=p[u+1],_=f.X[x],m=f.Z[x],h=f.X[x+1]-_,b=f.Z[x+1]-m,M=h*h+b*b,v=Math.max(0,Math.min(1,((l-_)*h+(c-m)*b)/M)),E=Math.hypot(l-_-h*v,c-m-b*v);if(E<d.dist){let S=Math.sqrt(M);d.dist=E,d.y=f.Y[x]+(f.Y[x+1]-f.Y[x])*v,d.ruta=p[u],d.tx=h/S,d.tz=b/S}}return d}return{rutas:i,cerca:o,MEDIO:E_}}function Jp(a,e=1500){let t=new Float32Array(e*2*12),n=new Float32Array(e*2*12),i=new Float32Array(e*2*12),r=new Uint32Array(e*2*6);for(let f=0;f<e*2;f++){r.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6);for(let x=0;x<4;x++)i[f*12+x*3+1]=1}let s=new pt;s.setAttribute("position",new mt(t,3)),s.setAttribute("color",new mt(n,3)),s.setAttribute("normal",new mt(i,3)),s.setIndex(new mt(r,1));let o=new Ye(s,new ct({vertexColors:!0,roughness:.95}));o.frustumCulled=!1,o.receiveShadow=!0;let l=new He(3882564),c=new He(14924079),d=0;function p(f,x,_,m,h,b){if(d>=e*2)return;let M=d++*12,v=x+1,E=[[x,_],[v,_],[v,m],[x,m]];for(let S=0;S<4;S++){let[T,g]=E[S];t[M+S*3]=f.X[T]+f.NX[T]*g,t[M+S*3+1]=f.Y[T]+h,t[M+S*3+2]=f.Z[T]+f.NZ[T]*g,n[M+S*3]=b.r,n[M+S*3+1]=b.g,n[M+S*3+2]=b.b}}function u(f,x,_){d=0;for(let m of a.rutas)for(let h=0;h<m.X.length-1;h++)Math.abs(m.X[h]-f)>_||Math.abs(m.Z[h]-x)>_||(p(m,h,-a.MEDIO,a.MEDIO,.12,l),h%2===0&&p(m,h,-.09,.09,.15,c));s.setDrawRange(0,d*6),s.attributes.position.needsUpdate=s.attributes.color.needsUpdate=!0}return{malla:o,rehacer:u}}var tr=11,hs=240,Yl=1100,pi=(a,e,t)=>{let n=Math.imul(a,73856093)^Math.imul(e,19349663)^Math.imul(t,83492791);return n=Math.imul(n^n>>>15,2246822519),((n^n>>>13)>>>0)/4294967296},A_={palma:[5.2,.7,2.1,.7,5148474],selva:[4.2,1.1,2.3,2,2911019],seco:[3.2,1.2,3.1,1,8163132],cipres:[3,.9,1,2.7,2314810]};function Zp(a,e,t){let n=new Pt(new hn(.11,.17,1,6).translate(0,.5,0),new ct({color:5916210,roughness:1}),Yl),i=new Pt(new ri(1,1),new ct({roughness:1,flatShading:!0}),Yl),r=new ht;r.add(n,i);for(let d of[n,i])d.frustumCulled=!1,d.count=0;let s=new gt,o=new He,l={dist:0};function c(d,p){let u=0,f=Math.floor((d-hs)/tr),x=Math.floor((d+hs)/tr),_=Math.floor((p-hs)/tr),m=Math.floor((p+hs)/tr);for(let h=_;h<=m&&u<Yl;h++)for(let b=f;b<=x&&u<Yl;b++){let M=(b+pi(b,h,1))*tr,v=(h+pi(b,h,2))*tr;if(Math.hypot(M-d,v-p)>hs)continue;let E=a.altura(M,v),S=a.muestra,T=S.e;if(T<3||S.llano>.25||S.pend*a.EX>1.1||e.cerca(M,v,l).dist<12)continue;let g=t.lon0+M/t.kx,A=t.lat0-v/t.kz,C=-g>84.9&&A>9.85&&T<700,P=us(M*.013,v*.013),L=T>3e3?.06:C?.16+.3*P:.2+.75*P*P;if(pi(b,h,3)>L)continue;let[I,R,U,F,H]=A_[T<45?"palma":T>1900?"cipres":C?"seco":"selva"],j=.75+pi(b,h,4)*.6;s.position.set(M,E-.1,v),s.rotation.set(0,pi(b,h,5)*6.28,0),s.scale.set(R*j,I*j,R*j),s.updateMatrix(),n.setMatrixAt(u,s.matrix),s.position.y=E+I*j+F*j*.35,s.scale.set(U*j,F*j,U*j),s.updateMatrix(),i.setMatrixAt(u,s.matrix),i.setColorAt(u,o.set(H).offsetHSL((pi(b,h,6)-.5)*.04,0,(pi(b,h,7)-.5)*.08)),u++}n.count=i.count=u,n.instanceMatrix.needsUpdate=i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return{grupo:r,rehacer:c}}var T_=3.1,w_=.95,C_=2.65,R_=27,P_=9,I_=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a));function Kp(a,e){let t=Mn(),n=15921902,i=9212569,r=(h,b,M,v,E,S,T)=>t.caja(h,b,M,v,E,S,T);r(0,.42,0,1.86,.5,5.2,n),r(0,.92,.75,1.78,.78,1.9,n),r(0,1.2,.75,1.82,.42,1.6,1976886),r(0,.92,2.15,1.7,.3,1,n);for(let h of[-.9,.9])r(h,.92,-1.45,.08,.42,2.3,n),r(h*1.035,.62,0,.03,.14,5,739983),r(h*1.035,.5,0,.03,.1,5,14924079);r(0,.92,-2.56,1.86,.42,.08,n);for(let h of[-.86,.86])for(let b of[1.6,-1.6])r(h,0,b,.26,.74,.74,1447963);for(let h of[1.4,-2.3]){for(let b of[-.85,.85])r(b,1.34,h,.06,.75,.06,i);r(0,2.06,h,1.8,.06,.06,i)}let s=new Ye(t.geometria(),new ct({vertexColors:!0,roughness:.6})),o=new ht;o.add(s),o.rotation.order="YXZ";let l={x:e.x,z:e.z,rumbo:e.rumbo,v:0,y:0,ox:e.x,oz:e.z,orumbo:e.rumbo},c=new B;function d(h,b,M,v=c){let E=Math.cos(l.rumbo),S=Math.sin(l.rumbo);return v.set(l.x+h*E+M*S,l.y+b,l.z-h*S+M*E)}function p(){let h=Math.cos(l.rumbo),b=Math.sin(l.rumbo),M=a(l.x+b*1.6,l.z+h*1.6),v=a(l.x-b*1.6,l.z-h*1.6),E=a(l.x+h*.9,l.z-b*.9),S=a(l.x-h*.9,l.z+b*.9);l.y=(M+v+E+S)/4,o.position.set(l.x,l.y,l.z),o.rotation.set(-Math.atan2(M-v,3.2),l.rumbo,Math.atan2(E-S,1.8))}function u(h,b,M,v){let E=M?R_:P_;b.mz>.05?l.v+=(l.v<0?12:4.5)*b.mz*h:b.mz<-.05?l.v+=(l.v>0?11:3)*b.mz*h:l.v-=Math.sign(l.v)*Math.min(Math.abs(l.v),1.6*h),l.v>E&&(l.v=Math.max(E,l.v-7*h)),l.v=Math.max(-5,l.v),l.rumbo+=l.v*Math.tan(-b.mx*.55/(1+Math.abs(l.v)*.09))/T_*h,l.x=Math.max(v.x0,Math.min(v.x1,l.x+Math.sin(l.rumbo)*l.v*h)),l.z=Math.max(v.z0,Math.min(v.z1,l.z+Math.cos(l.rumbo)*l.v*h)),l.ox=l.x,l.oz=l.z,l.orumbo=l.rumbo}function f(h,b,M){Object.assign(l,{x:h,z:b,rumbo:M,v:0,ox:h,oz:b,orumbo:M})}function x(h,b,M,v){l.ox=h,l.oz=b,l.orumbo=M,l.v=v}function _(h){let b=1-Math.exp(-h*10);l.x+=(l.ox-l.x)*b,l.z+=(l.oz-l.z)*b,l.rumbo+=I_(l.rumbo,l.orumbo)*b}function m(h,b){let M=Math.cos(l.rumbo),v=Math.sin(l.rumbo),E=h.x-l.x,S=h.z-l.z,T=E*M-S*v,g=E*v+S*M,A=w_+b,C=C_+b;Math.abs(T)>=A||Math.abs(g)>=C||(A-Math.abs(T)<C-Math.abs(g)?T=Math.sign(T||1)*A:g=Math.sign(g||1)*C,h.x=l.x+T*M+g*v,h.z=l.z-T*v+g*M)}return{grupo:o,st:l,local:d,asentar:p,conducir:u,fijar:f,remoto:x,seguir:_,empujar:m}}var ps={sanjose:{n:"San Jos\xE9",lat:9.9404,lon:-84.102,r:0},alajuela:{n:"Alajuela",lat:10.016,lon:-84.214,r:60},cartago:{n:"Cartago",lat:9.864,lon:-83.919,r:60},sanramon:{n:"San Ram\xF3n",lat:10.088,lon:-84.47,r:45},orotina:{n:"Orotina",lat:9.912,lon:-84.523,r:40},caldera:{n:"Caldera",lat:9.912,lon:-84.722,r:40},esparza:{n:"Esparza",lat:9.994,lon:-84.664,r:40},puntarenas:{n:"Puntarenas",lat:9.977,lon:-84.838,r:45},canas:{n:"Ca\xF1as",lat:10.428,lon:-85.094,r:45},liberia:{n:"Liberia",lat:10.634,lon:-85.44,r:60},lacruz:{n:"La Cruz",lat:11.073,lon:-85.632,r:35},penasblancas:{n:"Pe\xF1as Blancas \xB7 frontera con Nicaragua",lat:11.214,lon:-85.613,r:35},santacruz:{n:"Santa Cruz",lat:10.262,lon:-85.585,r:40},nicoya:{n:"Nicoya",lat:10.148,lon:-85.452,r:45},amistad:{n:"Puente La Amistad",lat:10.247,lon:-85.243,r:0},fortuna:{n:"La Fortuna",lat:10.471,lon:-84.645,r:40},arenal:{n:"Volc\xE1n Arenal",lat:10.463,lon:-84.703,r:0},tilaran:{n:"Tilar\xE1n",lat:10.473,lon:-84.968,r:35},monteverde:{n:"Monteverde",lat:10.31,lon:-84.82,r:0},poas:{n:"Volc\xE1n Po\xE1s",lat:10.198,lon:-84.231,r:0},irazu:{n:"Volc\xE1n Iraz\xFA",lat:9.979,lon:-83.852,r:0},guapiles:{n:"Gu\xE1piles",lat:10.215,lon:-83.79,r:45},siquirres:{n:"Siquirres",lat:10.098,lon:-83.507,r:40},limon:{n:"Lim\xF3n",lat:9.99,lon:-83.035,r:60},tortuguero:{n:"Tortuguero",lat:10.54,lon:-83.5,r:0},cahuita:{n:"Cahuita",lat:9.735,lon:-82.84,r:35},sixaola:{n:"Sixaola \xB7 frontera con Panam\xE1",lat:9.508,lon:-82.615,r:35},cerromuerte:{n:"Cerro de la Muerte",lat:9.56,lon:-83.75,r:0},chirripo:{n:"Cerro Chirrip\xF3",lat:9.484,lon:-83.489,r:0},sanisidro:{n:"San Isidro de El General",lat:9.376,lon:-83.703,r:50},buenosaires:{n:"Buenos Aires",lat:9.17,lon:-83.33,r:35},palmar:{n:"Palmar Norte",lat:8.96,lon:-83.46,r:40},neily:{n:"Ciudad Neily",lat:8.65,lon:-82.94,r:40},canoas:{n:"Paso Canoas \xB7 frontera con Panam\xE1",lat:8.534,lon:-82.84,r:35},jaco:{n:"Jac\xF3",lat:9.615,lon:-84.63,r:40},quepos:{n:"Quepos \xB7 Manuel Antonio",lat:9.43,lon:-84.16,r:40},dominical:{n:"Dominical",lat:9.25,lon:-83.86,r:30}},Qp=[{n:"Ruta 1 \xB7 Interamericana Norte",p:["@oeste","alajuela",[10.06,-84.33],"sanramon","esparza",[10.1,-84.82],[10.262,-84.965],"canas",[10.526,-85.255],"liberia","lacruz","penasblancas"]},{n:"Ruta 27",p:["@oeste",[9.915,-84.24],"orotina","caldera"]},{n:"Ruta 23",p:["caldera",[9.955,-84.715],[9.985,-84.735],[9.978,-84.775],[9.977,-84.805],"puntarenas"]},{n:"Ruta 34 \xB7 Costanera Sur",p:["orotina",[9.76,-84.61],"jaco",[9.52,-84.32],"quepos","dominical",[9.16,-83.74],"palmar"]},{n:"Ruta 2 \xB7 Interamericana Sur",p:["@este","cartago",[9.74,-83.94],"cerromuerte","sanisidro","buenosaires",[9.02,-83.3],"palmar",[8.7,-83.1],"neily","canoas"]},{n:"Ruta 32",p:["@este",[10.03,-84.06],[10.09,-84],[10.16,-83.93],"guapiles","siquirres",[10.07,-83.29],"limon"]},{n:"Ruta 36",p:["limon",[9.92,-83.045],[9.84,-82.975],[9.78,-82.93],"cahuita",[9.63,-82.85],"sixaola"]},{n:"Ruta 21",p:["liberia",[10.447,-85.56],"santacruz","nicoya"]},{n:"Ruta 18",p:[[10.262,-84.965],"amistad",[10.2,-85.35],"nicoya"]},{n:"Ruta 142",p:["sanramon",[10.25,-84.52],"fortuna",[10.5,-84.7],[10.505,-84.8],"tilaran","canas"]}],ef=[{k:"arenal",R:90,alto:52,cima:1633}],$d=(a,e,t)=>[(t-a.lon0)*a.kx,-(e-a.lat0)*a.kz];var Jl=[[-80,20,60,90],[-1,58,122,158],[0,214,200,150],[40,120,168,92],[600,70,130,70],[1500,52,100,70],[2500,128,118,84],[3300,170,160,140],[3900,225,222,215]];function tf(a,e,t){let{w:n,h:i,paso:r,x0:s,z0:o}=e,l=document.createElement("canvas");l.width=n,l.height=i;let c=l.getContext("2d"),d=c.createImageData(n,i),p=d.data;for(let _=0;_<i;_++)for(let m=0;m<n;m++){let h=_*n+m,b=a[h],M=Jl.length-2;for(;M>0&&b<Jl[M][0];)M--;let v=Jl[M],E=Jl[M+1],S=Math.max(0,Math.min(1,(b-v[0])/(E[0]-v[0]))),T=b>0?Math.max(.55,Math.min(1.3,1+((a[h-1]??b)-(a[h+1]??b)+(a[h-n]??b)-(a[h+n]??b))/520)):1;for(let g=0;g<3;g++)p[h*4+g]=Math.min(255,(v[g+1]+(E[g+1]-v[g+1])*S)*T);p[h*4+3]=255}c.putImageData(d,0,0);let u=_=>(_-s)/r,f=_=>(_-o)/r;c.lineJoin=c.lineCap="round";for(let[_,m]of[[3.2,"rgba(40,30,20,.75)"],[1.6,"#F6E7A8"]]){c.lineWidth=_,c.strokeStyle=m;for(let h of t.rutas){c.beginPath();for(let b=0;b<h.X.length;b+=3)c.lineTo(u(h.X[b]),f(h.Z[b]));c.lineTo(u(h.X.at(-1)),f(h.Z.at(-1))),c.stroke()}}c.font="600 11px system-ui, Arial, sans-serif",c.textBaseline="middle",c.lineWidth=3;for(let _ of Object.values(ps)){let m=u((_.lon-e.lon0)*e.kx),h=f(-(_.lat-e.lat0)*e.kz),b=_.n.split(" \xB7 ")[0];c.fillStyle=_.r?"#fff":"#FFD627",c.strokeStyle="rgba(0,20,40,.85)",c.beginPath(),c.arc(m,h,_.r?3:2.4,0,7),c.fill(),c.stroke();let M=m>n-110;c.textAlign=M?"right":"left",c.strokeText(b,m+(M?-6:6),h),c.fillText(b,m+(M?-6:6),h)}function x(_,m){_.width=n,_.height=i;let h=_.getContext("2d");h.drawImage(l,0,0);for(let b of[...m].reverse())h.save(),h.translate(u(b.x),f(b.z)),h.fillStyle=b.color,h.strokeStyle="#00182F",h.lineWidth=2,b.rumbo!==void 0?(h.rotate(-b.rumbo+Math.PI),h.beginPath(),h.moveTo(0,-9),h.lineTo(6,7),h.lineTo(0,3.5),h.lineTo(-6,7),h.closePath()):(h.beginPath(),h.arc(0,0,4.5,0,7)),h.stroke(),h.fill(),h.restore()}return{dibujar:x}}var D_=800,L_=1200,nf=[15260085,13230274,15910821,12178408,15852960,15120568,14207208,16052714,11130575],Tn={zinc:9325370,zincGris:9278361,blanco:16052714,piedra:12104358,pasto:7316826,cancha:5151301,linea:16053492,madera:8018492,metal:10133670,rojo:12597547,azul:2051727,amarillo:15320363};function af(a,e,t){let n=new ht,i={dist:0},r=new ct({vertexColors:!0,roughness:.85}),s=a.filter(u=>u.r>0||Wd[u.k]).map(u=>({...u,malla:null,cajas:[]}));function o(u,f,x,_,m,h,b=4){if(u.r&&Math.hypot(f-u.x,x-u.z)>u.r-8)return null;let M=Math.cos(h),v=Math.sin(h),E=[];for(let[T,g]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,0]]){let A=f+T*_/2*M+g*m/2*v,C=x-T*_/2*v+g*m/2*M;if(t.cerca(A,C,i).dist<t.MEDIO+b)return null;E.push(e.altura(A,C))}let S=Math.min(...E);return Math.max(...E)-S>1?null:S-.3}function l(u){let f=Mn(),x=Wa([...u.k].reduce((S,T)=>S*31+T.charCodeAt(0)|0,7)),_=[],m=t.cerca(u.x,u.z,i).dist<u.r?Math.atan2(i.tx,i.tz):x()*Math.PI,h=(S,T,g,A,C,P,L,I=L,R)=>{let U=o(u,S,T,g,A,C,R);return U===null?!1:(f.caja(S,U,T,g,P+.3,A,L,C,{techo:I}),_.push({x:S,z:T,c:Math.cos(C),s:Math.sin(C),hx:g/2,hz:A/2}),U)},b=(S,T,g,A,C,P,L)=>{let I=Math.cos(C),R=Math.sin(C),U=(F,H)=>[S+F*I+H*R,L,T-F*R+H*I];f.quad(U(-g/2,-A/2),U(-g/2,A/2),U(g/2,A/2),U(g/2,-A/2),P)},M=(S,T)=>[u.x+S*Math.cos(m)+T*Math.sin(m),u.z-S*Math.sin(m)+T*Math.cos(m)];if(u.r){let S=t.cerca(...M(18,0),i).dist>t.cerca(...M(-18,0),i).dist?1:-1,[T,g]=M(S*20,0),A=o(u,T,g,22,22,m,2)??e.altura(T,g);b(T,g,22,22,m,Tn.pasto,A+.32);for(let[ye,$]of[[-7,-7],[7,-7],[-7,7],[7,7]]){let[ce,be]=M(S*20+ye,$);f.caja(ce,A,be,.5,3.4,.5,5916210),f.caja(ce,A+3.2,be,2.6,2,2.6,4094522)}let[C,P]=M(S*20,0);h(C,P,4.2,4.2,m+Math.PI/4,2.6,Tn.blanco,Tn.rojo,0);let L=u.k==="cartago",[I,R]=M(S*37,0),U=L?16:10,F=L?30:18,H=h(I,R,F,U,m+Math.PI/2,L?13:8,L?16052714:Tn.blanco,L?7109257:Tn.zincGris,2);if(H!==!1)for(let ye of L?[-5,5]:[0]){let[$,ce]=M(S*(37-F/2+2),ye);f.caja($,H,ce,3.4,L?26:15,3.4,Tn.blanco,m,{techo:L?7109257:Tn.rojo}),f.caja($,H+(L?26:15),ce,1.6,3,1.6,L?7109257:Tn.rojo,m)}let[j,Y]=M(S*20,34),W=o(u,j,Y,26,40,m,2);if(W!==null){b(j,Y,26,40,m,Tn.cancha,W+.32);for(let ce of[-1,1]){let[be,Se]=M(S*20,34+ce*19);f.caja(be,W+.3,Se,7.3,2.4,.12,Tn.linea,m)}let[ye,$]=M(S*20,34);b(ye,$,26,.25,m,Tn.linea,W+.34)}let ae=0;for(let ye=-u.r;ye<=u.r;ye+=11)for(let $=-u.r;$<=u.r;$+=13){if(Math.abs($-S*28)<22&&Math.abs(ye-12)<34||x()<.28)continue;let[ce,be]=M($+(x()-.5)*3,ye+(x()-.5)*3),Se=6+x()*4,q=7+x()*5,V=x()<.18?2:1,de=x()<.12,pe=de?15852960:nf[Math.floor(x()*nf.length)];if(h(ce,be,Se,q,m+(x()<.5?0:Math.PI/2),V*3-.2,pe,x()<.7?Tn.zinc:Tn.zincGris)!==!1&&ae++,ae>60)break}}Wd[u.k]?.({s:u,a:f,cajas:_,sobre:h,carreteras:t,terreno:e,q:i});let v=f.geometria();v.computeBoundingSphere();let E=new Ye(v,r);E.castShadow=E.receiveShadow=!0,E.matrixAutoUpdate=!1,E.userData.centro=[u.x,u.z],u.malla=E,u.cajas=_,n.add(E)}function c(u){n.remove(u.malla),u.malla.geometry.dispose(),u.malla=null,u.cajas=[]}function d(u,f){for(let x of s){let _=Math.hypot(u-x.x,f-x.z);!x.malla&&_<D_?l(x):x.malla&&_>L_&&c(x)}}function p(u,f){for(let x of s)if(!(!x.malla||Math.abs(u.x-x.x)>x.r+90||Math.abs(u.z-x.z)>x.r+90))for(let _ of x.cajas){let m=u.x-_.x,h=u.z-_.z,b=m*_.c-h*_.s,M=m*_.s+h*_.c,v=_.hx+f,E=_.hz+f;Math.abs(b)>=v||Math.abs(M)>=E||(v-Math.abs(b)<E-Math.abs(M)?b=Math.sign(b||1)*v:M=Math.sign(M||1)*E,u.x=_.x+b*_.c+M*_.s,u.z=_.z-b*_.s+M*_.c)}return u}return{grupo:n,sitios:s,actualizar:d,empujar:p}}function rf(a,e,t){let n=null,i=1/0;for(let c of a.rutas)for(let d=0;d<c.X.length;d++){let p=Math.hypot(c.X[d]-e,c.Z[d]-t);p<i&&(i=p,n={r:c,i:d})}let{r,i:s}=n,o=Math.min(r.X.length-1,s+1),l=Math.max(0,o-1);return{x:r.X[s],z:r.Z[s],y:r.Y[s],rumbo:Math.atan2(r.X[o]-r.X[l],r.Z[o]-r.Z[l]),nx:r.NX[s],nz:r.NZ[s]}}var qd=({s:a,a:e,cajas:t,carreteras:n})=>{let i=rf(n,a.x,a.z),r=n.MEDIO+6,s=i.x+i.nx*r,o=i.z+i.nz*r;e.caja(s,i.y,o,6,3.6,16,15131350,i.rumbo,{techo:3104399}),t.push({x:s,z:o,c:Math.cos(i.rumbo),s:Math.sin(i.rumbo),hx:3,hz:8});let l=i.x+i.nx*(n.MEDIO+1),c=i.z+i.nz*(n.MEDIO+1);e.caja(l,i.y,c,.3,1.2,.3,15320363,i.rumbo);for(let d=0;d<6;d++){let p=(d+.5)/6*2*n.MEDIO;e.caja(l-i.nx*p,i.y+1.05,c-i.nz*p,.12,.12,1.1,d%2?12597547:16053492,i.rumbo+Math.PI/2)}for(let[d,p]of[[0,2051727],[1,16053492],[2,12597547]]){let u=s+i.nx*4+Math.sin(i.rumbo)*(d*2.4-2.4),f=o+i.nz*4+Math.cos(i.rumbo)*(d*2.4-2.4);e.caja(u,i.y,f,.1,7,.1,10133670),e.caja(u,i.y+6,f+.5,.05,1,1.4,p,i.rumbo)}},Wd={penasblancas:qd,canoas:qd,sixaola:qd};Wd.amistad=({s:a,a:e,carreteras:t})=>{let n=rf(t,a.x,a.z),i=Math.sin(n.rumbo),r=Math.cos(n.rumbo),s=t.MEDIO+.6;for(let l of[-1,1])for(let c=-40;c<40;c+=4)e.caja(n.x+i*c+n.nx*l*s,n.y+.1,n.z+r*c+n.nz*l*s,.25,1.1,4,14277081,n.rumbo);e.caja(n.x+n.nx*(s+1.2),n.y-6,n.z+n.nz*(s+1.2),1.4,30,1.4,15263976,n.rumbo);let o=[n.x+n.nx*(s+1.2),n.y+23,n.z+n.nz*(s+1.2)];for(let l=-36;l<=36;l+=6)if(l){let c=[n.x+i*l+n.nx*s,n.y+1,n.z+r*l+n.nz*s],d=p=>[p[0],p[1]+.14,p[2]];e.quad(o,c,d(c),d(o),16053492),e.quad(d(o),d(c),c,o,16053492)}};function sf(a){let e=[...new Set(a.rutas.map(c=>c.n.match(/Ruta (\d+)/)[1]))],t=document.createElement("canvas");t.width=512,t.height=64;let n=t.getContext("2d"),i=512/e.length;n.font="bold 40px system-ui, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",e.forEach((c,d)=>{n.fillStyle="#1C6B3A",n.fillRect(d*i,0,i,64),n.fillStyle="#fff",n.fillText(c,d*i+i/2,34),n.strokeStyle="#fff",n.lineWidth=3,n.strokeRect(d*i+3,3,i-6,58)});let r=Mn(),s=Mn();for(let c of a.rutas){let d=e.indexOf(c.n.match(/Ruta (\d+)/)[1]),p=d/e.length,u=(d+1)/e.length;for(let f=25;f<c.X.length-5;f+=50){let x=a.MEDIO+1.8,_=c.X[f]-c.NX[f]*x,m=c.Z[f]-c.NZ[f]*x,h=c.Y[f];r.caja(_,h-.2,m,.12,2.6,.12,10133670);let b=c.NZ[f],M=-c.NX[f],v=(E,S)=>[_+c.NX[f]*E*.6-b*.08,h+S,m+c.NZ[f]*E*.6-M*.08];s.quad(v(-1,1.9),v(1,1.9),v(1,2.7),v(-1,2.7),16777215,[p,0,u,0,u,1,p,1]),s.quad(v(1,1.9),v(-1,1.9),v(-1,2.7),v(1,2.7),16777215,[p,0,u,0,u,1,p,1])}}let o=new ht,l=new Oa(t);return l.colorSpace=Vt,o.add(new Ye(r.geometria(),new ct({vertexColors:!0,roughness:.6})),new Ye(s.geometria(),new vn({map:l}))),o.traverse(c=>{c.matrixAutoUpdate=!1,c.updateMatrix(),c.geometry?.computeBoundingSphere()}),o}function Zl(a,e,t,n,{a:i=1.8,b:r=3.2,s0:s=2.2,T:o=1.3}={}){let l=1-Math.pow(Math.max(0,a)/Math.max(.1,e),4);if(!isFinite(t))return i*l;let c=s+Math.max(0,a*o+a*n/(2*Math.sqrt(i*r)));return i*(l-Math.pow(c/Math.max(.1,t),2))}var Qe=null,da=null,Ea=null,ar=null,tc=null,Aa=null,ms=null,Xd=null,Kl=null,ir=null,gs=null,nr=null,fs=null,xs=null,bs=null,lf=0,cf={},df=!1,ec=1,Ql=new Set,uf=.55,N_=-8,F_=a=>10**(a/20);function U_(){try{Qe?.resume?.()?.catch?.(()=>{})}catch{}}function hf(){if(Qe){U_();return}try{Qe=new(window.AudioContext||window.webkitAudioContext),Ea=Qe.createDynamicsCompressor(),Ea.threshold.value=-6,Ea.knee.value=8,Ea.ratio.value=6,Ea.attack.value=.003,Ea.release.value=.25,Ea.connect(Qe.destination),da=Qe.createGain(),da.gain.value=df?0:uf*ec,da.connect(Ea),ar=Qe.createGain(),ar.connect(da),tc=Qe.createGain(),tc.connect(da),Aa=Qe.createGain(),Aa.connect(da),ms=Qe.createGain(),ms.gain.value=0;let a=Qe.createConvolver(),e=Math.floor(Qe.sampleRate*.6),t=Qe.createBuffer(1,e,Qe.sampleRate),n=t.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.exp(-i/(Qe.sampleRate*.12));a.buffer=t,Xd=Qe.createGain(),Xd.gain.value=1,ar.connect(ms).connect(a).connect(Xd).connect(da),H_(),gf(Jd(cf))}catch{Qe=null}}function pf(a){return ec=Math.max(0,Math.min(1,a)),da&&!df&&(da.gain.value=uf*ec),ec}function O_(a,e="general"){return a?Ql.add(e):Ql.delete(e),Aa&&Aa.gain.setTargetAtTime(Ql.size?F_(N_):1,Qe.currentTime,.15),Ql.size>0}function Dt(a,e,{tipo:t="sine",vol:n=.3,ataque:i=.005,caida:r=null,glide:s=null,retardo:o=0,ui:l=!1}={}){if(!Qe)return;let c=Qe.currentTime+o,d=Qe.createOscillator(),p=Qe.createGain();d.type=t,d.frequency.setValueAtTime(a,c),s&&d.frequency.exponentialRampToValueAtTime(s,c+e),p.gain.setValueAtTime(0,c),p.gain.linearRampToValueAtTime(n,c+i),p.gain.exponentialRampToValueAtTime(1e-4,c+(r??e)),d.connect(p).connect(l?tc:ar),d.start(c),d.stop(c+e+.05)}var Yd=new Map;function ff(a){if(!Yd.has(a)){let e=Qe.createBuffer(1,2*a,Qe.sampleRate),t=e.getChannelData(0);for(let n=0;n<2*a;n++)t[n]=Math.random()*2-1;Yd.set(a,e)}return Yd.get(a)}function Xn(a,{vol:e=.3,filtro:t="lowpass",f:n=1200,q:i=1,retardo:r=0,ataque:s=.005}={}){if(!Qe)return;let o=Qe.currentTime+r,l=Math.floor(Qe.sampleRate*a),c=Qe.createBufferSource();c.buffer=ff(l);let d=Qe.createBiquadFilter();d.type=t,d.frequency.value=n,d.Q.value=i;let p=Qe.createGain();p.gain.setValueAtTime(0,o),p.gain.linearRampToValueAtTime(e,o+s),p.gain.exponentialRampToValueAtTime(1e-4,o+a),c.connect(d).connect(p).connect(ar),c.start(o,Math.random()*l/Qe.sampleRate),c.stop(o+a+.05)}var Ft={clic:()=>Dt(880,.06,{tipo:"triangle",vol:.12,ui:!0}),hover:()=>Dt(1320,.03,{tipo:"sine",vol:.04,ui:!0}),ok:()=>{Dt(660,.12,{vol:.2,ui:!0}),Dt(990,.18,{vol:.2,retardo:.09,ui:!0})},logro:()=>[523,659,784,1047].forEach((a,e)=>Dt(a,.25,{tipo:"triangle",vol:.18,retardo:e*.09,ui:!0})),error:()=>{Dt(220,.22,{tipo:"sawtooth",vol:.14,glide:140})},alerta:()=>{Dt(1046,.09,{tipo:"square",vol:.07}),Dt(1046,.09,{tipo:"square",vol:.07,retardo:.16})},stop:()=>{Dt(392,.12,{tipo:"square",vol:.12}),Dt(294,.25,{tipo:"square",vol:.12,retardo:.12})},cono:()=>{Xn(.12,{vol:.25,f:500}),Dt(160,.12,{vol:.2,glide:90})},metal:()=>{Dt(1800+Math.random()*300,.25,{tipo:"triangle",vol:.06}),Dt(2600,.15,{vol:.03})},paso:()=>Xn(.08,{vol:.12,f:700+Math.random()*300}),cuerda:()=>Xn(.35,{vol:.12,filtro:"bandpass",f:2200,q:2,ataque:.1}),chasquido:()=>{Xn(.09,{vol:.6,filtro:"highpass",f:2500}),Dt(3200,.05,{tipo:"square",vol:.15})},golpe:()=>{Xn(.4,{vol:.6,f:260}),Dt(70,.4,{vol:.5,glide:40})},tir\u00F3n:()=>{Dt(140,.3,{tipo:"sawtooth",vol:.2,glide:90}),Xn(.25,{vol:.25,f:900})},trueno:()=>{Xn(2.6,{vol:.7,f:160,ataque:.05}),Xn(1.2,{vol:.4,f:600,retardo:.05})},tension:()=>Dt(180,.5,{tipo:"sawtooth",vol:.07,glide:420}),bocina:()=>{Dt(392,.35,{tipo:"square",vol:.12}),Dt(494,.35,{tipo:"square",vol:.1})},clip:()=>{Dt(1500,.05,{tipo:"square",vol:.08}),Xn(.05,{vol:.15,filtro:"highpass",f:3e3,retardo:.02})},presion:()=>Xn(.18,{vol:.1,filtro:"bandpass",f:1400,q:1.2}),insignia:()=>{[784,988,1319].forEach((a,e)=>Dt(a,.22,{tipo:"sine",vol:.16,retardo:e*.07,ui:!0}))},motosierra:()=>{Xn(.9,{vol:.16,f:240}),Dt(96,.9,{tipo:"sawtooth",vol:.07,glide:120})}},of={calle:{transito:1,viento:1,lluvia:1,reverb:0,zumbido:1},ducto:{transito:0,viento:0,lluvia:0,reverb:.3,zumbido:0},neutro:{transito:0,viento:1,lluvia:1,reverb:0,zumbido:0}},B_={aereo:"calle",techo:"calle",media:"calle",poste:"calle",poda:"calle",ducto:"ducto"},z_={aereo:.6,techo:.5,media:.5,poste:.5,poda:.3};function G_(a){let e=/^(\d{1,2})/.exec(a??"");if(!e)return .6;let t=+e[1];return t>=7&&t<9||t>=16&&t<19?1:t>=9&&t<16?.7:t>=19&&t<22?.4:.15}function Jd(a={}){let e=a.tipo??"aereo",t=of[a.ambiente]?a.ambiente:B_[e]??"neutro",n=of[t],i=/avenida/i.test(a.lugar??"")?1.3:1,r=(z_[e]??.5)*G_(a.hora)*i,s=Number.isFinite(a.viento)?a.viento:0,o=Math.max(0,Math.min(1,(s-8)/34));return{perfil:t,transito:Math.min(1,r)*n.transito*.09,viento:o*n.viento*.2,lluvia:n.lluvia,reverb:n.reverb*.6,zumbido:n.zumbido*.012}}var mf=null;function H_(){if(Kl||!Qe)return;let a=3,e=Math.floor(Qe.sampleRate*a),t=ff(e),n=()=>{let p=Qe.createBufferSource();return p.buffer=t,p.loop=!0,p.start(0,Math.random()*a),p};Kl=n();let i=Qe.createBiquadFilter();i.type="bandpass",i.frequency.value=3e3,i.Q.value=.4,ir=Qe.createGain(),ir.gain.value=0,Kl.connect(i).connect(ir).connect(Aa);let r=n(),s=Qe.createBiquadFilter();s.type="lowpass",s.frequency.value=400,gs=Qe.createGain(),gs.gain.value=0,r.connect(s).connect(gs).connect(Aa);let o=n(),l=Qe.createBiquadFilter();l.type="bandpass",l.frequency.value=500,l.Q.value=.6,nr=Qe.createGain(),nr.gain.value=0,fs=Qe.createOscillator(),fs.frequency.value=.2,xs=Qe.createGain(),xs.gain.value=0,fs.connect(xs).connect(nr.gain),o.connect(l).connect(nr).connect(Aa),fs.start();let c=Qe.createOscillator();c.type="triangle",c.frequency.value=55;let d=Qe.createBiquadFilter();d.type="lowpass",d.frequency.value=160,bs=Qe.createGain(),bs.gain.value=0,c.connect(d).connect(bs).connect(Aa),c.start(),mf={lfo:fs,fuentes:[Kl,r,o,c]}}function gf(a){if(!Qe||!ir)return;let e=Qe.currentTime;ir.gain.setTargetAtTime(lf*.35*a.lluvia,e,.6),gs.gain.setTargetAtTime(a.viento,e,.8),nr.gain.setTargetAtTime(a.transito,e,1.2),xs.gain.setTargetAtTime(a.transito*.5,e,1.2),bs.gain.setTargetAtTime(a.zumbido,e,1.2),ms.gain.setTargetAtTime(a.reverb,e,.3)}function xf(a){lf=Math.max(0,Math.min(1,a)),Qe&&gf(Jd(cf))}function k_(){return Qe?{ctx:Qe,compresor:Ea,maestro:da,efectos:ar,interfaz:tc,ambiente:Aa,sala:ms,ambiente_:{lluvia:ir,viento:gs,transito:nr,zumbido:bs,lfo:xs,lfoFuente:mf?.lfo}}:null}typeof window<"u"&&(window.__audio={grafo:k_,ducking:O_,nivelesAmbiente:Jd});var Zd=26,bf=420,V_=1.8,vf=40,Kd=1400,nc=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534,14254635];function _f({escena:a,carreteras:e,terreno:t,meta:n}){let i=Wa(99),r=new ht;a.add(r);let s=e.rutas,o=Array.from({length:Zd},(P,L)=>({ruta:0,s:0,sentido:1,v:0,v0:0,x:0,z:0,y:0,rumbo:0,camion:L%6===0,vivo:!1})),l=new Pt(new zt(1,1,1).translate(0,.5,0),new ct({roughness:.5,metalness:.25}),Zd*2),c=new Pt(new zt(1,1,1).translate(0,.5,0),new ct({color:1382170,roughness:.9}),Zd);for(let P of[l,c])P.frustumCulled=!1,P.count=0,r.add(P);let d=new He,p=new gt;o.forEach((P,L)=>{l.setColorAt(L*2,d.set(P.camion?15131350:nc[L%nc.length])),l.setColorAt(L*2+1,d.set(P.camion?3104399:1778992))});function u(P){let L=s[P.ruta],I=L.X.length-1,R=Math.max(0,Math.min(I-1e-6,P.s)),U=Math.floor(R),F=R-U,H=V_*P.sentido;P.x=L.X[U]+(L.X[U+1]-L.X[U])*F+L.NX[U]*H,P.z=L.Z[U]+(L.Z[U+1]-L.Z[U])*F+L.NZ[U]*H,P.y=L.Y[U]+(L.Y[U+1]-L.Y[U])*F+.12,P.rumbo=Math.atan2(L.X[U+1]-L.X[U],L.Z[U+1]-L.Z[U])+(P.sentido<0?Math.PI:0)}function f(P,L,I){for(let R=0;R<30;R++){let U=Math.floor(i()*s.length),F=s[U],H=Math.floor(i()*(F.X.length-2)),j=Math.hypot(F.X[H]-L,F.Z[H]-I);if(!(j<100||j>bf)){Object.assign(P,{ruta:U,s:H+i(),sentido:i()<.5?1:-1,vivo:!0,v0:(P.camion?13:17)+i()*5}),P.v=P.v0*.8,u(P);return}}P.vivo=!1}function x(P,L,I,R){let U=0;for(let F of o){if((!F.vivo||Math.hypot(F.x-L,F.z-I)>bf+60)&&f(F,L,I),!F.vivo)continue;let H=1/0,j=0,Y=Math.sin(F.rumbo),W=Math.cos(F.rumbo);for(let ce of o){if(ce===F||!ce.vivo||ce.ruta!==F.ruta||ce.sentido!==F.sentido)continue;let be=(ce.s-F.s)*F.sentido*8-5;be>-4&&be<H&&(H=Math.max(.1,be),j=F.v-ce.v)}for(let ce of R){let be=ce.x-F.x,Se=ce.z-F.z,q=be*Y+Se*W,V=Math.abs(be*W-Se*Y);q>0&&V<1.8&&q-3<H&&(H=Math.max(.1,q-3),j=F.v)}if(F.v=Math.max(0,F.v+Zl(F.v,F.v0,H,j)*P),F.s+=F.sentido*F.v*P/8,F.s<=0||F.s>=s[F.ruta].X.length-1){F.vivo=!1;continue}u(F);let ae=F.camion?7:4.3,ye=F.camion?2.3:1.8,$=F.camion?2.6:1.25;p.position.set(F.x,F.y+.3,F.z),p.rotation.set(0,F.rumbo,0),p.scale.set(ye,$,ae),p.updateMatrix(),l.setMatrixAt(U*2,p.matrix),p.position.set(F.x+Y*(F.camion?ae*.38:0),F.y+.3+(F.camion?0:$*.9),F.z+W*(F.camion?ae*.38:0)),p.scale.set(ye*.92,F.camion?$*1.05:.55,F.camion?1.8:ae*.5),p.updateMatrix(),l.setMatrixAt(U*2+1,p.matrix),p.position.set(F.x,F.y,F.z),p.scale.set(ye+.1,.55,ae*.8),p.updateMatrix(),c.setMatrixAt(U,p.matrix),U!==o.indexOf(F)&&(l.setColorAt(U*2,d.set(F.camion?15131350:nc[o.indexOf(F)%nc.length])),l.setColorAt(U*2+1,d.set(F.camion?3104399:1778992))),U++}l.count=U*2,c.count=U,l.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0)}let _=Array.from({length:vf},()=>({x:1e9,z:0,y:0,rumbo:0,meta:0,t:0})),m=new Pt(new zt(1,1,1).translate(0,.5,0),new ct({roughness:.9}),vf*2);m.frustumCulled=!1,r.add(m);let h={dist:0},b=[15920870,4864556,11565642,2762018],M=(P,L)=>{let I=t.altura(P,L),R=t.muestra;return R.e>15&&R.e<1800&&R.llano<.1&&R.pend*t.EX<.5&&e.cerca(P,L,h).dist>14?I:null};function v(P,L,I){_.forEach((R,U)=>{if(Math.hypot(R.x-L,R.z-I)>260){let H=Math.floor(U/4),j=H*2.4+i()*.5,Y=70+H%5*35,W=L+Math.cos(j)*Y+i()*10,ae=I+Math.sin(j)*Y+i()*10,ye=M(W,ae);if(ye===null){R.x=1e9;return}Object.assign(R,{x:W,z:ae,y:ye,rumbo:i()*6.3,meta:i()*6.3,t:i()*8}),m.setColorAt(U*2,d.set(b[U%4])),m.setColorAt(U*2+1,d.set(b[U%4]))}R.t-=P,R.t<0&&(R.t=4+i()*8,R.meta=R.rumbo+(i()-.5)*2);let F=R.t>5;if(R.rumbo+=(R.meta-R.rumbo)*Math.min(1,P),F){let H=R.x+Math.sin(R.rumbo)*.4*P,j=R.z+Math.cos(R.rumbo)*.4*P,Y=M(H,j);Y!==null?(R.x=H,R.z=j,R.y=Y):R.meta+=Math.PI}p.position.set(R.x,R.y+.55,R.z),p.rotation.set(0,R.rumbo,0),p.scale.set(.7,.75,1.7),p.updateMatrix(),m.setMatrixAt(U*2,p.matrix),p.position.set(R.x+Math.sin(R.rumbo)*.95,R.y+(F?.95:.6),R.z+Math.cos(R.rumbo)*.95),p.scale.set(.42,.42,.6),p.updateMatrix(),m.setMatrixAt(U*2+1,p.matrix)}),m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0)}let E=new Float32Array(Kd*6),S=new pt;S.setAttribute("position",new mt(E,3));let T=new jn(S,new Pn({color:12571622,transparent:!0,opacity:.55}));T.frustumCulled=!1,r.add(T);for(let P=0;P<Kd;P++)E[P*6]=(i()-.5)*60,E[P*6+1]=i()*30,E[P*6+2]=(i()-.5)*60;let g={lluvia:0,meta:0,niebla:0,region:"",reloj:0};function A(P,L){let I=n.lon0+P/n.kx,R=n.lat0-L/n.kz;t.relieve(P,L);let U=t.muestra.e,F=I>-84&&R>9.4,H=R<9.3,j=I<-84.9&&R>9.85;return{humedad:j?.1:F?.75:H?.6:.35,neblina:U>1400?Math.min(1,(U-1400)/1200):0,nombre:j?"seco":F?"Caribe":H?"zona sur":"Valle Central"}}function C(P,L,I){g.reloj-=P;let R=A(L.position.x,L.position.z);g.region=R.nombre,g.reloj<0&&(g.reloj=40+i()*60,g.meta=i()<R.humedad?.4+i()*.6:0),I!==null&&(g.meta=I),g.lluvia+=(g.meta-g.lluvia)*Math.min(1,P*.3),g.niebla+=(R.neblina-g.niebla)*Math.min(1,P*.5);let U=Math.round(Kd*g.lluvia);for(let F=0;F<U;F++){let H=E[F*6+1]-22*P;H<-4&&(H=26,E[F*6]=(i()-.5)*60,E[F*6+2]=(i()-.5)*60),E[F*6+1]=H,E[F*6+3]=E[F*6]+.05,E[F*6+4]=H-.7,E[F*6+5]=E[F*6+2]}return S.setDrawRange(0,U*2),S.attributes.position.needsUpdate=!0,T.position.set(L.position.x,L.position.y-8,L.position.z),xf(g.lluvia),g}return{grupo:r,autos:o,vacas:_,clima:g,cada(P,L,I,R,U,F=null){return x(P,I,R,U),v(P,I,R),C(P,L,F)}}}var yf=[13225169,2830134,15856110,9117214,2047851,7238520,12100218,3038534],vs=4.2;function Sf(a,e,t){let n=Wa(7),i=-40,r=a.largo+80,s=[];for(let S=0;S<t;S++)s.push({d:i+r*S/t+n()*4,a:$l,v:5,v0:5.5+n()*2.5,x:0,z:0,rumbo:0});let o=e.estacionamiento,l=[];for(let S=0;S<o.n;S++){let T=o.d0+(S+.5)*o.paso;n()<.55&&Math.abs(T-e.dPick)>5.4&&l.push({d:T,a:o.a,v:0,x:0,z:0,rumbo:0})}for(let S of l)e.cajas.push({d0:S.d-vs/2,d1:S.d+vs/2,a0:S.a-.9,a1:S.a+.9});let c=[...s,...l],d=c.length,p=new ct({roughness:.45,metalness:.3}),u=new Pt(new zt(1.75,.62,vs).translate(0,.62,0),p,d),f=new Pt(new zt(1.6,.52,2.1).translate(0,1.18,-.25),new ct({color:1778992,roughness:.2,metalness:.5}),d),x=new hn(.33,.33,.24,10).rotateZ(Math.PI/2),_=new Pt(x,new ct({color:1316119,roughness:.9}),d*4),m=new He;c.forEach((S,T)=>u.setColorAt(T,m.set(yf[Math.floor(n()*yf.length)])));let h=new ht;h.add(u,f,_);for(let S of[u,f,_])S.frustumCulled=!1;let b=new gt,M={};function v(S){let T=c[S];a.en(T.d,T.a,M),T.x=M.x,T.z=M.z,T.rumbo=Math.atan2(M.tx,M.tz),b.position.set(M.x,0,M.z),b.rotation.set(0,T.rumbo,0),b.updateMatrix(),u.setMatrixAt(S,b.matrix),f.setMatrixAt(S,b.matrix);let g=Math.cos(T.rumbo),A=Math.sin(T.rumbo);[[-.82,1.35],[.82,1.35],[-.82,-1.35],[.82,-1.35]].forEach(([C,P],L)=>{b.position.set(M.x+C*g+P*A,.33,M.z-C*A+P*g),b.updateMatrix(),_.setMatrixAt(S*4+L,b.matrix)})}for(let S=0;S<d;S++)v(S);function E(S,T){let g=s.length;for(let A=0;A<g;A++){let C=s[A],P=s[(A+1)%g],L=g>1?(P.d-C.d+r)%r-vs-.4:1/0,I=g>1?C.v-P.v:0;for(let R of T){if(Math.abs(R.a-C.a)>1.9)continue;let U=(R.d-C.d+r)%r-vs/2-1.2;U<L&&U<40&&(L=U,I=C.v)}C.v=Math.max(0,C.v+Zl(C.v,C.v0,Math.max(.1,L),I)*S),C.d+=C.v*S,C.d>i+r&&(C.d-=r),v(A)}u.instanceMatrix.needsUpdate=f.instanceMatrix.needsUpdate=_.instanceMatrix.needsUpdate=!0}return{grupo:h,todos:c,cada:E}}function Ef(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),r={},s={},o=a[0].morphTargetsRelative,l=new pt,c=0;for(let d=0;d<a.length;++d){let p=a[d],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,p=[];for(let u=0;u<a.length;++u){let f=a[u].index;for(let x=0;x<f.count;++x)p.push(f.getX(x)+d);d+=a[u].attributes.position.count}l.setIndex(p)}for(let d in r){let p=Mf(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,p)}for(let d in s){let p=s[d][0].length;if(p!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let u=0;u<p;++u){let f=[];for(let _=0;_<s[d].length;++_)f.push(s[d][_][u]);let x=Mf(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(x)}}}return l}function Mf(a){let e,t,n,i=-1,r=0;for(let c=0;c<a.length;++c){let d=a[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let s=new e(r),o=new mt(s,t,n),l=0;for(let c=0;c<a.length;++c){let d=a[c];if(d.isInterleavedBufferAttribute){let p=l/t;for(let u=0,f=d.count;u<f;u++)for(let x=0;x<t;x++){let _=d.getComponent(u,x);o.setComponent(u+p,x,_)}}else s.set(d.array,l);l+=d.count*t}return i!==void 0&&(o.gpuType=i),o}var Qd=new Map,fn=(a,e={})=>{let t=a+JSON.stringify(e);return Qd.has(t)||Qd.set(t,new ct({color:a,roughness:.7,...e})),Qd.get(t)};function ac(a,e,t){let n=new ki(e,Math.max(.001,a-2*e),4,10);n.translate(0,-a/2,0);let i=new Ye(n,t);return i.castShadow=!0,i}var rr=.3,ic=.29,Af=new B(0,-1,-.4).normalize(),eu=new B,tu=new B,fi=new B,Tf=new B,wf=new B,nu=new B,mi=new B,Cf=new B,_s=new B,j_=new yt,au={x:0,z:0};function Rf(a){let e=Math.asin(Math.max(-1,Math.min(1,a.x))),t=Math.cos(e);return au.z=e,au.x=t>1e-4?Math.atan2(-a.z/t,-a.y/t):0,au}var $_=.12;function Pf({camisa:a=16040475,pantalon:e=2046819,piel:t=13148794,pelo:n=2825492,uniforme:i=!0}={}){let r={camisa:fn(a),pantalon:fn(e),piel:fn(t,{roughness:.6}),pelo:fn(n,{roughness:.9}),casco:fn(16766503,{roughness:.35}),arnes:fn(10211642,{roughness:.6}),metal:fn(12896978,{roughness:.25,metalness:.8}),plastico:fn(2830134,{roughness:.5}),bota:fn(3877408),lentes:fn(1844272,{roughness:.1,metalness:.4}),guante:fn(13214042,{roughness:.8}),reflectivo:fn(14221135,{roughness:.4,emissive:3359744})},s=new ht,o=new ht;o.position.y=.92,s.add(o);let l=new Ye(new sa(.15,14,10),r.pantalon);l.scale.set(1.15,.8,.9),l.castShadow=!0,o.add(l);let c=ee=>{let Q=new ht;Q.position.set(ee*.095,-.04,0),o.add(Q),Q.add(ac(.45,.072,r.pantalon));let se=new ht;se.position.y=-.45,Q.add(se),se.add(ac(.43,.058,r.pantalon));let ge=new ht;ge.position.y=-.43,se.add(ge);let N=new Ye(new zt(.11,.085,.27),r.bota);return N.position.set(0,-.03,.06),N.castShadow=!0,ge.add(N),{h:Q,rod:se,tob:ge}},d=c(1),p=c(-1),u=new ht;u.position.y=.05,o.add(u);let f=new Ye(new ki(.155,.34,6,14),r.camisa);if(f.position.y=.3,f.scale.set(1.12,1,.78),f.castShadow=!0,u.add(f),i)for(let ee of[.2,.38]){let Q=new Ye(new hn(.176,.176,.035,20,1,!0),r.reflectivo);Q.position.y=ee,Q.scale.set(1.12,1,.8),u.add(Q)}let x=new ht;x.position.y=.58,u.add(x);let _=new Ye(new sa(.105,18,14),r.piel);_.position.y=.13,_.scale.set(.92,1.05,1),_.castShadow=!0,x.add(_);let m=new Ye(new sa(.11,16,10,0,Math.PI*2,0,Math.PI*.55),r.pelo);m.position.y=.145,m.rotation.x=-.25,x.add(m);for(let ee of[-1,1]){let Q=new Ye(new sa(.013,8,6),fn(1118481));Q.position.set(ee*.036,.15,.092),x.add(Q)}let h=new Ye(new zt(.13,.035,.02),r.lentes);h.position.set(0,.15,.1),h.visible=!1,x.add(h);let b=new ht;b.position.y=.19,b.visible=!1,x.add(b);let M=new Ye(new sa(.123,22,12,0,Math.PI*2,0,Math.PI/2),r.casco);M.castShadow=!0;let v=new Ye(new hn(.18,.18,.014,30),r.casco);v.position.y=.004,v.castShadow=!0;let E=new Ye(new Dn(.105,.006,6,22,Math.PI),r.plastico);E.rotation.set(0,Math.PI/2,Math.PI),E.position.y=-.03,b.add(M,v,E);let S=ee=>{let Q=new ht;Q.position.set(ee*.2,.5,0),u.add(Q),Q.add(ac(.3,.052,r.camisa));let se=new ht;se.position.y=-.3,Q.add(se),se.add(ac(.27,.045,r.camisa));let ge=new Ye(new sa(.05,10,8),r.piel);return ge.position.y=-.29,se.add(ge),{h:Q,codo:se,mano:ge}},T=S(1),g=S(-1),A=new Ye(new Dn(.05,.014,6,14),fn(13938487,{metalness:.9,roughness:.2}));A.rotation.x=Math.PI/2,A.position.y=-.24,A.visible=!1,T.codo.add(A);let C=new ht;C.visible=!1;let P=[];for(let ee of[-1,1]){let Q=[[.07,.02,.135],[.085,.3,.14],[.1,.5,.1],[.11,.6,0],[.1,.5,-.1],[.085,.3,-.14],[.07,.02,-.135]].map(([ge,N,Be])=>new B(ee*ge,N,Be)),se=new Ye(new jr(new Vi(Q),30,.016,6),r.arnes);u.add(se),P.push(se)}let L=new Ye(new zt(.2,.03,.012),r.arnes);L.position.set(0,.36,.142),u.add(L),P.push(L);let I=new Ye(new Dn(.172,.017,8,36),r.arnes);I.rotation.x=Math.PI/2,I.scale.set(1.08,.82,1),I.position.y=.02,o.add(I),P.push(I);for(let ee of[d,p]){let Q=new Ye(new Dn(.08,.013,8,24),r.arnes);Q.rotation.x=Math.PI/2,Q.position.y=-.12,ee.h.add(Q),P.push(Q)}let R=()=>new Ye(new Dn(.03,.008,8,18),r.metal),U=R();U.position.set(.19,.02,0),U.rotation.y=Math.PI/2,o.add(U);let F=R();F.position.set(-.19,.02,0),F.rotation.y=Math.PI/2,o.add(F);let H=R();H.position.set(0,.48,-.14),u.add(H);let j=R();j.position.set(0,.2,.158),j.scale.setScalar(1.15),u.add(j);let Y=new Ye(new zt(.034,.17,.012),r.arnes);Y.position.set(0,.285,.15),u.add(Y);let W=new Ye(new Dn(.024,.009,8,14,Math.PI*1.3),r.plastico);W.position.set(-.12,-.01,.13),W.rotation.z=Math.PI*.85,o.add(W),P.push(U,F,H,j,Y,W);let ae=ee=>P.forEach(Q=>{Q.visible=ee});ae(!1);let ye=(ee,Q,se,ge)=>{let N=new gt;return N.position.set(Q,se,ge),ee.add(N),N},$={dIzq:ye(U,0,0,0),dDer:ye(F,0,0,0),porta:ye(W,0,0,0),dorsal:ye(H,0,0,0),frontal:ye(j,0,-.02,0),pecho:ye(u,0,.38,.2),cabeza:ye(x,0,.32,0),manoI:ye(T.mano,0,0,0),manoD:ye(g.mano,0,0,0)};{let ee=new Set([h,A,...P,T.mano,g.mano]);b.traverse(Q=>ee.add(Q)),s.updateMatrixWorld(!0),s.traverse(Q=>{if(!Q.isGroup)return;let se=new Map;for(let ge of Q.children)ge.isMesh&&!ee.has(ge)&&ge.visible&&!ge.children.length&&(se.has(ge.material)||se.set(ge.material,[]),se.get(ge.material).push(ge));for(let[ge,N]of se){if(N.length<2)continue;let Be=N.map(D=>{D.updateMatrix();let y=(D.geometry.index?D.geometry.toNonIndexed():D.geometry.clone()).applyMatrix4(D.matrix);for(let z of Object.keys(y.attributes))["position","normal","uv"].includes(z)||y.deleteAttribute(z);return y}),Ee=new Ye(Ef(Be,!1),ge);Ee.castShadow=N.some(D=>D.castShadow),N.forEach(D=>Q.remove(D)),Q.add(Ee)}})}let ce=new Set;function be(ee,Q=!0){Q?ce.add(ee):ce.delete(ee),ee==="casco"&&(b.visible=Q),ee==="lentes"&&(h.visible=Q),ee==="guantes"&&(T.mano.material=g.mano.material=Q?r.guante:r.piel),ee==="arnes"&&ae(Q),ee==="reloj"&&(A.visible=Q)}let Se=Hl.nuevo,q=[d.h,d.rod,d.tob,p.h,p.rod,p.tob,T.h,T.codo,g.h,g.codo,u,x,o],V=q.length*3+1,de=new Float64Array(V),pe=new Float64Array(V),fe=new Float64Array(V),O=null,oe=ee=>{let Q=0;for(let se of q)ee[Q++]=se.rotation.x,ee[Q++]=se.rotation.y,ee[Q++]=se.rotation.z;ee[Q]=o.position.y},me=ee=>{let Q=0;for(let se of q)se.rotation.set(ee[Q++],ee[Q++],ee[Q++]);o.position.y=ee[Q]};function ve(ee,Q){if(u.updateMatrix(),eu.copy(Q).sub(o.position).applyMatrix4(j_.copy(u.matrix).invert()),tu.copy(ee.h.position),fi.subVectors(eu,tu),fi.lengthSq()<1e-8)return;let se=Math.max(rr-ic+.001,Math.min(rr+ic-.001,fi.length()));fi.normalize();let ge=Math.acos(Math.max(-1,Math.min(1,(rr*rr+se*se-ic*ic)/(2*rr*se))));wf.copy(Af).addScaledVector(fi,-Af.dot(fi)).normalize(),nu.copy(fi).multiplyScalar(Math.cos(ge)).addScaledVector(wf,Math.sin(ge)),Tf.copy(tu).addScaledVector(nu,rr),mi.subVectors(eu,Tf).normalize();let N=Rf(nu);ee.h.rotation.set(N.x,0,N.z);let Be=Math.cos(N.x),Ee=Math.sin(N.x),D=Math.cos(N.z),y=Math.sin(N.z),z=mi.y*Be+mi.z*Ee,X=-mi.y*Ee+mi.z*Be;Cf.set(mi.x*D+z*y,-mi.x*y+z*D,X);let ne=Rf(Cf);ee.codo.rotation.set(ne.x,0,ne.z)}function _e(ee,Q){if(ee==="escalar"){let se=1.45+.06*Q,ge=1.45-.06*Q;ve(T,_s.set(.23,se,.1+.268*se-.04)),ve(g,_s.set(-.23,ge,.1+.268*ge-.04))}else if(ee==="sostener"){let se=.3414000000000001;ve(T,_s.set(.23,1.05,se)),ve(g,_s.set(-.23,1.05,se))}else ee==="banderero"?ve(g,_s.set(-.22,1.62,.3)):ee==="caminar"&&(T.codo.rotation.x=-.25-.2*Math.max(0,Q),g.codo.rotation.x=-.25-.2*Math.max(0,-Q))}function Re({tipo:ee="idle",fase:Q=0,t:se=0,mirarArriba:ge=0,dt:N}={}){let Be=Se&&N!==void 0&&O!==null&&ee!==O;Be&&oe(de);for(let y of[d.h,d.rod,d.tob,p.h,p.rod,p.tob,T.h,T.codo,g.h,g.codo,u,x,o])y.rotation.set(0,0,0);o.position.y=.92;let Ee=Math.sin(Q),D=Math.cos(Q);if(T.h.rotation.z=-.12,g.h.rotation.z=.12,u.rotation.x=.02*Math.sin(se*2),x.rotation.x=-ge,ee==="caminar")d.h.rotation.x=Ee*.55,p.h.rotation.x=-Ee*.55,d.rod.rotation.x=Math.max(0,-Ee)*.7,p.rod.rotation.x=Math.max(0,Ee)*.7,T.h.rotation.x=-Ee*.45,g.h.rotation.x=Ee*.45,T.codo.rotation.x=-.3,g.codo.rotation.x=-.3,o.position.y=.92+Math.abs(D)*.025;else if(ee==="escalar")T.h.rotation.set(-2.5+Ee*.3,0,-.18),T.codo.rotation.x=-.45-Math.max(0,Ee)*.3,g.h.rotation.set(-2.5-Ee*.3,0,.18),g.codo.rotation.x=-.45-Math.max(0,-Ee)*.3,d.h.rotation.x=-.55-Math.max(0,Ee)*.5,d.rod.rotation.x=.7+Math.max(0,Ee)*.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.2-Math.max(0,-Ee)*.5,p.rod.rotation.x=.25+Math.max(0,-Ee)*.6,p.tob.rotation.x=-.05,u.rotation.x=.12,x.rotation.x=-.25-ge;else if(ee==="trabajar"){let y=Math.sin(se*3)*.1;T.h.rotation.set(-2.25+y,0,-.25),T.codo.rotation.x=-.6+y,g.h.rotation.set(-2-y,0,.3),g.codo.rotation.x=-.8-y,d.h.rotation.x=-.45,d.rod.rotation.x=.6,d.tob.rotation.x=-.15,p.h.rotation.x=-.08,p.rod.rotation.x=.12,u.rotation.x=.14,x.rotation.x=-.35}else ee==="sostener"?(T.h.rotation.set(-1.35,0,-.1),g.h.rotation.set(-1.35,0,.1),T.codo.rotation.x=-.3,g.codo.rotation.x=-.3):ee==="senalar"?(g.h.rotation.set(-1.5,0,.5),g.codo.rotation.x=-.1,u.rotation.y=.2):ee==="cargar"?(T.h.rotation.set(-2.9,0,-.2),g.h.rotation.set(-2.9,0,.2),T.codo.rotation.x=-.2,g.codo.rotation.x=-.2,d.h.rotation.x=Ee*.45,p.h.rotation.x=-Ee*.45,d.rod.rotation.x=Math.max(0,-Ee)*.6,p.rod.rotation.x=Math.max(0,Ee)*.6):ee==="caida"?(T.h.rotation.set(-2.8+Ee*.4,0,-.6),g.h.rotation.set(-2.6-Ee*.4,0,.6),d.h.rotation.x=-.4+Ee*.3,p.h.rotation.x=-.1-Ee*.3,d.rod.rotation.x=.5,p.rod.rotation.x=.3):ee==="colgado"?(T.h.rotation.set(-2.9,0,-.3),g.h.rotation.set(-2.9,0,.3),d.h.rotation.x=-.3,p.h.rotation.x=-.1,d.rod.rotation.x=.4,p.rod.rotation.x=.3,u.rotation.x=-.1):ee==="tendido"?(T.h.rotation.set(-.3,0,-1.1),g.h.rotation.set(.2,0,1.3),T.codo.rotation.x=-.5,g.codo.rotation.x=-.2,d.h.rotation.set(.05,0,.12),p.h.rotation.set(-.15,0,-.08),p.rod.rotation.x=.35,x.rotation.y=.5):ee==="banderero"?(g.h.rotation.set(-1.55,0,.15),g.codo.rotation.x=-.15,T.h.rotation.set(-.9+Math.sin(se*2.2)*.5,0,-.5),T.codo.rotation.x=-.4):ee==="celular"?(g.h.rotation.set(-1.1,0,.25),g.codo.rotation.x=-1.2,x.rotation.x=.45,d.h.rotation.x=Ee*.45,p.h.rotation.x=-Ee*.45,d.rod.rotation.x=Math.max(0,-Ee)*.6,p.rod.rotation.x=Math.max(0,Ee)*.6):(T.codo.rotation.x=-.08,g.codo.rotation.x=-.08);if(Se){if(_e(ee,Ee),oe(pe),N===void 0)fe.fill(0);else{if(Be)for(let z=0;z<V;z++)fe[z]=de[z]-pe[z];let y=Math.exp(-N/$_);for(let z=0;z<V;z++){let X=fe[z]*y;Math.abs(X)<1e-4&&(X=0),fe[z]=X,pe[z]+=X}me(pe)}O=ee}}Re();let he=new Set([s,o,d.h,d.rod,d.tob,p.h,p.rod,p.tob,u,x,T.h,T.codo,g.h,g.codo]);return s.updateMatrixWorld(!0),s.traverse(ee=>{he.has(ee)||(ee.updateMatrix(),ee.matrixAutoUpdate=!1)}),{raiz:s,pose:Re,equipar:be,equipado:ce,refs:$,M:r,partes:{pelvis:o,torso:u,cuello:x,bi:T,bd:g,pi:d,pd:p}}}var q_=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a)),iu={c:"cargar",e:"escalar",t:"trabajar",s:"sostener"};function ru(a){let e=Pf(a);return e.raiz.traverse(t=>{t.isMesh&&(t.castShadow=!1)}),e}function If(a,e){let t=new Map;function n(s,o,l,c,d,p,u="i"){let f=t.get(s);return f||(f={id:s,p:ru(d),x:o,z:l,y:p??e(o,l),ox:o,oz:l,rumbo:c??0,orumbo:c??0,fase:Math.random()*6,d:0,a:0},f.p.equipar("casco",!!d?.uniforme),d?.arnes&&f.p.equipar("arnes"),a.add(f.p.raiz),t.set(s,f)),f.ox=o,f.oz=l,f.oy=p,f.pose=u,c!==void 0&&(f.orumbo=c),f}function i(s){let o=t.get(s);o&&(a.remove(o.p.raiz),t.delete(s))}function r(s,o,l){let c=1-Math.exp(-s*10);for(let d of t.values()){let p=(d.ox-d.x)*c,u=(d.oz-d.z)*c,f=((d.oy??e(d.x,d.z))-d.y)*c,x=Math.hypot(p,f,u);d.x+=p,d.z+=u,d.y+=f;let _=Math.hypot(p,u)/s>.25,m=iu[d.pose];d.rumbo=q_(d.rumbo,_&&!m?Math.atan2(p,u):d.orumbo)*c+d.rumbo*(1-c),d.p.raiz.position.set(d.x,d.y,d.z),d.p.raiz.rotation.y=d.rumbo;let h=Math.hypot(d.x-l.position.x,d.z-l.position.z);d.p.raiz.visible=h<140&&d.pose!=="o",h<60&&(d.fase+=x*4.19,d.p.pose({tipo:m??(_?"caminar":"idle"),fase:d.fase,t:o,dt:s}))}}return{mapa:t,fijar:n,quitar:i,cada:r}}function Df(a){let e=new Pt(new zr(.5,16).rotateX(-Math.PI/2),new vn({color:0,transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a);e.frustumCulled=!1,e.renderOrder=1;let t=new gt;return{malla:e,fijar(n,i,r,s,o,l=o,c=0){t.position.set(i,r+.02,s),t.rotation.set(0,c,0),t.scale.set(o,1,l),t.updateMatrix(),e.setMatrixAt(n,t.matrix)},listo(n){e.count=Math.min(n,a),e.instanceMatrix.needsUpdate=!0}}}var su=.16,rc=56,sc=a=>Math.abs(a)<su?0:(a-Math.sign(a)*su)/(1-su);function Lf(a,e){let t=new Set,n=new Set,i={mx:0,mz:0,gx:0,gy:0,correr:!1,accion:!1,vista:!1,origen:Qi?"t\xE1ctil":"teclado y rat\xF3n"},r=0,s=0,o={sensibilidad:1,invertir:!1};addEventListener("keydown",b=>{b.repeat||(t.add(b.code),i.origen="teclado y rat\xF3n",b.target?.tagName!=="INPUT"&&(b.code==="KeyE"&&n.add("accion"),b.code==="KeyV"&&n.add("vista"),b.code==="KeyR"&&n.add("radio"),b.code==="KeyM"&&n.add("mapa"),b.code==="KeyP"&&n.add("pausa"),b.code==="KeyH"&&n.add("bocina")))}),addEventListener("keyup",b=>t.delete(b.code)),addEventListener("blur",()=>t.clear());let l=(...b)=>b.some(M=>t.has(M))?1:0;a.addEventListener("click",()=>{!Qi&&document.pointerLockElement!==a&&a.requestPointerLock?.()?.catch?.(()=>{})}),addEventListener("mousemove",b=>{document.pointerLockElement===a&&(r+=b.movementX*.0024,s-=b.movementY*.0024)});let c={id:null,x0:0,y0:0,x:0,y:0},d={id:null,x:0,y:0},p=document.createElement("div"),u=document.createElement("div");p.className="mu-base",u.className="mu-perilla",p.append(u),p.hidden=!0,e.append(p),a.style.touchAction="none",a.addEventListener("pointerdown",b=>{b.pointerType==="touch"&&(i.origen="t\xE1ctil",b.clientX<innerWidth*.45&&c.id===null?(Object.assign(c,{id:b.pointerId,x0:b.clientX,y0:b.clientY,x:0,y:0}),p.style.left=b.clientX+"px",p.style.top=b.clientY+"px",u.style.transform="",p.hidden=!1):d.id===null&&Object.assign(d,{id:b.pointerId,x:b.clientX,y:b.clientY}))}),a.addEventListener("pointermove",b=>{if(b.pointerId===c.id){let M=(b.clientX-c.x0)/rc,v=(b.clientY-c.y0)/rc,E=Math.hypot(M,v);E>1&&(M/=E,v/=E),c.x=M,c.y=v,u.style.transform=`translate(${M*rc}px, ${v*rc}px)`}else b.pointerId===d.id&&(r+=(b.clientX-d.x)*.0052,s-=(b.clientY-d.y)*.0052,d.x=b.clientX,d.y=b.clientY)});let f=b=>{b.pointerId===c.id&&(c.id=null,c.x=c.y=0,p.hidden=!0),b.pointerId===d.id&&(d.id=null)};if(a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f),Qi)for(let[b,M,v]of[["pausa","\u23F8","Pausa"],["mapa","\u{1F5FA}","Mapa"],["radio","\u{1F4FB}","Radio"],["vista","\u{1F441}","Cambiar de vista"],["accion","\u270B","Acci\xF3n"]]){let E=document.createElement("button");E.className="mu-boton mu-"+b,E.textContent=M,E.setAttribute("aria-label",v),E.addEventListener("pointerdown",S=>{S.preventDefault(),n.add(b)}),e.append(E)}let x={},_={0:"accion",1:"atras",2:"radio",3:"vista",4:"bocina",8:"mapa",9:"pausa",12:"arriba",13:"abajo"};function m(b){let M=null;try{M=Array.from(navigator.getGamepads?.()??[]).find(P=>P?.connected&&P.mapping==="standard")}catch{}if(!M)return null;let v=sc(M.axes[2]),E=sc(M.axes[3]);(v||E)&&(r+=v*2.6*b,s-=E*1.9*b);let S=!1;for(let P in _){let L=!!M.buttons[P]?.pressed;L&&!x[P]&&(n.add(_[P]),S=!0),x[P]=L}let T=sc(M.axes[0]),g=-sc(M.axes[1]),A=!!(M.buttons[6]?.pressed||M.buttons[10]?.pressed),C=g>.6?"arriba":g<-.6?"abajo":null;return C&&x.pal!==C&&n.add(C),x.pal=C,(T||g||v||E||S)&&(i.origen="control"),{mx:T,mz:g,correr:A}}function h(b){let M=l("KeyD","ArrowRight")-l("KeyA","ArrowLeft"),v=l("KeyW","ArrowUp")-l("KeyS","ArrowDown"),E=!!l("ShiftLeft","ShiftRight");c.id!==null&&(M=c.x,v=-c.y,E=Math.hypot(M,v)>.92);let S=m(b);S&&(S.mx||S.mz)&&(M=S.mx,v=S.mz,E=S.correr);let T=Math.hypot(M,v);T>1&&(M/=T,v/=T),i.mx=M,i.mz=v,i.correr=E,i.gx=r*o.sensibilidad,i.gy=s*o.sensibilidad*(o.invertir?-1:1),r=s=0;for(let g of["accion","vista","radio","mapa","pausa","bocina","atras","arriba","abajo"])i[g]=n.has(g);return n.clear(),i}return{leer:h,pulsar:b=>n.add(b),mirada:o}}var W_=`
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
`;function Nf(){let a=document.createElement("style");a.textContent=W_,document.head.append(a);let e=document.createElement("div");return e.className="mu-capa",document.body.append(e),e}function Ff(a,e){let t=document.createElement("div");t.className="mu-diag",t.hidden=!e;let n=document.createElement("div"),i=document.createElement("button");return i.textContent="Copiar diagn\xF3stico",i.addEventListener("click",async()=>{let r=`${n.textContent}
${navigator.userAgent}
${innerWidth}\xD7${innerHeight} \xB7 dpr ${devicePixelRatio}`;try{await navigator.clipboard.writeText(r),i.textContent="Copiado \u2713"}catch{i.textContent="No se pudo copiar"}setTimeout(()=>{i.textContent="Copiar diagn\xF3stico"},2e3)}),t.append(n,i),a.append(t),addEventListener("keydown",r=>{r.code==="F3"&&(r.preventDefault(),t.hidden=!t.hidden)}),{escribir:r=>{n.textContent=r},mostrar:r=>{t.hidden=!r}}}var Xa={inspeccion:"GS-101 \xB7 Inspecci\xF3n de poster\xEDa (\xA75.6.3) \xB7 p. 21",demarcacion:"GS-101 \xB7 Demarcaci\xF3n (\xA75.6.2) \xB7 p. 21",equipo:"GS-101 \xB7 Trabajo seguro en postes (\xA75.6.1) \xB7 pp. 20\u201321"},Uf={a:{texto:"El poste parece obviamente inseguro.",corto:"Poste obviamente inseguro",material:null,aplicaAntesDeSubir:!0,dibujable:!1},b:{texto:"El poste se mueve.",corto:"Poste que se mueve",material:null,aplicaAntesDeSubir:!0,dibujable:!1},c:{texto:"El poste est\xE1 inclinado.",corto:"Poste inclinado",material:null,aplicaAntesDeSubir:!0,dibujable:!0},d:{texto:"La base del poste se alter\xF3 mientras se trabajaba arriba.",corto:"Base alterada",material:null,aplicaAntesDeSubir:!1,dibujable:!1},e:{texto:"Al despojar el poste de algunos cables y retenidas, se observa que est\xE1 soportado por los cables.",corto:"Soportado por los cables",material:null,aplicaAntesDeSubir:!1,dibujable:!1},f:{texto:"El terreno presenta deslizamientos.",corto:"Deslizamiento del terreno",material:null,aplicaAntesDeSubir:!0,dibujable:!1},g:{texto:"Poste de madera con fisuras, quemado o podrido: el da\xF1o no debe superar una tercera parte del di\xE1metro. Tampoco nudos con agrietamiento, ni agrietamientos a lo largo que comprometan m\xE1s de una tercera parte del poste.",corto:"Madera fisurada o podrida",material:"madera",aplicaAntesDeSubir:!0,dibujable:!0},h:{texto:"Poste de metal con oxidaci\xF3n que supera una tercera parte del di\xE1metro, o con perforaciones superiores a una tercera parte del di\xE1metro, o con una l\xEDnea el\xE9ctrica en posible contacto directo con el poste.",corto:"Metal oxidado o perforado",material:"metal",aplicaAntesDeSubir:!0,dibujable:!0}},pE=Object.keys(Uf).filter(a=>Uf[a].aplicaAntesDeSubir);var gE=typeof __URL_PUBLICA__=="string"?__URL_PUBLICA__:globalThis.process?.env?.URL_PUBLICA||"https://ruben1155.github.io/cuadrilla-segura/",xE=typeof __PREFIJO__=="string"?__PREFIJO__:globalThis.process?.env?.PREFIJO_ALMACEN||"cuadrilla-segura:";var ou={url:"https://okhbiliodjuofzsjkolg.supabase.co",llave:"sb_publishable_F3-PMi9uLDPR655ZOCs60g_m0S_C6Ec"};var J={altura:"GS-101 \xB7 Trabajo seguro en alturas",escaleras:"GS-101 \xB7 Trabajo seguro en escaleras port\xE1tiles",amarre:"GS-101 \xB7 Paso a paso para el aseguramiento de la escalera a un poste",epp:"GS-101 \xB7 Uso de equipo de protecci\xF3n personal",general:"GS-101 \xB7 Lineamientos en seguridad general",electrico:"GS-101 \xB7 Trabajo seguro en proximidad de l\xEDneas energizadas",demarcacion:"GS-101 \xB7 Demarcaci\xF3n y se\xF1alizaci\xF3n del \xE1rea",emergencias:"GS-101 \xB7 Emergencias en trabajos en alturas",suspender:"GS-101 \xB7 Suspensi\xF3n de labores ante peligro no controlado",vehiculos:"GS-101 \xB7 Seguridad en la conducci\xF3n de veh\xEDculos",carga:"GS-101 \xB7 Lineamientos generales: manipulaci\xF3n de cargas",cuadrillas:"GS-101 \xB7 Cuadrillas de trabajo",reportes:"GS-101 \xB7 Reporte de incidentes y accidentes laborales",freno:"GS-101 \xB7 Equipo para trabajo en postes (freno para cuerda) \xB7 pr\xE1ctica de la cuadrilla: el freno va a la argolla frontal",m_altura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.4 Altura del cable",m_prep:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 Preparaci\xF3n antes de instalar",m_gaza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.8 Gazas, herrajes y accesorios",m_tension:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.9 Tensi\xF3n de instalaci\xF3n",m_radio:"Manual MNO-DS-GE-001 \xB7 \xA76.2.2 Radio m\xEDnimo de curvatura",m_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.24 Rollos de reserva en redes a\xE9reas",m_rollo_poste:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.1 d) Rollo de red en el poste (di\xE1metro del rollo de 40 a 50 cm)",m_calco:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.22 Calcoman\xEDas reflectivas",m_preform:"Manual MNO-DS-GE-001 \xB7 Anexo 3: uso de preformados seg\xFAn di\xE1metro del cable",m_colores:"Manual MNO-DS-GE-001 \xB7 Anexo 4: c\xF3digo de colores EIA/TIA-598",m_cierre:"Manual MNO-DS-GE-001 \xB7 \xA76.4.1.1 Cierres de empalme",m_pruebas:"Manual MNO-DS-GE-001 \xB7 \xA76.7 Pruebas de aceptaci\xF3n",m_balona:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.6 Balona",m_postes:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.3.2 Distancia entre postes",m_ferrea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.5 Cruce de l\xEDnea f\xE9rrea",m_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 Preparaci\xF3n y limpieza de registros",m_subterranea:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.2 y \xA76.2.1.3 Instalaci\xF3n subterr\xE1nea y selecci\xF3n de ductos",m_reserva_sub:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 Rollos de reserva en registros",m_tapas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.5 Dispositivos de seguridad de las tapas",poda_transito:"GS-101 \xB7 \xA75.6.10 n) Poda de \xE1rboles: en v\xEDas de alto tr\xE1nsito se pide colaboraci\xF3n a entidades como tr\xE1nsito \xB7 p. 40",confinado:"GS-101 \xB7 T\xE9rminos: espacio confinado",t_techo:"GS-101 \xB7 \xA75.6.7 Trabajo seguro en techos \xB7 p\xE1g. 30",t_techo_epp:"GS-101 \xB7 \xA75.6.7 Equipo de protecci\xF3n personal en techos \xB7 p\xE1g. 30",t_techo_escalera:"GS-101 \xB7 \xA75.6.7 a\u2013c Escalera para acceder al techo \xB7 p\xE1g. 30",t_techo_anclaje:"GS-101 \xB7 \xA75.6.7 d\u2013f Anclaje y l\xEDnea de vida provisional \xB7 p\xE1g. 30\u201331",t_techo_traslado:"GS-101 \xB7 \xA75.6.7 g Traslado al techo y descenso anclado \xB7 p\xE1g. 31",t_techo_caminar:"GS-101 \xB7 \xA75.6.7 h\u2013j Caminar en el techo y l\xE1minas \xB7 p\xE1g. 32",t_techo_clima:"GS-101 \xB7 \xA75.6.7 n Condiciones clim\xE1ticas adversas \xB7 p\xE1g. 33",t_techo_peligro:"GS-101 \xB7 \xA75.6.7 p Zonas inseguras del techo \xB7 p\xE1g. 33",t_escalera_base:"GS-101 \xB7 \xA75.6.4 g Escaleras port\xE1tiles: per\xEDmetro de 2 m \xB7 p\xE1g. 22\u201323",t_escalera_tres:"GS-101 \xB7 \xA75.6.4 Nota: tres pelda\xF1os superiores prohibidos \xB7 p\xE1g. 22",t_escalera_sola:"GS-101 \xB7 \xA75.6.4 i Un solo trabajador sobre la escalera \xB7 p\xE1g. 23",mt_epp:"GS-101 \xB7 5.6.9 EPP para trabajo en proximidad de l\xEDneas energizadas \xB7 p. 34",mt_identificar:"GS-101 \xB7 5.6.9 c) y observaciones 1 y 2 \xB7 p. 35",mt_distancias:"GS-101 \xB7 5.6.9 b) Distancias de instalaci\xF3n con el secundario (40 cm) y el neutro (80 cm) \xB7 p. 35",mt_tabla4:"GS-101 \xB7 5.6.9 e) Tabla N\xB0 4, distancias m\xEDnimas de seguridad \xB7 p. 37",mt_suspender:"GS-101 \xB7 5.6.9 f) Telecomunicaciones a menos de 80 cm de la primaria MT, en contacto con el secundario o al nivel de este \xB7 p. 37",mt_senal:"GS-101 \xB7 5.6.9 g) Se\xF1alizaci\xF3n del \xE1rea de trabajo a nivel de suelo \xB7 p. 37",mt_activa:"GS-101 \xB7 5.6.9 h) Todas las l\xEDneas el\xE9ctricas se consideran activas \xB7 p. 38",mt_frontera:"GS-101 \xB7 5.2 w) Fronteras de aproximaci\xF3n: solo personas calificadas cruzan el l\xEDmite \xB7 p. 12",mt_escalera:"GS-101 \xB7 5.6.4 q) Escaleras de abrir de fibra de vidrio; nota sobre escaleras de aluminio \xB7 p. 23",mt_guante_cuero:"GS-101 \xB7 5.3.4 b) Los guantes de cuero no son para trabajos en presencia de tensi\xF3n \xB7 p. 15",mt_rigidez:"GS-101 \xB7 5.1 d) Buena rigidez diel\xE9ctrica: no sujetarse de estructuras met\xE1licas cercanas \xB7 p. 9",poda_epp:"GS-101 \xB7 \xA75.6.10 d) y e) Equipo de protecci\xF3n para poda: careta, lentes, protecci\xF3n auditiva, cuerdas, casco de cuatro puntos con barbiquejo, guantes mec\xE1nicos, ropa y calzado institucionales \xB7 pp. 38\u201339",poda_mangas:"GS-101 \xB7 \xA75.6.10 t) Mangas, cuerdas o prendas sueltas pueden enredarse en la motosierra o en la rama \xB7 p. 40",poda_planificar:"GS-101 \xB7 \xA75.6.10 h) Planificaci\xF3n previa: \xE1rbol, terreno, clima, bienes, personas, animales, insectos, tr\xE1nsito y distancia a l\xEDneas \xB7 p. 39",poda_subir:"GS-101 \xB7 \xA75.6.10 f) El trabajador no se debe subir a un \xE1rbol \xB7 p. 39",poda_linea:"GS-101 \xB7 \xA75.6.10 b) y m) Ramas en aproximaci\xF3n o sobre la l\xEDnea energizada: informar y coordinar; no se cortan ramas sobre la l\xEDnea \xB7 pp. 38 y 40",poda_distancias:"GS-101 \xB7 \xA75.6.10 j) y k) Distancias m\xEDnimas: se trabaja fuera de ellas durante el corte y la ca\xEDda, tambi\xE9n para las ramas \xB7 p. 39",poda_cansancio:"GS-101 \xB7 \xA75.6.10 g) No operar maquinaria cansado ni con medicamentos que alteren la conciencia \xB7 p. 39",poda_senal:"GS-101 \xB7 \xA75.6.10 n) Se\xF1alizar el \xE1rea y advertir a terceros; en v\xEDas de alto tr\xE1nsito, pedir apoyo \xB7 p. 40",poda_trayectoria:"GS-101 \xB7 \xA75.6.10 o) Valorar la trayectoria de ca\xEDda y asegurar la zona con se\xF1alizaci\xF3n y personal que regule el paso \xB7 p. 40",poda_equipo:"GS-101 \xB7 \xA75.6.10 p) Revisar el equipo de poda antes de iniciar (cuchillos, mecates, otros dispositivos) \xB7 p. 40",poda_viento:"GS-101 \xB7 \xA75.6.10 q) Antes de cada corte: distancia a lo energizado, viento y vegetaci\xF3n que interfiera \xB7 p. 40",poda_cuerdas:"GS-101 \xB7 \xA75.6.10 r) Cuerdas de trabajo para evitar que la rama cambie de direcci\xF3n al caer \xB7 p. 40",poda_cuadrilla:"GS-101 \xB7 \xA75.4 e) Las cuadrillas de poda de \xE1rboles no pueden ser menores de dos miembros \xB7 p. 18",gal_autorizacion:"Manual MNO-DS-GE-001 \xB7 \xA74.1.6 y \xA74.1.7 Aviso al Centro de Operaciones y autorizaci\xF3n en SASET antes de intervenir fibras en operaci\xF3n",gal_senal:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) Per\xEDmetro del \xE1rea de trabajo asegurado con se\xF1alizaci\xF3n vial y peatonal",gal_vigia:"GS-101 \xB7 \xA75.4 c) Cuadrillas de m\xEDnimo dos personas. La fuente no describe c\xF3mo se vigila la tapa ni la comunicaci\xF3n (duda, ver PENDIENTES_SST.md, J10)",gal_atmosfera:"GS-101 \xB7 T\xE9rminos: espacio confinado (aberturas limitadas, ventilaci\xF3n desfavorable). La fuente no describe el procedimiento de atm\xF3sfera (duda, ver PENDIENTES_SST.md, J10)",gal_ingreso:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 c) Ingreso por escalera met\xE1lica cuando la profundidad lo amerita (aplicado a la galer\xEDa: duda, ver PENDIENTES_SST.md, J10)",gal_epp:"GS-101 \xB7 \xA75.3 Uso de EPP: lista propuesta para la galer\xEDa, a validar por Salud Ocupacional (ver PENDIENTES_SST.md, J10)",gal_respirador:"GS-101 \xB7 \xA75.3.3 f) Respiradores con filtros en lugares de escasa ventilaci\xF3n; los filtros se reemplazan cuando se saturan",gal_cables:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 a) No da\xF1ar los cables existentes; \xA76.2.2 radio de curvatura; \xA76.2.7.2 fijaciones con cobre en servicio",gal_pletinas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7.1 b) Pletinas peque\xF1as de 20 cm; d) el cable se sujeta del centro hacia los extremos",gal_reserva:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 b) y c) Rollo de reserva de 20 a 25 m en la galer\xEDa, en la pared opuesta al MDF, a la mayor altura posible",gal_50cm:"Manual MNO-DS-GE-001 \xB7 \xA76.2.7 d) En la pared del MDF, 50 cm libres desde la salida de los ductos hacia el fondo",gal_placas:"Manual MNO-DS-GE-001 \xB7 \xA76.4.2.3 a) y e) Placas acr\xEDlicas con origen y destino; dos placas en cada rollo de reserva",gal_sellado:"Manual MNO-DS-GE-001 \xB7 Anexo 1: sellado de los ductos en la galer\xEDa (espuma expandible reentrable; subductos con tapones de hule)",eri_antes:"GS-101 \xB7 \xA75.7 Antes a) y b): personal capacitado como equipo ERI y en rescate vertical; botiqu\xEDn b\xE1sico y equipos para rescate vertical (cuerdas de seguridad, mosquetones, pull-lift) \xB7 p. 42",eri_criticas:"GS-101 \xB7 \xA75.7 Antes d): los trabajos mayores de 12 m son muy cr\xEDticos; sistema de rescate en el sitio y persona competente en rescate \xB7 p. 42",eri_sistema:"GS-101 \xB7 \xA75.7 Antes c): reportar el deterioro o da\xF1o de los sistemas de prevenci\xF3n y protecci\xF3n contra ca\xEDdas \xB7 p. 42",eri_despejar:"GS-101 \xB7 \xA75.7 Durante a): despejar completamente el \xE1rea donde se present\xF3 el accidente \xB7 p. 42",eri_distancia:"GS-101 \xB7 \xA75.7 Durante b) y g): distancia prudente y segura; antes de un rescate, comprobar que el \xE1rea es segura y que uno est\xE1 protegido \xB7 pp. 42\u201343",eri_911:"GS-101 \xB7 \xA75.7 Durante e) y f): pedir ayuda al 9-1-1; no hacer maniobras de rescate de las que no se tenga conocimiento previo \xB7 p. 43",eri_no_mover:"GS-101 \xB7 \xA75.7 Durante d) y Despu\xE9s b): no mover a la v\xEDctima salvo raz\xF3n de seguridad; brindar tranquilidad a la v\xEDctima \xB7 p. 43",eri_terceros:"GS-101 \xB7 \xA75.7 Durante h): ning\xFAn trabajador informa a personas u organizaciones externas; solo la direcci\xF3n o personal autorizado \xB7 p. 43",eri_fuera:"GS-101 \xB7 \xA75.5 n): los equipos para trabajo en altura que hayan sido usados en pruebas o por una ca\xEDda libre quedan fuera de servicio \xB7 p. 21",sv_permiso:"GS-101 \xB7 \xA75.8 a) Solo conduce veh\xEDculos institucionales el funcionario con los permisos de conducir del ICE \xB7 p. 42",sv_revision:"GS-101 \xB7 \xA75.8 b) Antes de usar el veh\xEDculo se revisan los niveles de aceite, combustible y agua, luces, repuesto, documentos, se\xF1alizaci\xF3n, herramientas y llantas \xB7 p. 43",sv_ley:"GS-101 \xB7 \xA75.8 c) y l) Conducir responsablemente, respetando la Ley de Tr\xE1nsito, sin abusar de la destreza al conducir \xB7 p. 43",sv_celular:"GS-101 \xB7 \xA75.8 d) Queda prohibido el uso del celular durante la conducci\xF3n del veh\xEDculo \xB7 p. 43",sv_estacionar:"GS-101 \xB7 \xA75.8 e) Al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",sv_carga:"GS-101 \xB7 \xA75.8 g) Asegurar objetos, materiales, herramientas y equipos: son un riesgo en un frenado r\xE1pido, vuelco o colisi\xF3n \xB7 p. 43",sv_tablero:"GS-101 \xB7 \xA75.8 h) e i) Nada suelto en el tablero; no recoger objetos del piso ni lejos del alcance mientras se conduce \xB7 p. 43",sv_fatiga:"GS-101 \xB7 \xA75.8 m) Con cansancio o fatiga: detener el veh\xEDculo en un sitio seguro, bajarse, caminar y respirar; si va acompa\xF1ado, ceder la conducci\xF3n \xB7 p. 43",sv_calma:"GS-101 \xB7 \xA75.8 o) Manejar con calma, sin perder el control con otros conductores y evitando confrontaciones \xB7 p. 43",sv_mojado:"GS-101 \xB7 \xA75.8 p) En caminos con grava, arenosos o mojados, bajar la velocidad y manejar con cuidado \xB7 p. 44",sv_danos:"GS-101 \xB7 \xA75.8 q) Reportar los da\xF1os que se observen o causen al veh\xEDculo; no ocultarlos, pueden producir un accidente \xB7 p. 44",sv_alcohol:"GS-101 \xB7 \xA75.8 r) No conducir bajo los efectos del alcohol, drogas o medicamentos que causen somnolencia \xB7 p. 44",sv_defensivo:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Manejo defensivo y sus cinco elementos: conocimiento, estar alerta, previsi\xF3n, juicio y habilidad \xB7 diap. 4\u201311",sv_humano:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 El 90 % de los accidentes viales tiene origen en el factor humano \xB7 diap. 13",sv_estados:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Estados (prisa, frustraci\xF3n, cansancio, complacencia) y los errores que producen \xB7 diap. 17\u201325",sv_linea_fuego:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Errores: ojos no en la tarea y entrar en la l\xEDnea de fuego \xB7 diap. 26 y 30",sv_lluvia:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Factor lluvia: calle mojada (\xABespecie de jab\xF3n\xBB), carreteras, poca visibilidad y neblina \xB7 diap. 36\u201341",sv_visibilidad:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Poca visibilidad: reducir la velocidad; si es excesiva, detener el veh\xEDculo a un costado y esperar \xB7 diap. 40",sv_derrumbe:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Derrumbes originados por la lluvia \xB7 diap. 38 (qu\xE9 hacer ante uno: decisi\xF3n conservadora, ver PENDIENTES_SST.md, J12\u2013J13)",sv_sustancias:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Alcohol, drogas y f\xE1rmacos: efectos seg\xFAn la dosis; los f\xE1rmacos como factor accidentog\xE9nico \xB7 diap. 44\u201349",sv_minimos:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 Nueve m\xEDnimos de seguridad vehicular, a revisar todos los d\xEDas antes de salir \xB7 diap. 51\u201352",sv_cinturon:"Capacitaci\xF3n Seguridad Vial 2026 (Gerencia Electricidad/DISA) \xB7 M\xEDnimo 1: cintur\xF3n de seguridad retr\xE1ctil de 2 o 3 puntos \xB7 diap. 51",ev_registro:"Manual MNO-DS-GE-001 \xB7 \xA76.2.1.1 \xB7 GS-101 \xB7 Delimitaci\xF3n del \xE1rea",ev_impaciente:"GS-101 \xB7 Cuadrillas en zonas de tr\xE1fico denso \xB7 Delimitaci\xF3n del \xE1rea de trabajo",gs31_ats:"GS-31 \xB7 \xA75.2.4 Antes de la ejecuci\xF3n diaria se realiza el ATS, con todos los trabajadores y liderado por el encargado o t\xE9cnico de la cuadrilla (A01-GS-31) \xB7 p. 10",gs31_cambios:"GS-31 \xB7 \xA75.2.5 Si cambia la planificaci\xF3n inicial (obra, proceso, equipos, personal) se aplica de nuevo el ATS \xB7 p. 10",gs31_f02:"GS-31 \xB7 \xA75.1.11 Las tareas con riesgos de situaci\xF3n cr\xEDtica se eval\xFAan con el F02-GS-31 An\xE1lisis de Tarea Cr\xEDtica \xB7 p. 5",gs31_gravedad:"GS-31 \xB7 \xA75.1.11 d) y f) Gravedad: la p\xE9rdida m\xE1s probable, en la escala 0, 2, 4 y 6 \xB7 p. 6",gs31_repetitividad:"GS-31 \xB7 \xA75.1.11 g) Repetitividad: n\xFAmero de colaboradores y cu\xE1nto de la jornada hace cada uno la tarea \xB7 p. 7",gs31_probabilidad:"GS-31 \xB7 \xA75.1.11 h) Probabilidad de esa p\xE9rdida, de \u22121 a +1 respecto al promedio \xB7 p. 7",gs31_criticidad:"GS-31 \xB7 \xA75.1.11 i) y k) GC = G + R + P (0 a 10): de 0 a 4 baja, m\xE1s de 4 y menos de 8 moderada, 8 o m\xE1s alta \xB7 pp. 7\u20138",gs31_controles:"GS-31 \xB7 \xA75.1.11 m) Controles m\xEDnimos: EPP y dispositivos, capacitaci\xF3n, protocolo de trabajo seguro y la normativa que los respalda \xB7 p. 8",ats_pizarra:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 ATS del d\xEDa: la pizarra (trabajo, herramientas y equipos, obra, fecha, personal y actividades numeradas) \xB7 diap. 46\u201347",ats_muerte:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Factores de muerte; si hay uno o m\xE1s, se revisan en conjunto las acciones a implementar \xB7 diap. 48",ats_riesgos:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Riesgos de cada tarea, manteniendo la numeraci\xF3n de las actividades \xB7 diap. 49",rec_anomalia:"GS-101 \xB7 \xA73.5 b) T\xE9cnico: informar al coordinador de cuadrilla y/o SST cualquier anomal\xEDa o desviaci\xF3n \xB7 p. 4",rec_inminente:"GS-101 \xB7 \xA75.6.4 g), final: si se observa inminente peligro para las personas, se interrumpe la actividad \xB7 p. 23",rec_cuasi:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) c) Casi incidente sin afectaci\xF3n a la salud: F01-GS-52 o F06-GS-52 \xB7 p. 41",rec_accidente:"GS-101 \xB7 \xA75.6 (reporte de incidentes, segunda secci\xF3n) b) y d) Accidente: F07-GS-52 a la jefatura de inmediato, antes de terminar la jornada \xB7 pp. 40\u201341",rec_liderazgo:"Capacitaci\xF3n Liderazgo en seguridad (SST del ICE) \xB7 Reporte por comportamientos: retroalimentaci\xF3n correctiva y registro en el F02-CSCON-SST-00-25 con firma del trabajador; aviso a la jefatura inmediata \xB7 diap. 68",sol_clima:"GS-101 \xB7 \xA75.1 e) Suspensi\xF3n de la actividad por condiciones clim\xE1ticas desfavorables: tormentas el\xE9ctricas, lluvias u otras que pongan en riesgo a los ejecutores \xB7 p. 9",demo_generacion_autorizacion:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 El ingreso a la planta solar se coordina con su encargado, con autorizaci\xF3n previa",demo_generacion_energizado:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los paneles generan electricidad mientras les da la luz: se tratan como energizados",demo_generacion_no_pisar:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 No se pisa ni se apoya nadie en los paneles ni en su estructura",demo_generacion_conexiones:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Solo personal calificado manipula conexiones e inversores, seg\xFAn el procedimiento de la planta",demo_generacion_danos:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Los da\xF1os en paneles, cables o inversores se reportan y no se tocan",demo_generacion_calor:"DEMO \xB7 contenido supuesto (sin manual oficial todav\xEDa) \xB7 Hidratarse, protegerse del sol y descansar a la sombra con frecuencia",mv_apoyo:"GS-101 \xB7 \xA75.6.6: el veh\xEDculo sirve de soporte a la escalera a medio vano \xB7 p. 28",mv_dos_puntos:"GS-101 \xB7 \xA75.6.6: la escalera se amarra al pant\xF3grafo y al eje de una llanta, a dos puntos \xB7 p. 28",mv_nudos:"GS-101 \xB7 \xA75.6.6: nudo ocho aplicado para dar tensi\xF3n y pata de chancho (ballestrinque) para terminar \xB7 p. 28",mv_subida:"GS-101 \xB7 \xA75.6.6: para subir y bajar, la cuerda de seguridad va sujetada a la escalera \xB7 p. 28",mv_bajada:"GS-101 \xB7 \xA75.6.4 j): subir y bajar de frente, con las manos libres y tres puntos de apoyo \xB7 p. 23",mv_tres:"GS-101 \xB7 \xA75.6.4, nota de la Tabla N\xB0 2: se proh\xEDbe el uso de los tres pelda\xF1os superiores \xB7 p. 22",mv_tabla2:"GS-101 \xB7 \xA75.6.4 f) y Tabla N\xB0 2: altura m\xE1xima permitida de uso de cada escalera \xB7 p. 22",mv_inspeccion:"GS-101 \xB7 \xA75.6.4 c), l), t) y u): revisar pelda\xF1os, uniones, largueros y patas antes de usar la escalera \xB7 pp. 22\u201324",mv_senalizacion:"GS-101 \xB7 \xA75.6.4 g): per\xEDmetro m\xEDnimo de 2 m alrededor de la escalera, con cintas y conos \xB7 pp. 22\u201323",mv_camion:"GS-101 \xB7 \xA75.8 e): al estacionar en carreteras o caminos, hacerlo en un lugar seguro y se\xF1alizar \xB7 p. 43",mv_herramientas:"GS-101 \xB7 \xA75.6.4 k): materiales y herramientas con bolso, mecate o cuerda \xB7 p. 23",mv_guardar:"GS-101 \xB7 \xA75.6.4 a) y d): la escalera se maneja entre dos y se deposita, no se tira; se limpian los desechos de los pelda\xF1os \xB7 p. 22",mv_mover:"GS-101 \xB7 \xA75.6.4 h): la escalera no se mueve ni se extiende mientras haya personal sobre ella \xB7 p. 23",cala_abertura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.2 Dimensi\xF3n de la cala: 1,5 m de largo por 1 m de ancho, como m\xEDnimo \xB7 p. 18",cala_pieza:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tubo de reparaci\xF3n: 50 cm m\xE1s largo que la abertura entre los extremos del ducto \xB7 p. 18",cala_ranura:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 La abertura del corte longitudinal queda arriba y se cierra con dos medias secciones de PVC y pegamento \xB7 p. 18",cala_amarras:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.3 Tres cintas met\xE1licas o tipo gaza con tornillo sin fin: una en cada extremo y otra en el centro \xB7 p. 18",cala_capas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.6.4 y Figura 2a: capas de cierre en su orden, espesor y material \xB7 p. 18",cala_empalme:"Manual MNO-DS-GE-001 \xB7 \xA76.4.3.2 Distancia del cierre de empalme al poste: 75 cm, con preformado de 75 cm o menos \xB7 p. 52",cala_anclas:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Anclas de seguridad: cada 500 m en tramos rectos de 1 km o m\xE1s, y en cruces de v\xEDa con vano mayor de 80 m en terreno plano \xB7 p. 36",cala_ancla_distancia:"Manual MNO-DS-GE-001 \xB7 \xA76.2.8.15 Ubicaci\xF3n del ancla: la mitad de la altura, medida del herraje a la base del poste \xB7 p. 36",cr_cliente:"GS-101 \xB7 \xA75.6.8 a) y b) Observar el cielorraso antes de empezar y preguntar al cliente por sus condiciones \xB7 p. 33",cr_estructura:"GS-101 \xB7 \xA75.6.8 c) La estructura se observa sin corrosi\xF3n avanzada ni madera descompuesta, y estable \xB7 p. 33",cr_electrico:"GS-101 \xB7 \xA75.6.8 d) Cable el\xE9ctrico expuesto: el cliente desconecta la electricidad antes de subir; con guantes diel\xE9ctricos solo si no es posible \xB7 p. 33",cr_epp:"GS-101 \xB7 \xA75.6.8 e) EPP del cielorraso: anteojos, casco con barbiquejo y linterna, ropa, calzado, guantes diel\xE9ctricos y rodilleras \xB7 p. 34",cr_arnes:"GS-101 \xB7 \xA75.5 a) Trabajo a una altura, como en cielorrasos: equipo para trabajo en altura autorizado \xB7 p. 19",cr_extension:"GS-101 \xB7 \xA75.6.8 f) Valorar si es posible usar una extensi\xF3n de fibra para evitar subir al cielorraso \xB7 p. 34",cr_avispas:"GS-101 \xB7 \xA75.6.8 g) Al ingresar, verificar desde el suelo la ausencia de colmenas de avispas o similares \xB7 p. 34",cr_caminar:"GS-101 \xB7 \xA75.6.7 h) por analog\xEDa: caminar por la estructura y no sobre la l\xE1mina (el cielorraso no se cita: duda, ver PENDIENTES_SST.md, J19) \xB7 p. 32",cr_escalera_tipo:"GS-101 \xB7 \xA75.6.4 q) Escaleras de abrir de fibra de vidrio; nota: el aluminio solo donde no hay riesgo el\xE9ctrico \xB7 p. 23",el_provisional:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Arts. 111 y 113 del Reglamento de Seguridad en Construcciones: instalaciones provisionales seg\xFAn el C\xF3digo El\xE9ctrico de CR (entubado, adecuado a la tensi\xF3n nominal) \xB7 diap. 22\u201326",el_medidor:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 112: medidores el\xE9ctricos provisionales con base estable y protecci\xF3n del agua \xB7 diap. 22\u201326",el_tablero:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 114: tableros y cajas el\xE9ctricas tapados, identificados y cerrados \xB7 diap. 22\u201326",el_conductores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 115: conductores protegidos ante da\xF1os mec\xE1nicos de la construcci\xF3n (maquinaria, veh\xEDculos, agua, qu\xEDmicos) \xB7 diap. 27",el_epp:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Art. 117: el personal en presencia de energ\xEDa el\xE9ctrica cuenta con protecci\xF3n diel\xE9ctrica; no usar el EPP diel\xE9ctrico es un acto inseguro \xB7 diap. 27 y 51",el_condiciones:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Condiciones inseguras: enchufes deteriorados, uniones deterioradas o sin aislamiento y conexiones fuera de norma \xB7 diap. 46\u201348",el_autorizacion:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: intervenir sin autorizaci\xF3n \xB7 diap. 51",el_mojado:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Acto inseguro: manos o pies mojados; la piel h\xFAmeda tiene menor resistencia \xB7 diap. 13 y 51",el_combustible:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: materiales combustibles o explosivos donde se presente arco el\xE9ctrico; el arco es un fuego repentino con metal fundido \xB7 diap. 5 y 31",el_anexo_b:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo B del C\xF3digo El\xE9ctrico: peligro inminente o alto riesgo (sin protecci\xF3n frente al contacto con partes energizadas o el cortocircuito; lluvia y tormentas el\xE9ctricas) \xB7 diap. 30\u201331",el_anexo_c:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Anexo C del C\xF3digo El\xE9ctrico: lista de verificaci\xF3n de instalaciones el\xE9ctricas, aplicada en conjunto con el t\xE9cnico el\xE9ctrico \xB7 diap. 32\u201340",el_factores:"Capacitaci\xF3n Seguridad el\xE9ctrica para prevencionistas (Gerencia Electricidad/DISA) \xB7 Factores de la magnitud de un incidente el\xE9ctrico: intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria \xB7 diap. 9"};var bE=new Map([...Object.entries(J).map(([a,e])=>[e,a]),...Object.entries(Xa).map(([a,e])=>[e,"poste_"+a])]);var X_=[{n:1,p:"\xBFA partir de qu\xE9 altura se considera trabajo en altura?",o:["M\xE1s de 1,80 m","M\xE1s de 3 m","M\xE1s de 1 m","Solo arriba de 5 m"],ref:J.altura},{n:1,p:"\xBFCu\xE1ntos trabajadores pueden estar sobre una escalera port\xE1til?",o:["Uno solo","Dos, si es de extensi\xF3n","Tres, si la escalera es larga","Los que quepan"],ref:J.escaleras},{n:1,p:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera en el poste?",o:["75\xB0","60\xB0","90\xB0","45\xB0"],ref:J.amarre},{n:1,p:"\xBFQu\xE9 pelda\xF1os de la escalera est\xE1 prohibido usar?",o:["Los tres superiores","Solo el primer pelda\xF1o","Ninguno","Los dos inferiores"],ref:J.escaleras},{n:1,p:"\xBFQu\xE9 per\xEDmetro m\xEDnimo se se\xF1aliza alrededor de la escalera?",o:["2 metros","50 cm","No hace falta","10 metros"],ref:J.escaleras},{n:1,p:"Al subir y bajar la escalera debo mantener\u2026",o:["Tres puntos de apoyo","Dos puntos de apoyo","Las manos ocupadas","Un punto de apoyo"],ref:J.escaleras},{n:1,p:"\xBFC\xF3mo se suben las herramientas a la escalera?",o:["Con bolso, mecate o cuerda","En las bolsas del pantal\xF3n","En la mano, pegadas al cuerpo","Que me las lancen desde abajo"],ref:J.escaleras},{n:1,p:"\xBFSe puede trabajar en altura con reloj, anillo o cadena?",o:["No, se proh\xEDbe todo tipo de alhaja","S\xED, si son peque\xF1os y no molestan","Solo el reloj, si no tiene correa met\xE1lica","S\xED, si van bajo el guante de cuero"],ref:J.altura},{n:1,p:"Ante un accidente en altura, \xBFa qu\xE9 n\xFAmero se pide ayuda?",o:["9-1-1","1-1-3","8-0-0","Se espera a la jefatura"],ref:J.emergencias},{n:1,p:"La escalera viaja en el techo del cami\xF3n. \xBFSubir a bajarla es trabajo en altura?",o:["S\xED: el techo est\xE1 a m\xE1s de 1,80 m","No: es solo un cami\xF3n de reparto","Solo si llueve fuerte, con viento","Solo si es de noche y est\xE1 oscuro"],ref:J.altura},{n:1,p:"Tu arn\xE9s tiene una costura reventada. \xBFQu\xE9 haces?",o:["No lo uso, informo y pido la sustituci\xF3n","Lo uso con cuidado, sin que se note","Lo refuerzo con cinta y lo uso hoy","Lo uso solo hoy, ma\xF1ana lo cambio"],ref:J.altura},{n:1,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable a\xE9reo sobre una acera, en su flecha m\xE1xima?",o:["4,5 m","3 m","6 m","2,5 m"],ref:J.m_altura},{n:1,p:"\xBFCu\xE1ntas calcoman\xEDas reflectivas de prevenci\xF3n van en el poste?",o:["Dos, una a cada lado","Una, en el centro del poste","Cuatro, dos a cada lado","Ninguna: no hace falta"],ref:J.m_calco},{n:1,p:"\xBFCu\xE1ntas personas, como m\xEDnimo, forman una cuadrilla de instalaci\xF3n de fibra?",o:["Dos: un t\xE9cnico y un asistente","Una, si tiene experiencia","Cuatro, con un supervisor de obra","Las que haya disponibles ese d\xEDa"],ref:J.cuadrillas},{n:2,p:"\xBFD\xF3nde se conecta preferiblemente la l\xEDnea de vida?",o:["En un anclaje por encima de la cabeza","En el portaganchos pl\xE1stico del arn\xE9s","En un cable telef\xF3nico de la red","A la altura de la cintura, en un pelda\xF1o"],ref:J.altura},{n:2,p:"La l\xEDnea de vida de 0,90 m se conecta en el arn\xE9s a la\u2026",o:["Argolla dorsal (espalda)","Argolla frontal (pecho)","Argolla D lateral","Portaganchos pl\xE1stico"],ref:J.altura},{n:2,p:"El freno para cuerda (o el carrito de la l\xEDnea vertical del cami\xF3n) se conecta a la\u2026",o:["Argolla frontal, a la altura del pecho y el ombligo","Argolla dorsal, en la espalda, junto a la l\xEDnea de 0,90 m","Argolla D lateral de la faja de posicionamiento","Hebilla del cintur\xF3n, sin ning\xFAn anclaje"],ref:J.freno},{n:2,p:"Antes de usar los guantes diel\xE9ctricos, adem\xE1s de revisarlos a la vista, se les hace\u2026",o:["La prueba de aire (inflarlos) para buscar fugas","Nada m\xE1s: con una mirada basta","Una prueba con agua caliente y jab\xF3n","Un estir\xF3n fuerte, de lado y de frente"],ref:J.epp},{n:2,p:"Los guantes diel\xE9ctricos clase 00 (etiqueta beige) protegen hasta\u2026",o:["500 V","1000 V","50 V","15 kV"],ref:J.epp},{n:2,p:"\xBFPor qu\xE9 se usa un guante de cuero sobre el guante diel\xE9ctrico?",o:["Para evitar perforaciones y rasgados del aislante","Para que no se resbale la mano en el trabajo","Porque el color se ve mejor en el poste","No se debe usar: el aislante ya basta solo"],ref:J.epp},{n:2,p:"El casco para trabajo en postes es ala ancha tipo II, con barbiquejo de\u2026",o:["Cuatro puntos","Dos puntos","Un punto","No lleva barbiquejo"],ref:J.epp},{n:2,p:"Resistencia m\xEDnima de un punto de anclaje por persona conectada:",o:["5000 lb (2272 kg)","500 lb","1000 kg","La de cualquier tubo firme"],ref:J.altura},{n:2,p:"Un equipo de altura que ya detuvo una ca\xEDda libre debe\u2026",o:["Quedar fuera de servicio","Revisarse y seguir us\xE1ndose","Lavarse y guardarse","Usarse solo en techos"],ref:J.altura},{n:2,p:"\xBFSe puede enrollar la l\xEDnea de vida para acortarla?",o:["No, est\xE1 prohibido","S\xED, dos vueltas","S\xED, si el anclaje est\xE1 bajo","Solo en escaleras"],ref:J.altura},{n:2,p:"\xBFCu\xE1ntos ganchos se pueden conectar en un mismo anillo D?",o:["Uno, salvo que el fabricante certifique otra cosa","Dos, si ambos son del mismo tama\xF1o","Tres, si el anillo es de acero grueso","Los que quepan en el anillo D"],ref:J.altura},{n:2,p:"La escalera de 28 pies (8,53 m) se traslada y coloca entre\u2026",o:["Dos personas, de estatura similar","Una persona, con ayuda de la cuerda","Tres personas, con la escalera abierta","Con el cami\xF3n en marcha, sin frenar"],ref:J.escaleras},{n:2,p:"L\xEDmite de carga manual para un trabajador sin limitaciones de salud:",o:["25 kg (20 kg para una trabajadora)","50 kg, con un compa\xF1ero que ayude","40 kg para todos los trabajadores","No hay l\xEDmite si el peso se reparte"],ref:J.carga},{n:2,p:"\xBFSe pueden usar calzas para nivelar la escalera?",o:["No: se busca nivelar el sitio sin calzas","S\xED, con piedras o pedazos de madera","S\xED, con bloques de concreto, si el piso est\xE1 flojo","Solo de noche, cuando hay menos tr\xE1nsito"],ref:J.escaleras},{n:3,p:"\xBFQu\xE9 altura m\xEDnima debe tener el cable en los cruces de calle?",o:["5 m","4,5 m","6,5 m","3,5 m"],ref:J.m_altura},{n:3,p:"Radio m\xEDnimo de curvatura de un cable de fibra \xF3ptica:",o:["20 veces su di\xE1metro","5 veces su di\xE1metro","2 veces su di\xE1metro","No hay m\xEDnimo"],ref:J.m_radio},{n:3,p:"Tensi\xF3n m\xE1xima recomendada si no hay datos del fabricante:",o:["250 kgf","50 kgf","1000 kgf","Sin l\xEDmite"],ref:J.m_tension},{n:3,p:"La balona de los cables en el poste debe medir como m\xE1ximo:",o:["10 cm","50 cm","1 m","No hay l\xEDmite"],ref:J.m_balona},{n:3,p:"Altura m\xEDnima de la gaza respecto al suelo:",o:["5 m","2 m","3 m","8 m"],ref:J.m_gaza},{n:3,p:"Si en el poste no hay secundario el\xE9ctrico, la gaza va a esta distancia del neutro:",o:["80 cm","10 cm","40 cm","2 m"],ref:J.m_gaza},{n:3,p:"Di\xE1metro del rollo de reserva en redes a\xE9reas:",o:["De 40 a 50 cm","De 5 a 10 cm","Unos 2 m de di\xE1metro","El que quepa"],ref:J.m_rollo_poste},{n:3,p:"Distancia del rollo de reserva al poste:",o:["75 cm","10 cm","2 m","No hay norma"],ref:J.m_reserva},{n:3,p:"Distancia normal entre postes en redes existentes:",o:["Entre 40 y 80 m","Entre 5 y 10 m","M\xE1s de 200 m siempre","No importa"],ref:J.m_postes},{n:3,p:"En un cruce sin apoyo, \xBFcu\xE1ntas calcoman\xEDas reflectivas se instalan?",o:["Dos a cada lado de la balona del cruce","Una en el centro del poste","Ninguna, el cruce no lo necesita","Solo si es de noche o llueve"],ref:J.m_balona},{n:3,p:"Todo cable que cruce una l\xEDnea de ferrocarril se instala\u2026",o:["De forma subterr\xE1nea, sin tendido a\xE9reo","A\xE9reo a 5 m, como en un cruce de calle","A\xE9reo a 4,5 m, como en una acera","A\xE9reo, con un poste a cada lado de la v\xEDa"],ref:J.m_ferrea},{n:3,p:"La fibra n\xFAmero 1 del c\xF3digo de colores EIA/TIA-598 es:",o:["Azul","Naranja","Verde","Caf\xE9"],ref:J.m_colores},{n:3,p:"Presi\xF3n de prueba de hermeticidad del cierre de empalme:",o:["8 psi","1 psi","30 psi","No se prueba"],ref:J.m_cierre},{n:3,p:"\xBFSe puede instalar un cable sobre un transformador o l\xEDnea el\xE9ctrica?",o:["Nunca","S\xED, si es diel\xE9ctrico","S\xED, con guantes","Solo de d\xEDa"],ref:J.m_prep},{n:3,p:"Longitud del rollo de reserva dentro de un registro:",o:["De 28 a 35 m","De 2 a 5 m","100 m","No se deja reserva"],ref:J.m_reserva_sub},{n:3,p:"\xBFSe recomienda pasar fibra y cobre por el mismo ducto?",o:["No, salvo excepciones justificadas","S\xED, siempre que est\xE9n bien sujetos","Solo si son delgados y de poco peso","Es obligatorio, seg\xFAn el jefe de obra"],ref:J.m_subterranea},{n:3,p:"Al instalar un cable directamente en un ducto, adem\xE1s se deja\u2026",o:["Una gu\xEDa para el halado de cables en el futuro","El ducto sin tapar, para ventilar","Agua jabonosa para lubricar el cable","Nada m\xE1s: el ducto ya queda listo"],ref:J.m_subterranea},{n:3,p:"Al terminar el trabajo en un registro, la tapa\u2026",o:["Se coloca asegurada con sus dispositivos de seguridad","Se deja abierta un rato para ventilar el registro","Se apoya sobre el borde sin asegurar","Se guarda en el cami\xF3n hasta el d\xEDa siguiente"],ref:J.m_tapas},{n:4,p:"Antes de usar el veh\xEDculo de la cuadrilla se revisa\u2026",o:["Aceite, combustible, agua, luces, llantas, repuesto, documentos, se\xF1alizaci\xF3n y herramientas","Solo el combustible y que el motor encienda bien, sin mirar nada m\xE1s del veh\xEDculo","Solo que las luces funcionen y que el veh\xEDculo se vea limpio por fuera","Nada: eso lo hace el taller una vez al a\xF1o, y el chofer solo maneja y reporta si algo suena raro"],ref:J.vehiculos},{n:4,p:"Al estacionar el cami\xF3n en la calle para trabajar, se debe\u2026",o:["Hacerlo en un lugar seguro y se\xF1alizar","Dejarlo donde caiga, con las luces apagadas","Subirlo completo a la acera","Dejarlo en el carril, es solo un rato"],ref:J.vehiculos},{n:4,p:"\xBFSe puede usar el celular mientras se conduce el veh\xEDculo institucional?",o:["No, est\xE1 prohibido","S\xED, con altavoz","S\xED, en sem\xE1foros","Solo para mensajes de trabajo"],ref:J.vehiculos},{n:4,p:"Si sientes cansancio o fatiga mientras conduces\u2026",o:["Te detienes en un sitio seguro, descansas o cedes el volante","Aceleras un poco para llegar antes de que se haga tarde","Bajas la ventana, pones m\xFAsica y sigues manejando","Tomas caf\xE9, te estiras en el carro y contin\xFAas sin parar"],ref:J.vehiculos},{n:4,p:"Las herramientas y materiales que van en el cami\xF3n deben ir\u2026",o:["Asegurados: en un frenazo o vuelco se vuelven proyectiles","Sueltos en la cajuela para sacarlos m\xE1s r\xE1pido","En el tablero, encima de la guantera","En el asiento del copiloto, sin amarrarlos"],ref:J.vehiculos},{n:4,p:"En una v\xEDa de tr\xE1fico denso, la cuadrilla debe\u2026",o:["Planificar con m\xE1s personal y alguien que regule el tr\xE1nsito","Trabajar m\xE1s r\xE1pido para liberar la v\xEDa","Trabajar sin conos para no estorbar","Ir una sola persona, para ahorrar gastos del d\xEDa"],ref:J.cuadrillas},{n:4,p:"Para trabajar en una v\xEDa de alto tr\xE1nsito, \xBFa qui\xE9n se puede pedir colaboraci\xF3n?",o:["A las autoridades de tr\xE1nsito","A los vecinos de la cuadra","A nadie: la cuadrilla se arregla sola","A los conductores que pasan por la v\xEDa"],ref:J.poda_transito},{n:4,p:"El GS-101 define viento fuerte como una velocidad constante mayor a\u2026",o:["40 km/h","10 km/h","100 km/h","20 km/h"],ref:J.altura},{n:4,p:"Si una l\xEDnea de telecomunicaciones queda m\xE1s cerca de lo permitido de la l\xEDnea primaria (media tensi\xF3n), \xBFqu\xE9 se hace?",o:["No se trabaja y se coordina la desconexi\xF3n con la empresa el\xE9ctrica","Se trabaja con guantes de cuero y con cuidado, sin tocar nada","Se trabaja r\xE1pido, antes de que llegue la distribuidora","Se ignora el riesgo si no se ven chispas ni humo en el poste"],ref:J.mt_suspender},{n:4,p:"Umbral de \xABno soltar\xBB de la corriente el\xE9ctrica en el cuerpo:",o:["10 mA","0,5 mA","1 A","100 A"],ref:J.electrico},{n:4,p:"\xBFA partir de qu\xE9 altura un trabajo se considera muy cr\xEDtico y exige rescate en sitio?",o:["M\xE1s de 12 m","M\xE1s de 3 m","M\xE1s de 30 m","M\xE1s de 100 m"],ref:J.emergencias},{n:4,p:"Tras una ca\xEDda, \xBFse mueve a la v\xEDctima?",o:["No, salvo que sea necesario por seguridad","S\xED, siempre, llev\xE1ndola a la sombra del poste","S\xED, para sentarla y darle agua de inmediato","S\xED, para llevarla en el cami\xF3n al hospital"],ref:J.emergencias},{n:4,p:"Un accidente laboral se reporta a la jefatura\u2026",o:["De inmediato, antes de terminar la jornada","Al final de la semana, con el resto de informes","Solo si hubo hospitalizaci\xF3n o incapacidad","No se reporta si fue leve y no dej\xF3 marca"],ref:J.reportes},{n:4,p:"Distancia t\xEDpica de ca\xEDda libre que considera el GS-101 al planificar un sistema antica\xEDdas:",o:["Por lo general, 1,80 m","5 m, seg\xFAn la altura del poste","10 cm, seg\xFAn el tipo de arn\xE9s","No importa la altura del trabajo"],ref:J.altura},{n:4,p:"\xBFCon qu\xE9 viento no se debe trabajar en techos?",o:["Vientos superiores a 60 km/h","Vientos superiores a 30 km/h","Vientos superiores a 90 km/h","El viento no es un factor en techos"],ref:J.t_techo_clima},{n:4,p:"\xBFCu\xE1ndo se deben identificar las l\xE1minas pl\xE1sticas, de policarbonato o tragaluces del techo?",o:["Desde el piso, antes de subir al techo","Cuando ya est\xE1s parado sobre el techo","Solo si llueve fuerte y hay viento","Nunca: no se ven de cerca"],ref:J.t_techo_caminar},{n:4,p:"Para caminar en un techo, \xBFpor d\xF3nde se debe hacer?",o:["Por los clavadores y los lugares m\xE1s c\xE9ntricos del techo","Por el borde del techo, para ver la calle","Por cualquier l\xE1mina, si no se ve da\xF1ada","Por la l\xE1mina m\xE1s cercana a la escalera"],ref:J.t_techo_caminar},{n:4,p:"Si no hay amarre seguro para la escalera, \xBFqu\xE9 es obligatorio?",o:["Que un compa\xF1ero de trabajo sostenga la escalera","Que la escalera se amarre a una l\xE1mina del techo","Que se suba con las manos ocupadas","Nada: la escalera se apoya sola"],ref:J.t_techo_escalera},{n:4,p:"\xBFCu\xE1nto debe sobrepasar la escalera la estructura a la que se apoya?",o:["1 metro o tres pelda\xF1os","30 cent\xEDmetros","No debe sobrepasarla","3 metros"],ref:J.t_techo_escalera},{n:4,p:"Al llegar al nivel del techo, \xBFa qu\xE9 distancia m\xEDnima del borde se debe retirar la persona antes de quitarse el equipo de altura?",o:["1 metro","50 cent\xEDmetros","No hay distancia m\xEDnima","3 metros"],ref:J.t_techo_traslado},{n:5,p:"\xBFQu\xE9 distancia m\xEDnima se exige entre un conductor de telecomunicaciones y una l\xEDnea primaria de media tensi\xF3n?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:J.mt_suspender,e:"Si la l\xEDnea de telecomunicaciones se sospecha a menos de 80 cm de la primaria de media tensi\xF3n, no se realiza ning\xFAn trabajo (GS-101 \xA75.6.9 f)."},{n:5,p:"\xBFQu\xE9 distancia se mantiene entre el conductor telef\xF3nico y el secundario el\xE9ctrico?",o:["0,40 m","0,55 m","0,70 m","2,50 m"],ref:J.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el secundario es de 40 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"\xBFY entre el conductor telef\xF3nico y el neutro?",o:["0,80 m","0,55 m","0,70 m","2,50 m"],ref:J.mt_distancias,e:"La distancia de instalaci\xF3n entre el conductor telef\xF3nico y el neutro es de 80 cm (GS-101 \xA75.6.9 b)."},{n:5,p:"Una l\xEDnea de telecomunicaciones est\xE1 por encima o al mismo nivel que el secundario. \xBFQu\xE9 se hace?",o:["No se trabaja hasta coordinar con la distribuidora la desconexi\xF3n del circuito durante el trabajo","Se trabaja con cuidado, sin tocar el secundario ni el neutro, y se avisa al jefe de cuadrilla","Se sube con guantes de cuero y casco bien puesto, con la l\xEDnea de vida anclada al poste","Se trabaja de noche, cuando hay menos tr\xE1nsito y menos gente cerca del poste"],ref:J.mt_suspender,e:"GS-101 \xA75.6.9 f): en ese caso se coordina con la empresa de distribuci\xF3n la desconexi\xF3n del circuito durante el tiempo del trabajo."},{n:5,p:"Una persona no calificada quiere cruzar el l\xEDmite de aproximaci\xF3n de una l\xEDnea energizada. \xBFPuede?",o:["No, salvo acompa\xF1ada de una persona calificada","S\xED, si lleva guantes de cuero y casco","S\xED, si el trabajo es corto y se hace r\xE1pido","S\xED, si lleva anteojos de seguridad"],ref:J.mt_frontera,e:"Las personas no calificadas no cruzan ese l\xEDmite a menos que est\xE9n acompa\xF1adas por una persona calificada (GS-101 \xA75.2 w)."},{n:5,p:"Toda l\xEDnea el\xE9ctrica cerca del trabajo se considera\u2026",o:["Activa, hasta verificar lo contrario con la distribuidora","Desactivada si no hay ruido ni chispas en el poste","Activa solo si hay chispas o se oye zumbido","Inactiva si est\xE1 en el poste de telecomunicaciones"],ref:J.mt_activa,e:"Todas las l\xEDneas el\xE9ctricas se consideran activas. Si hace falta verificar el estado de tensi\xF3n, se coordina con la distribuidora (GS-101 \xA75.6.9 h)."},{n:4,p:"\xBFQui\xE9n debe verificar y asegurar el ascenso al poste antes de iniciar la actividad?",o:["El encargado de cuadrilla","El t\xE9cnico que sube","Cada trabajador por separado","Nadie: el ascenso se revisa al terminar"],ref:Xa.inspeccion},{n:4,p:"\xBFQu\xE9 incluye la inspecci\xF3n de poster\xEDa antes del ascenso?",o:["El poste anterior, posterior, local y el tendido entre postes","Solo el poste donde se va a subir y el que tiene al lado","Solo el tendido entre los dos postes m\xE1s cercanos a la casa","Solo los postes de madera que se ven desde la calle"],ref:Xa.inspeccion},{n:4,p:"Si se evidencia alguna de las fallas del \xA75.6.3, \xBFqu\xE9 se hace?",o:["No se realizar\xE1 el trabajo y se realizar\xE1 el reporte a la jefatura de manera inmediata","Se sube con m\xE1s cuidado, revisando cada pelda\xF1o del poste","Se reporta al terminar la jornada, con un informe escrito y firmado","Se apuntala el poste con un puntal de madera y luego se sube"],ref:Xa.inspeccion},{n:4,p:"En un poste de madera, \xBFqu\xE9 da\xF1o por fisuras, quemado o podrido no debe superar la fuente?",o:["Una tercera parte del di\xE1metro","La mitad del di\xE1metro","Cualquier fisura es aceptable","Un cuarto del di\xE1metro"],ref:Xa.inspeccion},{n:4,p:"En un poste de metal, \xBFqu\xE9 perforaciones son falla?",o:["Perforaciones superiores a una tercera parte del di\xE1metro","Cuando hay m\xE1s de una, aunque sean peque\xF1as","Cuando se ven desde el suelo, a simple vista","Nunca, si el poste sigue en pie"],ref:Xa.inspeccion},{n:6,p:"\xBFQu\xE9 equipo de protecci\xF3n exige el GS-101 para la poda de \xE1rboles?",o:["Careta, lentes, protecci\xF3n auditiva, cuerdas de seguridad, casco de cuatro puntos con barbiquejo, guantes para riesgos mec\xE1nicos, ropa y calzado institucionales","Solo casco y guantes de cuero","Arn\xE9s de cuerpo completo y guantes diel\xE9ctricos","Solo lentes: el resto lo decide el encargado"],ref:J.poda_epp},{n:6,p:"\xBFPuede un trabajador subirse a un \xE1rbol para cortar una rama?",o:["No: el trabajador no se sube a un \xE1rbol","S\xED, con cuerdas de seguridad y un compa\xF1ero abajo","S\xED, si la rama es peque\xF1a","S\xED, con arn\xE9s de cuerpo completo"],ref:J.poda_subir},{n:6,p:"Una rama est\xE1 sobre una l\xEDnea energizada. \xBFQu\xE9 se hace?",o:["No se corta: se informa al Ejecutor del Proceso, que coordina con SST y el CLOR","Se corta despacio, con cuidado, sin tocar el cable","Se corta cuando la l\xEDnea se vea sin chispas","Se corta de noche, cuando hay menos gente"],ref:J.poda_linea},{n:6,p:"\xBFQu\xE9 se revisa antes de cada corte de rama?",o:["La distancia a lo energizado, la velocidad y direcci\xF3n del viento y la vegetaci\xF3n que puede interferir con la ca\xEDda","Solo que la motosierra arranque al primer jal\xF3n","Solo que el compa\xF1ero tenga el casco puesto","Nada: la experiencia dice cu\xE1ndo se corta"],ref:J.poda_viento},{n:6,p:"Antes de operar una motosierra, \xBFqu\xE9 condici\xF3n debe cumplir quien la opera?",o:["No estar cansado ni haber tomado medicamentos que alteren la conciencia","Tener un a\xF1o de experiencia, aunque est\xE9 cansado","Haber tomado caf\xE9 para estar alerta","Operarla solo si el supervisor no est\xE1 presente"],ref:J.poda_cansancio},{n:6,p:"\xBFCu\xE1ntos miembros, como m\xEDnimo, forman una cuadrilla de poda de \xE1rboles?",o:["Dos","Uno, si tiene experiencia","Uno, si el \xE1rbol es peque\xF1o","Tres, con un supervisor"],ref:J.poda_cuadrilla},{n:7,p:"\xBFCu\xE1ndo debe usarse el barbiquejo del casco?",o:["Cuando exista posibilidad de desprendimiento del casco por fuertes vientos, espacios confinados, postura corporal y trabajos en altura","Solo cuando el casco es nuevo","Nunca, porque incomoda al trabajar","Solo si el trabajo es de d\xEDa"],ref:J.epp},{n:7,p:"Los rollos de reserva en la galer\xEDa de cable deben tener una longitud\u2026",o:["Entre 20 a 25 m, de acuerdo con las condiciones del sitio","Entre 28 y 35 m, como en los registros","Entre 2 y 5 m","De 100 m siempre"],ref:J.gal_reserva},{n:7,p:"Los rollos de reserva en la galer\xEDa se colocan\u2026",o:["En la pared del lado opuesto al MDF, a la mayor altura posible, partiendo desde la pared final","En la pared del MDF, pegados a los ductos","En el piso, para que queden m\xE1s seguros","En cualquier pared, si hay espacio"],ref:J.gal_reserva},{n:7,p:"Si el rollo de reserva va en la pared del MDF, \xBFcu\xE1nto espacio se deja libre desde la salida de los ductos?",o:["50 cm hacia el fondo de la galer\xEDa","20 cm","1,20 m","No hace falta espacio"],ref:J.gal_50cm},{n:7,p:"\xBFCon qu\xE9 se fija el cable en las galer\xEDas?",o:["Con pletinas peque\xF1as (de 20 cm) y fajas pl\xE1sticas","Con clavos de madera en el muro","Con cinta adhesiva, sin pletinas","Con el cable suelto, para que se mueva"],ref:J.gal_pletinas},{n:7,p:"\xBFCu\xE1ntas placas de identificaci\xF3n se colocan en un rollo de reserva?",o:["Dos placas de identificaci\xF3n","Una sola, en el centro del rollo","Cuatro, dos a cada lado","Ninguna: el rollo no se identifica"],ref:J.gal_placas},{n:8,p:"\xBFQu\xE9 debe tener el personal t\xE9cnico para atender una emergencia en altura?",o:["Botiqu\xEDn b\xE1sico de primeros auxilios y equipos para rescate vertical: cuerdas de seguridad, mosquetones y pull-lift","Solo el botiqu\xEDn del cami\xF3n, si queda lugar","Solo las cuerdas de la escalera, sin mosquetones","Nada: la ayuda llega sola"],ref:J.eri_antes},{n:8,p:"\xBFCu\xE1ndo un trabajo en altura se considera muy cr\xEDtico?",o:["Cuando pasa de 12 metros de altura","Cuando pasa de 3 metros de altura","Cuando hay m\xE1s de dos trabajadores","Cuando llueve o hay viento"],ref:J.eri_criticas},{n:8,p:"Durante un accidente en altura, \xBFqu\xE9 se hace con el \xE1rea y con los trabajos?",o:["Se despeja completamente el \xE1rea y se suspenden de inmediato las actividades","Se sigue trabajando mientras llega la ayuda","Se despeja solo la mitad del \xE1rea, para no atrasar la labor","Se avisa a la cuadrilla de al lado y se sigue trabajando"],ref:J.eri_despejar},{n:8,p:"Durante una emergencia en altura, \xBFc\xF3mo se pide la ayuda de los cuerpos de emergencia?",o:["Por la l\xEDnea telef\xF3nica 9-1-1","Con un mensaje en el grupo de la cuadrilla","Esperando a que llegue la jefatura","Llevando a la v\xEDctima al hospital en la camioneta"],ref:J.eri_911},{n:8,p:"\xBFQu\xE9 maniobra de rescate se puede hacer si la cuadrilla no la conoce?",o:["Ninguna: no se hacen maniobras de rescate de las que no se tenga conocimiento previo","La que parezca m\xE1s r\xE1pida","Cualquiera, si son dos personas en el sitio","La que indique el compa\xF1ero que mira desde abajo"],ref:J.eri_911},{n:8,p:"Durante una emergencia, \xBFqui\xE9n puede dar informaci\xF3n a personas u organizaciones externas?",o:["Solo la direcci\xF3n o el personal autorizado, mediante comunicados oficiales","Cualquier trabajador de la cuadrilla","El compa\xF1ero que est\xE9 m\xE1s cerca de la prensa","Cualquier persona que pregunte, si dice ser familiar"],ref:J.eri_terceros},{n:9,p:"\xBFQu\xE9 es manejar a la defensiva?",o:["Conducir evitando accidentes a pesar de las acciones incorrectas de los dem\xE1s y de las condiciones adversas","Conducir r\xE1pido para pasar menos tiempo en la carretera","Responderles a los dem\xE1s conductores para que respeten","Manejar solo de d\xEDa y con buen clima"],ref:J.sv_defensivo},{n:9,p:"\xBFCu\xE1les son los cinco elementos del manejo defensivo?",o:["Conocimiento, estar alerta, previsi\xF3n, juicio y habilidad","Velocidad, reflejos, fuerza, suerte y experiencia","Licencia, seguro, marchamo, revisi\xF3n t\xE9cnica y placa","Prisa, frustraci\xF3n, cansancio, complacencia y descuido"],ref:J.sv_defensivo},{n:9,p:"\xBFQu\xE9 porcentaje de los accidentes viales tiene origen en el factor humano?",o:["El 90 %","El 10 %","La mitad","El 25 %"],ref:J.sv_humano},{n:9,p:"\xBFCu\xE1les son los cuatro estados que producen errores al conducir?",o:["Prisa, frustraci\xF3n, cansancio y complacencia","Lluvia, neblina, derrumbes y huecos","Alcohol, drogas, f\xE1rmacos y caf\xE9","Velocidad, curvas, pendientes y peraltes"],ref:J.sv_estados},{n:9,p:"La complacencia al volante es\u2026",o:["El exceso de confianza que lleva a relajar la atenci\xF3n","La falta de fuerzas despu\xE9s de un esfuerzo o por no descansar","La respuesta emocional ante un hecho no gestionado","La rapidez con que se hace una cosa"],ref:J.sv_estados},{n:9,p:"\xBFCada cu\xE1nto se revisan los nueve m\xEDnimos de seguridad vehicular?",o:["Todos los d\xEDas antes de salir con el automotor, siempre que aplique","Una vez al mes, en el taller","Solo cuando el veh\xEDculo hace un ruido raro","Una vez al a\xF1o, con la revisi\xF3n t\xE9cnica"],ref:J.sv_minimos},{n:9,p:"\xBFQu\xE9 dispositivos de advertencia deben estar en buen estado?",o:["Luces altas y bajas, de freno e intermitentes, la bocina y dos juegos de tri\xE1ngulos","Solo la bocina","Solo las luces delanteras","El radio y el aire acondicionado"],ref:J.sv_minimos},{n:9,p:"Seg\xFAn la capacitaci\xF3n, \xBFd\xF3nde se recomienda usar las llantas de recauche?",o:["Solo en la parte trasera del automotor","Solo adelante","En las cuatro posiciones","\xDAnicamente como repuesto"],ref:J.sv_minimos},{n:9,p:"\xBFQui\xE9n puede conducir un veh\xEDculo institucional?",o:["El funcionario que cuenta con los permisos de conducir del ICE","Cualquier compa\xF1ero con licencia","El primero que llegue al plantel","El que tenga m\xE1s experiencia, aunque no tenga el permiso"],ref:J.sv_permiso},{n:10,p:"Al empezar a llover, \xBFpor qu\xE9 se pone resbalosa la calle?",o:["Se forma una especie de jab\xF3n con los residuos de tierra, grasa y gasolina","Porque el agua enfr\xEDa el asfalto","Porque las llantas se desinflan con el agua","No cambia nada: el asfalto no resbala"],ref:J.sv_lluvia},{n:10,p:"En caminos con grava, arenosos o mojados, \xBFqu\xE9 pide el GS-101?",o:["Bajar la velocidad y manejar con cuidado","Subir la velocidad para no quedarse pegado","Frenar fuerte en cada curva","Ir pegado al veh\xEDculo de adelante para seguir su ruta"],ref:J.sv_mojado},{n:10,p:"Llueve tan fuerte que la falta de visibilidad es excesiva. \xBFQu\xE9 se hace?",o:["Detener el veh\xEDculo a un costado de la carretera y esperar que pase la tormenta","Seguir igual, con las luces altas","Seguir de cerca al veh\xEDculo de adelante","Acelerar para salir pronto de la tormenta"],ref:J.sv_visibilidad},{n:10,p:"\xBFPor qu\xE9 la neblina es una de las peores condiciones para conducir?",o:["La habilidad del conductor no puede mejorar la visibilidad ni permitirle aumentar la velocidad","Solo afecta a las motocicletas","Hace que el motor pierda potencia","No es peligrosa si se conoce el camino"],ref:J.sv_lluvia},{n:10,p:"Vas acompa\xF1ado y sientes cansancio al volante. \xBFQu\xE9 indica el GS-101?",o:["Detenerte en un sitio seguro, bajarte, caminar y ceder la conducci\xF3n al compa\xF1ero","Pedirle al compa\xF1ero que te hable para no dormirte","Subir el volumen del radio","Abrir la ventana y seguir hasta llegar"],ref:J.sv_fatiga},{n:10,p:"Con una dosis alta, el alcohol provoca\u2026",o:["Dificultad en el habla, incoordinaci\xF3n, juicio alterado y falta de control emocional","Mejores reflejos para manejar","M\xE1s atenci\xF3n en la carretera","Solo sue\xF1o, sin otros efectos"],ref:J.sv_sustancias},{n:10,p:"Observas o causas un da\xF1o al veh\xEDculo. \xBFQu\xE9 haces?",o:["Lo reportas: no se oculta, puede producir un accidente","Lo arreglas t\xFA en la casa","Lo callas si es peque\xF1o","Esperas a que otro compa\xF1ero lo note"],ref:J.sv_danos},{n:11,p:"\xBFCu\xE1ndo se hace el ATS (an\xE1lisis de trabajo seguro)?",o:["Antes de empezar las labores de cada d\xEDa, con toda la cuadrilla","Una vez por semana, solo el encargado","Al terminar la jornada, para el informe","Solo cuando ya hubo un accidente"],ref:J.gs31_ats},{n:11,p:"A media ma\xF1ana cambia el personal o llega otro equipo. \xBFQu\xE9 pide el GS-31?",o:["Aplicar de nuevo el ATS antes de seguir","Nada: el ATS de la ma\xF1ana sigue valiendo","Anotarlo en el informe del d\xEDa siguiente","Que el compa\xF1ero nuevo firme la pizarra sin leerla"],ref:J.gs31_cambios},{n:11,p:"Una tarea cr\xEDtica tiene un grado de criticidad (GC) de 8 o m\xE1s. \xBFQu\xE9 significa?",o:["Criticidad alta: se atiende primero","Criticidad baja: puede esperar","Criticidad moderada","Nada: el GC es solo un tr\xE1mite"],ref:J.gs31_criticidad},{n:11,p:"En la pizarra del ATS aparece un factor de muerte. \xBFQu\xE9 se hace?",o:["Se revisan en conjunto las acciones a implementar","Nada: es solo un dato de la pizarra","Lo resuelve el t\xE9cnico m\xE1s nuevo","Se anota y se revisa al d\xEDa siguiente"],ref:J.ats_muerte},{n:15,p:"Detectas una anomal\xEDa en el trabajo de tu cuadrilla. \xBFA qui\xE9n se lo informas?",o:["Al coordinador de cuadrilla y/o a SST","A nadie, si ya lo corregiste t\xFA","Solo al cliente, al terminar la obra","A la persona que lo hizo, para que lo anote despu\xE9s"],ref:J.rec_anomalia},{n:15,p:"Un compa\xF1ero sufre un accidente. \xBFQu\xE9 formulario se usa y cu\xE1ndo se avisa a la jefatura?",o:["F07-GS-52 Aviso inmediato, antes de terminar la jornada","F06-GS-52, la pr\xF3xima semana","F01-GS-52, al d\xEDa siguiente","Ning\xFAn formulario: basta con avisar en la charla"],ref:J.rec_accidente},{n:15,p:"Hubo un casi incidente y nadie se lastim\xF3. \xBFQu\xE9 formulario se usa?",o:["F06-GS-52 (o F01-GS-52 si fue grave)","F07-GS-52, el aviso inmediato","Ninguno, porque no hubo lesi\xF3n","El F02-CSCON-SST-00-25 con la firma del compa\xF1ero"],ref:J.rec_cuasi},{n:15,p:"Un compa\xF1ero incumple una regla de SST por primera vez, con riesgo bajo. \xBFQu\xE9 se hace?",o:["Retroalimentaci\xF3n positiva y correctiva, registro en el F02-CSCON-SST-00-25 con su firma, y aviso a la jefatura inmediata","Solo se le llama la atenci\xF3n en privado, sin registro","Se guarda para el informe del a\xF1o siguiente","Se le sanciona de inmediato, sin escuchar su versi\xF3n"],ref:J.rec_liderazgo},{n:15,p:"Hay un peligro inminente para las personas durante una tarea. \xBFQu\xE9 se hace?",o:["Se interrumpe la actividad","Se termina la tarea y luego se corrige","Se sigue con m\xE1s cuidado","Se avisa al final de la semana"],ref:J.rec_inminente},{n:16,p:"\xBFC\xF3mo se entra a una planta solar?",o:["Con autorizaci\xF3n, coordinado con el encargado de la planta","Entrando primero y avisando despu\xE9s","Por la cerca, si el port\xF3n est\xE1 cerrado","Como diga el primero que llegue"],ref:J.demo_generacion_autorizacion},{n:16,p:"\xBFCu\xE1ndo produce electricidad un panel solar?",o:["Mientras le da la luz: por eso se trata como energizado","Solo al mediod\xEDa","Solo si el inversor est\xE1 apagado","Nunca, si el panel est\xE1 sucio"],ref:J.demo_generacion_energizado},{n:16,p:"\xBFSe puede pisar o apoyarse en un panel para ver mejor?",o:["No: no se pisa ni se apoya nadie en los paneles","S\xED, si el panel est\xE1 limpio","S\xED, si la fila es corta","S\xED, con una tabla debajo"],ref:J.demo_generacion_no_pisar},{n:16,p:"\xBFQui\xE9n manipula las conexiones y los inversores de la planta?",o:["Solo personal calificado, seg\xFAn el procedimiento de la planta","Cualquier trabajador de la cuadrilla","Quien llegue primero a la caseta","Quien tenga la llave del port\xF3n"],ref:J.demo_generacion_conexiones},{n:16,p:"Ves un cable suelto y pelado en el camino de la planta. \xBFQu\xE9 haces?",o:["No lo tocas: lo marcas y lo reportas","Lo levantas con la mano para pasar","Lo cortas con la herramienta","Lo envuelves con cinta y sigues"],ref:J.demo_generacion_energizado},{n:16,p:"Llega una tormenta el\xE9ctrica mientras trabajan al aire libre. \xBFQu\xE9 indica el GS-101?",o:["Suspender la actividad por las condiciones del clima","Terminar la fila antes de bajar","Seguir trabajando: la tormenta todav\xEDa no ha llegado","Quedarse donde est\xE1n, a esperar"],ref:J.sol_clima},{n:16,p:"Encuentras un panel con el vidrio roto. \xBFQu\xE9 haces?",o:["Lo marcas y lo reportas al encargado de la planta, sin tocarlo","Lo cambias t\xFA, sin avisar","Lo tapas con cinta para la visita","Lo dejas para la pr\xF3xima visita sin avisar"],ref:J.demo_generacion_danos},{n:16,p:"Hace mucho sol y llevan un rato limpiando. \xBFQu\xE9 se hace?",o:["Tomar agua y descansar a la sombra con frecuencia","Seguir sin parar: el agua se toma al final","Quitarse el casco para refrescarse","Tomar solo caf\xE9, para no sudar"],ref:J.demo_generacion_calor},{n:13,p:"\xBFQu\xE9 sirve de apoyo a la escalera a medio vano, si no hay poste?",o:["El veh\xEDculo: la escalera se amarra a \xE9l","Nada: la escalera se apoya sola en el suelo","Solo un compa\xF1ero que la sostenga, sin amarrarla","El peso del trabajador sobre ella"],ref:J.mv_apoyo},{n:13,p:"\xBFEn cu\xE1ntos puntos se amarra la escalera a medio vano?",o:["En dos: al pant\xF3grafo y al eje de una llanta","En uno: basta con el pant\xF3grafo","En tres: se suma la cabina","No se amarra: el peso de la escalera basta"],ref:J.mv_dos_puntos},{n:13,p:"\xBFQu\xE9 nudo da la tensi\xF3n en el amarre a medio vano?",o:["Nudo ocho aplicado","Nudo alondra","Nudo gaza simple","Nudo ocho en l\xEDnea"],ref:J.mv_nudos},{n:13,p:"\xBFC\xF3mo termina el amarre a medio vano?",o:["Con pata de chancho (nudo ballestrinque)","Con un nudo alondra, sin asegurarlo","Con una gaza simple, suelta","Dejando la cuerda sin amarrar para ajustar despu\xE9s"],ref:J.mv_nudos},{n:13,p:"\xBFCon qu\xE9 se sube por una escalera a medio vano?",o:["Con la cuerda de seguridad sujetada a la escalera","Con la cuerda en el hombro, sin sujetarla","Con las manos ocupadas por herramientas","Sin cuerda, si la escalera es corta"],ref:J.mv_subida},{n:13,p:"Una escalera de 24 pies (7,32 m): \xBFhasta qu\xE9 altura de uso sirve?",o:["6,42 m","7,32 m","7,63 m","5,30 m"],ref:J.mv_tabla2},{n:13,p:"\xBFHasta qu\xE9 pelda\xF1o de la escalera se puede trabajar?",o:["Hasta el que alcanza el trabajo, sin llegar a los tres superiores","Hasta el \xFAltimo, para alcanzar mejor","En el tercero de arriba, si hace falta"],ref:J.mv_tres},{n:14,p:"\xBFQu\xE9 abertura m\xEDnima debe tener una cala para instalar el cable?",o:["1,5 m de largo por 1 m de ancho, como m\xEDnimo","1 m de largo por 1 m de ancho","1,5 m de largo por 0,5 m de ancho","0,8 m de largo por 0,8 m de ancho"],ref:J.cala_abertura},{n:14,p:"Si la abertura entre los extremos del ducto mide 40 cm, \xBFcu\xE1nto debe medir la pieza de PVC de reparaci\xF3n?",o:["90 cm: la abertura m\xE1s 50 cm","40 cm: lo mismo que la abertura","50 cm: solo el sobrante","1,20 m: el triple de la abertura"],ref:J.cala_pieza},{n:14,p:"\xBFHacia d\xF3nde queda la abertura del corte longitudinal de la pieza de reparaci\xF3n?",o:["Hacia arriba","Hacia abajo, contra el ducto","Hacia un costado","No importa la posici\xF3n"],ref:J.cala_ranura},{n:14,p:"\xBFCu\xE1ntas amarras de cinta met\xE1lica o tipo gaza llevan la reparaci\xF3n, y d\xF3nde?",o:["Tres: una en cada extremo y una en el centro","Dos: una en cada extremo","Cuatro: una cada 25 cm","Una sola, en el centro"],ref:J.cala_amarras},{n:14,p:"El preformado mide 75 cm o menos. \xBFA qu\xE9 distancia del poste va el cierre de empalme?",o:["75 cm","1,5 m","30 cm","2 m"],ref:J.cala_empalme},{n:14,p:"En el relleno de la cala, \xBFqu\xE9 capa va justo debajo del lastre?",o:["El material de la excavaci\xF3n, compactado al 95 % del Proctor","El tobacemento","El asfalto","La arena suelta"],ref:J.cala_capas},{n:14,p:"En un tramo recto de 1 km o m\xE1s, \xBFcada cu\xE1nto se ponen las anclas de seguridad?",o:["Cada 500 m","Cada 100 m","Cada 1 km, una sola","Solo en el poste m\xE1s alto"],ref:J.cala_anclas},{n:14,p:"\xBFA qu\xE9 distancia del poste se coloca cada ancla de seguridad?",o:["La mitad de la altura del poste, medida del herraje a la base","Un metro, sin importar la altura","Lo mismo que la altura del poste","Cinco metros, siempre"],ref:J.cala_ancla_distancia},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se le pregunta al cliente?",o:["C\xF3mo est\xE1n el cielorraso y la estructura, y si ha visto cables, goteras o avispas","Solo a qu\xE9 hora puede empezar el trabajo","Nada: si desde abajo se ve bien, se sube","Si puede pagar un trabajo extra"],ref:J.cr_cliente},{n:12,p:"Hay un cable el\xE9ctrico expuesto en el cielorraso. \xBFQu\xE9 se le pide al cliente?",o:["Que desconecte la electricidad antes de subir","Nada: se sube con cuidado, sin tocarlo","Que deje el cable al aire para revisarlo mejor","Que avise cuando el cable se caliente"],ref:J.cr_electrico},{n:12,p:"Si no es posible desconectar la electricidad del cielorraso, \xBFcon qu\xE9 se sube?",o:["Con guantes diel\xE9ctricos, despu\xE9s de revisar la zona a trabajar","Con guantes de cuero","Sin guantes, con cuidado","Con cualquier guante de trabajo"],ref:J.cr_electrico},{n:12,p:"Para trabajar en un cielorraso, \xBFqu\xE9 lleva el casco?",o:["Barbiquejo y linterna","Solo el barbiquejo, sin linterna","Solo la linterna, sin barbiquejo","Nada: el casco se usa solo en la calle"],ref:J.cr_epp},{n:12,p:"\xBFQu\xE9 se revisa desde el suelo antes de subir al cielorraso?",o:["Que no haya colmenas de avispas o similares","Solo la hora del d\xEDa","Que la escalera sea de aluminio","Nada: eso se revisa al terminar"],ref:J.cr_avispas},{n:12,p:"Antes de subir al cielorraso, \xBFqu\xE9 se valora?",o:["Si una extensi\xF3n de fibra permite evitar subir","Si el cliente tiene caf\xE9","Cu\xE1nto pesa el trabajador","Si el d\xEDa est\xE1 soleado"],ref:J.cr_extension},{n:12,p:"La estructura del cielorraso debe observarse sin\u2026",o:["Corrosi\xF3n avanzada o madera descompuesta, y estable","Pintura nueva","R\xF3tulos de la oficina","Cables de colores"],ref:J.cr_estructura},{n:12,p:"Una escalera de abrir (tipo A) debe ser de\u2026",o:["Fibra de vidrio","Aluminio, siempre","Madera, sin importar el lugar","Cualquier material, si est\xE1 pintada"],ref:J.cr_escalera_tipo},{n:17,p:"En una obra, \xBFc\xF3mo deben estar los tableros y las cajas el\xE9ctricas?",o:["Tapados, identificados y cerrados","Abiertos, para revisar r\xE1pido los interruptores","Cerrados, aunque no tengan identificaci\xF3n","Como los dej\xF3 el \xFAltimo que los us\xF3"],ref:J.el_tablero},{n:17,p:"\xBFQu\xE9 necesita un medidor el\xE9ctrico provisional en la obra?",o:["Base estable y protecci\xF3n del agua","Solo un r\xF3tulo con el nombre de la obra","Estar en el suelo, donde nadie lo golpee","Nada: es provisional"],ref:J.el_medidor},{n:17,p:"\xBFDe qu\xE9 se protegen los conductores el\xE9ctricos en una obra?",o:["De los da\xF1os mec\xE1nicos: maquinaria, veh\xEDculos, agua y qu\xEDmicos","Solo del sol, con pintura","De nada: se cambian cuando se da\xF1an","Solo de la lluvia, con cinta aislante"],ref:J.el_conductores},{n:17,p:"\xBFCon qui\xE9n se aplica la lista de verificaci\xF3n del Anexo C del C\xF3digo El\xE9ctrico?",o:["En conjunto con un t\xE9cnico el\xE9ctrico","Solo, desde la oficina","Con el primer pe\xF3n que est\xE9 libre","Con el cliente, al entregar la obra"],ref:J.el_anexo_c},{n:17,p:"\xBFCu\xE1l de estos es un acto inseguro con electricidad?",o:["Intervenir sin autorizaci\xF3n","Usar el EPP diel\xE9ctrico","Reportar un enchufe deteriorado","Mantener el tablero cerrado"],ref:J.el_autorizacion},{n:17,p:"Con la piel h\xFAmeda o sudada, la resistencia del cuerpo a la corriente\u2026",o:["Baja","Sube","No cambia","Depende solo del calzado"],ref:J.el_mojado},{n:17,p:"\xBFQu\xE9 factores influyen en la magnitud de un incidente el\xE9ctrico?",o:["Intensidad, resistencia del cuerpo, tensi\xF3n, tiempo de contacto y trayectoria","Solo el color del cable","Solo la hora del d\xEDa","La marca del tablero y del medidor"],ref:J.el_factores},{n:17,p:"Seg\xFAn el Anexo B, una instalaci\xF3n es de peligro inminente o alto riesgo cuando\u2026",o:["Carece de protecci\xF3n frente al contacto con partes energizadas o el cortocircuito","Tiene m\xE1s de un tablero","Es provisional, aunque cumpla con todo","Alguien ya se lastim\xF3 en ella"],ref:J.el_anexo_b}],vE={registro:{titulo:"Una persona camina mirando el celular hacia el registro abierto",opciones:[{t:"STOP: Andr\xE9s la detiene y la gu\xEDa por fuera del \xE1rea se\xF1alizada",ok:!0},{t:"Le gritamos desde adentro del registro",ok:!1},{t:"Seguimos: los conos ya est\xE1n puestos",ok:!1},{t:"Ponemos la tapa encima con el compa\xF1ero adentro",ok:!1}],explicacion:"Un registro abierto es un hueco en plena acera. El per\xEDmetro se asegura con se\xF1alizaci\xF3n vial y peatonal y, si alguien entra al \xE1rea, se detiene la labor y se le gu\xEDa fuera.",ref:J.ev_registro,consecuencia:"La persona tropez\xF3 con el borde del registro y por poco cae adentro, sobre tu compa\xF1ero."},impaciente:{titulo:"Un conductor impaciente ignora el ALTO del banderero",opciones:[{t:"STOP: todos fuera de la calzada, dejamos pasar al veh\xEDculo y luego retomamos el control del tr\xE1nsito",ok:!0},{t:"Andr\xE9s se planta frente al auto para obligarlo a frenar",ok:!1},{t:"Seguimos pasando el cable: ya va a frenar",ok:!1},{t:"Le gritamos y le golpeamos el auto cuando pase",ok:!1}],explicacion:"Ninguna paleta detiene a un auto que no quiere detenerse. Ante un conductor que no respeta la se\xF1al, se evacua la calzada y nadie se le atraviesa; despu\xE9s se retoma el control (y se reporta si es necesario).",ref:J.ev_impaciente,consecuencia:"El auto pas\xF3 a cent\xEDmetros de Andr\xE9s, que estaba en medio de la calzada con la gu\xEDa del cable. La paleta ALTO no es un escudo."},peaton:{titulo:"Una persona entr\xF3 al \xE1rea se\xF1alizada",opciones:[{t:"Detengo la labor y pido a Andr\xE9s que gu\xEDe a la persona fuera del \xE1rea",ok:!0},{t:"Sigo tensando: ya casi termino",ok:!1},{t:"Le grito desde arriba que se aleje, sin dejar de trabajar",ok:!1},{t:"Bajo r\xE1pido por la escalera para sacarla yo",ok:!1}],explicacion:"El \xE1rea restringida protege a terceros de la ca\xEDda de herramientas o materiales. Se detiene la labor hasta despejarla.",ref:J.demarcacion,consecuencia:"Un herraje se solt\xF3 y cay\xF3 a medio metro de la persona. Nadie sali\xF3 herido, pero pudo terminar en tragedia."},companero:{titulo:"Andr\xE9s quiere subir a la escalera para ayudarte",opciones:[{t:"Lo detengo: solo un trabajador en la escalera; que suba el material con la cuerda",ok:!0},{t:"Que suba, son solo unos segundos",ok:!1},{t:"Que suba hasta la mitad y desde ah\xED me pase el herraje",ok:!1},{t:"Que me lance el herraje desde abajo",ok:!1}],explicacion:"Sobre la escalera port\xE1til se permite un solo trabajador. Los materiales se suben con bolso, mecate o cuerda.",ref:J.escaleras,consecuencia:"Con dos personas encima, la escalera se torci\xF3 en el amarre medio. Los dos quedaron colgando de la l\xEDnea de vida."},vehiculo:{titulo:"Un veh\xEDculo se acerca r\xE1pido al \xE1rea de trabajo",opciones:[{t:"Detengo la labor; Andr\xE9s regula el paso con la se\xF1alizaci\xF3n y esperamos a que pase",ok:!0},{t:"Sigo trabajando: los conos son suficientes",ok:!1},{t:"Bajo corriendo a quitar los conos del camino",ok:!1},{t:"Le hago se\xF1as desde la escalera sin dejar de trabajar",ok:!1}],explicacion:"La se\xF1alizaci\xF3n vial protege a la cuadrilla. Si un veh\xEDculo no respeta el \xE1rea, se detiene la labor y se regula el tr\xE1nsito antes de continuar.",ref:J.demarcacion,consecuencia:"El auto pas\xF3 rozando la escalera: la sacudida casi te tira. La se\xF1alizaci\xF3n sola no basta si nadie vigila el tr\xE1nsito."},tormenta:{titulo:"La lluvia se volvi\xF3 torrencial y hay rayer\xEDa",opciones:[{t:"Suspendo: aseguro herramientas, desciendo con tres puntos de apoyo y espero a que pase",ok:!0},{t:"Termino r\xE1pido el tensado antes de bajar",ok:!1},{t:"Me quedo arriba esperando a que escampe",ok:!1},{t:"Me quito los guantes mojados para tener m\xE1s agarre",ok:!1}],explicacion:"Se proh\xEDbe el trabajo en altura con tormenta el\xE9ctrica, lluvia torrencial o vientos de 60 km/h o m\xE1s.",ref:J.altura,consecuencia:"Un rayo cay\xF3 a dos cuadras. Con el agua, los pelda\xF1os quedaron resbalosos y perdiste un apoyo al bajar."},viento:{titulo:"Una r\xE1faga supera los 60 km/h mientras la cuadrilla trabaja en el techo",opciones:[{t:"Suspender la labor y bajar del techo, anclados a la l\xEDnea vertical de la escalera",ok:!0},{t:"Seguir: la r\xE1faga pasa en unos segundos",ok:!1},{t:"Seguir agachados, sin soltar el trabajo",ok:!1},{t:"Bajar de un salto para no esperar la escalera",ok:!1}],consecuencia:"Con vientos superiores a 60 km/h no se trabaja en techos.",explicacion:"No se debe trabajar en techos con vientos superiores a 60 km/h. Se suspende la labor y se baja de forma segura.",ref:J.t_techo_clima},presion:{titulo:"Andr\xE9s quiere subir ya: \xABel poste local se ve bien\xBB",opciones:[{t:"Seguimos: se inspeccionan el poste anterior, el local, el posterior y el tendido antes de subir",ok:!0},{t:"Subimos: el poste local est\xE1 bien",ok:!1},{t:"Que suba Andr\xE9s a revisar, es r\xE1pido",ok:!1},{t:"Subimos y revisamos los dem\xE1s postes despu\xE9s",ok:!1}],explicacion:"El encargado de cuadrilla verifica y asegura el ascenso al poste antes de iniciar la actividad. La inspecci\xF3n incluye el poste anterior, el posterior, el local y el tendido entre postes.",ref:Xa.inspeccion,consecuencia:"El poste posterior ten\xEDa una falla visible. Subir sin inspeccionarlo habr\xEDa sido hacerlo sobre un poste no verificado."},poda_peaton:{titulo:"Un peat\xF3n camina por la acera y entra en la zona de ca\xEDda de la rama",opciones:[{t:"STOP: se detiene la labor y un compa\xF1ero lo gu\xEDa fuera de la zona se\xF1alizada",ok:!0},{t:"Le gritamos, pero seguimos cortando",ok:!1},{t:"Seguimos: la rama ya cay\xF3",ok:!1},{t:"Que pase r\xE1pido por debajo de la rama",ok:!1}],explicacion:"Mientras haya una rama por caer o ca\xEDda en la zona, la labor se detiene y se regula el paso: nadie camina dentro de la zona de ca\xEDda (GS-101 \xA75.6.10 n y o).",ref:J.poda_trayectoria,consecuencia:"La persona qued\xF3 bajo la rama. Quien corta debe detener la labor a tiempo."},galeria_vigia:{titulo:"El compa\xF1ero de afuera deja de responder desde la tapa mientras est\xE1s en la galer\xEDa",opciones:[{t:"STOP: se detiene la labor y quien est\xE1 adentro sale por la escalera",ok:!0},{t:"Seguimos: el compa\xF1ero seguro est\xE1 atento",ok:!1},{t:"Gritamos desde el fondo de la galer\xEDa y seguimos con las pletinas",ok:!1},{t:"Dejamos el detector y seguimos cerca del rollo",ok:!1}],explicacion:"Sin contacto con quien vigila la tapa, se detiene la labor y se sale. La fuente no describe la comunicaci\xF3n en espacios confinados: se anota como duda en PENDIENTES_SST.md (J10).",ref:J.gal_vigia,consecuencia:"Quien estaba adentro sigui\xF3 trabajando sin que nadie lo viera desde la tapa."}};var _E=X_.filter(a=>a.n===5);var Of=[{urls:"stun:stun.l.google.com:19302"}],Y_=11;function Bf({sala:a,id:e,alMensaje:t,alPar:n}){let i=`realtime:mundo-${a}`,r={ws:"conectando",rtt:null,pares:new Map,presencia:!1},s,o=0,l=!1,c=!1,d=0,p=[],u=(g,A,C=i)=>{s?.readyState===1&&s.send(JSON.stringify({topic:C,event:g,payload:A,ref:String(++o)}))},f=(g,A)=>u("broadcast",{type:"broadcast",event:g,payload:A});function x(){r.ws="conectando",l=!1,s=new WebSocket(`${ou.url.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${ou.llave}&vsn=1.0.0`),s.onopen=()=>u("phx_join",{config:{broadcast:{self:!0},presence:{key:e},private:!1}}),s.onerror=()=>{r.ws="error"},s.onclose=()=>{r.ws!=="error"&&(r.ws="cerrado"),c||setTimeout(x,3e3)},s.onmessage=g=>{let A=JSON.parse(g.data);if(A.topic===i){if(A.event==="phx_reply"&&!l){if(A.payload?.status!=="ok"){r.ws="rechazado";return}l=!0,r.ws="unido",u("presence",{type:"presence",event:"track",payload:{id:e}}),f("eco",{id:e,t:performance.now()})}else if(A.event==="presence_state"){for(let C of Object.keys(A.payload))_(C);r.presencia=!0}else if(A.event==="presence_diff"){for(let C of Object.keys(A.payload.joins??{}))_(C);for(let C of Object.keys(A.payload.leaves??{}))C in(A.payload.joins??{})||m(C)}else if(A.event==="broadcast"){let C=A.payload.payload;A.payload.event==="eco"?C.id===e&&(r.rtt=performance.now()-C.t):C.de===e||r.pares.has(C.de)&&(A.payload.event==="rtc"?C.a===e&&C.sdp&&v(C).catch(()=>{}):(A.payload.event==="m"&&!r.pares.get(C.de).directo||A.payload.event==="f")&&t(C.m,C.de))}}}}function _(g){if(g===e||r.pares.has(g)||r.pares.size>=Y_)return;let A={id:g,pc:null,canal:null,directo:!1,rtt:null};r.pares.set(g,A),n?.(g,!0),typeof RTCPeerConnection<"u"&&e<g&&M(A).catch(()=>{})}function m(g){let A=r.pares.get(g);A&&(A.pc?.close(),r.pares.delete(g),n?.(g,!1))}function h(g,A){g.canal=A,A.onopen=()=>{g.directo=!0},A.onclose=()=>{g.directo=!1},A.onmessage=C=>{let P=JSON.parse(C.data);P.t==="ping"?A.send(JSON.stringify({t:"pong",v:P.v})):P.t==="pong"?g.rtt=performance.now()-P.v:t(P,g.id)}}let b=g=>new Promise(A=>{if(g.iceGatheringState==="complete")return A();let C=setTimeout(A,2e3);g.addEventListener("icegatheringstatechange",()=>{g.iceGatheringState==="complete"&&(clearTimeout(C),A())})});async function M(g){g.pc?.close(),g.tOferta=performance.now(),g.intentos=(g.intentos??0)+1;let A=g.pc=new RTCPeerConnection({iceServers:Of});h(g,A.createDataChannel("m",{ordered:!1,maxRetransmits:0})),await A.setLocalDescription(await A.createOffer()),await b(A),f("rtc",{de:e,a:g.id,sdp:A.localDescription})}async function v({de:g,sdp:A}){let C=r.pares.get(g);if(A.type==="offer"){C.pc?.close();let P=C.pc=new RTCPeerConnection({iceServers:Of});P.ondatachannel=L=>h(C,L.channel),await P.setRemoteDescription(A),await P.setLocalDescription(await P.createAnswer()),await b(P),f("rtc",{de:e,a:g,sdp:P.localDescription})}else await C.pc?.setRemoteDescription(A)}function E(g){let A=JSON.stringify(g),C=!1;for(let L of r.pares.values())L.directo&&L.canal.readyState==="open"?L.canal.send(A):C=!0;let P=performance.now();C&&l&&P-d>500&&(d=P,f("m",{de:e,m:g}))}let S=g=>f("f",{de:e,m:g});p.push(setInterval(()=>u("heartbeat",{},"phoenix"),25e3)),p.push(setInterval(()=>{l&&f("eco",{id:e,t:performance.now()});for(let g of r.pares.values())g.directo&&g.canal.readyState==="open"?g.canal.send(JSON.stringify({t:"ping",v:performance.now()})):l&&e<g.id&&typeof RTCPeerConnection<"u"&&g.intentos<5&&performance.now()-g.tOferta>7e3&&M(g).catch(()=>{})},4e3)),x();function T(){c=!0,p.forEach(clearInterval);for(let g of[...r.pares.keys()])m(g);s?.close()}return{estado:r,enviar:E,fiable:S,cerrar:T}}var lu=(a,e)=>Math.max(1,Math.round(a*(e==="aprendiz"?.65:1))),cu=(a,e)=>Math.max(0,a-e),J_=(a,e)=>Math.min(100,a+e*.25),zf=a=>a>=90?3:a>=75?2:a>=60?1:0;function Gf(a){let e=100;for(let t of a)e=t.tipo==="acierto"?J_(e,t.puntos):cu(e,t.puntos);return e}var Et={encargado:{nombre:"Encargado de cuadrilla",corto:"Encargado",icono:"\u{1F4CB}",camisa:3108789,resumen:"Dirige el ATS, inspecciona el poste y comprueba la conexi\xF3n antes del ascenso."},sst:{nombre:"SST \xB7 prevencionista",corto:"SST",icono:"\u{1F9BA}",camisa:4170603,resumen:"Verifica el EPP y el \xE1rea de trabajo antes de que alguien suba."},liniero:{nombre:"Liniero",corto:"Liniero",icono:"\u{1F9D7}",camisa:16040475,resumen:"Lleva conos y cuerdas, arma el per\xEDmetro, sube y se asegura arriba."},auxiliar1:{nombre:"Auxiliar 1",corto:"Auxiliar 1",icono:"\u{1FA9C}",camisa:15304235,resumen:"Inspecciona y carga la escalera, la levanta a 75\xB0 y tensa la cuerda."},auxiliar2:{nombre:"Auxiliar 2",corto:"Auxiliar 2",icono:"\u{1FAA2}",camisa:13199902,resumen:"Carga la escalera, la presenta al poste y la amarra a media altura."}},Hf=8,ys=["Listo","\xA1Alto!","Espera un momento","Escalera amarrada","Subiendo","Necesito ayuda"],ua=[{id:"ats",rol:"encargado",lugar:"pickup",nombre:"ATS del d\xEDa",accion:"Reunir a la cuadrilla",fisico:[],antes:[],puntos:8,pregunta:"\xBFC\xF3mo empieza la jornada?",opciones:["Con el ATS: toda la cuadrilla analiza los riesgos de la tarea y se reparten las funciones","Cada quien toma su equipo y el riesgo se analiza si aparece un problema","El encargado llena el ATS solo, mientras los dem\xE1s adelantan el trabajo"],porque:"El ATS se hace antes de empezar, con todos los trabajadores y con el liderazgo del encargado.",ref:"GS-31 \xB7 \xA75.2.4 ATS antes de la ejecuci\xF3n diaria, con todos los trabajadores (p. 10)"},{id:"epp",rol:"sst",lugar:"pickup",nombre:"Revisar el EPP de la cuadrilla",accion:"Revisar el EPP",fisico:[],antes:["ats"],puntos:8,pregunta:"\xBFCu\xE1ndo se revisa el equipo de protecci\xF3n?",opciones:["Antes de usarlo, a la vista y con sus pruebas; lo que tenga defecto no se usa y se pide el cambio","Una vez por semestre, en la revisi\xF3n planificada con SST","Solo cuando es nuevo o cuando el da\xF1o se nota desde lejos"],porque:"Cada quien revisa su EPP antes de usarlo; el equipo de altura con defecto no se usa.",ref:"GS-101 \xB7 \xA75.3.8 a) EPP revisado antes de su uso y \xA75.5 f) equipo de altura con defecto no se usa (p\xE1gs. 17 y 19)"},{id:"inspeccion",rol:"auxiliar1",lugar:"pickup",nombre:"Inspeccionar la escalera",accion:"Inspeccionar la escalera",fisico:[],antes:["ats"],puntos:8,pregunta:"Antes de bajar la escalera del pick-up\u2026",opciones:["Reviso que no tenga piezas faltantes, da\xF1adas o flojas y que los pelda\xF1os est\xE9n limpios","Nada: con la inspecci\xF3n de cada a\xF1o es suficiente","La reviso arriba, cuando ya est\xE9 apoyada en el poste"],porque:"La escalera se inspecciona cada vez que se usa, antes de subir.",ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"cuerdas",rol:"liniero",lugar:"pickup",nombre:"Tomar conos y cuerdas",accion:"Tomar conos y cuerdas",fisico:[],antes:["ats"],puntos:6,pregunta:"\xBFQu\xE9 cuerda llevas para asegurar la escalera?",opciones:["Cuerda de seguridad est\xE1tica de 10 mm y 12 m, con capacidad de 24 kN","El mecate de nailon que haya en el pick-up","Cualquier cuerda, si se le hacen suficientes nudos"],porque:"El amarre se hace con cuerda de seguridad est\xE1tica de 10 mm, 12 m y 24 kN.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda de seguridad est\xE1tica de 10 mm, 12 m de largo y 24 kN (p. 26)"},{id:"tomar",rol:"auxiliar1",lugar:"pickup",nombre:"Bajar la escalera entre dos",accion:"Tomar la escalera",fisico:[],antes:["inspeccion"],puntos:8,pregunta:"La escalera es de 28 pies (8,53 m). \xBFC\xF3mo se traslada?",opciones:["Entre dos personas, deposit\xE1ndola, sin tirarla","La lleva uno solo al hombro, para ir m\xE1s r\xE1pido","Entre dos, y al llegar se deja caer junto al poste"],porque:"Desde 28 pies la escalera se traslada y se coloca entre dos, y se deposita: no se tira.",ref:"GS-101 \xB7 \xA75.6.4 a) y o) Escalera de 28 pies o m\xE1s: trasladada y colocada por 2 personas (p\xE1gs. 22\u201323)"},{id:"tomar2",rol:"auxiliar2",lugar:"pickup",nombre:"Tomar el otro extremo",accion:"Tomar el otro extremo de la escalera",fisico:[],antes:["inspeccion"],puntos:4,ref:"GS-101 \xB7 \xA75.6.4 b) y c) Inspeccionar la escalera cada vez que se use (p. 22)"},{id:"llegada",rol:"auxiliar1",auto:!0,lugar:"poste",nombre:"Llevar la escalera al poste",fisico:["tomar","tomar2"],antes:[],puntos:0},{id:"poste",rol:"encargado",lugar:"poste",nombre:"Inspeccionar el poste",accion:"Inspeccionar el poste",fisico:[],antes:["ats"],puntos:10,pregunta:"\xBFQu\xE9 revisas antes de autorizar el ascenso al poste?",opciones:["Que no se mueva, no est\xE9 inclinado ni da\xF1ado; y tambi\xE9n el poste anterior, el posterior y el tendido","Solo que este poste est\xE9 a plomo; los vecinos no importan","Nada: si ayer se subi\xF3, hoy tambi\xE9n se puede"],porque:"El encargado inspecciona el poste, el anterior, el posterior y el tendido; con fallas no se trabaja y se reporta.",ref:"GS-101 \xB7 \xA75.6.3 Inspecci\xF3n de poster\xEDa por el encargado de cuadrilla (p. 21)"},{id:"perimetro",rol:"liniero",lugar:"poste",nombre:"Armar el per\xEDmetro",accion:"Colocar conos y cinta",fisico:["llegada","cuerdas"],antes:[],puntos:8,pregunta:"\xBFC\xF3mo se cierra el \xE1rea de la escalera?",opciones:["Con cinta y conos, a 2 m como m\xEDnimo alrededor de la escalera","Con un cono al pie de la escalera","En la acera no hace falta: solo en la calzada"],porque:"El \xE1rea se cierra y se se\xF1aliza a un m\xEDnimo de 2 m de la escalera.",ref:"GS-101 \xB7 \xA75.6.4 g) Cerramiento y se\xF1alizaci\xF3n a un m\xEDnimo de 2 m de la escalera (p\xE1gs. 22\u201323)"},{id:"cuerda_extension",rol:"liniero",lugar:"poste",nombre:"Cuerda en la extensi\xF3n",accion:"Instalar la cuerda en la escalera",fisico:["llegada","cuerdas"],antes:["poste"],puntos:10,pregunta:"Antes de levantar la escalera, \xBFd\xF3nde va la cuerda de seguridad?",opciones:["En el \xFAltimo pelda\xF1o de la extensi\xF3n: rodea el poste por detr\xE1s y baja por el frente; ser\xE1 la l\xEDnea de vida vertical","Se amarra cuando el liniero ya est\xE9 arriba","En el primer pelda\xF1o, para que no estorbe"],porque:"La cuerda se instala previamente en el \xFAltimo pelda\xF1o de la extensi\xF3n y, al bajar por el frente, es la l\xEDnea de vida vertical.",ref:"GS-101 \xB7 \xA75.6.5 c) Cuerda en el \xFAltimo pelda\xF1o de la extensi\xF3n; sirve como l\xEDnea de vida vertical (p\xE1gs. 24\u201325)"},{id:"orientar",rol:"auxiliar2",lugar:"poste",nombre:"Presentar la escalera al poste",accion:"Presentar la escalera",fisico:["llegada"],antes:["cuerda_extension"],puntos:6,pregunta:"\xBFC\xF3mo queda la escalera frente al poste?",opciones:["La secci\xF3n fija hacia el poste; la que sube y baja, de frente al trabajador","La secci\xF3n que sube y baja, hacia el poste","De lado, apoyada en un solo larguero"],porque:"La parte fija queda hacia el poste y la que asciende y desciende, de frente al trabajador.",ref:"GS-101 \xB7 \xA75.6.5 a) Escalera de frente: la parte fija hacia el poste (p. 24)"},{id:"colocar",rol:"auxiliar1",lugar:"poste",nombre:"Levantar la escalera a 75\xB0",accion:"Levantar la escalera",fisico:["orientar"],antes:[],puntos:10,pregunta:"\xBFCon qu\xE9 \xE1ngulo se apoya la escalera?",opciones:["75\xB0: con la punta de los zapatos en la base y los brazos estirados, los dedos tocan los pelda\xF1os","60\xB0: m\xE1s acostada es m\xE1s estable","85\xB0: casi vertical, pegada al poste"],porque:"La escalera va a 75\xB0, o se comprueba con la prueba de los zapatos y los brazos estirados. Es lo mismo que separar la base un cuarto del largo de la escalera.",ref:"GS-101 \xB7 \xA75.6.5 a) \xC1ngulo de 75\xB0 o prueba de los brazos estirados (p. 24) \xB7 GS-98: base separada un cuarto de la longitud"},{id:"tensar",rol:"auxiliar1",lugar:"poste",nombre:"Tensar la cuerda que baja",accion:"Tensar la cuerda",fisico:["colocar","cuerda_extension"],antes:[],puntos:8,pregunta:"La cuerda baja por el frente y pasa por el primer pelda\xF1o. \xBFCon qu\xE9 nudo se bloquea al final?",opciones:["Con un ballestrinque (pata de chancho), despu\xE9s de tensarla con el ocho en l\xEDnea","Con un nudo corredizo, para soltarla r\xE1pido","Con varias vueltas al larguero, sin nudo"],porque:"Se tensa con el ocho en l\xEDnea o la gaza y se termina con una pata de chancho que bloquea la cuerda.",ref:"GS-101 \xB7 \xA75.6.5 c) Tensar con ocho en l\xEDnea o gaza y terminar con pata de chancho (p\xE1gs. 25\u201326)"},{id:"amarre_medio",rol:"auxiliar2",lugar:"poste",nombre:"Amarrar a media altura",accion:"Amarrar la escalera al poste",fisico:["colocar"],antes:[],puntos:10,pregunta:"\xBFEn cu\xE1ntos puntos debe quedar sujeta la escalera al poste?",opciones:["En dos como m\xEDnimo: arriba y en la parte media, con la cuerda de 12 m","En uno: con el amarre de arriba es suficiente","En ninguno, si un compa\xF1ero la sostiene"],porque:"El amarre en la parte media se hace siempre: la escalera queda sujetada en m\xEDnimo dos puntos.",ref:"GS-101 \xB7 \xA75.6.5 c) Amarre en la parte media: sujetada en m\xEDnimo dos puntos (p. 26)"},{id:"area",rol:"sst",lugar:"poste",nombre:"Verificar el \xE1rea",accion:"Verificar el \xE1rea de trabajo",fisico:["colocar"],antes:["perimetro","tensar","amarre_medio","epp"],puntos:8,pregunta:"\xBFQu\xE9 confirmas antes de dar el visto bueno al ascenso?",opciones:["Per\xEDmetro armado, escalera amarrada en dos puntos y sin vientos fuertes, lluvia torrencial ni rayer\xEDa","Que el liniero tenga prisa: entre m\xE1s r\xE1pido, menos exposici\xF3n","Solo el per\xEDmetro; el clima se valora si alguien se queja"],porque:"No se trabaja en la escalera con vientos fuertes, lluvia torrencial o rayer\xEDa, y el \xE1rea debe estar cerrada.",ref:"GS-101 \xB7 \xA75.6.4 g) y n) \xC1rea cerrada; no trabajar con vientos fuertes, lluvia torrencial o rayer\xEDa (p. 23) \xB7 GS-98: el prevencionista verifica las condiciones antes de la tarea en altura"},{id:"carrito",rol:"liniero",lugar:"poste",nombre:"Conectar el carrito",accion:"Conectar el carrito a la cuerda",fisico:["colocar","cuerda_extension"],antes:["tensar"],puntos:12,pregunta:"El carrito (freno de cuerda) corre por la l\xEDnea de vida vertical. \xBFA qu\xE9 parte del arn\xE9s se conecta?",opciones:["A la argolla frontal, la del pecho","Al portaganchos del arn\xE9s","A una argolla lateral de la cadera"],porque:"La detenci\xF3n de ca\xEDdas solo se conecta a la argolla dorsal o a la pectoral. El portaganchos y las argollas laterales no detienen una ca\xEDda.",ref:"GS-98 \xB7 Sistemas personales de detenci\xF3n de ca\xEDdas: solo argollas de detenci\xF3n dorsal o pectoral \xB7 GS-101 \xA75.6.1 f) Freno para cuerda (p. 20)"},{id:"conexion",rol:"encargado",lugar:"poste",nombre:"Comprobar la conexi\xF3n",accion:"Comprobar la conexi\xF3n del liniero",fisico:["carrito"],antes:["area"],puntos:12,pregunta:"El liniero ya se conect\xF3. \xBFQu\xE9 haces antes de que suba?",opciones:["Compruebo con mis manos su conexi\xF3n y su arn\xE9s: un compa\xF1ero siempre la revisa","Le pregunto si est\xE1 listo y conf\xEDo en su palabra","Lo dejo subir y lo reviso desde abajo, a la vista"],porque:"Antes de subir, un compa\xF1ero comprueba que la conexi\xF3n est\xE9 correcta (conexi\xF3n falsa).",ref:"GS-101 \xB7 \xA75.5 h) Un compa\xF1ero comprueba la conexi\xF3n antes de subir (p. 19)"},{id:"subir",rol:"liniero",lugar:"poste",nombre:"Subir la escalera",accion:"Subir",fisico:["colocar"],antes:["perimetro","amarre_medio","carrito","conexion"],puntos:12,pregunta:"\xBFC\xF3mo se sube?",opciones:["De frente, con las manos libres y tres puntos de apoyo; la herramienta sube por cuerda y no uso los tres pelda\xF1os de arriba","Con la herramienta en una mano y agarrado con la otra","Hasta el \xFAltimo pelda\xF1o, para alcanzar mejor"],porque:"Se sube de frente con tres puntos de apoyo, la herramienta sube por cuerda y los tres pelda\xF1os superiores est\xE1n prohibidos.",ref:"GS-101 \xB7 \xA75.6.4 j) y k) Tres puntos de apoyo; Tabla 2: prohibidos los tres pelda\xF1os superiores (p\xE1gs. 22\u201323)"},{id:"faja",rol:"liniero",lugar:"arriba",nombre:"Faja de posicionamiento",accion:"Colocar la faja de posicionamiento",fisico:["subir"],antes:[],puntos:12,pregunta:"\xBFC\xF3mo se coloca la faja de posicionamiento (estrobo)?",opciones:["De una argolla lateral, en M por un pelda\xF1o y al menos 3 cables de fibra, hasta la otra argolla lateral","Las dos puntas al portaganchos del arn\xE9s","Una punta a una argolla lateral y la otra suelta, para moverme mejor"],porque:"La faja va de argolla lateral a argolla lateral, abrazando en M un pelda\xF1o y al menos 3 cables de fibra. Sola no detiene una ca\xEDda: por eso sigue la l\xEDnea de vida.",ref:"GS-101 \xB7 \xA75.6.1 d) Faja de posicionamiento (estrobo) \xB7 GS-98: el posicionamiento no protege contra ca\xEDdas por s\xED solo \xB7 forma en M: pr\xE1ctica de la cuadrilla, en revisi\xF3n por Salud Ocupacional"},{id:"linea_vida",rol:"liniero",lugar:"arriba",nombre:"L\xEDnea de vida",accion:"Anclar la l\xEDnea de vida",fisico:["faja"],antes:[],puntos:12,pregunta:"\xBFD\xF3nde va la l\xEDnea de vida de tu argolla dorsal?",opciones:["A un punto de anclaje seguro, de preferencia arriba de la cabeza","Al mismo pelda\xF1o donde tengo la faja","A los cables de fibra"],porque:"La l\xEDnea de vida va del anillo dorsal a un punto de anclaje, de preferencia arriba de la cabeza. Un pelda\xF1o o un cable no son puntos de anclaje.",ref:"GS-101 \xB7 \xA75.5 h) e i) L\xEDnea de vida en el anillo dorsal, a un anclaje arriba de la cabeza (p. 19) \xB7 GS-98: el anclaje soporta 2 268 kg por persona"}];var Ta=Object.fromEntries(ua.map(a=>[a.id,a])),du=()=>({chofer:null,pasajeros:[],x:null,z:null,r:null}),uu=()=>({fase:"sala",modo:"aprendiz",jugadores:{},hechos:{},fallos:{},eventos:[],pickup:du(),n:0}),On=(a,e)=>Object.keys(a.jugadores).find(t=>a.jugadores[t].rol===e)??null,Z_=(a,e)=>String(a??"").replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,e);function hu(a,e){switch(a.n++,e?.t){case"entra":a.jugadores[e.id]={nombre:e.nombre,rol:a.jugadores[e.id]?.rol??null};break;case"sale":delete a.jugadores[e.id],a.pickup.chofer===e.id&&(a.pickup.chofer=null),a.pickup.pasajeros=a.pickup.pasajeros.filter(t=>t!==e.id);break;case"rol":a.jugadores[e.id]&&(a.jugadores[e.id].rol=e.rol);break;case"modo":a.modo=e.modo;break;case"empezar":a.fase="trabajo",a.pickup=du();break;case"reiniciar":Object.assign(a,{fase:"sala",hechos:{},fallos:{},eventos:[],pickup:du()});break;case"conduce":a.pickup.chofer=e.id;break;case"aparca":a.pickup={chofer:null,pasajeros:[],x:e.x,z:e.z,r:e.r};break;case"sube":a.pickup.pasajeros.push(e.id);break;case"baja":a.pickup.pasajeros=a.pickup.pasajeros.filter(t=>t!==e.id);break;case"hecho":if(!Ta[e.paso])break;a.hechos[e.paso]=e.rol,ua.every(t=>a.hechos[t.id])&&(a.fase="fin");break;case"falta":if(!Ta[e.paso])break;a.fallos[e.paso]=(a.fallos[e.paso]??0)+1,a.eventos.push({tipo:"falta",puntos:e.puntos,rol:e.rol,paso:e.paso,ref:e.ref,texto:e.texto});break}return a}function kf(a,e,t,n=!1){switch(e?.t){case"entra":return[{t:"entra",id:t,nombre:Z_(e.nombre,16)||"Jugador"}];case"sale":return n&&a.jugadores[e.id]?[{t:"sale",id:e.id}]:[];case"rol":return!a.jugadores[t]||a.fase==="fin"||e.rol!==null&&!Et[e.rol]?[]:e.rol&&On(a,e.rol)&&On(a,e.rol)!==t?[]:[{t:"rol",id:t,rol:e.rol}];case"modo":return a.fase==="sala"&&a.jugadores[t]&&["aprendiz","tecnico"].includes(e.modo)?[{t:"modo",modo:e.modo}]:[];case"empezar":return a.fase==="sala"&&(a.jugadores[t]?.rol||n&&e.demo)?[{t:"empezar"}]:[];case"reiniciar":return a.fase==="fin"&&(a.jugadores[t]||n)||n&&e.dev&&a.fase==="trabajo"?[{t:"reiniciar"}]:[];case"conduce":return a.jugadores[t]?.rol&&!a.pickup.chofer&&(a.fase==="fin"||a.fase==="trabajo"&&a.hechos.tomar&&a.hechos.tomar2)?[{t:"conduce",id:t}]:[];case"sube":return a.jugadores[t]?.rol&&a.pickup.chofer&&a.pickup.chofer!==t&&!a.pickup.pasajeros.includes(t)&&a.pickup.pasajeros.length<3?[{t:"sube",id:t}]:[];case"baja":return a.pickup.pasajeros.includes(t)?[{t:"baja",id:t}]:[];case"aparca":return a.pickup.chofer===t&&[e.x,e.z,e.r].every(Number.isFinite)&&Math.abs(e.x)<5e3&&Math.abs(e.z)<5e3?[{t:"aparca",x:e.x,z:e.z,r:e.r}]:[];case"auto":{let i=Ta[e.paso];return n&&i?.auto&&a.fase==="trabajo"&&!a.hechos[i.id]&&i.fisico.every(r=>a.hechos[r])?[{t:"hecho",paso:i.id,rol:i.rol,limpio:!0}]:[]}case"intento":{let i=Ta[e.paso];if(!i||i.auto||a.fase!=="trabajo"||a.hechos[i.id])return[];let r=n&&e.dev,s=n&&e.bot,o=r?i.rol:s?e.rol:a.jugadores[t]?.rol;if(o!==i.rol||s&&!r&&On(a,o))return[];if(!i.fisico.every(c=>a.hechos[c]))return[];let l=i.antes.find(c=>!a.hechos[c]);if(l)return a.modo==="aprendiz"?[]:[{t:"falta",paso:i.id,rol:o,puntos:lu(Hf,a.modo),ref:Ta[l].ref??i.ref,texto:`Faltaba \xAB${Ta[l].nombre}\xBB antes de \xAB${i.nombre}\xBB.`}];if(i.opciones){if(!Number.isInteger(e.opcion)||e.opcion<0||e.opcion>=i.opciones.length)return[];if(e.opcion!==0)return[{t:"falta",paso:i.id,rol:o,puntos:lu(i.puntos,a.modo),ref:i.ref,texto:i.porque}]}return[{t:"hecho",paso:i.id,rol:o,limpio:!a.fallos[i.id]}]}}return[]}function sr(a,e){return ua.filter(t=>t.rol===e&&!t.auto&&!a.hechos[t.id]&&t.fisico.every(n=>a.hechos[n])).map(t=>({paso:t,bloqueo:Ta[t.antes.find(n=>!a.hechos[n])]??null}))}var pu=a=>ua.find(e=>!a.hechos[e.id]&&e.fisico.every(t=>a.hechos[t])&&e.antes.every(t=>a.hechos[t]))??null,or=a=>Math.round(Gf(a.eventos)),fu=a=>zf(or(a));function Vf(a){let e=Object.fromEntries(Object.keys(Et).map(t=>[t,100]));for(let t of a.eventos)t.tipo==="falta"&&t.rol in e&&(e[t.rol]=cu(e[t.rol],t.puntos));return e}function oc(a){let e=[...a.id].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,7),t=a.opciones.map((n,i)=>i);for(let n=t.length-1;n>0;n--){e=e*1664525+1013904223>>>0;let i=e%(n+1);[t[n],t[i]]=[t[i],t[n]]}return t}var mu=(a,e)=>{for(let t=0;t<e.length;t++)a=a*31+e.charCodeAt(t)|0;return a};function jf({id:a,red:e,alEvento:t}){let n=uu(),i=[],r=0,s=[],o=!1,l=-1e9,c=()=>e?[a,...e.estado.pares.keys()].sort()[0]:a,d=()=>c()===a,p=()=>!e||o||!!e.estado.presencia;function u(v){i.push(v),r=mu(r,JSON.stringify(v)),hu(n,v),t?.(v,n)}function f(v,E,S){for(let T of kf(n,v,E,S)){let g=r;u(T),e?.fiable({t:"ev",n:n.n,h:g,ev:T})}}function x(v){p()?d()?f(v,a,!0):e.fiable({t:"pro",pro:v}):s.push(v)}function _(){if(s.length&&p()){let v=s;s=[],v.forEach(x)}}function m(){let v=Date.now();e&&v-l>1500&&(l=v,e.fiable({t:"pido"}))}let h=0;function b(v,E,S){if(S!==c()||v===n.n&&E===r){h=0;return}let T=Date.now();h?T-h>1e3&&m():h=T}function M(v,E){if(v?.t==="pro")d()&&f(v.pro,E,!1);else if(v?.t==="ev"){if(E!==c())return;v.n===n.n+1&&v.h===r?u(v.ev):m()}else if(v?.t==="pido")i.length&&e.fiable({t:"todo",evs:i});else if(v?.t==="todo"){if(!Array.isArray(v.evs)||!v.evs.length||v.evs.length>5e3)return;let S=v.evs.reduce((T,g)=>mu(T,JSON.stringify(g)),0);if(!(E===c()?S!==r:!i.length))return;n=uu(),i=[],r=0;for(let T of v.evs)i.push(T),r=mu(r,JSON.stringify(T)),hu(n,T);t?.(null,n)}}return{get E(){return n},get huella(){return r},anfitrion:d,idAnfitrion:c,proponer:x,recibir:M,pedir:m,cada:_,latido:b,jugarSolo:()=>{o=!0}}}var $f=4.6,_u=7.4,Ss=_u*Math.sin(75*Math.PI/180),gu=_u*Math.cos(75*Math.PI/180),xu=4.8,K_=7,bu=4.4,vu=40,wn={cuerda:15591122,cinta:15320363,faja:15320363,vida:14173227};function qf(a){let e=Mn();for(let n of[-.21,.21])e.caja(n,-.04,a/2,.05,.08,a,15304235);for(let n=.3;n<a-.1;n+=.3)e.caja(0,-.02,n,.42,.035,.035,12172996);let t=new Ye(e.geometria(),new ct({vertexColors:!0,roughness:.7}));return t.castShadow=!1,t}function Wf({via:a,barrio:e}){let t=e.trabajo,n={},i=(V,de,pe=0)=>(a.en(V,de,n),new B(n.x,pe,n.z)),r=i(t.d-gu,t.a,.15),s=i(t.d-.14,t.a,.15+Ss),o=new B(s.x-r.x,0,s.z-r.z).normalize(),l=new B(o.z,0,-o.x),c=new B().subVectors(r,s).setY(0).normalize().multiplyScalar(.97).add(new B(0,.26,0)),d=Math.atan2(o.x,o.z),p=(V,de=0,pe=new B)=>pe.lerpVectors(r,s,V/Ss).addScaledVector(c,de),u={pickup:i(e.dPick,-4.5),poste:i(t.d-2.6,t.a+.2)},f=i(t.d-2.2,t.a+.75),x={pickup:{encargado:[0,-4.4],sst:[1.3,-4.4],liniero:[-1.3,-4.4],auxiliar1:[-2.6,-4.4],auxiliar2:[2.6,-4.4]},poste:{encargado:[-3.6,1.3],sst:[-4.4,-1.2],liniero:[-2.55,0],auxiliar1:[-2.2,1],auxiliar2:[-.6,-1.1]}},_=(V,de)=>de==="pickup"?i(e.dPick+x.pickup[V][0],x.pickup[V][1]):i(t.d+x.poste[V][0],t.a+x.poste[V][1]),m=new ht,h=qf($f),b=qf(_u),M=new B,v=new B,E=i(t.d-2.2,t.a+.75,.2),S=i(t.d-2.2-$f,t.a+.75,.2);b.position.copy(r),b.lookAt(s),b.visible=!1;let T=new Pt(new Gr(.17,.55,10).translate(0,.275,0),new ct({color:15227148,roughness:.6}),4),g=[[-gu-2,-2],[2,-2],[2,2],[-gu-2,2]].map(([V,de])=>i(t.d+V,t.a+de,.15)),A=new gt;g.forEach((V,de)=>{A.position.copy(V),A.updateMatrix(),T.setMatrixAt(de,A.matrix)}),T.visible=!1;let C=new pt,P=new Float32Array(vu*6),L=new Float32Array(vu*6);C.setAttribute("position",new mt(P,3)),C.setAttribute("color",new mt(L,3));let I=new jn(C,new Pn({vertexColors:!0}));I.frustumCulled=!1;let R=new Ye(new zt(.07,.12,.07),new ct({color:14173227,roughness:.4,metalness:.5})),U=new Ye(new Vr(1.25,1.45,40).rotateX(-Math.PI/2),new vn({color:16766503,transparent:!0,opacity:.8,depthWrite:!1}));U.visible=!1,m.add(h,b,T,I,R,U);let F=0,H=new He;function j(V,de,pe){if(F>=vu)return;H.set(pe);let fe=F++*6;P[fe]=V.x,P[fe+1]=V.y,P[fe+2]=V.z,P[fe+3]=de.x,P[fe+4]=de.y,P[fe+5]=de.z;for(let O=0;O<6;O+=3)L[fe+O]=H.r,L[fe+O+1]=H.g,L[fe+O+2]=H.b}let Y=0,W=Array.from({length:8},()=>new B),ae={x:0,y:0,z:0,rumbo:d,pose:"e",fase:0},ye=V=>!!(V.hechos.tomar&&V.hechos.tomar2&&!V.hechos.llegada);function $(){return p(Y*xu,.13,W[7]),ae.x=W[7].x,ae.y=W[7].y,ae.z=W[7].z,ae.pose=Y<1?"e":"t",ae.fase=Y*26,ae}function ce(V){let de=V("auxiliar1"),pe=V("auxiliar2");return!!de&&!!pe&&Math.hypot(de.x-u.poste.x,de.z-u.poste.z)<3.5&&Math.hypot(de.x-pe.x,de.z-pe.z)<bu+1.5}function be(V,de,pe,fe){if(!ye(V)||de!=="auxiliar2")return;let O=fe("auxiliar1");if(!O)return;let oe=pe.x-O.x,me=pe.z-O.z,ve=Math.hypot(oe,me),_e=bu+.5;ve>_e&&(pe.x=O.x+oe/ve*_e,pe.z=O.z+me/ve*_e)}function Se(V,de,pe,fe,O){let oe=pe.hechos,me=!!oe.subir&&pe.fase==="trabajo";if(Y=me?Math.min(1,Y+V/K_):0,b.visible=!!oe.colocar,h.visible=!oe.colocar,!oe.colocar){let _e=fe("auxiliar1"),Re=fe("auxiliar2");ye(pe)&&_e&&Re?(h.position.set(_e.x,(_e.y??.15)+1.47,_e.z),h.lookAt(Re.x,(Re.y??.15)+1.47,Re.z)):oe.llegada?(h.position.copy(E),h.lookAt(S)):(h.position.copy(O.local(.4,2.16,-2.9,M)),h.lookAt(O.local(.4,2.16,1.7,v)))}if(T.visible=!!oe.perimetro,F=0,oe.perimetro)for(let _e=0;_e<4;_e++)j(W[0].copy(g[_e]).setY(.62),W[1].copy(g[(_e+1)%4]).setY(.62),wn.cinta);if(oe.colocar&&oe.cuerda_extension&&(p(Ss-.3,0,W[0]),W[1].set(t.x,W[0].y-.1,t.z).addScaledVector(o,.2),j(W[0],W[1],wn.cuerda),j(W[1],p(Ss-.6,.1,W[2]),wn.cuerda),j(W[2],p(1.7,.1,W[3]),wn.cuerda),oe.tensar&&j(W[3],p(.35,.02,W[4]),wn.cuerda)),oe.amarre_medio){let Re=[[.22,.22],[.22,-.22],[-.22,-.22],[-.22,.22]].map(([he,ee],Q)=>W[Q].set(t.x+he,3.65,t.z+ee));for(let he=0;he<4;he++)j(Re[he],Re[(he+1)%4],wn.cuerda);for(let he of[-1,1])j(p(3.4,0,W[4]).addScaledVector(l,he*.21),W[5].set(t.x,3.65,t.z).addScaledVector(l,he*.22),wn.cuerda)}let ve=fe("liniero");if(R.visible=!!(oe.carrito&&ve),R.visible){let _e=W[5].set(ve.x,(ve.y??.15)+1.28,ve.z);p(Math.min(Ss-.8,Math.max(1.3,_e.y-.15)),.1,R.position),_e.distanceTo(R.position)<1.6&&j(R.position,_e.addScaledVector(o,.1),wn.cuerda)}if(me&&ve&&Y>=1){let _e=W[6].set(ve.x,ve.y,ve.z);if(oe.faja){let Re=W[0].copy(_e).addScaledVector(l,.2).setY(_e.y+1),he=W[1].copy(_e).addScaledVector(l,-.2).setY(_e.y+1),ee=p(xu+1.25,0,W[2]).addScaledVector(l,.15),Q=p(xu+1.25,0,W[3]).addScaledVector(l,-.15),se=W[4].set(t.x,6.3,t.z).addScaledVector(o,-.5);j(Re,ee,wn.faja),j(ee,se,wn.faja),j(se,Q,wn.faja),j(Q,he,wn.faja)}oe.linea_vida&&j(W[0].copy(_e).addScaledVector(o,-.14).setY(_e.y+1.42),W[1].set(t.x,Math.min(9.2,_e.y+2.5),t.z),wn.vida)}C.setDrawRange(0,F*2),C.attributes.position.needsUpdate=C.attributes.color.needsUpdate=!0,U.material.opacity=.55+.3*Math.sin(de*4)}function q(V){U.visible=!!u[V],U.visible&&U.position.copy(u[V]).setY(.2)}return{grupo:m,zonas:u,puesto:_,metaEscalera:f,cargando:ye,llego:ce,restringir:be,cada:Se,marcar:q,puestoLiniero:$,rumbo:d,L_CARGA:bu,get subida(){return Y},cima:s}}var Q_=1.7,ey=1.25,ty=1.6,Xf=(a,e)=>a+Math.atan2(Math.sin(e-a),Math.cos(e-a));function Yf({sesion:a,obra:e,resolver:t,altura:n}){let i=new Map;function r(s,o,l){for(let c of Object.keys(Et)){let d=!On(o,c);if(d&&!i.has(c)){let p=e.puesto(c,"pickup");i.set(c,{rol:c,x:p.x,z:p.z,y:.15,rumbo:0,pose:"i",fase:0,espera:0})}else d||i.delete(c)}if(a.anfitrion())for(let c of i.values()){let d=null,p=null,u=Q_;if(c.pose="i",o.fase!=="trabajo"){if(d=o.fase==="sala"?e.puesto(c.rol,"pickup"):null,c.y>n(c.x,c.z)+.5){let x=e.zonas.poste;c.x=x.x,c.z=x.z,c.y=n(x.x,x.z)}}else if(c.rol==="liniero"&&o.hechos.subir){let x=e.puestoLiniero();Object.assign(c,{x:x.x,z:x.z,y:x.y,rumbo:e.rumbo,pose:x.pose,fase:x.fase}),p=e.subida>=1?sr(o,c.rol).find(_=>!_.bloqueo)?.paso:null}else if(e.cargando(o)&&/^auxiliar/.test(c.rol))if(c.pose="c",c.rol==="auxiliar1")d=e.metaEscalera,u=ey;else{let x=l("auxiliar1");if(x){let _=c.x-x.x,m=c.z-x.z,h=Math.hypot(_,m)||1,b=c.x,M=c.z;c.x=x.x+_/h*e.L_CARGA,c.z=x.z+m/h*e.L_CARGA,c.rumbo=Xf(c.rumbo,Math.atan2(x.x-c.x,x.z-c.z)),c.fase+=Math.hypot(c.x-b,c.z-M)*4.19}}else p=sr(o,c.rol).find(x=>!x.bloqueo)?.paso??null,d=e.puesto(c.rol,p?p.lugar:o.hechos.tomar&&o.hechos.tomar2?"poste":"pickup");let f=!d;if(d){let x=d.x-c.x,_=d.z-c.z,m=Math.hypot(x,_);if(m>.25){let h=Math.min(m,u*s);if(c.x+=x/m*h,c.z+=_/m*h,t(c,.3),c.rumbo=Xf(c.rumbo,Math.atan2(x,_))*.25+c.rumbo*.75,c.fase+=h*4.19,c.rol==="auxiliar1"&&e.cargando(o)){let b=l("auxiliar2");b&&Math.hypot(b.x-c.x,b.z-c.z)>e.L_CARGA+.6&&(c.x-=x/m*h,c.z-=_/m*h)}}else f=!0;c.y=n(c.x,c.z)}p&&f?(c.espera+=s,c.espera>ty&&(c.espera=0,a.proponer({t:"intento",paso:p.id,opcion:0,bot:!0,rol:c.rol}))):c.espera=0}}return{B:i,cada:r}}var Ms={"teclado y rat\xF3n":{accion:"E",mundo:"WASD moverse \xB7 rat\xF3n mirar \xB7 E acci\xF3n \xB7 V vista \xB7 R radio \xB7 M mapa \xB7 P pausa \xB7 May\xFAs correr",panel:"Clic o 1\u20133 para elegir \xB7 \u2191 \u2193 mover \xB7 Enter aceptar \xB7 Esc volver",todo:"Teclado y rat\xF3n: WASD moverse, rat\xF3n mirar (clic en el juego para capturarlo), E acci\xF3n, V cambiar vista, R radio, M mapa, P o Esc pausa, May\xFAs correr, H bocina al volante."},t\u00E1ctil:{accion:"\u270B",mundo:"Izquierda: caminar \xB7 derecha: mirar \xB7 \u270B acci\xF3n \xB7 \u{1F441} vista \xB7 \u{1F4FB} radio \xB7 \u{1F5FA} mapa \xB7 \u23F8 pausa",panel:"Toca una opci\xF3n para elegirla",todo:"Pantalla t\xE1ctil: arrastra a la izquierda para caminar (al fondo, corres) y a la derecha para mirar. Botones: \u270B acci\xF3n, \u{1F441} vista, \u{1F4FB} radio, \u{1F5FA} mapa, \u23F8 pausa."},control:{accion:"\u24B6",mundo:"\u24C1 moverse \xB7 \u24C7 mirar \xB7 \u24B6 acci\xF3n \xB7 \u24CE vista \xB7 \u24CD radio \xB7 \u29C9 mapa \xB7 \u2630 pausa \xB7 LT correr",panel:"\u24B6 elegir \xB7 \u271A o \u24C1 mover \xB7 \u24B7 volver",todo:"Control: palanca izquierda moverse, derecha mirar, \u24B6 acci\xF3n, \u24CE vista, \u24CD radio, \u29C9 (Vista) mapa, \u2630 (Men\xFA) pausa, LT correr, LB bocina al volante. En los men\xFAs: cruceta o palanca para mover, \u24B6 elegir, \u24B7 volver."}},ny=`
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
`,Jf=["1","2","3","4","5","6"];function Zf(a,e){let t=document.createElement("style");t.textContent=ny,document.head.append(t);let n=($,ce="div")=>{let be=document.createElement(ce);return be.className=$,a.append(be),be},i=n("mu-hud"),r=n("mu-lista","ol"),s=n("mu-aviso"),o=n("mu-avisos"),l=n("mu-fondo"),c=document.createElement("div");c.className="mu-panel",c.setAttribute("role","dialog"),c.setAttribute("aria-modal","true"),l.append(c),l.hidden=!0,i.hidden=r.hidden=s.hidden=!0;let d=null,p=!1,u=null,f=null,x=[],_="",m=0,h="teclado y rat\xF3n",b=n("mu-ayudas");try{_=localStorage["mundo:nombre"]??""}catch{}let M=()=>[...c.querySelectorAll("button:not([disabled]), input")];function v($,ce,{cancela:be=!1}={}){let Se=d===$?m:-1,q=d!==$;d=$,p=be,c.innerHTML=ce+'<div class="mu-pie"></div>',l.hidden=!1,document.exitPointerLock?.();let V=M(),de=V[Se]?Se:V.findIndex(pe=>pe.classList.contains("elegido"));S(de>=0?de:V.findIndex(pe=>pe.tagName==="BUTTON")),g(),q&&Ft.clic()}function E(){d=null,u=null,l.hidden=!0,c.innerHTML=""}function S($){let ce=M();ce.length&&(m=($+ce.length)%ce.length,ce.forEach((be,Se)=>be.classList.toggle("foco",Se===m)),ce[m].focus({preventScroll:!0}),ce[m].scrollIntoView?.({block:"nearest"}),ce[m].tagName==="INPUT"&&ce[m].setSelectionRange(ce[m].value.length,ce[m].value.length))}function T($){let ce=M().indexOf(document.activeElement);S((ce>=0?ce:m)+$),Ft.hover()}let g=()=>{let $=c.querySelector(".mu-pie");$&&($.textContent=Ms[h].panel)};c.addEventListener("click",$=>{let ce=$.target.closest("button");if(!ce||ce.disabled)return;let{a:be,v:Se}=ce.dataset;if(be==="rol")A(),e.rol(Se);else if(be==="modo")e.modo(Se);else if(be==="empezar")A(),e.empezar();else if(be==="unirse"){let q=c.querySelector("[name=codigo]").value.trim();q&&e.unirse(q)}else if(be==="copiar")navigator.clipboard?.writeText(Se).then(()=>{ce.textContent="Enlace copiado \u2713"},()=>{ce.textContent=Se});else if(be==="opcion")f=Number(Se),e.intento(u.id,f);else if(be==="frase")e.radio(Number(Se)),E();else if(be==="reiniciar")e.reiniciar();else if(be==="cerrar")E();else if(be==="ajuste"){let[q,V]=Se.split(":");e.ajuste(q,Number(V))}else be==="dev"?e.dev(Se,ce):be==="ir"?(e.ir(Se),E()):be==="reporte"&&e.reporte()});function A(){let $=c.querySelector("[name=nombre]");if($){_=$.value.trim().slice(0,16);try{localStorage["mundo:nombre"]=_}catch{}e.nombre(_)}}addEventListener("keydown",$=>{d&&(($.code==="Escape"||$.code==="KeyP"&&d==="pausa")&&p?E():$.code==="ArrowDown"?($.preventDefault(),T(1)):$.code==="ArrowUp"?($.preventDefault(),T(-1)):$.target.tagName!=="INPUT"&&/^(Digit|Numpad)[1-6]$/.test($.code)&&c.querySelectorAll("[data-a=opcion],[data-a=frase]")[Number($.code.slice(-1))-1]?.click())});function C($,ce,{codigo:be,enlace:Se,conectado:q,pares:V}){let de=$.jugadores[ce]?.rol,pe=$.fase==="trabajo",fe=c.querySelector("[name=nombre]")?.value??_,O=Object.entries(Et).map(([oe,me])=>{let ve=On($,oe),_e=ve&&ve!==ce;return`<button class="mu-op${ve===ce?" elegido":""}" data-a="rol" data-v="${oe}"${_e||!q?" disabled":""}>${me.icono} <b>${dt(me.nombre)}</b> \xB7 ${ve===ce?"T\xFA":_e?dt($.jugadores[ve].nombre):"compa\xF1ero autom\xE1tico"}<small>${dt(me.resumen)}</small></button>`}).join("");v("sala",`
      <h1>Cuadrilla Segura \xB7 Mundo</h1>
      <p><small>Orden de trabajo: asegurar la escalera al poste y subir \xB7 Calle 50 Luisa, Sabana Norte. Contenido en revisi\xF3n por Salud Ocupacional.</small></p>
      <div class="mu-fila"><label>Tu nombre<input name="nombre" maxlength="16" autocomplete="off" value="${dt(fe)}" placeholder="Como te ver\xE1n los dem\xE1s"></label>
        <div>Sala <b>${dt(be)}</b> \xB7 ${q?`${V+1} en l\xEDnea`:"conectando\u2026"}<br><button class="mu-op" data-a="copiar" data-v="${dt(Se)}" style="margin:4px 0 0;min-height:36px;padding:6px 10px">Copiar enlace para invitar</button></div></div>
      <h2>${pe?"Trabajo en curso: elige un rol libre":"Elige tu rol"}</h2>${O}
      ${pe?"":`<h2>Dificultad</h2><div class="mu-fila">
        <button class="mu-op${$.modo==="aprendiz"?" elegido":""}" data-a="modo" data-v="aprendiz"${de?"":" disabled"}><b>Aprendiz</b><small>Con pistas; el juego no deja saltarse el orden.</small></button>
        <button class="mu-op${$.modo==="tecnico"?" elegido":""}" data-a="modo" data-v="tecnico"${de?"":" disabled"}><b>T\xE9cnico</b><small>Sin pistas; saltarse un paso es una falta.</small></button></div>
      <button class="mu-op mu-pri" data-a="empezar"${de?"":" disabled"}>${de?"Empezar el trabajo":"Elige un rol para empezar"}</button>`}
      <h2>Unirse a otra sala</h2><div class="mu-fila"><input name="codigo" maxlength="12" autocomplete="off" placeholder="C\xF3digo de sala"><button class="mu-op" data-a="unirse" style="margin:0">Unirse</button></div>`)}function P($,ce,be=[]){u?.id!==$.id&&(f=null),u=$,x=be;let Se=oc($).map((q,V)=>`<button class="mu-op${be.includes(q)?" mal":""}" data-a="opcion" data-v="${q}"${be.includes(q)?" disabled":""}>${Jf[V]}. ${dt($.opciones[q])}</button>`).join("");v("decision",`<h2>${dt(Et[$.rol].nombre)} \xB7 ${dt($.nombre)}</h2><h1>${dt($.pregunta)}</h1>${Se}
      ${be.length?`<div class="mu-nota"><b>No es as\xED.</b> ${dt($.porque)}<br><small>${dt($.ref)}</small></div>`:ce.modo==="aprendiz"?`<div class="mu-pista"><small>Pista: ${dt($.ref)}</small></div>`:""}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Volver</button>`,{cancela:!0})}function L($,ce){d!=="decision"||u?.id!==$.paso||(f!==null&&!x.includes(f)&&x.push(f),P(u,ce,x))}function I(){v("radio",`<h2>Radio</h2>${ys.map(($,ce)=>`<button class="mu-op" data-a="frase" data-v="${ce}">${Jf[ce]}. ${dt($)}</button>`).join("")}
      <button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>`,{cancela:!0})}function R($){v("mapa",'<h2>Costa Rica \xB7 escala 1:60 \xB7 \u25B2 t\xFA \xB7 \u25CB pick-up y cuadrilla</h2><canvas></canvas><button class="mu-op" data-a="cerrar" style="text-align:center">Cerrar</button>',{cancela:!0}),$(c.querySelector("canvas"))}function U($){let ce=or($),be=Vf($),Se=Object.entries(Et).map(([q,V])=>{let de=On($,q),pe=$.eventos.filter(fe=>fe.tipo==="falta"&&fe.rol===q);return`<tr><td>${V.icono} <b>${dt(V.corto)}</b><br><small>${de?dt($.jugadores[de].nombre):"autom\xE1tico"}</small></td><td><b>${be[q]}</b></td>
        <td>${pe.length?pe.map(fe=>`${dt(fe.texto)}<br><small>${dt(fe.ref)}</small>`).join("<br>"):"<small>Sin faltas</small>"}</td></tr>`}).join("");v("fin",`<h1>Trabajo terminado ${"\u2605".repeat(fu($))}${"\u2606".repeat(3-fu($))}</h1>
      <p>Seguridad de la cuadrilla: <b>${ce} de 100</b> \xB7 modo ${$.modo==="tecnico"?"T\xE9cnico":"Aprendiz"}. El liniero qued\xF3 asegurado con el carrito, la faja de posicionamiento y la l\xEDnea de vida.</p>
      <table class="mu-tabla">${Se}</table>
      <p><small>Contenido en revisi\xF3n por Salud Ocupacional. La forma de la faja en M es pr\xE1ctica de la cuadrilla.</small></p>
      <button class="mu-op mu-pri" data-a="reiniciar">Volver a la sala</button>
      <button class="mu-op" data-a="cerrar" style="text-align:center">Seguir en el mundo</button>`,{cancela:!0})}function F($,ce,be,Se,q,V=""){i.hidden=r.hidden=!1,i.innerHTML=`<span class="mu-seg">Seguridad ${or($)}</span><b>${ce?`${Et[ce].icono} ${dt(Et[ce].nombre)}`:"\u{1F440} Observando"}</b><div class="mu-tarea">${dt(be)}</div>${V?`<div class="mu-lugar">\u{1F4CD} ${dt(V)}</div>`:""}`;let de=ua.find(pe=>!$.hechos[pe.id]&&pe.fisico.every(fe=>$.hechos[fe])&&pe.antes.every(fe=>$.hechos[fe]))?.id;r.innerHTML=ua.map(pe=>`<li class="${$.hechos[pe.id]?"hecho":pe.id===de?"ahora":""}${pe.rol===ce?" mio":""}">${$.hechos[pe.id]?"\u2713":pe.id===de?"\u25B8":"\xB7"} ${dt(pe.nombre)} <small>(${dt(Et[pe.rol].corto)})</small></li>`).join(""),s.hidden=!Se,s.textContent=Se??"",s.classList.toggle("gris",!!q)}function H(){i.hidden=r.hidden=s.hidden=!0}function j($,ce="",be=4.5){let Se=document.createElement("div");for(Se.className=ce,Se.innerHTML=$,o.append(Se);o.children.length>4;)o.firstChild.remove();setTimeout(()=>Se.remove(),be*1e3)}let Y=[];function W($){$.forEach((ce,be)=>{let Se=Y[be]??=n("mu-etq");Se.hidden=!ce.visible,ce.visible&&(Se.textContent!==ce.texto&&(Se.textContent=ce.texto),Se.style.left=ce.x+"px",Se.style.top=ce.y+"px")});for(let ce=$.length;ce<Y.length;ce++)Y[ce].hidden=!0}function ae($){if($.origen!==h&&(h=$.origen,g()),b.hidden=!!d,!d){let ce=Ms[h].mundo;b.textContent!==ce&&(b.textContent=ce);return}if($.abajo&&T(1),$.arriba&&T(-1),$.accion&&$.origen==="control"){let ce=M()[m];ce?.tagName==="BUTTON"&&ce.click()}$.atras&&p&&E()}function ye($,ce,be){let Se=(de,pe,fe)=>`<div class="mu-fila3"><span>${pe}</span><button class="mu-op" data-a="ajuste" data-v="${de}:-1" aria-label="Bajar ${pe}">\u2212</button><b style="min-width:3.2em;text-align:center">${fe}</b><button class="mu-op" data-a="ajuste" data-v="${de}:1" aria-label="Subir ${pe}">+</button></div>`,q=(de,pe,fe)=>`<button class="mu-op${fe?" elegido":""}" data-a="ajuste" data-v="${de}:0">${fe?"\u2611":"\u2610"} ${pe}</button>`,V=(de,pe,fe)=>`<button class="mu-op" data-a="${de}" data-v="${pe}">${fe}</button>`;v("pausa",`<h1>Pausa</h1><p><small>El juego sigue corriendo para tu cuadrilla.</small></p>
      ${V("cerrar","","\u25B6 Continuar")}${be?.fase==="fin"?V("reporte","","\u{1F3C1} Ver el reporte del trabajo"):""}
      <h2>Sonido</h2>${Se("musica","M\xFAsica",Math.round($.musica*10))}${Se("efectos","Efectos",Math.round($.efectos*10))}
      <h2>Controles</h2>${Se("sensibilidad","Sensibilidad de la c\xE1mara",$.sensibilidad.toFixed(1))}${q("invertir","Invertir el eje vertical",$.invertir)}
      <p><small>${dt(Ms[h].todo)}</small></p>
      <h2>Imagen</h2>${Se("resolucion","Resoluci\xF3n","\xD7"+$.resolucion.toFixed(2))}${q("diag","Panel de medidas",$.diag)}
      <h2>Desarrollo</h2>${q("dev","Opciones de desarrollador",$.dev)}
      ${$.dev?`<p><small>Cambian el trabajo de toda la sala (las propone el anfitri\xF3n). \xDAsalas para probar y para reportar fallos.</small></p>
        ${V("dev","reporte","\u{1F4CB} Copiar reporte del estado (para enviar a Claude)")}
        ${V("dev","paso","\u23ED Completar el paso que toca")}${V("dev","todo","\u23E9 Terminar el trabajo")}${V("dev","reiniciar","\u21BA Reiniciar el trabajo")}
        ${Se("tiempo","Velocidad del tiempo","\xD7"+$.tiempo)}${q("volar","Volar (sin colisiones, m\xE1s r\xE1pido)",$.volar)}${q("colisiones","Mostrar colisiones",$.colisiones)}<button class="mu-op" data-a="ajuste" data-v="lluvia:0">\u{1F327} Lluvia: ${$.lluvia}</button>
        <h2>Ir a</h2><div class="mu-fila">${ce.map(([de,pe])=>V("ir",de,dt(pe))).join("")}</div>`:""}`,{cancela:!0})}return{pausa:ye,get origen(){return h},get abierto(){return d},get paso(){return u},get nombre(){return _},sala:C,decision:P,fallo:L,radio:I,mapa:R,fin:U,cerrar:E,tablero:F,ocultarTablero:H,avisar:j,etiquetas:W,navegar:ae}}var lc=60/116/2,ay=.25,yu=a=>440*2**((a-69)/12),iy=[[48,52,55],[45,48,52],[41,45,48],[43,47,50]],Kf=[[72,0,76,79,0,76,74,72,69,0,72,76,0,74,72,69,65,0,69,72,0,74,72,69,67,71,74,0,79,77,74,71],[79,0,79,77,76,0,74,76,72,0,0,76,74,72,69,0,77,0,76,74,72,0,69,72,74,0,71,72,74,76,77,79],[76,76,0,79,0,76,72,0,81,0,79,76,72,0,76,0,77,0,81,0,79,77,76,72,74,0,79,0,77,76,74,71]];function Qf(){let a=null,e=null,t=1,n=.5,i=0,r=0,s=null,o=null;function l(){if(hf(),!a)try{a=new(window.AudioContext||window.webkitAudioContext),e=a.createGain(),e.gain.value=n*.22,e.connect(a.destination),s=a.createOscillator(),s.type="sawtooth",s.frequency.value=40;let h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=420,o=a.createGain(),o.gain.value=0,s.connect(h).connect(o).connect(a.destination),s.start()}catch{a=null;return}a.state!=="running"&&a.resume?.().catch?.(()=>{})}for(let h of["pointerdown","keydown","touchend"])addEventListener(h,l,{passive:!0});let c=new Map;function d(h){if(!c.has(h)){let M=new Float32Array(16),v=new Float32Array(16);for(let E=1;E<16;E++)M[E]=2/(E*Math.PI)*Math.sin(E*Math.PI*h);c.set(h,a.createPeriodicWave(M,v))}return c.get(h)}function p(h,b,M,v,E,S){let T=a.createOscillator(),g=a.createGain();h==="pulso"?T.setPeriodicWave(d(S)):T.type=h,T.frequency.value=b,g.gain.setValueAtTime(E,M),g.gain.exponentialRampToValueAtTime(5e-4,M+v),T.connect(g).connect(e),T.start(M),T.stop(M+v+.02)}function u(h){let b=a.createOscillator(),M=a.createGain();b.frequency.setValueAtTime(140,h),b.frequency.exponentialRampToValueAtTime(45,h+.12),M.gain.setValueAtTime(.9,h),M.gain.exponentialRampToValueAtTime(.001,h+.14),b.connect(M).connect(e),b.start(h),b.stop(h+.16)}let f=null;function x(h,b){f??=(()=>{let S=a.createBuffer(1,a.sampleRate*.06,a.sampleRate),T=S.getChannelData(0);for(let g=0;g<T.length;g++)T[g]=Math.random()*2-1;return S})();let M=a.createBufferSource(),v=a.createBiquadFilter(),E=a.createGain();M.buffer=f,v.type="highpass",v.frequency.value=6e3,E.gain.setValueAtTime(b,h),E.gain.exponentialRampToValueAtTime(.001,h+.05),M.connect(v).connect(E).connect(e),M.start(h)}function _(h,b){let M=Math.floor(h/32)%Kf.length,v=h%32,E=iy[Math.floor(v/8)],S=Kf[M][v];S&&p("pulso",yu(S),b,lc*1.6,.22,.25),v%2===0&&p("triangle",yu(E[0]-12),b,lc*1.8,.5),p("pulso",yu(E[v%3]+12),b,lc*.5,.05,.125),v%4===0&&u(b),x(b,v%2?.05:.1)}function m(h=null){if(!a||a.state!=="running")return;if(i<a.currentTime&&(i=a.currentTime+.05),n>0)for(;i<a.currentTime+ay;)_(r++,i),i+=lc;else i=a.currentTime;let b=Math.abs(h??0),M=a.currentTime;s.frequency.setTargetAtTime(38+b*3.2,M,.15),o.gain.setTargetAtTime(h===null?0:(.05+Math.min(.08,b*.004))*t,M,.2)}return{desbloquear:l,cada:m,get activo(){return a?.state==="running"},volumen(h,b){n=h,t=b,pf(b),e&&e.gain.setTargetAtTime(h*.22,a.currentTime,.1)},atenuar(h){e&&e.gain.setTargetAtTime(n*(h?.08:.22),a.currentTime,.3)}}}var em={musica:.5,efectos:.8,sensibilidad:1,invertir:!1,resolucion:0,diag:!1,dev:!1,tiempo:1,volar:!1,colisiones:!1,lluvia:"auto"},xt=(()=>{try{return{...em,...JSON.parse(localStorage["mundo:ajustes"]??"{}"),tiempo:1,volar:!1,colisiones:!1,lluvia:"auto"}}catch{return{...em}}})(),ry=()=>{try{localStorage["mundo:ajustes"]=JSON.stringify(xt)}catch{}};Hl.variante="nuevo";var Jn=new URLSearchParams(location.search),Ja=Gp(),wu=Jn.has("demo"),dm=(a,e)=>Number.isFinite(parseInt(Jn.get(a)))?parseInt(Jn.get(a)):e,cc=(...a)=>a.every(Number.isFinite),um=new Int16Array(await(await fetch(new URL(Hp,import.meta.url))).arrayBuffer()),mn=new Ol({antialias:Ja.antialias,powerPreference:"high-performance"}),wa=Ja.pixelRatio;mn.setPixelRatio(wa);mn.setSize(innerWidth,innerHeight);mn.toneMapping=Kr;mn.toneMappingExposure=1.05;mn.shadowMap.enabled=!0;mn.shadowMap.autoUpdate=!1;document.body.append(mn.domElement);var ln=new Dr;ln.background=new He(10997738);ln.fog=new Ir(11850728,220,4200);var sn=new Zt(62,innerWidth/innerHeight,.2,7e3);ln.add(new Wr(14084607,7043669,1.15));var Yn=new Yr(16773590,2.7),sy=new B(.45,.78,.32).normalize();Yn.castShadow=!0;Yn.shadow.mapSize.setScalar(Ja.sombra);Object.assign(Yn.shadow.camera,{left:-48,right:48,top:48,bottom:-48,near:1,far:260});Yn.shadow.bias=-6e-4;Yn.shadow.normalBias=.04;ln.add(Yn,Yn.target);addEventListener("resize",()=>{sn.aspect=innerWidth/innerHeight,sn.updateProjectionMatrix(),mn.setSize(innerWidth,innerHeight)});var en=kp(Vd.eje),Lt=qp(Vd,en),fr=Object.entries(ps).map(([a,e])=>{let[t,n]=$d(ui,e.lat,e.lon);return{k:a,n:e.n,x:t,z:n,r:e.r}}),gi=Object.fromEntries(fr.map(a=>[a.k,a])),gn=Xp(um,ui,en,fr.filter(a=>a.r>0),ef.map(a=>({...a,x:gi[a.k].x,z:gi[a.k].z}))),dc=a=>{let e=en.en(en.largo,a);return[e.x,e.z]},Zn=Yp(Qp.map(a=>({n:a.n,y0:a.p[0][0]==="@"?0:void 0,puntos:a.p.flatMap(e=>e==="@oeste"?[dc(-Lt.BORDE),dc(-Lt.BORDE-60)]:e==="@este"?[dc(Lt.BORDE),dc(Lt.BORDE+60)]:[typeof e=="string"?[gi[e].x,gi[e].z]:$d(ui,e[0],e[1])])})),gn.alturaBase,gn.MAR,fr.filter(a=>a.r>0)),hm=Jp(Zn),pm=Zp(gn,Zn,ui),oy=tf(um,ui,Zn),Cs=af(fr,gn,Zn),fm=sf(Zn);gn.listo(Zn,(a,e)=>{hm.rehacer(a,e,420),pm.rehacer(a,e),Cs.actualizar(a,e)});var uc={},mm=(a,e)=>Math.abs(a)<320&&Math.abs(e)<360&&(en.aVia(a,e,uc),Math.abs(uc.a)<=Lt.BORDE&&uc.d>=Lt.D0&&uc.d<=Lt.D1),Za=(a,e)=>mm(a,e)?Lt.altura(a,e):Math.max(gn.altura(a,e),gn.MAR-1),Rs=Sf(en,Lt,dm("autos",20)),Cu=Vp(en,Lt.cajas,Lt.circulos,{d0:-1e9,d1:1e9,a:1e9}),Qt=If(ln,Za),Ts=Df(96),$t=Wf({via:en,barrio:Lt}),Ze=Kp(Za,Lt.estacionado),ur=_f({escena:ln,carreteras:Zn,terreno:gn,meta:ui}),ly=new He(10997738),tm=new He(8293529),cy=new He(11850728);ln.add(gn.grupo,hm.malla,pm.grupo,Cs.grupo,fm,Lt.grupo,Rs.grupo,Ts.malla,$t.grupo,Ze.grupo);var nm=[11879996,3960757,5216859,9068464,13666862,4869975],dy=Array.from({length:dm("gente",5)},(a,e)=>({id:"p"+e,d:30+e*83%(en.largo-60),a:e%2?4.4:-4.3,s:e%2?1:-1,v:1.15+e%3*.15,op:{camisa:nm[e%nm.length],uniforme:!1}})),Su={},Ut=new B,Ru={dist:0},Pu=a=>({camisa:Et[a].camisa,uniforme:!0,arnes:a==="liniero"}),ha=null;function Iu(a){ha&&ln.remove(ha.raiz),ha=ru(a?{camisa:Et[a].camisa}:{}),ha.equipar("casco"),a==="liniero"&&ha.equipar("arnes"),ln.add(ha.raiz)}Iu(null);var am=en.en(Lt.inicio.d,Lt.inicio.a),ie={x:am.x,z:am.z,y:.15,vx:0,vz:0,rumbo:Math.PI,fase:0,guinada:Math.PI,cabeceo:-.12,dist:4.2,primera:!1,d:0,a:0},bc=Nf(),mc=Lf(mn.domElement,bc),gm=Ff(bc,Jn.has("diag")||xt.diag);Jn.has("dev")&&(xt.dev=!0);var gc=Qf(),xm=Object.assign(document.createElement("div"),{className:"mu-chip",textContent:"\u{1F507} Toca la pantalla o pulsa una tecla para activar el sonido"});bc.append(xm);xt.resolucion||(xt.resolucion=wa);function bm(){gc.volumen(xt.musica,xt.efectos),mc.mirada.sensibilidad=xt.sensibilidad,mc.mirada.invertir=xt.invertir,wa=xt.resolucion,mn.setPixelRatio(wa),gm.mostrar(xt.diag||Jn.has("diag")),Sm.visible=xt.colisiones}var cn=(()=>{try{return localStorage["mundo:id"]??=Math.random().toString(36).slice(2,10)}catch{return Math.random().toString(36).slice(2,10)}})(),pr=(Jn.get("sala")||"").toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,12);pr||(pr=Array.from({length:4},()=>"abcdefghjkmnpqrstuvwxyz"[Math.floor(Math.random()*23)]).join(""),Jn.set("sala",pr),history.replaceState(null,"","?"+Jn));var uy=`${location.origin}${location.pathname}?sala=${pr}`,ws=null,Du=Jn.has("sinred"),im=0,Ka=()=>qe.E.jugadores[cn]?.rol??null,st=Zf(bc,{nombre:a=>{let e=qe.E.jugadores[cn];e&&e.nombre!==(a||"Jugador")&&qe.proponer({t:"entra",nombre:a})},rol:a=>{let e=qe.E.jugadores[cn];ws=e?.rol===a?null:a,e||qe.proponer({t:"entra",nombre:st.nombre}),qe.proponer({t:"rol",rol:ws})},modo:a=>qe.proponer({t:"modo",modo:a}),empezar:()=>qe.proponer({t:"empezar"}),unirse:a=>{location.search="?sala="+encodeURIComponent(a.toLowerCase())},intento:(a,e)=>qe.proponer({t:"intento",paso:a,opcion:e}),reiniciar:()=>qe.proponer({t:"reiniciar"}),ajuste:(a,e)=>{let t={musica:[0,1,.1],efectos:[0,1,.1],sensibilidad:[.3,3,.1],resolucion:[.5,2,.25],tiempo:[1,8,0]};if(a==="lluvia")xt.lluvia={auto:"s\xED",s\u00ED:"no",no:"auto"}[xt.lluvia];else if(a==="tiempo")xt.tiempo=e>0?Math.min(8,xt.tiempo*2):Math.max(1,xt.tiempo/2);else if(t[a]){let[n,i,r]=t[a];xt[a]=Math.round(Math.max(n,Math.min(i,xt[a]+e*r))*100)/100}else a in xt&&(xt[a]=!xt[a]);ry(),bm(),st.pausa(xt,Fu,qe.E),Ft.clic()},dev:(a,e)=>{if(a==="reporte"){let t=JSON.stringify({fecha:new Date().toISOString(),info:(({texto:n,...i})=>i)(Uu()),estado:qe.E,huella:qe.huella,eventos:qe.E.n,entrada:Ya,navegador:navigator.userAgent,pantalla:[innerWidth,innerHeight,devicePixelRatio]},null,1);navigator.clipboard?.writeText(t).then(()=>{e.textContent="\u{1F4CB} Reporte copiado \u2713 (p\xE9galo en el chat)"},()=>{console.log(t),e.textContent="\u{1F4CB} No se pudo copiar: est\xE1 en la consola"});return}if(!qe.anfitrion()){st.avisar("Solo el anfitri\xF3n de la sala puede cambiar el trabajo","falta");return}if(a==="reiniciar")qe.proponer({t:"reiniciar",dev:!0});else if(qe.E.fase==="trabajo")for(let t=0;t<(a==="todo"?40:1)&&qe.E.fase==="trabajo";t++){let n=pu(qe.E);if(!n)break;qe.proponer(n.auto?{t:"auto",paso:n.id}:{t:"intento",paso:n.id,opcion:0,dev:!0})}st.cerrar()},reporte:()=>st.fin(qe.E),ir:a=>{let e=a==="poste"?$t.zonas.poste:a==="pickup"?Ze.local(2.2,0,0,new B):gi[a];e&&(ie.x=e.x+(gi[a]?12:0),ie.z=e.z,ie.vx=ie.vz=0)},radio:a=>{on?.fiable({t:"radio",i:a}),vm(a,cn)}});function hy(a,e){Number.isInteger(a.n)&&qe.latido(a.n,a.h,e);let t=qe.E,n=t.jugadores[e]?.rol;if(n?cc(a.x,a.z,a.r)&&Math.abs(a.x)<5e3&&Math.abs(a.z)<5e3&&Qt.fijar("j:"+e,a.x,a.z,a.r,Pu(n),cc(a.y)?Math.max(-80,Math.min(300,a.y)):void 0,a.o):Qt.quitar("j:"+e),Array.isArray(a.c)&&e===t.pickup.chofer&&cc(...a.c.slice(0,4))&&Math.abs(a.c[0])<5e3&&Math.abs(a.c[1])<5e3&&Ze.remoto(a.c[0],a.c[1],a.c[2],a.c[3]),Array.isArray(a.b)&&e===qe.idAnfitrion())for(let i of a.b.slice(0,8))Array.isArray(i)&&Object.hasOwn(Et,i[0])&&cc(i[1],i[2],i[3],i[4])&&!On(t,i[0])&&Qt.fijar("b:"+i[0],i[1],i[2],i[4],Pu(i[0]),Math.max(-80,Math.min(300,i[3])),i[5])}function vm(a,e){let t=qe.E.jugadores[e];!t||!ys[a]||(Ft.alerta(),st.avisar(`\u{1F4FB} <b>${dt(t.rol?Et[t.rol].corto:"Sin rol")}</b> (${dt(t.nombre)}): ${dt(ys[a])}`,"radio"))}var on=Jn.has("sinred")?null:Bf({sala:pr,id:cn,alMensaje:(a,e)=>{a?.t==="p"?hy(a,e):a?.t==="radio"?vm(a.i,e):qe.recibir(a,e)},alPar:(a,e)=>{e?qe.pedir():(Qt.quitar("j:"+a),qe.anfitrion()&&qe.proponer({t:"sale",id:a}))}}),qe=jf({id:cn,red:on,alEvento:py}),hr=Yf({sesion:qe,obra:$t,resolver:Cu,altura:Za});function rm(){let a=Ka();if(!a)return;let e=$t.puesto(a,qe.E.hechos.llegada?"poste":"pickup");ie.x=e.x,ie.z=e.z,ie.vx=ie.vz=0}function Nu(){let a=qe.E;wu||(a.fase!=="fin"&&st.abierto==="fin"&&st.cerrar(),a.fase==="sala"||a.fase==="trabajo"&&!Ka()?(!st.abierto||st.abierto==="sala")&&st.sala(a,cn,{codigo:pr,enlace:uy,conectado:Du,pares:on?.estado.pares.size??0}):st.abierto==="sala"&&st.cerrar())}function py(a,e){if(a)if(a.t==="rol")a.id===cn?(Iu(a.rol),a.rol&&e.fase==="trabajo"&&rm()):Qt.quitar("j:"+a.id),a.rol&&Qt.quitar("b:"+a.rol);else if(a.t==="sale")Qt.quitar("j:"+a.id);else if(a.t==="empezar")st.cerrar(),rm();else if(a.t==="baja"&&a.id===cn||a.t==="aparca"&&pc>=0){let[t,,n]=xc[pc]??xc[0];Ze.local(Math.sign(t)*1.75,0,n,Ut),ie.x=Ut.x,ie.z=Ut.z,pc=-1}else a.t==="hecho"?(st.avisar(`\u2713 <b>${dt(Et[a.rol]?.corto)}</b>: ${dt(Ta[a.paso]?.nombre)}`),(my[a.paso]??Ft.ok)(),e.fase==="fin"&&(setTimeout(Ft.logro,600),Ka()==="liniero"&&(ie.x=$t.zonas.poste.x,ie.z=$t.zonas.poste.z,ie.y=Za(ie.x,ie.z))),st.paso?.id===a.paso&&st.cerrar()):a.t==="falta"&&(Ft.error(),st.avisar(`\u26A0 <b>${dt(Et[a.rol]?.corto)}</b>: ${dt(a.texto)}<small>${dt(a.ref)}</small>`,"falta",9),st.fallo(a,e));else{for(let t of[...Qt.mapa.keys()])/^[jb]:/.test(t)&&Qt.quitar(t);ws&&e.jugadores[cn]?.rol!==ws&&(e.jugadores[cn]||qe.proponer({t:"entra",nombre:st.nombre}),qe.proponer({t:"rol",rol:ws})),Iu(Ka())}Nu()}var sm=new Jr,Es=new B(1e9,0,0),cr=[],As=new Proxy({},{get:(a,e)=>Ms[e]?.accion??"E"}),fy={pickup:"el pick-up",poste:"el poste"},my={perimetro:Ft.cono,cuerda_extension:Ft.cuerda,tensar:Ft.cuerda,amarre_medio:Ft.cuerda,colocar:Ft.metal,tomar:Ft.metal,carrito:Ft.clip,faja:Ft.clip,linea_vida:Ft.clip,llegada:Ft.metal},Fu=[["pickup","El pick-up"],["poste","El poste de trabajo"],...["cartago","limon","liberia","fortuna","puntarenas","sanisidro","penasblancas","canoas"].map(a=>[a,ps[a].n.split(" \xB7 ")[0]])],om=0,pc=-1,xc=[[-.38,0,.62],[.38,0,-.2],[-.38,0,-.2]],hc=0,Mu=0,Eu=0,lm=0,Lu=0,_m=0,Ya="",cm="",lr=-1,fc="",Au=(a,e)=>Math.atan2(Math.sin(e-a),Math.cos(e-a)),gy=a=>{let e=On(qe.E,a);return Qt.mapa.get(e?"j:"+e:"b:"+a)},dr=a=>a===Ka()?ie:qe.anfitrion()&&hr.B.get(a)||gy(a),Tu=a=>Math.hypot(ie.x-$t.zonas[a].x,ie.z-$t.zonas[a].z);function xy(){let a=fr[0],e=1/0;for(let n of fr){let i=Math.hypot(ie.x-n.x,ie.z-n.z);i<e&&(e=i,a=n)}return(Zn.cerca(ie.x,ie.z,Ru).dist<9?Zn.rutas[Ru.ruta].n+" \xB7 ":"")+(e<Math.max(90,a.r+40)?a.n:`${a.n} a ${e<1e3?Math.round(e/10)*10+" m":(e/1e3).toFixed(1).replace(".",",")+" km"}`)}function by(a){let e=[{x:ie.x,z:ie.z,color:"#FFD627",rumbo:ie.rumbo},{x:Ze.st.x,z:Ze.st.z,color:"#fff"}];for(let t in Et){let n=t!==Ka()&&dr(t);n&&e.push({x:n.x,z:n.z,color:"#"+Et[t].camisa.toString(16).padStart(6,"0")})}return e}gn.cada(ie.x,ie.z,!0);document.getElementById("cargando")?.remove();function ym(){requestAnimationFrame(ym);let a=Math.min(.05,sm.getDelta())*xt.tiempo,e=sm.elapsedTime,t=performance.now(),n=mc.leer(a);Ya=n.origen,qe.cada();let i=qe.E,r=Ka(),s=!!st.abierto,o=i.pickup,l=o.chofer===cn,c=o.pasajeros.indexOf(cn),d=l||c>=0;if(st.navegar(n),s?((n.mapa&&st.abierto==="mapa"||n.pausa&&st.abierto==="pausa")&&st.cerrar(),n.mx=n.mz=n.gx=n.gy=0,n.accion=n.vista=!1,i.fase==="sala"&&(ie.guinada+=a*.05)):n.pausa?st.pausa(xt,Fu,qe.E):n.radio&&i.fase==="trabajo"&&r?st.radio():n.mapa&&i.fase!=="sala"&&st.mapa(I=>oy.dibujar(I,by(i))),l){let I=mm(Ze.st.x,Ze.st.z)||Zn.cerca(Ze.st.x,Ze.st.z,Ru).dist<5;Ze.conducir(a,n,I,gn.limites),Cu(Ze.st,1.3),Cs.empujar(Ze.st,1.4)}else o.chofer?Ze.seguir(a):o.x===null?Ze.fijar(Lt.estacionado.x,Lt.estacionado.z,Lt.estacionado.rumbo):Ze.fijar(o.x,o.z,o.r);Ze.asentar(),n.vista&&(ie.primera=!ie.primera),ie.guinada-=n.gx,ie.cabeceo=Math.max(ie.primera?-1.3:-1.05,Math.min(ie.primera?1.3:.55,ie.cabeceo+n.gy)),l&&!n.gx&&Math.abs(Ze.st.v)>.5&&(ie.guinada+=Au(ie.guinada,Ze.st.rumbo+Math.PI)*Math.min(1,a*2.5));let p=Math.sin(ie.guinada),u=Math.cos(ie.guinada),f=n.correr?3.9:1.7,x=1-Math.exp(-a*10),_=$t.cargando(i)&&/^auxiliar/.test(r??""),m=_?"c":"i",h=0;if(d)Ze.local(...l?[0,0,0]:xc[c],Ut),ie.x=Ut.x,ie.z=Ut.z,ie.y=Ze.st.y,ie.vx=ie.vz=0,ie.rumbo=Ze.st.rumbo,m="o",!l&&Math.abs(Ze.st.v)>.5&&!n.gx&&(ie.guinada+=Au(ie.guinada,Ze.st.rumbo+Math.PI)*Math.min(1,a*2.5)),pc=l?-1:c;else if(r==="liniero"&&i.hechos.subir&&i.fase==="trabajo"){let I=$t.puestoLiniero();ie.x=I.x,ie.z=I.z,ie.y=I.y,ie.vx=ie.vz=0,ie.rumbo=$t.rumbo,ie.fase=I.fase,m=I.pose}else{let I=_?Math.min(f,1.7):xt.volar?f*6:f,R=gn.limites;ie.vx+=((u*n.mx-p*n.mz)*I-ie.vx)*x,ie.vz+=((-p*n.mx-u*n.mz)*I-ie.vz)*x,ie.x=Math.max(R.x0,Math.min(R.x1,ie.x+ie.vx*a)),ie.z=Math.max(R.z0,Math.min(R.z1,ie.z+ie.vz*a)),xt.volar||(Cu(ie,.32),Ze.empujar(ie,.32),Cs.empujar(ie,.32)),$t.restringir(i,r,ie,dr),ie.y+=(Za(ie.x,ie.z)-ie.y)*Math.min(1,a*14),h=Math.hypot(ie.vx,ie.vz),ie.primera?ie.rumbo=Math.atan2(-p,-u):h>.3&&(ie.rumbo+=Au(ie.rumbo,Math.atan2(ie.vx,ie.vz))*Math.min(1,a*12)),ie.fase+=h*a*(n.correr?3.1:4.19),Math.floor(ie.fase/Math.PI)!==om&&(om=Math.floor(ie.fase/Math.PI),h>.4&&Ft.paso())}en.aVia(ie.x,ie.z,ie),ha.raiz.position.set(ie.x,ie.y,ie.z),ha.raiz.rotation.y=ie.rumbo,ha.pose({tipo:iu[m]??(h>.25?"caminar":"idle"),fase:ie.fase,t:e,dt:a}),ie.dist+=((ie.primera?0:d?8.5:4.2)-ie.dist)*Math.min(1,a*9);let b=Math.cos(ie.cabeceo),M=(d?0:.45)*Math.min(1,ie.dist);if(d){let[I,,R]=l?[.38,0,.62]:xc[c];Ze.local(ie.primera?I:0,ie.primera?1.42:2,ie.primera?R:0,Ut)}else Ut.set(ie.x,ie.y+1.62,ie.z);sn.rotation.set(ie.cabeceo,ie.guinada,0,"YXZ"),sn.position.set(Ut.x+p*b*ie.dist+u*M,Ut.y-Math.sin(ie.cabeceo)*ie.dist,Ut.z+u*b*ie.dist-p*M),sn.position.y=Math.max(sn.position.y,Za(sn.position.x,sn.position.z)+.4),sn.updateMatrixWorld(),ha.raiz.visible=ie.dist>.7&&!d,gn.cada(ie.x,ie.z);for(let I of dy)I.d+=I.s*I.v*a,I.d>en.largo-8?I.s=-1:I.d<8&&(I.s=1),en.en(I.d,I.a,Su),Qt.fijar(I.id,Su.x,Su.z,void 0,I.op);hr.cada(a,i,dr);for(let I of hr.B.values())if(qe.anfitrion())Qt.fijar("b:"+I.rol,I.x,I.z,I.rumbo,Pu(I.rol),I.y,I.pose);else{let R=Qt.mapa.get("b:"+I.rol);R&&(I.x=R.x,I.z=R.z,I.y=R.y,I.rumbo=R.rumbo)}Qt.cada(a,e,sn),cr.length=0,cr.push(ie);for(let I of Qt.mapa.values())en.aVia(I.x,I.z,I),cr.push(I);Rs.cada(a,cr);let v=ur.cada(a,sn,ie.x,ie.z,[ie,Ze.st],xt.lluvia==="auto"?null:xt.lluvia==="s\xED"?1:0),E=Math.max(v.lluvia*.8,v.niebla);ln.fog.far=4200-3700*E,ln.fog.near=220-180*E,ln.background.copy(ly).lerp(tm,E),ln.fog.color.copy(cy).lerp(tm,E),Yn.intensity=2.7-1.6*v.lluvia,qe.anfitrion()&&$t.cargando(i)&&$t.llego(dr)&&qe.proponer({t:"auto",paso:"llegada"}),$t.cada(a,e,i,dr,Ze);let S="",T=null,g=!1,A=null;if(c>=0)S=`De pasajero \xB7 ${Math.round(Math.abs(Ze.st.v)*3.6)} km/h`,T=Math.abs(Ze.st.v)<2?`${As[Ya]} \xB7 Bajar del pick-up`:null,n.accion&&T&&qe.proponer({t:"baja"});else if(l)S=`Al volante \xB7 ${Math.round(Math.abs(Ze.st.v)*3.6)} km/h`,T=Math.abs(Ze.st.v)<2?`${As[Ya]??"E"} \xB7 Bajar del pick-up`:null,n.accion&&T&&(qe.proponer({t:"aparca",x:+Ze.st.x.toFixed(2),z:+Ze.st.z.toFixed(2),r:+Ze.st.rumbo.toFixed(3)}),Ze.local(1.75,0,.5,Ut),ie.x=Ut.x,ie.z=Ut.z);else if(i.fase==="trabajo"&&r){let I=H=>H.lugar==="arriba"?r==="liniero"&&$t.subida>=1:Tu(H.lugar)<4.2,R=sr(i,r),U=R.find(H=>!H.bloqueo),F=R.find(H=>!H.bloqueo&&I(H.paso))??R.find(H=>I(H.paso));if(_)S=`Lleva la escalera al poste con tu compa\xF1ero \xB7 ${Math.round(Tu("poste"))} m`,A="poste";else if(U){let H=I(U.paso)||U.paso.lugar==="arriba";S=`Tu tarea: ${U.paso.nombre}${H?"":` \xB7 ${fy[U.paso.lugar]} est\xE1 a ${Math.round(Tu(U.paso.lugar))} m`}`,A=H?null:U.paso.lugar}else{let H=pu(i);S=H?`Espera: ${Et[H.rol].corto} \u2192 ${H.nombre}`:"Trabajo terminado"}F&&!s&&(F.bloqueo&&i.modo==="aprendiz"?(T=`\u{1F512} Antes: ${F.bloqueo.nombre} (${Et[F.bloqueo.rol].corto})`,g=!0):T=`${As[Ya]??"E"} \xB7 ${F.paso.accion}`,n.accion&&(g?st.avisar(`\u{1F512} Primero: <b>${dt(F.bloqueo.nombre)}</b> (${dt(Et[F.bloqueo.rol].corto)})`,"",3):F.paso.opciones&&!F.bloqueo?st.decision(F.paso,i):qe.proponer({t:"intento",paso:F.paso.id})))}else i.fase==="trabajo"?S="Observando: los compa\xF1eros autom\xE1ticos hacen el trabajo":i.fase==="fin"&&(S="Trabajo terminado");!d&&!T&&!s&&r&&o.chofer&&o.pasajeros.length<3&&Math.hypot(ie.x-Ze.st.x,ie.z-Ze.st.z)<3.6&&Math.abs(Ze.st.v)<2&&(T=`${As[Ya]} \xB7 Subir al pick-up`,n.accion&&qe.proponer({t:"sube"})),!d&&!T&&!s&&r&&(i.fase==="fin"||i.fase==="trabajo"&&i.hechos.tomar&&i.hechos.tomar2)&&!o.chofer&&!(r==="liniero"&&i.hechos.subir&&i.fase==="trabajo")&&!_&&Math.hypot(ie.x-Ze.st.x,ie.z-Ze.st.z)<3.6&&(T=`${As[Ya]??"E"} \xB7 Manejar el pick-up`,n.accion&&qe.proponer({t:"conduce"})),$t.marcar(A);let C=`${i.n}|${S}|${T}|${r}|${fc}`;i.fase==="sala"?st.ocultarTablero():C!==cm&&(cm=C,st.tablero(i,r,S,T,g,fc)),i.fase==="fin"?(lr<0&&(lr=e),lr!==null&&e-lr>3.5&&!st.abierto&&!wu&&(st.fin(i),lr=null)):lr=-1;let P=[];if(i.fase!=="sala")for(let I in Et){if(I===r)continue;let R=dr(I);if(!R)continue;Ut.set(R.x,(R.y??.15)+2.02,R.z);let U=Ut.distanceTo(sn.position);Ut.project(sn);let F=On(i,I);P.push({visible:!s&&Ut.z<1&&U<45&&Math.abs(Ut.x)<1.05&&!(F&&F===o.chofer),x:(Ut.x+1)/2*innerWidth,y:(1-Ut.y)/2*innerHeight,texto:`${Et[I].icono} ${Et[I].corto}${F?" \xB7 "+i.jugadores[F].nombre:""}`})}st.etiquetas(P),gc.cada(l||o.chofer?Ze.st.v:null),xm.hidden=gc.activo,l&&n.bocina&&Ft.bocina();let L=0;for(let I of cr)(I!==ie||!d)&&Ts.fijar(L++,I.x,Za(I.x,I.z),I.z,.62);for(let I of Rs.todos)Ts.fijar(L++,I.x,0,I.z,2.3,4.9,I.rumbo);if(Ts.fijar(L++,Ze.st.x,Ze.st.y,Ze.st.z,2.4,5.6,Ze.st.rumbo),Ts.listo(L),Math.hypot(ie.x-Es.x,ie.z-Es.z)>14&&(Es.set(ie.x,ie.y,ie.z),Yn.target.position.copy(Es),Yn.position.copy(Es).addScaledVector(sy,120),Yn.target.updateMatrixWorld(),mn.shadowMap.needsUpdate=!0),on&&e-lm>.1){lm=e;let I={t:"p",x:+ie.x.toFixed(2),z:+ie.z.toFixed(2),y:+ie.y.toFixed(2),r:+ie.rumbo.toFixed(2),o:m};l&&(I.c=[+Ze.st.x.toFixed(2),+Ze.st.z.toFixed(2),+Ze.st.rumbo.toFixed(3),+Ze.st.v.toFixed(1)]),qe.anfitrion()&&(I.n=i.n,I.h=qe.huella,hr.B.size&&(I.b=[...hr.B.values()].map(R=>[R.rol,+R.x.toFixed(2),+R.z.toFixed(2),+R.y.toFixed(2),+R.rumbo.toFixed(2),R.pose]))),(r||qe.anfitrion())&&on.enviar(I)}if(mn.render(ln,sn),Mu+=performance.now()-t,hc++,e-Eu>=1){Lu=hc/(e-Eu),_m=Mu/hc,hc=0,Mu=0,Eu=e,Lu<27&&wa>Ja.minPixelRatio&&(wa=Math.max(Ja.minPixelRatio,wa-.15),mn.setPixelRatio(wa)),fc=xy(),gm.escribir(Uu().texto),on&&!on.estado.presencia&&e>6&&qe.jugarSolo();let I=!on||on.estado.presencia||e>6,R=on?.estado.pares.size??0;(I!==Du||R!==im)&&(Du=I,im=R,Nu()),wu&&i.fase==="sala"&&qe.anfitrion()&&qe.proponer({t:"empezar",demo:!0})}}function Uu(){let a=mn.info.render,e=on?[...on.estado.pares.values()]:[],t=e.filter(r=>r.directo),n=qe.E,i={fps:Math.round(Lu),ms:+_m.toFixed(1),llamadas:a.calls,triangulos:a.triangles,pixeles:+wa.toFixed(2),entrada:Ya,vista:ie.primera?"1.\xAA persona":"3.\xAA persona",x:ie.x,z:ie.z,y:ie.y,d:ie.d,a:ie.a,donde:fc,red:on?.estado.ws??"apagada",rtt:on?.estado.rtt,pares:e.length,directos:t.length,personas:cr.length,autos:Rs.todos.length,fase:n.fase,rol:Ka(),hechos:Object.keys(n.hechos).length,pasos:ua.length,seguridad:or(n),faltas:n.eventos.filter(r=>r.tipo==="falta").length,anfitrion:qe.anfitrion(),panel:st.abierto,clima:`${ur.clima.region}${ur.clima.lluvia>.1?", lloviendo":""}${ur.clima.niebla>.2?", neblina":""}`,autosRuta:ur.autos.filter(r=>r.vivo).length,chofer:n.pickup.chofer===cn,pasajero:n.pickup.pasajeros.includes(cn),velocidad:Ze.st.v};return i.texto=["Cuadrilla Segura \xB7 Mundo",`${i.fps} cuadros/s \xB7 ${i.ms} ms por cuadro (CPU)`,`${i.llamadas} llamadas de dibujo \xB7 ${Math.round(i.triangulos/1e3)} mil tri\xE1ngulos`,`resoluci\xF3n \xD7${i.pixeles} \xB7 sombra ${Ja.sombra} \xB7 ${Ja.movil?Ja.bajo?"tel\xE9fono modesto":"tel\xE9fono":"escritorio"}`,`${i.personas} personas \xB7 ${i.autos} autos \xB7 ${i.vista} \xB7 ${i.entrada}`,`red: ${i.red}${i.rtt!=null?` \xB7 ida y vuelta ${Math.round(i.rtt)} ms`:""}${i.anfitrion?" \xB7 anfitri\xF3n":""}`,`otros jugadores: ${i.pares}${i.pares?` (${i.directos} con enlace directo${t[0]?.rtt!=null?`, ${Math.round(t[0].rtt)} ms`:""})`:""}`,`trabajo: ${i.fase} \xB7 ${i.hechos}/${i.pasos} pasos \xB7 seguridad ${i.seguridad}`,`clima: ${i.clima} \xB7 ${i.autosRuta} veh\xEDculos en las rutas`,`\u{1F4CD} ${i.donde} \xB7 ${Math.round(i.x)}, ${Math.round(i.z)} \xB7 altura ${i.y.toFixed(1)} m`].join(`
`),i}var Sm=(()=>{let a=[],e={},t=(r,s)=>(en.en(r,s,e),[e.x,.3,e.z]);for(let r of Lt.cajas){let s=[t(r.d0,r.a0),t(r.d1,r.a0),t(r.d1,r.a1),t(r.d0,r.a1)];for(let o=0;o<4;o++)a.push(...s[o],...s[(o+1)%4])}for(let r of Lt.circulos)for(let s=0;s<8;s++){let o=s*Math.PI/4,l=o+Math.PI/4;a.push(r.x+Math.cos(o)*r.r,.3,r.z+Math.sin(o)*r.r,r.x+Math.cos(l)*r.r,.3,r.z+Math.sin(l)*r.r)}let n=new pt;n.setAttribute("position",new tt(a,3));let i=new jn(n,new Pn({color:16723285,depthTest:!1}));return i.renderOrder=9,i.visible=!1,ln.add(i),i})();bm();document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&!st.abierto&&qe.E.fase!=="sala"&&st.pausa(xt,Fu,qe.E)});globalThis.__mundo={vida:ur,J:ie,info:Uu,ajustes:xt,sonido:gc,colisiones:Sm,pueblos:Cs,rotulos:fm,pendientes:sr,ordenOpciones:oc,red:on,avatares:Qt,entrada:mc,via:en,barrio:Lt,trafico:Rs,obra:$t,bots:hr,ui:st,terreno:gn,carreteras:Zn,pickup:Ze,lugar:gi,altura:Za,camara:sn,CARRIL:$l,get sesion(){return qe},get E(){return qe.E}};Nu();ym();
