(this["webpackJsonpwildfire-tracker"]=this["webpackJsonpwildfire-tracker"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(3),s=n.n(i),a=(n(17),n(9)),o=n.n(a),j=n(10),l=n(5),d=(n(19),n(12)),u=n(6),b=n(7),f=n.n(b),O=n(1),h=function(e){e.lat,e.lng;var t=e.onClick;return Object(O.jsx)("div",{className:"location-marker",onClick:t,children:Object(O.jsx)(u.Icon,{icon:f.a,className:"location-icon"})})},x=function(e){var t=e.info;return Object(O.jsxs)("div",{className:"location-info",children:[Object(O.jsx)("h2",{children:"Event Location"}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["ID: ",Object(O.jsx)("strong",{children:t.id})]}),Object(O.jsxs)("li",{children:["Title: ",Object(O.jsx)("strong",{children:t.title})]}),Object(O.jsxs)("li",{children:["Type: ",Object(O.jsx)("strong",{children:t.type})]})]})]})},v=function(e){var t=e.eventData,n=e.center,r=e.zoom,i=Object(c.useState)(null),s=Object(l.a)(i,2),a=s[0],o=s[1],j=t.map((function(e,t){return 8===e.categories[0].id?Object(O.jsx)(h,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){return o({id:e.id,title:e.title,type:e.categories[0].title})}},t):null}));return Object(O.jsxs)("div",{className:"map",children:[Object(O.jsx)(d.a,{bootstrapURLKeys:{key:"AIzaSyAGglb0EQhYCNsjvGdpKRvbcErit_99zpE"},defaultCenter:n,defaultZoom:r,children:j}),a&&Object(O.jsx)(x,{info:a})]})};v.defaultProps={center:{lat:42.3265,lng:-122.8756},zoom:6};var g=v,p=n.p+"static/media/loader.c1bbf54d.gif",m=function(){return Object(O.jsxs)("div",{className:"loader",children:[Object(O.jsx)("img",{src:p,alt:"gif-loader"}),Object(O.jsx)("h1",{children:"Fetching Data"})]})},k=function(){return Object(O.jsx)("header",{className:"header",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)(u.Icon,{icon:f.a})," Wildfire Tracker (Powered By NASA)"]})})};var y=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),s=Object(l.a)(i,2),a=s[0],d=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.events,r(c),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(k,{}),a?Object(O.jsx)(m,{}):Object(O.jsx)(g,{eventData:n})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),C()}},[[23,1,2]]]);
//# sourceMappingURL=main.a6d487b9.chunk.js.map