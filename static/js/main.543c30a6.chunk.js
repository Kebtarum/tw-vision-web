(this["webpackJsonptz-work"]=this["webpackJsonptz-work"]||[]).push([[0],{46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t(0),r=t.n(s),c=t(18),o=t.n(c),i=(t(46),t(47),t(20)),u=t(21),l=t(23),m=t(22),h=(t(48),t(3)),j=t(9),p=t(13),b=t.n(p),d=t(17),f=t(14),O=t(38),_=(function(){var e}(),O.create({baseURL:"http://erp.apptrix.ru/api/clients"})),x=function(e,n,t,a,s,r,c){var o={user:{email:e,password:n},phone:t,invited_by:a,name:s,surname:r,country_key:c};return _.post("/create/",o).then((function(e){return e.data}))},v=function(e,n){return _.post("/token/",{username:e,password:n}).then((function(e){return e.data}))},g=function(e){return _.post("/token/refresh",{refresh:"".concat(e)}).then((function(e){return e.data}))},N=function(e,n){return _.get("/".concat(e,"/"),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){return e.data}))},y={isAuth:!1,savedToken:null,email:null,username:null,name:null,surname:null,phone:null},k=function(e){return{type:"AUTH-SUCCESS",token:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CLIENT-ID":return Object(f.a)({},e);case"AUTH-SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{savedToken:n.token,isAuth:!0});case"SET-USER-DATA":return Object(f.a)(Object(f.a)({},e),{},{email:n.email,username:n.username,name:n.name,surname:n.surname,phone:n.phone});case"LOGOUT":return Object(f.a)(Object(f.a)({},e),{},{isAuth:!1,savedToken:null,email:null,username:null,name:null,surname:null,phone:null});default:return e}},w=t(39),T=t(11),U=T.combineReducers,I=T.createStore,A=T.applyMiddleware,C=I(U({auth:S}),A(w.a));window.__store__=C;var E=C,L=t(12),R=t(11);var M=function(e){return Object(a.jsx)("div",{className:"MainPage",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.email}),Object(a.jsx)("h3",{children:e.username}),Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)("h3",{children:e.surname}),Object(a.jsx)("h3",{children:e.phone})]}),Object(a.jsx)("button",{onClick:function(){e.logout()},className:"btn",children:"Logout"})]})})},D=function(e){Object(l.a)(t,e);var n=Object(m.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getUser(localStorage.token_userId,localStorage.token_access).catch((function(){return e.props.history.push("/login")}))}},{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)("div",{className:"MainPage",children:Object(a.jsx)(M,{logout:this.props.logout,email:this.props.email,username:this.props.username,name:this.props.name,surname:this.props.surname,phone:this.props.phone})}):Object(a.jsx)(h.a,{to:"/login"})}}]),t}(r.a.Component),F=Object(R.compose)(Object(L.b)((function(e){return{getUser:e.auth.getUser,userId:e.auth.userId,redirectTo:e.auth.redirectTo,isAuth:e.auth.isAuth,email:e.auth.email,username:e.auth.username,name:e.auth.name,surname:e.auth.surname,phone:e.auth.phone}}),{getUser:function(e,n){return function(){var t=Object(d.a)(b.a.mark((function t(a){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e,n);case 2:(s=t.sent)&&a((r=s.email,c=s.username,o=s.name,i=s.surname,u=s.phone,{type:"SET-USER-DATA",email:r,username:c,name:o,surname:i,phone:u}));case 4:case"end":return t.stop()}var r,c,o,i,u}),t)})));return function(e){return t.apply(this,arguments)}}()},refreshToken:function(e){return function(){var n=Object(d.a)(b.a.mark((function n(t){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e);case 2:(a=n.sent)&&(console.log(a),localStorage.setItem("token_access",a.access));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},logout:function(){return localStorage.removeItem("token_access"),localStorage.removeItem("token_refresh"),{type:"LOGOUT"}}}),h.f)(D),P=t(8);t(73);var z=Object(R.compose)(Object(L.b)((function(e){return{userId:e.auth.userId,redirectTo:e.auth.redirectTo,isAuth:e.auth.isAuth}}),{giveToken:function(e,n){return function(){var t=Object(d.a)(b.a.mark((function t(a){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e,n);case 2:(s=t.sent)&&(console.log(s),localStorage.setItem("token_access",s.access),localStorage.setItem("token_refresh",s.refresh),localStorage.setItem("token_userId",s.client_id),a(k(s.access)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),h.f)((function(e){var n=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"};return e.isAuth?Object(a.jsx)(h.a,{to:"/"}):Object(a.jsxs)("div",{className:"Login",children:[Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(j.b,{className:"nav__item",to:"/signup",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 SignUp"}),Object(a.jsx)(j.b,{className:"nav__item",to:"/login",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 Login"})]}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(P.b,{onSubmit:function(n){e.giveToken(n.username,n.password).then((function(){return e.history.push("/")})).catch((function(e){console.log(e),alert("err")}))},children:function(e){return Object(a.jsxs)("form",{className:"form",onSubmit:e.handleSubmit,children:[Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),Object(a.jsx)(P.a,{className:"form__input",name:"username",component:"input",placeholder:"Email",type:"email",validate:n})]}),Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)(P.a,{className:"form__input",name:"password",component:"input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",validate:n})]}),Object(a.jsx)("button",{className:"btn form__btn",type:"submit",children:"Submit"})]})}})})]})}));t(74);var B=Object(R.compose)(Object(L.b)((function(e){return{}}),{registerMe:function(e){return function(){var n=Object(d.a)(b.a.mark((function n(t){var s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(e.email,e.password,e.phone,e.invited_by,e.name,e.surname,e.country_key);case 2:if(s=n.sent,alert("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"),!s){n.next=6;break}return n.abrupt("return",Object(a.jsx)(h.a,{to:"/login"}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),h.f)((function(e){return Object(a.jsxs)("div",{className:"signup",children:[Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(j.b,{className:"nav__item",to:"/signup",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 SignUp"}),Object(a.jsx)(j.b,{className:"nav__item",to:"/login",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 Login"})]}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(P.b,{onSubmit:function(n){e.registerMe(n).then((function(){return e.history.push("/login")})).catch((function(e){var n=[];e.response.data.user.email&&n.push("\u041f\u043e\u043b\u0435 \u0410\u0434\u0435\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b: "+e.response.data.user.email+"\n"),e.response.data.user.password&&n.push("\u041f\u043e\u043b\u0435 \u041f\u0430\u0440\u043e\u043b\u044c: "+e.response.data.user.password+"\n"),e.response.data.invited_by&&n.push("\u041f\u043e\u043b\u0435 Invited by: "+e.response.data.invited_by+"\n"),e.response.data.name&&n.push("\u041f\u043e\u043b\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f: "+e.response.data.name+"\n"),e.response.data.surname&&n.push("\u041f\u043e\u043b\u0435 \u0412\u0430\u0448\u0430 \u0444\u0430\u043c\u0438\u043b\u0438\u044f: "+e.response.data.surname+"\n"),e.response.data.country_key&&n.push("\u041f\u043e\u043b\u0435 \u041a\u043b\u044e\u0447 \u0441\u0442\u0440\u0430\u043d\u044b: "+e.response.data.country_key+"\n"),alert(n)}))},children:function(e){return Object(a.jsxs)("form",{className:"form",onSubmit:e.handleSubmit,children:[Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"\u0410\u0434\u0440\u0435\u0441\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"}),Object(a.jsx)(P.a,{className:"form__input",name:"email",component:"input",placeholder:"Email",type:"email"})]}),Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)(P.a,{className:"form__input",name:"password",component:"input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password"})]}),Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(a.jsx)(P.a,{className:"form__input",name:"phone",component:"input",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"})]}),Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"Invited by"}),Object(a.jsx)(P.a,{className:"form__input",name:"invited_by",component:"select",placeholder:"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434",children:Object(a.jsx)("option",{selected:!0,value:"RU-637164",children:"RU-637164"})})]}),Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(a.jsx)(P.a,{className:"form__input",name:"name",component:"input",placeholder:"\u0418\u043c\u044f"})]}),Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"\u0412\u0430\u0448\u0430 \u0444\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(a.jsx)(P.a,{className:"form__input",name:"surname",component:"input",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"})]}),Object(a.jsxs)("div",{className:"form__item",children:[Object(a.jsx)("label",{className:"form__label",children:"\u0414\u0432\u0443\u0445\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u044b"}),Object(a.jsx)(P.a,{className:"form__input",name:"country_key",component:"select",placeholder:"\u043a\u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u044b",children:Object(a.jsx)("option",{selected:!0,value:"RU",children:"RU"})})]}),Object(a.jsx)("button",{className:"btn form__btn",type:"submit",children:"Submit"})]})}})})]})})),G=function(e){Object(l.a)(t,e);var n=Object(m.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=localStorage.token_access;return e&&this.props.authSuccess(e),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h.b,{exact:!0,path:"/",children:Object(a.jsx)(F,{})}),Object(a.jsx)(h.b,{path:"/signup",children:Object(a.jsx)(B,{})}),Object(a.jsx)(h.b,{path:"/login",children:Object(a.jsx)(z,{})})]})}}]),t}(r.a.Component),H=Object(L.b)((function(e){return{}}),{authSuccess:k})(G),J=function(e){return Object(a.jsx)(L.a,{store:E,children:Object(a.jsx)(j.a,{children:Object(a.jsx)(H,{})})})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),s(e),r(e),c(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),q()}},[[75,1,2]]]);
//# sourceMappingURL=main.543c30a6.chunk.js.map