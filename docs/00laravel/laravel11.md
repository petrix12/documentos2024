---
title: Apuntes de Laravel 11
sidebar_label: "Apuntes de Laravel 11"
sidebar_position: 1
---

# APUNTES LARAVEL 11
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