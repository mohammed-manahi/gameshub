!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";function t(t){return"object"==typeof t&&"function"==typeof t.to&&"function"==typeof t.from}function e(t){t.parentElement.removeChild(t)}function n(t){t.preventDefault()}function r(t){return t.filter(function(t){return!this[t]&&(this[t]=!0)},{})}function i(t,e){return Math.round(t/e)*e}function o(t,e){var n=t.getBoundingClientRect(),r=t.ownerDocument,i=r.documentElement,o=h(r);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),e?n.top+o.y-i.clientTop:n.left+o.x-i.clientLeft}function s(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function a(t,e,n){n>0&&(f(t,e),setTimeout(function(){p(t,e)},n))}function u(t){return Math.max(Math.min(t,100),0)}function l(t){return Array.isArray(t)?t:[t]}function c(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function f(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function p(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function d(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function h(t){var e=window.pageXOffset!==undefined,n="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop}}function m(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function g(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}function v(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function b(t,e){return 100/(e-t)}function S(t,e){return 100*e/(t[1]-t[0])}function w(t,e){return S(t,t[0]<0?e+Math.abs(t[0]):e-t[0])}function x(t,e){return e*(t[1]-t[0])/100+t[0]}function y(t,e){for(var n=1;t>=e[n];)n+=1;return n}function E(t,e,n){if(n>=t.slice(-1)[0])return 100;var r,i,o,s,a=y(n,t);return r=t[a-1],i=t[a],o=e[a-1],s=e[a],o+w([r,i],n)/b(o,s)}function C(t,e,n){if(n>=100)return t.slice(-1)[0];var r,i,o,s,a=y(n,e);return r=t[a-1],i=t[a],o=e[a-1],s=e[a],x([r,i],(n-o)*b(o,s))}function N(t,e,n,r){if(100===r)return r;var o,s,a=y(r,t);return n?(o=t[a-1],s=t[a],r-o>(s-o)/2?s:o):e[a-1]?t[a-1]+i(r-t[a-1],e[a-1]):r}function U(t,e,n){var r;if("number"==typeof e&&(e=[e]),"[object Array]"!==Object.prototype.toString.call(e))throw new Error("noUiSlider ("+Q+"): 'range' contains invalid value.");if(r="min"===t?0:"max"===t?100:parseFloat(t),!s(r)||!s(e[0]))throw new Error("noUiSlider ("+Q+"): 'range' value isn't numeric.");n.xPct.push(r),n.xVal.push(e[0]),r?n.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(n.xSteps[0]=e[1]),n.xHighestCompleteStep.push(0)}function P(t,e,n){if(!e)return!0;n.xSteps[t]=S([n.xVal[t],n.xVal[t+1]],e)/b(n.xPct[t],n.xPct[t+1]);var r=(n.xVal[t+1]-n.xVal[t])/n.xNumSteps[t],i=Math.ceil(Number(r.toFixed(3))-1),o=n.xVal[t]+n.xNumSteps[t]*i;n.xHighestCompleteStep[t]=o}function A(t,e,n){this.xPct=[],this.xVal=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var r,i=[];for(r in t)t.hasOwnProperty(r)&&i.push([t[r],r]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),r=0;r<i.length;r++)U(i[r][1],i[r][0],this);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)P(r,this.xNumSteps[r],this)}function M(e){if(t(e))return!0;throw new Error("noUiSlider ("+Q+"): 'format' requires 'to' and 'from' methods.")}function O(t,e){if(!s(e))throw new Error("noUiSlider ("+Q+"): 'step' is not numeric.");t.singleStep=e}function k(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+Q+"): 'range' is not an object.");if(e.min===undefined||e.max===undefined)throw new Error("noUiSlider ("+Q+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+Q+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new A(e,t.snap,t.singleStep)}function V(t,e){if(e=l(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+Q+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function F(t,e){if(t.snap=e,"boolean"!=typeof e)throw new Error("noUiSlider ("+Q+"): 'snap' option must be a boolean.")}function L(t,e){if(t.animate=e,"boolean"!=typeof e)throw new Error("noUiSlider ("+Q+"): 'animate' option must be a boolean.")}function z(t,e){if(t.animationDuration=e,"number"!=typeof e)throw new Error("noUiSlider ("+Q+"): 'animationDuration' option must be a number.")}function j(t,e){var n,r=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(n=1;n<t.handles;n++)r.push(e);r.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+Q+"): 'connect' option doesn't match handle count.");r=e}t.connect=r}function H(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+Q+"): 'orientation' option is invalid.")}}function D(t,e){if(!s(e))throw new Error("noUiSlider ("+Q+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+Q+"): 'margin' option is only supported on linear sliders.")}function q(t,e){if(!s(e))throw new Error("noUiSlider ("+Q+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+Q+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function T(t,e){if(!s(e))throw new Error("noUiSlider ("+Q+"): 'padding' option must be numeric.");if(0!==e){if(t.padding=t.spectrum.getMargin(e),!t.padding)throw new Error("noUiSlider ("+Q+"): 'padding' option is only supported on linear sliders.");if(t.padding<0)throw new Error("noUiSlider ("+Q+"): 'padding' option must be a positive number.");if(t.padding>=50)throw new Error("noUiSlider ("+Q+"): 'padding' option must be less than half the range.")}}function R(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+Q+"): 'direction' option was not recognized.")}}function B(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+Q+"): 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,r=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider ("+Q+"): 'fixed' behaviour must be used with 2 handles");D(t,t.start[1]-t.start[0])}t.events={tap:n||o,drag:r,fixed:i,snap:o,hover:s}}function X(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(!0)}else{if(t.tooltips=l(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+Q+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+Q+"): 'tooltips' must be passed a formatter or 'false'.")})}}function Y(t,e){t.ariaFormat=e,M(e)}function I(t,e){t.format=e,M(e)}function _(t,e){if(e!==undefined&&"string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+Q+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function W(t,e){if(e!==undefined&&"object"!=typeof e)throw new Error("noUiSlider ("+Q+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix){t.cssClasses={};for(var n in e)e.hasOwnProperty(n)&&(t.cssClasses[n]=t.cssPrefix+e[n])}else t.cssClasses=e}function $(t,e){if(!0!==e&&!1!==e)throw new Error("noUiSlider ("+Q+"): 'useRequestAnimationFrame' option should be true (default) or false.");t.useRequestAnimationFrame=e}function G(t){var e={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:Z,format:Z},n={step:{r:!1,t:O},start:{r:!0,t:V},connect:{r:!0,t:j},direction:{r:!0,t:R},snap:{r:!1,t:F},animate:{r:!1,t:L},animationDuration:{r:!1,t:z},range:{r:!0,t:k},orientation:{r:!1,t:H},margin:{r:!1,t:D},limit:{r:!1,t:q},padding:{r:!1,t:T},behaviour:{r:!0,t:B},ariaFormat:{r:!1,t:Y},format:{r:!1,t:I},tooltips:{r:!1,t:X},cssPrefix:{r:!1,t:_},cssClasses:{r:!1,t:W},useRequestAnimationFrame:{r:!1,t:$}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},useRequestAnimationFrame:!0};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach(function(i){if(t[i]===undefined&&r[i]===undefined){if(n[i].r)throw new Error("noUiSlider ("+Q+"): '"+i+"' is required.");return!0}n[i].t(e,t[i]===undefined?r[i]:t[i])}),e.pips=t.pips;var i=[["left","top"],["right","bottom"]];return e.style=i[e.dir][e.ort],e.styleOposite=i[e.dir?0:1][e.ort],e}function J(t,i,s){function c(t,e){var n=Et.createElement("div");return e&&f(n,e),t.appendChild(n),n}function b(t,e){var n=c(t,i.cssClasses.origin),r=c(n,i.cssClasses.handle);return r.setAttribute("data-handle",e),r.setAttribute("tabindex","0"),r.setAttribute("role","slider"),r.setAttribute("aria-orientation",i.ort?"vertical":"horizontal"),0===e?f(r,i.cssClasses.handleLower):e===i.handles-1&&f(r,i.cssClasses.handleUpper),n}function S(t,e){return!!e&&c(t,i.cssClasses.connect)}function w(t,e){ut=[],lt=[],lt.push(S(e,t[0]));for(var n=0;n<i.handles;n++)ut.push(b(e,n)),vt[n]=n,lt.push(S(e,t[n+1]))}function x(t){f(t,i.cssClasses.target),0===i.dir?f(t,i.cssClasses.ltr):f(t,i.cssClasses.rtl),0===i.ort?f(t,i.cssClasses.horizontal):f(t,i.cssClasses.vertical),at=c(t,i.cssClasses.base)}function y(t,e){return!!i.tooltips[e]&&c(t.firstChild,i.cssClasses.tooltip)}function E(){var t=ut.map(y);it("update",function(e,n,r){if(t[n]){var o=e[n];!0!==i.tooltips[n]&&(o=i.tooltips[n].to(r[n])),t[n].innerHTML=o}})}function C(){it("update",function(t,e,n,r,o){vt.forEach(function(t){var e=ut[t],r=Y(gt,t,0,!0,!0,!0),s=Y(gt,t,100,!0,!0,!0),a=o[t],u=i.ariaFormat.to(n[t]);e.children[0].setAttribute("aria-valuemin",r.toFixed(1)),e.children[0].setAttribute("aria-valuemax",s.toFixed(1)),e.children[0].setAttribute("aria-valuenow",a.toFixed(1)),e.children[0].setAttribute("aria-valuetext",u)})})}function N(t,e,n){if("range"===t||"steps"===t)return St.xVal;if("count"===t){if(!e)throw new Error("noUiSlider ("+Q+"): 'values' required for mode 'count'.");var r,i=100/(e-1),o=0;for(e=[];(r=o++*i)<=100;)e.push(r);t="positions"}return"positions"===t?e.map(function(t){return St.fromStepping(n?St.getStep(t):t)}):"values"===t?n?e.map(function(t){return St.fromStepping(St.getStep(St.toStepping(t)))}):e:void 0}function U(t,e,n){function i(t,e){return(t+e).toFixed(7)/1}var o={},s=St.xVal[0],a=St.xVal[St.xVal.length-1],u=!1,l=!1,c=0;return n=r(n.slice().sort(function(t,e){return t-e})),n[0]!==s&&(n.unshift(s),u=!0),n[n.length-1]!==a&&(n.push(a),l=!0),n.forEach(function(r,s){var a,f,p,d,h,m,g,v,b,S,w=r,x=n[s+1];if("steps"===e&&(a=St.xNumSteps[s]),a||(a=x-w),!1!==w&&x!==undefined)for(a=Math.max(a,1e-7),f=w;f<=x;f=i(f,a)){for(d=St.toStepping(f),h=d-c,v=h/t,b=Math.round(v),S=h/b,p=1;p<=b;p+=1)m=c+p*S,o[m.toFixed(5)]=["x",0];g=n.indexOf(f)>-1?1:"steps"===e?2:0,!s&&u&&(g=0),f===x&&l||(o[d.toFixed(5)]=[f,g]),c=d}}),o}function P(t,e,n){function r(t,e){var n=e===i.cssClasses.value,r=n?l:p,o=n?a:u;return e+" "+r[i.ort]+" "+o[t]}function o(t,o){o[1]=o[1]&&e?e(o[0],o[1]):o[1];var a=c(s,!1);a.className=r(o[1],i.cssClasses.marker),a.style[i.style]=t+"%",o[1]&&(a=c(s,!1),a.className=r(o[1],i.cssClasses.value),a.style[i.style]=t+"%",a.innerText=n.to(o[0]))}var s=Et.createElement("div"),a=[i.cssClasses.valueNormal,i.cssClasses.valueLarge,i.cssClasses.valueSub],u=[i.cssClasses.markerNormal,i.cssClasses.markerLarge,i.cssClasses.markerSub],l=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],p=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];return f(s,i.cssClasses.pips),f(s,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(t).forEach(function(e){o(e,t[e])}),s}function A(){ft&&(e(ft),ft=null)}function M(t){A();var e=t.mode,n=t.density||1,r=t.filter||!1,i=t.values||!1,o=t.stepped||!1,s=N(e,i,o),a=U(n,e,s),u=t.format||{to:Math.round};return ft=mt.appendChild(P(a,r,u))}function O(){var t=at.getBoundingClientRect(),e="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||at[e]:t.height||at[e]}function k(t,e,n,r){var o=function(e){return!mt.hasAttribute("disabled")&&(!d(mt,i.cssClasses.tap)&&(!!(e=V(e,r.pageOffset))&&(!(t===pt.start&&e.buttons!==undefined&&e.buttons>1)&&((!r.hover||!e.buttons)&&(ht||e.preventDefault(),e.calcPoint=e.points[i.ort],void n(e,r))))))},s=[];return t.split(" ").forEach(function(t){e.addEventListener(t,o,!!ht&&{passive:!0}),s.push([t,o])}),s}function V(t,e){var n,r,i=0===t.type.indexOf("touch"),o=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),i){if(t.touches.length>1)return!1;n=t.changedTouches[0].pageX,r=t.changedTouches[0].pageY}return e=e||h(Et),(o||s)&&(n=t.clientX+e.x,r=t.clientY+e.y),t.pageOffset=e,t.points=[n,r],t.cursor=o||s,t}function F(t){var e=t-o(at,i.ort),n=100*e/O();return i.dir?100-n:n}function L(t){var e=100,n=!1;return ut.forEach(function(r,i){if(!r.hasAttribute("disabled")){var o=Math.abs(gt[i]-t);o<e&&(n=i,e=o)}}),n}function z(t,e,n,r){var i=n.slice(),o=[!t,t],s=[t,!t];r=r.slice(),t&&r.reverse(),r.length>1?r.forEach(function(t,n){var r=Y(i,t,i[t]+e,o[n],s[n],!1);!1===r?e=0:(e=r-i[t],i[t]=r)}):o=s=[!0];var a=!1;r.forEach(function(t,r){a=$(t,n[t]+e,o[r],s[r])||a}),a&&r.forEach(function(t){j("update",t),j("slide",t)})}function j(t,e,n){Object.keys(xt).forEach(function(r){var o=r.split(".")[0];t===o&&xt[r].forEach(function(t){t.call(ct,wt.map(i.format.to),e,wt.slice(),n||!1,gt.slice())})})}function H(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&q(t,e)}function D(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return q(t,e);var n=(i.dir?-1:1)*(t.calcPoint-e.startCalcPoint);z(n>0,100*n/e.baseSize,e.locations,e.handleNumbers)}function q(t,e){bt&&(p(bt,i.cssClasses.active),bt=!1),t.cursor&&(Nt.style.cursor="",Nt.removeEventListener("selectstart",n)),yt.forEach(function(t){Ct.removeEventListener(t[0],t[1])}),p(mt,i.cssClasses.drag),W(),e.handleNumbers.forEach(function(t){j("change",t),j("set",t),j("end",t)})}function T(t,e){if(1===e.handleNumbers.length){var r=ut[e.handleNumbers[0]];if(r.hasAttribute("disabled"))return!1;bt=r.children[0],f(bt,i.cssClasses.active)}t.stopPropagation();var o=k(pt.move,Ct,D,{startCalcPoint:t.calcPoint,baseSize:O(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:gt.slice()}),s=k(pt.end,Ct,q,{handleNumbers:e.handleNumbers}),a=k("mouseout",Ct,H,{handleNumbers:e.handleNumbers});yt=o.concat(s,a),t.cursor&&(Nt.style.cursor=getComputedStyle(t.target).cursor,ut.length>1&&f(mt,i.cssClasses.drag),Nt.addEventListener("selectstart",n,!1)),e.handleNumbers.forEach(function(t){j("start",t)})}function R(t){t.stopPropagation();var e=F(t.calcPoint),n=L(e);if(!1===n)return!1;i.events.snap||a(mt,i.cssClasses.tap,i.animationDuration),$(n,e,!0,!0),W(),j("slide",n,!0),j("update",n,!0),j("change",n,!0),j("set",n,!0),i.events.snap&&T(t,{handleNumbers:[n]})}function B(t){var e=F(t.calcPoint),n=St.getStep(e),r=St.fromStepping(n);Object.keys(xt).forEach(function(t){"hover"===t.split(".")[0]&&xt[t].forEach(function(t){t.call(ct,r)})})}function X(t){t.fixed||ut.forEach(function(t,e){k(pt.start,t.children[0],T,{handleNumbers:[e]})}),t.tap&&k(pt.start,at,R,{}),t.hover&&k(pt.move,at,B,{hover:!0}),t.drag&&lt.forEach(function(e,n){if(!1!==e&&0!==n&&n!==lt.length-1){var r=ut[n-1],o=ut[n],s=[e];f(e,i.cssClasses.draggable),t.fixed&&(s.push(r.children[0]),s.push(o.children[0])),s.forEach(function(t){k(pt.start,t,T,{handles:[r,o],handleNumbers:[n-1,n]})})}})}function Y(t,e,n,r,o,s){return ut.length>1&&(r&&e>0&&(n=Math.max(n,t[e-1]+i.margin)),o&&e<ut.length-1&&(n=Math.min(n,t[e+1]-i.margin))),ut.length>1&&i.limit&&(r&&e>0&&(n=Math.min(n,t[e-1]+i.limit)),o&&e<ut.length-1&&(n=Math.max(n,t[e+1]-i.limit))),i.padding&&(0===e&&(n=Math.max(n,i.padding)),e===ut.length-1&&(n=Math.min(n,100-i.padding))),n=St.getStep(n),!((n=u(n))===t[e]&&!s)&&n}function I(t){return t+"%"}function _(t,e){gt[t]=e,wt[t]=St.fromStepping(e);var n=function(){ut[t].style[i.style]=I(e),J(t),J(t+1)};window.requestAnimationFrame&&i.useRequestAnimationFrame?window.requestAnimationFrame(n):n()}function W(){vt.forEach(function(t){var e=gt[t]>50?-1:1,n=3+(ut.length+e*t);ut[t].childNodes[0].style.zIndex=n})}function $(t,e,n,r){return!1!==(e=Y(gt,t,e,n,r,!1))&&(_(t,e),!0)}function J(t){if(lt[t]){var e=0,n=100;0!==t&&(e=gt[t-1]),t!==lt.length-1&&(n=gt[t]),lt[t].style[i.style]=I(e),lt[t].style[i.styleOposite]=I(100-n)}}function K(t,e){null!==t&&!1!==t&&("number"==typeof t&&(t=String(t)),!1===(t=i.format.from(t))||isNaN(t)||$(e,St.toStepping(t),!1,!1))}function Z(t,e){var n=l(t),r=gt[0]===undefined;e=e===undefined||!!e,n.forEach(K),i.animate&&!r&&a(mt,i.cssClasses.tap,i.animationDuration),vt.forEach(function(t){$(t,gt[t],!0,!1)}),W(),vt.forEach(function(t){j("update",t),null!==n[t]&&e&&j("set",t)})}function tt(t){Z(i.start,t)}function et(){var t=wt.map(i.format.to);return 1===t.length?t[0]:t}function nt(){for(var t in i.cssClasses)i.cssClasses.hasOwnProperty(t)&&p(mt,i.cssClasses[t]);for(;mt.firstChild;)mt.removeChild(mt.firstChild);delete mt.noUiSlider}function rt(){return gt.map(function(t,e){var n=St.getNearbySteps(t),r=wt[e],i=n.thisStep.step,o=null;!1!==i&&r+i>n.stepAfter.startValue&&(i=n.stepAfter.startValue-r),o=r>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&r-n.stepBefore.highestStep,100===t?i=null:0===t&&(o=null);var s=St.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(s))),null!==o&&!1!==o&&(o=Number(o.toFixed(s))),[o,i]})}function it(t,e){xt[t]=xt[t]||[],xt[t].push(e),"update"===t.split(".")[0]&&ut.forEach(function(t,e){j("update",e)})}function ot(t){var e=t&&t.split(".")[0],n=e&&t.substring(e.length);Object.keys(xt).forEach(function(t){var r=t.split(".")[0],i=t.substring(r.length);e&&e!==r||n&&n!==i||delete xt[t]})}function st(t,e){var n=et(),r=["margin","limit","padding","range","animate","snap","step","format"];r.forEach(function(e){t[e]!==undefined&&(s[e]=t[e])});var o=G(s);r.forEach(function(e){t[e]!==undefined&&(i[e]=o[e])}),St=o.spectrum,i.margin=o.margin,i.limit=o.limit,i.padding=o.padding,i.pips&&M(i.pips),gt=[],Z(t.start||n,e)}var at,ut,lt,ct,ft,pt=m(),dt=v(),ht=dt&&g(),mt=t,gt=[],vt=[],bt=!1,St=i.spectrum,wt=[],xt={},yt=null,Et=t.ownerDocument,Ct=Et.documentElement,Nt=Et.body;if(mt.noUiSlider)throw new Error("noUiSlider ("+Q+"): Slider was already initialized.");return x(mt),w(i.connect,at),ct={destroy:nt,steps:rt,on:it,off:ot,get:et,set:Z,reset:tt,__moveHandles:function(t,e,n){z(t,e,gt,n)},options:s,updateOptions:st,target:mt,removePips:A,pips:M},X(i.events),Z(i.start),i.pips&&M(i.pips),i.tooltips&&E(),C(),ct}function K(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+Q+"): create requires a single element, got: "+t);var n=G(e,t),r=J(t,n,e);return t.noUiSlider=r,r}var Q="10.0.0";A.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+Q+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&S(this.xVal,t)},A.prototype.toStepping=function(t){return t=E(this.xVal,this.xPct,t)},A.prototype.fromStepping=function(t){return C(this.xVal,this.xPct,t)},A.prototype.getStep=function(t){return t=N(this.xPct,this.xSteps,this.snap,t)},A.prototype.getNearbySteps=function(t){var e=y(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e-0],step:this.xNumSteps[e-0],highestStep:this.xHighestCompleteStep[e-0]}}},A.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(c);return Math.max.apply(null,t)},A.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var Z={to:function(t){return t!==undefined&&t.toFixed(2)},from:Number};return{version:Q,create:K}});