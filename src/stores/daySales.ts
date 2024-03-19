import {defineStore} from "pinia";
import {ref} from "vue";

export const useDaySalesStore = defineStore('daySalesStore', () => {
  const daySalesData = ref([]);

  return {daySalesData};
});


