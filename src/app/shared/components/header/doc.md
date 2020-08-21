# Header component
Este componente permite dibujar, de forma parametrizada la cabecera para las vistas de nuestra aplicación.

## API

| Nombre         | Tipo                 | Default | Descripción                               |
| -------------- | -------------------- | ------- | ----------------------------------------- |
| name           | string               | -       | especifica el nombre de la pagina         |
| showBackButton | boolean              | true    | indica si se quiere boton de vuelta atrás |
| mode           | **ionic** o **antd** | ionic   | determina el estilo del header            |

## Slots
Los slots nos permiten inyectar componentes personalizados dentro del header, la lógica de esos componentes deberá ser gestionada desde la vista que lo personalizó,

| Nombre | Posición               |
| ------ | ---------------------- |
| start  | Al comienzo del header |
| end    | Al final del header    |


## Ejemplos

Cabecera básica
```html
<app-header name="Curie"></app-header>
```

Cabecera básica antd style
```html
<app-header name="Curie" mode="antd"></app-header>
```

Obviando el botón de marca atrás
```html
<app-header [showBackButton]="false" name="Curie"></app-header>
```

Botón al principio
```html
<app-header [showBackButton]="false" name="Curie">
  <ion-button start>start</ion-button>
</app-header>
```

Botón al final
```html
<app-header name="Curie">
  <ion-button end>end</ion-button>
</app-header>
```

Ambos botones
```html
<app-header [showBackButton]="false" name="Curie">
  <ion-button start>start</ion-button>
  <ion-button end>end</ion-button>
</app-header>
```