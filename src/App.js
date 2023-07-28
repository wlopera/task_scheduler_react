import React, { useEffect } from "react";
import { Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { configureStore } from "./redux/Store";

import indexRoutes from "./routes/";
import { PrivateRoute } from "./routes/PrivateRoutes";
import "./assets/scss/style.scss";

function App() {
  const history = createBrowserHistory();

  useEffect(() => {
    const cleanLocalStorage = () => {
      localStorage.clear(); // Limpiar el almacenamiento local del cliente
    };

    // Limpiar el almacenamiento local al cargar la página
    cleanLocalStorage(); 

    // Agregar el evento beforeunload para limpiar el almacenamiento local al salir de la página
    window.addEventListener("beforeunload", cleanLocalStorage);

    return () => {
      // Remover el evento beforeunload al desmontar el componente
      window.removeEventListener("beforeunload", cleanLocalStorage);
    };
  }, []);

  return (
    <Provider store={configureStore()}>
      <Router history={history}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <PrivateRoute
                path={prop.path}
                key={key}
                component={prop.component}
              />
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
