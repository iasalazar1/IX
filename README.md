# IX Diseño

Sitio web estático para una carpintería: presentación de servicios, proyectos,
proceso de trabajo y formulario de contacto.

## Abrir el sitio

Abre `index.html` en un navegador. No requiere dependencias ni instalación.
Las tipografías se cargan desde un servicio externo, por lo que necesitas
conexión a internet para verlas.

## Agregar las fotografías

Guarda tus imágenes dentro de la carpeta `img/` con estos nombres. El carrusel
de portada usa imágenes independientes de las que aparecen en la selección de
proyectos:

- `img/Logo_IX.png`: logotipo que se muestra en el encabezado y el pie.
- `img/img_carrusel_01.jpg`: primera imagen del carrusel.
- `img/img_carrusel_02.jpg`: segunda imagen del carrusel.
- `img/img_carrusel_03.jpg`: tercera imagen del carrusel.
- `img/img_carrusel_04.jpg`: cuarta imagen del carrusel.
- `img/img_cocina.jpg`: proyecto de cocina en la galería.
- `img/img_mobiliario.jpg`: proyecto de mobiliario en la galería.
- `img/img_closet.jpg`: proyecto de clóset en la galería.

Puedes usar otros formatos si también actualizas la extensión correspondiente
en `index.html`. Si falta una imagen, el sitio mostrará su ruta en el espacio
reservado. El carrusel se controla con las flechas o los indicadores y no avanza
automáticamente.

## Personalizar el contacto

El formulario prepara un correo mediante la aplicación de correo del visitante.
Antes de publicar el sitio, cambia `contacto@ixdiseno.mx` en `script.js` por la
dirección de correo que recibirá las solicitudes. El formulario no envía datos
a un servidor.

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: estilos adaptables a móvil y escritorio.
- `script.js`: menú móvil, año del pie de página y formulario de contacto.
