import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";

function AllRoutes() {
  return (
    <div>
      {/* <Routes>
        <Route />
      </Routes> */}

      <Dashboard />
    </div>
  );
}

export default AllRoutes;
