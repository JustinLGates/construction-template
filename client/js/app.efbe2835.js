(function(t){function e(e){for(var a,c,l=e[0],n=e[1],r=e[2],d=0,v=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&v.push(i[c][0]),i[c]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,r||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,l=1;l<s.length;l++){var n=s[l];0!==i[n]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},o=[];function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var u=n;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"17bb":function(t,e,s){},"1a12":function(t,e,s){},"452c":function(t,e,s){},"464c":function(t,e,s){t.exports=s.p+"img/ServicesPhoto.baf0398f.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app container bg-light"}},[s("div",{staticClass:"col-12 col-md-11 col-xl-9 m-auto"},[s("div",{staticClass:"row"},[s("Header"),s("router-view",{staticClass:"selected-view"})],1)]),s("Footer")],1)},o=[],c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-8"},[s("div",{staticClass:"row"},[s("Navbar"),t._m(1)],1)])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-4"},[a("div",{staticClass:"logo-img-container"},[a("img",{staticClass:"logo p-2",attrs:{src:s("bca0"),alt:"Logo"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 text-right pt-m-2 pt-5"},[s("small",{staticClass:"pt-3 pt-m-0"},[t._v("Call us today!")]),s("h3",[t._v("(208)888-8888")])])}],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 justify-content-end"},[s("div",{staticClass:"row"},[s("nav",{staticClass:"col-12 d-none d-lg-flex bg-dark justify-content-end"},[s("div",{staticClass:" navbox bg-light p-2"},[s("span",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/"}},[t._v("HOME")])],1),s("span",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/about"}},[t._v("ABOUT")])],1),s("span",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/services"}},[t._v("SERVICES")])],1),s("span",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/portfolio"}},[t._v("PORTFOLIO")])],1),s("span",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/contactus"}},[t._v("CONTACT US")])],1)])])]),s("div",{staticClass:"row"},[s("nav",{staticClass:"col-12 d-lg-none"},[t.navDropDown?s("div",{class:t.navDropDownAnimToggle?"slide-in dropDownMenu bg-light":"slide-out dropDownMenu bg-light",attrs:{id:"dropDownMenu"}},[s("div",[s("span",{staticClass:"dropDownMenuButton action bg-light text-dark p-2",on:{click:t.toggleNavDropDown}},[t._m(0)])]),s("div",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/"},on:{click:t.setActive}},[t._v("HOME")])],1),s("div",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/about"},on:{click:t.setActive}},[t._v("ABOUT")])],1),s("div",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/services"},on:{click:t.setActive}},[t._v("SERVICES")])],1),s("div",{staticClass:"p-2"},[s("router-link",{staticClass:"p-1 routeLink",attrs:{to:"/portfolio"},on:{click:t.setActive}},[t._v("PORTFOLIO")])],1),s("div",{staticClass:"p-2"},[s("router-link",{staticClass:"routeLink",attrs:{to:"/contactus"},on:{click:t.setActive}},[t._v("CONTACT US")])],1)]):s("span",{staticClass:"dropDownMenuButton action bg-light text-primary p-2",on:{click:t.toggleNavDropDown}},[t._m(1)])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",[s("i",{staticClass:"fas fa-arrow-circle-up"}),t._v(" MENU ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",[s("i",{staticClass:"fas fa-arrow-circle-down"}),t._v(" MENU ")])}],u={data(){return{navDropDown:!1,navDropDownAnimToggle:!1}},methods:{toggleNavDropDown(){this.navDropDownAnimToggle=!this.navDropDownAnimToggle,this.navDropDown?setTimeout(()=>{this.navDropDown=!this.navDropDown},350):this.navDropDown=!this.navDropDown},setActive(){this.toggleNavDropDown()}}},d=u,v=(s("5dfc"),s("2877")),p=Object(v["a"])(d,n,r,!1,null,null,null),m=p.exports,f={components:{Navbar:m}},C=f,_=(s("8baf"),Object(v["a"])(C,c,l,!1,null,null,null)),h=_.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 py-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-3 pt-3 col-sm-6"},[s("div",{staticClass:"text-center"},[s("h5",{staticClass:"text-info"},[t._v("LOCATION")]),s("div",[t._v("123 W. park street")]),s("div",[t._v("Nampa, ID 83686")])])]),s("div",{staticClass:"col-12 col-md-3 pt-3 col-sm-6"},[s("div",{staticClass:"text-center "},[s("h5",{staticClass:"text-info"},[t._v("CONTACT")]),s("div",[t._v("Phone 208-888-8888")]),s("div",[t._v("Email papa@gmail.com")])])]),s("div",{staticClass:"col-12 col-md-3 pt-3 col-sm-6"},[s("div",{staticClass:"text-center"},[s("h5",{staticClass:"text-info"},[t._v("HOURS")]),s("div",[t._v("Monday - Friday 8-5")]),s("div",[t._v("Saturday -Sunday closed")])])]),s("div",{staticClass:"col-12 col-md-3 pt-3 col-sm-6"},[s("div",{staticClass:"text-center text-info"},[s("h5",[t._v("SOCIAL MEDIA")]),s("div",{staticClass:"d-flex justify-content-center"},[s("h2",[s("a",{attrs:{href:""}},[s("i",{staticClass:"fab fa-facebook p-2 text-info"})]),s("a",{attrs:{href:""}},[s("i",{staticClass:"fab fa-instagram p-2 text-info"})]),s("a",{attrs:{href:""}},[s("i",{staticClass:"fab fa-twitter p-2 text-info"})])])])])])])])}],w={},x=w,y=Object(v["a"])(x,b,g,!1,null,null,null),k=y.exports,O={components:{Header:h,Footer:k}},D=O,E=(s("5c0b"),s("b0a0"),Object(v["a"])(D,i,o,!1,null,null,null)),S=E.exports,j=s("8c4f"),$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[t._m(0),s("div",{staticClass:"row pt-3 pt-md-5"},[t._m(1),s("div",{staticClass:"col-12 col-md-6"},[s("Services")],1)])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("Home")])]),a("div",{staticClass:"col-12 col-lg-10 col-xl-8 m-auto p-2"},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:s("c8e3"),alt:"img"}}),a("div",{staticClass:"photo-caption"},[a("p",{staticClass:"p-2 m-0"},[t._v("You have found the expert your looking for.")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-md-6"},[a("h2",{staticClass:"p-2"},[t._v("Boise's best buliding team.")]),a("img",{staticClass:"img-fluid",attrs:{src:s("b6ba"),alt:"img"}}),a("div",{staticClass:"p-1 pt-3"},[a("h5",[t._v("Professional")]),a("p",[t._v(" We are ranked number one by the boise weekly. Our employees are certified. Were licenced bonded insured. ")]),a("hr"),a("h5",[t._v("High quality work")]),a("p",[t._v(" We are ranked number one by the boise weekly. Our employees are certified. Were licenced bonded insured. ")]),a("hr"),a("h5",[t._v("Great service")]),a("p",[t._v(" We are ranked number one by the boise weekly. Our employees are certified. Were licenced bonded insured. ")]),a("hr")])])}],L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row "},[s("div",{staticClass:"col-12 text-center p-2"}),s("div",{staticClass:"col-12 "},[s("h3",{staticClass:"text-center"},[t._v("Our Services")]),s("div",{staticClass:"font-md text-center bg-primary p-2"},[s("div",{staticClass:"p-3 bg-secondary"},[t._v("Residental")]),s("div",{staticClass:"p-3"},[t._v("Commerial")]),s("div",{staticClass:"p-3 bg-secondary"},[t._v("Industiral")]),s("div",{staticClass:"p-3"},[t._v("Plumbing")]),s("div",{staticClass:"p-3 bg-secondary"},[t._v("hvac")]),s("div",{staticClass:"p-3"},[t._v("Electrical")]),s("div",{staticClass:"p-3 bg-secondary"},[t._v("And much")]),s("div",{staticClass:"p-3 "},[t._v("much")]),s("div",{staticClass:"p-3 bg-secondary"},[t._v("much more")])])]),s("div",{staticClass:"col-12"},[s("i",{staticClass:"text-primary fas fa-quote-left"}),s("p",{staticClass:"quote text-dark text-center d-inline p-2"},[t._v(" Quality work at a fair price. Our customers love us because we put them first. ")]),s("i",{staticClass:"text-primary fas fa-quote-right"})])])}],M={name:"ServicesComp"},P=M,N=(s("717f"),Object(v["a"])(P,L,T,!1,null,null,null)),I=N.exports,q={name:"Home",components:{Services:I}},U=q,W=(s("cccb"),Object(v["a"])(U,$,A,!1,null,null,null)),H=W.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[t._m(0),t._m(1),s("div",{staticClass:"col-12 col-md-6"},[s("ServiceComp")],1)])])},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("h1",[t._v("About")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 m-auto col-md-6"},[a("h2",[t._v("We love what we do.")]),a("img",{staticClass:"img-fluid",attrs:{src:s("d850"),alt:""}}),a("div",{staticClass:"p-2"},[a("h4",[t._v("Founded in 2002 by jim bob.")]),a("p",[t._v(" et out to disrupt the building world. Lorem ipsum dolor sit, amet consectetur adipisicing el ")]),a("h4",[t._v("No job to big or to small")]),a("p",[t._v(" One call we do it all from small home projects to large scale manufacturing ")]),a("h4",[t._v("Specializing in building")]),a("p",[t._v(" We like to build Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem veritatis, corporis a magni numquam qui repellat offici ")])])])}],B={name:"About",components:{ServiceComp:I}},z=B,G=Object(v["a"])(z,R,F,!1,null,null,null),J=G.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[t._m(0),t._m(1),s("div",{staticClass:"col-12 col-md-6"},[s("ServiceComp")],1)])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("h1",[t._v("Services")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-md-6"},[a("h2",[t._v("We provide high quality constuction at a competitive price.")]),a("img",{staticClass:"img-fluid",attrs:{src:s("464c"),alt:""}}),a("h4",[t._v("Specializing in Commercial")]),a("p",[t._v(" et out to disrupt the building world. Lorem ipsum dolor sit, amet consectetur adipisicing el ")]),a("h4",[t._v("No job to big or to small")]),a("p",[t._v(" One call we do it all from small home projects to large scale manufacturing ")]),a("h4",[t._v("Specializing in building")]),a("p",[t._v(" We like to build Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem veritatis, corporis a magni numquam qui repellat offici ")])])}],Y={name:"Services",components:{ServiceComp:I}},K=Y,X=Object(v["a"])(K,V,Q,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("Portfolio")])]),a("div",{staticClass:"col-12 col-md-6"},[a("h2",[t._v("Main title")]),a("img",{staticClass:"img-fluid",attrs:{src:s("c44d"),alt:""}}),a("h4",[t._v("Job title / location / type of work")]),a("p",[t._v(" Desctiption Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt rerum suscipit dolor, sunt ea! Rem natus, non consequatur quaerat molli ")])]),a("div",{staticClass:"col-12 col-md-6"},[a("h2",[t._v("Main title")]),a("img",{staticClass:"img-fluid",attrs:{src:s("5d5d"),alt:""}}),a("h4",[t._v("Job title / location /type of work")]),a("p",[t._v(" Desctiption Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt rerum suscipit dolor, sunt ea! Rem natus, non consequatur quaerat molli ")])])]),a("div",{staticClass:"col-12"})])}],st={name:"Portfolio",components:{ServiceComp:I}},at=st,it=Object(v["a"])(at,tt,et,!1,null,null,null),ot=it.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[t._m(0),t._m(1),s("div",{staticClass:"col-12 col-md-5 my-3"},[s("ServicesComp")],1),t._m(2)])])},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("h1",[t._v("Contact us")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-md-7  m-auto "},[s("form",{staticClass:"text-left p-2 form-box card bg-light shadow m-auto "},[s("h2",[t._v("Send us a message.")]),s("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Name")]),s("input",{staticClass:"w-100",attrs:{type:"text"}}),s("br"),s("label",{staticClass:"label",attrs:{for:"name"}},[t._v("E-mail")]),s("input",{staticClass:"w-100",attrs:{type:"text"}}),s("br"),s("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Message")]),s("textarea",{staticClass:"w-100",attrs:{type:"text",rows:"8"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-lg-10 m-auto pt-2"},[s("div",{staticClass:"pt-3"},[s("h6",[t._v("3402 Cleveland Blvd, Caldwell, ID 83605")]),s("iframe",{staticClass:"map img-fluid",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5774.375419246301!2d-116.66871732054702!3d43.64426282125748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54afb4874a255a21%3A0x12346806da8b0246!2sCraig's%20Tattoo%20Co!5e0!3m2!1sen!2sus!4v1599945184626!5m2!1sen!2sus",width:"100%",height:"100%",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}}),s("h2",[t._v(" Call us for all of your construction needs ")]),s("h2",{staticClass:"text-primary"},[t._v("(208)888-8888")])])])}],nt={name:"ContactUs",components:{ServicesComp:I}},rt=nt,ut=(s("b903"),Object(v["a"])(rt,ct,lt,!1,null,null,null)),dt=ut.exports;a["a"].use(j["a"]);const vt=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:J},{path:"/services",name:"Services",component:Z},{path:"/portfolio",name:"Portfolio",component:ot},{path:"/contactUs",name:"ContactUs",component:dt}],pt=new j["a"]({mode:"history",base:"/",routes:vt});var mt=pt,ft=s("2f62");a["a"].use(ft["a"]);var Ct=new ft["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_t=s("335d");const ht="steven-demo.auth0.com",bt="https://steven-demo.com",gt="dO6KzrwDGl2GG6jVdRcTC8vcY5XQP4y1";a["a"].use(_t["a"],{domain:ht,clientId:gt,audience:bt,onRedirectCallback:t=>{mt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});new a["a"]({router:mt,store:Ct,render:function(t){return t(S)}}).$mount("#app"),Ct.dispatch("initalizeSocket")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"5ced":function(t,e,s){},"5d5d":function(t,e,s){t.exports=s.p+"img/portfolio2.ed08da61.jpg"},"5dfc":function(t,e,s){"use strict";var a=s("1a12"),i=s.n(a);i.a},6860:function(t,e,s){},"717f":function(t,e,s){"use strict";var a=s("17bb"),i=s.n(a);i.a},"8baf":function(t,e,s){"use strict";var a=s("6860"),i=s.n(a);i.a},"90d6":function(t,e,s){},"9c0c":function(t,e,s){},b0a0:function(t,e,s){"use strict";var a=s("452c"),i=s.n(a);i.a},b6ba:function(t,e,s){t.exports=s.p+"img/HeroImg.d380ccd6.jpg"},b903:function(t,e,s){"use strict";var a=s("90d6"),i=s.n(a);i.a},bca0:function(t,e,s){t.exports=s.p+"img/Logo.21a1d2d7.png"},c44d:function(t,e,s){t.exports=s.p+"img/portfolio1.84b174b1.jpg"},c8e3:function(t,e,s){t.exports=s.p+"img/TeamImg.d07b3cb5.jpg"},cccb:function(t,e,s){"use strict";var a=s("5ced"),i=s.n(a);i.a},d850:function(t,e,s){t.exports=s.p+"img/AboutPhoto1.919a6f0b.jpg"}});