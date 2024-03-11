import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  getters: {
    test: () => "Hello World!!",
  },
});
