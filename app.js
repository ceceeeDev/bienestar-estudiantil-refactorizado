// ==============================
// Variables globales y selectores
// Proyecto: Bienestar Estudiantil
// ==============================

const servicesList = document.getElementById("servicesList");
const totalServices = document.getElementById("totalServices");
const availableServices = document.getElementById("availableServices");
const serviceSelect = document.getElementById("serviceSelect");
const serviceDetail = document.getElementById("serviceDetail");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priorityFilter = document.getElementById("priorityFilter");
const sortSelect = document.getElementById("sortSelect");
const requestForm = document.getElementById("requestForm");
const formMessage = document.getElementById("formMessage");
const requestsList = document.getElementById("requestsList");
const totalRequests = document.getElementById("totalRequests");

// ==============================
// Funciones auxiliares
// ==============================

const getPriorityClass = (priority) => {
  if (priority === "Alta") {
    return "badge-priority-high";
  }

  if (priority === "Media") {
    return "badge-priority-medium";
  }

  return "badge-priority-low";
};

// ==============================
// Renderizado de servicios
// ==============================

const renderServices = (services) => {
  servicesList.innerHTML = "";

  const serviceCards = services.map((service) => {
    return `
      <article class="service-card">
        <h3>${service.name}</h3>

        <p>${service.description}</p>

        <div class="service-meta">
          <span class="badge">${service.category}</span>
          <span class="badge">${service.availability}</span>
          <span class="badge ${getPriorityClass(service.priority)}">
            Prioridad ${service.priority}
          </span>
        </div>

        <button class="card-button" data-id="${service.id}">
          Ver detalle
        </button>
      </article>
    `;
  });

  servicesList.innerHTML = serviceCards.join("");
};

// ==============================
// Renderizado del selector del formulario
// ==============================

const renderServiceOptions = (services) => {
  const serviceOptions = services.map((service) => {
    return `
      <option value="${service.name}">
        ${service.name}
      </option>
    `;
  });

  serviceSelect.innerHTML = `
    <option value="">Seleccione un servicio</option>
    ${serviceOptions.join("")}
  `;
};

// ==============================
// Actualización de resumen
// ==============================

const updateSummary = (services) => {
  const total = services.length;

  const available = services.filter((service) => {
    return service.availability === "Disponible";
  }).length;

  totalServices.textContent = total;
  availableServices.textContent = available;
};

// ==============================
// Detalle del servicio seleccionado
// ==============================

const renderServiceDetail = (service) => {
  serviceDetail.innerHTML = `
    <h3>${service.name}</h3>

    <p>
      <strong>Categoría:</strong> ${service.category}
    </p>

    <p>
      <strong>Disponibilidad:</strong> ${service.availability}
    </p>

    <p>
      <strong>Prioridad:</strong> ${service.priority}
    </p>

    <p>
      <strong>Horario:</strong> ${service.schedule}
    </p>

    <p>
      <strong>Ubicación:</strong> ${service.location}
    </p>

    <p>
      <strong>Descripción:</strong> ${service.description}
    </p>

    <p>
      <strong>Requisitos:</strong> ${service.requirements}
    </p>
  `;
};

const handleServiceDetail = (event) => {
  if (!event.target.classList.contains("card-button")) {
    return;
  }

  const serviceId = Number(event.target.dataset.id);

  const selectedService = studentWellnessServices.find((service) => {
    return service.id === serviceId;
  });

  if (!selectedService) {
    return;
  }

  renderServiceDetail(selectedService);
};

// ==============================
// Búsqueda de servicios
// ==============================
const handleSearchServices = () => {
  filterServices();
};

// ==============================
// Filtros de servicios
// ==============================

const filterServices = () => {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  const selectedPriority = priorityFilter.value;

  const filteredServices = studentWellnessServices.filter((service) => {
    const serviceName = service.name.toLowerCase();
    const serviceCategory = service.category.toLowerCase();
    const serviceDescription = service.description.toLowerCase();

    const matchesSearch =
      serviceName.includes(searchText) ||
      serviceCategory.includes(searchText) ||
      serviceDescription.includes(searchText);

    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;

    const matchesPriority =
      selectedPriority === "all" || service.priority === selectedPriority;

    return matchesSearch && matchesCategory && matchesPriority;
  });

  const sortedServices = sortServices(filteredServices);

  renderServices(sortedServices);
  updateSummary(sortedServices);
};

// ==============================
// Ordenamiento de servicios
// ==============================

const sortServices = (services) => {
  const selectedSort = sortSelect.value;

  const servicesCopy = [...services];

  if (selectedSort === "name") {
    servicesCopy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  if (selectedSort === "priority") {
    const priorityOrder = {
      Alta: 1,
      Media: 2,
      Baja: 3,
    };

    servicesCopy.sort((a, b) => {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  return servicesCopy;
};


// ==============================
// Validación de formulario (JOSE)
// ==============================


const validateForm = (event) => {
  event.preventDefault(); 

  const studentName = document.getElementById("studentName").value.trim();
  const studentEmail = document.getElementById("studentEmail").value.trim();
  const serviceSelectValue = document.getElementById("serviceSelect").value;
  const requestReason = document.getElementById("requestReason").value.trim();

  const nameError = document.getElementById("studentNameError");
  const emailError = document.getElementById("studentEmailError");
  const serviceError = document.getElementById("serviceSelectError");
  const reasonError = document.getElementById("requestReasonError");

  nameError.textContent = "";
  emailError.textContent = "";
  serviceError.textContent = "";
  reasonError.textContent = "";
  formMessage.className = "form-message";
  formMessage.textContent = "";

  let isValid = true;

  if (studentName === "") {
    nameError.textContent = "El nombre completo es obligatorio.";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (studentEmail === "") {
    emailError.textContent = "El correo es obligatorio.";
    isValid = false;
  } else if (!emailRegex.test(studentEmail)) {
    emailError.textContent = "Ingrese un formato de correo válido.";
    isValid = false;
  } else if (!studentEmail.includes(".edu.ec")) {
    emailError.textContent = "Debe ser un correo institucional .edu.ec).";
    isValid = false;
  }

  if (serviceSelectValue === "") {
    serviceError.textContent = "Debe seleccionar un servicio del listado.";
    isValid = false;
  }

  if (requestReason === "") {
    reasonError.textContent = "El motivo de la solicitud es obligatorio.";
    isValid = false;
  } else if (requestReason.length < 10) {
    reasonError.textContent = "El motivo es muy corto. Describa un poco más (min. 10 caracteres).";
    isValid = false;
  }

  if (isValid) {
    // Si todo es válido, llamamos a la función de Pablo para guardar
    saveRequest(studentName, studentEmail, serviceSelectValue, requestReason);
    
    // Mostramos mensaje de éxito
    formMessage.textContent = "¡Solicitud registrada con éxito!";
    formMessage.classList.remove("error");
    formMessage.classList.add("success");
    
    // Limpiamos los campos del formulario para la siguiente solicitud
    document.getElementById("requestForm").reset();
    
    return true; 
  } else {
    formMessage.textContent = "Por favor, completa correctamente los campos resaltados.";
    formMessage.classList.add("error");
    return false;
  }
};

// ==============================
// Lógica de LocalStorage (PABLO)
// ==============================

// Función para traer las solicitudes guardadas
// Si hay datos, los pasamos a JSON, si no, arrancamos con un arreglo vacío
const getRequestsFromStorage = () => {
  const requests = localStorage.getItem("wellnessRequests");
  return requests ? JSON.parse(requests) : [];
};

// Función para pintar las tarjetas en el HTML y actualizar el número de arriba
const renderRequests = () => {
  const requests = getRequestsFromStorage();
  
  // Actualizamos el contador del dashboard
  totalRequests.textContent = requests.length;

  // Validamos si la lista está vacía para mostrar un mensajito
  if (requests.length === 0) {
    requestsList.innerHTML = `<p class="empty-message">No hay solicitudes registradas aún.</p>`;
    return;
  }

  // Si hay datos, armamos el HTML usando la clase request-card que ya estaba en el CSS
  const requestCards = requests.map((req, index) => {
    return `
      <article class="request-card">
        <h3>Solicitud #${index + 1} - ${req.service}</h3>
        <p><strong>ID:</strong> ${req.id || "Sin ID"}</p>
        <p><strong>Estudiante:</strong> ${req.name} (${req.email})</p>
        <p><strong>Motivo:</strong> ${req.reason}</p>
        <div class="service-meta">
          <span class="badge">${req.date}</span>
        </div>
      </article>
    `;
  });



  // Lo inyectamos todo en el div correspondiente
  requestsList.innerHTML = requestCards.join("");
};

// Función para generar un ID único por cada solicitud
const generateRequestId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  return `SOL-${timestamp}-${randomNumber}`;
};

// Función para crear el objeto de la solicitud y guardarlo en el navegador
const saveRequest = (name, email, service, reason) => {
  const requests = getRequestsFromStorage();
  
  // Armamos el objeto con la fecha de hoy
  const newRequest = {
  id: generateRequestId(),
  name: name,
  email: email,
  service: service,
  reason: reason,
  date: new Date().toLocaleString("es-EC"),
  };

  // Lo metemos al arreglo y lo guardamos convertido a texto
  requests.push(newRequest);
  localStorage.setItem("wellnessRequests", JSON.stringify(requests));
  
  // Llamamos a la función de renderizar para que la nueva tarjeta aparezca de inmediato
  renderRequests();
};
// ==============================
// Eventos del DOM
// ==============================

servicesList.addEventListener("click", handleServiceDetail);
searchInput.addEventListener("input", handleSearchServices);
categoryFilter.addEventListener("change", filterServices);
priorityFilter.addEventListener("change", filterServices);
sortSelect.addEventListener("change", filterServices);
requestForm.addEventListener("submit", validateForm);

// ==============================
// Inicialización del proyecto
// ==============================

const initApp = () => {
  renderServices(studentWellnessServices);
  renderServiceOptions(studentWellnessServices);
  updateSummary(studentWellnessServices);
  renderRequests(); // Llamamos a la función de PABLO para cargar las solicitudes guardadas
};

initApp();