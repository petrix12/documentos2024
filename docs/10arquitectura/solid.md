---
title: Principios SOLID
sidebar_label: "Apuntes de Principios SOLID"
sidebar_position: 1
---

# Principios SOLID
## Acrónimo:
+ **S**: Single Responsibility | Principio de responsabilidad única.
+ **O**: Open / Close | Prinicipio de Abierto o Cerrado.
+ **L**: Liskov Substitution | Principio de sustitución de Barbara Liskov
+ **I**: Interface Segregation | Principio de segregación de interfaz
+ **D**: Dependency Inversion | Principio de inversión de dependencia


## Single Responsibility | Principio de responsabilidad única
:::tip Nota
Una clase debe tener una y solo una razón para cambiar, es decir, un único trabajo.
:::
+ Código en Python que no sigue este principio:
    ```py
    class Employee:
        def __init__(self, name, id, salary)
            self.name = name
            self.id = id
            self.salary = salary

        def calculate_salary(self, hours_worked):
            # Aquí la lógica para el cálculo del salario
            pass

        def save_to_database(self):
            # Aquí la lógica para guardar los datos en base de datos
            pass
    ```
+ Refactorización del código en Python para adaptarlo al principio:
    ```py
    class Employee:
        def __init__(self, name, id, salary)
            self.name = name
            self.id = id
            self.salary = salary

        def calculate_salary(self, hours_worked):
            # Aquí la lógica para el cálculo del salario
            pass

    class EmployeeToDatabase:
        def save_to_database(self, employee):
            # Aquí la lógica para guardar los datos en base de datos
            pass
    ```

## Open / Close | Prinicipio de Abierto o Cerrado
:::tip Nota
Los objetos o entidades deben estar abiertos para su extensión, pero cerrados a modificaciones.
:::    
+ Código en PHP que no sigue este principio:
    ```php
    <?php

    class Shape {
        public $type;

        public function __construct($type) {
            $this->type = $type;
        }

        public function area() {
            if($this->type === 'circle') {
                // Aquí la lógica para para el cáclulo del área de un círculo
            } elseif($this->type === 'rectangle') {
                // Aquí la lógica para para el cáclulo del área de un rectángulo
            }
        }
    }
    ```
+ Refactorización del código en PHP para adaptarlo al principio:
    ```php
    <?php

    interface AreaCalculable {
        public function area();
    }

    class Circle implements AreaCulculable {
        public function area() {
            // Aquí la lógica para para el cáclulo del área de un círculo
        }
    }

    class Rectangle implements AreaCulculable {
        public function area() {
            // Aquí la lógica para para el cáclulo del área de un rectángulo
        }
    }
    ```

## Liskov Substitution | Principio de sustitución de Barbara Liskov
:::tip Nota
Cada sublclase o clase derivada debe ser sustituible por su clase base o padre.
:::    
+ Código en Java que no sigue este principio:
    ```java
    class Bird {
        public void fly() {
            // Aquí la lógica para para la implementación de vuelo común para todas las aves
        }
    }

    class Ostrich extends Bird {
        // Las avestruces no vuelan, pero no pueden anular el método fly
    }
    ```
+ Refactorización del código en Java para adaptarlo al principio:
    ```java
    abstract class Bird {
        public abstract void move();
    }

    class Sparrow extends Bird {
        public void move() {
            // Aquí la lógica para para la implementación de movimiento del gorrión
        }
    }

    class Ostrich extends Bird {
        public void move() {
            // Aquí la lógica para para la implementación de movimiento del avestruz
        }
    }
    ```