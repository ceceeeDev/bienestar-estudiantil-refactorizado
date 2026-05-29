# Proyecto: Bienestar Estudiantil - Actividad 2

## Objetivo de la refactorización

El objetivo principal de esta actividad fue transformar el proyecto original desarrollado en un único archivo JavaScript (`app.js`) hacia una arquitectura modular basada en ES6 Modules, separando las responsabilidades del sistema en distintos módulos reutilizables y mantenibles.

Con esta refactorización se buscó:

* mejorar la organización del código,
* facilitar el trabajo colaborativo,
* separar lógica, renderizado y almacenamiento,
* aplicar `import` y `export`,
* reducir la dependencia de un único archivo principal,
* mejorar la escalabilidad y mantenibilidad del sistema.

---

# Estructura anterior del proyecto

La versión inicial del sistema trabajaba principalmente con:

```plaintext
├── index.html
├── styles.css
├── data.js
└── app.js
```

Toda la lógica del sistema se encontraba centralizada en `app.js`, incluyendo:

* renderizado de servicios,
* validaciones,
* manejo del formulario,
* filtros,
* almacenamiento local,
* eventos del DOM.

---

# Nueva estructura modular

```plaintext
├── index.html
├── styles.css
└── js
    ├── main.js
    ├── data
    │   └── seed.js
    ├── models
    │   └── request.js
    ├── services
    │   ├── module-service.js
    │   └── storage.js
    ├── ui
    │   └── render.js
    └── utils
        └── validators.js
```

---

# Explicación de carpetas y módulos

## `js/data/seed.js`

Contiene los datos iniciales de los servicios de bienestar estudiantil.

Responsabilidades:

* almacenar servicios iniciales,
* exportar datos reutilizables,
* centralizar información base del sistema.

---

## `js/services/module-service.js`

Contiene la lógica principal relacionada con los servicios.

Responsabilidades:

* contar servicios disponibles,
* buscar servicios por ID,
* filtrar servicios,
* ordenar servicios,
* manejar lógica de procesamiento de datos.

---

## `js/services/storage.js`

Gestiona el almacenamiento local mediante `localStorage`.

Responsabilidades:

* obtener solicitudes almacenadas,
* guardar solicitudes,
* agregar nuevas solicitudes al almacenamiento local.

---

## `js/models/request.js`

Modelo encargado de construir solicitudes estudiantiles.

Responsabilidades:

* generar IDs únicos,
* crear objetos de solicitud,
* asignar fecha de registro.

---

## `js/utils/validators.js`

Módulo de validaciones del formulario.

Responsabilidades:

* validar nombre obligatorio,
* validar correo institucional,
* validar formato `.edu.ec`,
* validar selección de servicio,
* validar longitud mínima del motivo,
* devolver errores específicos por campo.

---

## `js/ui/render.js`

Módulo encargado del renderizado visual del sistema.

Responsabilidades:

* renderizar tarjetas de servicios,
* renderizar opciones del select,
* renderizar resumen del dashboard,
* renderizar solicitudes registradas,
* renderizar detalles del servicio,
* mostrar errores y mensajes del formulario.

---

## `js/main.js`

Archivo principal encargado de integrar todos los módulos.

Responsabilidades:

* importar módulos ES6,
* manejar el estado global,
* conectar eventos del DOM,
* inicializar la aplicación,
* coordinar renderizados y validaciones.

---

# Uso de módulos ES6

El proyecto utiliza módulos ES6 mediante:

```js
import { ... } from "./archivo.js";
export const ...
```

Esto permitió:

* dividir responsabilidades,
* reutilizar funciones,
* mantener un código más limpio y escalable,
* mejorar el trabajo colaborativo.

---

# Integración final

Se actualizó el archivo `index.html` para reemplazar:

```html
<script src="data.js"></script>
<script src="app.js"></script>
```

por:

```html
<script type="module" src="js/main.js"></script>
```

permitiendo cargar correctamente la arquitectura modular.

---

# Pruebas realizadas

Se realizaron pruebas funcionales sobre:

* carga dinámica de servicios,
* filtros de búsqueda,
* filtros por categoría y prioridad,
* ordenamiento de servicios,
* visualización de detalles,
* validación de formularios,
* registro de solicitudes,
* almacenamiento en `localStorage`,
* renderizado dinámico de datos.

---

# Aportes de cada integrante

## José

Encargado del módulo:

```plaintext
js/utils/validators.js
```

Responsabilidades desarrolladas:

* validación de nombre,
* validación de correo,
* validación institucional `.edu.ec`,
* validación de selección de servicio,
* validación del motivo,
* generación de mensajes de error.

---

## Pablo

Encargado del módulo:

```plaintext
js/ui/render.js
```

Responsabilidades desarrolladas:

* renderizado de servicios,
* renderizado del dashboard,
* renderizado del detalle de servicios,
* renderizado de solicitudes,
* visualización de errores y mensajes.

---

## Arianna

Encargada de la primera parte de `main.js`.

Responsabilidades desarrolladas:

* integración inicial de módulos,
* importaciones ES6,
* definición de selectores principales,
* configuración del estado inicial de la aplicación.

---

## Jorge

Encargado de:

* integración final del sistema,
* conexión de eventos del DOM,
* inicialización de la aplicación,
* integración de `main.js`,
* actualización de `index.html`,
* pruebas funcionales finales,
* corrección de integración modular,
* documentación técnica,
* elaboración del README e informe.

---

# Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript ES6
* LocalStorage
* ES Modules
* Live Server

---

# Resultado final

El sistema quedó completamente modularizado y funcional, permitiendo una mejor organización del código, mayor mantenibilidad y una estructura adecuada para trabajo colaborativo en JavaScript moderno.
