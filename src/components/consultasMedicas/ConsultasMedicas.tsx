import ConsultasMedicasTabla from "./ConsultasMedicasTabla"
import FiltroConsultasMedicas from "./FiltroConsultasMedicas"
import "./estilos/estilos.css"

const ConsultasMedicas = () => {
  return (
    <>
     <FiltroConsultasMedicas/>
     <ConsultasMedicasTabla loading={false}/>
    </>
  )
}

export default ConsultasMedicas