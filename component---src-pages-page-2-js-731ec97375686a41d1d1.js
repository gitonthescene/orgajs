(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),o=n(157);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},150:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),u=n.n(c);n.d(t,"a",function(){return u.a});n(151);var l=r.a.createContext({}),s=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},154:function(e,t,n){"use strict";var a=n(160),r=n.n(a),i=n(161),o=n.n(i),c=n(162),u=n.n(c);o.a.plugins=[new u.a];var l=new r.a(o.a);t.a=l},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Orga"}}}}},156:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,n){"use strict";var a=n(152),r=n.n(a),i=n(155),o=n(0),c=n.n(o),u=n(153),l=n(4),s=n.n(l),d=n(159),m=n.n(d),p=n(150),f=(n(34),n(74)),g=n.n(f),v=function(e){var t=e.children,n=e.to,a=e.activeClassName,r=g()(e,["children","to","activeClassName"]);return/^\/(?!\/)/.test(n)?c.a.createElement(p.a,Object.assign({to:n,activeClassName:a},r),t):c.a.createElement("a",Object.assign({href:n},r),t)};function h(){var e=r()(["\n"]);return h=function(){return e},e}function E(){var e=r()(["\ncolor: gray;\nmargin: 0 auto;\npadding-bottom: ",";\ntext-align: center;\nborder-bottom: none;\n"]);return E=function(){return e},e}function b(){var e=r()(["\ndisplay: flex;\njustify-content: center;\n"]);return b=function(){return e},e}function y(){var e=r()(["\ndisplay: block;\ntext-decoration: none;\nborder-radius: 0.4rem;\npadding: .5rem 1.5rem;\ntext-align: center;\n&:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background-color: #f1f1f1;\n}\n"]);return y=function(){return e},e}function x(){var e=r()(["\npadding-top: 3rem;\npadding-bottom: 2rem;\n"]);return x=function(){return e},e}var T=n(154).a.rhythm,w=u.a.header(x()),j=Object(u.a)(v)(y()),q=u.a.div(b()),O=u.a.h1(E(),T(1.5)),C=Object(u.a)(v)(h()),k=function(e){var t=e.siteTitle;return c.a.createElement(w,null,c.a.createElement(C,{to:"/"},c.a.createElement(O,null,t)),c.a.createElement(q,null,c.a.createElement(j,{to:"/docs"},"DOCS"),c.a.createElement(j,{to:"/ast"},"AST"),c.a.createElement(j,{to:"/syntax"},"SYNTAX"),c.a.createElement(j,{to:"https://github.com/xiaoxinghu/orgajs"},"CODE")))};k.propTypes={siteTitle:s.a.string},k.defaultProps={siteTitle:""};var R=k;n(163);function S(){var e=r()(["\nmargin: auto;\nmax-width: 740px;\n"]);return S=function(){return e},e}var N=u.a.div(S()),M=function(e){var t=e.children;return c.a.createElement(p.b,{query:"755544856",render:function(e){return c.a.createElement(N,null,c.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(R,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",{style:{padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:i})};M.propTypes={children:s.a.node.isRequired};t.a=M}}]);
//# sourceMappingURL=component---src-pages-page-2-js-731ec97375686a41d1d1.js.map