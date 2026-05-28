// ==============================
// Servicio de almacenamiento local
// Proyecto: Bienestar Estudiantil
// ==============================

// Clave única que se usará para guardar las solicitudes en el navegador
const STORAGE_KEY = "wellnessRequests";

// Obtiene las solicitudes guardadas en localStorage
// Si no existen datos, devuelve un arreglo vacío
export const getRequestsFromStorage = () => {
  const requests = localStorage.getItem(STORAGE_KEY);

  return requests ? JSON.parse(requests) : [];
};

// Guarda un arreglo completo de solicitudes en localStorage
export const saveRequestsToStorage = (requests) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
};

// Agrega una nueva solicitud al arreglo existente y actualiza localStorage
export const addRequestToStorage = (request) => {
  const requests = getRequestsFromStorage();

  requests.push(request);
  saveRequestsToStorage(requests);

  return requests;
};