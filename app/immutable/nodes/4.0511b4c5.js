import{s as I,f as h,a as b,g as _,h as N,y as P,c as C,d as w,j as s,i as M,v as c,E as y,F as T,w as x,G as S,o as k}from"../chunks/scheduler.d64e95b5.js";import{S as A,i as B}from"../chunks/index.63c1aa50.js";import{a as D,u as F}from"../chunks/nostr.11a57b54.js";function K(m){let l,e,t,o="Title",d,a,v,n,u,i,U="Submit",g,E;return{c(){l=h("div"),e=h("form"),t=h("label"),t.textContent=o,d=b(),a=h("input"),v=b(),n=h("input"),u=b(),i=h("button"),i.textContent=U,this.h()},l(r){l=_(r,"DIV",{});var f=N(l);e=_(f,"FORM",{class:!0});var p=N(e);t=_(p,"LABEL",{for:!0,"data-svelte-h":!0}),P(t)!=="svelte-1nie8zk"&&(t.textContent=o),d=C(p),a=_(p,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0}),v=C(p),n=_(p,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0}),u=C(p),i=_(p,"BUTTON",{type:!0,"data-svelte-h":!0}),P(i)!=="svelte-1ce8lps"&&(i.textContent=U),p.forEach(w),f.forEach(w),this.h()},h(){s(t,"for","username"),s(a,"type","text"),s(a,"id","username"),s(a,"name","username"),s(a,"placeholder","username"),s(n,"type","text"),s(n,"id","avatar"),s(n,"name","avatar"),s(n,"placeholder","avatar"),s(i,"type","submit"),s(e,"class","form-container svelte-9yy43y")},m(r,f){M(r,l,f),c(l,e),c(e,t),c(e,d),c(e,a),y(a,m[0]),c(e,v),c(e,n),y(n,m[1]),c(e,u),c(e,i),g||(E=[T(a,"input",m[3]),T(n,"input",m[4]),T(i,"click",m[2])],g=!0)},p(r,[f]){f&1&&a.value!==r[0]&&y(a,r[0]),f&2&&n.value!==r[1]&&y(n,r[1])},i:x,o:x,d(r){r&&w(l),g=!1,S(E)}}}function L(m,l,e){let t="",o="",d;async function a(){await F({name:t,picture:o})}k(async()=>{try{const u=await window.nostr.getPublicKey();d=await D(u),e(0,t=d.name),e(1,o=d.picture)}catch(u){console.log(u)}});function v(){t=this.value,e(0,t)}function n(){o=this.value,e(1,o)}return[t,o,a,v,n]}class z extends A{constructor(l){super(),B(this,l,L,K,I,{})}}export{z as component};
