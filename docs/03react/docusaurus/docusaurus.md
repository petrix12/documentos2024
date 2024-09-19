---
title: Proyecto Docusaurus
sidebar_label: "Proyecto Docusaurus"
sidebar_position: 2
---

# Proyecto Docusaurus
+ **Página oficial**: https://docusaurus.io
+ **Video tutorial**: https://www.youtube.com/watch?v=XPsEj5By5sk

## Crear un proyecto de ejemplo:
1. Crear proyecto de documentación:
    + $ npx create-docusaurus@latest documentacion classic
2. Ejecutar proyecto:
    + $ npm run start
    :::tip Nota
    En caso de denegación de permisos, ejeuctar:
    ```bash
    chmod +x node_modules/.bin/docusaurus
    ```
    :::
3. Para ingresar documentación pegar documentos en la carpeta **docs** del proyecto
4. Para configurar la página, escribir al iniciao:
    ```
    ---
    title: Página de prueba
    sidebar_label: "prueba"
    didebar_position: 1
    ---
    ```
5. Para configurar toda la documentación: **sidebars.js**.
6. Para configurar carpetas de documentación: **docs\tutorial-basics\_category_.json**.
7. Para personalizar la aplicación: 
    + **docusaurus.config.js**.
    + **src\components\HomepageFeatures**.
    + **src\pages**.
8. Deploy en GitHub:
    + $ npm run build
    + Crear en GitHub un respositorio para el proyecto.
    + $ git init
    + $ git add .
    + $ git commit -m "first commit"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/documentos2024.git
    + $ git push -u origin main
    + Configurar **docusaurus.config.js**:
        ```js
        // ...
        baseUrl: '/documentos2024',     // Nombre del repositorio
        organizationName: 'petrix12',   // Usuario GitHub
        projectName: 'documentos2024',  // Nombre del repositorio
        deploymentBranch: 'gh-pages',   // Rama de git pages
        trailingSlash: false,
        // ...
        ```
    + $ cmd /C 'set "GIT_USER=petrix12" && npm run deploy'
9. Para actualizar y hacer nuevamente deploy:
    + En Widows:
        ```bash
        npm run build
        cmd /C 'set "GIT_USER=petrix12" && npm run deploy'
        ```
    + En Linux:
        ```bash
        npm run build
        GIT_USER=petrix12 npm run deploy
        ```
    :::tip Página
    https://petrix12.github.io/documentos2024
    + En caso de falla, ejecutar:
        + Instala Docusaurus:
            ```bash
            npm install @docusaurus/core@latest @docusaurus/preset-classic@latest
            ```
        + Introducir las credenciales de GitHub:
            ```bash
            git remote set-url origin https://<GIT_USER>:<YOUR_TOKEN>@github.com/petrix12/documentos2024.git
            ```
        + Verifica los permisos de los archivos:
            ```bash
            sudo chmod -R 755 /home/pbazo/www/documentos2024
            ```
        + Limpia el caché de npm y reinstala dependencias:
            ```bash
            npm cache clean --force
            rm -rf node_modules package-lock.json
            npm install
            ```
    :::



## Pruebas:
### Código:
+ Sencillo
```js title="src/ddd.js"
let variable
```

+ Con resaltado en línea
```js title="src/ddd.js"
let variable
// highlight-next-line
let otra_variable
```

+ Con resaltado en bloque:
```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```


### Imagenes
![imagen](http://publico.test/images/logo-045d73fa94754ec175b5a2c986ce7811.svg)
![prueba](./img/prueba.jpg)