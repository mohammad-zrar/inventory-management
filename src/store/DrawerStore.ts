import { defineStore } from "pinia";
type initialState = {
  isDrawerOpen: boolean;
};
export const useDrawerStore = defineStore("drawer", {
  state: (): initialState => {
    return {
      isDrawerOpen: true,
    };
  },
  actions: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
});
