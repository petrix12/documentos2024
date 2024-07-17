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


## Interface Segregation | Principio de segregación de interfaz
:::tip Nota
Nunca debemos obligar a un cliente a implementar una interfaz que no usa y no se debe obligar a los clientes a depender de métodos que no usan
:::    
+ Código en Typescript que no sigue este principio:
    ```ts
    interface Employee {
        work(): void;
        eat(): void;
        sleep(): void;
    }

    class User implements Emplyee {
        work() {
            // Aquí la lógica para trabajar
        }

        eat() {
            // Aquí la lógica para comer
        }

        sleep() {
            // Aquí la lógica para dormir
        }
    }
    ```
+ Refactorización del código en Typescript para adaptarlo al principio:
    ```ts
    interface Workable {
        work(): void;
    }

    interface Eatable {
        eat(): void;
    }

    interface Sleepable {
        sleep(): void;
    }

    class User implements Workable, Eatable, Sleepable {
        work() {
            // Aquí la lógica para trabajar
        }

        eat() {
            // Aquí la lógica para comer
        }

        sleep() {
            // Aquí la lógica para dormir
        }
    }
    ```

## Dependency Inversion | Principio de inversión de dependencia
:::tip Nota
El módulo de alto nivel no debe depender del módulo de bajo nivel, sino que deben depender de abstracciones.
:::    
+ Código en C# que no sigue este principio:
    ```cs
    class LightBulb {
        public void TurnOn() {
            // Aquí la lógica para encender la bombilla
        }

        public void TrunOff() {
            // Aquí la lógica para apagar la bombilla
        }
    }

    class Switch {
        private LightBulb bulb;

        public Switch() {
            bulb = new LightBulb();
        }

        public void Operate() {
            if(bulb.IsOn) {
                bulb.TrunOff();
            } else {
                bulb.TurnOn();
            }
        }
    }
    ```
+ Refactorización del código en C# para adaptarlo al principio:
    ```cs
    interface ISwitchable {
        void TurnOn();
        void TurnOff();
    }

    class LightBulb : ISwitchable {
        public void TurnOn() {
            // Aquí la lógica para encender la bombilla
        }

        public void TrunOff() {
            // Aquí la lógica para apagar la bombilla
        }
    }

    class Switch {
        private ISwitchable divice;

        public Switch(ISwitchable divice) {
            this.divice = divice;
        }

        public void Operate() {
            if(divice.IsOn) {
                divice.TrunOff();
            } else {
                divice.TurnOn();
            }
        }
    }
    ```

