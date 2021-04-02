(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),s=a,d=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return n?r.a.createElement(d,b(b({ref:t},c),{},{components:n})):r.a.createElement(d,b({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,p[1]=b;for(var c=2;c<o;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},864:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(1348)),p={id:"components_editor_layout_contextmenu",title:"Module: components/editor/layout/ContextMenu",sidebar_label:"components/editor/layout/ContextMenu",custom_edit_url:null,hide_title:!0},b={unversionedId:"docs-client/modules/components_editor_layout_contextmenu",id:"docs-client/modules/components_editor_layout_contextmenu",isDocsHomePage:!1,title:"Module: components/editor/layout/ContextMenu",description:"Module: components/editor/layout/ContextMenu",source:"@site/docs/docs-client/modules/components_editor_layout_contextmenu.md",slug:"/docs-client/modules/components_editor_layout_contextmenu",permalink:"/docs/docs-client/modules/components_editor_layout_contextmenu",editUrl:null,version:"current",sidebar_label:"components/editor/layout/ContextMenu",sidebar:"sidebar",previous:{title:"Module: components/editor/layout/Center",permalink:"/docs/docs-client/modules/components_editor_layout_center"},next:{title:"Module: components/editor/layout/Flex",permalink:"/docs/docs-client/modules/components_editor_layout_flex"}},i=[{value:"Variables",id:"variables",children:[{value:"ContextMenu",id:"contextmenu",children:[]},{value:"ContextMenuStyles",id:"contextmenustyles",children:[]},{value:"ContextMenuTrigger",id:"contextmenutrigger",children:[]},{value:"MenuItem",id:"menuitem",children:[]},{value:"SubMenu",id:"submenu",children:[]},{value:"connectMenu",id:"connectmenu",children:[]},{value:"showMenu",id:"showmenu",children:[]}]}],c={toc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-componentseditorlayoutcontextmenu"},"Module: components/editor/layout/ContextMenu"),Object(o.b)("h2",{id:"variables"},"Variables"),Object(o.b)("h3",{id:"contextmenu"},"ContextMenu"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"ContextMenu"),": ",Object(o.b)("em",{parentName:"p"},"React.FC"),"<{ ",Object(o.b)("inlineCode",{parentName:"p"},"id"),": ",Object(o.b)("em",{parentName:"p"},"string"),"  }",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/layout/ContextMenu.tsx#L89"},"packages/client-core/components/editor/layout/ContextMenu.tsx:89")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"contextmenustyles"},"ContextMenuStyles"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"ContextMenuStyles"),": ",Object(o.b)("em",{parentName:"p"},"GlobalStyleComponent"),"<{ ",Object(o.b)("inlineCode",{parentName:"p"},"theme"),": { ",Object(o.b)("inlineCode",{parentName:"p"},"a"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = ""; ',Object(o.b)("inlineCode",{parentName:"p"},"amber"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#FFC107"; ',Object(o.b)("inlineCode",{parentName:"p"},"background"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#15171B"; ',Object(o.b)("inlineCode",{parentName:"p"},"blue"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#006EFF"; ',Object(o.b)("inlineCode",{parentName:"p"},"blueHover"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#4D93F1"; ',Object(o.b)("inlineCode",{parentName:"p"},"bluePressed"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#0554BC"; ',Object(o.b)("inlineCode",{parentName:"p"},"border"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#5D646C"; ',Object(o.b)("inlineCode",{parentName:"p"},"borderStyle"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "1px solid #5D646C"; ',Object(o.b)("inlineCode",{parentName:"p"},"brown"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#795548"; ',Object(o.b)("inlineCode",{parentName:"p"},"cyan"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#00BCD4"; ',Object(o.b)("inlineCode",{parentName:"p"},"deemphasized"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "grey"; ',Object(o.b)("inlineCode",{parentName:"p"},"deepOrange"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#FF5722"; ',Object(o.b)("inlineCode",{parentName:"p"},"deepPurple"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#673AB7"; ',Object(o.b)("inlineCode",{parentName:"p"},"disabled"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#222222"; ',Object(o.b)("inlineCode",{parentName:"p"},"disabledText"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "grey"; ',Object(o.b)("inlineCode",{parentName:"p"},"dropdown"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#000000"; ',Object(o.b)("inlineCode",{parentName:"p"},"green"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#4CAF50"; ',Object(o.b)("inlineCode",{parentName:"p"},"header"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#1b1b1b"; ',Object(o.b)("inlineCode",{parentName:"p"},"hover"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#4B5562"; ',Object(o.b)("inlineCode",{parentName:"p"},"hover2"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#636F80"; ',Object(o.b)("inlineCode",{parentName:"p"},"indigo"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#3F51B5"; ',Object(o.b)("inlineCode",{parentName:"p"},"inputBackground"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#070809"; ',Object(o.b)("inlineCode",{parentName:"p"},"lato"),": ",Object(o.b)("em",{parentName:"p"},"string")," = \"'Lato', sans-serif\"; ",Object(o.b)("inlineCode",{parentName:"p"},"lightBlue"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#03A9F4"; ',Object(o.b)("inlineCode",{parentName:"p"},"lightGreen"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#8BC34A"; ',Object(o.b)("inlineCode",{parentName:"p"},"lime"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#CDDC39"; ',Object(o.b)("inlineCode",{parentName:"p"},"orange"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#FF9800"; ',Object(o.b)("inlineCode",{parentName:"p"},"panel"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#282C31"; ',Object(o.b)("inlineCode",{parentName:"p"},"panel2"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#3A4048"; ',Object(o.b)("inlineCode",{parentName:"p"},"pink"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#E91E63"; ',Object(o.b)("inlineCode",{parentName:"p"},"purple"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#9C27B0"; ',Object(o.b)("inlineCode",{parentName:"p"},"red"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#F44336"; ',Object(o.b)("inlineCode",{parentName:"p"},"selected"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#006EFF"; ',Object(o.b)("inlineCode",{parentName:"p"},"selectedText"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#fff"; ',Object(o.b)("inlineCode",{parentName:"p"},"shadow15"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "0px 4px 4px  rgba(0, 0, 0, 0.15)"; ',Object(o.b)("inlineCode",{parentName:"p"},"shadow30"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "0px 4px 4px  rgba(0, 0, 0, 0.3)"; ',Object(o.b)("inlineCode",{parentName:"p"},"teal"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#009688"; ',Object(o.b)("inlineCode",{parentName:"p"},"text"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#FFFFFF"; ',Object(o.b)("inlineCode",{parentName:"p"},"text2"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#9FA4B5"; ',Object(o.b)("inlineCode",{parentName:"p"},"toolbar"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#4D535B"; ',Object(o.b)("inlineCode",{parentName:"p"},"toolbar2"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#43484F"; ',Object(o.b)("inlineCode",{parentName:"p"},"white"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#fff"; ',Object(o.b)("inlineCode",{parentName:"p"},"yellow"),": ",Object(o.b)("em",{parentName:"p"},"string"),' = "#FFEB3B"; ',Object(o.b)("inlineCode",{parentName:"p"},"zilla"),": ",Object(o.b)("em",{parentName:"p"},"string")," = \"'Zilla Slab', sans-serif\" }  }, DefaultTheme",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/layout/ContextMenu.tsx#L20"},"packages/client-core/components/editor/layout/ContextMenu.tsx:20")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"contextmenutrigger"},"ContextMenuTrigger"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"ContextMenuTrigger"),": ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/layout/ContextMenu.tsx#L18"},"packages/client-core/components/editor/layout/ContextMenu.tsx:18")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"menuitem"},"MenuItem"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"MenuItem"),": ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/layout/ContextMenu.tsx#L15"},"packages/client-core/components/editor/layout/ContextMenu.tsx:15")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"submenu"},"SubMenu"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"SubMenu"),": ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/layout/ContextMenu.tsx#L17"},"packages/client-core/components/editor/layout/ContextMenu.tsx:17")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"connectmenu"},"connectMenu"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"connectMenu"),": ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/layout/ContextMenu.tsx#L14"},"packages/client-core/components/editor/layout/ContextMenu.tsx:14")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"showmenu"},"showMenu"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Const")," ",Object(o.b)("strong",{parentName:"p"},"showMenu"),": ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/editor/layout/ContextMenu.tsx#L16"},"packages/client-core/components/editor/layout/ContextMenu.tsx:16")))}l.isMDXComponent=!0}}]);