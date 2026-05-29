var e=Object.defineProperty,t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function r(e,t){let n=Object.create(null),r=e.split(`,`);for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}var i={1:`TEXT`,2:`CLASS`,4:`STYLE`,8:`PROPS`,16:`FULL_PROPS`,32:`HYDRATE_EVENTS`,64:`STABLE_FRAGMENT`,128:`KEYED_FRAGMENT`,256:`UNKEYED_FRAGMENT`,1024:`DYNAMIC_SLOTS`,512:`NEED_PATCH`,[-1]:`HOISTED`,[-2]:`BAIL`},a=r(`Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl`),o=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,s=r(o);o+``;function c(e){if(A(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=c(N(r)?d(r):r);if(i)for(let e in i)t[e]=i[e]}return t}else if(P(e))return e}var l=/;(?![^(]*\))/g,u=/:(.+)/;function d(e){let t={};return e.split(l).forEach(e=>{if(e){let n=e.split(u);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t=``;if(N(e))t=e;else if(A(e))for(let n=0;n<e.length;n++)t+=f(e[n])+` `;else if(P(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var p=`html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot`,m=`svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view`,h=`area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr`,g=r(p),_=r(m),v=r(h);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=se(e),r=se(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=A(e),r=A(t),n||r)return n&&r?y(e,t):!1;if(n=P(e),r=P(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function x(e,t){return e.findIndex(e=>b(e,t))}function S(e,t){for(let n of e)if(b(n,t))return!0;return!1}var C=e=>e==null?``:P(e)?JSON.stringify(e,ee,2):String(e),ee=(e,t)=>j(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[`${t} =>`]=n,e),{})}:oe(t)?{[`Set(${t.size})`]:[...t.values()]}:P(t)&&!A(t)&&!pe(t)?String(t):t,w={},te=[],T=()=>{},E=()=>!1,ne=/^on[^a-z]/,D=e=>ne.test(e),re=e=>e.startsWith(`onUpdate:`),O=Object.assign,ie=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},ae=Object.prototype.hasOwnProperty,k=(e,t)=>ae.call(e,t),A=Array.isArray,j=e=>de(e)===`[object Map]`,oe=e=>de(e)===`[object Set]`,se=e=>e instanceof Date,M=e=>typeof e==`function`,N=e=>typeof e==`string`,ce=e=>typeof e==`symbol`,P=e=>typeof e==`object`&&!!e,le=e=>P(e)&&M(e.then)&&M(e.catch),ue=Object.prototype.toString,de=e=>ue.call(e),fe=e=>de(e).slice(8,-1),pe=e=>de(e)===`[object Object]`,me=e=>N(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,he=r(`key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ge=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},_e=/-(\w)/g,ve=ge(e=>e.replace(_e,(e,t)=>t?t.toUpperCase():``)),ye=/\B([A-Z])/g,be=ge(e=>e.replace(ye,`-$1`).toLowerCase()),xe=ge(e=>e.charAt(0).toUpperCase()+e.slice(1)),Se=(e,t)=>e!==t&&(e===e||t===t),Ce=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},we=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Te=e=>{let t=parseFloat(e);return isNaN(t)?e:t},Ee,De=()=>Ee||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{},Oe=new WeakMap,ke=[],Ae,je=Symbol(``),Me=Symbol(``);function Ne(e){return e&&e._isEffect===!0}function Pe(e,t=w){Ne(e)&&(e=e.raw);let n=Le(e,t);return t.lazy||n(),n}function Fe(e){e.active&&=(Re(e),e.options.onStop&&e.options.onStop(),!1)}var Ie=0;function Le(e,t){let n=function(){if(!n.active)return t.scheduler?void 0:e();if(!ke.includes(n)){Re(n);try{return He(),ke.push(n),Ae=n,e()}finally{ke.pop(),Ue(),Ae=ke[ke.length-1]}}};return n.id=Ie++,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function Re(e){let{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var ze=!0,Be=[];function Ve(){Be.push(ze),ze=!1}function He(){Be.push(ze),ze=!0}function Ue(){let e=Be.pop();ze=e===void 0?!0:e}function F(e,t,n){if(!ze||Ae===void 0)return;let r=Oe.get(e);r||Oe.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(Ae)||(i.add(Ae),Ae.deps.push(i))}function We(e,t,n,r,i,a){let o=Oe.get(e);if(!o)return;let s=new Set,c=e=>{e&&e.forEach(e=>{(e!==Ae||e.options.allowRecurse)&&s.add(e)})};if(t===`clear`)o.forEach(c);else if(n===`length`&&A(e))o.forEach((e,t)=>{(t===`length`||t>=r)&&c(e)});else switch(n!==void 0&&c(o.get(n)),t){case`add`:A(e)?me(n)&&c(o.get(`length`)):(c(o.get(je)),j(e)&&c(o.get(Me)));break;case`delete`:A(e)||(c(o.get(je)),j(e)&&c(o.get(Me)));break;case`set`:j(e)&&c(o.get(je));break}s.forEach(e=>{e.options.scheduler?e.options.scheduler(e):e()})}var Ge=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(ce)),Ke=Ze(),qe=Ze(!1,!0),Je=Ze(!0),Ye=Ze(!0,!0),Xe={};[`includes`,`indexOf`,`lastIndexOf`].forEach(e=>{let t=Array.prototype[e];Xe[e]=function(...e){let n=I(this);for(let e=0,t=this.length;e<t;e++)F(n,`get`,e+``);let r=t.apply(n,e);return r===-1||r===!1?t.apply(n,e.map(I)):r}}),[`push`,`pop`,`shift`,`unshift`,`splice`].forEach(e=>{let t=Array.prototype[e];Xe[e]=function(...e){Ve();let n=t.apply(this,e);return He(),n}});function Ze(e=!1,t=!1){return function(n,r,i){if(r===`__v_isReactive`)return!e;if(r===`__v_isReadonly`)return e;if(r===`__v_raw`&&i===(e?At:kt).get(n))return n;let a=A(n);if(a&&k(Xe,r))return Reflect.get(Xe,r,i);let o=Reflect.get(n,r,i);return(ce(r)?Ge.has(r):r===`__proto__`||r===`__v_isRef`)||(e||F(n,`get`,r),t)?o:L(o)?!a||!me(r)?o.value:o:P(o)?e?Ft(o):Nt(o):o}}var Qe=et(),$e=et(!0);function et(e=!1){return function(t,n,r,i){let a=t[n];if(!e&&(r=I(r),!A(t)&&L(a)&&!L(r)))return a.value=r,!0;let o=A(t)&&me(n)?Number(n)<t.length:k(t,n),s=Reflect.set(t,n,r,i);return t===I(i)&&(o?Se(r,a)&&We(t,`set`,n,r,a):We(t,`add`,n,r)),s}}function tt(e,t){let n=k(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&We(e,`delete`,t,void 0,r),i}function nt(e,t){let n=Reflect.has(e,t);return(!ce(t)||!Ge.has(t))&&F(e,`has`,t),n}function rt(e){return F(e,`iterate`,je),Reflect.ownKeys(e)}var it={get:Ke,set:Qe,deleteProperty:tt,has:nt,ownKeys:rt},at={get:Je,set(e,t){return!0},deleteProperty(e,t){return!0}},ot=O({},it,{get:qe,set:$e}),st=O({},at,{get:Ye}),ct=e=>P(e)?Nt(e):e,lt=e=>P(e)?Ft(e):e,ut=e=>e,dt=e=>Reflect.getPrototypeOf(e);function ft(e,t,n=!1,r=!1){e=e.__v_raw;let i=I(e),a=I(t);t!==a&&!n&&F(i,`get`,t),!n&&F(i,`get`,a);let{has:o}=dt(i),s=n?lt:r?ut:ct;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a))}function pt(e,t=!1){let n=this.__v_raw,r=I(n),i=I(e);return e!==i&&!t&&F(r,`has`,e),!t&&F(r,`has`,i),e===i?n.has(e):n.has(e)||n.has(i)}function mt(e,t=!1){return e=e.__v_raw,!t&&F(I(e),`iterate`,je),Reflect.get(e,`size`,e)}function ht(e){e=I(e);let t=I(this),n=dt(t).has.call(t,e),r=t.add(e);return n||We(t,`add`,e,e),r}function gt(e,t){t=I(t);let n=I(this),{has:r,get:i}=dt(n),a=r.call(n,e);a||=(e=I(e),r.call(n,e));let o=i.call(n,e),s=n.set(e,t);return a?Se(t,o)&&We(n,`set`,e,t,o):We(n,`add`,e,t),s}function _t(e){let t=I(this),{has:n,get:r}=dt(t),i=n.call(t,e);i||=(e=I(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&We(t,`delete`,e,void 0,a),o}function vt(){let e=I(this),t=e.size!==0,n=e.clear();return t&&We(e,`clear`,void 0,void 0,void 0),n}function yt(e,t){return function(n,r){let i=this,a=i.__v_raw,o=I(a),s=e?lt:t?ut:ct;return!e&&F(o,`iterate`,je),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}}function bt(e,t,n){return function(...r){let i=this.__v_raw,a=I(i),o=j(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=t?lt:n?ut:ct;return!t&&F(a,`iterate`,c?Me:je),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function xt(e){return function(...t){return e===`delete`?!1:this}}var St={get(e){return ft(this,e)},get size(){return mt(this)},has:pt,add:ht,set:gt,delete:_t,clear:vt,forEach:yt(!1,!1)},Ct={get(e){return ft(this,e,!1,!0)},get size(){return mt(this)},has:pt,add:ht,set:gt,delete:_t,clear:vt,forEach:yt(!1,!0)},wt={get(e){return ft(this,e,!0)},get size(){return mt(this,!0)},has(e){return pt.call(this,e,!0)},add:xt(`add`),set:xt(`set`),delete:xt(`delete`),clear:xt(`clear`),forEach:yt(!0,!1)};[`keys`,`values`,`entries`,Symbol.iterator].forEach(e=>{St[e]=bt(e,!1,!1),wt[e]=bt(e,!0,!1),Ct[e]=bt(e,!1,!0)});function Tt(e,t){let n=t?Ct:e?wt:St;return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(k(n,r)&&r in t?n:t,r,i)}var Et={get:Tt(!1,!1)},Dt={get:Tt(!1,!0)},Ot={get:Tt(!0,!1)},kt=new WeakMap,At=new WeakMap;function jt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Mt(e){return e.__v_skip||!Object.isExtensible(e)?0:jt(fe(e))}function Nt(e){return e&&e.__v_isReadonly?e:Lt(e,!1,it,Et)}function Pt(e){return Lt(e,!1,ot,Dt)}function Ft(e){return Lt(e,!0,at,Ot)}function It(e){return Lt(e,!0,st,Ot)}function Lt(e,t,n,r){if(!P(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let i=t?At:kt,a=i.get(e);if(a)return a;let o=Mt(e);if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Rt(e){return zt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Bt(e){return Rt(e)||zt(e)}function I(e){return e&&I(e.__v_raw)||e}function Vt(e){return we(e,`__v_skip`,!0),e}var Ht=e=>P(e)?Nt(e):e;function L(e){return!!(e&&e.__v_isRef===!0)}function Ut(e){return Kt(e)}function Wt(e){return Kt(e,!0)}var Gt=class{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:Ht(e)}get value(){return F(I(this),`get`,`value`),this._value}set value(e){Se(I(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ht(e),We(I(this),`set`,`value`,e))}};function Kt(e,t=!1){return L(e)?e:new Gt(e,t)}function qt(e){We(e,`set`,`value`,void 0)}function Jt(e){return L(e)?e.value:e}var Yt={get:(e,t,n)=>Jt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return L(i)&&!L(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xt(e){return Rt(e)?e:new Proxy(e,Yt)}var Zt=class{constructor(e){this.__v_isRef=!0;let{get:t,set:n}=e(()=>F(this,`get`,`value`),()=>We(this,`set`,`value`));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}};function Qt(e){return new Zt(e)}function $t(e){let t=A(e)?Array(e.length):{};for(let n in e)t[n]=tn(e,n);return t}var en=class{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}};function tn(e,t){return L(e[t])?e[t]:new en(e,t)}var nn=class{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Pe(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,We(I(this),`set`,`value`))}}),this.__v_isReadonly=n}get value(){return this._dirty&&=(this._value=this.effect(),!1),F(I(this),`get`,`value`),this._value}set value(e){this._setter(e)}};function rn(e){let t,n;return M(e)?(t=e,n=T):(t=e.get,n=e.set),new nn(t,n,M(e)||!e.set)}var an=[];function on(e,...t){Ve();let n=an.length?an[an.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=sn();if(r)fn(r,n,11,[e+t.join(``),n&&n.proxy,i.map(({vnode:e})=>`at <${io(n,e.type)}>`).join(`
`),i]);else{let n=[`[Vue warn]: ${e}`,...t];i.length&&n.push(`
`,...cn(i)),console.warn(...n)}Ue()}function sn(){let e=an[an.length-1];if(!e)return[];let t=[];for(;e;){let n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});let r=e.component&&e.component.parent;e=r&&r.vnode}return t}function cn(e){let t=[];return e.forEach((e,n)=>{t.push(...n===0?[]:[`
`],...ln(e))}),t}function ln({vnode:e,recurseCount:t}){let n=t>0?`... (${t} recursive calls)`:``,r=e.component?e.component.parent==null:!1,i=` at <${io(e.component,e.type,r)}`,a=`>`+n;return e.props?[i,...un(e.props),a]:[i+a]}function un(e){let t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...dn(n,e[n]))}),n.length>3&&t.push(` ...`),t}function dn(e,t,n){return N(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t==`number`||typeof t==`boolean`||t==null?n?t:[`${e}=${t}`]:L(t)?(t=dn(e,I(t.value),!0),n?t:[`${e}=Ref<`,t,`>`]):M(t)?[`${e}=fn${t.name?`<${t.name}>`:``}`]:(t=I(t),n?t:[`${e}=`,t])}function fn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(e){mn(e,t,n)}return i}function pn(e,t,n,r){if(M(e)){let i=fn(e,t,n,r);return i&&le(i)&&i.catch(e=>{mn(e,t,n)}),i}let i=[];for(let a=0;a<e.length;a++)i.push(pn(e[a],t,n,r));return i}function mn(e,t,n,r=!0){let i=t?t.vnode:null;if(t){let r=t.parent,i=t.proxy,a=n;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a))return}r=r.parent}let o=t.appContext.config.errorHandler;if(o){fn(o,null,10,[e,i,a]);return}}hn(e,n,i,r)}function hn(e,t,n,r=!0){console.error(e)}var gn=!1,_n=!1,vn=[],yn=0,bn=[],xn=null,Sn=0,Cn=[],wn=null,Tn=0,En=Promise.resolve(),Dn=null,On=null;function kn(e){let t=Dn||En;return e?t.then(e):t}function An(e){(!vn.length||!vn.includes(e,gn&&e.allowRecurse?yn+1:yn))&&e!==On&&(vn.push(e),jn())}function jn(){!gn&&!_n&&(_n=!0,Dn=En.then(zn))}function Mn(e){let t=vn.indexOf(e);t>-1&&(vn[t]=null)}function Nn(e,t,n,r){A(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),jn()}function Pn(e){Nn(e,xn,bn,Sn)}function Fn(e){Nn(e,wn,Cn,Tn)}function In(e,t=null){if(bn.length){for(On=t,xn=[...new Set(bn)],bn.length=0,Sn=0;Sn<xn.length;Sn++)xn[Sn]();xn=null,Sn=0,On=null,In(e,t)}}function Ln(e){if(Cn.length){let e=[...new Set(Cn)];if(Cn.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((e,t)=>Rn(e)-Rn(t)),Tn=0;Tn<wn.length;Tn++)wn[Tn]();wn=null,Tn=0}}var Rn=e=>e.id==null?1/0:e.id;function zn(e){_n=!1,gn=!0,In(e),vn.sort((e,t)=>Rn(e)-Rn(t));try{for(yn=0;yn<vn.length;yn++){let e=vn[yn];e&&fn(e,null,14)}}finally{yn=0,vn.length=0,Ln(e),gn=!1,Dn=null,(vn.length||Cn.length)&&zn(e)}}var Bn;function Vn(e){Bn=e}function Hn(e,t){Bn&&Bn.emit(`app:init`,e,t,{Fragment:Br,Text:Vr,Comment:Hr,Static:Ur})}function Un(e){Bn&&Bn.emit(`app:unmount`,e)}var Wn=qn(`component:added`),Gn=qn(`component:updated`),Kn=qn(`component:removed`);function qn(e){return t=>{Bn&&Bn.emit(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0)}}function Jn(e,t,n){Bn&&Bn.emit(`component:emit`,e.appContext.app,e,t,n)}function Yn(e,t,...n){let r=e.vnode.props||w;__VUE_PROD_DEVTOOLS__&&Jn(e,t,n);let i=`on${xe(t)}`,a=r[i];if(!a&&t.startsWith(`update:`)&&(i=`on${xe(be(t))}`,a=r[i]),!a){if(a=r[i+`Once`],!e.emitted)(e.emitted={})[i]=!0;else if(e.emitted[i])return}a&&pn(a,e,6,n)}function Xn(e,t,n=!1){let r=t.app?t.app._uid:-1,i=e.__emits||={},a=i[r];if(a!==void 0)return a;let o=e.emits,s={},c=!1;if(__VUE_OPTIONS_API__&&!M(e)){let r=e=>{c=!0,O(s,Xn(e,t,!0))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!o&&!c?i[r]=null:(A(o)?o.forEach(e=>s[e]=null):O(s,o),i[r]=s)}function Zn(e,t){return!e||!D(t)?!1:(t=t.replace(/Once$/,``),k(e,t[2].toLowerCase()+t.slice(3))||k(e,t.slice(2)))}var R=null;function Qn(e){R=e}function $n(e){let{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:c,emit:l,render:u,renderCache:d,data:f,setupState:p,ctx:m}=e,h;R=e;try{let e;if(n.shapeFlag&4){let t=i||r;h=ci(u.call(t,t,d,a,p,f,m)),e=c}else{let n=t;h=ci(n.length>1?n(a,{attrs:c,slots:s,emit:l}):n(a,null)),e=t.props?c:tr(c)}let g=h;if(t.inheritAttrs!==!1&&e){let t=Object.keys(e),{shapeFlag:n}=g;t.length&&(n&1||n&6)&&(o&&t.some(re)&&(e=nr(e,o)),g=ii(g,e))}n.dirs&&(g.dirs=n.dirs),n.transition&&(g.transition=n.transition),h=g}catch(t){mn(t,e,1),h=z(Hr)}return R=null,h}function er(e){let t=e.filter(e=>!(Zr(e)&&e.type===Hr&&e.children!==`v-if`));return t.length===1&&Zr(t[0])?t[0]:null}var tr=e=>{let t;for(let n in e)(n===`class`||n===`style`||D(n))&&((t||={})[n]=e[n]);return t},nr=(e,t)=>{let n={};for(let r in e)(!re(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>0){if(c&1024)return!0;if(c&16)return r?ir(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!Zn(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ir(r,o,l):!0:!!o;return!1}function ir(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!Zn(n,a))return!0}return!1}function ar({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}var or=e=>e.__isSuspense,sr={__isSuspense:!0,process(e,t,n,r,i,a,o,s,c){e==null?cr(t,n,r,i,a,o,s,c):lr(e,t,n,r,i,o,s,c)},hydrate:dr,create:ur};function cr(e,t,n,r,i,a,o,s){let{p:c,o:{createElement:l}}=s,u=l(`div`),d=e.suspense=ur(e,i,r,t,u,n,a,o,s);c(null,d.pendingBranch=e.ssContent,u,null,r,d,a,o),d.deps>0?(c(null,e.ssFallback,t,n,r,null,a,o),hr(d,e.ssFallback)):d.resolve()}function lr(e,t,n,r,i,a,o,{p:s,um:c,o:{createElement:l}}){let u=t.suspense=e.suspense;u.vnode=t,t.el=e.el;let d=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:m,isInFallback:h,isHydrating:g}=u;if(m)u.pendingBranch=d,Qr(d,m)?(s(m,d,u.hiddenContainer,null,i,u,a,o),u.deps<=0?u.resolve():h&&(s(p,f,n,r,i,null,a,o),hr(u,f))):(u.pendingId++,g?(u.isHydrating=!1,u.activeBranch=m):c(m,i,u),u.deps=0,u.effects.length=0,u.hiddenContainer=l(`div`),h?(s(null,d,u.hiddenContainer,null,i,u,a,o),u.deps<=0?u.resolve():(s(p,f,n,r,i,null,a,o),hr(u,f))):p&&Qr(d,p)?(s(p,d,n,r,i,u,a,o),u.resolve(!0)):(s(null,d,u.hiddenContainer,null,i,u,a,o),u.deps<=0&&u.resolve()));else if(p&&Qr(d,p))s(p,d,n,r,i,u,a,o),hr(u,d);else{let e=t.props&&t.props.onPending;if(M(e)&&e(),u.pendingBranch=d,u.pendingId++,s(null,d,u.hiddenContainer,null,i,u,a,o),u.deps<=0)u.resolve();else{let{timeout:e,pendingId:t}=u;e>0?setTimeout(()=>{u.pendingId===t&&u.fallback(f)},e):e===0&&u.fallback(f)}}}function ur(e,t,n,r,i,a,o,s,c,l=!1){let{p:u,m:d,um:f,n:p,o:{parentNode:m,remove:h}}=c,g=Te(e.props&&e.props.timeout),_={vnode:e,parent:t,parentComponent:n,isSVG:o,optimized:s,container:r,hiddenContainer:i,anchor:a,deps:0,pendingId:0,timeout:typeof g==`number`?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:l,isUnmounted:!1,effects:[],resolve(e=!1){let{vnode:t,activeBranch:n,pendingBranch:r,pendingId:i,effects:a,parentComponent:o,container:s}=_;if(_.isHydrating)_.isHydrating=!1;else if(!e){let e=n&&r.transition&&r.transition.mode===`out-in`;e&&(n.transition.afterLeave=()=>{i===_.pendingId&&d(r,s,t,0)});let{anchor:t}=_;n&&(t=p(n),f(n,o,_,!0)),e||d(r,s,t,0)}hr(_,r),_.pendingBranch=null,_.isInFallback=!1;let c=_.parent,l=!1;for(;c;){if(c.pendingBranch){c.effects.push(...a),l=!0;break}c=c.parent}l||Fn(a),_.effects=[];let u=t.props&&t.props.onResolve;M(u)&&u()},fallback(e){if(!_.pendingBranch)return;let{vnode:t,activeBranch:n,parentComponent:r,container:i,isSVG:a,optimized:o}=_,s=t.props&&t.props.onFallback;M(s)&&s();let c=p(n),l=()=>{_.isInFallback&&(u(null,e,i,c,r,null,a,o),hr(_,e))},d=e.transition&&e.transition.mode===`out-in`;d&&(n.transition.afterLeave=l),f(n,r,null,!0),_.isInFallback=!0,d||l()},move(e,t,n){_.activeBranch&&d(_.activeBranch,e,t,n),_.container=e},next(){return _.activeBranch&&p(_.activeBranch)},registerDep(e,t){if(!_.pendingBranch)return;let n=e.vnode.el;_.deps++,e.asyncDep.catch(t=>{mn(t,e,0)}).then(r=>{if(e.isUnmounted||_.isUnmounted||_.pendingId!==e.suspenseId)return;_.deps--,e.asyncResolved=!0;let{vnode:i}=e;Xa(e,r),n&&(i.el=n);let a=!n&&e.subTree.el;t(e,i,m(n||e.subTree.el),n?null:p(e.subTree),_,o,s),a&&h(a),ar(e,i.el),_.deps===0&&_.resolve()})},unmount(e,t){_.isUnmounted=!0,_.activeBranch&&f(_.activeBranch,n,e,t),_.pendingBranch&&f(_.pendingBranch,n,e,t)}};return _}function dr(e,t,n,r,i,a,o,s){let c=t.suspense=ur(t,r,n,e.parentNode,document.createElement(`div`),null,i,a,o,!0),l=s(e,c.pendingBranch=t.ssContent,n,c,a);return c.deps===0&&c.resolve(),l}function fr(e){let{shapeFlag:t,children:n}=e,r,i;return t&32?(r=pr(n.default),i=pr(n.fallback)):(r=pr(n),i=ci(null)),{content:r,fallback:i}}function pr(e){return M(e)&&(e=e()),A(e)&&(e=er(e)),ci(e)}function mr(e,t){t&&t.pendingBranch?A(e)?t.effects.push(...e):t.effects.push(e):Fn(e)}function hr(e,t){e.activeBranch=t;let{vnode:n,parentComponent:r}=e,i=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=i,ar(r,i))}var gr=0,_r=e=>gr+=e;function vr(e,t,n={},r){let i=e[t];gr++;let a=(Kr(),Xr(Br,{key:n.key},i?i(n):r?r():[],e._===1?64:-2));return gr--,a}function yr(e,t=R){if(!t)return e;let n=(...n)=>{gr||Kr(!0);let r=R;Qn(t);let i=e(...n);return Qn(r),gr||qr(),i};return n._c=!0,n}var br=null,xr=[];function Sr(e){xr.push(br=e)}function Cr(){xr.pop(),br=xr[xr.length-1]||null}function wr(e){return(t=>yr(function(){Sr(e);let n=t.apply(this,arguments);return Cr(),n}))}var Tr=e=>e.__isTeleport,Er=e=>e&&(e.disabled||e.disabled===``),Dr=(e,t)=>{let n=e&&e.to;return N(n)?t?t(n):null:n},Or={__isTeleport:!0,process(e,t,n,r,i,a,o,s,c){let{mc:l,pc:u,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:h}}=c,g=Er(t.props),{shapeFlag:_,children:v}=t;if(e==null){let e=t.el=m(``),c=t.anchor=m(``);f(e,n,r),f(c,n,r);let u=t.target=Dr(t.props,p),d=t.targetAnchor=m(``);u&&f(d,u);let h=(e,t)=>{_&16&&l(v,e,t,i,a,o,s)};g?h(n,c):u&&h(u,d)}else{t.el=e.el;let r=t.anchor=e.anchor,l=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=Er(e.props),h=m?n:l,_=m?r:f;if(t.dynamicChildren){if(d(e.dynamicChildren,t.dynamicChildren,h,i,a,o),t.shapeFlag&16){let n=e.children,r=t.children;for(let e=0;e<r.length;e++)r[e].el||(r[e].el=n[e].el)}}else s||u(e,t,h,_,i,a,o);if(g)m||kr(t,n,r,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=Dr(t.props,p);e&&kr(t,e,null,c,0)}else m&&kr(t,l,f,c,1)}},remove(e,{r:t,o:{remove:n}}){let{shapeFlag:r,children:i,anchor:a}=e;if(n(a),r&16)for(let e=0;e<i.length;e++)t(i[e])},move:kr,hydrate:Ar};function kr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),(!d||Er(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Ar(e,t,n,r,i,{o:{nextSibling:a,parentNode:o,querySelector:s}},c){let l=t.target=Dr(t.props,s);if(l){let s=l._lpa||l.firstChild;t.shapeFlag&16&&(Er(t.props)?(t.anchor=c(a(e),t,o(e),n,r,i),t.targetAnchor=s):(t.anchor=a(e),t.targetAnchor=c(s,t,l,n,r,i)),l._lpa=t.targetAnchor&&a(t.targetAnchor))}return t.anchor&&a(t.anchor)}var jr=Or,Mr=`components`,Nr=`directives`;function Pr(e){return Rr(Mr,e)||e}var Fr=Symbol();function Ir(e){return N(e)?Rr(Mr,e,!1)||e:e||Fr}function Lr(e){return Rr(Nr,e)}function Rr(e,t,n=!0){let r=R||H;if(r){let n=r.type;if(e===Mr){let e=n.displayName||n.name;if(e&&(e===t||e===ve(t)||e===xe(ve(t))))return n}return zr(r[e]||n[e],t)||zr(r.appContext[e],t)}}function zr(e,t){return e&&(e[t]||e[ve(t)]||e[xe(ve(t))])}var Br=Symbol(void 0),Vr=Symbol(void 0),Hr=Symbol(void 0),Ur=Symbol(void 0),Wr=[],Gr=null;function Kr(e=!1){Wr.push(Gr=e?null:[])}function qr(){Wr.pop(),Gr=Wr[Wr.length-1]||null}var Jr=1;function Yr(e){Jr+=e}function Xr(e,t,n,r,i){let a=z(e,t,n,r,i,!0);return a.dynamicChildren=Gr||te,qr(),Jr>0&&Gr&&Gr.push(a),a}function Zr(e){return e?e.__v_isVNode===!0:!1}function Qr(e,t){return e.type===t.type&&e.key===t.key}function $r(e){}var ei=`__vInternal`,ti=({key:e})=>e??null,ni=({ref:e})=>e==null?null:A(e)?e:{i:R,r:e},z=ri;function ri(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Fr)&&(e=Hr),Zr(e)){let r=ii(e,t,!0);return n&&ui(r,n),r}if(ao(e)&&(e=e.__vccOpts),t){(Bt(t)||ei in t)&&(t=O({},t));let{class:e,style:n}=t;e&&!N(e)&&(t.class=f(e)),P(n)&&(Bt(n)&&!A(n)&&(n=O({},n)),t.style=c(n))}let o=N(e)?1:or(e)?128:Tr(e)?64:P(e)?4:M(e)?2:0,s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ti(t),ref:t&&ni(t),scopeId:br,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};if(ui(s,n),o&128){let{content:e,fallback:t}=fr(s);s.ssContent=e,s.ssFallback=t}return Jr>0&&!a&&Gr&&(r>0||o&6)&&r!==32&&Gr.push(s),s}function ii(e,t,n=!1){let{props:r,ref:i,patchFlag:a}=e,o=t?di(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&ti(o),ref:t&&t.ref?n&&i?A(i)?i.concat(ni(t)):[i,ni(t)]:ni(t):i,scopeId:e.scopeId,children:e.children,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Br?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ii(e.ssContent),ssFallback:e.ssFallback&&ii(e.ssFallback),el:e.el,anchor:e.anchor}}function ai(e=` `,t=0){return z(Vr,null,e,t)}function oi(e,t){let n=z(Ur,null,e);return n.staticCount=t,n}function si(e=``,t=!1){return t?(Kr(),Xr(Hr,null,e)):z(Hr,null,e)}function ci(e){return e==null||typeof e==`boolean`?z(Hr):A(e)?z(Br,null,e):typeof e==`object`?e.el===null?e:ii(e):z(Vr,null,String(e))}function li(e){return e.el===null?e:ii(e)}function ui(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(A(t))n=16;else if(typeof t==`object`)if(r&1||r&64){let n=t.default;n&&(n._c&&_r(1),ui(e,n()),n._c&&_r(-1));return}else{n=32;let r=t._;!r&&!(ei in t)?t._ctx=R:r===3&&R&&(R.vnode.patchFlag&1024?(t._=2,e.patchFlag|=1024):t._=1)}else M(t)?(t={default:t,_ctx:R},n=32):(t=String(t),r&64?(n=16,t=[ai(t)]):n=8);e.children=t,e.shapeFlag|=n}function di(...e){let t=O({},e[0]);for(let n=1;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=f([t.class,r.class]));else if(e===`style`)t.style=c([t.style,r.style]);else if(D(e)){let n=t[e],i=r[e];n!==i&&(t[e]=n?[].concat(n,r[e]):i)}else t[e]=r[e]}return t}function fi(e,t,n,r=!1){let i={},a={};we(a,ei,1),mi(e,t,i,a),n?e.props=r?i:Pt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function pi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=I(i),[c]=e.propsOptions;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r],l=t[o];if(c)if(k(a,o))a[o]=l;else{let t=ve(o);i[t]=hi(c,s,t,l,e)}else a[o]=l}}}else{mi(e,t,i,a);let r;for(let a in s)(!t||!k(t,a)&&((r=be(a))===a||!k(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=hi(c,t||w,a,void 0,e)):delete i[a]);if(a!==s)for(let e in a)(!t||!k(t,e))&&delete a[e]}We(e,`set`,`$attrs`)}function mi(e,t,n,r){let[i,a]=e.propsOptions;if(t)for(let a in t){let o=t[a];if(he(a))continue;let s;i&&k(i,s=ve(a))?n[s]=o:Zn(e.emitsOptions,a)||(r[a]=o)}if(a){let t=I(n);for(let r=0;r<a.length;r++){let o=a[r];n[o]=hi(i,t,o,t[o],e)}}}function hi(e,t,n,r,i){let a=e[n];if(a!=null){let e=k(a,`default`);if(e&&r===void 0){let e=a.default;a.type!==Function&&M(e)?(Ka(i),r=e(t),Ka(null)):r=e}a[0]&&(!k(t,n)&&!e?r=!1:a[1]&&(r===``||r===be(n))&&(r=!0))}return r}function gi(e,t,n=!1){let r=t.app?t.app._uid:-1,i=e.__props||={},a=i[r];if(a)return a;let o=e.props,s={},c=[],l=!1;if(__VUE_OPTIONS_API__&&!M(e)){let r=e=>{l=!0;let[n,r]=gi(e,t,!0);O(s,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return i[r]=te;if(A(o))for(let e=0;e<o.length;e++){let t=ve(o[e]);bi(t)&&(s[t]=w)}else if(o)for(let e in o){let t=ve(e);if(bi(t)){let n=o[e],r=s[t]=A(n)||M(n)?{type:n}:n;if(r){let e=yi(Boolean,r.type),n=yi(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||k(r,`default`))&&c.push(t)}}}return i[r]=[s,c]}function _i(e){let t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:``}function vi(e,t){return _i(e)===_i(t)}function yi(e,t){if(A(t)){for(let n=0,r=t.length;n<r;n++)if(vi(t[n],e))return n}else if(M(t))return vi(t,e)?0:-1;return-1}function bi(e){return e[0]!==`$`}function xi(e,t,n=H,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{if(n.isUnmounted)return;Ve(),Ka(n);let i=pn(t,n,e,r);return Ka(null),Ue(),i};return r?i.unshift(a):i.push(a),a}}var Si=e=>(t,n=H)=>!qa&&xi(e,t,n),Ci=Si(`bm`),wi=Si(`m`),Ti=Si(`bu`),Ei=Si(`u`),Di=Si(`bum`),Oi=Si(`um`),ki=Si(`rtg`),Ai=Si(`rtc`),ji=(e,t=H)=>{xi(`ec`,e,t)};function Mi(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wi(()=>{e.isMounted=!0}),Di(()=>{e.isUnmounting=!0}),e}var Ni=[Function,Array],Pi={name:`BaseTransition`,props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ni,onEnter:Ni,onAfterEnter:Ni,onEnterCancelled:Ni,onBeforeLeave:Ni,onLeave:Ni,onAfterLeave:Ni,onLeaveCancelled:Ni,onBeforeAppear:Ni,onAppear:Ni,onAfterAppear:Ni,onAppearCancelled:Ni},setup(e,{slots:t}){let n=Ga(),r=Mi(),i;return()=>{let a=t.default&&Bi(t.default(),!0);if(!a||!a.length)return;let o=I(e),{mode:s}=o,c=a[0];if(r.isLeaving)return Li(c);let l=Ri(c);if(!l)return Li(c);let u=Ii(l,o,r,n);zi(l,u);let d=n.subTree,f=d&&Ri(d),p=!1,{getTransitionKey:m}=l.type;if(m){let e=m();i===void 0?i=e:e!==i&&(i=e,p=!0)}if(f&&f.type!==Hr&&(!Qr(l,f)||p)){let e=Ii(f,o,r,n);if(zi(f,e),s===`out-in`)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Li(c);s===`in-out`&&(e.delayLeave=(e,t,n)=>{let i=Fi(r,f);i[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}};function Fi(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ii(e,t,n,r){let{appear:i,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:h,onAppear:g,onAfterAppear:_,onAppearCancelled:v}=t,y=String(e.key),b=Fi(n,e),x=(e,t)=>{e&&pn(e,r,9,t)},S={mode:a,persisted:o,beforeEnter(t){let r=s;if(!n.isMounted)if(i)r=h||s;else return;t._leaveCb&&t._leaveCb(!0);let a=b[y];a&&Qr(e,a)&&a.el._leaveCb&&a.el._leaveCb(),x(r,[t])},enter(e){let t=c,r=l,a=u;if(!n.isMounted)if(i)t=g||c,r=_||l,a=v||u;else return;let o=!1,s=e._enterCb=t=>{o||(o=!0,x(t?a:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?(t(e,s),t.length<=1&&s()):s()},leave(t,r){let i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();x(d,[t]);let a=!1,o=t._leaveCb=n=>{a||(a=!0,r(),x(n?m:p,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return Ii(e,t,n,r)}};return S}function Li(e){if(Vi(e))return e=ii(e),e.children=null,e}function Ri(e){return Vi(e)?e.children?e.children[0]:void 0:e}function zi(e,t){e.shapeFlag&6&&e.component?zi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bi(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){let a=e[i];a.type===Br?(a.patchFlag&128&&r++,n=n.concat(Bi(a.children,t))):(t||a.type!==Hr)&&n.push(a)}if(r>1)for(let e=0;e<n.length;e++)n[e].patchFlag=-2;return n}var Vi=e=>e.type.__isKeepAlive,Hi={name:`KeepAlive`,__isKeepAlive:!0,inheritRef:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){let n=new Map,r=new Set,i=null,a=Ga(),o=a.suspense,s=a.ctx,{renderer:{p:c,m:l,um:u,o:{createElement:d}}}=s,f=d(`div`);s.activate=(e,t,n,r,i)=>{let a=e.component;l(e,t,n,0,o),c(a.vnode,e,t,n,a,o,r,i),B(()=>{a.isDeactivated=!1,a.a&&Ce(a.a);let t=e.props&&e.props.onVnodeMounted;t&&V(t,a.parent,e)},o)},s.deactivate=e=>{let t=e.component;l(e,f,null,1,o),B(()=>{t.da&&Ce(t.da);let n=e.props&&e.props.onVnodeUnmounted;n&&V(n,t.parent,e),t.isDeactivated=!0},o)};function p(e){Yi(e),u(e,a,o)}function m(e){n.forEach((t,n)=>{let r=Ui(t.type);r&&(!e||!e(r))&&h(n)})}function h(e){let t=n.get(e);!i||t.type!==i.type?p(t):i&&Yi(i),n.delete(e),r.delete(e)}Sa(()=>[e.include,e.exclude],([e,t])=>{e&&m(t=>Wi(e,t)),t&&m(e=>!Wi(t,e))},{flush:`post`});let g=null,_=()=>{g!=null&&n.set(g,Xi(a.subTree))};return wi(_),Ei(_),Di(()=>{n.forEach(e=>{let{subTree:t,suspense:n}=a,r=Xi(t);if(e.type===r.type){Yi(r);let e=r.component.da;e&&B(e,n);return}p(e)})}),()=>{if(g=null,!t.default)return null;let a=t.default(),o=a[0];if(a.length>1)return i=null,a;if(!Zr(o)||!(o.shapeFlag&4)&&!(o.shapeFlag&128))return i=null,o;let s=Xi(o),c=s.type,l=Ui(c),{include:u,exclude:d,max:f}=e;if(u&&(!l||!Wi(u,l))||d&&l&&Wi(d,l))return i=s,o;let p=s.key==null?c:s.key,m=n.get(p);return s.el&&(s=ii(s),o.shapeFlag&128&&(o.ssContent=s)),g=p,m?(s.el=m.el,s.component=m.component,s.transition&&zi(s,s.transition),s.shapeFlag|=512,r.delete(p),r.add(p)):(r.add(p),f&&r.size>parseInt(f,10)&&h(r.values().next().value)),s.shapeFlag|=256,i=s,o}}};function Ui(e){return e.displayName||e.name}function Wi(e,t){return A(e)?e.some(e=>Wi(e,t)):N(e)?e.split(`,`).indexOf(t)>-1:e.test?e.test(t):!1}function Gi(e,t){qi(e,`a`,t)}function Ki(e,t){qi(e,`da`,t)}function qi(e,t,n=H){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()};if(xi(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Vi(e.parent.vnode)&&Ji(r,t,n,e),e=e.parent}}function Ji(e,t,n,r){let i=xi(t,e,r,!0);Oi(()=>{ie(r[t],i)},n)}function Yi(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Xi(e){return e.shapeFlag&128?e.ssContent:e}var Zi=e=>e[0]===`_`||e===`$stable`,Qi=e=>A(e)?e.map(ci):[ci(e)],$i=(e,t,n)=>yr(e=>Qi(t(e)),n),ea=(e,t)=>{let n=e._ctx;for(let r in e){if(Zi(r))continue;let i=e[r];if(M(i))t[r]=$i(r,i,n);else if(i!=null){let e=Qi(i);t[r]=()=>e}}},ta=(e,t)=>{let n=Qi(t);e.slots.default=()=>n},na=(e,t)=>{if(e.vnode.shapeFlag&32){let n=t._;n?(e.slots=t,we(t,`_`,n)):ea(t,e.slots={})}else e.slots={},t&&ta(e,t);we(e.slots,ei,1)},ra=(e,t)=>{let{vnode:n,slots:r}=e,i=!0,a=w;if(n.shapeFlag&32){let e=t._;e?e===1?i=!1:O(r,t):(i=!t.$stable,ea(t,r)),a=t}else t&&(ta(e,t),a={default:1});if(i)for(let e in r)!Zi(e)&&!(e in a)&&delete r[e]};function ia(e,t){let n=R;if(n===null)return e;let r=n.proxy,i=e.dirs||=[];for(let e=0;e<t.length;e++){let[n,a,o,s=w]=t[e];M(n)&&(n={mounted:n,updated:n}),i.push({dir:n,instance:r,value:a,oldValue:void 0,arg:o,modifiers:s})}return e}function aa(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&pn(c,n,8,[e.el,s,e,t])}}function oa(){return{app:null,config:{isNativeTag:E,performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:E,errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}var sa=0;function ca(e,t){return function(n,r=null){r!=null&&!P(r)&&(r=null);let i=oa(),a=new Set,o=!1,s=i.app={_uid:sa++,_component:n,_props:r,_container:null,_context:i,version:_o,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&M(e.install)?(a.add(e),e.install(s,...t)):M(e)&&(a.add(e),e(s,...t))),s},mixin(e){return __VUE_OPTIONS_API__&&(i.mixins.includes(e)||i.mixins.push(e)),s},component(e,t){return t?(i.components[e]=t,s):i.components[e]},directive(e,t){return t?(i.directives[e]=t,s):i.directives[e]},mount(a,c){if(!o){let l=z(n,r);return l.appContext=i,c&&t?t(l,a):e(l,a),o=!0,s._container=a,a.__vue_app__=s,__VUE_PROD_DEVTOOLS__&&Hn(s,_o),l.component.proxy}},unmount(){o&&(e(null,s._container),__VUE_PROD_DEVTOOLS__&&Un(s))},provide(e,t){return i.provides[e]=t,s}};return s}}var la=!1,ua=e=>/svg/.test(e.namespaceURI)&&e.tagName!==`foreignObject`,da=e=>e.nodeType===8;function fa(e){let{mt:t,p:n,o:{patchProp:r,nextSibling:i,parentNode:a,remove:o,insert:s,createComment:c}}=e,l=(e,t)=>{la=!1,u(t.firstChild,e,null,null),Ln(),la&&console.error(`Hydration completed but contains mismatches.`)},u=(n,r,o,s,c=!1)=>{let l=da(n)&&n.data===`[`,g=()=>m(n,r,o,s,l),{type:_,ref:v,shapeFlag:y}=r,b=n.nodeType;r.el=n;let x=null;switch(_){case Vr:b===3?(n.data!==r.children&&(la=!0,n.data=r.children),x=i(n)):x=g();break;case Hr:x=b!==8||l?g():i(n);break;case Ur:if(b!==1)x=g();else{x=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=x.outerHTML),t===r.staticCount-1&&(r.anchor=x),x=i(x);return x}break;case Br:x=l?p(n,r,o,s,c):g();break;default:if(y&1)x=b!==1||r.type!==n.tagName.toLowerCase()?g():d(n,r,o,s,c);else if(y&6){let e=a(n),u=()=>{t(r,e,null,o,s,ua(e),c)},d=r.type.__asyncLoader;d?d().then(u):u(),x=l?h(n):i(n)}else y&64?x=b===8?r.type.hydrate(n,r,o,s,c,e,f):g():y&128&&(x=r.type.hydrate(n,r,o,s,ua(a(n)),c,e,u))}return v!=null&&o&&ha(v,null,o,s,r),x},d=(e,t,n,i,a)=>{a||=!!t.dynamicChildren;let{props:s,patchFlag:c,shapeFlag:l,dirs:u}=t;if(c!==-1){if(u&&aa(t,null,n,`created`),s)if(!a||c&16||c&32)for(let t in s)!he(t)&&D(t)&&r(e,t,null,s[t]);else s.onClick&&r(e,`onClick`,null,s.onClick);let d;if((d=s&&s.onVnodeBeforeMount)&&V(d,n,t),u&&aa(t,null,n,`beforeMount`),((d=s&&s.onVnodeMounted)||u)&&mr(()=>{d&&V(d,n,t),u&&aa(t,null,n,`mounted`)},i),l&16&&!(s&&(s.innerHTML||s.textContent))){let r=f(e.firstChild,t,e,n,i,a);for(;r;){la=!0;let e=r;r=r.nextSibling,o(e)}}else l&8&&e.textContent!==t.children&&(la=!0,e.textContent=t.children)}return e.nextSibling},f=(e,t,r,i,a,o)=>{o||=!!t.dynamicChildren;let s=t.children,c=s.length;for(let t=0;t<c;t++){let c=o?s[t]:s[t]=ci(s[t]);e?e=u(e,c,i,a,o):(la=!0,n(null,c,r,null,i,a,ua(r)))}return e},p=(e,t,n,r,o)=>{let l=a(e),u=f(i(e),t,l,n,r,o);return u&&da(u)&&u.data===`]`?i(t.anchor=u):(la=!0,s(t.anchor=c(`]`),l,u),u)},m=(e,t,r,s,c)=>{if(la=!0,t.el=null,c){let t=h(e);for(;;){let n=i(e);if(n&&n!==t)o(n);else break}}let l=i(e),u=a(e);return o(e),n(null,t,u,l,r,s,ua(u)),l},h=e=>{let t=0;for(;e;)if(e=i(e),e&&da(e)&&(e.data===`[`&&t++,e.data===`]`)){if(t===0)return i(e);t--}return e};return[l,u]}function pa(){typeof __VUE_OPTIONS_API__!=`boolean`&&(De().__VUE_OPTIONS_API__=!0),typeof __VUE_PROD_DEVTOOLS__!=`boolean`&&(De().__VUE_PROD_DEVTOOLS__=!1)}var ma={scheduler:An,allowRecurse:!0},B=mr,ha=(e,t,n,r,i)=>{if(A(e)){e.forEach((e,a)=>ha(e,t&&(A(t)?t[a]:t),n,r,i));return}let a;a=i?i.shapeFlag&4?i.component.proxy:i.el:null;let{i:o,r:s}=e,c=t&&t.r,l=o.refs===w?o.refs={}:o.refs,u=o.setupState;if(c!=null&&c!==s&&(N(c)?(l[c]=null,k(u,c)&&(u[c]=null)):L(c)&&(c.value=null)),N(s)){let e=()=>{l[s]=a,k(u,s)&&(u[s]=a)};a?(e.id=-1,B(e,r)):e()}else if(L(s)){let e=()=>{s.value=a};a?(e.id=-1,B(e,r)):e()}else M(s)&&fn(s,n,12,[a,l])};function ga(e){return va(e)}function _a(e){return va(e,fa)}function va(e,t){pa();let{insert:n,remove:r,patchProp:i,forcePatchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=T,cloneNode:m,insertStaticContent:h}=e,g=(e,t,n,r=null,i=null,a=null,o=!1,s=!1)=>{e&&!Qr(e,t)&&(r=de(e),N(e,i,a,!0),e=null),t.patchFlag===-2&&(s=!1,t.dynamicChildren=null);let{type:c,ref:l,shapeFlag:u}=t;switch(c){case Vr:_(e,t,n,r);break;case Hr:v(e,t,n,r);break;case Ur:e??y(t,n,r,o);break;case Br:D(e,t,n,r,i,a,o,s);break;default:u&1?b(e,t,n,r,i,a,o,s):u&6?re(e,t,n,r,i,a,o,s):(u&64||u&128)&&c.process(e,t,n,r,i,a,o,s,me)}l!=null&&i&&ha(l,e&&e.ref,i,a,t)},_=(e,t,r,i)=>{if(e==null)n(t.el=s(t.children),r,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},v=(e,t,r,i)=>{e==null?n(t.el=c(t.children||``),r,i):t.el=e.el},y=(e,t,n,r)=>{[e.el,e.anchor]=h(e.children,t,n,r)},b=(e,t,n,r,i,a,o,s)=>{o||=t.type===`svg`,e==null?x(t,n,r,i,a,o,s):ee(e,t,i,a,o,s)},x=(e,t,r,a,s,c,l)=>{let d,f,{type:p,props:h,shapeFlag:g,transition:_,scopeId:v,patchFlag:y,dirs:b}=e;if(e.el&&m!==void 0&&y===-1)d=e.el=m(e.el);else{if(d=e.el=o(e.type,c,h&&h.is),g&8?u(d,e.children):g&16&&C(e.children,d,null,a,s,c&&p!==`foreignObject`,l||!!e.dynamicChildren),b&&aa(e,null,a,`created`),h){for(let t in h)he(t)||i(d,t,null,h[t],c,e.children,a,s,ue);(f=h.onVnodeBeforeMount)&&V(f,a,e)}S(d,v,e,a)}__VUE_PROD_DEVTOOLS__&&(Object.defineProperty(d,`__vnode`,{value:e,enumerable:!1}),Object.defineProperty(d,`__vueParentComponent`,{value:a,enumerable:!1})),b&&aa(e,null,a,`beforeMount`);let x=(!s||s&&!s.pendingBranch)&&_&&!_.persisted;x&&_.beforeEnter(d),n(d,t,r),((f=h&&h.onVnodeMounted)||x||b)&&B(()=>{f&&V(f,a,e),x&&_.enter(d),b&&aa(e,null,a,`mounted`)},s)},S=(e,t,n,r)=>{if(t&&p(e,t),r){let i=r.type.__scopeId;i&&i!==t&&p(e,i+`-s`),n===r.subTree&&S(e,r.vnode.scopeId,r.vnode,r.parent)}},C=(e,t,n,r,i,a,o,s=0)=>{for(let c=s;c<e.length;c++)g(null,e[c]=o?li(e[c]):ci(e[c]),t,n,r,i,a,o)},ee=(e,t,n,r,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||w,m=t.props||w,h;if((h=m.onVnodeBeforeUpdate)&&V(h,n,t,e),f&&aa(t,e,n,`beforeUpdate`),l>0){if(l&16)ne(c,t,p,m,n,r,o);else if(l&2&&p.class!==m.class&&i(c,`class`,null,m.class,o),l&4&&i(c,`style`,p.style,m.style,o),l&8){let s=t.dynamicProps;for(let t=0;t<s.length;t++){let l=s[t],u=p[l],d=m[l];(d!==u||a&&a(c,l))&&i(c,l,u,d,o,e.children,n,r,ue)}}l&1&&e.children!==t.children&&u(c,t.children)}else !s&&d==null&&ne(c,t,p,m,n,r,o);let g=o&&t.type!==`foreignObject`;d?E(e.dynamicChildren,d,c,n,r,g):s||j(e,t,c,null,n,r,g),((h=m.onVnodeUpdated)||f)&&B(()=>{h&&V(h,n,t,e),f&&aa(t,e,n,`updated`)},r)},E=(e,t,n,r,i,a)=>{for(let o=0;o<t.length;o++){let s=e[o],c=t[o];g(s,c,s.type===Br||!Qr(s,c)||s.shapeFlag&6||s.shapeFlag&64?d(s.el):n,null,r,i,a,!0)}},ne=(e,t,n,r,o,s,c)=>{if(n!==r){for(let l in r){if(he(l))continue;let u=r[l],d=n[l];(u!==d||a&&a(e,l))&&i(e,l,d,u,c,t.children,o,s,ue)}if(n!==w)for(let a in n)!he(a)&&!(a in r)&&i(e,a,n[a],null,c,t.children,o,s,ue)}},D=(e,t,r,i,a,o,c,l)=>{let u=t.el=e?e.el:s(``),d=t.anchor=e?e.anchor:s(``),{patchFlag:f,dynamicChildren:p}=t;f>0&&(l=!0),e==null?(n(u,r,i),n(d,r,i),C(t.children,r,d,a,o,c,l)):f>0&&f&64&&p?(E(e.dynamicChildren,p,r,a,o,c),(t.key!=null||a&&t===a.subTree)&&fe(e,t,!0)):j(e,t,r,d,a,o,c,l)},re=(e,t,n,r,i,a,o,s)=>{e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,s):O(t,n,r,i,a,o,s):ie(e,t,s)},O=(e,t,n,r,i,a,o)=>{let s=e.component=Wa(e,r,i);if(Vi(e)&&(s.ctx.renderer=me),Ja(s),s.asyncDep){i&&i.registerDep(s,ae),e.el||v(null,s.subTree=z(Hr),t,n);return}ae(s,e,t,n,i,a,o)},ie=(e,t,n)=>{let r=t.component=e.component;if(rr(e,t,n))if(r.asyncDep&&!r.asyncResolved){k(r,t,n);return}else r.next=t,Mn(r.update),r.update();else t.component=e.component,t.el=e.el,r.vnode=t},ae=(e,t,n,r,i,a,o)=>{e.update=Pe(function(){if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e,l=t,u;t?k(e,t,o):t=c,t.el=c.el,n&&Ce(n),(u=t.props&&t.props.onVnodeBeforeUpdate)&&V(u,s,t,c);let f=$n(e),p=e.subTree;e.subTree=f,e.refs!==w&&(e.refs={}),g(p,f,d(p.el),de(p),e,i,a),t.el=f.el,l===null&&ar(e,f.el),r&&B(r,i),(u=t.props&&t.props.onVnodeUpdated)&&B(()=>{V(u,s,t,c)},i),__VUE_PROD_DEVTOOLS__&&Gn(e)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d}=e;l&&Ce(l),(o=c&&c.onVnodeBeforeMount)&&V(o,d,t);let f=e.subTree=$n(e);s&&_e?_e(t.el,f,e,i):(g(null,f,n,r,e,i,a),t.el=f.el),u&&B(u,i),(o=c&&c.onVnodeMounted)&&B(()=>{V(o,d,t)},i);let{a:p}=e;p&&t.shapeFlag&256&&B(p,i),e.isMounted=!0}},ma)},k=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,pi(e,t.props,r,n),ra(e,t.children),In(void 0,e.update)},j=(e,t,n,r,i,a,o,s=!1)=>{let c=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(f&128){se(c,d,n,r,i,a,o,s);return}else if(f&256){oe(c,d,n,r,i,a,o,s);return}}p&8?(l&16&&ue(c,i,a),d!==c&&u(n,d)):l&16?p&16?se(c,d,n,r,i,a,o,s):ue(c,i,a,!0):(l&8&&u(n,``),p&16&&C(d,n,r,i,a,o,s))},oe=(e,t,n,r,i,a,o,s)=>{e||=te,t||=te;let c=e.length,l=t.length,u=Math.min(c,l),d;for(d=0;d<u;d++){let r=t[d]=s?li(t[d]):ci(t[d]);g(e[d],r,n,null,i,a,o,s)}c>l?ue(e,i,a,!0,u):C(t,n,r,i,a,o,s,u)},se=(e,t,n,r,i,a,o,s)=>{let c=0,l=t.length,u=e.length-1,d=l-1;for(;c<=u&&c<=d;){let r=e[c],l=t[c]=s?li(t[c]):ci(t[c]);if(Qr(r,l))g(r,l,n,null,i,a,o,s);else break;c++}for(;c<=u&&c<=d;){let r=e[u],c=t[d]=s?li(t[d]):ci(t[d]);if(Qr(r,c))g(r,c,n,null,i,a,o,s);else break;u--,d--}if(c>u){if(c<=d){let e=d+1,u=e<l?t[e].el:r;for(;c<=d;)g(null,t[c]=s?li(t[c]):ci(t[c]),n,u,i,a,o),c++}}else if(c>d)for(;c<=u;)N(e[c],i,a,!0),c++;else{let f=c,p=c,m=new Map;for(c=p;c<=d;c++){let e=t[c]=s?li(t[c]):ci(t[c]);e.key!=null&&m.set(e.key,c)}let h,_=0,v=d-p+1,y=!1,b=0,x=Array(v);for(c=0;c<v;c++)x[c]=0;for(c=f;c<=u;c++){let r=e[c];if(_>=v){N(r,i,a,!0);continue}let l;if(r.key!=null)l=m.get(r.key);else for(h=p;h<=d;h++)if(x[h-p]===0&&Qr(r,t[h])){l=h;break}l===void 0?N(r,i,a,!0):(x[l-p]=c+1,l>=b?b=l:y=!0,g(r,t[l],n,null,i,a,o,s),_++)}let S=y?ya(x):te;for(h=S.length-1,c=v-1;c>=0;c--){let e=p+c,s=t[e],u=e+1<l?t[e+1].el:r;x[c]===0?g(null,s,n,u,i,a,o):y&&(h<0||c!==S[h]?M(s,n,u,2):h--)}}},M=(e,t,r,i,a=null)=>{let{el:o,type:s,transition:c,children:l,shapeFlag:u}=e;if(u&6){M(e.component.subTree,t,r,i);return}if(u&128){e.suspense.move(t,r,i);return}if(u&64){s.move(e,t,r,me);return}if(s===Br){n(o,t,r);for(let e=0;e<l.length;e++)M(l[e],t,r,i);n(e.anchor,t,r);return}if(i!==2&&u&1&&c)if(i===0)c.beforeEnter(o),n(o,t,r),B(()=>c.enter(o),a);else{let{leave:e,delayLeave:i,afterLeave:a}=c,s=()=>n(o,t,r),l=()=>{e(o,()=>{s(),a&&a()})};i?i(o,s,l):l()}else n(o,t,r)},N=(e,t,n,r=!1)=>{let{type:i,props:a,ref:o,children:s,dynamicChildren:c,shapeFlag:l,patchFlag:u,dirs:d}=e;if(o!=null&&t&&ha(o,null,t,n,null),l&256){t.ctx.deactivate(e);return}let f=l&1&&d,p;if((p=a&&a.onVnodeBeforeUnmount)&&V(p,t,e),l&6)le(e.component,n,r);else{if(l&128){e.suspense.unmount(n,r);return}f&&aa(e,null,t,`beforeUnmount`),c&&(i!==Br||u>0&&u&64)?ue(c,t,n):l&16&&ue(s,t,n),l&64&&e.type.remove(e,me),r&&ce(e)}((p=a&&a.onVnodeUnmounted)||f)&&B(()=>{p&&V(p,t,e),f&&aa(e,null,t,`unmounted`)},n)},ce=e=>{let{type:t,el:n,anchor:i,transition:a}=e;if(t===Br){P(n,i);return}let o=()=>{r(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},P=(e,t)=>{let n;for(;e!==t;)n=f(e),r(e),e=n;r(t)},le=(e,t,n)=>{let{bum:r,effects:i,update:a,subTree:o,um:s}=e;if(r&&Ce(r),i)for(let e=0;e<i.length;e++)Fe(i[e]);a&&(Fe(a),N(o,e,t,n)),s&&B(s,t),B(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,t.deps===0&&t.resolve()),__VUE_PROD_DEVTOOLS__&&Kn(e)},ue=(e,t,n,r=!1,i=0)=>{for(let a=i;a<e.length;a++)N(e[a],t,n,r)},de=e=>e.shapeFlag&6?de(e.component.subTree):e.shapeFlag&128?e.suspense.next():f(e.anchor||e.el),fe=(e,t,n=!1)=>{let r=e.children,i=t.children;if(A(r)&&A(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e]=li(i[e]);a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a.el=t.el),n||fe(t,a))}},pe=(e,t)=>{e==null?t._vnode&&N(t._vnode,null,null,!0):g(t._vnode||null,e,t),Ln(),t._vnode=e},me={p:g,um:N,m:M,r:ce,mt:O,mc:C,pc:j,pbc:E,n:de,o:e},ge,_e;return t&&([ge,_e]=t(me)),{render:pe,hydrate:ge,createApp:ca(pe,ge)}}function V(e,t,n,r=null){pn(e,t,7,[n,r])}function ya(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=(a+o)/2|0,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function ba(e,t){return Ca(e,null,t)}var xa={};function Sa(e,t,n){return Ca(e,t,n)}function Ca(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=w,s=H){let c,l=L(e);if(l?c=()=>e.value:Rt(e)?(c=()=>e,r=!0):c=A(e)?()=>e.map(e=>{if(L(e))return e.value;if(Rt(e))return Ta(e);if(M(e))return fn(e,s,2)}):M(e)?t?()=>fn(e,s,2):()=>{if(!(s&&s.isUnmounted))return u&&u(),fn(e,s,3,[d])}:T,t&&r){let e=c;c=()=>Ta(e())}let u,d=e=>{u=h.options.onStop=()=>{fn(e,s,4)}},f=A(e)?[]:xa,p=()=>{if(h.active)if(t){let e=h();(r||l||Se(e,f))&&(u&&u(),pn(t,s,3,[e,f===xa?void 0:f,d]),f=e)}else h()};p.allowRecurse=!!t;let m;m=i===`sync`?p:i===`post`?()=>B(p,s&&s.suspense):()=>{!s||s.isMounted?Pn(p):p()};let h=Pe(c,{lazy:!0,onTrack:a,onTrigger:o,scheduler:m});return to(h),t?n?p():f=h():i===`post`?B(h,s&&s.suspense):h(),()=>{Fe(h),s&&ie(s.effects,h)}}function wa(e,t,n){let r=this.proxy;return Ca(N(e)?()=>r[e]:e.bind(r),t.bind(r),n,this)}function Ta(e,t=new Set){if(!P(e)||t.has(e))return e;if(t.add(e),L(e))Ta(e.value,t);else if(A(e))for(let n=0;n<e.length;n++)Ta(e[n],t);else if(j(e))e.forEach((n,r)=>{Ta(e.get(r),t)});else if(oe(e))e.forEach(e=>{Ta(e,t)});else for(let n in e)Ta(e[n],t);return e}function Ea(e,t){if(H){let n=H.provides,r=H.parent&&H.parent.provides;r===n&&(n=H.provides=Object.create(r)),n[e]=t}}function Da(e,t,n=!1){let r=H||R;if(r){let i=r.provides;if(e in i)return i[e];if(arguments.length>1)return n&&M(t)?t():t}}var Oa=!1;function ka(e,t,n=[],r=[],i=!1){let{mixins:a,extends:o,data:s,computed:c,methods:l,watch:u,provide:d,inject:f,components:p,directives:m,beforeMount:h,mounted:g,beforeUpdate:_,updated:v,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:ee,render:w,renderTracked:te,renderTriggered:E,errorCaptured:ne}=t,D=e.proxy,re=e.ctx,ie=e.appContext.mixins;if(i&&w&&e.render===T&&(e.render=w),i||(Oa=!0,Aa(`beforeCreate`,t,D,ie),Oa=!1,Na(e,ie,n,r)),o&&ka(e,o,n,r,!0),a&&Na(e,a,n,r),f)if(A(f))for(let e=0;e<f.length;e++){let t=f[e];re[t]=Da(t)}else for(let e in f){let t=f[e];P(t)?re[e]=Da(t.from||e,t.default,!0):re[e]=Da(t)}if(l)for(let e in l){let t=l[e];M(t)&&(re[e]=t.bind(D))}if(i?s&&n.push(s):(n.length&&n.forEach(t=>Pa(e,t,D)),s&&Pa(e,s,D)),c)for(let e in c){let t=c[e],n=oo({get:M(t)?t.bind(D,D):M(t.get)?t.get.bind(D,D):T,set:!M(t)&&M(t.set)?t.set.bind(D):T});Object.defineProperty(re,e,{enumerable:!0,configurable:!0,get:()=>n.value,set:e=>n.value=e})}if(u&&r.push(u),!i&&r.length&&r.forEach(e=>{for(let t in e)Fa(e[t],re,D,t)}),d){let e=M(d)?d.call(D):d;for(let t in e)Ea(t,e[t])}i&&(p&&O(e.components||=O({},e.type.components),p),m&&O(e.directives||=O({},e.type.directives),m)),i||Aa(`created`,t,D,ie),h&&Ci(h.bind(D)),g&&wi(g.bind(D)),_&&Ti(_.bind(D)),v&&Ei(v.bind(D)),y&&Gi(y.bind(D)),b&&Ki(b.bind(D)),ne&&ji(ne.bind(D)),te&&Ai(te.bind(D)),E&&ki(E.bind(D)),S&&Di(S.bind(D)),ee&&Oi(ee.bind(D))}function Aa(e,t,n,r){Ma(e,r,n);let{extends:i,mixins:a}=t;i&&ja(e,i,n),a&&Ma(e,a,n);let o=t[e];o&&o.call(n)}function ja(e,t,n){t.extends&&ja(e,t.extends,n);let r=t[e];r&&r.call(n)}function Ma(e,t,n){for(let r=0;r<t.length;r++){let i=t[r].mixins;i&&Ma(e,i,n);let a=t[r][e];a&&a.call(n)}}function Na(e,t,n,r){for(let i=0;i<t.length;i++)ka(e,t[i],n,r,!0)}function Pa(e,t,n){let r=t.call(n,n);P(r)&&(e.data===w?e.data=Nt(r):O(e.data,r))}function Fa(e,t,n,r){let i=r.includes(`.`)?Ia(n,r):()=>n[r];if(N(e)){let n=t[e];M(n)&&Sa(i,n)}else if(M(e))Sa(i,e.bind(n));else if(P(e))if(A(e))e.forEach(e=>Fa(e,t,n,r));else{let r=M(e.handler)?e.handler.bind(n):t[e.handler];M(r)&&Sa(i,r,e)}}function Ia(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function La(e){let t=e.type,{__merged:n,mixins:r,extends:i}=t;if(n)return n;let a=e.appContext.mixins;if(!a.length&&!r&&!i)return t;let o={};return a.forEach(t=>Ra(o,t,e)),Ra(o,t,e),t.__merged=o}function Ra(e,t,n){let r=n.appContext.config.optionMergeStrategies,{mixins:i,extends:a}=t;a&&Ra(e,a,n),i&&i.forEach(t=>Ra(e,t,n));for(let i in t)r&&k(r,i)?e[i]=r[i](e[i],t[i],n.proxy,i):e[i]=t[i]}var za=O(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>e.parent&&e.parent.proxy,$root:e=>e.root&&e.root.proxy,$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?La(e):e.type,$forceUpdate:e=>()=>An(e.update),$nextTick:()=>kn,$watch:e=>__VUE_OPTIONS_API__?wa.bind(e):T}),Ba={get({_:e},t){let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t===`__v_skip`)return!0;let l;if(t[0]!==`$`){let s=o[t];if(s!==void 0)switch(s){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return a[t]}else if(r!==w&&k(r,t))return o[t]=0,r[t];else if(i!==w&&k(i,t))return o[t]=1,i[t];else if((l=e.propsOptions[0])&&k(l,t))return o[t]=2,a[t];else if(n!==w&&k(n,t))return o[t]=3,n[t];else (!__VUE_OPTIONS_API__||!Oa)&&(o[t]=4)}let u=za[t],d,f;if(u)return t===`$attrs`&&F(e,`get`,t),u(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==w&&k(n,t))return o[t]=3,n[t];if(f=c.config.globalProperties,k(f,t))return f[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;if(i!==w&&k(i,t))i[t]=n;else if(r!==w&&k(r,t))r[t]=n;else if(t in e.props)return!1;return t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return n[o]!==void 0||e!==w&&k(e,o)||t!==w&&k(t,o)||(s=a[0])&&k(s,o)||k(r,o)||k(za,o)||k(i.config.globalProperties,o)}},Va=O({},Ba,{get(e,t){if(t!==Symbol.unscopables)return Ba.get(e,t,e)},has(e,t){return t[0]!==`_`&&!a(t)}}),Ha=oa(),Ua=0;function Wa(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||Ha,a={uid:Ua++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,render:null,proxy:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gi(r,i),emitsOptions:Xn(r,i),emit:null,emitted:null,ctx:w,data:w,props:w,attrs:w,slots:w,refs:w,setupState:w,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Yn.bind(null,a),__VUE_PROD_DEVTOOLS__&&Wn(a),a}var H=null,Ga=()=>H||R,Ka=e=>{H=e},qa=!1;function Ja(e,t=!1){qa=t;let{props:n,children:r,shapeFlag:i}=e.vnode,a=i&4;fi(e,n,a,t),na(e,r);let o=a?Ya(e,t):void 0;return qa=!1,o}function Ya(e,t){let n=e.type;e.accessCache={},e.proxy=new Proxy(e.ctx,Ba);let{setup:r}=n;if(r){let n=e.setupContext=r.length>1?eo(e):null;H=e,Ve();let i=fn(r,e,0,[e.props,n]);if(Ue(),H=null,le(i)){if(t)return i.then(t=>{Xa(e,t)});e.asyncDep=i}else Xa(e,i)}else $a(e)}function Xa(e,t,n){M(t)?e.render=t:P(t)&&(__VUE_PROD_DEVTOOLS__&&(e.devtoolsRawSetupState=t),e.setupState=Xt(t)),$a(e)}var Za;function Qa(e){Za=e}function $a(e,t){let n=e.type;e.render||(Za&&n.template&&!n.render&&(n.render=Za(n.template,{isCustomElement:e.appContext.config.isCustomElement,delimiters:n.delimiters})),e.render=n.render||T,e.render._rc&&(e.withProxy=new Proxy(e.ctx,Va))),__VUE_OPTIONS_API__&&(H=e,ka(e,n),H=null)}function eo(e){return{attrs:e.attrs,slots:e.slots,emit:e.emit}}function to(e){H&&(H.effects||=[]).push(e)}var no=/(?:^|[-_])(\w)/g,ro=e=>e.replace(no,e=>e.toUpperCase()).replace(/[-_]/g,``);function io(e,t,n=!1){let r=M(t)&&t.displayName||t.name;if(!r&&t.__file){let e=t.__file.match(/([^/\\]+)\.vue$/);e&&(r=e[1])}if(!r&&e&&e.parent){let n=e=>{for(let n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?ro(r):n?`App`:`Anonymous`}function ao(e){return M(e)&&`__vccOpts`in e}function oo(e){let t=rn(e);return to(t.effect),t}function so(e){return M(e)?{setup:e,name:e.name}:e}function co(e){M(e)&&(e={loader:e});let{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,timeout:a,suspensible:o=!0,onError:s}=e,c=null,l,u=0,d=()=>(u++,c=null,f()),f=()=>{let e;return c||(e=c=t().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),s)return new Promise((t,n)=>{s(e,()=>t(d()),()=>n(e),u+1)});throw e}).then(t=>e!==c&&c?c:(t&&(t.__esModule||t[Symbol.toStringTag]===`Module`)&&(t=t.default),l=t,t)))};return so({__asyncLoader:f,name:`AsyncComponentWrapper`,setup(){let e=H;if(l)return()=>lo(l,e);let t=t=>{c=null,mn(t,e,13,!r)};if(o&&e.suspense)return f().then(t=>()=>lo(t,e)).catch(e=>(t(e),()=>r?z(r,{error:e}):null));let s=Ut(!1),u=Ut(),d=Ut(!!i);return i&&setTimeout(()=>{d.value=!1},i),a!=null&&setTimeout(()=>{if(!s.value&&!u.value){let e=Error(`Async component timed out after ${a}ms.`);t(e),u.value=e}},a),f().then(()=>{s.value=!0}).catch(e=>{t(e),u.value=e}),()=>{if(s.value&&l)return lo(l,e);if(u.value&&r)return z(r,{error:u.value});if(n&&!d.value)return z(n)}}})}function lo(e,{vnode:{props:t,children:n}}){return z(e,t,n)}function uo(e,t,n){let r=arguments.length;return r===2?P(t)&&!A(t)?Zr(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zr(n)&&(n=[n]),z(e,t,n))}var fo=Symbol(``),po=()=>{{let e=Da(fo);return e||on(`Server rendering context not provided. Make sure to only call useSsrContext() conditionally in the server build.`),e}};function mo(e,t){let n;if(A(e)||N(e)){n=Array(e.length);for(let r=0,i=e.length;r<i;r++)n[r]=t(e[r],r)}else if(typeof e==`number`){n=Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(P(e))if(e[Symbol.iterator])n=Array.from(e,t);else{let r=Object.keys(e);n=Array(r.length);for(let i=0,a=r.length;i<a;i++){let a=r[i];n[i]=t(e[a],a,i)}}else n=[];return n}function ho(e){let t={};for(let n in e)t[`on${xe(n)}`]=e[n];return t}function go(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(A(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.fn)}return e}var _o=`3.0.0`,vo=n({BaseTransition:()=>Pi,Comment:()=>Hr,Fragment:()=>Br,KeepAlive:()=>Hi,Static:()=>Ur,Suspense:()=>sr,Teleport:()=>jr,Text:()=>Vr,Transition:()=>ts,TransitionGroup:()=>_s,callWithAsyncErrorHandling:()=>pn,callWithErrorHandling:()=>fn,camelize:()=>ve,capitalize:()=>xe,cloneVNode:()=>ii,computed:()=>oo,createApp:()=>Zs,createBlock:()=>Xr,createCommentVNode:()=>si,createHydrationRenderer:()=>_a,createRenderer:()=>ga,createSSRApp:()=>Qs,createSlots:()=>go,createStaticVNode:()=>oi,createTextVNode:()=>ai,createVNode:()=>z,customRef:()=>Qt,defineAsyncComponent:()=>co,defineComponent:()=>so,devtools:()=>Bn,getCurrentInstance:()=>Ga,getTransitionRawChildren:()=>Bi,h:()=>uo,handleError:()=>mn,hydrate:()=>Xs,inject:()=>Da,isProxy:()=>Bt,isReactive:()=>Rt,isReadonly:()=>zt,isRef:()=>L,isVNode:()=>Zr,markRaw:()=>Vt,mergeProps:()=>di,nextTick:()=>kn,onActivated:()=>Gi,onBeforeMount:()=>Ci,onBeforeUnmount:()=>Di,onBeforeUpdate:()=>Ti,onDeactivated:()=>Ki,onErrorCaptured:()=>ji,onMounted:()=>wi,onRenderTracked:()=>Ai,onRenderTriggered:()=>ki,onUnmounted:()=>Oi,onUpdated:()=>Ei,openBlock:()=>Kr,popScopeId:()=>Cr,provide:()=>Ea,proxyRefs:()=>Xt,pushScopeId:()=>Sr,queuePostFlushCb:()=>Fn,reactive:()=>Nt,readonly:()=>Ft,ref:()=>Ut,registerRuntimeCompiler:()=>Qa,render:()=>Ys,renderList:()=>mo,renderSlot:()=>vr,resolveComponent:()=>Pr,resolveDirective:()=>Lr,resolveDynamicComponent:()=>Ir,resolveTransitionHooks:()=>Ii,setBlockTracking:()=>Yr,setDevtoolsHook:()=>Vn,setTransitionHooks:()=>zi,shallowReactive:()=>Pt,shallowReadonly:()=>It,shallowRef:()=>Wt,ssrContextKey:()=>fo,ssrUtils:()=>null,toDisplayString:()=>C,toHandlers:()=>ho,toRaw:()=>I,toRef:()=>tn,toRefs:()=>$t,transformVNodeArgs:()=>$r,triggerRef:()=>qt,unref:()=>Jt,useCssModule:()=>Xo,useCssVars:()=>Zo,useSSRContext:()=>po,useTransitionState:()=>Mi,vModelCheckbox:()=>Os,vModelDynamic:()=>Fs,vModelRadio:()=>As,vModelSelect:()=>js,vModelText:()=>Ds,vShow:()=>Hs,version:()=>_o,warn:()=>on,watch:()=>Sa,watchEffect:()=>ba,withCtx:()=>yr,withDirectives:()=>ia,withKeys:()=>Vs,withModifiers:()=>zs,withScopeId:()=>wr}),yo=`http://www.w3.org/2000/svg`,bo=typeof document<`u`?document:null,xo,So,Co={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n)=>t?bo.createElementNS(yo,e):bo.createElement(e,n?{is:n}:void 0),createText:e=>bo.createTextNode(e),createComment:e=>bo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},cloneNode(e){return e.cloneNode(!0)},insertStaticContent(e,t,n,r){let i=r?So||=bo.createElementNS(yo,`svg`):xo||=bo.createElement(`div`);i.innerHTML=e;let a=i.firstChild,o=a,s=o;for(;o;)s=o,Co.insert(o,t,n),o=i.firstChild;return[a,s]}};function wo(e,t,n){if(t??=``,n)e.setAttribute(`class`,t);else{let n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(` `)),e.className=t}}function To(e,t,n){let r=e.style;if(!n)e.removeAttribute(`style`);else if(N(n))t!==n&&(r.cssText=n);else{for(let e in n)Do(r,e,n[e]);if(t&&!N(t))for(let e in t)n[e]??Do(r,e,``)}}var Eo=/\s*!important$/;function Do(e,t,n){if(A(n))n.forEach(n=>Do(e,t,n));else if(t.startsWith(`--`))e.setProperty(t,n);else{let r=Ao(e,t);Eo.test(n)?e.setProperty(be(r),n.replace(Eo,``),`important`):e[r]=n}}var Oo=[`Webkit`,`Moz`,`ms`],ko={};function Ao(e,t){let n=ko[t];if(n)return n;let r=ve(t);if(r!==`filter`&&r in e)return ko[t]=r;r=xe(r);for(let n=0;n<Oo.length;n++){let i=Oo[n]+r;if(i in e)return ko[t]=i}return t}var jo=`http://www.w3.org/1999/xlink`;function Mo(e,t,n,r){if(r&&t.startsWith(`xlink:`))n==null?e.removeAttributeNS(jo,t.slice(6,t.length)):e.setAttributeNS(jo,t,n);else{let r=s(t);n==null||r&&n===!1?e.removeAttribute(t):e.setAttribute(t,r?``:n)}}function No(e,t,n,r,i,a,o){if(t===`innerHTML`||t===`textContent`){r&&o(r,i,a),e[t]=n??``;return}if(t===`value`&&e.tagName!==`PROGRESS`){e._value=n;let t=n??``;e.value!==t&&(e.value=t);return}if(n===``&&typeof e[t]==`boolean`)e[t]=!0;else if(n==null&&typeof e[t]==`string`)e[t]=``,e.removeAttribute(t);else try{e[t]=n}catch{}}var Po=Date.now;typeof document<`u`&&Po()>document.createEvent(`Event`).timeStamp&&(Po=()=>performance.now());var Fo=0,Io=Promise.resolve(),Lo=()=>{Fo=0},Ro=()=>Fo||=(Io.then(Lo),Po());function zo(e,t,n,r){e.addEventListener(t,n,r)}function Bo(e,t,n,r){e.removeEventListener(t,n,r)}function Vo(e,t,n,r,i=null){let a=e._vei||={},o=a[t];if(r&&o)o.value=r;else{let[n,s]=Uo(t);r?zo(e,n,a[t]=Wo(r,i),s):o&&(Bo(e,n,o,s),a[t]=void 0)}}var Ho=/(?:Once|Passive|Capture)$/;function Uo(e){let t;if(Ho.test(e)){t={};let n;for(;n=e.match(Ho);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e.slice(2).toLowerCase(),t]}function Wo(e,t){let n=e=>{(e.timeStamp||Po())>=n.attached-1&&pn(Go(e,n.value),t,5,[e])};return n.value=e,n.attached=Ro(),n}function Go(e,t){if(A(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}else return t}var Ko=/^on[a-z]/,qo=(e,t)=>t===`value`,Jo=(e,t,n,r,i=!1,a,o,s,c)=>{switch(t){case`class`:wo(e,r,i);break;case`style`:To(e,n,r);break;default:D(t)?re(t)||Vo(e,t,n,r,o):Yo(e,t,r,i)?No(e,t,r,a,o,s,c):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Mo(e,t,r,i));break}};function Yo(e,t,n,r){return r?!!(t===`innerHTML`||t in e&&Ko.test(t)&&M(n)):t===`spellcheck`||t===`draggable`||t===`form`&&typeof n==`string`||t===`list`&&e.tagName===`INPUT`||Ko.test(t)&&N(n)?!1:t in e}function Xo(e=`$style`){{let t=Ga();if(!t)return w;let n=t.type.__cssModules;return n&&n[e]||w}}function Zo(e,t=!1){let n=Ga();if(!n)return;let r=t&&n.type.__scopeId?`${n.type.__scopeId.replace(/^data-v-/,``)}-`:``;wi(()=>{ba(()=>{Qo(n.subTree,e(n.proxy),r)})})}function Qo(e,t,n){if(e.shapeFlag&128){let r=e.suspense;e=r.activeBranch,r.pendingBranch&&!r.isHydrating&&r.effects.push(()=>{Qo(r.activeBranch,t,n)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el){let r=e.el.style;for(let e in t)r.setProperty(`--${n}${e}`,Jt(t[e]))}else e.type===Br&&e.children.forEach(e=>Qo(e,t,n))}var $o=`transition`,es=`animation`,ts=(e,{slots:t})=>uo(Pi,is(e),t);ts.displayName=`Transition`;var ns={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rs=ts.props=O({},Pi.props,ns);function is(e){let{name:t=`v`,type:n,css:r=!0,duration:i,enterFromClass:a=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=e,m={};for(let t in e)t in ns||(m[t]=e[t]);if(!r)return m;let h=as(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:ee=y,onAppearCancelled:w=b}=m,te=(e,t,n)=>{cs(e,t?u:s),cs(e,t?l:o),n&&n()},T=(e,t)=>{cs(e,p),cs(e,f),t&&t()},E=e=>(t,r)=>{let i=e?ee:y,o=()=>te(t,e,r);i&&i(t,o),ls(()=>{cs(t,e?c:a),ss(t,e?u:s),i&&i.length>1||(g?setTimeout(o,g):us(t,n,o))})};return O(m,{onBeforeEnter(e){v&&v(e),ss(e,o),ss(e,a)},onBeforeAppear(e){C&&C(e),ss(e,l),ss(e,c)},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){let r=()=>T(e,t);ss(e,f),ss(e,d),ls(()=>{cs(e,d),ss(e,p),x&&x.length>1||(_?setTimeout(r,_):us(e,n,r))}),x&&x(e,r)},onEnterCancelled(e){te(e,!1),b&&b(e)},onAppearCancelled(e){te(e,!0),w&&w(e)},onLeaveCancelled(e){T(e),S&&S(e)}})}function as(e){if(e==null)return null;if(P(e))return[os(e.enter),os(e.leave)];{let t=os(e);return[t,t]}}function os(e){return Te(e)}function ss(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||=new Set).add(t)}function cs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ls(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}function us(e,t,n){let{type:r,timeout:i,propCount:a}=ds(e,t);if(!r)return n();let o=r+`end`,s=0,c=()=>{e.removeEventListener(o,l),n()},l=t=>{t.target===e&&++s>=a&&c()};setTimeout(()=>{s<a&&c()},i+1),e.addEventListener(o,l)}function ds(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r($o+`Delay`),a=r($o+`Duration`),o=fs(i,a),s=r(es+`Delay`),c=r(es+`Duration`),l=fs(s,c),u=null,d=0,f=0;t===$o?o>0&&(u=$o,d=o,f=a.length):t===es?l>0&&(u=es,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?$o:es:null,f=u?u===$o?a.length:c.length:0);let p=u===$o&&/\b(transform|all)(,|$)/.test(n[$o+`Property`]);return{type:u,timeout:d,propCount:f,hasTransform:p}}function fs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>ps(t)+ps(e[n])))}function ps(e){return Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function ms(e){return e&&ms(e.__v_raw)||e}var hs=new WeakMap,gs=new WeakMap,_s={name:`TransitionGroup`,props:O({},rs,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=Ga(),r=Mi(),i,a;return Ei(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!Ss(i[0].el,n.vnode.el,t))return;i.forEach(vs),i.forEach(ys);let r=i.filter(bs);xs(),r.forEach(e=>{let n=e.el,r=n.style;ss(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n._moveCb=e=>{e&&e.target!==n||(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener(`transitionend`,i),n._moveCb=null,cs(n,t))};n.addEventListener(`transitionend`,i)})}),()=>{let o=ms(e),s=is(o),c=o.tag||Br;i=a,a=t.default?Bi(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&zi(t,Ii(t,s,r,n))}if(i)for(let e=0;e<i.length;e++){let t=i[e];zi(t,Ii(t,s,r,n)),hs.set(t,t.el.getBoundingClientRect())}return z(c,null,a)}}};function vs(e){let t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ys(e){gs.set(e,e.el.getBoundingClientRect())}function bs(e){let t=hs.get(e),n=gs.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration=`0s`,e}}function xs(){return document.body.offsetHeight}function Ss(e,t,n){let r=e.cloneNode();e._vtc&&e._vtc.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let i=t.nodeType===1?t:t.parentNode;i.appendChild(r);let{hasTransform:a}=ds(r);return i.removeChild(r),a}var Cs=e=>{let t=e.props[`onUpdate:modelValue`];return A(t)?e=>Ce(t,e):t};function ws(e){e.target.composing=!0}function Ts(e){let t=e.target;t.composing&&(t.composing=!1,Es(t,`input`))}function Es(e,t){let n=document.createEvent(`HTMLEvents`);n.initEvent(t,!0,!0),e.dispatchEvent(n)}var Ds={created(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){e.value=t??``,e._assign=Cs(a);let o=i||e.type===`number`;zo(e,n?`change`:`input`,t=>{if(t.target.composing)return;let n=e.value;r?n=n.trim():o&&(n=Te(n)),e._assign(n)}),r&&zo(e,`change`,()=>{e.value=e.value.trim()}),n||(zo(e,`compositionstart`,ws),zo(e,`compositionend`,Ts),zo(e,`change`,Ts))},beforeUpdate(e,{value:t,modifiers:{trim:n,number:r}},i){if(e._assign=Cs(i),document.activeElement===e&&(n&&e.value.trim()===t||(r||e.type===`number`)&&Te(e.value)===t))return;let a=t??``;e.value!==a&&(e.value=a)}},Os={created(e,t,n){ks(e,t,n),e._assign=Cs(n),zo(e,`change`,()=>{let t=e._modelValue,n=Ns(e),r=e.checked,i=e._assign;if(A(t)){let e=x(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(oe(t)){let e=t.has(n);r&&!e?i(t.add(n)):!r&&e&&(t.delete(n),i(t))}else i(Ps(e,r))})},beforeUpdate(e,t,n){e._assign=Cs(n),ks(e,t,n)}};function ks(e,{value:t,oldValue:n},r){e._modelValue=t,A(t)?e.checked=x(t,r.props.value)>-1:oe(t)?e.checked=S(t,r.props.value):t!==n&&(e.checked=b(t,Ps(e,!0)))}var As={created(e,{value:t},n){e.checked=b(t,n.props.value),e._assign=Cs(n),zo(e,`change`,()=>{e._assign(Ns(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Cs(r),t!==n&&(e.checked=b(t,r.props.value))}},js={created(e,t,n){zo(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(Ns);e._assign(e.multiple?t:t[0])}),e._assign=Cs(n)},mounted(e,{value:t}){Ms(e,t)},beforeUpdate(e,t,n){e._assign=Cs(n)},updated(e,{value:t}){Ms(e,t)}};function Ms(e,t){let n=e.multiple;if(!(n&&!A(t)&&!oe(t))){for(let r=0,i=e.options.length;r<i;r++){let i=e.options[r],a=Ns(i);if(n)A(t)?i.selected=x(t,a)>-1:i.selected=S(t,a);else if(b(Ns(i),t)){e.selectedIndex=r;return}}n||(e.selectedIndex=-1)}}function Ns(e){return`_value`in e?e._value:e.value}function Ps(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Fs={created(e,t,n){Is(e,t,n,null,`created`)},mounted(e,t,n){Is(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){Is(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){Is(e,t,n,r,`updated`)}};function Is(e,t,n,r,i){let a;switch(e.tagName){case`SELECT`:a=js;break;case`TEXTAREA`:a=Ds;break;default:switch(n.props&&n.props.type){case`checkbox`:a=Os;break;case`radio`:a=As;break;default:a=Ds}}let o=a[i];o&&o(e,t,n,r)}var Ls=[`ctrl`,`shift`,`alt`,`meta`],Rs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Ls.some(n=>e[`${n}Key`]&&!t.includes(n))},zs=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){let r=Rs[t[e]];if(r&&r(n,t))return}return e(n,...r)},Bs={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Vs=(e,t)=>n=>{if(!(`key`in n))return;let r=be(n.key);if(t.some(e=>e===r||Bs[e]===r))return e(n)},Hs={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Us(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Us(e,!0),r.enter(e)):r.leave(e,()=>{Us(e,!1)}):Us(e,t))},beforeUnmount(e,{value:t}){Us(e,t)}};function Us(e,t){e.style.display=t?e._vod:`none`}var Ws=O({patchProp:Jo,forcePatchProp:qo},Co),Gs,Ks=!1;function qs(){return Gs||=ga(Ws)}function Js(){return Gs=Ks?Gs:_a(Ws),Ks=!0,Gs}var Ys=((...e)=>{qs().render(...e)}),Xs=((...e)=>{Js().hydrate(...e)}),Zs=((...e)=>{let t=qs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=$s(e);if(!r)return;let i=t._component;!M(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML=``;let a=n(r);return r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``),a},t}),Qs=((...e)=>{let t=Js().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=$s(e);if(t)return n(t,!0)},t});function $s(e){return N(e)?document.querySelector(e):e}t((e=>{Object.defineProperty(e,`__esModule`,{value:!0});function t(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var n=class{constructor(e,t,n){this.line=void 0,this.column=void 0,this.index=void 0,this.line=e,this.column=t,this.index=n}},r=class{constructor(e,t){this.start=void 0,this.end=void 0,this.filename=void 0,this.identifierName=void 0,this.start=e,this.end=t}},i=`BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED`,a={ImportMetaOutsideModule:{message:`import.meta may appear only with 'sourceType: "module"'`,code:i},ImportOutsideModule:{message:`'import' and 'export' may appear only with 'sourceType: "module"'`,code:i}},o={ArrayPattern:`array destructuring pattern`,AssignmentExpression:`assignment expression`,AssignmentPattern:`assignment expression`,ArrowFunctionExpression:`arrow function expression`,ConditionalExpression:`conditional expression`,CatchClause:`catch clause`,ForOfStatement:`for-of statement`,ForInStatement:`for-in statement`,ForStatement:`for-loop`,FormalParameters:`function parameter list`,Identifier:`identifier`,ImportSpecifier:`import specifier`,ImportDefaultSpecifier:`import default specifier`,ImportNamespaceSpecifier:`import namespace specifier`,ObjectPattern:`object destructuring pattern`,ParenthesizedExpression:`parenthesized expression`,RestElement:`rest element`,UpdateExpression:{true:`prefix operation`,false:`postfix operation`},VariableDeclarator:`variable declaration`,YieldExpression:`yield expression`},s=e=>e.type===`UpdateExpression`?o.UpdateExpression[`${e.prefix}`]:o[e.type],c={AccessorIsGenerator:({kind:e})=>`A ${e}ter cannot be a generator.`,ArgumentsInClass:`'arguments' is only allowed in functions and class methods.`,AsyncFunctionInSingleStatementContext:`Async functions can only be declared at the top level or inside a block.`,AwaitBindingIdentifier:`Can not use 'await' as identifier inside an async function.`,AwaitBindingIdentifierInStaticBlock:`Can not use 'await' as identifier inside a static block.`,AwaitExpressionFormalParameter:`'await' is not allowed in async function parameters.`,AwaitUsingNotInAsyncContext:`'await using' is only allowed within async functions and at the top levels of modules.`,AwaitNotInAsyncContext:`'await' is only allowed within async functions and at the top levels of modules.`,BadGetterArity:`A 'get' accessor must not have any formal parameters.`,BadSetterArity:`A 'set' accessor must have exactly one formal parameter.`,BadSetterRestParameter:`A 'set' accessor function argument must not be a rest parameter.`,ConstructorClassField:`Classes may not have a field named 'constructor'.`,ConstructorClassPrivateField:`Classes may not have a private field named '#constructor'.`,ConstructorIsAccessor:`Class constructor may not be an accessor.`,ConstructorIsAsync:`Constructor can't be an async function.`,ConstructorIsGenerator:`Constructor can't be a generator.`,DeclarationMissingInitializer:({kind:e})=>`Missing initializer in ${e} declaration.`,DecoratorArgumentsOutsideParentheses:`Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.`,DecoratorBeforeExport:`Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.`,DecoratorsBeforeAfterExport:`Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.`,DecoratorConstructor:`Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?`,DecoratorExportClass:`Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.`,DecoratorSemicolon:`Decorators must not be followed by a semicolon.`,DecoratorStaticBlock:`Decorators can't be used with a static block.`,DeferImportRequiresNamespace:'Only `import defer * as x from "./module"` is valid.',DeletePrivateField:`Deleting a private field is not allowed.`,DestructureNamedImport:`ES2015 named imports do not destructure. Use another statement for destructuring after the import.`,DuplicateConstructor:`Duplicate constructor in the same class.`,DuplicateDefaultExport:`Only one default export allowed per module.`,DuplicateExport:({exportName:e})=>`\`${e}\` has already been exported. Exported identifiers must be unique.`,DuplicateProto:`Redefinition of __proto__ property.`,DuplicateRegExpFlags:`Duplicate regular expression flag.`,ElementAfterRest:`Rest element must be last element.`,EscapedCharNotAnIdentifier:`Invalid Unicode escape.`,ExportBindingIsString:({localName:e,exportName:t})=>`A string literal cannot be used as an exported binding without \`from\`.\n- Did you mean \`export { '${e}' as '${t}' } from 'some-module'\`?`,ExportDefaultFromAsIdentifier:`'from' is not allowed as an identifier after 'export default'.`,ForInOfLoopInitializer:({type:e})=>`'${e===`ForInStatement`?`for-in`:`for-of`}' loop variable declaration may not have an initializer.`,ForInUsing:`For-in loop may not start with 'using' declaration.`,ForOfAsync:`The left-hand side of a for-of loop may not be 'async'.`,ForOfLet:`The left-hand side of a for-of loop may not start with 'let'.`,GeneratorInSingleStatementContext:`Generators can only be declared at the top level or inside a block.`,IllegalBreakContinue:({type:e})=>`Unsyntactic ${e===`BreakStatement`?`break`:`continue`}.`,IllegalLanguageModeDirective:`Illegal 'use strict' directive in function with non-simple parameter list.`,IllegalReturn:`'return' outside of function.`,ImportAttributesUseAssert:"The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",ImportBindingIsString:({importName:e})=>`A string literal cannot be used as an imported binding.\n- Did you mean \`import { "${e}" as foo }\`?`,ImportCallArity:"`import()` requires exactly one or two arguments.",ImportCallNotNewExpression:`Cannot use new with import(...).`,ImportCallSpreadArgument:"`...` is not allowed in `import()`.",ImportJSONBindingNotDefault:"A JSON module can only be imported with `default`.",ImportReflectionHasAssertion:"`import module x` cannot have assertions.",ImportReflectionNotBinding:'Only `import module x from "./module"` is valid.',IncompatibleRegExpUVFlags:`The 'u' and 'v' regular expression flags cannot be enabled at the same time.`,InvalidBigIntLiteral:`Invalid BigIntLiteral.`,InvalidCodePoint:`Code point out of bounds.`,InvalidCoverDiscardElement:`'void' must be followed by an expression when not used in a binding position.`,InvalidCoverInitializedName:`Invalid shorthand property initializer.`,InvalidDecimal:`Invalid decimal.`,InvalidDigit:({radix:e})=>`Expected number in radix ${e}.`,InvalidEscapeSequence:`Bad character escape sequence.`,InvalidEscapeSequenceTemplate:`Invalid escape sequence in template.`,InvalidEscapedReservedWord:({reservedWord:e})=>`Escape sequence in keyword ${e}.`,InvalidIdentifier:({identifierName:e})=>`Invalid identifier ${e}.`,InvalidLhs:({ancestor:e})=>`Invalid left-hand side in ${s(e)}.`,InvalidLhsBinding:({ancestor:e})=>`Binding invalid left-hand side in ${s(e)}.`,InvalidLhsOptionalChaining:({ancestor:e})=>`Invalid optional chaining in the left-hand side of ${s(e)}.`,InvalidNumber:`Invalid number.`,InvalidOrMissingExponent:`Floating-point numbers require a valid exponent after the 'e'.`,InvalidOrUnexpectedToken:({unexpected:e})=>`Unexpected character '${e}'.`,InvalidParenthesizedAssignment:`Invalid parenthesized assignment pattern.`,InvalidPrivateFieldResolution:({identifierName:e})=>`Private name #${e} is not defined.`,InvalidPropertyBindingPattern:`Binding member expression.`,InvalidRecordProperty:`Only properties and spread elements are allowed in record definitions.`,InvalidRestAssignmentPattern:`Invalid rest operator's argument.`,LabelRedeclaration:({labelName:e})=>`Label '${e}' is already declared.`,LetInLexicalBinding:`'let' is disallowed as a lexically bound name.`,LineTerminatorBeforeArrow:`No line break is allowed before '=>'.`,MalformedRegExpFlags:`Invalid regular expression flag.`,MissingClassName:`A class name is required.`,MissingEqInAssignment:`Only '=' operator can be used for specifying default value.`,MissingSemicolon:`Missing semicolon.`,MissingPlugin:({missingPlugin:e})=>`This experimental syntax requires enabling the parser plugin: ${e.map(e=>JSON.stringify(e)).join(`, `)}.`,MissingOneOfPlugins:({missingPlugin:e})=>`This experimental syntax requires enabling one of the following parser plugin(s): ${e.map(e=>JSON.stringify(e)).join(`, `)}.`,MissingUnicodeEscape:`Expecting Unicode escape sequence \\uXXXX.`,MixingCoalesceWithLogical:`Nullish coalescing operator(??) requires parens when mixing with logical operators.`,ModuleAttributeDifferentFromType:"The only accepted module attribute is `type`.",ModuleAttributeInvalidValue:`Only string literals are allowed as module attribute values.`,ModuleAttributesWithDuplicateKeys:({key:e})=>`Duplicate key "${e}" is not allowed in module attributes.`,ModuleExportNameHasLoneSurrogate:({surrogateCharCode:e})=>`An export name cannot include a lone surrogate, found '\\u${e.toString(16)}'.`,ModuleExportUndefined:({localName:e})=>`Export '${e}' is not defined.`,MultipleDefaultsInSwitch:`Multiple default clauses.`,NewlineAfterThrow:`Illegal newline after throw.`,NoCatchOrFinally:`Missing catch or finally clause.`,NumberIdentifier:`Identifier directly after number.`,NumericSeparatorInEscapeSequence:`Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.`,ObsoleteAwaitStar:`'await*' has been removed from the async functions proposal. Use Promise.all() instead.`,OptionalChainingNoNew:`Constructors in/after an Optional Chain are not allowed.`,OptionalChainingNoTemplate:`Tagged Template Literals are not allowed in optionalChain.`,OverrideOnConstructor:`'override' modifier cannot appear on a constructor declaration.`,ParamDupe:`Argument name clash.`,PatternHasAccessor:`Object pattern can't contain getter or setter.`,PatternHasMethod:`Object pattern can't contain methods.`,PrivateInExpectedIn:({identifierName:e})=>`Private names are only allowed in property accesses (\`obj.#${e}\`) or in \`in\` expressions (\`#${e} in obj\`).`,PrivateNameRedeclaration:({identifierName:e})=>`Duplicate private name #${e}.`,RecordExpressionBarIncorrectEndSyntaxType:`Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.`,RecordExpressionBarIncorrectStartSyntaxType:`Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.`,RecordExpressionHashIncorrectStartSyntaxType:`Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.`,RecordNoProto:`'__proto__' is not allowed in Record expressions.`,RestTrailingComma:`Unexpected trailing comma after rest element.`,SloppyFunction:`In non-strict mode code, functions can only be declared at top level or inside a block.`,SloppyFunctionAnnexB:`In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.`,SourcePhaseImportRequiresDefault:'Only `import source x from "./module"` is valid.',StaticPrototype:`Classes may not have static property named prototype.`,SuperNotAllowed:"`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",SuperPrivateField:`Private fields can't be accessed on super.`,TrailingDecorator:`Decorators must be attached to a class element.`,TupleExpressionBarIncorrectEndSyntaxType:`Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.`,TupleExpressionBarIncorrectStartSyntaxType:`Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.`,TupleExpressionHashIncorrectStartSyntaxType:`Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.`,UnexpectedArgumentPlaceholder:`Unexpected argument placeholder.`,UnexpectedAwaitAfterPipelineBody:`Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.`,UnexpectedDigitAfterHash:`Unexpected digit after hash token.`,UnexpectedImportExport:`'import' and 'export' may only appear at the top level.`,UnexpectedKeyword:({keyword:e})=>`Unexpected keyword '${e}'.`,UnexpectedLeadingDecorator:`Leading decorators must be attached to a class declaration.`,UnexpectedLexicalDeclaration:`Lexical declaration cannot appear in a single-statement context.`,UnexpectedNewTarget:"`new.target` can only be used in functions or class properties.",UnexpectedNumericSeparator:`A numeric separator is only allowed between two digits.`,UnexpectedPrivateField:`Unexpected private name.`,UnexpectedReservedWord:({reservedWord:e})=>`Unexpected reserved word '${e}'.`,UnexpectedSuper:`'super' is only allowed in object methods and classes.`,UnexpectedToken:({expected:e,unexpected:t})=>`Unexpected token${t?` '${t}'.`:``}${e?`, expected "${e}"`:``}`,UnexpectedTokenUnaryExponentiation:`Illegal expression. Wrap left hand side or entire exponentiation in parentheses.`,UnexpectedUsingDeclaration:"Using declaration cannot appear in the top level when source type is `script` or in the bare case statement.",UnexpectedVoidPattern:`Unexpected void binding.`,UnsupportedBind:`Binding should be performed on object property.`,UnsupportedDecoratorExport:`A decorated export must export a class declaration.`,UnsupportedDefaultExport:"Only expressions, functions or classes are allowed as the `default` export.",UnsupportedImport:"`import` can only be used in `import()` or `import.meta`.",UnsupportedMetaProperty:({target:e,onlyValidPropertyName:t})=>`The only valid meta property for ${e} is ${e}.${t}.`,UnsupportedParameterDecorator:`Decorators cannot be used to decorate parameters.`,UnsupportedPropertyDecorator:`Decorators cannot be used to decorate object literal properties.`,UnsupportedSuper:`'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).`,UnterminatedComment:`Unterminated comment.`,UnterminatedRegExp:`Unterminated regular expression.`,UnterminatedString:`Unterminated string constant.`,UnterminatedTemplate:`Unterminated template.`,UsingDeclarationExport:`Using declaration cannot be exported.`,UsingDeclarationHasBindingPattern:`Using declaration cannot have destructuring patterns.`,VarRedeclaration:({identifierName:e})=>`Identifier '${e}' has already been declared.`,VoidPatternCatchClauseParam:"A void binding can not be the catch clause parameter. Use `try { ... } catch { ... }` if you want to discard the caught error.",VoidPatternInitializer:`A void binding may not have an initializer.`,YieldBindingIdentifier:`Can not use 'yield' as identifier inside a generator.`,YieldInParameter:`Yield expression is not allowed in formal parameters.`,YieldNotInGeneratorFunction:`'yield' is only allowed within generator functions.`,ZeroDigitNumericSeparator:`Numeric separator can not be used after leading 0.`},l={StrictDelete:`Deleting local variable in strict mode.`,StrictEvalArguments:({referenceName:e})=>`Assigning to '${e}' in strict mode.`,StrictEvalArgumentsBinding:({bindingName:e})=>`Binding '${e}' in strict mode.`,StrictFunction:`In strict mode code, functions can only be declared at top level or inside a block.`,StrictNumericEscape:`The only valid numeric escape in strict mode is '\\0'.`,StrictOctalLiteral:`Legacy octal literals are not allowed in strict mode.`,StrictWith:`'with' in strict mode.`},u={ParseExpressionEmptyInput:`Unexpected parseExpression() input: The input is empty or contains only comments.`,ParseExpressionExpectsEOF:({unexpected:e})=>`Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`${String.fromCodePoint(e)}\`.`},d=Object.assign({PipeBodyIsTighter:`Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.`,PipeTopicRequiresHackPipes:`Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.`,PipeTopicUnbound:`Topic reference is unbound; it must be inside a pipe body.`,PipeTopicUnconfiguredToken:({token:e})=>`Invalid topic token ${e}. In order to use ${e} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${e}" }.`,PipeTopicUnused:`Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.`,PipeUnparenthesizedBody:({type:e})=>`Hack-style pipe body cannot be an unparenthesized ${s({type:e})}; please wrap it in parentheses.`},{PipelineBodyNoArrow:`Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.`,PipelineBodySequenceExpression:`Pipeline body may not be a comma-separated sequence expression.`,PipelineHeadSequenceExpression:`Pipeline head should not be a comma-separated sequence expression.`,PipelineTopicUnused:`Pipeline is in topic style but does not use topic reference.`,PrimaryTopicNotAllowed:`Topic reference was used in a lexical context without topic binding.`,PrimaryTopicRequiresSmartPipeline:`Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.`}),f=[`message`];function p(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,value:n})}function m({toMessage:e,code:t,reasonCode:r,syntaxPlugin:i}){let a=r===`MissingPlugin`||r===`MissingOneOfPlugins`,o={AccessorCannotDeclareThisParameter:`AccesorCannotDeclareThisParameter`,AccessorCannotHaveTypeParameters:`AccesorCannotHaveTypeParameters`,ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference:`ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference`,SetAccessorCannotHaveOptionalParameter:`SetAccesorCannotHaveOptionalParameter`,SetAccessorCannotHaveRestParameter:`SetAccesorCannotHaveRestParameter`,SetAccessorCannotHaveReturnType:`SetAccesorCannotHaveReturnType`};return o[r]&&(r=o[r]),function o(s,c){let l=SyntaxError();return l.code=t,l.reasonCode=r,l.loc=s,l.pos=s.index,l.syntaxPlugin=i,a&&(l.missingPlugin=c.missingPlugin),p(l,`clone`,function(e={}){let{line:t,column:r,index:i}=e.loc??s;return o(new n(t,r,i),Object.assign({},c,e.details))}),p(l,`details`,c),Object.defineProperty(l,`message`,{configurable:!0,get(){let t=`${e(c)} (${s.line}:${s.column})`;return this.message=t,t},set(e){Object.defineProperty(this,`message`,{value:e,writable:!0})}}),l}}function h(e,n){if(Array.isArray(e))return t=>h(t,e[0]);let r={};for(let i of Object.keys(e)){let a=e[i],o=typeof a==`string`?{message:()=>a}:typeof a==`function`?{message:a}:a,{message:s}=o,c=t(o,f);r[i]=m(Object.assign({code:`BABEL_PARSER_SYNTAX_ERROR`,reasonCode:i,toMessage:typeof s==`string`?()=>s:s},n?{syntaxPlugin:n}:{},c))}return r}Object.assign({},h(a),h(c),h(l),h(u),h`pipelineOperator`(d));var{defineProperty:g}=Object,_=class{constructor(e,t){this.token=void 0,this.preserveSpace=void 0,this.token=e,this.preserveSpace=!!t}},v={brace:new _(`{`),j_oTag:new _(`<tag`),j_cTag:new _(`</tag`),j_expr:new _(`<tag>...</tag>`,!0)};v.template=new _("`",!0);var y=!0,b=!0,x=!0,S=!0,C=!0,ee=!0,w=class{constructor(e,t={}){this.label=void 0,this.keyword=void 0,this.beforeExpr=void 0,this.startsExpr=void 0,this.rightAssociative=void 0,this.isLoop=void 0,this.isAssign=void 0,this.prefix=void 0,this.postfix=void 0,this.binop=void 0,this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.rightAssociative=!!t.rightAssociative,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop==null?null:t.binop,this.updateContext=null}},te=new Map;function T(e,t={}){t.keyword=e;let n=A(e,t);return te.set(e,n),n}function E(e,t){return A(e,{beforeExpr:y,binop:t})}var ne=-1,D=[],re=[],O=[],ie=[],ae=[],k=[];function A(e,t={}){return++ne,re.push(e),O.push(t.binop??-1),ie.push(t.beforeExpr??!1),ae.push(t.startsExpr??!1),k.push(t.prefix??!1),D.push(new w(e,t)),ne}function j(e,t={}){return++ne,te.set(e,ne),re.push(e),O.push(t.binop??-1),ie.push(t.beforeExpr??!1),ae.push(t.startsExpr??!1),k.push(t.prefix??!1),D.push(new w(`name`,t)),ne}var oe={bracketL:A(`[`,{beforeExpr:y,startsExpr:b}),bracketHashL:A(`#[`,{beforeExpr:y,startsExpr:b}),bracketBarL:A(`[|`,{beforeExpr:y,startsExpr:b}),bracketR:A(`]`),bracketBarR:A(`|]`),braceL:A(`{`,{beforeExpr:y,startsExpr:b}),braceBarL:A(`{|`,{beforeExpr:y,startsExpr:b}),braceHashL:A(`#{`,{beforeExpr:y,startsExpr:b}),braceR:A(`}`),braceBarR:A(`|}`),parenL:A(`(`,{beforeExpr:y,startsExpr:b}),parenR:A(`)`),comma:A(`,`,{beforeExpr:y}),semi:A(`;`,{beforeExpr:y}),colon:A(`:`,{beforeExpr:y}),doubleColon:A(`::`,{beforeExpr:y}),dot:A(`.`),question:A(`?`,{beforeExpr:y}),questionDot:A(`?.`),arrow:A(`=>`,{beforeExpr:y}),template:A(`template`),ellipsis:A(`...`,{beforeExpr:y}),backQuote:A("`",{startsExpr:b}),dollarBraceL:A("${",{beforeExpr:y,startsExpr:b}),templateTail:A("...`",{startsExpr:b}),templateNonTail:A("...${",{beforeExpr:y,startsExpr:b}),at:A(`@`),hash:A(`#`,{startsExpr:b}),interpreterDirective:A(`#!...`),eq:A(`=`,{beforeExpr:y,isAssign:S}),assign:A(`_=`,{beforeExpr:y,isAssign:S}),slashAssign:A(`_=`,{beforeExpr:y,isAssign:S}),xorAssign:A(`_=`,{beforeExpr:y,isAssign:S}),moduloAssign:A(`_=`,{beforeExpr:y,isAssign:S}),incDec:A(`++/--`,{prefix:C,postfix:ee,startsExpr:b}),bang:A(`!`,{beforeExpr:y,prefix:C,startsExpr:b}),tilde:A(`~`,{beforeExpr:y,prefix:C,startsExpr:b}),doubleCaret:A(`^^`,{startsExpr:b}),doubleAt:A(`@@`,{startsExpr:b}),pipeline:E(`|>`,0),nullishCoalescing:E(`??`,1),logicalOR:E(`||`,1),logicalAND:E(`&&`,2),bitwiseOR:E(`|`,3),bitwiseXOR:E(`^`,4),bitwiseAND:E(`&`,5),equality:E(`==/!=/===/!==`,6),lt:E(`</>/<=/>=`,7),gt:E(`</>/<=/>=`,7),relational:E(`</>/<=/>=`,7),bitShift:E(`<</>>/>>>`,8),bitShiftL:E(`<</>>/>>>`,8),bitShiftR:E(`<</>>/>>>`,8),plusMin:A(`+/-`,{beforeExpr:y,binop:9,prefix:C,startsExpr:b}),modulo:A(`%`,{binop:10,startsExpr:b}),star:A(`*`,{binop:10}),slash:E(`/`,10),exponent:A(`**`,{beforeExpr:y,binop:11,rightAssociative:!0}),_in:T(`in`,{beforeExpr:y,binop:7}),_instanceof:T(`instanceof`,{beforeExpr:y,binop:7}),_break:T(`break`),_case:T(`case`,{beforeExpr:y}),_catch:T(`catch`),_continue:T(`continue`),_debugger:T(`debugger`),_default:T(`default`,{beforeExpr:y}),_else:T(`else`,{beforeExpr:y}),_finally:T(`finally`),_function:T(`function`,{startsExpr:b}),_if:T(`if`),_return:T(`return`,{beforeExpr:y}),_switch:T(`switch`),_throw:T(`throw`,{beforeExpr:y,prefix:C,startsExpr:b}),_try:T(`try`),_var:T(`var`),_const:T(`const`),_with:T(`with`),_new:T(`new`,{beforeExpr:y,startsExpr:b}),_this:T(`this`,{startsExpr:b}),_super:T(`super`,{startsExpr:b}),_class:T(`class`,{startsExpr:b}),_extends:T(`extends`,{beforeExpr:y}),_export:T(`export`),_import:T(`import`,{startsExpr:b}),_null:T(`null`,{startsExpr:b}),_true:T(`true`,{startsExpr:b}),_false:T(`false`,{startsExpr:b}),_typeof:T(`typeof`,{beforeExpr:y,prefix:C,startsExpr:b}),_void:T(`void`,{beforeExpr:y,prefix:C,startsExpr:b}),_delete:T(`delete`,{beforeExpr:y,prefix:C,startsExpr:b}),_do:T(`do`,{isLoop:x,beforeExpr:y}),_for:T(`for`,{isLoop:x}),_while:T(`while`,{isLoop:x}),_as:j(`as`,{startsExpr:b}),_assert:j(`assert`,{startsExpr:b}),_async:j(`async`,{startsExpr:b}),_await:j(`await`,{startsExpr:b}),_defer:j(`defer`,{startsExpr:b}),_from:j(`from`,{startsExpr:b}),_get:j(`get`,{startsExpr:b}),_let:j(`let`,{startsExpr:b}),_meta:j(`meta`,{startsExpr:b}),_of:j(`of`,{startsExpr:b}),_sent:j(`sent`,{startsExpr:b}),_set:j(`set`,{startsExpr:b}),_source:j(`source`,{startsExpr:b}),_static:j(`static`,{startsExpr:b}),_using:j(`using`,{startsExpr:b}),_yield:j(`yield`,{startsExpr:b}),_asserts:j(`asserts`,{startsExpr:b}),_checks:j(`checks`,{startsExpr:b}),_exports:j(`exports`,{startsExpr:b}),_global:j(`global`,{startsExpr:b}),_implements:j(`implements`,{startsExpr:b}),_intrinsic:j(`intrinsic`,{startsExpr:b}),_infer:j(`infer`,{startsExpr:b}),_is:j(`is`,{startsExpr:b}),_mixins:j(`mixins`,{startsExpr:b}),_proto:j(`proto`,{startsExpr:b}),_require:j(`require`,{startsExpr:b}),_satisfies:j(`satisfies`,{startsExpr:b}),_keyof:j(`keyof`,{startsExpr:b}),_readonly:j(`readonly`,{startsExpr:b}),_unique:j(`unique`,{startsExpr:b}),_abstract:j(`abstract`,{startsExpr:b}),_declare:j(`declare`,{startsExpr:b}),_enum:j(`enum`,{startsExpr:b}),_module:j(`module`,{startsExpr:b}),_namespace:j(`namespace`,{startsExpr:b}),_interface:j(`interface`,{startsExpr:b}),_type:j(`type`,{startsExpr:b}),_opaque:j(`opaque`,{startsExpr:b}),name:A(`name`,{startsExpr:b}),placeholder:A(`%%`,{startsExpr:b}),string:A(`string`,{startsExpr:b}),num:A(`num`,{startsExpr:b}),bigint:A(`bigint`,{startsExpr:b}),decimal:A(`decimal`,{startsExpr:b}),regexp:A(`regexp`,{startsExpr:b}),privateName:A(`#name`,{startsExpr:b}),eof:A(`eof`),jsxName:A(`jsxName`),jsxText:A(`jsxText`,{beforeExpr:y}),jsxTagStart:A(`jsxTagStart`,{startsExpr:b}),jsxTagEnd:A(`jsxTagEnd`)};function se(e){return D[e]}D[8].updateContext=e=>{e.pop()},D[5].updateContext=D[7].updateContext=D[23].updateContext=e=>{e.push(v.brace)},D[22].updateContext=e=>{e[e.length-1]===v.template?e.pop():e.push(v.template)},D[143].updateContext=e=>{e.push(v.j_expr,v.j_oTag)};var M=`ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ`,N=`·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･`;RegExp(`[`+M+`]`),RegExp(`[`+M+N+`]`),M=N=null;var ce={keyword:`break.case.catch.continue.debugger.default.do.else.finally.for.function.if.return.switch.throw.try.var.const.while.with.new.this.super.class.extends.export.import.null.true.false.in.instanceof.typeof.void.delete`.split(`.`),strict:[`implements`,`interface`,`let`,`package`,`private`,`protected`,`public`,`static`,`yield`],strictBind:[`eval`,`arguments`]};new Set(ce.keyword),new Set(ce.strict),new Set(ce.strictBind),h`flow`({AmbiguousConditionalArrow:`Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.`,AmbiguousDeclareModuleKind:"Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",AssignReservedType:({reservedType:e})=>`Cannot overwrite reserved type ${e}.`,DeclareClassElement:"The `declare` modifier can only appear on class fields.",DeclareClassFieldInitializer:"Initializers are not allowed in fields with the `declare` modifier.",DuplicateDeclareModuleExports:"Duplicate `declare module.exports` statement.",EnumBooleanMemberNotInitialized:({memberName:e,enumName:t})=>`Boolean enum members need to be initialized. Use either \`${e} = true,\` or \`${e} = false,\` in enum \`${t}\`.`,EnumDuplicateMemberName:({memberName:e,enumName:t})=>`Enum member names need to be unique, but the name \`${e}\` has already been used before in enum \`${t}\`.`,EnumInconsistentMemberValues:({enumName:e})=>`Enum \`${e}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,EnumInvalidExplicitType:({invalidEnumType:e,enumName:t})=>`Enum type \`${e}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`,EnumInvalidExplicitTypeUnknownSupplied:({enumName:e})=>`Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${e}\`.`,EnumInvalidMemberInitializerPrimaryType:({enumName:e,memberName:t,explicitType:n})=>`Enum \`${e}\` has type \`${n}\`, so the initializer of \`${t}\` needs to be a ${n} literal.`,EnumInvalidMemberInitializerSymbolType:({enumName:e,memberName:t})=>`Symbol enum members cannot be initialized. Use \`${t},\` in enum \`${e}\`.`,EnumInvalidMemberInitializerUnknownType:({enumName:e,memberName:t})=>`The enum member initializer for \`${t}\` needs to be a literal (either a boolean, number, or string) in enum \`${e}\`.`,EnumInvalidMemberName:({enumName:e,memberName:t,suggestion:n})=>`Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${t}\`, consider using \`${n}\`, in enum \`${e}\`.`,EnumNumberMemberNotInitialized:({enumName:e,memberName:t})=>`Number enum members need to be initialized, e.g. \`${t} = 1\` in enum \`${e}\`.`,EnumStringMemberInconsistentlyInitialized:({enumName:e})=>`String enum members need to consistently either all use initializers, or use no initializers, in enum \`${e}\`.`,GetterMayNotHaveThisParam:"A getter cannot have a `this` parameter.",ImportReflectionHasImportType:"An `import module` declaration can not use `type` or `typeof` keyword.",ImportTypeShorthandOnlyInPureImport:"The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",InexactInsideExact:`Explicit inexact syntax cannot appear inside an explicit exact object type.`,InexactInsideNonObject:`Explicit inexact syntax cannot appear in class or interface definitions.`,InexactVariance:`Explicit inexact syntax cannot have variance.`,InvalidNonTypeImportInDeclareModule:"Imports within a `declare module` body must always be `import type` or `import typeof`.",MissingTypeParamDefault:`Type parameter declaration needs a default, since a preceding type parameter declaration has a default.`,NestedDeclareModule:"`declare module` cannot be used inside another `declare module`.",NestedFlowComment:`Cannot have a flow comment inside another flow comment.`,PatternIsOptional:Object.assign({message:`A binding pattern parameter cannot be optional in an implementation signature.`},{reasonCode:`OptionalBindingPattern`}),SetterMayNotHaveThisParam:"A setter cannot have a `this` parameter.",SpreadVariance:`Spread properties cannot have variance.`,ThisParamAnnotationRequired:"A type annotation is required for the `this` parameter.",ThisParamBannedInConstructor:"Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",ThisParamMayNotBeOptional:"The `this` parameter cannot be optional.",ThisParamMustBeFirst:"The `this` parameter must be the first function parameter.",ThisParamNoDefault:"The `this` parameter may not have a default value.",TypeBeforeInitializer:"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",TypeCastInPattern:`The type cast expression is expected to be wrapped with parenthesis.`,UnexpectedExplicitInexactInObject:`Explicit inexact syntax must appear at the end of an inexact object.`,UnexpectedReservedType:({reservedType:e})=>`Unexpected reserved type ${e}.`,UnexpectedReservedUnderscore:"`_` is only allowed as a type argument to call or new.",UnexpectedSpaceBetweenModuloChecks:"Spaces between `%` and `checks` are not allowed here.",UnexpectedSpreadType:`Spread operator cannot appear in class or interface definitions.`,UnexpectedSubtractionOperand:`Unexpected token, expected "number" or "bigint".`,UnexpectedTokenAfterTypeParameter:`Expected an arrow function after this type parameter declaration.`,UnexpectedTypeParameterBeforeAsyncArrowFunction:"Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",UnsupportedDeclareExportKind:({unsupportedExportKind:e,suggestion:t})=>`\`declare export ${e}\` is not supported. Use \`${t}\` instead.`,UnsupportedStatementInDeclareModule:`Only declares and type imports are allowed inside declare module.`,UnterminatedFlowComment:`Unterminated flow-comment.`}),h`jsx`({AttributeIsEmpty:`JSX attributes must only be assigned a non-empty expression.`,MissingClosingTagElement:({openingTagName:e})=>`Expected corresponding JSX closing tag for <${e}>.`,MissingClosingTagFragment:`Expected corresponding JSX closing tag for <>.`,UnexpectedSequenceExpression:`Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?`,UnexpectedToken:({unexpected:e,HTMLEntity:t})=>`Unexpected token \`${e}\`. Did you mean \`${t}\` or \`{'${e}'}\`?`,UnsupportedJsxValue:`JSX value should be either an expression or a quoted JSX text.`,UnterminatedJsxContent:`Unterminated JSX contents.`,UnwrappedAdjacentJSXElements:`Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?`});var P=class{constructor(e,t,n){this.type=``,this.start=t,this.end=0,this.loc=new r(n),e?.optionFlags&128&&(this.range=[t,0]),e!=null&&e.filename&&(this.loc.filename=e.filename)}},le=P.prototype;le.__clone=function(){let e=new P(void 0,this.start,this.loc.start),t=Object.keys(this);for(let n=0,r=t.length;n<r;n++){let r=t[n];r!==`leadingComments`&&r!==`trailingComments`&&r!==`innerComments`&&(e[r]=this[r])}return e},h`typescript`({AbstractMethodHasImplementation:({methodName:e})=>`Method '${e}' cannot have an implementation because it is marked abstract.`,AbstractPropertyHasInitializer:({propertyName:e})=>`Property '${e}' cannot have an initializer because it is marked abstract.`,AccessorCannotBeOptional:`An 'accessor' property cannot be declared optional.`,AccessorCannotDeclareThisParameter:`'get' and 'set' accessors cannot declare 'this' parameters.`,AccessorCannotHaveTypeParameters:`An accessor cannot have type parameters.`,ClassMethodHasDeclare:`Class methods cannot have the 'declare' modifier.`,ClassMethodHasReadonly:`Class methods cannot have the 'readonly' modifier.`,ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference:`A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.`,ConstructorHasTypeParameters:`Type parameters cannot appear on a constructor declaration.`,DeclareAccessor:({kind:e})=>`'declare' is not allowed in ${e}ters.`,DeclareClassFieldHasInitializer:`Initializers are not allowed in ambient contexts.`,DeclareFunctionHasImplementation:`An implementation cannot be declared in ambient contexts.`,DuplicateAccessibilityModifier:({modifier:e})=>`Accessibility modifier already seen: '${e}'.`,DuplicateModifier:({modifier:e})=>`Duplicate modifier: '${e}'.`,EmptyHeritageClauseType:({token:e})=>`'${e}' list cannot be empty.`,EmptyTypeArguments:`Type argument list cannot be empty.`,EmptyTypeParameters:`Type parameter list cannot be empty.`,ExpectedAmbientAfterExportDeclare:`'export declare' must be followed by an ambient declaration.`,ImportAliasHasImportType:`An import alias can not use 'import type'.`,ImportReflectionHasImportType:"An `import module` declaration can not use `type` modifier",IncompatibleModifiers:({modifiers:e})=>`'${e[0]}' modifier cannot be used with '${e[1]}' modifier.`,IndexSignatureHasAbstract:`Index signatures cannot have the 'abstract' modifier.`,IndexSignatureHasAccessibility:({modifier:e})=>`Index signatures cannot have an accessibility modifier ('${e}').`,IndexSignatureHasDeclare:`Index signatures cannot have the 'declare' modifier.`,IndexSignatureHasOverride:`'override' modifier cannot appear on an index signature.`,IndexSignatureHasStatic:`Index signatures cannot have the 'static' modifier.`,InitializerNotAllowedInAmbientContext:`Initializers are not allowed in ambient contexts.`,InvalidHeritageClauseType:({token:e})=>`'${e}' list can only include identifiers or qualified-names with optional type arguments.`,InvalidModifierOnAwaitUsingDeclaration:e=>`'${e}' modifier cannot appear on an await using declaration.`,InvalidModifierOnTypeMember:({modifier:e})=>`'${e}' modifier cannot appear on a type member.`,InvalidModifierOnTypeParameter:({modifier:e})=>`'${e}' modifier cannot appear on a type parameter.`,InvalidModifierOnTypeParameterPositions:({modifier:e})=>`'${e}' modifier can only appear on a type parameter of a class, interface or type alias.`,InvalidModifierOnUsingDeclaration:e=>`'${e}' modifier cannot appear on a using declaration.`,InvalidModifiersOrder:({orderedModifiers:e})=>`'${e[0]}' modifier must precede '${e[1]}' modifier.`,InvalidPropertyAccessAfterInstantiationExpression:`Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.`,InvalidTupleMemberLabel:`Tuple members must be labeled with a simple identifier.`,MissingInterfaceName:`'interface' declarations must be followed by an identifier.`,NonAbstractClassHasAbstractMethod:`Abstract methods can only appear within an abstract class.`,NonClassMethodPropertyHasAbstractModifier:`'abstract' modifier can only appear on a class, method, or property declaration.`,OptionalTypeBeforeRequired:`A required element cannot follow an optional element.`,OverrideNotInSubClass:`This member cannot have an 'override' modifier because its containing class does not extend another class.`,PatternIsOptional:`A binding pattern parameter cannot be optional in an implementation signature.`,PrivateElementHasAbstract:`Private elements cannot have the 'abstract' modifier.`,PrivateElementHasAccessibility:({modifier:e})=>`Private elements cannot have an accessibility modifier ('${e}').`,ReadonlyForMethodSignature:`'readonly' modifier can only appear on a property declaration or index signature.`,ReservedArrowTypeParam:"This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",ReservedTypeAssertion:"This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",SetAccessorCannotHaveOptionalParameter:`A 'set' accessor cannot have an optional parameter.`,SetAccessorCannotHaveRestParameter:`A 'set' accessor cannot have rest parameter.`,SetAccessorCannotHaveReturnType:`A 'set' accessor cannot have a return type annotation.`,SingleTypeParameterWithoutTrailingComma:({typeParameterName:e})=>`Single type parameter ${e} should have a trailing comma. Example usage: <${e},>.`,StaticBlockCannotHaveModifier:`Static class blocks cannot have any modifier.`,TupleOptionalAfterType:"A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",TypeAnnotationAfterAssign:"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",TypeImportCannotSpecifyDefaultAndNamed:`A type-only import can specify a default import or named bindings, but not both.`,TypeModifierIsUsedInTypeExports:`The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.`,TypeModifierIsUsedInTypeImports:`The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.`,UnexpectedParameterModifier:`A parameter property is only allowed in a constructor implementation.`,UnexpectedReadonly:`'readonly' type modifier is only permitted on array and tuple literal types.`,UnexpectedTypeAnnotation:`Did not expect a type annotation here.`,UnexpectedTypeCastInParameter:`Unexpected type cast in parameter position.`,UnsupportedImportTypeArgument:`Argument in a type import must be a string literal.`,UnsupportedParameterPropertyKind:`A parameter property may not be declared using a binding pattern.`,UnsupportedSignatureParameterKind:({type:e})=>`Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${e}.`,UsingDeclarationInAmbientContext:e=>`'${e}' declarations are not allowed in ambient contexts.`}),h`placeholders`({ClassNameIsRequired:`A class name is required.`,UnexpectedSpace:`Unexpected space in placeholder.`});function ue(e){let t={};for(let n of Object.keys(e))t[n]=se(e[n]);return t}ue(oe)}))();function ec(e){throw e}function U(e,t,n,r){let i=SyntaxError(String(e));return i.code=e,i.loc=t,i}var tc=Symbol(``),nc=Symbol(``),rc=Symbol(``),ic=Symbol(``),ac=Symbol(``),oc=Symbol(``),sc=Symbol(``),cc=Symbol(``),lc=Symbol(``),uc=Symbol(``),dc=Symbol(``),fc=Symbol(``),pc=Symbol(``),mc=Symbol(``),hc=Symbol(``),gc=Symbol(``),_c=Symbol(``),vc=Symbol(``),yc=Symbol(``),bc=Symbol(``),xc=Symbol(``),Sc=Symbol(``),Cc=Symbol(``),wc=Symbol(``),Tc=Symbol(``),Ec=Symbol(``),Dc=Symbol(``),Oc=Symbol(``),kc={[tc]:`Fragment`,[nc]:`Teleport`,[rc]:`Suspense`,[ic]:`KeepAlive`,[ac]:`BaseTransition`,[oc]:`openBlock`,[sc]:`createBlock`,[cc]:`createVNode`,[lc]:`createCommentVNode`,[uc]:`createTextVNode`,[dc]:`createStaticVNode`,[fc]:`resolveComponent`,[pc]:`resolveDynamicComponent`,[mc]:`resolveDirective`,[hc]:`withDirectives`,[gc]:`renderList`,[_c]:`renderSlot`,[vc]:`createSlots`,[yc]:`toDisplayString`,[bc]:`mergeProps`,[xc]:`toHandlers`,[Sc]:`camelize`,[Cc]:`capitalize`,[wc]:`setBlockTracking`,[Tc]:`pushScopeId`,[Ec]:`popScopeId`,[Dc]:`withScopeId`,[Oc]:`withCtx`};function Ac(e){Object.getOwnPropertySymbols(e).forEach(t=>{kc[t]=e[t]})}var jc={source:``,start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Mc(e,t=jc){return{type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}function Nc(e,t,n,r,i,a,o,s=!1,c=!1,l=jc){return e&&(s?(e.helper(oc),e.helper(sc)):e.helper(cc),o&&e.helper(hc)),{type:13,tag:t,props:n,children:r,patchFlag:i,dynamicProps:a,directives:o,isBlock:s,disableTracking:c,loc:l}}function Pc(e,t=jc){return{type:17,loc:t,elements:e}}function Fc(e,t=jc){return{type:15,loc:t,properties:e}}function W(e,t){return{type:16,loc:jc,key:N(e)?G(e,!0):e,value:t}}function G(e,t,n=jc,r=!1){return{type:4,loc:n,isConstant:r,content:e,isStatic:t}}function Ic(e,t=jc){return{type:8,loc:t,children:e}}function Lc(e,t=[],n=jc){return{type:14,loc:n,callee:e,arguments:t}}function Rc(e,t=void 0,n=!1,r=!1,i=jc){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:i}}function zc(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:jc}}function Bc(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:jc}}var Vc=e=>e.type===4&&e.isStatic,Hc=(e,t)=>e===t||e===be(t);function Uc(e){if(Hc(e,`Teleport`))return nc;if(Hc(e,`Suspense`))return rc;if(Hc(e,`KeepAlive`))return ic;if(Hc(e,`BaseTransition`))return ac}var Wc=/^\d|[^\$\w]/,Gc=e=>!Wc.test(e),Kc=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\[[^\]]+\])*$/,qc=e=>e?Kc.test(e.trim()):!1;function Jc(e,t,n){let r={source:e.source.substr(t,n),start:Yc(e.start,e.source,t),end:e.end};return n!=null&&(r.end=Yc(e.start,e.source,t+n)),r}function Yc(e,t,n=t.length){return Xc(O({},e),t,n)}function Xc(e,t,n=t.length){let r=0,i=-1;for(let e=0;e<n;e++)t.charCodeAt(e)===10&&(r++,i=e);return e.offset+=n,e.line+=r,e.column=i===-1?e.column+n:n-i,e}function Zc(e,t,n=!1){for(let r=0;r<e.props.length;r++){let i=e.props[r];if(i.type===7&&(n||i.exp)&&(N(t)?i.name===t:t.test(i.name)))return i}}function Qc(e,t,n=!1,r=!1){for(let i=0;i<e.props.length;i++){let a=e.props[i];if(a.type===6){if(n)continue;if(a.name===t&&(a.value||r))return a}else if(a.name===`bind`&&(a.exp||r)&&$c(a.arg,t))return a}}function $c(e,t){return!!(e&&Vc(e)&&e.content===t)}function el(e){return e.props.some(e=>e.type===7&&e.name===`bind`&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function tl(e){return e.type===5||e.type===2}function nl(e){return e.type===7&&e.name===`slot`}function rl(e){return e.type===1&&e.tagType===3}function il(e){return e.type===1&&e.tagType===2}function al(e,t,n){let r,i=e.type===13?e.props:e.arguments[2];if(i==null||N(i))r=Fc([t]);else if(i.type===14){let e=i.arguments[0];!N(e)&&e.type===15?e.properties.unshift(t):i.arguments.unshift(Fc([t])),r=i}else if(i.type===15){let e=!1;if(t.key.type===4){let n=t.key.content;e=i.properties.some(e=>e.key.type===4&&e.key.content===n)}e||i.properties.unshift(t),r=i}else r=Lc(n.helper(bc),[Fc([t]),i]);e.type===13?e.props=r:e.arguments[2]=r}function ol(e,t){return`_${t}_${e.replace(/[^\w]/g,`_`)}`}var sl=/&(gt|lt|amp|apos|quot);/g,cl={gt:`>`,lt:`<`,amp:`&`,apos:`'`,quot:`"`},ll={delimiters:[`{{`,`}}`],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:E,isPreTag:E,isCustomElement:E,decodeEntities:e=>e.replace(sl,(e,t)=>cl[t]),onError:ec,comments:!1};function ul(e,t={}){let n=dl(e,t),r=El(n);return Mc(fl(n,0,[]),Dl(n,r))}function dl(e,t){let n=O({},ll);for(let e in t)n[e]=t[e]||ll[e];return{options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1}}function fl(e,t,n){let r=Ol(n),i=r?r.ns:0,a=[];for(;!jl(e,t,n);){let o=e.source,s;if(t===0||t===1){if(!e.inVPre&&K(o,e.options.delimiters[0]))s=Cl(e,t);else if(t===0&&o[0]===`<`)if(o.length===1)J(e,5,1);else if(o[1]===`!`)K(o,`<!--`)?s=hl(e):K(o,`<!DOCTYPE`)?s=gl(e):K(o,`<![CDATA[`)?i===0?(J(e,1),s=gl(e)):s=ml(e,n):(J(e,11),s=gl(e));else if(o[1]===`/`)if(o.length===2)J(e,5,2);else if(o[2]===`>`){J(e,14,2),q(e,3);continue}else if(/[a-z]/i.test(o[2])){J(e,23),yl(e,1,r);continue}else J(e,12,2),s=gl(e);else /[a-z]/i.test(o[1])?s=_l(e,n):o[1]===`?`?(J(e,21,1),s=gl(e)):J(e,12,1)}if(s||=wl(e,t),A(s))for(let e=0;e<s.length;e++)pl(a,s[e]);else pl(a,s)}let o=!1;if(t!==2){if(!e.inPre)for(let t=0;t<a.length;t++){let n=a[t];if(n.type===2)if(/[^\t\r\n\f ]/.test(n.content))n.content=n.content.replace(/[\t\r\n\f ]+/g,` `);else{let e=a[t-1],r=a[t+1];!e||!r||e.type===3||r.type===3||e.type===1&&r.type===1&&/[\r\n]/.test(n.content)?(o=!0,a[t]=null):n.content=` `}else n.type===3&&!e.options.comments&&(o=!0,a[t]=null)}else if(r&&e.options.isPreTag(r.tag)){let e=a[0];e&&e.type===2&&(e.content=e.content.replace(/^\r?\n/,``))}}return o?a.filter(Boolean):a}function pl(e,t){if(t.type===2){let n=Ol(e);if(n&&n.type===2&&n.loc.end.offset===t.loc.start.offset){n.content+=t.content,n.loc.end=t.loc.end,n.loc.source+=t.loc.source;return}}e.push(t)}function ml(e,t){q(e,9);let n=fl(e,3,t);return e.source.length===0?J(e,6):q(e,3),n}function hl(e){let t=El(e),n,r=/--(\!)?>/.exec(e.source);if(!r)n=e.source.slice(4),q(e,e.source.length),J(e,7);else{r.index<=3&&J(e,0),r[1]&&J(e,10),n=e.source.slice(4,r.index);let t=e.source.slice(0,r.index),i=1,a=0;for(;(a=t.indexOf(`<!--`,i))!==-1;)q(e,a-i+1),a+4<t.length&&J(e,16),i=a+1;q(e,r.index+r[0].length-i+1)}return{type:3,content:n,loc:Dl(e,t)}}function gl(e){let t=El(e),n=e.source[1]===`?`?1:2,r,i=e.source.indexOf(`>`);return i===-1?(r=e.source.slice(n),q(e,e.source.length)):(r=e.source.slice(n,i),q(e,i+1)),{type:3,content:r,loc:Dl(e,t)}}function _l(e,t){let n=e.inPre,r=e.inVPre,i=Ol(t),a=yl(e,0,i),o=e.inPre&&!n,s=e.inVPre&&!r;if(a.isSelfClosing||e.options.isVoidTag(a.tag))return a;t.push(a);let c=fl(e,e.options.getTextMode(a,i),t);if(t.pop(),a.children=c,Ml(e.source,a.tag))yl(e,1,i);else if(J(e,24,0,a.loc.start),e.source.length===0&&a.tag.toLowerCase()===`script`){let t=c[0];t&&K(t.loc.source,`<!--`)&&J(e,8)}return a.loc=Dl(e,a.loc.start),o&&(e.inPre=!1),s&&(e.inVPre=!1),a}var vl=r(`if,else,else-if,for,slot`);function yl(e,t,n){let r=El(e),i=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),a=i[1],o=e.options.getNamespace(a,n);q(e,i[0].length),kl(e);let s=El(e),c=e.source,l=bl(e,t);e.options.isPreTag(a)&&(e.inPre=!0),!e.inVPre&&l.some(e=>e.type===7&&e.name===`pre`)&&(e.inVPre=!0,O(e,s),e.source=c,l=bl(e,t).filter(e=>e.name!==`v-pre`));let u=!1;e.source.length===0?J(e,9):(u=K(e.source,`/>`),t===1&&u&&J(e,4),q(e,u?2:1));let d=0,f=e.options;if(!e.inVPre&&!f.isCustomElement(a)){let e=l.some(e=>e.type===7&&e.name===`is`);f.isNativeTag&&!e?f.isNativeTag(a)||(d=1):(e||Uc(a)||f.isBuiltInComponent&&f.isBuiltInComponent(a)||/^[A-Z]/.test(a)||a===`component`)&&(d=1),a===`slot`?d=2:a===`template`&&l.some(e=>e.type===7&&vl(e.name))&&(d=3)}return{type:1,ns:o,tag:a,tagType:d,props:l,isSelfClosing:u,children:[],loc:Dl(e,r),codegenNode:void 0}}function bl(e,t){let n=[],r=new Set;for(;e.source.length>0&&!K(e.source,`>`)&&!K(e.source,`/>`);){if(K(e.source,`/`)){J(e,22),q(e,1),kl(e);continue}t===1&&J(e,3);let i=xl(e,r);t===0&&n.push(i),/^[^\t\r\n\f />]/.test(e.source)&&J(e,15),kl(e)}return n}function xl(e,t){let n=El(e),r=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];t.has(r)&&J(e,2),t.add(r),r[0]===`=`&&J(e,19);{let t=/["'<]/g,n;for(;n=t.exec(r);)J(e,17,n.index)}q(e,r.length);let i;/^[\t\r\n\f ]*=/.test(e.source)&&(kl(e),q(e,1),kl(e),i=Sl(e),i||J(e,13));let a=Dl(e,n);if(!e.inVPre&&/^(v-|:|@|#)/.test(r)){let t=/(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(r),o=t[1]||(K(r,`:`)?`bind`:K(r,`@`)?`on`:`slot`),s;if(t[2]){let i=o===`slot`,a=r.indexOf(t[2]),c=Dl(e,Al(e,n,a),Al(e,n,a+t[2].length+(i&&t[3]||``).length)),l=t[2],u=!0;l.startsWith(`[`)?(u=!1,l.endsWith(`]`)||J(e,26),l=l.substr(1,l.length-2)):i&&(l+=t[3]||``),s={type:4,content:l,isStatic:u,isConstant:u,loc:c}}if(i&&i.isQuoted){let e=i.loc;e.start.offset++,e.start.column++,e.end=Yc(e.start,i.content),e.source=e.source.slice(1,-1)}return{type:7,name:o,exp:i&&{type:4,content:i.content,isStatic:!1,isConstant:!1,loc:i.loc},arg:s,modifiers:t[3]?t[3].substr(1).split(`.`):[],loc:a}}return{type:6,name:r,value:i&&{type:2,content:i.content,loc:i.loc},loc:a}}function Sl(e){let t=El(e),n,r=e.source[0],i=r===`"`||r===`'`;if(i){q(e,1);let t=e.source.indexOf(r);t===-1?n=Tl(e,e.source.length,4):(n=Tl(e,t,4),q(e,1))}else{let t=/^[^\t\r\n\f >]+/.exec(e.source);if(!t)return;let r=/["'<=`]/g,i;for(;i=r.exec(t[0]);)J(e,18,i.index);n=Tl(e,t[0].length,4)}return{content:n,isQuoted:i,loc:Dl(e,t)}}function Cl(e,t){let[n,r]=e.options.delimiters,i=e.source.indexOf(r,n.length);if(i===-1){J(e,25);return}let a=El(e);q(e,n.length);let o=El(e),s=El(e),c=i-n.length,l=e.source.slice(0,c),u=Tl(e,c,t),d=u.trim(),f=u.indexOf(d);return f>0&&Xc(o,l,f),Xc(s,l,c-(u.length-d.length-f)),q(e,r.length),{type:5,content:{type:4,isStatic:!1,isConstant:!1,content:d,loc:Dl(e,o,s)},loc:Dl(e,a)}}function wl(e,t){let n=[`<`,e.options.delimiters[0]];t===3&&n.push(`]]>`);let r=e.source.length;for(let t=0;t<n.length;t++){let i=e.source.indexOf(n[t],1);i!==-1&&r>i&&(r=i)}let i=El(e);return{type:2,content:Tl(e,r,t),loc:Dl(e,i)}}function Tl(e,t,n){let r=e.source.slice(0,t);return q(e,t),n===2||n===3||r.indexOf(`&`)===-1?r:e.options.decodeEntities(r,n===4)}function El(e){let{column:t,line:n,offset:r}=e;return{column:t,line:n,offset:r}}function Dl(e,t,n){return n||=El(e),{start:t,end:n,source:e.originalSource.slice(t.offset,n.offset)}}function Ol(e){return e[e.length-1]}function K(e,t){return e.startsWith(t)}function q(e,t){let{source:n}=e;Xc(e,n,t),e.source=n.slice(t)}function kl(e){let t=/^[\t\r\n\f ]+/.exec(e.source);t&&q(e,t[0].length)}function Al(e,t,n){return Yc(t,e.originalSource.slice(t.offset,n),n)}function J(e,t,n,r=El(e)){n&&(r.offset+=n,r.column+=n),e.options.onError(U(t,{start:r,end:r,source:``}))}function jl(e,t,n){let r=e.source;switch(t){case 0:if(K(r,`</`)){for(let e=n.length-1;e>=0;--e)if(Ml(r,n[e].tag))return!0}break;case 1:case 2:{let e=Ol(n);if(e&&Ml(r,e.tag))return!0;break}case 3:if(K(r,`]]>`))return!0;break}return!r}function Ml(e,t){return K(e,`</`)&&e.substr(2,t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||`>`)}function Nl(e,t){Fl(e,t,new Map,Pl(e,e.children[0]))}function Pl(e,t){let{children:n}=e;return n.length===1&&t.type===1&&!il(t)}function Fl(e,t,n,r=!1){let i=!1,a=!1,{children:o}=e;for(let e=0;e<o.length;e++){let s=o[e];if(s.type===1&&s.tagType===0){let e;if(!r&&(e=Il(s,n))>0){e===2&&(a=!0),s.codegenNode.patchFlag=`-1`,s.codegenNode=t.hoist(s.codegenNode),i=!0;continue}else{let e=s.codegenNode;if(e.type===13){let n=zl(e);if((!n||n===512||n===1)&&!Ll(s)){let n=Rl(s);n&&(e.props=t.hoist(n))}}}}else if(s.type===12){let e=Il(s.content,n);e>0&&(e===2&&(a=!0),s.codegenNode=t.hoist(s.codegenNode),i=!0)}if(s.type===1)Fl(s,t,n);else if(s.type===11)Fl(s,t,n,s.children.length===1);else if(s.type===9)for(let e=0;e<s.branches.length;e++)Fl(s.branches[e],t,n,s.branches[e].children.length===1)}!a&&i&&t.transformHoist&&t.transformHoist(o,t,e)}function Il(e,t=new Map){switch(e.type){case 1:if(e.tagType!==0)return 0;let n=t.get(e);if(n!==void 0)return n;let r=e.codegenNode;if(r.type!==13)return 0;if(!zl(r)&&!Ll(e)){let n=1;for(let r=0;r<e.children.length;r++){let i=Il(e.children[r],t);if(i===0)return t.set(e,0),0;i===2&&(n=2)}if(n!==2)for(let t=0;t<e.props.length;t++){let r=e.props[t];r.type===7&&r.name===`bind`&&r.exp&&(r.exp.type===8||r.exp.isRuntimeConstant)&&(n=2)}return r.isBlock&&=!1,t.set(e,n),n}else return t.set(e,0),0;case 2:case 3:return 1;case 9:case 11:case 10:return 0;case 5:case 12:return Il(e.content,t);case 4:return e.isConstant?e.isRuntimeConstant?2:1:0;case 8:let i=1;for(let n=0;n<e.children.length;n++){let r=e.children[n];if(N(r)||ce(r))continue;let a=Il(r,t);if(a===0)return 0;a===2&&(i=2)}return i;default:return 0}}function Ll(e){let t=Rl(e);if(t&&t.type===15){let{properties:e}=t;for(let t=0;t<e.length;t++){let{key:n,value:r}=e[t];if(n.type!==4||!n.isStatic||r.type!==4||!r.isStatic&&!r.isConstant)return!0}}return!1}function Rl(e){let t=e.codegenNode;if(t.type===13)return t.props}function zl(e){let t=e.patchFlag;return t?parseInt(t,10):void 0}function Bl(e,{prefixIdentifiers:t=!1,hoistStatic:n=!1,cacheHandlers:r=!1,nodeTransforms:i=[],directiveTransforms:a={},transformHoist:o=null,isBuiltInComponent:s=T,isCustomElement:c=T,expressionPlugins:l=[],scopeId:u=null,ssr:d=!1,ssrCssVars:f=``,bindingMetadata:p={},onError:m=ec}){let h={prefixIdentifiers:t,hoistStatic:n,cacheHandlers:r,nodeTransforms:i,directiveTransforms:a,transformHoist:o,isBuiltInComponent:s,isCustomElement:c,expressionPlugins:l,scopeId:u,ssr:d,ssrCssVars:f,bindingMetadata:p,onError:m,root:e,helpers:new Set,components:new Set,directives:new Set,hoists:[],imports:new Set,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,helper(e){return h.helpers.add(e),e},helperString(e){return`_${kc[h.helper(e)]}`},replaceNode(e){h.parent.children[h.childIndex]=h.currentNode=e},removeNode(e){let t=h.parent.children,n=e?t.indexOf(e):h.currentNode?h.childIndex:-1;!e||e===h.currentNode?(h.currentNode=null,h.onNodeRemoved()):h.childIndex>n&&(h.childIndex--,h.onNodeRemoved()),h.parent.children.splice(n,1)},onNodeRemoved:()=>{},addIdentifiers(e){},removeIdentifiers(e){},hoist(e){h.hoists.push(e);let t=G(`_hoisted_${h.hoists.length}`,!1,e.loc,!0);return t.hoisted=e,t},cache(e,t=!1){return Bc(++h.cached,e,t)}};return h}function Vl(e,t){let n=Bl(e,t);Wl(e,n),t.hoistStatic&&Nl(e,n),t.ssr||Hl(e,n),e.helpers=[...n.helpers],e.components=[...n.components],e.directives=[...n.directives],e.imports=[...n.imports],e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached}function Hl(e,t){let{helper:n}=t,{children:r}=e;if(r.length===1){let t=r[0];if(Pl(e,t)&&t.codegenNode){let r=t.codegenNode;r.type===13&&(r.isBlock=!0,n(oc),n(sc)),e.codegenNode=r}else e.codegenNode=t}else r.length>1&&(e.codegenNode=Nc(t,n(tc),void 0,e.children,`64 /* ${i[64]} */`,void 0,void 0,!0))}function Ul(e,t){let n=0,r=()=>{n--};for(;n<e.children.length;n++){let i=e.children[n];N(i)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=r,Wl(i,t))}}function Wl(e,t){t.currentNode=e;let{nodeTransforms:n}=t,r=[];for(let i=0;i<n.length;i++){let a=n[i](e,t);if(a&&(A(a)?r.push(...a):r.push(a)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(lc);break;case 5:t.ssr||t.helper(yc);break;case 9:for(let n=0;n<e.branches.length;n++)Wl(e.branches[n],t);break;case 10:case 11:case 1:case 0:Ul(e,t);break}t.currentNode=e;let i=r.length;for(;i--;)r[i]()}function Gl(e,t){let n=N(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(e.type===1){let{props:i}=e;if(e.tagType===3&&i.some(nl))return;let a=[];for(let o=0;o<i.length;o++){let s=i[o];if(s.type===7&&n(s.name)){i.splice(o,1),o--;let n=t(e,s,r);n&&a.push(n)}}return a}}}var Kl=`/*#__PURE__*/`;function ql(e,{mode:t=`function`,prefixIdentifiers:n=t===`module`,sourceMap:r=!1,filename:i=`template.vue.html`,scopeId:a=null,optimizeImports:o=!1,runtimeGlobalName:s=`Vue`,runtimeModuleName:c=`vue`,ssr:l=!1}){let u={mode:t,prefixIdentifiers:n,sourceMap:r,filename:i,scopeId:a,optimizeImports:o,runtimeGlobalName:s,runtimeModuleName:c,ssr:l,source:e.loc.source,code:``,column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(e){return`_${kc[e]}`},push(e,t){u.code+=e},indent(){d(++u.indentLevel)},deindent(e=!1){e?--u.indentLevel:d(--u.indentLevel)},newline(){d(u.indentLevel)}};function d(e){u.push(`
`+`  `.repeat(e))}return u}function Jl(e,t={}){let n=ql(e,t);t.onContextCreated&&t.onContextCreated(n);let{mode:r,push:i,prefixIdentifiers:a,indent:o,deindent:s,newline:c,scopeId:l,ssr:u}=n,d=e.helpers.length>0,f=!a&&r!==`module`;Yl(e,n);let p=t.bindingMetadata?`, $props, $setup, $data, $options`:``;if(i(u?`function ssrRender(_ctx, _push, _parent, _attrs${p}) {`:`function render(_ctx, _cache${p}) {`),o(),f&&(i(`with (_ctx) {`),o(),d&&(i(`const { ${e.helpers.map(e=>`${kc[e]}: _${kc[e]}`).join(`, `)} } = _Vue`),i(`
`),c())),e.components.length&&(Xl(e.components,`component`,n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(Xl(e.directives,`directive`,n),e.temps>0&&c()),e.temps>0){i(`let `);for(let t=0;t<e.temps;t++)i(`${t>0?`, `:``}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(i(`
`),c()),u||i(`return `),e.codegenNode?Y(e.codegenNode,n):i(`null`),f&&(s(),i(`}`)),s(),i(`}`),{ast:e,code:n.code,map:n.map?n.map.toJSON():void 0}}function Yl(e,t){let{ssr:n,prefixIdentifiers:r,push:i,newline:a,runtimeModuleName:o,runtimeGlobalName:s}=t,c=s;e.helpers.length>0&&(i(`const _Vue = ${c}\n`),e.hoists.length&&i(`const { ${[cc,lc,uc,dc].filter(t=>e.helpers.includes(t)).map(e=>`${kc[e]}: _${kc[e]}`).join(`, `)} } = _Vue\n`)),Zl(e.hoists,t),a(),i(`return `)}function Xl(e,t,{helper:n,push:r,newline:i}){let a=n(t===`component`?fc:mc);for(let n=0;n<e.length;n++){let o=e[n];r(`const ${ol(o,t)} = ${a}(${JSON.stringify(o)})`),n<e.length-1&&i()}}function Zl(e,t){if(!e.length)return;t.pure=!0;let{push:n,newline:r,helper:i,scopeId:a,mode:o}=t;r(),e.forEach((e,i)=>{e&&(n(`const _hoisted_${i+1} = `),Y(e,t),r())}),t.pure=!1}function Ql(e,t){let n=e.length>3||!1;t.push(`[`),n&&t.indent(),$l(e,t,n),n&&t.deindent(),t.push(`]`)}function $l(e,t,n=!1,r=!0){let{push:i,newline:a}=t;for(let o=0;o<e.length;o++){let s=e[o];N(s)?i(s):A(s)?Ql(s,t):Y(s,t),o<e.length-1&&(n?(r&&i(`,`),a()):r&&i(`, `))}}function Y(e,t){if(N(e)){t.push(e);return}if(ce(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:Y(e.codegenNode,t);break;case 2:eu(e,t);break;case 4:tu(e,t);break;case 5:nu(e,t);break;case 12:Y(e.codegenNode,t);break;case 8:ru(e,t);break;case 3:break;case 13:au(e,t);break;case 14:su(e,t);break;case 15:cu(e,t);break;case 17:lu(e,t);break;case 18:uu(e,t);break;case 19:du(e,t);break;case 20:fu(e,t);break;case 21:break;case 22:break;case 23:break;case 24:break;case 25:break;case 26:break;case 10:break;default:}}function eu(e,t){t.push(JSON.stringify(e.content),e)}function tu(e,t){let{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,e)}function nu(e,t){let{push:n,helper:r,pure:i}=t;i&&n(Kl),n(`${r(yc)}(`),Y(e.content,t),n(`)`)}function ru(e,t){for(let n=0;n<e.children.length;n++){let r=e.children[n];N(r)?t.push(r):Y(r,t)}}function iu(e,t){let{push:n}=t;e.type===8?(n(`[`),ru(e,t),n(`]`)):e.isStatic?n(Gc(e.content)?e.content:JSON.stringify(e.content),e):n(`[${e.content}]`,e)}function au(e,t){let{push:n,helper:r,pure:i}=t,{tag:a,props:o,children:s,patchFlag:c,dynamicProps:l,directives:u,isBlock:d,disableTracking:f}=e;u&&n(r(hc)+`(`),d&&n(`(${r(oc)}(${f?`true`:``}), `),i&&n(Kl),n(r(d?sc:cc)+`(`,e),$l(ou([a,o,s,c,l]),t),n(`)`),d&&n(`)`),u&&(n(`, `),Y(u,t),n(`)`))}function ou(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(e=>e||`null`)}function su(e,t){let{push:n,helper:r,pure:i}=t,a=N(e.callee)?e.callee:r(e.callee);i&&n(Kl),n(a+`(`,e),$l(e.arguments,t),n(`)`)}function cu(e,t){let{push:n,indent:r,deindent:i,newline:a}=t,{properties:o}=e;if(!o.length){n(`{}`,e);return}let s=o.length>1||!1;n(s?`{`:`{ `),s&&r();for(let e=0;e<o.length;e++){let{key:r,value:i}=o[e];iu(r,t),n(`: `),Y(i,t),e<o.length-1&&(n(`,`),a())}s&&i(),n(s?`}`:` }`)}function lu(e,t){Ql(e.elements,t)}function uu(e,t){let{push:n,indent:r,deindent:i,scopeId:a,mode:o}=t,{params:s,returns:c,body:l,newline:u,isSlot:d}=e;d&&n(`_${kc[Oc]}(`),n(`(`,e),A(s)?$l(s,t):s&&Y(s,t),n(`) => `),(u||l)&&(n(`{`),r()),c?(u&&n(`return `),A(c)?Ql(c,t):Y(c,t)):l&&Y(l,t),(u||l)&&(i(),n(`}`)),d&&n(`)`)}function du(e,t){let{test:n,consequent:r,alternate:i,newline:a}=e,{push:o,indent:s,deindent:c,newline:l}=t;if(n.type===4){let e=!Gc(n.content);e&&o(`(`),tu(n,t),e&&o(`)`)}else o(`(`),Y(n,t),o(`)`);a&&s(),t.indentLevel++,a||o(` `),o(`? `),Y(r,t),t.indentLevel--,a&&l(),a||o(` `),o(`: `);let u=i.type===19;u||t.indentLevel++,Y(i,t),u||t.indentLevel--,a&&c(!0)}function fu(e,t){let{push:n,helper:r,indent:i,deindent:a,newline:o}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(i(),n(`${r(wc)}(-1),`),o()),n(`_cache[${e.index}] = `),Y(e.value,t),e.isVNode&&(n(`,`),o(),n(`${r(wc)}(1),`),o(),n(`_cache[${e.index}]`),a()),n(`)`)}RegExp(`\\b`+`do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void`.split(`,`).join(`\\b|\\b`)+`\\b`);var pu=Gl(/^(if|else|else-if)$/,(e,t,n)=>mu(e,t,n,(e,t,r)=>{let i=n.parent.children,a=i.indexOf(e),o=0;for(;a-->=0;){let e=i[a];e&&e.type===9&&(o+=e.branches.length)}return()=>{if(r)e.codegenNode=gu(t,o,n);else{let r=e.codegenNode;for(;r.alternate.type===19;)r=r.alternate;r.alternate=gu(t,o+e.branches.length-1,n)}}}));function mu(e,t,n,r){if(t.name!==`else`&&(!t.exp||!t.exp.content.trim())){let r=t.exp?t.exp.loc:e.loc;n.onError(U(27,t.loc)),t.exp=G(`true`,!1,r)}if(t.name===`if`){let i=hu(e,t),a={type:9,loc:e.loc,branches:[i]};if(n.replaceNode(a),r)return r(a,i,!0)}else{let i=n.parent.children,a=i.indexOf(e);for(;a-->=-1;){let o=i[a];if(o&&o.type===9){n.removeNode();let i=hu(e,t);o.branches.push(i);let a=r&&r(o,i,!1);Wl(i,n),a&&a(),n.currentNode=null}else n.onError(U(29,e.loc));break}}}function hu(e,t){return{type:10,loc:e.loc,condition:t.name===`else`?void 0:t.exp,children:e.tagType===3&&!Zc(e,`for`)?e.children:[e],userKey:Qc(e,`key`)}}function gu(e,t,n){return e.condition?zc(e.condition,_u(e,t,n),Lc(n.helper(lc),[`""`,`true`])):_u(e,t,n)}function _u(e,t,n){let{helper:r}=n,a=W(`key`,G(`${t}`,!1,jc,!0)),{children:o}=e,s=o[0];if(o.length!==1||s.type!==1)if(o.length===1&&s.type===11){let e=s.codegenNode;return al(e,a,n),e}else return Nc(n,r(tc),Fc([a]),o,`64 /* ${i[64]} */`,void 0,void 0,!0,!1,e.loc);else{let e=s.codegenNode;return e.type===13&&(e.isBlock=!0,r(oc),r(sc)),al(e,a,n),e}}var vu=Gl(`for`,(e,t,n)=>{let{helper:r}=n;return yu(e,t,n,t=>{let a=Lc(r(gc),[t.source]),o=Qc(e,`key`),s=o?W(`key`,o.type===6?G(o.value.content,!0):o.exp):null,c=t.source.type===4&&t.source.isConstant,l=c?64:o?128:256;return t.codegenNode=Nc(n,r(tc),void 0,a,`${l} /* ${i[l]} */`,void 0,void 0,!0,!c,e.loc),()=>{let o,l=rl(e),{children:u}=t,d=u.length!==1||u[0].type!==1,f=il(e)?e:l&&e.children.length===1&&il(e.children[0])?e.children[0]:null;f?(o=f.codegenNode,l&&s&&al(o,s,n)):d?o=Nc(n,r(tc),s?Fc([s]):void 0,e.children,`64 /* ${i[64]} */`,void 0,void 0,!0):(o=u[0].codegenNode,l&&s&&al(o,s,n),o.isBlock=!c,o.isBlock&&(r(oc),r(sc))),a.arguments.push(Rc(Tu(t.parseResult),o,!0))}})});function yu(e,t,n,r){if(!t.exp){n.onError(U(30,t.loc));return}let i=Cu(t.exp,n);if(!i){n.onError(U(31,t.loc));return}let{addIdentifiers:a,removeIdentifiers:o,scopes:s}=n,{source:c,value:l,key:u,index:d}=i,f={type:11,loc:t.loc,source:c,valueAlias:l,keyAlias:u,objectIndexAlias:d,parseResult:i,children:rl(e)?e.children:[e]};n.replaceNode(f),s.vFor++;let p=r&&r(f);return()=>{s.vFor--,p&&p()}}var bu=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,xu=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Su=/^\(|\)$/g;function Cu(e,t){let n=e.loc,r=e.content,i=r.match(bu);if(!i)return;let[,a,o]=i,s={source:wu(n,o.trim(),r.indexOf(o,a.length)),value:void 0,key:void 0,index:void 0},c=a.trim().replace(Su,``).trim(),l=a.indexOf(c),u=c.match(xu);if(u){c=c.replace(xu,``).trim();let e=u[1].trim(),t;if(e&&(t=r.indexOf(e,l+c.length),s.key=wu(n,e,t)),u[2]){let i=u[2].trim();i&&(s.index=wu(n,i,r.indexOf(i,s.key?t+e.length:l+c.length)))}}return c&&(s.value=wu(n,c,l)),s}function wu(e,t,n){return G(t,!1,Jc(e,n,t.length))}function Tu({value:e,key:t,index:n}){let r=[];return e&&r.push(e),t&&(e||r.push(G(`_`,!1)),r.push(t)),n&&(t||(e||r.push(G(`_`,!1)),r.push(G(`__`,!1))),r.push(n)),r}var Eu=G(`undefined`,!1),Du=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){let n=Zc(e,`slot`);if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},Ou=(e,t,n)=>Rc(e,t,!1,!0,t.length?t[0].loc:n);function ku(e,t,n=Ou){t.helper(Oc);let{children:r,loc:i}=e,a=[],o=[],s=(e,t)=>W(`default`,n(e,t,i)),c=t.scopes.vSlot>0||t.scopes.vFor>0,l=Zc(e,`slot`,!0);if(l){let{arg:e,exp:t}=l;e&&!Vc(e)&&(c=!0),a.push(W(e||G(`default`,!0),n(t,r,i)))}let u=!1,d=!1,f=[],p=new Set;for(let e=0;e<r.length;e++){let i=r[e],s;if(!rl(i)||!(s=Zc(i,`slot`,!0))){i.type!==3&&f.push(i);continue}if(l){t.onError(U(36,s.loc));break}u=!0;let{children:m,loc:h}=i,{arg:g=G(`default`,!0),exp:_,loc:v}=s,y;Vc(g)?y=g?g.content:`default`:c=!0;let b=n(_,m,h),x,S,C;if(x=Zc(i,`if`))c=!0,o.push(zc(x.exp,Au(g,b),Eu));else if(S=Zc(i,/^else(-if)?$/,!0)){let n=e,i;for(;n--&&(i=r[n],i.type===3););if(i&&rl(i)&&Zc(i,`if`)){r.splice(e,1),e--;let t=o[o.length-1];for(;t.alternate.type===19;)t=t.alternate;t.alternate=S.exp?zc(S.exp,Au(g,b),Eu):Au(g,b)}else t.onError(U(29,S.loc))}else if(C=Zc(i,`for`)){c=!0;let e=C.parseResult||Cu(C.exp,t);e?o.push(Lc(t.helper(gc),[e.source,Rc(Tu(e),Au(g,b),!0)])):t.onError(U(31,C.loc))}else{if(y){if(p.has(y)){t.onError(U(37,v));continue}p.add(y),y===`default`&&(d=!0)}a.push(W(g,b))}}l||(u?f.length&&(d?t.onError(U(38,f[0].loc)):a.push(s(void 0,f))):a.push(s(void 0,r)));let m=c?2:ju(e.children)?3:1,h=Fc(a.concat(W(`_`,G(``+m,!1))),i);return o.length&&(h=Lc(t.helper(vc),[h,Pc(o)])),{slots:h,hasDynamicSlots:c}}function Au(e,t){return Fc([W(`name`,e),W(`fn`,t)])}function ju(e){for(let t=0;t<e.length;t++){let n=e[t];if(n.type===1&&(n.tagType===2||n.tagType===0&&ju(n.children)))return!0}return!1}var Mu=new WeakMap,Nu=(e,t)=>{if(e.type===1&&(e.tagType===0||e.tagType===1))return function(){let{tag:n,props:r}=e,i=e.tagType===1,a=i?Pu(e,t):`"${n}"`,o=P(a)&&a.callee===pc,s,c,l,u=0,d,f,p,m=o||a===nc||a===rc||!i&&(n===`svg`||n===`foreignObject`||Qc(e,`key`,!0));if(r.length>0){let n=Fu(e,t);s=n.props,u=n.patchFlag,f=n.dynamicPropNames;let r=n.directives;p=r&&r.length?Pc(r.map(e=>Ru(e,t))):void 0}if(e.children.length>0)if(a===ic&&(m=!0,u|=1024),i&&a!==nc&&a!==ic){let{slots:n,hasDynamicSlots:r}=ku(e,t);c=n,r&&(u|=1024)}else if(e.children.length===1&&a!==nc){let t=e.children[0],n=t.type,r=n===5||n===8;r&&!Il(t)&&(u|=1),c=r||n===2?t:e.children}else c=e.children;u!==0&&(l=String(u),f&&f.length&&(d=zu(f))),e.codegenNode=Nc(t,a,s,c,l,d,p,!!m,!1,e.loc)}};function Pu(e,t,n=!1){let{tag:r}=e,i=e.tag===`component`?Qc(e,`is`):Zc(e,`is`);if(i){let e=i.type===6?i.value&&G(i.value.content,!0):i.exp;if(e)return Lc(t.helper(pc),[e])}let a=Uc(r)||t.isBuiltInComponent(r);return a?(n||t.helper(a),a):t.bindingMetadata[r]===`setup`?`$setup[${JSON.stringify(r)}]`:(t.helper(fc),t.components.add(r),ol(r,`component`))}function Fu(e,t,n=e.props,r=!1){let{tag:i,loc:a}=e,o=e.tagType===1,s=[],c=[],l=[],u=0,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,_=[],v=({key:e,value:t})=>{if(Vc(e)){let n=e.content,r=D(n);if(!o&&r&&n.toLowerCase()!==`onclick`&&n!==`onUpdate:modelValue`&&!he(n)&&(m=!0),r&&he(n)&&(g=!0),t.type===20||(t.type===4||t.type===8)&&Il(t)>0)return;n===`ref`?d=!0:n===`class`&&!o?f=!0:n===`style`&&!o?p=!0:n!==`key`&&!_.includes(n)&&_.push(n)}else h=!0};for(let u=0;u<n.length;u++){let f=n[u];if(f.type===6){let{loc:e,name:t,value:n}=f;if(t===`ref`&&(d=!0),t===`is`&&i===`component`)continue;s.push(W(G(t,!0,Jc(e,0,t.length)),G(n?n.content:``,!0,n?n.loc:e)))}else{let{name:n,arg:u,exp:d,loc:p}=f,m=n===`bind`,g=n===`on`;if(n===`slot`){o||t.onError(U(39,p));continue}if(n===`once`||n===`is`||m&&i===`component`&&$c(u,`is`)||g&&r)continue;if(!u&&(m||g)){h=!0,d?(s.length&&(c.push(Fc(Iu(s),a)),s=[]),m?c.push(d):c.push({type:14,loc:p,callee:t.helper(xc),arguments:[d]})):t.onError(U(m?33:34,p));continue}let _=t.directiveTransforms[n];if(_){let{props:n,needRuntime:i}=_(f,e,t);!r&&n.forEach(v),s.push(...n),i&&(l.push(f),ce(i)&&Mu.set(f,i))}else l.push(f)}}let y;return c.length?(s.length&&c.push(Fc(Iu(s),a)),y=c.length>1?Lc(t.helper(bc),c,a):c[0]):s.length&&(y=Fc(Iu(s),a)),h?u|=16:(f&&(u|=2),p&&(u|=4),_.length&&(u|=8),m&&(u|=32)),(u===0||u===32)&&(d||g||l.length>0)&&(u|=512),{props:y,directives:l,patchFlag:u,dynamicPropNames:_}}function Iu(e){let t=new Map,n=[];for(let r=0;r<e.length;r++){let i=e[r];if(i.key.type===8||!i.key.isStatic){n.push(i);continue}let a=i.key.content,o=t.get(a);o?(a===`style`||a===`class`||a.startsWith(`on`))&&Lu(o,i):(t.set(a,i),n.push(i))}return n}function Lu(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=Pc([e.value,t.value],e.loc)}function Ru(e,t){let n=[],r=Mu.get(e);r?n.push(t.helperString(r)):(t.helper(mc),t.directives.add(e.name),n.push(ol(e.name,`directive`)));let{loc:i}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push(`void 0`),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push(`void 0`),n.push(`void 0`));let t=G(`true`,!1,i);n.push(Fc(e.modifiers.map(e=>W(e,t)),i))}return Pc(n,e.loc)}function zu(e){let t=`[`;for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=`, `);return t+`]`}var Bu=(e,t)=>{if(il(e)){let{children:n,loc:r}=e,{slotName:i,slotProps:a}=Vu(e,t),o=[t.prefixIdentifiers?`_ctx.$slots`:`$slots`,i];a&&o.push(a),n.length&&(a||o.push(`{}`),o.push(Rc([],n,!1,!1,r))),e.codegenNode=Lc(t.helper(_c),o,r)}};function Vu(e,t){let n=`"default"`,r,i=Qc(e,`name`);i&&(i.type===6&&i.value?n=JSON.stringify(i.value.content):i.type===7&&i.exp&&(n=i.exp));let a=i?e.props.filter(e=>e!==i):e.props;if(a.length>0){let{props:n,directives:i}=Fu(e,t,a);r=n,i.length&&t.onError(U(35,i[0].loc))}return{slotName:n,slotProps:r}}var Hu=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/,Uu=(e,t,n,r)=>{let{loc:i,modifiers:a,arg:o}=e;!e.exp&&!a.length&&n.onError(U(34,i));let s;if(o.type===4)if(o.isStatic){let e=o.content;s=G(`on${e.startsWith(`vnode`)?xe(ve(e)):xe(e)}`,!0,o.loc)}else s=Ic([`"on" + ${n.helperString(Cc)}(`,o,`)`]);else s=o,s.children.unshift(`"on" + ${n.helperString(Cc)}(`),s.children.push(`)`);let c=e.exp;c&&!c.content.trim()&&(c=void 0);let l=n.cacheHandlers&&!c;if(c){let e=qc(c.content),t=!(e||Hu.test(c.content)),n=c.content.includes(`;`);(t||l&&e)&&(c=Ic([`${t?`$event`:`(...args)`} => ${n?`{`:`(`}`,c,n?`}`:`)`]))}let u={props:[W(s,c||G(`() => {}`,!1,i))]};return r&&(u=r(u)),l&&(u.props[0].value=n.cache(u.props[0].value)),u},Wu=(e,t,n)=>{let{exp:r,modifiers:i,loc:a}=e,o=e.arg;return i.includes(`camel`)&&(o.type===4?o.isStatic?o.content=ve(o.content):o.content=`${n.helperString(Sc)}(${o.content})`:(o.children.unshift(`${n.helperString(Sc)}(`),o.children.push(`)`))),!r||r.type===4&&!r.content.trim()?(n.onError(U(33,a)),{props:[W(o,G(``,!0,a))]}):{props:[W(o,r)]}},Gu=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{let n=e.children,r,a=!1;for(let e=0;e<n.length;e++){let t=n[e];if(tl(t)){a=!0;for(let i=e+1;i<n.length;i++){let a=n[i];if(tl(a))r||=n[e]={type:8,loc:t.loc,children:[t]},r.children.push(` + `,a),n.splice(i,1),i--;else{r=void 0;break}}}}if(!(!a||n.length===1&&(e.type===0||e.type===1&&e.tagType===0)))for(let e=0;e<n.length;e++){let r=n[e];if(tl(r)||r.type===8){let a=[];(r.type!==2||r.content!==` `)&&a.push(r),!t.ssr&&r.type!==2&&a.push(`1 /* ${i[1]} */`),n[e]={type:12,content:r,loc:r.loc,codegenNode:Lc(t.helper(uc),a)}}}}},Ku=new WeakSet,qu=(e,t)=>{if(e.type===1&&Zc(e,`once`,!0))return Ku.has(e)?void 0:(Ku.add(e),t.helper(wc),()=>{let e=t.currentNode;e.codegenNode&&=t.cache(e.codegenNode,!0)})},Ju=(e,t,n)=>{let{exp:r,arg:i}=e;if(!r)return n.onError(U(40,e.loc)),Yu();if(!qc(r.type===4?r.content:r.loc.source))return n.onError(U(41,r.loc)),Yu();let a=i||G(`modelValue`,!0),o=i?Vc(i)?`onUpdate:${i.content}`:Ic([`"onUpdate:" + `,i]):`onUpdate:modelValue`,s=[W(a,e.exp),W(o,Ic([`$event => (`,r,` = $event)`]))];if(e.modifiers.length&&t.tagType===1){let t=e.modifiers.map(e=>(Gc(e)?e:JSON.stringify(e))+`: true`).join(`, `),n=i?Vc(i)?`${i.content}Modifiers`:Ic([i,` + "Modifiers"`]):`modelModifiers`;s.push(W(n,G(`{ ${t} }`,!1,e.loc,!0)))}return Yu(s)};function Yu(e=[]){return{props:e}}function Xu(e){return[[qu,pu,vu,...[],Bu,Nu,Du,Gu],{on:Uu,bind:Wu,model:Ju}]}function Zu(e,t={}){let n=t.onError||ec,r=t.mode===`module`;t.prefixIdentifiers===!0?n(U(45)):r&&n(U(46)),t.cacheHandlers&&n(U(47)),t.scopeId&&!r&&n(U(48));let i=N(e)?ul(e,t):e,[a,o]=Xu();return Vl(i,O({},t,{prefixIdentifiers:!1,nodeTransforms:[...a,...t.nodeTransforms||[]],directiveTransforms:O({},o,t.directiveTransforms||{})})),Jl(i,O({},t,{prefixIdentifiers:!1}))}var Qu=()=>({props:[]}),$u=Symbol(``),ed=Symbol(``),td=Symbol(``),nd=Symbol(``),rd=Symbol(``),id=Symbol(``),ad=Symbol(``),od=Symbol(``),sd=Symbol(``),cd=Symbol(``);Ac({[$u]:`vModelRadio`,[ed]:`vModelCheckbox`,[td]:`vModelText`,[nd]:`vModelSelect`,[rd]:`vModelDynamic`,[id]:`withModifiers`,[ad]:`withKeys`,[od]:`vShow`,[sd]:`Transition`,[cd]:`TransitionGroup`});var ld;function ud(e){return(ld||=document.createElement(`div`)).innerHTML=e,ld.textContent}var dd=r(`style,iframe,script,noscript`,!0),fd={isVoidTag:v,isNativeTag:e=>g(e)||_(e),isPreTag:e=>e===`pre`,decodeEntities:ud,isBuiltInComponent:e=>{if(Hc(e,`Transition`))return sd;if(Hc(e,`TransitionGroup`))return cd},getNamespace(e,t){let n=t?t.ns:0;if(t&&n===2)if(t.tag===`annotation-xml`){if(e===`svg`)return 1;t.props.some(e=>e.type===6&&e.name===`encoding`&&e.value!=null&&(e.value.content===`text/html`||e.value.content===`application/xhtml+xml`))&&(n=0)}else /^m(?:[ions]|text)$/.test(t.tag)&&e!==`mglyph`&&e!==`malignmark`&&(n=0);else t&&n===1&&(t.tag===`foreignObject`||t.tag===`desc`||t.tag===`title`)&&(n=0);if(n===0){if(e===`svg`)return 1;if(e===`math`)return 2}return n},getTextMode({tag:e,ns:t}){if(t===0){if(e===`textarea`||e===`title`)return 1;if(dd(e))return 2}return 0}},pd=e=>{e.type===1&&e.props.forEach((t,n)=>{t.type===6&&t.name===`style`&&t.value&&(e.props[n]={type:7,name:`bind`,arg:G(`style`,!0,t.loc),exp:md(t.value.content,t.loc),modifiers:[],loc:t.loc})})},md=(e,t)=>{let n=d(e);return G(JSON.stringify(n),!1,t,!0)};function hd(e,t){return U(e,t,void 0)}var gd=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(hd(49,i)),t.children.length&&(n.onError(hd(50,i)),t.children.length=0),{props:[W(G(`innerHTML`,!0,i),r||G(``,!0))]}},_d=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(hd(51,i)),t.children.length&&(n.onError(hd(52,i)),t.children.length=0),{props:[W(G(`textContent`,!0,i),r||G(``,!0))]}},vd=(e,t,n)=>{let r=Ju(e,t,n);if(!r.props.length||t.tagType===1)return r;e.arg&&n.onError(hd(54,e.arg.loc));let{tag:i}=t,a=n.isCustomElement(i);if(i===`input`||i===`textarea`||i===`select`||a){let o=td,s=!1;if(i===`input`||a){let r=Qc(t,`type`);if(r){if(r.type===7)o=rd;else if(r.value)switch(r.value.content){case`radio`:o=$u;break;case`checkbox`:o=ed;break;case`file`:s=!0,n.onError(hd(55,e.loc));break;default:break}}else el(t)&&(o=rd)}else i===`select`&&(o=nd);s||(r.needRuntime=n.helper(o))}else n.onError(hd(53,e.loc));return r.props=r.props.filter(e=>!(e.key.type===4&&e.key.content===`modelValue`)),r},yd=r(`passive,once,capture`),bd=r(`stop,prevent,self,ctrl,shift,alt,meta,exact,middle`),xd=r(`left,right`),Sd=r(`onkeyup,onkeydown,onkeypress`,!0),Cd=(e,t)=>{let n=[],r=[],i=[];for(let a=0;a<t.length;a++){let o=t[a];yd(o)?i.push(o):xd(o)?Vc(e)?Sd(e.content)?n.push(o):r.push(o):(n.push(o),r.push(o)):bd(o)?r.push(o):n.push(o)}return{keyModifiers:n,nonKeyModifiers:r,eventOptionModifiers:i}},wd=(e,t)=>Vc(e)&&e.content.toLowerCase()===`onclick`?G(t,!0):e.type===4?e:Ic([`(`,e,`) === "onClick" ? "${t}" : (`,e,`)`]),Td=(e,t,n)=>Uu(e,t,n,t=>{let{modifiers:r}=e;if(!r.length)return t;let{key:i,value:a}=t.props[0],{keyModifiers:o,nonKeyModifiers:s,eventOptionModifiers:c}=Cd(i,r);if(s.includes(`right`)&&(i=wd(i,`onContextmenu`)),s.includes(`middle`)&&(i=wd(i,`onMouseup`)),s.length&&(a=Lc(n.helper(id),[a,JSON.stringify(s)])),o.length&&(!Vc(i)||Sd(i.content))&&(a=Lc(n.helper(ad),[a,JSON.stringify(o)])),c.length){let e=c.map(xe).join(``);i=Vc(i)?G(`${i.content}${e}`,!0):Ic([`(`,i,`) + "${e}"`])}return{props:[W(i,a)]}}),Ed=(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(hd(57,i)),{props:[],needRuntime:n.helper(od)}},Dd=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag===`script`||e.tag===`style`)&&(t.onError(hd(59,e.loc)),t.removeNode())},Od=[pd,...[]],kd={cloak:Qu,html:gd,text:_d,model:vd,on:Td,show:Ed};function Ad(e,t={}){return Zu(e,O({},fd,t,{nodeTransforms:[Dd,...Od,...t.nodeTransforms||[]],directiveTransforms:O({},kd,t.directiveTransforms||{}),transformHoist:null}))}var jd=Object.create(null);function Md(e,t){if(!N(e))if(e.nodeType)e=e.innerHTML;else return T;let n=e,r=jd[n];if(r)return r;if(e[0]===`#`){let t=document.querySelector(e);e=t?t.innerHTML:``}let{code:i}=Ad(e,O({hoistStatic:!0,onError(e){throw e}},t)),a=Function(`Vue`,i)(vo);return a._rc=!0,jd[n]=a}Qa(Md);var Nd=`stackline-vue-multiselect-dropdown-styles`,Pd=`
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
`;function Fd(){if(typeof document>`u`||document.getElementById(Nd))return;let e=document.createElement(`style`);e.id=Nd,e.textContent=Pd,document.head.appendChild(e)}var Id={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`};function Ld(e){return e===`remove`?`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`:e===`clear`?`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`:e===`search`?`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`:e===`angle-up`?`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`}function Rd(e,t,n=`vmsd-icon`){return e(`svg`,{class:n,attrs:{viewBox:t===`remove`?`0 0 47.971 47.971`:t===`clear`?`0 0 51.976 51.976`:t===`search`?`0 0 615.52 615.52`:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`}},[e(`path`,{attrs:{d:Ld(t)}})])}function zd(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function Bd(e){if(!e)return null;let t={};for(let[n,r]of Object.entries(e)){if(n===`attrs`||n===`domProps`){Object.assign(t,r);continue}if(n===`on`&&r&&typeof r==`object`){for(let[e,n]of Object.entries(r))t[`on${zd(e)}`]=n;continue}t[n]=r}return t}var X=(...e)=>{let[t,n,r]=e;return e.length===1?uo(t):e.length===2&&(Array.isArray(n)||typeof n==`string`||typeof n==`number`||n==null)?uo(t,null,n):uo(t,Bd(n),r)};function Vd(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function Hd(e,t){if(Vd(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function Ud(e,t){if(Vd(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return Hd(e,t)}function Wd(e){return!Vd(e)&&!!e.disabled}function Gd(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set;if(i.add(Hd(e,n).toLowerCase()),!Vd(e)){let t=n.searchBy.length?n.searchBy:[n.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}for(let e of i)if(e.indexOf(r)>=0)return!0;return!1}function Kd(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!Vd(e)){let n=t.groupBy,r=e;if(n in r)return String(r[n]||``)}return``}function qd(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=Kd(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function Jd(e,t,n){let r=new Map;for(let i of e.concat(t))r.set(Ud(i,n),i);return Array.from(r.values())}function Yd(e,t,n,r){return e?e(n,r,t):null}function Xd(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/["\\]/g,`\\$&`)}function Zd(e){return e.key===`Enter`||e.key===` `||e.key===`Spacebar`}function Qd(e){let t=e;return t?t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable:!1}var $d={name:`VueMultiselectDropdown`,emits:[`update:modelValue`,`input`,`update:selectedItems`,`change`,`select`,`de-select`,`select-all`,`de-select-all`,`group-select`,`group-de-select`,`scroll-to-end`,`add-filter-new-item`,`open`,`close`],props:{data:{type:Array,default:()=>[]},modelValue:{type:Array,default:void 0},value:{type:Array,default:void 0},selectedItems:{type:Array,default:void 0},defaultSelectedItems:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},renderItem:{type:Function,default:void 0},renderBadge:{type:Function,default:void 0},renderEmptyState:{type:Function,default:void 0}},data(){return{isOpen:!1,query:``,focusedKey:``,internalSelected:Array.isArray(this.defaultSelectedItems)?this.defaultSelectedItems.slice():[],menuStyle:{},bodyListMaxHeight:void 0,menuPlaceholder:null,menuAttachedToBody:!1,effectivePosition:`bottom`,instanceId:`stackline-vmsd-${Math.random().toString(36).slice(2)}`}},computed:{resolvedSettings(){let e={...Id,...this.settings||{}},t=e.skin||e.theme||`classic`;return{...e,skin:t,disabled:!!(e.disabled||this.disabled),searchBy:Array.isArray(e.searchBy)?e.searchBy:[]}},selected(){return Array.isArray(this.selectedItems)?this.selectedItems:Array.isArray(this.modelValue)?this.modelValue:Array.isArray(this.value)?this.value:this.internalSelected},filteredItems(){let e=this.resolvedSettings;return(this.data||[]).filter(t=>Gd(t,this.query,e))},groupedItems(){return qd(this.filteredItems,this.resolvedSettings)},visibleSelected(){let e=this.resolvedSettings.badgeShowLimit;return this.selected.slice(0,e)},hiddenSelectedCount(){return Math.max(0,this.selected.length-this.visibleSelected.length)},openDirection(){return this.effectivePosition===`top`?`up`:`down`},shouldAppendToBody(){return!!(this.resolvedSettings.appendToBody||this.resolvedSettings.tagToBody)}},watch:{isOpen(e){this.$nextTick(()=>{e?(this.attachMenuToBody(),this.updateMenuPosition(),this.resolvedSettings.searchAutofocus&&this.resolvedSettings.enableSearchFilter&&this.focusSearch(),this.$emit(`open`)):(this.restoreMenuToComponent(),this.menuStyle={},this.bodyListMaxHeight=void 0,this.$emit(`close`))})},selected(){this.$nextTick(this.updateMenuPosition)},filteredItems(){this.$nextTick(this.updateMenuPosition)},settings:{deep:!0,handler(){this.$nextTick(this.updateMenuPosition)}}},mounted(){Fd(),document.addEventListener(`click`,this.onDocumentClick,!0),document.addEventListener(`keydown`,this.onDocumentKeydown,!0),window.addEventListener(`resize`,this.updateMenuPosition),window.addEventListener(`scroll`,this.updateMenuPosition,!0)},beforeUnmount(){document.removeEventListener(`click`,this.onDocumentClick,!0),document.removeEventListener(`keydown`,this.onDocumentKeydown,!0),window.removeEventListener(`resize`,this.updateMenuPosition),window.removeEventListener(`scroll`,this.updateMenuPosition,!0),this.restoreMenuToComponent()},methods:{getLabel(e){return Hd(e,this.resolvedSettings)},getKey(e){return Ud(e,this.resolvedSettings)},isSelected(e){let t=this.getKey(e);return this.selected.some(e=>this.getKey(e)===t)},visibleSelectableItems(){return this.filteredItems.filter(e=>!Wd(e))},emitSelection(e){!Array.isArray(this.selectedItems)&&!Array.isArray(this.modelValue)&&!Array.isArray(this.value)&&(this.internalSelected=e),this.$emit(`update:modelValue`,e),this.$emit(`input`,e),this.$emit(`update:selectedItems`,e),this.$emit(`change`,e)},openDropdown(){this.resolvedSettings.disabled||(this.isOpen=!0)},closeDropdown(){this.isOpen=!1,this.query=``,this.focusedKey=``},toggleDropdown(){this.isOpen?this.closeDropdown():this.openDropdown()},focusSearch(){this.isOpen||this.openDropdown();let e=this.$refs.searchInput;e&&typeof e.focus==`function`&&e.focus()},clearSelection(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.selected.slice();this.emitSelection([]),this.$emit(`de-select-all`,t)},selectAll(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.resolvedSettings,n=this.visibleSelectableItems();if(n.length>0&&n.every(e=>this.isSelected(e))){let e=new Set(n.map(e=>this.getKey(e))),t=this.selected.filter(t=>!e.has(this.getKey(t)));this.emitSelection(t),this.$emit(`de-select-all`,n);return}let r=t.limitSelection?Math.max(t.limitSelection-this.selected.length,0):2**53-1,i=new Set(this.selected.map(e=>this.getKey(e))),a=n.filter(e=>!i.has(this.getKey(e))).slice(0,r),o=t.singleSelection?n.slice(0,1):Jd(this.selected,a,t);this.emitSelection(o),this.$emit(`select-all`,o)},deSelectAll(e){this.clearSelection(e)},selectGroup(e,t,n){n.preventDefault(),n.stopPropagation();let r=this.resolvedSettings,i=t.filter(e=>!Wd(e));if(i.every(e=>this.isSelected(e))){let t=new Set(i.map(e=>this.getKey(e))),n=this.selected.filter(e=>!t.has(this.getKey(e)));this.emitSelection(n),this.$emit(`group-de-select`,e,i);return}let a=r.singleSelection?i.slice(0,1):Jd(this.selected,i,r);this.emitSelection(a),this.$emit(`group-select`,e,i)},toggleItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.isSelected(e),r=!!this.resolvedSettings.limitSelection&&this.selected.length>=this.resolvedSettings.limitSelection;if(this.resolvedSettings.disabled||Wd(e)||r&&!n)return;let i=this.getKey(e);if(this.selected.some(e=>this.getKey(e)===i)){let t=this.selected.filter(e=>this.getKey(e)!==i);this.emitSelection(t),this.$emit(`de-select`,e);return}let a=this.resolvedSettings.singleSelection?[e]:this.selected.concat(e);this.resolvedSettings.limitSelection>0&&(a=a.slice(0,this.resolvedSettings.limitSelection)),this.emitSelection(a),this.$emit(`select`,e),(this.resolvedSettings.singleSelection||this.resolvedSettings.closeDropDownOnSelection)&&this.closeDropdown()},removeItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.getKey(e),r=this.selected.filter(e=>this.getKey(e)!==n);this.emitSelection(r),this.$emit(`de-select`,e)},addFilterItem(e){e.preventDefault(),e.stopPropagation();let t=this.query.trim();if(!t)return;let n={[this.resolvedSettings.primaryKey]:t.toLowerCase().replace(/\s+/g,`-`),[this.resolvedSettings.labelKey]:t};this.$emit(`add-filter-new-item`,t,n),this.toggleItem(n),this.query=``},onTriggerKeydown(e){if(Zd(e)){e.preventDefault(),this.toggleDropdown();return}if(e.key===`ArrowDown`){e.preventDefault(),this.openDropdown(),this.focusFirstOption();return}if(e.key===`ArrowUp`){e.preventDefault(),this.openDropdown(),this.focusLastOption();return}e.key===`Escape`&&this.closeDropdown()},onListKeydown(e){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.closeDropdown();return}if(Qd(e.target)&&e.key!==`ArrowDown`)return;let t=this.visibleSelectableItems();if(!t.length)return;let n=Math.max(0,t.findIndex(e=>this.getKey(e)===this.focusedKey));if(e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation();let r=t[Math.min(n+1,t.length-1)];this.focusOption(r);return}if(e.key===`ArrowUp`){e.preventDefault(),e.stopPropagation();let r=t[Math.max(n-1,0)];this.focusOption(r);return}if(e.key===`Home`){e.preventDefault(),e.stopPropagation(),this.focusFirstOption();return}if(e.key===`End`){e.preventDefault(),e.stopPropagation(),this.focusLastOption();return}if(Zd(e)){e.preventDefault(),e.stopPropagation();let n=t.find(e=>this.getKey(e)===this.focusedKey)||t[0];this.toggleItem(n);return}},focusFirstOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems()[0];e&&this.focusOption(e)})},focusLastOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems(),t=e[e.length-1];t&&this.focusOption(t)})},focusOption(e){let t=this.getKey(e);this.focusedKey=t,this.$nextTick(()=>{let e=this.$refs.menu?.querySelector(`[data-vmsd-key="${Xd(t)}"]`);e&&(e.focus(),e.scrollIntoView({block:`nearest`}))})},onInlineKeydown(e){Zd(e)&&e.stopPropagation(),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusFirstOption()),e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusLastOption())},onTriggerClick(e){let t=e.target;t&&t.closest(`button`)||this.toggleDropdown()},onDocumentClick(e){if(!this.isOpen)return;let t=this.$el,n=this.$refs.menu,r=e.target;t&&t.contains(r)||n&&n.contains(r)||this.closeDropdown()},onDocumentKeydown(e){this.isOpen&&this.resolvedSettings.escapeToClose&&e.key===`Escape`&&this.closeDropdown()},onListScroll(e){let t=e.target;if(!t)return;let n={scrollTop:t.scrollTop,scrollHeight:t.scrollHeight,clientHeight:t.clientHeight};t.scrollTop+t.clientHeight>=t.scrollHeight-4&&this.$emit(`scroll-to-end`,n)},attachMenuToBody(){if(!this.shouldAppendToBody||!this.isOpen||typeof document>`u`)return;let e=this.$refs.menu;!e||e.parentNode===document.body||(!this.menuPlaceholder&&e.parentNode&&(this.menuPlaceholder=document.createComment(`stackline-vue-multiselect-menu`),e.parentNode.insertBefore(this.menuPlaceholder,e)),document.body.appendChild(e),this.menuAttachedToBody=!0)},restoreMenuToComponent(){let e=this.$refs.menu;!e||!this.menuPlaceholder||!this.menuPlaceholder.parentNode||(this.menuPlaceholder.parentNode.insertBefore(e,this.menuPlaceholder.nextSibling),this.menuPlaceholder.parentNode.removeChild(this.menuPlaceholder),this.menuPlaceholder=null,this.menuAttachedToBody=!1,this.menuStyle={})},updateMenuPosition(){if(!this.isOpen||typeof window>`u`)return;let e=this.$refs.trigger,t=this.$refs.menu;if(!e||!t)return;let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=n.top,a=r-n.bottom,o=t.offsetHeight||Math.min(this.resolvedSettings.maxHeight+92,420),s=this.resolvedSettings.position===`top`?`top`:`bottom`,c=i>a+48,l=this.resolvedSettings.autoPosition?a<o&&c&&o<i?`top`:`bottom`:s;if(this.effectivePosition=l,!this.shouldAppendToBody){this.bodyListMaxHeight=void 0;return}let u=this.$refs.list?.offsetHeight||Math.min(this.resolvedSettings.maxHeight,o),d=Math.max(0,o-u),f=l===`top`?Math.max(0,n.top-8-8):Math.max(0,r-n.bottom-8-8),p=o>0?Math.max(0,Math.min(this.resolvedSettings.maxHeight,f-d)):this.resolvedSettings.maxHeight,m=d+p,h=l===`top`?n.top-m-8:n.bottom+8,g=l===`top`?Math.max(8,h):h,_=Math.max(0,window.innerWidth-16),v=Math.min(n.width,_),y=Math.min(Math.max(8,n.left),window.innerWidth-v-8),b={position:`fixed`,top:`${g}px`,left:`${y}px`,width:`${v}px`,maxWidth:`${_}px`,zIndex:`100000`,display:this.isOpen?`block`:`none`};this.bodyListMaxHeight=p,this.menuStyle=b}},render(){let e=this.resolvedSettings,t=String(e.skin||e.theme||`classic`),n=[`classic`,`material`,`dark`,`custom`].includes(t)?``:`theme-custom`,r=this.selected.length>0,i=this.visibleSelected,a=this.hiddenSelectedCount,o=e.clearAll&&r&&!e.disabled,s=this.visibleSelectableItems(),c=s.length>0&&s.every(e=>this.isSelected(e)),l=e.enableCheckAll&&!e.singleSelection||!!(e.addNewItemOnFilter&&this.query.trim()),u=[`vmsd-menu`,`vmsd-${this.effectivePosition}`,`skin-${t}`,`theme-${t}`,n,this.shouldAppendToBody?`vmsd-body-overlay`:``].filter(Boolean),d=e.singleSelection&&r?[X(`span`,{class:`vmsd-single-value`},[this.getLabel(this.selected[0])])]:i.map(t=>{let n=this.getLabel(t),r={item:t,label:n,selected:!0,disabled:!1,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},i=Yd(this.renderBadge,X,t,r),a=typeof e.removeItemAriaLabel==`function`?e.removeItemAriaLabel(t):`${e.removeItemAriaLabel}: ${n}`;return X(`span`,{class:`vmsd-badge`,key:this.getKey(t)},[X(`span`,{class:`vmsd-badge-label`},[i||n]),e.disabled?null:X(`button`,{class:`vmsd-badge-remove`,attrs:{type:`button`,"aria-label":a},on:{click:e=>this.removeItem(t,e),keydown:this.onInlineKeydown}},[Rd(X,`remove`)])])}),f=r?[X(`span`,{class:`vmsd-badge-list`},d)]:[X(`span`,{class:`vmsd-placeholder`},[e.text])];a>0&&f.push(X(`span`,{class:`vmsd-overflow`,attrs:{"aria-label":`${a} more selected options`}},[`+${a}`]));let p=X(`div`,{ref:`trigger`,class:[`vmsd-trigger`,e.disabled?`vmsd-disabled`:``],attrs:{role:`combobox`,tabindex:e.disabled?`-1`:`0`,"aria-label":r?`${e.ariaLabel}: ${this.selected.map(e=>this.getLabel(e)).join(`, `)}`:e.ariaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-haspopup":`listbox`,"aria-disabled":e.disabled?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:this.onTriggerClick,keydown:this.onTriggerKeydown}},[X(`div`,{class:`vmsd-value`},f),X(`div`,{class:`vmsd-actions`},[o?X(`button`,{class:`vmsd-clear`,attrs:{type:`button`,"aria-label":e.clearAllAriaLabel},on:{click:e=>this.clearSelection(e),keydown:this.onInlineKeydown}},[Rd(X,`remove`)]):null,X(`button`,{class:`vmsd-arrow-button`,attrs:{type:`button`,disabled:e.disabled,"aria-label":this.isOpen?e.closeDropdownAriaLabel:e.openDropdownAriaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:e=>{e.preventDefault(),e.stopPropagation(),this.toggleDropdown()},keydown:this.onInlineKeydown}},[X(`span`,{class:`vmsd-arrow`,attrs:{"aria-hidden":`true`}},[Rd(X,this.isOpen?`angle-up`:`angle-down`)])])])]),m=e.enableSearchFilter?X(`div`,{class:`vmsd-search-shell`},[Rd(X,`search`,`vmsd-search-icon`),X(`input`,{ref:`searchInput`,class:`vmsd-search-input`,domProps:{value:this.query},attrs:{type:`text`,placeholder:e.searchPlaceholderText,"aria-label":e.searchAriaLabel},on:{input:e=>{this.query=String(e.target.value||``)},keydown:this.onListKeydown}}),this.query?X(`button`,{class:`vmsd-search-clear`,attrs:{type:`button`,"aria-label":e.clearSearchAriaLabel},on:{click:()=>this.query=``,keydown:this.onInlineKeydown}},[Rd(X,`clear`)]):null]):null,h=l?X(`div`,{class:`vmsd-bulk-actions`},[e.enableCheckAll&&!e.singleSelection?X(`button`,{class:`vmsd-inline-button vmsd-select-all-button`,attrs:{type:`button`,disabled:e.disabled||s.length===0},on:{click:e=>this.selectAll(e),keydown:this.onInlineKeydown}},[e.showCheckbox?X(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":c?`true`:`false`,"aria-hidden":`true`}}):null,X(`span`,[c?e.unSelectAllText:e.selectAllText])]):null,e.addNewItemOnFilter&&this.query.trim()?X(`button`,{class:`vmsd-inline-button vmsd-add-button`,attrs:{type:`button`},on:{click:this.addFilterItem,keydown:this.onInlineKeydown}},[`${e.addNewButtonText} "${this.query.trim()}"`]):null]):null,g=t=>{let n=this.getLabel(t),r=this.isSelected(t),i=!!e.limitSelection&&this.selected.length>=e.limitSelection,a=e.disabled||Wd(t)||i&&!r,o=this.getKey(t),s={item:t,label:n,selected:r,disabled:a,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},c=Yd(this.renderItem,X,t,s);return X(`div`,{key:o,class:[`vmsd-option`,r?`vmsd-selected`:``,a?`vmsd-disabled`:``],attrs:{role:`option`,tabindex:a?`-1`:`0`,"data-vmsd-option":`true`,"data-vmsd-key":o,"aria-disabled":a?`true`:`false`,"aria-selected":r?`true`:`false`},on:{click:e=>{a||this.toggleItem(t,e)},focus:()=>this.focusedKey=o,mouseenter:()=>this.focusedKey=o,keydown:this.onListKeydown}},[e.showCheckbox?X(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":r?`true`:`false`,"aria-hidden":`true`}}):null,c||X(`div`,{class:`vmsd-option-body`},[X(`div`,{class:`vmsd-option-label`},[n]),!Vd(t)&&t.caption?X(`span`,{class:`vmsd-option-hint`},[String(t.caption)]):null])])},_=e.loading?[X(`div`,{class:`vmsd-state`,attrs:{role:`status`}},[e.loadingText])]:e.groupBy?this.groupedItems.map(t=>X(`div`,{class:`vmsd-group`,key:t.name,attrs:{role:`group`,"aria-label":t.name}},[X(`div`,{class:`vmsd-group-header`},[X(`span`,[`${t.name} \xB7 ${t.items.length}`]),e.selectGroup?X(`button`,{class:`vmsd-group-action`,attrs:{type:`button`},on:{click:e=>this.selectGroup(t.name,t.items,e)}},[t.items.filter(e=>!Wd(e)).every(e=>this.isSelected(e))?`Unselect`:`Select`]):null]),t.items.map(g)])):this.filteredItems.map(g);if(!this.filteredItems.length&&!e.loading){let t=this.renderEmptyState?this.renderEmptyState(this.query,X):e.noDataLabel;_.push(X(`div`,{class:`vmsd-state`},[t]))}let v=X(`div`,{ref:`menu`,class:u,style:{...this.shouldAppendToBody?this.menuStyle:{},display:this.isOpen?`block`:`none`},attrs:{role:`presentation`,"aria-hidden":this.isOpen?`false`:`true`},on:{keydown:this.onListKeydown}},[X(`div`,{class:`vmsd-toolbar`},[h,m]),X(`div`,{ref:`list`,class:`vmsd-list`,style:{maxHeight:`${this.shouldAppendToBody&&this.bodyListMaxHeight!=null?this.bodyListMaxHeight:e.maxHeight}px`},attrs:{id:`${this.instanceId}-listbox`,role:`listbox`,"aria-label":e.listboxAriaLabel,"aria-multiselectable":e.singleSelection?`false`:`true`},on:{scroll:this.onListScroll}},_)]);return X(`div`,{class:[`vmsd-root`,`skin-${t}`,`theme-${t}`,n,this.isOpen?`vmsd-open`:``,this.effectivePosition===`top`?`vmsd-opens-up`:`vmsd-opens-down`,e.classes,r?`vmsd-has-selection`:``,o?`vmsd-has-clear`:``,a>0?`vmsd-has-overflow`:``],attrs:{"data-open":this.isOpen?`true`:`false`}},[p,v])}},ef=`3.0.3`,tf=_o,nf=[`classic`,`material`,`dark`,`custom`,`brand`],Z=[{id:1,itemName:`Brazil`,name:`BR`,capital:`Brasilia`,region:`South America`,category:`Americas`},{id:2,itemName:`Canada`,name:`CA`,capital:`Ottawa`,region:`North America`,category:`Americas`},{id:3,itemName:`Portugal`,name:`PT`,capital:`Lisbon`,region:`Europe`,category:`Europe`},{id:4,itemName:`United States`,name:`US`,capital:`Washington, DC`,region:`North America`,category:`Americas`},{id:5,itemName:`Argentina`,name:`AR`,capital:`Buenos Aires`,region:`South America`,category:`Americas`},{id:6,itemName:`Germany`,name:`DE`,capital:`Berlin`,region:`Europe`,category:`Europe`},{id:7,itemName:`Mexico`,name:`MX`,capital:`Mexico City`,region:`North America`,category:`Americas`},{id:8,itemName:`Colombia`,name:`CO`,capital:`Bogota`,region:`South America`,category:`Americas`,disabled:!0}],rf=[{id:42,itemName:`Canada`,name:`CA`,capital:`Ottawa`,region:`North America`},{id:43,itemName:`Brazil`,name:`BR`,capital:`Brasilia`,region:`South America`},{id:44,itemName:`Mexico`,name:`MX`,capital:`Mexico City`,region:`North America`},{id:45,itemName:`Argentina`,name:`AR`,capital:`Buenos Aires`,region:`South America`}],af=[{id:1,itemName:`Revenue`,detail:`Finance metric`,color:`#2563eb`},{id:2,itemName:`Retention`,detail:`Customer metric`,color:`#0f766e`},{id:3,itemName:`Risk`,detail:`Operations metric`,color:`#b45309`},{id:4,itemName:`Quality`,detail:`Product metric`,color:`#7c3aed`},{id:5,itemName:`Support`,detail:`Service metric`,color:`#dc2626`}],of=[{id:1,itemName:`Node.js`,category:`Backend`},{id:2,itemName:`Vue`,category:`Framework`},{id:3,itemName:`JavaScript`,category:`Language`},{id:4,itemName:`TypeScript`,category:`Language`},{id:5,itemName:`HTML`,category:`Web`},{id:6,itemName:`CSS`,category:`Web`}],sf=Array.from({length:140},(e,t)=>({id:t+1,itemName:`Person ${t+1}`,name:`Person ${t+1}`,region:[`Brazilian`,`Canadian`,`Mexican`,`Colombian`][t%4]}));function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function cf(e){return e&&typeof e==`object`&&e.itemName?String(e.itemName):JSON.stringify(e)}function lf(e){return typeof e==`string`?`'`+e.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)+`'`:typeof e==`number`||typeof e==`boolean`?String(e):Array.isArray(e)?`[`+e.map(lf).join(`, `)+`]`:e&&typeof e==`object`?uf(e):`null`}function uf(e){return`{ `+Object.keys(e).map(t=>`${t}: ${lf(e[t])}`).join(`, `)+` }`}function df(e){return e.length?`[
`+e.map(e=>`  `+uf(e)).join(`,
`)+`
]`:`[]`}function ff(e){let t=Object.entries(e).filter(([,e])=>e!==void 0);return t.length?`{ `+t.map(([e,t])=>`${e}: ${lf(t)}`).join(`, `)+` }`:`{}`}function pf(e,t,n={}){return Object.assign({singleSelection:!1,text:t,selectAllText:`Select all`,enableCheckAll:!0,enableSearchFilter:!0,searchPlaceholderText:`Search`,badgeShowLimit:2,maxHeight:220,showCheckbox:!0,noDataLabel:`No data`,clearAll:!0,primaryKey:`id`,labelKey:`itemName`,skin:e},n)}function $(e,t,n,r,i,a,o,s,c,l,u={},d={}){return Object.assign({id:`${e}-${n}`,number:t,title:r,dataName:i,data:a,selectedName:o,settingsName:s,eventPrefix:`${e} ${n}`,initialSelected:c,settings:pf(e,l,u),optionsText:ff(u)},d)}function mf(e){return[$(e,`01`,`basic`,`Basic multi`,`countries`,Z,`${e}BasicSelected`,`${e}BasicSettings`,Z.slice(0,2),`${Q(e)} basic`,{badgeShowLimit:2}),$(e,`02`,`search`,`Search + select all`,`countries`,Z,`${e}SearchSelected`,`${e}SearchSettings`,Z.slice(1,3),`${Q(e)} searchable`,{badgeShowLimit:3}),$(e,`03`,`single`,`Single without checkbox`,`countries`,Z,`${e}SingleSelected`,`${e}SingleSettings`,Z.slice(0,1),`${Q(e)} single`,{singleSelection:!0,showCheckbox:!1,enableCheckAll:!1}),$(e,`04`,`no-checkbox`,`Multi without checkbox`,`countries`,Z,`${e}NoCheckboxSelected`,`${e}NoCheckboxSettings`,Z.slice(2,4),`${Q(e)} no checkbox`,{showCheckbox:!1}),$(e,`05`,`limit`,`Selection limit`,`countries`,Z,`${e}LimitSelected`,`${e}LimitSettings`,Z.slice(0,2),`${Q(e)} limit two`,{limitSelection:2,badgeShowLimit:2}),$(e,`06`,`badge`,`Badge overflow`,`countries`,Z,`${e}BadgeSelected`,`${e}BadgeSettings`,Z.slice(0,5),`${Q(e)} badge limit`,{badgeShowLimit:2}),$(e,`07`,`grouped`,`Grouped by region`,`countries`,Z,`${e}GroupedSelected`,`${e}GroupedSettings`,[Z[0],Z[4]],`${Q(e)} grouped`,{groupBy:`region`,selectGroup:!0}),$(e,`08`,`disabled`,`Disabled with value`,`countries`,Z,`${e}DisabledSelected`,`${e}DisabledSettings`,Z.slice(0,1),`${Q(e)} disabled`,{disabled:!0}),$(e,`09`,`empty`,`Empty data`,`emptyItems`,[],`${e}EmptySelected`,`${e}EmptySettings`,[],`${Q(e)} empty`,{noDataLabel:`No options available`}),$(e,`10`,`scroll`,`Long list with scroll`,`largeList`,sf,`${e}ScrollSelected`,`${e}ScrollSettings`,sf.slice(0,3),`${Q(e)} scroll`,{maxHeight:140,badgeShowLimit:3}),$(e,`11`,`lazy`,`Local lazy loading`,`lazyPeople`,sf.slice(0,30),`${e}LazySelected`,`${e}LazySettings`,[],`${Q(e)} lazy`,{lazyLoading:!0,maxHeight:140,badgeShowLimit:3},{note:`Adds 20 rows when the list reaches the end.`}),$(e,`12`,`template`,`Item + chip render functions`,`templateItems`,af,`${e}TemplateSelected`,`${e}TemplateSettings`,af.slice(0,2),`${Q(e)} render`,{badgeShowLimit:3},{template:!0})]}function hf(e){let t=e.template?[`  :render-item="renderOption"`,`  :render-badge="renderBadge"`]:[],n=e.note?[`  @scroll-to-end="appendNextChunk"`]:[];return[`<vue-multiselect-dropdown`,`  :data="${e.dataName}"`,`  v-model="${e.selectedName}"`,`  :settings="${e.settingsName}"`,`  @select="record('${e.eventPrefix} select', $event)"`,`  @de-select="record('${e.eventPrefix} deselect', $event)"`,...n,...t,`/>`].join(`
`)}function gf(e,t){return[`${e.selectedName}: ${df(t)},`,``,`${e.settingsName}: makeSettings('${e.settings.skin}', '${e.settings.text}', ${e.optionsText}),`,``,`methods: {`,`  record(type, value) {`,"    events.unshift(`${type}: ${itemLabel(value)}`);",`  }`,`}`].join(`
`)}function _f(e,t,n){return JSON.stringify({data:e.dataName,selected:t,settings:n},null,2)}var vf={components:{VueMultiselectDropdown:$d},props:{test:{type:Object,required:!0}},data(){return{selected:this.test.initialSelected.slice(),localData:this.test.data.slice(),disabled:!1}},computed:{actualSettings(){return Object.assign({},this.test.settings,this.test.allowDisabledToggle?{disabled:this.disabled}:{})},templateSnippet(){return hf(this.test)},jsSnippet(){return gf(this.test,this.selected)},jsonSnippet(){return _f(this.test,this.selected,this.actualSettings)},validationMessage(){return this.test.formValidation?this.selected.length?`Valid selection.`:`Select at least one skill.`:``}},methods:{itemLabel:cf,updateSelection(e){this.selected=e,this.record(this.test.eventPrefix+` change`,e)},record(e,t){let n=Array.isArray(t)?`${t.length} items`:cf(t);this.$emit(`record`,`${e}: ${n}`)},appendNextChunk(e){if(!this.test.note)return;let t=sf.slice(this.localData.length,this.localData.length+20);t.length?(this.localData=this.localData.concat(t),this.record(this.test.eventPrefix+` lazy`,`${t.length} rows`)):this.record(this.test.eventPrefix+` lazy`,`no more rows`)},addFilterItem(e,t){this.localData=this.localData.concat(t),this.record(this.test.eventPrefix+` created`,e)},renderOption(e,t,n){return n(`span`,{class:`option-row`},[n(`span`,{class:`swatch`,style:{backgroundColor:e.color||`#2563eb`}}),n(`span`,[n(`strong`,[t.label]),n(`small`,[e.detail||e.capital||e.region||``])])])},renderBadge(e,t,n){return n(`span`,{class:`swatch-chip`},[n(`span`,{class:`swatch`,style:{backgroundColor:e.color||`#2563eb`}}),t.label])},openDropdown(){this.$refs.dropdown.openDropdown()},closeDropdown(){this.$refs.dropdown.closeDropdown()},focusSearch(){this.$refs.dropdown.focusSearch()},selectAll(){this.$refs.dropdown.selectAll()},clearSelection(){this.$refs.dropdown.clearSelection()}},template:`
    <article :class="'example-row' + (test.overflow ? ' overflow-example-row' : '')">
      <div class="demo-cell">
        <div class="case-title-row">
          <h3>{{ test.number }}. {{ test.title }}</h3>
          <button v-if="test.allowDisabledToggle" class="small-button" type="button" @click="disabled = !disabled">{{ disabled ? 'Enable' : 'Disable' }}</button>
        </div>
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
      <div class="code-cell">
        <div class="code-grid">
          <div class="code-card"><strong>Template</strong><pre>{{ templateSnippet }}</pre></div>
          <div class="code-card"><strong>JS</strong><pre>{{ jsSnippet }}</pre></div>
          <div class="code-card"><strong>JSON</strong><pre>{{ jsonSnippet }}</pre></div>
        </div>
      </div>
    </article>
  `},yf=Zs({components:{VueMultiselectDropdown:$d},data(){return{skins:nf,activeSkin:`classic`,events:[],countries:Z,skinSwitchSelected:Z.slice(1,4),overlayCase:$(`material`,`00`,`overlay-bottom`,`Clipping-safe dropdown with appendToBody`,`overlayCountries`,rf,`overlaySelected`,`overlaySettings`,rf.slice(0,1),`Dialog dropdown`,{appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`,maxHeight:180,badgeShowLimit:2},{overflow:!0}),classicCases:mf(`classic`),materialCases:mf(`material`),extraCases:[$(`dark`,`13`,`dark-basic`,`Dark skin`,`countries`,Z,`darkSelected`,`darkSettings`,Z.slice(0,3),`Dark dropdown`,{badgeShowLimit:2}),$(`custom`,`14`,`custom-basic`,`Custom skin`,`countries`,Z,`customSelected`,`customSettings`,Z.slice(2,5),`Custom dropdown`,{badgeShowLimit:2}),$(`brand`,`15`,`brand-basic`,`Brand skin`,`countries`,Z,`brandSelected`,`brandSettings`,Z.slice(1,5),`Brand dropdown`,{badgeShowLimit:3}),$(`classic`,`16`,`form-validation`,`Controlled form validation`,`skills`,of,`skillSelected`,`skillSettings`,[],`Select skills`,{groupBy:`category`,badgeShowLimit:3},{formValidation:!0}),$(`classic`,`17`,`methods`,`Instance methods`,`countries`,Z,`methodSelected`,`methodSettings`,Z.slice(0,2),`Method controlled`,{badgeShowLimit:3},{methods:!0}),$(`classic`,`18`,`add-filter-item`,`Search and add item`,`countries`,Z.slice(0,4),`createdSelected`,`createdSettings`,Z.slice(0,2),`Add country`,{addNewItemOnFilter:!0,addNewButtonText:`Add country`,badgeShowLimit:3}),$(`classic`,`19`,`disabled-toggle`,`Disabled toggle`,`countries`,Z,`disabledToggleSelected`,`disabledToggleSettings`,Z.slice(0,2),`Toggle disabled`,{badgeShowLimit:3},{allowDisabledToggle:!0})]}},computed:{skinSwitchSettings(){return pf(this.activeSkin,`Skin `+Q(this.activeSkin),{badgeShowLimit:3,maxHeight:220})},skinSwitchTemplate(){return[`<vue-multiselect-dropdown`,`  :data="countries"`,`  v-model="skinSwitchSelected"`,`  :settings="skinSwitchSettings"`,`/>`].join(`
`)},skinSwitchJs(){return[`skinSwitchSelected: ${df(this.skinSwitchSelected)},`,``,`skinSwitchSettings: makeSettings('${this.activeSkin}', 'Skin ${Q(this.activeSkin)}', { badgeShowLimit: 3, maxHeight: 220 })`].join(`
`)},skinSwitchJson(){return JSON.stringify({data:`countries`,selected:this.skinSwitchSelected,settings:this.skinSwitchSettings},null,2)}},methods:{labelFor:Q,record(e){this.events=[e].concat(this.events).slice(0,10)},updateSkinSwitch(e){this.skinSwitchSelected=e,this.record(`skin switch change: `+e.length+` items`)}},template:`
    <main class="page">
      <header class="topbar">
        <p class="eyebrow">Vue ${tf} runtime</p>
        <h1>@stackline/vue-multiselect-dropdown ${ef}</h1>
      </header>

      <section class="skin-section skin-switcher-section">
        <div class="section-heading">
          <p class="eyebrow">Settings-only skin switch</p>
          <h2>Skin switcher</h2>
        </div>
        <div class="skin-buttons">
          <button v-for="skin in skins" :key="skin" type="button" :class="{ active: activeSkin === skin }" @click="activeSkin = skin">{{ labelFor(skin) }}</button>
        </div>
        <article class="example-row custom-skin-sample">
          <div class="demo-cell">
            <h3>Updates only settings.skin</h3>
            <vue-multiselect-dropdown
              :data="countries"
              v-model="skinSwitchSelected"
              :settings="skinSwitchSettings"
              @change="updateSkinSwitch"
            />
            <p class="settings-preview">skin: {{ activeSkin }}</p>
          </div>
          <div class="code-cell">
            <div class="code-grid">
              <div class="code-card"><strong>Template</strong><pre>{{ skinSwitchTemplate }}</pre></div>
              <div class="code-card"><strong>JS</strong><pre>{{ skinSwitchJs }}</pre></div>
              <div class="code-card"><strong>JSON</strong><pre>{{ skinSwitchJson }}</pre></div>
            </div>
          </div>
        </article>
      </section>

      <section class="skin-section overlay-section">
        <div class="section-heading">
          <p class="eyebrow">Dialog support</p>
          <h2>Dropdown inside overflow containers</h2>
        </div>
        <demo-case :test="overlayCase" @record="record" />
      </section>

      <section class="skin-section">
        <div class="section-heading">
          <p class="eyebrow">Skin</p>
          <h2>Classic</h2>
        </div>
        <div class="case-list">
          <demo-case v-for="test in classicCases" :key="test.id" :test="test" @record="record" />
        </div>
      </section>

      <section class="skin-section material-section">
        <div class="section-heading">
          <p class="eyebrow">Skin</p>
          <h2>Material</h2>
        </div>
        <div class="case-list">
          <demo-case v-for="test in materialCases" :key="test.id" :test="test" @record="record" />
        </div>
      </section>

      <section class="skin-section extra-section">
        <div class="section-heading">
          <p class="eyebrow">Vue extra coverage</p>
          <h2>Additional live tests</h2>
        </div>
        <div class="case-list">
          <demo-case v-for="test in extraCases" :key="test.id" :test="test" @record="record" />
        </div>
      </section>

      <section class="activity">
        <h2>Event log</h2>
        <p v-if="!events.length">No events yet.</p>
        <p v-for="(event, index) in events" :key="event + index">{{ event }}</p>
        <button type="button" @click="events = []">Clear log</button>
      </section>
    </main>
  `});yf.component(`demo-case`,vf),yf.mount(`#app`);