import axios from "axios"
import { useMutation } from "react-query"

const URL_BASE = "/api/medicos"

export const useObtenerMedicos = () => {
    return useMutation({
      mutationKey: ['medicos'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:9007${ URL_BASE }/obtenerTodos`)
      },
    })
}