import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Blanklayout = () => {
  return (
    <div className="authentications">
      <Switch>
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
      </Switch>
    </div>
  );
};
export default Blanklayout;
