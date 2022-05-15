import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../components/TheHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
    meta: {
      title: "Home | The Dopeheads",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/AboutUs.vue"),
    meta: {
      title: "About | The Dopeheads",
    },
  },
  {
    path: "/employees",
    name: "Employees",
    component: () => import("../components/OurEmployees.vue"),
    meta: {
      title: "Employees | The Dopeheads",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../components/404Page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  }
  next();
});

export default router;
