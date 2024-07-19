---
title: Apuntes de Vue 3
sidebar_label: "Apuntes de Vue 3"
sidebar_position: 1
---

# Apuntes Vue.js

## Pre-requisitos obligatorios:
+ [NodeJS](https://nodejs.org).

## Pre-requisitos recomendados:
+ [GIT](https://git-scm.com).
+ [Visual Studio Code](https://code.visualstudio.com).

## Extensiones de VSC recomendadas:
+ Vue 3 Snippets (hollowtree)
+ Vue Language Features (Volar)

## Extensiones de Google recomendadas:
+ Vue.js devtools

## Documentación:
+ [Vue](https://vuejs.org).
+ [Vue CLI](https://cli.vuejs.org).

## Instalación Vue:
+ Instalar cliente principal de vue:
    + $ [sudo] npm install -g @vue/cli

## Crear un proyecto:
+ Vía CDN:
    ```html
    <script src="https://unpkg.com/vue@3"></script>

    <div id="app">{{ message }}</div>

    <script>
        const { createApp} = Vue
        createApp({
            data() {
                return {
                    message: 'Soluciones++'
                }
            }
        }).mount('#app')
    </script>
    ```
+ Vía CLI:
    + Ejecutar:
        + $ vue create mi_proyecto
        + Ejemplo de opciones seleccionadas para la creación de un proyecto:
            ```
            Vue CLI v5.0.8
            ? Please pick a preset: Manually select features
            ? Check the features needed for your project: Babel, TS, Linter
            ? Choose a version of Vue.js that you want to start the project with 3.x
            ? Use class-style component syntax? No
            ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
            ? Pick a linter / formatter config: Basic
            ? Pick additional lint features: Lint on save
            ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
            ? Save this as a preset for future projects? No
            ? Pick the package manager to use when installing dependencies: NPM           
            ```
        + Para ejecutar el proyecto:
            + $ cd mi_proyecto
            + $ npm run serve
    + Una vez generado el proyecto, se debe tener en cuenta:
        + El archivo de punto de entrada **mi_proyecto\public\index.html**, llama a:
        + El archivo principal **mi_proyecto\src\main.js** (**main.ts** o **main.js**, según si utiliza Typescript o Javascript), y este finalmente llama a:
        + El archivo componente principal **mi_proyecto\src\App.vue**, que es el archivo que desencadenara la llamada del resto de los compoentes de la aplicación:
            + Option API:
            ```html
            <template>
                <ComponenteDesencadenante />
            </template>

            <script>
            import { defineComponent } from 'vue';
            import ComponenteDesencadenante from './components/ComponenteDesencadenante.vue';

            export default defineComponent({
                name: 'App',                    
                components: {
                    ComponenteDesencadenante
                }
            });
            </script>

            <style>
            /* Código CSS */
            </style>            
            ```
            + Composition API:
            ```html
            <template>
                <ComponenteDesencadenante />
            </template>

            <script setup>
            import ComponenteDesencadenante from './components/ComponenteDesencadenante.vue';
            </script>

            <style>
            /* Código CSS */
            </style>            
            ```

## Proyectos con pre-procesador css:
+ Ejecutar:
    + $ vue create cssexample
    + Ejemplo de opciones seleccionadas para la creación de un proyecto:
        ```
        Vue CLI v5.0.8
        ? Please pick a preset: Manually select features
        ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed) >(*) Babel ( ) TypeScript
        ? Check the features needed for your project: Babel, TS, CSS Pre-processors, Linter
        ? Choose a version of Vue.js that you want to start the project with 3.x
        ? Use class-style component syntax? No
        ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
        ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
        ? Pick a linter / formatter config: Basic
        ? Pick additional lint features: Lint on save
        ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
        ? Save this as a preset for future projects? No         
        ```
+ Incluir pre-procesador css en un proyecto existente:
    + SASS:
        + $ npm install -D sass-loader sass
    + LESS:
        + $ npm install -D less-loader less
    + Stylus:
        + $ npm install -D stylus-loader stylus
+ Para aplicar los estilos del pre-procesador css:
    ```html
    <!-- ... -->
    <style scoped lang="scss">
        /* ... */
        $red: #FF0000;
        h3 {
            color: $red;
        }
        /* ... */
    </style>
    ```
+ Ejemplo de un archivo de estilos sass en el proyecto:
    + Crear archivo de estilos **cssexample\src\scss\_variables.scss**:
        ```scss
        $red: #FF0000;
        $green: #00FF00;
        $blue: #0000FF;
        ```
    + Incorporar archivo de estilos a la aplicación en **cssexample\vue.config.js**:
        ```js
        // ...
        module.exports = defineConfig({
        // ...
        css: {
            loaderOptions: {
                sass: {
                    additionalData: `
                        @import "@/scss/_variables.scss";
                    `
                }
            }
        }
        })        
        ```
    + **Nota 1**: luego será necesario reiniciar el servidor web.
    + **Nota 2**: la instrucción:
        ```scss
        @import "@/scss/_variables.scss";
        ```
        Se puede usar dentro de cualquier componente vue de la aplicación, ejm:
        ```html
        <!-- ... -->
        <style scoped lang="scss">
            /* ... */
            @import "@/scss/_variables.scss";
            /* ... */
        </style>            
        ```

## Proyectos con enrutado:
+ Incluir enrutado en un proyecto existente:
    + $ npm install vue-router
    + Crear archivo de rutas en **...\src\router\index.ts** (Ver más adelante, en este apartado, un ejemplo)
    + Importar router en **proyectos_vue\routingexample\src\main.ts**:
        ```ts
        // ...
        import router from './router'
        // ...
        createApp(App).use(router).mount('#app')
        // ...
        ```
    + Incluir el router view en el componente principal **proyectos_vue\routingexample\src\App.vue**:
        ```html
        <template>
            <router-view/>
        </template>        
        ```
+ Crear proyecto con enrutado:
    + $ vue create routingexample
    + Ejemplo de opciones seleccionadas para la creación de un proyecto:
        ```
        Vue CLI v5.0.8
        ? Please pick a preset: Manually select features
        ? Check the features needed for your project: Babel, TS, Router, CSS Pre-processors, Linter
        ? Choose a version of Vue.js that you want to start the project with 3.x
        ? Use class-style component syntax? No
        ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
        ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
        ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
        ? Pick a linter / formatter config: Basic
        ? Pick additional lint features: Lint on save
        ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
        ? Save this as a preset for future projects? No      
        ```
    + Las rutas se definen en **proyectos_vue\routingexample\src\router\index.ts**.
+ Ejemplo de generación de rutas:
    ```js
    import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
    import Vista1View from '../views/Vista1View.vue'
    import Vista3View from '../views/Vista3View.vue'
    // ...
    const routes: Array<RouteRecordRaw> = [
        // ...
        // Ruta con la vista indicada en el import
        {
            path: '/vista1',
            name: 'ruta1',
            component: Vista1View
        },

        // Ruta con la vista indicada en elemento del array de rutas
        {
            path: '/vista2',
            name: 'ruta2',
            component: () => import('../views/Vista2View.vue')
        },

        // Ruta con parámetros
        {
            path: '/vista3/:parametro1/:parametro2',
            name: 'ruta3',
            component: () => import('../views/Vista3View.vue')
        },

        // Ruta con redirección
        {
            path: '/ruta4',
            reirect: to => { return {name: 'ruta1'} }
        },

        // Ruta que no requiere autenticación
        {
            path: '/ruta5',
            name: 'ruta5',
            component: () => import('../views/Vista5View.vue'),
            meta: {
                requireAuth: false
            }
        },

        // Ruta que requiere autenticación
        {
            path: '/ruta6',
            name: 'ruta6',
            component: () => import('../views/Vista6View.vue'),
            meta: {
                requireAuth: true
            }
        },
        // ...
    ]

    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
    })

    // Se ejecutará antes de acceder a cada ruta
    /*
        to: a donde quiere ir
        from: de donde viene
        next: hacia donde irá
    */
    router.beforeEach((to, from, next) => {
        const auth = MiFuncionAuth()
        const needAuth = to.meta.requiredAuth
        if(needAuth && !auth) {
            next('ruta5')
        } else {
            next()
        }
    })

    export default router
    ```
+ Ejemplo para la navegación de rutas:
    ```html
    <template>
        <nav>
            <!-- Especificando la ruta -->
            <router-link to="/vista1">Vista 1</router-link> |
            <!-- Especificando el nombre de la ruta -->
            <router-link to="{ name: 'ruta2' }">Vista 2</router-link>|
            <!-- Especificando el nombre de la ruta y enviando parámetros -->
            <router-link to="{ name: 'ruta3', params: { parametro1: valor1, parametro2: valor2} }">Vista 3</router-link>
        </nav>
        <router-view/>
    </template>
    <!-- ... -->
    ```
+ Ejemplo para la obtención de los parámetros de una ruta:
    ```html
    <!-- ... -->
    <script setup>
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    // ...
    onMounted(() => {
        const route = useRoute()
        route.params.perametro1
        route.params.perametro2
    })
    // ...
    </script>
    <!-- ... -->
    ```
+ Estilos en router link
    + Clase css para la ruta activa y sus hijas: router-link-active
    + Clase css para la ruta activa exacta: router-link-exact-active
    + Ejemplo para redefinir los estilos:
        ```html
        <!-- ... -->
        <style>
            .router-link-active {
                /* Establecer estilos */
            }
            .router-link-exact-active {
                /* Establecer estilos */
            }
        </style>
        ```

## Proyecto con autenticación:
### Estructuras de autenticación:
+ Componentes necesarios:
    + Login
    + Registro
    + Reset password
    + Validación de email
    + Doble Factor de auth (2FA)
### Crear proyecto con autenticación:
+ Ejecutar:
```bash
vue create authentication
```
+ Ejemplo de opciones seleccionadas para la creación de un proyecto:
    ```
    Vue CLI v5.0.8
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Babel, TS, Router, CSS Pre-processors, Linter
    ? Choose a version of Vue.js that you want to start the project with 3.x
    ? Use class-style component syntax? No
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
    ? Pick a linter / formatter config: Basic
    ? Pick additional lint features: Lint on save
    ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files  
    ? Save this as a preset for future projects? No    
    ```
### Extructura común para consumo de una API para login
+ End point: https://rutaservidor/auth/login
+ Método: POST
+ Respueste esperada en caso de exito:
    ```json
    {
        "data": {
            "access_token": "...",
            "expires": 900000,
            "refresh_token": "..."
        }
    }
    ```
+ Respueste esperada en caso de error:
    ```json
    {
        "errors": [
            {
                "message": "...",
                "extensions": {
                    "code": "..."
                }
            }
        ]
    }
    ```
### Servicio de autenticación:
#### Tradicional
1. Crear servicio **AuthService**:
    + Con typescript:
        ```ts title="...\src\services\AuthService.ts"
        import { Ref, ref } from 'vue'

        class AuthService {
            private jwt: Ref<string>
            private error: Ref<string>
            constructor() {
                this.jwt = ref('')
                this.error = ref('')
            }

            getJwt(): Ref<string> {
                return this.jwt
            }

            getError(): Ref<string> {
                return this.error
            }

            async login(email: string, password: string): Promise<boolean> {
                try {
                    const res = await fetch('https://rutaservidor/auth/login', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email,
                            password
                        })
                    })            
                    const response = await res.json()
                    if('errors' in response) {
                        this.error.value = "Login failed"
                        return false
                    }
                    this.jwt.value = response.data.access_token
                    return true
                } catch(error) {
                    console.log(error)
                    this.error.value = "Login failed"
                    return false
                }
            }
        }
        export default AuthService        
        ```
    + Con javascript:
        ```js
        import { ref } from 'vue'

        class AuthService {
            constructor() {
                this.jwt = ref('')
                this.error = ref('')
            }

            getJwt() {
                return this.jwt
            }

            getError() {
                return this.error
            }

            async login(email, password) {
                try {
                    const res = await fetch('https://rutaservidor/auth/login', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email,
                            password
                        })
                    })            
                    const response = await res.json()
                    if('errors' in response) {
                        this.error.value = "Login failed"
                        return false
                    }
                    this.jwt.value = response.data.access_token
                    return true
                } catch(error) {
                    console.log(error)
                    this.error.value = "Login failed"
                    return false
                }
            }
        }
        export default AuthService
        ```
2. Crear vista **AuthView**:
    ```html title="...\src\views\AuthView.vue"
    <template>
        <h1>Auth View - Backend Tradicional</h1>
        <form action="">
            <input v-model="email" type="text" placeholder="correo">
            <input v-model="password" type="text" placeholder="password">
            <button type="submit" @click.prevent="authUser">Iniciar Sesión</button>
        </form>
    </template>

    <script lang="ts" setup>
    import { ref } from 'vue'
    import AuthService from '@/services/AuthService'

    let email = ref("")
    let password = ref("")

    const authUser = async () => {
        const auth = new AuthService()
        const success = await auth.login(email.value, password.value)
        if(success) {
            console.log('login correcto')
        } else {        
            console.log('login incorrecto')
        }
    }
    </script>    
    ```
#### Firebase
1. En consola de Firebase:
    + Abrir cuenta **[Firebase](https://console.firebase.google.com)**.
    + Crear proyecto de desarrollo web.
    + No marcar firebase como hosting y registrar la aplicación.
    + Usar npm y obtener la configuración de la cuenta:
        ```js
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        import { getAnalytics } from "firebase/analytics";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
        apiKey: "AIzaSyBkCucmFYNDgGYZLmOGlxSxXV310bCkY8E",
        authDomain: "autenticacion-vue-655d6.firebaseapp.com",
        projectId: "autenticacion-vue-655d6",
        storageBucket: "autenticacion-vue-655d6.appspot.com",
        messagingSenderId: "881503642689",
        appId: "1:881503642689:web:01cf1fa1d8e00dce5b92c0",
        measurementId: "G-NSDH0BQPNF"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);        
        ```
    + Ir a la consola.
    + Ir a la sección de **Authentication**.
    + Clic en **Comenzar**.
    + Seleccionar como proveedor de acceso: **Proveedores nativos > Correo electrónico/contraseña**.
    + Habilitar **Correo electrónico/contraseña** y **Guardar**.
    + Ir a la pestaña **Usuarios** y agregar un usuario de prueba:
        + Usuario: prueba@test.com
        + Password: **********
        + UID de usuario: ZbVrn0cIS2cXZjmNBk1NiMfj6Ex1
2. En la consola local de nuestro proyecto:
    + $ npm install firebase
3. Incorporar Firebase a la aplicación:
    ```ts title="...\authentication\src\main.ts"
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app"
    import { getAnalytics } from "firebase/analytics"  // Opcional

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBkCucmFYNDgGYZLmOGlxSxXV310bCkY8E",
        authDomain: "autenticacion-vue-655d6.firebaseapp.com",
        projectId: "autenticacion-vue-655d6",
        storageBucket: "autenticacion-vue-655d6.appspot.com",
        messagingSenderId: "881503642689",
        appId: "1:881503642689:web:01cf1fa1d8e00dce5b92c0",
        measurementId: "G-NSDH0BQPNF"
    }

    // Initialize Firebase
    initializeApp(firebaseConfig)
    const analytics = getAnalytics(app) // Opcional    
    ```
4. Crear vista **AuthView**:
    ```html title="...\src\views\AuthView.vue"
    <template>
        <h1>Auth View con Firebase</h1>
        <form action="">
            <input v-model="email" type="text" placeholder="correo">
            <input v-model="password" type="text" placeholder="password">
            <button type="submit" @click.prevent="authUser">Iniciar Sesión</button>
        </form>
    </template>

    <script lang="ts" setup>
    import { ref } from 'vue'
    import { getAuth, signInWithEmailAndPassword } from '/firebase/auth'

    let email = ref("")
    let password = ref("")

    const authUser = async () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
            console.log('login correcto')
        }).catch((error) => {
            console.log('login incorrecto')
        })
    }
    </script>    
    ```
#### Social login con firebase (Google, Facebook, Twitter, Github):
:::tip Documentación
+ [Documentación Firebase Google Auth](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnFjMFhRWUd0ckZFeUlxeXdXTGxOODhybml1UXxBQ3Jtc0tsbG9PNkpwWERHQVRSUldDX2tpeVB0YjVGQnFvRTBLSHY2eEd3UTBXSVE4QjVFaG4wUnN2VkZMT1I0ckJkZlhwUWx5dWx6ZUIzaVhvQXUxNlNNLVJidkN0Rm5pOHZkc2ZwaGlxLUhjamI4ZE1QcFk2cw&q=https%3A%2F%2Ffirebase.google.com%2Fdocs%2Fauth%2Fweb%2Fgoogle-signin%23web-version-9&v=R1_-x4WB3Iw)
+ [Documentación Firebase Facebook Auth](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa0lBLWJzYTZEbEp4b2V4Y3BCV1RGUDZMaFZXQXxBQ3Jtc0trZjFiaUctSVh4ZW9DdE83cGQxdm5QUTMxX3F0eWNfQlNMVko0ODQ1S29CbkZnNDBWUmNXbGhGMzdUTzMyTS1IWHNfR09SRE5QTlA3MjBjdzdqVjYwaURoSTdaeXl4cmg1UERxVzZnQzdwTXhtZlBsRQ&q=https%3A%2F%2Ffirebase.google.com%2Fdocs%2Fauth%2Fweb%2Ffacebook-login&v=R1_-x4WB3Iw)
+ [Documentación Firebase Twitter Auth](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa014clBWODVJU0hFYnJfM1JsVHU5d3B1cW50Z3xBQ3Jtc0tsZzFmeTEyRW9HTDZYYVQxRmtSQTNjWkh1bHhjU3hvcE1KWGJVSkYwNjBYSmc1eWFnN2pKd0lxOWgwMEIyakkybG5qVkhFNWMtVXpEQnRlT1FqcHJ2SS1teXdqQmNLX2lhc3JTRkZFMFh1YjJabDZqTQ&q=https%3A%2F%2Ffirebase.google.com%2Fdocs%2Fauth%2Fweb%2Ftwitter-login&v=R1_-x4WB3Iw)
+ [Documentación Firebase Github Auth](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbVRYcnI5TEQxUGtORHZSLXdxSzE5LTFLdW95d3xBQ3Jtc0tsVEZvQTFENGpiYWl4WlZUUVE1aXpZV0NUTGVWSnR4WG1DMjVfTTdsdWdpOUlBMmlYdy1aTlFBcG43YjYxVnV4TmIyaTVzeDZocEE0SGx4bmswYVh6QndKcFZpRHl2eVYwcktha1REZXZUYjBiSkNwMA&q=https%3A%2F%2Ffirebase.google.com%2Fdocs%2Fauth%2Fweb%2Fgithub-auth&v=R1_-x4WB3Iw)
:::
1. En consola de Firebase:
    + Abrir cuenta **[Firebase](https://console.firebase.google.com)**.
    + Crear proyecto de desarrollo web.
    + No marcar firebase como hosting y registrar la aplicación.
    + Usar npm y obtener la configuración de la cuenta:
        ```js
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        import { getAnalytics } from "firebase/analytics";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
        apiKey: "AIzaSyBkCucmFYNDgGYZLmOGlxSxXV310bCkY8E",
        authDomain: "autenticacion-vue-655d6.firebaseapp.com",
        projectId: "autenticacion-vue-655d6",
        storageBucket: "autenticacion-vue-655d6.appspot.com",
        messagingSenderId: "881503642689",
        appId: "1:881503642689:web:01cf1fa1d8e00dce5b92c0",
        measurementId: "G-NSDH0BQPNF"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);        
        ```
    + Ir a la consola.
    + **Autenticación con Google**:
        + Ir a la sección de **Authentication**.
        + Clic en **Comenzar**.
        + Seleccionar como proveedor de acceso: **Proveedores adicionales > Google**.
        + Habilitar **Google**.
        + Establecer:
            + Nombre público del proyecto
            + Correo electrónico de asistencia del proyecto
        + Clic en **Guardar**.
    + **Autenticación con Facebook**:
        + Ir a la consola de desarrollo de facebook en https://developers.facebook.com y crear una aplicación.
        + Ir a configuración de la aplicación y seleccionar información básica y obtener:
            + Identificador de la aplicación
            + Clave secreta de la aplicación
        + Regresar a la consola de desarrollo de firebase.
        + Ir a la sección de **Authentication**.
        + Clic en **Comenzar**.
        + Seleccionar como proveedor de acceso: **Proveedores adicionales > Facebook**.
        + Habilitar **Facebook**.
        + Completar los campos **ID de la app** y **Secreto de app** con los valores obtenidos en la consola de desarrollo de facebook.
        + Obtener la **URI de redireccionamiento de OAuth**: https://crud-vue-e6e70.firebaseapp.com/__/auth/handler
        + Clic en **Guardar**.
        + Regresar al panel de facebook e ir a inicio de sesión con facebook e ir a configuración o guía de inicio rapido y seleccionar **web**.
        + Indicar **URL del sitio web**. Si estas en desarrollo coloca: **localhost**.
        + Luego siguiente, siguiente ... y finalizar.
        + Ir a Inicio de sesión con facebook, seleccionar configurar y pegar la **URI de redireccionamiento de OAuth** obtenida en firebase en **URI de redireccionamiento de OAuth válidos**.
    + **Autenticación con Twitter**:
        + Ir a la consola de desarrollo de twitter en https://developer.twitter.com y crear una aplicación.
        + Ir a configuración de la aplicación y seleccionar información básica y obtener:
            + API Key
            + API Key Secret
        + Regresar a la consola de desarrollo de firebase.
        + Ir a la sección de **Authentication**.
        + Clic en **Comenzar**.
        + Seleccionar como proveedor de acceso: **Proveedores adicionales > Twitter**.
        + Habilitar **Twitter**.
        + Completar los campos **ID de la app** y **Secreto de app** con los valores obtenidos en la consola de desarrollo de twitter.
        + Obtener la **URI de redireccionamiento de OAuth**: https://crud-vue-e6e70.firebaseapp.com/__/auth/handler
        + Clic en **Guardar**.
        + Regresar al panel de twitter y pegar la **URI de redireccionamiento de OAuth** obtenida en firebase en **App info > Callback URI / Redirect URL**.
        + En **Website URL** indicar la url de producción, si estas en desarrollo colocar cualquier url.
    + **Autenticación con GitHub**:
        + En firebase ir a la sección de **Authentication**.
        + Clic en **Comenzar**.
        + Seleccionar como proveedor de acceso: **Proveedores adicionales > GitHub**.
        + Habilitar **GitHub** y obtener la **URI de redireccionamiento de OAuth**: https://crud-vue-e6e70.firebaseapp.com/__/auth/handler
        + Ir a la consola de desarrollo de github en https://github.com/settings/developers, seleccionar **OAuth Apps** y registrar una nueva aplicación y completar el formulario solicitado.
        + En el formulario de github pegar la **URI de redireccionamiento de OAuth** obtenida en firebase en **Authorize callback URL**.
        + En **Homepage URL** indicar la url de producción, si estas en desarrollo colocar http://localhost.
        + Luego de completar todos los datos dar clic en **Register application** y de la siguiente vista:
            + ClientID
            + Client secrets
        + Regresar a la consola de firebase y completar los campos **ID de la app** y **Secreto de app** con los valores obtenidos en la consola de desarrollo de github.
        + Clic en **Guardar**.
2. En la consola local de nuestro proyecto:
    + $ npm install firebase
3. Incorporar Firebase a la aplicación:
    ```ts title="...\authentication\src\main.ts"
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app"
    import { getAnalytics } from "firebase/analytics"  // Opcional

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBkCucmFYNDgGYZLmOGlxSxXV310bCkY8E",
        authDomain: "autenticacion-vue-655d6.firebaseapp.com",
        projectId: "autenticacion-vue-655d6",
        storageBucket: "autenticacion-vue-655d6.appspot.com",
        messagingSenderId: "881503642689",
        appId: "1:881503642689:web:01cf1fa1d8e00dce5b92c0",
        measurementId: "G-NSDH0BQPNF"
    }

    // Initialize Firebase
    initializeApp(firebaseConfig)
    const analytics = getAnalytics(app) // Opcional    
    ```
4. Crear vista **AuthView**:
    ```html title="...\src\views\AuthView.vue"
    <template>
        <h1>Auth View con Social Login (Firebase)</h1>
        <form action="">
            <button @click="loginGoogle">Iniciar Sesión con Google</button>
            <button @click="loginFacebook">Iniciar Sesión con Facebook</button>
            <button @click="loginTwitter">Iniciar Sesión con Twitter</button>
            <button @click="loginGitHub">>Iniciar Sesión con Github</button>
        </form>
    </template>

    <script lang="ts" setup>
    import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithPopup } from '/firebase/auth'

    const googleProvider = GoogleAuthProvider()
    const facebookProvider = FacebookAuthProvider()
    const twitterProvider = TwitterAuthProvider()
    const gitHubProvider = GithubAuthProvider()
    const auth = getAuth()

    const loginGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            console.log('login correcto')
        })
        .catch((error) => {
            console.log('login incorrecto')
        })
    }

    const loginFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            console.log('login correcto')
        })
        .catch((error) => {
            console.log('login incorrecto')
        })
    }

    const loginTwitter = () => {
        signInWithPopup(auth, twitterProvider)
        .then((result) => {
            const credential = TwitterAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            console.log('login correcto')
        })
        .catch((error) => {
            console.log('login incorrecto')
        })
    }

    const loginGitHub = () => {
        signInWithPopup(auth, gitHubProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            console.log('login correcto')
        })
        .catch((error) => {
            console.log('login incorrecto')
        })
    }
    </script>    
    ```
#### AWS
1. Crear cuenta en [AWS](https://commutatio.signin.aws.amazon.com/console).
2. En la consola local, ejecutar como administrador:
    ```bash
    npm install -g @aws-amplify/cli
    amplify configure
    ```
    + Seguir el enlace para hacer login en la consola de AWS.
    + Nuevamente en la terminal local indicar:
        + Región (Ejm.: eu-west-1).
        + Usuario IAM. (Como ya hicimos login, detectará un usuario, si no existe, entonces ir a la consola de AWS y crearlo).
    + Seguir el link hacia la consola de AWS
        + Confirmar las credenciales del usuario.
        + Establecer el permiso de **AdministratorAccess-Amplify**.
        + Crear el usuario y recuperar: **ID de clave de acceso** y **Clave de acceso secreta**.
    + Nuevamente en la terminal local indicar:
        + accessKyId (introducir **ID de clave de acceso**).
        + secretAccessKey (introducir el **Clave de acceso secreta**).
        + Profile Name (ENTER).
3. Instalación de amplify:
    + Ejecutar:
        ```bash
        amplify init
        ```    
    + Introducir nombre del proyecto.
    + Aceptar o modificar la configuración propuesta.
    + Seleccionar la forma de autenticación: AWS Profile.
    + Escoger el perfil a usar: default.
    + Indicar si se desea compartir con Amazon los posibles problemas en desarrollo.
    :::tip Nota
    Esta instalación genera:
        + Una carpeta **amplify** con toda la configuración requerida.
        + Un archivo **src/aws-exports.js**.
    :::
4. Añadir módulo de autorizaciones de amplify:
    + Ejecutar:
        ```bash
        amplify add auth
        ```
    + Indicar la configuración: Default configuration
    + Indicar el campo para login de usuario: Email
    + Indicar que no se requiere ninguna configuración adicional.
5. Públicar el servicio de backend:
    + Ejecutar:
        ```bash
        amplify push
        ```
    + Indicar que si estamos seguros de continuar.
6. Instalar librerias de AWS requeridas:
    + Ejecutar:
        ```bash
        npm install aws-amplify @aws-amplify/ui-vue
        ```
3. Incorporar AWS a la aplicación:
    ```ts  title="...\authentication\src\main.ts"
    //...
    import { Amplify }  from 'aws-amplify'
    import awsExports from './aws-exports'
    // ...
    Amplify.configure(awsExports)
    // ...
    ```
4. En caso de estar trabajando con Typescript crear:
    ```ts title=".../src/aws-exports.d.ts"
    declare const awsmobile: Record<string, any>
    export default awsmobile
    ```
5. Crear vista AuthView en **...\src\views\AuthView.vue**:
    ```html
    <template>
        <authenticator>
            <!-- EL CÓDIGO QUE ESCRIBAMOS AQUÍ SOLO SE PODRÁ VER SI SE HACE LOGIN -->
            <template v-slot="{user, signOut}">
                <h1>Hola {{ user.username }}</h1>
                <button @click="signOut">Cerrar sesión</button>
            </template>
        </authenticator>
    </template>

    <script lang="ts" setup>
    import { Authenticator } from '@aws-amplify/ui-vue'
    import '@aws-amplify/ui-vue/styles.css'
    </script>    
    ```
:::tip Nota
Para abrir la consola de Amplify:
```bash
amplify console
```
:::
#### Azure
1. Crear cuenta en [Azure](https://azure.microsoft.com/es-es).
2. Acceder a **Azure Active Directory**.
3. En el panel **Administrar** acceder a **Registro de aplicaciones**.
4. Clic en **+ Nuevo registro**.
5. Completar formulario y luego clic en **Registrar**:
    + Nombre: auth_azure
    + Tipos de cuenta compatibles: Solo cuentas de este directorio organizativo (solo de Default Directory: inquilino único).
    + URI de redirección (opcional): Aplicación de página única (SPA) | Dirección: http://localhost:8080
    :::tip Nota
    Ya podemos obtener las credenciales para nuestro proyecto:
    + Id. de aplicación (cliente): que se corresponderá con el **clientId** de nuestro código.
    + Id. de driectorio (inquilino): que será nuestro **tenant_id** y se corresponderá con el **authority** de nuestro código, el cual construiremos de la siguiente forma
    ```
    authority = 'https://login.microsoftonline.com<tenant_id>'
    ```
    :::
6. En el panel **Administrar**, seleccionar **Permisos de API**.
7. Clic en **+ Agregar un permiso**.
8. Seleccionar **Azure Storage**.
9. Seleccionar la opción **Permisos delegados**.
10. Habilitar **user_impersonation** y clic en **Agregar permisos**.
:::tip Nota
Con estos pasos ya hemos culminado la configuración en Azure.
:::
11. Regresar al proyecto en vue para configurar Azure.
12. Instalar librerias de Azure requeridas:
    + Ejecutar:
        ```bash
        npm i @azure/core-http
        npm i @azure/msal-browser
        npm i @azure/storage-blob
        npm i tiny-emitter
        ```

13. Incorporar Azure a la aplicación:
    ```ts  title="...\authentication\src\main.ts"
    //...
    import Emitter from 'tiny-emitter'
    // ...
    const app = createApp(App)
    app.config.globalProperties.$msalInstance = {}
    app.config.globalProperties.$emitter = new Emitter.TinyEmitter()

    app.use(router).mount('#app')
    // ...
    ```
14. Crear servicio **AuthService**:
    + Con typescript:
        ```ts title="...\src\services\AuthService.ts"
        import { Ref, ref } from 'vue'
        import IMsalConfig from '@/interfaces/IMsalConfig'

        class AuthService {
            private msalConfig:Ref<IMsalConfig>
            private accessToken:Ref<string>
            constructor() {
                this.msalConfig = ref({
                    auth: {
                        clientId: 'XXXXXXXXX',
                        authority: 'XXXXXXXXX'
                    },
                    cache: {
                        cacheLocation: 'localStorage'
                    }
                })
                this.accessToken = ref('')
            }
            setAccessToken(token:string):Ref<string> {
                this.accessToken.value = token
                return this.accessToken
            }
            getAccessToken():Ref<string> {
                return this.accessToken
            }
            getMsalConfig():Ref<IMsalConfig> {
                this.msalConfig
            }
        }
        export default AuthService        
        ```
        :::tip Nota
        En el caso de Typescript será necesario definir la interface **IMsalConfig** y opcionalmente la interface **IAuth**:
        ```ts title="src//interfaces/IMsalConfig.ts"
        import IAuth from './IAuth'

        interface IMsalConfig {
            auth: IAuth,
            cache: {
                cacheLocation: string
            }
        }
        export default IMsalConfig
        ```
        ```ts title="src//interfaces/IAuth.ts"
        interface IAuth {
            clientId: string,
            authority: string
        }
        export default IAuth
        ```
        :::
    + Con javascript:
        ```js
        import { ref } from 'vue'

        class AuthService {
            private msalConfig
            private accessToken
            constructor() {
                this.msalConfig = ref({
                    auth: {
                        clientId: 'XXXXXXXXX',
                        authority: 'XXXXXXXXX'
                    },
                    cache: {
                        cacheLocation: 'localStorage'
                    }
                })
                this.accessToken = ref('')
            }
            setAccessToken(token) {
                this.accessToken = token
                return this.accessToken
            }
            getAccessToken() {
                return this.accessToken
            }
            getMsalConfig() {
                this.msalConfig
            }
        }
        export default AuthService
        ```
15. Crear vista AuthView en **...\src\views\AuthView.vue**:
    + Javascript con Option API
        ```html
        <template>
            <h1>Azure login</h1>
            <button @click="login">Login</button>
        </template>

        <script>
        import { PublicClientApplication } from '@azure/msal-browser'
        import { defineComponent } from 'vue'
        import AuthService from '@/services/AuthService'
        
        export default defineComponent({
            name: AuthView,
            data() {
                return {
                    account: ''
                }
            },
            async created() {
                const authService = new AuthService()
                this.$msalInstance = new PublicClientApplication(authService.getMsalConfig().value)
            },
            methods: {
                async login() {
                    await this.$msalInstance
                        .loginPopup({})
                        .then(() => {
                            const myAccounts = this.$msalInstance.getAllAccounts()
                            this.account = myAccounts[0]
                            this.$emitter.emit('login', this.account)
                        })
                        .catch(error => {
                            alert(error)
                        })
                }
            }
        })
        </script>    
        ```
    + Javascript con Composition API y sin setup:
        ```html
        <template>
            <h1>Azure login</h1>
            <button @click="login">Login</button>
        </template>

        <script>
        import { PublicClientApplication } from '@azure/msal-browser'
        import { defineComponent, onMounted } from 'vue'
        import AuthService from '@/services/AuthService'
        
        export default defineComponent({
            name: AuthView,
            setup() {
                onMounted(() => {
                    const authService = new AuthService()
                    $msalInstance = new PublicClientApplication(authService.getMsalConfig().value)
                })
                let account = ''
                const login = async () => {
                    await $msalInstance
                        .loginPopup({})
                        .then(() => {
                            const myAccounts = $msalInstance.getAllAccounts()
                            account = myAccounts[0]
                            $emitter.emit('login', account)
                        })
                        .catch(error => {
                            alert(error)
                        })
                }
                return {
                    account,
                    login
                }
            }
        })
        </script>    
        ```
    + Javascript con Composition API y con setup:
        ```html
        <template>
            <authenticator>
                <!-- EL CÓDIGO QUE ESCRIBAMOS AQUÍ SOLO SE PODRÁ VER SI SE HACE LOGIN -->
                <template v-slot="{user, signOut}">
                    <h1>Hola {{ user.username }}</h1>
                    <button @click="signOut">Cerrar sesión</button>
                </template>
            </authenticator>
        </template>

        <script setup>
        import { PublicClientApplication } from '@azure/msal-browser'
        import { defineComponent, onMounted } from 'vue'
        import AuthService from '@/services/AuthService'
        
        onMounted(() => {
            const authService = new AuthService()
            $msalInstance = new PublicClientApplication(authService.getMsalConfig().value)
        })
        let account = ''
        const login = async () => {
            await $msalInstance
                .loginPopup({})
                .then(() => {
                    const myAccounts = $msalInstance.getAllAccounts()
                    account = myAccounts[0]
                    $emitter.emit('login', account)
                })
                .catch(error => {
                    alert(error)
                })
        }
        return {
            account,
            login
        }
        </script>    
        ```
### Modificar el archivo de rutas:
    ```ts title="...\src\router\index.ts"
    // ...
    import AuthView from '../views/AuthView.vue'

    const routes: Array<RouteRecordRaw> = [
        // ...
        {
            path: '/auth',
            name: 'auth',
            component: AuthView
        },
    ]
    // ...   
    ```
### Modificar el componente principal
    ```html title="...\src\App.vue"
    <template>
        <nav>
            <!-- ... -->
            <router-link to="/auth">Iniciar Sesión</router-link>
        </nav>
        <!-- ... -->
    </template>
    ```

## Proyecto con Vuex
1. Crear un proyecto con Vuex:
    + Ejecutar:
        ```bash
        vue create app_vuex
        ```
    + Ejemplo de opciones seleccionadas para la creación de un proyecto:
        ```
        Vue CLI v5.0.8
        ? Please pick a preset: Manually select features
        ? Check the features needed for your project: Babel, TS, Router, Vuex, CSS
        Pre-processors, Linter
        ? Choose a version of Vue.js that you want to start the project with 3.x
        ? Use class-style component syntax? No
        ? Use Babel alongside TypeScript (required for modern mode, auto-detected
        polyfills, transpiling JSX)? Yes
        ? Use history mode for router? (Requires proper server setup for index fallback
        in production) Yes
        ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
        by default): Sass/SCSS (with dart-sass)
        ? Pick a linter / formatter config: Basic
        ? Pick additional lint features: Lint on save
        ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated
        config files
        ? Save this as a preset for future projects? No
        ```
2. Estructura de un **store**:
    ```js title="src\store\index.ts"
    import { createStore } from 'vuex'

    export default createStore({
        state: {
            // datos
            mi_estado: 'valor de mi estado'
        },
        getters: {
            // propiedades computadas
            obtener_mi_estado(state) {
                return state.mi_estado
            }
        },
        mutations: {
            // modificar los datos de forma sincrona
            modificar_mi_estado(state, nuevo_valor) {
                state.mi_estado = nuevo_valor
            }
        },
        actions: {
            // modificar los datos de forma asincrona
        },
        modules: {
            // subdividir el store
        }
    })
    ```
3. Consumir un **store** desde un componente:
    + Invocar elementos del **store** directamente:
        ```html title="Con Option API con typescript"
        <template>
            <p>Forma 1: {{ $store.state.mi_estado }}</p>
            <p>Forma 2: {{ estado }}</p>
            <p>Forma 3: {{ $store.getters.obtener_mi_estado }}</p>   
            <p>Forma 4: {{ estado2 }}</p>       
        </template>

        <script lang="ts">
        import { defineComponent } from 'vue'

        export default defineComponent({
            // ...
            computed: {
                estado() {
                    return this.$store.state.mi_estado
                },
                estado2() {
                    return this.$store.getters.obtener_mi_estado
                }
            },
            methods: {
                cambiar_estado() {
                    this.$store.commit('modificar_mi_estado', 'nuevo valor de mi estado')
                }
            },
            // ...
        })
        </script>    
        ```
    + Invocar elementos del **store** mediante el mapeo con Option API:
        ```html title="Con Option API con typescript"
        <template>
            <p>Forma 1: {{ mi_estado }}</p>
            <p>Forma 2: {{ obtener_mi_estado }}</p>
        </template>

        <script lang="ts">
        import { defineComponent } from 'vue'
        import { mapState, mapGetters, mapMutations } from 'vuex'

        export default defineComponent({
            // ...
            computed: {
                ...mapState(['mi_estado']),
                ...mapGetters(['obtener_mi_estado'])
            },
            methods: {
                ...mapMutations(['modificar_mi_estado']),
                cambiar_estado() {
                    this.modificar_mi_estado('nuevo valor de mi estado')
                }
            },
            // ...
        })
        </script>    
        ```
    + Invocar elementos del **store** mediante el mapeo con Composition API:
        ```html title="Con Composition API con typescript"
        <template>
            <p>Forma 1: {{ mi_estado }}</p>
            <p>Forma 2: {{ obtener_mi_estado }}</p>
        </template>

        <script lang="ts">
        import { defineComponent, computed } from 'vue'
        import { useStore } from 'vuex'

        export default defineComponent({
            // ...
            setup() {
                const store = useStore()
                const mi_estado = computed(() => store.state.mi_estado)
                const obtener_mi_estado = computed(() => store.getters.obtener_mi_estado)
                const cambiar_estado = () => store.commit('cambiar_estado', 'nuevo valor de mi estado')
                return {
                    mi_estado,
                    obtener_mi_estado,
                    cambiar_estado
                }
            }
            // ...
        })
        </script>    
        ```
    + Invocar elementos del **store** mediante el mapeo con Composition API y setup:
        ```html title="Con Composition API con typescript y setup"
        <template>
            <p>Forma 1: {{ mi_estado }}</p>
            <p>Forma 2: {{ obtener_mi_estado }}</p>
        </template>

        <script lang="ts" setup>
        import { defineComponent, computed } from 'vue'
        import { useStore } from 'vuex'

        // ...
        const store = useStore()
        const mi_estado = computed(() => store.state.mi_estado)
        const obtener_mi_estado = computed(() => store.getters.obtener_mi_estado)
        const cambiar_estado = () => store.commit('cambiar_estado', 'nuevo valor de mi estado')
        // ...
        </script>    
        ```
        
## Proyecto con Pinia
1. Crear un proyecto con Pinia:
    + Ejecutar:
        ```bash
        vue create app_pinia
        ```
    + Ejemplo de opciones seleccionadas para la creación de un proyecto:
        ```
        Vue CLI v5.0.8
        ? Please pick a preset: Manually select features
        ? Check the features needed for your project: Babel, TS, Linter
        ? Choose a version of Vue.js that you want to start the project with 3.x
        ? Use class-style component syntax? No
        ? Use Babel alongside TypeScript (required for modern mode, auto-detected
        polyfills, transpiling JSX)? Yes
        ? Pick a linter / formatter config: Basic
        ? Pick additional lint features: Lint on save
        ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated
        config files
        ? Save this as a preset for future projects? No
        ```
    + Instalar Pinia:
        ```bash
        npm i pinia
        ```
    + Poner pinia a disposición de todo el proyecto:
        ```js title="src\main.ts"
        // ...
        import { createPinia } from 'pinia'

        const pinia = createPinia()
        const app = createApp(App)
        app.use(pinia).mount('#app')
        ```
2. Crear un store de pinia:
    ```js tilte="src\store\mi_store.ts"
    import { defineStore } from 'pinia'

    // Convención para nombra al store: use[Nombre del store]Store
    export const useMiStoreStore = defineStore('mi_estore', {
        state: () => {
            return {
                // datos
                mi_estado: 'valor de mi estado'

            }
        },

        getters: {
            // propiedades computadas
            obtener_mi_estado: (state) => state.mi_estado
        },

        actions: {
            // modificar los datos
            modificar_mi_estado(nuevo_valor = 'valor por defecto') {
                this.mi_estado = nuevo_valor
            }
        }
    })    
    ```
3. Usar el store en un componente vue:
    ```html
    <template>
        <p>Recuperar estado: {{ store.mi_estado }}</p>
        <p>Recuperar getter: {{ store.obtener_mi_estado }}</p>
        <button @click="store.modificar_mi_estado('nuevo valor de mi estado')">Modificar mi_estado</button>
    </template>

    <script>
    import { useMiStoreStore } from '@/store/mi_store'

    const store = useMiStoreStore()
    </script>
    ```
### Persistencia con pinia
:::tip Nota
Documentación: https://github.com/prazdevs/pinia-plugin-persistedstate
:::
1. Instalar plugin de persistencia de pinia:
    ```bash
    npm i pinia-plugin-persistedstate
    ```
2. Configurar el plugin de persistencia de pinia:
    ```js title="src\main.ts"
    // ...
    import { createPinia } from 'pinia'
    import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    const app = createApp(App)
    app.use(pinia).mount('#app')
    ```
3. Crear un store de pinia con persistencia:
    ```js title="src/store/useExample.js"
    import { defineStore } from 'pinia'

    export const useExample = defineStore('useExample', {
        state: () => {
            return {
                count: 1
            }
        },
        actions: {
            increment(val = 1) {
                this.count += val
            }
        },
        persist: true
        // Si queremos detallar más:
        /*
        persist: {
            storage: sessionStorage,
            paths: ['count']
        }
        */
    })
    ```


## Estructura recomendada de carpetas de un proyecto Vue
+ **node_modules**: dependencias npm.
+ **public**: archivos accesibles desde la web.
+ **src**: parte central de la aplicación.
    + **assets**
    + **components**
    + **interfaces**
    + **router**
    + **scss**: contenedor de archivos de pre-procesadores css.
    + **services**
    + **view**



## Estructura de un compoenten Vue
+ Estructura general Option API:
    ```html
    <template>
        <div>
            <!-- Código HTML del componente-->
            <h2>{{ dato1 }}</h2>
            <button @click="metodo_prueba">Prueba</button>

            <OtroComponente />
        </div>
    </template>

    <script>
    /* Código Javascript */
    import { defineComponent } from 'vue';
    import OtroComponente from './OtroComponente.vue'

    export default defineComponent({
        name: 'NombreComponente',
        props: {},

        components: {
            OtroComponente
        },
        
        data() {
            let dato1 = 'Prueba';
            return {
                dato1
            }
        },

        mounted() {},

        computed: {},

        methods: {
            metodo_prueba() {
                this.dato1. = 'Otro valor';
            }
        }
    });
    </script>

    <!-- Si nuestro componente utilizar Typescript -->
    <!--
    <script lang="ts" setup>
    /* Código Javascript */
    </script>        
    -->

    <style scoped>
    /* Código CSS */
    </style>
    ```
+ Estructura general Composition API:
    ```html
    <template>
        <div>
            <!-- Código HTML del componente-->
            <h2>{{ dato1 }}</h2>
            <button @click="metodo_prueba">Prueba</button>

            <OtroComponente />
        </div>
    </template>

    <script>
    /* Código Javascript */
    import { defineComponent, ref } from 'vue';
    import OtroComponente from './OtroComponente.vue';

    export default defineComponent({
        name: 'NombreComponente',

        setup() {
            let dato1 = ref('Prueba');
            const metodo_prueba = () => {
                dato1.value = 'Otro valor';
            }
            return {
                dato1,
                metodo_prueba
            }
        }
    });
    </script>

    <!-- Si nuestro componente utilizar Typescript -->
    <!--
    <script lang="ts" setup>
    /* Código Javascript */
    </script>        
    -->

    <style scoped>
    /* Código CSS */
    </style>
    ```
+ Estructura general Composition API (con Typescript):
    ```html
    <template>
        <div>
            <!-- Código HTML del componente-->
            <h2>{{ dato1 }}</h2>
            <button @click="metodo_prueba">Prueba</button>

            <OtroComponente />
        </div>
    </template>

    <script lang="ts">
    /* Código Javascript */
    import { defineComponent, Ref, ref } from 'vue';
    import OtroComponente from './OtroComponente.vue';

    export default defineComponent({
        name: 'NombreComponente',

        setup() {
            interface DatoObjeto {
                clave1: string,
                clave2: string
            };
            let dato1:Ref = ref('Prueba');
            let array1:Ref<Array<string>> = ref(['valor 1', 'valor 2', 'valor 3']);
            let array2:Ref<Array<DatoObjeto>> = ref([
                {clave1: 'valor 1 de la clave 1', clave2: 'valor 1 de la clave 2'}, 
                {clave1: 'valor 2 de la clave 1', clave2: 'valor 2 de la clave 2'}
            ]);
            const metodo_prueba = ():void => {
                dato1.value = 'Otro valor';
            }
            return {
                dato1,
                metodo_prueba
            }
        }
    });
    </script>

    <!-- Si nuestro componente utilizar Typescript -->
    <!--
    <script lang="ts" setup>
    /* Código Javascript */
    </script>        
    -->

    <style scoped>
    /* Código CSS */
    </style>
    ```
+ Estructura general Composition API (con setup en el script):
    ```html
    <template>
        <div>
            <!-- Código HTML del componente-->
            <h2>{{ dato1 }}</h2>
            <button @click="metodo_prueba">Prueba</button>

            <OtroComponente />
        </div>
    </template>

    <script lang="ts" setup>
    /* Código Javascript */
    import { Ref, ref } from 'vue';
    import OtroComponente from './OtroComponente.vue';

    let dato1:Ref = ref('Prueba');
    const metodo_prueba = ():void => {
        dato1.value = 'Otro valor';
    }
    </script>

    <!-- Si nuestro componente utilizar Typescript -->
    <!--
    <script lang="ts" setup>
    /* Código Javascript */
    </script>        
    -->

    <style scoped>
    /* Código CSS */
    </style>
    ```

## Ciclo de vida
+ Etapas:
    + beforeCreate
    + created
    + beforeMount
    + mounted
    + beforeUpdate
    + updated
    + beforeDestroy
    + destroyed
+ Estructura ciclo de vida Option API:
    ```html
    <!-- ... -->
    <script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        beforeCreate() { console.log('El componente se va a crear'); },
        created() { console.log('El componente se acaba de crear'); },
        mounted() { console.log('El componente se acaba de montar'); },
        updated() { console.log('El componente se acaba de actualizar'); },
        unmounted() { console.log('El componente se acaba de desmontar (antes llamdo destroyed)'); },
    })
    </script>
    <!-- ... -->
    ```
+ Estructura ciclo de vida Composition API:
    ```html
    <script setup>
    import { onCreated, onMounted, onUpdated, onUnmounted } from 'vue'

    onCreated(() => { console.log('El componente se acaba de crear') })
    onMounted(() => { console.log('El componente se acaba de montar') })
    onUpdated(() => { console.log('El componente se acaba de actualizar') })
    onUnmounted(() => { console.log('El componente se acaba de desmontar') })
    </script>
    ```

## Directivas
+ Selectivo **v-if**:
    ```html
    <!-- ... -->
    <div v-if="condicion">
        <!-- Código si se cumple condicion -->
    </div>
    <div v-else-if="condicion2">
        <!-- Código si se cumple condicion2 -->
    </div>
    <div v-else>
        <!-- Código si no se cumple condicion ni condicion2 -->
    </div>
    <!-- ... -->
    ```
    + **Nota:** el **v-if** no dibuja en el virtual DOM las condiciones que no se cumplen.
+ Selectivo **v-show**:
    ```html
    <!-- ... -->
    <div v-show="condicion">
        <!-- Código si se cumple condicion -->
    </div>
    <!-- ... -->
    ```
    + **Nota:** el **v-show** dibuja en el virtual DOM las condiciones que no se cumplen y le agrega al tag que lo usa el atributo **style: "display: none;"**.
+ Recorrido de estructuras **v-for**:
    ```html
    <!-- ... -->
    <ul>
        <li v-for="elemento in elementos" :key="elemento.id">{{ elemento }}</li>
        <!-- :key tambien se puede escribir como v-bind:key -->
    </ul>
    <!-- Usando un index -->
    <ul>
        <li v-for="(elemento, index) in elementos" :key="index">{{ elemento }}</li>
        <!-- :key tambien se puede escribir como v-bind:key -->
    </ul>
    <!-- ... -->
    ```
+ Bindeo **v-bind**:
    + Bindeo de clases:
        ```html
        <!-- ... -->
        <p v-bind:class="{
            'mi-clase': condicion 
        }"
        >
            A este texto se le aplicará la clase mi-clase si condicion se cumple
        </p>

        <!-- forma simplificada -->
        <p :class="{
            'mi-clase': condicion 
        }"
        >
            A este texto se le aplicará la clase mi-clase si condicion se cumple
        </p>
        <!-- ... -->
        ```
    + Bindeo de estilos:
        ```html
        <!-- ... -->
        <p :style="{
            backgroundColor: variable_bg,
            'background-color': variable_bg,     // Esta expresión es igual a la anterior
            color: variable_color
        }"
        >
            A este texto se le aplicará los estilos definidos en style
        </p>
        <!-- ... -->
        ```
+ Evento **v-on**:
    ```html
    <!-- ... -->
    <button v-on:click="miEvento()">Ejecutar evento</button>
    <button @click="miEvento()">Ejecutar evento</button>
    <!-- ... -->
    ```
+ Comunicación bidireccional **v-model**:
    ```html
    <!-- ... -->
    <input type="text" v-model="inputText" />
    <p>{{ inputText }}</p>
    <!-- ... -->
    ```

## Comunicación entre componentes
### Comunicación vertical descendente (**props**)
+ Componente padre con Composition API:
    ```html
    <template>
        <h2>Componente padre</h2>
        <ComponenteHijo 
            informacion="Información a pasar al componente hijo"
        />
    </template>

    <script setup>
    import ComponenteHijo from './ComponenteHijo.vue'
    </script>
    ```
+ Componente hijo con Option API:
    ```html
    <template>
        <div>
            <h2>Componente hijo</h2>
            <p>Información del componente padre: {{ props.informacion }}</p>
        </div>
    </template>

    <script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            informacion: {
                type: String,
                required: false,
                defalut: 'Sin información'
            }
        },
        setup(props) {
            return {
                props
            }
        }
    })
    </script>
    ```
+ Componente hijo con Composition API con el setup definido en el script:
    ```html
    <template>
        <div>
            <h2>Componente hijo</h2>
            <p>Información del componente padre: {{ props.informacion }}</p>
        </div>
    </template>

    <script setup>
    import { defineProps } from 'vue'

    const props = defineProps({
        informacion: {
            type: String,
            required: false,
            defalut: 'Sin información'
        }
    })
    </script>
    ```
### Comunicación vertical ascendente (**emits**)
+ Componente padre con Option API:
    ```html
    <template>
        <h2>Componente padre</h2>
        <ComponenteHijo 
            @comunicarAlComponentePadre="comunicacionDelComponenteHijo"
        />
    </template>

    <script>        
    import { defineComponent } from 'vue'

    export default defineComponent({
        data() {
            return {
                variable
            }
        }

        methods: {
            comunicacionDelComponenteHijo(variable) {
                this.variable = variable
            }
        }
    })
    </script>
    ```
+ Componente hijo con Option API:
    ```html
    <template>
        <div>
            <h2>Componente hijo</h2>
            <button @click="enviarComunicacionAlComponentePadre">Enviar información al componente Padre</button>
        </div>
    </template>

    <script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        emits: ["comunicarAlComponentePadre"],
        setup(props, { emit }) {
            const enviarComunicacionAlComponentePadre = () {
                emit("comunicarAlComponentePadre", "valor entregado desde el compoenente hijo")
            }
            return {
                props,
                enviarComunicacionAlComponentePadre
            }
        },
    })
    </script>
    ```
+ Componente hijo con Composition API con el setup definido en el script:
    ```html
    <template>
        <div>
            <h2>Componente hijo</h2>
            <button @click="enviarComunicacionAlComponentePadre">Enviar información al componente Padre</button>
        </div>
    </template>

    <script setup>
    import { defineProps, defineEmits } from 'vue'

    const emit = defineEmits(['comunicarAlComponentePadre'])
    const enviarComunicacionAlComponentePadre = () {
        emit("comunicarAlComponentePadre", "valor entregado desde el compoenente hijo")
    }
    </script>
    ```
### Ejemplo práctico de comunicación ascendente y descendente con Composition API
+ Componente padre:
    ```html title=".../ComponentePadre.vue"
    <template>
        <h1>Comunicación ascendente y descendente</h1>
        <hr>
        <p>Información ascendente: {{ info_ascendente }}</p>
        <p>Información descendente: {{ info_descendente }}</p>
        <hr>
        <h2>Componente padre</h2>
        <ComponenteHijo 
            :info_descendente="info_descendente" 
            @infoAscendente="handleInfoAscendente"
        />
    </template>

    <script>
    import ComponenteHijo from '.../ComponenteHijo.vu';
    export default {
        name: 'ComponentePadre',
        components: {
            ComponenteHijo
        },
        data() {
            return {
                info_descendente="Información para el componente hijo",
                info_ascendente: null
            }
        },
        methods: {
            handleInfoAscendente(info_ascendente) {
                this.info_ascendente = info_ascendente;
            }
        }
    }
    </script>
    ```
+ Componente hijo:
    ```html title=".../ComponenteHijo.vue"
    <template>
        <h2>Componente hijo</h2>
        <p>Información descendente: {{ info_descendente }}</p>
        <p>Información descendente: {{ info_descendente }}</p>
        <button @click="enviarInfoAscendente">Enviar información ascendente</button>
    </template>

    <script>
    export default {
        name: 'ComponenteHijo',
        data() {
            return {
                info_ascendente="Información para el componente padre"
            }
        },
        props: {
            info_descendente: {}
        },
        methods: {
            enviarInfoAscendente() {
                this.$emit('infoAscendente', this.info_ascendente)
            }
        }
    }
    </script>
    ```    

## Propiedades computadas:
+ Option API:
    ```html
    <template>
        <div>
            <p>{{ valorData }}</p>
            <p>{{ valorComputado }}</p>
        </div>
    </template>

    <script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        data() {
            return {
                valorData: 1
            }
        },
        computed: {
            valorComputado() {
                return this.valorData * 2;
            }
            // Con Typescript se debe añadir el tipado de datos al valor computado:
            /*
            valorComputado():integer {
                return this.valorData * 2;
            }
            */
        }
    })
    </script>
    ```
+ Composition API:
    ```html
    <template>
        <div>
            <p>{{ valorData }}</p>
            <p>{{ valorComputado }}</p>
        </div>
    </template>

    <script>
    import { defineComponent, ref, computed } from 'vue'

    export default defineComponent({
        setup() {
            let valorData = ref(1)
            const valorComputado = computed(() => valorData.value * 2)

            return {
                valorData,
                valorComputado
            }
        }
    })
    </script>
    ```
+ Composition API con setup en el script:
    ```html
    <template>
        <div>
            <p>{{ valorData }}</p>
            <p>{{ valorComputado }}</p>
        </div>
    </template>

    <script setup>
    import { ref, computed } from 'vue'
    
    let valorData = ref(1)
    const valorComputado = computed(() => valorData.value * 2)
    </script>
    ```

## Directivas personalizadas:
+ Directiva personalizada simple:
    + Modificar el archivo principal **mi_proyecto\src\main.js** para estructurar la directiva personalizada:
        ```js
        // ...
        const app = createApp(App)
        
        /* 
            1er parámetro: nombre de la directiva (dentro de vue la usaremos como v-mi-directiva)
            2do parámetro: objeto con las acciones a realizar
        */
        app.directive('mi-directiva', {
            /* 
                Clave: momento del ciclo de vida de un componente
                Valor: acción a realizar
            */
            beforeMount: (el) => {
                /*
                    el: etiqueta html en donde va a actuar la directiva

                */
                el.style.fontSize = "70px"
            },
            updated: () => {
                // Otras acciones a tomar
            }
        })
        
        app.mount('#app')
        // ...
        ```
    + Ejemplo de uso en un componente:
        ```html
        <p v-mi-directiva>Texto con la directiva personalizada aplicada</p>
        ```
+ Directiva personalizada con value:
    + Modificar el archivo principal **mi_proyecto\src\main.js** para estructurar la directiva personalizada:
        ```js
        // ...
        const app = createApp(App)
        
        /* 
            1er parámetro: nombre de la directiva (dentro de vue la usaremos como v-mi-directiva)
            2do parámetro: objeto con las acciones a realizar
        */
        app.directive('mi-directiva', {
            /* 
                Clave: momento del ciclo de vida de un componente
                Valor: acción a realizar
            */
            beforeMount: (el, binding) => {
                /*
                    el: etiqueta html en donde va a actuar la directiva
                    binding: datos a recibir por la directiva

                */
                el.style.fontSize = binding.value + "px"
            }
        })
        
        app.mount('#app')
        // ...
        ```
    + Ejemplo de uso en un componente:
        ```html
        <p v-mi-directiva="45">Texto con la directiva personalizada aplicada</p>
        ```
+ Directiva personalizada con argumentos:
    + Modificar el archivo principal **mi_proyecto\src\main.js** para estructurar la directiva personalizada:
        ```js
        // ...
        const app = createApp(App)
        
        /* 
            1er parámetro: nombre de la directiva (dentro de vue la usaremos como v-mi-directiva)
            2do parámetro: objeto con las acciones a realizar
        */
        app.directive('mi-directiva', {
            /* 
                Clave: momento del ciclo de vida de un componente
                Valor: acción a realizar
            */
            beforeMount: (el, binding) => {
                /*
                    el: etiqueta html en donde va a actuar la directiva
                    binding: datos a recibir por la directiva

                */
                let size = 18
                switch(binding.arg) {
                    case 'sm':
                        size = 10
                        break
                    case 'md':
                        size = 18
                        break
                    case 'lg':
                        size = 25
                        break
                    case 'xl':
                        size = 40
                        break
                }
                el.style.fontSize = size + "px"
            }
        })
        
        app.mount('#app')
        // ...
        ```
    + Ejemplo de uso en un componente:
        ```html
        <p v-mi-directiva:xl>Texto con la directiva personalizada aplicada</p>
        ```
+ Directiva personalizada con modificadores:
    + Modificar el archivo principal **mi_proyecto\src\main.js** para estructurar la directiva personalizada:
        ```js
        // ...
        const app = createApp(App)
        
        /* 
            1er parámetro: nombre de la directiva (dentro de vue la usaremos como v-mi-directiva)
            2do parámetro: objeto con las acciones a realizar
        */
        app.directive('mi-directiva', {
            /* 
                Clave: momento del ciclo de vida de un componente
                Valor: acción a realizar
            */
            beforeMount: (el, binding) => {
                /*
                    el: etiqueta html en donde va a actuar la directiva
                    binding: datos a recibir por la directiva

                */                
                if(binding.modifiers.sm) {
                    el.style.fontSize = "10px"
                } else if(binding.modifiers.md) {
                    el.style.fontSize = "18px"
                } else if(binding.modifiers.lg) {
                    el.style.fontSize = "25px"
                }

                if(binding.modifiers.red) {
                    el.style.color = '#FF0000'
                } else if(binding.modifiers.green) {
                    el.style.color = '#00FF00'
                } else if(binding.modifiers.blue) {
                    el.style.color = '#0000FF'
                }
            }
        })
        
        app.mount('#app')
        // ...
        ```
    + Ejemplo de uso en un componente:
        ```html
        <p v-mi-directiva.blue.sm>Texto con la directiva personalizada aplicada</p>
        ```

## Servicios:
+ **Nota**: una buena práctica de programación es crear los servicios en una ruta específica para este fin, como puede ser **mi_proyecto\src\services**.
+ Ejemplo de una clase de servicio:
    + Creación del servicio (crear **vue2024\mi_proyecto\src\services\ModeloService.js**):
        ```js
        import { ref } from 'vue'

        class ModeloService {
            private modelos
            private modelo

            constructor() {
                this.modelos = ref([])
                this.modelo = ref([])
            }

            getModelos() {
                return this.modelos
            }

            getModelo() {
                return this.modelo
            }

            async fetchAll() {
                try {
                    const url = 'https:://mi_servicio/modelos'
                    const response = await fetch(url)
                    const json = await response.json()
                    this.modelos.value = await json
                } catch(error) {
                    console.log(error)
                }
            }

            async fetchById(id) {
                try {
                    const url = `https:://mi_servicio/modelos/${id}`
                    const response = await fetch(url)
                    const json = await response.json()
                    this.modelo.value = await json
                } catch(error) {
                    console.log(error)
                }
            }
        }

        export default ModeloService        
        ```
    + Consumo del servicio (**vue2024\mi_proyecto\src\components\MoldeloList.vue**):
        + Forma 1: Composition API
            ```html
            <template>
                <h2>Lista de modelos</h2>
                <ul>
                    <li v-if="modelo in modelos" :key="modelo.id">{{ modelo.name }}</li>
                </ul>
            </template>

            <script>
            import { defineComponent, onMounted } from 'vue'
            import ModeloService from '@/services/ModeloService'

            export default defineComponent({
                name: 'ModeloList',
                setup() {
                    const service = new ModeloService()
                    const modelos = service.getModelos()
                    onMounted(async () => {
                        await service.fetchAll()
                    })
                    return {
                        modelos
                    }
                },
            })
            </script>            
            ```
        + Forma 2: Composition API con setup en el script
            ```html
            <template>
                <h2>Lista de modelos</h2>
                <ul>
                    <li v-if="modelo in modelos" :key="modelo.id">{{ modelo.name }}</li>
                </ul>
            </template>

            <script setup>
            import { onMounted } from 'vue'
            import ModeloService from '@/services/ModeloService'

            const service = new ModeloService()
            const modelos = service.getModelos()
            onMounted(async () => {
                await service.fetchAll()
            })
            </script>            
            ```
        + Forma 3: Option API
            ```html
            <template>
                <h2>Lista de modelos</h2>
                <ul>
                    <li v-if="modelo in modelos" :key="modelo.id">{{ modelo.name }}</li>
                </ul>
            </template>

            <script>
            import { defineComponent } from 'vue'
            import ModeloService from '@/services/ModeloService'

            export default defineComponent({
                name: 'ModeloList',
                data() {                        
                    const service = new ModeloService()
                    const modelos = service.getModelos()                    
                    return {
                        modelos,
                        service
                    }
                },

                async mounted() {
                    await this.service.fetchAll()
                },
            })
            </script>            
            ```

## Cookies
+ Instalar cookies en un proyecto vue:
    1. Instalar dependencia **vue-cookies**:
        ```bash
        npm i vue-cookies
        ```
    2. Modificar **main.ts**:
        ```ts title="src\main.ts"
        // ...
        import VueCookies from '.vue-cookies'

        const app = createApp(App)
        app.use(VueCookies, {
            expires: '1d'/* ,
            path: '/',
            domain: '',
            secure: '',
            sameSite: '' */
        }).mount('#app')
        ```
+ Guardar una cookie:
    ```vue
    $cookies.set('nombre_de_la_cookie', 'valor de la cookie')
    ```
+ Guardar una cookie sobreescribiendo su configuración:
    ```vue
    $cookies.set('nombre_de_la_cookie', 'valor de la cookie', expries, path, damoain, ...)
    ```    
+ Recuperar una cookie:
    ```vue
    $cookies.get('nombre_de_la_cookie')
    ```  
+ Eliminar una cookie:
    ```vue
    $cookies.remove('nombre_de_la_cookie')
    ```  
+ Saber si una cookie existe:
    ```vue
    $cookies.isKey('nombre_de_la_cookie')
    ```  
+ Obtener todas las cookies:
    ```vue
    $cookies.keys()
    ```


## Sesiones
+ Instalar sesiones en un proyecto vue:
    1. Instalar dependencia **vue-session**:
        ```bash
        npm i vue-session
        ```
    2. Modificar **main.ts**:
        ```ts title="src\main.ts"
        // ...
        import VueSession from '.vue-session'

        const app = createApp(App)
        app.use(VueSession).mount('#app')
        ```
+ Iniciar una sesión:
    ```vue
    $session.start()
    ```
+ Obtener el id de una sesión:
    ```vue
    $session.id()
    ```
+ Reonovar una sesión:
    ```vue
    $session.renew()
    ```        
+ Guardar una sesión:
    ```vue
    $session.set('nombre_de_la_sesion', 'valor de la sesión')
    ```
+ Recuperar una sesión:
    ```vue
    $session.get('nombre_de_la_sesion')
    ```  
+ Eliminar una sesión:
    ```vue
    $session.destroy('nombre_de_la_sesion')
    ```

## Layouts y Slots
1. Plantilla con slot sin nombre:
    1. Crear plantilla **MiLayout**:
        ```html title="src/layouts/MiLayout.vue"
        <template>
            <div>
                <!-- ... -->
                <!-- Estructura de mi layout -->
                <!-- ... -->
                <div>
                    <!-- Contenido específico de la vista -->
                    <slot></slot>
                </div>
                <!-- ... -->
                <!-- Estructura de mi layout -->
                <!-- ... -->
            </div>
        </template>
        ```
    2. Uso de la plantilla en la vista **MiView**:
        ```html
        <template>
            <MiLayout>
                <!-- Aquí el contenido específico de la vista -->
            </MiLayout>
        </template>

        <script setup>
        import MiLayout from '@/layouts/MiLayout.vue'
        </script>
        ```
2. Plantilla con slot con nombre:
    1. Crear plantilla **MiLayout**:
        ```html title="src/layouts/MiLayout.vue"
        <template>
            <div>
                <!-- ... -->
                <!-- Estructura de mi layout -->
                <!-- ... -->
                <div>
                    <!-- Contenido específico de la vista -->
                    <slot name="nombre1"></slot>
                </div>
                <!-- ... -->
                <div>
                    <!-- Contenido específico de la vista -->
                    <slot name="nombre2"></slot>
                </div>
                <!-- ... -->
                <!-- Estructura de mi layout -->
                <!-- ... -->
            </div>
        </template>
        ```
    2. Uso de la plantilla en la vista **MiView**:
        ```html
        <template>
            <MiLayout>
                <template v-slot:nombre1>
                    <!-- Aquí el contenido específico de la vista en el slot nombre1 -->
                </template>
                <template v-slot:nombre2>
                    <!-- Aquí el contenido específico de la vista en el slot nombre2 -->
                </template>
            </MiLayout>
        </template>

        <script setup>
        import MiLayout from '@/layouts/MiLayout.vue'
        </script>
        ```
    3. Otra forma de escribir el código anterior, pero con atajos:
        ```html
        <template>
            <MiLayout>
                <template #nombre1>
                    <!-- Aquí el contenido específico de la vista en el slot nombre1 -->
                </template>
                <template #nombre2>
                    <!-- Aquí el contenido específico de la vista en el slot nombre2 -->
                </template>
            </MiLayout>
        </template>

        <script setup>
        import MiLayout from '@/layouts/MiLayout.vue'
        </script>
        ```

## Composables
1. Crear composable **useMiComposable**:
    ```ts title="src/composables/useMiComposable.ts"
    // ...
    export function useMiComposable() {
        const valor1 = 'Valor 1';
        const valor2 = 'Valor 2';
        // ...
        return {
            valor1,
            valor2
        }
    }
    ```
2. Uso del composable **useMiComposable** en la vista **MiView**:
    ```html
    <!-- ... -->
    <script setup>
    import { useMiComposable } from '@/composables/useMiComposable'
    const {valor1, valor2} = useMiComposable
    </script>
    <!-- ... -->
    ```

## Componentes dinámicos
1. Ejemplo de creación de un compoenente dinámico:
    1. Crear layouta **ListLayout**:
        ```html tilte="src/layouts/ListLayout.vue"
        <template>
            <h2>Componente Lista</h2>
            <div>
                <DatoLista v-for="item in props.content" :key="item.id" :content="item" />
            </div>
        </template>

        <script setup>
        const props = defineProps(['content'])
        </script>
        ```
    2. Crear layouta **TableLayout**:
        ```html tilte="src/layouts/TableLayout.vue"
        <template>
            <h2>Componente Tabla</h2>
            <div>
                <DatoTable v-for="item in props.content" :key="item.id" :content="item" />
            </div>
        </template>

        <script setup>
        const props = defineProps(['content'])
        </script>
        ```
    3. Crear layouta **CardLayout**:
        ```html tilte="src/layouts/CardLayout.vue"
        <template>
            <h2>Componente Tarjeta</h2>
            <div>
                <DatoCard v-for="item in props.content" :key="item.id" :content="item" />
            </div>
        </template>

        <script setup>
        const props = defineProps(['content'])
        </script>
        ```
    4. Crear una vista para ver los componentes en forma dinámica en Composition API:
        ```html
        <template>
            <h2>Componente Dinámico</h2>
            <button @click="handleLayout(ListLayout)">Ver en lista</button>
            <button @click="handleLayout(TableLayout)">Ver en tabla</button>
            <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
            <component :is="layout" :content="datos" />
        </template>

        <script setup>
        import { ref, defineAsyncComponent } from 'vue'

        const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
        const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))
        const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))

        const layout = ref(ListLayout)
        const handleLayout = (componente) => layout.value = componente

        const datos = getDatos()
        // ...
        </script>
        ```


## Watchers
+ Ejemplo de uso de watch en Option API:
    ```html title="src/components/Example.vue"    
    <script>
    import { defineComponent } from 'vue'
    export default defineCompoent ({
        data() {
            return {
                note: ""
            }
        },
        watch: {
            // Esta acción se ejecutará cada vez que el valor de note sea modificado
            note(newValue, oldValue) {
                localStorage.setItem('note', newValue)
            }
        }
    })
    </script>
    ```
+ Ejemplo de uso de watch en Composition API setup:
    ```html title="src/components/Example.vue"    
    <script setup>
    import { ref, watch} from 'vue'
    const note = ref("")
    // El watchEffect se ejecutará cuando cualquier elemento reactivo cambie
    watch(note, () => {
        localStorage.setItem('note', note.value)
    })
    </script>
    ```
+ Ejemplo de uso de watchEffect en Composition API:
    ```html title="src/components/Example.vue"    
    <script>
    import { defineComponent, ref, watchEffect } from 'vue'
    export default defineCompoent ({
        setup() {
            const note = ref("")
            // El watchEffect se ejecutará cuando cualquier elemento reactivo cambie
            watchEffect(() => {
                localStorage.setItem('note', note.value)
            })
            return {
                note
            }
        }
    })
    </script>
    ```
+ Ejemplo de uso de watchEffect en Composition API setup:
    ```html title="src/components/Example.vue"    
    <script setup>
    import { ref, watchEffect} from 'vue'
    const note = ref("")
    // El watchEffect se ejecutará cuando cualquier elemento reactivo cambie
    watchEffect(() => {
        localStorage.setItem('note', note.value)
    })
    </script>
    ```

## Control delegado por referencia
+ Ejemplo de uso del control delegado por referencia con Composition API
    + Componente padre con setup:
        ```html title="src/components/ParentComponent.vue"
        <template>
            <h2>Componente padre</h2>
            <ChildComponent ref="tarea"></ChildComponent>
            <button @click="mandarIncrementoAlComponenteHijo">Incrementar</button>
        </template>

        <script setup>
            import { ref } from 'vue'
            import ChildComponent from './ChildComponent.vue'

            const tarea = ref(null)

            const mandarIncrementoAlComponenteHijo = () => {
                tarea.value.incrementar()
            }
        </script>
        ```
    + Componente hijo con setup:
        ```html title="src/components/ChildComponent.vue"
        <template>
            <h2>Componente hijo</h2>
            <p>Valor: {{ valor }}</p>
        </template>

        <script setup>
        import { onMounted, ref, defineExpose } from 'vue'

        const valor = ref(0)

        onMounted(() => {
            valor.value++
        })

        const incrementar = () => {
            valor.value++
        }

        defineExpose({ incrementar })
        </script>
        ```
    + Componente hijo:
        ```html title="src/components/ChildComponent.vue"
        <template>
            <h2>Componente hijo</h2>
            <p>Valor: {{ valor }}</p>
        </template>

        <script>
        import { onMounted, ref, defineExpose, defineComponent } from 'vue'

        export default defineComponent({
            setup() {
                const valor = ref(0)
                const incrementar = () => {
                    valor.value++
                }
                onMounted(() => {
                    valor.value++
                })
                defineExpose({ incrementar })
                return {
                    valor,
                    incrementar
                }
            }
        })
        </script>
        ```
+ Ejemplo de uso del control delegado por referencia con Composition API
    + Componente padre:
        ```html title="src/components/ParentComponent.vue"
        <template>
            <h2>Componente padre</h2>
            <ChildComponent ref="tarea"></ChildComponent>
            <button @click="mandarIncrementoAlComponenteHijo">Incrementar</button>
        </template>

        <script>
            import { defineComponent } from 'vue'
            import ChildComponent from './ChildComponent.vue'

            export default defineComponent({
                components: {
                    ChildComponent
                },
                methods: {
                    mandarIncrementoAlComponenteHijo() {
                        this.$refs.tarea.incrementar()
                    }
                }
            })
        </script>
        ```
    + Componente hijo con Option API:
        ```html title="src/components/ChildComponent.vue"
        <template>
            <h2>Componente hijo</h2>
            <p>Valor: {{ valor }}</p>
        </template>

        <script>
        import { defineComponent } from 'vue'

        export default defineComponent({
            data() {
                return {
                    valor: 0,
                    incrementar
                },

                mounted() {
                    this.valor++
                },

                methods: {
                    incrementar() {
                        this.valor++
                    }
                }
            }
        })
        </script>
        ```        

## Carga v-lazy de recursos
:::tip Nota
vue3-lazyload: https://www.npmjs.com/package/vue3-lazyload
:::
+ Instalación de **vue3-lazyload**:
    ```bash
    npm i vue3-lazyload
    ```
+ Configurar vue3-lazyload en **main.ts**:
    ```js title="src\main.ts"
    // ...
    import VueLazyLoad from 'vue3-lazyload'

    const app = createApp(App)
    app.use(VueLazyLoad, {/* Aquí se puede configurar las opciones por defecto */ }).mount('#app')
    ```
+ Ejemplo de uso en carga de imagen:
    ```html
    <template>
        <img 
            v-lazy="{
                src: 'https://imagen-externa',   // Se recomienda que la imagen no supere los 500KB
                loading: 'imagen-de-carga-dentro-de-mi-proyecto.png',    // Imagen que se mostrará mientras se carga la imagen solicitada
                error: 'imagen-de-error-dentro-de-mi-proyecto.png',  // Imagen de error que mostrará si no se carga la imagen solicitada
                delay: 500  // Tiempo de espera antes de que ocurra la carga
            }"
        />
    </template>
    ```
+ Ejemplo de uso en carga de cualquier tipo de recursos en javascript:
    ```html
    <template>
        <img 
            v-lazy="{ src: lazyOption.src, lifecycle: lazyOption.lifecycle, lazyOption.delay }" 
            lazy="loading"
        />
    </template>

    <script setup>
    import { ref } from 'vue'

    const lazyOptions = ref({
        src: 'https://imagen-externa',
        delay: 500,
        lifecycle: {
            loading: (el) => {
                console.log('cargando recurso')
            }
            error: (el) => {
                console.log('error al cargar recurso')
            }
            loaded: (el) => {
                console.log('el recurso se ha cargado con éxito', el)
            }
        }
    })
    </script>

    <style scoped>
    img[lazy=loading] {
        /* Estilos para img cuando se esta cargando */
    }
    img[lazy=loaded] {
        /* Estilos para img cuando ya se ha cargado */
    }
    img[lazy=error] {
        /* Estilos para img si existe un error en la carga */
    }
    </style>
    ```
+ Ejemplo de uso en carga de cualquier tipo de recursos en typescript:
    ```html
    <template>
        <img 
            v-lazy="{ src: lazyOption.src, lifecycle: lazyOption.lifecycle, lazyOption.delay }" 
            lazy="loading"
        />
    </template>

    <script setup>
    import { ref, VNode } from 'vue'

    const lazyOptions = ref({
        src: 'https://imagen-externa',
        delay: 500,
        lifecycle: {
            loading: (el: VNode) => {
                console.log('cargando recurso')
            }
            error: (el: VNode) => {
                console.log('error al cargar recurso')
            }
            loaded: (el: VNode) => {
                console.log('el recurso se ha cargado con éxito', el)
            }
        }
    })
    </script>

    <style scoped>
    img[lazy=loading] {
        /* Estilos para img cuando se esta cargando */
    }
    img[lazy=loaded] {
        /* Estilos para img cuando ya se ha cargado */
    }
    img[lazy=error] {
        /* Estilos para img si existe un error en la carga */
    }
    </style>
    ```


## Webpack Chunk - Code Splitting
:::tip Nota
Webpack Chunk no es aplicable en Vite.
:::
+ Aplicar Webpack Chunk en una ruta:
    ```js title="src/router/index.ts"
    // ...
    const routes: Array<RouteRecordRaw> = [
        // ...
        {
            path: '/ruta',
            name: 'ruta',
            component: () => import(/* webpackChunkName: "ruta" */ '../views/MiVista.vue')
        }
        // ...
    ]
    // ...
    ```


## Tips de interes:
### Importar estilos y scripts a un componente vue:
    ```html
    <!-- ... -->
    <script>
    export default {
        // ...
        head() {
            return {
                link: [
                    {
                        rel: 'stylesheet',
                        href: 'https://url_estilos.css',
                    },
                    // ...
                ],
                script: [
                    {
                        src: 'https://url_scripts.js',
                        type: 'text/javascript',
                    },
                    // ...
                ],
            };
        },
        // ...
    };
    </script>
    <!-- ... -->
    ```
### Instalar bootstrap:
+ Ejecutar:
    + $ npm install --save bootstrap
    + $ npm install --save @popperjs/core
+ Incorporar bootstrap al proyecto:
    + Modificar archivo principal **...\src\main.ts** o **...\src\main.js**:
        ```js
        // ...
        import "bootstrap/dist/css/bootstrap.min.css"
        import "bootstrap"
        // ...
        ```
### Peticiones al servidor
+ Ejemplo de petición a un servidor web con **fetch**:
    ```js
    const peticionWeb = async () => {
        let token = miFuncionGetToken()
        const response = await fetch('http://mi_ruta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept':  'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                'variable1': 'Valor de la variable 1',
                'variable2': 'Valor de la variable 2'
            })
        })

        const respuesta = await response.json()
    }
    ```

### Animaciones (Transitions)
+ Ejemplo de transición simple:
    ```html
    <template>
        <button @click="show = !show">Mostrar / Ocultar</button>
        <Transition>
            <h1 v-if="show">Animación</h1>
        </Transition>
    </template>

    <script setup>
    import { ref } from 'vue'

    const show = ref(false)
    </script>

    <style>
    /* CLASES DE ENTRADA (MOUNTED) */
    /* Estado inicial de la animación */
    .v-enter-from {
        opacity: 0;
    }

    /* Establecer la animación */
    .v-enter-active {
        transition: opacity 0.5s ease;
    }

    /* Estado final de la animación */
    .v-enter-to {
        
    }

    /* CLASES DE SALIDA (UNMOUNTED) */
    /* Estado inicial de la animación */
    .leave-from {

    }

    /* Establecer la animación */
    .leave-active {
        transition: opacity 0.5s ease;
    }

    /* Estado final de la animación */
    .leave-to {
        opacity: 0;
    }
    </style>
    ```
+ Ejemplo de transición a grupos de elementos:
    ```html
    <template>
        <TransitionGroup name="list" tag="ul">
            <li v-for="note in notes" :key="note">{{ note }}</li>
        </TransitionGroup>
        <input type="text" v-model="note" />
        <button @click="handleNote">Save note</button>
    </template>

    <script setup>
    import { ref } from 'vue'

    const notes = ref([])
    const note = ref('')

    const handleNote = () => {
        notes.value.push(note.value)
        note.value = ''
    }
    </script>

    <style>
    .list-enter-active, .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from, .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    </style>
    ```

### Iconos (v-icons)
:::tip Nota
Página de inconos **Oh, Vue Icons!**: https://oh-vue-icons.js.org
:::
+ Instalación:
    ```bash
    npm install oh-vue-icons
    ```
+ Importar los iconos a utilizar en **main**:
    ```ts title="src/main.ts"
    // ...
    import { OhVueIcon, addIcons } from "oh-vue-icons"
    import { BiFileCodeFill } from "oh-vue-icons/icons"
    
    addIcons(BiFileCodeFill)

    const app = createApp(App);
    app.component("v-icon", OhVueIcon);
    app.mount("#app");    
    // ...
    ```
+ Uso de iconos en un componente:
    ```html
    <template>
        <v-icon name="bi-file-code-fill"/>
    </template>
    ```
+ Modificacón de iconos:
    ```html
    <template>
        <v-icon 
            name="bi-file-code-fill"
            scale="2"
            animation="pulse"
            title="Mi icono"
            hover="true"
        />
    </template>
    ```


### GraphQL Apollo CLI
:::tip Nota
Página de GraphQL: https://graphql.org
Página de Vue Apollo GraphQL: https://v4.apollo.vuejs.org
:::
+ Configuración del paquete Apollo CLI