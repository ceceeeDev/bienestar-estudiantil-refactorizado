// ==============================
// Utilidades de validación
// Módulo: js/utils/validators.js
// ==============================

export const validateFormFields = (name, email, service, reason) => {
  // Objeto para almacenar los mensajes de error específicos
  const errors = {
    name: "",
    email: "",
    service: "",
    reason: "",
  };

  let isValid = true;

  [span_1](start_span)// 1. Validar nombre
  if (name === "") {
    errors.name = "El nombre completo es obligatorio.";
    isValid = false;
  }

  [span_2](start_span)// 2. Validar correo institucional
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email === "") {
    errors.email = "El correo es obligatorio.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    errors.email = "Ingrese un formato de correo válido.";
    isValid = false;
  } else if (!email.includes(".edu.ec")) {
    errors.email = "Debe ser un correo institucional (.edu.ec).";
    isValid = false;
  }

  [span_3](start_span)// 3. Validar servicio seleccionado
  if (service === "") {
    errors.service = "Debe seleccionar un servicio del listado.";
    isValid = false;
  }

  [span_4](start_span)// 4. Validar motivo
  if (reason === "") {
    errors.reason = "El motivo de la solicitud es obligatorio.";
    isValid = false;
  } else if (reason.length < 10) {
    errors.reason = "Amplie el motivo, debe tener al menos 10 caracteres.";
    isValid = false;
  }

  // Retornamos un objeto con el estado general de validación y los errores detallados
  return {
    isValid,
    errors,
  };
};