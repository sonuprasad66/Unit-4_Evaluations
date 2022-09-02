import {useContext} from "react";
import {Navigate} from "react-router-dom";
import {AppContext} from "../Context/AppContextProvider";

function PrivateRoute({children}) {
  const {isAuth} = useContext(AppContext);

  if (isAuth.isAuth == false) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return children;
  }
}

export default PrivateRoute;
