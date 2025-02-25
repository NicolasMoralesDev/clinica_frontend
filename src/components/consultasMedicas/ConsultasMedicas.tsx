import { useEffect, useState } from "react"
import { useCerrarConsultas, useObtenerConsultas } from "../../hooks/fetchConsultasMedicas"
import ConsultasMedicasTabla from "./ConsultasMedicasTabla"
import FiltroConsultasMedicas from "./FiltroConsultasMedicas"
import { messageError, messageInfo, messageLoading, messageSuccess } from "../../utils/Message"
import { ConsultaMedicas } from "../../classes/ConsultasMedicas"
import useForm from "antd/lib/form/hooks/useForm"
import { useObtenerPacientes } from "../../hooks/fetchPacientes"
import { useObtenerMedicos } from "../../hooks/fetchMedicos"
import { ConsultaMedicaFiltro } from "../../classes/ConsultaMedicaFiltro"
import { CATEGORIA, ESPECIALIDAD, menuKey, PAQUETE, SERVINV } from "../../constants/ClavesMenu"
import CategoriasModal from "../categorias/CategoriasModal"
import EspecialidadesModal from "../especialidades/EspecialidadesModal"
import PaqueteMedicoModal from "../paquetes/PaqueteMedicoModal"
import ServicioIndiviModal from "../servicioIndividual/ServicioIndiviModal"
import ConsultasMedicasModal from "./ConsultasMedicasModal"
import "./estilos/estilos.css"
import { useObtenerServIndividual } from "../../hooks/fetchServicioIndividual"

const ConsultasMedicas = () => {

    const [form] = useForm()
    const [visibleModales, setVisibleModales] = useState<Map<String, boolean>>(menuKey)

    const [visibleRegistrar, setVisibleRegistrar] = useState(false)

    const onMenuParametros = (key: String) => {
      setVisibleModales(prevMap => {
        const nuevoMap = new Map(prevMap)
        nuevoMap.set(key, !nuevoMap.get(key))
        return nuevoMap
      })
    }

    const [consultasSeleccionadas, setConsultasSeleccionadas] = useState([])
    const [consultasMedicasFiltro, setConsultasMedicasFiltro] = useState<ConsultaMedicaFiltro>(
      {
        medico: undefined,
        paciente: undefined,
        abierto: undefined      
      }
    )
    const [detalleModal, setDetalleModal] = useState(false)
    const [consultaModal, setConsultaModal] = useState<ConsultaMedicas>()

    const { mutate: obtenerConsultas, isLoading: obteniendoConsultas, data: consultasObtenidas, error: errorAlObtenerConsultas } = useObtenerConsultas(consultasMedicasFiltro)
    const { mutate: obtenerServicios, data: serviciosIndividuales } = useObtenerServIndividual()
    const { mutate: cerrarConsultas, isLoading: cerrandoConsultas, data: consultasCerradas, error: errorAlCerrarConsultas } = useCerrarConsultas(consultasSeleccionadas)

    const { mutate: obtenerPacientes, data: pacientesObtenidos } = useObtenerPacientes()

    const { mutate: obtenerMedicos, data: medicosObtenidos } = useObtenerMedicos()

    const onCerrarConsultas = (consultasSeleccionadas: any) => {  setConsultasSeleccionadas(consultasSeleccionadas) }

    const onDetalleModal = (consultaModal: ConsultaMedicas) => {
      setConsultaModal(consultaModal)
      setDetalleModal(!detalleModal)
    }

    const onRegister = () => { setVisibleRegistrar(!visibleRegistrar), console.log(visibleRegistrar);
     }

    const filtrarConsultas = (data: ConsultaMedicaFiltro) => { setConsultasMedicasFiltro(data) }

    useEffect(() => { obtenerConsultas() }, [consultasCerradas, consultasMedicasFiltro])
    useEffect(() => { obtenerPacientes()
                      obtenerMedicos() 
                      obtenerServicios()
                    }, [])

    /* CONSULTAS MÉDICAS */

    useEffect(() => { if(consultasSeleccionadas.length > 0) { cerrarConsultas()  }}, [consultasSeleccionadas])
    useEffect(() => { if(cerrandoConsultas) {  messageLoading("Cerrando consultas médicas...", "consultas") } }, [cerrandoConsultas])
    useEffect(() => { if(errorAlCerrarConsultas) {  messageError("Se a producido un error al obtener cerrar médicas", "consultas") } }, [errorAlCerrarConsultas])
    useEffect(() => { if(consultasCerradas) {  messageSuccess("Consultas cerradas!", "consultas") } }, [consultasCerradas])
    useEffect(() => { if(obteniendoConsultas) {  messageLoading("Obteniendo consultas médicas...", "consultas") } }, [obteniendoConsultas])
    useEffect(() => { if(consultasObtenidas?.data.length > 0) {  messageSuccess("Consultas obtenidas!", "consultas") 
             } else {  messageInfo("No se encontraron consultas Médicas!", "consultas") } }, 
    [obteniendoConsultas])
    useEffect(() => { if(errorAlObtenerConsultas) {  messageError("Se a producido un error al obtener consultas médicas", "consultas") } }, [errorAlObtenerConsultas])
    
  return (
    <>
    {
      visibleModales.get(ESPECIALIDAD) &&
      <EspecialidadesModal
        visible={ visibleModales.get(ESPECIALIDAD) || false }
        close={ onMenuParametros }
      />
    } 
    {
      visibleModales.get(CATEGORIA) &&
       <CategoriasModal 
        visible={ visibleModales.get(CATEGORIA) || false }
        close={ onMenuParametros }
       />
    }
    {
      visibleModales.get(SERVINV) &&
      <ServicioIndiviModal
       visible={ visibleModales.get(SERVINV) || false}
       close={ onMenuParametros }
      />
    }
    {
      visibleModales.get(PAQUETE) &&
       <PaqueteMedicoModal 
        visible={ visibleModales.get(PAQUETE) || false }
        close={ onMenuParametros }
       />
    }
     { detalleModal && 
      <ConsultasMedicasModal
        detalleModal={ detalleModal }
        consultaModal={ consultaModal }
        setDetalleModal={ setDetalleModal }
        servicios={ serviciosIndividuales?.data }
        form={ form }
        detalle
      />
     }
     { visibleRegistrar && 
      <ConsultasMedicasModal
        detalleModal={ visibleRegistrar }
        consultaModal={ consultaModal }
        servicios={ serviciosIndividuales?.data }
        setDetalleModal={ setVisibleRegistrar }
        form={ form }
      />    
     }
     <FiltroConsultasMedicas
        servicios={ serviciosIndividuales?.data }
        pacientes={ pacientesObtenidos?.data }
        medicos={ medicosObtenidos?.data }
        filtrarConsultas={ filtrarConsultas }
        form={ form }
     />
     <ConsultasMedicasTabla 
        onRegister={ onRegister }
        onDetalleModal={ onDetalleModal }
        onMenuParametros={ onMenuParametros }
        loading={ obteniendoConsultas }
        dataSource={ consultasObtenidas?.data }
        cerrarConsultas={ onCerrarConsultas }
       />
    </>
  )
}

export default ConsultasMedicas