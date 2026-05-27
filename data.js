// Datos iniciales del módulo de Bienestar Estudiantil
// Este arreglo será usado para mostrar los servicios disponibles en el dashboard

const studentWellnessServices = [
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
  },
  {
    id: 2,
    name: "Apoyo académico",
    category: "Rendimiento académico",
    availability: "Disponible",
    priority: "Media",
    schedule: "Lunes, miércoles y viernes, 09:00 - 15:00",
    location: "Área de asesorías académicas",
    description:
      "Espacio de apoyo para estudiantes con dificultades en determinadas asignaturas, hábitos de estudio o bajo rendimiento académico.",
    requirements:
      "Indicar la materia en la que necesita apoyo y describir brevemente la dificultad presentada.",
  },
  {
    id: 3,
    name: "Asesoría vocacional",
    category: "Orientación estudiantil",
    availability: "Disponible",
    priority: "Media",
    schedule: "Martes y jueves, 10:00 - 14:00",
    location: "Oficina de orientación vocacional",
    description:
      "Servicio dirigido a estudiantes que necesitan orientación sobre su carrera, intereses profesionales o toma de decisiones académicas.",
    requirements:
      "Completar el formulario de solicitud e indicar el motivo principal de la asesoría.",
  },
  {
    id: 4,
    name: "Atención médica básica",
    category: "Salud física",
    availability: "Disponible",
    priority: "Alta",
    schedule: "Lunes a viernes, 08:00 - 13:00",
    location: "Consultorio médico universitario",
    description:
      "Atención inicial para molestias generales, control de signos vitales, orientación preventiva y derivación médica si el caso lo requiere.",
    requirements:
      "Presentar carnet estudiantil e informar los síntomas principales al momento de solicitar la atención.",
  },
  {
    id: 5,
    name: "Actividades deportivas",
    category: "Recreación y deporte",
    availability: "Disponible",
    priority: "Baja",
    schedule: "Lunes a viernes, 15:00 - 18:00",
    location: "Cancha y áreas deportivas",
    description:
      "Programas deportivos y recreativos para fomentar la actividad física, la integración estudiantil y hábitos de vida saludables.",
    requirements:
      "Registrarse en la actividad de interés y asistir con ropa deportiva adecuada.",
  },
  {
    id: 6,
    name: "Programas de inclusión",
    category: "Inclusión y acompañamiento",
    availability: "Disponible",
    priority: "Media",
    schedule: "Miércoles y viernes, 09:00 - 12:00",
    location: "Unidad de inclusión universitaria",
    description:
      "Servicio de acompañamiento para promover la igualdad de oportunidades, accesibilidad y participación de todos los estudiantes.",
    requirements:
      "Describir la necesidad de apoyo o adaptación requerida en el formulario de solicitud.",
  },
  {
    id: 7,
    name: "Becas y ayudas estudiantiles",
    category: "Apoyo económico",
    availability: "Cupos limitados",
    priority: "Alta",
    schedule: "Lunes a jueves, 08:30 - 14:30",
    location: "Oficina de ayudas estudiantiles",
    description:
      "Información y orientación sobre becas, ayudas económicas, requisitos de postulación y seguimiento de solicitudes estudiantiles.",
    requirements:
      "Presentar información académica, situación socioeconómica y documentación solicitada por la institución.",
  },
  {
    id: 8,
    name: "Talleres de bienestar emocional",
    category: "Salud mental",
    availability: "Disponible",
    priority: "Media",
    schedule: "Viernes, 13:00 - 16:00",
    location: "Auditorio estudiantil",
    description:
      "Talleres grupales sobre manejo del estrés, autoestima, inteligencia emocional, comunicación y bienestar personal.",
    requirements:
      "Inscribirse previamente y asistir puntualmente al taller seleccionado.",
  },
];