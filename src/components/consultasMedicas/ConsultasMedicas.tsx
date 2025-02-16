import { useEffect, useState } from "react"
import { useCerrarConsultas, useObtenerConsultas } from "../../hooks/fetchConsultasMedicas"
import ConsultasMedicasTabla from "./ConsultasMedicasTabla"
import FiltroConsultasMedicas from "./FiltroConsultasMedicas"
import { messageError, messageInfo, messageLoading, messageSuccess } from "../../utils/Message"
import { ConsultaMedicas } from "../../classes/ConsultasMedicas"
import DetalleConsultasMedicasModal from "./DetalleConsultasMedicasModal"
import useForm from "antd/lib/form/hooks/useForm"
import { useObtenerPacientes } from "../../hooks/fetchPacientes"
import { useObtenerMedicos } from "../../hooks/fetchMedicos"
import "./estilos/estilos.css"

const ConsultasMedicas = () => {

    const [form] = useForm()
    const [consultasSeleccionadas, setConsultasSeleccionadas] = useState([])
    const [detalleModal, setDetalleModal] = useState(false)
    const [consultaModal, setConsultaModal] = useState<ConsultaMedicas>()

    const { mutate: obtenerConsultas, isLoading: obteniendoConsultas, data: consultasObtenidas, error: errorAlObtenerConsultas } = useObtenerConsultas()
    const { mutate: cerrarConsultas, isLoading: cerrandoConsultas, data: consultasCerradas, error: errorAlCerrarConsultas } = useCerrarConsultas(consultasSeleccionadas)

    const { mutate: obtenerPacientes, data: pacientesObtenidos } = useObtenerPacientes()

    const { mutate: obtenerMedicos, data: medicosObtenidos } = useObtenerMedicos()

    const onCerrarConsultas = (consultasSeleccionadas: any) => {  
      setConsultasSeleccionadas(consultasSeleccionadas)
    }

    const onDetalleModal = (consultaModal: ConsultaMedicas) => {
      setConsultaModal(consultaModal)
      setDetalleModal(!detalleModal)
    }

    const filtrarConsultas = (data: any) => {
      console.log(data)
    }

    useEffect(() => { obtenerConsultas() }, [consultasCerradas])
    useEffect(() => { obtenerPacientes(), obtenerMedicos() }, [])

    /* CONSULTAS MEDICAS */

    useEffect(() => { if(consultasSeleccionadas.length > 0) { cerrarConsultas()  }}, [consultasSeleccionadas])
    useEffect(() => { if(cerrandoConsultas) {  messageLoading("Cerrando consultas medicas...", "consultas") } }, [cerrandoConsultas])
    useEffect(() => { if(errorAlCerrarConsultas) {  messageError(errorAlCerrarConsultas?.message, "consultas") } }, [errorAlCerrarConsultas])
    useEffect(() => { if(consultasCerradas) {  messageSuccess("Consultas cerradas!", "consultas") } }, [consultasCerradas])
    useEffect(() => { if(obteniendoConsultas) {  messageLoading("Obteniendo consultas medicas...", "consultas") } }, [obteniendoConsultas])
    useEffect(() => { if(consultasObtenidas?.data.length > 0) {  messageSuccess("Consultas obtenidas!", "consultas") 
             } else {  messageInfo("No se encontraron consultas Medicas!", "consultas") } }, 
    [obteniendoConsultas])
    useEffect(() => { if(errorAlObtenerConsultas) {  messageError(errorAlObtenerConsultas.message, "consultas") } }, [errorAlObtenerConsultas])
    
  return (
    <>
     {
       detalleModal && 
        <DetalleConsultasMedicasModal
          detalleModal={ detalleModal }
          consultaModal={ consultaModal }
          setDetalleModal={ setDetalleModal }
          form={ form }
        />
     }
     <FiltroConsultasMedicas
        pacientes={ pacientesObtenidos?.data }
        medicos={ medicosObtenidos?.data }
        filtrarConsultas={ filtrarConsultas }
        form={ form }
     />
     <ConsultasMedicasTabla 
        onDetalleModal={ onDetalleModal }
        loading={ obteniendoConsultas }
        dataSource={ consultasObtenidas?.data }
        cerrarConsultas={ onCerrarConsultas }
       />
    </>
  )
}

export default ConsultasMedicas