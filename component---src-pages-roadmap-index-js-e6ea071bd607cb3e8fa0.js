(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{197:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",function(){return p});t(268);var r=t(0),a=t.n(r),u=t(200),o=t(204),i=t(215);function c(){var n=d(["\nmargin-top: 0.2em;\n"]);return c=function(){return n},n}function l(){var n=d(["\ncolor: gray;\n"]);return l=function(){return n},n}function s(){var n=d(["\ncolor: gray;\n"]);return s=function(){return n},n}function d(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=u.a.p(s()),m=u.a.small(l()),v=u.a.h3(c()),g=function(n){var e=n.node,t=e.meta,r=t.title,u=t.date,o=t.description,c=t.keyword,l=e.fields.slug;return a.a.createElement(i.a,{to:l,key:"roadmap-link-"+l},a.a.createElement(m,null,c),a.a.createElement(v,null,r),a.a.createElement("small",null,u?""+new Date(u):null),a.a.createElement(f,null,o))};e.default=function(n){var e=n.data;return a.a.createElement(o.a,null,a.a.createElement("div",null,e.allOrgContent.edges.map(g)))};var p="102020620"},198:function(n,e,t){"use strict";t.d(e,"b",function(){return l});var r=t(0),a=t.n(r),u=t(66),o=t.n(u);t.d(e,"a",function(){return o.a});t(199),t(9).default.enqueue;var i=a.a.createContext({});function c(n){var e=n.staticQueryData,t=n.data,r=n.query,u=n.render,o=t?t.data:e[r]&&e[r].data;return a.a.createElement(a.a.Fragment,null,o&&u(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(n){var e=n.data,t=n.query,r=n.render,u=n.children;return a.a.createElement(i.Consumer,null,function(n){return a.a.createElement(c,{data:e,query:t,render:r||u,staticQueryData:n})})}},199:function(n,e,t){var r;n.exports=(r=t(203))&&r.default||r},201:function(n,e,t){"use strict";var r=t(207),a=t.n(r),u=t(208),o=t.n(u),i=t(209),c=t.n(i);o.a.plugins=[new c.a];var l=new a.a(o.a);e.a=l},202:function(n){n.exports={data:{site:{siteMetadata:{title:"Orga"}}}}},203:function(n,e,t){"use strict";t.r(e);t(23);var r=t(0),a=t.n(r),u=t(93);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(u.a,Object.assign({location:e,pageResources:t},t.json)):null}},204:function(n,e,t){"use strict";var r=t(202),a=t(0),u=t.n(a),o=t(200),i=t(206),c=t.n(i),l=t(198);t(29),t(30),t(13),t(49),t(23);var s=function(n){var e=n.children,t=n.to,r=n.activeClassName,a=function(n,e){if(null==n)return{};var t,r,a={},u=Object.keys(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["children","to","activeClassName"]);return/^\/(?!\/)/.test(t)?u.a.createElement(l.a,Object.assign({to:t,activeClassName:r},a),e):u.a.createElement("a",Object.assign({href:t},a),e)};function d(){var n=p(["\n"]);return d=function(){return n},n}function f(){var n=p(["\ncolor: gray;\nmargin: 0 auto;\npadding-bottom: ",";\ntext-align: center;\nborder-bottom: none;\n"]);return f=function(){return n},n}function m(){var n=p(["\ndisplay: flex;\njustify-content: center;\n"]);return m=function(){return n},n}function v(){var n=p(["\ndisplay: block;\ntext-decoration: none;\nborder-radius: 0.4rem;\npadding: .5rem 1.5rem;\ntext-align: center;\n&:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #f1f1f1;\n}\n"]);return v=function(){return n},n}function g(){var n=p(["\npadding-top: 3rem;\npadding-bottom: 2rem;\n"]);return g=function(){return n},n}function p(n,e){return e||(e=n.slice(0)),n.raw=e,n}var E=t(201).a.rhythm,h=o.a.header(g()),y=Object(o.a)(s)(v()),b=o.a.div(m()),x=o.a.h1(f(),E(1.5)),w=Object(o.a)(s)(d()),O=function(n){var e=n.siteTitle;return u.a.createElement(h,null,u.a.createElement(w,{to:"/"},u.a.createElement(x,null,e)),u.a.createElement(b,null,u.a.createElement(y,{to:"/docs"},"DOCS"),u.a.createElement(y,{to:"/ast"},"AST"),u.a.createElement(y,{to:"/syntax"},"SYNTAX"),u.a.createElement(y,{to:"/roadmap"},"ROADMAP"),u.a.createElement(y,{to:"https://github.com/xiaoxinghu/orgajs"},"CODE")))};O.defaultProps={siteTitle:""};var k=O;t(210);function j(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\nmargin: auto;\nmax-width: 740px;\n"]);return j=function(){return n},n}var C=o.a.div(j());e.a=function(n){var e=n.children;return u.a.createElement(l.b,{query:"755544856",render:function(n){return u.a.createElement(C,null,u.a.createElement(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},u.a.createElement("html",{lang:"en"})),u.a.createElement(k,{siteTitle:n.site.siteMetadata.title}),u.a.createElement("div",{style:{padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e))},data:r})}},215:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(198),a=t(200);function u(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\ndisplay: block;\ntext-decoration: none;\npadding: "," ",";\nborder-radius: ",";\n&:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #f1f1f1;\n}\n"]);return u=function(){return n},n}var o=t(201).a.rhythm,i=Object(a.a)(r.a)(u(),o(.05),o(.4),o(.2))},268:function(n,e,t){"use strict";t(269)("small",function(n){return function(){return n(this,"small","","")}})},269:function(n,e,t){var r=t(1),a=t(7),u=t(33),o=/"/g,i=function(n,e,t,r){var a=String(u(n)),i="<"+e;return""!==t&&(i+=" "+t+'="'+String(r).replace(o,"&quot;")+'"'),i+">"+a+"</"+e+">"};n.exports=function(n,e){var t={};t[n]=e(i),r(r.P+r.F*a(function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",t)}}}]);
//# sourceMappingURL=component---src-pages-roadmap-index-js-e6ea071bd607cb3e8fa0.js.map