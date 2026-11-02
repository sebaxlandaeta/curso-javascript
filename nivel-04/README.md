# 🚀 Nivel 4: Programación Orientada a Objetos, Cookies, LocalStoragen, Codigo asíncrono y Eventos de Tiempo.

Nivel 4 del curso de JavaScript de CADIF1, centrado en la aplicación de la Programación Orientada a Objetos (POO) con clases en JavaScript, gestión de formularios, manipulación de tablas dinámicas, persistencia de datos mediante Cookies y `localStorage`, uso de librerías externas de notificación (SweetAlert) y control de eventos de tiempo y fechas.

---

## 📋 Resumen de Desafíos

### Desafío 1: Fundamentos de Clases y Objetos (Sistema de Facturación)
**Objetivo:** Diseñar la arquitectura de clases (`Producto` y `Factura`) mediante Programación Orientada a Objetos para modelar la estructura lógica de un sistema de facturación.

**Requerimientos principales:**
1. **📦 Clase Producto:** Crear la clase `Producto` con un constructor que reciba por parámetro los atributos: `codigo`, `nombre`, `precio`, `cantidad` y `exento`.
2. **🧮 Método Subtotal:** Implementar en la clase `Producto` el método `calcularSubTotal` que retorne la multiplicación del precio por la cantidad.
3. **📄 Clase Factura:** Crear la clase `Factura` con un constructor que reciba `fecha` y `rif`, inicializando `monto` en `0` y `productos` como un arreglo vacío.
4. **⚙️ Instanciación Básica:** Instanciar la clase `Factura` con valores arbitrarios de RIF y fecha.
5. **🔗 Asociación de Objetos:** Instanciar 3 objetos de la clase `Producto` y agregarlos al arreglo del atributo `productos` del objeto Factura.

---

### Desafío 2: Interfaz, Métodos de Negocio y Persistencia en Cookies
**Objetivo:** Extender la lógica de negocio con cálculos, renderizado en tablas HTML, captura de formularios y persistencia de estado mediante Cookies del navegador.

**Requerimientos principales:**
1. **📊 Cálculos de IVA y Totales:** Agregar métodos en la clase `Factura` para calcular el IVA acumulado de los productos no exentos y el monto total de la factura.
2. **📝 Captura e Inserción:** Instanciar la clase `Producto` con los datos obtenidos de un formulario web e incorporarlo dinámicamente al objeto `Factura`.
3. **📋 Renderizado en Tabla:** Mostrar en una tabla HTML los productos agregados a la factura junto con el monto total y el IVA calculado mediante los métodos de clase.
4. **🍪 Persistencia en Cookies:** Serializar y almacenar todo el objeto `Factura` en una Cookie cada vez que se agregue un nuevo producto.
5. **🔄 Recuperación de Sesión:** Leer y deserializar la Cookie al cargar la página para restaurar y visualizar automáticamente los productos previos en la tabla.

---

### Desafío 3: Tienda Virtual, LocalStorage y Notificaciones
**Objetivo:** Desarrollar un catálogo de productos dinámico a partir de un arreglo de objetos, integrando un carrito de compras interactivo con persistencia en `localStorage` y alertas personalizadas.

**Requerimientos principales:**
1. **🛍️ Catálogo Dinámico:** Definir un arreglo con al menos 15 productos (incluyendo URL de foto) y generar su estructura HTML en tiempo de ejecución (utilizando jQuery).
2. **🛒 Gestión de Carrito y LocalStorage:** Programar el evento de agregar al carrito para almacenar los productos seleccionados en un arreglo persistido dentro del `localStorage`.
3. **💬 Alertas con SweetAlert:** Mostrar un mensaje informativo emergente con SweetAlert cada vez que se añada un producto al carrito.
4. **🔢 Control de Unidades:** Incrementar automáticamente el contador de cantidad de un producto si el usuario vuelve a seleccionarlo en el catálogo.
5. **📊 Vista de Carrito:** Habilitar un enlace a una segunda página que lea el `localStorage`, renderice los productos en una tabla con sus sub-totales y calcule el monto total de la compra.

---

### Desafío 4: Auditoría Temporal, Control de Sesión y Elementos Dinámicos
**Objetivo:** Incorporar marcas de tiempo por producto, cálculos de antigüedad en minutos, control de sesiones de navegador (`sessionStorage`), temporizadores automáticos y relojes en tiempo real.

**Requerimientos principales:**
1. **⏱️ Registro de Marca de Tiempo:** Añadir un atributo a la clase `Producto` para almacenar la fecha y hora exacta en que el artículo fue agregado o actualizado en el carrito.
2. **⏳ Indicador de Antigüedad Relativa:** Calcular y mostrar en la vista del carrito los minutos transcurridos desde que se agregó cada producto, mostrando "Hace un instante" si es menor a un minuto.
3. **🖼️ Banner de Oferta por Sesión:** Mostrar una imagen superpuesta de oferta transcurridos 5 segundos, asegurando que no se repita en nuevas recargas a menos que se cierre y abra una nueva ventana del navegador.
4. **⌛ Ocultamiento Automático:** Ocultar automáticamente el banner de oferta pasados 5 segundos desde su aparición sin requerir interacción del usuario.
5. **🕒 Reloj en Tiempo Real:** Implementar y actualizar continuamente en la interfaz la hora actual en formato de 12 horas con indicador AM/PM (ej. `08:34 PM`).
