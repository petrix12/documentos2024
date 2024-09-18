---
title: Subir múltiples archivos en Laravel
sidebar_label: "Subir múltiples archivos"
sidebar_position: 99
---


# Cómo subir múltiples archivos en Laravel
+ **Repositorio**: https://github.com/petrix12/AppFileLaravel
+ **Curso**: https://www.udemy.com/course/como-subir-multiples-archivos-en-laravel

## Diseño MVC básico
1. Crear proyecto: 
    ```bash
    laravel new file --jet
    ```
    + Versión: Laravel Framework 8.29.0
2. Ejecutar: 
    ```bash
    npm install
    npm run dev
    ```
3. Crear modelo **File**:
    ```bash
    php artisan make:model File -m
    ```
4. Crear controlador:
    ```bash
    php artisan make:controller FileController -r
    ```
    :::tip Nota
    Solamente trabajaremos con los métodos **index**, **create** y **store** del controlador **FileController**.
    :::
5. Agregar campos **name**, **code_name** y **user_id** a la migración de la tabla **files**:
    ```php
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nombre del archivo
            $table->text('code_name'); // Nombre del archivo encriptado
            $table->unsignedBigInteger('user_id');   // Relación con los usuarios
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }
    ```
6. Indicamos los campos de asignación masiva en el modelo **File**
    ```php
    protected $fillable = [
        'name',
        'code_name',
        'user_id'
    ];
    ```
7. Configurar el archivo de variable de entorno **.env** con una bd.
8. Ejecutar migración:
    ```bash
    php artisan migrate
    ```
9. Adecuamos la vista dashboard a nuestro proyecto.
10. Agregamos la ruta en **routes\web.php**:
    ```php title="routes\web.php"
    Route::post('/upload', [FilesController::class, 'store'])->name('user.files.store');
    ```
11. Programar el método store del controlador **FileController**.
12. Crear enlace simbólico de public a storage:
    ```bash
    php artisan storage:link
    ```

## Notificaciones (SweetAlert)
+ URL: https://github.com/realrashid/sweet-alert
1. Ejecutar:
    ```bash
    composer require realrashid/sweet-alert
    ```
2. Agregar a **config\app.php** en providers
    ```php title="config\app.php"
    'providers' => [
        /*
        * Package Service Providers...
        */
        RealRashid\SweetAlert\SweetAlertServiceProvider::class,
        // ...
    ],
    ```
3. Agregar a **config\app.php** en aliases
    ```php title="config\app.php"
    'Alert' => RealRashid\SweetAlert\Facades\Alert::class,
    ```
4. Agregar a la cabecera del controlador **FileController**:
    ```php
    use RealRashid\SweetAlert\Facades\Alert;
    ```
5. Insertar en la sección content de **resources\views\layouts\app.blade.php**:
    ```php
    @include('sweetalert::alert', ['cdn' => "https://cdn.jsdelivr.net/npm/sweetalert2@9"])
    ```
    ::: tip Nota
    Si falla, reemplazar por: 
    ```php
    @include('sweetalert::alert')
    ```
    :::

## Listar archivos
1. Crear otro menú de navegación en resources\views\navigation-menu.blade.php
    ```html
    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
        <x-jet-nav-link href="{{ route('user.files.index') }}" :active="request()->routeIs('user.files.index')">
            {{ __('Mis archivos') }}
        </x-jet-nav-link>
    </div>
    ```
2. Agregar ruta en **routes\web.php**
    ```php title="routes\web.php"
    Route::get('/files', [Controller::class, 'index'])->name('user.files.index');
    ```
3. Crear vista para el método **index** del controlador **FileController**: 
    + resources\views\index.blade.php
4. Programar el método **index** del controlador **FileController**.
5. Seleccionar un modelo de tabla de bootstrap y para el diseño del la vista index.
    + URL: https://getbootstrap.com/
6. Insertar CDN de estilos Bootstrap en resources\views\layouts\app.blade.php
    ```html
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    ```

## Limitar el acceso a los archivos
1. Agregar ruta a **routes\web.php**:
    ```php tilte="routes\web.php"
    Route::get('/files/{file}', [FilesController::class, 'store'])->name('user.files.show');
    ```
2. Programar el método **show** del controlador **FileController**.
    :::warning OJO
    Solventar problema:
        + Forbidden
        + You don't have permission to access this resource.
        + Apache/2.4.46 (Win64) OpenSSL/1.1.1h PHP/7.4.15 Server at file.test Port 80
    :::

## Eliminar archivo
1. Agregar ruta a **routes\web.php**:
    ```php tilte="routes\web.php"
    Route::delete('/delet-file/{file}', [FilesController::class, 'destroy'])->name('user.files.destroy');
    ```
2. Programar el método **destroy** del controlador **FileController**.


