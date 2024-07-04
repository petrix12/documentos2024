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
+ Código en Python que nos sigue este principio:
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