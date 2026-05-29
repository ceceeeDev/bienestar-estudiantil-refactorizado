import { studentWellnessServices } from "./data/seed.js";

import {
  getAvailableServicesCount,
  findServiceById,
  filterServices,
  sortServices,
} from "./services/module-service.js";

import {
  getRequestsFromStorage,
  addRequestToStorage,
} from "./services/storage.js";

import { createRequest } from "./models/request.js";

import { validateFormFields } from "./utils/validators.js";


// ==============================
// DOM SELECTORS
// ==============================
const DOM = {
  servicesContainer: document.querySelector("#servicesContainer"),
  searchInput: document.querySelector("#searchInput"),
  categoryFilter: document.querySelector("#categoryFilter"),
  priorityFilter: document.querySelector("#priorityFilter"),
  requestForm: document.querySelector("#requestForm"),
  requestsContainer: document.querySelector("#requestsContainer"),
  counterAvailable: document.querySelector("#counterAvailable"),
};


// ==============================
// STATE
// ==============================
let state = {
  services: [...studentWellnessServices],
  requests: getRequestsFromStorage(),
  filters: {
    searchText: "",
    category: "all",
    priority: "all",
    sort: "name",
  },
};


// ==============================
// INIT LOGS
// ==============================
console.log("Servicios:", state.services.length);
console.log("Solicitudes:", state.requests.length);
console.log(
  "Disponibles:",
  getAvailableServicesCount(state.services)
);