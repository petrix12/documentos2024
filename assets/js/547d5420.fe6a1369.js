"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[8004],{6513:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>g});var s=n(4848),r=n(8453);const c={title:"P\xe1gina de prueba",sidebar_label:"prueba",sidebar_position:2},i="Docusaurus",l={id:"pruebas/docusaurus",title:"P\xe1gina de prueba",description:"+ P\xe1gina oficial//docusaurus.io",source:"@site/docs/pruebas/docusaurus.md",sourceDirName:"pruebas",slug:"/pruebas/docusaurus",permalink:"/documentos2024/docs/pruebas/docusaurus",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pruebas/docusaurus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"P\xe1gina de prueba",sidebar_label:"prueba",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"prueba 1",permalink:"/documentos2024/docs/pruebas/prueba2"},next:{title:"prueballl",permalink:"/documentos2024/docs/pruebas/prueba 5/prueballl"}},a={},g=[{value:"Crear un proyecto de ejemplo:",id:"crear-un-proyecto-de-ejemplo",level:2},{value:"Pruebas:",id:"pruebas",level:2},{value:"C\xf3digo:",id:"c\xf3digo",level:3},{value:"Imagenes",id:"imagenes",level:3}];function o(A){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"docusaurus",children:"Docusaurus"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"P\xe1gina oficial"}),": ",(0,s.jsx)(e.a,{href:"https://docusaurus.io",children:"https://docusaurus.io"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Video tutorial"}),": ",(0,s.jsx)(e.a,{href:"https://www.youtube.com/watch?v=XPsEj5By5sk",children:"https://www.youtube.com/watch?v=XPsEj5By5sk"})]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"crear-un-proyecto-de-ejemplo",children:"Crear un proyecto de ejemplo:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Crear proyecto de documentaci\xf3n:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"$ npx create-docusaurus@latest documentacion classic"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Ejecutar proyecto:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"$ npm run start"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Para ingresar documentaci\xf3n pegar documentos en la carpeta ",(0,s.jsx)(e.strong,{children:"docs"})," del proyecto"]}),"\n",(0,s.jsxs)(e.li,{children:["Para configurar la p\xe1gina, escribir al iniciao:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'---\r\ntitle: P\xe1gina de prueba\r\nsidebar_label: "prueba"\r\ndidebar_position: 1\r\n---\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Para configurar toda la documentaci\xf3n: ",(0,s.jsx)(e.strong,{children:"sidebars.js"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Para configurar carpetas de documentaci\xf3n: ",(0,s.jsx)(e.strong,{children:"docs\\tutorial-basics_category_.json"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Para personalizar la aplicaci\xf3n:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"docusaurus.config.js"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"src\\components\\HomepageFeatures"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"src\\pages"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Deploy en GitHub:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"$ npm run build"}),"\n",(0,s.jsx)(e.li,{children:"Crear en GitHub un respositorio para el proyecto."}),"\n",(0,s.jsx)(e.li,{children:"$ git init"}),"\n",(0,s.jsx)(e.li,{children:"$ git add ."}),"\n",(0,s.jsx)(e.li,{children:'$ git commit -m "first commit"'}),"\n",(0,s.jsx)(e.li,{children:"$ git branch -M main"}),"\n",(0,s.jsxs)(e.li,{children:["$ git remote add origin ",(0,s.jsx)(e.a,{href:"https://github.com/petrix12/documentos2024.git",children:"https://github.com/petrix12/documentos2024.git"})]}),"\n",(0,s.jsx)(e.li,{children:"$ git push -u origin main"}),"\n",(0,s.jsxs)(e.li,{children:["Configurar ",(0,s.jsx)(e.strong,{children:"docusaurus.config.js"}),":","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// ...\r\nbaseUrl: '/documentos2024',     // Nombre del repositorio\r\norganizationName: 'petrix12',   // Usuario GitHub\r\nprojectName: 'documentos2024',  // Nombre del repositorio\r\ndeploymentBranch: 'gh-pages',   // Rama de git pages\r\ntrailingSlash: false,\r\n// ...\n"})}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"$ cmd /C 'set \"GIT_USER=petrix12\" && npm run deploy'"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"pruebas",children:"Pruebas:"}),"\n",(0,s.jsx)(e.h3,{id:"c\xf3digo",children:"C\xf3digo:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Sencillo"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",metastring:'title="src/ddd.js"',children:"let variable\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Con resaltado en l\xednea"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",metastring:'title="src/ddd.js"',children:"let variable\r\n// highlight-next-line\r\nlet otra_variable\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Con resaltado en bloque:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\r\n  themeConfig: {\r\n    navbar: {\r\n      items: [\r\n        // highlight-start\r\n        {\r\n          type: 'docsVersionDropdown',\r\n        },\r\n        // highlight-end\r\n      ],\r\n    },\r\n  },\r\n};\n"})}),"\n",(0,s.jsx)(e.h3,{id:"imagenes",children:"Imagenes"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.img,{src:"http://publico.test/images/logo-045d73fa94754ec175b5a2c986ce7811.svg",alt:"imagen"}),"\r\n",(0,s.jsx)(e.img,{alt:"prueba",src:n(5334).A+"",width:"80",height:"72"})]})]})}function d(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(o,{...A})}):o(A)}},5334:(A,e,n)=>{n.d(e,{A:()=>s});const s="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QSWRXhpZgAATU0AKgAAAAgABwEOAAIAAABjAAABbgE7AAIAAAAFAAAB0odpAAQAAAABAAAB2JybAAEAAADGAAAC+JydAAEAAAAKAAADvpyfAAEAAADGAAADyOocAAcAAAEMAAAAYgAAAAAc6gAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARGV0YWlscyBmaW5lIHByaW50IHRlcm1zIGFuZCBjb25kaXRpb25zIG1hZ25pZnlpbmcgZ2xhc3MgcmVhZGluZyB0aGUgZGV0YWlscyBjb25jZXB0IGlsbHVzdHJhdGlvbi4AAGZpbG8AAAAB6hwABwAAAQwAAAHqAAAAABzqAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAZQB0AGEAaQBsAHMAIABmAGkAbgBlACAAcAByAGkAbgB0ACAAdABlAHIAbQBzACAAYQBuAGQAIABjAG8AbgBkAGkAdABpAG8AbgBzACAAbQBhAGcAbgBpAGYAeQBpAG4AZwAgAGcAbABhAHMAcwAgAHIAZQBhAGQAaQBuAGcAIAB0AGgAZQAgAGQAZQB0AGEAaQBsAHMAIABjAG8AbgBjAGUAcAB0ACAAaQBsAGwAdQBzAHQAcgBhAHQAaQBvAG4ALgAAAGYAaQBsAG8AAABEAGUAdABhAGkAbABzACAAZgBpAG4AZQAgAHAAcgBpAG4AdAAgAHQAZQByAG0AcwAgAGEAbgBkACAAYwBvAG4AZABpAHQAaQBvAG4AcwAgAG0AYQBnAG4AaQBmAHkAaQBuAGcAIABnAGwAYQBzAHMAIAByAGUAYQBkAGkAbgBnACAAdABoAGUAIABkAGUAdABhAGkAbABzACAAYwBvAG4AYwBlAHAAdAAgAGkAbABsAHUAcwB0AHIAYQB0AGkAbwBuAC4AAAD/4QVDaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIvPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj48ZGM6dGl0bGU+PHJkZjpBbHQgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPkRldGFpbHMgZmluZSBwcmludCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBtYWduaWZ5aW5nIGdsYXNzIHJlYWRpbmcgdGhlIGRldGFpbHMgY29uY2VwdCBpbGx1c3RyYXRpb24uPC9yZGY6bGk+PC9yZGY6QWx0Pg0KCQkJPC9kYzp0aXRsZT48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPkRldGFpbHMgZmluZSBwcmludCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBtYWduaWZ5aW5nIGdsYXNzIHJlYWRpbmcgdGhlIGRldGFpbHMgY29uY2VwdCBpbGx1c3RyYXRpb24uPC9yZGY6bGk+PC9yZGY6QWx0Pg0KCQkJPC9kYzpkZXNjcmlwdGlvbj48ZGM6Y3JlYXRvcj48cmRmOlNlcSB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6bGk+ZmlsbzwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMACgcHCAcGCggICAsKCgsOGBAODQ0OHRUWERgjHyUkIh8iISYrNy8mKTQpISIwQTE0OTs+Pj4lLkRJQzxINz0+O//bAEMBCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O//AABEIAEgAUAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AM2iiiv0M4Qooqrf6lb6eo8zLysMrEpwcepPYfh+nNROcYK8hpXLVFYLarqs7Fl8i3U4+Xywf/QskUq6pq0XL+RcIDyvlAfqAD+tYfWevK7Fcpu1DJdwRTJC8oV5PuiorDUoNQVggaOZeWiY549Qe/6H8iapWOjSR3Zubto5Gzu2jJ+b17VftXJL2eordzYooorckTPvVmx0691OUxWVtJOw67BwPqeg/Gqma9X8CQwx+Fbd4lG6VnaRscs24jn8ABXDj8U8NS5krt6FwjzOx5vq2j6noVg9/qNk8UCccup3Mfurwc8nH0607wP4DPiSFtW1SSTEzFlK8HHr07/ljFdF8aZnTw5ZRrna12C34K2KZDqmu6TpUdrosEs8cVjEbeMWTOrqYCS/mAY3AgYBzu6YyQR4lXGVq1NS0TNlBJm5H8NPD0YwBc/jIP8ACkk+Gfh+RSMXAPqJB/hVdNW17+zrK/8AtN1IGmkW6gTTm3qqwvJ8oZFJyUUdOr461DH4k8UwW9qmoafPFPFKBeFLUyBkMsHK7NwwEklHBJOzPB4HH9YxP/Px/eVyx7HIeNfAn/CPRf2jp7y7oGDh8gnA7jjqOv0BpNH0nVNe09L+wsjJE3DbGUbXH3hgnI56exFdhrmoXer309i0UraVLCxBNlKmxfKJLOXUAfMMcMeoG3OSKXwTdzoGoIc7Fuht/wC+Bn+lddHG1aVNz3fmS4Js5zUNK1DS2UX1rJBu+6WHB+hHFVM+9exeJ4IZ/DWoCdQVSBnXPZgMqfzArxvNe1l+LeKptyVmjKceVjM1s6F4o1Dw+rLbNHJC5y0MoJGfUYxg1hZqVS+Bj8D81d9alCpHlmrohNrY1fF3ia48UaYtnPa26EnMZQEkN1A5456fjmup+HHjPTbnwvBYX99b213p6iArK4Tcg+4Rnrxwe+Rz1Feaalfx2y+VMrN5gz8uf1yap3FvJLIl0rmC7YZJbgSfUno3rng9Tg5LeLisDSklGGluxrGT3Z9Cf8JDon/QYsP/AAJT/Gk/4SHQ/wDoMWH/AIEp/jXz8dTurUAXtk6ZHDgYDfTPB/A0g1W4uQRZ2bv6seQv1x0/OuX+zcNb+I/uK55dj1n4h+NNMsvCtza2V9bXV1fIYUSKUPtUjDMcHgBc49yPfHK+EPElx4U0g2MVrAzs++VpN2d5AyMe3A+oNchaCG2u/tuoymaReQY/mWM9uR1Ppjgcc+kljq3mzvGilU3Hy4sknb257n279vQ70MJQppwqap9xSk3sdlrni/Udct/s0rxQ2+ctHEG+fHTJNYGacrbxvWTcpHBG4jH1qHNe3QpU6UeWmrIybb3G5p+0kDCHJHGFPNRVIu0p3/75HX866GSVJNJimu2nkWRyV5Qg4Bq3JGkihWh4zj7p/wAaDtIAGcD1QdfzoXBIzn/vgf41kqcVeyHciS0lhJNu80JP9zcM/rSPbPKQ9w8swXu+44/WpTjaQc+gwg/xpWVQSQTkf7A/xo5Ihcgu7MSWrQpDnHbac/zrnJoXgfowGflPSuqHl5Oc4/3B/jVO8s0nQlQQxGSAo/xrnr4f2iutyoysQabqIk/dOoL9T1+b3GO/qO/Uc5zohlYBlIIIyCK5eWN4JNuSMHIPStbTruSclWTAA+Zs8Fs9QO3fP59zWOFrSjL2UhyXVF3NSrllHzJjHqooor1JGdxVJPeLOPRKQNyOU9P4aKKkLjiGzkGL3+5TA7ZJ+QZPBIWiikguOY7ecoD2xsoIYgcx/mlFFFwuU7u1W4BI8vPcfKKLaBYEwOtFFEYR5ua2oX0P/9k="},8453:(A,e,n)=>{n.d(e,{R:()=>i,x:()=>l});var s=n(6540);const r={},c=s.createContext(r);function i(A){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function l(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:i(A.components),s.createElement(c.Provider,{value:e},A.children)}}}]);