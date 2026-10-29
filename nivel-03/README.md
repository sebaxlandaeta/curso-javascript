# 🚀 Nivel 3: Manipulación Dinámica del DOM, Formularios y jQuery en JavaScript

Nivel 3 del curso de JavaScript de CADIF1, centrado en la creación y eliminación dinámica de elementos en el DOM, gestión y validación de formularios con expresiones regulares, e introducción a la librería jQuery para la manipulación simplificada del DOM y eventos.

---

## 📋 Resumen de Desafíos

### Desafío 1: Gestión Dinámica de Tarjetas de Productos
**Objetivo:** Crear y manipular elementos del DOM de forma dinámica (`createElement`, `appendChild`, `removeChild`) a partir de la entrada de formularios, aplicando estilos aleatorios y eventos sobre nodos dinámicos.

**Requerimientos principales:**
1. **📦 Creación de elementos dinámicos:** Al presionar el botón de procesar producto del formulario, crear dinámicamente dos `<div>` (uno para el nombre del producto y otro para el precio) y un hipervínculo `<a>` con el texto `"Eliminar"` y `href="#"`.
2. **🎨 Formato de contenedor con estilo aleatorio:** Crear un nuevo elemento `<article>` asignándole un color de fondo seleccionado de manera aleatoria a partir de un arreglo de colores predefinidos.
3. **📌 Inserción en el DOM:** Insertar los dos `<div>` y el hipervínculo dentro del `<article>` mediante `appendChild`, y finalmente agregar este `<article>` al contenedor `<section>` principal.
4. **🔍 Navegación por el árbol DOM:** Programar el evento `onclick` del enlace "Eliminar" para solicitar confirmación (`confirm`) al usuario, extrayendo el nombre del producto a eliminar mediante las propiedades `parentNode` y `firstChild`.
5. **🗑️ Eliminación de nodos:** Si el usuario confirma la acción en la ventana emergente, eliminar el nodo `<article>` correspondiente del DOM utilizando `removeChild`.

---

### Desafío 2: Registro, Validación y Modificación de Vehículos en Tabla
**Objetivo:** Manipular tablas HTML de forma dinámica (`insertRow`, `deleteRow`), implementar validaciones de unicidad insensibles a mayúsculas/minúsculas y actualizar métricas de totales y promedios en tiempo real.

**Requerimientos principales:**
1. **🚗 Inserción en tabla:** Formulario con datos de vehículos (placa, modelo, marca, kilometraje, precio, estado). Al enviar, agregar una nueva fila al inicio de la tabla desplegando los datos ingresados.
2. **🛡️ Validación de placa única:** Verificar que la placa ingresada no exista en la tabla antes de insertarla, realizando una comparación insensible a mayúsculas y minúsculas.
3. **📊 Métricas y estadísticas en tiempo real:** Calcular y actualizar al final de la tabla la cantidad total de vehículos por estado (Nuevos vs. Usados) y el precio promedio de todos los registros.
4. **✏️ Edición interactiva vía Prompt:** Permitir modificar la placa haciendo clic directamente sobre la celda correspondiente en la tabla mediante un `prompt`, validando que el valor no esté vacío y que no se duplique con otra placa existente.
5. **🧹 Limpieza masiva de datos:** Implementar un botón para vaciar la tabla por completo mediante un ciclo iterativo utilizando el método `deleteRow`.

---

### Desafío 3: Validaciones de Formularios Frontend con Expresiones Regulares
**Objetivo:** Validar la entrada de datos en un formulario de registro antes de su procesamiento, aplicando Expresiones Regulares (RegEx) para garantizar la integridad y formato de la información.

**Requerimientos principales:**
1. **🔤 Validación de texto alfanumérico:** Validar con una Expresión Regular que el campo "Nombre y Apellido" contenga únicamente caracteres alfanuméricos sin símbolos especiales. Desplegar los mensajes de error en un `<div>`.
2. **📧 Validación de formato Email:** Garantizar mediante RegEx que la dirección de correo electrónico introducida posea una estructura válida (`usuario@dominio.com`).
3. **🏙️ Selección obligatoria de ciudad:** Verificar que el usuario haya seleccionado una opción válida del menú desplegable (`<select>`) de ciudades.
4. **🔒 Contraseña segura y confirmación:** Comprobar que la contraseña tenga una longitud mínima de 8 caracteres y coincida exactamente con la confirmación de la misma.
5. **📋 Aceptación de términos:** Confirmar que el checkbox de "Términos y Condiciones" esté marcado antes de permitir el envío del formulario.

---

### Desafío 4: Galería Interactiva con jQuery
**Objetivo:** Introducir y aplicar la librería jQuery para la selección eficiente de elementos, manipulación de atributos y clases CSS, y gestión de eventos con una sintaxis simplificada.

**Requerimientos principales:**
1. **⚙️ Integración y contador de interacciones:** Vincular jQuery a la página HTML e inicializar un contador numérico en `0` al cargar el documento (`$(document).ready()`) para registrar los clics realizados sobre la cuadrícula de 4x4 imágenes.
2. **🖱️ Manejador de eventos unificado:** Programar el evento de clic para las 8 imágenes (repetidas 2 veces cada una) usando una sola función delegada en jQuery, incrementando y actualizando el contador visible.
3. **🖼️ Intercambio de atributos (src):** Modificar dinámicamente el atributo `src` de las imágenes mediante jQuery para clonar/asignar la imagen seleccionada a otra posición.
4. **🎨 Manipulación de clases CSS:** Aplicar o remover una clase CSS de destaque para mostrar un borde de color exclusivamente sobre la imagen que recibió el clic.
5. **💬 Despliegue de metadatos:** Obtener el valor del atributo `title` de la imagen seleccionada y renderizarlo dinámicamente en un área contenedora de la página.
