(this["webpackJsonpreact-props-practice-exercise-29-3-react-lecture"]=this["webpackJsonpreact-props-practice-exercise-29-3-react-lecture"]||[]).push([[0],{46:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(24),l=a.n(r),o=a(27),u=a(10),i=a(29);a(60),a(52),a(61);i.a.initializeApp({apiKey:"AIzaSyC5vXHNZPzvDos8rnfQeSAWyEsJqQZaaIk",authDomain:"last-hand-in.firebaseapp.com",projectId:"last-hand-in",storageBucket:"last-hand-in.appspot.com",messagingSenderId:"11932855949",appId:"1:11932855949:web:4da0330b47e5fb2dc67cc4"});i.a.auth();var m=i.a.firestore(),s=(i.a.storage(),i.a.firestore.FieldValue.serverTimestamp,function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(!0),i=Object(u.a)(l,2),s=i[0],d=i[1],p=Object(n.useState)(null),b=Object(u.a)(p,2),f=b[0],E=b[1];return Object(n.useEffect)((function(){m.collection(e).onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),d(!1),r(t),E(null)}),(function(e){console.log(e.message),r(null),E("could not fetch the data")}))}),[e]),{data:c,isPending:s,error:f}}),d=a(28),p=a(7),b=a(83),f=a(85),E=a(88),v=a(86),h=Object(b.a)({root:{flexGrow:1}});function g(){var e=h(),t=c.a.useState(0),a=Object(u.a)(t,2),n=a[0],r=a[1];return c.a.createElement(f.a,{className:e.root},c.a.createElement(E.a,{value:n,onChange:function(e,t){r(t)},indicatorColor:"primary",textColor:"primary",centered:!0},c.a.createElement(v.a,{label:"Home",component:d.b,to:"/"}),c.a.createElement(v.a,{label:"Add Books",component:d.b,to:"/create"}),c.a.createElement(v.a,{label:"View Books",component:d.b,to:"/viewBooks"})))}var j=a(87),O=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1];return c.a.createElement("div",{className:"create"},r,c.a.createElement("br",null),"Add writer:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",value:r,onChange:function(e){l(e.target.value)},placeholder:"writer"}),"",c.a.createElement("br",null),c.a.createElement("button",{className:"createButton",onClick:function(){var e=m.collection("collection"),t={name:r,complete:!1};e.add(t).then((function(){return l("")}))}},"Create"))},C=a(39),S=a.n(C),k=a(43),y=function(e,t){var a=Object(n.useState)(null),c=Object(u.a)(a,2),r=c[0],l=c[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),s=i[0],d=i[1];return{error:r,create:function(){console.log("Hello")},deleteDoc:function(){var a=m.collection(e).doc(t);try{return a.delete()}catch(n){l(n.message)}},update:function(){var t=Object(k.a)(S.a.mark((function t(a,n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(a,n),d(!0);try{m.collection(e).doc(a).update({name:n}).update({title:n}).update({genre:n})}catch(c){l(c.message)}finally{d(!1)}case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),loading:s}},w=function(e){var t=Object(n.useState)(e.data.name),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(e.data.title),i=Object(u.a)(o,2),m=i[0],s=i[1],d=Object(n.useState)(e.data.genre),p=Object(u.a)(d,2),b=p[0],f=p[1],E=y("collection",e.data.id),v=E.deleteDoc,h=E.update,g=function(e){l(e.target.value),s(e.target.value),f(e.target.value)};return c.a.createElement("div",null,c.a.createElement("input",{value:r,onChange:g}),c.a.createElement("input",{value:m,onChange:g}),c.a.createElement("input",{value:b,onChange:g}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){v()}},"delete"),c.a.createElement("button",{onClick:function(){h(e.data.id,r)}},"edit"))},x=a(11);var B=function(e){var t=Object(n.useState)({title:"",genre:""}),a=Object(u.a)(t,2),r=a[0],l=a[1];function i(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(x.a)({},a,n))}))}return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("input",{name:"title",onChange:i,value:r.title,placeholder:"Title"}),c.a.createElement("input",{name:"genre",onChange:i,value:r.genre,placeholder:"genre",rows:"3"}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){var e=m.collection("collection"),t={title:r,complete:!1};e.add(t).then((function(){return l("")}))}},"Add")))},A=function(){var e=s("collection"),t=e.error,a=e.isPending,n=e.data;return c.a.createElement(d.a,null,c.a.createElement("div",{className:"home"},c.a.createElement(j.a,{variant:"h4",component:"h2",color:"secondary"},"Welcome to the Library"),c.a.createElement(g,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/"},c.a.createElement("h1",null,"Welcome Here")),c.a.createElement(p.a,{path:"/create"},c.a.createElement(O,null),c.a.createElement(B,null)),c.a.createElement(p.a,{path:"/viewBooks"},t&&c.a.createElement("div",null,t),a&&c.a.createElement("div",null,"Loading..."),n&&n.map((function(e,t){return c.a.createElement(w,{key:t,data:e})}))))))};l.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ec436281.chunk.js.map