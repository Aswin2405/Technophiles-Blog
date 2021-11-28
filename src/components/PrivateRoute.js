import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, role,...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        role === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;