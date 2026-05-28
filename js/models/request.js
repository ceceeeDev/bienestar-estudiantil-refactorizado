// ==============================
// Modelo de solicitud
// Proyecto: Bienestar Estudiantil
// ==============================

// Genera un identificador único para cada solicitud registrada
export const generateRequestId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  return `SOL-${timestamp}-${randomNumber}`;
};

// Crea el objeto final de una solicitud estudiantil
export const createRequest = ({ name, email, service, reason }) => {
  return {
    id: generateRequestId(),
    name,
    email,
    service,
    reason,
    date: new Date().toLocaleString("es-EC"),
  };
};