import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:id",
    name: "pokemonId",
    component: () =>
      import(/* webpackChunkName: "pokemon" */ "../views/PokemonView.vue"),
    props: (route) => {
      return {
        id: route.params.id,
      };
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
