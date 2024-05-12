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
2. Descargar e instalar Ubuntu 22.04.6 LTS
    + Ir a Microsoft Store en Windows 10/11, buscar e instalar: Ubuntu 22.04.6 LTS
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
3. Eliminar una imagen:
    ```bash
    docker rmi nombre_imagen
    ```
