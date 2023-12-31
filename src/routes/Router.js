import { lazy } from "react";
import AuthRoutes from "./AuthRoutes";

const Home = lazy(() =>
  import("../components/templates/Home")
);

const TemplateOrders = lazy(() =>
  import("../components/templates/templateOrders/TemplateOrders")
);

const TemplateProcess = lazy(() =>
  import("../components/templates/templateProcess/TemplateProcess")
);

const TemplateChains = lazy(() =>
  import("../components/templates/templateChains/TemplateChains")
);

const History = lazy(() =>
import("../components/templates/templateProcess/history/History")
);

const TemplateAdmin = lazy(() =>
  import("../components/templates/templateAdmin/TemplateAdmin")
);

const auths = [].concat(AuthRoutes);

var ThemeRoutes = [
  {
    path: "/home",
    name: "Inicio",
    icon: "play",
    component: Home,
  },
  {
    navlabel: true,
    name: "Configuración",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/configuration",
    name: "Parametrización",
    state: "dashboardpages",
    icon: "layers",
    child: [
      {
        path: "/configuration/orders",
        name: "Ordenes y Tareas",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: TemplateOrders,
      },
      {
        path: "/configuration/chains",
        name: "Cadenas de Trabajos",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: TemplateChains,
      },
    ],
  },
  {
    navlabel: true,
    name: "APPS",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    path: "/process",
    name: "Procesar",
    icon: "play",
    component: TemplateProcess,
  },
  {
    path: "/history",
    name: "Historial",
    icon: "clock",
    component: History,
    updateHistory: true
  },
  // {
  //   path: "/authentication",
  //   name: "Authentication",
  //   state: "openAuthentication",
  //   icon: "alert-triangle",
  //   child: auths,
  //   collapse: true,
  // },
  {
    navlabel: true,
    name: "ADMINISTRACION",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    path: "/admin",
    name: "Base de datos",
    icon: "play",
    component: TemplateAdmin,
  },
  {
    path: "/",
    pathTo: "/home",
    name: "Inicio",
    redirect: true,
  },
];
export default ThemeRoutes;
