(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const d="#FilterPanel + div > .flex:has(a[href*='/detail/koop/']) > * > *:nth-last-child(1)",u="h2 a",i=()=>{const e=localStorage.getItem("checker");return e?JSON.parse(e):(localStorage.setItem("checker",JSON.stringify({})),{})},a=e=>{localStorage.setItem("checker",JSON.stringify(e))},f=e=>{const c=i(),r=c[e];return r===void 0?(c[e]=!1,a(c),!1):r},h=(e,c)=>{const r=i();r[e]=c,a(r)},g=()=>{const e=document.createElement("input");return e.type="checkbox",e.classList.add("checkerCheckbox"),e},p=e=>{var r;return(r=e.querySelector("h2 a"))==null?void 0:r.href},k=e=>{if(e.classList.contains("checkerContainer"))return;const c=p(e);console.log({id:c}),e.classList.add("checkerContainer"),e.classList.add("checkerContainerLink");const r=e.querySelector(u);r==null||r.classList.add("checkerContainerLink");const n=g();n.checked=f(c),n.addEventListener("change",t=>{const s=t.target.checked;h(c,s)}),e==null||e.append(n)},l=()=>document.querySelectorAll(d).forEach(k);l();setInterval(()=>l(),100);console.log("updated? asd");
