import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
import Details from "../screens/Details";
import Home from "../screens/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </NavRoutes>
    </BrowserRouter>
  );
};

export default Routes;
