!function(){"use strict";const e=1614676606764,t=`cache${e}`,n=["/client/client.75e3d1e0.js","/client/inject_styles.5607aec6.js","/client/index.c5e2dccb.js","/client/ButtonLinkArrow.634b0be8.js","/client/PageTransitionWrapper.e6575bc9.js","/client/ProjectCard.07238fdf.js","/client/TagList.9eaff6f9.js","/client/index.fe594b89.js","/client/[slug].8237d3c0.js","/client/about.1987ea7a.js","/client/index.14c5441d.js","/client/[slug].b5df617b.js"].concat(["/service-worker-index.html","/1.png","/desktop.ini","/favicon.ico","/favicon.png","/global.css","/icons/format_paint-24px.svg","/icons/palette-24px.svg","/logo-192.png","/logo-256.png","/logo-512.png","/logo.png","/logo.svg","/main.css","/manifest.json","/tailwind.css"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
