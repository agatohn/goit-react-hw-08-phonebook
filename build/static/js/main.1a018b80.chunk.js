(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(26),o=n.n(a),s=n(14),u=n(6),i=n(3),d=n(18),l=n(45),b=n.n(l),j=n(35),f=n(7),h={key:"auth",storage:b.a,whitelist:["token"]},O=Object(i.a)({reducer:{auth:Object(d.g)(h,f.b),contacts:j.c},middleware:function(e){return e({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})},devTools:!1}),g=Object(d.h)(O),p=n(46),v=n(16),C=n(28),x=n(5),m=n(1),N=["children","restricted","redirectTo"];function k(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,o=Object(C.a)(e,N),s=Object(u.c)(f.c.getIsLoggedIn)&&r;return Object(m.jsx)(x.b,Object(v.a)(Object(v.a)({},o),{},{children:s?Object(m.jsx)(x.a,{to:a}):t}))}var y=["children","redirectTo"];function _(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(C.a)(e,y),a=Object(u.c)(f.c.getIsLoggedIn);return Object(m.jsx)(x.b,Object(v.a)(Object(v.a)({},c),{},{children:a?t:Object(m.jsx)(x.a,{to:r})}))}var I=n(22),R=n.n(I),S=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.b,{className:R.a.nav,activeClassName:R.a.activeNav,to:"/register",exact:!0,children:"register"}),Object(m.jsx)(s.b,{className:R.a.nav,activeClassName:R.a.activeNav,to:"/login",exact:!0,children:"login"})]})},E=n(23),w=n.n(E),U=function(){var e=Object(u.c)(f.c.getIsLoggedIn);return Object(m.jsxs)("nav",{children:[Object(m.jsx)(s.b,{className:w.a.nav,activeClassName:w.a.activeNav,to:"/",exact:!0,children:"home"}),e&&Object(m.jsx)(s.b,{className:w.a.nav,activeClassName:w.a.activeNav,to:"/phonebook",exact:!0,children:"phonebook"})]})},L=n(29),q=n.n(L),T=function(){var e=Object(u.b)(),t=Object(u.c)(f.c.getUserName);return Object(m.jsxs)("div",{className:q.a.userWrapper,children:[Object(m.jsxs)("span",{className:q.a.userName,children:["Loged in as: ",t]}),Object(m.jsx)("button",{className:q.a.logBtn,type:"button",onClick:function(){e(f.a.logOut())},children:"logout"})]})},W=n(48),F=n.n(W);function z(){var e=Object(u.c)(f.c.getIsLoggedIn);return Object(m.jsxs)("header",{className:F.a.headerWrapper,children:[Object(m.jsx)(U,{})," ",e?Object(m.jsx)(T,{}):Object(m.jsx)(S,{})]})}var B=n(49),A=n.n(B),M=(n(104),Object(r.lazy)((function(){return n.e(6).then(n.bind(null,110))}))),V=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,111))})),J=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,112))})),D=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,113))}));function H(){var e=Object(u.b)(),t=Object(u.c)(f.c.getIsRefreshingUser);return Object(r.useEffect)((function(){e(f.a.refreshCurrentUser())}),[e]),!t&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(z,{}),Object(m.jsx)(x.d,{children:Object(m.jsxs)(r.Suspense,{fallback:Object(m.jsx)("div",{children:Object(m.jsx)(A.a,{className:"Loader",type:"ThreeDots",color:"#00BFFF",height:20,width:100,timeout:3e3})}),children:[Object(m.jsx)(k,{exact:!0,path:"/",children:Object(m.jsx)(M,{})}),Object(m.jsx)(k,{path:"/register",restricted:!0,children:Object(m.jsx)(V,{})}),Object(m.jsx)(k,{path:"/login",restricted:!0,redirectTo:"/phonebook",children:Object(m.jsx)(J,{})}),Object(m.jsx)(_,{path:"/phonebook",restricted:!0,redirectTo:"/login",children:Object(m.jsx)(D,{})})]})})]})}o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(u.a,{store:O,children:Object(m.jsx)(p.a,{loading:null,persistor:g,children:Object(m.jsx)(s.a,{children:Object(m.jsx)(H,{})})})})}),document.getElementById("root"))},22:function(e,t,n){e.exports={nav:"AuthNavigation_nav__1Jirv",activeNav:"AuthNavigation_activeNav__25nrg"}},23:function(e,t,n){e.exports={nav:"Navigation_nav__1YopS",activeNav:"Navigation_activeNav__2re4o"}},29:function(e,t,n){e.exports={userWrapper:"Menu_userWrapper__1Tu4U",userName:"Menu_userName__1T-bx",logBtn:"Menu_logBtn__tQ0eS"}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return N}));var r,c,a,o=n(3),s={getContactsRequest:Object(o.b)("contacts/getContactsRequest"),getContactsSuccess:Object(o.b)("contacts/getContactsSuccess"),getContactsError:Object(o.b)("contacts/getContactsError"),addContactRequest:Object(o.b)("contacts/addContactRequest"),addContactSuccess:Object(o.b)("contacts/addContactSuccess"),addContactError:Object(o.b)("contacts/addContactError"),deleteContactRequest:Object(o.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(o.b)("contacts/deleteContactSuccess"),deleteContactError:Object(o.b)("contacts/deleteContactError"),changeFilter:Object(o.b)("contacts/filter")},u=n(27),i=function(e){return e.contacts.contacts},d=function(e){return e.contacts.filter},l=Object(u.a)([i,d],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),b={getContacts:i,getFilter:d,getVisibleContacts:l},j=n(13),f=n.n(j),h={getContact:function(){return function(e){e(s.getContactsRequest()),f.a.get("/contacts").then((function(t){var n=t.data;return e(s.getContactsSuccess(n))})).catch((function(t){return e(s.getContactsError(t))}))}},addContact:function(e){var t=e.name,n=e.number;return function(e,r){var c={name:t,number:n},a=r().contacts.contacts;if(null===a||void 0===a?void 0:a.some((function(e){return e.name===t})))return e(s.addContactError("".concat(t," is alredy exist")));e(s.addContactRequest()),f.a.post("/contacts",c).then((function(t){var n=t.data;return e(s.addContactSuccess(n))})).catch((function(t){return e(s.addContactError(t))}))}},deleteContact:function(e){return function(t){t(s.deleteContactRequest()),f.a.delete("/contacts/".concat(e)).then((function(){return t(s.deleteContactSuccess(e))})).catch((function(e){return t(s.deleteContactError(e))}))}}},O=n(2),g=n(50),p=n(8),v=Object(o.d)([],(r={},Object(O.a)(r,s.getContactsSuccess,(function(e,t){return t.payload})),Object(O.a)(r,s.addContactSuccess,(function(e,t){var n=t.payload;return[].concat(Object(g.a)(e),[n])})),Object(O.a)(r,s.addContactError,(function(e,t){var n=t.payload;return alert(n)})),Object(O.a)(r,s.deleteContactSuccess,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),C=Object(o.d)("",Object(O.a)({},s.changeFilter,(function(e,t){return t.payload}))),x=Object(o.d)(!1,(c={},Object(O.a)(c,s.getContactsRequest,(function(){return!0})),Object(O.a)(c,s.getContactsSuccess,(function(){return!1})),Object(O.a)(c,s.getContactsError,(function(){return!1})),Object(O.a)(c,s.addContactRequest,(function(){return!0})),Object(O.a)(c,s.addContactSuccess,(function(){return!1})),Object(O.a)(c,s.addContactError,(function(){return!1})),Object(O.a)(c,s.deleteContactRequest,(function(){return!0})),Object(O.a)(c,s.deleteContactSuccess,(function(){return!1})),Object(O.a)(c,s.deleteContactError,(function(){return!1})),c)),m=Object(o.d)(null,(a={},Object(O.a)(a,s.getContactsError,(function(e,t){return t.payload})),Object(O.a)(a,s.addContactError,(function(e,t){return t.payload})),Object(O.a)(a,s.deleteContactError,(function(e,t){return t.payload})),a)),N=Object(p.b)({contacts:v,filter:C,loading:x,error:m})},48:function(e,t,n){e.exports={headerWrapper:"Header_headerWrapper__Wtm4S"}},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return g}));var r=n(2),c=n(3),a=n(17),o=n.n(a),s=n(21),u=n(13),i=n.n(u);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var d,l=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){i.a.defaults.headers.common.Authorization=""},j=Object(c.c)("auth/register",function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:return c=e.sent,a=c.data,l(a.token),e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(c.c)("auth/login",function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:return c=e.sent,a=c.data,l(a.token),e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(c.c)("auth/logout",Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/users/logout");case 3:b(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),O=Object(c.c)("auth/refresh",function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return l(c),e.prev=5,e.next=8,i.a.get("/users/current");case 8:return a=e.sent,s=a.data,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),g={register:j,logOut:h,logIn:f,refreshCurrentUser:O},p=Object(c.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshingUser:!1,error:null},extraReducers:(d={},Object(r.a)(d,g.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.error=null})),Object(r.a)(d,g.register.rejected,(function(e,t){e.error=t.payload})),Object(r.a)(d,g.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.error=null})),Object(r.a)(d,g.logIn.rejected,(function(e,t){e.error=t.payload})),Object(r.a)(d,g.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1,e.isRefreshingUser=!1,e.error=null})),Object(r.a)(d,g.refreshCurrentUser.pending,(function(e){e.isRefreshingUser=!0})),Object(r.a)(d,g.refreshCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isRefreshingUser=!1})),Object(r.a)(d,g.refreshCurrentUser.rejected,(function(e){e.isRefreshingUser=!1})),d)}).reducer,v={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getIsRefreshingUser:function(e){return e.auth.isRefreshingUser}}}},[[105,1,2]]]);
//# sourceMappingURL=main.1a018b80.chunk.js.map