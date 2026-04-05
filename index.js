/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelectorAll(".faq-acc-el-trigger").forEach(n=>{n.addEventListener("click",()=>{const o=n.closest(".faq-acc-el"),s=o.querySelector(".faq-acc-el-descr-frame"),r=n.querySelector("svg"),e=o.classList.contains("open"),t=`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 4V24" stroke="#AAD0FF" />
  <path d="M24.0049 13.9951L4.00488 13.9951" stroke="#AAD0FF" />
</svg>`,c=`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.0049 13.9951L4.00488 13.9951" stroke="#AAD0FF" />
</svg>`;e?(o.classList.remove("open"),s.style.maxHeight="0",r.outerHTML=t):(o.classList.add("open"),s.style.maxHeight=s.scrollHeight+"px",r.outerHTML=c)})});
//# sourceMappingURL=index.js.map
