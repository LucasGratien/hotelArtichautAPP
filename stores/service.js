import { defineStore } from "pinia";
import { ref } from "vue";

export const useServiceStore = defineStore("service", () => {
  const services = ref([]);

  const fetchServices = async () => {
    try {
      const res = await fetch("http://192.168.1.245:8000/api/service");
      services.value = await res.json();
    } catch (error) {
      console.error("❌ Erreur lors du chargement des services :", error);
    }
  };

  return { services, fetchServices };
});
