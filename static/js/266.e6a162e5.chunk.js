"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{2570:function(n,t,e){e.d(t,{Z:function(){return y}});var r,a,c,i,o,u=e(7689),s=e(168),p=e(6444),f=e(1087),l=p.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px gray solid;\n  width: 300px;\n  height: 525px;\n  text-align: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n"]))),d=(0,p.ZP)(f.OL)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n"]))),x=p.ZP.img(c||(c=(0,s.Z)(["\n  background-color: #ebebeb;\n"]))),h=p.ZP.p(i||(i=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-decoration: none;\n  padding: 0 5px;\n  color: black;\n"]))),m=e(9303),v=e(184),g=function(n){var t=n.id,e=n.poster,r=n.title,a=(0,u.TH)();return(0,v.jsx)(d,{to:"/movies/".concat(t),state:{from:a},children:(0,v.jsxs)(l,{children:[(0,v.jsx)(x,{src:e?"https://image.tmdb.org/t/p/original".concat(e):m,alt:r,width:"300",height:"450",loading:"lazy"}),(0,v.jsx)(h,{children:r.length<=45?r:r.slice(1,45)+"..."})]})})},Z=p.ZP.ul(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  list-style: none;\n"])));function y(n){var t=n.movies;return(0,v.jsx)(Z,{children:t&&t.map((function(n){var t=n.id,e=n.poster_path,r=n.title;return(0,v.jsx)("li",{children:(0,v.jsx)(g,{id:t,poster:e,title:r})},t)}))})}},1266:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),c=e(9085),i=e(2570),o=e(4050),u=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],p=(0,a.useState)(!1),f=(0,r.Z)(p,2),l=f[0],d=f[1];return(0,a.useEffect)((function(){d((function(n){return!n})),(0,o.Df)().then((function(n){if(s(n.results),!n.results)return c.Am.error("Sorry, there are no trending movies for today.")})).catch((function(n){return console.log(n)})).finally(d((function(n){return!n})))}),[]),(0,u.jsx)(u.Fragment,{children:!l&&e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{style:{marginTop:0},children:"Trending Movies Today"}),(0,u.jsx)(i.Z,{movies:e})]})})}},4050:function(n,t,e){e.d(t,{Df:function(){return s},IQ:function(){return l},Jh:function(){return d},TP:function(){return f},qF:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),o="53262c5d6ff8109487cc66546be6258b",u="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/trending/movie/day"),{params:{api_key:o}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/search/movie"),{params:{api_key:o,query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/movie/").concat(t),{params:{api_key:o}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/movie/").concat(t,"/credits"),{params:{api_key:o}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(u,"/movie/").concat(t,"/reviews"),{params:{api_key:o}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9303:function(n,t,e){n.exports=e.p+"static/media/default-movie.cf92e45ee113ca8af31a.jpg"}}]);
//# sourceMappingURL=266.e6a162e5.chunk.js.map