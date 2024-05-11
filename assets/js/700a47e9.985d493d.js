"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[2610],{2375:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(4848),t=a(8453);const s={title:"Apuntes de Laravel 11",sidebar_label:"Apuntes de Laravel 11",sidebar_position:0},o="APUNTES LARAVEL 11",i={id:"00laravel/laravel11",title:"Apuntes de Laravel 11",description:"Habilitar soporte para API",source:"@site/docs/00laravel/laravel11.md",sourceDirName:"00laravel",slug:"/00laravel/laravel11",permalink:"/documentos2024/docs/00laravel/laravel11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/00laravel/laravel11.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Apuntes de Laravel 11",sidebar_label:"Apuntes de Laravel 11",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Laravel",permalink:"/documentos2024/docs/category/laravel"},next:{title:"Apuntes de Laravel 10",permalink:"/documentos2024/docs/00laravel/laravel10"}},l={},d=[{value:"Habilitar soporte para API",id:"habilitar-soporte-para-api",level:2},{value:"Crear archivo de rutas:",id:"crear-archivo-de-rutas",level:2},{value:"Forma 1: registrando en bootstrap\\app.php.",id:"forma-1-registrando-en-bootstrapappphp",level:3},{value:"Forma 2: registrando en otro archivo de rutas.",id:"forma-2-registrando-en-otro-archivo-de-rutas",level:3}];function p(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"apuntes-laravel-11",children:"APUNTES LARAVEL 11"}),"\n",(0,n.jsx)(r.h2,{id:"habilitar-soporte-para-api",children:"Habilitar soporte para API"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Ejecutar:","\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"php artisan install:api\n"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["Agregar trait ",(0,n.jsx)(r.strong,{children:"HasApiTokens"})," al modelo ",(0,n.jsx)(r.strong,{children:"User"}),":","\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",metastring:'title="...\\app\\Models\\User.php"',children:"//...\r\nclass User extends Authenticatable\r\n{\r\n    use HasApiTokens;\r\n    // ...\r\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"crear-archivo-de-rutas",children:"Crear archivo de rutas:"}),"\n",(0,n.jsx)(r.h3,{id:"forma-1-registrando-en-bootstrapappphp",children:"Forma 1: registrando en bootstrap\\app.php."}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Crear archivo de rutas, por ejemplo ",(0,n.jsx)(r.strong,{children:"...\\routes\\admin.php"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Registrar el archivo de rutas en ",(0,n.jsx)(r.strong,{children:"...\\bootstrap\\app.php"}),".","\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",metastring:'title="...\\bootstrap\\app.php"',children:"// ...\r\n->withRouting(\r\n    // ...\r\n    then: function() {\r\n        Route::middleware('auth:web')\r\n            ->prefix('admin')\r\n            ->group(base_path('routes/admin.php'));\r\n    }\r\n)\r\n// ...\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"forma-2-registrando-en-otro-archivo-de-rutas",children:"Forma 2: registrando en otro archivo de rutas."}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Crear archivo de rutas, por ejemplo ",(0,n.jsx)(r.strong,{children:"...\\routes\\admin.php"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Modificar el archivo de rutas ",(0,n.jsx)(r.strong,{children:"...\\routes\\web.php"})," o ",(0,n.jsx)(r.strong,{children:"...\\routes\\api.php"})," seg\xfan corresponda:","\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-php",children:"// ...\r\n// Registrar rutas del archivo admin.php\r\nrequire __DIR__.'/admin.php';\r\n// ...\n"})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>i});var n=a(6540);const t={},s=n.createContext(t);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);