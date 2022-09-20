(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{8527:function(e,t,r){"use strict";r.d(t,{AB:function(){return A},Ct:function(){return m},MI:function(){return ee},W2:function(){return k},X6:function(){return S},fG:function(){return D},oM:function(){return d},rU:function(){return $},xu:function(){return y},xv:function(){return ce}});var n=r(2846),a=r(4244),i=r(5031),o=r(7294),s=r(894),l=r(6450);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var f=["ratio","children","className"],d=(0,n.Gp)((function(e,t){var r=e.ratio,a=void 0===r?4/3:r,s=e.children,l=e.className,d=u(e,f),p=o.Children.only(s),m=(0,i.cx)("chakra-aspect-ratio",l);return o.createElement(n.m$.div,c({ref:t,position:"relative",className:m,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(a,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},d),p)}));i.Ts&&(d.displayName="AspectRatio");var p=["className"],m=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Badge",e),a=(0,n.Lr)(e);a.className;var s=u(a,p);return o.createElement(n.m$.span,c({ref:t,className:(0,i.cx)("chakra-badge",e.className)},s,{__css:c({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))}));i.Ts&&(m.displayName="Badge");var v=["size","centerContent"],g=["size"],y=(0,n.m$)("div");i.Ts&&(y.displayName="Box");var h=(0,n.Gp)((function(e,t){var r=e.size,n=e.centerContent,a=void 0===n||n,i=u(e,v),s=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(y,c({ref:t,boxSize:r,__css:c({},s,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(h.displayName="Square");var b=(0,n.Gp)((function(e,t){var r=e.size,n=u(e,g);return o.createElement(h,c({size:r,ref:t,borderRadius:"9999px"},n))}));i.Ts&&(b.displayName="Circle");var x=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(x.displayName="Center");var _=["className"],N=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Code",e),a=(0,n.Lr)(e);a.className;var s=u(a,_);return o.createElement(n.m$.code,c({ref:t,className:(0,i.cx)("chakra-code",e.className)},s,{__css:c({display:"inline-block"},r)}))}));i.Ts&&(N.displayName="Code");var w=["className","centerContent"],k=(0,n.Gp)((function(e,t){var r=(0,n.Lr)(e),a=r.className,s=r.centerContent,l=u(r,w),f=(0,n.mq)("Container",e);return o.createElement(n.m$.div,c({ref:t,className:(0,i.cx)("chakra-container",a)},l,{__css:c({},f,s&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(k.displayName="Container");var C=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],E=["className","orientation","__css"],T=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Divider",e),a=r.borderLeftWidth,s=r.borderBottomWidth,l=r.borderTopWidth,f=r.borderRightWidth,d=r.borderWidth,p=r.borderStyle,m=r.borderColor,v=u(r,C),g=(0,n.Lr)(e),y=g.className,h=g.orientation,b=void 0===h?"horizontal":h,x=g.__css,_=u(g,E),N={vertical:{borderLeftWidth:a||f||d||"1px",height:"100%"},horizontal:{borderBottomWidth:s||l||d||"1px",width:"100%"}};return o.createElement(n.m$.hr,c({ref:t,"aria-orientation":b},_,{__css:c({},v,{border:"0",borderColor:m,borderStyle:p},N[b],x),className:(0,i.cx)("chakra-divider",y)}))}));i.Ts&&(T.displayName="Divider");var j=["direction","align","justify","wrap","basis","grow","shrink"],G=(0,n.Gp)((function(e,t){var r=e.direction,a=e.align,i=e.justify,s=e.wrap,l=e.basis,f=e.grow,d=e.shrink,p=u(e,j),m={display:"flex",flexDirection:r,alignItems:a,justifyContent:i,flexWrap:s,flexBasis:l,flexGrow:f,flexShrink:d};return o.createElement(n.m$.div,c({ref:t,__css:m},p))}));i.Ts&&(G.displayName="Flex");var L=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],O=(0,n.Gp)((function(e,t){var r=e.templateAreas,a=e.gap,i=e.rowGap,s=e.columnGap,l=e.column,f=e.row,d=e.autoFlow,p=e.autoRows,m=e.templateRows,v=e.autoColumns,g=e.templateColumns,y=u(e,L),h={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:i,gridColumnGap:s,gridAutoColumns:v,gridColumn:l,gridRow:f,gridAutoFlow:d,gridAutoRows:p,gridTemplateRows:m,gridTemplateColumns:g};return o.createElement(n.m$.div,c({ref:t,__css:h},y))}));i.Ts&&(O.displayName="Grid");var W=["className"],S=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Heading",e),a=(0,n.Lr)(e);a.className;var s=u(a,W);return o.createElement(n.m$.h2,c({ref:t,className:(0,i.cx)("chakra-heading",e.className)},s,{__css:r}))}));i.Ts&&(S.displayName="Heading");var M=["className"],R=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Kbd",e),a=(0,n.Lr)(e),s=a.className,l=u(a,M);return o.createElement(n.m$.kbd,c({ref:t,className:(0,i.cx)("chakra-kbd",s)},l,{__css:c({fontFamily:"mono"},r)}))}));i.Ts&&(R.displayName="Kbd");var I=["className","isExternal"],$=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Link",e),a=(0,n.Lr)(e),s=a.className,l=a.isExternal,f=u(a,I);return o.createElement(n.m$.a,c({target:l?"_blank":void 0,rel:l?"noopener":void 0,ref:t,className:(0,i.cx)("chakra-link",s)},f,{__css:r}))}));i.Ts&&($.displayName="Link");var P=["isExternal","target","rel","className"],B=["className"],A=(0,n.Gp)((function(e,t){var r=e.isExternal,a=e.target,s=e.rel,l=e.className,f=u(e,P);return o.createElement(n.m$.a,c({},f,{ref:t,className:(0,i.cx)("chakra-linkbox__overlay",l),rel:r?"noopener noreferrer":s,target:r?"_blank":a,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),D=(0,n.Gp)((function(e,t){var r=e.className,a=u(e,B);return o.createElement(n.m$.div,c({ref:t,position:"relative"},a,{className:(0,i.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))})),X=["children","styleType","stylePosition","spacing"],z=["as"],F=["as"],q=(0,n.eC)("List"),U=q[0],H=q[1],Q=(0,n.Gp)((function(e,t){var r,a=(0,n.jC)("List",e),i=(0,n.Lr)(e),s=i.children,f=i.styleType,d=void 0===f?"none":f,p=i.stylePosition,m=i.spacing,v=u(i,X),g=(0,l.WR)(s),y=m?((r={})["& > *:not(style) ~ *:not(style)"]={mt:m},r):{};return o.createElement(U,{value:a},o.createElement(n.m$.ul,c({ref:t,listStyleType:d,listStylePosition:p,role:"list",__css:c({},a.container,y)},v),g))}));i.Ts&&(Q.displayName="List");var Y=(0,n.Gp)((function(e,t){e.as;var r=u(e,z);return o.createElement(Q,c({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));i.Ts&&(Y.displayName="OrderedList");var K=(0,n.Gp)((function(e,t){e.as;var r=u(e,F);return o.createElement(Q,c({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))}));i.Ts&&(K.displayName="UnorderedList");var Z=(0,n.Gp)((function(e,t){var r=H();return o.createElement(n.m$.li,c({ref:t},e,{__css:r.item}))}));i.Ts&&(Z.displayName="ListItem");var J=(0,n.Gp)((function(e,t){var r=H();return o.createElement(s.JO,c({ref:t,role:"presentation"},e,{__css:r.icon}))}));i.Ts&&(J.displayName="ListIcon");var V=["columns","spacingX","spacingY","spacing","minChildWidth"],ee=(0,n.Gp)((function(e,t){var r,a=e.columns,s=e.spacingX,l=e.spacingY,f=e.spacing,d=e.minChildWidth,p=u(e,V),m=(0,n.Fg)(),v=d?function(e,t){return(0,i.XQ)(e,(function(e){var r,a=(0,n.LP)("sizes",e,(r=e,(0,i.hj)(r)?r+"px":r))(t);return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+a+", 1fr))"}))}(d,m):(r=a,(0,i.XQ)(r,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return o.createElement(O,c({ref:t,gap:f,columnGap:s,rowGap:l,templateColumns:v},p))}));i.Ts&&(ee.displayName="SimpleGrid");var te=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(te.displayName="Spacer");var re="& > *:not(style) ~ *:not(style)";var ne=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ae=function(e){return o.createElement(n.m$.div,c({className:"chakra-stack__item"},e,{__css:c({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},ie=(0,n.Gp)((function(e,t){var r,a=e.isInline,s=e.direction,f=e.align,d=e.justify,p=e.spacing,m=void 0===p?"0.5rem":p,v=e.wrap,g=e.children,y=e.divider,h=e.className,b=e.shouldWrapChildren,x=u(e,ne),_=a?"row":null!=s?s:"column",N=o.useMemo((function(){return function(e){var t,r=e.spacing,n=e.direction,a={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return(t={flexDirection:n})[re]=(0,i.XQ)(n,(function(e){return a[e]})),t}({direction:_,spacing:m})}),[_,m]),w=o.useMemo((function(){return function(e){var t=e.spacing,r=e.direction,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(r,(function(e){return n[e]}))}}({spacing:m,direction:_})}),[m,_]),k=!!y,C=!b&&!k,E=(0,l.WR)(g),T=C?E:E.map((function(e,t){var r="undefined"!==typeof e.key?e.key:t,n=t+1===E.length,a=b?o.createElement(ae,{key:r},e):e;if(!k)return a;var i=n?null:o.cloneElement(y,{__css:w});return o.createElement(o.Fragment,{key:r},a,i)})),j=(0,i.cx)("chakra-stack",h);return o.createElement(n.m$.div,c({ref:t,display:"flex",alignItems:f,justifyContent:d,flexDirection:N.flexDirection,flexWrap:v,className:j,__css:k?{}:(r={},r[re]=N[re],r)},x),T)}));i.Ts&&(ie.displayName="Stack");var oe=(0,n.Gp)((function(e,t){return o.createElement(ie,c({align:"center"},e,{direction:"row",ref:t}))}));i.Ts&&(oe.displayName="HStack");var se=(0,n.Gp)((function(e,t){return o.createElement(ie,c({align:"center"},e,{direction:"column",ref:t}))}));i.Ts&&(se.displayName="VStack");var le=["className","align","decoration","casing"],ce=(0,n.Gp)((function(e,t){var r=(0,n.mq)("Text",e),a=(0,n.Lr)(e);a.className,a.align,a.decoration,a.casing;var s=u(a,le),l=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(n.m$.p,c({ref:t,className:(0,i.cx)("chakra-text",e.className)},l,s,{__css:r}))}));i.Ts&&(ce.displayName="Text");var ue=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],fe=["className"];function de(e){return"number"===typeof e?e+"px":e}var pe=(0,n.Gp)((function(e,t){var r=e.spacing,s=void 0===r?"0.5rem":r,l=e.spacingX,f=e.spacingY,d=e.children,p=e.justify,m=e.direction,v=e.align,g=e.className,y=e.shouldWrapChildren,h=u(e,ue),b=o.useMemo((function(){var e={spacingX:l,spacingY:f},t=e.spacingX,r=void 0===t?s:t,n=e.spacingY,o=void 0===n?s:n;return{"--chakra-wrap-x-spacing":function(e){return(0,i.XQ)(r,(function(t){return de((0,a.fr)("space",t)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,i.XQ)(o,(function(t){return de((0,a.fr)("space",t)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:p,alignItems:v,flexDirection:m,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[s,l,f,p,v,m]),x=y?o.Children.map(d,(function(e,t){return o.createElement(me,{key:t},e)})):d;return o.createElement(n.m$.div,c({ref:t,className:(0,i.cx)("chakra-wrap",g),overflow:"hidden"},h),o.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:b},x))}));i.Ts&&(pe.displayName="Wrap");var me=(0,n.Gp)((function(e,t){var r=e.className,a=u(e,fe);return o.createElement(n.m$.li,c({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",r)},a))}));i.Ts&&(me.displayName="WrapItem")},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";var n=r(4941).Z;r(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},o=r(6273),s=r(2725),l=r(3462),c=r(1018),u=r(7190),f=r(1210),d=r(8684);var p="undefined"!==typeof i.default.useTransition,m={};function v(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;m[t+"%"+r+(a?"%"+a:"")]=!0}}var g=i.default.forwardRef((function(e,t){var r,a=e.href,g=e.as,y=e.children,h=e.prefetch,b=e.passHref,x=e.replace,_=e.shallow,N=e.scroll,w=e.locale,k=e.onClick,C=e.onMouseEnter,E=e.legacyBehavior,T=void 0===E?!0!==Boolean(!1):E,j=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);r=y,!T||"string"!==typeof r&&"number"!==typeof r||(r=i.default.createElement("a",null,r));var G=!1!==h,L=n(p?i.default.useTransition():[],2)[1],O=i.default.useContext(l.RouterContext),W=i.default.useContext(c.AppRouterContext);W&&(O=W);var S,M=i.default.useMemo((function(){var e=n(o.resolveHref(O,a,!0),2),t=e[0],r=e[1];return{href:t,as:g?o.resolveHref(O,g):r||t}}),[O,a,g]),R=M.href,I=M.as,$=i.default.useRef(R),P=i.default.useRef(I);T&&(S=i.default.Children.only(r));var B=T?S&&"object"===typeof S&&S.ref:t,A=n(u.useIntersection({rootMargin:"200px"}),3),D=A[0],X=A[1],z=A[2],F=i.default.useCallback((function(e){P.current===I&&$.current===R||(z(),P.current=I,$.current=R),D(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[I,B,R,z,D]);i.default.useEffect((function(){var e=X&&G&&o.isLocalURL(R),t="undefined"!==typeof w?w:O&&O.locale,r=m[R+"%"+I+(t?"%"+t:"")];e&&!r&&v(O,R,I,{locale:t})}),[I,R,X,w,G,O]);var q={ref:F,onClick:function(e){T||"function"!==typeof k||k(e),T&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,i,s,l,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r)){e.preventDefault();var u=function(){t[a?"replace":"push"](r,n,{shallow:i,locale:l,scroll:s})};c?c(u):u()}}(e,O,R,I,x,_,N,w,W?L:void 0)},onMouseEnter:function(e){T||"function"!==typeof C||C(e),T&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),o.isLocalURL(R)&&v(O,R,I,{priority:!0})}};if(!T||b||"a"===S.type&&!("href"in S.props)){var U="undefined"!==typeof w?w:O&&O.locale,H=O&&O.isLocaleDomain&&f.getDomainLocale(I,U,O.locales,O.domainLocales);q.href=H||d.addBasePath(s.addLocale(I,U,O&&O.defaultLocale))}return T?i.default.cloneElement(S,q):i.default.createElement("a",Object.assign({},j,q),r)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,c=e.disabled||!o,u=a.useRef(),f=n(a.useState(!1),2),d=f[0],p=f[1],m=n(a.useState(null),2),v=m[0],g=m[1];a.useEffect((function(){if(o){if(u.current&&(u.current(),u.current=void 0),c||d)return;return v&&v.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));if(n&&(t=s.get(n)))return t;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return t={id:r,observer:i,elements:a},l.push(r),s.set(r,t),t}(r),a=n.id,i=n.observer,o=n.elements;return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(a);var t=l.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&l.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:r})),function(){null==u.current||u.current(),u.current=void 0}}if(!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[v,c,r,t,d]);var y=a.useCallback((function(){p(!1)}),[]);return[g,d,y]};var a=r(7294),i=r(9311),o="function"===typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var n,a=(n=r(7294))&&n.__esModule?n:{default:n};var i=a.default.createContext(null);t.AppRouterContext=i;var o=a.default.createContext(null);t.AppTreeContext=o;var s=a.default.createContext(null);t.FullAppTreeContext=s},1664:function(e,t,r){e.exports=r(8418)},9396:function(e,t,r){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})}}]);