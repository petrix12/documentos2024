---
title: Apuntes de Laravel 10
sidebar_label: "Apuntes de Laravel 10"
sidebar_position: 1
---

# APUNTES LARAVEL 10

## Pre-requisitos obligatorios:
+ [XAMPP](https://www.apachefriends.org/es/index.html) o [Laragon](https://laragon.org/index.html).
+ [Composer](https://getcomposer.org).
+ [NodeJS](https://nodejs.org).
+ Actualizar composer:
    ```bash
    composer self-update
    composer global update
    ```

## Pre-requisitos recomendados:
+ [GIT](https://git-scm.com).
+ [Visual Studio Code](https://code.visualstudio.com).

## Extensiones de VSC recomendadas:
+ Laravel Blade formatter (Shuhei Hayashibara).
+ Laravel Blade Snippets (Winnie Lin).
+ Laravel goto view (codingyu).
+ Laravel Snippets (Winnie Lin).
+ Laravel Docs (Austen Cameron).
+ PHP Intelephense (Ben Mewburn).
+ Spanish Language Pack for Visual Studio Code (Microsoft).
+ Tailwind CSS IntelliSense (Tailwind Labs).
+ Alpine.js IntelliSense (Adrian Wilczyński).
+ GitHub Copilot (GitHub).

## Extensiones de Google recomendadas:
+ JSON Formatter

## Documentación:
+ [Página oficial de Laravel](https://laravel.com).
+ [Laravel Lang](https://laravel-lang.com/installation.html).

## Instalación Laravel
### Instalación del instalador de Laravel
```bash
composer global require laravel/installer
```
### Instalación de un proyecto Laravel:
+ Vía composer (no requiere del instalador de Laravel):
    ```bash
    composer create-project laravel/laravel mi_proyecto_laravel
    ```
+ Vía instalador de Laravel:
    ```bash
    laravel new mi_proyecto_laravel
    ```
### Instalación de un proyecto de Laravel Jetstream
+ Crear un proyecto con Jetstream desde el instalador de Laravel:
    ```bash
    laravel new mi_proyecto_laravel --jet
    ```
+ Otra forma de instalar un proyecto con Jetstream:
    ```bash
    laravel new mi_proyecto_laravel
    cd mi_proyecto_laravel
    composer require laravel/jetstream
    php artisan jetstream:install livewire  
    php artisan migrate
    npm run dev
    ```
    :::tip Livewire o Inertia
    Si se desea instalar con inertia en lugar de livewire, reemplazar:
    ```bash
    php artisan jetstream:install livewire
    ```
    por:
    ```bash
    php artisan jetstream:install inertia
    ```
    :::
    
    :::tip Instalación con equipos o modo dark
    Incluir al final de la instrucción de instalación:
    + Si se desea instalar con equipos:
        ```bash
        --teams
        ```
    + Si se desea instalar con modo dark:
        ```bash
        --dark
        ```
    :::
### Instalación de un proyecto de Laravel Breeze    
+ Instalar el paquete de Laravel Breeze:
    ```bash
    composer require laravel/breeze --dev
    ```
+ Crear un proyecto con Laravel Breeze con el instalador de Laravel
    ```bash
    laravel new mi_proyecto
    ```
    + Seleccionar breeze y continuar
+ Otra forma de crear un proyecto de Laravel Breeze:
    ```bash
    laravel new mi_proyecto_laravel
    cd mi_proyecto_laravel
    composer require laravel/breeze --dev
    php artisan breeze:install    
    php artisan migrate
    npm install
    npm run dev    
    ```
:::tip Instalar Laravel Breeze con Vue.js o React.js
+ Para instalar con Vue.js:
    ```bash
    php artisan breeze:install vue
    ```
+ Para instalar con React.js:
    ```bash
    php artisan breeze:install react
    ```
+ Para instalar con Vue.js con posicionamiento en CEO:
    ```bash
    php artisan breeze:install vue --ssr
    ```
+ Para instalar con React.js con posicionamiento en CEO:
    ```bash
    php artisan breeze:install react --ssr
    ```
+ Con --ssr se pierde algo de velocidad pero se gana en posicionamiento CEO.
+ Para instalar con Vue.js con Next:
    ```bash
    php artisan breeze:install vue api
    ```
+ Para instalar con React.js con Nuxt:
    ```bash
    php artisan breeze:install react api
    ```
+ Para instalar con Modo oscuro:
    ```bash
    php artisan breeze:install vue --dark
    ```
:::
### Instalación de un proyecto de Laravel con Inertia  
+ Crear un proyecto Laravel con inertia
    ```bash
    laravel new mi_proyecto
    cd mi_proyecto
    composer require laravel/jetstream
    php artisan jetstream:install inertia    
    ```
+ Configurar el archivo de variables de entorn **.env**.
+ Ejecutar las migraciones:
    ```bash
    php artisan migrate
    ```
+ Para retornar una vista:
    ```php
    // ...
    use Inertia\Inertia;
    // ...
    return Inertia::render('Vista', ['parametro1' => 'valor1', ...]);
    // ...
    ```
    :::tip Nota
    Los parámetros que se envían con la vista, son recibidos en en componente vue como **props**.
    :::
+ Ejemplo de la vista **Vista** como componente vue:
    ```vue title="resources/js/Pages/Vista"
    <template>
        <h1>Vista</h1>
        <p>{{ counter }}</p>
        <button @click="increment">Increment</button>
        <!-- Para utilizar el enrutador de Laravel desde vue -->
        <NavLink :href="route('ruta_laravel')">Ruta Laravel</NavLink>
    </template>

    <script setup>
    import {ref} from 'vue'
    import NavLink from '../Components/NavLink.vue'

    const counter = ref(0)
    const increment = () => {
        counter.value++
    }
    </script>

    <style scoped>
    </style>
    ```
+ Las vista se deberán diseñar en la ruta: **resources/js/Pages**.
+ Para generar los archivos estáticos del frontend ejecutar:
    + En desarrollo:
        ```bash
        npm run dev
        ```
    + En producción:
        ```bash
        npm run build
        ```



## Estructura de carpetas de un proyecto Laravel:
+ **app**: lógica principal de la aplicación (backend).
    + **Http**:
        + **Controllers**: controladores de la aplicación.
    + **Models**: modelos de la aplicación.
    + **Providers**: proveedores de servicios.
+ **bootstrap**: archivos que se usan para la carga del proyecto.
+ **config**: archivos de configuración del proyecto.
    + **config\app.php**: configuración de la aplicación.
    + **config\database.php**: configuración de la base de datos.
    + **config\mail.php**: configuración de emails.
+ **database**: administración de la base de datos.
    + **database\factories**: creación de datos de prueba.
    + **database\migrations**: establecer estructura (crear, actualizar y eliminar) de base de datos.
    + **database\seeders**: poblar la base de datos con datos de prueba.
+ **lang**: administración de idiomas.
+ **node_modules**: dependencias npm.
+ **public**: archivos accesibles desde la web.
    + **public\index.php**: punto de entrada a la aplicación.
    + **public\assets**: recursos públicos.
        + **public\assets\img**: recursos públicos de imagenes.
        + **public\assets\css**: recursos públicos de estilos.
+ **resources**: vista de la aplicación (frontend)
    + **resources\css**: estilos.
    + **resources\js**: scripts.
    + **resources\views**: vistas y componentes.
        + **resources\views\_components**: componentes blade personalizados.
        + **resources\views\layouts**: plantillas blade.
            + **resources\views\layouts\\_partials**: partes de plantillas blade.
+ **routes**: url's o rutas de la aplicación.
+ **storage**: almacenamiento.
+ **tests**: archivos de pruebas para la aplicación.
+ **vendor**: dependencias composer.

:::tip Variables de entorno
+ **.env**: archivo de configuración de las variables de entorno.
:::


## Rutas
### Principales métodos estáticos de la clase **Route**:
    ```php
    Route::view('ruta', 'Vista a mostrar');                  // Para vistas estáticas
    Route::get('ruta', 'Controlador que la gobierna');       // Crear ruta del tipo get
    Route::post('ruta', 'Controlador que la gobierna');      // Crear ruta del tipo post
    Route::put('ruta', 'Controlador que la gobierna');       // Crear ruta del tipo put
    Route::delete('ruta', 'Controlador que la gobierna');    // Crear ruta del tipo delete
    Route::patch('ruta', 'Controlador que la gobierna');     // Crear ruta del tipo patch
    ```
### Estructura de una ruta:
+ Las rutas se definenen en los archivos contenidos en la carpeta **routes**.
    + Ejemplo:
        ```php
        // Ruta con vista de contenido estático
        Route::view('ruta_estatica', 'vista_estatica');
        // Ruta con parámetros
        Route::get('ruta/{parametro_obligatorio}/{parametro_opcional?}', function($parametro_obligatorio, $parametro_opcional = null) {
            if($parametro_opcional) {
                return "ruta con $parametro_obligatorio y $parametro_opcional";
            } else {
                return "ruta con solo con $parametro_obligatorio",
            }
        });

        // Buscará el método __invoke en el controlador
        Route::get('ruta', NombreController::class);

        // Buscará el método nombre_metodo en el controlador
        Route::get('ruta', [NombreController::class, 'nombre_metodo']);

        // Definir un grupo de rutas
        Route::controller(NombreController::class)->group(function() {
            Route::get('ruta1', 'metodo1');
            Route::get('ruta2', 'metodo2');
            Route::get('ruta3', 'metodo3');
        });

        // Rutas necesarias para hacer un CRUD
        // 1. Mostrar la lista de registros
        Route::get('registros', [RegistroController::class, 'index'])->name('registos.index');
        // 2. Crear un registro
        Route::get('registros/create', [RegistroController::class, 'create'])->name('registos.create');
        // 3. Guardar un registro
        Route::post('registros', [RegistroController::class, 'store'])->name('registos.store');
        // 4. Mostrar un registro
        Route::get('registros/{registro}', [RegistroController::class, 'show'])->name('registos.show');
        // 5. Editar un registro
        Route::get('registros/{registro}/edit', [RegistroController::class, 'edit'])->name('registos.edit');
        // 6. Actualizar un registro
        Route::put('registros/{registro}', [RegistroController::class, 'update'])->name('registos.update');
        // 7. Eliminar un registro
        Route::delete('registros/{registro}', [RegistroController::class, 'destroy'])->name('registos.destroy');

        // Ruta tipo resource (necesarias para hacer un CRUD, es equivalente a al conjuto de reutas definidas anteriormente)
        Route::resource('registros', RegistroController::class)->names('registross');

        // Ruta tipo resource indicando los métodos del controlador a usar
        // Luego en el controlador NombreController se pueden incluir sololos métodos que se esten usando
        Route::resource('ruta', NombreController::class)->only(['index', 'edit', 'update'])->names('rutas');

        // Ruta tipo resource indicando los métodos del controlador a exceptuar
        // Luego en el controlador NombreController se pueden eliminar todos los métodos que no se esten usando
        Route::resource('ruta', NombreController::class)->except(['show', 'destroy'])->names('rutas');

        // Ruta tipo resource para API (necesarias para hacer un CRUD, como es para API no se generan las rutas create y edit)
        Route::apiResource('registros', RegistroController::class)->names('registros');

        // Para cambiar el nombre de los parámetros que se reciben en los métodos
        Route::apiResource('registros', RegistroController::class)->parameters(['registros' => 'rutas']);
        
        // Para cambiar los nombres de create y edit:
        // Modificar el provider: app\Providers\RouteServiceProvider.php
        /*
            // ...
            public function boot(): void
            {
                // ...
                Route::resourceVerbs([
                    'create' => 'crear',
                    'edit' => 'editar'
                ]);
                // ...
            }
            // ...       
        */

        // Agrupar rutas que compartan un mismo controlador
        Route::prefix('registros')->name('registos.')->controller(RegistroController::class)->group(function() {
            // 1. Mostrar la lista de registros
            Route::get('', 'index')->name('index');
            // 2. Crear un registro
            Route::get('/create', 'create')->name('create');
            // 3. Guardar un registro
            Route::post('', 'store')->name('store');
            // 4. Mostrar un registro
            Route::get('/{registro}', 'show')->name('show');
            // 5. Editar un registro
            Route::get('/{registro}/edit', 'edit')->name('edit');
            // 6. Actualizar un registro
            Route::put('/{registro}', 'update')->name('update');
            // 7. Eliminar un registro
            Route::delete('/{registro}', 'destroy')->name('destroy');            
        });

        // Ruta para controlador de un solo método: __invoke
        Route::get('ruta', OnlymetodController::class);
        /*
            El controlador OnlymetodController solo contendrá un método:
            // __invoke: método invocable
            public function __invoke() {
                // Lógica del método
            }

        */

        // Definir más de un método en una ruta
        Route::match(['get', 'post'], 'mi_ruta', function() {
            return "Ruta mi_ruta usando el método GET o POST";
        });

        // Proteger rutas con expresiones regulares
        // Carácteres de letras       
        Route::get('ruta/{letras}', function() {
            return "Ruta con parámetros con valores de letras"
        })->where('letras', '[a-zA-Z]+');   //->whereAlpha('letras');
        
        // Carácteres alfanuméricos
        Route::get('ruta/{letras}', function() {
            return "Ruta con parámetros con valores alfanuméricos"
        })->whereAlphaNumeric('letras');

        // Carácteres numéricos, pero indicando la protección de manera global en el provider app\Providers\RouteServiceProvider.php
        Route::get('ruta/{numero}', function() {
            return "Ruta con parámetros con valores de números"
        });
        /*
            + Modificar el provider app\Providers\RouteServiceProvider.php:
        ```php
        // ...
        class RouteServiceProvider extends ServiceProvider
        {
            // ...
            public function boot(): void
            {
                Route::pattern('numero', '[0-9]+');
                // ...
            }
        }
        */
        ```
### Asignar nombre identificativo a una ruta:
```php
Route::get('ruta', [NombreController::class, 'nombre_metodo'])->name('mi_ruta.ruta');
```
:::tip Nota 1
    Ejemplo para invocar ruta desde una vista:
    ```php
    <!-- ... -->
    <a href="{{ route('mi_ruta.ruta') }}">Mi ruta</a>
    <!-- ... -->
    ```
:::
:::tip Nota 2
Ejemplo para invocar ruta con parámetro desde una vista:
    ```php
    <!-- ... -->
    <a href="{{ route('mi_ruta.ruta', 'parametro') }}">Mi ruta</a>
    <!-- ... -->
    ```
:::
:::tip Nota 3
Ejemplo para invocar ruta con varios parámetro desde una vista:
    ```php
    <!-- ... -->
    <a href="{{ route('mi_ruta.ruta', [
            'parametro1' => $valor1,
            'parametro2' => $valor2
        ]) }}"
    >Mi ruta</a>
    <!-- ... -->
    ```
:::
### Ejemplo de modelo de rutas para un CRUD:
    ```php
    Route::get('modelos', [ModeloController::class, 'index'])->name('modelos.index');
    Route::get('modelos/create', [ModeloController::class, 'create'])->name('modelos.create');
    Route::post('modelos', [ModeloController::class, 'store'])->name('modelos.store');
    Route::get('modelos/{modelo}', [ModeloController::class, 'show'])->name('modelos.show');
    Route::get('modelos/{modelo}/edit', [ModeloController::class, 'edit'])->name('modelos.edit');
    Route::put('modelos/{modelo}', [ModeloController::class, 'update'])->name('modelos.update');
    Route::delete('modelos/{modelo}', [ModeloController::class, 'destroy'])->name('modelos.destroy');
    ```
### Ejemplo de modelo de rutas para un CRUD con resource:
    ```php
    Route::resource('modelos', ModeloController::class);
    ```
### Ejemplo de ruta cuando queremos mostrar contenido estático:
    ```php
    Route::view('mirutaestatica', 'vista');
    ```
### Algunos comando artisan
+ Ver todas las rutas:
    ```bash
    php artisan r:l
    php artisan route:list
    ```
+ Ver todas las rutas con un nombre específico:
    ```bash
    php artisan r:l --name=rutas
    php artisan r:l --path=comienza_por
    ```
+ Ver todas las rutas definidas por el programador de la aplicación:
    ```bash
    php artisan r:l --except-vendor
    ```
+ Ver todas las rutas definidas por laravel o paquetes de terceros:
    ```bash
    php artisan r:l --only-vendor
    ```
+ Ver todas las rutas con junto con el middelware que la protege:
    ```bash
    php artisan r:l -v
    ```
+ Almacenar rutas en cache:
    ```bash
    + $ php artisan route:cache
    ```
    :::tip Nota
    Este comando se recomienda usar en producción y no durante el desarrollo.
    :::
+ Limpiar rutas en cache:
    ```bash
    php artisan route:clear
    ```
### Ejecutar comandos cmd
```php title="...\routes\web.php"
// ...
use Illuminate\Support\Facades\Process;
// ...
Route::get('directorio', function() {
    $result = Process::run('ls ../');
    if($result->successful()) {
        return $result->output();
    } else {
        return $result->errorOutput();
    }
});
// ...
```


## Controladores
### Crear controlador
    ```bash
    php artisan make:controller Carpeta/NombreController
    ```
### Ejemplo de un controlador para un CRUD
    ```php title="app\Http\Controllers\ModeloController.php"
    // ...
    use App\Models\Modelo;
    use Illuminate\Http\RedirectResponse;
    use Illuminate\Http\Request;
    use Illuminate\View\View;
    // ...
    class ModeloController extends Controller
    {
        public function index(): View {
            $modelos = Modelo::paginate();
            return view('crud.modelos.index', compact('modelos'));
        }

        public function create(): View {
            return view('crud.modelos.create');
        }

        public function store(Request $request): RedirectResponse {
            $request->validate([
                'propiedad1' => 'required|min:12'
                // Forma alternativa:
                // 'propiedad1' => ['required', 'min:12']
            ]);
            // Forma 1:
            /*
            $modelo = new Modelo();
            $modelo->propiedad1 = $request->propiedad1;
            $modelo->save();
            */

            // Forma 2:
            /*
            $modelo = Modelo::create([
                'propiedad1' => $request->propiedad1
            ]);
            */

            // Forma 3:
            $modelo = Modelo::create($request->all());

            return redirect()->route('modelos.show', $modelo);
        }

        public function show(Modelo $modelo): View {
            return view('crud.modelos.show', compact('modelo'));
        }

        public function edit(Modelo $modelo): View {
            return view('crud.modelos.edit', compact('modelo'));
        }

        public function update(Request $request, Modelo $modelo): RedirectResponse {
            $request->validate([
                // Reglas de validación
                'propiedad1' => 'required|min:12'
            ], [
                // Personalización de los mensajes de error
                'propiedad1.required' => 'La propiedad 1 es obligatoria'
            ], [
                // Personalización de los atributos
                'propiedad1' => 'Cambio de nombre'
            ]);

            // Forma 1:
            /*
            $modelo->propiedad1 = $request->propiedad1;
            $modelo->save();
            */

            // Forma 2:
            $modelo->update(['propiedad1' => $request->propiedad1]);

            // Forma 3:
            $modelo->update($request->all());

            return redirect()->route('modelos.show', $modelo);
        }

        public function destroy(Modelo $modelo): RedirectResponse {
            $modelo->delete();
            return redirect()->route('modelos.index');
            /* 
                El método redirect también puede recibir la ruta en lugar de su nombre:
                return redirect('ruta_a_redirigir');
            */
        }
    }        
    ```
### Emitir una variable de sesión (forma 1)
    ```php
    // ...
    public function destroy(Modelo $modelo) {
        $modelo->delete();
        session()->flash('info', 'El modelo ha sido eliminado');
        return redirect()->route('modelos.index');
    }
    // ...
    ```
### Emitir una variable de sesión (forma 2)
    ```php
    // ...
    public function destroy(Modelo $modelo) {
        $modelo->delete();
        return redirect()->route('modelos.index')->with('info', 'El modelo ha sido eliminado');
    }
    // ...
    ```

### Crear un controlador tipo resource
```bash
php artisan make:controller NameController -r   // --resource
```
:::tip Nota
Este comando genera un controlador con los métodos necesarios para un CRUD:
+ index, create, store, show, edit, update y destroy.
:::

### Crear controlador tipo resource asociado a un modelo
```bash
php artisan make:controller Carpeta/NombreController -r --model="Modelo"
```

### Llamar una vista:
```php
// ...
public function mi_metodo1() {
    return view('mi_vista1');
}
// ...
// Enviar variables a la vista
// Forma 1:
public function mi_metodo1($mi_variable) {
    return view('mi_vista1', ['mi_variable' => $mi_variable]);
}    
// Forma 2:
public function mi_metodo1($mi_variable) {
    return view('mi_vista1', compact('mi_variable'));
}
```
:::tip Nota
Se recomienda nombrar las vista igual que el método.
:::

### Recuperar todo lo que llegue por la url
```php
// ...
public function mi_metodo() {
    $request = request()->all();
}
```



## Query Builder:
### Realizar consultas SQL directamente con DB:
    ```php
    // ...
    use Illuminate\Support\Facades\DB;
    // ...
    public function metodo() {
        // Realizar consultas
        $age = 30;
        $users_select = DB::select(DB::raw("SELECT * FROM users WHERE age > '$age"));
        // Realizar inserción
        $users_insert = DB::insert(DB::raw("INSERT INTO users VALUE ..."));

    }
    ```
### Trabajar con el generador de consultas de Laravel (Query Builder):
    ```php
    // ...
    use Illuminate\Support\Facades\DB;
    // ...
    public function metodo() {
        // Obtener todos los registros de la tabla tabla
        $registros = DB::table('tabla')->get();
        // Obtener todos los registros de la tabla tabla e indicar las columnas
        $registros = DB::table('tabla')->select('col1', 'col2')->get();
        // Obtener los registros cuyo campo1 sea igual a valor 
        // Operadores del método where: >, >=, <, <=, =, <>, LIKE. Operadores especiales: % y ?
        $registros_filtro = DB::table('tabla')-where('campo1', 'valor')->get();
        // Consulta con varias condicionales
        $registros_filtro = DB::table('tabla')-where([
            ['id', '>=', 5],
            ['id', '<=', 10]
        ])->get();
        // Consultar rangos
        $registros_between = DB::table('tabla')-whereBetween('id', [5, 10])->get();
        $registros_not_between = DB::table('tabla')-whereNotBetween('id', [5, 10])->get();
        $registros_in = DB::table('tabla')-whereIn('id', [3, 7, 12])->get();
        $registros_not_in = DB::table('tabla')-whereNotIn('id', [3, 7, 12])->get();
        // Consultar null
        $registros_null = DB::table('tabla')-whereNull('campo5')->get();
        $registros_not_null = DB::table('tabla')-whereNotNull('campo5')->get();
        // Consultas con orWhere
        $registros_filtro = DB::table('tabla')-where('campo1', 'LIKE', "%valor1%")->orWhere('campo1', 'LIKE', "%valor2%")->get();
        // Consultas con whereNot
        $registros_filtro = DB::table('tabla')-whereNot('campo1', 'LIKE', "%valor3%")->get();
        // Fechas
        $registros_date = DB::table('tabla')-whereDate('campo5', '1972-01-12')->get();
        $registros_date_mayor = DB::table('tabla')-whereDate('campo5', '>=', '1972-01-12')->get();
        $registros_year = DB::table('tabla')-whereYear('campo5', '1972')->get();
        $registros_month = DB::table('tabla')-whereMonth('campo5', '12')->get();
        $registros_day = DB::table('tabla')-whereDay('campo5', '24')->get();
        $registros_time = DB::table('tabla')-whereTime('campo5', '12:03:07')->get();
        // Recuperar los registros en donde dos campos tengan el mismo valor
        $registros_column = DB::table('tabla')-whereColumn('campo5', 'campo6')->get();
        // Recuperar los registros en donde un campo sea mayor que otro
        $registros_column_mayor = DB::table('tabla')-whereColumn('campo5', '>', 'campo6')->get();
        // Agrupar filtros
        $registro_agrupar = DB::table('tabla')-where('id', '>', 5)
            ->where(function($query) {
                $query->where('campo7', 'like', '%valor1')
                    ->orWhere('campo7', 'like', '%valor2');
            })
            ->get();
        // Obtener el primer registro cuyo campo1 sea igual a valor
        $registro_first = DB::table('tabla')-where('campo1', 'valor')->first();
        // Obtener el primer registro cuyo campo2 sea mayor o igual que 2
        $registro_first_mayor = DB::table('tabla')-where('campo1', '>=', 2)->first();
        // Obtener el registro con id 3
        $registro_id = DB::table('tabla')-find(3);
        // Obtener todos los valores del campo2 en un array
        $array_campo2 = DB::table('tabla')->pluck('campo2');        
        // Obtener todos los valores del campo2 con llave id en un array tipo clave - valor
        $array_clave_id_valor_campo2 = DB::table('tabla')->pluck('campo2', 'id');
        // Obtener registros truncados
        $cantidad_registros = 100;
        DB::table('tabla')
            ->orderBy('id')
            ->chunk($cantidad_registros, function($registros) {
                foreach($registros as $registro) {
                    echo $registro->campo1 . '<br>';
                }
            });
        // Obtener registros truncados para actualizar un valor
        $cantidad_registros = 100;
        DB::table('tabla')
            ->orderBy('id')
            ->chunkById($cantidad_registros, function($registros) {
                foreach($registros as $registro) {
                    // Actualizar campos de registros
                }
            });
        // Obtener registros truncados con lazy
        DB::table('tabla')
            ->orderBy('id')
            ->lazy()->each(function($registro) {
                echo $registro->campo1 . '<br>';
            });
        // Obtener registros truncados con lazy para actualizar un valor
        DB::table('tabla')
            ->orderBy('id')
            ->lazyById()->each(function($registro) {
                // Actualizar campos de registros
            });
        // Obtener la cantidad de registros de la tabla tabla
        $cantidad_registros = DB::table('tabla')->count();
        // Obtener el mayor valor del campo campo3
        $mayor_valor_campo3 = DB::table('tabla')->max('campo3');
        // Obtener el menor valor del campo campo3
        $menor_valor_campo3 = DB::table('tabla')->min('campo3');
        // Obtener el promedio de los valores del campo campo3
        $promedio_campo3 = DB::table('tabla')->avg('campo3');
        // Verificar la existencia de un valor del campo3
        $existe_3_en_campo3 = DB::table('tabla')->where('campo3', 3)->exists();
        // Verificar la no existencia de un valor del campo3
        $existe_3_en_campo3 = DB::table('tabla')->where('campo3', 3)->doesntExists();
        // Obtener los campos campo1 y campo2 de los registros de la tabla tabla
        $registros_c1_c2 = DB::table('tabla')->select('campo1 as c1', 'campo2')->get();
        // Obtener los campos campo2 y campo3 concatenados (Forma 1)
        $registros_concat = DB::table('tabla')->select('campo1', DB::raw('CONCAT(campo2, " ", campo3) as campos2_3'), 'campo4')->get();
        // Obtener los campos campo2 y campo3 concatenados (Forma 2)
        $registros_concat = DB::table('tabla')->select('campo1', 'campo4')
            selectRow('CONCAT(campo2, " ", campo3) as campos2_3')->get();
        // Realizar un filtro más específico
        $registros_where_raw = DB::table('tabla')->whereRaw('id >= 2 AND campo1 LIKE "123" OR campo2 = 0')->get();
        $registros_or_where_raw = DB::table('tabla')->whereRaw('id >= 2 AND id <= 5')->orWhereRaw('campo3 = 0')->get();
        // Otros métodos: havingRaw, orderByRaw, groupByRaw
        // Consulta cruzada
        $registros_cruzados = DB::table('tabla')
            ->join('tabla2', 'tabla.modelo2_id' '=', 'tabla2.id')
            ->get();
        // Consulta cruzada indicando los campos a recuperar
        $registros_cruzados = DB::table('tabla')
            ->join('tabla2', 'tabla.modelo2_id' '=', 'tabla2.id')
            ->select('tabla.*', 'tabla2.campo3 as c3')
            ->get();
        // Consulta cruzada con varias tablas
        $registros_cruzados = DB::table('tabla')
            ->join('tabla2', 'tabla.modelo2_id' '=', 'tabla2.id')
            ->join('tabla3', 'tabla.modelo3_id' '=', 'tabla3.id')
            ->select('tabla.*', 'tabla2.campo3 as c3', 'tabla3.*')
            ->get();
        // Ordenar registros
        $registros_ordenados = DB::table('tabla')->orderBy('campo1', 'desc')->get();
        // Recuperar registros ordenado de manera descendente
        $registros_ordenados_latest = DB::table('tabla')->latest('campo1')->get();
        // Recuperar registros ordenado de manera ascendente
        $registros_ordenados_oldest = DB::table('tabla')->oldest('campo1')->get();
        // Recuperar registros ordenado de manera aleatoria
        $registros_ordenados_random = DB::table('tabla')->inRandomOrder('campo1')->get();
        // Quitar orden
        $registros_reorder = DB::table('tabla')->inRandomOrder('campo1');
        $registros_reorder->reorder()->get();
        // Agrupar
        $registros_agrupados_total = DB::table('tabla')
            ->select('campo1', DB::raw('count(*) as total'))
            ->groupBy('campo1')
            ->get();
        $registros_agrupados_total_mayor = DB::table('tabla')
            ->select('campo1', DB::raw('count(*) as total'))
            ->groupBy('campo1')
            ->having('total', '>', 2)   // having tiene una función similar a where
            ->get();
        $registros_agrupados_sumar = DB::table('tabla')
            ->select('campo1', DB::raw('sum(*) as suma'))
            ->groupBy('campo1')
            ->get();
        // Recuperar solo l2 registros
        $registros_take = DB::table('tabla')->take(12)->get();
        // Recuperar solo l2 registros a partir del cuarto (el método skip solo se puede usar si existe el método take o limit)
        $registros_take_skip = DB::table('tabla')->skip(3)->take(12)->get();
        $registros_limt_skip = DB::table('tabla')->skip(3)->limit(12)->get();   // Arroja el mismo resultado que la consulta anterior
        $registros_limt_skip = DB::table('tabla')->limit(12, 3)->get();   // Arroja el mismo resultado que la consulta anterior
        $registros_limt_offset = DB::table('tabla')->offset(3)->limit(12)->get();   // Arroja el mismo resultado que la consulta anterior
        // Consultas condicionadas
        $condicion = false;
        $registros_condicionados = DB::table('tabla')
            ->when($condicion, function($query) {
                $query->where('campo1', 'valor1');
            })->get();
        $id = 15;
        $registros_condicionados = DB::table('tabla')
            ->when($condicion, function($query, $id) {
                $query->where('id', >=, $id);
            })->get();
        // ...
    }
    // ...
    ```
### Insertar registros con DB:
    ```php
    // ...
    use Illuminate\Support\Facades\DB;
    // ...
    public function metodo() {
        // Insertar un registro
        DB::table('tabla')->insert([
            'campo1' => 'valor1',
            'campo2' => 'valor2'
        ]);
        // Insertar un varios registros
        DB::table('tabla')->insert([
            [                
                'campo1' => 'valor1_r1',
                'campo2' => 'valor2_r1'
            ],
            [                
                'campo1' => 'valor1_r2',
                'campo2' => 'valor2_r2'
            ]
        ]);
        // Insertar un varios registros e ignorar los registros que violan alguna restricción en bd
        DB::table('tabla')->insertOrIgnore([
            [                
                'campo1' => 'valor1_r1',
                'campo2' => 'valor2_r1'
            ],
            [                
                'campo1' => 'valor1_r2',
                'campo2' => 'valor2_r2'
            ]
        ]);
        // Insertar nuevos registros, y si ya existen, entonces lo aptualiza
        DB::table('tabla')->upsert([
            // Datos a intentar registrar
            [
                'name' => 'Pedro',
                'last_name' => 'Bazó',
                'email' => 'bazo.pedro@gmail.com',
                'password' => bcrypt('12345678')
            ],
            // Campo que indicará si el registro ya existe
            [
                'email'
            ],
            // En caso de que exista, indicar los campos a actualizar
            [
                'name' => 'Pedro',
                'last_name' => 'Bazó'
            ]
        ]);
    }
    ```
### Actualizar registros con DB:
    ```php
    // ...
    use Illuminate\Support\Facades\DB;
    // ...
    public function metodo() {
        // Actualizar registros
        DB::table('tabla')->where('id', 1508)
            ->update([
                'campo1' => 'valor1',
                'campo2' => 'valor2'
            ]);
        // Actualizar registros o insertar
        DB::table('tabla')
            ->updateOrInsert(
                [
                    'email' => 'bazo.pedro@gmail.com',
                ],
                [
                    'name' => 'Pedro',
                    'last_name' => 'Bazó',
                    'password' => bcrypt('12345678');
                ]
            );
        // Incrementar un campo tipo integer
        $cantidad_a_incrementar = 5;
        DB::table('tabla')
            ->where('id', 1207)
            ->increment('campo_tipo_int', $cantidad_a_incrementar);
        // Decrementar un campo tipo integer
        $cantidad_a_decrementar = 7;
        DB::table('tabla')
            ->where('id', 1207)
            ->increment('campo_tipo_int', $cantidad_a_decrementar);
    }
    ```
### Eliminar registros con DB:
    ```php
    // ...
    use Illuminate\Support\Facades\DB;
    // ...
    public function metodo() {
        // Eliminar registros
        DB::table('tabla')->where('id', 1508)->delete();
    }
    ```
### Paginación de registros con DB:
    ```php
    // ...
    use Illuminate\Support\Facades\DB;
    // ...
    public function metodo() {
        // Registros paginados
        $registros = DB::table('tabla')->paginate(15);
        
        // Registros paginados con más parametros
        $registros = DB::table('tabla')->paginate(15, ['campo1', 'campo2'], 'nombre_parametro_page');

        // Registros paginados simples (oculta los números de página en la vista)
        $registros = DB::table('tabla')->simplePaginate(15);
    }
    ```
    + Estructura de los registros paginados:
    ```json
    {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "campo1": "Valor campo 1",
                // ...
            },
            // ...
        ],
        "first_page_url": "url_de_mi_proyecto/vista?page=1",
        "from": 1,
        "last_page": 67,
        "last_page_url": "url_de_mi_proyecto/vista?page=77",
        "links": [
            {
                "url": null,
                "label": "$laquo; Previous",
                "active": false
            },
            {
                "url": "url_de_mi_proyecto/vista?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "url_de_mi_proyecto/vista?page=2",
                "label": "2",
                "active": false
            },
            // ...

        ],
        "next_page_url": "url_de_mi_proyecto/vista?page=2",
        "per_page": 15,
        "prev_page_url": null,
        "to": 15,
        "total": 999

    }
    ```
    + Para paginar con Bootstrap:
        :::tip Nota
        Por defecto Laravel 10 usa tailwind como estilos de páginación
        :::
        + Agregar el CDN de bootstrap en el **head** de la vista de la aplicación.
        + Modificar el provider **AppServiceProvider**:
            ```php title="...\app\Providers\AppServiceProvider.php"
            // ...
            use Illuminate\Pagination\Paginator;
            // ...
            class AppServiceProvider extends ServiceProvider
            {
                // ...
                public function boot(): void
                {
                    // ...
                    Paginator::useBootstrapFive();
                }
            }            
            ```


## Eloquent:
+ Crear registro:
    ```php
    // ...
    class NombreController extends Controller
    {
        // ...
        public function crear_forma1() {
            $modelo = new Modelo();
            $modelo->campo1 = 'valor 1';
            $modelo->campo2 = 'valor 2';
            $modelo->save();
            // ...
        }

        public function crear_forma2() {
            $modelo = Modelo::create([
                'campo1' => 'valor 1',
                'campo2' => 'valor 2',
            ]);
            // ...
        }

        public function crear_forma2_request(Request $request) {
            $modelo = Modelo::create($request->all());
            // ...
        }
        // ...
    }
    ```
+ Actualizar registro:
    ```php
    // ...
    class NombreController extends Controller
    {
        // ...
        public function actualizar_forma1(Request $request) {
            $modelo = Modelo::find($request->modelo_id);
            $modelo->campo1 = 'valor 1 actualizado';
            $modelo->campo2 = 'valor 2 actualizado';
            $modelo->save();
            // ...
        }

        public function actualizar_forma2(Request $request) {
            $modelo = Modelo::find($request->modelo_id)->update([
                'campo1' => 'valor 1 actualizado',
                'campo2' => 'valor 2 actualizado',
            ]);
            // ...
        }

        public function actualizar_forma2_request(Request $request) {
            $modelo = Modelo::find($request->modelo_id)->update($request->all());
            // ...
        }
        // ...
    }
    ```
+ Eliminar registro:
    ```php
    // ...
    class NombreController extends Controller
    {
        // ...
        public function eliminar(Request $request) {
            $modelo = Modelo::find($request->modelo_id)->delete();
            // ...
        }

        public function eliminar_varios(Request $request) {
            $modelos = Modelo::whereIn('id', [$request->modelo_id1, $request->modelo_id2])->delete();
            // ...
        }
        // ...
    }
    ```
+ Pasar todos los registros:
    ```php
    // ...
    class NombreController extends Controller
    {
        // ...
        public function mi_vista() {
            $modelos = Modelo::all();
            return view('mi_vista', compact('modelos'));
        }
        // ...
    }
    ```
+ Pasar registros paginados:
    ```php
    // ...
    class NombreController extends Controller
    {
        // ...
        public function mi_vista() {
            $modelos = Modelo::paginate();  // Por defecto envía 15 registros
            return view('mi_vista', compact('modelos'));
        }
        // ...
    }
    ```
    :::tip Nota
    Para navegar entre lotes de registros en la dirección del navegador podemos escribir algo así:
    + http://miaplicacion.test/modelos?page=[numero]
    :::
+ Obtener los n últimos registros
    ```php
    // $n: número de registros a recuperar
    $registros = Registro::latest('id')->take($n)->get();
    ```

## Vistas
### Ejemplos de vistas para un CRUD:
    + resources/views/crud/modelos/index.blade.php
        ```php
        @extends('layouts.mi_plantilla')

        @section('title', 'Lista modelos')

        @section('content')
            <h1>Lista modelos</h1>
            <ul>
                @foreach($modelos as $modelo)
                    <li>Propiedad 1: {{ $modelo->propiedad1 }}</li>
                @endforeach
            </ul>
            <!-- Si el controlador envía los registros paginados -->
            {{ $modelos->link() }}
        @endsection
        ```
        :::tip Nota
        Si quiero personalizar los estilos de la paginación en el método link incorporar el nombre de la vista:
        ```php
        {{ $modelos->link('vista_paginacion_pesronalizada') }}        
        ```
        Si quiero establecer por defecto la vista de la paginación personalizada, modificar el provider **AppServiceProvider**:
        ```php title="...\app\Providers\AppServiceProvider.php"
        // ...
        use Illuminate\Pagination\Paginator;
        // ...
        class AppServiceProvider extends ServiceProvider
        {
            // ...
            public function boot(): void
            {
                // ...
                Paginator::defaultView('vista_paginacion_pesronalizada');
            }
        }            
        ```
        Si quiero modificar los estilos de la paginación nativa de laravel:
        ```bash
        php artisan vendor:publish --tag=laravel-pagination
        ```
        Luego, establecer los estilos en **views/vendor/pagination/default.blade.php**.
        :::
    + resources\views\crud\modelos\create.blade.php
        ```html
        @extends('layouts.mi_plantilla')

        @section('title', 'Crear modelo')

        @section('content')
            <h1>Crear modelo</h1>
            <form action="{{ route('modelos.store') }}" method="POST">
                @csrf
                <label>Propiedad 1</label>
                <!-- Uso del método old en un input -->
                <input type="text" name="propiedad1" value="{{ old('propiedad1') }}" />
                @error('propiedad1')
                    {{ $message }}
                @enderror

                <!-- Uso del método old en un select -->
                <select name="category_id">
                    @foreach($categories as $category)
                        <option @selected(old('category_id') == $category->id) value="{{ $category->id }}">{{ $category->name }}</option>
                    @endforeach
                </select>

                <!-- Uso del método old en un chackbox -->
                <label>
                    <input type="checkbox" name="active" value="1" @checked(old('active') == 1) />
                    Activo
                </label>

                <button type="submit">Crear</button>
            </form>
        @endsection
        ```
    + resources\views\crud\modelos\show.blade.php
        ```php
        @extends('layouts.mi_plantilla')

        @section('title', 'Mostrar modelo')

        @section('content')
            <h1>Mostrar modelo</h1>
            <label>Propiedad 1: {{ $modelo->propiedad1 }}</label>
            <a href="{{ route('modelos.index') }}">Lista de modelos</a>
            <a href="{{ route('modelos.edit', $modelo) }}">Editar modelo</a>
            <form action="{{ route('modelos.destroy', $modelo) }}" method="POST">
                @csrf
                @method('delete')
                <button type="submit">Eliminar modelo</button>
            </form>
        @endsection        
        ```
    + resources\views\crud\modelos\edit.blade.php
        ```php
        @extends('layouts.mi_plantilla')

        @section('title', 'Editar modelo')

        @section('content')
            <h1>Editar modelo</h1>
            <form action="{{ route('modelos.update', $modelo) }}" method="POST">
                @csrf
                @method('put')

                <!-- Uso del método old en un input -->
                <label>Propiedad 1</label>
                <input type="text" name="propiedad1" value="{{ old('propiedad1', $modelo->propiedad1) }}" />
                @error('propiedad1')
                    {{ $message }}
                @enderror

                <!-- Uso del método old en un select -->
                <select name="category_id">
                    @foreach($categories as $category)
                        <option @selected(old('category_id', $modelo->category_id) == $category->id) value="{{ $category->id }}">{{ $category->name }}</option>
                    @endforeach
                </select>

                <!-- Uso del método old en un chackbox -->
                <label>
                    <input type="checkbox" name="active" value="1" @checked(old('active', $modelo->active) == 1) />
                    Activo
                </label>

                <button type="submit">Actualizar</button>
            </form>
        @endsection
        ```
### Resivir una variable de sesión:
    + resources/views/crud/modelos/index.blade.php
        ```php
        @extends('layouts.mi_plantilla')

        @section('title', 'Lista modelos')

        @section('content')
            <h1>Lista modelos</h1>
            @if(session('info'))
                <script>
                    alert("{{ session('info') }}");
                </script>
            @endif
            <ul>
                @foreach($modelos as $modelo)
                    <li>Propiedad 1: {{ $modelo->propiedad1 }}</li>
                @endforeach
            </ul>
            <!-- Si el controlador envía los registros paginados -->
            {{ $modelos->link() }}
        @endsection
        ```
### Mostrar variables en vista:
    ```html
    <!-- ... -->
    <!-- Con bloqueo de texto enriquecido -->
    {{ $variable }}
    <!-- Con escape de texto enriquecido -->
    {!! $variable !!}
    <!-- Si estamos trabajando con otro framework que utiliza la misma sintaxis -->
    @{{ $variable_de_vue }}
    ```
### Interactuar arreglos de php con javascript:
    + Controlador:
        ```php
        // ...
        public function index() {
            $arreglo = [
                [
                    'id' => 1,
                    'infor' => 'Información 1'
                ],
                [
                    'id' => 2,
                    'infor' => 'Información 2'
                ],
            ];

            return view('vista', compact('arreglo'))
        }
        // ...
        ```
    + Vista (sin directiva blade):
        ```html
        <!-- ... -->
        <script>
            let arreglo = {!! json_encode($arreglo) !!}
        </script>
        <!-- ... -->
        ```
    + Vista (con directiva blade):
        ```html
        <!-- ... -->
        <script>
            let arreglo = @json($arreglo)
        </script>
        <!-- ... -->
        ```
### Capturar errores
```html
<!-- ... -->
<!-- Todos los errores -->
@if($errors->any())
    <p>{{ $errors }}</p>
    <!-- Recorrer todos los errores -->
    @foreach($errors->all() as $error)
        <p>{{ $error }}</p>
    @endforeach
@endif

<!-- Un error en partícular -->
@error('campo1')
    <p>{{ $message }}</p>
@enderror
<!-- ... -->
```


## Blade
### Construcción de plantillas Blade
+ Crear plantilla:
    ```php title="resources\views\layouts\mi_plantilla.blade.php"
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <!-- ... -->
        <!-- NOTA: los stack a diferencia de los yield permiten apilar su contenido -->
        @stack('meta')
        <!-- ... -->
        <title>@yield('title')</title>
        <!-- ... -->
        @stack('css')
        <!-- ... -->
    </head>
    <body>
        <!-- ... -->
        <!-- aquí puede ir un nav -->
        <!-- ... -->
        @yield('content')
        <!-- ... -->
        <!-- aquí puede ir un footer -->
        <!-- ... -->
        @stack('js')
        <!-- ... -->
    </body>
    </html>
    ```
### Uso de la plantilla en una vista:
    ```php title="resources\views\mi_vista.blade.php"
    @extends('layouts.mi_plantilla')

    @push('meta')
        <meta description="viewport" content="Descripción de mi vista">
    @endpush

    @section('title', 'Mi título de página')

    @section('content')
        {{-- Mi contenido HTML --}}
    @endsection
    ```
### Invocar vista desde un controllador:
    ```php
    // ...
    class NombreController extends Controller
    {
        // ...
        public function mi_vista() {
            $parametro = 'Mi parámetro';
            return view('mi_vista', compact('parametro'));
        }
        // ...
    }
    ```
### Invocación de un componente en una vista
    ```php title="resources\views\mi_vista.blade.php"
    <!-- ... -->
    @component('_componentes.mi_componente')
        @slot('title', 'Mi titulo')
        @slot('content')
            <!-- Código HTML -->
        @endslot
    @endcomponent
    <!-- ... -->
    ```
+ Compononente:
    ```php title="resources\views\_components\mi_componente.blade.php"
    <div>
        <h3>{{ $title }}</h3>
        {{ $content }}
    </div>
    ```
### Cargar recursos públicos
    ```php title="resources\views\mi_vista.blade.php"
    <!-- ... -->
    <head>
        <!-- ... -->
        <!-- Busca el recurso en public/assets/css/estilos.css -->
        <link rel="stylesheet" href="{{ asset('assets/css/estilos.css') }}">
        <!-- ... -->
    </head>
    <body>
        <!-- ... -->
        <!-- Busca el recurso en public/assets/img/imagen.jpg -->
        <img src="{{ asset('assets/img/imagen.jpg') }}" alt="example">
        <!-- ... -->
    </body>
    ```
### Ejemplo de directiva **foreach**:
    ```php
    <!-- ... -->
    <ul>
        @foreach($modelos as $modelo)
            <li>Propiedad 1: {{ $modelo->propiedad1 }}</li>
        @endforeach
    </ul>
    <!-- Si el controlador envía los registros paginados -->
    {{ $modelos->link() }}
    <!-- ... -->
    ```
### Directivas:
+ if:
    ```php
    @if($condicion)
        <!-- Se muestra solo si $condicion = true -->
    @else
        <!-- Se muestra solo si $condicion = false -->
    @endif
    ```
+ elseif:
    ```php
    @if($condicion1)
        <!-- Se muestra solo si $condicion1 = true -->
    @elseif($condicion2)
        <!-- Se muestra solo si $condicion2 = true -->
    @else
        <!-- Se muestra solo si $condicion1 = false y $condicion2 = false  -->
    @endif
    ```    
+ auth:
    ```php
    @auth
        <!-- Se muestra solo si existe un usuario autenticado -->
    @else
        <!-- Se muestra solo si no existe un usuario autenticado -->
    @endauth
    ```   
+ guest:
    ```php
    @guest
        <!-- Se muestra solo si no existe un usuario autenticado -->
    @else
        <!-- Se muestra solo si existe un usuario autenticado -->
    @endguest
    ```
+ foreach:
    ```php
    @foreach ($elementos as $elemento)
        {{ $elemento }}
    @endforeach
    ```
    + **Nota 1:** al usar un foreach se crean algunas variables de interes:
        + $loop->first (Primero elemento)
        + $loop->last (Último elemento)
        + $loop->index (Elemento actual, el primero tendrá el valor de cero)
        + $loop->iteration (Elemento actual, el primero tendrá el valor de uno)
        + $loop->remaining (Iteraciones restantes)
    + **Nota 2:** para acceder al loop del padre en caso de un bucle foreach anidado:
        + $loop->parent->first (Primero elemento del bucle padre)
+ class:
    ```php
    <style>
        .mi-estilo1 {
            color: blue;
        }
        .mi-estilo2 {
            color: green;
        }
    </style>
    @foreach ($elementos as $elemento)
        <span @class([ 
            'mi-estilo1' => $loop->first,
            'mi-estilo2' => $loop->last,
        ])>{{ $elemento }}</span>
    @endforeach
    ```
+ forelse:
    ```php
    @forelse ($elementos as $elemento)
        {{ $elemento }}
    @empty
        <p>No existen elementos a mostrar</p>
    @endforelse
    ```
+ for:
    ```php
    @for ($i = 0; $i < $count; i++)
        {{ $i }}
    @endfor
    ```
+ continue:
    ```php
    <!-- Forma 1 -->
    @for ($i = 0; $i < $count; i++)
        @if($i == 3)
            <p>Cuando $i sea igual a tres se saltará esta iteración a partir de aquí</p>
            @continue
        @endif
        {{ $i }}
    @endfor
    <!-- Forma 2 -->
    @for ($i = 0; $i < $count; i++)
        <p>Cuando $i sea igual a tres se saltará esta iteración a partir de aquí</p>
        @continue($i == 3)
        {{ $i }}
    @endfor
    ```
+ break:
    ```php
    <!-- Forma 1 -->
    @for ($i = 0; $i < $count; i++)
        @if($i == 3)
            <p>Cuando $i sea igual a tres se saldrá del bucle</p>
            @break
        @endif
        {{ $i }}
    @endfor
    <!-- Forma 2 -->
    @for ($i = 0; $i < $count; i++)
        <p>Cuando $i sea igual a tres se saldrá del bucle</p>
        @break($i == 3)
        {{ $i }}
    @endfor
    ``
+ while y php:
    ```php
    @php
        $i = 1;
    @endphp

    @while ($i < $count)
        {{ $i }}
        @php
            $i++;
        @endphp
    @endwhile
    ```
+ for:
    ```php
    @for ($i = 0;$i < $count; $i++)
        {{ $i }}
    @endfor
    ```
+ checked:
    ```php
    <input type="checkbox" @checked($condicion) name="mi_checked">
    ```
+ selected:
    ```php
    <option value="1" @selected($valor)>Opción ...</option>
    ```
+ disabled:
    ```php
    <button @disabled($condicion)>Botón</button>
    ```
+ readonly y required:
    ```php
    <input @readonly($condicion1) @required($condicion2) type="text" value="Readonly" />
    ```
+ include, includeIf, inlcudeWhen y includeFirst:
    ```php
    <!-- la vista partial.form debe existir -->
    @include('partial.form')
    <!-- pasar parámetros a la vista partial.form con la directiva include-->
    @include('partial.form', ['parametro' => $valor])
    <!-- si existe la vista partial.form se incluirá en esta vista -->
    @includeIf('partial.form')
    <!-- pasar parámetros a la vista partial.form con la directiva includeIf-->
    @includeIf('partial.form', ['parametro' => $valor])
    <!-- se trae una vista si se cumple una condición -->
    @includeWhen($condicion, 'partial.form')
    <!-- pasar parámetros a la vista partial.form con la directiva includeWhen -->
    @includeWhen($condicion, 'partial.form', ['parametro' => $valor])
    <!-- si existe varias vistas y que se traiga la primera -->
    @includeFirst(['partial.form1', 'partial.form2'])
    ```
+ error:
    ```php
    @error('variable')
        {{ $message }}
    @enderror
    ```
+ isset (si la variable esta definida o no tiene un valor asignado):
    ```php
    @isset($variable)
        <p>La variable esta definidad</p>
    @else
        <p>La variable no esta definidad</p>
    @endisset
    ```
+ unless:
    ```php
    @unless($condicion)
        <p>Este texto se mostrará si $condicion tiene el valor de false</p>
    @endunless
    ```
+ empty:
    ```php
    @empty($variable)
        <p>La variable $variable no existe o no tiene un valor asignado false</p>
    @endempty
    ```
+ env:
    ```php
    @env('local')
        <p>Me encuentro en un entorno local</p>
    @endenv
    
    @env('production')
        <p>Me encuentro en un entorno de producción</p>
    @endenv
    ```
+ production:
    ```php
    @production
        <p>Me encuentro en un entorno de producción</p>
    @endproduction
    ```
+ switch:
    ```php
    @switch($caso)
        @case(1)
            <p>Caso 1</p>
        @break
        @case(2)
            <p>Caso 2</p>
        @break
        @default
            <p>Sin caso</p>
    @endswitch
    ```

## Migraciones
+ Documentación: https://laravel.com/docs/10.x/migrations
+ Establecer conexión con la BD:
    ```env titel=".env"
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=wireui2024
    DB_USERNAME=root
    DB_PASSWORD=    
    ```
+ Nombre de ejemplo de un archivo de migración y los posibles tipos de campos a definir:
    + Nombre: database\migrations\2014_10_12_000000_create_users_table.php
    + Código:
        ```php
        // ...
        public function up(): void
        {
            Schema::create('users', function (Blueprint $table) {
                $table->id();                                           // Crea la columna id
                /*
                    $table->id(); es equivalente a:
                    $table->bigInteger()->autoIncrement()->unsigned();
                    ó:
                    $table->bigIncrment();
                    El modificador autoIncrement agrega la siguiente instrucción:
                    $table->primary('id');
                    Para crear llaves primarias compuestas:
                    $table->primary(['id', 'campo2']);

                */
                $table->string('name', 150);
                $table->string('email')->unique();
                $table->text('descripcion');
                $table->mediumText('descripcion_media_larga');
                $table->longText('descripcion_muy_larga');
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->enum('status', [1, 2])->default(1);
                $table->rememberToken();                                // Crea la columna remember_token
                $table->foreignId('current_team_id')->nullable();
                $table->string('profile_photo_path', 2048)->nullable();
                $table->integer('campo_tipo_entero');
                $table->integer('campo_tipo_entero_positivo')->unsigned();
                $table->bigInteger('campo_tipo_entero_largo');
                $table->boolean('campo_booleano');
                $table->timestaps('campo_fecha_corto_rango');  // Pocos años hacia atras y hacia adelante
                $table->timestaps('fecha_actual')->useCurrent();
                $table->date('campo_fecha');
                $table->time('campo_hora');
                $table->dateTime('campo_fecha_hora');
                $table->decimal('campo_decimal', 8, 2);     // 8: precisión, 2: cantidad de decimales
                $table->float('campo_float', 8, 2);     // 8: precisión, 2: cantidad de decimales
                $table->double('campo_double', 8, 2);     // 8: precisión, 2: cantidad de decimales
                $table->foreignId('category_id');   // equivalente a. $table->bigInteger('category_id')->unsigned();
                $table->json('array_de_elementos');
                $table->morphs('datoable'); // Para relaciones polimorficas
                // es equivalente a:    $table->bigInteger('datoable_id')->unsigned();
                //                      $table->string('datoable_type');

                // Restricciones de llave foránea indicando indice y tabla
                $table->foreignId('tabla_id')->constrained();
                $table->foreignId('tabla_id')->constrained()->onDelete('cascade');
                /* Equivalente a: 
                    $table->foreign('tabla_id')
                        ->rerferences('id')->on('tabla');
                */            

                // Restricciones de llave foránea con set null
                $table->unsignedBigInteger('modelo_id')->nullable();
                $table->foreign('modelo_id')
                    ->rerferences('id')->on('modelos')
                    ->onDelete('set null');

                // Restricciones de llave foránea con cascade
                $table->unsignedBigInteger('otro_modelo_id');
                $table->foreign('otro_modelo_id')
                    ->rerferences('id')->on('otro_modelos')
                    ->onDelete('cascade');
                    
                $table->string('indice1');
                $table->longText('indice2');
                // Aplicando indices:
                $table->index('indice1');
                $table->fullText('indice2');

                $table->timestamps();                                   // Crea las columnas created_at y updated_at
            });
        }
        // ...   
        ```
+ Ejecutar las migraciones:
    + $ php artisan migrate
+ Crear migración:
    + $ php artisan make:migration nombretabla
+ Crear migración siguiendo las convenciones de Laravel:
    + $ php artisan make:migration create_nombretabla_table
    + **Nota:** al usar esta convención se crean las estructuras de los métodos **up** y **down** en el archivo de la migración.
+ Crear migración siguiendo las convenciones de Laravel para una tabla auxiliar:
    + $ php artisan make:migration create_nombretabla1_nombretabla2_table   (escribir en orden alfabético)
+ Migración para modificar la estructura de una tabla:
    + $ php artisan make:migration update_nombretabla_table
    + Ejemplo de modificación en el archivo de migración:
        ```php
        // ...
        public function up() {
            Schema::table('nombretabla', function(Blueprint $table) {
                $table->string('new_column');
                $table->dropColumn(['column1_a_eliminar', 'column2_a_eliminar']);
            });
        }
        // ...
        public function down() {
            // Revirtir las acciones del método up
            Schema::dropColumn('new_column');
            // ...
        }
        ```
+ Revertir cambios de la última migración:
    + $ php artisan migrate:rollback
+ Revertir cambios de lote 3 en las migraciones:
    + $ php artisan migrate:rollback --batch=3
+ Revertir todos los cambios y volver a ejecutar las migraciones (elimina la tabla sin ejecutar el método **down**):
    + $ php artisan migrate:fresh
+ Revertir todos los cambios y volver a ejecutar las migraciones (ejecuta el método **down**):
    + $ php artisan migrate:refresh
+ Eliminar todas las tablas de la base de datos:
    + $ php artisan migrate:reset
+ Agregar una columna a una migración:
    + $ php artisan make:migration add_micolumna_to_mitabla_table
    + Luego modificar la migración para definir la nueva columna:
        ```php
        // ...
        public function up() {
            Schema::table('mitabla', function(Blueprint $table) {
                $table->string('micolumna')->nullable()->after('otracolumna');
            });
        }
        // ...
        public function down() {
            Schema::table('mitabla', function(Blueprint $table) {
                $table->dropColumn('micolumna');
            });
        }
        ```
        + **Nota**: a parte del método **after**, también existen:
            + first: agrega la columna de primero.
+ Modificar un campo de una migración:
    + Instalar dependencia:
        + $ composer require doctrine/dbal
    + Crear migración:
        + $ php artisan make:migration cambiar_propiedades_to_mitabla_table
    + Luego modificar la migración para definir la nueva columna:
        ```php
        // ...
        public function up() {
            Schema::table('mitabla', function(Blueprint $table) {
                // Modificar modificadores
                $table->string('micolumna', 50)->nullable()->change();
                // Modificar nombre
                $table->renameColumn('columna2', 'columna3');
                // Eliminar columna
                $table->dropColumn('columna4');
                // Eliminar una llave única
                $table->dropUnique('mitabla_columna5_unique');
                // Eliminar un indice
                $table->dropIndex('mitabla_columna6_index');
                // Eliminar un indice full text
                $table->dropFullText('mitabla_columna7_fulltext');
                // Eliminar indice primario
                $table->dropPrimary('PRIMARY');
                // Eliminar restricciones de llave foránea
                $table->dropForeign(['modelo_id']);
            });
        }
        // ...
        public function down() {
            Schema::table('mitabla', function(Blueprint $table) {
                $table->string('micolumna', 255)->nullable(false)->change();
                $table->renameColumn('columna3', 'columna2');
                $table->string('columna4')->after('columna1');
                $table->unique('columna5');
                $table->index('columna6');
                $table->fullText('columna7');
                $table->primary('id');
                $table->foreign('modelo_id')
                    ->references('id')
                    ->on('modelos')
                    ->onDelete('cascade')   // Suponiendo que el modificador que tenia antes de quitar la restricción de llave foránea
                    ->onUpdate('cascade');   // Suponiendo que el modificador que tenia antes de quitar la restricción de llave foránea
            });
        }
        ```
+ Migración que se encargue de eliminar una tabla:
    + $ php artisan make:migration drop_tabla_table
    + Lógica para la migración:
        ```php
        // ...
        public function up(): void
        {
            //Schema::drop('tabla');
            Schema::dropIfExists('tabla');
        }
        // ...
        public function down(): void
        {
            // Aquí se deberá crear la tabla tabla
            Schema::create('tabla', function (Blueprint $table) {
                $table->id();
                // ...
                $table->timestamps();
            });        
        }
        // ...
        ```

## Modelos
### Crear un modelo
+ $ php artisan make:model Modelo
+ $ php artisan make:model Modelo -m        (con migración, también se puede reemplazar -m por --migration)
+ $ php artisan make:model Modelo -mc       (con migración y controlador)
+ $ php artisan make:model Modelo -mcs      (con migración, controlador y seeder)
+ $ php artisan make:model Modelo -mcsf     (con migración, controlador, seeder y factory)
+ $ php artisan make:model Modelo -a        (con migración, controlador, seeder y factory)
### Indicar a un modelo la tabla a administrar
    ```php
    // ...
    class Modelo extends Model {
        // ...
        protected $table = "modelos";
    }
    ```
### Definir asignación masiva (indicando los campos a considerar)
    ```php
    // ...
    class Modelo extends Model {
        // ...
        protected $fillable = [
            'propiedad1'
        ];
    }
    ```
### Definir asignación masiva (indicando los campos a no considerar)
    ```php
    // ...
    class Modelo extends Model {
        // ...
        protected $guarded = [
            'propiedad1'
        ];
    }
    ```
### Definir asignación masiva (indicando todos los campos)
    ```php
    // ...
    class Modelo extends Model {
        // ...
        protected $guarded = [];
    }
    ```
### Indicar que campos debe ocultar
    ```php
    // ...
    class Modelo extends Model {
        // ...
        protected $hidden = [
            'campo1'
        ];
    }
    ```
### Realizar casting en las propiedades del modelo
    ```php
    // ...
    class Modelo extends Model {
        // ...
        protected $casts = [
            'campo1' => 'string'
        ];
    }
    ```
### Query scope
#### Scope local
    ```php
    // ...
    class Modelo extends Model {
        // ...
        public function scopeFiltro($query, $filtro) {
            $query->where('campo_x', 'LIKE', "%$filtro%");
        }
        // ...
    }
    ```
#### Scope global
    ```php
    // ...
    class Modelo extends Model {
        // ...
        protected static function booted() {
            static::addGlobalScope('nombre_del_scope', function($query) {
                $query->where('campo_x', "valor_x");
            });
        }
        // ...
    }
    ```    
### Relaciones
:::tip Tips
+ Relación 1:1 (El modelo tiene la clave primaria):
    + Método: **hasOne** (Modelo a relacionar, clave foránea, clave primaria) -> Tiene un ...
+ Relación 1:1 inversa (El modelo tiene la clave foránea):
    + Método: **belonsTo** (Modelo a relacionar, clave foránea, clave primaria) -> Pertenece a ...
+ Relacion 1:n (El modelo tiene la clave primaria):
    + Método: **hasMany** (Modelo a relacionar, clave foránea, clave primaria) -> Tiene unos ...
+ Relacion n:n:
    + Método: **belongsToMany** (Modelo a relacionar, tabla auxiliar, clave foránea, clave relacionada) -> Tiene unos ...
+ Ralacion 1:1 a traves de:
    + Método: **hasOneThrough** (Modelo a relacionar, Modelo que tiene la relación directa)
+ Ralacion 1:n a traves de:
    + Método: **hasManyThrough** (Modelo a relacionar, Modelo que tiene la relación directa)
+ Relación 1:1 polimórfica:
    + Método: **morphOne** (Clase de la entidad polimórfica, nombre del método de la relación)
+ Relación 1:1 polimórfica inversa:
    + Método: **morphTo**
+ Relación 1:n polimórfica:
    + Método: **morphMany** (Clase de la entidad polimórfica, nombre del método de la relación)
    + **Nota**: no es necesario especificar parámetros si se respetan las convenciones, en caso contrario los parámetros serán:
        + name
        + typo
        + id del tipo
+ Relación n:n polímórfica: (Nombre tabla auxiliar: **modeloable**, y sus campos: **modelo_id**, **modeloable_id** y **modeloable_type**)
    + Método: **morphToMany** (Clase de la entidad polimórfica, nombre del método de la relación)
+ Relación n:n polímórfica inversa:
    + Método: **morphedByMany** (Modelo relacionado, nombre del método relacionado)
+ Cabecera para tipar las relaciones:
    ```php
    use Illuminate\Database\Eloquent\Factories\HasOne;
    use Illuminate\Database\Eloquent\Factories\BelonsTo;
    use Illuminate\Database\Eloquent\Factories\HasMany;
    use Illuminate\Database\Eloquent\Factories\BelongsToMany;
    use Illuminate\Database\Eloquent\Factories\HasOneThrough;
    use Illuminate\Database\Eloquent\Factories\HasManyThrough;
    use Illuminate\Database\Eloquent\Factories\MorphOne;
    use Illuminate\Database\Eloquent\Factories\MorphTo;
    use Illuminate\Database\Eloquent\Factories\MorphMany;
    use Illuminate\Database\Eloquent\Factories\MorphToMany
    ```
:::
#### Establecer ralación 1:1 de **Modelo** a **OtroModelo** (hasOne -> Tiene)
    ```php
    // ...
    class Modelo extends Model {
        // ...
        // Forma manual
        public function otro_modelo() {
            $otro_modelo = OtroModelo::where('modelo_id', $this->id)->first();
            return $otro_modelo;
        }

        // Forma simplificada, es funcionalmente igual a la anterior
        // Este método considera que la llave primaria del Modelo modelo es 'id', 
        // y la llave foránea de OtroModelo es modelo_id
        public function otro_modelo_forma2(): HasOne {
            return $this->hasOne('App\Models\OtroModelo');
            // también sirve: $this->hasOne(OtroModelo::class);
        }

        // Forma simplificada, sin seguir las convenciones de laravel
        // Este método considera que la llave primaria del Modelo modelo no sigue las convenciones
        // y la llave foránea de OtroModelo tampoco sigue las convenciones
        public function otro_modelo_forma3(): HasOne {
            return $this->hasOne('App\Models\OtroModelo', 'modelo_id', 'id');
        }
    }
    ```
#### Establecer ralación 1:1 inversa de **OtroModelo** a **Modelo** (belongsTo -> Pertenece)
    ```php
    // ...
    class OtroModelo extends Model {
        // ...
        // Forma manual
        public function modelo() {
            $modelo = Modelo::find($this->modelo_id);
            return $modelo;
        }

        // Forma simplificada, es funcionalmente igual a la anterior
        public function modelo2(): BelongsTo {
            return $this->belongsTo('App\Models\Modelo');
        }

        // Forma simplificada, en caso de no seguir las convenciones
        public function modelo2(): BelongsTo {
            return $this->belongsTo('App\Models\Modelo', 'modelo_id', 'id');
        }
    }
    ```
#### Establecer ralación 1:n de **OtroModelo** a **Modelo**
    ```php
    // ...
    class Modelo extends Model {
        // ...
        // Forma simplificada
        public function otro_modelos(): HasMany {
            return $this->hasMany('App\Models\OtroModelo');
        }
    }
    ```
#### Establecer ralación 1:n inversa de **OtroModelo** a **Modelo**
    ```php
    // ...
    class OtroModelo extends Model {
        // ...
        // Forma simplificada
        public function modelo(): BelongsTo {
            return $this->belongsTo('App\Models\Modelo');
        }
    }
    ```
#### Establecer ralación n:n de **OtroModelo** a **Modelo**
    ```php
    // ...
    class Modelo extends Model {
        // ...
        // Forma simplificada
        public function otro_modelos(): BelongsToMany {
            return $this->belongsToMany('App\Models\OtroModelo')
                ->withPivot('campo_adicional')
                ->withTimestamps();
            // El método withPivot sirve para recuperar un campo adicional establecido en la tabla pivote
            // El método withTimesstamps sirve para asignarle valores de creación y actualización a los campos created_at y updated_at
            // Si queremos acceder al pivote en una vista:
            // {{ $otro_modelo->pivot->campo_adicional }}
        }

        // Ejemplo de código para asignar un valor
        // $modelo = Modelo::find($modelo_id);
        // $modelo->otro_modelos()->attach($otro_modelo_id);

        // Ejemplo de código para quitar un valor
        // $modelo = Modelo::find($modelo_id);
        // $modelo->otro_modelos()->detach($otro_modelo_id);

        // Ejemplo de código para asignar varios valores
        // $modelo = Modelo::find($modelo_id);
        // $modelo->otro_modelos()->attach([$otro_modelo1_id, $otro_modelo2_id]);

        // Ejemplo de código para quitar varios valores
        // $modelo = Modelo::find($modelo_id);
        // $modelo->otro_modelos()->detach([$otro_modelo1_id, $otro_modelo2_id]);

        // Ejemplo de código para quitar todos los valores y luego asignar varios valores
        // $modelo = Modelo::find($modelo_id);
        // $modelo->otro_modelos()->sync([$otro_modelo1_id, $otro_modelo2_id]);
    }
    ```
#### Relaciones polimórficas
+ Cuando establezca las relaciones polimórficas del medelo **Tabla** tener en cuenta:
  + En el modelo **Tabla**:
      ```php
      public function tablanable(): MorphTo {
          return $this->morphTo();
      }
      ```
+ En el modelo **Modelo**:
    ```php
    // Relación uno a uno polimórfica
    public function tabla(): MorphOne {
        return $this->morphOne('App\Models\Tabla', 'tablaable');
    }

    // Relación uno a muchos polimórfica
    // El 2do parámetro es el nombre del método definido en el modelo Tabla
    public function tablas(): MorphMany {
        return $this->morphMany('App\Models\Tabla', 'tablaable');   
    }

    // Relación muchos a muchos polimórfica
    // El 2do parámetro es el nombre de la tabla intermedia en singular
    public function tablas2(): MorphToMany {
        return $this->morphToMany('App\Models\Tabla', 'tablaable');
    }

    // Relación muchos a muchos inversa polimórficas
    // El 2do parámetro es el nombre de la tabla intermedia en singular
    public function tablas3(): MorphToMany {
        return $this->morphedByMany('App\Models\Tabla', 'tablaable');
    }
    ```
+ La tabla **tablas** deberá tener campos similares a:
    + campo1
    + campo2
    + tablaable_id
    + tablaable_type
    + **Nota 1:** La clave primaria será una clave compuesta por los campos **tablaable_id** y **tablaable_type**.
    + **Nota 2:** 
        + Ejemplo del archivo de migración para relaciones polimórficas uno a uno:
            ```php
            // ...
            public function up(): void
            {
                Schema::create('tablas', function (Blueprint $table) {
                    $table->string('campo1');
                    $table->string('campo2');
                    $table->unsignedBigInteger('tablaable_id');
                    $table->string('tablaable_type');
                    // Definición de la llave primaria compuesta
                    $table->primary(['tablaable_id', 'tablaable_type']);
                    $table->timestamps();
                });
            }
            // ...
            ```
        + Ejemplo del archivo de migración para relaciones polimórficas uno a muchos:
            ```php
            // ...
            public function up(): void
            {
                Schema::create('tablas', function (Blueprint $table) {
                    $table->id();
                    $table->string('campo1');
                    $table->string('campo2');
                    $table->unsignedBigInteger('tablaable_id');
                    $table->string('tablaable_type');
                    $table->timestamps();
                });
            }
            // ...
            ```
        + Ejemplo del archivo de migración para relaciones polimórficas uno a muchos:
            ```php
            // ...
            public function up(): void
            {
                Schema::create('tablas', function (Blueprint $table) {
                    $table->id();
                    $table->string('campo1');
                    $table->string('campo2');
                    $table->timestamps();
                });
            }
            // ...
            ```
            + En este caso hay que generar una tabla intermedia:
                + $ php artisan make:migration create_tablaables_table
                + Ejemplo de construcción de la migración:
                    ```php
                    // ...
                    public function up(): void
                    {
                        Schema::create('tablaables', function (Blueprint $table) {
                            $table->id();
                            $table->unsignedBigInteger('tablaable_id');
                            $table->string('tablaable_type');
                            $table->unsignedBigInteger('tabla_id');
                            $table->foreign('tabla_id')->references('id')->on('tablas')->onDelete('cascade');
                            $table->timestamps();
                        });
                    }
                    // ...
                    ```
    + **Nota 3:** Creación de registros:
        + Desde el modelo **Tabla**:
            ```php
            Tabla::create([
                'campo1' => 'Valor campo 1',
                'campo2' => 'Valor campo 2',
                'tablaable_id' => $modelo_id,
                'tablaable_type' => 'App\Models\Modelo'
            ]);
            ```
        + Desde el modelo **Modelo**:
            ```php
            $modelo->tabla()->create([
                'campo1' => 'Valor campo 1',
                'campo2' => 'Valor campo 2'
            ]);
            ```
#### Relación 1:1 a traves de
    ```php
    // ...
    class Modelo extends Model {
        // ...
        public function profile(): HasOne {
            return $this->hasOne(Profile::class);
        }

        public function address(): HasOneThrough {
            return $this->hasOneThrough(Address::class, Profile::class);
        }
    }
    ```
#### Relación 1:n a traves de
    ```php
    // ...
    class Modelo extends Model {
        // ...
        // Relación uno a muchos
        public function section(): HasMany {
            return $this->hasMany(Section::class);
        }

        // Relación uno a mucho a traves de
        public function lessons(): HasManyThrough {
            return $this->hasManyhrough(Lesson::class, Section::class);
        }
    }
    ```
### Para crear url amigables
    ```php
    // ...
    class Modelo extends Model {
        // ...
        public function getRouteKeyName() {
            return "campo_slug";
        }
    }
    ```


## Tinker
+ Ejecutar Tinker:
    ```bash
    php artisan tinker
    ```
+ Salir de Tinker:
    ```bash
    >>> exit
    ```
+ Usar un modelo:
    ```bash
    >>> use App\Models\Modelo
    ```
+ Crear una instancia de un modelo:
    ```bash
    >>> $modelo = new Modelo;
    ```
+ Asignar un valor a una propiedad de un modelo:
    ```bash
    >>> $modelo->propiedad = 'Valor';
    ```
+ Ver el contendido de un modelo:
    ```bash
    >>> $modelo;
    ```
+ Agregar instancia del modelo como un registro en tabla:
    ```bash
    >>> $modelo->save();
    ```
+ Modificar un registro
    ```bash
    >>> $modelo->propiedad = 'otro valor';
    >>> $modelo->save();
    ```
+ Recuperar todos los registros de una tabla:
    ```bash
    >>> $modelos = Modelo::all();
    ```
+ Recuperar todos los registros de una tabla aplicando un filtro:
    ```bash
    >>> $modelos = Modelo::where('propiedad1', 'valor1')->get();
    ```
+ Recuperar todos los registros de una tabla aplicando un filtro y un orden:
    ```bash
    >>> $modelos = Modelo::where('propiedad1', 'valor1')->orderBy('propiedad2', 'desc')->get();
    ```
    :::tip Nota
    Por defecto **orderBy** ordena de manera ascendente: **asc**.
    :::
+ Recuperar el primer registro:
    ```bash
    >>> $modelos = Modelo::where('propiedad1', 'valor1')->orderBy('propiedad2', 'desc')->first();
    ```
+ Recuperar solo los campos **propiedad1** y **propiedad2**:
    ```bash
    >>> $modelos = Modelo::select('propiedad1', 'propiedad2')->get();
    >>> $modelos = Modelo::select('propiedad1', 'propiedad2')->orderBy('propiedad2')->where('propiedad1', 'valor1')->get();
    ```
+ Recuperar solo los campos **propiedad1** y **propiedad2** usando alias:
    ```bash
    >>> $modelos = Modelo::select('propiedad1 as p1', 'propiedad2 as p2')->get();
    ```
+ Recuperar solo 5 registros:
    ```bash
    >>> $modelos = Modelo::select('propiedad1 as p1', 'propiedad2 as p2')->take(5)->get();
    ```
+ Recuperar un registro con **id** = 3:
    ```bash
    >>> $modelos = Modelo::find(3);
    ```
+ Recuperar todos los registros con **id** > 3:
    ```bash
    >>> $modelos = Modelo::where('id', '>', 3)->get();
    ```
    :::tip Nota
    Operadores de comparación que se pueden usar:
        ```
        + Igual: =
        + Mayor: >
        + Mayor o igual: >=
        + Menor: '<'
        + Menor o igual: <=
        + Diferente: <>
        + Que contenga: LIKE
        ```
    :::
+ Recuperar todos los registros que contenga el texto **texto** en cualquier parte del campo:
    ```bash
    >>> $modelos = Modelo::where('propiedad3', 'LIKE', '%texto%')->get();
    ```


## Seeder
### Programar seeder
```php title="database\seeders\DatabaseSeeder.php"
// ...
use App\Models\Modelo;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    // ...
    public function run(): void
    {
        // ...
        $modelo = new Modelo();
        $modelo->propiedad = "Valor de mi propiedad";
        $modelo->save();
    }
}    
```
### Ejecutar seeders
```bash
php artisan db:seed
```
### Crear, programar y cargar un seeder:
+ Crear:
    ```bash
    php artisan make:seeder ModeloSeeder
    ```
+ Programar:
    ```php title="database\seeders\ModeloSeeder.php"
    // ...
    use App\Models\Modelo;
    use Illuminate\Database\Seeder;

    class DatabaseSeeder extends Seeder
    {
        // ...
        public function run(): void
        {
            $modelo = new Modelo();
            $modelo->propiedad = "Valor de mi propiedad";
            $modelo->save();
        }
    }    
    ```
+ Cargar:
    ```php title="database\seeders\DatabaseSeeder.php"
    // ...
    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\Storage;
    use App\Models\Modelo;
    use App\Models\Post;

    class DatabaseSeeder extends Seeder
    {
        // ...
        public function run(): void
        {
            // ...
            $this->call(ModeloSeeder::class);

            // Llamar a un factory desde el modelo
            Modelo::factory(8)->create();

            // Ejemplo para tratar imagenes
            Storage::deleteDirectory('posts');
            Storage::makeDirectory('posts');
            $posts = Post::factory(100)->create();
            foreach($post as $post) {
                Image::factory(1)->create([
                    'imageable_id' => $post->id,
                    'imageable_type' => Post::class
                ]);
            }
        }
    }    
    ```
+ Cargar varios seeders:
    ```php title="database\seeders\DatabaseSeeder.php"
    // ...
    use Illuminate\Database\Seeder;
    use Illuminate\Support\Facades\Storage;
    use App\Models\Modelo;
    use App\Models\Post;

    class DatabaseSeeder extends Seeder
    {
        // ...
        public function run(): void
        {
            // ...
            $this->call([
                Modelo1Seeder::class,
                Modelo2Seeder::class,
                Modelo3Seeder::class
            ]);
            // ...
        }
    }    
    ```    
### Reestablecer tablas de la base de datos y ejecutar los seeders
```bash
php artisan migrate:fresh --seed
```
### Migrar y ejecutar los seeders
```bash
php artisan migrate --seed
```

## Factory
:::tip Docoumentacion
Faker: https://fakerphp.github.io
:::
+ Crear un factory:
    + $ php artisan make:factory ModeloFactory
    + **Nota**: cuando se crea de este modo, es necesario adaptar el código al modelo a emplear.
+ Crear y programar un factory inicando el modelo a usar:
    + $ php artisan make:factory ModeloFactory --model=Modelo
    + Programa factory ****:
        ```php
        // ...
        use App\Models\Modelo;
        use App\Models\OtroModelo;
        use Illuminate\Support\Str;
        use Illuminate\Database\Eloquent\Factories\Factory;
        // ...
        class ModeloFactory extends Factory
        {
            // ...
            use Illuminate\Support\Facades\Hash;
            // ...
            public function definition(): array
            {
                $propiedad4 = $this->faker->unique->word(20),   // Una palabra de máximo 20 caracteres que no se repite
                return [
                    'propiedad1' => $this->faker->sentence(),   // Oración
                    'propiedad2' => $this->faker->paragraph(),  // Párrafo
                    'propiedad2_1' => $this->faker->paragraph(3),  // Párrafo con tres oraciones
                    'propiedad3' => $this->faker->randomElement(['Valor 1', 'Valor 2', 'Valor 3']),   // Escoger entre varios elementos
                    'propiedad4' => $propiedad4,
                    'propiedad5' => Str::slug($propiedad4),
                    'propiedad6' => $this->faker->text(300),   // Texto de 300 caracteres
                    'propiedad7' => OtroModelo::all()->random()->id,   // Escoger al azar un id del modelo OtroModelo
                    // Parámetros: ruta, ancho, alto, catergoria (ya no funciona, ruta_completa)
                    // Si ruta_completa es:
                    // true: //public/storage/img/imagen.jpg
                    // false: /imagen.jpg
                    'propiedad8' => $this->faker->image('public/storage/img', 640, 480, null, true),
                    'propiedad9' => Hash::make('12345678'), // Encripta el valor contenido en el método make
                    'url_img' => $this->faker->imageUrl(1280, 720),

                    'job' => fake()->jobTitle(),
                    'phone' => fake()->phoneNumber(),
                    'website' => fake()->domainName(),
                    'address' => fake()->address(),
                    'city' => fake()->city(),
                    'country' => fake()->country(),
                    'sentence' => fake()->sentence(),
                    'text' => fake()->text(),
                    'number_rnd' => fake()->numberBetween(1, 10)
                ];
            }
        }        
        ```
+ Usar un factory en un seeder:
    + Programar seeder **database\seeders\ModeloSeeder.php**:
        ```php
        // ...
        use App\Models\Modelo;
        use Illuminate\Database\Seeder;

        class DatabaseSeeder extends Seeder
        {
            // ...
            public function run(): void
            {
                // Crea 50 registros del modelo Modelo tal como están definidos en el factory
                Modelo::factory(50)->create();
            }
        }    
        ```
        + **Nota**: para este tipo de seeder, se puede prescindir de este y ejecutar **Modelo::factory(50)->create();** directamente en **database\seeders\DatabaseSeeder.php**:
            ```php
            // ...
            use App\Models\Modelo;
            use Illuminate\Database\Seeder;

            class DatabaseSeeder extends Seeder
            {
                // ...
                public function run(): void
                {
                    // ...
                    Modelo::factory(50)->create();
                }
            }    
            ```

## Mutadores y accesores
### Agregar un mutador y un accesor a el modelo **Modelo**:
+ Modificar el modelo:
    ```php title="app\Models\Modelo.php"
    // ...
    use Illuminate\Database\Eloquent\Casts\Attribute;

    class Modelo extends Model
    {
        // ...
        // Definir método para administrar el mutador y el accesor
        // El método debe recibir el nombre del atributo que se desea modificar
        // Usando la forma tradicional
        protected function propiedad1(): Attribute {
            return new Attribute(
                // Accesor
                get: function($value) {
                    // retornar el valor aplicando la transformación deseada
                    return ucwords($value);
                },
                // Mutador
                set: function($value) {
                    // retornar el valor aplicando la transformación deseada
                    return strtolower($value);
                }
            );
        }

        // Definir método para administrar el mutador y el accesor
        // El método debe recibir el nombre del atributo que se desea modificar
        // Usando funciones flecha
        protected function propiedad2(): Attribute {
            return new Attribute(
                // Accesor
                get: fn($value) => ucwords($value),
                // Mutador
                set: fn($value) => strtolower($value)
            );
        }

        // Definir método para administrar el mutador y el accesor
        // El método debe recibir el nombre del atributo que se desea modificar
        // Usando la forma antigua
        // Accesor
        protected function getPropiedad3Attribute($value) {
            return  ucwords($value);
        }
        // Mutador
        protected function setPropiedad3Attribute($value) {
            $this->attributes['propiedad3'] = strtolower($value);
        }
    }
    ```
### Modificar el valor de un campo cuando este tiene el valor de NULL en BD
    ```php title="app\Models\Modelo.php"
    // ...
    use Illuminate\Database\Eloquent\Casts\Attribute;

    class Modelo extends Model
    {
        // ...
        protected function propiedad2(): Attribute {
            return new Attribute(
                // Accesor
                get: fn() => $this->propiedad2 ?? 'Valor en caso de NULL',
                // Mutador
                // ...
            );
        }
    }
    ```

## Custom Request (Form Request)
### Crear un Custom Request:
```bash
php artisan make:request StoreModelo
```
:::tip Nota
Se genera el archivo **app\Http\Requests\StoreModelo.php**.
:::
+ Ejemplo de programación del Form Request **app\Http\Requests\StoreModelo.php**:
    ```php
    // ...
    use Illuminate\Validation\Rules\File;
    // ...
    class StoreModelo extends FormRequest
    {
        // Reglas de autorización (normalmente se deja así)
        public function authorize(): bool
        {
            return true;
        } else {
            return false;
        }

        // Reglas de autorización (verificando usuario autenticado)
        public function authorize(): bool
        {
            if($this->usuer_id == auth()->user()->id){
                return true;
            }
        }

        // Reglas de validación
        public function rules(): array
        {
            if($this->modelo) {
                $modelo_id = ',' . $this->modelo->id;
            } else {
                $modelo_id = '';
            }
            return [
                'propiedad1' => 'required|min:12',
                // Otra forma de crea reglas de validación
                'propiedad1_1' => ['required', 'min:12'],
                'propiedad2' => 'required|unique:nombre_tabla',
                'propiedad2_1' => 'required|unique:nombre_tabla,campo_tabla',   // En caso de que el nombre del request no coincida con el campo de la tabla
                'propiedad3' => "required|unique:nombre_tabla,propiedad3,$modelo_id",
                'propiedad4' => 'in:1,2',
                'propiedad5_file' => 'image',
                'propiedad6' => 'nullable',
                'publicado' => 'required|boolean',
                'descripcion' => $request->publicado ? 'required' : 'nullable',
                'option_id' => 'required|exists:tabla_options,id',
                'category_id' => 'required|exists:categories,id',
                'file' => ['nullable', File::image()->max(7 * 1024)]
            ];
        }

        // Reglas de validación condicionales
        public function rules(): array
        {
            // Capturar parámetro de la ruta
            $parametro = $this->route()->parameter('paremetro');
            
            $rules = [
                'propiedad1' => 'required|min:12',
                'propiedad2' => 'required|unique:nombre_tabla',
                'propiedad3' => "required|unique:nombre_tabla,propiedad3,$modelo->id",
                'propiedad4' => 'in:1,2'
            ];

            if($parametro) {
                $rules['propiedad2'] = "required|unique:nombre_tabla,propiedad3,$parametro"
            }

            if($this->propiedad4 == 2) {
                $rules = array_merge($rules, [
                    'propiedad5' = 'required'
                ]);
            }

            return $rules;
        }

        // Método para personalizar los mensaje de error
        public function messages(): array
        {
            return [
                'propiedad1.required' => 'La propiedad 1 es obligatoria'
            ];
        }

        // Método para personalizar los atributos
        public function attributes(): array
        {
            return [
                'propiedad1' => 'Cambio de nombre'
            ];
        }
    }        
    ```
+ Ejemplo de uso en el controlador que lo invoca **app\Http\Controllers\ModeloController.php**:
    ```php
    // ...
    use App\Http\Requests\StoreModelo;
    // ...
    public function store(StoreModelo $request) {

        $modelo = new Modelo();
        $modelo->propiedad1 = $request->propiedad1;
        $modelo->save();
        return redirect()->route('modelos.show', $modelo);
    }
    // ...   
    ```

## Policy
+ Crear una policy:
    + $ php artisan make:policy ModeloPolicy
+ Implementar una regla de autorización en **app\Policies\ModeloPolicy.php**:
    ```php
    // ...
    use App\Models\Modelo;
    use App\Models\User;

    class ModeloPolicy
    {
        // ...
        // Crear regla de autorización
        public function regla_autorizacion(User $user, Modelo $modelo) {
            $condicion_de_autorizacion = true;  // Ejemplo: $user->id == $modelo->user_id
            if($condicion_de_autorizacion) {
                return true;
            } else {
                return false;
            }
        }
    }    
    ```
+ Hacer referencia a la policy en el modelo **app\Http\Controllers\ModeloController.php**:
    ```php
    // ...
    public function edit(Modelo $modelo) {
        $this->authorize('regla_autorizacion', $modelo);
        // ...
    }

    public function update(Request $request, Modelo $modelo) {
        $this->authorize('regla_autorizacion', $modelo);
        // ...
    }

    public function destroy(Modelo $modelo) {
        $this->authorize('regla_autorizacion', $modelo);
        // ...
    }    
    // ...
    ```


## Configuración
+ Configurar proyecto al español:
    + Editar **config\app.php**:
        ```php
        // ...
        return [
            // ...
            'locale' => 'es',
            // ...
        ];        
        ```

## Mailables
:::tip Nota
Sitios web de proveedores para envio de correos electrónicos:
+ [@mailgun](https://try.mailgun.com/api-1)
+ [Postmark](https://postmarkapp.com)
:::
+ Indicar credenciales del servicio de correos a utilizar en **.env**:
    + Ejemplo:
        ```env title=".env"
        MAIL_MAILER=smtp
        MAIL_HOST=mailpit
        MAIL_PORT=1025
        MAIL_USERNAME=null
        MAIL_PASSWORD=null
        MAIL_ENCRYPTION=null
        MAIL_FROM_ADDRESS="hello@example.com"
        MAIL_FROM_NAME="${APP_NAME}"        
        ```
+ Crear un mailable:
    ```bash
    php artisan make:mail CorreoMailable
    ```
    :::tip Nota
    Esta acción crea el siguiente archivo: **app\Mail\CorreoMailable.php**.
    :::
+ Crear vista del correo:
    ```php title="resources\views\emails\correo.blade.php"
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Correo</title>
    </head>
    <body>
        <h1>Correo</h1>
        <p>{{ $data['message'] }}</p>
    </body>
    </html>
    ```
    + **Nota:** si para el correo se usan estilos bootstrap, tailwind, etc, será necesario escribir los estilos en el mismo correo.
+ Modificar **app\Mail\CorreoMailable.php**:
    ```php title="app\Mail\CorreoMailable.php"
    // ...
    use Illuminate\Mail\Mailables\Address;

    class CorreoMailable extends Mailable
    {
        // ...
        public $data;

        // ...
        public function __construct($data)
        {
            $this->data = $data;
        }
        // ...
        public function envelope(): Envelope
        {
            return new Envelope(
                from: new Address($this->data['from_email'], $this->data['from_name']),
                subject: $this->data['asunto']
            );
        }
        // ...
        public function content(): Content
        {
            return new Content(
                view: 'emails.correo'
            );
        }
        // ...
    }
    ```
+ Ejemplo de invocación del correo:
    ```php
    // ...
    use App\Mail\CorreoMailable;
    use Illuminate\Support\Facades\Mail;
    // ...
    $data = [
        'from_email' => 'mi.correo1@correo.com', 
        'from_name' => 'Mi nombre', 
        'asunto' => 'asunto', 
        'message' => 'mensaje...'
    ]

    Mail::to('mi.correo1@correo.com')->send(new CorreoMailable($data));

    // Otra forma:
    $correo = new \App\Mail\CorreoMailable($data);
    \Illuminate\Support\Facades\Mail::to('mi.correo1@correo.com')->bcc('mi.correo2@correo.com')->send($correo);
    ```
### Adjuntar un archivo a un correo
    ```php title="app\Mail\CorreoMailable.php"
    // ...
    class CorreoMailable extends Mailable
    {
        // ...
        public $data;
        // ...
        public function __construct($data) {
            $this->data = $data;
        }
        // ...
        public function build() {
            return $this->from($this->data['email'])
                ->subject('Mensaje...')
                ->attach($this->data['file']->getRealPath(), [
                    'as' => $this->data['file']->getClientOriginalName(),
                    'mime' => $this->data['file']->getMimeType()
                ])
                ->markdown('mail.correo', [
                    'data' => $this->data
                ]);
        }
        // ...
    }
    ```
### Poner en cola el envío de correos
+ Modificar mailable:
    ```php title="app\Mail\CorreoMailable.php"
    // ...
    use Illuminate\Contracts\Queue\ShouldQueue;

    class CorreoMailable extends Mailable implements ShouldQueue
    {
        // ...
    }
    ```
+ Configurar proyecto para que pueda trabajar con colas:
    ```env title=".env"
    QUEUE_CONNECTION=database
    ```
+ Crear tabla **jobs**:
    ```bash
    php artisan queue:table
    php artisan migrate
    ```
+ Ejecutar las tareas en cola:
    ```bash
    php artisan queue:work
    ```
    :::tip Nota
    En cosa de poner en cola correos con archivos adjuntos, será necesario almacenar este y luego pasar la url de su ubicación.
    Ahora, en lugar de usar el método **attach**, se deberá usar el método **attachFromStorage**
    :::
### Publicar vista del correo:
```bash
php artisan vendor:publish --tag=laravel-mail
```
### Ejemplo de estructura de un mailable
```php title="app\Mail\CorreoMailable.php"
// ...
//use Illuminate\Bus\Queueable;
//use Illuminate\Contracts\Queue\ShouldQueue;
//use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
//use Illuminate\Mail\Mailables\Content;
//use Illuminate\Mail\Mailables\Envelope;
//use Illuminate\Queue\SerializesModels;
// ...
class CorreoMailable extends Mailable
{
    use Queueable, SerializesModels;
    
    // ...
    public function __construct(public $data) {}

    // ...
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(env('MAIL_FROM_ADDRESS', $this->data['from_email']), env('MAIL_FROM_NAME', $this->data['from_name'])),
            /* from: => [
                'address' => env('MAIL_FROM_ADDRESS', $this->data['from_email']),
                'name' => env('MAIL_FROM_NAME', $this->data['from_name'])
            ], */
            subject: $this->data['asunto'],
            /* reply_to: => [
                'address' => $this->data['from_email_replay_to'],
                'name' => $this->data['from_name_replay_to']
            ], */
        );
    }

    // ...
    public function content(): Content
    {
        return new Content(
            view: 'emails.correo'
        );
    }

    // ...
    public function attachments(): array
    {
        return [];
    }
}
```

## Componentes
+ Crear un componente blade anónimo:
    + Crear archivo **resources\views\components\componente.blade.php**:
        ```php
        @props(['title', 'clase' => 'clase2', 'variable2'])

        @php
            switch($clase) {
                case 'clase1':
                    $clases = "bg-blue-100";
                    break;
                case 'clase2':
                    $clases = "bg-red-100";
                    break;
                default:
                    $clases = "bg-black-100";
                    break;
            }
        @endphp

        <div {{ $attributes->merge(['class' => 'm-5' ]) }}>
            <h1 class="fs-2 {{ $clases }}">{{ $title }}</h1>
            <p>{{ $otravariable }}</p>
            <p>{{ $variable2 }}</p>
            <p>
                {{ $slot }} {{-- Aquí enviaremos por parámetro el contenido principal de mi componente --}}
            </p>
            {{-- En la variable attributes se almacenan todas las variables que no se rescatan en los props o en los slut --}}
            <p>{{ $attributes }}</p>
        </div>    
        ```
        + **Nota:** para ver el componente, en la vista que lo invoca, escribir:
            ```php
            @php
                $variable = 'Valor de la variable';
            @endphp

            <x-componente title="Título del componente" clase="clase1" :variable2="$variable" id="mi_id">
                <x-slot name="otravariable">
                    Contenido de mi otra variable
                </x-slot>
                Contenido principal del componente
            </x-componente>
            ```
+ Crear un componente blade de clase:
    + Ejecutar:
        + $ php artisan make:component ComponenteClase
        + **Nota:** crea dos archivos:
            + Lógica: app\View\Components\ComponenteClase.php
            + Vista: resources\views\components\componente-clase.blade.php
    + Diseñar vista del componente:
        ```php
        <div {{ $attributes->merge(['class' => 'm-5' ]) }}>
            <h1 class="fs-2 {{ $clases }}">{{ $title }}</h1>
            <p>{{ $otravariable }}</p>
            <p>{{ $variable2 }}</p>
            <p>
                {{ $slot }} {{-- Aquí enviaremos por parámetro el contenido principal de mi componente --}}
            </p>
            {{-- En la variable attributes se almacenan todas las variables que no se rescatan en los props o en los slut --}}
            <p>{{ $attributes }}</p>
        </div>        
        ```
    + Programar lógica del componente:
        ```php
        // ...
        class ComponenteClase extends Component
        {
            public $title;
            public $clases;
            public $variable2;
            // ...
            public function __construct($title, $clase = 'clase1', $variable2)
            {
                switch($clase) {
                    case 'clase1':
                        $clases = "bg-blue-100";
                        break;
                    case 'clase2':
                        $clases = "bg-red-100";
                        break;
                    default:
                        $clases = "bg-black-100";
                        break;
                }

                $this->title = $title;
                $this->clases = $clases;
                $this->variable2 = $variable2;
            }
            // ...
        }
        ```
    + Se invoca como el componente anónimo.
+ Crear un componente como plantilla:
    + $ php artisan make:component AppLayout
    + **Nota 1**: se crea los siguientes archivos:
        + Lógica: **..\app\View\AppLayout.php**.
        + Vista: **..\resource\views\components\app-layout.blade.php**.
    + **Nota 2**: si se desea mover la vista (**..\resource\views\components\app-layout.blade.php**) del componente a una nueva carpeta dentro de **components** se deberá modificar la invocación de la misma en la parte lógica del componente (**..\app\View\AppLayout.php**)
    + Diseñar vista del componente:
        ```php
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <!-- ... -->
            @stack('meta')
            <!-- ... -->
            <title>{{ $title ?? 'Nombre por defecto' }}</title>
            <!-- ... -->
            {{-- incluir aquí todos los CDN necesarios --}}
            <!-- ... -->
            @stack('css')
            <!-- ... -->
        </head>
        <body>
            <nav>
                {{-- diseño de un nav --}}
            </nav>

            {{ $slot }}

            <footer>
                {{-- diseño de un footer --}}
            </footer>
            <!-- ... -->
            @stack('js')
            <!-- ... -->
        </body>
        </html>        
        ```
    + Usar la plantilla en una vista blade cualquiera:
        ```html
        <x-app-layout>
            <x-slot name="title">
                Nombre de la vista
            </x-slot>
            <!-- vista -->
        </x-app-layout>
        ```
    

## Middlewares
### Ejemplo de creación de un middleware:
1. Crear middleware:
    ```bash
    php artisan make:middleware MiddlewarePrueba
    ```
    :::tip Nota
    Esta acción crea el middleware en **app\Http\Middleware\MiddlewarePrueba.php**.
    :::
2. Establecer lógica del middleware:
    ```php title="app\Http\Middleware\MiddlewarePrueba.php"
    // ...
    public function handle(Request $request, Closure $next): Response
    {
        if($request->autorizado) {
            return $next($request);
        } else {
            return redirect('noautorizado');
        }
    }
    // ...
    ```
3. Registrar middleware:
  ```php title="app\Http\Kernel.php"
  // ...  
  protected $middlewareAliases = [
      // ...
      'prueba' => \App\Http\Middleware\MiddlewarePrueba::class
  ];
  /* A partir de cierta versión de Laravel este array se llama: $routeMiddleware */
  // ...        
  ```
4. Crear rutas para probar middleware:
    ```php title="routes\web.php"
    Route::get('prueba', function() {
        return "Has accedido correctamente a esta ruta";
    })->middleware('prueba');

    Route::get('prueba2', function() {
        return "Has accedido correctamente a esta ruta";
    })->middleware(['prueba', 'auth:sanctum']);

    Route::get('noautorizado', function() {
        return "No estas autorizado para acceder a esta ruta";
    });
    ```
### Formas de proteger una ruta:
+ Desde el archivo de rutas:
    ```php title="routes\mi_archivo_de_rutas.php"
    // Aplicar middleware a una ruta
    Route::middleware('mi_middleware')->get('mi_ruta', [MiControlador::class, 'mi_metodo']);

    // Aplicar middleware a un grupo de rutas
    Route::middleware('mi_middleware')->group(function () {
        Route::get('mi_ruta1', [MiControlador1::class, 'mi_metodo1']);
        Route::get('mi_ruta2', [MiControlador2::class, 'mi_metodo2']);
        // ...
    });
    
    // Aplicar varios middlewares a una ruta
    Route::middleware(['mi_middleware1', 'mi_middleware2', 'mi_middleware3'])->get('mi_ruta', [MiControlador::class, 'mi_metodo']);

    // Aplicar varios middlewares a un grupo de rutas
    Route::middleware(['mi_middleware1', 'mi_middleware2', 'mi_middleware3'])->group(function () {
        Route::get('mi_ruta1', [MiControlador1::class, 'mi_metodo1']);
        Route::get('mi_ruta2', [MiControlador2::class, 'mi_metodo2']);
        // No aplicar el middleware mi_middleware2 a la siguiente ruta
        Route::get('mi_ruta3', [MiControlador3::class, 'mi_metodo3'])->withoutMiddleware('mi_middleware2');
        // ...
    });
    ```
+ Desde el controlador:
    ```php title="app\Http\Controllers\ModeloController.php"
    // ...
    class ModeloController extends Controller
    {
        public function _construct() {
            $this->middleware('mi_middleware')
        }
        // ...
    }


## Storage
+ Acceder al storage:
    ```php
    <img src="{{ Storage::url($ruta) }}" alt="">
    ```
+ Verificar si un archivo existe:
    ```php
    if(Storage::exists($path)) {
        // Acción a tomar si existe
        $path = str_replace('.ext', '-copia.ext', $path);
    }
    ```
+ Copiar un archivo:
    ```php
    $archivo_original = "ruta_completa_original";
    $archivo_copia = "ruta_completa_copia";
    Storage::copy($archivo_original, $archivo_copia);
    ```
+ Mover un archivo:
    ```php
    $archivo_origen = "ruta_completa_origen";
    $archivo_destino = "ruta_completa_destino";
    Storage::copy($archivo_origen, $archivo_destino);
    ```
+ Lista de los paths de todos los archivos contenidos en una carpeta:
    ```php
    $array_de_archivo = Storage::files('carpeta');
    ```
+ Lista de los paths de todos los archivos contenidos en una carpeta con los archivos contenidos en sus subcarpetas:
    ```php
    $array_de_archivo = Storage::allFiles('carpeta');
    ```
+ Lista de los paths de todos los directorios contenidos en una carpeta:
    ```php
    $array_de_archivo = Storage::directories('carpeta');
    ```
+ Lista de los paths de todos los directorios y subdirectorios contenidos en una carpeta:
    ```php
    $array_de_archivo = Storage::allDirectories('carpeta');
    ```
+ Crear un directorio:
    ```php
    Storage::makeDirectory('carpeta/directorio');
    ```
+ Eliminar un directorio:
    ```php
    Storage::deleteDirectory('carpeta/directorio');
    ```
+ Descargar un archivo:
    ```php
    return Storage::download($path);
    ```
    ó:
    ```php
    return Storage::download($path);
    ```
+ Obtener a url de un archivo:
    ```php
    $url = Storage::url($path);
    ```
+ Generar una url temporal:
    ```php
    $url = Storage::temporalUrl('nombre_del_archivo', now()->addMonutes(10));
    // El segundo parámetro es el tiempo de expiración
    ```
+ Algunos métods asociados a archivos:
    ```php
    // ...
    public function metodo(Request $request) {
        // Establecer nombre del archivo
        $fileName = time().'.'.$request->file->extension();
        
        // Mover archivo
        $request->file->move('ruta_destino', 'nombre_del_archivo');
        
        // Guardar archivo como
        $request->file->storeAs('ruta_destino', 'nombre_del_archivo');
    }
    // ...
    ```

## Provider:
### Indicar vista con la que se iniciará la aplicación:
+ Modificar el provider **app\Providers\RouteServiceProvider.php**:
    ```php
    // ...
    class RouteServiceProvider extends ServiceProvider
    {
        // ...
        public const HOME = '/mi_ruta';
        // ...
    }        
    ```
### Crear un archivo de rutas:
+ Crear archivo de rutas **routes\mis_rutas.php**:
    ```php
    <?php

    use Illuminate\Support\Facades\Route;
    // ...       
    ```
+ Modificar provider **app\Providers\RouteServiceProvider.php** para que **mis_rutas** se reconozca como archivo de rutas:
    ```php
    // ...
    public function boot(): void
    {
        // ...
        $this->routes(function () {
            // ...
            Route::middleware('web', 'otros_middleware')    // Por ejemplo: auth para usuarios autenticados
                ->prefix('mi_prefijo_en_ruta')
                ->group(base_path('routes/mi_ruta.php'));
        });
    }        
    // ...       
    ```
### Indicar que una ruta recibirá un valor númerico:
+ Modificar el provider **app\Providers\RouteServiceProvider.php**:
    ```php
    // ...
    class RouteServiceProvider extends ServiceProvider
    {
        // ...
        public function boot(): void
        {
            Route::pattern('id', '[0-9]+');
            // ...
        }
    }
    ```
### Pasar parámetros a todas las vistas:
+ Modificar el provider **app\Providers\AppServiceProvider.php**:
    ```php
    // ...
    use Illuminate\Support\Facades\View;

    class AppServiceProvider extends ServiceProvider
    {
        // ...
        public function boot(): void
        {
            View::share('nombre_variable', 'valor de la variable nombre_variable');
            /*
                Ahora, desde cualquier vista se podrá acceder a $nombre_variable
            */
        }
    }        
    ```
    :::tip Nota
    Es mejor práctica realizar esta acción en un provider especifico para esto, por ejemplo se podría crear un provider de nombre **ViewServiceProvider**.
    :::
### Establecer el número máximo de solicitudes http:
+ Modificar el provider **RouteServiceProvider**:
```php title="00proyectos_laravel\pruebas\app\Providers\RouteServiceProvider.php"
// ...
protected function configureRateLimiting() {
    RateLimiter::for('api', function (Request $request) {
        return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
    });
}
// ...
```
### Crear un provider:
```bash
php artisan make:provider PruebaServiceProvider
```
:::tip Nota
El provider se creo en **app\Providers\PruebaServiceProvider.php**.
:::
+ Registrar provider en **config\app.php**:
    ```php
    // ...
    return [
        // ...
        'providers' => ServiceProvider::defaultProviders()->merge([
            // ...
            App\Providers\PruebaServiceProvider::class,
        ])->toArray(),
        // ...
    ];
    ```
### Proteger rutas y líneas de código con Gate
+ Definir gate en provider **AppServiceProvider**:
    ```php title="...\app\Providers\AppServiceProvider.php"
    // ...
    use Illuminate\Support\Facades\Gate;
    // ...
    class AppServiceProvider extends ServiceProvider
    {
        // ...
        public function boot(): void
        {
            Gate::define('name_gate', function ($users, $otros_parametros) {
                // Establecer lógica
                // debe retornar true o false
            });
        }
    }    
    ```
+ Proteger líneas de código:
    ```php
    @can('name_gate)
        <!-- Código a proteger -->
    @endcan    
    ```
+ Proteger rutas desde el provider **RouteServiceProvider**:
    ```php title="...\app\Providers\RouteServiceProvider.php"
    // ...
    public function boot(): void
    {
        // ...
        $this->routes(function () {
            // ...
            Route::middleware('web, 'can:name_gate')
                ->group(base_path('routes/web.php'));
        });
    }
    // ...
    ```
+ Proteger desde un controlador
    + Forma 1:
        ```php
        // ...
        public function metodo_controlador() {
            if(!Gate::allows('name_gate', $otros_parametros)) {
                abort(403, 'Sin permiso');
            }
            // ...
        }
        // ...
        ```
    + Forma 2:
        ```php
        // ...
        public function metodo_controlador() {
            $this->autorize('name_gate', $otros_parametros);
            // ...
        }
        // ...
        ```


## Observer:
+ Crear un observer:
    + $ php artisan make:observer ModeloObserver --model=Modelo
    + **Nota**: me crea un observer en **app\Observers\ModeloObserver.php**.
+ Programar un observer (modificar el observer **app\Observers\ModeloObserver.php**):
    ```php
    // ...
    public function created(Modelo $modelo): void
    {
        // Se activa al crear un registro
    }
    // ...
    public function creating(Modelo $modelo): void
    {
        // Se activa justo antes de crear un registro
    }
    // ...
    public function updated(Modelo $modelo): void
    {
        // Se activa al actualizar un registro
    }
    // ...
    public function deleted(Modelo $modelo): void
    {
        // Se activa al aleminar un registro
    }
    // ...
    public function deleting(Modelo $modelo): void {
        // Se activa justo antes de aliminar un registro
    }
    // ...
    public function restored(Modelo $modelo): void
    {
        //
    }
    // ...
    public function forceDeleted(Modelo $modelo): void
    {
        //
    }
    ```
+ Registrar un observer (modificar el provider **app\Providers\EventServiceProvider.php**):
    ```php
    // ...
    use App\Models\Modelo;
    use App\Observers\ModeloObserver;

    class EventServiceProvider extends ServiceProvider
    {
        // ...
        public function boot(): void
        {
            Modelo::observe(ModeloObserver::class);
        }
        // ...
    }
    ```

## Pasar parámetros a determinadas vistas
1. Crear archivo **app\View\Composers\ViewComposer.php**:
    ```php
    <?php

    namespace App\View\Composers;
    use Illuminate\View\View;

    class ViewComposer {
        public function compose(View $view) {
            $view->with('mi_parametro', 'Valor de mi_parametro');
        }
    }    
    ```
2. Crear providr **ViewServiceProvider**
    + $ php artisan make:provider ViewServiceProvider
    + Programar provider **app\Providers\ViewServiceProvider.php**:
        ```php
        // ...
        use Illuminate\Support\Facades\View;

        class AppServiceProvider extends ServiceProvider
        {
            // ...
            public function boot(): void
            {
                View::composer(['vista1', 'vista2'], ViewComposer::class);
                // Si las vistas comienzan con un mismo nombre puedo escribir la instrucción de la siguiente forma
                // View::composer('vista*', ViewComposer::class);
                /*
                    Ahora, desde las vistas vista1 y vista2 se podrá acceder a $mi_parametro
                */
            }
        }        
        ```
    + Registrar provider en **config\app.php**:
        ```php
        // ...
        return [
            // ...
            'providers' => ServiceProvider::defaultProviders()->merge([
                // ...
                App\Providers\PruebaServiceProvider::class,
            ])->toArray(),
            // ...
        ];
        ```


## Crear una vista markdown:
1. Instalar la dependencia:
    + $ composer require graham-campbell/markdown
2. Crear una vista para renderizar el archivo markdown **resources\views\markdown.blade.php**:
    ```php
    {{-- Puedes incluir estilos CSS específicos para Markdown si lo deseas --}}
    <style>
        /* Estilos CSS específicos para el contenido Markdown */
    </style>

    {{-- Mostrar el contenido HTML rendereado --}}
    {!! $htmlContent !!}    
    ```
3. Crear una vista markdown **public\markdown.md**.
4. Ejemplo del llamado de un archivo markdown en **routes\web.php**:
    ```php
    // ...
    use GrahamCampbell\Markdown\Facades\Markdown;
    use Illuminate\Support\Facades\File;
    // ...
    Route::get('markdown', function () {
        // Ruta al archivo Markdown
        $filePath = public_path('markdown.md');

        // Leer el contenido del archivo
        $markdownContent = File::get($filePath);    

        // Convertir Markdown a HTML usando la fachada Markdown
        $htmlContent = Markdown::convertToHtml($markdownContent);

        // Pasar el contenido HTML a la vista
        return view('markdown')->with('htmlContent', $htmlContent);
    });    
    ```

## Livewire:
### Crear un componente Livewire:
```bash
php artisan make:livewire componente-livewire
```
+ Vista del compoente: resources\views\livewire\componente-livewire.blade.php
+ Controlador del componente: app\Livewire\ComponenteLivewire.php
+ Para llamar al componennte desde una vista:
  ```php
  @livewire('componente-livewire')
  ```
+ Otra forma de llamar al componennte desde una vista:
  ```php
  <livewire:componente-livewire />
  ```
### Bindeo de variables en un componente livewire:
    ```php title="app\Livewire\ComponenteLivewire.php"
    // ...
    class MiComponenteLiveWire extends Component {
        // ...
        public $variable;
        // ...
    }
    ```
    ```html title="resources\views\livewire\componente-livewire.blade.php"
    <!-- ... -->
    <input type=text wire:model="variable" />
    <!-- ... -->
    ```
### Ciclos de vida de un componente livewire:
    ```php
    // ...
    class MiComponenteLiveWire extends Component {
        // ...
        public $variable;
        // Montar componente
        public function mount() {
            // Acciones a ejecutar al montar componente
            $this->fill(['variable' => 20]);
        }
        // ...
    }
    ```
### Propiedad computada
+ Estructura de una propiedad computada en el controlador de livewire:
    ```php
    public getNombreProperty() {
        // Lógica para $valor
        return $valor;
    }
    ```
    :::tip Nota
    En **getNombreProperty**, Nombre corresponderá al nombre de la propiedad, y la forma de referirse a esta tanto en el controlador como en la vista livewire será de la siguiente forma:
    ```php
    $this->nombre
    ```
    :::
### Para indicar a un controlador de livewire que:
+ Use la paginación de Tailwind:
    ```php
    // ...
    use Livewire\WithPagination;

    class MiComponenteLiveWire extends Component {
        use WithPagination;
        // ...
    }
    ```
+ Use el tema de paginación de Bootstrap:
    ```php
    // ...
    class MiComponenteLiveWire extends Component {
        // ...
        protected $paginationTheme = "bootstrap";
        // ...
    }
    ```
+ Resetear la paginación cuando se modifique la variable de búsqueda ($search):
    ```php
    // ...
    class MiComponenteLiveWire extends Component {
        // ...
        public $search; // Variable de búsqueda

        public updatingSerach() {
            $this->resetPage();
        }
        // ...
    }
    ```
### Integrar **select2** en livewire:
+ **Página de SELECT2**: https://select2.org
+ **Página de jQuery**: https://releases.jquery.com 
1. Copiar los CDN de select2 y jQuery en la plantilla principal **resources\views\layouts\app.blade.php**:
    ```html
    <!-- ... -->
    <head>
        <!-- ... -->
        <!-- Styles -->
        <!-- ... -->
        <!-- Colocar en la parte de los css -->
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

        <!-- Scripts -->
        <!-- ... -->
        <!-- Colocar en la parte de los scripts -->
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>        
    </head>
    ```
2. Ejemplo de uso:
    1. Crear un compoente livewire: 
        + $ php artisan make:livewire select2
    2. Incluir el nuevo compoenente en la vista **resources\views\dashboard.blade.php**:
        ```php
        <!-- ... -->
        @livewire('select2')
        <!-- ... -->
        ```
    3. Programar el controlador livewire **app\Livewire\Select2.php**:
        ```php
        // ...
        class Select2 extends Component
        {
            public $opcion = 3;
            // ...
        }            
        ```
    4. Diseñar la vista livewire **resources\views\livewire\select2.blade.php**:
        ```html
        <div class="m-5">
            <p>{{ $opcion }}</p>
            <div wire:ignore>
                <select class="select2" wire:model="opcion">
                    <option value="1">Laravel</option>
                    <option value="2">Vue.js</option>
                    <option value="3">PHP</option>
                    <option value="4">Javascript</option>
                    <option value="5">MySQL</option>
                    <option value="6">Node.js</option>
                    <option value="7">React.js</option>
                </select>
            </div>

            <script>
                $(document).ready(function() {
                    $('.select2').select2();
                    $('.select2').on('change', function() {
                        @this.set('opcion', this.value);
                    });
                });
            </script>
        </div>
        ```
        :::tip Nota
        Para resolver algunos problemas de incompatibilidad entre livewire y javascript ver el siguiente video:
        + https://codersfree.com/courses-status/aprende-laravel-avanzado/incluir-ckeditor-5-en-la-caja-de-comentarios
        :::
### Llaves (keys)
+ Cuando en una vista de livewire usamos un **@foreach** para iterar una variable de livewire es recomendable agregar una llave dentro del lazo para evitar fallos:
    ```html
    <ul>
    @foreach($elementos as $elemento)
        <li wire:key="elemento-{{ $elmento->id }}">{{ $elemento }}</li>
    @endforeach
    </ul>
    ```
### Eventos comunes en Livewire
1. wire:click
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se hace clic en el elemento.
    + Ejemplo:
        ```html
        <button wire:click="save">Guardar</button>
        ```
    + Se utiliza para capturar clics en botones, enlaces u otros elementos clicables. Cuando se hace clic en el elemento, se llama al método especificado en el componente Livewire.
    :::
2. wire:change
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando el valor del elemento cambia.
    + Ejemplo:
        ```html
        <input type="text" wire:change="updateName">
        ```
    + Es útil para inputs y selectores donde deseas capturar cambios de valor. Se dispara cada vez que el valor del elemento cambia.
    :::
3. wire:blur
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando el elemento pierde el foco.
    + Ejemplo:
        ```html
        <input type="text" wire:blur="validateName">
        ```
    + Se utiliza principalmente en formularios para validar o procesar datos cuando el campo pierde el foco.
    :::
4. wire:focus
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando el elemento recibe el foco.
    + Ejemplo:
        ```html
        <input type="text" wire:focus="focusHandler">
        ```
    + Útil para acciones que deben ocurrir cuando un campo de entrada recibe el foco, como mostrar sugerencias o resaltar el campo.
    :::
5. wire:keydown
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se presiona una tecla.
    + Ejemplo:
        ```html
        <input type="text" wire:keydown="handleKeydown">
        ```
    + Útil para manejar eventos relacionados con el teclado. Puedes usarlos para crear accesos directos de teclado o para manejar la entrada de texto en tiempo real.
    :::
6. wire:keyup
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se suelta una tecla.
    + Ejemplo:
        ```html
        <input type="text" wire:keyup="handleKeyup">
        ```
    + Útil para manejar eventos relacionados con el teclado. Puedes usarlos para crear accesos directos de teclado o para manejar la entrada de texto en tiempo real.
    :::
7. wire:submit
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se envía un formulario.
    + Ejemplo:
        ```html
        <form wire:submit.prevent="submitForm">
            <button type="submit">Enviar</button>
        </form>
        ```
    + Ideal para formularios, ya que permite interceptar el envío del formulario para manejar la lógica del lado del servidor en el componente Livewire sin una recarga de página.
    :::
8. wire:model
    :::tip Descripción
    + Enlaza el valor del input con una propiedad del componente Livewire.
    + Ejemplo:
        ```html
        <input type="text" wire:model="name">
        ```
    + wire:model y sus variantes (lazy, debounce, defer): Proporcionan una forma de enlace de datos bidireccional entre los campos de entrada del formulario y las propiedades del componente Livewire. lazy actualiza solo cuando se pierde el foco, debounce actualiza después de un retraso, y defer actualiza cuando se envía el formulario.
    :::
9. wire:model.lazy
    :::tip Descripción
    + Enlaza el valor del input con una propiedad del componente Livewire, pero solo actualiza la propiedad cuando el input pierde el foco.
    + Ejemplo:
        ```html
        <input type="text" wire:model.lazy="name">
        ```
    :::
10. wire:model.debounce
    :::tip Descripción
    + Enlaza el valor del input con una propiedad del componente Livewire, pero actualiza la propiedad después de un retraso (debounce).
    + Ejemplo:
        ```html
        <input type="text" wire:model.debounce.500ms="name">
        ```
    :::
11. wire:model.defer
    :::tip Descripción
    + Enlaza el valor del input con una propiedad del componente Livewire, pero solo actualiza la propiedad cuando el formulario es enviado.
    + Ejemplo:
        ```html
        <input type="text" wire:model.defer="name">
        ```
    :::
12. wire:init
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando el componente es inicializado.
    + Ejemplo:
        ```html
        <div wire:init="loadData">
            Cargando...
        </div>
        ```
    + Se usa para ejecutar lógica al inicializar el componente, como cargar datos necesarios antes de mostrar el contenido.
    :::
13. wire:mouseover
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando el mouse se pasa sobre el elemento.
    + Ejemplo:
        ```html
        <div wire:mouseover="handleMouseOver">Pasa el mouse por aquí</div>
        ```
    :::
14. wire:mouseout
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando el mouse sale del elemento.
    + Ejemplo:
        ```html
        <div wire:mouseout="handleMouseOut">Sal del mouse de aquí</div>
        ```
    :::
15. wire:mousedown
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se presiona el botón del mouse sobre el elemento.
    + Ejemplo:
        ```html
        <div wire:mousedown="handleMouseDown">Presiona el botón del mouse aquí</div>
        ```
    :::
16. wire:mouseup
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se suelta el botón del mouse sobre el elemento.
    + Ejemplo:
        ```html
        <div wire:mouseup="handleMouseUp">Suelta el botón del mouse aquí</div>
        ```
    :::
17. wire:dblclick
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se hace doble clic en el elemento.
    + Ejemplo:
        ```html
        <button wire:dblclick="handleDoubleClick">Haz doble clic aquí</button>
        ```
    :::
18. wire:keydown.enter
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se presiona la tecla Enter.
    + Ejemplo:
        ```html
        <input type="text" wire:keydown.enter="submitForm">
        ```
    :::
19. wire:keydown.escape
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se presiona la tecla Escape.
    + Ejemplo:
        ```html
        <input type="text" wire:keydown.escape="clearInput">
        ```
    :::
20. wire:poll
    :::tip Descripción
    + Actualiza el componente Livewire periódicamente (polling).
    + Ejemplo:
        ```html
        <div wire:poll.1000ms="refreshData">Datos actualizados cada segundo</div>
        ```
    :::
21. wire:offline
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando la conexión a internet se pierde.
    + Ejemplo:
        ```html
        <div wire:offline>
            No tienes conexión a internet
        </div>
        ```
    :::
22. wire:online
    :::tip Descripción
    + Ejecuta una acción en el componente Livewire cuando se restablece la conexión a internet.
    + Ejemplo:
        ```html
        <div wire:online>
            Conexión a internet restablecida
        </div>
        ```
    :::
23. wire:dirty
    :::tip Descripción
    + Se activa cuando el componente Livewire tiene cambios sin guardar.
    + Ejemplo:
        ```html
        <input type="text" wire:model="name" wire:dirty.class="input-dirty">
        ```
    :::
24. wire:loading
    :::tip Descripción
    + Muestra el elemento solo cuando el componente Livewire está realizando una acción de carga.
    + Ejemplo:
        ```html
        <div wire:loading>
            Cargando...
        </div>
        ```
    :::
25. wire:target
    :::tip Descripción
    + Se utiliza junto con wire:loading para especificar qué acción debe activar el estado de carga.
    + Ejemplo:
        ```html
        <button wire:click="save" wire:loading.attr="disabled" wire:target="save">Guardar</button>
        ```
    :::
26. wire:ignore
    :::tip Descripción
    + Ignora el procesamiento de Livewire en el elemento.
    + Ejemplo:
        ```html
        <div wire:ignore>
            Este contenido no será manejado por Livewire
        </div>
        ```
    :::
27. wire:key
    :::tip Descripción
    + Proporciona una clave única para el elemento, útil para mantener el estado de los elementos en listas.
    + Ejemplo:
        ```html
        <div wire:key="unique-key">
            Elemento con clave única
        </div>
        ```
    :::
### Resumen de Directivas y Eventos de Livewire
### Eventos del DOM
+ wire:click: Acción en clic.
+ wire:change: Acción en cambio de valor.
+ wire:blur: Acción en pérdida de foco.
+ wire:focus: Acción en recibir foco.
+ wire:keydown: Acción en tecla presionada.
+ wire:keyup: Acción en tecla soltada.
+ wire:submit: Acción en envío de formulario.
+ wire:mouseover: Acción al pasar el mouse.
+ wire:mouseout: Acción al salir el mouse.
+ wire:mousedown: Acción al presionar el botón del mouse.
+ wire:mouseup: Acción al soltar el botón del mouse.
+ wire:dblclick: Acción al hacer doble clic.
+ wire:keydown.enter: Acción al presionar Enter.
+ wire:keydown.escape: Acción al presionar Escape.
#### Directivas de Modelado
+ wire:model: Enlace bidireccional con actualización instantánea.
+ wire:model.lazy: Enlace bidireccional con actualización al perder foco.
+ wire:model.debounce: Enlace bidireccional con retraso.
+ wire:model.defer: Enlace bidireccional con actualización en envío de formulario.
#### Directivas de Estado
+ wire:loading: Muestra el elemento mientras el componente está cargando.
+ wire:loading.remove: Elimina el elemento mientras el componente está cargando.
+ wire:loading.class: Añade una clase mientras el componente está cargando.
+ wire:loading.attr: Añade un atributo mientras el componente está cargando.
+ wire:target: Especifica la acción que debe activar el estado de carga.
+ wire:poll: Actualiza el componente periódicamente.
+ wire:poll.keep-alive: Mantiene el componente vivo sin re-renderizarlo.
+ wire:poll.visible: Solo realiza polling cuando el componente es visible.
+ wire:offline: Acción cuando la conexión a internet se pierde.
+ wire:online: Acción cuando la conexión a internet se restablece.
+ wire:dirty: Se activa cuando hay cambios sin guardar.
+ wire:dirty.class: Añade una clase cuando hay cambios sin guardar.
#### Directivas de Inicialización y Clave
+ wire:init: Ejecuta una acción al inicializar el componente.
+ wire:ignore: Ignora el procesamiento de Livewire en el elemento.
+ wire:key: Proporciona una clave única para el elemento.

## Publicar recursos de Laravel
+ Publicar idiomas:
    + $ php artisan lang:publish
    + **Nota:** para traducir los mensajes al español, crear carpeta **es** y copiar traducidos al español los archivos contenidos en **en**.
+ Publicar vistas de componentes Jetstream:
    + 

## Tailwind
+ Documentación: https://tailwindcss.com/docs/installation
+ Incluir CDN de tailwind en la plantilla principal **resources\views\layouts\mi_plantilla.blade.php**:
    ```php
    <!-- ... -->
    <head>
        <!-- ... -->
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <!-- ... -->
    ```

## Algunos comandos artisan
+ Levantar un servidor web local:
    ```bash
    php artisan serve
    ```
+ Crear un enlace simbólico o acceso directo a el storage de la aplicación:
    ```bash
    php artisan storage:link
    ```

## Caché de Laravel
+ Archivo de configuración: config\cache.php
+ Aplicar caché a un Controlador:
    ```php
    // ...
    use Illuminate\Support\Facades\Cache;

    class ModeloController extends Controller
    {
        // ...
        public function index() {
            if(request()->page) {
                $key = 'modelos' . request()->page;
            } else {
                $key = 'modelos';
            }

            if(Cache::has($key)) {
                $modelos = Cache::get($key);
            } else {
                $modelos = Modelo::paginate();
                // Almacenar en cache
                // Parámetro 1: nombre de la variable
                // Parámetro 2: valor de la variable
                // Parámetro 3 (opcional): tiempo que la variable existirá en caché
                Cache::put($key, $modelos);
            }

            return view('crud.modelos.index', compact('modelos'));
        }
        // ...
        public function store(Request $request) {
            // ...
            // Eliminar una variable (key) de caché
            // Cache::forget('key');
            // Eliminar todas las variables de caché
            Cache::flush();
            return redirect()->route('modelos.show', $modelo);
        }
        // ...
        public function update(Request $request, Modelo $modelo) {
            // ...
            // Eliminar todas las variables de caché
            Cache::flush();
            return redirect()->route('modelos.show', $modelo);
        }
        // ...
        public function destroy(Modelo $modelo) {
            // ...
            // Eliminar todas las variables de caché
            Cache::flush();
            return redirect()->route('modelos.index');
        }        
        // ...        
    }    
    ```
+ mmm

## Algunas funciones php:
```php
// Encriptar contraseña:
$password = bcrypt($request->password);
// Transforma a título
$minuscula = ucwords('pEdRo');      // regresa: Pedro
// Transforma a mínusculas
$minuscula = strtolower('pEdRo');    // regresa: pedro
```

## Crear un virtual host:
+ Para el lado del cliente, modificar **C:\Windows\System32\drivers\etc\hosts**
    ```
    # Host virtual Mi proyecto - lado del cliente
    127.0.0.1	miproyecto.test
    ```
    + **Nota**: Editar con el block de notas en modo de administrador.
+ Para el lado del servidor, modificar **C:\xampp\apache\conf\extra\httpd-vhosts.conf**
    ```
    # Agregar esta línea una única vez
    <VirtualHost *>
        DocumentRoot "C:\xampp\htdocs"
        ServerName localhost
    </VirtualHost>

    # Host virtual Mi proyecto - lado del servidor
    <VirtualHost *>
        DocumentRoot "C:\xampp\htdocs\miproyecto\public"
        ServerName miproyecto.test
        <Directory "C:\xampp\htdocs\miproyecto\public">
            Options All
            AllowOverride All
            Require all granted
        </Directory>
    </VirtualHost>
    ```
    + **Nota**: En el archivo **C:\xampp\apache\conf\httpd.conf** las líneas:
    ```
    Include conf/extra/httpd-vhosts.conf
    ```
    y
    ```
    LoadModule rewrite_module modules/mod_rewrite.so
    ```
    no deben estar comentada con #.
+ Reiniciar el servidor Apache.


## Laravel Collective
+ **Documentación**: https://laravelcollective.com/docs
+ Para instalar dependencia:
    + $ composer require laravelcollective/html
+ Ejemplo de uso:
    + Ejemplo 1:
        ```php
        {!! Form::open(['route' => 'miruta']) !!}
            {!! Form::label('name', 'Nommbre', ['class' => 'mis-clases']) !!}   <!-- parámetros: atributo for, atributo name -->
            {!! Form::text('name', $valor, ['class' => 'mis-clases', 'placeholder' => 'Ingrese un valor']) !!}   <!-- parámetros: atributo name, atributo value -->        
            {!! Form::submit('Aceptar', ['class' => 'mis-clases']) !!}   <!-- parámetros: atributo name -->
        {!! Form::close() !!}
        ```
    + Ejemplo 2:
        ```php
        {!! Form::model($modelo, ['route' => ['miruta', $paremetro], 'method' => 'put']) !!}
            <!-- 
                parámetro 1: atributo name
                parámetro 2: atributo value 
                parámetro 3: atributos adicionales
            -->
            {!! Form::hidden('name_hidden', $valor) !!}

            <!-- 
                parámetro 1: atributo for
                parámetro 2: atributo name 
                parámetro 3: atributos adicionales
            -->
            {!! Form::label('name_text', 'Nommbre', ['class' => 'mis-clases']) !!}

            <!-- 
                parámetro 1: atributo name
                parámetro 2: atributo value 
                parámetro 3: atributos adicionales
            -->
            {!! Form::text('name_text', $valor, ['class' => 'mis-clases', 'placeholder' => 'Ingrese un valor']) !!}

            <!-- 
                parámetro 1: atributo name
                parámetro 2: array de opciones con la estructura atributo - valor 
                parámetro 3: opción por defecto
                parámetro 4: atributos adicionales 
            -->
            {!! Form::select('name_select', $opciones, null, ['class' => 'mis-clases']) !!}

            <!-- 
                parámetro 1: atributo name, si queremos varios check enviar el name con corchetes []
                parámetro 2: valor del o de los checkbox, si es uno, solamente un id, si son varios entonces un array
                parámetro 3: valor del o de los checkbox por defecto
                parámetro 4: atributos adicionales 
            -->
            {!! Form::checkbox('name_check', $valor_id, null, ['class' => 'mis-clases']) !!}
            {{ $valor->name }}
            <!-- cuando son varios checbox se debe de usar la directiva blade @foreach -->
            @foreach($valores as $valor)
                {!! Form::checkbox('name_check[]', $valor->id, null, ['class' => 'mis-clases']) !!}
                {{ $valor->name }}
            @endforeach

            <!-- 
                parámetro 1: atributo name
                parámetro 2: valor del o de los radios, si es uno, solamente un id, si son varios entonces un array
                parámetro 3: true o false, para activarlos
                parámetro 4: atributos adicionales 
            -->
            {!! Form::radio('name_radio', $valor_id, null, ['class' => 'mis-clases']) !!}
            {{ $valor->name }}
            <!-- cuando son varios checbox se debe de usar la directiva blade @foreach -->
            @foreach($valores as $valor)
                {!! Form::radio('name_radio', $valor->id, null, ['class' => 'mis-clases']) !!}
                {{ $valor->name }}
            @endforeach

            <!-- 
                parámetro 1: atributo name
                parámetro 2: atributo value 
                parámetro 3: atributos adicionales
            -->
            {{!! Form::textarea('name_textarea', $valor, ['class' => 'mis-clases']) !!}}

            <!-- 
                parámetro 1: atributo name
                parámetro 2: atributos adicionales 
            -->
            {!! Form::submit('Aceptar', ['class' => 'mis-clases']) !!} 
        {!! Form::close() !!}
        ```
    + Para indicar el envío de archivos dentro del formulario
        ```php
        {!! Form::open(['route' => 'miruta', 'files' => true]) !!}
            {!! Form::file('file', ['class' => 'mis-clases']) !!}
            // ...
        {!! Form::close() !!}
        ```

## Laravel-permission:
+ :::tip Documentación
https://spatie.be/index.php/docs/laravel-permission/v6/introduction
:::
+ Instalación:
    ```bash
    composer require spatie/laravel-permission
    ```
+ Publicar las migraciones:
    ```bash
    php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
    ```
+ Indicar los modelos que harán uso de Laravel permission:
    + Ejemplo: modificar el modelo **User**:
        ```php title="app\Models\User.php"
        // ...
        use Spatie\Permission\Traits\HasRoles;
        // ...
        class User extends Authenticatable
        {
            use HasRoles;   // Establece las relaciones entre el modelo User y los modelos de Laravel Permission
            // ...
        }
        ```
+ Crar roles y permisos:
    ```php
    // ...
    use Spatie\Permission\Models\Role;
    use Spatie\Permission\Models\Permission;
    // ...
    $rol1 = Role::create(['name' => 'rol1']);
    // ...
    $permiso1 = Permission::create(['name' => 'permiso1']);
    // ...
    ```
    + **Nota**: un buen lugar para crearlos es en un Seeder.
+ Asignar un rol con un permiso:
    ```php
    // ...
    $permiso1 = Permission::create(['name' => 'permiso1'])->assignRole($rol1);
    $permiso2 = Permission::create(['name' => 'permiso2'])->assignRole([$rol1, $rol2]);
    // ...
    ```
+ Asignar varios roles con un permiso:
    ```php
    // ...
    $permiso1 = Permission::create(['name' => 'permiso1'])->syncRole([$rol1, $rol2]);
    // ...
    ```
+ Asignar a un ros varios permisos:
    ```php
    // ...
    $rol1->permissions()->sync($listaDePermisos);
    // ...
    ```
+ Proteger vista blade:
    ```html
    @can('permiso1')
        <!-- ... -->
    @endcan
    <!-- ... -->
    @canany(['permiso1', 'permiso2'] ?? [null])
        <!-- ... -->
    @endcanany    
    ```
+ Proteger rutas desde un archivo de rutas (proteger ruta):
    ```php
    Route::get('prueba', function() {
        return "Tienes permiso para ingresar a esta ruta";
    })->middleware('can:premiso1');
    ```
+ Proteger rutas desde un controlador (proteger método):
    ```php
    // ...
    class ModeloController extends Controller {
        public function __construct() {
            $this->middleware('can:permiso1')->only('metodo1', 'metodo2');
        }
        // ...
    }    
    ```


## Cración de CRUD
### Aplicación monolítica y API
1. Generar la estructura completa de la entidad:
    ```bash
    php artisan make:model Entity -mcsf --resource
    ```
2. Generar el custom request para la entidad:
    ```bash
    php artisan make:request EntityRequest
    ```
3. Establecer los campos de la tabla de la entidad:
    ```php title="database\migrations\2024_03_25_070533_create_entities_table.php"
    // ...
    public function up(): void
    {
        Schema::create('entities', function (Blueprint $table) {
            $table->id();
            // Definir campos
            $table->timestamps();
        });
    }    
    // ...
    ```
4. Programar los datos de prueba:
    ```php title="database\factories\EntityFactory.php"
    // ...
    public function definition(): array
    {
        return [
            // Programar los datos de prueba
            $propiedad4 = $this->faker->unique->word(20),   // Una palabra de máximo 20 caracteres que no se repite
            return [
                'propiedad1' => $this->faker->sentence(),   // Oración
                'propiedad2' => $this->faker->paragraph(),  // Párrafo                    
                'propiedad3' => $this->faker->randomElement(['Valor 1', 'Valor 2', 'Valor 3']),   // Escoger entre varios elementos
                'propiedad4' => $propiedad4,
                'propiedad5' => Str::slug($propiedad4),
                'propiedad6' => $this->faker->text(300),   // Texto de 300 caracteres
                'propiedad7' => OtroModelo::all()->random()->id,   // Escoger al azar un id del modelo OtroModelo
                // Parámetros: ruta, ancho, alto, catergoria (ya no funciona, ruta_completa)
                // Si ruta_completa es:
                // true: //public/storage/img/imagen.jpg
                // false: /imagen.jpg
                'propiedad8' => $this->faker->image('public/storage/img', 640, 480, null, true)
                'propiedad9' => Hash::make('12345678'); // Encripta el valor contenido en el método make
            ];            
        ];
    }    
    // ...
    ```
    ```php title="database\seeders\EntitySeeder.php"
    // ...
    public function run(): void
    {
        Entity::factory(100)->create();
    }
    // ...
    ```
5. Ejecutar la migración:
    ```bash
    php artisan migrate --path=/database/migrations/2024_03_25_070533_create_entities_table.php
    ```
6. Ejecutar el seeder
    ```bash
    php artisan db:seed --class=EntitySeeder
    ```
7. Establecer asignación masiva, relaciones, borrado lógico y query scope en el modelo:
    ```php title="app\Models\Entity.php"
    // ...
    class Entity extends Model
    {
        use HasFactory;

        // Borrado lógico
        // Asignación masiva
        // Ralaciones
        // Query scope
    }    
    // ...
    ```
8. Establecer reglas de autorización y validación para acceder a los datos de la entidad:
    ```php title="app\Http\Requests\EntityRequest.php"
    // ...
    public function authorize(): bool
    {
        // Reglas de autorización
        $authorized = ...
        return $authorized;
    }
    // ...
    public function rules(): array
    {
        return [
            // Establecer reglas de validación
        ];
    }    
    // ...
    ```
9. Programar controlador:
    + Aplicación monolitica:
        ```php title="app\Http\Controllers\EntityController.php"
        // ...        
        use App\Http\Requests\EntityRequest;
        use App\Models\Entity;
        use Illuminate\Http\RedirectResponse;
        use Illuminate\Support\Facades\Session;
        use Illuminate\Support\Facades\Log;
        use Illuminate\View\View;

        class EntityController extends Controller
        {
            public function index(): View
            {
                $entities = Entity::all();
                return view('crud.entities.index', 'entities');
            }
            
            public function create(): View
            {
                $entity = new Entity();
                return view('crud.entities.create', $entity);
            }

            public function store(EntityRequest $request): RedirectResponse
            {
                try {
                    Entity::create($request->all());
                    return redirect()->route('entities.index')->with('success', 'Registro creado con éxito');
                } catch (\Throwable $th) {
                    log::error('Error al intentar crear registro del modelo Entity');
                    log::error($th);
                    return redirect()->route('entities.index')->with('danger', 'No se pudo crear el registro');
                }
            }
            
            public function show(Entity $entity): View
            {
                return view('crud.entities.show', 'entity');
            }
            
            public function edit(Entity $entity)
            {
                return view('crud.entities.edit', $entity);
            }
            
            public function update(EntityRequest $request, Entity $entity): RedirectResponse
            {
                try {
                    Entity::update($request->all());
                    return redirect()->route('entities.index')->with('success', 'Registro actualizado con éxito');
                } catch (\Throwable $th) {
                    log::error('Error al intentar actualizar registro del modelo Entity');
                    log::error($th);
                    return redirect()->route('entities.index')->with('danger', 'No se pudo actualizar el registro');
                }
            }
            
            public function destroy(Entity $entity): RedirectResponse
            {
                try {
                    $entity->delete();
                    return redirect()->route('entities.index')->with('success', 'Registro eliminado con éxito');
                } catch (\Throwable $th) {
                    log::error('Error al intentar eliminar registro del modelo Entity');
                    log::error($th);
                    return redirect()->route('entities.index')->with('danger', 'No se pudo eliminar el registro');
                }
            }
        }        
        ```
    + Aplicación API:
        ```php title="app\Http\Controllers\EntityController.php"
        // ...        
        use App\Http\Requests\EntityRequest;
        use App\Models\Entity;
        use Illuminate\Http\JsonResponse;

        class EntityController extends Controller
        {
            public function index(): JsonResponse
            {
                $entities = Entity::all();
                return response()->json($entities, 200);
            }
            
            public function store(EntityRequest $request): JsonResponse
            {
                try {
                    $entity = Entity::create($request->all());
                    return response()->json([
                        'status' => true,
                        'entity' => $entity
                    ], 201);
                } catch (\Throwable $th) {
                    log::error('Error al intentar crear registro del modelo Entity');
                    log::error($th);
                    return response()->json([
                        'status' => false
                    ], 500);
                }
            }
            
            public function show(Entity $entity): JsonResponse
            {
                return response()->json($entity, 200);
            }
            
            public function update(EntityRequest $request, Entity $entity): JsonResponse
            {
                try {
                    $entity->update($request->all());
                    return response()->json([
                        'status' => true,
                        'entity' => $entity
                    ], 200);
                } catch (\Throwable $th) {
                    log::error('Error al intentar crear registro del modelo Entity');
                    log::error($th);
                    return response()->json([
                        'status' => false
                    ], 500);
                }
            }

            public function destroy(Entity $entity): JsonResponse
            {
                try {
                    $entity->delete($request->all());
                    return response()->json([
                        'status' => true
                    ], 200);
                } catch (\Throwable $th) {
                    log::error('Error al intentar eliminar registro del modelo Entity');
                    log::error($th);
                    return response()->json([
                        'status' => false
                    ], 500);
                }
            }
        }
        ```
10. Definir rutas tipo resource:
    + Aplicación monolitica:
        ```php title="routes\web.php"
        // ...
        Route::resource('entities', EntityController::class);
        // ...
        ```
    + Aplicación API:
        ```php title="routes\api.php"
        Route::apiResource('entities', EntityController::class);
        ```
11. Diseñar vistas (**Solo en caso de aplicación monolítica**):
    + index:
    + formulario:
    + create:
    + edit:
    + show:
    

## API Resource
1. Generar recurso:
    ```bash
    php artisan make:resource RecursoResource
    ```
    :::tip Nota
    Esta acción crea un recurso en **app\Http\Resources\RecursoResource.php**.
    :::
2. Programar en nuevo recurso para modificar un request:
    ```php title="app\Http\Resources\RecursoResource.php"
    // ...
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'title' => 'Title: ' . $this->title,
            'campo_extra' => 'Campo añadido'
        ];
    }    
    // ...
    ```
3. Modificar un request en un controlador:
    ```php
    // ...
    use App\Http\Resources\RecursoResource;
    use Illuminate\Http\Resources\Json\JsonResource;
    // ...
    class EntityController extends Controller {
        public function index(): JsonResource
        {
            // return response()->json(Entity::all(), 200);
            return RecursoResource::cellection(Entity::all());
        }
                  
        public function store(EntityRequest $request): JsonResource
        {
            try {
                $entity = Entity::create($request->all());
                return response()->json([
                    'status' => true,
                    'entity' => new RecursoResource($entity)
                ], 201);
            } catch (\Throwable $th) {
                // ...
            }
        }
        
        public function show(Entity $entity): JsonResource
        {
            return new RecursoResource($entity);
        }
            
        public function update(EntityRequest $request, Entity $entity): JsonResource
        {
            try {
                $entity->update($request->all());
                return response()->json([
                    'status' => true,
                    'entity' => new RecursoResource($entity)
                ], 200);
            } catch (\Throwable $th) {
                log::error('Error al intentar crear registro del modelo Entity');
                log::error($th);
                return response()->json([
                    'status' => false
                ], 500);
            }
        }

        public function destroy(Entity $entity): JsonResource
        {
            // ...
        }
    }
    ```

## Jobs
1. Crear un job **Tarea**:
    ```bash
    php artisan make:job Tarea
    ```
:::tip Nota
Este comando creara el archivo **app\Jobs\Tarea.php**
:::
2. Programar job **Tarea**:
    ```php title="app\Jobs\Tarea.php"
    // ...
    class Tarea implements ShouldQueue
    {
        // ...
        public $parametro;
        // ...
        public function __construct($parametro)
        {
            $this->parametro = $parametro;
        }
        // ...
        public function handle(): void
        {
            // Programar tarea relacionada con $parametro
        }
    }    
    ```
3. Ejecutar job **Tarea**:
    ```php
    // ...
    use App\Jobs\Tarea;
    // ...
    Tarea::dispatch($parametro);
    // ...
    ```

## Queues (Colas)
:::tip Documentación
https://laravel.com/docs/10.x/queues
:::
1. Crear tabla para tareas en cola:
    ```bash
    php artisan queue:table 
    php artisan migrate
    ```
:::tip Nota
Este comando crea una nueva migración para crear la tabla **jobs**
:::
2. Modificar el archivo de variables de entorno:
    ```env
    QUEUE_CONNECTION=database
    ```
:::tip Nota
Ahora todos los **jobs** en lugar de ejecutarse, se registrará la instrucciones de ejecución en la tabla **jobs**.
:::
3. Ejecutar los **jobs** registrados en la tabla **jobs** mediante línea de comando:
    ```bash
    php artisan queque:work
    ```
4. Ejecutar los **jobs** registrados en la tabla **jobs** mediante código php:
    + Forma no asincrónico:
        ```php
        // ...
        use Illuminate\Support\Facades\Artisan;
        // ...
        Artisan::call('queue:work');
        // ...
        ```
    + Forma asincrónico:
        ```php
        exec('php artisan queue:work > /dev/null 2>&1 &');
        ```

## Localización (Idiomas)
:::tip Nota
Para establecer la configuración de idiomas y configuración ir al archivo de configuración **config/app.php**.
:::
1. Crear un archivo de idiomas **lang/xx/seccion.php**:
    ```php
    <?php

    return [
        'clave' => 'Traducción',
        'clave_con_variable' => 'Texto de la traducción :variable',
        // ...
    ];
    ```
2. Tomar datos de los archivos de traducción en una vista:
    ```php
    <!-- ... -->
    <p>{{ __('seccion.clave') }}</p>
    <p>{{ __('seccion.clave_con_variable', ['variable' => 'Valor de la variable']) }}</p>
    <!-- ... -->
    ```
3. Tomar datos de los archivos de traducción en un controlador:
    ```php
    // ...
    public function metodo() {
        $msg = __('seccion.clave');
    }
    // ...
    ```
### Construcción de un menú de selección de idioma
+ Crear archivo de configuración **languages**:
    ```php title="config\languages.php"
    <?php

    // Idiomas permitidos en el proyecto
    return [
        'en' => 'English',
        'es' => 'Español',
    ];        
    ```
+ Crear middleware **Language**:
    ```bash
    php artisan make:middleware Language
    ```
+ Programar middleware **Language**:
    ```php title="app\Http\Middleware\Language.php"
    // ...
    use Illuminate\Support\Facades\App;
    // ...
    class Language
    {
        // ...
        public function handle(Request $request, Closure $next): Response
        {
            if(Session()->has('applocale') AND array_key_exists(Session()->get('applocale'), config('languages'))) {
            App::setLocale(Session()->get('applocale'));
            } else {
                App::setLocale(Config('app.fallback_locale'));
            }
            return $next($request);
        }
    }        
    ```
+ Aplicar middleware **Language** a todas las rutas web en el **Kernel**:
    ```php title="app\Http\Kernel.php"
    // ...
    protected $middlewareGroups = [
        'web' => [
            // ...
            \App\Http\Middleware\Language::class
        ],
        // ...
    ];        
    ```
+ Crear controlador **LanguageController**:
    ```bash
    php artisan make:controller LanguageController
    ```
+ Programar controlador **LanguageController**:
    ```php title="app\Http\Controllers\LanguageController.php"
    // ...
    use Illuminate\Support\Facades\Config;
    use Illuminate\Support\Facades\Redirect;
    use Illuminate\Support\Facades\Session;
    // ...
    class LanguageController extends Controller
    {
        public function switchLang($lang) {
            if (array_key_exists($lang, Config::get('languages'))) {
                Session::put('applocale', $lang);
            }
            return Redirect::back();
        }
    }        
    ```
+ Crear ruta web **lang/\{lang}**:
  ```php title="routes\web.php"
  Route::get('lang/{lang}', [App\Http\Controllers\LanguageController::class, 'switchLang'])->name('lang');
  ```
+ Crear vista **lang**:
    ```php title="resources\views\_partials\lang.blade.php"
    @foreach(Config::get('languages') as $lang => $language)
        @if($lang != App::getLocale())
            <a href="{{ route('lang', $lang) }}">{{ $language }}</a>
        @endif
    @endforeach        
    ```
    :::tip Nota
    Para ver el menú de idiomas en la vista desada, incluir la siguiente directiva blade:
    ```php
    @include('_partials.lang')
    ```
    :::


## Events y Listeners
1. Crear un evento:
    ```bash
    php artisan make:event EventoEvent
    ```
2. Crear un oyente:
    ```bash
    php artisan make:listener OyenteListener
    ```
3. Programar evento **EventoEvent**:
    ```php title="app\Events\EventoEvent.php"
    // ...
    class EventoEvent {
        // ...
        public function __construct(public $data) {}
        // ...
        public function broadcastOn(): array
        {
            return [
                new PrivateChannel('canal-del-evento'),
            ];
        }
    }    
    ```
4. Programar oyente **OyenteListener**:
    ```php title="app\Listeners\OyenteListener.php"
    use App\Events\EventoEvent;
    // ...
    class OyenteListener
    {
        // ...
        public function __construct() {}
        // ...
        public function handle(EventoEvent $event): void
        {
            // Aquí las acciones a tomar con la información del evento $data
            dd('Información recibida: ' . $event->data);
        }
    }    
    ```
5. Registrar el evento **EventoEvent** en **EventServiceProvider**:
    ```php title="app\Providers\EventServiceProvider.php"
    // ...
    use App\Events\EventoEvent;
    use App\Listeners\OyenteListener;
    // ...
    class EventServiceProvider extends ServiceProvider
    {
        // ...
        protected $listen = [
            // ...
            EventoEvent::class => [
                OyenteListener::class
            ]
        ];
        // ...
    }    
    ```
6. Despachar el evento:
    ```php
    // ...
    use App\Events\EventoEvent;
    // ...
    EventoEvent::dispatch($data);
    ```
:::tip Nota
+ Una forma simple de crear events y listeners es editar el **EventServiceProvider**
    ```php title="app\Providers\EventServiceProvider.php"
    // ...
    class EventServiceProvider extends ServiceProvider
    {
        // ...
        protected $listen = [
            // ...
            \App\Events\Evento1Event::class => [
                \App\Listeners\Oyente1Evento1Listener::class,
                \App\Listeners\Oyente2Evento1Listener::class,
            ],
            \App\Events\Evento2Event::class => [
                \App\Listeners\Oyente1Evento2Listener::class,
                \App\Listeners\Oyente2Evento2Listener::class,
            ],
        ];
        // ...
    }    
    ```
+ Ejecutar:
    ```bash
    php artisan event:generate
    ```
    + Esta acción generará todos los events y listeners que no se encuentren definidos.
:::

## Comandos
1. Crear un comando personalizado:
    ```bash
    php artisan make:command ComandoCommand
    ```
2. Programar comando **ComandoCommand**:
    ```php title="app\Console\Commands\ComandoCommand.php"
    class ComandoCommand extends Command
    {
        // ...
        protected $signature = 'accion:firma-de-mi-comando';
        // ...
        protected $description = 'Breve descripción de mi comando';
        // ...
        public function handle()
        {
            try {
                // Acciones de mi comando
                return Command::SUCCESS;
            } catch (\Throwable $th) {
                //throw $th;
                return Command::FAILURE;
            }
        }
    }    
    ```
3. Programar comando **ComandoCommand** con parámetros:
    ```php title="app\Console\Commands\ComandoCommand.php"
    class ComandoCommand extends Command
    {
        // ...
        protected $signature = 'accion:firma-de-mi-comando {parametro1} {parametro2}';
        // ...
        protected $description = 'Breve descripción de mi comando';
        // ...
        public function handle()
        {
            try {
                // Recuperar los parámetros
                $parametro1 = $this->argument('parametro1');
                $parametro2 = $this->argument('parametro2');
                // Acciones de mi comando                
                return Command::SUCCESS;
            } catch (\Throwable $th) {
                //throw $th;
                return Command::FAILURE;
            }
        }
    }    
    ```
4. Registrar comando en el Kernel:
    ```php title="app\Console\Kernel.php"
    // ...
    protected $commands = [
        // ...
        \App\Console\Commands\ComandoCommand::class,
    ];
    ```
    :::tip Nota
    + Si el Kernel contiene el siguiente código, no será necesario registrarlo, puesto que ya esta registrando todos los comandos que se encuentran en la ruta **app\Console\Commands**
    
    ```php title="app\Console\Kernel.php"
    // ...
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');
        // ...
    }    
    // ...
    ```
    + Igualmente, habrá que registrar el comando, si este no se encuentra ubicado en la ruta **app\Console\Commands**.
    :::
5. Para ejecutar el comando por consola:
    ```bash
    php artisan accion:firma-de-mi-comando
    ```
    :::tip Nota
    En caso de problemas con la ejecución:
    ```bash
    php artisan optimize:clear
    php artisan cache:clear
    ```
    :::
6. Para ejecutar el comando por consola con parámetros:
    ```bash
    php artisan accion:firma-de-mi-comando [valor del parámetro 1] [valor del parámetro 2]
    ```
7. Para ejecutar un camando con código php:
    ```php
    // ...
    use Illuminate\Support\Facades\Artisan;
    // ...
    // Sin parámetros
    Artisan::call('accion:firma-de-mi-comando');
    // Con parámetros
    Artisan::call('accion:firma-de-mi-comando', [
        'parametro1' => $parametro1, 
        'parametro2' => $parametro2
    ]);
    // ...
    ```

### Ejecución de comando artisan mediante código php
:::tip Nota
También podemos ejecutar comando artisan comunes:
```php
// ...
use Illuminate\Support\Facades\Artisan;
// ...
// Comando artisan
Artisan::call('migrate');
Artisan::call('db:seed');
// ...
```
:::

### Programar la ejecución de comandos de forma periódica
1. Programar tareas en el **Kernel**:
    ```php title="app\Console\Kernel.php"
    protected function schedule(Schedule $schedule): void
    {
        // ...
        $schedule->command('accion:firma-de-mi-comando', [
            'parametro1' => 'valor parametro1', 
            'parametro2' => 'valor parametro2'
        ])->daily();

        /*
            daily: Una vez al día
            dailyAt: Una vez al día en una hora determinada
            hourly: Cada hora
            cron: Requiere de una expresión cron
                + Ejemplo: '0 * * * *'  (minutos, horas, dias, meses, dias de la semana)
                + días de la semana: 1: lunes, 2: martes, 3: miercoles, 4: jueves, 5: viernes, 6: sabado, 7: domingo
                + * = todos los valores (todos los minutos, todos los horas, todos los dias, todos los meses, todos los dias de la semana)
        */
    }    
    ```


## Tips generales:
### Crear un sistema de autenticación
1. Crear controlado **AuthController**:
    ```bash
    php artisan make:controller AuthController
    ```
2. Crear custom request **CreateUserRequest** y **LoginUserRequest**:
    ```bash
    php artisan make:request CreateUserRequest    
    php artisan make:request LoginUserRequest
    ```
3. Programar el custom request **CreateUserRequest**
    ```php title="app\Http\Requests\CreateUserRequest.php"
    // ...
    class CreateUserRequest extends FormRequest
    {
        // ...
        public function authorize(): bool
        {
            return true;
        }
        // ...
        public function rules(): array
        {
            return [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required'
            ];
        }
    }
    ```
4. Programar el custom request **LoginUserRequest**
    ```php title="app\Http\Requests\LoginUserRequest.php"
    // ...
    class CreateUserRequest extends FormRequest
    {
        // ...
        public function authorize(): bool
        {
            return true;
        }
        // ...
        public function rules(): array
        {
            return [
                'email' => 'required|email',
                'password' => 'required'
            ];
        }
    }
    ```
5. Programar controlador **AuthController**:
    ```php title="app\Http\Controllers\AuthController.php"
    // ...
    use App\Http\Requests\CreateUserRequest;
    use App\Http\Requests\LoginUserRequest;
    use App\Models\User;
    use Illuminate\Support\Facades\Auth;
    //use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;

    class AuthController extends Controller
    {
        public function createUser(CreateUserRequest $request) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User created successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);
        }
        public function loginUser(LoginUserRequest $request) {
            // Auth::attempt(['email' => $request->email, 'password' => $request->password]);
            if(!Auth::attempt($request->only('email', 'password'))) {
                return response()->json([
                    'status' => false,
                    'message' => 'Unauthorized'
                ], 401);
            }

            $user = User::where('email', $request['email'])->first();

            return response()->json([
                'status' => true,
                'message' => 'User logged successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);
        }
    }    
    ```
6. Crear rutas api:
    ```php title="routes\api.php"
    Route::post('create', [AuthController::class, 'createUser'])->name('api.users.create');
    Route::post('login', [AuthController::class, 'loginUser'])->name('api.users.login');
    // Ruta protegida con el middleware 'auth:sanctum'
    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });
    ```
    :::tip Nota
    Para ingresar a la ruta protegidas por el middleware auth:sanctum, será necesario en la petición colocar el token de autenticación obtenido en las rutas create o login.
    + Headers -> Accept: application/json
    + Headers -> Authorization: Bearer "API TOKEN obtenido"
    + Headers -> Content-Type: application/json        
    :::


### Crear un arreglo a partir de un campo de una colección
```php
$coleccion = Modelo::pluck('campo1');
```
+ Esto regresa un objeto con una estructura similar a esta:
    ```json
    [
        "valor 1",
        "valor 2",
        "valor 3",
        // ...
    ]
    ```

### Encriptar una contraseña
```php
$password = bcrypt('12345678');
```

### Crear un objeto llave valor a partir de una colección
```php
$coleccion = Modelo::pluck('valor', 'llave');   
// Ejemplo: valor puede ser nombre y llave puede ser el id de la colección
```
+ Esto regresa un objeto con una estructura similar a esta:
    ```json
    {
        "1": "valor 1",
        "2": "valor 2",
        "3": "valor 3",
        // ...
    }
    ```

### Integrar sweetalert2
+ **Página de Sweetalert2**: https://sweetalert2.github.io
1. Agregar CDN de Sweetalert2 en la plantilla principal:
    ```php title="...\resources\views\layouts\app.blade.php"
    <!-- ... -->
    <head>
        <!-- ... -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <!-- ... -->
        <script>
            @if(session('swal'))
                Swal.fire({!! json_encode(session('swal')) !!});
                // También se puede usar:
                // Swal.fire(@json(session('swal')));
            @endif          
        </script>
    </head>
    ```
2. Para activar sweetalert2 desde un controlador:
    ```php
    session()->flash('swal', [
        'type' => 'success'
        'title'=> "Título del mensaje",
        'text'=> "Texto del mensaje a mostrar",
        'icon'=> "question"
    ]);
    ```


### Evitar que un código se ejecute desde consola
```php
// ...
public function mi_metodo() {
    if(!app()->runningInConsole()) {
        // ...
    }
}
// ...
```

### Incorparar un select2 utilizando un plugin de jQuery
+ Documentación: 
    + https://select2.org
    + https://releases.jquery.com
1. Colocar los CDN de select2 en la vista a trabajar:
    ```html
    <!-- ... -->
    @push('css')
        <!-- tomado de select2 -->
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    @endpush
    <!-- ... -->
    @push('js')
        <!-- tomado de jQuery -->
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <!-- tomado de select2 -->
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
        <!-- tomado de select2 -->
        <script>
            $(document).ready(function() {
                $('.opcion-multiple').select2();
            });                
        </script>
    @endpush
    <!-- ... -->
    <!-- Multi-select boxes (pillbox) -->
    <div>
        <select class="opcion-multiple" name="opciones[]" multiple="multiple">
            @foreach($opciones as $opcion)
                <option
                    value="{{ $opcion->id }}"
                    @selected(old('opciones', $condicion))
                >
                    {{ $opcion->name }}
                </option>
            @endforeach
        </select>            
    </div>
    <!-- ... -->
    ```
    + **Nota**: en la plantilla de donde extiende esta vista debe tener una estructura similar a esta:
        ```html
        <!-- -->
        <head>
            <!-- -->
            @stack('css')
            <!-- -->    
        </head>
        <body>
            <!-- -->
            @stack('js')
            <!-- -->    
        </body>
        <!-- -->
        ```
2. En el controlador que administra la vista anterior:
    ```php
    // ...
    public function metodo(Request $request, Opcion $opcion) {
        // Recuperando los valores del select2
        $opciones = $request->opciones;
    }
    // ...
    ```

### Incorparar un select2 pasando datos por ajax
+ Documentación: 
    + https://select2.org
    + https://releases.jquery.com
1. Colocar los CDN de select2 en la vista a trabajar:
    ```html
    <!-- ... -->
    @push('css')
        <!-- tomado de select2 -->
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    @endpush
    <!-- ... -->
    @push('js')
        <!-- tomado de jQuery -->
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <!-- tomado de select2 -->
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
        <!-- tomado de select2 y adaptado al proyecto -->
        <script>
            $(document).ready(function() {
                $('.opcion-multiple').select2({
                    ajax: {
                        url: "{{ route('api.opciones.index') }}",
                        dataType: 'json',
                        delay: 250,
                        // Envía información a la api
                        data: function(params) {
                            return {
                                search: params.search
                            }
                        },
                        // Recibe información de la api
                        processResults: function(data) {
                            return {
                                results: data
                            }
                        }
                    }
                });
            });
        </script>
    @endpush
    <!-- ... -->
    <!-- Multi-select boxes (pillbox) -->
    <div>
        <select class="opcion-multiple" name="opciones[]" multiple="multiple">
            @foreach($opciones as $opcion)
                <option value="{{ $opcion->id }}">{{ $opcion->name }}</option>
            @endforeach
        </select>            
    </div>
    <!-- ... -->
    ```
    + **Nota**: en la plantilla de donde extiende esta vista debe tener una estructura similar a esta:
        ```html
        <!-- -->
        <head>
            <!-- -->
            @stack('css')
            <!-- -->    
        </head>
        <body>
            <!-- -->
            @stack('js')
            <!-- -->    
        </body>
        <!-- -->
        ```
2. Definir una ruta con respuesta json en  **...\routes\api.php**:
    ```php
    Route::get('/opciones', function(Request $request) {
        $search = $request->search ?? '';
        $opciones = Registros::select('id', 'name as text')
            ->where('name', 'LIKE', "%$search%")
            ->limit(10)
            ->get();
        return $opciones;
    })->name('api.opciones.index');    
    ```
3. En el controlador que administra la vista anterior:
    ```php
    // ...
    public function metodo(Request $request, Opcion $opcion) {
        // Recuperando los valores del select2
        $opciones = $request->opciones;
    }
    // ...
    ```    
4. Incorporar valores que no están presente en las opciones y que se registren en BD:
    + Modificar el script del select2 en la vista a trabajar:
        ```html
        <!-- ... -->
        @push('js')
            <!-- ... -->
            <!-- tomado de select2 y adaptado al proyecto -->
            <script>
                $(document).ready(function() {
                    $('.opcion-multiple').select2({
                        opciones: true,
                        tokenSeparators: [',', ' '],
                        ajax: {
                            url: "{{ route('api.opciones.index') }}",
                            dataType: 'json',
                            delay: 250,
                            // Envía información a la api
                            data: function(params) {
                                return {
                                    search: params.search
                                }
                            },
                            // Recibe información de la api
                            processResults: function(data) {
                                return {
                                    results: data
                                }
                            }
                        }
                    });
                });
            </script>
        @endpush
        <!-- ... -->
        <!-- Multi-select boxes (pillbox) -->
        <div>
            <select class="opcion-multiple" name="opciones[]" multiple="multiple">
                @foreach($opciones as $opcion)
                    <option value="{{ $opcion->name }}">{{ $opcion->name }}</option>
                @endforeach
            </select>            
        </div>
        <!-- ... -->
        ```
    + Modificar la ruta **api.opciones.index** en  **...\routes\api.php**:
        ```php
        Route::get('/opciones', function(Request $request) {
            $search = $request->search ?? '';
            $opciones = Registros::select('name')
                ->where('name', 'LIKE', "%$search%")
                ->limit(10)
                ->get()->map(function($opcion) {
                    return [
                        'id' => $opcion->name,
                        'text' => $opcion->name
                    ];
                });
            return $opciones;
        })->name('api.opciones.index');    
        ```
    + Modificar el controlador que administra la vista anterior:
        ```php
        // ...
        public function metodo(Request $request, Opcion $opcion) {
            // Recuperando los valores del select2
            $opciones = [];
            foreach($request->opciones ?? [] as $name) {
                $opcion = Registros::firstOrCreate([
                    'name' => $name
                ]);
                $opciones[] = $opcion->id;
            }
        }
        // ...
        ``` 

### Textarea con formato enriquecido
:::tip Documentación
**CKEditor**: https://ckeditor.com
:::
1. Incluir CDN del CKEditor en nuestra vista:
    ```html
    <!-- ... -->
    <textarea name="texto" id="texto" cols="30" rows="10"></textarea>
    <!-- ... -->
    @section('js')
        <!-- https://ckeditor.com/ckeditor-5/download -->
        <script src="https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js"></script>
        <!-- https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html -->
        <script>
            ClassicEditor
                .create( document.querySelector('#texto'))
                .catch( error => {
                    console.error(error);
                });
        </script>        
    @endsection
    ```
:::tip Nota 1
En caso de usar livewire:
    ```html
    <!-- ... -->
    <textarea name="texto" id="texto" cols="30" rows="10"></textarea>
    <!-- ... -->
    @section('js')
        <!-- https://ckeditor.com/ckeditor-5/download -->
        <script src="https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js"></script>
        <!-- https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html -->
        <script>
            ClassicEditor
                .create( document.querySelector('#texto'))
                .then(editor => {
                    editor.model.document.on('change:data', () => {
                        @this.set('texto', editor.getData());
                    });
                })
                .catch( error => {
                    console.error(error);
                });
        </script>        
    @endsection
    ```
:::
:::tip Nota 2
Para establecer el alto mínimo y máximo y añadir un scroll bar:
    ```html
    <style>
        .ck-editor__editable {            
            max-height: 400px; /* Ajusta según necesites */
        }                    
        .ck-editor__editable_inline {
            min-height: 200px;
        }
        .ck-content {
            /* Esto asegura que el contenido tenga un scroll si excede el alto del contenedor */
            overflow-y: auto; /* Muestra un scroll vertical si es necesario */
            max-height: 350px; /* Ajusta este valor según lo necesites */
        }        
    </style>  
    ```
:::
:::tip Nota 3
Para resolver algunos problemas de incompatibilidad entre livewire y javascript ver el siguiente video:
+ https://codersfree.com/courses-status/aprende-laravel-avanzado/incluir-ckeditor-5-en-la-caja-de-comentarios
+ https://codersfree.com/courses-status/aprende-laravel-avanzado/solucionar-problemas-con-ckeditor-en-nuestra-caja-de-comentarios
+ https://codersfree.com/courses-status/aprende-laravel-avanzado/incluir-texto-en-ckeditor-con-setdata
+ https://codersfree.com/courses-status/aprende-laravel-avanzado/poner-activo-la-caja-de-ckeditor
:::

### Instalar redis
+ **Documentación**: https://laravel.com/docs/10.x/redis
+ $ php artisan sail:add
+ Seleccionar: [3] redis
+ Al ejecutar la instalación cambia la siguiente variable de entorno:
    ```
    REDIS_HOST=127.0.0.1
    ```
    por:
    ```
    REDIS_HOST=redis
    ```
+ Para hacer que las sesiones las cargue en redis, cambiar la siguiente variable de entorno:
    ```
    SESSION_DRIVER=file
    ```
    por:
    ```
    SESSION_DRIVER=redis
    ```
    + Para administrar datos en sesión:
        ```php
        // ...
        use Illuminate\Support\Facades\Session;
        // ...
        // guardar datos en sesión:
        Session::put('clave1', 'valor1');
        // leer datos en sesión:
        $valor2 = Session::get('clave2');
        // ...
        ```
    + Métodos de caché disponibles:
        + put()
        + get()
        + many()
        + putMany()
        + increment()
        + decrement()
        + forever()
        + forget()
        + flush()
        + remember()
        + rememberForever()
    + Página con ejemplos de uso: https://kinsta.com/es/blog/laravel-caching


### Previsualizar una imagen
+ https://codersfree.com/posts/previsualizar-una-imagen-con-javascript
```html title="vista.php"
<!-- ... -->
<div class="relative">
    <figure>
        <img id="imgPreview" src="{{ $imagen }}"/>
        <div class="absolute">
            <label>
                Actualizar imagen
                <input type="file" name="imagen" class="hidden" onchange="previewImage(event, '#imgPreview')">
            </label>
        </div>
    </figure>
    <script>
        function previewImage(event, querySelector){

            //Recuperamos el input que desencadeno la acción
            const input = event.target;
            
            //Recuperamos la etiqueta img donde cargaremos la imagen
            $imgPreview = document.querySelector(querySelector);

            // Verificamos si existe una imagen seleccionada
            if(!input.files.length) return
            
            //Recuperamos el archivo subido
            file = input.files[0];

            //Creamos la url
            objectURL = URL.createObjectURL(file);
            
            //Modificamos el atributo src de la etiqueta img
            $imgPreview.src = objectURL;                        
        }        
    </script>
</div>
<!-- ... -->
```

### Trabajar con imagenes en en controlador
```php
// ...
use Illuminate\Support\Facades\Storage;

class ModeloController extends Controller
{
    // ...
    public function mi_metodo(Request $request) {
        if($request->file('archivo')) {
            // Subir archivo a la carpeta indicada y retorna la ubicación
            $path = Storage::put('carpeta', $request->archivo);

            // Subir archivo con un nombre específico a la carpeta indicada y retorna la ubicación
            $path = Storage::putFileAs('carpeta', $request->archivo, 'nombre_del_archivo' . $request->file('archivo')->getClientOriginalExtension());

            // Eliminar archivo
            Storage::delete($url_archivo);
        }
    }
    // ...
}
```

### Recuperar archivos desde servidores S3 (AWS o Digital Ocean)
1. Crear controlador **ArchivoController**:
    ```bash
    php artisan make:controller ArchivoController
    ```
2. Programar controlador **ArchivoController**:
    ```php
    // ...
    class ArchivoController extends Controller {
        public function archivo(Modelo $modelo) {
            $archivo = Storage::get($modelo->archivo_url);
            return response($archivo)->header('Content-Type', 'image/jpeg');

            // Retornar una url temporal
            // return Storage::temporaryUrl($modelo->archivo_url, now()->addMinutes(7));
        }
    }
    ```
3. Crear ruta **/archivo/\{modelo}/archivo**:
    ```php
    Route::get('/archivo/{modelo}/archivo', [ArchivoController::class, archivo])->name('archivo');
    ```
4. Configurar el accesor del modelo **Modelo**:
    ```php title="app\Models\Modelo.php"
    // ...
    use Illuminate\Database\Eloquent\Casts\Attribute;

    class Modelo extends Model
    {
        // ...
        protected function archivo(): Attribute {
            return new Attribute(
                // Accesor
                get: function() {                    
                    return route('archivo', $this);
                },
                // Mutador
                set: function($value) {                    
                    return 'https://imagen_por_defecto';
                }
            );
        }
        // ...
    }
    ```


### Alugnos métodos o funciones de utilidad
#### isEmpty e isNotEmpty
    ```php title="isEmpty e isNotEmpty"
    <!-- ... -->
    @if($registros->isEmpty())
        <!-- colección $registros vacia -->
    @else
        <!-- existe por lo menos un elemento en $registros -->
    @endif
    <!-- ... -->
    @if($registros->isNotEmpty())
        <!-- existe por lo menos un elemento en $registros -->
    @else
        <!-- colección $registros vacia -->
    @endif
    ```
#### Limitar la cantidad de texto
    ```php
    <p>{{ Str::limit($variable, 200) }}</p>
    ```

#### Alpine
##### Mantenerse a la escucha de una variable
```php
<!-- ... -->
<form 
    action="..." 
    method="POST" 
    x-data="data()"
    x-init="$watch('title', value => { string_to_mayusc(value) })"
>
    <input type="text" x-model=title />
    <input type="title_mayusc" x-model=title_mayusc />
</form>
<!-- ... -->
<script>
    function data() {
        return {
            title: '',
            title_mayusc: '',
            string_to_mayusc(str) {
                title_mayusc = str.toUpperCase();
            }
        }
    }
</script>
```

### Generar PDF
:::tip Nota
Documentación: https://github.com/barryvdh/laravel-dompdf
:::
1. Instalar la dependencia composer **laravel-dompdf**:
    ```bash
    composer require barryvdh/laravel-dompdf
    ```
2. Publicar archivo de configuración general de **laravel-dompdf**:
    ```bash
    php artisan vendor:publish --provider="Barryvdh\DomPDF\ServiceProvider"
    ```
    :::tip Nota
    + Esta acción generará un archivo de configuración en la siguiente ruta:
        + config/dompdf.php
    + Configuraciones comunes:
        + Tamaño de la hoja:
            ```php
            "default_paper_size" => "a4",
            ```
        + Orientación de la hoja:
            ```php
            "default_paper_orientattion" => "portrait",
            ```
        + Fuente por defecto:
            ```php
            "default_font" => "serif",
            ```
        + Densidad del pixelado:
            ```php
            "dpi" => 96,
            ```
    :::
3. Crear controlado **PdfController**:
    ```bash
    php artisan make:controller PdfController
    ```
4. Programar controlador **PdfController**:
    ```php
    // ...
    use Barryvdh\DomPDF\Facade\Pdf;
    // ...
    class PdfController extends Controller {
        // Generación básica de un pdf
        public function generarpdf() {
            $pdf = Pdf::loadView('pdf.documentopdf');
            $pdf->save('/ruta_de_alamcenamiento/nombre-del-documento.pdf');
            return $pdf->download('nombre-del-documento.pdf')'';
        }

        // Generación modificando opciones de configuración
        public function generarpdf_modificando_opciones() {
            $pdf = Pdf::setOption(['dpi' => 150, 'defaultFont' => 'arial'])->loadView('pdf.documentopdf');
            return $pdf->download('nombre-del-documento.pdf')'';
        }

        // Generación pasando variables al pdf
        public function generarpdf_con_pase_de_variables() {
            $data = 'mis datos';
            $pdf = Pdf::loadView('pdf.documentopdf', ['data' => $data]);
            return $pdf->download('nombre-del-documento.pdf')'';
        }
    }
    // ...
    ```
5. Crear vista **documentopdf**:
    ```html title="resources/views/pdf/documentopdf.blade.php"
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            /* Salto de página */
            .page-break {
                page-break-after: always;
            }
        </style>
    </head>
    <body>
        <h1>Mi documento PDF</h1>
        <p>{{ $data }}</p>
    </body>
    </html>    
    ```
6. Crear ruta para generar PDF
    ```php
    use App\Http\Controllers\PdfController;
    Route::get('generarpdf', [PdfController::class, 'generarpdf'])->name('generarpdf');
    ```


### Importar / Exportar CSV
1. Importar libreria **maatwebsite**
    ```bash
    composer require maatwebsite/excel -W
    ```
2. Crear gestor de importación:
    ```bash
    php artisan make:import ModeloImport --model=Modelo
    ```
    :::tip Nota
    El gestor de importación se creara en:
    + app/Imports/ModeloImport.php
    :::
3. Establecer la lógica de la importación:
    ```php title="app/Imports/ModeloImport.php"
    // ...
    public function model(array $row) {
        return new Modelo([
            'campo1' => $row['campo1'],
            'campo2' => $row['campo2']
        ]);
    }
    ```
4. Crear modelo **CsvController**:
    ```bash
    php artisan make:controller CsvController
    ```
5. Programar controlador:
    ```php
    // ...
    use App\Imports\ModeloImport;
    use Maatwebsite\Excel\Facades\Excel;
    // ...
    class CsvController extends Controller {
        public function import(Request $request) {
            $file = $request->file('file');
            Excel::import(new ModeloImport, $file);
            // ...
        }

        public function export() {

        }
    }
    ```
6. mmm