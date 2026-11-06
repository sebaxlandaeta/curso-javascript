# 🚀 Nivel 5: Consumo de APIs, Peticiones AJAX, Fetch y Operaciones CRUD

Nivel 5 del curso de JavaScript de CADIF1, centrado en la integración de aplicaciones web con APIs REST externas e internas, consumo de datos asíncronos mediante `XMLHttpRequest`, la función `getJSON` de jQuery, la API moderna `fetch`, gestión de eventos globales AJAX (`ajaxStart`, `ajaxStop`, `ajaxError`), y la implementación completa de operaciones CRUD (GET, POST, DELETE) con interfaces dinámicas.

---

## 📋 Resumen de Desafíos

### Desafío 1: Peticiones AJAX con XMLHttpRequst, jQuery y Control de Eventos Globales
**Objetivo:** Integrar una API pública mediante solicitudes asíncronas con `XMLHttpRequest` y jQuery, implementando indicadores de carga personalizados y manejo global de errores AJAX.

**Requerimientos principales:**
1. **🌐 Petición Inicial con XmlHttpRequest:** Hacer una consulta AJAX al cargar la página utilizando un objeto `XmlHttpRequest` para obtener el listado de usuarios desde `https://jsonplaceholder.typicode.com/users`.
2. **👤 Renderizado de Usuarios:** Mostrar dentro de un DIV los datos de cada usuario obtenido, mostrando específicamente el campo `name`, la propiedad `city` dentro de `address`, y el `name` de la propiedad `company`.
3. **🔍 Consulta Detallada con getJSON:** Programar un botón asociado a cada usuario para realizar una consulta AJAX mediante `$.getJSON` a `https://jsonplaceholder.typicode.com/users/{ID}` y mostrar los resultados detallados en una etiqueta DIV.
4. **⌛ Loading Personalizado y Eventos Globales:** Integrar una imagen GIF de carga creada en *loading.io* y programar las funciones globales `ajaxStart` y `ajaxStop` de jQuery para mostrarla u ocultarla automáticamente durante cualquier petición AJAX.
5. **⚠️ Manejo de Errores AJAX:** Programar la función `ajaxError` para capturar y mostrar un mensaje de error visible en la página ante cualquier problema con la solicitud o la respuesta del backend.

---

### Desafío 2: Consumo de API Académica con Fetch API y Navegación Dinámica
**Objetivo:** Desarrollar una interfaz FrontEnd alternativa conectada a la API de CADIF1 utilizando la API moderna `fetch` para la navegación en cascada por áreas de estudio, cursos y detalles avanzados.

**Requerimientos principales:**
1. **📚 Listado de Áreas de Estudio:** Utilizar `fetch` para realizar una petición GET al endpoint `/areadeestudio` y mostrar las áreas de estudio obtenidas directamente en el HTML.
2. **📖 Filtrado de Cursos por Área:** Programar un evento de clic sobre cada área de estudio para consultar mediante `fetch` el endpoint `/curso/de_un_area/{id_area_de_estudio}`.
3. **📋 Renderizado de Cursos:** Mostrar en el HTML los cursos devueltos por el API correspondientes al área seleccionada por el usuario.
4. **🔎 Consulta de Detalles del Curso:** Permitir al usuario hacer clic en un curso específico para consultar su información detallada (niveles, objetivos principales, precios, etc.) usando `fetch` en el endpoint `/curso/{idcurso}`.
5. **📊 Visualización de Información Avanzada:** Mostrar en la interfaz web de forma estructurada toda la información detallada obtenida del curso seleccionado.

---

### Desafío 3: Operaciones CRUD Completas (GET, POST, DELETE) con API REST
**Objetivo:** Implementar un sistema con operaciones CRUD completas consumiendo la API de `https://restful-api.dev/`, integrando visualización en tablas, eliminación dinámica y registro de nuevos recursos mediante formularios.

**Requerimientos principales:**
1. **📥 Listado Inicial (GET):** Realizar una petición GET al cargar la página para obtener todos los recursos del API y visualizarlos en una tabla HTML.
2. **🗑️ Petición de Eliminación (DELETE):** Añadir un botón en cada fila de la tabla para enviar una petición DELETE al API utilizando el ID correspondiente al recurso asociado.
3. **🔄 Actualización Dinámica de Tabla:** Validar que si la respuesta de eliminación del API retorna el código HTTP 200, se elimine de forma inmediata la fila correspondiente de la tabla HTML.
4. **📝 Formulario de Registro (POST):** Crear un formulario interactivo para capturar los datos requeridos por el API para la creación de un nuevo recurso mediante una petición POST.
5. **➕ Inserción de Nuevo Registro:** Comprobar si la respuesta del API al crear el recurso retorna el código 200 para agregar una nueva fila a la tabla HTML con los datos introducidos por el usuario.
