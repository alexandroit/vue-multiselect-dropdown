var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var r={},i=[],a=()=>{},o=()=>!1,s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith(`onUpdate:`),l=Object.assign,u=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>w(e)===`[object Map]`,h=e=>w(e)===`[object Set]`,g=e=>w(e)===`[object Date]`,_=e=>w(e)===`[object RegExp]`,v=e=>typeof e==`function`,y=e=>typeof e==`string`,b=e=>typeof e==`symbol`,x=e=>typeof e==`object`&&!!e,S=e=>(x(e)||v(e))&&v(e.then)&&v(e.catch),C=Object.prototype.toString,w=e=>C.call(e),ee=e=>w(e).slice(8,-1),T=e=>w(e)===`[object Object]`,E=e=>y(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,te=n(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ne=n(`bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo`),D=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},re=/-\w/g,O=D(e=>e.replace(re,e=>e.slice(1).toUpperCase())),ie=/\B([A-Z])/g,ae=D(e=>e.replace(ie,`-$1`).toLowerCase()),k=D(e=>e.charAt(0).toUpperCase()+e.slice(1)),oe=D(e=>e?`on${k(e)}`:``),A=(e,t)=>!Object.is(e,t),se=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ce=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},le=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ue=e=>{let t=y(e)?Number(e):NaN;return isNaN(t)?e:t},de,fe=()=>de||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function pe(e,t){return e+JSON.stringify(t,(e,t)=>typeof t==`function`?t.toString():t)}var me=n(`Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol`);function he(e){if(p(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=y(r)?ye(r):he(r);if(i)for(let e in i)t[e]=i[e]}return t}if(y(e)||x(e))return e}var ge=/;(?![^(]*\))/g,_e=/:([^]+)/,ve=/\/\*[^]*?\*\//g;function ye(e){let t={};return e.replace(ve,``).split(ge).forEach(e=>{if(e){let n=e.split(_e);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function be(e){let t=``;if(y(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){let r=be(e[n]);r&&(t+=r+` `)}else if(x(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}function xe(e){if(!e)return null;let{class:t,style:n}=e;return t&&!y(t)&&(e.class=be(t)),n&&(e.style=he(n)),e}var Se=`html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot`,Ce=`svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view`,we=`annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics`,Te=`area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr`,Ee=n(Se),De=n(Ce),Oe=n(we),ke=n(Te),Ae=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,je=n(Ae);Ae+``;function Me(e){return!!e||e===``}function Ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Pe(e[r],t[r]);return n}function Pe(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=b(e),r=b(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return n&&r?Ne(e,t):!1;if(n=x(e),r=x(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Pe(e[n],t[n]))return!1}}return String(e)===String(t)}function Fe(e,t){return e.findIndex(e=>Pe(e,t))}var Ie=e=>!!(e&&e.__v_isRef===!0),Le=e=>y(e)?e:e==null?``:p(e)||x(e)&&(e.toString===C||!v(e.toString))?Ie(e)?Le(e.value):JSON.stringify(e,Re,2):String(e),Re=(e,t)=>Ie(t)?Re(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[ze(t,r)+` =>`]=n,e),{})}:h(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ze(e))}:b(t)?ze(t):x(t)&&!p(t)&&!T(t)?String(t):t,ze=(e,t=``)=>b(e)?`Symbol(${e.description??t})`:e;function Be(e){return e==null?`initial`:typeof e==`string`?e===``?` `:e:String(e)}var j,Ve=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&j&&(j.active?(this.parent=j,this.index=(j.scopes||(j.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=j;try{return j=this,e()}finally{j=t}}}on(){++this._on===1&&(this.prevScope=j,j=this)}off(){if(this._on>0&&--this._on===0){if(j===this)j=this.prevScope;else{let e=j;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function He(e){return new Ve(e)}function Ue(){return j}function We(e,t=!1){j&&j.cleanups.push(e)}var M,Ge=new WeakSet,Ke=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,j&&(j.active?j.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ge.has(this)&&(Ge.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dt(this),$e(this);let e=M,t=st;M=this,st=!0;try{return this.fn()}finally{et(this),M=e,st=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rt(e);this.deps=this.depsTail=void 0,dt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ge.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tt(this)&&this.run()}get dirty(){return tt(this)}},qe=0,Je,Ye;function Xe(e,t=!1){if(e.flags|=8,t){e.next=Ye,Ye=e;return}e.next=Je,Je=e}function Ze(){qe++}function Qe(){if(--qe>0)return;if(Ye){let e=Ye;for(Ye=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Je;){let t=Je;for(Je=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function $e(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function et(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),rt(r),it(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function tt(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(nt(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function nt(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ft)||(e.globalVersion=ft,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!tt(e))))return;e.flags|=2;let t=e.dep,n=M,r=st;M=e,st=!0;try{$e(e);let n=e.fn(e._value);(t.version===0||A(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,st=r,et(e),e.flags&=-3}}function rt(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)rt(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function it(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}function at(e,t){e.effect instanceof Ke&&(e=e.effect.fn);let n=new Ke(e);t&&l(n,t);try{n.run()}catch(e){throw n.stop(),e}let r=n.run.bind(n);return r.effect=n,r}function ot(e){e.effect.stop()}var st=!0,ct=[];function lt(){ct.push(st),st=!1}function ut(){let e=ct.pop();st=e===void 0||e}function dt(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var ft=0,pt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},mt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!st||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new pt(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,ht(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,ft++,this.notify(e)}notify(e){Ze();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Qe()}}};function ht(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)ht(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var gt=new WeakMap,_t=Symbol(``),vt=Symbol(``),yt=Symbol(``);function bt(e,t,n){if(st&&M){let t=gt.get(e);t||gt.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new mt),r.map=t,r.key=n),r.track()}}function xt(e,t,n,r,i,a){let o=gt.get(e);if(!o){ft++;return}let s=e=>{e&&e.trigger()};if(Ze(),t===`clear`)o.forEach(s);else{let i=p(e),a=i&&E(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===yt||!b(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(yt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(_t)),m(e)&&s(o.get(vt)));break;case`delete`:i||(s(o.get(_t)),m(e)&&s(o.get(vt)));break;case`set`:m(e)&&s(o.get(_t))}}Qe()}function St(e,t){let n=gt.get(e);return n&&n.get(t)}function Ct(e){let t=N(e);return t===e?t:(bt(t,`iterate`,yt),fn(e)?t:t.map(hn))}function wt(e){return bt(e=N(e),`iterate`,yt),e}function Tt(e,t){return dn(e)?gn(un(e)?hn(t):t):hn(t)}var Et={__proto__:null,[Symbol.iterator](){return Dt(this,Symbol.iterator,e=>Tt(this,e))},concat(...e){return Ct(this).concat(...e.map(e=>p(e)?Ct(e):e))},entries(){return Dt(this,`entries`,e=>(e[1]=Tt(this,e[1]),e))},every(e,t){return kt(this,`every`,e,t,void 0,arguments)},filter(e,t){return kt(this,`filter`,e,t,e=>e.map(e=>Tt(this,e)),arguments)},find(e,t){return kt(this,`find`,e,t,e=>Tt(this,e),arguments)},findIndex(e,t){return kt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return kt(this,`findLast`,e,t,e=>Tt(this,e),arguments)},findLastIndex(e,t){return kt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return kt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return jt(this,`includes`,e)},indexOf(...e){return jt(this,`indexOf`,e)},join(e){return Ct(this).join(e)},lastIndexOf(...e){return jt(this,`lastIndexOf`,e)},map(e,t){return kt(this,`map`,e,t,void 0,arguments)},pop(){return Mt(this,`pop`)},push(...e){return Mt(this,`push`,e)},reduce(e,...t){return At(this,`reduce`,e,t)},reduceRight(e,...t){return At(this,`reduceRight`,e,t)},shift(){return Mt(this,`shift`)},some(e,t){return kt(this,`some`,e,t,void 0,arguments)},splice(...e){return Mt(this,`splice`,e)},toReversed(){return Ct(this).toReversed()},toSorted(e){return Ct(this).toSorted(e)},toSpliced(...e){return Ct(this).toSpliced(...e)},unshift(...e){return Mt(this,`unshift`,e)},values(){return Dt(this,`values`,e=>Tt(this,e))}};function Dt(e,t,n){let r=wt(e),i=r[t]();return r!==e&&!fn(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var Ot=Array.prototype;function kt(e,t,n,r,i,a){let o=wt(e),s=o!==e&&!fn(e),c=o[t];if(c!==Ot[t]){let t=c.apply(e,a);return s?hn(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Tt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function At(e,t,n,r){let i=wt(e),a=i!==e&&!fn(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Tt(e,t)),n.call(this,t,Tt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Tt(e,c):c}function jt(e,t,n){let r=N(e);bt(r,`iterate`,yt);let i=r[t](...n);return(i===-1||i===!1)&&pn(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function Mt(e,t,n=[]){lt(),Ze();let r=N(e)[t].apply(e,n);return Qe(),ut(),r}var Nt=n(`__proto__,__v_isRef,__isVue`),Pt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(b));function Ft(e){b(e)||(e=String(e));let t=N(this);return bt(t,`has`,e),t.hasOwnProperty(e)}var It=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?nn:tn:i?en:$t).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=p(e);if(!r){let e;if(a&&(e=Et[t]))return e;if(t===`hasOwnProperty`)return Ft}let o=Reflect.get(e,t,P(e)?e:n);if((b(t)?Pt.has(t):Nt(t))||(r||bt(e,`get`,t),i))return o;if(P(o)){let e=a&&E(t)?o:o.value;return r&&x(e)?sn(e):e}return x(o)?r?sn(o):an(o):o}},Lt=class extends It{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=p(e)&&E(t);if(!this._isShallow){let e=dn(i);if(!fn(n)&&!dn(n)&&(i=N(i),n=N(n)),!a&&P(i)&&!P(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:f(e,t),s=Reflect.set(e,t,n,P(e)?e:r);return e===N(r)&&s&&(o?A(n,i)&&xt(e,`set`,t,n,i):xt(e,`add`,t,n)),s}deleteProperty(e,t){let n=f(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&xt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!b(t)||!Pt.has(t))&&bt(e,`has`,t),n}ownKeys(e){return bt(e,`iterate`,p(e)?`length`:_t),Reflect.ownKeys(e)}},Rt=class extends It{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},zt=new Lt,Bt=new Rt,Vt=new Lt(!0),Ht=new Rt(!0),Ut=e=>e,Wt=e=>Reflect.getPrototypeOf(e);function Gt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=m(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,u=i[e](...r),d=n?Ut:t?gn:hn;return!t&&bt(a,`iterate`,c?vt:_t),l(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:s?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Kt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function qt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(A(n,a)&&bt(i,`get`,n),bt(i,`get`,a));let{has:o}=Wt(i),s=t?Ut:e?gn:hn;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&bt(N(t),`iterate`,_t),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(A(t,i)&&bt(r,`has`,t),bt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?Ut:e?gn:hn;return!e&&bt(o,`iterate`,_t),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return l(n,e?{add:Kt(`add`),set:Kt(`set`),delete:Kt(`delete`),clear:Kt(`clear`)}:{add(e){let n=N(this),r=Wt(n),i=N(e),a=!t&&!fn(e)&&!dn(e)?i:e;return r.has.call(n,a)||A(e,a)&&r.has.call(n,e)||A(i,a)&&r.has.call(n,i)||(n.add(a),xt(n,`add`,a,a)),this},set(e,n){!t&&!fn(n)&&!dn(n)&&(n=N(n));let r=N(this),{has:i,get:a}=Wt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?A(n,s)&&xt(r,`set`,e,n,s):xt(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=Wt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&xt(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&xt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Gt(r,e,t)}),n}function Jt(e,t){let n=qt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(f(n,r)&&r in t?n:t,r,i)}var Yt={get:Jt(!1,!1)},Xt={get:Jt(!1,!0)},Zt={get:Jt(!0,!1)},Qt={get:Jt(!0,!0)},$t=new WeakMap,en=new WeakMap,tn=new WeakMap,nn=new WeakMap;function rn(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function an(e){return dn(e)?e:ln(e,!1,zt,Yt,$t)}function on(e){return ln(e,!1,Vt,Xt,en)}function sn(e){return ln(e,!0,Bt,Zt,tn)}function cn(e){return ln(e,!0,Ht,Qt,nn)}function ln(e,t,n,r,i){if(!x(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=rn(ee(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function un(e){return dn(e)?un(e.__v_raw):!!(e&&e.__v_isReactive)}function dn(e){return!!(e&&e.__v_isReadonly)}function fn(e){return!!(e&&e.__v_isShallow)}function pn(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function mn(e){return!f(e,`__v_skip`)&&Object.isExtensible(e)&&ce(e,`__v_skip`,!0),e}var hn=e=>x(e)?an(e):e,gn=e=>x(e)?sn(e):e;function P(e){return e?e.__v_isRef===!0:!1}function F(e){return vn(e,!1)}function _n(e){return vn(e,!0)}function vn(e,t){return P(e)?e:new yn(e,t)}var yn=class{constructor(e,t){this.dep=new mt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:hn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||fn(e)||dn(e);e=n?e:N(e),A(e,t)&&(this._rawValue=e,this._value=n?e:hn(e),this.dep.trigger())}};function bn(e){e.dep&&e.dep.trigger()}function xn(e){return P(e)?e.value:e}function Sn(e){return v(e)?e():xn(e)}var Cn={get:(e,t,n)=>t===`__v_raw`?e:xn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return P(i)&&!P(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function wn(e){return un(e)?e:new Proxy(e,Cn)}var Tn=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new mt,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function En(e){return new Tn(e)}function Dn(e){let t=p(e)?Array(e.length):{};for(let n in e)t[n]=jn(e,n);return t}var On=class{constructor(e,t,n){this._object=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=b(t)?t:String(t),this._raw=N(e);let r=!0,i=e;if(!p(e)||b(this._key)||!E(this._key))do r=!pn(i)||fn(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=xn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&P(this._raw[this._key])){let t=this._object[this._key];if(P(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return St(this._raw,this._key)}},kn=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function An(e,t,n){return P(e)?e:v(e)?new kn(e):x(e)&&arguments.length>1?jn(e,t,n):F(e)}function jn(e,t,n){return new On(e,t,n)}var Mn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new mt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ft-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return Xe(this,!0),!0}get value(){let e=this.dep.track();return nt(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Nn(e,t,n=!1){let r,i;return v(e)?r=e:(r=e.get,i=e.set),new Mn(r,i,n)}var Pn={GET:`get`,HAS:`has`,ITERATE:`iterate`},Fn={SET:`set`,ADD:`add`,DELETE:`delete`,CLEAR:`clear`},In={},Ln=new WeakMap,Rn=void 0;function zn(){return Rn}function Bn(e,t=!1,n=Rn){if(n){let t=Ln.get(n);t||Ln.set(n,t=[]),t.push(e)}}function Vn(e,t,n=r){let{immediate:i,deep:o,once:s,scheduler:c,augmentJob:l,call:d}=n,f=e=>o?e:fn(e)||o===!1||o===0?Hn(e,1):Hn(e),m,h,g,_,y=!1,b=!1;if(P(e)?(h=()=>e.value,y=fn(e)):un(e)?(h=()=>f(e),y=!0):p(e)?(b=!0,y=e.some(e=>un(e)||fn(e)),h=()=>e.map(e=>{if(P(e))return e.value;if(un(e))return f(e);if(v(e))return d?d(e,2):e()})):h=v(e)?t?d?()=>d(e,2):e:()=>{if(g){lt();try{g()}finally{ut()}}let t=Rn;Rn=m;try{return d?d(e,3,[_]):e(_)}finally{Rn=t}}:a,t&&o){let e=h,t=o===!0?1/0:o;h=()=>Hn(e(),t)}let x=Ue(),S=()=>{m.stop(),x&&x.active&&u(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(In):In,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e)){if(t){let n=m.run();if(e||o||y||(b?n.some((e,t)=>A(e,C[t])):A(n,C))){g&&g();let e=Rn;Rn=m;try{let e=[n,C===In?void 0:b&&C[0]===In?[]:C,_];C=n,d?d(t,3,e):t(...e)}finally{Rn=e}}}else m.run()}};return l&&l(w),m=new Ke(h),m.scheduler=c?()=>c(w,!1):w,_=e=>Bn(e,!1,m),g=m.onStop=()=>{let e=Ln.get(m);if(e){if(d)d(e,4);else for(let t of e)t();Ln.delete(m)}},t?i?w(!0):C=m.run():c?c(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function Hn(e,t=1/0,n){if(t<=0||!x(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,P(e))Hn(e.value,t,n);else if(p(e))for(let r=0;r<e.length;r++)Hn(e[r],t,n);else if(h(e)||m(e))e.forEach(e=>{Hn(e,t,n)});else if(T(e)){for(let r in e)Hn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Hn(e[r],t,n)}return e}var Un=[];function Wn(e){Un.push(e)}function Gn(){Un.pop()}function Kn(e,t){}var qn={SETUP_FUNCTION:0,0:`SETUP_FUNCTION`,RENDER_FUNCTION:1,1:`RENDER_FUNCTION`,NATIVE_EVENT_HANDLER:5,5:`NATIVE_EVENT_HANDLER`,COMPONENT_EVENT_HANDLER:6,6:`COMPONENT_EVENT_HANDLER`,VNODE_HOOK:7,7:`VNODE_HOOK`,DIRECTIVE_HOOK:8,8:`DIRECTIVE_HOOK`,TRANSITION_HOOK:9,9:`TRANSITION_HOOK`,APP_ERROR_HANDLER:10,10:`APP_ERROR_HANDLER`,APP_WARN_HANDLER:11,11:`APP_WARN_HANDLER`,FUNCTION_REF:12,12:`FUNCTION_REF`,ASYNC_COMPONENT_LOADER:13,13:`ASYNC_COMPONENT_LOADER`,SCHEDULER:14,14:`SCHEDULER`,COMPONENT_UPDATE:15,15:`COMPONENT_UPDATE`,APP_UNMOUNT_CLEANUP:16,16:`APP_UNMOUNT_CLEANUP`},Jn={sp:`serverPrefetch hook`,bc:`beforeCreate hook`,c:`created hook`,bm:`beforeMount hook`,m:`mounted hook`,bu:`beforeUpdate hook`,u:`updated`,bum:`beforeUnmount hook`,um:`unmounted hook`,a:`activated hook`,da:`deactivated hook`,ec:`errorCaptured hook`,rtc:`renderTracked hook`,rtg:`renderTriggered hook`,0:`setup function`,1:`render function`,2:`watcher getter`,3:`watcher callback`,4:`watcher cleanup function`,5:`native event handler`,6:`component event handler`,7:`vnode hook`,8:`directive hook`,9:`transition hook`,10:`app errorHandler`,11:`app warnHandler`,12:`ref function`,13:`async component loader`,14:`scheduler flush`,15:`component update`,16:`app unmount cleanup function`};function Yn(e,t,n,r){try{return r?e(...r):e()}catch(e){Zn(e,t,n)}}function Xn(e,t,n,r){if(v(e)){let i=Yn(e,t,n,r);return i&&S(i)&&i.catch(e=>{Zn(e,t,n)}),i}if(p(e)){let i=[];for(let a=0;a<e.length;a++)i.push(Xn(e[a],t,n,r));return i}}function Zn(e,t,n,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||r;if(t){let r=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}r=r.parent}if(o){lt(),Yn(o,null,10,[e,i,a]),ut();return}}Qn(e,n,a,i,s)}function Qn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var $n=[],er=-1,tr=[],nr=null,rr=0,ir=Promise.resolve(),ar=null;function or(e){let t=ar||ir;return e?t.then(this?e.bind(this):e):t}function sr(e){let t=er+1,n=$n.length;for(;t<n;){let r=t+n>>>1,i=$n[r],a=pr(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function cr(e){if(!(e.flags&1)){let t=pr(e),n=$n[$n.length-1];!n||!(e.flags&2)&&t>=pr(n)?$n.push(e):$n.splice(sr(t),0,e),e.flags|=1,lr()}}function lr(){ar||=ir.then(mr)}function ur(e){if(!p(e))nr&&e.id===-1?nr.splice(rr+1,0,e):e.flags&1||(tr.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)tr.push(e[t]);lr()}function dr(e,t,n=er+1){for(;n<$n.length;n++){let t=$n[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;$n.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function fr(e){if(tr.length){let e=[...new Set(tr)].sort((e,t)=>pr(e)-pr(t));if(tr.length=0,nr){for(let t=0;t<e.length;t++)nr.push(e[t]);return}for(nr=e,rr=0;rr<nr.length;rr++){let e=nr[rr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}nr=null,rr=0}}var pr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function mr(e){try{for(er=0;er<$n.length;er++){let e=$n[er];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;er<$n.length;er++){let e=$n[er];e&&(e.flags&=-2)}er=-1,$n.length=0,fr(e),ar=null,($n.length||tr.length)&&mr(e)}}var hr,gr=[];function _r(e,t){hr=e,hr?(hr.enabled=!0,gr.forEach(({event:e,args:t})=>hr.emit(e,...t)),gr=[]):typeof window<`u`&&window.HTMLElement&&!(window.navigator?.userAgent)?.includes(`jsdom`)?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(e=>{_r(e,t)}),setTimeout(()=>{hr||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,gr=[])},3e3)):gr=[]}var vr=null,yr=null;function br(e){let t=vr;return vr=e,yr=e&&e.type.__scopeId||null,t}function xr(e){yr=e}function Sr(){yr=null}var Cr=e=>wr;function wr(e,t=vr,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ws(-1);let i=br(t),a=ys.length,o;try{o=e(...n)}finally{for(let e=ys.length;e>a;e--)Ss();br(i),r._d&&ws(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Tr(e,t){if(vr===null)return e;let n=fc(vr),i=e.dirs||=[];for(let e=0;e<t.length;e++){let[a,o,s,c=r]=t[e];a&&(v(a)&&(a={mounted:a,updated:a}),a.deep&&Hn(o),i.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Er(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(lt(),Xn(c,n,8,[e.el,s,e,t]),ut())}}function Dr(e,t){if(Js){let n=Js.provides,r=Js.parent&&Js.parent.provides;r===n&&(n=Js.provides=Object.create(r)),n[e]=t}}function Or(e,t,n=!1){let r=Ys();if(r||mo){let i=mo?mo._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&v(t)?t.call(r&&r.proxy):t}}function kr(){return!!(Ys()||mo)}var Ar=Symbol.for(`v-scx`),jr=()=>Or(Ar);function Mr(e,t){return Ir(e,null,t)}function Nr(e,t){return Ir(e,null,{flush:`post`})}function Pr(e,t){return Ir(e,null,{flush:`sync`})}function Fr(e,t,n){return Ir(e,t,n)}function Ir(e,t,n=r){let{immediate:i,deep:o,flush:s,once:c}=n,u=l({},n),d=t&&i||!t&&s!==`post`,f;if(tc){if(s===`sync`){let e=jr();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=a,e.resume=a,e.pause=a,e}}let p=Js;u.call=(e,t,n)=>Xn(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{I(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():cr(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=Vn(e,t,u);return tc&&(f?f.push(h):d&&h()),h}function Lr(e,t,n){let r=this.proxy,i=y(e)?e.includes(`.`)?Rr(r,e):()=>r[e]:e.bind(r,r),a;v(t)?a=t:(a=t.handler,n=t);let o=Qs(this),s=Ir(i,a.bind(r),n);return o(),s}function Rr(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var zr=new WeakMap,Br=Symbol(`_vte`),Vr=e=>e.__isTeleport,Hr=e=>e&&(e.disabled||e.disabled===``),Ur=e=>e&&(e.defer||e.defer===``),Wr=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Gr=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Kr=(e,t)=>{let n=e&&e.to;return y(n)?t?t(n):null:n},qr={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Hr(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Hr(e.props),r=e.target=Kr(e.props,m),a=Qr(r,e,h,p);r&&(o!==`svg`&&Wr(r)?o=`svg`:o!==`mathml`&&Gr(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),Zr(e,!1)))},S=e=>{let t=()=>{if(zr.get(e)===t){if(zr.delete(e),Hr(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),Zr(e,!0)}x(e)}};zr.set(e,t),I(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Ur(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),Zr(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=zr.get(e);if(u){u.flags|=8,zr.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Hr(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Wr(p)?o=`svg`:(o===`mathml`||Gr(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),$o(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Jr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=Kr(t.props,m);e&&(t.target=e,Jr(t,e,null,l,0))}else g&&Jr(t,p,h,l,1);Zr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Hr(f),m=a||!p,h=zr.get(e);if(h&&(h.flags|=8,zr.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:Jr,hydrate:Yr};function Jr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!zr.has(e)&&(!d||Hr(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Yr(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=Kr(t.props,c),h=Hr(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||Qr(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||Qr(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),Zr(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var Xr=qr;function Zr(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function Qr(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Br]=o,e&&(r(a,e,i),r(o,e,i)),o}var $r=Symbol(`_leaveCb`),ei=Symbol(`_enterCb`);function ti(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sa(()=>{e.isMounted=!0}),ua(()=>{e.isUnmounting=!0}),e}var ni=[Function,Array],ri={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ni,onEnter:ni,onAfterEnter:ni,onEnterCancelled:ni,onBeforeLeave:ni,onLeave:ni,onAfterLeave:ni,onLeaveCancelled:ni,onBeforeAppear:ni,onAppear:ni,onAfterAppear:ni,onAppearCancelled:ni},ii=e=>{let t=e.subTree;return t.component?ii(t.component):t},ai={name:`BaseTransition`,props:ri,setup(e,{slots:t}){let n=Ys(),r=ti();return()=>{let i=t.default&&pi(t.default(),!0),a=i&&i.length?oi(i):n.subTree?zs():void 0;if(!a)return;let o=N(e),{mode:s}=o;if(r.isLeaving)return ui(a);let c=di(a);if(!c)return ui(a);let l=li(c,o,r,n,e=>l=e);c.type!==R&&fi(c,l);let u=n.subTree&&di(n.subTree);if(u&&u.type!==R&&!ks(u,c)&&ii(n).type!==R){let e=li(u,o,r,n);if(fi(u,e),s===`out-in`&&c.type!==R)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},ui(a);s===`in-out`&&c.type!==R?e.delayLeave=(e,t,n)=>{let i=ci(r,u);i[String(u.key)]=u,e[$r]=()=>{t(),e[$r]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function oi(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==R){t=n;break}}return t}var si=ai;function ci(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function li(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=ci(n,e),C=(e,t)=>{e&&Xn(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),p(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},ee={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted){if(a)r=_||c;else return}t[$r]&&t[$r](!0);let i=S[x];i&&ks(e,i)&&i.el[$r]&&i.el[$r](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=d;if(!n.isMounted){if(a)r=v||l,i=y||u,o=b||d;else return}let s=!1;t[ei]=e=>{s||(s=!0,C(e?o:i,[t]),ee.delayedLeave&&ee.delayedLeave(),t[ei]=void 0)};let c=t[ei].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[ei]&&t[ei](!0),n.isUnmounting)return r();C(f,[t]);let a=!1;t[$r]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[$r]=void 0,S[i]===e&&delete S[i])};let o=t[$r].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=li(e,t,n,r,i);return i&&i(a),a}};return ee}function ui(e){if(Yi(e))return e=Is(e),e.children=null,e}function di(e){if(!Yi(e))return Vr(e.type)&&e.children?oi(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&v(n.default))return n.default()}}function fi(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;fi(Vr(n.type)&&di(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pi(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===L?(o.patchFlag&128&&i++,r=r.concat(pi(o.children,t,s))):(t||o.type!==R)&&r.push(s==null?o:Is(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function mi(e,t){return v(e)?l({name:e.name},t,{setup:e}):e}function hi(){let e=Ys();return e?(e.appContext.config.idPrefix||`v`)+`-`+e.ids[0]+e.ids[1]++:``}function gi(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function _i(e){let t=Ys(),n=_n(null);if(t){let i=t.refs===r?t.refs={}:t.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>n.value,set:e=>n.value=e})}return n}function vi(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var yi=new WeakMap;function bi(e,t,n,i,a=!1){if(p(e)){e.forEach((e,r)=>bi(e,t&&(p(t)?t[r]:t),n,i,a));return}if(Ki(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&bi(e,t,n,i.component.subTree);return}let s=i.shapeFlag&4?fc(i.component):i.el,c=a?null:s,{i:l,r:d}=e,m=t&&t.r,h=l.refs===r?l.refs={}:l.refs,g=l.setupState,_=N(g),b=g===r?o:e=>!vi(h,e)&&f(_,e),x=(e,t)=>!(t&&vi(h,t));if(m!=null&&m!==d){if(xi(t),y(m))h[m]=null,b(m)&&(g[m]=null);else if(P(m)){let e=t;x(m,e.k)&&(m.value=null),e.k&&(h[e.k]=null)}}if(v(d))Yn(d,l,12,[c,h]);else{let t=y(d),r=P(d);if(t||r){let i=()=>{if(e.f){let n=t?b(d)?g[d]:h[d]:x(d)||!e.k?d.value:h[e.k];if(a)p(n)&&u(n,s);else if(p(n))n.includes(s)||n.push(s);else if(t)h[d]=[s],b(d)&&(g[d]=h[d]);else{let t=[s];x(d,e.k)&&(d.value=t),e.k&&(h[e.k]=t)}}else t?(h[d]=c,b(d)&&(g[d]=c)):r&&(x(d,e.k)&&(d.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),yi.delete(e)};t.id=-1,yi.set(e,t),I(t,n)}else xi(e),i()}}}function xi(e){let t=yi.get(e);t&&(t.flags|=8,yi.delete(e))}var Si=!1,Ci=()=>{Si||=(console.error(`Hydration completed but contains mismatches.`),!0)},wi=e=>e.namespaceURI.includes(`svg`)&&e.tagName!==`foreignObject`,Ti=e=>e.namespaceURI.includes(`MathML`),Ei=e=>{if(e.nodeType===1){if(wi(e))return`svg`;if(Ti(e))return`mathml`}},Di=e=>e.nodeType===8;function Oi(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:a,parentNode:o,remove:c,insert:l,createComment:u}}=e,d=(e,t)=>{if(!t.hasChildNodes()){n(null,e,t),fr(),t._vnode=e;return}f(t.firstChild,e,null,null,null),fr(),t._vnode=e},f=(n,r,s,c,u,d=!1)=>{d||=!!r.dynamicChildren;let b=Di(n)&&n.data===`[`,x=()=>g(n,r,s,c,u,b),{type:S,ref:C,shapeFlag:w,patchFlag:ee}=r,T=n.nodeType;r.el=n,ee===-2&&(d=!1,r.dynamicChildren=null);let E=null;switch(S){case _s:T===3?(n.data!==r.children&&(Ci(),n.data=r.children),E=a(n)):r.children===``?(l(r.el=i(``),o(n),n),E=n):E=x();break;case R:y(n)?(E=a(n),v(r.el=n.content.firstChild,n,s)):E=T!==8||b?x():a(n);break;case vs:if(b&&(n=a(n),T=n.nodeType),T===1||T===3){E=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=E.nodeType===1?E.outerHTML:E.data),t===r.staticCount-1&&(r.anchor=E),E=a(E);return b?a(E):E}x();break;case L:E=b?h(n,r,s,c,u,d):x();break;default:if(w&1)E=(T!==1||r.type.toLowerCase()!==n.tagName.toLowerCase())&&!y(n)?x():p(n,r,s,c,u,d);else if(w&6){r.slotScopeIds=u;let e=o(n);if(E=b?_(n):Di(n)&&n.data===`teleport start`?_(n,n.data,`teleport end`):a(n),t(r,e,null,s,c,Ei(e),d),Ki(r)&&!r.type.__asyncResolved){let t;b?(t=z(L),t.anchor=E?E.previousSibling:e.lastChild):t=n.nodeType===3?Ls(``):z(`div`),t.el=n,r.component.subTree=t}}else w&64?E=T===8?r.type.hydrate(n,r,s,c,u,d,e,m):x():w&128&&(E=r.type.hydrate(n,r,s,c,Ei(o(n)),u,d,e,f))}return C!=null&&bi(C,null,c,r),E},p=(e,t,n,i,a,o)=>{o||=!!t.dynamicChildren;let{type:l,dynamicProps:u,props:d,patchFlag:f,shapeFlag:p,dirs:h,transition:g}=t,_=l===`input`||l===`option`,b=!!u;if(_||b||f!==-1){h&&Er(t,null,n,`created`);let l=!1;if(y(e)){l=Qo(null,g)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;if(l){let e=r.getAttribute(`class`);e&&(r.$cls=e),g.beforeEnter(r)}v(r,e,n),t.el=e=r}if(p&16&&!(d&&(d.innerHTML||d.textContent))){let r=m(e.firstChild,t,e,n,i,a,o);for(r&&!Ni(e,1)&&Ci();r;){let e=r;r=r.nextSibling,c(e)}}else if(p&8){let n=t.children;n[0]===`
`&&(e.tagName===`PRE`||e.tagName===`TEXTAREA`)&&(n=n.slice(1));let{textContent:r}=e;r!==n&&r!==n.replace(/\r\n|\r/g,`
`)&&(Ni(e,0)||Ci(),e.textContent=t.children)}if(d){if(_||b||!o||f&48){let t=e.tagName.includes(`-`),i=e.namespaceURI.includes(`svg`)?`svg`:e.namespaceURI.includes(`MathML`)?`mathml`:void 0;for(let a in d)if(_&&(a.endsWith(`value`)||a===`indeterminate`)||s(a)&&!te(a)||a[0]===`.`||t&&!te(a)||u&&u.includes(a)){if(Ai(e,a,d[a]))continue;r(e,a,null,d[a],i,n)}}else if(d.onClick)r(e,`onClick`,null,d.onClick,void 0,n);else if(f&4&&un(d.style))for(let e in d.style)d.style[e]}let x;(x=d&&d.onVnodeBeforeMount)&&Ws(x,n,t),h&&Er(t,null,n,`beforeMount`),((x=d&&d.onVnodeMounted)||h||l)&&ms(()=>{x&&Ws(x,n,t),l&&g.enter(e),h&&Er(t,null,n,`mounted`)},i)}return e.nextSibling},m=(e,t,r,o,s,c,u)=>{u||=!!t.dynamicChildren;let d=t.children,p=d.length,m=!1;for(let t=0;t<p;t++){let h=u?d[t]:d[t]=Bs(d[t]),g=h.type===_s;e?(g&&!u&&t+1<p&&Bs(d[t+1]).type===_s&&(l(i(e.data.slice(h.children.length)),r,a(e)),e.data=h.children),e=f(e,h,o,s,c,u)):g&&!h.children?l(h.el=i(``),r):(m||(m=!0,Ni(r,1)||Ci()),n(null,h,r,null,o,s,Ei(r),c))}return e},h=(e,t,n,r,i,s)=>{let{slotScopeIds:c}=t;c&&(i=i?i.concat(c):c);let d=o(e),f=m(a(e),t,d,n,r,i,s);return f&&Di(f)&&f.data===`]`?a(t.anchor=f):(Ci(),l(t.anchor=u(`]`),d,f),f)},g=(e,t,r,i,s,l)=>{if(Fi(e,t)||Ci(),t.el=null,l){let t=_(e);for(;;){let n=a(e);if(n&&n!==t)c(n);else break}}let u=a(e),d=o(e);return c(e),n(null,t,d,u,r,i,Ei(d),s),r&&(r.vnode.el=t.el,Oo(r,t.el)),u},_=(e,t=`[`,n=`]`)=>{let r=0;for(;e;)if(e=a(e),e&&Di(e)&&(e.data===t&&r++,e.data===n)){if(r===0)return a(e);r--}return e},v=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},y=e=>e.nodeType===1&&e.tagName===`TEMPLATE`;return[d,f]}var ki=new Set([`src`,`srcset`,`href`,`poster`]);function Ai(e,t,n){return ki.has(t)?e.getAttribute(t)===(n==null?null:`${n}`):!1}var ji=`data-allow-mismatch`,Mi={0:`text`,1:`children`,2:`class`,3:`style`,4:`attribute`};function Ni(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(ji);)e=e.parentElement;return Pi(e&&e.getAttribute(ji),t)}function Pi(e,t){if(e==null)return!1;if(e===``)return!0;{let n=e.split(`,`);return t===0&&n.includes(`children`)?!0:n.includes(Mi[t])}}function Fi(e,t){return Ni(e.parentElement,1)||Ii(e)||Li(t)}function Ii(e){return e.nodeType===1&&Pi(e.getAttribute(ji),1)}function Li({props:e}){let t=e&&e[ji];return typeof t==`string`&&Pi(t,1)}var Ri=fe().requestIdleCallback||(e=>setTimeout(e,1)),zi=fe().cancelIdleCallback||(e=>clearTimeout(e)),Bi=(e=1e4)=>t=>{let n=Ri(t,{timeout:e});return()=>zi(n)};function Vi(e){let{top:t,left:n,bottom:r,right:i}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:o}=window;return(t>0&&t<a||r>0&&r<a)&&(n>0&&n<o||i>0&&i<o)}var Hi=e=>(t,n)=>{let r=new IntersectionObserver(e=>{for(let n of e)if(n.isIntersecting){r.disconnect(),t();break}},e);return n(e=>{if(e instanceof Element){if(Vi(e))return t(),r.disconnect(),!1;r.observe(e)}}),()=>r.disconnect()},Ui=e=>t=>{if(e){let n=matchMedia(e);if(n.matches)t();else return n.addEventListener(`change`,t,{once:!0}),()=>n.removeEventListener(`change`,t)}},Wi=(e=[])=>(t,n)=>{y(e)&&(e=[e]);let r=!1,i=e=>{r||(r=!0,a(),t(),e.target.dispatchEvent(new e.constructor(e.type,e)))},a=()=>{n(t=>{for(let n of e)t.removeEventListener(n,i)})};return n(t=>{for(let n of e)t.addEventListener(n,i,{once:!0})}),a};function Gi(e,t){if(Di(e)&&e.data===`[`){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Di(r)){if(r.data===`]`){if(--n===0)break}else r.data===`[`&&n++}r=r.nextSibling}}else t(e)}var Ki=e=>!!e.type.__asyncLoader;function qi(e){v(e)&&(e={loader:e});let{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:a,timeout:o,suspensible:s=!0,onError:c}=e,l=null,u,d=0,f=()=>(d++,l=null,p()),p=()=>{let e;return l||(e=l=t().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),c)return new Promise((t,n)=>{c(e,()=>t(f()),()=>n(e),d+1)});throw e}).then(t=>e!==l&&l?l:(t&&(t.__esModule||t[Symbol.toStringTag]===`Module`)&&(t=t.default),u=t,t)))};return mi({name:`AsyncComponentWrapper`,__asyncLoader:p,__asyncHydrate(e,t,n){let r=e.isConnected,i=!1;(t.bu||=[]).push(()=>i=!0);let o=()=>{i||!e.parentNode||r&&!e.isConnected||n()},s=a?()=>{let n=a(o,t=>Gi(e,t));n&&(t.bum||=[]).push(n)}:o;u?s():p().then(()=>!t.isUnmounted&&s())},get __asyncResolved(){return u},setup(){let e=Js;if(gi(e),u)return()=>Ji(u,e);let t=t=>{l=null,Zn(t,e,13,!r)};if(s&&e.suspense||tc)return p().then(t=>()=>Ji(t,e)).catch(e=>(t(e),()=>r?z(r,{error:e}):null));let a=F(!1),c=F(),d=F(!!i),f,m;return da(()=>{f!=null&&clearTimeout(f),m!=null&&clearTimeout(m)}),i&&(m=setTimeout(()=>{e.isUnmounted||(d.value=!1)},i)),o!=null&&(f=setTimeout(()=>{if(!e.isUnmounted&&!a.value&&!c.value){let e=Error(`Async component timed out after ${o}ms.`);t(e),c.value=e}},o)),p().then(()=>{e.isUnmounted||(a.value=!0,e.parent&&Yi(e.parent.vnode)&&e.parent.update())}).catch(n=>{if(e.isUnmounted){l=null;return}t(n),c.value=n}),()=>{if(a.value&&u)return Ji(u,e);if(c.value&&r)return z(r,{error:c.value});if(n&&!d.value)return Ji(n,e)}}})}function Ji(e,t){let{ref:n,props:r,children:i,ce:a}=t.vnode,o=z(e,r,i);return o.ref=n,o.ce=a,delete t.vnode.ce,o}var Yi=e=>e.type.__isKeepAlive,Xi={name:`KeepAlive`,__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){let n=Ys(),r=n.ctx;if(!r.renderer)return()=>{let e=t.default&&t.default();return e&&e.length===1?e[0]:e};let i=new Map,a=new Set,o=null,s=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:d}}}=r,f=d(`div`);r.activate=(e,t,n,r,i)=>{let a=e.component;l(e,t,n,0,s),c(a.vnode,e,t,n,a,s,r,e.slotScopeIds,i),I(()=>{a.isDeactivated=!1,a.a&&se(a.a);let t=e.props&&e.props.onVnodeMounted;t&&Ws(t,a.parent,e)},s)},r.deactivate=e=>{let t=e.component;ns(t.m),ns(t.a),l(e,f,null,1,s),I(()=>{t.da&&se(t.da);let n=e.props&&e.props.onVnodeUnmounted;n&&Ws(n,t.parent,e),t.isDeactivated=!0},s)};function p(e){na(e),u(e,n,s,!0)}function m(e){i.forEach((t,n)=>{let r=pc(Ki(t)?t.type.__asyncResolved||{}:t.type);r&&!e(r)&&h(n)})}function h(e){let t=i.get(e);t&&(!o||!ks(t,o))?p(t):o&&na(o),i.delete(e),a.delete(e)}Fr(()=>[e.include,e.exclude],([e,t])=>{e&&m(t=>Zi(e,t)),t&&m(e=>!Zi(t,e))},{flush:`post`,deep:!0});let g=null,_=()=>{g!=null&&(is(n.subTree.type)?I(()=>{i.set(g,ra(n.subTree))},n.subTree.suspense):i.set(g,ra(n.subTree)))};return sa(_),la(_),ua(()=>{i.forEach(e=>{let{subTree:t,suspense:r}=n,i=ra(t);if(e.type===i.type&&e.key===i.key){na(i);let e=i.component.da;e&&I(e,r);return}p(e)})}),()=>{if(g=null,!t.default)return o=null;let n=t.default(),r=n[0];if(n.length>1)return o=null,n;if(!Os(r)||!(r.shapeFlag&4)&&!(r.shapeFlag&128))return o=null,r;let s=ra(r);if(s.type===R)return o=null,s;let c=s.type,l=pc(Ki(s)?s.type.__asyncResolved||{}:c),{include:u,exclude:d,max:f}=e;if(u&&(!l||!Zi(u,l))||d&&l&&Zi(d,l))return s.shapeFlag&=-257,o=s,r;let p=s.key==null?c:s.key,m=i.get(p);return s.el&&(s=Is(s),r.shapeFlag&128&&(r.ssContent=s)),g=p,m?(s.el=m.el,s.component=m.component,s.transition&&fi(s,s.transition),s.shapeFlag|=512,a.delete(p),a.add(p)):(a.add(p),f&&a.size>parseInt(f,10)&&h(a.values().next().value)),s.shapeFlag|=256,o=s,is(r.type)?r:s}}};function Zi(e,t){return p(e)?e.some(e=>Zi(e,t)):y(e)?e.split(`,`).includes(t):_(e)?(e.lastIndex=0,e.test(t)):!1}function Qi(e,t){ea(e,`a`,t)}function $i(e,t){ea(e,`da`,t)}function ea(e,t,n=Js){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(ia(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Yi(e.parent.vnode)&&ta(r,t,n,e),e=e.parent}}function ta(e,t,n,r){let i=ia(t,e,r,!0);da(()=>{u(r[t],i)},n)}function na(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ra(e){return e.shapeFlag&128?e.ssContent:e}function ia(e,t,n=Js,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{lt();let i=Qs(n),a=Xn(t,n,e,r);return i(),ut(),a};return r?i.unshift(a):i.push(a),a}}var aa=e=>(t,n=Js)=>{(!tc||e===`sp`)&&ia(e,(...e)=>t(...e),n)},oa=aa(`bm`),sa=aa(`m`),ca=aa(`bu`),la=aa(`u`),ua=aa(`bum`),da=aa(`um`),fa=aa(`sp`),pa=aa(`rtg`),ma=aa(`rtc`);function ha(e,t=Js){ia(`ec`,e,t)}var ga=`components`,_a=`directives`;function va(e,t){return Sa(ga,e,!0,t)||e}var ya=Symbol.for(`v-ndc`);function ba(e){return y(e)?Sa(ga,e,!1)||e:e||ya}function xa(e){return Sa(_a,e)}function Sa(e,t,n=!0,r=!1){let i=vr||Js;if(i){let n=i.type;if(e===ga){let e=pc(n,!1);if(e&&(e===t||e===O(t)||e===k(O(t))))return n}let a=Ca(i[e]||n[e],t)||Ca(i.appContext[e],t);return!a&&r?n:a}}function Ca(e,t){return e&&(e[t]||e[O(t)]||e[k(O(t))])}function wa(e,t,n,r){let i,a=n&&n[r],o=p(e);if(o||y(e)){let n=o&&un(e),r=!1,s=!1;n&&(r=!fn(e),s=dn(e),e=wt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?gn(hn(e[n])):hn(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(x(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}function Ta(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(p(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function Ea(e,t,n,r,i,a){if(n??={},vr.ce||vr.parent&&Ki(vr.parent)&&vr.parent.ce){let e=a!=null&&n.key==null?l({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),xs(),Ds(L,null,[z(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=ys.length;xs();let c;try{let i=o&&Da(o(n)),s=n.key||a||i&&i.key;c=Ds(L,{key:(s&&!b(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=ys.length;e>s;e--)Ss();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),c}function Da(e){return e.some(e=>!Os(e)||!(e.type===R||e.type===L&&!Da(e.children)))?e:null}function Oa(e,t){let n={};for(let r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:oe(r)]=e[r];return n}var ka=e=>e?ec(e)?fc(e):ka(e.parent):null,Aa=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ka(e.parent),$root:e=>ka(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>eo(e),$forceUpdate:e=>e.f||=()=>{cr(e.update)},$nextTick:e=>e.n||=or.bind(e.proxy),$watch:e=>Lr.bind(e)}),ja=(e,t)=>e!==r&&!e.__isScriptSetup&&f(e,t),Ma={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else if(ja(i,t))return s[t]=1,i[t];else if(a!==r&&f(a,t))return s[t]=2,a[t];else if(f(o,t))return s[t]=3,o[t];else if(n!==r&&f(n,t))return s[t]=4,n[t];else Ya&&(s[t]=0)}let u=Aa[t],d,p;if(u)return t===`$attrs`&&bt(e.attrs,`get`,``),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==r&&f(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,f(p,t))return p[t]},set({_:e},t,n){let{data:i,setupState:a,ctx:o}=e;return ja(a,t)?(a[t]=n,!0):i!==r&&f(i,t)?(i[t]=n,!0):f(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(n[c]||e!==r&&c[0]!==`$`&&f(e,c)||ja(t,c)||f(o,c)||f(i,c)||f(Aa,c)||f(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?f(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}},Na=l({},Ma,{get(e,t){if(t!==Symbol.unscopables)return Ma.get(e,t,e)},has(e,t){return t[0]!==`_`&&!me(t)}});function Pa(){return null}function Fa(){return null}function Ia(e){}function La(e){}function Ra(){return null}function za(){}function Ba(e,t){return null}function Va(){return Ua(`useSlots`).slots}function Ha(){return Ua(`useAttrs`).attrs}function Ua(e){let t=Ys();return t.setupContext||=dc(t)}function Wa(e){return p(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function Ga(e,t){let n=Wa(e);for(let e in t){if(e.startsWith(`__skip`))continue;let r=n[e];r?p(r)||v(r)?r=n[e]={type:r,default:t[e]}:r.default=t[e]:r===null&&(r=n[e]={default:t[e]}),r&&t[`__skip_${e}`]&&(r.skipFactory=!0)}return n}function Ka(e,t){return!e||!t?e||t:p(e)&&p(t)?e.concat(t):l({},Wa(e),Wa(t))}function qa(e,t){let n={};for(let r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Ja(e){let t=Ys(),n=tc,r=e();$s(),n&&Zs(!1);let i=()=>{Qs(t),n&&Zs(!0)},a=()=>{Ys()!==t&&t.scope.off(),$s(),n&&Zs(!1)};return S(r)&&(r=r.catch(e=>{throw i(),Promise.resolve().then(()=>Promise.resolve().then(a)),e})),[r,()=>{i(),Promise.resolve().then(a)}]}var Ya=!0;function Xa(e){let t=eo(e),n=e.proxy,r=e.ctx;Ya=!1,t.beforeCreate&&Qa(t.beforeCreate,e,`bc`);let{data:i,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:g,activated:_,deactivated:y,beforeDestroy:b,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:T,renderTriggered:E,errorCaptured:te,serverPrefetch:ne,expose:D,inheritAttrs:re,components:O,directives:ie,filters:ae}=t;if(u&&Za(u,r,null),s)for(let e in s){let t=s[e];v(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);x(t)&&(e.data=an(t))}if(Ya=!0,o)for(let e in o){let t=o[e],i=B({get:v(t)?t.bind(n,n):v(t.get)?t.get.bind(n,n):a,set:!v(t)&&v(t.set)?t.set.bind(n):a});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(c)for(let e in c)$a(c[e],r,n,e);if(l){let e=v(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Dr(t,e[t])})}d&&Qa(d,e,`c`);function k(e,t){p(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(k(oa,f),k(sa,m),k(ca,h),k(la,g),k(Qi,_),k($i,y),k(ha,te),k(ma,T),k(pa,E),k(ua,S),k(da,w),k(fa,ne),p(D)){if(D.length){let t=e.exposed||={};D.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}ee&&e.render===a&&(e.render=ee),re!=null&&(e.inheritAttrs=re),O&&(e.components=O),ie&&(e.directives=ie),ne&&gi(e)}function Za(e,t,n=a){p(e)&&(e=ao(e));for(let n in e){let r=e[n],i;i=x(r)?`default`in r?Or(r.from||n,r.default,!0):Or(r.from||n):Or(r),P(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Qa(e,t,n){Xn(p(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function $a(e,t,n,r){let i=r.includes(`.`)?Rr(n,r):()=>n[r];if(y(e)){let n=t[e];v(n)&&Fr(i,n)}else if(v(e))Fr(i,e.bind(n));else if(x(e)){if(p(e))e.forEach(e=>$a(e,t,n,r));else{let r=v(e.handler)?e.handler.bind(n):t[e.handler];v(r)&&Fr(i,r,e)}}}function eo(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>to(c,e,o,!0)),to(c,t,o)),x(t)&&a.set(t,c),c}function to(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&to(e,a,n,!0),i&&i.forEach(t=>to(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=no[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var no={data:ro,props:co,emits:co,methods:so,computed:so,beforeCreate:oo,created:oo,beforeMount:oo,mounted:oo,beforeUpdate:oo,updated:oo,beforeDestroy:oo,beforeUnmount:oo,destroyed:oo,unmounted:oo,activated:oo,deactivated:oo,errorCaptured:oo,serverPrefetch:oo,components:so,directives:so,watch:lo,provide:ro,inject:io};function ro(e,t){return t?e?function(){return l(v(e)?e.call(this,this):e,v(t)?t.call(this,this):t)}:t:e}function io(e,t){return so(ao(e),ao(t))}function ao(e){if(p(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oo(e,t){return e?[...new Set([].concat(e,t))]:t}function so(e,t){return e?l(Object.create(null),e,t):t}function co(e,t){return e?p(e)&&p(t)?[...new Set([...e,...t])]:l(Object.create(null),Wa(e),Wa(t??{})):t}function lo(e,t){if(!e)return t;if(!t)return e;let n=l(Object.create(null),e);for(let r in t)n[r]=oo(e[r],t[r]);return n}function uo(){return{app:null,config:{isNativeTag:o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var fo=0;function po(e,t){return function(n,r=null){v(n)||(n=l({},n)),r!=null&&!x(r)&&(r=null);let i=uo(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:fo++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:yc,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&v(e.install)?(a.add(e),e.install(c,...t)):v(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||z(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,fc(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(Xn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=mo;mo=c;try{return e()}finally{mo=t}}};return c}}var mo=null;function ho(e,t,n=r){let i=Ys(),a=O(t),o=ae(t),s=go(e,a),c=En((s,c)=>{let l,u=r,d;return Pr(()=>{let t=e[a];A(l,t)&&(l=t,c())}),{get(){return s(),n.get?n.get(l):l},set(e){let s=n.set?n.set(e):e;if(!A(s,l)&&!(u!==r&&A(e,u)))return;let f=i.vnode.props,p=!!(f&&(t in f||a in f||o in f)&&(`onUpdate:${t}`in f||`onUpdate:${a}`in f||`onUpdate:${o}`in f));p||(l=e,c()),i.emit(`update:${t}`,s),A(e,u)&&(A(e,s)&&!A(s,d)||p&&u!==r&&!A(s,l))&&c(),u=e,d=s}}});return c[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?s||r:c,done:!1}:{done:!0}}}},c}var go=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${O(t)}Modifiers`]||e[`${ae(t)}Modifiers`];function _o(e,t,...n){if(e.isUnmounted)return;let i=e.vnode.props||r,a=n,o=t.startsWith(`update:`),s=o&&go(i,t.slice(7));s&&(s.trim&&(a=n.map(e=>y(e)?e.trim():e)),s.number&&(a=n.map(le)));let c,l=i[c=oe(t)]||i[c=oe(O(t))];!l&&o&&(l=i[c=oe(ae(t))]),l&&Xn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Xn(u,e,6,a)}}var vo=new WeakMap;function yo(e,t,n=!1){let r=n?vo:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!v(e)){let r=e=>{let n=yo(e,t,!0);n&&(s=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(x(e)&&r.set(e,null),null):(p(a)?a.forEach(e=>o[e]=null):l(o,a),x(e)&&r.set(e,o),o)}function bo(e,t){return!e||!s(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),f(e,t[0].toLowerCase()+t.slice(1))||f(e,ae(t))||f(e,t))}function xo(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=br(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Bs(u.call(t,e,d,f,m,p,h)),y=s}else{let e=t;v=Bs(e.length>1?e(f,{attrs:s,slots:o,emit:l}):e(f,null)),y=t.props?s:Co(s)}}catch(t){ys.length=0,Zn(t,e,1),v=z(R)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(c)&&(y=wo(y,a)),b=Is(b,y,!1,!0))}return n.dirs&&(b=Is(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&fi(Vr(b.type)&&di(b)||b,n.transition),v=b,br(_),v}function So(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(Os(r)){if(r.type!==R||r.children===`v-if`){if(n)return;n=r}}else return}return n}var Co=e=>{let t;for(let n in e)(n===`class`||n===`style`||s(n))&&((t||={})[n]=e[n]);return t},wo=(e,t)=>{let n={};for(let r in e)(!c(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function To(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Eo(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Do(o,r,n)&&!bo(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Eo(r,o,l):!!o;return!1}function Eo(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Do(t,e,a)&&!bo(n,a))return!0}return!1}function Do(e,t,n){let r=e[n],i=t[n];return n===`style`&&x(r)&&x(i)?!Pe(r,i):r!==i}function Oo({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var ko={},Ao=()=>Object.create(ko),jo=e=>Object.getPrototypeOf(e)===ko;function Mo(e,t,n,r=!1){let i={},a=Ao();e.propsDefaults=Object.create(null),Po(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:on(i):e.type.props?i:a,e.attrs=a}function No(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(bo(e.emitsOptions,o))continue;let u=t[o];if(c){if(f(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=O(o);i[t]=Fo(c,s,t,u,e,!1)}}else u!==a[o]&&(a[o]=u,l=!0)}}}else{Po(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!f(t,a)&&((r=ae(a))===a||!f(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Fo(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!f(t,e))&&(delete a[e],l=!0)}l&&xt(e.attrs,`set`,``)}function Po(e,t,n,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let r in t){if(te(r))continue;let l=t[r],u;a&&f(a,u=O(r))?!o||!o.includes(u)?n[u]=l:(c||={})[u]=l:bo(e.emitsOptions,r)||(!(r in i)||l!==i[r])&&(i[r]=l,s=!0)}if(o){let t=N(n),i=c||r;for(let r=0;r<o.length;r++){let s=o[r];n[s]=Fo(a,t,s,i[s],e,!f(i,s))}}return s}function Fo(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=f(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&v(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Qs(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ae(n))&&(r=!0))}return r}var Io=new WeakMap;function Lo(e,t,n=!1){let a=n?Io:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,c={},u=[],d=!1;if(!v(e)){let r=e=>{d=!0;let[n,r]=Lo(e,t,!0);l(c,n),r&&u.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!d)return x(e)&&a.set(e,i),i;if(p(s))for(let e=0;e<s.length;e++){let t=O(s[e]);Ro(t)&&(c[t]=r)}else if(s)for(let e in s){let t=O(e);if(Ro(t)){let n=s[e],r=c[t]=p(n)||v(n)?{type:n}:l({},n),i=r.type,a=!1,o=!0;if(p(i))for(let e=0;e<i.length;++e){let t=i[e],n=v(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=v(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||f(r,`default`))&&u.push(t)}}let m=[c,u];return x(e)&&a.set(e,m),m}function Ro(e){return e[0]!==`$`&&!te(e)}var zo=e=>e===`_`||e===`_ctx`||e===`$stable`,Bo=e=>p(e)?e.map(Bs):[Bs(e)],Vo=(e,t,n)=>{if(t._n)return t;let r=wr((...e)=>Bo(t(...e)),n);return r._c=!1,r},Ho=(e,t,n)=>{let r=e._ctx;for(let n in e){if(zo(n))continue;let i=e[n];if(v(i))t[n]=Vo(n,i,r);else if(i!=null){let e=Bo(i);t[n]=()=>e}}},Uo=(e,t)=>{let n=Bo(t);e.slots.default=()=>n},Wo=(e,t,n)=>{for(let r in t)(n||!zo(r))&&(e[r]=t[r])},Go=(e,t,n)=>{let r=e.slots=Ao();if(e.vnode.shapeFlag&32){let e=t._;e?(Wo(r,t,n),n&&ce(r,`_`,e,!0)):Ho(t,r)}else t&&Uo(e,t)},Ko=(e,t,n)=>{let{vnode:i,slots:a}=e,o=!0,s=r;if(i.shapeFlag&32){let e=t._;e?n&&e===1?o=!1:Wo(a,t,n):(o=!t.$stable,Ho(t,a)),s=t}else t&&(Uo(e,t),s={default:1});if(o)for(let e in a)!zo(e)&&s[e]==null&&delete a[e]},I=ms;function qo(e){return Yo(e)}function Jo(e){return Yo(e,Oi)}function Yo(e,t){let n=fe();n.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=a,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!ks(e,t)&&(r=ve(e),pe(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case _s:y(e,t,n,r);break;case R:b(e,t,n,r);break;case vs:e??x(t,n,r,o);break;case L:O(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?ie(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,xe)}u!=null&&i?bi(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&bi(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,Xo(e,a),s,u),_&&Er(e,null,r,`created`),T(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!te(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Ws(f,r,e)}_&&Er(e,null,r,`beforeMount`);let v=Qo(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&I(()=>{try{f&&Ws(f,r,e),v&&g.enter(d),_&&Er(e,null,r,`mounted`)}finally{}},i)},T=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||is(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;T(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Vs(e[l]):Bs(e[l]);v(null,c,t,n,r,i,a,o,s)}},ne=(e,t,n,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||r,h=t.props||r,g;if(n&&Zo(n,!1),(g=h.onVnodeBeforeUpdate)&&Ws(g,n,t,e),f&&Er(t,e,n,`beforeUpdate`),n&&Zo(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?D(e.dynamicChildren,d,l,n,i,Xo(t,a),o):s||ce(e,t,l,null,n,i,Xo(t,a),o,!1),u>0){if(u&16)re(l,m,h,n,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],i=m[r],o=h[r];(o!==i||r===`value`)&&c(l,r,i,o,a,n)}}u&1&&e.children!==t.children&&p(l,t.children)}else!s&&d==null&&re(l,m,h,n,a);((g=h.onVnodeUpdated)||f)&&I(()=>{g&&Ws(g,n,t,e),f&&Er(t,e,n,`updated`)},i)},D=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===L||!ks(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},re=(e,t,n,i,a)=>{if(t!==n){if(t!==r)for(let r in t)!te(r)&&!(r in n)&&c(e,r,t[r],null,a,i);for(let r in n){if(te(r))continue;let o=n[r],s=t[r];o!==s&&r!==`value`&&c(e,r,s,o,a,i)}`value`in n&&c(e,`value`,t.value,n.value,a)}},O=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(D(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&$o(e,t,!0)):ce(e,t,n,f,i,a,s,c,l)},ie=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ae(t,n,r,i,a,o,c):k(e,t,c)},ae=(e,t,n,r,i,a,o)=>{let s=e.component=qs(e,r,i);if(Yi(e)&&(s.ctx.renderer=xe),nc(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,oe,o),!e.el){let r=s.subTree=z(R);b(null,r,t,n),e.placeholder=r.el}}else oe(s,e,t,n,i,a,o)},k=(e,t,n)=>{let r=t.component=e.component;if(To(e,t,n)){if(r.asyncDep&&!r.asyncResolved){A(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},oe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=ts(e);if(n){t&&(t.el=c.el,A(e,t,o)),n.asyncDep.then(()=>{I(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Zo(e,!1),t?(t.el=c.el,A(e,t,o)):t=c,n&&se(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Ws(d,s,t,c),Zo(e,!0);let f=xo(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ve(p),e,i,a),t.el=f.el,u===null&&Oo(e,f.el),r&&I(r,i),(d=t.props&&t.props.onVnodeUpdated)&&I(()=>Ws(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Ki(t);if(Zo(e,!1),l&&se(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Ws(o,d,t),Zo(e,!0),s&&Ce){let t=()=>{e.subTree=xo(e),Ce(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=xo(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&I(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;I(()=>Ws(o,d,e),i)}(t.shapeFlag&256||d&&Ki(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&I(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ke(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>cr(u),Zo(e,!0),l()},A=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,No(e,t.props,r,n),Ko(e,t.children,n),lt(),dr(e),ut()},ce=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){ue(l,d,n,r,i,a,o,s,c);return}if(f&256){le(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&_e(l,i,a),d!==l&&p(n,d)):u&16?m&16?ue(l,d,n,r,i,a,o,s,c):_e(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},le=(e,t,n,r,a,o,s,c,l)=>{e||=i,t||=i;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let r=t[p]=l?Vs(t[p]):Bs(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?_e(e,a,o,!0,!1,f):E(t,n,r,a,o,s,c,l,f)},ue=(e,t,n,r,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?Vs(t[u]):Bs(t[u]);if(ks(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?Vs(t[p]):Bs(t[p]);if(ks(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,i=e<d?t[e].el:r;for(;u<=p;)v(null,t[u]=l?Vs(t[u]):Bs(t[u]),n,i,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)pe(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Vs(t[u]):Bs(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){pe(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&ks(r,t[_])){i=_;break}i===void 0?pe(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let w=x?es(C):i;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,i=t[e],f=t[e+1],p=e+1<d?f.el||rs(f):r;C[u]===0?v(null,i,n,p,a,o,s,c,l):x&&(_<0||u!==w[_]?de(i,n,p,2):_--)}}},de=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){de(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,xe);return}if(c===L){o(a,t,n);for(let e=0;e<u.length;e++)de(u[e],t,n,r);o(e.anchor,t,n);return}if(c===vs){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[$r]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),I(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[$r];a._isLeaving&&a[$r](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},pe=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(lt(),bi(s,null,n,e,!0),ut()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Ki(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Ws(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Er(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,xe,r):l&&!l.hasOnce&&(a!==L||d>0&&d&64)?_e(l,t,n,!1,!0):(a===L&&d&384||!i&&u&16)&&_e(c,t,n),r&&me(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&I(()=>{_&&Ws(_,t,e),h&&Er(e,null,t,`unmounted`),v&&(e.el=null)},n)},me=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===L){he(n,r);return}if(t===vs){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;ns(c),ns(l),r&&se(r),i.stop(),a&&(a.flags|=8,pe(o,e,t,n)),s&&I(s,t),I(()=>{e.isUnmounted=!0},t)},_e=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)pe(e[o],t,n,r,i)},ve=e=>{if(e.shapeFlag&6)return ve(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Br];return n?h(n):t},ye=!1,be=(e,t,n)=>{let r;e==null?t._vnode&&(pe(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ye||=(ye=!0,dr(r),fr(),!1)},xe={p:v,um:pe,m:de,r:me,mt:ae,mc:E,pc:ce,pbc:D,n:ve,o:e},Se,Ce;return t&&([Se,Ce]=t(xe)),{render:be,hydrate:Se,createApp:po(be,Se)}}function Xo({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Zo({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Qo(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $o(e,t,n=!1){let r=e.children,i=t.children;if(p(r)&&p(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Vs(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&$o(t,a)),a.type===_s&&(a.patchFlag===-1&&(a=i[e]=Vs(a)),a.el=t.el),a.type===R&&!a.el&&(a.el=t.el)}}function es(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function ts(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ts(t)}function ns(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function rs(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?rs(t.subTree):null}var is=e=>e.__isSuspense,as=0,os={name:`Suspense`,__isSuspense:!0,process(e,t,n,r,i,a,o,s,c,l){if(e==null)cs(t,n,r,i,a,o,s,c,l);else{if(a&&a.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}ls(e,t,n,r,i,o,s,c,l)}},hydrate:ds,normalize:fs};function ss(e,t){let n=e.props&&e.props[t];v(n)&&n()}function cs(e,t,n,r,i,a,o,s,c){let{p:l,o:{createElement:u}}=c,d=u(`div`),f=e.suspense=us(e,i,r,t,d,n,a,o,s,c);l(null,f.pendingBranch=e.ssContent,d,null,r,f,a,o),f.deps>0?(ss(e,`onPending`),ss(e,`onFallback`),l(null,e.ssFallback,t,n,r,null,a,o),hs(f,e.ssFallback)):f.resolve(!1,!0)}function ls(e,t,n,r,i,a,o,s,{p:c,um:l,o:{createElement:u}}){let d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;let f=t.ssContent,p=t.ssFallback,{activeBranch:m,pendingBranch:h,isInFallback:g,isHydrating:_}=d;if(h)d.pendingBranch=f,ks(h,f)?(c(h,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0?d.resolve():g&&(_||(c(m,p,n,r,i,null,a,o,s),hs(d,p)))):(d.pendingId=as++,_?(d.isHydrating=!1,d.activeBranch=h):l(h,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u(`div`),g?(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0?d.resolve():(c(m,p,n,r,i,null,a,o,s),hs(d,p))):m&&ks(m,f)?(c(m,f,n,r,i,d,a,o,s),d.resolve(!0)):(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0&&d.resolve()));else if(m&&ks(m,f))c(m,f,n,r,i,d,a,o,s),hs(d,f);else if(ss(t,`onPending`),d.pendingBranch=f,d.pendingId=f.shapeFlag&512?f.component.suspenseId:as++,c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0)d.resolve();else{let{timeout:e,pendingId:t}=d;e>0?setTimeout(()=>{d.pendingId===t&&d.fallback(p)},e):e===0&&d.fallback(p)}}function us(e,t,n,r,i,a,o,s,c,l,u=!1){let{p:d,m:f,um:p,n:m,o:{parentNode:h,remove:g}}=l,_,v=gs(e);v&&t&&t.pendingBranch&&(_=t.pendingId,t.deps++);let y=e.props?ue(e.props.timeout):void 0,b=a,x={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:i,deps:0,pendingId:as++,timeout:typeof y==`number`?y:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){let{vnode:r,activeBranch:i,pendingBranch:o,pendingId:s,effects:c,parentComponent:l,container:u,isInFallback:d}=x,g=!1;if(x.isHydrating)x.isHydrating=!1;else if(!e){g=i&&o.transition&&o.transition.mode===`out-in`;let e=!1;g&&(i.transition.afterLeave=()=>{s===x.pendingId&&(f(o,u,a===b&&!e?m(i):a,0),ur(c),d&&r.ssFallback&&(r.ssFallback.el=null))}),i&&!x.isFallbackMountPending&&(h(i.el)===u&&(a=m(i),e=!0),p(i,l,x,!0),!g&&d&&r.ssFallback&&I(()=>r.ssFallback.el=null,x)),g||f(o,u,a,0)}x.isFallbackMountPending=!1,hs(x,o),x.pendingBranch=null,x.isInFallback=!1;let y=x.parent,S=!1;for(;y;){if(y.pendingBranch){for(let e=0;e<c.length;e++)y.effects.push(c[e]);S=!0;break}y=y.parent}!S&&!g&&ur(c),x.effects=[],v&&t&&t.pendingBranch&&_===t.pendingId&&(t.deps--,t.deps===0&&!n&&t.resolve()),ss(r,`onResolve`)},fallback(e){if(!x.pendingBranch)return;let{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:a}=x;ss(t,`onFallback`);let o=m(n),l=()=>{x.isFallbackMountPending=!1,x.isInFallback&&(d(null,e,i,o,r,null,a,s,c),hs(x,e))},u=e.transition&&e.transition.mode===`out-in`;u&&(x.isFallbackMountPending=!0,n.transition.afterLeave=l),x.isInFallback=!0,p(n,r,null,!0),u||l()},move(e,t,n){x.activeBranch&&f(x.activeBranch,e,t,n),x.container=e},next(){return x.activeBranch&&m(x.activeBranch)},registerDep(e,t,n){let r=!!x.pendingBranch;r&&x.deps++;let i=e.vnode.el;e.asyncDep.catch(t=>{Zn(t,e,0)}).then(a=>{if(e.isUnmounted||x.isUnmounted||x.pendingId!==e.suspenseId)return;$s(),e.asyncResolved=!0;let{vnode:s}=e;ic(e,a,!1),i&&(s.el=i);let c=!i&&e.subTree.el;t(e,s,h(i||e.subTree.el),i?null:m(e.subTree),x,o,n),c&&(s.placeholder=null,g(c)),Oo(e,s.el),r&&--x.deps===0&&x.resolve()})},unmount(e,t){x.isUnmounted=!0,x.activeBranch&&p(x.activeBranch,n,e,t),x.pendingBranch&&p(x.pendingBranch,n,e,t)}};return x}function ds(e,t,n,r,i,a,o,s,c){let l=t.suspense=us(t,r,n,e.parentNode,document.createElement(`div`),null,i,a,o,s,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,a,o);return l.deps===0&&l.resolve(!1,!0),u}function fs(e){let{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=ps(r?n.default:n),e.ssFallback=r?ps(n.fallback):z(R)}function ps(e){let t;if(v(e)){let n=Cs&&e._c;n&&(e._d=!1,xs()),e=e(),n&&(e._d=!0,t=bs,Ss())}return p(e)&&(e=So(e)),e=Bs(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(t=>t!==e)),e}function ms(e,t){t&&t.pendingBranch?p(e)?t.effects.push(...e):t.effects.push(e):ur(e)}function hs(e,t){e.activeBranch=t;let{vnode:n,parentComponent:r}=e,i=t.el;for(;!i&&t.component;)t=t.component.subTree,i=t.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,Oo(r,i))}function gs(e){let t=e.props&&e.props.suspensible;return t!=null&&t!==!1}var L=Symbol.for(`v-fgt`),_s=Symbol.for(`v-txt`),R=Symbol.for(`v-cmt`),vs=Symbol.for(`v-stc`),ys=[],bs=null;function xs(e=!1){ys.push(bs=e?null:[])}function Ss(){ys.pop(),bs=ys[ys.length-1]||null}var Cs=1;function ws(e,t=!1){Cs+=e,e<0&&bs&&t&&(bs.hasOnce=!0)}function Ts(e){return e.dynamicChildren=Cs>0?bs||i:null,Ss(),Cs>0&&bs&&bs.push(e),e}function Es(e,t,n,r,i,a){return Ts(Ns(e,t,n,r,i,a,!0))}function Ds(e,t,n,r,i){return Ts(z(e,t,n,r,i,!0))}function Os(e){return e?e.__v_isVNode===!0:!1}function ks(e,t){return e.type===t.type&&e.key===t.key}function As(e){}var js=({key:e})=>e??null,Ms=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:y(e)||P(e)||v(e)?{i:vr,r:e,k:t,f:!!n}:e);function Ns(e,t=null,n=null,r=0,i=null,a=e===L?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&js(t),ref:t&&Ms(t),scopeId:yr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:vr};return s?(Hs(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=y(n)?8:16),Cs>0&&!o&&bs&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&bs.push(c),c}var z=Ps;function Ps(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===ya)&&(e=R),Os(e)){let r=Is(e,t,!0);return n&&Hs(r,n),Cs>0&&!a&&bs&&(r.shapeFlag&6?bs[bs.indexOf(e)]=r:bs.push(r)),r.patchFlag=-2,r}if(mc(e)&&(e=e.__vccOpts),t){t=Fs(t);let{class:e,style:n}=t;e&&!y(e)&&(t.class=be(e)),x(n)&&(pn(n)&&!p(n)&&(n=l({},n)),t.style=he(n))}let o=y(e)?1:is(e)?128:Vr(e)?64:x(e)?4:v(e)?2:0;return Ns(e,t,n,r,i,o,a,!0)}function Fs(e){return e?pn(e)||jo(e)?l({},e):e:null}function Is(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Us(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&js(l),ref:t&&t.ref?n&&a?p(a)?a.concat(Ms(t)):[a,Ms(t)]:Ms(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==L?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Is(e.ssContent),ssFallback:e.ssFallback&&Is(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&fi(u,c.clone(u)),u}function Ls(e=` `,t=0){return z(_s,null,e,t)}function Rs(e,t){let n=z(vs,null,e);return n.staticCount=t,n}function zs(e=``,t=!1){return t?(xs(),Ds(R,null,e)):z(R,null,e)}function Bs(e){return e==null||typeof e==`boolean`?z(R):p(e)?z(L,null,e.slice()):Os(e)?Vs(e):z(_s,null,String(e))}function Vs(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Is(e)}function Hs(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(p(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Hs(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!jo(t)?t._ctx=vr:r===3&&vr&&(vr.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(v(t)){if(r&65){Hs(e,{default:t});return}t={default:t,_ctx:vr},n=32}else t=String(t),r&64?(n=16,t=[Ls(t)]):n=8;e.children=t,e.shapeFlag|=n}function Us(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=be([t.class,r.class]));else if(e===`style`)t.style=he([t.style,r.style]);else if(s(e)){let n=t[e],i=r[e];i&&n!==i&&!(p(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!c(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Ws(e,t,n,r=null){Xn(e,t,7,[n,r])}var Gs=uo(),Ks=0;function qs(e,t,n){let i=e.type,a=(t?t.appContext:e.appContext)||Gs,o={uid:Ks++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ve(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lo(i,a),emitsOptions:yo(i,a),emit:null,emitted:null,propsDefaults:r,inheritAttrs:i.inheritAttrs,ctx:r,data:r,props:r,attrs:r,slots:r,refs:r,setupState:r,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=_o.bind(null,o),e.ce&&e.ce(o),o}var Js=null,Ys=()=>Js||vr,Xs,Zs;{let e=fe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Xs=t(`__VUE_INSTANCE_SETTERS__`,e=>Js=e),Zs=t(`__VUE_SSR_SETTERS__`,e=>tc=e)}var Qs=e=>{let t=Js;return Xs(e),e.scope.on(),()=>{e.scope.off(),Xs(t)}},$s=()=>{Js&&Js.scope.off(),Xs(null)};function ec(e){return e.vnode.shapeFlag&4}var tc=!1;function nc(e,t=!1,n=!1){t&&Zs(t);let{props:r,children:i}=e.vnode,a=ec(e);Mo(e,r,a,t),Go(e,i,n||t);let o=a?rc(e,t):void 0;return t&&Zs(!1),o}function rc(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ma);let{setup:r}=n;if(r){lt();let n=e.setupContext=r.length>1?dc(e):null,i=Qs(e),a=Yn(r,e,0,[e.props,n]),o=S(a);if(ut(),i(),(o||e.sp)&&!Ki(e)&&gi(e),o){if(a.then($s,$s),t)return a.then(n=>{Zs(!0);try{ic(e,n,t)}finally{Zs(!1)}}).catch(t=>{Zn(t,e,0)});e.asyncDep=a}else ic(e,a,t)}else lc(e,t)}function ic(e,t,n){v(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:x(t)&&(e.setupState=wn(t)),lc(e,n)}var ac,oc;function sc(e){ac=e,oc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Na))}}var cc=()=>!ac;function lc(e,t,n){let r=e.type;if(!e.render){if(!t&&ac&&!r.render){let t=r.template||eo(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r,s=l(l({isCustomElement:n,delimiters:a},i),o);r.render=ac(t,s)}}e.render=r.render||a,oc&&oc(e)}{let t=Qs(e);lt();try{Xa(e)}finally{ut(),t()}}}var uc={get(e,t){return bt(e,`get`,``),e[t]}};function dc(e){return{attrs:new Proxy(e.attrs,uc),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function fc(e){return e.exposed?e.exposeProxy||=new Proxy(wn(mn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Aa)return Aa[n](e)},has(e,t){return t in e||t in Aa}}):e.proxy}function pc(e,t=!0){return v(e)?e.displayName||e.name:e.name||t&&e.__name}function mc(e){return v(e)&&`__vccOpts`in e}var B=(e,t)=>Nn(e,t,tc);function hc(e,t,n){try{ws(-1);let r=arguments.length;return r===2?x(t)&&!p(t)?Os(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Os(n)&&(n=[n]),z(e,t,n))}finally{ws(1)}}function gc(){}function _c(e,t,n,r){let i=n[r];if(i&&vc(i,e))return i;let a=t();return a.memo=e.slice(),a.cacheIndex=r,n[r]=a}function vc(e,t){let n=e.memo;if(n.length!=t.length)return!1;for(let e=0;e<n.length;e++)if(A(n[e],t[e]))return!1;return Cs>0&&bs&&bs.push(e),!0}var yc=`3.5.41`,bc=a,xc=Jn,Sc=hr,Cc=_r,wc={createComponentInstance:qs,setupComponent:nc,renderComponentRoot:xo,setCurrentRenderingInstance:br,isVNode:Os,normalizeVNode:Bs,getComponentPublicInstance:fc,ensureValidVNode:Da,pushWarningContext:Wn,popWarningContext:Gn},Tc=t({BaseTransition:()=>si,BaseTransitionPropsValidators:()=>ri,Comment:()=>R,DeprecationTypes:()=>null,EffectScope:()=>Ve,ErrorCodes:()=>qn,ErrorTypeStrings:()=>xc,Fragment:()=>L,KeepAlive:()=>Xi,ReactiveEffect:()=>Ke,Static:()=>vs,Suspense:()=>os,Teleport:()=>Xr,Text:()=>_s,TrackOpTypes:()=>Pn,Transition:()=>zc,TransitionGroup:()=>Jl,TriggerOpTypes:()=>Fn,VueElement:()=>Bl,assertNumber:()=>Kn,callWithAsyncErrorHandling:()=>Xn,callWithErrorHandling:()=>Yn,camelize:()=>O,capitalize:()=>k,cloneVNode:()=>Is,compatUtils:()=>null,computed:()=>B,createApp:()=>Au,createBlock:()=>Ds,createCommentVNode:()=>zs,createElementBlock:()=>Es,createElementVNode:()=>Ns,createHydrationRenderer:()=>Jo,createPropsRestProxy:()=>qa,createRenderer:()=>qo,createSSRApp:()=>ju,createSlots:()=>Ta,createStaticVNode:()=>Rs,createTextVNode:()=>Ls,createVNode:()=>z,customRef:()=>En,defineAsyncComponent:()=>qi,defineComponent:()=>mi,defineCustomElement:()=>Ll,defineEmits:()=>Fa,defineExpose:()=>Ia,defineModel:()=>za,defineOptions:()=>La,defineProps:()=>Pa,defineSSRCustomElement:()=>Rl,defineSlots:()=>Ra,devtools:()=>Sc,effect:()=>at,effectScope:()=>He,getCurrentInstance:()=>Ys,getCurrentScope:()=>Ue,getCurrentWatcher:()=>zn,getTransitionRawChildren:()=>pi,guardReactiveProps:()=>Fs,h:()=>hc,handleError:()=>Zn,hasInjectionContext:()=>kr,hydrate:()=>ku,hydrateOnIdle:()=>Bi,hydrateOnInteraction:()=>Wi,hydrateOnMediaQuery:()=>Ui,hydrateOnVisible:()=>Hi,initCustomFormatter:()=>gc,initDirectivesForSSR:()=>Fu,inject:()=>Or,isMemoSame:()=>vc,isProxy:()=>pn,isReactive:()=>un,isReadonly:()=>dn,isRef:()=>P,isRuntimeOnly:()=>cc,isShallow:()=>fn,isVNode:()=>Os,markRaw:()=>mn,mergeDefaults:()=>Ga,mergeModels:()=>Ka,mergeProps:()=>Us,nextTick:()=>or,nodeOps:()=>Nc,normalizeClass:()=>be,normalizeProps:()=>xe,normalizeStyle:()=>he,onActivated:()=>Qi,onBeforeMount:()=>oa,onBeforeUnmount:()=>ua,onBeforeUpdate:()=>ca,onDeactivated:()=>$i,onErrorCaptured:()=>ha,onMounted:()=>sa,onRenderTracked:()=>ma,onRenderTriggered:()=>pa,onScopeDispose:()=>We,onServerPrefetch:()=>fa,onUnmounted:()=>da,onUpdated:()=>la,onWatcherCleanup:()=>Bn,openBlock:()=>xs,patchProp:()=>Nl,popScopeId:()=>Sr,provide:()=>Dr,proxyRefs:()=>wn,pushScopeId:()=>xr,queuePostFlushCb:()=>ur,reactive:()=>an,readonly:()=>sn,ref:()=>F,registerRuntimeCompiler:()=>sc,render:()=>Ou,renderList:()=>wa,renderSlot:()=>Ea,resolveComponent:()=>va,resolveDirective:()=>xa,resolveDynamicComponent:()=>ba,resolveFilter:()=>null,resolveTransitionHooks:()=>li,setBlockTracking:()=>ws,setDevtoolsHook:()=>Cc,setTransitionHooks:()=>fi,shallowReactive:()=>on,shallowReadonly:()=>cn,shallowRef:()=>_n,ssrContextKey:()=>Ar,ssrUtils:()=>wc,stop:()=>ot,toDisplayString:()=>Le,toHandlerKey:()=>oe,toHandlers:()=>Oa,toRaw:()=>N,toRef:()=>An,toRefs:()=>Dn,toValue:()=>Sn,transformVNodeArgs:()=>As,triggerRef:()=>bn,unref:()=>xn,useAttrs:()=>Ha,useCssModule:()=>Ul,useCssVars:()=>sl,useHost:()=>Vl,useId:()=>hi,useModel:()=>ho,useSSRContext:()=>jr,useShadowRoot:()=>Hl,useSlots:()=>Va,useTemplateRef:()=>_i,useTransitionState:()=>ti,vModelCheckbox:()=>su,vModelDynamic:()=>mu,vModelRadio:()=>lu,vModelSelect:()=>uu,vModelText:()=>ou,vShow:()=>rl,version:()=>yc,warn:()=>bc,watch:()=>Fr,watchEffect:()=>Mr,watchPostEffect:()=>Nr,watchSyncEffect:()=>Pr,withAsyncContext:()=>Ja,withCtx:()=>wr,withDefaults:()=>Ba,withDirectives:()=>Tr,withKeys:()=>Su,withMemo:()=>_c,withModifiers:()=>bu,withScopeId:()=>Cr}),Ec=void 0,Dc=typeof window<`u`&&window.trustedTypes;if(Dc)try{Ec=Dc.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Oc=Ec?e=>Ec.createHTML(e):e=>e,kc=`http://www.w3.org/2000/svg`,Ac=`http://www.w3.org/1998/Math/MathML`,jc=typeof document<`u`?document:null,Mc=jc&&jc.createElement(`template`),Nc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?jc.createElementNS(kc,e):t===`mathml`?jc.createElementNS(Ac,e):n?jc.createElement(e,{is:n}):jc.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>jc.createTextNode(e),createComment:e=>jc.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jc.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Mc.innerHTML=Oc(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Mc.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pc=`transition`,Fc=`animation`,Ic=Symbol(`_vtc`),Lc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Rc=l({},ri,Lc),zc=(e=>(e.displayName=`Transition`,e.props=Rc,e))((e,{slots:t})=>hc(si,Hc(e),t)),Bc=(e,t=[])=>{p(e)?e.forEach(e=>e(...t)):e&&e(...t)},Vc=e=>e?p(e)?e.some(e=>e.length>1):e.length>1:!1;function Hc(e){let t={};for(let n in e)n in Lc||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=o,appearToClass:d=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=Uc(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:ee=b}=t,T=(e,t,n,r)=>{e._enterCancelled=r,Kc(e,t?d:s),Kc(e,t?u:o),n&&n()},E=(e,t)=>{e._isLeaving=!1,Kc(e,f),Kc(e,m),Kc(e,p),t&&t()},te=e=>(t,n)=>{let i=e?w:y,o=()=>T(t,e,n);Bc(i,[t,o]),qc(()=>{Kc(t,e?c:a),Gc(t,e?d:s),Vc(i)||Yc(t,r,g,o)})};return l(t,{onBeforeEnter(e){Bc(v,[e]),Gc(e,a),Gc(e,o)},onBeforeAppear(e){Bc(C,[e]),Gc(e,c),Gc(e,u)},onEnter:te(!1),onAppear:te(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>E(e,t);Gc(e,f),e._enterCancelled?(Gc(e,p),$c(e)):($c(e),Gc(e,p)),qc(()=>{e._isLeaving&&(Kc(e,f),Gc(e,m),Vc(x)||Yc(e,r,_,n))}),Bc(x,[e,n])},onEnterCancelled(e){T(e,!1,void 0,!0),Bc(b,[e])},onAppearCancelled(e){T(e,!0,void 0,!0),Bc(ee,[e])},onLeaveCancelled(e){E(e),Bc(S,[e])}})}function Uc(e){if(e==null)return null;if(x(e))return[Wc(e.enter),Wc(e.leave)];{let t=Wc(e);return[t,t]}}function Wc(e){return ue(e)}function Gc(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Ic]||(e[Ic]=new Set)).add(t)}function Kc(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Ic];n&&(n.delete(t),n.size||(e[Ic]=void 0))}function qc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var Jc=0;function Yc(e,t,n,r){let i=e._endId=++Jc,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=Xc(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function Xc(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Pc}Delay`),a=r(`${Pc}Duration`),o=Zc(i,a),s=r(`${Fc}Delay`),c=r(`${Fc}Duration`),l=Zc(s,c),u=null,d=0,f=0;t===Pc?o>0&&(u=Pc,d=o,f=a.length):t===Fc?l>0&&(u=Fc,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Pc:Fc:null,f=u?u===Pc?a.length:c.length:0);let p=u===Pc&&/\b(?:transform|all)(?:,|$)/.test(r(`${Pc}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Zc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Qc(t)+Qc(e[n])))}function Qc(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function $c(e){return(e?e.ownerDocument:document).body.offsetHeight}function el(e,t,n){let r=e[Ic];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var tl=Symbol(`_vod`),nl=Symbol(`_vsh`),rl={name:`show`,beforeMount(e,{value:t},{transition:n}){e[tl]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):il(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),il(e,!0),r.enter(e)):r.leave(e,()=>{il(e,!1)}):il(e,t))},beforeUnmount(e,{value:t}){il(e,t)}};function il(e,t){e.style.display=t?e[tl]:`none`,e[nl]=!t}function al(){rl.getSSRProps=({value:e})=>{if(!e)return{style:{display:`none`}}}}var ol=Symbol(``);function sl(e){let t=Ys();if(!t)return;let n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(e=>ll(e,n))},r=()=>{let r=e(t.proxy);t.ce?ll(t.ce,r):cl(t.subTree,r),n(r)};ca(()=>{ur(r)}),sa(()=>{Fr(r,a,{flush:`post`});let e=new MutationObserver(r);e.observe(t.subTree.el.parentNode,{childList:!0}),da(()=>e.disconnect())})}function cl(e,t){if(e.shapeFlag&128){let n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{cl(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)ll(e.el,t);else if(e.type===L)e.children.forEach(e=>cl(e,t));else if(e.type===vs){let{el:n,anchor:r}=e;for(;n&&(ll(n,t),n!==r);)n=n.nextSibling}}function ll(e,t){if(e.nodeType===1){let n=e.style,r=``;for(let e in t){let i=Be(t[e]);n.setProperty(`--${e}`,i),r+=`--${e}: ${i};`}n[ol]=r}}var ul=/(?:^|;)\s*display\s*:/;function dl(e,t,n){let r=e.style,i=y(n),a=!1;if(n&&!i){if(t){if(y(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??pl(r,t,``)}else for(let e in t)n[e]??pl(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?pl(r,i,``):_l(e,i,!y(t)&&t?t[i]:void 0,o)||pl(r,i,o)}}else if(i){if(t!==n){let e=r[ol];e&&(n+=`;`+e),r.cssText=n,a=ul.test(n)}}else t&&e.removeAttribute(`style`);tl in e&&(e[tl]=a?r.display:``,e[nl]&&(r.display=`none`))}var fl=/\s*!important$/;function pl(e,t,n){if(p(n))n.forEach(n=>pl(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=gl(e,t);fl.test(n)?e.setProperty(ae(r),n.replace(fl,``),`important`):e[r]=n}}var ml=[`Webkit`,`Moz`,`ms`],hl={};function gl(e,t){let n=hl[t];if(n)return n;let r=O(t);if(r!==`filter`&&r in e)return hl[t]=r;r=k(r);for(let n=0;n<ml.length;n++){let i=ml[n]+r;if(i in e)return hl[t]=i}return t}function _l(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&y(r)&&n===r}var vl=`http://www.w3.org/1999/xlink`;function yl(e,t,n,r,i,a=je(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(vl,t.slice(6,t.length)):e.setAttributeNS(vl,t,n):n==null||a&&!Me(n)?e.removeAttribute(t):e.setAttribute(t,a?``:b(n)?String(n):n)}function bl(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Oc(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Me(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function xl(e,t,n,r){e.addEventListener(t,n,r)}function Sl(e,t,n,r){e.removeEventListener(t,n,r)}var Cl=Symbol(`_vei`);function wl(e,t,n,r,i=null){let a=e[Cl]||(e[Cl]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Dl(t);r?xl(e,n,a[t]=jl(r,i),s):o&&(Sl(e,n,o,s),a[t]=void 0)}}var Tl=/(Once|Passive|Capture)$/,El=/^on:?(?:Once|Passive|Capture)$/;function Dl(e){let t,n;for(;(n=e.match(Tl))&&!El.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):ae(e.slice(2)),t]}var Ol=0,kl=Promise.resolve(),Al=()=>Ol||=(kl.then(()=>Ol=0),Date.now());function jl(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(p(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&Xn(e,t,5,a)}}else Xn(r,t,5,[e])};return n.value=e,n.attached=Al(),n}var Ml=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Nl=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?el(e,r,o):t===`style`?dl(e,n,r):s(t)?c(t)||wl(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Pl(e,t,r,o))?(bl(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&yl(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Fl(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!y(r)))?bl(e,O(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),yl(e,t,r,o))};function Pl(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Ml(t)&&v(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Ml(t)&&y(n)?!1:t in e}function Fl(e,t){let n=e._def.props;if(!n)return!1;let r=O(t);return Array.isArray(n)?n.some(e=>O(e)===r):Object.keys(n).some(e=>O(e)===r)}var Il={};function Ll(e,t,n){let r=mi(e,t);T(r)&&(r=l({},r,t));class i extends Bl{constructor(e){super(r,e,n)}}return i.def=r,i}var Rl=((e,t)=>Ll(e,t,ju)),zl=typeof HTMLElement<`u`?HTMLElement:class{},Bl=class e extends zl{constructor(e,t={},n=Au){super(),this._def=e,this._props=t,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&n!==Au?this._root=this.shadowRoot:e.shadowRoot===!1?this._root=this:(this.attachShadow(l({},e.shadowRootOptions,{mode:`open`})),this._root=this.shadowRoot)}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let t=this;for(;t&&=t.assignedSlot||t.parentNode||t.host;)if(t instanceof e){this._parent=t;break}this._instance||(this._resolved?this._mount(this._def):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{if(this._pendingResolve=void 0,this.isConnected)return this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,or(()=>{this._connected||(this._ob&&=(this._ob.disconnect(),null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&=(this._teleportTargets.clear(),void 0))})}_processMutations(e){for(let t of e)this._setAttr(t.attributeName)}_resolveDef(){if(this._pendingResolve)return this._pendingResolve;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});let e=(e,t=!1)=>{this._resolved=!0,this._pendingResolve=void 0;let{props:n,styles:r}=e,i;if(n&&!p(n))for(let e in n){let t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=ue(this._props[e])),(i||=Object.create(null))[O(e)]=!0)}this._numberProps=i,this._resolveProps(e),this.shadowRoot&&this._applyStyles(r),this._mount(e)},t=this._def.__asyncLoader;if(t)return this._pendingResolve=t().then(t=>{t.configureApp=this._def.configureApp,e(this._def=t,!0)}),this._pendingResolve;e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);let t=this._instance&&this._instance.exposed;if(t)for(let e in t)f(this,e)||Object.defineProperty(this,e,{get:()=>xn(t[e])})}_resolveProps(e){let{props:t}=e,n=p(t)?t:Object.keys(t||{});for(let e of Object.keys(this))e[0]!==`_`&&n.includes(e)&&this._setProp(e,this[e]);for(let e of n.map(O))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t,!0,!this._patching)}})}_setAttr(e){if(e.startsWith(`data-v-`))return;let t=this.hasAttribute(e),n=t?this.getAttribute(e):Il,r=O(e);t&&this._numberProps&&this._numberProps[r]&&(n=ue(n)),this._setProp(r,n,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,r=!1){if(t!==this._props[e]&&(this._dirty=!0,t===Il?delete this._props[e]:(this._props[e]=t,e===`key`&&this._app&&(this._app._ceVNode.key=t)),r&&this._instance&&this._update(),n)){let n=this._ob;n&&(this._processMutations(n.takeRecords()),n.disconnect()),t===!0?this.setAttribute(ae(e),``):typeof t==`string`||typeof t==`number`?this.setAttribute(ae(e),t+``):t||this.removeAttribute(ae(e)),n&&n.observe(this,{attributes:!0})}}_update(){let e=this._createVNode();this._app&&(e.appContext=this._app._context),Ou(e,this._root)}_createVNode(){let e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));let t=z(this._def,l(e,this._props));return this._instance||(t.ce=e=>{this._instance=e,e.ce=this,e.isCE=!0;let t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,T(t[0])?l({detail:t},t[0]):{detail:t}))};e.emit=(e,...n)=>{t(e,n),ae(e)!==e&&t(ae(e),n)},this._setParent()}),t}_applyStyles(e,t,n){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}let r=this._nonce,i=this.shadowRoot,a=n?this._getStyleAnchor(n)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(i),o=null;for(let s=e.length-1;s>=0;s--){let c=document.createElement(`style`);r&&c.setAttribute(`nonce`,r),c.textContent=e[s],i.insertBefore(c,o||a),o=c,s===0&&(n||this._styleAnchors.set(this._def,c),t&&this._styleAnchors.set(t,c))}}_getStyleAnchor(e){if(!e)return null;let t=this._styleAnchors.get(e);return t&&t.parentNode===this.shadowRoot?t:(t&&this._styleAnchors.delete(e),null)}_getRootStyleInsertionAnchor(e){for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];if(!(n instanceof HTMLStyleElement))return n}return null}_parseSlots(){let e=this._slots={},t;for(;t=this.firstChild;){let n=t.nodeType===1&&t.getAttribute(`slot`)||`default`;(e[n]||(e[n]=[])).push(t),this.removeChild(t)}}_renderSlots(){let e=this._getSlots(),t=this._instance.type.__scopeId;for(let n=0;n<e.length;n++){let r=e[n],i=r.getAttribute(`name`)||`default`,a=this._slots[i],o=r.parentNode;if(a)for(let e of a){if(t&&e.nodeType===1){let n=t+`-s`,r=document.createTreeWalker(e,1);e.setAttribute(n,``);let i;for(;i=r.nextNode();)i.setAttribute(n,``)}o.insertBefore(e,r)}else for(;r.firstChild;)o.insertBefore(r.firstChild,r);o.removeChild(r)}}_getSlots(){let e=[this];this._teleportTargets&&e.push(...this._teleportTargets);let t=new Set;for(let n of e){let e=n.querySelectorAll(`slot`);for(let n=0;n<e.length;n++)t.add(e[n])}return Array.from(t)}_injectChildStyle(e,t){this._applyStyles(e.styles,e,t)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(e){}};function Vl(e){let t=Ys();return t&&t.ce||null}function Hl(){let e=Vl();return e&&e.shadowRoot}function Ul(e=`$style`){{let t=Ys();if(!t)return r;let n=t.type.__cssModules;return n&&n[e]||r}}var Wl=new WeakMap,Gl=new WeakMap,Kl=Symbol(`_moveCb`),ql=Symbol(`_enterCb`),Jl=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:l({},Rc,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=Ys(),r=ti(),i,a;return la(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!$l(i[0].el,n.vnode.el,t)){i=[];return}i.forEach(Yl),i.forEach(Xl);let r=i.filter(Zl);$c(n.vnode.el),r.forEach(e=>{let n=e.el,r=n.style;Gc(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[Kl]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[Kl]=null,Kc(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let o=N(e),s=Hc(o),c=o.tag||L;if(i=[],a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&!t.el[nl]&&(i.push(t),fi(t,li(t,s,r,n)),Wl.set(t,Ql(t.el)))}a=t.default?pi(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&fi(t,li(t,s,r,n))}return z(c,null,a)}}});function Yl(e){let t=e.el;t[Kl]&&t[Kl](),t[ql]&&t[ql]()}function Xl(e){Gl.set(e,Ql(e.el))}function Zl(e){let t=Wl.get(e),n=Gl.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),(!Number.isFinite(o)||o===0)&&(o=1),(!Number.isFinite(s)||s===0)&&(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function Ql(e){let t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function $l(e,t,n){let r=e.cloneNode(),i=e[Ic];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=Xc(r);return a.removeChild(r),o}var eu=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return p(t)?e=>se(t,e):t};function tu(e){e.target.composing=!0}function nu(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ru=Symbol(`_assign`),iu=Symbol(`_initialValue`);function au(e,t,n){return t&&(e=e.trim()),n&&(e=le(e)),e}var ou={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e.parentNode&&(e.type===`text`?e[iu]=e.defaultValue.replace(/[\r\n]/g,``):e.type===`textarea`&&(e[iu]=e.defaultValue.replace(/\r\n?/g,`
`))),e[ru]=eu(i);let a=r||i.props&&i.props.type===`number`;xl(e,t?`change`:`input`,t=>{t.target.composing||e[ru](au(e.value,n,a))}),(n||a)&&xl(e,`change`,()=>{e.value=au(e.value,n,a)}),t||(xl(e,`compositionstart`,tu),xl(e,`compositionend`,nu),xl(e,`change`,nu))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){let i=t??``,a=e[iu];delete e[iu],a!==void 0&&(e.type===`text`||e.type===`textarea`)&&e.value!==a?e[ru](au(e.value,n,r)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ru]=eu(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?le(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},su={deep:!0,created(e,t,n){e[ru]=eu(n),xl(e,`change`,()=>{let t=e._modelValue,n=fu(e),r=e.checked,i=e[ru];if(p(t)){let e=Fe(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(h(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(pu(e,r))})},mounted:cu,beforeUpdate(e,t,n){e[ru]=eu(n),cu(e,t,n)}};function cu(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(p(t))i=Fe(t,r.props.value)>-1;else if(h(t))i=t.has(r.props.value);else{if(t===n)return;i=Pe(t,pu(e,!0))}e.checked!==i&&(e.checked=i)}var lu={created(e,{value:t},n){e.checked=Pe(t,n.props.value),e[ru]=eu(n),xl(e,`change`,()=>{e[ru](fu(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[ru]=eu(r),t!==n&&(e.checked=Pe(t,r.props.value))}},uu={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,xl(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?le(fu(e)):fu(e));e[ru](e.multiple?h(e._modelValue)?new Set(t):t:t[0]),e._assigning=!0,or(()=>{e._assigning=!1})}),e[ru]=eu(r)},mounted(e,{value:t}){du(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[ru]=eu(n)},updated(e,{value:t}){e._assigning||du(e,t)}};function du(e,t){let n=e.multiple,r=p(t);if(!(n&&!r&&!h(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=fu(a);if(n){if(r){let e=typeof o;a.selected=e===`string`||e===`number`?t.some(e=>String(e)===String(o)):Fe(t,o)>-1}else a.selected=t.has(o)}else if(Pe(fu(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function fu(e){return`_value`in e?e._value:e.value}function pu(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var mu={created(e,t,n){gu(e,t,n,null,`created`)},mounted(e,t,n){gu(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){gu(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){gu(e,t,n,r,`updated`)}};function hu(e,t){switch(e){case`SELECT`:return uu;case`TEXTAREA`:return ou;default:switch(t){case`checkbox`:return su;case`radio`:return lu;default:return ou}}}function gu(e,t,n,r,i){let a=hu(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}function _u(){ou.getSSRProps=({value:e})=>({value:e}),lu.getSSRProps=({value:e},t)=>{if(t.props&&Pe(t.props.value,e))return{checked:!0}},su.getSSRProps=({value:e},t)=>{if(p(e)){if(t.props&&Fe(e,t.props.value)>-1)return{checked:!0}}else if(h(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},mu.getSSRProps=(e,t)=>{if(typeof t.type!=`string`)return;let n=hu(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}var vu=[`ctrl`,`shift`,`alt`,`meta`],yu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>vu.some(n=>e[`${n}Key`]&&!t.includes(n))},bu=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=yu[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},xu={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Su=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=ae(n.key);if(t.some(e=>e===r||xu[e]===r))return e(n)}))},Cu=l({patchProp:Nl},Nc),wu,Tu=!1;function Eu(){return wu||=qo(Cu)}function Du(){return wu=Tu?wu:Jo(Cu),Tu=!0,wu}var Ou=((...e)=>{Eu().render(...e)}),ku=((...e)=>{Du().hydrate(...e)}),Au=((...e)=>{let t=Eu().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Nu(e);if(!r)return;let i=t._component;!v(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Mu(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t}),ju=((...e)=>{let t=Du().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=Nu(e);if(t)return n(t,!0,Mu(t))},t});function Mu(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Nu(e){return y(e)?document.querySelector(e):e}var Pu=!1,Fu=()=>{Pu||(Pu=!0,_u(),al())},Iu=Symbol(``),Lu=Symbol(``),Ru=Symbol(``),zu=Symbol(``),Bu=Symbol(``),Vu=Symbol(``),Hu=Symbol(``),Uu=Symbol(``),Wu=Symbol(``),Gu=Symbol(``),Ku=Symbol(``),qu=Symbol(``),Ju=Symbol(``),Yu=Symbol(``),Xu=Symbol(``),Zu=Symbol(``),Qu=Symbol(``),$u=Symbol(``),ed=Symbol(``),td=Symbol(``),nd=Symbol(``),rd=Symbol(``),id=Symbol(``),ad=Symbol(``),od=Symbol(``),sd=Symbol(``),cd=Symbol(``),ld=Symbol(``),ud=Symbol(``),dd=Symbol(``),fd=Symbol(``),pd=Symbol(``),md=Symbol(``),hd=Symbol(``),gd=Symbol(``),_d=Symbol(``),vd=Symbol(``),yd=Symbol(``),bd=Symbol(``),xd={[Iu]:`Fragment`,[Lu]:`Teleport`,[Ru]:`Suspense`,[zu]:`KeepAlive`,[Bu]:`BaseTransition`,[Vu]:`openBlock`,[Hu]:`createBlock`,[Uu]:`createElementBlock`,[Wu]:`createVNode`,[Gu]:`createElementVNode`,[Ku]:`createCommentVNode`,[qu]:`createTextVNode`,[Ju]:`createStaticVNode`,[Yu]:`resolveComponent`,[Xu]:`resolveDynamicComponent`,[Zu]:`resolveDirective`,[Qu]:`resolveFilter`,[$u]:`withDirectives`,[ed]:`renderList`,[td]:`renderSlot`,[nd]:`createSlots`,[rd]:`toDisplayString`,[id]:`mergeProps`,[ad]:`normalizeClass`,[od]:`normalizeStyle`,[sd]:`normalizeProps`,[cd]:`guardReactiveProps`,[ld]:`toHandlers`,[ud]:`camelize`,[dd]:`capitalize`,[fd]:`toHandlerKey`,[pd]:`setBlockTracking`,[md]:`pushScopeId`,[hd]:`popScopeId`,[gd]:`withCtx`,[_d]:`unref`,[vd]:`isRef`,[yd]:`withMemo`,[bd]:`isMemoSame`};function Sd(e){Object.getOwnPropertySymbols(e).forEach(t=>{xd[t]=e[t]})}var Cd={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:``};function wd(e,t=``){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:Cd}}function Td(e,t,n,r,i,a,o,s=!1,c=!1,l=!1,u=Cd){return e&&(s?(e.helper(Vu),e.helper(Pd(e.inSSR,l))):e.helper(Nd(e.inSSR,l)),o&&e.helper($u)),{type:13,tag:t,props:n,children:r,patchFlag:i,dynamicProps:a,directives:o,isBlock:s,disableTracking:c,isComponent:l,loc:u}}function Ed(e,t=Cd){return{type:17,loc:t,elements:e}}function Dd(e,t=Cd){return{type:15,loc:t,properties:e}}function V(e,t){return{type:16,loc:Cd,key:y(e)?H(e,!0):e,value:t}}function H(e,t=!1,n=Cd,r=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:r}}function Od(e,t=Cd){return{type:8,loc:t,children:e}}function U(e,t=[],n=Cd){return{type:14,loc:n,callee:e,arguments:t}}function kd(e,t=void 0,n=!1,r=!1,i=Cd){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:i}}function Ad(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:Cd}}function jd(e,t,n=!1,r=!1){return{type:20,index:e,value:t,needPauseTracking:n,inVOnce:r,needArraySpread:!1,loc:Cd}}function Md(e){return{type:21,body:e,loc:Cd}}function Nd(e,t){return e||t?Wu:Gu}function Pd(e,t){return e||t?Hu:Uu}function Fd(e,{helper:t,removeHelper:n,inSSR:r}){e.isBlock||(e.isBlock=!0,n(Nd(r,e.isComponent)),t(Vu),t(Pd(r,e.isComponent)))}var Id=new Uint8Array([123,123]),Ld=new Uint8Array([125,125]);function Rd(e){return e>=97&&e<=122||e>=65&&e<=90}function zd(e){return e===32||e===10||e===9||e===12||e===13}function Bd(e){return e===47||e===62||zd(e)}function Vd(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}var Hd={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])},Ud=class{constructor(e,t){this.stack=e,this.cbs=t,this.state=1,this.buffer=``,this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Id,this.delimiterClose=Ld,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer=``,this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Id,this.delimiterClose=Ld}getPos(e){let t=1,n=e+1,r=this.newlines.length,i=-1;if(r>100){let t=-1,n=r;for(;t+1<n;){let r=t+n>>>1;this.newlines[r]<e?t=r:n=r}i=t}else for(let t=r-1;t>=0;t--)if(e>this.newlines[t]){i=t;break}return i>=0&&(t=i+2,n=e-this.newlines[i]),{column:n,line:t,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex]){if(this.delimiterIndex===this.delimiterOpen.length-1){let e=this.index+1-this.delimiterOpen.length;e>this.sectionStart&&this.cbs.ontext(this.sectionStart,e),this.state=3,this.sectionStart=e}else this.delimiterIndex++}else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.state=this.inRCDATA?32:1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){let t=this.sequenceIndex===this.currentSequence.length;if(!(t?Bd(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!t){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||zd(e)){let t=this.index-this.currentSequence.length;if(this.sectionStart<t){let e=this.index;this.index=t,this.cbs.ontext(this.sectionStart,t),this.index=e}this.sectionStart=t+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Hd.TitleEnd||this.currentSequence===Hd.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=Number(e===60)}stateCDATASequence(e){e===Hd.Cdata[this.sequenceIndex]?++this.sequenceIndex===Hd.Cdata.length&&(this.state=28,this.currentSequence=Hd.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){let t=this.buffer.charCodeAt(this.index);if(t===10&&this.newlines.push(this.index),t===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Hd.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,t){this.enterRCDATA(e,t),this.state=31}enterRCDATA(e,t){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=t}stateBeforeTagName(e){e===33?(this.state=22,this.sectionStart=this.index+1):e===63?(this.state=24,this.sectionStart=this.index+1):Rd(e)?(this.sectionStart=this.index,this.state=this.mode===0?6:this.inSFCRoot?34:this.inXML?6:e===116?30:e===115?29:6):e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){Bd(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(Bd(e)){let t=this.buffer.slice(this.sectionStart,this.index);t!==`template`&&this.enterRCDATA(Vd(`</`+t),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){zd(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Rd(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||zd(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.state=this.inRCDATA?32:1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):zd(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):zd(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||Bd(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||Bd(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||Bd(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||Bd(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||Bd(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):zd(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):zd(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,t){(e===t||this.fastForwardTo(t))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(t===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){zd(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=Hd.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===Hd.ScriptEnd[3]?this.startSpecial(Hd.ScriptEnd,4):e===Hd.StyleEnd[3]?this.startSpecial(Hd.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===Hd.TitleEnd[3]?this.startSpecial(Hd.TitleEnd,4):e===Hd.TextareaEnd[3]?this.startSpecial(Hd.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){let e=this.buffer.charCodeAt(this.index);switch(e===10&&this.state!==33&&this.newlines.push(this.index),this.state){case 1:this.stateText(e);break;case 2:this.stateInterpolationOpen(e);break;case 3:this.stateInterpolation(e);break;case 4:this.stateInterpolationClose(e);break;case 31:this.stateSpecialStartSequence(e);break;case 32:this.stateInRCDATA(e);break;case 26:this.stateCDATASequence(e);break;case 19:this.stateInAttrValueDoubleQuotes(e);break;case 12:this.stateInAttrName(e);break;case 13:this.stateInDirName(e);break;case 14:this.stateInDirArg(e);break;case 15:this.stateInDynamicDirArg(e);break;case 16:this.stateInDirModifier(e);break;case 28:this.stateInCommentLike(e);break;case 27:this.stateInSpecialComment(e);break;case 11:this.stateBeforeAttrName(e);break;case 6:this.stateInTagName(e);break;case 34:this.stateInSFCRootTagName(e);break;case 9:this.stateInClosingTagName(e);break;case 5:this.stateBeforeTagName(e);break;case 17:this.stateAfterAttrName(e);break;case 20:this.stateInAttrValueSingleQuotes(e);break;case 18:this.stateBeforeAttrValue(e);break;case 8:this.stateBeforeClosingTagName(e);break;case 10:this.stateAfterClosingTagName(e);break;case 29:this.stateBeforeSpecialS(e);break;case 30:this.stateBeforeSpecialT(e);break;case 21:this.stateInAttrValueNoQuotes(e);break;case 7:this.stateInSelfClosingTag(e);break;case 23:this.stateInDeclaration(e);break;case 22:this.stateBeforeDeclaration(e);break;case 25:this.stateBeforeComment(e);break;case 24:this.stateInProcessingInstruction(e);break;case 33:this.stateInEntity()}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){let e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===Hd.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,t){}};function Wd(e,{compatConfig:t}){let n=t&&t[e];return e===`MODE`?n||3:n}function Gd(e,t){let n=Wd(`MODE`,t),r=Wd(e,t);return n===3?r===!0:r!==!1}function Kd(e,t,n,...r){return Gd(e,t)}function qd(e){throw e}function Jd(e){}function W(e,t,n,r){let i=`https://vuejs.org/error-reference/#compiler-${e}`,a=SyntaxError(String(i));return a.code=e,a.loc=t,a}var Yd=e=>e.type===4&&e.isStatic;function Xd(e){switch(e){case`Teleport`:case`teleport`:return Lu;case`Suspense`:case`suspense`:return Ru;case`KeepAlive`:case`keep-alive`:return zu;case`BaseTransition`:case`base-transition`:return Bu}}var Zd=/^$|^\d|[^\$\w\xA0-\uFFFF]/,Qd=e=>!Zd.test(e),$d=/[A-Za-z_$\xA0-\uFFFF]/,ef=/[\.\?\w$\xA0-\uFFFF]/,tf=/\s+[.[]\s*|\s*[.[]\s+/g,nf=e=>e.type===4?e.content:e.loc.source,rf=e=>{let t=nf(e).trim().replace(tf,e=>e.trim()),n=0,r=[],i=0,a=0,o=null;for(let e=0;e<t.length;e++){let s=t.charAt(e);switch(n){case 0:if(s===`[`)r.push(n),n=1,i++;else if(s===`(`)r.push(n),n=2,a++;else if(!(e===0?$d:ef).test(s))return!1;break;case 1:s===`'`||s===`"`||s==="`"?(r.push(n),n=3,o=s):s===`[`?i++:s===`]`&&(--i||(n=r.pop()));break;case 2:if(s===`'`||s===`"`||s==="`")r.push(n),n=3,o=s;else if(s===`(`)a++;else if(s===`)`){if(e===t.length-1)return!1;--a||(n=r.pop())}break;case 3:s===o&&(n=r.pop(),o=null)}}return!i&&!a},af=/^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,of=e=>af.test(nf(e));function sf(e,t,n=!1){for(let r=0;r<e.props.length;r++){let i=e.props[r];if(i.type===7&&(n||i.exp)&&(y(t)?i.name===t:t.test(i.name)))return i}}function cf(e,t,n=!1,r=!1){for(let i=0;i<e.props.length;i++){let a=e.props[i];if(a.type===6){if(n)continue;if(a.name===t&&(a.value||r))return a}else if(a.name===`bind`&&(a.exp||r)&&lf(a.arg,t))return a}}function lf(e,t){return!!(e&&Yd(e)&&e.content===t)}function uf(e){return e.props.some(e=>e.type===7&&e.name===`bind`&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function df(e){return e.type===5||e.type===2}function ff(e){return e.type===7&&e.name===`pre`}function pf(e){return e.type===7&&e.name===`slot`}function mf(e){return e.type===1&&e.tagType===3}function hf(e){return e.type===1&&e.tagType===2}var gf=new Set([sd,cd]);function _f(e,t=[]){if(e&&!y(e)&&e.type===14){let n=e.callee;if(!y(n)&&gf.has(n))return _f(e.arguments[0],t.concat(e))}return[e,t]}function vf(e,t,n){if(e.type!==13&&yf(e,t))return;let r,i=e.type===13?e.props:e.arguments[2],a=[],o;if(i&&!y(i)&&i.type===14){let e=_f(i);i=e[0],a=e[1],o=a[a.length-1]}if(i==null||y(i))r=Dd([t]);else if(i.type===14){let e=i.arguments[0];!y(e)&&e.type===15?bf(t,e)||e.properties.unshift(t):i.callee===ld?r=U(n.helper(id),[Dd([t]),i]):i.arguments.unshift(Dd([t])),!r&&(r=i)}else i.type===15?(bf(t,i)||i.properties.unshift(t),r=i):(r=U(n.helper(id),[Dd([t]),i]),o&&o.callee===cd&&(o=a[a.length-2]));e.type===13?o?o.arguments[0]=r:e.props=r:o?o.arguments[0]=r:e.arguments[2]=r}function yf(e,t){var n,r,i;if(t.key.type!==4||t.key.content!==`key`)return!1;let a=e.arguments[2];if(a&&!y(a)){let[e]=_f(a);if(e&&!y(e)&&e.type===15&&bf(t,e))return!0}return(n=e.arguments)[2]||(n[2]=`{}`),(r=e.arguments)[3]||(r[3]=`undefined`),(i=e.arguments)[4]||(i[4]=`undefined`),e.arguments[5]=t.value,!0}function bf(e,t){let n=!1;if(e.key.type===4){let r=e.key.content;n=t.properties.some(e=>e.key.type===4&&e.key.content===r)}return n}function xf(e,t){return`_${t}_${e.replace(/[^\w]/g,(t,n)=>t===`-`?`_`:e.charCodeAt(n).toString())}`}function Sf(e){return e.type===14&&e.callee===yd?e.arguments[1].returns:e}var Cf=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;function wf(e){for(let t=0;t<e.length;t++)if(!zd(e.charCodeAt(t)))return!1;return!0}function Tf(e){return e.type===2&&wf(e.content)||e.type===12&&Tf(e.content)}function Ef(e){return e.type===3||Tf(e)}var Df={parseMode:`base`,ns:0,delimiters:[`{{`,`}}`],getNamespace:()=>0,isVoidTag:o,isPreTag:o,isIgnoreNewlineTag:o,isCustomElement:o,onError:qd,onWarn:Jd,comments:!1,prefixIdentifiers:!1},G=Df,Of=null,kf=``,Af=null,K=null,jf=``,Mf=-1,Nf=-1,Pf=0,Ff=!1,If=null,q=[],J=new Ud(q,{onerr:ap,ontext(e,t){Hf(Bf(e,t),e,t)},ontextentity(e,t,n){Hf(e,t,n)},oninterpolation(e,t){if(Ff)return Hf(Bf(e,t),e,t);let n=e+J.delimiterOpen.length,r=t-J.delimiterClose.length;for(;zd(kf.charCodeAt(n));)n++;for(;zd(kf.charCodeAt(r-1));)r--;let i=Bf(n,r);i.includes(`&`)&&(i=G.decodeEntities(i,!1)),ep({type:5,content:ip(i,!1,Y(n,r)),loc:Y(e,t)})},onopentagname(e,t){let n=Bf(e,t);Af={type:1,tag:n,ns:G.getNamespace(n,q[0],G.ns),tagType:0,props:[],children:[],loc:Y(e-1,t),codegenNode:void 0}},onopentagend(e){Vf(e)},onclosetag(e,t){let n=Bf(e,t);if(!G.isVoidTag(n)){let r=!1;for(let e=0;e<q.length;e++)if(q[e].tag.toLowerCase()===n.toLowerCase()){r=!0,e>0&&ap(24,q[0].loc.start.offset);for(let n=0;n<=e;n++)Uf(q.shift(),t,n<e);break}r||ap(23,Gf(e,60))}},onselfclosingtag(e){let t=Af.tag;Af.isSelfClosing=!0,Vf(e),q[0]&&q[0].tag===t&&Uf(q.shift(),e)},onattribname(e,t){K={type:6,name:Bf(e,t),nameLoc:Y(e,t),value:void 0,loc:Y(e)}},ondirname(e,t){let n=Bf(e,t),r=n===`.`||n===`:`?`bind`:n===`@`?`on`:n===`#`?`slot`:n.slice(2);if(!Ff&&r===``&&ap(26,e),Ff||r===``)K={type:6,name:n,nameLoc:Y(e,t),value:void 0,loc:Y(e)};else if(K={type:7,name:r,rawName:n,exp:void 0,arg:void 0,modifiers:n===`.`?[H(`prop`)]:[],loc:Y(e)},r===`pre`){Ff=J.inVPre=!0,If=Af;let e=Af.props;for(let t=0;t<e.length;t++)e[t].type===7&&(e[t]=rp(e[t]))}},ondirarg(e,t){if(e===t)return;let n=Bf(e,t);if(Ff&&!ff(K))K.name+=n,np(K.nameLoc,t);else{let r=n[0]!==`[`;K.arg=ip(r?n:n.slice(1,-1),r,Y(e,t),r?3:0)}},ondirmodifier(e,t){let n=Bf(e,t);if(Ff&&!ff(K))K.name+=`.`+n,np(K.nameLoc,t);else if(K.name===`slot`){let e=K.arg;e&&(e.content+=`.`+n,np(e.loc,t))}else{let r=H(n,!0,Y(e,t));K.modifiers.push(r)}},onattribdata(e,t){jf+=Bf(e,t),Mf<0&&(Mf=e),Nf=t},onattribentity(e,t,n){jf+=e,Mf<0&&(Mf=t),Nf=n},onattribnameend(e){let t=K.loc.start.offset,n=Bf(t,e);K.type===7&&(K.rawName=n),Af.props.some(e=>(e.type===7?e.rawName:e.name)===n)&&ap(2,t)},onattribend(e,t){if(Af&&K){if(np(K.loc,t),e!==0){if(jf.includes(`&`)&&(jf=G.decodeEntities(jf,!0)),K.type===6)K.name===`class`&&(jf=$f(jf).trim()),e===1&&!jf&&ap(13,t),K.value={type:2,content:jf,loc:e===1?Y(Mf,Nf):Y(Mf-1,Nf+1)},J.inSFCRoot&&Af.tag===`template`&&K.name===`lang`&&jf&&jf!==`html`&&J.enterRCDATA(Vd(`</template`),0);else{K.exp=ip(jf,!1,Y(Mf,Nf),0,0),K.name===`for`&&(K.forParseResult=zf(K.exp));let e=-1;K.name===`bind`&&(e=K.modifiers.findIndex(e=>e.content===`sync`))>-1&&Kd(`COMPILER_V_BIND_SYNC`,G,K.loc,K.arg.loc.source)&&(K.name=`model`,K.modifiers.splice(e,1))}}(K.type!==7||K.name!==`pre`)&&Af.props.push(K)}jf=``,Mf=Nf=-1},oncomment(e,t){G.comments&&ep({type:3,content:Bf(e,t),loc:Y(e-4,t+3)})},onend(){let e=kf.length;for(let t=0;t<q.length;t++)Uf(q[t],e-1),ap(24,q[t].loc.start.offset)},oncdata(e,t){(q[0]?q[0].ns:G.ns)===0?ap(1,e-9):Hf(Bf(e,t),e,t)},onprocessinginstruction(e){(q[0]?q[0].ns:G.ns)===0&&ap(21,e-1)}}),Lf=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Rf=/^\(|\)$/g;function zf(e){let t=e.loc,n=e.content,r=n.match(Cf);if(!r)return;let[,i,a]=r,o=(e,n,r=!1)=>{let i=t.start.offset+n;return ip(e,!1,Y(i,i+e.length),0,+!!r)},s={source:o(a.trim(),n.indexOf(a,i.length)),value:void 0,key:void 0,index:void 0,finalized:!1},c=i.trim().replace(Rf,``).trim(),l=i.indexOf(c),u=c.match(Lf);if(u){c=c.replace(Lf,``).trim();let e=u[1].trim(),t;if(e&&(t=n.indexOf(e,l+c.length),s.key=o(e,t,!0)),u[2]){let r=u[2].trim();r&&(s.index=o(r,n.indexOf(r,s.key?t+e.length:l+c.length),!0))}}return c&&(s.value=o(c,l,!0)),s}function Bf(e,t){return kf.slice(e,t)}function Vf(e){J.inSFCRoot&&(Af.innerLoc=Y(e+1,e+1)),ep(Af);let{tag:t,ns:n}=Af;n===0&&G.isPreTag(t)&&Pf++,G.isVoidTag(t)?Uf(Af,e):(q.unshift(Af),(n===1||n===2)&&(J.inXML=!0)),Af=null}function Hf(e,t,n){{let t=q[0]&&q[0].tag;t!==`script`&&t!==`style`&&e.includes(`&`)&&(e=G.decodeEntities(e,!1))}let r=q[0]||Of,i=r.children[r.children.length-1];i&&i.type===2?(i.content+=e,np(i.loc,n)):r.children.push({type:2,content:e,loc:Y(t,n)})}function Uf(e,t,n=!1){n?np(e.loc,Gf(t,60)):np(e.loc,Wf(t,62)+1),J.inSFCRoot&&(e.children.length?e.innerLoc.end=l({},e.children[e.children.length-1].loc.end):e.innerLoc.end=l({},e.innerLoc.start),e.innerLoc.source=Bf(e.innerLoc.start.offset,e.innerLoc.end.offset));let{tag:r,ns:i,children:a}=e;if(Ff||(r===`slot`?e.tagType=2:qf(e)?e.tagType=3:Jf(e)&&(e.tagType=1)),J.inRCDATA||(e.children=Zf(a)),i===0&&G.isIgnoreNewlineTag(r)){let e=a[0];e&&e.type===2&&(e.content=e.content.replace(/^\r?\n/,``))}i===0&&G.isPreTag(r)&&Pf--,If===e&&(Ff=J.inVPre=!1,If=null),J.inXML&&(q[0]?q[0].ns:G.ns)===0&&(J.inXML=!1);{let t=e.props;if(!J.inSFCRoot&&Gd(`COMPILER_NATIVE_TEMPLATE`,G)&&e.tag===`template`&&!qf(e)){let t=q[0]||Of,n=t.children.indexOf(e);t.children.splice(n,1,...e.children)}let n=t.find(e=>e.type===6&&e.name===`inline-template`);n&&Kd(`COMPILER_INLINE_TEMPLATE`,G,n.loc)&&e.children.length&&(n.value={type:2,content:Bf(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:n.loc})}}function Wf(e,t){let n=e;for(;kf.charCodeAt(n)!==t&&n<kf.length-1;)n++;return n}function Gf(e,t){let n=e;for(;kf.charCodeAt(n)!==t&&n>=0;)n--;return n}var Kf=new Set([`if`,`else`,`else-if`,`for`,`slot`]);function qf({tag:e,props:t}){if(e===`template`){for(let e=0;e<t.length;e++)if(t[e].type===7&&Kf.has(t[e].name))return!0}return!1}function Jf({tag:e,props:t}){if(G.isCustomElement(e))return!1;if(e===`component`||Yf(e.charCodeAt(0))||Xd(e)||G.isBuiltInComponent&&G.isBuiltInComponent(e)||G.isNativeTag&&!G.isNativeTag(e))return!0;for(let e=0;e<t.length;e++){let n=t[e];if(n.type===6){if(n.name===`is`&&n.value&&(n.value.content.startsWith(`vue:`)||Kd(`COMPILER_IS_ON_ELEMENT`,G,n.loc)))return!0}else if(n.name===`bind`&&lf(n.arg,`is`)&&Kd(`COMPILER_IS_ON_ELEMENT`,G,n.loc))return!0}return!1}function Yf(e){return e>64&&e<91}var Xf=/\r\n/g;function Zf(e){let t=G.whitespace!==`preserve`,n=!1;for(let r=0;r<e.length;r++){let i=e[r];if(i.type===2){if(Pf)i.content=i.content.replace(Xf,`
`);else if(wf(i.content)){let a=e[r-1]&&e[r-1].type,o=e[r+1]&&e[r+1].type;!a||!o||t&&(a===3&&(o===3||o===1)||a===1&&(o===3||o===1&&Qf(i.content)))?(n=!0,e[r]=null):i.content=` `}else t&&(i.content=$f(i.content))}}return n?e.filter(Boolean):e}function Qf(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n===10||n===13)return!0}return!1}function $f(e){let t=``,n=!1;for(let r=0;r<e.length;r++)zd(e.charCodeAt(r))?n||=(t+=` `,!0):(t+=e[r],n=!1);return t}function ep(e){(q[0]||Of).children.push(e)}function Y(e,t){return{start:J.getPos(e),end:t==null?t:J.getPos(t),source:t==null?t:Bf(e,t)}}function tp(e){return Y(e.start.offset,e.end.offset)}function np(e,t){e.end=J.getPos(t),e.source=Bf(e.start.offset,t)}function rp(e){let t={type:6,name:e.rawName,nameLoc:Y(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){let n=e.exp.loc;n.end.offset<e.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),t.value={type:2,content:e.exp.content,loc:n}}return t}function ip(e,t=!1,n,r=0,i=0){return H(e,t,n,r)}function ap(e,t,n){G.onError(W(e,Y(t,t),void 0,n))}function op(){J.reset(),Af=null,K=null,jf=``,Mf=-1,Nf=-1,q.length=0}function sp(e,t){if(op(),kf=e,G=l({},Df),t){let e;for(e in t)t[e]!=null&&(G[e]=t[e])}J.mode=G.parseMode===`html`?1:G.parseMode===`sfc`?2:0,J.inXML=G.ns===1||G.ns===2;let n=t&&t.delimiters;n&&(J.delimiterOpen=Vd(n[0]),J.delimiterClose=Vd(n[1]));let r=Of=wd([],e);return J.parse(kf),r.loc=Y(0,e.length),r.children=Zf(r.children),Of=null,r}function cp(e,t){up(e,void 0,t,!!lp(e))}function lp(e){let t=e.children.filter(e=>e.type!==3);return t.length===1&&t[0].type===1&&!hf(t[0])?t[0]:null}function up(e,t,n,r=!1,i=!1){let{children:a}=e,o=[];for(let t=0;t<a.length;t++){let s=a[t];if(s.type===1&&s.tagType===0){let e=r?0:dp(s,n);if(e>0){if(e>=2){s.codegenNode.patchFlag=-1,o.push(s);continue}}else{let e=s.codegenNode;if(e.type===13){let t=e.patchFlag;if((t===void 0||t===512||t===1)&&mp(s,n)>=2){let t=hp(s);t&&(e.props=n.hoist(t))}e.dynamicProps&&=n.hoist(e.dynamicProps)}}}else if(s.type===12&&(r?0:dp(s,n))>=2){s.codegenNode.type===14&&s.codegenNode.arguments.length>0&&s.codegenNode.arguments.push(`-1`),o.push(s);continue}if(s.type===1){let t=s.tagType===1;t&&n.scopes.vSlot++,up(s,e,n,!1,i),t&&n.scopes.vSlot--}else if(s.type===11)up(s,e,n,s.children.length===1,!0);else if(s.type===9)for(let t=0;t<s.branches.length;t++)up(s.branches[t],e,n,s.branches[t].children.length===1,i)}let s=!1;if(o.length===a.length&&e.type===1){if(e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&p(e.codegenNode.children))e.codegenNode.children=c(Ed(e.codegenNode.children)),s=!0;else if(e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!p(e.codegenNode.children)&&e.codegenNode.children.type===15){let t=l(e.codegenNode,`default`);t&&(t.returns=c(Ed(t.returns)),s=!0)}else if(e.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!p(t.codegenNode.children)&&t.codegenNode.children.type===15){let n=sf(e,`slot`,!0),r=n&&n.arg&&l(t.codegenNode,n.arg);r&&(r.returns=c(Ed(r.returns)),s=!0)}}if(!s)for(let e of o)e.codegenNode=n.cache(e.codegenNode);function c(e){let t=n.cache(e);return t.needArraySpread=!0,t}function l(e,t){if(e.children&&!p(e.children)&&e.children.type===15){let n=e.children.properties.find(e=>e.key===t||e.key.content===t);return n&&n.value}}o.length&&n.transformHoist&&n.transformHoist(a,n,e)}function dp(e,t){let{constantCache:n}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;let r=n.get(e);if(r!==void 0)return r;let i=e.codegenNode;if(i.type!==13||i.isBlock&&e.tag!==`svg`&&e.tag!==`foreignObject`&&e.tag!==`math`)return 0;if(i.patchFlag===void 0){let r=3,a=mp(e,t);if(a===0)return n.set(e,0),0;a<r&&(r=a);for(let i=0;i<e.children.length;i++){let a=dp(e.children[i],t);if(a===0)return n.set(e,0),0;a<r&&(r=a)}if(r>1)for(let i=0;i<e.props.length;i++){let a=e.props[i];if(a.type===7&&a.name===`bind`&&a.exp){let i=dp(a.exp,t);if(i===0)return n.set(e,0),0;i<r&&(r=i)}}if(i.isBlock){for(let t=0;t<e.props.length;t++)if(e.props[t].type===7)return n.set(e,0),0;t.removeHelper(Vu),t.removeHelper(Pd(t.inSSR,i.isComponent)),i.isBlock=!1,t.helper(Nd(t.inSSR,i.isComponent))}return n.set(e,r),r}return n.set(e,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return dp(e.content,t);case 4:return e.constType;case 8:let a=3;for(let n=0;n<e.children.length;n++){let r=e.children[n];if(y(r)||b(r))continue;let i=dp(r,t);if(i===0)return 0;i<a&&(a=i)}return a;case 20:return 2;default:return 0}}var fp=new Set([ad,od,sd,cd]);function pp(e,t){if(e.type===14&&!y(e.callee)&&fp.has(e.callee)){let n=e.arguments[0];if(n.type===4)return dp(n,t);if(n.type===14)return pp(n,t)}return 0}function mp(e,t){let n=3,r=hp(e);if(r&&r.type===15){let{properties:e}=r;for(let r=0;r<e.length;r++){let{key:i,value:a}=e[r],o=dp(i,t);if(o===0)return o;o<n&&(n=o);let s;if(s=a.type===4?dp(a,t):a.type===14?pp(a,t):0,s===0)return s;s<n&&(n=s)}}return n}function hp(e){let t=e.codegenNode;if(t.type===13)return t.props}function gp(e,{filename:t=``,prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:o=!1,cacheHandlers:s=!1,nodeTransforms:c=[],directiveTransforms:l={},transformHoist:u=null,isBuiltInComponent:d=a,isCustomElement:f=a,expressionPlugins:p=[],scopeId:m=null,slotted:h=!0,ssr:g=!1,inSSR:_=!1,ssrCssVars:v=``,bindingMetadata:b=r,inline:x=!1,isTS:S=!1,onError:C=qd,onWarn:w=Jd,compatConfig:ee}){let T=t.replace(/\?.*$/,``).match(/([^/\\]+)\.\w+$/),E={filename:t,selfName:T&&k(O(T[1])),prefixIdentifiers:n,hoistStatic:i,hmr:o,cacheHandlers:s,nodeTransforms:c,directiveTransforms:l,transformHoist:u,isBuiltInComponent:d,isCustomElement:f,expressionPlugins:p,scopeId:m,slotted:h,ssr:g,inSSR:_,ssrCssVars:v,bindingMetadata:b,inline:x,isTS:S,onError:C,onWarn:w,compatConfig:ee,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,vForMemoKeyedNodes:new WeakSet,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){let t=E.helpers.get(e)||0;return E.helpers.set(e,t+1),e},removeHelper(e){let t=E.helpers.get(e);if(t){let n=t-1;n?E.helpers.set(e,n):E.helpers.delete(e)}},helperString(e){return`_${xd[E.helper(e)]}`},replaceNode(e){E.parent.children[E.childIndex]=E.currentNode=e},removeNode(e){let t=E.parent.children,n=e?t.indexOf(e):E.currentNode?E.childIndex:-1;!e||e===E.currentNode?(E.currentNode=null,E.onNodeRemoved()):E.childIndex>n&&(E.childIndex--,E.onNodeRemoved()),E.parent.children.splice(n,1)},onNodeRemoved:a,addIdentifiers(e){},removeIdentifiers(e){},hoist(e){y(e)&&(e=H(e)),E.hoists.push(e);let t=H(`_hoisted_${E.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache(e,t=!1,n=!1){let r=jd(E.cached.length,e,t,n);return E.cached.push(r),r}};return E.filters=new Set,E}function _p(e,t){let n=gp(e,t);bp(e,n),t.hoistStatic&&cp(e,n),t.ssr||vp(e,n),e.helpers=new Set([...n.helpers.keys()]),e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.transformed=!0,e.filters=[...n.filters]}function vp(e,t){let{helper:n}=t,{children:r}=e;if(r.length===1){let n=lp(e);if(n&&n.codegenNode){let r=n.codegenNode;r.type===13&&Fd(r,t),e.codegenNode=r}else e.codegenNode=r[0]}else r.length>1&&(e.codegenNode=Td(t,n(Iu),void 0,e.children,64,void 0,void 0,!0,void 0,!1))}function yp(e,t){let n=0,r=()=>{n--};for(;n<e.children.length;n++){let i=e.children[n];y(i)||(t.grandParent=t.parent,t.parent=e,t.childIndex=n,t.onNodeRemoved=r,bp(i,t))}}function bp(e,t){t.currentNode=e;let{nodeTransforms:n}=t,r=[];for(let i=0;i<n.length;i++){let a=n[i](e,t);if(a&&(p(a)?r.push(...a):r.push(a)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(Ku);break;case 5:t.ssr||t.helper(rd);break;case 9:for(let n=0;n<e.branches.length;n++)bp(e.branches[n],t);break;case 10:case 11:case 1:case 0:yp(e,t)}t.currentNode=e;let i=r.length;for(;i--;)r[i]()}function xp(e,t){let n=y(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(e.type===1){let{props:i}=e;if(e.tagType===3&&i.some(pf))return;let a=[];for(let o=0;o<i.length;o++){let s=i[o];if(s.type===7&&n(s.name)){i.splice(o,1),o--;let n=t(e,s,r);n&&a.push(n)}}return a}}}var Sp=`/*@__PURE__*/`,Cp=e=>`${xd[e]}: _${xd[e]}`;function wp(e,{mode:t=`function`,prefixIdentifiers:n=t===`module`,sourceMap:r=!1,filename:i=`template.vue.html`,scopeId:a=null,optimizeImports:o=!1,runtimeGlobalName:s=`Vue`,runtimeModuleName:c=`vue`,ssrRuntimeModuleName:l=`vue/server-renderer`,ssr:u=!1,isTS:d=!1,inSSR:f=!1}){let p={mode:t,prefixIdentifiers:n,sourceMap:r,filename:i,scopeId:a,optimizeImports:o,runtimeGlobalName:s,runtimeModuleName:c,ssrRuntimeModuleName:l,ssr:u,isTS:d,inSSR:f,source:e.source,code:``,column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(e){return`_${xd[e]}`},push(e,t=-2,n){p.code+=e},indent(){m(++p.indentLevel)},deindent(e=!1){e?--p.indentLevel:m(--p.indentLevel)},newline(){m(p.indentLevel)}};function m(e){p.push(`
`+`  `.repeat(e),0)}return p}function Tp(e,t={}){let n=wp(e,t);t.onContextCreated&&t.onContextCreated(n);let{mode:r,push:i,prefixIdentifiers:a,indent:o,deindent:s,newline:c,scopeId:l,ssr:u}=n,d=Array.from(e.helpers),f=d.length>0,p=!a&&r!==`module`;if(Ep(e,n),i(`function ${u?`ssrRender`:`render`}(${(u?[`_ctx`,`_push`,`_parent`,`_attrs`]:[`_ctx`,`_cache`]).join(`, `)}) {`),o(),p&&(i(`with (_ctx) {`),o(),f&&(i(`const { ${d.map(Cp).join(`, `)} } = _Vue
`,-1),c())),e.components.length&&(Dp(e.components,`component`,n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Dp(e.directives,`directive`,n),e.temps>0&&c()),e.filters&&e.filters.length&&(c(),Dp(e.filters,`filter`,n),c()),e.temps>0){i(`let `);for(let t=0;t<e.temps;t++)i(`${t>0?`, `:``}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(i(`
`,0),c()),u||i(`return `),e.codegenNode?jp(e.codegenNode,n):i(`null`),p&&(s(),i(`}`)),s(),i(`}`),{ast:e,code:n.code,preamble:``,map:n.map?n.map.toJSON():void 0}}function Ep(e,t){let{ssr:n,prefixIdentifiers:r,push:i,newline:a,runtimeModuleName:o,runtimeGlobalName:s,ssrRuntimeModuleName:c}=t,l=s,u=Array.from(e.helpers);u.length>0&&(i(`const _Vue = ${l}
`,-1),e.hoists.length&&i(`const { ${[Wu,Gu,Ku,qu,Ju].filter(e=>u.includes(e)).map(Cp).join(`, `)} } = _Vue
`,-1)),Op(e.hoists,t),a(),i(`return `)}function Dp(e,t,{helper:n,push:r,newline:i,isTS:a}){let o=n(t===`filter`?Qu:t===`component`?Yu:Zu);for(let n=0;n<e.length;n++){let s=e[n],c=s.endsWith(`__self`);c&&(s=s.slice(0,-6)),r(`const ${xf(s,t)} = ${o}(${JSON.stringify(s)}${c?`, true`:``})${a?`!`:``}`),n<e.length-1&&i()}}function Op(e,t){if(!e.length)return;t.pure=!0;let{push:n,newline:r}=t;r();for(let i=0;i<e.length;i++){let a=e[i];a&&(n(`const _hoisted_${i+1} = `),jp(a,t),r())}t.pure=!1}function kp(e,t){let n=e.length>3||!1;t.push(`[`),n&&t.indent(),Ap(e,t,n),n&&t.deindent(),t.push(`]`)}function Ap(e,t,n=!1,r=!0){let{push:i,newline:a}=t;for(let o=0;o<e.length;o++){let s=e[o];y(s)?i(s,-3):p(s)?kp(s,t):jp(s,t),o<e.length-1&&(n?(r&&i(`,`),a()):r&&i(`, `))}}function jp(e,t){if(y(e)){t.push(e,-3);return}if(b(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:jp(e.codegenNode,t);break;case 2:Mp(e,t);break;case 4:Np(e,t);break;case 5:Pp(e,t);break;case 12:jp(e.codegenNode,t);break;case 8:Fp(e,t);break;case 3:Lp(e,t);break;case 13:Rp(e,t);break;case 14:Bp(e,t);break;case 15:Vp(e,t);break;case 17:Hp(e,t);break;case 18:Up(e,t);break;case 19:Wp(e,t);break;case 20:Gp(e,t);break;case 21:Ap(e.body,t,!0,!1)}}function Mp(e,t){t.push(JSON.stringify(e.content),-3,e)}function Np(e,t){let{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,-3,e)}function Pp(e,t){let{push:n,helper:r,pure:i}=t;i&&n(Sp),n(`${r(rd)}(`),jp(e.content,t),n(`)`)}function Fp(e,t){for(let n=0;n<e.children.length;n++){let r=e.children[n];y(r)?t.push(r,-3):jp(r,t)}}function Ip(e,t){let{push:n}=t;e.type===8?(n(`[`),Fp(e,t),n(`]`)):e.isStatic?n(Qd(e.content)?e.content:JSON.stringify(e.content),-2,e):n(`[${e.content}]`,-3,e)}function Lp(e,t){let{push:n,helper:r,pure:i}=t;i&&n(Sp),n(`${r(Ku)}(${JSON.stringify(e.content)})`,-3,e)}function Rp(e,t){let{push:n,helper:r,pure:i}=t,{tag:a,props:o,children:s,patchFlag:c,dynamicProps:l,directives:u,isBlock:d,disableTracking:f,isComponent:p}=e,m;c&&(m=String(c)),u&&n(r($u)+`(`),d&&n(`(${r(Vu)}(${f?`true`:``}), `),i&&n(Sp),n(r(d?Pd(t.inSSR,p):Nd(t.inSSR,p))+`(`,-2,e),Ap(zp([a,o,s,m,l]),t),n(`)`),d&&n(`)`),u&&(n(`, `),jp(u,t),n(`)`))}function zp(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(e=>e||`null`)}function Bp(e,t){let{push:n,helper:r,pure:i}=t,a=y(e.callee)?e.callee:r(e.callee);i&&n(Sp),n(a+`(`,-2,e),Ap(e.arguments,t),n(`)`)}function Vp(e,t){let{push:n,indent:r,deindent:i,newline:a}=t,{properties:o}=e;if(!o.length){n(`{}`,-2,e);return}let s=o.length>1||!1;n(s?`{`:`{ `),s&&r();for(let e=0;e<o.length;e++){let{key:r,value:i}=o[e];Ip(r,t),n(`: `),jp(i,t),e<o.length-1&&(n(`,`),a())}s&&i(),n(s?`}`:` }`)}function Hp(e,t){kp(e.elements,t)}function Up(e,t){let{push:n,indent:r,deindent:i}=t,{params:a,returns:o,body:s,newline:c,isSlot:l}=e;l&&n(`_${xd[gd]}(`),n(`(`,-2,e),p(a)?Ap(a,t):a&&jp(a,t),n(`) => `),(c||s)&&(n(`{`),r()),o?(c&&n(`return `),p(o)?kp(o,t):jp(o,t)):s&&jp(s,t),(c||s)&&(i(),n(`}`)),l&&(e.isNonScopedSlot&&n(`, undefined, true`),n(`)`))}function Wp(e,t){let{test:n,consequent:r,alternate:i,newline:a}=e,{push:o,indent:s,deindent:c,newline:l}=t;if(n.type===4){let e=!Qd(n.content);e&&o(`(`),Np(n,t),e&&o(`)`)}else o(`(`),jp(n,t),o(`)`);a&&s(),t.indentLevel++,a||o(` `),o(`? `),jp(r,t),t.indentLevel--,a&&l(),a||o(` `),o(`: `);let u=i.type===19;u||t.indentLevel++,jp(i,t),u||t.indentLevel--,a&&c(!0)}function Gp(e,t){let{push:n,helper:r,indent:i,deindent:a,newline:o}=t,{needPauseTracking:s,needArraySpread:c}=e;c&&n(`[...(`),n(`_cache[${e.index}] || (`),s&&(i(),n(`${r(pd)}(-1`),e.inVOnce&&n(`, true`),n(`),`),o(),n(`(`)),n(`_cache[${e.index}] = `),jp(e.value,t),s&&(n(`).cacheIndex = ${e.index},`),o(),n(`${r(pd)}(1),`),o(),n(`_cache[${e.index}]`),a()),n(`)`),c&&n(`)]`)}RegExp(`\\b`+`arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield`.split(`,`).join(`\\b|\\b`)+`\\b`);var Kp=xp(/^(?:if|else|else-if)$/,(e,t,n)=>qp(e,t,n,(e,t,r)=>{let i=n.parent.children,a=i.indexOf(e),o=0;for(;a-->=0;){let e=i[a];e&&e.type===9&&(o+=e.branches.length)}return()=>{if(r)e.codegenNode=Yp(t,o,n);else{let r=Zp(e.codegenNode);r.alternate=Yp(t,o+e.branches.length-1,n)}}}));function qp(e,t,n,r){if(t.name!==`else`&&(!t.exp||!t.exp.content.trim())){let r=t.exp?t.exp.loc:e.loc;n.onError(W(28,t.loc)),t.exp=H(`true`,!1,r)}if(t.name===`if`){let i=Jp(e,t),a={type:9,loc:tp(e.loc),branches:[i]};if(n.replaceNode(a),r)return r(a,i,!0)}else{let i=n.parent.children,a=i.indexOf(e);for(;a-->=-1;){let o=i[a];if(o&&Ef(o)){n.removeNode(o);continue}if(o&&o.type===9){(t.name===`else-if`||t.name===`else`)&&o.branches[o.branches.length-1].condition===void 0&&n.onError(W(30,e.loc)),n.removeNode();let i=Jp(e,t);o.branches.push(i);let a=r&&r(o,i,!1);bp(i,n),a&&a(),n.currentNode=null}else n.onError(W(30,e.loc));break}}}function Jp(e,t){let n=e.tagType===3;return{type:10,loc:e.loc,condition:t.name===`else`?void 0:t.exp,children:n&&!sf(e,`for`)?e.children:[e],userKey:cf(e,`key`),isTemplateIf:n}}function Yp(e,t,n){return e.condition?Ad(e.condition,Xp(e,t,n),U(n.helper(Ku),[`""`,`true`])):Xp(e,t,n)}function Xp(e,t,n){let{helper:r}=n,i=V(`key`,H(`${t}`,!1,Cd,2)),{children:a}=e,o=a[0];if(a.length!==1||o.type!==1){if(a.length===1&&o.type===11){let e=o.codegenNode;return vf(e,i,n),e}return Td(n,r(Iu),Dd([i]),a,64,void 0,void 0,!0,!1,!1,e.loc)}{let e=o.codegenNode,t=Sf(e);return t.type===13&&Fd(t,n),vf(t,i,n),e}}function Zp(e){for(;;)if(e.type===19){if(e.alternate.type===19)e=e.alternate;else return e}else e.type===20&&(e=e.value)}var Qp=xp(`for`,(e,t,n)=>{let{helper:r,removeHelper:i}=n;return $p(e,t,n,t=>{let a=U(r(ed),[t.source]),o=mf(e),s=sf(e,`memo`),c=cf(e,`key`,!1,!0);c&&c.type;let l=c&&(c.type===6?c.value?H(c.value.content,!0):void 0:c.exp),u=l?V(`key`,l):null,d=t.source.type===4&&t.source.constType>0,f=d?64:c?128:256;return t.codegenNode=Td(n,r(Iu),void 0,a,f,void 0,void 0,!0,!d,!1,e.loc),()=>{let c,{children:f}=t,p=f.length!==1||f[0].type!==1,m=hf(e)?e:o&&e.children.length===1&&hf(e.children[0])?e.children[0]:null;if(m)c=m.codegenNode,o&&u&&vf(c,u,n);else if(p)c=Td(n,r(Iu),u?Dd([u]):void 0,e.children,64,void 0,void 0,!0,void 0,!1);else{c=f[0].codegenNode,o&&u&&vf(c,u,n);let e=!d||c.isBlockRequired===!0;c.isBlock!==e&&(c.isBlock?(i(Vu),i(Pd(n.inSSR,c.isComponent))):i(Nd(n.inSSR,c.isComponent))),c.isBlock=e,c.isBlock?(r(Vu),r(Pd(n.inSSR,c.isComponent))):(r(Nd(n.inSSR,c.isComponent)),c.needsPatch&&(c.patchFlag=(c.patchFlag??0)|512))}if(s){let e=kd(tm(t.parseResult,[H(`_cached`)]));e.body=Md([Od([`const _memo = (`,s.exp,`)`]),Od([`if (_cached && _cached.el`,...l?[` && _cached.key === `,l]:[],` && ${n.helperString(bd)}(_cached, _memo)) return _cached`]),Od([`const _item = `,c]),H(`_item.memo = _memo`),H(`return _item`)]),a.arguments.push(e,H(`_cache`),H(String(n.cached.length))),n.cached.push(null)}else a.arguments.push(kd(tm(t.parseResult),c,!0))}})});function $p(e,t,n,r){if(!t.exp){n.onError(W(31,t.loc));return}let i=t.forParseResult;if(!i){n.onError(W(32,t.loc));return}em(i,n);let{addIdentifiers:a,removeIdentifiers:o,scopes:s}=n,{source:c,value:l,key:u,index:d}=i,f={type:11,loc:t.loc,source:c,valueAlias:l,keyAlias:u,objectIndexAlias:d,parseResult:i,children:mf(e)?e.children:[e]};n.replaceNode(f),s.vFor++;let p=r&&r(f);return()=>{s.vFor--,p&&p()}}function em(e,t){e.finalized||=!0}function tm({value:e,key:t,index:n},r=[]){return nm([e,t,n,...r])}function nm(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((e,t)=>e||H(`_`.repeat(t+1),!1))}var rm=H(`undefined`,!1),im=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){let n=sf(e,`slot`);if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},am=(e,t,n,r)=>kd(e,n,!1,!0,n.length?n[0].loc:r);function om(e,t,n=am){t.helper(gd);let{children:r,loc:i}=e,a=[],o=[],s=t.scopes.vSlot>0||t.scopes.vFor>0,c=sf(e,`slot`,!0);if(c){let{arg:e,exp:t}=c;e&&!Yd(e)&&(s=!0),a.push(V(e||H(`default`,!0),n(t,void 0,r,i)))}let l=!1,u=!1,d=[],f=new Set,p=0;for(let e=0;e<r.length;e++){let i=r[e],m;if(!mf(i)||!(m=sf(i,`slot`,!0))){i.type!==3&&d.push(i);continue}if(c){t.onError(W(37,m.loc));break}l=!0;let{children:h,loc:g}=i,{arg:_=H(`default`,!0),exp:v,loc:y}=m,b;Yd(_)?b=_?_.content:`default`:s=!0;let x=sf(i,`for`),S=n(v,x,h,g),C,w;if(C=sf(i,`if`))s=!0,o.push(Ad(C.exp,sm(_,S,p++),rm));else if(w=sf(i,/^else(?:-if)?$/,!0)){let n=e,i;for(;n--&&(i=r[n],Ef(i)););if(i&&mf(i)&&sf(i,/^(?:else-)?if$/)){let e=o[o.length-1];for(;e.alternate.type===19;)e=e.alternate;e.alternate=w.exp?Ad(w.exp,sm(_,S,p++),rm):sm(_,S,p++)}else t.onError(W(30,w.loc))}else if(x){s=!0;let e=x.forParseResult;e?(em(e,t),o.push(U(t.helper(ed),[e.source,kd(tm(e),sm(_,S),!0)]))):t.onError(W(32,x.loc))}else{if(b){if(f.has(b)){t.onError(W(38,y));continue}f.add(b),b==="default"&&(u=!0)}a.push(V(_,S))}}if(!c){let e=(e,r)=>{let a=n(e,void 0,r,i);return t.compatConfig&&(a.isNonScopedSlot=!0),V(`default`,a)};l?d.length&&!d.every(Tf)&&(u?t.onError(W(39,d[0].loc)):a.push(e(void 0,d))):a.push(e(void 0,r))}let m=s?2:cm(e.children)?3:1,h=Dd(a.concat(V(`_`,H(m+``,!1))),i);return o.length&&(h=U(t.helper(nd),[h,Ed(o)])),{slots:h,hasDynamicSlots:s}}function sm(e,t,n){let r=[V(`name`,e),V(`fn`,t)];return n!=null&&r.push(V(`key`,H(String(n),!0))),Dd(r)}function cm(e){for(let t=0;t<e.length;t++){let n=e[t];switch(n.type){case 1:if(n.tagType===2||cm(n.children))return!0;break;case 9:if(cm(n.branches))return!0;break;case 10:case 11:if(cm(n.children))return!0}}return!1}var lm=new WeakMap,um=(e,t)=>function(){if(e=t.currentNode,e.type!==1||e.tagType!==0&&e.tagType!==1)return;let{tag:n,props:r}=e,i=e.tagType===1,a=i?dm(e,t):`"${n}"`,o=x(a)&&a.callee===Xu,s,c,l=0,u,d,f,p=!1,m=!1,h=o||a===Lu||a===Ru||!i&&(n===`svg`||n===`foreignObject`||n===`math`);if(r.length>0){let n=fm(e,t,void 0,i,o);s=n.props,l=n.patchFlag,d=n.dynamicPropNames,p=n.needsPatch,m=n.isBlockRequired;let r=n.directives;f=r&&r.length?Ed(r.map(e=>hm(e,t))):void 0,n.shouldUseBlock&&(h=!0)}if(e.children.length>0){if(a===zu&&(h=!0,l|=1024),i&&a!==Lu&&a!==zu){let{slots:n,hasDynamicSlots:r}=om(e,t);c=n,r&&(l|=1024)}else if(e.children.length===1&&a!==Lu){let n=e.children[0],r=n.type,i=r===5||r===8;i&&dp(n,t)===0&&(l|=1),c=i||r===2?n:e.children}else c=e.children}d&&d.length&&(u=gm(d));let g=e.codegenNode=Td(t,a,s,c,l===0?void 0:l,u,f,!!h,!1,i,e.loc);p&&=l===0||l===32,p&&(g.needsPatch=!0),m&&(g.isBlockRequired=!0)};function dm(e,t,n=!1){let{tag:r}=e,i=_m(r),a=cf(e,`is`,!1,!0);if(a){if(i||Gd(`COMPILER_IS_ON_ELEMENT`,t)){let e;if(a.type===6?e=a.value&&H(a.value.content,!0):(e=a.exp,e||=H(`is`,!1,a.arg.loc)),e)return U(t.helper(Xu),[e])}else a.type===6&&a.value.content.startsWith(`vue:`)&&(r=a.value.content.slice(4))}let o=Xd(r)||t.isBuiltInComponent(r);return o?(n||t.helper(o),o):(t.helper(Yu),t.components.add(r),xf(r,`component`))}function fm(e,t,n=e.props,r,i,a=!1){let{tag:o,loc:c,children:l}=e,u=[],d=[],f=[],p=l.length>0,m=!1,h=!1,g=0,_=!1,v=!1,y=!1,x=!1,S=!1,C=!1,w=[],ee=e=>{u.length&&(d.push(Dd(pm(u),c)),u=[]),e&&d.push(e)},T=()=>{t.scopes.vFor>0&&u.push(V(H(`ref_for`,!0),H(`true`)))},E=({key:e,value:n})=>{if(Yd(e)){let a=e.content,o=s(a);if(o&&(!r||i)&&a.toLowerCase()!==`onclick`&&a!==`onUpdate:modelValue`&&!te(a)&&(x=!0),o&&te(a)&&(C=!0),a===`ref`&&(_=!0),o&&n.type===14&&(n=n.arguments[0]),n.type===20||(n.type===4||n.type===8)&&dp(n,t)>0)return;a===`class`?v=!0:a===`style`?y=!0:a!==`ref`&&a!==`key`&&!w.includes(a)&&w.push(a),r&&(a===`class`||a===`style`)&&!w.includes(a)&&w.push(a)}else S=!0};for(let i=0;i<n.length;i++){let s=n[i];if(s.type===6){let{loc:e,name:n,nameLoc:r,value:i}=s;if(n===`ref`&&(_=!0,T()),n===`is`&&(_m(o)||i&&i.content.startsWith(`vue:`)||Gd(`COMPILER_IS_ON_ELEMENT`,t)))continue;u.push(V(H(n,!0,r),H(i?i.content:``,!0,i?i.loc:e)))}else{let{name:n,arg:i,exp:l,loc:_,modifiers:v}=s,y=n===`bind`,x=n===`on`;if(n===`slot`){r||t.onError(W(40,_));continue}if(n===`once`||n===`memo`||n===`is`||y&&lf(i,`is`)&&(_m(o)||Gd(`COMPILER_IS_ON_ELEMENT`,t))||x&&a)continue;if(y&&lf(i,`key`)&&(m=!0),x&&p&&i&&Yd(i)&&O(i.content)===`vue:beforeUpdate`&&(m=!0,h=!0),y&&lf(i,`ref`)&&T(),!i&&(y||x)){if(S=!0,l){if(y){if(ee(),Gd(`COMPILER_V_BIND_OBJECT_ORDER`,t)){d.unshift(l);continue}T(),ee(),d.push(l)}else ee({type:14,loc:_,callee:t.helper(ld),arguments:r?[l]:[l,`true`]})}else t.onError(W(y?34:35,_));continue}y&&v.some(e=>e.content===`prop`)&&(g|=32);let C=t.directiveTransforms[n];if(C){let{props:n,needRuntime:r}=C(s,e,t);!a&&n.forEach(E),x&&i&&!Yd(i)?ee(Dd(n,c)):u.push(...n),r&&(f.push(s),b(r)&&lm.set(s,r))}else ne(n)||(f.push(s),p&&(m=!0,h=!0))}}let D;d.length?(ee(),D=d.length>1?U(t.helper(id),d,c):d[0]):u.length&&(D=Dd(pm(u),c)),S?g|=16:(v&&!r&&(g|=2),y&&!r&&(g|=4),w.length&&(g|=8),x&&(g|=32));let re=(g===0||g===32)&&(_||C||f.length>0);if(!m&&re&&(g|=512),!t.inSSR&&D)switch(D.type){case 15:let e=-1,n=-1,r=!1;for(let t=0;t<D.properties.length;t++){let i=D.properties[t].key;Yd(i)?i.content===`class`?e=t:i.content===`style`&&(n=t):i.isHandlerKey||(r=!0)}let i=D.properties[e],a=D.properties[n];r?D=U(t.helper(sd),[D]):(i&&!Yd(i.value)&&(i.value=U(t.helper(ad),[i.value])),a&&(y||a.value.type===4&&a.value.content.trim()[0]===`[`||a.value.type===17)&&(a.value=U(t.helper(od),[a.value])));break;case 14:break;default:D=U(t.helper(sd),[U(t.helper(cd),[D])])}return{props:D,directives:f,patchFlag:g,dynamicPropNames:w,shouldUseBlock:m,needsPatch:re,isBlockRequired:h}}function pm(e){let t=new Map,n=[];for(let r=0;r<e.length;r++){let i=e[r];if(i.key.type===8||!i.key.isStatic){n.push(i);continue}let a=i.key.content,o=t.get(a);o?(a===`style`||a===`class`||s(a))&&mm(o,i):(t.set(a,i),n.push(i))}return n}function mm(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=Ed([e.value,t.value],e.loc)}function hm(e,t){let n=[],r=lm.get(e);r?n.push(t.helperString(r)):(t.helper(Zu),t.directives.add(e.name),n.push(xf(e.name,`directive`)));let{loc:i}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push(`void 0`),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push(`void 0`),n.push(`void 0`));let t=H(`true`,!1,i);n.push(Dd(e.modifiers.map(e=>V(e,t)),i))}return Ed(n,e.loc)}function gm(e){let t=`[`;for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=`, `);return t+`]`}function _m(e){return e===`component`||e===`Component`}var vm=(e,t)=>{if(hf(e)){let{children:n,loc:r}=e,{slotName:i,slotProps:a}=ym(e,t),o=[t.prefixIdentifiers?`_ctx.$slots`:`$slots`,i,`{}`,`undefined`,`true`],s=2;a&&(o[2]=a,s=3),n.length&&(o[3]=kd([],n,!1,!1,r),s=4),t.scopeId&&!t.slotted&&(s=5),o.splice(s),e.codegenNode=U(t.helper(td),o,r)}};function ym(e,t){let n=`"default"`,r,i=[];for(let t=0;t<e.props.length;t++){let r=e.props[t];r.type===6?r.value&&(r.name===`name`?n=JSON.stringify(r.value.content):(r.name=O(r.name),i.push(r))):r.name===`bind`&&lf(r.arg,`name`)?r.exp?n=r.exp:r.arg&&r.arg.type===4&&(n=r.exp=H(O(r.arg.content),!1,r.arg.loc)):(r.name===`bind`&&r.arg&&Yd(r.arg)&&(r.arg.content=O(r.arg.content)),i.push(r))}if(i.length>0){let{props:n,directives:a}=fm(e,t,i,!1,!1);r=n,a.length&&t.onError(W(36,a[0].loc))}return{slotName:n,slotProps:r}}var bm=(e,t,n,r)=>{let{loc:i,modifiers:a,arg:o}=e;!e.exp&&!a.length&&n.onError(W(35,i));let s;if(o.type===4){if(o.isStatic){let e=o.content;e.startsWith(`vue:`)&&(e=`vnode-${e.slice(4)}`),s=H(t.tagType!==0||e.startsWith(`vnode`)||!/[A-Z]/.test(e)?oe(O(e)):`on:${e}`,!0,o.loc)}else s=Od([`${n.helperString(fd)}(`,o,`)`])}else s=o,s.children.unshift(`${n.helperString(fd)}(`),s.children.push(`)`);let c=e.exp;c&&!c.content.trim()&&(c=void 0);let l=n.cacheHandlers&&!c&&!n.inVOnce;if(c){let e=rf(c),t=!(e||of(c)),n=c.content.includes(`;`);(t||l&&e)&&(c=Od([`${t?`$event`:`(...args)`} => ${n?`{`:`(`}`,c,n?`}`:`)`]))}let u={props:[V(s,c||H(`() => {}`,!1,i))]};return r&&(u=r(u)),l&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(e=>e.key.isHandlerKey=!0),u},xm=(e,t,n)=>{let{modifiers:r,loc:i}=e,a=e.arg,{exp:o}=e;return o&&o.type===4&&!o.content.trim()&&(o=void 0),a.type===4?a.isStatic||(a.content=a.content?`${a.content} || ""`:`""`):(a.children.unshift(`(`),a.children.push(`) || ""`)),r.some(e=>e.content===`camel`)&&(a.type===4?a.content=a.isStatic?O(a.content):`${n.helperString(ud)}(${a.content})`:(a.children.unshift(`${n.helperString(ud)}(`),a.children.push(`)`))),n.inSSR||(r.some(e=>e.content===`prop`)&&Sm(a,`.`),r.some(e=>e.content===`attr`)&&Sm(a,`^`)),{props:[V(a,o)]}},Sm=(e,t)=>{e.type===4?e.content=e.isStatic?t+e.content:`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(`)`))},Cm=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{let n=e.children,r,i=!1;for(let e=0;e<n.length;e++){let t=n[e];if(df(t)){i=!0;for(let i=e+1;i<n.length;i++){let a=n[i];if(df(a))r||=n[e]=Od([t],t.loc),r.children.push(` + `,a),n.splice(i,1),i--;else{r=void 0;break}}}}if(!(!i||n.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(e=>e.type===7&&!t.directiveTransforms[e.name])&&e.tag!==`template`)))for(let e=0;e<n.length;e++){let r=n[e];if(df(r)||r.type===8){let i=[];(r.type!==2||r.content!==` `)&&i.push(r),!t.ssr&&dp(r,t)===0&&i.push(`1`),n[e]={type:12,content:r,loc:r.loc,codegenNode:U(t.helper(qu),i)}}}}},wm=new WeakSet,Tm=(e,t)=>{if(e.type===1&&sf(e,`once`,!0))return wm.has(e)||t.inVOnce||t.inSSR?void 0:(wm.add(e),t.inVOnce=!0,t.helper(pd),()=>{t.inVOnce=!1;let e=t.currentNode;e.codegenNode&&=t.cache(e.codegenNode,!0,!0)})},Em=(e,t,n)=>{let{exp:r,arg:i}=e;if(!r)return n.onError(W(41,e.loc)),Dm();let a=r.loc.source.trim(),o=r.type===4?r.content:a,s=n.bindingMetadata[a];if(s===`props`||s===`props-aliased`)return n.onError(W(44,r.loc)),Dm();if(s===`literal-const`||s===`setup-const`)return n.onError(W(45,r.loc)),Dm();if(!o.trim()||!rf(r))return n.onError(W(42,r.loc)),Dm();let c=i||H(`modelValue`,!0),l=i?Yd(i)?`onUpdate:${O(i.content)}`:Od([`"onUpdate:" + `,i]):`onUpdate:modelValue`,u;u=Od([`${n.isTS?`($event: any)`:`$event`} => ((`,r,`) = $event)`]);let d=[V(c,e.exp),V(l,u)];if(e.modifiers.length&&t.tagType===1){let t=e.modifiers.map(e=>e.content).map(e=>(Qd(e)?e:JSON.stringify(e))+`: true`).join(`, `),n=i?Yd(i)?`${i.content}Modifiers`:Od([i,` + "Modifiers"`]):`modelModifiers`;d.push(V(n,H(`{ ${t} }`,!1,e.loc,2)))}return Dm(d)};function Dm(e=[]){return{props:e}}var Om=/[\w).+\-_$\]]/,km=(e,t)=>{Gd(`COMPILER_FILTERS`,t)&&(e.type===5?Am(e.content,t):e.type===1&&e.props.forEach(e=>{e.type===7&&e.name!==`for`&&e.exp&&Am(e.exp,t)}))};function Am(e,t){if(e.type===4)jm(e,t);else for(let n=0;n<e.children.length;n++){let r=e.children[n];typeof r==`object`&&(r.type===4?jm(r,t):r.type===8?Am(r,t):r.type===5&&Am(r.content,t))}}function jm(e,t){let n=e.content,r=!1,i=!1,a=!1,o=!1,s=0,c=0,l=0,u=0,d,f,p,m,h=[];for(p=0;p<n.length;p++)if(f=d,d=n.charCodeAt(p),r)d===39&&f!==92&&(r=!1);else if(i)d===34&&f!==92&&(i=!1);else if(a)d===96&&f!==92&&(a=!1);else if(o)d===47&&f!==92&&(o=!1);else if(d===124&&n.charCodeAt(p+1)!==124&&n.charCodeAt(p-1)!==124&&!s&&!c&&!l)m===void 0?(u=p+1,m=n.slice(0,p).trim()):g();else{switch(d){case 34:i=!0;break;case 39:r=!0;break;case 96:a=!0;break;case 40:l++;break;case 41:l--;break;case 91:c++;break;case 93:c--;break;case 123:s++;break;case 125:s--}if(d===47){let e=p-1,t;for(;e>=0&&(t=n.charAt(e),t===` `);e--);(!t||!Om.test(t))&&(o=!0)}}m===void 0?m=n.slice(0,p).trim():u!==0&&g();function g(){h.push(n.slice(u,p).trim()),u=p+1}if(h.length){for(p=0;p<h.length;p++)m=Mm(m,h[p],t);e.content=m,e.ast=void 0}}function Mm(e,t,n){n.helper(Qu);let r=t.indexOf(`(`);if(r<0)return n.filters.add(t),`${xf(t,`filter`)}(${e})`;{let i=t.slice(0,r),a=t.slice(r+1);return n.filters.add(i),`${xf(i,`filter`)}(${e}${a===`)`?a:`,`+a}`}}var Nm=new WeakSet,Pm=(e,t)=>{if(e.type===1){let n=sf(e,`memo`);return!n||Nm.has(e)||t.inSSR?void 0:(Nm.add(e),()=>{let r=e.codegenNode||t.currentNode.codegenNode;r&&r.type===13&&(e.tagType!==1&&Fd(r,t),e.codegenNode=U(t.helper(yd),[n.exp,kd(void 0,r),`_cache`,String(t.cached.length)]),t.cached.push(null))})}},Fm=(e,t)=>{if(e.type===1){for(let n of e.props)if(n.type===7&&n.name===`bind`&&(!n.exp||n.exp.type===4&&!n.exp.content.trim())&&n.arg){let e=n.arg;if(e.type!==4||!e.isStatic)t.onError(W(53,e.loc)),n.exp=H(``,!0,e.loc);else{let t=O(e.content);($d.test(t[0])||t[0]===`-`)&&(n.exp=H(t,!1,e.loc))}}}};function Im(e){return[[Fm,Tm,Kp,Pm,Qp,km,vm,um,im,Cm],{on:bm,bind:xm,model:Em}]}function Lm(e,t={}){let n=t.onError||qd,r=t.mode===`module`;t.prefixIdentifiers===!0?n(W(48)):r&&n(W(49)),t.cacheHandlers&&n(W(50)),t.scopeId&&!r&&n(W(51));let i=l({},t,{prefixIdentifiers:!1}),a=y(e)?sp(e,i):e,[o,s]=Im();return _p(a,l({},i,{nodeTransforms:[...o,...t.nodeTransforms||[]],directiveTransforms:l({},s,t.directiveTransforms||{})})),Tp(a,i)}var Rm=()=>({props:[]}),zm=Symbol(``),Bm=Symbol(``),Vm=Symbol(``),Hm=Symbol(``),Um=Symbol(``),Wm=Symbol(``),Gm=Symbol(``),Km=Symbol(``),qm=Symbol(``),Jm=Symbol(``);Sd({[zm]:`vModelRadio`,[Bm]:`vModelCheckbox`,[Vm]:`vModelText`,[Hm]:`vModelSelect`,[Um]:`vModelDynamic`,[Wm]:`withModifiers`,[Gm]:`withKeys`,[Km]:`vShow`,[qm]:`Transition`,[Jm]:`TransitionGroup`});var Ym;function Xm(e,t=!1){return Ym||=document.createElement(`div`),t?(Ym.innerHTML=`<div foo="${e.replace(/"/g,`&quot;`)}">`,Ym.children[0].getAttribute(`foo`)):(Ym.innerHTML=e,Ym.textContent)}var Zm={parseMode:`html`,isVoidTag:ke,isNativeTag:e=>Ee(e)||De(e)||Oe(e),isPreTag:e=>e===`pre`,isIgnoreNewlineTag:e=>e===`pre`||e===`textarea`,decodeEntities:Xm,isBuiltInComponent:e=>{if(e===`Transition`||e===`transition`)return qm;if(e===`TransitionGroup`||e===`transition-group`)return Jm},getNamespace(e,t,n){let r=t?t.ns:n;if(t&&r===2){if(t.tag===`annotation-xml`){if(e===`svg`)return 1;t.props.some(e=>e.type===6&&e.name===`encoding`&&e.value!=null&&(e.value.content===`text/html`||e.value.content===`application/xhtml+xml`))&&(r=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!==`mglyph`&&e!==`malignmark`&&(r=0)}else t&&r===1&&(t.tag===`foreignObject`||t.tag===`desc`||t.tag===`title`)&&(r=0);if(r===0){if(e===`svg`)return 1;if(e===`math`)return 2}return r}},Qm=e=>{e.type===1&&e.props.forEach((t,n)=>{t.type===6&&t.name===`style`&&t.value&&(e.props[n]={type:7,name:`bind`,arg:H(`style`,!0,t.loc),exp:$m(t.value.content,t.loc),modifiers:[],loc:t.loc})})},$m=(e,t)=>{let n=ye(e);return H(JSON.stringify(n),!1,t,3)};function eh(e,t){return W(e,t,void 0)}var th=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(eh(54,i)),t.children.length&&(n.onError(eh(55,i)),t.children.length=0),{props:[V(H(`innerHTML`,!0,i),r||H(``,!0))]}},nh=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(eh(56,i)),t.children.length&&(n.onError(eh(57,i)),t.children.length=0),{props:[V(H(`textContent`,!0),r?dp(r,n)>0?r:U(n.helperString(rd),[r],i):H(``,!0))]}},rh=(e,t,n)=>{let r=Em(e,t,n);if(!r.props.length||t.tagType===1)return r;e.arg&&n.onError(eh(59,e.arg.loc));let{tag:i}=t,a=n.isCustomElement(i);if(i===`input`||i===`textarea`||i===`select`||a){let o=Vm,s=!1;if(i===`input`||a){let r=cf(t,`type`);if(r){if(r.type===7)o=Um;else if(r.value)switch(r.value.content){case`radio`:o=zm;break;case`checkbox`:o=Bm;break;case`file`:s=!0,n.onError(eh(60,e.loc))}}else uf(t)&&(o=Um)}else i===`select`&&(o=Hm);s||(r.needRuntime=n.helper(o))}else n.onError(eh(58,e.loc));return r.props=r.props.filter(e=>e.key.type!==4||e.key.content!==`modelValue`),r},ih=n(`passive,once,capture`),ah=n(`stop,prevent,self,ctrl,shift,alt,meta,exact,middle`),oh=n(`left,right`),sh=n(`onkeyup,onkeydown,onkeypress`),ch=(e,t,n,r)=>{let i=[],a=[],o=[];for(let s=0;s<t.length;s++){let c=t[s].content;c===`native`&&Kd(`COMPILER_V_ON_NATIVE`,n,r)||ih(c)?o.push(c):oh(c)?Yd(e)?sh(e.content.toLowerCase())?i.push(c):a.push(c):(i.push(c),a.push(c)):ah(c)?a.push(c):i.push(c)}return{keyModifiers:i,nonKeyModifiers:a,eventOptionModifiers:o}},lh=(e,t)=>Yd(e)&&e.content.toLowerCase()===`onclick`?H(t,!0):e.type===4?e:Od([`(`,e,`) === "onClick" ? "${t}" : (`,e,`)`]),uh=(e,t,n)=>bm(e,t,n,t=>{let{modifiers:r}=e;if(!r.length)return t;let{key:i,value:a}=t.props[0],{keyModifiers:o,nonKeyModifiers:s,eventOptionModifiers:c}=ch(i,r,n,e.loc);if(s.includes(`right`)&&(i=lh(i,`onContextmenu`)),s.includes(`middle`)&&(i=lh(i,`onMouseup`)),s.length&&(a=U(n.helper(Wm),[a,JSON.stringify(s)])),o.length&&(!Yd(i)||sh(i.content.toLowerCase()))&&(a=U(n.helper(Gm),[a,JSON.stringify(o)])),c.length){let e=c.map(k).join(``);i=Yd(i)?H(`${i.content}${e}`,!0):Od([`(`,i,`) + "${e}"`])}return{props:[V(i,a)]}}),dh=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(eh(62,i)),{props:[],needRuntime:n.helper(Km)}},fh=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag===`script`||e.tag===`style`)&&t.removeNode()},ph=[Qm],mh={cloak:Rm,html:th,text:nh,model:rh,on:uh,show:dh};function hh(e,t={}){return Lm(e,l({},Zm,t,{nodeTransforms:[fh,...ph,...t.nodeTransforms||[]],directiveTransforms:l({},mh,t.directiveTransforms||{}),transformHoist:null}))}var gh=Object.create(null);function _h(e,t){if(!y(e)){if(e.nodeType)e=e.innerHTML;else return a}let n=pe(e,t),r=gh[n];if(r)return r;if(e[0]===`#`){let t=document.querySelector(e);e=t?t.innerHTML:``}let i=l({hoistStatic:!0,onError:void 0,onWarn:a},t);!i.isCustomElement&&typeof customElements<`u`&&(i.isCustomElement=e=>!!customElements.get(e));let{code:o}=hh(e,i),s=Function(`Vue`,o)(Tc);return s._rc=!0,gh[n]=s}sc(_h);var vh=`stackline-vue-multiselect-dropdown-styles`,yh=`
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
`;function bh(){if(typeof document>`u`||document.getElementById(vh))return;let e=document.createElement(`style`);e.id=vh,e.textContent=yh,document.head.appendChild(e)}var xh={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`,keyboard:{space:!0,spaceOptionAction:`toggle`,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0}};function Sh(e){return e===`remove`?`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`:e===`clear`?`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`:e===`search`?`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`:e===`angle-up`?`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`}function Ch(e,t,n=`vmsd-icon`){return e(`svg`,{class:n,attrs:{viewBox:t===`remove`?`0 0 47.971 47.971`:t===`clear`?`0 0 51.976 51.976`:t===`search`?`0 0 615.52 615.52`:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`}},[e(`path`,{attrs:{d:Sh(t)}})])}function wh(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function Th(e){if(!e)return null;let t={};for(let[n,r]of Object.entries(e)){if(n===`attrs`||n===`domProps`){Object.assign(t,r);continue}if(n===`on`&&r&&typeof r==`object`){for(let[e,n]of Object.entries(r))t[`on${wh(e)}`]=n;continue}t[n]=r}return t}var X=(...e)=>{let[t,n,r]=e;return e.length===1?hc(t):e.length===2&&(Array.isArray(n)||typeof n==`string`||typeof n==`number`||n==null)?hc(t,null,n):hc(t,Th(n),r)};function Eh(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function Dh(e,t){if(Eh(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function Oh(e,t){if(Eh(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return Dh(e,t)}function kh(e){return!Eh(e)&&!!e.disabled}function Ah(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set;if(i.add(Dh(e,n).toLowerCase()),!Eh(e)){let t=n.searchBy.length?n.searchBy:[n.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}for(let e of i)if(e.indexOf(r)>=0)return!0;return!1}function jh(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!Eh(e)){let n=t.groupBy,r=e;if(n in r)return String(r[n]||``)}return``}function Mh(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=jh(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function Nh(e,t,n){let r=new Map;for(let t of e)r.set(Oh(t,n),t);for(let e of t){let t=Oh(e,n);r.has(t)||r.set(t,e)}return Array.from(r.values())}function Ph(e,t,n,r){return e?e(n,r,t):null}function Fh(e,t,n){let r=e.$slots&&e.$slots[t];return typeof r==`function`?r(n):null}function Ih(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/["\\]/g,`\\$&`)}function Lh(e){return e.key===`Enter`||e.key===` `||e.key===`Spacebar`}function Rh(e){return e.key===` `||e.key===`Spacebar`}function zh(e){let t=e;return t?t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable:!1}var Bh={name:`VueMultiselectDropdown`,emits:[`update:modelValue`,`input`,`update:selectedItems`,`change`,`select`,`de-select`,`select-all`,`de-select-all`,`group-select`,`group-de-select`,`scroll-to-end`,`add-filter-new-item`,`open`,`close`],props:{data:{type:Array,default:()=>[]},modelValue:{type:Array,default:void 0},value:{type:Array,default:void 0},selectedItems:{type:Array,default:void 0},defaultSelectedItems:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},renderItem:{type:Function,default:void 0},renderBadge:{type:Function,default:void 0},renderEmptyState:{type:Function,default:void 0}},data(){return{isOpen:!1,query:``,focusedKey:``,internalSelected:Array.isArray(this.defaultSelectedItems)?this.defaultSelectedItems.slice():[],menuStyle:{},bodyListMaxHeight:void 0,menuPlaceholder:null,menuAttachedToBody:!1,effectivePosition:`bottom`,instanceId:`stackline-vmsd-${Math.random().toString(36).slice(2)}`}},computed:{resolvedSettings(){let e=this.settings||{},t={...xh,...e,keyboard:{...xh.keyboard,...e.keyboard||{}}};typeof e.escapeToClose==`boolean`&&e.keyboard?.escape==null&&(t.keyboard.escape=e.escapeToClose),typeof t.keyboard.backspace==`boolean`&&(t.keyboard.backspaceRemovesLastWhenSearchEmpty=t.keyboard.backspace);let n=t.skin||t.theme||`classic`;return{...t,skin:n,disabled:!!(t.disabled||this.disabled),searchBy:Array.isArray(t.searchBy)?t.searchBy:[]}},selected(){return Array.isArray(this.selectedItems)?this.selectedItems:Array.isArray(this.modelValue)?this.modelValue:Array.isArray(this.value)?this.value:this.internalSelected},filteredItems(){let e=this.resolvedSettings;return(this.data||[]).filter(t=>Ah(t,this.query,e))},groupedItems(){return Mh(this.filteredItems,this.resolvedSettings)},visibleSelected(){let e=this.resolvedSettings.badgeShowLimit;return this.selected.slice(0,e)},hiddenSelectedCount(){return Math.max(0,this.selected.length-this.visibleSelected.length)},openDirection(){return this.effectivePosition===`top`?`up`:`down`},shouldAppendToBody(){return!!(this.resolvedSettings.appendToBody||this.resolvedSettings.tagToBody)}},watch:{isOpen(e){this.$nextTick(()=>{e?(this.attachMenuToBody(),this.updateMenuPosition(),this.resolvedSettings.searchAutofocus&&this.resolvedSettings.enableSearchFilter&&this.focusSearch(),this.$emit(`open`)):(this.restoreMenuToComponent(),this.menuStyle={},this.bodyListMaxHeight=void 0,this.$emit(`close`))})},selected(){this.$nextTick(this.updateMenuPosition)},filteredItems(){this.$nextTick(this.updateMenuPosition)},settings:{deep:!0,handler(){this.$nextTick(this.updateMenuPosition)}}},mounted(){bh(),document.addEventListener(`click`,this.onDocumentClick,!0),document.addEventListener(`keydown`,this.onDocumentKeydown,!0),window.addEventListener(`resize`,this.updateMenuPosition),window.addEventListener(`scroll`,this.updateMenuPosition,!0)},beforeUnmount(){document.removeEventListener(`click`,this.onDocumentClick,!0),document.removeEventListener(`keydown`,this.onDocumentKeydown,!0),window.removeEventListener(`resize`,this.updateMenuPosition),window.removeEventListener(`scroll`,this.updateMenuPosition,!0),this.restoreMenuToComponent()},methods:{getLabel(e){return Dh(e,this.resolvedSettings)},getKey(e){return Oh(e,this.resolvedSettings)},getOptionId(e){return`${this.instanceId}-option-${e}`},isSelected(e){let t=this.getKey(e);return this.selected.some(e=>this.getKey(e)===t)},visibleSelectableItems(){return this.filteredItems.filter(e=>!kh(e))},emitSelection(e){!Array.isArray(this.selectedItems)&&!Array.isArray(this.modelValue)&&!Array.isArray(this.value)&&(this.internalSelected=e),this.$emit(`update:modelValue`,e),this.$emit(`input`,e),this.$emit(`update:selectedItems`,e),this.$emit(`change`,e)},openDropdown(){this.resolvedSettings.disabled||(this.isOpen=!0)},closeDropdown(){this.isOpen=!1,this.query=``,this.focusedKey=``},toggleDropdown(){this.isOpen?this.closeDropdown():this.openDropdown()},focusSearch(){this.isOpen||this.openDropdown();let e=this.$refs.searchInput;e&&typeof e.focus==`function`&&e.focus()},clearSelection(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.selected.slice();this.emitSelection([]),this.$emit(`de-select-all`,t)},selectAll(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.resolvedSettings,n=this.visibleSelectableItems();if(n.length>0&&n.every(e=>this.isSelected(e))){let e=new Set(n.map(e=>this.getKey(e))),t=this.selected.filter(t=>!e.has(this.getKey(t)));this.emitSelection(t),this.$emit(`de-select-all`,n);return}let r=t.limitSelection?Math.max(t.limitSelection-this.selected.length,0):2**53-1,i=new Set(this.selected.map(e=>this.getKey(e))),a=n.filter(e=>!i.has(this.getKey(e))).slice(0,r),o=t.singleSelection?n.slice(0,1):Nh(this.selected,a,t);this.emitSelection(o),this.$emit(`select-all`,o)},deSelectAll(e){this.clearSelection(e)},selectGroup(e,t,n){n.preventDefault(),n.stopPropagation();let r=this.resolvedSettings,i=t.filter(e=>!kh(e));if(i.every(e=>this.isSelected(e))){let t=new Set(i.map(e=>this.getKey(e))),n=this.selected.filter(e=>!t.has(this.getKey(e)));this.emitSelection(n),this.$emit(`group-de-select`,e,i);return}let a=r.singleSelection?i.slice(0,1):Nh(this.selected,i,r);this.emitSelection(a),this.$emit(`group-select`,e,i)},toggleItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.isSelected(e),r=!!this.resolvedSettings.limitSelection&&this.selected.length>=this.resolvedSettings.limitSelection;if(this.resolvedSettings.disabled||kh(e)||r&&!n)return;let i=this.getKey(e);if(this.selected.some(e=>this.getKey(e)===i)){if(this.resolvedSettings.singleSelection){this.closeDropdown();return}let t=this.selected.filter(e=>this.getKey(e)!==i);this.emitSelection(t),this.$emit(`de-select`,e);return}let a=this.resolvedSettings.singleSelection?[e]:this.selected.concat(e);this.resolvedSettings.limitSelection>0&&(a=a.slice(0,this.resolvedSettings.limitSelection)),this.emitSelection(a),this.$emit(`select`,e),(this.resolvedSettings.singleSelection||this.resolvedSettings.closeDropDownOnSelection)&&this.closeDropdown()},removeItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.getKey(e),r=this.selected.filter(e=>this.getKey(e)!==n);this.emitSelection(r),this.$emit(`de-select`,e)},removeLastSelected(){let e=this.selected[this.selected.length-1];e&&this.removeItem(e)},addFilterItem(e){e.preventDefault(),e.stopPropagation();let t=this.query.trim();if(!t)return;let n={[this.resolvedSettings.primaryKey]:t.toLowerCase().replace(/\s+/g,`-`),[this.resolvedSettings.labelKey]:t};this.$emit(`add-filter-new-item`,t,n),this.toggleItem(n),this.query=``},onTriggerKeydown(e){let t=this.resolvedSettings.keyboard;if(e.key===`Enter`||Rh(e)&&t.space!==!1){e.preventDefault(),this.toggleDropdown();return}if(t.arrows!==!1&&e.key===`ArrowDown`){e.preventDefault(),this.openDropdown(),this.focusFirstOption();return}if(t.arrows!==!1&&e.key===`ArrowUp`){e.preventDefault(),this.openDropdown(),this.focusLastOption();return}t.escape!==!1&&e.key===`Escape`&&this.closeDropdown()},onListKeydown(e){let t=this.resolvedSettings.keyboard;if(t.escape!==!1&&e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.closeDropdown();return}if(e.key===`Tab`)return;if(zh(e.target)){if(e.key===`Backspace`&&!this.query&&t.backspaceRemovesLastWhenSearchEmpty===!0){e.preventDefault(),e.stopPropagation(),this.removeLastSelected();return}if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return}if(t.arrows===!1&&[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let n=this.visibleSelectableItems();if(!n.length)return;let r=Math.max(0,n.findIndex(e=>this.getKey(e)===this.focusedKey));if(e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation();let t=n[Math.min(r+1,n.length-1)];this.focusOption(t);return}if(e.key===`ArrowUp`){e.preventDefault(),e.stopPropagation();let t=n[Math.max(r-1,0)];this.focusOption(t);return}if(e.key===`Home`){e.preventDefault(),e.stopPropagation(),this.focusFirstOption();return}if(e.key===`End`){e.preventDefault(),e.stopPropagation(),this.focusLastOption();return}if(Lh(e)){if(Rh(e)&&t.space===!1)return;e.preventDefault(),e.stopPropagation();let r=n.find(e=>this.getKey(e)===this.focusedKey)||n[0];if(this.toggleItem(r),t.spaceOptionAction===`toggle-and-next`){let e=n.findIndex(e=>this.getKey(e)===this.getKey(r)),t=n[Math.min(e+1,n.length-1)];t&&this.focusOption(t)}else this.focusOption(r);return}},focusFirstOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems()[0];e&&this.focusOption(e)})},focusLastOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems(),t=e[e.length-1];t&&this.focusOption(t)})},focusOption(e){let t=this.getKey(e);this.focusedKey=t,this.$nextTick(()=>{let e=this.$refs.menu?.querySelector(`[data-vmsd-key="${Ih(t)}"]`);e&&(e.focus(),e.scrollIntoView({block:`nearest`}))})},onInlineKeydown(e){Lh(e)&&e.stopPropagation(),this.resolvedSettings.keyboard.arrows!==!1&&e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusFirstOption()),this.resolvedSettings.keyboard.arrows!==!1&&e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusLastOption())},onRemoveButtonKeydown(e,t){if(this.resolvedSettings.keyboard.deleteRemovesFocusedBadge!==!1&&(t.key===`Backspace`||t.key===`Delete`)){this.removeItem(e,t);return}this.onInlineKeydown(t)},onTriggerClick(e){let t=e.target;t&&t.closest(`button`)||this.toggleDropdown()},onDocumentClick(e){if(!this.isOpen)return;let t=this.$el,n=this.$refs.menu,r=e.target;t&&t.contains(r)||n&&n.contains(r)||this.closeDropdown()},onDocumentKeydown(e){this.isOpen&&this.resolvedSettings.keyboard.escape!==!1&&e.key===`Escape`&&this.closeDropdown()},onListScroll(e){let t=e.target;if(!t)return;let n={scrollTop:t.scrollTop,scrollHeight:t.scrollHeight,clientHeight:t.clientHeight};t.scrollTop+t.clientHeight>=t.scrollHeight-4&&this.$emit(`scroll-to-end`,n)},attachMenuToBody(){if(!this.shouldAppendToBody||!this.isOpen||typeof document>`u`)return;let e=this.$refs.menu;!e||e.parentNode===document.body||(!this.menuPlaceholder&&e.parentNode&&(this.menuPlaceholder=document.createComment(`stackline-vue-multiselect-menu`),e.parentNode.insertBefore(this.menuPlaceholder,e)),document.body.appendChild(e),this.menuAttachedToBody=!0)},restoreMenuToComponent(){let e=this.$refs.menu;!e||!this.menuPlaceholder||!this.menuPlaceholder.parentNode||(this.menuPlaceholder.parentNode.insertBefore(e,this.menuPlaceholder.nextSibling),this.menuPlaceholder.parentNode.removeChild(this.menuPlaceholder),this.menuPlaceholder=null,this.menuAttachedToBody=!1,this.menuStyle={})},updateMenuPosition(){if(!this.isOpen||typeof window>`u`)return;let e=this.$refs.trigger,t=this.$refs.menu;if(!e||!t)return;let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=n.top,a=r-n.bottom,o=t.offsetHeight||Math.min(this.resolvedSettings.maxHeight+92,420),s=this.resolvedSettings.position===`top`?`top`:`bottom`,c=i>a+48,l=this.resolvedSettings.autoPosition?a<o&&c&&o<i?`top`:`bottom`:s;if(this.effectivePosition=l,!this.shouldAppendToBody){this.bodyListMaxHeight=void 0;return}let u=this.$refs.list?.offsetHeight||Math.min(this.resolvedSettings.maxHeight,o),d=Math.max(0,o-u),f=l===`top`?Math.max(0,n.top-8-8):Math.max(0,r-n.bottom-8-8),p=o>0?Math.max(0,Math.min(this.resolvedSettings.maxHeight,f-d)):this.resolvedSettings.maxHeight,m=d+p,h=l===`top`?n.top-m-8:n.bottom+8,g=l===`top`?Math.max(8,h):h,_=Math.max(0,window.innerWidth-16),v=Math.min(n.width,_),y=Math.min(Math.max(8,n.left),window.innerWidth-v-8),b={position:`fixed`,top:`${g}px`,left:`${y}px`,width:`${v}px`,maxWidth:`${_}px`,zIndex:`100000`,display:this.isOpen?`block`:`none`};this.bodyListMaxHeight=p,this.menuStyle=b}},render(){let e=this.resolvedSettings,t=String(e.skin||e.theme||`classic`),n=[`classic`,`material`,`dark`,`custom`].includes(t)?``:`theme-custom`,r=this.selected.length>0,i=this.visibleSelected,a=this.hiddenSelectedCount,o=e.clearAll&&r&&!e.disabled,s=this.visibleSelectableItems(),c=s.length>0&&s.every(e=>this.isSelected(e)),l=e.enableCheckAll&&!e.singleSelection||!!(e.addNewItemOnFilter&&this.query.trim()),u=[`vmsd-menu`,`vmsd-${this.effectivePosition}`,`skin-${t}`,`theme-${t}`,n,this.shouldAppendToBody?`vmsd-body-overlay`:``].filter(Boolean),d=e.singleSelection&&r?[X(`span`,{class:`vmsd-single-value`},[this.getLabel(this.selected[0])])]:i.map(t=>{let n=this.getLabel(t),r={item:t,label:n,selected:!0,disabled:!1,key:this.getKey(t),ariaSelected:`true`,ariaChecked:`true`,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},i=Fh(this,`badge`,r)||Ph(this.renderBadge,X,t,r),a=typeof e.removeItemAriaLabel==`function`?e.removeItemAriaLabel(t):`${e.removeItemAriaLabel}: ${n}`;return X(`span`,{class:`vmsd-badge`,key:this.getKey(t)},[X(`span`,{class:`vmsd-badge-label`},[i||n]),e.disabled?null:X(`button`,{class:`vmsd-badge-remove`,attrs:{type:`button`,"aria-label":a},on:{click:e=>this.removeItem(t,e),keydown:e=>this.onRemoveButtonKeydown(t,e)}},[Ch(X,`remove`)])])}),f=r?[X(`span`,{class:`vmsd-badge-list`},d)]:[X(`span`,{class:`vmsd-placeholder`},[Fh(this,`placeholder`,{label:e.text,state:{isOpen:this.isOpen,query:this.query}})||e.text])],p=X(`div`,{ref:`trigger`,class:[`vmsd-trigger`,e.disabled?`vmsd-disabled`:``],attrs:{role:`combobox`,tabindex:e.disabled?`-1`:`0`,"aria-label":r?`${e.ariaLabel}: ${this.selected.map(e=>this.getLabel(e)).join(`, `)}`:e.ariaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-haspopup":`listbox`,"aria-disabled":e.disabled?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`,"aria-activedescendant":this.focusedKey?this.getOptionId(this.focusedKey):void 0},on:{click:this.onTriggerClick,keydown:this.onTriggerKeydown}},[Fh(this,`trigger`,{selected:this.selected,label:r?this.selected.map(e=>this.getLabel(e)).join(`, `):e.text,isOpen:this.isOpen,clearSelection:this.clearSelection,toggleDropdown:this.toggleDropdown})||X(`div`,{class:`vmsd-value`},f),X(`div`,{class:`vmsd-actions`},[a>0?X(`span`,{class:`vmsd-overflow`,attrs:{"aria-label":`${a} more selected options`}},[`+${a}`]):null,o?X(`button`,{class:`vmsd-clear`,attrs:{type:`button`,"aria-label":e.clearAllAriaLabel},on:{click:e=>this.clearSelection(e),keydown:this.onInlineKeydown}},[Ch(X,`remove`)]):null,X(`button`,{class:`vmsd-arrow-button`,attrs:{type:`button`,disabled:e.disabled,"aria-label":this.isOpen?e.closeDropdownAriaLabel:e.openDropdownAriaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:e=>{e.preventDefault(),e.stopPropagation(),this.toggleDropdown()},keydown:this.onInlineKeydown}},[X(`span`,{class:`vmsd-arrow`,attrs:{"aria-hidden":`true`}},[Ch(X,this.isOpen?`angle-up`:`angle-down`)])])])]),m=e.enableSearchFilter?X(`div`,{class:`vmsd-search-shell`},[Ch(X,`search`,`vmsd-search-icon`),X(`input`,{ref:`searchInput`,class:`vmsd-search-input`,domProps:{value:this.query},attrs:{type:`text`,placeholder:e.searchPlaceholderText,"aria-label":e.searchAriaLabel},on:{input:e=>{this.query=String(e.target.value||``)},keydown:this.onListKeydown}}),this.query?X(`button`,{class:`vmsd-search-clear`,attrs:{type:`button`,"aria-label":e.clearSearchAriaLabel},on:{click:()=>this.query=``,keydown:this.onInlineKeydown}},[Ch(X,`clear`)]):null]):null,h=l?X(`div`,{class:`vmsd-bulk-actions`},[e.enableCheckAll&&!e.singleSelection?X(`button`,{class:`vmsd-inline-button vmsd-select-all-button`,attrs:{type:`button`,disabled:e.disabled||s.length===0},on:{click:e=>this.selectAll(e),keydown:this.onInlineKeydown}},[e.showCheckbox?X(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":c?`true`:`false`,"aria-hidden":`true`}}):null,X(`span`,[c?e.unSelectAllText:e.selectAllText])]):null,e.addNewItemOnFilter&&this.query.trim()?X(`button`,{class:`vmsd-inline-button vmsd-add-button`,attrs:{type:`button`},on:{click:this.addFilterItem,keydown:this.onInlineKeydown}},[`${e.addNewButtonText} "${this.query.trim()}"`]):null]):null,g=t=>{let n=this.getLabel(t),r=this.isSelected(t),i=!!e.limitSelection&&this.selected.length>=e.limitSelection,a=e.disabled||kh(t)||i&&!r,o=this.getKey(t),s={item:t,label:n,selected:r,disabled:a,index:this.filteredItems.findIndex(e=>this.getKey(e)===o),group:jh(t,e),key:o,optionId:this.getOptionId(o),ariaSelected:r?`true`:`false`,ariaChecked:r?`true`:`false`,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},c=Fh(this,`option`,s)||Ph(this.renderItem,X,t,s);return X(`div`,{key:o,class:[`vmsd-option`,r?`vmsd-selected`:``,a?`vmsd-disabled`:``],attrs:{id:this.getOptionId(o),role:`option`,tabindex:a?`-1`:`0`,"data-vmsd-option":`true`,"data-vmsd-key":o,"aria-disabled":a?`true`:`false`,"aria-selected":r?`true`:`false`,"aria-checked":r?`true`:`false`},on:{click:e=>{a||(this.toggleItem(t,e),this.focusOption(t))},focus:()=>this.focusedKey=o,mouseenter:()=>this.focusedKey=o,keydown:this.onListKeydown}},[e.showCheckbox?X(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":r?`true`:`false`,"aria-hidden":`true`}}):null,c||X(`div`,{class:`vmsd-option-body`},[X(`div`,{class:`vmsd-option-label`},[n]),!Eh(t)&&t.caption?X(`span`,{class:`vmsd-option-hint`},[String(t.caption)]):null])])},_=this.isOpen?e.loading?[X(`div`,{class:`vmsd-state`,attrs:{role:`status`}},[Fh(this,`loading`,{label:e.loadingText})||e.loadingText])]:e.groupBy?this.groupedItems.map(t=>X(`div`,{class:`vmsd-group`,key:t.name,attrs:{role:`group`,"aria-label":t.name}},[Fh(this,`group-header`,{group:t,selected:t.items.filter(e=>!kh(e)).every(e=>this.isSelected(e)),selectGroup:e=>this.selectGroup(t.name,t.items,e)})||X(`div`,{class:`vmsd-group-header`},[X(`span`,[`${t.name} \xB7 ${t.items.length}`]),e.selectGroup?X(`button`,{class:`vmsd-group-action`,attrs:{type:`button`},on:{click:e=>this.selectGroup(t.name,t.items,e)}},[t.items.filter(e=>!kh(e)).every(e=>this.isSelected(e))?`Unselect`:`Select`]):null]),t.items.map(g)])):this.filteredItems.map(g):[];if(this.isOpen&&!this.filteredItems.length&&!e.loading){let t=Fh(this,`empty`,{query:this.query,label:e.noDataLabel})||(this.renderEmptyState?this.renderEmptyState(this.query,X):e.noDataLabel);_.push(X(`div`,{class:`vmsd-state`},[t]))}let v=X(`div`,{ref:`menu`,class:u,style:{...this.shouldAppendToBody?this.menuStyle:{},display:this.isOpen?`block`:`none`},attrs:{role:`presentation`,"aria-hidden":this.isOpen?`false`:`true`},on:{keydown:this.onListKeydown}},[X(`div`,{class:`vmsd-toolbar`},[h,m]),X(`div`,{ref:`list`,class:`vmsd-list`,style:{maxHeight:`${this.shouldAppendToBody&&this.bodyListMaxHeight!=null?this.bodyListMaxHeight:e.maxHeight}px`},attrs:{id:`${this.instanceId}-listbox`,role:`listbox`,"aria-label":e.listboxAriaLabel,"aria-multiselectable":e.singleSelection?`false`:`true`},on:{scroll:this.onListScroll}},_),this.isOpen?Fh(this,`menu-footer`,{selected:this.selected,filteredItems:this.filteredItems,close:this.closeDropdown}):null]);return X(`div`,{class:[`vmsd-root`,`skin-${t}`,`theme-${t}`,n,this.isOpen?`vmsd-open`:``,this.effectivePosition===`top`?`vmsd-opens-up`:`vmsd-opens-down`,e.classes,r?`vmsd-has-selection`:``,o?`vmsd-has-clear`:``,a>0?`vmsd-has-overflow`:``],attrs:{"data-open":this.isOpen?`true`:`false`}},[p,v])}},Vh={labelKey:`itemName`,primaryKey:`id`};function Hh(e,t){return e==null?t:xn(e)}function Uh(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function Wh(e){let t=Hh(e,{});return{...t,text:t.text||`Select`,singleSelection:!!t.singleSelection,labelKey:t.labelKey||Vh.labelKey,primaryKey:t.primaryKey||Vh.primaryKey,searchBy:Array.isArray(t.searchBy)?t.searchBy:[],groupBy:t.groupBy||``}}function Gh(e,t){if(Uh(e))return String(e);let n=[t.labelKey||Vh.labelKey,`itemName`,`name`,`label`,`title`,`value`];for(let t of n)if(e[t]!=null)return String(e[t]);return JSON.stringify(e)}function Kh(e,t){if(Uh(e))return String(e);let n=[t.primaryKey||Vh.primaryKey,`id`,`value`,`key`];for(let t of n)if(e[t]!=null)return String(e[t]);return Gh(e,t)}function qh(e,t){if(t.groupBy)return typeof t.groupBy==`function`?t.groupBy(e):!Uh(e)&&e[t.groupBy]!=null?String(e[t.groupBy]):void 0}function Jh(e){return!Uh(e)&&!!e.disabled}function Yh(e,t,n){let r=t.trim().toLowerCase();if(!r)return!0;let i=new Set([Gh(e,n).toLowerCase()]);if(!Uh(e)){let t=n.searchBy&&n.searchBy.length?n.searchBy:[n.labelKey||Vh.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}return Array.from(i).some(e=>e.includes(r))}function Xh(e,t,n){let r=new Map;for(let t of e)r.set(Kh(t,n),t);for(let e of t){let t=Kh(e,n);r.has(t)||r.set(t,e)}return Array.from(r.values())}function Zh(e,t){if(t.singleSelection)return e.length;let n=Number(t.badgeShowLimit);return!Number.isFinite(n)||n<=0?e.length:Math.floor(n)}function Qh(e={}){let t={...e};return t.className&&!t.class&&(t.class=t.className),delete t.className,t}function $h(e,t={}){let n=Qh(t),r={...n,...e};(e.class||n.class)&&(r.class=[n.class,e.class].filter(Boolean).join(` `)),(e.style||n.style)&&(r.style={...typeof n.style==`object`?n.style:{},...typeof e.style==`object`?e.style:{}});for(let t of Object.keys(e))/^on[A-Z]/.test(t)&&typeof e[t]==`function`&&typeof n[t]==`function`&&(r[t]=(...r)=>{n[t](...r),e[t](...r)});return r}function eg(e={}){let t=F(e.defaultSelectedItems?e.defaultSelectedItems.slice():[]),n=F(``),r=B(()=>Wh(e.settings)),i=B(()=>Hh(e.data,[])),a=B(()=>Hh(e.selectedItems,t.value)),o=B(()=>i.value.filter(e=>Yh(e,n.value,r.value))),s=e=>{let t=Kh(e,r.value);return a.value.some(e=>Kh(e,r.value)===t)},c=n=>{e.selectedItems||(t.value=n),e.onChange?.(n)},l=e=>Kh(e,r.value),u=e=>Gh(e,r.value),d=B(()=>o.value.filter(e=>!Jh(e))),f=B(()=>{let e=Zh(a.value,r.value);return a.value.slice(0,e)}),p=B(()=>Math.max(a.value.length-f.value.length,0)),m=B(()=>d.value.length>0&&d.value.every(e=>s(e))),h=t=>{let n=l(t),r=a.value.filter(e=>l(e)!==n);c(r),e.onDeSelect?.(t)},g=t=>{if(!Jh(t)){if(r.value.singleSelection){c([t]),e.onSelect?.(t);return}s(t)||(c(a.value.concat(t)),e.onSelect?.(t))}},_=e=>{if(!Jh(e)){if(s(e)){if(r.value.singleSelection)return;h(e);return}g(e)}},v=()=>{let t=a.value.slice();c([]),e.onDeSelectAll?.(t)},y=t=>{if(!t||!t.length){v();return}let n=new Set(t.map(l));c(a.value.filter(e=>!n.has(l(e)))),e.onDeSelectAll?.(t)},b=t=>{let n=(t||d.value).filter(e=>!Jh(e)),i=a.value.length;c(r.value.singleSelection?n.slice(0,1):Xh(a.value,n,r.value)),e.onSelectAll?.(n),!n.length&&i!==a.value.length&&e.onChange?.(a.value)};return{data:i,settings:r,filter:n,filteredItems:o,selectableItems:d,selectedItems:a,visibleBadges:f,hiddenBadgeCount:p,allFilteredSelected:m,isSelected:s,getItemKey:l,getItemLabel:u,setFilter:e=>{n.value=e},selectItem:g,removeItem:h,removeLastSelectedItem:()=>{let e=a.value[a.value.length-1];e&&h(e)},toggleItem:_,clearSelection:v,selectAll:b,deSelectAll:y,toggleGroup:(t,n)=>{let r=n.filter(e=>!Jh(e));if(r.length){if(r.every(e=>s(e))){y(r),e.onGroupDeSelect?.(t,r);return}b(r),e.onGroupSelect?.(t,r)}}}}function tg(e={}){let t=eg(e),n=F(!1),r=F(``),i=F(``),a=`stackline-vmsd-headless-${Math.random().toString(36).slice(2)}`,o=`${a}-listbox`,s=B(()=>{let e=0;return t.filteredItems.value.map(n=>({item:n,key:Kh(n,t.settings.value),label:Gh(n,t.settings.value),selected:t.isSelected(n),disabled:Jh(n),group:qh(n,t.settings.value),index:e++}))}),c=B(()=>i.value?`${a}-option-${i.value}`:void 0),l=B(()=>{let e=new Map;for(let t of s.value){let n=t.group||`Ungrouped`,r=e.get(n)||[];r.push(t),e.set(n,r)}return Array.from(e.entries()).map(([e,t])=>{let n=t.filter(e=>!e.disabled);return{name:e,items:t,enabledItems:n,selected:n.length>0&&n.every(e=>e.selected),disabled:n.length===0}})}),u=B(()=>t.selectedItems.value.length?t.selectedItems.value.map(e=>Gh(e,t.settings.value)).join(`, `):t.settings.value.text||`Select`),d=()=>{n.value=!0,!i.value&&s.value[0]&&(i.value=s.value[0].key)},f=()=>{n.value=!1},p=()=>n.value?f():d(),m=e=>{let t=s.value.filter(e=>!e.disabled),n=Math.max(0,t.findIndex(e=>e.key===i.value)),r=t[Math.min(Math.max(n+e,0),t.length-1)];r&&(i.value=r.key)},h=(e={})=>$h({"data-stackline-multiselect":`true`,"data-open":n.value?`true`:`false`},e),g=(e={})=>$h({type:`button`,role:`combobox`,"aria-expanded":n.value?`true`:`false`,"aria-haspopup":`listbox`,"aria-controls":o,"aria-activedescendant":c.value,onClick:p,onKeydown:e=>{(e.key===`Enter`||e.key===` `||e.key===`Spacebar`)&&(e.preventDefault(),p()),e.key===`ArrowDown`&&(e.preventDefault(),d(),m(1)),e.key===`ArrowUp`&&(e.preventDefault(),d(),m(-1)),e.key===`Escape`&&f()}},e),_=(e={})=>$h({value:r.value,"aria-label":`Search options`,onInput:e=>{r.value=String(e.target.value||``),t.setFilter(r.value)},onKeydown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),m(1)),e.key===`ArrowUp`&&(e.preventDefault(),m(-1)),e.key===`Escape`&&f()}},e),v=(e={})=>$h({id:o,role:`listbox`,"aria-multiselectable":t.settings.value.singleSelection?`false`:`true`},e),y=e=>{e.disabled||(t.toggleItem(e.item),i.value=e.key,t.settings.value.singleSelection&&f())};return{isOpen:n,query:r,filter:t.filter,activeKey:i,activeDescendantId:c,listboxId:o,settings:t.settings,filteredItems:t.filteredItems,selectableItems:t.selectableItems,selectedItems:t.selectedItems,visibleBadges:t.visibleBadges,hiddenBadgeCount:t.hiddenBadgeCount,visibleOptions:s,groups:l,allFilteredSelected:t.allFilteredSelected,label:u,open:d,close:f,toggleOpen:p,clearSelection:t.clearSelection,selectAll:t.selectAll,deSelectAll:t.deSelectAll,toggleGroup:t.toggleGroup,toggleItem:t.toggleItem,selectItem:t.selectItem,removeItem:t.removeItem,removeLastSelectedItem:t.removeLastSelectedItem,isSelected:t.isSelected,setFilter:e=>{r.value=e,t.setFilter(e)},getItemKey:t.getItemKey,getItemLabel:t.getItemLabel,getRootProps:h,getTriggerProps:g,getSearchInputProps:_,getListboxProps:v,getOptionProps:(e,t={})=>$h({id:`${a}-option-${e.key}`,role:`option`,tabindex:e.disabled?-1:0,"aria-selected":e.selected?`true`:`false`,"aria-checked":e.selected?`true`:`false`,"aria-disabled":e.disabled?`true`:`false`,onMouseenter:()=>{i.value=e.key},onClick:()=>{y(e)},onKeydown:t=>{t.key===`ArrowDown`&&(t.preventDefault(),m(1)),t.key===`ArrowUp`&&(t.preventDefault(),m(-1)),(t.key===`Enter`||t.key===` `||t.key===`Spacebar`)&&(t.preventDefault(),y(e)),t.key===`Escape`&&f()}},t),getClearAllButtonProps:(e={})=>$h({type:`button`,"aria-label":`Clear selected options`,onClick:t.clearSelection},e),getRemoveButtonProps:(e,n={})=>$h({type:`button`,"aria-label":`Remove ${Gh(e,t.settings.value)}`,onClick:()=>{t.removeItem(e)},onKeydown:n=>{(n.key===`Backspace`||n.key===`Delete`)&&(n.preventDefault(),t.removeItem(e))}},n)}}var ng=`3.1.5`,rg=yc,ig=`https://stackblitz.com/github/alexandroit/stackline-vue-multiselect-vue-3`,ag=[`classic`,`material`,`dark`,`custom`,`brand`],og=[{key:`space`,label:`Space`},{key:`tab`,label:`Tab`},{key:`arrows`,label:`Arrows`},{key:`escape`,label:`Escape`},{key:`backspaceRemovesLastWhenSearchEmpty`,label:`Empty search Backspace`},{key:`deleteRemovesFocusedBadge`,label:`Focused badge Delete`}],sg=[{key:`toggle`,label:`Toggle current`,description:`Space toggles the focused option and keeps focus there.`},{key:`toggle-and-next`,label:`Toggle + next`,description:`Space toggles the focused option and moves to the next enabled option.`}],Z=[[`Brazil`,`BR`,`Brasilia`,`South America`,`Americas`],[`Canada`,`CA`,`Ottawa`,`North America`,`Americas`],[`Portugal`,`PT`,`Lisbon`,`Southern Europe`,`Europe`],[`Argentina`,`AR`,`Buenos Aires`,`South America`,`Americas`],[`Germany`,`DE`,`Berlin`,`Western Europe`,`Europe`],[`Mexico`,`MX`,`Mexico City`,`North America`,`Americas`],[`Colombia`,`CO`,`Bogota`,`South America`,`Americas`],[`Uruguay`,`UY`,`Montevideo`,`South America`,`Americas`],[`Costa Rica`,`CR`,`San Jose`,`Central America`,`Americas`],[`Chile`,`CL`,`Santiago`,`South America`,`Americas`],[`Peru`,`PE`,`Lima`,`South America`,`Americas`],[`Ecuador`,`EC`,`Quito`,`South America`,`Americas`],[`Panama`,`PA`,`Panama City`,`Central America`,`Americas`],[`Dominican Republic`,`DO`,`Santo Domingo`,`Caribbean`,`Americas`],[`Jamaica`,`JM`,`Kingston`,`Caribbean`,`Americas`],[`Bahamas`,`BS`,`Nassau`,`Caribbean`,`Americas`],[`Barbados`,`BB`,`Bridgetown`,`Caribbean`,`Americas`],[`Belize`,`BZ`,`Belmopan`,`Central America`,`Americas`],[`Paraguay`,`PY`,`Asuncion`,`South America`,`Americas`],[`Ireland`,`IE`,`Dublin`,`Northern Europe`,`Europe`],[`Spain`,`ES`,`Madrid`,`Southern Europe`,`Europe`],[`France`,`FR`,`Paris`,`Western Europe`,`Europe`],[`Italy`,`IT`,`Rome`,`Southern Europe`,`Europe`],[`Netherlands`,`NL`,`Amsterdam`,`Western Europe`,`Europe`],[`Belgium`,`BE`,`Brussels`,`Western Europe`,`Europe`],[`Switzerland`,`CH`,`Bern`,`Western Europe`,`Europe`],[`Austria`,`AT`,`Vienna`,`Western Europe`,`Europe`],[`Sweden`,`SE`,`Stockholm`,`Northern Europe`,`Europe`],[`Norway`,`NO`,`Oslo`,`Northern Europe`,`Europe`],[`Denmark`,`DK`,`Copenhagen`,`Northern Europe`,`Europe`],[`Finland`,`FI`,`Helsinki`,`Northern Europe`,`Europe`],[`Iceland`,`IS`,`Reykjavik`,`Northern Europe`,`Europe`],[`Czech Republic`,`CZ`,`Prague`,`Central Europe`,`Europe`],[`Slovakia`,`SK`,`Bratislava`,`Central Europe`,`Europe`],[`Slovenia`,`SI`,`Ljubljana`,`Southern Europe`,`Europe`],[`Croatia`,`HR`,`Zagreb`,`Southern Europe`,`Europe`],[`Greece`,`GR`,`Athens`,`Southern Europe`,`Europe`],[`Malta`,`MT`,`Valletta`,`Southern Europe`,`Europe`],[`Luxembourg`,`LU`,`Luxembourg`,`Western Europe`,`Europe`],[`Estonia`,`EE`,`Tallinn`,`Northern Europe`,`Europe`],[`South Africa`,`ZA`,`Pretoria`,`Southern Africa`,`Africa`],[`Kenya`,`KE`,`Nairobi`,`East Africa`,`Africa`],[`Ghana`,`GH`,`Accra`,`West Africa`,`Africa`],[`Botswana`,`BW`,`Gaborone`,`Southern Africa`,`Africa`],[`Namibia`,`NA`,`Windhoek`,`Southern Africa`,`Africa`],[`Rwanda`,`RW`,`Kigali`,`East Africa`,`Africa`],[`Tanzania`,`TZ`,`Dodoma`,`East Africa`,`Africa`],[`Senegal`,`SN`,`Dakar`,`West Africa`,`Africa`],[`Mauritius`,`MU`,`Port Louis`,`East Africa`,`Africa`],[`Seychelles`,`SC`,`Victoria`,`East Africa`,`Africa`],[`Cabo Verde`,`CV`,`Praia`,`West Africa`,`Africa`],[`Japan`,`JP`,`Tokyo`,`East Asia`,`Asia`],[`Singapore`,`SG`,`Singapore`,`Southeast Asia`,`Asia`],[`Malaysia`,`MY`,`Kuala Lumpur`,`Southeast Asia`,`Asia`],[`Thailand`,`TH`,`Bangkok`,`Southeast Asia`,`Asia`],[`Indonesia`,`ID`,`Jakarta`,`Southeast Asia`,`Asia`],[`Philippines`,`PH`,`Manila`,`Southeast Asia`,`Asia`],[`Nepal`,`NP`,`Kathmandu`,`South Asia`,`Asia`],[`Bhutan`,`BT`,`Thimphu`,`South Asia`,`Asia`],[`Sri Lanka`,`LK`,`Sri Jayawardenepura Kotte`,`South Asia`,`Asia`],[`Australia`,`AU`,`Canberra`,`Oceania`,`Oceania`],[`New Zealand`,`NZ`,`Wellington`,`Oceania`,`Oceania`],[`Fiji`,`FJ`,`Suva`,`Oceania`,`Oceania`],[`Samoa`,`WS`,`Apia`,`Oceania`,`Oceania`]].map(([e,t,n,r,i],a)=>({id:a+1,itemName:e,name:t,flag:t,capital:n,region:r,category:i,disabled:e===`Costa Rica`})),cg=[{id:42,itemName:`Canada`,name:`CA`,flag:`CA`,capital:`Ottawa`,region:`North America`},{id:43,itemName:`Brazil`,name:`BR`,flag:`BR`,capital:`Brasilia`,region:`South America`},{id:44,itemName:`Mexico`,name:`MX`,flag:`MX`,capital:`Mexico City`,region:`North America`},{id:45,itemName:`Argentina`,name:`AR`,flag:`AR`,capital:`Buenos Aires`,region:`South America`}],lg=[{id:1,itemName:`Revenue`,detail:`Finance metric`,color:`#2563eb`},{id:2,itemName:`Retention`,detail:`Customer metric`,color:`#0f766e`},{id:3,itemName:`Risk`,detail:`Operations metric`,color:`#b45309`},{id:4,itemName:`Quality`,detail:`Product metric`,color:`#7c3aed`},{id:5,itemName:`Support`,detail:`Service metric`,color:`#dc2626`}],ug=[{id:1,itemName:`Node.js`,category:`Backend`},{id:2,itemName:`Vue`,category:`Framework`},{id:3,itemName:`JavaScript`,category:`Language`},{id:4,itemName:`TypeScript`,category:`Language`},{id:5,itemName:`HTML`,category:`Web`},{id:6,itemName:`CSS`,category:`Web`}],dg=Array.from({length:140},(e,t)=>({id:t+1,itemName:`Person ${t+1}`,name:`Person ${t+1}`,region:[`Brazilian`,`Canadian`,`Mexican`,`Colombian`][t%4]}));function fg(e){return e.charAt(0).toUpperCase()+e.slice(1)}function pg(e){return e&&typeof e==`object`&&e.itemName?String(e.itemName):JSON.stringify(e)}function mg(e){return e?`country-flag fi fi-${String(e).toLowerCase()}`:`country-flag`}function hg(e){let t=e||`basic`;return`${ig}?file=${encodeURIComponent(`src/examples/${t}/${t}.component.vue`)}&startScript=start&initialpath=%2F${t}`}function gg(e){return typeof e==`string`?`'`+e.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)+`'`:typeof e==`number`||typeof e==`boolean`?String(e):Array.isArray(e)?`[`+e.map(gg).join(`, `)+`]`:e&&typeof e==`object`?_g(e):`null`}function _g(e){return`{ `+Object.keys(e).map(t=>`${t}: ${gg(e[t])}`).join(`, `)+` }`}function vg(e){return e.length?`[
`+e.map(e=>`  `+_g(e)).join(`,
`)+`
]`:`[]`}function yg(e){let t=Object.entries(e).filter(([,e])=>e!==void 0);return t.length?`{ `+t.map(([e,t])=>`${e}: ${gg(t)}`).join(`, `)+` }`:`{}`}function bg(e,t,n={}){return Object.assign({singleSelection:!1,text:t,selectAllText:`Select all`,enableCheckAll:!0,enableSearchFilter:!0,searchPlaceholderText:`Search`,badgeShowLimit:2,maxHeight:220,showCheckbox:!0,noDataLabel:`No data`,clearAll:!0,primaryKey:`id`,labelKey:`itemName`,skin:e},n)}function Q(e,t,n,r,i,a,o,s,c,l,u={},d={}){return Object.assign({id:`${e}-${n}`,number:t,title:r,dataName:i,data:a,selectedName:o,settingsName:s,eventPrefix:`${e} ${n}`,initialSelected:c,settings:bg(e,l,u),optionsText:yg(u)},d)}function xg(e){return[Q(e,`01`,`basic`,`Basic multi`,`countries`,Z,`${e}BasicSelected`,`${e}BasicSettings`,Z.slice(0,3),`Basic multi`,{badgeShowLimit:3,enableSearchFilter:!1}),Q(e,`02`,`search`,`Search + select all`,`countries`,Z,`${e}SearchSelected`,`${e}SearchSettings`,Z.slice(1,3),`${fg(e)} searchable`,{badgeShowLimit:3}),Q(e,`03`,`single`,`Single without checkbox`,`countries`,Z,`${e}SingleSelected`,`${e}SingleSettings`,Z.slice(0,1),`${fg(e)} single`,{singleSelection:!0,showCheckbox:!1,enableCheckAll:!1}),Q(e,`04`,`no-checkbox`,`Multi without checkbox`,`countries`,Z,`${e}NoCheckboxSelected`,`${e}NoCheckboxSettings`,Z.slice(2,4),`${fg(e)} no checkbox`,{showCheckbox:!1}),Q(e,`05`,`limit`,`Selection limit`,`countries`,Z,`${e}LimitSelected`,`${e}LimitSettings`,Z.slice(0,2),`${fg(e)} limit two`,{limitSelection:2,badgeShowLimit:2}),Q(e,`06`,`badge`,`Badge overflow`,`countries`,Z,`${e}BadgeSelected`,`${e}BadgeSettings`,Z.slice(0,5),`${fg(e)} badge limit`,{badgeShowLimit:2}),Q(e,`07`,`grouped`,`Grouped by region`,`countries`,Z,`${e}GroupedSelected`,`${e}GroupedSettings`,[Z[0],Z[4]],`${fg(e)} grouped`,{groupBy:`region`,selectGroup:!0}),Q(e,`08`,`disabled`,`Disabled with value`,`countries`,Z,`${e}DisabledSelected`,`${e}DisabledSettings`,Z.slice(0,1),`${fg(e)} disabled`,{disabled:!0}),Q(e,`09`,`empty`,`Empty data`,`emptyItems`,[],`${e}EmptySelected`,`${e}EmptySettings`,[],`${fg(e)} empty`,{noDataLabel:`No options available`}),Q(e,`10`,`scroll`,`Long list with scroll`,`largeList`,dg,`${e}ScrollSelected`,`${e}ScrollSettings`,dg.slice(0,3),`${fg(e)} scroll`,{maxHeight:140,badgeShowLimit:3}),Q(e,`11`,`lazy`,`Local lazy loading`,`lazyPeople`,dg.slice(0,30),`${e}LazySelected`,`${e}LazySettings`,[],`${fg(e)} lazy`,{lazyLoading:!0,maxHeight:140,badgeShowLimit:3},{note:`Adds 20 rows when the list reaches the end.`}),Q(e,`12`,`template`,`Item + chip render functions`,`templateItems`,lg,`${e}TemplateSelected`,`${e}TemplateSettings`,lg.slice(0,2),`${fg(e)} render`,{badgeShowLimit:3},{template:!0})]}function Sg(e){let t=e.template?[`  :render-item="renderOption"`,`  :render-badge="renderBadge"`]:[],n=e.note?[`  @scroll-to-end="appendNextChunk"`]:[];return[`<vue-multiselect-dropdown`,`  :data="${e.dataName}"`,`  v-model="${e.selectedName}"`,`  :settings="${e.settingsName}"`,`  @select="record('${e.eventPrefix} select', $event)"`,`  @de-select="record('${e.eventPrefix} deselect', $event)"`,...n,...t,`/>`].join(`
`)}function Cg(e,t){return[`${e.selectedName}: ${vg(t)},`,``,`${e.settingsName}: makeSettings('${e.settings.skin}', '${e.settings.text}', ${e.optionsText}),`,``,`methods: {`,`  record(type, value) {`,"    events.unshift(`${type}: ${itemLabel(value)}`);",`  }`,`}`].join(`
`)}function wg(e,t,n){return JSON.stringify({data:e.dataName,selected:t,settings:n},null,2)}var Tg={components:{VueMultiselectDropdown:Bh},props:{test:{type:Object,required:!0}},data(){return{selected:this.test.initialSelected.slice(),localData:this.test.data.slice(),disabled:!1}},computed:{actualSettings(){return Object.assign({},this.test.settings,this.test.allowDisabledToggle?{disabled:this.disabled}:{})},templateSnippet(){return Sg(this.test)},jsSnippet(){return Cg(this.test,this.selected)},jsonSnippet(){return wg(this.test,this.selected,this.actualSettings)},displayTitle(){return this.test.hideTitle!==!0},directRouteSlug(){let e=String(this.test.id).replace(/^(classic|material|dark|custom|brand)-/,``);return{basic:`basic`,search:`search-filter`,single:`single-selection`,"no-checkbox":`styling`,limit:`limit-selection`,badge:`limit-badges`,grouped:`group-by`,disabled:`disabled`,empty:`styling`,scroll:`virtual-scrolling`,lazy:`lazy-loading-api`,template:`templating`,dialog:`dialog`,"body-overlay-auto":`body-overlay-auto`}[e]||e},stackblitzRouteUrl(){return hg(this.directRouteSlug)},validationMessage(){return this.test.formValidation?this.selected.length?`Valid selection.`:`Select at least one skill.`:``}},methods:{itemLabel:pg,flagClass:mg,updateSelection(e){this.selected=e,this.record(this.test.eventPrefix+` change`,e)},record(e,t){let n=Array.isArray(t)?`${t.length} items`:pg(t);this.$emit(`record`,`${e}: ${n}`)},appendNextChunk(e){if(!this.test.note)return;let t=dg.slice(this.localData.length,this.localData.length+20);t.length?(this.localData=this.localData.concat(t),this.record(this.test.eventPrefix+` lazy`,`${t.length} rows`)):this.record(this.test.eventPrefix+` lazy`,`no more rows`)},addFilterItem(e,t){this.localData=this.localData.concat(t),this.record(this.test.eventPrefix+` created`,e)},renderOption(e,t,n){return n(`span`,{class:`option-row`},[e.flag?n(`span`,{class:mg(e.flag),attrs:{"aria-hidden":`true`}}):null,n(`span`,{class:`swatch`,style:{backgroundColor:e.color||`#2563eb`}}),n(`span`,[n(`strong`,[t.label]),n(`small`,[e.detail||e.capital||e.region||``])])])},renderBadge(e,t,n){return n(`span`,{class:`swatch-chip`},[e.flag?n(`span`,{class:mg(e.flag),attrs:{"aria-hidden":`true`}}):null,n(`span`,{class:`swatch`,style:{backgroundColor:e.color||`#2563eb`}}),t.label])},openDropdown(){this.$refs.dropdown.openDropdown()},closeDropdown(){this.$refs.dropdown.closeDropdown()},focusSearch(){this.$refs.dropdown.focusSearch()},selectAll(){this.$refs.dropdown.selectAll()},clearSelection(){this.$refs.dropdown.clearSelection()}},template:`
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
  `},Eg=xg(`classic`),Dg=xg(`material`);function $(e,t,n={}){let r=n.skin||`classic`,i=n.data||Z,a=n.selected||i.slice(0,2);return Q(r,n.number||`01`,e,t,n.dataName||`countries`,i,n.selectedName||e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())+`Selected`,n.settingsName||e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())+`Settings`,a,n.text||t,n.settings||{},n.extra||{})}var Og=[{slug:`basic`,title:`Basic usage`,eyebrow:`Basic`,description:`Classic multi-select with chips, clear all, and selected counters.`,tests:[Eg[0]]},{slug:`keyboard-contract`,title:`Keyboard contract`,eyebrow:`Accessibility`,description:`Keyboard behavior is explicit: Space, Tab, arrows, Escape, and Backspace/Delete stay predictable.`,tests:[$(`keyboard-contract`,`Keyboard behavior switches`,{selected:Z.slice(0,3),settings:{enableSearchFilter:!0,badgeShowLimit:3,keyboard:{space:!0,spaceOptionAction:`toggle`,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0}}})]},{slug:`aria-state`,title:`ARIA state audit`,eyebrow:`Accessibility`,description:`Option rows expose matching aria-selected and aria-checked states for multiselect announcement.`,tests:[$(`aria-state`,`ARIA selected + checked state`,{selected:Z.slice(0,2),settings:{enableSearchFilter:!0,badgeShowLimit:3}})]},{slug:`headless-aria`,title:`Headless + ARIA`,eyebrow:`Headless`,description:`Use the renderless composable for fully custom Vue HTML while preserving Stackline ARIA prop bags.`,kind:`headless`},{slug:`state-hook`,title:`State hook`,eyebrow:`Composable`,description:`Vue uses a composable state layer for controlled selection, filtering, grouping, and event callbacks.`,tests:[$(`state-hook`,`useMultiSelectState equivalent`,{selected:Z.slice(1,4),settings:{enableSearchFilter:!0,groupBy:`region`,badgeShowLimit:3}})]},{slug:`slots-api`,title:`Slots API`,eyebrow:`Customization`,description:`Scoped slots customize options, badges, and menu footer while the package keeps behavior and ARIA.`,tests:[$(`slots-api`,`Scoped slots`,{selected:Z.slice(0,3),settings:{enableSearchFilter:!0,badgeShowLimit:3},extra:{scopedSlots:!0}})]},{slug:`type-safe-factory`,title:`Type-safe factory`,eyebrow:`Advanced API`,description:`The package exports helper APIs for typed settings and renderless usage in Vue projects.`,tests:[$(`type-safe-factory`,`defineSettings helper shape`,{selected:Z.slice(2,4),settings:{enableSearchFilter:!0,searchBy:[`itemName`,`capital`],badgeShowLimit:3},extra:{note:`Use defineSettings / createVueMultiselectDropdown in typed Vue applications.`}})]},{slug:`async-object-preservation`,title:`Async object preservation`,eyebrow:`Async data`,description:`Selected object values remain stable when later data pages or async requests refresh options.`,tests:[$(`async-object-preservation`,`Async object preservation`,{selected:Z.slice(0,3),settings:{enableSearchFilter:!0,lazyLoading:!0,badgeShowLimit:3},extra:{note:`Selected objects are preserved by primaryKey while data changes.`}})]},{slug:`single-selection`,title:`Single selection`,eyebrow:`Selection`,description:`Single selection mode without checkboxes.`,tests:[Eg[2]]},{slug:`search-filter`,title:`Search filter`,eyebrow:`Search`,description:`Client-side search over object labels.`,tests:[Eg[1]]},{slug:`custom-search-api`,title:`Custom search from API`,eyebrow:`Search`,description:`Search flow prepared for remote APIs and late results.`,tests:[$(`custom-search-api`,`Custom search from API`,{selected:Z.slice(0,1),settings:{enableSearchFilter:!0,badgeShowLimit:3},extra:{note:`Use search events and async data replacement for remote API search.`}})]},{slug:`search-filter-by-property`,title:`Search filter by property`,eyebrow:`Search`,description:`Search by multiple object properties instead of a single label.`,tests:[$(`search-filter-by-property`,`Search by itemName and capital`,{selected:Z.slice(4,6),settings:{enableSearchFilter:!0,searchBy:[`itemName`,`capital`,`region`],badgeShowLimit:3}})]},{slug:`search-add-new-item`,title:`Search and Add New Item`,eyebrow:`Creation`,description:`Let users create an option from filter text.`,tests:[$(`search-add-new-item`,`Search and add item`,{data:Z.slice(0,4),selected:Z.slice(0,2),settings:{addNewItemOnFilter:!0,addNewButtonText:`Add country`,badgeShowLimit:3}})]},{slug:`group-by`,title:`Group By`,eyebrow:`Grouping`,description:`Group object data by any configured field.`,tests:[Eg[6]]},{slug:`templating`,title:`Templating`,eyebrow:`Rendering`,description:`Custom option and chip render functions for Vue render-function users.`,tests:[Eg[11]]},{slug:`template-driven-forms`,title:`Template-style forms`,eyebrow:`Forms`,description:`Use v-model in a template-style form and derive validation from selected objects.`,tests:[$(`template-driven-forms`,`Template-style form validation`,{dataName:`skills`,data:ug,selected:[],settings:{groupBy:`category`,badgeShowLimit:3},extra:{formValidation:!0}})]},{slug:`reactive-forms`,title:`Reactive forms`,eyebrow:`Forms`,description:`Keep selected items in reactive Vue state and submit object values.`,tests:[$(`reactive-forms`,`Reactive-style form state`,{dataName:`skills`,data:ug,selected:ug.slice(0,2),settings:{groupBy:`category`,badgeShowLimit:3},extra:{formValidation:!0}})]},{slug:`virtual-scrolling`,title:`Virtual Scrolling`,eyebrow:`Large data`,description:`Long option lists keep the panel scrollable and keyboard accessible.`,tests:[Eg[9]]},{slug:`lazy-loading-api`,title:`Lazy Loading from API`,eyebrow:`Large data`,description:`Append more object rows when the list reaches the end.`,tests:[Eg[10]]},{slug:`remote-data`,title:`Data from remote API`,eyebrow:`Remote data`,description:`Replace option data from remote sources while selected object values stay stable.`,tests:[$(`remote-data`,`Remote API data refresh`,{selected:Z.slice(0,2),settings:{enableSearchFilter:!0,badgeShowLimit:3},extra:{note:`Refresh data by replacing the data array; selected values are preserved by primaryKey.`}})]},{slug:`list-loop`,title:`Using in list for loop`,eyebrow:`Composition`,description:`Multiple dropdowns can be rendered from object arrays without shared state collisions.`,tests:[$(`list-loop-a`,`Loop row 1`,{selected:Z.slice(0,1),settings:{badgeShowLimit:2}}),$(`list-loop-b`,`Loop row 2`,{selected:Z.slice(2,4),settings:{badgeShowLimit:2}})]},{slug:`dialog`,title:`Using inside dialog`,eyebrow:`Overlay`,description:`appendToBody escapes overflow containers and dialog clipping.`,tests:[Q(`material`,``,`dialog`,`Clipping-safe dropdown with appendToBody`,`overlayCountries`,cg,`dialogSelected`,`dialogSettings`,cg.slice(0,1),`Dialog dropdown`,{appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`,maxHeight:180,badgeShowLimit:2},{overflow:!0})]},{slug:`multiple-dropdowns`,title:`Multiple dropdowns`,eyebrow:`Composition`,description:`Multiple independent dropdown instances keep separate state and events.`,tests:[$(`multiple-dropdowns-a`,`Countries dropdown`,{selected:Z.slice(0,2),settings:{badgeShowLimit:2}}),$(`multiple-dropdowns-b`,`Skills dropdown`,{dataName:`skills`,data:ug,selected:ug.slice(1,3),settings:{groupBy:`category`,badgeShowLimit:2}})]},{slug:`dynamic-data`,title:`Load dynamic data`,eyebrow:`Dynamic data`,description:`Data can be swapped or extended without losing selected object identity.`,tests:[$(`dynamic-data`,`Dynamic data list`,{selected:Z.slice(0,2),settings:{enableSearchFilter:!0,badgeShowLimit:3},extra:{note:`The data prop is reactive and can be replaced by a loaded array.`}})]},{slug:`methods`,title:`Methods`,eyebrow:`Methods`,description:`Instance methods expose open, close, focusSearch, selectAll, and clearSelection.`,tests:[$(`methods`,`Instance methods`,{selected:Z.slice(0,2),settings:{badgeShowLimit:3},extra:{methods:!0}})]},{slug:`events`,title:`Events`,eyebrow:`Events`,description:`Selection, deselection, select-all, deselect-all, open, close, lazy, and create events are visible in the event log.`,tests:[$(`events`,`Event callbacks`,{selected:Z.slice(0,2),settings:{enableSearchFilter:!0,badgeShowLimit:3}})]},{slug:`disabled`,title:`Disabled state`,eyebrow:`State`,description:`Disable the dropdown while preserving the selected values.`,tests:[Eg[7]]},{slug:`limit-selection`,title:`Limit selection`,eyebrow:`Limits`,description:`Prevent selecting more than the configured number of items.`,tests:[Eg[4]]},{slug:`limit-badges`,title:`Limit badges`,eyebrow:`Limits`,description:`Overflow counter appears only when selected items are hidden.`,tests:[Eg[5]]},{slug:`custom-placeholder`,title:`Custom placeholder`,eyebrow:`Display`,description:`Placeholder text stays left aligned and vertically centered in the trigger.`,tests:[$(`custom-placeholder`,`Custom placeholder`,{selected:[],settings:{text:`Choose countries`,enableSearchFilter:!0,badgeShowLimit:3}})]},{slug:`styling`,title:`Styling`,eyebrow:`Skins`,description:`Classic, material, dark, custom, and brand skins are settings-only.`,tests:[$(`styling-classic`,`Classic skin`,{selected:Z.slice(0,2),settings:{badgeShowLimit:2}}),$(`styling-material`,`Material skin`,{skin:`material`,selected:Z.slice(2,4),settings:{badgeShowLimit:2}}),$(`styling-dark`,`Dark skin`,{skin:`dark`,selected:Z.slice(4,6),settings:{badgeShowLimit:2}}),$(`styling-brand`,`Brand skin`,{skin:`brand`,selected:Z.slice(1,4),settings:{badgeShowLimit:3}})]},{slug:`body-overlay-auto`,title:`Body Overlay Auto`,eyebrow:`Overlay`,description:`The dropdown can open inside a clipped surface while the panel is appended to body.`,tests:[Q(`material`,`01`,`body-overlay-auto`,`Body overlay auto positioning`,`overlayCountries`,cg,`bodyOverlaySelected`,`bodyOverlaySettings`,cg.slice(0,1),`Body overlay`,{appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`,maxHeight:180,badgeShowLimit:2},{overflow:!0})]}],kg=Object.assign({},Og.find(e=>e.slug===`body-overlay-auto`).tests[0],{number:`22`}),Ag=[Q(`classic`,`13`,`all-visible`,`All selected badges visible`,`countries`,Z,`allVisibleSelected`,`allVisibleSettings`,Z.slice(0,4),`All selected visible`,{badgeShowLimit:10},{note:`The counter disappears when every selected item is visible.`}),Q(`classic`,`14`,`search-by-fields`,`Search by specific fields`,`countries`,Z,`searchBySelected`,`searchBySettings`,Z.slice(2,5),`Search by country or capital`,{searchBy:[`itemName`,`capital`],searchPlaceholderText:`Search country or capital`,badgeShowLimit:3}),Q(`classic`,`15`,`add-filter-item`,`Search and add item`,`createdCountries`,Z,`createdSelected`,`createdSettings`,Z.slice(0,2),`Add country`,{addNewItemOnFilter:!0,addNewButtonText:`Add country`,badgeShowLimit:3},{note:`Create a new option from filter text and keep object values stable.`}),Q(`classic`,`16`,`disabled-toggle`,`Disabled state toggle`,`countries`,Z,`disabledSelected`,`disabledSettings`,Z.slice(0,3),`Toggle disabled`,{badgeShowLimit:3},{allowDisabledToggle:!0}),Q(`classic`,`17`,`combobox-contract`,`Combobox keyboard contract`,`countries`,Z,`contractSelected`,`contractSettings`,Z.slice(0,3),`Keyboard contract`,{badgeShowLimit:3},{note:`Type a query: Backspace edits text. Clear the query: Backspace does not remove selected values by default. Focus a badge remove button and press Backspace/Delete to remove it. Escape closes without clearing selected values.`}),Q(`classic`,`18`,`aria-state`,`ARIA selected + checked state`,`countries`,Z,`ariaStateSelected`,`ariaStateSettings`,Z.slice(0,2),`ARIA state audit`,{badgeShowLimit:3,maxHeight:180},{note:`Open and focus an option: every option exposes role="option", aria-selected, and aria-checked with matching values.`}),Q(`classic`,`19`,`form-validation`,`Controlled form validation`,`skills`,ug,`skillSelected`,`skillSettings`,[],`Select skills`,{groupBy:`category`,badgeShowLimit:3},{formValidation:!0}),Q(`classic`,`20`,`ref-methods`,`Ref methods`,`countries`,Z,`methodSelected`,`methodSettings`,Z.slice(0,2),`Ref controlled`,{badgeShowLimit:3},{methods:!0}),Q(`classic`,`21`,`slots-api`,`Slots API custom HTML`,`countries`,Z,`slotsSelected`,`slotsSettings`,Z.slice(0,4),`Custom slot shell`,{enableSearchFilter:!0,groupBy:`category`,selectGroup:!0,badgeShowLimit:2,maxHeight:220},{scopedSlots:!0,note:`Custom option, badge, and menu footer slots. The package still owns ARIA, focus, and keyboard props.`}),kg],jg=[{slug:`all-visible-counter`,target:`limit-badges`},{slug:`selection-limit`,target:`limit-selection`},{slug:`disabled-state`,target:`disabled`},{slug:`using-in-forms`,target:`template-driven-forms`},{slug:`lazy-loading`,target:`lazy-loading-api`},{slug:`using-inside-dialog`,target:`dialog`}],Mg=[{slug:`classic`,title:`Basic usage`,description:`Essential setup with the default classic skin`},{slug:`coverage`,title:`3.1.x coverage`,description:`Combobox, async, headless, and composable state`},{slug:`skin-switcher`,title:`Skin switcher`,description:`Settings-only skin changes`},{slug:`dialog`,title:`Dialog overlay`,description:`appendToBody and overflow clipping`},{slug:`material`,title:`Material skin`,description:`Modernized visual and behavior tests`},{slug:`extra`,title:`Extra coverage`,description:`Limits, forms, methods, and edge cases`},{slug:`headless-aria`,title:`Headless + ARIA`,description:`100% custom HTML with Stackline ARIA getters`}],Ng=[{slug:`classic`,eyebrow:`Start here`,title:`Basic usage`,sectionClass:``,tests:Eg},{slug:`coverage`,featureLab:!0},{slug:`skin-switcher`,skinSwitcher:!0},{slug:`dialog`,eyebrow:`Dialog support`,title:`Dropdown inside overflow containers`,sectionClass:`overlay-section`,tests:Og.find(e=>e.slug===`dialog`).tests},{slug:`material`,eyebrow:`Skin`,title:`Material`,sectionClass:`material-section`,tests:Dg},{slug:`extra`,eyebrow:`Vue extra coverage`,title:`Additional live tests`,sectionClass:`extra-section`,tests:Ag},{slug:`headless-aria`,eyebrow:`Full control example`,title:`Headless HTML + ARIA`,description:`The dropdown below owns its markup and CSS. Stackline supplies state, selection rules, grouping, search, callbacks, keyboard behavior, and ARIA attributes through prop getters.`,sectionClass:`headless-route-section`,tests:[],headlessOnly:!0}],Pg=[`Controlled v-model`,`Search`,`Grouping`,`Scoped slots`,`Custom renderers`,`Lazy loading`,`Instance methods`,`Headless composable`,`State composable`,`Accessibility-focused and keyboard/ARIA tested`,`appendToBody`,`Centered placeholder line`,`Classic and modern skins`],Fg=[{kicker:`Component`,title:`<VueMultiselectDropdown />`,copy:`Use v-model with object arrays while keeping the Stackline settings contract predictable.`},{kicker:`Settings`,title:`settings.skin`,copy:`Use settings.skin for classic, material, dark, custom, and brand visual modes. The theme alias stays compatibility-only.`},{kicker:`Events`,title:`@select and @de-select`,copy:`Vue emits selection changes, select-all, clear-all, lazy scrolling, custom item creation, open, and close events.`},{kicker:`Rendering`,title:`Scoped slots and render functions`,copy:`Customize option rows, badges, menu footer, and inner content while preserving package-owned behavior.`},{kicker:`Headless`,title:`useMultiSelectDropdown`,copy:`Use prop getters when the app needs to own every tag, class, wrapper, and layout decision.`},{kicker:`State`,title:`useMultiSelectState`,copy:`Use the low-level state composable for selection, filtering, grouping, badge limits, and callbacks.`},{kicker:`Accessibility`,title:`Keyboard and ARIA contract`,copy:`The trigger, listbox, options, selected chips, and clear action expose keyboard flow, aria-selected, and aria-checked.`},{kicker:`Dialogs`,title:`appendToBody / tagToBody`,copy:`Set appendToBody inside modals, drawers, and overflow containers so the list escapes clipping contexts.`}],Ig=`npm install @stackline/vue-multiselect-dropdown@${ng} --save-exact`,Lg=[`import { ref } from 'vue';`,`import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';`,``,`const countries = [`,`  { id: 1, itemName: 'Brazil' },`,`  { id: 2, itemName: 'Canada' }`,`];`].join(`
`),Rg=[`const selectedCountries = ref([]);`,``,`const settings = {`,`  text: 'Select countries',`,`  primaryKey: 'id',`,`  labelKey: 'itemName',`,`  enableSearchFilter: true,`,`  badgeShowLimit: 3,`,`  clearAll: true,`,`  skin: 'classic'`,`};`].join(`
`),zg=[`<VueMultiselectDropdown`,`  :data="countries"`,`  v-model="selectedCountries"`,`  :settings="settings"`,`/>`].join(`
`);function Bg(){return window.location.pathname.indexOf(`/live/`)>=0}function Vg(){let e=window.location.hash.replace(/^#\/?/,``).trim();if(e)return e;let t=window.location.pathname.replace(/^\/+|\/+$/g,``).split(`/`).filter(Boolean),n=t[t.length-1]||``;return Bg()?n&&n!==`live`?n:`classic`:n&&n!==`vue-3`&&n!==`multiselect`?n:`basic`}function Hg(e){let t=jg.find(t=>t.slug===e),n=t?t.target:e;return Og.find(e=>e.slug===n)||Og[0]}var Ug={emits:[`record`],setup(e,{emit:t}){let n=F(Z.slice(0,3)),r=tg({data:Z,selectedItems:n,onChange(e){n.value=e,t(`record`,`headless aria change: ${e.length} selected`)},settings:bg(`classic`,`Build your own picker`,{enableSearchFilter:!0,searchPlaceholderText:`Search country or capital`,groupBy:`region`,selectGroup:!0,badgeShowLimit:2,clearAll:!0,ariaLabel:`Custom country multiselect`,listboxAriaLabel:`Custom country options`,searchAriaLabel:`Search custom country options`,clearAllAriaLabel:`Clear custom country selection`}),onSelect(e){t(`record`,`headless aria select: ${pg(e)}`)},onDeSelect(e){t(`record`,`headless aria deselect: ${pg(e)}`)},onSelectAll(e){t(`record`,`headless aria selectAll: ${e.length} items`)},onDeSelectAll(e){t(`record`,`headless aria clearAll: ${e.length} items`)}}),i=F(Z.slice(0,3)),a=tg({data:Z,selectedItems:i,onChange(e){i.value=e,t(`record`,`headless flag change: ${e.length} selected`)},settings:bg(`classic`,`Choose countries`,{enableSearchFilter:!0,searchPlaceholderText:`Search country`,groupBy:`region`,selectGroup:!0,badgeShowLimit:3,clearAll:!0,ariaLabel:`Headless flag country picker`})}),o=B(()=>n.value.length?`${n.value.length} selected`:`No selected countries`),s=B(()=>JSON.stringify({selectedItems:i.value,settings:a.settings.value},null,2)),c=[`const selectedItems = ref(countries.slice(0, 3));`,``,`const dropdown = useMultiSelectDropdown({`,`  data: countries,`,`  selectedItems,`,`  onChange: (items) => { selectedItems.value = items; },`,`  settings: {`,`    text: 'Build your own picker',`,`    enableSearchFilter: true,`,`    searchPlaceholderText: 'Search country or capital',`,`    groupBy: 'region',`,`    selectGroup: true,`,`    badgeShowLimit: 2,`,`    primaryKey: 'id',`,`    labelKey: 'itemName',`,`    clearAll: true,`,`    ariaLabel: 'Custom country multiselect',`,`    listboxAriaLabel: 'Custom country options'`,`  }`,`});`].join(`
`),l=`<section v-bind="dropdown.getRootProps({ class: 'country-shell' })">,  <button v-bind="dropdown.getTriggerProps({ class: 'country-trigger' })">,    <span>{{ label }}</span>,    <strong>{{ isOpen ? "Expanded" : "Collapsed" }}</strong>,  </button>,,  <div class="country-selected" aria-live="polite">,    <span v-for="item in visibleBadges" :key="getItemKey(item)">,      {{ getItemLabel(item) }},      <button v-bind="dropdown.getRemoveButtonProps(item)">Remove</button>,    </span>,    <b v-if="hiddenBadgeCount">+{{ hiddenBadgeCount }}</b>,  </div>,,  <div v-if="isOpen" class="country-panel">,    <input v-bind="dropdown.getSearchInputProps({ class: 'country-search' })" />,    <div v-bind="dropdown.getListboxProps({ class: 'country-listbox' })">,      <section v-for="group in groups" :key="group.name" role="group">,        <header>{{ group.name }}</header>,        <div v-for="option in group.items" :key="option.key",             v-bind="dropdown.getOptionProps(option)">,          <strong>{{ option.label }}</strong>,        </div>,      </section>,    </div>,  </div>,</section>`.split(`,`).join(`
`),u=[`Prop getters provide the accessibility contract:`,``,`getTriggerProps()`,`- role="combobox"`,`- aria-expanded`,`- aria-controls`,`- aria-activedescendant`,``,`getListboxProps()`,`- role="listbox"`,`- aria-multiselectable`,`- stable id`,``,`getOptionProps(option)`,`- role="option"`,`- aria-selected`,`- aria-checked`,`- keyboard and focus handlers`,``,`You own the HTML. Stackline owns the state, ARIA, keyboard flow, grouping, search, limits, and callbacks.`].join(`
`),d=[`<div class="flag-picker" v-bind="flagDropdown.getRootProps()">`,`  <div class="flag-picker-header">`,`    <span>Custom HTML, custom CSS, Stackline state</span>`,`    <button v-bind="flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })">Clear</button>`,`  </div>`,``,`  <button v-bind="flagDropdown.getTriggerProps({ class: 'flag-trigger' })">`,`    <span>{{ flagLabel }}</span>`,`    <strong>{{ flagIsOpen ? "Close" : "Open" }}</strong>`,`  </button>`,``,`  <div class="flag-chip-list">`,`    <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">`,`      <span :class="flagClass(item.flag)" aria-hidden="true"></span>`,`      {{ flagDropdown.getItemLabel(item) }}`,`      <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>`,`    </span>`,`  </div>`,``,`  <div v-if="flagIsOpen" v-bind="flagDropdown.getListboxProps({ class: 'flag-panel' })">`,`    <input v-bind="flagDropdown.getSearchInputProps({ class: 'flag-search' })" />`,`    <div v-for="option in flagOptions.slice(0, 24)" :key="option.key"`,`         v-bind="flagDropdown.getOptionProps(option, { class: option.selected ? 'flag-option selected' : 'flag-option' })">`,`      <span :class="flagClass(option.item.flag)" aria-hidden="true"></span>`,`      <span><strong>{{ option.label }}</strong><small>{{ option.item.capital }} - {{ option.item.region }}</small></span>`,`      <input type="checkbox" :checked="option.selected" readonly />`,`    </div>`,`  </div>`,`</div>`].join(`
`),f=[`import { ref } from 'vue';`,`import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';`,`import 'flag-icons/css/flag-icons.min.css';`,``,`const selectedItems = ref(countries.slice(0, 3));`,`const dropdown = useMultiSelectDropdown({`,`  data: countries,`,`  selectedItems,`,`  onChange: (items) => { selectedItems.value = items; },`,`  settings: {`,`    text: 'Choose countries',`,`    enableSearchFilter: true,`,`    searchPlaceholderText: 'Search country',`,`    groupBy: 'region',`,`    selectGroup: true,`,`    badgeShowLimit: 3,`,`    primaryKey: 'id',`,`    labelKey: 'itemName',`,`    clearAll: true`,`  }`,`});`].join(`
`);return{dropdown:r,selectedItems:n,selectedSummary:o,visibleBadges:r.visibleBadges,hiddenBadgeCount:r.hiddenBadgeCount,visibleOptions:r.visibleOptions,groups:r.groups,label:r.label,isOpen:r.isOpen,listboxId:r.listboxId,activeDescendantId:r.activeDescendantId,allFilteredSelected:r.allFilteredSelected,getItemKey:r.getItemKey,getItemLabel:r.getItemLabel,flagDropdown:a,flagSelectedItems:i,flagLabel:a.label,flagIsOpen:a.isOpen,flagOptions:a.visibleOptions,headlessAriaHookCode:c,headlessAriaTemplateCode:l,headlessAriaContractCode:u,flagTemplateCode:d,flagJsCode:f,flagJsonSnippet:s,flagClass:mg}},template:`
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
  `},Wg={emits:[`record`],setup(e,{emit:t}){let n=F(Z.slice(0,3)),r=tg({data:Z,selectedItems:n,onChange(e){n.value=e,t(`record`,`headless flag change: ${e.length} selected`)},settings:bg(`classic`,`Choose countries`,{enableSearchFilter:!0,searchPlaceholderText:`Search country`,groupBy:`region`,selectGroup:!0,badgeShowLimit:3,clearAll:!0,ariaLabel:`Headless flag country picker`})}),i=[`<div class="flag-picker" v-bind="flagDropdown.getRootProps()">`,`  <div class="flag-picker-header">`,`    <span>Custom HTML, custom CSS, Stackline state</span>`,`    <button v-bind="flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })">Clear</button>`,`  </div>`,``,`  <button v-bind="flagDropdown.getTriggerProps({ class: 'flag-trigger' })">`,`    <span>{{ flagLabel }}</span>`,`    <strong>{{ flagIsOpen ? "Close" : "Open" }}</strong>`,`  </button>`,``,`  <div class="flag-chip-list">`,`    <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">`,`      <span :class="flagClass(item.flag)" aria-hidden="true"></span>`,`      {{ flagDropdown.getItemLabel(item) }}`,`      <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>`,`    </span>`,`  </div>`,`</div>`].join(`
`),a=[`import { ref } from 'vue';`,`import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';`,`import 'flag-icons/css/flag-icons.min.css';`,``,`const selectedItems = ref(countries.slice(0, 3));`,`const dropdown = useMultiSelectDropdown({`,`  data: countries,`,`  selectedItems,`,`  onChange: (items) => { selectedItems.value = items; },`,`  settings: {`,`    text: 'Choose countries',`,`    enableSearchFilter: true,`,`    groupBy: 'region',`,`    selectGroup: true,`,`    badgeShowLimit: 3`,`  }`,`});`].join(`
`),o=B(()=>JSON.stringify({selectedItems:n.value,settings:r.settings.value},null,2));return{flagDropdown:r,flagSelectedItems:n,flagLabel:r.label,flagIsOpen:r.isOpen,flagOptions:r.visibleOptions,flagTemplateCode:i,flagJsCode:a,flagJsonSnippet:o,flagClass:mg}},template:`
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
  `},Gg=Au({components:{VueMultiselectDropdown:Bh,HeadlessCase:Ug,HeadlessFlagCase:Wg,SkinSwitcherCase:{components:{VueMultiselectDropdown:Bh},emits:[`record`],setup(e,{emit:t}){let n=F(`classic`),r=F(Z.slice(0,3)),i=B(()=>bg(n.value,`Basic multi`,{badgeShowLimit:3,enableSearchFilter:!1})),a=[`<vue-multiselect-dropdown`,`  :data="countries"`,`  v-model="skinSwitchSelected"`,`  :settings="skinSwitchSettings"`,`  @select="record('skin switch select', $event)"`,`  @de-select="record('skin switch deselect', $event)"`,`/>`].join(`
`),o=B(()=>[`const skin = ref('${n.value}');`,`const skinSwitchSelected = ref(countries.slice(0, 3));`,``,`const skinSwitchSettings = computed(() => makeSettings(skin.value, "Basic multi", {`,`  badgeShowLimit: 3,`,`  enableSearchFilter: false`,`}));`].join(`
`)),s=B(()=>JSON.stringify({selected:r.value,settings:i.value},null,2));function c(e){r.value=e,t(`record`,`skin switch change: ${e.length} selected`)}function l(e,n){t(`record`,`${e}: ${pg(n)}`)}return{countries:Z,skins:ag,skin:n,selected:r,settings:i,templateSnippet:a,jsSnippet:o,jsonSnippet:s,labelFor:fg,stackblitzUrl:hg,updateSelection:c,record:l}},template:`
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
  `},FeatureLab:{components:{VueMultiselectDropdown:Bh,HeadlessFlagCase:Wg},emits:[`record`],setup(e,{emit:t}){let n=F(null),r=F(Z),i=F(Z.slice(0,4)),a=F(Z.slice(1,3)),o=F(Z.slice(3,6)),s=F(0),c=F(`Focus a target, then press Space, Tab, arrows, Escape, Backspace, or Delete.`),l=F({space:!0,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0}),u=F(`toggle`),d=B(()=>Object.assign({},l.value,{spaceOptionAction:u.value})),f=B(()=>JSON.stringify(d.value)),p=B(()=>bg(`classic`,`3.1.5 contract test`,{badgeShowLimit:3,addNewItemOnFilter:!0,addNewButtonText:`Async add`,groupBy:`category`,selectGroup:!0,maxHeight:180,keyboard:d.value})),m=tg({data:Z,selectedItems:a,onChange(e){a.value=e,t(`record`,`headless hook change: ${e.length} selected`)},settings:bg(`classic`,`Headless countries`,{enableSearchFilter:!0,searchPlaceholderText:`Search 64 countries`,groupBy:`category`,selectGroup:!0,badgeShowLimit:2,clearAll:!0,ariaLabel:`Headless countries`})}),h=eg({data:Z,selectedItems:o,onChange(e){o.value=e,t(`record`,`state hook change: ${e.length} selected`)},settings:bg(`classic`,`State hook countries`,{enableSearchFilter:!0,badgeShowLimit:3,clearAll:!0})});function g(){let e=r.value[0]&&r.value[0].id===Z[0].id?Z.slice(10):Z;r.value=e,t(`record`,`3.1.5 data refresh: ${e.length} countries`)}function _(e){l.value=Object.assign({},l.value,{[e]:!l.value[e]})}async function v(e){let n=s.value+1;s.value=n,t(`record`,`3.1.5 async add start: ${n}: ${e}`),await new Promise(e=>window.setTimeout(e,n%2?650:120));let r={id:1e3+n,itemName:e,name:e.slice(0,2).toUpperCase(),capital:e,region:`Custom`,category:`Custom`};return t(`record`,`3.1.5 async add resolved: ${n}: ${e}`),r}function y(e){i.value=e,t(`record`,`3.1.5 contract change: ${e.length} selected`)}function b(e,t=0){or(()=>{if(e===`search`){let e=n.value?.querySelector(`.vmsd-search-input`);if(e){e.focus(),c.value=`Space in search is normal typing. Empty-query Backspace does not remove selected values by default.`;return}}else{let e=Array.from(n.value?.querySelectorAll(`[data-vmsd-option="true"]:not([aria-disabled="true"])`)||[]),t=e.find(e=>e.textContent&&e.textContent.includes(`Chile`))||e[0];if(t){t.focus(),c.value=u.value===`toggle-and-next`?`Space on an option toggles it and moves focus to the next enabled option.`:`Space on an option toggles only that option and keeps focus there. Arrows move to another option.`;return}}t<8&&window.setTimeout(()=>b(e,t+1),40)})}function x(){let e=n.value?.querySelector(`.vmsd-trigger`);e&&e.getAttribute(`aria-expanded`)!==`true`&&e.click()}function S(e){let t=n.value?.querySelector(`.vmsd-root`);if(e===`trigger`){t?.querySelector(`.vmsd-trigger`)?.focus(),c.value=`Space on trigger toggles the dropdown. It does not select an item.`;return}if(e===`clear`){t?.querySelector(`.vmsd-clear`)?.focus(),c.value=`Space on clear-all activates that button and clears selected values.`;return}if(e===`badge`){t?.querySelector(`.vmsd-badge-remove`)?.focus(),c.value=`Backspace or Delete on a focused badge remove button removes that selected badge intentionally.`;return}x(),b(e)}return{countries:Z,contractCard:n,contractData:r,contractSelected:i,contractSettings:p,keyboardFeatures:og,keyboardSettings:l,keyboardConfig:d,keyboardConfigPreview:f,keyboardScenario:c,spaceOptionActions:sg,spaceOptionAction:u,headless:m,headlessLabel:m.label,headlessIsOpen:m.isOpen,headlessVisibleBadges:m.visibleBadges,headlessHiddenBadgeCount:m.hiddenBadgeCount,headlessVisibleOptions:m.visibleOptions,state:h,stateSelectedItems:h.selectedItems,stateFilter:h.filter,stateFilteredItems:h.filteredItems,stateSelectableItems:h.selectableItems,stateVisibleBadges:h.visibleBadges,stateHiddenBadgeCount:h.hiddenBadgeCount,stateAllFilteredSelected:h.allFilteredSelected,itemLabel:pg,toggleAsyncRefresh:g,toggleKeyboardFeature:_,addCountryFromFilter:v,updateContractSelection:y,focusContractTarget:S}},template:`
    <section class="skin-section feature-lab-section">
      <div class="section-heading">
        <p class="eyebrow">Vue 3.1.5 coverage</p>
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
  `}},data(){return{routes:Og,liveNavItems:Mg,featurePills:Pg,apiCards:Fg,installCode:Ig,setupCode:Lg,settingsCode:Rg,renderCode:zg,currentSlug:Vg(),events:[`ready`]}},computed:{isLiveMode(){return Bg()},currentRoute(){return Hg(this.currentSlug)},currentLiveSection(){if(!this.isLiveMode)return null;let e=this.currentSlug===`basic`?`classic`:this.currentSlug;return Ng.find(t=>t.slug===e)},activeLiveSlug(){return this.currentLiveSection?this.currentLiveSection.slug:this.currentRoute.slug},liveProjectUrl(){return`live/#/${this.currentRoute.slug===`basic`?`classic`:this.currentRoute.slug}`},stackblitzRouteUrl(){return hg(this.currentRoute.slug)}},mounted(){window.addEventListener(`hashchange`,this.syncPath),window.addEventListener(`popstate`,this.syncPath)},beforeUnmount(){window.removeEventListener(`hashchange`,this.syncPath),window.removeEventListener(`popstate`,this.syncPath)},methods:{flagClass:mg,syncPath(){this.currentSlug=Vg(),this.events=[`ready`]},navigate(e){window.location.hash=`#/`+e,this.currentSlug=e,this.events=[`ready`],window.scrollTo({top:0,left:0})},record(e){this.events=[e].concat(this.events).slice(0,10)}},template:`
    <main v-if="isLiveMode" class="page shell-page">
      <header class="topbar">
        <p class="eyebrow">Vue ${rg} runtime</p>
        <h1>@stackline/vue-multiselect-dropdown ${ng}</h1>
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
          <span class="meta-pill primary">v${ng}</span>
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
              <span>${ng}</span>
            </div>
            <div class="release-item">
              <strong>Vue</strong>
              <span>${rg}</span>
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
                  Running against package line <code>${ng}</code> and Vue
                  <code>${rg}</code>.
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
              scoped slots, composables, and emitted events. Version <code>${ng}</code> includes
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
  `});Gg.component(`demo-case`,Tg),Gg.mount(`#app`);