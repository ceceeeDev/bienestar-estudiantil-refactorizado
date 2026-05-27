# Bienestar Estudiantil - Dashboard Interactivo

Proyecto académico correspondiente al **Grupo 5**, desarrollado para el módulo de **Bienestar Estudiantil**.  
La aplicación consiste en un dashboard web interactivo construido con **HTML, CSS y JavaScript ES6**, orientado a consultar servicios de apoyo estudiantil y registrar solicitudes de atención de manera simulada.

El proyecto se encuentra en su **fase final funcional**, cumpliendo con los requerimientos principales solicitados por el docente: interfaz web, listado dinámico, formulario con validaciones, detalle de registros, búsqueda, filtros, ordenamiento, persistencia local con `localStorage` y uso de métodos modernos de arreglos en JavaScript.

---

## Tema asignado

**Grupo 5: Bienestar Estudiantil**

El módulo está enfocado en presentar servicios relacionados con el acompañamiento, apoyo y atención de estudiantes dentro de una institución educativa.

Los servicios iniciales definidos son:

1. Orientación psicológica
2. Apoyo académico
3. Asesoría vocacional
4. Atención médica básica
5. Actividades deportivas
6. Programas de inclusión
7. Becas y ayudas estudiantiles
8. Talleres de bienestar emocional

---

## Estado actual del proyecto

El proyecto se encuentra en una **fase final según las indicaciones del docente**.

Actualmente permite:

- Visualizar dinámicamente los servicios de bienestar estudiantil.
- Consultar el detalle completo de cada servicio.
- Buscar servicios por texto.
- Filtrar servicios por categoría.
- Filtrar servicios por prioridad.
- Ordenar servicios por nombre o prioridad.
- Registrar solicitudes de atención mediante formulario.
- Validar los datos ingresados antes de guardar.
- Guardar solicitudes en `localStorage`.
- Recuperar las solicitudes al recargar la página.
- Mostrar las solicitudes registradas en tarjetas.
- Actualizar el contador de solicitudes registradas.
- Generar un ID único para cada solicitud nueva.
- Mantener un diseño responsive para distintos tamaños de pantalla.

---

## Tecnologías utilizadas

- **HTML5** para la estructura de la interfaz.
- **CSS3** para el diseño visual y responsive.
- **JavaScript ES6** para la lógica interactiva.
- **Git** para control de versiones.
- **GitHub** para trabajo colaborativo.
- **localStorage** para persistencia local de solicitudes.

No se utilizaron frameworks front-end, cumpliendo con la indicación del docente de trabajar con tecnologías base.

---

## Estructura del proyecto

```txt
bienestar-estudiantil-dashboard/
│
├── index.html
├── styles.css
├── data.js
├── app.js
├── README.md
└── .gitignore
```

### Descripción de archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Contiene la estructura principal del dashboard: encabezado, resumen, filtros, listado de servicios, detalle, formulario y listado de solicitudes. |
| `styles.css` | Contiene el diseño visual del proyecto, estilos de tarjetas, formularios, badges, secciones, responsive y efectos visuales. |
| `data.js` | Contiene el arreglo inicial `studentWellnessServices` con los 8 servicios del módulo. |
| `app.js` | Contiene toda la lógica de renderizado, búsqueda, filtros, ordenamiento, validaciones, localStorage y eventos del DOM. |
| `README.md` | Documento explicativo del proyecto, instrucciones de uso, funcionalidades y distribución de trabajo. |
| `.gitignore` | Archivo de configuración para excluir archivos innecesarios del control de versiones. |

---

## Servicios iniciales del módulo

En el archivo `data.js` se definió un arreglo llamado `studentWellnessServices`, compuesto por objetos JavaScript. Cada objeto representa un servicio de bienestar estudiantil.

Cada servicio contiene los siguientes campos:

- `id`
- `name`
- `category`
- `availability`
- `priority`
- `schedule`
- `location`
- `description`
- `requirements`

Ejemplo:

```js
{
  id: 1,
  name: "Orientación psicológica",
  category: "Salud mental",
  availability: "Disponible",
  priority: "Alta",
  schedule: "Lunes a viernes, 08:00 - 16:00",
  location: "Departamento de Bienestar Estudiantil",
  description:
    "Servicio de acompañamiento psicológico para estudiantes que presenten estrés, ansiedad, problemas personales, familiares o académicos.",
  requirements:
    "Presentar carnet estudiantil y solicitar una cita previa mediante el formulario de atención.",
}
```

Esta estructura permite trabajar con arreglos y objetos, además de facilitar el renderizado dinámico desde JavaScript.

---

## Funcionalidades implementadas

### 1. Renderizado dinámico de servicios

Los servicios definidos en `data.js` se muestran automáticamente en pantalla mediante JavaScript.

Función principal:

```js
const renderServices = (services) => {
  // Genera tarjetas HTML a partir del arreglo recibido
};
```

Esta función utiliza:

- `map()` para recorrer los servicios.
- Template strings para construir el HTML.
- `innerHTML` para insertar las tarjetas en el DOM.

---

### 2. Carga dinámica del selector de servicios

El formulario de solicitud incluye un campo `select` que se llena automáticamente con los servicios disponibles.

Función principal:

```js
const renderServiceOptions = (services) => {
  // Carga las opciones del select usando los servicios disponibles
};
```

Esto evita escribir manualmente las opciones en el HTML y mantiene sincronizado el formulario con los datos del sistema.

---

### 3. Tarjetas de resumen

El dashboard muestra información general, como:

- Total de servicios.
- Servicios disponibles.
- Solicitudes registradas.

Función principal:

```js
const updateSummary = (services) => {
  // Actualiza los contadores principales del dashboard
};
```

Para calcular los servicios disponibles se utiliza `filter()`.

---

### 4. Detalle dinámico del servicio

Cada tarjeta de servicio incluye un botón **Ver detalle**.  
Al hacer clic, se muestra información ampliada del servicio seleccionado.

Funciones principales:

```js
const renderServiceDetail = (service) => {
  // Muestra la información completa del servicio
};

const handleServiceDetail = (event) => {
  // Identifica qué servicio fue seleccionado
};
```

Esta funcionalidad utiliza:

- `addEventListener()`
- `dataset`
- `Number()`
- `find()`

---

### 5. Búsqueda de servicios

El usuario puede buscar servicios por texto.  
La búsqueda se aplica sobre:

- Nombre del servicio.
- Categoría.
- Descripción.

Función relacionada:

```js
const handleSearchServices = () => {
  filterServices();
};
```

La búsqueda utiliza:

- `toLowerCase()`
- `trim()`
- `includes()`
- `filter()`

---

### 6. Filtros por categoría y prioridad

El dashboard permite filtrar los servicios por:

- Categoría.
- Prioridad.

Función principal:

```js
const filterServices = () => {
  // Combina búsqueda, categoría, prioridad y ordenamiento
};
```

Esta función integra la búsqueda con los filtros, permitiendo combinar varios criterios al mismo tiempo.

---

### 7. Ordenamiento de servicios

El usuario puede ordenar los servicios por:

- Orden original.
- Nombre.
- Prioridad.

Función principal:

```js
const sortServices = (services) => {
  // Ordena una copia del arreglo recibido
};
```

Para ordenar por nombre se utiliza:

```js
a.name.localeCompare(b.name);
```

Para ordenar por prioridad se definió un orden personalizado:

```js
const priorityOrder = {
  Alta: 1,
  Media: 2,
  Baja: 3,
};
```

También se utiliza el spread operator para no modificar directamente el arreglo original:

```js
const servicesCopy = [...services];
```

---

### 8. Validación del formulario

Antes de registrar una solicitud, el sistema valida los campos ingresados por el usuario.

Campos validados:

- Nombre completo.
- Correo institucional.
- Servicio solicitado.
- Motivo de la solicitud.

Función principal:

```js
const validateForm = (event) => {
  // Valida los campos y evita el envío si hay errores
};
```

Validaciones aplicadas:

- El nombre no puede estar vacío.
- El correo debe tener formato válido.
- El correo debe corresponder a un dominio institucional `.edu.ec`.
- El usuario debe seleccionar un servicio.
- El motivo debe tener al menos 10 caracteres.

Los errores se muestran directamente debajo de cada campo usando elementos del DOM, evitando depender únicamente de alertas del navegador.

---

### 9. Registro de solicitudes

Cuando el formulario es válido, se llama a la función `saveRequest()` para crear y guardar una solicitud.

Función principal:

```js
const saveRequest = (name, email, service, reason) => {
  // Crea el objeto de solicitud y lo guarda en localStorage
};
```

Cada solicitud contiene:

- `id`
- `name`
- `email`
- `service`
- `reason`
- `date`

Ejemplo:

```js
{
  id: "SOL-1779653992022-1158",
  name: "César",
  email: "cesar@utm.edu.ec",
  service: "Apoyo académico",
  reason: "Necesito orientación sobre una asignatura.",
  date: "24/5/2026, 3:19:52 p. m."
}
```

---

### 10. Generación de ID único

Se agregó una función para generar un identificador único por cada solicitud nueva.

Función principal:

```js
const generateRequestId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  return `SOL-${timestamp}-${randomNumber}`;
};
```

El ID se compone de:

- Prefijo `SOL`.
- Marca temporal en milisegundos.
- Número aleatorio de 4 dígitos.

Esto permite diferenciar cada solicitud registrada.

---

### 11. Persistencia con localStorage

Las solicitudes se guardan en el navegador utilizando `localStorage`.

Funciones principales:

```js
const getRequestsFromStorage = () => {
  // Lee las solicitudes guardadas
};

const saveRequest = (name, email, service, reason) => {
  // Guarda una nueva solicitud
};
```

Recursos utilizados:

- `localStorage.getItem()`
- `localStorage.setItem()`
- `JSON.parse()`
- `JSON.stringify()`

La clave usada para guardar las solicitudes es:

```js
"wellnessRequests"
```

Esto permite que los datos permanezcan disponibles aunque se recargue la página.

---

### 12. Renderizado de solicitudes registradas

Las solicitudes guardadas se muestran en pantalla en la sección correspondiente.

Función principal:

```js
const renderRequests = () => {
  // Muestra las solicitudes guardadas y actualiza el contador
};
```

Esta función:

- Lee los datos desde `localStorage`.
- Actualiza el contador de solicitudes registradas.
- Muestra un mensaje si no existen solicitudes.
- Renderiza tarjetas dinámicas con `map()`.

---

## Explicación general del flujo del programa

El flujo principal de la aplicación funciona de la siguiente manera:

```txt
1. Se cargan los servicios desde data.js.
2. initApp() inicializa la aplicación.
3. renderServices() muestra las tarjetas de servicios.
4. renderServiceOptions() carga los servicios en el formulario.
5. updateSummary() actualiza los contadores de servicios.
6. renderRequests() carga las solicitudes guardadas desde localStorage.
7. El usuario puede buscar, filtrar y ordenar servicios.
8. El usuario puede ver el detalle de un servicio.
9. El usuario completa el formulario de solicitud.
10. validateForm() valida los campos.
11. Si los datos son correctos, saveRequest() guarda la solicitud.
12. renderRequests() actualiza el listado y el contador.
```

---

## Métodos y recursos de JavaScript utilizados

El proyecto utiliza los siguientes métodos y recursos:

- `map()`
- `filter()`
- `find()`
- `sort()`
- `push()`
- `includes()`
- `toLowerCase()`
- `trim()`
- `localeCompare()`
- `addEventListener()`
- `getElementById()`
- `innerHTML`
- `textContent`
- `classList.add()`
- `classList.remove()`
- `dataset`
- `Number()`
- `Date.now()`
- `Math.random()`
- `Math.floor()`
- `new Date().toLocaleString()`
- `localStorage.getItem()`
- `localStorage.setItem()`
- `JSON.parse()`
- `JSON.stringify()`
- Spread operator `[...]`
- Template strings

---

## Diseño visual y responsive

El archivo `styles.css` contiene el diseño general del dashboard.

Aspectos principales del diseño:

- Uso de variables CSS en `:root`.
- Paleta de colores institucional con tonos azul, teal y neutros.
- Tipografías importadas desde Google Fonts.
- Tarjetas con bordes redondeados y sombras suaves.
- Badges para categorías, disponibilidad y prioridad.
- Diseño de formulario con mensajes de error visibles.
- Diseño responsive mediante media queries.
- Adaptación de columnas en pantallas medianas y pequeñas.

El responsive se trabaja principalmente en dos puntos de quiebre:

```css
@media (max-width: 950px) {
  /* Ajustes para tablets y pantallas medianas */
}

@media (max-width: 600px) {
  /* Ajustes para celulares */
}
```

---

## Instrucciones de uso

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Entrar a la carpeta del proyecto

```bash
cd bienestar-estudiantil-dashboard
```

### 3. Abrir el proyecto

Puedes abrir el archivo `index.html` directamente en el navegador o utilizar una extensión como **Live Server** en Visual Studio Code.

Con Live Server:

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Clic derecho sobre `index.html`.
3. Seleccionar **Open with Live Server**.

---

## Cómo usar la aplicación

### Consultar servicios

Al abrir el proyecto, se muestran las tarjetas de servicios de bienestar estudiantil.  
Cada tarjeta contiene nombre, descripción, categoría, disponibilidad y prioridad.

### Ver detalle de un servicio

Para consultar información completa:

1. Ubicar el servicio deseado.
2. Presionar el botón **Ver detalle**.
3. Revisar la información ampliada en el panel lateral.

### Buscar servicios

En el campo de búsqueda se puede escribir una palabra clave, por ejemplo:

```txt
salud
psicología
becas
deporte
```

El sistema mostrará los servicios relacionados.

### Filtrar servicios

Se puede filtrar por:

- Categoría.
- Prioridad.

Los filtros pueden combinarse con la búsqueda.

### Ordenar servicios

El selector de ordenamiento permite organizar los servicios por:

- Orden original.
- Nombre del servicio.
- Prioridad.

### Registrar una solicitud

Para registrar una solicitud:

1. Escribir el nombre completo del estudiante.
2. Ingresar un correo institucional con dominio `.edu.ec`.
3. Seleccionar un servicio.
4. Escribir el motivo de la solicitud con al menos 10 caracteres.
5. Presionar el botón de registro.

Si los datos son correctos, la solicitud se guarda y aparece en la sección de solicitudes registradas.

### Limpiar solicitudes de prueba

Si se desea borrar las solicitudes guardadas localmente durante pruebas, se puede ejecutar en la consola del navegador:

```js
localStorage.removeItem("wellnessRequests");
location.reload();
```

---

## Distribución del trabajo

### César

Responsable de la lógica principal del dashboard en JavaScript.

Aportes principales:

- Renderizado dinámico de servicios.
- Carga dinámica del selector del formulario.
- Contadores de servicios.
- Detalle dinámico de servicios.
- Búsqueda por texto.
- Filtros por categoría y prioridad.
- Ordenamiento por nombre y prioridad.
- Integración general de eventos del DOM.
- Organización de la lógica inicial en `app.js`.
- Revisión de redundancias en el código.
- Integración limpia del ID único en el flujo final de solicitudes.

---

### José

Responsable de la validación del formulario.

Aportes principales:

- Validación del nombre del estudiante.
- Validación del formato del correo.
- Validación del dominio institucional `.edu.ec`.
- Validación del servicio seleccionado.
- Validación del motivo de la solicitud.
- Mensajes visibles de error debajo de cada campo.
- Mensaje general de éxito o error.
- Activación del flujo de guardado cuando el formulario es válido.

---

### Pablo

Responsable de la persistencia y visualización de solicitudes.

Aportes principales:

- Creación de la lógica de `localStorage`.
- Función para obtener solicitudes guardadas.
- Función para guardar solicitudes.
- Renderizado de solicitudes registradas.
- Actualización del contador de solicitudes.
- Manejo del estado vacío cuando no existen solicitudes.
- Integración del renderizado inicial de solicitudes al cargar la aplicación.

---

### Arianna

Aportó en la fase de registro de solicitudes y en la identificación de registros.

Aportes principales:

- Propuesta de generación de identificadores únicos para solicitudes.
- Aporte conceptual para asociar cada solicitud con una fecha y un identificador.
- Participación en la etapa de registro de solicitudes.
- Elementos útiles de su propuesta fueron integrados de forma limpia al flujo final para evitar redundancias.

---

### Jorge

Responsable del informe y documentación académica del proyecto.

Aportes principales:

- Elaboración del informe del proyecto.
- Organización de la explicación académica.
- Apoyo en la presentación y descripción del desarrollo.
- Documentación del proceso de trabajo grupal.

---

## Requisitos del enunciado cumplidos

| Requisito solicitado | Estado |
|---|---|
| Interfaz web funcional con HTML, CSS y JavaScript | Cumplido |
| No usar frameworks front-end | Cumplido |
| JavaScript ES6 o superior | Cumplido |
| Arreglo inicial con al menos 8 registros | Cumplido |
| Uso de objetos | Cumplido |
| Uso de arreglos | Cumplido |
| Uso de métodos de arreglos | Cumplido |
| Uso de `map()` | Cumplido |
| Uso de `filter()` | Cumplido |
| Uso de `find()` | Cumplido |
| Uso de `sort()` | Cumplido |
| Eventos del DOM | Cumplido |
| Listado dinámico de registros | Cumplido |
| Formulario de creación o registro | Cumplido |
| Validaciones visibles para el usuario | Cumplido |
| Panel de detalle o tarjeta ampliada | Cumplido |
| Búsqueda de información | Cumplido |
| Filtros de información | Cumplido |
| Clasificación u ordenamiento de información | Cumplido |
| Persistencia con `localStorage` | Cumplido |
| README con explicación del proyecto | Cumplido |

---

## Commits sugeridos del desarrollo

Durante el desarrollo se trabajó de manera progresiva con commits relacionados con:

```txt
Crear estructura inicial del proyecto
Agregar datos iniciales de bienestar estudiantil
Crear estructura base del dashboard
Agregar estilos base del dashboard
Mostrar servicios dinámicamente
Agregar detalle dinámico de servicios
Implementar búsqueda de servicios
Implementar filtros de servicios
Implementar ordenamiento de servicios
Actualizar documentación de avances del proyecto
Agregar validaciones del formulario
Implementar LocalStorage y renderizado de solicitudes
Revertir lógica redundante de solicitudes
Agregar ID único a solicitudes
Actualizar README final del proyecto
```

---

## Observaciones finales

El proyecto cumple con la finalidad académica planteada: construir un dashboard web interactivo para gestionar información del módulo de Bienestar Estudiantil.

Se aplicaron conceptos importantes de JavaScript intermedio, como manipulación del DOM, eventos, funciones, arreglos de objetos, métodos modernos de arreglos, validaciones y persistencia local.

Además, el trabajo fue organizado de manera colaborativa, distribuyendo responsabilidades entre los integrantes del grupo y utilizando GitHub como herramienta de control de versiones.

---

## Autoría

Proyecto académico desarrollado por el **Grupo 5**.

**Tema:** Bienestar Estudiantil  
**Módulo:** Dashboard web interactivo con JavaScript ES6

**Integrantes:**

- César
- Pablo
- José
- Arianna
- Jorge
