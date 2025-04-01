export const AppRoutes = [
  {
    path: "",
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
    path: "dashboard",
    name: "Dashboard",
    component: () => import("../pages/dashboard"),
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
];
