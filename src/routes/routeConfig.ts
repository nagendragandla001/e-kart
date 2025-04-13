export const AppRoutes = [
  {
    path: "",
    name: "Login",
    component: () => import("../pages/login"),
  },
  {
    path: "home",
    name: "Home",
    index: true,
    component: () => import("../pages/home"),
  },
  {
    path: "account",
    name: "Account",
    component: () => import("../pages/account"),
  },
  {
    path: "login",
    name: "Login",
    index: true,
    component: () => import("../pages/login"),
  },
  {
    path: "dashboard",
    name: "Dashboard",
    component: () => import("../pages/dashboard"),
  },
  {
    path: "/thumbnails",
    name: "Thumbnails",
    component: () => import("../pages/thumbnails"),
  },
  {
    path: "cars",
    name: "Cars",
    component: () => import("../pages/cars"),
  },
  {
    path: "cars/:id",
    name: "CarDetails",
    component: () => import("../pages/cars/details"),
  },
  {
    path: "movies",
    name: "Movies",
    component: () => import("../pages/movies"),
  },
  {
    path: "movies/:id",
    name: "Movie",
    component: () => import("../pages/movies/details"),
  },
];
