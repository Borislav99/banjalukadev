import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuth }) => {
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  return children;
};
// const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
// const location = useLocation();
// return (
//   <Route
//     {...rest}
//     render={(props) => {
//       if (isAuth) {
//         return <Component />;
// } else {
//   return (
//     <Navigate to={{ pathname: "/sr" }} />
// <Navigate to={{ pathname: "/sr", state: { from: location } }} />
//           );
//         }
//       }}
//     ></Route>
//   );
// };
export default ProtectedRoute;
