(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{111:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(7),o=(t(0),t(120)),i={id:"index-software",title:"Installing Redis from Source",sidebar_label:"Redis Enterprise",slug:"/create/resoftware"},c={unversionedId:"create/resoftware/index-software",id:"create/resoftware/index-software",isDocsHomePage:!1,title:"Installing Redis from Source",description:"Installing and Create Redis database from Source",source:"@site/docs/create/resoftware/index-resoftware.mdx",slug:"/create/resoftware",permalink:"/create/resoftware",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/resoftware/index-resoftware.mdx",version:"current",sidebar_label:"Redis Enterprise",sidebar:"docs",previous:{title:"Using Docker",permalink:"/create/docker"},next:{title:"Explore Data",permalink:"/explore/"}},s=[{value:"Installing and Create Redis database from Source",id:"installing-and-create-redis-database-from-source",children:[]}],l={toc:s};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"installing-and-create-redis-database-from-source"},"Installing and Create Redis database from Source"),Object(o.b)("h4",{id:"download-extract-and-compile-redis"},"Download, extract and compile Redis"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"wget http://download.redis.io/redis-stable.tar.gz\ntar xvzf redis-stable.tar.gz\ncd redis-stable\nmake\n")),Object(o.b)("p",null,"It is a good idea to copy both the Redis server and the command line interface into the proper places, either manually using the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo cp src/redis-server /usr/local/bin/\nsudo cp src/redis-cli /usr/local/bin/\n")),Object(o.b)("p",null,"Or just using ",Object(o.b)("inlineCode",{parentName:"p"},"sudo make install.")),Object(o.b)("p",null,"The binaries that are now compiled are available in the src directory. "),Object(o.b)("h4",{id:"running-redis-server"},"Running Redis Server"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ redis-server\n")),Object(o.b)("h4",{id:"interacting-with-redis-client"},"Interacting with Redis Client"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'$ src/redis-cli\nredis> set foo bar\nOK\nredis> get foo\n"bar"\n')))}d.isMDXComponent=!0},120:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),b=n,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?a.a.createElement(f,c(c({ref:r},l),{},{components:t})):a.a.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);