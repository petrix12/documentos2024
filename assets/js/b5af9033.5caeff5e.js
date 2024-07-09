"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[7404],{2371:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>t});var r=i(4848),a=i(8453);const s={title:"Principios SOLID",sidebar_label:"Apuntes de Principios SOLID",sidebar_position:1},l="Principios SOLID",o={id:"10arquitectura/solid",title:"Principios SOLID",description:"Acr\xf3nimo:",source:"@site/docs/10arquitectura/solid.md",sourceDirName:"10arquitectura",slug:"/10arquitectura/solid",permalink:"/documentos2024/docs/10arquitectura/solid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10arquitectura/solid.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Principios SOLID",sidebar_label:"Apuntes de Principios SOLID",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Apuntes de Arquitectura Hexagonal",permalink:"/documentos2024/docs/10arquitectura/arquitectura_hexagonal"},next:{title:"Docker",permalink:"/documentos2024/docs/category/docker"}},c={},t=[{value:"Acr\xf3nimo:",id:"acr\xf3nimo",level:2},{value:"Single Responsibility | Principio de responsabilidad \xfanica",id:"single-responsibility--principio-de-responsabilidad-\xfanica",level:2},{value:"Open / Close | Prinicipio de Abierto o Cerrado",id:"open--close--prinicipio-de-abierto-o-cerrado",level:2},{value:"Liskov Substitution | Principio de sustituci\xf3n de Barbara Liskov",id:"liskov-substitution--principio-de-sustituci\xf3n-de-barbara-liskov",level:2},{value:"Interface Segregation | Principio de segregaci\xf3n de interfaz",id:"interface-segregation--principio-de-segregaci\xf3n-de-interfaz",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"principios-solid",children:"Principios SOLID"}),"\n",(0,r.jsx)(n.h2,{id:"acr\xf3nimo",children:"Acr\xf3nimo:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"S"}),": Single Responsibility | Principio de responsabilidad \xfanica."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"O"}),": Open / Close | Prinicipio de Abierto o Cerrado."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"L"}),": Liskov Substitution | Principio de sustituci\xf3n de Barbara Liskov"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"I"}),": Interface Segregation | Principio de segregaci\xf3n de interfaz"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"D"}),": Dependency Inversion | Principio de inversi\xf3n de dependencia"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"single-responsibility--principio-de-responsabilidad-\xfanica",children:"Single Responsibility | Principio de responsabilidad \xfanica"}),"\n",(0,r.jsx)(n.admonition,{title:"Nota",type:"tip",children:(0,r.jsx)(n.p,{children:"Una clase debe tener una y solo una raz\xf3n para cambiar, es decir, un \xfanico trabajo."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["C\xf3digo en Python que no sigue este principio:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"class Employee:\r\n    def __init__(self, name, id, salary)\r\n        self.name = name\r\n        self.id = id\r\n        self.salary = salary\r\n\r\n    def calculate_salary(self, hours_worked):\r\n        # Aqu\xed la l\xf3gica para el c\xe1lculo del salario\r\n        pass\r\n\r\n    def save_to_database(self):\r\n        # Aqu\xed la l\xf3gica para guardar los datos en base de datos\r\n        pass\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Refactorizaci\xf3n del c\xf3digo en Python para adaptarlo al principio:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"class Employee:\r\n    def __init__(self, name, id, salary)\r\n        self.name = name\r\n        self.id = id\r\n        self.salary = salary\r\n\r\n    def calculate_salary(self, hours_worked):\r\n        # Aqu\xed la l\xf3gica para el c\xe1lculo del salario\r\n        pass\r\n\r\nclass EmployeeToDatabase:\r\n    def save_to_database(self, employee):\r\n        # Aqu\xed la l\xf3gica para guardar los datos en base de datos\r\n        pass\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"open--close--prinicipio-de-abierto-o-cerrado",children:"Open / Close | Prinicipio de Abierto o Cerrado"}),"\n",(0,r.jsx)(n.admonition,{title:"Nota",type:"tip",children:(0,r.jsx)(n.p,{children:"Los objetos o entidades deben estar abiertos para su extensi\xf3n, pero cerrados a modificaciones."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["C\xf3digo en PHP que no sigue este principio:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\r\n\r\nclass Shape {\r\n    public $type;\r\n\r\n    public function __construct($type) {\r\n        $this->type = $type;\r\n    }\r\n\r\n    public function area() {\r\n        if($this->type === 'circle') {\r\n            // Aqu\xed la l\xf3gica para para el c\xe1clulo del \xe1rea de un c\xedrculo\r\n        } elseif($this->type === 'rectangle') {\r\n            // Aqu\xed la l\xf3gica para para el c\xe1clulo del \xe1rea de un rect\xe1ngulo\r\n        }\r\n    }\r\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Refactorizaci\xf3n del c\xf3digo en PHP para adaptarlo al principio:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\r\n\r\ninterface AreaCalculable {\r\n    public function area();\r\n}\r\n\r\nclass Circle implements AreaCulculable {\r\n    public function area() {\r\n        // Aqu\xed la l\xf3gica para para el c\xe1clulo del \xe1rea de un c\xedrculo\r\n    }\r\n}\r\n\r\nclass Rectangle implements AreaCulculable {\r\n    public function area() {\r\n        // Aqu\xed la l\xf3gica para para el c\xe1clulo del \xe1rea de un rect\xe1ngulo\r\n    }\r\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"liskov-substitution--principio-de-sustituci\xf3n-de-barbara-liskov",children:"Liskov Substitution | Principio de sustituci\xf3n de Barbara Liskov"}),"\n",(0,r.jsx)(n.admonition,{title:"Nota",type:"tip",children:(0,r.jsx)(n.p,{children:"Cada sublclase o clase derivada debe ser sustituible por su clase base o padre."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["C\xf3digo en Java que no sigue este principio:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Bird {\r\n    public void fly() {\r\n        // Aqu\xed la l\xf3gica para para la implementaci\xf3n de vuelo com\xfan para todas las aves\r\n    }\r\n}\r\n\r\nclass Ostrich extends Bird {\r\n    // Las avestruces no vuelan, pero no pueden anular el m\xe9todo fly\r\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Refactorizaci\xf3n del c\xf3digo en Java para adaptarlo al principio:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"abstract class Bird {\r\n    public abstract void move();\r\n}\r\n\r\nclass Sparrow extends Bird {\r\n    public void move() {\r\n        // Aqu\xed la l\xf3gica para para la implementaci\xf3n de movimiento del gorri\xf3n\r\n    }\r\n}\r\n\r\nclass Ostrich extends Bird {\r\n    public void move() {\r\n        // Aqu\xed la l\xf3gica para para la implementaci\xf3n de movimiento del avestruz\r\n    }\r\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface-segregation--principio-de-segregaci\xf3n-de-interfaz",children:"Interface Segregation | Principio de segregaci\xf3n de interfaz"}),"\n",(0,r.jsx)(n.admonition,{title:"Nota",type:"tip",children:(0,r.jsx)(n.p,{children:"Nunca debemos obligar a un cliente a implementar una interfaz que no usa y no se debe obligar a los clientes a depender de m\xe9todos que no usan"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["C\xf3digo en Typescript que no sigue este principio:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface Employee {\r\n    work(): void;\r\n    eat(): void;\r\n    sleep(): void;\r\n}\r\n\r\nclass User implements Emplyee {\r\n    work() {\r\n        // Aqu\xed la l\xf3gica para trabajar\r\n    }\r\n\r\n    eat() {\r\n        // Aqu\xed la l\xf3gica para comer\r\n    }\r\n\r\n    sleep() {\r\n        // Aqu\xed la l\xf3gica para dormir\r\n    }\r\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Refactorizaci\xf3n del c\xf3digo en Typescript para adaptarlo al principio:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface Workable {\r\n    work(): void;\r\n}\r\n\r\ninterface Eatable {\r\n    eat(): void;\r\n}\r\n\r\ninterface Sleepable {\r\n    sleep(): void;\r\n}\r\n\r\nclass User implements Workable, Eatable, Sleepable {\r\n    work() {\r\n        // Aqu\xed la l\xf3gica para trabajar\r\n    }\r\n\r\n    eat() {\r\n        // Aqu\xed la l\xf3gica para comer\r\n    }\r\n\r\n    sleep() {\r\n        // Aqu\xed la l\xf3gica para dormir\r\n    }\r\n}\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);