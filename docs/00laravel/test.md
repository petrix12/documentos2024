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
            $response = $this->get('/api/users');
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
            $response = $this->get('/api/users/1');
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
            $response = $this->get('/api/users/100');
            // Comprueba que la respuesta es 404
            $response->assertStatus(404);
        }
    }    
    ```
7. Crear archivo de variables de entorno de prueba **.env.testing** creando una copia de **.env**.
8. Crear base de datos para pruebas **testing** y configurar el **.env.testing** con esta base de datos.
9. Ejcutar los test:
    ```bash
    php artisan test
    ```
    :::tip Resumen del resultado de los test en este punto.
    ```
    FAIL  Tests\Feature\UserTest
    ⨯ get users list                                                                                                                                     0.80s  
    ⨯ get user datail                                                                                                                                    0.01s  
    ✓ get user not found      
    ```
    :::
10. Cambios en la aplicación para luego probar nuevamente los test:
    1. Modificar test de características **UserTest**:
        ```php title="tests\Feature\UserTest.php"
        // ...
        use Illuminate\Support\Facades\Artisan;

        class UserTest extends TestCase
        {
            public function test_set_database_config(): void {
                Artisan::call('migrate:reset');
                Artisan::call('migrate');
                Artisan::call('db:seed');

                $response = $this->get('/');
                $response->assertStatus(200);
            }
            // ...            
        }
        ```
    2. Modificar seeder **DatabaseSeeder** para poder crear usuarios de prueba:
        ```php title="database\seeders\DatabaseSeeder.php"
        use Illuminate\Support\Facades\Hash;

        class DatabaseSeeder extends Seeder
        {
            // ...
            public function run(): void
            {
                \App\Models\User::factory()->create([
                    'name' => 'Pedro',
                    'email' => 'test@example.com',
                    'password' => Hash::make('password'),
                ]);        
                \App\Models\User::factory(3)->create();
            }
        }        
        ```
    3. Crear controlador **UserController**:
        ```bash
        php artisan make:controller UserController
        ```
    4. Programar controlador **UserController.php**:
        ```php title="app\Http\Controllers\UserController.php"
        // ...
        use App\Models\User;
        // ...
        class UserController extends Controller
        {
            public function index() {
                $users = User::all();
                return response()->json($users);
            }

            public function user($id) {
                $user = User::find($id);
                if($user == null) return response()->json(['message' => 'User not found'], 404);
                return response()->json($user);
            }
        }        
        ```
    5. Establecer rutas api:
        ```php title="routes\api.php"
        // ...
        use App\Http\Controllers\UserController;
        // ...
        Route::get('/users', [UserController::class, 'index']);
        Route::get('/users/{id}', [UserController::class, 'user']);
        ```
    :::tip Nota
    Para Ejecutar la migración utilizando el archivo de variable de entorno **.env.testing**:
    ```bash
    php artisan migrate --env="testing"
    ```    
    :::
11. Ejcutar los test:
    ```bash
    php artisan test
    ```