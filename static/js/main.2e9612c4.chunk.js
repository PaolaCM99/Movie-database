(this.webpackJsonpdatabase=this.webpackJsonpdatabase||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(7),r=c.n(s),i=c(3),o=c.n(i),l=c(5),u=c(4),j=(c(14),c(1));var b=function(e){var t=e.movies,c=Object(n.useState)(!1),a=Object(u.a)(c,2),s=a[0],r=a[1],i=function(e){r(!0)},o=function(e){r(!1)};return Object(j.jsx)("main",{className:"container-movies",children:t.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"movie",children:Object(j.jsxs)("div",{className:"container-img",onClick:i,children:[Object(j.jsx)("img",{className:"img",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:" Poster"}),Object(j.jsx)("p",{className:"title",children:e.title})]})},e.id),!1===s?"":Object(j.jsxs)("div",{className:"overview",children:[Object(j.jsx)("i",{className:"fas fa-times modal-close",onClick:o}),Object(j.jsxs)("article",{className:"modal-information",children:[Object(j.jsx)("h3",{children:"Overview"}),Object(j.jsxs)("p",{children:[e.overview," "]}),Object(j.jsx)("h3",{children:" Fecha de lanzamiento"}),Object(j.jsx)("p",{children:e.release_date})]})]})]})}))})};c(16),c(17);var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(u.a)(s,2),i=r[0],d=r[1],h=Object(n.useState)(""),m=Object(u.a)(h,2),p=m[0],f=m[1],O="6de2a6f114eee5868a9274ad2583836c",v="https://api.themoviedb.org/3/",x="".concat(v,"discover/movie?sort_by=popularity.des&api_key=").concat(O,"&language=en-US&page=3"),g="".concat(v,"search/movie?api_key=").concat(O,"&query=").concat(i),N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.results),console.log(c.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,f(c.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),w(),!p){e.next=4;break}return e.abrupt("return",a(p));case 4:f("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N(),w()}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsxs)("span",{className:"namePage",onClick:function(){return N()},children:[Object(j.jsx)("i",{class:"fas fa-film",children:" "})," Movies"]}),Object(j.jsx)("div",{className:"search",children:Object(j.jsxs)("form",{onSubmit:y,id:"myForm",children:[Object(j.jsx)("input",{type:"search",placeholder:"Busca tu pelicula...",value:i,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("i",{class:"fas fa-search search-icon"})})]})}),Object(j.jsxs)("ul",{className:"lista",children:[Object(j.jsx)("li",{className:"login",children:" Iniciar sesion"}),Object(j.jsx)("li",{className:"signup",children:"Registrarme"})]})]}),Object(j.jsx)(b,{movies:c})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),h()}},[[18,1,2]]]);
//# sourceMappingURL=main.2e9612c4.chunk.js.map