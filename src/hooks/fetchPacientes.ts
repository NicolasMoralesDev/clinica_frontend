import axios from "axios"
import { useMutation } from "react-query"

const URL_BASE = "/api/pacientes"

export const useObtenerPacientes = () => {
    return useMutation({
      mutationKey: ['pacientes'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:9007${ URL_BASE }/obtenerTodos`)
      },
    })
}