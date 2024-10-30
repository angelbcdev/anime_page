import AnimeView from "../pages/AnimeView";
import Home from "../pages/Home";
import ViewCategory from "../pages/ViewCategory";

export const myRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/anime/:nameAnime",
    element: AnimeView,
  },
  {
    path: "/ver-category/:type",
    element: ViewCategory,
  },
];
