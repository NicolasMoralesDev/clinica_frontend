import { useEffect, useState } from "react"
import { CATEGORIA } from "../../constants/ClavesMenu"
import ConfirmationModal from "../modal/ConfirmationModal"
import CategoriasRegistrar from "./CategoriasRegistrar"
import CategoriasTabla from "./CategoriasTabla"
import { messageLoading, messageSuccess } from "../../utils/Message"
import { useObtenerCategorias, useRegistrarCategoria } from "../../hooks/fetchCategoria"
import { Categoria } from "../../classes/Categoria"

interface CategoriasModalProp {
  visible: boolean
  close: (key: string) => void
}

const CategoriasModal = ({ visible, close }: CategoriasModalProp) => {

    const [categoria, setCategoria] = useState<Categoria>()
    const { mutate: registrarCategoria, isLoading: registrandoCategoria, data: categoriaRegistrada, error: _errorAlRegistrarEspecialidad } = useRegistrarCategoria(categoria)
    const { mutate: obtenerCategorias, isLoading: obteniendoCategoria, data: categoriaObtenida } = useObtenerCategorias()
    
    useEffect(() => { if(categoriaRegistrada)  { messageSuccess("Categoría registrada correctamente!", "categoria") } }, [categoriaRegistrada])
    useEffect(() => { if(registrandoCategoria) { messageLoading("Registrando...", "categoria") } }, [registrandoCategoria])
   
    useEffect(() => { obtenerCategorias() }, [categoriaRegistrada])

    useEffect(() => { categoria && registrarCategoria() }, [categoria])

    
    const onRegistrar = (data: any) => {
        setCategoria(data)
    }

  return (
    <ConfirmationModal
      width={ 1000 }
      open={ visible }
      onCancel={ ()=> close(CATEGORIA) }
      title="Categorías"
    >
      <div className="flex">
          <div className="w-1/2">
           <CategoriasTabla 
             loading={ obteniendoCategoria }
             dataSource={ categoriaObtenida?.data }
            />
          </div>
        <div className="w-1/2">
         <CategoriasRegistrar
           onRegistrar={ onRegistrar }
         />
        </div>
      </div>
  </ConfirmationModal>
  )
}

export default CategoriasModal