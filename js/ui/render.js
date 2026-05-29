// ==============================
// Módulo de Renderizado (js/ui/render.js)
// ==============================

export const renderServices = (services) => {
    const container = document.querySelector("#servicesList");
    if (!container) return;

    if (services.length === 0) {
        container.innerHTML = `<p>No se encontraron servicios disponibles.</p>`;
        return;
    }

    container.innerHTML = services.map(service => `
        <div class="service-card">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <div class="badges">
                <span class="badge">${service.category}</span>
                <span class="badge ${service.availability === 'Disponible' ? 'available' : 'unavailable'}">${service.availability}</span>
                <span class="badge">Prioridad: ${service.priority}</span>
            </div>
            <button class="btn-details" data-id="${service.id}">Ver detalles</button>
        </div>
    `).join('');
};

export const renderServiceOptions = (services) => {
    const select = document.querySelector("#serviceSelect");
    if (!select) return;

    select.innerHTML = `
        <option value="">Seleccione un servicio</option>
        ${services.map(s => `<option value="${s.name}">${s.name}</option>`).join('')}
    `;
};

export const renderSummary = (total, available, requestsCount) => {
    const elTotal = document.querySelector("#totalServices");
    const elAvailable = document.querySelector("#availableServices");
    const elRequests = document.querySelector("#totalRequests");

    if (elTotal) elTotal.textContent = total;
    if (elAvailable) elAvailable.textContent = available;
    if (elRequests) elRequests.textContent = requestsCount;
};

export const renderServiceDetail = (service) => {
    const container = document.querySelector("#serviceDetail");
    if (!container) return;

    if (!service) {
        container.innerHTML = `<p class="empty-message">Aún no has seleccionado ningún servicio.</p>`;
        return;
    }

    container.innerHTML = `
        <h3>${service.name}</h3>
        <p><strong>Descripción:</strong> ${service.description}</p>
        <p><strong>Prioridad:</strong> ${service.priority}</p>
        <p><strong>Ubicación:</strong> ${service.location}</p>
        <p><strong>Requisitos:</strong> ${service.requirements}</p>
    `;
};

export const renderRequests = (requests) => {
    const container = document.querySelector("#requestsList");
    if (!container) return;

    if (requests.length === 0) {
        container.innerHTML = `<p>No hay solicitudes registradas.</p>`;
        return;
    }

    container.innerHTML = requests.map(req => `
        <div class="request-item">
            <p><strong>${req.name}</strong> - ${req.service}</p>
            <p><small>Fecha: ${req.date}</small></p>
        </div>
    `).join('');
};

export const renderFormErrors = (errors) => {
    const fields = ['studentName', 'studentEmail', 'serviceSelect', 'requestReason'];
    fields.forEach(field => {
        const errorSpan = document.getElementById(`${field}Error`);
        if (errorSpan) errorSpan.textContent = errors[field] || '';
    });
};

export const renderFormMessage = (message, isError = false) => {
    const msgDiv = document.querySelector("#formMessage");
    if (!msgDiv) return;

    msgDiv.textContent = message;
    msgDiv.style.backgroundColor = isError ? '#ffe6e6' : '#e6ffe6';
    msgDiv.style.display = 'block';

    setTimeout(() => {
        msgDiv.style.display = 'none';
    }, 3000);
};