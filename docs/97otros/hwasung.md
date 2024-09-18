---
title: Hwasung Thermo
sidebar_label: "Hwasung Thermo"
sidebar_position: 98
---

# HWASUNG THERMO
## Repositorios GitHub:
+ https://github.com/petrix12/thermo
+ https://github.com/petrix12/hwasung

## C:\Windows\System32\drivers\etc\hosts
```bash
# Host virtual para el proyecto Hwasung thermocontrol.com.mx
127.0.0.1	thermo.test
```

## C:\xampp\apache\conf\extra\httpd-vhosts.conf
```conf
# Host virtual para el proyecto Hwasung thermocontrol.com.mx (Lado del servidor)
<VirtualHost *:80>
    DocumentRoot "C:\xampp\htdocs\trabajos\thermo"
    ServerName thermo.test
</VirtualHost>
```

## Dirección local:
+ https://thermo.test/trabajos/thermo/index.php

## Archivos modificados:
+ pie_de_pagina.php
+ productos.php
+ images\productos
+ productos
+ menu-encabezado.php
+ beneficios_y_ventajas_hwa_sung_thermo.pdf

## Productos
+ ► Eléctricos
+ ► Direct Drive
+ ► Direct Drive Multi Temperatura
+ ► Mono Block
+ ► Equipos Diesel
+ ► Diesel Hibridos
+ Diesel Multi Temperatura
+ ► Trailer
+ ► Aire Acondicionado de Estacionamiento
+ ► Caja Refrigerada para Moto

## Direct Drive Multi Temperatura
+ HT-250 II Condenser
    - Condensador para caja de 3.95 metros de largo.
+ HT 100 II Evaporator for frozen
    - Evaporador para frezer para caja de 1.68 metros de largo
+ HT-050 II Evaporator for fresh
    - Evaporador para nevera para caja de 1.63 metros de largo
+ HT 250 II Evaporator for frozen
    - Evaporador para frezer para caja de 1.70 metros de largo
+ HT-100 II Evaporator for fresh
    - Evaporador para nevera para caja de 1.63 metros de largo
+ HT-250 Gemini Condenser
    - Condensador para caja de 6.75 metros de largo.
+ HT-500W DTS
    - Refrigeración para caja de 6.65 metros de largo.

## GitHub
```bash
git init
git add .
git commit -m "Revisión 0"
git branch -M main
git remote add origin https://github.com/petrix12/thermo.git
git push -u origin main
```

## Lanzar proyecto php en local:
```bash
php -S localhost:8000
```

## Deploy proyecto php en Heroku
1. Ingresar a Heroku e ir a Dashboard.
    + https://dashboard.heroku.com/apps
2. Crear un nuevo proyecto en New > Create new app
    + Supongamos que le dimos el nombre de **thermoprueba**
3. Ir a **Deploy** y dar clic en **GitHub**.
4. Clic en el botón **Connect to GitHub** e ingresar las credenciales.
5. Seleccionar el repositorio a hostear y presionar el botón **Connect**.
6. Para tener siempre la ultima actualización de nuestro proyecto se recomienda presionar el botón **Enabla Automatic Deploys**.
7. Presionar el botón **Deploy Branch**.
8. Presionar el botón **View**.

```
https://hwasung.herokuapp.com
https://www.youtube.com/watch?v=s1pereK4o-E

Equipos Diesel
HT-30 DW
```

9. Iniciar sesión en Heroku:
    + https://dashboard.heroku.com/apps
10. Descargar e instalar  Heroku CLI:
    + https://devcenter.heroku.com/articles/heroku-cli
11. Crear en la raíz del proyecto el archivo **composer.json**:
    ```json
    {}
    ```
12. Crear en la raíz del proyecto el archivo **Procfile** (sin extensión):
    ```
    web: vendor/bin/heroku-php-apache2 ./
    ```
13. Ejecutar:
    ```bash
    heroku login
    git init
    heroku create
    git remote
    git add .
    git commit -am "primer commit"
    git push heroku master
    ```

+ Ingresar a Heroku e ir a Dashboard.
    - https://dashboard.heroku.com/apps
+ Crear un nuevo proyecto en New > Create new app
    - Supongamos que le dimos el nombre de **hwasung**
+ Descargar e instalar  Heroku CLI:
    - https://devcenter.heroku.com/articles/heroku-cli
+ Crear en la raíz del proyecto el archivo **composer.json**:
    ```json
    {}
    ```
+ Crear en la raíz del proyecto el archivo **Procfile** (sin extensión):
    ```
    web: vendor/bin/heroku-php-apache2 ./
    ```
+ Ejecutar en terminal:
    ```bash
    heroku create (opcionalmente se le puede dar un nombre)
    git init (si aún no se ha iniciado repositorio)
    git remote
    ```

+ https://aprendewebdev.com/blog/hosting-gratis-php-con-heroku/

```bash
heroku login
git init (Si existe borrar **.git** antes)
heroku git:remote -a hwasung
git add . -f
git commit -am "primer commit"
git push heroku master
```

+ https://mysterious-hamlet-01325.herokuapp.com/ | https://git.heroku.com/mysterious-hamlet-01325.git

