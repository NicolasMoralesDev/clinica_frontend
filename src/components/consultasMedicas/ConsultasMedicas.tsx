import { useEffect } from "react"
import { useObtenerConsultas } from "../../hooks/fetchConsultasMedicas"
import ConsultasMedicasTabla from "./ConsultasMedicasTabla"
import FiltroConsultasMedicas from "./FiltroConsultasMedicas"
import { messageError, messageLoading, messageSuccess } from "../../utils/Message"
import "./estilos/estilos.css"

const ConsultasMedicas = () => {

    const { mutate: obtenerConsultas, isLoading: obteniendoConsultas, data: consultasObtenidas, error: errorAlObtenerConsultas } = useObtenerConsultas()
       useEffect(() => { obtenerConsultas() }, [])

    useEffect(() => { if(obteniendoConsultas) {  messageLoading("Obteniendo consultas medicas...", "consultas", obteniendoConsultas) } }, [obteniendoConsultas])
    
    useEffect(() => { if(obteniendoConsultas) {  messageSuccess("Consultas obtenidas!", "consultas") } }, [obteniendoConsultas])
    
    useEffect(() => { if(errorAlObtenerConsultas) {  messageError(errorAlObtenerConsultas.message, "consultas") } }, [errorAlObtenerConsultas])
    
  return (
    <>
     <FiltroConsultasMedicas/>
     <ConsultasMedicasTabla 
        loading={ obteniendoConsultas }
        dataSource={ consultasObtenidas?.data }
       />
    </>
  )
}

export default ConsultasMedicas