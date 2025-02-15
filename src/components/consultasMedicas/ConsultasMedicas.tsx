import { useEffect, useState } from "react"
import { useCerrarConsultas, useObtenerConsultas } from "../../hooks/fetchConsultasMedicas"
import ConsultasMedicasTabla from "./ConsultasMedicasTabla"
import FiltroConsultasMedicas from "./FiltroConsultasMedicas"
import { messageError, messageInfo, messageLoading, messageSuccess } from "../../utils/Message"
import "./estilos/estilos.css"

const ConsultasMedicas = () => {

    const [consultasSeleccionadas, setConsultasSeleccionadas] = useState([])

    const { mutate: obtenerConsultas, isLoading: obteniendoConsultas, data: consultasObtenidas, error: errorAlObtenerConsultas } = useObtenerConsultas()

    const { mutate: cerrarConsultas, isLoading: cerrandoConsultas, data: consultasCerradas, error: errorAlCerrarConsultas } = useCerrarConsultas(consultasSeleccionadas)

    const onCerrarConsultas = (consultasSeleccionadas) => {  
      setConsultasSeleccionadas(consultasSeleccionadas)
    }

    useEffect(() => { obtenerConsultas() }, [consultasCerradas])

    useEffect(() => { if(consultasSeleccionadas.length > 0) { cerrarConsultas()  }}, [consultasSeleccionadas])

    useEffect(() => { if(cerrandoConsultas) {  messageLoading("Cerrando consultas medicas...", "consultas", cerrandoConsultas) } }, [cerrandoConsultas])

    useEffect(() => { if(errorAlCerrarConsultas) {  messageError(errorAlCerrarConsultas?.message, "consultas") } }, [errorAlCerrarConsultas])
  
    useEffect(() => { if(consultasCerradas) {  messageSuccess("Consultas cerradas!", "consultas") } }, [consultasCerradas])
      
        
    useEffect(() => { if(obteniendoConsultas) {  messageLoading("Obteniendo consultas medicas...", "consultas") } }, [obteniendoConsultas])
    
    useEffect(() => { if(consultasObtenidas?.data.length > 0) {  messageSuccess("Consultas obtenidas!", "consultas") 
             } else {  messageInfo("No se encontraron consultas Medicas!", "consultas") } }, 
    [obteniendoConsultas])
    
    useEffect(() => { if(errorAlObtenerConsultas) {  messageError(errorAlObtenerConsultas.message, "consultas") } }, [errorAlObtenerConsultas])
    
  return (
    <>
     <FiltroConsultasMedicas/>
     <ConsultasMedicasTabla 
        loading={ obteniendoConsultas }
        dataSource={ consultasObtenidas?.data }
        cerrarConsultas={ onCerrarConsultas }
       />
    </>
  )
}

export default ConsultasMedicas