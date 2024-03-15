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