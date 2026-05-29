// ==============================
// Utilidades de validación
// Módulo: js/utils/validators.js
// ==============================

export const validateFormFields = (name, email, service, reason) => {

  const errors = {
    name: "",
    email: "",
    service: "",
    reason: "",
  };

  let isValid = true;

  // Validar nombre
  if (name === "") {
    errors.name = "El nombre completo es obligatorio.";
    isValid = false;
  }

  // Validar correo
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

  // Validar servicio
  if (service === "") {

    errors.service = "Debe seleccionar un servicio.";
    isValid = false;
  }

  // Validar motivo
  if (reason === "") {

    errors.reason = "El motivo es obligatorio.";
    isValid = false;

  } else if (reason.length < 10) {

    errors.reason =
      "El motivo debe tener al menos 10 caracteres.";

    isValid = false;
  }

  return {
    isValid,
    errors
  };
};