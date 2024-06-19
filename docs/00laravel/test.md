---
title: Test en Laravel
sidebar_label: "Test en Laravel"
sidebar_position: 1
---

# Test con PHP Unit
1. Crear proyecto:
    ```bash
    laravel new test
    ```
2. Crear base de datos **test**.
3. Ejecutar las migraciones:
    ```bash
    php artisan migrate
    ```
4. Crear test de características **UserTest**:
    ```bash
    php artisan make:test UserTest
    ```
    :::tip Nota
    Esta acción creara un archivo de test en:
    + tests\Feature\UserTest.php
    :::
5. Crear test unitario **UserTest**:
    ```bash
    php artisan make:test UserTest --unit
    ```
    :::tip Nota
    Esta acción creara un archivo de test en:
    + tests\Unit\UserTest.php
    :::
6. Programar el test de características **UserTest**:
    ```php title="tests\Feature\UserTest.php"
    // ...
    class UserTest extends TestCase
    {
        // Test que comprueba que la lista de usuarios se obtiene correctamente
        public function test_get_users_list(): void
        {
            // Llama a la ruta /users
            $response = $this->get('/users');
            // Comprueba que la respuesta es exitosa
            $response->assertStatus(200);
            // Comprueba que la estructura de datos es la eperada
            $response->assertJsonStructure([
                [
                    'id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at'
                ]
            ]);
            // Comprobamos que hay un usuario con el nombre Pedro
            $response->assertJsonFragment([
                'name' => 'Pedro',
            ]);
            // Comprobamos que se trae todos los usuarios que esperamos
            $response->assertJsonCount(4);
        }

        // Test que comprueba que un usuario se obtiene correctamente
        public function test_get_user_datail(): void
        {
            // Llama a la ruta /users/1 que trae el usuario con id 1
            $response = $this->get('/users/1');
            // Comprueba que la respuesta es exitosa
            $response->assertStatus(200);
            // Comprueba que la estructura de datos es la eperada
            $response->assertJsonStructure([
                'id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at'
            ]);
            // Comprobamos que el usuario tiene el nombre Pedro
            $response->assertJsonFragment([
                'name' => 'Pedro',
            ]);
        }

        // Test que comprueba que un usuario no existe
        public function test_get_user_not_found(): void
        {
            // Llama a la ruta /users/100 que trae el usuario con id 100 que no existe
            $response = $this->get('/users/100');
            // Comprueba que la respuesta es 404
            $response->assertStatus(404);
        }
    }    
    ```
7. Crear archivo de variables de entorno de prueba **.env.testing** creando una copia de **.env**.
8. Crear base de datos para pruebas **testing** y configurar el **.env.testing** con esta base de datos.