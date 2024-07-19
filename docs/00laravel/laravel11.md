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
:::tip Nota
Cuando ejecutas "php artisan install:api" en **Laravel 11**, se recomienda agregar el trait **HasApiTokens** al modelo **User**, esto tiene un propósito específico relacionado con la autenticación y autorización en las API.
El trait **HasApiTokens** proporciona varias funcionalidades importantes:
+ **Generación de tokens de API**: Permite crear tokens de acceso para los usuarios, que pueden ser utilizados para autenticar solicitudes a tu API.
+ **Manejo de tokens**: Facilita la gestión de tokens, incluyendo la creación, revocación y verificación de tokens.
+ **Capacidades de Sanctum**: Este trait es parte del paquete Laravel Sanctum, que proporciona un sistema de autenticación ligero para SPAs (Single Page Applications), aplicaciones móviles y APIs simples basadas en tokens.
+ **Métodos útiles**: Añade métodos al modelo User para trabajar con tokens, como createToken(), tokens(), y otros.
+ **Integración con el sistema de autenticación**: Permite que el sistema de autenticación de Laravel reconozca y utilice estos tokens para proteger rutas y recursos de la API.
Al agregar este trait, estás preparando tu modelo **User** para trabajar eficientemente con autenticación basada en tokens, lo cual es crucial para la seguridad y el control de acceso en APIs.
:::
+ Ejecutar:
    ```bash
    php artisan install:api
    ```
+ Agregar trait **HasApiTokens** al modelo **User**:
    ```php title="...\app\Models\User.php"
    // ...
    use Laravel\Sanctum\HasApiTokens;

    class User extends Authenticatable
    {
        use /* ... */ HasApiTokens;
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