import { defineStore } from "pinia";

export const useNavigation = defineStore("navigation", {
  state: () => ({
    navigation: [
      { name: "Home", to: "/" },
      { name: "Request", to: "/request" },
      { name: "Guides", to: "/guides" },
      { name: "Team", to: "/team" },
    ],
  }),
  getters: {
    getNavigation(state) {
      return state.navigation;
    },
  },
  actions: {},
});
