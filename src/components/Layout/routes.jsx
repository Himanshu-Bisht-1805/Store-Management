import Material from "../Materials";

export const routes = [
  {
    path: "/header/*",
    Element: IconEvents,
  },
  {
    path: "/",
    Element: Dashboard,
  },
  {
    path: "/material/*",
    Element: Material,
  },
];

export const menus = [
  {
    key: "/",
    name: "Dashboard",
    child: [],
  },
  {
    key: "material",
    name: "Material",
    child: [],
  },
];
