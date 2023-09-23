import{s as R,f as p,l as q,a as M,g as v,h as m,m as z,d as f,c as F,y as ve,j as $,i as L,v as u,D as me,E as _e,n as G,F as ge,o as H,p as be,k as A,w as J,G as ye}from"../chunks/scheduler.021173b9.js";import{S as Q,i as W,g as he,t as I,c as pe,a as V,b as X,d as Y,m as Z,e as x}from"../chunks/index.4c635041.js";import{P as $e}from"../chunks/P5Renderer.70209d06.js";import{g as Ee,a as ke}from"../chunks/nostr.37b5f851.js";function fe(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function Ve(o,e={}){const{threshold:s=.1,root:n=null,rootMargin:t="0px"}=e||{};let r=!1;function l(a){a.forEach(_=>{_.isIntersecting!==r&&(r=_.isIntersecting,o.dispatchEvent(new CustomEvent("visible",{detail:{inView:r}})))})}const i=new IntersectionObserver(l,{threshold:s,root:n,rootMargin:t});return i.observe(o),{destroy(){i.disconnect()}}}function De(o){let e;return{c(){e=p("div"),this.h()},l(s){e=v(s,"DIV",{style:!0}),m(e).forEach(f),this.h()},h(){A(e,"width","400px"),A(e,"height","400px"),A(e,"background-color","#f0f0f0"),A(e,"border-radius","10px")},m(s,n){L(s,e,n)},p:J,i:J,o:J,d(s){s&&f(e)}}}function Ie(o){let e,s;return e=new $e({props:{title:o[0].title,sketch:o[0].sketch,width:400,height:400,seed:o[4]}}),{c(){X(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,t){Z(e,n,t),s=!0},p(n,t){const r={};t&1&&(r.title=n[0].title),t&1&&(r.sketch=n[0].sketch),t&16&&(r.seed=n[4]),e.$set(r)},i(n){s||(V(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){x(e,n)}}}function we(o){let e,s,n,t,r=o[0].title+"",l,i,a,_,C,c,y,g,b,K,w,E,ee="ξ",U,P,N,O,D,j,te;const ne=[Ie,De],k=[];function se(d,h){return d[1]?0:1}return g=se(o),b=k[g]=ne[g](o),{c(){e=p("div"),s=p("div"),n=p("div"),t=p("span"),l=q(r),i=M(),a=p("span"),_=q(o[5]),C=M(),c=p("div"),y=p("div"),b.c(),K=M(),w=p("div"),E=p("button"),E.textContent=ee,U=M(),P=p("div"),N=p("span"),O=q(o[3]),this.h()},l(d){e=v(d,"DIV",{class:!0});var h=m(e);s=v(h,"DIV",{class:!0});var S=m(s);n=v(S,"DIV",{class:!0});var T=m(n);t=v(T,"SPAN",{class:!0});var le=m(t);l=z(le,r),le.forEach(f),i=F(T),a=v(T,"SPAN",{});var oe=m(a);_=z(oe,o[5]),oe.forEach(f),T.forEach(f),S.forEach(f),C=F(h),c=v(h,"DIV",{class:!0});var B=m(c);y=v(B,"DIV",{});var re=m(y);b.l(re),re.forEach(f),K=F(B),w=v(B,"DIV",{class:!0});var ae=m(w);E=v(ae,"BUTTON",{class:!0,"data-svelte-h":!0}),ve(E)!=="svelte-1d7bezd"&&(E.textContent=ee),ae.forEach(f),B.forEach(f),U=F(h),P=v(h,"DIV",{class:!0});var ie=m(P);N=v(ie,"SPAN",{});var ce=m(N);O=z(ce,o[3]),ce.forEach(f),ie.forEach(f),h.forEach(f),this.h()},h(){$(t,"class","title svelte-13ypc5f"),$(n,"class","header-text svelte-13ypc5f"),$(s,"class","header"),$(E,"class","random-button svelte-13ypc5f"),$(w,"class","random-button-container svelte-13ypc5f"),$(c,"class","post-section svelte-13ypc5f"),$(P,"class","footer svelte-13ypc5f"),$(e,"class","post svelte-13ypc5f")},m(d,h){L(d,e,h),u(e,s),u(s,n),u(n,t),u(t,l),u(n,i),u(n,a),u(a,_),u(e,C),u(e,c),u(c,y),k[g].m(y,null),o[7](y),u(c,K),u(c,w),u(w,E),u(e,U),u(e,P),u(P,N),u(N,O),D=!0,j||(te=[me(Ve.call(null,y,{threshold:0})),_e(E,"click",o[6])],j=!0)},p(d,[h]){(!D||h&1)&&r!==(r=d[0].title+"")&&G(l,r),(!D||h&32)&&G(_,d[5]);let S=g;g=se(d),g===S?k[g].p(d,h):(he(),I(k[S],1,1,()=>{k[S]=null}),pe(),b=k[g],b?b.p(d,h):(b=k[g]=ne[g](d),b.c()),V(b,1),b.m(y,null)),(!D||h&8)&&G(O,d[3])},i(d){D||(V(b),D=!0)},o(d){I(b),D=!1},d(d){d&&f(e),k[g].d(),o[7](null),j=!1,ge(te)}}}function Pe(o,e,s){let n,{post:t}=e,r=!1,l,i,a=t.seeds[0];function _(){s(4,a=Math.floor(Math.random()*1e5))}H(()=>{const c=y=>{console.log("Visible event triggered!",t.title,y.detail),s(1,r=y.detail.inView)};return l.addEventListener("visible",c),()=>{l.removeEventListener("visible",c)}});function C(c){be[c?"unshift":"push"](()=>{l=c,s(2,l)})}return o.$$set=c=>{"post"in c&&s(0,t=c.post)},o.$$.update=()=>{if(o.$$.dirty&1&&t&&t.createdAt){let c=new Date(t.createdAt*1e3);s(3,i=c.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}))}o.$$.dirty&1&&s(5,n=t.author&&t.author.name?t.author.name:t.publicKey)},[t,r,l,i,a,n,_,C]}class Se extends Q{constructor(e){super(),W(this,e,Pe,we,R,{post:0})}}function Ae(o){let e,s,n;return s=new Se({props:{post:o[0]}}),{c(){e=p("div"),X(s.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0,style:!0});var r=m(e);Y(s.$$.fragment,r),r.forEach(f),this.h()},h(){$(e,"class","post svelte-fc6pac"),A(e,"--bg-color",o[0].color)},m(t,r){L(t,e,r),Z(s,e,null),n=!0},p(t,[r]){const l={};r&1&&(l.post=t[0]),s.$set(l),(!n||r&1)&&A(e,"--bg-color",t[0].color)},i(t){n||(V(s.$$.fragment,t),n=!0)},o(t){I(s.$$.fragment,t),n=!1},d(t){t&&f(e),x(s)}}}function Ce(o,e){for(let s of o)if(s[0]===e)return s[1];return""}function Ne(o,e,s){let{event:n}=e;H(async()=>{s(0,r.author=await Ee(n.pubkey),r)}),console.log("e",n);let r={...JSON.parse(n.content),publicKey:n.pubkey,color:Ce(n.tags,"c"),createdAt:n.created_at};return o.$$set=l=>{"event"in l&&s(1,n=l.event)},[r,n]}class Me extends Q{constructor(e){super(),W(this,e,Ne,Ae,R,{event:1})}}function ue(o,e,s){const n=o.slice();return n[1]=e[s],n}function de(o){let e,s,n,t;return s=new Me({props:{event:o[1]}}),{c(){e=p("div"),X(s.$$.fragment),n=M()},l(r){e=v(r,"DIV",{});var l=m(e);Y(s.$$.fragment,l),n=F(l),l.forEach(f)},m(r,l){L(r,e,l),Z(s,e,null),u(e,n),t=!0},p(r,l){const i={};l&1&&(i.event=r[1]),s.$set(i)},i(r){t||(V(s.$$.fragment,r),t=!0)},o(r){I(s.$$.fragment,r),t=!1},d(r){r&&f(e),x(s)}}}function Fe(o){let e,s,n=fe(o[0]),t=[];for(let l=0;l<n.length;l+=1)t[l]=de(ue(o,n,l));const r=l=>I(t[l],1,1,()=>{t[l]=null});return{c(){e=p("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"DIV",{id:!0,class:!0});var i=m(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(f),this.h()},h(){$(e,"id","feed-page-content"),$(e,"class","svelte-1kmi7ht")},m(l,i){L(l,e,i);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);s=!0},p(l,[i]){if(i&1){n=fe(l[0]);let a;for(a=0;a<n.length;a+=1){const _=ue(l,n,a);t[a]?(t[a].p(_,i),V(t[a],1)):(t[a]=de(_),t[a].c(),V(t[a],1),t[a].m(e,null))}for(he(),a=n.length;a<t.length;a+=1)r(a);pe()}},i(l){if(!s){for(let i=0;i<n.length;i+=1)V(t[i]);s=!0}},o(l){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)I(t[i]);s=!1},d(l){l&&f(e),ye(t,l)}}}function Le(o,e,s){let n=[];return H(async()=>{s(0,n=await ke())}),[n]}class Ue extends Q{constructor(e){super(),W(this,e,Le,Fe,R,{})}}export{Ue as component};
