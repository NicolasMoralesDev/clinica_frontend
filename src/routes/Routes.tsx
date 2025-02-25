import { Route, Routes } from "react-router"
import App from "../App"
import ConsultasMedicas from "../components/consultasMedicas/ConsultasMedicas"
import Page404 from "../components/commons/Page404"

const Routing = () => {
  return (
    <>
        <App>
            <Routes>
             <Route>
                <Route path="/" element={ <ConsultasMedicas/> } />
                <Route path="*" element={ <Page404/> }/>
              </Route>
            </Routes>
        </App>
        </>
  )
}

export default Routing