// ==============================
// Módulo de Renderizado (js/ui/render.js)
// ==============================

export const renderServices = (services) => {

    const container = document.querySelector("#servicesList");

    if (!container) return;

    if (services.length === 0) {

        container.innerHTML =
            `<p>No se encontraron servicios disponibles.</p>`;

        return;
    }

    container.innerHTML = services.map(service => `

        <div class="service-card">

            <h3>${service.name}</h3>

            <p>${service.description}</p>

            <div class="service-meta">

                <span class="badge">
                    ${service.category}
                </span>

                <span class="badge">
                    ${service.availability}
                </span>

                <span class="badge">
                    Prioridad: ${service.priority}
                </span>

            </div>

            <button
                class="card-button btn-details"
                data-id="${service.id}"
            >
                Ver detalles
            </button>

        </div>

    `).join('');
};

// ==============================
// Renderizar opciones del select
// ==============================

export const renderServiceOptions = (services) => {

    const select =
        document.querySelector("#serviceSelect");

    if (!select) return;

    select.innerHTML = `
        <option value="">
            Seleccione un servicio
        </option>

        ${services.map(service => `
            <option value="${service.name}">
                ${service.name}
            </option>
        `).join('')}
    `;
};

// ==============================
// Renderizar resumen
// ==============================

export const renderSummary = (
    total,
    available,
    requestsCount
) => {

    const totalServices =
        document.querySelector("#totalServices");

    const availableServices =
        document.querySelector("#availableServices");

    const totalRequests =
        document.querySelector("#totalRequests");

    if (totalServices) {
        totalServices.textContent = total;
    }

    if (availableServices) {
        availableServices.textContent = available;
    }

    if (totalRequests) {
        totalRequests.textContent = requestsCount;
    }
};

// ==============================
// Renderizar detalle del servicio
// ==============================

export const renderServiceDetail = (service) => {

    const container =
        document.querySelector("#serviceDetail");

    if (!container) return;

    if (!service) {

        container.innerHTML = `
            <p class="empty-message">
                Aún no has seleccionado ningún servicio.
            </p>
        `;

        return;
    }

    container.innerHTML = `

        <h3>${service.name}</h3>

        <p>
            <strong>Descripción:</strong>
            ${service.description}
        </p>

        <p>
            <strong>Categoría:</strong>
            ${service.category}
        </p>

        <p>
            <strong>Disponibilidad:</strong>
            ${service.availability}
        </p>

        <p>
            <strong>Prioridad:</strong>
            ${service.priority}
        </p>

        <p>
            <strong>Ubicación:</strong>
            ${service.location}
        </p>

        <p>
            <strong>Requisitos:</strong>
            ${service.requirements}
        </p>
    `;
};

// ==============================
// Renderizar solicitudes
// ==============================

export const renderRequests = (requests) => {

    const container =
        document.querySelector("#requestsList");

    if (!container) return;

    if (requests.length === 0) {

        container.innerHTML =
            `<p>No hay solicitudes registradas.</p>`;

        return;
    }

    container.innerHTML = requests.map(req => `

        <div class="request-card">

            <h3>${req.name}</h3>

            <p>
                <strong>Servicio:</strong>
                ${req.service}
            </p>

            <p>
                <strong>Correo:</strong>
                ${req.email}
            </p>

            <p>
                <strong>Motivo:</strong>
                ${req.reason}
            </p>

            <p>
                <strong>Fecha:</strong>
                ${req.date}
            </p>

        </div>

    `).join('');
};

// ==============================
// Mostrar errores del formulario
// ==============================

export const renderFormErrors = (errors) => {

    const fields = [
        "studentName",
        "studentEmail",
        "serviceSelect",
        "requestReason"
    ];

    fields.forEach(field => {

        const errorSpan =
            document.getElementById(`${field}Error`);

        if (errorSpan) {
            errorSpan.textContent =
                errors[field] || "";
        }
    });
};

// ==============================
// Mostrar mensaje del formulario
// ==============================

export const renderFormMessage = (
    message,
    isError = false
) => {

    const messageContainer =
        document.querySelector("#formMessage");

    if (!messageContainer) return;

    messageContainer.textContent = message;

    messageContainer.className =
        isError
            ? "form-message error"
            : "form-message success";

    setTimeout(() => {

        messageContainer.textContent = "";

        messageContainer.className =
            "form-message";

    }, 3000);
};