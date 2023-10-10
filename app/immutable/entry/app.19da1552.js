import{s as q,a as B,e as d,c as U,i as w,d as h,b as j,o as K,f as W,g as z,h as F,j as D,k as m,l as G,m as H,n as J,t as M,p as I,q as E}from"../chunks/scheduler.d64e95b5.js";import{S as Q,i as X,t as p,c as P,a as g,g as L,b as v,d as O,m as y,e as R}from"../chunks/index.63c1aa50.js";const Y="modulepreload",Z=function(o){return"/"+o},T={},k=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f),f in T)return;T[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!s)for(let a=i.length-1;a>=0;a--){const u=i[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(o){let e,n,s;var i=o[1][0];function f(t,r){return{props:{data:t[3],form:t[2]}}}return i&&(e=E(i,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&y(e,t,r),w(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{R(l,1)}),P()}i?(e=E(i,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(i){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&h(n),o[12](null),e&&R(e,t)}}}function x(o){let e,n,s;var i=o[1][0];function f(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return i&&(e=E(i,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&y(e,t,r),w(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{R(l,1)}),P()}i?(e=E(i,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(i){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&h(n),o[11](null),e&&R(e,t)}}}function ee(o){let e,n,s;var i=o[1][1];function f(t,r){return{props:{data:t[4],form:t[2]}}}return i&&(e=E(i,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&y(e,t,r),w(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][1])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{R(l,1)}),P()}i?(e=E(i,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(i){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){s||(e&&g(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&h(n),o[10](null),e&&R(e,t)}}}function V(o){let e,n=o[6]&&A(o);return{c(){e=W("div"),n&&n.c(),this.h()},l(s){e=z(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=F(e);n&&n.l(i),i.forEach(h),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(s,i){w(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=A(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&h(e),n&&n.d()}}}function A(o){let e;return{c(){e=G(o[7])},l(n){e=H(n,o[7])},m(n,s){w(n,e,s)},p(n,s){s&128&&J(e,n[7])},d(n){n&&h(e)}}}function te(o){let e,n,s,i,f;const t=[x,$],r=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=r[e]=t[e](o);let c=o[5]&&V(o);return{c(){n.c(),s=B(),c&&c.c(),i=d()},l(a){n.l(a),s=U(a),c&&c.l(a),i=d()},m(a,u){r[e].m(a,u),w(a,s,u),c&&c.m(a,u),w(a,i,u),f=!0},p(a,[u]){let b=e;e=l(a),e===b?r[e].p(a,u):(L(),p(r[b],1,1,()=>{r[b]=null}),P(),n=r[e],n?n.p(a,u):(n=r[e]=t[e](a),n.c()),g(n,1),n.m(s.parentNode,s)),a[5]?c?c.p(a,u):(c=V(a),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},i(a){f||(g(n),f=!0)},o(a){p(n),f=!1},d(a){a&&(h(s),h(i)),r[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:s}=e,{page:i}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:c=null}=e;j(s.page.notify);let a=!1,u=!1,b=null;K(()=>{const _=s.page.subscribe(()=>{a&&(n(6,u=!0),M().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function C(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,s=_.stores),"page"in _&&n(9,i=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,r=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&s.page.set(i)},[t,f,r,l,c,a,u,b,s,i,N,S,C]}class oe extends Q{constructor(e){super(),X(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>k(()=>import("../nodes/0.366967c0.js"),["app/immutable/nodes/0.366967c0.js","app/immutable/chunks/scheduler.d64e95b5.js","app/immutable/chunks/index.63c1aa50.js","app/immutable/chunks/createStore.b5949088.js","app/immutable/chunks/index.eea44bec.js","app/immutable/assets/0.2a562971.css"]),()=>k(()=>import("../nodes/1.de746dee.js"),["app/immutable/nodes/1.de746dee.js","app/immutable/chunks/scheduler.d64e95b5.js","app/immutable/chunks/index.63c1aa50.js","app/immutable/chunks/singletons.d6b92b55.js","app/immutable/chunks/index.eea44bec.js"]),()=>k(()=>import("../nodes/2.f5b15086.js"),["app/immutable/nodes/2.f5b15086.js","app/immutable/chunks/scheduler.d64e95b5.js","app/immutable/chunks/index.63c1aa50.js","app/immutable/chunks/FeedItem.e2a08769.js","app/immutable/chunks/Button.ba545a21.js","app/immutable/assets/Button.ff6c01ec.css","app/immutable/chunks/nostr.11a57b54.js","app/immutable/chunks/createStore.b5949088.js","app/immutable/chunks/index.eea44bec.js","app/immutable/assets/FeedItem.cc8365f8.css","app/immutable/assets/2.5b115cb9.css"]),()=>k(()=>import("../nodes/3.b2a6100f.js"),["app/immutable/nodes/3.b2a6100f.js","app/immutable/chunks/scheduler.d64e95b5.js","app/immutable/chunks/index.63c1aa50.js","app/immutable/chunks/createStore.b5949088.js","app/immutable/chunks/index.eea44bec.js","app/immutable/chunks/Button.ba545a21.js","app/immutable/assets/Button.ff6c01ec.css","app/immutable/chunks/nostr.11a57b54.js","app/immutable/assets/3.5d2aac4f.css"]),()=>k(()=>import("../nodes/4.40336daf.js"),["app/immutable/nodes/4.40336daf.js","app/immutable/chunks/scheduler.d64e95b5.js","app/immutable/chunks/index.63c1aa50.js","app/immutable/chunks/nostr.11a57b54.js","app/immutable/chunks/createStore.b5949088.js","app/immutable/chunks/index.eea44bec.js","app/immutable/assets/4.08f87ca3.css"]),()=>k(()=>import("../nodes/5.9afb071b.js"),["app/immutable/nodes/5.9afb071b.js","app/immutable/chunks/scheduler.d64e95b5.js","app/immutable/chunks/index.63c1aa50.js","app/immutable/chunks/FeedItem.e2a08769.js","app/immutable/chunks/Button.ba545a21.js","app/immutable/assets/Button.ff6c01ec.css","app/immutable/chunks/nostr.11a57b54.js","app/immutable/chunks/createStore.b5949088.js","app/immutable/chunks/index.eea44bec.js","app/immutable/assets/FeedItem.cc8365f8.css","app/immutable/assets/2.5b115cb9.css"])],le=[],fe={"/":[2],"/create":[3],"/profile":[4],"/profile/[pubKey]":[5]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};