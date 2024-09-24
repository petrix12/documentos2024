---
title: Apuntes de jQuery
sidebar_label: "Apuntes de jQuery"
sidebar_position: 1
---

# Apuntes de jQuery
## Página oficial de jQuery
https://jquery.com

## Cargar jQuery en un documento HTML5
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- ... -->
    <script 
        src="https://code.jquery.com/jquery-3.7.1.min.js" 
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
        crossorigin="anonymous"
    ></script>
</head>
<body>
    <!-- ... -->
</body>
</html>
```
:::tip Nota
Existen algunas formas más de cargar jQuery, estas opciones se pueden ver en:
+ https://jquery.com/download
:::

## Algunas funciones de jQuery
### Ejecutar una acción cuando un documento HTML esta cargado
+ Forma obsoleta:
    ```html
    <!-- ... -->
    <body>
        <!-- ... -->
        <script>
            $(document).ready(function() {
                // Acciones a tomar
            });
        </script>
    </body>
    <!-- ... -->
    ```
+ Forma actual:
    ```html
    <!-- ... -->
    <body>
        <!-- ... -->
        <script>
            $(function() {
                // Acciones a tomar
            });
        </script>
    </body>
    <!-- ... -->
    ```


### Referenciar un id de una etiqueta HTML
```html
<!-- ... -->
<body>
    <p id="texto">Texto</p>
    <script>
        $('#texto').text("Texto modificado");
    </script>
</body>
<!-- ... -->
```

### Evitar conflictos con otras librerias que puedan utilizar el símbolo de $
+ Forma general:
    ```html
    <!-- ... -->
    <body>
        <!-- ... -->
        <script>        
            jQuery.noConfict();
            // Ahora en lugar de usar el símbolo de $, utilizar la palabra jQuery en su lugar
            // ...
        </script>
    </body>
    <!-- ... -->
    ```
+ Utilizando un alias:
    ```html
    <!-- ... -->
    <body>
        <!-- ... -->
        <script>
            const alias = jQuery.noConfict();
            // Ahora en lugar de usar el símbolo de $, utilizar la palabra alias en su lugar
            // ...
        </script>
    </body>
    <!-- ... -->
    ```
+ Otra forma:
    ```html
    <!-- ... -->
    <body>
        <!-- ... -->
        <script>
            jQuery(function ($) {
                // Ahora se podrá utilizar el símbolo de $ con normalidad
            });
        </script>
    </body>
    <!-- ... -->
    ```

### jQuery Object
```html
<!-- ... -->
<body>
    <div id="etiqueta"></div>
    <script>
        const etiquetaObjeto = $('#etiqueta');
        // Ver objeto completo
        console.log(etiquetaObjeto);
        // Ver estructura HTML del objeto
        console.log(etiquetaObjeto[0]);
    </script>
</body>
<!-- ... -->
```

### Incrustar un parrafo dentro de un div
```html
<!-- ... -->
<body>
    <div id="etiqueta"></div>
    <script>
        const etiquetaObjeto = $('#etiqueta');
        etiquetaObjeto.html("<p>Parrafo inscrustado</p>");
    </script>
</body>
<!-- ... -->
```

### Manipulación del DOM por selectores
+ Tipos de selectores
    + Tipo
    + Clase
    + Id
    + Posesión de un atributo
    + Valor de un atributo
    + Indice
    + Pseudo estado
+ Ejemplo de código:
    ```html
    <!-- ... -->
    <body>
        <a href="index.html"></a>                       <!-- 1 -->
        <a id="segundo-link"></a>                       <!-- 2 -->
        <a class="ejemplo"></a>                         <!-- 3 -->
        <a class="ejemplo" href="noConflict.html"></a>  <!-- 4 -->
        <span class="ejemplo"></span>                   <!-- 5 -->
        <script>
            $(function() {
                // Referencia a todos los elementos html
                $("*")...                       // (1, 2, 3, 4, 5)
                // Referencia a todas las etiquetas a 
                $("a")...                       // (1, 2, 3, 4)
                // Referencia a todas las clases ejemplo 
                $(".ejemplo")...                // (3, 4, 5)
                // Referencia al identificador segundo-link 
                $("#segundo-link")...           // (2)
                // Referencia por posesión del atributo href 
                $("[href]")...                  // (1, 4)
                // Referencia por valor del atributo href="index.html" 
                $("[href='index.html']")...     // (1)
                // Referencia por indice 
                $("a:eq(0)")...                 // (1)
                $("a:eq(3)")...                 // (4)
                $("span:eq(0)")...              // (5)
                // Referencia por exclusión por indice
                $("a").not(":eq(0)")...         // (2, 3, 4) 
                $("a:not(.ejemplo)")...         // (1, 2) 
            });
        </script>
    </body>
    <!-- ... -->
    ```

### Ocultar y mostrar etiqueta html
```html
<!-- ... -->
<body>
    <p id="parrafo">Párrafo</p>
    <script>
        $(function() {
            // Ocultar elemento
            $('#parrafo').hide();
            // Mostrar elemento
            $('#parrafo').show();
        });
    </script>
</body>
<!-- ... -->
```

### Evento click
```html
<!-- ... -->
<body>
    <p id="texto">Texto</p>
    <button id="showHideTexto">Mostrar / Ocultar texto</button>
    <script>
        $(function() {
            let texto = $('#texto');
            let estaOculto = false;
            $('#showHideTexto').click(() => {
                estaOculto ? texto.show() : texto.hide();
                estaOculto = !estaOculto;
            });
        });
    </script>
</body>
<!-- ... -->
```

### Funciones $.each() y $.map()
```html
<!-- ... -->
<body>
    <ul>
        <li>Laravel</li>
        <li>MySQL</li>
        <li>jQuery</li>
    </ul>
    <script>
        // Recorrer todos los elementos li
        $("li").each(function(indice, elemento) {
            console.log(indice);            // Aquí el indice de iteración
            console.log($(this));           // Aquí el elemento li actual completo
            console.log($(this).text());    // Aquí el texto del elemento li actual
        });

        let lenguajes = ['PHP', 'JavaScript', 'Java', 'Pascal', 'C', 'C++', 'Fortran'];
        $.each(lenguajes, (indice, lenguaje) => {
            console.log(`[${indice}] => ${lenguaje}`);
        });

        /* 
            La función map a diferencia de each, es que aparte de recorrer una estructura iterable,
            también regresa sus elementos
        */
        let dimensiones = $.map(lenguajes, lenguaje => lenguaje.lenght);
        // El array dimensiones contendrá entonces la longitud de las palabras de los elementos lenguje
    </script>
</body>
<!-- ... -->
```

### Saber la estructura de un elemento
```html
<!-- ... -->
<body>
    <!-- ... -->
    <script>
        // ...
        let elemento = ...
        console.log($.isArray(elemento))        // ¿Es un array?
        console.log($.isFunction(elemento))     // ¿Es una función?
        console.log($.isNumeric(elemento))      // ¿Es un número?
    </script>
</body>
<!-- ... -->
```

### Crear un hipervínculo dinámicamente
+ Creando un solo elemento:
    ```html
    <!-- ... -->
    <body>
        <!-- ... -->
        <script>
            let plantilla_a = (href, texto) => {
                return $(`<div><a href="${href}">${texto}</a></div>`);
            };

            $(function() {
                $('body').html(plantilla_a("http://mi_pagina.com", "Mi página"));
            })
        </script>
    </body>
    <!-- ... -->
    ```
+ Creando un elemento detrás de otro:
    ```html
    <!-- ... -->
    <body>
        <!-- ... -->
        <script>
            let plantilla_a = (href, texto) => {
                return $(`<div><a href="${href}">${texto}</a></div>`);
            };

            $(function() {
                $('body').append(plantilla_a("http://mi_pagina1.com", "Mi página 1"));
                $('body').append(plantilla_a("http://mi_pagina2.com", "Mi página 2"));
                $('body').append(plantilla_a("http://mi_pagina3.com", "Mi página 3"));
            })
        </script>
    </body>
    <!-- ... -->
    ```


### Eventos delegados
```html
<!-- ... -->
<body>
    <table id="tablaPaises"></table>
    <script>
        const $tablaPaises = $('#tablaPaises');
        let paises = [
            {
                "id": 149,
                "nombre": "Perú",
                "capital": "Lima",
            },
            {
                "id": 623,
                "nombre": "España",
                "capital": "Madrid",
            },
            {
                "id": 923,
                "nombre": "Ecuador",
                "capital": "Quito",
            }
        ];
        const cargarTabla = () => {
            let tabla = ``;
            $.each(paises, (indice, pais) => {
                tabla += `<tr>`;
                tabla += `<td>${pais.nombre}</td>`;
                tabla += `<td>${pais.capital}</td>`;
                tabla += `<td><button id='${pais.id}' class='otraClase verId'>Ver Id</button></td>`;
                tabla += `</tr>`;
            });
            $tablaPaises.html(tabla);
            $('otraClase').each(function() {
                // jQuery Object
                console.log($(this));
            });
        };

        // Se ejecuta al hacer clic sobre el botón Ver Id
        $(document).on('click', '.verId', function() {
            // Formas de obtener el id
            console.log($(this)[0].id);
            console.log($(this).attr(id));
        });

        // Se ejecuta al hacer clic sobre la tabla
        $($tablaPaises).on('click', $tablaPaises, function() {
            console.log($(this));
            $(this).off('click');   // Desenlace del evento. Esta función ya no se ejecutará una segunda vez
        });

        $(function() {
            cargarTabla();
        });
    </script>
</body>
<!-- ... -->
```


### Asignar, obtener y remover atributos (attr)
```html
<!-- ... -->
<body>
    <!-- ... -->
    <script>
        // ...
        $(document).on('click', '.claseElemento', function() {
            // Obteniendo atributo
            let id = $(this).attr("id");
            let clase = $(this).attr("class");

            // Asignando atributo
            $(this).attr("name", 'Valor asignado'); // Si el atributo no existe, entonces se craa

            // Removiendo atributo
            $(this).removeAttr("id");
        });
        // ...
    </script>
</body>
<!-- ... -->
```


### Método prop
```html
<!-- ... -->
<body>
    <label> ¿Valido?</label>
    <input type="checkbox" id="chkValido" />
    <script>
        $(function() {
            // attr() y prop() son intercambiables en la mayoria de casos
            $('#chkValido').prop('checked', true);
        });
    </script>
</body>
<!-- ... -->
```





ME FALTA DEL VÍDEO 14 EN ADELANTE
https://www.youtube.com/watch?v=AoxdJRSinD0&list=PL_wRgp7nihyY020gyukDupJEJ84gimiPS&index=11




```html
<!-- ... -->
<body>
    <!-- ... -->
    <script>
        // ...
    </script>
</body>
<!-- ... -->
```
