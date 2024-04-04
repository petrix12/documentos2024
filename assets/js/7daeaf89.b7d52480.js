"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[252],{9718:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=s(4848),r=s(8453);const l={title:"Arquitectura Hexagonal",sidebar_label:"Apuntes de Arquitectura Hexagonal",sidebar_position:0},t="Apuntes de Arquitectura Hexagonal",c={id:"10arquitectura/arquitectura_hexagonal",title:"Arquitectura Hexagonal",description:"Estructura por entidad",source:"@site/docs/10arquitectura/arquitectura_hexagonal.md",sourceDirName:"10arquitectura",slug:"/10arquitectura/arquitectura_hexagonal",permalink:"/documentos2024/docs/10arquitectura/arquitectura_hexagonal",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10arquitectura/arquitectura_hexagonal.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Arquitectura Hexagonal",sidebar_label:"Apuntes de Arquitectura Hexagonal",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Arquitectura Hexagonal",permalink:"/documentos2024/docs/category/arquitectura-hexagonal"},next:{title:"Apuntes Estilos",permalink:"/documentos2024/docs/category/apuntes-estilos"}},d={},a=[{value:"Estructura por entidad",id:"estructura-por-entidad",level:2},{value:"Mapa conceptual DDD (Domain-Driven Design): Tactical Design",id:"mapa-conceptual-ddd-domain-driven-design-tactical-design",level:2}];function o(n){const e={h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"apuntes-de-arquitectura-hexagonal",children:"Apuntes de Arquitectura Hexagonal"}),"\n",(0,i.jsx)(e.h2,{id:"estructura-por-entidad",children:"Estructura por entidad"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Carpeta Entidad:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Carpeta Infrastructure","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Carpeta Respositories"}),"\n",(0,i.jsx)(e.li,{children:"Controllers"}),"\n",(0,i.jsx)(e.li,{children:"Routes"}),"\n",(0,i.jsx)(e.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Carpeta Application","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Archivo caso de uso List"}),"\n",(0,i.jsx)(e.li,{children:"Archivo caso de uso Store"}),"\n",(0,i.jsx)(e.li,{children:"Archivo caso de uso ..."}),"\n",(0,i.jsx)(e.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Carpeta Domain","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Archivo Entidad: contendr\xe1 propiedades y m\xe9todos"}),"\n",(0,i.jsx)(e.li,{children:"Carpeta Value_Objects"}),"\n",(0,i.jsx)(e.li,{children:"Contracts"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Para agrupar entidades se creara una carpeta ",(0,i.jsx)(e.strong,{children:"Bounded Context"})," que las contendr\xe1."]}),"\n",(0,i.jsxs)(e.li,{children:["La comunicaci\xf3n entre entidades se realizar\xe1 a treves de una ",(0,i.jsx)(e.strong,{children:"cola de mensajer\xeda"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"mapa-conceptual-ddd-domain-driven-design-tactical-design",children:"Mapa conceptual DDD (Domain-Driven Design): Tactical Design"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Model - Driven Design"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Expressed with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Services"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Entities"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Integrity maintained by:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Aggregates"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Encapsulated with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Factories"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Accessed using:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Repositories"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Publishes state changes in:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Domain Events"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Encapsulated with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Factories"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Value Objects"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Encapsulted with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Aggregates"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Accessed using:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Repositories"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Encapsulated with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Factories"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Encapsulated with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Factories"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Domain Events"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Isolated with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Layered Architecture"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Gives structure to:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Ubiquitous Language"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Defined within:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Bounded Context"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Ubiquitous Language"})}),"\n",(0,i.jsxs)(e.li,{children:["Keep model unified by:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Continuous Integration"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Overview relationships with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Context Map"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Segregate conceptual messes:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Big Ball of Mud"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Translate and insulate with:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Anticorruption Layer"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Free teams to:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Separate Ways"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Support multiple clients through:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Open Host Service"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Formalize as:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Published language"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Overlap contexts through:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Shared Kernel"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Relate contexts as:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Customer / Supplier Teams"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Overlap as:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"Conformist"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(6540);const r={},l=i.createContext(r);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);