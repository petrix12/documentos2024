---
title: Arquitectura Hexagonal
sidebar_label: "Apuntes de Arquitectura Hexagonal"
sidebar_position: 0
---

# Apuntes de Arquitectura Hexagonal
## Estructura por entidad
+ Carpeta Entidad:
    + Carpeta Infrastructure
        + Carpeta Respositories
        + Controllers
        + Routes
        + ...
    + Carpeta Application
        + Archivo caso de uso List
        + Archivo caso de uso Store
        + Archivo caso de uso ...
        + ...
    + Carpeta Domain
        + Archivo Entidad: contendrá propiedades y métodos
        + Carpeta Value_Objects
        + Contracts
+ Para agrupar entidades se creara una carpeta **Bounded Context** que las contendrá.
+ La comunicación entre entidades se realizará a treves de una **cola de mensajería**.

## Mapa conceptual DDD (Domain-Driven Design): Tactical Design
+ **Model - Driven Design**
    + Expressed with:
        + **Services**
        + **Entities**
            + Integrity maintained by:
                + **Aggregates**
                    + Encapsulated with:
                        + **Factories**
            + Accessed using:
                + **Repositories**
            + Publishes state changes in:
                + **Domain Events**
            + Encapsulated with:
                + **Factories**
        + **Value Objects**
            + Encapsulted with:
                + **Aggregates**
                    + Accessed using:
                        + **Repositories**
                    + Encapsulated with:
                        + **Factories**
            + Encapsulated with:
                + **Factories**
        + **Domain Events**
    + Isolated with:
        + **Layered Architecture**
    + Gives structure to:
        + **Ubiquitous Language**
    + Defined within:
        + **Bounded Context**
            + **Ubiquitous Language**
            + Keep model unified by:
                + **Continuous Integration**
            + Overview relationships with:
                + **Context Map**
                    + Segregate conceptual messes:
                        + **Big Ball of Mud**
                    + Translate and insulate with:
                        + **Anticorruption Layer**
                    + Free teams to:
                        + **Separate Ways**
                    + Support multiple clients through:
                        + **Open Host Service**
                            + Formalize as:
                                + **Published language**
                    + Overlap contexts through:
                        + **Shared Kernel**
                    + Relate contexts as:
                        + **Customer / Supplier Teams**
                    + Overlap as:
                        + **Conformist**