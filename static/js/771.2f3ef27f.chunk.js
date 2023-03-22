"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{2570:function(n,t,e){e.d(t,{Z:function(){return g}});var r,i,a,o,c=e(7689),u=e(168),s=e(6444),p=e(1087),d=s.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  border: 1px gray solid;\n  width: 300px;\n  height: 525px;\n"]))),l=s.ZP.p(i||(i=(0,u.Z)(["\n  font-size: 20px;\n  text-decoration: none;\n  color: black;\n  font-weight: 700;\n  padding: 0 5px;\n"]))),f=(0,s.ZP)(p.OL)(a||(a=(0,u.Z)(["\n  text-decoration: none;\n"]))),h=e(9303),x=e(184),m=function(n){var t=n.id,e=n.poster,r=n.title,i=(0,c.TH)();return(0,x.jsx)(f,{to:"/movies/".concat(t),state:{from:i},children:(0,x.jsxs)(d,{children:[(0,x.jsx)("img",{src:e?"https://image.tmdb.org/t/p/original".concat(e):h,alt:r,width:"300",height:"450",loading:"lazy"}),(0,x.jsx)(l,{children:r})]})})},v=s.ZP.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  gap: 15px;\n"])));function g(n){var t=n.movies;return(0,x.jsx)(v,{children:t&&t.map((function(n){var t=n.id,e=n.poster_path,r=n.title;return(0,x.jsx)("li",{children:(0,x.jsx)(m,{id:t,poster:e,title:r})},t)}))})}},8771:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,i,a,o,c=e(9439),u=e(2791),s=e(1087),p=e(4050),d=e(168),l=e(6444),f=e(7425),h=l.ZP.form(r||(r=(0,d.Z)(["\n  margin: 0 auto;\n  max-width: 300px;\n  overflow: hidden;\n  position: relative;\n"]))),x=l.ZP.input(i||(i=(0,d.Z)(["\n  display: inline-block;\n  font: inherit;\n  font-size: 20px;\n  border: 1px gray solid;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 100%;\n  min-width: 270px;\n  min-height: 35px;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    border: 1px solid orangered;\n  }\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=l.ZP.button(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  min-width: 39px;\n  min-height: 39px;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  border: 1px solid gray;\n  cursor: pointer;\n  background-color: white;\n\n  &:hover,\n  &:focus {\n    border: 1px solid orangered;\n  }\n"]))),v=(0,l.ZP)(f.Qcu)(o||(o=(0,d.Z)(["\n  font-size: 20px;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  :hover {\n    color: orangered;\n  }\n"]))),g=e(184),Z=function(n){var t=n.onSubmit;return(0,g.jsxs)(h,{onSubmit:t,children:[(0,g.jsx)("label",{children:(0,g.jsx)(x,{type:"text",autoFocus:!0,placeholder:"Search movie",name:"search"})}),(0,g.jsx)(m,{type:"submit",children:(0,g.jsx)(v,{})})]})},b=e(2570),w=e(1495),y=e(7596),k=function(){var n=(0,u.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,s.lr)(),a=(0,c.Z)(i,2),o=a[0],d=a[1],l=(0,u.useState)(!1),f=(0,c.Z)(l,2),h=f[0],x=f[1],m=o.get("search");(0,u.useEffect)((function(){x((function(n){return!n})),""===(null===m||void 0===m?void 0:m.trim())&&y.Am.warning("Please type something!"),(0,p.qF)(m).then(r).catch((function(n){return console.log(n)})).finally(x((function(n){return!n})))}),[m]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{onSubmit:function(n){n.preventDefault(),d({search:n.currentTarget.elements.search.value})}}),h&&(0,g.jsx)(w.Z,{}),m&&(0,g.jsx)(b.Z,{movies:e})]})}},4050:function(n,t,e){e.d(t,{Df:function(){return s},IQ:function(){return l},Jh:function(){return f},TP:function(){return d},qF:function(){return p}});var r=e(5861),i=e(7757),a=e.n(i),o=e(1243),c="53262c5d6ff8109487cc66546be6258b",u="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/trending/movie/day"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/search/movie"),{params:{api_key:c,query:t}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/movie/").concat(t),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/movie/").concat(t,"/credits"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("".concat(u,"/movie/").concat(t,"/reviews"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9303:function(n,t,e){n.exports=e.p+"static/media/default-movie.cf92e45ee113ca8af31a.jpg"}}]);
//# sourceMappingURL=771.2f3ef27f.chunk.js.map