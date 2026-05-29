// ==============================
// Archivo Principal (js/main.js)
// ==============================

import { studentWellnessServices } from "./data/seed.js";
import {
    getAvailableServicesCount,
    filterServices,
    sortServices
} from "./services/module-service.js";

import {
    getRequestsFromStorage,
    addRequestToStorage
} from "./services/storage.js";

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

// Estado global
let state = {
    services: [...studentWellnessServices],
    requests: getRequestsFromStorage(),
    filters: {
        searchText: "",
        category: "all",
        priority: "all",
        sort: "default"
    }
};

// ==============================
// Inicializar aplicación
// ==============================

function init() {

    renderServices(state.services);

    renderServiceOptions(state.services);

    renderSummary(
        state.services.length,
        getAvailableServicesCount(state.services),
        state.requests.length
    );

    renderRequests(state.requests);
}

// ==============================
// Eventos de filtros
// ==============================

document
    .querySelector(".controls-section")
    .addEventListener("input", () => {

        state.filters.searchText =
            document.querySelector("#searchInput").value;

        state.filters.category =
            document.querySelector("#categoryFilter").value;

        state.filters.priority =
            document.querySelector("#priorityFilter").value;

        state.filters.sort =
            document.querySelector("#sortSelect").value;

        let filtered = filterServices(
            state.services,
            state.filters
        );

        filtered = sortServices(
            filtered,
            state.filters.sort
        );

        renderServices(filtered);
    });

// ==============================
// Evento formulario
// ==============================

document
    .querySelector("#requestForm")
    .addEventListener("submit", (e) => {

        e.preventDefault();

        const data = {
            name: document.querySelector("#studentName").value.trim(),
            email: document.querySelector("#studentEmail").value.trim(),
            service: document.querySelector("#serviceSelect").value,
            reason: document.querySelector("#requestReason").value.trim()
        };

        const validation = validateFormFields(
            data.name,
            data.email,
            data.service,
            data.reason
        );

        if (!validation.isValid) {

            renderFormErrors({
                studentName: validation.errors.name,
                studentEmail: validation.errors.email,
                serviceSelect: validation.errors.service,
                requestReason: validation.errors.reason
            });

            return;
        }

        // Limpiar errores anteriores
        renderFormErrors({});

        const newRequest = createRequest(data);

        addRequestToStorage(newRequest);

        state.requests = getRequestsFromStorage();

        renderRequests(state.requests);

        renderSummary(
            state.services.length,
            getAvailableServicesCount(state.services),
            state.requests.length
        );

        renderFormMessage(
            "¡Solicitud registrada correctamente!"
        );

        e.target.reset();
    });

// ==============================
// Evento ver detalles
// ==============================

document
    .querySelector("#servicesList")
    .addEventListener("click", (e) => {

        if (e.target.classList.contains("btn-details")) {

            const id = parseInt(
                e.target.dataset.id
            );

            const service = state.services.find(
                s => s.id === id
            );

            renderServiceDetail(service);
        }
    });

// ==============================
// Cargar aplicación
// ==============================

document.addEventListener(
    "DOMContentLoaded",
    init
);