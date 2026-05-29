// ==============================
// Archivo Principal (js/main.js)
// ==============================

import { services } from "./data/seed.js";
import { getAvailableServicesCount, filterServices, sortServices } from "./services/module-service.js";
import { getRequestsFromStorage, addRequestToStorage } from "./services/storage.js";
import { createRequest } from "./models/request.js";
import { validateFormFields } from "./utils/validators.js";
import { 
    renderServices, 
    renderServiceOptions, 
    renderSummary, 
    renderRequests, 
    renderServiceDetail, 
    renderFormErrors, 
    renderFormMessage 
} from "./ui/render.js";

// Estado de la aplicación
let state = {
    services: [...services],
    requests: getRequestsFromStorage(),
    filters: { searchText: "", category: "all", priority: "all", sort: "default" }
};

// Inicialización
function init() {
    renderServices(state.services);
    renderServiceOptions(state.services);
    renderSummary(state.services.length, getAvailableServicesCount(state.services), state.requests.length);
    renderRequests(state.requests);
}

// Escuchador de filtros (Búsqueda, categorías, prioridad, orden)
document.querySelector(".controls-section").addEventListener("input", (e) => {
    state.filters.searchText = document.querySelector("#searchInput").value;
    state.filters.category = document.querySelector("#categoryFilter").value;
    state.filters.priority = document.querySelector("#priorityFilter").value;
    state.filters.sort = document.querySelector("#sortSelect").value;
    
    let filtered = filterServices(state.services, state.filters);
    filtered = sortServices(filtered, state.filters.sort);
    renderServices(filtered);
});

// Escuchador del formulario de solicitud
document.querySelector("#requestForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        name: formData.get("studentName"),
        email: formData.get("studentEmail"),
        service: formData.get("serviceSelect"),
        reason: formData.get("requestReason")
    };
    
    const errors = validateFormFields(data);
    if (Object.keys(errors).length > 0) {
        renderFormErrors(errors);
    } else {
        const newReq = createRequest(data);
        addRequestToStorage(newReq);
        state.requests = getRequestsFromStorage();
        renderRequests(state.requests);
        renderSummary(state.services.length, getAvailableServicesCount(state.services), state.requests.length);
        renderFormMessage("¡Solicitud registrada correctamente!");
        e.target.reset();
    }
});

// Evento para ver detalles de servicios
document.querySelector("#servicesList").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-details")) {
        const id = parseInt(e.target.getAttribute("data-id"));
        const service = state.services.find(s => s.id === id);
        renderServiceDetail(service);
    }
});

document.addEventListener("DOMContentLoaded", init);