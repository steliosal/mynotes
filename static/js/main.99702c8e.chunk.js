(this.webpackJsonpmynotes=this.webpackJsonpmynotes||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(17),s=n.n(a),o=n(12),i=n(8),l=n(2),u=n(1);var j=function(){return Object(u.jsx)("div",{className:"app-label",children:Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("h1",{children:"My Notebook"})})})},h=n(7),d=n.n(h),b=n(10),p=function(e){var t=e.note;return Object(u.jsx)("div",{className:"notes-list-item",children:Object(u.jsxs)(i.b,{to:"/note/".concat(t.id),children:[Object(u.jsx)("h3",{children:function(e){var t=e.body.split("\n")[0];return t.length>45?t.slice(0,45)+"...":t}(t)}),Object(u.jsx)("p",{children:Object(u.jsx)("span",{children:function(e){return new Date(e.updated).toLocaleDateString()}(t)})})]})})};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var v=r.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"});function x(e,t){var n=e.title,c=e.titleId,a=O(e,["title","titleId"]);return r.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"add"):n?r.createElement("title",{id:c},n):null,v)}var m=r.forwardRef(x),y=(n.p,function(){return Object(u.jsx)(i.b,{to:"/note/new",className:"floating-button",children:Object(u.jsx)(m,{className:"plusIcon"})})});var w=function(e){e.note;var t=Object(r.useState)([]),n=Object(o.a)(t,2),c=n[0],a=n[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/notes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"notes",children:[Object(u.jsxs)("div",{className:"notes-header",children:[Object(u.jsx)("h1",{className:"notes-title",children:"\u2636Notes"}),Object(u.jsx)("p",{className:"notes-count",children:c.length})]}),Object(u.jsx)("div",{className:"notes-list",children:c.map((function(e,t){return Object(u.jsx)(p,{note:e},t)}))}),Object(u.jsx)(y,{})]})},g=n(11);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var E=r.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"});function S(e,t){var n=e.title,c=e.titleId,a=k(e,["title","titleId"]);return r.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"chevron-left"):n?r.createElement("title",{id:c},n):null,E)}var C=r.forwardRef(S);n.p;var I=function(e){var t=e.match,n=e.history,c=t.params.id,a=Object(r.useState)(null),s=Object(o.a)(a,2),i=s[0],l=s[1];Object(r.useEffect)((function(){j()}),[c]);var j=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("http://localhost:5000/notes/".concat(c));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,l(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/notes/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(g.a)(Object(g.a)({},i),{},{updated:new Date}))});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/notes/".concat(c),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(g.a)(Object(g.a)({},i),{},{updated:new Date}))});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/notes/".concat(c),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({note:i})});case 2:n.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){"new"===c||i.body?"new"!==c?p():"new"===c&&null!==i&&h():f(),n.push("/")};return Object(u.jsxs)("div",{className:"note",children:[Object(u.jsxs)("div",{className:"note-header",children:[Object(u.jsx)("button",{onClick:O,children:Object(u.jsx)(C,{})}),"new"!==c?Object(u.jsx)("button",{onClick:f,children:"Delete"}):Object(u.jsx)("button",{onClick:O,children:"Done"})]}),Object(u.jsx)("textarea",{onChange:function(e){return l(Object(g.a)(Object(g.a)({},i),{},{body:e.target.value}))},value:null===i||void 0===i?void 0:i.body})]})};n(34);var P=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)(i.a,{children:Object(u.jsx)("div",{className:n?"dark-mode":"light-mode",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"app-header",children:[Object(u.jsx)(j,{}),Object(u.jsxs)("div",{className:"app-toggle",children:[Object(u.jsx)("input",{type:"checkbox",id:"switch",onChange:function(){return c(!n)}}),Object(u.jsx)("label",{for:"switch",children:"Toggle"})]})]}),Object(u.jsx)(l.a,{component:w,exact:!0,path:"/"}),Object(u.jsx)(l.a,{component:I,path:"/note/:id"})]})})})})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.99702c8e.chunk.js.map