import{d as i,u as m,c as g,r as h,o as t,a as s,b as e,F as c,e as f,f as r,g as k,h as d,w as x,n as N,i as V,j as y,t as w}from"./index-eRvBYRHI.js";const B={class:"navbar navbar-expand-md bg-body-tertiary sticky-top"},C={class:"container"},U={class:"collapse navbar-collapse",id:"navbarNav"},R={class:"navbar-nav"},T={key:0,class:"bi bi-house-fill"},$=i({__name:"NavBar",setup(p){const n=m(),v=g(()=>n.currentRoute.value.path),_=l=>l===v.value;return(l,o)=>{const b=h("router-link");return t(),s("nav",B,[e("div",C,[o[0]||(o[0]=e("a",{class:"navbar-brand",href:"#"},"V0: VUE3 + BT5",-1)),o[1]||(o[1]=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),e("div",U,[e("ul",R,[(t(!0),s(c,null,f(r(k),a=>(t(),s("li",{class:"nav-item text-uppercase",key:a.path},[d(b,{to:a.path,class:N(["nav-link",{active:_(a.path)}]),title:a.children[0].name},{default:x(()=>[a.path===`${r(void 0)}/`?(t(),s("i",T)):V("",!0),y(" "+w(a.path!==`${r(void 0)}/`?a.children[0].name:""),1)]),_:2},1032,["to","title","class"])]))),128))])])])])}}}),F=i({__name:"HomeView",setup(p){return(u,n)=>(t(),s(c,null,[d($),n[0]||(n[0]=e("code",null,"src/views/HomeView.vue",-1))],64))}});export{F as default};
