import React from "react";
import { Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { configureStore } from "./redux/Store";

import indexRoutes from "./routes/";
import { PrivateRoute } from "./routes/PrivateRoutes";
import "./assets/scss/style.scss";

function App() {
  const history = createBrowserHistory();

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
