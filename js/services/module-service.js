// ==============================
// Servicio de lógica del módulo
// Proyecto: Bienestar Estudiantil
// ==============================

// Cuenta cuántos servicios están disponibles
export const getAvailableServicesCount = (services) => {
  return services.filter((service) => {
    return service.availability === "Disponible";
  }).length;
};

// Busca un servicio específico por su ID
export const findServiceById = (services, serviceId) => {
  return services.find((service) => {
    return service.id === serviceId;
  });
};

// Filtra los servicios por texto, categoría y prioridad
export const filterServices = (services, filters) => {
  const { searchText, category, priority } = filters;

  const normalizedSearchText = searchText.toLowerCase().trim();

  return services.filter((service) => {
    const serviceName = service.name.toLowerCase();
    const serviceCategory = service.category.toLowerCase();
    const serviceDescription = service.description.toLowerCase();

    const matchesSearch =
      serviceName.includes(normalizedSearchText) ||
      serviceCategory.includes(normalizedSearchText) ||
      serviceDescription.includes(normalizedSearchText);

    const matchesCategory =
      category === "all" || service.category === category;

    const matchesPriority =
      priority === "all" || service.priority === priority;

    return matchesSearch && matchesCategory && matchesPriority;
  });
};

// Ordena los servicios según el criterio seleccionado
export const sortServices = (services, sortType) => {
  const servicesCopy = [...services];

  if (sortType === "name") {
    servicesCopy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  if (sortType === "priority") {
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