---
title: Sistema de Historia Clínica en Laravel
sidebar_label: "Sistema de Historia Clínica"
sidebar_position: 100
---


# Proyecto Sistema de Historia Clínica en Laravel (2020-08)
+ **Repositorio**: https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel
+ **Curso**: https://www.youtube.com/playlist?list=PLS3ZgoVufwTmVTRZnxekoeST-C9OzKzKk

## VIDEO 01: GENERAR NUEVO PROYECTO LARAVEL
1. Crear proyecto:
    ```bash
	composer create-project laravel/laravel clinic "5.7.*"
    ```
2. COMMIT 1: "Proyecto Laravel 5.7 nuevo"
3. Iniciar repositorio: $ git init
4. Añadir archivos a la zona index: $ git add .
5. Guardar archivos en repositorio: $ git commit -m "Proyecto Laravel 5.7 nuevo"

## VIDEO 02: Instalación de Laravel
## VIDEO 03: CREAR UN HOST VIRTUAL
1. Agregar el siguiente código al final del archivo C:\Windows\System32\drivers\etc\hosts
### Host virtual para el proyecto Sistema de Historia Clínica en Laravel (Lado del cliente) 
```
127.0.0.1	clinic.com
```
:::warning NOTA
Editar con el block de notas en modo de administrador.
:::
2. Agregar el siguiente código al final del archivo C:\xampp\apache\conf\extra\httpd-vhosts.conf
### Host virtual para el proyecto Sistema de Historia Clínica en Laravel (Lado del servidor)
```
<VirtualHost *:80>
    DocumentRoot "C:\xampp\htdocs\cursos\02laravel_clinic\clinic\public"
    ServerName clinic.com
</VirtualHost>
```
:::warning NOTA
En el archivo C:\xampp\apache\conf\httpd.conf las línea:
```
Include conf/extra/httpd-vhosts.conf
```
y
```
LoadModule rewrite_module modules/mod_rewrite.so
```
no deben estar comentada con #.
:::
3.   Reiniciar el servidor Apache.

## VIDEO 03: CREAR SISTEMA DE AUTENTICACIÓN
1. En resources\views\welcome.blade.php cambiar Laravel por Historia Clínica App.
2. Agregar la implementación **MustVerifyEmail** a la clase **User**:
    ```php title="app\User.php"
    use Illuminate\Foundation\Auth\User as Authenticatable;

    class User extends Authenticatable implements MustVerifyEmail
    {
        use Notifiable;
        // ...
    }
    ```
3. Crear sistema de autenticación:
    ```bash
    $ php artisan make:auth
    ```
4. COMMIT 2: "Crear sistema autenticación"
5. Añadir archivos a la zona index: $ git add .
6. Guardar archivos en repositorio: $ git commit -m "Crear sistema autenticación"
:::tip Nota
Ver todos los commit's:
    ```bash 
    git log --pretty=oneline
    ```
:::

## VIDEO 05: CONFIGURAR BD
1. Establecer juego de caracteres **utf8_unicode_ci**:
    ```php title="config\database.php"
    'mysql' => [
        'driver' => 'mysql',
        'host' => env('DB_HOST', '127.0.0.1'),
        'port' => env('DB_PORT', '3306'),
        'database' => env('DB_DATABASE', 'forge'),
        'username' => env('DB_USERNAME', 'forge'),
        'password' => env('DB_PASSWORD', ''),
        'unix_socket' => env('DB_SOCKET', ''),
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => '',
        'strict' => true,
        'engine' => null,
    ],
    ```
2. Configurar conexión de BD:
    ```env title=".env"
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=clinic
    DB_USERNAME=root
    DB_PASSWORD=
    ```
3. Crear BD clinic en MySQL con el juego de caracteres **utf8_unicode_ci**.
4. Ejecutar migración:
    ```bash
    php artisan migrate
    ```
5. COMMIT 3: "Configurar BD"
6. Añadir archivos a la zona index: $ git add .
7. Guardar archivos en repositorio: $ git commit -m "Configurar BD"

## VERIFICACIÓN DE EMAIL
1. En **routes\web.php** reemplazar
    ```php
        Auth::routes();
    ```
    por
    ```php
    Auth::routes(['verify' => true]);
    ```

## VIDEO 06: Diseño de diagrama Entidad - Relación (E-R)
+ Se recomienda descargar yEd Graph Editor en https://www.yworks.com/downloads#yEd

## VIDEO 07:
1. Registrarse el Mailtrap en https://mailtrap.io
2. Crear Inbox de nommbre clinic.
3. Copiar credenciales para Laravel y pegarlas en el archivo **.env**:
    ```env title=".env"
    MAIL_MAILER=smtp
    MAIL_HOST=smtp.mailtrap.io
    MAIL_PORT=2525
    MAIL_USERNAME=635f7f7d9b8246
    MAIL_PASSWORD=d9e996c89b4412
    MAIL_ENCRYPTION=tls
    ```
4. Registrar un usuario de prueba en nuestro proyecto.
    http://clinic.com/register
5. Ir a Mailtrap y verificar el email: https://mailtrap.io/signin
6. Resetear contraseña en el proyecto que estamos creando: http://clinic.com/password/reset
7. En el archivo **.env** cambiar la línea:
    ```env
    APP_URL=http://localhost
    ```
    por
    ```env
    APP_URL=http://clinic.com
    ```
8. COMMIT 4: "Verificación de email"
9. Añadir archivos a la zona index: $ git add .
10. Guardar archivos en repositorio: $ git commit -m "Verificación de email"

## VIDEO 08:
1. Configuración de Desktop GitHub:
    1. Descargar Desktop GitHub en https://desktop.github.com e instalar
    2. En caso de haber iniciado el repositorio: $ git init
    3. Ejecutar Desktop GitHub y añadir el repositorio del proyecto

## VIDEO 09:
+ Establecer diagrama E-R para la estructura de roles y permisos. Parte I

## VIDEO 10:
+ Establecer diagrama E-R para la estructura de roles y permisos. Parte II

## ESTRUCTURA PARA SISTEMA DE ROLES Y PERMISOS
1. Crear migración junto con su modelo de la tabla roles:
    ```bash
    php artisan make:model Role -m -c -r
    ```

## VIDEO 11:
1. Crear migración junto con su modelo de la tabla permissions:
    ```bash
    php artisan make:model Permission -m -c -r
    ```
2. Modificar el método up en **database\migrations\2021_01_31_192808_create_roles_table.php** para agregar campos a la table roles:
    ```php title="database\migrations\2021_01_31_192808_create_roles_table.php"
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('description')->nullable();
            $table->timestamps();
        });
    }
    ```

## VIDEO 12:
1. Establecer los atributos de asignación masiva y relaciones entre modelos:
    ```php title="app\Role.php"
    class Role extends Model
    {
        // ATRIBUTOS DE ASIGNACIÓN MASIVA
        protected $fillable = [
            'name', 'description', 'slug'
        ];

        // RELACIONES ENTRE LOS MODELOS
        public function permissions(){
            // Relación uno a muchos
            return $this->hasMany('app\Permission');
        }

        public function users(){
            // Relación muchos a muchos
            return $this->belongsToMany('app\User');
        }
        // ...
    }
    ```

## VIDEO 13:
1. Modificar el método **up** en **database\migrations\2021_01_31_193703_create_permissions_table.php** para agregar campos a la table permissions:
    ```php title="database\migrations\2021_01_31_193703_create_permissions_table.php"
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('description')->nullable();
            $table->unsignedInteger('role_id');
            $table->foreign('role_id')->references('id')->on('roles')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }
    ```
2. Establecer los atributos de asignación masiva y relaciones entre modelos en **app\Permission.php**:
    ```php title="app\Permission.php"
    class Permission extends Model
    {
        // ATRIBUTOS DE ASIGNACIÓN MASIVA
        protected $fillable = [
            'name', 'slug', 'description'
        ];

        // RELACIONES ENTRE LOS MODELOS
        public function role(){
            // Relación muchos a uno
            return $this->belongsTo('App\Role');
        }

        public function users(){
            // Relación muchos a muchos
            return $this->belongsToMany('App\User')->withTimestamps();
        }
        // ...
    }
    ```
3. Establecer las relaciones entre modelos en **app\User.php**:
    ```php title="app\User.php"
    class User extends Authenticatable implements MustVerifyEmail
    {
        // ...
        // RELACIONES ENTRE LOS MODELOS
        public function permissions(){
            // Relación muchos a muchos
            return $this->belongsToMany('app\Permission');
        }

        public function roles(){
            // Relación muchos a muchos
            return $this->belongsToMany('app\Role')->withTimestamps();
        }
        // ...
    }
    ```

## VIDEO 14:
1. Crear tabla pivote en la migración para role_user:
    ```bash
    php artisan make:migration create_role_user_table --create=role_user
    ```
    + **NOTA**: incluir en la migración los campos:
        + role_id	int(10)
        + user_id	int(10)
2. Crear tabla pivote en la migración para permission_user:
    ```bash
    php artisan make:migration create_permission_user_table --create=permission_user
    ```
    + **NOTA**: incluir en la migración los campos:
        + permission_id	int(10)
        + user_id	int(10)

3. Modificar el método up en **database\migrations\2021_02_01_140320_create_role_user_table.php** para agregar campos y restricciones a la table role_user:
    ```php title="database\migrations\2021_02_01_140320_create_role_user_table.php"
    public function up()
    {
        Schema::create('role_user', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('role_id');
            $table->foreign('role_id')->references('id')->on('roles')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }
    ```
4. Modificar el método up en **database\migrations\2021_02_01_140535_create_permission_user_table.php** para agregar campos y restricciones a la table permission_user:
    ```php title="database\migrations\2021_02_01_140535_create_permission_user_table.php"
    public function up()
    {
        Schema::create('permission_user', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('permission_id');
            $table->foreign('permission_id')->references('id')->on('permissions')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }
    ```
5. Ejecutar migración:
    ```bash
    php artisan migrate
    ```
6. En caso de querer deshacer la migración ejecutar:
    ```bash
    php artisan migrate:rollback 
    ```
7. COMMIT 5: "Estructura para sistema de roles y permisos" 
8. Añadir archivos a la zona index: $ git add .
9. Guardar archivos en repositorio: $ git commit -m "Estructura roles y permisos" 

## VIDEO 15:
+ Introducción a framework materialize y al motor de plantillas blade de laravel

## VIDEO 16: VISTAS Y DISEÑO DE PLANTILLAS
1. Descargar plantilla basada en el framework materialize en https://bit.ly/2NCb2rS
2. Crear directorios:
    + resources\views\theme
    + resources\views\theme\backoffice
    + resources\views\theme\backoffice\layouts
    + resources\views\theme\backoffice\layouts\includes
    + resources\views\theme\backoffice\pages
    + resources\views\theme\frontoffice
    + resources\views\theme\frontoffice\layouts
    + resources\views\theme\frontoffice\pages
3. Crear archivos:
    + resources\views\theme\backoffice\layouts\admin.blade.php
4. Copiar el contenido del archivo index.html de la plantilla descargada en el archivo **admin.blade.php** creado anteriormente y modificarla.

## VIDEO 17:
+ Adaptación del archivo index.html de la plantilla de materialize a nuestro proyecto 
+ soportes\template\index.html

## VIDEO 18:
1. Crear directorios:
    + public\assets
    + public\assets\backoffice
    + public\assets\backoffice\css
    + public\assets\frontoffice\js
    + public\assets\frontoffice
    + public\assets\frontoffice\css
    + public\assets\frontoffice\js
    + public\assets\plugins
2. En el directorio public\assets\backoffice\css copiar todos los archivos css requeridos en **resources\views\theme\backoffice\layouts\admin.blade.php** de la plantilla descargada anteriormente.
3. Copiar el contenido de la carpeta vendor de la plantilla en **public\assets\plugins**
4. En el directorio public\assets\backoffice\js copiar todos los archivos js requeridos en **resources\views\theme\backoffice\layouts\admin.blade.php** de la plantilla descargada anteriormente.

## VIDEO 19:
1. Crear **resources\views\theme\backoffice\layouts\includes\head.blade.php**
2. Crear **resources\views\theme\backoffice\layouts\includes\loader.blade.php**
3. Crear **resources\views\theme\backoffice\layouts\includes\header.blade.php**
4. Crear **resources\views\theme\backoffice\layouts\includes\left-sidebar.blade.php**
5. Crear **resources\views\theme\backoffice\layouts\includes\footer.blade.php**
6. Crear **resources\views\theme\backoffice\layouts\includes\foot.blade.php**

## VIDEO 20:
+ Insertar yield en resources\views\theme\backoffice\layouts\admin.blade.php
+ Insertar yield en resources\views\theme\backoffice\layouts\head.blade.php
1. Crear vista resources\views\theme\backoffice\pages\demo.blade.php
2. Agregar una ruta demo en routes\web.php
    ```php title="routes\web.php"
    Route::get('demo', function () {
        return view('theme.backoffice.pages.demo');
    });
    ```

## VIDEO 21:
+ Pegar las carpeta fonts e images de la plantilla en public\assets y
+ adecuar todas las rutas de imagenes y fuentes.
1. COMMIT 6: "Vistas y diseño de plantillas"
2. Añadir archivos a la zona index: $ git add .
3. Guardar archivos en repositorio: $ git commit -m "Vistas y diseño de plantillas"

## VIDEO 22: CRUD ROLES
1. Eliminar o comentar todas las rutas de routes\web.php, dejar solo:
    ```php title="routes\web.php"
    Auth::routes(['verify' => true]);
    ```
+ Para ver las rutas existentes escribir:
```bash
php artisan rout:list
```
2. Agregar la siguiente ruta a routes\web.php:
    ```php title="routes\web.php"
    // Grupo de rutas del backoffice
    Route::group(['middleware' => ['auth'], 'as' => 'backoffice.'], function(){
        // Route::get('role', 'RoleController@index')->name('role.index');
        Route::resource('role', 'RoleController');
    });
    ```
3. Modificar el método index del controlador app\Http\Controllers\RoleController.php.

## VIDEO 23:
1. Crear policia relacionada con el modelo Role:
    ```bash
    php artisan make:policy RolePolicy --model=Role
    ```
2. Registrar policia en **app\Providers\AuthServiceProvider.php**
    ```php title="app\Providers\AuthServiceProvider.php"
    class AuthServiceProvider extends ServiceProvider
    {
        // ...
        protected $policies = [
            //'App\Model' => 'App\Policies\ModelPolicy',
            'App\Role' => 'App\Policies\RolePolicy',
        ];
        // ...
    }
    ```
3. En la clase **RolePolicy** de la policia **app\Policies\RolePolicy.php** modificar el método **create**.

## VIDEO 24: Diseño del formulario resources\views\theme\backoffice\pages\role\create.blade.php (Parte I)
1. Crear carpeta resources\views\theme\backoffice\pages\role
2. Crear archivo **resources\views\theme\backoffice\pages\role\create.blade.php**
    + Basado en Materialize (https://materializecss.com/)
3. Modificar el método create de la clase RoleController del controlador **app\Http\Controllers\RoleController.php**

## VIDEO 25: Diseño del formulario resources\views\theme\backoffice\pages\role\create.blade.php (Parte II)
1. Modificar el método store de la clase RoleController del controlador **app\Http\Controllers\RoleController.php**0

## VIDEO 26: Configuración de Role/StoreRequest
1. Crear request para el método store del controlador Role:
    ```bash
    php artisan make:request Role/StoreRequest
    ```
2. Modificar el archivo **app\Http\Requests\Role\StoreRequest.php**
3. Añadir el siguiente código en '**use**' a **app\Http\Controllers\RoleController.php**:
    ```php
    use App\Http\Requests\Role\StoreRequest;
    ```

## VIDEO 27:
1. Establecer almacenamiento de registros en **app\Role.php** creando el método **store**.

## VIDEO 28:
1. Crear archivo **resources\views\theme\backoffice\pages\role\show.blade.php**
    + Basado en Materialize (https://materializecss.com/)

## VIDEO 29: Rediseño del método index del controlador app\Http\Controllers\RoleController.php
1. Crear archivo **resources\views\theme\backoffice\pages\role\index.blade.php**
    + Basado en Materialize (https://materializecss.com/)

## VIDEO 30:
1. Crear archivo **resources\views\theme\backoffice\pages\role\edit.blade.php**
    + Basado en Materialize (https://materializecss.com/)
2. Modificar el método edit de la clase **RoleController** del controlador **app\Http\Controllers\RoleController.php**
3. Modificar el método update de la clase RoleController del controlador **app\Http\Controllers\RoleController.php**

## VIDEO 31:
1. Crear request para el método update del controlador **Role**:
    ```bash
    php artisan make:request Role/UpdateRequest
    ```
2. Modificar el archivo **app\Http\Requests\Role\UpdateRequest.php**
3. Añadir el siguiente código en '**use**' a **app\Http\Controllers\RoleController.php**:
    ```php
    use App\Http\Requests\Role\UpdateRequest;
    ```

## VIDEO 32: Culminación del diseño del método update del controlador app\Http\Controllers\RoleController.php
1. Establecer actualización de registros en **app\Role.php** creando el método **my_update**

## VIDEO 33: Inducción a la Libreria SweetAlert
+ https://github.com/realrashid/sweet-alert
+ https://realrashid.github.io/sweet-alert/
+ https://github.com/sweetalert2/sweetalert2
+ https://sweetalert2.github.io/
1. Instalación de la Libreria SweetAlert:
    ```bash
    composer require realrashid/sweet-alert
    ```
    + Se incorpora **@include('sweetalert::alert')** en **resources\views\theme\backoffice\layouts\includes\foot.blade.php**
2. Para configurar la Libreria SweetAlert:
    ```bash
    php artisan sweetalert:publish
    ```
3. Incorporar en **app\Role.php**:
    ```
    Use Alert;
    ```

## VIDEO 34: Como invocar la libreria SweetAlert de forma local
## VIDEO 35: Adecuación del archivo resources\views\theme\backoffice\pages\role\show.blade.php para eliminar registro
## VIDEO 36:
1. Modificar el método destroy de la clase **RoleController** del controlador **app\Http\Controllers\RoleController.php**

## VIDEO 37: Observaciones a ciertas estandarizaciones de Materialize
+ Vaciar table roles
1. Crear archivo **resources\views\theme\backoffice\layouts\includes\breadcrumbs.blade.php**
    + Basado en Materialize (https://materializecss.com/)
2. COMMIT 7: "CRUD de roles"
3. Añadir archivos a la zona index: $ git add .
4. Guardar archivos en repositorio: $ git commit -m "CRUD de roles"

## VIDEO 38: Repaso de la estructura y documentación del proyecto
## VIDEO 39: CRUD PERMISOS
1. Definir ruta en grupo de backoffice del archivo routes\web.php:
    ```php
    // Grupo de rutas del backoffice
    Route::group(['middleware' => ['auth'], 'as' => 'backoffice.'], function(){
        // ...
        Route::resource('permission', 'PermissionController');
    });
    ```
2. Crear policia relacionada con el modelo Permission:
    ```bash
    php artisan make:policy PermissionPolicy --model=Permission
    ```
3. Registrar policia del modelo Permission en app\Providers\AuthServiceProvider.php
    ```php
    protected $policies = [
        // ...
        'App\Permission' => 'App\Policies\PermissionPolicy',
    ];
    ```
4. Crear directorio resources\views\theme\backoffice\pages\permission
5. Crear los archivos de vistas del CRUD permisos:
    + resources\views\theme\backoffice\pages\permission\create.blade.php
    + resources\views\theme\backoffice\pages\permission\edit.blade.php
    + resources\views\theme\backoffice\pages\permission\index.blade.php
    + resources\views\theme\backoffice\pages\permission\show.blade.php

## VIDEO 40: Trabajar vista y método create de permisos
1. Modificar el método **create** del controlador **app\Http\Controllers\PermissionController.php**
2. Editar vista **resources\views\theme\backoffice\pages\permission\create.blade.php**
3. Modificar el método **store** del controlador **app\Http\Controllers\PermissionController.php**

## VIDEO 41:
1. Crear request para el método store del controlador **Permission**:
    ```bash
    php artisan make:request Permission/StoreRequest
    ```
2. Incluir llamada del request en el controlador **app\Http\Controllers\PermissionController.php**
    ```php title="app\Http\Controllers\PermissionController.php"
    use App\Http\Requests\Permission\StoreRequest;
    ```
3. Agregar método **store** al modelo **app\Permission.php**
4. Modificar el método **authorize** de la clase **app\Http\Requests\Permission\StoreRequest.php**
5. Editar el archivo **app\Http\Requests\Permission\StoreRequest.php**

## VIDEO 42:
1. Modificar el método **show** del controlador **app\Http\Controllers\PermissionController.php**
2. Editar **resources\views\theme\backoffice\pages\permission\show.blade.php**

## VIDEO 43:
1. Modificar el método **index** del controlador **app\Http\Controllers\PermissionController.php**
2. Editar **resources\views\theme\backoffice\pages\permission\index.blade.php**

## VIDEO 44: 
1. Modificar el método **edit** del controlador **app\Http\Controllers\PermissionController.php**
2. Editar **resources\views\theme\backoffice\pages\permission\edit.blade.php**
3. Añadir clase **Role** al controlador **app\Http\Controllers\PermissionController.php**
    ```php
    use App\Role;
    ```
4. Modificar el método **update** del controlador **app\Http\Controllers\PermissionController.php**

## VIDEO 45:
1. Establecer actualización de registros en **app\Permissin.php** creando el método **my_update**:

## VIDEO 46:
1. Crear request para el método **update** del controlador **Permission**:
    ```bash
    php artisan make:request Permission/UpdateRequest
    ```
2. Modificar el archivo **app\Http\Requests\Permission\UpdateRequest.php**
3. Añadir el siguiente código en '**use**' a **app\Http\Controllers\PermissionController.php**:
    ```php
    use App\Http\Requests\Permission\UpdateRequest;
    ```

## VIDEO 47:
1. Modificar el método **destroy** del controlador **app\Http\Controllers\PermissionController.php**
2. COMMIT 8: "CRUD de permisos"
3. Añadir archivos a la zona index: $ git add .
4. Guardar archivos en repositorio: $ git commit -m "CRUD de permisos"

## VIDEO 48: Vaciar tablas de roles y permisos de la BD clinic
+ ASIGNACIÓN DE ROLES A USUARIOS
1. Crear rol de administrador:
    + Rol: Administrador
    + Descripción: Este es el rol que tiene todos los permisos dentro del sistema

## VIDEO 49:
1. Crear controlador para el modelo app\User.php
    ```bash
    php artisan make:controller UserController -r
    ```
2. Crear carpeta resources\views\theme\backoffice\pages\user
3. Crear los archivos de vistas del CRUD usuarios:
    + resources\views\theme\backoffice\pages\user\create.blade.php
    + resources\views\theme\backoffice\pages\user\edit.blade.php
    + resources\views\theme\backoffice\pages\user\index.blade.php
    + resources\views\theme\backoffice\pages\user\show.blade.php
4. Editar resources\views\theme\backoffice\pages\user\index.blade.php
5. Modificar el método index del controlador app\Http\Controllers\UserController.php
6. Agregar el la cabecera el modelo de usuario en el controlador app\Http\Controllers\UserController.php
    ```php title="app\Http\Controllers\UserController.php"
    use App\User;
    ```
7. Definir grupo de rutas para el CRUD de usuarios en routes\web.php:
    ```php title="routes\web.php"
    // Grupo de rutas del backoffice
    Route::group(['middleware' => ['auth'], 'as' => 'backoffice.'], function(){
        // ...
        Route::resource('user', 'UserController');
    });
    ```

## VIDEO 50:
1. Editar resources\views\theme\backoffice\pages\user\show.blade.php
2. Modificar el método show del controlador app\Http\Controllers\UserController.php

## VIDEO 51:
1. Crear directorio **resources\views\theme\backoffice\pages\user\includes**
2. Crear plantilla **resources\views\theme\backoffice\pages\user\includes\user_nav.blade.php**
3. Crear método (assign_role) para mostrar formulario para asignar rol en el controlador **app\Http\Controllers\UserController.php**
4. Crear método (role_assignment) para asignar los roles en la bd en el controlador **app\Http\Controllers\UserController.php**
5. Crear vista **resources\views\theme\backoffice\pages\user\assign_role.blade.php**

## VIDEO 52:
1. Crear ruta para la asignación de roles en **routes\web.php**
    ```php title="routes\web.php"
    Route::resource('user', 'UserController');
    Route::get('user/{user}/assign_role', 'UserController@assign_role')->name('user.assign_role');
    Route::resource('role', 'RoleController');
    ```
2. Crear ruta para guardar la asignación de roles en la bd en **routes\web.php**:
    ```php title="routes\web.php"
    Route::get('user/{user}/assign_role', 'UserController@assign_role')->name('user.assign_role');
    Route::post('user/{user}/role_assignment', 'UserController@role_assignment')->name('user.role_assignment');
    Route::resource('role', 'RoleController');
    ```

## VIDEO 53:
1. Crear rol paciente:
    + Nombre: Paciente
    + Descripción: Rol predeterminado del sistema
2. Crear rol medico:
    + Nombre: Medico
    + Descripción: Atiende a pacientes
3. Agregar el la cabecera el modelo de rol en el controlador **app\Http\Controllers\UserController.php**:
    ```php
    use App\Role;
    ```

## VIDEO 54:
:::tip NOTA
Si en la migración respectiva no creaste los campos de claves foraneas para la tabla role_user, entonces crear los siguientes campos:
    + role_id	int(10)
    + user_id	int(10)
:::

## VIDEO 55:
1. Crear método de validación **has_role** en el modelo **app\User.php**
+ COMMIT 9: "Asignación de roles a usuarios"
+ Añadir archivos a la zona index: $ git add .
+ Guardar archivos en repositorio: $ git commit -m "Asignación de roles a usuarios"

## VIDEO 56: ASIGNACIÓN DE PERMISOS
1. Crear ruta para la asignación de permisos en **routes\web.php**:
    ```php title="routes\web.php"
    Route::post('user/{user}/role_assignment', 'UserController@role_assignment')->name('user.role_assignment');
    Route::get('user/{user}/assign_permission', 'UserController@assign_permission')->name('user.assign_permission');
    Route::resource('role', 'RoleController');
    ```
2. Crear ruta para guardar la asignación de permisos en la bd en routes\web.php
    ```php title="routes\web.php"
    Route::get('user/{user}/assign_permission', 'UserController@assign_permission')->name('user.assign_permission');
    Route::post('user/{user}/permission_assignment', 'UserController@permission_assignment')->name('user.permission_assignment');
    Route::resource('role', 'RoleController');
    ```
3. Crear método (assign_permission) para mostrar formulario para asignar permisos en el controlador **app\Http\Controllers\UserController.php**
4. Crear método (permission_assignment) para asignar los permisos en la bd en el controlador **app\Http\Controllers\UserController.php**

## VIDEO 57:
+ Reeditando **resources\views\theme\backoffice\pages\user\assign_permission.blade.php**
+ Reeditando **app\Http\Controllers\UserController.php**

## VIDEO 58:
:::tip NOTA
Si en la migración respectiva no creaste los campos de claves foraneas para la tabla permission_user,entonces crear los siguientes campos:
+ permission_id	int(10)
+ user_id	int(10)
:::
1. Crear los siguientes permisos:
    + Nombre: admin_1
    + Rol: Administrador
    + Descripción: ...

    + Nombre: admin_2
    + Rol: Administrador
    + Descripción: ...

    + Nombre: admin_3
    + Rol: Administrador
    + Descripción: ...

:::tip NOTA
Y siguiendo la misma tónica, crear tres permisos por cada rol.
:::
2. Crear método de validación has_permission en el modelo app\User.php
3. COMMIT 10: "Asignación de permisos"
4. Añadir archivos a la zona index: $ git add .
5. Guardar archivos en repositorio: $ git commit -m "Asignación de permisos"

## VIDEO 59: CONFIGURACIÓN PARA EL ROL ADMINISTRADOR
1. Editar el archivo .env y escribir en la última línea:
    ```env title=".env"
    ADMIN_ROLE=administrador
    ```
2. Editar el archivo config\app.php
    ```php title="config\app.php"
    <?php

    return [
        'admin_role' => env('ADMIN_ROLE', 'admin'),
        // ...
    ]
    ```
3. Agregar el método de validación is_admin en el modelo app\User.php
4. COMMIT 11: "Configuración rol administrador"
5. Añadir archivos a la zona index: $ git add .
6. Guardar archivos en repositorio: $ git commit -m "Configuración rol administrador"

## VIDEO 60: INTEGRIDAD EN LOS PERMISOS
1. Crear métod verify_permission_integrity en el módelo app\User.php
2. COMMIT 12: "Integridad en los permisos"
3. Añadir archivos a la zona index: $ git add .
4. Guardar archivos en repositorio: $ git commit -m "Integridad en los permisos"

## VIDEO 61: ASIGNACIÓN MASIVA DE PERMISO A ROLES
1. Crear método role_assignment en el modelo app\User.php
2. Crear método permission_mass_assignment en el modelo app\User.php
3. COMMIT 13: "Asignación masiva de permisos a roles"
4. Añadir archivos a la zona index: $ git add .
5. Guardar archivos en repositorio: $ git commit -m "Asignación masiva de permisos a roles"

## VIDEO 62: ASIGNACIÓN DE ROL POR DEFECTO
1. Crear ruta welcome en **routes\web.php**.
2. Crear ruta home en **routes\web.php**.
3. Modificar el método **create** del controlador **app\Http\Controllers\Auth\RegisterController.php**.
4. Registrar un nuevo usuario:
    + Nombre: Nuevo usuario
    + Correo: nuevo@usuario.com
    **NOTA**: Autenticar el usuario con la cuenta de Mailtrap creada al inicio.
5. Editar el archivo **.env** y escribir en la última línea:
    ```env title=".env"
    PATIENT_ROLE=paciente
    ```
6. Editar el archivo **config\app.php**:
    ```php title="config\app.php"
    <?php

    return [
        'admin_role' => env('ADMIN_ROLE', 'admin'),
        'patient_role' => env('PATIENT_ROLE', 'paciente'),
        // ...
    ]
    ```
7. COMMIT 14: "Asignación de rol por defecto"
8. Añadir archivos a la zona index: $ git add .
9. Guardar archivos en repositorio: $ git commit -m "Asignación de rol por defecto"
10. Creamos un nuevo repositorio en https://github.com. Le damos el nombre: Sistema de Historia Clínica en Laravel
11. Desde la terminal:
    ```bash
    git remote add origin https://github.com/petrix12/Sistema-de-Historia-Cl-nica-en-Laravel.git
    git push -u origin master
    ```