import{_ as t,a as n,b as e,c as r,i as a,d as o,S as s,s as c,e as f,p as i,A as u,B as l,f as h,j as p,q as v,C as d,k as m,m as g,l as $,D as y,r as x,v as b,x as E,E as j,t as D,g as P,h as R,u as A,L}from"./client.4d71916d.js";import{P as S}from"./PageTransitionWrapper.15bfbf62.js";function k(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(r){var s=n(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return e(this,a)}}function w(t,n,e){var r=t.slice();return r[1]=n[e],r}function B(t){var n,e,r,a,o,s,c,u,l=t[1].title+"",d=t[1].lead+"";return{c:function(){n=f("li"),e=f("a"),r=D(l),o=i(),s=f("p"),c=D(d),u=i(),this.h()},l:function(t){n=h(t,"LI",{});var a=P(n);e=h(a,"A",{class:!0,rel:!0,href:!0});var f=P(e);r=R(f,l),f.forEach(p),o=v(a),s=h(a,"P",{class:!0});var i=P(s);c=R(i,d),i.forEach(p),u=v(a),a.forEach(p),this.h()},h:function(){m(e,"class","text-4xl font-bold font-serif"),m(e,"rel","prefetch"),m(e,"href",a="blog/"+t[1].slug),m(s,"class","py-2")},m:function(t,a){$(t,n,a),g(n,e),g(e,r),g(n,o),g(n,s),g(s,c),g(n,u)},p:function(t,n){1&n&&l!==(l=t[1].title+"")&&A(r,l),1&n&&a!==(a="blog/"+t[1].slug)&&m(e,"href",a),1&n&&d!==(d=t[1].lead+"")&&A(c,d)},d:function(t){t&&p(n)}}}function I(t){for(var n,e,r,a,o,s=t[0],c=[],u=0;u<s.length;u+=1)c[u]=B(w(t,s,u));return{c:function(){n=f("div"),e=f("h4"),r=D("experience"),a=i(),o=f("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){n=h(t,"DIV",{class:!0});var s=P(n);e=h(s,"H4",{class:!0});var f=P(e);r=R(f,"experience"),f.forEach(p),a=v(s),o=h(s,"UL",{});for(var i=P(o),u=0;u<c.length;u+=1)c[u].l(i);i.forEach(p),s.forEach(p),this.h()},h:function(){m(e,"class","font-bold uppercase text-corporateDark-primary py-5"),m(n,"class","posts container p-4 pt-10")},m:function(t,s){$(t,n,s),g(n,e),g(e,r),g(n,a),g(n,o);for(var f=0;f<c.length;f+=1)c[f].m(o,null)},p:function(t,n){if(1&n){var e;for(s=t[0],e=0;e<s.length;e+=1){var r=w(t,s,e);c[e]?c[e].p(r,n):(c[e]=B(r),c[e].c(),c[e].m(o,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=s.length}},d:function(t){t&&p(n),L(c,t)}}}function T(t){var n,e,r,a;return r=new S({props:{$$slots:{default:[I]},$$scope:{ctx:t}}}),{c:function(){n=f("meta"),e=i(),u(r.$$.fragment),this.h()},l:function(t){var a=l('[data-svelte="svelte-yjzi3u"]',document.head);n=h(a,"META",{name:!0,content:!0}),a.forEach(p),e=v(t),d(r.$$.fragment,t),this.h()},h:function(){m(n,"name","Description"),m(n,"content","Posts about Software development, mostly Web, and mental health"),document.title="Blog"},m:function(t,o){g(document.head,n),$(t,e,o),y(r,t,o),a=!0},p:function(t,n){var e=x(n,1)[0],a={};17&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a)},i:function(t){a||(b(r.$$.fragment,t),a=!0)},o:function(t){E(r.$$.fragment,t),a=!1},d:function(t){p(n),t&&p(e),j(r,t)}}}function W(){return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function q(t,n,e){var r=n.posts;return t.$$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}var z=function(n){t(f,s);var e=k(f);function f(t){var n;return r(this,f),n=e.call(this),a(o(n),t,q,T,c,{posts:0}),n}return f}();export default z;export{W as preload};