var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var r={},i=[],a=()=>{},o=()=>!1,s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith(`onUpdate:`),l=Object.assign,u=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>w(e)===`[object Map]`,h=e=>w(e)===`[object Set]`,g=e=>w(e)===`[object Date]`,_=e=>w(e)===`[object RegExp]`,v=e=>typeof e==`function`,y=e=>typeof e==`string`,b=e=>typeof e==`symbol`,x=e=>typeof e==`object`&&!!e,S=e=>(x(e)||v(e))&&v(e.then)&&v(e.catch),C=Object.prototype.toString,w=e=>C.call(e),ee=e=>w(e).slice(8,-1),T=e=>w(e)===`[object Object]`,E=e=>y(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,te=n(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ne=n(`bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo`),D=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},re=/-\w/g,O=D(e=>e.replace(re,e=>e.slice(1).toUpperCase())),ie=/\B([A-Z])/g,ae=D(e=>e.replace(ie,`-$1`).toLowerCase()),k=D(e=>e.charAt(0).toUpperCase()+e.slice(1)),oe=D(e=>e?`on${k(e)}`:``),A=(e,t)=>!Object.is(e,t),se=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ce=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},le=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ue=e=>{let t=y(e)?Number(e):NaN;return isNaN(t)?e:t},de,fe=()=>de||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function pe(e,t){return e+JSON.stringify(t,(e,t)=>typeof t==`function`?t.toString():t)}var me=n(`Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol`);function he(e){if(p(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=y(r)?ye(r):he(r);if(i)for(let e in i)t[e]=i[e]}return t}if(y(e)||x(e))return e}var ge=/;(?![^(]*\))/g,_e=/:([^]+)/,ve=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ye(e){let t={};return e.replace(ve,e=>e.startsWith(`/*`)?``:e).split(ge).forEach(e=>{if(e){let n=e.split(_e);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function be(e){let t=``;if(y(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){let r=be(e[n]);r&&(t+=r+` `)}else if(x(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}function xe(e){if(!e)return null;let{class:t,style:n}=e;return t&&!y(t)&&(e.class=be(t)),n&&(e.style=he(n)),e}var Se=`html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot`,Ce=`svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view`,we=`annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics`,Te=`area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr`,Ee=n(Se),De=n(Ce),Oe=n(we),ke=n(Te),Ae=n(`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`);function je(e){return!!e||e===``}function Me(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=Ie(e[i],t[i],n);return r}function Ne(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&Ie(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function Pe(e,t,n){let r=m(e),i=m(t);if(r||i||(r=h(e),i=h(t),r||i))return r&&i?Ne(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!Ie(e[r],t[r],n))return!1}return String(e)===String(t)}function Fe(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function Ie(e,t,n){if(e===t)return!0;let r=g(e),i=g(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=b(e),i=b(t),r||i?e===t:(r=p(e),i=p(t),r||i?r&&i?Fe(e,t,n,Me):!1:(r=x(e),i=x(t),r||i?!r||!i?!1:Fe(e,t,n,Pe):String(e)===String(t))))}function Le(e,t){return e.findIndex(e=>Ie(e,t))}var Re=e=>!!(e&&e.__v_isRef===!0),ze=e=>y(e)?e:e==null?``:p(e)||x(e)&&(e.toString===C||!v(e.toString))?Re(e)?ze(e.value):JSON.stringify(e,Be,2):String(e),Be=(e,t)=>Re(t)?Be(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ve(t,r)+` =>`]=n,e),{})}:h(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ve(e))}:b(t)?Ve(t):x(t)&&!p(t)&&!T(t)?String(t):t,Ve=(e,t=``)=>b(e)?`Symbol(${e.description??t})`:e;function He(e){return e==null?`initial`:typeof e==`string`?e===``?` `:e:String(e)}var j,Ue=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&j&&(j.active?(this.parent=j,this.index=(j.scopes||(j.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=j;try{return j=this,e()}finally{j=t}}}on(){++this._on===1&&(this.prevScope=j,j=this)}off(){if(this._on>0&&--this._on===0){if(j===this)j=this.prevScope;else{let e=j;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function We(e){return new Ue(e)}function Ge(){return j}function Ke(e,t=!1){j&&j.cleanups.push(e)}var M,qe=new WeakSet,Je=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,j&&(j.active?j.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qe.has(this)&&(qe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pt(this),tt(this);let e=M,t=lt;M=this,lt=!0;try{return this.fn()}finally{nt(this),M=e,lt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)at(e);this.deps=this.depsTail=void 0,pt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rt(this)&&this.run()}get dirty(){return rt(this)}},Ye=0,Xe,Ze;function Qe(e,t=!1){e.flags|=8,t?(e.next=Ze,Ze=e):(e.next=Xe,Xe=e)}function $e(){Ye++}function et(){if(--Ye>0)return;if(Ze){let e=Ze;for(Ze=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Xe;){let t=Xe;for(Xe=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function tt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function nt(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),at(r),ot(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function rt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(it(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function it(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===mt)||(e.globalVersion=mt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!rt(e))))return;e.flags|=2;let t=e.dep,n=M,r=lt;M=e,lt=!0;try{tt(e);let n=e.fn(e._value);(t.version===0||A(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,lt=r,nt(e),e.flags&=-3}}function at(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)at(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ot(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}function st(e,t){e.effect instanceof Je&&(e=e.effect.fn);let n=new Je(e);t&&l(n,t);try{n.run()}catch(e){throw n.stop(),e}let r=n.run.bind(n);return r.effect=n,r}function ct(e){e.effect.stop()}var lt=!0,ut=[];function dt(){ut.push(lt),lt=!1}function ft(){let e=ut.pop();lt=e===void 0||e}function pt(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var mt=0,ht=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},gt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!lt||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new ht(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,_t(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,mt++,this.notify(e)}notify(e){$e();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{et()}}};function _t(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)_t(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var vt=new WeakMap,yt=Symbol(``),bt=Symbol(``),xt=Symbol(``);function St(e,t,n){if(lt&&M){let t=vt.get(e);t||vt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new gt),r.map=t,r.key=n),r.track()}}function Ct(e,t,n,r,i,a){let o=vt.get(e);if(!o){mt++;return}let s=e=>{e&&e.trigger()};if($e(),t===`clear`)o.forEach(s);else{let i=p(e),a=i&&E(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===xt||!b(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(xt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(yt)),m(e)&&s(o.get(bt)));break;case`delete`:i||(s(o.get(yt)),m(e)&&s(o.get(bt)));break;case`set`:m(e)&&s(o.get(yt))}}et()}function wt(e,t){let n=vt.get(e);return n&&n.get(t)}function Tt(e){let t=N(e);return t===e||(St(t,`iterate`,xt),hn(e))?t:mn(e)?pn(e)?t.map(e=>yn(vn(e))):t.map(yn):t.map(vn)}function Et(e){return St(e=N(e),`iterate`,xt),e}function Dt(e,t){return mn(e)?yn(pn(e)?vn(t):t):vn(t)}var Ot={__proto__:null,[Symbol.iterator](){return kt(this,Symbol.iterator,e=>Dt(this,e))},concat(...e){return Tt(this).concat(...e.map(e=>p(e)?Tt(e):e))},entries(){return kt(this,`entries`,e=>(e[1]=Dt(this,e[1]),e))},every(e,t){return Mt(this,`every`,e,t,void 0,arguments)},filter(e,t){return Mt(this,`filter`,e,t,e=>e.map(e=>Dt(this,e)),arguments)},find(e,t){return Mt(this,`find`,e,t,e=>Dt(this,e),arguments)},findIndex(e,t){return Mt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Mt(this,`findLast`,e,t,e=>Dt(this,e),arguments)},findLastIndex(e,t){return Mt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Mt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Pt(this,`includes`,e)},indexOf(...e){return Pt(this,`indexOf`,e)},join(e){return Tt(this).join(e)},lastIndexOf(...e){return Pt(this,`lastIndexOf`,e)},map(e,t){return Mt(this,`map`,e,t,void 0,arguments)},pop(){return Ft(this,`pop`)},push(...e){return Ft(this,`push`,e)},reduce(e,...t){return Nt(this,`reduce`,e,t)},reduceRight(e,...t){return Nt(this,`reduceRight`,e,t)},shift(){return Ft(this,`shift`)},some(e,t){return Mt(this,`some`,e,t,void 0,arguments)},splice(...e){return Ft(this,`splice`,e)},toReversed(){return Tt(this).toReversed()},toSorted(e){return Tt(this).toSorted(e)},toSpliced(...e){return Tt(this).toSpliced(...e)},unshift(...e){return Ft(this,`unshift`,e)},values(){return kt(this,`values`,e=>Dt(this,e))}};function kt(e,t,n){let r=Et(e),i=r[t],a=i.call(r);if(r!==e&&!hn(e)){if(a[Symbol.toStringTag]===`Array Iterator`){let e=Object.create(Object.getPrototypeOf(a));return e.next=()=>At(a.next(),n),i!==jt[t]&&Object.defineProperties(e,{return:{get(){let e=a.return;return typeof e==`function`?e.bind(a):e}},throw:{get(){let e=a.throw;return typeof e==`function`?e.bind(a):e}}}),e}a._next=a.next,a.next=()=>At(a._next(),n)}return a}function At(e,t){return e.done||(e.value=t(e.value)),e}var jt=Array.prototype;function Mt(e,t,n,r,i,a){let o=Et(e),s=o!==e&&!hn(e),c=o[t];if(c!==jt[t]){let t=c.apply(e,a);return s?vn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Dt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function Nt(e,t,n,r){let i=Et(e),a=i!==e&&!hn(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Dt(e,t)),n.call(this,t,Dt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Dt(e,c):c}function Pt(e,t,n){let r=N(e);St(r,`iterate`,xt);let i=r[t](...n);return(i===-1||i===!1)&&gn(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function Ft(e,t,n=[]){dt(),$e();let r=N(e)[t].apply(e,n);return et(),ft(),r}var It=n(`__proto__,__v_isRef,__isVue`),Lt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(b));function Rt(e){b(e)||(e=String(e));let t=N(this);return St(t,`has`,e),t.hasOwnProperty(e)}var zt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?on:an:i?rn:nn).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=p(e);if(!r){let e;if(a&&(e=Ot[t]))return e;if(t===`hasOwnProperty`)return Rt}let o=Reflect.get(e,t,P(e)?e:n);if((b(t)?Lt.has(t):It(t))||(r||St(e,`get`,t),i))return o;if(P(o)){let e=a&&E(t)?o:o.value;return r&&x(e)?un(e):e}return x(o)?r?un(o):cn(o):o}},Bt=class extends zt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=p(e)&&E(t);if(!this._isShallow){let e=mn(i);if(!hn(n)&&!mn(n)&&(i=N(i),n=N(n)),!a&&P(i)&&!P(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:f(e,t),s=Reflect.set(e,t,n,P(e)?e:r);return e===N(r)&&s&&(o?A(n,i)&&Ct(e,`set`,t,n,i):Ct(e,`add`,t,n)),s}deleteProperty(e,t){let n=f(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ct(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return b(t)&&Lt.has(t)||St(e,`has`,t),n}ownKeys(e){return St(e,`iterate`,p(e)?`length`:yt),Reflect.ownKeys(e)}},Vt=class extends zt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Ht=new Bt,Ut=new Vt,Wt=new Bt(!0),Gt=new Vt(!0),Kt=e=>e,qt=e=>Reflect.getPrototypeOf(e);function Jt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=m(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,u=i[e](...r),d=n?Kt:t?yn:vn;return!t&&St(a,`iterate`,c?bt:yt),l(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:s?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Yt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Xt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(A(n,a)&&St(i,`get`,n),St(i,`get`,a));let{has:o}=qt(i),s=t?Kt:e?yn:vn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&St(N(t),`iterate`,yt),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(A(t,i)&&St(r,`has`,t),St(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?Kt:e?yn:vn;return!e&&St(o,`iterate`,yt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return l(n,e?{add:Yt(`add`),set:Yt(`set`),delete:Yt(`delete`),clear:Yt(`clear`)}:{add(e){let n=N(this),r=qt(n),i=N(e),a=!t&&!hn(e)&&!mn(e)?i:e;return r.has.call(n,a)||A(e,a)&&r.has.call(n,e)||A(i,a)&&r.has.call(n,i)||(n.add(a),Ct(n,`add`,a,a)),this},set(e,n){t||hn(n)||mn(n)||(n=N(n));let r=N(this),{has:i,get:a}=qt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?A(n,s)&&Ct(r,`set`,e,n,s):Ct(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=qt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ct(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&Ct(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Jt(r,e,t)}),n}function Zt(e,t){let n=Xt(e,t);return(r,i,a)=>i===`__v_isReactive`?!e:i===`__v_isReadonly`?e:i===`__v_isShallow`?t:i===`__v_raw`?r:Reflect.get(f(n,i)&&i in r?n:r,i,a)}var Qt={get:Zt(!1,!1)},$t={get:Zt(!1,!0)},en={get:Zt(!0,!1)},tn={get:Zt(!0,!0)},nn=new WeakMap,rn=new WeakMap,an=new WeakMap,on=new WeakMap;function sn(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function cn(e){return mn(e)?e:fn(e,!1,Ht,Qt,nn)}function ln(e){return fn(e,!1,Wt,$t,rn)}function un(e){return fn(e,!0,Ut,en,an)}function dn(e){return fn(e,!0,Gt,tn,on)}function fn(e,t,n,r,i){if(!x(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=sn(ee(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function pn(e){return mn(e)?pn(e.__v_raw):!!(e&&e.__v_isReactive)}function mn(e){return!!(e&&e.__v_isReadonly)}function hn(e){return!!(e&&e.__v_isShallow)}function gn(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function _n(e){return!f(e,`__v_skip`)&&Object.isExtensible(e)&&ce(e,`__v_skip`,!0),e}var vn=e=>x(e)?cn(e):e,yn=e=>x(e)?un(e):e;function P(e){return e?e.__v_isRef===!0:!1}function F(e){return xn(e,!1)}function bn(e){return xn(e,!0)}function xn(e,t){return P(e)?e:new Sn(e,t)}var Sn=class{constructor(e,t){this.dep=new gt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:vn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||hn(e)||mn(e);e=n?e:N(e),A(e,t)&&(this._rawValue=e,this._value=n?e:vn(e),this.dep.trigger())}};function Cn(e){e.dep&&e.dep.trigger()}function wn(e){return P(e)?e.value:e}function Tn(e){return v(e)?e():wn(e)}var En={get:(e,t,n)=>t===`__v_raw`?e:wn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return P(i)&&!P(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Dn(e){return pn(e)?e:new Proxy(e,En)}var On=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new gt,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function kn(e){return new On(e)}function An(e){let t=p(e)?Array(e.length):{};for(let n in e)t[n]=Pn(e,n);return t}var jn=class{constructor(e,t,n){this._object=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=b(t)?t:String(t),this._raw=N(e);let r=!0,i=e;if(!p(e)||b(this._key)||!E(this._key))do r=!gn(i)||hn(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=wn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&P(this._raw[this._key])){let t=this._object[this._key];if(P(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return wt(this._raw,this._key)}},Mn=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function Nn(e,t,n){return P(e)?e:v(e)?new Mn(e):x(e)&&arguments.length>1?Pn(e,t,n):F(e)}function Pn(e,t,n){return new jn(e,t,n)}var Fn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new gt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return Qe(this,!0),!0}get value(){let e=this.dep.track();return it(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function In(e,t,n=!1){let r,i;return v(e)?r=e:(r=e.get,i=e.set),new Fn(r,i,n)}var Ln={GET:`get`,HAS:`has`,ITERATE:`iterate`},Rn={SET:`set`,ADD:`add`,DELETE:`delete`,CLEAR:`clear`},zn={},Bn=new WeakMap,Vn=void 0;function Hn(){return Vn}function Un(e,t=!1,n=Vn){if(n){let t=Bn.get(n);t||Bn.set(n,t=[]),t.push(e)}}function Wn(e,t,n=r){let{immediate:i,deep:o,once:s,scheduler:c,augmentJob:l,call:d}=n,f=e=>o?e:hn(e)||o===!1||o===0?Gn(e,1):Gn(e),m,h,g,_,y=!1,b=!1;if(P(e)?(h=()=>e.value,y=hn(e)):pn(e)?(h=()=>f(e),y=!0):p(e)?(b=!0,y=e.some(e=>pn(e)||hn(e)),h=()=>e.map(e=>{if(P(e))return e.value;if(pn(e))return f(e);if(v(e))return d?d(e,2):e()})):h=v(e)?t?d?()=>d(e,2):e:()=>{if(g){dt();try{g()}finally{ft()}}let t=Vn;Vn=m;try{return d?d(e,3,[_]):e(_)}finally{Vn=t}}:a,t&&o){let e=h,t=o===!0?1/0:o;h=()=>Gn(e(),t)}let x=Ge(),S=()=>{m.stop(),x&&x.active&&u(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{try{return e(...t)}finally{S()}}}let C=b?Array(e.length).fill(zn):zn,w=e=>{if(m.flags&1&&(m.dirty||e)){if(t){let n=m.run();if(e||o||y||(b?n.some((e,t)=>A(e,C[t])):A(n,C))){let e=Vn;dt();try{g&&g(),Vn=m;let e=[n,C===zn?void 0:b&&C[0]===zn?[]:C,_];C=n,d?d(t,3,e):t(...e)}finally{Vn=e,ft()}}}else m.run()}};return l&&l(w),m=new Je(h),m.scheduler=c?()=>c(w,!1):w,_=e=>Un(e,!1,m),g=m.onStop=()=>{let e=Bn.get(m);if(e){if(d)d(e,4);else for(let t of e)t();Bn.delete(m)}},t?i?w(!0):C=m.run():c?c(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function Gn(e,t=1/0,n){if(t<=0||!x(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,P(e))Gn(e.value,t,n);else if(p(e))for(let r=0;r<e.length;r++)Gn(e[r],t,n);else if(h(e)||m(e))e.forEach(e=>{Gn(e,t,n)});else if(T(e)){for(let r in e)Gn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Gn(e[r],t,n)}return e}var Kn=[];function qn(e){Kn.push(e)}function Jn(){Kn.pop()}function Yn(e,t){}var Xn={SETUP_FUNCTION:0,0:`SETUP_FUNCTION`,RENDER_FUNCTION:1,1:`RENDER_FUNCTION`,NATIVE_EVENT_HANDLER:5,5:`NATIVE_EVENT_HANDLER`,COMPONENT_EVENT_HANDLER:6,6:`COMPONENT_EVENT_HANDLER`,VNODE_HOOK:7,7:`VNODE_HOOK`,DIRECTIVE_HOOK:8,8:`DIRECTIVE_HOOK`,TRANSITION_HOOK:9,9:`TRANSITION_HOOK`,APP_ERROR_HANDLER:10,10:`APP_ERROR_HANDLER`,APP_WARN_HANDLER:11,11:`APP_WARN_HANDLER`,FUNCTION_REF:12,12:`FUNCTION_REF`,ASYNC_COMPONENT_LOADER:13,13:`ASYNC_COMPONENT_LOADER`,SCHEDULER:14,14:`SCHEDULER`,COMPONENT_UPDATE:15,15:`COMPONENT_UPDATE`,APP_UNMOUNT_CLEANUP:16,16:`APP_UNMOUNT_CLEANUP`},Zn={sp:`serverPrefetch hook`,bc:`beforeCreate hook`,c:`created hook`,bm:`beforeMount hook`,m:`mounted hook`,bu:`beforeUpdate hook`,u:`updated`,bum:`beforeUnmount hook`,um:`unmounted hook`,a:`activated hook`,da:`deactivated hook`,ec:`errorCaptured hook`,rtc:`renderTracked hook`,rtg:`renderTriggered hook`,0:`setup function`,1:`render function`,2:`watcher getter`,3:`watcher callback`,4:`watcher cleanup function`,5:`native event handler`,6:`component event handler`,7:`vnode hook`,8:`directive hook`,9:`transition hook`,10:`app errorHandler`,11:`app warnHandler`,12:`ref function`,13:`async component loader`,14:`scheduler flush`,15:`component update`,16:`app unmount cleanup function`};function Qn(e,t,n,r){try{return r?e(...r):e()}catch(e){er(e,t,n)}}function $n(e,t,n,r){if(v(e)){let i=Qn(e,t,n,r);return i&&S(i)&&i.catch(e=>{er(e,t,n)}),i}if(p(e)){let i=[];for(let a=0;a<e.length;a++)i.push($n(e[a],t,n,r));return i}}function er(e,t,n,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||r;if(t){let r=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}r=r.parent}if(o){dt(),Qn(o,null,10,[e,i,a]),ft();return}}tr(e,n,a,i,s)}function tr(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var nr=[],rr=-1,ir=[],ar=null,or=0,sr=Promise.resolve(),cr=null;function lr(e){let t=cr||sr;return e?t.then(this?e.bind(this):e):t}function ur(e){let t=rr+1,n=nr.length;for(;t<n;){let r=t+n>>>1,i=nr[r],a=vr(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function dr(e){if(!(e.flags&1)){let t=vr(e),n=nr[nr.length-1];!n||!(e.flags&2)&&t>=vr(n)?nr.push(e):nr.splice(ur(t),0,e),e.flags|=1,fr()}}function fr(){cr||=sr.then(yr)}function pr(e){if(!p(e))ar&&e.id===-1?ar.splice(or+1,0,e):e.flags&1||(ir.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)ir.push(e[t]);fr()}function mr(e,t,n,r=rr+1){for(;r<nr.length;r++){let n=nr[r];if(n&&n.flags&2){if(e&&n.id!==e.uid||t!==void 0&&!(n.id>=t))continue;nr.splice(r,1),r=e?r-1:rr,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function hr(e,t,n=0){if(ir.length){let e=ir,r=0;if(t){e=[];for(let i=0;i<ir.length;i++){let a=ir[i];(a.i===void 0?t.has(a):!a.i||a.i.uid<n)?ir[r++]=a:e.push(a)}}let i=[...new Set(e)].sort((e,t)=>vr(e)-vr(t));if(ir.length=r,ar){for(let e=0;e<i.length;e++)ar.push(i[e]);return}for(ar=i,or=0;or<ar.length;or++){let e=ar[or];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ar=null,or=0}}var gr=!1;function _r(e,t){if(gr){e();return}let n=t===void 0?void 0:new Set(ir);e(),gr=!0;try{mr(void 0,t),hr(void 0,n,t)}finally{gr=!1}}var vr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yr(e){try{for(rr=0;rr<nr.length;rr++){let e=nr[rr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rr<nr.length;rr++){let e=nr[rr];e&&(e.flags&=-2)}rr=-1,nr.length=0,hr(e),cr=null,(nr.length||ir.length)&&yr(e)}}var br,xr=[];function Sr(e,t){br=e,br?(br.enabled=!0,xr.forEach(({event:e,args:t})=>br.emit(e,...t)),xr=[]):typeof window<`u`&&window.HTMLElement&&!(window.navigator?.userAgent)?.includes(`jsdom`)?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(e=>{Sr(e,t)}),setTimeout(()=>{br||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,xr=[])},3e3)):xr=[]}var Cr=null,wr=null;function Tr(e){let t=Cr;return Cr=e,wr=e&&e.type.__scopeId||null,t}function Er(e){wr=e}function Dr(){wr=null}var Or=e=>kr;function kr(e,t=Cr,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ks(-1);let i=Tr(t),a=ws.length,o;try{o=e(...n)}finally{for(let e=ws.length;e>a;e--)Ds();Tr(i),r._d&&ks(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ar(e,t){if(Cr===null)return e;let n=vc(Cr),i=e.dirs||=[];for(let e=0;e<t.length;e++){let[a,o,s,c=r]=t[e];a&&(v(a)&&(a={mounted:a,updated:a}),a.deep&&Gn(o),i.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function jr(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(dt(),$n(c,n,8,[e.el,s,e,t]),ft())}}function Mr(e,t){if(ec){let n=ec.provides,r=ec.parent&&ec.parent.provides;r===n&&(n=ec.provides=Object.create(r)),n[e]=t}}function Nr(e,t,n=!1){let r=tc();if(r||yo){let i=yo?yo._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&v(t)?t.call(r&&r.proxy):t}}function Pr(){return!!(tc()||yo)}var Fr=Symbol.for(`v-scx`),Ir=()=>Nr(Fr);function Lr(e,t){return Vr(e,null,t)}function Rr(e,t){return Vr(e,null,{flush:`post`})}function zr(e,t){return Vr(e,null,{flush:`sync`})}function Br(e,t,n){return Vr(e,t,n)}function Vr(e,t,n=r){let{immediate:i,deep:o,flush:s,once:c}=n,u=l({},n),d=t&&i||!t&&s!==`post`,f;if(sc){if(s===`sync`){let e=Ir();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=a,e.resume=a,e.pause=a,e}}let p=ec;u.call=(e,t,n)=>$n(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{e.i=p,I(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():dr(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Wn(e,t,u);return sc&&(f?f.push(h):d&&h()),h}function Hr(e,t,n){let r=this.proxy,i=y(e)?e.includes(`.`)?Ur(r,e):()=>r[e]:e.bind(r,r),a;v(t)?a=t:(a=t.handler,n=t);let o=ic(this),s=Vr(i,a.bind(r),n);return o(),s}function Ur(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Wr=new WeakMap,Gr=Symbol(`_vte`),Kr=e=>e.__isTeleport,qr=e=>e&&(e.disabled||e.disabled===``),Jr=e=>e&&(e.defer||e.defer===``),Yr=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Xr=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Zr=(e,t)=>{let n=e&&e.to;return y(n)?t?t(n):null:n},Qr={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=qr(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=qr(e.props),r=e.target=Zr(e.props,m),a=ri(r,e,h,p);r&&(o!==`svg`&&Yr(r)?o=`svg`:o!==`mathml`&&Xr(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),ni(e,!1)))},S=e=>{let t=()=>{if(Wr.get(e)===t){if(Wr.delete(e),qr(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),ni(e,!0)}x(e)}};Wr.set(e,t),I(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Jr(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),ni(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Wr.get(e);if(u){u.flags|=8,Wr.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=qr(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Yr(p)?o=`svg`:(o===`mathml`||Xr(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),is(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):$r(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=Zr(t.props,m);e&&(t.target=e,$r(t,e,null,l,0))}else g&&$r(t,p,h,l,1);ni(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=qr(f),m=a||!p,h=Wr.get(e);if(h&&(h.flags|=8,Wr.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:$r,hydrate:ei};function $r(e,t,n,{o:{insert:r},m:i},a=2){a===0&&(e.targetStart&&r(e.targetStart,t,n),r(e.targetAnchor,t,n),n=e.targetAnchor);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Wr.has(e)&&(!d||qr(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function ei(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=Zr(t.props,c),h=qr(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||ri(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||ri(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),ni(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var ti=Qr;function ni(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function ri(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Gr]=o,e&&(r(a,e,i),r(o,e,i)),o}var ii=Symbol(`_leaveCb`),ai=Symbol(`_enterCb`);function oi(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fa(()=>{e.isMounted=!0}),ha(()=>{e.isUnmounting=!0}),e}var si=[Function,Array],ci={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:si,onEnter:si,onAfterEnter:si,onEnterCancelled:si,onBeforeLeave:si,onLeave:si,onAfterLeave:si,onLeaveCancelled:si,onBeforeAppear:si,onAppear:si,onAfterAppear:si,onAppearCancelled:si},li={name:`BaseTransition`,props:ci,setup(e,{slots:t}){let n=tc(),r=oi();return()=>{let i=t.default&&_i(t.default(),!0),a=i&&i.length?ui(i):n.subTree?Ws():void 0;if(!a)return;let o=N(e),{mode:s}=o;if(r.isLeaving)return mi(a);let c=hi(a);if(!c)return mi(a);let l=pi(c,o,r,n,e=>l=e);c.type!==R&&gi(c,l);let u=n.subTree&&hi(n.subTree);if(u&&u.type!==R&&!Ps(u,c)&&vi(n.subTree)){let e=pi(u,o,r,n);if(gi(u,e),s===`out-in`&&c.type!==R)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},mi(a);s===`in-out`&&c.type!==R?e.delayLeave=(e,t,n)=>{let i=fi(r,u);i[String(u.key)]=u,e[ii]=()=>{t(),e[ii]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function ui(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==R){t=n;break}}return t}var di=li;function fi(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function pi(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=fi(n,e),C=(e,t)=>{e&&$n(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),p(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},ee={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=_||c;else return}t[ii]&&t[ii](!0);let i=S[x];if(i&&Ps(e,i)){let e=i.el[ii];if(!e){let t=vi(i);e=t&&t.el[ii]}e&&e()}C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=d;if(!n.isMounted){if(a)r=v||l,i=y||u,o=b||d;else return}let s=!1;t[ai]=e=>{s||(s=!0,C(e?o:i,[t]),ee.delayedLeave&&ee.delayedLeave(),t[ai]=void 0)};let c=t[ai].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[ai]&&t[ai](!0),n.isUnmounting)return r();C(f,[t]);let a=!1;t[ii]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[ii]=void 0,S[i]===e&&delete S[i])};let o=t[ii].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=pi(e,t,n,r,i);return i&&i(a),a}};return ee}function mi(e){if(ea(e))return e=Vs(e),e.children=null,e}function hi(e){if(!ea(e))return Kr(e.type)&&e.children?ui(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&v(n.default))return n.default()}}function gi(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;gi(Kr(n.type)&&hi(n)||n,t)}else if(e.shapeFlag&128)e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback);else if(e.transition=t,e.type===L&&p(e.children)){let n=Do(e.children,!1);n&&gi(n,t)}}function _i(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===L?(o.patchFlag&128&&i++,r=r.concat(_i(o.children,t,s))):(t||o.type!==R)&&r.push(s==null?o:Vs(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function vi(e){if(e.component)return vi(e.component.subTree);if(e.type===L){let t=p(e.children)&&Do(e.children,!1);return t?vi(t):void 0}if(e.type!==R)return e}function yi(e,t){return v(e)?l({name:e.name},t,{setup:e}):e}function bi(){let e=tc();return e?(e.appContext.config.idPrefix||`v`)+`-`+e.ids[0]+e.ids[1]++:``}function xi(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Si(e){let t=tc(),n=bn(null);if(t){let i=t.refs===r?t.refs={}:t.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>n.value,set:e=>n.value=e})}return n}function Ci(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var wi=new WeakMap;function Ti(e,t,n,i,a=!1){if(p(e)){e.forEach((e,r)=>Ti(e,t&&(p(t)?t[r]:t),n,i,a));return}if(Zi(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ti(e,t,n,i.component.subTree);return}let s=i.shapeFlag&4?vc(i.component):i.el,c=a?null:s,{i:l,r:d}=e,m=t&&t.r,h=l.refs===r?l.refs={}:l.refs,g=l.setupState,_=N(g),b=g===r?o:e=>!Ci(h,e)&&f(_,e),x=(e,t)=>!(t&&Ci(h,t));if(m!=null&&m!==d){if(Ei(t),y(m))h[m]=null,b(m)&&(g[m]=null);else if(P(m)){let e=t;x(m,e.k)&&(m.value=null),e.k&&(h[e.k]=null)}}if(v(d))Qn(d,l,12,[c,h]);else{let t=y(d),r=P(d);if(t||r){let i=()=>{if(e.f){let n=t?b(d)?g[d]:h[d]:x(d)||!e.k?d.value:h[e.k];if(a)p(n)&&u(n,s);else if(p(n))n.includes(s)||n.push(s);else if(t)h[d]=[s],b(d)&&(g[d]=h[d]);else{let t=[s];x(d,e.k)&&(d.value=t),e.k&&(h[e.k]=t)}}else t?(h[d]=c,b(d)&&(g[d]=c)):r&&(x(d,e.k)&&(d.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),wi.delete(e)};t.id=-1,wi.set(e,t),I(t,n)}else Ei(e),i()}}}function Ei(e){let t=wi.get(e);t&&(t.flags|=8,wi.delete(e))}var Di=!1,Oi=()=>{Di||=(console.error(`Hydration completed but contains mismatches.`),!0)},ki=e=>e.namespaceURI.includes(`svg`)&&e.tagName!==`foreignObject`,Ai=e=>e.namespaceURI.includes(`MathML`),ji=e=>{if(e.nodeType===1){if(ki(e))return`svg`;if(Ai(e))return`mathml`}},Mi=e=>e.nodeType===8;function Ni(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:a,parentNode:o,remove:c,insert:l,createComment:u}}=e,d=(e,t)=>{t.hasChildNodes()?(f(t.firstChild,e,null,null,null),hr(),t._vnode=e):(n(null,e,t),hr(),t._vnode=e)},f=(n,r,s,c,u,d=!1)=>{d||=!!r.dynamicChildren;let b=Mi(n)&&n.data===`[`,x=()=>g(n,r,s,c,u,b),{type:S,ref:C,shapeFlag:w,patchFlag:ee}=r,T=n.nodeType;r.el=n,ee===-2&&(d=!1,r.dynamicChildren=null);let E=null;switch(S){case Ss:T===3?(n.data!==r.children&&(Oi(),n.data=r.children),E=a(n)):r.children===``?(l(r.el=i(``),o(n),n),E=n):E=x();break;case R:y(n)?(E=a(n),v(r.el=n.content.firstChild,n,s)):E=T!==8||b?x():a(n);break;case Cs:if(b&&(n=a(n),T=n.nodeType),T===1||T===3){E=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=E.nodeType===1?E.outerHTML:E.data),t===r.staticCount-1&&(r.anchor=E),E=a(E);return b?a(E):E}x();break;case L:E=b?h(n,r,s,c,u,d):x();break;default:if(w&1)E=(T!==1||r.type.toLowerCase()!==n.tagName.toLowerCase())&&!y(n)?x():p(n,r,s,c,u,d);else if(w&6){r.slotScopeIds=u;let e=o(n);if(E=b?_(n):Mi(n)&&n.data===`teleport start`?_(n,n.data,`teleport end`):a(n),t(r,e,null,s,c,ji(e),d),(Zi(r)||r.component.asyncDep)&&!r.component.subTree){let t;b?(t=z(Cs),t.anchor=E?E.previousSibling:e.lastChild):t=n.nodeType===3?Hs(``):z(n.nodeType===8?R:`div`),t.el=n,r.component.subTree=t}}else w&64?E=T===8?r.type.hydrate(n,r,s,c,u,d,e,m):x():w&128&&(E=r.type.hydrate(n,r,s,c,ji(o(n)),u,d,e,f))}return C!=null&&Ti(C,null,c,r),E},p=(e,t,n,i,a,o)=>{o||=!!t.dynamicChildren;let{type:l,dynamicProps:u,props:d,patchFlag:f,shapeFlag:p,dirs:h,transition:g}=t,_=l===`input`||l===`option`,b=!!u;if(_||b||f!==-1){h&&jr(t,null,n,`created`);let l=!1;if(y(e)){l=rs(null,g)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;if(l){let e=r.getAttribute(`class`);e&&(r.$cls=e),g.beforeEnter(r)}v(r,e,n),t.el=e=r}if(p&16&&!(d&&(d.innerHTML||d.textContent))){let r=m(e.firstChild,t,e,n,i,a,o);for(r&&!Ri(e,1)&&Oi();r;){let e=r;r=r.nextSibling,c(e)}}else if(p&8){let n=t.children;n[0]===`
`&&(e.tagName===`PRE`||e.tagName===`TEXTAREA`)&&(n=n.slice(1));let{textContent:r}=e;r!==n&&r!==n.replace(/\r\n|\r/g,`
`)&&(Ri(e,0)||Oi(),e.textContent=t.children)}if(d){if(_||b||!o||f&48){let t=e.tagName.includes(`-`),i=e.namespaceURI.includes(`svg`)?`svg`:e.namespaceURI.includes(`MathML`)?`mathml`:void 0;for(let a in d)if(_&&(a.endsWith(`value`)||a===`indeterminate`)||s(a)&&!te(a)||a[0]===`.`||t&&!te(a)||u&&u.includes(a)){if(Fi(e,a,d[a]))continue;r(e,a,null,d[a],i,n)}}else if(d.onClick)r(e,`onClick`,null,d.onClick,void 0,n);else if(f&4&&pn(d.style))for(let e in d.style)d.style[e]}let x;(x=d&&d.onVnodeBeforeMount)&&Ys(x,n,t),h&&jr(t,null,n,`beforeMount`),((x=d&&d.onVnodeMounted)||h||l)&&ys(()=>{x&&Ys(x,n,t),l&&g.enter(e),h&&jr(t,null,n,`mounted`)},i)}return e.nextSibling},m=(e,t,r,o,s,c,u)=>{u||=!!t.dynamicChildren;let d=t.children,p=d.length,m=!1;for(let t=0;t<p;t++){let h=u?d[t]:d[t]=Gs(d[t]),g=h.type===Ss;e?(g&&!u&&t+1<p&&Gs(d[t+1]).type===Ss&&(l(i(e.data.slice(h.children.length)),r,a(e)),e.data=h.children),e=f(e,h,o,s,c,u)):g&&!h.children?l(h.el=i(``),r):(m||(m=!0,Ri(r,1)||Oi()),n(null,h,r,null,o,s,ji(r),c))}return e},h=(e,t,n,r,i,s)=>{let{slotScopeIds:c}=t;c&&(i=i?i.concat(c):c);let d=o(e),f=m(a(e),t,d,n,r,i,s);return f&&Mi(f)&&f.data===`]`?a(t.anchor=f):(Oi(),l(t.anchor=u(`]`),d,f),f)},g=(e,t,r,i,s,l)=>{if(Bi(e,t)||Oi(),t.el=null,l){let t=_(e);for(;;){let n=a(e);if(n&&n!==t)c(n);else break}}let u=a(e),d=o(e);return c(e),n(null,t,d,u,r,i,ji(d),s),r&&(r.vnode.el=t.el,No(r,t.el)),u},_=(e,t=`[`,n=`]`)=>{let r=0;for(;e;)if(e=a(e),e&&Mi(e)&&(e.data===t&&r++,e.data===n)){if(r===0)return a(e);r--}return e},v=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},y=e=>e.nodeType===1&&e.tagName===`TEMPLATE`;return[d,f]}var Pi=new Set([`src`,`srcset`,`href`,`poster`]);function Fi(e,t,n){return Pi.has(t)?e.getAttribute(t)===(n==null?null:`${n}`):!1}var Ii=`data-allow-mismatch`,Li={0:`text`,1:`children`,2:`class`,3:`style`,4:`attribute`};function Ri(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Ii);)e=e.parentElement;return zi(e&&e.getAttribute(Ii),t)}function zi(e,t){if(e==null)return!1;if(e===``)return!0;{let n=e.split(`,`);return t===0&&n.includes(`children`)?!0:n.includes(Li[t])}}function Bi(e,t){return Ri(e.parentElement,1)||Vi(e)||Hi(t)}function Vi(e){return e.nodeType===1&&zi(e.getAttribute(Ii),1)}function Hi({props:e}){let t=e&&e[Ii];return typeof t==`string`&&zi(t,1)}var Ui=fe().requestIdleCallback||(e=>setTimeout(e,1)),Wi=fe().cancelIdleCallback||(e=>clearTimeout(e)),Gi=(e=1e4)=>t=>{let n=Ui(t,{timeout:e});return()=>Wi(n)};function Ki(e){let{top:t,left:n,bottom:r,right:i}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:o}=window;return(t>0&&t<a||r>0&&r<a)&&(n>0&&n<o||i>0&&i<o)}var qi=e=>(t,n)=>{let r=new IntersectionObserver(e=>{for(let n of e)if(n.isIntersecting){r.disconnect(),t();break}},e),i=e=>{if(Ki(e))return t(),r.disconnect(),!1;if(getComputedStyle(e).display===`contents`){for(let t=0;t<e.children.length;t++)if(i(e.children[t])===!1)return!1}r.observe(e)};return n(e=>{if(e instanceof Element)return i(e)}),()=>r.disconnect()},Ji=e=>t=>{if(e){let n=matchMedia(e);if(n.matches)t();else return n.addEventListener(`change`,t,{once:!0}),()=>n.removeEventListener(`change`,t)}},Yi=(e=[])=>(t,n)=>{y(e)&&(e=[e]);let r=!1,i=e=>{r||(r=!0,a(),t(),e.target.dispatchEvent(new e.constructor(e.type,e)))},a=()=>{n(t=>{for(let n of e)t.removeEventListener(n,i)})};return n(t=>{for(let n of e)t.addEventListener(n,i,{once:!0})}),a};function Xi(e,t){if(Mi(e)&&e.data===`[`){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Mi(r)){if(r.data===`]`){if(--n===0)break}else r.data===`[`&&n++}r=r.nextSibling}}else t(e)}var Zi=e=>!!e.type.__asyncLoader;function Qi(e){v(e)&&(e={loader:e});let{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:a,timeout:o,suspensible:s=!0,onError:c}=e,l=null,u,d=0,f=()=>(d++,l=null,p()),p=()=>{let e;return l||(e=l=t().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),c)return new Promise((t,n)=>{c(e,()=>t(f()),()=>n(e),d+1)});throw e}).then(t=>e!==l&&l?l:(t&&(t.__esModule||t[Symbol.toStringTag]===`Module`)&&(t=t.default),u=t,t)))};return yi({name:`AsyncComponentWrapper`,__asyncLoader:p,__asyncHydrate(e,t,n){let r=e.isConnected,i=!1;(t.bu||=[]).push(()=>i=!0);let o=()=>{i||!e.parentNode||r&&!e.isConnected||n()},s=a?()=>{let n=a(o,t=>Xi(e,t));n&&(t.bum||=[]).push(n)}:o;u?s():p().then(()=>!t.isUnmounted&&s())},get __asyncResolved(){return u},setup(){let e=ec;if(xi(e),u)return()=>$i(u,e);let t=t=>{l=null,er(t,e,13,!r)};if(s&&e.suspense||sc)return p().then(t=>()=>$i(t,e)).catch(e=>(t(e),()=>r?z(r,{error:e}):null));let a=F(!1),c=F(),d=F(!!i),f,m;return ga(()=>{f!=null&&clearTimeout(f),m!=null&&clearTimeout(m)}),i&&(m=setTimeout(()=>{e.isUnmounted||(d.value=!1)},i)),o!=null&&(f=setTimeout(()=>{if(!e.isUnmounted&&!a.value&&!c.value){let e=Error(`Async component timed out after ${o}ms.`);t(e),c.value=e}},o)),p().then(()=>{e.isUnmounted||(a.value=!0,e.parent&&ea(e.parent.vnode)&&e.parent.update())}).catch(n=>{e.isUnmounted?l=null:(t(n),c.value=n)}),()=>{if(a.value&&u)return $i(u,e);if(c.value&&r)return z(r,{error:c.value});if(n&&!d.value)return $i(n,e)}}})}function $i(e,t){let{ref:n,props:r,children:i,ce:a}=t.vnode,o=z(e,r,i);return o.ref=n,o.ce=a,delete t.vnode.ce,o}var ea=e=>e.type.__isKeepAlive,ta={name:`KeepAlive`,__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){let n=tc(),r=n.ctx;if(!r.renderer)return()=>{let e=t.default&&t.default();return e&&e.length===1?e[0]:e};let i=new Map,a=new Set,o=null,s=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:d}}}=r,f=d(`div`);r.activate=(e,t,n,r,i)=>{let a=e.component;l(e,t,n,0,s),c(a.vnode,e,t,n,a,s,r,e.slotScopeIds,i),I(()=>{a.isDeactivated=!1,a.a&&se(a.a);let t=e.props&&e.props.onVnodeMounted;t&&Ys(t,a.parent,e)},s)},r.deactivate=e=>{let t=e.component;ss(t.m),ss(t.a),l(e,f,null,1,s),I(()=>{t.da&&se(t.da);let n=e.props&&e.props.onVnodeUnmounted;n&&Ys(n,t.parent,e),t.isDeactivated=!0},s)};function p(e){sa(e),u(e,n,s,!0)}function m(e){i.forEach((t,n)=>{let r=yc(Zi(t)?t.type.__asyncResolved||{}:t.type);r&&!e(r)&&h(n)})}function h(e){let t=i.get(e);t&&(!o||!Ps(t,o))?p(t):o&&(sa(o),t&&sa(t)),i.delete(e),a.delete(e)}Br(()=>[e.include,e.exclude],([e,t])=>{e&&m(t=>na(e,t)),t&&m(e=>!na(t,e))},{flush:`post`,deep:!0});let g=null,_=()=>{g!=null&&(ls(n.subTree.type)?I(()=>{let e=ca(n.subTree);e.component&&i.set(g,e)},n.subTree.suspense):i.set(g,ca(n.subTree)))};return fa(_),ma(_),ha(()=>{i.forEach(e=>{let{subTree:t,suspense:r}=n,i=ca(t);if(e.type===i.type&&e.key===i.key){sa(i);let e=i.component.da;e&&I(e,r)}else p(e)})}),()=>{if(g=null,!t.default)return o=null;let n=t.default(),r=n[0];if(n.length>1)return o=null,n;if(!Ns(r)||!(r.shapeFlag&4)&&!(r.shapeFlag&128))return o=null,r;let s=ca(r);if(s.type===R)return o=null,s;let c=s.type,l=yc(Zi(s)?s.type.__asyncResolved||{}:c),{include:u,exclude:d,max:f}=e;if(u&&(!l||!na(u,l))||d&&l&&na(d,l))return s.shapeFlag&=-257,o=s,r;let p=s.key==null?c:s.key,m=i.get(p);return s.el&&(s=Vs(s),r.shapeFlag&128&&(r.ssContent=s)),g=p,m?(s.el=m.el,s.component=m.component,s.transition&&gi(s,s.transition),s.shapeFlag|=512,a.delete(p),a.add(p)):(a.add(p),f&&a.size>parseInt(f,10)&&h(a.values().next().value)),s.shapeFlag|=256,o=s,ls(r.type)?r:s}}};function na(e,t){return p(e)?e.some(e=>na(e,t)):y(e)?e.split(`,`).includes(t):_(e)?(e.lastIndex=0,e.test(t)):!1}function ra(e,t){aa(e,`a`,t)}function ia(e,t){aa(e,`da`,t)}function aa(e,t,n=ec){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(la(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ea(e.parent.vnode)&&oa(r,t,n,e),e=e.parent}}function oa(e,t,n,r){let i=la(t,e,r,!0);ga(()=>{u(r[t],i)},n)}function sa(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ca(e){return e.shapeFlag&128?e.ssContent:e}function la(e,t,n=ec,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{dt();let i=ic(n),a=$n(t,n,e,r);return i(),ft(),a};return r?i.unshift(a):i.push(a),a}}var ua=e=>(t,n=ec)=>{sc&&e!==`sp`||la(e,(...e)=>t(...e),n)},da=ua(`bm`),fa=ua(`m`),pa=ua(`bu`),ma=ua(`u`),ha=ua(`bum`),ga=ua(`um`),_a=ua(`sp`),va=ua(`rtg`),ya=ua(`rtc`);function ba(e,t=ec){la(`ec`,e,t)}var xa=`components`,Sa=`directives`;function Ca(e,t){return Da(xa,e,!0,t)||e}var wa=Symbol.for(`v-ndc`);function Ta(e){return y(e)?Da(xa,e,!1)||e:e||wa}function Ea(e){return Da(Sa,e)}function Da(e,t,n=!0,r=!1){let i=Cr||ec;if(i){let n=i.type;if(e===xa){let e=yc(n,!1);if(e&&(e===t||e===O(t)||e===k(O(t))))return n}let a=Oa(i[e]||n[e],t)||Oa(i.appContext[e],t);return!a&&r?n:a}}function Oa(e,t){return e&&(e[t]||e[O(t)]||e[k(O(t))])}function ka(e,t,n,r){let i,a=n&&n[r],o=p(e);if(o||y(e)){let n=o&&pn(e),r=!1,s=!1;n&&(r=!hn(e),s=mn(e),e=Et(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?yn(vn(e[n])):vn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){if(!Number.isInteger(e)||e<0)i=[];else{i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}}else if(x(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Aa(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(p(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function ja(e,t,n,r,i,a){if(n??={},Cr.ce||Cr.parent&&Zi(Cr.parent)&&Cr.parent.ce){let e=a!=null&&n.key==null?l({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),Es(),Ms(L,null,[z(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=ws.length;Es();let c;try{let i=o&&Ma(o(n)),s=n.key||a||i&&i.key;c=Ms(L,{key:(s&&!b(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=ws.length;e>s;e--)Ds();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),c}function Ma(e){return e.some(e=>!Ns(e)||!(e.type===R||e.type===L&&!Ma(e.children)))?e:null}function Na(e,t){let n={};for(let r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:oe(r)]=e[r];return n}var Pa=e=>e?oc(e)?vc(e):Pa(e.parent):null,Fa=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pa(e.parent),$root:e=>Pa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ao(e),$forceUpdate:e=>e.f||=()=>{dr(e.update)},$nextTick:e=>e.n||=lr.bind(e.proxy),$watch:e=>Hr.bind(e)}),Ia=(e,t)=>e!==r&&!e.__isScriptSetup&&f(e,t),La={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else if(Ia(i,t))return s[t]=1,i[t];else if(a!==r&&f(a,t))return s[t]=2,a[t];else if(f(o,t))return s[t]=3,o[t];else if(n!==r&&f(n,t))return s[t]=4,n[t];else eo&&(s[t]=0)}let u=Fa[t],d,p;if(u)return t===`$attrs`&&St(e.attrs,`get`,``),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==r&&f(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,f(p,t))return p[t]},set({_:e},t,n){let{data:i,setupState:a,ctx:o}=e;return Ia(a,t)?(a[t]=n,!0):i!==r&&f(i,t)?(i[t]=n,!0):f(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(n[c]||e!==r&&c[0]!==`$`&&f(e,c)||Ia(t,c)||f(o,c)||f(i,c)||f(Fa,c)||f(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?f(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}},Ra=l({},La,{get(e,t){if(t!==Symbol.unscopables)return La.get(e,t,e)},has(e,t){return t[0]!==`_`&&!me(t)}});function za(){return null}function Ba(){return null}function Va(e){}function Ha(e){}function Ua(){return null}function Wa(){}function Ga(e,t){return null}function Ka(){return Ja(`useSlots`).slots}function qa(){return Ja(`useAttrs`).attrs}function Ja(e){let t=tc();return t.setupContext||=_c(t)}function Ya(e){return p(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function Xa(e,t){let n=Ya(e);for(let e in t){if(e.startsWith(`__skip`))continue;let r=n[e];r?p(r)||v(r)?r=n[e]={type:r,default:t[e]}:r.default=t[e]:r===null&&(r=n[e]={default:t[e]}),r&&t[`__skip_${e}`]&&(r.skipFactory=!0)}return n}function Za(e,t){return!e||!t?e||t:p(e)&&p(t)?e.concat(t):l({},Ya(e),Ya(t))}function Qa(e,t){let n={};for(let r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function $a(e){let t=tc(),n=sc,r=e();ac(),n&&rc(!1);let i=()=>{ic(t),n&&rc(!0)},a=()=>{tc()!==t&&t.scope.off(),ac(),n&&rc(!1)};return S(r)&&(r=r.catch(e=>{throw i(),Promise.resolve().then(()=>Promise.resolve().then(a)),e})),[r,()=>{i(),Promise.resolve().then(a)}]}var eo=!0;function to(e){let t=ao(e),n=e.proxy,r=e.ctx;eo=!1,t.beforeCreate&&ro(t.beforeCreate,e,`bc`);let{data:i,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:g,activated:_,deactivated:y,beforeDestroy:b,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:T,renderTriggered:E,errorCaptured:te,serverPrefetch:ne,expose:D,inheritAttrs:re,components:O,directives:ie,filters:ae}=t;if(u&&no(u,r,null),s)for(let e in s){let t=s[e];v(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);x(t)&&(e.data=cn(t))}if(eo=!0,o)for(let e in o){let t=o[e],i=B({get:v(t)?t.bind(n,n):v(t.get)?t.get.bind(n,n):a,set:!v(t)&&v(t.set)?t.set.bind(n):a});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(c)for(let e in c)io(c[e],r,n,e);if(l){let e=v(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Mr(t,e[t])})}d&&ro(d,e,`c`);function k(e,t){p(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(k(da,f),k(fa,m),k(pa,h),k(ma,g),k(ra,_),k(ia,y),k(ba,te),k(ya,T),k(va,E),k(ha,S),k(ga,w),k(_a,ne),p(D)){if(D.length){let t=e.exposed||={};D.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ee&&e.render===a&&(e.render=ee),re!=null&&(e.inheritAttrs=re),O&&(e.components=O),ie&&(e.directives=ie),ne&&xi(e)}function no(e,t,n=a){p(e)&&(e=uo(e));for(let n in e){let r=e[n],i;i=x(r)?`default`in r?Nr(r.from||n,r.default,!0):Nr(r.from||n):Nr(r),P(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function ro(e,t,n){$n(p(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function io(e,t,n,r){let i=r.includes(`.`)?Ur(n,r):()=>n[r];if(y(e)){let n=t[e];v(n)&&Br(i,n)}else if(v(e))Br(i,e.bind(n));else if(x(e)){if(p(e))e.forEach(e=>io(e,t,n,r));else{let r=v(e.handler)?e.handler.bind(n):t[e.handler];v(r)&&Br(i,r,e)}}}function ao(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>oo(c,e,o,!0)),oo(c,t,o)),x(t)&&a.set(t,c),c}function oo(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&oo(e,a,n,!0),i&&i.forEach(t=>oo(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=so[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var so={data:co,props:mo,emits:mo,methods:po,computed:po,beforeCreate:fo,created:fo,beforeMount:fo,mounted:fo,beforeUpdate:fo,updated:fo,beforeDestroy:fo,beforeUnmount:fo,destroyed:fo,unmounted:fo,activated:fo,deactivated:fo,errorCaptured:fo,serverPrefetch:fo,components:po,directives:po,watch:ho,provide:co,inject:lo};function co(e,t){return t?e?function(){return l(v(e)?e.call(this,this):e,v(t)?t.call(this,this):t)}:t:e}function lo(e,t){return po(uo(e),uo(t))}function uo(e){if(p(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fo(e,t){return e?[...new Set([].concat(e,t))]:t}function po(e,t){return e?l(Object.create(null),e,t):t}function mo(e,t){return e?p(e)&&p(t)?[...new Set([...e,...t])]:l(Object.create(null),Ya(e),Ya(t??{})):t}function ho(e,t){if(!e)return t;if(!t)return e;let n=l(Object.create(null),e);for(let r in t)n[r]=fo(e[r],t[r]);return n}function go(){return{app:null,config:{isNativeTag:o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var _o=0;function vo(e,t){return function(n,r=null){v(n)||(n=l({},n)),r!=null&&!x(r)&&(r=null);let i=go(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:_o++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Tc,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&v(e.install)?(a.add(e),e.install(c,...t)):v(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||z(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,vc(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&($n(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=yo;yo=c;try{return e()}finally{yo=t}}};return c}}var yo=null;function bo(e,t,n=r){let i=tc(),a=O(t),o=ae(t),s=xo(e,a),c=kn((s,c)=>{let l,u=r,d;return zr(()=>{let t=e[a];A(l,t)&&(l=t,c())}),{get(){return s(),n.get?n.get(l):l},set(e){let s=n.set?n.set(e):e;if(!A(s,l)&&!(u!==r&&A(e,u)))return;let f=i.vnode.props,p=!!(f&&(t in f||a in f||o in f)&&(`onUpdate:${t}`in f||`onUpdate:${a}`in f||`onUpdate:${o}`in f));p||(l=e,c()),i.emit(`update:${t}`,s),A(e,u)&&(A(e,s)&&!A(s,d)||p&&u!==r&&!A(s,l))&&c(),u=e,d=s}}});return c[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?s||r:c,done:!1}:{done:!0}}}},c}var xo=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${O(t)}Modifiers`]||e[`${ae(t)}Modifiers`];function So(e,t,...n){if(e.isUnmounted)return;let i=e.vnode.props||r,a=n,o=t.startsWith(`update:`),s=o&&xo(i,t.slice(7));s&&(s.trim&&(a=n.map(e=>y(e)?e.trim():e)),s.number&&(a=a.map(le)));let c,l=i[c=oe(t)]||i[c=oe(O(t))];!l&&o&&(l=i[c=oe(ae(t))]),l&&$n(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,$n(u,e,6,a)}}var Co=new WeakMap;function wo(e,t,n=!1){let r=n?Co:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!v(e)){let r=e=>{let n=wo(e,t,!0);n&&(s=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(x(e)&&r.set(e,null),null):(p(a)?a.forEach(e=>o[e]=null):l(o,a),x(e)&&r.set(e,o),o)}function To(e,t){return!e||!s(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),f(e,t[0].toLowerCase()+t.slice(1))||f(e,ae(t))||f(e,t))}function Eo(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Tr(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Gs(u.call(t,e,d,f,m,p,h)),y=s}else{let e=t;v=Gs(e.length>1?e(f,{attrs:s,slots:o,emit:l}):e(f,null)),y=t.props?s:Oo(s)}}catch(t){ws.length=0,er(t,e,1),v=z(R)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(c)&&(y=ko(y,a)),b=Vs(b,y,!1,!0))}return n.dirs&&(b=Vs(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&gi(Kr(b.type)&&hi(b)||b,n.transition),v=b,Tr(_),v}function Do(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(Ns(r)){if(r.type!==R||r.children===`v-if`){if(n)return;n=r}}else return}return n}var Oo=e=>{let t;for(let n in e)(n===`class`||n===`style`||s(n))&&((t||={})[n]=e[n]);return t},ko=(e,t)=>{let n={};for(let r in e)c(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Ao(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?jo(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Mo(o,r,n)&&!To(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||jo(r,o,l):!!o;return!1}function jo(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(!f(e,a)||Mo(t,e,a)&&!To(n,a))return!0}return!1}function Mo(e,t,n){let r=e[n],i=t[n];return n===`style`&&x(r)&&x(i)?!Ie(r,i):r!==i}function No({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Po={},Fo=()=>Object.create(Po),Io=e=>Object.getPrototypeOf(e)===Po;function Lo(e,t,n,r=!1){let i={},a=Fo();e.propsDefaults=Object.create(null),zo(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:ln(i):e.type.props?i:a,e.attrs=a}function Ro(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(To(e.emitsOptions,o))continue;let u=t[o];if(c){if(f(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=O(o);i[t]=Bo(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{zo(e,t,i,a)&&(l=!0);let r;for(let a in s)t&&(f(t,a)||(r=ae(a))!==a&&f(t,r))||(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Bo(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)t&&f(t,e)||(delete a[e],l=!0)}l&&Ct(e.attrs,`set`,``)}function zo(e,t,n,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let r in t){if(te(r))continue;let l=t[r],u;a&&f(a,u=O(r))?!o||!o.includes(u)?n[u]=l:(c||={})[u]=l:To(e.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,s=!0)}if(o){let t=N(n),i=c||r;for(let r=0;r<o.length;r++){let s=o[r];n[s]=Bo(a,t,s,i[s],e,!f(i,s))}}return s}function Bo(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=f(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&v(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ic(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ae(n))&&(r=!0))}return r}var Vo=new WeakMap;function Ho(e,t,n=!1){let a=n?Vo:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,c={},u=[],d=!1;if(!v(e)){let r=e=>{d=!0;let[n,r]=Ho(e,t,!0);l(c,n),r&&u.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!d)return x(e)&&a.set(e,i),i;if(p(s))for(let e=0;e<s.length;e++){let t=O(s[e]);Uo(t)&&(c[t]=r)}else if(s)for(let e in s){let t=O(e);if(Uo(t)){let n=s[e],r=c[t]=p(n)||v(n)?{type:n}:l({},n),i=r.type,a=!1,o=!0;if(p(i))for(let e=0;e<i.length;++e){let t=i[e],n=v(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=v(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||f(r,`default`))&&u.push(t)}}let m=[c,u];return x(e)&&a.set(e,m),m}function Uo(e){return e[0]!==`$`&&!te(e)}var Wo=e=>e===`_`||e===`_ctx`||e===`$stable`,Go=e=>p(e)?e.map(Gs):[Gs(e)],Ko=(e,t,n)=>{if(t._n)return t;let r=kr((...e)=>Go(t(...e)),n);return r._c=!1,r},qo=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Wo(n))continue;let i=e[n];if(v(i))t[n]=Ko(n,i,r);else if(i!=null){let e=Go(i);t[n]=()=>e}}},Jo=(e,t)=>{let n=Go(t);e.slots.default=()=>n},Yo=(e,t,n)=>{for(let r in t)(n||!Wo(r))&&(e[r]=t[r])},Xo=(e,t,n)=>{let r=e.slots=Fo();if(e.vnode.shapeFlag&32){let e=t._;e?(Yo(r,t,n),n&&ce(r,`_`,e,!0)):qo(t,r)}else t&&Jo(e,t)},Zo=(e,t,n)=>{let{vnode:i,slots:a}=e,o=!0,s=r;if(i.shapeFlag&32){let e=t._;e?n&&e===1?o=!1:Yo(a,t,n):(o=!t.$stable,qo(t,a)),s=t}else t&&(Jo(e,t),s={default:1});if(o)for(let e in a)!Wo(e)&&s[e]==null&&delete a[e]},I=ys;function Qo(e){return es(e)}function $o(e){return es(e,Ni)}function es(e,t){let n=fe();n.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=a,insertStaticContent:_}=e,v=(e,t,n,r=null,a=null,o=null,s=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ps(e,t)&&(r=ve(e),pe(e,a,o,!0),e=null),t.patchFlag===-2&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===i&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case Ss:y(e,t,n,r);break;case R:b(e,t,n,r);break;case Cs:e??x(t,n,r,s);break;case L:O(e,t,n,r,a,o,s,c,l);break;default:f&1?w(e,t,n,r,a,o,s,c,l):f&6?ie(e,t,n,r,a,o,s,c,l):(f&64||f&128)&&u.process(e,t,n,r,a,o,s,c,l,be)}d!=null&&a?Ti(d,e&&e.ref,o,t||e,!t):d==null&&e&&e.ref!=null&&Ti(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,ts(e,a),s,u),_&&jr(e,null,r,`created`),T(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!te(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Ys(f,r,e)}_&&jr(e,null,r,`beforeMount`);let v=rs(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&I(()=>{try{f&&Ys(f,r,e),v&&g.enter(d),_&&jr(e,null,r,`mounted`)}finally{}},i)},T=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ls(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;T(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Ks(e[l]):Gs(e[l]);v(null,c,t,n,r,i,a,o,s)}},ne=(e,t,n,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||r,h=t.props||r,g;if(n&&ns(n,!1),(g=h.onVnodeBeforeUpdate)&&Ys(g,n,t,e),f&&jr(t,e,n,`beforeUpdate`),n&&ns(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?D(e.dynamicChildren,d,l,n,i,ts(t,a),o):s||ce(e,t,l,null,n,i,ts(t,a),o,!1),u>0){if(u&16)re(l,m,h,n,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],i=m[r],o=h[r];(o!==i||r===`value`)&&c(l,r,i,o,a,n)}}u&1&&e.children!==t.children&&p(l,t.children)}else!s&&d==null&&re(l,m,h,n,a);((g=h.onVnodeUpdated)||f)&&I(()=>{g&&Ys(g,n,t,e),f&&jr(t,e,n,`updated`)},i)},D=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el||cs(c),d=u&&(c.type===L||!Ps(c,l)||c.shapeFlag&198)?m(u):n;v(c,l,d,null,r,i,a,o,!0)}},re=(e,t,n,i,a)=>{if(t!==n){if(t!==r)for(let r in t)!te(r)&&!(r in n)&&c(e,r,t[r],null,a,i);for(let r in n){if(te(r))continue;let o=n[r],s=t[r];o!==s&&r!==`value`&&c(e,r,s,o,a,i)}`value`in n&&c(e,`value`,t.value,n.value,a)}},O=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(D(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&is(e,t,!0)):ce(e,t,n,f,i,a,s,c,l)},ie=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ae(t,n,r,i,a,o,c):k(e,t,c)},ae=(e,t,n,r,i,a,o)=>{let s=e.component=$s(e,r,i);if(ea(e)&&(s.ctx.renderer=be),cc(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,oe,o,a),!e.el){let r=s.subTree=z(R);b(null,r,t,n),e.placeholder=r.el}}else oe(s,e,t,n,i,a,o)},k=(e,t,n)=>{let r=t.component=e.component;if(Ao(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,t.placeholder=e.placeholder,A(r,t,n);return}r.next=t,r.update()}else t.el=e.el,t.placeholder=e.placeholder,r.vnode=t},oe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=os(e);if(n){t&&(t.el=c.el,A(e,t,o)),n.asyncDep.then(()=>{I(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;ns(e,!1),t?(t.el=c.el,A(e,t,o)):t=c,n&&se(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Ys(d,s,t,c),ns(e,!0);let f=Eo(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ve(p),e,i,a),t.el=f.el,u===null&&No(e,f.el),r&&I(r,i),(d=t.props&&t.props.onVnodeUpdated)&&I(()=>Ys(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Zi(t);if(ns(e,!1),l&&se(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Ys(o,d,t),ns(e,!0),s&&Se){let t=()=>{e.subTree=Eo(e),Se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Eo(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&I(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;I(()=>Ys(o,d,e),i)}(t.shapeFlag&256||d&&Zi(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&I(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Je(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>dr(u),ns(e,!0),l()},A=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Ro(e,t.props,r,n),Zo(e,t.children,n),dt(),mr(e),ft()},ce=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ue(l,d,n,r,i,a,o,s,c);return}if(f&256){le(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&_e(l,i,a),d!==l&&p(n,d)):u&16?m&16?ue(l,d,n,r,i,a,o,s,c):_e(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},le=(e,t,n,r,a,o,s,c,l)=>{e||=i,t||=i;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let r=t[p]=l?Ks(t[p]):Gs(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?_e(e,a,o,!0,!1,f):E(t,n,r,a,o,s,c,l,f)},ue=(e,t,n,r,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?Ks(t[u]):Gs(t[u]);if(Ps(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?Ks(t[p]):Gs(t[p]);if(Ps(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,i=e<d?t[e].el:r;for(;u<=p;)v(null,t[u]=l?Ks(t[u]):Gs(t[u]),n,i,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)pe(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ks(t[u]):Gs(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){pe(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ps(r,t[_])){i=_;break}i===void 0?pe(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let w=x?as(C):i;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,i=t[e],f=t[e+1],p=e+1<d?f.el||cs(f):r;C[u]===0?v(null,i,n,p,a,o,s,c,l):x&&(_<0||u!==w[_]?de(i,n,p,2):_--)}}},de=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6)de(e.component.subTree,t,n,r);else if(d&128)e.suspense.move(t,n,r);else if(d&64)c.move(e,t,n,be);else if(c===L){o(a,t,n);for(let e=0;e<u.length;e++)de(u[e],t,n,r);o(e.anchor,t,n)}else if(c===Cs)S(e,t,n);else if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[ii]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),I(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[ii];a._isLeaving&&a[ii](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},pe=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(dt(),Ti(s,null,n,e,!0),ft()),p==null||e.ctx&&e.ctx!==t||(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Zi(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Ys(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&jr(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,be,r):l&&!l.hasOnce&&(a!==L||d>0&&d&64)?_e(l,t,n,!1,!0):(a===L&&d&384||!i&&u&16)&&_e(c,t,n),r&&me(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&I(()=>{_&&Ys(_,t,e),h&&jr(e,null,t,`unmounted`),v&&(e.el=null)},n)},me=e=>{let{type:t,el:n,anchor:r,transition:i}=e,a=t===L;if(a&&!i){he(n,r);return}if(t===Cs){C(e),i&&!i.persisted&&i.afterLeave&&i.afterLeave();return}let o=a?vi(e):e,c=()=>{a?m(n)&&he(n,r):s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(o&&o.shapeFlag&1&&i&&!i.persisted){let{leave:e,delayLeave:t}=i,n=o.el,r=()=>e(n,c);t?t(n,c,r):r()}else c()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;ss(c),ss(l),r&&se(r),i.stop(),a?(a.flags|=8,pe(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,pe(o,e,t,n)),s&&I(s,t),I(()=>{e.isUnmounted=!0},t)},_e=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)pe(e[o],t,n,r,i)},ve=e=>{if(e.shapeFlag&6)return ve(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Gr];return n?h(n):t},ye=(e,t,n)=>{_r(()=>{e==null?t._vnode&&pe(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e},e&&t._vnode?void 0:e&&e.component?e.component.uid:Qs())},be={p:v,um:pe,m:de,r:me,mt:ae,mc:E,pc:ce,pbc:D,n:ve,o:e},xe,Se;return t&&([xe,Se]=t(be)),{render:ye,hydrate:xe,createApp:vo(ye,xe)}}function ts({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function ns({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function rs(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function is(e,t,n=!1){let r=e.children,i=t.children;if(p(r)&&p(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ks(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&is(t,a)),a.type===Ss&&(a.patchFlag===-1&&(a=i[e]=Ks(a)),a.el=t.el),a.type===R&&!a.el&&(a.el=t.el)}}function as(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function os(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:os(t)}function ss(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function cs(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?cs(t.subTree):null}var ls=e=>e.__isSuspense,us=0,ds={name:`Suspense`,__isSuspense:!0,process(e,t,n,r,i,a,o,s,c,l){if(e==null)ps(t,n,r,i,a,o,s,c,l);else{if(a&&a.deps>0&&!e.suspense.isInFallback&&!a.isHydrating){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}ms(e,t,n,r,i,o,s,c,l)}},hydrate:gs,normalize:_s};function fs(e,t){let n=e.props&&e.props[t];v(n)&&n()}function ps(e,t,n,r,i,a,o,s,c){let{p:l,o:{createElement:u}}=c,d=u(`div`),f=e.suspense=hs(e,i,r,t,d,n,a,o,s,c);l(null,f.pendingBranch=e.ssContent,d,null,r,f,a,o),f.deps>0?(fs(e,`onPending`),fs(e,`onFallback`),l(null,e.ssFallback,t,n,r,null,a,o),bs(f,e.ssFallback)):f.resolve(!1,!0)}function ms(e,t,n,r,i,a,o,s,{p:c,um:l,o:{createElement:u}}){let d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;let f=t.ssContent,p=t.ssFallback,{activeBranch:m,pendingBranch:h,isInFallback:g,isHydrating:_}=d;if(h)d.pendingBranch=f,Ps(h,f)?(d.deps++,c(h,f,_?n:d.hiddenContainer,null,i,d,a,o,s),d.deps--,d.deps<=0?d.resolve():g&&!_&&!d.isFallbackMountPending&&(c(m,p,n,r,i,null,a,o,s),bs(d,p))):(d.pendingId=us++,_?(d.isHydrating=!1,d.activeBranch=h):l(h,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u(`div`),g?(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0?d.resolve():d.isFallbackMountPending||(c(m,p,n,r,i,null,a,o,s),bs(d,p))):m&&Ps(m,f)?(c(m,f,n,r,i,d,a,o,s),d.resolve(!0)):(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0&&d.resolve()));else if(m&&Ps(m,f))c(m,f,n,r,i,d,a,o,s),bs(d,f);else if(fs(t,`onPending`),d.pendingBranch=f,d.pendingId=f.shapeFlag&512?f.component.suspenseId:us++,c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0)d.resolve();else{let{timeout:e,pendingId:t}=d;e>0?setTimeout(()=>{d.pendingId===t&&d.fallback(p)},e):e===0&&d.fallback(p)}}function hs(e,t,n,r,i,a,o,s,c,l,u=!1){let{p:d,m:f,um:p,n:m,o:{parentNode:h,remove:g}}=l,_,v=xs(e);v&&t&&t.pendingBranch&&(_=t.pendingId,t.deps++);let y=e.props?ue(e.props.timeout):void 0,b=a,x={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:i,deps:0,pendingId:us++,timeout:typeof y==`number`?y:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){let{vnode:r,activeBranch:i,pendingBranch:o,pendingId:s,effects:c,parentComponent:l,container:u,isInFallback:d}=x,g=!1;if(x.isHydrating)x.isHydrating=!1;else if(!e){g=i&&o.transition&&o.transition.mode===`out-in`;let e=!1;g&&(i.transition.afterLeave=()=>{s===x.pendingId&&(f(o,u,a===b&&!e?m(i):a,0),pr(c),d&&r.ssFallback&&(r.ssFallback.el=null))}),i&&!x.isFallbackMountPending&&(h(i.el)===u&&(a=m(i),e=!0),p(i,l,x,!0),!g&&d&&r.ssFallback&&I(()=>r.ssFallback.el=null,x)),g||f(o,u,a,0)}x.isFallbackMountPending=!1,bs(x,o),x.pendingBranch=null,x.isInFallback=!1;let y=x.parent,S=!1;for(;y;){if(y.pendingBranch){for(let e=0;e<c.length;e++)y.effects.push(c[e]);S=!0;break}y=y.parent}!S&&!g&&pr(c),x.effects=[],v&&t&&t.pendingBranch&&_===t.pendingId&&(_=void 0,t.deps--,t.deps===0&&!n&&t.resolve()),fs(r,`onResolve`)},fallback(e){if(!x.pendingBranch)return;let{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:a}=x;fs(t,`onFallback`);let o=m(n),l=()=>{if(x.isFallbackMountPending=!1,!x.isInFallback)return;let e=x.vnode.ssFallback;d(null,e,i,o,r,null,a,s,c),bs(x,e)},u=e.transition&&e.transition.mode===`out-in`;u&&(x.isFallbackMountPending=!0,n.transition.afterLeave=l),x.isInFallback=!0,p(n,r,null,!0),u||l()},move(e,t,n){x.activeBranch&&f(x.activeBranch,e,t,n),x.container=e},next(){return x.activeBranch&&m(x.activeBranch)},registerDep(e,t,n,r){let i=!!x.pendingBranch;i&&x.deps++;let a=e.vnode.el;e.asyncDep.catch(t=>{er(t,e,0)}).then(o=>{if(e.isUnmounted||x.isUnmounted||x.pendingId!==e.suspenseId)return;if(ac(),!e.scope.active){i&&--x.deps===0&&x.resolve();return}e.asyncResolved=!0;let{vnode:s}=e;uc(e,o,!1),a&&(s.el=a);let c=!a&&e.subTree.el;t(e,s,h(a||e.subTree.el),a?null:m(e.subTree),x,r,n),c&&(s.placeholder=null,g(c)),No(e,s.el),i&&--x.deps===0&&x.resolve()})},unmount(e,t){x.isUnmounted=!0,x.activeBranch&&p(x.activeBranch,n,e,t),x.pendingBranch&&p(x.pendingBranch,n,e,t)}};return x}function gs(e,t,n,r,i,a,o,s,c){let l=t.suspense=hs(t,r,n,e.parentNode,document.createElement(`div`),null,i,a,o,s,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,a,o);return l.deps===0&&l.resolve(!1,!0),u}function _s(e){let{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=vs(r?n.default:n),e.ssFallback=r?vs(n.fallback):z(R)}function vs(e){let t;if(v(e)){let n=Os&&e._c;n&&(e._d=!1,Es()),e=e(),n&&(e._d=!0,t=Ts,Ds())}return p(e)&&(e=Do(e)),e=Gs(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(t=>t!==e)),e}function ys(e,t){t&&t.pendingBranch?p(e)?t.effects.push(...e):t.effects.push(e):pr(e)}function bs(e,t){e.activeBranch=t;let{vnode:n,parentComponent:r}=e,i=t.el;for(;!i&&t.component;)t=t.component.subTree,i=t.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,No(r,i))}function xs(e){let t=e.props&&e.props.suspensible;return t!=null&&t!==!1}var L=Symbol.for(`v-fgt`),Ss=Symbol.for(`v-txt`),R=Symbol.for(`v-cmt`),Cs=Symbol.for(`v-stc`),ws=[],Ts=null;function Es(e=!1){ws.push(Ts=e?null:[])}function Ds(){ws.pop(),Ts=ws[ws.length-1]||null}var Os=1;function ks(e,t=!1){Os+=e,e<0&&Ts&&t&&(Ts.hasOnce=!0)}function As(e){return e.dynamicChildren=Os>0?Ts||i:null,Ds(),Os>0&&Ts&&Ts.push(e),e}function js(e,t,n,r,i,a){return As(Rs(e,t,n,r,i,a,!0))}function Ms(e,t,n,r,i){return As(z(e,t,n,r,i,!0))}function Ns(e){return e?e.__v_isVNode===!0:!1}function Ps(e,t){return e.type===t.type&&e.key===t.key}function Fs(e){}var Is=({key:e})=>e??null,Ls=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:y(e)||P(e)||v(e)?{i:Cr,r:e,k:t,f:!!n}:e);function Rs(e,t=null,n=null,r=0,i=null,a=e===L?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Is(t),ref:t&&Ls(t),scopeId:wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Cr};return s?(qs(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=y(n)?8:16),Os>0&&!o&&Ts&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ts.push(c),c}var z=zs;function zs(e,t=null,n=null,r=0,i=null,a=!1){if(e&&e!==wa||(e=R),Ns(e)){let r=Vs(e,t,!0);return n&&qs(r,n),Os>0&&!a&&Ts&&(r.shapeFlag&6?Ts[Ts.indexOf(e)]=r:Ts.push(r)),r.patchFlag=-2,r}if(bc(e)&&(e=e.__vccOpts),t){t=Bs(t);let{class:e,style:n}=t;e&&!y(e)&&(t.class=be(e)),x(n)&&(gn(n)&&!p(n)&&(n=l({},n)),t.style=he(n))}let o=y(e)?1:ls(e)?128:Kr(e)?64:x(e)?4:v(e)?2:0;return Rs(e,t,n,r,i,o,a,!0)}function Bs(e){return e?gn(e)||Io(e)?l({},e):e:null}function Vs(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Js(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Is(l),ref:t&&t.ref?n&&a?p(a)?a.concat(Ls(t)):[a,Ls(t)]:Ls(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==L?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vs(e.ssContent),ssFallback:e.ssFallback&&Vs(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&gi(u,c.clone(u)),u}function Hs(e=` `,t=0){return z(Ss,null,e,t)}function Us(e,t){let n=z(Cs,null,e);return n.staticCount=t,n}function Ws(e=``,t=!1){return t?(Es(),Ms(R,null,e)):z(R,null,e)}function Gs(e){return e==null||typeof e==`boolean`?z(R):p(e)?z(L,null,e.slice()):Ns(e)?Ks(e):z(Ss,null,String(e))}function Ks(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vs(e)}function qs(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(p(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),qs(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Io(t)?t._ctx=Cr:r===3&&Cr&&(Cr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(v(t)){if(r&65){qs(e,{default:t});return}t={default:t,_ctx:Cr},n=32}else t=String(t),r&64?(n=16,t=[Hs(t)]):n=8;e.children=t,e.shapeFlag|=n}function Js(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=be([t.class,r.class]));else if(e===`style`)t.style=he([t.style,r.style]);else if(s(e)){let n=t[e],i=r[e];i&&n!==i&&!(p(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!c(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Ys(e,t,n,r=null){$n(e,t,7,[n,r])}var Xs=go(),Zs=0;function Qs(){return Zs}function $s(e,t,n){let i=e.type,a=(t?t.appContext:e.appContext)||Xs,o={uid:Zs++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ue(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ho(i,a),emitsOptions:wo(i,a),emit:null,emitted:null,propsDefaults:r,inheritAttrs:i.inheritAttrs,ctx:r,data:r,props:r,attrs:r,slots:r,refs:r,setupState:r,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=So.bind(null,o),e.ce&&e.ce(o),o}var ec=null,tc=()=>ec||Cr,nc,rc;{let e=fe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};nc=t(`__VUE_INSTANCE_SETTERS__`,e=>ec=e),rc=t(`__VUE_SSR_SETTERS__`,e=>sc=e)}var ic=e=>{let t=ec;return nc(e),e.scope.on(),()=>{e.scope.off(),nc(t)}},ac=()=>{ec&&ec.scope.off(),nc(null)};function oc(e){return e.vnode.shapeFlag&4}var sc=!1;function cc(e,t=!1,n=!1){t&&rc(t);let{props:r,children:i}=e.vnode,a=oc(e);Lo(e,r,a,t),Xo(e,i,n||t);let o=a?lc(e,t):void 0;return t&&rc(!1),o}function lc(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,La);let{setup:r}=n;if(r){dt();let n=e.setupContext=r.length>1?_c(e):null,i=ic(e),a=Qn(r,e,0,[e.props,n]),o=S(a);if(ft(),i(),(o||e.sp)&&!Zi(e)&&xi(e),o){if(a.then(ac,ac),t)return a.then(n=>{rc(!0);try{uc(e,n,t)}finally{rc(!1)}}).catch(t=>{er(t,e,0)});e.asyncDep=a}else uc(e,a,t)}else hc(e,t)}function uc(e,t,n){v(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:x(t)&&(e.setupState=Dn(t)),hc(e,n)}var dc,fc;function pc(e){dc=e,fc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Ra))}}var mc=()=>!dc;function hc(e,t,n){let r=e.type;if(!e.render){if(!t&&dc&&!r.render){let t=r.template||ao(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r,s=l(l({isCustomElement:n,delimiters:a},i),o);r.render=dc(t,s)}}e.render=r.render||a,fc&&fc(e)}{let t=ic(e);dt();try{to(e)}finally{ft(),t()}}}var gc={get(e,t){return St(e,`get`,``),e[t]}};function _c(e){return{attrs:new Proxy(e.attrs,gc),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function vc(e){return e.exposed?e.exposeProxy||=new Proxy(Dn(_n(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Fa)return Fa[n](e)},has(e,t){return t in e||t in Fa}}):e.proxy}function yc(e,t=!0){return v(e)?e.displayName||e.name:e.name||t&&e.__name}function bc(e){return v(e)&&`__vccOpts`in e}var B=(e,t)=>In(e,t,sc);function xc(e,t,n){try{ks(-1);let r=arguments.length;return r===2?x(t)&&!p(t)?Ns(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ns(n)&&(n=[n]),z(e,t,n))}finally{ks(1)}}function Sc(){}function Cc(e,t,n,r){let i=n[r];if(i&&wc(i,e))return i;let a=t();return a.memo=e.slice(),a.cacheIndex=r,n[r]=a}function wc(e,t){let n=e.memo;if(n.length!=t.length)return!1;for(let e=0;e<n.length;e++)if(A(n[e],t[e]))return!1;return Os>0&&Ts&&Ts.push(e),!0}var Tc=`3.5.44`,Ec=a,Dc=Zn,Oc=br,kc=Sr,Ac={createComponentInstance:$s,setupComponent:cc,renderComponentRoot:Eo,setCurrentRenderingInstance:Tr,isVNode:Ns,normalizeVNode:Gs,getComponentPublicInstance:vc,ensureValidVNode:Ma,pushWarningContext:qn,popWarningContext:Jn},jc=t({BaseTransition:()=>di,BaseTransitionPropsValidators:()=>ci,Comment:()=>R,DeprecationTypes:()=>null,EffectScope:()=>Ue,ErrorCodes:()=>Xn,ErrorTypeStrings:()=>Dc,Fragment:()=>L,KeepAlive:()=>ta,ReactiveEffect:()=>Je,Static:()=>Cs,Suspense:()=>ds,Teleport:()=>ti,Text:()=>Ss,TrackOpTypes:()=>Ln,Transition:()=>Gc,TransitionGroup:()=>tu,TriggerOpTypes:()=>Rn,VueElement:()=>Kl,assertNumber:()=>Yn,callWithAsyncErrorHandling:()=>$n,callWithErrorHandling:()=>Qn,camelize:()=>O,capitalize:()=>k,cloneVNode:()=>Vs,compatUtils:()=>null,computed:()=>B,createApp:()=>Hu,createBlock:()=>Ms,createCommentVNode:()=>Ws,createElementBlock:()=>js,createElementVNode:()=>Rs,createHydrationRenderer:()=>$o,createPropsRestProxy:()=>Qa,createRenderer:()=>Qo,createSSRApp:()=>Uu,createSlots:()=>Aa,createStaticVNode:()=>Us,createTextVNode:()=>Hs,createVNode:()=>z,customRef:()=>kn,defineAsyncComponent:()=>Qi,defineComponent:()=>yi,defineCustomElement:()=>Ul,defineEmits:()=>Ba,defineExpose:()=>Va,defineModel:()=>Wa,defineOptions:()=>Ha,defineProps:()=>za,defineSSRCustomElement:()=>Wl,defineSlots:()=>Ua,devtools:()=>Oc,effect:()=>st,effectScope:()=>We,getCurrentInstance:()=>tc,getCurrentScope:()=>Ge,getCurrentWatcher:()=>Hn,getTransitionRawChildren:()=>_i,guardReactiveProps:()=>Bs,h:()=>xc,handleError:()=>er,hasInjectionContext:()=>Pr,hydrate:()=>Vu,hydrateOnIdle:()=>Gi,hydrateOnInteraction:()=>Yi,hydrateOnMediaQuery:()=>Ji,hydrateOnVisible:()=>qi,initCustomFormatter:()=>Sc,initDirectivesForSSR:()=>qu,inject:()=>Nr,isMemoSame:()=>wc,isProxy:()=>gn,isReactive:()=>pn,isReadonly:()=>mn,isRef:()=>P,isRuntimeOnly:()=>mc,isShallow:()=>hn,isVNode:()=>Ns,markRaw:()=>_n,mergeDefaults:()=>Xa,mergeModels:()=>Za,mergeProps:()=>Js,nextTick:()=>lr,nodeOps:()=>zc,normalizeClass:()=>be,normalizeProps:()=>xe,normalizeStyle:()=>he,onActivated:()=>ra,onBeforeMount:()=>da,onBeforeUnmount:()=>ha,onBeforeUpdate:()=>pa,onDeactivated:()=>ia,onErrorCaptured:()=>ba,onMounted:()=>fa,onRenderTracked:()=>ya,onRenderTriggered:()=>va,onScopeDispose:()=>Ke,onServerPrefetch:()=>_a,onUnmounted:()=>ga,onUpdated:()=>ma,onWatcherCleanup:()=>Un,openBlock:()=>Es,patchProp:()=>zl,popScopeId:()=>Dr,provide:()=>Mr,proxyRefs:()=>Dn,pushScopeId:()=>Er,queuePostFlushCb:()=>pr,reactive:()=>cn,readonly:()=>un,ref:()=>F,registerRuntimeCompiler:()=>pc,render:()=>Bu,renderList:()=>ka,renderSlot:()=>ja,resolveComponent:()=>Ca,resolveDirective:()=>Ea,resolveDynamicComponent:()=>Ta,resolveFilter:()=>null,resolveTransitionHooks:()=>pi,setBlockTracking:()=>ks,setDevtoolsHook:()=>kc,setTransitionHooks:()=>gi,shallowReactive:()=>ln,shallowReadonly:()=>dn,shallowRef:()=>bn,ssrContextKey:()=>Fr,ssrUtils:()=>Ac,stop:()=>ct,toDisplayString:()=>ze,toHandlerKey:()=>oe,toHandlers:()=>Na,toRaw:()=>N,toRef:()=>Nn,toRefs:()=>An,toValue:()=>Tn,transformVNodeArgs:()=>Fs,triggerRef:()=>Cn,unref:()=>wn,useAttrs:()=>qa,useCssModule:()=>Yl,useCssVars:()=>pl,useHost:()=>ql,useId:()=>bi,useModel:()=>bo,useSSRContext:()=>Ir,useShadowRoot:()=>Jl,useSlots:()=>Ka,useTemplateRef:()=>Si,useTransitionState:()=>oi,vModelCheckbox:()=>vu,vModelDynamic:()=>Eu,vModelRadio:()=>bu,vModelSelect:()=>xu,vModelText:()=>_u,vShow:()=>ll,version:()=>Tc,warn:()=>Ec,watch:()=>Br,watchEffect:()=>Lr,watchPostEffect:()=>Rr,watchSyncEffect:()=>zr,withAsyncContext:()=>$a,withCtx:()=>kr,withDefaults:()=>Ga,withDirectives:()=>Ar,withKeys:()=>Pu,withMemo:()=>Cc,withModifiers:()=>Mu,withScopeId:()=>Or}),Mc=void 0,Nc=typeof window<`u`&&window.trustedTypes;if(Nc)try{Mc=Nc.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Pc=Mc?e=>Mc.createHTML(e):e=>e,Fc=`http://www.w3.org/2000/svg`,Ic=`http://www.w3.org/1998/Math/MathML`,Lc=typeof document<`u`?document:null,Rc=Lc&&Lc.createElement(`template`),zc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Lc.createElementNS(Fc,e):t===`mathml`?Lc.createElementNS(Ic,e):n?Lc.createElement(e,{is:n}):Lc.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Lc.createTextNode(e),createComment:e=>Lc.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Lc.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Rc.innerHTML=Pc(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Rc.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Bc=`transition`,Vc=`animation`,Hc=Symbol(`_vtc`),Uc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wc=l({},ci,Uc),Gc=(e=>(e.displayName=`Transition`,e.props=Wc,e))((e,{slots:t})=>xc(di,Jc(e),t)),Kc=(e,t=[])=>{p(e)?e.forEach(e=>e(...t)):e&&e(...t)},qc=e=>e?p(e)?e.some(e=>e.length>1):e.length>1:!1;function Jc(e){let t={};for(let n in e)n in Uc||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=o,appearToClass:d=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=Yc(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:ee=b}=t,T=(e,t,n,r)=>{e._enterCancelled=r,Qc(e,t?d:s),Qc(e,t?u:o),n&&n()},E=(e,t)=>{e._isLeaving=!1,Qc(e,f),Qc(e,m),Qc(e,p),t&&t()},te=e=>(t,n)=>{let i=e?w:y,o=()=>T(t,e,n);Kc(i,[t,o]),$c(()=>{Qc(t,e?c:a),Zc(t,e?d:s),qc(i)||tl(t,r,g,o)})};return l(t,{onBeforeEnter(e){Kc(v,[e]),Zc(e,a),Zc(e,o)},onBeforeAppear(e){Kc(C,[e]),Zc(e,c),Zc(e,u)},onEnter:te(!1),onAppear:te(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>E(e,t);Zc(e,f),e._enterCancelled?(Zc(e,p),al(e)):(al(e),Zc(e,p)),$c(()=>{e._isLeaving&&(Qc(e,f),Zc(e,m),qc(x)||tl(e,r,_,n))}),Kc(x,[e,n])},onEnterCancelled(e){T(e,!1,void 0,!0),Kc(b,[e])},onAppearCancelled(e){T(e,!0,void 0,!0),Kc(ee,[e])},onLeaveCancelled(e){E(e),Kc(S,[e])}})}function Yc(e){if(e==null)return null;if(x(e))return[Xc(e.enter),Xc(e.leave)];{let t=Xc(e);return[t,t]}}function Xc(e){return ue(e)}function Zc(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Hc]||(e[Hc]=new Set)).add(t)}function Qc(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Hc];n&&(n.delete(t),n.size||(e[Hc]=void 0))}function $c(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var el=0;function tl(e,t,n,r){let i=e._endId=++el,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=nl(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function nl(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Bc}Delay`),a=r(`${Bc}Duration`),o=rl(i,a),s=r(`${Vc}Delay`),c=r(`${Vc}Duration`),l=rl(s,c),u=null,d=0,f=0;t===Bc?o>0&&(u=Bc,d=o,f=a.length):t===Vc?l>0&&(u=Vc,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Bc:Vc:null,f=u?u===Bc?a.length:c.length:0);let p=u===Bc&&/\b(?:transform|all)(?:,|$)/.test(r(`${Bc}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function rl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>il(t)+il(e[n])))}function il(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function al(e){return(e?e.ownerDocument:document).body.offsetHeight}function ol(e,t,n){let r=e[Hc];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var sl=Symbol(`_vod`),cl=Symbol(`_vsh`),ll={name:`show`,beforeMount(e,{value:t},{transition:n}){e[sl]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):ul(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ul(e,!0),r.enter(e)):r.leave(e,()=>{ul(e,!1)}):ul(e,t))},beforeUnmount(e,{value:t}){ul(e,t)}};function ul(e,t){e.style.display=t?e[sl]:`none`,e[cl]=!t}function dl(){ll.getSSRProps=({value:e})=>{if(!e)return{style:{display:`none`}}}}var fl=Symbol(``);function pl(e){let t=tc();if(!t)return;let n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(e=>hl(e,n))},r=()=>{let r=e(t.proxy);t.ce?hl(t.ce,r):ml(t.subTree,r),n(r)};pa(()=>{pr(r)}),fa(()=>{Br(r,a,{flush:`post`});let e=new MutationObserver(r);e.observe(t.subTree.el.parentNode,{childList:!0}),ga(()=>e.disconnect())})}function ml(e,t){if(e.shapeFlag&128){let n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ml(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)hl(e.el,t);else if(e.type===L)e.children.forEach(e=>ml(e,t));else if(e.type===Cs){let{el:n,anchor:r}=e;for(;n&&(hl(n,t),n!==r);)n=n.nextSibling}}function hl(e,t){if(e.nodeType===1){let n=e.style,r=``;for(let e in t){let i=He(t[e]);n.setProperty(`--${e}`,i),r+=`--${e}: ${i};`}n[fl]=r}}var gl=/(?:^|;)\s*display\s*:/;function _l(e,t,n){let r=e.style,i=y(n),a=!1;if(n&&!i){if(t){if(y(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??yl(r,t,``)}else for(let e in t)n[e]??yl(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?yl(r,i,``):Cl(e,i,!y(t)&&t?t[i]:void 0,o)||yl(r,i,o)}}else if(i){if(t!==n){let e=r[fl];e&&(n+=`;`+e),r.cssText=n,a=gl.test(n)}}else t&&e.removeAttribute(`style`);sl in e&&(i&&t===n||(e[sl]=a?r.display:``),e[cl]&&(r.display=`none`))}var vl=/\s*!important$/;function yl(e,t,n){if(p(n))n.forEach(n=>yl(e,t,n));else if(n??=``,t.startsWith(`--`))vl.test(n)?e.setProperty(t,n.replace(vl,``),`important`):e.setProperty(t,n);else{let r=Sl(e,t);vl.test(n)?e.setProperty(ae(r),n.replace(vl,``),`important`):e[r]=n}}var bl=[`Webkit`,`Moz`,`ms`],xl={};function Sl(e,t){let n=xl[t];if(n)return n;let r=O(t);if(r!==`filter`&&r in e)return xl[t]=r;r=k(r);for(let n=0;n<bl.length;n++){let i=bl[n]+r;if(i in e)return xl[t]=i}return t}function Cl(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&y(r)&&n===r}var wl=`http://www.w3.org/1999/xlink`;function Tl(e,t,n,r,i,a=Ae(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(wl,t.slice(6,t.length)):e.setAttributeNS(wl,t,n):n==null||a&&!je(n)?e.removeAttribute(t):e.setAttribute(t,a?``:b(n)?String(n):n)}function El(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Pc(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);r===i&&`_value`in e||(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=je(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Dl(e,t,n,r){e.addEventListener(t,n,r)}function Ol(e,t,n,r){e.removeEventListener(t,n,r)}var kl=Symbol(`_vei`);function Al(e,t,n,r,i=null){let a=e[kl]||(e[kl]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Nl(t);r?Dl(e,n,a[t]=Ll(r,i),s):o&&(Ol(e,n,o,s),a[t]=void 0)}}var jl=/(Once|Passive|Capture)$/,Ml=/^on:?(?:Once|Passive|Capture)$/;function Nl(e){let t,n;for(;(n=e.match(jl))&&!Ml.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):ae(e.slice(2)),t]}var Pl=0,Fl=Promise.resolve(),Il=()=>Pl||=(Fl.then(()=>Pl=0),Date.now());function Ll(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(p(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&$n(e,t,5,a)}}else $n(r,t,5,[e])};return n.value=e,n.attached=Il(),n}var Rl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zl=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?ol(e,r,o):t===`style`?_l(e,n,r):s(t)?c(t)||Al(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):Bl(e,t,r,o))?(El(e,t,r),e.tagName.includes(`-`)||t!==`value`&&t!==`checked`&&t!==`selected`||Tl(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Vl(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!y(r)))?El(e,O(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Tl(e,t,r,o))};function Bl(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Rl(t)&&v(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Rl(t)&&y(n)?!1:t in e}function Vl(e,t){let n=e._def.props;if(!n)return!1;let r=O(t);return Array.isArray(n)?n.some(e=>O(e)===r):Object.keys(n).some(e=>O(e)===r)}var Hl={};function Ul(e,t,n){let r=yi(e,t);T(r)&&(r=l({},r,t));class i extends Kl{constructor(e){super(r,e,n)}}return i.def=r,i}var Wl=((e,t)=>Ul(e,t,Uu)),Gl=typeof HTMLElement<`u`?HTMLElement:class{},Kl=class e extends Gl{constructor(e,t={},n=Hu){super(),this._def=e,this._props=t,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&n!==Hu?this._root=this.shadowRoot:e.shadowRoot===!1?this._root=this:(this.attachShadow(l({},e.shadowRootOptions,{mode:`open`})),this._root=this.shadowRoot)}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let t=this;for(;t&&=t.assignedSlot||t.parentNode||t.host;)if(t instanceof e){this._parent=t;break}this._instance||(this._resolved?this._mount(this._def):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{if(this._pendingResolve=void 0,this.isConnected)return this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,lr(()=>{this._connected||(this._ob&&=(this._ob.disconnect(),null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&=(this._teleportTargets.clear(),void 0))})}_processMutations(e){for(let t of e)this._setAttr(t.attributeName)}_resolveDef(){if(this._pendingResolve)return this._pendingResolve;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});let e=(e,t=!1)=>{this._resolved=!0,this._pendingResolve=void 0;let{props:n,styles:r}=e,i;if(n&&!p(n))for(let e in n){let t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=ue(this._props[e])),(i||=Object.create(null))[O(e)]=!0)}this._numberProps=i,this._resolveProps(e),this.shadowRoot&&this._applyStyles(r),this._connected&&this._mount(e)},t=this._def.__asyncLoader;if(t)return this._pendingResolve=t().then(t=>{t.configureApp=this._def.configureApp,e(this._def=t,!0)}),this._pendingResolve;e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);let t=this._instance&&this._instance.exposed;if(t)for(let e in t)f(this,e)||Object.defineProperty(this,e,{get:()=>wn(t[e])})}_resolveProps(e){let{props:t}=e,n=p(t)?t:Object.keys(t||{});for(let e of Object.keys(this))e[0]!==`_`&&n.includes(e)&&this._setProp(e,this[e]);for(let e of n.map(O))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t,!0,!this._patching)}})}_setAttr(e){if(e.startsWith(`data-v-`))return;let t=this.hasAttribute(e),n=t?this.getAttribute(e):Hl,r=O(e);t&&this._numberProps&&this._numberProps[r]&&(n=ue(n)),this._setProp(r,n,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,r=!1){if(t!==this._props[e]&&(this._dirty=!0,t===Hl?delete this._props[e]:(this._props[e]=t,e===`key`&&this._app&&(this._app._ceVNode.key=t)),r&&this._instance&&this._update(),n)){let n=this._ob;n&&(this._processMutations(n.takeRecords()),n.disconnect()),t===!0?this.setAttribute(ae(e),``):typeof t==`string`||typeof t==`number`?this.setAttribute(ae(e),t+``):t||this.removeAttribute(ae(e)),n&&n.observe(this,{attributes:!0})}}_update(){let e=this._createVNode();this._app&&(e.appContext=this._app._context),Bu(e,this._root)}_createVNode(){let e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));let t=z(this._def,l(e,this._props));return this._instance||(t.ce=e=>{this._instance=e,e.ce=this,e.isCE=!0;let t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,T(t[0])?l({detail:t},t[0]):{detail:t}))};e.emit=(e,...n)=>{t(e,n),ae(e)!==e&&t(ae(e),n)},this._setParent()}),t}_applyStyles(e,t,n){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}let r=this._nonce,i=this.shadowRoot,a=n?this._getStyleAnchor(n)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(i),o=null;for(let s=e.length-1;s>=0;s--){let c=document.createElement(`style`);r&&c.setAttribute(`nonce`,r),c.textContent=e[s],i.insertBefore(c,o||a),o=c,s===0&&(n||this._styleAnchors.set(this._def,c),t&&this._styleAnchors.set(t,c))}}_getStyleAnchor(e){if(!e)return null;let t=this._styleAnchors.get(e);return t&&t.parentNode===this.shadowRoot?t:(t&&this._styleAnchors.delete(e),null)}_getRootStyleInsertionAnchor(e){for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];if(!(n instanceof HTMLStyleElement))return n}return null}_parseSlots(){let e=this._slots={},t;for(;t=this.firstChild;){let n=t.nodeType===1&&t.getAttribute(`slot`)||`default`;(e[n]||(e[n]=[])).push(t),this.removeChild(t)}}_renderSlots(){let e=this._getSlots(),t=this._instance.type.__scopeId;for(let n=0;n<e.length;n++){let r=e[n],i=r.getAttribute(`name`)||`default`,a=this._slots[i],o=r.parentNode;if(a)for(let e of a){if(t&&e.nodeType===1){let n=t+`-s`,r=document.createTreeWalker(e,1);e.setAttribute(n,``);let i;for(;i=r.nextNode();)i.setAttribute(n,``)}o.insertBefore(e,r)}else for(;r.firstChild;)o.insertBefore(r.firstChild,r);o.removeChild(r)}}_getSlots(){let e=[this];this._teleportTargets&&e.push(...this._teleportTargets);let t=new Set;for(let n of e){let e=n.querySelectorAll(`slot`);for(let n=0;n<e.length;n++)t.add(e[n])}return Array.from(t)}_injectChildStyle(e,t){this._applyStyles(e.styles,e,t)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(e){}};function ql(e){let t=tc();return t&&t.ce||null}function Jl(){let e=ql();return e&&e.shadowRoot}function Yl(e=`$style`){{let t=tc();if(!t)return r;let n=t.type.__cssModules;return n&&n[e]||r}}var Xl=new WeakMap,Zl=new WeakMap,Ql=Symbol(`_moveCb`),$l=Symbol(`_enterCb`),eu=new WeakMap,tu=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:l({},Wc,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=tc(),r=oi(),i,a,o,s,c=()=>(s===void 0&&(s=i.length>0&&uu(i[0].el,n.vnode.el,ru(e))),s);return ma(()=>{if(eu.delete(n),!c()){i=[],o=void 0;return}let t=ru(e);i.forEach(nu);let r=o&&lu(o,n.vnode.el);o=void 0,i.forEach(e=>iu(e,r));let a=i.filter(au);al(n.vnode.el),a.forEach(e=>{let n=e.el,r=n.style;Zc(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[Ql]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[Ql]=null,Qc(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let l=N(e),u=Jc(l),d=l.tag||L;if(i=[],s=void 0,a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&!t.el[cl]&&(i.push(t),gi(t,pi(t,u,r,n)),Xl.set(t,ou(t.el)))}a=t.default?_i(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&gi(t,pi(t,u,r,n))}return i.length&&(o=su(n),eu.set(n,c)),z(d,null,a)}}});function nu(e){let t=e.el;t[Ql]&&t[Ql](),t[$l]&&t[$l]()}function ru(e){return e.moveClass||`${e.name||`v`}-move`}function iu(e,t){Zl.set(e,ou(e.el,t))}function au(e){let t=Xl.get(e),n=Zl.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),Number.isFinite(o)&&o!==0||(o=1),Number.isFinite(s)&&s!==0||(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function ou(e,t){let n=e.getBoundingClientRect();return{left:n.left-(t?t.left:0),top:n.top-(t?t.top:0)}}function su(e){let t;for(let n=e.parent;n;n=n.parent){let r=eu.get(n);if(r){let i=cu(n.vnode.el,e.vnode.el);i&&(t||=[]).push(l(ou(i),{item:i,willMove:r}))}}return t}function cu(e,t){let n=e.nodeType===1?e:e.parentNode;for(;t&&t.parentNode!==n;)t=t.parentNode;if(t&&t.nodeType===1)return t}function lu(e,t){let n=e.find(e=>e.willMove()&&e.item.contains(t));return n&&ou(n.item,n)}function uu(e,t,n){let r=e.cloneNode(),i=e[Hc];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=nl(r);return a.removeChild(r),o}var du=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return p(t)?e=>se(t,e):t};function fu(e){e.target.composing=!0}function pu(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var mu=Symbol(`_assign`),hu=Symbol(`_initialValue`);function gu(e,t,n){return t&&(e=e.trim()),n&&(e=le(e)),e}var _u={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[hu]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[hu]=e.defaultValue.replace(/\r\n?/g,`
`))),e[mu]=du(i);let a=r||i.props&&i.props.type===`number`;Dl(e,t?`change`:`input`,t=>{t.target.composing||e[mu](gu(e.value,n,a))}),(n||a)&&Dl(e,`change`,()=>{e.value=gu(e.value,n,a)}),t||(Dl(e,`compositionstart`,fu),Dl(e,`compositionend`,pu),Dl(e,`change`,pu))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[hu];delete e[hu],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[mu](gu(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[mu]=du(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?le(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},vu={deep:!0,created(e,t,n){e[mu]=du(n),Dl(e,`change`,()=>{let t=e._modelValue,n=wu(e),r=e.checked,i=e[mu];if(p(t)){let e=Le(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(h(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Tu(e,r))})},mounted:yu,beforeUpdate(e,t,n){e[mu]=du(n),yu(e,t,n)}};function yu(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(p(t))i=Le(t,r.props.value)>-1;else if(h(t))i=t.has(r.props.value);else{if(t===n)return;i=Ie(t,Tu(e,!0))}e.checked!==i&&(e.checked=i)}var bu={created(e,{value:t},n){e.checked=Ie(t,n.props.value),e[mu]=du(n),Dl(e,`change`,()=>{e[mu](wu(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[mu]=du(r),t!==n&&(e.checked=Ie(t,r.props.value))}},xu={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,Dl(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?le(wu(e)):wu(e)),r=e.multiple,i=r?h(e._modelValue)?new Set(t):t:t[0],a=e._pendingValue=[r,r?p(i)?t.slice():t:i];try{e[mu](i)}finally{lr(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[mu]=du(r)},mounted(e,{value:t}){Cu(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[mu]=du(n)},updated(e,{value:t}){let n=e._pendingValue;e._pendingValue=void 0,n&&n[0]===e.multiple&&Su(t,n[1],n[0])||Cu(e,t)}};function Su(e,t,n){if(!n||p(e))return Ie(e,t);if(h(e)){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}return!1}function Cu(e,t){let n=e.multiple,r=p(t);if(!n||r||h(t)){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=wu(a);if(n){if(r){let e=typeof o;a.selected=e===`string`||e===`number`?t.some(e=>String(e)===String(o)):Le(t,o)>-1}else a.selected=t.has(o)}else if(Ie(wu(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function wu(e){return`_value`in e?e._value:e.value}function Tu(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Eu={created(e,t,n){Ou(e,t,n,null,`created`)},mounted(e,t,n){Ou(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){Ou(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){Ou(e,t,n,r,`updated`)}};function Du(e,t){switch(e){case`SELECT`:return xu;case`TEXTAREA`:return _u;default:switch(t){case`checkbox`:return vu;case`radio`:return bu;default:return _u}}}function Ou(e,t,n,r,i){let a=Du(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}function ku(){_u.getSSRProps=({value:e})=>({value:e}),bu.getSSRProps=({value:e},t)=>{if(t.props&&Ie(t.props.value,e))return{checked:!0}},vu.getSSRProps=({value:e},t)=>{if(p(e)){if(t.props&&Le(e,t.props.value)>-1)return{checked:!0}}else if(h(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Eu.getSSRProps=(e,t)=>{if(typeof t.type!=`string`)return;let n=Du(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}var Au=[`ctrl`,`shift`,`alt`,`meta`],ju={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Au.some(n=>e[`${n}Key`]&&!t.includes(n))},Mu=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=ju[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Nu={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Pu=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=ae(n.key);if(t.some(e=>e===r||Nu[e]===r))return e(n)}))},Fu=l({patchProp:zl},zc),Iu,Lu=!1;function Ru(){return Iu||=Qo(Fu)}function zu(){return Iu=Lu?Iu:$o(Fu),Lu=!0,Iu}var Bu=((...e)=>{Ru().render(...e)}),Vu=((...e)=>{zu().hydrate(...e)}),Hu=((...e)=>{let t=Ru().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Gu(e);if(!r)return;let i=t._component;v(i)||i.render||i.template||(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Wu(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t}),Uu=((...e)=>{let t=zu().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=Gu(e);if(t)return n(t,!0,Wu(t))},t});function Wu(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Gu(e){return y(e)?document.querySelector(e):e}var Ku=!1,qu=()=>{Ku||(Ku=!0,ku(),dl())},Ju=Symbol(``),Yu=Symbol(``),Xu=Symbol(``),Zu=Symbol(``),Qu=Symbol(``),$u=Symbol(``),ed=Symbol(``),td=Symbol(``),nd=Symbol(``),rd=Symbol(``),id=Symbol(``),ad=Symbol(``),od=Symbol(``),sd=Symbol(``),cd=Symbol(``),ld=Symbol(``),ud=Symbol(``),dd=Symbol(``),fd=Symbol(``),pd=Symbol(``),md=Symbol(``),hd=Symbol(``),gd=Symbol(``),_d=Symbol(``),vd=Symbol(``),yd=Symbol(``),bd=Symbol(``),xd=Symbol(``),Sd=Symbol(``),Cd=Symbol(``),wd=Symbol(``),Td=Symbol(``),Ed=Symbol(``),Dd=Symbol(``),Od=Symbol(``),kd=Symbol(``),Ad=Symbol(``),jd=Symbol(``),Md=Symbol(``),Nd={[Ju]:`Fragment`,[Yu]:`Teleport`,[Xu]:`Suspense`,[Zu]:`KeepAlive`,[Qu]:`BaseTransition`,[$u]:`openBlock`,[ed]:`createBlock`,[td]:`createElementBlock`,[nd]:`createVNode`,[rd]:`createElementVNode`,[id]:`createCommentVNode`,[ad]:`createTextVNode`,[od]:`createStaticVNode`,[sd]:`resolveComponent`,[cd]:`resolveDynamicComponent`,[ld]:`resolveDirective`,[ud]:`resolveFilter`,[dd]:`withDirectives`,[fd]:`renderList`,[pd]:`renderSlot`,[md]:`createSlots`,[hd]:`toDisplayString`,[gd]:`mergeProps`,[_d]:`normalizeClass`,[vd]:`normalizeStyle`,[yd]:`normalizeProps`,[bd]:`guardReactiveProps`,[xd]:`toHandlers`,[Sd]:`camelize`,[Cd]:`capitalize`,[wd]:`toHandlerKey`,[Td]:`setBlockTracking`,[Ed]:`pushScopeId`,[Dd]:`popScopeId`,[Od]:`withCtx`,[kd]:`unref`,[Ad]:`isRef`,[jd]:`withMemo`,[Md]:`isMemoSame`};function Pd(e){Object.getOwnPropertySymbols(e).forEach(t=>{Nd[t]=e[t]})}var Fd={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:``};function Id(e,t=``){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:Fd}}function Ld(e,t,n,r,i,a,o,s=!1,c=!1,l=!1,u=Fd){return e&&(s?(e.helper($u),e.helper(Kd(e.inSSR,l))):e.helper(Gd(e.inSSR,l)),o&&e.helper(dd)),{type:13,tag:t,props:n,children:r,patchFlag:i,dynamicProps:a,directives:o,isBlock:s,disableTracking:c,isComponent:l,loc:u}}function Rd(e,t=Fd){return{type:17,loc:t,elements:e}}function zd(e,t=Fd){return{type:15,loc:t,properties:e}}function V(e,t){return{type:16,loc:Fd,key:y(e)?H(e,!0):e,value:t}}function H(e,t=!1,n=Fd,r=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:r}}function Bd(e,t=Fd){return{type:8,loc:t,children:e}}function U(e,t=[],n=Fd){return{type:14,loc:n,callee:e,arguments:t}}function Vd(e,t=void 0,n=!1,r=!1,i=Fd){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:i}}function Hd(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:Fd}}function Ud(e,t,n=!1,r=!1){return{type:20,index:e,value:t,needPauseTracking:n,inVOnce:r,needArraySpread:!1,loc:Fd}}function Wd(e){return{type:21,body:e,loc:Fd}}function Gd(e,t){return e||t?nd:rd}function Kd(e,t){return e||t?ed:td}function qd(e,{helper:t,removeHelper:n,inSSR:r}){e.isBlock||(e.isBlock=!0,n(Gd(r,e.isComponent)),t($u),t(Kd(r,e.isComponent)))}var Jd=new Uint8Array([123,123]),Yd=new Uint8Array([125,125]);function Xd(e){return e>=97&&e<=122||e>=65&&e<=90}function Zd(e){return e===32||e===10||e===9||e===12||e===13}function Qd(e){return e===47||e===62||Zd(e)}function $d(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}var ef={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])},tf=class{constructor(e,t){this.stack=e,this.cbs=t,this.state=1,this.buffer=``,this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Jd,this.delimiterClose=Yd,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer=``,this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Jd,this.delimiterClose=Yd}getPos(e){let t=1,n=e+1,r=this.newlines.length,i=-1;if(r>100){let t=-1,n=r;for(;t+1<n;){let r=t+n>>>1;this.newlines[r]<e?t=r:n=r}i=t}else for(let t=r-1;t>=0;t--)if(e>this.newlines[t]){i=t;break}return i>=0&&(t=i+2,n=e-this.newlines[i]),{column:n,line:t,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex]){if(this.delimiterIndex===this.delimiterOpen.length-1){let e=this.index+1-this.delimiterOpen.length;e>this.sectionStart&&this.cbs.ontext(this.sectionStart,e),this.state=3,this.sectionStart=e}else this.delimiterIndex++}else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.state=this.inRCDATA?32:1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){let t=this.sequenceIndex===this.currentSequence.length;if(!(t?Qd(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!t){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||Zd(e)){let t=this.index-this.currentSequence.length;if(this.sectionStart<t){let e=this.index;this.index=t,this.cbs.ontext(this.sectionStart,t),this.index=e}this.sectionStart=t+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===ef.TitleEnd||this.currentSequence===ef.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=Number(e===60)}stateCDATASequence(e){e===ef.Cdata[this.sequenceIndex]?++this.sequenceIndex===ef.Cdata.length&&(this.state=28,this.currentSequence=ef.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){let t=this.buffer.charCodeAt(this.index);if(t===10&&this.newlines.push(this.index),t===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===ef.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,t){this.enterRCDATA(e,t),this.state=31}enterRCDATA(e,t){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=t}stateBeforeTagName(e){e===33?(this.state=22,this.sectionStart=this.index+1):e===63?(this.state=24,this.sectionStart=this.index+1):Xd(e)?(this.sectionStart=this.index,this.state=this.mode===0?6:this.inSFCRoot?34:this.inXML?6:e===116?30:e===115?29:6):e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Qd(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Qd(e)){let t=this.buffer.slice(this.sectionStart,this.index);t!==`template`&&this.enterRCDATA($d(`</`+t),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){Zd(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Xd(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||Zd(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.state=this.inRCDATA?32:1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):Zd(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):Zd(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Qd(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Qd(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Qd(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Qd(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Qd(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):Zd(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):Zd(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,t){(e===t||this.fastForwardTo(t))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(t===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){Zd(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=ef.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===ef.ScriptEnd[3]?this.startSpecial(ef.ScriptEnd,4):e===ef.StyleEnd[3]?this.startSpecial(ef.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===ef.TitleEnd[3]?this.startSpecial(ef.TitleEnd,4):e===ef.TextareaEnd[3]?this.startSpecial(ef.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){let e=this.buffer.charCodeAt(this.index);switch(e===10&&this.state!==33&&this.newlines.push(this.index),this.state){case 1:this.stateText(e);break;case 2:this.stateInterpolationOpen(e);break;case 3:this.stateInterpolation(e);break;case 4:this.stateInterpolationClose(e);break;case 31:this.stateSpecialStartSequence(e);break;case 32:this.stateInRCDATA(e);break;case 26:this.stateCDATASequence(e);break;case 19:this.stateInAttrValueDoubleQuotes(e);break;case 12:this.stateInAttrName(e);break;case 13:this.stateInDirName(e);break;case 14:this.stateInDirArg(e);break;case 15:this.stateInDynamicDirArg(e);break;case 16:this.stateInDirModifier(e);break;case 28:this.stateInCommentLike(e);break;case 27:this.stateInSpecialComment(e);break;case 11:this.stateBeforeAttrName(e);break;case 6:this.stateInTagName(e);break;case 34:this.stateInSFCRootTagName(e);break;case 9:this.stateInClosingTagName(e);break;case 5:this.stateBeforeTagName(e);break;case 17:this.stateAfterAttrName(e);break;case 20:this.stateInAttrValueSingleQuotes(e);break;case 18:this.stateBeforeAttrValue(e);break;case 8:this.stateBeforeClosingTagName(e);break;case 10:this.stateAfterClosingTagName(e);break;case 29:this.stateBeforeSpecialS(e);break;case 30:this.stateBeforeSpecialT(e);break;case 21:this.stateInAttrValueNoQuotes(e);break;case 7:this.stateInSelfClosingTag(e);break;case 23:this.stateInDeclaration(e);break;case 22:this.stateBeforeDeclaration(e);break;case 25:this.stateBeforeComment(e);break;case 24:this.stateInProcessingInstruction(e);break;case 33:this.stateInEntity()}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){let e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===ef.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,t){}};function nf(e,{compatConfig:t}){let n=t&&t[e];return e===`MODE`?n||3:n}function rf(e,t){let n=nf(`MODE`,t),r=nf(e,t);return n===3?r===!0:r!==!1}function af(e,t,n,...r){return rf(e,t)}function of(e){throw e}function sf(e){}function W(e,t,n,r){let i=`https://vuejs.org/error-reference/#compiler-${e}`,a=SyntaxError(String(i));return a.code=e,a.loc=t,a}var cf=e=>e.type===4&&e.isStatic;function lf(e){switch(e){case`Teleport`:case`teleport`:return Yu;case`Suspense`:case`suspense`:return Xu;case`KeepAlive`:case`keep-alive`:return Zu;case`BaseTransition`:case`base-transition`:return Qu}}var uf=/^$|^\d|[^\$\w\xA0-\uFFFF]/,df=e=>!uf.test(e),ff=/[A-Za-z_$\xA0-\uFFFF]/,pf=/[\.\?\w$\xA0-\uFFFF]/,mf=/\s+[.[]\s*|\s*[.[]\s+/g,hf=e=>e.type===4?e.content:e.loc.source,gf=e=>{let t=hf(e).trim().replace(mf,e=>e.trim()),n=0,r=[],i=0,a=0,o=null;for(let e=0;e<t.length;e++){let s=t.charAt(e);switch(n){case 0:if(s===`[`)r.push(n),n=1,i++;else if(s===`(`)r.push(n),n=2,a++;else if(!(e===0?ff:pf).test(s))return!1;break;case 1:s===`'`||s===`"`||s==="`"?(r.push(n),n=3,o=s):s===`[`?i++:s===`]`&&(--i||(n=r.pop()));break;case 2:if(s===`'`||s===`"`||s==="`")r.push(n),n=3,o=s;else if(s===`(`)a++;else if(s===`)`){if(e===t.length-1)return!1;--a||(n=r.pop())}break;case 3:s===o&&(n=r.pop(),o=null)}}return!i&&!a},_f=/^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,vf=e=>_f.test(hf(e));function yf(e,t,n=!1){for(let r=0;r<e.props.length;r++){let i=e.props[r];if(i.type===7&&(n||i.exp)&&(y(t)?i.name===t:t.test(i.name)))return i}}function bf(e,t,n=!1,r=!1){for(let i=0;i<e.props.length;i++){let a=e.props[i];if(a.type===6){if(n)continue;if(a.name===t&&(a.value||r))return a}else if(a.name===`bind`&&(a.exp||r)&&xf(a.arg,t))return a}}function xf(e,t){return!!(e&&cf(e)&&e.content===t)}function Sf(e){return e.props.some(e=>e.type===7&&e.name===`bind`&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function Cf(e){return e.type===5||e.type===2}function wf(e){return e.type===7&&e.name===`pre`}function Tf(e){return e.type===7&&e.name===`slot`}function Ef(e){return e.type===1&&e.tagType===3}function Df(e){return e.type===1&&e.tagType===2}var Of=new Set([yd,bd]);function kf(e,t=[]){if(e&&!y(e)&&e.type===14){let n=e.callee;if(!y(n)&&Of.has(n))return kf(e.arguments[0],t.concat(e))}return[e,t]}function Af(e,t,n){if(e.type!==13&&jf(e,t))return;let r,i=e.type===13?e.props:e.arguments[2],a=[],o;if(i&&!y(i)&&i.type===14){let e=kf(i);i=e[0],a=e[1],o=a[a.length-1]}if(i==null||y(i))r=zd([t]);else if(i.type===14){let e=i.arguments[0];!y(e)&&e.type===15?Mf(t,e)||e.properties.unshift(t):i.callee===xd?r=U(n.helper(gd),[zd([t]),i]):i.arguments.unshift(zd([t])),!r&&(r=i)}else i.type===15?(Mf(t,i)||i.properties.unshift(t),r=i):(r=U(n.helper(gd),[zd([t]),i]),o&&o.callee===bd&&(o=a[a.length-2]));e.type===13?o?o.arguments[0]=r:e.props=r:o?o.arguments[0]=r:e.arguments[2]=r}function jf(e,t){var n,r,i;if(t.key.type!==4||t.key.content!==`key`)return!1;let a=e.arguments[2];if(a&&!y(a)){let[e]=kf(a);if(e&&!y(e)&&e.type===15&&Mf(t,e))return!0}return(n=e.arguments)[2]||(n[2]=`{}`),(r=e.arguments)[3]||(r[3]=`undefined`),(i=e.arguments)[4]||(i[4]=`undefined`),e.arguments[5]=t.value,!0}function Mf(e,t){let n=!1;if(e.key.type===4){let r=e.key.content;n=t.properties.some(e=>e.key.type===4&&e.key.content===r)}return n}function Nf(e,t){return`_${t}_${e.replace(/[^\w]/g,(t,n)=>t===`-`?`_`:e.charCodeAt(n).toString())}`}function Pf(e){return e.type===14&&e.callee===jd?e.arguments[1].returns:e}var Ff=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;function If(e){for(let t=0;t<e.length;t++)if(!Zd(e.charCodeAt(t)))return!1;return!0}function Lf(e){return e.type===2&&If(e.content)||e.type===12&&Lf(e.content)}function Rf(e){return e.type===3||Lf(e)}var zf={parseMode:`base`,ns:0,delimiters:[`{{`,`}}`],getNamespace:()=>0,isVoidTag:o,isPreTag:o,isIgnoreNewlineTag:o,isCustomElement:o,onError:of,onWarn:sf,comments:!1,prefixIdentifiers:!1},G=zf,Bf=null,Vf=``,Hf=null,K=null,Uf=``,Wf=-1,Gf=-1,Kf=0,qf=!1,Jf=null,q=[],J=new tf(q,{onerr:_p,ontext(e,t){ep(Qf(e,t),e,t)},ontextentity(e,t,n){ep(e,t,n)},oninterpolation(e,t){if(qf)return ep(Qf(e,t),e,t);let n=e+J.delimiterOpen.length,r=t-J.delimiterClose.length;for(;Zd(Vf.charCodeAt(n));)n++;for(;Zd(Vf.charCodeAt(r-1));)r--;let i=Qf(n,r);i.includes(`&`)&&(i=G.decodeEntities(i,!1)),fp({type:5,content:gp(i,!1,Y(n,r)),loc:Y(e,t)})},onopentagname(e,t){let n=Qf(e,t);Hf={type:1,tag:n,ns:G.getNamespace(n,q[0],G.ns),tagType:0,props:[],children:[],loc:Y(e-1,t),codegenNode:void 0}},onopentagend(e){$f(e)},onclosetag(e,t){let n=Qf(e,t);if(!G.isVoidTag(n)){let r=!1;for(let e=0;e<q.length;e++)if(q[e].tag.toLowerCase()===n.toLowerCase()){r=!0,e>0&&_p(24,q[0].loc.start.offset);for(let n=0;n<=e;n++)tp(q.shift(),t,n<e);break}r||_p(23,rp(e,60))}},onselfclosingtag(e){let t=Hf.tag;Hf.isSelfClosing=!0,$f(e),q[0]&&q[0].tag===t&&tp(q.shift(),e)},onattribname(e,t){K={type:6,name:Qf(e,t),nameLoc:Y(e,t),value:void 0,loc:Y(e)}},ondirname(e,t){let n=Qf(e,t),r=n===`.`||n===`:`?`bind`:n===`@`?`on`:n===`#`?`slot`:n.slice(2);if(!qf&&r===``&&_p(26,e),qf||r===``)K={type:6,name:n,nameLoc:Y(e,t),value:void 0,loc:Y(e)};else if(K={type:7,name:r,rawName:n,exp:void 0,arg:void 0,modifiers:n===`.`?[H(`prop`)]:[],loc:Y(e)},r===`pre`){qf=J.inVPre=!0,Jf=Hf;let e=Hf.props;for(let t=0;t<e.length;t++)e[t].type===7&&(e[t]=hp(e[t]))}},ondirarg(e,t){if(e===t)return;let n=Qf(e,t);if(qf&&!wf(K))K.name+=n,mp(K.nameLoc,t);else{let r=n[0]!==`[`;K.arg=gp(r?n:n.slice(1,-1),r,Y(e,t),r?3:0)}},ondirmodifier(e,t){let n=Qf(e,t);if(qf&&!wf(K))K.name+=`.`+n,mp(K.nameLoc,t);else if(K.name===`slot`){let e=K.arg;e&&(e.content+=`.`+n,mp(e.loc,t))}else{let r=H(n,!0,Y(e,t));K.modifiers.push(r)}},onattribdata(e,t){Uf+=Qf(e,t),Wf<0&&(Wf=e),Gf=t},onattribentity(e,t,n){Uf+=e,Wf<0&&(Wf=t),Gf=n},onattribnameend(e){let t=K.loc.start.offset,n=Qf(t,e);K.type===7&&(K.rawName=n),Hf.props.some(e=>(e.type===7?e.rawName:e.name)===n)&&_p(2,t)},onattribend(e,t){if(Hf&&K){if(mp(K.loc,t),e!==0){if(Uf.includes(`&`)&&(Uf=G.decodeEntities(Uf,!0)),K.type===6)K.name===`class`&&(Uf=dp(Uf).trim()),e===1&&!Uf&&_p(13,t),K.value={type:2,content:Uf,loc:e===1?Y(Wf,Gf):Y(Wf-1,Gf+1)},J.inSFCRoot&&Hf.tag===`template`&&K.name===`lang`&&Uf&&Uf!==`html`&&J.enterRCDATA($d(`</template`),0);else{K.exp=gp(Uf,!1,Y(Wf,Gf),0,0),K.name===`for`&&(K.forParseResult=Zf(K.exp));let e=-1;K.name===`bind`&&(e=K.modifiers.findIndex(e=>e.content===`sync`))>-1&&af(`COMPILER_V_BIND_SYNC`,G,K.loc,K.arg.loc.source)&&(K.name=`model`,K.modifiers.splice(e,1))}}(K.type!==7||K.name!==`pre`)&&Hf.props.push(K)}Uf=``,Wf=Gf=-1},oncomment(e,t){G.comments&&fp({type:3,content:Qf(e,t),loc:Y(e-4,t+3)})},onend(){let e=Vf.length;for(let t=0;t<q.length;t++)tp(q[t],e-1),_p(24,q[t].loc.start.offset)},oncdata(e,t){(q[0]?q[0].ns:G.ns)===0?_p(1,e-9):ep(Qf(e,t),e,t)},onprocessinginstruction(e){(q[0]?q[0].ns:G.ns)===0&&_p(21,e-1)}}),Yf=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Xf=/^\(|\)$/g;function Zf(e){let t=e.loc,n=e.content,r=n.match(Ff);if(!r)return;let[,i,a]=r,o=(e,n,r=!1)=>{let i=t.start.offset+n;return gp(e,!1,Y(i,i+e.length),0,+!!r)},s={source:o(a.trim(),n.indexOf(a,i.length)),value:void 0,key:void 0,index:void 0,finalized:!1},c=i.trim().replace(Xf,``).trim(),l=i.indexOf(c),u=c.match(Yf);if(u){c=c.replace(Yf,``).trim();let e=u[1].trim(),t;if(e&&(t=n.indexOf(e,l+c.length),s.key=o(e,t,!0)),u[2]){let r=u[2].trim();r&&(s.index=o(r,n.indexOf(r,s.key?t+e.length:l+c.length),!0))}}return c&&(s.value=o(c,l,!0)),s}function Qf(e,t){return Vf.slice(e,t)}function $f(e){J.inSFCRoot&&(Hf.innerLoc=Y(e+1,e+1)),fp(Hf);let{tag:t,ns:n}=Hf;n===0&&G.isPreTag(t)&&Kf++,G.isVoidTag(t)?tp(Hf,e):(q.unshift(Hf),(n===1||n===2)&&(J.inXML=!0)),Hf=null}function ep(e,t,n){{let t=q[0]&&q[0].tag;t!==`script`&&t!==`style`&&e.includes(`&`)&&(e=G.decodeEntities(e,!1))}let r=q[0]||Bf,i=r.children[r.children.length-1];i&&i.type===2?(i.content+=e,mp(i.loc,n)):r.children.push({type:2,content:e,loc:Y(t,n)})}function tp(e,t,n=!1){n?mp(e.loc,rp(t,60)):mp(e.loc,np(t,62)+1),J.inSFCRoot&&(e.children.length?e.innerLoc.end=l({},e.children[e.children.length-1].loc.end):e.innerLoc.end=l({},e.innerLoc.start),e.innerLoc.source=Qf(e.innerLoc.start.offset,e.innerLoc.end.offset));let{tag:r,ns:i,children:a}=e;if(qf||(r===`slot`?e.tagType=2:ap(e)?e.tagType=3:op(e)&&(e.tagType=1)),J.inRCDATA||(e.children=lp(a)),i===0&&G.isIgnoreNewlineTag(r)){let e=a[0];e&&e.type===2&&(e.content=e.content.replace(/^\r?\n/,``))}i===0&&G.isPreTag(r)&&Kf--,Jf===e&&(qf=J.inVPre=!1,Jf=null),J.inXML&&(q[0]?q[0].ns:G.ns)===0&&(J.inXML=!1);{let t=e.props;if(!J.inSFCRoot&&rf(`COMPILER_NATIVE_TEMPLATE`,G)&&e.tag===`template`&&!ap(e)){let t=q[0]||Bf,n=t.children.indexOf(e);t.children.splice(n,1,...e.children)}let n=t.find(e=>e.type===6&&e.name===`inline-template`);n&&af(`COMPILER_INLINE_TEMPLATE`,G,n.loc)&&e.children.length&&(n.value={type:2,content:Qf(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:n.loc})}}function np(e,t){let n=e;for(;Vf.charCodeAt(n)!==t&&n<Vf.length-1;)n++;return n}function rp(e,t){let n=e;for(;Vf.charCodeAt(n)!==t&&n>=0;)n--;return n}var ip=new Set([`if`,`else`,`else-if`,`for`,`slot`]);function ap({tag:e,props:t}){if(e===`template`){for(let e=0;e<t.length;e++)if(t[e].type===7&&ip.has(t[e].name))return!0}return!1}function op({tag:e,props:t}){if(G.isCustomElement(e))return!1;if(e===`component`||sp(e.charCodeAt(0))||lf(e)||G.isBuiltInComponent&&G.isBuiltInComponent(e)||G.isNativeTag&&!G.isNativeTag(e))return!0;for(let e=0;e<t.length;e++){let n=t[e];if(n.type===6){if(n.name===`is`&&n.value&&(n.value.content.startsWith(`vue:`)||af(`COMPILER_IS_ON_ELEMENT`,G,n.loc)))return!0}else if(n.name===`bind`&&xf(n.arg,`is`)&&af(`COMPILER_IS_ON_ELEMENT`,G,n.loc))return!0}return!1}function sp(e){return e>64&&e<91}var cp=/\r\n/g;function lp(e){let t=G.whitespace!==`preserve`,n=!1;for(let r=0;r<e.length;r++){let i=e[r];if(i.type===2){if(Kf)i.content=i.content.replace(cp,`
`);else if(If(i.content)){let a=e[r-1]&&e[r-1].type,o=e[r+1]&&e[r+1].type;!a||!o||t&&(a===3&&(o===3||o===1)||a===1&&(o===3||o===1&&up(i.content)))?(n=!0,e[r]=null):i.content=` `}else t&&(i.content=dp(i.content))}}return n?e.filter(Boolean):e}function up(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n===10||n===13)return!0}return!1}function dp(e){let t=``,n=!1;for(let r=0;r<e.length;r++)Zd(e.charCodeAt(r))?n||=(t+=` `,!0):(t+=e[r],n=!1);return t}function fp(e){(q[0]||Bf).children.push(e)}function Y(e,t){return{start:J.getPos(e),end:t==null?t:J.getPos(t),source:t==null?t:Qf(e,t)}}function pp(e){return Y(e.start.offset,e.end.offset)}function mp(e,t){e.end=J.getPos(t),e.source=Qf(e.start.offset,t)}function hp(e){let t={type:6,name:e.rawName,nameLoc:Y(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){let n=e.exp.loc;n.end.offset<e.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),t.value={type:2,content:e.exp.content,loc:n}}return t}function gp(e,t=!1,n,r=0,i=0){return H(e,t,n,r)}function _p(e,t,n){G.onError(W(e,Y(t,t),void 0,n))}function vp(){J.reset(),Hf=null,K=null,Uf=``,Wf=-1,Gf=-1,q.length=0}function yp(e,t){if(vp(),Vf=e,G=l({},zf),t){let e;for(e in t)t[e]!=null&&(G[e]=t[e])}J.mode=G.parseMode===`html`?1:G.parseMode===`sfc`?2:0,J.inXML=G.ns===1||G.ns===2;let n=t&&t.delimiters;n&&(J.delimiterOpen=$d(n[0]),J.delimiterClose=$d(n[1]));let r=Bf=Id([],e);return J.parse(Vf),r.loc=Y(0,e.length),r.children=lp(r.children),Bf=null,r}function bp(e,t){Sp(e,void 0,t,!!xp(e))}function xp(e){let t=e.children.filter(e=>e.type!==3);return t.length===1&&t[0].type===1&&!Df(t[0])?t[0]:null}function Sp(e,t,n,r=!1,i=!1){let{children:a}=e,o=[];for(let t=0;t<a.length;t++){let s=a[t];if(s.type===1&&s.tagType===0){let e=r?0:Cp(s,n);if(e>0){if(e>=2){s.codegenNode.patchFlag=-1,o.push(s);continue}}else{let e=s.codegenNode;if(e.type===13){let t=e.patchFlag;if((t===void 0||t===512||t===1)&&Ep(s,n)>=2){let t=Dp(s);t&&(e.props=n.hoist(t))}e.dynamicProps&&=n.hoist(e.dynamicProps)}}}else if(s.type===12&&(r?0:Cp(s,n))>=2){s.codegenNode.type===14&&s.codegenNode.arguments.length>0&&s.codegenNode.arguments.push(`-1`),o.push(s);continue}if(s.type===1){let t=s.tagType===1;t&&n.scopes.vSlot++,Sp(s,e,n,!1,i),t&&n.scopes.vSlot--}else if(s.type===11)Sp(s,e,n,s.children.length===1,!0);else if(s.type===9)for(let t=0;t<s.branches.length;t++)Sp(s.branches[t],e,n,s.branches[t].children.length===1,i)}let s=!1;if(o.length===a.length&&e.type===1){if(e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&p(e.codegenNode.children))e.codegenNode.children=c(Rd(e.codegenNode.children)),s=!0;else if(e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!p(e.codegenNode.children)&&e.codegenNode.children.type===15){let t=l(e.codegenNode,`default`);t&&(t.returns=c(Rd(t.returns)),s=!0)}else if(e.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!p(t.codegenNode.children)&&t.codegenNode.children.type===15){let n=yf(e,`slot`,!0),r=n&&n.arg&&l(t.codegenNode,n.arg);r&&(r.returns=c(Rd(r.returns)),s=!0)}}if(!s)for(let e of o)e.codegenNode=n.cache(e.codegenNode);function c(e){let t=n.cache(e);return t.needArraySpread=!0,t}function l(e,t){if(e.children&&!p(e.children)&&e.children.type===15){let n=e.children.properties.find(e=>e.key===t||e.key.content===t);return n&&n.value}}o.length&&n.transformHoist&&n.transformHoist(a,n,e)}function Cp(e,t){let{constantCache:n}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;let r=n.get(e);if(r!==void 0)return r;let i=e.codegenNode;if(i.type!==13||i.isBlock&&e.tag!==`svg`&&e.tag!==`foreignObject`&&e.tag!==`math`)return 0;if(i.patchFlag===void 0){let r=3,a=Ep(e,t);if(a===0)return n.set(e,0),0;a<r&&(r=a);for(let i=0;i<e.children.length;i++){let a=Cp(e.children[i],t);if(a===0)return n.set(e,0),0;a<r&&(r=a)}if(r>1)for(let i=0;i<e.props.length;i++){let a=e.props[i];if(a.type===7&&a.name===`bind`&&a.exp){let i=Cp(a.exp,t);if(i===0)return n.set(e,0),0;i<r&&(r=i)}}if(i.isBlock){for(let t=0;t<e.props.length;t++)if(e.props[t].type===7)return n.set(e,0),0;t.removeHelper($u),t.removeHelper(Kd(t.inSSR,i.isComponent)),i.isBlock=!1,t.helper(Gd(t.inSSR,i.isComponent))}return n.set(e,r),r}return n.set(e,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Cp(e.content,t);case 4:return e.constType;case 8:let a=3;for(let n=0;n<e.children.length;n++){let r=e.children[n];if(y(r)||b(r))continue;let i=Cp(r,t);if(i===0)return 0;i<a&&(a=i)}return a;case 20:return 2;default:return 0}}var wp=new Set([_d,vd,yd,bd]);function Tp(e,t){if(e.type===14&&!y(e.callee)&&wp.has(e.callee)){let n=e.arguments[0];if(n.type===4)return Cp(n,t);if(n.type===14)return Tp(n,t)}return 0}function Ep(e,t){let n=3,r=Dp(e);if(r&&r.type===15){let{properties:e}=r;for(let r=0;r<e.length;r++){let{key:i,value:a}=e[r],o=Cp(i,t);if(o===0)return o;o<n&&(n=o);let s;if(s=a.type===4?Cp(a,t):a.type===14?Tp(a,t):0,s===0)return s;s<n&&(n=s)}}return n}function Dp(e){let t=e.codegenNode;if(t.type===13)return t.props}function Op(e,{filename:t=``,prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:o=!1,cacheHandlers:s=!1,nodeTransforms:c=[],directiveTransforms:l={},transformHoist:u=null,isBuiltInComponent:d=a,isCustomElement:f=a,expressionPlugins:p=[],scopeId:m=null,slotted:h=!0,ssr:g=!1,inSSR:_=!1,ssrCssVars:v=``,bindingMetadata:b=r,inline:x=!1,isTS:S=!1,onError:C=of,onWarn:w=sf,compatConfig:ee}){let T=t.replace(/\?.*$/,``).match(/([^/\\]+)\.\w+$/),E={filename:t,selfName:T&&k(O(T[1])),prefixIdentifiers:n,hoistStatic:i,hmr:o,cacheHandlers:s,nodeTransforms:c,directiveTransforms:l,transformHoist:u,isBuiltInComponent:d,isCustomElement:f,expressionPlugins:p,scopeId:m,slotted:h,ssr:g,inSSR:_,ssrCssVars:v,bindingMetadata:b,inline:x,isTS:S,onError:C,onWarn:w,compatConfig:ee,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,vForMemoKeyedNodes:new WeakSet,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){let t=E.helpers.get(e)||0;return E.helpers.set(e,t+1),e},removeHelper(e){let t=E.helpers.get(e);if(t){let n=t-1;n?E.helpers.set(e,n):E.helpers.delete(e)}},helperString(e){return`_${Nd[E.helper(e)]}`},replaceNode(e){E.parent.children[E.childIndex]=E.currentNode=e},removeNode(e){let t=E.parent.children,n=e?t.indexOf(e):E.currentNode?E.childIndex:-1;!e||e===E.currentNode?(E.currentNode=null,E.onNodeRemoved()):E.childIndex>n&&(E.childIndex--,E.onNodeRemoved()),E.parent.children.splice(n,1)},onNodeRemoved:a,addIdentifiers(e){},removeIdentifiers(e){},hoist(e){y(e)&&(e=H(e)),E.hoists.push(e);let t=H(`_hoisted_${E.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache(e,t=!1,n=!1){let r=Ud(E.cached.length,e,t,n);return E.cached.push(r),r}};return E.filters=new Set,E}function kp(e,t){let n=Op(e,t);Mp(e,n),t.hoistStatic&&bp(e,n),t.ssr||Ap(e,n),e.helpers=new Set([...n.helpers.keys()]),e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.transformed=!0,e.filters=[...n.filters]}function Ap(e,t){let{helper:n}=t,{children:r}=e;if(r.length===1){let n=xp(e);if(n&&n.codegenNode){let r=n.codegenNode;r.type===13&&qd(r,t),e.codegenNode=r}else e.codegenNode=r[0]}else r.length>1&&(e.codegenNode=Ld(t,n(Ju),void 0,e.children,64,void 0,void 0,!0,void 0,!1))}function jp(e,t){let n=0,r=()=>{n--};for(;n<e.children.length;n++){let i=e.children[n];y(i)||(t.grandParent=t.parent,t.parent=e,t.childIndex=n,t.onNodeRemoved=r,Mp(i,t))}}function Mp(e,t){t.currentNode=e;let{nodeTransforms:n}=t,r=[];for(let i=0;i<n.length;i++){let a=n[i](e,t);if(a&&(p(a)?r.push(...a):r.push(a)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(id);break;case 5:t.ssr||t.helper(hd);break;case 9:for(let n=0;n<e.branches.length;n++)Mp(e.branches[n],t);break;case 10:case 11:case 1:case 0:jp(e,t)}t.currentNode=e;let i=r.length;for(;i--;)r[i]()}function Np(e,t){let n=y(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(e.type===1){let{props:i}=e;if(e.tagType===3&&i.some(Tf))return;let a=[];for(let o=0;o<i.length;o++){let s=i[o];if(s.type===7&&n(s.name)){i.splice(o,1),o--;let n=t(e,s,r);n&&a.push(n)}}return a}}}var Pp=`/*@__PURE__*/`,Fp=e=>`${Nd[e]}: _${Nd[e]}`;function Ip(e,{mode:t=`function`,prefixIdentifiers:n=t===`module`,sourceMap:r=!1,filename:i=`template.vue.html`,scopeId:a=null,optimizeImports:o=!1,runtimeGlobalName:s=`Vue`,runtimeModuleName:c=`vue`,ssrRuntimeModuleName:l=`vue/server-renderer`,ssr:u=!1,isTS:d=!1,inSSR:f=!1}){let p={mode:t,prefixIdentifiers:n,sourceMap:r,filename:i,scopeId:a,optimizeImports:o,runtimeGlobalName:s,runtimeModuleName:c,ssrRuntimeModuleName:l,ssr:u,isTS:d,inSSR:f,source:e.source,code:``,column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(e){return`_${Nd[e]}`},push(e,t=-2,n){p.code+=e},indent(){m(++p.indentLevel)},deindent(e=!1){e?--p.indentLevel:m(--p.indentLevel)},newline(){m(p.indentLevel)}};function m(e){p.push(`
`+`  `.repeat(e),0)}return p}function Lp(e,t={}){let n=Ip(e,t);t.onContextCreated&&t.onContextCreated(n);let{mode:r,push:i,prefixIdentifiers:a,indent:o,deindent:s,newline:c,scopeId:l,ssr:u}=n,d=Array.from(e.helpers),f=d.length>0,p=!a&&r!==`module`;if(Rp(e,n),i(`function ${u?`ssrRender`:`render`}(${(u?[`_ctx`,`_push`,`_parent`,`_attrs`]:[`_ctx`,`_cache`]).join(`, `)}) {`),o(),p&&(i(`with (_ctx) {`),o(),f&&(i(`const { ${d.map(Fp).join(`, `)} } = _Vue
`,-1),c())),e.components.length&&(zp(e.components,`component`,n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(zp(e.directives,`directive`,n),e.temps>0&&c()),e.filters&&e.filters.length&&(c(),zp(e.filters,`filter`,n),c()),e.temps>0){i(`let `);for(let t=0;t<e.temps;t++)i(`${t>0?`, `:``}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(i(`
`,0),c()),u||i(`return `),e.codegenNode?Up(e.codegenNode,n):i(`null`),p&&(s(),i(`}`)),s(),i(`}`),{ast:e,code:n.code,preamble:``,map:n.map?n.map.toJSON():void 0}}function Rp(e,t){let{ssr:n,prefixIdentifiers:r,push:i,newline:a,runtimeModuleName:o,runtimeGlobalName:s,ssrRuntimeModuleName:c}=t,l=s,u=Array.from(e.helpers);u.length>0&&(i(`const _Vue = ${l}
`,-1),e.hoists.length&&i(`const { ${[nd,rd,id,ad,od].filter(e=>u.includes(e)).map(Fp).join(`, `)} } = _Vue
`,-1)),Bp(e.hoists,t),a(),i(`return `)}function zp(e,t,{helper:n,push:r,newline:i,isTS:a}){let o=n(t===`filter`?ud:t===`component`?sd:ld);for(let n=0;n<e.length;n++){let s=e[n],c=s.endsWith(`__self`);c&&(s=s.slice(0,-6)),r(`const ${Nf(s,t)} = ${o}(${JSON.stringify(s)}${c?`, true`:``})${a?`!`:``}`),n<e.length-1&&i()}}function Bp(e,t){if(!e.length)return;t.pure=!0;let{push:n,newline:r}=t;r();for(let i=0;i<e.length;i++){let a=e[i];a&&(n(`const _hoisted_${i+1} = `),Up(a,t),r())}t.pure=!1}function Vp(e,t){let n=e.length>3||!1;t.push(`[`),n&&t.indent(),Hp(e,t,n),n&&t.deindent(),t.push(`]`)}function Hp(e,t,n=!1,r=!0){let{push:i,newline:a}=t;for(let o=0;o<e.length;o++){let s=e[o];y(s)?i(s,-3):p(s)?Vp(s,t):Up(s,t),o<e.length-1&&(n?(r&&i(`,`),a()):r&&i(`, `))}}function Up(e,t){if(y(e))t.push(e,-3);else if(b(e))t.push(t.helper(e));else switch(e.type){case 1:case 9:case 11:Up(e.codegenNode,t);break;case 2:Wp(e,t);break;case 4:Gp(e,t);break;case 5:Kp(e,t);break;case 12:Up(e.codegenNode,t);break;case 8:qp(e,t);break;case 3:Yp(e,t);break;case 13:Xp(e,t);break;case 14:Qp(e,t);break;case 15:$p(e,t);break;case 17:em(e,t);break;case 18:tm(e,t);break;case 19:nm(e,t);break;case 20:rm(e,t);break;case 21:Hp(e.body,t,!0,!1)}}function Wp(e,t){t.push(JSON.stringify(e.content),-3,e)}function Gp(e,t){let{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,-3,e)}function Kp(e,t){let{push:n,helper:r,pure:i}=t;i&&n(Pp),n(`${r(hd)}(`),Up(e.content,t),n(`)`)}function qp(e,t){for(let n=0;n<e.children.length;n++){let r=e.children[n];y(r)?t.push(r,-3):Up(r,t)}}function Jp(e,t){let{push:n}=t;e.type===8?(n(`[`),qp(e,t),n(`]`)):e.isStatic?n(df(e.content)?e.content:JSON.stringify(e.content),-2,e):n(`[${e.content}]`,-3,e)}function Yp(e,t){let{push:n,helper:r,pure:i}=t;i&&n(Pp),n(`${r(id)}(${JSON.stringify(e.content)})`,-3,e)}function Xp(e,t){let{push:n,helper:r,pure:i}=t,{tag:a,props:o,children:s,patchFlag:c,dynamicProps:l,directives:u,isBlock:d,disableTracking:f,isComponent:p}=e,m;c&&(m=String(c)),u&&n(r(dd)+`(`),d&&n(`(${r($u)}(${f?`true`:``}), `),i&&n(Pp),n(r(d?Kd(t.inSSR,p):Gd(t.inSSR,p))+`(`,-2,e),Hp(Zp([a,o,s,m,l]),t),n(`)`),d&&n(`)`),u&&(n(`, `),Up(u,t),n(`)`))}function Zp(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(e=>e||`null`)}function Qp(e,t){let{push:n,helper:r,pure:i}=t,a=y(e.callee)?e.callee:r(e.callee);i&&n(Pp),n(a+`(`,-2,e),Hp(e.arguments,t),n(`)`)}function $p(e,t){let{push:n,indent:r,deindent:i,newline:a}=t,{properties:o}=e;if(!o.length){n(`{}`,-2,e);return}let s=o.length>1||!1;n(s?`{`:`{ `),s&&r();for(let e=0;e<o.length;e++){let{key:r,value:i}=o[e];Jp(r,t),n(`: `),Up(i,t),e<o.length-1&&(n(`,`),a())}s&&i(),n(s?`}`:` }`)}function em(e,t){Vp(e.elements,t)}function tm(e,t){let{push:n,indent:r,deindent:i}=t,{params:a,returns:o,body:s,newline:c,isSlot:l}=e;l&&n(`_${Nd[Od]}(`),n(`(`,-2,e),p(a)?Hp(a,t):a&&Up(a,t),n(`) => `),(c||s)&&(n(`{`),r()),o?(c&&n(`return `),p(o)?Vp(o,t):Up(o,t)):s&&Up(s,t),(c||s)&&(i(),n(`}`)),l&&(e.isNonScopedSlot&&n(`, undefined, true`),n(`)`))}function nm(e,t){let{test:n,consequent:r,alternate:i,newline:a}=e,{push:o,indent:s,deindent:c,newline:l}=t;if(n.type===4){let e=!df(n.content);e&&o(`(`),Gp(n,t),e&&o(`)`)}else o(`(`),Up(n,t),o(`)`);a&&s(),t.indentLevel++,a||o(` `),o(`? `),Up(r,t),t.indentLevel--,a&&l(),a||o(` `),o(`: `);let u=i.type===19;u||t.indentLevel++,Up(i,t),u||t.indentLevel--,a&&c(!0)}function rm(e,t){let{push:n,helper:r,indent:i,deindent:a,newline:o}=t,{needPauseTracking:s,needArraySpread:c}=e;c&&n(`[...(`),n(`_cache[${e.index}] || (`),s&&(i(),n(`${r(Td)}(-1`),e.inVOnce&&n(`, true`),n(`),`),o(),n(`(`)),n(`_cache[${e.index}] = `),Up(e.value,t),s&&(n(`).cacheIndex = ${e.index},`),o(),n(`${r(Td)}(1),`),o(),n(`_cache[${e.index}]`),a()),n(`)`),c&&n(`)]`)}RegExp(`\\b`+`arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield`.split(`,`).join(`\\b|\\b`)+`\\b`);var im=Np(/^(?:if|else|else-if)$/,(e,t,n)=>am(e,t,n,(e,t,r)=>{let i=n.parent.children,a=i.indexOf(e),o=0;for(;a-->=0;){let e=i[a];e&&e.type===9&&(o+=e.branches.length)}return()=>{if(r)e.codegenNode=sm(t,o,n);else{let r=lm(e.codegenNode);r.alternate=sm(t,o+e.branches.length-1,n)}}}));function am(e,t,n,r){if(t.name!==`else`&&(!t.exp||!t.exp.content.trim())){let r=t.exp?t.exp.loc:e.loc;n.onError(W(28,t.loc)),t.exp=H(`true`,!1,r)}if(t.name===`if`){let i=om(e,t),a={type:9,loc:pp(e.loc),branches:[i]};if(n.replaceNode(a),r)return r(a,i,!0)}else{let i=n.parent.children,a=i.indexOf(e);for(;a-->=-1;){let o=i[a];if(o&&Rf(o))n.removeNode(o);else{if(o&&o.type===9){(t.name===`else-if`||t.name===`else`)&&o.branches[o.branches.length-1].condition===void 0&&n.onError(W(30,e.loc)),n.removeNode();let i=om(e,t);o.branches.push(i);let a=r&&r(o,i,!1);Mp(i,n),a&&a(),n.currentNode=null}else n.onError(W(30,e.loc));break}}}}function om(e,t){let n=e.tagType===3;return{type:10,loc:e.loc,condition:t.name===`else`?void 0:t.exp,children:n&&!yf(e,`for`)?e.children:[e],userKey:bf(e,`key`),isTemplateIf:n}}function sm(e,t,n){return e.condition?Hd(e.condition,cm(e,t,n),U(n.helper(id),[`""`,`true`])):cm(e,t,n)}function cm(e,t,n){let{helper:r}=n,i=V(`key`,H(`${t}`,!1,Fd,2)),{children:a}=e,o=a[0];if(a.length!==1||o.type!==1){if(a.length===1&&o.type===11){let e=o.codegenNode;return Af(e,i,n),e}return Ld(n,r(Ju),zd([i]),a,64,void 0,void 0,!0,!1,!1,e.loc)}{let e=o.codegenNode,t=Pf(e);return t.type===13&&qd(t,n),Af(t,i,n),e}}function lm(e){for(;;)if(e.type===19){if(e.alternate.type===19)e=e.alternate;else return e}else e.type===20&&(e=e.value)}var um=Np(`for`,(e,t,n)=>{let{helper:r,removeHelper:i}=n;return dm(e,t,n,t=>{let a=U(r(fd),[t.source]),o=Ef(e),s=yf(e,`memo`),c=bf(e,`key`,!1,!0);c&&c.type;let l=c&&(c.type===6?c.value?H(c.value.content,!0):void 0:c.exp),u=l?V(`key`,l):null,d=t.source.type===4&&t.source.constType>0,f=d?64:c?128:256;return t.codegenNode=Ld(n,r(Ju),void 0,a,f,void 0,void 0,!0,!d,!1,e.loc),()=>{let c,{children:f}=t,p=f.length!==1||f[0].type!==1,m=Df(e)?e:o&&e.children.length===1&&Df(e.children[0])?e.children[0]:null;if(m)c=m.codegenNode,o&&u&&Af(c,u,n);else if(p)c=Ld(n,r(Ju),u?zd([u]):void 0,e.children,64,void 0,void 0,!0,void 0,!1);else{c=f[0].codegenNode,o&&u&&Af(c,u,n);let e=!d||c.isBlockRequired===!0;c.isBlock!==e&&(c.isBlock?(i($u),i(Kd(n.inSSR,c.isComponent))):i(Gd(n.inSSR,c.isComponent))),c.isBlock=e,c.isBlock?(r($u),r(Kd(n.inSSR,c.isComponent))):(r(Gd(n.inSSR,c.isComponent)),c.needsPatch&&(c.patchFlag=(c.patchFlag??0)|512))}if(s){let e=Vd(pm(t.parseResult,[H(`_cached`)]));e.body=Wd([Bd([`const _memo = (`,s.exp,`)`]),Bd([`if (_cached && _cached.el`,...l?[` && _cached.key === (`,l,`)`]:[],` && ${n.helperString(Md)}(_cached, _memo)) return _cached`]),Bd([`const _item = `,c]),H(`_item.memo = _memo`),H(`return _item`)]),a.arguments.push(e,H(`_cache`),H(String(n.cached.length))),n.cached.push(null)}else a.arguments.push(Vd(pm(t.parseResult),c,!0))}})});function dm(e,t,n,r){if(!t.exp){n.onError(W(31,t.loc));return}let i=t.forParseResult;if(!i){n.onError(W(32,t.loc));return}fm(i,n);let{addIdentifiers:a,removeIdentifiers:o,scopes:s}=n,{source:c,value:l,key:u,index:d}=i,f={type:11,loc:t.loc,source:c,valueAlias:l,keyAlias:u,objectIndexAlias:d,parseResult:i,children:Ef(e)?e.children:[e]};n.replaceNode(f),s.vFor++;let p=r&&r(f);return()=>{s.vFor--,p&&p()}}function fm(e,t){e.finalized||=!0}function pm({value:e,key:t,index:n},r=[]){return mm([e,t,n,...r])}function mm(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((e,t)=>e||H(`_`.repeat(t+1),!1))}var hm=H(`undefined`,!1),gm=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){let n=yf(e,`slot`);if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},_m=(e,t,n,r)=>Vd(e,n,!1,!0,n.length?n[0].loc:r);function vm(e,t,n=_m){t.helper(Od);let{children:r,loc:i}=e,a=[],o=[],s=t.scopes.vSlot>0||t.scopes.vFor>0,c=yf(e,`slot`,!0);if(c){let{arg:e,exp:t}=c;e&&!cf(e)&&(s=!0),a.push(V(e||H(`default`,!0),n(t,void 0,r,i)))}let l=!1,u=!1,d=[],f=new Set,p=0;for(let e=0;e<r.length;e++){let i=r[e],m;if(!Ef(i)||!(m=yf(i,`slot`,!0))){i.type!==3&&d.push(i);continue}if(c){t.onError(W(37,m.loc));break}l=!0;let{children:h,loc:g}=i,{arg:_=H(`default`,!0),exp:v,loc:y}=m,b;cf(_)?b=_?_.content:`default`:s=!0;let x=yf(i,`for`),S=n(v,x,h,g),C,w;if(C=yf(i,`if`))s=!0,o.push(Hd(C.exp,ym(_,S,p++),hm));else if(w=yf(i,/^else(?:-if)?$/,!0)){let n=e,i;for(;n--&&(i=r[n],Rf(i)););if(i&&Ef(i)&&yf(i,/^(?:else-)?if$/)){let e=o[o.length-1];for(;e.alternate.type===19;)e=e.alternate;e.alternate=w.exp?Hd(w.exp,ym(_,S,p++),hm):ym(_,S,p++)}else t.onError(W(30,w.loc))}else if(x){s=!0;let e=x.forParseResult;e?(fm(e,t),o.push(U(t.helper(fd),[e.source,Vd(pm(e),ym(_,S),!0)]))):t.onError(W(32,x.loc))}else{if(b){if(f.has(b)){t.onError(W(38,y));continue}f.add(b),b==="default"&&(u=!0)}a.push(V(_,S))}}if(!c){let e=(e,r)=>{let a=n(e,void 0,r,i);return t.compatConfig&&(a.isNonScopedSlot=!0),V(`default`,a)};l?d.length&&!d.every(Lf)&&(u?t.onError(W(39,d[0].loc)):a.push(e(void 0,d))):a.push(e(void 0,r))}let m=s?2:bm(e.children)?3:1,h=zd(a.concat(V(`_`,H(m+``,!1))),i);return o.length&&(h=U(t.helper(md),[h,Rd(o)])),{slots:h,hasDynamicSlots:s}}function ym(e,t,n){let r=[V(`name`,e),V(`fn`,t)];return n!=null&&r.push(V(`key`,H(String(n),!0))),zd(r)}function bm(e){for(let t=0;t<e.length;t++){let n=e[t];switch(n.type){case 1:if(n.tagType===2||bm(n.children))return!0;break;case 9:if(bm(n.branches))return!0;break;case 10:case 11:if(bm(n.children))return!0}}return!1}var xm=new WeakMap,Sm=(e,t)=>function(){if(e=t.currentNode,e.type!==1||e.tagType!==0&&e.tagType!==1)return;let{tag:n,props:r}=e,i=e.tagType===1,a=i?Cm(e,t):`"${n}"`,o=x(a)&&a.callee===cd,s,c,l=0,u,d,f,p=!1,m=!1,h=o||a===Yu||a===Xu||!i&&(n===`svg`||n===`foreignObject`||n===`math`);if(r.length>0){let n=wm(e,t,void 0,i,o);s=n.props,l=n.patchFlag,d=n.dynamicPropNames,p=n.needsPatch,m=n.isBlockRequired;let r=n.directives;f=r&&r.length?Rd(r.map(e=>Dm(e,t))):void 0,n.shouldUseBlock&&(h=!0)}if(e.children.length>0){if(a===Zu&&(h=!0,l|=1024),i&&a!==Yu&&a!==Zu){let{slots:n,hasDynamicSlots:r}=vm(e,t);c=n,r&&(l|=1024)}else if(e.children.length===1&&a!==Yu){let n=e.children[0],r=n.type,i=r===5||r===8;i&&Cp(n,t)===0&&(l|=1),c=i||r===2?n:e.children}else c=e.children}d&&d.length&&(u=Om(d));let g=e.codegenNode=Ld(t,a,s,c,l===0?void 0:l,u,f,!!h,!1,i,e.loc);p&&=l===0||l===32,p&&(g.needsPatch=!0),m&&(g.isBlockRequired=!0)};function Cm(e,t,n=!1){let{tag:r}=e,i=km(r),a=bf(e,`is`,!1,!0);if(a){if(i||rf(`COMPILER_IS_ON_ELEMENT`,t)){let e;if(a.type===6?e=a.value&&H(a.value.content,!0):(e=a.exp,e||=H(`is`,!1,a.arg.loc)),e)return U(t.helper(cd),[e])}else a.type===6&&a.value.content.startsWith(`vue:`)&&(r=a.value.content.slice(4))}let o=lf(r)||t.isBuiltInComponent(r);return o?(n||t.helper(o),o):(t.helper(sd),t.components.add(r),Nf(r,`component`))}function wm(e,t,n=e.props,r,i,a=!1){let{tag:o,loc:c,children:l}=e,u=[],d=[],f=[],p=l.length>0,m=!1,h=!1,g=0,_=!1,v=!1,y=!1,x=!1,S=!1,C=!1,w=[],ee=e=>{u.length&&(d.push(zd(Tm(u),c)),u=[]),e&&d.push(e)},T=()=>{t.scopes.vFor>0&&u.push(V(H(`ref_for`,!0),H(`true`)))},E=({key:e,value:n})=>{if(cf(e)){let a=e.content,o=s(a);if(o&&(!r||i)&&a.toLowerCase()!==`onclick`&&a!==`onUpdate:modelValue`&&!te(a)&&(x=!0),o&&te(a)&&(C=!0),a===`ref`&&(_=!0),o&&n.type===14&&(n=n.arguments[0]),n.type===20||(n.type===4||n.type===8)&&Cp(n,t)>0)return;a===`class`?v=!0:a===`style`?y=!0:a!==`ref`&&a!==`key`&&!w.includes(a)&&w.push(a),r&&(a===`class`||a===`style`)&&!w.includes(a)&&w.push(a)}else S=!0};for(let i=0;i<n.length;i++){let s=n[i];if(s.type===6){let{loc:e,name:n,nameLoc:r,value:i}=s;if(n===`ref`&&(_=!0,T()),n===`is`&&(km(o)||i&&i.content.startsWith(`vue:`)||rf(`COMPILER_IS_ON_ELEMENT`,t)))continue;u.push(V(H(n,!0,r),H(i?i.content:``,!0,i?i.loc:e)))}else{let{name:n,arg:i,exp:l,loc:_,modifiers:v}=s,y=n===`bind`,x=n===`on`;if(n===`slot`){r||t.onError(W(40,_));continue}if(n===`once`||n===`memo`||n===`is`||y&&xf(i,`is`)&&(km(o)||rf(`COMPILER_IS_ON_ELEMENT`,t))||x&&a)continue;if(y&&xf(i,`key`)&&(m=!0),x&&p&&i&&cf(i)&&O(i.content)===`vue:beforeUpdate`&&(m=!0,h=!0),y&&xf(i,`ref`)&&T(),!i&&(y||x)){if(S=!0,l){if(y){if(ee(),rf(`COMPILER_V_BIND_OBJECT_ORDER`,t)){d.unshift(l);continue}T(),ee(),d.push(l)}else ee({type:14,loc:_,callee:t.helper(xd),arguments:r?[l]:[l,`true`]})}else t.onError(W(y?34:35,_));continue}y&&v.some(e=>e.content===`prop`)&&(g|=32);let C=t.directiveTransforms[n];if(C){let{props:n,needRuntime:r}=C(s,e,t);!a&&n.forEach(E),x&&i&&!cf(i)?ee(zd(n,c)):u.push(...n),r&&(f.push(s),b(r)&&xm.set(s,r))}else ne(n)||(f.push(s),p&&(m=!0,h=!0))}}let D;d.length?(ee(),D=d.length>1?U(t.helper(gd),d,c):d[0]):u.length&&(D=zd(Tm(u),c)),S?g|=16:(v&&!r&&(g|=2),y&&!r&&(g|=4),w.length&&(g|=8),x&&(g|=32));let re=(g===0||g===32)&&(_||C||f.length>0);if(!m&&re&&(g|=512),!t.inSSR&&D)switch(D.type){case 15:let e=-1,n=-1,r=!1;for(let t=0;t<D.properties.length;t++){let i=D.properties[t].key;cf(i)?i.content===`class`?e=t:i.content===`style`&&(n=t):i.isHandlerKey||(r=!0)}let i=D.properties[e],a=D.properties[n];r?D=U(t.helper(yd),[D]):(i&&!cf(i.value)&&(i.value=U(t.helper(_d),[i.value])),a&&(y||a.value.type===4&&a.value.content.trim()[0]===`[`||a.value.type===17)&&(a.value=U(t.helper(vd),[a.value])));break;case 14:break;default:D=U(t.helper(yd),[U(t.helper(bd),[D])])}return{props:D,directives:f,patchFlag:g,dynamicPropNames:w,shouldUseBlock:m,needsPatch:re,isBlockRequired:h}}function Tm(e){let t=new Map,n=[];for(let r=0;r<e.length;r++){let i=e[r];if(i.key.type===8||!i.key.isStatic){n.push(i);continue}let a=i.key.content,o=t.get(a);o?(a===`style`||a===`class`||s(a))&&Em(o,i):(t.set(a,i),n.push(i))}return n}function Em(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=Rd([e.value,t.value],e.loc)}function Dm(e,t){let n=[],r=xm.get(e);r?n.push(t.helperString(r)):(t.helper(ld),t.directives.add(e.name),n.push(Nf(e.name,`directive`)));let{loc:i}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push(`void 0`),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push(`void 0`),n.push(`void 0`));let t=H(`true`,!1,i);n.push(zd(e.modifiers.map(e=>V(e,t)),i))}return Rd(n,e.loc)}function Om(e){let t=`[`;for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=`, `);return t+`]`}function km(e){return e===`component`||e===`Component`}var Am=(e,t)=>{if(Df(e)){let{children:n,loc:r}=e,{slotName:i,slotProps:a}=jm(e,t),o=[t.prefixIdentifiers?`_ctx.$slots`:`$slots`,i,`{}`,`undefined`,`true`],s=2;a&&(o[2]=a,s=3),n.length&&(o[3]=Vd([],n,!1,!1,r),s=4),t.scopeId&&!t.slotted&&(s=5),o.splice(s),e.codegenNode=U(t.helper(pd),o,r)}};function jm(e,t){let n=`"default"`,r,i=[];for(let t=0;t<e.props.length;t++){let r=e.props[t];r.type===6?r.value&&(r.name===`name`?n=JSON.stringify(r.value.content):(r.name=O(r.name),i.push(r))):r.name===`bind`&&xf(r.arg,`name`)?r.exp?n=r.exp:r.arg&&r.arg.type===4&&(n=r.exp=H(O(r.arg.content),!1,r.arg.loc)):(r.name===`bind`&&r.arg&&cf(r.arg)&&(r.arg.content=O(r.arg.content)),i.push(r))}if(i.length>0){let{props:n,directives:a}=wm(e,t,i,!1,!1);r=n,a.length&&t.onError(W(36,a[0].loc))}return{slotName:n,slotProps:r}}var Mm=(e,t,n,r)=>{let{loc:i,modifiers:a,arg:o}=e;!e.exp&&!a.length&&n.onError(W(35,i));let s;if(o.type===4){if(o.isStatic){let e=o.content;e.startsWith(`vue:`)&&(e=`vnode-${e.slice(4)}`),s=H(t.tagType!==0||e.startsWith(`vnode`)||!/[A-Z]/.test(e)?oe(O(e)):`on:${e}`,!0,o.loc)}else s=Bd([`${n.helperString(wd)}(`,o,`)`])}else s=o,s.children.unshift(`${n.helperString(wd)}(`),s.children.push(`)`);let c=e.exp;c&&!c.content.trim()&&(c=void 0);let l=n.cacheHandlers&&!c&&!n.inVOnce;if(c){let e=gf(c),t=!(e||vf(c)),n=c.content.includes(`;`);(t||l&&e)&&(c=Bd([`${t?`$event`:`(...args)`} => ${n?`{`:`(`}`,c,n?`}`:`)`]))}let u={props:[V(s,c||H(`() => {}`,!1,i))]};return r&&(u=r(u)),l&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(e=>e.key.isHandlerKey=!0),u},Nm=(e,t,n)=>{let{modifiers:r,loc:i}=e,a=e.arg,{exp:o}=e;return o&&o.type===4&&!o.content.trim()&&(o=void 0),a.type===4?a.isStatic||(a.content=a.content?`${a.content} || ""`:`""`):(a.children.unshift(`(`),a.children.push(`) || ""`)),r.some(e=>e.content===`camel`)&&(a.type===4?a.content=a.isStatic?O(a.content):`${n.helperString(Sd)}(${a.content})`:(a.children.unshift(`${n.helperString(Sd)}(`),a.children.push(`)`))),n.inSSR||(r.some(e=>e.content===`prop`)&&Pm(a,`.`),r.some(e=>e.content===`attr`)&&Pm(a,`^`)),{props:[V(a,o)]}},Pm=(e,t)=>{e.type===4?e.content=e.isStatic?t+e.content:`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(`)`))},Fm=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{let n=e.children,r,i=!1;for(let e=0;e<n.length;e++){let t=n[e];if(Cf(t)){i=!0;for(let i=e+1;i<n.length;i++){let a=n[i];if(Cf(a))r||=n[e]=Bd([t],t.loc),r.children.push(` + `,a),n.splice(i,1),i--;else{r=void 0;break}}}}if(i&&(n.length!==1||e.type!==0&&(e.type!==1||e.tagType!==0||e.props.find(e=>e.type===7&&!t.directiveTransforms[e.name])||e.tag===`template`)))for(let e=0;e<n.length;e++){let r=n[e];if(Cf(r)||r.type===8){let i=[];(r.type!==2||r.content!==` `)&&i.push(r),!t.ssr&&Cp(r,t)===0&&i.push(`1`),n[e]={type:12,content:r,loc:r.loc,codegenNode:U(t.helper(ad),i)}}}}},Im=new WeakSet,Lm=(e,t)=>{if(e.type===1&&yf(e,`once`,!0))return Im.has(e)||t.inVOnce||t.inSSR?void 0:(Im.add(e),t.inVOnce=!0,t.helper(Td),()=>{t.inVOnce=!1;let e=t.currentNode;e.codegenNode&&=t.cache(e.codegenNode,!0,!0)})},Rm=(e,t,n)=>{let{exp:r,arg:i}=e;if(!r)return n.onError(W(41,e.loc)),zm();let a=r.loc.source.trim(),o=r.type===4?r.content:a,s=n.bindingMetadata[a];if(s===`props`||s===`props-aliased`)return n.onError(W(44,r.loc)),zm();if(s===`literal-const`||s===`setup-const`)return n.onError(W(45,r.loc)),zm();if(!o.trim()||!gf(r))return n.onError(W(42,r.loc)),zm();let c=i||H(`modelValue`,!0),l=i?cf(i)?`onUpdate:${O(i.content)}`:Bd([`"onUpdate:" + `,i]):`onUpdate:modelValue`,u;u=Bd([`${n.isTS?`($event: any)`:`$event`} => ((`,r,`) = $event)`]);let d=[V(c,e.exp),V(l,u)];if(e.modifiers.length&&t.tagType===1){let t=e.modifiers.map(e=>e.content).map(e=>(df(e)?e:JSON.stringify(e))+`: true`).join(`, `),n=i?cf(i)?`${i.content}Modifiers`:Bd([i,` + "Modifiers"`]):`modelModifiers`;d.push(V(n,H(`{ ${t} }`,!1,e.loc,2)))}return zm(d)};function zm(e=[]){return{props:e}}var Bm=/[\w).+\-_$\]]/,Vm=(e,t)=>{rf(`COMPILER_FILTERS`,t)&&(e.type===5?Hm(e.content,t):e.type===1&&e.props.forEach(e=>{e.type===7&&e.name!==`for`&&e.exp&&Hm(e.exp,t)}))};function Hm(e,t){if(e.type===4)Um(e,t);else for(let n=0;n<e.children.length;n++){let r=e.children[n];typeof r==`object`&&(r.type===4?Um(r,t):r.type===8?Hm(r,t):r.type===5&&Hm(r.content,t))}}function Um(e,t){let n=e.content,r=!1,i=!1,a=!1,o=!1,s=0,c=0,l=0,u=0,d,f,p,m,h=[];for(p=0;p<n.length;p++)if(f=d,d=n.charCodeAt(p),r)d===39&&f!==92&&(r=!1);else if(i)d===34&&f!==92&&(i=!1);else if(a)d===96&&f!==92&&(a=!1);else if(o)d===47&&f!==92&&(o=!1);else if(d===124&&n.charCodeAt(p+1)!==124&&n.charCodeAt(p-1)!==124&&!s&&!c&&!l)m===void 0?(u=p+1,m=n.slice(0,p).trim()):g();else{switch(d){case 34:i=!0;break;case 39:r=!0;break;case 96:a=!0;break;case 40:l++;break;case 41:l--;break;case 91:c++;break;case 93:c--;break;case 123:s++;break;case 125:s--}if(d===47){let e=p-1,t;for(;e>=0&&(t=n.charAt(e),t===` `);e--);t&&Bm.test(t)||(o=!0)}}m===void 0?m=n.slice(0,p).trim():u!==0&&g();function g(){h.push(n.slice(u,p).trim()),u=p+1}if(h.length){for(p=0;p<h.length;p++)m=Wm(m,h[p],t);e.content=m,e.ast=void 0}}function Wm(e,t,n){n.helper(ud);let r=t.indexOf(`(`);if(r<0)return n.filters.add(t),`${Nf(t,`filter`)}(${e})`;{let i=t.slice(0,r),a=t.slice(r+1);return n.filters.add(i),`${Nf(i,`filter`)}(${e}${a===`)`?a:`,`+a}`}}var Gm=new WeakSet,Km=(e,t)=>{if(e.type===1){let n=yf(e,`memo`);return!n||Gm.has(e)||t.inSSR?void 0:(Gm.add(e),()=>{let r=e.codegenNode||t.currentNode.codegenNode;r&&r.type===13&&(e.tagType!==1&&qd(r,t),e.codegenNode=U(t.helper(jd),[n.exp,Vd(void 0,r),`_cache`,String(t.cached.length)]),t.cached.push(null))})}},qm=(e,t)=>{if(e.type===1){for(let n of e.props)if(n.type===7&&n.name===`bind`&&(!n.exp||n.exp.type===4&&!n.exp.content.trim())&&n.arg){let e=n.arg;if(e.type!==4||!e.isStatic)t.onError(W(53,e.loc)),n.exp=H(``,!0,e.loc);else{let t=O(e.content);(ff.test(t[0])||t[0]===`-`)&&(n.exp=H(t,!1,e.loc))}}}};function Jm(e){return[[qm,Lm,im,Km,um,Vm,Am,Sm,gm,Fm],{on:Mm,bind:Nm,model:Rm}]}function Ym(e,t={}){let n=t.onError||of,r=t.mode===`module`;t.prefixIdentifiers===!0?n(W(48)):r&&n(W(49)),t.cacheHandlers&&n(W(50)),t.scopeId&&!r&&n(W(51));let i=l({},t,{prefixIdentifiers:!1}),a=y(e)?yp(e,i):e,[o,s]=Jm();return kp(a,l({},i,{nodeTransforms:[...o,...t.nodeTransforms||[]],directiveTransforms:l({},s,t.directiveTransforms||{})})),Lp(a,i)}var Xm=()=>({props:[]}),Zm=Symbol(``),Qm=Symbol(``),$m=Symbol(``),eh=Symbol(``),th=Symbol(``),nh=Symbol(``),rh=Symbol(``),ih=Symbol(``),ah=Symbol(``),oh=Symbol(``);Pd({[Zm]:`vModelRadio`,[Qm]:`vModelCheckbox`,[$m]:`vModelText`,[eh]:`vModelSelect`,[th]:`vModelDynamic`,[nh]:`withModifiers`,[rh]:`withKeys`,[ih]:`vShow`,[ah]:`Transition`,[oh]:`TransitionGroup`});var sh;function ch(e,t=!1){return sh||=document.createElement(`div`),t?(sh.innerHTML=`<div foo="${e.replace(/"/g,`&quot;`)}">`,sh.children[0].getAttribute(`foo`)):(sh.innerHTML=e,sh.textContent)}var lh={parseMode:`html`,isVoidTag:ke,isNativeTag:e=>Ee(e)||De(e)||Oe(e),isPreTag:e=>e===`pre`,isIgnoreNewlineTag:e=>e===`pre`||e===`textarea`,decodeEntities:ch,isBuiltInComponent:e=>{if(e===`Transition`||e===`transition`)return ah;if(e===`TransitionGroup`||e===`transition-group`)return oh},getNamespace(e,t,n){let r=t?t.ns:n;if(t&&r===2){if(t.tag===`annotation-xml`){if(e===`svg`)return 1;t.props.some(e=>e.type===6&&e.name===`encoding`&&e.value!=null&&(e.value.content===`text/html`||e.value.content===`application/xhtml+xml`))&&(r=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!==`mglyph`&&e!==`malignmark`&&(r=0)}else t&&r===1&&(t.tag===`foreignObject`||t.tag===`desc`||t.tag===`title`)&&(r=0);if(r===0){if(e===`svg`)return 1;if(e===`math`)return 2}return r}},uh=e=>{e.type===1&&e.props.forEach((t,n)=>{t.type===6&&t.name===`style`&&t.value&&(e.props[n]={type:7,name:`bind`,arg:H(`style`,!0,t.loc),exp:dh(t.value.content,t.loc),modifiers:[],loc:t.loc})})},dh=(e,t)=>{let n=ye(e);return H(JSON.stringify(n),!1,t,3)};function fh(e,t){return W(e,t,void 0)}var ph=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(fh(54,i)),t.children.length&&(n.onError(fh(55,i)),t.children.length=0),{props:[V(H(`innerHTML`,!0,i),r||H(``,!0))]}},mh=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(fh(56,i)),t.children.length&&(n.onError(fh(57,i)),t.children.length=0),{props:[V(H(`textContent`,!0),r?Cp(r,n)>0?r:U(n.helperString(hd),[r],i):H(``,!0))]}},hh=(e,t,n)=>{let r=Rm(e,t,n);if(!r.props.length||t.tagType===1)return r;e.arg&&n.onError(fh(59,e.arg.loc));let{tag:i}=t,a=n.isCustomElement(i);if(i===`input`||i===`textarea`||i===`select`||a){let o=$m,s=!1;if(i===`input`||a){let r=bf(t,`type`);if(r){if(r.type===7)o=th;else if(r.value)switch(r.value.content){case`radio`:o=Zm;break;case`checkbox`:o=Qm;break;case`file`:s=!0,n.onError(fh(60,e.loc))}}else Sf(t)&&(o=th)}else i===`select`&&(o=eh);s||(r.needRuntime=n.helper(o))}else n.onError(fh(58,e.loc));return r.props=r.props.filter(e=>e.key.type!==4||e.key.content!==`modelValue`),r},gh=n(`passive,once,capture`),_h=n(`stop,prevent,self,ctrl,shift,alt,meta,exact,middle`),vh=n(`left,right`),yh=n(`onkeyup,onkeydown,onkeypress`),bh=(e,t,n,r)=>{let i=[],a=[],o=[];for(let s=0;s<t.length;s++){let c=t[s].content;c===`native`&&af(`COMPILER_V_ON_NATIVE`,n,r)||gh(c)?o.push(c):vh(c)?cf(e)?yh(e.content.toLowerCase())?i.push(c):a.push(c):(i.push(c),a.push(c)):_h(c)?a.push(c):i.push(c)}return{keyModifiers:i,nonKeyModifiers:a,eventOptionModifiers:o}},xh=(e,t)=>cf(e)&&e.content.toLowerCase()===`onclick`?H(t,!0):e.type===4?e:Bd([`(`,e,`) === "onClick" ? "${t}" : (`,e,`)`]),Sh=(e,t,n)=>Mm(e,t,n,t=>{let{modifiers:r}=e;if(!r.length)return t;let{key:i,value:a}=t.props[0],{keyModifiers:o,nonKeyModifiers:s,eventOptionModifiers:c}=bh(i,r,n,e.loc);if(s.includes(`right`)&&(i=xh(i,`onContextmenu`)),s.includes(`middle`)&&(i=xh(i,`onMouseup`)),s.length&&(a=U(n.helper(nh),[a,JSON.stringify(s)])),o.length&&(!cf(i)||yh(i.content.toLowerCase()))&&(a=U(n.helper(rh),[a,JSON.stringify(o)])),c.length){let e=c.map(k).join(``);i=cf(i)?H(`${i.content}${e}`,!0):Bd([`(`,i,`) + "${e}"`])}return{props:[V(i,a)]}}),Ch=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(fh(62,i)),{props:[],needRuntime:n.helper(ih)}},wh=(e,t)=>{if(e.type===1&&e.tagType===1&&t.isBuiltInComponent(e.tag)===ah)return()=>{if(!e.children.length)return;Th(e);let t=e.children[0];if(t.type===1)for(let n of t.props)n.type===7&&n.name===`show`&&e.props.push({type:6,name:`persisted`,nameLoc:e.loc,value:void 0,loc:e.loc})}};function Th(e){let t=e.children=e.children.filter(e=>!Rf(e)),n=t[0];return t.length!==1||n.type===11||n.type===9&&n.branches.some(Th)}var Eh=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag===`script`||e.tag===`style`)&&t.removeNode()},Dh=[uh,wh],Oh={cloak:Xm,html:ph,text:mh,model:hh,on:Sh,show:Ch};function kh(e,t={}){return Ym(e,l({},lh,t,{nodeTransforms:[Eh,...Dh,...t.nodeTransforms||[]],directiveTransforms:l({},Oh,t.directiveTransforms||{}),transformHoist:null}))}var Ah=Object.create(null);function jh(e,t){if(!y(e)){if(e.nodeType)e=e.innerHTML;else return a}let n=pe(e,t),r=Ah[n];if(r)return r;if(e[0]===`#`){let t=document.querySelector(e);e=t?t.innerHTML:``}let i=l({hoistStatic:!0,onError:void 0,onWarn:a},t);!i.isCustomElement&&typeof customElements<`u`&&(i.isCustomElement=e=>!!customElements.get(e));let{code:o}=kh(e,i),s=Function(`Vue`,o)(jc);return s._rc=!0,Ah[n]=s}pc(jh);var Mh=`stackline-vue-multiselect-dropdown-styles`,Nh=`
.vmsd-root {
  --vmsd-primary: #3f51b5;
  --vmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f7fb;
  --vmsd-surface-muted: #e8eaf6;
  --vmsd-border: #c5cae9;
  --vmsd-border-strong: #7986cb;
  --vmsd-ink: #212121;
  --vmsd-muted: #5f6368;
  --vmsd-chip-bg: #e8eaf6;
  --vmsd-chip-text: #303f9f;
  --vmsd-chip-remove: #303f9f;
  --vmsd-divider: rgba(125, 119, 134, 0.16);
  --vmsd-section-bg: #f5f7fb;
  --vmsd-focus: rgba(63, 81, 181, 0.32);
  --vmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --vmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
  position: relative;
  display: block;
  width: 100%;
  color: var(--vmsd-ink);
  font: inherit;
}

.vmsd-root *,
.vmsd-root *::before,
.vmsd-root *::after,
.vmsd-menu,
.vmsd-menu *,
.vmsd-menu *::before,
.vmsd-menu *::after {
  box-sizing: border-box;
}

.vmsd-trigger {
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 56px;
  gap: 8px;
  border: 1px solid var(--vmsd-border);
  border-radius: 18px;
  background-color: var(--vmsd-bg);
  color: var(--vmsd-ink);
  padding: 11px 54px 11px 16px;
  box-shadow: var(--vmsd-shadow-soft);
  text-align: left;
  cursor: pointer;
  line-height: 1.45;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease, transform 160ms ease;
}

.vmsd-trigger:hover {
  border-color: var(--vmsd-border-strong);
}

.vmsd-root[data-open="true"] .vmsd-trigger,
.vmsd-trigger:focus-visible {
  outline: none;
  border-color: var(--vmsd-primary);
  box-shadow: 0 0 0 3px var(--vmsd-focus), var(--vmsd-shadow-soft);
}

.vmsd-trigger.vmsd-disabled {
  cursor: not-allowed;
  opacity: 0.68;
}

.vmsd-value {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 1.45em;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.vmsd-placeholder,
.vmsd-single-value {
  display: inline-flex;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  min-width: 0;
  min-height: 1.45em;
  max-width: 100%;
  color: var(--vmsd-muted);
  font-size: 0.95rem;
  line-height: 1.25;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vmsd-single-value {
  color: var(--vmsd-ink);
  font-weight: 500;
}

.vmsd-badge-list {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.vmsd-badge {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-height: 32px;
  max-width: 100%;
  border-radius: 999px;
  background-color: var(--vmsd-chip-bg);
  color: var(--vmsd-chip-text);
  padding: 6px 30px 6px 12px;
  box-shadow: inset 0 0 0 1px rgba(103, 80, 164, 0.08);
  line-height: 1.35;
  white-space: normal;
  overflow-wrap: anywhere;
}

.vmsd-badge-label {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  max-width: 100%;
  line-height: 1.3;
  font-weight: 500;
  white-space: normal;
  overflow-wrap: anywhere;
}

.vmsd-badge-remove,
.vmsd-clear,
.vmsd-search-clear,
.vmsd-arrow-button,
.vmsd-group-action {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0;
}

.vmsd-badge-remove {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-grid;
  width: 16px;
  height: 16px;
  place-items: center;
  transform: translateY(-50%);
  color: var(--vmsd-chip-remove);
  font-size: 12px;
  line-height: 1;
}

.vmsd-overflow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  min-width: 24px;
  min-height: 20px;
  color: var(--vmsd-muted);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
}

.vmsd-root.vmsd-has-overflow .vmsd-trigger {
  padding-right: 104px;
}

.vmsd-root.vmsd-has-overflow:not(.vmsd-has-clear) .vmsd-trigger {
  padding-right: 74px;
}

.vmsd-actions {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transform: translateY(-50%);
}

.vmsd-clear {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--vmsd-muted);
  font-size: 14px;
  line-height: 1;
}

.vmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.vmsd-badge-remove .vmsd-icon {
  width: 10px;
  height: 10px;
}

.vmsd-clear .vmsd-icon {
  width: 12px;
  height: 12px;
}

.vmsd-search-clear .vmsd-icon {
  width: 18px;
  height: 18px;
}

.vmsd-arrow-button {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--vmsd-muted);
}

.vmsd-arrow-button:disabled {
  cursor: not-allowed;
}

.vmsd-badge-remove:focus-visible,
.vmsd-clear:focus-visible,
.vmsd-search-clear:focus-visible,
.vmsd-arrow-button:focus-visible,
.vmsd-group-action:focus-visible,
.vmsd-inline-button:focus-visible {
  outline: 3px solid var(--vmsd-focus);
  outline-offset: 2px;
}

.vmsd-arrow {
  display: inline-flex;
  width: 100%;
  height: 100%;
  line-height: 0;
}

.vmsd-arrow .vmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.vmsd-menu {
  position: absolute;
  left: 0;
  z-index: 99999;
  width: 100%;
  border: 1px solid var(--vmsd-border);
  border-radius: 22px;
  background-color: var(--vmsd-bg);
  box-shadow: var(--vmsd-shadow);
  overflow: hidden;
}

.vmsd-menu.vmsd-body-overlay {
  position: fixed;
  right: auto;
  top: auto;
  bottom: auto;
  max-width: calc(100vw - 16px);
  z-index: 100000;
}

.vmsd-menu.vmsd-bottom {
  top: calc(100% + 8px);
}

.vmsd-menu.vmsd-top {
  bottom: calc(100% + 8px);
}

.vmsd-menu.vmsd-body-overlay.vmsd-bottom,
.vmsd-menu.vmsd-body-overlay.vmsd-top {
  top: auto;
  bottom: auto;
}

.vmsd-toolbar {
  display: grid;
  gap: 0;
  padding: 0;
  background-color: var(--vmsd-bg);
}

.vmsd-search-shell {
  position: relative;
  min-height: 52px;
  border-bottom: 1px solid var(--vmsd-divider);
  background-color: var(--vmsd-bg);
}

.vmsd-search-icon {
  position: absolute;
  top: 50%;
  left: 16px;
  width: 18px;
  height: 18px;
  color: var(--vmsd-muted);
  fill: currentColor;
  pointer-events: none;
  transform: translateY(-50%);
}

.vmsd-search-input {
  width: 100%;
  min-height: 52px;
  border: 0;
  border-radius: 0;
  background-color: var(--vmsd-bg);
  color: var(--vmsd-ink);
  font: inherit;
  padding: 0 44px 0 48px;
}

.vmsd-search-input:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--vmsd-primary);
}

.vmsd-search-clear {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-grid;
  width: 18px;
  height: 18px;
  place-items: center;
  transform: translateY(-50%);
  border-radius: 999px;
  color: var(--vmsd-muted);
}

.vmsd-bulk-actions {
  display: block;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid var(--vmsd-divider);
  background: var(--vmsd-section-bg);
}

.vmsd-inline-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 39px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--vmsd-ink);
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  padding: 10px 14px;
  text-align: left;
}

.vmsd-inline-button:hover {
  background-color: var(--vmsd-surface);
}

.vmsd-inline-button:disabled {
  opacity: 0.58;
  cursor: not-allowed;
}

.vmsd-add-button {
  justify-content: center;
  border-top: 1px solid var(--vmsd-divider);
  color: var(--vmsd-primary);
  font-weight: 700;
}

.vmsd-list {
  max-height: 300px;
  overflow: auto;
  padding: 8px;
  background: var(--vmsd-bg);
  scrollbar-width: thin;
  scrollbar-color: rgba(125, 119, 134, 0.34) transparent;
}

.vmsd-list:focus {
  outline: none;
}

.vmsd-menu ::-webkit-scrollbar {
  width: 10px;
}

.vmsd-menu ::-webkit-scrollbar-thumb {
  background: rgba(125, 119, 134, 0.34);
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: padding-box;
}

.vmsd-menu ::-webkit-scrollbar-track {
  background: transparent;
}

.vmsd-option {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 0;
  margin: 4px;
  padding: 12px 14px;
  border-radius: 14px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  line-height: 1.35;
}

.vmsd-option:hover {
  background-color: var(--vmsd-surface);
}

.vmsd-option:focus-visible {
  outline: 3px solid var(--vmsd-focus);
  outline-offset: 1px;
}

.vmsd-option.vmsd-selected {
  background-color: var(--vmsd-primary-soft);
  color: var(--vmsd-primary);
}

.vmsd-option.vmsd-disabled {
  opacity: 0.54;
  cursor: not-allowed;
}

.vmsd-checkbox {
  position: relative;
  box-sizing: content-box;
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 0;
  border: 2px solid var(--vmsd-border-strong);
  border-radius: 6px;
  background-color: var(--vmsd-bg);
}

.vmsd-checkbox[data-checked="true"] {
  border-color: var(--vmsd-primary);
  background-color: var(--vmsd-primary);
}

.vmsd-checkbox[data-checked="true"]::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 4px;
  margin-top: 0;
  border-color: #fff;
  border-style: solid;
  border-width: 0 0 2px 2px;
  transform: translate(-50%, -58%) rotate(-45deg);
  transform-origin: 50%;
}

.vmsd-option-body {
  min-width: 0;
  flex: 1;
}

.vmsd-option-label {
  font-weight: 500;
}

.vmsd-option-hint {
  display: block;
  margin-top: 3px;
  color: var(--vmsd-muted);
  font-size: 12px;
}

.vmsd-group {
  margin-bottom: 8px;
}

.vmsd-group:last-child {
  margin-bottom: 0;
}

.vmsd-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 9px 10px;
  color: var(--vmsd-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.vmsd-group-action {
  color: var(--vmsd-primary);
  font-size: 12px;
  font-weight: 800;
}

.vmsd-state {
  padding: 18px 12px;
  text-align: center;
  color: var(--vmsd-muted);
}

.theme-material,
.skin-material {
  --vmsd-primary: #3f51b5;
  --vmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f7fb;
  --vmsd-surface-muted: #e8eaf6;
  --vmsd-border: #c5cae9;
  --vmsd-border-strong: #7986cb;
  --vmsd-ink: #212121;
  --vmsd-muted: #5f6368;
  --vmsd-chip-bg: #e8eaf6;
  --vmsd-chip-text: #303f9f;
  --vmsd-chip-remove: #303f9f;
  --vmsd-divider: rgba(125, 119, 134, 0.16);
  --vmsd-section-bg: #f5f7fb;
  --vmsd-focus: rgba(63, 81, 181, 0.32);
  --vmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --vmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
}

.theme-material .vmsd-trigger,
.skin-material .vmsd-trigger {
  min-height: 56px;
  border-radius: 18px;
  padding: 11px 54px 11px 16px;
}

.theme-material .vmsd-menu,
.skin-material .vmsd-menu,
.vmsd-menu.theme-material,
.vmsd-menu.skin-material {
  border-radius: 22px;
}

.theme-material .vmsd-option,
.skin-material .vmsd-option {
  border-radius: 14px;
  margin: 4px;
  padding: 12px 14px;
}

.theme-dark,
.skin-dark {
  --vmsd-primary: #8ab4f8;
  --vmsd-primary-soft: rgba(138, 180, 248, 0.18);
  --vmsd-bg: #151a23;
  --vmsd-surface: #202736;
  --vmsd-surface-muted: #111722;
  --vmsd-border: #384456;
  --vmsd-border-strong: #8ab4f8;
  --vmsd-ink: #edf2f7;
  --vmsd-muted: #aab6c5;
  --vmsd-chip-bg: #263247;
  --vmsd-chip-text: #d7e6ff;
  --vmsd-chip-remove: #d7e6ff;
  --vmsd-divider: rgba(170, 182, 197, 0.18);
  --vmsd-section-bg: #202736;
  --vmsd-focus: rgba(138, 180, 248, 0.34);
  --vmsd-shadow: 0 20px 50px rgba(0, 0, 0, 0.42);
  --vmsd-shadow-soft: 0 1px 2px rgba(0, 0, 0, 0.45), 0 10px 24px rgba(0, 0, 0, 0.28);
}

.theme-custom,
.skin-custom {
  --vmsd-primary: var(--stackline-ms-primary, #0f766e);
  --vmsd-primary-soft: var(--stackline-ms-primary-soft, rgba(15, 118, 110, 0.14));
  --vmsd-bg: var(--stackline-ms-surface, #ffffff);
  --vmsd-surface: var(--stackline-ms-surface-soft, #ecfdf5);
  --vmsd-surface-muted: var(--stackline-ms-surface-muted, #d1fae5);
  --vmsd-border: var(--stackline-ms-outline, #99f6e4);
  --vmsd-border-strong: var(--stackline-ms-outline-strong, #0f766e);
  --vmsd-ink: var(--stackline-ms-on-surface, #102a2a);
  --vmsd-muted: var(--stackline-ms-on-surface-muted, #47615f);
  --vmsd-chip-bg: var(--stackline-ms-chip-bg, #ccfbf1);
  --vmsd-chip-text: var(--stackline-ms-chip-text, #115e59);
  --vmsd-chip-remove: var(--stackline-ms-chip-remove, #115e59);
  --vmsd-divider: var(--stackline-ms-divider, rgba(15, 118, 110, 0.18));
  --vmsd-section-bg: var(--stackline-ms-section-bg, #ecfdf5);
  --vmsd-focus: var(--stackline-ms-focus, rgba(15, 118, 110, 0.28));
  --vmsd-shadow: var(--stackline-ms-shadow, 0 18px 42px rgba(15, 118, 110, 0.15));
  --vmsd-shadow-soft: var(--stackline-ms-shadow-soft, 0 1px 2px rgba(15, 118, 110, 0.16), 0 8px 18px rgba(15, 118, 110, 0.09));
}

.theme-brand,
.skin-brand {
  --stackline-ms-primary: #7c3aed;
  --stackline-ms-primary-soft: rgba(124, 58, 237, 0.14);
  --stackline-ms-surface: #ffffff;
  --stackline-ms-surface-soft: #f5f3ff;
  --stackline-ms-surface-muted: #ede9fe;
  --stackline-ms-outline: #c4b5fd;
  --stackline-ms-outline-strong: #7c3aed;
  --stackline-ms-on-surface: #22183f;
  --stackline-ms-on-surface-muted: #6b5d80;
  --stackline-ms-chip-bg: #ede9fe;
  --stackline-ms-chip-text: #5b21b6;
  --stackline-ms-chip-remove: #5b21b6;
  --stackline-ms-divider: rgba(124, 58, 237, 0.16);
  --stackline-ms-section-bg: #f5f3ff;
}

.theme-classic,
.skin-classic {
  --vmsd-primary: #0079fe;
  --vmsd-primary-soft: #e9f4ff;
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f5f5;
  --vmsd-surface-muted: #e9f4ff;
  --vmsd-border: #cccccc;
  --vmsd-border-strong: #0079fe;
  --vmsd-ink: #333333;
  --vmsd-muted: #333333;
  --vmsd-chip-bg: #0079fe;
  --vmsd-chip-text: #ffffff;
  --vmsd-chip-remove: #ffffff;
  --vmsd-focus: rgba(0, 121, 254, 0.26);
  --vmsd-divider: #cccccc;
  --vmsd-section-bg: #ffffff;
  --vmsd-shadow: 0 1px 5px #959595;
  --vmsd-shadow-soft: 0 1px 5px #959595;
  color: #333333;
}

.theme-classic .vmsd-trigger,
.skin-classic .vmsd-trigger {
  align-content: center;
  flex-wrap: nowrap;
  gap: 6px;
  min-height: 42px;
  border-radius: 3px;
  padding: 10px 68px 10px 10px;
  border: 1px solid #cccccc;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
  color: #333333;
  font-size: 14px;
  line-height: 1.35;
}

.theme-classic .vmsd-trigger:hover,
.skin-classic .vmsd-trigger:hover,
.theme-classic[data-open="true"] .vmsd-trigger,
.skin-classic[data-open="true"] .vmsd-trigger {
  border-color: #cccccc;
  box-shadow: 0 1px 5px #959595;
}

.theme-classic .vmsd-trigger.vmsd-disabled,
.skin-classic .vmsd-trigger.vmsd-disabled {
  background: #cccccc;
  opacity: 1;
}

.theme-classic .vmsd-placeholder,
.theme-classic .vmsd-single-value,
.skin-classic .vmsd-placeholder,
.skin-classic .vmsd-single-value {
  color: #333333;
  font-size: 14px;
}

.theme-classic .vmsd-value,
.theme-classic .vmsd-badge-list,
.skin-classic .vmsd-value,
.skin-classic .vmsd-badge-list {
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  min-width: 0;
}

.theme-classic .vmsd-badge,
.skin-classic .vmsd-badge {
  display: inline-block;
  min-height: 0;
  margin: 2px 0 0;
  border-radius: 2px;
  padding: 2px 24px 2px 6px;
  box-shadow: none;
  color: #ffffff;
  line-height: 1.4;
}

.theme-classic .vmsd-badge-label,
.skin-classic .vmsd-badge-label {
  display: inline;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

.theme-classic .vmsd-badge-remove,
.skin-classic .vmsd-badge-remove {
  right: 5px;
  width: 14px;
  height: 14px;
  color: #ffffff;
}

.theme-classic .vmsd-badge-remove .vmsd-icon,
.skin-classic .vmsd-badge-remove .vmsd-icon {
  width: 9px;
  height: 9px;
}

.theme-classic .vmsd-overflow,
.skin-classic .vmsd-overflow {
  min-width: 24px;
  min-height: 20px;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}

.theme-classic .vmsd-actions,
.skin-classic .vmsd-actions {
  right: 10px;
  gap: 12px;
}

.theme-classic .vmsd-clear,
.skin-classic .vmsd-clear {
  width: 18px;
  height: 18px;
  color: #333333;
}

.theme-classic .vmsd-clear .vmsd-icon,
.skin-classic .vmsd-clear .vmsd-icon {
  width: 11px;
  height: 11px;
}

.theme-classic .vmsd-arrow-button,
.skin-classic .vmsd-arrow-button {
  width: 20px;
  height: 20px;
  color: #333333;
}

.theme-classic .vmsd-menu,
.skin-classic .vmsd-menu,
.vmsd-menu.theme-classic,
.vmsd-menu.skin-classic {
  overflow: visible;
  border: 1px solid #cccccc;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
}

.vmsd-menu.theme-classic.vmsd-bottom,
.vmsd-menu.skin-classic.vmsd-bottom {
  top: calc(100% + 14px);
}

.vmsd-menu.theme-classic.vmsd-top,
.vmsd-menu.skin-classic.vmsd-top {
  bottom: calc(100% + 14px);
}

.vmsd-menu.vmsd-body-overlay.vmsd-bottom,
.vmsd-menu.vmsd-body-overlay.vmsd-top {
  bottom: auto;
}

.vmsd-menu.theme-classic::before,
.vmsd-menu.theme-classic::after,
.vmsd-menu.skin-classic::before,
.vmsd-menu.skin-classic::after {
  content: "";
  position: absolute;
  left: 15px;
  width: 0;
  height: 0;
  border-right: 13px solid transparent;
  border-left: 13px solid transparent;
}

.vmsd-menu.theme-classic.vmsd-bottom::before,
.vmsd-menu.skin-classic.vmsd-bottom::before {
  top: -15px;
  border-bottom: 15px solid #cccccc;
}

.vmsd-menu.theme-classic.vmsd-bottom::after,
.vmsd-menu.skin-classic.vmsd-bottom::after {
  top: -14px;
  border-bottom: 15px solid #ffffff;
}

.vmsd-menu.theme-classic.vmsd-top::before,
.vmsd-menu.skin-classic.vmsd-top::before {
  bottom: -15px;
  border-top: 15px solid #cccccc;
}

.vmsd-menu.theme-classic.vmsd-top::after,
.vmsd-menu.skin-classic.vmsd-top::after {
  bottom: -14px;
  border-top: 15px solid #ffffff;
}

.theme-classic .vmsd-toolbar,
.skin-classic .vmsd-toolbar,
.vmsd-menu.theme-classic .vmsd-toolbar,
.vmsd-menu.skin-classic .vmsd-toolbar {
  gap: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .vmsd-search-shell,
.skin-classic .vmsd-search-shell,
.vmsd-menu.theme-classic .vmsd-search-shell,
.vmsd-menu.skin-classic .vmsd-search-shell {
  min-height: 35px;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .vmsd-search-icon,
.skin-classic .vmsd-search-icon,
.vmsd-menu.theme-classic .vmsd-search-icon,
.vmsd-menu.skin-classic .vmsd-search-icon {
  left: 13px;
  width: 18px;
  height: 18px;
}

.theme-classic .vmsd-search-input,
.skin-classic .vmsd-search-input,
.vmsd-menu.theme-classic .vmsd-search-input,
.vmsd-menu.skin-classic .vmsd-search-input {
  min-height: 35px;
  height: 35px;
  padding: 0 35px;
  border: 0;
  color: #333333;
}

.theme-classic .vmsd-search-input:focus,
.skin-classic .vmsd-search-input:focus,
.vmsd-menu.theme-classic .vmsd-search-input:focus,
.vmsd-menu.skin-classic .vmsd-search-input:focus {
  box-shadow: none;
}

.theme-classic .vmsd-search-clear,
.skin-classic .vmsd-search-clear,
.vmsd-menu.theme-classic .vmsd-search-clear,
.vmsd-menu.skin-classic .vmsd-search-clear {
  right: 13px;
}

.theme-classic .vmsd-bulk-actions,
.skin-classic .vmsd-bulk-actions,
.vmsd-menu.theme-classic .vmsd-bulk-actions,
.vmsd-menu.skin-classic .vmsd-bulk-actions {
  border-top: 0;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .vmsd-inline-button,
.skin-classic .vmsd-inline-button,
.vmsd-menu.theme-classic .vmsd-inline-button,
.vmsd-menu.skin-classic .vmsd-inline-button {
  min-height: 35px;
  border-radius: 0;
  color: #333333;
  font-weight: 400;
  padding: 10px;
}

.theme-classic .vmsd-inline-button:hover,
.skin-classic .vmsd-inline-button:hover,
.vmsd-menu.theme-classic .vmsd-inline-button:hover,
.vmsd-menu.skin-classic .vmsd-inline-button:hover {
  background: #f5f5f5;
}

.theme-classic .vmsd-list,
.skin-classic .vmsd-list,
.vmsd-menu.theme-classic .vmsd-list,
.vmsd-menu.skin-classic .vmsd-list {
  margin: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .vmsd-option,
.skin-classic .vmsd-option,
.vmsd-menu.theme-classic .vmsd-option,
.vmsd-menu.skin-classic .vmsd-option {
  border-radius: 0;
  margin: 0;
  padding: 10px;
  color: #333333;
  line-height: 1.35;
}

.theme-classic .vmsd-option:hover,
.skin-classic .vmsd-option:hover,
.vmsd-menu.theme-classic .vmsd-option:hover,
.vmsd-menu.skin-classic .vmsd-option:hover {
  background: #f5f5f5;
}

.theme-classic .vmsd-option.vmsd-selected,
.skin-classic .vmsd-option.vmsd-selected,
.vmsd-menu.theme-classic .vmsd-option.vmsd-selected,
.vmsd-menu.skin-classic .vmsd-option.vmsd-selected {
  background: #e9f4ff;
  color: #333333;
}

.theme-classic .vmsd-checkbox,
.skin-classic .vmsd-checkbox,
.vmsd-menu.theme-classic .vmsd-checkbox,
.vmsd-menu.skin-classic .vmsd-checkbox {
  width: 14px;
  height: 14px;
  border: 2px solid #0079fe;
  border-radius: 0;
  background: #ffffff;
}

.theme-classic .vmsd-checkbox[data-checked="true"],
.skin-classic .vmsd-checkbox[data-checked="true"],
.vmsd-menu.theme-classic .vmsd-checkbox[data-checked="true"],
.vmsd-menu.skin-classic .vmsd-checkbox[data-checked="true"] {
  border-color: #0079fe;
  background: #0079fe;
}

.theme-classic .vmsd-checkbox[data-checked="true"]::after,
.skin-classic .vmsd-checkbox[data-checked="true"]::after,
.vmsd-menu.theme-classic .vmsd-checkbox[data-checked="true"]::after,
.vmsd-menu.skin-classic .vmsd-checkbox[data-checked="true"]::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 3px;
  margin-top: 0;
  border-width: 0 0 3px 3px;
  transform: translate(-50%, -58%) rotate(-45deg);
}

.theme-classic .vmsd-option-label,
.skin-classic .vmsd-option-label,
.vmsd-menu.theme-classic .vmsd-option-label,
.vmsd-menu.skin-classic .vmsd-option-label {
  color: #000000;
  font-weight: 300;
}

.theme-classic .vmsd-group-header,
.skin-classic .vmsd-group-header,
.vmsd-menu.theme-classic .vmsd-group-header,
.vmsd-menu.skin-classic .vmsd-group-header {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: capitalize;
}

.custom-class-example {
  --vmsd-primary: #0f766e;
  --vmsd-primary-soft: #ccfbf1;
  --vmsd-bg: #f8fffd;
  --vmsd-surface: #ecfdf5;
  --vmsd-border: #99f6e4;
  --vmsd-border-strong: #0f766e;
}

@media (max-width: 720px) {
  .vmsd-trigger {
    align-items: center;
    padding-right: 54px;
  }
}
`;function Ph(){if(typeof document>`u`||document.getElementById(Mh))return;let e=document.createElement(`style`);e.id=Mh,e.textContent=Nh,document.head.appendChild(e)}var Fh={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`,keyboard:{space:!0,spaceOptionAction:`toggle`,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0}};function Ih(e){return e===`remove`?`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`:e===`clear`?`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`:e===`search`?`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`:e===`angle-up`?`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`}function Lh(e,t,n=`vmsd-icon`){return e(`svg`,{class:n,attrs:{viewBox:t===`remove`?`0 0 47.971 47.971`:t===`clear`?`0 0 51.976 51.976`:t===`search`?`0 0 615.52 615.52`:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`}},[e(`path`,{attrs:{d:Ih(t)}})])}function Rh(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function zh(e){if(!e)return null;let t={};for(let[n,r]of Object.entries(e))if(n===`attrs`||n===`domProps`)Object.assign(t,r);else if(n===`on`&&r&&typeof r==`object`)for(let[e,n]of Object.entries(r))t[`on${Rh(e)}`]=n;else t[n]=r;return t}var X=(...e)=>{let[t,n,r]=e;return e.length===1?xc(t):e.length===2&&(Array.isArray(n)||typeof n==`string`||typeof n==`number`||n==null)?xc(t,null,n):xc(t,zh(n),r)};function Bh(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function Vh(e,t){if(Bh(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function Hh(e,t){if(Bh(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return Vh(e,t)}function Uh(e){return!Bh(e)&&!!e.disabled}function Wh(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set;if(i.add(Vh(e,n).toLowerCase()),!Bh(e)){let t=n.searchBy.length?n.searchBy:[n.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}for(let e of i)if(e.indexOf(r)>=0)return!0;return!1}function Gh(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!Bh(e)){let n=t.groupBy,r=e;if(n in r)return String(r[n]||``)}return``}function Kh(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=Gh(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function qh(e,t,n){let r=new Map;for(let t of e)r.set(Hh(t,n),t);for(let e of t){let t=Hh(e,n);r.has(t)||r.set(t,e)}return Array.from(r.values())}function Jh(e,t,n,r){return e?e(n,r,t):null}function Yh(e,t,n){let r=e.$slots&&e.$slots[t];return typeof r==`function`?r(n):null}function Xh(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/["\\]/g,`\\$&`)}function Zh(e){return e.key===`Enter`||e.key===` `||e.key===`Spacebar`}function Qh(e){return e.key===` `||e.key===`Spacebar`}function $h(e){let t=e;return t?t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable:!1}var eg={name:`VueMultiselectDropdown`,emits:[`update:modelValue`,`input`,`update:selectedItems`,`change`,`select`,`de-select`,`select-all`,`de-select-all`,`group-select`,`group-de-select`,`scroll-to-end`,`add-filter-new-item`,`open`,`close`],props:{data:{type:Array,default:()=>[]},modelValue:{type:Array,default:void 0},value:{type:Array,default:void 0},selectedItems:{type:Array,default:void 0},defaultSelectedItems:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},renderItem:{type:Function,default:void 0},renderBadge:{type:Function,default:void 0},renderEmptyState:{type:Function,default:void 0}},data(){return{isOpen:!1,query:``,focusedKey:``,internalSelected:Array.isArray(this.defaultSelectedItems)?this.defaultSelectedItems.slice():[],menuStyle:{},bodyListMaxHeight:void 0,menuPlaceholder:null,menuAttachedToBody:!1,effectivePosition:`bottom`,instanceId:`stackline-vmsd-${Math.random().toString(36).slice(2)}`}},computed:{resolvedSettings(){let e=this.settings||{},t={...Fh,...e,keyboard:{...Fh.keyboard,...e.keyboard||{}}};typeof e.escapeToClose==`boolean`&&e.keyboard?.escape==null&&(t.keyboard.escape=e.escapeToClose),typeof t.keyboard.backspace==`boolean`&&(t.keyboard.backspaceRemovesLastWhenSearchEmpty=t.keyboard.backspace);let n=t.skin||t.theme||`classic`;return{...t,skin:n,disabled:!!(t.disabled||this.disabled),searchBy:Array.isArray(t.searchBy)?t.searchBy:[]}},selected(){return Array.isArray(this.selectedItems)?this.selectedItems:Array.isArray(this.modelValue)?this.modelValue:Array.isArray(this.value)?this.value:this.internalSelected},filteredItems(){let e=this.resolvedSettings;return(this.data||[]).filter(t=>Wh(t,this.query,e))},groupedItems(){return Kh(this.filteredItems,this.resolvedSettings)},visibleSelected(){let e=this.resolvedSettings.badgeShowLimit;return this.selected.slice(0,e)},hiddenSelectedCount(){return Math.max(0,this.selected.length-this.visibleSelected.length)},openDirection(){return this.effectivePosition===`top`?`up`:`down`},shouldAppendToBody(){return!!(this.resolvedSettings.appendToBody||this.resolvedSettings.tagToBody)}},watch:{isOpen(e){this.$nextTick(()=>{e?(this.attachMenuToBody(),this.updateMenuPosition(),this.resolvedSettings.searchAutofocus&&this.resolvedSettings.enableSearchFilter&&this.focusSearch(),this.$emit(`open`)):(this.restoreMenuToComponent(),this.menuStyle={},this.bodyListMaxHeight=void 0,this.$emit(`close`))})},selected(){this.$nextTick(this.updateMenuPosition)},filteredItems(){this.$nextTick(this.updateMenuPosition)},settings:{deep:!0,handler(){this.$nextTick(this.updateMenuPosition)}}},mounted(){Ph(),document.addEventListener(`click`,this.onDocumentClick,!0),document.addEventListener(`keydown`,this.onDocumentKeydown,!0),window.addEventListener(`resize`,this.updateMenuPosition),window.addEventListener(`scroll`,this.updateMenuPosition,!0)},beforeUnmount(){document.removeEventListener(`click`,this.onDocumentClick,!0),document.removeEventListener(`keydown`,this.onDocumentKeydown,!0),window.removeEventListener(`resize`,this.updateMenuPosition),window.removeEventListener(`scroll`,this.updateMenuPosition,!0),this.restoreMenuToComponent()},methods:{getLabel(e){return Vh(e,this.resolvedSettings)},getKey(e){return Hh(e,this.resolvedSettings)},getOptionId(e){return`${this.instanceId}-option-${e}`},isSelected(e){let t=this.getKey(e);return this.selected.some(e=>this.getKey(e)===t)},visibleSelectableItems(){return this.filteredItems.filter(e=>!Uh(e))},emitSelection(e){Array.isArray(this.selectedItems)||Array.isArray(this.modelValue)||Array.isArray(this.value)||(this.internalSelected=e),this.$emit(`update:modelValue`,e),this.$emit(`input`,e),this.$emit(`update:selectedItems`,e),this.$emit(`change`,e)},openDropdown(){this.resolvedSettings.disabled||(this.isOpen=!0)},closeDropdown(){this.isOpen=!1,this.query=``,this.focusedKey=``},toggleDropdown(){this.isOpen?this.closeDropdown():this.openDropdown()},focusSearch(){this.isOpen||this.openDropdown();let e=this.$refs.searchInput;e&&typeof e.focus==`function`&&e.focus()},clearSelection(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.selected.slice();this.emitSelection([]),this.$emit(`de-select-all`,t)},selectAll(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.resolvedSettings,n=this.visibleSelectableItems();if(n.length>0&&n.every(e=>this.isSelected(e))){let e=new Set(n.map(e=>this.getKey(e))),t=this.selected.filter(t=>!e.has(this.getKey(t)));this.emitSelection(t),this.$emit(`de-select-all`,n);return}let r=t.limitSelection?Math.max(t.limitSelection-this.selected.length,0):2**53-1,i=new Set(this.selected.map(e=>this.getKey(e))),a=n.filter(e=>!i.has(this.getKey(e))).slice(0,r),o=t.singleSelection?n.slice(0,1):qh(this.selected,a,t);this.emitSelection(o),this.$emit(`select-all`,o)},deSelectAll(e){this.clearSelection(e)},selectGroup(e,t,n){n.preventDefault(),n.stopPropagation();let r=this.resolvedSettings,i=t.filter(e=>!Uh(e));if(i.every(e=>this.isSelected(e))){let t=new Set(i.map(e=>this.getKey(e))),n=this.selected.filter(e=>!t.has(this.getKey(e)));this.emitSelection(n),this.$emit(`group-de-select`,e,i);return}let a=r.singleSelection?i.slice(0,1):qh(this.selected,i,r);this.emitSelection(a),this.$emit(`group-select`,e,i)},toggleItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.isSelected(e),r=!!this.resolvedSettings.limitSelection&&this.selected.length>=this.resolvedSettings.limitSelection;if(this.resolvedSettings.disabled||Uh(e)||r&&!n)return;let i=this.getKey(e);if(this.selected.some(e=>this.getKey(e)===i)){if(this.resolvedSettings.singleSelection){this.closeDropdown();return}let t=this.selected.filter(e=>this.getKey(e)!==i);this.emitSelection(t),this.$emit(`de-select`,e);return}let a=this.resolvedSettings.singleSelection?[e]:this.selected.concat(e);this.resolvedSettings.limitSelection>0&&(a=a.slice(0,this.resolvedSettings.limitSelection)),this.emitSelection(a),this.$emit(`select`,e),(this.resolvedSettings.singleSelection||this.resolvedSettings.closeDropDownOnSelection)&&this.closeDropdown()},removeItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.getKey(e),r=this.selected.filter(e=>this.getKey(e)!==n);this.emitSelection(r),this.$emit(`de-select`,e)},removeLastSelected(){let e=this.selected[this.selected.length-1];e&&this.removeItem(e)},addFilterItem(e){e.preventDefault(),e.stopPropagation();let t=this.query.trim();if(!t)return;let n={[this.resolvedSettings.primaryKey]:t.toLowerCase().replace(/\s+/g,`-`),[this.resolvedSettings.labelKey]:t};this.$emit(`add-filter-new-item`,t,n),this.toggleItem(n),this.query=``},onTriggerKeydown(e){let t=this.resolvedSettings.keyboard;e.key===`Enter`||Qh(e)&&t.space!==!1?(e.preventDefault(),this.toggleDropdown()):t.arrows!==!1&&e.key===`ArrowDown`?(e.preventDefault(),this.openDropdown(),this.focusFirstOption()):t.arrows!==!1&&e.key===`ArrowUp`?(e.preventDefault(),this.openDropdown(),this.focusLastOption()):t.escape!==!1&&e.key===`Escape`&&this.closeDropdown()},onListKeydown(e){let t=this.resolvedSettings.keyboard;if(t.escape!==!1&&e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.closeDropdown();return}if(e.key===`Tab`)return;if($h(e.target)){if(e.key===`Backspace`&&!this.query&&t.backspaceRemovesLastWhenSearchEmpty===!0){e.preventDefault(),e.stopPropagation(),this.removeLastSelected();return}if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return}if(t.arrows===!1&&[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let n=this.visibleSelectableItems();if(!n.length)return;let r=Math.max(0,n.findIndex(e=>this.getKey(e)===this.focusedKey));if(e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation();let t=n[Math.min(r+1,n.length-1)];this.focusOption(t)}else if(e.key===`ArrowUp`){e.preventDefault(),e.stopPropagation();let t=n[Math.max(r-1,0)];this.focusOption(t)}else if(e.key===`Home`)e.preventDefault(),e.stopPropagation(),this.focusFirstOption();else if(e.key===`End`)e.preventDefault(),e.stopPropagation(),this.focusLastOption();else if(Zh(e)){if(Qh(e)&&t.space===!1)return;e.preventDefault(),e.stopPropagation();let r=n.find(e=>this.getKey(e)===this.focusedKey)||n[0];if(this.toggleItem(r),t.spaceOptionAction===`toggle-and-next`){let e=n.findIndex(e=>this.getKey(e)===this.getKey(r)),t=n[Math.min(e+1,n.length-1)];t&&this.focusOption(t)}else this.focusOption(r)}},focusFirstOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems()[0];e&&this.focusOption(e)})},focusLastOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems(),t=e[e.length-1];t&&this.focusOption(t)})},focusOption(e){let t=this.getKey(e);this.focusedKey=t,this.$nextTick(()=>{let e=this.$refs.menu?.querySelector(`[data-vmsd-key="${Xh(t)}"]`);e&&(e.focus(),e.scrollIntoView({block:`nearest`}))})},onInlineKeydown(e){Zh(e)&&e.stopPropagation(),this.resolvedSettings.keyboard.arrows!==!1&&e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusFirstOption()),this.resolvedSettings.keyboard.arrows!==!1&&e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusLastOption())},onRemoveButtonKeydown(e,t){this.resolvedSettings.keyboard.deleteRemovesFocusedBadge!==!1&&(t.key===`Backspace`||t.key===`Delete`)?this.removeItem(e,t):this.onInlineKeydown(t)},onTriggerClick(e){let t=e.target;t&&t.closest(`button`)||this.toggleDropdown()},onDocumentClick(e){if(!this.isOpen)return;let t=this.$el,n=this.$refs.menu,r=e.target;t&&t.contains(r)||n&&n.contains(r)||this.closeDropdown()},onDocumentKeydown(e){this.isOpen&&this.resolvedSettings.keyboard.escape!==!1&&e.key===`Escape`&&this.closeDropdown()},onListScroll(e){let t=e.target;if(!t)return;let n={scrollTop:t.scrollTop,scrollHeight:t.scrollHeight,clientHeight:t.clientHeight};t.scrollTop+t.clientHeight>=t.scrollHeight-4&&this.$emit(`scroll-to-end`,n)},attachMenuToBody(){if(!this.shouldAppendToBody||!this.isOpen||typeof document>`u`)return;let e=this.$refs.menu;e&&e.parentNode!==document.body&&(!this.menuPlaceholder&&e.parentNode&&(this.menuPlaceholder=document.createComment(`stackline-vue-multiselect-menu`),e.parentNode.insertBefore(this.menuPlaceholder,e)),document.body.appendChild(e),this.menuAttachedToBody=!0)},restoreMenuToComponent(){let e=this.$refs.menu;e&&this.menuPlaceholder&&this.menuPlaceholder.parentNode&&(this.menuPlaceholder.parentNode.insertBefore(e,this.menuPlaceholder.nextSibling),this.menuPlaceholder.parentNode.removeChild(this.menuPlaceholder),this.menuPlaceholder=null,this.menuAttachedToBody=!1,this.menuStyle={})},updateMenuPosition(){if(!this.isOpen||typeof window>`u`)return;let e=this.$refs.trigger,t=this.$refs.menu;if(!e||!t)return;let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=n.top,a=r-n.bottom,o=t.offsetHeight||Math.min(this.resolvedSettings.maxHeight+92,420),s=this.resolvedSettings.position===`top`?`top`:`bottom`,c=i>a+48,l=this.resolvedSettings.autoPosition?a<o&&c&&o<i?`top`:`bottom`:s;if(this.effectivePosition=l,!this.shouldAppendToBody){this.bodyListMaxHeight=void 0;return}let u=this.$refs.list?.offsetHeight||Math.min(this.resolvedSettings.maxHeight,o),d=Math.max(0,o-u),f=l===`top`?Math.max(0,n.top-8-8):Math.max(0,r-n.bottom-8-8),p=o>0?Math.max(0,Math.min(this.resolvedSettings.maxHeight,f-d)):this.resolvedSettings.maxHeight,m=d+p,h=l===`top`?n.top-m-8:n.bottom+8,g=l===`top`?Math.max(8,h):h,_=Math.max(0,window.innerWidth-16),v=Math.min(n.width,_),y=Math.min(Math.max(8,n.left),window.innerWidth-v-8),b={position:`fixed`,top:`${g}px`,left:`${y}px`,width:`${v}px`,maxWidth:`${_}px`,zIndex:`100000`,display:this.isOpen?`block`:`none`};this.bodyListMaxHeight=p,this.menuStyle=b}},render(){let e=this.resolvedSettings,t=String(e.skin||e.theme||`classic`),n=[`classic`,`material`,`dark`,`custom`].includes(t)?``:`theme-custom`,r=this.selected.length>0,i=this.visibleSelected,a=this.hiddenSelectedCount,o=e.clearAll&&r&&!e.disabled,s=this.visibleSelectableItems(),c=s.length>0&&s.every(e=>this.isSelected(e)),l=e.enableCheckAll&&!e.singleSelection||!!(e.addNewItemOnFilter&&this.query.trim()),u=[`vmsd-menu`,`vmsd-${this.effectivePosition}`,`skin-${t}`,`theme-${t}`,n,this.shouldAppendToBody?`vmsd-body-overlay`:``].filter(Boolean),d=e.singleSelection&&r?[X(`span`,{class:`vmsd-single-value`},[this.getLabel(this.selected[0])])]:i.map(t=>{let n=this.getLabel(t),r={item:t,label:n,selected:!0,disabled:!1,key:this.getKey(t),ariaSelected:`true`,ariaChecked:`true`,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},i=Yh(this,`badge`,r)||Jh(this.renderBadge,X,t,r),a=typeof e.removeItemAriaLabel==`function`?e.removeItemAriaLabel(t):`${e.removeItemAriaLabel}: ${n}`;return X(`span`,{class:`vmsd-badge`,key:this.getKey(t)},[X(`span`,{class:`vmsd-badge-label`},[i||n]),e.disabled?null:X(`button`,{class:`vmsd-badge-remove`,attrs:{type:`button`,"aria-label":a},on:{click:e=>this.removeItem(t,e),keydown:e=>this.onRemoveButtonKeydown(t,e)}},[Lh(X,`remove`)])])}),f=r?[X(`span`,{class:`vmsd-badge-list`},d)]:[X(`span`,{class:`vmsd-placeholder`},[Yh(this,`placeholder`,{label:e.text,state:{isOpen:this.isOpen,query:this.query}})||e.text])],p=X(`div`,{ref:`trigger`,class:[`vmsd-trigger`,e.disabled?`vmsd-disabled`:``],attrs:{role:`combobox`,tabindex:e.disabled?`-1`:`0`,"aria-label":r?`${e.ariaLabel}: ${this.selected.map(e=>this.getLabel(e)).join(`, `)}`:e.ariaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-haspopup":`listbox`,"aria-disabled":e.disabled?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`,"aria-activedescendant":this.focusedKey?this.getOptionId(this.focusedKey):void 0},on:{click:this.onTriggerClick,keydown:this.onTriggerKeydown}},[Yh(this,`trigger`,{selected:this.selected,label:r?this.selected.map(e=>this.getLabel(e)).join(`, `):e.text,isOpen:this.isOpen,clearSelection:this.clearSelection,toggleDropdown:this.toggleDropdown})||X(`div`,{class:`vmsd-value`},f),X(`div`,{class:`vmsd-actions`},[a>0?X(`span`,{class:`vmsd-overflow`,attrs:{"aria-label":`${a} more selected options`}},[`+${a}`]):null,o?X(`button`,{class:`vmsd-clear`,attrs:{type:`button`,"aria-label":e.clearAllAriaLabel},on:{click:e=>this.clearSelection(e),keydown:this.onInlineKeydown}},[Lh(X,`remove`)]):null,X(`button`,{class:`vmsd-arrow-button`,attrs:{type:`button`,disabled:e.disabled,"aria-label":this.isOpen?e.closeDropdownAriaLabel:e.openDropdownAriaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:e=>{e.preventDefault(),e.stopPropagation(),this.toggleDropdown()},keydown:this.onInlineKeydown}},[X(`span`,{class:`vmsd-arrow`,attrs:{"aria-hidden":`true`}},[Lh(X,this.isOpen?`angle-up`:`angle-down`)])])])]),m=e.enableSearchFilter?X(`div`,{class:`vmsd-search-shell`},[Lh(X,`search`,`vmsd-search-icon`),X(`input`,{ref:`searchInput`,class:`vmsd-search-input`,domProps:{value:this.query},attrs:{type:`text`,placeholder:e.searchPlaceholderText,"aria-label":e.searchAriaLabel},on:{input:e=>{this.query=String(e.target.value||``)},keydown:this.onListKeydown}}),this.query?X(`button`,{class:`vmsd-search-clear`,attrs:{type:`button`,"aria-label":e.clearSearchAriaLabel},on:{click:()=>this.query=``,keydown:this.onInlineKeydown}},[Lh(X,`clear`)]):null]):null,h=l?X(`div`,{class:`vmsd-bulk-actions`},[e.enableCheckAll&&!e.singleSelection?X(`button`,{class:`vmsd-inline-button vmsd-select-all-button`,attrs:{type:`button`,disabled:e.disabled||s.length===0},on:{click:e=>this.selectAll(e),keydown:this.onInlineKeydown}},[e.showCheckbox?X(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":c?`true`:`false`,"aria-hidden":`true`}}):null,X(`span`,[c?e.unSelectAllText:e.selectAllText])]):null,e.addNewItemOnFilter&&this.query.trim()?X(`button`,{class:`vmsd-inline-button vmsd-add-button`,attrs:{type:`button`},on:{click:this.addFilterItem,keydown:this.onInlineKeydown}},[`${e.addNewButtonText} "${this.query.trim()}"`]):null]):null,g=t=>{let n=this.getLabel(t),r=this.isSelected(t),i=!!e.limitSelection&&this.selected.length>=e.limitSelection,a=e.disabled||Uh(t)||i&&!r,o=this.getKey(t),s={item:t,label:n,selected:r,disabled:a,index:this.filteredItems.findIndex(e=>this.getKey(e)===o),group:Gh(t,e),key:o,optionId:this.getOptionId(o),ariaSelected:r?`true`:`false`,ariaChecked:r?`true`:`false`,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},c=Yh(this,`option`,s)||Jh(this.renderItem,X,t,s);return X(`div`,{key:o,class:[`vmsd-option`,r?`vmsd-selected`:``,a?`vmsd-disabled`:``],attrs:{id:this.getOptionId(o),role:`option`,tabindex:a?`-1`:`0`,"data-vmsd-option":`true`,"data-vmsd-key":o,"aria-disabled":a?`true`:`false`,"aria-selected":r?`true`:`false`,"aria-checked":r?`true`:`false`},on:{click:e=>{a||(this.toggleItem(t,e),this.focusOption(t))},focus:()=>this.focusedKey=o,mouseenter:()=>this.focusedKey=o,keydown:this.onListKeydown}},[e.showCheckbox?X(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":r?`true`:`false`,"aria-hidden":`true`}}):null,c||X(`div`,{class:`vmsd-option-body`},[X(`div`,{class:`vmsd-option-label`},[n]),!Bh(t)&&t.caption?X(`span`,{class:`vmsd-option-hint`},[String(t.caption)]):null])])},_=this.isOpen?e.loading?[X(`div`,{class:`vmsd-state`,attrs:{role:`status`}},[Yh(this,`loading`,{label:e.loadingText})||e.loadingText])]:e.groupBy?this.groupedItems.map(t=>X(`div`,{class:`vmsd-group`,key:t.name,attrs:{role:`group`,"aria-label":t.name}},[Yh(this,`group-header`,{group:t,selected:t.items.filter(e=>!Uh(e)).every(e=>this.isSelected(e)),selectGroup:e=>this.selectGroup(t.name,t.items,e)})||X(`div`,{class:`vmsd-group-header`},[X(`span`,[`${t.name} \xB7 ${t.items.length}`]),e.selectGroup?X(`button`,{class:`vmsd-group-action`,attrs:{type:`button`},on:{click:e=>this.selectGroup(t.name,t.items,e)}},[t.items.filter(e=>!Uh(e)).every(e=>this.isSelected(e))?`Unselect`:`Select`]):null]),t.items.map(g)])):this.filteredItems.map(g):[];if(this.isOpen&&!this.filteredItems.length&&!e.loading){let t=Yh(this,`empty`,{query:this.query,label:e.noDataLabel})||(this.renderEmptyState?this.renderEmptyState(this.query,X):e.noDataLabel);_.push(X(`div`,{class:`vmsd-state`},[t]))}let v=X(`div`,{ref:`menu`,class:u,style:{...this.shouldAppendToBody?this.menuStyle:{},display:this.isOpen?`block`:`none`},attrs:{role:`presentation`,"aria-hidden":this.isOpen?`false`:`true`},on:{keydown:this.onListKeydown}},[X(`div`,{class:`vmsd-toolbar`},[h,m]),X(`div`,{ref:`list`,class:`vmsd-list`,style:{maxHeight:`${this.shouldAppendToBody&&this.bodyListMaxHeight!=null?this.bodyListMaxHeight:e.maxHeight}px`},attrs:{id:`${this.instanceId}-listbox`,role:`listbox`,"aria-label":e.listboxAriaLabel,"aria-multiselectable":e.singleSelection?`false`:`true`},on:{scroll:this.onListScroll}},_),this.isOpen?Yh(this,`menu-footer`,{selected:this.selected,filteredItems:this.filteredItems,close:this.closeDropdown}):null]);return X(`div`,{class:[`vmsd-root`,`skin-${t}`,`theme-${t}`,n,this.isOpen?`vmsd-open`:``,this.effectivePosition===`top`?`vmsd-opens-up`:`vmsd-opens-down`,e.classes,r?`vmsd-has-selection`:``,o?`vmsd-has-clear`:``,a>0?`vmsd-has-overflow`:``],attrs:{"data-open":this.isOpen?`true`:`false`}},[p,v])}},tg={labelKey:`itemName`,primaryKey:`id`};function ng(e,t){return e==null?t:wn(e)}function rg(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function ig(e){let t=ng(e,{});return{...t,text:t.text||`Select`,singleSelection:!!t.singleSelection,labelKey:t.labelKey||tg.labelKey,primaryKey:t.primaryKey||tg.primaryKey,searchBy:Array.isArray(t.searchBy)?t.searchBy:[],groupBy:t.groupBy||``}}function ag(e,t){if(rg(e))return String(e);let n=[t.labelKey||tg.labelKey,`itemName`,`name`,`label`,`title`,`value`];for(let t of n)if(e[t]!=null)return String(e[t]);return JSON.stringify(e)}function og(e,t){if(rg(e))return String(e);let n=[t.primaryKey||tg.primaryKey,`id`,`value`,`key`];for(let t of n)if(e[t]!=null)return String(e[t]);return ag(e,t)}function sg(e,t){if(t.groupBy)return typeof t.groupBy==`function`?t.groupBy(e):!rg(e)&&e[t.groupBy]!=null?String(e[t.groupBy]):void 0}function cg(e){return!rg(e)&&!!e.disabled}function lg(e,t,n){let r=t.trim().toLowerCase();if(!r)return!0;let i=new Set([ag(e,n).toLowerCase()]);if(!rg(e)){let t=n.searchBy&&n.searchBy.length?n.searchBy:[n.labelKey||tg.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}return Array.from(i).some(e=>e.includes(r))}function ug(e,t,n){let r=new Map;for(let t of e)r.set(og(t,n),t);for(let e of t){let t=og(e,n);r.has(t)||r.set(t,e)}return Array.from(r.values())}function dg(e,t){if(t.singleSelection)return e.length;let n=Number(t.badgeShowLimit);return!Number.isFinite(n)||n<=0?e.length:Math.floor(n)}function fg(e={}){let t={...e};return t.className&&!t.class&&(t.class=t.className),delete t.className,t}function pg(e,t={}){let n=fg(t),r={...n,...e};(e.class||n.class)&&(r.class=[n.class,e.class].filter(Boolean).join(` `)),(e.style||n.style)&&(r.style={...typeof n.style==`object`?n.style:{},...typeof e.style==`object`?e.style:{}});for(let t of Object.keys(e))/^on[A-Z]/.test(t)&&typeof e[t]==`function`&&typeof n[t]==`function`&&(r[t]=(...r)=>{n[t](...r),e[t](...r)});return r}function mg(e={}){let t=F(e.defaultSelectedItems?e.defaultSelectedItems.slice():[]),n=F(``),r=B(()=>ig(e.settings)),i=B(()=>ng(e.data,[])),a=B(()=>ng(e.selectedItems,t.value)),o=B(()=>i.value.filter(e=>lg(e,n.value,r.value))),s=e=>{let t=og(e,r.value);return a.value.some(e=>og(e,r.value)===t)},c=n=>{e.selectedItems||(t.value=n),e.onChange?.(n)},l=e=>og(e,r.value),u=e=>ag(e,r.value),d=B(()=>o.value.filter(e=>!cg(e))),f=B(()=>{let e=dg(a.value,r.value);return a.value.slice(0,e)}),p=B(()=>Math.max(a.value.length-f.value.length,0)),m=B(()=>d.value.length>0&&d.value.every(e=>s(e))),h=t=>{let n=l(t),r=a.value.filter(e=>l(e)!==n);c(r),e.onDeSelect?.(t)},g=t=>{cg(t)||(r.value.singleSelection?(c([t]),e.onSelect?.(t)):s(t)||(c(a.value.concat(t)),e.onSelect?.(t)))},_=e=>{if(!cg(e)){if(s(e)){if(r.value.singleSelection)return;h(e)}else g(e)}},v=()=>{let t=a.value.slice();c([]),e.onDeSelectAll?.(t)},y=t=>{if(!t||!t.length){v();return}let n=new Set(t.map(l));c(a.value.filter(e=>!n.has(l(e)))),e.onDeSelectAll?.(t)},b=t=>{let n=(t||d.value).filter(e=>!cg(e)),i=a.value.length;c(r.value.singleSelection?n.slice(0,1):ug(a.value,n,r.value)),e.onSelectAll?.(n),!n.length&&i!==a.value.length&&e.onChange?.(a.value)};return{data:i,settings:r,filter:n,filteredItems:o,selectableItems:d,selectedItems:a,visibleBadges:f,hiddenBadgeCount:p,allFilteredSelected:m,isSelected:s,getItemKey:l,getItemLabel:u,setFilter:e=>{n.value=e},selectItem:g,removeItem:h,removeLastSelectedItem:()=>{let e=a.value[a.value.length-1];e&&h(e)},toggleItem:_,clearSelection:v,selectAll:b,deSelectAll:y,toggleGroup:(t,n)=>{let r=n.filter(e=>!cg(e));r.length&&(r.every(e=>s(e))?(y(r),e.onGroupDeSelect?.(t,r)):(b(r),e.onGroupSelect?.(t,r)))}}}function hg(e={}){let t=mg(e),n=F(!1),r=F(``),i=F(``),a=`stackline-vmsd-headless-${Math.random().toString(36).slice(2)}`,o=`${a}-listbox`,s=B(()=>{let e=0;return t.filteredItems.value.map(n=>({item:n,key:og(n,t.settings.value),label:ag(n,t.settings.value),selected:t.isSelected(n),disabled:cg(n),group:sg(n,t.settings.value),index:e++}))}),c=B(()=>i.value?`${a}-option-${i.value}`:void 0),l=B(()=>{let e=new Map;for(let t of s.value){let n=t.group||`Ungrouped`,r=e.get(n)||[];r.push(t),e.set(n,r)}return Array.from(e.entries()).map(([e,t])=>{let n=t.filter(e=>!e.disabled);return{name:e,items:t,enabledItems:n,selected:n.length>0&&n.every(e=>e.selected),disabled:n.length===0}})}),u=B(()=>t.selectedItems.value.length?t.selectedItems.value.map(e=>ag(e,t.settings.value)).join(`, `):t.settings.value.text||`Select`),d=()=>{n.value=!0,!i.value&&s.value[0]&&(i.value=s.value[0].key)},f=()=>{n.value=!1},p=()=>n.value?f():d(),m=e=>{let t=s.value.filter(e=>!e.disabled),n=Math.max(0,t.findIndex(e=>e.key===i.value)),r=t[Math.min(Math.max(n+e,0),t.length-1)];r&&(i.value=r.key)},h=(e={})=>pg({"data-stackline-multiselect":`true`,"data-open":n.value?`true`:`false`},e),g=(e={})=>pg({type:`button`,role:`combobox`,"aria-expanded":n.value?`true`:`false`,"aria-haspopup":`listbox`,"aria-controls":o,"aria-activedescendant":c.value,onClick:p,onKeydown:e=>{(e.key===`Enter`||e.key===` `||e.key===`Spacebar`)&&(e.preventDefault(),p()),e.key===`ArrowDown`&&(e.preventDefault(),d(),m(1)),e.key===`ArrowUp`&&(e.preventDefault(),d(),m(-1)),e.key===`Escape`&&f()}},e),_=(e={})=>pg({value:r.value,"aria-label":`Search options`,onInput:e=>{r.value=String(e.target.value||``),t.setFilter(r.value)},onKeydown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),m(1)),e.key===`ArrowUp`&&(e.preventDefault(),m(-1)),e.key===`Escape`&&f()}},e),v=(e={})=>pg({id:o,role:`listbox`,"aria-multiselectable":t.settings.value.singleSelection?`false`:`true`},e),y=e=>{e.disabled||(t.toggleItem(e.item),i.value=e.key,t.settings.value.singleSelection&&f())};return{isOpen:n,query:r,filter:t.filter,activeKey:i,activeDescendantId:c,listboxId:o,settings:t.settings,filteredItems:t.filteredItems,selectableItems:t.selectableItems,selectedItems:t.selectedItems,visibleBadges:t.visibleBadges,hiddenBadgeCount:t.hiddenBadgeCount,visibleOptions:s,groups:l,allFilteredSelected:t.allFilteredSelected,label:u,open:d,close:f,toggleOpen:p,clearSelection:t.clearSelection,selectAll:t.selectAll,deSelectAll:t.deSelectAll,toggleGroup:t.toggleGroup,toggleItem:t.toggleItem,selectItem:t.selectItem,removeItem:t.removeItem,removeLastSelectedItem:t.removeLastSelectedItem,isSelected:t.isSelected,setFilter:e=>{r.value=e,t.setFilter(e)},getItemKey:t.getItemKey,getItemLabel:t.getItemLabel,getRootProps:h,getTriggerProps:g,getSearchInputProps:_,getListboxProps:v,getOptionProps:(e,t={})=>pg({id:`${a}-option-${e.key}`,role:`option`,tabindex:e.disabled?-1:0,"aria-selected":e.selected?`true`:`false`,"aria-checked":e.selected?`true`:`false`,"aria-disabled":e.disabled?`true`:`false`,onMouseenter:()=>{i.value=e.key},onClick:()=>{y(e)},onKeydown:t=>{t.key===`ArrowDown`&&(t.preventDefault(),m(1)),t.key===`ArrowUp`&&(t.preventDefault(),m(-1)),(t.key===`Enter`||t.key===` `||t.key===`Spacebar`)&&(t.preventDefault(),y(e)),t.key===`Escape`&&f()}},t),getClearAllButtonProps:(e={})=>pg({type:`button`,"aria-label":`Clear selected options`,onClick:t.clearSelection},e),getRemoveButtonProps:(e,n={})=>pg({type:`button`,"aria-label":`Remove ${ag(e,t.settings.value)}`,onClick:()=>{t.removeItem(e)},onKeydown:n=>{(n.key===`Backspace`||n.key===`Delete`)&&(n.preventDefault(),t.removeItem(e))}},n)}}var gg=`3.1.6`,_g=Tc,vg=`https://stackblitz.com/github/alexandroit/stackline-vue-multiselect-vue-3`,yg=[`classic`,`material`,`dark`,`custom`,`brand`],bg=[{key:`space`,label:`Space`},{key:`tab`,label:`Tab`},{key:`arrows`,label:`Arrows`},{key:`escape`,label:`Escape`},{key:`backspaceRemovesLastWhenSearchEmpty`,label:`Empty search Backspace`},{key:`deleteRemovesFocusedBadge`,label:`Focused badge Delete`}],xg=[{key:`toggle`,label:`Toggle current`,description:`Space toggles the focused option and keeps focus there.`},{key:`toggle-and-next`,label:`Toggle + next`,description:`Space toggles the focused option and moves to the next enabled option.`}],Z=[[`Brazil`,`BR`,`Brasilia`,`South America`,`Americas`],[`Canada`,`CA`,`Ottawa`,`North America`,`Americas`],[`Portugal`,`PT`,`Lisbon`,`Southern Europe`,`Europe`],[`Argentina`,`AR`,`Buenos Aires`,`South America`,`Americas`],[`Germany`,`DE`,`Berlin`,`Western Europe`,`Europe`],[`Mexico`,`MX`,`Mexico City`,`North America`,`Americas`],[`Colombia`,`CO`,`Bogota`,`South America`,`Americas`],[`Uruguay`,`UY`,`Montevideo`,`South America`,`Americas`],[`Costa Rica`,`CR`,`San Jose`,`Central America`,`Americas`],[`Chile`,`CL`,`Santiago`,`South America`,`Americas`],[`Peru`,`PE`,`Lima`,`South America`,`Americas`],[`Ecuador`,`EC`,`Quito`,`South America`,`Americas`],[`Panama`,`PA`,`Panama City`,`Central America`,`Americas`],[`Dominican Republic`,`DO`,`Santo Domingo`,`Caribbean`,`Americas`],[`Jamaica`,`JM`,`Kingston`,`Caribbean`,`Americas`],[`Bahamas`,`BS`,`Nassau`,`Caribbean`,`Americas`],[`Barbados`,`BB`,`Bridgetown`,`Caribbean`,`Americas`],[`Belize`,`BZ`,`Belmopan`,`Central America`,`Americas`],[`Paraguay`,`PY`,`Asuncion`,`South America`,`Americas`],[`Ireland`,`IE`,`Dublin`,`Northern Europe`,`Europe`],[`Spain`,`ES`,`Madrid`,`Southern Europe`,`Europe`],[`France`,`FR`,`Paris`,`Western Europe`,`Europe`],[`Italy`,`IT`,`Rome`,`Southern Europe`,`Europe`],[`Netherlands`,`NL`,`Amsterdam`,`Western Europe`,`Europe`],[`Belgium`,`BE`,`Brussels`,`Western Europe`,`Europe`],[`Switzerland`,`CH`,`Bern`,`Western Europe`,`Europe`],[`Austria`,`AT`,`Vienna`,`Western Europe`,`Europe`],[`Sweden`,`SE`,`Stockholm`,`Northern Europe`,`Europe`],[`Norway`,`NO`,`Oslo`,`Northern Europe`,`Europe`],[`Denmark`,`DK`,`Copenhagen`,`Northern Europe`,`Europe`],[`Finland`,`FI`,`Helsinki`,`Northern Europe`,`Europe`],[`Iceland`,`IS`,`Reykjavik`,`Northern Europe`,`Europe`],[`Czech Republic`,`CZ`,`Prague`,`Central Europe`,`Europe`],[`Slovakia`,`SK`,`Bratislava`,`Central Europe`,`Europe`],[`Slovenia`,`SI`,`Ljubljana`,`Southern Europe`,`Europe`],[`Croatia`,`HR`,`Zagreb`,`Southern Europe`,`Europe`],[`Greece`,`GR`,`Athens`,`Southern Europe`,`Europe`],[`Malta`,`MT`,`Valletta`,`Southern Europe`,`Europe`],[`Luxembourg`,`LU`,`Luxembourg`,`Western Europe`,`Europe`],[`Estonia`,`EE`,`Tallinn`,`Northern Europe`,`Europe`],[`South Africa`,`ZA`,`Pretoria`,`Southern Africa`,`Africa`],[`Kenya`,`KE`,`Nairobi`,`East Africa`,`Africa`],[`Ghana`,`GH`,`Accra`,`West Africa`,`Africa`],[`Botswana`,`BW`,`Gaborone`,`Southern Africa`,`Africa`],[`Namibia`,`NA`,`Windhoek`,`Southern Africa`,`Africa`],[`Rwanda`,`RW`,`Kigali`,`East Africa`,`Africa`],[`Tanzania`,`TZ`,`Dodoma`,`East Africa`,`Africa`],[`Senegal`,`SN`,`Dakar`,`West Africa`,`Africa`],[`Mauritius`,`MU`,`Port Louis`,`East Africa`,`Africa`],[`Seychelles`,`SC`,`Victoria`,`East Africa`,`Africa`],[`Cabo Verde`,`CV`,`Praia`,`West Africa`,`Africa`],[`Japan`,`JP`,`Tokyo`,`East Asia`,`Asia`],[`Singapore`,`SG`,`Singapore`,`Southeast Asia`,`Asia`],[`Malaysia`,`MY`,`Kuala Lumpur`,`Southeast Asia`,`Asia`],[`Thailand`,`TH`,`Bangkok`,`Southeast Asia`,`Asia`],[`Indonesia`,`ID`,`Jakarta`,`Southeast Asia`,`Asia`],[`Philippines`,`PH`,`Manila`,`Southeast Asia`,`Asia`],[`Nepal`,`NP`,`Kathmandu`,`South Asia`,`Asia`],[`Bhutan`,`BT`,`Thimphu`,`South Asia`,`Asia`],[`Sri Lanka`,`LK`,`Sri Jayawardenepura Kotte`,`South Asia`,`Asia`],[`Australia`,`AU`,`Canberra`,`Oceania`,`Oceania`],[`New Zealand`,`NZ`,`Wellington`,`Oceania`,`Oceania`],[`Fiji`,`FJ`,`Suva`,`Oceania`,`Oceania`],[`Samoa`,`WS`,`Apia`,`Oceania`,`Oceania`]].map(([e,t,n,r,i],a)=>({id:a+1,itemName:e,name:t,flag:t,capital:n,region:r,category:i,disabled:e===`Costa Rica`})),Sg=[{id:42,itemName:`Canada`,name:`CA`,flag:`CA`,capital:`Ottawa`,region:`North America`},{id:43,itemName:`Brazil`,name:`BR`,flag:`BR`,capital:`Brasilia`,region:`South America`},{id:44,itemName:`Mexico`,name:`MX`,flag:`MX`,capital:`Mexico City`,region:`North America`},{id:45,itemName:`Argentina`,name:`AR`,flag:`AR`,capital:`Buenos Aires`,region:`South America`}],Cg=[{id:1,itemName:`Revenue`,detail:`Finance metric`,color:`#2563eb`},{id:2,itemName:`Retention`,detail:`Customer metric`,color:`#0f766e`},{id:3,itemName:`Risk`,detail:`Operations metric`,color:`#b45309`},{id:4,itemName:`Quality`,detail:`Product metric`,color:`#7c3aed`},{id:5,itemName:`Support`,detail:`Service metric`,color:`#dc2626`}],wg=[{id:1,itemName:`Node.js`,category:`Backend`},{id:2,itemName:`Vue`,category:`Framework`},{id:3,itemName:`JavaScript`,category:`Language`},{id:4,itemName:`TypeScript`,category:`Language`},{id:5,itemName:`HTML`,category:`Web`},{id:6,itemName:`CSS`,category:`Web`}],Tg=Array.from({length:140},(e,t)=>({id:t+1,itemName:`Person ${t+1}`,name:`Person ${t+1}`,region:[`Brazilian`,`Canadian`,`Mexican`,`Colombian`][t%4]}));function Eg(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Dg(e){return e&&typeof e==`object`&&e.itemName?String(e.itemName):JSON.stringify(e)}function Og(e){return e?`country-flag fi fi-${String(e).toLowerCase()}`:`country-flag`}function kg(e){let t=e||`basic`;return`${vg}?file=${encodeURIComponent(`src/examples/${t}/${t}.component.vue`)}&startScript=start&initialpath=%2F${t}`}function Ag(e){return typeof e==`string`?`'`+e.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)+`'`:typeof e==`number`||typeof e==`boolean`?String(e):Array.isArray(e)?`[`+e.map(Ag).join(`, `)+`]`:e&&typeof e==`object`?jg(e):`null`}function jg(e){return`{ `+Object.keys(e).map(t=>`${t}: ${Ag(e[t])}`).join(`, `)+` }`}function Mg(e){return e.length?`[
`+e.map(e=>`  `+jg(e)).join(`,
`)+`
]`:`[]`}function Ng(e){let t=Object.entries(e).filter(([,e])=>e!==void 0);return t.length?`{ `+t.map(([e,t])=>`${e}: ${Ag(t)}`).join(`, `)+` }`:`{}`}function Pg(e,t,n={}){return Object.assign({singleSelection:!1,text:t,selectAllText:`Select all`,enableCheckAll:!0,enableSearchFilter:!0,searchPlaceholderText:`Search`,badgeShowLimit:2,maxHeight:220,showCheckbox:!0,noDataLabel:`No data`,clearAll:!0,primaryKey:`id`,labelKey:`itemName`,skin:e},n)}function Q(e,t,n,r,i,a,o,s,c,l,u={},d={}){return Object.assign({id:`${e}-${n}`,number:t,title:r,dataName:i,data:a,selectedName:o,settingsName:s,eventPrefix:`${e} ${n}`,initialSelected:c,settings:Pg(e,l,u),optionsText:Ng(u)},d)}function Fg(e){return[Q(e,`01`,`basic`,`Basic multi`,`countries`,Z,`${e}BasicSelected`,`${e}BasicSettings`,Z.slice(0,3),`Basic multi`,{badgeShowLimit:3,enableSearchFilter:!1}),Q(e,`02`,`search`,`Search + select all`,`countries`,Z,`${e}SearchSelected`,`${e}SearchSettings`,Z.slice(1,3),`${Eg(e)} searchable`,{badgeShowLimit:3}),Q(e,`03`,`single`,`Single without checkbox`,`countries`,Z,`${e}SingleSelected`,`${e}SingleSettings`,Z.slice(0,1),`${Eg(e)} single`,{singleSelection:!0,showCheckbox:!1,enableCheckAll:!1}),Q(e,`04`,`no-checkbox`,`Multi without checkbox`,`countries`,Z,`${e}NoCheckboxSelected`,`${e}NoCheckboxSettings`,Z.slice(2,4),`${Eg(e)} no checkbox`,{showCheckbox:!1}),Q(e,`05`,`limit`,`Selection limit`,`countries`,Z,`${e}LimitSelected`,`${e}LimitSettings`,Z.slice(0,2),`${Eg(e)} limit two`,{limitSelection:2,badgeShowLimit:2}),Q(e,`06`,`badge`,`Badge overflow`,`countries`,Z,`${e}BadgeSelected`,`${e}BadgeSettings`,Z.slice(0,5),`${Eg(e)} badge limit`,{badgeShowLimit:2}),Q(e,`07`,`grouped`,`Grouped by region`,`countries`,Z,`${e}GroupedSelected`,`${e}GroupedSettings`,[Z[0],Z[4]],`${Eg(e)} grouped`,{groupBy:`region`,selectGroup:!0}),Q(e,`08`,`disabled`,`Disabled with value`,`countries`,Z,`${e}DisabledSelected`,`${e}DisabledSettings`,Z.slice(0,1),`${Eg(e)} disabled`,{disabled:!0}),Q(e,`09`,`empty`,`Empty data`,`emptyItems`,[],`${e}EmptySelected`,`${e}EmptySettings`,[],`${Eg(e)} empty`,{noDataLabel:`No options available`}),Q(e,`10`,`scroll`,`Long list with scroll`,`largeList`,Tg,`${e}ScrollSelected`,`${e}ScrollSettings`,Tg.slice(0,3),`${Eg(e)} scroll`,{maxHeight:140,badgeShowLimit:3}),Q(e,`11`,`lazy`,`Local lazy loading`,`lazyPeople`,Tg.slice(0,30),`${e}LazySelected`,`${e}LazySettings`,[],`${Eg(e)} lazy`,{lazyLoading:!0,maxHeight:140,badgeShowLimit:3},{note:`Adds 20 rows when the list reaches the end.`}),Q(e,`12`,`template`,`Item + chip render functions`,`templateItems`,Cg,`${e}TemplateSelected`,`${e}TemplateSettings`,Cg.slice(0,2),`${Eg(e)} render`,{badgeShowLimit:3},{template:!0})]}function Ig(e){let t=e.template?[`  :render-item="renderOption"`,`  :render-badge="renderBadge"`]:[],n=e.note?[`  @scroll-to-end="appendNextChunk"`]:[];return[`<vue-multiselect-dropdown`,`  :data="${e.dataName}"`,`  v-model="${e.selectedName}"`,`  :settings="${e.settingsName}"`,`  @select="record('${e.eventPrefix} select', $event)"`,`  @de-select="record('${e.eventPrefix} deselect', $event)"`,...n,...t,`/>`].join(`
`)}function Lg(e,t){return[`${e.selectedName}: ${Mg(t)},`,``,`${e.settingsName}: makeSettings('${e.settings.skin}', '${e.settings.text}', ${e.optionsText}),`,``,`methods: {`,`  record(type, value) {`,"    events.unshift(`${type}: ${itemLabel(value)}`);",`  }`,`}`].join(`
`)}function Rg(e,t,n){return JSON.stringify({data:e.dataName,selected:t,settings:n},null,2)}var zg={components:{VueMultiselectDropdown:eg},props:{test:{type:Object,required:!0}},data(){return{selected:this.test.initialSelected.slice(),localData:this.test.data.slice(),disabled:!1}},computed:{actualSettings(){return Object.assign({},this.test.settings,this.test.allowDisabledToggle?{disabled:this.disabled}:{})},templateSnippet(){return Ig(this.test)},jsSnippet(){return Lg(this.test,this.selected)},jsonSnippet(){return Rg(this.test,this.selected,this.actualSettings)},displayTitle(){return this.test.hideTitle!==!0},directRouteSlug(){let e=String(this.test.id).replace(/^(classic|material|dark|custom|brand)-/,``);return{basic:`basic`,search:`search-filter`,single:`single-selection`,"no-checkbox":`styling`,limit:`limit-selection`,badge:`limit-badges`,grouped:`group-by`,disabled:`disabled`,empty:`styling`,scroll:`virtual-scrolling`,lazy:`lazy-loading-api`,template:`templating`,dialog:`dialog`,"body-overlay-auto":`body-overlay-auto`}[e]||e},stackblitzRouteUrl(){return kg(this.directRouteSlug)},validationMessage(){return this.test.formValidation?this.selected.length?`Valid selection.`:`Select at least one skill.`:``}},methods:{itemLabel:Dg,flagClass:Og,updateSelection(e){this.selected=e,this.record(this.test.eventPrefix+` change`,e)},record(e,t){let n=Array.isArray(t)?`${t.length} items`:Dg(t);this.$emit(`record`,`${e}: ${n}`)},appendNextChunk(e){if(!this.test.note)return;let t=Tg.slice(this.localData.length,this.localData.length+20);t.length?(this.localData=this.localData.concat(t),this.record(this.test.eventPrefix+` lazy`,`${t.length} rows`)):this.record(this.test.eventPrefix+` lazy`,`no more rows`)},addFilterItem(e,t){this.localData=this.localData.concat(t),this.record(this.test.eventPrefix+` created`,e)},renderOption(e,t,n){return n(`span`,{class:`option-row`},[e.flag?n(`span`,{class:Og(e.flag),attrs:{"aria-hidden":`true`}}):null,n(`span`,{class:`swatch`,style:{backgroundColor:e.color||`#2563eb`}}),n(`span`,[n(`strong`,[t.label]),n(`small`,[e.detail||e.capital||e.region||``])])])},renderBadge(e,t,n){return n(`span`,{class:`swatch-chip`},[e.flag?n(`span`,{class:Og(e.flag),attrs:{"aria-hidden":`true`}}):null,n(`span`,{class:`swatch`,style:{backgroundColor:e.color||`#2563eb`}}),t.label])},openDropdown(){this.$refs.dropdown.openDropdown()},closeDropdown(){this.$refs.dropdown.closeDropdown()},focusSearch(){this.$refs.dropdown.focusSearch()},selectAll(){this.$refs.dropdown.selectAll()},clearSelection(){this.$refs.dropdown.clearSelection()}},template:`
    <article :id="'case-' + test.id" :class="'example-row' + (test.overflow ? ' overflow-example-row' : '')">
      <div class="demo-cell">
        <div v-if="displayTitle || test.allowDisabledToggle" class="case-title-row">
          <h3 v-if="displayTitle">{{ test.number ? test.number + '. ' : '' }}{{ test.title }}</h3>
          <button v-if="test.allowDisabledToggle" class="small-button" type="button" @click="disabled = !disabled">{{ disabled ? 'Enable' : 'Disable' }}</button>
        </div>
        <a class="stackblitz-row-link" :href="stackblitzRouteUrl" target="_blank" rel="noopener">Open in StackBlitz</a>
        <div v-if="test.methods" class="method-bar">
          <button type="button" @click="openDropdown">Open</button>
          <button type="button" @click="closeDropdown">Close</button>
          <button type="button" @click="focusSearch">Focus search</button>
          <button type="button" @click="selectAll">Select all</button>
          <button type="button" @click="clearSelection">Clear</button>
        </div>
        <div v-if="test.overflow" class="overflow-dialog-frame">
          <div class="demo-dialog-surface">
            <div class="dialog-copy">
              <strong>Simulated dialog surface</strong>
              <span>overflow hidden, stacking context, and a dropdown near the edge.</span>
            </div>
            <vue-multiselect-dropdown
              ref="dropdown"
              :data="localData"
              v-model="selected"
              :settings="actualSettings"
              :render-item="test.template ? renderOption : null"
              :render-badge="test.template ? renderBadge : null"
              @change="updateSelection"
              @select="record(test.eventPrefix + ' select', $event)"
              @de-select="record(test.eventPrefix + ' deselect', $event)"
              @select-all="record(test.eventPrefix + ' selectAll', $event)"
              @de-select-all="record(test.eventPrefix + ' deselectAll', $event)"
              @scroll-to-end="appendNextChunk"
              @add-filter-new-item="addFilterItem"
            />
          </div>
        </div>
        <vue-multiselect-dropdown
          v-else-if="test.scopedSlots"
          ref="dropdown"
          :data="localData"
          v-model="selected"
          :settings="actualSettings"
          @change="updateSelection"
          @select="record(test.eventPrefix + ' select', $event)"
          @de-select="record(test.eventPrefix + ' deselect', $event)"
          @select-all="record(test.eventPrefix + ' selectAll', $event)"
          @de-select-all="record(test.eventPrefix + ' deselectAll', $event)"
        >
          <template #option="{ item, label, selected, ariaSelected, ariaChecked, toggle }">
            <button class="slot-option" type="button" :aria-pressed="selected" @click.stop="toggle">
              <span :class="flagClass(item.flag)" aria-hidden="true"></span>
              <span><strong>{{ label }}</strong><small>{{ item.capital }} · {{ item.region }}</small></span>
              <code>{{ ariaSelected }}/{{ ariaChecked }}</code>
            </button>
          </template>
          <template #badge="{ item, label, remove }">
            <span class="slot-chip">
              <span :class="flagClass(item.flag)" aria-hidden="true"></span>
              {{ label }}
              <button type="button" @click.stop="remove">×</button>
            </span>
          </template>
          <template #menu-footer="{ selected }">
            <div class="slot-footer">{{ selected.length }} selected through scoped slots</div>
          </template>
        </vue-multiselect-dropdown>
        <vue-multiselect-dropdown
          v-else
          ref="dropdown"
          :data="localData"
          v-model="selected"
          :settings="actualSettings"
          :render-item="test.template ? renderOption : null"
          :render-badge="test.template ? renderBadge : null"
          @change="updateSelection"
          @select="record(test.eventPrefix + ' select', $event)"
          @de-select="record(test.eventPrefix + ' deselect', $event)"
          @select-all="record(test.eventPrefix + ' selectAll', $event)"
          @de-select-all="record(test.eventPrefix + ' deselectAll', $event)"
          @scroll-to-end="appendNextChunk"
          @add-filter-new-item="addFilterItem"
        />
        <p v-if="test.formValidation" :class="selected.length ? 'validation ok' : 'validation'">{{ validationMessage }}</p>
        <p v-if="test.note" class="settings-preview">{{ test.note }}</p>
        <p v-if="test.overflow" class="settings-preview">tagToBody: true | appendToBody: true</p>
      </div>
      <div class="code-card"><strong>Template</strong><pre>{{ templateSnippet }}</pre></div>
      <div class="code-card"><strong>JS</strong><pre>{{ jsSnippet }}</pre></div>
      <div class="code-card"><strong>JSON</strong><pre>{{ jsonSnippet }}</pre></div>
    </article>
  `},Bg=Fg(`classic`),Vg=Fg(`material`);function $(e,t,n={}){let r=n.skin||`classic`,i=n.data||Z,a=n.selected||i.slice(0,2);return Q(r,n.number||`01`,e,t,n.dataName||`countries`,i,n.selectedName||e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())+`Selected`,n.settingsName||e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())+`Settings`,a,n.text||t,n.settings||{},n.extra||{})}var Hg=[{slug:`basic`,title:`Basic usage`,eyebrow:`Basic`,description:`Classic multi-select with chips, clear all, and selected counters.`,tests:[Bg[0]]},{slug:`keyboard-contract`,title:`Keyboard contract`,eyebrow:`Accessibility`,description:`Keyboard behavior is explicit: Space, Tab, arrows, Escape, and Backspace/Delete stay predictable.`,tests:[$(`keyboard-contract`,`Keyboard behavior switches`,{selected:Z.slice(0,3),settings:{enableSearchFilter:!0,badgeShowLimit:3,keyboard:{space:!0,spaceOptionAction:`toggle`,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0}}})]},{slug:`aria-state`,title:`ARIA state audit`,eyebrow:`Accessibility`,description:`Option rows expose matching aria-selected and aria-checked states for multiselect announcement.`,tests:[$(`aria-state`,`ARIA selected + checked state`,{selected:Z.slice(0,2),settings:{enableSearchFilter:!0,badgeShowLimit:3}})]},{slug:`headless-aria`,title:`Headless + ARIA`,eyebrow:`Headless`,description:`Use the renderless composable for fully custom Vue HTML while preserving Stackline ARIA prop bags.`,kind:`headless`},{slug:`state-hook`,title:`State hook`,eyebrow:`Composable`,description:`Vue uses a composable state layer for controlled selection, filtering, grouping, and event callbacks.`,tests:[$(`state-hook`,`useMultiSelectState equivalent`,{selected:Z.slice(1,4),settings:{enableSearchFilter:!0,groupBy:`region`,badgeShowLimit:3}})]},{slug:`slots-api`,title:`Slots API`,eyebrow:`Customization`,description:`Scoped slots customize options, badges, and menu footer while the package keeps behavior and ARIA.`,tests:[$(`slots-api`,`Scoped slots`,{selected:Z.slice(0,3),settings:{enableSearchFilter:!0,badgeShowLimit:3},extra:{scopedSlots:!0}})]},{slug:`type-safe-factory`,title:`Type-safe factory`,eyebrow:`Advanced API`,description:`The package exports helper APIs for typed settings and renderless usage in Vue projects.`,tests:[$(`type-safe-factory`,`defineSettings helper shape`,{selected:Z.slice(2,4),settings:{enableSearchFilter:!0,searchBy:[`itemName`,`capital`],badgeShowLimit:3},extra:{note:`Use defineSettings / createVueMultiselectDropdown in typed Vue applications.`}})]},{slug:`async-object-preservation`,title:`Async object preservation`,eyebrow:`Async data`,description:`Selected object values remain stable when later data pages or async requests refresh options.`,tests:[$(`async-object-preservation`,`Async object preservation`,{selected:Z.slice(0,3),settings:{enableSearchFilter:!0,lazyLoading:!0,badgeShowLimit:3},extra:{note:`Selected objects are preserved by primaryKey while data changes.`}})]},{slug:`single-selection`,title:`Single selection`,eyebrow:`Selection`,description:`Single selection mode without checkboxes.`,tests:[Bg[2]]},{slug:`search-filter`,title:`Search filter`,eyebrow:`Search`,description:`Client-side search over object labels.`,tests:[Bg[1]]},{slug:`custom-search-api`,title:`Custom search from API`,eyebrow:`Search`,description:`Search flow prepared for remote APIs and late results.`,tests:[$(`custom-search-api`,`Custom search from API`,{selected:Z.slice(0,1),settings:{enableSearchFilter:!0,badgeShowLimit:3},extra:{note:`Use search events and async data replacement for remote API search.`}})]},{slug:`search-filter-by-property`,title:`Search filter by property`,eyebrow:`Search`,description:`Search by multiple object properties instead of a single label.`,tests:[$(`search-filter-by-property`,`Search by itemName and capital`,{selected:Z.slice(4,6),settings:{enableSearchFilter:!0,searchBy:[`itemName`,`capital`,`region`],badgeShowLimit:3}})]},{slug:`search-add-new-item`,title:`Search and Add New Item`,eyebrow:`Creation`,description:`Let users create an option from filter text.`,tests:[$(`search-add-new-item`,`Search and add item`,{data:Z.slice(0,4),selected:Z.slice(0,2),settings:{addNewItemOnFilter:!0,addNewButtonText:`Add country`,badgeShowLimit:3}})]},{slug:`group-by`,title:`Group By`,eyebrow:`Grouping`,description:`Group object data by any configured field.`,tests:[Bg[6]]},{slug:`templating`,title:`Templating`,eyebrow:`Rendering`,description:`Custom option and chip render functions for Vue render-function users.`,tests:[Bg[11]]},{slug:`template-driven-forms`,title:`Template-style forms`,eyebrow:`Forms`,description:`Use v-model in a template-style form and derive validation from selected objects.`,tests:[$(`template-driven-forms`,`Template-style form validation`,{dataName:`skills`,data:wg,selected:[],settings:{groupBy:`category`,badgeShowLimit:3},extra:{formValidation:!0}})]},{slug:`reactive-forms`,title:`Reactive forms`,eyebrow:`Forms`,description:`Keep selected items in reactive Vue state and submit object values.`,tests:[$(`reactive-forms`,`Reactive-style form state`,{dataName:`skills`,data:wg,selected:wg.slice(0,2),settings:{groupBy:`category`,badgeShowLimit:3},extra:{formValidation:!0}})]},{slug:`virtual-scrolling`,title:`Virtual Scrolling`,eyebrow:`Large data`,description:`Long option lists keep the panel scrollable and keyboard accessible.`,tests:[Bg[9]]},{slug:`lazy-loading-api`,title:`Lazy Loading from API`,eyebrow:`Large data`,description:`Append more object rows when the list reaches the end.`,tests:[Bg[10]]},{slug:`remote-data`,title:`Data from remote API`,eyebrow:`Remote data`,description:`Replace option data from remote sources while selected object values stay stable.`,tests:[$(`remote-data`,`Remote API data refresh`,{selected:Z.slice(0,2),settings:{enableSearchFilter:!0,badgeShowLimit:3},extra:{note:`Refresh data by replacing the data array; selected values are preserved by primaryKey.`}})]},{slug:`list-loop`,title:`Using in list for loop`,eyebrow:`Composition`,description:`Multiple dropdowns can be rendered from object arrays without shared state collisions.`,tests:[$(`list-loop-a`,`Loop row 1`,{selected:Z.slice(0,1),settings:{badgeShowLimit:2}}),$(`list-loop-b`,`Loop row 2`,{selected:Z.slice(2,4),settings:{badgeShowLimit:2}})]},{slug:`dialog`,title:`Using inside dialog`,eyebrow:`Overlay`,description:`appendToBody escapes overflow containers and dialog clipping.`,tests:[Q(`material`,``,`dialog`,`Clipping-safe dropdown with appendToBody`,`overlayCountries`,Sg,`dialogSelected`,`dialogSettings`,Sg.slice(0,1),`Dialog dropdown`,{appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`,maxHeight:180,badgeShowLimit:2},{overflow:!0})]},{slug:`multiple-dropdowns`,title:`Multiple dropdowns`,eyebrow:`Composition`,description:`Multiple independent dropdown instances keep separate state and events.`,tests:[$(`multiple-dropdowns-a`,`Countries dropdown`,{selected:Z.slice(0,2),settings:{badgeShowLimit:2}}),$(`multiple-dropdowns-b`,`Skills dropdown`,{dataName:`skills`,data:wg,selected:wg.slice(1,3),settings:{groupBy:`category`,badgeShowLimit:2}})]},{slug:`dynamic-data`,title:`Load dynamic data`,eyebrow:`Dynamic data`,description:`Data can be swapped or extended without losing selected object identity.`,tests:[$(`dynamic-data`,`Dynamic data list`,{selected:Z.slice(0,2),settings:{enableSearchFilter:!0,badgeShowLimit:3},extra:{note:`The data prop is reactive and can be replaced by a loaded array.`}})]},{slug:`methods`,title:`Methods`,eyebrow:`Methods`,description:`Instance methods expose open, close, focusSearch, selectAll, and clearSelection.`,tests:[$(`methods`,`Instance methods`,{selected:Z.slice(0,2),settings:{badgeShowLimit:3},extra:{methods:!0}})]},{slug:`events`,title:`Events`,eyebrow:`Events`,description:`Selection, deselection, select-all, deselect-all, open, close, lazy, and create events are visible in the event log.`,tests:[$(`events`,`Event callbacks`,{selected:Z.slice(0,2),settings:{enableSearchFilter:!0,badgeShowLimit:3}})]},{slug:`disabled`,title:`Disabled state`,eyebrow:`State`,description:`Disable the dropdown while preserving the selected values.`,tests:[Bg[7]]},{slug:`limit-selection`,title:`Limit selection`,eyebrow:`Limits`,description:`Prevent selecting more than the configured number of items.`,tests:[Bg[4]]},{slug:`limit-badges`,title:`Limit badges`,eyebrow:`Limits`,description:`Overflow counter appears only when selected items are hidden.`,tests:[Bg[5]]},{slug:`custom-placeholder`,title:`Custom placeholder`,eyebrow:`Display`,description:`Placeholder text stays left aligned and vertically centered in the trigger.`,tests:[$(`custom-placeholder`,`Custom placeholder`,{selected:[],settings:{text:`Choose countries`,enableSearchFilter:!0,badgeShowLimit:3}})]},{slug:`styling`,title:`Styling`,eyebrow:`Skins`,description:`Classic, material, dark, custom, and brand skins are settings-only.`,tests:[$(`styling-classic`,`Classic skin`,{selected:Z.slice(0,2),settings:{badgeShowLimit:2}}),$(`styling-material`,`Material skin`,{skin:`material`,selected:Z.slice(2,4),settings:{badgeShowLimit:2}}),$(`styling-dark`,`Dark skin`,{skin:`dark`,selected:Z.slice(4,6),settings:{badgeShowLimit:2}}),$(`styling-brand`,`Brand skin`,{skin:`brand`,selected:Z.slice(1,4),settings:{badgeShowLimit:3}})]},{slug:`body-overlay-auto`,title:`Body Overlay Auto`,eyebrow:`Overlay`,description:`The dropdown can open inside a clipped surface while the panel is appended to body.`,tests:[Q(`material`,`01`,`body-overlay-auto`,`Body overlay auto positioning`,`overlayCountries`,Sg,`bodyOverlaySelected`,`bodyOverlaySettings`,Sg.slice(0,1),`Body overlay`,{appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`,maxHeight:180,badgeShowLimit:2},{overflow:!0})]}],Ug=Object.assign({},Hg.find(e=>e.slug===`body-overlay-auto`).tests[0],{number:`22`}),Wg=[Q(`classic`,`13`,`all-visible`,`All selected badges visible`,`countries`,Z,`allVisibleSelected`,`allVisibleSettings`,Z.slice(0,4),`All selected visible`,{badgeShowLimit:10},{note:`The counter disappears when every selected item is visible.`}),Q(`classic`,`14`,`search-by-fields`,`Search by specific fields`,`countries`,Z,`searchBySelected`,`searchBySettings`,Z.slice(2,5),`Search by country or capital`,{searchBy:[`itemName`,`capital`],searchPlaceholderText:`Search country or capital`,badgeShowLimit:3}),Q(`classic`,`15`,`add-filter-item`,`Search and add item`,`createdCountries`,Z,`createdSelected`,`createdSettings`,Z.slice(0,2),`Add country`,{addNewItemOnFilter:!0,addNewButtonText:`Add country`,badgeShowLimit:3},{note:`Create a new option from filter text and keep object values stable.`}),Q(`classic`,`16`,`disabled-toggle`,`Disabled state toggle`,`countries`,Z,`disabledSelected`,`disabledSettings`,Z.slice(0,3),`Toggle disabled`,{badgeShowLimit:3},{allowDisabledToggle:!0}),Q(`classic`,`17`,`combobox-contract`,`Combobox keyboard contract`,`countries`,Z,`contractSelected`,`contractSettings`,Z.slice(0,3),`Keyboard contract`,{badgeShowLimit:3},{note:`Type a query: Backspace edits text. Clear the query: Backspace does not remove selected values by default. Focus a badge remove button and press Backspace/Delete to remove it. Escape closes without clearing selected values.`}),Q(`classic`,`18`,`aria-state`,`ARIA selected + checked state`,`countries`,Z,`ariaStateSelected`,`ariaStateSettings`,Z.slice(0,2),`ARIA state audit`,{badgeShowLimit:3,maxHeight:180},{note:`Open and focus an option: every option exposes role="option", aria-selected, and aria-checked with matching values.`}),Q(`classic`,`19`,`form-validation`,`Controlled form validation`,`skills`,wg,`skillSelected`,`skillSettings`,[],`Select skills`,{groupBy:`category`,badgeShowLimit:3},{formValidation:!0}),Q(`classic`,`20`,`ref-methods`,`Ref methods`,`countries`,Z,`methodSelected`,`methodSettings`,Z.slice(0,2),`Ref controlled`,{badgeShowLimit:3},{methods:!0}),Q(`classic`,`21`,`slots-api`,`Slots API custom HTML`,`countries`,Z,`slotsSelected`,`slotsSettings`,Z.slice(0,4),`Custom slot shell`,{enableSearchFilter:!0,groupBy:`category`,selectGroup:!0,badgeShowLimit:2,maxHeight:220},{scopedSlots:!0,note:`Custom option, badge, and menu footer slots. The package still owns ARIA, focus, and keyboard props.`}),Ug],Gg=[{slug:`all-visible-counter`,target:`limit-badges`},{slug:`selection-limit`,target:`limit-selection`},{slug:`disabled-state`,target:`disabled`},{slug:`using-in-forms`,target:`template-driven-forms`},{slug:`lazy-loading`,target:`lazy-loading-api`},{slug:`using-inside-dialog`,target:`dialog`}],Kg=[{slug:`classic`,title:`Basic usage`,description:`Essential setup with the default classic skin`},{slug:`coverage`,title:`3.1.x coverage`,description:`Combobox, async, headless, and composable state`},{slug:`skin-switcher`,title:`Skin switcher`,description:`Settings-only skin changes`},{slug:`dialog`,title:`Dialog overlay`,description:`appendToBody and overflow clipping`},{slug:`material`,title:`Material skin`,description:`Modernized visual and behavior tests`},{slug:`extra`,title:`Extra coverage`,description:`Limits, forms, methods, and edge cases`},{slug:`headless-aria`,title:`Headless + ARIA`,description:`100% custom HTML with Stackline ARIA getters`}],qg=[{slug:`classic`,eyebrow:`Start here`,title:`Basic usage`,sectionClass:``,tests:Bg},{slug:`coverage`,featureLab:!0},{slug:`skin-switcher`,skinSwitcher:!0},{slug:`dialog`,eyebrow:`Dialog support`,title:`Dropdown inside overflow containers`,sectionClass:`overlay-section`,tests:Hg.find(e=>e.slug===`dialog`).tests},{slug:`material`,eyebrow:`Skin`,title:`Material`,sectionClass:`material-section`,tests:Vg},{slug:`extra`,eyebrow:`Vue extra coverage`,title:`Additional live tests`,sectionClass:`extra-section`,tests:Wg},{slug:`headless-aria`,eyebrow:`Full control example`,title:`Headless HTML + ARIA`,description:`The dropdown below owns its markup and CSS. Stackline supplies state, selection rules, grouping, search, callbacks, keyboard behavior, and ARIA attributes through prop getters.`,sectionClass:`headless-route-section`,tests:[],headlessOnly:!0}],Jg=[`Controlled v-model`,`Search`,`Grouping`,`Scoped slots`,`Custom renderers`,`Lazy loading`,`Instance methods`,`Headless composable`,`State composable`,`Accessibility-focused and keyboard/ARIA tested`,`appendToBody`,`Centered placeholder line`,`Classic and modern skins`],Yg=[{kicker:`Component`,title:`<VueMultiselectDropdown />`,copy:`Use v-model with object arrays while keeping the Stackline settings contract predictable.`},{kicker:`Settings`,title:`settings.skin`,copy:`Use settings.skin for classic, material, dark, custom, and brand visual modes. The theme alias stays compatibility-only.`},{kicker:`Events`,title:`@select and @de-select`,copy:`Vue emits selection changes, select-all, clear-all, lazy scrolling, custom item creation, open, and close events.`},{kicker:`Rendering`,title:`Scoped slots and render functions`,copy:`Customize option rows, badges, menu footer, and inner content while preserving package-owned behavior.`},{kicker:`Headless`,title:`useMultiSelectDropdown`,copy:`Use prop getters when the app needs to own every tag, class, wrapper, and layout decision.`},{kicker:`State`,title:`useMultiSelectState`,copy:`Use the low-level state composable for selection, filtering, grouping, badge limits, and callbacks.`},{kicker:`Accessibility`,title:`Keyboard and ARIA contract`,copy:`The trigger, listbox, options, selected chips, and clear action expose keyboard flow, aria-selected, and aria-checked.`},{kicker:`Dialogs`,title:`appendToBody / tagToBody`,copy:`Set appendToBody inside modals, drawers, and overflow containers so the list escapes clipping contexts.`}],Xg=`npm install @stackline/vue-multiselect-dropdown@${gg} --save-exact`,Zg=`import { ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';

const countries = [
  { id: 1, itemName: 'Brazil' },
  { id: 2, itemName: 'Canada' }
];`,Qg=`const selectedCountries = ref([]);

const settings = {
  text: 'Select countries',
  primaryKey: 'id',
  labelKey: 'itemName',
  enableSearchFilter: true,
  badgeShowLimit: 3,
  clearAll: true,
  skin: 'classic'
};`,$g=`<VueMultiselectDropdown
  :data="countries"
  v-model="selectedCountries"
  :settings="settings"
/>`;function e_(){return window.location.pathname.indexOf(`/live/`)>=0}function t_(){let e=window.location.hash.replace(/^#\/?/,``).trim();if(e)return e;let t=window.location.pathname.replace(/^\/+|\/+$/g,``).split(`/`).filter(Boolean),n=t[t.length-1]||``;return e_()?n&&n!==`live`?n:`classic`:n&&n!==`vue-3`&&n!==`multiselect`?n:`basic`}function n_(e){let t=Gg.find(t=>t.slug===e),n=t?t.target:e;return Hg.find(e=>e.slug===n)||Hg[0]}var r_={emits:[`record`],setup(e,{emit:t}){let n=F(Z.slice(0,3)),r=hg({data:Z,selectedItems:n,onChange(e){n.value=e,t(`record`,`headless aria change: ${e.length} selected`)},settings:Pg(`classic`,`Build your own picker`,{enableSearchFilter:!0,searchPlaceholderText:`Search country or capital`,groupBy:`region`,selectGroup:!0,badgeShowLimit:2,clearAll:!0,ariaLabel:`Custom country multiselect`,listboxAriaLabel:`Custom country options`,searchAriaLabel:`Search custom country options`,clearAllAriaLabel:`Clear custom country selection`}),onSelect(e){t(`record`,`headless aria select: ${Dg(e)}`)},onDeSelect(e){t(`record`,`headless aria deselect: ${Dg(e)}`)},onSelectAll(e){t(`record`,`headless aria selectAll: ${e.length} items`)},onDeSelectAll(e){t(`record`,`headless aria clearAll: ${e.length} items`)}}),i=F(Z.slice(0,3)),a=hg({data:Z,selectedItems:i,onChange(e){i.value=e,t(`record`,`headless flag change: ${e.length} selected`)},settings:Pg(`classic`,`Choose countries`,{enableSearchFilter:!0,searchPlaceholderText:`Search country`,groupBy:`region`,selectGroup:!0,badgeShowLimit:3,clearAll:!0,ariaLabel:`Headless flag country picker`})}),o=B(()=>n.value.length?`${n.value.length} selected`:`No selected countries`),s=B(()=>JSON.stringify({selectedItems:i.value,settings:a.settings.value},null,2)),c=`<section v-bind="dropdown.getRootProps({ class: 'country-shell' })">,  <button v-bind="dropdown.getTriggerProps({ class: 'country-trigger' })">,    <span>{{ label }}</span>,    <strong>{{ isOpen ? "Expanded" : "Collapsed" }}</strong>,  </button>,,  <div class="country-selected" aria-live="polite">,    <span v-for="item in visibleBadges" :key="getItemKey(item)">,      {{ getItemLabel(item) }},      <button v-bind="dropdown.getRemoveButtonProps(item)">Remove</button>,    </span>,    <b v-if="hiddenBadgeCount">+{{ hiddenBadgeCount }}</b>,  </div>,,  <div v-if="isOpen" class="country-panel">,    <input v-bind="dropdown.getSearchInputProps({ class: 'country-search' })" />,    <div v-bind="dropdown.getListboxProps({ class: 'country-listbox' })">,      <section v-for="group in groups" :key="group.name" role="group">,        <header>{{ group.name }}</header>,        <div v-for="option in group.items" :key="option.key",             v-bind="dropdown.getOptionProps(option)">,          <strong>{{ option.label }}</strong>,        </div>,      </section>,    </div>,  </div>,</section>`.split(`,`).join(`
`);return{dropdown:r,selectedItems:n,selectedSummary:o,visibleBadges:r.visibleBadges,hiddenBadgeCount:r.hiddenBadgeCount,visibleOptions:r.visibleOptions,groups:r.groups,label:r.label,isOpen:r.isOpen,listboxId:r.listboxId,activeDescendantId:r.activeDescendantId,allFilteredSelected:r.allFilteredSelected,getItemKey:r.getItemKey,getItemLabel:r.getItemLabel,flagDropdown:a,flagSelectedItems:i,flagLabel:a.label,flagIsOpen:a.isOpen,flagOptions:a.visibleOptions,headlessAriaHookCode:`const selectedItems = ref(countries.slice(0, 3));

const dropdown = useMultiSelectDropdown({
  data: countries,
  selectedItems,
  onChange: (items) => { selectedItems.value = items; },
  settings: {
    text: 'Build your own picker',
    enableSearchFilter: true,
    searchPlaceholderText: 'Search country or capital',
    groupBy: 'region',
    selectGroup: true,
    badgeShowLimit: 2,
    primaryKey: 'id',
    labelKey: 'itemName',
    clearAll: true,
    ariaLabel: 'Custom country multiselect',
    listboxAriaLabel: 'Custom country options'
  }
});`,headlessAriaTemplateCode:c,headlessAriaContractCode:`Prop getters provide the accessibility contract:

getTriggerProps()
- role="combobox"
- aria-expanded
- aria-controls
- aria-activedescendant

getListboxProps()
- role="listbox"
- aria-multiselectable
- stable id

getOptionProps(option)
- role="option"
- aria-selected
- aria-checked
- keyboard and focus handlers

You own the HTML. Stackline owns the state, ARIA, keyboard flow, grouping, search, limits, and callbacks.`,flagTemplateCode:`<div class="flag-picker" v-bind="flagDropdown.getRootProps()">
  <div class="flag-picker-header">
    <span>Custom HTML, custom CSS, Stackline state</span>
    <button v-bind="flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })">Clear</button>
  </div>

  <button v-bind="flagDropdown.getTriggerProps({ class: 'flag-trigger' })">
    <span>{{ flagLabel }}</span>
    <strong>{{ flagIsOpen ? "Close" : "Open" }}</strong>
  </button>

  <div class="flag-chip-list">
    <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">
      <span :class="flagClass(item.flag)" aria-hidden="true"></span>
      {{ flagDropdown.getItemLabel(item) }}
      <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>
    </span>
  </div>

  <div v-if="flagIsOpen" v-bind="flagDropdown.getListboxProps({ class: 'flag-panel' })">
    <input v-bind="flagDropdown.getSearchInputProps({ class: 'flag-search' })" />
    <div v-for="option in flagOptions.slice(0, 24)" :key="option.key"
         v-bind="flagDropdown.getOptionProps(option, { class: option.selected ? 'flag-option selected' : 'flag-option' })">
      <span :class="flagClass(option.item.flag)" aria-hidden="true"></span>
      <span><strong>{{ option.label }}</strong><small>{{ option.item.capital }} - {{ option.item.region }}</small></span>
      <input type="checkbox" :checked="option.selected" readonly />
    </div>
  </div>
</div>`,flagJsCode:`import { ref } from 'vue';
import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';
import 'flag-icons/css/flag-icons.min.css';

const selectedItems = ref(countries.slice(0, 3));
const dropdown = useMultiSelectDropdown({
  data: countries,
  selectedItems,
  onChange: (items) => { selectedItems.value = items; },
  settings: {
    text: 'Choose countries',
    enableSearchFilter: true,
    searchPlaceholderText: 'Search country',
    groupBy: 'region',
    selectGroup: true,
    badgeShowLimit: 3,
    primaryKey: 'id',
    labelKey: 'itemName',
    clearAll: true
  }
});`,flagJsonSnippet:s,flagClass:Og}},template:`
    <article class="example-row headless-aria-row" data-case-id="headless-aria-html">
      <div class="demo-cell">
        <p class="eyebrow">Headless HTML + ARIA</p>
        <h3>100% custom markup</h3>
        <section v-bind="dropdown.getRootProps({ class: 'headless-aria-shell', 'aria-label': 'Custom country multiselect demo' })">
          <header class="headless-aria-header">
            <span>Product-owned HTML</span>
            <button v-bind="dropdown.getClearAllButtonProps({ class: 'headless-aria-clear' })">Clear all</button>
          </header>

          <button v-bind="dropdown.getTriggerProps({ class: 'headless-aria-trigger' })">
            <span>
              <small>Deployment markets</small>
              <strong>{{ label }}</strong>
            </span>
            <b>{{ isOpen ? 'Expanded' : 'Collapsed' }}</b>
          </button>

          <div class="headless-aria-selected" aria-live="polite" :aria-label="selectedSummary">
            <span v-for="item in visibleBadges" :key="getItemKey(item)" class="headless-aria-chip">
              <span :class="'headless-aria-flag ' + flagClass(item.flag)" aria-hidden="true"></span>
              {{ getItemLabel(item) }}
              <button v-bind="dropdown.getRemoveButtonProps(item, { class: 'headless-aria-remove' })">
                <span aria-hidden="true">x</span>
              </button>
            </span>
            <span v-if="!visibleBadges.length" class="headless-aria-empty">No selected countries</span>
            <span v-if="hiddenBadgeCount > 0" class="headless-aria-counter">+{{ hiddenBadgeCount }}</span>
          </div>

          <div v-if="isOpen" class="headless-aria-panel">
            <label class="headless-aria-search-label" for="headless-aria-search-live">Search countries</label>
            <input v-bind="dropdown.getSearchInputProps({ class: 'headless-aria-search', id: 'headless-aria-search-live' })" />

            <div class="headless-aria-actions">
              <button type="button" :disabled="!visibleOptions.length || allFilteredSelected" @click="dropdown.selectAll(visibleOptions.map((option) => option.item))">Select visible</button>
              <button v-bind="dropdown.getClearAllButtonProps({ class: 'headless-aria-action-clear' })">Clear selected</button>
            </div>

            <div v-bind="dropdown.getListboxProps({ class: 'headless-aria-listbox', 'aria-label': 'Grouped custom country options' })">
              <section v-for="group in groups" :key="group.name" class="headless-aria-group" role="group" :aria-label="group.name">
                <header class="headless-aria-group-head">
                  <span>{{ group.name }}</span>
                  <button type="button" :disabled="group.disabled" @click="dropdown.toggleGroup(group.name, group.items.map((option) => option.item))">
                    {{ group.selected ? 'Clear group' : 'Select group' }}
                  </button>
                </header>
                <div
                  v-for="option in group.items"
                  :key="option.key"
                  v-bind="dropdown.getOptionProps(option, { class: option.selected ? 'headless-aria-option selected' : 'headless-aria-option' })"
                >
                  <span class="headless-aria-check" :data-checked="option.selected ? 'true' : 'false'" aria-hidden="true"></span>
                  <span :class="'headless-aria-flag ' + flagClass(option.item.flag)" aria-hidden="true"></span>
                  <span class="headless-aria-option-copy">
                    <strong>{{ option.label }}</strong>
                    <small>{{ option.item.capital }} - {{ option.item.region }}</small>
                  </span>
                  <span class="headless-aria-state">
                    aria-selected={{ option.selected ? 'true' : 'false' }}<br />
                    aria-checked={{ option.selected ? 'true' : 'false' }}
                  </span>
                </div>
              </section>
            </div>
          </div>

          <dl class="headless-aria-audit">
            <div><dt>trigger</dt><dd>role combobox</dd></div>
            <div><dt>listbox id</dt><dd>{{ listboxId }}</dd></div>
            <div><dt>active option</dt><dd>{{ activeDescendantId || 'none' }}</dd></div>
            <div><dt>visible</dt><dd>{{ visibleOptions.length }} options</dd></div>
          </dl>
        </section>
      </div>
      <div class="code-card"><strong>Hook</strong><pre>{{ headlessAriaHookCode }}</pre></div>
      <div class="code-card"><strong>Template</strong><pre>{{ headlessAriaTemplateCode }}</pre></div>
      <div class="code-card"><strong>ARIA contract</strong><pre>{{ headlessAriaContractCode }}</pre></div>
    </article>

    <article class="example-row headless-flag-row">
      <div class="demo-cell">
        <h3>Headless countries with flag icons</h3>
        <div class="flag-picker" v-bind="flagDropdown.getRootProps()">
          <div class="flag-picker-header">
            <span>Custom HTML, custom CSS, Stackline state</span>
            <button v-bind="flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })">Clear</button>
          </div>

          <button v-bind="flagDropdown.getTriggerProps({ class: 'flag-trigger' })">
            <span>{{ flagLabel }}</span>
            <strong>{{ flagIsOpen ? 'Close' : 'Open' }}</strong>
          </button>

          <div class="flag-chip-list">
            <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">
              <span :class="'flag-icon ' + flagClass(item.flag)" aria-hidden="true"></span>
              {{ flagDropdown.getItemLabel(item) }}
              <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>
            </span>
            <span v-if="!flagSelectedItems.length" class="flag-empty">No selected countries</span>
          </div>

          <div v-if="flagIsOpen" v-bind="flagDropdown.getListboxProps({ class: 'flag-panel' })">
            <input v-bind="flagDropdown.getSearchInputProps({ class: 'flag-search' })" />
            <div
              v-for="option in flagOptions.slice(0, 24)"
              :key="option.key"
              v-bind="flagDropdown.getOptionProps(option, { class: option.selected ? 'flag-option selected' : 'flag-option' })"
            >
              <span :class="'flag-icon ' + flagClass(option.item.flag)" aria-hidden="true"></span>
              <span class="flag-option-copy">
                <strong>{{ option.label }}</strong>
                <small>{{ option.item.capital }} - {{ option.item.region }}</small>
              </span>
              <input type="checkbox" :checked="option.selected" readonly />
            </div>
          </div>
        </div>
      </div>
      <div class="code-card"><strong>Template</strong><pre>{{ flagTemplateCode }}</pre></div>
      <div class="code-card"><strong>JS</strong><pre>{{ flagJsCode }}</pre></div>
      <div class="code-card"><strong>JSON</strong><pre>{{ flagJsonSnippet }}</pre></div>
    </article>
  `},i_={emits:[`record`],setup(e,{emit:t}){let n=F(Z.slice(0,3)),r=hg({data:Z,selectedItems:n,onChange(e){n.value=e,t(`record`,`headless flag change: ${e.length} selected`)},settings:Pg(`classic`,`Choose countries`,{enableSearchFilter:!0,searchPlaceholderText:`Search country`,groupBy:`region`,selectGroup:!0,badgeShowLimit:3,clearAll:!0,ariaLabel:`Headless flag country picker`})}),i=B(()=>JSON.stringify({selectedItems:n.value,settings:r.settings.value},null,2));return{flagDropdown:r,flagSelectedItems:n,flagLabel:r.label,flagIsOpen:r.isOpen,flagOptions:r.visibleOptions,flagTemplateCode:`<div class="flag-picker" v-bind="flagDropdown.getRootProps()">
  <div class="flag-picker-header">
    <span>Custom HTML, custom CSS, Stackline state</span>
    <button v-bind="flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })">Clear</button>
  </div>

  <button v-bind="flagDropdown.getTriggerProps({ class: 'flag-trigger' })">
    <span>{{ flagLabel }}</span>
    <strong>{{ flagIsOpen ? "Close" : "Open" }}</strong>
  </button>

  <div class="flag-chip-list">
    <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">
      <span :class="flagClass(item.flag)" aria-hidden="true"></span>
      {{ flagDropdown.getItemLabel(item) }}
      <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>
    </span>
  </div>
</div>`,flagJsCode:`import { ref } from 'vue';
import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';
import 'flag-icons/css/flag-icons.min.css';

const selectedItems = ref(countries.slice(0, 3));
const dropdown = useMultiSelectDropdown({
  data: countries,
  selectedItems,
  onChange: (items) => { selectedItems.value = items; },
  settings: {
    text: 'Choose countries',
    enableSearchFilter: true,
    groupBy: 'region',
    selectGroup: true,
    badgeShowLimit: 3
  }
});`,flagJsonSnippet:i,flagClass:Og}},template:`
    <article class="example-row headless-flag-row">
      <div class="demo-cell">
        <h3>Headless countries with flag icons</h3>
        <div class="flag-picker" v-bind="flagDropdown.getRootProps()">
          <div class="flag-picker-header">
            <span>Custom HTML, custom CSS, Stackline state</span>
            <button v-bind="flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })">Clear</button>
          </div>

          <button v-bind="flagDropdown.getTriggerProps({ class: 'flag-trigger' })">
            <span>{{ flagLabel }}</span>
            <strong>{{ flagIsOpen ? 'Close' : 'Open' }}</strong>
          </button>

          <div class="flag-chip-list">
            <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">
              <span :class="'flag-icon ' + flagClass(item.flag)" aria-hidden="true"></span>
              {{ flagDropdown.getItemLabel(item) }}
              <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>
            </span>
            <span v-if="!flagSelectedItems.length" class="flag-empty">No selected countries</span>
          </div>

          <div v-if="flagIsOpen" v-bind="flagDropdown.getListboxProps({ class: 'flag-panel' })">
            <input v-bind="flagDropdown.getSearchInputProps({ class: 'flag-search' })" />
            <div
              v-for="option in flagOptions.slice(0, 24)"
              :key="option.key"
              v-bind="flagDropdown.getOptionProps(option, { class: option.selected ? 'flag-option selected' : 'flag-option' })"
            >
              <span :class="'flag-icon ' + flagClass(option.item.flag)" aria-hidden="true"></span>
              <span class="flag-option-copy">
                <strong>{{ option.label }}</strong>
                <small>{{ option.item.capital }} - {{ option.item.region }}</small>
              </span>
              <input type="checkbox" :checked="option.selected" readonly />
            </div>
          </div>
        </div>
      </div>
      <div class="code-card"><strong>Template</strong><pre>{{ flagTemplateCode }}</pre></div>
      <div class="code-card"><strong>JS</strong><pre>{{ flagJsCode }}</pre></div>
      <div class="code-card"><strong>JSON</strong><pre>{{ flagJsonSnippet }}</pre></div>
    </article>
  `},a_=Hu({components:{VueMultiselectDropdown:eg,HeadlessCase:r_,HeadlessFlagCase:i_,SkinSwitcherCase:{components:{VueMultiselectDropdown:eg},emits:[`record`],setup(e,{emit:t}){let n=F(`classic`),r=F(Z.slice(0,3)),i=B(()=>Pg(n.value,`Basic multi`,{badgeShowLimit:3,enableSearchFilter:!1})),a=B(()=>[`const skin = ref('${n.value}');`,`const skinSwitchSelected = ref(countries.slice(0, 3));`,``,`const skinSwitchSettings = computed(() => makeSettings(skin.value, "Basic multi", {`,`  badgeShowLimit: 3,`,`  enableSearchFilter: false`,`}));`].join(`
`)),o=B(()=>JSON.stringify({selected:r.value,settings:i.value},null,2));function s(e){r.value=e,t(`record`,`skin switch change: ${e.length} selected`)}function c(e,n){t(`record`,`${e}: ${Dg(n)}`)}return{countries:Z,skins:yg,skin:n,selected:r,settings:i,templateSnippet:`<vue-multiselect-dropdown
  :data="countries"
  v-model="skinSwitchSelected"
  :settings="skinSwitchSettings"
  @select="record('skin switch select', $event)"
  @de-select="record('skin switch deselect', $event)"
/>`,jsSnippet:a,jsonSnippet:o,labelFor:Eg,stackblitzUrl:kg,updateSelection:s,record:c}},template:`
    <section class="skin-section skin-switcher-section">
      <div class="section-heading">
        <p class="eyebrow">Settings-only skin switch</p>
        <h2>Skin switcher</h2>
      </div>

      <div class="skin-buttons">
        <button
          v-for="item in skins"
          :key="item"
          type="button"
          :class="{ active: skin === item }"
          @click="skin = item"
        >
          {{ labelFor(item) }}
        </button>
      </div>

      <article class="example-row custom-skin-sample">
        <div class="demo-cell">
          <h3>Updates only settings.skin</h3>
          <a class="stackblitz-row-link" :href="stackblitzUrl('basic')" target="_blank" rel="noopener">Open in StackBlitz</a>
          <vue-multiselect-dropdown
            :data="countries"
            v-model="selected"
            :settings="settings"
            @change="updateSelection"
            @select="record('skin switch select', $event)"
            @de-select="record('skin switch deselect', $event)"
          />
          <p class="settings-preview">skin: {{ skin }}</p>
        </div>
        <div class="code-card"><strong>Template</strong><pre>{{ templateSnippet }}</pre></div>
        <div class="code-card"><strong>JS</strong><pre>{{ jsSnippet }}</pre></div>
        <div class="code-card"><strong>JSON</strong><pre>{{ jsonSnippet }}</pre></div>
      </article>
    </section>
  `},FeatureLab:{components:{VueMultiselectDropdown:eg,HeadlessFlagCase:i_},emits:[`record`],setup(e,{emit:t}){let n=F(null),r=F(Z),i=F(Z.slice(0,4)),a=F(Z.slice(1,3)),o=F(Z.slice(3,6)),s=F(0),c=F(`Focus a target, then press Space, Tab, arrows, Escape, Backspace, or Delete.`),l=F({space:!0,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0}),u=F(`toggle`),d=B(()=>Object.assign({},l.value,{spaceOptionAction:u.value})),f=B(()=>JSON.stringify(d.value)),p=B(()=>Pg(`classic`,`3.1.6 contract test`,{badgeShowLimit:3,addNewItemOnFilter:!0,addNewButtonText:`Async add`,groupBy:`category`,selectGroup:!0,maxHeight:180,keyboard:d.value})),m=hg({data:Z,selectedItems:a,onChange(e){a.value=e,t(`record`,`headless hook change: ${e.length} selected`)},settings:Pg(`classic`,`Headless countries`,{enableSearchFilter:!0,searchPlaceholderText:`Search 64 countries`,groupBy:`category`,selectGroup:!0,badgeShowLimit:2,clearAll:!0,ariaLabel:`Headless countries`})}),h=mg({data:Z,selectedItems:o,onChange(e){o.value=e,t(`record`,`state hook change: ${e.length} selected`)},settings:Pg(`classic`,`State hook countries`,{enableSearchFilter:!0,badgeShowLimit:3,clearAll:!0})});function g(){let e=r.value[0]&&r.value[0].id===Z[0].id?Z.slice(10):Z;r.value=e,t(`record`,`3.1.6 data refresh: ${e.length} countries`)}function _(e){l.value=Object.assign({},l.value,{[e]:!l.value[e]})}async function v(e){let n=s.value+1;s.value=n,t(`record`,`3.1.6 async add start: ${n}: ${e}`),await new Promise(e=>window.setTimeout(e,n%2?650:120));let r={id:1e3+n,itemName:e,name:e.slice(0,2).toUpperCase(),capital:e,region:`Custom`,category:`Custom`};return t(`record`,`3.1.6 async add resolved: ${n}: ${e}`),r}function y(e){i.value=e,t(`record`,`3.1.6 contract change: ${e.length} selected`)}function b(e,t=0){lr(()=>{if(e===`search`){let e=n.value?.querySelector(`.vmsd-search-input`);if(e){e.focus(),c.value=`Space in search is normal typing. Empty-query Backspace does not remove selected values by default.`;return}}else{let e=Array.from(n.value?.querySelectorAll(`[data-vmsd-option="true"]:not([aria-disabled="true"])`)||[]),t=e.find(e=>e.textContent&&e.textContent.includes(`Chile`))||e[0];if(t){t.focus(),c.value=u.value===`toggle-and-next`?`Space on an option toggles it and moves focus to the next enabled option.`:`Space on an option toggles only that option and keeps focus there. Arrows move to another option.`;return}}t<8&&window.setTimeout(()=>b(e,t+1),40)})}function x(){let e=n.value?.querySelector(`.vmsd-trigger`);e&&e.getAttribute(`aria-expanded`)!==`true`&&e.click()}function S(e){let t=n.value?.querySelector(`.vmsd-root`);e===`trigger`?(t?.querySelector(`.vmsd-trigger`)?.focus(),c.value=`Space on trigger toggles the dropdown. It does not select an item.`):e===`clear`?(t?.querySelector(`.vmsd-clear`)?.focus(),c.value=`Space on clear-all activates that button and clears selected values.`):e===`badge`?(t?.querySelector(`.vmsd-badge-remove`)?.focus(),c.value=`Backspace or Delete on a focused badge remove button removes that selected badge intentionally.`):(x(),b(e))}return{countries:Z,contractCard:n,contractData:r,contractSelected:i,contractSettings:p,keyboardFeatures:bg,keyboardSettings:l,keyboardConfig:d,keyboardConfigPreview:f,keyboardScenario:c,spaceOptionActions:xg,spaceOptionAction:u,headless:m,headlessLabel:m.label,headlessIsOpen:m.isOpen,headlessVisibleBadges:m.visibleBadges,headlessHiddenBadgeCount:m.hiddenBadgeCount,headlessVisibleOptions:m.visibleOptions,state:h,stateSelectedItems:h.selectedItems,stateFilter:h.filter,stateFilteredItems:h.filteredItems,stateSelectableItems:h.selectableItems,stateVisibleBadges:h.visibleBadges,stateHiddenBadgeCount:h.hiddenBadgeCount,stateAllFilteredSelected:h.allFilteredSelected,itemLabel:Dg,toggleAsyncRefresh:g,toggleKeyboardFeature:_,addCountryFromFilter:v,updateContractSelection:y,focusContractTarget:S}},template:`
    <section class="skin-section feature-lab-section">
      <div class="section-heading">
        <p class="eyebrow">Vue 3.1.6 coverage</p>
        <h2>New functionality live lab</h2>
      </div>

      <div class="feature-lab-grid">
        <article class="feature-lab-card" ref="contractCard">
          <h3>Combobox contract + async object preservation</h3>
          <div class="method-bar">
            <button type="button" @click="toggleAsyncRefresh">Toggle async data source</button>
          </div>
          <div class="keyboard-contract">
            <strong>Keyboard contract</strong>
            <div class="keyboard-toggles" aria-label="Toggle keyboard behavior">
              <button
                v-for="feature in keyboardFeatures"
                :key="feature.key"
                type="button"
                :class="{ active: keyboardSettings[feature.key] }"
                :aria-pressed="keyboardSettings[feature.key] ? 'true' : 'false'"
                @click="toggleKeyboardFeature(feature.key)"
              >
                {{ feature.label }}
              </button>
            </div>
            <div class="space-mode-toggles" aria-label="Choose Space option behavior">
              <button
                v-for="action in spaceOptionActions"
                :key="action.key"
                type="button"
                :class="{ active: spaceOptionAction === action.key }"
                :aria-pressed="spaceOptionAction === action.key ? 'true' : 'false'"
                :title="action.description"
                @click="spaceOptionAction = action.key; keyboardScenario = action.description"
              >
                {{ action.label }}
              </button>
            </div>
            <div class="keyboard-targets" aria-label="Focus a keyboard test target">
              <button type="button" @click="focusContractTarget('trigger')">Focus trigger</button>
              <button type="button" @click="focusContractTarget('option')">Focus option</button>
              <button type="button" @click="focusContractTarget('search')">Focus search</button>
              <button type="button" @click="focusContractTarget('badge')">Focus badge</button>
              <button type="button" @click="focusContractTarget('clear')">Focus clear</button>
            </div>
            <p>{{ keyboardScenario }}</p>
            <p class="keyboard-settings-preview">settings.keyboard: {{ keyboardConfigPreview }}</p>
            <dl>
              <div><dt>Space</dt><dd>Trigger opens/closes. Search types a space. Buttons activate. Option behavior follows <code>spaceOptionAction</code>.</dd></div>
              <div><dt>Tab</dt><dd>Moves to the next focusable control. It never selects an option.</dd></div>
              <div><dt>Arrows</dt><dd>Move through options when the list is open.</dd></div>
              <div><dt>Escape</dt><dd>Closes the list without clearing selected values.</dd></div>
              <div><dt>Backspace</dt><dd>In search, edits text. Empty-query badge removal is off by default.</dd></div>
              <div><dt>Badge Delete</dt><dd>Backspace or Delete on a focused badge remove button removes that badge.</dd></div>
            </dl>
          </div>
          <vue-multiselect-dropdown
            :data="contractData"
            v-model="contractSelected"
            :settings="contractSettings"
            @change="updateContractSelection"
            @add-filter-new-item="addCountryFromFilter"
          />
          <p class="settings-preview">
            {{ contractData.length }} countries loaded. Test Backspace with and without query, focused badge Delete,
            Escape close, ArrowUp/Down, async add, and refresh while selected countries are missing from the new data page.
          </p>
        </article>

        <article v-bind="headless.getRootProps({ class: 'feature-lab-card' })">
          <h3>Headless hook</h3>
          <button v-bind="headless.getTriggerProps({ class: 'headless-test-trigger' })">
            <span>{{ headlessLabel }}</span>
            <strong>{{ headlessIsOpen ? 'Close' : 'Open' }}</strong>
          </button>
          <div class="headless-test-chips">
            <button
              v-for="item in headlessVisibleBadges"
              :key="headless.getItemKey(item)"
              v-bind="headless.getRemoveButtonProps(item)"
            >
              {{ headless.getItemLabel(item) }}
            </button>
            <span v-if="headlessHiddenBadgeCount > 0">+{{ headlessHiddenBadgeCount }}</span>
          </div>
          <div v-if="headlessIsOpen" v-bind="headless.getListboxProps({ class: 'headless-test-panel' })">
            <input v-bind="headless.getSearchInputProps({ class: 'headless-test-search' })" />
            <div
              v-for="option in headlessVisibleOptions.slice(0, 18)"
              :key="option.key"
              v-bind="headless.getOptionProps(option, { class: option.selected ? 'headless-test-option selected' : 'headless-test-option' })"
            >
              <span>{{ option.selected ? 'Selected' : 'Select' }}</span>
              <strong>{{ option.label }}</strong>
            </div>
          </div>
          <p class="settings-preview">Headless prop getters with ARIA, focus, Backspace, Escape, groups, and chips.</p>
        </article>

        <article class="feature-lab-card">
          <h3>State hook</h3>
          <div class="state-test-actions">
            <button type="button" @click="state.selectAll(stateSelectableItems)" :disabled="!stateSelectableItems.length || stateAllFilteredSelected">Select all visible</button>
            <button type="button" @click="state.clearSelection()" :disabled="!stateSelectedItems.length">Clear all</button>
            <button type="button" @click="state.removeLastSelectedItem()" :disabled="!stateSelectedItems.length">Remove last</button>
          </div>
          <input class="state-test-search" :value="stateFilter" placeholder="Filter state hook countries" @input="state.setFilter($event.target.value)" />
          <div class="state-test-chips">
            <button
              v-for="item in stateVisibleBadges"
              :key="state.getItemKey(item)"
              type="button"
              @click="state.removeItem(item)"
              @keydown.backspace.prevent="state.removeItem(item)"
              @keydown.delete.prevent="state.removeItem(item)"
            >
              {{ state.getItemLabel(item) }}
            </button>
            <span v-if="stateHiddenBadgeCount > 0">+{{ stateHiddenBadgeCount }}</span>
          </div>
          <div class="state-test-options">
            <button
              v-for="item in stateFilteredItems.slice(0, 18)"
              :key="state.getItemKey(item)"
              type="button"
              :class="{ selected: state.isSelected(item) }"
              @click="state.selectItem(item)"
            >
              {{ state.isSelected(item) ? 'Selected' : 'Select' }} {{ state.getItemLabel(item) }}
            </button>
          </div>
          <p class="settings-preview">
            Low-level state only: selection, filtering, select-all, clear-all, visible badge count, and empty-query Backspace.
          </p>
        </article>
      </div>

      <div class="case-list headless-flag-list">
        <headless-flag-case @record="$emit('record', $event)" />
      </div>
    </section>
  `}},data(){return{routes:Hg,liveNavItems:Kg,featurePills:Jg,apiCards:Yg,installCode:Xg,setupCode:Zg,settingsCode:Qg,renderCode:$g,currentSlug:t_(),events:[`ready`]}},computed:{isLiveMode(){return e_()},currentRoute(){return n_(this.currentSlug)},currentLiveSection(){if(!this.isLiveMode)return null;let e=this.currentSlug===`basic`?`classic`:this.currentSlug;return qg.find(t=>t.slug===e)},activeLiveSlug(){return this.currentLiveSection?this.currentLiveSection.slug:this.currentRoute.slug},liveProjectUrl(){return`live/#/${this.currentRoute.slug===`basic`?`classic`:this.currentRoute.slug}`},stackblitzRouteUrl(){return kg(this.currentRoute.slug)}},mounted(){window.addEventListener(`hashchange`,this.syncPath),window.addEventListener(`popstate`,this.syncPath)},beforeUnmount(){window.removeEventListener(`hashchange`,this.syncPath),window.removeEventListener(`popstate`,this.syncPath)},methods:{flagClass:Og,syncPath(){this.currentSlug=t_(),this.events=[`ready`]},navigate(e){window.location.hash=`#/`+e,this.currentSlug=e,this.events=[`ready`],window.scrollTo({top:0,left:0})},record(e){this.events=[e].concat(this.events).slice(0,10)}},template:`
    <main v-if="isLiveMode" class="page shell-page">
      <header class="topbar">
        <p class="eyebrow">Vue ${_g} runtime</p>
        <h1>@stackline/vue-multiselect-dropdown ${gg}</h1>
      </header>

      <nav class="live-nav-grid" aria-label="Vue 3 live sections">
        <a
          v-for="item in liveNavItems"
          :key="item.slug"
          :href="'#/' + item.slug"
          :class="{ active: item.slug === activeLiveSlug }"
          @click.prevent="navigate(item.slug)"
        >
          <strong>{{ item.title }}</strong>
          <span>{{ item.description }}</span>
        </a>
      </nav>

      <section class="docs-main">
        <feature-lab
          v-if="currentLiveSection && currentLiveSection.featureLab"
          @record="record"
        />

        <skin-switcher-case
          v-else-if="currentLiveSection && currentLiveSection.skinSwitcher"
          @record="record"
        />

        <section
          v-else-if="currentLiveSection"
          :class="'skin-section ' + currentLiveSection.sectionClass"
        >
          <div class="section-heading">
            <p class="eyebrow">{{ currentLiveSection.eyebrow }}</p>
            <h2>{{ currentLiveSection.title }}</h2>
            <p v-if="currentLiveSection.description" class="example-copy">{{ currentLiveSection.description }}</p>
          </div>

          <div class="case-list">
            <demo-case
              v-for="test in currentLiveSection.tests"
              :key="test.id"
              :test="test"
              @record="record"
            />
            <headless-case
              v-if="currentLiveSection.headlessOnly || currentLiveSection.headlessAfter"
              @record="record"
            />
          </div>
        </section>

        <section v-else class="skin-section">
          <div class="section-heading">
            <p class="eyebrow">{{ currentRoute.eyebrow }}</p>
            <h2>{{ currentRoute.title }}</h2>
            <p class="example-copy">{{ currentRoute.description }}</p>
            <a class="stackblitz-row-link" :href="stackblitzRouteUrl" target="_blank" rel="noopener">Open in StackBlitz</a>
          </div>

          <div class="case-list">
            <headless-case v-if="currentRoute.kind === 'headless'" @record="record" />
            <demo-case v-else v-for="test in currentRoute.tests" :key="test.id" :test="test" @record="record" />
          </div>
        </section>
      </section>

      <section class="activity">
        <h2>Event log</h2>
        <p v-if="!events.length">No events yet.</p>
        <p v-for="(event, index) in events" :key="event + index">{{ event }}</p>
      </section>

      <footer v-if="!currentLiveSection" class="example-footer" aria-label="Vue 3 example routes">
        <div class="footer-heading">
          <p class="eyebrow">Example routes</p>
          <h2>Open a focused Vue 3 example</h2>
        </div>

        <nav class="footer-link-grid">
          <a
            v-for="route in routes"
            :key="route.slug"
            :href="'#/' + route.slug"
            :class="{ active: route.slug === currentRoute.slug }"
            @click.prevent="navigate(route.slug)"
          >
            <span class="route-title">{{ route.title }}</span>
            <span class="route-path">/{{ route.slug }}</span>
          </a>
        </nav>
      </footer>
    </main>

    <div v-else class="docs-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">V</div>
          <div>
            <div class="topbar-eyebrow">Stackline maintained line</div>
            <h1>@stackline/vue-multiselect-dropdown</h1>
          </div>
        </div>

        <div class="topbar-meta">
          <span class="meta-pill">Vue 3.x</span>
          <span class="meta-pill primary">v${gg}</span>
        </div>
      </header>

      <div class="docs-layout">
        <aside class="rail">
          <section class="rail-card">
            <div class="rail-label">Overview</div>
            <a class="rail-link" href="#install">Install</a>
            <a class="rail-link" href="#preview">Preview</a>
            <a class="rail-link" href="#headless-aria">Headless HTML</a>
            <a class="rail-link" href="#api">API</a>
            <a class="rail-link" :href="liveProjectUrl" target="_blank" rel="noopener">Live project</a>
          </section>

          <section class="rail-card">
            <div class="rail-label">Examples</div>
            <nav class="example-nav" aria-label="Vue multiselect examples">
              <a
                v-for="route in routes"
                :key="route.slug"
                :href="'#/' + route.slug"
                :class="{ active: route.slug === currentRoute.slug }"
                class="example-link"
                @click="events = ['ready']"
              >
                {{ route.title }}
              </a>
            </nav>
          </section>

          <section class="rail-card">
            <div class="rail-label">Release line</div>
            <div class="release-item">
              <strong>Package</strong>
              <span>${gg}</span>
            </div>
            <div class="release-item">
              <strong>Vue</strong>
              <span>${_g}</span>
            </div>
            <div class="release-item">
              <strong>Docs path</strong>
              <span>/vue-3/</span>
            </div>
            <div class="release-item">
              <strong>Promise</strong>
              <span>Accessibility-focused and keyboard/ARIA tested support</span>
            </div>
          </section>
        </aside>

        <main class="docs-main">
          <section class="preview-card" id="preview">
            <div class="preview-head">
              <div>
                <div class="setup-label">Live preview</div>
                <h3>{{ currentRoute.title }}</h3>
                <p>
                  Running against package line <code>${gg}</code> and Vue
                  <code>${_g}</code>.
                </p>
              </div>
              <div class="preview-actions">
                <span class="status-pill">Classic selector preserved</span>
                <a class="stackblitz-button" :href="stackblitzRouteUrl" target="_blank" rel="noopener">Open StackBlitz</a>
                <a class="stackblitz-button" :href="liveProjectUrl" target="_blank" rel="noopener">Open live test</a>
              </div>
            </div>

            <div class="preview-example-link-row">
              <span>Focused Vue example</span>
              <a :href="'#/' + currentRoute.slug">{{ currentRoute.title }}</a>
            </div>

            <div class="preview-canvas">
              <headless-case v-if="currentRoute.kind === 'headless'" @record="record" />
              <demo-case v-else v-for="test in currentRoute.tests" :key="test.id" :test="test" @record="record" />
            </div>
          </section>

          <section class="hero-card">
            <span class="hero-badge">Vue 3 family · Multiselect dropdown</span>
            <h2>Material-inspired multiselect, shaped for controlled Vue applications.</h2>
            <p class="hero-copy">
              This Vue 3 line keeps the familiar Stackline settings contract while using idiomatic v-model,
              scoped slots, composables, and emitted events. Version <code>${gg}</code> includes
              accessibility-focused and keyboard/ARIA tested behavior, accurate badge counters, clear-all controls,
              dialog-safe body overlays, headless composables, vertically centered placeholders, and matching
              classic/material/dark/custom/brand skins.
            </p>

            <div class="pill-row">
              <span v-for="pill in featurePills" :key="pill" class="feature-pill">{{ pill }}</span>
            </div>

            <div class="compat-grid">
              <div class="compat-card">
                <strong>Vue state first</strong>
                Keep selection in reactive state through <code>v-model</code>.
              </div>
              <div class="compat-card">
                <strong>Consistent behavior where it matters</strong>
                Skins, counters, keyboard behavior, and body overlays follow the validated Stackline behavior.
              </div>
              <div class="compat-card">
                <strong>Slots instead of framework leakage</strong>
                Customize option rows and selected chips with scoped slots or render functions.
              </div>
            </div>
          </section>

          <section class="headless-section" id="headless-aria">
            <div class="headless-intro">
              <div>
                <div class="setup-label">Advanced Vue control</div>
                <h2>100% Custom HTML With ARIA</h2>
                <p>
                  Use <code>useMultiSelectDropdown</code> when your Vue app needs to own every tag, class,
                  wrapper, icon, and layout decision while Stackline keeps selection, grouping, keyboard flow,
                  callbacks, and ARIA prop getters.
                </p>
              </div>
            </div>
            <headless-case @record="record" />
          </section>

          <section class="setup-grid" id="install">
            <article class="setup-card">
              <div class="setup-label">Step 1</div>
              <h3>Install the package</h3>
              <pre>{{ installCode }}</pre>
            </article>

            <article class="setup-card">
              <div class="setup-label">Step 2</div>
              <h3>Import the component</h3>
              <pre>{{ setupCode }}</pre>
            </article>

            <article class="setup-card">
              <div class="setup-label">Step 3</div>
              <h3>Create settings</h3>
              <pre>{{ settingsCode }}</pre>
            </article>

            <article class="setup-card">
              <div class="setup-label">Step 4</div>
              <h3>Render with v-model</h3>
              <pre>{{ renderCode }}</pre>
            </article>
          </section>

          <section class="api-grid" id="api">
            <article v-for="card in apiCards" :key="card.title" class="api-card">
              <div class="setup-label">{{ card.kicker }}</div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.copy }}</p>
            </article>
          </section>

          <section class="activity">
            <h2>Event log</h2>
            <p v-if="!events.length">No events yet.</p>
            <p v-for="(event, index) in events" :key="event + index">{{ event }}</p>
          </section>
        </main>
      </div>
    </div>
  `});a_.component(`demo-case`,zg),a_.mount(`#app`);