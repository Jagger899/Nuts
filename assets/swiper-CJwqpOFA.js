import{S as t,N as r,P as s}from"./news-swiper-DCeqkkc3.js";const i=function(){const e=document.querySelectorAll(".card");e.forEach(a=>{a.addEventListener("mouseover",()=>{e.forEach(o=>{o.classList.remove("card_active")}),a.classList.add("card_active")})})};t.use([r,s]);const c=function(){const e={spaceBetween:0,slidesPerView:1,loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"}};new t(".card__slider",e)};export{i as a,c as m};