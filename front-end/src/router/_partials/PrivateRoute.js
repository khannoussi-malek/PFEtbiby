// Inspiration for this component from: https://react-router.now.sh/auth-workflow
// Routes user to the component if context shows them as being logged in
// Otherwise, routes them to the login page

import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

export const PrivateRoute = ({ isAuth, ...otherProps }) => {
  const { pathname } = useLocation();

  if (isAuth) {
    return <Route {...otherProps} />;
  }

  return (
    <Redirect
      to={{
        pathname: "/login",
        search: pathname ? `?redirect=${pathname}` : null,
      }}
    />
  );
};

// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated: isAuthenticated,
//   ...rest
// }) => {
//   const { pathname } = useLocation();
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               search: pathname ? `?redirect=${pathname}` : null,
//             }}
//           />
//         )
//       }
//     />
//   );
// };

export default PrivateRoute;
