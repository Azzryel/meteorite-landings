(function(e){function t(t){for(var o,i,a=t[0],l=t[1],u=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/meteorite-landings/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0426":function(e,t,n){e.exports=n.p+"img/meteorite8.77956b43.jpg"},"066f":function(e,t,n){e.exports=n.p+"img/Meteor-icon2.8033a9c1.png"},"120a":function(e,t,n){e.exports=n.p+"img/meteorite4.9cf22d9c.jpg"},1457:function(e,t,n){"use strict";n("7a79")},"15ea":function(e,t,n){e.exports=n.p+"img/normal.457a7a2f.jpg"},"1b27":function(e,t,n){},"281a":function(e,t,n){e.exports=n.p+"img/meteorite7.45c907a2.jpg"},"292c":function(e,t,n){e.exports=n.p+"img/meteorite3.550fb8f1.jpg"},"2ff0":function(e,t,n){e.exports=n.p+"img/space.da3b429e.jpg"},3432:function(e,t,n){e.exports=n.p+"img/meteorite1.17d8425a.jpg"},"36be":function(e,t,n){e.exports=n.p+"img/moon.da8274ac.jpg"},"3e9a":function(e,t,n){e.exports=n.p+"img/meteorite12.5f4d67d1.jpg"},"434f":function(e,t,n){e.exports=n.p+"img/meteorite9.d47f6491.jpg"},"4c1a":function(e,t,n){e.exports=n.p+"img/meteorite6.382751ec.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t,n,c,r,i){var a=Object(o["p"])("Canvas"),l=Object(o["p"])("Meteorite");return Object(o["j"])(),Object(o["e"])("div",null,[Object(o["g"])(a),Object(o["g"])(l)])}var r={ref:"canvasEl",class:"bg"};function i(e,t,n,c,i,a){return Object(o["j"])(),Object(o["e"])("canvas",r,null,512)}var a=n("3835"),l=(n("d81d"),n("cb29"),n("159b"),n("5a89")),u=n("4721"),s=n("2ff0"),d=n.n(s),f=(n("36be"),n("15ea")),p=n.n(f),m=n("3432"),b=n.n(m),j=n("de53"),O=n.n(j),g=n("292c"),v=n.n(g),h=n("120a"),y=n.n(h),w=n("e1b5"),x=n.n(w),k=n("4c1a"),M=n.n(k),I=n("281a"),S=n.n(I),C=n("0426"),q=n.n(C),E=n("434f"),D=n.n(E),_=n("7d07"),P=n.n(_),Y=n("a5ac"),B=n.n(Y),R=n("3e9a"),X=n.n(R),z=n("efdc"),L=n.n(z),A={setup:function(){var e=Object(o["m"])(null);return Object(o["i"])((function(){var t=new l["j"],n=new l["g"](75,window.innerWidth/window.innerHeight,.1,1e3),o=new l["q"]({canvas:e.value});o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),n.position.setZ(50),o.render(t,n);var c=new l["h"](16777215);c.position.set(5,5,5);var r=new l["a"](16777215);t.add(c,r);var i=new u["a"](n,o.domElement),s=function(){var e=new l["k"](.25,21,21),n=new l["f"]({color:16777215}),o=new l["e"](e,n),c=Array(3).fill().map((function(){return l["d"].randFloatSpread(100)})),r=Object(a["a"])(c,3),i=r[0],u=r[1],s=r[2];o.position.set(i,u,s),t.add(o)};Array(199).fill().forEach(s);var f=(new l["n"]).load(d.a);t.background=f;var m=[b.a,O.a,v.a,y.a,x.a,M.a,S.a,q.a,D.a,P.a,B.a,X.a,L.a],j=(new l["n"]).load(m[Math.floor(13*Math.random())]),g=(new l["n"]).load(m[Math.floor(13*Math.random())]),h=(new l["n"]).load(m[Math.floor(13*Math.random())]),w=(new l["n"]).load(p.a);function k(e,t){var n=new l["e"](new l["k"](Math.floor(5*Math.random()+2),32,32),new l["f"]({map:e,normalMap:t}));return n}function I(e,n,o,c){e.position.z=c,e.position.setX(n),e.position.y=o,t.add(e)}var C=k(j,w),E=k(g,w),_=k(h,w);I(C,15,0,10),I(E,-10,-10,-25),I(_,-15,5,30);var Y=function e(){requestAnimationFrame(e),C.rotation.x+=.001,C.rotation.y+=.003,C.rotation.z+=.001,E.rotation.x+=.003,E.rotation.y-=.005,E.rotation.z+=.003,_.rotation.x-=.003,_.rotation.y+=.003,_.rotation.z-=.003,n.position.y+=.005,n.position.x+=.005,i.update(),o.render(t,n)};Y()})),{canvasEl:e}}},T=(n("6074"),n("6b0d")),G=n.n(T);const H=G()(A,[["render",i]]);var F=H,J=(n("ac1f"),n("841c"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("fb6a"),n("a1d1")),N=n.n(J),U=function(e){return Object(o["l"])("data-v-0935e640"),e=e(),Object(o["k"])(),e},W={class:"home"},V=U((function(){return Object(o["f"])("div",{class:"header"},[Object(o["f"])("h1",null,"Meteorite Landings"),Object(o["f"])("p",null,"Meteorite information on some of the known meteorite landings.")],-1)})),Z={id:"meteor-container"},$=U((function(){return Object(o["f"])("div",{id:"meteor-container-h2"},[Object(o["f"])("h2",null,"Meteorites"),Object(o["f"])("p",{class:"drag-info"},"draggable")],-1)})),K={key:0},Q={class:"meteorite-section"},ee=["onClick"],te={class:"scroll"},ne=["onClick"],oe=U((function(){return Object(o["f"])("img",{class:"m-icon",src:N.a,alt:"icon"},null,-1)})),ce={key:1,class:"loader"};function re(e,t,n,c,r,i){var a=Object(o["p"])("MeteorDetails");return Object(o["j"])(),Object(o["e"])("div",W,[V,Object(o["f"])("div",Z,[$,c.meteorites.length?(Object(o["j"])(),Object(o["e"])("div",K,[Object(o["t"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.search=e})},null,512),[[o["s"],c.search]]),Object(o["f"])("div",null,[Object(o["f"])("div",Q,[(Object(o["j"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(Math.round(c.calculateLength(c.meteorites.filter((function(e){return e.name.includes(c.search)})).length)),(function(e){return Object(o["j"])(),Object(o["e"])("span",{key:e,onClick:function(t){return c.calculateSplice(e)}},Object(o["q"])(e),9,ee)})),128))])]),Object(o["f"])("div",te,[(Object(o["j"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(c.meteorites.filter((function(e){return e.name.includes(c.search)})).slice(c.sliceIndexStart,c.sliceIndexEnd),(function(e){return Object(o["j"])(),Object(o["e"])("div",{key:e.id,class:"meteor-list",onClick:function(t){return c.handleClick(e)}},[oe,Object(o["f"])("h3",null,Object(o["q"])(e.name),1)],8,ne)})),128))])])):(Object(o["j"])(),Object(o["e"])("div",ce))]),c.showMeteorDetail?(Object(o["j"])(),Object(o["c"])(a,{key:0,meteor:c.singleMeteor,onClose:c.closeDetails},null,8,["meteor","onClose"])):Object(o["d"])("",!0)])}var ie=n("1da1"),ae=(n("96cf"),n("d3b7"),function(){var e=Object(o["m"])([]),t=function(){var t=Object(ie["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://data.nasa.gov/resource/gh4g-9sfh.json");case 3:return n=t.sent,t.next=6,n.json();case 6:e.value=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return{meteorites:e,load:t}}),le=ae,ue=(n("a9e3"),n("066f")),se=n.n(ue),de=function(e){return Object(o["l"])("data-v-52491786"),e=e(),Object(o["k"])(),e},fe={id:"meteor-details"},pe={id:"meteor-details-h2"},me=de((function(){return Object(o["f"])("img",{draggable:"false",src:se.a,alt:"icon"},null,-1)})),be={id:"meteor-details-p"},je={key:0},Oe={key:1},ge={key:2},ve={key:3},he={key:4},ye={key:0,class:"map"};function we(e,t,n,c,r,i){var a=Object(o["p"])("GMapMap");return Object(o["j"])(),Object(o["e"])("div",fe,[Object(o["f"])("div",pe,[Object(o["f"])("h2",null,Object(o["q"])(n.meteor.name),1),Object(o["f"])("span",{onClick:t[0]||(t[0]=Object(o["u"])((function(){return i.closeDetails&&i.closeDetails.apply(i,arguments)}),["self"])),id:"close"}," X "),me]),Object(o["f"])("div",be,[n.meteor.mass?(Object(o["j"])(),Object(o["e"])("p",je," Mass: "+Object(o["q"])(n.meteor.mass)+" g ",1)):Object(o["d"])("",!0),n.meteor.year?(Object(o["j"])(),Object(o["e"])("p",Oe," Year: "+Object(o["q"])(n.meteor.year.slice(0,4)),1)):Object(o["d"])("",!0),n.meteor.fall?(Object(o["j"])(),Object(o["e"])("p",ge," Status: "+Object(o["q"])(n.meteor.fall),1)):Object(o["d"])("",!0),n.meteor.recclass?(Object(o["j"])(),Object(o["e"])("p",ve," Class: "+Object(o["q"])(n.meteor.recclass),1)):Object(o["d"])("",!0),n.meteor.geolocation?(Object(o["j"])(),Object(o["e"])("p",he," Location: latitude "+Object(o["q"])(n.meteor.geolocation.latitude)+" - longitude "+Object(o["q"])(n.meteor.geolocation.longitude),1)):Object(o["d"])("",!0)]),n.meteor.geolocation?(Object(o["j"])(),Object(o["e"])("div",ye,[Object(o["g"])(a,{center:{lat:Number(n.meteor.geolocation.latitude),lng:Number(n.meteor.geolocation.longitude)},zoom:7,"map-type-id":"terrain",style:{width:"250px",height:"250px"}},null,8,["center"])])):Object(o["d"])("",!0)])}var xe={props:["meteor"],methods:{closeDetails:function(){this.$emit("close")}},mounted:function(){function e(e){var t=0,n=0,o=0,c=0;function r(e){o=e.clientX,c=e.clientY,document.onmouseup=a,document.onmousemove=i}function i(r){t=o-r.clientX,n=c-r.clientY,o=r.clientX,c=r.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function a(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id)&&(document.getElementById(e.id).onmousedown=r)}e(document.getElementById("meteor-details"))}};n("bb09");const ke=G()(xe,[["render",we],["__scopeId","data-v-52491786"]]);var Me=ke,Ie={name:"Home",components:{MeteorDetails:Me},setup:function(){var e=le(),t=e.meteorites,n=e.load;n();var c=Object(o["m"])(null),r=Object(o["m"])(!1),i=Object(o["m"])(0),a=Object(o["m"])(100),l=100,u=Object(o["m"])(""),s=function(e){c.value=e,r.value=!0},d=function(){r.value=!1},f=function(e){var t=e/l;return t},p=function(e){i.value=e*l-l,a.value=e*l};return Object(o["i"])((function(){function e(e){var t=0,n=0,o=0,c=0;function r(e){o=e.clientX,c=e.clientY,document.onmouseup=a,document.onmousemove=i}function i(r){t=o-r.clientX,n=c-r.clientY,o=r.clientX,c=r.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function a(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"-h2")&&(document.getElementById(e.id+"-h2").onmousedown=r)}e(document.getElementById("meteor-container"))})),{meteorites:t,handleClick:s,singleMeteor:c,showMeteorDetail:r,closeDetails:d,sliceIndexStart:i,sliceIndexEnd:a,calculateLength:f,calculateSplice:p,search:u}}};n("b657");const Se=G()(Ie,[["render",re],["__scopeId","data-v-0935e640"]]);var Ce=Se,qe={components:{Canvas:F,Meteorite:Ce},setup:function(){}};n("1457");const Ee=G()(qe,[["render",c]]);var De=Ee,_e=n("320b");Object(o["b"])(De).use(_e["a"],{load:{key:"AIzaSyDmkkcGBe5SGmnYBRiLqkRRIRCDToYpUpA"}}).mount("#app")},6074:function(e,t,n){"use strict";n("1b27")},"7a79":function(e,t,n){},"7d07":function(e,t,n){e.exports=n.p+"img/meteorite10.07b301bd.jpg"},"8f59":function(e,t,n){},a1d1:function(e,t,n){e.exports=n.p+"img/Meteor-icon.380f7e52.png"},a5ac:function(e,t,n){e.exports=n.p+"img/meteorite11.0710121d.jpg"},b657:function(e,t,n){"use strict";n("dd07")},bb09:function(e,t,n){"use strict";n("8f59")},dd07:function(e,t,n){},de53:function(e,t,n){e.exports=n.p+"img/meteorite2.c41d814c.jpg"},e1b5:function(e,t,n){e.exports=n.p+"img/meteorite5.59c27254.jpg"},efdc:function(e,t,n){e.exports=n.p+"img/meteorite13.6ed425c9.jpg"}});
//# sourceMappingURL=app.644f3d35.js.map