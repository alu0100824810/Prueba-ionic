
# Diseño e implementación de una aplicación móvil usando la tecnología beacons.


### PLUGINS

* @ionic-native/splash-screen
* @ionic-native/screen-orientation

<hr>

### Splash Screen
  * Size 2732×2732px
  * @ionic-native/splash-screen
<hr>

### Icon App
  * Size 1024×1024px  
<hr>


### Generar Iconos y splash screen
#### [Tutorial](https://ionicframework.com/blog/automating-icons-and-splash-screens/)
 1. Colocar las imágenes dentro del directorio ./resources 
 2. Ejecutar commando ionic cordova resources
 3. Esas imágenes se actualizarán en el config.xml

### ICONOS
### Tabla de contenido
* [Insertar iconos en un componente](readme.md#icons)

<hr>

### Insertar iconos en un componente {#icons}

Para insertar un icono en alguno de nuestros componentes tenemos dos opciones:
  * Ionic Icons
  * Font Awesome

#### Ionic Icons
Simplemente tendremos que ir a [Ionic Icons](https://ionicons.com/) y copiar la etiqueta que nos genera el sitio web para el icono escogido.

```html
<ion-icon name="funnel"></ion-icon>
```

#### Font Awesome
En este caso tendremos que hacer un par se cosillas de más, lo primero, como siempre es buscar nuestro icono en [Font Awesome](https://fontawesome.com/icons?d=gallery).
Una vez hayamos elegido nuestro icono tenemos que fijarnos en el prefijo que muestra, ya que se corresponden con diferentes paquetes, estos son:
  * fas => @fortawesome/free-solid-svg-icons
  * far => @fortawesome/free-regular-svg-icons
  * fab => @fortawesome/free-brands-svg-icons

Cuando identifiquemos el paquete al que pertenece tendremos que importar el icono en el componente en el cual queramos insertarlo.

Para insertar el icono

```html
<i class="fas fa-backspace"></i>
```
importaremos 
```ts
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
```

Ahora el icono es accesible al componente y simplemente lo pondremos en un objeto para una mejor organización y que el html pueda leerlo;

```js
  icons = {
    backspace: faBackspace
  };
```

Hay que tener en cuenta de que el objeto tiene que ser propiedad (preferiblemente bajo el accesor **protected**) de la clase del componente.

Por ultimo en el html escribiremos 
```html
<fa-icon [icon]="icons.backspace"></fa-icon>
```