# CORE
Este directorio contendrá la definición de entidades, servicios, componentes, interceptores, etc. Es decir, todo el código destinado a ofrecer la lógica de dominio de la aplicación. De esta forma, todas las páginas podrán tener acceso desde un único punto.

Cualquier módulo de la aplicación podrá hacer uso de cualquier elemento de “core”, simplemente importando en “app.module.ts” el módulo “core.module.ts”. Esto quiere decir que el módulo solo se cargará una vez al iniciar la aplicación y no será necesario cargarlo en ningún otro lugar.

<hr>


## ERRORS

* Messages Firebase --> Gestiona los mensajes de error que devuelve Firebase

<hr>

## GUARDS

* Welcome-info --> Controla si es la primera vez que el usuario ve la APP, si es así muestra una información de bienvenida
* Login --> Controla si permite entrar al usuario a la parte principal de la App (HOME,etc)

<hr>

## MODELS

* GenericModel --> Modelo Genérico
* HandlerErrorFirebase --> Modelo de errores en Firebase
* Theme --> Modelo para el theme de la App (ThemeService)
* User --> Información Básica de un usuario

<hr>

## SERVICES

* Back-Button --> Botón Atrás
* Login --> Servicio que contiene la principales peticiones a Firebase de login, register,etc 
* Messages --> Servicio para mostrar notificaciones y donde se controla el spinner
* Theme --> Servicio para actualizar los colores principales de la APP

