import { ReactNode } from "react"
import { BrowserRouter, Route } from "react-router"
import Login from "../components/login/Login"
import { Routes } from "react-router"
import Routing from "./Routes"

 interface RoutingLoginProps {
    children? : ReactNode
 }
    
const RoutingLogin = (prop: RoutingLoginProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/*" element={ <Routing/> } /> 
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingLogin;
