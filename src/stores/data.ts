import { defineStore } from 'pinia';

type DataStoreState = {
  value: number;
};

export const useDataStore = defineStore({
  id: 'data',
  state: (): DataStoreState => ({
    value: Math.random(),
  }),
  actions: {
    randomize() {
      this.value = Math.random();
    },
  },
});

export default {};
