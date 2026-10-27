# 🚀 Nivel 2: Eventos, Manejo del DOM y Objeto Window en JavaScript

Nivel 2 del curso de JavaScript de CADIF1, enfocado en dominar la interacción con el usuario mediante eventos, la manipulación del DOM, la gestión de ventanas y metadatos con el objeto `window` y `navigator`, y el procesamiento dinámico de formularios.

---

## 📋 Resumen de Desafíos

### Desafío 1: Sistema de Registro de Productos Farmacéuticos
**Objetivo:** Implementar la lógica básica de captura, consulta e inspección de arreglos asociando funciones a eventos de clic desde elementos HTML.

**Requerimientos principales:**
1. **📄 Interfaz HTML:** Creación de un archivo HTML con 3 botones: `"Registrar"`, `"Consultar"` y `"Ver listado"`.
2. **📦 Estructura JS:** Definición de un arreglo en `main.js` para almacenar los nombres de los productos farmacéuticos.
3. **➕ Registro de productos:** Programación del manejador `onclick` del botón "Registrar" para solicitar el nombre de un producto vía `prompt` y añadirlo al arreglo.
4. **📋 Visualización de listado:** Programación del manejador `onclick` del botón "Ver listado" para mostrar un `alert` con los nombres de todos los productos almacenados.
5. **🔍 Búsqueda y consulta:** Programación del manejador `onclick` del botón "Consultar" para buscar un producto ingresado por `prompt` utilizando `indexOf`. Si existe, muestra su posición en el arreglo; de lo contrario, alerta que el producto no existe.

---

### Desafío 2: Navegación y Control de Ventanas con Window y Navigator
**Objetivo:** Utilizar las propiedades del navegador y del sistema a través de `navigator` y gestionar ventanas emergentes personalizadas con `window.open` y `screen`.

**Requerimientos principales:**
1. **🖥️ Información del sistema:** Función asociada a un botón que muestra mediante un `alert` el nombre del navegador, idioma actual y sistema operativo del usuario usando el objeto `navigator`.
2. **🌐 Redirección por empresa:** Búsqueda del nombre de una empresa ingresado por `prompt` en un arreglo de nombres. Si existe, abre su URL correspondiente (almacenada en un arreglo paralelo) en una nueva pestaña mediante `window.open`.
3. **🎲 Apertura aleatoria de URLs:** Función asociada a un botón que selecciona de manera aleatoria una URL del arreglo y la abre en una nueva ventana del navegador.
4. **📐 Dimensionamiento de ventana:** Configuración del tercer parámetro de `window.open` y del objeto `screen` para que la ventana abierta ocupe 3/4 del ancho y 2/3 del alto de la pantalla.
5. **🎯 Posicionamiento centrado:** Ajuste del posicionamiento de la ventana emergente para que aparezca centrada en la pantalla del usuario mediante el método `moveTo` y las dimensiones de `screen`.

---

### Desafío 3: Manipulación del DOM y Event Listeners
**Objetivo:** Refactorizar el control de eventos hacia `addEventListener`, actualizar dinámicamente el DOM y renderizar contenido HTML dinámico en ventanas secundarias.

**Requerimientos principales:**
1. **🛡️ Registro validado de empresas:** Botón para agregar empresas y URLs vía `prompt`, previniendo duplicados con `includes()`. Al registrar con éxito, se actualiza el `<title>` del documento con la cantidad total de empresas.
2. **🏷️ Actualización del DOM:** Despliegue dinámico del nombre de la última empresa agregada dentro de un contenedor `<div>` mediante `document.getElementById()` y la propiedad `innerText`.
3. **📄 Impresión en ventana en blanco:** Botón que abre una ventana en blanco (`window.open`) e imprime dinámicamente la lista de empresas registradas como hipervínculos funcionales utilizando `document.write`.
4. **🎨 Cambio de fondo aleatorio:** Programación del evento de apertura del reporte para cambiar aleatoriamente el color de fondo (`backgroundColor`) de la página principal seleccionando un valor de un arreglo de colores.
5. **⚙️ Event Listeners nativos:** Eliminación total de atributos `onclick` en el HTML, asignando todos los manejadores de eventos desde JavaScript con `addEventListener`.

---

### Desafío 4: Sistema de Facturación e Interfaz de Punto de Venta
**Objetivo:** Desarrollar una aplicación interactiva de facturación mediante manipulación de formularios en JS, funciones anónimas y generación de comprobantes emergentes.

**Requerimientos principales:**
1. **📝 Formulario de facturación:** Creación de una interfaz en HTML con selección de producto (`<select>`), precio, cantidad, inicial (`30%`, `40%`, `50%`), número de cuotas y los botones `"CALCULAR"` y `"FACTURAR"`.
2. **🧮 Cálculo de totales y cuotas:** Programación del botón "CALCULAR" mediante `addEventListener` y una función anónima para calcular y desplegar en un `<div>` el subtotal, el monto de la inicial y el valor de cada cuota.
3. **🔒 Control de estado de botones:** Mantenimiento del botón "FACTURAR" en estado inactivo (`disabled`) hasta que el usuario ejecute con éxito el cálculo de la compra.
4. **🧾 Confirmación e impresión de factura:** Programación del botón "FACTURAR" para solicitar confirmación con `confirm()`. Al aceptar, abre una ventana emergente de `500px x 500px` detallando todos los datos de la transacción.
5. **🔄 Reset del formulario:** Limpieza automatizada de los campos del formulario y del área de resultados del `<div>` tras procesar la factura, dejando la aplicación lista para una nueva venta.
