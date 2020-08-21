# SHARED
Este directorio, también heredado de la estructura recomendada por Angular, está destinado a contener aquellos componentes, directivas, pipes y/o módulos de uso compartido. Lo ideal al crear esta carpeta es crear un módulo “shared.module.ts” que servirá de exportador de módulos al resto de la aplicación.

A diferencia de la carpeta “core”, el módulo “shared” será importado por cualquier otro módulo o página que requiera hacer uso de elementos declarados (exportados) en el módulo “shared.module.ts”. Es decir, el módulo “shared” no se incluye en el módulo principal de la aplicación “app.module.ts”.

<hr>

## COMPONENTES

* HEADER --> Cabecera
* FOOTER --> Pie de página
* SIDEBAR Menu --> Menu lateral con opciones
* view-list-forms --> Lista de formularios

## MODELS

* Form --> Formularios

<hr>