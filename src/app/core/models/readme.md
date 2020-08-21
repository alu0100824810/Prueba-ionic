# Creación de modelos

Todos los modelos tendrán de heredar de la clase **GenericModel**, la cual nos dotará de una forma rápida y limpia de rellenar atributos y métodos generales de ayuda.

## Exclusiones
El parseo de datos contempla si son arrays u objetos y realiza una copia, pero para otros tipos de datos o transformaciones necesarios tendremos que crear una exclusión.

Una exclusión no es mas que la relación entre el atributo a almacenar y las transformaciones previas necesarias. Ejemplo: 
```typescript
const exclusions: Exclusions[] = [
  {
    field: 'date',
    handler: (date: number) => this.date = new Date(date)
  },
  {
    field: 'gallery',
    handler: (gallery: string[]) => this.gallery = gallery.map(e => e.toLowerCase())
  }
]
```

De esta manera tendremos control absoluto de los datos que manejamos en nuestros modelos.

## Peculiaridades de los modelos
* Todos los atriutos han de estar inicializados a distinto de **undefined**, de lo contrario no se tendrán en cuenta a la hora de parsear el objeto pasado al constructor.
* El orden del constructor siempre a de ser:
  1. constructor de la clase padre (**super();**).
  2. Exclusiones, si no hay exclusiones se puede obviar este paso.
  3. Parsear datos (**this.constructorParse(data)**)

Ejemplo de modelo: 
```typescript
import { GenericModel } from './GenericModel';

export class Article extends GenericModel {

  name: string = null;
  body: string = null;
  img: string = null;
  audio: string = null;
  gallery: string[] = null;

  constructor(data?: object) {
    super();
    this.exclusions = [
      {
        field: 'gallery',
        handler: (gallery: string[]) => this.gallery = gallery.map(e => e.toLowerCase())
      }
    ]
    this.constructorParse(data);
  }
}
```
Objeto para ejemplos:
```typescript
const article: Article = new Article({
  name: 'nuevas funcionalidades',
  body: 'html con el articulo',
  img: 'ruta img',
  audio: 'ruta audio',
  gallery: ['img1', 'img2']
});
```

## Métodos de GenericModel

* export -> Exporta los datos de la clase a un objeto plano, pueden escogerse o eliminar de dicho objetos atributos por su nombre arbitrariamente. Ejemplo:
```typescript
console.log(article.export()); 
/*
{
  name: 'nuevas funcionalidades',
  body: 'html con el articulo',
  img: 'ruta img',
  audio: 'ruta audio',
  gallery: ['img1', 'img2']
}
*/
console.log(article.export({delete: ['img','audio']}));
/*
{
  name: 'nuevas funcionalidades',
  body: 'html con el articulo',
  gallery: ['img1', 'img2']
}
*/
console.log(article.export({required: ['name','body']}));
/*
{
  name: 'nuevas funcionalidades',
  body: 'html con el articulo'
}
*/
```

* filledRequiredFields -> Comprueba si los campos especifícos no están vacíos: Ejemplo:
```typescript
console.log(article.filledRequiredFields(['name'])); // true;
article.name = null; // si es undefined da el mismo resultado
console.log(article.filledRequiredFields(['name'])); // false;
```

* differences -> Devuelve un objeto con la diferencias entre la clase original (contenedora del metodo) y la actualizada (la pasada por parametro). Siempre van a prevalecer los datos de la clase pasada por parametro. Ejemplo:
```typescript
const article2 = new Article({
  name: 'super nuevas funcionalidades',
  body: 'html con el articulo',
  img: 'ruta img',
  audio: 'ruta audio',
  gallery: ['img1', 'img2']
});
// el parametro ha de se exportado para poder hacer la comparación de las clases que hereden
const diff = article.differences(article2.export());
console.log(diff);
/*
{
  name: 'super nuevas funcionalidades
}
*/ 
```




