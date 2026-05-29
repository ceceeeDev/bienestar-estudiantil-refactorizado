// ==============================
// Servicio de lógica del módulo
// Proyecto: Bienestar Estudiantil
// Archivo: js/services/module-service.js
// ==============================

// Contar servicios disponibles
export const getAvailableServicesCount = (services) => {

  return services.filter(service => {
    return service.availability === "Disponible";
  }).length;
};

// Buscar servicio por ID
export const findServiceById = (services, serviceId) => {

  return services.find(service => {
    return service.id === serviceId;
  });
};

// Filtrar servicios
export const filterServices = (services, filters) => {

  const {
    searchText,
    category,
    priority
  } = filters;

  const normalizedSearch =
    searchText.toLowerCase().trim();

  return services.filter(service => {

    const matchesSearch =

      service.name
        .toLowerCase()
        .includes(normalizedSearch)

      ||

      service.description
        .toLowerCase()
        .includes(normalizedSearch)

      ||

      service.category
        .toLowerCase()
        .includes(normalizedSearch);

    const matchesCategory =

      category === "all"
      ||
      service.category === category;

    const matchesPriority =

      priority === "all"
      ||
      service.priority === priority;

    return (
      matchesSearch
      &&
      matchesCategory
      &&
      matchesPriority
    );
  });
};

// Ordenar servicios
export const sortServices = (services, sortType) => {

  const sortedServices = [...services];

  if (sortType === "name") {

    sortedServices.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  if (sortType === "priority") {

    const priorityOrder = {
      Alta: 1,
      Media: 2,
      Baja: 3
    };

    sortedServices.sort((a, b) => {
      return (
        priorityOrder[a.priority]
        -
        priorityOrder[b.priority]
      );
    });
  }

  return sortedServices;
};