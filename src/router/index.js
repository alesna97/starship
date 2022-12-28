import StarshipViewVue from "@/views/StarshipView.vue";
import DetailViewVue from "@/views/DetailView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "starship",
      component: StarshipViewVue,
    },
    {
      path: "/:id",
      name: "detail",
      component: DetailViewVue,
    },
  ],
});

export default router;
