(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i="#FilterPanel + div > .flex:has(a[href*='/detail/koop/']) > * > *:nth-last-child(1) a",l=()=>{const r=document.createElement("input");return r.type="checkbox",r.classList.add("checkerCheckbox"),r},d=r=>{r.classList.add("checkerContainer"),r==null||r.append(l())};document.querySelectorAll(i).forEach(d);console.log("updated? asd");
