(this["webpackJsonpgtl-liff"]=this["webpackJsonpgtl-liff"]||[]).push([[0],{175:function(e,n){},177:function(e,n){},187:function(e,n){},189:function(e,n){},213:function(e,n){},214:function(e,n){},219:function(e,n){},221:function(e,n){},228:function(e,n){},247:function(e,n){},310:function(e,n,t){},311:function(e,n,t){},312:function(e,n,t){"use strict";t.r(n);var c=t(15),i=t.n(c),o=t(141),r=t.n(o),s=t(46),a=(t(310),t(36)),f=t.n(a),u=t(143),l=t(144),j=(t(311),t(6)),d=function(){var e=Object(c.useState)(""),n=Object(l.a)(e,2),t=n[0],i=n[1],o=Object(s.useLiff)(),r=o.error,a=o.liff,d=o.isLoggedIn,b=o.ready;Object(c.useEffect)((function(){d&&Object(u.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getProfile();case 2:n=e.sent,i(n.displayName);case 4:case"end":return e.stop()}}),e)})))()}),[a,d]);return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:r?Object(j.jsx)("p",{children:"Something is wrong."}):b?d?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Welcome to the react-liff demo app, ",t,"!"]}),Object(j.jsx)("button",{className:"App-button",onClick:a.logout,children:"Logout"})]}):Object(j.jsx)("button",{className:"App-button",onClick:a.login,children:"Login"}):Object(j.jsx)("p",{children:"Loading..."})})})};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(s.LiffProvider,{liffId:"",stubEnabled:!1,children:Object(j.jsx)(d,{})})}),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.34b2eb5e.chunk.js.map