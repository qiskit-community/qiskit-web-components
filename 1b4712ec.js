System.register(["./d583d10e.js"],(function(e){"use strict";var t,r,n,o,i,a,s,c,l,p,u,f;return{setters:[function(e){t=e.o,r=e.Z,n=e.c,o=e._,i=e.d,a=e.e,s=e.J,c=e.M,l=e.g,p=e.v,u=e.b,f=e.i}],execute:function(){var d=t.exports.createContext(),h=t.exports.createContext();function m(e){var r=e.children,n=t.exports.useState(null),o=n[0],i=n[1],a=t.exports.useRef(!1);t.exports.useEffect((function(){return function(){a.current=!0}}),[]);var s=t.exports.useCallback((function(e){a.current||i(e)}),[]);return t.exports.createElement(d.Provider,{value:o},t.exports.createElement(h.Provider,{value:s},r))}var g=function(e){return Array.isArray(e)?e[0]:e},v=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},y=function(e,t){if("function"==typeof e)return v(e,t);null!=e&&(e.current=t)},b=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},w="undefined"!=typeof window&&window.document&&window.document.createElement?t.exports.useLayoutEffect:t.exports.useEffect,O="top",x="bottom",C="right",T="left",k=[O,x,C,T],E=k.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),R=[].concat(k,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),P=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function H(e){return e instanceof j(e).Element||e instanceof Element}function M(e){return e instanceof j(e).HTMLElement||e instanceof HTMLElement}function L(e){return"undefined"!=typeof ShadowRoot&&(e instanceof j(e).ShadowRoot||e instanceof ShadowRoot)}var A={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];M(o)&&S(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});M(n)&&S(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function D(e){return e.split("-")[0]}function W(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function B(e){var t=W(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function U(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&L(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(e){return j(e).getComputedStyle(e)}function N(e){return["table","td","th"].indexOf(S(e))>=0}function X(e){return((H(e)?e.ownerDocument:e.document)||window.document).documentElement}function Y(e){return"html"===S(e)?e:e.assignedSlot||e.parentNode||(L(e)?e.host:null)||X(e)}function q(e){return M(e)&&"fixed"!==V(e).position?e.offsetParent:null}function F(e){for(var t=j(e),r=q(e);r&&N(r)&&"static"===V(r).position;)r=q(r);return r&&("html"===S(r)||"body"===S(r)&&"static"===V(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&M(e)&&"fixed"===V(e).position)return null;for(var r=Y(e);M(r)&&["html","body"].indexOf(S(r))<0;){var n=V(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function I(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var z=Math.max,_=Math.min,J=Math.round;function Z(e,t,r){return z(e,_(t,r))}function $(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,p=!0===l?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:J(J(t*n)/n)||0,y:J(J(r*n)/n)||0}}(i):"function"==typeof l?l(i):i,u=p.x,f=void 0===u?0:u,d=p.y,h=void 0===d?0:d,m=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),v=T,y=O,b=window;if(c){var w=F(r),k="clientHeight",E="clientWidth";w===j(r)&&"static"!==V(w=X(r)).position&&(k="scrollHeight",E="scrollWidth"),w=w,o===O&&(y=x,h-=w[k]-n.height,h*=s?1:-1),o===T&&(v=C,f-=w[E]-n.width,f*=s?1:-1)}var R,P=Object.assign({position:a},c&&K);return s?Object.assign({},P,((R={})[y]=g?"0":"",R[v]=m?"0":"",R.transform=(b.devicePixelRatio||1)<2?"translate("+f+"px, "+h+"px)":"translate3d("+f+"px, "+h+"px, 0)",R)):Object.assign({},P,((t={})[y]=g?h+"px":"",t[v]=m?f+"px":"",t.transform="",t))}var ee={passive:!0},te={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return te[e]}))}var ne={start:"end",end:"start"};function oe(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function ie(e){var t=j(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ae(e){return W(X(e)).left+ie(e).scrollLeft}function se(e){var t=V(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function ce(e){return["html","body","#document"].indexOf(S(e))>=0?e.ownerDocument.body:M(e)&&se(e)?e:ce(Y(e))}function le(e,t){var r;void 0===t&&(t=[]);var n=ce(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=j(n),a=o?[i].concat(i.visualViewport||[],se(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(le(Y(a)))}function pe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,t){return"viewport"===t?pe(function(e){var t=j(e),r=X(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+ae(e),y:s}}(e)):M(t)?function(e){var t=W(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):pe(function(e){var t,r=X(e),n=ie(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=z(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=z(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+ae(e),c=-n.scrollTop;return"rtl"===V(o||r).direction&&(s+=z(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(X(e)))}function fe(e,t,r){var n="clippingParents"===t?function(e){var t=le(Y(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0&&M(e)?F(e):e;return H(r)?t.filter((function(e){return H(e)&&U(e,r)&&"body"!==S(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=ue(e,r);return t.top=z(n.top,t.top),t.right=_(n.right,t.right),t.bottom=_(n.bottom,t.bottom),t.left=z(n.left,t.left),t}),ue(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function de(e){return e.split("-")[1]}function he(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?D(o):null,a=o?de(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case O:t={x:s,y:r.y-n.height};break;case x:t={x:s,y:r.y+r.height};break;case C:t={x:r.x+r.width,y:c};break;case T:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var l=i?I(i):null;if(null!=l){var p="y"===l?"height":"width";switch(a){case"start":t[l]=t[l]-(r[p]/2-n[p]/2);break;case"end":t[l]=t[l]+(r[p]/2-n[p]/2)}}return t}function me(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?"clippingParents":i,s=r.rootBoundary,c=void 0===s?"viewport":s,l=r.elementContext,p=void 0===l?"popper":l,u=r.altBoundary,f=void 0!==u&&u,d=r.padding,h=void 0===d?0:d,m=$("number"!=typeof h?h:G(h,k)),g="popper"===p?"reference":"popper",v=e.elements.reference,y=e.rects.popper,b=e.elements[f?g:p],w=fe(H(b)?b:b.contextElement||X(e.elements.popper),a,c),T=W(v),E=he({reference:T,element:y,strategy:"absolute",placement:o}),R=pe(Object.assign({},y,E)),P="popper"===p?R:T,S={top:w.top-P.top+m.top,bottom:P.bottom-w.bottom+m.bottom,left:w.left-P.left+m.left,right:P.right-w.right+m.right},j=e.modifiersData.offset;if("popper"===p&&j){var M=j[o];Object.keys(S).forEach((function(e){var t=[C,x].indexOf(e)>=0?1:-1,r=[O,x].indexOf(e)>=0?"y":"x";S[e]+=M[r]*t}))}return S}function ge(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,l=void 0===c?R:c,p=de(n),u=p?s?E:E.filter((function(e){return de(e)===p})):k,f=u.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,r){return t[r]=me(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[D(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}function ve(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ye(e){return[O,C,x,T].some((function(t){return e[t]>=0}))}function be(e,t,r){void 0===r&&(r=!1);var n,o,i=X(t),a=W(e),s=M(t),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!r)&&(("body"!==S(t)||se(i))&&(c=(n=t)!==j(n)&&M(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:ie(n)),M(t)?((l=W(t)).x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=ae(i))),{x:a.left+c.scrollLeft-l.x,y:a.top+c.scrollTop-l.y,width:a.width,height:a.height}}function we(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var Oe={placement:"bottom",modifiers:[],strategy:"absolute"};function xe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var Ce=function(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?Oe:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,p={state:s,setOptions:function(r){u(),s.options=Object.assign({},i,s.options,r),s.scrollParents={reference:H(e)?le(e):e.contextElement?le(e.contextElement):[],popper:le(t)};var o,a,l=function(e){var t=we(e);return P.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((o=[].concat(n,s.options.modifiers),a=o.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(a).map((function(e){return a[e]}))));return s.orderedModifiers=l.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:n});c.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,r=e.popper;if(xe(t,r)){s.rects={reference:be(t,F(r),"fixed"===s.options.strategy),popper:B(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,u=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:u,instance:p})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){u(),l=!0}};if(!xe(e,t))return p;function u(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(r).then((function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)})),p}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=j(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",r.update,ee)})),s&&c.addEventListener("resize",r.update,ee),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",r.update,ee)})),s&&c.removeEventListener("resize",r.update,ee)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=he({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,l={placement:D(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},A,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=R.reduce((function(e,r){return e[r]=function(e,t,r){var n=D(e),o=[T,O].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[T,C].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,l=r.padding,p=r.boundary,u=r.rootBoundary,f=r.altBoundary,d=r.flipVariations,h=void 0===d||d,m=r.allowedAutoPlacements,g=t.options.placement,v=D(g),y=c||(v!==g&&h?function(e){if("auto"===D(e))return[];var t=re(e);return[oe(e),t,oe(t)]}(g):[re(g)]),b=[g].concat(y).reduce((function(e,r){return e.concat("auto"===D(r)?ge(t,{placement:r,boundary:p,rootBoundary:u,padding:l,flipVariations:h,allowedAutoPlacements:m}):r)}),[]),w=t.rects.reference,k=t.rects.popper,E=new Map,R=!0,P=b[0],S=0;S<b.length;S++){var j=b[S],H=D(j),M="start"===de(j),L=[O,x].indexOf(H)>=0,A=L?"width":"height",W=me(t,{placement:j,boundary:p,rootBoundary:u,altBoundary:f,padding:l}),B=L?M?C:T:M?x:O;w[A]>k[A]&&(B=re(B));var U=re(B),V=[];if(i&&V.push(W[H]<=0),s&&V.push(W[B]<=0,W[U]<=0),V.every((function(e){return e}))){P=j,R=!1;break}E.set(j,V)}if(R)for(var N=function(e){var t=b.find((function(t){var r=E.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},X=h?3:1;X>0&&"break"!==N(X);X--);t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,l=r.rootBoundary,p=r.altBoundary,u=r.padding,f=r.tether,d=void 0===f||f,h=r.tetherOffset,m=void 0===h?0:h,g=me(t,{boundary:c,rootBoundary:l,padding:u,altBoundary:p}),v=D(t.placement),y=de(t.placement),b=!y,w=I(v),k="x"===w?"y":"x",E=t.modifiersData.popperOffsets,R=t.rects.reference,P=t.rects.popper,S="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,j={x:0,y:0};if(E){if(i||s){var H="y"===w?O:T,M="y"===w?x:C,L="y"===w?"height":"width",A=E[w],W=E[w]+g[H],U=E[w]-g[M],V=d?-P[L]/2:0,N="start"===y?R[L]:P[L],X="start"===y?-P[L]:-R[L],Y=t.elements.arrow,q=d&&Y?B(Y):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},$=J[H],G=J[M],K=Z(0,R[L],q[L]),Q=b?R[L]/2-V-K-$-S:N-K-$-S,ee=b?-R[L]/2+V+K+G+S:X+K+G+S,te=t.elements.arrow&&F(t.elements.arrow),re=te?"y"===w?te.clientTop||0:te.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,oe=E[w]+Q-ne-re,ie=E[w]+ee-ne;if(i){var ae=Z(d?_(W,oe):W,A,d?z(U,ie):U);E[w]=ae,j[w]=ae-A}if(s){var se="x"===w?O:T,ce="x"===w?x:C,le=E[k],pe=le+g[se],ue=le-g[ce],fe=Z(d?_(pe,oe):pe,le,d?z(ue,ie):ue);E[k]=fe,j[k]=fe-le}}t.modifiersData[n]=j}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=D(r.placement),c=I(s),l=[T,C].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return $("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,r),u=B(i),f="y"===c?O:T,d="y"===c?x:C,h=r.rects.reference[l]+r.rects.reference[c]-a[c]-r.rects.popper[l],m=a[c]-r.rects.reference[c],g=F(i),v=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=h/2-m/2,b=p[f],w=v-u[l]-p[d],E=v/2-u[l]/2+y,R=Z(b,E,w),P=c;r.modifiersData[n]=((t={})[P]=R,t.centerOffset=R-E,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&U(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=me(t,{elementContext:"reference"}),s=me(t,{altBoundary:!0}),c=ve(a,n),l=ve(s,o,i),p=ye(c),u=ye(l);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}),Te=[],ke=function(){},Ee=function(){return Promise.resolve(null)},Re=[];function Pe(e){var r=e.placement,n=void 0===r?"bottom":r,o=e.strategy,i=void 0===o?"absolute":o,a=e.modifiers,s=void 0===a?Re:a,c=e.referenceElement,l=e.onFirstUpdate,p=e.innerRef,u=e.children,h=t.exports.useContext(d),m=t.exports.useState(null),v=m[0],O=m[1],x=t.exports.useState(null),C=x[0],T=x[1];t.exports.useEffect((function(){y(p,v)}),[p,v]);var k=t.exports.useMemo((function(){return{placement:n,strategy:i,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:null!=C,options:{element:C}}])}}),[n,i,l,s,C]),E=function(e,r,n){void 0===n&&(n={});var o=t.exports.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Te},a=t.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],c=a[1],l=t.exports.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c({styles:b(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:b(r.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),p=t.exports.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[l,{name:"applyStyles",enabled:!1}])};return f(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),u=t.exports.useRef();return w((function(){u.current&&u.current.setOptions(p)}),[p]),w((function(){if(null!=e&&null!=r){var t=(n.createPopper||Ce)(e,r,p);return u.current=t,function(){t.destroy(),u.current=null}}}),[e,r,n.createPopper]),{state:u.current?u.current.state:null,styles:s.styles,attributes:s.attributes,update:u.current?u.current.update:null,forceUpdate:u.current?u.current.forceUpdate:null}}(c||h,v,k),R=E.state,P=E.styles,S=E.forceUpdate,j=E.update,H=t.exports.useMemo((function(){return{ref:O,style:P.popper,placement:R?R.placement:n,hasPopperEscaped:R&&R.modifiersData.hide?R.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:R&&R.modifiersData.hide?R.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:P.arrow,ref:T},forceUpdate:S||ke,update:j||Ee}}),[O,T,n,R,P,j,S]);return g(u)(H)}function Se(e){var r=e.children,n=e.innerRef,o=t.exports.useContext(h),i=t.exports.useCallback((function(e){y(n,e),v(o,e)}),[n,o]);return t.exports.useEffect((function(){return function(){return y(n,null)}})),t.exports.useEffect((function(){}),[o]),g(r)({ref:i})}var je=r.createContext({}),He=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},Me=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},Le=function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)},Ae=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,Le(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),i({},e,{style:i({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),i({},e,t.isTriggeredBy("hover")&&{onMouseEnter:He(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:He(t.props.hideTooltip,e.onMouseLeave)},{style:i({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}n(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},o.render=function(){var e=this.props,t=e.arrowProps,n=e.placement,o=e.tooltip;return r.createElement(je.Provider,{value:this.contextValue},o({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:n,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(t.exports.Component);Ae.contextType=je;var De=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=i({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),i({},e,t.isTriggeredBy("click")&&{onClick:He(t.clickToggle,e.onClick),onTouchEnd:He(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:He(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&i({onMouseEnter:He(t.showTooltip,e.onMouseEnter),onMouseLeave:He(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:He(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:He(t.showTooltip,e.onFocus),onBlur:He(t.hideTooltip,e.onBlur)})},t}n(t,e);var s=t.prototype;return s.componentWillUnmount=function(){this.clearScheduled()},s.render=function(){var e=this,t=this.props,n=t.children,s=t.tooltip,c=t.placement,l=t.trigger,p=t.getTriggerRef,u=t.modifiers,f=t.closeOnReferenceHidden,d=t.usePortal,h=t.portalContainer,g=t.followCursor,v=t.getTooltipRef,y=t.mutationObserverOptions,b=o(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),w=r.createElement(Pe,i({innerRef:v,placement:c,modifiers:[{name:"followCursor",enabled:g,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(u)},b),(function(t){var n=t.ref,o=t.style,a=t.placement,c=t.arrowProps,p=t.isReferenceHidden,u=t.update;if(g&&e.popperOffset){var d=e.state,h=d.pageX,m=d.pageY,v=e.popperOffset,b=v.width,w=v.height,O=h+b>window.pageXOffset+document.body.offsetWidth?h-b:h,x=m+w>window.pageYOffset+document.body.offsetHeight?m-w:m;o.transform="translate3d("+O+"px, "+x+"px, 0"}return r.createElement(Ae,i({arrowProps:c,closeOnReferenceHidden:f,isReferenceHidden:p,placement:a,update:u,style:o,tooltip:s,trigger:l,mutationObserverOptions:y},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:n}))}));return r.createElement(m,null,r.createElement(Se,{innerRef:p},(function(t){var r=t.ref;return n({getTriggerProps:e.getTriggerProps,triggerRef:r})})),this.getState()&&(d?a.exports.createPortal(w,h):w))},s.isControlled=function(){return void 0!==this.props.tooltipShown},s.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},s.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(t.exports.Component);function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}De.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:Me()?document.body:null,trigger:"hover",usePortal:Me(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var Be,Ue,Ve=s(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),Ne=c.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(Ve("top",n,-8,"auto"),"px"),top:"".concat(Ve("bottom",n,-8,"auto"),"px"),right:"".concat(Ve("left",n,-8,"auto"),"px"),left:"".concat(Ve("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(Ve("top",n,"0",8),"px"),borderTopWidth:"".concat(Ve("bottom",n,"0",8),"px"),borderRightWidth:"".concat(Ve("left",n,"0",8),"px"),borderLeftWidth:"".concat(Ve("right",n,"0",8),"px"),borderTopColor:Ve("top",n,t.color[r]||r||"light"===t.base?l(t.background.app):p(t.background.app),"transparent"),borderBottomColor:Ve("bottom",n,t.color[r]||r||"light"===t.base?l(t.background.app):p(t.background.app),"transparent"),borderLeftColor:Ve("left",n,t.color[r]||r||"light"===t.base?l(t.background.app):p(t.background.app),"transparent"),borderRightColor:Ve("right",n,t.color[r]||r||"light"===t.base?l(t.background.app):p(t.background.app),"transparent")}})),Xe=c.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?l(t.background.app):p(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),Ye=function(e){var t=e.placement,n=e.hasChrome,o=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return r.createElement(Xe,We({hasChrome:n,placement:t,ref:a},l,{color:c}),n&&r.createElement(Ne,We({placement:t,ref:s},i,{color:c})),o)};function qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Fe(){return(Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ze(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Ye.displayName="Tooltip",Ye.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var _e=u.document,Je=c.div(Be||(Be=ze(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),Ze=c.g(Ue||(Ue=ze(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),$e=e("WithTooltipPure",(function(e){var t=e.svg,n=e.trigger;e.closeOnClick;var o=e.placement,i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,l=e.tooltipShown,p=e.onVisibilityChange,u=Ie(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),f=t?Ze:Je;return r.createElement(De,{placement:o,trigger:n,modifiers:i,tooltipShown:l,onVisibilityChange:p,tooltip:function(e){var t=e.getTooltipProps,n=e.getArrowProps,o=e.tooltipRef,i=e.arrowRef,c=e.placement;return r.createElement(Ye,Fe({hasChrome:a,placement:c,tooltipRef:o,arrowRef:i,arrowProps:n()},t()),"function"==typeof s?s({onHide:function(){return p(!1)}}):s)}},(function(e){var t=e.getTriggerProps,n=e.triggerRef;return r.createElement(f,Fe({ref:n},t(),u),c)}))}));$e.displayName="WithTooltipPure",$e.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1},(function(t){return e({WithToolTipState:t,WithTooltip:t}),t}((function(e){var n=e.startOpen,o=e.onVisibilityChange,i=Ie(e,["startOpen","onVisibilityChange"]),a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return qe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?qe(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.exports.useState(n||!1),2),s=a[0],c=a[1],l=t.exports.useCallback((function(e){o&&!1===o(e)||c(e)}),[o]);return t.exports.useEffect((function(){var e=function(){return l(!1)};_e.addEventListener("keydown",e,!1);var t=Array.from(_e.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){_e.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),r.createElement($e,Fe({},i,{tooltipShown:s,onVisibilityChange:l}))}))).displayName="WithToolTipState"}}}));