---
title: Curso de Laravel 8
sidebar_label: "Curso de Laravel 8"
sidebar_position: 100
---

# Curso Laravel 8 desde cero
+ **Repositorio**: https://github.com/petrix12/Curso-Laravel-8-desde-cero---cursosdesarrolloweb.es
+ **Curso**: https://www.cursosdesarrolloweb.es/course/curso-laravel-8-desde-cero

## Instalar Composer en Windows
+ Descargar y ejecutar instalador.

## Instalar el instalador de Laravel
```bash
composer global require laravel/installer
```
:::tip NOTA
Lo instala con la última versión de Laravel instalada en la PC.
:::

## Crear un nuevo proyecto Laravel via instalador
```bash
laravel new nombre_proyecto
```

## Crear un nuevo proyecto Laravel via composer
```bash
composer create-project --prefer-dist laravel/laravel nombre_proyecto
```

## Ejecutar proyecto en servidor local con artisan
```bash
php artisan serve
```

## ARCHIVOS MODIFICADOS
1. Editar: **routes\web.php**
2. Crear:
    ```php title="app\Http\Controllers\HolaController.php"
    public function __invoke(string $name){
        return "Hols {$name}";
    }
    ```
3. Eliminar: **app\Http\Controllers\HolaController.php**
4. Ejecutar: 
    ```bash
    php artisan make:controller HolaController
    ```
    :::tip NOTA
    Antes comentar **Route::get('/hola2/\{name}', HolaController::class);** en **routes\web.php**.
    :::
5. Crear: **resources\views\saludo.blade.php**.
6. Modificar: **.env**
7. Ejecutar: 
    ```bash
    $ php artisan migrate
    ```
8. Ejecutar: 
    ```bash
    php artisan migrate:rollback
    ```
9.  Ejecutar: 
    ```bash
    php artisan migrate
    ```
10. Ejecutar: 
    ```bash
    php artisan schema:dump
    ```
11. Ejecutar: 
    ```bash
    php artisan make:migration create_posts_table
    ```
12. Editar: **database\migrations\2021_02_19_193349_create_posts_table.php**
13. Ejecutar: 
    ```bash
    php artisan migrate
    ```
14. Ejecutar: 
    ```bash
    php artisan make:migration add_user_id_to_posts_table
    ```
15. Editar: **database\migrations\2021_02_20_130204_add_user_id_to_posts_table.php**
16. Ejecutar: 
    ```bash
    php artisan migrate
    ```
17. Ejecutar: 
    ```bash
    composer require doctrine/dbal
    ```
18. Ejecutar: 
    ```bash
    php artisan make:migration update_title_to_posts_table
    ```
19. Editar: **database\migrations\2021_02_20_132649_update_title_to_posts_table.php**
20. Ejecutar: 
    ```bash
    php artisan migrate
    ```
21. Ejecutar: 
    ```bash
    php artisan make:model Post
    ```
22. Modificar: **database\seeders\DatabaseSeeder.php**
23. Ejecutar: 
    ```bash
    php artisan db:seed
    ```
24. Ejecutar: 
    ```bash
    php artisan migrate:fresh
    ```
25. Ejecutar: 
    ```bash
    php artisan make:factory PostFactory
    ```
26. Modificar: **database\factories\PostFactory.php**
27. Ejecutar: 
    ```bash
    php artisan db:seed
    ```
28. Ejecutar: 
    ```bash
    php artisan make:seeder PostSeeder
    ```
29. Ejecutar: 
    ```bash
    php artisan migrate:fresh --seed
    ```
30. Ejecutar: 
    ```bash
    php artisan make:model Phone -m
    ```
31. Modificar: **database\migrations\2021_02_22_190402_create_phones_table.php**
32. Ejecutar: 
    ```bash
    php artisan migrate
    ```
33. Modificar: **app\Models\Phone.php**
34. Ejecutar: 
    ```bash
    php artisan vendor:publish 
    ```
    y luego seleccionar la opción **Provider: Laravel\Tinker\TinkerServiceProvider**
35. Ejecutar: $ php artisan tinker
:::tip NOTA
Exit o Ctrl-C para salir y clear para limpiar.
:::
36. Ejecutar: 
    ```bash
    >>> use App\Models\User
    ```
37. Ejecutar: 
    ```bash
    >>> User::all()
    ```
38. Ejecutar: 
    ```bash
    >>> $user = User::first()
    ```
39. Ejecutar: 
    ```bash
    >>> $user
    ```
40. Ejecutar: 
    ```bash
    >>> $user->posts
    ```
41. Ejecutar: 
    ```bash
    >>> $user = User::with("posts")->find(1)
    ```
42. Ejecutar: 
    ```bash
    >>> $user->phone
    ```
43. Ejecutar: 
    ```bash
    >>> use App\Models\Phone
    ```
44. Ejecutar: 
    ```bash
    >>> $phone = new Phone
    ```
45. Ejecutar: 
    ```bash
    >>> $phone->user_id = 1
    ```
46. Ejecutar: 
    ```bash
    >>> $phone->phone_number = "1234567855"
    ```
47. Ejecutar: 
    ```bash
    >>> $phone->created_at = now()
    ```
48. Ejecutar: 
    ```bash
    >>> $phone->save()
    ```
49. Ejecutar: 
    ```bash
    >>> $user = User::with(["phone", "posts"])->find(1)
    ```
50. Ejecutar: 
    ```bash
    >>> $phone->fill(["phone_number" => "98785456"])->update()
    ```
51. Ejecutar: 
    ```bash
    >>> Exit
    ```
52. Ejecutar: 
    ```bash
    composer require laravel/breeze --dev
    ```
53. Ejecutar: 
    ```bash
    php artisan breeze:install
    ```
54. Ejecutar: 
    ```bash
    npm install && npm run dev
    ```
55. Ingresar en Mailtrap (https://mailtrap.io).
56. Configurar **.env** con las credenciales de Mailtrap.
57. Para obligar al usuario a autenticarse implementar el modelo User a MustVerifyEmail
58. Ejecutar: 
    ```bash
    php artisan migrate:fresh --seed
    ```
59. Ejecutar: 
    ```bash
    php artisan make:controller ContactController
    ```
60. Definir método index en controlador **app\Http\Controllers\ContactController.php**
61. Definir método send en controlador **app\Http\Controllers\ContactController.php**
62. Modificar middleware de rutas en **routes\web.php**
63. Editar: **resources\views\layouts\navigation.blade.php**
64. Crear: **resources\views\contact\form.blade.php**
65. Ejecutar: 
    ```bash
    composer require protonemedia/laravel-form-components
    ```
    :::tip NOTA
    Para instalar paquete de formulario de https://github.com/protonemedia/laravel-form-components
    :::
    :::tip NOTA
    Para traducir el componente anterior al español: https://github.com/spatie/laravel-translatable
    ```bash
    composer require spatie/laravel-translatable
    composer require laraveles/spanish
    php artisan laraveles:install-lang
    ```
    + https://github.com/laravel-lang/lang
    ```bash
    composer require laravel-lang/lang:~7.0
    ```
66. Ejecutar: 
    ```bash
    composer require laravel-lang/lang:~7.0
    ```
67. Copiar directorio: **vendor\laravel-lang\lang\src\es** y pegarlo en: resources\lang
68. Ejecutar: 
    ```bash
    php artisan make:mail SendContactForm
    ```
69. Modificar el método **__construct** de la clase **app\Mail\SendContactForm.php**.
70. Agregar las variables públicas: textSubject y textMessage a **app\Mail\SendContactForm.php**:
    ```php title="app\Mail\SendContactForm.php"
    class SendContactForm extends Mailable
    {
        use Queueable, SerializesModels;

        /**
        * @var string
        */
        public string $textSubject;

        /**
        * @var string
        */
        public string $textMessage;
        // ...
    }
    ```
71. Modificar el método build de la clase **app\Mail\SendContactForm.php**.
72. Crear: **resources\views\emails\contact.blade.php**.
73. Ejecutar: 
    ```bash
    php artisan vendor:publish
    ```
    + Seleccionar: Tag: laravel-mail
74. Agregar la siguiente ruta al middleware en **routes\web.php**.
75. Crear: **resources\views\components\flash-messages.blade.php**.
76. Modificar: **resources\views\layouts\app.blade.php**.
    ```php title="resources\views\layouts\app.blade.php"
    <!-- Page Content -->
    <main>
        <x-flash-messages />
        {{ $slot }}
    </main>
    ```
