(this["webpackJsonpmemory-clicker"]=this["webpackJsonpmemory-clicker"]||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(3),i=t.n(s),r=t(0);var n=function(e){return Object(r.jsxs)("nav",{className:e.navbarState,children:[Object(r.jsx)("h1",{className:"title",children:"Cat Memorization Game"}),"initial"===e.navbarState&&Object(r.jsx)("p",{children:"Click each cat once!"}),"default"===e.navbarState&&Object(r.jsx)("p",{children:"Keep clicking cats you haven't clicked before!"}),"correct"===e.navbarState&&Object(r.jsx)("p",{children:"Correct!"}),"incorrect"===e.navbarState&&Object(r.jsx)("p",{children:"Incorrect, Sorry you lose!"}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Hiscore: ",e.scoreState.highScore]}),"correct"===e.navbarState?Object(r.jsxs)("p",{children:["Current Score: ",e.scoreState.currentScore-1," + 1 = ",e.scoreState.currentScore]}):Object(r.jsxs)("p",{children:["Current Score: ",e.scoreState.currentScore]})]})]})};var o=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("figure",{className:"".concat(e.imageAnimation," cat-box"),onClick:()=>e.imageClickHandler(e.id),children:[Object(r.jsx)("img",{src:"/memory-clicker"+e.image,alt:e.imageName,className:"cat-image",width:"250",height:"250",loading:"lazy"}),Object(r.jsx)("div",{className:"cat-description",children:Object(r.jsx)("p",{className:"click-text",children:"Choose this cat!"})})]})})};var m=function(e){return Object(r.jsx)("section",{children:Object(r.jsx)("div",{className:"cat-catalogue",children:e.imageState.map(((a,t)=>Object(r.jsx)(o,{...a,imageAnimation:e.imageAnimation,imageClickHandler:e.imageClickHandler},t)))})})},g=t(4);var l=function(){const[e,a]=Object(c.useState)({currentScore:0,highScore:0}),[t,s]=Object(c.useState)([]),[i,o]=Object(c.useState)("fade-in"),[l,b]=Object(c.useState)("initial"),[d,j]=Object(c.useState)(!1);Object(c.useEffect)((()=>{p()}),[]),Object(c.useEffect)((()=>{u(o,"fade-in",500)}),[i]),Object(c.useEffect)((()=>{"correct"!==l&&"incorrect"!==l||u(b,"default",2e3)}),[l]);const p=()=>{var e;e=[...g].map(((e,a)=>({...e,id:a,imageName:"The cat meows at midnight",clicked:!1}))),s(e)},h=()=>{var t=e.currentScore+1;t>e.highScore?a({currentScore:t,highScore:t}):a({...e,currentScore:t})},u=(e,a,t)=>{const c=setTimeout((()=>{e(a)}),t);return()=>{clearTimeout(c)}},S=e=>{let a,t=e.length;for(;t>0;)a=Math.floor(Math.random()*t),t--,[e[t],e[a]]=[e[a],e[t]],console.log();return e};return Object(r.jsxs)("div",{children:[Object(r.jsx)(n,{scoreState:e,navbarState:l}),Object(r.jsx)(m,{imageState:t,imageAnimation:i,imageClickHandler:c=>{if(!1===d){j(!0),o("fade-out"),u(j,!1,1500);var i=t.findIndex((e=>e.id===c));if(!1===t[i].clicked){h(),b("correct");const e=t;e[i].clicked=!0,s(e),setTimeout((()=>{s(S(t))}),500)}else{const t=e;t.currentScore=0,a(t),b("incorrect"),p()}}}})]})};t(10);i.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('[{"image":"/assets/cat-images/AHH.webp"},{"image":"/assets/cat-images/awk.webp"},{"image":"/assets/cat-images/boop.webp"},{"image":"/assets/cat-images/borgor.webp"},{"image":"/assets/cat-images/cosy.webp"},{"image":"/assets/cat-images/donce.webp"},{"image":"/assets/cat-images/eepy.webp"},{"image":"/assets/cat-images/electron.webp"},{"image":"/assets/cat-images/foodMEOW.webp"},{"image":"/assets/cat-images/foooood.webp"},{"image":"/assets/cat-images/hark-who-knocks.webp"},{"image":"/assets/cat-images/help.webp"},{"image":"/assets/cat-images/hide.webp"},{"image":"/assets/cat-images/huff.webp"},{"image":"/assets/cat-images/IM-ANGIE.webp"},{"image":"/assets/cat-images/nyoom.webp"},{"image":"/assets/cat-images/pancake.webp"},{"image":"/assets/cat-images/sleep-paralysis-demeown.webp"},{"image":"/assets/cat-images/slippa.webp"},{"image":"/assets/cat-images/vaccum.webp"}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.22550eaf.chunk.js.map