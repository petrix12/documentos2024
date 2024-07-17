---
title: Apuntes de Laravel 11
sidebar_label: "Apuntes de Laravel 11"
sidebar_position: 0
---

# APUNTES LARAVEL 11
:::tip Notas 1
+ Para trabajar con Laravel 11 es importante trabajar con una versión de PHP 8.2 o superior.
+ En **php.ini** descomentar:
    ```
    extension=zip
    ```
+ Actualizar la versión de Composer a la 2.7 o superior.
+ Instalar y/o actualizar Git y Node.
:::

:::tip Nota 2
Para tener disponible un servidor web con PHP, Composer, Nginx, Node, SQLite y Laravel:
+ Laravel Herd para Windows: https://herd.laravel.com/windows
:::

## Habilitar soporte para API
+ Ejecutar:
    ```bash
    php artisan install:api
    ```
+ Agregar trait **HasApiTokens** al modelo **User**:
    ```php title="...\app\Models\User.php"
    //...
    class User extends Authenticatable
    {
        use HasApiTokens;
        // ...
    }
    ```

## Crear archivo de rutas:
### Forma 1: registrando en bootstrap\app.php.
1. Crear archivo de rutas, por ejemplo **...\routes\admin.php**.
2. Registrar el archivo de rutas en **...\bootstrap\app.php**.
    ```php title="...\bootstrap\app.php"
    // ...
    ->withRouting(
        // ...
        then: function() {
            Route::middleware('auth:web')
                ->prefix('admin')
                ->group(base_path('routes/admin.php'));
        }
    )
    // ...
    ```
### Forma 2: registrando en otro archivo de rutas.
1. Crear archivo de rutas, por ejemplo **...\routes\admin.php**.
2. Modificar el archivo de rutas **...\routes\web.php** o **...\routes\api.php** según corresponda:
    ```php
    // ...
    // Registrar rutas del archivo admin.php
    require __DIR__.'/admin.php';
    // ...
    ```