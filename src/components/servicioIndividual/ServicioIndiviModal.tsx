import { useEffect, useState } from "react"
import { SERVINV } from "../../constants/ClavesMenu"
import { messageLoading, messageSuccess } from "../../utils/Message"
import ConfirmationModal from "../modal/ConfirmationModal"
import ServicioIndiviRegistrar from "./ServicioIndiviRegistrar"
import { useObtenerServIndividual, useRegistrarServIndividual } from "../../hooks/fetchServicioIndividual"
import { useObtenerCategorias } from "../../hooks/fetchCategoria"
import { ServicioIndividual } from "../../classes/ServicioIndividual"
import ServicioIndividualTabla from "./ServicioIndividualTabla"

interface ServicioIndiviProp {
    visible: boolean
    close: (key: string) => void
}

const ServicioIndiviModal = ({ visible, close }: ServicioIndiviProp) => {

    const [servicioIndivi, setServicioIndivi] = useState<ServicioIndividual>()

    const { mutate: registrarServIndivi, isLoading: registrandoServIndivi, data: servIndiviRegistrado, error: errorAlRegistrarservIndivi } = useRegistrarServIndividual(servicioIndivi)
    const { mutate: obtenerServIndivi, data: serviciosObtenidos  } = useObtenerServIndividual()
    const { mutate: obtenerCategoria, data: categoriaObtenida } = useObtenerCategorias()
          
    useEffect(() => { if(servIndiviRegistrado)  { messageSuccess(servIndiviRegistrado?.data?.msg, "servIndividual") } }, [servIndiviRegistrado])
    useEffect(() => { if(registrandoServIndivi) { messageLoading("Registrando...", "servIndividual") } }, [registrandoServIndivi])
      
    useEffect(() => { obtenerServIndivi()
                      obtenerCategoria()
     }, [registrandoServIndivi])
      
    const onRegistrar = (data: any) => { 
      setServicioIndivi(data)
      if (data != null) {
        registrarServIndivi()
      }
    }
        
  return (
    <ConfirmationModal
       open={ visible }
       onCancel={ ()=> close(SERVINV) }
       title="Servicios individuales"
    >
      <ServicioIndividualTabla 
        loading={ registrandoServIndivi }
        dataSource={ serviciosObtenidos?.data }
      />
     <ServicioIndiviRegistrar
       onRegistrar={ onRegistrar }
       categorias={ categoriaObtenida?.data }
     />
   </ConfirmationModal>
  )
}

export default ServicioIndiviModal