
import axios from "axios"
import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"

const URL_BASE = "/medical-service/categoria"

export const useObtenerCategorias = () => {
    return useMutation({
      mutationKey: ['categorias'],
      mutationFn: async () => {
        return await axios.get(`${ FETCH_URL }${ URL_BASE }`)
      },
    })
}

export const useRegistrarCategoria = (categoria: any) => {
    return useMutation({
      mutationKey: ['categorias'],
      mutationFn: async () => {
        return await axios.post(`${ FETCH_URL }${ URL_BASE }`, categoria)
      },
    })
}