"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[1526],{536:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=r(4848),s=r(8453);const i={title:"Apuntes de Docker",sidebar_label:"Apuntes de Docker",sidebar_position:1},c="Apuntes de Docker",l={id:"14docker/docker",title:"Apuntes de Docker",description:"Instalar Windows Subsystem for Linux",source:"@site/docs/14docker/docker.md",sourceDirName:"14docker",slug:"/14docker/docker",permalink:"/documentos2024/docs/14docker/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/14docker/docker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Apuntes de Docker",sidebar_label:"Apuntes de Docker",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/documentos2024/docs/category/docker"},next:{title:"Blockchain",permalink:"/documentos2024/docs/category/blockchain"}},d={},o=[{value:"Instalar Windows Subsystem for Linux",id:"instalar-windows-subsystem-for-linux",level:2},{value:"Instalar Docker en Ubuntu",id:"instalar-docker-en-ubuntu",level:2},{value:"Iniciar Docker",id:"iniciar-docker",level:2},{value:"Imagenes Docker",id:"imagenes-docker",level:2},{value:"Contenedores Docker",id:"contenedores-docker",level:2},{value:"Crear una imagen de Docker",id:"crear-una-imagen-de-docker",level:2},{value:"Copiar archivos desde el PC a una imagen de Docker",id:"copiar-archivos-desde-el-pc-a-una-imagen-de-docker",level:2},{value:"Eliminar todas los contenedores e imagenes de Docker",id:"eliminar-todas-los-contenedores-e-imagenes-de-docker",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"apuntes-de-docker",children:"Apuntes de Docker"}),"\n",(0,a.jsx)(n.h2,{id:"instalar-windows-subsystem-for-linux",children:"Instalar Windows Subsystem for Linux"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Instalar Windows Subsystem for Linux:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Ejecutar Windows PowerShell como administrador","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\r\ndism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Descargar e instalar Ubuntu 22.04.3 LTS","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Ir a Microsoft Store en Windows 10/11, buscar e instalar: Ubuntu 22.04.3 LTS"}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{title:"Nota",type:"tip",children:[(0,a.jsx)(n.p,{children:"En caso de ser necesario descargar e instalar la actualizaci\xf3n del kernel de Linux:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://learn.microsoft.com/es-es/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package",children:"https://learn.microsoft.com/es-es/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package"}),"\r\nIr a Microsoft Store en Windows 10/11 y buscar, descargar e instalar: ",(0,a.jsx)(n.strong,{children:"Windows Terminal"}),"."]}),"\n"]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Ejecutar Ubuntu 20.04 LTS en Windows 10/11 y luego introducir credenciales:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Enter new UNIX username: petrix\r\nNew password: ***\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Nota",type:"tip",children:[(0,a.jsx)(n.p,{children:"Listo, ya tenemos Ubunto en Windows.\r\nComandos b\xe1sicos:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ pwd (ruta actual)\r\n$ cd .. (cambia la ruta al directorio padre)\r\n$ cd /home/petrix (cambia la ruta /home/petrix)\r\n$ cd / (cambia la ruta al directorio ra\xedz del sistema actual)\r\n$ cd mnt (cambia la ruta a Windows)\r\n$ cd c (cambia la ruta al disco local c)\r\n$ ls (muestra lo que habita en la ubicaci\xf3n actual)\r\n$ cd ~ (cambia la ruta al directorio ra\xedz de Ubuntu)\r\n$ mkdir carpeta (crear una carpeta)\r\n$ sudo mkdir carpeta (crear una carpeta con permisos de administrador)\r\n$ touch archivo.ext (crea el archivo archivo.ext)\r\n$ mv archivo.ext dir2 (mueve el archivo archivo.ext al directorio dir2, de igual forma se puede mover carpetas)\n"})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Acceder los archivos de Ubuntu desde una carpeta de Windows:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Abrir el Explorador de Archivos de Windows."}),"\n",(0,a.jsxs)(n.li,{children:["En la barra de direcciones del Explorador de Archivos, introduce la siguiente ruta y presiona Enter:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\\\\wsl$\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"instalar-docker-en-ubuntu",children:"Instalar Docker en Ubuntu"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Actualizar el sistema:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt update\r\nsudo apt upgrade\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Instalar paquetes necesarios:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install apt-transport-https ca-certificates curl software-properties-common\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Agregar la clave GPG oficial de Docker:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Agregar el repositorio de Docker:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Actualizar la lista de paquetes:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Instalar Docker Engine:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install docker-ce docker-ce-cli containerd.io\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Nota",type:"tip",children:[(0,a.jsx)(n.p,{children:"Verificar la instalaci\xf3n: Una vez completada la instalaci\xf3n, puedes verificar si Docker se instal\xf3 correctamente ejecutando el siguiente comando para verificar la versi\xf3n instalada:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker --version\n"})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Evitar que docker requiera la contrase\xf1a de root:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker ${USER}\r\nsu - ${USER}\r\n# Pedir\xe1 la contrase\xf1a de root\r\nid -nG\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"iniciar-docker",children:"Iniciar Docker"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Agregar tu usuario al grupo docker:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Nota",type:"tip",children:(0,a.jsx)(n.p,{children:"Este comando agrega tu usuario actual al grupo docker. Despu\xe9s de ejecutar este comando, cierra sesi\xf3n y vuelve a iniciar sesi\xf3n para que los cambios surtan efecto."})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Iniciar el servicio Docker:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start docker\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Nota",type:"tip",children:[(0,a.jsx)(n.p,{children:"Si deseas que Docker se inicie autom\xe1ticamente cada vez que arranque tu sistema, puedes habilitar el servicio Docker para que se inicie autom\xe1ticamente ejecutando el siguiente comando:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable docker\n"})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"imagenes-docker",children:"Imagenes Docker"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Mostrar imagenes Docker:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker images\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Nota",type:"tip",children:[(0,a.jsxs)(n.p,{children:["Web oficial de imagenes de Docker: ",(0,a.jsx)(n.a,{href:"https://hub.docker.com",children:"https://hub.docker.com"})]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Ejemplo para descargar imagen de python:"}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker pull python\n"})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Descargar una imagen:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker pull nombre_imagen\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Descargar una imagen indicando la versi\xf3n:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker pull nombre_imagen:nombre_version\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Eliminar una imagen:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker rmi nombre_imagen\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Nota",type:"tip",children:(0,a.jsx)(n.p,{children:"Para eliminar una imagen, no debe haber un contenedor en ejecuci\xf3n con dicha imagen."})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"contenedores-docker",children:"Contenedores Docker"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Crear un contenedor a partir de una imagen:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -it --name mi_contenedor nombre_de_la_imagen:etiqueta\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"O simplemente ejecutar:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -it nombre_de_la_imagen:etiqueta\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Nota",type:"tip",children:(0,a.jsx)(n.p,{children:"Podemos reemplazar -it por -d para ejecutar el contenedor en segundo plano."})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Ver contenedores en ejecuci\xf3n:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker ps -a\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Eliminar un contenedor:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker rm [container id o name del el contenedor parcial o completo]\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Eliminar todos los contenedores:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker rm $(docker ps -aq)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Ejecutar un contenedor:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker start [container id o name del el contenedor parcial o completo]\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Para un contenedor:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker stop [container id o name del el contenedor parcial o completo]\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Entrar dentro del contenedor:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker exec -it nombre_del_contenedor bash\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"crear-una-imagen-de-docker",children:"Crear una imagen de Docker"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Crear una carpeta de proyecto e ingresar en ella:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir proyecto_prueba\r\ncd proyecto_prueba\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Crear archivo ",(0,a.jsx)(n.strong,{children:"Dockerfile"}),":","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo nano Dockerfile\n"})}),"\n",(0,a.jsxs)(n.admonition,{title:"Ejemplo",type:"tip",children:[(0,a.jsx)(n.p,{children:"Ejemplo de una imagen de Ubuntu con Python:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"FROM ubuntu\r\nRUN apt update\r\nRUN apt install python3 -y\n"})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Construir imagen a partir del ",(0,a.jsx)(n.strong,{children:"Dockerfile"}),":","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker build --tag nombre_de_mi_imagen .\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Ingrear a la imgaen:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -it nombre_de_mi_imagen\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"copiar-archivos-desde-el-pc-a-una-imagen-de-docker",children:"Copiar archivos desde el PC a una imagen de Docker"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Crear una carpeta de proyecto e ingresar en ella:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir proyecto_prueba\r\ncd proyecto_prueba\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Crear archivo ",(0,a.jsx)(n.strong,{children:"Dockerfile"}),":","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo nano Dockerfile\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Configurar Dockerfile:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"FROM ubuntu\r\nRUN apt update\r\nCOPY mi_archivo.txt /home/mi_carpeta/    \n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Construir imagen a partir del ",(0,a.jsx)(n.strong,{children:"Dockerfile"}),":","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker build -t nombre_de_mi_imagen .\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Ingrear a la imgaen:","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -it nombre_de_mi_imagen\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"eliminar-todas-los-contenedores-e-imagenes-de-docker",children:"Eliminar todas los contenedores e imagenes de Docker"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Eliminar todos los contenedores en ejecuci\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker rm -f $(docker ps -aq)\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Eliminar todas las im\xe1genes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker rmi -f $(docker images -aq)\n"})}),"\n",(0,a.jsx)(n.p,{children:"mmm:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var a=r(6540);const s={},i=a.createContext(s);function c(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);