import { useEffect, useState } from "react"
import ConfirmationModal from "../modal/ConfirmationModal"
import { messageLoading, messageSuccess } from "../../utils/Message"
import ServicioMedicoRegistrar from "./ServicioMedicoRegistrar"
import ServicioMedicoTabla from "./ServicioMedicoTabla"
import { ServicioMedico } from "../../classes/ServicioMedico"
import { SERVMED } from "../../constants/ClavesMenu"
import { useObtenerServMedico, useRegistrarServMedico } from "../../hooks/fetchServicioMedico"

interface ServicioMedicoProp {
    visible: boolean
    close: (key: string) => void
}

const ServicioMedicoModal = ({ visible, close }: ServicioMedicoProp) => {
  
    const [servicioMedico, setServicioMedico] = useState<ServicioMedico>()

    const { mutate: registrarServMedico, isLoading: registrandoServMedico, data: servMedicoRegistrado, error: _errorAlRegistrarservIndivi } = useRegistrarServMedico(servicioMedico)
    const { mutate: obtenerServMedico, data: serviciosObtenidos  } = useObtenerServMedico()
          
    useEffect(() => { if(servMedicoRegistrado)  { messageSuccess(servMedicoRegistrado?.data?.msg, "servIndividual") } }, [servMedicoRegistrado])
    useEffect(() => { if(registrandoServMedico) { messageLoading("Registrando...", "servIndividual") } }, [registrandoServMedico])
      
    useEffect(() => { obtenerServMedico()
     }, [registrandoServMedico])
      
    const onRegistrar = (data: any) => { 
      setServicioMedico(data)
      if (data != null) {
        registrarServMedico()
      }
    }
        
  return (
    <ConfirmationModal
      width={ 1000 }
      open={ visible }
      onCancel={ ()=> close(SERVMED) }
      title="Servicios medicos"
    >
    <div className="flex">
       <div className="w-1/2">
       <ServicioMedicoTabla 
         loading={ registrandoServMedico }
         dataSource={ serviciosObtenidos?.data }
       />
       </div>
       <div className="w-1/2">
       <ServicioMedicoRegistrar
         onRegistrar={ onRegistrar }
       />
      </div>
    </div>
   </ConfirmationModal>
  )
}

export default ServicioMedicoModal