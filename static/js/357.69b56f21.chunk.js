"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[357],{6357:function(t,n,r){r.r(n);var e=r(9439),a=r(2791),u=r(7689),c=r(4050),s=r(1495),i=r(184);n.default=function(){var t=(0,a.useState)(null),n=(0,e.Z)(t,2),r=n[0],o=n[1],p=(0,a.useState)(!1),f=(0,e.Z)(p,2),l=f[0],h=f[1],v=(0,u.UO)().id;return(0,a.useEffect)((function(){h((function(t){return!t})),(0,c.Jh)(v).then((function(t){o(t)})).catch((function(t){return console.log(t)})).finally(h((function(t){return!t})))}),[v,r]),(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)(s.Z,{}),(0,i.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",listStyle:"none",textAlign:"start",gap:"10px"},children:r&&r.length>0?r.map((function(t){var n=t.id,r=t.author,e=t.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h4",{children:r}),(0,i.jsx)("p",{style:{paddingRight:"30px"},children:e})]},n)})):"We don't have any reviews about this movie yet."})]})}},4050:function(t,n,r){r.d(n,{Df:function(){return o},IQ:function(){return l},Jh:function(){return h},TP:function(){return f},qF:function(){return p}});var e=r(5861),a=r(7757),u=r.n(a),c=r(1243),s="53262c5d6ff8109487cc66546be6258b",i="https://api.themoviedb.org/3",o=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(i,"/trending/movie/day"),{params:{api_key:s}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(i,"/search/movie"),{params:{api_key:s,query:n}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(i,"/movie/").concat(n),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(i,"/movie/").concat(n,"/credits"),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("".concat(i,"/movie/").concat(n,"/reviews"),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=357.69b56f21.chunk.js.map