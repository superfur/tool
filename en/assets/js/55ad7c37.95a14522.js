"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[898],{8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>t});var r=l(6540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}},9155:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/utility","title":"Utility Functions","description":"deepClone","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/api/utility.md","sourceDirName":"api","slug":"/api/utility","permalink":"/septem-tool/en/docs/api/utility","draft":false,"unlisted":false,"editUrl":"https://github.com/septem/tool/tree/main/docs/docs/api/utility.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"apiSidebar","previous":{"title":"String Functions","permalink":"/septem-tool/en/docs/api/string"},"next":{"title":"Query String Functions","permalink":"/septem-tool/en/docs/api/qs"}}');var s=l(4848),a=l(8453);const i={sidebar_position:5},t="Utility Functions",d={},o=[{value:"deepClone",id:"deepclone",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:3},{value:"isEqual",id:"isequal",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return Value",id:"return-value-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Edge Cases",id:"edge-cases",level:3},{value:"random",id:"random",level:2},{value:"Syntax",id:"syntax-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return Value",id:"return-value-2",level:3},{value:"Example",id:"example-2",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"utility-functions",children:"Utility Functions"})}),"\n",(0,s.jsx)(n.h2,{id:"deepclone",children:"deepClone"}),"\n",(0,s.jsxs)(n.p,{children:["Creates a deep clone of ",(0,s.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"deepClone(value)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," (*): The value to clone"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"(*): Returns the deep cloned value"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const objects = [{ 'a': 1 }, { 'b': 2 }];\n\nconst deep = deepClone(objects);\nconsole.log(deep[0] === objects[0]);\n// => false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"isequal",children:"isEqual"}),"\n",(0,s.jsx)(n.p,{children:"Performs a deep comparison between two values to determine if they are equivalent."}),"\n",(0,s.jsx)(n.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"isEqual(value, other)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," (*): The value to compare"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"other"})," (*): The other value to compare"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"return-value-1",children:"Return Value"}),"\n",(0,s.jsxs)(n.p,{children:["(boolean): Returns ",(0,s.jsx)(n.code,{children:"true"})," if the values are equivalent, else ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const object = { 'a': 1 };\nconst other = { 'a': 1 };\n\nisEqual(object, other);\n// => true\n\nobject === other;\n// => false\n"})}),"\n",(0,s.jsx)(n.h3,{id:"edge-cases",children:"Edge Cases"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Correctly handles special JavaScript objects like Date and RegExp"}),"\n",(0,s.jsx)(n.li,{children:"Performs deep comparison of arrays and objects"}),"\n",(0,s.jsxs)(n.li,{children:["Treats ",(0,s.jsx)(n.code,{children:"null"})," and ",(0,s.jsx)(n.code,{children:"undefined"})," as equal only to themselves"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"random",children:"random"}),"\n",(0,s.jsx)(n.p,{children:"Produces a random number between the inclusive lower and upper bounds."}),"\n",(0,s.jsx)(n.h3,{id:"syntax-2",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"random([lower=0], [upper=1], [floating])\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[lower=0]"})," (number): The lower bound"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[upper=1]"})," (number): The upper bound"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[floating]"})," (boolean): Specify returning a floating-point number"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"return-value-2",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"(number): Returns the random number"}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"random(0, 5);\n// => an integer between 0 and 5\n\nrandom(5);\n// => an integer between 0 and 5\n\nrandom(1.2, 5.2);\n// => a floating-point number between 1.2 and 5.2\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);