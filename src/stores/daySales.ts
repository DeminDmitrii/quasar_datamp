import {defineStore} from 'pinia';
import {ref} from "vue";

export const useDaySalesStore = defineStore('daySales', () => {
  const daySales = ref([]);

  return {daySales};
});


