
import axios from "axios"
import { useMutation } from "react-query"
import { Categoria } from "../classes/Categoria"

const URL_BASE = "/categoria"

export const useObtenerCategorias = () => {
    return useMutation({
      mutationKey: ['categorias'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:8082${ URL_BASE }`)
      },
    })
}

export const useRegistrarCategoria = (categoria: Categoria) => {
    return useMutation({
      mutationKey: ['categorias'],
      mutationFn: async () => {
        return await axios.post(`http://localhost:8082${ URL_BASE }`, categoria)
      },
    })
}