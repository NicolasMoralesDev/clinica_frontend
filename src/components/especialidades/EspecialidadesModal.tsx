import { useEffect, useState } from "react"
import { ESPECIALIDAD } from "../../constants/ClavesMenu"
import ConfirmationModal from "../modal/ConfirmationModal"
import EspecialidadesRegistrar from "./EspecialidadesRegistrar"
import EspecialidadesTabla from "./EspecialidadesTabla"
import { useObtenerEspecialidades, useRegistrarEspecialidad } from "../../hooks/fetchEspecialidades"
import { messageError, messageLoading, messageSuccess } from "../../utils/Message"
import { Especialidades } from "../../classes/Especialidades"

interface EspecialidadesModalProp {
    visible: boolean
    close: (key: string) => void
}

const EspecialidadesModal = ({ visible, close }: EspecialidadesModalProp) => {

    const [especialidad, setEspecialidad] = useState<Especialidades>()
    
    const { mutate: registrarEspecialidad, isLoading: registrandoEspecialidad, data: especialidadRegistrada, error: errorAlRegistrarEspecialidad } = useRegistrarEspecialidad(especialidad)
    const { mutate: obtenerEspecialidades, isLoading: obteniendoEspecialidades, data: especialidadesObtenidas } = useObtenerEspecialidades()
     
    useEffect(() => { if(especialidadRegistrada)  {  messageSuccess(especialidadRegistrada?.data?.msg, "especialidad") } }, [especialidadRegistrada])
    useEffect(() => { if(registrandoEspecialidad) { messageLoading("Registrando...", "especialidad") } }, [registrandoEspecialidad])
    useEffect(() => { if(errorAlRegistrarEspecialidad) { messageError(errorAlRegistrarEspecialidad?.msg, "especialidad") } }, [errorAlRegistrarEspecialidad])
                        
    useEffect(() => { obtenerEspecialidades() }, [especialidadRegistrada])
     
  const onRegistar = (data: any) => { 
    setEspecialidad(data)
    if (especialidad != null) {
      registrarEspecialidad()
    }
   }
  
  return (
    <ConfirmationModal
      width={ 1000 }
      open={ visible }
      onCancel={ ()=> close(ESPECIALIDAD) }
      title="Especialidades"
    >
      <div
       className="w-full flex"
      >
        <div className="w-1/2">
          <EspecialidadesTabla
            loading={ obteniendoEspecialidades }
            dataSource={ especialidadesObtenidas?.data }
          />
        </div>
        <div className="w-1/2">
          <EspecialidadesRegistrar
           registrar={ onRegistar }
          />
        </div>
      </div>
    </ConfirmationModal>
  )
}

export default EspecialidadesModal