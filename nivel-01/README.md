# 🚀 Nivel 1: Fundamentos, Estructuras de Control y Arreglos en JavaScript

Nivel 1 del curso de JavasSript de CADIF1, enfocado en dominar la sintaxis base de JavaScript, el uso del DOM y la consola, la gestión de condiciones y validaciones defensivas con bucles, y la manipulación de arreglos y métodos nativos.

---

## 📋 Resumen de Desafíos

### Desafío 1: Estructura HTML Básica, Carga de Scripts y Mensajes de Consola
**Objetivo:** Comprender la estructura de un documento web, el uso de etiquetas de control (`noscript`), la carga de scripts en distintas ubicaciones del documento y la salida de mensajes por consola utilizando diferentes niveles de severidad.

**Requerimientos principales:**
1. **📄 Documento HTML y análisis de sitios:** Creación de un documento `index.html` con la URL de un sitio web que utiliza JavaScript (`cadif1.com`) y una descripción de sus usos principales.
2. **⚠️ Etiqueta noscript:** Implementación de la etiqueta `<noscript>` con un mensaje de advertencia para navegadores sin JavaScript habilitado.
3. **⚡ Carga estratégica de scripts:** Inserción de un script en el `<head>` utilizando `console.log` y otro al final del `body` utilizando `console.info`.
4. **🛠️ Archivo JavaScript externo:** Creación de un archivo externo `desafio1.js` que muestra el nombre y correo del autor mediante `console.warn`.
5. **🔗 Vinculación de script:** Vinculación correcta del archivo `desafio1.js` al final del documento HTML.

---

### Desafío 2: Sistema de Alquiler de Vehículos
**Objetivo:** Desarrollar una aplicación interactiva que simule el cálculo de costos de alquiler de vehículos utilizando variables aleatorias en rangos específicos y formateo de datos numéricos.

**Requerimientos principales:**
1. **🔒 Modo estricto y archivo JS:** Activación del modo estricto (`"use strict";`) en el archivo JavaScript y su respectiva vinculación al HTML.
2. **🚗 Captura con prompt:** Solicitud interactiva al usuario del modelo del vehículo a través de un `prompt`.
3. **🎲 Generación aleatoria:** Generación automática de valores aleatorios para el costo diario (entre $25 y $50) y la cantidad de días (entre 3 y 10) usando `Math.random()`, con visualización en consola.
4. **📊 Cálculos matemáticos:** Cálculo matemático del monto total del alquiler y del pago inicial requerido (35% del total), almacenados en variables dedicadas.
5. **💬 Resultados con formato:** Presentación combinada de los resultados finales en un único cuadro de alerta (`alert`) con formato de un solo decimal (`.toFixed(1)`).

---

### Desafío 3: Control de Nómina y Comisiones de Vendedores
**Objetivo:** Crear un sistema para procesar la nómina y comisiones de vendedores aplicando reglas de negocio complejas, condiciones anidadas y control robusto de entradas mediante bucles.

**Requerimientos principales:**
1. **🛡️ Validación defensiva de datos:** Lectura y validación estricta mediante bucles `while` de datos numéricos (sueldo base, ventas y edad), permitiendo ventas en cero pero bloqueando valores negativos o inválidos, además de capturar el sexo con un `confirm`.
2. **🔀 Condiciones anidadas para comisiones:** Implementación de condiciones anidadas para determinar de manera precisa el porcentaje de bonificación por ventas según la tabla de rangos establecida.
3. **💰 Cálculos individuales y visualización:** Cálculo automatizado del bono por ventas, bono de adulto mayor (según edad y género) y sueldo total, mostrado tanto en alertas como en consola.
4. **🔄 Ciclo interactivo do-while:** Estructuración de todo el proceso de captura dentro de un ciclo `do...while` controlado por un `confirm` para procesar múltiples vendedores de forma consecutiva.
5. **📈 Estadísticas globales:** Consolidación de estadísticas globales al finalizar el ciclo, mostrando el número total de vendedores procesados y el acumulador general de pagos.

---

### Desafío 4: Gestor de Pensum y Carreras
**Objetivo:** Gestionar colecciones de datos mediante arreglos en JavaScript, realizando búsquedas y validaciones de elementos con métodos nativos y bucles de control.

**Requerimientos principales:**
1. **📚 Declaración de arreglos:** Declaración de un arreglo estático `cursos` con al menos 5 nombres de materias de CADI F1 y un arreglo vacío `cursosDeCarrera`.
2. **✍️ Solicitud interactiva:** Solicitud interactiva del nombre de un curso al usuario para armar el pensum de la carrera.
3. **🔍 Búsqueda y validación de duplicados:** Validación mediante el método `includes` para verificar la existencia del curso en el catálogo general y prevenir registros duplicados, controlando errores con un ciclo `do...while`.
4. **🔁 Ingreso múltiple con ciclo:** Implementación de un ciclo principal `do...while` con `confirm` para permitir la incorporación sucesiva de múltiples cursos al pensum.
5. **📊 Recorrido y reporte con length:** Recorrido final del arreglo `cursosDeCarrera` utilizando un ciclo `for` clásico y la propiedad `length` para desplegar la lista detallada de materias agregadas.
