(this.webpackJsonpdatabase=this.webpackJsonpdatabase||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(5),r=c.n(a),i=c(4),o=c.n(i),l=c(6),j=c(2),u=(c(12),c(0));var b=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a="".concat("https://api.themoviedb.org/3/","discover/movie?sort_by=popularity.des&api_key=").concat("6de2a6f114eee5868a9274ad2583836c"),r=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r(),console.log(c)}),[]),Object(u.jsx)("main",{className:"container-movies",children:c.map((function(e){return Object(u.jsxs)("div",{className:"movie",children:[Object(u.jsx)("p",{className:"title",children:e.title}),Object(u.jsx)("div",{className:"container-img",children:Object(u.jsx)("img",{className:"img",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:" Poster"})}),Object(u.jsxs)("div",{className:"overview",children:[" Overview: ",Object(u.jsx)("br",{}),e.overview]})]})}))})};c(14);var d=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)("span",{className:"namePage",children:" Movies"}),Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)("input",{type:"search",value:c,onChange:function(e){n(e.target.value),console.log(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:" Buscar"})]}),Object(u.jsxs)("ul",{className:"lista",children:[Object(u.jsx)("li",{className:"login",children:" Iniciar sesion"}),Object(u.jsx)("li",{className:"signup",children:"Registrarme"})]})]})};var v=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{}),Object(u.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.54af7a9b.chunk.js.map