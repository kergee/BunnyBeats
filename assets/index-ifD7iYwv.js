(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function g_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zd={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx;function _1(){if(Sx)return Qo;Sx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Qo.Fragment=e,Qo.jsx=n,Qo.jsxs=n,Qo}var Mx;function y1(){return Mx||(Mx=1,zd.exports=_1()),zd.exports}var N=y1(),Fd={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex;function b1(){if(Ex)return wt;Ex=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function _(z,ee,he){this.props=z,this.context=ee,this.refs=S,this.updater=he||M}_.prototype.isReactComponent={},_.prototype.setState=function(z,ee){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ee,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function L(){}L.prototype=_.prototype;function D(z,ee,he){this.props=z,this.context=ee,this.refs=S,this.updater=he||M}var O=D.prototype=new L;O.constructor=D,E(O,_.prototype),O.isPureReactComponent=!0;var F=Array.isArray;function P(){}var B={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function w(z,ee,he){var Ee=he.ref;return{$$typeof:s,type:z,key:ee,ref:Ee!==void 0?Ee:null,props:he}}function A(z,ee){return w(z.type,ee,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function k(z){var ee={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(he){return ee[he]})}var W=/\/+/g;function J(z,ee){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):ee.toString(36)}function ie(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(ee){z.status==="pending"&&(z.status="fulfilled",z.value=ee)},function(ee){z.status==="pending"&&(z.status="rejected",z.reason=ee)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,ee,he,Ee,Be){var te=typeof z;(te==="undefined"||te==="boolean")&&(z=null);var me=!1;if(z===null)me=!0;else switch(te){case"bigint":case"string":case"number":me=!0;break;case"object":switch(z.$$typeof){case s:case e:me=!0;break;case x:return me=z._init,I(me(z._payload),ee,he,Ee,Be)}}if(me)return Be=Be(z),me=Ee===""?"."+J(z,0):Ee,F(Be)?(he="",me!=null&&(he=me.replace(W,"$&/")+"/"),I(Be,ee,he,"",function(qe){return qe})):Be!=null&&(H(Be)&&(Be=A(Be,he+(Be.key==null||z&&z.key===Be.key?"":(""+Be.key).replace(W,"$&/")+"/")+me)),ee.push(Be)),1;me=0;var He=Ee===""?".":Ee+":";if(F(z))for(var Ge=0;Ge<z.length;Ge++)Ee=z[Ge],te=He+J(Ee,Ge),me+=I(Ee,ee,he,te,Be);else if(Ge=y(z),typeof Ge=="function")for(z=Ge.call(z),Ge=0;!(Ee=z.next()).done;)Ee=Ee.value,te=He+J(Ee,Ge++),me+=I(Ee,ee,he,te,Be);else if(te==="object"){if(typeof z.then=="function")return I(ie(z),ee,he,Ee,Be);throw ee=String(z),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return me}function Y(z,ee,he){if(z==null)return z;var Ee=[],Be=0;return I(z,Ee,"","",function(te){return ee.call(he,te,Be++)}),Ee}function Z(z){if(z._status===-1){var ee=z._result;ee=ee(),ee.then(function(he){(z._status===0||z._status===-1)&&(z._status=1,z._result=he)},function(he){(z._status===0||z._status===-1)&&(z._status=2,z._result=he)}),z._status===-1&&(z._status=0,z._result=ee)}if(z._status===1)return z._result.default;throw z._result}var pe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Me={map:Y,forEach:function(z,ee,he){Y(z,function(){ee.apply(this,arguments)},he)},count:function(z){var ee=0;return Y(z,function(){ee++}),ee},toArray:function(z){return Y(z,function(ee){return ee})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return wt.Activity=g,wt.Children=Me,wt.Component=_,wt.Fragment=n,wt.Profiler=o,wt.PureComponent=D,wt.StrictMode=a,wt.Suspense=m,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,wt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},wt.cache=function(z){return function(){return z.apply(null,arguments)}},wt.cacheSignal=function(){return null},wt.cloneElement=function(z,ee,he){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ee=E({},z.props),Be=z.key;if(ee!=null)for(te in ee.key!==void 0&&(Be=""+ee.key),ee)!q.call(ee,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ee.ref===void 0||(Ee[te]=ee[te]);var te=arguments.length-2;if(te===1)Ee.children=he;else if(1<te){for(var me=Array(te),He=0;He<te;He++)me[He]=arguments[He+2];Ee.children=me}return w(z.type,Be,Ee)},wt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},wt.createElement=function(z,ee,he){var Ee,Be={},te=null;if(ee!=null)for(Ee in ee.key!==void 0&&(te=""+ee.key),ee)q.call(ee,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Be[Ee]=ee[Ee]);var me=arguments.length-2;if(me===1)Be.children=he;else if(1<me){for(var He=Array(me),Ge=0;Ge<me;Ge++)He[Ge]=arguments[Ge+2];Be.children=He}if(z&&z.defaultProps)for(Ee in me=z.defaultProps,me)Be[Ee]===void 0&&(Be[Ee]=me[Ee]);return w(z,te,Be)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(z){return{$$typeof:f,render:z}},wt.isValidElement=H,wt.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:Z}},wt.memo=function(z,ee){return{$$typeof:h,type:z,compare:ee===void 0?null:ee}},wt.startTransition=function(z){var ee=B.T,he={};B.T=he;try{var Ee=z(),Be=B.S;Be!==null&&Be(he,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(P,pe)}catch(te){pe(te)}finally{ee!==null&&he.types!==null&&(ee.types=he.types),B.T=ee}},wt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},wt.use=function(z){return B.H.use(z)},wt.useActionState=function(z,ee,he){return B.H.useActionState(z,ee,he)},wt.useCallback=function(z,ee){return B.H.useCallback(z,ee)},wt.useContext=function(z){return B.H.useContext(z)},wt.useDebugValue=function(){},wt.useDeferredValue=function(z,ee){return B.H.useDeferredValue(z,ee)},wt.useEffect=function(z,ee){return B.H.useEffect(z,ee)},wt.useEffectEvent=function(z){return B.H.useEffectEvent(z)},wt.useId=function(){return B.H.useId()},wt.useImperativeHandle=function(z,ee,he){return B.H.useImperativeHandle(z,ee,he)},wt.useInsertionEffect=function(z,ee){return B.H.useInsertionEffect(z,ee)},wt.useLayoutEffect=function(z,ee){return B.H.useLayoutEffect(z,ee)},wt.useMemo=function(z,ee){return B.H.useMemo(z,ee)},wt.useOptimistic=function(z,ee){return B.H.useOptimistic(z,ee)},wt.useReducer=function(z,ee,he){return B.H.useReducer(z,ee,he)},wt.useRef=function(z){return B.H.useRef(z)},wt.useState=function(z){return B.H.useState(z)},wt.useSyncExternalStore=function(z,ee,he){return B.H.useSyncExternalStore(z,ee,he)},wt.useTransition=function(){return B.H.useTransition()},wt.version="19.2.0",wt}var Tx;function Mu(){return Tx||(Tx=1,Fd.exports=b1()),Fd.exports}var ae=Mu();const Nn=g_(ae);var Bd={exports:{}},Jo={},Hd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax;function S1(){return Ax||(Ax=1,(function(s){function e(I,Y){var Z=I.length;I.push(Y);e:for(;0<Z;){var pe=Z-1>>>1,Me=I[pe];if(0<o(Me,Y))I[pe]=Y,I[Z]=Me,Z=pe;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var Y=I[0],Z=I.pop();if(Z!==Y){I[0]=Z;e:for(var pe=0,Me=I.length,z=Me>>>1;pe<z;){var ee=2*(pe+1)-1,he=I[ee],Ee=ee+1,Be=I[Ee];if(0>o(he,Z))Ee<Me&&0>o(Be,he)?(I[pe]=Be,I[Ee]=Z,pe=Ee):(I[pe]=he,I[ee]=Z,pe=ee);else if(Ee<Me&&0>o(Be,Z))I[pe]=Be,I[Ee]=Z,pe=Ee;else break e}}return Y}function o(I,Y){var Z=I.sortIndex-Y.sortIndex;return Z!==0?Z:I.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],h=[],x=1,g=null,v=3,y=!1,M=!1,E=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function O(I){for(var Y=n(h);Y!==null;){if(Y.callback===null)a(h);else if(Y.startTime<=I)a(h),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=n(h)}}function F(I){if(E=!1,O(I),!M)if(n(m)!==null)M=!0,P||(P=!0,k());else{var Y=n(h);Y!==null&&ie(F,Y.startTime-I)}}var P=!1,B=-1,q=5,w=-1;function A(){return S?!0:!(s.unstable_now()-w<q)}function H(){if(S=!1,P){var I=s.unstable_now();w=I;var Y=!0;try{e:{M=!1,E&&(E=!1,L(B),B=-1),y=!0;var Z=v;try{t:{for(O(I),g=n(m);g!==null&&!(g.expirationTime>I&&A());){var pe=g.callback;if(typeof pe=="function"){g.callback=null,v=g.priorityLevel;var Me=pe(g.expirationTime<=I);if(I=s.unstable_now(),typeof Me=="function"){g.callback=Me,O(I),Y=!0;break t}g===n(m)&&a(m),O(I)}else a(m);g=n(m)}if(g!==null)Y=!0;else{var z=n(h);z!==null&&ie(F,z.startTime-I),Y=!1}}break e}finally{g=null,v=Z,y=!1}Y=void 0}}finally{Y?k():P=!1}}}var k;if(typeof D=="function")k=function(){D(H)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,J=W.port2;W.port1.onmessage=H,k=function(){J.postMessage(null)}}else k=function(){_(H,0)};function ie(I,Y){B=_(function(){I(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var Z=v;v=Y;try{return I()}finally{v=Z}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=v;v=I;try{return Y()}finally{v=Z}},s.unstable_scheduleCallback=function(I,Y,Z){var pe=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?pe+Z:pe):Z=pe,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Z+Me,I={id:x++,callback:Y,priorityLevel:I,startTime:Z,expirationTime:Me,sortIndex:-1},Z>pe?(I.sortIndex=Z,e(h,I),n(m)===null&&I===n(h)&&(E?(L(B),B=-1):E=!0,ie(F,Z-pe))):(I.sortIndex=Me,e(m,I),M||y||(M=!0,P||(P=!0,k()))),I},s.unstable_shouldYield=A,s.unstable_wrapCallback=function(I){var Y=v;return function(){var Z=v;v=Y;try{return I.apply(this,arguments)}finally{v=Z}}}})(Gd)),Gd}var wx;function M1(){return wx||(wx=1,Hd.exports=S1()),Hd.exports}var Vd={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx;function E1(){if(Rx)return Kn;Rx=1;var s=Mu();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:m,containerInfo:h,implementation:x}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},Kn.flushSync=function(m){var h=u.T,x=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=h,a.p=x,a.d.f()}},Kn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(m,h))},Kn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Kn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,g=f(x,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?a.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):x==="script"&&a.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Kn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=f(h.as,h.crossOrigin);a.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(m)},Kn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,g=f(x,h.crossOrigin);a.d.L(m,x,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Kn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=f(h.as,h.crossOrigin);a.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(m)},Kn.requestFormReset=function(m){a.d.r(m)},Kn.unstable_batchedUpdates=function(m,h){return m(h)},Kn.useFormState=function(m,h,x){return u.H.useFormState(m,h,x)},Kn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Kn.version="19.2.0",Kn}var Cx;function T1(){if(Cx)return Vd.exports;Cx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vd.exports=E1(),Vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx;function A1(){if(Dx)return Jo;Dx=1;var s=M1(),e=Mu(),n=T1();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var d=r.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){r=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===r)return m(d),t;if(p===l)return m(d),i;p=p.sibling}throw Error(a(188))}if(r.return!==l.return)r=d,l=p;else{for(var b=!1,R=d.child;R;){if(R===r){b=!0,r=d,l=p;break}if(R===l){b=!0,l=d,r=p;break}R=R.sibling}if(!b){for(R=p.child;R;){if(R===r){b=!0,r=p,l=d;break}if(R===l){b=!0,l=p,r=d;break}R=R.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function x(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=x(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var W=Symbol.for("react.client.reference");function J(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===W?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case P:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case D:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case O:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:J(t.type)||"Memo";case q:i=t._payload,t=t._init;try{return J(t(i))}catch{}}return null}var ie=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},pe=[],Me=-1;function z(t){return{current:t}}function ee(t){0>Me||(t.current=pe[Me],pe[Me]=null,Me--)}function he(t,i){Me++,pe[Me]=t.current,t.current=i}var Ee=z(null),Be=z(null),te=z(null),me=z(null);function He(t,i){switch(he(te,i),he(Be,t),he(Ee,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Xg(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Xg(i),t=Wg(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Ee),he(Ee,t)}function Ge(){ee(Ee),ee(Be),ee(te)}function qe(t){t.memoizedState!==null&&he(me,t);var i=Ee.current,r=Wg(i,t.type);i!==r&&(he(Be,t),he(Ee,r))}function Ke(t){Be.current===t&&(ee(Ee),ee(Be)),me.current===t&&(ee(me),Yo._currentValue=Z)}var Te,Je;function st(t){if(Te===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Te=i&&i[1]||"",Je=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Te+t+Je}var G=!1;function nt(t,i){if(!t||G)return"";G=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Oe=function(){throw Error()};if(Object.defineProperty(Oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Oe,[])}catch(Se){var ge=Se}Reflect.construct(t,[],Oe)}else{try{Oe.call()}catch(Se){ge=Se}t.call(Oe.prototype)}}else{try{throw Error()}catch(Se){ge=Se}(Oe=t())&&typeof Oe.catch=="function"&&Oe.catch(function(){})}}catch(Se){if(Se&&ge&&typeof Se.stack=="string")return[Se.stack,ge.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),b=p[0],R=p[1];if(b&&R){var X=b.split(`
`),de=R.split(`
`);for(d=l=0;l<X.length&&!X[l].includes("DetermineComponentFrameRoot");)l++;for(;d<de.length&&!de[d].includes("DetermineComponentFrameRoot");)d++;if(l===X.length||d===de.length)for(l=X.length-1,d=de.length-1;1<=l&&0<=d&&X[l]!==de[d];)d--;for(;1<=l&&0<=d;l--,d--)if(X[l]!==de[d]){if(l!==1||d!==1)do if(l--,d--,0>d||X[l]!==de[d]){var Ce=`
`+X[l].replace(" at new "," at ");return t.displayName&&Ce.includes("<anonymous>")&&(Ce=Ce.replace("<anonymous>",t.displayName)),Ce}while(1<=l&&0<=d);break}}}finally{G=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?st(r):""}function rt(t,i){switch(t.tag){case 26:case 27:case 5:return st(t.type);case 16:return st("Lazy");case 13:return t.child!==i&&i!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return nt(t.type,!1);case 11:return nt(t.type.render,!1);case 1:return nt(t.type,!0);case 31:return st("Activity");default:return""}}function it(t){try{var i="",r=null;do i+=rt(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fe=Object.prototype.hasOwnProperty,Et=s.unstable_scheduleCallback,tt=s.unstable_cancelCallback,ft=s.unstable_shouldYield,U=s.unstable_requestPaint,T=s.unstable_now,$=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,ue=s.unstable_UserBlockingPriority,se=s.unstable_NormalPriority,Ye=s.unstable_LowPriority,ke=s.unstable_IdlePriority,ye=s.log,Qe=s.unstable_setDisableYieldValue,Re=null,oe=null;function Le(t){if(typeof ye=="function"&&Qe(t),oe&&typeof oe.setStrictMode=="function")try{oe.setStrictMode(Re,t)}catch{}}var Ve=Math.clz32?Math.clz32:V,_e=Math.log,ze=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(_e(t)/ze|0)|0}var Pe=256,we=262144,Ie=4194304;function Ne(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ae(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var d=0,p=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~p,l!==0?d=Ne(l):(b&=R,b!==0?d=Ne(b):r||(r=R&~t,r!==0&&(d=Ne(r))))):(R=l&~p,R!==0?d=Ne(R):b!==0?d=Ne(b):r||(r=l&~t,r!==0&&(d=Ne(r)))),d===0?0:i!==0&&i!==d&&(i&p)===0&&(p=d&-d,r=i&-i,p>=r||p===32&&(r&4194048)!==0)?i:d}function je(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ct(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ut(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function mt(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Gt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gt(t,i,r,l,d,p){var b=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var R=t.entanglements,X=t.expirationTimes,de=t.hiddenUpdates;for(r=b&~r;0<r;){var Ce=31-Ve(r),Oe=1<<Ce;R[Ce]=0,X[Ce]=-1;var ge=de[Ce];if(ge!==null)for(de[Ce]=null,Ce=0;Ce<ge.length;Ce++){var Se=ge[Ce];Se!==null&&(Se.lane&=-536870913)}r&=~Oe}l!==0&&Fn(t,l,0),p!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=p&~(b&~i))}function Fn(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ve(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function Un(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-Ve(r),d=1<<l;d&i|t[l]&i&&(t[l]|=i),r&=~d}}function bn(t,i){var r=i&-i;return r=(r&42)!==0?1:Tt(r),(r&(t.suspendedLanes|i))!==0?0:r}function Tt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function j(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xe(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:mx(t.type))}function De(t,i){var r=Y.p;try{return Y.p=t,i()}finally{Y.p=r}}var Ze=Math.random().toString(36).slice(2),lt="__reactFiber$"+Ze,xt="__reactProps$"+Ze,bt="__reactContainer$"+Ze,Ut="__reactEvents$"+Ze,qt="__reactListeners$"+Ze,_t="__reactHandles$"+Ze,Pt="__reactResources$"+Ze,fn="__reactMarker$"+Ze;function gn(t){delete t[lt],delete t[xt],delete t[Ut],delete t[qt],delete t[_t]}function Tn(t){var i=t[lt];if(i)return i;for(var r=t.parentNode;r;){if(i=r[bt]||r[lt]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=$g(t);t!==null;){if(r=t[lt])return r;t=$g(t)}return i}t=r,r=t.parentNode}return null}function C(t){if(t=t[lt]||t[bt]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function K(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function ce(t){var i=t[Pt];return i||(i=t[Pt]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function le(t){t[fn]=!0}var ne=new Set,Xe={};function We(t,i){$e(t,i),$e(t+"Capture",i)}function $e(t,i){for(Xe[t]=i,t=0;t<i.length;t++)ne.add(i[t])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yt={},Mt={};function ht(t){return Fe.call(Mt,t)?!0:Fe.call(yt,t)?!1:at.test(t)?Mt[t]=!0:(yt[t]=!0,!1)}function Dt(t,i,r){if(ht(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Yt(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Zt(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}function Vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function en(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,p=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){r=""+b,p.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function cn(t){if(!t._valueTracker){var i=en(t)?"checked":"value";t._valueTracker=vt(t,i,""+t[i])}}function kt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=en(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function Bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fa=/[\n"\\]/g;function dn(t){return t.replace(Fa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function $i(t,i,r,l,d,p,b,R){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Vt(i)):t.value!==""+Vt(i)&&(t.value=""+Vt(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Hn(t,b,Vt(i)):r!=null?Hn(t,b,Vt(r)):l!=null&&t.removeAttribute("value"),d==null&&p!=null&&(t.defaultChecked=!!p),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Vt(R):t.removeAttribute("name")}function hn(t,i,r,l,d,p,b,R){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),i!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||i!=null)){cn(t);return}r=r!=null?""+Vt(r):"",i=i!=null?""+Vt(i):r,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),cn(t)}function Hn(t,i,r){i==="number"&&Bn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function On(t,i,r,l){if(t=t.options,i){i={};for(var d=0;d<r.length;d++)i["$"+r[d]]=!0;for(r=0;r<t.length;r++)d=i.hasOwnProperty("$"+t[r].value),t[r].selected!==d&&(t[r].selected=d),d&&l&&(t[r].defaultSelected=!0)}else{for(r=""+Vt(r),i=null,d=0;d<t.length;d++){if(t[d].value===r){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Gn(t,i,r){if(i!=null&&(i=""+Vt(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+Vt(r):""}function jn(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(ie(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=Vt(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),cn(t)}function Xi(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function V0(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||ea.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function k0(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in i)l=i[d],i.hasOwnProperty(d)&&r[d]!==l&&V0(t,d,l)}else for(var p in i)i.hasOwnProperty(p)&&V0(t,p,i[p])}function Lu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var my=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return gy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var Uu=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,$r=null;function j0(t){var i=C(t);if(i&&(t=i.stateNode)){var r=t[xt]||null;e:switch(t=i.stateNode,i.type){case"input":if($i(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+dn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var d=l[xt]||null;if(!d)throw Error(a(90));$i(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&kt(l)}break e;case"textarea":Gn(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&On(t,!!r.multiple,i,!1)}}}var Pu=!1;function X0(t,i,r){if(Pu)return t(i,r);Pu=!0;try{var l=t(i);return l}finally{if(Pu=!1,(Jr!==null||$r!==null)&&(pc(),Jr&&(i=Jr,t=$r,$r=Jr=null,j0(i),t)))for(i=0;i<t.length;i++)j0(t[i])}}function co(t,i){var r=t.stateNode;if(r===null)return null;var l=r[xt]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(na)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Iu=!1}var Ba=null,zu=null,Rl=null;function W0(){if(Rl)return Rl;var t,i=zu,r=i.length,l,d="value"in Ba?Ba.value:Ba.textContent,p=d.length;for(t=0;t<r&&i[t]===d[t];t++);var b=r-t;for(l=1;l<=b&&i[r-l]===d[p-l];l++);return Rl=d.slice(t,1<l?1-l:void 0)}function Cl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function Y0(){return!1}function ii(t){function i(r,l,d,p,b){this._reactName=r,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(r=t[R],this[R]=r?r(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Dl:Y0,this.isPropagationStopped=Y0,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),i}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=ii(_r),fo=g({},_r,{view:0,detail:0}),xy=ii(fo),Fu,Bu,ho,Ll=g({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Fu=t.screenX-ho.screenX,Bu=t.screenY-ho.screenY):Bu=Fu=0,ho=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),q0=ii(Ll),vy=g({},Ll,{dataTransfer:0}),_y=ii(vy),yy=g({},fo,{relatedTarget:0}),Hu=ii(yy),by=g({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Sy=ii(by),My=g({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ey=ii(My),Ty=g({},_r,{data:0}),Z0=ii(Ty),Ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ry[t])?!!i[t]:!1}function Gu(){return Cy}var Dy=g({},fo,{key:function(t){if(t.key){var i=Ay[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ny=ii(Dy),Ly=g({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K0=ii(Ly),Uy=g({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),Oy=ii(Uy),Py=g({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=ii(Py),zy=g({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=ii(zy),By=g({},_r,{newState:0,oldState:0}),Hy=ii(By),Gy=[9,13,27,32],Vu=na&&"CompositionEvent"in window,po=null;na&&"documentMode"in document&&(po=document.documentMode);var Vy=na&&"TextEvent"in window&&!po,Q0=na&&(!Vu||po&&8<po&&11>=po),J0=" ",$0=!1;function ep(t,i){switch(t){case"keyup":return Gy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function ky(t,i){switch(t){case"compositionend":return tp(i);case"keypress":return i.which!==32?null:($0=!0,J0);case"textInput":return t=i.data,t===J0&&$0?null:t;default:return null}}function jy(t,i){if(es)return t==="compositionend"||!Vu&&ep(t,i)?(t=W0(),Rl=zu=Ba=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Q0&&i.locale!=="ko"?null:i.data;default:return null}}var Xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Xy[t.type]:i==="textarea"}function ip(t,i,r,l){Jr?$r?$r.push(l):$r=[l]:Jr=l,i=bc(i,"onChange"),0<i.length&&(r=new Nl("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var mo=null,go=null;function Wy(t){Bg(t,0)}function Ul(t){var i=K(t);if(kt(i))return t}function ap(t,i){if(t==="change")return i}var rp=!1;if(na){var ku;if(na){var ju="oninput"in document;if(!ju){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),ju=typeof sp.oninput=="function"}ku=ju}else ku=!1;rp=ku&&(!document.documentMode||9<document.documentMode)}function op(){mo&&(mo.detachEvent("onpropertychange",lp),go=mo=null)}function lp(t){if(t.propertyName==="value"&&Ul(go)){var i=[];ip(i,go,t,Ou(t)),X0(Wy,i)}}function Yy(t,i,r){t==="focusin"?(op(),mo=i,go=r,mo.attachEvent("onpropertychange",lp)):t==="focusout"&&op()}function qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(go)}function Zy(t,i){if(t==="click")return Ul(i)}function Ky(t,i){if(t==="input"||t==="change")return Ul(i)}function Qy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fi=typeof Object.is=="function"?Object.is:Qy;function xo(t,i){if(fi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var d=r[l];if(!Fe.call(i,d)||!fi(t[d],i[d]))return!1}return!0}function cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function up(t,i){var r=cp(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cp(r)}}function fp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?fp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Bn(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Bn(t.document)}return i}function Xu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Jy=na&&"documentMode"in document&&11>=document.documentMode,ts=null,Wu=null,vo=null,Yu=!1;function hp(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yu||ts==null||ts!==Bn(l)||(l=ts,"selectionStart"in l&&Xu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vo&&xo(vo,l)||(vo=l,l=bc(Wu,"onSelect"),0<l.length&&(i=new Nl("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=ts)))}function yr(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var ns={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionrun:yr("Transition","TransitionRun"),transitionstart:yr("Transition","TransitionStart"),transitioncancel:yr("Transition","TransitionCancel"),transitionend:yr("Transition","TransitionEnd")},qu={},pp={};na&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function br(t){if(qu[t])return qu[t];if(!ns[t])return t;var i=ns[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in pp)return qu[t]=i[r];return t}var mp=br("animationend"),gp=br("animationiteration"),xp=br("animationstart"),$y=br("transitionrun"),eb=br("transitionstart"),tb=br("transitioncancel"),vp=br("transitionend"),_p=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function Pi(t,i){_p.set(t,i),We(i,[t])}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],is=0,Ku=0;function Pl(){for(var t=is,i=Ku=is=0;i<t;){var r=Si[i];Si[i++]=null;var l=Si[i];Si[i++]=null;var d=Si[i];Si[i++]=null;var p=Si[i];if(Si[i++]=null,l!==null&&d!==null){var b=l.pending;b===null?d.next=d:(d.next=b.next,b.next=d),l.pending=d}p!==0&&yp(r,d,p)}}function Il(t,i,r,l){Si[is++]=t,Si[is++]=i,Si[is++]=r,Si[is++]=l,Ku|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Qu(t,i,r,l){return Il(t,i,r,l),zl(t)}function Sr(t,i){return Il(t,null,null,i),zl(t)}function yp(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var d=!1,p=t.return;p!==null;)p.childLanes|=r,l=p.alternate,l!==null&&(l.childLanes|=r),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(d=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,d&&i!==null&&(d=31-Ve(r),t=p.hiddenUpdates,l=t[d],l===null?t[d]=[i]:l.push(i),i.lane=r|536870912),p):null}function zl(t){if(50<Ho)throw Ho=0,od=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var as={};function nb(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,i,r,l){return new nb(t,i,r,l)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,i){var r=t.alternate;return r===null?(r=di(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function bp(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Fl(t,i,r,l,d,p){var b=0;if(l=t,typeof t=="function")Ju(t)&&(b=1);else if(typeof t=="string")b=o1(t,r,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=di(31,r,i,d),t.elementType=w,t.lanes=p,t;case E:return Mr(r.children,d,p,i);case S:b=8,d|=24;break;case _:return t=di(12,r,i,d|2),t.elementType=_,t.lanes=p,t;case F:return t=di(13,r,i,d),t.elementType=F,t.lanes=p,t;case P:return t=di(19,r,i,d),t.elementType=P,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:b=10;break e;case L:b=9;break e;case O:b=11;break e;case B:b=14;break e;case q:b=16,l=null;break e}b=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=di(b,r,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Mr(t,i,r,l){return t=di(7,t,l,i),t.lanes=r,t}function $u(t,i,r){return t=di(6,t,null,i),t.lanes=r,t}function Sp(t){var i=di(18,null,null,0);return i.stateNode=t,i}function ef(t,i,r){return i=di(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Mp=new WeakMap;function Mi(t,i){if(typeof t=="object"&&t!==null){var r=Mp.get(t);return r!==void 0?r:(i={value:t,source:i,stack:it(i)},Mp.set(t,i),i)}return{value:t,source:i,stack:it(i)}}var rs=[],ss=0,Bl=null,_o=0,Ei=[],Ti=0,Ha=null,Wi=1,Yi="";function aa(t,i){rs[ss++]=_o,rs[ss++]=Bl,Bl=t,_o=i}function Ep(t,i,r){Ei[Ti++]=Wi,Ei[Ti++]=Yi,Ei[Ti++]=Ha,Ha=t;var l=Wi;t=Yi;var d=32-Ve(l)-1;l&=~(1<<d),r+=1;var p=32-Ve(i)+d;if(30<p){var b=d-d%5;p=(l&(1<<b)-1).toString(32),l>>=b,d-=b,Wi=1<<32-Ve(i)+d|r<<d|l,Yi=p+t}else Wi=1<<p|r<<d|l,Yi=t}function tf(t){t.return!==null&&(aa(t,1),Ep(t,1,0))}function nf(t){for(;t===Bl;)Bl=rs[--ss],rs[ss]=null,_o=rs[--ss],rs[ss]=null;for(;t===Ha;)Ha=Ei[--Ti],Ei[Ti]=null,Yi=Ei[--Ti],Ei[Ti]=null,Wi=Ei[--Ti],Ei[Ti]=null}function Tp(t,i){Ei[Ti++]=Wi,Ei[Ti++]=Yi,Ei[Ti++]=Ha,Wi=i.id,Yi=i.overflow,Ha=t}var Xn=null,pn=null,jt=!1,Ga=null,Ai=!1,af=Error(a(519));function Va(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(Mi(i,t)),af}function Ap(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[lt]=t,i[xt]=l,r){case"dialog":zt("cancel",i),zt("close",i);break;case"iframe":case"object":case"embed":zt("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)zt(Vo[r],i);break;case"source":zt("error",i);break;case"img":case"image":case"link":zt("error",i),zt("load",i);break;case"details":zt("toggle",i);break;case"input":zt("invalid",i),hn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":zt("invalid",i);break;case"textarea":zt("invalid",i),jn(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||kg(i.textContent,r)?(l.popover!=null&&(zt("beforetoggle",i),zt("toggle",i)),l.onScroll!=null&&zt("scroll",i),l.onScrollEnd!=null&&zt("scrollend",i),l.onClick!=null&&(i.onclick=ta),i=!0):i=!1,i||Va(t,!0)}function wp(t){for(Xn=t.return;Xn;)switch(Xn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Xn=Xn.return}}function os(t){if(t!==Xn)return!1;if(!jt)return wp(t),jt=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Sd(t.type,t.memoizedProps)),r=!r),r&&pn&&Va(t),wp(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));pn=Jg(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));pn=Jg(t)}else i===27?(i=pn,nr(t.type)?(t=wd,wd=null,pn=t):pn=i):pn=Xn?Ri(t.stateNode.nextSibling):null;return!0}function Er(){pn=Xn=null,jt=!1}function rf(){var t=Ga;return t!==null&&(oi===null?oi=t:oi.push.apply(oi,t),Ga=null),t}function yo(t){Ga===null?Ga=[t]:Ga.push(t)}var sf=z(null),Tr=null,ra=null;function ka(t,i,r){he(sf,i._currentValue),i._currentValue=r}function sa(t){t._currentValue=sf.current,ee(sf)}function of(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function lf(t,i,r,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var p=d.dependencies;if(p!==null){var b=d.child;p=p.firstContext;e:for(;p!==null;){var R=p;p=d;for(var X=0;X<i.length;X++)if(R.context===i[X]){p.lanes|=r,R=p.alternate,R!==null&&(R.lanes|=r),of(p.return,r,t),l||(b=null);break e}p=R.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(a(341));b.lanes|=r,p=b.alternate,p!==null&&(p.lanes|=r),of(b,r,t),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===t){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function ls(t,i,r,l){t=null;for(var d=i,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var R=d.type;fi(d.pendingProps.value,b.value)||(t!==null?t.push(R):t=[R])}}else if(d===me.current){if(b=d.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}d=d.return}t!==null&&lf(i,t,r,l),i.flags|=262144}function Hl(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ar(t){Tr=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wn(t){return Rp(Tr,t)}function Gl(t,i){return Tr===null&&Ar(t),Rp(t,i)}function Rp(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ra===null){if(t===null)throw Error(a(308));ra=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ra=ra.next=i;return r}var ib=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},ab=s.unstable_scheduleCallback,rb=s.unstable_NormalPriority,An={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new ib,data:new Map,refCount:0}}function bo(t){t.refCount--,t.refCount===0&&ab(rb,function(){t.controller.abort()})}var So=null,uf=0,cs=0,us=null;function sb(t,i){if(So===null){var r=So=[];uf=0,cs=hd(),us={status:"pending",value:void 0,then:function(l){r.push(l)}}}return uf++,i.then(Cp,Cp),i}function Cp(){if(--uf===0&&So!==null){us!==null&&(us.status="fulfilled");var t=So;So=null,cs=0,us=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ob(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(d){r.push(d)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var d=0;d<r.length;d++)(0,r[d])(i)},function(d){for(l.status="rejected",l.reason=d,d=0;d<r.length;d++)(0,r[d])(void 0)}),l}var Dp=I.S;I.S=function(t,i){hg=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&sb(t,i),Dp!==null&&Dp(t,i)};var wr=z(null);function ff(){var t=wr.current;return t!==null?t:un.pooledCache}function Vl(t,i){i===null?he(wr,wr.current):he(wr,i.pool)}function Np(){var t=ff();return t===null?null:{parent:An._currentValue,pool:t}}var fs=Error(a(460)),df=Error(a(474)),kl=Error(a(542)),jl={then:function(){}};function Lp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Up(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(ta,ta),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Pp(t),t;default:if(typeof i.status=="string")i.then(ta,ta);else{if(t=un,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=l}},function(l){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Pp(t),t}throw Cr=i,fs}}function Rr(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Cr=r,fs):r}}var Cr=null;function Op(){if(Cr===null)throw Error(a(459));var t=Cr;return Cr=null,t}function Pp(t){if(t===fs||t===kl)throw Error(a(483))}var ds=null,Mo=0;function Xl(t){var i=Mo;return Mo+=1,ds===null&&(ds=[]),Up(ds,t,i)}function Eo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Wl(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Ip(t){function i(re,Q){if(t){var fe=re.deletions;fe===null?(re.deletions=[Q],re.flags|=16):fe.push(Q)}}function r(re,Q){if(!t)return null;for(;Q!==null;)i(re,Q),Q=Q.sibling;return null}function l(re){for(var Q=new Map;re!==null;)re.key!==null?Q.set(re.key,re):Q.set(re.index,re),re=re.sibling;return Q}function d(re,Q){return re=ia(re,Q),re.index=0,re.sibling=null,re}function p(re,Q,fe){return re.index=fe,t?(fe=re.alternate,fe!==null?(fe=fe.index,fe<Q?(re.flags|=67108866,Q):fe):(re.flags|=67108866,Q)):(re.flags|=1048576,Q)}function b(re){return t&&re.alternate===null&&(re.flags|=67108866),re}function R(re,Q,fe,Ue){return Q===null||Q.tag!==6?(Q=$u(fe,re.mode,Ue),Q.return=re,Q):(Q=d(Q,fe),Q.return=re,Q)}function X(re,Q,fe,Ue){var pt=fe.type;return pt===E?Ce(re,Q,fe.props.children,Ue,fe.key):Q!==null&&(Q.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===q&&Rr(pt)===Q.type)?(Q=d(Q,fe.props),Eo(Q,fe),Q.return=re,Q):(Q=Fl(fe.type,fe.key,fe.props,null,re.mode,Ue),Eo(Q,fe),Q.return=re,Q)}function de(re,Q,fe,Ue){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==fe.containerInfo||Q.stateNode.implementation!==fe.implementation?(Q=ef(fe,re.mode,Ue),Q.return=re,Q):(Q=d(Q,fe.children||[]),Q.return=re,Q)}function Ce(re,Q,fe,Ue,pt){return Q===null||Q.tag!==7?(Q=Mr(fe,re.mode,Ue,pt),Q.return=re,Q):(Q=d(Q,fe),Q.return=re,Q)}function Oe(re,Q,fe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=$u(""+Q,re.mode,fe),Q.return=re,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return fe=Fl(Q.type,Q.key,Q.props,null,re.mode,fe),Eo(fe,Q),fe.return=re,fe;case M:return Q=ef(Q,re.mode,fe),Q.return=re,Q;case q:return Q=Rr(Q),Oe(re,Q,fe)}if(ie(Q)||k(Q))return Q=Mr(Q,re.mode,fe,null),Q.return=re,Q;if(typeof Q.then=="function")return Oe(re,Xl(Q),fe);if(Q.$$typeof===D)return Oe(re,Gl(re,Q),fe);Wl(re,Q)}return null}function ge(re,Q,fe,Ue){var pt=Q!==null?Q.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return pt!==null?null:R(re,Q,""+fe,Ue);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case y:return fe.key===pt?X(re,Q,fe,Ue):null;case M:return fe.key===pt?de(re,Q,fe,Ue):null;case q:return fe=Rr(fe),ge(re,Q,fe,Ue)}if(ie(fe)||k(fe))return pt!==null?null:Ce(re,Q,fe,Ue,null);if(typeof fe.then=="function")return ge(re,Q,Xl(fe),Ue);if(fe.$$typeof===D)return ge(re,Q,Gl(re,fe),Ue);Wl(re,fe)}return null}function Se(re,Q,fe,Ue,pt){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number"||typeof Ue=="bigint")return re=re.get(fe)||null,R(Q,re,""+Ue,pt);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case y:return re=re.get(Ue.key===null?fe:Ue.key)||null,X(Q,re,Ue,pt);case M:return re=re.get(Ue.key===null?fe:Ue.key)||null,de(Q,re,Ue,pt);case q:return Ue=Rr(Ue),Se(re,Q,fe,Ue,pt)}if(ie(Ue)||k(Ue))return re=re.get(fe)||null,Ce(Q,re,Ue,pt,null);if(typeof Ue.then=="function")return Se(re,Q,fe,Xl(Ue),pt);if(Ue.$$typeof===D)return Se(re,Q,fe,Gl(Q,Ue),pt);Wl(Q,Ue)}return null}function ot(re,Q,fe,Ue){for(var pt=null,Kt=null,dt=Q,Nt=Q=0,Bt=null;dt!==null&&Nt<fe.length;Nt++){dt.index>Nt?(Bt=dt,dt=null):Bt=dt.sibling;var Qt=ge(re,dt,fe[Nt],Ue);if(Qt===null){dt===null&&(dt=Bt);break}t&&dt&&Qt.alternate===null&&i(re,dt),Q=p(Qt,Q,Nt),Kt===null?pt=Qt:Kt.sibling=Qt,Kt=Qt,dt=Bt}if(Nt===fe.length)return r(re,dt),jt&&aa(re,Nt),pt;if(dt===null){for(;Nt<fe.length;Nt++)dt=Oe(re,fe[Nt],Ue),dt!==null&&(Q=p(dt,Q,Nt),Kt===null?pt=dt:Kt.sibling=dt,Kt=dt);return jt&&aa(re,Nt),pt}for(dt=l(dt);Nt<fe.length;Nt++)Bt=Se(dt,re,Nt,fe[Nt],Ue),Bt!==null&&(t&&Bt.alternate!==null&&dt.delete(Bt.key===null?Nt:Bt.key),Q=p(Bt,Q,Nt),Kt===null?pt=Bt:Kt.sibling=Bt,Kt=Bt);return t&&dt.forEach(function(or){return i(re,or)}),jt&&aa(re,Nt),pt}function St(re,Q,fe,Ue){if(fe==null)throw Error(a(151));for(var pt=null,Kt=null,dt=Q,Nt=Q=0,Bt=null,Qt=fe.next();dt!==null&&!Qt.done;Nt++,Qt=fe.next()){dt.index>Nt?(Bt=dt,dt=null):Bt=dt.sibling;var or=ge(re,dt,Qt.value,Ue);if(or===null){dt===null&&(dt=Bt);break}t&&dt&&or.alternate===null&&i(re,dt),Q=p(or,Q,Nt),Kt===null?pt=or:Kt.sibling=or,Kt=or,dt=Bt}if(Qt.done)return r(re,dt),jt&&aa(re,Nt),pt;if(dt===null){for(;!Qt.done;Nt++,Qt=fe.next())Qt=Oe(re,Qt.value,Ue),Qt!==null&&(Q=p(Qt,Q,Nt),Kt===null?pt=Qt:Kt.sibling=Qt,Kt=Qt);return jt&&aa(re,Nt),pt}for(dt=l(dt);!Qt.done;Nt++,Qt=fe.next())Qt=Se(dt,re,Nt,Qt.value,Ue),Qt!==null&&(t&&Qt.alternate!==null&&dt.delete(Qt.key===null?Nt:Qt.key),Q=p(Qt,Q,Nt),Kt===null?pt=Qt:Kt.sibling=Qt,Kt=Qt);return t&&dt.forEach(function(v1){return i(re,v1)}),jt&&aa(re,Nt),pt}function on(re,Q,fe,Ue){if(typeof fe=="object"&&fe!==null&&fe.type===E&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case y:e:{for(var pt=fe.key;Q!==null;){if(Q.key===pt){if(pt=fe.type,pt===E){if(Q.tag===7){r(re,Q.sibling),Ue=d(Q,fe.props.children),Ue.return=re,re=Ue;break e}}else if(Q.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===q&&Rr(pt)===Q.type){r(re,Q.sibling),Ue=d(Q,fe.props),Eo(Ue,fe),Ue.return=re,re=Ue;break e}r(re,Q);break}else i(re,Q);Q=Q.sibling}fe.type===E?(Ue=Mr(fe.props.children,re.mode,Ue,fe.key),Ue.return=re,re=Ue):(Ue=Fl(fe.type,fe.key,fe.props,null,re.mode,Ue),Eo(Ue,fe),Ue.return=re,re=Ue)}return b(re);case M:e:{for(pt=fe.key;Q!==null;){if(Q.key===pt)if(Q.tag===4&&Q.stateNode.containerInfo===fe.containerInfo&&Q.stateNode.implementation===fe.implementation){r(re,Q.sibling),Ue=d(Q,fe.children||[]),Ue.return=re,re=Ue;break e}else{r(re,Q);break}else i(re,Q);Q=Q.sibling}Ue=ef(fe,re.mode,Ue),Ue.return=re,re=Ue}return b(re);case q:return fe=Rr(fe),on(re,Q,fe,Ue)}if(ie(fe))return ot(re,Q,fe,Ue);if(k(fe)){if(pt=k(fe),typeof pt!="function")throw Error(a(150));return fe=pt.call(fe),St(re,Q,fe,Ue)}if(typeof fe.then=="function")return on(re,Q,Xl(fe),Ue);if(fe.$$typeof===D)return on(re,Q,Gl(re,fe),Ue);Wl(re,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint"?(fe=""+fe,Q!==null&&Q.tag===6?(r(re,Q.sibling),Ue=d(Q,fe),Ue.return=re,re=Ue):(r(re,Q),Ue=$u(fe,re.mode,Ue),Ue.return=re,re=Ue),b(re)):r(re,Q)}return function(re,Q,fe,Ue){try{Mo=0;var pt=on(re,Q,fe,Ue);return ds=null,pt}catch(dt){if(dt===fs||dt===kl)throw dt;var Kt=di(29,dt,null,re.mode);return Kt.lanes=Ue,Kt.return=re,Kt}finally{}}}var Dr=Ip(!0),zp=Ip(!1),ja=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wa(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,($t&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,i=zl(t),yp(t,null,r),i}return Il(t,l,i,r),zl(t)}function To(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,Un(t,r)}}function mf(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var d=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?d=p=b:p=p.next=b,r=r.next}while(r!==null);p===null?d=p=i:p=p.next=i}else d=p=i;r={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var gf=!1;function Ao(){if(gf){var t=us;if(t!==null)throw t}}function wo(t,i,r,l){gf=!1;var d=t.updateQueue;ja=!1;var p=d.firstBaseUpdate,b=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var X=R,de=X.next;X.next=null,b===null?p=de:b.next=de,b=X;var Ce=t.alternate;Ce!==null&&(Ce=Ce.updateQueue,R=Ce.lastBaseUpdate,R!==b&&(R===null?Ce.firstBaseUpdate=de:R.next=de,Ce.lastBaseUpdate=X))}if(p!==null){var Oe=d.baseState;b=0,Ce=de=X=null,R=p;do{var ge=R.lane&-536870913,Se=ge!==R.lane;if(Se?(Ft&ge)===ge:(l&ge)===ge){ge!==0&&ge===cs&&(gf=!0),Ce!==null&&(Ce=Ce.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var ot=t,St=R;ge=i;var on=r;switch(St.tag){case 1:if(ot=St.payload,typeof ot=="function"){Oe=ot.call(on,Oe,ge);break e}Oe=ot;break e;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=St.payload,ge=typeof ot=="function"?ot.call(on,Oe,ge):ot,ge==null)break e;Oe=g({},Oe,ge);break e;case 2:ja=!0}}ge=R.callback,ge!==null&&(t.flags|=64,Se&&(t.flags|=8192),Se=d.callbacks,Se===null?d.callbacks=[ge]:Se.push(ge))}else Se={lane:ge,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Ce===null?(de=Ce=Se,X=Oe):Ce=Ce.next=Se,b|=ge;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;Se=R,R=Se.next,Se.next=null,d.lastBaseUpdate=Se,d.shared.pending=null}}while(!0);Ce===null&&(X=Oe),d.baseState=X,d.firstBaseUpdate=de,d.lastBaseUpdate=Ce,p===null&&(d.shared.lanes=0),Qa|=b,t.lanes=b,t.memoizedState=Oe}}function Fp(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Bp(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Fp(r[t],i)}var hs=z(null),Yl=z(0);function Hp(t,i){t=ma,he(Yl,t),he(hs,i),ma=t|i.baseLanes}function xf(){he(Yl,ma),he(hs,hs.current)}function vf(){ma=Yl.current,ee(hs),ee(Yl)}var hi=z(null),wi=null;function Ya(t){var i=t.alternate;he(Sn,Sn.current&1),he(hi,t),wi===null&&(i===null||hs.current!==null||i.memoizedState!==null)&&(wi=t)}function _f(t){he(Sn,Sn.current),he(hi,t),wi===null&&(wi=t)}function Gp(t){t.tag===22?(he(Sn,Sn.current),he(hi,t),wi===null&&(wi=t)):qa()}function qa(){he(Sn,Sn.current),he(hi,hi.current)}function pi(t){ee(hi),wi===t&&(wi=null),ee(Sn)}var Sn=z(0);function ql(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Td(r)||Ad(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oa=0,Ct=null,rn=null,wn=null,Zl=!1,ps=!1,Nr=!1,Kl=0,Ro=0,ms=null,lb=0;function vn(){throw Error(a(321))}function yf(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!fi(t[r],i[r]))return!1;return!0}function bf(t,i,r,l,d,p){return oa=p,Ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?Em:If,Nr=!1,p=r(l,d),Nr=!1,ps&&(p=kp(i,r,l,d)),Vp(t),p}function Vp(t){I.H=No;var i=rn!==null&&rn.next!==null;if(oa=0,wn=rn=Ct=null,Zl=!1,Ro=0,ms=null,i)throw Error(a(300));t===null||Rn||(t=t.dependencies,t!==null&&Hl(t)&&(Rn=!0))}function kp(t,i,r,l){Ct=t;var d=0;do{if(ps&&(ms=null),Ro=0,ps=!1,25<=d)throw Error(a(301));if(d+=1,wn=rn=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}I.H=Tm,p=i(r,l)}while(ps);return p}function cb(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Co(i):i,t=t.useState()[0],(rn!==null?rn.memoizedState:null)!==t&&(Ct.flags|=1024),i}function Sf(){var t=Kl!==0;return Kl=0,t}function Mf(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function Ef(t){if(Zl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Zl=!1}oa=0,wn=rn=Ct=null,ps=!1,Ro=Kl=0,ms=null}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Ct.memoizedState=wn=t:wn=wn.next=t,wn}function Mn(){if(rn===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var i=wn===null?Ct.memoizedState:wn.next;if(i!==null)wn=i,rn=t;else{if(t===null)throw Ct.alternate===null?Error(a(467)):Error(a(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},wn===null?Ct.memoizedState=wn=t:wn=wn.next=t}return wn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var i=Ro;return Ro+=1,ms===null&&(ms=[]),t=Up(ms,t,i),i=Ct,(wn===null?i.memoizedState:wn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Em:If),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===D)return Wn(t)}throw Error(a(438,String(t)))}function Tf(t){var i=null,r=Ct.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=Ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Ql(),Ct.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=A;return i.index++,r}function la(t,i){return typeof i=="function"?i(t):i}function $l(t){var i=Mn();return Af(i,rn,t)}function Af(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var d=t.baseQueue,p=l.pending;if(p!==null){if(d!==null){var b=d.next;d.next=p.next,p.next=b}i.baseQueue=d=p,l.pending=null}if(p=t.baseState,d===null)t.memoizedState=p;else{i=d.next;var R=b=null,X=null,de=i,Ce=!1;do{var Oe=de.lane&-536870913;if(Oe!==de.lane?(Ft&Oe)===Oe:(oa&Oe)===Oe){var ge=de.revertLane;if(ge===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),Oe===cs&&(Ce=!0);else if((oa&ge)===ge){de=de.next,ge===cs&&(Ce=!0);continue}else Oe={lane:0,revertLane:de.revertLane,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},X===null?(R=X=Oe,b=p):X=X.next=Oe,Ct.lanes|=ge,Qa|=ge;Oe=de.action,Nr&&r(p,Oe),p=de.hasEagerState?de.eagerState:r(p,Oe)}else ge={lane:Oe,revertLane:de.revertLane,gesture:de.gesture,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},X===null?(R=X=ge,b=p):X=X.next=ge,Ct.lanes|=Oe,Qa|=Oe;de=de.next}while(de!==null&&de!==i);if(X===null?b=p:X.next=R,!fi(p,t.memoizedState)&&(Rn=!0,Ce&&(r=us,r!==null)))throw r;t.memoizedState=p,t.baseState=b,t.baseQueue=X,l.lastRenderedState=p}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function wf(t){var i=Mn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,d=r.pending,p=i.memoizedState;if(d!==null){r.pending=null;var b=d=d.next;do p=t(p,b.action),b=b.next;while(b!==d);fi(p,i.memoizedState)||(Rn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),r.lastRenderedState=p}return[p,l]}function jp(t,i,r){var l=Ct,d=Mn(),p=jt;if(p){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!fi((rn||d).memoizedState,r);if(b&&(d.memoizedState=r,Rn=!0),d=d.queue,Df(Yp.bind(null,l,d,t),[t]),d.getSnapshot!==i||b||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,gs(9,{destroy:void 0},Wp.bind(null,l,d,r,i),null),un===null)throw Error(a(349));p||(oa&127)!==0||Xp(l,i,r)}return r}function Xp(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=Ct.updateQueue,i===null?(i=Ql(),Ct.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function Wp(t,i,r,l){i.value=r,i.getSnapshot=l,qp(i)&&Zp(t)}function Yp(t,i,r){return r(function(){qp(i)&&Zp(t)})}function qp(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!fi(t,r)}catch{return!0}}function Zp(t){var i=Sr(t,2);i!==null&&li(i,t,2)}function Rf(t){var i=$n();if(typeof t=="function"){var r=t;if(t=r(),Nr){Le(!0);try{r()}finally{Le(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},i}function Kp(t,i,r,l){return t.baseState=r,Af(t,rn,typeof l=="function"?l:la)}function ub(t,i,r,l,d){if(nc(t))throw Error(a(485));if(t=i.action,t!==null){var p={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){p.listeners.push(b)}};I.T!==null?r(!0):p.isTransition=!1,l(p),r=i.pending,r===null?(p.next=i.pending=p,Qp(i,p)):(p.next=r.next,i.pending=r.next=p)}}function Qp(t,i){var r=i.action,l=i.payload,d=t.state;if(i.isTransition){var p=I.T,b={};I.T=b;try{var R=r(d,l),X=I.S;X!==null&&X(b,R),Jp(t,i,R)}catch(de){Cf(t,i,de)}finally{p!==null&&b.types!==null&&(p.types=b.types),I.T=p}}else try{p=r(d,l),Jp(t,i,p)}catch(de){Cf(t,i,de)}}function Jp(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){$p(t,i,l)},function(l){return Cf(t,i,l)}):$p(t,i,r)}function $p(t,i,r){i.status="fulfilled",i.value=r,em(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,Qp(t,r)))}function Cf(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,em(i),i=i.next;while(i!==l)}t.action=null}function em(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function tm(t,i){return i}function nm(t,i){if(jt){var r=un.formState;if(r!==null){e:{var l=Ct;if(jt){if(pn){t:{for(var d=pn,p=Ai;d.nodeType!==8;){if(!p){d=null;break t}if(d=Ri(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){pn=Ri(d.nextSibling),l=d.data==="F!";break e}}Va(l)}l=!1}l&&(i=r[0])}}return r=$n(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:i},r.queue=l,r=bm.bind(null,Ct,l),l.dispatch=r,l=Rf(!1),p=Pf.bind(null,Ct,!1,l.queue),l=$n(),d={state:i,dispatch:null,action:t,pending:null},l.queue=d,r=ub.bind(null,Ct,d,p,r),d.dispatch=r,l.memoizedState=t,[i,r,!1]}function im(t){var i=Mn();return am(i,rn,t)}function am(t,i,r){if(i=Af(t,i,tm)[0],t=$l(la)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Co(i)}catch(b){throw b===fs?kl:b}else l=i;i=Mn();var d=i.queue,p=d.dispatch;return r!==i.memoizedState&&(Ct.flags|=2048,gs(9,{destroy:void 0},fb.bind(null,d,r),null)),[l,p,t]}function fb(t,i){t.action=i}function rm(t){var i=Mn(),r=rn;if(r!==null)return am(i,r,t);Mn(),i=i.memoizedState,r=Mn();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function gs(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=Ct.updateQueue,i===null&&(i=Ql(),Ct.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function sm(){return Mn().memoizedState}function ec(t,i,r,l){var d=$n();Ct.flags|=t,d.memoizedState=gs(1|i,{destroy:void 0},r,l===void 0?null:l)}function tc(t,i,r,l){var d=Mn();l=l===void 0?null:l;var p=d.memoizedState.inst;rn!==null&&l!==null&&yf(l,rn.memoizedState.deps)?d.memoizedState=gs(i,p,r,l):(Ct.flags|=t,d.memoizedState=gs(1|i,p,r,l))}function om(t,i){ec(8390656,8,t,i)}function Df(t,i){tc(2048,8,t,i)}function db(t){Ct.flags|=4;var i=Ct.updateQueue;if(i===null)i=Ql(),Ct.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function lm(t){var i=Mn().memoizedState;return db({ref:i,nextImpl:t}),function(){if(($t&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function cm(t,i){return tc(4,2,t,i)}function um(t,i){return tc(4,4,t,i)}function fm(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dm(t,i,r){r=r!=null?r.concat([t]):null,tc(4,4,fm.bind(null,i,t),r)}function Nf(){}function hm(t,i){var r=Mn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&yf(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function pm(t,i){var r=Mn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&yf(i,l[1]))return l[0];if(l=t(),Nr){Le(!0);try{t()}finally{Le(!1)}}return r.memoizedState=[l,i],l}function Lf(t,i,r){return r===void 0||(oa&1073741824)!==0&&(Ft&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=mg(),Ct.lanes|=t,Qa|=t,r)}function mm(t,i,r,l){return fi(r,i)?r:hs.current!==null?(t=Lf(t,r,l),fi(t,i)||(Rn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(Ft&261930)===0?(Rn=!0,t.memoizedState=r):(t=mg(),Ct.lanes|=t,Qa|=t,i)}function gm(t,i,r,l,d){var p=Y.p;Y.p=p!==0&&8>p?p:8;var b=I.T,R={};I.T=R,Pf(t,!1,i,r);try{var X=d(),de=I.S;if(de!==null&&de(R,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var Ce=ob(X,l);Do(t,i,Ce,xi(t))}else Do(t,i,l,xi(t))}catch(Oe){Do(t,i,{then:function(){},status:"rejected",reason:Oe},xi())}finally{Y.p=p,b!==null&&R.types!==null&&(b.types=R.types),I.T=b}}function hb(){}function Uf(t,i,r,l){if(t.tag!==5)throw Error(a(476));var d=xm(t).queue;gm(t,d,i,Z,r===null?hb:function(){return vm(t),r(l)})}function xm(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:Z},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function vm(t){var i=xm(t);i.next===null&&(i=t.alternate.memoizedState),Do(t,i.next.queue,{},xi())}function Of(){return Wn(Yo)}function _m(){return Mn().memoizedState}function ym(){return Mn().memoizedState}function pb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=xi();t=Xa(r);var l=Wa(i,t,r);l!==null&&(li(l,i,r),To(l,i,r)),i={cache:cf()},t.payload=i;return}i=i.return}}function mb(t,i,r){var l=xi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},nc(t)?Sm(i,r):(r=Qu(t,i,r,l),r!==null&&(li(r,t,l),Mm(r,i,l)))}function bm(t,i,r){var l=xi();Do(t,i,r,l)}function Do(t,i,r,l){var d={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(nc(t))Sm(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var b=i.lastRenderedState,R=p(b,r);if(d.hasEagerState=!0,d.eagerState=R,fi(R,b))return Il(t,i,d,0),un===null&&Pl(),!1}catch{}finally{}if(r=Qu(t,i,d,l),r!==null)return li(r,t,l),Mm(r,i,l),!0}return!1}function Pf(t,i,r,l){if(l={lane:2,revertLane:hd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},nc(t)){if(i)throw Error(a(479))}else i=Qu(t,r,l,2),i!==null&&li(i,t,2)}function nc(t){var i=t.alternate;return t===Ct||i!==null&&i===Ct}function Sm(t,i){ps=Zl=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function Mm(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,Un(t,r)}}var No={readContext:Wn,use:Jl,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn};No.useEffectEvent=vn;var Em={readContext:Wn,use:Jl,useCallback:function(t,i){return $n().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:om,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,ec(4194308,4,fm.bind(null,i,t),r)},useLayoutEffect:function(t,i){return ec(4194308,4,t,i)},useInsertionEffect:function(t,i){ec(4,2,t,i)},useMemo:function(t,i){var r=$n();i=i===void 0?null:i;var l=t();if(Nr){Le(!0);try{t()}finally{Le(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=$n();if(r!==void 0){var d=r(i);if(Nr){Le(!0);try{r(i)}finally{Le(!1)}}}else d=i;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=mb.bind(null,Ct,t),[l.memoizedState,t]},useRef:function(t){var i=$n();return t={current:t},i.memoizedState=t},useState:function(t){t=Rf(t);var i=t.queue,r=bm.bind(null,Ct,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Nf,useDeferredValue:function(t,i){var r=$n();return Lf(r,t,i)},useTransition:function(){var t=Rf(!1);return t=gm.bind(null,Ct,t.queue,!0,!1),$n().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=Ct,d=$n();if(jt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),un===null)throw Error(a(349));(Ft&127)!==0||Xp(l,i,r)}d.memoizedState=r;var p={value:r,getSnapshot:i};return d.queue=p,om(Yp.bind(null,l,p,t),[t]),l.flags|=2048,gs(9,{destroy:void 0},Wp.bind(null,l,p,r,i),null),r},useId:function(){var t=$n(),i=un.identifierPrefix;if(jt){var r=Yi,l=Wi;r=(l&~(1<<32-Ve(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Kl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=lb++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Of,useFormState:nm,useActionState:nm,useOptimistic:function(t){var i=$n();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Pf.bind(null,Ct,!0,r),r.dispatch=i,[t,i]},useMemoCache:Tf,useCacheRefresh:function(){return $n().memoizedState=pb.bind(null,Ct)},useEffectEvent:function(t){var i=$n(),r={impl:t};return i.memoizedState=r,function(){if(($t&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},If={readContext:Wn,use:Jl,useCallback:hm,useContext:Wn,useEffect:Df,useImperativeHandle:dm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:$l,useRef:sm,useState:function(){return $l(la)},useDebugValue:Nf,useDeferredValue:function(t,i){var r=Mn();return mm(r,rn.memoizedState,t,i)},useTransition:function(){var t=$l(la)[0],i=Mn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:jp,useId:_m,useHostTransitionStatus:Of,useFormState:im,useActionState:im,useOptimistic:function(t,i){var r=Mn();return Kp(r,rn,t,i)},useMemoCache:Tf,useCacheRefresh:ym};If.useEffectEvent=lm;var Tm={readContext:Wn,use:Jl,useCallback:hm,useContext:Wn,useEffect:Df,useImperativeHandle:dm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:wf,useRef:sm,useState:function(){return wf(la)},useDebugValue:Nf,useDeferredValue:function(t,i){var r=Mn();return rn===null?Lf(r,t,i):mm(r,rn.memoizedState,t,i)},useTransition:function(){var t=wf(la)[0],i=Mn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:jp,useId:_m,useHostTransitionStatus:Of,useFormState:rm,useActionState:rm,useOptimistic:function(t,i){var r=Mn();return rn!==null?Kp(r,rn,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:ym};Tm.useEffectEvent=lm;function zf(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ff={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=xi(),d=Xa(l);d.payload=i,r!=null&&(d.callback=r),i=Wa(t,d,l),i!==null&&(li(i,t,l),To(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=xi(),d=Xa(l);d.tag=1,d.payload=i,r!=null&&(d.callback=r),i=Wa(t,d,l),i!==null&&(li(i,t,l),To(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=xi(),l=Xa(r);l.tag=2,i!=null&&(l.callback=i),i=Wa(t,l,r),i!==null&&(li(i,t,r),To(i,t,r))}};function Am(t,i,r,l,d,p,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,b):i.prototype&&i.prototype.isPureReactComponent?!xo(r,l)||!xo(d,p):!0}function wm(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&Ff.enqueueReplaceState(i,i.state,null)}function Lr(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=g({},r));for(var d in t)r[d]===void 0&&(r[d]=t[d])}return r}function Rm(t){Ol(t)}function Cm(t){console.error(t)}function Dm(t){Ol(t)}function ic(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Nm(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Bf(t,i,r){return r=Xa(r),r.tag=3,r.payload={element:null},r.callback=function(){ic(t,i)},r}function Lm(t){return t=Xa(t),t.tag=3,t}function Um(t,i,r,l){var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var p=l.value;t.payload=function(){return d(p)},t.callback=function(){Nm(i,r,l)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Nm(i,r,l),typeof d!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function gb(t,i,r,l,d){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&ls(i,r,d,!0),r=hi.current,r!==null){switch(r.tag){case 31:case 13:return wi===null?mc():r.alternate===null&&_n===0&&(_n=3),r.flags&=-257,r.flags|=65536,r.lanes=d,l===jl?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),ud(t,l,d)),!1;case 22:return r.flags|=65536,l===jl?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),ud(t,l,d)),!1}throw Error(a(435,r.tag))}return ud(t,l,d),mc(),!1}if(jt)return i=hi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,l!==af&&(t=Error(a(422),{cause:l}),yo(Mi(t,r)))):(l!==af&&(i=Error(a(423),{cause:l}),yo(Mi(i,r))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=Mi(l,r),d=Bf(t.stateNode,l,d),mf(t,d),_n!==4&&(_n=2)),!1;var p=Error(a(520),{cause:l});if(p=Mi(p,r),Bo===null?Bo=[p]:Bo.push(p),_n!==4&&(_n=2),i===null)return!0;l=Mi(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=d&-d,r.lanes|=t,t=Bf(r.stateNode,l,t),mf(r,t),!1;case 1:if(i=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ja===null||!Ja.has(p))))return r.flags|=65536,d&=-d,r.lanes|=d,d=Lm(d),Um(d,t,r,l),mf(r,d),!1}r=r.return}while(r!==null);return!1}var Hf=Error(a(461)),Rn=!1;function Yn(t,i,r,l){i.child=t===null?zp(i,null,r,l):Dr(i,t.child,r,l)}function Om(t,i,r,l,d){r=r.render;var p=i.ref;if("ref"in l){var b={};for(var R in l)R!=="ref"&&(b[R]=l[R])}else b=l;return Ar(i),l=bf(t,i,r,b,p,d),R=Sf(),t!==null&&!Rn?(Mf(t,i,d),ca(t,i,d)):(jt&&R&&tf(i),i.flags|=1,Yn(t,i,l,d),i.child)}function Pm(t,i,r,l,d){if(t===null){var p=r.type;return typeof p=="function"&&!Ju(p)&&p.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=p,Im(t,i,p,l,d)):(t=Fl(r.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!qf(t,d)){var b=p.memoizedProps;if(r=r.compare,r=r!==null?r:xo,r(b,l)&&t.ref===i.ref)return ca(t,i,d)}return i.flags|=1,t=ia(p,l),t.ref=i.ref,t.return=i,i.child=t}function Im(t,i,r,l,d){if(t!==null){var p=t.memoizedProps;if(xo(p,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=p,qf(t,d))(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,ca(t,i,d)}return Gf(t,i,r,l,d)}function zm(t,i,r,l){var d=l.children,p=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|r:r,t!==null){for(l=i.child=t.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~p}else l=0,i.child=null;return Fm(t,i,p,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vl(i,p!==null?p.cachePool:null),p!==null?Hp(i,p):xf(),Gp(i);else return l=i.lanes=536870912,Fm(t,i,p!==null?p.baseLanes|r:r,r,l)}else p!==null?(Vl(i,p.cachePool),Hp(i,p),qa(),i.memoizedState=null):(t!==null&&Vl(i,null),xf(),qa());return Yn(t,i,d,r),i.child}function Lo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Fm(t,i,r,l,d){var p=ff();return p=p===null?null:{parent:An._currentValue,pool:p},i.memoizedState={baseLanes:r,cachePool:p},t!==null&&Vl(i,null),xf(),Gp(i),t!==null&&ls(t,i,l,!0),i.childLanes=d,null}function ac(t,i){return i=sc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Bm(t,i,r){return Dr(i,t.child,null,r),t=ac(i,i.pendingProps),t.flags|=2,pi(i),i.memoizedState=null,t}function xb(t,i,r){var l=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(jt){if(l.mode==="hidden")return t=ac(i,l),i.lanes=536870912,Lo(null,t);if(_f(i),(t=pn)?(t=Qg(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:Wi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},r=Sp(t),r.return=i,i.child=r,Xn=i,pn=null)):t=null,t===null)throw Va(i);return i.lanes=536870912,null}return ac(i,l)}var p=t.memoizedState;if(p!==null){var b=p.dehydrated;if(_f(i),d)if(i.flags&256)i.flags&=-257,i=Bm(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Rn||ls(t,i,r,!1),d=(r&t.childLanes)!==0,Rn||d){if(l=un,l!==null&&(b=bn(l,r),b!==0&&b!==p.retryLane))throw p.retryLane=b,Sr(t,b),li(l,t,b),Hf;mc(),i=Bm(t,i,r)}else t=p.treeContext,pn=Ri(b.nextSibling),Xn=i,jt=!0,Ga=null,Ai=!1,t!==null&&Tp(i,t),i=ac(i,l),i.flags|=4096;return i}return t=ia(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function rc(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Gf(t,i,r,l,d){return Ar(i),r=bf(t,i,r,l,void 0,d),l=Sf(),t!==null&&!Rn?(Mf(t,i,d),ca(t,i,d)):(jt&&l&&tf(i),i.flags|=1,Yn(t,i,r,d),i.child)}function Hm(t,i,r,l,d,p){return Ar(i),i.updateQueue=null,r=kp(i,l,r,d),Vp(t),l=Sf(),t!==null&&!Rn?(Mf(t,i,p),ca(t,i,p)):(jt&&l&&tf(i),i.flags|=1,Yn(t,i,r,p),i.child)}function Gm(t,i,r,l,d){if(Ar(i),i.stateNode===null){var p=as,b=r.contextType;typeof b=="object"&&b!==null&&(p=Wn(b)),p=new r(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Ff,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},hf(i),b=r.contextType,p.context=typeof b=="object"&&b!==null?Wn(b):as,p.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(zf(i,r,b,l),p.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(b=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),b!==p.state&&Ff.enqueueReplaceState(p,p.state,null),wo(i,l,p,d),Ao(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){p=i.stateNode;var R=i.memoizedProps,X=Lr(r,R);p.props=X;var de=p.context,Ce=r.contextType;b=as,typeof Ce=="object"&&Ce!==null&&(b=Wn(Ce));var Oe=r.getDerivedStateFromProps;Ce=typeof Oe=="function"||typeof p.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,Ce||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(R||de!==b)&&wm(i,p,l,b),ja=!1;var ge=i.memoizedState;p.state=ge,wo(i,l,p,d),Ao(),de=i.memoizedState,R||ge!==de||ja?(typeof Oe=="function"&&(zf(i,r,Oe,l),de=i.memoizedState),(X=ja||Am(i,r,X,l,ge,de,b))?(Ce||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=de),p.props=l,p.state=de,p.context=b,l=X):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,pf(t,i),b=i.memoizedProps,Ce=Lr(r,b),p.props=Ce,Oe=i.pendingProps,ge=p.context,de=r.contextType,X=as,typeof de=="object"&&de!==null&&(X=Wn(de)),R=r.getDerivedStateFromProps,(de=typeof R=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b!==Oe||ge!==X)&&wm(i,p,l,X),ja=!1,ge=i.memoizedState,p.state=ge,wo(i,l,p,d),Ao();var Se=i.memoizedState;b!==Oe||ge!==Se||ja||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof R=="function"&&(zf(i,r,R,l),Se=i.memoizedState),(Ce=ja||Am(i,r,Ce,l,ge,Se,X)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?(de||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,Se,X),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,Se,X)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||b===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Se),p.props=l,p.state=Se,p.context=X,l=Ce):(typeof p.componentDidUpdate!="function"||b===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return p=l,rc(t,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,t!==null&&l?(i.child=Dr(i,t.child,null,d),i.child=Dr(i,null,r,d)):Yn(t,i,r,d),i.memoizedState=p.state,t=i.child):t=ca(t,i,d),t}function Vm(t,i,r,l){return Er(),i.flags|=256,Yn(t,i,r,l),i.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(t){return{baseLanes:t,cachePool:Np()}}function jf(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=gi),t}function km(t,i,r){var l=i.pendingProps,d=!1,p=(i.flags&128)!==0,b;if((b=p)||(b=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),b&&(d=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(jt){if(d?Ya(i):qa(),(t=pn)?(t=Qg(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:Wi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},r=Sp(t),r.return=i,i.child=r,Xn=i,pn=null)):t=null,t===null)throw Va(i);return Ad(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,d?(qa(),d=i.mode,R=sc({mode:"hidden",children:R},d),l=Mr(l,d,r,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=kf(r),l.childLanes=jf(t,b,r),i.memoizedState=Vf,Lo(null,l)):(Ya(i),Xf(i,R))}var X=t.memoizedState;if(X!==null&&(R=X.dehydrated,R!==null)){if(p)i.flags&256?(Ya(i),i.flags&=-257,i=Wf(t,i,r)):i.memoizedState!==null?(qa(),i.child=t.child,i.flags|=128,i=null):(qa(),R=l.fallback,d=i.mode,l=sc({mode:"visible",children:l.children},d),R=Mr(R,d,r,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Dr(i,t.child,null,r),l=i.child,l.memoizedState=kf(r),l.childLanes=jf(t,b,r),i.memoizedState=Vf,i=Lo(null,l));else if(Ya(i),Ad(R)){if(b=R.nextSibling&&R.nextSibling.dataset,b)var de=b.dgst;b=de,l=Error(a(419)),l.stack="",l.digest=b,yo({value:l,source:null,stack:null}),i=Wf(t,i,r)}else if(Rn||ls(t,i,r,!1),b=(r&t.childLanes)!==0,Rn||b){if(b=un,b!==null&&(l=bn(b,r),l!==0&&l!==X.retryLane))throw X.retryLane=l,Sr(t,l),li(b,t,l),Hf;Td(R)||mc(),i=Wf(t,i,r)}else Td(R)?(i.flags|=192,i.child=t.child,i=null):(t=X.treeContext,pn=Ri(R.nextSibling),Xn=i,jt=!0,Ga=null,Ai=!1,t!==null&&Tp(i,t),i=Xf(i,l.children),i.flags|=4096);return i}return d?(qa(),R=l.fallback,d=i.mode,X=t.child,de=X.sibling,l=ia(X,{mode:"hidden",children:l.children}),l.subtreeFlags=X.subtreeFlags&65011712,de!==null?R=ia(de,R):(R=Mr(R,d,r,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,Lo(null,l),l=i.child,R=t.child.memoizedState,R===null?R=kf(r):(d=R.cachePool,d!==null?(X=An._currentValue,d=d.parent!==X?{parent:X,pool:X}:d):d=Np(),R={baseLanes:R.baseLanes|r,cachePool:d}),l.memoizedState=R,l.childLanes=jf(t,b,r),i.memoizedState=Vf,Lo(t.child,l)):(Ya(i),r=t.child,t=r.sibling,r=ia(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=r,i.memoizedState=null,r)}function Xf(t,i){return i=sc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function sc(t,i){return t=di(22,t,null,i),t.lanes=0,t}function Wf(t,i,r){return Dr(i,t.child,null,r),t=Xf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function jm(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),of(t.return,i,r)}function Yf(t,i,r,l,d,p){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:d,treeForkCount:p}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=r,b.tailMode=d,b.treeForkCount=p)}function Xm(t,i,r){var l=i.pendingProps,d=l.revealOrder,p=l.tail;l=l.children;var b=Sn.current,R=(b&2)!==0;if(R?(b=b&1|2,i.flags|=128):b&=1,he(Sn,b),Yn(t,i,l,r),l=jt?_o:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,r,i);else if(t.tag===19)jm(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(r=i.child,d=null;r!==null;)t=r.alternate,t!==null&&ql(t)===null&&(d=r),r=r.sibling;r=d,r===null?(d=i.child,i.child=null):(d=r.sibling,r.sibling=null),Yf(i,!1,d,r,p,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&ql(t)===null){i.child=d;break}t=d.sibling,d.sibling=r,r=d,d=t}Yf(i,!0,r,null,p,l);break;case"together":Yf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ca(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Qa|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(ls(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=ia(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=ia(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function qf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function vb(t,i,r){switch(i.tag){case 3:He(i,i.stateNode.containerInfo),ka(i,An,t.memoizedState.cache),Er();break;case 27:case 5:qe(i);break;case 4:He(i,i.stateNode.containerInfo);break;case 10:ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,_f(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ya(i),i.flags|=128,null):(r&i.child.childLanes)!==0?km(t,i,r):(Ya(i),t=ca(t,i,r),t!==null?t.sibling:null);Ya(i);break;case 19:var d=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(ls(t,i,r,!1),l=(r&i.childLanes)!==0),d){if(l)return Xm(t,i,r);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),he(Sn,Sn.current),l)break;return null;case 22:return i.lanes=0,zm(t,i,r,i.pendingProps);case 24:ka(i,An,t.memoizedState.cache)}return ca(t,i,r)}function Wm(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)Rn=!0;else{if(!qf(t,r)&&(i.flags&128)===0)return Rn=!1,vb(t,i,r);Rn=(t.flags&131072)!==0}else Rn=!1,jt&&(i.flags&1048576)!==0&&Ep(i,_o,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Rr(i.elementType),i.type=t,typeof t=="function")Ju(t)?(l=Lr(t,l),i.tag=1,i=Gm(null,i,t,l,r)):(i.tag=0,i=Gf(null,i,t,l,r));else{if(t!=null){var d=t.$$typeof;if(d===O){i.tag=11,i=Om(null,i,t,l,r);break e}else if(d===B){i.tag=14,i=Pm(null,i,t,l,r);break e}}throw i=J(t)||t,Error(a(306,i,""))}}return i;case 0:return Gf(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,d=Lr(l,i.pendingProps),Gm(t,i,l,d,r);case 3:e:{if(He(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var p=i.memoizedState;d=p.element,pf(t,i),wo(i,l,null,r);var b=i.memoizedState;if(l=b.cache,ka(i,An,l),l!==p.cache&&lf(i,[An],r,!0),Ao(),l=b.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=Vm(t,i,l,r);break e}else if(l!==d){d=Mi(Error(a(424)),i),yo(d),i=Vm(t,i,l,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pn=Ri(t.firstChild),Xn=i,jt=!0,Ga=null,Ai=!0,r=zp(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Er(),l===d){i=ca(t,i,r);break e}Yn(t,i,l,r)}i=i.child}return i;case 26:return rc(t,i),t===null?(r=ix(i.type,null,i.pendingProps,null))?i.memoizedState=r:jt||(r=i.type,t=i.pendingProps,l=Sc(te.current).createElement(r),l[lt]=i,l[xt]=t,qn(l,r,t),le(l),i.stateNode=l):i.memoizedState=ix(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return qe(i),t===null&&jt&&(l=i.stateNode=ex(i.type,i.pendingProps,te.current),Xn=i,Ai=!0,d=pn,nr(i.type)?(wd=d,pn=Ri(l.firstChild)):pn=d),Yn(t,i,i.pendingProps.children,r),rc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&jt&&((d=l=pn)&&(l=qb(l,i.type,i.pendingProps,Ai),l!==null?(i.stateNode=l,Xn=i,pn=Ri(l.firstChild),Ai=!1,d=!0):d=!1),d||Va(i)),qe(i),d=i.type,p=i.pendingProps,b=t!==null?t.memoizedProps:null,l=p.children,Sd(d,p)?l=null:b!==null&&Sd(d,b)&&(i.flags|=32),i.memoizedState!==null&&(d=bf(t,i,cb,null,null,r),Yo._currentValue=d),rc(t,i),Yn(t,i,l,r),i.child;case 6:return t===null&&jt&&((t=r=pn)&&(r=Zb(r,i.pendingProps,Ai),r!==null?(i.stateNode=r,Xn=i,pn=null,t=!0):t=!1),t||Va(i)),null;case 13:return km(t,i,r);case 4:return He(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Dr(i,null,l,r):Yn(t,i,l,r),i.child;case 11:return Om(t,i,i.type,i.pendingProps,r);case 7:return Yn(t,i,i.pendingProps,r),i.child;case 8:return Yn(t,i,i.pendingProps.children,r),i.child;case 12:return Yn(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,ka(i,i.type,l.value),Yn(t,i,l.children,r),i.child;case 9:return d=i.type._context,l=i.pendingProps.children,Ar(i),d=Wn(d),l=l(d),i.flags|=1,Yn(t,i,l,r),i.child;case 14:return Pm(t,i,i.type,i.pendingProps,r);case 15:return Im(t,i,i.type,i.pendingProps,r);case 19:return Xm(t,i,r);case 31:return xb(t,i,r);case 22:return zm(t,i,r,i.pendingProps);case 24:return Ar(i),l=Wn(An),t===null?(d=ff(),d===null&&(d=un,p=cf(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=r),d=p),i.memoizedState={parent:l,cache:d},hf(i),ka(i,An,d)):((t.lanes&r)!==0&&(pf(t,i),wo(i,null,null,r),Ao()),d=t.memoizedState,p=i.memoizedState,d.parent!==l?(d={parent:l,cache:l},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),ka(i,An,l)):(l=p.cache,ka(i,An,l),l!==d.cache&&lf(i,[An],r,!0))),Yn(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ua(t){t.flags|=4}function Zf(t,i,r,l,d){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(_g())t.flags|=8192;else throw Cr=jl,df}else t.flags&=-16777217}function Ym(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!lx(i))if(_g())t.flags|=8192;else throw Cr=jl,df}function oc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?ut():536870912,t.lanes|=i,ys|=i)}function Uo(t,i){if(!jt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var d=t.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)r|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function _b(t,i,r){var l=i.pendingProps;switch(nf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return mn(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),sa(An),Ge(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(os(i)?ua(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rf())),mn(i),null;case 26:var d=i.type,p=i.memoizedState;return t===null?(ua(i),p!==null?(mn(i),Ym(i,p)):(mn(i),Zf(i,d,null,l,r))):p?p!==t.memoizedState?(ua(i),mn(i),Ym(i,p)):(mn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ua(i),mn(i),Zf(i,d,t,l,r)),null;case 27:if(Ke(i),r=te.current,d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ua(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return mn(i),null}t=Ee.current,os(i)?Ap(i):(t=ex(d,l,r),i.stateNode=t,ua(i))}return mn(i),null;case 5:if(Ke(i),d=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ua(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return mn(i),null}if(p=Ee.current,os(i))Ap(i);else{var b=Sc(te.current);switch(p){case 1:p=b.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=b.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=b.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?b.createElement(d,{is:l.is}):b.createElement(d)}}p[lt]=i,p[xt]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)p.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=p;e:switch(qn(p,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ua(i)}}return mn(i),Zf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ua(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=te.current,os(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,d=Xn,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[lt]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||kg(t.nodeValue,r)),t||Va(i,!0)}else t=Sc(t).createTextNode(l),t[lt]=i,i.stateNode=t}return mn(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=os(i),r!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[lt]=i}else Er(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),t=!1}else r=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(pi(i),i):(pi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return mn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=os(i),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[lt]=i}else Er(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),d=!1}else d=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(pi(i),i):(pi(i),null)}return pi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==d&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),oc(i,i.updateQueue),mn(i),null);case 4:return Ge(),t===null&&xd(i.stateNode.containerInfo),mn(i),null;case 10:return sa(i.type),mn(i),null;case 19:if(ee(Sn),l=i.memoizedState,l===null)return mn(i),null;if(d=(i.flags&128)!==0,p=l.rendering,p===null)if(d)Uo(l,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(p=ql(t),p!==null){for(i.flags|=128,Uo(l,!1),t=p.updateQueue,i.updateQueue=t,oc(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)bp(r,t),r=r.sibling;return he(Sn,Sn.current&1|2),jt&&aa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>dc&&(i.flags|=128,d=!0,Uo(l,!1),i.lanes=4194304)}else{if(!d)if(t=ql(p),t!==null){if(i.flags|=128,d=!0,t=t.updateQueue,i.updateQueue=t,oc(i,t),Uo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!jt)return mn(i),null}else 2*T()-l.renderingStartTime>dc&&r!==536870912&&(i.flags|=128,d=!0,Uo(l,!1),i.lanes=4194304);l.isBackwards?(p.sibling=i.child,i.child=p):(t=l.last,t!==null?t.sibling=p:i.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,r=Sn.current,he(Sn,d?r&1|2:r&1),jt&&aa(i,l.treeForkCount),t):(mn(i),null);case 22:case 23:return pi(i),vf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),r=i.updateQueue,r!==null&&oc(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&ee(wr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),sa(An),mn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function yb(t,i){switch(nf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return sa(An),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ke(i),null;case 31:if(i.memoizedState!==null){if(pi(i),i.alternate===null)throw Error(a(340));Er()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(pi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Er()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ee(Sn),null;case 4:return Ge(),null;case 10:return sa(i.type),null;case 22:case 23:return pi(i),vf(),t!==null&&ee(wr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return sa(An),null;case 25:return null;default:return null}}function qm(t,i){switch(nf(i),i.tag){case 3:sa(An),Ge();break;case 26:case 27:case 5:Ke(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&pi(i);break;case 13:pi(i);break;case 19:ee(Sn);break;case 10:sa(i.type);break;case 22:case 23:pi(i),vf(),t!==null&&ee(wr);break;case 24:sa(An)}}function Oo(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var d=l.next;r=d;do{if((r.tag&t)===t){l=void 0;var p=r.create,b=r.inst;l=p(),b.destroy=l}r=r.next}while(r!==d)}}catch(R){nn(i,i.return,R)}}function Za(t,i,r){try{var l=i.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var p=d.next;l=p;do{if((l.tag&t)===t){var b=l.inst,R=b.destroy;if(R!==void 0){b.destroy=void 0,d=i;var X=r,de=R;try{de()}catch(Ce){nn(d,X,Ce)}}}l=l.next}while(l!==p)}}catch(Ce){nn(i,i.return,Ce)}}function Zm(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{Bp(i,r)}catch(l){nn(t,t.return,l)}}}function Km(t,i,r){r.props=Lr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){nn(t,i,l)}}function Po(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(d){nn(t,i,d)}}function qi(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(d){nn(t,i,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(d){nn(t,i,d)}else r.current=null}function Qm(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(d){nn(t,t.return,d)}}function Kf(t,i,r){try{var l=t.stateNode;Vb(l,t.type,r,i),l[xt]=i}catch(d){nn(t,t.return,d)}}function Jm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&nr(t.type)||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ta));else if(l!==4&&(l===27&&nr(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(Jf(t,i,r),t=t.sibling;t!==null;)Jf(t,i,r),t=t.sibling}function lc(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&nr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(lc(t,i,r),t=t.sibling;t!==null;)lc(t,i,r),t=t.sibling}function $m(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);qn(i,l,r),i[lt]=t,i[xt]=r}catch(p){nn(t,t.return,p)}}var fa=!1,Cn=!1,$f=!1,eg=typeof WeakSet=="function"?WeakSet:Set,Vn=null;function bb(t,i){if(t=t.containerInfo,yd=Cc,t=dp(t),Xu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break e}var b=0,R=-1,X=-1,de=0,Ce=0,Oe=t,ge=null;t:for(;;){for(var Se;Oe!==r||d!==0&&Oe.nodeType!==3||(R=b+d),Oe!==p||l!==0&&Oe.nodeType!==3||(X=b+l),Oe.nodeType===3&&(b+=Oe.nodeValue.length),(Se=Oe.firstChild)!==null;)ge=Oe,Oe=Se;for(;;){if(Oe===t)break t;if(ge===r&&++de===d&&(R=b),ge===p&&++Ce===l&&(X=b),(Se=Oe.nextSibling)!==null)break;Oe=ge,ge=Oe.parentNode}Oe=Se}r=R===-1||X===-1?null:{start:R,end:X}}else r=null}r=r||{start:0,end:0}}else r=null;for(bd={focusedElem:t,selectionRange:r},Cc=!1,Vn=i;Vn!==null;)if(i=Vn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Vn=t;else for(;Vn!==null;){switch(i=Vn,p=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)d=t[r],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,r=i,d=p.memoizedProps,p=p.memoizedState,l=r.stateNode;try{var ot=Lr(r.type,d);t=l.getSnapshotBeforeUpdate(ot,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(St){nn(r,r.return,St)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Ed(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ed(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Vn=t;break}Vn=i.return}}function tg(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ha(t,r),l&4&&Oo(5,r);break;case 1:if(ha(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(b){nn(r,r.return,b)}else{var d=Lr(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(d,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){nn(r,r.return,b)}}l&64&&Zm(r),l&512&&Po(r,r.return);break;case 3:if(ha(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Bp(t,i)}catch(b){nn(r,r.return,b)}}break;case 27:i===null&&l&4&&$m(r);case 26:case 5:ha(t,r),i===null&&l&4&&Qm(r),l&512&&Po(r,r.return);break;case 12:ha(t,r);break;case 31:ha(t,r),l&4&&ag(t,r);break;case 13:ha(t,r),l&4&&rg(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Db.bind(null,r),Kb(t,r))));break;case 22:if(l=r.memoizedState!==null||fa,!l){i=i!==null&&i.memoizedState!==null||Cn,d=fa;var p=Cn;fa=l,(Cn=i)&&!p?pa(t,r,(r.subtreeFlags&8772)!==0):ha(t,r),fa=d,Cn=p}break;case 30:break;default:ha(t,r)}}function ng(t){var i=t.alternate;i!==null&&(t.alternate=null,ng(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&gn(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var xn=null,ai=!1;function da(t,i,r){for(r=r.child;r!==null;)ig(t,i,r),r=r.sibling}function ig(t,i,r){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(Re,r)}catch{}switch(r.tag){case 26:Cn||qi(r,i),da(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Cn||qi(r,i);var l=xn,d=ai;nr(r.type)&&(xn=r.stateNode,ai=!1),da(t,i,r),jo(r.stateNode),xn=l,ai=d;break;case 5:Cn||qi(r,i);case 6:if(l=xn,d=ai,xn=null,da(t,i,r),xn=l,ai=d,xn!==null)if(ai)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(r.stateNode)}catch(p){nn(r,i,p)}else try{xn.removeChild(r.stateNode)}catch(p){nn(r,i,p)}break;case 18:xn!==null&&(ai?(t=xn,Zg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Rs(t)):Zg(xn,r.stateNode));break;case 4:l=xn,d=ai,xn=r.stateNode.containerInfo,ai=!0,da(t,i,r),xn=l,ai=d;break;case 0:case 11:case 14:case 15:Za(2,r,i),Cn||Za(4,r,i),da(t,i,r);break;case 1:Cn||(qi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Km(r,i,l)),da(t,i,r);break;case 21:da(t,i,r);break;case 22:Cn=(l=Cn)||r.memoizedState!==null,da(t,i,r),Cn=l;break;default:da(t,i,r)}}function ag(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Rs(t)}catch(r){nn(i,i.return,r)}}}function rg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rs(t)}catch(r){nn(i,i.return,r)}}function Sb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new eg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new eg),i;default:throw Error(a(435,t.tag))}}function cc(t,i){var r=Sb(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var d=Nb.bind(null,t,l);l.then(d,d)}})}function ri(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var d=r[l],p=t,b=i,R=b;e:for(;R!==null;){switch(R.tag){case 27:if(nr(R.type)){xn=R.stateNode,ai=!1;break e}break;case 5:xn=R.stateNode,ai=!1;break e;case 3:case 4:xn=R.stateNode.containerInfo,ai=!0;break e}R=R.return}if(xn===null)throw Error(a(160));ig(p,b,d),xn=null,ai=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)sg(i,t),i=i.sibling}var Ii=null;function sg(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ri(i,t),si(t),l&4&&(Za(3,t,t.return),Oo(3,t),Za(5,t,t.return));break;case 1:ri(i,t),si(t),l&512&&(Cn||r===null||qi(r,r.return)),l&64&&fa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var d=Ii;if(ri(i,t),si(t),l&512&&(Cn||r===null||qi(r,r.return)),l&4){var p=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":p=d.getElementsByTagName("title")[0],(!p||p[fn]||p[lt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(l),d.head.insertBefore(p,d.querySelector("head > title"))),qn(p,l,r),p[lt]=t,le(p),l=p;break e;case"link":var b=sx("link","href",d).get(l+(r.href||""));if(b){for(var R=0;R<b.length;R++)if(p=b[R],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(R,1);break t}}p=d.createElement(l),qn(p,l,r),d.head.appendChild(p);break;case"meta":if(b=sx("meta","content",d).get(l+(r.content||""))){for(R=0;R<b.length;R++)if(p=b[R],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(R,1);break t}}p=d.createElement(l),qn(p,l,r),d.head.appendChild(p);break;default:throw Error(a(468,l))}p[lt]=t,le(p),l=p}t.stateNode=l}else ox(d,t.type,t.stateNode);else t.stateNode=rx(d,l,t.memoizedProps);else p!==l?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,l===null?ox(d,t.type,t.stateNode):rx(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,r.memoizedProps)}break;case 27:ri(i,t),si(t),l&512&&(Cn||r===null||qi(r,r.return)),r!==null&&l&4&&Kf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ri(i,t),si(t),l&512&&(Cn||r===null||qi(r,r.return)),t.flags&32){d=t.stateNode;try{Xi(d,"")}catch(ot){nn(t,t.return,ot)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,Kf(t,d,r!==null?r.memoizedProps:d)),l&1024&&($f=!0);break;case 6:if(ri(i,t),si(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(ot){nn(t,t.return,ot)}}break;case 3:if(Tc=null,d=Ii,Ii=Mc(i.containerInfo),ri(i,t),Ii=d,si(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Rs(i.containerInfo)}catch(ot){nn(t,t.return,ot)}$f&&($f=!1,og(t));break;case 4:l=Ii,Ii=Mc(t.stateNode.containerInfo),ri(i,t),si(t),Ii=l;break;case 12:ri(i,t),si(t);break;case 31:ri(i,t),si(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 13:ri(i,t),si(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fc=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 22:d=t.memoizedState!==null;var X=r!==null&&r.memoizedState!==null,de=fa,Ce=Cn;if(fa=de||d,Cn=Ce||X,ri(i,t),Cn=Ce,fa=de,si(t),l&8192)e:for(i=t.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(r===null||X||fa||Cn||Ur(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){X=r=i;try{if(p=X.stateNode,d)b=p.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{R=X.stateNode;var Oe=X.memoizedProps.style,ge=Oe!=null&&Oe.hasOwnProperty("display")?Oe.display:null;R.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(ot){nn(X,X.return,ot)}}}else if(i.tag===6){if(r===null){X=i;try{X.stateNode.nodeValue=d?"":X.memoizedProps}catch(ot){nn(X,X.return,ot)}}}else if(i.tag===18){if(r===null){X=i;try{var Se=X.stateNode;d?Kg(Se,!0):Kg(X.stateNode,!1)}catch(ot){nn(X,X.return,ot)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,cc(t,r))));break;case 19:ri(i,t),si(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 30:break;case 21:break;default:ri(i,t),si(t)}}function si(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(Jm(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var d=r.stateNode,p=Qf(t);lc(t,p,d);break;case 5:var b=r.stateNode;r.flags&32&&(Xi(b,""),r.flags&=-33);var R=Qf(t);lc(t,R,b);break;case 3:case 4:var X=r.stateNode.containerInfo,de=Qf(t);Jf(t,de,X);break;default:throw Error(a(161))}}catch(Ce){nn(t,t.return,Ce)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function og(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;og(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ha(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)tg(t,i.alternate,i),i=i.sibling}function Ur(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Ur(i);break;case 1:qi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Km(i,i.return,r),Ur(i);break;case 27:jo(i.stateNode);case 26:case 5:qi(i,i.return),Ur(i);break;case 22:i.memoizedState===null&&Ur(i);break;case 30:Ur(i);break;default:Ur(i)}t=t.sibling}}function pa(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,d=t,p=i,b=p.flags;switch(p.tag){case 0:case 11:case 15:pa(d,p,r),Oo(4,p);break;case 1:if(pa(d,p,r),l=p,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(de){nn(l,l.return,de)}if(l=p,d=l.updateQueue,d!==null){var R=l.stateNode;try{var X=d.shared.hiddenCallbacks;if(X!==null)for(d.shared.hiddenCallbacks=null,d=0;d<X.length;d++)Fp(X[d],R)}catch(de){nn(l,l.return,de)}}r&&b&64&&Zm(p),Po(p,p.return);break;case 27:$m(p);case 26:case 5:pa(d,p,r),r&&l===null&&b&4&&Qm(p),Po(p,p.return);break;case 12:pa(d,p,r);break;case 31:pa(d,p,r),r&&b&4&&ag(d,p);break;case 13:pa(d,p,r),r&&b&4&&rg(d,p);break;case 22:p.memoizedState===null&&pa(d,p,r),Po(p,p.return);break;case 30:break;default:pa(d,p,r)}i=i.sibling}}function ed(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&bo(r))}function td(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&bo(t))}function zi(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)lg(t,i,r,l),i=i.sibling}function lg(t,i,r,l){var d=i.flags;switch(i.tag){case 0:case 11:case 15:zi(t,i,r,l),d&2048&&Oo(9,i);break;case 1:zi(t,i,r,l);break;case 3:zi(t,i,r,l),d&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&bo(t)));break;case 12:if(d&2048){zi(t,i,r,l),t=i.stateNode;try{var p=i.memoizedProps,b=p.id,R=p.onPostCommit;typeof R=="function"&&R(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(X){nn(i,i.return,X)}}else zi(t,i,r,l);break;case 31:zi(t,i,r,l);break;case 13:zi(t,i,r,l);break;case 23:break;case 22:p=i.stateNode,b=i.alternate,i.memoizedState!==null?p._visibility&2?zi(t,i,r,l):Io(t,i):p._visibility&2?zi(t,i,r,l):(p._visibility|=2,xs(t,i,r,l,(i.subtreeFlags&10256)!==0||!1)),d&2048&&ed(b,i);break;case 24:zi(t,i,r,l),d&2048&&td(i.alternate,i);break;default:zi(t,i,r,l)}}function xs(t,i,r,l,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=t,b=i,R=r,X=l,de=b.flags;switch(b.tag){case 0:case 11:case 15:xs(p,b,R,X,d),Oo(8,b);break;case 23:break;case 22:var Ce=b.stateNode;b.memoizedState!==null?Ce._visibility&2?xs(p,b,R,X,d):Io(p,b):(Ce._visibility|=2,xs(p,b,R,X,d)),d&&de&2048&&ed(b.alternate,b);break;case 24:xs(p,b,R,X,d),d&&de&2048&&td(b.alternate,b);break;default:xs(p,b,R,X,d)}i=i.sibling}}function Io(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,d=l.flags;switch(l.tag){case 22:Io(r,l),d&2048&&ed(l.alternate,l);break;case 24:Io(r,l),d&2048&&td(l.alternate,l);break;default:Io(r,l)}i=i.sibling}}var zo=8192;function vs(t,i,r){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)cg(t,i,r),t=t.sibling}function cg(t,i,r){switch(t.tag){case 26:vs(t,i,r),t.flags&zo&&t.memoizedState!==null&&l1(r,Ii,t.memoizedState,t.memoizedProps);break;case 5:vs(t,i,r);break;case 3:case 4:var l=Ii;Ii=Mc(t.stateNode.containerInfo),vs(t,i,r),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=zo,zo=16777216,vs(t,i,r),zo=l):vs(t,i,r));break;default:vs(t,i,r)}}function ug(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Fo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Vn=l,dg(l,t)}ug(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fg(t),t=t.sibling}function fg(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,uc(t)):Fo(t);break;default:Fo(t)}}function uc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Vn=l,dg(l,t)}ug(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Za(8,i,i.return),uc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,uc(i));break;default:uc(i)}t=t.sibling}}function dg(t,i){for(;Vn!==null;){var r=Vn;switch(r.tag){case 0:case 11:case 15:Za(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:bo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Vn=l;else e:for(r=t;Vn!==null;){l=Vn;var d=l.sibling,p=l.return;if(ng(l),l===r){Vn=null;break e}if(d!==null){d.return=p,Vn=d;break e}Vn=p}}}var Mb={getCacheForType:function(t){var i=Wn(An),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return Wn(An).controller.signal}},Eb=typeof WeakMap=="function"?WeakMap:Map,$t=0,un=null,It=null,Ft=0,tn=0,mi=null,Ka=!1,_s=!1,nd=!1,ma=0,_n=0,Qa=0,Or=0,id=0,gi=0,ys=0,Bo=null,oi=null,ad=!1,fc=0,hg=0,dc=1/0,hc=null,Ja=null,Pn=0,$a=null,bs=null,ga=0,rd=0,sd=null,pg=null,Ho=0,od=null;function xi(){return($t&2)!==0&&Ft!==0?Ft&-Ft:I.T!==null?hd():xe()}function mg(){if(gi===0)if((Ft&536870912)===0||jt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),gi=t}else gi=536870912;return t=hi.current,t!==null&&(t.flags|=32),gi}function li(t,i,r){(t===un&&(tn===2||tn===9)||t.cancelPendingCommit!==null)&&(Ss(t,0),er(t,Ft,gi,!1)),Gt(t,r),(($t&2)===0||t!==un)&&(t===un&&(($t&2)===0&&(Or|=r),_n===4&&er(t,Ft,gi,!1)),Zi(t))}function gg(t,i,r){if(($t&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||je(t,i),d=l?wb(t,i):cd(t,i,!0),p=l;do{if(d===0){_s&&!l&&er(t,i,0,!1);break}else{if(r=t.current.alternate,p&&!Tb(r)){d=cd(t,i,!1),p=!1;continue}if(d===2){if(p=i,t.errorRecoveryDisabledLanes&p)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var R=t;d=Bo;var X=R.current.memoizedState.isDehydrated;if(X&&(Ss(R,b).flags|=256),b=cd(R,b,!1),b!==2){if(nd&&!X){R.errorRecoveryDisabledLanes|=p,Or|=p,d=4;break e}p=oi,oi=d,p!==null&&(oi===null?oi=p:oi.push.apply(oi,p))}d=b}if(p=!1,d!==2)continue}}if(d===1){Ss(t,0),er(t,i,0,!0);break}e:{switch(l=t,p=d,p){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:er(l,i,gi,!Ka);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=fc+300-T(),10<d)){if(er(l,i,gi,!Ka),Ae(l,0,!0)!==0)break e;ga=i,l.timeoutHandle=Yg(xg.bind(null,l,r,oi,hc,ad,i,gi,Or,ys,Ka,p,"Throttled",-0,0),d);break e}xg(l,r,oi,hc,ad,i,gi,Or,ys,Ka,p,null,-0,0)}}break}while(!0);Zi(t)}function xg(t,i,r,l,d,p,b,R,X,de,Ce,Oe,ge,Se){if(t.timeoutHandle=-1,Oe=i.subtreeFlags,Oe&8192||(Oe&16785408)===16785408){Oe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},cg(i,p,Oe);var ot=(p&62914560)===p?fc-T():(p&4194048)===p?hg-T():0;if(ot=c1(Oe,ot),ot!==null){ga=p,t.cancelPendingCommit=ot(Tg.bind(null,t,i,p,r,l,d,b,R,X,Ce,Oe,null,ge,Se)),er(t,p,b,!de);return}}Tg(t,i,p,r,l,d,b,R,X)}function Tb(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var d=r[l],p=d.getSnapshot;d=d.value;try{if(!fi(p(),d))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function er(t,i,r,l){i&=~id,i&=~Or,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var d=i;0<d;){var p=31-Ve(d),b=1<<p;l[p]=-1,d&=~b}r!==0&&Fn(t,r,i)}function pc(){return($t&6)===0?(Go(0),!1):!0}function ld(){if(It!==null){if(tn===0)var t=It.return;else t=It,ra=Tr=null,Ef(t),ds=null,Mo=0,t=It;for(;t!==null;)qm(t.alternate,t),t=t.return;It=null}}function Ss(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Xb(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ga=0,ld(),un=t,It=r=ia(t.current,null),Ft=i,tn=0,mi=null,Ka=!1,_s=je(t,i),nd=!1,ys=gi=id=Or=Qa=_n=0,oi=Bo=null,ad=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var d=31-Ve(l),p=1<<d;i|=t[d],l&=~p}return ma=i,Pl(),r}function vg(t,i){Ct=null,I.H=No,i===fs||i===kl?(i=Op(),tn=3):i===df?(i=Op(),tn=4):tn=i===Hf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mi=i,It===null&&(_n=1,ic(t,Mi(i,t.current)))}function _g(){var t=hi.current;return t===null?!0:(Ft&4194048)===Ft?wi===null:(Ft&62914560)===Ft||(Ft&536870912)!==0?t===wi:!1}function yg(){var t=I.H;return I.H=No,t===null?No:t}function bg(){var t=I.A;return I.A=Mb,t}function mc(){_n=4,Ka||(Ft&4194048)!==Ft&&hi.current!==null||(_s=!0),(Qa&134217727)===0&&(Or&134217727)===0||un===null||er(un,Ft,gi,!1)}function cd(t,i,r){var l=$t;$t|=2;var d=yg(),p=bg();(un!==t||Ft!==i)&&(hc=null,Ss(t,i)),i=!1;var b=_n;e:do try{if(tn!==0&&It!==null){var R=It,X=mi;switch(tn){case 8:ld(),b=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(i=!0);var de=tn;if(tn=0,mi=null,Ms(t,R,X,de),r&&_s){b=0;break e}break;default:de=tn,tn=0,mi=null,Ms(t,R,X,de)}}Ab(),b=_n;break}catch(Ce){vg(t,Ce)}while(!0);return i&&t.shellSuspendCounter++,ra=Tr=null,$t=l,I.H=d,I.A=p,It===null&&(un=null,Ft=0,Pl()),b}function Ab(){for(;It!==null;)Sg(It)}function wb(t,i){var r=$t;$t|=2;var l=yg(),d=bg();un!==t||Ft!==i?(hc=null,dc=T()+500,Ss(t,i)):_s=je(t,i);e:do try{if(tn!==0&&It!==null){i=It;var p=mi;t:switch(tn){case 1:tn=0,mi=null,Ms(t,i,p,1);break;case 2:case 9:if(Lp(p)){tn=0,mi=null,Mg(i);break}i=function(){tn!==2&&tn!==9||un!==t||(tn=7),Zi(t)},p.then(i,i);break e;case 3:tn=7;break e;case 4:tn=5;break e;case 7:Lp(p)?(tn=0,mi=null,Mg(i)):(tn=0,mi=null,Ms(t,i,p,7));break;case 5:var b=null;switch(It.tag){case 26:b=It.memoizedState;case 5:case 27:var R=It;if(b?lx(b):R.stateNode.complete){tn=0,mi=null;var X=R.sibling;if(X!==null)It=X;else{var de=R.return;de!==null?(It=de,gc(de)):It=null}break t}}tn=0,mi=null,Ms(t,i,p,5);break;case 6:tn=0,mi=null,Ms(t,i,p,6);break;case 8:ld(),_n=6;break e;default:throw Error(a(462))}}Rb();break}catch(Ce){vg(t,Ce)}while(!0);return ra=Tr=null,I.H=l,I.A=d,$t=r,It!==null?0:(un=null,Ft=0,Pl(),_n)}function Rb(){for(;It!==null&&!ft();)Sg(It)}function Sg(t){var i=Wm(t.alternate,t,ma);t.memoizedProps=t.pendingProps,i===null?gc(t):It=i}function Mg(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=Hm(r,i,i.pendingProps,i.type,void 0,Ft);break;case 11:i=Hm(r,i,i.pendingProps,i.type.render,i.ref,Ft);break;case 5:Ef(i);default:qm(r,i),i=It=bp(i,ma),i=Wm(r,i,ma)}t.memoizedProps=t.pendingProps,i===null?gc(t):It=i}function Ms(t,i,r,l){ra=Tr=null,Ef(i),ds=null,Mo=0;var d=i.return;try{if(gb(t,d,i,r,Ft)){_n=1,ic(t,Mi(r,t.current)),It=null;return}}catch(p){if(d!==null)throw It=d,p;_n=1,ic(t,Mi(r,t.current)),It=null;return}i.flags&32768?(jt||l===1?t=!0:_s||(Ft&536870912)!==0?t=!1:(Ka=t=!0,(l===2||l===9||l===3||l===6)&&(l=hi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Eg(i,t)):gc(i)}function gc(t){var i=t;do{if((i.flags&32768)!==0){Eg(i,Ka);return}t=i.return;var r=_b(i.alternate,i,ma);if(r!==null){It=r;return}if(i=i.sibling,i!==null){It=i;return}It=i=t}while(i!==null);_n===0&&(_n=5)}function Eg(t,i){do{var r=yb(t.alternate,t);if(r!==null){r.flags&=32767,It=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){It=t;return}It=t=r}while(t!==null);_n=6,It=null}function Tg(t,i,r,l,d,p,b,R,X){t.cancelPendingCommit=null;do xc();while(Pn!==0);if(($t&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(p=i.lanes|i.childLanes,p|=Ku,gt(t,r,p,b,R,X),t===un&&(It=un=null,Ft=0),bs=i,$a=t,ga=r,rd=p,sd=d,pg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Lb(se,function(){return Dg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,d=Y.p,Y.p=2,b=$t,$t|=4;try{bb(t,i,r)}finally{$t=b,Y.p=d,I.T=l}}Pn=1,Ag(),wg(),Rg()}}function Ag(){if(Pn===1){Pn=0;var t=$a,i=bs,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var l=Y.p;Y.p=2;var d=$t;$t|=4;try{sg(i,t);var p=bd,b=dp(t.containerInfo),R=p.focusedElem,X=p.selectionRange;if(b!==R&&R&&R.ownerDocument&&fp(R.ownerDocument.documentElement,R)){if(X!==null&&Xu(R)){var de=X.start,Ce=X.end;if(Ce===void 0&&(Ce=de),"selectionStart"in R)R.selectionStart=de,R.selectionEnd=Math.min(Ce,R.value.length);else{var Oe=R.ownerDocument||document,ge=Oe&&Oe.defaultView||window;if(ge.getSelection){var Se=ge.getSelection(),ot=R.textContent.length,St=Math.min(X.start,ot),on=X.end===void 0?St:Math.min(X.end,ot);!Se.extend&&St>on&&(b=on,on=St,St=b);var re=up(R,St),Q=up(R,on);if(re&&Q&&(Se.rangeCount!==1||Se.anchorNode!==re.node||Se.anchorOffset!==re.offset||Se.focusNode!==Q.node||Se.focusOffset!==Q.offset)){var fe=Oe.createRange();fe.setStart(re.node,re.offset),Se.removeAllRanges(),St>on?(Se.addRange(fe),Se.extend(Q.node,Q.offset)):(fe.setEnd(Q.node,Q.offset),Se.addRange(fe))}}}}for(Oe=[],Se=R;Se=Se.parentNode;)Se.nodeType===1&&Oe.push({element:Se,left:Se.scrollLeft,top:Se.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Oe.length;R++){var Ue=Oe[R];Ue.element.scrollLeft=Ue.left,Ue.element.scrollTop=Ue.top}}Cc=!!yd,bd=yd=null}finally{$t=d,Y.p=l,I.T=r}}t.current=i,Pn=2}}function wg(){if(Pn===2){Pn=0;var t=$a,i=bs,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var l=Y.p;Y.p=2;var d=$t;$t|=4;try{tg(t,i.alternate,i)}finally{$t=d,Y.p=l,I.T=r}}Pn=3}}function Rg(){if(Pn===4||Pn===3){Pn=0,U();var t=$a,i=bs,r=ga,l=pg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pn=5:(Pn=0,bs=$a=null,Cg(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Ja=null),j(r),i=i.stateNode,oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(Re,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,d=Y.p,Y.p=2,I.T=null;try{for(var p=t.onRecoverableError,b=0;b<l.length;b++){var R=l[b];p(R.value,{componentStack:R.stack})}}finally{I.T=i,Y.p=d}}(ga&3)!==0&&xc(),Zi(t),d=t.pendingLanes,(r&261930)!==0&&(d&42)!==0?t===od?Ho++:(Ho=0,od=t):Ho=0,Go(0)}}function Cg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,bo(i)))}function xc(){return Ag(),wg(),Rg(),Dg()}function Dg(){if(Pn!==5)return!1;var t=$a,i=rd;rd=0;var r=j(ga),l=I.T,d=Y.p;try{Y.p=32>r?32:r,I.T=null,r=sd,sd=null;var p=$a,b=ga;if(Pn=0,bs=$a=null,ga=0,($t&6)!==0)throw Error(a(331));var R=$t;if($t|=4,fg(p.current),lg(p,p.current,b,r),$t=R,Go(0,!1),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(Re,p)}catch{}return!0}finally{Y.p=d,I.T=l,Cg(t,i)}}function Ng(t,i,r){i=Mi(r,i),i=Bf(t.stateNode,i,2),t=Wa(t,i,2),t!==null&&(Gt(t,2),Zi(t))}function nn(t,i,r){if(t.tag===3)Ng(t,t,r);else for(;i!==null;){if(i.tag===3){Ng(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ja===null||!Ja.has(l))){t=Mi(r,t),r=Lm(2),l=Wa(i,r,2),l!==null&&(Um(r,l,i,t),Gt(l,2),Zi(l));break}}i=i.return}}function ud(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new Eb;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(r)||(nd=!0,d.add(r),t=Cb.bind(null,t,i,r),i.then(t,t))}function Cb(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,un===t&&(Ft&r)===r&&(_n===4||_n===3&&(Ft&62914560)===Ft&&300>T()-fc?($t&2)===0&&Ss(t,0):id|=r,ys===Ft&&(ys=0)),Zi(t)}function Lg(t,i){i===0&&(i=ut()),t=Sr(t,i),t!==null&&(Gt(t,i),Zi(t))}function Db(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Lg(t,r)}function Nb(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(r=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Lg(t,r)}function Lb(t,i){return Et(t,i)}var vc=null,Es=null,fd=!1,_c=!1,dd=!1,tr=0;function Zi(t){t!==Es&&t.next===null&&(Es===null?vc=Es=t:Es=Es.next=t),_c=!0,fd||(fd=!0,Ob())}function Go(t,i){if(!dd&&_c){dd=!0;do for(var r=!1,l=vc;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var p=0;else{var b=l.suspendedLanes,R=l.pingedLanes;p=(1<<31-Ve(42|t)+1)-1,p&=d&~(b&~R),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,Ig(l,p))}else p=Ft,p=Ae(l,l===un?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||je(l,p)||(r=!0,Ig(l,p));l=l.next}while(r);dd=!1}}function Ub(){Ug()}function Ug(){_c=fd=!1;var t=0;tr!==0&&jb()&&(t=tr);for(var i=T(),r=null,l=vc;l!==null;){var d=l.next,p=Og(l,i);p===0?(l.next=null,r===null?vc=d:r.next=d,d===null&&(Es=r)):(r=l,(t!==0||(p&3)!==0)&&(_c=!0)),l=d}Pn!==0&&Pn!==5||Go(t),tr!==0&&(tr=0)}function Og(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var b=31-Ve(p),R=1<<b,X=d[b];X===-1?((R&r)===0||(R&l)!==0)&&(d[b]=ct(R,i)):X<=i&&(t.expiredLanes|=R),p&=~R}if(i=un,r=Ft,r=Ae(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(tn===2||tn===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&tt(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||je(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&tt(l),j(r)){case 2:case 8:r=ue;break;case 32:r=se;break;case 268435456:r=ke;break;default:r=se}return l=Pg.bind(null,t),r=Et(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&tt(l),t.callbackPriority=2,t.callbackNode=null,2}function Pg(t,i){if(Pn!==0&&Pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(xc()&&t.callbackNode!==r)return null;var l=Ft;return l=Ae(t,t===un?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(gg(t,l,i),Og(t,T()),t.callbackNode!=null&&t.callbackNode===r?Pg.bind(null,t):null)}function Ig(t,i){if(xc())return null;gg(t,i,!0)}function Ob(){Wb(function(){($t&6)!==0?Et(ve,Ub):Ug()})}function hd(){if(tr===0){var t=cs;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),tr=t}return tr}function zg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(""+t)}function Fg(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function Pb(t,i,r,l,d){if(i==="submit"&&r&&r.stateNode===d){var p=zg((d[xt]||null).action),b=l.submitter;b&&(i=(i=b[xt]||null)?zg(i.formAction):b.getAttribute("formAction"),i!==null&&(p=i,b=null));var R=new Nl("action","action",null,l,d);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(tr!==0){var X=b?Fg(d,b):new FormData(d);Uf(r,{pending:!0,data:X,method:d.method,action:p},null,X)}}else typeof p=="function"&&(R.preventDefault(),X=b?Fg(d,b):new FormData(d),Uf(r,{pending:!0,data:X,method:d.method,action:p},p,X))},currentTarget:d}]})}}for(var pd=0;pd<Zu.length;pd++){var md=Zu[pd],Ib=md.toLowerCase(),zb=md[0].toUpperCase()+md.slice(1);Pi(Ib,"on"+zb)}Pi(mp,"onAnimationEnd"),Pi(gp,"onAnimationIteration"),Pi(xp,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi($y,"onTransitionRun"),Pi(eb,"onTransitionStart"),Pi(tb,"onTransitionCancel"),Pi(vp,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),We("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),We("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),We("onBeforeInput",["compositionend","keypress","textInput","paste"]),We("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),We("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),We("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Bg(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var b=l.length-1;0<=b;b--){var R=l[b],X=R.instance,de=R.currentTarget;if(R=R.listener,X!==p&&d.isPropagationStopped())break e;p=R,d.currentTarget=de;try{p(d)}catch(Ce){Ol(Ce)}d.currentTarget=null,p=X}else for(b=0;b<l.length;b++){if(R=l[b],X=R.instance,de=R.currentTarget,R=R.listener,X!==p&&d.isPropagationStopped())break e;p=R,d.currentTarget=de;try{p(d)}catch(Ce){Ol(Ce)}d.currentTarget=null,p=X}}}}function zt(t,i){var r=i[Ut];r===void 0&&(r=i[Ut]=new Set);var l=t+"__bubble";r.has(l)||(Hg(i,t,2,!1),r.add(l))}function gd(t,i,r){var l=0;i&&(l|=4),Hg(r,t,l,i)}var yc="_reactListening"+Math.random().toString(36).slice(2);function xd(t){if(!t[yc]){t[yc]=!0,ne.forEach(function(r){r!=="selectionchange"&&(Fb.has(r)||gd(r,!1,t),gd(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[yc]||(i[yc]=!0,gd("selectionchange",!1,i))}}function Hg(t,i,r,l){switch(mx(i)){case 2:var d=d1;break;case 8:d=h1;break;default:d=Ld}r=d.bind(null,i,r,t),d=void 0,!Iu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,r,{capture:!0,passive:d}):t.addEventListener(i,r,!0):d!==void 0?t.addEventListener(i,r,{passive:d}):t.addEventListener(i,r,!1)}function vd(t,i,r,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var R=l.stateNode.containerInfo;if(R===d)break;if(b===4)for(b=l.return;b!==null;){var X=b.tag;if((X===3||X===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;R!==null;){if(b=Tn(R),b===null)return;if(X=b.tag,X===5||X===6||X===26||X===27){l=p=b;continue e}R=R.parentNode}}l=l.return}X0(function(){var de=p,Ce=Ou(r),Oe=[];e:{var ge=_p.get(t);if(ge!==void 0){var Se=Nl,ot=t;switch(t){case"keypress":if(Cl(r)===0)break e;case"keydown":case"keyup":Se=Ny;break;case"focusin":ot="focus",Se=Hu;break;case"focusout":ot="blur",Se=Hu;break;case"beforeblur":case"afterblur":Se=Hu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Se=q0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Se=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Se=Oy;break;case mp:case gp:case xp:Se=Sy;break;case vp:Se=Iy;break;case"scroll":case"scrollend":Se=xy;break;case"wheel":Se=Fy;break;case"copy":case"cut":case"paste":Se=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Se=K0;break;case"toggle":case"beforetoggle":Se=Hy}var St=(i&4)!==0,on=!St&&(t==="scroll"||t==="scrollend"),re=St?ge!==null?ge+"Capture":null:ge;St=[];for(var Q=de,fe;Q!==null;){var Ue=Q;if(fe=Ue.stateNode,Ue=Ue.tag,Ue!==5&&Ue!==26&&Ue!==27||fe===null||re===null||(Ue=co(Q,re),Ue!=null&&St.push(ko(Q,Ue,fe))),on)break;Q=Q.return}0<St.length&&(ge=new Se(ge,ot,null,r,Ce),Oe.push({event:ge,listeners:St}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Se=t==="mouseout"||t==="pointerout",ge&&r!==Uu&&(ot=r.relatedTarget||r.fromElement)&&(Tn(ot)||ot[bt]))break e;if((Se||ge)&&(ge=Ce.window===Ce?Ce:(ge=Ce.ownerDocument)?ge.defaultView||ge.parentWindow:window,Se?(ot=r.relatedTarget||r.toElement,Se=de,ot=ot?Tn(ot):null,ot!==null&&(on=c(ot),St=ot.tag,ot!==on||St!==5&&St!==27&&St!==6)&&(ot=null)):(Se=null,ot=de),Se!==ot)){if(St=q0,Ue="onMouseLeave",re="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(St=K0,Ue="onPointerLeave",re="onPointerEnter",Q="pointer"),on=Se==null?ge:K(Se),fe=ot==null?ge:K(ot),ge=new St(Ue,Q+"leave",Se,r,Ce),ge.target=on,ge.relatedTarget=fe,Ue=null,Tn(Ce)===de&&(St=new St(re,Q+"enter",ot,r,Ce),St.target=fe,St.relatedTarget=on,Ue=St),on=Ue,Se&&ot)t:{for(St=Bb,re=Se,Q=ot,fe=0,Ue=re;Ue;Ue=St(Ue))fe++;Ue=0;for(var pt=Q;pt;pt=St(pt))Ue++;for(;0<fe-Ue;)re=St(re),fe--;for(;0<Ue-fe;)Q=St(Q),Ue--;for(;fe--;){if(re===Q||Q!==null&&re===Q.alternate){St=re;break t}re=St(re),Q=St(Q)}St=null}else St=null;Se!==null&&Gg(Oe,ge,Se,St,!1),ot!==null&&on!==null&&Gg(Oe,on,ot,St,!0)}}e:{if(ge=de?K(de):window,Se=ge.nodeName&&ge.nodeName.toLowerCase(),Se==="select"||Se==="input"&&ge.type==="file")var Kt=ap;else if(np(ge))if(rp)Kt=Ky;else{Kt=qy;var dt=Yy}else Se=ge.nodeName,!Se||Se.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?de&&Lu(de.elementType)&&(Kt=ap):Kt=Zy;if(Kt&&(Kt=Kt(t,de))){ip(Oe,Kt,r,Ce);break e}dt&&dt(t,ge,de),t==="focusout"&&de&&ge.type==="number"&&de.memoizedProps.value!=null&&Hn(ge,"number",ge.value)}switch(dt=de?K(de):window,t){case"focusin":(np(dt)||dt.contentEditable==="true")&&(ts=dt,Wu=de,vo=null);break;case"focusout":vo=Wu=ts=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,hp(Oe,r,Ce);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":hp(Oe,r,Ce)}var Nt;if(Vu)e:{switch(t){case"compositionstart":var Bt="onCompositionStart";break e;case"compositionend":Bt="onCompositionEnd";break e;case"compositionupdate":Bt="onCompositionUpdate";break e}Bt=void 0}else es?ep(t,r)&&(Bt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Bt="onCompositionStart");Bt&&(Q0&&r.locale!=="ko"&&(es||Bt!=="onCompositionStart"?Bt==="onCompositionEnd"&&es&&(Nt=W0()):(Ba=Ce,zu="value"in Ba?Ba.value:Ba.textContent,es=!0)),dt=bc(de,Bt),0<dt.length&&(Bt=new Z0(Bt,t,null,r,Ce),Oe.push({event:Bt,listeners:dt}),Nt?Bt.data=Nt:(Nt=tp(r),Nt!==null&&(Bt.data=Nt)))),(Nt=Vy?ky(t,r):jy(t,r))&&(Bt=bc(de,"onBeforeInput"),0<Bt.length&&(dt=new Z0("onBeforeInput","beforeinput",null,r,Ce),Oe.push({event:dt,listeners:Bt}),dt.data=Nt)),Pb(Oe,t,de,r,Ce)}Bg(Oe,i)})}function ko(t,i,r){return{instance:t,listener:i,currentTarget:r}}function bc(t,i){for(var r=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=co(t,r),d!=null&&l.unshift(ko(t,d,p)),d=co(t,i),d!=null&&l.push(ko(t,d,p))),t.tag===3)return l;t=t.return}return[]}function Bb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Gg(t,i,r,l,d){for(var p=i._reactName,b=[];r!==null&&r!==l;){var R=r,X=R.alternate,de=R.stateNode;if(R=R.tag,X!==null&&X===l)break;R!==5&&R!==26&&R!==27||de===null||(X=de,d?(de=co(r,p),de!=null&&b.unshift(ko(r,de,X))):d||(de=co(r,p),de!=null&&b.push(ko(r,de,X)))),r=r.return}b.length!==0&&t.push({event:i,listeners:b})}var Hb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function Vg(t){return(typeof t=="string"?t:""+t).replace(Hb,`
`).replace(Gb,"")}function kg(t,i){return i=Vg(i),Vg(t)===i}function sn(t,i,r,l,d,p){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Xi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Xi(t,""+l);break;case"className":Yt(t,"class",l);break;case"tabIndex":Yt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(t,r,l);break;case"style":k0(t,l,p);break;case"data":if(i!=="object"){Yt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=wl(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(i!=="input"&&sn(t,i,"name",d.name,d,null),sn(t,i,"formEncType",d.formEncType,d,null),sn(t,i,"formMethod",d.formMethod,d,null),sn(t,i,"formTarget",d.formTarget,d,null)):(sn(t,i,"encType",d.encType,d,null),sn(t,i,"method",d.method,d,null),sn(t,i,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=wl(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=ta);break;case"onScroll":l!=null&&zt("scroll",t);break;case"onScrollEnd":l!=null&&zt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=wl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":zt("beforetoggle",t),zt("toggle",t),Dt(t,"popover",l);break;case"xlinkActuate":Zt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Zt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Zt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Zt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Zt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Zt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Zt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=my.get(r)||r,Dt(t,r,l))}}function _d(t,i,r,l,d,p){switch(r){case"style":k0(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(d.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?Xi(t,l):(typeof l=="number"||typeof l=="bigint")&&Xi(t,""+l);break;case"onScroll":l!=null&&zt("scroll",t);break;case"onScrollEnd":l!=null&&zt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xe.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(d=r.endsWith("Capture"),i=r.slice(2,d?r.length-7:void 0),p=t[xt]||null,p=p!=null?p[r]:null,typeof p=="function"&&t.removeEventListener(i,p,d),typeof l=="function")){typeof p!="function"&&p!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,d);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):Dt(t,r,l)}}}function qn(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",t),zt("load",t);var l=!1,d=!1,p;for(p in r)if(r.hasOwnProperty(p)){var b=r[p];if(b!=null)switch(p){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:sn(t,i,p,b,r,null)}}d&&sn(t,i,"srcSet",r.srcSet,r,null),l&&sn(t,i,"src",r.src,r,null);return;case"input":zt("invalid",t);var R=p=b=d=null,X=null,de=null;for(l in r)if(r.hasOwnProperty(l)){var Ce=r[l];if(Ce!=null)switch(l){case"name":d=Ce;break;case"type":b=Ce;break;case"checked":X=Ce;break;case"defaultChecked":de=Ce;break;case"value":p=Ce;break;case"defaultValue":R=Ce;break;case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(a(137,i));break;default:sn(t,i,l,Ce,r,null)}}hn(t,p,R,X,de,b,d,!1);return;case"select":zt("invalid",t),l=b=p=null;for(d in r)if(r.hasOwnProperty(d)&&(R=r[d],R!=null))switch(d){case"value":p=R;break;case"defaultValue":b=R;break;case"multiple":l=R;default:sn(t,i,d,R,r,null)}i=p,r=b,t.multiple=!!l,i!=null?On(t,!!l,i,!1):r!=null&&On(t,!!l,r,!0);return;case"textarea":zt("invalid",t),p=d=l=null;for(b in r)if(r.hasOwnProperty(b)&&(R=r[b],R!=null))switch(b){case"value":l=R;break;case"defaultValue":d=R;break;case"children":p=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:sn(t,i,b,R,r,null)}jn(t,l,d,p);return;case"option":for(X in r)if(r.hasOwnProperty(X)&&(l=r[X],l!=null))switch(X){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:sn(t,i,X,l,r,null)}return;case"dialog":zt("beforetoggle",t),zt("toggle",t),zt("cancel",t),zt("close",t);break;case"iframe":case"object":zt("load",t);break;case"video":case"audio":for(l=0;l<Vo.length;l++)zt(Vo[l],t);break;case"image":zt("error",t),zt("load",t);break;case"details":zt("toggle",t);break;case"embed":case"source":case"link":zt("error",t),zt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(de in r)if(r.hasOwnProperty(de)&&(l=r[de],l!=null))switch(de){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:sn(t,i,de,l,r,null)}return;default:if(Lu(i)){for(Ce in r)r.hasOwnProperty(Ce)&&(l=r[Ce],l!==void 0&&_d(t,i,Ce,l,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(l=r[R],l!=null&&sn(t,i,R,l,r,null))}function Vb(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,b=null,R=null,X=null,de=null,Ce=null;for(Se in r){var Oe=r[Se];if(r.hasOwnProperty(Se)&&Oe!=null)switch(Se){case"checked":break;case"value":break;case"defaultValue":X=Oe;default:l.hasOwnProperty(Se)||sn(t,i,Se,null,l,Oe)}}for(var ge in l){var Se=l[ge];if(Oe=r[ge],l.hasOwnProperty(ge)&&(Se!=null||Oe!=null))switch(ge){case"type":p=Se;break;case"name":d=Se;break;case"checked":de=Se;break;case"defaultChecked":Ce=Se;break;case"value":b=Se;break;case"defaultValue":R=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,i));break;default:Se!==Oe&&sn(t,i,ge,Se,l,Oe)}}$i(t,b,R,X,de,Ce,p,d);return;case"select":Se=b=R=ge=null;for(p in r)if(X=r[p],r.hasOwnProperty(p)&&X!=null)switch(p){case"value":break;case"multiple":Se=X;default:l.hasOwnProperty(p)||sn(t,i,p,null,l,X)}for(d in l)if(p=l[d],X=r[d],l.hasOwnProperty(d)&&(p!=null||X!=null))switch(d){case"value":ge=p;break;case"defaultValue":R=p;break;case"multiple":b=p;default:p!==X&&sn(t,i,d,p,l,X)}i=R,r=b,l=Se,ge!=null?On(t,!!r,ge,!1):!!l!=!!r&&(i!=null?On(t,!!r,i,!0):On(t,!!r,r?[]:"",!1));return;case"textarea":Se=ge=null;for(R in r)if(d=r[R],r.hasOwnProperty(R)&&d!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:sn(t,i,R,null,l,d)}for(b in l)if(d=l[b],p=r[b],l.hasOwnProperty(b)&&(d!=null||p!=null))switch(b){case"value":ge=d;break;case"defaultValue":Se=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==p&&sn(t,i,b,d,l,p)}Gn(t,ge,Se);return;case"option":for(var ot in r)if(ge=r[ot],r.hasOwnProperty(ot)&&ge!=null&&!l.hasOwnProperty(ot))switch(ot){case"selected":t.selected=!1;break;default:sn(t,i,ot,null,l,ge)}for(X in l)if(ge=l[X],Se=r[X],l.hasOwnProperty(X)&&ge!==Se&&(ge!=null||Se!=null))switch(X){case"selected":t.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:sn(t,i,X,ge,l,Se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var St in r)ge=r[St],r.hasOwnProperty(St)&&ge!=null&&!l.hasOwnProperty(St)&&sn(t,i,St,null,l,ge);for(de in l)if(ge=l[de],Se=r[de],l.hasOwnProperty(de)&&ge!==Se&&(ge!=null||Se!=null))switch(de){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:sn(t,i,de,ge,l,Se)}return;default:if(Lu(i)){for(var on in r)ge=r[on],r.hasOwnProperty(on)&&ge!==void 0&&!l.hasOwnProperty(on)&&_d(t,i,on,void 0,l,ge);for(Ce in l)ge=l[Ce],Se=r[Ce],!l.hasOwnProperty(Ce)||ge===Se||ge===void 0&&Se===void 0||_d(t,i,Ce,ge,l,Se);return}}for(var re in r)ge=r[re],r.hasOwnProperty(re)&&ge!=null&&!l.hasOwnProperty(re)&&sn(t,i,re,null,l,ge);for(Oe in l)ge=l[Oe],Se=r[Oe],!l.hasOwnProperty(Oe)||ge===Se||ge==null&&Se==null||sn(t,i,Oe,ge,l,Se)}function jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var d=r[l],p=d.transferSize,b=d.initiatorType,R=d.duration;if(p&&R&&jg(b)){for(b=0,R=d.responseEnd,l+=1;l<r.length;l++){var X=r[l],de=X.startTime;if(de>R)break;var Ce=X.transferSize,Oe=X.initiatorType;Ce&&jg(Oe)&&(X=X.responseEnd,b+=Ce*(X<R?1:(R-de)/(X-de)))}if(--l,i+=8*(p+b)/(d.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yd=null,bd=null;function Sc(t){return t.nodeType===9?t:t.ownerDocument}function Xg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Sd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Md=null;function jb(){var t=window.event;return t&&t.type==="popstate"?t===Md?!1:(Md=t,!0):(Md=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,Xb=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,Wb=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(t){return qg.resolve(null).then(t).catch(Yb)}:Yg;function Yb(t){setTimeout(function(){throw t})}function nr(t){return t==="head"}function Zg(t,i){var r=i,l=0;do{var d=r.nextSibling;if(t.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(d),Rs(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")jo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,jo(r);for(var p=r.firstChild;p;){var b=p.nextSibling,R=p.nodeName;p[fn]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=b}}else r==="body"&&jo(t.ownerDocument.body);r=d}while(r);Rs(i)}function Kg(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function Ed(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Ed(r),gn(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function qb(t,i,r,l){for(;t.nodeType===1;){var d=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[fn])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function Zb(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ri(t.nextSibling),t===null))return null;return t}function Qg(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ri(t.nextSibling),t===null))return null;return t}function Td(t){return t.data==="$?"||t.data==="$~"}function Ad(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Kb(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ri(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var wd=null;function Jg(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return Ri(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function $g(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function ex(t,i,r){switch(i=Sc(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function jo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);gn(t)}var Ci=new Map,tx=new Set;function Mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=Y.d;Y.d={f:Qb,r:Jb,D:$b,C:e1,L:t1,m:n1,X:a1,S:i1,M:r1};function Qb(){var t=xa.f(),i=pc();return t||i}function Jb(t){var i=C(t);i!==null&&i.tag===5&&i.type==="form"?vm(i):xa.r(t)}var Ts=typeof document>"u"?null:document;function nx(t,i,r){var l=Ts;if(l&&typeof i=="string"&&i){var d=dn(i);d='link[rel="'+t+'"][href="'+d+'"]',typeof r=="string"&&(d+='[crossorigin="'+r+'"]'),tx.has(d)||(tx.add(d),t={rel:t,crossOrigin:r,href:i},l.querySelector(d)===null&&(i=l.createElement("link"),qn(i,"link",t),le(i),l.head.appendChild(i)))}}function $b(t){xa.D(t),nx("dns-prefetch",t,null)}function e1(t,i){xa.C(t,i),nx("preconnect",t,i)}function t1(t,i,r){xa.L(t,i,r);var l=Ts;if(l&&t&&i){var d='link[rel="preload"][as="'+dn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(d+='[imagesrcset="'+dn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(d+='[imagesizes="'+dn(r.imageSizes)+'"]')):d+='[href="'+dn(t)+'"]';var p=d;switch(i){case"style":p=As(t);break;case"script":p=ws(t)}Ci.has(p)||(t=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),Ci.set(p,t),l.querySelector(d)!==null||i==="style"&&l.querySelector(Xo(p))||i==="script"&&l.querySelector(Wo(p))||(i=l.createElement("link"),qn(i,"link",t),le(i),l.head.appendChild(i)))}}function n1(t,i){xa.m(t,i);var r=Ts;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+dn(l)+'"][href="'+dn(t)+'"]',p=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ws(t)}if(!Ci.has(p)&&(t=g({rel:"modulepreload",href:t},i),Ci.set(p,t),r.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Wo(p)))return}l=r.createElement("link"),qn(l,"link",t),le(l),r.head.appendChild(l)}}}function i1(t,i,r){xa.S(t,i,r);var l=Ts;if(l&&t){var d=ce(l).hoistableStyles,p=As(t);i=i||"default";var b=d.get(p);if(!b){var R={loading:0,preload:null};if(b=l.querySelector(Xo(p)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},r),(r=Ci.get(p))&&Rd(t,r);var X=b=l.createElement("link");le(X),qn(X,"link",t),X._p=new Promise(function(de,Ce){X.onload=de,X.onerror=Ce}),X.addEventListener("load",function(){R.loading|=1}),X.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ec(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:R},d.set(p,b)}}}function a1(t,i){xa.X(t,i);var r=Ts;if(r&&t){var l=ce(r).hoistableScripts,d=ws(t),p=l.get(d);p||(p=r.querySelector(Wo(d)),p||(t=g({src:t,async:!0},i),(i=Ci.get(d))&&Cd(t,i),p=r.createElement("script"),le(p),qn(p,"link",t),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(d,p))}}function r1(t,i){xa.M(t,i);var r=Ts;if(r&&t){var l=ce(r).hoistableScripts,d=ws(t),p=l.get(d);p||(p=r.querySelector(Wo(d)),p||(t=g({src:t,async:!0,type:"module"},i),(i=Ci.get(d))&&Cd(t,i),p=r.createElement("script"),le(p),qn(p,"link",t),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(d,p))}}function ix(t,i,r,l){var d=(d=te.current)?Mc(d):null;if(!d)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=As(r.href),r=ce(d).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=As(r.href);var p=ce(d).hoistableStyles,b=p.get(t);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,b),(p=d.querySelector(Xo(t)))&&!p._p&&(b.instance=p,b.state.loading=5),Ci.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ci.set(t,r),p||s1(d,t,r,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ws(r),r=ce(d).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function As(t){return'href="'+dn(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function ax(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function s1(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),qn(i,"link",r),le(i),t.head.appendChild(i))}function ws(t){return'[src="'+dn(t)+'"]'}function Wo(t){return"script[async]"+t}function rx(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+dn(r.href)+'"]');if(l)return i.instance=l,le(l),l;var d=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),le(l),qn(l,"style",d),Ec(l,r.precedence,t),i.instance=l;case"stylesheet":d=As(r.href);var p=t.querySelector(Xo(d));if(p)return i.state.loading|=4,i.instance=p,le(p),p;l=ax(r),(d=Ci.get(d))&&Rd(l,d),p=(t.ownerDocument||t).createElement("link"),le(p);var b=p;return b._p=new Promise(function(R,X){b.onload=R,b.onerror=X}),qn(p,"link",l),i.state.loading|=4,Ec(p,r.precedence,t),i.instance=p;case"script":return p=ws(r.src),(d=t.querySelector(Wo(p)))?(i.instance=d,le(d),d):(l=r,(d=Ci.get(p))&&(l=g({},r),Cd(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),le(d),qn(d,"link",l),t.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ec(l,r.precedence,t));return i.instance}function Ec(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,p=d,b=0;b<l.length;b++){var R=l[b];if(R.dataset.precedence===i)p=R;else if(p!==d)break}p?p.parentNode.insertBefore(t,p.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Rd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Cd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Tc=null;function sx(t,i,r){if(Tc===null){var l=new Map,d=Tc=new Map;d.set(r,l)}else d=Tc,l=d.get(r),l||(l=new Map,d.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),d=0;d<r.length;d++){var p=r[d];if(!(p[fn]||p[lt]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var b=p.getAttribute(i)||"";b=t+b;var R=l.get(b);R?R.push(p):l.set(b,[p])}}return l}function ox(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function o1(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function lx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function l1(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=As(l.href),p=i.querySelector(Xo(d));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Ac.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=p,le(p);return}p=i.ownerDocument||i,l=ax(l),(d=Ci.get(d))&&Rd(l,d),p=p.createElement("link"),le(p);var b=p;b._p=new Promise(function(R,X){b.onload=R,b.onerror=X}),qn(p,"link",l),r.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Ac.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Dd=0;function c1(t,i){return t.stylesheets&&t.count===0&&Rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+i);0<t.imgBytes&&Dd===0&&(Dd=62500*kb());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Dd?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wc=null;function Rc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wc=new Map,i.forEach(u1,t),wc=null,Ac.call(t))}function u1(t,i){if(!(i.state.loading&4)){var r=wc.get(t);if(r)var l=r.get(null);else{r=new Map,wc.set(t,r);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var b=d[p];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),l=b)}l&&r.set(null,l)}d=i.instance,b=d.getAttribute("data-precedence"),p=r.get(b)||l,p===l&&r.set(null,d),r.set(b,d),this.count++,l=Ac.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),p?p.parentNode.insertBefore(d,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),i.state.loading|=4}}var Yo={$$typeof:D,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function f1(t,i,r,l,d,p,b,R,X){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.hiddenUpdates=mt(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function cx(t,i,r,l,d,p,b,R,X,de,Ce,Oe){return t=new f1(t,i,r,b,X,de,Ce,Oe,R),i=1,p===!0&&(i|=24),p=di(3,null,null,i),t.current=p,p.stateNode=t,i=cf(),i.refCount++,t.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:r,cache:i},hf(p),t}function ux(t){return t?(t=as,t):as}function fx(t,i,r,l,d,p){d=ux(d),l.context===null?l.context=d:l.pendingContext=d,l=Xa(i),l.payload={element:r},p=p===void 0?null:p,p!==null&&(l.callback=p),r=Wa(t,l,i),r!==null&&(li(r,t,i),To(r,t,i))}function dx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Nd(t,i){dx(t,i),(t=t.alternate)&&dx(t,i)}function hx(t){if(t.tag===13||t.tag===31){var i=Sr(t,67108864);i!==null&&li(i,t,67108864),Nd(t,67108864)}}function px(t){if(t.tag===13||t.tag===31){var i=xi();i=Tt(i);var r=Sr(t,i);r!==null&&li(r,t,i),Nd(t,i)}}var Cc=!0;function d1(t,i,r,l){var d=I.T;I.T=null;var p=Y.p;try{Y.p=2,Ld(t,i,r,l)}finally{Y.p=p,I.T=d}}function h1(t,i,r,l){var d=I.T;I.T=null;var p=Y.p;try{Y.p=8,Ld(t,i,r,l)}finally{Y.p=p,I.T=d}}function Ld(t,i,r,l){if(Cc){var d=Ud(l);if(d===null)vd(t,i,l,Dc,r),gx(t,l);else if(m1(d,t,i,r,l))l.stopPropagation();else if(gx(t,l),i&4&&-1<p1.indexOf(t)){for(;d!==null;){var p=C(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var b=Ne(p.pendingLanes);if(b!==0){var R=p;for(R.pendingLanes|=2,R.entangledLanes|=2;b;){var X=1<<31-Ve(b);R.entanglements[1]|=X,b&=~X}Zi(p),($t&6)===0&&(dc=T()+500,Go(0))}}break;case 31:case 13:R=Sr(p,2),R!==null&&li(R,p,2),pc(),Nd(p,2)}if(p=Ud(l),p===null&&vd(t,i,l,Dc,r),p===d)break;d=p}d!==null&&l.stopPropagation()}else vd(t,i,l,null,r)}}function Ud(t){return t=Ou(t),Od(t)}var Dc=null;function Od(t){if(Dc=null,t=Tn(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=f(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Dc=t,null}function mx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case ve:return 2;case ue:return 8;case se:case Ye:return 32;case ke:return 268435456;default:return 32}default:return 32}}var Pd=!1,ir=null,ar=null,rr=null,qo=new Map,Zo=new Map,sr=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gx(t,i){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(i.pointerId)}}function Ko(t,i,r,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=C(i),i!==null&&hx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function m1(t,i,r,l,d){switch(i){case"focusin":return ir=Ko(ir,t,i,r,l,d),!0;case"dragenter":return ar=Ko(ar,t,i,r,l,d),!0;case"mouseover":return rr=Ko(rr,t,i,r,l,d),!0;case"pointerover":var p=d.pointerId;return qo.set(p,Ko(qo.get(p)||null,t,i,r,l,d)),!0;case"gotpointercapture":return p=d.pointerId,Zo.set(p,Ko(Zo.get(p)||null,t,i,r,l,d)),!0}return!1}function xx(t){var i=Tn(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,De(t.priority,function(){px(r)});return}}else if(i===31){if(i=f(r),i!==null){t.blockedOn=i,De(t.priority,function(){px(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Ud(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Uu=l,r.target.dispatchEvent(l),Uu=null}else return i=C(r),i!==null&&hx(i),t.blockedOn=r,!1;i.shift()}return!0}function vx(t,i,r){Nc(t)&&r.delete(i)}function g1(){Pd=!1,ir!==null&&Nc(ir)&&(ir=null),ar!==null&&Nc(ar)&&(ar=null),rr!==null&&Nc(rr)&&(rr=null),qo.forEach(vx),Zo.forEach(vx)}function Lc(t,i){t.blockedOn===i&&(t.blockedOn=null,Pd||(Pd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,g1)))}var Uc=null;function _x(t){Uc!==t&&(Uc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Uc===t&&(Uc=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],d=t[i+2];if(typeof l!="function"){if(Od(l||r)===null)continue;break}var p=C(r);p!==null&&(t.splice(i,3),i-=3,Uf(p,{pending:!0,data:d,method:r.method,action:l},l,d))}}))}function Rs(t){function i(X){return Lc(X,t)}ir!==null&&Lc(ir,t),ar!==null&&Lc(ar,t),rr!==null&&Lc(rr,t),qo.forEach(i),Zo.forEach(i);for(var r=0;r<sr.length;r++){var l=sr[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<sr.length&&(r=sr[0],r.blockedOn===null);)xx(r),r.blockedOn===null&&sr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var d=r[l],p=r[l+1],b=d[xt]||null;if(typeof p=="function")b||_x(r);else if(b){var R=null;if(p&&p.hasAttribute("formAction")){if(d=p,b=p[xt]||null)R=b.formAction;else if(Od(d)!==null)continue}else R=b.action;typeof R=="function"?r[l+1]=R:(r.splice(l,3),l-=3),_x(r)}}}function yx(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(b){return d=b})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function Id(t){this._internalRoot=t}Oc.prototype.render=Id.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=xi();fx(r,l,t,i,null,null)},Oc.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;fx(t.current,2,null,t,null,null),pc(),i[bt]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var i=xe();t={blockedOn:null,target:t,priority:i};for(var r=0;r<sr.length&&i!==0&&i<sr[r].priority;r++);sr.splice(r,0,t),r===0&&xx(t)}};var bx=e.version;if(bx!=="19.2.0")throw Error(a(527,bx,"19.2.0"));Y.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=h(i),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var x1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{Re=Pc.inject(x1),oe=Pc}catch{}}return Jo.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,l="",d=Rm,p=Cm,b=Dm;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=cx(t,1,!1,null,null,r,l,null,d,p,b,yx),t[bt]=i.current,xd(t),new Id(i)},Jo.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var l=!1,d="",p=Rm,b=Cm,R=Dm,X=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(X=r.formState)),i=cx(t,1,!0,i,r??null,l,d,X,p,b,R,yx),i.context=ux(null),r=i.current,l=xi(),l=Tt(l),d=Xa(l),d.callback=null,Wa(r,d,l),r=l,i.current.lanes=r,Gt(i,r),Zi(i),t[bt]=i.current,xd(t),new Oc(i)},Jo.version="19.2.0",Jo}var Nx;function w1(){if(Nx)return Bd.exports;Nx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Bd.exports=A1(),Bd.exports}var R1=w1();const C1=g_(R1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N1=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),Lx=s=>{const e=N1(s);return e.charAt(0).toUpperCase()+e.slice(1)},x_=(...s)=>s.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),L1=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=ae.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...f},m)=>ae.createElement("svg",{ref:m,...U1,width:e,height:e,stroke:s,strokeWidth:a?Number(n)*24/Number(e):n,className:x_("lucide",o),...!c&&!L1(f)&&{"aria-hidden":"true"},...f},[...u.map(([h,x])=>ae.createElement(h,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=(s,e)=>{const n=ae.forwardRef(({className:a,...o},c)=>ae.createElement(O1,{ref:c,iconNode:e,className:x_(`lucide-${D1(Lx(s))}`,`lucide-${s}`,a),...o}));return n.displayName=Lx(s),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],I1=xr("check",P1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],F1=xr("menu",z1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],H1=xr("palette",B1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],v_=xr("pause",G1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],__=xr("play",V1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Eu=xr("rotate-ccw",k1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Tu=xr("settings-2",j1);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qr=xr("x",X1),kd=({lyrics:s,currentTime:e,onLyricClick:n,compact:a=!1,maxLines:o,themeColor:c="#ff4d6a",variant:u="default"})=>{const f=ae.useRef(null),[m,h]=ae.useState(!1),x=ae.useRef(null),g=ae.useRef(!1),v=s.findIndex((_,L)=>{const D=s[L+1];return e>=_.time&&(!D||e<D.time)}),y=()=>{f.current&&(g.current||(h(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{h(!1)},4e3)))},M=()=>y(),E=_=>{_.isTrusted&&y()};ae.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]),ae.useEffect(()=>{const _=v>=s.length-3;if(f.current&&v!==-1&&!m&&!_){const L=f.current,D=L.children[v];if(D){const O=L.clientHeight,F=D.offsetTop,P=D.clientHeight,B=F-O*.35+P/2;g.current=!0,L.scrollTo({top:B,behavior:"smooth"}),setTimeout(()=>{g.current=!1},800)}}},[v,m,s]);const S=o&&o>0&&v!==-1?(()=>{const _=Math.floor((o-1)/2),L=Math.max(0,v-_),D=Math.min(s.length,L+o),O=Math.max(0,D-o);return s.slice(O,D).map((F,P)=>({...F,originalIndex:O+P}))})():s.map((_,L)=>({..._,originalIndex:L}));return o&&o>0?N.jsx("div",{className:"h-full w-full flex flex-col items-center justify-center relative overflow-hidden",children:N.jsx("div",{className:"w-full mx-auto max-w-full",children:S.map(_=>{const L=_.originalIndex===v;return N.jsx("div",{onClick:()=>n==null?void 0:n(_.time),className:`transition-all duration-500 ease-out ${a?"mb-1.5":"mb-4"} font-bold tracking-tight cursor-pointer text-center transform break-words whitespace-normal
                  ${L?`${o===1?"text-[22px]":"text-2xl"} scale-100 opacity-100`:"text-[22px] scale-100 opacity-50 text-gray-400/50"}`,style:L?{color:c}:void 0,children:_.text},_.originalIndex)})})}):N.jsx("div",{className:"h-full w-full flex flex-col items-center lg:items-start justify-center relative overflow-hidden",children:N.jsx("div",{ref:f,onScroll:E,onWheel:M,onTouchMove:M,className:"w-full h-full overflow-y-auto no-scrollbar pt-[35vh] pb-[15vh] relative z-0",style:{maskImage:"linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",WebkitMaskImage:"linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)"},children:S.map(_=>{const L=_.originalIndex===v;return N.jsx("div",{onClick:()=>n==null?void 0:n(_.time),className:u==="fullscreen"?`transition-all duration-700 ease-out mb-9 tracking-tight cursor-pointer text-center lg:text-left origin-center lg:origin-left transform break-words whitespace-normal
                      ${L?"text-[26px] font-bold scale-100 opacity-100 translate-x-0":"text-2xl font-bold text-gray-400/50 scale-100 opacity-100 hover:opacity-100"}`:`transition-all duration-700 ease-out mb-10 text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight cursor-pointer text-center lg:text-left origin-center lg:origin-left transform
                      ${L?"scale-100 opacity-100 blur-none translate-x-0":"text-gray-400/60 scale-95 opacity-40 blur-[0.5px] hover:opacity-60 hover:text-gray-500"}`,style:L?{color:c}:void 0,children:_.text},_.originalIndex)})})})},W1="/assets/doodlevingl-768-DuzIQ_e4.webp",Y1="/assets/rabbitSkate1-Dd7Fn1s6.webp",q1="/assets/rabbitSkate2-BCzFxxnt.webp",Z1="/assets/rabbitSkate3-rhhoy478.webp",K1="/assets/rabbitSkate4-BsPPoknM.webp",Q1="/assets/rabbitSkate5-gtKp4uG-.webp",J1="/assets/rabbitSkate6-BjZ2HVCb.webp",Ic=[Y1,q1,Z1,K1,Q1,J1],$1=({coverUrl:s,isPlaying:e,vinylSpeed:n=1,rabbitSpeed:a=1})=>{const[o,c]=ae.useState(!1),[u,f]=ae.useState(0),m=ae.useRef(1),h=ae.useRef(null),x=ae.useRef(0);return ae.useEffect(()=>{for(const g of Ic){const v=new Image;v.src=g}},[]),ae.useEffect(()=>{if(!e||Ic.length<=1)return;const v=1e3/12;x.current=performance.now();const y=M=>{M-x.current>=v&&(x.current=M,f(E=>{const S=Ic.length-1;if(S<=0)return 0;const _=m.current;let L=E+_;return L>S?(m.current=-1,L=S-1):L<0&&(m.current=1,L=1),Math.max(0,Math.min(S,L))})),h.current=requestAnimationFrame(y)};return h.current=requestAnimationFrame(y),()=>{h.current!==null&&cancelAnimationFrame(h.current),h.current=null}},[e]),N.jsx("div",{className:"relative flex items-center justify-center transition-all duration-500",children:N.jsxs("div",{className:"w-[346px] h-[346px] md:w-[360px] md:h-[360px] lg:w-[55vw] lg:h-[55vw] max-w-[850px] max-h-[850px] relative flex items-center justify-center",children:[N.jsx("div",{className:"absolute inset-0 z-50 pointer-events-none will-change-transform",style:{animation:`spin ${16/a}s linear infinite`,animationPlayState:e?"running":"paused"},children:Ic.map((g,v)=>N.jsx("img",{src:g,alt:"Skating Rabbit",loading:"eager",decoding:"async",className:`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[85%] w-16 h-16 md:w-20 md:h-20 lg:w-[12%] lg:h-[12%] object-contain scale-x-[-1] transition-opacity duration-75 will-change-opacity ${v===u?"opacity-100":"opacity-0"}`},g))}),N.jsxs("div",{className:`relative w-full h-full rounded-full flex items-center justify-center overflow-hidden ${e?"animate-spin-slow":"animate-spin-slow paused-anim"}`,style:e?{animationDuration:`${20/n}s`}:{animationDuration:`${20/n}s`,animationPlayState:"paused"},children:[N.jsx("img",{src:W1,alt:"Vinyl Record",className:"absolute inset-0 w-full h-full object-cover"}),N.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none z-20"}),N.jsx("div",{className:"absolute w-[65%] h-[65%] rounded-full overflow-hidden z-30 shadow-inner bg-gray-900 flex items-center justify-center",children:o?N.jsxs("div",{className:"flex flex-col items-center justify-center text-[#ff4d6a] font-bold text-center p-2",children:[N.jsx("span",{children:"DITTO"}),N.jsx("span",{className:"text-xs opacity-75",children:"NewJeans"})]}):N.jsx("img",{src:s,alt:"Ditto Cover",className:"w-full h-full object-cover",onError:()=>c(!0)})}),N.jsx("div",{className:"absolute w-3 h-3 bg-[#1a1a1a] rounded-full z-40 shadow-inner border border-gray-700"})]})]})})},eS=()=>N.jsx("div",{className:"w-full aspect-square rounded-md overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 relative shadow-sm flex items-center justify-center",children:N.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 via-gray-500 to-gray-800 shadow-lg flex items-center justify-center",children:N.jsx("div",{className:"w-4 h-4 rounded-full bg-gray-300"})})}),tS=()=>N.jsxs("div",{className:"w-full aspect-square rounded-md overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-black relative shadow-sm flex items-center justify-center",children:[N.jsx("div",{className:"absolute w-2 h-2 bg-cyan-400 rounded-full blur-[1px] top-1/3 left-1/3 opacity-80"}),N.jsx("div",{className:"absolute w-1.5 h-1.5 bg-purple-400 rounded-full blur-[1px] bottom-1/3 right-1/3 opacity-80"}),N.jsx("div",{className:"absolute w-1 h-1 bg-white rounded-full blur-[0.5px] top-1/2 right-1/4 opacity-60"})]}),nS=()=>N.jsxs("div",{className:"w-full aspect-square rounded-md overflow-hidden bg-black relative shadow-sm flex items-center justify-center",children:[N.jsx("div",{className:"absolute w-1 h-1 bg-yellow-400 rounded-full top-1/2 left-1/2 shadow-[0_0_4px_yellow]"}),N.jsx("div",{className:"absolute w-0.5 h-0.5 bg-red-500 rounded-full top-[40%] left-[40%] opacity-80"}),N.jsx("div",{className:"absolute w-0.5 h-0.5 bg-blue-500 rounded-full top-[40%] left-[60%] opacity-80"}),N.jsx("div",{className:"absolute w-0.5 h-0.5 bg-green-500 rounded-full top-[60%] left-[50%] opacity-80"})]}),iS=()=>N.jsxs("div",{className:"w-full aspect-square rounded-md overflow-hidden bg-[#e0f7fa] relative shadow-sm flex items-center justify-center",children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/0 to-white/50"}),N.jsxs("div",{className:"grid grid-cols-3 gap-1 rotate-45 scale-75 transform-gpu",children:[N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm"}),N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm translate-y-[-2px]"}),N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm"}),N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm translate-y-[-2px]"}),N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm translate-y-[-4px]"}),N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm translate-y-[-2px]"}),N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm"}),N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm translate-y-[-2px]"}),N.jsx("div",{className:"w-2 h-2 bg-white shadow-sm"})]})]}),aS=()=>N.jsx("div",{className:"w-full aspect-square rounded-md overflow-hidden bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 relative shadow-sm flex items-center justify-center",children:N.jsxs("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 via-white to-gray-400 shadow-lg relative overflow-hidden",children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent opacity-80"}),N.jsx("div",{className:"absolute top-1 left-2 w-2 h-1 bg-white/80 rounded-full blur-[0.5px]"})]})}),rS=()=>N.jsx("div",{className:"w-full aspect-square rounded-md overflow-hidden bg-gradient-to-br from-pink-200 via-blue-200 to-green-200 relative shadow-sm flex items-center justify-center",children:N.jsxs("div",{className:"flex gap-1",children:[N.jsx("div",{className:"w-2 h-2 rounded-full bg-pink-500 shadow-sm"}),N.jsx("div",{className:"w-2 h-2 rounded-full bg-blue-500 shadow-sm"}),N.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 shadow-sm"})]})}),sS=[{id:"powerpuff",label:"飞天小女警",visible:!0,isDark:!0,isFullscreen:!0,Preview:rS},{id:"cubes",label:"方块音阶",visible:!0,isDark:!1,isFullscreen:!0,Preview:iS},{id:"particle",label:"封面粒子",visible:!0,isDark:!0,isFullscreen:!0,Preview:tS},{id:"vinyl",label:"涂鸦黑胶",visible:!0,isDark:!1,isFullscreen:!1,Preview:eS},{id:"liquid",label:"水银球体",visible:!1,isDark:!0,isFullscreen:!0,Preview:aS},{id:"fireworks",label:"礼花绽放",visible:!1,isDark:!0,isFullscreen:!0,Preview:nS}];function y_(s){return sS.find(e=>e.id===s)}function Uh(s){var e;return((e=y_(s))==null?void 0:e.isDark)??!1}function oS(s){var e;return((e=y_(s))==null?void 0:e.isFullscreen)??!1}const At=s=>typeof s=="string",$o=()=>{let s,e;const n=new Promise((a,o)=>{s=a,e=o});return n.resolve=s,n.reject=e,n},Ux=s=>s==null?"":""+s,lS=(s,e,n)=>{s.forEach(a=>{e[a]&&(n[a]=e[a])})},cS=/###/g,Ox=s=>s&&s.indexOf("###")>-1?s.replace(cS,"."):s,Px=s=>!s||At(s),fl=(s,e,n)=>{const a=At(e)?e.split("."):e;let o=0;for(;o<a.length-1;){if(Px(s))return{};const c=Ox(a[o]);!s[c]&&n&&(s[c]=new n),Object.prototype.hasOwnProperty.call(s,c)?s=s[c]:s={},++o}return Px(s)?{}:{obj:s,k:Ox(a[o])}},Ix=(s,e,n)=>{const{obj:a,k:o}=fl(s,e,Object);if(a!==void 0||e.length===1){a[o]=n;return}let c=e[e.length-1],u=e.slice(0,e.length-1),f=fl(s,u,Object);for(;f.obj===void 0&&u.length;)c=`${u[u.length-1]}.${c}`,u=u.slice(0,u.length-1),f=fl(s,u,Object),f!=null&&f.obj&&typeof f.obj[`${f.k}.${c}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${c}`]=n},uS=(s,e,n,a)=>{const{obj:o,k:c}=fl(s,e,Object);o[c]=o[c]||[],o[c].push(n)},mu=(s,e)=>{const{obj:n,k:a}=fl(s,e);if(n&&Object.prototype.hasOwnProperty.call(n,a))return n[a]},fS=(s,e,n)=>{const a=mu(s,n);return a!==void 0?a:mu(e,n)},b_=(s,e,n)=>{for(const a in e)a!=="__proto__"&&a!=="constructor"&&(a in s?At(s[a])||s[a]instanceof String||At(e[a])||e[a]instanceof String?n&&(s[a]=e[a]):b_(s[a],e[a],n):s[a]=e[a]);return s},Cs=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var dS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const hS=s=>At(s)?s.replace(/[&<>"'\/]/g,e=>dS[e]):s;class pS{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const a=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,a),this.regExpQueue.push(e),a}}const mS=[" ",",","?","!",";"],gS=new pS(20),xS=(s,e,n)=>{e=e||"",n=n||"";const a=mS.filter(u=>e.indexOf(u)<0&&n.indexOf(u)<0);if(a.length===0)return!0;const o=gS.getRegExp(`(${a.map(u=>u==="?"?"\\?":u).join("|")})`);let c=!o.test(s);if(!c){const u=s.indexOf(n);u>0&&!o.test(s.substring(0,u))&&(c=!0)}return c},Oh=(s,e,n=".")=>{if(!s)return;if(s[e])return Object.prototype.hasOwnProperty.call(s,e)?s[e]:void 0;const a=e.split(n);let o=s;for(let c=0;c<a.length;){if(!o||typeof o!="object")return;let u,f="";for(let m=c;m<a.length;++m)if(m!==c&&(f+=n),f+=a[m],u=o[f],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&m<a.length-1)continue;c+=m-c+1;break}o=u}return o},ml=s=>s==null?void 0:s.replace("_","-"),vS={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){var n,a;(a=(n=console==null?void 0:console[s])==null?void 0:n.apply)==null||a.call(n,console,e)}};class gu{constructor(e,n={}){this.init(e,n)}init(e,n={}){this.prefix=n.prefix||"i18next:",this.logger=e||vS,this.options=n,this.debug=n.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,a,o){return o&&!this.debug?null:(At(e[0])&&(e[0]=`${a}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new gu(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new gu(this.logger,e)}}var Qi=new gu;class Au{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(n)||0;this.observers[a].set(n,o+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e,...n){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,c])=>{for(let u=0;u<c;u++)o(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,c])=>{for(let u=0;u<c;u++)o.apply(o,[e,...n])})}}class zx extends Au{constructor(e,n={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,a,o={}){var h,x;const c=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;e.indexOf(".")>-1?f=e.split("."):(f=[e,n],a&&(Array.isArray(a)?f.push(...a):At(a)&&c?f.push(...a.split(c)):f.push(a)));const m=mu(this.data,f);return!m&&!n&&!a&&e.indexOf(".")>-1&&(e=f[0],n=f[1],a=f.slice(2).join(".")),m||!u||!At(a)?m:Oh((x=(h=this.data)==null?void 0:h[e])==null?void 0:x[n],a,c)}addResource(e,n,a,o,c={silent:!1}){const u=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator;let f=[e,n];a&&(f=f.concat(u?a.split(u):a)),e.indexOf(".")>-1&&(f=e.split("."),o=n,n=f[1]),this.addNamespaces(n),Ix(this.data,f,o),c.silent||this.emit("added",e,n,a,o)}addResources(e,n,a,o={silent:!1}){for(const c in a)(At(a[c])||Array.isArray(a[c]))&&this.addResource(e,n,c,a[c],{silent:!0});o.silent||this.emit("added",e,n,a)}addResourceBundle(e,n,a,o,c,u={silent:!1,skipCopy:!1}){let f=[e,n];e.indexOf(".")>-1&&(f=e.split("."),o=a,a=n,n=f[1]),this.addNamespaces(n);let m=mu(this.data,f)||{};u.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?b_(m,a,c):m={...m,...a},Ix(this.data,f,m),u.silent||this.emit("added",e,n,a)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var S_={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,n,a,o){return s.forEach(c=>{var u;e=((u=this.processors[c])==null?void 0:u.process(e,n,a,o))??e}),e}};const M_=Symbol("i18next/PATH_KEY");function _S(){const s=[],e=Object.create(null);let n;return e.get=(a,o)=>{var c;return(c=n==null?void 0:n.revoke)==null||c.call(n),o===M_?s:(s.push(o),n=Proxy.revocable(a,e),n.proxy)},Proxy.revocable(Object.create(null),e).proxy}function Ph(s,e){const{[M_]:n}=s(_S());return n.join((e==null?void 0:e.keySeparator)??".")}const Fx={},jd=s=>!At(s)&&typeof s!="boolean"&&typeof s!="number";class xu extends Au{constructor(e,n={}){super(),lS(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Qi.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,n={interpolation:{}}){const a={...n};if(e==null)return!1;const o=this.resolve(e,a);if((o==null?void 0:o.res)===void 0)return!1;const c=jd(o.res);return!(a.returnObjects===!1&&c)}extractFromKey(e,n){let a=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let c=n.ns||this.options.defaultNS||[];const u=a&&e.indexOf(a)>-1,f=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!xS(e,a,o);if(u&&!f){const m=e.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:e,namespaces:At(c)?[c]:c};const h=e.split(a);(a!==o||a===o&&this.options.ns.indexOf(h[0])>-1)&&(c=h.shift()),e=h.join(o)}return{key:e,namespaces:At(c)?[c]:c}}translate(e,n,a){let o=typeof n=="object"?{...n}:n;if(typeof o!="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),typeof o=="object"&&(o={...o}),o||(o={}),e==null)return"";typeof e=="function"&&(e=Ph(e,{...this.options,...o})),Array.isArray(e)||(e=[String(e)]);const c=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,u=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,{key:f,namespaces:m}=this.extractFromKey(e[e.length-1],o),h=m[m.length-1];let x=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;x===void 0&&(x=":");const g=o.lng||this.language,v=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode")return v?c?{res:`${h}${x}${f}`,usedKey:f,exactUsedKey:f,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(o)}:`${h}${x}${f}`:c?{res:f,usedKey:f,exactUsedKey:f,usedLng:g,usedNS:h,usedParams:this.getUsedParamsDetails(o)}:f;const y=this.resolve(e,o);let M=y==null?void 0:y.res;const E=(y==null?void 0:y.usedKey)||f,S=(y==null?void 0:y.exactUsedKey)||f,_=["[object Number]","[object Function]","[object RegExp]"],L=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,D=!this.i18nFormat||this.i18nFormat.handleAsObject,O=o.count!==void 0&&!At(o.count),F=xu.hasDefaultValue(o),P=O?this.pluralResolver.getSuffix(g,o.count,o):"",B=o.ordinal&&O?this.pluralResolver.getSuffix(g,o.count,{ordinal:!1}):"",q=O&&!o.ordinal&&o.count===0,w=q&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${P}`]||o[`defaultValue${B}`]||o.defaultValue;let A=M;D&&!M&&F&&(A=w);const H=jd(A),k=Object.prototype.toString.apply(A);if(D&&A&&H&&_.indexOf(k)<0&&!(At(L)&&Array.isArray(A))){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const W=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,A,{...o,ns:m}):`key '${f} (${this.language})' returned an object instead of string.`;return c?(y.res=W,y.usedParams=this.getUsedParamsDetails(o),y):W}if(u){const W=Array.isArray(A),J=W?[]:{},ie=W?S:E;for(const I in A)if(Object.prototype.hasOwnProperty.call(A,I)){const Y=`${ie}${u}${I}`;F&&!M?J[I]=this.translate(Y,{...o,defaultValue:jd(w)?w[I]:void 0,joinArrays:!1,ns:m}):J[I]=this.translate(Y,{...o,joinArrays:!1,ns:m}),J[I]===Y&&(J[I]=A[I])}M=J}}else if(D&&At(L)&&Array.isArray(M))M=M.join(L),M&&(M=this.extendTranslation(M,e,o,a));else{let W=!1,J=!1;!this.isValidLookup(M)&&F&&(W=!0,M=w),this.isValidLookup(M)||(J=!0,M=f);const I=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&J?void 0:M,Y=F&&w!==M&&this.options.updateMissing;if(J||W||Y){if(this.logger.log(Y?"updateKey":"missingKey",g,h,f,Y?w:M),u){const z=this.resolve(f,{...o,keySeparator:!1});z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Z=[];const pe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&pe&&pe[0])for(let z=0;z<pe.length;z++)Z.push(pe[z]);else this.options.saveMissingTo==="all"?Z=this.languageUtils.toResolveHierarchy(o.lng||this.language):Z.push(o.lng||this.language);const Me=(z,ee,he)=>{var Be;const Ee=F&&he!==M?he:I;this.options.missingKeyHandler?this.options.missingKeyHandler(z,h,ee,Ee,Y,o):(Be=this.backendConnector)!=null&&Be.saveMissing&&this.backendConnector.saveMissing(z,h,ee,Ee,Y,o),this.emit("missingKey",z,h,ee,M)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?Z.forEach(z=>{const ee=this.pluralResolver.getSuffixes(z,o);q&&o[`defaultValue${this.options.pluralSeparator}zero`]&&ee.indexOf(`${this.options.pluralSeparator}zero`)<0&&ee.push(`${this.options.pluralSeparator}zero`),ee.forEach(he=>{Me([z],f+he,o[`defaultValue${he}`]||w)})}):Me(Z,f,w))}M=this.extendTranslation(M,e,o,y,a),J&&M===f&&this.options.appendNamespaceToMissingKey&&(M=`${h}${x}${f}`),(J||W)&&this.options.parseMissingKeyHandler&&(M=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}${x}${f}`:f,W?M:void 0,o))}return c?(y.res=M,y.usedParams=this.getUsedParamsDetails(o),y):M}extendTranslation(e,n,a,o,c){var m,h;if((m=this.i18nFormat)!=null&&m.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const x=At(e)&&(((h=a==null?void 0:a.interpolation)==null?void 0:h.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(x){const y=e.match(this.interpolator.nestingRegexp);g=y&&y.length}let v=a.replace&&!At(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),e=this.interpolator.interpolate(e,v,a.lng||this.language||o.usedLng,a),x){const y=e.match(this.interpolator.nestingRegexp),M=y&&y.length;g<M&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(e=this.interpolator.nest(e,(...y)=>(c==null?void 0:c[0])===y[0]&&!a.context?(this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`),null):this.translate(...y,n),a)),a.interpolation&&this.interpolator.reset()}const u=a.postProcess||this.options.postProcess,f=At(u)?[u]:u;return e!=null&&(f!=null&&f.length)&&a.applyPostProcessor!==!1&&(e=S_.handle(f,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),e}resolve(e,n={}){let a,o,c,u,f;return At(e)&&(e=[e]),e.forEach(m=>{if(this.isValidLookup(a))return;const h=this.extractFromKey(m,n),x=h.key;o=x;let g=h.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const v=n.count!==void 0&&!At(n.count),y=v&&!n.ordinal&&n.count===0,M=n.context!==void 0&&(At(n.context)||typeof n.context=="number")&&n.context!=="",E=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);g.forEach(S=>{var _,L;this.isValidLookup(a)||(f=S,!Fx[`${E[0]}-${S}`]&&((_=this.utils)!=null&&_.hasLoadedNamespace)&&!((L=this.utils)!=null&&L.hasLoadedNamespace(f))&&(Fx[`${E[0]}-${S}`]=!0,this.logger.warn(`key "${o}" for languages "${E.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(D=>{var P;if(this.isValidLookup(a))return;u=D;const O=[x];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(O,x,D,S,n);else{let B;v&&(B=this.pluralResolver.getSuffix(D,n.count,n));const q=`${this.options.pluralSeparator}zero`,w=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(n.ordinal&&B.indexOf(w)===0&&O.push(x+B.replace(w,this.options.pluralSeparator)),O.push(x+B),y&&O.push(x+q)),M){const A=`${x}${this.options.contextSeparator||"_"}${n.context}`;O.push(A),v&&(n.ordinal&&B.indexOf(w)===0&&O.push(A+B.replace(w,this.options.pluralSeparator)),O.push(A+B),y&&O.push(A+q))}}let F;for(;F=O.pop();)this.isValidLookup(a)||(c=F,a=this.getResource(D,S,F,n))}))})}),{res:a,usedKey:o,exactUsedKey:c,usedLng:u,usedNS:f}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,a,o={}){var c;return(c=this.i18nFormat)!=null&&c.getResource?this.i18nFormat.getResource(e,n,a,o):this.resourceStore.getResource(e,n,a,o)}getUsedParamsDetails(e={}){const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=e.replace&&!At(e.replace);let o=a?e.replace:e;if(a&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const c of n)delete o[c]}return o}static hasDefaultValue(e){const n="defaultValue";for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&n===a.substring(0,n.length)&&e[a]!==void 0)return!0;return!1}}class Bx{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Qi.create("languageUtils")}getScriptPartFromCode(e){if(e=ml(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=ml(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(At(e)&&e.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(a=>{if(n)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&e.forEach(a=>{if(n)return;const o=this.getScriptPartFromCode(a);if(this.isSupportedCode(o))return n=o;const c=this.getLanguagePartFromCode(a);if(this.isSupportedCode(c))return n=c;n=this.options.supportedLngs.find(u=>{if(u===c)return u;if(!(u.indexOf("-")<0&&c.indexOf("-")<0)&&(u.indexOf("-")>0&&c.indexOf("-")<0&&u.substring(0,u.indexOf("-"))===c||u.indexOf(c)===0&&c.length>1))return u})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),At(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let a=e[n];return a||(a=e[this.getScriptPartFromCode(n)]),a||(a=e[this.formatLanguageCode(n)]),a||(a=e[this.getLanguagePartFromCode(n)]),a||(a=e.default),a||[]}toResolveHierarchy(e,n){const a=this.getFallbackCodes((n===!1?[]:n)||this.options.fallbackLng||[],e),o=[],c=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return At(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&c(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&c(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&c(this.getLanguagePartFromCode(e))):At(e)&&c(this.formatLanguageCode(e)),a.forEach(u=>{o.indexOf(u)<0&&c(this.formatLanguageCode(u))}),o}}const Hx={zero:0,one:1,two:2,few:3,many:4,other:5},Gx={select:s=>s===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class yS{constructor(e,n={}){this.languageUtils=e,this.options=n,this.logger=Qi.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e,n={}){const a=ml(e==="dev"?"en":e),o=n.ordinal?"ordinal":"cardinal",c=JSON.stringify({cleanedCode:a,type:o});if(c in this.pluralRulesCache)return this.pluralRulesCache[c];let u;try{u=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Gx;if(!e.match(/-|_/))return Gx;const m=this.languageUtils.getLanguagePartFromCode(e);u=this.getRule(m,n)}return this.pluralRulesCache[c]=u,u}needsPlural(e,n={}){let a=this.getRule(e,n);return a||(a=this.getRule("dev",n)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,n,a={}){return this.getSuffixes(e,a).map(o=>`${n}${o}`)}getSuffixes(e,n={}){let a=this.getRule(e,n);return a||(a=this.getRule("dev",n)),a?a.resolvedOptions().pluralCategories.sort((o,c)=>Hx[o]-Hx[c]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,n,a={}){const o=this.getRule(e,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",n,a))}}const Vx=(s,e,n,a=".",o=!0)=>{let c=fS(s,e,n);return!c&&o&&At(n)&&(c=Oh(s,n,a),c===void 0&&(c=Oh(e,n,a))),c},Xd=s=>s.replace(/\$/g,"$$$$");class kx{constructor(e={}){var n;this.logger=Qi.create("interpolator"),this.options=e,this.format=((n=e==null?void 0:e.interpolation)==null?void 0:n.format)||(a=>a),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:a,useRawValueToEscape:o,prefix:c,prefixEscaped:u,suffix:f,suffixEscaped:m,formatSeparator:h,unescapeSuffix:x,unescapePrefix:g,nestingPrefix:v,nestingPrefixEscaped:y,nestingSuffix:M,nestingSuffixEscaped:E,nestingOptionsSeparator:S,maxReplaces:_,alwaysFormat:L}=e.interpolation;this.escape=n!==void 0?n:hS,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=c?Cs(c):u||"{{",this.suffix=f?Cs(f):m||"}}",this.formatSeparator=h||",",this.unescapePrefix=x?"":g||"-",this.unescapeSuffix=this.unescapePrefix?"":x||"",this.nestingPrefix=v?Cs(v):y||Cs("$t("),this.nestingSuffix=M?Cs(M):E||Cs(")"),this.nestingOptionsSeparator=S||",",this.maxReplaces=_||1e3,this.alwaysFormat=L!==void 0?L:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,a)=>(n==null?void 0:n.source)===a?(n.lastIndex=0,n):new RegExp(a,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,n,a,o){var y;let c,u,f;const m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=M=>{if(M.indexOf(this.formatSeparator)<0){const L=Vx(n,m,M,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(L,void 0,a,{...o,...n,interpolationkey:M}):L}const E=M.split(this.formatSeparator),S=E.shift().trim(),_=E.join(this.formatSeparator).trim();return this.format(Vx(n,m,S,this.options.keySeparator,this.options.ignoreJSONStructure),_,a,{...o,...n,interpolationkey:S})};this.resetRegExp();const x=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,g=((y=o==null?void 0:o.interpolation)==null?void 0:y.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:M=>Xd(M)},{regex:this.regexp,safeValue:M=>this.escapeValue?Xd(this.escape(M)):Xd(M)}].forEach(M=>{for(f=0;c=M.regex.exec(e);){const E=c[1].trim();if(u=h(E),u===void 0)if(typeof x=="function"){const _=x(e,c,o);u=At(_)?_:""}else if(o&&Object.prototype.hasOwnProperty.call(o,E))u="";else if(g){u=c[0];continue}else this.logger.warn(`missed to pass in variable ${E} for interpolating ${e}`),u="";else!At(u)&&!this.useRawValueToEscape&&(u=Ux(u));const S=M.safeValue(u);if(e=e.replace(c[0],S),g?(M.regex.lastIndex+=u.length,M.regex.lastIndex-=c[0].length):M.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),e}nest(e,n,a={}){let o,c,u;const f=(m,h)=>{const x=this.nestingOptionsSeparator;if(m.indexOf(x)<0)return m;const g=m.split(new RegExp(`${x}[ ]*{`));let v=`{${g[1]}`;m=g[0],v=this.interpolate(v,u);const y=v.match(/'/g),M=v.match(/"/g);(((y==null?void 0:y.length)??0)%2===0&&!M||M.length%2!==0)&&(v=v.replace(/'/g,'"'));try{u=JSON.parse(v),h&&(u={...h,...u})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${m}`,E),`${m}${x}${v}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,m};for(;o=this.nestingRegexp.exec(e);){let m=[];u={...a},u=u.replace&&!At(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;const h=/{.*}/.test(o[1])?o[1].lastIndexOf("}")+1:o[1].indexOf(this.formatSeparator);if(h!==-1&&(m=o[1].slice(h).split(this.formatSeparator).map(x=>x.trim()).filter(Boolean),o[1]=o[1].slice(0,h)),c=n(f.call(this,o[1].trim(),u),u),c&&o[0]===e&&!At(c))return c;At(c)||(c=Ux(c)),c||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),c=""),m.length&&(c=m.reduce((x,g)=>this.format(x,g,a.lng,{...a,interpolationkey:o[1].trim()}),c.trim())),e=e.replace(o[0],c),this.regexp.lastIndex=0}return e}}const bS=s=>{let e=s.toLowerCase().trim();const n={};if(s.indexOf("(")>-1){const a=s.split("(");e=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);e==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(u=>{if(u){const[f,...m]=u.split(":"),h=m.join(":").trim().replace(/^'+|'+$/g,""),x=f.trim();n[x]||(n[x]=h),h==="false"&&(n[x]=!1),h==="true"&&(n[x]=!0),isNaN(h)||(n[x]=parseInt(h,10))}})}return{formatName:e,formatOptions:n}},jx=s=>{const e={};return(n,a,o)=>{let c=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(c={...c,[o.interpolationkey]:void 0});const u=a+JSON.stringify(c);let f=e[u];return f||(f=s(ml(a),o),e[u]=f),f(n)}},SS=s=>(e,n,a)=>s(ml(n),a)(e);class MS{constructor(e={}){this.logger=Qi.create("formatter"),this.options=e,this.init(e)}init(e,n={interpolation:{}}){this.formatSeparator=n.interpolation.formatSeparator||",";const a=n.cacheInBuiltFormats?jx:SS;this.formats={number:a((o,c)=>{const u=new Intl.NumberFormat(o,{...c});return f=>u.format(f)}),currency:a((o,c)=>{const u=new Intl.NumberFormat(o,{...c,style:"currency"});return f=>u.format(f)}),datetime:a((o,c)=>{const u=new Intl.DateTimeFormat(o,{...c});return f=>u.format(f)}),relativetime:a((o,c)=>{const u=new Intl.RelativeTimeFormat(o,{...c});return f=>u.format(f,c.range||"day")}),list:a((o,c)=>{const u=new Intl.ListFormat(o,{...c});return f=>u.format(f)})}}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=jx(n)}format(e,n,a,o={}){const c=n.split(this.formatSeparator);if(c.length>1&&c[0].indexOf("(")>1&&c[0].indexOf(")")<0&&c.find(f=>f.indexOf(")")>-1)){const f=c.findIndex(m=>m.indexOf(")")>-1);c[0]=[c[0],...c.splice(1,f)].join(this.formatSeparator)}return c.reduce((f,m)=>{var g;const{formatName:h,formatOptions:x}=bS(m);if(this.formats[h]){let v=f;try{const y=((g=o==null?void 0:o.formatParams)==null?void 0:g[o.interpolationkey])||{},M=y.locale||y.lng||o.locale||o.lng||a;v=this.formats[h](f,M,{...x,...o,...y})}catch(y){this.logger.warn(y)}return v}else this.logger.warn(`there was no format function for ${h}`);return f},e)}}const ES=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class TS extends Au{constructor(e,n,a,o={}){var c,u;super(),this.backend=e,this.store=n,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Qi.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(c=this.backend)==null?void 0:c.init)==null||u.call(c,a,o.backend,o)}queueLoad(e,n,a,o){const c={},u={},f={},m={};return e.forEach(h=>{let x=!0;n.forEach(g=>{const v=`${h}|${g}`;!a.reload&&this.store.hasResourceBundle(h,g)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?u[v]===void 0&&(u[v]=!0):(this.state[v]=1,x=!1,u[v]===void 0&&(u[v]=!0),c[v]===void 0&&(c[v]=!0),m[g]===void 0&&(m[g]=!0)))}),x||(f[h]=!0)}),(Object.keys(c).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(c),pending:Object.keys(u),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(m)}}loaded(e,n,a){const o=e.split("|"),c=o[0],u=o[1];n&&this.emit("failedLoading",c,u,n),!n&&a&&this.store.addResourceBundle(c,u,a,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&a&&(this.state[e]=0);const f={};this.queue.forEach(m=>{uS(m.loaded,[c],u),ES(m,e),n&&m.errors.push(n),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(h=>{f[h]||(f[h]={});const x=m.loaded[h];x.length&&x.forEach(g=>{f[h][g]===void 0&&(f[h][g]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(m=>!m.done)}read(e,n,a,o=0,c=this.retryTimeout,u){if(!e.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:a,tried:o,wait:c,callback:u});return}this.readingCalls++;const f=(h,x)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(h&&x&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,a,o+1,c*2,u)},c);return}u(h,x)},m=this.backend[a].bind(this.backend);if(m.length===2){try{const h=m(e,n);h&&typeof h.then=="function"?h.then(x=>f(null,x)).catch(f):f(null,h)}catch(h){f(h)}return}return m(e,n,f)}prepareLoading(e,n,a={},o){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();At(e)&&(e=this.languageUtils.toResolveHierarchy(e)),At(n)&&(n=[n]);const c=this.queueLoad(e,n,a,o);if(!c.toLoad.length)return c.pending.length||o(),null;c.toLoad.forEach(u=>{this.loadOne(u)})}load(e,n,a){this.prepareLoading(e,n,{},a)}reload(e,n,a){this.prepareLoading(e,n,{reload:!0},a)}loadOne(e,n=""){const a=e.split("|"),o=a[0],c=a[1];this.read(o,c,"read",void 0,void 0,(u,f)=>{u&&this.logger.warn(`${n}loading namespace ${c} for language ${o} failed`,u),!u&&f&&this.logger.log(`${n}loaded namespace ${c} for language ${o}`,f),this.loaded(e,u,f)})}saveMissing(e,n,a,o,c,u={},f=()=>{}){var m,h,x,g,v;if((h=(m=this.services)==null?void 0:m.utils)!=null&&h.hasLoadedNamespace&&!((g=(x=this.services)==null?void 0:x.utils)!=null&&g.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${a}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((v=this.backend)!=null&&v.create){const y={...u,isUpdate:c},M=this.backend.create.bind(this.backend);if(M.length<6)try{let E;M.length===5?E=M(e,n,a,o,y):E=M(e,n,a,o),E&&typeof E.then=="function"?E.then(S=>f(null,S)).catch(f):f(null,E)}catch(E){f(E)}else M(e,n,a,o,f,y)}!e||!e[0]||this.store.addResource(e[0],n,a,o)}}}const Xx=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),At(s[1])&&(e.defaultValue=s[1]),At(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const n=s[3]||s[2];Object.keys(n).forEach(a=>{e[a]=n[a]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Wx=s=>{var e,n;return At(s.ns)&&(s.ns=[s.ns]),At(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),At(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),((n=(e=s.supportedLngs)==null?void 0:e.indexOf)==null?void 0:n.call(e,"cimode"))<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),typeof s.initImmediate=="boolean"&&(s.initAsync=s.initImmediate),s},zc=()=>{},AS=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(n=>{typeof s[n]=="function"&&(s[n]=s[n].bind(s))})};class dl extends Au{constructor(e={},n){if(super(),this.options=Wx(e),this.services={},this.logger=Qi,this.modules={external:[]},AS(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(e={},n){this.isInitializing=!0,typeof e=="function"&&(n=e,e={}),e.defaultNS==null&&e.ns&&(At(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const a=Xx();this.options={...a,...this.options,...Wx(e)},this.options.interpolation={...a.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=a.overloadTranslationOptionHandler);const o=h=>h?typeof h=="function"?new h:h:null;if(!this.options.isClone){this.modules.logger?Qi.init(o(this.modules.logger),this.options):Qi.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:h=MS;const x=new Bx(this.options);this.store=new zx(this.options.resources,this.options);const g=this.services;g.logger=Qi,g.resourceStore=this.store,g.languageUtils=x,g.pluralResolver=new yS(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==a.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),h&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(g.formatter=o(h),g.formatter.init&&g.formatter.init(g,this.options),this.options.interpolation.format=g.formatter.format.bind(g.formatter)),g.interpolator=new kx(this.options),g.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},g.backendConnector=new TS(o(this.modules.backend),g.resourceStore,g,this.options),g.backendConnector.on("*",(y,...M)=>{this.emit(y,...M)}),this.modules.languageDetector&&(g.languageDetector=o(this.modules.languageDetector),g.languageDetector.init&&g.languageDetector.init(g,this.options.detection,this.options)),this.modules.i18nFormat&&(g.i18nFormat=o(this.modules.i18nFormat),g.i18nFormat.init&&g.i18nFormat.init(this)),this.translator=new xu(this.services,this.options),this.translator.on("*",(y,...M)=>{this.emit(y,...M)}),this.modules.external.forEach(y=>{y.init&&y.init(this)})}if(this.format=this.options.interpolation.format,n||(n=zc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=(...x)=>this.store[h](...x)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=(...x)=>(this.store[h](...x),this)});const f=$o(),m=()=>{const h=(x,g)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(g),n(x,g)};if(this.languages&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),f}loadResources(e,n=zc){var c,u;let a=n;const o=At(e)?e:this.language;if(typeof e=="function"&&(a=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const f=[],m=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(g=>{g!=="cimode"&&f.indexOf(g)<0&&f.push(g)})};o?m(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(x=>m(x)),(u=(c=this.options.preload)==null?void 0:c.forEach)==null||u.call(c,h=>m(h)),this.services.backendConnector.load(f,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(h)})}else a(null)}reloadResources(e,n,a){const o=$o();return typeof e=="function"&&(a=e,e=void 0),typeof n=="function"&&(a=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),a||(a=zc),this.services.backendConnector.reload(e,n,c=>{o.resolve(),a(c)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&S_.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let n=0;n<this.languages.length;n++){const a=this.languages[n];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,n){this.isLanguageChangingTo=e;const a=$o();this.emit("languageChanging",e);const o=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},c=(f,m)=>{m?this.isLanguageChangingTo===e&&(o(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,a.resolve((...h)=>this.t(...h)),n&&n(f,(...h)=>this.t(...h))},u=f=>{var x,g;!e&&!f&&this.services.languageDetector&&(f=[]);const m=At(f)?f:f&&f[0],h=this.store.hasLanguageSomeTranslations(m)?m:this.services.languageUtils.getBestMatchFromCodes(At(f)?[f]:f);h&&(this.language||o(h),this.translator.language||this.translator.changeLanguage(h),(g=(x=this.services.languageDetector)==null?void 0:x.cacheUserLanguage)==null||g.call(x,h)),this.loadResources(h,v=>{c(v,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?u(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(u):this.services.languageDetector.detect(u):u(e),a}getFixedT(e,n,a){const o=(c,u,...f)=>{let m;typeof u!="object"?m=this.options.overloadTranslationOptionHandler([c,u].concat(f)):m={...u},m.lng=m.lng||o.lng,m.lngs=m.lngs||o.lngs,m.ns=m.ns||o.ns,m.keyPrefix!==""&&(m.keyPrefix=m.keyPrefix||a||o.keyPrefix);const h=this.options.keySeparator||".";let x;return m.keyPrefix&&Array.isArray(c)?x=c.map(g=>(typeof g=="function"&&(g=Ph(g,{...this.options,...u})),`${m.keyPrefix}${h}${g}`)):(typeof c=="function"&&(c=Ph(c,{...this.options,...u})),x=m.keyPrefix?`${m.keyPrefix}${h}${c}`:c),this.t(x,m)};return At(e)?o.lng=e:o.lngs=e,o.ns=n,o.keyPrefix=a,o}t(...e){var n;return(n=this.translator)==null?void 0:n.translate(...e)}exists(...e){var n;return(n=this.translator)==null?void 0:n.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,n={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,c=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const u=(f,m)=>{const h=this.services.backendConnector.state[`${f}|${m}`];return h===-1||h===0||h===2};if(n.precheck){const f=n.precheck(this,u);if(f!==void 0)return f}return!!(this.hasResourceBundle(a,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(a,e)&&(!o||u(c,e)))}loadNamespaces(e,n){const a=$o();return this.options.ns?(At(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),n&&n(o)}),a):(n&&n(),Promise.resolve())}loadLanguages(e,n){const a=$o();At(e)&&(e=[e]);const o=this.options.preload||[],c=e.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return c.length?(this.options.preload=o.concat(c),this.loadResources(u=>{a.resolve(),n&&n(u)}),a):(n&&n(),Promise.resolve())}dir(e){var o,c;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const u=new Intl.Locale(e);if(u&&u.getTextInfo){const f=u.getTextInfo();if(f&&f.direction)return f.direction}}catch{}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((c=this.services)==null?void 0:c.languageUtils)||new Bx(Xx());return e.toLowerCase().indexOf("-latn")>1?"ltr":n.indexOf(a.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},n){const a=new dl(e,n);return a.createInstance=dl.createInstance,a}cloneInstance(e={},n=zc){const a=e.forkResourceStore;a&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},c=new dl(o);if((e.debug!==void 0||e.prefix!==void 0)&&(c.logger=c.logger.clone(e)),["store","services","language"].forEach(f=>{c[f]=this[f]}),c.services={...this.services},c.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},a){const f=Object.keys(this.store.data).reduce((m,h)=>(m[h]={...this.store.data[h]},m[h]=Object.keys(m[h]).reduce((x,g)=>(x[g]={...m[h][g]},x),m[h]),m),{});c.store=new zx(f,o),c.services.resourceStore=c.store}return e.interpolation&&(c.services.interpolator=new kx(o)),c.translator=new xu(c.services,o),c.translator.on("*",(f,...m)=>{c.emit(f,...m)}),c.init(o,n),c.translator.options=o,c.translator.backendConnector.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ni=dl.createInstance();ni.createInstance;ni.dir;ni.init;ni.loadResources;ni.reloadResources;ni.use;ni.changeLanguage;ni.getFixedT;ni.t;ni.exists;ni.setDefaultNamespace;ni.hasLoadedNamespace;ni.loadNamespaces;ni.loadLanguages;const wS=(s,e,n,a)=>{var c,u,f,m;const o=[n,{code:e,...a||{}}];if((u=(c=s==null?void 0:s.services)==null?void 0:c.logger)!=null&&u.forward)return s.services.logger.forward(o,"warn","react-i18next::",!0);qr(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(m=(f=s==null?void 0:s.services)==null?void 0:f.logger)!=null&&m.warn?s.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},Yx={},E_=(s,e,n,a)=>{qr(n)&&Yx[n]||(qr(n)&&(Yx[n]=new Date),wS(s,e,n,a))},T_=(s,e)=>()=>{if(s.isInitialized)e();else{const n=()=>{setTimeout(()=>{s.off("initialized",n)},0),e()};s.on("initialized",n)}},Ih=(s,e,n)=>{s.loadNamespaces(e,T_(s,n))},qx=(s,e,n,a)=>{if(qr(n)&&(n=[n]),s.options.preload&&s.options.preload.indexOf(e)>-1)return Ih(s,n,a);n.forEach(o=>{s.options.ns.indexOf(o)<0&&s.options.ns.push(o)}),s.loadLanguages(e,T_(s,a))},RS=(s,e,n={})=>!e.languages||!e.languages.length?(E_(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(s,{lng:n.lng,precheck:(a,o)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,s))return!1}}),qr=s=>typeof s=="string",CS=s=>typeof s=="object"&&s!==null,DS=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,NS={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},LS=s=>NS[s],US=s=>s.replace(DS,LS);let zh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:US,transDefaultProps:void 0};const OS=(s={})=>{zh={...zh,...s}},PS=()=>zh;let A_;const IS=s=>{A_=s},zS=()=>A_,FS={type:"3rdParty",init(s){OS(s.options.react),IS(s)}},BS=ae.createContext();class HS{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Wd={exports:{}},Yd={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx;function GS(){if(Zx)return Yd;Zx=1;var s=Mu();function e(g,v){return g===v&&(g!==0||1/g===1/v)||g!==g&&v!==v}var n=typeof Object.is=="function"?Object.is:e,a=s.useState,o=s.useEffect,c=s.useLayoutEffect,u=s.useDebugValue;function f(g,v){var y=v(),M=a({inst:{value:y,getSnapshot:v}}),E=M[0].inst,S=M[1];return c(function(){E.value=y,E.getSnapshot=v,m(E)&&S({inst:E})},[g,y,v]),o(function(){return m(E)&&S({inst:E}),g(function(){m(E)&&S({inst:E})})},[g]),u(y),y}function m(g){var v=g.getSnapshot;g=g.value;try{var y=v();return!n(g,y)}catch{return!0}}function h(g,v){return v()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:f;return Yd.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:x,Yd}var Kx;function VS(){return Kx||(Kx=1,Wd.exports=GS()),Wd.exports}var kS=VS();const jS=(s,e)=>qr(e)?e:CS(e)&&qr(e.defaultValue)?e.defaultValue:Array.isArray(s)?s[s.length-1]:s,XS={t:jS,ready:!1},WS=()=>()=>{},vr=(s,e={})=>{var w,A,H;const{i18n:n}=e,{i18n:a,defaultNS:o}=ae.useContext(BS)||{},c=n||a||zS();c&&!c.reportNamespaces&&(c.reportNamespaces=new HS),c||E_(c,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const u=ae.useMemo(()=>{var k;return{...PS(),...(k=c==null?void 0:c.options)==null?void 0:k.react,...e}},[c,e]),{useSuspense:f,keyPrefix:m}=u,h=o||((w=c==null?void 0:c.options)==null?void 0:w.defaultNS),x=qr(h)?[h]:h||["translation"],g=ae.useMemo(()=>x,x);(H=(A=c==null?void 0:c.reportNamespaces)==null?void 0:A.addUsedNamespaces)==null||H.call(A,g);const v=ae.useRef(0),y=ae.useCallback(k=>{if(!c)return WS;const{bindI18n:W,bindI18nStore:J}=u,ie=()=>{v.current+=1,k()};return W&&c.on(W,ie),J&&c.store.on(J,ie),()=>{W&&W.split(" ").forEach(I=>c.off(I,ie)),J&&J.split(" ").forEach(I=>c.store.off(I,ie))}},[c,u]),M=ae.useRef(),E=ae.useCallback(()=>{if(!c)return XS;const k=!!(c.isInitialized||c.initializedStoreOnce)&&g.every(Z=>RS(Z,c,u)),W=e.lng||c.language,J=v.current,ie=M.current;if(ie&&ie.ready===k&&ie.lng===W&&ie.keyPrefix===m&&ie.revision===J)return ie;const Y={t:c.getFixedT(W,u.nsMode==="fallback"?g:g[0],m),ready:k,lng:W,keyPrefix:m,revision:J};return M.current=Y,Y},[c,g,m,u,e.lng]),[S,_]=ae.useState(0),{t:L,ready:D}=kS.useSyncExternalStore(y,E,E);ae.useEffect(()=>{if(c&&!D&&!f){const k=()=>_(W=>W+1);e.lng?qx(c,e.lng,g,k):Ih(c,g,k)}},[c,e.lng,g,D,f,S]);const O=c||{},F=ae.useRef(null),P=ae.useRef(),B=k=>{const W=Object.getOwnPropertyDescriptors(k);W.__original&&delete W.__original;const J=Object.create(Object.getPrototypeOf(k),W);if(!Object.prototype.hasOwnProperty.call(J,"__original"))try{Object.defineProperty(J,"__original",{value:k,writable:!1,enumerable:!1,configurable:!1})}catch{}return J},q=ae.useMemo(()=>{const k=O,W=k==null?void 0:k.language;let J=k;k&&(F.current&&F.current.__original===k?P.current!==W?(J=B(k),F.current=J,P.current=W):J=F.current:(J=B(k),F.current=J,P.current=W));const ie=[L,J,D];return ie.t=L,ie.i18n=J,ie.ready=D,ie},[L,O,D,O.resolvedLanguage,O.language,O.languages]);if(c&&f&&!D)throw new Promise(k=>{const W=()=>k();e.lng?qx(c,e.lng,g,W):Ih(c,g,W)});return q},YS="/assets/carrot-DGt1Aet5.png",qS=({className:s})=>N.jsxs("svg",{viewBox:"0 0 24 24",className:s,fill:"currentColor","aria-hidden":"true",children:[N.jsx("rect",{x:"5",y:"6.5",width:"2.5",height:"11",rx:"1.25"}),N.jsx("path",{d:"M18 7.2c0-1-.9-1.6-1.7-1.1L9.5 10.8c-.7.4-.7 1.4 0 1.9l6.8 4.7c.8.5 1.7-.1 1.7-1.1V7.2z"})]}),ZS=({className:s})=>N.jsxs("svg",{viewBox:"0 0 24 24",className:s,fill:"currentColor","aria-hidden":"true",children:[N.jsx("rect",{x:"16.5",y:"6.5",width:"2.5",height:"11",rx:"1.25"}),N.jsx("path",{d:"M6 7.2c0-1 .9-1.6 1.7-1.1l6.8 4.7c.7.4.7 1.4 0 1.9l-6.8 4.7c-.8.5-1.7-.1-1.7-1.1V7.2z"})]}),Qx=s=>{if(!s||isNaN(s))return"00:00";const e=Math.floor(s/60),n=Math.floor(s%60);return`${e<10?"0":""}${e}:${n<10?"0":""}${n}`},KS=({className:s})=>N.jsxs("svg",{viewBox:"0 0 120 120",className:`loading-bars-svg ${s??""}`,"aria-hidden":"true",children:[N.jsx("rect",{className:"loading-bars-svg__bar loading-bars-svg__bar--1",x:"18",y:"22",width:"14",height:"76",rx:"7",fill:"currentColor"}),N.jsx("rect",{className:"loading-bars-svg__bar loading-bars-svg__bar--2",x:"40",y:"22",width:"14",height:"76",rx:"7",fill:"currentColor"}),N.jsx("rect",{className:"loading-bars-svg__bar loading-bars-svg__bar--3",x:"62",y:"22",width:"14",height:"76",rx:"7",fill:"currentColor"}),N.jsx("rect",{className:"loading-bars-svg__bar loading-bars-svg__bar--4",x:"84",y:"22",width:"14",height:"76",rx:"7",fill:"currentColor"})]}),QS=({isPlaying:s,isLoading:e=!1,onPlayPause:n,currentTime:a,duration:o,onSeek:c,onScrub:u,theme:f,currentSongId:m,onSongChange:h,isPlaylistOpen:x,onTogglePlaylist:g,isThemeOpen:v,onToggleTheme:y,onSkipPrev:M,onSkipNext:E,coverUrl:S,songTitle:_,artistName:L})=>{const D=Uh(f),O=f==="cubes",F=f==="particle"||f==="cubes"||f==="powerpuff",{t:P}=vr(),[B,q]=Nn.useState(!1),w=Nn.useRef(!1),[A,H]=Nn.useState(0),k=Nn.useRef(0),W=Nn.useRef(0),J=33,ie=he=>Number.isFinite(he)?!o||!Number.isFinite(o)||o<=0?Math.max(0,he):Math.min(Math.max(0,he),o):0,I=B?A:a,Y=he=>{const Ee=ie(Number(he.target.value));k.current=Ee,H(Ee),w.current||c(Ee)},Z=(he,Ee)=>{if(!Number.isFinite(o)||o<=0)return null;const Be=he.getBoundingClientRect(),te=Be.width>0?(Ee-Be.left)/Be.width:0,me=ie(te*o);return k.current=me,H(me),me},pe=(he,Ee=!1)=>{if(!u||he===null)return;const Be=performance.now();(Ee||Be-W.current>=J)&&(W.current=Be,u(he))},Me=he=>{he.preventDefault();const Ee=he.currentTarget;w.current=!0;const Be=Z(Ee,he.clientX);q(!0),pe(Be,!0);try{Ee.setPointerCapture(he.pointerId)}catch{}},z=he=>{if(!w.current)return;const Ee=Z(he.currentTarget,he.clientX);pe(Ee)},ee=he=>{if(!w.current)return;let Ee=k.current;if(he){const Be=Z(he.currentTarget,he.clientX);Be!==null&&(Ee=Be)}w.current=!1,q(!1),c(ie(Ee))};return N.jsxs("div",{className:"w-full px-6 md:px-12 pt-2 flex flex-col gap-2 z-50 relative",style:{paddingBottom:"calc(2rem + env(safe-area-inset-bottom))"},children:[N.jsxs("div",{className:"flex items-center justify-between mb-2",children:[N.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[f!=="vinyl"&&N.jsx("img",{src:S,alt:_,className:`w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-md ${F?"hidden sm:block":""}`}),N.jsxs("div",{className:"min-w-0",children:[N.jsx("div",{className:"sm:hidden song-title-marquee",title:_,children:N.jsxs("div",{className:"song-title-marquee-track",children:[N.jsxs("span",{className:`song-title-marquee-segment text-sm font-normal ${D?"text-white/80":"text-gray-700"}`,children:[N.jsx("span",{className:"whitespace-nowrap",children:_}),N.jsx("span",{className:"song-title-marquee-gap","aria-hidden":"true"})]}),N.jsxs("span",{className:`song-title-marquee-segment text-sm font-normal ${D?"text-white/80":"text-gray-700"}`,"aria-hidden":"true",children:[N.jsx("span",{className:"whitespace-nowrap",children:_}),N.jsx("span",{className:"song-title-marquee-gap","aria-hidden":"true"})]})]})}),N.jsx("p",{className:`hidden sm:block text-sm font-normal truncate ${D?"text-white/80":"text-gray-700"}`,children:_}),N.jsx("p",{className:`text-xs truncate ${D?"text-white/50":"text-gray-400"}`,children:L})]})]}),N.jsxs("div",{className:"flex items-center gap-6 md:gap-8 flex-1 justify-center",children:[N.jsx("button",{onClick:M,className:`${D?"text-white/60 hover:text-white/80":"text-black/45 hover:text-black/65"} transition-colors active:scale-90`,children:N.jsx(qS,{className:"w-10 h-10"})}),N.jsx("button",{onClick:n,className:`w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-all active:scale-95 ${O?"bg-black/5 text-black/70 hover:bg-black/10":D?"shadow-xl bg-white/20 text-white/90 hover:bg-white/30 shadow-black/20":"bg-black/5 text-black/70 hover:bg-black/10"}`,children:e?N.jsx(KS,{className:"w-7 h-7"}):s?N.jsx(v_,{className:"w-7 h-7 fill-current stroke-none"}):N.jsx(__,{className:"w-7 h-7 fill-current stroke-none ml-1"})}),N.jsx("button",{onClick:E,className:`${D?"text-white/60 hover:text-white/80":"text-black/45 hover:text-black/65"} transition-colors active:scale-90`,children:N.jsx(ZS,{className:"w-10 h-10"})})]}),N.jsxs("div",{className:"flex items-center gap-6 flex-1 justify-end",children:[N.jsx("button",{className:`flex items-center justify-center transition-colors ${v?"text-[#ff4d6a]":D?"text-white/60 hover:text-white/80":"text-black/40 hover:text-black/60"}`,title:P("ui.themes"),onClick:y,children:N.jsx(H1,{className:"w-[22px] h-[22px]"})}),N.jsx("button",{className:`flex items-center justify-center transition-colors ${x?"text-[#ff4d6a]":D?"text-white/60 hover:text-white/80":"text-black/40 hover:text-black/60"}`,title:P("ui.playlist"),onClick:g,children:N.jsx(F1,{className:"w-[22px] h-[22px]"})})]})]}),N.jsxs("div",{className:`flex items-center gap-2 sm:gap-3 w-full max-w-3xl mx-auto text-xs font-medium transition-colors ${D?"text-white/40 hover:text-white/60":"text-black/40 hover:text-black/60"}`,children:[N.jsx("span",{className:"w-[2.25rem] text-left sm:w-10 sm:text-right tabular-nums",children:Qx(I)}),N.jsxs("div",{className:"relative flex-1 h-[3px] group cursor-pointer flex items-center",children:[N.jsx("input",{type:"range",min:0,max:o||100,value:I,onChange:Y,onPointerDown:Me,onPointerMove:z,onPointerUp:he=>ee(he),onPointerCancel:()=>ee(),className:"absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-8 opacity-0 cursor-pointer z-20 touch-none",style:{touchAction:"none"}}),N.jsx("div",{className:`absolute top-0 left-0 h-full rounded-full w-full ${D?"bg-white/20":"bg-black/15"}`}),N.jsx("div",{className:`absolute top-0 left-0 h-full rounded-full ${B?"transition-none":"transition-all duration-100"} ${D?"bg-white":"bg-black/70"}`,style:{width:`${o?I/o*100:0}%`}}),f==="vinyl"?N.jsx("img",{src:YS,alt:"",className:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 object-contain opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity pointer-events-none drop-shadow-sm",style:{left:`${o?I/o*100:0}%`}}):N.jsx("div",{className:`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full shadow-md opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity pointer-events-none ${D?"bg-white border border-white/20":"bg-white border border-black/10"}`,style:{left:`${o?I/o*100:0}%`}})]}),N.jsx("span",{className:"w-[2.25rem] text-right sm:w-10 sm:text-left tabular-nums",children:Qx(o)})]})]})};class JS{constructor(e,n,a,o,c){this.x=e,this.y=n,this.z=a,this.originX=e,this.originY=n,this.originZ=a,this.targetX=e,this.targetY=n,this.targetZ=a,this.color=o,this.size=c}draw(e,n,a){const c=400/(400+this.z);if(c<=0)return;const u=n/2+(this.x-n/2)*c,f=a/2+(this.y-a/2)*c,m=this.size*c,h=Math.max(.2,Math.min(1,c));e.fillStyle=`rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${h})`,e.beginPath(),e.arc(u,f,m/2,0,Math.PI*2),e.fill()}update(e,n,a,o,c){let u=0;if(e.length>0){const v=this.originX/a,y=Math.floor(v*e.length*.6);u=(e[y]||0)/255*n.amplitude}const f=Date.now()*.001*n.speed,m=-u*200,h=Math.sin(this.originY*.02+f)*u*30,x=Math.cos(this.originX*.02+f)*u*30;this.originX+h,this.originY+x,this.originZ+m;const g=c*(2-c);this.x=this.originX+h*g,this.y=this.originY+x*g,this.z=this.originZ+m*g}}const $S=({analyser:s,coverUrl:e,isPlaying:n,params:a})=>{const o=ae.useRef(null),c=ae.useRef([]),u=ae.useRef(null),[f,m]=ae.useState(!1),h=ae.useRef(null),x=ae.useRef(0);return ae.useEffect(()=>{m(!1);const g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{h.current=g,m(!0)}},[e]),ae.useEffect(()=>{var y;if(!h.current||!o.current)return;const g=()=>{const M=h.current,E=o.current,S=document.createElement("canvas"),_=S.getContext("2d");if(!_)return;const L=150,D=L/M.width,O=Math.floor(M.height*D);S.width=L,S.height=O,_.drawImage(M,0,0,L,O);const P=_.getImageData(0,0,L,O).data,B=[],q=Math.max(1,Math.floor(a.density)),w=(ee,he,Ee)=>Math.min(Ee,Math.max(he,ee)),A=.7,H=Math.min(E.width,E.height),k=w(H*.45,140,320),W=Math.max(L,O),J=k/(W*A),ie=L*J,I=O*J,Y=(E.width-ie)/2,Z=(E.height-I)/2,pe=2,Me=L*pe,z=O*pe;(E.width-Me)/2,(E.height-z)/2;for(let ee=0;ee<O;ee+=q)for(let he=0;he<L;he+=q){const Ee=(ee*L+he)*4,Be=P[Ee],te=P[Ee+1],me=P[Ee+2];if(P[Ee+3]>100){const Ge=(Math.random()-.5)*200,qe=Y+he*J,Ke=Z+ee*J,Te=new JS(qe,Ke,Ge,{r:Be,g:te,b:me},a.baseSize);B.push(Te)}}c.current=B,x.current=0};o.current&&o.current.parentElement&&(o.current.width=o.current.parentElement.clientWidth,o.current.height=o.current.parentElement.clientHeight),g();const v=new ResizeObserver(M=>{for(let E of M)o.current&&(o.current.width=E.contentRect.width,o.current.height=E.contentRect.height,g())});return(y=o.current)!=null&&y.parentElement&&v.observe(o.current.parentElement),()=>v.disconnect()},[f,a.density,a.baseSize]),ae.useEffect(()=>{if(!o.current)return;const g=o.current,v=g.getContext("2d");if(!v)return;let y=new Uint8Array(0);s&&(y=new Uint8Array(s.frequencyBinCount));let M=0;const E=5,S=()=>{M++,v.clearRect(0,0,g.width,g.height),v.globalCompositeOperation="source-over",x.current<1&&(x.current+=.01,x.current>1&&(x.current=1));const _=x.current,L=.5+.2*(_*(2-_));s&&s.getByteFrequencyData(y);const D=g.width/2,O=g.height/2;c.current.forEach(F=>{F.update(y,a,g.width,g.height,_),F.x=D+(F.x-D)*L,F.y=O+(F.y-O)*L,F.z=F.z*L}),M%E===0&&c.current.sort((F,P)=>P.z-F.z),c.current.forEach(F=>{F.draw(v,g.width,g.height)}),u.current=requestAnimationFrame(S)};return S(),()=>{u.current!==null&&cancelAnimationFrame(u.current),u.current=null}},[s,a]),N.jsx("div",{className:"relative w-full h-full bg-black overflow-hidden",children:N.jsx("canvas",{ref:o,className:"block w-full h-full"})})},wu=({darkUI:s})=>{const{i18n:e,t:n}=vr(),a=e.language.startsWith("zh")?"zh":"en",o=g=>{e.changeLanguage(g)},c=s?"text-white/50":"text-black/40",u=s?"bg-white/10":"bg-black/10",f=s?"bg-white/25":"bg-white shadow-sm",m=s?"text-white":"text-black/70",h=s?"text-white/40":"text-black/30",x=s?"border-white/10":"border-black/5";return N.jsxs("div",{className:`flex items-center justify-between mt-4 pt-4 border-t ${x}`,children:[N.jsx("span",{className:`text-xs font-medium ${c}`,children:n("ui.language")}),N.jsxs("div",{className:`flex p-0.5 rounded-lg ${u}`,children:[N.jsx("button",{onClick:()=>o("zh"),className:`px-3 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${a==="zh"?`${f} ${m}`:`${h} hover:opacity-70`}`,children:"中文"}),N.jsx("button",{onClick:()=>o("en"),className:`px-3 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${a==="en"?`${f} ${m}`:`${h} hover:opacity-70`}`,children:"EN"})]})]})},eM={density:2,baseSize:2,amplitude:2.1,speed:1.5},tM=({params:s,onChange:e,isUIHidden:n})=>{const[a,o]=Nn.useState(!1),{t:c}=vr(),u=()=>{e(eM)},f=(m,h)=>{e({...s,[m]:h})};return n?null:a?N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"fixed inset-0 z-[19] bg-transparent",onClick:()=>o(!1)}),N.jsxs("div",{className:"absolute top-[70px] right-6 z-20 w-64 bg-white/10 backdrop-blur-xl rounded-2xl p-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[N.jsxs("div",{className:"flex items-center justify-between mb-6",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("h3",{className:"text-sm font-bold text-white/70 uppercase tracking-wider",children:c("controls.particle_title")}),N.jsx("button",{onClick:u,className:"text-gray-400 hover:text-gray-300 transition-colors",title:c("ui.reset"),children:N.jsx(Eu,{className:"w-4 h-4"})})]}),N.jsx("button",{onClick:()=>o(!1),className:"text-gray-400 hover:text-gray-300 transition-colors",children:N.jsx(Qr,{className:"w-5 h-5"})})]}),N.jsxs("div",{className:"space-y-6",children:[N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50",children:[N.jsx("span",{children:c("controls.density")}),N.jsx("span",{className:"text-white/40",children:11-s.density})]}),N.jsx("input",{type:"range",min:"1",max:"10",step:"1",value:11-s.density,onChange:m=>f("density",11-parseInt(m.target.value)),className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"})]}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50",children:[N.jsx("span",{children:c("controls.size")}),N.jsxs("span",{className:"text-white/40",children:[s.baseSize.toFixed(1),"px"]})]}),N.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:s.baseSize,onChange:m=>f("baseSize",parseFloat(m.target.value)),className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"})]}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50",children:[N.jsx("span",{children:c("controls.amplitude")}),N.jsx("span",{className:"text-white/40",children:s.amplitude.toFixed(1)})]}),N.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:s.amplitude,onChange:m=>f("amplitude",parseFloat(m.target.value)),className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"})]}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50",children:[N.jsx("span",{children:c("controls.speed")}),N.jsx("span",{className:"text-white/40",children:s.speed.toFixed(1)})]}),N.jsx("input",{type:"range",min:"0.1",max:"5",step:"0.1",value:s.speed,onChange:m=>f("speed",parseFloat(m.target.value)),className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"})]}),N.jsx(wu,{darkUI:!0})]})]})]}):N.jsx("button",{onClick:()=>o(!0),className:"absolute top-[70px] right-6 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full transition-all text-gray-400 hover:text-gray-300 hover:bg-white/15",children:N.jsx(Tu,{className:"w-[20px] h-[20px]"})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const C0="181",nM=0,Jx=1,iM=2,w_=1,aM=2,Ta=3,gr=0,ci=1,wa=2,Da=0,Js=1,$x=2,ev=3,tv=4,rM=5,jr=100,sM=101,oM=102,lM=103,cM=104,uM=200,fM=201,dM=202,hM=203,Fh=204,Bh=205,pM=206,mM=207,gM=208,xM=209,vM=210,_M=211,yM=212,bM=213,SM=214,Hh=0,Gh=1,Vh=2,eo=3,kh=4,jh=5,Xh=6,Wh=7,R_=0,MM=1,EM=2,Na=0,TM=1,AM=2,wM=3,RM=4,CM=5,DM=6,NM=7,C_=300,to=301,no=302,Yh=303,qh=304,Ru=306,Zh=1e3,Ra=1001,Kh=1002,bi=1003,LM=1004,Fc=1005,Oi=1006,qd=1007,Wr=1008,Oa=1009,D_=1010,N_=1011,gl=1012,D0=1013,Zr=1014,Ca=1015,ro=1016,N0=1017,L0=1018,xl=1020,L_=35902,U_=35899,O_=1021,P_=1022,Vi=1023,vl=1026,_l=1027,I_=1028,U0=1029,O0=1030,P0=1031,I0=1033,cu=33776,uu=33777,fu=33778,du=33779,Qh=35840,Jh=35841,$h=35842,e0=35843,t0=36196,n0=37492,i0=37496,a0=37808,r0=37809,s0=37810,o0=37811,l0=37812,c0=37813,u0=37814,f0=37815,d0=37816,h0=37817,p0=37818,m0=37819,g0=37820,x0=37821,v0=36492,_0=36494,y0=36495,b0=36283,S0=36284,M0=36285,E0=36286,UM=3200,OM=3201,PM=0,IM=1,pr="",yi="srgb",io="srgb-linear",vu="linear",ln="srgb",Ds=7680,nv=519,zM=512,FM=513,BM=514,z_=515,HM=516,GM=517,VM=518,kM=519,T0=35044,iv="300 es",Ji=2e3,_u=2001;function F_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jM(){const s=yl("canvas");return s.style.display="block",s}const av={};function yu(...s){const e="THREE."+s.shift();console.log(e,...s)}function Rt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function yn(...s){const e="THREE."+s.shift();console.error(e,...s)}function bl(...s){const e=s.join(" ");e in av||(av[e]=!0,Rt(...s))}function XM(s,e,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rv=1234567;const hl=Math.PI/180,Sl=180/Math.PI;function La(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[n&63|128]+Qn[n>>8&255]+"-"+Qn[n>>16&255]+Qn[n>>24&255]+Qn[a&255]+Qn[a>>8&255]+Qn[a>>16&255]+Qn[a>>24&255]).toLowerCase()}function Ht(s,e,n){return Math.max(e,Math.min(n,s))}function z0(s,e){return(s%e+e)%e}function WM(s,e,n,a,o){return a+(s-e)*(o-a)/(n-e)}function YM(s,e,n){return s!==e?(n-s)/(e-s):0}function pl(s,e,n){return(1-n)*s+n*e}function qM(s,e,n,a){return pl(s,e,1-Math.exp(-n*a))}function ZM(s,e=1){return e-Math.abs(z0(s,e*2)-e)}function KM(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function QM(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function JM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $M(s,e){return s+Math.random()*(e-s)}function e3(s){return s*(.5-Math.random())}function t3(s){s!==void 0&&(rv=s);let e=rv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n3(s){return s*hl}function i3(s){return s*Sl}function a3(s){return(s&s-1)===0&&s!==0}function r3(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function s3(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function o3(s,e,n,a,o){const c=Math.cos,u=Math.sin,f=c(n/2),m=u(n/2),h=c((e+a)/2),x=u((e+a)/2),g=c((e-a)/2),v=u((e-a)/2),y=c((a-e)/2),M=u((a-e)/2);switch(o){case"XYX":s.set(f*x,m*g,m*v,f*h);break;case"YZY":s.set(m*v,f*x,m*g,f*h);break;case"ZXZ":s.set(m*g,m*v,f*x,f*h);break;case"XZX":s.set(f*x,m*M,m*y,f*h);break;case"YXY":s.set(m*y,f*x,m*M,f*h);break;case"ZYZ":s.set(m*M,m*y,f*x,f*h);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function an(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pr={DEG2RAD:hl,RAD2DEG:Sl,generateUUID:La,clamp:Ht,euclideanModulo:z0,mapLinear:WM,inverseLerp:YM,lerp:pl,damp:qM,pingpong:ZM,smoothstep:KM,smootherstep:QM,randInt:JM,randFloat:$M,randFloatSpread:e3,seededRandom:t3,degToRad:n3,radToDeg:i3,isPowerOfTwo:a3,ceilPowerOfTwo:r3,floorPowerOfTwo:s3,setQuaternionFromProperEuler:o3,normalize:an,denormalize:Gi};class Wt{constructor(e=0,n=0){Wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ht(this.x,e.x,n.x),this.y=Ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ht(this.x,e,n),this.y=Ht(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ht(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ht(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class El{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,f){let m=a[o+0],h=a[o+1],x=a[o+2],g=a[o+3],v=c[u+0],y=c[u+1],M=c[u+2],E=c[u+3];if(f<=0){e[n+0]=m,e[n+1]=h,e[n+2]=x,e[n+3]=g;return}if(f>=1){e[n+0]=v,e[n+1]=y,e[n+2]=M,e[n+3]=E;return}if(g!==E||m!==v||h!==y||x!==M){let S=m*v+h*y+x*M+g*E;S<0&&(v=-v,y=-y,M=-M,E=-E,S=-S);let _=1-f;if(S<.9995){const L=Math.acos(S),D=Math.sin(L);_=Math.sin(_*L)/D,f=Math.sin(f*L)/D,m=m*_+v*f,h=h*_+y*f,x=x*_+M*f,g=g*_+E*f}else{m=m*_+v*f,h=h*_+y*f,x=x*_+M*f,g=g*_+E*f;const L=1/Math.sqrt(m*m+h*h+x*x+g*g);m*=L,h*=L,x*=L,g*=L}}e[n]=m,e[n+1]=h,e[n+2]=x,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,o,c,u){const f=a[o],m=a[o+1],h=a[o+2],x=a[o+3],g=c[u],v=c[u+1],y=c[u+2],M=c[u+3];return e[n]=f*M+x*g+m*y-h*v,e[n+1]=m*M+x*v+h*g-f*y,e[n+2]=h*M+x*y+f*v-m*g,e[n+3]=x*M-f*g-m*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,m=Math.sin,h=f(a/2),x=f(o/2),g=f(c/2),v=m(a/2),y=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=v*x*g+h*y*M,this._y=h*y*g-v*x*M,this._z=h*x*M+v*y*g,this._w=h*x*g-v*y*M;break;case"YXZ":this._x=v*x*g+h*y*M,this._y=h*y*g-v*x*M,this._z=h*x*M-v*y*g,this._w=h*x*g+v*y*M;break;case"ZXY":this._x=v*x*g-h*y*M,this._y=h*y*g+v*x*M,this._z=h*x*M+v*y*g,this._w=h*x*g-v*y*M;break;case"ZYX":this._x=v*x*g-h*y*M,this._y=h*y*g+v*x*M,this._z=h*x*M-v*y*g,this._w=h*x*g+v*y*M;break;case"YZX":this._x=v*x*g+h*y*M,this._y=h*y*g+v*x*M,this._z=h*x*M-v*y*g,this._w=h*x*g-v*y*M;break;case"XZY":this._x=v*x*g-h*y*M,this._y=h*y*g-v*x*M,this._z=h*x*M+v*y*g,this._w=h*x*g+v*y*M;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],f=n[5],m=n[9],h=n[2],x=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-h)*y,this._z=(u-o)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(x-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+h)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(c-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(u-o)/y,this._x=(c+h)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,f=n._x,m=n._y,h=n._z,x=n._w;return this._x=a*x+u*f+o*h-c*m,this._y=o*x+u*m+c*f-a*h,this._z=c*x+u*h+a*m-o*f,this._w=u*x-a*f-o*m-c*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,f=this.dot(e);f<0&&(a=-a,o=-o,c=-c,u=-u,f=-f);let m=1-n;if(f<.9995){const h=Math.acos(f),x=Math.sin(h);m=Math.sin(m*h)/x,n=Math.sin(n*h)/x,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class be{constructor(e=0,n=0,a=0){be.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,f=e.z,m=e.w,h=2*(u*o-f*a),x=2*(f*n-c*o),g=2*(c*a-u*n);return this.x=n+m*h+u*g-f*x,this.y=a+m*x+f*h-c*g,this.z=o+m*g+c*x-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ht(this.x,e.x,n.x),this.y=Ht(this.y,e.y,n.y),this.z=Ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ht(this.x,e,n),this.y=Ht(this.y,e,n),this.z=Ht(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ht(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,f=n.y,m=n.z;return this.x=o*m-c*f,this.y=c*u-a*m,this.z=a*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Zd.copy(this).projectOnVector(e),this.sub(Zd)}reflect(e){return this.sub(Zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ht(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zd=new be,sv=new El;class Lt{constructor(e,n,a,o,c,u,f,m,h){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,f,m,h)}set(e,n,a,o,c,u,f,m,h){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=c,x[5]=m,x[6]=a,x[7]=u,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],f=a[3],m=a[6],h=a[1],x=a[4],g=a[7],v=a[2],y=a[5],M=a[8],E=o[0],S=o[3],_=o[6],L=o[1],D=o[4],O=o[7],F=o[2],P=o[5],B=o[8];return c[0]=u*E+f*L+m*F,c[3]=u*S+f*D+m*P,c[6]=u*_+f*O+m*B,c[1]=h*E+x*L+g*F,c[4]=h*S+x*D+g*P,c[7]=h*_+x*O+g*B,c[2]=v*E+y*L+M*F,c[5]=v*S+y*D+M*P,c[8]=v*_+y*O+M*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8];return n*u*x-n*f*h-a*c*x+a*f*m+o*c*h-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8],g=x*u-f*h,v=f*m-x*c,y=h*c-u*m,M=n*g+a*v+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*h-x*a)*E,e[2]=(f*a-o*u)*E,e[3]=v*E,e[4]=(x*n-o*m)*E,e[5]=(o*c-f*n)*E,e[6]=y*E,e[7]=(a*m-h*n)*E,e[8]=(u*n-a*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,f){const m=Math.cos(c),h=Math.sin(c);return this.set(a*m,a*h,-a*(m*u+h*f)+u+e,-o*h,o*m,-o*(-h*u+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Kd.makeScale(e,n)),this}rotate(e){return this.premultiply(Kd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Kd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kd=new Lt,ov=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lv=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l3(){const s={enabled:!0,workingColorSpace:io,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ln&&(o.r=Ua(o.r),o.g=Ua(o.g),o.b=Ua(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ln&&(o.r=$s(o.r),o.g=$s(o.g),o.b=$s(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===pr?vu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[io]:{primaries:e,whitePoint:a,transfer:vu,toXYZ:ov,fromXYZ:lv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:a,transfer:ln,toXYZ:ov,fromXYZ:lv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),s}const Jt=l3();function Ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class c3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ns===void 0&&(Ns=yl("canvas")),Ns.width=e.width,Ns.height=e.height;const o=Ns.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Ns}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ua(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ua(n[a]/255)*255):n[a]=Ua(n[a]);return{data:n,width:e.width,height:e.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u3=0;class F0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u3++}),this.uuid=La(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Qd(o[u].image)):c.push(Qd(o[u]))}else c=Qd(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Qd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?c3.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let f3=0;const Jd=new be;class Zn extends so{constructor(e=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,a=Ra,o=Ra,c=Oi,u=Wr,f=Vi,m=Oa,h=Zn.DEFAULT_ANISOTROPY,x=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f3++}),this.uuid=La(),this.name="",this.source=new F0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jd).x}get height(){return this.source.getSize(Jd).y}get depth(){return this.source.getSize(Jd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Rt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case Ra:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case Ra:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=C_;Zn.DEFAULT_ANISOTROPY=1;class En{constructor(e=0,n=0,a=0,o=1){En.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,h=m[0],x=m[4],g=m[8],v=m[1],y=m[5],M=m[9],E=m[2],S=m[6],_=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(h+1)/2,O=(y+1)/2,F=(_+1)/2,P=(x+v)/4,B=(g+E)/4,q=(M+S)/4;return D>O&&D>F?D<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(D),o=P/a,c=B/a):O>F?O<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(O),a=P/o,c=q/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=B/c,o=q/c),this.set(a,o,c,n),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-x)*(v-x));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(v-x)/L,this.w=Math.acos((h+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ht(this.x,e.x,n.x),this.y=Ht(this.y,e.y,n.y),this.z=Ht(this.z,e.z,n.z),this.w=Ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ht(this.x,e,n),this.y=Ht(this.y,e,n),this.z=Ht(this.z,e,n),this.w=Ht(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ht(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d3 extends so{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new En(0,0,e,n),this.scissorTest=!1,this.viewport=new En(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new Zn(o);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new F0(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends d3{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class B_ extends Zn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=bi,this.minFilter=bi,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h3 extends Zn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=bi,this.minFilter=bi,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl{constructor(e=new be(1/0,1/0,1/0),n=new be(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Fi):Fi.fromBufferAttribute(c,u),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Bc.copy(a.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Hc.subVectors(this.max,el),Ls.subVectors(e.a,el),Us.subVectors(e.b,el),Os.subVectors(e.c,el),lr.subVectors(Us,Ls),cr.subVectors(Os,Us),Ir.subVectors(Ls,Os);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Ir.z,Ir.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Ir.z,0,-Ir.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Ir.y,Ir.x,0];return!$d(n,Ls,Us,Os,Hc)||(n=[1,0,0,0,1,0,0,0,1],!$d(n,Ls,Us,Os,Hc))?!1:(Gc.crossVectors(lr,cr),n=[Gc.x,Gc.y,Gc.z],$d(n,Ls,Us,Os,Hc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new be,new be,new be,new be,new be,new be,new be,new be],Fi=new be,Bc=new Tl,Ls=new be,Us=new be,Os=new be,lr=new be,cr=new be,Ir=new be,el=new be,Hc=new be,Gc=new be,zr=new be;function $d(s,e,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),m=e.dot(zr),h=n.dot(zr),x=a.dot(zr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>f)return!1}return!0}const p3=new Tl,tl=new be,eh=new be;class B0{constructor(e=new be,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):p3.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(tl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(eh)),this.expandByPoint(tl.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _a=new be,th=new be,Vc=new be,ur=new be,nh=new be,kc=new be,ih=new be;class m3{constructor(e=new be,n=new be(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_a.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,n),_a.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){th.copy(e).add(n).multiplyScalar(.5),Vc.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(th);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Vc),f=ur.dot(this.direction),m=-ur.dot(Vc),h=ur.lengthSq(),x=Math.abs(1-u*u);let g,v,y,M;if(x>0)if(g=u*m-f,v=u*f-m,M=c*x,g>=0)if(v>=-M)if(v<=M){const E=1/x;g*=E,v*=E,y=g*(g+u*v+2*f)+v*(u*g+v+2*m)+h}else v=c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*m)+h;else v=-c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*m)+h;else v<=-M?(g=Math.max(0,-(-u*c+f)),v=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+h):v<=M?(g=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+h):(g=Math.max(0,-(u*c+f)),v=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+h);else v=u>0?-c:c,g=Math.max(0,-(u*v+f)),y=-g*g+v*(v+2*m)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(th).addScaledVector(Vc,v),y}intersectSphere(e,n){_a.subVectors(e.center,this.origin);const a=_a.dot(this.direction),o=_a.dot(_a)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=a-u,m=a+u;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,f,m;const h=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(a=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(a=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),x>=0?(c=(e.min.y-v.y)*x,u=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,u=(e.min.y-v.y)*x),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),g>=0?(f=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),a>m||f>o)||((f>a||a!==a)&&(a=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,n,a,o,c){nh.subVectors(n,e),kc.subVectors(a,e),ih.crossVectors(nh,kc);let u=this.direction.dot(ih),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ur.subVectors(this.origin,e);const m=f*this.direction.dot(kc.crossVectors(ur,kc));if(m<0)return null;const h=f*this.direction.dot(nh.cross(ur));if(h<0||m+h>u)return null;const x=-f*ur.dot(ih);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ln{constructor(e,n,a,o,c,u,f,m,h,x,g,v,y,M,E,S){Ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,f,m,h,x,g,v,y,M,E,S)}set(e,n,a,o,c,u,f,m,h,x,g,v,y,M,E,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=a,_[12]=o,_[1]=c,_[5]=u,_[9]=f,_[13]=m,_[2]=h,_[6]=x,_[10]=g,_[14]=v,_[3]=y,_[7]=M,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ln().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/Ps.setFromMatrixColumn(e,0).length(),c=1/Ps.setFromMatrixColumn(e,1).length(),u=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),f=Math.sin(a),m=Math.cos(o),h=Math.sin(o),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=u*x,y=u*g,M=f*x,E=f*g;n[0]=m*x,n[4]=-m*g,n[8]=h,n[1]=y+M*h,n[5]=v-E*h,n[9]=-f*m,n[2]=E-v*h,n[6]=M+y*h,n[10]=u*m}else if(e.order==="YXZ"){const v=m*x,y=m*g,M=h*x,E=h*g;n[0]=v+E*f,n[4]=M*f-y,n[8]=u*h,n[1]=u*g,n[5]=u*x,n[9]=-f,n[2]=y*f-M,n[6]=E+v*f,n[10]=u*m}else if(e.order==="ZXY"){const v=m*x,y=m*g,M=h*x,E=h*g;n[0]=v-E*f,n[4]=-u*g,n[8]=M+y*f,n[1]=y+M*f,n[5]=u*x,n[9]=E-v*f,n[2]=-u*h,n[6]=f,n[10]=u*m}else if(e.order==="ZYX"){const v=u*x,y=u*g,M=f*x,E=f*g;n[0]=m*x,n[4]=M*h-y,n[8]=v*h+E,n[1]=m*g,n[5]=E*h+v,n[9]=y*h-M,n[2]=-h,n[6]=f*m,n[10]=u*m}else if(e.order==="YZX"){const v=u*m,y=u*h,M=f*m,E=f*h;n[0]=m*x,n[4]=E-v*g,n[8]=M*g+y,n[1]=g,n[5]=u*x,n[9]=-f*x,n[2]=-h*x,n[6]=y*g+M,n[10]=v-E*g}else if(e.order==="XZY"){const v=u*m,y=u*h,M=f*m,E=f*h;n[0]=m*x,n[4]=-g,n[8]=h*x,n[1]=v*g+E,n[5]=u*x,n[9]=y*g-M,n[2]=M*g-y,n[6]=f*x,n[10]=E*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g3,e,x3)}lookAt(e,n,a){const o=this.elements;return vi.subVectors(e,n),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),fr.crossVectors(a,vi),fr.lengthSq()===0&&(Math.abs(a.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),fr.crossVectors(a,vi)),fr.normalize(),jc.crossVectors(vi,fr),o[0]=fr.x,o[4]=jc.x,o[8]=vi.x,o[1]=fr.y,o[5]=jc.y,o[9]=vi.y,o[2]=fr.z,o[6]=jc.z,o[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],f=a[4],m=a[8],h=a[12],x=a[1],g=a[5],v=a[9],y=a[13],M=a[2],E=a[6],S=a[10],_=a[14],L=a[3],D=a[7],O=a[11],F=a[15],P=o[0],B=o[4],q=o[8],w=o[12],A=o[1],H=o[5],k=o[9],W=o[13],J=o[2],ie=o[6],I=o[10],Y=o[14],Z=o[3],pe=o[7],Me=o[11],z=o[15];return c[0]=u*P+f*A+m*J+h*Z,c[4]=u*B+f*H+m*ie+h*pe,c[8]=u*q+f*k+m*I+h*Me,c[12]=u*w+f*W+m*Y+h*z,c[1]=x*P+g*A+v*J+y*Z,c[5]=x*B+g*H+v*ie+y*pe,c[9]=x*q+g*k+v*I+y*Me,c[13]=x*w+g*W+v*Y+y*z,c[2]=M*P+E*A+S*J+_*Z,c[6]=M*B+E*H+S*ie+_*pe,c[10]=M*q+E*k+S*I+_*Me,c[14]=M*w+E*W+S*Y+_*z,c[3]=L*P+D*A+O*J+F*Z,c[7]=L*B+D*H+O*ie+F*pe,c[11]=L*q+D*k+O*I+F*Me,c[15]=L*w+D*W+O*Y+F*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],f=e[5],m=e[9],h=e[13],x=e[2],g=e[6],v=e[10],y=e[14],M=e[3],E=e[7],S=e[11],_=e[15];return M*(+c*m*g-o*h*g-c*f*v+a*h*v+o*f*y-a*m*y)+E*(+n*m*y-n*h*v+c*u*v-o*u*y+o*h*x-c*m*x)+S*(+n*h*g-n*f*y-c*u*g+a*u*y+c*f*x-a*h*x)+_*(-o*f*x-n*m*g+n*f*v+o*u*g-a*u*v+a*m*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],f=e[5],m=e[6],h=e[7],x=e[8],g=e[9],v=e[10],y=e[11],M=e[12],E=e[13],S=e[14],_=e[15],L=g*S*h-E*v*h+E*m*y-f*S*y-g*m*_+f*v*_,D=M*v*h-x*S*h-M*m*y+u*S*y+x*m*_-u*v*_,O=x*E*h-M*g*h+M*f*y-u*E*y-x*f*_+u*g*_,F=M*g*m-x*E*m-M*f*v+u*E*v+x*f*S-u*g*S,P=n*L+a*D+o*O+c*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return e[0]=L*B,e[1]=(E*v*c-g*S*c-E*o*y+a*S*y+g*o*_-a*v*_)*B,e[2]=(f*S*c-E*m*c+E*o*h-a*S*h-f*o*_+a*m*_)*B,e[3]=(g*m*c-f*v*c-g*o*h+a*v*h+f*o*y-a*m*y)*B,e[4]=D*B,e[5]=(x*S*c-M*v*c+M*o*y-n*S*y-x*o*_+n*v*_)*B,e[6]=(M*m*c-u*S*c-M*o*h+n*S*h+u*o*_-n*m*_)*B,e[7]=(u*v*c-x*m*c+x*o*h-n*v*h-u*o*y+n*m*y)*B,e[8]=O*B,e[9]=(M*g*c-x*E*c-M*a*y+n*E*y+x*a*_-n*g*_)*B,e[10]=(u*E*c-M*f*c+M*a*h-n*E*h-u*a*_+n*f*_)*B,e[11]=(x*f*c-u*g*c-x*a*h+n*g*h+u*a*y-n*f*y)*B,e[12]=F*B,e[13]=(x*E*o-M*g*o+M*a*v-n*E*v-x*a*S+n*g*S)*B,e[14]=(M*f*o-u*E*o-M*a*m+n*E*m+u*a*S-n*f*S)*B,e[15]=(u*g*o-x*f*o+x*a*m-n*g*m-u*a*v+n*f*v)*B,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,f=e.y,m=e.z,h=c*u,x=c*f;return this.set(h*u+a,h*f-o*m,h*m+o*f,0,h*f+o*m,x*f+a,x*m-o*u,0,h*m-o*f,x*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,f=n._z,m=n._w,h=c+c,x=u+u,g=f+f,v=c*h,y=c*x,M=c*g,E=u*x,S=u*g,_=f*g,L=m*h,D=m*x,O=m*g,F=a.x,P=a.y,B=a.z;return o[0]=(1-(E+_))*F,o[1]=(y+O)*F,o[2]=(M-D)*F,o[3]=0,o[4]=(y-O)*P,o[5]=(1-(v+_))*P,o[6]=(S+L)*P,o[7]=0,o[8]=(M+D)*B,o[9]=(S-L)*B,o[10]=(1-(v+E))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=Ps.set(o[0],o[1],o[2]).length();const u=Ps.set(o[4],o[5],o[6]).length(),f=Ps.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Bi.copy(this);const h=1/c,x=1/u,g=1/f;return Bi.elements[0]*=h,Bi.elements[1]*=h,Bi.elements[2]*=h,Bi.elements[4]*=x,Bi.elements[5]*=x,Bi.elements[6]*=x,Bi.elements[8]*=g,Bi.elements[9]*=g,Bi.elements[10]*=g,n.setFromRotationMatrix(Bi),a.x=c,a.y=u,a.z=f,this}makePerspective(e,n,a,o,c,u,f=Ji,m=!1){const h=this.elements,x=2*c/(n-e),g=2*c/(a-o),v=(n+e)/(n-e),y=(a+o)/(a-o);let M,E;if(m)M=c/(u-c),E=u*c/(u-c);else if(f===Ji)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(f===_u)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,o,c,u,f=Ji,m=!1){const h=this.elements,x=2/(n-e),g=2/(a-o),v=-(n+e)/(n-e),y=-(a+o)/(a-o);let M,E;if(m)M=1/(u-c),E=u/(u-c);else if(f===Ji)M=-2/(u-c),E=-(u+c)/(u-c);else if(f===_u)M=-1/(u-c),E=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Ps=new be,Bi=new Ln,g3=new be(0,0,0),x3=new be(1,1,1),fr=new be,jc=new be,vi=new be,cv=new Ln,uv=new El;class Pa{constructor(e=0,n=0,a=0,o=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],m=o[1],h=o[5],x=o[9],g=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ht(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ht(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return uv.setFromEuler(this),this.setFromQuaternion(uv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class H_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v3=0;const fv=new be,Is=new El,ya=new Ln,Xc=new be,nl=new be,_3=new be,y3=new El,dv=new be(1,0,0),hv=new be(0,1,0),pv=new be(0,0,1),mv={type:"added"},b3={type:"removed"},zs={type:"childadded",child:null},ah={type:"childremoved",child:null};class ui extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v3++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new be,n=new Pa,a=new El,o=new be(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ln},normalMatrix:{value:new Lt}}),this.matrix=new Ln,this.matrixWorld=new Ln,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(dv,e)}rotateY(e){return this.rotateOnAxis(hv,e)}rotateZ(e){return this.rotateOnAxis(pv,e)}translateOnAxis(e,n){return fv.copy(e).applyQuaternion(this.quaternion),this.position.add(fv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dv,e)}translateY(e){return this.translateOnAxis(hv,e)}translateZ(e){return this.translateOnAxis(pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Xc.copy(e):Xc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(nl,Xc,this.up):ya.lookAt(Xc,nl,this.up),this.quaternion.setFromRotationMatrix(ya),o&&(ya.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(ya),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(yn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mv),zs.child=e,this.dispatchEvent(zs),zs.child=null):yn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(b3),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mv),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,_3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,y3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const g=m[h];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,h=this.material.length;m<h;m++)f.push(c(e.materials,this.material[m]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(c(e.animations,m))}}if(n){const f=u(e.geometries),m=u(e.materials),h=u(e.textures),x=u(e.images),g=u(e.shapes),v=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(a.geometries=f),m.length>0&&(a.materials=m),h.length>0&&(a.textures=h),x.length>0&&(a.images=x),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(f){const m=[];for(const h in f){const x=f[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}ui.DEFAULT_UP=new be(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new be,ba=new be,rh=new be,Sa=new be,Fs=new be,Bs=new be,gv=new be,sh=new be,oh=new be,lh=new be,ch=new En,uh=new En,fh=new En;class Ui{constructor(e=new be,n=new be,a=new be){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Hi.subVectors(e,n),o.cross(Hi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Hi.subVectors(o,n),ba.subVectors(a,n),rh.subVectors(e,n);const u=Hi.dot(Hi),f=Hi.dot(ba),m=Hi.dot(rh),h=ba.dot(ba),x=ba.dot(rh),g=u*h-f*f;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(h*m-f*x)*v,M=(u*x-f*m)*v;return c.set(1-y-M,M,y)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,n,a,o,c,u,f,m){return this.getBarycoord(e,n,a,o,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(u,Sa.y),m.addScaledVector(f,Sa.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(e,n),uh.fromBufferAttribute(e,a),fh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ch,c.x),u.addScaledVector(uh,c.y),u.addScaledVector(fh,c.z),u}static isFrontFacing(e,n,a,o){return Hi.subVectors(a,n),ba.subVectors(e,n),Hi.cross(ba).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Hi.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Ui.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,f;Fs.subVectors(o,a),Bs.subVectors(c,a),sh.subVectors(e,a);const m=Fs.dot(sh),h=Bs.dot(sh);if(m<=0&&h<=0)return n.copy(a);oh.subVectors(e,o);const x=Fs.dot(oh),g=Bs.dot(oh);if(x>=0&&g<=x)return n.copy(o);const v=m*g-x*h;if(v<=0&&m>=0&&x<=0)return u=m/(m-x),n.copy(a).addScaledVector(Fs,u);lh.subVectors(e,c);const y=Fs.dot(lh),M=Bs.dot(lh);if(M>=0&&y<=M)return n.copy(c);const E=y*h-m*M;if(E<=0&&h>=0&&M<=0)return f=h/(h-M),n.copy(a).addScaledVector(Bs,f);const S=x*M-y*g;if(S<=0&&g-x>=0&&y-M>=0)return gv.subVectors(c,o),f=(g-x)/(g-x+(y-M)),n.copy(o).addScaledVector(gv,f);const _=1/(S+E+v);return u=E*_,f=v*_,n.copy(a).addScaledVector(Fs,u).addScaledVector(Bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function dh(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Xt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Jt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Jt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Jt.workingColorSpace){if(e=z0(e,1),n=Ht(n,0,1),a=Ht(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=dh(u,c,e+1/3),this.g=dh(u,c,e),this.b=dh(u,c,e-1/3)}return Jt.colorSpaceToWorking(this,o),this}setStyle(e,n=yi){function a(c){c!==void 0&&parseFloat(c)<1&&Rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yi){const a=G_[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Jt.workingToColorSpace(Jn.copy(this),e),Math.round(Ht(Jn.r*255,0,255))*65536+Math.round(Ht(Jn.g*255,0,255))*256+Math.round(Ht(Jn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Jt.workingColorSpace){Jt.workingToColorSpace(Jn.copy(this),n);const a=Jn.r,o=Jn.g,c=Jn.b,u=Math.max(a,o,c),f=Math.min(a,o,c);let m,h;const x=(f+u)/2;if(f===u)m=0,h=0;else{const g=u-f;switch(h=x<=.5?g/(u+f):g/(2-u-f),u){case a:m=(o-c)/g+(o<c?6:0);break;case o:m=(c-a)/g+2;break;case c:m=(a-o)/g+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,n=Jt.workingColorSpace){return Jt.workingToColorSpace(Jn.copy(this),n),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=yi){Jt.workingToColorSpace(Jn.copy(this),e);const n=Jn.r,a=Jn.g,o=Jn.b;return e!==yi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(Wc);const a=pl(dr.h,Wc.h,n),o=pl(dr.s,Wc.s,n),c=pl(dr.l,Wc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Xt;Xt.NAMES=G_;let S3=0;class Al extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S3++}),this.uuid=La(),this.name="",this.type="Material",this.blending=Js,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Bh,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Rt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){Rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(a.blending=this.blending),this.side!==gr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Fh&&(a.blendSrc=this.blendSrc),this.blendDst!==Bh&&(a.blendDst=this.blendDst),this.blendEquation!==jr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const f in c){const m=c[f];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class V_ extends Al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=new be,Yc=new Wt;let M3=0;class ki{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=T0,this.updateRanges=[],this.gpuType=Ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Yc.fromBufferAttribute(this,n),Yc.applyMatrix3(e),this.setXY(n,Yc.x,Yc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix3(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix4(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyNormalMatrix(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.transformDirection(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Gi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=an(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gi(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gi(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gi(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),a=an(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),a=an(a,this.array),o=an(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),a=an(a,this.array),o=an(o,this.array),c=an(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==T0&&(e.usage=this.usage),e}}class k_ extends ki{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class j_ extends ki{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Yr extends ki{constructor(e,n,a){super(new Float32Array(e),n,a)}}let E3=0;const Di=new Ln,hh=new ui,Hs=new be,_i=new Tl,il=new Tl,kn=new be;class za extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E3++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?j_:k_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Lt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,n,a){return Di.makeTranslation(e,n,a),this.applyMatrix4(Di),this}scale(e,n,a){return Di.makeScale(e,n,a),this.applyMatrix4(Di),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yr(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new be(-1/0,-1/0,-1/0),new be(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new B0);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new be,1/0);return}if(e){const a=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];il.setFromBufferAttribute(f),this.morphTargetsRelative?(kn.addVectors(_i.min,il.min),_i.expandByPoint(kn),kn.addVectors(_i.max,il.max),_i.expandByPoint(kn)):(_i.expandByPoint(il.min),_i.expandByPoint(il.max))}_i.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)kn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(kn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],m=this.morphTargetsRelative;for(let h=0,x=f.count;h<x;h++)kn.fromBufferAttribute(f,h),m&&(Hs.fromBufferAttribute(e,h),kn.add(Hs)),o=Math.max(o,a.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&yn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){yn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],m=[];for(let q=0;q<a.count;q++)f[q]=new be,m[q]=new be;const h=new be,x=new be,g=new be,v=new Wt,y=new Wt,M=new Wt,E=new be,S=new be;function _(q,w,A){h.fromBufferAttribute(a,q),x.fromBufferAttribute(a,w),g.fromBufferAttribute(a,A),v.fromBufferAttribute(c,q),y.fromBufferAttribute(c,w),M.fromBufferAttribute(c,A),x.sub(h),g.sub(h),y.sub(v),M.sub(v);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(E.copy(x).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(H),S.copy(g).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(H),f[q].add(E),f[w].add(E),f[A].add(E),m[q].add(S),m[w].add(S),m[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let q=0,w=L.length;q<w;++q){const A=L[q],H=A.start,k=A.count;for(let W=H,J=H+k;W<J;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const D=new be,O=new be,F=new be,P=new be;function B(q){F.fromBufferAttribute(o,q),P.copy(F);const w=f[q];D.copy(w),D.sub(F.multiplyScalar(F.dot(w))).normalize(),O.crossVectors(P,w);const H=O.dot(m[q])<0?-1:1;u.setXYZW(q,D.x,D.y,D.z,H)}for(let q=0,w=L.length;q<w;++q){const A=L[q],H=A.start,k=A.count;for(let W=H,J=H+k;W<J;W+=3)B(e.getX(W+0)),B(e.getX(W+1)),B(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ki(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const o=new be,c=new be,u=new be,f=new be,m=new be,h=new be,x=new be,g=new be;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),f.fromBufferAttribute(a,M),m.fromBufferAttribute(a,E),h.fromBufferAttribute(a,S),f.add(x),m.add(x),h.add(x),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(E,m.x,m.y,m.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),a.setXYZ(v+0,x.x,x.y,x.z),a.setXYZ(v+1,x.x,x.y,x.z),a.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)kn.fromBufferAttribute(e,n),kn.normalize(),e.setXYZ(n,kn.x,kn.y,kn.z)}toNonIndexed(){function e(f,m){const h=f.array,x=f.itemSize,g=f.normalized,v=new h.constructor(m.length*x);let y=0,M=0;for(let E=0,S=m.length;E<S;E++){f.isInterleavedBufferAttribute?y=m[E]*f.data.stride+f.offset:y=m[E]*x;for(let _=0;_<x;_++)v[M++]=h[y++]}return new ki(v,x,g)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new za,a=this.index.array,o=this.attributes;for(const f in o){const m=o[f],h=e(m,a);n.setAttribute(f,h)}const c=this.morphAttributes;for(const f in c){const m=[],h=c[f];for(let x=0,g=h.length;x<g;x++){const v=h[x],y=e(v,a);m.push(y)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const h=u[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const h=a[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let g=0,v=h.length;g<v;g++){const y=h[g];x.push(y.toJSON(e.data))}x.length>0&&(o[m]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const h in o){const x=o[h];this.setAttribute(h,x.clone(n))}const c=e.morphAttributes;for(const h in c){const x=[],g=c[h];for(let v=0,y=g.length;v<y;v++)x.push(g[v].clone(n));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,x=u.length;h<x;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xv=new Ln,Fr=new m3,qc=new B0,vv=new be,Zc=new be,Kc=new be,Qc=new be,ph=new be,Jc=new be,_v=new be,$c=new be;class Ia extends ui{constructor(e=new za,n=new V_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){Jc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=f[m],g=c[m];x!==0&&(ph.fromBufferAttribute(g,e),u?Jc.addScaledVector(ph,x):Jc.addScaledVector(ph.sub(n),x))}n.add(Jc)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(c),Fr.copy(e.ray).recast(e.near),!(qc.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(qc,vv)===null||Fr.origin.distanceToSquared(vv)>(e.far-e.near)**2))&&(xv.copy(c).invert(),Fr.copy(e.ray).applyMatrix4(xv),!(a.boundingBox!==null&&Fr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,f=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],_=u[S.materialIndex],L=Math.max(S.start,y.start),D=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let O=L,F=D;O<F;O+=3){const P=f.getX(O),B=f.getX(O+1),q=f.getX(O+2);o=eu(this,_,e,a,h,x,g,P,B,q),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let S=M,_=E;S<_;S+=3){const L=f.getX(S),D=f.getX(S+1),O=f.getX(S+2);o=eu(this,u,e,a,h,x,g,L,D,O),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],_=u[S.materialIndex],L=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let O=L,F=D;O<F;O+=3){const P=O,B=O+1,q=O+2;o=eu(this,_,e,a,h,x,g,P,B,q),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),E=Math.min(m.count,y.start+y.count);for(let S=M,_=E;S<_;S+=3){const L=S,D=S+1,O=S+2;o=eu(this,u,e,a,h,x,g,L,D,O),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function T3(s,e,n,a,o,c,u,f){let m;if(e.side===ci?m=a.intersectTriangle(u,c,o,!0,f):m=a.intersectTriangle(o,c,u,e.side===gr,f),m===null)return null;$c.copy(f),$c.applyMatrix4(s.matrixWorld);const h=n.ray.origin.distanceTo($c);return h<n.near||h>n.far?null:{distance:h,point:$c.clone(),object:s}}function eu(s,e,n,a,o,c,u,f,m,h){s.getVertexPosition(f,Zc),s.getVertexPosition(m,Kc),s.getVertexPosition(h,Qc);const x=T3(s,e,n,a,Zc,Kc,Qc,_v);if(x){const g=new be;Ui.getBarycoord(_v,Zc,Kc,Qc,g),o&&(x.uv=Ui.getInterpolatedAttribute(o,f,m,h,g,new Wt)),c&&(x.uv1=Ui.getInterpolatedAttribute(c,f,m,h,g,new Wt)),u&&(x.normal=Ui.getInterpolatedAttribute(u,f,m,h,g,new be),x.normal.dot(a.direction)>0&&x.normal.multiplyScalar(-1));const v={a:f,b:m,c:h,normal:new be,materialIndex:0};Ui.getNormal(Zc,Kc,Qc,v.normal),x.face=v,x.barycoord=g}return x}class oo extends za{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],x=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,o,u,2),M("x","z","y",1,-1,e,a,-n,o,u,3),M("x","y","z",1,-1,e,n,a,o,c,4),M("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Yr(h,3)),this.setAttribute("normal",new Yr(x,3)),this.setAttribute("uv",new Yr(g,2));function M(E,S,_,L,D,O,F,P,B,q,w){const A=O/B,H=F/q,k=O/2,W=F/2,J=P/2,ie=B+1,I=q+1;let Y=0,Z=0;const pe=new be;for(let Me=0;Me<I;Me++){const z=Me*H-W;for(let ee=0;ee<ie;ee++){const he=ee*A-k;pe[E]=he*L,pe[S]=z*D,pe[_]=J,h.push(pe.x,pe.y,pe.z),pe[E]=0,pe[S]=0,pe[_]=P>0?1:-1,x.push(pe.x,pe.y,pe.z),g.push(ee/B),g.push(1-Me/q),Y+=1}}for(let Me=0;Me<q;Me++)for(let z=0;z<B;z++){const ee=v+z+ie*Me,he=v+z+ie*(Me+1),Ee=v+(z+1)+ie*(Me+1),Be=v+(z+1)+ie*Me;m.push(ee,he,Be),m.push(he,Ee,Be),Z+=6}f.addGroup(y,Z,w),y+=Z,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function ti(s){const e={};for(let n=0;n<s.length;n++){const a=ao(s[n]);for(const o in a)e[o]=a[o]}return e}function A3(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function X_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}const w3={clone:ao,merge:ti};var R3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R3,this.fragmentShader=C3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=A3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class W_ extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ln,this.projectionMatrix=new Ln,this.projectionMatrixInverse=new Ln,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new be,yv=new Wt,bv=new Wt;class Li extends W_{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,yv,bv),n.subVectors(bv,yv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/h,o*=u.width/m,a*=u.height/h}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gs=-90,Vs=1;class D3 extends ui{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Li(Gs,Vs,e,n);o.layers=this.layers,this.add(o);const c=new Li(Gs,Vs,e,n);c.layers=this.layers,this.add(c);const u=new Li(Gs,Vs,e,n);u.layers=this.layers,this.add(u);const f=new Li(Gs,Vs,e,n);f.layers=this.layers,this.add(f);const m=new Li(Gs,Vs,e,n);m.layers=this.layers,this.add(m);const h=new Li(Gs,Vs,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,f,m]=n;for(const h of n)this.remove(h);if(e===Ji)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===_u)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,m,h,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,f),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,h),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,o),e.render(n,x),e.setRenderTarget(g,v,y),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Y_ extends Zn{constructor(e=[],n=to,a,o,c,u,f,m,h,x){super(e,n,a,o,c,u,f,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N3 extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new Y_(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new oo(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:ao(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ci,blending:Da});c.uniforms.tEquirect.value=n;const u=new Ia(o,c),f=n.minFilter;return n.minFilter===Wr&&(n.minFilter=Oi),new D3(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class tu extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L3={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new be,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new be),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new be,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new be),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const f=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const S=n.getJointPose(E,a),_=this._getHandJoint(h,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const x=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=x.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(L3)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new tu;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class bu{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Xt(e),this.near=n,this.far=a}clone(){return new bu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class U3 extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class O3{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=T0,this.updateRanges=[],this.version=0,this.uuid=La()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ei=new be;class Su{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)ei.fromBufferAttribute(this,n),ei.applyMatrix4(e),this.setXYZ(n,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)ei.fromBufferAttribute(this,n),ei.applyNormalMatrix(e),this.setXYZ(n,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)ei.fromBufferAttribute(this,n),ei.transformDirection(e),this.setXYZ(n,ei.x,ei.y,ei.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Gi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=an(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Gi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Gi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Gi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Gi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),a=an(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),a=an(a,this.array),o=an(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),a=an(a,this.array),o=an(o,this.array),c=an(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){yu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new ki(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Su(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class q_ extends Al{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ks;const al=new be,js=new be,Xs=new be,Ws=new Wt,rl=new Wt,Z_=new Ln,nu=new be,sl=new be,iu=new be,Sv=new Wt,gh=new Wt,Mv=new Wt;class P3 extends ui{constructor(e=new q_){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new za;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new O3(n,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Su(a,3,0,!1)),ks.setAttribute("uv",new Su(a,2,3,!1))}this.geometry=ks,this.material=e,this.center=new Wt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&yn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Z_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Xs.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;au(nu.set(-.5,-.5,0),Xs,u,js,o,c),au(sl.set(.5,-.5,0),Xs,u,js,o,c),au(iu.set(.5,.5,0),Xs,u,js,o,c),Sv.set(0,0),gh.set(1,0),Mv.set(1,1);let f=e.ray.intersectTriangle(nu,sl,iu,!1,al);if(f===null&&(au(sl.set(-.5,.5,0),Xs,u,js,o,c),gh.set(0,1),f=e.ray.intersectTriangle(nu,iu,sl,!1,al),f===null))return;const m=e.ray.origin.distanceTo(al);m<e.near||m>e.far||n.push({distance:m,point:al.clone(),uv:Ui.getInterpolation(al,nu,sl,iu,Sv,gh,Mv,new Wt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function au(s,e,n,a,o,c){Ws.subVectors(s,n).addScalar(.5).multiply(a),o!==void 0?(rl.x=c*Ws.x-o*Ws.y,rl.y=o*Ws.x+c*Ws.y):rl.copy(Ws),s.copy(e),s.x+=rl.x,s.y+=rl.y,s.applyMatrix4(Z_)}class I3 extends Zn{constructor(e=null,n=1,a=1,o,c,u,f,m,h=bi,x=bi,g,v){super(null,u,f,m,h,x,o,c,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xh=new be,z3=new be,F3=new Lt;class kr{constructor(e=new be(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=xh.subVectors(a,n).cross(z3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(xh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||F3.getNormalMatrix(e),o=this.coplanarPoint(xh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new B0,B3=new Wt(.5,.5),ru=new be;class K_{constructor(e=new kr,n=new kr,a=new kr,o=new kr,c=new kr,u=new kr){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Ji,a=!1){const o=this.planes,c=e.elements,u=c[0],f=c[1],m=c[2],h=c[3],x=c[4],g=c[5],v=c[6],y=c[7],M=c[8],E=c[9],S=c[10],_=c[11],L=c[12],D=c[13],O=c[14],F=c[15];if(o[0].setComponents(h-u,y-x,_-M,F-L).normalize(),o[1].setComponents(h+u,y+x,_+M,F+L).normalize(),o[2].setComponents(h+f,y+g,_+E,F+D).normalize(),o[3].setComponents(h-f,y-g,_-E,F-D).normalize(),a)o[4].setComponents(m,v,S,O).normalize(),o[5].setComponents(h-m,y-v,_-S,F-O).normalize();else if(o[4].setComponents(h-m,y-v,_-S,F-O).normalize(),n===Ji)o[5].setComponents(h+m,y+v,_+S,F+O).normalize();else if(n===_u)o[5].setComponents(m,v,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const n=B3.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(ru.x=o.normal.x>0?e.max.x:e.min.x,ru.y=o.normal.y>0?e.max.y:e.min.y,ru.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H3 extends Zn{constructor(e,n,a,o,c,u,f,m,h){super(e,n,a,o,c,u,f,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Q_ extends Zn{constructor(e,n,a=Zr,o,c,u,f=bi,m=bi,h,x=vl,g=1){if(x!==vl&&x!==_l)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,o,c,u,f,m,x,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new F0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class J_ extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cu extends za{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(a),m=Math.floor(o),h=f+1,x=m+1,g=e/f,v=n/m,y=[],M=[],E=[],S=[];for(let _=0;_<x;_++){const L=_*v-u;for(let D=0;D<h;D++){const O=D*g-c;M.push(O,-L,0),E.push(0,0,1),S.push(D/f),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<f;L++){const D=L+h*_,O=L+h*(_+1),F=L+1+h*(_+1),P=L+1+h*_;y.push(D,O,P),y.push(O,F,P)}this.setIndex(y),this.setAttribute("position",new Yr(M,3)),this.setAttribute("normal",new Yr(E,3)),this.setAttribute("uv",new Yr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class G3 extends Al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V3 extends Al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class k3{constructor(e,n,a){const o=this;let c=!1,u=0,f=0,m;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(x){f++,c===!1&&o.onStart!==void 0&&o.onStart(x,u,f),c=!0},this.itemEnd=function(x){u++,o.onProgress!==void 0&&o.onProgress(x,u,f),u===f&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,g){return h.push(x,g),this},this.removeHandler=function(x){const g=h.indexOf(x);return g!==-1&&h.splice(g,2),this},this.getHandler=function(x){for(let g=0,v=h.length;g<v;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(x))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const j3=new k3;class H0{constructor(e){this.manager=e!==void 0?e:j3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}H0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ys=new WeakMap;class X3 extends H0{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=vh.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let g=Ys.get(u);g===void 0&&(g=[],Ys.set(u,g)),g.push({onLoad:n,onError:o})}return u}const f=yl("img");function m(){x(),n&&n(this);const g=Ys.get(this)||[];for(let v=0;v<g.length;v++){const y=g[v];y.onLoad&&y.onLoad(this)}Ys.delete(this),c.manager.itemEnd(e)}function h(g){x(),o&&o(g),vh.remove(`image:${e}`);const v=Ys.get(this)||[];for(let y=0;y<v.length;y++){const M=v[y];M.onError&&M.onError(g)}Ys.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function x(){f.removeEventListener("load",m,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",m,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),vh.add(`image:${e}`,f),c.manager.itemStart(e),f.src=e,f}}class W3 extends H0{constructor(e){super(e)}load(e,n,a,o){const c=new Zn,u=new X3(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class Y3 extends W_{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,f-=x*this.view.offsetY,m=f-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class q3 extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ev(s,e,n,a){const o=Z3(a);switch(n){case O_:return s*e;case I_:return s*e/o.components*o.byteLength;case U0:return s*e/o.components*o.byteLength;case O0:return s*e*2/o.components*o.byteLength;case P0:return s*e*2/o.components*o.byteLength;case P_:return s*e*3/o.components*o.byteLength;case Vi:return s*e*4/o.components*o.byteLength;case I0:return s*e*4/o.components*o.byteLength;case cu:case uu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fu:case du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jh:case e0:return Math.max(s,16)*Math.max(e,8)/4;case Qh:case $h:return Math.max(s,8)*Math.max(e,8)/2;case t0:case n0:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case i0:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case a0:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case r0:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case s0:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case o0:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case l0:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case c0:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case u0:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case f0:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case d0:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case h0:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case p0:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case m0:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case g0:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case x0:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case v0:case _0:case y0:return Math.ceil(s/4)*Math.ceil(e/4)*16;case b0:case S0:return Math.ceil(s/4)*Math.ceil(e/4)*8;case M0:case E0:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Z3(s){switch(s){case Oa:case D_:return{byteLength:1,components:1};case gl:case N_:case ro:return{byteLength:2,components:1};case N0:case L0:return{byteLength:2,components:4};case Zr:case D0:case Ca:return{byteLength:4,components:1};case L_:case U_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:C0}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=C0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $_(){let s=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function K3(s){const e=new WeakMap;function n(f,m){const h=f.array,x=f.usage,g=h.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,h,x),f.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,m,h){const x=m.array,g=m.updateRanges;if(s.bindBuffer(h,f),g.length===0)s.bufferSubData(h,0,x);else{g.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<g.length;y++){const M=g[v],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];s.bufferSubData(h,E.start*x.BYTES_PER_ELEMENT,x,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,m));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,m),h.version=f.version}}return{get:o,remove:c,update:u}}var Q3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J3=`#ifdef USE_ALPHAHASH
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
#endif`,$3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i2=`#ifdef USE_AOMAP
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
#endif`,a2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r2=`#ifdef USE_BATCHING
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
#endif`,s2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u2=`#ifdef USE_IRIDESCENCE
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
#endif`,f2=`#ifdef USE_BUMPMAP
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
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y2=`#define PI 3.141592653589793
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
} // validated`,b2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S2=`vec3 transformedNormal = objectNormal;
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
#endif`,M2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w2="gl_FragColor = linearToOutputTexel( gl_FragColor );",R2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C2=`#ifdef USE_ENVMAP
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
#endif`,D2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N2=`#ifdef USE_ENVMAP
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
#endif`,L2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U2=`#ifdef USE_ENVMAP
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
#endif`,O2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F2=`#ifdef USE_GRADIENTMAP
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
}`,B2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V2=`uniform bool receiveShadow;
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
#endif`,k2=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,j2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q2=`PhysicalMaterial material;
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
#endif`,Z2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,K2=`
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
#endif`,Q2=`#if defined( RE_IndirectDiffuse )
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
#endif`,J2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sE=`#if defined( USE_POINTS_UV )
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
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
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
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
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
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PE=`float getShadowMask() {
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
}`,IE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
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
}`,iT=`#if DEPTH_PACKING == 3200
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
}`,aT=`#define DISTANCE
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
}`,rT=`#define DISTANCE
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#include <common>
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
}`,fT=`uniform vec3 diffuse;
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
}`,dT=`#define LAMBERT
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
}`,hT=`#define LAMBERT
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
}`,pT=`#define MATCAP
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
}`,mT=`#define MATCAP
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
}`,gT=`#define NORMAL
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
}`,xT=`#define NORMAL
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
}`,vT=`#define PHONG
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
}`,_T=`#define PHONG
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
}`,yT=`#define STANDARD
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
}`,bT=`#define STANDARD
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
}`,ST=`#define TOON
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
}`,MT=`#define TOON
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
}`,ET=`uniform float size;
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
}`,TT=`uniform vec3 diffuse;
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
}`,AT=`#include <common>
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
}`,wT=`uniform vec3 color;
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
}`,RT=`uniform float rotation;
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
}`,CT=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Q3,alphahash_pars_fragment:J3,alphamap_fragment:$3,alphamap_pars_fragment:e2,alphatest_fragment:t2,alphatest_pars_fragment:n2,aomap_fragment:i2,aomap_pars_fragment:a2,batching_pars_vertex:r2,batching_vertex:s2,begin_vertex:o2,beginnormal_vertex:l2,bsdfs:c2,iridescence_fragment:u2,bumpmap_pars_fragment:f2,clipping_planes_fragment:d2,clipping_planes_pars_fragment:h2,clipping_planes_pars_vertex:p2,clipping_planes_vertex:m2,color_fragment:g2,color_pars_fragment:x2,color_pars_vertex:v2,color_vertex:_2,common:y2,cube_uv_reflection_fragment:b2,defaultnormal_vertex:S2,displacementmap_pars_vertex:M2,displacementmap_vertex:E2,emissivemap_fragment:T2,emissivemap_pars_fragment:A2,colorspace_fragment:w2,colorspace_pars_fragment:R2,envmap_fragment:C2,envmap_common_pars_fragment:D2,envmap_pars_fragment:N2,envmap_pars_vertex:L2,envmap_physical_pars_fragment:k2,envmap_vertex:U2,fog_vertex:O2,fog_pars_vertex:P2,fog_fragment:I2,fog_pars_fragment:z2,gradientmap_pars_fragment:F2,lightmap_pars_fragment:B2,lights_lambert_fragment:H2,lights_lambert_pars_fragment:G2,lights_pars_begin:V2,lights_toon_fragment:j2,lights_toon_pars_fragment:X2,lights_phong_fragment:W2,lights_phong_pars_fragment:Y2,lights_physical_fragment:q2,lights_physical_pars_fragment:Z2,lights_fragment_begin:K2,lights_fragment_maps:Q2,lights_fragment_end:J2,logdepthbuf_fragment:$2,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:aE,map_particle_fragment:rE,map_particle_pars_fragment:sE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:fE,morphtarget_pars_vertex:dE,morphtarget_vertex:hE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:xE,normal_vertex:vE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:SE,iridescence_pars_fragment:ME,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:AE,project_vertex:wE,dithering_fragment:RE,dithering_pars_fragment:CE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:UE,shadowmap_vertex:OE,shadowmask_pars_fragment:PE,skinbase_vertex:IE,skinning_pars_vertex:zE,skinning_vertex:FE,skinnormal_vertex:BE,specularmap_fragment:HE,specularmap_pars_fragment:GE,tonemapping_fragment:VE,tonemapping_pars_fragment:kE,transmission_fragment:jE,transmission_pars_fragment:XE,uv_pars_fragment:WE,uv_pars_vertex:YE,uv_vertex:qE,worldpos_vertex:ZE,background_vert:KE,background_frag:QE,backgroundCube_vert:JE,backgroundCube_frag:$E,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:aT,distanceRGBA_frag:rT,equirect_vert:sT,equirect_frag:oT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:fT,meshlambert_vert:dT,meshlambert_frag:hT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:xT,meshphong_vert:vT,meshphong_frag:_T,meshphysical_vert:yT,meshphysical_frag:bT,meshtoon_vert:ST,meshtoon_frag:MT,points_vert:ET,points_frag:TT,shadow_vert:AT,shadow_frag:wT,sprite_vert:RT,sprite_frag:CT},et={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Ki={basic:{uniforms:ti([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:ti([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:ti([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:ti([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:ti([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:ti([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:ti([et.points,et.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:ti([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:ti([et.common,et.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:ti([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:ti([et.sprite,et.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:ti([et.common,et.displacementmap,{referencePosition:{value:new be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:ti([et.lights,et.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ki.physical={uniforms:ti([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const su={r:0,b:0,g:0},Hr=new Pa,DT=new Ln;function NT(s,e,n,a,o,c,u){const f=new Xt(0);let m=c===!0?0:1,h,x,g=null,v=0,y=null;function M(D){let O=D.isScene===!0?D.background:null;return O&&O.isTexture&&(O=(D.backgroundBlurriness>0?n:e).get(O)),O}function E(D){let O=!1;const F=M(D);F===null?_(f,m):F&&F.isColor&&(_(F,1),O=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||O)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,O){const F=M(O);F&&(F.isCubeTexture||F.mapping===Ru)?(x===void 0&&(x=new Ia(new oo(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:ao(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(P,B,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Hr.copy(O.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),x.material.uniforms.envMap.value=F,x.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(DT.makeRotationFromEuler(Hr)),x.material.toneMapped=Jt.getTransfer(F.colorSpace)!==ln,(g!==F||v!==F.version||y!==s.toneMapping)&&(x.material.needsUpdate=!0,g=F,v=F.version,y=s.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):F&&F.isTexture&&(h===void 0&&(h=new Ia(new Cu(2,2),new ji({name:"BackgroundMaterial",uniforms:ao(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=F,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(F.colorSpace)!==ln,F.matrixAutoUpdate===!0&&F.updateMatrix(),h.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||v!==F.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,g=F,v=F.version,y=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function _(D,O){D.getRGB(su,X_(s)),a.buffers.color.setClear(su.r,su.g,su.b,O,u)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,O=1){f.set(D),m=O,_(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(f,m)},render:E,addToRenderList:S,dispose:L}}function LT(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function f(A,H,k,W,J){let ie=!1;const I=g(W,k,H);c!==I&&(c=I,h(c.object)),ie=y(A,W,k,J),ie&&M(A,W,k,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,O(A,H,k,W),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return s.createVertexArray()}function h(A){return s.bindVertexArray(A)}function x(A){return s.deleteVertexArray(A)}function g(A,H,k){const W=k.wireframe===!0;let J=a[A.id];J===void 0&&(J={},a[A.id]=J);let ie=J[H.id];ie===void 0&&(ie={},J[H.id]=ie);let I=ie[W];return I===void 0&&(I=v(m()),ie[W]=I),I}function v(A){const H=[],k=[],W=[];for(let J=0;J<n;J++)H[J]=0,k[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:W,object:A,attributes:{},index:null}}function y(A,H,k,W){const J=c.attributes,ie=H.attributes;let I=0;const Y=k.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const Me=J[Z];let z=ie[Z];if(z===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),Me===void 0||Me.attribute!==z||z&&Me.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==W}function M(A,H,k,W){const J={},ie=H.attributes;let I=0;const Y=k.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let Me=ie[Z];Me===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor));const z={};z.attribute=Me,Me&&Me.data&&(z.data=Me.data),J[Z]=z,I++}c.attributes=J,c.attributesNum=I,c.index=W}function E(){const A=c.newAttributes;for(let H=0,k=A.length;H<k;H++)A[H]=0}function S(A){_(A,0)}function _(A,H){const k=c.newAttributes,W=c.enabledAttributes,J=c.attributeDivisors;k[A]=1,W[A]===0&&(s.enableVertexAttribArray(A),W[A]=1),J[A]!==H&&(s.vertexAttribDivisor(A,H),J[A]=H)}function L(){const A=c.newAttributes,H=c.enabledAttributes;for(let k=0,W=H.length;k<W;k++)H[k]!==A[k]&&(s.disableVertexAttribArray(k),H[k]=0)}function D(A,H,k,W,J,ie,I){I===!0?s.vertexAttribIPointer(A,H,k,J,ie):s.vertexAttribPointer(A,H,k,W,J,ie)}function O(A,H,k,W){E();const J=W.attributes,ie=k.getAttributes(),I=H.defaultAttributeValues;for(const Y in ie){const Z=ie[Y];if(Z.location>=0){let pe=J[Y];if(pe===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor)),pe!==void 0){const Me=pe.normalized,z=pe.itemSize,ee=e.get(pe);if(ee===void 0)continue;const he=ee.buffer,Ee=ee.type,Be=ee.bytesPerElement,te=Ee===s.INT||Ee===s.UNSIGNED_INT||pe.gpuType===D0;if(pe.isInterleavedBufferAttribute){const me=pe.data,He=me.stride,Ge=pe.offset;if(me.isInstancedInterleavedBuffer){for(let qe=0;qe<Z.locationSize;qe++)_(Z.location+qe,me.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let qe=0;qe<Z.locationSize;qe++)S(Z.location+qe);s.bindBuffer(s.ARRAY_BUFFER,he);for(let qe=0;qe<Z.locationSize;qe++)D(Z.location+qe,z/Z.locationSize,Ee,Me,He*Be,(Ge+z/Z.locationSize*qe)*Be,te)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<Z.locationSize;me++)_(Z.location+me,pe.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<Z.locationSize;me++)S(Z.location+me);s.bindBuffer(s.ARRAY_BUFFER,he);for(let me=0;me<Z.locationSize;me++)D(Z.location+me,z/Z.locationSize,Ee,Me,z*Be,z/Z.locationSize*me*Be,te)}}else if(I!==void 0){const Me=I[Y];if(Me!==void 0)switch(Me.length){case 2:s.vertexAttrib2fv(Z.location,Me);break;case 3:s.vertexAttrib3fv(Z.location,Me);break;case 4:s.vertexAttrib4fv(Z.location,Me);break;default:s.vertexAttrib1fv(Z.location,Me)}}}}L()}function F(){q();for(const A in a){const H=a[A];for(const k in H){const W=H[k];for(const J in W)x(W[J].object),delete W[J];delete H[k]}delete a[A]}}function P(A){if(a[A.id]===void 0)return;const H=a[A.id];for(const k in H){const W=H[k];for(const J in W)x(W[J].object),delete W[J];delete H[k]}delete a[A.id]}function B(A){for(const H in a){const k=a[H];if(k[A.id]===void 0)continue;const W=k[A.id];for(const J in W)x(W[J].object),delete W[J];delete k[A.id]}}function q(){w(),u=!0,c!==o&&(c=o,h(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:q,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function UT(s,e,n){let a;function o(h){a=h}function c(h,x){s.drawArrays(a,h,x),n.update(x,a,1)}function u(h,x,g){g!==0&&(s.drawArraysInstanced(a,h,x,g),n.update(x,a,g))}function f(h,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,x,0,g);let y=0;for(let M=0;M<g;M++)y+=x[M];n.update(y,a,1)}function m(h,x,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],x[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(a,h,0,x,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E]*v[E];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function OT(s,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Vi&&a.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const q=B===ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Oa&&a.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ca&&!q)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const x=m(h);x!==h&&(Rt("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:O,vertexTextures:F,maxSamples:P}}function PT(s){const e=this;let n=null,a=0,o=!1,c=!1;const u=new kr,f=new Lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||o;return o=v,a=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=x(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,_=s.get(g);if(!o||M===null||M.length===0||c&&!S)c?x(null):h();else{const L=c?0:a,D=L*4;let O=_.clippingState||null;m.value=O,O=x(M,v,D,y);for(let F=0;F!==D;++F)O[F]=n[F];_.clippingState=O,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function x(g,v,y,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=m.value,M!==!0||S===null){const _=y+E*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,O=y;D!==E;++D,O+=4)u.copy(g[D]).applyMatrix4(L,f),u.normal.toArray(S,O),S[O+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function IT(s){let e=new WeakMap;function n(u,f){return f===Yh?u.mapping=to:f===qh&&(u.mapping=no),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===Yh||f===qh)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const h=new N3(m.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",o),n(h.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const mr=4,Tv=[.125,.215,.35,.446,.526,.582],Xr=20,zT=256,ol=new Y3,Av=new Xt;let _h=null,yh=0,bh=0,Sh=!1;const FT=new be;class wv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:f=FT}=c;_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,yh,bh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:ro,format:Vi,colorSpace:io,depthBuffer:!1},o=Rv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BT(c)),this._blurMaterial=GT(c,e,n),this._ggxMaterial=HT(c,e,n)}return o}_compileMaterial(e){const n=new Ia(new za,e);this._renderer.compile(n,ol)}_sceneToCubeUV(e,n,a,o,c){const m=new Li(90,1,n,a),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Av),g.toneMapping=Na,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ia(new oo,new V_({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let _=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,_=!0):(S.color.copy(Av),_=!0);for(let D=0;D<6;D++){const O=D%3;O===0?(m.up.set(0,h[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[D],c.y,c.z)):O===1?(m.up.set(0,0,h[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[D],c.z)):(m.up.set(0,h[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[D]));const F=this._cubeSize;qs(o,O*F,D>2?F:0,F,F),g.setRenderTarget(o),_&&g.render(E,m),g.render(e,m)}g.toneMapping=y,g.autoClear=v,e.background=L}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===to||e.mapping===no;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=e;const m=this._cubeSize;qs(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,ol)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const m=u.uniforms,h=a/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(h*h-x*x),v=.05+h*.95,y=g*v,{_lodMax:M}=this,E=this._sizeLods[a],S=3*E*(a>M-mr?a-M+mr:0),_=4*(this._cubeSize-E);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-n,qs(c,S,_,3*E,2*E),o.setRenderTarget(c),o.render(f,ol),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,qs(e,S,_,3*E,2*E),o.setRenderTarget(e),o.render(f,ol)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,f){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&yn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[o];g.material=h;const v=h.uniforms,y=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Xr-1),E=c/M,S=isFinite(c)?1+Math.floor(x*E):Xr;S>Xr&&Rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Xr}`);const _=[];let L=0;for(let B=0;B<Xr;++B){const q=B/E,w=Math.exp(-q*q/2);_.push(w),B===0?L+=w:B<S&&(L+=2*w)}for(let B=0;B<_.length;B++)_[B]=_[B]/L;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=M,v.mipInt.value=D-a;const O=this._sizeLods[o],F=3*O*(o>D-mr?o-D+mr:0),P=4*(this._cubeSize-O);qs(n,F,P,3*O,2*O),m.setRenderTarget(n),m.render(g,ol)}}function BT(s){const e=[],n=[],a=[];let o=s;const c=s-mr+1+Tv.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);e.push(f);let m=1/f;u>s-mr?m=Tv[u-s+mr-1]:u===0&&(m=0),n.push(m);const h=1/(f-2),x=-h,g=1+h,v=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,M=6,E=3,S=2,_=1,L=new Float32Array(E*M*y),D=new Float32Array(S*M*y),O=new Float32Array(_*M*y);for(let P=0;P<y;P++){const B=P%3*2/3-1,q=P>2?0:-1,w=[B,q,0,B+2/3,q,0,B+2/3,q+1,0,B,q,0,B+2/3,q+1,0,B,q+1,0];L.set(w,E*M*P),D.set(v,S*M*P);const A=[P,P,P,P,P,P];O.set(A,_*M*P)}const F=new za;F.setAttribute("position",new ki(L,E)),F.setAttribute("uv",new ki(D,S)),F.setAttribute("faceIndex",new ki(O,_)),a.push(new Ia(F,null)),o>mr&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Rv(s,e,n){const a=new Kr(s,e,n);return a.texture.mapping=Ru,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function qs(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function HT(s,e,n){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function GT(s,e,n){const a=new Float32Array(Xr),o=new be(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Cv(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Dv(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}function VT(s){let e=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const m=f.mapping,h=m===Yh||m===qh,x=m===to||m===no;if(h||x){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new wv(s)),g=h?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return h&&y&&y.height>0||x&&y&&o(y)?(n===null&&(n=new wv(s)),g=h?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f){let m=0;const h=6;for(let x=0;x<h;x++)f[x]!==void 0&&m++;return m===h}function c(f){const m=f.target;m.removeEventListener("dispose",c);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function kT(s){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=s.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&bl("WebGLRenderer: "+a+" extension not supported."),o}}}function jT(s,e,n,a){const o={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function h(g){const v=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let D=0,O=L.length;D<O;D+=3){const F=L[D+0],P=L[D+1],B=L[D+2];v.push(F,P,P,B,B,F)}}else if(M!==void 0){const L=M.array;E=M.version;for(let D=0,O=L.length/3-1;D<O;D+=3){const F=D+0,P=D+1,B=D+2;v.push(F,P,P,B,B,F)}}else return;const S=new(F_(v)?j_:k_)(v,1);S.version=E;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function x(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&h(g)}else h(g);return c.get(g)}return{get:f,update:m,getWireframeAttribute:x}}function XT(s,e,n){let a;function o(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function m(v,y){s.drawElements(a,y,c,v*u),n.update(y,a,1)}function h(v,y,M){M!==0&&(s.drawElementsInstanced(a,y,c,v*u,M),n.update(y,a,M))}function x(v,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,v,0,M);let S=0;for(let _=0;_<M;_++)S+=y[_];n.update(S,a,1)}function g(v,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)h(v[_]/u,y[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,v,0,E,0,M);let _=0;for(let L=0;L<M;L++)_+=y[L]*E[L];n.update(_,a,1)}}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function WT(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:yn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function YT(s,e,n){const a=new WeakMap,o=new En;function c(u,f,m){const h=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=x!==void 0?x.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let A=function(){q.dispose(),a.delete(f),f.removeEventListener("dispose",A)};var y=A;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let O=0;M===!0&&(O=1),E===!0&&(O=2),S===!0&&(O=3);let F=f.attributes.position.count*O,P=1;F>e.maxTextureSize&&(P=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const B=new Float32Array(F*P*4*g),q=new B_(B,F,P,g);q.type=Ca,q.needsUpdate=!0;const w=O*4;for(let H=0;H<g;H++){const k=_[H],W=L[H],J=D[H],ie=F*P*4*H;for(let I=0;I<k.count;I++){const Y=I*w;M===!0&&(o.fromBufferAttribute(k,I),B[ie+Y+0]=o.x,B[ie+Y+1]=o.y,B[ie+Y+2]=o.z,B[ie+Y+3]=0),E===!0&&(o.fromBufferAttribute(W,I),B[ie+Y+4]=o.x,B[ie+Y+5]=o.y,B[ie+Y+6]=o.z,B[ie+Y+7]=0),S===!0&&(o.fromBufferAttribute(J,I),B[ie+Y+8]=o.x,B[ie+Y+9]=o.y,B[ie+Y+10]=o.z,B[ie+Y+11]=J.itemSize===4?o.w:1)}}v={count:g,texture:q,size:new Wt(F,P)},a.set(f,v),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=f.morphTargetsRelative?1:1-M;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function qT(s,e,n,a){let o=new WeakMap;function c(m){const h=a.render.frame,x=m.geometry,g=e.get(m,x);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),o.get(m)!==h&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,h))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function f(m){const h=m.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:c,dispose:u}}const ey=new Zn,Nv=new Q_(1,1),ty=new B_,ny=new h3,iy=new Y_,Lv=[],Uv=[],Ov=new Float32Array(16),Pv=new Float32Array(9),Iv=new Float32Array(4);function lo(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let c=Lv[o];if(c===void 0&&(c=new Float32Array(o),Lv[o]=c),e!==0){a.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function In(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function zn(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function Nu(s,e){let n=Uv[e];n===void 0&&(n=new Int32Array(e),Uv[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function ZT(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function KT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;s.uniform2fv(this.addr,e),zn(n,e)}}function QT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(In(n,e))return;s.uniform3fv(this.addr,e),zn(n,e)}}function JT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;s.uniform4fv(this.addr,e),zn(n,e)}}function $T(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(In(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),zn(n,e)}else{if(In(n,a))return;Iv.set(a),s.uniformMatrix2fv(this.addr,!1,Iv),zn(n,a)}}function eA(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(In(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),zn(n,e)}else{if(In(n,a))return;Pv.set(a),s.uniformMatrix3fv(this.addr,!1,Pv),zn(n,a)}}function tA(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(In(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),zn(n,e)}else{if(In(n,a))return;Ov.set(a),s.uniformMatrix4fv(this.addr,!1,Ov),zn(n,a)}}function nA(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function iA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;s.uniform2iv(this.addr,e),zn(n,e)}}function aA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(In(n,e))return;s.uniform3iv(this.addr,e),zn(n,e)}}function rA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;s.uniform4iv(this.addr,e),zn(n,e)}}function sA(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function oA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(In(n,e))return;s.uniform2uiv(this.addr,e),zn(n,e)}}function lA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(In(n,e))return;s.uniform3uiv(this.addr,e),zn(n,e)}}function cA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(In(n,e))return;s.uniform4uiv(this.addr,e),zn(n,e)}}function uA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Nv.compareFunction=z_,c=Nv):c=ey,n.setTexture2D(e||c,o)}function fA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||ny,o)}function dA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||iy,o)}function hA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||ty,o)}function pA(s){switch(s){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return eA;case 35676:return tA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return rA;case 5125:return sA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return hA}}function mA(s,e){s.uniform1fv(this.addr,e)}function gA(s,e){const n=lo(e,this.size,2);s.uniform2fv(this.addr,n)}function xA(s,e){const n=lo(e,this.size,3);s.uniform3fv(this.addr,n)}function vA(s,e){const n=lo(e,this.size,4);s.uniform4fv(this.addr,n)}function _A(s,e){const n=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function yA(s,e){const n=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function bA(s,e){const n=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function SA(s,e){s.uniform1iv(this.addr,e)}function MA(s,e){s.uniform2iv(this.addr,e)}function EA(s,e){s.uniform3iv(this.addr,e)}function TA(s,e){s.uniform4iv(this.addr,e)}function AA(s,e){s.uniform1uiv(this.addr,e)}function wA(s,e){s.uniform2uiv(this.addr,e)}function RA(s,e){s.uniform3uiv(this.addr,e)}function CA(s,e){s.uniform4uiv(this.addr,e)}function DA(s,e,n){const a=this.cache,o=e.length,c=Nu(n,o);In(a,c)||(s.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||ey,c[u])}function NA(s,e,n){const a=this.cache,o=e.length,c=Nu(n,o);In(a,c)||(s.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||ny,c[u])}function LA(s,e,n){const a=this.cache,o=e.length,c=Nu(n,o);In(a,c)||(s.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||iy,c[u])}function UA(s,e,n){const a=this.cache,o=e.length,c=Nu(n,o);In(a,c)||(s.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||ty,c[u])}function OA(s){switch(s){case 5126:return mA;case 35664:return gA;case 35665:return xA;case 35666:return vA;case 35674:return _A;case 35675:return yA;case 35676:return bA;case 5124:case 35670:return SA;case 35667:case 35671:return MA;case 35668:case 35672:return EA;case 35669:case 35673:return TA;case 5125:return AA;case 36294:return wA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return UA}}class PA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=pA(n.type)}}class IA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OA(n.type)}}class zA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],a)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function zv(s,e){s.seq.push(e),s.map[e.id]=e}function FA(s,e,n){const a=s.name,o=a.length;for(Mh.lastIndex=0;;){const c=Mh.exec(a),u=Mh.lastIndex;let f=c[1];const m=c[2]==="]",h=c[3];if(m&&(f=f|0),h===void 0||h==="["&&u+2===o){zv(n,h===void 0?new PA(f,s,e):new IA(f,s,e));break}else{let g=n.map[f];g===void 0&&(g=new zA(f),zv(n,g)),n=g}}}class hu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);FA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],m=a[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function Fv(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const BA=37297;let HA=0;function GA(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const Bv=new Lt;function VA(s){Jt._getMatrix(Bv,Jt.workingColorSpace,s);const e=`mat3( ${Bv.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(s)){case vu:return[e,"LinearTransferOETF"];case ln:return[e,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hv(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+GA(s.getShaderSource(e),f)}else return c}function kA(s,e){const n=VA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function jA(s,e){let n;switch(e){case TM:n="Linear";break;case AM:n="Reinhard";break;case wM:n="Cineon";break;case RM:n="ACESFilmic";break;case DM:n="AgX";break;case NM:n="Neutral";break;case CM:n="Custom";break;default:Rt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ou=new be;function XA(){Jt.getLuminanceCoefficients(ou);const s=ou.x.toFixed(4),e=ou.y.toFixed(4),n=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function YA(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function qA(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function ul(s){return s!==""}function Gv(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZA=/^[ \t]*#include +<([\w\d./]+)>/gm;function A0(s){return s.replace(ZA,QA)}const KA=new Map;function QA(s,e){let n=Ot[e];if(n===void 0){const a=KA.get(e);if(a!==void 0)n=Ot[a],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return A0(n)}const JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(s){return s.replace(JA,$A)}function $A(s,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function jv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ew(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===aM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ta&&(e="SHADOWMAP_TYPE_VSM"),e}function tw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function iw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case R_:e="ENVMAP_BLENDING_MULTIPLY";break;case MM:e="ENVMAP_BLENDING_MIX";break;case EM:e="ENVMAP_BLENDING_ADD";break}return e}function aw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function rw(s,e,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const m=ew(n),h=tw(n),x=nw(n),g=iw(n),v=aw(n),y=WA(n),M=YA(c),E=o.createProgram();let S,_,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ul).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ul).join(`
`),_.length>0&&(_+=`
`)):(S=[jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),_=[jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Na?"#define TONE_MAPPING":"",n.toneMapping!==Na?Ot.tonemapping_pars_fragment:"",n.toneMapping!==Na?jA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,kA("linearToOutputTexel",n.outputColorSpace),XA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),u=A0(u),u=Gv(u,n),u=Vv(u,n),f=A0(f),f=Gv(f,n),f=Vv(f,n),u=kv(u),f=kv(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===iv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===iv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=L+S+u,O=L+_+f,F=Fv(o,o.VERTEX_SHADER,D),P=Fv(o,o.FRAGMENT_SHADER,O);o.attachShader(E,F),o.attachShader(E,P),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function B(H){if(s.debug.checkShaderErrors){const k=o.getProgramInfoLog(E)||"",W=o.getShaderInfoLog(F)||"",J=o.getShaderInfoLog(P)||"",ie=k.trim(),I=W.trim(),Y=J.trim();let Z=!0,pe=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,F,P);else{const Me=Hv(o,F,"vertex"),z=Hv(o,P,"fragment");yn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ie+`
`+Me+`
`+z)}else ie!==""?Rt("WebGLProgram: Program Info Log:",ie):(I===""||Y==="")&&(pe=!1);pe&&(H.diagnostics={runnable:Z,programLog:ie,vertexShader:{log:I,prefix:S},fragmentShader:{log:Y,prefix:_}})}o.deleteShader(F),o.deleteShader(P),q=new hu(o,E),w=qA(o,E)}let q;this.getUniforms=function(){return q===void 0&&B(this),q};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(E,BA)),A},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=F,this.fragmentShader=P,this}let sw=0;class ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new lw(e),n.set(e,a)),a}}class lw{constructor(e){this.id=sw++,this.code=e,this.usedTimes=0}}function cw(s,e,n,a,o,c,u){const f=new H_,m=new ow,h=new Set,x=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return h.add(w),w===0?"uv":`uv${w}`}function S(w,A,H,k,W){const J=k.fog,ie=W.geometry,I=w.isMeshStandardMaterial?k.environment:null,Y=(w.isMeshStandardMaterial?n:e).get(w.envMap||I),Z=Y&&Y.mapping===Ru?Y.image.height:null,pe=M[w.type];w.precision!==null&&(y=o.getMaxPrecision(w.precision),y!==w.precision&&Rt("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const Me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,z=Me!==void 0?Me.length:0;let ee=0;ie.morphAttributes.position!==void 0&&(ee=1),ie.morphAttributes.normal!==void 0&&(ee=2),ie.morphAttributes.color!==void 0&&(ee=3);let he,Ee,Be,te;if(pe){const mt=Ki[pe];he=mt.vertexShader,Ee=mt.fragmentShader}else he=w.vertexShader,Ee=w.fragmentShader,m.update(w),Be=m.getVertexShaderID(w),te=m.getFragmentShaderID(w);const me=s.getRenderTarget(),He=s.state.buffers.depth.getReversed(),Ge=W.isInstancedMesh===!0,qe=W.isBatchedMesh===!0,Ke=!!w.map,Te=!!w.matcap,Je=!!Y,st=!!w.aoMap,G=!!w.lightMap,nt=!!w.bumpMap,rt=!!w.normalMap,it=!!w.displacementMap,Fe=!!w.emissiveMap,Et=!!w.metalnessMap,tt=!!w.roughnessMap,ft=w.anisotropy>0,U=w.clearcoat>0,T=w.dispersion>0,$=w.iridescence>0,ve=w.sheen>0,ue=w.transmission>0,se=ft&&!!w.anisotropyMap,Ye=U&&!!w.clearcoatMap,ke=U&&!!w.clearcoatNormalMap,ye=U&&!!w.clearcoatRoughnessMap,Qe=$&&!!w.iridescenceMap,Re=$&&!!w.iridescenceThicknessMap,oe=ve&&!!w.sheenColorMap,Le=ve&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,_e=!!w.specularColorMap,ze=!!w.specularIntensityMap,V=ue&&!!w.transmissionMap,Pe=ue&&!!w.thicknessMap,we=!!w.gradientMap,Ie=!!w.alphaMap,Ne=w.alphaTest>0,Ae=!!w.alphaHash,je=!!w.extensions;let ct=Na;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ct=s.toneMapping);const ut={shaderID:pe,shaderType:w.type,shaderName:w.name,vertexShader:he,fragmentShader:Ee,defines:w.defines,customVertexShaderID:Be,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:qe,batchingColor:qe&&W._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,instancingMorph:Ge&&W.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:io,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:Te,envMap:Je,envMapMode:Je&&Y.mapping,envMapCubeUVHeight:Z,aoMap:st,lightMap:G,bumpMap:nt,normalMap:rt,displacementMap:v&&it,emissiveMap:Fe,normalMapObjectSpace:rt&&w.normalMapType===IM,normalMapTangentSpace:rt&&w.normalMapType===PM,metalnessMap:Et,roughnessMap:tt,anisotropy:ft,anisotropyMap:se,clearcoat:U,clearcoatMap:Ye,clearcoatNormalMap:ke,clearcoatRoughnessMap:ye,dispersion:T,iridescence:$,iridescenceMap:Qe,iridescenceThicknessMap:Re,sheen:ve,sheenColorMap:oe,sheenRoughnessMap:Le,specularMap:Ve,specularColorMap:_e,specularIntensityMap:ze,transmission:ue,transmissionMap:V,thicknessMap:Pe,gradientMap:we,opaque:w.transparent===!1&&w.blending===Js&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ne,alphaHash:Ae,combine:w.combine,mapUv:Ke&&E(w.map.channel),aoMapUv:st&&E(w.aoMap.channel),lightMapUv:G&&E(w.lightMap.channel),bumpMapUv:nt&&E(w.bumpMap.channel),normalMapUv:rt&&E(w.normalMap.channel),displacementMapUv:it&&E(w.displacementMap.channel),emissiveMapUv:Fe&&E(w.emissiveMap.channel),metalnessMapUv:Et&&E(w.metalnessMap.channel),roughnessMapUv:tt&&E(w.roughnessMap.channel),anisotropyMapUv:se&&E(w.anisotropyMap.channel),clearcoatMapUv:Ye&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Le&&E(w.sheenRoughnessMap.channel),specularMapUv:Ve&&E(w.specularMap.channel),specularColorMapUv:_e&&E(w.specularColorMap.channel),specularIntensityMapUv:ze&&E(w.specularIntensityMap.channel),transmissionMapUv:V&&E(w.transmissionMap.channel),thicknessMapUv:Pe&&E(w.thicknessMap.channel),alphaMapUv:Ie&&E(w.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(rt||ft),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ie.attributes.uv&&(Ke||Ie),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:He,skinning:W.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===ln,decodeVideoTextureEmissive:Fe&&w.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(w.emissiveMap.colorSpace)===ln,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wa,flipSided:w.side===ci,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:je&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&w.extensions.multiDraw===!0||qe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ut.vertexUv1s=h.has(1),ut.vertexUv2s=h.has(2),ut.vertexUv3s=h.has(3),h.clear(),ut}function _(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)A.push(H),A.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(L(A,w),D(A,w),A.push(s.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function L(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function D(w,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),A.gradientMap&&f.enable(22),w.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reversedDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),w.push(f.mask)}function O(w){const A=M[w.type];let H;if(A){const k=Ki[A];H=w3.clone(k.uniforms)}else H=w.uniforms;return H}function F(w,A){let H;for(let k=0,W=x.length;k<W;k++){const J=x[k];if(J.cacheKey===A){H=J,++H.usedTimes;break}}return H===void 0&&(H=new rw(s,A,w,c),x.push(H)),H}function P(w){if(--w.usedTimes===0){const A=x.indexOf(w);x[A]=x[x.length-1],x.pop(),w.destroy()}}function B(w){m.remove(w)}function q(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:O,acquireProgram:F,releaseProgram:P,releaseShaderCache:B,programs:x,dispose:q}}function uw(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function a(u){s.delete(u)}function o(u,f,m){s.get(u)[f]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function fw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wv(){const s=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(g,v,y,M,E,S){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},s[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=y,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=S),e++,_}function f(g,v,y,M,E,S){const _=u(g,v,y,M,E,S);y.transmission>0?a.push(_):y.transparent===!0?o.push(_):n.push(_)}function m(g,v,y,M,E,S){const _=u(g,v,y,M,E,S);y.transmission>0?a.unshift(_):y.transparent===!0?o.unshift(_):n.unshift(_)}function h(g,v){n.length>1&&n.sort(g||fw),a.length>1&&a.sort(v||Xv),o.length>1&&o.sort(v||Xv)}function x(){for(let g=e,v=s.length;g<v;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:f,unshift:m,finish:x,sort:h}}function dw(){let s=new WeakMap;function e(a,o){const c=s.get(a);let u;return c===void 0?(u=new Wv,s.set(a,[u])):o>=c.length?(u=new Wv,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function hw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new be,color:new Xt};break;case"SpotLight":n={position:new be,direction:new be,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new be,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new be,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":n={color:new Xt,position:new be,halfWidth:new be,halfHeight:new be};break}return s[e.id]=n,n}}}function pw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let mw=0;function gw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xw(s){const e=new hw,n=pw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new be);const o=new be,c=new Ln,u=new Ln;function f(h){let x=0,g=0,v=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let y=0,M=0,E=0,S=0,_=0,L=0,D=0,O=0,F=0,P=0,B=0;h.sort(gw);for(let w=0,A=h.length;w<A;w++){const H=h[w],k=H.color,W=H.intensity,J=H.distance,ie=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=k.r*W,g+=k.g*W,v+=k.b*W;else if(H.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(H.sh.coefficients[I],W);B++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,Z=n.get(H);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,a.directionalShadow[y]=Z,a.directionalShadowMap[y]=ie,a.directionalShadowMatrix[y]=H.shadow.matrix,L++}a.directional[y]=I,y++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(k).multiplyScalar(W),I.distance=J,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,a.spot[E]=I;const Y=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,Y.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[E]=Y.matrix,H.castShadow){const Z=n.get(H);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,a.spotShadow[E]=Z,a.spotShadowMap[E]=ie,O++}E++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(k).multiplyScalar(W),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=I,S++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const Y=H.shadow,Z=n.get(H);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,a.pointShadow[M]=Z,a.pointShadowMap[M]=ie,a.pointShadowMatrix[M]=H.shadow.matrix,D++}a.point[M]=I,M++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(W),I.groundColor.copy(H.groundColor).multiplyScalar(W),a.hemi[_]=I,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=et.LTC_FLOAT_1,a.rectAreaLTC2=et.LTC_FLOAT_2):(a.rectAreaLTC1=et.LTC_HALF_1,a.rectAreaLTC2=et.LTC_HALF_2)),a.ambient[0]=x,a.ambient[1]=g,a.ambient[2]=v;const q=a.hash;(q.directionalLength!==y||q.pointLength!==M||q.spotLength!==E||q.rectAreaLength!==S||q.hemiLength!==_||q.numDirectionalShadows!==L||q.numPointShadows!==D||q.numSpotShadows!==O||q.numSpotMaps!==F||q.numLightProbes!==B)&&(a.directional.length=y,a.spot.length=E,a.rectArea.length=S,a.point.length=M,a.hemi.length=_,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=O+F-P,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=B,q.directionalLength=y,q.pointLength=M,q.spotLength=E,q.rectAreaLength=S,q.hemiLength=_,q.numDirectionalShadows=L,q.numPointShadows=D,q.numSpotShadows=O,q.numSpotMaps=F,q.numLightProbes=B,a.version=mw++)}function m(h,x){let g=0,v=0,y=0,M=0,E=0;const S=x.matrixWorldInverse;for(let _=0,L=h.length;_<L;_++){const D=h[_];if(D.isDirectionalLight){const O=a.directional[g];O.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(S),g++}else if(D.isSpotLight){const O=a.spot[y];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const O=a.rectArea[M];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(S),u.identity(),c.copy(D.matrixWorld),c.premultiply(S),u.extractRotation(c),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const O=a.point[v];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const O=a.hemi[E];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(S),E++}}}return{setup:f,setupView:m,state:a}}function Yv(s){const e=new xw(s),n=[],a=[];function o(x){h.camera=x,n.length=0,a.length=0}function c(x){n.push(x)}function u(x){a.push(x)}function f(){e.setup(n)}function m(x){e.setupView(n,x)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:u}}function vw(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new Yv(s),e.set(o,[f])):c>=u.length?(f=new Yv(s),u.push(f)):f=u[c],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yw=`uniform sampler2D shadow_pass;
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
}`;function bw(s,e,n){let a=new K_;const o=new Wt,c=new Wt,u=new En,f=new G3({depthPacking:OM}),m=new V3,h={},x=n.maxTextureSize,g={[gr]:ci,[ci]:gr,[wa]:wa},v=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:_w,fragmentShader:yw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new za;M.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ia(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w_;let _=this.type;this.render=function(P,B,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const w=s.getRenderTarget(),A=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Da),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const W=_!==Ta&&this.type===Ta,J=_===Ta&&this.type!==Ta;for(let ie=0,I=P.length;ie<I;ie++){const Y=P[ie],Z=Y.shadow;if(Z===void 0){Rt("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const pe=Z.getFrameExtents();if(o.multiply(pe),c.copy(Z.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/pe.x),o.x=c.x*pe.x,Z.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/pe.y),o.y=c.y*pe.y,Z.mapSize.y=c.y)),Z.map===null||W===!0||J===!0){const z=this.type!==Ta?{minFilter:bi,magFilter:bi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Kr(o.x,o.y,z),Z.map.texture.name=Y.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const Me=Z.getViewportCount();for(let z=0;z<Me;z++){const ee=Z.getViewport(z);u.set(c.x*ee.x,c.y*ee.y,c.x*ee.z,c.y*ee.w),k.viewport(u),Z.updateMatrices(Y,z),a=Z.getFrustum(),O(B,q,Z.camera,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===Ta&&L(Z,q),Z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(w,A,H)};function L(P,B){const q=e.update(E);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Kr(o.x,o.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(B,null,q,v,E,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(B,null,q,y,E,null)}function D(P,B,q,w){let A=null;const H=q.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)A=H;else if(A=q.isPointLight===!0?m:f,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const k=A.uuid,W=B.uuid;let J=h[k];J===void 0&&(J={},h[k]=J);let ie=J[W];ie===void 0&&(ie=A.clone(),J[W]=ie,B.addEventListener("dispose",F)),A=ie}if(A.visible=B.visible,A.wireframe=B.wireframe,w===Ta?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:g[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=s.properties.get(A);k.light=q}return A}function O(P,B,q,w,A){if(P.visible===!1)return;if(P.layers.test(B.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===Ta)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld);const W=e.update(P),J=P.material;if(Array.isArray(J)){const ie=W.groups;for(let I=0,Y=ie.length;I<Y;I++){const Z=ie[I],pe=J[Z.materialIndex];if(pe&&pe.visible){const Me=D(P,pe,w,A);P.onBeforeShadow(s,P,B,q,W,Me,Z),s.renderBufferDirect(q,null,W,Me,P,Z),P.onAfterShadow(s,P,B,q,W,Me,Z)}}}else if(J.visible){const ie=D(P,J,w,A);P.onBeforeShadow(s,P,B,q,W,ie,null),s.renderBufferDirect(q,null,W,ie,P,null),P.onAfterShadow(s,P,B,q,W,ie,null)}}const k=P.children;for(let W=0,J=k.length;W<J;W++)O(k[W],B,q,w,A)}function F(P){P.target.removeEventListener("dispose",F);for(const q in h){const w=h[q],A=P.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const Sw={[Hh]:Gh,[Vh]:Xh,[kh]:Wh,[eo]:jh,[Gh]:Hh,[Xh]:Vh,[Wh]:kh,[jh]:eo};function Mw(s,e){function n(){let V=!1;const Pe=new En;let we=null;const Ie=new En(0,0,0,0);return{setMask:function(Ne){we!==Ne&&!V&&(s.colorMask(Ne,Ne,Ne,Ne),we=Ne)},setLocked:function(Ne){V=Ne},setClear:function(Ne,Ae,je,ct,ut){ut===!0&&(Ne*=ct,Ae*=ct,je*=ct),Pe.set(Ne,Ae,je,ct),Ie.equals(Pe)===!1&&(s.clearColor(Ne,Ae,je,ct),Ie.copy(Pe))},reset:function(){V=!1,we=null,Ie.set(-1,0,0,0)}}}function a(){let V=!1,Pe=!1,we=null,Ie=null,Ne=null;return{setReversed:function(Ae){if(Pe!==Ae){const je=e.get("EXT_clip_control");Ae?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Pe=Ae;const ct=Ne;Ne=null,this.setClear(ct)}},getReversed:function(){return Pe},setTest:function(Ae){Ae?me(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(Ae){we!==Ae&&!V&&(s.depthMask(Ae),we=Ae)},setFunc:function(Ae){if(Pe&&(Ae=Sw[Ae]),Ie!==Ae){switch(Ae){case Hh:s.depthFunc(s.NEVER);break;case Gh:s.depthFunc(s.ALWAYS);break;case Vh:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case kh:s.depthFunc(s.EQUAL);break;case jh:s.depthFunc(s.GEQUAL);break;case Xh:s.depthFunc(s.GREATER);break;case Wh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=Ae}},setLocked:function(Ae){V=Ae},setClear:function(Ae){Ne!==Ae&&(Pe&&(Ae=1-Ae),s.clearDepth(Ae),Ne=Ae)},reset:function(){V=!1,we=null,Ie=null,Ne=null,Pe=!1}}}function o(){let V=!1,Pe=null,we=null,Ie=null,Ne=null,Ae=null,je=null,ct=null,ut=null;return{setTest:function(mt){V||(mt?me(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(mt){Pe!==mt&&!V&&(s.stencilMask(mt),Pe=mt)},setFunc:function(mt,Gt,gt){(we!==mt||Ie!==Gt||Ne!==gt)&&(s.stencilFunc(mt,Gt,gt),we=mt,Ie=Gt,Ne=gt)},setOp:function(mt,Gt,gt){(Ae!==mt||je!==Gt||ct!==gt)&&(s.stencilOp(mt,Gt,gt),Ae=mt,je=Gt,ct=gt)},setLocked:function(mt){V=mt},setClear:function(mt){ut!==mt&&(s.clearStencil(mt),ut=mt)},reset:function(){V=!1,Pe=null,we=null,Ie=null,Ne=null,Ae=null,je=null,ct=null,ut=null}}}const c=new n,u=new a,f=new o,m=new WeakMap,h=new WeakMap;let x={},g={},v=new WeakMap,y=[],M=null,E=!1,S=null,_=null,L=null,D=null,O=null,F=null,P=null,B=new Xt(0,0,0),q=0,w=!1,A=null,H=null,k=null,W=null,J=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Y=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),I=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),I=Y>=2);let pe=null,Me={};const z=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),he=new En().fromArray(z),Ee=new En().fromArray(ee);function Be(V,Pe,we,Ie){const Ne=new Uint8Array(4),Ae=s.createTexture();s.bindTexture(V,Ae),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<we;je++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Pe+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Ae}const te={};te[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),me(s.DEPTH_TEST),u.setFunc(eo),nt(!1),rt(Jx),me(s.CULL_FACE),st(Da);function me(V){x[V]!==!0&&(s.enable(V),x[V]=!0)}function He(V){x[V]!==!1&&(s.disable(V),x[V]=!1)}function Ge(V,Pe){return g[V]!==Pe?(s.bindFramebuffer(V,Pe),g[V]=Pe,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function qe(V,Pe){let we=y,Ie=!1;if(V){we=v.get(Pe),we===void 0&&(we=[],v.set(Pe,we));const Ne=V.textures;if(we.length!==Ne.length||we[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,je=Ne.length;Ae<je;Ae++)we[Ae]=s.COLOR_ATTACHMENT0+Ae;we.length=Ne.length,Ie=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(we)}function Ke(V){return M!==V?(s.useProgram(V),M=V,!0):!1}const Te={[jr]:s.FUNC_ADD,[sM]:s.FUNC_SUBTRACT,[oM]:s.FUNC_REVERSE_SUBTRACT};Te[lM]=s.MIN,Te[cM]=s.MAX;const Je={[uM]:s.ZERO,[fM]:s.ONE,[dM]:s.SRC_COLOR,[Fh]:s.SRC_ALPHA,[vM]:s.SRC_ALPHA_SATURATE,[gM]:s.DST_COLOR,[pM]:s.DST_ALPHA,[hM]:s.ONE_MINUS_SRC_COLOR,[Bh]:s.ONE_MINUS_SRC_ALPHA,[xM]:s.ONE_MINUS_DST_COLOR,[mM]:s.ONE_MINUS_DST_ALPHA,[_M]:s.CONSTANT_COLOR,[yM]:s.ONE_MINUS_CONSTANT_COLOR,[bM]:s.CONSTANT_ALPHA,[SM]:s.ONE_MINUS_CONSTANT_ALPHA};function st(V,Pe,we,Ie,Ne,Ae,je,ct,ut,mt){if(V===Da){E===!0&&(He(s.BLEND),E=!1);return}if(E===!1&&(me(s.BLEND),E=!0),V!==rM){if(V!==S||mt!==w){if((_!==jr||O!==jr)&&(s.blendEquation(s.FUNC_ADD),_=jr,O=jr),mt)switch(V){case Js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $x:s.blendFunc(s.ONE,s.ONE);break;case ev:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:yn("WebGLState: Invalid blending: ",V);break}else switch(V){case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $x:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ev:yn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tv:yn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yn("WebGLState: Invalid blending: ",V);break}L=null,D=null,F=null,P=null,B.set(0,0,0),q=0,S=V,w=mt}return}Ne=Ne||Pe,Ae=Ae||we,je=je||Ie,(Pe!==_||Ne!==O)&&(s.blendEquationSeparate(Te[Pe],Te[Ne]),_=Pe,O=Ne),(we!==L||Ie!==D||Ae!==F||je!==P)&&(s.blendFuncSeparate(Je[we],Je[Ie],Je[Ae],Je[je]),L=we,D=Ie,F=Ae,P=je),(ct.equals(B)===!1||ut!==q)&&(s.blendColor(ct.r,ct.g,ct.b,ut),B.copy(ct),q=ut),S=V,w=!1}function G(V,Pe){V.side===wa?He(s.CULL_FACE):me(s.CULL_FACE);let we=V.side===ci;Pe&&(we=!we),nt(we),V.blending===Js&&V.transparent===!1?st(Da):st(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ie=V.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(V){A!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),A=V)}function rt(V){V!==nM?(me(s.CULL_FACE),V!==H&&(V===Jx?s.cullFace(s.BACK):V===iM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),H=V}function it(V){V!==k&&(I&&s.lineWidth(V),k=V)}function Fe(V,Pe,we){V?(me(s.POLYGON_OFFSET_FILL),(W!==Pe||J!==we)&&(s.polygonOffset(Pe,we),W=Pe,J=we)):He(s.POLYGON_OFFSET_FILL)}function Et(V){V?me(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function tt(V){V===void 0&&(V=s.TEXTURE0+ie-1),pe!==V&&(s.activeTexture(V),pe=V)}function ft(V,Pe,we){we===void 0&&(pe===null?we=s.TEXTURE0+ie-1:we=pe);let Ie=Me[we];Ie===void 0&&(Ie={type:void 0,texture:void 0},Me[we]=Ie),(Ie.type!==V||Ie.texture!==Pe)&&(pe!==we&&(s.activeTexture(we),pe=we),s.bindTexture(V,Pe||te[V]),Ie.type=V,Ie.texture=Pe)}function U(){const V=Me[pe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ve(){try{s.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ue(){try{s.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ke(){try{s.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ye(){try{s.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Qe(){try{s.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Re(){try{s.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function oe(V){he.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),he.copy(V))}function Le(V){Ee.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ee.copy(V))}function Ve(V,Pe){let we=h.get(Pe);we===void 0&&(we=new WeakMap,h.set(Pe,we));let Ie=we.get(V);Ie===void 0&&(Ie=s.getUniformBlockIndex(Pe,V.name),we.set(V,Ie))}function _e(V,Pe){const Ie=h.get(Pe).get(V);m.get(Pe)!==Ie&&(s.uniformBlockBinding(Pe,Ie,V.__bindingPointIndex),m.set(Pe,Ie))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},pe=null,Me={},g={},v=new WeakMap,y=[],M=null,E=!1,S=null,_=null,L=null,D=null,O=null,F=null,P=null,B=new Xt(0,0,0),q=0,w=!1,A=null,H=null,k=null,W=null,J=null,he.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:me,disable:He,bindFramebuffer:Ge,drawBuffers:qe,useProgram:Ke,setBlending:st,setMaterial:G,setFlipSided:nt,setCullFace:rt,setLineWidth:it,setPolygonOffset:Fe,setScissorTest:Et,activeTexture:tt,bindTexture:ft,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:Qe,texImage3D:Re,updateUBOMapping:Ve,uniformBlockBinding:_e,texStorage2D:ke,texStorage3D:ye,texSubImage2D:ve,texSubImage3D:ue,compressedTexSubImage2D:se,compressedTexSubImage3D:Ye,scissor:oe,viewport:Le,reset:ze}}function Ew(s,e,n,a,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Wt,x=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,T){return y?new OffscreenCanvas(U,T):yl("canvas")}function E(U,T,$){let ve=1;const ue=ft(U);if((ue.width>$||ue.height>$)&&(ve=$/Math.max(ue.width,ue.height)),ve<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const se=Math.floor(ve*ue.width),Ye=Math.floor(ve*ue.height);g===void 0&&(g=M(se,Ye));const ke=T?M(se,Ye):g;return ke.width=se,ke.height=Ye,ke.getContext("2d").drawImage(U,0,0,se,Ye),Rt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+se+"x"+Ye+")."),ke}else return"data"in U&&Rt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),U;return U}function S(U){return U.generateMipmaps}function _(U){s.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(U,T,$,ve,ue=!1){if(U!==null){if(s[U]!==void 0)return s[U];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let se=T;if(T===s.RED&&($===s.FLOAT&&(se=s.R32F),$===s.HALF_FLOAT&&(se=s.R16F),$===s.UNSIGNED_BYTE&&(se=s.R8)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(se=s.R8UI),$===s.UNSIGNED_SHORT&&(se=s.R16UI),$===s.UNSIGNED_INT&&(se=s.R32UI),$===s.BYTE&&(se=s.R8I),$===s.SHORT&&(se=s.R16I),$===s.INT&&(se=s.R32I)),T===s.RG&&($===s.FLOAT&&(se=s.RG32F),$===s.HALF_FLOAT&&(se=s.RG16F),$===s.UNSIGNED_BYTE&&(se=s.RG8)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(se=s.RG8UI),$===s.UNSIGNED_SHORT&&(se=s.RG16UI),$===s.UNSIGNED_INT&&(se=s.RG32UI),$===s.BYTE&&(se=s.RG8I),$===s.SHORT&&(se=s.RG16I),$===s.INT&&(se=s.RG32I)),T===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(se=s.RGB8UI),$===s.UNSIGNED_SHORT&&(se=s.RGB16UI),$===s.UNSIGNED_INT&&(se=s.RGB32UI),$===s.BYTE&&(se=s.RGB8I),$===s.SHORT&&(se=s.RGB16I),$===s.INT&&(se=s.RGB32I)),T===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),$===s.UNSIGNED_INT&&(se=s.RGBA32UI),$===s.BYTE&&(se=s.RGBA8I),$===s.SHORT&&(se=s.RGBA16I),$===s.INT&&(se=s.RGBA32I)),T===s.RGB&&($===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(se=s.R11F_G11F_B10F)),T===s.RGBA){const Ye=ue?vu:Jt.getTransfer(ve);$===s.FLOAT&&(se=s.RGBA32F),$===s.HALF_FLOAT&&(se=s.RGBA16F),$===s.UNSIGNED_BYTE&&(se=Ye===ln?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function O(U,T){let $;return U?T===null||T===Zr||T===xl?$=s.DEPTH24_STENCIL8:T===Ca?$=s.DEPTH32F_STENCIL8:T===gl&&($=s.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zr||T===xl?$=s.DEPTH_COMPONENT24:T===Ca?$=s.DEPTH_COMPONENT32F:T===gl&&($=s.DEPTH_COMPONENT16),$}function F(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==bi&&U.minFilter!==Oi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function P(U){const T=U.target;T.removeEventListener("dispose",P),q(T),T.isVideoTexture&&x.delete(T)}function B(U){const T=U.target;T.removeEventListener("dispose",B),A(T)}function q(U){const T=a.get(U);if(T.__webglInit===void 0)return;const $=U.source,ve=v.get($);if(ve){const ue=ve[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&w(U),Object.keys(ve).length===0&&v.delete($)}a.remove(U)}function w(U){const T=a.get(U);s.deleteTexture(T.__webglTexture);const $=U.source,ve=v.get($);delete ve[T.__cacheKey],u.memory.textures--}function A(U){const T=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let ue=0;ue<T.__webglFramebuffer[ve].length;ue++)s.deleteFramebuffer(T.__webglFramebuffer[ve][ue]);else s.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[ve]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=U.textures;for(let ve=0,ue=$.length;ve<ue;ve++){const se=a.get($[ve]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),u.memory.textures--),a.remove($[ve])}a.remove(U)}let H=0;function k(){H=0}function W(){const U=H;return U>=o.maxTextures&&Rt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),H+=1,U}function J(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ie(U,T){const $=a.get(U);if(U.isVideoTexture&&Et(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const ve=U.image;if(ve===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{te($,U,T);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function I(U,T){const $=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){te($,U,T);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function Y(U,T){const $=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){te($,U,T);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function Z(U,T){const $=a.get(U);if(U.version>0&&$.__version!==U.version){me($,U,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}const pe={[Zh]:s.REPEAT,[Ra]:s.CLAMP_TO_EDGE,[Kh]:s.MIRRORED_REPEAT},Me={[bi]:s.NEAREST,[LM]:s.NEAREST_MIPMAP_NEAREST,[Fc]:s.NEAREST_MIPMAP_LINEAR,[Oi]:s.LINEAR,[qd]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},z={[zM]:s.NEVER,[kM]:s.ALWAYS,[FM]:s.LESS,[z_]:s.LEQUAL,[BM]:s.EQUAL,[VM]:s.GEQUAL,[HM]:s.GREATER,[GM]:s.NOTEQUAL};function ee(U,T){if(T.type===Ca&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Oi||T.magFilter===qd||T.magFilter===Fc||T.magFilter===Wr||T.minFilter===Oi||T.minFilter===qd||T.minFilter===Fc||T.minFilter===Wr)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,pe[T.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,pe[T.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,pe[T.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Me[T.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Me[T.minFilter]),T.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===bi||T.minFilter!==Fc&&T.minFilter!==Wr||T.type===Ca&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function he(U,T){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",P));const ve=T.source;let ue=v.get(ve);ue===void 0&&(ue={},v.set(ve,ue));const se=J(T);if(se!==U.__cacheKey){ue[se]===void 0&&(ue[se]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ue[se].usedTimes++;const Ye=ue[U.__cacheKey];Ye!==void 0&&(ue[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&w(T)),U.__cacheKey=se,U.__webglTexture=ue[se].texture}return $}function Ee(U,T,$){return Math.floor(Math.floor(U/$)/T)}function Be(U,T,$,ve){const se=U.updateRanges;if(se.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,$,ve,T.data);else{se.sort((Re,oe)=>Re.start-oe.start);let Ye=0;for(let Re=1;Re<se.length;Re++){const oe=se[Ye],Le=se[Re],Ve=oe.start+oe.count,_e=Ee(Le.start,T.width,4),ze=Ee(oe.start,T.width,4);Le.start<=Ve+1&&_e===ze&&Ee(Le.start+Le.count-1,T.width,4)===_e?oe.count=Math.max(oe.count,Le.start+Le.count-oe.start):(++Ye,se[Ye]=Le)}se.length=Ye+1;const ke=s.getParameter(s.UNPACK_ROW_LENGTH),ye=s.getParameter(s.UNPACK_SKIP_PIXELS),Qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Re=0,oe=se.length;Re<oe;Re++){const Le=se[Re],Ve=Math.floor(Le.start/4),_e=Math.ceil(Le.count/4),ze=Ve%T.width,V=Math.floor(Ve/T.width),Pe=_e,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),n.texSubImage2D(s.TEXTURE_2D,0,ze,V,Pe,we,$,ve,T.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ke),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qe)}}function te(U,T,$){let ve=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=s.TEXTURE_3D);const ue=he(U,T),se=T.source;n.bindTexture(ve,U.__webglTexture,s.TEXTURE0+$);const Ye=a.get(se);if(se.version!==Ye.__version||ue===!0){n.activeTexture(s.TEXTURE0+$);const ke=Jt.getPrimaries(Jt.workingColorSpace),ye=T.colorSpace===pr?null:Jt.getPrimaries(T.colorSpace),Qe=T.colorSpace===pr||ke===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Re=E(T.image,!1,o.maxTextureSize);Re=tt(T,Re);const oe=c.convert(T.format,T.colorSpace),Le=c.convert(T.type);let Ve=D(T.internalFormat,oe,Le,T.colorSpace,T.isVideoTexture);ee(ve,T);let _e;const ze=T.mipmaps,V=T.isVideoTexture!==!0,Pe=Ye.__version===void 0||ue===!0,we=se.dataReady,Ie=F(T,Re);if(T.isDepthTexture)Ve=O(T.format===_l,T.type),Pe&&(V?n.texStorage2D(s.TEXTURE_2D,1,Ve,Re.width,Re.height):n.texImage2D(s.TEXTURE_2D,0,Ve,Re.width,Re.height,0,oe,Le,null));else if(T.isDataTexture)if(ze.length>0){V&&Pe&&n.texStorage2D(s.TEXTURE_2D,Ie,Ve,ze[0].width,ze[0].height);for(let Ne=0,Ae=ze.length;Ne<Ae;Ne++)_e=ze[Ne],V?we&&n.texSubImage2D(s.TEXTURE_2D,Ne,0,0,_e.width,_e.height,oe,Le,_e.data):n.texImage2D(s.TEXTURE_2D,Ne,Ve,_e.width,_e.height,0,oe,Le,_e.data);T.generateMipmaps=!1}else V?(Pe&&n.texStorage2D(s.TEXTURE_2D,Ie,Ve,Re.width,Re.height),we&&Be(T,Re,oe,Le)):n.texImage2D(s.TEXTURE_2D,0,Ve,Re.width,Re.height,0,oe,Le,Re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ve,ze[0].width,ze[0].height,Re.depth);for(let Ne=0,Ae=ze.length;Ne<Ae;Ne++)if(_e=ze[Ne],T.format!==Vi)if(oe!==null)if(V){if(we)if(T.layerUpdates.size>0){const je=Ev(_e.width,_e.height,T.format,T.type);for(const ct of T.layerUpdates){const ut=_e.data.subarray(ct*je/_e.data.BYTES_PER_ELEMENT,(ct+1)*je/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,ct,_e.width,_e.height,1,oe,ut)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,0,_e.width,_e.height,Re.depth,oe,_e.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ne,Ve,_e.width,_e.height,Re.depth,0,_e.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?we&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,0,_e.width,_e.height,Re.depth,oe,Le,_e.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Ne,Ve,_e.width,_e.height,Re.depth,0,oe,Le,_e.data)}else{V&&Pe&&n.texStorage2D(s.TEXTURE_2D,Ie,Ve,ze[0].width,ze[0].height);for(let Ne=0,Ae=ze.length;Ne<Ae;Ne++)_e=ze[Ne],T.format!==Vi?oe!==null?V?we&&n.compressedTexSubImage2D(s.TEXTURE_2D,Ne,0,0,_e.width,_e.height,oe,_e.data):n.compressedTexImage2D(s.TEXTURE_2D,Ne,Ve,_e.width,_e.height,0,_e.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?we&&n.texSubImage2D(s.TEXTURE_2D,Ne,0,0,_e.width,_e.height,oe,Le,_e.data):n.texImage2D(s.TEXTURE_2D,Ne,Ve,_e.width,_e.height,0,oe,Le,_e.data)}else if(T.isDataArrayTexture)if(V){if(Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ve,Re.width,Re.height,Re.depth),we)if(T.layerUpdates.size>0){const Ne=Ev(Re.width,Re.height,T.format,T.type);for(const Ae of T.layerUpdates){const je=Re.data.subarray(Ae*Ne/Re.data.BYTES_PER_ELEMENT,(Ae+1)*Ne/Re.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ae,Re.width,Re.height,1,oe,Le,je)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,oe,Le,Re.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,Re.width,Re.height,Re.depth,0,oe,Le,Re.data);else if(T.isData3DTexture)V?(Pe&&n.texStorage3D(s.TEXTURE_3D,Ie,Ve,Re.width,Re.height,Re.depth),we&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,oe,Le,Re.data)):n.texImage3D(s.TEXTURE_3D,0,Ve,Re.width,Re.height,Re.depth,0,oe,Le,Re.data);else if(T.isFramebufferTexture){if(Pe)if(V)n.texStorage2D(s.TEXTURE_2D,Ie,Ve,Re.width,Re.height);else{let Ne=Re.width,Ae=Re.height;for(let je=0;je<Ie;je++)n.texImage2D(s.TEXTURE_2D,je,Ve,Ne,Ae,0,oe,Le,null),Ne>>=1,Ae>>=1}}else if(ze.length>0){if(V&&Pe){const Ne=ft(ze[0]);n.texStorage2D(s.TEXTURE_2D,Ie,Ve,Ne.width,Ne.height)}for(let Ne=0,Ae=ze.length;Ne<Ae;Ne++)_e=ze[Ne],V?we&&n.texSubImage2D(s.TEXTURE_2D,Ne,0,0,oe,Le,_e):n.texImage2D(s.TEXTURE_2D,Ne,Ve,oe,Le,_e);T.generateMipmaps=!1}else if(V){if(Pe){const Ne=ft(Re);n.texStorage2D(s.TEXTURE_2D,Ie,Ve,Ne.width,Ne.height)}we&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Le,Re)}else n.texImage2D(s.TEXTURE_2D,0,Ve,oe,Le,Re);S(T)&&_(ve),Ye.__version=se.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function me(U,T,$){if(T.image.length!==6)return;const ve=he(U,T),ue=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+$);const se=a.get(ue);if(ue.version!==se.__version||ve===!0){n.activeTexture(s.TEXTURE0+$);const Ye=Jt.getPrimaries(Jt.workingColorSpace),ke=T.colorSpace===pr?null:Jt.getPrimaries(T.colorSpace),ye=T.colorSpace===pr||Ye===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,Re=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let Ae=0;Ae<6;Ae++)!Qe&&!Re?oe[Ae]=E(T.image[Ae],!0,o.maxCubemapSize):oe[Ae]=Re?T.image[Ae].image:T.image[Ae],oe[Ae]=tt(T,oe[Ae]);const Le=oe[0],Ve=c.convert(T.format,T.colorSpace),_e=c.convert(T.type),ze=D(T.internalFormat,Ve,_e,T.colorSpace),V=T.isVideoTexture!==!0,Pe=se.__version===void 0||ve===!0,we=ue.dataReady;let Ie=F(T,Le);ee(s.TEXTURE_CUBE_MAP,T);let Ne;if(Qe){V&&Pe&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ze,Le.width,Le.height);for(let Ae=0;Ae<6;Ae++){Ne=oe[Ae].mipmaps;for(let je=0;je<Ne.length;je++){const ct=Ne[je];T.format!==Vi?Ve!==null?V?we&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je,0,0,ct.width,ct.height,Ve,ct.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je,ze,ct.width,ct.height,0,ct.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je,0,0,ct.width,ct.height,Ve,_e,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je,ze,ct.width,ct.height,0,Ve,_e,ct.data)}}}else{if(Ne=T.mipmaps,V&&Pe){Ne.length>0&&Ie++;const Ae=ft(oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ze,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Re){V?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,oe[Ae].width,oe[Ae].height,Ve,_e,oe[Ae].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ze,oe[Ae].width,oe[Ae].height,0,Ve,_e,oe[Ae].data);for(let je=0;je<Ne.length;je++){const ut=Ne[je].image[Ae].image;V?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je+1,0,0,ut.width,ut.height,Ve,_e,ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je+1,ze,ut.width,ut.height,0,Ve,_e,ut.data)}}else{V?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ve,_e,oe[Ae]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ze,Ve,_e,oe[Ae]);for(let je=0;je<Ne.length;je++){const ct=Ne[je];V?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je+1,0,0,Ve,_e,ct.image[Ae]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,je+1,ze,Ve,_e,ct.image[Ae])}}}S(T)&&_(s.TEXTURE_CUBE_MAP),se.__version=ue.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function He(U,T,$,ve,ue,se){const Ye=c.convert($.format,$.colorSpace),ke=c.convert($.type),ye=D($.internalFormat,Ye,ke,$.colorSpace),Qe=a.get(T),Re=a.get($);if(Re.__renderTarget=T,!Qe.__hasExternalTextures){const oe=Math.max(1,T.width>>se),Le=Math.max(1,T.height>>se);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?n.texImage3D(ue,se,ye,oe,Le,T.depth,0,Ye,ke,null):n.texImage2D(ue,se,ye,oe,Le,0,Ye,ke,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),Fe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ue,Re.__webglTexture,0,it(T)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,ue,Re.__webglTexture,se),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(U,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,U),T.depthBuffer){const ve=T.depthTexture,ue=ve&&ve.isDepthTexture?ve.type:null,se=O(T.stencilBuffer,ue),Ye=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=it(T);Fe(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,se,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,se,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,se,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,U)}else{const ve=T.textures;for(let ue=0;ue<ve.length;ue++){const se=ve[ue],Ye=c.convert(se.format,se.colorSpace),ke=c.convert(se.type),ye=D(se.internalFormat,Ye,ke,se.colorSpace),Qe=it(T);$&&Fe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,ye,T.width,T.height):Fe(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,ye,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ye,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=a.get(T.depthTexture);ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ie(T.depthTexture,0);const ue=ve.__webglTexture,se=it(T);if(T.depthTexture.format===vl)Fe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0);else if(T.depthTexture.format===_l)Fe(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ke(U){const T=a.get(U),$=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ve=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",ue)};ve.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=ve}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ve=U.texture.mipmaps;ve&&ve.length>0?qe(T.__webglFramebuffer[0],U):qe(T.__webglFramebuffer,U)}else if($){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=s.createRenderbuffer(),Ge(T.__webglDepthbuffer[ve],U,!1);else{const ue=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,se)}}else{const ve=U.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ge(T.__webglDepthbuffer,U,!1);else{const ue=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,se)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(U,T,$){const ve=a.get(U);T!==void 0&&He(ve.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ke(U)}function Je(U){const T=U.texture,$=a.get(U),ve=a.get(T);U.addEventListener("dispose",B);const ue=U.textures,se=U.isWebGLCubeRenderTarget===!0,Ye=ue.length>1;if(Ye||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=T.version,u.memory.textures++),se){$.__webglFramebuffer=[];for(let ke=0;ke<6;ke++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[ke]=[];for(let ye=0;ye<T.mipmaps.length;ye++)$.__webglFramebuffer[ke][ye]=s.createFramebuffer()}else $.__webglFramebuffer[ke]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let ke=0;ke<T.mipmaps.length;ke++)$.__webglFramebuffer[ke]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let ke=0,ye=ue.length;ke<ye;ke++){const Qe=a.get(ue[ke]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Fe(U)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ke=0;ke<ue.length;ke++){const ye=ue[ke];$.__webglColorRenderbuffer[ke]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[ke]);const Qe=c.convert(ye.format,ye.colorSpace),Re=c.convert(ye.type),oe=D(ye.internalFormat,Qe,Re,ye.colorSpace,U.isXRRenderTarget===!0),Le=it(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,oe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,$.__webglColorRenderbuffer[ke])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge($.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),ee(s.TEXTURE_CUBE_MAP,T);for(let ke=0;ke<6;ke++)if(T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)He($.__webglFramebuffer[ke][ye],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ke,ye);else He($.__webglFramebuffer[ke],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0);S(T)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ye){for(let ke=0,ye=ue.length;ke<ye;ke++){const Qe=ue[ke],Re=a.get(Qe);let oe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(oe,Re.__webglTexture),ee(oe,Qe),He($.__webglFramebuffer,U,Qe,s.COLOR_ATTACHMENT0+ke,oe,0),S(Qe)&&_(oe)}n.unbindTexture()}else{let ke=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ke=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(ke,ve.__webglTexture),ee(ke,T),T.mipmaps&&T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)He($.__webglFramebuffer[ye],U,T,s.COLOR_ATTACHMENT0,ke,ye);else He($.__webglFramebuffer,U,T,s.COLOR_ATTACHMENT0,ke,0);S(T)&&_(ke),n.unbindTexture()}U.depthBuffer&&Ke(U)}function st(U){const T=U.textures;for(let $=0,ve=T.length;$<ve;$++){const ue=T[$];if(S(ue)){const se=L(U),Ye=a.get(ue).__webglTexture;n.bindTexture(se,Ye),_(se),n.unbindTexture()}}}const G=[],nt=[];function rt(U){if(U.samples>0){if(Fe(U)===!1){const T=U.textures,$=U.width,ve=U.height;let ue=s.COLOR_BUFFER_BIT;const se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=a.get(U),ke=T.length>1;if(ke)for(let Qe=0;Qe<T.length;Qe++)n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const ye=U.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Qe=0;Qe<T.length;Qe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),ke){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const Re=a.get(T[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,$,ve,0,0,$,ve,ue,s.NEAREST),m===!0&&(G.length=0,nt.length=0,G.push(s.COLOR_ATTACHMENT0+Qe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(G.push(se),nt.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,G))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ke)for(let Qe=0;Qe<T.length;Qe++){n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const Re=a.get(T[Qe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,Re,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function it(U){return Math.min(o.maxSamples,U.samples)}function Fe(U){const T=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Et(U){const T=u.render.frame;x.get(U)!==T&&(x.set(U,T),U.update())}function tt(U,T){const $=U.colorSpace,ve=U.format,ue=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==io&&$!==pr&&(Jt.getTransfer($)===ln?(ve!==Vi||ue!==Oa)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yn("WebGLTextures: Unsupported texture color space:",$)),T}function ft(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=I,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Te,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Fe}function Tw(s,e){function n(a,o=pr){let c;const u=Jt.getTransfer(o);if(a===Oa)return s.UNSIGNED_BYTE;if(a===N0)return s.UNSIGNED_SHORT_4_4_4_4;if(a===L0)return s.UNSIGNED_SHORT_5_5_5_1;if(a===L_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===U_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===D_)return s.BYTE;if(a===N_)return s.SHORT;if(a===gl)return s.UNSIGNED_SHORT;if(a===D0)return s.INT;if(a===Zr)return s.UNSIGNED_INT;if(a===Ca)return s.FLOAT;if(a===ro)return s.HALF_FLOAT;if(a===O_)return s.ALPHA;if(a===P_)return s.RGB;if(a===Vi)return s.RGBA;if(a===vl)return s.DEPTH_COMPONENT;if(a===_l)return s.DEPTH_STENCIL;if(a===I_)return s.RED;if(a===U0)return s.RED_INTEGER;if(a===O0)return s.RG;if(a===P0)return s.RG_INTEGER;if(a===I0)return s.RGBA_INTEGER;if(a===cu||a===uu||a===fu||a===du)if(u===ln)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===du)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Qh||a===Jh||a===$h||a===e0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$h)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===e0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===t0||a===n0||a===i0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===t0||a===n0)return u===ln?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===i0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===a0||a===r0||a===s0||a===o0||a===l0||a===c0||a===u0||a===f0||a===d0||a===h0||a===p0||a===m0||a===g0||a===x0)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===a0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===r0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===s0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===o0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===l0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===c0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===u0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===f0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===d0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===h0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===p0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===m0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===g0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===x0)return u===ln?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===v0||a===_0||a===y0)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===v0)return u===ln?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===_0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===y0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===b0||a===S0||a===M0||a===E0)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===b0)return c.COMPRESSED_RED_RGTC1_EXT;if(a===S0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===M0)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===E0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===xl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const Aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ww=`
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

}`;class Rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new J_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ji({vertexShader:Aw,fragmentShader:ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ia(new Cu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cw extends so{constructor(e,n){super();const a=this;let o=null,c=1,u=null,f="local-floor",m=1,h=null,x=null,g=null,v=null,y=null,M=null;const E=typeof XRWebGLBinding<"u",S=new Rw,_={},L=n.getContextAttributes();let D=null,O=null;const F=[],P=[],B=new Wt;let q=null;const w=new Li;w.viewport=new En;const A=new Li;A.viewport=new En;const H=[w,A],k=new q3;let W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=F[te];return me===void 0&&(me=new mh,F[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=F[te];return me===void 0&&(me=new mh,F[te]=me),me.getGripSpace()},this.getHand=function(te){let me=F[te];return me===void 0&&(me=new mh,F[te]=me),me.getHandSpace()};function ie(te){const me=P.indexOf(te.inputSource);if(me===-1)return;const He=F[me];He!==void 0&&(He.update(te.inputSource,te.frame,h||u),He.dispatchEvent({type:te.type,data:te.inputSource}))}function I(){o.removeEventListener("select",ie),o.removeEventListener("selectstart",ie),o.removeEventListener("selectend",ie),o.removeEventListener("squeeze",ie),o.removeEventListener("squeezestart",ie),o.removeEventListener("squeezeend",ie),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",Y);for(let te=0;te<F.length;te++){const me=P[te];me!==null&&(P[te]=null,F[te].disconnect(me))}W=null,J=null,S.reset();for(const te in _)delete _[te];e.setRenderTarget(D),y=null,v=null,g=null,o=null,O=null,Be.stop(),a.isPresenting=!1,e.setPixelRatio(q),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,a.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,a.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",ie),o.addEventListener("selectstart",ie),o.addEventListener("selectend",ie),o.addEventListener("squeeze",ie),o.addEventListener("squeezestart",ie),o.addEventListener("squeezeend",ie),o.addEventListener("end",I),o.addEventListener("inputsourceschange",Y),L.xrCompatible!==!0&&await n.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(B),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let He=null,Ge=null,qe=null;L.depth&&(qe=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,He=L.stencil?_l:vl,Ge=L.stencil?xl:Zr);const Ke={colorFormat:n.RGBA8,depthFormat:qe,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Ke),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),O=new Kr(v.textureWidth,v.textureHeight,{format:Vi,type:Oa,depthTexture:new Q_(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,He),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const He={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,He),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Kr(y.framebufferWidth,y.framebufferHeight,{format:Vi,type:Oa,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(f),Be.setContext(o),Be.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(te){for(let me=0;me<te.removed.length;me++){const He=te.removed[me],Ge=P.indexOf(He);Ge>=0&&(P[Ge]=null,F[Ge].disconnect(He))}for(let me=0;me<te.added.length;me++){const He=te.added[me];let Ge=P.indexOf(He);if(Ge===-1){for(let Ke=0;Ke<F.length;Ke++)if(Ke>=P.length){P.push(He),Ge=Ke;break}else if(P[Ke]===null){P[Ke]=He,Ge=Ke;break}if(Ge===-1)break}const qe=F[Ge];qe&&qe.connect(He)}}const Z=new be,pe=new be;function Me(te,me,He){Z.setFromMatrixPosition(me.matrixWorld),pe.setFromMatrixPosition(He.matrixWorld);const Ge=Z.distanceTo(pe),qe=me.projectionMatrix.elements,Ke=He.projectionMatrix.elements,Te=qe[14]/(qe[10]-1),Je=qe[14]/(qe[10]+1),st=(qe[9]+1)/qe[5],G=(qe[9]-1)/qe[5],nt=(qe[8]-1)/qe[0],rt=(Ke[8]+1)/Ke[0],it=Te*nt,Fe=Te*rt,Et=Ge/(-nt+rt),tt=Et*-nt;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(tt),te.translateZ(Et),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),qe[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const ft=Te+Et,U=Je+Et,T=it-tt,$=Fe+(Ge-tt),ve=st*Je/U*ft,ue=G*Je/U*ft;te.projectionMatrix.makePerspective(T,$,ve,ue,ft,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function z(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let me=te.near,He=te.far;S.texture!==null&&(S.depthNear>0&&(me=S.depthNear),S.depthFar>0&&(He=S.depthFar)),k.near=A.near=w.near=me,k.far=A.far=w.far=He,(W!==k.near||J!==k.far)&&(o.updateRenderState({depthNear:k.near,depthFar:k.far}),W=k.near,J=k.far),k.layers.mask=te.layers.mask|6,w.layers.mask=k.layers.mask&3,A.layers.mask=k.layers.mask&5;const Ge=te.parent,qe=k.cameras;z(k,Ge);for(let Ke=0;Ke<qe.length;Ke++)z(qe[Ke],Ge);qe.length===2?Me(k,w,A):k.projectionMatrix.copy(w.projectionMatrix),ee(te,k,Ge)};function ee(te,me,He){He===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(He.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Sl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(k)},this.getCameraTexture=function(te){return _[te]};let he=null;function Ee(te,me){if(x=me.getViewerPose(h||u),M=me,x!==null){const He=x.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Ge=!1;He.length!==k.cameras.length&&(k.cameras.length=0,Ge=!0);for(let Je=0;Je<He.length;Je++){const st=He[Je];let G=null;if(y!==null)G=y.getViewport(st);else{const rt=g.getViewSubImage(v,st);G=rt.viewport,Je===0&&(e.setRenderTargetTextures(O,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(O))}let nt=H[Je];nt===void 0&&(nt=new Li,nt.layers.enable(Je),nt.viewport=new En,H[Je]=nt),nt.matrix.fromArray(st.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(st.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(G.x,G.y,G.width,G.height),Je===0&&(k.matrix.copy(nt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ge===!0&&k.cameras.push(nt)}const qe=o.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){g=a.getBinding();const Je=g.getDepthInformation(He[0]);Je&&Je.isValid&&Je.texture&&S.init(Je,o.renderState)}if(qe&&qe.includes("camera-access")&&E){e.state.unbindTexture(),g=a.getBinding();for(let Je=0;Je<He.length;Je++){const st=He[Je].camera;if(st){let G=_[st];G||(G=new J_,_[st]=G);const nt=g.getCameraImage(st);G.sourceTexture=nt}}}}for(let He=0;He<F.length;He++){const Ge=P[He],qe=F[He];Ge!==null&&qe!==void 0&&qe.update(Ge,me,h||u)}he&&he(te,me),me.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:me}),M=null}const Be=new $_;Be.setAnimationLoop(Ee),this.setAnimationLoop=function(te){he=te},this.dispose=function(){}}}const Gr=new Pa,Dw=new Ln;function Nw(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function a(S,_){_.color.getRGB(S.fogColor.value,X_(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,L,D,O){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),x(S,_)):_.isMeshStandardMaterial?(c(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,O)):_.isMeshMatcapMaterial?(c(S,_),M(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),E(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?m(S,_,L,D):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===ci&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===ci&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),D=L.envMap,O=L.envMapRotation;D&&(S.envMap.value=D,Gr.copy(O),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),S.envMapRotation.value.setFromMatrix4(Dw.makeRotationFromEuler(Gr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,L,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=D*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function x(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ci&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Lw(s,e,n,a){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const O=D.program;a.uniformBlockBinding(L,O)}function h(L,D){let O=o[L.id];O===void 0&&(M(L),O=x(L),o[L.id]=O,L.addEventListener("dispose",S));const F=D.program;a.updateUBOMapping(L,F);const P=e.render.frame;c[L.id]!==P&&(v(L),c[L.id]=P)}function x(L){const D=g();L.__bindingPointIndex=D;const O=s.createBuffer(),F=L.__size,P=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,F,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,O),O}function g(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return yn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const D=o[L.id],O=L.uniforms,F=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let P=0,B=O.length;P<B;P++){const q=Array.isArray(O[P])?O[P]:[O[P]];for(let w=0,A=q.length;w<A;w++){const H=q[w];if(y(H,P,w,F)===!0){const k=H.__offset,W=Array.isArray(H.value)?H.value:[H.value];let J=0;for(let ie=0;ie<W.length;ie++){const I=W[ie],Y=E(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,k+J,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,J),J+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,D,O,F){const P=L.value,B=D+"_"+O;if(F[B]===void 0)return typeof P=="number"||typeof P=="boolean"?F[B]=P:F[B]=P.clone(),!0;{const q=F[B];if(typeof P=="number"||typeof P=="boolean"){if(q!==P)return F[B]=P,!0}else if(q.equals(P)===!1)return q.copy(P),!0}return!1}function M(L){const D=L.uniforms;let O=0;const F=16;for(let B=0,q=D.length;B<q;B++){const w=Array.isArray(D[B])?D[B]:[D[B]];for(let A=0,H=w.length;A<H;A++){const k=w[A],W=Array.isArray(k.value)?k.value:[k.value];for(let J=0,ie=W.length;J<ie;J++){const I=W[J],Y=E(I),Z=O%F,pe=Z%Y.boundary,Me=Z+pe;O+=pe,Me!==0&&F-Me<Y.storage&&(O+=F-Me),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=O,O+=Y.storage}}}const P=O%F;return P>0&&(O+=F-P),L.__size=O,L.__cache={},this}function E(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Rt("WebGLRenderer: Unsupported uniform value type.",L),D}function S(L){const D=L.target;D.removeEventListener("dispose",S);const O=u.indexOf(D.__bindingPointIndex);u.splice(O,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:m,update:h,dispose:_}}const Uw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ma=null;function Ow(){return Ma===null&&(Ma=new I3(Uw,32,32,O0,ro),Ma.minFilter=Oi,Ma.magFilter=Oi,Ma.wrapS=Ra,Ma.wrapT=Ra,Ma.generateMipmaps=!1,Ma.needsUpdate=!0),Ma}class Pw{constructor(e={}){const{canvas:n=jM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const M=new Set([I0,P0,U0]),E=new Set([Oa,Zr,gl,xl,N0,L0]),S=new Uint32Array(4),_=new Int32Array(4);let L=null,D=null;const O=[],F=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let B=!1;this._outputColorSpace=yi;let q=0,w=0,A=null,H=-1,k=null;const W=new En,J=new En;let ie=null;const I=new Xt(0);let Y=0,Z=n.width,pe=n.height,Me=1,z=null,ee=null;const he=new En(0,0,Z,pe),Ee=new En(0,0,Z,pe);let Be=!1;const te=new K_;let me=!1,He=!1;const Ge=new Ln,qe=new be,Ke=new En,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function st(){return A===null?Me:1}let G=a;function nt(C,K){return n.getContext(C,K)}try{const C={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${C0}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",je,!1),G===null){const K="webgl2";if(G=nt(K,C),G===null)throw nt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let rt,it,Fe,Et,tt,ft,U,T,$,ve,ue,se,Ye,ke,ye,Qe,Re,oe,Le,Ve,_e,ze,V,Pe;function we(){rt=new kT(G),rt.init(),ze=new Tw(G,rt),it=new OT(G,rt,e,ze),Fe=new Mw(G,rt),it.reversedDepthBuffer&&v&&Fe.buffers.depth.setReversed(!0),Et=new WT(G),tt=new uw,ft=new Ew(G,rt,Fe,tt,it,ze,Et),U=new IT(P),T=new VT(P),$=new K3(G),V=new LT(G,$),ve=new jT(G,$,Et,V),ue=new qT(G,ve,$,Et),Le=new YT(G,it,ft),Qe=new PT(tt),se=new cw(P,U,T,rt,it,V,Qe),Ye=new Nw(P,tt),ke=new dw,ye=new vw(rt),oe=new NT(P,U,T,Fe,ue,y,m),Re=new bw(P,ue,it),Pe=new Lw(G,Et,it,Fe),Ve=new UT(G,rt,Et),_e=new XT(G,rt,Et),Et.programs=se.programs,P.capabilities=it,P.extensions=rt,P.properties=tt,P.renderLists=ke,P.shadowMap=Re,P.state=Fe,P.info=Et}we();const Ie=new Cw(P,G);this.xr=Ie,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(C){C!==void 0&&(Me=C,this.setSize(Z,pe,!1))},this.getSize=function(C){return C.set(Z,pe)},this.setSize=function(C,K,ce=!0){if(Ie.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,pe=K,n.width=Math.floor(C*Me),n.height=Math.floor(K*Me),ce===!0&&(n.style.width=C+"px",n.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(Z*Me,pe*Me).floor()},this.setDrawingBufferSize=function(C,K,ce){Z=C,pe=K,Me=ce,n.width=Math.floor(C*ce),n.height=Math.floor(K*ce),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(W)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,K,ce,le){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,K,ce,le),Fe.viewport(W.copy(he).multiplyScalar(Me).round())},this.getScissor=function(C){return C.copy(Ee)},this.setScissor=function(C,K,ce,le){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,K,ce,le),Fe.scissor(J.copy(Ee).multiplyScalar(Me).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(C){Fe.setScissorTest(Be=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ce=!0){let le=0;if(C){let ne=!1;if(A!==null){const Xe=A.texture.format;ne=M.has(Xe)}if(ne){const Xe=A.texture.type,We=E.has(Xe),$e=oe.getClearColor(),at=oe.getClearAlpha(),yt=$e.r,Mt=$e.g,ht=$e.b;We?(S[0]=yt,S[1]=Mt,S[2]=ht,S[3]=at,G.clearBufferuiv(G.COLOR,0,S)):(_[0]=yt,_[1]=Mt,_[2]=ht,_[3]=at,G.clearBufferiv(G.COLOR,0,_))}else le|=G.COLOR_BUFFER_BIT}K&&(le|=G.DEPTH_BUFFER_BIT),ce&&(le|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",je,!1),oe.dispose(),ke.dispose(),ye.dispose(),tt.dispose(),U.dispose(),T.dispose(),ue.dispose(),V.dispose(),Pe.dispose(),se.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Un),Ie.removeEventListener("sessionend",bn),Tt.stop()};function Ne(C){C.preventDefault(),yu("WebGLRenderer: Context Lost."),B=!0}function Ae(){yu("WebGLRenderer: Context Restored."),B=!1;const C=Et.autoReset,K=Re.enabled,ce=Re.autoUpdate,le=Re.needsUpdate,ne=Re.type;we(),Et.autoReset=C,Re.enabled=K,Re.autoUpdate=ce,Re.needsUpdate=le,Re.type=ne}function je(C){yn("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const K=C.target;K.removeEventListener("dispose",ct),ut(K)}function ut(C){mt(C),tt.remove(C)}function mt(C){const K=tt.get(C).programs;K!==void 0&&(K.forEach(function(ce){se.releaseProgram(ce)}),C.isShaderMaterial&&se.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ce,le,ne,Xe){K===null&&(K=Te);const We=ne.isMesh&&ne.matrixWorld.determinant()<0,$e=qt(C,K,ce,le,ne);Fe.setMaterial(le,We);let at=ce.index,yt=1;if(le.wireframe===!0){if(at=ve.getWireframeAttribute(ce),at===void 0)return;yt=2}const Mt=ce.drawRange,ht=ce.attributes.position;let Dt=Mt.start*yt,Yt=(Mt.start+Mt.count)*yt;Xe!==null&&(Dt=Math.max(Dt,Xe.start*yt),Yt=Math.min(Yt,(Xe.start+Xe.count)*yt)),at!==null?(Dt=Math.max(Dt,0),Yt=Math.min(Yt,at.count)):ht!=null&&(Dt=Math.max(Dt,0),Yt=Math.min(Yt,ht.count));const Zt=Yt-Dt;if(Zt<0||Zt===1/0)return;V.setup(ne,le,$e,ce,at);let Vt,en=Ve;if(at!==null&&(Vt=$.get(at),en=_e,en.setIndex(Vt)),ne.isMesh)le.wireframe===!0?(Fe.setLineWidth(le.wireframeLinewidth*st()),en.setMode(G.LINES)):en.setMode(G.TRIANGLES);else if(ne.isLine){let vt=le.linewidth;vt===void 0&&(vt=1),Fe.setLineWidth(vt*st()),ne.isLineSegments?en.setMode(G.LINES):ne.isLineLoop?en.setMode(G.LINE_LOOP):en.setMode(G.LINE_STRIP)}else ne.isPoints?en.setMode(G.POINTS):ne.isSprite&&en.setMode(G.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)bl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),en.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))en.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const vt=ne._multiDrawStarts,cn=ne._multiDrawCounts,kt=ne._multiDrawCount,Bn=at?$.get(at).bytesPerElement:1,Fa=tt.get(le).currentProgram.getUniforms();for(let dn=0;dn<kt;dn++)Fa.setValue(G,"_gl_DrawID",dn),en.render(vt[dn]/Bn,cn[dn])}else if(ne.isInstancedMesh)en.renderInstances(Dt,Zt,ne.count);else if(ce.isInstancedBufferGeometry){const vt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,cn=Math.min(ce.instanceCount,vt);en.renderInstances(Dt,Zt,cn)}else en.render(Dt,Zt)};function Gt(C,K,ce){C.transparent===!0&&C.side===wa&&C.forceSinglePass===!1?(C.side=ci,C.needsUpdate=!0,xt(C,K,ce),C.side=gr,C.needsUpdate=!0,xt(C,K,ce),C.side=wa):xt(C,K,ce)}this.compile=function(C,K,ce=null){ce===null&&(ce=C),D=ye.get(ce),D.init(K),F.push(D),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),C!==ce&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),D.setupLights();const le=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Xe=ne.material;if(Xe)if(Array.isArray(Xe))for(let We=0;We<Xe.length;We++){const $e=Xe[We];Gt($e,ce,ne),le.add($e)}else Gt(Xe,ce,ne),le.add(Xe)}),D=F.pop(),le},this.compileAsync=function(C,K,ce=null){const le=this.compile(C,K,ce);return new Promise(ne=>{function Xe(){if(le.forEach(function(We){tt.get(We).currentProgram.isReady()&&le.delete(We)}),le.size===0){ne(C);return}setTimeout(Xe,10)}rt.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let gt=null;function Fn(C){gt&&gt(C)}function Un(){Tt.stop()}function bn(){Tt.start()}const Tt=new $_;Tt.setAnimationLoop(Fn),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(C){gt=C,Ie.setAnimationLoop(C),C===null?Tt.stop():Tt.start()},Ie.addEventListener("sessionstart",Un),Ie.addEventListener("sessionend",bn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){yn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(K),K=Ie.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,K,A),D=ye.get(C,F.length),D.init(K),F.push(D),Ge.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),te.setFromProjectionMatrix(Ge,Ji,K.reversedDepth),He=this.localClippingEnabled,me=Qe.init(this.clippingPlanes,He),L=ke.get(C,O.length),L.init(),O.push(L),Ie.enabled===!0&&Ie.isPresenting===!0){const Xe=P.xr.getDepthSensingMesh();Xe!==null&&j(Xe,K,-1/0,P.sortObjects)}j(C,K,0,P.sortObjects),L.finish(),P.sortObjects===!0&&L.sort(z,ee),Je=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Je&&oe.addToRenderList(L,C),this.info.render.frame++,me===!0&&Qe.beginShadows();const ce=D.state.shadowsArray;Re.render(ce,C,K),me===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=L.opaque,ne=L.transmissive;if(D.setupLights(),K.isArrayCamera){const Xe=K.cameras;if(ne.length>0)for(let We=0,$e=Xe.length;We<$e;We++){const at=Xe[We];De(le,ne,C,at)}Je&&oe.render(C);for(let We=0,$e=Xe.length;We<$e;We++){const at=Xe[We];xe(L,C,at,at.viewport)}}else ne.length>0&&De(le,ne,C,K),Je&&oe.render(C),xe(L,C,K);A!==null&&w===0&&(ft.updateMultisampleRenderTarget(A),ft.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(P,C,K),V.resetDefaultState(),H=-1,k=null,F.pop(),F.length>0?(D=F[F.length-1],me===!0&&Qe.setGlobalState(P.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?L=O[O.length-1]:L=null};function j(C,K,ce,le){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){le&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ge);const We=ue.update(C),$e=C.material;$e.visible&&L.push(C,We,$e,ce,Ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const We=ue.update(C),$e=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Ke.copy(We.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(Ge)),Array.isArray($e)){const at=We.groups;for(let yt=0,Mt=at.length;yt<Mt;yt++){const ht=at[yt],Dt=$e[ht.materialIndex];Dt&&Dt.visible&&L.push(C,We,Dt,ce,Ke.z,ht)}}else $e.visible&&L.push(C,We,$e,ce,Ke.z,null)}}const Xe=C.children;for(let We=0,$e=Xe.length;We<$e;We++)j(Xe[We],K,ce,le)}function xe(C,K,ce,le){const{opaque:ne,transmissive:Xe,transparent:We}=C;D.setupLightsView(ce),me===!0&&Qe.setGlobalState(P.clippingPlanes,ce),le&&Fe.viewport(W.copy(le)),ne.length>0&&Ze(ne,K,ce),Xe.length>0&&Ze(Xe,K,ce),We.length>0&&Ze(We,K,ce),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function De(C,K,ce,le){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[le.id]===void 0&&(D.state.transmissionRenderTarget[le.id]=new Kr(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?ro:Oa,minFilter:Wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const Xe=D.state.transmissionRenderTarget[le.id],We=le.viewport||W;Xe.setSize(We.z*P.transmissionResolutionScale,We.w*P.transmissionResolutionScale);const $e=P.getRenderTarget(),at=P.getActiveCubeFace(),yt=P.getActiveMipmapLevel();P.setRenderTarget(Xe),P.getClearColor(I),Y=P.getClearAlpha(),Y<1&&P.setClearColor(16777215,.5),P.clear(),Je&&oe.render(ce);const Mt=P.toneMapping;P.toneMapping=Na;const ht=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),D.setupLightsView(le),me===!0&&Qe.setGlobalState(P.clippingPlanes,le),Ze(C,ce,le),ft.updateMultisampleRenderTarget(Xe),ft.updateRenderTargetMipmap(Xe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Yt=0,Zt=K.length;Yt<Zt;Yt++){const Vt=K[Yt],{object:en,geometry:vt,material:cn,group:kt}=Vt;if(cn.side===wa&&en.layers.test(le.layers)){const Bn=cn.side;cn.side=ci,cn.needsUpdate=!0,lt(en,ce,le,vt,cn,kt),cn.side=Bn,cn.needsUpdate=!0,Dt=!0}}Dt===!0&&(ft.updateMultisampleRenderTarget(Xe),ft.updateRenderTargetMipmap(Xe))}P.setRenderTarget($e,at,yt),P.setClearColor(I,Y),ht!==void 0&&(le.viewport=ht),P.toneMapping=Mt}function Ze(C,K,ce){const le=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,Xe=C.length;ne<Xe;ne++){const We=C[ne],{object:$e,geometry:at,group:yt}=We;let Mt=We.material;Mt.allowOverride===!0&&le!==null&&(Mt=le),$e.layers.test(ce.layers)&&lt($e,K,ce,at,Mt,yt)}}function lt(C,K,ce,le,ne,Xe){C.onBeforeRender(P,K,ce,le,ne,Xe),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(P,K,ce,le,C,Xe),ne.transparent===!0&&ne.side===wa&&ne.forceSinglePass===!1?(ne.side=ci,ne.needsUpdate=!0,P.renderBufferDirect(ce,K,le,ne,C,Xe),ne.side=gr,ne.needsUpdate=!0,P.renderBufferDirect(ce,K,le,ne,C,Xe),ne.side=wa):P.renderBufferDirect(ce,K,le,ne,C,Xe),C.onAfterRender(P,K,ce,le,ne,Xe)}function xt(C,K,ce){K.isScene!==!0&&(K=Te);const le=tt.get(C),ne=D.state.lights,Xe=D.state.shadowsArray,We=ne.state.version,$e=se.getParameters(C,ne.state,Xe,K,ce),at=se.getProgramCacheKey($e);let yt=le.programs;le.environment=C.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(C.isMeshStandardMaterial?T:U).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,yt===void 0&&(C.addEventListener("dispose",ct),yt=new Map,le.programs=yt);let Mt=yt.get(at);if(Mt!==void 0){if(le.currentProgram===Mt&&le.lightsStateVersion===We)return Ut(C,$e),Mt}else $e.uniforms=se.getUniforms(C),C.onBeforeCompile($e,P),Mt=se.acquireProgram($e,at),yt.set(at,Mt),le.uniforms=$e.uniforms;const ht=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ht.clippingPlanes=Qe.uniform),Ut(C,$e),le.needsLights=Pt(C),le.lightsStateVersion=We,le.needsLights&&(ht.ambientLightColor.value=ne.state.ambient,ht.lightProbe.value=ne.state.probe,ht.directionalLights.value=ne.state.directional,ht.directionalLightShadows.value=ne.state.directionalShadow,ht.spotLights.value=ne.state.spot,ht.spotLightShadows.value=ne.state.spotShadow,ht.rectAreaLights.value=ne.state.rectArea,ht.ltc_1.value=ne.state.rectAreaLTC1,ht.ltc_2.value=ne.state.rectAreaLTC2,ht.pointLights.value=ne.state.point,ht.pointLightShadows.value=ne.state.pointShadow,ht.hemisphereLights.value=ne.state.hemi,ht.directionalShadowMap.value=ne.state.directionalShadowMap,ht.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ht.spotShadowMap.value=ne.state.spotShadowMap,ht.spotLightMatrix.value=ne.state.spotLightMatrix,ht.spotLightMap.value=ne.state.spotLightMap,ht.pointShadowMap.value=ne.state.pointShadowMap,ht.pointShadowMatrix.value=ne.state.pointShadowMatrix),le.currentProgram=Mt,le.uniformsList=null,Mt}function bt(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=hu.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Ut(C,K){const ce=tt.get(C);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function qt(C,K,ce,le,ne){K.isScene!==!0&&(K=Te),ft.resetTextureUnits();const Xe=K.fog,We=le.isMeshStandardMaterial?K.environment:null,$e=A===null?P.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:io,at=(le.isMeshStandardMaterial?T:U).get(le.envMap||We),yt=le.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Mt=!!ce.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),ht=!!ce.morphAttributes.position,Dt=!!ce.morphAttributes.normal,Yt=!!ce.morphAttributes.color;let Zt=Na;le.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Zt=P.toneMapping);const Vt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,en=Vt!==void 0?Vt.length:0,vt=tt.get(le),cn=D.state.lights;if(me===!0&&(He===!0||C!==k)){const Gn=C===k&&le.id===H;Qe.setState(le,C,Gn)}let kt=!1;le.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==cn.state.version||vt.outputColorSpace!==$e||ne.isBatchedMesh&&vt.batching===!1||!ne.isBatchedMesh&&vt.batching===!0||ne.isBatchedMesh&&vt.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&vt.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&vt.instancing===!1||!ne.isInstancedMesh&&vt.instancing===!0||ne.isSkinnedMesh&&vt.skinning===!1||!ne.isSkinnedMesh&&vt.skinning===!0||ne.isInstancedMesh&&vt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&vt.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&vt.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&vt.instancingMorph===!1&&ne.morphTexture!==null||vt.envMap!==at||le.fog===!0&&vt.fog!==Xe||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Qe.numPlanes||vt.numIntersection!==Qe.numIntersection)||vt.vertexAlphas!==yt||vt.vertexTangents!==Mt||vt.morphTargets!==ht||vt.morphNormals!==Dt||vt.morphColors!==Yt||vt.toneMapping!==Zt||vt.morphTargetsCount!==en)&&(kt=!0):(kt=!0,vt.__version=le.version);let Bn=vt.currentProgram;kt===!0&&(Bn=xt(le,K,ne));let Fa=!1,dn=!1,$i=!1;const hn=Bn.getUniforms(),Hn=vt.uniforms;if(Fe.useProgram(Bn.program)&&(Fa=!0,dn=!0,$i=!0),le.id!==H&&(H=le.id,dn=!0),Fa||k!==C){Fe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),hn.setValue(G,"projectionMatrix",C.projectionMatrix),hn.setValue(G,"viewMatrix",C.matrixWorldInverse);const jn=hn.map.cameraPosition;jn!==void 0&&jn.setValue(G,qe.setFromMatrixPosition(C.matrixWorld)),it.logarithmicDepthBuffer&&hn.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&hn.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,dn=!0,$i=!0)}if(ne.isSkinnedMesh){hn.setOptional(G,ne,"bindMatrix"),hn.setOptional(G,ne,"bindMatrixInverse");const Gn=ne.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),hn.setValue(G,"boneTexture",Gn.boneTexture,ft))}ne.isBatchedMesh&&(hn.setOptional(G,ne,"batchingTexture"),hn.setValue(G,"batchingTexture",ne._matricesTexture,ft),hn.setOptional(G,ne,"batchingIdTexture"),hn.setValue(G,"batchingIdTexture",ne._indirectTexture,ft),hn.setOptional(G,ne,"batchingColorTexture"),ne._colorsTexture!==null&&hn.setValue(G,"batchingColorTexture",ne._colorsTexture,ft));const On=ce.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Le.update(ne,ce,Bn),(dn||vt.receiveShadow!==ne.receiveShadow)&&(vt.receiveShadow=ne.receiveShadow,hn.setValue(G,"receiveShadow",ne.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Hn.envMap.value=at,Hn.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(Hn.envMapIntensity.value=K.environmentIntensity),Hn.dfgLUT!==void 0&&(Hn.dfgLUT.value=Ow()),dn&&(hn.setValue(G,"toneMappingExposure",P.toneMappingExposure),vt.needsLights&&_t(Hn,$i),Xe&&le.fog===!0&&Ye.refreshFogUniforms(Hn,Xe),Ye.refreshMaterialUniforms(Hn,le,Me,pe,D.state.transmissionRenderTarget[C.id]),hu.upload(G,bt(vt),Hn,ft)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(hu.upload(G,bt(vt),Hn,ft),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&hn.setValue(G,"center",ne.center),hn.setValue(G,"modelViewMatrix",ne.modelViewMatrix),hn.setValue(G,"normalMatrix",ne.normalMatrix),hn.setValue(G,"modelMatrix",ne.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Gn=le.uniformsGroups;for(let jn=0,Xi=Gn.length;jn<Xi;jn++){const ea=Gn[jn];Pe.update(ea,Bn),Pe.bind(ea,Bn)}}return Bn}function _t(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Pt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,K,ce){const le=tt.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),tt.get(C.texture).__webglTexture=K,tt.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ce,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ce=tt.get(C);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0};const fn=G.createFramebuffer();this.setRenderTarget=function(C,K=0,ce=0){A=C,q=K,w=ce;let le=!0,ne=null,Xe=!1,We=!1;if(C){const at=tt.get(C);if(at.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(G.FRAMEBUFFER,null),le=!1;else if(at.__webglFramebuffer===void 0)ft.setupRenderTarget(C);else if(at.__hasExternalTextures)ft.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ht=C.depthTexture;if(at.__boundDepthTexture!==ht){if(ht!==null&&tt.has(ht)&&(C.width!==ht.image.width||C.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(C)}}const yt=C.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(We=!0);const Mt=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Mt[K])?ne=Mt[K][ce]:ne=Mt[K],Xe=!0):C.samples>0&&ft.useMultisampledRTT(C)===!1?ne=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(Mt)?ne=Mt[ce]:ne=Mt,W.copy(C.viewport),J.copy(C.scissor),ie=C.scissorTest}else W.copy(he).multiplyScalar(Me).floor(),J.copy(Ee).multiplyScalar(Me).floor(),ie=Be;if(ce!==0&&(ne=fn),Fe.bindFramebuffer(G.FRAMEBUFFER,ne)&&le&&Fe.drawBuffers(C,ne),Fe.viewport(W),Fe.scissor(J),Fe.setScissorTest(ie),Xe){const at=tt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,at.__webglTexture,ce)}else if(We){const at=K;for(let yt=0;yt<C.textures.length;yt++){const Mt=tt.get(C.textures[yt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+yt,Mt.__webglTexture,ce,at)}}else if(C!==null&&ce!==0){const at=tt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,at.__webglTexture,ce)}H=-1},this.readRenderTargetPixels=function(C,K,ce,le,ne,Xe,We,$e=0){if(!(C&&C.isWebGLRenderTarget)){yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(at=at[We]),at){Fe.bindFramebuffer(G.FRAMEBUFFER,at);try{const yt=C.textures[$e],Mt=yt.format,ht=yt.type;if(!it.textureFormatReadable(Mt)){yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(ht)){yn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-le&&ce>=0&&ce<=C.height-ne&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+$e),G.readPixels(K,ce,le,ne,ze.convert(Mt),ze.convert(ht),Xe))}finally{const yt=A!==null?tt.get(A).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(C,K,ce,le,ne,Xe,We,$e=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&We!==void 0&&(at=at[We]),at)if(K>=0&&K<=C.width-le&&ce>=0&&ce<=C.height-ne){Fe.bindFramebuffer(G.FRAMEBUFFER,at);const yt=C.textures[$e],Mt=yt.format,ht=yt.type;if(!it.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Dt),G.bufferData(G.PIXEL_PACK_BUFFER,Xe.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+$e),G.readPixels(K,ce,le,ne,ze.convert(Mt),ze.convert(ht),0);const Yt=A!==null?tt.get(A).__webglFramebuffer:null;Fe.bindFramebuffer(G.FRAMEBUFFER,Yt);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await XM(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Dt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Xe),G.deleteBuffer(Dt),G.deleteSync(Zt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ce=0){const le=Math.pow(2,-ce),ne=Math.floor(C.image.width*le),Xe=Math.floor(C.image.height*le),We=K!==null?K.x:0,$e=K!==null?K.y:0;ft.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ce,0,0,We,$e,ne,Xe),Fe.unbindTexture()};const gn=G.createFramebuffer(),Tn=G.createFramebuffer();this.copyTextureToTexture=function(C,K,ce=null,le=null,ne=0,Xe=null){Xe===null&&(ne!==0?(bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Xe=ne,ne=0):Xe=0);let We,$e,at,yt,Mt,ht,Dt,Yt,Zt;const Vt=C.isCompressedTexture?C.mipmaps[Xe]:C.image;if(ce!==null)We=ce.max.x-ce.min.x,$e=ce.max.y-ce.min.y,at=ce.isBox3?ce.max.z-ce.min.z:1,yt=ce.min.x,Mt=ce.min.y,ht=ce.isBox3?ce.min.z:0;else{const On=Math.pow(2,-ne);We=Math.floor(Vt.width*On),$e=Math.floor(Vt.height*On),C.isDataArrayTexture?at=Vt.depth:C.isData3DTexture?at=Math.floor(Vt.depth*On):at=1,yt=0,Mt=0,ht=0}le!==null?(Dt=le.x,Yt=le.y,Zt=le.z):(Dt=0,Yt=0,Zt=0);const en=ze.convert(K.format),vt=ze.convert(K.type);let cn;K.isData3DTexture?(ft.setTexture3D(K,0),cn=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ft.setTexture2DArray(K,0),cn=G.TEXTURE_2D_ARRAY):(ft.setTexture2D(K,0),cn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const kt=G.getParameter(G.UNPACK_ROW_LENGTH),Bn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Fa=G.getParameter(G.UNPACK_SKIP_PIXELS),dn=G.getParameter(G.UNPACK_SKIP_ROWS),$i=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Mt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ht);const hn=C.isDataArrayTexture||C.isData3DTexture,Hn=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const On=tt.get(C),Gn=tt.get(K),jn=tt.get(On.__renderTarget),Xi=tt.get(Gn.__renderTarget);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,jn.__webglFramebuffer),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let ea=0;ea<at;ea++)hn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tt.get(C).__webglTexture,ne,ht+ea),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tt.get(K).__webglTexture,Xe,Zt+ea)),G.blitFramebuffer(yt,Mt,We,$e,Dt,Yt,We,$e,G.DEPTH_BUFFER_BIT,G.NEAREST);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||tt.has(C)){const On=tt.get(C),Gn=tt.get(K);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,gn),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Tn);for(let jn=0;jn<at;jn++)hn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,On.__webglTexture,ne,ht+jn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,On.__webglTexture,ne),Hn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gn.__webglTexture,Xe,Zt+jn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Gn.__webglTexture,Xe),ne!==0?G.blitFramebuffer(yt,Mt,We,$e,Dt,Yt,We,$e,G.COLOR_BUFFER_BIT,G.NEAREST):Hn?G.copyTexSubImage3D(cn,Xe,Dt,Yt,Zt+jn,yt,Mt,We,$e):G.copyTexSubImage2D(cn,Xe,Dt,Yt,yt,Mt,We,$e);Fe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Hn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(cn,Xe,Dt,Yt,Zt,We,$e,at,en,vt,Vt.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(cn,Xe,Dt,Yt,Zt,We,$e,at,en,Vt.data):G.texSubImage3D(cn,Xe,Dt,Yt,Zt,We,$e,at,en,vt,Vt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Xe,Dt,Yt,We,$e,en,vt,Vt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Xe,Dt,Yt,Vt.width,Vt.height,en,Vt.data):G.texSubImage2D(G.TEXTURE_2D,Xe,Dt,Yt,We,$e,en,vt,Vt);G.pixelStorei(G.UNPACK_ROW_LENGTH,kt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Bn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Fa),G.pixelStorei(G.UNPACK_SKIP_ROWS,dn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$i),Xe===0&&K.generateMipmaps&&G.generateMipmap(cn),Fe.unbindTexture()},this.initRenderTarget=function(C){tt.get(C).__webglFramebuffer===void 0&&ft.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ft.setTextureCube(C,0):C.isData3DTexture?ft.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ft.setTexture2DArray(C,0):ft.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){q=0,w=0,A=null,Fe.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Jt._getUnpackColorSpace()}}class Iw{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(e.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,n){let a,o,c;const u=.5*(Math.sqrt(3)-1),f=(e+n)*u,m=Math.floor(e+f),h=Math.floor(n+f),x=(3-Math.sqrt(3))/6,g=(m+h)*x,v=m-g,y=h-g,M=e-v,E=n-y;let S,_;M>E?(S=1,_=0):(S=0,_=1);const L=M-S+x,D=E-_+x,O=M-1+2*x,F=E-1+2*x,P=m&255,B=h&255,q=this.perm[P+this.perm[B]]%12,w=this.perm[P+S+this.perm[B+_]]%12,A=this.perm[P+1+this.perm[B+1]]%12;let H=.5-M*M-E*E;H<0?a=0:(H*=H,a=H*H*this._dot(this.grad3[q],M,E));let k=.5-L*L-D*D;k<0?o=0:(k*=k,o=k*k*this._dot(this.grad3[w],L,D));let W=.5-O*O-F*F;return W<0?c=0:(W*=W,c=W*W*this._dot(this.grad3[A],O,F)),70*(a+o+c)}noise3d(e,n,a){let o,c,u,f;const h=(e+n+a)*.3333333333333333,x=Math.floor(e+h),g=Math.floor(n+h),v=Math.floor(a+h),y=1/6,M=(x+g+v)*y,E=x-M,S=g-M,_=v-M,L=e-E,D=n-S,O=a-_;let F,P,B,q,w,A;L>=D?D>=O?(F=1,P=0,B=0,q=1,w=1,A=0):L>=O?(F=1,P=0,B=0,q=1,w=0,A=1):(F=0,P=0,B=1,q=1,w=0,A=1):D<O?(F=0,P=0,B=1,q=0,w=1,A=1):L<O?(F=0,P=1,B=0,q=0,w=1,A=1):(F=0,P=1,B=0,q=1,w=1,A=0);const H=L-F+y,k=D-P+y,W=O-B+y,J=L-q+2*y,ie=D-w+2*y,I=O-A+2*y,Y=L-1+3*y,Z=D-1+3*y,pe=O-1+3*y,Me=x&255,z=g&255,ee=v&255,he=this.perm[Me+this.perm[z+this.perm[ee]]]%12,Ee=this.perm[Me+F+this.perm[z+P+this.perm[ee+B]]]%12,Be=this.perm[Me+q+this.perm[z+w+this.perm[ee+A]]]%12,te=this.perm[Me+1+this.perm[z+1+this.perm[ee+1]]]%12;let me=.6-L*L-D*D-O*O;me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[he],L,D,O));let He=.6-H*H-k*k-W*W;He<0?c=0:(He*=He,c=He*He*this._dot3(this.grad3[Ee],H,k,W));let Ge=.6-J*J-ie*ie-I*I;Ge<0?u=0:(Ge*=Ge,u=Ge*Ge*this._dot3(this.grad3[Be],J,ie,I));let qe=.6-Y*Y-Z*Z-pe*pe;return qe<0?f=0:(qe*=qe,f=qe*qe*this._dot3(this.grad3[te],Y,Z,pe)),32*(o+c+u+f)}noise4d(e,n,a,o){const c=this.grad4,u=this.simplex,f=this.perm,m=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20;let x,g,v,y,M;const E=(e+n+a+o)*m,S=Math.floor(e+E),_=Math.floor(n+E),L=Math.floor(a+E),D=Math.floor(o+E),O=(S+_+L+D)*h,F=S-O,P=_-O,B=L-O,q=D-O,w=e-F,A=n-P,H=a-B,k=o-q,W=w>A?32:0,J=w>H?16:0,ie=A>H?8:0,I=w>k?4:0,Y=A>k?2:0,Z=H>k?1:0,pe=W+J+ie+I+Y+Z,Me=u[pe][0]>=3?1:0,z=u[pe][1]>=3?1:0,ee=u[pe][2]>=3?1:0,he=u[pe][3]>=3?1:0,Ee=u[pe][0]>=2?1:0,Be=u[pe][1]>=2?1:0,te=u[pe][2]>=2?1:0,me=u[pe][3]>=2?1:0,He=u[pe][0]>=1?1:0,Ge=u[pe][1]>=1?1:0,qe=u[pe][2]>=1?1:0,Ke=u[pe][3]>=1?1:0,Te=w-Me+h,Je=A-z+h,st=H-ee+h,G=k-he+h,nt=w-Ee+2*h,rt=A-Be+2*h,it=H-te+2*h,Fe=k-me+2*h,Et=w-He+3*h,tt=A-Ge+3*h,ft=H-qe+3*h,U=k-Ke+3*h,T=w-1+4*h,$=A-1+4*h,ve=H-1+4*h,ue=k-1+4*h,se=S&255,Ye=_&255,ke=L&255,ye=D&255,Qe=f[se+f[Ye+f[ke+f[ye]]]]%32,Re=f[se+Me+f[Ye+z+f[ke+ee+f[ye+he]]]]%32,oe=f[se+Ee+f[Ye+Be+f[ke+te+f[ye+me]]]]%32,Le=f[se+He+f[Ye+Ge+f[ke+qe+f[ye+Ke]]]]%32,Ve=f[se+1+f[Ye+1+f[ke+1+f[ye+1]]]]%32;let _e=.6-w*w-A*A-H*H-k*k;_e<0?x=0:(_e*=_e,x=_e*_e*this._dot4(c[Qe],w,A,H,k));let ze=.6-Te*Te-Je*Je-st*st-G*G;ze<0?g=0:(ze*=ze,g=ze*ze*this._dot4(c[Re],Te,Je,st,G));let V=.6-nt*nt-rt*rt-it*it-Fe*Fe;V<0?v=0:(V*=V,v=V*V*this._dot4(c[oe],nt,rt,it,Fe));let Pe=.6-Et*Et-tt*tt-ft*ft-U*U;Pe<0?y=0:(Pe*=Pe,y=Pe*Pe*this._dot4(c[Le],Et,tt,ft,U));let we=.6-T*T-$*$-ve*ve-ue*ue;return we<0?M=0:(we*=we,M=we*we*this._dot4(c[Ve],T,$,ve,ue)),27*(x+g+v+y+M)}_dot(e,n,a){return e[0]*n+e[1]*a}_dot3(e,n,a,o){return e[0]*n+e[1]*a+e[2]*o}_dot4(e,n,a,o,c){return e[0]*n+e[1]*a+e[2]*o+e[3]*c}}const ll=new be;function Ni(s,e,n,a,o,c){const u=2*Math.PI*o/4,f=Math.max(c-2*o,0),m=Math.PI/4;ll.copy(e),ll[a]=0,ll.normalize();const h=.5*u/(u+f),x=1-ll.angleTo(s)/m;return Math.sign(ll[n])===1?x*h:f/(u+f)+h+h*(1-x)}class G0 extends oo{constructor(e=1,n=1,a=1,o=2,c=.1){const u=o*2+1;if(c=Math.min(e/2,n/2,a/2,c),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:a,segments:o,radius:c},u===1)return;const f=this.toNonIndexed();this.index=null,this.attributes.position=f.attributes.position,this.attributes.normal=f.attributes.normal,this.attributes.uv=f.attributes.uv;const m=new be,h=new be,x=new be(e,n,a).divideScalar(2).subScalar(c),g=this.attributes.position.array,v=this.attributes.normal.array,y=this.attributes.uv.array,M=g.length/6,E=new be,S=.5/u;for(let _=0,L=0;_<g.length;_+=3,L+=2)switch(m.fromArray(g,_),h.copy(m),h.x-=Math.sign(h.x)*S,h.y-=Math.sign(h.y)*S,h.z-=Math.sign(h.z)*S,h.normalize(),g[_+0]=x.x*Math.sign(m.x)+h.x*c,g[_+1]=x.y*Math.sign(m.y)+h.y*c,g[_+2]=x.z*Math.sign(m.z)+h.z*c,v[_+0]=h.x,v[_+1]=h.y,v[_+2]=h.z,Math.floor(_/M)){case 0:E.set(1,0,0),y[L+0]=Ni(E,h,"z","y",c,a),y[L+1]=1-Ni(E,h,"y","z",c,n);break;case 1:E.set(-1,0,0),y[L+0]=1-Ni(E,h,"z","y",c,a),y[L+1]=1-Ni(E,h,"y","z",c,n);break;case 2:E.set(0,1,0),y[L+0]=1-Ni(E,h,"x","z",c,e),y[L+1]=Ni(E,h,"z","x",c,a);break;case 3:E.set(0,-1,0),y[L+0]=1-Ni(E,h,"x","z",c,e),y[L+1]=1-Ni(E,h,"z","x",c,a);break;case 4:E.set(0,0,1),y[L+0]=1-Ni(E,h,"x","y",c,e),y[L+1]=1-Ni(E,h,"y","x",c,n);break;case 5:E.set(0,0,-1),y[L+0]=Ni(E,h,"x","y",c,e),y[L+1]=1-Ni(E,h,"y","x",c,n);break}}static fromJSON(e){return new G0(e.width,e.height,e.depth,e.segments,e.radius)}}const ay="/assets/rabbit_right_idle-DF0903mH.webp",ry="/assets/rabbit_right_up-BOxRqdlp.webp",sy="/assets/rabbit_right_down-XcTMHo7l.webp",oy="/assets/rabbit_left_idle-CrNwdQhp.webp",ly="/assets/rabbit_left_up-DpitIzTi.webp",cy="/assets/rabbit_left_down-2ciY_fXn.webp",qv={pink:{bgTop:"#FFF2F4",bgBottom:"#FFE5E8",cubeBottom:[.953,.38,.435],cubeTop:[1,.898,.91]},purple:{bgTop:"#EFEFF7",bgBottom:"#CFD1F3",cubeBottom:[.396,.431,.898],cubeTop:[.933,.937,1]},green:{bgTop:"#ECF3EC",bgBottom:"#D1ECD0",cubeBottom:[.345,.741,.325],cubeTop:[.867,.965,.863]}},zw=8,pu=9,Vr=1.2,Fw=[.75,.75,1],Bw=[1,.8,.88],Hw=3.5,Gw=[".........","..*...*..",".*.*.*.*.",".*..*..*.",".*.....*.","..*...*..","...*.*...","....*....","........."],Vw=new Set(Gw.flatMap((s,e)=>s.split("").map((n,a)=>n==="*"?e*pu+a:-1)).filter(s=>s>=0)),kw=6,w0=2,Eh=w0/2*.75,jw=6,Ml=120,Xw=.985,Ww=.015,Yw=.05,qw=.18,Zw=Yw*Ml,Kw=qw*Ml,Qw=Ww*Ml*Ml,Jw=Math.log(Xw)*Ml,$w=60,Zv=1/30,eR=15,tR=2,nR=(s,e,n,a,o,c)=>{const u=new G0(s,e,n,a,o),f=u.attributes.position;for(let m=0;m<f.count;m++){const x=(f.getY(m)+e/2)/e,g=1-(1-c)*x;f.setX(m,f.getX(m)*g),f.setZ(m,f.getZ(m)*g)}return f.needsUpdate=!0,u.computeVertexNormals(),u},Kv=`
  varying float vWorldY;
  varying vec3 vWorldNormal;
  
  void main() {
    // Calculate world position
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldY = worldPosition.y;
    
    // Transform normal to world space
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    
    // Standard vertex transformation
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Qv=`
  uniform vec3 colorBottom;
  uniform vec3 colorTop;
  uniform float maxHeight;
  
  varying float vWorldY;
  varying vec3 vWorldNormal;
  
  // Linear to sRGB conversion (for output)
  vec3 linearToSRGB(vec3 linear) {
    return pow(linear, vec3(1.0/2.2));
  }
  
  void main() {
    // Map world Y (0 to maxHeight) to color gradient
    float t = clamp(vWorldY / maxHeight, 0.0, 1.0);
    
    // Use smooth interpolation for nicer gradient
    float smoothT = t * t * (3.0 - 2.0 * t);
    
    // Interpolate between bottom (saturated blue) and top (blue-tinted white) colors
    vec3 baseColor = mix(colorBottom, colorTop, smoothT);
    
    // === FACE-BASED LIGHTING ===
    // Simulates a light source from above-right
    // Top face (normal.y close to 1): +15% brightness
    // Right side (normal.x close to 1): +5% brightness
    // Left side (normal.x close to -1): base brightness
    
    float topFactor = smoothstep(0.5, 1.0, vWorldNormal.y);
    float rightFactor = smoothstep(0.5, 1.0, vWorldNormal.x);
    
    // Brightness multiplier: 
    // - Left side = 1.0 (base)
    // - Right side = 1.05 (+5%)
    // - Top face = 1.15 (+15%)
    float brightness = 1.0 + topFactor * 0.15 + rightFactor * 0.05;
    
    vec3 color = baseColor * brightness;
    
    // Clamp to prevent over-bright
    color = min(color, vec3(1.0));
    
    // Apply gamma correction for proper brightness in sRGB display
    color = linearToSRGB(color);
    
    gl_FragColor = vec4(color, 1.0);
  }
`,iR=({analyser:s,isPlaying:e,params:n,colorTheme:a,uiBottomInsetPx:o})=>{const c=ae.useRef(null),u=ae.useRef(null),f=ae.useRef(null),m=ae.useRef(null),h=ae.useRef([]),x=ae.useRef(null),g=ae.useRef(null),v=ae.useRef(null),y=ae.useRef(a),M=ae.useRef([]),E=ae.useRef(new Uint8Array(128)),S=ae.useRef(new Float32Array(pu*pu).fill(1)),_=ae.useRef(null),L=ae.useRef(new Iw),D=ae.useRef(0),O=ae.useRef(0),F=n.showHearts?pu:zw,P=(q,w)=>{const A=new Set;for(const H of q)H!==w&&(A.add(H.cubeIndex),H.isJumping&&H.targetCubeIndex!==H.cubeIndex&&A.add(H.targetCubeIndex));return A},B=(q,w,A)=>{const H=Math.floor(q/F),k=q%F,W=[];for(let J=-w;J<=w;J++)for(let ie=-w;ie<=w;ie++){if(J===0&&ie===0||Math.abs(J)+Math.abs(ie)>w)continue;const I=H+J,Y=k+ie;if(I>=0&&I<F&&Y>=0&&Y<F){const Z=I*F+Y;A.has(Z)||W.push(Z)}}return W};return ae.useEffect(()=>{if(!c.current)return;const q=c.current,w=new U3;u.current=w;const A=qv[y.current],H=document.createElement("canvas");H.width=2,H.height=512;const k=H.getContext("2d"),W=k.createLinearGradient(0,0,0,512);W.addColorStop(0,A.bgTop),W.addColorStop(1,A.bgBottom),k.fillStyle=W,k.fillRect(0,0,2,512);const J=new H3(H);v.current=J,w.background=J;const ie=new Xt(A.bgBottom);w.fog=new bu(ie,12,45);const I=new Li(45,q.clientWidth/q.clientHeight,.1,1e3);I.position.set(12,12,12),I.lookAt(0,1,0),f.current=I;const Y=new Pw({antialias:!0,alpha:!1});Y.setSize(q.clientWidth,q.clientHeight),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.toneMapping=Na,Y.outputColorSpace=yi,q.appendChild(Y.domElement),m.current=Y;const Z=nR(1,1,1,4,.1,.82);Z.translate(0,.5,0);const pe=new ji({vertexShader:Kv,fragmentShader:Qv,uniforms:{colorBottom:{value:new Xt(...A.cubeBottom)},colorTop:{value:new Xt(...A.cubeTop)},maxHeight:{value:kw}}});x.current=pe;const Me=new ji({vertexShader:Kv,fragmentShader:Qv,uniforms:{colorBottom:{value:new Xt(...Fw)},colorTop:{value:new Xt(...Bw)},maxHeight:{value:Hw}}});g.current=Me;const z=[],ee=(F-1)*Vr/2,he=F*F;S.current=new Float32Array(he).fill(1);for(let it=0;it<he;it++){const Fe=Math.floor(it/F),tt=it%F*Vr-ee,ft=Fe*Vr-ee,U=n.showHearts&&Vw.has(it),T=new Ia(Z,U?Me:pe);T.position.set(tt,0,ft),T.scale.set(1,1,1),w.add(T),z.push(T)}h.current=z;const Ee=new W3,Be=Ee.load(ay),te=Ee.load(ry),me=Ee.load(sy),He=Ee.load(oy),Ge=Ee.load(ly),qe=Ee.load(cy),Ke=4,Je=Ke+4,st=[],G=new Set;for(let it=0;it<Je;it++){let Fe;do Fe=Math.floor(Math.random()*he);while(G.has(Fe));G.add(Fe);const Et=it>=Ke,tt=Et?He:Be,ft=Et?Ge:te,U=Et?qe:me,T=new q_({map:tt}),$=new P3(T);$.scale.set(w0,w0,1);const ve=z[Fe];$.position.set(ve.position.x,ve.scale.y+Eh,ve.position.z),w.add($),st.push({sprite:$,cubeIndex:Fe,targetCubeIndex:Fe,velocityY:0,isJumping:!1,startX:ve.position.x,startZ:ve.position.z,hopProgress:1,textures:{idle:tt,up:ft,down:U}})}M.current=st;const nt=()=>{if(!q||!I||!Y)return;const it=q.clientWidth,Fe=q.clientHeight;I.aspect=it/Fe,I.updateProjectionMatrix(),Y.setSize(it,Fe)},rt=new ResizeObserver(nt);return rt.observe(q),()=>{rt.disconnect(),_.current&&cancelAnimationFrame(_.current),q&&Y.domElement&&q.removeChild(Y.domElement),Y.dispose(),Z.dispose(),pe.dispose(),Me.dispose()}},[F]),ae.useEffect(()=>{if(y.current=a,!u.current||!x.current||!v.current)return;const q=qv[a],w=u.current,A=x.current,H=v.current,k=document.createElement("canvas");k.width=2,k.height=512;const W=k.getContext("2d"),J=W.createLinearGradient(0,0,0,512);J.addColorStop(0,q.bgTop),J.addColorStop(1,q.bgBottom),W.fillStyle=J,W.fillRect(0,0,2,512),H.image=k,H.needsUpdate=!0,w.fog instanceof bu&&w.fog.color.set(q.bgBottom),A.uniforms.colorBottom.value.setRGB(...q.cubeBottom),A.uniforms.colorTop.value.setRGB(...q.cubeTop)},[a]),ae.useEffect(()=>{D.current=o??0},[o]),ae.useEffect(()=>{if(h.current.length===0||!m.current||!u.current||!f.current)return;s&&(E.current=new Uint8Array(s.frequencyBinCount));const q=u.current,w=f.current,A=m.current,H=h.current,k=L.current,W=c.current,J=(F-1)*Vr/2,ie=Math.sqrt(J*J+J*J);let I=performance.now(),Y=0;const Z=()=>{I=performance.now()},pe=()=>{document.hidden||Z()};document.addEventListener("visibilitychange",pe);const Me=()=>{_.current=requestAnimationFrame(Me);const z=performance.now();let ee=(z-I)/1e3;I=z,(!Number.isFinite(ee)||ee<0)&&(ee=0),ee>Zv&&(ee=Zv);const he=ee*$w;if(Y+=ee,W){const Ge=Math.max(0,D.current),qe=Math.max(1,W.clientHeight),Ke=Pr.clamp(Ge/qe,0,.5),Te=Pr.clamp(Ke*6,0,2.5),Je=1-Math.pow(1-.12,he);O.current=Pr.lerp(O.current,Te,Je),w.lookAt(0,1-O.current,0)}s&&e&&s.getByteFrequencyData(E.current);const Ee=E.current,Be=H.length;S.current.length!==Be&&(S.current=new Float32Array(Be).fill(1));const te=Y*.5,me=F%2===1,He=Math.floor(F/2);for(let Ge=0;Ge<Be;Ge++){const qe=H[Ge],Ke=Math.floor(Ge/F),Te=Ge%F,Je=Te*Vr-J,st=Ke*Vr-J,G=Math.sqrt(Je*Je+st*st),it=(me&&Ke===He&&Te===He?Vr*.9:G)/ie,Fe=1/Math.max(.1,n.spread),Et=Math.floor(Math.pow(it,Fe)*Ee.length*.4);let tt=0;if(e&&s&&Ee.length>0){const Qe=Math.min(Et,Ee.length-1),Re=Ee[Qe]/255;tt=Math.pow(Re,2.5)}else tt=(Math.sin(G*.5-te*2)+1)*.05;const ft=(k.noise3d(Je*.2,st*.2,te*.5)+1)*.5,U=tt*(.4+.6*ft),$=.3+ft*.4+U*n.height*10,ve=S.current[Ge],ue=Pr.clamp(n.damping,0,1),se=1-Math.pow(1-ue,he),Ye=Pr.lerp(ve,$,se);S.current[Ge]=Ye;const ke=qe.scale.y;qe.scale.y=Ye;const ye=M.current.find(Qe=>Qe.cubeIndex===Ge);if(ye){ye.sprite.visible=n.showRabbits;const Re=Ye+Eh,oe=ee,Le=Ye-ke,Ve=oe>0?Le/oe:0;if(!e)ye.isJumping=!1,ye.velocityY=0,ye.sprite.position.x=qe.position.x,ye.sprite.position.y=Re,ye.sprite.position.z=qe.position.z,ye.sprite.material.map=ye.textures.idle;else{if(Ve>Zw&&!ye.isJumping&&(ye.velocityY=Ve+Kw,ye.isJumping=!0,ye.targetCubeIndex=ye.cubeIndex,ye.velocityY>eR)){const _e=P(M.current,ye),ze=B(ye.cubeIndex,tR,_e);ze.length>0&&(ye.startX=ye.sprite.position.x,ye.startZ=ye.sprite.position.z,ye.targetCubeIndex=ze[Math.floor(Math.random()*ze.length)],ye.hopProgress=0)}if(ye.isJumping){if(ye.velocityY*=Math.exp(Jw*oe),ye.velocityY-=Qw*oe,ye.sprite.position.y+=ye.velocityY*oe,ye.hopProgress<1&&ye.targetCubeIndex!==ye.cubeIndex){ye.hopProgress=Math.min(1,ye.hopProgress+oe*2.5);const V=ye.hopProgress,Pe=V<.5?2*V*V:1-Math.pow(-2*V+2,2)/2,we=H[ye.targetCubeIndex];ye.sprite.position.x=Pr.lerp(ye.startX,we.position.x,Pe),ye.sprite.position.z=Pr.lerp(ye.startZ,we.position.z,Pe)}ye.velocityY>0?ye.sprite.material.map=ye.textures.up:ye.sprite.material.map=ye.textures.down;const ze=H[ye.targetCubeIndex].scale.y+Eh;ye.velocityY<0&&ye.sprite.position.y<=ze&&(M.current.some(Pe=>Pe!==ye&&!Pe.isJumping&&Pe.cubeIndex===ye.targetCubeIndex)?(ye.targetCubeIndex=ye.cubeIndex,ye.velocityY=3):(ye.cubeIndex=ye.targetCubeIndex,ye.sprite.position.y=ze,ye.hopProgress=1,ye.velocityY=0,ye.isJumping=!1,ye.sprite.material.map=ye.textures.idle))}else ye.velocityY=0,ye.sprite.position.y=Re,ye.sprite.material.map=ye.textures.idle,ye.sprite.position.x=qe.position.x,ye.sprite.position.z=qe.position.z;ye.sprite.position.y>Re+jw&&(ye.sprite.position.y=Re,ye.velocityY=0,ye.isJumping=!1,ye.targetCubeIndex=ye.cubeIndex,ye.hopProgress=1,ye.sprite.material.map=ye.textures.idle)}}}A.render(q,w)};return Me(),()=>{_.current&&cancelAnimationFrame(_.current),document.removeEventListener("visibilitychange",pe)}},[s,e,n]),N.jsx("div",{ref:c,className:"w-full h-full"})},aR={height:.9,spread:1.5,damping:.25,showRabbits:!0,showHearts:!0},rR=({params:s,onChange:e,isUIHidden:n})=>{const[a,o]=Nn.useState(!1),{t:c}=vr(),u=()=>{e(aR)},f=(x,g)=>{e({...s,[x]:g})},m=()=>{e({...s,showRabbits:!s.showRabbits})},h=()=>{e({...s,showHearts:!s.showHearts})};return n?null:a?N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"fixed inset-0 z-[19] bg-transparent",onClick:()=>o(!1)}),N.jsxs("div",{className:"absolute top-[70px] right-6 z-20 w-64 bg-black/5 backdrop-blur-xl rounded-2xl p-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[N.jsxs("div",{className:"flex items-center justify-between mb-6",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("h3",{className:"text-sm font-bold text-black/50 uppercase tracking-wider font-sans",children:c("controls.cubes_title")}),N.jsx("button",{onClick:u,className:"text-gray-400 hover:text-gray-500 transition-colors",title:c("ui.reset"),children:N.jsx(Eu,{className:"w-4 h-4"})})]}),N.jsx("button",{onClick:()=>o(!1),className:"text-gray-400 hover:text-gray-500 transition-colors",children:N.jsx(Qr,{className:"w-5 h-5"})})]}),N.jsxs("div",{className:"space-y-6",children:[N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-black/40",children:[N.jsx("span",{children:c("controls.bounce_height")}),N.jsx("span",{className:"text-black/50",children:s.height.toFixed(1)})]}),N.jsx("input",{type:"range",min:"0.5",max:"5",step:"0.1",value:s.height,onChange:x=>f("height",parseFloat(x.target.value)),className:"w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black/40"})]}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-black/40",children:[N.jsx("span",{children:c("controls.damping")}),N.jsx("span",{className:"text-black/50",children:s.damping.toFixed(2)})]}),N.jsx("input",{type:"range",min:"0.05",max:"0.5",step:"0.01",value:s.damping,onChange:x=>f("damping",parseFloat(x.target.value)),className:"w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black/40"})]}),N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{className:"text-xs font-medium text-black/40",children:c("controls.show_rabbits")}),N.jsx("button",{onClick:m,className:`relative w-10 h-5 rounded-full transition-colors duration-200 ${s.showRabbits?"bg-black/40":"bg-black/15"}`,children:N.jsx("span",{className:`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${s.showRabbits?"translate-x-5":"translate-x-0"}`})})]}),N.jsxs("div",{className:"flex items-center justify-between",children:[N.jsx("span",{className:"text-xs font-medium text-black/40",children:c("controls.show_heart")}),N.jsx("button",{onClick:h,className:`relative w-10 h-5 rounded-full transition-colors duration-200 ${s.showHearts?"bg-black/40":"bg-black/15"}`,children:N.jsx("span",{className:`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${s.showHearts?"translate-x-5":"translate-x-0"}`})})]}),N.jsx(wu,{})]})]})]}):N.jsx("button",{onClick:()=>o(!0),className:"absolute top-[70px] right-6 z-20 bg-black/5 backdrop-blur-md p-2 rounded-full transition-all text-gray-400 hover:text-gray-500 hover:bg-black/10",children:N.jsx(Tu,{className:"w-[20px] h-[20px]"})})},uy={vinylSpeed:1,rabbitSpeed:1},sR=({params:s,onChange:e,isUIHidden:n})=>{const[a,o]=Nn.useState(!1),{t:c}=vr(),u=()=>{e(uy)},f=(m,h)=>{e({...s,[m]:h})};return n?null:a?N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"fixed inset-0 z-[19] bg-transparent",onClick:()=>o(!1)}),N.jsxs("div",{className:"absolute top-[70px] right-6 z-20 w-64 bg-black/5 backdrop-blur-xl rounded-2xl p-5 animate-in fade-in slide-in-from-right-4 duration-300",children:[N.jsxs("div",{className:"flex items-center justify-between mb-6",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("h3",{className:"text-sm font-bold text-black/50 uppercase tracking-wider font-sans",children:c("controls.vinyl_title")}),N.jsx("button",{onClick:u,className:"text-gray-400 hover:text-gray-500 transition-colors",title:c("ui.reset"),children:N.jsx(Eu,{className:"w-4 h-4"})})]}),N.jsx("button",{onClick:()=>o(!1),className:"text-gray-400 hover:text-gray-500 transition-colors",children:N.jsx(Qr,{className:"w-5 h-5"})})]}),N.jsxs("div",{className:"space-y-6",children:[N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-black/40",children:[N.jsx("span",{children:c("controls.vinyl_speed")}),N.jsxs("span",{className:"text-black/50",children:[s.vinylSpeed.toFixed(1),"x"]})]}),N.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.1",value:s.vinylSpeed,onChange:m=>f("vinylSpeed",parseFloat(m.target.value)),className:"w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black/40"})]}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-black/40",children:[N.jsx("span",{children:c("controls.rabbit_speed")}),N.jsxs("span",{className:"text-black/50",children:[s.rabbitSpeed.toFixed(1),"x"]})]}),N.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.1",value:s.rabbitSpeed,onChange:m=>f("rabbitSpeed",parseFloat(m.target.value)),className:"w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black/40"})]}),N.jsx(wu,{})]})]})]}):N.jsx("button",{onClick:()=>o(!0),className:"absolute top-[70px] right-6 z-20 bg-black/5 backdrop-blur-md p-2 rounded-full transition-all text-gray-400 hover:text-gray-500 hover:bg-black/10",children:N.jsx(Tu,{className:"w-[20px] h-[20px]"})})},oR="/assets/blue1-D1u2Z049.webp",lR="/assets/blue2-CKkN-Z5_.webp",cR="/assets/blue3-B2m4gvFn.webp",uR="/assets/blue4-CPYZi0Dd.webp",fR="/assets/blue5-qLdk5TOt.webp",dR="/assets/pink1-Chq9-D0b.webp",hR="/assets/pink2-DtM3S5we.webp",pR="/assets/pink3-C4KZVAWU.webp",mR="/assets/pink4-Dx7Rlq0c.webp",gR="/assets/pink5-BaApiMma.webp",xR="/assets/green1-B_QTU5oD.webp",vR="/assets/green2-Xcxs--AI.webp",_R="/assets/green3-CWfRHF9_.webp",yR="/assets/green4-CyrCEIz5.webp",bR="/assets/green5-06zlY0a6.webp",SR="/assets/yellow1-BT_GX0oo.webp",MR="/assets/yellow2-4QxaKfk9.webp",ER="/assets/yellow3-DxghXuPD.webp",TR="/assets/yellow4-uWu5mJgu.webp",AR="/assets/yellow5-BjHg1QEb.webp",wR="/assets/purple1-9nf7kIan.webp",RR="/assets/purple2-DN0sYXhz.webp",CR="/assets/purple3-DwEBxOlY.webp",DR="/assets/purple4-CpF46QWc.webp",NR="/assets/purple5-Dx6CHyrK.webp",LR="/assets/gingerman1-C_X6TYrq.webp",UR="/assets/gingerman2-huLUuD7G.webp",OR="/assets/gingerman3-Dr41h5oK.webp",PR="/assets/gingerman4-Dr4xr1t5.webp",IR="/assets/gingerman5-SCbRrPyZ.webp",zR="/assets/gingerman6-DTv5dnOk.webp",FR="/assets/gingerman7-CXvGRkat.webp",BR="/assets/rabbit1-CYSuzl1i.webp",HR="/assets/rabbit2-Ccp3SGeL.webp",GR="/assets/rabbit3-Cvm05xTr.webp",VR="/assets/rabbit4-DQde3D7j.webp",kR="/assets/rabbit5-BtmovHwU.webp",jR="/assets/rabbit6--5FMhTUf.webp",XR="/assets/deer1-Cd9u--ZS.webp",WR="/assets/deer2-D8cIlCEI.webp",YR="/assets/deer3-DJay5npW.webp",qR="/assets/deer4-B3WojhVI.webp",ZR="/assets/deer5-Bp80q8J-.webp",KR="/assets/deer6-g3W-S1m7.webp",QR="/assets/bottom1-BWyFYund.webp",JR="/assets/bottom1-BWyFYund.webp",$R="/assets/bottom3-Cbja2cnB.webp",eC="/assets/middle1-xmxZYQzq.webp",tC="/assets/middle2-D-YiqMrN.webp",nC="/assets/middle3-B5iMqTgL.webp",iC="/assets/top-UuQxetsB.webp",Jv=[QR,JR,$R],$v=[eC,tC,nC],e_=[iC],aC=.8,rC=1.5,sC=2,Th=[LR,UR,OR,PR,IR,zR,FR],t_=20,oC=.455,Ah=[BR,HR,GR,VR,kR,jR],n_=15,lC=.875,wh=[XR,WR,YR,qR,ZR,KR],i_=15,cC=.65,a_=12,r_=120,s_=1/30,Ea=[{name:"blue",frames:[oR,lR,cR,uR,fR],isAnimated:!0,trailColor:"#8AAEE0",freqStart:40,freqEnd:200,extraBoost:1.5,baseX:.38,baseY:.1},{name:"green",frames:[xR,vR,_R,yR,bR],isAnimated:!0,trailColor:"#A2E48E",freqStart:1e3,freqEnd:4e3,extraBoost:1,baseX:.63,baseY:.1},{name:"pink",frames:[dR,hR,pR,mR,gR],isAnimated:!0,trailColor:"#D782B7",freqStart:200,freqEnd:1500,extraBoost:1,baseX:.505,baseY:.25},{name:"yellow",frames:[SR,MR,ER,TR,AR],isAnimated:!0,trailColor:"#F6C263",freqStart:80,freqEnd:400,extraBoost:1.5,baseX:.38,baseY:.4},{name:"purple",frames:[wR,RR,CR,DR,NR],isAnimated:!0,trailColor:"#A67EDE",freqStart:3e3,freqEnd:12e3,extraBoost:1.2,baseX:.63,baseY:.4}],uC="#65CCF1",fC=.003,dC=.001,hC=3,pC=.85,mC=.015,cl=80,Rh=35,gC=120,xC=.2,vC=80,o_=["rgba(255, 255, 255, 0.9)","rgba(220, 235, 255, 0.8)","rgba(200, 220, 255, 0.7)","rgba(180, 200, 240, 0.6)"],l_=[2,3,4,5],Ch={min:.5,max:2},Dh={min:-.3,max:.3},_C=.5,yC=3,lu=[12,14,16,18,20],c_=1.2,bC=({analyser:s,isPlaying:e,params:n,lyricLine:a,songInfo:o})=>{const c=ae.useRef(null),u=ae.useRef(0),f=ae.useRef([]),m=ae.useRef(!1),h=ae.useRef(Ea.map(()=>0)),x=ae.useRef(0),g=ae.useRef([]),v=ae.useRef([]),y=ae.useRef([]),M=ae.useRef(!1),E=ae.useRef([]),S=ae.useRef(!1),_=ae.useRef(0),L=ae.useRef(0);ae.useRef(0);const D=ae.useRef([]),O=ae.useRef(!1),F=ae.useRef(0),P=ae.useRef(0),B=ae.useRef([]),q=ae.useRef(!1),w=ae.useRef(0),A=ae.useRef(0),H=ae.useRef(0),k=ae.useRef(0),W=ae.useRef(0),J=ae.useRef(0),ie=ae.useRef([]),I=ae.useRef(!1),Y=ae.useRef([]),Z=ae.useRef(!1),pe=ae.useRef([0,0,0,0,0]),Me=ae.useRef([0,0,0,0,0]),z=ae.useRef([0,0,0,0,0]),ee=ae.useRef(null),he=ae.useRef(0),Ee=ae.useRef(""),Be=ae.useRef(""),te=ae.useRef(null),me=ae.useRef({currentLyric:"",nextLyric:null,phase:"idle",alpha:1}),He=ae.useRef("");ae.useEffect(()=>{Ee.current=(a??"").trim()},[a]),ae.useEffect(()=>{Be.current=(o??"").trim()},[o]),ae.useEffect(()=>{const Ke=[];let Te=0,Je=0;Ea.forEach(G=>{Te+=G.frames.length});const st=()=>{Je++,Je===Te&&(m.current=!0)};Ea.forEach((G,nt)=>{Ke[nt]=[],G.frames.forEach((rt,it)=>{const Fe=new Image;Fe.src=rt,Fe.onload=st,Ke[nt][it]=Fe})}),f.current=Ke},[]),ae.useEffect(()=>{let Ke=Jv.length+$v.length+e_.length,Te=0;const Je=()=>{Te++,Te===Ke&&(M.current=!0)},st=[];Jv.forEach((rt,it)=>{const Fe=new Image;Fe.src=rt,Fe.onload=Je,st[it]=Fe}),g.current=st;const G=[];$v.forEach((rt,it)=>{const Fe=new Image;Fe.src=rt,Fe.onload=Je,G[it]=Fe}),v.current=G;const nt=[];e_.forEach((rt,it)=>{const Fe=new Image;Fe.src=rt,Fe.onload=Je,nt[it]=Fe}),y.current=nt},[]),ae.useEffect(()=>{let Ke=0;const Te=[];Th.forEach((Je,st)=>{const G=new Image;G.src=Je,G.onload=()=>{Ke++,Ke===Th.length&&(S.current=!0)},Te[st]=G}),E.current=Te},[]),ae.useEffect(()=>{let Ke=0;const Te=[];Ah.forEach((Je,st)=>{const G=new Image;G.src=Je,G.onload=()=>{Ke++,Ke===Ah.length&&(O.current=!0)},Te[st]=G}),D.current=Te},[]),ae.useEffect(()=>{let Ke=0;const Te=[];wh.forEach((Je,st)=>{const G=new Image;G.src=Je,G.onload=()=>{if(Ke++,Ke===wh.length){q.current=!0;let nt=0;for(const rt of Te){const it=rt.height>0?rt.width/rt.height:0;it>nt&&(nt=it)}H.current=nt}},Te[st]=G}),B.current=Te},[]);const Ge=ae.useCallback((Ke,Te,Je)=>{const st=Te/Je;return Math.floor(Ke/st)},[]),qe=ae.useCallback((Ke,Te,Je,st,G)=>{const nt=Ge(Te,st,G),rt=Math.min(Ge(Je,st,G),Ke.length-1);if(nt>=rt)return 0;let it=0;for(let Fe=nt;Fe<=rt;Fe++)it+=Ke[Fe];return it/(rt-nt+1)/255},[Ge]);return ae.useEffect(()=>{var ft;const Ke=c.current;if(!Ke)return;const Te=Ke.getContext("2d");if(!Te)return;const Je=()=>{const U=window.devicePixelRatio||1,T=Ke.getBoundingClientRect();Ke.width=T.width*U,Ke.height=T.height*U,Te.setTransform(U,0,0,U,0,0)};Je(),window.addEventListener("resize",Je);const st=((ft=s==null?void 0:s.context)==null?void 0:ft.sampleRate)||44100,G=(s==null?void 0:s.fftSize)||2048;let nt=performance.now(),rt=0;const it=()=>{nt=performance.now()},Fe=()=>{document.hidden||it()};document.addEventListener("visibilitychange",Fe);const Et=(U,T,$,ve,ue)=>{if(U.length===0||!U[0].complete)return;const Ye=U.map(Re=>Re.width/Re.height).map(Re=>Re*ve),ke=Ye.reduce((Re,oe)=>Re+oe,0);let Qe=-(T%ke);for(;Qe<ue;)for(let Re=0;Re<U.length;Re++){const oe=U[Re],Le=Ye[Re];if(Qe+Le>0&&Qe<ue){const Ve=Math.floor(Qe),_e=Math.floor($),ze=Math.ceil(Le)+1,V=Math.ceil(ve);Te.drawImage(oe,Ve,_e,ze,V)}if(Qe+=Le,Qe>=ue)break}},tt=()=>{u.current=requestAnimationFrame(tt);const U=performance.now();let T=(U-nt)/1e3;nt=U,(!Number.isFinite(T)||T<0)&&(T=0),T>s_&&(T=s_);const $=T*r_;rt+=T,he.current+=$;const ve=Ke.getBoundingClientRect(),ue=ve.width,se=ve.height;if(e){const oe=n.sceneSpeed||1;k.current+=aC*oe*$,W.current+=rC*oe*$,J.current+=sC*oe*$}Te.clearRect(0,0,ue,se);const Ye=()=>{const oe=Ee.current,Le=Be.current,Ve=oe.length>0?oe:He.current;Ve.length>0&&(He.current=Ve);const _e=me.current,ze=He.current;ze&&ze!==_e.currentLyric&&ze!==_e.nextLyric&&(_e.nextLyric=ze,_e.phase="fadeOut",_e.alpha=Math.min(1,Math.max(0,_e.alpha)));const V=.04;_e.phase==="fadeOut"?(_e.alpha=Math.max(0,_e.alpha-V*$),_e.alpha<=.01&&(_e.nextLyric&&(_e.currentLyric=_e.nextLyric),_e.nextLyric=null,_e.phase="fadeIn")):_e.phase==="fadeIn"?(_e.alpha=Math.min(1,_e.alpha+V*$),_e.alpha>=.99&&(_e.alpha=1,_e.phase="idle")):(_e.alpha=1,!_e.currentLyric&&ze&&(_e.currentLyric=ze));const Pe=ue*.5,we=se*.63,Ie=rt,Ne=Math.cos(Ie*.3)*12,Ae=Math.sin(Ie*.5)*12+Math.sin(Ie*1.2)*4,je=Math.cos(Ie*.35+2)*10,ct=Math.sin(Ie*.55+1.5)*10+Math.sin(Ie*1.3)*3,ut=ue<768,mt=ue>=768&&ue<1024,Gt=ut?20:mt?26:34,gt=ut?12:mt?14:18,Fn=ut?500:600,Un=ut?400:500;Te.save(),Te.textAlign="center",Te.textBaseline="middle",Te.shadowColor="rgba(0,0,0,0.25)",Te.shadowBlur=6,Te.shadowOffsetX=0,Te.shadowOffsetY=2;const bn=.4*_e.alpha;if(_e.currentLyric)if(Te.font=`${Fn} ${Gt}px Inter, system-ui, -apple-system, Segoe UI, sans-serif`,Te.fillStyle=`rgba(255,255,255,${bn})`,ut){const j=Math.max(80,ue-48),xe=2,De=Math.round(Gt*1.2),Ze=Pt=>Te.measureText(Pt).width,lt=Pt=>{if(Ze(Pt)<=j)return Pt;let gn=Pt;for(;gn.length>0&&Ze(gn+"…")>j;)gn=gn.slice(0,-1);return gn.length>0?gn+"…":"…"},xt=Pt=>{const fn=(Pt??"").trim();if(!fn)return[];const gn=/\s/.test(fn),Tn=gn?fn.split(/\s+/):Array.from(fn),C=gn?" ":"",K=[];let ce="";const le=()=>{ce&&K.push(ce),ce=""};for(const ne of Tn){const Xe=ce?ce+C+ne:ne;if(Ze(Xe)<=j){ce=Xe;continue}if(ce){if(le(),K.length>=xe)break;if(Ze(ne)<=j){ce=ne;continue}}let We="";for(const $e of Array.from(ne)){const at=We+$e;if(Ze(at)<=j)We=at;else if(We){if(ce=We,le(),K.length>=xe){We="";break}We=$e}else if(ce=$e,le(),K.length>=xe){We="";break}}if(K.length>=xe)break;We&&(ce=We)}return K.length<xe&&ce&&le(),K.length>xe?K.slice(0,xe):(K.length===xe&&(K[xe-1]=lt(K[xe-1])),K)},bt=te.current;let Ut;bt&&bt.text===_e.currentLyric&&bt.width===j?Ut=bt.lines:(Ut=xt(_e.currentLyric),te.current={text:_e.currentLyric,width:j,lines:Ut});const qt=Pe+Ne,_t=we+Ae;for(let Pt=0;Pt<Ut.length;Pt++)Te.fillText(Ut[Pt],qt,_t+Pt*De,j);Ye._lyricLines=Math.max(1,Ut.length),Ye._lyricLineHeight=De,Ye._lyricMaxWidth=j}else Te.fillText(_e.currentLyric,Pe+Ne,we+Ae);if(Le){Te.font=`${Un} ${gt}px Inter, system-ui, -apple-system, Segoe UI, sans-serif`,Te.fillStyle="rgba(255,255,255,0.20)";const Tt=ut?Number(Ye._lyricLines??1):1,j=ut?Number(Ye._lyricLineHeight??Math.round(Gt*1.2)):0,xe=ut?Number(Ye._lyricMaxWidth??ue-48):void 0,De=we+Ae+(ut?(Tt-1)*j:0),Ze=we+ct+(ut?(Tt-1)*j:0)+Math.round(Gt*1.25),lt=De+Gt*.9,xt=Math.max(Ze,lt);ut&&typeof xe=="number"&&xe>0?Te.fillText(Le,Pe+je,xt,xe):Te.fillText(Le,Pe+je,xt)}Te.restore()};if(M.current){if(Et(g.current,k.current,0,se,ue),S.current&&E.current.length>0&&g.current.length>=3){for(L.current+=$;L.current>=t_;)L.current-=t_,_.current=(_.current+1)%Th.length;const ze=E.current[_.current],V=se*oC,Pe=ze.width/ze.height,we=V*Pe,Ie=g.current[0].width/g.current[0].height*se,Ne=g.current[1].width/g.current[1].height*se,Ae=g.current[2].width/g.current[2].height*se,je=Ie+Ne+Ae,ct=Ie+Ne,ut=Ae*.3,mt=ct+ut,Gt=k.current%je;let gt=mt-Gt;if(gt<-we&&(gt+=je),gt>ue+je-we&&(gt-=je),gt>-we&&gt<ue){const Fn=se-V-se*.05;Te.drawImage(ze,gt,Fn,we,V)}}if(O.current&&D.current.length>0&&g.current.length>=3&&g.current[0].width>0&&g.current[1].width>0&&g.current[2].width>0){for(P.current+=$;P.current>=n_;)P.current-=n_,F.current=(F.current+1)%Ah.length;const ze=D.current[F.current],V=se*lC,Pe=ze.width/ze.height,we=V*Pe,Ie=g.current[0].width/g.current[0].height*se,Ne=g.current[1].width/g.current[1].height*se,Ae=g.current[2].width/g.current[2].height*se,je=Ie+Ne+Ae,ct=Ie,ut=Ne*.3,mt=.9,Gt=k.current%je,gt=se-V-se*.05,Fn=Math.max(0,Ne-ut-we);for(let Un=-1;Un<=1;Un++){const bn=-Gt+ct+Un*je,Tt=Math.max(0,ue-bn),j=Math.min(Tt*(1-mt),Fn),xe=bn+ut+j;xe>-we&&xe<ue&&Te.drawImage(ze,xe,gt,we,V)}}if(q.current&&B.current.length>0&&g.current.length>=3&&g.current[0].width>0&&g.current[1].width>0&&g.current[2].width>0){for(A.current+=$;A.current>=i_;)A.current-=i_,w.current=(w.current+1)%wh.length;const ze=B.current[w.current],V=se*cC,Pe=ze.width/ze.height,we=V*Pe,Ie=g.current[0].width/g.current[0].height*se,Ne=g.current[1].width/g.current[1].height*se,Ae=g.current[2].width/g.current[2].height*se,je=Ie+Ne+Ae,ct=0,ut=Ie*.3,mt=.8,Gt=k.current%je,gt=se-V-se*.05,Fn=Math.max(0,Ie-ut-we);for(let Un=-1;Un<=1;Un++){const bn=-Gt+ct+Un*je,Tt=Math.max(0,ue-bn),j=Math.min(Tt*(1-mt),Fn),xe=bn+ut+j;xe>-we&&xe<ue&&Te.drawImage(ze,xe,gt,we,V)}}Ye();const oe=se*.6,Le=se-oe;Et(v.current,W.current,Le,oe,ue);const Ve=se*.3,_e=se-Ve;Et(y.current,J.current,_e,Ve,ue)}else Te.fillStyle=uC,Te.fillRect(0,0,ue,se),Ye();if(!I.current||ie.current.length===0){const oe=[];for(let Le=0;Le<vC;Le++)oe.push({x:Math.random()*ue,y:Math.random()*se,size:l_[Math.floor(Math.random()*l_.length)],speedY:Ch.min+Math.random()*(Ch.max-Ch.min),speedX:Dh.min+Math.random()*(Dh.max-Dh.min),color:o_[Math.floor(Math.random()*o_.length)],swayOffset:Math.random()*Math.PI*2});ie.current=oe,I.current=!0}ie.current.forEach(oe=>{oe.y+=oe.speedY*$;const Le=rt*(.02*r_)+oe.swayOffset,Ve=Math.sin(Le)*_C*.1;oe.x+=(oe.speedX+Ve)*$,oe.y>se+oe.size&&(oe.y=-oe.size,oe.x=Math.random()*ue),oe.x>ue+oe.size?oe.x=-oe.size:oe.x<-oe.size&&(oe.x=ue+oe.size),Te.fillStyle=oe.color;const _e=Math.floor(oe.x),ze=Math.floor(oe.y);oe.size<=2?Te.fillRect(_e,ze,oe.size,oe.size):oe.size===3?(Te.fillRect(_e+1,ze,1,1),Te.fillRect(_e,ze+1,3,1),Te.fillRect(_e+1,ze+2,1,1)):oe.size===4?(Te.fillRect(_e+1,ze,2,1),Te.fillRect(_e,ze+1,4,2),Te.fillRect(_e+1,ze+3,2,1)):(Te.fillRect(_e+1,ze,1,1),Te.fillRect(_e+3,ze,1,1),Te.fillRect(_e,ze+1,5,1),Te.fillRect(_e+1,ze+2,3,1),Te.fillRect(_e,ze+3,5,1),Te.fillRect(_e+1,ze+4,1,1),Te.fillRect(_e+3,ze+4,1,1))});let ke=[0,0,0,0,0];if(s){(!ee.current||ee.current.length!==s.frequencyBinCount)&&(ee.current=new Uint8Array(s.frequencyBinCount)),s.getByteFrequencyData(ee.current);const oe=ee.current;oe&&(ke=Ea.map(Le=>qe(oe,Le.freqStart,Le.freqEnd,st,G)))}const ye=n.sensitivity||.5,Qe=hC*(.5+ye*1.5),Re=ke.every(oe=>oe<.03);for(Ea.forEach((oe,Le)=>{const Ve=ke[Le],_e=pe.current[Le];if(Ve>_e){const ut=1-Math.pow(1-fC,$);pe.current[Le]=_e+(Ve-_e)*ut}else{const mt=1-Math.pow(1-(Re?2e-4:dC),$);pe.current[Le]=_e+(Ve-_e)*mt}let ze=Ve-pe.current[Le];const V=.08;ze>V&&(pe.current[Le]=Ve-V,ze=V);const Pe=Ea[Le].extraBoost||1;let we=Math.max(0,ze*Qe*Pe);we=Math.min(we,pC);const Ie=Me.current[Le],Ne=z.current[Le],je=(we-Ie)*mC;z.current[Le]=Ne+je*$;const ct=n.friction??.94;z.current[Le]*=Math.pow(ct,$),Me.current[Le]=Ie+z.current[Le]*$,Me.current[Le]<0&&(Me.current[Le]=0,z.current[Le]*=-.2),Me.current[Le]>1&&(Me.current[Le]=1,z.current[Le]*=-.4)}),x.current+=$;x.current>=a_;)x.current-=a_,Ea.forEach((oe,Le)=>{oe.isAnimated&&oe.frames.length>1&&(h.current[Le]=(h.current[Le]+1)%oe.frames.length)});Z.current||(Y.current=Ea.map(()=>{const oe=[];for(let Le=0;Le<yC;Le++){const Ve=lu[Math.floor(Math.random()*lu.length)];oe.push({relativeX:Math.random(),relativeY:(Math.random()-.5)*.8,size:Ve,baseSize:Ve,opacity:.5+Math.random()*.5,speed:c_*(.7+Math.random()*.6)})}return oe}),Z.current=!0),Ea.forEach((oe,Le)=>{const Ve=Me.current[Le],_e=oe.baseX,ze=ue*.505,V=90;let Pe;_e<.5?Pe=Math.min(ue*_e,ze-V):_e>.51?Pe=Math.max(ue*_e,ze+V):Pe=ze;const we=se*oe.baseY,Ie=Ve*ue*xC,Ne=Pe+Ie,Ae=we,je=gC+Ie,ct=Ne-je,ut=Te.createLinearGradient(ct,0,Ne,0);ut.addColorStop(0,"transparent"),ut.addColorStop(.3,oe.trailColor+"30"),ut.addColorStop(.7,oe.trailColor+"70"),ut.addColorStop(1,oe.trailColor),Te.fillStyle=ut,Te.fillRect(ct,Ae-Rh/2,je,Rh);const mt=Y.current[Le];mt&&mt.forEach(gt=>{gt.relativeX-=gt.speed/je*$,1-gt.relativeX,gt.size=gt.baseSize*(.3+gt.relativeX*.7),gt.opacity=Math.max(0,.9*gt.relativeX),(gt.relativeX<0||gt.size<1||gt.opacity<.1)&&(gt.relativeX=.85+Math.random()*.15,gt.relativeY=(Math.random()-.5)*.8,gt.baseSize=lu[Math.floor(Math.random()*lu.length)],gt.size=gt.baseSize,gt.opacity=.7+Math.random()*.3,gt.speed=c_*(.7+Math.random()*.6));const Fn=ct+gt.relativeX*je,Un=Ae+gt.relativeY*Rh,bn=Math.max(2,Math.floor(gt.size));Te.fillStyle=`rgba(255, 255, 255, ${gt.opacity*.5})`;const Tt=Math.floor(Fn),j=Math.floor(Un);bn<=12?(Te.fillRect(Tt-4,j-3,3,2),Te.fillRect(Tt+1,j-3,3,2),Te.fillRect(Tt-4,j-1,9,2),Te.fillRect(Tt-3,j+1,7,1),Te.fillRect(Tt-2,j+2,5,1),Te.fillRect(Tt-1,j+3,3,1),Te.fillRect(Tt,j+4,1,1)):bn<=16?(Te.fillRect(Tt-5,j-4,4,2),Te.fillRect(Tt+1,j-4,4,2),Te.fillRect(Tt-5,j-2,11,3),Te.fillRect(Tt-4,j+1,9,2),Te.fillRect(Tt-3,j+3,7,1),Te.fillRect(Tt-2,j+4,5,1),Te.fillRect(Tt-1,j+5,3,1),Te.fillRect(Tt,j+6,1,1)):(Te.fillRect(Tt-6,j-5,5,2),Te.fillRect(Tt+1,j-5,5,2),Te.fillRect(Tt-6,j-3,13,4),Te.fillRect(Tt-5,j+1,11,2),Te.fillRect(Tt-4,j+3,9,1),Te.fillRect(Tt-3,j+4,7,1),Te.fillRect(Tt-2,j+5,5,1),Te.fillRect(Tt-1,j+6,3,1),Te.fillRect(Tt,j+7,1,1))});const Gt=f.current[Le];if(m.current&&Gt&&Gt.length>0){const gt=h.current[Le],Fn=Gt[gt]||Gt[0];Te.drawImage(Fn,Ne-cl/2,Ae-cl/2,cl,cl)}else Te.fillStyle=oe.trailColor,Te.beginPath(),Te.arc(Ne,Ae,cl/3,0,Math.PI*2),Te.fill()})};return tt(),()=>{window.removeEventListener("resize",Je),document.removeEventListener("visibilitychange",Fe),cancelAnimationFrame(u.current)}},[s,e,n,qe]),N.jsx("canvas",{ref:c,className:"w-full h-full absolute inset-0",style:{imageRendering:"pixelated"}})},R0={bounceStrength:1,sensitivity:.5,sceneSpeed:1,friction:.94},SC=({params:s,setParams:e,isUIHidden:n})=>{const[a,o]=ae.useState(!1),{t:c}=vr(),u=()=>{e(R0)},f=(m,h)=>{e(x=>({...x,[m]:h}))};return n?null:a?N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"fixed inset-0 z-[19] bg-transparent",onClick:()=>o(!1)}),N.jsxs("div",{className:"absolute top-[70px] right-6 z-20 w-72 bg-white/10 backdrop-blur-xl rounded-2xl p-5 animate-in fade-in slide-in-from-right-4 duration-300 border border-white/5 shadow-2xl",children:[N.jsxs("div",{className:"flex items-center justify-between mb-6",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("h3",{className:"text-sm font-bold text-white/70 uppercase tracking-wider",children:c("controls.powerpuff_title")}),N.jsx("button",{onClick:u,className:"text-gray-400 hover:text-gray-300 transition-colors",title:c("ui.reset"),children:N.jsx(Eu,{className:"w-4 h-4"})})]}),N.jsx("button",{onClick:()=>o(!1),className:"text-gray-400 hover:text-gray-300 transition-colors",children:N.jsx(Qr,{className:"w-5 h-5"})})]}),N.jsxs("div",{className:"space-y-6",children:[N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50",children:[N.jsx("span",{children:c("controls.scene_speed")}),N.jsxs("span",{className:"text-white/40",children:[s.sceneSpeed.toFixed(1),"x"]})]}),N.jsx("input",{type:"range",min:"0.1",max:"3.0",step:"0.1",value:s.sceneSpeed,onChange:m=>f("sceneSpeed",parseFloat(m.target.value)),className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"})]}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50",children:[N.jsx("span",{children:c("controls.friction")}),N.jsxs("span",{className:"text-white/40",children:[((1-s.friction)*100).toFixed(0),"%"]})]}),N.jsx("input",{type:"range",min:"0.01",max:"0.20",step:"0.01",value:(1-s.friction).toFixed(2),onChange:m=>{const h=parseFloat(m.target.value);f("friction",1-h)},className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"})]}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between text-xs font-medium text-white/50",children:[N.jsx("span",{children:c("controls.sensitivity")}),N.jsxs("span",{className:"text-white/40",children:[(s.sensitivity*100).toFixed(0),"%"]})]}),N.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:s.sensitivity,onChange:m=>f("sensitivity",parseFloat(m.target.value)),className:"w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white/60"})]}),N.jsx(wu,{darkUI:!0})]})]})]}):N.jsx("button",{onClick:()=>o(!0),className:"absolute top-[70px] right-6 z-20 bg-white/10 backdrop-blur-md p-2 rounded-full transition-all text-gray-400 hover:text-gray-300 hover:bg-white/15",children:N.jsx(Tu,{className:"w-[20px] h-[20px]"})})},MC=({isOpen:s,darkUI:e,songs:n,currentSongId:a,isPlaying:o,onClose:c,onPlayPause:u,onSelectSong:f})=>{const{t:m}=vr();return N.jsxs("div",{className:`fixed inset-0 z-[120] ${s?"pointer-events-auto":"pointer-events-none"}`,"aria-hidden":!s,children:[N.jsx("div",{className:`absolute inset-0 bg-transparent transition-opacity duration-200 ${s?"opacity-100":"opacity-0"}`,onClick:c}),N.jsxs("aside",{className:`absolute transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${e?"bg-[#272727] shadow-2xl":"bg-white shadow-xl"} 
        /* Mobile: Bottom Action Sheet */
        bottom-0 left-0 right-0 w-full h-[75vh] max-h-[85vh] rounded-t-[32px]
        ${s?"translate-y-0":"translate-y-full"}
        
        /* Desktop: Right Sidebar */
        sm:top-0 sm:right-0 sm:left-auto sm:bottom-auto sm:w-[420px] sm:h-screen sm:max-h-none sm:rounded-none
        ${s?"sm:translate-x-0 sm:translate-y-0":"sm:translate-x-full sm:translate-y-0"}
        `,role:"dialog","aria-label":m("ui.playlist"),children:[N.jsx("div",{className:"flex justify-center pt-3 pb-1 sm:hidden",children:N.jsx("div",{className:`w-10 h-1.5 rounded-full ${e?"bg-white/10":"bg-black/10"}`})}),N.jsxs("div",{className:"relative flex items-center justify-between px-6 pt-5 pb-2 sm:pt-6",children:[N.jsx("h3",{className:`text-base font-bold ${e?"text-white":"text-gray-900"}`,children:m("ui.playlist")}),N.jsx("button",{onClick:c,className:`transition-colors ${e?"text-white/70 hover:text-white":"text-black/50 hover:text-black/80"}`,"aria-label":m("ui.close"),children:N.jsx(Qr,{className:"w-5 h-5"})})]}),N.jsx("div",{className:"relative flex-1 overflow-y-auto px-3 pt-0 pb-4",children:N.jsx("div",{className:"flex flex-col gap-1",children:n.map(h=>{const x=a===h.id,g=x&&o;return N.jsxs("div",{className:`group flex items-center gap-3 p-3 rounded-xl transition-colors cursor-pointer ${e?"[@media(hover:hover)]:hover:bg-white/10":"[@media(hover:hover)]:hover:bg-black/5"}`,onClick:()=>{x?u():f(h.id)},children:[N.jsxs("div",{className:"relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 shadow-sm bg-black/10",children:[N.jsx("img",{src:h.coverUrl,alt:h.title,className:"w-full h-full object-cover",loading:"lazy"}),N.jsx("button",{className:"absolute inset-0 bg-black/45 flex items-center justify-center transition-opacity opacity-0 pointer-events-none [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:pointer-events-auto",onClick:v=>{v.stopPropagation(),x?u():f(h.id)},"aria-label":m(g?"ui.pause":"ui.play"),children:g?N.jsx(v_,{className:"w-5 h-5 text-white fill-white"}):N.jsx(__,{className:"w-5 h-5 text-white fill-white ml-0.5"})})]}),N.jsxs("div",{className:"flex-1 min-w-0",children:[N.jsx("p",{className:`text-sm font-semibold truncate ${x?e?"text-[#8B7CF7]":"text-[#5A48DA]":e?"text-white":"text-gray-900"}`,children:h.title}),N.jsx("p",{className:`text-xs truncate ${x?e?"text-[#8B7CF7]/80":"text-[#5A48DA]/80":e?"text-white/55":"text-gray-500"}`,children:h.artist})]})]},h.id)})})})]})]})},EC="/assets/girls-DdYx5Y_k.webp",TC="/assets/cubes-uwM7ImYV.webp",AC="/assets/particles-D2O7hMp1.webp",wC="/assets/vinyl-SWCCGo6r.webp",RC=({isOpen:s,darkUI:e,currentTheme:n,onClose:a,onSelectTheme:o})=>{const{t:c}=vr(),u=[{id:"powerpuff",label:c("themes.powerpuff"),preview:EC},{id:"cubes",label:c("themes.cubes"),preview:TC},{id:"particle",label:c("themes.particle"),preview:AC},{id:"vinyl",label:c("themes.vinyl"),preview:wC}];return N.jsxs("div",{className:`fixed inset-0 z-[120] ${s?"pointer-events-auto":"pointer-events-none"}`,"aria-hidden":!s,children:[N.jsx("div",{className:`absolute inset-0 bg-transparent transition-opacity duration-200 ${s?"opacity-100":"opacity-0"}`,onClick:a}),N.jsxs("aside",{className:`absolute transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${e?"bg-[#272727] shadow-2xl":"bg-white shadow-xl"} 
        /* Mobile: Bottom Action Sheet */
        bottom-0 left-0 right-0 w-full h-[75vh] max-h-[85vh] rounded-t-[32px]
        ${s?"translate-y-0":"translate-y-full"}
        
        /* Desktop: Right Sidebar */
        sm:top-0 sm:right-0 sm:left-auto sm:bottom-auto sm:w-[420px] sm:h-screen sm:max-h-none sm:rounded-none
        ${s?"sm:translate-x-0 sm:translate-y-0":"sm:translate-x-full sm:translate-y-0"}
        `,role:"dialog","aria-label":c("ui.themes"),children:[N.jsx("div",{className:"flex justify-center pt-3 pb-1 sm:hidden",children:N.jsx("div",{className:`w-10 h-1.5 rounded-full ${e?"bg-white/10":"bg-black/10"}`})}),N.jsxs("div",{className:"flex items-center justify-between px-6 pt-5 pb-2 sm:pt-6",children:[N.jsx("h3",{className:`text-base font-bold ${e?"text-white/70":"text-gray-500"}`,children:c("ui.themes")}),N.jsx("button",{onClick:a,className:`transition-colors ${e?"text-white/70 hover:text-white":"text-black/50 hover:text-black/80"}`,"aria-label":c("ui.close"),children:N.jsx(Qr,{className:"w-5 h-5"})})]}),N.jsx("div",{className:"px-3 pt-0 pb-2",children:N.jsx("div",{className:"grid grid-cols-2 gap-4",children:u.map(f=>{const m=n===f.id;return N.jsxs("button",{onClick:()=>{o(f.id),a()},className:`group flex flex-col items-start gap-2 p-3 rounded-xl transition-all ${e?"hover:bg-white/10":"hover:bg-black/5"}`,children:[N.jsxs("div",{className:"relative w-full aspect-video rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform",children:[N.jsx("img",{src:f.preview,alt:f.label,className:"w-full h-full object-cover",loading:"lazy"}),m&&N.jsx("div",{className:`absolute top-2 right-2 rounded-full p-1 text-white shadow-md ${e?"bg-[#8B7CF7]":"bg-[#5A48DA]"}`,children:N.jsx(I1,{className:"w-3.5 h-3.5"})})]}),N.jsx("span",{className:`text-sm font-medium ${m?e?"text-[#8B7CF7]":"text-[#5A48DA]":e?"text-white/60":"text-gray-500"}`,children:f.label})]},f.id)})})})]})]})},CC="/assets/Ditto%20-%20250%20Remix-VsqlpH8W.mp3",DC="/assets/Supernatural%20-%20250%20Remix-BdNnyYv1.MP3",NC="/assets/Attention%20-%20250%20Remix-DgOB1VRO.MP3",LC="/assets/Hype%20Boy%20-%20250%20Remix-DjVdFW2h.MP3",UC="/assets/OMG%20-%20FRNK%20Remix-DJ2RHxhD.MP3",OC="/assets/Cookie%20-%20FRNK%20Remix-Bq0fLCrD.MP3",PC=`[
  { "time": 0, "lyric": "Ditto – 250 Remix - NewJeans" },
  { "time": 1064, "lyric": "词：Ylva Dimberg/Hyu-il Cho (The Black Skirts)/Oohyo/MINJI" },
  { "time": 4015, "lyric": "曲：250/Ylva Dimberg" },
  { "time": 9066, "lyric": "编曲：250" },
  { "time": 10081, "lyric": "制作人：250" },
  { "time": 13081, "lyric": "播放器制作：Hermione" },
  { "time": 16033, "lyric": "Woo woo woo woo ooh" },
  { "time": 23035, "lyric": "Woo woo woo woo" },
  { "time": 28081, "lyric": "Stay in the middle" },
  { "time": 30051, "lyric": "Like you a little" },
  { "time": 32035, "lyric": "Don't want no riddle" },
  { "time": 34009, "lyric": "말해줘 say it back" },
  { "time": 35097, "lyric": "Oh say it ditto" },
  { "time": 37079, "lyric": "아침은 너무 멀어" },
  { "time": 39053, "lyric": "So say it ditto" },
  { "time": 43045, "lyric": "훌쩍 커버렸어" },
  { "time": 45025, "lyric": "함께한 기억처럼" },
  { "time": 46093, "lyric": "널 보는 내 마음은" },
  { "time": 48059, "lyric": "어느새 여름 지나 가을" },
  { "time": 51071, "lyric": "기다렸지 all this time" },
  { "time": 57091, "lyric": "Do you want somebody" },
  { "time": 59062, "lyric": "Like I want somebody" },
  { "time": 61029, "lyric": "날 보고 웃었지만" },
  { "time": 63008, "lyric": "Do you think about me now yeah" },
  { "time": 65099, "lyric": "All the time yeah" },
  { "time": 67074, "lyric": "All the time" },
  { "time": 69094, "lyric": "I got no time to lose" },
  { "time": 73049, "lyric": "내 길었던 하루" },
  { "time": 77005, "lyric": "난 보고 싶어" },
  { "time": 78094, "lyric": "Ra-ta-ta-ta 울린 심장" },
  { "time": 81081, "lyric": "Ra-ta-ta-ta" },
  { "time": 84014, "lyric": "I got nothing to lose" },
  { "time": 87078, "lyric": "널 좋아한다고" },
  { "time": 90045, "lyric": "Wooah wooah wooah" },
  { "time": 93031, "lyric": "Ra-ta-ta-ta 울린 심장" },
  { "time": 95070, "lyric": "Ra-ta-ta-ta" },
  { "time": 98048, "lyric": "But I don't want to" },
  { "time": 100037, "lyric": "Stay in the middle" },
  { "time": 102009, "lyric": "Like you a little" },
  { "time": 103096, "lyric": "Don't want no riddle" },
  { "time": 105080, "lyric": "말해줘 say it back" },
  { "time": 107057, "lyric": "Oh say it ditto" },
  { "time": 109033, "lyric": "아침은 너무 멀어" },
  { "time": 111009, "lyric": "So say it ditto" },
  { "time": 112095, "lyric": "I don't want to" },
  { "time": 114067, "lyric": "Walk in this 미로" },
  { "time": 116045, "lyric": "다 아는 건 아니어도" },
  { "time": 118035, "lyric": "바라던 대로" },
  { "time": 120009, "lyric": "말해줘 Say it back" },
  { "time": 121093, "lyric": "Oh say it ditto" },
  { "time": 123062, "lyric": "I want you so want you" },
  { "time": 125052, "lyric": "So say it ditto" },
  { "time": 129046, "lyric": "Not just anybody" },
  { "time": 131022, "lyric": "너를 상상했지" },
  { "time": 132091, "lyric": "항상 닿아있던" },
  { "time": 134079, "lyric": "처음 느낌 그대로 난" },
  { "time": 137065, "lyric": "기다렸지 all this time" },
  { "time": 141053, "lyric": "I got nothing to lose" },
  { "time": 145006, "lyric": "널 좋아한다고" },
  { "time": 147093, "lyric": "Wooah wooah wooah" },
  { "time": 150046, "lyric": "Ra-ta-ta-ta 울린 심장" },
  { "time": 153037, "lyric": "Ra-ta-ta-ta" },
  { "time": 155085, "lyric": "But I don't want to" },
  { "time": 157066, "lyric": "Stay in the middle" },
  { "time": 159040, "lyric": "Like you a little" },
  { "time": 161026, "lyric": "Don't want no riddle" },
  { "time": 163007, "lyric": "말해줘 say it back" },
  { "time": 164082, "lyric": "Oh say it ditto" },
  { "time": 166065, "lyric": "아침은 너무 멀어" },
  { "time": 168031, "lyric": "So say it ditto" },
  { "time": 170027, "lyric": "I don't want to" },
  { "time": 171097, "lyric": "Walk in this 미로" },
  { "time": 173078, "lyric": "다 아는 건 아니어도" },
  { "time": 175061, "lyric": "바라던 대로" },
  { "time": 177038, "lyric": "말해줘 Say it back" },
  { "time": 179018, "lyric": "Oh say it ditto" },
  { "time": 181014, "lyric": "I want you so want you" },
  { "time": 182085, "lyric": "So say it ditto" },
  { "time": 188013, "lyric": "Woo woo woo woo ooh" },
  { "time": 195020, "lyric": "Woo woo woo woo" }
]


`,IC=`[
  { "time": 0, "lyric": "Supernatural - 250 Remix - NewJeans (뉴진스)" },
  { "time": 1082, "lyric": "词：Gigi/Pharrell Williams/Ylva Dimberg/MINJI" },
  { "time": 10064, "lyric": "曲：250/Pharrell Williams/Ylva Dimberg" },
  { "time": 21046, "lyric": "播放器制作：Hermione" },
  { "time": 26046, "lyric": "Stormy night" },
  { "time": 28064, "lyric": "Cloudy sky" },
  { "time": 30008, "lyric": "In a moment you and I" },
  { "time": 35030, "lyric": "One more chance" },
  { "time": 37048, "lyric": "너와 나 다시 한번 만나게" },
  { "time": 41002, "lyric": "서로에게 향하게" },
  { "time": 43076, "lyric": "My feeling's getting deeper" },
  { "time": 48021, "lyric": "내 심박수를 믿어" },
  { "time": 52057, "lyric": "우리 인연은 깊어" },
  { "time": 57000, "lyric": "I gotta see the meaning of it" },
  { "time": 61096, "lyric": "I don't know what we've done" },
  { "time": 64004, "lyric": "되돌아가긴 싫어" },
  { "time": 66055, "lyric": "알아차렸어" },
  { "time": 70075, "lyric": "Don't know what we've been sold" },
  { "time": 72089, "lyric": "여기 빛나고 있어" },
  { "time": 76076, "lyric": "So it's sure" },
  { "time": 79025, "lyric": "Golden moon" },
  { "time": 81046, "lyric": "Diamond stars" },
  { "time": 82091, "lyric": "In a moment you and I" },
  { "time": 88010, "lyric": "Second chance" },
  { "time": 90031, "lyric": "띄워봐 하눌로 날아갈 때" },
  { "time": 93088, "lyric": "너와 내게 향하게" },
  { "time": 96066, "lyric": "My feeling's getting deeper" },
  { "time": 101010, "lyric": "내 심박수를 믿어" },
  { "time": 105043, "lyric": "우리 인연은 깊어" },
  { "time": 109084, "lyric": "I gotta see the meaning of it" },
  { "time": 114079, "lyric": "I don't know what we've done" },
  { "time": 116083, "lyric": "되돌아가긴 싫어" },
  { "time": 119048, "lyric": "알아차렸어" },
  { "time": 123061, "lyric": "Don't know what we've been sold" },
  { "time": 125064, "lyric": "여기 빛나고 있어" },
  { "time": 129062, "lyric": "So it's sure" },
  { "time": 137012, "lyric": "It's supernatural" },
  { "time": 145092, "lyric": "It's supernatural" },
  { "time": 149013, "lyric": "거짓말 안 할래" },
  { "time": 152024, "lyric": "너도 말해" },
  { "time": 154017, "lyric": "Attention we should pay" },
  { "time": 156054, "lyric": "To what is coming through" },
  { "time": 158075, "lyric": "We had no idea" },
  { "time": 160078, "lyric": "It's crystal clear" },
  { "time": 163022, "lyric": "Love is here" },
  { "time": 165041, "lyric": "Sitting next to you" },
  { "time": 170095, "lyric": "돌아와서 너와 나" },
  { "time": 176018, "lyric": "Golden moon" },
  { "time": 178038, "lyric": "Diamond stars" },
  { "time": 179077, "lyric": "In a moment we unite" }
]


`,zC=`[
  { "time": 46, "lyric": "Attention – 250 Remix - NewJeans (뉴진스)" },
  { "time": 1008, "lyric": "词：Gigi/Duckbay (Cosmos Studios Stockholm)/DANIELLE" },
  { "time": 5039, "lyric": "曲：250/Duckbay (Cosmos Studios Stockholm)" },
  { "time": 8055, "lyric": "编曲：250" },
  { "time": 9071, "lyric": "制作人：250" },
  { "time": 13071, "lyric": "播放器制作：Hermione" },
  { "time": 27078, "lyric": "You and me" },
  { "time": 28080, "lyric": "내 맘이 보이지" },
  { "time": 29084, "lyric": "한참을 쳐다봐" },
  { "time": 30076, "lyric": "가까이 다가가" },
  { "time": 31089, "lyric": "You see" },
  { "time": 34023, "lyric": "You see ey ey ey ey" },
  { "time": 36091, "lyric": "One two three" },
  { "time": 37082, "lyric": "용기가 생겼지" },
  { "time": 38081, "lyric": "이미 아는 네 눈치" },
  { "time": 39092, "lyric": "고개를 돌려 천천히" },
  { "time": 41020, "lyric": "여기" },
  { "time": 43034, "lyric": "You see" },
  { "time": 44054, "lyric": "여기 보이니" },
  { "time": 46006, "lyric": "Looking for attention" },
  { "time": 46092, "lyric": "너야겠어" },
  { "time": 48020, "lyric": "확실하게 나로 만들겠어" },
  { "time": 49098, "lyric": "Stop eyyy" },
  { "time": 50086, "lyric": "Drop the question" },
  { "time": 51061, "lyric": "Drop the drop the question" },
  { "time": 53026, "lyric": "Want attention" },
  { "time": 53090, "lyric": "Wanna want attention" },
  { "time": 55043, "lyric": "You give me butterflies you know" },
  { "time": 57054, "lyric": "내 맘은 온통 paradise" },
  { "time": 59089, "lyric": "꿈에서 깨워주지 마" },
  { "time": 62075, "lyric": "You got me looking for attention" },
  { "time": 67044, "lyric": "You got me looking for attention" },
  { "time": 73044, "lyric": "가끔은 정말" },
  { "time": 74049, "lyric": "헷갈리지만" },
  { "time": 75058, "lyric": "분명한 건" },
  { "time": 76046, "lyric": "Got me looking for attention" },
  { "time": 83005, "lyric": "널 우연히 마주친 척할래" },
  { "time": 85004, "lyric": "못 본 척 지나갈래" },
  { "time": 86061, "lyric": "You're so fine" },
  { "time": 87050, "lyric": "Gotta gotta get to know ya" },
  { "time": 89070, "lyric": "나와 나와 걸어가 줘" },
  { "time": 92036, "lyric": "지금 돌아서면" },
  { "time": 93089, "lyric": "I need ya need ya need ya" },
  { "time": 95056, "lyric": "To look at me back" },
  { "time": 97000, "lyric": "Hey 다 들켰었나" },
  { "time": 98045, "lyric": "널 보면 하트가 튀어나와" },
  { "time": 101067, "lyric": "난 사탕을 찾는 baby baby" },
  { "time": 104017, "lyric": "내 맘은 설레이지" },
  { "time": 105029, "lyric": "Eyyy drop the question" },
  { "time": 106046, "lyric": "Drop the drop the question" },
  { "time": 107078, "lyric": "Want attention" },
  { "time": 108067, "lyric": "Wanna want attention" },
  { "time": 110035, "lyric": "You give me butterflies you know" },
  { "time": 112043, "lyric": "내 맘은 온통 paradise" },
  { "time": 114079, "lyric": "꿈에서 깨워주지 마" },
  { "time": 117048, "lyric": "You got me looking for attention" },
  { "time": 122002, "lyric": "You got me looking for attention" },
  { "time": 128022, "lyric": "가끔은 정말" },
  { "time": 129036, "lyric": "헷갈리지만" },
  { "time": 130048, "lyric": "분명한 건" },
  { "time": 131031, "lyric": "Got me looking for attention" },
  { "time": 136004, "lyric": "You got me looking for attention" },
  { "time": 140053, "lyric": "You got me looking for attention" },
  { "time": 146064, "lyric": "가끔은 정말" },
  { "time": 147066, "lyric": "헷갈리지만" },
  { "time": 148076, "lyric": "분명한 건" },
  { "time": 149055, "lyric": "Got me looking for attention" },
  { "time": 155062, "lyric": "A T T E N T I on" },
  { "time": 158003, "lyric": "Attention is what I want" },
  { "time": 160010, "lyric": "A T T E N T I on" },
  { "time": 162051, "lyric": "Attention is what I want" },
  { "time": 164074, "lyric": "A T T E N T I on" },
  { "time": 167018, "lyric": "Attention is what I want" },
  { "time": 169031, "lyric": "A T T E N T I on" },
  { "time": 172037, "lyric": "You got me looking for attention" }
]


`,FC=`[
  { "time": 0, "lyric": "Hype Boy – 250 Remix - NewJeans" },
  { "time": 3029, "lyric": "词：Gigi/Ylva Dimberg/HANNI" },
  { "time": 4031, "lyric": "曲：250/Ylva Dimberg" },
  { "time": 5093, "lyric": "编曲：250" },
  { "time": 10000, "lyric": "制作人：250" },
  { "time": 20000, "lyric": "播放器制作：Hermione" },
  { "time": 33097, "lyric": "Baby got me looking so crazy" },
  { "time": 38023, "lyric": "빠져버리는 daydream" },
  { "time": 41000, "lyric": "Got me feeling you" },
  { "time": 42043, "lyric": "너도 말해줄래" },
  { "time": 45045, "lyric": "누가 내게 뭐라든" },
  { "time": 46076, "lyric": "남들과는 달라 넌" },
  { "time": 47095, "lyric": "Maybe you could be the one" },
  { "time": 50064, "lyric": "날 믿어봐 한번" },
  { "time": 52001, "lyric": "I'm not looking for just fun" },
  { "time": 53061, "lyric": "Maybe I could be the one" },
  { "time": 55051, "lyric": "Oh baby" },
  { "time": 57076, "lyric": "예민하대 나 lately" },
  { "time": 60038, "lyric": "너 없이는 매일 매일이 yeah" },
  { "time": 64036, "lyric": "재미없어 어쩌지" },
  { "time": 67009, "lyric": "I just want you" },
  { "time": 68047, "lyric": "Call my phone right now" },
  { "time": 69092, "lyric": "I just wanna hear you're mine" },
  { "time": 72049, "lyric": "'Cause I know what you like boy" },
  { "time": 78005, "lyric": "You're my chemical hype boy" },
  { "time": 83085, "lyric": "내 지난날들은" },
  { "time": 86065, "lyric": "눈 뜨면 잊는 꿈" },
  { "time": 89080, "lyric": "Hype boy 너만 원해" },
  { "time": 92010, "lyric": "Hype boy 내가 전해" },
  { "time": 94008, "lyric": "And we can go high" },
  { "time": 97028, "lyric": "말해봐 yeah" },
  { "time": 98036, "lyric": "느껴봐 mm mm" },
  { "time": 99099, "lyric": "Take him to the sky" },
  { "time": 103001, "lyric": "You know I hype you boy" },
  { "time": 105065, "lyric": "눈을 감아" },
  { "time": 108044, "lyric": "말해봐 yeah" },
  { "time": 109046, "lyric": "느껴봐 mm mm" },
  { "time": 111002, "lyric": "Take him to the sky" },
  { "time": 114026, "lyric": "You know I hype you boy" },
  { "time": 118019, "lyric": "잠에 들려고 잠에 들려 해도" },
  { "time": 120096, "lyric": "네 생각에 또 새벽 세 시 uh-oh" },
  { "time": 123067, "lyric": "알려줄 거야" },
  { "time": 124059, "lyric": "They can't have you no more" },
  { "time": 126043, "lyric": "봐봐 여기 내 이름 써있다고" },
  { "time": 131084, "lyric": "누가 내게 뭐라든" },
  { "time": 133020, "lyric": "남들과는 달라 넌" },
  { "time": 134049, "lyric": "Maybe you could be the one" },
  { "time": 137026, "lyric": "날 믿어봐 한번" },
  { "time": 138053, "lyric": "I'm not looking for just fun" },
  { "time": 140016, "lyric": "Maybe I could be the one" },
  { "time": 141087, "lyric": "Oh baby" },
  { "time": 144028, "lyric": "예민하대 나 lately" },
  { "time": 146099, "lyric": "너 없이는 매일 매일이 yeah" },
  { "time": 150091, "lyric": "재미없어 어쩌지" },
  { "time": 153069, "lyric": "I just want you" },
  { "time": 155000, "lyric": "Call my phone right now" },
  { "time": 156049, "lyric": "I just wanna hear you're mine" },
  { "time": 159022, "lyric": "'Cause I know what you like boy" },
  { "time": 164057, "lyric": "You're my chemical hype boy" },
  { "time": 170043, "lyric": "내 지난날들은" },
  { "time": 173021, "lyric": "눈 뜨면 잊는 꿈" },
  { "time": 176040, "lyric": "Hype boy 너만 원해" },
  { "time": 178047, "lyric": "Hype boy 내가 전해" },
  { "time": 180092, "lyric": "And we can go high" },
  { "time": 183076, "lyric": "말해봐 yeah" },
  { "time": 184088, "lyric": "느껴봐 mm mm" },
  { "time": 186052, "lyric": "Take him to the sky" },
  { "time": 189060, "lyric": "You know I hype you boy" },
  { "time": 192041, "lyric": "눈을 감아" },
  { "time": 194095, "lyric": "말해봐 yeah" },
  { "time": 195094, "lyric": "느껴봐 mm mm" },
  { "time": 197076, "lyric": "Take him to the sky" },
  { "time": 200080, "lyric": "You know I hype you boy" }
]


`,BC=`[
  { "time": 1004, "lyric": "OMG – FRNK Remix - NewJeans (뉴진스)" },
  { "time": 2008, "lyric": "词：Gigi/Ylva Dimberg/HANNI" },
  { "time": 2047, "lyric": "曲：Jinsu Park/Ylva Dimberg/David Dawood" },
  { "time": 2058, "lyric": "编曲：Jinsu Park" },
  { "time": 2063, "lyric": "制作人：Jinsu Park" },
  { "time": 2065, "lyric": "播放器制作：Hermione" },
  { "time": 2069, "lyric": "이 노래는 it's about you baby" },
  { "time": 8022, "lyric": "Only you" },
  { "time": 11089, "lyric": "You you you" },
  { "time": 13045, "lyric": "You you you you" },
  { "time": 15061, "lyric": "내가 힘들 때" },
  { "time": 16095, "lyric": "울 것 같을 때" },
  { "time": 19036, "lyric": "기운도 이젠" },
  { "time": 20064, "lyric": "나지 않을 때" },
  { "time": 23003, "lyric": "It's you 날 걱정하네" },
  { "time": 24091, "lyric": "It's you 날 웃게하네" },
  { "time": 26081, "lyric": "말 안 해도 돼" },
  { "time": 28007, "lyric": "Boy what do you say" },
  { "time": 29013, "lyric": "They keep on asking me" },
  { "time": 29095, "lyric": "\\"Who is he\\"" },
  { "time": 31010, "lyric": "멀리든 언제든지 달려와" },
  { "time": 33003, "lyric": "They keep on asking me" },
  { "time": 33078, "lyric": "\\"Who is he\\"" },
  { "time": 34084, "lyric": "바쁜 척도 없이 넌 나타나" },
  { "time": 36064, "lyric": "They keep on asking me" },
  { "time": 37037, "lyric": "\\"Who is he\\"" },
  { "time": 38039, "lyric": "이게 말이 되니 난 물어봐" },
  { "time": 40048, "lyric": "They keep on asking me" },
  { "time": 41023, "lyric": "\\"Who is he\\"" },
  { "time": 42013, "lyric": "너는 말야" },
  { "time": 42094, "lyric": "He's the one that's living in my system baby" },
  { "time": 44078, "lyric": "Oh my oh my God" },
  { "time": 46022, "lyric": "예상했어 나" },
  { "time": 47058, "lyric": "I was really hoping" },
  { "time": 48081, "lyric": "That he will come through" },
  { "time": 52019, "lyric": "Oh my oh my God" },
  { "time": 53064, "lyric": "단 너뿐이야" },
  { "time": 54093, "lyric": "Asking all the time about what I should do" },
  { "time": 59023, "lyric": "No I can never let him go" },
  { "time": 60097, "lyric": "너만 생각나 24" },
  { "time": 62070, "lyric": "난 행운아야 정말로" },
  { "time": 64054, "lyric": "I know I know" },
  { "time": 66050, "lyric": "널 알기 전까지는 나" },
  { "time": 68035, "lyric": "의미 없었어 전부 다" },
  { "time": 70020, "lyric": "내 맘이 끝이 없는 걸" },
  { "time": 72010, "lyric": "I know I know" },
  { "time": 73029, "lyric": "I'm going crazy right" },
  { "time": 74066, "lyric": "어디서든" },
  { "time": 75048, "lyric": "몇 번이든" },
  { "time": 76028, "lyric": "There ain't nothing else that I would hold on to" },
  { "time": 78023, "lyric": "I hear his voice" },
  { "time": 78094, "lyric": "Through all the noise" },
  { "time": 80021, "lyric": "잠시라도 내 손 놓지 마 no no" },
  { "time": 82002, "lyric": "걱정 없잖아" },
  { "time": 83042, "lyric": "'Cause I got someone" },
  { "time": 85016, "lyric": "혼자라도 괜찮아" },
  { "time": 87017, "lyric": "'Cause I love someone" },
  { "time": 88053, "lyric": "They keep on asking me" },
  { "time": 89034, "lyric": "\\"Who is he\\"" },
  { "time": 90053, "lyric": "멀리든 언제든지 달려와" },
  { "time": 92046, "lyric": "They keep on asking me" },
  { "time": 93023, "lyric": "\\"Who is he\\"" },
  { "time": 94014, "lyric": "바쁜 척도 없이 넌 나타나" },
  { "time": 96009, "lyric": "They keep on asking me" },
  { "time": 96086, "lyric": "\\"Who is he\\"" },
  { "time": 97098, "lyric": "이게 말이 되니 난 물어봐" },
  { "time": 100005, "lyric": "They keep on asking me" },
  { "time": 100079, "lyric": "\\"Who is he\\"" },
  { "time": 101068, "lyric": "너는 말야" },
  { "time": 102051, "lyric": "He's the one that's living in my system baby" },
  { "time": 104037, "lyric": "Oh my oh my God" },
  { "time": 105070, "lyric": "예상했어 나" },
  { "time": 107000, "lyric": "I was really hoping" },
  { "time": 108030, "lyric": "That he will come through" },
  { "time": 111073, "lyric": "Oh my oh my God" },
  { "time": 113014, "lyric": "단 너뿐이야" },
  { "time": 114033, "lyric": "Asking all the time about what I should do" },
  { "time": 118072, "lyric": "No I can never let him go" },
  { "time": 120042, "lyric": "너만 생각나 24" },
  { "time": 122029, "lyric": "난 행운아야 정말로" },
  { "time": 124013, "lyric": "I know I know" },
  { "time": 126010, "lyric": "널 알기 전까지는 나" },
  { "time": 127089, "lyric": "의미 없었어 전부 다" },
  { "time": 129078, "lyric": "내 맘이 끝이 없는 걸" },
  { "time": 131072, "lyric": "I know I know" },
  { "time": 147080, "lyric": "너와 나" },
  { "time": 148083, "lyric": "My heart is glowing" },
  { "time": 149088, "lyric": "It's glowing up" },
  { "time": 152068, "lyric": "너랑만 있으면 무서울 게 없어" },
  { "time": 156037, "lyric": "가득 메워진 다 메워진 붉어진" },
  { "time": 160009, "lyric": "My heart is glowing it'd be glowing" },
  { "time": 162063, "lyric": "'Cause he" },
  { "time": 163088, "lyric": "Oh my oh my God" },
  { "time": 165020, "lyric": "예상했어 나" },
  { "time": 166057, "lyric": "I was really hoping" },
  { "time": 167076, "lyric": "That he will come through" },
  { "time": 171020, "lyric": "Oh my oh my God" },
  { "time": 172066, "lyric": "단 너뿐이야" },
  { "time": 174008, "lyric": "Asking all the time about what I should do" },
  { "time": 178028, "lyric": "No I can never let him go" },
  { "time": 179098, "lyric": "He's right there for me 24" },
  { "time": 181094, "lyric": "난 행운아야 정말로" },
  { "time": 183063, "lyric": "I know I know" },
  { "time": 185067, "lyric": "널 알기 전까지는 나" },
  { "time": 187041, "lyric": "의미 없었어 전부 다" },
  { "time": 189041, "lyric": "어떡해" },
  { "time": 189093, "lyric": "My heart is glowing it's glowing" },
  { "time": 191052, "lyric": "My heart is glowing up" },
  { "time": 192072, "lyric": "So I can't sleep at night" }
]


`,HC=`[
  { "time": 77, "lyric": "Cookie – FRNK Remix - NewJeans (뉴진스)" },
  { "time": 1088, "lyric": "词：Gigi/Ylva Dimberg" },
  { "time": 2084, "lyric": "曲：Jinsu Park/Ylva Dimberg" },
  { "time": 3076, "lyric": "编曲：Jinsu Park" },
  { "time": 4062, "lyric": "制作人：Jinsu Park" },
  { "time": 7062, "lyric": "播放器制作：Hermione" },
  { "time": 11073, "lyric": "내가 만든 쿠키" },
  { "time": 16087, "lyric": "너를 위해 구웠지" },
  { "time": 19074, "lyric": "But you know that it ain't for free yeah" },
  { "time": 23032, "lyric": "내가 만든 쿠키" },
  { "time": 28072, "lyric": "너무 부드러우니" },
  { "time": 31070, "lyric": "자꾸만 떠오르니" },
  { "time": 35026, "lyric": "널 choco-chip으로" },
  { "time": 36054, "lyric": "Sprinkle로" },
  { "time": 37042, "lyric": "입맛 버리게 만들고 싶어" },
  { "time": 39058, "lyric": "숨기고 있지만 널 더 보고 싶어" },
  { "time": 42049, "lyric": "If you want it" },
  { "time": 43038, "lyric": "You can get it" },
  { "time": 44014, "lyric": "If you want it" },
  { "time": 44092, "lyric": "네 목소리를 또 들려줘 boy" },
  { "time": 47067, "lyric": "식사는 없어" },
  { "time": 49038, "lyric": "Bet you know" },
  { "time": 50002, "lyric": "Bet you know" },
  { "time": 50078, "lyric": "음료는 없어" },
  { "time": 52018, "lyric": "Bet you know" },
  { "time": 52090, "lyric": "Bet you know" },
  { "time": 54023, "lyric": "달콤한 맛만 디저트만 만" },
  { "time": 57038, "lyric": "원하게 될 거 알잖아" },
  { "time": 59071, "lyric": "식사는 없어" },
  { "time": 61017, "lyric": "Bet you know" },
  { "time": 61090, "lyric": "Bet you know" },
  { "time": 62074, "lyric": "음료는 없어" },
  { "time": 64012, "lyric": "Bet you know" },
  { "time": 64089, "lyric": "Bet you know" },
  { "time": 66022, "lyric": "달콤한 맛만 디저트만 만" },
  { "time": 69035, "lyric": "원하게 될 거 알잖아" },
  { "time": 71071, "lyric": "내가 만든 쿠키" },
  { "time": 76086, "lyric": "너에게는 독이지" },
  { "time": 79074, "lyric": "네 마음속을 녹이지" },
  { "time": 81069, "lyric": "So good yeah" },
  { "time": 83067, "lyric": "Looking at my cookie" },
  { "time": 88000, "lyric": "역시 향기부터 다르니" },
  { "time": 90082, "lyric": "Taste it" },
  { "time": 91083, "lyric": "한입은 모자라니" },
  { "time": 95008, "lyric": "널 choco-chip으로" },
  { "time": 96053, "lyric": "Sprinkle로" },
  { "time": 97007, "lyric": "정신 못 차리게 만들고 싶어" },
  { "time": 99064, "lyric": "숨기고 있지만 널 더 보고 싶어" },
  { "time": 102055, "lyric": "If you want it" },
  { "time": 103039, "lyric": "You can get it" },
  { "time": 104014, "lyric": "If you want it" },
  { "time": 104097, "lyric": "네 목소리를 또 들려줘 boy" },
  { "time": 107070, "lyric": "식사는 없어" },
  { "time": 109036, "lyric": "Bet you know" },
  { "time": 110001, "lyric": "Bet you know" },
  { "time": 110080, "lyric": "음료는 없어" },
  { "time": 112017, "lyric": "Bet you know" },
  { "time": 112094, "lyric": "Bet you know" },
  { "time": 114019, "lyric": "달콤한 맛만 디저트만 만" },
  { "time": 117033, "lyric": "원하게 될 거 알잖아" },
  { "time": 119069, "lyric": "식사는 없어" },
  { "time": 121018, "lyric": "Bet you know" },
  { "time": 121091, "lyric": "Bet you know" },
  { "time": 122075, "lyric": "음료는 없어" },
  { "time": 124014, "lyric": "Bet you know" },
  { "time": 124090, "lyric": "Bet you know" },
  { "time": 125088, "lyric": "달콤한 맛만 디저트만 만" },
  { "time": 129033, "lyric": "원하게 될 거 알잖아" },
  { "time": 132051, "lyric": "Bet you know" },
  { "time": 133019, "lyric": "Bet you know" },
  { "time": 133095, "lyric": "Bet you know I" },
  { "time": 135065, "lyric": "레시핀 없어 딴 데서는 못 찾아" },
  { "time": 138010, "lyric": "Take it" },
  { "time": 138064, "lyric": "Don't break it" },
  { "time": 139043, "lyric": "I wanna see you taste it" },
  { "time": 141014, "lyric": "Sugar got sugar" },
  { "time": 142051, "lyric": "난 재료 안 아끼지" },
  { "time": 144068, "lyric": "Bet you know" },
  { "time": 145038, "lyric": "Bet you know" },
  { "time": 145098, "lyric": "Bet you know I" },
  { "time": 147056, "lyric": "네 다이어트를 망치고 싶어 나" },
  { "time": 150025, "lyric": "Take it" },
  { "time": 150076, "lyric": "Don't break it" },
  { "time": 151046, "lyric": "I wanna see you taste it" },
  { "time": 153015, "lyric": "Sugar got sugar" },
  { "time": 154044, "lyric": "Bet you want some" },
  { "time": 155090, "lyric": "Yeah yo" },
  { "time": 161090, "lyric": "Yeah yo" },
  { "time": 163024, "lyric": "Mm mm" },
  { "time": 167088, "lyric": "Yeah yo" },
  { "time": 170095, "lyric": "Yeah yo" },
  { "time": 175027, "lyric": "Mm mm" },
  { "time": 179058, "lyric": "내가 만든 쿠키" },
  { "time": 181002, "lyric": "Come and take a lookie" },
  { "time": 182044, "lyric": "우리 집에만 있지 놀러 와" },
  { "time": 185054, "lyric": "얼마든지 굽지" },
  { "time": 187001, "lyric": "그런데 너 충치" },
  { "time": 188051, "lyric": "생겨도 난 몰라" },
  { "time": 191045, "lyric": "내가 만든 쿠키" },
  { "time": 192084, "lyric": "Come and take a lookie" },
  { "time": 194038, "lyric": "우리 집에만 있지 놀러 와" },
  { "time": 197062, "lyric": "얼마든지 굽지" },
  { "time": 199001, "lyric": "그런데 너 충치" },
  { "time": 200047, "lyric": "생겨도 난 몰라" }
]


`,GC="/assets/Ditto%20-%20250%20Remix-C6lqyMPC.webp",VC="/assets/Supernatural%20-%20250%20Remix-BYtHv05p.webp",kC="/assets/OMG%20-%20FRNK%20Remix-y_1e315V.webp",jC="/assets/OMG%20-%20FRNK%20Remix-y_1e315V.webp",XC="/assets/OMG%20-%20FRNK%20Remix-y_1e315V.webp",WC="/assets/OMG%20-%20FRNK%20Remix-y_1e315V.webp",Aa=(window.__NJZ_SONGS__&&Array.isArray(window.__NJZ_SONGS__)&&window.__NJZ_SONGS__.length?window.__NJZ_SONGS__:[{id:"ditto",title:"Ditto - 250 Remix",artist:"NewJeans",album:"OMG",audioSrc:CC,lrcSrc:PC,coverUrl:GC,themeColor:"#F05A66",cubesTheme:"pink"},{id:"supernatural",title:"Supernatural - 250 Remix",artist:"NewJeans",album:"Supernatural",audioSrc:DC,lrcSrc:IC,coverUrl:VC,themeColor:"#656EE5",cubesTheme:"purple"},{id:"attention",title:"Attention - 250 Remix",artist:"NewJeans",album:"New Jeans",audioSrc:NC,lrcSrc:zC,coverUrl:kC,themeColor:"#6BC567",cubesTheme:"green"},{id:"hypeboy",title:"Hype Boy - 250 Remix",artist:"NewJeans",album:"New Jeans",audioSrc:LC,lrcSrc:FC,coverUrl:jC,themeColor:"#6BC567",cubesTheme:"green"},{id:"omg",title:"OMG - FRNK Remix",artist:"NewJeans",album:"OMG",audioSrc:UC,lrcSrc:BC,coverUrl:XC,themeColor:"#6BC567",cubesTheme:"green"},{id:"cookie",title:"Cookie - FRNK Remix",artist:"NewJeans",album:"New Jeans",audioSrc:OC,lrcSrc:HC,coverUrl:WC,themeColor:"#6BC567",cubesTheme:"green"}]),u_=s=>Aa.find(e=>e.id===s),f_=()=>Aa[0],YC=s=>{const e=(s??"").replace(/^\uFEFF/,"").trim();if(e.startsWith("["))try{const c=JSON.parse(e);if(Array.isArray(c)){const u=c.map((f,m)=>{const h=Number(f==null?void 0:f.time),x=(f==null?void 0:f.lyric)??(f==null?void 0:f.text)??"";return Number.isFinite(h)?{time:h/1e3,text:String(x??""),_i:m}:null}).filter(f=>!!f).sort((f,m)=>f.time-m.time||f._i-m._i).map(({time:f,text:m})=>({time:f,text:m}));return u.length===0?[]:u}}catch{}const n=e.split(`
`),a=[],o=/\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/;for(const c of n){const u=c.trim();if(!u)continue;const f=o.exec(u);if(!f)continue;const m=parseInt(f[1],10),h=parseInt(f[2],10),x=f[3]||"0",g=parseFloat(`0.${x}`),v=m*60+h+g,y=u.replace(o,"").trim();a.push({time:v,text:y})}return a.sort((c,u)=>c.time-u.time)},Qs=26,qC=Qs*2,Nh=2800,ZC=48;function KC(s){return Math.max(0,Math.min(1,s))}const Lh=({lyrics:s,currentIndex:e,align:n,paddingClassName:a,widthStyle:o,inactiveColor:c,activeColor:u,inactiveOpacity:f,activeOpacity:m})=>{const h=ae.useRef(null),x=ae.useRef(null),[g,v]=ae.useState(0),[y,M]=ae.useState([]);ae.useLayoutEffect(()=>{const k=h.current;if(!k)return;const W=()=>v(k.clientWidth);W();const J=typeof ResizeObserver<"u"?new ResizeObserver(()=>W()):null;return J==null||J.observe(k),window.addEventListener("resize",W),()=>{J==null||J.disconnect(),window.removeEventListener("resize",W)}},[]),ae.useLayoutEffect(()=>{var J;const k=x.current;if(!k||g<=0)return;if(!s||s.length===0){M([]);return}const W=new Array(s.length).fill(1);for(let ie=0;ie<s.length;ie++){k.textContent=((J=s[ie])==null?void 0:J.text)??"";const I=(k.scrollHeight??0)>Qs+1;W[ie]=I?2:1}M(W)},[s,g]);const E=y.length===s.length?y:s.map(()=>1),S=ae.useMemo(()=>{const k=new Array(E.length+1);k[0]=0;for(let W=0;W<E.length;W++)k[W+1]=k[W]+E[W]*Qs;return k},[E]),_="text-[16px] font-normal transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",L=n==="left"?"text-left":"text-center",D=a??"",O=e>=0?Math.min(e,Math.max(0,s.length-1)):-1,F=O>=0?E[O]===2:!1,P=O>0?E[O-1]===2:!1,B=O<0?0:F||O===0||P?O:Math.max(0,O-1),q=S[B]??0,w=O<0||F?-1:O===0||P?O+1:O-1,A={position:"absolute",left:0,top:0,width:"100%",lineHeight:`${Qs}px`,fontSize:"16px",fontWeight:400,whiteSpace:"normal",overflowWrap:"anywhere",wordBreak:"break-word",height:"auto",pointerEvents:"none",opacity:0},H=k=>({display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:k,overflow:"hidden",whiteSpace:"normal",overflowWrap:"anywhere",wordBreak:"break-word"});return N.jsxs("div",{ref:h,className:`relative overflow-hidden ${L}`,style:{height:`${qC}px`,...o??{}},children:[N.jsx("div",{ref:x,"aria-hidden":"true",className:`${D}`,style:A}),N.jsx("div",{className:`transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${D}`,style:{transform:`translateY(-${q}px)`},children:s.map((k,W)=>{const J=E[W]??1,ie=J*Qs,I=W===O,Z=I?m:W===w?f:0,pe=I?u:c;return N.jsx("div",{className:_,style:{height:`${ie}px`,lineHeight:`${Qs}px`,opacity:KC(Z),color:pe,...H(J)},children:k.text},W)})})]})};[ay,ry,sy,oy,ly,cy].forEach(s=>{const e=new Image;e.src=s});const QC=()=>{const[s,e]=ae.useState(!1),[n,a]=ae.useState("cubes"),[o,c]=ae.useState(0),[u,f]=ae.useState(0),[m,h]=ae.useState(!1),[x,g]=ae.useState(!1),v=m||x,[y,M]=ae.useState(f_().id),[E,S]=ae.useState(.8),[_,L]=ae.useState(null),[D,O]=ae.useState([]),[F,P]=ae.useState(!1),[B,q]=ae.useState(!1),[w,A]=ae.useState(!1),[H,k]=ae.useState(!1),W=ae.useRef(null),J=ae.useRef(null),ie=ae.useRef(null),I=ae.useRef(0),Y=ae.useRef(-1),[Z,pe]=ae.useState(0),[Me,z]=ae.useState(()=>typeof window<"u"?window.innerWidth<768:!1),[ee,he]=ae.useState(null),[Ee,Be]=ae.useState(null);ae.useEffect(()=>{const j=window.visualViewport,xe=()=>{const De=(j==null?void 0:j.height)??window.innerHeight;document.documentElement.style.setProperty("--app-height",`${Math.round(De)}px`)};return xe(),window.addEventListener("resize",xe),j==null||j.addEventListener("resize",xe),j==null||j.addEventListener("scroll",xe),()=>{window.removeEventListener("resize",xe),j==null||j.removeEventListener("resize",xe),j==null||j.removeEventListener("scroll",xe)}},[]),ae.useEffect(()=>{const j=window.visualViewport,xe=()=>{z(window.innerWidth<768)};return xe(),window.addEventListener("resize",xe),j==null||j.addEventListener("resize",xe),()=>{window.removeEventListener("resize",xe),j==null||j.removeEventListener("resize",xe)}},[]),ae.useLayoutEffect(()=>{const j=ie.current;if(!j)return;const xe=()=>{const lt=j.getBoundingClientRect(),xt=Math.max(0,Math.round(lt.height));pe(xt)};xe();const De=typeof ResizeObserver<"u"?new ResizeObserver(()=>xe()):null;De==null||De.observe(j);const Ze=window.visualViewport;return Ze==null||Ze.addEventListener("resize",xe),Ze==null||Ze.addEventListener("scroll",xe),window.addEventListener("resize",xe),()=>{De==null||De.disconnect(),Ze==null||Ze.removeEventListener("resize",xe),Ze==null||Ze.removeEventListener("scroll",xe),window.removeEventListener("resize",xe)}},[]);const te=ae.useMemo(()=>u_(y)||f_(),[y]),me=Math.max(0,Z)+12+(Me?ZC:0),He=ae.useMemo(()=>{const j=te.title,xe=j.match(/^(.*?)\s*-\s*(.*Remix)$/i);if(xe){const De=xe[1].trim(),Ze=xe[2].replace(/\s+/g,"");return`${De}(${Ze}) - ${te.artist}`}return`${j} - ${te.artist}`},[te]),Ge=ae.useMemo(()=>D.findIndex((j,xe)=>{const De=D[xe+1];return o>=j.time&&(!De||o<De.time)}),[D,o]),{currentLyric:qe,prevLyric:Ke}=ae.useMemo(()=>({currentLyric:Ge!==-1?D[Ge].text:"",prevLyric:Ge>0?D[Ge-1].text:""}),[D,Ge]),[Te,Je]=ae.useState(()=>{const j=localStorage.getItem("particleParams");if(j)try{return JSON.parse(j)}catch(xe){console.error("Failed to parse particle params",xe)}return{density:2,baseSize:2,amplitude:2.1,speed:1.5}}),[st,G]=ae.useState(()=>{const j={height:.9,spread:1.5,damping:.25,showRabbits:!0,showHearts:!0},xe=localStorage.getItem("cubesParams");if(xe)try{const De=JSON.parse(xe);return{...j,...De}}catch(De){console.error("Failed to parse cubes params",De)}return j}),[nt,rt]=ae.useState(()=>{const j=localStorage.getItem("powerpuffParams");if(j)try{const xe=JSON.parse(j);return{...R0,...xe}}catch(xe){console.error("Failed to parse powerpuff params",xe)}return R0}),[it,Fe]=ae.useState(()=>{const j=localStorage.getItem("vinylParams");if(j)try{return JSON.parse(j)}catch(xe){console.error("Failed to parse vinyl params",xe)}return uy});ae.useEffect(()=>{localStorage.setItem("cubesParams",JSON.stringify(st))},[st]),ae.useEffect(()=>{localStorage.setItem("vinylParams",JSON.stringify(it))},[it]),ae.useEffect(()=>{localStorage.setItem("powerpuffParams",JSON.stringify(nt))},[nt]),ae.useEffect(()=>{localStorage.setItem("particleParams",JSON.stringify(Te))},[Te]),ae.useEffect(()=>{te.lrcSrc&&O(YC(te.lrcSrc))},[te]);const Et=j=>{if(!u_(j)||j===y)return;const De=U.current?!U.current.paused:s,Ze=ye.current||De;ye.current=!1;const lt=performance.now();ze.current=lt,V.current=0,Le.current=null,ve.current=null,oe.current=null,Qe.current=!1,Re.current=0,se.current=0,Ye.current=lt,U.current&&(U.current.pause(),U.current.currentTime=0),Ie({invalidate:!0}),c(0),f(0),e(!1),g(!1),I.current=0,Y.current=-1,ke.current=Ze,M(j)},tt=()=>{const j=Aa.findIndex(De=>De.id===y),xe=j<=0?Aa.length-1:j-1;Et(Aa[xe].id)},ft=()=>{const j=Aa.findIndex(De=>De.id===y),xe=j>=Aa.length-1?0:j+1;Et(Aa[xe].id)},U=ae.useRef(null),T=ae.useRef(null),$=ae.useRef(null),ve=ae.useRef(null),ue=ae.useRef(null),se=ae.useRef(0),Ye=ae.useRef(0),ke=ae.useRef(!1),ye=ae.useRef(!1),Qe=ae.useRef(!1),Re=ae.useRef(0),oe=ae.useRef(null),Le=ae.useRef(null),Ve=ae.useRef(0),_e=ae.useRef(!1),ze=ae.useRef(performance.now()),V=ae.useRef(0);ae.useEffect(()=>{_e.current=m},[m]);const Pe=Nn.useCallback(()=>{if(!(!U.current||$.current))try{const j=window.AudioContext||window.webkitAudioContext,xe=new j,De=xe.createAnalyser();De.fftSize=256;const Ze=xe.createMediaElementSource(U.current);Ze.connect(De),De.connect(xe.destination),T.current=xe,$.current=Ze,L(De)}catch(j){console.error("Audio Context setup failed:",j)}},[]),we=Nn.useCallback(async()=>{T.current||Pe();const j=T.current;if((j==null?void 0:j.state)==="suspended")try{await j.resume()}catch{}},[Pe]),Ie=Nn.useCallback(j=>{const xe=U.current,De=ue.current;if(ve.current=null,De&&xe){try{xe.muted=De.prevMuted}catch{}ue.current={...De,active:!1,shouldResume:!1}}((j==null?void 0:j.invalidate)??!0)&&(Ve.current+=1),h(!1)},[]),Ne=Nn.useCallback((j,xe)=>{const De=U.current;if(!De)return null;const Ze=Ve.current+1;Ve.current=Ze;const lt=ue.current,xt=lt!=null&&lt.active?lt.prevMuted:De.muted;ue.current={id:Ze,targetTime:j,active:!0,shouldResume:xe||!De.paused,prevMuted:xt},Le.current={songId:y,time:j},h(!0),g(!1);try{De.muted=!0}catch{}return Ze},[y]),Ae=Nn.useCallback(j=>{const xe=ue.current;return j!==Ve.current||(xe==null?void 0:xe.id)!==j},[]),je=Nn.useCallback(j=>{const xe=U.current,De=ue.current;if(!xe||!De||!De.active||De.id!==Ve.current||(j==null?void 0:j.requestId)!=null&&De.id!==j.requestId)return!1;const Ze=Math.max(0,De.targetTime),lt=Number.isFinite(xe.currentTime)&&xe.currentTime>=Math.max(0,Ze-.35),bt=((j==null?void 0:j.forceResume)??!0)&&De.shouldResume?HTMLMediaElement.HAVE_FUTURE_DATA:HTMLMediaElement.HAVE_CURRENT_DATA,Ut=xe.readyState>=bt;if(!lt||!Ut)return!1;ue.current={...De,active:!1,shouldResume:!1},h(!1),g(!1);try{xe.muted=De.prevMuted}catch{}return((j==null?void 0:j.forceResume)??!0)&&De.shouldResume&&xe.paused&&(async()=>{try{Ye.current=performance.now(),await we(),await xe.play()}catch{}})(),!0},[we]);ae.useEffect(()=>{const j=U.current;if(!j)return;const xe=()=>{const bt=Number.isFinite(j.currentTime)?j.currentTime:0;oe.current=bt,ve.current=null,ke.current=!1,ye.current=!1,Ie({invalidate:!0});try{j.pause()}catch{}e(!1),g(!1);const Ut=T.current;Ut&&Ut.suspend().catch(()=>{})},De=()=>{const bt=oe.current;if(!(bt==null||!Number.isFinite(bt))){try{j.currentTime=bt}catch{}c(bt),I.current=bt}},Ze=()=>{document.hidden?xe():De()},lt=()=>xe(),xt=()=>De();return document.addEventListener("visibilitychange",Ze),window.addEventListener("pagehide",lt),window.addEventListener("pageshow",xt),()=>{document.removeEventListener("visibilitychange",Ze),window.removeEventListener("pagehide",lt),window.removeEventListener("pageshow",xt)}},[Ie]),ae.useEffect(()=>{const j=()=>{we()};return window.addEventListener("pointerdown",j,{once:!0}),window.addEventListener("keydown",j,{once:!0}),()=>{window.removeEventListener("pointerdown",j),window.removeEventListener("keydown",j)}},[we]),ae.useEffect(()=>{if(!ke.current)return;const j=U.current;if(!j)return;ke.current=!1,(async()=>{try{Ye.current=performance.now(),await we(),await j.play()}catch{}})()},[y,we]);const ct=Nn.useCallback(async()=>{const j=U.current;if(j)try{j.paused?(Ye.current=performance.now(),await we(),await j.play()):(Ie({invalidate:!0}),j.pause(),g(!1))}catch{}},[Ie,we]),ut=Nn.useCallback(async(j,xe,De)=>{const Ze=U.current;if(!Ze)return!1;const lt=performance.now(),xt=(De==null?void 0:De.epsilon)??.25,bt=(De==null?void 0:De.acceptPastTarget)??!1;for(;performance.now()-lt<xe;){const Ut=Ze.currentTime;if(Number.isFinite(Ut)){if(bt){if(Ut>=j-xt)return!0}else if(Math.abs(Ut-j)<=xt)return!0}await new Promise(qt=>setTimeout(qt,50))}return!1},[]),mt=Nn.useCallback(async(j,xe)=>{const De=U.current;if(!De)return!1;const Ze=performance.now();if(Qe.current||Ze<Re.current)return!1;Qe.current=!0,Re.current=Ze+5e3;const lt=Number.isFinite(De.duration)?De.duration:u,xt=K=>{const ce=Number.isFinite(lt)&&lt>0?Math.max(0,lt-.01):K;return Math.max(0,Math.min(K,ce))},bt=Number.isFinite(De.currentTime)?De.currentTime:0,Ut=xe==null?void 0:xe.targetTime,qt=Number.isFinite(Ut)?Ut:bt,_t=xt(qt),Pt=j==="seek"?_t:Math.max(0,_t-.05),fn=async()=>{try{await we()}catch{}try{De.pause()}catch{}try{De.currentTime=Pt}catch{}try{return Ye.current=performance.now(),await De.play(),await ut(Pt,400,{epsilon:.6,acceptPastTarget:!0})}catch{return!1}},gn=async()=>await new Promise(K=>{let ce=!1;const le=We=>{ce||(ce=!0,De.removeEventListener("canplay",ne),De.removeEventListener("loadedmetadata",ne),De.removeEventListener("error",Xe),K(We))},ne=()=>le(!0),Xe=()=>le(!1);De.addEventListener("canplay",ne,{once:!0}),De.addEventListener("loadedmetadata",ne,{once:!0}),De.addEventListener("error",Xe,{once:!0}),setTimeout(()=>le(!0),1500)}),Tn=async()=>{try{await we()}catch{}try{De.pause()}catch{}try{const K=De.currentSrc||De.src;K&&(De.src=K),De.load(),await gn();const ce=Number.isFinite(De.duration)?De.duration:lt,le=Math.max(0,Math.min(_t,Number.isFinite(ce)&&ce>0?ce-.01:_t));try{De.currentTime=le}catch{}return Ye.current=performance.now(),await De.play(),await ut(le,600,{epsilon:.6,acceptPastTarget:!0})}catch{return!1}};let C=!1;return C=await fn(),C||(C=await Tn()),Qe.current=!1,C},[we,ut,u]),Gt=Nn.useCallback(async(j,xe)=>{const De=U.current;if(!De)return;const Ze=(xe==null?void 0:xe.autoPlay)??!0,lt=performance.now();se.current=lt;const xt=Number.isFinite(De.duration)?De.duration:u,bt=Math.max(0,Math.min(j,Number.isFinite(xt)&&xt>0?xt:j)),Ut=Ne(bt,Ze);if(Ut==null)return;const qt=()=>Ae(Ut);ve.current={targetTime:bt,startedAtMs:lt,deadlineAtMs:lt+1200},c(bt),I.current=bt;const _t=async()=>{if(qt())return!1;try{await we()}catch{}if(qt())return!1;try{De.currentTime=bt}catch{}if(qt())return!1;if(Ze)try{Ye.current=performance.now(),await De.play()}catch{}if(qt())return!1;const fn=await ut(bt,900,{epsilon:.6,acceptPastTarget:!0});return qt()?!1:fn};let Pt=await _t();qt()||!Pt&&(await mt("seek",{targetTime:bt}),qt()||(Pt=await _t(),qt()))||(ve.current=null,Pt?(I.current=bt,je({requestId:Ut,forceResume:!0})):(I.current=bt,c(bt),h(!0)))},[Ne,je,u,we,Ae,mt,ut]),gt=Nn.useCallback(j=>{const xe=U.current;if(!xe||!Number.isFinite(j))return;Ve.current+=1;const De=Number.isFinite(xe.duration)?xe.duration:u,Ze=Math.max(0,Math.min(j,Number.isFinite(De)&&De>0?De:j)),lt=performance.now();Le.current={songId:y,time:Ze},ve.current={targetTime:Ze,startedAtMs:lt,deadlineAtMs:lt+300},se.current=lt,I.current=Ze,c(Ze),g(!1);try{xe.currentTime=Ze}catch{}},[y,u]),Fn=()=>{var Ut;const j=U.current;if(!j)return;const xe=j.currentTime,De=(Ut=ue.current)!=null&&Ut.active?ue.current:null;if(De){const qt=ve.current;if(qt)if(performance.now()<=qt.deadlineAtMs){if(Number.isFinite(xe)&&Math.abs(xe-qt.targetTime)>2)return}else ve.current=null;if(Number.isFinite(xe)&&xe<De.targetTime-2)return;je({requestId:De.id,forceResume:!0})}else x&&Number.isFinite(xe)&&xe>.2&&g(!1);const Ze=D.findIndex((qt,_t)=>{const Pt=D[_t+1];return xe>=qt.time&&(!Pt||xe<Pt.time)}),lt=Ze!==Y.current,bt=Math.abs(xe-I.current)>=1;(lt||bt)&&(Y.current=Ze,I.current=xe,c(xe))},Un=()=>{const j=U.current;if(!j)return;const xe=j.duration;f(xe);const De=Le.current;if(De){if(De.songId!==y){Le.current=null;return}!Number.isFinite(xe)||xe<=0||De.time>Math.max(0,xe-.01)&&(Le.current=null)}},bn=j=>{Gt(j,{autoPlay:!0})},Tt=()=>{const j=U.current;if(!j)return;const xe=performance.now();if(xe-ze.current<Nh||xe-V.current<800)return;const De=Number.isFinite(j.duration)?j.duration:u,Ze=Number.isFinite(j.currentTime)?j.currentTime:o;!Number.isFinite(De)||De<=0||!Number.isFinite(Ze)||Ze<Math.max(0,De-1.2)||(V.current=xe,Le.current=null,ve.current=null,ye.current=!0,ft())};return ae.useEffect(()=>{const j=U.current;if(!j)return;const xe=()=>{var _t;e(!0),(_t=ue.current)!=null&&_t.active||g(!1)},De=()=>{var _t;e(!1),g(!1),(_t=ue.current)!=null&&_t.active||h(!1)},Ze=()=>{var _t;j.paused||((_t=ue.current)!=null&&_t.active?h(!0):g(!0))},lt=()=>{var _t;j.paused||((_t=ue.current)!=null&&_t.active?h(!0):g(!0))},xt=()=>{const _t=ue.current;if(_t!=null&&_t.active){je({requestId:_t.id,forceResume:!0});return}g(!1)},bt=()=>{const _t=ue.current;if(_t!=null&&_t.active){je({requestId:_t.id,forceResume:!1});return}g(!1)},Ut=()=>{var _t;(_t=ue.current)!=null&&_t.active&&h(!0)},qt=()=>{const _t=ue.current;_t!=null&&_t.active&&je({requestId:_t.id,forceResume:!0})};return j.volume=E,j.addEventListener("play",xe),j.addEventListener("pause",De),j.addEventListener("waiting",Ze),j.addEventListener("stalled",lt),j.addEventListener("canplay",xt),j.addEventListener("playing",bt),j.addEventListener("seeking",Ut),j.addEventListener("seeked",qt),()=>{j.removeEventListener("play",xe),j.removeEventListener("pause",De),j.removeEventListener("waiting",Ze),j.removeEventListener("stalled",lt),j.removeEventListener("canplay",xt),j.removeEventListener("playing",bt),j.removeEventListener("seeking",Ut),j.removeEventListener("seeked",qt)}},[je,te,E]),ae.useEffect(()=>{const j=U.current;if(!j)return;let xe=Number.isFinite(j.currentTime)?j.currentTime:0,De=performance.now(),Ze=0;const lt=()=>{var $e;const Pt=performance.now(),fn=Pt-De;De=Pt;const gn=Pt-ze.current<Nh,Tn=Le.current,C=Tn&&Tn.songId===y&&Number.isFinite(Tn.time)?Tn.time:null;if(document.hidden||j.seeking){Ze=0,xe=Number.isFinite(j.currentTime)?j.currentTime:0;return}const K=Pt-se.current<1500,ce=Pt-Ye.current<1500,le=ve.current,ne=le?Pt<=le.deadlineAtMs:!1;if(gn||K||ce||ne||($e=ue.current)!=null&&$e.active||_e.current){Ze=0,xe=Number.isFinite(j.currentTime)?j.currentTime:0;return}if(j.paused){Ze=0,xe=Number.isFinite(j.currentTime)?j.currentTime:0;return}const Xe=Number.isFinite(j.currentTime)?j.currentTime:0;if(Xe>xe+.02){Ze=0,xe=Xe;return}Ze+=fn,Ze>=1500&&(Ze=0,C!=null?mt("watchdog",{targetTime:C}):mt("watchdog"))},xt=window.setInterval(lt,250),bt=()=>{var Tn;if(performance.now()-ze.current<Nh||j.paused||(Tn=ue.current)!=null&&Tn.active||_e.current)return;const fn=Le.current,gn=fn&&fn.songId===y&&Number.isFinite(fn.time)?fn.time:null;gn!=null?mt("watchdog",{targetTime:gn}):mt("watchdog")},Ut=()=>{bt()},qt=()=>{bt()},_t=()=>{bt()};return j.addEventListener("waiting",Ut),j.addEventListener("stalled",qt),j.addEventListener("error",_t),()=>{window.clearInterval(xt),j.removeEventListener("waiting",Ut),j.removeEventListener("stalled",qt),j.removeEventListener("error",_t)}},[y,mt]),ae.useEffect(()=>{const j=()=>{P(!1),W.current&&clearTimeout(W.current),W.current=setTimeout(()=>{P(!0)},4e3)};return window.addEventListener("mousemove",j),j(),()=>{window.removeEventListener("mousemove",j),W.current&&clearTimeout(W.current)}},[]),ae.useLayoutEffect(()=>{if(n!=="vinyl")return;const j=()=>window.innerWidth<1024,xe=()=>F?10:12,De=()=>{if(!j()){he(null),Be(null);return}if(!J.current)return;const bt=J.current.getBoundingClientRect(),Ut=Math.max(0,window.innerHeight-bt.bottom),qt=Math.round(Math.min(72,Math.max(18,Ut*.18))),_t=Math.round(bt.bottom+qt),Pt=!F&&ie.current?Math.round(ie.current.getBoundingClientRect().top):null,fn=Pt!==null?Math.max(0,Pt-xe()):Math.max(0,window.innerHeight-xe()),gn=Math.max(0,fn-_t);he(_t),Be(gn)};De();const Ze=requestAnimationFrame(De),lt=()=>De();window.addEventListener("resize",lt);const xt=typeof ResizeObserver<"u"?new ResizeObserver(()=>De()):null;return xt&&(J.current&&xt.observe(J.current),ie.current&&xt.observe(ie.current)),()=>{cancelAnimationFrame(Ze),window.removeEventListener("resize",lt),xt==null||xt.disconnect()}},[n,F,y]),N.jsxs("div",{className:"relative w-full bg-gray-50 overflow-hidden flex flex-col font-sans selection:bg-[#ff4d6a] selection:text-white",style:{height:"var(--app-height, 100vh)"},children:[N.jsx("div",{"aria-hidden":"true",className:`hidden sm:block absolute inset-0 z-0 bg-cover bg-center scale-125 origin-top-right transition-opacity transition-transform duration-1000 ${n==="vinyl"?"opacity-25":"opacity-0"}`,style:{backgroundImage:`url(${te.coverUrl})`,filter:"blur(120px)"}}),N.jsx("div",{"aria-hidden":"true",className:`absolute inset-0 z-0 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent transition-opacity duration-500 ${n==="vinyl"?"opacity-100":"opacity-0"}`}),N.jsx("audio",{ref:U,src:te.audioSrc,onTimeUpdate:Fn,onLoadedMetadata:Un,onEnded:Tt,crossOrigin:"anonymous",preload:"metadata"}),n==="particle"&&N.jsxs("div",{className:"absolute inset-0 z-10 overflow-hidden bg-black",children:[N.jsx($S,{analyser:_,coverUrl:te.coverUrl,isPlaying:s,params:Te}),N.jsx(tM,{params:Te,onChange:Je,isUIHidden:F}),F&&N.jsxs("div",{className:"absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center pointer-events-none animate-in fade-in duration-500",children:[N.jsx(Lh,{lyrics:D,currentIndex:Ge,align:"center",paddingClassName:"px-10",widthStyle:{width:"100%"},inactiveColor:"white",activeColor:"white",inactiveOpacity:.4,activeOpacity:.7}),N.jsx("div",{className:"text-[14px] text-white/30 font-normal mt-4 text-center",children:He})]})]}),n==="cubes"&&N.jsxs("div",{className:"absolute inset-0 z-10 overflow-hidden",children:[N.jsx(iR,{analyser:_,isPlaying:s,params:st,colorTheme:te.cubesTheme,uiBottomInsetPx:me}),N.jsx(rR,{params:st,onChange:G,isUIHidden:F}),F&&N.jsxs("div",{className:"absolute bottom-6 md:bottom-8 lg:bottom-12 left-0 right-0 lg:left-12 lg:right-auto z-20 flex flex-col items-center lg:items-start pointer-events-none animate-in fade-in duration-500",children:[N.jsx("div",{className:"w-full lg:hidden",children:N.jsx(Lh,{lyrics:D,currentIndex:Ge,align:"center",paddingClassName:"px-10",widthStyle:{width:"100%"},inactiveColor:"black",activeColor:te.themeColor,inactiveOpacity:.4,activeOpacity:1})}),N.jsx("div",{className:"hidden lg:block",children:N.jsx(Lh,{lyrics:D,currentIndex:Ge,align:"left",widthStyle:{width:"min(520px, calc(100vw - 96px))"},inactiveColor:"black",activeColor:te.themeColor,inactiveOpacity:.4,activeOpacity:1})}),N.jsx("div",{className:"text-[14px] text-black/20 font-normal mt-4 text-center lg:text-left",children:He})]})]}),n==="powerpuff"&&N.jsxs("div",{className:"absolute inset-0 z-10 overflow-hidden",children:[N.jsx(bC,{analyser:_,isPlaying:s,params:nt,lyricLine:qe,songInfo:He}),N.jsx(SC,{params:nt,setParams:rt,isUIHidden:F}),N.jsx("div",{className:`absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-500 ${F?"opacity-0":"opacity-100"}`,style:{background:"linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)"}})]}),n==="vinyl"&&N.jsxs("div",{className:"relative z-10 flex-1 min-h-0",children:[N.jsx("div",{className:"absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-visible",children:N.jsx("div",{ref:J,className:"lg:absolute lg:top-0 lg:right-0 lg:-translate-y-[25%] lg:translate-x-[35%]",children:N.jsx($1,{coverUrl:te.coverUrl,isPlaying:s,vinylSpeed:it.vinylSpeed,rabbitSpeed:it.rabbitSpeed})})}),N.jsxs("div",{className:"relative z-10 h-full flex flex-col lg:flex-row w-full px-6 lg:pl-40 lg:pr-0 pt-12 pb-10",children:[N.jsxs("div",{className:"w-full lg:w-5/12 flex flex-col h-full lg:pr-8 mt-4 items-center lg:items-start",children:[N.jsxs("div",{className:"mb-6 flex-shrink-0 text-center lg:text-left relative -top-[10px] sm:top-0",children:[N.jsx("div",{className:"flex items-center justify-center lg:justify-start gap-3 mb-2",children:N.jsx("h1",{className:"text-[18px] lg:text-3xl font-bold text-gray-900 tracking-tight leading-tight",children:te.title})}),N.jsx("div",{className:"flex items-center justify-center lg:justify-start gap-2 text-gray-600 text-sm lg:text-lg mb-5 font-normal",children:N.jsx("span",{children:te.artist})})]}),N.jsx("div",{className:"hidden lg:block lg:flex-1 min-h-0 relative lg:mb-8 overflow-hidden w-full",children:N.jsx(kd,{lyrics:D,currentTime:o,onLyricClick:bn,themeColor:te.themeColor})})]}),N.jsx("div",{className:"hidden lg:block lg:w-7/12"}),N.jsx(sR,{params:it,onChange:Fe,isUIHidden:F})]}),N.jsx("div",{className:"lg:hidden absolute left-0 right-0 z-10 px-6 text-center overflow-hidden transition-all duration-500 cursor-pointer",style:{top:ee??void 0,maxHeight:Ee??void 0},onClick:()=>!F&&k(!0),children:N.jsx(kd,{lyrics:D,currentTime:o,onLyricClick:F?bn:void 0,compact:F,maxLines:F?4:1,themeColor:te.themeColor})})]}),oS(n)&&N.jsx("div",{className:"flex-1"}),n==="vinyl"&&F&&N.jsx("div",{className:"fixed bottom-4 left-0 right-0 z-10 flex justify-center pointer-events-none",children:N.jsx("div",{className:"w-full"})}),N.jsxs("div",{ref:ie,className:`relative z-20 flex-shrink-0 w-full px-0 transition-all duration-500 ease-in-out ${F?"opacity-0 translate-y-full pointer-events-none":"opacity-100 translate-y-0"}`,children:[n==="vinyl"&&!F&&null,N.jsx(QS,{isPlaying:s,isLoading:v,onPlayPause:ct,currentTime:o,duration:u,onSeek:bn,onScrub:gt,theme:n,currentSongId:y,onSongChange:j=>{Et(j),q(!1)},isPlaylistOpen:B,onTogglePlaylist:()=>q(j=>!j),isThemeOpen:w,onToggleTheme:()=>A(j=>!j),onSkipPrev:tt,onSkipNext:ft,coverUrl:te.coverUrl,songTitle:te.title,artistName:te.artist})]}),N.jsx(MC,{isOpen:B,darkUI:Uh(n),songs:Aa,currentSongId:y,isPlaying:s,onClose:()=>q(!1),onPlayPause:ct,onSelectSong:j=>{Et(j)}}),N.jsx(RC,{isOpen:w,darkUI:Uh(n),currentTheme:n,onClose:()=>A(!1),onSelectTheme:a}),H&&N.jsxs("div",{className:"fixed inset-0 z-50 lg:hidden",children:[N.jsx("div",{className:"absolute inset-0 backdrop-blur-xl bg-white/70",onClick:()=>k(!1)}),N.jsx("button",{onClick:()=>k(!1),className:"absolute top-6 right-6 z-10 p-2",children:N.jsx(Qr,{className:"w-5 h-5 text-gray-400"})}),N.jsx("div",{className:"relative z-0 h-full w-full px-6 pt-16 pb-8",children:N.jsx(kd,{lyrics:D,currentTime:o,onLyricClick:bn,themeColor:te.themeColor,variant:"fullscreen"})})]})]})},{slice:JC,forEach:$C}=[];function eD(s){return $C.call(JC.call(arguments,1),e=>{if(e)for(const n in e)s[n]===void 0&&(s[n]=e[n])}),s}function tD(s){return typeof s!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(n=>n.test(s))}const d_=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,nD=function(s,e){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(e);let c=`${s}=${o}`;if(a.maxAge>0){const u=a.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");c+=`; Max-Age=${Math.floor(u)}`}if(a.domain){if(!d_.test(a.domain))throw new TypeError("option domain is invalid");c+=`; Domain=${a.domain}`}if(a.path){if(!d_.test(a.path))throw new TypeError("option path is invalid");c+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");c+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(c+="; Partitioned"),c},h_={create(s,e,n,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+n*60*1e3)),a&&(o.domain=a),document.cookie=nD(s,e,o)},read(s){const e=`${s}=`,n=document.cookie.split(";");for(let a=0;a<n.length;a++){let o=n[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(e)===0)return o.substring(e.length,o.length)}return null},remove(s,e){this.create(s,"",-1,e)}};var iD={name:"cookie",lookup(s){let{lookupCookie:e}=s;if(e&&typeof document<"u")return h_.read(e)||void 0},cacheUserLanguage(s,e){let{lookupCookie:n,cookieMinutes:a,cookieDomain:o,cookieOptions:c}=e;n&&typeof document<"u"&&h_.create(n,s,a,o,c)}},aD={name:"querystring",lookup(s){var a;let{lookupQuerystring:e}=s,n;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let f=0;f<u.length;f++){const m=u[f].indexOf("=");m>0&&u[f].substring(0,m)===e&&(n=u[f].substring(m+1))}}return n}},rD={name:"hash",lookup(s){var o;let{lookupHash:e,lookupFromHashIndex:n}=s,a;if(typeof window<"u"){const{hash:c}=window.location;if(c&&c.length>2){const u=c.substring(1);if(e){const f=u.split("&");for(let m=0;m<f.length;m++){const h=f[m].indexOf("=");h>0&&f[m].substring(0,h)===e&&(a=f[m].substring(h+1))}}if(a)return a;if(!a&&n>-1){const f=c.match(/\/([a-zA-Z-]*)/g);return Array.isArray(f)?(o=f[typeof n=="number"?n:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let Zs=null;const p_=()=>{if(Zs!==null)return Zs;try{if(Zs=typeof window<"u"&&window.localStorage!==null,!Zs)return!1;const s="i18next.translate.boo";window.localStorage.setItem(s,"foo"),window.localStorage.removeItem(s)}catch{Zs=!1}return Zs};var sD={name:"localStorage",lookup(s){let{lookupLocalStorage:e}=s;if(e&&p_())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupLocalStorage:n}=e;n&&p_()&&window.localStorage.setItem(n,s)}};let Ks=null;const m_=()=>{if(Ks!==null)return Ks;try{if(Ks=typeof window<"u"&&window.sessionStorage!==null,!Ks)return!1;const s="i18next.translate.boo";window.sessionStorage.setItem(s,"foo"),window.sessionStorage.removeItem(s)}catch{Ks=!1}return Ks};var oD={name:"sessionStorage",lookup(s){let{lookupSessionStorage:e}=s;if(e&&m_())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(s,e){let{lookupSessionStorage:n}=e;n&&m_()&&window.sessionStorage.setItem(n,s)}},lD={name:"navigator",lookup(s){const e=[];if(typeof navigator<"u"){const{languages:n,userLanguage:a,language:o}=navigator;if(n)for(let c=0;c<n.length;c++)e.push(n[c]);a&&e.push(a),o&&e.push(o)}return e.length>0?e:void 0}},cD={name:"htmlTag",lookup(s){let{htmlTag:e}=s,n;const a=e||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(n=a.getAttribute("lang")),n}},uD={name:"path",lookup(s){var o;let{lookupFromPathIndex:e}=s;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(o=n[typeof e=="number"?e:0])==null?void 0:o.replace("/",""):void 0}},fD={name:"subdomain",lookup(s){var o,c;let{lookupFromSubdomainIndex:e}=s;const n=typeof e=="number"?e+1:1,a=typeof window<"u"&&((c=(o=window.location)==null?void 0:o.hostname)==null?void 0:c.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[n]}};let fy=!1;try{document.cookie,fy=!0}catch{}const dy=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];fy||dy.splice(1,1);const dD=()=>({order:dy,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:s=>s});class hy{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,n)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=eD(n,this.options||{},dD()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(iD),this.addDetector(aD),this.addDetector(sD),this.addDetector(oD),this.addDetector(lD),this.addDetector(cD),this.addDetector(uD),this.addDetector(fD),this.addDetector(rD)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,n=[];return e.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(n=n.concat(o))}}),n=n.filter(a=>a!=null&&!tD(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||n.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(e,this.options)}))}}hy.type="languageDetector";const hD={themes:"样式",playlist:"列表",close:"关闭",play:"播放",pause:"暂停",reset:"重置",language:"语言切换"},pD={powerpuff:"飞天小女警",cubes:"BNZ兔兔蹦床",particle:"粒子封面",vinyl:"涂鸦唱片"},mD={cubes_title:"方块效果控制",bounce_height:"跳跃高度",wave_spread:"波浪扩散",damping:"方块抖动程度",show_rabbits:"显示兔子",show_heart:"显示爱心",particle_title:"粒子效果控制",density:"密度",size:"大小",amplitude:"幅度",speed:"速度",fall_speed:"下落速度",air_resistance:"空气阻力",kick_sensitivity:"Kick 触发灵敏度",trail_length:"拖尾长度",vinyl_title:"涂鸦唱片控制",vinyl_speed:"唱片转速",rabbit_speed:"兔子转速",powerpuff_title:"飞天小女警设置",scene_speed:"场景移动速度",friction:"飞行摩擦力",bounce_strength:"弹跳力度",sensitivity:"飞行灵敏度"},gD={ui:hD,themes:pD,controls:mD},xD={themes:"Themes",playlist:"Playlist",close:"Close",play:"Play",pause:"Pause",reset:"Reset",language:"Language"},vD={powerpuff:"Powerpuff Girls",cubes:"BNZ Rabbit Trampoline",particle:"Particle Cover",vinyl:"Graffiti Vinyl"},_D={cubes_title:"Cubes Control",bounce_height:"Bounce Height",wave_spread:"Wave Spread",damping:"Sensitivity",show_rabbits:"Show Rabbits",show_heart:"Show Heart",particle_title:"Particle Control",density:"Density",size:"Size",amplitude:"Amplitude",speed:"Speed",fall_speed:"Fall Speed",air_resistance:"Air Resistance",kick_sensitivity:"Kick Sensitivity",trail_length:"Trail Length",vinyl_title:"Vinyl Control",vinyl_speed:"Vinyl Speed",rabbit_speed:"Rabbit Speed",powerpuff_title:"Powerpuff Settings",scene_speed:"Scene Speed",friction:"Friction",bounce_strength:"Bounce Strength",sensitivity:"Sensitivity"},yD={ui:xD,themes:vD,controls:_D};ni.use(hy).use(FS).init({resources:{zh:{translation:gD},en:{translation:yD}},fallbackLng:"zh",interpolation:{escapeValue:!1}});const py=document.getElementById("root");if(!py)throw new Error("Could not find root element to mount to");const bD=C1.createRoot(py);bD.render(N.jsx(Nn.StrictMode,{children:N.jsx(QC,{})}));
