var e=Object.defineProperty,t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function r(e,t){let n=Object.create(null),r=e.split(`,`);for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}var i={1:`TEXT`,2:`CLASS`,4:`STYLE`,8:`PROPS`,16:`FULL_PROPS`,32:`HYDRATE_EVENTS`,64:`STABLE_FRAGMENT`,128:`KEYED_FRAGMENT`,256:`UNKEYED_FRAGMENT`,1024:`DYNAMIC_SLOTS`,512:`NEED_PATCH`,[-1]:`HOISTED`,[-2]:`BAIL`},a=r(`Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl`),o=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,s=r(o);o+``;function c(e){if(A(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=c(N(r)?d(r):r);if(i)for(let e in i)t[e]=i[e]}return t}else if(P(e))return e}var l=/;(?![^(]*\))/g,u=/:(.+)/;function d(e){let t={};return e.split(l).forEach(e=>{if(e){let n=e.split(u);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t=``;if(N(e))t=e;else if(A(e))for(let n=0;n<e.length;n++)t+=f(e[n])+` `;else if(P(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var p=`html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot`,m=`svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view`,h=`area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr`,g=r(p),_=r(m),v=r(h);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=se(e),r=se(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=A(e),r=A(t),n||r)return n&&r?y(e,t):!1;if(n=P(e),r=P(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function x(e,t){return e.findIndex(e=>b(e,t))}function S(e,t){for(let n of e)if(b(n,t))return!0;return!1}var C=e=>e==null?``:P(e)?JSON.stringify(e,ee,2):String(e),ee=(e,t)=>j(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[`${t} =>`]=n,e),{})}:oe(t)?{[`Set(${t.size})`]:[...t.values()]}:P(t)&&!A(t)&&!pe(t)?String(t):t,w={},te=[],T=()=>{},E=()=>!1,ne=/^on[^a-z]/,D=e=>ne.test(e),re=e=>e.startsWith(`onUpdate:`),O=Object.assign,ie=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},ae=Object.prototype.hasOwnProperty,k=(e,t)=>ae.call(e,t),A=Array.isArray,j=e=>de(e)===`[object Map]`,oe=e=>de(e)===`[object Set]`,se=e=>e instanceof Date,M=e=>typeof e==`function`,N=e=>typeof e==`string`,ce=e=>typeof e==`symbol`,P=e=>typeof e==`object`&&!!e,le=e=>P(e)&&M(e.then)&&M(e.catch),ue=Object.prototype.toString,de=e=>ue.call(e),fe=e=>de(e).slice(8,-1),pe=e=>de(e)===`[object Object]`,me=e=>N(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,he=r(`key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ge=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},_e=/-(\w)/g,ve=ge(e=>e.replace(_e,(e,t)=>t?t.toUpperCase():``)),ye=/\B([A-Z])/g,be=ge(e=>e.replace(ye,`-$1`).toLowerCase()),xe=ge(e=>e.charAt(0).toUpperCase()+e.slice(1)),Se=(e,t)=>e!==t&&(e===e||t===t),Ce=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},we=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Te=e=>{let t=parseFloat(e);return isNaN(t)?e:t},Ee,De=()=>Ee||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{},Oe=new WeakMap,ke=[],Ae,je=Symbol(``),Me=Symbol(``);function Ne(e){return e&&e._isEffect===!0}function Pe(e,t=w){Ne(e)&&(e=e.raw);let n=Le(e,t);return t.lazy||n(),n}function Fe(e){e.active&&=(Re(e),e.options.onStop&&e.options.onStop(),!1)}var Ie=0;function Le(e,t){let n=function(){if(!n.active)return t.scheduler?void 0:e();if(!ke.includes(n)){Re(n);try{return He(),ke.push(n),Ae=n,e()}finally{ke.pop(),Ue(),Ae=ke[ke.length-1]}}};return n.id=Ie++,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function Re(e){let{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var ze=!0,Be=[];function Ve(){Be.push(ze),ze=!1}function He(){Be.push(ze),ze=!0}function Ue(){let e=Be.pop();ze=e===void 0?!0:e}function F(e,t,n){if(!ze||Ae===void 0)return;let r=Oe.get(e);r||Oe.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(Ae)||(i.add(Ae),Ae.deps.push(i))}function We(e,t,n,r,i,a){let o=Oe.get(e);if(!o)return;let s=new Set,c=e=>{e&&e.forEach(e=>{(e!==Ae||e.options.allowRecurse)&&s.add(e)})};if(t===`clear`)o.forEach(c);else if(n===`length`&&A(e))o.forEach((e,t)=>{(t===`length`||t>=r)&&c(e)});else switch(n!==void 0&&c(o.get(n)),t){case`add`:A(e)?me(n)&&c(o.get(`length`)):(c(o.get(je)),j(e)&&c(o.get(Me)));break;case`delete`:A(e)||(c(o.get(je)),j(e)&&c(o.get(Me)));break;case`set`:j(e)&&c(o.get(je));break}s.forEach(e=>{e.options.scheduler?e.options.scheduler(e):e()})}var Ge=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(ce)),Ke=Ze(),qe=Ze(!1,!0),Je=Ze(!0),Ye=Ze(!0,!0),Xe={};[`includes`,`indexOf`,`lastIndexOf`].forEach(e=>{let t=Array.prototype[e];Xe[e]=function(...e){let n=I(this);for(let e=0,t=this.length;e<t;e++)F(n,`get`,e+``);let r=t.apply(n,e);return r===-1||r===!1?t.apply(n,e.map(I)):r}}),[`push`,`pop`,`shift`,`unshift`,`splice`].forEach(e=>{let t=Array.prototype[e];Xe[e]=function(...e){Ve();let n=t.apply(this,e);return He(),n}});function Ze(e=!1,t=!1){return function(n,r,i){if(r===`__v_isReactive`)return!e;if(r===`__v_isReadonly`)return e;if(r===`__v_raw`&&i===(e?At:kt).get(n))return n;let a=A(n);if(a&&k(Xe,r))return Reflect.get(Xe,r,i);let o=Reflect.get(n,r,i);return(ce(r)?Ge.has(r):r===`__proto__`||r===`__v_isRef`)||(e||F(n,`get`,r),t)?o:L(o)?!a||!me(r)?o.value:o:P(o)?e?Ft(o):Nt(o):o}}var Qe=et(),$e=et(!0);function et(e=!1){return function(t,n,r,i){let a=t[n];if(!e&&(r=I(r),!A(t)&&L(a)&&!L(r)))return a.value=r,!0;let o=A(t)&&me(n)?Number(n)<t.length:k(t,n),s=Reflect.set(t,n,r,i);return t===I(i)&&(o?Se(r,a)&&We(t,`set`,n,r,a):We(t,`add`,n,r)),s}}function tt(e,t){let n=k(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&We(e,`delete`,t,void 0,r),i}function nt(e,t){let n=Reflect.has(e,t);return(!ce(t)||!Ge.has(t))&&F(e,`has`,t),n}function rt(e){return F(e,`iterate`,je),Reflect.ownKeys(e)}var it={get:Ke,set:Qe,deleteProperty:tt,has:nt,ownKeys:rt},at={get:Je,set(e,t){return!0},deleteProperty(e,t){return!0}},ot=O({},it,{get:qe,set:$e}),st=O({},at,{get:Ye}),ct=e=>P(e)?Nt(e):e,lt=e=>P(e)?Ft(e):e,ut=e=>e,dt=e=>Reflect.getPrototypeOf(e);function ft(e,t,n=!1,r=!1){e=e.__v_raw;let i=I(e),a=I(t);t!==a&&!n&&F(i,`get`,t),!n&&F(i,`get`,a);let{has:o}=dt(i),s=n?lt:r?ut:ct;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a))}function pt(e,t=!1){let n=this.__v_raw,r=I(n),i=I(e);return e!==i&&!t&&F(r,`has`,e),!t&&F(r,`has`,i),e===i?n.has(e):n.has(e)||n.has(i)}function mt(e,t=!1){return e=e.__v_raw,!t&&F(I(e),`iterate`,je),Reflect.get(e,`size`,e)}function ht(e){e=I(e);let t=I(this),n=dt(t).has.call(t,e),r=t.add(e);return n||We(t,`add`,e,e),r}function gt(e,t){t=I(t);let n=I(this),{has:r,get:i}=dt(n),a=r.call(n,e);a||=(e=I(e),r.call(n,e));let o=i.call(n,e),s=n.set(e,t);return a?Se(t,o)&&We(n,`set`,e,t,o):We(n,`add`,e,t),s}function _t(e){let t=I(this),{has:n,get:r}=dt(t),i=n.call(t,e);i||=(e=I(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&We(t,`delete`,e,void 0,a),o}function vt(){let e=I(this),t=e.size!==0,n=e.clear();return t&&We(e,`clear`,void 0,void 0,void 0),n}function yt(e,t){return function(n,r){let i=this,a=i.__v_raw,o=I(a),s=e?lt:t?ut:ct;return!e&&F(o,`iterate`,je),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}}function bt(e,t,n){return function(...r){let i=this.__v_raw,a=I(i),o=j(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=t?lt:n?ut:ct;return!t&&F(a,`iterate`,c?Me:je),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function xt(e){return function(...t){return e===`delete`?!1:this}}var St={get(e){return ft(this,e)},get size(){return mt(this)},has:pt,add:ht,set:gt,delete:_t,clear:vt,forEach:yt(!1,!1)},Ct={get(e){return ft(this,e,!1,!0)},get size(){return mt(this)},has:pt,add:ht,set:gt,delete:_t,clear:vt,forEach:yt(!1,!0)},wt={get(e){return ft(this,e,!0)},get size(){return mt(this,!0)},has(e){return pt.call(this,e,!0)},add:xt(`add`),set:xt(`set`),delete:xt(`delete`),clear:xt(`clear`),forEach:yt(!0,!1)};[`keys`,`values`,`entries`,Symbol.iterator].forEach(e=>{St[e]=bt(e,!1,!1),wt[e]=bt(e,!0,!1),Ct[e]=bt(e,!1,!0)});function Tt(e,t){let n=t?Ct:e?wt:St;return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(k(n,r)&&r in t?n:t,r,i)}var Et={get:Tt(!1,!1)},Dt={get:Tt(!1,!0)},Ot={get:Tt(!0,!1)},kt=new WeakMap,At=new WeakMap;function jt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Mt(e){return e.__v_skip||!Object.isExtensible(e)?0:jt(fe(e))}function Nt(e){return e&&e.__v_isReadonly?e:Lt(e,!1,it,Et)}function Pt(e){return Lt(e,!1,ot,Dt)}function Ft(e){return Lt(e,!0,at,Ot)}function It(e){return Lt(e,!0,st,Ot)}function Lt(e,t,n,r){if(!P(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let i=t?At:kt,a=i.get(e);if(a)return a;let o=Mt(e);if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Rt(e){return zt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Bt(e){return Rt(e)||zt(e)}function I(e){return e&&I(e.__v_raw)||e}function Vt(e){return we(e,`__v_skip`,!0),e}var Ht=e=>P(e)?Nt(e):e;function L(e){return!!(e&&e.__v_isRef===!0)}function Ut(e){return Kt(e)}function Wt(e){return Kt(e,!0)}var Gt=class{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:Ht(e)}get value(){return F(I(this),`get`,`value`),this._value}set value(e){Se(I(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ht(e),We(I(this),`set`,`value`,e))}};function Kt(e,t=!1){return L(e)?e:new Gt(e,t)}function qt(e){We(e,`set`,`value`,void 0)}function Jt(e){return L(e)?e.value:e}var Yt={get:(e,t,n)=>Jt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return L(i)&&!L(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xt(e){return Rt(e)?e:new Proxy(e,Yt)}var Zt=class{constructor(e){this.__v_isRef=!0;let{get:t,set:n}=e(()=>F(this,`get`,`value`),()=>We(this,`set`,`value`));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}};function Qt(e){return new Zt(e)}function $t(e){let t=A(e)?Array(e.length):{};for(let n in e)t[n]=tn(e,n);return t}var en=class{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}};function tn(e,t){return L(e[t])?e[t]:new en(e,t)}var nn=class{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Pe(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,We(I(this),`set`,`value`))}}),this.__v_isReadonly=n}get value(){return this._dirty&&=(this._value=this.effect(),!1),F(I(this),`get`,`value`),this._value}set value(e){this._setter(e)}};function rn(e){let t,n;return M(e)?(t=e,n=T):(t=e.get,n=e.set),new nn(t,n,M(e)||!e.set)}var an=[];function on(e,...t){Ve();let n=an.length?an[an.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=sn();if(r)fn(r,n,11,[e+t.join(``),n&&n.proxy,i.map(({vnode:e})=>`at <${ro(n,e.type)}>`).join(`
`),i]);else{let n=[`[Vue warn]: ${e}`,...t];i.length&&n.push(`
`,...cn(i)),console.warn(...n)}Ue()}function sn(){let e=an[an.length-1];if(!e)return[];let t=[];for(;e;){let n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});let r=e.component&&e.component.parent;e=r&&r.vnode}return t}function cn(e){let t=[];return e.forEach((e,n)=>{t.push(...n===0?[]:[`
`],...ln(e))}),t}function ln({vnode:e,recurseCount:t}){let n=t>0?`... (${t} recursive calls)`:``,r=e.component?e.component.parent==null:!1,i=` at <${ro(e.component,e.type,r)}`,a=`>`+n;return e.props?[i,...un(e.props),a]:[i+a]}function un(e){let t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...dn(n,e[n]))}),n.length>3&&t.push(` ...`),t}function dn(e,t,n){return N(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t==`number`||typeof t==`boolean`||t==null?n?t:[`${e}=${t}`]:L(t)?(t=dn(e,I(t.value),!0),n?t:[`${e}=Ref<`,t,`>`]):M(t)?[`${e}=fn${t.name?`<${t.name}>`:``}`]:(t=I(t),n?t:[`${e}=`,t])}function fn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(e){mn(e,t,n)}return i}function pn(e,t,n,r){if(M(e)){let i=fn(e,t,n,r);return i&&le(i)&&i.catch(e=>{mn(e,t,n)}),i}let i=[];for(let a=0;a<e.length;a++)i.push(pn(e[a],t,n,r));return i}function mn(e,t,n,r=!0){let i=t?t.vnode:null;if(t){let r=t.parent,i=t.proxy,a=n;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a))return}r=r.parent}let o=t.appContext.config.errorHandler;if(o){fn(o,null,10,[e,i,a]);return}}hn(e,n,i,r)}function hn(e,t,n,r=!0){console.error(e)}var gn=!1,_n=!1,vn=[],yn=0,bn=[],xn=null,Sn=0,Cn=[],wn=null,Tn=0,En=Promise.resolve(),Dn=null,On=null;function kn(e){let t=Dn||En;return e?t.then(e):t}function An(e){(!vn.length||!vn.includes(e,gn&&e.allowRecurse?yn+1:yn))&&e!==On&&(vn.push(e),jn())}function jn(){!gn&&!_n&&(_n=!0,Dn=En.then(zn))}function Mn(e){let t=vn.indexOf(e);t>-1&&(vn[t]=null)}function Nn(e,t,n,r){A(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),jn()}function Pn(e){Nn(e,xn,bn,Sn)}function Fn(e){Nn(e,wn,Cn,Tn)}function In(e,t=null){if(bn.length){for(On=t,xn=[...new Set(bn)],bn.length=0,Sn=0;Sn<xn.length;Sn++)xn[Sn]();xn=null,Sn=0,On=null,In(e,t)}}function Ln(e){if(Cn.length){let e=[...new Set(Cn)];if(Cn.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((e,t)=>Rn(e)-Rn(t)),Tn=0;Tn<wn.length;Tn++)wn[Tn]();wn=null,Tn=0}}var Rn=e=>e.id==null?1/0:e.id;function zn(e){_n=!1,gn=!0,In(e),vn.sort((e,t)=>Rn(e)-Rn(t));try{for(yn=0;yn<vn.length;yn++){let e=vn[yn];e&&fn(e,null,14)}}finally{yn=0,vn.length=0,Ln(e),gn=!1,Dn=null,(vn.length||Cn.length)&&zn(e)}}var Bn;function Vn(e){Bn=e}function Hn(e,t){Bn&&Bn.emit(`app:init`,e,t,{Fragment:z,Text:Br,Comment:Vr,Static:Hr})}function Un(e){Bn&&Bn.emit(`app:unmount`,e)}var Wn=qn(`component:added`),Gn=qn(`component:updated`),Kn=qn(`component:removed`);function qn(e){return t=>{Bn&&Bn.emit(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0)}}function Jn(e,t,n){Bn&&Bn.emit(`component:emit`,e.appContext.app,e,t,n)}function Yn(e,t,...n){let r=e.vnode.props||w;__VUE_PROD_DEVTOOLS__&&Jn(e,t,n);let i=`on${xe(t)}`,a=r[i];if(!a&&t.startsWith(`update:`)&&(i=`on${xe(be(t))}`,a=r[i]),!a){if(a=r[i+`Once`],!e.emitted)(e.emitted={})[i]=!0;else if(e.emitted[i])return}a&&pn(a,e,6,n)}function Xn(e,t,n=!1){let r=t.app?t.app._uid:-1,i=e.__emits||={},a=i[r];if(a!==void 0)return a;let o=e.emits,s={},c=!1;if(__VUE_OPTIONS_API__&&!M(e)){let r=e=>{c=!0,O(s,Xn(e,t,!0))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!o&&!c?i[r]=null:(A(o)?o.forEach(e=>s[e]=null):O(s,o),i[r]=s)}function Zn(e,t){return!e||!D(t)?!1:(t=t.replace(/Once$/,``),k(e,t[2].toLowerCase()+t.slice(3))||k(e,t.slice(2)))}var R=null;function Qn(e){R=e}function $n(e){let{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:c,emit:l,render:u,renderCache:d,data:f,setupState:p,ctx:m}=e,h;R=e;try{let e;if(n.shapeFlag&4){let t=i||r;h=si(u.call(t,t,d,a,p,f,m)),e=c}else{let n=t;h=si(n.length>1?n(a,{attrs:c,slots:s,emit:l}):n(a,null)),e=t.props?c:tr(c)}let g=h;if(t.inheritAttrs!==!1&&e){let t=Object.keys(e),{shapeFlag:n}=g;t.length&&(n&1||n&6)&&(o&&t.some(re)&&(e=nr(e,o)),g=ri(g,e))}n.dirs&&(g.dirs=n.dirs),n.transition&&(g.transition=n.transition),h=g}catch(t){mn(t,e,1),h=B(Vr)}return R=null,h}function er(e){let t=e.filter(e=>!(Xr(e)&&e.type===Vr&&e.children!==`v-if`));return t.length===1&&Xr(t[0])?t[0]:null}var tr=e=>{let t;for(let n in e)(n===`class`||n===`style`||D(n))&&((t||={})[n]=e[n]);return t},nr=(e,t)=>{let n={};for(let r in e)(!re(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>0){if(c&1024)return!0;if(c&16)return r?ir(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!Zn(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ir(r,o,l):!0:!!o;return!1}function ir(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!Zn(n,a))return!0}return!1}function ar({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}var or=e=>e.__isSuspense,sr={__isSuspense:!0,process(e,t,n,r,i,a,o,s,c){e==null?cr(t,n,r,i,a,o,s,c):lr(e,t,n,r,i,o,s,c)},hydrate:dr,create:ur};function cr(e,t,n,r,i,a,o,s){let{p:c,o:{createElement:l}}=s,u=l(`div`),d=e.suspense=ur(e,i,r,t,u,n,a,o,s);c(null,d.pendingBranch=e.ssContent,u,null,r,d,a,o),d.deps>0?(c(null,e.ssFallback,t,n,r,null,a,o),hr(d,e.ssFallback)):d.resolve()}function lr(e,t,n,r,i,a,o,{p:s,um:c,o:{createElement:l}}){let u=t.suspense=e.suspense;u.vnode=t,t.el=e.el;let d=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:h,isHydrating:g}=u;if(m)u.pendingBranch=d,Zr(d,m)?(s(m,d,u.hiddenContainer,null,i,u,a,o),u.deps<=0?u.resolve():h&&(s(p,f,n,r,i,null,a,o),hr(u,f))):(u.pendingId++,g?(u.isHydrating=!1,u.activeBranch=m):c(m,i,u),u.deps=0,u.effects.length=0,u.hiddenContainer=l(`div`),h?(s(null,d,u.hiddenContainer,null,i,u,a,o),u.deps<=0?u.resolve():(s(p,f,n,r,i,null,a,o),hr(u,f))):p&&Zr(d,p)?(s(p,d,n,r,i,u,a,o),u.resolve(!0)):(s(null,d,u.hiddenContainer,null,i,u,a,o),u.deps<=0&&u.resolve()));else if(p&&Zr(d,p))s(p,d,n,r,i,u,a,o),hr(u,d);else{let e=t.props&&t.props.onPending;if(M(e)&&e(),u.pendingBranch=d,u.pendingId++,s(null,d,u.hiddenContainer,null,i,u,a,o),u.deps<=0)u.resolve();else{let{timeout:e,pendingId:t}=u;e>0?setTimeout(()=>{u.pendingId===t&&u.fallback(f)},e):e===0&&u.fallback(f)}}}function ur(e,t,n,r,i,a,o,s,c,l=!1){let{p:u,m:d,um:f,n:p,o:{parentNode:m,remove:h}}=c,g=Te(e.props&&e.props.timeout),_={vnode:e,parent:t,parentComponent:n,isSVG:o,optimized:s,container:r,hiddenContainer:i,anchor:a,deps:0,pendingId:0,timeout:typeof g==`number`?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(e=!1){let{vnode:t,activeBranch:n,pendingBranch:r,pendingId:i,effects:a,parentComponent:o,container:s}=_;if(_.isHydrating)_.isHydrating=!1;else if(!e){let e=n&&r.transition&&r.transition.mode===`out-in`;e&&(n.transition.afterLeave=()=>{i===_.pendingId&&d(r,s,t,0)});let{anchor:t}=_;n&&(t=p(n),f(n,o,_,!0)),e||d(r,s,t,0)}hr(_,r),_.pendingBranch=null,_.isInFallback=!1;let c=_.parent,l=!1;for(;c;){if(c.pendingBranch){c.effects.push(...a),l=!0;break}c=c.parent}l||Fn(a),_.effects=[];let u=t.props&&t.props.onResolve;M(u)&&u()},fallback(e){if(!_.pendingBranch)return;let{vnode:t,activeBranch:n,parentComponent:r,container:i,isSVG:a,optimized:o}=_,s=t.props&&t.props.onFallback;M(s)&&s();let c=p(n),l=()=>{_.isInFallback&&(u(null,e,i,c,r,null,a,o),hr(_,e))},d=e.transition&&e.transition.mode===`out-in`;d&&(n.transition.afterLeave=l),f(n,r,null,!0),_.isInFallback=!0,d||l()},move(e,t,n){_.activeBranch&&d(_.activeBranch,e,t,n),_.container=e},next(){return _.activeBranch&&p(_.activeBranch)},registerDep(e,t){if(!_.pendingBranch)return;let n=e.vnode.el;_.deps++,e.asyncDep.catch(t=>{mn(t,e,0)}).then(r=>{if(e.isUnmounted||_.isUnmounted||_.pendingId!==e.suspenseId)return;_.deps--,e.asyncResolved=!0;let{vnode:i}=e;Ya(e,r),n&&(i.el=n);let a=!n&&e.subTree.el;t(e,i,m(n||e.subTree.el),n?null:p(e.subTree),_,o,s),a&&h(a),ar(e,i.el),_.deps===0&&_.resolve()})},unmount(e,t){_.isUnmounted=!0,_.activeBranch&&f(_.activeBranch,n,e,t),_.pendingBranch&&f(_.pendingBranch,n,e,t)}};return _}function dr(e,t,n,r,i,a,o,s){let c=t.suspense=ur(t,r,n,e.parentNode,document.createElement(`div`),null,i,a,o,!0),l=s(e,c.pendingBranch=t.ssContent,n,c,a);return c.deps===0&&c.resolve(),l}function fr(e){let{shapeFlag:t,children:n}=e,r,i;return t&32?(r=pr(n.default),i=pr(n.fallback)):(r=pr(n),i=si(null)),{content:r,fallback:i}}function pr(e){return M(e)&&(e=e()),A(e)&&(e=er(e)),si(e)}function mr(e,t){t&&t.pendingBranch?A(e)?t.effects.push(...e):t.effects.push(e):Fn(e)}function hr(e,t){e.activeBranch=t;let{vnode:n,parentComponent:r}=e,i=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=i,ar(r,i))}var gr=0,_r=e=>gr+=e;function vr(e,t,n={},r){let i=e[t];gr++;let a=(Gr(),Yr(z,{key:n.key},i?i(n):r?r():[],e._===1?64:-2));return gr--,a}function yr(e,t=R){if(!t)return e;let n=(...n)=>{gr||Gr(!0);let r=R;Qn(t);let i=e(...n);return Qn(r),gr||Kr(),i};return n._c=!0,n}var br=null,xr=[];function Sr(e){xr.push(br=e)}function Cr(){xr.pop(),br=xr[xr.length-1]||null}function wr(e){return(t=>yr(function(){Sr(e);let n=t.apply(this,arguments);return Cr(),n}))}var Tr=e=>e.__isTeleport,Er=e=>e&&(e.disabled||e.disabled===``),Dr=(e,t)=>{let n=e&&e.to;return N(n)?t?t(n):null:n},Or={__isTeleport:!0,process(e,t,n,r,i,a,o,s,c){let{mc:l,pc:u,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:h}}=c,g=Er(t.props),{shapeFlag:_,children:v}=t;if(e==null){let e=t.el=m(``),c=t.anchor=m(``);f(e,n,r),f(c,n,r);let u=t.target=Dr(t.props,p),d=t.targetAnchor=m(``);u&&f(d,u);let h=(e,t)=>{_&16&&l(v,e,t,i,a,o,s)};g?h(n,c):u&&h(u,d)}else{t.el=e.el;let r=t.anchor=e.anchor,l=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=Er(e.props),h=m?n:l,_=m?r:f;if(t.dynamicChildren){if(d(e.dynamicChildren,t.dynamicChildren,h,i,a,o),t.shapeFlag&16){let n=e.children,r=t.children;for(let e=0;e<r.length;e++)r[e].el||(r[e].el=n[e].el)}}else s||u(e,t,h,_,i,a,o);if(g)m||kr(t,n,r,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=Dr(t.props,p);e&&kr(t,e,null,c,0)}else m&&kr(t,l,f,c,1)}},remove(e,{r:t,o:{remove:n}}){let{shapeFlag:r,children:i,anchor:a}=e;if(n(a),r&16)for(let e=0;e<i.length;e++)t(i[e])},move:kr,hydrate:Ar};function kr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),(!d||Er(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Ar(e,t,n,r,i,{o:{nextSibling:a,parentNode:o,querySelector:s}},c){let l=t.target=Dr(t.props,s);if(l){let s=l._lpa||l.firstChild;t.shapeFlag&16&&(Er(t.props)?(t.anchor=c(a(e),t,o(e),n,r,i),t.targetAnchor=s):(t.anchor=a(e),t.targetAnchor=c(s,t,l,n,r,i)),l._lpa=t.targetAnchor&&a(t.targetAnchor))}return t.anchor&&a(t.anchor)}var jr=Or,Mr=`components`,Nr=`directives`;function Pr(e){return Rr(Mr,e)||e}var Fr=Symbol();function Ir(e){return N(e)?Rr(Mr,e,!1)||e:e||Fr}function Lr(e){return Rr(Nr,e)}function Rr(e,t,n=!0){let r=R||U;if(r){let n=r.type;if(e===Mr){let e=n.displayName||n.name;if(e&&(e===t||e===ve(t)||e===xe(ve(t))))return n}return zr(r[e]||n[e],t)||zr(r.appContext[e],t)}}function zr(e,t){return e&&(e[t]||e[ve(t)]||e[xe(ve(t))])}var z=Symbol(void 0),Br=Symbol(void 0),Vr=Symbol(void 0),Hr=Symbol(void 0),Ur=[],Wr=null;function Gr(e=!1){Ur.push(Wr=e?null:[])}function Kr(){Ur.pop(),Wr=Ur[Ur.length-1]||null}var qr=1;function Jr(e){qr+=e}function Yr(e,t,n,r,i){let a=B(e,t,n,r,i,!0);return a.dynamicChildren=Wr||te,Kr(),qr>0&&Wr&&Wr.push(a),a}function Xr(e){return e?e.__v_isVNode===!0:!1}function Zr(e,t){return e.type===t.type&&e.key===t.key}function Qr(e){}var $r=`__vInternal`,ei=({key:e})=>e??null,ti=({ref:e})=>e==null?null:A(e)?e:{i:R,r:e},B=ni;function ni(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Fr)&&(e=Vr),Xr(e)){let r=ri(e,t,!0);return n&&li(r,n),r}if(io(e)&&(e=e.__vccOpts),t){(Bt(t)||$r in t)&&(t=O({},t));let{class:e,style:n}=t;e&&!N(e)&&(t.class=f(e)),P(n)&&(Bt(n)&&!A(n)&&(n=O({},n)),t.style=c(n))}let o=N(e)?1:or(e)?128:Tr(e)?64:P(e)?4:M(e)?2:0,s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ei(t),ref:t&&ti(t),scopeId:br,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};if(li(s,n),o&128){let{content:e,fallback:t}=fr(s);s.ssContent=e,s.ssFallback=t}return qr>0&&!a&&Wr&&(r>0||o&6)&&r!==32&&Wr.push(s),s}function ri(e,t,n=!1){let{props:r,ref:i,patchFlag:a}=e,o=t?ui(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&ei(o),ref:t&&t.ref?n&&i?A(i)?i.concat(ti(t)):[i,ti(t)]:ti(t):i,scopeId:e.scopeId,children:e.children,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==z?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ri(e.ssContent),ssFallback:e.ssFallback&&ri(e.ssFallback),el:e.el,anchor:e.anchor}}function ii(e=` `,t=0){return B(Br,null,e,t)}function ai(e,t){let n=B(Hr,null,e);return n.staticCount=t,n}function oi(e=``,t=!1){return t?(Gr(),Yr(Vr,null,e)):B(Vr,null,e)}function si(e){return e==null||typeof e==`boolean`?B(Vr):A(e)?B(z,null,e):typeof e==`object`?e.el===null?e:ri(e):B(Br,null,String(e))}function ci(e){return e.el===null?e:ri(e)}function li(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(A(t))n=16;else if(typeof t==`object`)if(r&1||r&64){let n=t.default;n&&(n._c&&_r(1),li(e,n()),n._c&&_r(-1));return}else{n=32;let r=t._;!r&&!($r in t)?t._ctx=R:r===3&&R&&(R.vnode.patchFlag&1024?(t._=2,e.patchFlag|=1024):t._=1)}else M(t)?(t={default:t,_ctx:R},n=32):(t=String(t),r&64?(n=16,t=[ii(t)]):n=8);e.children=t,e.shapeFlag|=n}function ui(...e){let t=O({},e[0]);for(let n=1;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=f([t.class,r.class]));else if(e===`style`)t.style=c([t.style,r.style]);else if(D(e)){let n=t[e],i=r[e];n!==i&&(t[e]=n?[].concat(n,r[e]):i)}else t[e]=r[e]}return t}function di(e,t,n,r=!1){let i={},a={};we(a,$r,1),pi(e,t,i,a),n?e.props=r?i:Pt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function fi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=I(i),[c]=e.propsOptions;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r],l=t[o];if(c)if(k(a,o))a[o]=l;else{let t=ve(o);i[t]=mi(c,s,t,l,e)}else a[o]=l}}}else{pi(e,t,i,a);let r;for(let a in s)(!t||!k(t,a)&&((r=be(a))===a||!k(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=mi(c,t||w,a,void 0,e)):delete i[a]);if(a!==s)for(let e in a)(!t||!k(t,e))&&delete a[e]}We(e,`set`,`$attrs`)}function pi(e,t,n,r){let[i,a]=e.propsOptions;if(t)for(let a in t){let o=t[a];if(he(a))continue;let s;i&&k(i,s=ve(a))?n[s]=o:Zn(e.emitsOptions,a)||(r[a]=o)}if(a){let t=I(n);for(let r=0;r<a.length;r++){let o=a[r];n[o]=mi(i,t,o,t[o],e)}}}function mi(e,t,n,r,i){let a=e[n];if(a!=null){let e=k(a,`default`);if(e&&r===void 0){let e=a.default;a.type!==Function&&M(e)?(Ga(i),r=e(t),Ga(null)):r=e}a[0]&&(!k(t,n)&&!e?r=!1:a[1]&&(r===``||r===be(n))&&(r=!0))}return r}function hi(e,t,n=!1){let r=t.app?t.app._uid:-1,i=e.__props||={},a=i[r];if(a)return a;let o=e.props,s={},c=[],l=!1;if(__VUE_OPTIONS_API__&&!M(e)){let r=e=>{l=!0;let[n,r]=hi(e,t,!0);O(s,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return i[r]=te;if(A(o))for(let e=0;e<o.length;e++){let t=ve(o[e]);yi(t)&&(s[t]=w)}else if(o)for(let e in o){let t=ve(e);if(yi(t)){let n=o[e],r=s[t]=A(n)||M(n)?{type:n}:n;if(r){let e=vi(Boolean,r.type),n=vi(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||k(r,`default`))&&c.push(t)}}}return i[r]=[s,c]}function gi(e){let t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:``}function _i(e,t){return gi(e)===gi(t)}function vi(e,t){if(A(t)){for(let n=0,r=t.length;n<r;n++)if(_i(t[n],e))return n}else if(M(t))return _i(t,e)?0:-1;return-1}function yi(e){return e[0]!==`$`}function bi(e,t,n=U,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{if(n.isUnmounted)return;Ve(),Ga(n);let i=pn(t,n,e,r);return Ga(null),Ue(),i};return r?i.unshift(a):i.push(a),a}}var xi=e=>(t,n=U)=>!Ka&&bi(e,t,n),Si=xi(`bm`),Ci=xi(`m`),wi=xi(`bu`),Ti=xi(`u`),Ei=xi(`bum`),Di=xi(`um`),Oi=xi(`rtg`),ki=xi(`rtc`),Ai=(e,t=U)=>{bi(`ec`,e,t)};function ji(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ci(()=>{e.isMounted=!0}),Ei(()=>{e.isUnmounting=!0}),e}var Mi=[Function,Array],Ni={name:`BaseTransition`,props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mi,onEnter:Mi,onAfterEnter:Mi,onEnterCancelled:Mi,onBeforeLeave:Mi,onLeave:Mi,onAfterLeave:Mi,onLeaveCancelled:Mi,onBeforeAppear:Mi,onAppear:Mi,onAfterAppear:Mi,onAppearCancelled:Mi},setup(e,{slots:t}){let n=Wa(),r=ji(),i;return()=>{let a=t.default&&zi(t.default(),!0);if(!a||!a.length)return;let o=I(e),{mode:s}=o,c=a[0];if(r.isLeaving)return Ii(c);let l=Li(c);if(!l)return Ii(c);let u=Fi(l,o,r,n);Ri(l,u);let d=n.subTree,f=d&&Li(d),p=!1,{getTransitionKey:m}=l.type;if(m){let e=m();i===void 0?i=e:e!==i&&(i=e,p=!0)}if(f&&f.type!==Vr&&(!Zr(l,f)||p)){let e=Fi(f,o,r,n);if(Ri(f,e),s===`out-in`)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Ii(c);s===`in-out`&&(e.delayLeave=(e,t,n)=>{let i=Pi(r,f);i[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}};function Pi(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Fi(e,t,n,r){let{appear:i,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:h,onAppear:g,onAfterAppear:_,onAppearCancelled:v}=t,y=String(e.key),b=Pi(n,e),x=(e,t)=>{e&&pn(e,r,9,t)},S={mode:a,persisted:o,beforeEnter(t){let r=s;if(!n.isMounted)if(i)r=h||s;else return;t._leaveCb&&t._leaveCb(!0);let a=b[y];a&&Zr(e,a)&&a.el._leaveCb&&a.el._leaveCb(),x(r,[t])},enter(e){let t=c,r=l,a=u;if(!n.isMounted)if(i)t=g||c,r=_||l,a=v||u;else return;let o=!1,s=e._enterCb=t=>{o||(o=!0,x(t?a:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?(t(e,s),t.length<=1&&s()):s()},leave(t,r){let i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();x(d,[t]);let a=!1,o=t._leaveCb=n=>{a||(a=!0,r(),x(n?m:p,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return Fi(e,t,n,r)}};return S}function Ii(e){if(Bi(e))return e=ri(e),e.children=null,e}function Li(e){return Bi(e)?e.children?e.children[0]:void 0:e}function Ri(e,t){e.shapeFlag&6&&e.component?Ri(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zi(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];a.type===z?(a.patchFlag&128&&r++,n=n.concat(zi(a.children,t))):(t||a.type!==Vr)&&n.push(a)}if(r>1)for(let e=0;e<n.length;e++)n[e].patchFlag=-2;return n}var Bi=e=>e.type.__isKeepAlive,Vi={name:`KeepAlive`,__isKeepAlive:!0,inheritRef:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){let n=new Map,r=new Set,i=null,a=Wa(),o=a.suspense,s=a.ctx,{renderer:{p:c,m:l,um:u,o:{createElement:d}}}=s,f=d(`div`);s.activate=(e,t,n,r,i)=>{let a=e.component;l(e,t,n,0,o),c(a.vnode,e,t,n,a,o,r,i),V(()=>{a.isDeactivated=!1,a.a&&Ce(a.a);let t=e.props&&e.props.onVnodeMounted;t&&H(t,a.parent,e)},o)},s.deactivate=e=>{let t=e.component;l(e,f,null,1,o),V(()=>{t.da&&Ce(t.da);let n=e.props&&e.props.onVnodeUnmounted;n&&H(n,t.parent,e),t.isDeactivated=!0},o)};function p(e){Ji(e),u(e,a,o)}function m(e){n.forEach((t,n)=>{let r=Hi(t.type);r&&(!e||!e(r))&&h(n)})}function h(e){let t=n.get(e);!i||t.type!==i.type?p(t):i&&Ji(i),n.delete(e),r.delete(e)}xa(()=>[e.include,e.exclude],([e,t])=>{e&&m(t=>Ui(e,t)),t&&m(e=>!Ui(t,e))},{flush:`post`});let g=null,_=()=>{g!=null&&n.set(g,Yi(a.subTree))};return Ci(_),Ti(_),Ei(()=>{n.forEach(e=>{let{subTree:t,suspense:n}=a,r=Yi(t);if(e.type===r.type){Ji(r);let e=r.component.da;e&&V(e,n);return}p(e)})}),()=>{if(g=null,!t.default)return null;let a=t.default(),o=a[0];if(a.length>1)return i=null,a;if(!Xr(o)||!(o.shapeFlag&4)&&!(o.shapeFlag&128))return i=null,o;let s=Yi(o),c=s.type,l=Hi(c),{include:u,exclude:d,max:f}=e;if(u&&(!l||!Ui(u,l))||d&&l&&Ui(d,l))return i=s,o;let p=s.key==null?c:s.key,m=n.get(p);return s.el&&(s=ri(s),o.shapeFlag&128&&(o.ssContent=s)),g=p,m?(s.el=m.el,s.component=m.component,s.transition&&Ri(s,s.transition),s.shapeFlag|=512,r.delete(p),r.add(p)):(r.add(p),f&&r.size>parseInt(f,10)&&h(r.values().next().value)),s.shapeFlag|=256,i=s,o}}};function Hi(e){return e.displayName||e.name}function Ui(e,t){return A(e)?e.some(e=>Ui(e,t)):N(e)?e.split(`,`).indexOf(t)>-1:e.test?e.test(t):!1}function Wi(e,t){Ki(e,`a`,t)}function Gi(e,t){Ki(e,`da`,t)}function Ki(e,t,n=U){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()};if(bi(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Bi(e.parent.vnode)&&qi(r,t,n,e),e=e.parent}}function qi(e,t,n,r){let i=bi(t,e,r,!0);Di(()=>{ie(r[t],i)},n)}function Ji(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Yi(e){return e.shapeFlag&128?e.ssContent:e}var Xi=e=>e[0]===`_`||e===`$stable`,Zi=e=>A(e)?e.map(si):[si(e)],Qi=(e,t,n)=>yr(e=>Zi(t(e)),n),$i=(e,t)=>{let n=e._ctx;for(let r in e){if(Xi(r))continue;let i=e[r];if(M(i))t[r]=Qi(r,i,n);else if(i!=null){let e=Zi(i);t[r]=()=>e}}},ea=(e,t)=>{let n=Zi(t);e.slots.default=()=>n},ta=(e,t)=>{if(e.vnode.shapeFlag&32){let n=t._;n?(e.slots=t,we(t,`_`,n)):$i(t,e.slots={})}else e.slots={},t&&ea(e,t);we(e.slots,$r,1)},na=(e,t)=>{let{vnode:n,slots:r}=e,i=!0,a=w;if(n.shapeFlag&32){let e=t._;e?e===1?i=!1:O(r,t):(i=!t.$stable,$i(t,r)),a=t}else t&&(ea(e,t),a={default:1});if(i)for(let e in r)!Xi(e)&&!(e in a)&&delete r[e]};function ra(e,t){let n=R;if(n===null)return e;let r=n.proxy,i=e.dirs||=[];for(let e=0;e<t.length;e++){let[n,a,o,s=w]=t[e];M(n)&&(n={mounted:n,updated:n}),i.push({dir:n,instance:r,value:a,oldValue:void 0,arg:o,modifiers:s})}return e}function ia(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&pn(c,n,8,[e.el,s,e,t])}}function aa(){return{app:null,config:{isNativeTag:E,performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:E,errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}var oa=0;function sa(e,t){return function(n,r=null){r!=null&&!P(r)&&(r=null);let i=aa(),a=new Set,o=!1,s=i.app={_uid:oa++,_component:n,_props:r,_container:null,_context:i,version:go,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&M(e.install)?(a.add(e),e.install(s,...t)):M(e)&&(a.add(e),e(s,...t))),s},mixin(e){return __VUE_OPTIONS_API__&&(i.mixins.includes(e)||i.mixins.push(e)),s},component(e,t){return t?(i.components[e]=t,s):i.components[e]},directive(e,t){return t?(i.directives[e]=t,s):i.directives[e]},mount(a,c){if(!o){let l=B(n,r);return l.appContext=i,c&&t?t(l,a):e(l,a),o=!0,s._container=a,a.__vue_app__=s,__VUE_PROD_DEVTOOLS__&&Hn(s,go),l.component.proxy}},unmount(){o&&(e(null,s._container),__VUE_PROD_DEVTOOLS__&&Un(s))},provide(e,t){return i.provides[e]=t,s}};return s}}var ca=!1,la=e=>/svg/.test(e.namespaceURI)&&e.tagName!==`foreignObject`,ua=e=>e.nodeType===8;function da(e){let{mt:t,p:n,o:{patchProp:r,nextSibling:i,parentNode:a,remove:o,insert:s,createComment:c}}=e,l=(e,t)=>{ca=!1,u(t.firstChild,e,null,null),Ln(),ca&&console.error(`Hydration completed but contains mismatches.`)},u=(n,r,o,s,c=!1)=>{let l=ua(n)&&n.data===`[`,g=()=>m(n,r,o,s,l),{type:_,ref:v,shapeFlag:y}=r,b=n.nodeType;r.el=n;let x=null;switch(_){case Br:b===3?(n.data!==r.children&&(ca=!0,n.data=r.children),x=i(n)):x=g();break;case Vr:x=b!==8||l?g():i(n);break;case Hr:if(b!==1)x=g();else{x=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=x.outerHTML),t===r.staticCount-1&&(r.anchor=x),x=i(x);return x}break;case z:x=l?p(n,r,o,s,c):g();break;default:if(y&1)x=b!==1||r.type!==n.tagName.toLowerCase()?g():d(n,r,o,s,c);else if(y&6){let e=a(n),u=()=>{t(r,e,null,o,s,la(e),c)},d=r.type.__asyncLoader;d?d().then(u):u(),x=l?h(n):i(n)}else y&64?x=b===8?r.type.hydrate(n,r,o,s,c,e,f):g():y&128&&(x=r.type.hydrate(n,r,o,s,la(a(n)),c,e,u))}return v!=null&&o&&ma(v,null,o,s,r),x},d=(e,t,n,i,a)=>{a||=!!t.dynamicChildren;let{props:s,patchFlag:c,shapeFlag:l,dirs:u}=t;if(c!==-1){if(u&&ia(t,null,n,`created`),s)if(!a||c&16||c&32)for(let t in s)!he(t)&&D(t)&&r(e,t,null,s[t]);else s.onClick&&r(e,`onClick`,null,s.onClick);let d;if((d=s&&s.onVnodeBeforeMount)&&H(d,n,t),u&&ia(t,null,n,`beforeMount`),((d=s&&s.onVnodeMounted)||u)&&mr(()=>{d&&H(d,n,t),u&&ia(t,null,n,`mounted`)},i),l&16&&!(s&&(s.innerHTML||s.textContent))){let r=f(e.firstChild,t,e,n,i,a);for(;r;){ca=!0;let e=r;r=r.nextSibling,o(e)}}else l&8&&e.textContent!==t.children&&(ca=!0,e.textContent=t.children)}return e.nextSibling},f=(e,t,r,i,a,o)=>{o||=!!t.dynamicChildren;let s=t.children,c=s.length;for(let t=0;t<c;t++){let c=o?s[t]:s[t]=si(s[t]);e?e=u(e,c,i,a,o):(ca=!0,n(null,c,r,null,i,a,la(r)))}return e},p=(e,t,n,r,o)=>{let l=a(e),u=f(i(e),t,l,n,r,o);return u&&ua(u)&&u.data===`]`?i(t.anchor=u):(ca=!0,s(t.anchor=c(`]`),l,u),u)},m=(e,t,r,s,c)=>{if(ca=!0,t.el=null,c){let t=h(e);for(;;){let n=i(e);if(n&&n!==t)o(n);else break}}let l=i(e),u=a(e);return o(e),n(null,t,u,l,r,s,la(u)),l},h=e=>{let t=0;for(;e;)if(e=i(e),e&&ua(e)&&(e.data===`[`&&t++,e.data===`]`)){if(t===0)return i(e);t--}return e};return[l,u]}function fa(){typeof __VUE_OPTIONS_API__!=`boolean`&&(De().__VUE_OPTIONS_API__=!0),typeof __VUE_PROD_DEVTOOLS__!=`boolean`&&(De().__VUE_PROD_DEVTOOLS__=!1)}var pa={scheduler:An,allowRecurse:!0},V=mr,ma=(e,t,n,r,i)=>{if(A(e)){e.forEach((e,a)=>ma(e,t&&(A(t)?t[a]:t),n,r,i));return}let a;a=i?i.shapeFlag&4?i.component.proxy:i.el:null;let{i:o,r:s}=e,c=t&&t.r,l=o.refs===w?o.refs={}:o.refs,u=o.setupState;if(c!=null&&c!==s&&(N(c)?(l[c]=null,k(u,c)&&(u[c]=null)):L(c)&&(c.value=null)),N(s)){let e=()=>{l[s]=a,k(u,s)&&(u[s]=a)};a?(e.id=-1,V(e,r)):e()}else if(L(s)){let e=()=>{s.value=a};a?(e.id=-1,V(e,r)):e()}else M(s)&&fn(s,n,12,[a,l])};function ha(e){return _a(e)}function ga(e){return _a(e,da)}function _a(e,t){fa();let{insert:n,remove:r,patchProp:i,forcePatchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=T,cloneNode:m,insertStaticContent:h}=e,g=(e,t,n,r=null,i=null,a=null,o=!1,s=!1)=>{e&&!Zr(e,t)&&(r=de(e),N(e,i,a,!0),e=null),t.patchFlag===-2&&(s=!1,t.dynamicChildren=null);let{type:c,ref:l,shapeFlag:u}=t;switch(c){case Br:_(e,t,n,r);break;case Vr:v(e,t,n,r);break;case Hr:e??y(t,n,r,o);break;case z:D(e,t,n,r,i,a,o,s);break;default:u&1?b(e,t,n,r,i,a,o,s):u&6?re(e,t,n,r,i,a,o,s):(u&64||u&128)&&c.process(e,t,n,r,i,a,o,s,me)}l!=null&&i&&ma(l,e&&e.ref,i,a,t)},_=(e,t,r,i)=>{if(e==null)n(t.el=s(t.children),r,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},v=(e,t,r,i)=>{e==null?n(t.el=c(t.children||``),r,i):t.el=e.el},y=(e,t,n,r)=>{[e.el,e.anchor]=h(e.children,t,n,r)},b=(e,t,n,r,i,a,o,s)=>{o||=t.type===`svg`,e==null?x(t,n,r,i,a,o,s):ee(e,t,i,a,o,s)},x=(e,t,r,a,s,c,l)=>{let d,f,{type:p,props:h,shapeFlag:g,transition:_,scopeId:v,patchFlag:y,dirs:b}=e;if(e.el&&m!==void 0&&y===-1)d=e.el=m(e.el);else{if(d=e.el=o(e.type,c,h&&h.is),g&8?u(d,e.children):g&16&&C(e.children,d,null,a,s,c&&p!==`foreignObject`,l||!!e.dynamicChildren),b&&ia(e,null,a,`created`),h){for(let t in h)he(t)||i(d,t,null,h[t],c,e.children,a,s,ue);(f=h.onVnodeBeforeMount)&&H(f,a,e)}S(d,v,e,a)}__VUE_PROD_DEVTOOLS__&&(Object.defineProperty(d,`__vnode`,{value:e,enumerable:!1}),Object.defineProperty(d,`__vueParentComponent`,{value:a,enumerable:!1})),b&&ia(e,null,a,`beforeMount`);let x=(!s||s&&!s.pendingBranch)&&_&&!_.persisted;x&&_.beforeEnter(d),n(d,t,r),((f=h&&h.onVnodeMounted)||x||b)&&V(()=>{f&&H(f,a,e),x&&_.enter(d),b&&ia(e,null,a,`mounted`)},s)},S=(e,t,n,r)=>{if(t&&p(e,t),r){let i=r.type.__scopeId;i&&i!==t&&p(e,i+`-s`),n===r.subTree&&S(e,r.vnode.scopeId,r.vnode,r.parent)}},C=(e,t,n,r,i,a,o,s=0)=>{for(let c=s;c<e.length;c++)g(null,e[c]=o?ci(e[c]):si(e[c]),t,n,r,i,a,o)},ee=(e,t,n,r,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||w,m=t.props||w,h;if((h=m.onVnodeBeforeUpdate)&&H(h,n,t,e),f&&ia(t,e,n,`beforeUpdate`),l>0){if(l&16)ne(c,t,p,m,n,r,o);else if(l&2&&p.class!==m.class&&i(c,`class`,null,m.class,o),l&4&&i(c,`style`,p.style,m.style,o),l&8){let s=t.dynamicProps;for(let t=0;t<s.length;t++){let l=s[t],u=p[l],d=m[l];(d!==u||a&&a(c,l))&&i(c,l,u,d,o,e.children,n,r,ue)}}l&1&&e.children!==t.children&&u(c,t.children)}else !s&&d==null&&ne(c,t,p,m,n,r,o);let g=o&&t.type!==`foreignObject`;d?E(e.dynamicChildren,d,c,n,r,g):s||j(e,t,c,null,n,r,g),((h=m.onVnodeUpdated)||f)&&V(()=>{h&&H(h,n,t,e),f&&ia(t,e,n,`updated`)},r)},E=(e,t,n,r,i,a)=>{for(let o=0;o<t.length;o++){let s=e[o],c=t[o];g(s,c,s.type===z||!Zr(s,c)||s.shapeFlag&6||s.shapeFlag&64?d(s.el):n,null,r,i,a,!0)}},ne=(e,t,n,r,o,s,c)=>{if(n!==r){for(let l in r){if(he(l))continue;let u=r[l],d=n[l];(u!==d||a&&a(e,l))&&i(e,l,d,u,c,t.children,o,s,ue)}if(n!==w)for(let a in n)!he(a)&&!(a in r)&&i(e,a,n[a],null,c,t.children,o,s,ue)}},D=(e,t,r,i,a,o,c,l)=>{let u=t.el=e?e.el:s(``),d=t.anchor=e?e.anchor:s(``),{patchFlag:f,dynamicChildren:p}=t;f>0&&(l=!0),e==null?(n(u,r,i),n(d,r,i),C(t.children,r,d,a,o,c,l)):f>0&&f&64&&p?(E(e.dynamicChildren,p,r,a,o,c),(t.key!=null||a&&t===a.subTree)&&fe(e,t,!0)):j(e,t,r,d,a,o,c,l)},re=(e,t,n,r,i,a,o,s)=>{e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,s):O(t,n,r,i,a,o,s):ie(e,t,s)},O=(e,t,n,r,i,a,o)=>{let s=e.component=Ua(e,r,i);if(Bi(e)&&(s.ctx.renderer=me),qa(s),s.asyncDep){i&&i.registerDep(s,ae),e.el||v(null,s.subTree=B(Vr),t,n);return}ae(s,e,t,n,i,a,o)},ie=(e,t,n)=>{let r=t.component=e.component;if(rr(e,t,n))if(r.asyncDep&&!r.asyncResolved){k(r,t,n);return}else r.next=t,Mn(r.update),r.update();else t.component=e.component,t.el=e.el,r.vnode=t},ae=(e,t,n,r,i,a,o)=>{e.update=Pe(function(){if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e,l=t,u;t?k(e,t,o):t=c,t.el=c.el,n&&Ce(n),(u=t.props&&t.props.onVnodeBeforeUpdate)&&H(u,s,t,c);let f=$n(e),p=e.subTree;e.subTree=f,e.refs!==w&&(e.refs={}),g(p,f,d(p.el),de(p),e,i,a),t.el=f.el,l===null&&ar(e,f.el),r&&V(r,i),(u=t.props&&t.props.onVnodeUpdated)&&V(()=>{H(u,s,t,c)},i),__VUE_PROD_DEVTOOLS__&&Gn(e)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d}=e;l&&Ce(l),(o=c&&c.onVnodeBeforeMount)&&H(o,d,t);let f=e.subTree=$n(e);s&&_e?_e(t.el,f,e,i):(g(null,f,n,r,e,i,a),t.el=f.el),u&&V(u,i),(o=c&&c.onVnodeMounted)&&V(()=>{H(o,d,t)},i);let{a:p}=e;p&&t.shapeFlag&256&&V(p,i),e.isMounted=!0}},pa)},k=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,fi(e,t.props,r,n),na(e,t.children),In(void 0,e.update)},j=(e,t,n,r,i,a,o,s=!1)=>{let c=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(f&128){se(c,d,n,r,i,a,o,s);return}else if(f&256){oe(c,d,n,r,i,a,o,s);return}}p&8?(l&16&&ue(c,i,a),d!==c&&u(n,d)):l&16?p&16?se(c,d,n,r,i,a,o,s):ue(c,i,a,!0):(l&8&&u(n,``),p&16&&C(d,n,r,i,a,o,s))},oe=(e,t,n,r,i,a,o,s)=>{e||=te,t||=te;let c=e.length,l=t.length,u=Math.min(c,l),d;for(d=0;d<u;d++){let r=t[d]=s?ci(t[d]):si(t[d]);g(e[d],r,n,null,i,a,o,s)}c>l?ue(e,i,a,!0,u):C(t,n,r,i,a,o,s,u)},se=(e,t,n,r,i,a,o,s)=>{let c=0,l=t.length,u=e.length-1,d=l-1;for(;c<=u&&c<=d;){let r=e[c],l=t[c]=s?ci(t[c]):si(t[c]);if(Zr(r,l))g(r,l,n,null,i,a,o,s);else break;c++}for(;c<=u&&c<=d;){let r=e[u],c=t[d]=s?ci(t[d]):si(t[d]);if(Zr(r,c))g(r,c,n,null,i,a,o,s);else break;u--,d--}if(c>u){if(c<=d){let e=d+1,u=e<l?t[e].el:r;for(;c<=d;)g(null,t[c]=s?ci(t[c]):si(t[c]),n,u,i,a,o),c++}}else if(c>d)for(;c<=u;)N(e[c],i,a,!0),c++;else{let f=c,p=c,m=new Map;for(c=p;c<=d;c++){let e=t[c]=s?ci(t[c]):si(t[c]);e.key!=null&&m.set(e.key,c)}let h,_=0,v=d-p+1,y=!1,b=0,x=Array(v);for(c=0;c<v;c++)x[c]=0;for(c=f;c<=u;c++){let r=e[c];if(_>=v){N(r,i,a,!0);continue}let l;if(r.key!=null)l=m.get(r.key);else for(h=p;h<=d;h++)if(x[h-p]===0&&Zr(r,t[h])){l=h;break}l===void 0?N(r,i,a,!0):(x[l-p]=c+1,l>=b?b=l:y=!0,g(r,t[l],n,null,i,a,o,s),_++)}let S=y?va(x):te;for(h=S.length-1,c=v-1;c>=0;c--){let e=p+c,s=t[e],u=e+1<l?t[e+1].el:r;x[c]===0?g(null,s,n,u,i,a,o):y&&(h<0||c!==S[h]?M(s,n,u,2):h--)}}},M=(e,t,r,i,a=null)=>{let{el:o,type:s,transition:c,children:l,shapeFlag:u}=e;if(u&6){M(e.component.subTree,t,r,i);return}if(u&128){e.suspense.move(t,r,i);return}if(u&64){s.move(e,t,r,me);return}if(s===z){n(o,t,r);for(let e=0;e<l.length;e++)M(l[e],t,r,i);n(e.anchor,t,r);return}if(i!==2&&u&1&&c)if(i===0)c.beforeEnter(o),n(o,t,r),V(()=>c.enter(o),a);else{let{leave:e,delayLeave:i,afterLeave:a}=c,s=()=>n(o,t,r),l=()=>{e(o,()=>{s(),a&&a()})};i?i(o,s,l):l()}else n(o,t,r)},N=(e,t,n,r=!1)=>{let{type:i,props:a,ref:o,children:s,dynamicChildren:c,shapeFlag:l,patchFlag:u,dirs:d}=e;if(o!=null&&t&&ma(o,null,t,n,null),l&256){t.ctx.deactivate(e);return}let f=l&1&&d,p;if((p=a&&a.onVnodeBeforeUnmount)&&H(p,t,e),l&6)le(e.component,n,r);else{if(l&128){e.suspense.unmount(n,r);return}f&&ia(e,null,t,`beforeUnmount`),c&&(i!==z||u>0&&u&64)?ue(c,t,n):l&16&&ue(s,t,n),l&64&&e.type.remove(e,me),r&&ce(e)}((p=a&&a.onVnodeUnmounted)||f)&&V(()=>{p&&H(p,t,e),f&&ia(e,null,t,`unmounted`)},n)},ce=e=>{let{type:t,el:n,anchor:i,transition:a}=e;if(t===z){P(n,i);return}let o=()=>{r(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},P=(e,t)=>{let n;for(;e!==t;)n=f(e),r(e),e=n;r(t)},le=(e,t,n)=>{let{bum:r,effects:i,update:a,subTree:o,um:s}=e;if(r&&Ce(r),i)for(let e=0;e<i.length;e++)Fe(i[e]);a&&(Fe(a),N(o,e,t,n)),s&&V(s,t),V(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,t.deps===0&&t.resolve()),__VUE_PROD_DEVTOOLS__&&Kn(e)},ue=(e,t,n,r=!1,i=0)=>{for(let a=i;a<e.length;a++)N(e[a],t,n,r)},de=e=>e.shapeFlag&6?de(e.component.subTree):e.shapeFlag&128?e.suspense.next():f(e.anchor||e.el),fe=(e,t,n=!1)=>{let r=e.children,i=t.children;if(A(r)&&A(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e]=ci(i[e]);a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a.el=t.el),n||fe(t,a))}},pe=(e,t)=>{e==null?t._vnode&&N(t._vnode,null,null,!0):g(t._vnode||null,e,t),Ln(),t._vnode=e},me={p:g,um:N,m:M,r:ce,mt:O,mc:C,pc:j,pbc:E,n:de,o:e},ge,_e;return t&&([ge,_e]=t(me)),{render:pe,hydrate:ge,createApp:sa(pe,ge)}}function H(e,t,n,r=null){pn(e,t,7,[n,r])}function va(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=(a+o)/2|0,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function ya(e,t){return Sa(e,null,t)}var ba={};function xa(e,t,n){return Sa(e,t,n)}function Sa(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=w,s=U){let c,l=L(e);if(l?c=()=>e.value:Rt(e)?(c=()=>e,r=!0):c=A(e)?()=>e.map(e=>{if(L(e))return e.value;if(Rt(e))return wa(e);if(M(e))return fn(e,s,2)}):M(e)?t?()=>fn(e,s,2):()=>{if(!(s&&s.isUnmounted))return u&&u(),fn(e,s,3,[d])}:T,t&&r){let e=c;c=()=>wa(e())}let u,d=e=>{u=h.options.onStop=()=>{fn(e,s,4)}},f=A(e)?[]:ba,p=()=>{if(h.active)if(t){let e=h();(r||l||Se(e,f))&&(u&&u(),pn(t,s,3,[e,f===ba?void 0:f,d]),f=e)}else h()};p.allowRecurse=!!t;let m;m=i===`sync`?p:i===`post`?()=>V(p,s&&s.suspense):()=>{!s||s.isMounted?Pn(p):p()};let h=Pe(c,{lazy:!0,onTrack:a,onTrigger:o,scheduler:m});return eo(h),t?n?p():f=h():i===`post`?V(h,s&&s.suspense):h(),()=>{Fe(h),s&&ie(s.effects,h)}}function Ca(e,t,n){let r=this.proxy;return Sa(N(e)?()=>r[e]:e.bind(r),t.bind(r),n,this)}function wa(e,t=new Set){if(!P(e)||t.has(e))return e;if(t.add(e),L(e))wa(e.value,t);else if(A(e))for(let n=0;n<e.length;n++)wa(e[n],t);else if(j(e))e.forEach((n,r)=>{wa(e.get(r),t)});else if(oe(e))e.forEach(e=>{wa(e,t)});else for(let n in e)wa(e[n],t);return e}function Ta(e,t){if(U){let n=U.provides,r=U.parent&&U.parent.provides;r===n&&(n=U.provides=Object.create(r)),n[e]=t}}function Ea(e,t,n=!1){let r=U||R;if(r){let i=r.provides;if(e in i)return i[e];if(arguments.length>1)return n&&M(t)?t():t}}var Da=!1;function Oa(e,t,n=[],r=[],i=!1){let{mixins:a,extends:o,data:s,computed:c,methods:l,watch:u,provide:d,inject:f,components:p,directives:m,beforeMount:h,mounted:g,beforeUpdate:_,updated:v,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:ee,render:w,renderTracked:te,renderTriggered:E,errorCaptured:ne}=t,D=e.proxy,re=e.ctx,ie=e.appContext.mixins;if(i&&w&&e.render===T&&(e.render=w),i||(Da=!0,ka(`beforeCreate`,t,D,ie),Da=!1,Ma(e,ie,n,r)),o&&Oa(e,o,n,r,!0),a&&Ma(e,a,n,r),f)if(A(f))for(let e=0;e<f.length;e++){let t=f[e];re[t]=Ea(t)}else for(let e in f){let t=f[e];P(t)?re[e]=Ea(t.from||e,t.default,!0):re[e]=Ea(t)}if(l)for(let e in l){let t=l[e];M(t)&&(re[e]=t.bind(D))}if(i?s&&n.push(s):(n.length&&n.forEach(t=>Na(e,t,D)),s&&Na(e,s,D)),c)for(let e in c){let t=c[e],n=ao({get:M(t)?t.bind(D,D):M(t.get)?t.get.bind(D,D):T,set:!M(t)&&M(t.set)?t.set.bind(D):T});Object.defineProperty(re,e,{enumerable:!0,configurable:!0,get:()=>n.value,set:e=>n.value=e})}if(u&&r.push(u),!i&&r.length&&r.forEach(e=>{for(let t in e)Pa(e[t],re,D,t)}),d){let e=M(d)?d.call(D):d;for(let t in e)Ta(t,e[t])}i&&(p&&O(e.components||=O({},e.type.components),p),m&&O(e.directives||=O({},e.type.directives),m)),i||ka(`created`,t,D,ie),h&&Si(h.bind(D)),g&&Ci(g.bind(D)),_&&wi(_.bind(D)),v&&Ti(v.bind(D)),y&&Wi(y.bind(D)),b&&Gi(b.bind(D)),ne&&Ai(ne.bind(D)),te&&ki(te.bind(D)),E&&Oi(E.bind(D)),S&&Ei(S.bind(D)),ee&&Di(ee.bind(D))}function ka(e,t,n,r){ja(e,r,n);let{extends:i,mixins:a}=t;i&&Aa(e,i,n),a&&ja(e,a,n);let o=t[e];o&&o.call(n)}function Aa(e,t,n){t.extends&&Aa(e,t.extends,n);let r=t[e];r&&r.call(n)}function ja(e,t,n){for(let r=0;r<t.length;r++){let i=t[r].mixins;i&&ja(e,i,n);let a=t[r][e];a&&a.call(n)}}function Ma(e,t,n,r){for(let i=0;i<t.length;i++)Oa(e,t[i],n,r,!0)}function Na(e,t,n){let r=t.call(n,n);P(r)&&(e.data===w?e.data=Nt(r):O(e.data,r))}function Pa(e,t,n,r){let i=r.includes(`.`)?Fa(n,r):()=>n[r];if(N(e)){let n=t[e];M(n)&&xa(i,n)}else if(M(e))xa(i,e.bind(n));else if(P(e))if(A(e))e.forEach(e=>Pa(e,t,n,r));else{let r=M(e.handler)?e.handler.bind(n):t[e.handler];M(r)&&xa(i,r,e)}}function Fa(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Ia(e){let t=e.type,{__merged:n,mixins:r,extends:i}=t;if(n)return n;let a=e.appContext.mixins;if(!a.length&&!r&&!i)return t;let o={};return a.forEach(t=>La(o,t,e)),La(o,t,e),t.__merged=o}function La(e,t,n){let r=n.appContext.config.optionMergeStrategies,{mixins:i,extends:a}=t;a&&La(e,a,n),i&&i.forEach(t=>La(e,t,n));for(let i in t)r&&k(r,i)?e[i]=r[i](e[i],t[i],n.proxy,i):e[i]=t[i]}var Ra=O(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>e.parent&&e.parent.proxy,$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?Ia(e):e.type,$forceUpdate:e=>()=>An(e.update),$nextTick:()=>kn,$watch:e=>__VUE_OPTIONS_API__?Ca.bind(e):T}),za={get({_:e},t){let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t===`__v_skip`)return!0;let l;if(t[0]!==`$`){let s=o[t];if(s!==void 0)switch(s){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return a[t]}else if(r!==w&&k(r,t))return o[t]=0,r[t];else if(i!==w&&k(i,t))return o[t]=1,i[t];else if((l=e.propsOptions[0])&&k(l,t))return o[t]=2,a[t];else if(n!==w&&k(n,t))return o[t]=3,n[t];else (!__VUE_OPTIONS_API__||!Da)&&(o[t]=4)}let u=Ra[t],d,f;if(u)return t===`$attrs`&&F(e,`get`,t),u(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==w&&k(n,t))return o[t]=3,n[t];if(f=c.config.globalProperties,k(f,t))return f[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;if(i!==w&&k(i,t))i[t]=n;else if(r!==w&&k(r,t))r[t]=n;else if(t in e.props)return!1;return t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return n[o]!==void 0||e!==w&&k(e,o)||t!==w&&k(t,o)||(s=a[0])&&k(s,o)||k(r,o)||k(Ra,o)||k(i.config.globalProperties,o)}},Ba=O({},za,{get(e,t){if(t!==Symbol.unscopables)return za.get(e,t,e)},has(e,t){return t[0]!==`_`&&!a(t)}}),Va=aa(),Ha=0;function Ua(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||Va,a={uid:Ha++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,render:null,proxy:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hi(r,i),emitsOptions:Xn(r,i),emit:null,emitted:null,ctx:w,data:w,props:w,attrs:w,slots:w,refs:w,setupState:w,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Yn.bind(null,a),__VUE_PROD_DEVTOOLS__&&Wn(a),a}var U=null,Wa=()=>U||R,Ga=e=>{U=e},Ka=!1;function qa(e,t=!1){Ka=t;let{props:n,children:r,shapeFlag:i}=e.vnode,a=i&4;di(e,n,a,t),ta(e,r);let o=a?Ja(e,t):void 0;return Ka=!1,o}function Ja(e,t){let n=e.type;e.accessCache={},e.proxy=new Proxy(e.ctx,za);let{setup:r}=n;if(r){let n=e.setupContext=r.length>1?$a(e):null;U=e,Ve();let i=fn(r,e,0,[e.props,n]);if(Ue(),U=null,le(i)){if(t)return i.then(t=>{Ya(e,t)});e.asyncDep=i}else Ya(e,i)}else Qa(e)}function Ya(e,t,n){M(t)?e.render=t:P(t)&&(__VUE_PROD_DEVTOOLS__&&(e.devtoolsRawSetupState=t),e.setupState=Xt(t)),Qa(e)}var Xa;function Za(e){Xa=e}function Qa(e,t){let n=e.type;e.render||(Xa&&n.template&&!n.render&&(n.render=Xa(n.template,{isCustomElement:e.appContext.config.isCustomElement,delimiters:n.delimiters})),e.render=n.render||T,e.render._rc&&(e.withProxy=new Proxy(e.ctx,Ba))),__VUE_OPTIONS_API__&&(U=e,Oa(e,n),U=null)}function $a(e){return{attrs:e.attrs,slots:e.slots,emit:e.emit}}function eo(e){U&&(U.effects||=[]).push(e)}var to=/(?:^|[-_])(\w)/g,no=e=>e.replace(to,e=>e.toUpperCase()).replace(/[-_]/g,``);function ro(e,t,n=!1){let r=M(t)&&t.displayName||t.name;if(!r&&t.__file){let e=t.__file.match(/([^/\\]+)\.vue$/);e&&(r=e[1])}if(!r&&e&&e.parent){let n=e=>{for(let n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?no(r):n?`App`:`Anonymous`}function io(e){return M(e)&&`__vccOpts`in e}function ao(e){let t=rn(e);return eo(t.effect),t}function oo(e){return M(e)?{setup:e,name:e.name}:e}function so(e){M(e)&&(e={loader:e});let{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,timeout:a,suspensible:o=!0,onError:s}=e,c=null,l,u=0,d=()=>(u++,c=null,f()),f=()=>{let e;return c||(e=c=t().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),s)return new Promise((t,n)=>{s(e,()=>t(d()),()=>n(e),u+1)});throw e}).then(t=>e!==c&&c?c:(t&&(t.__esModule||t[Symbol.toStringTag]===`Module`)&&(t=t.default),l=t,t)))};return oo({__asyncLoader:f,name:`AsyncComponentWrapper`,setup(){let e=U;if(l)return()=>co(l,e);let t=t=>{c=null,mn(t,e,13,!r)};if(o&&e.suspense)return f().then(t=>()=>co(t,e)).catch(e=>(t(e),()=>r?B(r,{error:e}):null));let s=Ut(!1),u=Ut(),d=Ut(!!i);return i&&setTimeout(()=>{d.value=!1},i),a!=null&&setTimeout(()=>{if(!s.value&&!u.value){let e=Error(`Async component timed out after ${a}ms.`);t(e),u.value=e}},a),f().then(()=>{s.value=!0}).catch(e=>{t(e),u.value=e}),()=>{if(s.value&&l)return co(l,e);if(u.value&&r)return B(r,{error:u.value});if(n&&!d.value)return B(n)}}})}function co(e,{vnode:{props:t,children:n}}){return B(e,t,n)}function lo(e,t,n){let r=arguments.length;return r===2?P(t)&&!A(t)?Xr(t)?B(e,null,[t]):B(e,t):B(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xr(n)&&(n=[n]),B(e,t,n))}var uo=Symbol(``),fo=()=>{{let e=Ea(uo);return e||on(`Server rendering context not provided. Make sure to only call useSsrContext() conditionally in the server build.`),e}};function po(e,t){let n;if(A(e)||N(e)){n=Array(e.length);for(let r=0,i=e.length;r<i;r++)n[r]=t(e[r],r)}else if(typeof e==`number`){n=Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(P(e))if(e[Symbol.iterator])n=Array.from(e,t);else{let r=Object.keys(e);n=Array(r.length);for(let i=0,a=r.length;i<a;i++){let a=r[i];n[i]=t(e[a],a,i)}}else n=[];return n}function mo(e){let t={};for(let n in e)t[`on${xe(n)}`]=e[n];return t}function ho(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(A(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.fn)}return e}var go=`3.0.0`,_o=n({BaseTransition:()=>Ni,Comment:()=>Vr,Fragment:()=>z,KeepAlive:()=>Vi,Static:()=>Hr,Suspense:()=>sr,Teleport:()=>jr,Text:()=>Br,Transition:()=>es,TransitionGroup:()=>gs,callWithAsyncErrorHandling:()=>pn,callWithErrorHandling:()=>fn,camelize:()=>ve,capitalize:()=>xe,cloneVNode:()=>ri,computed:()=>ao,createApp:()=>Xs,createBlock:()=>Yr,createCommentVNode:()=>oi,createHydrationRenderer:()=>ga,createRenderer:()=>ha,createSSRApp:()=>Zs,createSlots:()=>ho,createStaticVNode:()=>ai,createTextVNode:()=>ii,createVNode:()=>B,customRef:()=>Qt,defineAsyncComponent:()=>so,defineComponent:()=>oo,devtools:()=>Bn,getCurrentInstance:()=>Wa,getTransitionRawChildren:()=>zi,h:()=>lo,handleError:()=>mn,hydrate:()=>Ys,inject:()=>Ea,isProxy:()=>Bt,isReactive:()=>Rt,isReadonly:()=>zt,isRef:()=>L,isVNode:()=>Xr,markRaw:()=>Vt,mergeProps:()=>ui,nextTick:()=>kn,onActivated:()=>Wi,onBeforeMount:()=>Si,onBeforeUnmount:()=>Ei,onBeforeUpdate:()=>wi,onDeactivated:()=>Gi,onErrorCaptured:()=>Ai,onMounted:()=>Ci,onRenderTracked:()=>ki,onRenderTriggered:()=>Oi,onUnmounted:()=>Di,onUpdated:()=>Ti,openBlock:()=>Gr,popScopeId:()=>Cr,provide:()=>Ta,proxyRefs:()=>Xt,pushScopeId:()=>Sr,queuePostFlushCb:()=>Fn,reactive:()=>Nt,readonly:()=>Ft,ref:()=>Ut,registerRuntimeCompiler:()=>Za,render:()=>Js,renderList:()=>po,renderSlot:()=>vr,resolveComponent:()=>Pr,resolveDirective:()=>Lr,resolveDynamicComponent:()=>Ir,resolveTransitionHooks:()=>Fi,setBlockTracking:()=>Jr,setDevtoolsHook:()=>Vn,setTransitionHooks:()=>Ri,shallowReactive:()=>Pt,shallowReadonly:()=>It,shallowRef:()=>Wt,ssrContextKey:()=>uo,ssrUtils:()=>null,toDisplayString:()=>C,toHandlers:()=>mo,toRaw:()=>I,toRef:()=>tn,toRefs:()=>$t,transformVNodeArgs:()=>Qr,triggerRef:()=>qt,unref:()=>Jt,useCssModule:()=>Yo,useCssVars:()=>Xo,useSSRContext:()=>fo,useTransitionState:()=>ji,vModelCheckbox:()=>Ds,vModelDynamic:()=>Ps,vModelRadio:()=>ks,vModelSelect:()=>As,vModelText:()=>Es,vShow:()=>Vs,version:()=>go,warn:()=>on,watch:()=>xa,watchEffect:()=>ya,withCtx:()=>yr,withDirectives:()=>ra,withKeys:()=>Bs,withModifiers:()=>Rs,withScopeId:()=>wr}),vo=`http://www.w3.org/2000/svg`,yo=typeof document<`u`?document:null,bo,xo,So={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n)=>t?yo.createElementNS(vo,e):yo.createElement(e,n?{is:n}:void 0),createText:e=>yo.createTextNode(e),createComment:e=>yo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},cloneNode(e){return e.cloneNode(!0)},insertStaticContent(e,t,n,r){let i=r?xo||=yo.createElementNS(vo,`svg`):bo||=yo.createElement(`div`);i.innerHTML=e;let a=i.firstChild,o=a,s=o;for(;o;)s=o,So.insert(o,t,n),o=i.firstChild;return[a,s]}};function Co(e,t,n){if(t??=``,n)e.setAttribute(`class`,t);else{let n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(` `)),e.className=t}}function wo(e,t,n){let r=e.style;if(!n)e.removeAttribute(`style`);else if(N(n))t!==n&&(r.cssText=n);else{for(let e in n)Eo(r,e,n[e]);if(t&&!N(t))for(let e in t)n[e]??Eo(r,e,``)}}var To=/\s*!important$/;function Eo(e,t,n){if(A(n))n.forEach(n=>Eo(e,t,n));else if(t.startsWith(`--`))e.setProperty(t,n);else{let r=ko(e,t);To.test(n)?e.setProperty(be(r),n.replace(To,``),`important`):e[r]=n}}var Do=[`Webkit`,`Moz`,`ms`],Oo={};function ko(e,t){let n=Oo[t];if(n)return n;let r=ve(t);if(r!==`filter`&&r in e)return Oo[t]=r;r=xe(r);for(let n=0;n<Do.length;n++){let i=Do[n]+r;if(i in e)return Oo[t]=i}return t}var Ao=`http://www.w3.org/1999/xlink`;function jo(e,t,n,r){if(r&&t.startsWith(`xlink:`))n==null?e.removeAttributeNS(Ao,t.slice(6,t.length)):e.setAttributeNS(Ao,t,n);else{let r=s(t);n==null||r&&n===!1?e.removeAttribute(t):e.setAttribute(t,r?``:n)}}function Mo(e,t,n,r,i,a,o){if(t===`innerHTML`||t===`textContent`){r&&o(r,i,a),e[t]=n??``;return}if(t===`value`&&e.tagName!==`PROGRESS`){e._value=n;let t=n??``;e.value!==t&&(e.value=t);return}if(n===``&&typeof e[t]==`boolean`)e[t]=!0;else if(n==null&&typeof e[t]==`string`)e[t]=``,e.removeAttribute(t);else try{e[t]=n}catch{}}var No=Date.now;typeof document<`u`&&No()>document.createEvent(`Event`).timeStamp&&(No=()=>performance.now());var Po=0,Fo=Promise.resolve(),Io=()=>{Po=0},Lo=()=>Po||=(Fo.then(Io),No());function Ro(e,t,n,r){e.addEventListener(t,n,r)}function zo(e,t,n,r){e.removeEventListener(t,n,r)}function Bo(e,t,n,r,i=null){let a=e._vei||={},o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ho(t);r?Ro(e,n,a[t]=Uo(r,i),s):o&&(zo(e,n,o,s),a[t]=void 0)}}var Vo=/(?:Once|Passive|Capture)$/;function Ho(e){let t;if(Vo.test(e)){t={};let n;for(;n=e.match(Vo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e.slice(2).toLowerCase(),t]}function Uo(e,t){let n=e=>{(e.timeStamp||No())>=n.attached-1&&pn(Wo(e,n.value),t,5,[e])};return n.value=e,n.attached=Lo(),n}function Wo(e,t){if(A(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}else return t}var Go=/^on[a-z]/,Ko=(e,t)=>t===`value`,qo=(e,t,n,r,i=!1,a,o,s,c)=>{switch(t){case`class`:Co(e,r,i);break;case`style`:wo(e,n,r);break;default:D(t)?re(t)||Bo(e,t,n,r,o):Jo(e,t,r,i)?Mo(e,t,r,a,o,s,c):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),jo(e,t,r,i));break}};function Jo(e,t,n,r){return r?!!(t===`innerHTML`||t in e&&Go.test(t)&&M(n)):t===`spellcheck`||t===`draggable`||t===`form`&&typeof n==`string`||t===`list`&&e.tagName===`INPUT`||Go.test(t)&&N(n)?!1:t in e}function Yo(e=`$style`){{let t=Wa();if(!t)return w;let n=t.type.__cssModules;return n&&n[e]||w}}function Xo(e,t=!1){let n=Wa();if(!n)return;let r=t&&n.type.__scopeId?`${n.type.__scopeId.replace(/^data-v-/,``)}-`:``;Ci(()=>{ya(()=>{Zo(n.subTree,e(n.proxy),r)})})}function Zo(e,t,n){if(e.shapeFlag&128){let r=e.suspense;e=r.activeBranch,r.pendingBranch&&!r.isHydrating&&r.effects.push(()=>{Zo(r.activeBranch,t,n)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el){let r=e.el.style;for(let e in t)r.setProperty(`--${n}${e}`,Jt(t[e]))}else e.type===z&&e.children.forEach(e=>Zo(e,t,n))}var Qo=`transition`,$o=`animation`,es=(e,{slots:t})=>lo(Ni,rs(e),t);es.displayName=`Transition`;var ts={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ns=es.props=O({},Ni.props,ts);function rs(e){let{name:t=`v`,type:n,css:r=!0,duration:i,enterFromClass:a=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=e,m={};for(let t in e)t in ts||(m[t]=e[t]);if(!r)return m;let h=is(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:ee=y,onAppearCancelled:w=b}=m,te=(e,t,n)=>{ss(e,t?u:s),ss(e,t?l:o),n&&n()},T=(e,t)=>{ss(e,p),ss(e,f),t&&t()},E=e=>(t,r)=>{let i=e?ee:y,o=()=>te(t,e,r);i&&i(t,o),cs(()=>{ss(t,e?c:a),os(t,e?u:s),i&&i.length>1||(g?setTimeout(o,g):ls(t,n,o))})};return O(m,{onBeforeEnter(e){v&&v(e),os(e,o),os(e,a)},onBeforeAppear(e){C&&C(e),os(e,l),os(e,c)},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){let r=()=>T(e,t);os(e,f),os(e,d),cs(()=>{ss(e,d),os(e,p),x&&x.length>1||(_?setTimeout(r,_):ls(e,n,r))}),x&&x(e,r)},onEnterCancelled(e){te(e,!1),b&&b(e)},onAppearCancelled(e){te(e,!0),w&&w(e)},onLeaveCancelled(e){T(e),S&&S(e)}})}function is(e){if(e==null)return null;if(P(e))return[as(e.enter),as(e.leave)];{let t=as(e);return[t,t]}}function as(e){return Te(e)}function os(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||=new Set).add(t)}function ss(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function cs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}function ls(e,t,n){let{type:r,timeout:i,propCount:a}=us(e,t);if(!r)return n();let o=r+`end`,s=0,c=()=>{e.removeEventListener(o,l),n()},l=t=>{t.target===e&&++s>=a&&c()};setTimeout(()=>{s<a&&c()},i+1),e.addEventListener(o,l)}function us(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(Qo+`Delay`),a=r(Qo+`Duration`),o=ds(i,a),s=r($o+`Delay`),c=r($o+`Duration`),l=ds(s,c),u=null,d=0,f=0;t===Qo?o>0&&(u=Qo,d=o,f=a.length):t===$o?l>0&&(u=$o,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Qo:$o:null,f=u?u===Qo?a.length:c.length:0);let p=u===Qo&&/\b(transform|all)(,|$)/.test(n[Qo+`Property`]);return{type:u,timeout:d,propCount:f,hasTransform:p}}function ds(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>fs(t)+fs(e[n])))}function fs(e){return Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function ps(e){return e&&ps(e.__v_raw)||e}var ms=new WeakMap,hs=new WeakMap,gs={name:`TransitionGroup`,props:O({},ns,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=Wa(),r=ji(),i,a;return Ti(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!xs(i[0].el,n.vnode.el,t))return;i.forEach(_s),i.forEach(vs);let r=i.filter(ys);bs(),r.forEach(e=>{let n=e.el,r=n.style;os(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n._moveCb=e=>{e&&e.target!==n||(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener(`transitionend`,i),n._moveCb=null,ss(n,t))};n.addEventListener(`transitionend`,i)})}),()=>{let o=ps(e),s=rs(o),c=o.tag||z;i=a,a=t.default?zi(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&Ri(t,Fi(t,s,r,n))}if(i)for(let e=0;e<i.length;e++){let t=i[e];Ri(t,Fi(t,s,r,n)),ms.set(t,t.el.getBoundingClientRect())}return B(c,null,a)}}};function _s(e){let t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function vs(e){hs.set(e,e.el.getBoundingClientRect())}function ys(e){let t=ms.get(e),n=hs.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration=`0s`,e}}function bs(){return document.body.offsetHeight}function xs(e,t,n){let r=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let i=t.nodeType===1?t:t.parentNode;i.appendChild(r);let{hasTransform:a}=us(r);return i.removeChild(r),a}var Ss=e=>{let t=e.props[`onUpdate:modelValue`];return A(t)?e=>Ce(t,e):t};function Cs(e){e.target.composing=!0}function ws(e){let t=e.target;t.composing&&(t.composing=!1,Ts(t,`input`))}function Ts(e,t){let n=document.createEvent(`HTMLEvents`);n.initEvent(t,!0,!0),e.dispatchEvent(n)}var Es={created(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){e.value=t??``,e._assign=Ss(a);let o=i||e.type===`number`;Ro(e,n?`change`:`input`,t=>{if(t.target.composing)return;let n=e.value;r?n=n.trim():o&&(n=Te(n)),e._assign(n)}),r&&Ro(e,`change`,()=>{e.value=e.value.trim()}),n||(Ro(e,`compositionstart`,Cs),Ro(e,`compositionend`,ws),Ro(e,`change`,ws))},beforeUpdate(e,{value:t,modifiers:{trim:n,number:r}},i){if(e._assign=Ss(i),document.activeElement===e&&(n&&e.value.trim()===t||(r||e.type===`number`)&&Te(e.value)===t))return;let a=t??``;e.value!==a&&(e.value=a)}},Ds={created(e,t,n){Os(e,t,n),e._assign=Ss(n),Ro(e,`change`,()=>{let t=e._modelValue,n=Ms(e),r=e.checked,i=e._assign;if(A(t)){let e=x(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(oe(t)){let e=t.has(n);r&&!e?i(t.add(n)):!r&&e&&(t.delete(n),i(t))}else i(Ns(e,r))})},beforeUpdate(e,t,n){e._assign=Ss(n),Os(e,t,n)}};function Os(e,{value:t,oldValue:n},r){e._modelValue=t,A(t)?e.checked=x(t,r.props.value)>-1:oe(t)?e.checked=S(t,r.props.value):t!==n&&(e.checked=b(t,Ns(e,!0)))}var ks={created(e,{value:t},n){e.checked=b(t,n.props.value),e._assign=Ss(n),Ro(e,`change`,()=>{e._assign(Ms(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Ss(r),t!==n&&(e.checked=b(t,r.props.value))}},As={created(e,t,n){Ro(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(Ms);e._assign(e.multiple?t:t[0])}),e._assign=Ss(n)},mounted(e,{value:t}){js(e,t)},beforeUpdate(e,t,n){e._assign=Ss(n)},updated(e,{value:t}){js(e,t)}};function js(e,t){let n=e.multiple;if(!(n&&!A(t)&&!oe(t))){for(let r=0,i=e.options.length;r<i;r++){let i=e.options[r],a=Ms(i);if(n)A(t)?i.selected=x(t,a)>-1:i.selected=S(t,a);else if(b(Ms(i),t)){e.selectedIndex=r;return}}n||(e.selectedIndex=-1)}}function Ms(e){return`_value`in e?e._value:e.value}function Ns(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Ps={created(e,t,n){Fs(e,t,n,null,`created`)},mounted(e,t,n){Fs(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){Fs(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){Fs(e,t,n,r,`updated`)}};function Fs(e,t,n,r,i){let a;switch(e.tagName){case`SELECT`:a=As;break;case`TEXTAREA`:a=Es;break;default:switch(n.props&&n.props.type){case`checkbox`:a=Ds;break;case`radio`:a=ks;break;default:a=Es}}let o=a[i];o&&o(e,t,n,r)}var Is=[`ctrl`,`shift`,`alt`,`meta`],Ls={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Is.some(n=>e[`${n}Key`]&&!t.includes(n))},Rs=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){let r=Ls[t[e]];if(r&&r(n,t))return}return e(n,...r)},zs={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Bs=(e,t)=>n=>{if(!(`key`in n))return;let r=be(n.key);if(t.some(e=>e===r||zs[e]===r))return e(n)},Vs={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Hs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Hs(e,!0),r.enter(e)):r.leave(e,()=>{Hs(e,!1)}):Hs(e,t))},beforeUnmount(e,{value:t}){Hs(e,t)}};function Hs(e,t){e.style.display=t?e._vod:`none`}var Us=O({patchProp:qo,forcePatchProp:Ko},So),Ws,Gs=!1;function Ks(){return Ws||=ha(Us)}function qs(){return Ws=Gs?Ws:ga(Us),Gs=!0,Ws}var Js=((...e)=>{Ks().render(...e)}),Ys=((...e)=>{qs().hydrate(...e)}),Xs=((...e)=>{let t=Ks().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Qs(e);if(!r)return;let i=t._component;!M(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML=``;let a=n(r);return r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``),a},t}),Zs=((...e)=>{let t=qs().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=Qs(e);if(t)return n(t,!0)},t});function Qs(e){return N(e)?document.querySelector(e):e}t((e=>{Object.defineProperty(e,`__esModule`,{value:!0});function t(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var n=class{constructor(e,t,n){this.line=void 0,this.column=void 0,this.index=void 0,this.line=e,this.column=t,this.index=n}},r=class{constructor(e,t){this.start=void 0,this.end=void 0,this.filename=void 0,this.identifierName=void 0,this.start=e,this.end=t}},i=`BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED`,a={ImportMetaOutsideModule:{message:`import.meta may appear only with 'sourceType: "module"'`,code:i},ImportOutsideModule:{message:`'import' and 'export' may appear only with 'sourceType: "module"'`,code:i}},o={ArrayPattern:`array destructuring pattern`,AssignmentExpression:`assignment expression`,AssignmentPattern:`assignment expression`,ArrowFunctionExpression:`arrow function expression`,ConditionalExpression:`conditional expression`,CatchClause:`catch clause`,ForOfStatement:`for-of statement`,ForInStatement:`for-in statement`,ForStatement:`for-loop`,FormalParameters:`function parameter list`,Identifier:`identifier`,ImportSpecifier:`import specifier`,ImportDefaultSpecifier:`import default specifier`,ImportNamespaceSpecifier:`import namespace specifier`,ObjectPattern:`object destructuring pattern`,ParenthesizedExpression:`parenthesized expression`,RestElement:`rest element`,UpdateExpression:{true:`prefix operation`,false:`postfix operation`},VariableDeclarator:`variable declaration`,YieldExpression:`yield expression`},s=e=>e.type===`UpdateExpression`?o.UpdateExpression[`${e.prefix}`]:o[e.type],c={AccessorIsGenerator:({kind:e})=>`A ${e}ter cannot be a generator.`,ArgumentsInClass:`'arguments' is only allowed in functions and class methods.`,AsyncFunctionInSingleStatementContext:`Async functions can only be declared at the top level or inside a block.`,AwaitBindingIdentifier:`Can not use 'await' as identifier inside an async function.`,AwaitBindingIdentifierInStaticBlock:`Can not use 'await' as identifier inside a static block.`,AwaitExpressionFormalParameter:`'await' is not allowed in async function parameters.`,AwaitUsingNotInAsyncContext:`'await using' is only allowed within async functions and at the top levels of modules.`,AwaitNotInAsyncContext:`'await' is only allowed within async functions and at the top levels of modules.`,BadGetterArity:`A 'get' accessor must not have any formal parameters.`,BadSetterArity:`A 'set' accessor must have exactly one formal parameter.`,BadSetterRestParameter:`A 'set' accessor function argument must not be a rest parameter.`,ConstructorClassField:`Classes may not have a field named 'constructor'.`,ConstructorClassPrivateField:`Classes may not have a private field named '#constructor'.`,ConstructorIsAccessor:`Class constructor may not be an accessor.`,ConstructorIsAsync:`Constructor can't be an async function.`,ConstructorIsGenerator:`Constructor can't be a generator.`,DeclarationMissingInitializer:({kind:e})=>`Missing initializer in ${e} declaration.`,DecoratorArgumentsOutsideParentheses:`Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.`,DecoratorBeforeExport:`Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.`,DecoratorsBeforeAfterExport:`Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.`,DecoratorConstructor:`Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?`,DecoratorExportClass:`Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.`,DecoratorSemicolon:`Decorators must not be followed by a semicolon.`,DecoratorStaticBlock:`Decorators can't be used with a static block.`,DeferImportRequiresNamespace:'Only `import defer * as x from "./module"` is valid.',DeletePrivateField:`Deleting a private field is not allowed.`,DestructureNamedImport:`ES2015 named imports do not destructure. Use another statement for destructuring after the import.`,DuplicateConstructor:`Duplicate constructor in the same class.`,DuplicateDefaultExport:`Only one default export allowed per module.`,DuplicateExport:({exportName:e})=>`\`${e}\` has already been exported. Exported identifiers must be unique.`,DuplicateProto:`Redefinition of __proto__ property.`,DuplicateRegExpFlags:`Duplicate regular expression flag.`,ElementAfterRest:`Rest element must be last element.`,EscapedCharNotAnIdentifier:`Invalid Unicode escape.`,ExportBindingIsString:({localName:e,exportName:t})=>`A string literal cannot be used as an exported binding without \`from\`.\n- Did you mean \`export { '${e}' as '${t}' } from 'some-module'\`?`,ExportDefaultFromAsIdentifier:`'from' is not allowed as an identifier after 'export default'.`,ForInOfLoopInitializer:({type:e})=>`'${e===`ForInStatement`?`for-in`:`for-of`}' loop variable declaration may not have an initializer.`,ForInUsing:`For-in loop may not start with 'using' declaration.`,ForOfAsync:`The left-hand side of a for-of loop may not be 'async'.`,ForOfLet:`The left-hand side of a for-of loop may not start with 'let'.`,GeneratorInSingleStatementContext:`Generators can only be declared at the top level or inside a block.`,IllegalBreakContinue:({type:e})=>`Unsyntactic ${e===`BreakStatement`?`break`:`continue`}.`,IllegalLanguageModeDirective:`Illegal 'use strict' directive in function with non-simple parameter list.`,IllegalReturn:`'return' outside of function.`,ImportAttributesUseAssert:"The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",ImportBindingIsString:({importName:e})=>`A string literal cannot be used as an imported binding.\n- Did you mean \`import { "${e}" as foo }\`?`,ImportCallArity:"`import()` requires exactly one or two arguments.",ImportCallNotNewExpression:`Cannot use new with import(...).`,ImportCallSpreadArgument:"`...` is not allowed in `import()`.",ImportJSONBindingNotDefault:"A JSON module can only be imported with `default`.",ImportReflectionHasAssertion:"`import module x` cannot have assertions.",ImportReflectionNotBinding:'Only `import module x from "./module"` is valid.',IncompatibleRegExpUVFlags:`The 'u' and 'v' regular expression flags cannot be enabled at the same time.`,InvalidBigIntLiteral:`Invalid BigIntLiteral.`,InvalidCodePoint:`Code point out of bounds.`,InvalidCoverDiscardElement:`'void' must be followed by an expression when not used in a binding position.`,InvalidCoverInitializedName:`Invalid shorthand property initializer.`,InvalidDecimal:`Invalid decimal.`,InvalidDigit:({radix:e})=>`Expected number in radix ${e}.`,InvalidEscapeSequence:`Bad character escape sequence.`,InvalidEscapeSequenceTemplate:`Invalid escape sequence in template.`,InvalidEscapedReservedWord:({reservedWord:e})=>`Escape sequence in keyword ${e}.`,InvalidIdentifier:({identifierName:e})=>`Invalid identifier ${e}.`,InvalidLhs:({ancestor:e})=>`Invalid left-hand side in ${s(e)}.`,InvalidLhsBinding:({ancestor:e})=>`Binding invalid left-hand side in ${s(e)}.`,InvalidLhsOptionalChaining:({ancestor:e})=>`Invalid optional chaining in the left-hand side of ${s(e)}.`,InvalidNumber:`Invalid number.`,InvalidOrMissingExponent:`Floating-point numbers require a valid exponent after the 'e'.`,InvalidOrUnexpectedToken:({unexpected:e})=>`Unexpected character '${e}'.`,InvalidParenthesizedAssignment:`Invalid parenthesized assignment pattern.`,InvalidPrivateFieldResolution:({identifierName:e})=>`Private name #${e} is not defined.`,InvalidPropertyBindingPattern:`Binding member expression.`,InvalidRecordProperty:`Only properties and spread elements are allowed in record definitions.`,InvalidRestAssignmentPattern:`Invalid rest operator's argument.`,LabelRedeclaration:({labelName:e})=>`Label '${e}' is already declared.`,LetInLexicalBinding:`'let' is disallowed as a lexically bound name.`,LineTerminatorBeforeArrow:`No line break is allowed before '=>'.`,MalformedRegExpFlags:`Invalid regular expression flag.`,MissingClassName:`A class name is required.`,MissingEqInAssignment:`Only '=' operator can be used for specifying default value.`,MissingSemicolon:`Missing semicolon.`,MissingPlugin:({missingPlugin:e})=>`This experimental syntax requires enabling the parser plugin: ${e.map(e=>JSON.stringify(e)).join(`, `)}.`,MissingOneOfPlugins:({missingPlugin:e})=>`This experimental syntax requires enabling one of the following parser plugin(s): ${e.map(e=>JSON.stringify(e)).join(`, `)}.`,MissingUnicodeEscape:`Expecting Unicode escape sequence \\uXXXX.`,MixingCoalesceWithLogical:`Nullish coalescing operator(??) requires parens when mixing with logical operators.`,ModuleAttributeDifferentFromType:"The only accepted module attribute is `type`.",ModuleAttributeInvalidValue:`Only string literals are allowed as module attribute values.`,ModuleAttributesWithDuplicateKeys:({key:e})=>`Duplicate key "${e}" is not allowed in module attributes.`,ModuleExportNameHasLoneSurrogate:({surrogateCharCode:e})=>`An export name cannot include a lone surrogate, found '\\u${e.toString(16)}'.`,ModuleExportUndefined:({localName:e})=>`Export '${e}' is not defined.`,MultipleDefaultsInSwitch:`Multiple default clauses.`,NewlineAfterThrow:`Illegal newline after throw.`,NoCatchOrFinally:`Missing catch or finally clause.`,NumberIdentifier:`Identifier directly after number.`,NumericSeparatorInEscapeSequence:`Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.`,ObsoleteAwaitStar:`'await*' has been removed from the async functions proposal. Use Promise.all() instead.`,OptionalChainingNoNew:`Constructors in/after an Optional Chain are not allowed.`,OptionalChainingNoTemplate:`Tagged Template Literals are not allowed in optionalChain.`,OverrideOnConstructor:`'override' modifier cannot appear on a constructor declaration.`,ParamDupe:`Argument name clash.`,PatternHasAccessor:`Object pattern can't contain getter or setter.`,PatternHasMethod:`Object pattern can't contain methods.`,PrivateInExpectedIn:({identifierName:e})=>`Private names are only allowed in property accesses (\`obj.#${e}\`) or in \`in\` expressions (\`#${e} in obj\`).`,PrivateNameRedeclaration:({identifierName:e})=>`Duplicate private name #${e}.`,RecordExpressionBarIncorrectEndSyntaxType:`Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.`,RecordExpressionBarIncorrectStartSyntaxType:`Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.`,RecordExpressionHashIncorrectStartSyntaxType:`Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.`,RecordNoProto:`'__proto__' is not allowed in Record expressions.`,RestTrailingComma:`Unexpected trailing comma after rest element.`,SloppyFunction:`In non-strict mode code, functions can only be declared at top level or inside a block.`,SloppyFunctionAnnexB:`In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.`,SourcePhaseImportRequiresDefault:'Only `import source x from "./module"` is valid.',StaticPrototype:`Classes may not have static property named prototype.`,SuperNotAllowed:"`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",SuperPrivateField:`Private fields can't be accessed on super.`,TrailingDecorator:`Decorators must be attached to a class element.`,TupleExpressionBarIncorrectEndSyntaxType:`Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.`,TupleExpressionBarIncorrectStartSyntaxType:`Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.`,TupleExpressionHashIncorrectStartSyntaxType:`Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.`,UnexpectedArgumentPlaceholder:`Unexpected argument placeholder.`,UnexpectedAwaitAfterPipelineBody:`Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.`,UnexpectedDigitAfterHash:`Unexpected digit after hash token.`,UnexpectedImportExport:`'import' and 'export' may only appear at the top level.`,UnexpectedKeyword:({keyword:e})=>`Unexpected keyword '${e}'.`,UnexpectedLeadingDecorator:`Leading decorators must be attached to a class declaration.`,UnexpectedLexicalDeclaration:`Lexical declaration cannot appear in a single-statement context.`,UnexpectedNewTarget:"`new.target` can only be used in functions or class properties.",UnexpectedNumericSeparator:`A numeric separator is only allowed between two digits.`,UnexpectedPrivateField:`Unexpected private name.`,UnexpectedReservedWord:({reservedWord:e})=>`Unexpected reserved word '${e}'.`,UnexpectedSuper:`'super' is only allowed in object methods and classes.`,UnexpectedToken:({expected:e,unexpected:t})=>`Unexpected token${t?` '${t}'.`:``}${e?`, expected "${e}"`:``}`,UnexpectedTokenUnaryExponentiation:`Illegal expression. Wrap left hand side or entire exponentiation in parentheses.`,UnexpectedUsingDeclaration:"Using declaration cannot appear in the top level when source type is `script` or in the bare case statement.",UnexpectedVoidPattern:`Unexpected void binding.`,UnsupportedBind:`Binding should be performed on object property.`,UnsupportedDecoratorExport:`A decorated export must export a class declaration.`,UnsupportedDefaultExport:"Only expressions, functions or classes are allowed as the `default` export.",UnsupportedImport:"`import` can only be used in `import()` or `import.meta`.",UnsupportedMetaProperty:({target:e,onlyValidPropertyName:t})=>`The only valid meta property for ${e} is ${e}.${t}.`,UnsupportedParameterDecorator:`Decorators cannot be used to decorate parameters.`,UnsupportedPropertyDecorator:`Decorators cannot be used to decorate object literal properties.`,UnsupportedSuper:`'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).`,UnterminatedComment:`Unterminated comment.`,UnterminatedRegExp:`Unterminated regular expression.`,UnterminatedString:`Unterminated string constant.`,UnterminatedTemplate:`Unterminated template.`,UsingDeclarationExport:`Using declaration cannot be exported.`,UsingDeclarationHasBindingPattern:`Using declaration cannot have destructuring patterns.`,VarRedeclaration:({identifierName:e})=>`Identifier '${e}' has already been declared.`,VoidPatternCatchClauseParam:"A void binding can not be the catch clause parameter. Use `try { ... } catch { ... }` if you want to discard the caught error.",VoidPatternInitializer:`A void binding may not have an initializer.`,YieldBindingIdentifier:`Can not use 'yield' as identifier inside a generator.`,YieldInParameter:`Yield expression is not allowed in formal parameters.`,YieldNotInGeneratorFunction:`'yield' is only allowed within generator functions.`,ZeroDigitNumericSeparator:`Numeric separator can not be used after leading 0.`},l={StrictDelete:`Deleting local variable in strict mode.`,StrictEvalArguments:({referenceName:e})=>`Assigning to '${e}' in strict mode.`,StrictEvalArgumentsBinding:({bindingName:e})=>`Binding '${e}' in strict mode.`,StrictFunction:`In strict mode code, functions can only be declared at top level or inside a block.`,StrictNumericEscape:`The only valid numeric escape in strict mode is '\\0'.`,StrictOctalLiteral:`Legacy octal literals are not allowed in strict mode.`,StrictWith:`'with' in strict mode.`},u={ParseExpressionEmptyInput:`Unexpected parseExpression() input: The input is empty or contains only comments.`,ParseExpressionExpectsEOF:({unexpected:e})=>`Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`${String.fromCodePoint(e)}\`.`},d=Object.assign({PipeBodyIsTighter:`Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.`,PipeTopicRequiresHackPipes:`Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.`,PipeTopicUnbound:`Topic reference is unbound; it must be inside a pipe body.`,PipeTopicUnconfiguredToken:({token:e})=>`Invalid topic token ${e}. In order to use ${e} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${e}" }.`,PipeTopicUnused:`Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.`,PipeUnparenthesizedBody:({type:e})=>`Hack-style pipe body cannot be an unparenthesized ${s({type:e})}; please wrap it in parentheses.`},{PipelineBodyNoArrow:`Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.`,PipelineBodySequenceExpression:`Pipeline body may not be a comma-separated sequence expression.`,PipelineHeadSequenceExpression:`Pipeline head should not be a comma-separated sequence expression.`,PipelineTopicUnused:`Pipeline is in topic style but does not use topic reference.`,PrimaryTopicNotAllowed:`Topic reference was used in a lexical context without topic binding.`,PrimaryTopicRequiresSmartPipeline:`Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.`}),f=[`message`];function p(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,value:n})}function m({toMessage:e,code:t,reasonCode:r,syntaxPlugin:i}){let a=r===`MissingPlugin`||r===`MissingOneOfPlugins`,o={AccessorCannotDeclareThisParameter:`AccesorCannotDeclareThisParameter`,AccessorCannotHaveTypeParameters:`AccesorCannotHaveTypeParameters`,ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference:`ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference`,SetAccessorCannotHaveOptionalParameter:`SetAccesorCannotHaveOptionalParameter`,SetAccessorCannotHaveRestParameter:`SetAccesorCannotHaveRestParameter`,SetAccessorCannotHaveReturnType:`SetAccesorCannotHaveReturnType`};return o[r]&&(r=o[r]),function o(s,c){let l=SyntaxError();return l.code=t,l.reasonCode=r,l.loc=s,l.pos=s.index,l.syntaxPlugin=i,a&&(l.missingPlugin=c.missingPlugin),p(l,`clone`,function(e={}){let{line:t,column:r,index:i}=e.loc??s;return o(new n(t,r,i),Object.assign({},c,e.details))}),p(l,`details`,c),Object.defineProperty(l,`message`,{configurable:!0,get(){let t=`${e(c)} (${s.line}:${s.column})`;return this.message=t,t},set(e){Object.defineProperty(this,`message`,{value:e,writable:!0})}}),l}}function h(e,n){if(Array.isArray(e))return t=>h(t,e[0]);let r={};for(let i of Object.keys(e)){let a=e[i],o=typeof a==`string`?{message:()=>a}:typeof a==`function`?{message:a}:a,{message:s}=o,c=t(o,f);r[i]=m(Object.assign({code:`BABEL_PARSER_SYNTAX_ERROR`,reasonCode:i,toMessage:typeof s==`string`?()=>s:s},n?{syntaxPlugin:n}:{},c))}return r}Object.assign({},h(a),h(c),h(l),h(u),h`pipelineOperator`(d));var{defineProperty:g}=Object,_=class{constructor(e,t){this.token=void 0,this.preserveSpace=void 0,this.token=e,this.preserveSpace=!!t}},v={brace:new _(`{`),j_oTag:new _(`<tag`),j_cTag:new _(`</tag`),j_expr:new _(`<tag>...</tag>`,!0)};v.template=new _("`",!0);var y=!0,b=!0,x=!0,S=!0,C=!0,ee=!0,w=class{constructor(e,t={}){this.label=void 0,this.keyword=void 0,this.beforeExpr=void 0,this.startsExpr=void 0,this.rightAssociative=void 0,this.isLoop=void 0,this.isAssign=void 0,this.prefix=void 0,this.postfix=void 0,this.binop=void 0,this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.rightAssociative=!!t.rightAssociative,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop==null?null:t.binop,this.updateContext=null}},te=new Map;function T(e,t={}){t.keyword=e;let n=A(e,t);return te.set(e,n),n}function E(e,t){return A(e,{beforeExpr:y,binop:t})}var ne=-1,D=[],re=[],O=[],ie=[],ae=[],k=[];function A(e,t={}){return++ne,re.push(e),O.push(t.binop??-1),ie.push(t.beforeExpr??!1),ae.push(t.startsExpr??!1),k.push(t.prefix??!1),D.push(new w(e,t)),ne}function j(e,t={}){return++ne,te.set(e,ne),re.push(e),O.push(t.binop??-1),ie.push(t.beforeExpr??!1),ae.push(t.startsExpr??!1),k.push(t.prefix??!1),D.push(new w(`name`,t)),ne}var oe={bracketL:A(`[`,{beforeExpr:y,startsExpr:b}),bracketHashL:A(`#[`,{beforeExpr:y,startsExpr:b}),bracketBarL:A(`[|`,{beforeExpr:y,startsExpr:b}),bracketR:A(`]`),bracketBarR:A(`|]`),braceL:A(`{`,{beforeExpr:y,startsExpr:b}),braceBarL:A(`{|`,{beforeExpr:y,startsExpr:b}),braceHashL:A(`#{`,{beforeExpr:y,startsExpr:b}),braceR:A(`}`),braceBarR:A(`|}`),parenL:A(`(`,{beforeExpr:y,startsExpr:b}),parenR:A(`)`),comma:A(`,`,{beforeExpr:y}),semi:A(`;`,{beforeExpr:y}),colon:A(`:`,{beforeExpr:y}),doubleColon:A(`::`,{beforeExpr:y}),dot:A(`.`),question:A(`?`,{beforeExpr:y}),questionDot:A(`?.`),arrow:A(`=>`,{beforeExpr:y}),template:A(`template`),ellipsis:A(`...`,{beforeExpr:y}),backQuote:A("`",{startsExpr:b}),dollarBraceL:A("${",{beforeExpr:y,startsExpr:b}),templateTail:A("...`",{startsExpr:b}),templateNonTail:A("...${",{beforeExpr:y,startsExpr:b}),at:A(`@`),hash:A(`#`,{startsExpr:b}),interpreterDirective:A(`#!...`),eq:A(`=`,{beforeExpr:y,isAssign:S}),assign:A(`_=`,{beforeExpr:y,isAssign:S}),slashAssign:A(`_=`,{beforeExpr:y,isAssign:S}),xorAssign:A(`_=`,{beforeExpr:y,isAssign:S}),moduloAssign:A(`_=`,{beforeExpr:y,isAssign:S}),incDec:A(`++/--`,{prefix:C,postfix:ee,startsExpr:b}),bang:A(`!`,{beforeExpr:y,prefix:C,startsExpr:b}),tilde:A(`~`,{beforeExpr:y,prefix:C,startsExpr:b}),doubleCaret:A(`^^`,{startsExpr:b}),doubleAt:A(`@@`,{startsExpr:b}),pipeline:E(`|>`,0),nullishCoalescing:E(`??`,1),logicalOR:E(`||`,1),logicalAND:E(`&&`,2),bitwiseOR:E(`|`,3),bitwiseXOR:E(`^`,4),bitwiseAND:E(`&`,5),equality:E(`==/!=/===/!==`,6),lt:E(`</>/<=/>=`,7),gt:E(`</>/<=/>=`,7),relational:E(`</>/<=/>=`,7),bitShift:E(`<</>>/>>>`,8),bitShiftL:E(`<</>>/>>>`,8),bitShiftR:E(`<</>>/>>>`,8),plusMin:A(`+/-`,{beforeExpr:y,binop:9,prefix:C,startsExpr:b}),modulo:A(`%`,{binop:10,startsExpr:b}),star:A(`*`,{binop:10}),slash:E(`/`,10),exponent:A(`**`,{beforeExpr:y,binop:11,rightAssociative:!0}),_in:T(`in`,{beforeExpr:y,binop:7}),_instanceof:T(`instanceof`,{beforeExpr:y,binop:7}),_break:T(`break`),_case:T(`case`,{beforeExpr:y}),_catch:T(`catch`),_continue:T(`continue`),_debugger:T(`debugger`),_default:T(`default`,{beforeExpr:y}),_else:T(`else`,{beforeExpr:y}),_finally:T(`finally`),_function:T(`function`,{startsExpr:b}),_if:T(`if`),_return:T(`return`,{beforeExpr:y}),_switch:T(`switch`),_throw:T(`throw`,{beforeExpr:y,prefix:C,startsExpr:b}),_try:T(`try`),_var:T(`var`),_const:T(`const`),_with:T(`with`),_new:T(`new`,{beforeExpr:y,startsExpr:b}),_this:T(`this`,{startsExpr:b}),_super:T(`super`,{startsExpr:b}),_class:T(`class`,{startsExpr:b}),_extends:T(`extends`,{beforeExpr:y}),_export:T(`export`),_import:T(`import`,{startsExpr:b}),_null:T(`null`,{startsExpr:b}),_true:T(`true`,{startsExpr:b}),_false:T(`false`,{startsExpr:b}),_typeof:T(`typeof`,{beforeExpr:y,prefix:C,startsExpr:b}),_void:T(`void`,{beforeExpr:y,prefix:C,startsExpr:b}),_delete:T(`delete`,{beforeExpr:y,prefix:C,startsExpr:b}),_do:T(`do`,{isLoop:x,beforeExpr:y}),_for:T(`for`,{isLoop:x}),_while:T(`while`,{isLoop:x}),_as:j(`as`,{startsExpr:b}),_assert:j(`assert`,{startsExpr:b}),_async:j(`async`,{startsExpr:b}),_await:j(`await`,{startsExpr:b}),_defer:j(`defer`,{startsExpr:b}),_from:j(`from`,{startsExpr:b}),_get:j(`get`,{startsExpr:b}),_let:j(`let`,{startsExpr:b}),_meta:j(`meta`,{startsExpr:b}),_of:j(`of`,{startsExpr:b}),_sent:j(`sent`,{startsExpr:b}),_set:j(`set`,{startsExpr:b}),_source:j(`source`,{startsExpr:b}),_static:j(`static`,{startsExpr:b}),_using:j(`using`,{startsExpr:b}),_yield:j(`yield`,{startsExpr:b}),_asserts:j(`asserts`,{startsExpr:b}),_checks:j(`checks`,{startsExpr:b}),_exports:j(`exports`,{startsExpr:b}),_global:j(`global`,{startsExpr:b}),_implements:j(`implements`,{startsExpr:b}),_intrinsic:j(`intrinsic`,{startsExpr:b}),_infer:j(`infer`,{startsExpr:b}),_is:j(`is`,{startsExpr:b}),_mixins:j(`mixins`,{startsExpr:b}),_proto:j(`proto`,{startsExpr:b}),_require:j(`require`,{startsExpr:b}),_satisfies:j(`satisfies`,{startsExpr:b}),_keyof:j(`keyof`,{startsExpr:b}),_readonly:j(`readonly`,{startsExpr:b}),_unique:j(`unique`,{startsExpr:b}),_abstract:j(`abstract`,{startsExpr:b}),_declare:j(`declare`,{startsExpr:b}),_enum:j(`enum`,{startsExpr:b}),_module:j(`module`,{startsExpr:b}),_namespace:j(`namespace`,{startsExpr:b}),_interface:j(`interface`,{startsExpr:b}),_type:j(`type`,{startsExpr:b}),_opaque:j(`opaque`,{startsExpr:b}),name:A(`name`,{startsExpr:b}),placeholder:A(`%%`,{startsExpr:b}),string:A(`string`,{startsExpr:b}),num:A(`num`,{startsExpr:b}),bigint:A(`bigint`,{startsExpr:b}),decimal:A(`decimal`,{startsExpr:b}),regexp:A(`regexp`,{startsExpr:b}),privateName:A(`#name`,{startsExpr:b}),eof:A(`eof`),jsxName:A(`jsxName`),jsxText:A(`jsxText`,{beforeExpr:y}),jsxTagStart:A(`jsxTagStart`,{startsExpr:b}),jsxTagEnd:A(`jsxTagEnd`)};function se(e){return D[e]}D[8].updateContext=e=>{e.pop()},D[5].updateContext=D[7].updateContext=D[23].updateContext=e=>{e.push(v.brace)},D[22].updateContext=e=>{e[e.length-1]===v.template?e.pop():e.push(v.template)},D[143].updateContext=e=>{e.push(v.j_expr,v.j_oTag)};var M=`ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ`,N=`·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･`;RegExp(`[`+M+`]`),RegExp(`[`+M+N+`]`),M=N=null;var ce={keyword:`break.case.catch.continue.debugger.default.do.else.finally.for.function.if.return.switch.throw.try.var.const.while.with.new.this.super.class.extends.export.import.null.true.false.in.instanceof.typeof.void.delete`.split(`.`),strict:[`implements`,`interface`,`let`,`package`,`private`,`protected`,`public`,`static`,`yield`],strictBind:[`eval`,`arguments`]};new Set(ce.keyword),new Set(ce.strict),new Set(ce.strictBind),h`flow`({AmbiguousConditionalArrow:`Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.`,AmbiguousDeclareModuleKind:"Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",AssignReservedType:({reservedType:e})=>`Cannot overwrite reserved type ${e}.`,DeclareClassElement:"The `declare` modifier can only appear on class fields.",DeclareClassFieldInitializer:"Initializers are not allowed in fields with the `declare` modifier.",DuplicateDeclareModuleExports:"Duplicate `declare module.exports` statement.",EnumBooleanMemberNotInitialized:({memberName:e,enumName:t})=>`Boolean enum members need to be initialized. Use either \`${e} = true,\` or \`${e} = false,\` in enum \`${t}\`.`,EnumDuplicateMemberName:({memberName:e,enumName:t})=>`Enum member names need to be unique, but the name \`${e}\` has already been used before in enum \`${t}\`.`,EnumInconsistentMemberValues:({enumName:e})=>`Enum \`${e}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,EnumInvalidExplicitType:({invalidEnumType:e,enumName:t})=>`Enum type \`${e}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`,EnumInvalidExplicitTypeUnknownSupplied:({enumName:e})=>`Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${e}\`.`,EnumInvalidMemberInitializerPrimaryType:({enumName:e,memberName:t,explicitType:n})=>`Enum \`${e}\` has type \`${n}\`, so the initializer of \`${t}\` needs to be a ${n} literal.`,EnumInvalidMemberInitializerSymbolType:({enumName:e,memberName:t})=>`Symbol enum members cannot be initialized. Use \`${t},\` in enum \`${e}\`.`,EnumInvalidMemberInitializerUnknownType:({enumName:e,memberName:t})=>`The enum member initializer for \`${t}\` needs to be a literal (either a boolean, number, or string) in enum \`${e}\`.`,EnumInvalidMemberName:({enumName:e,memberName:t,suggestion:n})=>`Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${t}\`, consider using \`${n}\`, in enum \`${e}\`.`,EnumNumberMemberNotInitialized:({enumName:e,memberName:t})=>`Number enum members need to be initialized, e.g. \`${t} = 1\` in enum \`${e}\`.`,EnumStringMemberInconsistentlyInitialized:({enumName:e})=>`String enum members need to consistently either all use initializers, or use no initializers, in enum \`${e}\`.`,GetterMayNotHaveThisParam:"A getter cannot have a `this` parameter.",ImportReflectionHasImportType:"An `import module` declaration can not use `type` or `typeof` keyword.",ImportTypeShorthandOnlyInPureImport:"The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",InexactInsideExact:`Explicit inexact syntax cannot appear inside an explicit exact object type.`,InexactInsideNonObject:`Explicit inexact syntax cannot appear in class or interface definitions.`,InexactVariance:`Explicit inexact syntax cannot have variance.`,InvalidNonTypeImportInDeclareModule:"Imports within a `declare module` body must always be `import type` or `import typeof`.",MissingTypeParamDefault:`Type parameter declaration needs a default, since a preceding type parameter declaration has a default.`,NestedDeclareModule:"`declare module` cannot be used inside another `declare module`.",NestedFlowComment:`Cannot have a flow comment inside another flow comment.`,PatternIsOptional:Object.assign({message:`A binding pattern parameter cannot be optional in an implementation signature.`},{reasonCode:`OptionalBindingPattern`}),SetterMayNotHaveThisParam:"A setter cannot have a `this` parameter.",SpreadVariance:`Spread properties cannot have variance.`,ThisParamAnnotationRequired:"A type annotation is required for the `this` parameter.",ThisParamBannedInConstructor:"Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",ThisParamMayNotBeOptional:"The `this` parameter cannot be optional.",ThisParamMustBeFirst:"The `this` parameter must be the first function parameter.",ThisParamNoDefault:"The `this` parameter may not have a default value.",TypeBeforeInitializer:"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",TypeCastInPattern:`The type cast expression is expected to be wrapped with parenthesis.`,UnexpectedExplicitInexactInObject:`Explicit inexact syntax must appear at the end of an inexact object.`,UnexpectedReservedType:({reservedType:e})=>`Unexpected reserved type ${e}.`,UnexpectedReservedUnderscore:"`_` is only allowed as a type argument to call or new.",UnexpectedSpaceBetweenModuloChecks:"Spaces between `%` and `checks` are not allowed here.",UnexpectedSpreadType:`Spread operator cannot appear in class or interface definitions.`,UnexpectedSubtractionOperand:`Unexpected token, expected "number" or "bigint".`,UnexpectedTokenAfterTypeParameter:`Expected an arrow function after this type parameter declaration.`,UnexpectedTypeParameterBeforeAsyncArrowFunction:"Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",UnsupportedDeclareExportKind:({unsupportedExportKind:e,suggestion:t})=>`\`declare export ${e}\` is not supported. Use \`${t}\` instead.`,UnsupportedStatementInDeclareModule:`Only declares and type imports are allowed inside declare module.`,UnterminatedFlowComment:`Unterminated flow-comment.`}),h`jsx`({AttributeIsEmpty:`JSX attributes must only be assigned a non-empty expression.`,MissingClosingTagElement:({openingTagName:e})=>`Expected corresponding JSX closing tag for <${e}>.`,MissingClosingTagFragment:`Expected corresponding JSX closing tag for <>.`,UnexpectedSequenceExpression:`Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?`,UnexpectedToken:({unexpected:e,HTMLEntity:t})=>`Unexpected token \`${e}\`. Did you mean \`${t}\` or \`{'${e}'}\`?`,UnsupportedJsxValue:`JSX value should be either an expression or a quoted JSX text.`,UnterminatedJsxContent:`Unterminated JSX contents.`,UnwrappedAdjacentJSXElements:`Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?`});var P=class{constructor(e,t,n){this.type=``,this.start=t,this.end=0,this.loc=new r(n),e?.optionFlags&128&&(this.range=[t,0]),e!=null&&e.filename&&(this.loc.filename=e.filename)}},le=P.prototype;le.__clone=function(){let e=new P(void 0,this.start,this.loc.start),t=Object.keys(this);for(let n=0,r=t.length;n<r;n++){let r=t[n];r!==`leadingComments`&&r!==`trailingComments`&&r!==`innerComments`&&(e[r]=this[r])}return e},h`typescript`({AbstractMethodHasImplementation:({methodName:e})=>`Method '${e}' cannot have an implementation because it is marked abstract.`,AbstractPropertyHasInitializer:({propertyName:e})=>`Property '${e}' cannot have an initializer because it is marked abstract.`,AccessorCannotBeOptional:`An 'accessor' property cannot be declared optional.`,AccessorCannotDeclareThisParameter:`'get' and 'set' accessors cannot declare 'this' parameters.`,AccessorCannotHaveTypeParameters:`An accessor cannot have type parameters.`,ClassMethodHasDeclare:`Class methods cannot have the 'declare' modifier.`,ClassMethodHasReadonly:`Class methods cannot have the 'readonly' modifier.`,ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference:`A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.`,ConstructorHasTypeParameters:`Type parameters cannot appear on a constructor declaration.`,DeclareAccessor:({kind:e})=>`'declare' is not allowed in ${e}ters.`,DeclareClassFieldHasInitializer:`Initializers are not allowed in ambient contexts.`,DeclareFunctionHasImplementation:`An implementation cannot be declared in ambient contexts.`,DuplicateAccessibilityModifier:({modifier:e})=>`Accessibility modifier already seen: '${e}'.`,DuplicateModifier:({modifier:e})=>`Duplicate modifier: '${e}'.`,EmptyHeritageClauseType:({token:e})=>`'${e}' list cannot be empty.`,EmptyTypeArguments:`Type argument list cannot be empty.`,EmptyTypeParameters:`Type parameter list cannot be empty.`,ExpectedAmbientAfterExportDeclare:`'export declare' must be followed by an ambient declaration.`,ImportAliasHasImportType:`An import alias can not use 'import type'.`,ImportReflectionHasImportType:"An `import module` declaration can not use `type` modifier",IncompatibleModifiers:({modifiers:e})=>`'${e[0]}' modifier cannot be used with '${e[1]}' modifier.`,IndexSignatureHasAbstract:`Index signatures cannot have the 'abstract' modifier.`,IndexSignatureHasAccessibility:({modifier:e})=>`Index signatures cannot have an accessibility modifier ('${e}').`,IndexSignatureHasDeclare:`Index signatures cannot have the 'declare' modifier.`,IndexSignatureHasOverride:`'override' modifier cannot appear on an index signature.`,IndexSignatureHasStatic:`Index signatures cannot have the 'static' modifier.`,InitializerNotAllowedInAmbientContext:`Initializers are not allowed in ambient contexts.`,InvalidHeritageClauseType:({token:e})=>`'${e}' list can only include identifiers or qualified-names with optional type arguments.`,InvalidModifierOnAwaitUsingDeclaration:e=>`'${e}' modifier cannot appear on an await using declaration.`,InvalidModifierOnTypeMember:({modifier:e})=>`'${e}' modifier cannot appear on a type member.`,InvalidModifierOnTypeParameter:({modifier:e})=>`'${e}' modifier cannot appear on a type parameter.`,InvalidModifierOnTypeParameterPositions:({modifier:e})=>`'${e}' modifier can only appear on a type parameter of a class, interface or type alias.`,InvalidModifierOnUsingDeclaration:e=>`'${e}' modifier cannot appear on a using declaration.`,InvalidModifiersOrder:({orderedModifiers:e})=>`'${e[0]}' modifier must precede '${e[1]}' modifier.`,InvalidPropertyAccessAfterInstantiationExpression:`Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.`,InvalidTupleMemberLabel:`Tuple members must be labeled with a simple identifier.`,MissingInterfaceName:`'interface' declarations must be followed by an identifier.`,NonAbstractClassHasAbstractMethod:`Abstract methods can only appear within an abstract class.`,NonClassMethodPropertyHasAbstractModifier:`'abstract' modifier can only appear on a class, method, or property declaration.`,OptionalTypeBeforeRequired:`A required element cannot follow an optional element.`,OverrideNotInSubClass:`This member cannot have an 'override' modifier because its containing class does not extend another class.`,PatternIsOptional:`A binding pattern parameter cannot be optional in an implementation signature.`,PrivateElementHasAbstract:`Private elements cannot have the 'abstract' modifier.`,PrivateElementHasAccessibility:({modifier:e})=>`Private elements cannot have an accessibility modifier ('${e}').`,ReadonlyForMethodSignature:`'readonly' modifier can only appear on a property declaration or index signature.`,ReservedArrowTypeParam:"This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",ReservedTypeAssertion:"This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",SetAccessorCannotHaveOptionalParameter:`A 'set' accessor cannot have an optional parameter.`,SetAccessorCannotHaveRestParameter:`A 'set' accessor cannot have rest parameter.`,SetAccessorCannotHaveReturnType:`A 'set' accessor cannot have a return type annotation.`,SingleTypeParameterWithoutTrailingComma:({typeParameterName:e})=>`Single type parameter ${e} should have a trailing comma. Example usage: <${e},>.`,StaticBlockCannotHaveModifier:`Static class blocks cannot have any modifier.`,TupleOptionalAfterType:"A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",TypeAnnotationAfterAssign:"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",TypeImportCannotSpecifyDefaultAndNamed:`A type-only import can specify a default import or named bindings, but not both.`,TypeModifierIsUsedInTypeExports:`The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.`,TypeModifierIsUsedInTypeImports:`The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.`,UnexpectedParameterModifier:`A parameter property is only allowed in a constructor implementation.`,UnexpectedReadonly:`'readonly' type modifier is only permitted on array and tuple literal types.`,UnexpectedTypeAnnotation:`Did not expect a type annotation here.`,UnexpectedTypeCastInParameter:`Unexpected type cast in parameter position.`,UnsupportedImportTypeArgument:`Argument in a type import must be a string literal.`,UnsupportedParameterPropertyKind:`A parameter property may not be declared using a binding pattern.`,UnsupportedSignatureParameterKind:({type:e})=>`Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${e}.`,UsingDeclarationInAmbientContext:e=>`'${e}' declarations are not allowed in ambient contexts.`}),h`placeholders`({ClassNameIsRequired:`A class name is required.`,UnexpectedSpace:`Unexpected space in placeholder.`});function ue(e){let t={};for(let n of Object.keys(e))t[n]=se(e[n]);return t}ue(oe)}))();function $s(e){throw e}function W(e,t,n,r){let i=SyntaxError(String(e));return i.code=e,i.loc=t,i}var ec=Symbol(``),tc=Symbol(``),nc=Symbol(``),rc=Symbol(``),ic=Symbol(``),ac=Symbol(``),oc=Symbol(``),sc=Symbol(``),cc=Symbol(``),lc=Symbol(``),uc=Symbol(``),dc=Symbol(``),fc=Symbol(``),pc=Symbol(``),mc=Symbol(``),hc=Symbol(``),gc=Symbol(``),_c=Symbol(``),vc=Symbol(``),yc=Symbol(``),bc=Symbol(``),xc=Symbol(``),Sc=Symbol(``),Cc=Symbol(``),wc=Symbol(``),Tc=Symbol(``),Ec=Symbol(``),Dc=Symbol(``),Oc={[ec]:`Fragment`,[tc]:`Teleport`,[nc]:`Suspense`,[rc]:`KeepAlive`,[ic]:`BaseTransition`,[ac]:`openBlock`,[oc]:`createBlock`,[sc]:`createVNode`,[cc]:`createCommentVNode`,[lc]:`createTextVNode`,[uc]:`createStaticVNode`,[dc]:`resolveComponent`,[fc]:`resolveDynamicComponent`,[pc]:`resolveDirective`,[mc]:`withDirectives`,[hc]:`renderList`,[gc]:`renderSlot`,[_c]:`createSlots`,[vc]:`toDisplayString`,[yc]:`mergeProps`,[bc]:`toHandlers`,[xc]:`camelize`,[Sc]:`capitalize`,[Cc]:`setBlockTracking`,[wc]:`pushScopeId`,[Tc]:`popScopeId`,[Ec]:`withScopeId`,[Dc]:`withCtx`};function kc(e){Object.getOwnPropertySymbols(e).forEach(t=>{Oc[t]=e[t]})}var Ac={source:``,start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function jc(e,t=Ac){return{type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}function Mc(e,t,n,r,i,a,o,s=!1,c=!1,l=Ac){return e&&(s?(e.helper(ac),e.helper(oc)):e.helper(sc),o&&e.helper(mc)),{type:13,tag:t,props:n,children:r,patchFlag:i,dynamicProps:a,directives:o,isBlock:s,disableTracking:c,loc:l}}function Nc(e,t=Ac){return{type:17,loc:t,elements:e}}function Pc(e,t=Ac){return{type:15,loc:t,properties:e}}function G(e,t){return{type:16,loc:Ac,key:N(e)?K(e,!0):e,value:t}}function K(e,t,n=Ac,r=!1){return{type:4,loc:n,isConstant:r,content:e,isStatic:t}}function Fc(e,t=Ac){return{type:8,loc:t,children:e}}function Ic(e,t=[],n=Ac){return{type:14,loc:n,callee:e,arguments:t}}function Lc(e,t=void 0,n=!1,r=!1,i=Ac){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:i}}function Rc(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:Ac}}function zc(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:Ac}}var Bc=e=>e.type===4&&e.isStatic,Vc=(e,t)=>e===t||e===be(t);function Hc(e){if(Vc(e,`Teleport`))return tc;if(Vc(e,`Suspense`))return nc;if(Vc(e,`KeepAlive`))return rc;if(Vc(e,`BaseTransition`))return ic}var Uc=/^\d|[^\$\w]/,Wc=e=>!Uc.test(e),Gc=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\[[^\]]+\])*$/,Kc=e=>e?Gc.test(e.trim()):!1;function qc(e,t,n){let r={source:e.source.substr(t,n),start:Jc(e.start,e.source,t),end:e.end};return n!=null&&(r.end=Jc(e.start,e.source,t+n)),r}function Jc(e,t,n=t.length){return Yc(O({},e),t,n)}function Yc(e,t,n=t.length){let r=0,i=-1;for(let e=0;e<n;e++)t.charCodeAt(e)===10&&(r++,i=e);return e.offset+=n,e.line+=r,e.column=i===-1?e.column+n:n-i,e}function Xc(e,t,n=!1){for(let r=0;r<e.props.length;r++){let i=e.props[r];if(i.type===7&&(n||i.exp)&&(N(t)?i.name===t:t.test(i.name)))return i}}function Zc(e,t,n=!1,r=!1){for(let i=0;i<e.props.length;i++){let a=e.props[i];if(a.type===6){if(n)continue;if(a.name===t&&(a.value||r))return a}else if(a.name===`bind`&&(a.exp||r)&&Qc(a.arg,t))return a}}function Qc(e,t){return!!(e&&Bc(e)&&e.content===t)}function $c(e){return e.props.some(e=>e.type===7&&e.name===`bind`&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function el(e){return e.type===5||e.type===2}function tl(e){return e.type===7&&e.name===`slot`}function nl(e){return e.type===1&&e.tagType===3}function rl(e){return e.type===1&&e.tagType===2}function il(e,t,n){let r,i=e.type===13?e.props:e.arguments[2];if(i==null||N(i))r=Pc([t]);else if(i.type===14){let e=i.arguments[0];!N(e)&&e.type===15?e.properties.unshift(t):i.arguments.unshift(Pc([t])),r=i}else if(i.type===15){let e=!1;if(t.key.type===4){let n=t.key.content;e=i.properties.some(e=>e.key.type===4&&e.key.content===n)}e||i.properties.unshift(t),r=i}else r=Ic(n.helper(yc),[Pc([t]),i]);e.type===13?e.props=r:e.arguments[2]=r}function al(e,t){return`_${t}_${e.replace(/[^\w]/g,`_`)}`}var ol=/&(gt|lt|amp|apos|quot);/g,sl={gt:`>`,lt:`<`,amp:`&`,apos:`'`,quot:`"`},cl={delimiters:[`{{`,`}}`],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:E,isPreTag:E,isCustomElement:E,decodeEntities:e=>e.replace(ol,(e,t)=>sl[t]),onError:$s,comments:!1};function ll(e,t={}){let n=ul(e,t),r=Tl(n);return jc(dl(n,0,[]),El(n,r))}function ul(e,t){let n=O({},cl);for(let e in t)n[e]=t[e]||cl[e];return{options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1}}function dl(e,t,n){let r=Dl(n),i=r?r.ns:0,a=[];for(;!Al(e,t,n);){let o=e.source,s;if(t===0||t===1){if(!e.inVPre&&q(o,e.options.delimiters[0]))s=Sl(e,t);else if(t===0&&o[0]===`<`)if(o.length===1)Y(e,5,1);else if(o[1]===`!`)q(o,`<!--`)?s=ml(e):q(o,`<!DOCTYPE`)?s=hl(e):q(o,`<![CDATA[`)?i===0?(Y(e,1),s=hl(e)):s=pl(e,n):(Y(e,11),s=hl(e));else if(o[1]===`/`)if(o.length===2)Y(e,5,2);else if(o[2]===`>`){Y(e,14,2),J(e,3);continue}else if(/[a-z]/i.test(o[2])){Y(e,23),vl(e,1,r);continue}else Y(e,12,2),s=hl(e);else /[a-z]/i.test(o[1])?s=gl(e,n):o[1]===`?`?(Y(e,21,1),s=hl(e)):Y(e,12,1)}if(s||=Cl(e,t),A(s))for(let e=0;e<s.length;e++)fl(a,s[e]);else fl(a,s)}let o=!1;if(t!==2){if(!e.inPre)for(let t=0;t<a.length;t++){let n=a[t];if(n.type===2)if(/[^\t\r\n\f ]/.test(n.content))n.content=n.content.replace(/[\t\r\n\f ]+/g,` `);else{let e=a[t-1],r=a[t+1];!e||!r||e.type===3||r.type===3||e.type===1&&r.type===1&&/[\r\n]/.test(n.content)?(o=!0,a[t]=null):n.content=` `}else n.type===3&&!e.options.comments&&(o=!0,a[t]=null)}else if(r&&e.options.isPreTag(r.tag)){let e=a[0];e&&e.type===2&&(e.content=e.content.replace(/^\r?\n/,``))}}return o?a.filter(Boolean):a}function fl(e,t){if(t.type===2){let n=Dl(e);if(n&&n.type===2&&n.loc.end.offset===t.loc.start.offset){n.content+=t.content,n.loc.end=t.loc.end,n.loc.source+=t.loc.source;return}}e.push(t)}function pl(e,t){J(e,9);let n=dl(e,3,t);return e.source.length===0?Y(e,6):J(e,3),n}function ml(e){let t=Tl(e),n,r=/--(\!)?>/.exec(e.source);if(!r)n=e.source.slice(4),J(e,e.source.length),Y(e,7);else{r.index<=3&&Y(e,0),r[1]&&Y(e,10),n=e.source.slice(4,r.index);let t=e.source.slice(0,r.index),i=1,a=0;for(;(a=t.indexOf(`<!--`,i))!==-1;)J(e,a-i+1),a+4<t.length&&Y(e,16),i=a+1;J(e,r.index+r[0].length-i+1)}return{type:3,content:n,loc:El(e,t)}}function hl(e){let t=Tl(e),n=e.source[1]===`?`?1:2,r,i=e.source.indexOf(`>`);return i===-1?(r=e.source.slice(n),J(e,e.source.length)):(r=e.source.slice(n,i),J(e,i+1)),{type:3,content:r,loc:El(e,t)}}function gl(e,t){let n=e.inPre,r=e.inVPre,i=Dl(t),a=vl(e,0,i),o=e.inPre&&!n,s=e.inVPre&&!r;if(a.isSelfClosing||e.options.isVoidTag(a.tag))return a;t.push(a);let c=dl(e,e.options.getTextMode(a,i),t);if(t.pop(),a.children=c,jl(e.source,a.tag))vl(e,1,i);else if(Y(e,24,0,a.loc.start),e.source.length===0&&a.tag.toLowerCase()===`script`){let t=c[0];t&&q(t.loc.source,`<!--`)&&Y(e,8)}return a.loc=El(e,a.loc.start),o&&(e.inPre=!1),s&&(e.inVPre=!1),a}var _l=r(`if,else,else-if,for,slot`);function vl(e,t,n){let r=Tl(e),i=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),a=i[1],o=e.options.getNamespace(a,n);J(e,i[0].length),Ol(e);let s=Tl(e),c=e.source,l=yl(e,t);e.options.isPreTag(a)&&(e.inPre=!0),!e.inVPre&&l.some(e=>e.type===7&&e.name===`pre`)&&(e.inVPre=!0,O(e,s),e.source=c,l=yl(e,t).filter(e=>e.name!==`v-pre`));let u=!1;e.source.length===0?Y(e,9):(u=q(e.source,`/>`),t===1&&u&&Y(e,4),J(e,u?2:1));let d=0,f=e.options;if(!e.inVPre&&!f.isCustomElement(a)){let e=l.some(e=>e.type===7&&e.name===`is`);f.isNativeTag&&!e?f.isNativeTag(a)||(d=1):(e||Hc(a)||f.isBuiltInComponent&&f.isBuiltInComponent(a)||/^[A-Z]/.test(a)||a===`component`)&&(d=1),a===`slot`?d=2:a===`template`&&l.some(e=>e.type===7&&_l(e.name))&&(d=3)}return{type:1,ns:o,tag:a,tagType:d,props:l,isSelfClosing:u,children:[],loc:El(e,r),codegenNode:void 0}}function yl(e,t){let n=[],r=new Set;for(;e.source.length>0&&!q(e.source,`>`)&&!q(e.source,`/>`);){if(q(e.source,`/`)){Y(e,22),J(e,1),Ol(e);continue}t===1&&Y(e,3);let i=bl(e,r);t===0&&n.push(i),/^[^\t\r\n\f />]/.test(e.source)&&Y(e,15),Ol(e)}return n}function bl(e,t){let n=Tl(e),r=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];t.has(r)&&Y(e,2),t.add(r),r[0]===`=`&&Y(e,19);{let t=/["'<]/g,n;for(;n=t.exec(r);)Y(e,17,n.index)}J(e,r.length);let i;/^[\t\r\n\f ]*=/.test(e.source)&&(Ol(e),J(e,1),Ol(e),i=xl(e),i||Y(e,13));let a=El(e,n);if(!e.inVPre&&/^(v-|:|@|#)/.test(r)){let t=/(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(r),o=t[1]||(q(r,`:`)?`bind`:q(r,`@`)?`on`:`slot`),s;if(t[2]){let i=o===`slot`,a=r.indexOf(t[2]),c=El(e,kl(e,n,a),kl(e,n,a+t[2].length+(i&&t[3]||``).length)),l=t[2],u=!0;l.startsWith(`[`)?(u=!1,l.endsWith(`]`)||Y(e,26),l=l.substr(1,l.length-2)):i&&(l+=t[3]||``),s={type:4,content:l,isStatic:u,isConstant:u,loc:c}}if(i&&i.isQuoted){let e=i.loc;e.start.offset++,e.start.column++,e.end=Jc(e.start,i.content),e.source=e.source.slice(1,-1)}return{type:7,name:o,exp:i&&{type:4,content:i.content,isStatic:!1,isConstant:!1,loc:i.loc},arg:s,modifiers:t[3]?t[3].substr(1).split(`.`):[],loc:a}}return{type:6,name:r,value:i&&{type:2,content:i.content,loc:i.loc},loc:a}}function xl(e){let t=Tl(e),n,r=e.source[0],i=r===`"`||r===`'`;if(i){J(e,1);let t=e.source.indexOf(r);t===-1?n=wl(e,e.source.length,4):(n=wl(e,t,4),J(e,1))}else{let t=/^[^\t\r\n\f >]+/.exec(e.source);if(!t)return;let r=/["'<=`]/g,i;for(;i=r.exec(t[0]);)Y(e,18,i.index);n=wl(e,t[0].length,4)}return{content:n,isQuoted:i,loc:El(e,t)}}function Sl(e,t){let[n,r]=e.options.delimiters,i=e.source.indexOf(r,n.length);if(i===-1){Y(e,25);return}let a=Tl(e);J(e,n.length);let o=Tl(e),s=Tl(e),c=i-n.length,l=e.source.slice(0,c),u=wl(e,c,t),d=u.trim(),f=u.indexOf(d);return f>0&&Yc(o,l,f),Yc(s,l,c-(u.length-d.length-f)),J(e,r.length),{type:5,content:{type:4,isStatic:!1,isConstant:!1,content:d,loc:El(e,o,s)},loc:El(e,a)}}function Cl(e,t){let n=[`<`,e.options.delimiters[0]];t===3&&n.push(`]]>`);let r=e.source.length;for(let t=0;t<n.length;t++){let i=e.source.indexOf(n[t],1);i!==-1&&r>i&&(r=i)}let i=Tl(e);return{type:2,content:wl(e,r,t),loc:El(e,i)}}function wl(e,t,n){let r=e.source.slice(0,t);return J(e,t),n===2||n===3||r.indexOf(`&`)===-1?r:e.options.decodeEntities(r,n===4)}function Tl(e){let{column:t,line:n,offset:r}=e;return{column:t,line:n,offset:r}}function El(e,t,n){return n||=Tl(e),{start:t,end:n,source:e.originalSource.slice(t.offset,n.offset)}}function Dl(e){return e[e.length-1]}function q(e,t){return e.startsWith(t)}function J(e,t){let{source:n}=e;Yc(e,n,t),e.source=n.slice(t)}function Ol(e){let t=/^[\t\r\n\f ]+/.exec(e.source);t&&J(e,t[0].length)}function kl(e,t,n){return Jc(t,e.originalSource.slice(t.offset,n),n)}function Y(e,t,n,r=Tl(e)){n&&(r.offset+=n,r.column+=n),e.options.onError(W(t,{start:r,end:r,source:``}))}function Al(e,t,n){let r=e.source;switch(t){case 0:if(q(r,`</`)){for(let e=n.length-1;e>=0;--e)if(jl(r,n[e].tag))return!0}break;case 1:case 2:{let e=Dl(n);if(e&&jl(r,e.tag))return!0;break}case 3:if(q(r,`]]>`))return!0;break}return!r}function jl(e,t){return q(e,`</`)&&e.substr(2,t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||`>`)}function Ml(e,t){Pl(e,t,new Map,Nl(e,e.children[0]))}function Nl(e,t){let{children:n}=e;return n.length===1&&t.type===1&&!rl(t)}function Pl(e,t,n,r=!1){let i=!1,a=!1,{children:o}=e;for(let e=0;e<o.length;e++){let s=o[e];if(s.type===1&&s.tagType===0){let e;if(!r&&(e=Fl(s,n))>0){e===2&&(a=!0),s.codegenNode.patchFlag=`-1`,s.codegenNode=t.hoist(s.codegenNode),i=!0;continue}else{let e=s.codegenNode;if(e.type===13){let n=Rl(e);if((!n||n===512||n===1)&&!Il(s)){let n=Ll(s);n&&(e.props=t.hoist(n))}}}}else if(s.type===12){let e=Fl(s.content,n);e>0&&(e===2&&(a=!0),s.codegenNode=t.hoist(s.codegenNode),i=!0)}if(s.type===1)Pl(s,t,n);else if(s.type===11)Pl(s,t,n,s.children.length===1);else if(s.type===9)for(let e=0;e<s.branches.length;e++)Pl(s.branches[e],t,n,s.branches[e].children.length===1)}!a&&i&&t.transformHoist&&t.transformHoist(o,t,e)}function Fl(e,t=new Map){switch(e.type){case 1:if(e.tagType!==0)return 0;let n=t.get(e);if(n!==void 0)return n;let r=e.codegenNode;if(r.type!==13)return 0;if(!Rl(r)&&!Il(e)){let n=1;for(let r=0;r<e.children.length;r++){let i=Fl(e.children[r],t);if(i===0)return t.set(e,0),0;i===2&&(n=2)}if(n!==2)for(let t=0;t<e.props.length;t++){let r=e.props[t];r.type===7&&r.name===`bind`&&r.exp&&(r.exp.type===8||r.exp.isRuntimeConstant)&&(n=2)}return r.isBlock&&=!1,t.set(e,n),n}else return t.set(e,0),0;case 2:case 3:return 1;case 9:case 11:case 10:return 0;case 5:case 12:return Fl(e.content,t);case 4:return e.isConstant?e.isRuntimeConstant?2:1:0;case 8:let i=1;for(let n=0;n<e.children.length;n++){let r=e.children[n];if(N(r)||ce(r))continue;let a=Fl(r,t);if(a===0)return 0;a===2&&(i=2)}return i;default:return 0}}function Il(e){let t=Ll(e);if(t&&t.type===15){let{properties:e}=t;for(let t=0;t<e.length;t++){let{key:n,value:r}=e[t];if(n.type!==4||!n.isStatic||r.type!==4||!r.isStatic&&!r.isConstant)return!0}}return!1}function Ll(e){let t=e.codegenNode;if(t.type===13)return t.props}function Rl(e){let t=e.patchFlag;return t?parseInt(t,10):void 0}function zl(e,{prefixIdentifiers:t=!1,hoistStatic:n=!1,cacheHandlers:r=!1,nodeTransforms:i=[],directiveTransforms:a={},transformHoist:o=null,isBuiltInComponent:s=T,isCustomElement:c=T,expressionPlugins:l=[],scopeId:u=null,ssr:d=!1,ssrCssVars:f=``,bindingMetadata:p={},onError:m=$s}){let h={prefixIdentifiers:t,hoistStatic:n,cacheHandlers:r,nodeTransforms:i,directiveTransforms:a,transformHoist:o,isBuiltInComponent:s,isCustomElement:c,expressionPlugins:l,scopeId:u,ssr:d,ssrCssVars:f,bindingMetadata:p,onError:m,root:e,helpers:new Set,components:new Set,directives:new Set,hoists:[],imports:new Set,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,helper(e){return h.helpers.add(e),e},helperString(e){return`_${Oc[h.helper(e)]}`},replaceNode(e){h.parent.children[h.childIndex]=h.currentNode=e},removeNode(e){let t=h.parent.children,n=e?t.indexOf(e):h.currentNode?h.childIndex:-1;!e||e===h.currentNode?(h.currentNode=null,h.onNodeRemoved()):h.childIndex>n&&(h.childIndex--,h.onNodeRemoved()),h.parent.children.splice(n,1)},onNodeRemoved:()=>{},addIdentifiers(e){},removeIdentifiers(e){},hoist(e){h.hoists.push(e);let t=K(`_hoisted_${h.hoists.length}`,!1,e.loc,!0);return t.hoisted=e,t},cache(e,t=!1){return zc(++h.cached,e,t)}};return h}function Bl(e,t){let n=zl(e,t);Ul(e,n),t.hoistStatic&&Ml(e,n),t.ssr||Vl(e,n),e.helpers=[...n.helpers],e.components=[...n.components],e.directives=[...n.directives],e.imports=[...n.imports],e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached}function Vl(e,t){let{helper:n}=t,{children:r}=e;if(r.length===1){let t=r[0];if(Nl(e,t)&&t.codegenNode){let r=t.codegenNode;r.type===13&&(r.isBlock=!0,n(ac),n(oc)),e.codegenNode=r}else e.codegenNode=t}else r.length>1&&(e.codegenNode=Mc(t,n(ec),void 0,e.children,`64 /* ${i[64]} */`,void 0,void 0,!0))}function Hl(e,t){let n=0,r=()=>{n--};for(;n<e.children.length;n++){let i=e.children[n];N(i)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=r,Ul(i,t))}}function Ul(e,t){t.currentNode=e;let{nodeTransforms:n}=t,r=[];for(let i=0;i<n.length;i++){let a=n[i](e,t);if(a&&(A(a)?r.push(...a):r.push(a)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(cc);break;case 5:t.ssr||t.helper(vc);break;case 9:for(let n=0;n<e.branches.length;n++)Ul(e.branches[n],t);break;case 10:case 11:case 1:case 0:Hl(e,t);break}t.currentNode=e;let i=r.length;for(;i--;)r[i]()}function Wl(e,t){let n=N(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(e.type===1){let{props:i}=e;if(e.tagType===3&&i.some(tl))return;let a=[];for(let o=0;o<i.length;o++){let s=i[o];if(s.type===7&&n(s.name)){i.splice(o,1),o--;let n=t(e,s,r);n&&a.push(n)}}return a}}}var Gl=`/*#__PURE__*/`;function Kl(e,{mode:t=`function`,prefixIdentifiers:n=t===`module`,sourceMap:r=!1,filename:i=`template.vue.html`,scopeId:a=null,optimizeImports:o=!1,runtimeGlobalName:s=`Vue`,runtimeModuleName:c=`vue`,ssr:l=!1}){let u={mode:t,prefixIdentifiers:n,sourceMap:r,filename:i,scopeId:a,optimizeImports:o,runtimeGlobalName:s,runtimeModuleName:c,ssr:l,source:e.loc.source,code:``,column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(e){return`_${Oc[e]}`},push(e,t){u.code+=e},indent(){d(++u.indentLevel)},deindent(e=!1){e?--u.indentLevel:d(--u.indentLevel)},newline(){d(u.indentLevel)}};function d(e){u.push(`
`+`  `.repeat(e))}return u}function ql(e,t={}){let n=Kl(e,t);t.onContextCreated&&t.onContextCreated(n);let{mode:r,push:i,prefixIdentifiers:a,indent:o,deindent:s,newline:c,scopeId:l,ssr:u}=n,d=e.helpers.length>0,f=!a&&r!==`module`;Jl(e,n);let p=t.bindingMetadata?`, $props, $setup, $data, $options`:``;if(i(u?`function ssrRender(_ctx, _push, _parent, _attrs${p}) {`:`function render(_ctx, _cache${p}) {`),o(),f&&(i(`with (_ctx) {`),o(),d&&(i(`const { ${e.helpers.map(e=>`${Oc[e]}: _${Oc[e]}`).join(`, `)} } = _Vue`),i(`
`),c())),e.components.length&&(Yl(e.components,`component`,n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Yl(e.directives,`directive`,n),e.temps>0&&c()),e.temps>0){i(`let `);for(let t=0;t<e.temps;t++)i(`${t>0?`, `:``}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(i(`
`),c()),u||i(`return `),e.codegenNode?X(e.codegenNode,n):i(`null`),f&&(s(),i(`}`)),s(),i(`}`),{ast:e,code:n.code,map:n.map?n.map.toJSON():void 0}}function Jl(e,t){let{ssr:n,prefixIdentifiers:r,push:i,newline:a,runtimeModuleName:o,runtimeGlobalName:s}=t,c=s;e.helpers.length>0&&(i(`const _Vue = ${c}\n`),e.hoists.length&&i(`const { ${[sc,cc,lc,uc].filter(t=>e.helpers.includes(t)).map(e=>`${Oc[e]}: _${Oc[e]}`).join(`, `)} } = _Vue\n`)),Xl(e.hoists,t),a(),i(`return `)}function Yl(e,t,{helper:n,push:r,newline:i}){let a=n(t===`component`?dc:pc);for(let n=0;n<e.length;n++){let o=e[n];r(`const ${al(o,t)} = ${a}(${JSON.stringify(o)})`),n<e.length-1&&i()}}function Xl(e,t){if(!e.length)return;t.pure=!0;let{push:n,newline:r,helper:i,scopeId:a,mode:o}=t;r(),e.forEach((e,i)=>{e&&(n(`const _hoisted_${i+1} = `),X(e,t),r())}),t.pure=!1}function Zl(e,t){let n=e.length>3||!1;t.push(`[`),n&&t.indent(),Ql(e,t,n),n&&t.deindent(),t.push(`]`)}function Ql(e,t,n=!1,r=!0){let{push:i,newline:a}=t;for(let o=0;o<e.length;o++){let s=e[o];N(s)?i(s):A(s)?Zl(s,t):X(s,t),o<e.length-1&&(n?(r&&i(`,`),a()):r&&i(`, `))}}function X(e,t){if(N(e)){t.push(e);return}if(ce(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:X(e.codegenNode,t);break;case 2:$l(e,t);break;case 4:eu(e,t);break;case 5:tu(e,t);break;case 12:X(e.codegenNode,t);break;case 8:nu(e,t);break;case 3:break;case 13:iu(e,t);break;case 14:ou(e,t);break;case 15:su(e,t);break;case 17:cu(e,t);break;case 18:lu(e,t);break;case 19:uu(e,t);break;case 20:du(e,t);break;case 21:break;case 22:break;case 23:break;case 24:break;case 25:break;case 26:break;case 10:break;default:}}function $l(e,t){t.push(JSON.stringify(e.content),e)}function eu(e,t){let{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,e)}function tu(e,t){let{push:n,helper:r,pure:i}=t;i&&n(Gl),n(`${r(vc)}(`),X(e.content,t),n(`)`)}function nu(e,t){for(let n=0;n<e.children.length;n++){let r=e.children[n];N(r)?t.push(r):X(r,t)}}function ru(e,t){let{push:n}=t;e.type===8?(n(`[`),nu(e,t),n(`]`)):e.isStatic?n(Wc(e.content)?e.content:JSON.stringify(e.content),e):n(`[${e.content}]`,e)}function iu(e,t){let{push:n,helper:r,pure:i}=t,{tag:a,props:o,children:s,patchFlag:c,dynamicProps:l,directives:u,isBlock:d,disableTracking:f}=e;u&&n(r(mc)+`(`),d&&n(`(${r(ac)}(${f?`true`:``}), `),i&&n(Gl),n(r(d?oc:sc)+`(`,e),Ql(au([a,o,s,c,l]),t),n(`)`),d&&n(`)`),u&&(n(`, `),X(u,t),n(`)`))}function au(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(e=>e||`null`)}function ou(e,t){let{push:n,helper:r,pure:i}=t,a=N(e.callee)?e.callee:r(e.callee);i&&n(Gl),n(a+`(`,e),Ql(e.arguments,t),n(`)`)}function su(e,t){let{push:n,indent:r,deindent:i,newline:a}=t,{properties:o}=e;if(!o.length){n(`{}`,e);return}let s=o.length>1||!1;n(s?`{`:`{ `),s&&r();for(let e=0;e<o.length;e++){let{key:r,value:i}=o[e];ru(r,t),n(`: `),X(i,t),e<o.length-1&&(n(`,`),a())}s&&i(),n(s?`}`:` }`)}function cu(e,t){Zl(e.elements,t)}function lu(e,t){let{push:n,indent:r,deindent:i,scopeId:a,mode:o}=t,{params:s,returns:c,body:l,newline:u,isSlot:d}=e;d&&n(`_${Oc[Dc]}(`),n(`(`,e),A(s)?Ql(s,t):s&&X(s,t),n(`) => `),(u||l)&&(n(`{`),r()),c?(u&&n(`return `),A(c)?Zl(c,t):X(c,t)):l&&X(l,t),(u||l)&&(i(),n(`}`)),d&&n(`)`)}function uu(e,t){let{test:n,consequent:r,alternate:i,newline:a}=e,{push:o,indent:s,deindent:c,newline:l}=t;if(n.type===4){let e=!Wc(n.content);e&&o(`(`),eu(n,t),e&&o(`)`)}else o(`(`),X(n,t),o(`)`);a&&s(),t.indentLevel++,a||o(` `),o(`? `),X(r,t),t.indentLevel--,a&&l(),a||o(` `),o(`: `);let u=i.type===19;u||t.indentLevel++,X(i,t),u||t.indentLevel--,a&&c(!0)}function du(e,t){let{push:n,helper:r,indent:i,deindent:a,newline:o}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(i(),n(`${r(Cc)}(-1),`),o()),n(`_cache[${e.index}] = `),X(e.value,t),e.isVNode&&(n(`,`),o(),n(`${r(Cc)}(1),`),o(),n(`_cache[${e.index}]`),a()),n(`)`)}RegExp(`\\b`+`do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void`.split(`,`).join(`\\b|\\b`)+`\\b`);var fu=Wl(/^(if|else|else-if)$/,(e,t,n)=>pu(e,t,n,(e,t,r)=>{let i=n.parent.children,a=i.indexOf(e),o=0;for(;a-->=0;){let e=i[a];e&&e.type===9&&(o+=e.branches.length)}return()=>{if(r)e.codegenNode=hu(t,o,n);else{let r=e.codegenNode;for(;r.alternate.type===19;)r=r.alternate;r.alternate=hu(t,o+e.branches.length-1,n)}}}));function pu(e,t,n,r){if(t.name!==`else`&&(!t.exp||!t.exp.content.trim())){let r=t.exp?t.exp.loc:e.loc;n.onError(W(27,t.loc)),t.exp=K(`true`,!1,r)}if(t.name===`if`){let i=mu(e,t),a={type:9,loc:e.loc,branches:[i]};if(n.replaceNode(a),r)return r(a,i,!0)}else{let i=n.parent.children,a=i.indexOf(e);for(;a-->=-1;){let o=i[a];if(o&&o.type===9){n.removeNode();let i=mu(e,t);o.branches.push(i);let a=r&&r(o,i,!1);Ul(i,n),a&&a(),n.currentNode=null}else n.onError(W(29,e.loc));break}}}function mu(e,t){return{type:10,loc:e.loc,condition:t.name===`else`?void 0:t.exp,children:e.tagType===3&&!Xc(e,`for`)?e.children:[e],userKey:Zc(e,`key`)}}function hu(e,t,n){return e.condition?Rc(e.condition,gu(e,t,n),Ic(n.helper(cc),[`""`,`true`])):gu(e,t,n)}function gu(e,t,n){let{helper:r}=n,a=G(`key`,K(`${t}`,!1,Ac,!0)),{children:o}=e,s=o[0];if(o.length!==1||s.type!==1)if(o.length===1&&s.type===11){let e=s.codegenNode;return il(e,a,n),e}else return Mc(n,r(ec),Pc([a]),o,`64 /* ${i[64]} */`,void 0,void 0,!0,!1,e.loc);else{let e=s.codegenNode;return e.type===13&&(e.isBlock=!0,r(ac),r(oc)),il(e,a,n),e}}var _u=Wl(`for`,(e,t,n)=>{let{helper:r}=n;return vu(e,t,n,t=>{let a=Ic(r(hc),[t.source]),o=Zc(e,`key`),s=o?G(`key`,o.type===6?K(o.value.content,!0):o.exp):null,c=t.source.type===4&&t.source.isConstant,l=c?64:o?128:256;return t.codegenNode=Mc(n,r(ec),void 0,a,`${l} /* ${i[l]} */`,void 0,void 0,!0,!c,e.loc),()=>{let o,l=nl(e),{children:u}=t,d=u.length!==1||u[0].type!==1,f=rl(e)?e:l&&e.children.length===1&&rl(e.children[0])?e.children[0]:null;f?(o=f.codegenNode,l&&s&&il(o,s,n)):d?o=Mc(n,r(ec),s?Pc([s]):void 0,e.children,`64 /* ${i[64]} */`,void 0,void 0,!0):(o=u[0].codegenNode,l&&s&&il(o,s,n),o.isBlock=!c,o.isBlock&&(r(ac),r(oc))),a.arguments.push(Lc(wu(t.parseResult),o,!0))}})});function vu(e,t,n,r){if(!t.exp){n.onError(W(30,t.loc));return}let i=Su(t.exp,n);if(!i){n.onError(W(31,t.loc));return}let{addIdentifiers:a,removeIdentifiers:o,scopes:s}=n,{source:c,value:l,key:u,index:d}=i,f={type:11,loc:t.loc,source:c,valueAlias:l,keyAlias:u,objectIndexAlias:d,parseResult:i,children:nl(e)?e.children:[e]};n.replaceNode(f),s.vFor++;let p=r&&r(f);return()=>{s.vFor--,p&&p()}}var yu=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,bu=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,xu=/^\(|\)$/g;function Su(e,t){let n=e.loc,r=e.content,i=r.match(yu);if(!i)return;let[,a,o]=i,s={source:Cu(n,o.trim(),r.indexOf(o,a.length)),value:void 0,key:void 0,index:void 0},c=a.trim().replace(xu,``).trim(),l=a.indexOf(c),u=c.match(bu);if(u){c=c.replace(bu,``).trim();let e=u[1].trim(),t;if(e&&(t=r.indexOf(e,l+c.length),s.key=Cu(n,e,t)),u[2]){let i=u[2].trim();i&&(s.index=Cu(n,i,r.indexOf(i,s.key?t+e.length:l+c.length)))}}return c&&(s.value=Cu(n,c,l)),s}function Cu(e,t,n){return K(t,!1,qc(e,n,t.length))}function wu({value:e,key:t,index:n}){let r=[];return e&&r.push(e),t&&(e||r.push(K(`_`,!1)),r.push(t)),n&&(t||(e||r.push(K(`_`,!1)),r.push(K(`__`,!1))),r.push(n)),r}var Tu=K(`undefined`,!1),Eu=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){let n=Xc(e,`slot`);if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},Du=(e,t,n)=>Lc(e,t,!1,!0,t.length?t[0].loc:n);function Ou(e,t,n=Du){t.helper(Dc);let{children:r,loc:i}=e,a=[],o=[],s=(e,t)=>G(`default`,n(e,t,i)),c=t.scopes.vSlot>0||t.scopes.vFor>0,l=Xc(e,`slot`,!0);if(l){let{arg:e,exp:t}=l;e&&!Bc(e)&&(c=!0),a.push(G(e||K(`default`,!0),n(t,r,i)))}let u=!1,d=!1,f=[],p=new Set;for(let e=0;e<r.length;e++){let i=r[e],s;if(!nl(i)||!(s=Xc(i,`slot`,!0))){i.type!==3&&f.push(i);continue}if(l){t.onError(W(36,s.loc));break}u=!0;let{children:m,loc:h}=i,{arg:g=K(`default`,!0),exp:_,loc:v}=s,y;Bc(g)?y=g?g.content:`default`:c=!0;let b=n(_,m,h),x,S,C;if(x=Xc(i,`if`))c=!0,o.push(Rc(x.exp,ku(g,b),Tu));else if(S=Xc(i,/^else(-if)?$/,!0)){let n=e,i;for(;n--&&(i=r[n],i.type===3););if(i&&nl(i)&&Xc(i,`if`)){r.splice(e,1),e--;let t=o[o.length-1];for(;t.alternate.type===19;)t=t.alternate;t.alternate=S.exp?Rc(S.exp,ku(g,b),Tu):ku(g,b)}else t.onError(W(29,S.loc))}else if(C=Xc(i,`for`)){c=!0;let e=C.parseResult||Su(C.exp,t);e?o.push(Ic(t.helper(hc),[e.source,Lc(wu(e),ku(g,b),!0)])):t.onError(W(31,C.loc))}else{if(y){if(p.has(y)){t.onError(W(37,v));continue}p.add(y),y===`default`&&(d=!0)}a.push(G(g,b))}}l||(u?f.length&&(d?t.onError(W(38,f[0].loc)):a.push(s(void 0,f))):a.push(s(void 0,r)));let m=c?2:Au(e.children)?3:1,h=Pc(a.concat(G(`_`,K(``+m,!1))),i);return o.length&&(h=Ic(t.helper(_c),[h,Nc(o)])),{slots:h,hasDynamicSlots:c}}function ku(e,t){return Pc([G(`name`,e),G(`fn`,t)])}function Au(e){for(let t=0;t<e.length;t++){let n=e[t];if(n.type===1&&(n.tagType===2||n.tagType===0&&Au(n.children)))return!0}return!1}var ju=new WeakMap,Mu=(e,t)=>{if(e.type===1&&(e.tagType===0||e.tagType===1))return function(){let{tag:n,props:r}=e,i=e.tagType===1,a=i?Nu(e,t):`"${n}"`,o=P(a)&&a.callee===fc,s,c,l,u=0,d,f,p,m=o||a===tc||a===nc||!i&&(n===`svg`||n===`foreignObject`||Zc(e,`key`,!0));if(r.length>0){let n=Pu(e,t);s=n.props,u=n.patchFlag,f=n.dynamicPropNames;let r=n.directives;p=r&&r.length?Nc(r.map(e=>Lu(e,t))):void 0}if(e.children.length>0)if(a===rc&&(m=!0,u|=1024),i&&a!==tc&&a!==rc){let{slots:n,hasDynamicSlots:r}=Ou(e,t);c=n,r&&(u|=1024)}else if(e.children.length===1&&a!==tc){let t=e.children[0],n=t.type,r=n===5||n===8;r&&!Fl(t)&&(u|=1),c=r||n===2?t:e.children}else c=e.children;u!==0&&(l=String(u),f&&f.length&&(d=Ru(f))),e.codegenNode=Mc(t,a,s,c,l,d,p,!!m,!1,e.loc)}};function Nu(e,t,n=!1){let{tag:r}=e,i=e.tag===`component`?Zc(e,`is`):Xc(e,`is`);if(i){let e=i.type===6?i.value&&K(i.value.content,!0):i.exp;if(e)return Ic(t.helper(fc),[e])}let a=Hc(r)||t.isBuiltInComponent(r);return a?(n||t.helper(a),a):t.bindingMetadata[r]===`setup`?`$setup[${JSON.stringify(r)}]`:(t.helper(dc),t.components.add(r),al(r,`component`))}function Pu(e,t,n=e.props,r=!1){let{tag:i,loc:a}=e,o=e.tagType===1,s=[],c=[],l=[],u=0,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,_=[],v=({key:e,value:t})=>{if(Bc(e)){let n=e.content,r=D(n);if(!o&&r&&n.toLowerCase()!==`onclick`&&n!==`onUpdate:modelValue`&&!he(n)&&(m=!0),r&&he(n)&&(g=!0),t.type===20||(t.type===4||t.type===8)&&Fl(t)>0)return;n===`ref`?d=!0:n===`class`&&!o?f=!0:n===`style`&&!o?p=!0:n!==`key`&&!_.includes(n)&&_.push(n)}else h=!0};for(let u=0;u<n.length;u++){let f=n[u];if(f.type===6){let{loc:e,name:t,value:n}=f;if(t===`ref`&&(d=!0),t===`is`&&i===`component`)continue;s.push(G(K(t,!0,qc(e,0,t.length)),K(n?n.content:``,!0,n?n.loc:e)))}else{let{name:n,arg:u,exp:d,loc:p}=f,m=n===`bind`,g=n===`on`;if(n===`slot`){o||t.onError(W(39,p));continue}if(n===`once`||n===`is`||m&&i===`component`&&Qc(u,`is`)||g&&r)continue;if(!u&&(m||g)){h=!0,d?(s.length&&(c.push(Pc(Fu(s),a)),s=[]),m?c.push(d):c.push({type:14,loc:p,callee:t.helper(bc),arguments:[d]})):t.onError(W(m?33:34,p));continue}let _=t.directiveTransforms[n];if(_){let{props:n,needRuntime:i}=_(f,e,t);!r&&n.forEach(v),s.push(...n),i&&(l.push(f),ce(i)&&ju.set(f,i))}else l.push(f)}}let y;return c.length?(s.length&&c.push(Pc(Fu(s),a)),y=c.length>1?Ic(t.helper(yc),c,a):c[0]):s.length&&(y=Pc(Fu(s),a)),h?u|=16:(f&&(u|=2),p&&(u|=4),_.length&&(u|=8),m&&(u|=32)),(u===0||u===32)&&(d||g||l.length>0)&&(u|=512),{props:y,directives:l,patchFlag:u,dynamicPropNames:_}}function Fu(e){let t=new Map,n=[];for(let r=0;r<e.length;r++){let i=e[r];if(i.key.type===8||!i.key.isStatic){n.push(i);continue}let a=i.key.content,o=t.get(a);o?(a===`style`||a===`class`||a.startsWith(`on`))&&Iu(o,i):(t.set(a,i),n.push(i))}return n}function Iu(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=Nc([e.value,t.value],e.loc)}function Lu(e,t){let n=[],r=ju.get(e);r?n.push(t.helperString(r)):(t.helper(pc),t.directives.add(e.name),n.push(al(e.name,`directive`)));let{loc:i}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push(`void 0`),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push(`void 0`),n.push(`void 0`));let t=K(`true`,!1,i);n.push(Pc(e.modifiers.map(e=>G(e,t)),i))}return Nc(n,e.loc)}function Ru(e){let t=`[`;for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=`, `);return t+`]`}var zu=(e,t)=>{if(rl(e)){let{children:n,loc:r}=e,{slotName:i,slotProps:a}=Bu(e,t),o=[t.prefixIdentifiers?`_ctx.$slots`:`$slots`,i];a&&o.push(a),n.length&&(a||o.push(`{}`),o.push(Lc([],n,!1,!1,r))),e.codegenNode=Ic(t.helper(gc),o,r)}};function Bu(e,t){let n=`"default"`,r,i=Zc(e,`name`);i&&(i.type===6&&i.value?n=JSON.stringify(i.value.content):i.type===7&&i.exp&&(n=i.exp));let a=i?e.props.filter(e=>e!==i):e.props;if(a.length>0){let{props:n,directives:i}=Pu(e,t,a);r=n,i.length&&t.onError(W(35,i[0].loc))}return{slotName:n,slotProps:r}}var Vu=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/,Hu=(e,t,n,r)=>{let{loc:i,modifiers:a,arg:o}=e;!e.exp&&!a.length&&n.onError(W(34,i));let s;if(o.type===4)if(o.isStatic){let e=o.content;s=K(`on${e.startsWith(`vnode`)?xe(ve(e)):xe(e)}`,!0,o.loc)}else s=Fc([`"on" + ${n.helperString(Sc)}(`,o,`)`]);else s=o,s.children.unshift(`"on" + ${n.helperString(Sc)}(`),s.children.push(`)`);let c=e.exp;c&&!c.content.trim()&&(c=void 0);let l=n.cacheHandlers&&!c;if(c){let e=Kc(c.content),t=!(e||Vu.test(c.content)),n=c.content.includes(`;`);(t||l&&e)&&(c=Fc([`${t?`$event`:`(...args)`} => ${n?`{`:`(`}`,c,n?`}`:`)`]))}let u={props:[G(s,c||K(`() => {}`,!1,i))]};return r&&(u=r(u)),l&&(u.props[0].value=n.cache(u.props[0].value)),u},Uu=(e,t,n)=>{let{exp:r,modifiers:i,loc:a}=e,o=e.arg;return i.includes(`camel`)&&(o.type===4?o.isStatic?o.content=ve(o.content):o.content=`${n.helperString(xc)}(${o.content})`:(o.children.unshift(`${n.helperString(xc)}(`),o.children.push(`)`))),!r||r.type===4&&!r.content.trim()?(n.onError(W(33,a)),{props:[G(o,K(``,!0,a))]}):{props:[G(o,r)]}},Wu=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{let n=e.children,r,a=!1;for(let e=0;e<n.length;e++){let t=n[e];if(el(t)){a=!0;for(let i=e+1;i<n.length;i++){let a=n[i];if(el(a))r||=n[e]={type:8,loc:t.loc,children:[t]},r.children.push(` + `,a),n.splice(i,1),i--;else{r=void 0;break}}}}if(!(!a||n.length===1&&(e.type===0||e.type===1&&e.tagType===0)))for(let e=0;e<n.length;e++){let r=n[e];if(el(r)||r.type===8){let a=[];(r.type!==2||r.content!==` `)&&a.push(r),!t.ssr&&r.type!==2&&a.push(`1 /* ${i[1]} */`),n[e]={type:12,content:r,loc:r.loc,codegenNode:Ic(t.helper(lc),a)}}}}},Gu=new WeakSet,Ku=(e,t)=>{if(e.type===1&&Xc(e,`once`,!0))return Gu.has(e)?void 0:(Gu.add(e),t.helper(Cc),()=>{let e=t.currentNode;e.codegenNode&&=t.cache(e.codegenNode,!0)})},qu=(e,t,n)=>{let{exp:r,arg:i}=e;if(!r)return n.onError(W(40,e.loc)),Ju();if(!Kc(r.type===4?r.content:r.loc.source))return n.onError(W(41,r.loc)),Ju();let a=i||K(`modelValue`,!0),o=i?Bc(i)?`onUpdate:${i.content}`:Fc([`"onUpdate:" + `,i]):`onUpdate:modelValue`,s=[G(a,e.exp),G(o,Fc([`$event => (`,r,` = $event)`]))];if(e.modifiers.length&&t.tagType===1){let t=e.modifiers.map(e=>(Wc(e)?e:JSON.stringify(e))+`: true`).join(`, `),n=i?Bc(i)?`${i.content}Modifiers`:Fc([i,` + "Modifiers"`]):`modelModifiers`;s.push(G(n,K(`{ ${t} }`,!1,e.loc,!0)))}return Ju(s)};function Ju(e=[]){return{props:e}}function Yu(e){return[[Ku,fu,_u,...[],zu,Mu,Eu,Wu],{on:Hu,bind:Uu,model:qu}]}function Xu(e,t={}){let n=t.onError||$s,r=t.mode===`module`;t.prefixIdentifiers===!0?n(W(45)):r&&n(W(46)),t.cacheHandlers&&n(W(47)),t.scopeId&&!r&&n(W(48));let i=N(e)?ll(e,t):e,[a,o]=Yu();return Bl(i,O({},t,{prefixIdentifiers:!1,nodeTransforms:[...a,...t.nodeTransforms||[]],directiveTransforms:O({},o,t.directiveTransforms||{})})),ql(i,O({},t,{prefixIdentifiers:!1}))}var Zu=()=>({props:[]}),Qu=Symbol(``),$u=Symbol(``),ed=Symbol(``),td=Symbol(``),nd=Symbol(``),rd=Symbol(``),id=Symbol(``),ad=Symbol(``),od=Symbol(``),sd=Symbol(``);kc({[Qu]:`vModelRadio`,[$u]:`vModelCheckbox`,[ed]:`vModelText`,[td]:`vModelSelect`,[nd]:`vModelDynamic`,[rd]:`withModifiers`,[id]:`withKeys`,[ad]:`vShow`,[od]:`Transition`,[sd]:`TransitionGroup`});var cd;function ld(e){return(cd||=document.createElement(`div`)).innerHTML=e,cd.textContent}var ud=r(`style,iframe,script,noscript`,!0),dd={isVoidTag:v,isNativeTag:e=>g(e)||_(e),isPreTag:e=>e===`pre`,decodeEntities:ld,isBuiltInComponent:e=>{if(Vc(e,`Transition`))return od;if(Vc(e,`TransitionGroup`))return sd},getNamespace(e,t){let n=t?t.ns:0;if(t&&n===2)if(t.tag===`annotation-xml`){if(e===`svg`)return 1;t.props.some(e=>e.type===6&&e.name===`encoding`&&e.value!=null&&(e.value.content===`text/html`||e.value.content===`application/xhtml+xml`))&&(n=0)}else /^m(?:[ions]|text)$/.test(t.tag)&&e!==`mglyph`&&e!==`malignmark`&&(n=0);else t&&n===1&&(t.tag===`foreignObject`||t.tag===`desc`||t.tag===`title`)&&(n=0);if(n===0){if(e===`svg`)return 1;if(e===`math`)return 2}return n},getTextMode({tag:e,ns:t}){if(t===0){if(e===`textarea`||e===`title`)return 1;if(ud(e))return 2}return 0}},fd=e=>{e.type===1&&e.props.forEach((t,n)=>{t.type===6&&t.name===`style`&&t.value&&(e.props[n]={type:7,name:`bind`,arg:K(`style`,!0,t.loc),exp:pd(t.value.content,t.loc),modifiers:[],loc:t.loc})})},pd=(e,t)=>{let n=d(e);return K(JSON.stringify(n),!1,t,!0)};function md(e,t){return W(e,t,void 0)}var hd=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(md(49,i)),t.children.length&&(n.onError(md(50,i)),t.children.length=0),{props:[G(K(`innerHTML`,!0,i),r||K(``,!0))]}},gd=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(md(51,i)),t.children.length&&(n.onError(md(52,i)),t.children.length=0),{props:[G(K(`textContent`,!0,i),r||K(``,!0))]}},_d=(e,t,n)=>{let r=qu(e,t,n);if(!r.props.length||t.tagType===1)return r;e.arg&&n.onError(md(54,e.arg.loc));let{tag:i}=t,a=n.isCustomElement(i);if(i===`input`||i===`textarea`||i===`select`||a){let o=ed,s=!1;if(i===`input`||a){let r=Zc(t,`type`);if(r){if(r.type===7)o=nd;else if(r.value)switch(r.value.content){case`radio`:o=Qu;break;case`checkbox`:o=$u;break;case`file`:s=!0,n.onError(md(55,e.loc));break;default:break}}else $c(t)&&(o=nd)}else i===`select`&&(o=td);s||(r.needRuntime=n.helper(o))}else n.onError(md(53,e.loc));return r.props=r.props.filter(e=>!(e.key.type===4&&e.key.content===`modelValue`)),r},vd=r(`passive,once,capture`),yd=r(`stop,prevent,self,ctrl,shift,alt,meta,exact,middle`),bd=r(`left,right`),xd=r(`onkeyup,onkeydown,onkeypress`,!0),Sd=(e,t)=>{let n=[],r=[],i=[];for(let a=0;a<t.length;a++){let o=t[a];vd(o)?i.push(o):bd(o)?Bc(e)?xd(e.content)?n.push(o):r.push(o):(n.push(o),r.push(o)):yd(o)?r.push(o):n.push(o)}return{keyModifiers:n,nonKeyModifiers:r,eventOptionModifiers:i}},Cd=(e,t)=>Bc(e)&&e.content.toLowerCase()===`onclick`?K(t,!0):e.type===4?e:Fc([`(`,e,`) === "onClick" ? "${t}" : (`,e,`)`]),wd=(e,t,n)=>Hu(e,t,n,t=>{let{modifiers:r}=e;if(!r.length)return t;let{key:i,value:a}=t.props[0],{keyModifiers:o,nonKeyModifiers:s,eventOptionModifiers:c}=Sd(i,r);if(s.includes(`right`)&&(i=Cd(i,`onContextmenu`)),s.includes(`middle`)&&(i=Cd(i,`onMouseup`)),s.length&&(a=Ic(n.helper(rd),[a,JSON.stringify(s)])),o.length&&(!Bc(i)||xd(i.content))&&(a=Ic(n.helper(id),[a,JSON.stringify(o)])),c.length){let e=c.map(xe).join(``);i=Bc(i)?K(`${i.content}${e}`,!0):Fc([`(`,i,`) + "${e}"`])}return{props:[G(i,a)]}}),Td=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(md(57,i)),{props:[],needRuntime:n.helper(ad)}},Ed=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag===`script`||e.tag===`style`)&&(t.onError(md(59,e.loc)),t.removeNode())},Dd=[fd,...[]],Od={cloak:Zu,html:hd,text:gd,model:_d,on:wd,show:Td};function kd(e,t={}){return Xu(e,O({},dd,t,{nodeTransforms:[Ed,...Dd,...t.nodeTransforms||[]],directiveTransforms:O({},Od,t.directiveTransforms||{}),transformHoist:null}))}var Ad=Object.create(null);function jd(e,t){if(!N(e))if(e.nodeType)e=e.innerHTML;else return T;let n=e,r=Ad[n];if(r)return r;if(e[0]===`#`){let t=document.querySelector(e);e=t?t.innerHTML:``}let{code:i}=kd(e,O({hoistStatic:!0,onError(e){throw e}},t)),a=Function(`Vue`,i)(_o);return a._rc=!0,Ad[n]=a}Za(jd);var Md=`stackline-vue-multiselect-dropdown-styles`,Nd=`
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
  min-width: 0;
  min-height: 0;
  color: var(--vmsd-muted);
  font-size: 0.8rem;
  font-weight: 600;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic) .vmsd-trigger {
  padding-right: 104px;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic):not(.vmsd-has-clear) .vmsd-trigger {
  padding-right: 74px;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic) .vmsd-overflow {
  position: absolute;
  top: 50%;
  right: 76px;
  transform: translateY(-50%);
  z-index: 1;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic):not(.vmsd-has-clear) .vmsd-overflow {
  right: 42px;
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
  display: inline-grid;
  place-items: center;
  align-self: center;
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 0;
  border: 2px solid var(--vmsd-border-strong);
  border-radius: 6px;
  background-color: var(--vmsd-bg);
  line-height: 0;
  vertical-align: middle;
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
  transform: translate(-50%, -62%) rotate(-45deg);
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
  color: #333333;
  font-size: 14px;
  font-weight: 400;
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
  transform: translate(-50%, -62%) rotate(-45deg);
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
    align-items: flex-start;
    padding-right: 54px;
  }
}

/* stackline-vue3-live-20260527 */
`;function Pd(){if(typeof document>`u`||document.getElementById(Md))return;let e=document.createElement(`style`);e.id=Md,e.textContent=Nd,document.head.appendChild(e)}var Fd={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`};function Id(e){return e===`remove`?`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`:e===`clear`?`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`:e===`search`?`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`:e===`angle-up`?`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`}function Ld(e,t,n=`vmsd-icon`){return e(`svg`,{class:n,attrs:{viewBox:t===`remove`?`0 0 47.971 47.971`:t===`clear`?`0 0 51.976 51.976`:t===`search`?`0 0 615.52 615.52`:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`}},[e(`path`,{attrs:{d:Id(t)}})])}function Rd(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function zd(e){if(!e)return null;let t={};for(let[n,r]of Object.entries(e)){if(n===`attrs`||n===`domProps`){Object.assign(t,r);continue}if(n===`on`&&r&&typeof r==`object`){for(let[e,n]of Object.entries(r))t[`on${Rd(e)}`]=n;continue}t[n]=r}return t}var Z=(...e)=>{let[t,n,r]=e;return e.length===1?lo(t):e.length===2&&(Array.isArray(n)||typeof n==`string`||typeof n==`number`||n==null)?lo(t,null,n):lo(t,zd(n),r)};function Bd(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function Vd(e,t){if(Bd(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function Hd(e,t){if(Bd(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return Vd(e,t)}function Ud(e){return!Bd(e)&&!!e.disabled}function Wd(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set;if(i.add(Vd(e,n).toLowerCase()),!Bd(e)){let t=n.searchBy.length?n.searchBy:[n.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}for(let e of i)if(e.indexOf(r)>=0)return!0;return!1}function Gd(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!Bd(e)){let n=t.groupBy,r=e;if(n in r)return String(r[n]||``)}return``}function Kd(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=Gd(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function qd(e,t,n){let r=new Map;for(let i of e.concat(t))r.set(Hd(i,n),i);return Array.from(r.values())}function Jd(e,t,n,r){return e?e(n,r,t):null}function Yd(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/["\\]/g,`\\$&`)}function Xd(e){return e.key===`Enter`||e.key===` `||e.key===`Spacebar`}function Zd(e){let t=e;return t?t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable:!1}var Qd={name:`VueMultiselectDropdown`,emits:[`update:modelValue`,`input`,`update:selectedItems`,`change`,`select`,`de-select`,`select-all`,`de-select-all`,`group-select`,`group-de-select`,`scroll-to-end`,`add-filter-new-item`,`open`,`close`],props:{data:{type:Array,default:()=>[]},modelValue:{type:Array,default:void 0},value:{type:Array,default:void 0},selectedItems:{type:Array,default:void 0},defaultSelectedItems:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},renderItem:{type:Function,default:void 0},renderBadge:{type:Function,default:void 0},renderEmptyState:{type:Function,default:void 0}},data(){return{isOpen:!1,query:``,focusedKey:``,internalSelected:Array.isArray(this.defaultSelectedItems)?this.defaultSelectedItems.slice():[],menuStyle:{},bodyListMaxHeight:void 0,menuPlaceholder:null,menuAttachedToBody:!1,effectivePosition:`bottom`,instanceId:`stackline-vmsd-${Math.random().toString(36).slice(2)}`}},computed:{resolvedSettings(){let e={...Fd,...this.settings||{}},t=e.skin||e.theme||`classic`;return{...e,skin:t,disabled:!!(e.disabled||this.disabled),searchBy:Array.isArray(e.searchBy)?e.searchBy:[]}},selected(){return Array.isArray(this.selectedItems)?this.selectedItems:Array.isArray(this.modelValue)?this.modelValue:Array.isArray(this.value)?this.value:this.internalSelected},filteredItems(){let e=this.resolvedSettings;return(this.data||[]).filter(t=>Wd(t,this.query,e))},groupedItems(){return Kd(this.filteredItems,this.resolvedSettings)},visibleSelected(){let e=this.resolvedSettings.badgeShowLimit;return this.selected.slice(0,e)},hiddenSelectedCount(){return Math.max(0,this.selected.length-this.visibleSelected.length)},openDirection(){return this.effectivePosition===`top`?`up`:`down`},shouldAppendToBody(){return!!(this.resolvedSettings.appendToBody||this.resolvedSettings.tagToBody)}},watch:{isOpen(e){this.$nextTick(()=>{e?(this.attachMenuToBody(),this.updateMenuPosition(),this.resolvedSettings.searchAutofocus&&this.resolvedSettings.enableSearchFilter&&this.focusSearch(),this.$emit(`open`)):(this.restoreMenuToComponent(),this.menuStyle={},this.bodyListMaxHeight=void 0,this.$emit(`close`))})},selected(){this.$nextTick(this.updateMenuPosition)},filteredItems(){this.$nextTick(this.updateMenuPosition)},settings:{deep:!0,handler(){this.$nextTick(this.updateMenuPosition)}}},mounted(){Pd(),document.addEventListener(`click`,this.onDocumentClick,!0),document.addEventListener(`keydown`,this.onDocumentKeydown,!0),window.addEventListener(`resize`,this.updateMenuPosition),window.addEventListener(`scroll`,this.updateMenuPosition,!0)},beforeUnmount(){document.removeEventListener(`click`,this.onDocumentClick,!0),document.removeEventListener(`keydown`,this.onDocumentKeydown,!0),window.removeEventListener(`resize`,this.updateMenuPosition),window.removeEventListener(`scroll`,this.updateMenuPosition,!0),this.restoreMenuToComponent()},methods:{getLabel(e){return Vd(e,this.resolvedSettings)},getKey(e){return Hd(e,this.resolvedSettings)},isSelected(e){let t=this.getKey(e);return this.selected.some(e=>this.getKey(e)===t)},visibleSelectableItems(){return this.filteredItems.filter(e=>!Ud(e))},emitSelection(e){!Array.isArray(this.selectedItems)&&!Array.isArray(this.modelValue)&&!Array.isArray(this.value)&&(this.internalSelected=e),this.$emit(`update:modelValue`,e),this.$emit(`input`,e),this.$emit(`update:selectedItems`,e),this.$emit(`change`,e)},openDropdown(){this.resolvedSettings.disabled||(this.isOpen=!0)},closeDropdown(){this.isOpen=!1,this.query=``,this.focusedKey=``},toggleDropdown(){this.isOpen?this.closeDropdown():this.openDropdown()},focusSearch(){this.isOpen||this.openDropdown();let e=this.$refs.searchInput;e&&typeof e.focus==`function`&&e.focus()},clearSelection(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.selected.slice();this.emitSelection([]),this.$emit(`de-select-all`,t)},selectAll(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.resolvedSettings,n=this.visibleSelectableItems();if(n.length>0&&n.every(e=>this.isSelected(e))){let e=new Set(n.map(e=>this.getKey(e))),t=this.selected.filter(t=>!e.has(this.getKey(t)));this.emitSelection(t),this.$emit(`de-select-all`,n);return}let r=t.limitSelection?Math.max(t.limitSelection-this.selected.length,0):2**53-1,i=new Set(this.selected.map(e=>this.getKey(e))),a=n.filter(e=>!i.has(this.getKey(e))).slice(0,r),o=t.singleSelection?n.slice(0,1):qd(this.selected,a,t);this.emitSelection(o),this.$emit(`select-all`,o)},deSelectAll(e){this.clearSelection(e)},selectGroup(e,t,n){n.preventDefault(),n.stopPropagation();let r=this.resolvedSettings,i=t.filter(e=>!Ud(e));if(i.every(e=>this.isSelected(e))){let t=new Set(i.map(e=>this.getKey(e))),n=this.selected.filter(e=>!t.has(this.getKey(e)));this.emitSelection(n),this.$emit(`group-de-select`,e,i);return}let a=r.singleSelection?i.slice(0,1):qd(this.selected,i,r);this.emitSelection(a),this.$emit(`group-select`,e,i)},toggleItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.isSelected(e),r=!!this.resolvedSettings.limitSelection&&this.selected.length>=this.resolvedSettings.limitSelection;if(this.resolvedSettings.disabled||Ud(e)||r&&!n)return;let i=this.getKey(e);if(this.selected.some(e=>this.getKey(e)===i)){let t=this.selected.filter(e=>this.getKey(e)!==i);this.emitSelection(t),this.$emit(`de-select`,e);return}let a=this.resolvedSettings.singleSelection?[e]:this.selected.concat(e);this.resolvedSettings.limitSelection>0&&(a=a.slice(0,this.resolvedSettings.limitSelection)),this.emitSelection(a),this.$emit(`select`,e),(this.resolvedSettings.singleSelection||this.resolvedSettings.closeDropDownOnSelection)&&this.closeDropdown()},removeItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.getKey(e),r=this.selected.filter(e=>this.getKey(e)!==n);this.emitSelection(r),this.$emit(`de-select`,e)},addFilterItem(e){e.preventDefault(),e.stopPropagation();let t=this.query.trim();if(!t)return;let n={[this.resolvedSettings.primaryKey]:t.toLowerCase().replace(/\s+/g,`-`),[this.resolvedSettings.labelKey]:t};this.$emit(`add-filter-new-item`,t,n),this.toggleItem(n),this.query=``},onTriggerKeydown(e){if(Xd(e)){e.preventDefault(),this.toggleDropdown();return}if(e.key===`ArrowDown`){e.preventDefault(),this.openDropdown(),this.focusFirstOption();return}if(e.key===`ArrowUp`){e.preventDefault(),this.openDropdown(),this.focusLastOption();return}e.key===`Escape`&&this.closeDropdown()},onListKeydown(e){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.closeDropdown();return}if(Zd(e.target)&&e.key!==`ArrowDown`)return;let t=this.visibleSelectableItems();if(!t.length)return;let n=Math.max(0,t.findIndex(e=>this.getKey(e)===this.focusedKey));if(e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation();let r=t[Math.min(n+1,t.length-1)];this.focusOption(r);return}if(e.key===`ArrowUp`){e.preventDefault(),e.stopPropagation();let r=t[Math.max(n-1,0)];this.focusOption(r);return}if(e.key===`Home`){e.preventDefault(),e.stopPropagation(),this.focusFirstOption();return}if(e.key===`End`){e.preventDefault(),e.stopPropagation(),this.focusLastOption();return}if(Xd(e)){e.preventDefault(),e.stopPropagation();let n=t.find(e=>this.getKey(e)===this.focusedKey)||t[0];this.toggleItem(n);return}},focusFirstOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems()[0];e&&this.focusOption(e)})},focusLastOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems(),t=e[e.length-1];t&&this.focusOption(t)})},focusOption(e){let t=this.getKey(e);this.focusedKey=t,this.$nextTick(()=>{let e=this.$refs.menu?.querySelector(`[data-vmsd-key="${Yd(t)}"]`);e&&(e.focus(),e.scrollIntoView({block:`nearest`}))})},onInlineKeydown(e){Xd(e)&&e.stopPropagation(),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusFirstOption()),e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusLastOption())},onTriggerClick(e){let t=e.target;t&&t.closest(`button`)||this.toggleDropdown()},onDocumentClick(e){if(!this.isOpen)return;let t=this.$el,n=this.$refs.menu,r=e.target;t&&t.contains(r)||n&&n.contains(r)||this.closeDropdown()},onDocumentKeydown(e){this.isOpen&&this.resolvedSettings.escapeToClose&&e.key===`Escape`&&this.closeDropdown()},onListScroll(e){let t=e.target;if(!t)return;let n={scrollTop:t.scrollTop,scrollHeight:t.scrollHeight,clientHeight:t.clientHeight};t.scrollTop+t.clientHeight>=t.scrollHeight-4&&this.$emit(`scroll-to-end`,n)},attachMenuToBody(){if(!this.shouldAppendToBody||!this.isOpen||typeof document>`u`)return;let e=this.$refs.menu;!e||e.parentNode===document.body||(!this.menuPlaceholder&&e.parentNode&&(this.menuPlaceholder=document.createComment(`stackline-vue-multiselect-menu`),e.parentNode.insertBefore(this.menuPlaceholder,e)),document.body.appendChild(e),this.menuAttachedToBody=!0)},restoreMenuToComponent(){let e=this.$refs.menu;!e||!this.menuPlaceholder||!this.menuPlaceholder.parentNode||(this.menuPlaceholder.parentNode.insertBefore(e,this.menuPlaceholder.nextSibling),this.menuPlaceholder.parentNode.removeChild(this.menuPlaceholder),this.menuPlaceholder=null,this.menuAttachedToBody=!1,this.menuStyle={})},updateMenuPosition(){if(!this.isOpen||typeof window>`u`)return;let e=this.$refs.trigger,t=this.$refs.menu;if(!e||!t)return;let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=n.top,a=r-n.bottom,o=t.offsetHeight||Math.min(this.resolvedSettings.maxHeight+92,420),s=this.resolvedSettings.position===`top`?`top`:`bottom`,c=i>a+48,l=this.resolvedSettings.autoPosition?a<o&&c&&o<i?`top`:`bottom`:s;if(this.effectivePosition=l,!this.shouldAppendToBody){this.bodyListMaxHeight=void 0;return}let u=this.$refs.list?.offsetHeight||Math.min(this.resolvedSettings.maxHeight,o),d=Math.max(0,o-u),f=l===`top`?Math.max(0,n.top-8-8):Math.max(0,r-n.bottom-8-8),p=o>0?Math.max(0,Math.min(this.resolvedSettings.maxHeight,f-d)):this.resolvedSettings.maxHeight,m=d+p,h=l===`top`?n.top-m-8:n.bottom+8,g=l===`top`?Math.max(8,h):h,_=Math.max(0,window.innerWidth-16),v=Math.min(n.width,_),y=Math.min(Math.max(8,n.left),window.innerWidth-v-8),b={position:`fixed`,top:`${g}px`,left:`${y}px`,width:`${v}px`,maxWidth:`${_}px`,zIndex:`100000`,display:this.isOpen?`block`:`none`};this.bodyListMaxHeight=p,this.menuStyle=b}},render(){let e=this.resolvedSettings,t=String(e.skin||e.theme||`classic`),n=[`classic`,`material`,`dark`,`custom`].includes(t)?``:`theme-custom`,r=this.selected.length>0,i=this.visibleSelected,a=this.hiddenSelectedCount,o=e.clearAll&&r&&!e.disabled,s=this.visibleSelectableItems(),c=s.length>0&&s.every(e=>this.isSelected(e)),l=e.enableCheckAll&&!e.singleSelection||!!(e.addNewItemOnFilter&&this.query.trim()),u=[`vmsd-menu`,`vmsd-${this.effectivePosition}`,`skin-${t}`,`theme-${t}`,n,this.shouldAppendToBody?`vmsd-body-overlay`:``].filter(Boolean),d=e.singleSelection&&r?[Z(`span`,{class:`vmsd-single-value`},[this.getLabel(this.selected[0])])]:i.map(t=>{let n=this.getLabel(t),r={item:t,label:n,selected:!0,disabled:!1,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},i=Jd(this.renderBadge,Z,t,r),a=typeof e.removeItemAriaLabel==`function`?e.removeItemAriaLabel(t):`${e.removeItemAriaLabel}: ${n}`;return Z(`span`,{class:`vmsd-badge`,key:this.getKey(t)},[Z(`span`,{class:`vmsd-badge-label`},[i||n]),e.disabled?null:Z(`button`,{class:`vmsd-badge-remove`,attrs:{type:`button`,"aria-label":a},on:{click:e=>this.removeItem(t,e),keydown:this.onInlineKeydown}},[Ld(Z,`remove`)])])}),f=r?[Z(`span`,{class:`vmsd-badge-list`},d)]:[Z(`span`,{class:`vmsd-placeholder`},[e.text])];a>0&&f.push(Z(`span`,{class:`vmsd-overflow`,attrs:{"aria-label":`${a} more selected options`}},[`+${a}`]));let p=Z(`div`,{ref:`trigger`,class:[`vmsd-trigger`,e.disabled?`vmsd-disabled`:``],attrs:{role:`combobox`,tabindex:e.disabled?`-1`:`0`,"aria-label":r?`${e.ariaLabel}: ${this.selected.map(e=>this.getLabel(e)).join(`, `)}`:e.ariaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-haspopup":`listbox`,"aria-disabled":e.disabled?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:this.onTriggerClick,keydown:this.onTriggerKeydown}},[Z(`div`,{class:`vmsd-value`},f),Z(`div`,{class:`vmsd-actions`},[o?Z(`button`,{class:`vmsd-clear`,attrs:{type:`button`,"aria-label":e.clearAllAriaLabel},on:{click:e=>this.clearSelection(e),keydown:this.onInlineKeydown}},[Ld(Z,`remove`)]):null,Z(`button`,{class:`vmsd-arrow-button`,attrs:{type:`button`,disabled:e.disabled,"aria-label":this.isOpen?e.closeDropdownAriaLabel:e.openDropdownAriaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:e=>{e.preventDefault(),e.stopPropagation(),this.toggleDropdown()},keydown:this.onInlineKeydown}},[Z(`span`,{class:`vmsd-arrow`,attrs:{"aria-hidden":`true`}},[Ld(Z,this.isOpen?`angle-up`:`angle-down`)])])])]),m=e.enableSearchFilter?Z(`div`,{class:`vmsd-search-shell`},[Ld(Z,`search`,`vmsd-search-icon`),Z(`input`,{ref:`searchInput`,class:`vmsd-search-input`,domProps:{value:this.query},attrs:{type:`text`,placeholder:e.searchPlaceholderText,"aria-label":e.searchAriaLabel},on:{input:e=>{this.query=String(e.target.value||``)},keydown:this.onListKeydown}}),this.query?Z(`button`,{class:`vmsd-search-clear`,attrs:{type:`button`,"aria-label":e.clearSearchAriaLabel},on:{click:()=>this.query=``,keydown:this.onInlineKeydown}},[Ld(Z,`clear`)]):null]):null,h=l?Z(`div`,{class:`vmsd-bulk-actions`},[e.enableCheckAll&&!e.singleSelection?Z(`button`,{class:`vmsd-inline-button vmsd-select-all-button`,attrs:{type:`button`,disabled:e.disabled||s.length===0},on:{click:e=>this.selectAll(e),keydown:this.onInlineKeydown}},[e.showCheckbox?Z(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":c?`true`:`false`,"aria-hidden":`true`}}):null,Z(`span`,[c?e.unSelectAllText:e.selectAllText])]):null,e.addNewItemOnFilter&&this.query.trim()?Z(`button`,{class:`vmsd-inline-button vmsd-add-button`,attrs:{type:`button`},on:{click:this.addFilterItem,keydown:this.onInlineKeydown}},[`${e.addNewButtonText} "${this.query.trim()}"`]):null]):null,g=t=>{let n=this.getLabel(t),r=this.isSelected(t),i=!!e.limitSelection&&this.selected.length>=e.limitSelection,a=e.disabled||Ud(t)||i&&!r,o=this.getKey(t),s={item:t,label:n,selected:r,disabled:a,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},c=Jd(this.renderItem,Z,t,s);return Z(`div`,{key:o,class:[`vmsd-option`,r?`vmsd-selected`:``,a?`vmsd-disabled`:``],attrs:{role:`option`,tabindex:a?`-1`:`0`,"data-vmsd-option":`true`,"data-vmsd-key":o,"aria-disabled":a?`true`:`false`,"aria-selected":r?`true`:`false`},on:{click:e=>{a||this.toggleItem(t,e)},focus:()=>this.focusedKey=o,mouseenter:()=>this.focusedKey=o,keydown:this.onListKeydown}},[e.showCheckbox?Z(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":r?`true`:`false`,"aria-hidden":`true`}}):null,c||Z(`div`,{class:`vmsd-option-body`},[Z(`div`,{class:`vmsd-option-label`},[n]),!Bd(t)&&t.caption?Z(`span`,{class:`vmsd-option-hint`},[String(t.caption)]):null])])},_=e.loading?[Z(`div`,{class:`vmsd-state`,attrs:{role:`status`}},[e.loadingText])]:e.groupBy?this.groupedItems.map(t=>Z(`div`,{class:`vmsd-group`,key:t.name,attrs:{role:`group`,"aria-label":t.name}},[Z(`div`,{class:`vmsd-group-header`},[Z(`span`,[`${t.name} \xB7 ${t.items.length}`]),e.selectGroup?Z(`button`,{class:`vmsd-group-action`,attrs:{type:`button`},on:{click:e=>this.selectGroup(t.name,t.items,e)}},[t.items.filter(e=>!Ud(e)).every(e=>this.isSelected(e))?`Unselect`:`Select`]):null]),t.items.map(g)])):this.filteredItems.map(g);if(!this.filteredItems.length&&!e.loading){let t=this.renderEmptyState?this.renderEmptyState(this.query,Z):e.noDataLabel;_.push(Z(`div`,{class:`vmsd-state`},[t]))}let v=Z(`div`,{ref:`menu`,class:u,style:{...this.shouldAppendToBody?this.menuStyle:{},display:this.isOpen?`block`:`none`},attrs:{role:`presentation`,"aria-hidden":this.isOpen?`false`:`true`},on:{keydown:this.onListKeydown}},[Z(`div`,{class:`vmsd-toolbar`},[h,m]),Z(`div`,{ref:`list`,class:`vmsd-list`,style:{maxHeight:`${this.shouldAppendToBody&&this.bodyListMaxHeight!=null?this.bodyListMaxHeight:e.maxHeight}px`},attrs:{id:`${this.instanceId}-listbox`,role:`listbox`,"aria-label":e.listboxAriaLabel,"aria-multiselectable":e.singleSelection?`false`:`true`},on:{scroll:this.onListScroll}},_)]);return Z(`div`,{class:[`vmsd-root`,`skin-${t}`,`theme-${t}`,n,this.isOpen?`vmsd-open`:``,this.effectivePosition===`top`?`vmsd-opens-up`:`vmsd-opens-down`,e.classes,r?`vmsd-has-selection`:``,o?`vmsd-has-clear`:``,a>0?`vmsd-has-overflow`:``],attrs:{"data-open":this.isOpen?`true`:`false`}},[p,v])}},$d=`3.0.2`,ef=go,Q=[{id:1,itemName:`Brazil`,name:`BR`,capital:`Brasilia`,category:`South America`,region:`Americas`,flag:`BR`,caption:`Brasilia - Americas`},{id:2,itemName:`Canada`,name:`CA`,capital:`Ottawa`,category:`North America`,region:`Americas`,flag:`CA`,caption:`Ottawa - Americas`},{id:3,itemName:`Portugal`,name:`PT`,capital:`Lisbon`,category:`Europe`,region:`Europe`,flag:`PT`,caption:`Lisbon - Europe`},{id:4,itemName:`United States`,name:`US`,capital:`Washington, DC`,category:`North America`,region:`Americas`,flag:`US`,caption:`Washington, DC - Americas`},{id:5,itemName:`Argentina`,name:`AR`,capital:`Buenos Aires`,category:`South America`,region:`Americas`,flag:`AR`,caption:`Buenos Aires - Americas`},{id:6,itemName:`Germany`,name:`DE`,capital:`Berlin`,category:`Europe`,region:`Europe`,flag:`DE`,caption:`Berlin - Europe`},{id:7,itemName:`Mexico`,name:`MX`,capital:`Mexico City`,category:`North America`,region:`Americas`,flag:`MX`,caption:`Mexico City - Americas`},{id:8,itemName:`Colombia`,name:`CO`,capital:`Bogota`,category:`South America`,region:`Americas`,flag:`CO`,caption:`Bogota - Americas`},{id:9,itemName:`Uruguay`,name:`UY`,capital:`Montevideo`,category:`South America`,region:`Americas`,flag:`UY`,caption:`Montevideo - Americas`},{id:10,itemName:`Costa Rica`,name:`CR`,capital:`San Jose`,category:`Central America`,region:`Americas`,flag:`CR`,caption:`San Jose - Americas`,disabled:!0}],tf=[{id:1,itemName:`Vue`,category:`Frontend`},{id:2,itemName:`JavaScript`,category:`Frontend`},{id:3,itemName:`Node.js`,category:`Backend`},{id:4,itemName:`GraphQL`,category:`Backend`},{id:5,itemName:`Docker`,category:`DevOps`},{id:6,itemName:`Kubernetes`,category:`DevOps`},{id:7,itemName:`Cypress`,category:`Testing`},{id:8,itemName:`Playwright`,category:`Testing`}],nf=[`Brazilian`,`Canadian`,`Mexican`,`Colombian`],rf=[`Smith`,`Johnson`,`Williams`,`Brown`,`Jones`,`Miller`,`Davis`,`Garcia`,`Wilson`,`Taylor`,`Thomas`,`Moore`,`Martin`,`Jackson`,`Thompson`,`White`,`Lopez`,`Lee`,`Harris`,`Clark`],af=Array.from({length:180},(e,t)=>({id:t+1,name:`${rf[t%rf.length]} ${t+1}`,category:nf[t%nf.length]}));function of(e,t){return{id:t+100,itemName:e,name:e.slice(0,2).toUpperCase(),capital:e,category:`Custom`,region:`Custom`,flag:`NA`,caption:`${e} - Custom`}}function sf(e,t,n){return Object.assign({},e,{disabled:!!(e.disabled||n),skin:t})}var $=[{id:`basic-counter`,title:`01. Basic multi select`,description:`Search, select all, clear all, and a real overflow counter with only three visible badges.`,dataName:`countries`,data:Q,initialSelected:Q.slice(0,4),settings:{text:`Select Countries`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3,clearAll:!0}},{id:`all-visible-counter`,title:`02. All selected badges visible`,description:`The counter disappears when every selected item is visible in the trigger.`,dataName:`countries`,data:Q.slice(0,6),initialSelected:Q.slice(0,4),settings:{text:`All Selected Visible`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:10,clearAll:!0}},{id:`single-selection`,title:`03. Single selection`,description:`One selected value, searchable data, and close-on-selection behavior.`,dataName:`countries`,data:Q,initialSelected:Q.slice(0,1),settings:{text:`Select Country`,singleSelection:!0,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`}},{id:`search-by`,title:`04. Search by specific fields`,description:`Search only in the configured object keys and keep the display label stable.`,dataName:`countries`,data:Q,initialSelected:Q.slice(2,5),settings:{text:`Search by Country or Capital`,enableSearchFilter:!0,searchBy:[`itemName`,`capital`],searchPlaceholderText:`Search country or capital`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`grouped`,title:`05. Grouped options`,description:`Group rows by category and select or unselect a whole group.`,dataName:`countries`,data:Q,initialSelected:[Q[0],Q[4]],settings:{text:`Grouped Countries`,enableSearchFilter:!0,groupBy:`category`,selectGroup:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`limit-selection`,title:`06. Selection limit`,description:`Stop new selections after the configured limit while keeping removal available.`,dataName:`countries`,data:Q,initialSelected:Q.slice(0,2),settings:{text:`Pick Two Countries`,enableSearchFilter:!0,limitSelection:2,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2}},{id:`custom-rendering`,title:`07. Custom item and badge rendering`,description:`Use Vue render functions for menu rows and selected chips.`,dataName:`countries`,data:Q,initialSelected:Q.slice(0,3),customRenderer:!0,settings:{text:`Countries With Renderers`,enableSearchFilter:!0,groupBy:`region`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`add-filter-item`,title:`08. Search and add item`,description:`Create a new option from the current filter text and select it immediately.`,dataName:`countries`,data:Q.slice(0,6),initialSelected:Q.slice(0,2),addFromFilter:!0,settings:{text:`Add Country`,enableSearchFilter:!0,addNewItemOnFilter:!0,addNewButtonText:`Add country`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`disabled-toggle`,title:`09. Disabled state`,description:`Toggle disabled mode without losing the controlled selection state.`,dataName:`countries`,data:Q.slice(0,6),initialSelected:Q.slice(0,3),allowDisabledToggle:!0,settings:{text:`Toggle Disabled`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`form-validation`,title:`10. Controlled form validation`,description:`Keep selected items in Vue form state and derive validation from the array.`,dataName:`skills`,data:tf,initialSelected:tf.slice(0,1),settings:{text:`Select Skills`,enableSearchFilter:!0,groupBy:`category`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`long-list`,title:`11. Long list with keyboard scroll`,description:`A compact max height keeps the list scrollable with pointer and keyboard navigation.`,dataName:`people`,data:af.slice(0,120),initialSelected:af.slice(0,3),settings:{text:`Select People`,enableSearchFilter:!0,maxHeight:140,primaryKey:`id`,labelKey:`name`,badgeShowLimit:3}},{id:`lazy-loading`,title:`12. Local lazy loading`,description:`Append more rows when the scrollable menu reaches the end.`,dataName:`people`,data:af.slice(0,30),initialSelected:[],lazy:!0,settings:{text:`Lazy People`,enableSearchFilter:!0,lazyLoading:!0,maxHeight:140,primaryKey:`id`,labelKey:`name`,badgeShowLimit:3}},{id:`body-overlay`,title:`13. Dialog and overflow container`,description:`Use appendToBody/tagToBody to escape clipping inside overflow, dialogs, drawers, and modal surfaces.`,dataName:`countries`,data:Q,initialSelected:Q.slice(0,3),overflowDemo:!0,settings:{text:`Dialog dropdown`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2,maxHeight:180,appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`}},{id:`body-overlay-top`,title:`14. Body overlay auto direction`,description:`Prefer opening above the trigger, but let autoPosition choose below when the viewport has room.`,dataName:`countries`,data:Q,initialSelected:Q.slice(2,5),overflowDemo:!0,settings:{text:`Dialog dropdown top`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2,maxHeight:180,appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`top`}},{id:`methods`,title:`15. Instance methods`,description:`Open, close, focus search, select all, and clear from external controls.`,dataName:`countries`,data:Q.slice(0,8),initialSelected:Q.slice(0,2),showMethods:!0,settings:{text:`Method Controlled`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}}],cf=[{path:`basic`,label:`Basic example`,example:$[0]},{path:`allvisible`,label:`All visible counter`,example:$[1]},{path:`singleselection`,label:`Single selection`,example:$[2]},{path:`searchfilter`,label:`Search filter`,example:$[3]},{path:`groupby`,label:`Group By`,example:$[4]},{path:`limitselection`,label:`Selection limit`,example:$[5]},{path:`templating`,label:`Templating`,example:$[6]},{path:`searchfilterAddNewItem`,label:`Search and Add New Item`,example:$[7]},{path:`disabledstate`,label:`Disabled state`,example:$[8]},{path:`usinginform`,label:`Using in Forms`,example:$[9]},{path:`virtualscrolling`,label:`Virtual Scrolling`,example:$[10]},{path:`lazyloading`,label:`Lazy Loading`,example:$[11]},{path:`usingInDialog`,label:`Using Inside Dialog`,example:$[12]},{path:`bodyOverlayTop`,label:`Body Overlay Auto`,example:$[13]},{path:`dropdownMethods`,label:`Methods`,example:$[14]}];function lf(){return window.location.hash.replace(/^#\/?/,``).trim()||`basic`}var uf={components:{VueMultiselectDropdown:Qd},props:{example:{type:Object,required:!0},skin:{type:String,required:!0}},data(){return{dataItems:this.example.data.slice(),selectedItems:this.example.initialSelected.slice(),disabled:!1,formName:``,formEmail:`ascasc@aa.com`}},computed:{settings(){return sf(this.example.settings,this.skin,this.example.allowDisabledToggle?this.disabled:!1)},formIsValid(){return this.formEmail.trim().length>0&&this.selectedItems.length>0},formValue(){return{name:this.formName,email:this.formEmail,skills:this.selectedItems}}},watch:{example:{handler(){this.dataItems=this.example.data.slice(),this.selectedItems=this.example.initialSelected.slice(),this.disabled=!1,this.formName=``,this.formEmail=`ascasc@aa.com`},deep:!1}},methods:{pushLog(e){},onChange(e){this.selectedItems=e,this.pushLog(`${this.example.title}: ${e.length} selected`)},appendNextChunk(){if(!this.example.lazy)return;let e=af.slice(this.dataItems.length,this.dataItems.length+20);if(!e.length){this.pushLog(`${this.example.title}: no more lazy rows`);return}this.dataItems=this.dataItems.concat(e),this.pushLog(`${this.example.title}: appended ${e.length} rows`)},handleCreateCountry(e,t){let n=t||of(e,this.dataItems.length);this.dataItems=this.dataItems.concat(n),this.pushLog(`${this.example.title}: created ${e}`)},renderOption(e,t,n){return n(`div`,{class:`country-row`},[n(`span`,{class:`country-flag`},[e.flag||`NA`]),n(`span`,[n(`strong`,[t.label]),n(`small`,[e.capital||e.category||``])])])},renderBadge(e,t,n){return n(`span`,{class:`country-badge`},[`${e.flag||`NA`} ${e.name||t.label}`])},openDropdown(){this.$refs.dropdown.openDropdown()},closeDropdown(){this.$refs.dropdown.closeDropdown()},focusSearch(){this.$refs.dropdown.focusSearch()},selectAll(){this.$refs.dropdown.selectAll()},clearSelection(){this.$refs.dropdown.clearSelection()}},template:`
    <div class="preview-example">
      <div class="example-live" v-if="example.id === 'form-validation'">
        <form class="docs-form" @submit.prevent="pushLog(example.title + ': submitted')">
          <label class="form-field">
            <span>Name</span>
            <input v-model="formName" />
          </label>

          <label class="form-field">
            <span>Email Address <em>* required</em></span>
            <input v-model="formEmail" />
          </label>

          <div class="form-field">
            <span>Skills <em>* required</em></span>
            <vue-multiselect-dropdown
              ref="dropdown"
              :data="dataItems"
              v-model="selectedItems"
              :settings="settings"
              @change="onChange"
            />
          </div>

          <button class="submit-button" type="submit" :disabled="!formIsValid">Submit</button>
        </form>

        <table class="form-output">
          <tbody>
            <tr><td><label>Name</label></td><td>{{ formName }}</td></tr>
            <tr><td><label>Email</label></td><td>{{ formEmail }}</td></tr>
            <tr><td><label>Skills</label></td><td>{{ selectedItems.map((item) => item.itemName).join(', ') }}</td></tr>
          </tbody>
        </table>

        <p class="form-json">{{ JSON.stringify(formValue) }}</p>
        <p class="form-json">Form status: "{{ formIsValid ? 'VALID' : 'INVALID' }}"</p>
      </div>

      <div class="example-live" v-else>
        <div v-if="example.allowDisabledToggle" class="method-bar">
          <button class="small-button" type="button" @click="disabled = !disabled">
            {{ disabled ? 'Enable' : 'Disable' }}
          </button>
        </div>

        <div v-if="example.showMethods" class="method-bar">
          <button type="button" @click="openDropdown">Open</button>
          <button type="button" @click="closeDropdown">Close</button>
          <button type="button" @click="focusSearch">Focus search</button>
          <button type="button" @click="selectAll">Select all</button>
          <button type="button" @click="clearSelection">Clear</button>
        </div>

        <div :class="example.overflowDemo ? 'overflow-lab' : null">
          <div v-if="example.overflowDemo" class="overflow-label">
            Simulated dialog surface with <code>overflow: hidden</code>
          </div>
          <vue-multiselect-dropdown
            ref="dropdown"
            :data="dataItems"
            v-model="selectedItems"
            :settings="settings"
            :render-item="example.customRenderer ? renderOption : undefined"
            :render-badge="example.customRenderer ? renderBadge : undefined"
            @change="onChange"
            @add-filter-new-item="handleCreateCountry"
            @scroll-to-end="appendNextChunk"
            @open="pushLog(example.title + ': opened')"
            @close="pushLog(example.title + ': closed')"
          />
        </div>
      </div>
    </div>
  `},df=Xs({components:{VueMultiselectDropdown:Qd},data(){return{routes:cf,currentPath:lf(),skin:`classic`,hashHandler:null}},computed:{currentRoute(){return this.routes.find(e=>e.path===this.currentPath)||this.routes[0]},installCode(){return`npm install @stackline/vue-multiselect-dropdown@${$d} --save-exact`},setupCode(){return[`import { createApp } from 'vue';`,`import { VueMultiselect } from '@stackline/vue-multiselect-dropdown';`,``,`createApp(App)`,`  .use(VueMultiselect)`,`  .mount('#app');`].join(`
`)},settingsCode(){return[`settings: {`,`  text: 'Select countries',`,`  primaryKey: 'id',`,`  labelKey: 'itemName',`,`  enableSearchFilter: true,`,`  badgeShowLimit: 3,`,`  clearAll: true,`,`  skin: 'classic'`,`}`].join(`
`)},renderCode(){return[`<vue-multiselect-dropdown`,`  :data="countries"`,`  v-model="selectedCountries"`,`  :settings="settings"`,`/>`].join(`
`)},featurePills(){return[`Vue v-model`,`Search`,`Grouping`,`Render functions`,`Lazy loading`,`Instance methods`,`ADA-compliant keyboard/ARIA`,`appendToBody`,`Classic and modern skins`]},apiCards(){return[{kicker:`Component`,title:`<vue-multiselect-dropdown />`,copy:`Use a controlled Vue array through v-model while keeping the settings object familiar.`},{kicker:`Settings`,title:`settings.skin`,copy:`Use settings.skin for classic, material, dark, custom, and brand visual modes. The legacy theme alias stays compatibility-only.`},{kicker:`Events`,title:`@select and @de-select`,copy:`Vue events expose selection changes, select-all, clear-all, lazy scrolling, and custom item creation.`},{kicker:`Rendering`,title:`renderItem and renderBadge`,copy:`Pass Vue render functions for option rows and selected chips.`},{kicker:`Accessibility`,title:`ADA-compliant keyboard and ARIA support`,copy:`The trigger, clear-all action, option rows, lazy lists, selected chips, and listbox states expose keyboard flow and ARIA metadata.`},{kicker:`Dialogs`,title:`appendToBody / tagToBody`,copy:`Set appendToBody inside modals, drawers, and overflow containers so the list is moved to document.body and avoids clipping.`}]}},created(){let e=()=>{this.currentPath=lf()};window.location.hash||(window.history.replaceState(null,``,`#/basic`),this.currentPath=`basic`),window.addEventListener(`hashchange`,e),this.hashHandler=e},beforeUnmount(){this.hashHandler&&window.removeEventListener(`hashchange`,this.hashHandler)},template:`
    <div class="docs-shell">
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
          <span class="meta-pill primary">v${$d}</span>
        </div>
      </header>

      <div class="docs-layout">
        <aside class="rail">
          <section class="rail-card">
            <div class="rail-label">Overview</div>
            <a class="rail-link" href="#install">Install</a>
            <a class="rail-link" href="#preview">Preview</a>
            <a class="rail-link" href="live/" target="_blank" rel="noopener">Live project</a>
            <a class="rail-link" href="#api">API</a>
          </section>

          <section class="rail-card">
            <div class="rail-label">Examples</div>
            <nav class="example-nav" aria-label="Vue multiselect examples">
              <a
                v-for="route in routes"
                :key="route.path"
                :class="route.path === currentRoute.path ? 'example-link active' : 'example-link'"
                :href="'#/' + route.path">
                {{ route.label }}
              </a>
            </nav>
          </section>

          <section class="rail-card">
            <div class="rail-label">Release line</div>
            <div class="release-item"><strong>Package</strong><span>${$d}</span></div>
            <div class="release-item"><strong>Vue</strong><span>${ef}</span></div>
            <div class="release-item"><strong>Docs path</strong><span>/vue-3/</span></div>
            <div class="release-item"><strong>Promise</strong><span>ADA-compliant keyboard/ARIA support</span></div>
          </section>
        </aside>

        <main class="docs-main">
          <section class="preview-card" id="preview">
            <div class="preview-head">
              <div>
                <div class="setup-label">Live preview</div>
                <h3>{{ currentRoute.label }}</h3>
                <p>Running against package line <code>${$d}</code> and Vue <code>${ef}</code>.</p>
              </div>
              <span class="status-pill">Classic selector preserved</span>
            </div>

            <div class="preview-canvas">
              <example-preview :key="currentRoute.path" :example="currentRoute.example" :skin="skin" />
            </div>
          </section>

          <section class="hero-card">
            <span class="hero-badge">Vue 3 family · Multiselect dropdown</span>
            <h2>Material-inspired multiselect, shaped for maintained Vue 3 applications.</h2>
            <p class="hero-copy">
              This Vue 3 line keeps the familiar Stackline settings contract while using idiomatic Vue v-model,
              render functions, instance methods, and component events. Version <code>${$d}</code> includes
              ADA-compliant keyboard and ARIA behavior, accurate badge counters, clear-all controls, dialog-safe body
              overlays, and matching classic/material/dark/custom/brand skins.
            </p>

            <div class="pill-row">
              <span class="feature-pill" v-for="pill in featurePills" :key="pill">{{ pill }}</span>
            </div>

            <div class="compat-grid">
              <div class="compat-card"><strong>Vue v-model first</strong>Keep selection in component state through <code>v-model</code> and <code>@change</code>.</div>
              <div class="compat-card"><strong>Consistent behavior where it matters</strong>Skins, counters, keyboard behavior, and body overlays follow the validated Stackline behavior.</div>
              <div class="compat-card"><strong>Render functions instead of templates</strong>Customize option rows and selected chips with Vue render functions.</div>
            </div>
          </section>

          <section class="setup-grid" id="install">
            <article class="setup-card"><div class="setup-label">Step 1</div><h3>Install the package</h3><pre>{{ installCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 2</div><h3>Register the plugin</h3><pre>{{ setupCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 3</div><h3>Create settings</h3><pre>{{ settingsCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 4</div><h3>Render with v-model</h3><pre>{{ renderCode }}</pre></article>
          </section>

          <section class="api-grid" id="api">
            <article class="api-card" v-for="card in apiCards" :key="card.title">
              <div class="setup-label">{{ card.kicker }}</div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.copy }}</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  `});df.component(`example-preview`,uf),df.mount(`#app`);