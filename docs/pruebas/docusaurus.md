---
title: Página de prueba
sidebar_label: "prueba"
sidebar_position: 2
---

# Docusaurus
+ **Página oficial**: https://docusaurus.io
+ **Video tutorial**: https://www.youtube.com/watch?v=XPsEj5By5sk

## Crear un proyecto de ejemplo:
1. Crear proyecto de documentación:
    + $ npx create-docusaurus@latest documentacion classic
2. Ejecutar proyecto:
    + $ npm run start
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
        baseUrl: '/documentos2024',
        organizationName: 'soluciones++',
        projectName: 'documentos2024',
        deploymentBranch: 'gh-pages',
        trailingSlash: false,
        // ...
        ```
    + $ cmd /C 'set "GIT_USER=petrix12" && npm run deploy'




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