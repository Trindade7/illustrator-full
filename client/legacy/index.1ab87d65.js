import{_ as t,a as n,b as e,c as r,i as o,d as s,S as a,s as c,e as i,f,w as l,x as u,g as h,j as p,k as m,y as v,m as d,o as j,n as $,z as g,q as w,A as y,B as x,C as b,h as E,F as P,G as D,H as I,t as R,l as S,I as T,J as A,K as M,L as V}from"./client.5f5394b2.js";import{P as B}from"./PageTransitionWrapper.7fda4e8e.js";import{P as C}from"./ProjectCard.d9be528b.js";import"./TagList.bb0754a3.js";function H(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=n(t);if(r){var a=n(this).constructor;o=Reflect.construct(s,arguments,a)}else o=s.apply(this,arguments);return e(this,o)}}function L(t,n,e){var r=t.slice();return r[1]=n[e],r}function k(t){for(var n,e,r,o,s=[t[1]],a={},c=0;c<s.length;c+=1)a=V(a,s[c]);return e=new C({props:a}),{c:function(){n=i("div"),l(e.$$.fragment),r=f(),this.h()},l:function(t){n=h(t,"DIV",{style:!0,class:!0});var o=E(n);v(e.$$.fragment,o),r=m(o),o.forEach(p),this.h()},h:function(){P(n,"flex","1 1 360px"),d(n,"class","project-card-container w-full ")},m:function(t,s){$(t,n,s),g(e,n,null),j(n,r),o=!0},p:function(t,n){var r=1&n?D(s,[I(t[1])]):{};e.$set(r)},i:function(t){o||(y(e.$$.fragment,t),o=!0)},o:function(t){x(e.$$.fragment,t),o=!1},d:function(t){t&&p(n),b(e)}}}function q(t){for(var n,e,r,o,s,a,c,l,u,v=t[0],g=[],w=0;w<v.length;w+=1)g[w]=k(L(t,v,w));var b=function(t){return x(g[t],1,1,(function(){g[t]=null}))};return{c:function(){n=i("div"),e=i("h3"),r=R("My projects"),o=f(),s=i("p"),a=R("A list of my latest Software projects. The majority of them will be open\r\n      source, however, some will not since I will also include private projects\r\n      where the client allows me to list them!"),c=f(),l=i("div");for(var t=0;t<g.length;t+=1)g[t].c();this.h()},l:function(t){n=h(t,"DIV",{class:!0});var i=E(n);e=h(i,"H3",{class:!0});var f=E(e);r=S(f,"My projects"),f.forEach(p),o=m(i),s=h(i,"P",{class:!0});var u=E(s);a=S(u,"A list of my latest Software projects. The majority of them will be open\r\n      source, however, some will not since I will also include private projects\r\n      where the client allows me to list them!"),u.forEach(p),c=m(i),l=h(i,"DIV",{class:!0});for(var v=E(l),d=0;d<g.length;d+=1)g[d].l(v);v.forEach(p),i.forEach(p),this.h()},h:function(){d(e,"class","font-serif font-bold text-4xl uppercase pt-10"),d(s,"class","text-xl py-8 max-w-2xl"),d(l,"class","projects py-8 flex flex-row flex-wrap gap-4"),d(n,"class","posts p-4 pb-32 m-auto")},m:function(t,i){$(t,n,i),j(n,e),j(e,r),j(n,o),j(n,s),j(s,a),j(n,c),j(n,l);for(var f=0;f<g.length;f+=1)g[f].m(l,null);u=!0},p:function(t,n){if(1&n){var e;for(v=t[0],e=0;e<v.length;e+=1){var r=L(t,v,e);g[e]?(g[e].p(r,n),y(g[e],1)):(g[e]=k(r),g[e].c(),y(g[e],1),g[e].m(l,null))}for(T(),e=v.length;e<g.length;e+=1)b(e);A()}},i:function(t){if(!u){for(var n=0;n<v.length;n+=1)y(g[n]);u=!0}},o:function(t){g=g.filter(Boolean);for(var n=0;n<g.length;n+=1)x(g[n]);u=!1},d:function(t){t&&p(n),M(g,t)}}}function z(t){var n,e,r,o;return r=new B({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),{c:function(){n=i("meta"),e=f(),l(r.$$.fragment),this.h()},l:function(t){var o=u('[data-svelte="svelte-1l1v8cc"]',document.head);n=h(o,"META",{name:!0,content:!0}),o.forEach(p),e=m(t),v(r.$$.fragment,t),this.h()},h:function(){d(n,"name","Description"),d(n,"content","My latest Software development projects"),document.title="Projects"},m:function(t,s){j(document.head,n),$(t,e,s),g(r,t,s),o=!0},p:function(t,n){var e=w(n,1)[0],o={};17&e&&(o.$$scope={dirty:e,ctx:t}),r.$set(o)},i:function(t){o||(y(r.$$.fragment,t),o=!0)},o:function(t){x(r.$$.fragment,t),o=!1},d:function(t){p(n),t&&p(e),b(r,t)}}}function F(){return this.fetch("projects.json").then((function(t){return t.json()})).then((function(t){return{projects:t}}))}function G(t,n,e){var r=n.projects,o=void 0===r?[]:r;return t.$$set=function(t){"projects"in t&&e(0,o=t.projects)},[o]}var J=function(n){t(i,a);var e=H(i);function i(t){var n;return r(this,i),n=e.call(this),o(s(n),t,G,z,c,{projects:0}),n}return i}();export default J;export{F as preload};
