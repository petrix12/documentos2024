---
title: Laravel 8 - Laravel Passort
sidebar_label: "Laravel 8 - Laravel Passort"
sidebar_position: 97
---

# Crear una API RESTful con Laravel Passport
+ [Documentación Laravel Passport](https://laravel.com/docs/8.x/passport)
+ [Repositorio](https://github.com/petrix12/api_laravel_passport.git)

## Creación del proyecto paso a paso:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **api_laravel_passport**.
    + **Description**: Ejemplo de la creación de una API en Laravel 8 usando Laravel Passport.
    + **Public**.
3. Crear proyecto para la API RESTful:
    ```bash
    laravel new 09api_laravel_passport
    ```
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    ```bash
    git init
    git add .
    git commit -m "Proyecto en blanco"
    git branch -M main
    git remote add origin https://github.com/petrix12/api_laravel_passport.git
    git push -u origin main
    ```
3. Configurar las siguientes varialbles de entorno en **.env**:
    ```env
    APP_NAME="Ejemplo de API con Laravel Passport"
    APP_URL=http://127.0.0.1:8000
    DB_DATABASE=pruebas_api
    ```
4. Crear base de datos **pruebas_api**.
5. Instalar Laravel Passport:
    ```bash
    composer require laravel/passport
    php artisan migrate
    php artisan passport:install
    ```
    + Recuperar credenciales:
        ```txt
        Personal access client created successfully.
        Client ID: 1
        Client secret: NDwt133ICMA9nS6IBNq0SQdFnVcu6bZ4pRecS5wo
        Password grant client created successfully.
        Client ID: 2
        Client secret: GopgvFkvIBt5pJ0j4HJ9vxJWblMij4AL15mP3Gxb
        ```
6. Agregar el trait **HasApiTokens** en el modelo **User**:
    ```php
    ≡
    use Laravel\Passport\HasApiTokens;

    class User extends Authenticatable
    {
        use ..., HasApiTokens;
        ≡
    }
    ```
    + **Nota**: en caso de estar presente en el modelo user la definición de:
        + use Laravel\Sanctum\HasApiTokens
    + Reemplazar por la de Laravel Passport:
        + use Laravel\Passport\HasApiTokens;
7. Registrar **Laravel Passport** en el método **boot** del provider **AuthServiceProvider**:
    ```php
    public function boot()
    {
        ≡
        if (! $this->app->routesAreCached()) {
            Passport::routes();
        }
    }
    ```
    Importar la definición de la clase **Passport**:
    ```php
    use Laravel\Passport\Passport;
    ```
8. Modificar el archivo de configuración **config\auth.php**:
    ```php
    ≡
    'guards' => [
        ≡
        'api' => [
            'driver' => 'passport',
            'provider' => 'users',
        ],
    ],
    ≡
    ```
9. Mover el archivo de rutas para API:
    + De:   routes\api.php
    + A:    routes\api\v1\api.php
10. Versionar la API modificando el método **boot** del provider **RouteServiceProvider**:
    ```php
    public function boot()
    {
        ≡
        $this->routes(function () {
            Route::prefix('api/v1')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api/v1/api.php'));
            ≡
        });
    }
    ```
    + Cuando se cree la versión **n** codificar así:
    ```php
    public function boot()
    {
        ≡
        $this->routes(function () {
            Route::prefix('api/v1')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api/v1/api.php'));
            ≡
            Route::prefix('api/vn')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api/vn/api.php'));
            ≡
        });
    }
    ```
    + **Nota**: el archivo de rutas debe ubicarse en: routes\api\vn\api.php
11. Crear los siguientes controladores:
    ```bash
    php artisan make:controller LoginController
    php artisan make:controller UserController
    ```
12. Definir el método **login** del controlador **LoginController**:
    ```php
    ***
    ```
    + Importar la definición del facade **Auth**:
    ```php
    use Illuminate\Support\Facades\Auth;
    ```
14. Definir el método **index** del controlador **UserController**:
    ```php
    ***
    ```
    + Importar la definición del modelo **User**:
    ```php
    use App\Models\User;
    ```
15. Para proteger nuestras rutas, modificar el archivo de rutas **routes\api\v1\api.php**:
    ```php
    ***
    ```
    + Importar las siguientes definciones de controladores:
    ```php
    use App\Http\Controllers\LoginController;
    use App\Http\Controllers\UserController;
    ```
16. NO ESTA CULMINADO
    ```php
    ***
    ```

6. Commit Video 01:
    ```bash
    git add .
    git commit -m "Actualización X"
    git push -u origin main
    ```


## Fase de pruebas:
1. Descomentar la instrucción por defecto que trae el método **run** de **database\seeders\DatabaseSeeder.php** para crear 10 usuarios de prueba:
    ```php
    public function run()
    {
        \App\Models\User::factory(10)->create();
    }
    ```
2. Correr las migraciones junto a los seeders:
    ```bash
    php artisan migrate --seed
    ```
3. Realizar petición HTTP:
    + Método: POST
    + URL: http://127.0.0.1:8000/api/v1/users/login
    + Body:
        ```json
        {
            "email": "hhammes@example.com",
            "password": "password"
        }
        ```
    + **Respuesta para usuario autenticado**:
        ```json
        {
            "user": {
                "id": 1,
                "name": "Romaine Runte",
                "email": "hhammes@example.com",
                "email_verified_at": "2021-09-27T20:34:10.000000Z",
                "created_at": "2021-09-27T20:34:10.000000Z",
                "updated_at": "2021-09-27T20:34:10.000000Z"
            },
            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjM0ODE0ZjU2NDgzYTQ2Mjg4NzNhNjYzNDk2OGNjMGVjN2JkNWQ0MGEzM2RlNDkxYTIwZjE3Y2NkYWJjNzVhNjhjMjAzNzNhZTJiY2ViYzMiLCJpYXQiOjE2MzI3NzU3MjQuMTUyNDIzLCJuYmYiOjE2MzI3NzU3MjQuMTUyNDI4LCJleHAiOjE2NjQzMTE3MjQuMTQxMjA3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.D-PRgxvLgAR7TbuDxsoODPu_JkkRH6-F2-wYCVp48kevBIfm1d9GoGZs5R1MncpOHlPwoJiA8qSowJc-m62JmehTO16Xpui_CCzV3pxyhtxcHz2-_a3kZkBwtVESbpvV1oMlEQj85XpJDROj8DkCX9FwlnzdyB-BqcgEloKxsQII6OXjZ5Z0A-b-I-V02QxvhUZ2U4t8Ryq-fpOijDAT1FML0RxaqWJ9DoQCFd73EFeW9A0DDs6tqGz3U2eEl35-jU8i5KxsNI7HqtaAqt3b4TqwVf6gKKI0mepuF_blI7DJxHJDLKxPYwJ1FxPD2lelsJZDhX6pzQV57I8j6EyrRz_Tl0p8vuboBsUuM28QMyThn8l1hVkMMPec_sZFmRgo6kA7n0mVl7Jg-qUCoYUFF5uRqce3_TkSbwDnYs_VhIyJSKmzh-hq0Gc3iGeu4QMLuIzY8qn9rOFk9Mrj5F1W2zi3p9iFPjMR04t5vJXAAKFUbY1-Wkiy0JlQDWBT3ql1yHHP3ZMF-GcIjrUr0sEAfIaaQBUXS9TbBXoshmJM3imsOyAAqRb4wG2pQCzDC6NnCaENaAXGHivI6Xe6zozy-tjpWrNpzUI1UKvnIwgVMf7I5JTmdio8D2rzDsOkN_Cn2h-Vuvl9rPw4nynbVy-0roTzTMyVARx9O_utgxmijR8"
        }
        ```
    + **Respuesta para usuario no autenticado**:
        ```json
        {
            "message": "Usuario y/o contraseña invalido."
        }
        ```
4. sss


## Peticiones http que puede responder el proyecto api.restful:

### Usuarios:

#### Registrar un usuario:
+ Método: POST
+ URL: http://api.codersfree.test/v1/register
+ Body:
    + Form:
        ```
        Field name: name                      | Value: Pedro Bazó
        Field name: email                     | Value: bazo.pedro@gmail.com
        Field name: password                  | Value: 12345678
        Field name: password_confirmation     | Value: 12345678
        ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Login a un usuario:
+ Método: POST
+ URL: http://api.codersfree.test/v1/login
+ Body:
    + Form:
        ```
        Field name: email       | Value: bazo.pedro@gmail.com
        Field name: password    | Value: 12345678
        ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```


### Permisos de accesos:

#### Obtener token para un usuario:
+ Método: POST
+ URL: http://api.codersfree.test/oauth/token
    + Body:
        + Form:
            ```
            Field name: grant_type      | Value: password
            Field name: client_id       | Value: {Client ID del cliente tipo password}
            Field name: client_secret   | Value: {Client secret del cliente tipo password}
            Field name: username        | Value: {email del usuario a autorizar}
            Field name: password        | Value: {clave del usuario}
            ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```
#### Obtener autorización por cliente tipo password:
+ Headers:
    ```
    Header: Accept          | Value: application/json
    Header: Authorization   | Value: Bearer + (un espacio) + (access_token de la petición anterior sin las comillas dobles)
    ```

### Categorías:

#### Obtener las categorías:
+ Método: GET
+ URL: http://api.codersfree.test/v1/categories
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Crear una categoría:
+ Método: POST
+ URL: http://api.codersfree.test/v1/categories
+ Body:
    + Form:
        ```
        Field name: name    | Value: Categoría de prueba
        Field name: slug    | Value: categoria-de-prueba
        ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Obtener una categoría:
+ Método: GET
+ URL: http://api.codersfree.test/v1/categories/{id}
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Actualizar una categoría:
+ Método: PUT
+ URL: http://api.codersfree.test/v1/categories/{id}
+ Body:
    + Form-encode:
        ```
        Field name: name  | Value: Categoría de prueba actualizada
        Field name: slug  | Value: categoria-de-prueba-actualizada
        ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Eliminar una categoría:
+ Método: DELETE
+ URL: 
    ```
    http://api.codersfree.test/v1/categories/{id}
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Obtener las categorías y su relación con los posts:
+ Método: GET
+ URL: 
    ```
    http://api.codersfree.test/v1/categories?included=posts
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Obtener las categorías y su relación con los posts y el autor del post:
+ Método: GET
+ URL: 
    ```
    http://api.codersfree.test/v1/categories?included=posts.user
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Obtener una categoría y su relación con los posts:
+ Método: GET
+ URL: 
    ```
    http://api.codersfree.test/v1/categories/{id}?included=posts
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Obtener una categoría y su relación con los posts y el autor del post:
+ Método: GET
+ URL: 
    ```
    http://api.codersfree.test/v1/categories/1?included=posts.user
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

#### Obtener las categorías filtradas:
+ Método: GET
+ URL: 
    ```
    http://api.codersfree.test/v1/categories?filter[{Campo1}]={Valor1}&filter[{Campo2}]={Valor2}
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```
  
#### Obtener las categorías ordenadas:
+ Método: GET
+ URL: 
    ```
    http://api.codersfree.test/v1/categories?sort={Campo1,Campo2}
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```
+ **Nota**: Las categorías se ordenaran en orden ascendente, si se desea que se ordenen de manera descendente el campo debe ser precedido por el signo menos (-).

#### Obtener las categorías paginadas:
+ Método: GET
+ URL: 
    ```
    http://api.codersfree.test/v1/categories?perPage={RegistrosPorPágina}&page={Página}
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

### Posts

#### Obtener los posts:
+ Método: GET
+ URL: 
    ```
    http://api.codersfree.test/v1/posts
    ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```
**Nota**: para relacionar, ordenar, filtrar y paginar es análogo a como se hace para las categorías.

#### Registrar un post:
+ Método: POST
+ URL: 
    ```
    http://api.codersfree.test/v1/posts
    ```
    + Body:
        + Form:
            ```
            Field name: name        | Value: Título de prueba
            Field name: slug        | Value: titulo-de-prueba
            Field name: extract     | Value: Cualquier cosa
            Field name: body        | Value: Cualquier cosa
            Field name: category_id | Value: 1
            Field name: user_id     | Value: 1
            ```
+ Headers:
    ```
    Header: Accept  | Value: application/json
    ```

## Estandar para la entrega de endpoints en API RESTful

### Acceder a un recurso:
```
| Acción                            | Método    | Endpoint                              |
| --------------------------------- | --------- | ------------------------------------- |
| Obtener todos los recursos        | GET       | https:\\\\{dominio}\\{recurso}        |
| Obtener el recursoscon id=i       | GET       | https:\\\\{dominio}\\{recurso}\\{i}   |
| Enviar un recurso                 | POST      | https:\\\\{dominio}\\{recurso}        |
| Actualizar el recurso con id=i    | PUT       | https:\\\\{dominio}\\{recurso}\\{i}   |
| Eliminar el recurso con id=i      | DELETE    | https:\\\\{dominio}\\{recurso}\\{i}   |
```
+ **Nota 1**: El recurso debe escribirse en plurar y preferiblemente en inglés.
+ **Nota 2**: Cuando se intenta actualizar un recurso con el método **PUT**, en caso de no existir, se deberá crear.

### Acceder a los recursos de un recurso:
```
| Acción                            | Método    | Endpoint                                                                  |
| --------------------------------- | --------- | ------------------------------------------------------------------------- |
| Obtener todos los subrecursos del recurso con id=i    | GET   | https:\\\\{dominio}\\{recurso}\\{i}\\{subrecursos}        |
| Obtener el subrecurso con id=j del recurso con id=i   | GET   | https:\\\\{dominio}\\recurso}\\{i}\\{subrecursos}\\{j}    |
```
### Usar versonamiento:
```
https:\\\\{dominio}\\v{n}\\{recurso} 
n: número de versión.
```

### Uso de QueryString:
+ Para ordenar:
    ```
    https:\\\\{dominio}\\{recurso}?sort={campo}
    ```
+ Para filtrar:
    ```
    https:\\\\{dominio}\\{recurso}?filter[{campo}]={valor}
    ```
+ Para páginar:
    ```
    https:\\\\{dominio}\\{recurso}?perPage={registros por página}&page={página}
    ```

### Header:
+ En la cabecera de la petición http debe viajar:
    + Tokens o credenciales
    + Formato en que se desea recibir las respuestas

### Body:
+ En el cuerpo de la petición http debe viajar:
    + Los datos para crear un registro.
    + Los datos para actualizar un registro.

### Código de estado:
+ 20X: respuesta satisfactoria.
+ 400: solicitud incorrecta.
+ 401: acceso no autorizado.
+ 403: acceso autorizado pero no tiene permisos.
+ 404: recurso no autorizado o no fue encontrado.
+ 500: error interno del servidor.
+ 504: No puede responder a tiempo a la petición.

### Uso de los métodos:
+ GET: Solicitar registros.
+ POST: Crear registro.
+ PUT: Actualizar todos los campos de un registro y si no existe, entonces crearlo.
+ PATH: Actualizar parcialmente un registro.
+ DELETE: eliminar un registro.