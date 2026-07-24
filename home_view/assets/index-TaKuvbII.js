var Hp=Object.defineProperty;var Gp=(r,t,e)=>t in r?Hp(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var bt=(r,t,e)=>Gp(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="169",Vp=0,$u=1,Wp=2,Ff=1,Xp=2,yi=3,ir=0,Mn=1,bi=2,Ji=0,ps=1,Ql=2,Ku=3,Zu=4,Yp=5,Er=100,qp=101,jp=102,$p=103,Kp=104,Zp=200,Jp=201,Qp=202,tm=203,tc=204,ec=205,em=206,nm=207,im=208,rm=209,sm=210,am=211,om=212,lm=213,cm=214,nc=0,ic=1,rc=2,Ts=3,sc=4,ac=5,oc=6,lc=7,Of=0,um=1,hm=2,Qi=0,fm=1,dm=2,pm=3,mm=4,_m=5,gm=6,vm=7,Bf=300,bs=301,ws=302,cc=303,uc=304,Ko=306,hc=1e3,br=1001,fc=1002,jn=1003,xm=1004,Ua=1005,mn=1006,ol=1007,wr=1008,Li=1009,zf=1010,kf=1011,pa=1012,du=1013,Or=1014,Ai=1015,wa=1016,pu=1017,mu=1018,As=1020,Hf=35902,Gf=1021,Vf=1022,si=1023,Wf=1024,Xf=1025,ms=1026,Rs=1027,Yf=1028,_u=1029,qf=1030,gu=1031,vu=1033,xo=33776,So=33777,Mo=33778,yo=33779,dc=35840,pc=35841,mc=35842,_c=35843,gc=36196,vc=37492,xc=37496,Sc=37808,Mc=37809,yc=37810,Ec=37811,Tc=37812,bc=37813,wc=37814,Ac=37815,Rc=37816,Cc=37817,Pc=37818,Lc=37819,Dc=37820,Ic=37821,Eo=36492,Uc=36494,Nc=36495,jf=36283,Fc=36284,Oc=36285,Bc=36286,Sm=3200,Mm=3201,ym=0,Em=1,Yi="",oi="srgb",lr="srgb-linear",xu="display-p3",Zo="display-p3-linear",No="linear",Ee="srgb",Fo="rec709",Oo="p3",Wr=7680,Ju=519,Tm=512,bm=513,wm=514,$f=515,Am=516,Rm=517,Cm=518,Pm=519,Qu=35044,th="300 es",Ri=2e3,Bo=2001;class Fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ll=Math.PI/180,zc=180/Math.PI;function Aa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function xn(r,t,e){return Math.max(t,Math.min(e,r))}function Lm(r,t){return(r%t+t)%t}function cl(r,t,e){return(1-e)*r+e*t}function Bs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,i,s,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],x=i[4],M=i[7],R=i[2],A=i[5],E=i[8];return s[0]=a*g+o*y+l*R,s[3]=a*p+o*x+l*A,s[6]=a*m+o*M+l*E,s[1]=c*g+u*y+f*R,s[4]=c*p+u*x+f*A,s[7]=c*m+u*M+f*E,s[2]=h*g+d*y+_*R,s[5]=h*p+d*x+_*A,s[8]=h*m+d*M+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=e*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ul.makeScale(t,e)),this}rotate(t){return this.premultiply(ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ul=new Kt;function Kf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dm(){const r=ma("canvas");return r.style.display="block",r}const eh={};function To(r){r in eh||(eh[r]=!0,console.warn(r))}function Im(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Um(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nm(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const nh=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ih=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[lr]:{transfer:No,primaries:Fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[oi]:{transfer:Ee,primaries:Fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Zo]:{transfer:No,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(ih),fromReference:r=>r.applyMatrix3(nh)},[xu]:{transfer:Ee,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(ih),fromReference:r=>r.applyMatrix3(nh).convertLinearToSRGB()}},Fm=new Set([lr,Zo]),fe={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Fm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=zs[t].toReference,i=zs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return zs[r].primaries},getTransfer:function(r){return r===Yi?No:zs[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(zs[t].luminanceCoefficients)}};function _s(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function hl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xr;class Om{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xr===void 0&&(Xr=ma("canvas")),Xr.width=t.width,Xr.height=t.height;const n=Xr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ma("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=_s(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_s(e[n]/255)*255):e[n]=_s(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bm=0;class Zf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Aa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(fl(i[a].image)):s.push(fl(i[a]))}else s=fl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function fl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Om.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zm=0;class on extends Fs{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=br,i=br,s=mn,a=wr,o=si,l=Li,c=on.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Aa(),this.name="",this.source=new Zf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hc:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hc:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Bf;on.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,i=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(d+1)/2,R=(m+1)/2,A=(u+h)/4,E=(f+g)/4,L=(_+p)/4;return x>M&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=E/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=L/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=E/s,i=L/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class km extends Fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends km{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jf extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hm extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ra{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let p=1-o;const m=l*h+c*d+u*_+f*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*y);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const M=o*y;if(l=l*p+h*M,c=c*p+d*M,u=u*p+_*M,f=f*p+g*M,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-o*d,t[e+2]=c*_+u*d+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new Y,rh=new Ra;class Ca{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(t.matrixWorld),this.union(Na)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Fa.subVectors(this.max,ks),Yr.subVectors(t.a,ks),qr.subVectors(t.b,ks),jr.subVectors(t.c,ks),Bi.subVectors(qr,Yr),zi.subVectors(jr,qr),ur.subVectors(Yr,jr);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ur.z,ur.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ur.z,0,-ur.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ur.y,ur.x,0];return!pl(e,Yr,qr,jr,Fa)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,Yr,qr,jr,Fa))?!1:(Oa.crossVectors(Bi,zi),e=[Oa.x,Oa.y,Oa.z],pl(e,Yr,qr,jr,Fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Qn=new Y,Na=new Ca,Yr=new Y,qr=new Y,jr=new Y,Bi=new Y,zi=new Y,ur=new Y,ks=new Y,Fa=new Y,Oa=new Y,hr=new Y;function pl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){hr.fromArray(r,s);const o=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=t.dot(hr),c=e.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gm=new Ca,Hs=new Y,ml=new Y;class Jo{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);const e=Hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Hs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(ml)),this.expandByPoint(Hs.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new Y,_l=new Y,Ba=new Y,ki=new Y,gl=new Y,za=new Y,vl=new Y;class Qf{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_l.copy(t).add(e).multiplyScalar(.5),Ba.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(_l);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ba),o=ki.dot(this.direction),l=-ki.dot(Ba),c=ki.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(_l).addScaledVector(Ba,h),d}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),i=vi.dot(vi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,i,s){gl.subVectors(e,t),za.subVectors(n,t),vl.crossVectors(gl,za);let a=this.direction.dot(vl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,t);const l=o*this.direction.dot(za.crossVectors(ki,za));if(l<0)return null;const c=o*this.direction.dot(gl.cross(ki));if(c<0||l+c>a)return null;const u=-o*ki.dot(vl);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(t,e,n,i,s,a,o,l,c,u,f,h,d,_,g,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,f,h,d,_,g,p)}set(t,e,n,i,s,a,o,l,c,u,f,h,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$r.setFromMatrixColumn(t,0).length(),s=1/$r.setFromMatrixColumn(t,1).length(),a=1/$r.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h-g*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-h*f,e[8]=_*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=a*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vm,t,Wm)}lookAt(t,e,n){const i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Hi.crossVectors(n,Pn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Hi.crossVectors(n,Pn)),Hi.normalize(),ka.crossVectors(Pn,Hi),i[0]=Hi.x,i[4]=ka.x,i[8]=Pn.x,i[1]=Hi.y,i[5]=ka.y,i[9]=Pn.y,i[2]=Hi.z,i[6]=ka.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],x=n[7],M=n[11],R=n[15],A=i[0],E=i[4],L=i[8],O=i[12],v=i[1],T=i[5],N=i[9],z=i[13],W=i[2],$=i[6],G=i[10],X=i[14],V=i[3],rt=i[7],C=i[11],ot=i[15];return s[0]=a*A+o*v+l*W+c*V,s[4]=a*E+o*T+l*$+c*rt,s[8]=a*L+o*N+l*G+c*C,s[12]=a*O+o*z+l*X+c*ot,s[1]=u*A+f*v+h*W+d*V,s[5]=u*E+f*T+h*$+d*rt,s[9]=u*L+f*N+h*G+d*C,s[13]=u*O+f*z+h*X+d*ot,s[2]=_*A+g*v+p*W+m*V,s[6]=_*E+g*T+p*$+m*rt,s[10]=_*L+g*N+p*G+m*C,s[14]=_*O+g*z+p*X+m*ot,s[3]=y*A+x*v+M*W+R*V,s[7]=y*E+x*T+M*$+R*rt,s[11]=y*L+x*N+M*G+R*C,s[15]=y*O+x*z+M*X+R*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*d-n*l*d)+g*(+e*l*d-e*c*h+s*a*h-i*a*d+i*c*u-s*l*u)+p*(+e*c*f-e*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+m*(-i*o*u-e*l*f+e*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=f*p*c-g*h*c+g*l*d-o*p*d-f*l*m+o*h*m,x=_*h*c-u*p*c-_*l*d+a*p*d+u*l*m-a*h*m,M=u*g*c-_*f*c+_*o*d-a*g*d-u*o*m+a*f*m,R=_*f*l-u*g*l-_*o*h+a*g*h+u*o*p-a*f*p,A=e*y+n*x+i*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=y*E,t[1]=(g*h*s-f*p*s-g*i*d+n*p*d+f*i*m-n*h*m)*E,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*m+n*l*m)*E,t[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*E,t[4]=x*E,t[5]=(u*p*s-_*h*s+_*i*d-e*p*d-u*i*m+e*h*m)*E,t[6]=(_*l*s-a*p*s-_*i*c+e*p*c+a*i*m-e*l*m)*E,t[7]=(a*h*s-u*l*s+u*i*c-e*h*c-a*i*d+e*l*d)*E,t[8]=M*E,t[9]=(_*f*s-u*g*s-_*n*d+e*g*d+u*n*m-e*f*m)*E,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*m+e*o*m)*E,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*d-e*o*d)*E,t[12]=R*E,t[13]=(u*g*i-_*f*i+_*n*h-e*g*h-u*n*p+e*f*p)*E,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*E,t[15]=(a*f*i-u*o*i+u*n*l-e*f*l-a*n*h+e*o*h)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,g=a*u,p=a*f,m=o*f,y=l*c,x=l*u,M=l*f,R=n.x,A=n.y,E=n.z;return i[0]=(1-(g+m))*R,i[1]=(d+M)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(h+m))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(_+x)*E,i[9]=(p-y)*E,i[10]=(1-(h+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=$r.set(i[0],i[1],i[2]).length();const a=$r.set(i[4],i[5],i[6]).length(),o=$r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ti.copy(this);const c=1/s,u=1/a,f=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,e.setFromRotationMatrix(ti),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Ri){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i);let d,_;if(o===Ri)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Bo)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ri){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(a-s),h=(e+t)*c,d=(n+i)*u;let _,g;if(o===Ri)_=(a+s)*f,g=-2*f;else if(o===Bo)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $r=new Y,ti=new Be,Vm=new Y(0,0,0),Wm=new Y(1,1,1),Hi=new Y,ka=new Y,Pn=new Y,sh=new Be,ah=new Ra;class Di{constructor(t=0,e=0,n=0,i=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class td{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xm=0;const oh=new Y,Kr=new Ra,xi=new Be,Ha=new Y,Gs=new Y,Ym=new Y,qm=new Ra,lh=new Y(1,0,0),ch=new Y(0,1,0),uh=new Y(0,0,1),hh={type:"added"},jm={type:"removed"},Zr={type:"childadded",child:null},xl={type:"childremoved",child:null};class yn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new Y,e=new Di,n=new Ra,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Kt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,e){return Kr.setFromAxisAngle(t,e),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ha.copy(t):Ha.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Gs,Ha,this.up):xi.lookAt(Ha,Gs,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Kr.setFromRotationMatrix(xi),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jm),xl.child=t,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,Ym),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,qm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}yn.DEFAULT_UP=new Y(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new Y,Si=new Y,Sl=new Y,Mi=new Y,Jr=new Y,Qr=new Y,fh=new Y,Ml=new Y,yl=new Y,El=new Y,Tl=new Ne,bl=new Ne,wl=new Ne;class ri{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ei.subVectors(t,e),i.cross(ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ei.subVectors(i,e),Si.subVectors(n,e),Sl.subVectors(t,e);const a=ei.dot(ei),o=ei.dot(Si),l=ei.dot(Sl),c=Si.dot(Si),u=Si.dot(Sl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Tl.setScalar(0),bl.setScalar(0),wl.setScalar(0),Tl.fromBufferAttribute(t,e),bl.fromBufferAttribute(t,n),wl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Tl,s.x),a.addScaledVector(bl,s.y),a.addScaledVector(wl,s.z),a}static isFrontFacing(t,e,n,i){return ei.subVectors(n,e),Si.subVectors(t,e),ei.cross(Si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ei.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ri.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Jr.subVectors(i,n),Qr.subVectors(s,n),Ml.subVectors(t,n);const l=Jr.dot(Ml),c=Qr.dot(Ml);if(l<=0&&c<=0)return e.copy(n);yl.subVectors(t,i);const u=Jr.dot(yl),f=Qr.dot(yl);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Jr,a);El.subVectors(t,s);const d=Jr.dot(El),_=Qr.dot(El);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Qr,o);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return fh.subVectors(s,i),o=(f-u)/(f-u+(d-_)),e.copy(i).addScaledVector(fh,o);const m=1/(p+g+h);return a=g*m,o=h*m,e.copy(n).addScaledVector(Jr,a).addScaledVector(Qr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Al(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class me{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=Lm(t,1),e=xn(e,0,1),n=xn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Al(a,s,t+1/3),this.g=Al(a,s,t),this.b=Al(a,s,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=oi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){const n=ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=hl(t.r),this.g=hl(t.g),this.b=hl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return fe.fromWorkingColorSpace(en.copy(this),t),Math.round(xn(en.r*255,0,255))*65536+Math.round(xn(en.g*255,0,255))*256+Math.round(xn(en.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=oi){fe.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Ga);const n=cl(Gi.h,Ga.h,e),i=cl(Gi.s,Ga.s,e),s=cl(Gi.l,Ga.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new me;me.NAMES=ed;let $m=0;class Pa extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Aa(),this.name="",this.type="Material",this.blending=ps,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ec,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==Er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nd extends Pa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new Y,Va=new ce;class ai{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qu&&(t.usage=this.usage),t}}class id extends ai{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rd extends ai{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Cr extends ai{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Km=0;const Wn=new Be,Rl=new yn,ts=new Y,Ln=new Ca,Vs=new Ca,qe=new Y;class Fi extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kf(t)?rd:id)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(Ln.min,Vs.min),Ln.expandByPoint(qe),qe.addVectors(Ln.max,Vs.max),Ln.expandByPoint(qe)):(Ln.expandByPoint(Vs.min),Ln.expandByPoint(Vs.max))}Ln.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qe.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(t,c),qe.add(ts)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new Y,l[L]=new Y;const c=new Y,u=new Y,f=new Y,h=new ce,d=new ce,_=new ce,g=new Y,p=new Y;function m(L,O,v){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,O),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,O),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const T=1/(d.x*_.y-_.x*d.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(T),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(T),o[L].add(g),o[O].add(g),o[v].add(g),l[L].add(p),l[O].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,O=y.length;L<O;++L){const v=y[L],T=v.start,N=v.count;for(let z=T,W=T+N;z<W;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new Y,M=new Y,R=new Y,A=new Y;function E(L){R.fromBufferAttribute(i,L),A.copy(R);const O=o[L];x.copy(O),x.sub(R.multiplyScalar(R.dot(O))).normalize(),M.crossVectors(A,O);const T=M.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,T)}for(let L=0,O=y.length;L<O;++L){const v=y[L],T=v.start,N=v.count;for(let z=T,W=T+N;z<W;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ai(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new ai(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new Be,fr=new Qf,Wa=new Jo,ph=new Y,Xa=new Y,Ya=new Y,qa=new Y,Cl=new Y,ja=new Y,mh=new Y,$a=new Y;class fi extends yn{constructor(t=new Fi,e=new nd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Cl.fromBufferAttribute(f,t),a?ja.addScaledVector(Cl,u):ja.addScaledVector(Cl.sub(e),u))}e.add(ja)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),fr.copy(t.ray).recast(t.near),!(Wa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Wa,ph)===null||fr.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(dh.copy(s).invert(),fr.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,R=x;M<R;M+=3){const A=o.getX(M),E=o.getX(M+1),L=o.getX(M+2);i=Ka(this,m,t,n,c,u,f,A,E,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=Ka(this,a,t,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,R=x;M<R;M+=3){const A=M,E=M+1,L=M+2;i=Ka(this,m,t,n,c,u,f,A,E,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,x=p+1,M=p+2;i=Ka(this,a,t,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Zm(r,t,e,n,i,s,a,o){let l;if(t.side===Mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===ir,o),l===null)return null;$a.copy(o),$a.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo($a);return c<e.near||c>e.far?null:{distance:c,point:$a.clone(),object:r}}function Ka(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Xa),r.getVertexPosition(l,Ya),r.getVertexPosition(c,qa);const u=Zm(r,t,e,n,Xa,Ya,qa,mh);if(u){const f=new Y;ri.getBarycoord(mh,Xa,Ya,qa,f),i&&(u.uv=ri.getInterpolatedAttribute(i,o,l,c,f,new ce)),s&&(u.uv1=ri.getInterpolatedAttribute(s,o,l,c,f,new ce)),a&&(u.normal=ri.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};ri.getNormal(Xa,Ya,qa,h.normal),u.face=h,u.barycoord=f}return u}class La extends Fi{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Cr(c,3)),this.setAttribute("normal",new Cr(u,3)),this.setAttribute("uv",new Cr(f,2));function _(g,p,m,y,x,M,R,A,E,L,O){const v=M/E,T=R/L,N=M/2,z=R/2,W=A/2,$=E+1,G=L+1;let X=0,V=0;const rt=new Y;for(let C=0;C<G;C++){const ot=C*T-z;for(let Bt=0;Bt<$;Bt++){const Xt=Bt*v-N;rt[g]=Xt*y,rt[p]=ot*x,rt[m]=W,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[p]=0,rt[m]=A>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(Bt/E),f.push(1-C/L),X+=1}}for(let C=0;C<L;C++)for(let ot=0;ot<E;ot++){const Bt=h+ot+$*C,Xt=h+ot+$*(C+1),q=h+(ot+1)+$*(C+1),Q=h+(ot+1)+$*C;l.push(Bt,Xt,Q),l.push(Xt,q,Q),V+=6}o.addGroup(d,V,O),d+=V,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(r){const t={};for(let e=0;e<r.length;e++){const n=Cs(r[e]);for(const i in n)t[i]=n[i]}return t}function Jm(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function sd(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Qm={clone:Cs,merge:hn};var t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Pa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=e_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ad extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new Y,_h=new ce,gh=new ce;class ii extends ad{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,_h,gh),e.subVectors(gh,_h)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ll*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class n_ extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ii(es,ns,t,e);i.layers=this.layers,this.add(i);const s=new ii(es,ns,t,e);s.layers=this.layers,this.add(s);const a=new ii(es,ns,t,e);a.layers=this.layers,this.add(a);const o=new ii(es,ns,t,e);o.layers=this.layers,this.add(o);const l=new ii(es,ns,t,e);l.layers=this.layers,this.add(l);const c=new ii(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class od extends on{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class i_ extends Br{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new od(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new La(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Ji});s.uniforms.tEquirect.value=e;const a=new fi(i,s),o=e.minFilter;return e.minFilter===wr&&(e.minFilter=mn),new n_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Pl=new Y,r_=new Y,s_=new Kt;class vr{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Pl.subVectors(n,e).cross(r_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||s_.getNormalMatrix(t),i=this.coplanarPoint(Pl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Jo,Za=new Y;class ld{constructor(t=new vr,e=new vr,n=new vr,i=new vr,s=new vr,a=new vr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,h-c,p-d,M-m).normalize(),n[1].setComponents(l+s,h+c,p+d,M+m).normalize(),n[2].setComponents(l+a,h+u,p+_,M+y).normalize(),n[3].setComponents(l-a,h-u,p-_,M-y).normalize(),n[4].setComponents(l-o,h-f,p-g,M-x).normalize(),e===Ri)n[5].setComponents(l+o,h+f,p+g,M+x).normalize();else if(e===Bo)n[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Za.x=i.normal.x>0?t.max.x:t.min.x,Za.y=i.normal.y>0?t.max.y:t.min.y,Za.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Za)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function a_(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Da extends Fi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,h=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*h-a;for(let x=0;x<c;x++){const M=x*f-s;_.push(M,-y,0),g.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,M=y+c*(m+1),R=y+1+c*(m+1),A=y+1+c*m;d.push(x,M,A),d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new Cr(_,3)),this.setAttribute("normal",new Cr(g,3)),this.setAttribute("uv",new Cr(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.width,t.height,t.widthSegments,t.heightSegments)}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
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
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
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
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S_=`#ifdef USE_IRIDESCENCE
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
#endif`,M_=`#ifdef USE_BUMPMAP
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D_=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j_=`#ifdef USE_GRADIENTMAP
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
}`,$_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Q_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wg=`#ifndef FLAT_SHADED
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
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
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
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,x0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,M0=`uniform vec3 diffuse;
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
}`,y0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,T0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,w0=`#define NORMAL
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
}`,A0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R0=`#define PHONG
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
}`,C0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,P0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,D0=`#define TOON
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
}`,I0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,U0=`uniform float size;
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
}`,N0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,B0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:o_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:u_,alphatest_fragment:h_,alphatest_pars_fragment:f_,aomap_fragment:d_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:__,begin_vertex:g_,beginnormal_vertex:v_,bsdfs:x_,iridescence_fragment:S_,bumpmap_pars_fragment:M_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:E_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:b_,color_fragment:w_,color_pars_fragment:A_,color_pars_vertex:R_,color_vertex:C_,common:P_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:D_,displacementmap_pars_vertex:I_,displacementmap_vertex:U_,emissivemap_fragment:N_,emissivemap_pars_fragment:F_,colorspace_fragment:O_,colorspace_pars_fragment:B_,envmap_fragment:z_,envmap_common_pars_fragment:k_,envmap_pars_fragment:H_,envmap_pars_vertex:G_,envmap_physical_pars_fragment:Q_,envmap_vertex:V_,fog_vertex:W_,fog_pars_vertex:X_,fog_fragment:Y_,fog_pars_fragment:q_,gradientmap_pars_fragment:j_,lightmap_pars_fragment:$_,lights_lambert_fragment:K_,lights_lambert_pars_fragment:Z_,lights_pars_begin:J_,lights_toon_fragment:tg,lights_toon_pars_fragment:eg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:rg,lights_physical_pars_fragment:sg,lights_fragment_begin:ag,lights_fragment_maps:og,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:fg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:_g,metalnessmap_fragment:gg,metalnessmap_pars_fragment:vg,morphinstance_vertex:xg,morphcolor_vertex:Sg,morphnormal_vertex:Mg,morphtarget_pars_vertex:yg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:bg,normal_pars_fragment:wg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ig,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:Yg,skinning_pars_vertex:qg,skinning_vertex:jg,skinnormal_vertex:$g,specularmap_fragment:Kg,specularmap_pars_fragment:Zg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:r0,worldpos_vertex:s0,background_vert:a0,background_frag:o0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:u0,cube_frag:h0,depth_vert:f0,depth_frag:d0,distanceRGBA_vert:p0,distanceRGBA_frag:m0,equirect_vert:_0,equirect_frag:g0,linedashed_vert:v0,linedashed_frag:x0,meshbasic_vert:S0,meshbasic_frag:M0,meshlambert_vert:y0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:b0,meshnormal_vert:w0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:P0,meshphysical_frag:L0,meshtoon_vert:D0,meshtoon_frag:I0,points_vert:U0,points_frag:N0,shadow_vert:F0,shadow_frag:O0,sprite_vert:B0,sprite_frag:z0},mt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},ui={basic:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new me(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:hn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:hn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:hn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new me(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:hn([mt.points,mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:hn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:hn([mt.common,mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:hn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:hn([mt.sprite,mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:hn([mt.common,mt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:hn([mt.lights,mt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ui.physical={uniforms:hn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ja={r:0,b:0,g:0},pr=new Di,k0=new Be;function H0(r,t,e,n,i,s,a){const o=new me(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const M=_(y);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===Ko)?(u===void 0&&(u=new fi(new La(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Cs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pr.copy(x.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(pr)),u.material.toneMapped=fe.getTransfer(M.colorSpace)!==Ee,(f!==M||h!==M.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new fi(new Da(2,2),new Ii({name:"BackgroundMaterial",uniforms:Cs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=fe.getTransfer(M.colorSpace)!==Ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Ja,sd(r)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:g,addToRenderList:p}}function G0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(v,T,N,z,W){let $=!1;const G=f(z,N,T);s!==G&&(s=G,c(s.object)),$=d(v,z,N,W),$&&_(v,z,N,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(v,T,N,z),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,T,N){const z=N.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let $=W[T.id];$===void 0&&($={},W[T.id]=$);let G=$[z];return G===void 0&&(G=h(l()),$[z]=G),G}function h(v){const T=[],N=[],z=[];for(let W=0;W<e;W++)T[W]=0,N[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:N,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,T,N,z){const W=s.attributes,$=T.attributes;let G=0;const X=N.getAttributes();for(const V in X)if(X[V].location>=0){const C=W[V];let ot=$[V];if(ot===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),C===void 0||C.attribute!==ot||ot&&C.data!==ot.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(v,T,N,z){const W={},$=T.attributes;let G=0;const X=N.getAttributes();for(const V in X)if(X[V].location>=0){let C=$[V];C===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(C=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(C=v.instanceColor));const ot={};ot.attribute=C,C&&C.data&&(ot.data=C.data),W[V]=ot,G++}s.attributes=W,s.attributesNum=G,s.index=z}function g(){const v=s.newAttributes;for(let T=0,N=v.length;T<N;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const N=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;N[v]=1,z[v]===0&&(r.enableVertexAttribArray(v),z[v]=1),W[v]!==T&&(r.vertexAttribDivisor(v,T),W[v]=T)}function y(){const v=s.newAttributes,T=s.enabledAttributes;for(let N=0,z=T.length;N<z;N++)T[N]!==v[N]&&(r.disableVertexAttribArray(N),T[N]=0)}function x(v,T,N,z,W,$,G){G===!0?r.vertexAttribIPointer(v,T,N,W,$):r.vertexAttribPointer(v,T,N,z,W,$)}function M(v,T,N,z){g();const W=z.attributes,$=N.getAttributes(),G=T.defaultAttributeValues;for(const X in $){const V=$[X];if(V.location>=0){let rt=W[X];if(rt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const C=rt.normalized,ot=rt.itemSize,Bt=t.get(rt);if(Bt===void 0)continue;const Xt=Bt.buffer,q=Bt.type,Q=Bt.bytesPerElement,ft=q===r.INT||q===r.UNSIGNED_INT||rt.gpuType===du;if(rt.isInterleavedBufferAttribute){const at=rt.data,wt=at.stride,yt=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Wt=0;Wt<V.locationSize;Wt++)m(V.location+Wt,at.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Wt=0;Wt<V.locationSize;Wt++)p(V.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let Wt=0;Wt<V.locationSize;Wt++)x(V.location+Wt,ot/V.locationSize,q,C,wt*Q,(yt+ot/V.locationSize*Wt)*Q,ft)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,rt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let at=0;at<V.locationSize;at++)x(V.location+at,ot/V.locationSize,q,C,ot*Q,ot/V.locationSize*at*Q,ft)}}else if(G!==void 0){const C=G[X];if(C!==void 0)switch(C.length){case 2:r.vertexAttrib2fv(V.location,C);break;case 3:r.vertexAttrib3fv(V.location,C);break;case 4:r.vertexAttrib4fv(V.location,C);break;default:r.vertexAttrib1fv(V.location,C)}}}}y()}function R(){L();for(const v in n){const T=n[v];for(const N in T){const z=T[N];for(const W in z)u(z[W].object),delete z[W];delete T[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const N in T){const z=T[N];for(const W in z)u(z[W].object),delete z[W];delete T[N]}delete n[v.id]}function E(v){for(const T in n){const N=n[T];if(N[v.id]===void 0)continue;const z=N[v.id];for(const W in z)u(z[W].object),delete z[W];delete N[v.id]}}function L(){O(),a=!0,s!==i&&(s=i,c(s.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function V0(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<h.length;g++)e.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function W0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==si&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Li&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ai&&!L)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(h===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function X0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new vr,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=u(_,h,x,d);for(let R=0;R!==x;++R)M[R]=e[R];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=d;x!==g;++x,M+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Y0(r){let t=new WeakMap;function e(a,o){return o===cc?a.mapping=bs:o===uc&&(a.mapping=ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cc||o===uc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new i_(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ud extends ad{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,vh=[.125,.215,.35,.446,.526,.582],Tr=20,Ll=new ud,xh=new me;let Dl=null,Il=0,Ul=0,Nl=!1;const xr=(1+Math.sqrt(5))/2,is=1/xr,Sh=[new Y(-xr,is,0),new Y(xr,is,0),new Y(-is,0,xr),new Y(is,0,xr),new Y(0,xr,-is),new Y(0,xr,is),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Mh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Dl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dl,Il,Ul),this._renderer.xr.enabled=Nl,t.scissorTest=!1,Qa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:wa,format:si,colorSpace:lr,depthBuffer:!1},i=yh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(s)),this._blurMaterial=j0(s,t,e)}return i}_compileMaterial(t){const e=new fi(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,n,i){const o=new ii(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(xh),u.toneMapping=Qi,u.autoClear=!1;const d=new nd({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new fi(new La,d);let g=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,g=!0):(d.color.copy(xh),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Qa(i,y*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bs||t.mapping===ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new fi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Qa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ll)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sh[(i-s-1)%Sh.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new fi(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Tr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Tr;p>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const m=[];let y=0;for(let E=0;E<Tr;++E){const L=E/g,O=Math.exp(-L*L/2);m.push(O),E===0?y+=O:E<p&&(y+=2*O)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const M=this._sizeLods[i],R=3*M*(i>x-us?i-x+us:0),A=4*(this._cubeSize-M);Qa(e,R,A,3*M,2*M),l.setRenderTarget(e),l.render(f,Ll)}}function q0(r){const t=[],e=[],n=[];let i=r;const s=r-us+1+vh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-us?l=vh[a-r+us-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),x=new Float32Array(p*_*d),M=new Float32Array(m*_*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,L=A>2?0:-1,O=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];y.set(O,g*_*A),x.set(h,p*_*A);const v=[A,A,A,A,A,A];M.set(v,m*_*A)}const R=new Fi;R.setAttribute("position",new ai(y,g)),R.setAttribute("uv",new ai(x,p)),R.setAttribute("faceIndex",new ai(M,m)),t.push(R),i>us&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yh(r,t,e){const n=new Br(r,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function j0(r,t,e){const n=new Float32Array(Tr),i=new Y(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Eh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Th(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cc||l===uc,u=l===bs||l===ws;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Mh(r)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Mh(r)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function K0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Z0(r,t,e,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let x=0,M=y.length;x<M;x+=3){const R=y[x+0],A=y[x+1],E=y[x+2];h.push(R,A,A,E,E,R)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const R=x+0,A=x+1,E=x+2;h.push(R,A,A,E,E,R)}}else return;const p=new(Kf(h)?rd:id)(h,1);p.version=g;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function J0(r,t,e){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*a),e.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*a,_),e.update(d,n,_))}function u(h,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function f(h,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/a,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=d[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Q0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tv(r,t,e){const n=new WeakMap,i=new Ne;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let R=o.attributes.position.count*M,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*A*4*f),L=new Jf(E,R,A,f);L.type=Ai,L.needsUpdate=!0;const O=M*4;for(let T=0;T<f;T++){const N=m[T],z=y[T],W=x[T],$=R*A*4*T;for(let G=0;G<N.count;G++){const X=G*O;_===!0&&(i.fromBufferAttribute(N,G),E[$+X+0]=i.x,E[$+X+1]=i.y,E[$+X+2]=i.z,E[$+X+3]=0),g===!0&&(i.fromBufferAttribute(z,G),E[$+X+4]=i.x,E[$+X+5]=i.y,E[$+X+6]=i.z,E[$+X+7]=0),p===!0&&(i.fromBufferAttribute(W,G),E[$+X+8]=i.x,E[$+X+9]=i.y,E[$+X+10]=i.z,E[$+X+11]=W.itemSize===4?i.w:1)}}h={count:f,texture:L,size:new ce(R,A)},n.set(o,h),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function ev(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class hd extends on{constructor(t,e,n,i,s,a,o,l,c,u=ms){if(u!==ms&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=Or),n===void 0&&u===Rs&&(n=As),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fd=new on,bh=new hd(1,1),dd=new Jf,pd=new Hm,md=new od,wh=[],Ah=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function Os(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=wh[i];if(s===void 0&&(s=new Float32Array(i),wh[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qo(r,t){let e=Ah[t];e===void 0&&(e=new Int32Array(t),Ah[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function nv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function iv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function rv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function sv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function av(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Ph.set(n),r.uniformMatrix2fv(this.addr,!1,Ph),Xe(e,n)}}function ov(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Ch.set(n),r.uniformMatrix3fv(this.addr,!1,Ch),Xe(e,n)}}function lv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Rh.set(n),r.uniformMatrix4fv(this.addr,!1,Rh),Xe(e,n)}}function cv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function uv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function hv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function fv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function dv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function mv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function _v(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function gv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(bh.compareFunction=$f,s=bh):s=fd,e.setTexture2D(t||s,i)}function vv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pd,i)}function xv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||md,i)}function Sv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dd,i)}function Mv(r){switch(r){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return sv;case 35674:return av;case 35675:return ov;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return uv;case 35668:case 35672:return hv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return pv;case 36295:return mv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return Sv}}function yv(r,t){r.uniform1fv(this.addr,t)}function Ev(r,t){const e=Os(t,this.size,2);r.uniform2fv(this.addr,e)}function Tv(r,t){const e=Os(t,this.size,3);r.uniform3fv(this.addr,e)}function bv(r,t){const e=Os(t,this.size,4);r.uniform4fv(this.addr,e)}function wv(r,t){const e=Os(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Av(r,t){const e=Os(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Rv(r,t){const e=Os(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Cv(r,t){r.uniform1iv(this.addr,t)}function Pv(r,t){r.uniform2iv(this.addr,t)}function Lv(r,t){r.uniform3iv(this.addr,t)}function Dv(r,t){r.uniform4iv(this.addr,t)}function Iv(r,t){r.uniform1uiv(this.addr,t)}function Uv(r,t){r.uniform2uiv(this.addr,t)}function Nv(r,t){r.uniform3uiv(this.addr,t)}function Fv(r,t){r.uniform4uiv(this.addr,t)}function Ov(r,t,e){const n=this.cache,i=t.length,s=Qo(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||fd,s[a])}function Bv(r,t,e){const n=this.cache,i=t.length,s=Qo(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||pd,s[a])}function zv(r,t,e){const n=this.cache,i=t.length,s=Qo(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||md,s[a])}function kv(r,t,e){const n=this.cache,i=t.length,s=Qo(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||dd,s[a])}function Hv(r){switch(r){case 5126:return yv;case 35664:return Ev;case 35665:return Tv;case 35666:return bv;case 35674:return wv;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Iv;case 36294:return Uv;case 36295:return Nv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return kv}}class Gv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mv(e.type)}}class Vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hv(e.type)}}class Wv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function Lh(r,t){r.seq.push(t),r.map[t.id]=t}function Xv(r,t,e){const n=r.name,i=n.length;for(Fl.lastIndex=0;;){const s=Fl.exec(n),a=Fl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Lh(e,c===void 0?new Gv(o,r,t):new Vv(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new Wv(o),Lh(e,f)),e=f}}}class bo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Xv(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Dh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Yv=37297;let qv=0;function jv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function $v(r){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(r);let n;switch(t===e?n="":t===Oo&&e===Fo?n="LinearDisplayP3ToLinearSRGB":t===Fo&&e===Oo&&(n="LinearSRGBToLinearDisplayP3"),r){case lr:case Zo:return[n,"LinearTransferOETF"];case oi:case xu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ih(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+jv(r.getShaderSource(t),a)}else return i}function Kv(r,t){const e=$v(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zv(r,t){let e;switch(t){case fm:e="Linear";break;case dm:e="Reinhard";break;case pm:e="Cineon";break;case mm:e="ACESFilmic";break;case gm:e="AgX";break;case vm:e="Neutral";break;case _m:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const to=new Y;function Jv(){fe.getLuminanceCoefficients(to);const r=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function tx(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ex(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function js(r){return r!==""}function Uh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(r){return r.replace(nx,rx)}const ix=new Map;function rx(r,t){let e=$t[t];if(e===void 0){const n=ix.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(r){return r.replace(sx,ax)}function ax(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ox(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function lx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bs:case ws:t="ENVMAP_TYPE_CUBE";break;case Ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function ux(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Of:t="ENVMAP_BLENDING_MULTIPLY";break;case um:t="ENVMAP_BLENDING_MIX";break;case hm:t="ENVMAP_BLENDING_ADD";break}return t}function hx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fx(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ox(e),c=lx(e),u=cx(e),f=ux(e),h=hx(e),d=Qv(e),_=tx(s),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(js).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`)):(p=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),m=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qi?"#define TONE_MAPPING":"",e.toneMapping!==Qi?$t.tonemapping_pars_fragment:"",e.toneMapping!==Qi?Zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Kv("linearToOutputTexel",e.outputColorSpace),Jv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),a=kc(a),a=Uh(a,e),a=Nh(a,e),o=kc(o),o=Uh(o,e),o=Nh(o,e),a=Fh(a),o=Fh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+a,M=y+m+o,R=Dh(i,i.VERTEX_SHADER,x),A=Dh(i,i.FRAGMENT_SHADER,M);i.attachShader(g,R),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(T){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(A).trim();let $=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const X=Ih(i,R,"vertex"),V=Ih(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+X+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||W==="")&&(G=!1);G&&(T.diagnostics={runnable:$,programLog:N,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(R),i.deleteShader(A),L=new bo(i,g),O=ex(i,g)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let O;this.getAttributes=function(){return O===void 0&&E(this),O};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,Yv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let dx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mx(t),e.set(t,n)),n}}class mx{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}}function _x(r,t,e,n,i,s,a){const o=new td,l=new px,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,N,z,W){const $=z.fog,G=W.geometry,X=v.isMeshStandardMaterial?z.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),rt=V&&V.mapping===Ko?V.image.height:null,C=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Bt=ot!==void 0?ot.length:0;let Xt=0;G.morphAttributes.position!==void 0&&(Xt=1),G.morphAttributes.normal!==void 0&&(Xt=2),G.morphAttributes.color!==void 0&&(Xt=3);let q,Q,ft,at;if(C){const Rt=ui[C];q=Rt.vertexShader,Q=Rt.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);const wt=r.getRenderTarget(),yt=W.isInstancedMesh===!0,Wt=W.isBatchedMesh===!0,Gt=!!v.map,Nt=!!v.matcap,P=!!V,re=!!v.aoMap,Ft=!!v.lightMap,zt=!!v.bumpMap,F=!!v.normalMap,Zt=!!v.displacementMap,Lt=!!v.emissiveMap,w=!!v.metalnessMap,S=!!v.roughnessMap,H=v.anisotropy>0,Z=v.clearcoat>0,et=v.dispersion>0,K=v.iridescence>0,St=v.sheen>0,it=v.transmission>0,dt=H&&!!v.anisotropyMap,Ht=Z&&!!v.clearcoatMap,nt=Z&&!!v.clearcoatNormalMap,vt=Z&&!!v.clearcoatRoughnessMap,xt=K&&!!v.iridescenceMap,It=K&&!!v.iridescenceThicknessMap,gt=St&&!!v.sheenColorMap,Yt=St&&!!v.sheenRoughnessMap,Ot=!!v.specularMap,se=!!v.specularColorMap,D=!!v.specularIntensityMap,tt=it&&!!v.transmissionMap,j=it&&!!v.thicknessMap,J=!!v.gradientMap,lt=!!v.alphaMap,ct=v.alphaTest>0,qt=!!v.alphaHash,ge=!!v.extensions;let Te=Qi;v.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Te=r.toneMapping);const ne={shaderID:C,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Wt,batchingColor:Wt&&W._colorsTexture!==null,instancing:yt,instancingColor:yt&&W.instanceColor!==null,instancingMorph:yt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:wt===null?r.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:lr,alphaToCoverage:!!v.alphaToCoverage,map:Gt,matcap:Nt,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:rt,aoMap:re,lightMap:Ft,bumpMap:zt,normalMap:F,displacementMap:d&&Zt,emissiveMap:Lt,normalMapObjectSpace:F&&v.normalMapType===Em,normalMapTangentSpace:F&&v.normalMapType===ym,metalnessMap:w,roughnessMap:S,anisotropy:H,anisotropyMap:dt,clearcoat:Z,clearcoatMap:Ht,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:et,iridescence:K,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:St,sheenColorMap:gt,sheenRoughnessMap:Yt,specularMap:Ot,specularColorMap:se,specularIntensityMap:D,transmission:it,transmissionMap:tt,thicknessMap:j,gradientMap:J,opaque:v.transparent===!1&&v.blending===ps&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:ct,alphaHash:qt,combine:v.combine,mapUv:Gt&&p(v.map.channel),aoMapUv:re&&p(v.aoMap.channel),lightMapUv:Ft&&p(v.lightMap.channel),bumpMapUv:zt&&p(v.bumpMap.channel),normalMapUv:F&&p(v.normalMap.channel),displacementMapUv:Zt&&p(v.displacementMap.channel),emissiveMapUv:Lt&&p(v.emissiveMap.channel),metalnessMapUv:w&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:dt&&p(v.anisotropyMap.channel),clearcoatMapUv:Ht&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:It&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(v.sheenRoughnessMap.channel),specularMapUv:Ot&&p(v.specularMap.channel),specularColorMapUv:se&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:j&&p(v.thicknessMap.channel),alphaMapUv:lt&&p(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(F||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!G.attributes.uv&&(Gt||lt),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:Xt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:Gt&&v.map.isVideoTexture===!0&&fe.getTransfer(v.map.colorSpace)===Ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bi,flipSided:v.side===Mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&v.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function y(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)T.push(N),T.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const T=g[v.type];let N;if(T){const z=ui[T];N=Qm.clone(z.uniforms)}else N=v.uniforms;return N}function A(v,T){let N;for(let z=0,W=u.length;z<W;z++){const $=u[z];if($.cacheKey===T){N=$,++N.usedTimes;break}}return N===void 0&&(N=new fx(r,T,v,s),u.push(N)),N}function E(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function L(v){l.remove(v)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:A,releaseProgram:E,releaseShaderCache:L,programs:u,dispose:O}}function gx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function vx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Bh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,h,d,_,g,p){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},r[t]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),t++,m}function o(f,h,d,_,g,p){const m=a(f,h,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(f,h,d,_,g,p){const m=a(f,h,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(f,h){e.length>1&&e.sort(f||vx),n.length>1&&n.sort(h||Bh),i.length>1&&i.sort(h||Bh)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function xx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new zh,r.set(n,[a])):i>=s.length?(a=new zh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Sx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new me};break;case"SpotLight":e={position:new Y,direction:new Y,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function Mx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let yx=0;function Ex(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Tx(r){const t=new Sx,e=Mx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new Be,a=new Be;function o(c){let u=0,f=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,y=0,x=0,M=0,R=0,A=0,E=0;c.sort(Ex);for(let O=0,v=c.length;O<v;O++){const T=c[O],N=T.color,z=T.intensity,W=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=N.r*z,f+=N.g*z,h+=N.b*z;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],z);E++}else if(T.isDirectionalLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,V=e.get(T);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=T.shadow.matrix,y++}n.directional[d]=G,d++}else if(T.isSpotLight){const G=t.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(N).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[g]=G;const X=T.shadow;if(T.map&&(n.spotLightMap[R]=T.map,R++,X.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[g]=X.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=$,M++}g++}else if(T.isRectAreaLight){const G=t.get(T);G.color.copy(N).multiplyScalar(z),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=G,p++}else if(T.isPointLight){const G=t.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const X=T.shadow,V=e.get(T);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=G,_++}else if(T.isHemisphereLight){const G=t.get(T);G.skyColor.copy(T.color).multiplyScalar(z),G.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==d||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==y||L.numPointShadows!==x||L.numSpotShadows!==M||L.numSpotMaps!==R||L.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,L.directionalLength=d,L.pointLength=_,L.spotLength=g,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=y,L.numPointShadows=x,L.numSpotShadows=M,L.numSpotMaps=R,L.numLightProbes=E,n.version=yx++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function kh(r){const t=new Tx(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function bx(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new kh(r),t.set(i,[o])):s>=a.length?(o=new kh(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class wx extends Pa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ax extends Pa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Px(r,t,e){let n=new ld;const i=new ce,s=new ce,a=new Ne,o=new wx({depthPacking:Mm}),l=new Ax,c={},u=e.maxTextureSize,f={[ir]:Mn,[Mn]:ir,[bi]:bi},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Fi;_.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fi(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let m=this.type;this.render=function(A,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const O=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Ji),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=m!==yi&&this.type===yi,W=m===yi&&this.type!==yi;for(let $=0,G=A.length;$<G;$++){const X=A[$],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const rt=V.getFrameExtents();if(i.multiply(rt),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/rt.x),i.x=s.x*rt.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/rt.y),i.y=s.y*rt.y,V.mapSize.y=s.y)),V.map===null||z===!0||W===!0){const ot=this.type!==yi?{minFilter:jn,magFilter:jn}:{};V.map!==null&&V.map.dispose(),V.map=new Br(i.x,i.y,ot),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const C=V.getViewportCount();for(let ot=0;ot<C;ot++){const Bt=V.getViewport(ot);a.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),N.viewport(a),V.updateMatrices(X,ot),n=V.getFrustum(),M(E,L,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===yi&&y(V,L),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(O,v,T)};function y(A,E){const L=t.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Br(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,L,h,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,L,d,g,null)}function x(A,E,L,O){let v=null;const T=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=L.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,z=E.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let $=W[z];$===void 0&&($=v.clone(),W[z]=$,E.addEventListener("dispose",R)),v=$}if(v.visible=E.visible,v.wireframe=E.wireframe,O===yi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=L}return v}function M(A,E,L,O,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===yi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const z=t.update(A),W=A.material;if(Array.isArray(W)){const $=z.groups;for(let G=0,X=$.length;G<X;G++){const V=$[G],rt=W[V.materialIndex];if(rt&&rt.visible){const C=x(A,rt,O,v);A.onBeforeShadow(r,A,E,L,z,C,V),r.renderBufferDirect(L,null,z,C,A,V),A.onAfterShadow(r,A,E,L,z,C,V)}}}else if(W.visible){const $=x(A,W,O,v);A.onBeforeShadow(r,A,E,L,z,$,null),r.renderBufferDirect(L,null,z,$,A,null),A.onAfterShadow(r,A,E,L,z,$,null)}}const N=A.children;for(let z=0,W=N.length;z<W;z++)M(N[z],E,L,O,v)}function R(A){A.target.removeEventListener("dispose",R);for(const L in c){const O=c[L],v=A.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}const Lx={[nc]:ic,[rc]:oc,[sc]:lc,[Ts]:ac,[ic]:nc,[oc]:rc,[lc]:sc,[ac]:Ts};function Dx(r){function t(){let D=!1;const tt=new Ne;let j=null;const J=new Ne(0,0,0,0);return{setMask:function(lt){j!==lt&&!D&&(r.colorMask(lt,lt,lt,lt),j=lt)},setLocked:function(lt){D=lt},setClear:function(lt,ct,qt,ge,Te){Te===!0&&(lt*=ge,ct*=ge,qt*=ge),tt.set(lt,ct,qt,ge),J.equals(tt)===!1&&(r.clearColor(lt,ct,qt,ge),J.copy(tt))},reset:function(){D=!1,j=null,J.set(-1,0,0,0)}}}function e(){let D=!1,tt=!1,j=null,J=null,lt=null;return{setReversed:function(ct){tt=ct},setTest:function(ct){ct?ft(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(ct){j!==ct&&!D&&(r.depthMask(ct),j=ct)},setFunc:function(ct){if(tt&&(ct=Lx[ct]),J!==ct){switch(ct){case nc:r.depthFunc(r.NEVER);break;case ic:r.depthFunc(r.ALWAYS);break;case rc:r.depthFunc(r.LESS);break;case Ts:r.depthFunc(r.LEQUAL);break;case sc:r.depthFunc(r.EQUAL);break;case ac:r.depthFunc(r.GEQUAL);break;case oc:r.depthFunc(r.GREATER);break;case lc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ct}},setLocked:function(ct){D=ct},setClear:function(ct){lt!==ct&&(r.clearDepth(ct),lt=ct)},reset:function(){D=!1,j=null,J=null,lt=null}}}function n(){let D=!1,tt=null,j=null,J=null,lt=null,ct=null,qt=null,ge=null,Te=null;return{setTest:function(ne){D||(ne?ft(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(ne){tt!==ne&&!D&&(r.stencilMask(ne),tt=ne)},setFunc:function(ne,Rt,Et){(j!==ne||J!==Rt||lt!==Et)&&(r.stencilFunc(ne,Rt,Et),j=ne,J=Rt,lt=Et)},setOp:function(ne,Rt,Et){(ct!==ne||qt!==Rt||ge!==Et)&&(r.stencilOp(ne,Rt,Et),ct=ne,qt=Rt,ge=Et)},setLocked:function(ne){D=ne},setClear:function(ne){Te!==ne&&(r.clearStencil(ne),Te=ne)},reset:function(){D=!1,tt=null,j=null,J=null,lt=null,ct=null,qt=null,ge=null,Te=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,y=null,x=null,M=null,R=null,A=new me(0,0,0),E=0,L=!1,O=null,v=null,T=null,N=null,z=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=G>=2);let V=null,rt={};const C=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),Bt=new Ne().fromArray(C),Xt=new Ne().fromArray(ot);function q(D,tt,j,J){const lt=new Uint8Array(4),ct=r.createTexture();r.bindTexture(D,ct),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<j;qt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(tt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ct}const Q={};Q[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ft(r.DEPTH_TEST),s.setFunc(Ts),Ft(!1),zt($u),ft(r.CULL_FACE),P(Ji);function ft(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function at(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function wt(D,tt){return u[D]!==tt?(r.bindFramebuffer(D,tt),u[D]=tt,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function yt(D,tt){let j=h,J=!1;if(D){j=f.get(tt),j===void 0&&(j=[],f.set(tt,j));const lt=D.textures;if(j.length!==lt.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,qt=lt.length;ct<qt;ct++)j[ct]=r.COLOR_ATTACHMENT0+ct;j.length=lt.length,J=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,J=!0);J&&r.drawBuffers(j)}function Wt(D){return d!==D?(r.useProgram(D),d=D,!0):!1}const Gt={[Er]:r.FUNC_ADD,[qp]:r.FUNC_SUBTRACT,[jp]:r.FUNC_REVERSE_SUBTRACT};Gt[$p]=r.MIN,Gt[Kp]=r.MAX;const Nt={[Zp]:r.ZERO,[Jp]:r.ONE,[Qp]:r.SRC_COLOR,[tc]:r.SRC_ALPHA,[sm]:r.SRC_ALPHA_SATURATE,[im]:r.DST_COLOR,[em]:r.DST_ALPHA,[tm]:r.ONE_MINUS_SRC_COLOR,[ec]:r.ONE_MINUS_SRC_ALPHA,[rm]:r.ONE_MINUS_DST_COLOR,[nm]:r.ONE_MINUS_DST_ALPHA,[am]:r.CONSTANT_COLOR,[om]:r.ONE_MINUS_CONSTANT_COLOR,[lm]:r.CONSTANT_ALPHA,[cm]:r.ONE_MINUS_CONSTANT_ALPHA};function P(D,tt,j,J,lt,ct,qt,ge,Te,ne){if(D===Ji){_===!0&&(at(r.BLEND),_=!1);return}if(_===!1&&(ft(r.BLEND),_=!0),D!==Yp){if(D!==g||ne!==L){if((p!==Er||x!==Er)&&(r.blendEquation(r.FUNC_ADD),p=Er,x=Er),ne)switch(D){case ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ql:r.blendFunc(r.ONE,r.ONE);break;case Ku:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ql:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ku:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,M=null,R=null,A.set(0,0,0),E=0,g=D,L=ne}return}lt=lt||tt,ct=ct||j,qt=qt||J,(tt!==p||lt!==x)&&(r.blendEquationSeparate(Gt[tt],Gt[lt]),p=tt,x=lt),(j!==m||J!==y||ct!==M||qt!==R)&&(r.blendFuncSeparate(Nt[j],Nt[J],Nt[ct],Nt[qt]),m=j,y=J,M=ct,R=qt),(ge.equals(A)===!1||Te!==E)&&(r.blendColor(ge.r,ge.g,ge.b,Te),A.copy(ge),E=Te),g=D,L=!1}function re(D,tt){D.side===bi?at(r.CULL_FACE):ft(r.CULL_FACE);let j=D.side===Mn;tt&&(j=!j),Ft(j),D.blending===ps&&D.transparent===!1?P(Ji):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),i.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Zt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(D){O!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),O=D)}function zt(D){D!==Vp?(ft(r.CULL_FACE),D!==v&&(D===$u?r.cullFace(r.BACK):D===Wp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),v=D}function F(D){D!==T&&($&&r.lineWidth(D),T=D)}function Zt(D,tt,j){D?(ft(r.POLYGON_OFFSET_FILL),(N!==tt||z!==j)&&(r.polygonOffset(tt,j),N=tt,z=j)):at(r.POLYGON_OFFSET_FILL)}function Lt(D){D?ft(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function w(D){D===void 0&&(D=r.TEXTURE0+W-1),V!==D&&(r.activeTexture(D),V=D)}function S(D,tt,j){j===void 0&&(V===null?j=r.TEXTURE0+W-1:j=V);let J=rt[j];J===void 0&&(J={type:void 0,texture:void 0},rt[j]=J),(J.type!==D||J.texture!==tt)&&(V!==j&&(r.activeTexture(j),V=j),r.bindTexture(D,tt||Q[D]),J.type=D,J.texture=tt)}function H(){const D=rt[V];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(D){Bt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Bt.copy(D))}function gt(D){Xt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Xt.copy(D))}function Yt(D,tt){let j=l.get(tt);j===void 0&&(j=new WeakMap,l.set(tt,j));let J=j.get(D);J===void 0&&(J=r.getUniformBlockIndex(tt,D.name),j.set(D,J))}function Ot(D,tt){const J=l.get(tt).get(D);o.get(tt)!==J&&(r.uniformBlockBinding(tt,J,D.__bindingPointIndex),o.set(tt,J))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,rt={},u={},f=new WeakMap,h=[],d=null,_=!1,g=null,p=null,m=null,y=null,x=null,M=null,R=null,A=new me(0,0,0),E=0,L=!1,O=null,v=null,T=null,N=null,z=null,Bt.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ft,disable:at,bindFramebuffer:wt,drawBuffers:yt,useProgram:Wt,setBlending:P,setMaterial:re,setFlipSided:Ft,setCullFace:zt,setLineWidth:F,setPolygonOffset:Zt,setScissorTest:Lt,activeTexture:w,bindTexture:S,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:vt,texImage3D:xt,updateUBOMapping:Yt,uniformBlockBinding:Ot,texStorage2D:Ht,texStorage3D:nt,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:it,compressedTexSubImage3D:dt,scissor:It,viewport:gt,reset:se}}function Hh(r,t,e,n){const i=Ix(n);switch(e){case Gf:return r*t;case Wf:return r*t;case Xf:return r*t*2;case Yf:return r*t/i.components*i.byteLength;case _u:return r*t/i.components*i.byteLength;case qf:return r*t*2/i.components*i.byteLength;case gu:return r*t*2/i.components*i.byteLength;case Vf:return r*t*3/i.components*i.byteLength;case si:return r*t*4/i.components*i.byteLength;case vu:return r*t*4/i.components*i.byteLength;case xo:case So:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mo:case yo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pc:case _c:return Math.max(r,16)*Math.max(t,8)/4;case dc:case mc:return Math.max(r,8)*Math.max(t,8)/2;case gc:case vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Eo:case Uc:case Nc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case jf:case Fc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Oc:case Bc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ix(r){switch(r){case Li:case zf:return{byteLength:1,components:1};case pa:case kf:case wa:return{byteLength:2,components:1};case pu:case mu:return{byteLength:2,components:4};case Or:case du:case Ai:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Ux(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return d?new OffscreenCanvas(w,S):ma("canvas")}function g(w,S,H){let Z=1;const et=Lt(w);if((et.width>H||et.height>H)&&(Z=H/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Z*et.width),St=Math.floor(Z*et.height);f===void 0&&(f=_(K,St));const it=S?_(K,St):f;return it.width=K,it.height=St,it.getContext("2d").drawImage(w,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+St+")."),it}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==jn&&w.minFilter!==mn}function m(w){r.generateMipmap(w)}function y(w,S,H,Z,et=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=S;if(S===r.RED&&(H===r.FLOAT&&(K=r.R32F),H===r.HALF_FLOAT&&(K=r.R16F),H===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.R8UI),H===r.UNSIGNED_SHORT&&(K=r.R16UI),H===r.UNSIGNED_INT&&(K=r.R32UI),H===r.BYTE&&(K=r.R8I),H===r.SHORT&&(K=r.R16I),H===r.INT&&(K=r.R32I)),S===r.RG&&(H===r.FLOAT&&(K=r.RG32F),H===r.HALF_FLOAT&&(K=r.RG16F),H===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RG8UI),H===r.UNSIGNED_SHORT&&(K=r.RG16UI),H===r.UNSIGNED_INT&&(K=r.RG32UI),H===r.BYTE&&(K=r.RG8I),H===r.SHORT&&(K=r.RG16I),H===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RGB8UI),H===r.UNSIGNED_SHORT&&(K=r.RGB16UI),H===r.UNSIGNED_INT&&(K=r.RGB32UI),H===r.BYTE&&(K=r.RGB8I),H===r.SHORT&&(K=r.RGB16I),H===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),H===r.UNSIGNED_INT&&(K=r.RGBA32UI),H===r.BYTE&&(K=r.RGBA8I),H===r.SHORT&&(K=r.RGBA16I),H===r.INT&&(K=r.RGBA32I)),S===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),S===r.RGBA){const St=et?No:fe.getTransfer(Z);H===r.FLOAT&&(K=r.RGBA32F),H===r.HALF_FLOAT&&(K=r.RGBA16F),H===r.UNSIGNED_BYTE&&(K=St===Ee?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(w,S){let H;return w?S===null||S===Or||S===As?H=r.DEPTH24_STENCIL8:S===Ai?H=r.DEPTH32F_STENCIL8:S===pa&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Or||S===As?H=r.DEPTH_COMPONENT24:S===Ai?H=r.DEPTH_COMPONENT32F:S===pa&&(H=r.DEPTH_COMPONENT16),H}function M(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==jn&&w.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function R(w){const S=w.target;S.removeEventListener("dispose",R),E(S),S.isVideoTexture&&u.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),O(S)}function E(w){const S=n.get(w);if(S.__webglInit===void 0)return;const H=w.source,Z=h.get(H);if(Z){const et=Z[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&L(w),Object.keys(Z).length===0&&h.delete(H)}n.remove(w)}function L(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const H=w.source,Z=h.get(H);delete Z[S.__cacheKey],a.memory.textures--}function O(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let et=0;et<S.__webglFramebuffer[Z].length;et++)r.deleteFramebuffer(S.__webglFramebuffer[Z][et]);else r.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Z]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=w.textures;for(let Z=0,et=H.length;Z<et;Z++){const K=n.get(H[Z]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(w)}let v=0;function T(){v=0}function N(){const w=v;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),v+=1,w}function z(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function W(w,S){const H=n.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(H,w,S);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+S)}function $(w,S){const H=n.get(w);if(w.version>0&&H.__version!==w.version){Xt(H,w,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+S)}function G(w,S){const H=n.get(w);if(w.version>0&&H.__version!==w.version){Xt(H,w,S);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+S)}function X(w,S){const H=n.get(w);if(w.version>0&&H.__version!==w.version){q(H,w,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+S)}const V={[hc]:r.REPEAT,[br]:r.CLAMP_TO_EDGE,[fc]:r.MIRRORED_REPEAT},rt={[jn]:r.NEAREST,[xm]:r.NEAREST_MIPMAP_NEAREST,[Ua]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[ol]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},C={[Tm]:r.NEVER,[Pm]:r.ALWAYS,[bm]:r.LESS,[$f]:r.LEQUAL,[wm]:r.EQUAL,[Cm]:r.GEQUAL,[Am]:r.GREATER,[Rm]:r.NOTEQUAL};function ot(w,S){if(S.type===Ai&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===ol||S.magFilter===Ua||S.magFilter===wr||S.minFilter===mn||S.minFilter===ol||S.minFilter===Ua||S.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,V[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,V[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,V[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,rt[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,C[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jn||S.minFilter!==Ua&&S.minFilter!==wr||S.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Bt(w,S){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",R));const Z=S.source;let et=h.get(Z);et===void 0&&(et={},h.set(Z,et));const K=z(S);if(K!==w.__cacheKey){et[K]===void 0&&(et[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[K].usedTimes++;const St=et[w.__cacheKey];St!==void 0&&(et[w.__cacheKey].usedTimes--,St.usedTimes===0&&L(S)),w.__cacheKey=K,w.__webglTexture=et[K].texture}return H}function Xt(w,S,H){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);const et=Bt(w,S),K=S.source;e.bindTexture(Z,w.__webglTexture,r.TEXTURE0+H);const St=n.get(K);if(K.version!==St.__version||et===!0){e.activeTexture(r.TEXTURE0+H);const it=fe.getPrimaries(fe.workingColorSpace),dt=S.colorSpace===Yi?null:fe.getPrimaries(S.colorSpace),Ht=S.colorSpace===Yi||it===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let nt=g(S.image,!1,i.maxTextureSize);nt=Zt(S,nt);const vt=s.convert(S.format,S.colorSpace),xt=s.convert(S.type);let It=y(S.internalFormat,vt,xt,S.colorSpace,S.isVideoTexture);ot(Z,S);let gt;const Yt=S.mipmaps,Ot=S.isVideoTexture!==!0,se=St.__version===void 0||et===!0,D=K.dataReady,tt=M(S,nt);if(S.isDepthTexture)It=x(S.format===Rs,S.type),se&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,It,nt.width,nt.height,0,vt,xt,null));else if(S.isDataTexture)if(Yt.length>0){Ot&&se&&e.texStorage2D(r.TEXTURE_2D,tt,It,Yt[0].width,Yt[0].height);for(let j=0,J=Yt.length;j<J;j++)gt=Yt[j],Ot?D&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,j,It,gt.width,gt.height,0,vt,xt,gt.data);S.generateMipmaps=!1}else Ot?(se&&e.texStorage2D(r.TEXTURE_2D,tt,It,nt.width,nt.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,xt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,It,nt.width,nt.height,0,vt,xt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ot&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,It,Yt[0].width,Yt[0].height,nt.depth);for(let j=0,J=Yt.length;j<J;j++)if(gt=Yt[j],S.format!==si)if(vt!==null)if(Ot){if(D)if(S.layerUpdates.size>0){const lt=Hh(gt.width,gt.height,S.format,S.type);for(const ct of S.layerUpdates){const qt=gt.data.subarray(ct*lt/gt.data.BYTES_PER_ELEMENT,(ct+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,ct,gt.width,gt.height,1,vt,qt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,nt.depth,vt,gt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,It,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,nt.depth,vt,xt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,It,gt.width,gt.height,nt.depth,0,vt,xt,gt.data)}else{Ot&&se&&e.texStorage2D(r.TEXTURE_2D,tt,It,Yt[0].width,Yt[0].height);for(let j=0,J=Yt.length;j<J;j++)gt=Yt[j],S.format!==si?vt!==null?Ot?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,j,It,gt.width,gt.height,0,vt,xt,gt.data)}else if(S.isDataArrayTexture)if(Ot){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,It,nt.width,nt.height,nt.depth),D)if(S.layerUpdates.size>0){const j=Hh(nt.width,nt.height,S.format,S.type);for(const J of S.layerUpdates){const lt=nt.data.subarray(J*j/nt.data.BYTES_PER_ELEMENT,(J+1)*j/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,vt,xt,lt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(S.isData3DTexture)Ot?(se&&e.texStorage3D(r.TEXTURE_3D,tt,It,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(S.isFramebufferTexture){if(se)if(Ot)e.texStorage2D(r.TEXTURE_2D,tt,It,nt.width,nt.height);else{let j=nt.width,J=nt.height;for(let lt=0;lt<tt;lt++)e.texImage2D(r.TEXTURE_2D,lt,It,j,J,0,vt,xt,null),j>>=1,J>>=1}}else if(Yt.length>0){if(Ot&&se){const j=Lt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,tt,It,j.width,j.height)}for(let j=0,J=Yt.length;j<J;j++)gt=Yt[j],Ot?D&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,vt,xt,gt):e.texImage2D(r.TEXTURE_2D,j,It,vt,xt,gt);S.generateMipmaps=!1}else if(Ot){if(se){const j=Lt(nt);e.texStorage2D(r.TEXTURE_2D,tt,It,j.width,j.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,xt,nt)}else e.texImage2D(r.TEXTURE_2D,0,It,vt,xt,nt);p(S)&&m(Z),St.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function q(w,S,H){if(S.image.length!==6)return;const Z=Bt(w,S),et=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+H);const K=n.get(et);if(et.version!==K.__version||Z===!0){e.activeTexture(r.TEXTURE0+H);const St=fe.getPrimaries(fe.workingColorSpace),it=S.colorSpace===Yi?null:fe.getPrimaries(S.colorSpace),dt=S.colorSpace===Yi||St===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!Ht&&!nt?vt[J]=g(S.image[J],!0,i.maxCubemapSize):vt[J]=nt?S.image[J].image:S.image[J],vt[J]=Zt(S,vt[J]);const xt=vt[0],It=s.convert(S.format,S.colorSpace),gt=s.convert(S.type),Yt=y(S.internalFormat,It,gt,S.colorSpace),Ot=S.isVideoTexture!==!0,se=K.__version===void 0||Z===!0,D=et.dataReady;let tt=M(S,xt);ot(r.TEXTURE_CUBE_MAP,S);let j;if(Ht){Ot&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Yt,xt.width,xt.height);for(let J=0;J<6;J++){j=vt[J].mipmaps;for(let lt=0;lt<j.length;lt++){const ct=j[lt];S.format!==si?It!==null?Ot?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ct.width,ct.height,It,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ct.width,ct.height,It,gt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Yt,ct.width,ct.height,0,It,gt,ct.data)}}}else{if(j=S.mipmaps,Ot&&se){j.length>0&&tt++;const J=Lt(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Yt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,It,gt,vt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,vt[J].width,vt[J].height,0,It,gt,vt[J].data);for(let lt=0;lt<j.length;lt++){const qt=j[lt].image[J].image;Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,qt.width,qt.height,It,gt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Yt,qt.width,qt.height,0,It,gt,qt.data)}}else{Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,gt,vt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Yt,It,gt,vt[J]);for(let lt=0;lt<j.length;lt++){const ct=j[lt];Ot?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,It,gt,ct.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Yt,It,gt,ct.image[J])}}}p(S)&&m(r.TEXTURE_CUBE_MAP),K.__version=et.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Q(w,S,H,Z,et,K){const St=s.convert(H.format,H.colorSpace),it=s.convert(H.type),dt=y(H.internalFormat,St,it,H.colorSpace);if(!n.get(S).__hasExternalTextures){const nt=Math.max(1,S.width>>K),vt=Math.max(1,S.height>>K);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,K,dt,nt,vt,S.depth,0,St,it,null):e.texImage2D(et,K,dt,nt,vt,0,St,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),zt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,et,n.get(H).__webglTexture,0,Ft(S)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,et,n.get(H).__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(w,S,H){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,K=x(S.stencilBuffer,et),St=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=Ft(S);zt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,K,S.width,S.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,w)}else{const Z=S.textures;for(let et=0;et<Z.length;et++){const K=Z[et],St=s.convert(K.format,K.colorSpace),it=s.convert(K.type),dt=y(K.internalFormat,St,it,K.colorSpace),Ht=Ft(S);H&&zt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,dt,S.width,S.height):zt(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht,dt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,dt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,et=Ft(S);if(S.depthTexture.format===ms)zt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Rs)zt(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function wt(w){const S=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,w)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=r.createRenderbuffer(),ft(S.__webglDepthbuffer[Z],w,!1);else{const et=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ft(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(w,S,H){const Z=n.get(w);S!==void 0&&Q(Z.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&wt(w)}function Wt(w){const S=w.texture,H=n.get(w),Z=n.get(S);w.addEventListener("dispose",A);const et=w.textures,K=w.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[it]=[];for(let dt=0;dt<S.mipmaps.length;dt++)H.__webglFramebuffer[it][dt]=r.createFramebuffer()}else H.__webglFramebuffer[it]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let it=0;it<S.mipmaps.length;it++)H.__webglFramebuffer[it]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(St)for(let it=0,dt=et.length;it<dt;it++){const Ht=n.get(et[it]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&zt(w)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){const dt=et[it];H.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[it]);const Ht=s.convert(dt.format,dt.colorSpace),nt=s.convert(dt.type),vt=y(dt.internalFormat,Ht,nt,dt.colorSpace,w.isXRRenderTarget===!0),xt=Ft(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,H.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ot(r.TEXTURE_CUBE_MAP,S);for(let it=0;it<6;it++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)Q(H.__webglFramebuffer[it][dt],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt);else Q(H.__webglFramebuffer[it],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(S)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let it=0,dt=et.length;it<dt;it++){const Ht=et[it],nt=n.get(Ht);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),ot(r.TEXTURE_2D,Ht),Q(H.__webglFramebuffer,w,Ht,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,0),p(Ht)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(it=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,Z.__webglTexture),ot(it,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)Q(H.__webglFramebuffer[dt],w,S,r.COLOR_ATTACHMENT0,it,dt);else Q(H.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,it,0);p(S)&&m(it),e.unbindTexture()}w.depthBuffer&&wt(w)}function Gt(w){const S=w.textures;for(let H=0,Z=S.length;H<Z;H++){const et=S[H];if(p(et)){const K=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,St=n.get(et).__webglTexture;e.bindTexture(K,St),m(K),e.unbindTexture()}}}const Nt=[],P=[];function re(w){if(w.samples>0){if(zt(w)===!1){const S=w.textures,H=w.width,Z=w.height;let et=r.COLOR_BUFFER_BIT;const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(w),it=S.length>1;if(it)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Ht=n.get(S[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,H,Z,0,0,H,Z,et,r.NEAREST),l===!0&&(Nt.length=0,P.length=0,Nt.push(r.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Nt.push(K),P.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const Ht=n.get(S[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ft(w){return Math.min(i.maxSamples,w.samples)}function zt(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function Zt(w,S){const H=w.colorSpace,Z=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==lr&&H!==Yi&&(fe.getTransfer(H)===Ee?(Z!==si||et!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Lt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=T,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=yt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=zt}function Nx(r,t){function e(n,i=Yi){let s;const a=fe.getTransfer(i);if(n===Li)return r.UNSIGNED_BYTE;if(n===pu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===mu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zf)return r.BYTE;if(n===kf)return r.SHORT;if(n===pa)return r.UNSIGNED_SHORT;if(n===du)return r.INT;if(n===Or)return r.UNSIGNED_INT;if(n===Ai)return r.FLOAT;if(n===wa)return r.HALF_FLOAT;if(n===Gf)return r.ALPHA;if(n===Vf)return r.RGB;if(n===si)return r.RGBA;if(n===Wf)return r.LUMINANCE;if(n===Xf)return r.LUMINANCE_ALPHA;if(n===ms)return r.DEPTH_COMPONENT;if(n===Rs)return r.DEPTH_STENCIL;if(n===Yf)return r.RED;if(n===_u)return r.RED_INTEGER;if(n===qf)return r.RG;if(n===gu)return r.RG_INTEGER;if(n===vu)return r.RGBA_INTEGER;if(n===xo||n===So||n===Mo||n===yo)if(a===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===pc||n===mc||n===_c)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===vc||n===xc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gc||n===vc)return a===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sc||n===Mc||n===yc||n===Ec||n===Tc||n===bc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Dc||n===Ic)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Uc||n===Nc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return a===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jf||n===Fc||n===Oc||n===Bc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Fx extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class eo extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ox={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new eo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new on,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ii({vertexShader:Bx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fi(new Da(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hx extends Fs{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new kx,p=e.getContextAttributes();let m=null,y=null;const x=[],M=[],R=new ce;let A=null;const E=new ii;E.layers.enable(1),E.viewport=new Ne;const L=new ii;L.layers.enable(2),L.viewport=new Ne;const O=[E,L],v=new Fx;v.layers.enable(1),v.layers.enable(2);let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=x[q];return Q===void 0&&(Q=new Ol,x[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=x[q];return Q===void 0&&(Q=new Ol,x[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=x[q];return Q===void 0&&(Q=new Ol,x[q]=Q),Q.getHandSpace()};function z(q){const Q=M.indexOf(q.inputSource);if(Q===-1)return;const ft=x[Q];ft!==void 0&&(ft.update(q.inputSource,q.frame,c||a),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const Q=M[q];Q!==null&&(M[q]=null,x[q].disconnect(Q))}T=null,N=null,g.reset(),t.setRenderTarget(m),d=null,h=null,f=null,i=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Br(d.framebufferWidth,d.framebufferHeight,{format:si,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ft=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Rs:ms,ft=p.stencil?As:Or);const wt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(wt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Br(h.textureWidth,h.textureHeight,{format:si,type:Li,depthTexture:new hd(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(q){for(let Q=0;Q<q.removed.length;Q++){const ft=q.removed[Q],at=M.indexOf(ft);at>=0&&(M[at]=null,x[at].disconnect(ft))}for(let Q=0;Q<q.added.length;Q++){const ft=q.added[Q];let at=M.indexOf(ft);if(at===-1){for(let yt=0;yt<x.length;yt++)if(yt>=M.length){M.push(ft),at=yt;break}else if(M[yt]===null){M[yt]=ft,at=yt;break}if(at===-1)break}const wt=x[at];wt&&wt.connect(ft)}}const G=new Y,X=new Y;function V(q,Q,ft){G.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ft.matrixWorld);const at=G.distanceTo(X),wt=Q.projectionMatrix.elements,yt=ft.projectionMatrix.elements,Wt=wt[14]/(wt[10]-1),Gt=wt[14]/(wt[10]+1),Nt=(wt[9]+1)/wt[5],P=(wt[9]-1)/wt[5],re=(wt[8]-1)/wt[0],Ft=(yt[8]+1)/yt[0],zt=Wt*re,F=Wt*Ft,Zt=at/(-re+Ft),Lt=Zt*-re;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Lt),q.translateZ(Zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=Wt+Zt,S=Gt+Zt,H=zt-Lt,Z=F+(at-Lt),et=Nt*Gt/S*w,K=P*Gt/S*w;q.projectionMatrix.makePerspective(H,Z,et,K,w,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,ft=q.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),v.near=L.near=E.near=Q,v.far=L.far=E.far=ft,(T!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,N=v.far);const at=q.parent,wt=v.cameras;rt(v,at);for(let yt=0;yt<wt.length;yt++)rt(wt[yt],at);wt.length===2?V(v,E,L):v.projectionMatrix.copy(E.projectionMatrix),C(q,v,at)};function C(q,Q,ft){ft===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ot=null;function Bt(q,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const ft=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let at=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let yt=0;yt<ft.length;yt++){const Wt=ft[yt];let Gt=null;if(d!==null)Gt=d.getViewport(Wt);else{const P=f.getViewSubImage(h,Wt);Gt=P.viewport,yt===0&&(t.setRenderTargetTextures(y,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(y))}let Nt=O[yt];Nt===void 0&&(Nt=new ii,Nt.layers.enable(yt),Nt.viewport=new Ne,O[yt]=Nt),Nt.matrix.fromArray(Wt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Wt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),yt===0&&(v.matrix.copy(Nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Nt)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const yt=f.getDepthInformation(ft[0]);yt&&yt.isValid&&yt.texture&&g.init(t,yt,i.renderState)}}for(let ft=0;ft<x.length;ft++){const at=M[ft],wt=x[ft];at!==null&&wt!==void 0&&wt.update(at,Q,c||a)}ot&&ot(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Xt=new cd;Xt.setAnimationLoop(Bt),this.setAnimationLoop=function(q){ot=q},this.dispose=function(){}}}const mr=new Di,Gx=new Be;function Vx(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,sd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,M=y.envMapRotation;x&&(p.envMap.value=x,mr.copy(M),mr.x*=-1,mr.y*=-1,mr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),p.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(mr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wx(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(_(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(y,R);const A=t.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const x=f();y.__bindingPointIndex=x;const M=r.createBuffer(),R=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=i[y.id],M=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,E=M.length;A<E;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let O=0,v=L.length;O<v;O++){const T=L[O];if(d(T,A,O,R)===!0){const N=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let W=0;for(let $=0;$<z.length;$++){const G=z[$],X=g(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,N+W,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,M,R){const A=y.value,E=x+"_"+M;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const L=R[E];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[E]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(y){const x=y.uniforms;let M=0;const R=16;for(let E=0,L=x.length;E<L;E++){const O=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,T=O.length;v<T;v++){const N=O[v],z=Array.isArray(N.value)?N.value:[N.value];for(let W=0,$=z.length;W<$;W++){const G=z[W],X=g(G),V=M%R,rt=V%X.boundary,C=V+rt;M+=rt,C!==0&&R-C<X.storage&&(M+=R-C),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=X.storage}}}const A=M%R;return A>0&&(M+=R-A),y.__size=M,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Xx{constructor(t={}){const{canvas:e=Dm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Qi,this.toneMappingExposure=1;const x=this;let M=!1,R=0,A=0,E=null,L=-1,O=null;const v=new Ne,T=new Ne;let N=null;const z=new me(0);let W=0,$=e.width,G=e.height,X=1,V=null,rt=null;const C=new Ne(0,0,$,G),ot=new Ne(0,0,$,G);let Bt=!1;const Xt=new ld;let q=!1,Q=!1;const ft=new Be,at=new Be,wt=new Y,yt=new Ne,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Nt(){return E===null?X:1}let P=n;function re(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fu}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),P===null){const U="webgl2";if(P=re(U,b),P===null)throw re(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,zt,F,Zt,Lt,w,S,H,Z,et,K,St,it,dt,Ht,nt,vt,xt,It,gt,Yt,Ot,se,D;function tt(){Ft=new K0(P),Ft.init(),Ot=new Nx(P,Ft),zt=new W0(P,Ft,t,Ot),F=new Dx(P),zt.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),Zt=new Q0(P),Lt=new gx,w=new Ux(P,Ft,F,Lt,zt,Ot,Zt),S=new Y0(x),H=new $0(x),Z=new a_(P),se=new G0(P,Z),et=new Z0(P,Z,Zt,se),K=new ev(P,et,Z,Zt),It=new tv(P,zt,w),nt=new X0(Lt),St=new _x(x,S,H,Ft,zt,se,nt),it=new Vx(x,Lt),dt=new xx,Ht=new bx(Ft),xt=new H0(x,S,H,F,K,h,l),vt=new Px(x,K,zt),D=new Wx(P,Zt,zt,F),gt=new V0(P,Ft,Zt),Yt=new J0(P,Ft,Zt),Zt.programs=St.programs,x.capabilities=zt,x.extensions=Ft,x.properties=Lt,x.renderLists=dt,x.shadowMap=vt,x.state=F,x.info=Zt}tt();const j=new Hx(x,P);this.xr=j,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize($,G,!1))},this.getSize=function(b){return b.set($,G)},this.setSize=function(b,U,B=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,G=U,e.width=Math.floor(b*X),e.height=Math.floor(U*X),B===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set($*X,G*X).floor()},this.setDrawingBufferSize=function(b,U,B){$=b,G=U,X=B,e.width=Math.floor(b*B),e.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,U,B,k){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,U,B,k),F.viewport(v.copy(C).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,U,B,k){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,U,B,k),F.scissor(T.copy(ot).multiplyScalar(X).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(b){F.setScissorTest(Bt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(b=!0,U=!0,B=!0){let k=0;if(b){let I=!1;if(E!==null){const st=E.texture.format;I=st===vu||st===gu||st===_u}if(I){const st=E.texture.type,_t=st===Li||st===Or||st===pa||st===As||st===pu||st===mu,ht=xt.getClearColor(),ut=xt.getClearAlpha(),At=ht.r,Ut=ht.g,Tt=ht.b;_t?(d[0]=At,d[1]=Ut,d[2]=Tt,d[3]=ut,P.clearBufferuiv(P.COLOR,0,d)):(_[0]=At,_[1]=Ut,_[2]=Tt,_[3]=ut,P.clearBufferiv(P.COLOR,0,_))}else k|=P.COLOR_BUFFER_BIT}U&&(k|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Ht.dispose(),Lt.dispose(),S.dispose(),H.dispose(),K.dispose(),se.dispose(),D.dispose(),St.dispose(),j.dispose(),j.removeEventListener("sessionstart",le),j.removeEventListener("sessionend",pt),Dt.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Zt.autoReset,U=vt.enabled,B=vt.autoUpdate,k=vt.needsUpdate,I=vt.type;tt(),Zt.autoReset=b,vt.enabled=U,vt.autoUpdate=B,vt.needsUpdate=k,vt.type=I}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const U=b.target;U.removeEventListener("dispose",qt),ge(U)}function ge(b){Te(b),Lt.remove(b)}function Te(b){const U=Lt.get(b).programs;U!==void 0&&(U.forEach(function(B){St.releaseProgram(B)}),b.isShaderMaterial&&St.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,k,I,st){U===null&&(U=Wt);const _t=I.isMesh&&I.matrixWorld.determinant()<0,ht=de(b,U,B,k,I);F.setMaterial(k,_t);let ut=B.index,At=1;if(k.wireframe===!0){if(ut=et.getWireframeAttribute(B),ut===void 0)return;At=2}const Ut=B.drawRange,Tt=B.attributes.position;let ae=Ut.start*At,ie=(Ut.start+Ut.count)*At;st!==null&&(ae=Math.max(ae,st.start*At),ie=Math.min(ie,(st.start+st.count)*At)),ut!==null?(ae=Math.max(ae,0),ie=Math.min(ie,ut.count)):Tt!=null&&(ae=Math.max(ae,0),ie=Math.min(ie,Tt.count));const _e=ie-ae;if(_e<0||_e===1/0)return;se.setup(I,k,ht,B,ut);let Ye,Jt=gt;if(ut!==null&&(Ye=Z.get(ut),Jt=Yt,Jt.setIndex(Ye)),I.isMesh)k.wireframe===!0?(F.setLineWidth(k.wireframeLinewidth*Nt()),Jt.setMode(P.LINES)):Jt.setMode(P.TRIANGLES);else if(I.isLine){let Pt=k.linewidth;Pt===void 0&&(Pt=1),F.setLineWidth(Pt*Nt()),I.isLineSegments?Jt.setMode(P.LINES):I.isLineLoop?Jt.setMode(P.LINE_LOOP):Jt.setMode(P.LINE_STRIP)}else I.isPoints?Jt.setMode(P.POINTS):I.isSprite&&Jt.setMode(P.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Jt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Pt=I._multiDrawStarts,Ze=I._multiDrawCounts,ue=I._multiDrawCount,Jn=ut?Z.get(ut).bytesPerElement:1,Vr=Lt.get(k).currentProgram.getUniforms();for(let Cn=0;Cn<ue;Cn++)Vr.setValue(P,"_gl_DrawID",Cn),Jt.render(Pt[Cn]/Jn,Ze[Cn])}else if(I.isInstancedMesh)Jt.renderInstances(ae,_e,I.count);else if(B.isInstancedBufferGeometry){const Pt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ze=Math.min(B.instanceCount,Pt);Jt.renderInstances(ae,_e,Ze)}else Jt.render(ae,_e)};function ne(b,U,B){b.transparent===!0&&b.side===bi&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,De(b,U,B),b.side=ir,b.needsUpdate=!0,De(b,U,B),b.side=bi):De(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),p=Ht.get(B),p.init(U),y.push(p),B.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),b!==B&&b.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const st=I.material;if(st)if(Array.isArray(st))for(let _t=0;_t<st.length;_t++){const ht=st[_t];ne(ht,B,I),k.add(ht)}else ne(st,B,I),k.add(st)}),y.pop(),p=null,k},this.compileAsync=function(b,U,B=null){const k=this.compile(b,U,B);return new Promise(I=>{function st(){if(k.forEach(function(_t){Lt.get(_t).currentProgram.isReady()&&k.delete(_t)}),k.size===0){I(b);return}setTimeout(st,10)}Ft.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Rt=null;function Et(b){Rt&&Rt(b)}function le(){Dt.stop()}function pt(){Dt.start()}const Dt=new cd;Dt.setAnimationLoop(Et),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(b){Rt=b,j.setAnimationLoop(b),b===null?Dt.stop():Dt.start()},j.addEventListener("sessionstart",le),j.addEventListener("sessionend",pt),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,E),p=Ht.get(b,y.length),p.init(U),y.push(p),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xt.setFromProjectionMatrix(at),Q=this.localClippingEnabled,q=nt.init(this.clippingPlanes,Q),g=dt.get(b,m.length),g.init(),m.push(g),j.enabled===!0&&j.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Ct(st,U,-1/0,x.sortObjects)}Ct(b,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,rt),Gt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Gt&&xt.addToRenderList(g,b),this.info.render.frame++,q===!0&&nt.beginShadows();const B=p.state.shadowsArray;vt.render(B,b,U),q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,I=g.transmissive;if(p.setupLights(),U.isArrayCamera){const st=U.cameras;if(I.length>0)for(let _t=0,ht=st.length;_t<ht;_t++){const ut=st[_t];Le(k,I,b,ut)}Gt&&xt.render(b);for(let _t=0,ht=st.length;_t<ht;_t++){const ut=st[_t];kt(g,b,ut,ut.viewport)}}else I.length>0&&Le(k,I,b,U),Gt&&xt.render(b),kt(g,b,U);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(x,b,U),se.resetDefaultState(),L=-1,O=null,y.pop(),y.length>0?(p=y[y.length-1],q===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ct(b,U,B,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xt.intersectsSprite(b)){k&&yt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const _t=K.update(b),ht=b.material;ht.visible&&g.push(b,_t,ht,B,yt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xt.intersectsObject(b))){const _t=K.update(b),ht=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),yt.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),yt.copy(_t.boundingSphere.center)),yt.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(ht)){const ut=_t.groups;for(let At=0,Ut=ut.length;At<Ut;At++){const Tt=ut[At],ae=ht[Tt.materialIndex];ae&&ae.visible&&g.push(b,_t,ae,B,yt.z,Tt)}}else ht.visible&&g.push(b,_t,ht,B,yt.z,null)}}const st=b.children;for(let _t=0,ht=st.length;_t<ht;_t++)Ct(st[_t],U,B,k)}function kt(b,U,B,k){const I=b.opaque,st=b.transmissive,_t=b.transparent;p.setupLightsView(B),q===!0&&nt.setGlobalState(x.clippingPlanes,B),k&&F.viewport(v.copy(k)),I.length>0&&jt(I,U,B),st.length>0&&jt(st,U,B),_t.length>0&&jt(_t,U,B),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Le(b,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Br(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?wa:Li,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const st=p.state.transmissionRenderTarget[k.id],_t=k.viewport||v;st.setSize(_t.z,_t.w);const ht=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&xt.render(B);const ut=x.toneMapping;x.toneMapping=Qi;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),q===!0&&nt.setGlobalState(x.clippingPlanes,k),jt(b,B,k),w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Tt=0,ae=U.length;Tt<ae;Tt++){const ie=U[Tt],_e=ie.object,Ye=ie.geometry,Jt=ie.material,Pt=ie.group;if(Jt.side===bi&&_e.layers.test(k.layers)){const Ze=Jt.side;Jt.side=Mn,Jt.needsUpdate=!0,be(_e,B,k,Ye,Jt,Pt),Jt.side=Ze,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st))}x.setRenderTarget(ht),x.setClearColor(z,W),At!==void 0&&(k.viewport=At),x.toneMapping=ut}function jt(b,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let I=0,st=b.length;I<st;I++){const _t=b[I],ht=_t.object,ut=_t.geometry,At=k===null?_t.material:k,Ut=_t.group;ht.layers.test(B.layers)&&be(ht,U,B,ut,At,Ut)}}function be(b,U,B,k,I,st){b.onBeforeRender(x,U,B,k,I,st),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(x,U,B,k,b,st),I.transparent===!0&&I.side===bi&&I.forceSinglePass===!1?(I.side=Mn,I.needsUpdate=!0,x.renderBufferDirect(B,U,k,I,b,st),I.side=ir,I.needsUpdate=!0,x.renderBufferDirect(B,U,k,I,b,st),I.side=bi):x.renderBufferDirect(B,U,k,I,b,st),b.onAfterRender(x,U,B,k,I,st)}function De(b,U,B){U.isScene!==!0&&(U=Wt);const k=Lt.get(b),I=p.state.lights,st=p.state.shadowsArray,_t=I.state.version,ht=St.getParameters(b,I.state,st,U,B),ut=St.getProgramCacheKey(ht);let At=k.programs;k.environment=b.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(b.isMeshStandardMaterial?H:S).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",qt),At=new Map,k.programs=At);let Ut=At.get(ut);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===_t)return ve(b,ht),Ut}else ht.uniforms=St.getUniforms(b),b.onBeforeCompile(ht,x),Ut=St.acquireProgram(ht,ut),At.set(ut,Ut),k.uniforms=ht.uniforms;const Tt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),ve(b,ht),k.needsLights=ye(b),k.lightsStateVersion=_t,k.needsLights&&(Tt.ambientLightColor.value=I.state.ambient,Tt.lightProbe.value=I.state.probe,Tt.directionalLights.value=I.state.directional,Tt.directionalLightShadows.value=I.state.directionalShadow,Tt.spotLights.value=I.state.spot,Tt.spotLightShadows.value=I.state.spotShadow,Tt.rectAreaLights.value=I.state.rectArea,Tt.ltc_1.value=I.state.rectAreaLTC1,Tt.ltc_2.value=I.state.rectAreaLTC2,Tt.pointLights.value=I.state.point,Tt.pointLightShadows.value=I.state.pointShadow,Tt.hemisphereLights.value=I.state.hemi,Tt.directionalShadowMap.value=I.state.directionalShadowMap,Tt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Tt.spotShadowMap.value=I.state.spotShadowMap,Tt.spotLightMatrix.value=I.state.spotLightMatrix,Tt.spotLightMap.value=I.state.spotLightMap,Tt.pointShadowMap.value=I.state.pointShadowMap,Tt.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function Me(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=bo.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ve(b,U){const B=Lt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function de(b,U,B,k,I){U.isScene!==!0&&(U=Wt),w.resetTextureUnits();const st=U.fog,_t=k.isMeshStandardMaterial?U.environment:null,ht=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:lr,ut=(k.isMeshStandardMaterial?H:S).get(k.envMap||_t),At=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Tt=!!B.morphAttributes.position,ae=!!B.morphAttributes.normal,ie=!!B.morphAttributes.color;let _e=Qi;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Ye=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Jt=Ye!==void 0?Ye.length:0,Pt=Lt.get(k),Ze=p.state.lights;if(q===!0&&(Q===!0||b!==O)){const Vn=b===O&&k.id===L;nt.setState(k,b,Vn)}let ue=!1;k.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ze.state.version||Pt.outputColorSpace!==ht||I.isBatchedMesh&&Pt.batching===!1||!I.isBatchedMesh&&Pt.batching===!0||I.isBatchedMesh&&Pt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Pt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Pt.instancing===!1||!I.isInstancedMesh&&Pt.instancing===!0||I.isSkinnedMesh&&Pt.skinning===!1||!I.isSkinnedMesh&&Pt.skinning===!0||I.isInstancedMesh&&Pt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Pt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Pt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Pt.instancingMorph===!1&&I.morphTexture!==null||Pt.envMap!==ut||k.fog===!0&&Pt.fog!==st||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==nt.numPlanes||Pt.numIntersection!==nt.numIntersection)||Pt.vertexAlphas!==At||Pt.vertexTangents!==Ut||Pt.morphTargets!==Tt||Pt.morphNormals!==ae||Pt.morphColors!==ie||Pt.toneMapping!==_e||Pt.morphTargetsCount!==Jt)&&(ue=!0):(ue=!0,Pt.__version=k.version);let Jn=Pt.currentProgram;ue===!0&&(Jn=De(k,U,I));let Vr=!1,Cn=!1,rl=!1;const Ie=Jn.getUniforms(),Oi=Pt.uniforms;if(F.useProgram(Jn.program)&&(Vr=!0,Cn=!0,rl=!0),k.id!==L&&(L=k.id,Cn=!0),Vr||O!==b){zt.reverseDepthBuffer?(ft.copy(b.projectionMatrix),Um(ft),Nm(ft),Ie.setValue(P,"projectionMatrix",ft)):Ie.setValue(P,"projectionMatrix",b.projectionMatrix),Ie.setValue(P,"viewMatrix",b.matrixWorldInverse);const Vn=Ie.map.cameraPosition;Vn!==void 0&&Vn.setValue(P,wt.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&Ie.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ie.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,Cn=!0,rl=!0)}if(I.isSkinnedMesh){Ie.setOptional(P,I,"bindMatrix"),Ie.setOptional(P,I,"bindMatrixInverse");const Vn=I.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Ie.setValue(P,"boneTexture",Vn.boneTexture,w))}I.isBatchedMesh&&(Ie.setOptional(P,I,"batchingTexture"),Ie.setValue(P,"batchingTexture",I._matricesTexture,w),Ie.setOptional(P,I,"batchingIdTexture"),Ie.setValue(P,"batchingIdTexture",I._indirectTexture,w),Ie.setOptional(P,I,"batchingColorTexture"),I._colorsTexture!==null&&Ie.setValue(P,"batchingColorTexture",I._colorsTexture,w));const sl=B.morphAttributes;if((sl.position!==void 0||sl.normal!==void 0||sl.color!==void 0)&&It.update(I,B,Jn),(Cn||Pt.receiveShadow!==I.receiveShadow)&&(Pt.receiveShadow=I.receiveShadow,Ie.setValue(P,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Oi.envMap.value=ut,Oi.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Oi.envMapIntensity.value=U.environmentIntensity),Cn&&(Ie.setValue(P,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&Rn(Oi,rl),st&&k.fog===!0&&it.refreshFogUniforms(Oi,st),it.refreshMaterialUniforms(Oi,k,X,G,p.state.transmissionRenderTarget[b.id]),bo.upload(P,Me(Pt),Oi,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(bo.upload(P,Me(Pt),Oi,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ie.setValue(P,"center",I.center),Ie.setValue(P,"modelViewMatrix",I.modelViewMatrix),Ie.setValue(P,"normalMatrix",I.normalMatrix),Ie.setValue(P,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Vn=k.uniformsGroups;for(let al=0,kp=Vn.length;al<kp;al++){const ju=Vn[al];D.update(ju,Jn),D.bind(ju,Jn)}}return Jn}function Rn(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ye(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,U,B){Lt.get(b.texture).__webglTexture=U,Lt.get(b.depthTexture).__webglTexture=B;const k=Lt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const B=Lt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){E=b,R=U,A=B;let k=!0,I=null,st=!1,_t=!1;if(b){const ut=Lt.get(b);if(ut.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(ut.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(ut.__hasExternalTextures)w.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(ut.__boundDepthTexture!==Tt){if(Tt!==null&&Lt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);const Ut=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?I=Ut[U][B]:I=Ut[U],st=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?I=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?I=Ut[B]:I=Ut,v.copy(b.viewport),T.copy(b.scissor),N=b.scissorTest}else v.copy(C).multiplyScalar(X).floor(),T.copy(ot).multiplyScalar(X).floor(),N=Bt;if(F.bindFramebuffer(P.FRAMEBUFFER,I)&&k&&F.drawBuffers(b,I),F.viewport(v),F.scissor(T),F.setScissorTest(N),st){const ut=Lt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,B)}else if(_t){const ut=Lt.get(b.texture),At=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ut.__webglTexture,B||0,At)}L=-1},this.readRenderTargetPixels=function(b,U,B,k,I,st,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){F.bindFramebuffer(P.FRAMEBUFFER,ht);try{const ut=b.texture,At=ut.format,Ut=ut.type;if(!zt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&B>=0&&B<=b.height-I&&P.readPixels(U,B,k,I,Ot.convert(At),Ot.convert(Ut),st)}finally{const ut=E!==null?Lt.get(E).__webglFramebuffer:null;F.bindFramebuffer(P.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,k,I,st,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){const ut=b.texture,At=ut.format,Ut=ut.type;if(!zt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-k&&B>=0&&B<=b.height-I){F.bindFramebuffer(P.FRAMEBUFFER,ht);const Tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.bufferData(P.PIXEL_PACK_BUFFER,st.byteLength,P.STREAM_READ),P.readPixels(U,B,k,I,Ot.convert(At),Ot.convert(Ut),0);const ae=E!==null?Lt.get(E).__webglFramebuffer:null;F.bindFramebuffer(P.FRAMEBUFFER,ae);const ie=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Im(P,ie,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,st),P.deleteBuffer(Tt),P.deleteSync(ie),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-B),I=Math.floor(b.image.width*k),st=Math.floor(b.image.height*k),_t=U!==null?U.x:0,ht=U!==null?U.y:0;w.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,_t,ht,I,st),F.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,k=null,I=0){b.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],U=arguments[2],I=arguments[3]||0,B=null);let st,_t,ht,ut,At,Ut;B!==null?(st=B.max.x-B.min.x,_t=B.max.y-B.min.y,ht=B.min.x,ut=B.min.y):(st=b.image.width,_t=b.image.height,ht=0,ut=0),k!==null?(At=k.x,Ut=k.y):(At=0,Ut=0);const Tt=Ot.convert(U.format),ae=Ot.convert(U.type);w.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ie=P.getParameter(P.UNPACK_ROW_LENGTH),_e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ye=P.getParameter(P.UNPACK_SKIP_PIXELS),Jt=P.getParameter(P.UNPACK_SKIP_ROWS),Pt=P.getParameter(P.UNPACK_SKIP_IMAGES),Ze=b.isCompressedTexture?b.mipmaps[I]:b.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ht),P.pixelStorei(P.UNPACK_SKIP_ROWS,ut),b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,I,At,Ut,st,_t,Tt,ae,Ze.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,I,At,Ut,Ze.width,Ze.height,Tt,Ze.data):P.texSubImage2D(P.TEXTURE_2D,I,At,Ut,st,_t,Tt,ae,Ze),P.pixelStorei(P.UNPACK_ROW_LENGTH,ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pt),I===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,k=null,I=0){b.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,b=arguments[2],U=arguments[3],I=arguments[4]||0);let st,_t,ht,ut,At,Ut,Tt,ae,ie;const _e=b.isCompressedTexture?b.mipmaps[I]:b.image;B!==null?(st=B.max.x-B.min.x,_t=B.max.y-B.min.y,ht=B.max.z-B.min.z,ut=B.min.x,At=B.min.y,Ut=B.min.z):(st=_e.width,_t=_e.height,ht=_e.depth,ut=0,At=0,Ut=0),k!==null?(Tt=k.x,ae=k.y,ie=k.z):(Tt=0,ae=0,ie=0);const Ye=Ot.convert(U.format),Jt=Ot.convert(U.type);let Pt;if(U.isData3DTexture)w.setTexture3D(U,0),Pt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)w.setTexture2DArray(U,0),Pt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=P.getParameter(P.UNPACK_ROW_LENGTH),ue=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Jn=P.getParameter(P.UNPACK_SKIP_PIXELS),Vr=P.getParameter(P.UNPACK_SKIP_ROWS),Cn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ut),P.pixelStorei(P.UNPACK_SKIP_ROWS,At),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut),b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Pt,I,Tt,ae,ie,st,_t,ht,Ye,Jt,_e.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Pt,I,Tt,ae,ie,st,_t,ht,Ye,_e.data):P.texSubImage3D(Pt,I,Tt,ae,ie,st,_t,ht,Ye,Jt,_e),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Jn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Cn),I===0&&U.generateMipmaps&&P.generateMipmap(Pt),F.unbindTexture()},this.initRenderTarget=function(b){Lt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,F.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xu?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Zo?"display-p3":"srgb"}}class Yx extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _d extends Pa{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gh=new Be,Hc=new Qf,no=new Jo,io=new Y;class qx extends yn{constructor(t=new Fi,e=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,t.ray.intersectsSphere(no)===!1)return;Gh.copy(i).invert(),Hc.copy(t.ray).applyMatrix4(Gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,g=d;_<g;_++){const p=c.getX(_);io.fromBufferAttribute(f,p),Vh(io,p,l,i,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,g=d;_<g;_++)io.fromBufferAttribute(f,_),Vh(io,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vh(r,t,e,n,i,s,a){const o=Hc.distanceSqToPoint(r);if(o<e){const l=new Y;Hc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class jx extends on{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Wh={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $x{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Kx=new $x;class Mu{constructor(t){this.manager=t!==void 0?t:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Mu.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zx extends Mu{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Wh.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=ma("img");function l(){u(),Wh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){u(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Xh extends Mu{constructor(t){super(t)}load(t,e,n,i){const s=new on,a=new Zx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Jx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);const qh={vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D uTexture;
    uniform vec2 uResolution;
    uniform vec2 uTextureResolution;
    uniform vec2 uMouse;
    uniform float uVelocity;
    uniform float uTime;
    
    varying vec2 vUv;

    // Helper function to sample a sharpened pixel using a 4-neighbor high-pass convolution kernel
    vec3 sampleSharpened(sampler2D tex, vec2 uv, vec2 splitOffset, vec2 texelSize) {
      vec2 targetUv = uv + splitOffset;
      vec3 center = texture2D(tex, targetUv).rgb;
      vec3 left   = texture2D(tex, targetUv + vec2(-texelSize.x, 0.0)).rgb;
      vec3 right  = texture2D(tex, targetUv + vec2(texelSize.x, 0.0)).rgb;
      vec3 top    = texture2D(tex, targetUv + vec2(0.0, -texelSize.y)).rgb;
      vec3 bottom = texture2D(tex, targetUv + vec2(0.0, texelSize.y)).rgb;

      // High-pass sharpening convolution
      vec3 sharp = center * 5.0 - (left + right + top + bottom);
      
      // Blend 40% of the sharpened kernel with the original image for crisp details without artifacts
      return mix(center, sharp, 0.40);
    }

    void main() {
      // Calculate aspect ratio covering (similar to CSS background-size: cover)
      float screenAspect = uResolution.x / uResolution.y;
      float textureAspect = uTextureResolution.x / uTextureResolution.y;
      vec2 ratio = vec2(
        min(screenAspect / textureAspect, 1.0),
        min(textureAspect / screenAspect, 1.0)
      );
      
      vec2 uv = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
      );

      // Texel dimensions for neighbor sampling
      vec2 texelSize = 1.0 / uTextureResolution;

      // Chromatic Aberration driven by Scroll Velocity (very subtle)
      vec2 splitDir = vec2(1.0, 0.5) * uVelocity * 0.0025;
      
      // Sample sharpened RGB channels with slight color split offsets
      float r = sampleSharpened(uTexture, uv, splitDir, texelSize).r;
      float g = sampleSharpened(uTexture, uv, vec2(0.0), texelSize).g;
      float b = sampleSharpened(uTexture, uv, -splitDir, texelSize).b;

      // Add a subtle vignette to frame the scene
      vec2 d = abs(vUv - 0.5) * 1.6;
      float vignette = 1.0 - dot(d, d) * 0.25;

      gl_FragColor = vec4(vec3(r, g, b) * vignette, 1.0);
    }
  `},ro=["./assets/gate/frame-001 (1).jpg","./assets/gate/frame-001 (2).jpg","./assets/gate/frame-001 (3).jpg","./assets/gate/frame-001 (4).jpg","./assets/gate/frame-001 (5).jpg","./assets/gate/frame-001 (6).jpg","./assets/gate/frame-001 (7).jpg","./assets/gate/frame-001 (8).jpg","./assets/gate/frame-001 (9).jpg","./assets/gate/frame-001 (10).jpg","./assets/gate/frame-001 (11).jpg","./assets/gate/frame-001 (12).jpg","./assets/gate/frame-001 (13).jpg","./assets/gate/frame-001 (14).jpg","./assets/gate/frame-001 (15).jpg","./assets/gate/frame-001 (16).jpg","./assets/gate/frame-001 (17).jpg","./assets/gate/frame-001 (18).jpg","./assets/gate/frame-001 (19).jpg","./assets/gate/frame-001 (20).jpg","./assets/gate/frame-001 (21).jpg","./assets/gate/frame-001 (22).jpg","./assets/gate/frame-001 (23).jpg","./assets/gate/frame-001 (24).jpg","./assets/gate/frame-001 (25).jpg","./assets/gate/frame-001 (26).jpg","./assets/gate/frame-001 (27).jpg","./assets/gate/frame-001 (28).jpg","./assets/gate/frame-001 (29).jpg","./assets/gate/frame-001 (30).jpg","./assets/nandini1/hm (43).jpg","./assets/nandini1/hm (42).jpg","./assets/nandini1/hm (41).jpg","./assets/nandini1/hm (40).jpg","./assets/nandini1/hm (39).jpg","./assets/nandini1/hm (38).jpg","./assets/nandini1/hm (37).jpg","./assets/nandini1/hm (36).jpg","./assets/nandini1/hm (35).jpg","./assets/nandini1/hm (34).jpg","./assets/nandini1/hm (33).jpg","./assets/nandini1/hm (32).jpg","./assets/nandini1/hm (31).jpg","./assets/nandini1/hm (30).jpg","./assets/nandini1/hm (29).jpg","./assets/nandini1/hm (28).jpg","./assets/nandini1/hm (27).jpg","./assets/nandini1/hm (26).jpg","./assets/nandini1/hm (25).jpg","./assets/nandini1/hm (24).jpg","./assets/nandini1/hm (23).jpg","./assets/nandini1/hm (22).jpg","./assets/nandini1/hm (21).jpg","./assets/nandini1/hm (20).jpg","./assets/nandini1/hm (19).jpg","./assets/nandini1/hm (18).jpg","./assets/nandini1/hm (17).jpg","./assets/nandini1/hm (16).jpg","./assets/nandini1/hm (15).jpg","./assets/nandini1/hm (14).jpg","./assets/nandini1/hm (13).jpg","./assets/nandini1/hm (12).jpg","./assets/nandini1/hm (11).jpg","./assets/nandini1/hm (10).jpg","./assets/nandini1/hm (9).jpg","./assets/nandini1/hm (8).jpg","./assets/nandini1/hm (7).jpg","./assets/nandini1/hm (6).jpg","./assets/nandini1/hm (5).jpg","./assets/nandini1/hm (4).jpg","./assets/nandini1/hm (3).jpg","./assets/nandini1/hm (2).jpg","./assets/nandini1/hm (1).jpg","./assets/stairs/stairs (1).jpg","./assets/stairs/stairs (2).jpg","./assets/stairs/stairs (3).jpg","./assets/stairs/stairs (4).jpg","./assets/stairs/stairs (5).jpg","./assets/stairs/stairs (6).jpg","./assets/stairs/stairs (7).jpg","./assets/stairs/stairs (8).jpg","./assets/stairs/stairs (11).jpg","./assets/stairs/stairs (12).jpg","./assets/stairs/stairs (13).jpg","./assets/stairs/stairs (14).jpg","./assets/stairs/stairs (15).jpg","./assets/stairs/stairs (16).jpg","./assets/stairs/stairs (17).jpg","./assets/stairs/stairs (18).jpg","./assets/stairs/stairs (19).jpg","./assets/stairs/stairs (20).jpg","./assets/stairs/stairs (21).jpg","./assets/stairs/stairs (23).jpg","./assets/stairs/stairs (24).jpg","./assets/stairs/stairs (25).jpg","./assets/stairs/stairs (26).jpg","./assets/stairs/stairs (27).jpg","./assets/stairs/stairs (28).jpg","./assets/stairs/stairs (29).jpg","./assets/stairs/stairs (30).jpg","./assets/stairs/stairs (31).jpg","./assets/stairs/stairs (32).jpg","./assets/stairs/stairs (33).jpg","./assets/stairs/stairs (34).jpg","./assets/stairs2/stair_ (13).jpg","./assets/stairs2/stair_ (14).jpg","./assets/stairs2/stair_ (15).jpg","./assets/stairs2/stair_ (16).jpg","./assets/stairs2/stair_ (17).jpg","./assets/stairs2/stair_ (18).jpg","./assets/stairs2/stair_ (19).jpg","./assets/stairs2/stair_ (20).jpg","./assets/stairs2/stair_ (21).jpg","./assets/stairs2/stair_ (22).jpg","./assets/stairs2/stair_ (23).jpg","./assets/stairs2/stair_ (24).jpg","./assets/stairs2/stair_ (25).jpg","./assets/stairs2/stair_ (26).jpg","./assets/stairs2/stair_ (27).jpg","./assets/stairs2/stair_ (28).jpg","./assets/stairs2/stair_ (29).jpg","./assets/stairs2/stair_ (30).jpg","./assets/stairs2/stair_ (31).jpg","./assets/stairs2/stair_ (32).jpg","./assets/stairs2/stair_ (33).jpg","./assets/stairs2/stair_ (34).jpg","./assets/stairs2/stair_ (35).jpg","./assets/stairs2/stair_ (36).jpg","./assets/stairs2/stair_ (37).jpg","./assets/stairs2/stair_ (38).jpg","./assets/stairs2/stair_ (39).jpg","./assets/stairs2/stair_ (40).jpg","./assets/stairs2/stair_ (41).jpg","./assets/stairs2/stair_ (42).jpg","./assets/stairs2/stair_ (43).jpg","./assets/stairs2/stair_ (44).jpg","./assets/stairs2/room (1).jpg","./assets/stairs2/room (2).jpg","./assets/stairs2/room (3).jpg","./assets/stairs2/room (4).jpg","./assets/stairs2/room (5).jpg","./assets/stairs2/room (6).jpg","./assets/stairs2/room (7).jpg","./assets/stairs2/room (8).jpg","./assets/stairs2/room (9).jpg","./assets/stairs2/room (10).jpg","./assets/stairs2/room (11).jpg","./assets/stairs2/room (12).jpg","./assets/stairs2/room (13).jpg","./assets/stairs2/room (14).jpg","./assets/stairs2/room (15).jpg","./assets/stairs2/room (16).jpg","./assets/stairs2/room (17).jpg","./assets/stairs2/room (18).jpg","./assets/stairs2/room (19).jpg","./assets/stairs2/room (20).jpg","./assets/stairs2/room (21).jpg","./assets/stairs2/room (22).jpg","./assets/stairs2/room (23).jpg","./assets/stairs2/room (24).jpg","./assets/stairs2/room (25).jpg","./assets/stairs2/room (26).jpg","./assets/stairs2/room (27).jpg","./assets/stairs2/room (28).jpg","./assets/stairs2/room (29).jpg","./assets/stairs2/room (30).jpg","./assets/stairs2/room (31).jpg","./assets/stairs2/room (32).jpg","./assets/stairs2/room (33).jpg","./assets/stairs2/room (34).jpg","./assets/stairs2/room (35).jpg","./assets/stairs2/room (36).jpg","./assets/stairs2/room (37).jpg","./assets/stairs2/room (38).jpg","./assets/stairs2/room (39).jpg","./assets/stairs2/room (40).jpg","./assets/stairs2/room (41).jpg","./assets/stairs2/room (42).jpg","./assets/stairs2/room (43).jpg","./assets/stairs2/room (44).jpg","./assets/stairs2/room (45).jpg","./assets/stairs2/room (46).jpg","./assets/stairs2/room (47).jpg","./assets/stairs2/room (48).jpg","./assets/stairs2/room (49).jpg","./assets/stairs2/room (50).jpg","./assets/stairs2/room (51).jpg","./assets/stairs2/room (52).jpg","./assets/stairs2/room (53).jpg","./assets/stairs2/room (54).jpg","./assets/stairs2/room (55).jpg"];class Qx{constructor(t,e,n){this.canvas=document.getElementById(t),this.onProgress=e,this.onLoadComplete=n,this.textures=[],this.mainTextures=[],this.gateTextures=[],this.totalFrames=49,this.gateTotalFrames=ro.length,this.currentFrameIndex=0,this.mouse=new ce(.5,.5),this.targetMouse=new ce(.5,.5),this.prevMouse=new ce(.5,.5),this.velocity=0,this.targetVelocity=0,this.time=0,this.clock=new Jx,this.particles=null,this.init()}init(){this.scene=new Yx,this.renderer=new Xx({canvas:this.canvas,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera=new ud(-1,1,1,-1,0,1),this.uniforms={uTexture:{value:null},uResolution:{value:new ce(window.innerWidth,window.innerHeight)},uTextureResolution:{value:new ce(1920,1080)},uMouse:{value:new ce(.5,.5)},uVelocity:{value:0},uTime:{value:0}},this.material=new Ii({vertexShader:qh.vertexShader,fragmentShader:qh.fragmentShader,uniforms:this.uniforms,depthWrite:!1,depthTest:!1}),this.geometry=new Da(2,2),this.mesh=new fi(this.geometry,this.material),this.scene.add(this.mesh),this.preloadFrames(),window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this))}preloadFrames(){const t=new Xh;let e=0;for(let n=1;n<=this.totalFrames;n++){const s=`./assets/ezgif-frame-${String(n).padStart(3,"0")}.jpg`;t.load(s,a=>{a.minFilter=mn,a.magFilter=mn,a.generateMipmaps=!1,this.mainTextures[n-1]=a,this.textures[n-1]=a,e++;const o=Math.round(e/this.totalFrames*100);this.onProgress&&this.onProgress(o),n===1&&a.image&&this.uniforms.uTextureResolution.value.set(a.image.naturalWidth||a.image.width||1920,a.image.naturalHeight||a.image.height||1080),e===this.totalFrames&&(this.uniforms.uTexture.value=this.textures[0],this.onLoadComplete&&this.onLoadComplete(),this.animate())},void 0,a=>{console.error(`Failed to load CGI frame: ${s}`,a)})}}loadGateSequence(t,e){if(this.gateTextures.length===this.gateTotalFrames){this.textures=this.gateTextures,this.totalFrames=this.gateTotalFrames,this.currentFrameIndex=0,this.uniforms.uTexture.value=this.textures[0],this.textures[0]&&this.textures[0].image&&this.uniforms.uTextureResolution.value.set(this.textures[0].image.naturalWidth||this.textures[0].image.width||1920,this.textures[0].image.naturalHeight||this.textures[0].image.height||1080),t&&t(100),e&&e();return}const n=new Xh;let i=0;for(let s=0;s<this.gateTotalFrames;s++){const a=ro[s];n.load(a,o=>{o.minFilter=mn,o.magFilter=mn,o.generateMipmaps=!1,this.gateTextures[s]=o,i++;const l=Math.round(i/this.gateTotalFrames*100);t&&t(l),s===0&&o.image&&this.uniforms.uTextureResolution.value.set(o.image.naturalWidth||o.image.width||1920,o.image.naturalHeight||o.image.height||1080),i===this.gateTotalFrames&&(this.textures=this.gateTextures,this.totalFrames=this.gateTotalFrames,this.currentFrameIndex=0,this.uniforms.uTexture.value=this.textures[0],e&&e())},void 0,o=>{console.error(`Failed to load gate frame: ${a}`,o)})}}switchToMainSequence(){this.textures=this.mainTextures,this.totalFrames=49,this.currentFrameIndex=0,this.uniforms.uTexture.value=this.textures[0],this.textures[0]&&this.textures[0].image&&this.uniforms.uTextureResolution.value.set(this.textures[0].image.naturalWidth||this.textures[0].image.width||1920,this.textures[0].image.naturalHeight||this.textures[0].image.height||1080)}onMouseMove(t){this.targetMouse.x=t.clientX/window.innerWidth,this.targetMouse.y=1-t.clientY/window.innerHeight}onResize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.uniforms.uResolution.value.set(t,e)}setFrame(t){if(this.textures.length<this.totalFrames)return;let e;if(this.totalFrames===ro.length){if(t<=.15){const n=t/.15;e=Math.floor(n*29)}else if(t<=.5){const n=(t-.15)/.35;e=30+Math.floor(n*42)}else if(t<=.65){const n=(t-.5)/.15;e=73+Math.floor(n*30)}else if(t<=.8){const n=(t-.65)/.15;e=104+Math.floor(n*31)}else{const n=Math.min((t-.8)/.2,1);e=136+Math.floor(n*54)}e=Math.min(Math.max(e,0),ro.length-1)}else e=Math.min(Math.floor(t*this.totalFrames),this.totalFrames-1);e!==this.currentFrameIndex&&(this.currentFrameIndex=e,this.uniforms.uTexture.value=this.textures[e])}setVelocity(t){this.targetVelocity=t}registerParticles(t){this.particles=t}animate(){requestAnimationFrame(this.animate.bind(this));const t=this.clock.getDelta();this.time+=t,this.mouse.x+=(this.targetMouse.x-this.mouse.x)*.08,this.mouse.y+=(this.targetMouse.y-this.mouse.y)*.08;const e=this.targetMouse.x-this.prevMouse.x,n=this.targetMouse.y-this.prevMouse.y,i=t>0?Math.sqrt(e*e+n*n)/t:0;this.prevMouse.copy(this.targetMouse),this.particles&&this.particles.update(t,i,this.mouse),this.velocity+=(this.targetVelocity-this.velocity)*.1,this.targetVelocity*=.9,this.uniforms.uMouse.value.copy(this.mouse),this.uniforms.uVelocity.value=this.velocity,this.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}destroy(){window.removeEventListener("resize",this.onResize),window.removeEventListener("mousemove",this.onMouseMove),this.textures.forEach(t=>t&&t.dispose()),this.geometry.dispose(),this.material.dispose(),this.renderer.dispose()}}class tS{constructor(t,e=250){this.scene=t,this.count=e,this.particlePositions=[],this.velocities=[],this.init()}init(){this.geometry=new Fi;const t=new Float32Array(this.count*3);for(let a=0;a<this.count;a++){const o=(Math.random()-.5)*4,l=(Math.random()-.5)*4,c=(Math.random()-.5)*2-.5;t[a*3]=o,t[a*3+1]=l,t[a*3+2]=c,this.velocities.push({x:(Math.random()-.5)*.05,y:Math.random()*.08+.02,z:(Math.random()-.5)*.02})}this.geometry.setAttribute("position",new ai(t,3));const e=document.createElement("canvas");e.width=16,e.height=16;const n=e.getContext("2d"),i=n.createRadialGradient(8,8,0,8,8,8);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=i,n.fillRect(0,0,16,16);const s=new jx(e);this.material=new _d({color:13434624,size:.015,map:s,transparent:!0,opacity:.35,blending:Ql,depthWrite:!1,depthTest:!1}),this.points=new qx(this.geometry,this.material),this.scene.add(this.points)}update(t,e,n){if(!this.geometry)return;const i=this.geometry.attributes.position.array;for(let s=0;s<this.count;s++){let a=i[s*3],o=i[s*3+1],l=i[s*3+2];const c=this.velocities[s];o+=c.y*t,a+=(c.x+Math.sin(o*2+s)*.02)*t;const u=(n.x-.5)*3,f=(n.y-.5)*3,h=u-a,d=f-o,_=Math.sqrt(h*h+d*d);if(_<.8){const g=(.8-_)*.15*e;a+=h/_*g,o+=d/_*g}o>2&&(o=-2,a=(Math.random()-.5)*4),a>2&&(a=-2),a<-2&&(a=2),i[s*3]=a,i[s*3+1]=o,i[s*3+2]=l}this.geometry.attributes.position.needsUpdate=!0}destroy(){this.scene.remove(this.points),this.geometry.dispose(),this.material.dispose()}}var jh="1.3.25";function gd(r,t,e){return Math.max(r,Math.min(t,e))}function eS(r,t,e){return(1-e)*r+e*t}function nS(r,t,e,n){return eS(r,t,1-Math.exp(-e*n))}function iS(r,t){return(r%t+t)%t}var rS=class{constructor(){bt(this,"isRunning",!1);bt(this,"value",0);bt(this,"from",0);bt(this,"to",0);bt(this,"currentTime",0);bt(this,"lerp");bt(this,"duration");bt(this,"easing");bt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=gd(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=nS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function sS(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var aS=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){bt(this,"width",0);bt(this,"height",0);bt(this,"scrollHeight",0);bt(this,"scrollWidth",0);bt(this,"debouncedResize");bt(this,"wrapperResizeObserver");bt(this,"contentResizeObserver");bt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});bt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});bt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=sS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},vd=class{constructor(){bt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const oS=100/6,Wi={passive:!1};function $h(r,t){return r===1?oS:r===2?t:1}var lS=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){bt(this,"touchStart",{x:0,y:0});bt(this,"lastDelta",{x:0,y:0});bt(this,"window",{width:0,height:0});bt(this,"emitter",new vd);bt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});bt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});bt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});bt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=$h(n,this.window.width),s=$h(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});bt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Wi),this.element.addEventListener("touchstart",this.onTouchStart,Wi),this.element.addEventListener("touchmove",this.onTouchMove,Wi),this.element.addEventListener("touchend",this.onTouchEnd,Wi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Wi),this.element.removeEventListener("touchstart",this.onTouchStart,Wi),this.element.removeEventListener("touchmove",this.onTouchMove,Wi),this.element.removeEventListener("touchend",this.onTouchEnd,Wi)}};const Kh=r=>Math.min(1,1.001-2**(-10*r));var cS=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:y=!0,autoRaf:x=!1,anchors:M=!1,autoToggle:R=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:L=E,stopInertiaOnNavigate:O=!1}={}){bt(this,"_isScrolling",!1);bt(this,"_isStopped",!1);bt(this,"_isLocked",!1);bt(this,"_preventNextNativeScrollEvent",!1);bt(this,"_resetVelocityTimeout",null);bt(this,"_rafId",null);bt(this,"_isDraggingSelection",!1);bt(this,"isTouching");bt(this,"isIos");bt(this,"time",0);bt(this,"userData",{});bt(this,"lastVelocity",0);bt(this,"velocity",0);bt(this,"direction",0);bt(this,"options");bt(this,"targetScroll");bt(this,"animatedScroll");bt(this,"animate",new rS);bt(this,"emitter",new vd);bt(this,"dimensions");bt(this,"virtualScroll");bt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});bt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});bt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});bt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});bt(this,"onPointerDown",r=>{r.button===1&&this.reset()});bt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,p,m,y,x;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||i&&((y=_.hasAttribute)==null?void 0:y.call(_,"data-lenis-prevent-touch"))||s&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});bt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});bt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=jh,window.lenis||(window.lenis={}),window.lenis.version=jh,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=Kh:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:y,autoRaf:x,anchors:M,autoToggle:R,allowNestedScroll:A,naiveDimensions:L,stopInertiaOnNavigate:O},this.dimensions=new aS(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new lS(e,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=a,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,d=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?M.left:M.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),y=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=gd(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=Kh:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,f,h,d,_;if(n-(i.time??0)>2e3){i.time=Date.now();const A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),a=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,_=r.clientHeight,o=f>d,l=h>_,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,y,x,M,R;if(g==="horizontal")p=Math.round(r.scrollLeft),m=f-d,y=t,x=s,M=o,R=c;else if(g==="vertical")p=Math.round(r.scrollTop),m=h-_,y=e,x=a,M=l,R=u;else return!1;return!R&&(p>=m||p<=0)?!0:(y>0?p<m:p>0)&&x&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?iS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function Ei(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_a={duration:.5,overwrite:!1,delay:0},yu,Qe,we,$n=1e8,Se=1/$n,Gc=Math.PI*2,uS=Gc/4,hS=0,Sd=Math.sqrt,fS=Math.cos,dS=Math.sin,Ke=function(t){return typeof t=="string"},Pe=function(t){return typeof t=="function"},Ui=function(t){return typeof t=="number"},Eu=function(t){return typeof t>"u"},_i=function(t){return typeof t=="object"},En=function(t){return t!==!1},Tu=function(){return typeof window<"u"},so=function(t){return Pe(t)||Ke(t)},Md=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,pS=/random\([^)]+\)/g,mS=/,\s*/g,Zh=/(?:-?\.?\d|\.)+/gi,yd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ed=/[+-]=-?[.\d]+/,_S=/[^,'"\[\]\s]+/gi,gS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,li,Vc,bu,Hn={},zo={},Td,bd=function(t){return(zo=Ps(t,Hn))&&An},wu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ga=function(t,e){return!e&&console.warn(t)},wd=function(t,e){return t&&(Hn[t]=e)&&zo&&(zo[t]=e)||Hn},va=function(){return 0},vS={suppressEvents:!0,isStart:!0,kill:!1},wo={suppressEvents:!0,kill:!1},xS={suppressEvents:!0},Au={},tr=[],Wc={},Ad,Un={},zl={},Jh=30,Ao=[],Ru="",Cu=function(t){var e=t[0],n,i;if(_i(e)||Pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ao.length;i--&&!Ao[i].targetTest(e););n=Ao[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new $d(t[i],n)))||t.splice(i,1);return t},Pr=function(t){return t._gsap||Cu(Kn(t))[0]._gsap},Rd=function(t,e,n){return(n=t[e])&&Pe(n)?t[e]():Eu(n)&&t.getAttribute&&t.getAttribute(e)||n},Tn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},gs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},SS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ko=function(){var t=tr.length,e=tr.slice(0),n,i;for(Wc={},tr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pu=function(t){return!!(t._initted||t._startAt||t.add)},Cd=function(t,e,n,i){tr.length&&!Qe&&ko(),t.render(e,n,!!(Qe&&e<0&&Pu(t))),tr.length&&!Qe&&ko()},Pd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(_S).length<2?e:Ke(t)?t.trim():t},Ld=function(t){return t},Gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},MS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ps=function(t,e){for(var n in e)t[n]=e[n];return t},Qh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=_i(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ho=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},na=function(t){var e=t.parent||Re,n=t.keyframes?MS(ln(t.keyframes)):Gn;if(En(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},yS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Dd=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},tl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},rr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Lr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ES=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Xc=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(wo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},TS=function r(t){return!t||t._ts&&r(t.parent)},tf=function(t){return t._repeat?Ls(t._tTime,t=t.duration()+t._rDelay)*t:0},Ls=function(t,e){var n=Math.floor(t=Ae(t/e));return t&&n===t?n-1:n},Go=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},el=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},nl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),el(t),n._dirty||Lr(n,t)),t},Id=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Go(t.rawTime(),e),(!e._dur||Ia(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),Lr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},hi=function(t,e,n,i){return e.parent&&rr(e),e._start=Ae((Ui(n)?n:n||t!==Re?Xn(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Dd(t,e,"_first","_last",t._sort?"_start":0),Yc(e)||(t._recent=e),i||Id(t,e),t._ts<0&&nl(t,t._tTime),t},Ud=function(t,e){return(Hn.ScrollTrigger||wu("scrollTrigger",e))&&Hn.ScrollTrigger.create(e,t)},Nd=function(t,e,n,i,s){if(Du(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ad!==Fn.frame)return tr.push(t),t._lazy=[s,i],1},bS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Yc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},wS=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&bS(t)&&!(!t._initted&&Yc(t))||(t._ts<0||t._dp._ts<0)&&!Yc(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=Ia(0,t._tDur,e),u=Ls(l,o),t._yoyo&&u&1&&(a=1-a),u!==Ls(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Qe||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Nd(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Xc(t,e,n,!0),t._onUpdate&&!n&&Bn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&rr(t,1),!n&&!Qe&&(Bn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},AS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ds=function(t,e,n,i){var s=t._repeat,a=Ae(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ae(a*(s+1)+t._rDelay*s):a,o>0&&!i&&nl(t,t._tTime=t._tDur*o),t.parent&&el(t),n||Lr(t.parent,t),t},ef=function(t){return t instanceof Sn?Lr(t):Ds(t,t._dur)},RS={_start:0,endTime:va,totalDuration:va},Xn=function r(t,e,n){var i=t.labels,s=t._recent||RS,a=t.duration()>=$n?s.endTime(!1):t._dur,o,l,c;return Ke(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ia=function(t,e,n){var i=Ui(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;a.immediateRender=En(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new He(e[0],a,e[s+1])},cr=function(t,e){return t||t===0?e(t):e},Ia=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!Ke(t)||!(e=gS.exec(t))?"":e[1]},CS=function(t,e,n){return cr(n,function(i){return Ia(t,e,i)})},qc=[].slice,Fd=function(t,e){return t&&_i(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&_i(t[0]))&&!t.nodeType&&t!==li},PS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ke(i)&&!e||Fd(i,1)?(s=n).push.apply(s,Kn(i)):n.push(i)})||n},Kn=function(t,e,n){return we&&!e&&we.selector?we.selector(t):Ke(t)&&!n&&(Vc||!Is())?qc.call((e||bu).querySelectorAll(t),0):ln(t)?PS(t,n):Fd(t)?qc.call(t,0):t?[t]:[]},jc=function(t){return t=Kn(t)[0]||ga("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Kn(e,n.querySelectorAll?n:n===t?ga("Invalid scope")||bu.createElement("div"):t)}},Od=function(t){return t.sort(function(){return .5-Math.random()})},Bd=function(t){if(Pe(t))return t;var e=_i(t)?t:{each:t},n=Dr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,f=i;return Ke(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||e).length,p=a[g],m,y,x,M,R,A,E,L,O;if(!p){if(O=e.grid==="auto"?0:(e.grid||[1,$n])[1],!O){for(E=-$n;E<(E=_[O++].getBoundingClientRect().left)&&O<g;);O<g&&O--}for(p=a[g]=[],m=l?Math.min(O,g)*u-.5:i%O,y=O===$n?0:l?g*f/O-.5:i/O|0,E=0,L=$n,A=0;A<g;A++)x=A%O-m,M=y-(A/O|0),p[A]=R=c?Math.abs(c==="y"?M:x):Sd(x*x+M*M),R>E&&(E=R),R<L&&(L=R);i==="random"&&Od(p),p.max=E-L,p.min=L,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(O>g?g-1:c?c==="y"?g/O:O:Math.max(O,g/O))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=sn(e.amount||e.each)||0,n=n&&g<0?VS(n):n}return g=(p[h]-p.min)/p.max||0,Ae(p.b+(n?n(g):g)*p.v)+p.u}},$c=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ui(n)?0:sn(n))}},zd=function(t,e){var n=ln(t),i,s;return!n&&_i(t)&&(i=n=t.radius||$n,t.values?(t=Kn(t.values),(s=!Ui(t[0]))&&(i*=i)):t=$c(t.increment)),cr(e,n?Pe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=$n,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:a,s||u===a||Ui(a)?u:u+sn(a)}:$c(t))},kd=function(t,e,n,i){return cr(ln(t)?!e:n===!0?!!(n=0):!i,function(){return ln(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},LS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},DS=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},IS=function(t,e,n){return Gd(t,e,0,1,n)},Hd=function(t,e,n){return cr(n,function(i){return t[~~e(i)]})},US=function r(t,e,n){var i=e-t;return ln(t)?Hd(t,r(0,t.length),e):cr(n,function(s){return(i+(s-t)%i)%i+t})},NS=function r(t,e,n){var i=e-t,s=i*2;return ln(t)?Hd(t,r(0,t.length-1),e):cr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},xa=function(t){return t.replace(pS,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(mS);return kd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Gd=function(t,e,n,i,s){var a=e-t,o=i-n;return cr(s,function(l){return n+((l-t)/a*o||0)})},FS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ke(t),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(ln(t)&&!ln(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=Ps(ln(t)?[]:{},t));if(!u){for(l in e)Lu.call(o,t,l,"get",e[l]);s=function(_){return Nu(_,o)||(a?t.p:t)}}}return cr(n,s)},nf=function(t,e,n){var i=t.labels,s=$n,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Bn=function(t,e,n){var i=t.vars,s=i[e],a=we,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&tr.length&&ko(),o&&(we=o),u=l?s.apply(c,l):s.call(c),we=a,u},$s=function(t){return rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&Bn(t,"onInterrupt"),t},fs,Vd=[],Wd=function(t){if(t)if(t=!t.name&&t.default||t,Tu()||t.headless){var e=t.name,n=Pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:va,render:Nu,add:Lu,kill:QS,modifier:JS,rawVars:0},a={targetTest:0,get:0,getSetter:Uu,aliases:{},register:0};if(Is(),t!==i){if(Un[e])return;Gn(i,Gn(Ho(t,s),a)),Ps(i.prototype,Ps(s,Ho(t,a))),Un[i.prop=e]=i,t.targetTest&&(Ao.push(i),Au[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}wd(e,i),t.register&&t.register(An,i,bn)}else Vd.push(t)},xe=255,Ks={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},kl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},Xd=function(t,e,n){var i=t?Ui(t)?[t>>16,t>>8&xe,t&xe]:0:Ks.black,s,a,o,l,c,u,f,h,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ks[t])i=Ks[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Zh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=kl(l+1/3,s,a),i[1]=kl(l,s,a),i[2]=kl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(yd),n&&i.length<4&&(i[3]=1),i}else i=t.match(Zh)||Ks.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/xe,a=i[1]/xe,o=i[2]/xe,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Yd=function(t){var e=[],n=[],i=-1;return t.split(er).forEach(function(s){var a=s.match(hs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},rf=function(t,e,n){var i="",s=(t+i).match(er),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Xd(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Yd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(er,"1").split(hs),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(er),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},er=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ks)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),OS=/hsl[a]?\(/,qd=function(t){var e=t.join(" "),n;if(er.lastIndex=0,er.test(e))return n=OS.test(e),t[1]=rf(t[1],n),t[0]=rf(t[0],n,Yd(t[1])),!0},Sa,Fn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,_=function g(p){var m=r()-i,y=p===!0,x,M,R,A;if((m>t||m<0)&&(n+=m-e),i+=m,R=i-n,x=R-a,(x>0||y)&&(A=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,a+=x+(x>=s?4:s-x),M=1),y||(l=c(g)),M)for(d=0;d<o.length;d++)o[d](R,h,A,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Td&&(!Vc&&Tu()&&(li=Vc=window,bu=li.document||{},Hn.gsap=An,(li.gsapVersions||(li.gsapVersions=[])).push(An.version),bd(zo||li.GreenSockGlobals||!li.gsap&&li||{}),Vd.forEach(Wd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Sa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sa=0,c=va},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,y){var x=m?function(M,R,A,E){p(M,R,A,E),f.remove(x)}:p;return f.remove(p),o[y?"unshift":"push"](x),Is(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f}(),Is=function(){return!Sa&&Fn.wake()},oe={},BS=/^[\d.\-M][\d.\-,\s]/,zS=/["']/g,kS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(zS,"").trim():+c,i=l.substr(o+1).trim();return e},HS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},GS=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[kS(e[1])]:HS(t).split(",").map(Pd)):oe._CE&&BS.test(t)?oe._CE("",t):n},VS=function(t){return function(e){return 1-t(1-e)}},Dr=function(t,e){return t&&(Pe(t)?t:oe[t]||GS(t))||e},Gr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Tn(t,function(o){oe[o]=Hn[o]=s,oe[a=o.toLowerCase()]=n;for(var l in s)oe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[o+"."+l]=s[l]}),s},jd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Hl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Gc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*dS((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:jd(o);return s=Gc/s,l.config=function(c,u){return r(t,c,u)},l},Gl=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:jd(n);return i.config=function(s){return r(t,s)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Gr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Gr("Elastic",Hl("in"),Hl("out"),Hl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Gr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gr("Circ",function(r){return-(Sd(1-r*r)-1)});Gr("Sine",function(r){return r===1?1:-fS(r*uS)+1});Gr("Back",Gl("in"),Gl("out"),Gl());oe.SteppedEase=oe.steps=Hn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Se;return function(o){return((i*Ia(0,a,o)|0)+s)*n}}};_a.ease=oe["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ru+=r+","+r+"Params,"});var $d=function(t,e){this.id=hS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Rd,this.set=e?e.getSetter:Uu},Ma=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ds(this,+e.duration,1,1),this.data=e.data,we&&(this._ctx=we,we.data.push(this)),Sa||Fn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ds(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nl(this,n),!s._dp||s.parent||Id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ls(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Go(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(Ia(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),el(this),ES(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ae(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Go(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=xS);var i=Qe;return Qe=n,Pu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ef(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ef(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Xn(this,n),En(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Pe(n)?n:Ld,l=function(){var u=i.then;i.then=null,s&&s(),Pe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){$s(this)},r}();Gn(Ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Sn=function(r){xd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),Re&&hi(n.parent||Re,Ei(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ud(Ei(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ia(0,arguments,this),this},e.from=function(i,s,a){return ia(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ia(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,na(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,Xn(this,a),1),this},e.call=function(i,s,a){return hi(this,He.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new He(i,a,Xn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,na(a).immediateRender=En(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,na(o).immediateRender=En(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ae(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,p,m,y,x,M,R,A,E;if(this!==Re&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,x=this._ts,m=!x,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Ae(u%p),u===l?(g=this._repeat,h=c):(R=Ae(u/p),g=~~R,g&&g===R&&(h=c,g--),h>c&&(h=c)),R=Ls(this._tTime,p),!o&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),A&&g&1&&(h=c-h,E=1),g!==R&&!this._lock){var L=A&&R&1,O=L===(A&&g&1);if(g<R&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Ae(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,R=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,O&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=AS(this,Ae(o),Ae(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!R&&(Bn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-Se);break}}d=_}else{d=this._last;for(var v=i<0?i:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||Qe&&Pu(d)),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=v?-Se:Se);break}}d=_}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-Se)._zTime=h>=o?1:-1,this._ts))return this._start=M,el(this),this.render(i,s,a);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Bn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Ui(s)||(s=Xn(this,s,i)),!(i instanceof Ma)){if(ln(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ke(i))return this.addLabel(i,s);if(Pe(i))i=He.delayedCall(0,i);else return this}return this!==i?hi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-$n);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof He?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ke(i)?this.removeLabel(i):Pe(i)?this.killTweensOf(i):(i.parent===this&&tl(this,i),i===this._recent&&(this._recent=this._last),Lr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(Fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Xn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=He.delayedCall(0,s||va,a);return o.data="isPause",this._hasPause=1,hi(this,o,Xn(this,i))},e.removePause=function(i){var s=this._first;for(i=Xn(this,i);s;)s._start===i&&s.data==="isPause"&&rr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)qi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Kn(i),l=this._first,c=Ui(s),u;l;)l instanceof He?SS(l._targets,o)&&(c?(!qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Xn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=He.to(a,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Se,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Ds(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Gn({startAt:{time:Xn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),nf(this,Xn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),nf(this,Xn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ae(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Lr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Lr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=$n,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,hi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ae(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ds(a,a===Re&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Re._ts&&(Cd(Re,Go(i,Re)),Ad=Fn.frame),Fn.frame>=Jh){Jh+=kn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&kn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},t}(Ma);Gn(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var WS=function(t,e,n,i,s,a,o){var l=new bn(this._pt,t,e,0,1,ep,null,s),c=0,u=0,f,h,d,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=xa(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),h=n.match(Bl)||[];f=Bl.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?gs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Bl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ed.test(i)||m)&&(l.e=0),this._pt=l,l},Lu=function(t,e,n,i,s,a,o,l,c,u){Pe(i)&&(i=i(s||0,t,a));var f=t[e],h=n!=="get"?n:Pe(f)?c?t[e.indexOf("set")||!Pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Pe(f)?c?$S:Qd:Iu,_;if(Ke(i)&&(~i.indexOf("random(")&&(i=xa(i)),i.charAt(1)==="="&&(_=gs(h,i)+(sn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Kc)return!isNaN(h*i)&&i!==""?(_=new bn(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?ZS:tp,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&wu(e,i),WS.call(this,t,e,h,i,d,l||kn.stringFilter,c))},XS=function(t,e,n,i,s){if(Pe(t)&&(t=ra(t,s,e,n,i)),!_i(t)||t.style&&t.nodeType||ln(t)||Md(t))return Ke(t)?ra(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ra(t[o],s,e,n,i);return a},Kd=function(t,e,n,i,s,a){var o,l,c,u;if(Un[t]&&(o=new Un[t]).init(s,o.rawVars?e[t]:XS(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new bn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},qi,Kc,Du=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!yu,M=t.timeline,R=i.easeReverse||f,A,E,L,O,v,T,N,z,W,$,G,X,V;if(M&&(!h||!s)&&(s="none"),t._ease=Dr(s,_a.ease),t._rEase=R&&(Dr(R)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||h&&!i.stagger){if(z=p[0]?Pr(p[0]).harness:0,X=z&&i[z.prop],A=Ho(i,Au),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?wo:vS),g._lazy=0),a){if(rr(t._startAt=He.set(p,Gn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!o&&!d)&&t._startAt.revert(wo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),L=Gn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&En(l),immediateRender:o,stagger:0,parent:m},A),X&&(L[z.prop]=X),rr(t._startAt=He.set(p,L)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(wo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&En(l)||l&&!_,E=0;E<p.length;E++){if(v=p[E],N=v._gsap||Cu(p)[E]._gsap,t._ptLookup[E]=$={},Wc[N.id]&&tr.length&&ko(),G=y===p?E:y.indexOf(v),z&&(W=new z).init(v,X||A,t,G,y)!==!1&&(t._pt=O=new bn(t._pt,v,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(rt){$[rt]=O}),W.priority&&(T=1)),!z||X)for(L in A)Un[L]&&(W=Kd(L,A,t,G,v,y))?W.priority&&(T=1):$[L]=O=Lu.call(t,v,L,"get",A[L],G,y,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),x&&t._pt&&(qi=t,Re.killTweensOf(v,$,t.globalTime(e)),V=!t.parent,qi=0),t._pt&&l&&(Wc[N.id]=1)}T&&np(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,h&&e<=0&&M.render($n,!0,!0)},YS=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Kc=1,t.vars[e]="+=0",Du(t,o),Kc=0,l?ga(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Ue(n)+sn(f.e)),f.b&&(f.b=u.s+sn(f.b))},qS=function(t,e){var n=t[0]?Pr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ps({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},jS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(ln(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ra=function(t,e,n,i,s){return Pe(t)?t.call(e,n,i,s):Ke(t)&&~t.indexOf("random(")?xa(t):t},Zd=Ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jd={};Tn(Zd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jd[r]=1});var He=function(r){xd(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:na(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Re,y=(ln(n)||Md(n)?Ui(n[0]):"length"in i)?[n]:Kn(n),x,M,R,A,E,L,O,v;if(o._targets=y.length?Cu(y):ga("GSAP target "+n+" not found. https://gsap.com",!kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||so(c)||so(u)){i=o.vars;var T=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Sn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),x.kill(),x.parent=x._dp=Ei(o),x._start=0,h||so(c)||so(u)){if(A=y.length,O=h&&Bd(h),_i(h))for(E in h)~Zd.indexOf(E)&&(v||(v={}),v[E]=h[E]);for(M=0;M<A;M++)R=Ho(i,Jd),R.stagger=0,T&&(R.easeReverse=T),v&&Ps(R,v),L=y[M],R.duration=+ra(c,Ei(o),M,L,y),R.delay=(+ra(u,Ei(o),M,L,y)||0)-o._delay,!h&&A===1&&R.delay&&(o._delay=u=R.delay,o._start+=u,R.delay=0),x.to(L,R,O?O(M,L,y):0),x._ease=oe.none;x.duration()?c=u=0:o.timeline=0}else if(_){na(Gn(x.vars.defaults,{ease:"none"})),x._ease=Dr(_.ease||i.ease||"none");var N=0,z,W,$;if(ln(_))_.forEach(function(G){return x.to(y,G,">")}),x.duration();else{R={};for(E in _)E==="ease"||E==="easeEach"||jS(E,_[E],R,_.easeEach);for(E in R)for(z=R[E].sort(function(G,X){return G.t-X.t}),N=0,M=0;M<z.length;M++)W=z[M],$={ease:W.e,duration:(W.t-(M?z[M-1].t:0))/100*c},$[E]=W.v,x.to(y,$,N),N+=$.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!yu&&(qi=Ei(o),Re.killTweensOf(y),qi=0),hi(m,Ei(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===Ae(m._time)&&En(f)&&TS(Ei(o))&&m.data!=="nested")&&(o._tTime=-Se,o.render(Math.max(0,-u)||0)),p&&Ud(Ei(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Se&&!u?l:i<Se?0:i,h,d,_,g,p,m,y,x;if(!c)wS(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=Ae(f%g),f===l?(_=this._repeat,h=c):(p=Ae(f/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(h=c-h),p=Ls(this._tTime,g),h===o&&!a&&this._initted&&_===p)return this._tTime=f,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Ae(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Nd(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var R=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=R?(M?-1:1)/R:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!p&&(Bn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Xc(this,i,s,a),Bn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Xc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&rr(this,1),!s&&!(u&&!o)&&(f||o||m)&&(Bn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Sa||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Du(this,c),u=this._ease(c/this._dur),YS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(nl(this,0),this.parent||Dd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$s(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,qi&&qi.vars.overwrite!==!0)._first||$s(this),this.parent&&a!==this.timeline.totalDuration()&&Ds(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Kn(i):o,c=this._ptLookup,u=this._pt,f,h,d,_,g,p,m;if((!s||s==="all")&&yS(o,l))return s==="all"&&(this._pt=0),$s(this);for(f=this._op=this._op||[],s!=="all"&&(Ke(s)&&(g={},Tn(s,function(y){return g[y]=1}),s=g),s=qS(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,_=h,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&tl(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&$s(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ia(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ia(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Re.killTweensOf(i,s,a)},t}(Ma);Gn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new Sn,e=qc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Iu=function(t,e,n){return t[e]=n},Qd=function(t,e,n){return t[e](n)},$S=function(t,e,n,i){return t[e](i.fp,n)},KS=function(t,e,n){return t.setAttribute(e,n)},Uu=function(t,e){return Pe(t[e])?Qd:Eu(t[e])&&t.setAttribute?KS:Iu},tp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ZS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ep=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Nu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},JS=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},QS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?tl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},np=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},bn=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||tp,this.d=l||this,this.set=c||Iu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tM,this.m=n,this.mt=s,this.tween=i},r}();Tn(Ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Au[r]=1});Hn.TweenMax=Hn.TweenLite=He;Hn.TimelineLite=Hn.TimelineMax=Sn;Re=new Sn({sortChildren:!1,defaults:_a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=qd;var Ir=[],Ro={},eM=[],sf=0,nM=0,Vl=function(t){return(Ro[t]||eM).map(function(e){return e()})},Zc=function(){var t=Date.now(),e=[];t-sf>2&&(Vl("matchMediaInit"),Ir.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=li.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Vl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),sf=t,Vl("matchMedia"))},ip=function(){function r(e,n){this.selector=n&&jc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Pe(n)&&(s=i,i=n,n=Pe);var a=this,o=function(){var c=we,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=jc(s)),we=a,f=i.apply(a,arguments),Pe(f)&&a._r.push(f),we=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Pe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=we;we=null,n(this),we=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ir.length;a--;)Ir[a].id===this.id&&Ir.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),iM=function(){function r(e){this.contexts=[],this.scope=e,we&&we.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){_i(n)||(n={matches:n});var a=new ip(0,s||this.scope),o=a.conditions={},l,c,u;we&&!a.selector&&(a.selector=we.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=li.matchMedia(n[c]),l&&(Ir.indexOf(a)<0&&Ir.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zc):l.addEventListener("change",Zc)));return u&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Vo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Wd(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ke(t)&&(t=Kn(t)[0]);var s=Pr(t||{}).get,a=n?Ld:Pd;return n==="native"&&(n=""),t&&(e?a((Un[e]&&Un[e].get||s)(t,e,n,i)):function(o,l,c){return a((Un[o]&&Un[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Kn(t),t.length>1){var i=t.map(function(u){return An.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var a=Un[e],o=Pr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;fs._pt=0,f.init(t,n?u+n:u,fs,0,[t]),f.render(1,f),fs._pt&&Nu(1,fs)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=An.to(t,Gn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Dr(t.ease,_a.ease)),Qh(_a,t||{})},config:function(t){return Qh(kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Un[o]&&!Hn[o]&&ga(e+" effect requires "+o+" plugin.")}),zl[e]=function(o,l,c){return n(Kn(o),Gn(l||{},s),c)},a&&(Sn.prototype[e]=function(o,l,c){return this.add(zl[e](o,_i(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Dr(e)},parseEase:function(t,e){return arguments.length?Dr(t,e):oe},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=En(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&hi(n,i,i._start-i._delay),i=s;return hi(Re,n,0),n},context:function(t,e){return t?new ip(t,e):we},matchMedia:function(t){return new iM(t)},matchMediaRefresh:function(){return Ir.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Zc()},addEventListener:function(t,e){var n=Ro[t]||(Ro[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ro[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:US,wrapYoyo:NS,distribute:Bd,random:kd,snap:zd,normalize:IS,getUnit:sn,clamp:CS,splitColor:Xd,toArray:Kn,selector:jc,mapRange:Gd,pipe:LS,unitize:DS,interpolate:FS,shuffle:Od},install:bd,effects:zl,ticker:Fn,updateRoot:Sn.updateRoot,plugins:Un,globalTimeline:Re,core:{PropTween:bn,globals:wd,Tween:He,Timeline:Sn,Animation:Ma,getCache:Pr,_removeLinkedListItem:tl,reverting:function(){return Qe},context:function(t){return t&&we&&(we.data.push(t),t._ctx=we),we},suppressOverwrites:function(t){return yu=t}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vo[r]=He[r]});Fn.add(Sn.updateRoot);fs=Vo.to({},{duration:0});var rM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},sM=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=rM(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Wl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ke(s)&&(l={},Tn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}sM(o,s)}}}},An=Vo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wl("roundProps",$c),Wl("modifiers"),Wl("snap",zd))||Vo;He.version=Sn.version=An.version="3.15.0";Td=1;Tu()&&Is();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var af,ji,vs,Fu,Ar,of,Ou,aM=function(){return typeof window<"u"},Ni={},Sr=180/Math.PI,xs=Math.PI/180,rs=Math.atan2,lf=1e8,Bu=/([A-Z])/g,oM=/(left|right|width|margin|padding|x)/i,lM=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},cM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},uM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},hM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},rp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},sp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},dM=function(t,e,n){return t.style[e]=n},pM=function(t,e,n){return t.style.setProperty(e,n)},mM=function(t,e,n){return t._gsap[e]=n},_M=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},gM=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},vM=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ce="transform",wn=Ce+"Origin",xM=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Ni&&s){if(this.tfm=this.tfm||{},t!=="transform")t=di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ti(i,o)}):this.tfm[t]=a.x?a[t]:Ti(i,t),t===wn&&(this.tfm.zOrigin=a.zOrigin);else return di.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ce)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,e,"")),t=Ce}(s||e)&&this.props.push(t,e,s[t])},ap=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},SM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Bu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ou(),(!s||!s.isStart)&&!n[Ce]&&(ap(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},op=function(t,e){var n={target:t,props:[],revert:SM,save:xM};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},lp,Qc=function(t,e){var n=ji.createElementNS?ji.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ji.createElement(t);return n&&n.style?n:ji.createElement(t)},zn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Bu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Us(e)||e,1)||""},cf="O,Moz,ms,Ms,Webkit".split(","),Us=function(t,e,n){var i=e||Ar,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(cf[a]+t in s););return a<0?null:(a===3?"ms":a>=0?cf[a]:"")+t},tu=function(){aM()&&window.document&&(af=window,ji=af.document,vs=ji.documentElement,Ar=Qc("div")||{style:{}},Qc("div"),Ce=Us(Ce),wn=Ce+"Origin",Ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lp=!!Us("perspective"),Ou=An.core.reverting,Fu=1)},uf=function(t){var e=t.ownerSVGElement,n=Qc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),vs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),vs.removeChild(n),s},hf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},cp=function(t){var e,n;try{e=t.getBBox()}catch{e=uf(t),n=1}return e&&(e.width||e.height)||n||(e=uf(t)),e&&!e.width&&!e.x&&!e.y?{x:+hf(t,["x","cx","x1"])||0,y:+hf(t,["y","cy","y1"])||0,width:0,height:0}:e},up=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&cp(t))},sr=function(t,e){if(e){var n=t.style,i;e in Ni&&e!==wn&&(e=Ce),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Bu,"-$1").toLowerCase())):n.removeAttribute(e)}},$i=function(t,e,n,i,s,a){var o=new bn(t._pt,e,n,0,1,a?sp:rp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},ff={deg:1,rad:1,turn:1},MM={grid:1,flex:1},ar=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ar.style,l=oM.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,p,m;if(i===a||!s||ff[i]||ff[a])return s;if(a!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&up(t),(d||a==="%")&&(Ni[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Ue(d?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(h?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ji||!g.appendChild)&&(g=ji.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Fn.time&&!p.uncache)return Ue(s/p.width*f);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,_=t[u],y?t.style[e]=y:sr(t,e)}else(d||a==="%")&&!MM[zn(g,"display")]&&(o.position=zn(t,"position")),g===t&&(o.position="static"),g.appendChild(Ar),_=Ar[u],g.removeChild(Ar),o.position="absolute";return l&&d&&(p=Pr(g),p.time=Fn.time,p.width=g[u]),Ue(h?_*s/f:_&&s?f/_*s:0)},Ti=function(t,e,n,i){var s;return Fu||tu(),e in di&&e!=="transform"&&(e=di[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ni[e]&&e!=="transform"?(s=Ea(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Xo(zn(t,wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wo[e]&&Wo[e](t,e,n)||zn(t,e)||Rd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ar(t,e,s,n)+n:s},yM=function(t,e,n,i){if(!n||n==="none"){var s=Us(e,t,1),a=s&&zn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=zn(t,"borderTopColor"))}var o=new bn(this._pt,t.style,e,0,1,ep),l=0,c=0,u,f,h,d,_,g,p,m,y,x,M,R;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=zn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=zn(t,e)||i,g?t.style[e]=g:sr(t,e)),u=[n,i],qd(u),n=u[0],i=u[1],h=n.match(hs)||[],R=i.match(hs)||[],R.length){for(;f=hs.exec(i);)p=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),p.charAt(1)==="="&&(p=gs(d,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=hs.lastIndex-x.length,x||(x=x||kn.units[e]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(d=ar(t,e,g,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?sp:rp;return Ed.test(i)&&(o.e=0),this._pt=o,o},df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},EM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=df[n]||n,e[1]=df[i]||i,e.join(" ")},TM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ni[o]&&(l=1,o=o==="transformOrigin"?wn:Ce),sr(n,o);l&&(sr(n,Ce),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ea(n,1),a.uncache=1,ap(i)))}},Wo={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new bn(t._pt,e,n,0,0,TM);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ya=[1,0,0,1,0,0],hp={},fp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},pf=function(t){var e=zn(t,Ce);return fp(e)?ya:e.substr(7).match(yd).map(Ue)},zu=function(t,e){var n=t._gsap||Pr(t),i=t.style,s=pf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ya:s):(s===ya&&!t.offsetParent&&t!==vs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,vs.appendChild(t)),s=pf(t),l?i.display=l:sr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):vs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},eu=function(t,e,n,i,s,a){var o=t._gsap,l=s||zu(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],x=e.split(" "),M=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,E,L,O;n?l!==ya&&(E=d*p-_*g)&&(L=M*(p/E)+R*(-g/E)+(g*y-p*m)/E,O=M*(-_/E)+R*(d/E)-(d*y-_*m)/E,M=L,R=O):(A=cp(t),M=A.x+(~x[0].indexOf("%")?M/100*A.width:M),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&o.smooth?(m=M-c,y=R-u,o.xOffset=f+(m*d+y*g)-m,o.yOffset=h+(m*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=R,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[wn]="0px 0px",a&&($i(a,o,"xOrigin",c,M),$i(a,o,"yOrigin",u,R),$i(a,o,"xOffset",f,o.xOffset),$i(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+R)},Ea=function(t,e){var n=t._gsap||new $d(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=zn(t,wn)||"0",u,f,h,d,_,g,p,m,y,x,M,R,A,E,L,O,v,T,N,z,W,$,G,X,V,rt,C,ot,Bt,Xt,q,Q;return u=f=h=g=p=m=y=x=M=0,d=_=1,n.svg=!!(t.getCTM&&up(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ce]!=="none"?l[Ce]:"")),i.scale=i.rotate=i.translate="none"),E=zu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),eu(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),R=n.xOrigin||0,A=n.yOrigin||0,E!==ya&&(T=E[0],N=E[1],z=E[2],W=E[3],u=$=E[4],f=G=E[5],E.length===6?(d=Math.sqrt(T*T+N*N),_=Math.sqrt(W*W+z*z),g=T||N?rs(N,T)*Sr:0,y=z||W?rs(z,W)*Sr+g:0,y&&(_*=Math.abs(Math.cos(y*xs))),n.svg&&(u-=R-(R*T+A*z),f-=A-(R*N+A*W))):(Q=E[6],Xt=E[7],C=E[8],ot=E[9],Bt=E[10],q=E[11],u=E[12],f=E[13],h=E[14],L=rs(Q,Bt),p=L*Sr,L&&(O=Math.cos(-L),v=Math.sin(-L),X=$*O+C*v,V=G*O+ot*v,rt=Q*O+Bt*v,C=$*-v+C*O,ot=G*-v+ot*O,Bt=Q*-v+Bt*O,q=Xt*-v+q*O,$=X,G=V,Q=rt),L=rs(-z,Bt),m=L*Sr,L&&(O=Math.cos(-L),v=Math.sin(-L),X=T*O-C*v,V=N*O-ot*v,rt=z*O-Bt*v,q=W*v+q*O,T=X,N=V,z=rt),L=rs(N,T),g=L*Sr,L&&(O=Math.cos(L),v=Math.sin(L),X=T*O+N*v,V=$*O+G*v,N=N*O-T*v,G=G*O-$*v,T=X,$=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Ue(Math.sqrt(T*T+N*N+z*z)),_=Ue(Math.sqrt(G*G+Q*Q)),L=rs($,G),y=Math.abs(L)>2e-4?L*Sr:0,M=q?1/(q<0?-q:q):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!fp(zn(t,Ce)),X&&t.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Ue(d),n.scaleY=Ue(_),n.rotation=Ue(g)+o,n.rotationX=Ue(p)+o,n.rotationY=Ue(m)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[wn]=Xo(c)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?wM:lp?dp:bM,n.uncache=0,n},Xo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xl=function(t,e,n){var i=sn(e);return Ue(parseFloat(e)+parseFloat(ar(t,"x",n+"px",i)))+i},bM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,dp(t,e)},_r="0deg",Ws="0px",gr=") ",dp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,M="",R=m==="auto"&&t&&t!==1||m===!0;if(x&&(f!==_r||u!==_r)){var A=parseFloat(u)*xs,E=Math.sin(A),L=Math.cos(A),O;A=parseFloat(f)*xs,O=Math.cos(A),a=Xl(y,a,E*O*-x),o=Xl(y,o,-Math.sin(A)*-x),l=Xl(y,l,L*O*-x+x)}p!==Ws&&(M+="perspective("+p+gr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(R||a!==Ws||o!==Ws||l!==Ws)&&(M+=l!==Ws||R?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+gr),c!==_r&&(M+="rotate("+c+gr),u!==_r&&(M+="rotateY("+u+gr),f!==_r&&(M+="rotateX("+f+gr),(h!==_r||d!==_r)&&(M+="skew("+h+", "+d+gr),(_!==1||g!==1)&&(M+="scale("+_+", "+g+gr),y.style[Ce]=M||"translate(0, 0)"},wM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(a),M=parseFloat(o),R,A,E,L,O;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=xs,c*=xs,R=Math.cos(l)*f,A=Math.sin(l)*f,E=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=xs,O=Math.tan(c-u),O=Math.sqrt(1+O*O),E*=O,L*=O,u&&(O=Math.tan(u),O=Math.sqrt(1+O*O),R*=O,A*=O)),R=Ue(R),A=Ue(A),E=Ue(E),L=Ue(L)):(R=f,L=h,A=E=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=ar(d,"x",a,"px"),M=ar(d,"y",o,"px")),(_||g||p||m)&&(x=Ue(x+_-(_*R+g*E)+p),M=Ue(M+g-(_*A+g*L)+m)),(i||s)&&(O=d.getBBox(),x=Ue(x+i/100*O.width),M=Ue(M+s/100*O.height)),O="matrix("+R+","+A+","+E+","+L+","+x+","+M+")",d.setAttribute("transform",O),y&&(d.style[Ce]=O)},AM=function(t,e,n,i,s){var a=360,o=Ke(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Sr:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*lf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*lf)%a-~~(c/a)*a)),t._pt=h=new bn(t._pt,e,n,i,c,cM),h.e=u,h.u="deg",t._props.push(n),h},mf=function(t,e){for(var n in e)t[n]=e[n];return t},RM=function(t,e,n){var i=mf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ce]=e,o=Ea(n,1),sr(n,Ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ce],a[Ce]=e,o=Ea(n,1),a[Ce]=c);for(l in Ni)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=sn(c),_=sn(u),f=d!==_?ar(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new bn(t._pt,o,l,f,h-f,Jc),t._pt.u=_||0,t._props.push(l));mf(o,i)};Tn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Wo[t>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return Ti(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var pp={name:"css",register:tu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,_,g,p,m,y,x,M,R,A,E,L,O;Fu||tu(),this.styles=this.styles||op(t),L=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Un[g]&&Kd(g,e,n,i,t,s)))){if(d=typeof u,_=Wo[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=xa(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",er.lastIndex=0,er.test(c)||(p=sn(c),m=sn(u),m?p!==m&&(c=ar(t,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),L.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ke(c)&&~c.indexOf("random(")&&(c=xa(c)),sn(c+"")||c==="auto"||(c+=kn.units[g]||sn(Ti(t,g))||""),(c+"").charAt(1)==="="&&(c=Ti(t,g))):c=Ti(t,g),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),g in di&&(g==="autoAlpha"&&(h===1&&Ti(t,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,o.visibility),$i(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=di[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Ni,x){if(this.styles.save(g),O=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=zn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=zn(t,"perspective"),v?t.style.perspective=v:sr(t,"perspective")}f=parseFloat(u)}if(M||(R=t._gsap,R.renderTransform&&!e.parseTransform||Ea(t,e.parseTransform),A=e.smoothOrigin!==!1&&R.smooth,M=this._pt=new bn(this._pt,o,Ce,0,1,R.renderTransform,R,0,-1),M.dep=1),g==="scale")this._pt=new bn(this._pt,R,"scaleY",R.scaleY,(y?gs(R.scaleY,y+f):f)-R.scaleY||0,Jc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(wn,0,o[wn]),u=EM(u),R.svg?eu(t,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&$i(this,R,"zOrigin",R.zOrigin,m),$i(this,o,g,Xo(c),Xo(u)));continue}else if(g==="svgOrigin"){eu(t,u,1,A,0,this);continue}else if(g in hp){AM(this,R,g,h,y?gs(h,y+u):u);continue}else if(g==="smoothOrigin"){$i(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){RM(this,u,t);continue}}else g in o||(g=Us(g)||g);if(x||(f||f===0)&&(h||h===0)&&!lM.test(u)&&g in o)p=(c+"").substr((h+"").length),f||(f=0),m=sn(u)||(g in kn.units?kn.units[g]:p),p!==m&&(h=ar(t,g,c,m)),this._pt=new bn(this._pt,x?R:o,g,h,(y?gs(h,y+f):f)-h,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?fM:Jc),this._pt.u=m||0,x&&O!==u?(this._pt.b=c,this._pt.e=O,this._pt.r=hM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=uM);else if(g in o)yM.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,s);else if(g!=="parseTransform"){wu(g,u);continue}x||(g in o?L.push(g,0,o[g]):typeof t[g]=="function"?L.push(g,2,t[g]()):L.push(g,1,c||t[g])),a.push(g)}}E&&np(this)},render:function(t,e){if(e.tween._time||!Ou())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ti,aliases:di,getSetter:function(t,e,n){var i=di[e];return i&&i.indexOf(",")<0&&(e=i),e in Ni&&e!==wn&&(t._gsap.x||Ti(t,"x"))?n&&of===n?e==="scale"?_M:mM:(of=n||{})&&(e==="scale"?gM:vM):t.style&&!Eu(t.style[e])?dM:~e.indexOf("-")?pM:Uu(t,e)},core:{_removeProperty:sr,_getMatrix:zu}};An.utils.checkPrefix=Us;An.core.getStyleSaver=op;(function(r,t,e,n){var i=Tn(r+","+t+","+e,function(s){Ni[s]=1});Tn(t,function(s){kn.units[s]="deg",hp[s]=1}),di[i[13]]=r+","+t,Tn(n,function(s){var a=s.split(":");di[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){kn.units[r]="px"});An.registerPlugin(pp);var Fe=An.registerPlugin(pp)||An;Fe.core.Tween;function CM(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function PM(r,t,e){return t&&CM(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je,Co,On,Ki,Zi,Ss,mp,Mr,Ms,_p,Ci,ni,gp,vp=function(){return Je||typeof window<"u"&&(Je=window.gsap)&&Je.registerPlugin&&Je},xp=1,ds=[],ee=[],mi=[],sa=Date.now,nu=function(t,e){return e},LM=function(){var t=Ms.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,mi),ee=n,mi=i,nu=function(a,o){return e[a](o)}},nr=function(t,e){return~mi.indexOf(t)&&mi[mi.indexOf(t)+1][e]},aa=function(t){return!!~_p.indexOf(t)},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ao="scrollLeft",oo="scrollTop",iu=function(){return Ci&&Ci.isPressed||ee.cache++},Yo=function(t,e){var n=function i(s){if(s||s===0){xp&&(On.history.scrollRestoration="manual");var a=Ci&&Ci.isPressed;s=i.v=Math.round(s)||(Ci&&Ci.iOS?1:0),t(s),i.cacheID=ee.cache,a&&nu("ss",s)}else(e||ee.cache!==i.cacheID||nu("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},_n={s:ao,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yo(function(r){return arguments.length?On.scrollTo(r,Ve.sc()):On.pageXOffset||Ki[ao]||Zi[ao]||Ss[ao]||0})},Ve={s:oo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Yo(function(r){return arguments.length?On.scrollTo(_n.sc(),r):On.pageYOffset||Ki[oo]||Zi[oo]||Ss[oo]||0})},vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Je.utils.toArray)(t)[0]||(typeof t=="string"&&Je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},DM=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},or=function(t,e){var n=e.s,i=e.sc;aa(t)&&(t=Ki.scrollingElement||Zi);var s=ee.indexOf(t),a=i===Ve.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+a]||un(t,"scroll",iu);var o=ee[s+a],l=o||(ee[s+a]=Yo(nr(t,n),!0)||(aa(t)?i:Yo(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Je.getProperty(t,"scrollBehavior")==="smooth"),l},ru=function(t,e,n){var i=t,s=t,a=sa(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=sa();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(_){var g=o,p=s,m=sa();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Xs=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},_f=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Sp=function(){Ms=Je.core.globals().ScrollTrigger,Ms&&Ms.core&&LM()},Mp=function(t){return Je=t||vp(),!Co&&Je&&typeof document<"u"&&document.body&&(On=window,Ki=document,Zi=Ki.documentElement,Ss=Ki.body,_p=[On,Ki,Zi,Ss],Je.utils.clamp,gp=Je.core.context||function(){},Mr="onpointerenter"in Ss?"pointer":"mouse",mp=Oe.isTouch=On.matchMedia&&On.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in On||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ni=Oe.eventTypes=("ontouchstart"in Zi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xp=0},500),Co=1),Ms||Sp(),Co};_n.op=Ve;ee.cache=0;var Oe=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Co||Mp(Je)||console.warn("Please gsap.registerPlugin(Observer)"),Ms||Sp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,M=n.onRelease,R=n.onRight,A=n.onLeft,E=n.onUp,L=n.onDown,O=n.onChangeX,v=n.onChangeY,T=n.onChange,N=n.onToggleX,z=n.onToggleY,W=n.onHover,$=n.onHoverEnd,G=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,rt=n.onGestureStart,C=n.onGestureEnd,ot=n.onWheel,Bt=n.onEnable,Xt=n.onDisable,q=n.onClick,Q=n.scrollSpeed,ft=n.capture,at=n.allowClicks,wt=n.lockAxis,yt=n.onLockAxis;this.target=o=vn(o)||Zi,this.vars=n,d&&(d=Je.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(On.getComputedStyle(Ss).lineHeight)||22);var Wt,Gt,Nt,P,re,Ft,zt,F=this,Zt=0,Lt=0,w=n.passive||!u&&n.passive!==!1,S=or(o,_n),H=or(o,Ve),Z=S(),et=H(),K=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ni[0]==="pointerdown",St=aa(o),it=o.ownerDocument||Ki,dt=[0,0,0],Ht=[0,0,0],nt=0,vt=function(){return nt=sa()},xt=function(Et,le){return(F.event=Et)&&d&&DM(Et.target,d)||le&&K&&Et.pointerType!=="touch"||X&&X(Et,le)},It=function(){F._vx.reset(),F._vy.reset(),Gt.pause(),f&&f(F)},gt=function(){var Et=F.deltaX=_f(dt),le=F.deltaY=_f(Ht),pt=Math.abs(Et)>=i,Dt=Math.abs(le)>=i;T&&(pt||Dt)&&T(F,Et,le,dt,Ht),pt&&(R&&F.deltaX>0&&R(F),A&&F.deltaX<0&&A(F),O&&O(F),N&&F.deltaX<0!=Zt<0&&N(F),Zt=F.deltaX,dt[0]=dt[1]=dt[2]=0),Dt&&(L&&F.deltaY>0&&L(F),E&&F.deltaY<0&&E(F),v&&v(F),z&&F.deltaY<0!=Lt<0&&z(F),Lt=F.deltaY,Ht[0]=Ht[1]=Ht[2]=0),(P||Nt)&&(G&&G(F),Nt&&(p&&Nt===1&&p(F),y&&y(F),Nt=0),P=!1),Ft&&!(Ft=!1)&&yt&&yt(F),re&&(ot(F),re=!1),Wt=0},Yt=function(Et,le,pt){dt[pt]+=Et,Ht[pt]+=le,F._vx.update(Et),F._vy.update(le),c?Wt||(Wt=requestAnimationFrame(gt)):gt()},Ot=function(Et,le){wt&&!zt&&(F.axis=zt=Math.abs(Et)>Math.abs(le)?"x":"y",Ft=!0),zt!=="y"&&(dt[2]+=Et,F._vx.update(Et,!0)),zt!=="x"&&(Ht[2]+=le,F._vy.update(le,!0)),c?Wt||(Wt=requestAnimationFrame(gt)):gt()},se=function(Et){if(!xt(Et,1)){Et=Xs(Et,u);var le=Et.clientX,pt=Et.clientY,Dt=le-F.x,Ct=pt-F.y,kt=F.isDragging;F.x=le,F.y=pt,(kt||(Dt||Ct)&&(Math.abs(F.startX-le)>=s||Math.abs(F.startY-pt)>=s))&&(Nt||(Nt=kt?2:1),kt||(F.isDragging=!0),Ot(Dt,Ct))}},D=F.onPress=function(Rt){xt(Rt,1)||Rt&&Rt.button||(F.axis=zt=null,Gt.pause(),F.isPressed=!0,Rt=Xs(Rt),Zt=Lt=0,F.startX=F.x=Rt.clientX,F.startY=F.y=Rt.clientY,F._vx.reset(),F._vy.reset(),un(V?o:it,ni[1],se,w,!0),F.deltaX=F.deltaY=0,x&&x(F))},tt=F.onRelease=function(Rt){if(!xt(Rt,1)){cn(V?o:it,ni[1],se,!0);var Et=!isNaN(F.y-F.startY),le=F.isDragging,pt=le&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Dt=Xs(Rt);!pt&&Et&&(F._vx.reset(),F._vy.reset(),u&&at&&Je.delayedCall(.08,function(){if(sa()-nt>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(it.createEvent){var Ct=it.createEvent("MouseEvents");Ct.initMouseEvent("click",!0,!0,On,1,Dt.screenX,Dt.screenY,Dt.clientX,Dt.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Ct)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&le&&!V&&Gt.restart(!0),Nt&&gt(),m&&le&&m(F),M&&M(F,pt)}},j=function(Et){return Et.touches&&Et.touches.length>1&&(F.isGesturing=!0)&&rt(Et,F.isDragging)},J=function(){return(F.isGesturing=!1)||C(F)},lt=function(Et){if(!xt(Et)){var le=S(),pt=H();Yt((le-Z)*Q,(pt-et)*Q,1),Z=le,et=pt,f&&Gt.restart(!0)}},ct=function(Et){if(!xt(Et)){Et=Xs(Et,u),ot&&(re=!0);var le=(Et.deltaMode===1?l:Et.deltaMode===2?On.innerHeight:1)*_;Yt(Et.deltaX*le,Et.deltaY*le,0),f&&!V&&Gt.restart(!0)}},qt=function(Et){if(!xt(Et)){var le=Et.clientX,pt=Et.clientY,Dt=le-F.x,Ct=pt-F.y;F.x=le,F.y=pt,P=!0,f&&Gt.restart(!0),(Dt||Ct)&&Ot(Dt,Ct)}},ge=function(Et){F.event=Et,W(F)},Te=function(Et){F.event=Et,$(F)},ne=function(Et){return xt(Et)||Xs(Et,u)&&q(F)};Gt=F._dc=Je.delayedCall(h||.25,It).pause(),F.deltaX=F.deltaY=0,F._vx=ru(0,50,!0),F._vy=ru(0,50,!0),F.scrollX=S,F.scrollY=H,F.isDragging=F.isGesturing=F.isPressed=!1,gp(this),F.enable=function(Rt){return F.isEnabled||(un(St?it:o,"scroll",iu),a.indexOf("scroll")>=0&&un(St?it:o,"scroll",lt,w,ft),a.indexOf("wheel")>=0&&un(o,"wheel",ct,w,ft),(a.indexOf("touch")>=0&&mp||a.indexOf("pointer")>=0)&&(un(o,ni[0],D,w,ft),un(it,ni[2],tt),un(it,ni[3],tt),at&&un(o,"click",vt,!0,!0),q&&un(o,"click",ne),rt&&un(it,"gesturestart",j),C&&un(it,"gestureend",J),W&&un(o,Mr+"enter",ge),$&&un(o,Mr+"leave",Te),G&&un(o,Mr+"move",qt)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=P=Nt=!1,F._vx.reset(),F._vy.reset(),Z=S(),et=H(),Rt&&Rt.type&&D(Rt),Bt&&Bt(F)),F},F.disable=function(){F.isEnabled&&(ds.filter(function(Rt){return Rt!==F&&aa(Rt.target)}).length||cn(St?it:o,"scroll",iu),F.isPressed&&(F._vx.reset(),F._vy.reset(),cn(V?o:it,ni[1],se,!0)),cn(St?it:o,"scroll",lt,ft),cn(o,"wheel",ct,ft),cn(o,ni[0],D,ft),cn(it,ni[2],tt),cn(it,ni[3],tt),cn(o,"click",vt,!0),cn(o,"click",ne),cn(it,"gesturestart",j),cn(it,"gestureend",J),cn(o,Mr+"enter",ge),cn(o,Mr+"leave",Te),cn(o,Mr+"move",qt),F.isEnabled=F.isPressed=F.isDragging=!1,Xt&&Xt(F))},F.kill=F.revert=function(){F.disable();var Rt=ds.indexOf(F);Rt>=0&&ds.splice(Rt,1),Ci===F&&(Ci=0)},ds.push(F),V&&aa(o)&&(Ci=F),F.enable(g)},PM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Oe.version="3.15.0";Oe.create=function(r){return new Oe(r)};Oe.register=Mp;Oe.getAll=function(){return ds.slice()};Oe.getById=function(r){return ds.filter(function(t){return t.vars.id===r})[0]};vp()&&Je.registerPlugin(Oe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt,ls,te,pe,Nn,he,ku,qo,Ta,oa,Zs,lo,nn,il,su,dn,gf,vf,cs,yp,Yl,Ep,fn,au,Tp,bp,Xi,ou,Hu,ys,Gu,la,lu,ql,co=1,rn=Date.now,jl=rn(),Zn=0,Js=0,xf=function(t,e,n){var i=In(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Sf=function(t,e){return e&&(!In(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},IM=function r(){return Js&&requestAnimationFrame(r)},Mf=function(){return il=1},yf=function(){return il=0},ci=function(t){return t},Qs=function(t){return Math.round(t*1e5)/1e5||0},wp=function(){return typeof window<"u"},Ap=function(){return Mt||wp()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},zr=function(t){return!!~ku.indexOf(t)},Rp=function(t){return(t==="Height"?Gu:te["inner"+t])||Nn["client"+t]||he["client"+t]},Cp=function(t){return nr(t,"getBoundingClientRect")||(zr(t)?function(){return Uo.width=te.innerWidth,Uo.height=Gu,Uo}:function(){return wi(t)})},UM=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=nr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Rp(s):t["client"+s])||0}},NM=function(t,e){return!e||~mi.indexOf(t)?Cp(t):function(){return Uo}},pi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=nr(t,n))?a()-Cp(t)()[s]:zr(t)?(Nn[n]||he[n])-Rp(i):t[n]-t["offset"+i])},uo=function(t,e){for(var n=0;n<cs.length;n+=3)(!e||~e.indexOf(cs[n+1]))&&t(cs[n],cs[n+1],cs[n+2])},In=function(t){return typeof t=="string"},an=function(t){return typeof t=="function"},ta=function(t){return typeof t=="number"},yr=function(t){return typeof t=="object"},Ys=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ss=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},as=Math.abs,Pp="left",Lp="top",Vu="right",Wu="bottom",Ur="width",Nr="height",ca="Right",ua="Left",ha="Top",fa="Bottom",ke="padding",Yn="margin",Ns="Width",Xu="Height",Ge="px",qn=function(t){return te.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},FM=function(t){var e=qn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ef=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wi=function(t,e){var n=e&&qn(t)[su]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},jo=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Dp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},OM=function(t){return function(e){return Mt.utils.snap(Dp(t),e)}},Yu=function(t){var e=Mt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},BM=function(t){return function(e,n){return Yu(Dp(t))(e,n.direction)}},ho=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},$e=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},fo=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Tf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},po={toggleActions:"play",anticipatePin:0},$o={top:0,left:0,center:.5,bottom:1,right:1},Po=function(t,e){if(In(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in $o?$o[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},mo=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=pe.createElement("div"),g=zr(n)||nr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?he:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,x=y?c:u,M="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(M+=(i===Ve?Vu:Wu)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=M,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Lo(_,0,i,y),_},Lo=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ns]=1,s["border"+o+Ns]=0,s[n.p]=e+"px",Mt.set(t,s)},Qt=[],cu={},ba,bf=function(){return rn()-Zn>34&&(ba||(ba=requestAnimationFrame(Pi)))},os=function(){(!fn||!fn.isPressed||fn.startX>he.clientWidth)&&(ee.cache++,fn?ba||(ba=requestAnimationFrame(Pi)):Pi(),Zn||Hr("scrollStart"),Zn=rn())},$l=function(){bp=te.innerWidth,Tp=te.innerHeight},ea=function(t){ee.cache++,(t===!0||!nn&&!Ep&&!pe.fullscreenElement&&!pe.webkitFullscreenElement&&(!au||bp!==te.innerWidth||Math.abs(te.innerHeight-Tp)>te.innerHeight*.25))&&qo.restart(!0)},kr={},zM=[],Ip=function r(){return je(Vt,"scrollEnd",r)||Rr(!0)},Hr=function(t){return kr[t]&&kr[t].map(function(e){return e()})||zM},Dn=[],Up=function(t){for(var e=0;e<Dn.length;e+=5)(!t||Dn[e+4]&&Dn[e+4].query===t)&&(Dn[e].style.cssText=Dn[e+1],Dn[e].getBBox&&Dn[e].setAttribute("transform",Dn[e+2]||""),Dn[e+3].uncache=1)},Np=function(){return ee.forEach(function(t){return an(t)&&++t.cacheID&&(t.rec=t())})},qu=function(t,e){var n;for(dn=0;dn<Qt.length;dn++)n=Qt[dn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));la=!0,e&&Up(e),e||Hr("revert")},Fp=function(t,e){ee.cache++,(e||!pn)&&ee.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),In(t)&&(te.history.scrollRestoration=Hu=t)},pn,Fr=0,wf,kM=function(){if(wf!==Fr){var t=wf=Fr;requestAnimationFrame(function(){return t===Fr&&Rr(!0)})}},Op=function(){he.appendChild(ys),Gu=!fn&&ys.offsetHeight||te.innerHeight,he.removeChild(ys)},Af=function(t){return Ta(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Rr=function(t,e){if(Nn=pe.documentElement,he=pe.body,ku=[te,pe,Nn,he],Zn&&!t&&!la){$e(Vt,"scrollEnd",Ip);return}Op(),pn=Vt.isRefreshing=!0,la||Np();var n=Hr("refreshInit");yp&&Vt.sort(),e||qu(),ee.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Qt.slice(0).forEach(function(i){return i.refresh()}),la=!1,Qt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),lu=1,Af(!0),Qt.forEach(function(i){var s=pi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Af(!1),lu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fp(Hu,1),qo.pause(),Fr++,pn=2,Pi(2),Qt.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),pn=Vt.isRefreshing=!1,Hr("refresh")},uu=0,Do=1,da,Pi=function(t){if(t===2||!pn&&!la){Vt.isUpdating=!0,da&&da.update(0);var e=Qt.length,n=rn(),i=n-jl>=50,s=e&&Qt[0].scroll();if(Do=uu>s?-1:1,pn||(uu=s),i&&(Zn&&!il&&n-Zn>200&&(Zn=0,Hr("scrollEnd")),Zs=jl,jl=n),Do<0){for(dn=e;dn-- >0;)Qt[dn]&&Qt[dn].update(0,i);Do=1}else for(dn=0;dn<e;dn++)Qt[dn]&&Qt[dn].update(0,i);Vt.isUpdating=!1}ba=0},hu=[Pp,Lp,Wu,Vu,Yn+fa,Yn+ca,Yn+ha,Yn+ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Io=hu.concat([Ur,Nr,"boxSizing","max"+Ns,"max"+Xu,"position",Yn,ke,ke+ha,ke+ca,ke+fa,ke+ua]),HM=function(t,e,n){Es(n);var i=t._gsap;if(i.spacerIsNative)Es(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Kl=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=hu.length,a=e.style,o=t.style,l;s--;)l=hu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Wu]=o[Vu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ur]=jo(t,_n)+Ge,a[Nr]=jo(t,Ve)+Ge,a[ke]=o[Yn]=o[Lp]=o[Pp]="0",Es(i),o[Ur]=o["max"+Ns]=n[Ur],o[Nr]=o["max"+Xu]=n[Nr],o[ke]=n[ke],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},GM=/([A-Z])/g,Es=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Mt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(GM,"-$1").toLowerCase())}},_o=function(t){for(var e=Io.length,n=t.style,i=[],s=0;s<e;s++)i.push(Io[s],n[Io[s]]);return i.t=t,i},VM=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Uo={left:0,top:0},Rf=function(t,e,n,i,s,a,o,l,c,u,f,h,d,_){an(t)&&(t=t(l)),In(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Po("0"+t.substr(3),n):0));var g=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(t)||(t=+t),ta(t))d&&(t=Mt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,t)),o&&Lo(o,n,i,!0);else{an(e)&&(e=e(l));var x=(t||"0").split(" "),M,R,A,E;y=vn(e,l)||he,M=wi(y)||{},(!M||!M.left&&!M.top)&&qn(y).display==="none"&&(E=y.style.display,y.style.display="block",M=wi(y),E?y.style.display=E:y.style.removeProperty("display")),R=Po(x[0],M[i.d]),A=Po(x[1]||"0",n),t=M[i.p]-c[i.p]-u+R+s-A,o&&Lo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var L=t+n,O=a._isStart;p="scroll"+i.d2,Lo(a,L,i,O&&L>20||!O&&(f?Math.max(he[p],Nn[p]):a.parentNode[p])<=L+1),f&&(c=wi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ge))}return d&&y&&(p=wi(y),d.seek(h),m=wi(y),d._caScrollDist=p[i.p]-m[i.p],t=t/d._caScrollDist*h),d&&d.seek(g),d?t:Math.round(t)},WM=/(webkit|moz|length|cssText|inset)/i,Cf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===he){t._stOrig=s.cssText,o=qn(t);for(a in o)!+a&&!WM.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Mt.core.getCache(t).uncache=1,e.appendChild(t)}},Bp=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},go=function(t,e,n){var i={};i[e.p]="+="+n,Mt.set(t,i)},Pf=function(t,e){var n=or(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,_={};c=c||n();var g=Bp(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){ee.cache++,a.tween&&Pi()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Mt.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$e(t,"wheel",n.wheelHandler),Vt.isTouch&&$e(t,"touchmove",n.wheelHandler),s},Vt=function(){function r(e,n){ls||r.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ou(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Js){this.update=this.refresh=this.kill=ci;return}n=Ef(In(n)||ta(n)||n.nodeType?{trigger:n}:n,po);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,M=s.snap,R=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,L=s.fastScrollEnd,O=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Ve,T=!f&&f!==0,N=vn(n.scroller||te),z=Mt.core.getCache(N),W=zr(N),$=("pinType"in n?n.pinType:nr(N,"pinType")||W&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=T&&n.toggleActions.split(" "),V="markers"in n?n.markers:po.markers,rt=W?0:parseFloat(qn(N)["border"+v.p2+Ns])||0,C=this,ot=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Bt=UM(N,W,v),Xt=NM(N,W),q=0,Q=0,ft=0,at=or(N,v),wt,yt,Wt,Gt,Nt,P,re,Ft,zt,F,Zt,Lt,w,S,H,Z,et,K,St,it,dt,Ht,nt,vt,xt,It,gt,Yt,Ot,se,D,tt,j,J,lt,ct,qt,ge,Te;if(C._startClamp=C._endClamp=!1,C._dir=v,p*=45,C.scroller=N,C.scroll=E?E.time.bind(E):at,Gt=at(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(yp=1,n.refreshPriority===-9999&&(da=C)),z.tweenScroll=z.tweenScroll||{top:Pf(N,Ve),left:Pf(N,_n)},C.tweenTo=wt=z.tweenScroll[v.p],C.scrubDuration=function(pt){j=ta(pt)&&pt,j?tt?tt.duration(pt):tt=Mt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return m&&m(C)}}):(tt&&tt.progress(1).kill(),tt=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),se=0,l||(l=i.vars.id)),M&&((!yr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in he.style&&Mt.set(W?[he,Nn]:N,{scrollBehavior:"auto"}),ee.forEach(function(pt){return an(pt)&&pt.target===(W?pe.scrollingElement||Nn:N)&&(pt.smooth=!1)}),Wt=an(M.snapTo)?M.snapTo:M.snapTo==="labels"?OM(i):M.snapTo==="labelsDirectional"?BM(i):M.directional!==!1?function(pt,Dt){return Yu(M.snapTo)(pt,rn()-Q<500?0:Dt.direction)}:Mt.utils.snap(M.snapTo),J=M.duration||{min:.1,max:2},J=yr(J)?oa(J.min,J.max):oa(J,J),lt=Mt.delayedCall(M.delay||j/2||.1,function(){var pt=at(),Dt=rn()-Q<500,Ct=wt.tween;if((Dt||Math.abs(C.getVelocity())<10)&&!Ct&&!il&&q!==pt){var kt=(pt-P)/S,Le=i&&!T?i.totalProgress():kt,jt=Dt?0:(Le-D)/(rn()-Zs)*1e3||0,be=Mt.utils.clamp(-kt,1-kt,as(jt/2)*jt/.185),De=kt+(M.inertia===!1?0:be),Me,ve,de=M,Rn=de.onStart,ye=de.onInterrupt,b=de.onComplete;if(Me=Wt(De,C),ta(Me)||(Me=De),ve=Math.max(0,Math.round(P+Me*S)),pt<=re&&pt>=P&&ve!==pt){if(Ct&&!Ct._initted&&Ct.data<=as(ve-pt))return;M.inertia===!1&&(be=Me-kt),wt(ve,{duration:J(as(Math.max(as(De-Le),as(Me-Le))*.185/jt/.05||0)),ease:M.ease||"power3",data:as(ve-pt),onInterrupt:function(){return lt.restart(!0)&&ye&&ss(C,ye)},onComplete:function(){C.update(),q=at(),i&&!T&&(tt?tt.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),se=D=i&&!T?i.totalProgress():C.progress,y&&y(C),b&&ss(C,b)}},pt,be*S,ve-pt-be*S),Rn&&ss(C,Rn,wt.tween)}}else C.isActive&&q!==pt&&lt.restart(!0)}).pause()),l&&(cu[l]=C),h=C.trigger=vn(h||d!==!0&&d),Te=h&&h._gsap&&h._gsap.stRevert,Te&&(Te=Te(C)),d=d===!0?h:vn(d),In(o)&&(o={targets:h,className:o}),d&&(_===!1||_===Yn||(_=!_&&d.parentNode&&d.parentNode.style&&qn(d.parentNode).display==="flex"?!1:ke),C.pin=d,yt=Mt.core.getCache(d),yt.spacer?H=yt.pinState:(A&&(A=vn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),yt.spacerIsNative=!!A,A&&(yt.spacerState=_o(A))),yt.spacer=K=A||pe.createElement("div"),K.classList.add("pin-spacer"),l&&K.classList.add("pin-spacer-"+l),yt.pinState=H=_o(d)),n.force3D!==!1&&Mt.set(d,{force3D:!0}),C.spacer=K=yt.spacer,Ot=qn(d),vt=Ot[_+v.os2],it=Mt.getProperty(d),dt=Mt.quickSetter(d,v.a,Ge),Kl(d,K,Ot),et=_o(d)),V){Lt=yr(V)?Ef(V,Tf):Tf,F=mo("scroller-start",l,N,v,Lt,0),Zt=mo("scroller-end",l,N,v,Lt,0,F),St=F["offset"+v.op.d2];var ne=vn(nr(N,"content")||N);Ft=this.markerStart=mo("start",l,ne,v,Lt,St,0,E),zt=this.markerEnd=mo("end",l,ne,v,Lt,St,0,E),E&&(ge=Mt.quickSetter([Ft,zt],v.a,Ge)),!$&&!(mi.length&&nr(N,"fixedMarkers")===!0)&&(FM(W?he:N),Mt.set([F,Zt],{force3D:!0}),It=Mt.quickSetter(F,v.a,Ge),Yt=Mt.quickSetter(Zt,v.a,Ge))}if(E){var Rt=E.vars.onUpdate,Et=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){C.update(0,0,1),Rt&&Rt.apply(E,Et||[])})}if(C.previous=function(){return Qt[Qt.indexOf(C)-1]},C.next=function(){return Qt[Qt.indexOf(C)+1]},C.revert=function(pt,Dt){if(!Dt)return C.kill(!0);var Ct=pt!==!1||!C.enabled,kt=nn;Ct!==C.isReverted&&(Ct&&(ct=Math.max(at(),C.scroll.rec||0),ft=C.progress,qt=i&&i.progress()),Ft&&[Ft,zt,F,Zt].forEach(function(Le){return Le.style.display=Ct?"none":"block"}),Ct&&(nn=C,C.update(Ct)),d&&(!R||!C.isActive)&&(Ct?HM(d,K,H):Kl(d,K,qn(d),xt)),Ct||C.update(Ct),nn=kt,C.isReverted=Ct)},C.refresh=function(pt,Dt,Ct,kt){if(!((nn||!C.enabled)&&!Dt)){if(d&&pt&&Zn){$e(r,"scrollEnd",Ip);return}!pn&&ot&&ot(C),nn=C,wt.tween&&!Ct&&(wt.tween.kill(),wt.tween=0),tt&&tt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Jt){return Jt.vars.immediateRender&&Jt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Le=Bt(),jt=Xt(),be=E?E.duration():pi(N,v),De=S<=.01||!S,Me=0,ve=kt||0,de=yr(Ct)?Ct.end:n.end,Rn=n.endTrigger||h,ye=yr(Ct)?Ct.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),b=C.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer,C),U=h&&Math.max(0,Qt.indexOf(C))||0,B=U,k,I,st,_t,ht,ut,At,Ut,Tt,ae,ie,_e,Ye;for(V&&yr(Ct)&&(_e=Mt.getProperty(F,v.p),Ye=Mt.getProperty(Zt,v.p));B-- >0;)ut=Qt[B],ut.end||ut.refresh(0,1)||(nn=C),At=ut.pin,At&&(At===h||At===d||At===b)&&!ut.isReverted&&(ae||(ae=[]),ae.unshift(ut),ut.revert(!0,!0)),ut!==Qt[B]&&(U--,B--);for(an(ye)&&(ye=ye(C)),ye=xf(ye,"start",C),P=Rf(ye,h,Le,v,at(),Ft,F,C,jt,rt,$,be,E,C._startClamp&&"_startClamp")||(d?-.001:0),an(de)&&(de=de(C)),In(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(In(ye)?ye.split(" ")[0]:"")+de:(Me=Po(de.substr(2),Le),de=In(ye)?ye:(E?Mt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,P):P)+Me,Rn=h)),de=xf(de,"end",C),re=Math.max(P,Rf(de||(Rn?"100% 0":be),Rn,Le,v,at()+Me,zt,Zt,C,jt,rt,$,be,E,C._endClamp&&"_endClamp"))||-.001,Me=0,B=U;B--;)ut=Qt[B]||{},At=ut.pin,At&&ut.start-ut._pinPush<=P&&!E&&ut.end>0&&(k=ut.end-(C._startClamp?Math.max(0,ut.start):ut.start),(At===h&&ut.start-ut._pinPush<P||At===b)&&isNaN(ye)&&(Me+=k*(1-ut.progress)),At===d&&(ve+=k));if(P+=Me,re+=Me,C._startClamp&&(C._startClamp+=Me),C._endClamp&&!pn&&(C._endClamp=re||-.001,re=Math.min(re,pi(N,v))),S=re-P||(P-=.01)&&.001,De&&(ft=Mt.utils.clamp(0,1,Mt.utils.normalize(P,re,ct))),C._pinPush=ve,Ft&&Me&&(k={},k[v.a]="+="+Me,b&&(k[v.p]="-="+at()),Mt.set([Ft,zt],k)),d&&!(lu&&C.end>=pi(N,v)))k=qn(d),_t=v===Ve,st=at(),Ht=parseFloat(it(v.a))+ve,!be&&re>1&&(ie=(W?pe.scrollingElement||Nn:N).style,ie={style:ie,value:ie["overflow"+v.a.toUpperCase()]},W&&qn(he)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ie.style["overflow"+v.a.toUpperCase()]="scroll")),Kl(d,K,k),et=_o(d),I=wi(d,!0),Ut=$&&or(N,_t?_n:Ve)(),_?(xt=[_+v.os2,S+ve+Ge],xt.t=K,B=_===ke?jo(d,v)+S+ve:0,B&&(xt.push(v.d,B+Ge),K.style.flexBasis!=="auto"&&(K.style.flexBasis=B+Ge)),Es(xt),b&&Qt.forEach(function(Jt){Jt.pin===b&&Jt.vars.pinSpacing!==!1&&(Jt._subPinOffset=!0)}),$&&at(ct)):(B=jo(d,v),B&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=B+Ge)),$&&(ht={top:I.top+(_t?st-P:Ut)+Ge,left:I.left+(_t?Ut:st-P)+Ge,boxSizing:"border-box",position:"fixed"},ht[Ur]=ht["max"+Ns]=Math.ceil(I.width)+Ge,ht[Nr]=ht["max"+Xu]=Math.ceil(I.height)+Ge,ht[Yn]=ht[Yn+ha]=ht[Yn+ca]=ht[Yn+fa]=ht[Yn+ua]="0",ht[ke]=k[ke],ht[ke+ha]=k[ke+ha],ht[ke+ca]=k[ke+ca],ht[ke+fa]=k[ke+fa],ht[ke+ua]=k[ke+ua],Z=VM(H,ht,R),pn&&at(0)),i?(Tt=i._initted,Yl(1),i.render(i.duration(),!0,!0),nt=it(v.a)-Ht+S+ve,gt=Math.abs(S-nt)>1,$&&gt&&Z.splice(Z.length-2,2),i.render(0,!0,!0),Tt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Yl(0)):nt=S,ie&&(ie.value?ie.style["overflow"+v.a.toUpperCase()]=ie.value:ie.style.removeProperty("overflow-"+v.a));else if(h&&at()&&!E)for(I=h.parentNode;I&&I!==he;)I._pinOffset&&(P-=I._pinOffset,re-=I._pinOffset),I=I.parentNode;ae&&ae.forEach(function(Jt){return Jt.revert(!1,!0)}),C.start=P,C.end=re,Gt=Nt=pn?ct:at(),!E&&!pn&&(Gt<ct&&at(ct),C.scroll.rec=0),C.revert(!1,!0),Q=rn(),lt&&(q=-1,lt.restart(!0)),nn=0,i&&T&&(i._initted||qt)&&i.progress()!==qt&&i.progress(qt||0,!0).render(i.time(),!0,!0),(De||ft!==C.progress||E||g||i&&!i._initted)&&(i&&!T&&(i._initted||ft||i.vars.immediateRender!==!1)&&i.totalProgress(E&&P<-.001&&!ft?Mt.utils.normalize(P,re,0):ft,!0),C.progress=De||(Gt-P)/S===ft?0:ft),d&&_&&(K._pinOffset=Math.round(C.progress*nt)),tt&&tt.invalidate(),isNaN(_e)||(_e-=Mt.getProperty(F,v.p),Ye-=Mt.getProperty(Zt,v.p),go(F,v,_e),go(Ft,v,_e-(kt||0)),go(Zt,v,Ye),go(zt,v,Ye-(kt||0))),De&&!pn&&C.update(),u&&!pn&&!w&&(w=!0,u(C),w=!1)}},C.getVelocity=function(){return(at()-Nt)/(rn()-Zs)*1e3||0},C.endAnimation=function(){Ys(C.callbackAnimation),i&&(tt?tt.progress(1):i.paused()?T||Ys(i,C.direction<0,1):Ys(i,i.reversed()))},C.labelToScroll=function(pt){return i&&i.labels&&(P||C.refresh()||P)+i.labels[pt]/i.duration()*S||0},C.getTrailing=function(pt){var Dt=Qt.indexOf(C),Ct=C.direction>0?Qt.slice(0,Dt).reverse():Qt.slice(Dt+1);return(In(pt)?Ct.filter(function(kt){return kt.vars.preventOverlaps===pt}):Ct).filter(function(kt){return C.direction>0?kt.end<=P:kt.start>=re})},C.update=function(pt,Dt,Ct){if(!(E&&!Ct&&!pt)){var kt=pn===!0?ct:C.scroll(),Le=pt?0:(kt-P)/S,jt=Le<0?0:Le>1?1:Le||0,be=C.progress,De,Me,ve,de,Rn,ye,b,U;if(Dt&&(Nt=Gt,Gt=E?at():kt,M&&(D=se,se=i&&!T?i.totalProgress():jt)),p&&d&&!nn&&!co&&Zn&&(!jt&&P<kt+(kt-Nt)/(rn()-Zs)*p?jt=1e-4:jt===1&&re>kt+(kt-Nt)/(rn()-Zs)*p&&(jt=.9999)),jt!==be&&C.enabled){if(De=C.isActive=!!jt&&jt<1,Me=!!be&&be<1,ye=De!==Me,Rn=ye||!!jt!=!!be,C.direction=jt>be?1:-1,C.progress=jt,Rn&&!nn&&(ve=jt&&!be?0:jt===1?1:be===1?2:3,T&&(de=!ye&&X[ve+1]!=="none"&&X[ve+1]||X[ve],U=i&&(de==="complete"||de==="reset"||de in i))),O&&(ye||U)&&(U||f||!i)&&(an(O)?O(C):C.getTrailing(O).forEach(function(st){return st.endAnimation()})),T||(tt&&!nn&&!co?(tt._dp._time-tt._start!==tt._time&&tt.render(tt._dp._time-tt._start),tt.resetTo?tt.resetTo("totalProgress",jt,i._tTime/i._tDur):(tt.vars.totalProgress=jt,tt.invalidate().restart())):i&&i.totalProgress(jt,!!(nn&&(Q||pt)))),d){if(pt&&_&&(K.style[_+v.os2]=vt),!$)dt(Qs(Ht+nt*jt));else if(Rn){if(b=!pt&&jt>be&&re+1>kt&&kt+1>=pi(N,v),R)if(!pt&&(De||b)){var B=wi(d,!0),k=kt-P;Cf(d,he,B.top+(v===Ve?k:0)+Ge,B.left+(v===Ve?0:k)+Ge)}else Cf(d,K);Es(De||b?Z:et),gt&&jt<1&&De||dt(Ht+(jt===1&&!b?nt:0))}}M&&!wt.tween&&!nn&&!co&&lt.restart(!0),o&&(ye||x&&jt&&(jt<1||!ql))&&Ta(o.targets).forEach(function(st){return st.classList[De||x?"add":"remove"](o.className)}),a&&!T&&!pt&&a(C),Rn&&!nn?(T&&(U&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),a&&a(C)),(ye||!ql)&&(c&&ye&&ss(C,c),G[ve]&&ss(C,G[ve]),x&&(jt===1?C.kill(!1,1):G[ve]=0),ye||(ve=jt===1?1:3,G[ve]&&ss(C,G[ve]))),L&&!De&&Math.abs(C.getVelocity())>(ta(L)?L:2500)&&(Ys(C.callbackAnimation),tt?tt.progress(1):Ys(i,de==="reverse"?1:!jt,1))):T&&a&&!nn&&a(C)}if(Yt){var I=E?kt/E.duration()*(E._caScrollDist||0):kt;It(I+(F._isFlipped?1:0)),Yt(I)}ge&&ge(-kt/E.duration()*(E._caScrollDist||0))}},C.enable=function(pt,Dt){C.enabled||(C.enabled=!0,$e(N,"resize",ea),W||$e(N,"scroll",os),ot&&$e(r,"refreshInit",ot),pt!==!1&&(C.progress=ft=0,Gt=Nt=q=at()),Dt!==!1&&C.refresh())},C.getTween=function(pt){return pt&&wt?wt.tween:tt},C.setPositions=function(pt,Dt,Ct,kt){if(E){var Le=E.scrollTrigger,jt=E.duration(),be=Le.end-Le.start;pt=Le.start+be*pt/jt,Dt=Le.start+be*Dt/jt}C.refresh(!1,!1,{start:Sf(pt,Ct&&!!C._startClamp),end:Sf(Dt,Ct&&!!C._endClamp)},kt),C.update()},C.adjustPinSpacing=function(pt){if(xt&&pt){var Dt=xt.indexOf(v.d)+1;xt[Dt]=parseFloat(xt[Dt])+pt+Ge,xt[1]=parseFloat(xt[1])+pt+Ge,Es(xt)}},C.disable=function(pt,Dt){if(pt!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Dt||tt&&tt.pause(),ct=0,yt&&(yt.uncache=1),ot&&je(r,"refreshInit",ot),lt&&(lt.pause(),wt.tween&&wt.tween.kill()&&(wt.tween=0)),!W)){for(var Ct=Qt.length;Ct--;)if(Qt[Ct].scroller===N&&Qt[Ct]!==C)return;je(N,"resize",ea),W||je(N,"scroll",os)}},C.kill=function(pt,Dt){C.disable(pt,Dt),tt&&!Dt&&tt.kill(),l&&delete cu[l];var Ct=Qt.indexOf(C);Ct>=0&&Qt.splice(Ct,1),Ct===dn&&Do>0&&dn--,Ct=0,Qt.forEach(function(kt){return kt.scroller===C.scroller&&(Ct=1)}),Ct||pn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),Dt||i.kill()),Ft&&[Ft,zt,F,Zt].forEach(function(kt){return kt.parentNode&&kt.parentNode.removeChild(kt)}),da===C&&(da=0),d&&(yt&&(yt.uncache=1),Ct=0,Qt.forEach(function(kt){return kt.pin===d&&Ct++}),Ct||(yt.spacer=0)),n.onKill&&n.onKill(C)},Qt.push(C),C.enable(!1,!1),Te&&Te(C),i&&i.add&&!S){var le=C.update;C.update=function(){C.update=le,ee.cache++,P||re||C.refresh()},Mt.delayedCall(.01,C.update),S=.01,P=re=0}else C.refresh();d&&kM()},r.register=function(n){return ls||(Mt=n||Ap(),wp()&&window.document&&r.enable(),ls=Js),ls},r.defaults=function(n){if(n)for(var i in n)po[i]=n[i];return po},r.disable=function(n,i){Js=0,Qt.forEach(function(a){return a[i?"kill":"disable"](n)}),je(te,"wheel",os),je(pe,"scroll",os),clearInterval(lo),je(pe,"touchcancel",ci),je(he,"touchstart",ci),ho(je,pe,"pointerdown,touchstart,mousedown",Mf),ho(je,pe,"pointerup,touchend,mouseup",yf),qo.kill(),uo(je);for(var s=0;s<ee.length;s+=3)fo(je,ee[s],ee[s+1]),fo(je,ee[s],ee[s+2])},r.enable=function(){if(te=window,pe=document,Nn=pe.documentElement,he=pe.body,Mt){if(Ta=Mt.utils.toArray,oa=Mt.utils.clamp,ou=Mt.core.context||ci,Yl=Mt.core.suppressOverwrites||ci,Hu=te.history.scrollRestoration||"auto",uu=te.pageYOffset||0,Mt.core.globals("ScrollTrigger",r),he){Js=1,ys=document.createElement("div"),ys.style.height="100vh",ys.style.position="absolute",Op(),IM(),Oe.register(Mt),r.isTouch=Oe.isTouch,Xi=Oe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),au=Oe.isTouch===1,$e(te,"wheel",os),ku=[te,pe,Nn,he],Mt.matchMedia?(r.matchMedia=function(u){var f=Mt.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Mt.addEventListener("matchMediaInit",function(){Np(),qu()}),Mt.addEventListener("matchMediaRevert",function(){return Up()}),Mt.addEventListener("matchMedia",function(){Rr(0,1),Hr("matchMedia")}),Mt.matchMedia().add("(orientation: portrait)",function(){return $l(),$l})):console.warn("Requires GSAP 3.11.0 or later"),$l(),$e(pe,"scroll",os);var n=he.hasAttribute("style"),i=he.style,s=i.borderTopStyle,a=Mt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=wi(he),Ve.m=Math.round(o.top+Ve.sc())||0,_n.m=Math.round(o.left+_n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(he.setAttribute("style",""),he.removeAttribute("style")),lo=setInterval(bf,250),Mt.delayedCall(.5,function(){return co=0}),$e(pe,"touchcancel",ci),$e(he,"touchstart",ci),ho($e,pe,"pointerdown,touchstart,mousedown",Mf),ho($e,pe,"pointerup,touchend,mouseup",yf),su=Mt.utils.checkPrefix("transform"),Io.push(su),ls=rn(),qo=Mt.delayedCall(.2,Rr).pause(),cs=[pe,"visibilitychange",function(){var u=te.innerWidth,f=te.innerHeight;pe.hidden?(gf=u,vf=f):(gf!==u||vf!==f)&&ea()},pe,"DOMContentLoaded",Rr,te,"load",Rr,te,"resize",ea],uo($e),Qt.forEach(function(u){return u.enable(0,1)}),l=0;l<ee.length;l+=3)fo(je,ee[l],ee[l+1]),fo(je,ee[l],ee[l+2])}else if(pe){var c=function u(){r.enable(),pe.removeEventListener("DOMContentLoaded",u)};pe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ql=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(lo)||(lo=i)&&setInterval(bf,i),"ignoreMobileResize"in n&&(au=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(uo(je)||uo($e,n.autoRefreshEvents||"none"),Ep=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),a=ee.indexOf(s),o=zr(s);~a&&ee.splice(a,o?6:2),i&&(o?mi.unshift(te,i,he,i,Nn,i):mi.unshift(s,i))},r.clearMatchMedia=function(n){Qt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(In(n)?vn(n):n).getBoundingClientRect(),o=a[s?Ur:Nr]*i||0;return s?a.right-o>0&&a.left+o<te.innerWidth:a.bottom-o>0&&a.top+o<te.innerHeight},r.positionInViewport=function(n,i,s){In(n)&&(n=vn(n));var a=n.getBoundingClientRect(),o=a[s?Ur:Nr],l=i==null?o/2:i in $o?$o[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/te.innerWidth:(a.top+l)/te.innerHeight},r.killAll=function(n){if(Qt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=kr.killAll||[];kr={},i.forEach(function(s){return s()})}},r}();Vt.version="3.15.0";Vt.saveStyles=function(r){return r?Ta(r).forEach(function(t){if(t&&t.style){var e=Dn.indexOf(t);e>=0&&Dn.splice(e,5),Dn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),ou())}}):Dn};Vt.revert=function(r,t){return qu(!r,t)};Vt.create=function(r,t){return new Vt(r,t)};Vt.refresh=function(r){return r?ea(!0):(ls||Vt.register())&&Rr(!0)};Vt.update=function(r){return++ee.cache&&Pi(r===!0?2:0)};Vt.clearScrollMemory=Fp;Vt.maxScroll=function(r,t){return pi(r,t?_n:Ve)};Vt.getScrollFunc=function(r,t){return or(vn(r),t?_n:Ve)};Vt.getById=function(r){return cu[r]};Vt.getAll=function(){return Qt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Vt.isScrolling=function(){return!!Zn};Vt.snapDirectional=Yu;Vt.addEventListener=function(r,t){var e=kr[r]||(kr[r]=[]);~e.indexOf(t)||e.push(t)};Vt.removeEventListener=function(r,t){var e=kr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Vt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Mt.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&an(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return an(s)&&(s=s(),$e(Vt,"refresh",function(){return s=t.batchMax()})),Ta(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Vt.create(c))}),e};var Lf=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Zl=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Oe.isTouch?" pinch-zoom":""):"none",t===Nn&&r(he,e)},vo={auto:1,scroll:1},XM=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Mt.core.getCache(s),o=rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==he&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(vo[(l=qn(s)).overflowY]||vo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!zr(s)&&(vo[(l=qn(s)).overflowY]||vo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},zp=function(t,e,n,i){return Oe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&XM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$e(pe,Oe.eventTypes[0],If,!1,!0)},onDisable:function(){return je(pe,Oe.eventTypes[0],If,!0)}})},YM=/(input|label|select|textarea)/i,Df,If=function(t){var e=YM.test(t.target.tagName);(e||Df)&&(t._gsapAllow=!0,Df=e)},qM=function(t){yr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=vn(t.target)||Nn,u=Mt.core.globals().ScrollSmoother,f=u&&u.get(),h=Xi&&(t.content&&vn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=or(c,Ve),_=or(c,_n),g=1,p=(Oe.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,m=0,y=an(i)?function(){return i(o)}:function(){return i||2.8},x,M,R=zp(c,t.type,!0,s),A=function(){return M=!1},E=ci,L=ci,O=function(){l=pi(c,Ve),L=oa(Xi?1:0,l),n&&(E=oa(0,pi(c,_n))),x=Fr},v=function(){h._gsap.y=Qs(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},T=function(){if(M){requestAnimationFrame(A);var V=Qs(o.deltaY/2),rt=L(d.v-V);if(h&&rt!==d.v+d.offset){d.offset=rt-d.v;var C=Qs((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",d.cacheID=ee.cache,Pi()}return!0}d.offset&&v(),M=!0},N,z,W,$,G=function(){O(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&Mt.set(h,{y:"+=0"}),t.ignoreCheck=function(X){return Xi&&X.type==="touchmove"&&T()||g>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){M=!1;var X=g;g=Qs((te.visualViewport&&te.visualViewport.scale||1)/p),N.pause(),X!==g&&Zl(c,g>1.01?!0:n?!1:"x"),z=_(),W=d(),O(),x=Fr},t.onRelease=t.onGestureStart=function(X,V){if(d.offset&&v(),!V)$.restart(!0);else{ee.cache++;var rt=y(),C,ot;n&&(C=_(),ot=C+rt*.05*-X.velocityX/.227,rt*=Lf(_,C,ot,pi(c,_n)),N.vars.scrollX=E(ot)),C=d(),ot=C+rt*.05*-X.velocityY/.227,rt*=Lf(d,C,ot,pi(c,Ve)),N.vars.scrollY=L(ot),N.invalidate().duration(rt).play(.01),(Xi&&N.vars.scrollY>=l||C>=l-1)&&Mt.to({},{onUpdate:G,duration:rt})}a&&a(X)},t.onWheel=function(){N._ts&&N.pause(),rn()-m>1e3&&(x=0,m=rn())},t.onChange=function(X,V,rt,C,ot){if(Fr!==x&&O(),V&&n&&_(E(C[2]===V?z+(X.startX-X.x):_()+V-C[1])),rt){d.offset&&v();var Bt=ot[2]===rt,Xt=Bt?W+X.startY-X.y:d()+rt-ot[1],q=L(Xt);Bt&&Xt!==q&&(W+=q-Xt),d(q)}(rt||V)&&Pi()},t.onEnable=function(){Zl(c,n?!1:"x"),Vt.addEventListener("refresh",G),$e(te,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),R.enable()},t.onDisable=function(){Zl(c,!0),je(te,"resize",G),Vt.removeEventListener("refresh",G),R.kill()},t.lockAxis=t.lockAxis!==!1,o=new Oe(t),o.iOS=Xi,Xi&&!d()&&d(1),Xi&&Mt.ticker.add(ci),$=o._dc,N=Mt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bp(d,d(),function(){return N.pause()})},onUpdate:Pi,onComplete:$.vars.onComplete}),o};Vt.sort=function(r){if(an(r))return Qt.sort(r);var t=te.pageYOffset||0;return Vt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),Qt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Vt.observe=function(r){return new Oe(r)};Vt.normalizeScroll=function(r){if(typeof r>"u")return fn;if(r===!0&&fn)return fn.enable();if(r===!1){fn&&fn.kill(),fn=r;return}var t=r instanceof Oe?r:qM(r);return fn&&fn.target===t.target&&fn.kill(),zr(t.target)&&(fn=t),t};Vt.core={_getVelocityProp:ru,_inputObserver:zp,_scrollers:ee,_proxies:mi,bridge:{ss:function(){Zn||Hr("scrollStart"),Zn=rn()},ref:function(){return nn}}};Ap()&&Mt.registerPlugin(Vt);Fe.registerPlugin(Vt);class jM{constructor(t){this.webGLManager=t,this.lenis=null,this.initLenis(),this.initScrollMapping()}initLenis(){this.lenis=new cS({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,normalizeWheel:!0,wheelMultiplier:.85,touchMultiplier:1,infinite:!1}),this.lenis.on("scroll",t=>{Vt.update();const e=Math.min(Math.abs(t.velocity)/20,2.5);this.webGLManager.setVelocity(e)}),Fe.ticker.add(t=>{this.lenis.raf(t*1e3)}),Fe.ticker.lagSmoothing(0)}initScrollMapping(){const t=document.getElementById("progressFill"),e=document.getElementById("progressIndicatorNum"),n={val:0};Fe.to(n,{val:1,ease:"none",scrollTrigger:{trigger:"body",start:"top top",end:"bottom bottom",scrub:1.2,onUpdate:i=>{const s=i.progress;if(this.webGLManager.setFrame(s),t&&(t.style.height=`${s*100}%`),e){const a=this.webGLManager.currentFrameIndex+1;e.textContent=String(a).padStart(2,"0")}}}})}enterGateMode(){const t=document.getElementById("scrollContainer");t&&(t.style.display="none");const e=document.getElementById("gateScrollContainer");e&&(e.style.display="block"),window.scrollTo(0,0),this.lenis&&this.lenis.scrollTo(0,{immediate:!0}),setTimeout(()=>{this.lenis&&this.lenis.resize(),Vt.refresh()},100)}exitGateMode(){const t=document.getElementById("scrollContainer");t&&(t.style.display="block");const e=document.getElementById("gateScrollContainer");e&&(e.style.display="none"),setTimeout(()=>{this.lenis&&this.lenis.resize(),Vt.refresh(),this.lenis&&this.lenis.scrollTo("#ctaSection",{immediate:!0})},100)}getLenis(){return this.lenis}scrollTo(t,e){this.lenis&&this.lenis.scrollTo(t,e)}destroy(){this.lenis&&this.lenis.destroy(),Vt.getAll().forEach(t=>t.kill())}}Fe.registerPlugin(Vt);class $M{constructor(){this.initHeroEntrance(),this.initSplitTextAnimations()}initHeroEntrance(){const t=Fe.timeline({defaults:{ease:"power4.out"}});t.fromTo("#heroTitle",{letterSpacing:"0.15em",opacity:0,y:60},{letterSpacing:"-0.04em",opacity:1,y:0,duration:1.8,delay:.6}),t.fromTo(".hero-top-meta",{opacity:0,y:-20},{opacity:1,y:0,duration:1.2},"-=1.4"),t.fromTo(".hero-bottom",{opacity:0,y:20},{opacity:1,y:0,duration:1.2},"-=1.4")}initSplitTextAnimations(){const t=document.getElementById("narrativeHeading");t&&(this.splitLines(t),Fe.fromTo(t.querySelectorAll(".line-child"),{yPercent:100},{yPercent:0,duration:1.4,ease:"power4.out",stagger:.1,scrollTrigger:{trigger:t,start:"top 85%",toggleActions:"play none none reverse"}}));const e=document.querySelector(".narrative-body");e&&Fe.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none reverse"}});const n=document.getElementById("ctaTitle");n&&Fe.fromTo(n,{letterSpacing:"0.1em",opacity:.2,scale:.95},{letterSpacing:"-0.04em",opacity:1,scale:1,duration:1.8,ease:"power4.out",scrollTrigger:{trigger:n,start:"top 90%",end:"bottom 60%",scrub:!0}})}splitLines(t){const e=t.innerText;t.innerHTML="",e.split(/\s+/).forEach(a=>{const o=document.createElement("span");o.innerText=a+" ",o.style.display="inline-block",t.appendChild(o)});const i={};t.querySelectorAll("span").forEach(a=>{const o=a.getBoundingClientRect(),l=Math.round(o.top);i[l]||(i[l]=[]),i[l].push(a)}),t.innerHTML="",Object.keys(i).forEach(a=>{const o=document.createElement("div");o.className="line-parent",o.style.overflow="hidden",o.style.display="block";const l=document.createElement("div");l.className="line-child",l.style.display="inline-block",l.style.width="100%";let c="";i[a].forEach(u=>{c+=u.innerText+" "}),l.textContent=c.trim(),o.appendChild(l),t.appendChild(o)})}}Fe.registerPlugin(Vt);class KM{constructor(){this.cursor=document.getElementById("customCursor"),this.dot=this.cursor.querySelector(".cursor-dot"),this.ring=this.cursor.querySelector(".cursor-ring"),this.text=this.cursor.querySelector(".cursor-text"),this.mouse={x:0,y:0},this.dotPos={x:0,y:0},this.ringPos={x:0,y:0},this.trailCanvas=document.getElementById("cursorTrailCanvas"),this.trailCtx=this.trailCanvas?this.trailCanvas.getContext("2d"):null,this.trailParticles=[],this.lastSpawnPos={x:0,y:0},this.resizeTrailCanvas(),window.addEventListener("resize",this.resizeTrailCanvas.bind(this)),this.initCursor(),this.initGridLines()}resizeTrailCanvas(){this.trailCanvas&&(this.trailCanvas.width=window.innerWidth,this.trailCanvas.height=window.innerHeight)}initCursor(){if(window.innerWidth>1024)document.body.style.cursor="none";else{this.cursor&&(this.cursor.style.display="none"),this.trailCanvas&&(this.trailCanvas.style.display="none");return}window.addEventListener("mousemove",i=>{if(this.mouse.x=i.clientX,this.mouse.y=i.clientY,this.trailCtx){const s=this.mouse.x-this.lastSpawnPos.x,a=this.mouse.y-this.lastSpawnPos.y;Math.sqrt(s*s+a*a)>12&&(this.trailParticles.push({x:this.mouse.x,y:this.mouse.y,radius:15,maxRadius:Math.random()*30+40,alpha:.65,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3-.2,color:"#ccff00"}),this.lastSpawnPos.x=this.mouse.x,this.lastSpawnPos.y=this.mouse.y)}});const t=()=>{if(this.dotPos.x+=(this.mouse.x-this.dotPos.x)*.25,this.dotPos.y+=(this.mouse.y-this.dotPos.y)*.25,this.ringPos.x+=(this.mouse.x-this.ringPos.x)*.12,this.ringPos.y+=(this.mouse.y-this.ringPos.y)*.12,this.dot&&(this.dot.style.transform=`translate3d(${this.dotPos.x}px, ${this.dotPos.y}px, 0) translate(-50%, -50%)`),this.ring&&(this.ring.style.transform=`translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0) translate(-50%, -50%)`),this.text&&(this.text.style.transform=`translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0) translate(-50%, -50%)`),this.trailCtx){this.trailCtx.clearRect(0,0,this.trailCanvas.width,this.trailCanvas.height);for(let i=this.trailParticles.length-1;i>=0;i--){const s=this.trailParticles[i];if(s.radius+=(s.maxRadius-s.radius)*.05,s.alpha-=.015,s.x+=s.vx,s.y+=s.vy,s.alpha<=0){this.trailParticles.splice(i,1);continue}const a=this.trailCtx.createRadialGradient(s.x,s.y,s.radius*.02,s.x,s.y,s.radius);a.addColorStop(0,`rgba(255, 255, 255, ${s.alpha})`),a.addColorStop(.18,`rgba(204, 255, 0, ${s.alpha*.85})`),a.addColorStop(.5,`rgba(0, 255, 120, ${s.alpha*.2})`),a.addColorStop(1,"rgba(204, 255, 0, 0)"),this.trailCtx.beginPath(),this.trailCtx.fillStyle=a,this.trailCtx.arc(s.x,s.y,s.radius,0,Math.PI*2),this.trailCtx.fill()}}requestAnimationFrame(t)};t(),document.querySelectorAll("a, .meta-tag, .scroll-indicator").forEach(i=>{i.addEventListener("mouseenter",()=>{document.body.classList.add("hover-link")}),i.addEventListener("mouseleave",()=>{document.body.classList.remove("hover-link")})}),document.querySelectorAll(".magnetic-button").forEach(i=>{i.addEventListener("mouseenter",()=>{document.body.classList.add("hover-btn"),this.text&&(this.text.textContent="EXPLORE")}),i.addEventListener("mouseleave",()=>{document.body.classList.remove("hover-btn"),this.text&&(this.text.textContent="")})})}initMagneticButtons(){const t=document.querySelectorAll(".magnetic-button");window.innerWidth<=1024||t.forEach(e=>{e.id!=="ctaButton"&&(e.addEventListener("mousemove",n=>{const i=e.getBoundingClientRect(),s=i.left+i.width/2,a=i.top+i.height/2,o=n.clientX-s,l=n.clientY-a;Fe.to(e,{x:o*.35,y:l*.35,duration:.3,ease:"power2.out"});const c=e.querySelector(".btn-arrow");c&&Fe.to(c,{x:o*.15,y:l*.15,duration:.3,ease:"power2.out"})}),e.addEventListener("mouseleave",()=>{Fe.to(e,{x:0,y:0,duration:.6,ease:"elastic.out(1.2, 0.4)"});const n=e.querySelector(".btn-arrow");n&&Fe.to(n,{x:0,y:0,duration:.6,ease:"elastic.out(1.2, 0.4)"})}))})}initGridLines(){document.querySelectorAll(".grid-cell").forEach((e,n)=>{Vt.create({trigger:e,start:"top 85%",onEnter:()=>e.classList.add("active"),onLeaveBack:()=>e.classList.remove("active")}),Fe.fromTo(e.children,{opacity:0,y:30},{opacity:1,y:0,duration:1.2,ease:"power3.out",stagger:.15,scrollTrigger:{trigger:e,start:"top 80%",toggleActions:"play none none reverse"}})})}}const Uf=document.getElementById("loaderBar"),Nf=document.getElementById("loaderPercentage"),Jl=document.getElementById("loaderScreen");function ZM(r){Uf&&(Uf.style.width=`${r}%`),Nf&&(Nf.textContent=`${String(r).padStart(2,"0")}%`)}function JM(){Fe.to(Jl,{opacity:0,duration:.8,ease:"power2.out",delay:.3,onComplete:()=>{Jl&&(Jl.style.display="none");const r=new tS(qs.scene);qs.registerParticles(r);const t=new jM(qs);new $M,new KM,window.scrollTo(0,0),t.getLenis()&&t.getLenis().scrollTo(0,{immediate:!0});const e=document.getElementById("ctaButton"),n=document.getElementById("gateLoaderScreen"),i=document.getElementById("gateLoaderBar"),s=document.getElementById("gateLoaderPercentage");e&&e.addEventListener("click",()=>{t.getLenis()&&t.getLenis().stop();const o=document.getElementById("scrollContainer"),l=document.getElementById("webglContainer");Fe.timeline().to([o,l],{opacity:0,duration:.4}).call(()=>{t.enterGateMode();const c=document.getElementById("gateScrollContainer");c&&(c.style.opacity="0"),n&&(n.style.display="flex",Fe.to(n,{opacity:1,duration:.3})),qs.loadGateSequence(u=>{i&&(i.style.width=`${u}%`),s&&(s.textContent=`${String(u).padStart(2,"0")}%`)},()=>{t.getLenis()&&t.getLenis().start(),Fe.timeline().to(n,{opacity:0,duration:.5,delay:.2}).call(()=>{n&&(n.style.display="none")}).to([l,c],{opacity:1,duration:.6}).call(()=>{t.getLenis()&&t.getLenis().resize(),ScrollTrigger.refresh()})})})});const a=document.getElementById("gateExitBtn");a&&a.addEventListener("click",()=>{document.body.classList.remove("hover-btn","hover-link");const o=document.getElementById("cursorText");o&&(o.textContent=""),t.getLenis()&&t.getLenis().stop();const l=document.getElementById("gateScrollContainer"),c=document.getElementById("webglContainer"),u=document.getElementById("scrollContainer");Fe.timeline().to([l,c],{opacity:0,duration:.4}).call(()=>{qs.switchToMainSequence(),t.exitGateMode(),u&&(u.style.opacity="0")}).to([c,u],{opacity:1,duration:.6}).call(()=>{t.getLenis()&&t.getLenis().start()})})}})}const qs=new Qx("webglCanvas",ZM,JM);
