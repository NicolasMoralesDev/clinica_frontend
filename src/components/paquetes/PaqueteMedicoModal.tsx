import { PAQUETE } from "../../constants/ClavesMenu"
import ConfirmationModal from "../modal/ConfirmationModal"
import PaqueteMedicoRegistrar from "./PaqueteMedicoRegistrar"

interface PaqueteMedicoProp {
  visible: boolean
  close: (key: string) => void
}

const PaqueteMedicoModal = ({close, visible}: PaqueteMedicoProp) => {
  return (
    <ConfirmationModal
      open={ visible }
      onCancel={ ()=> close(PAQUETE) }
      title="Paquetes Medicos"
    >
     <PaqueteMedicoRegistrar/>
   </ConfirmationModal>
  )
}

export default PaqueteMedicoModal