# Mini Help Desk

Miniproyecto del curso JavaScript Avanzado y Frameworks Frontend.
Universidad Fidélitas.
Estudiante: Marco Calderón Fonseca.

## Descripción general

Mini Help Desk es una aplicación web sencilla
para registrar incidencias de soporte técnico.

Permite registrar una descripción, seleccionar
la prioridad, indicar las horas estimadas y
consultar las incidencias registradas.

## Problema que resuelve

La aplicación permite organizar de una manera
más sencilla las solicitudes de soporte técnico
y conocer la cantidad de incidencias y horas
estimadas de trabajo.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Visual Studio Code
- Git y GitHub

No se utilizan frameworks de Frontend.

## Instrucciones de ejecución

1. Descargar el repositorio.
2. Abrir la carpeta en Visual Studio Code.
3. Instalar la extensión Live Server.
4. Abrir el archivo index.html con Live Server.
5. Registrar y consultar las incidencias.

## Estructura del proyecto

- index.html: estructura de la página.
- assets/css/style.css: diseño de la aplicación.
- src/main.js: funcionamiento principal.
- src/logic.js: lógica, validaciones y closures.
- src/ui.js: actualización de la interfaz.
- src/async.js: servicio asíncrono simulado.

## Uso de closures

En logic.js se encuentra la función
crearGestorTickets(), que mantiene internamente
el arreglo de incidencias y el identificador
del siguiente ticket.

Los métodos agregar() y obtenerTodos() pueden
acceder a la información interna de la función.

## Funciones de orden superior

Map se utiliza para transformar las incidencias
en filas de la tabla y copiar los registros.

Filter permite seleccionar las incidencias
según su prioridad.

Reduce permite calcular el total de horas
estimadas de trabajo.

## Asincronía

En async.js se utiliza una promesa para simular
la comunicación con un servicio externo.

En main.js se utilizan async y await para
esperar la respuesta antes de guardar los datos.

## Manejo de errores

Se utiliza try/catch para controlar errores.

El formulario valida la descripción, prioridad
y cantidad de horas antes de registrar datos.

También existe una opción para simular un error
de conexión y mostrar un mensaje en la interfaz.

## Flujo lógico

1. El usuario completa el formulario.
2. Se validan los datos.
3. Se ejecuta la operación asíncrona.
4. Si la respuesta es correcta, se guarda el ticket.
5. Se actualizan la tabla y los contadores.
6. Si existe un error, se muestra un mensaje.

## Decisiones técnicas

Se utiliza una sola página para mantener una
interfaz sencilla y por lo corto del tiempo de entrega.

El código se separa en archivos para organizar
mejor las responsabilidades de cada función.

Se utiliza una API simulada porque el proyecto
no requiere un servidor real y por el corto tiempo.

## Limitaciones

Los datos se almacenan temporalmente en memoria.

Al recargar la página, se pierden los registros.

La aplicación no utiliza una base de datos ni
un servicio externo real.

## Pruebas realizadas

Las pruebas realizadas personalmente
y sus resultados son correctos, 
se ingresa una descripcion del incidente,
Se escoge una prioridad,
y el tiempo de respuesta,
se guarda y se esta ingresada correctamente, se guarda;
y si tiene un error da el mensaje y no la guarda.

## Reflexión personal
Ya yo contaba con estudios en HTML y CSS previos, un conocimiento 
bajo basico en JavaScript lo habia estudiado Web en Next-U, por eso el interez de poder estudiar con la Fidelitas,
por lo que si me lleve bastante tiempo de estudio, analisis y pruebas para poder 
desarrollar correctamente la logica en JavaScript como módulos, closures, métodos de arrays, 
promesas y manipulación del HTML.
Agradezco demasiado por el conocimiento adquirido y espero seguir practicando,
para desarrollar proyectos mas elaborados y complejos.

## Referencias

Material del módulo 1 de JavaScript Avanzado
y Frameworks Frontend, Universidad Fidélitas.

Mohedano, J., Saiz, J. M. y Salazar Román, P.
(2013). Iniciación a JavaScript. Aula Mentor.

Salvaggio, A. y Testa, G. (2019).
JavaScript: guía completa. Marcombo.

Fernández Casado, P. E. (2020).
Domine JavaScript (4.ª ed.). RA-MA Editorial.
