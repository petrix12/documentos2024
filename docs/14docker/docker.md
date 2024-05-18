---
title: Apuntes de Docker
sidebar_label: "Apuntes de Docker"
sidebar_position: 1
---

# Apuntes de Docker
## Instalar Windows Subsystem for Linux
1. Instalar Windows Subsystem for Linux:
   + Ejecutar Windows PowerShell como administrador
        ```bash
        dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
        dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
        ```
2. Descargar e instalar Ubuntu 22.04.3 LTS
    + Ir a Microsoft Store en Windows 10/11, buscar e instalar: Ubuntu 22.04.3 LTS
    :::tip Nota
    En caso de ser necesario descargar e instalar la actualización del kernel de Linux:
    + https://learn.microsoft.com/es-es/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package
    Ir a Microsoft Store en Windows 10/11 y buscar, descargar e instalar: **Windows Terminal**.
    :::
3. Ejecutar Ubuntu 20.04 LTS en Windows 10/11 y luego introducir credenciales:
    ```
    Enter new UNIX username: petrix
    New password: ***
    ```
    :::tip Nota
    Listo, ya tenemos Ubunto en Windows.
    Comandos básicos:
    ```bash
    $ pwd (ruta actual)
    $ cd .. (cambia la ruta al directorio padre)
    $ cd /home/petrix (cambia la ruta /home/petrix)
    $ cd / (cambia la ruta al directorio raíz del sistema actual)
    $ cd mnt (cambia la ruta a Windows)
    $ cd c (cambia la ruta al disco local c)
    $ ls (muestra lo que habita en la ubicación actual)
    $ cd ~ (cambia la ruta al directorio raíz de Ubuntu)
    $ mkdir carpeta (crear una carpeta)
    $ sudo mkdir carpeta (crear una carpeta con permisos de administrador)
    $ touch archivo.ext (crea el archivo archivo.ext)
    $ mv archivo.ext dir2 (mueve el archivo archivo.ext al directorio dir2, de igual forma se puede mover carpetas)
    ```
    :::
4. Acceder los archivos de Ubuntu desde una carpeta de Windows:
    + Abrir el Explorador de Archivos de Windows.
    + En la barra de direcciones del Explorador de Archivos, introduce la siguiente ruta y presiona Enter:
        ```
        \\wsl$
        ```


## Instalar Docker en Ubuntu
1. Actualizar el sistema:
    ```bash
    sudo apt update
    sudo apt upgrade
    ```
2. Instalar paquetes necesarios:
    ```bash
    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    ```
3. Agregar la clave GPG oficial de Docker:
    ```bash
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    ```
4. Agregar el repositorio de Docker:
    ```bash
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
5. Actualizar la lista de paquetes:
    ```bash
    sudo apt update
    ```
6. Instalar Docker Engine:
    ```bash
    sudo apt install docker-ce docker-ce-cli containerd.io
    ```
    :::tip Nota
    Verificar la instalación: Una vez completada la instalación, puedes verificar si Docker se instaló correctamente ejecutando el siguiente comando para verificar la versión instalada:
    ```bash
    docker --version
    ```
    :::
7. Evitar que docker requiera la contraseña de root:
    ```bash
    sudo usermod -aG docker ${USER}
    su - ${USER}
    # Pedirá la contraseña de root
    id -nG
    ```

## Iniciar Docker
1. Agregar tu usuario al grupo docker:
    ```bash
    sudo usermod -aG docker $USER
    ```
    :::tip Nota
    Este comando agrega tu usuario actual al grupo docker. Después de ejecutar este comando, cierra sesión y vuelve a iniciar sesión para que los cambios surtan efecto.
    :::
2. Iniciar el servicio Docker:
    ```bash
    sudo systemctl start docker
    ```
    :::tip Nota
    Si deseas que Docker se inicie automáticamente cada vez que arranque tu sistema, puedes habilitar el servicio Docker para que se inicie automáticamente ejecutando el siguiente comando:
    ```bash
    sudo systemctl enable docker
    ```
    :::


## Imagenes Docker
1. Mostrar imagenes Docker:
    ```bash
    docker images
    ```
    :::tip Nota
    Web oficial de imagenes de Docker: https://hub.docker.com
    + Ejemplo para descargar imagen de python:
    ```bash
    docker pull python
    ```
    :::
2. Descargar una imagen:
    ```bash
    docker pull nombre_imagen
    ```
3. Descargar una imagen indicando la versión:
    ```bash
    docker pull nombre_imagen:nombre_version
    ```
4. Eliminar una imagen:
    ```bash
    docker rmi nombre_imagen
    ```
    :::tip Nota
    Para eliminar una imagen, no debe haber un contenedor en ejecución con dicha imagen.
    :::

## Contenedores Docker
1. Crear un contenedor a partir de una imagen:
    ```bash
    docker run -it --name mi_contenedor nombre_de_la_imagen:etiqueta
    ```
    + O simplemente ejecutar:
    ```bash
    docker run -it nombre_de_la_imagen:etiqueta
    ```
    :::tip Nota
    Podemos reemplazar -it por -d para ejecutar el contenedor en segundo plano.
    :::
2. Ver contenedores en ejecución:
    ```bash
    docker ps -a
    ```
3. Eliminar un contenedor:
    ```bash
    docker rm [container id o name del el contenedor parcial o completo]
    ```
4. Eliminar todos los contenedores:
    ```bash
    docker rm $(docker ps -aq)
    ```
5. Ejecutar un contenedor:
    ```bash
    docker start [container id o name del el contenedor parcial o completo]
    ```
6. Para un contenedor:
    ```bash
    docker stop [container id o name del el contenedor parcial o completo]
    ```
7. Entrar dentro del contenedor:
    ```bash
    docker exec -it nombre_del_contenedor bash
    ```

## Crear una imagen de Docker
1. Crear una carpeta de proyecto e ingresar en ella:
    ```bash
    mkdir proyecto_prueba
    cd proyecto_prueba
    ```
2. Crear archivo **Dockerfile**:
    ```bash
    sudo nano Dockerfile
    ```
    :::tip Ejemplo
    Ejemplo de una imagen de Ubuntu con Python:
    ```Dockerfile
    FROM ubuntu
    RUN apt update
    RUN apt install python3 -y
    ```
    :::
3. Construir imagen a partir del **Dockerfile**:
    ```bash
    docker build --tag nombre_de_mi_imagen .
    ```
4. Ingrear a la imgaen:
    ```bash
    docker run -it nombre_de_mi_imagen
    ```

## Copiar archivos desde el PC a una imagen de Docker
1. Crear una carpeta de proyecto e ingresar en ella:
    ```bash
    mkdir proyecto_prueba
    cd proyecto_prueba
    ```
2. Crear archivo **Dockerfile**:
    ```bash
    sudo nano Dockerfile
    ```
3. Configurar Dockerfile:
    ```Dockerfile
    FROM ubuntu
    RUN apt update
    COPY mi_archivo.txt /home/mi_carpeta/    
    ```
4. Construir imagen a partir del **Dockerfile**:
    ```bash
    docker build -t nombre_de_mi_imagen .
    ```
5. Ingrear a la imgaen:
    ```bash
    docker run -it nombre_de_mi_imagen
    ```

## Eliminar todas los contenedores e imagenes de Docker
+ Eliminar todos los contenedores en ejecución:
    ```bash
    docker rm -f $(docker ps -aq)
    ```
+ Eliminar todas las imágenes:
    ```bash
    docker rmi -f $(docker images -aq)
    ```

## Crear variables de entorno en el Dockerfile
+ Editar el Dockerfile:
    ```
    ...
    ENV variable "Valor de la variable"
    ```
    :::tip Nota
    Para ver el valor de la variable de entorno dentro del contenedor:
    ```bash
    echo $variable
    ```
    Para ver todas las variables de entorno:
    ```bash
    env
    ```
    :::

## Establecer un directorio por defecto en el Dockerfile
+ Editar el Dockerfile:
    ```Dockerfile
    #...
    WORKDIR /home
    COPY archivo.txt .
    ```
    :::tip Nota
    Al copiar el archivo **archivo.txt**, este se copiará en el directorio por defecto.
    :::


## Agregar información a una imagen de Docker:
+ Editar el Dockerfile:
    ```Dockerfile
    #...
    # Crar etiquetas
    LABEL autor="Soluciones++"
    LABEL version=1.0

    # Crear usuario
    RUN useradd Petrix
    # Añadir usuarios
    USER Petrix

    # Ejecutar instrucción automaticamente
    CMD echo Bienvenido al contenedor
    ```
    :::tip Nota
    Para ver usuarios dentro del contenedor:
    ```bash
    whoami
    ```
    :::

## Ignorar archivos a copiar en una imagen de Docker
+ Crear archivo **.dockerignore** en la carpeta en donde estan los archivos a copiar en la imagen del contenedor.
    ```dockerignore
    # Listar los archivos y rutas a ignorar
    ```

## Exponer y gestionar puertos de Docker
```bash
docker run -d -p 8080:8080 nombre_de_la_imagen
```







    mmm:
    ```bash
    ```

