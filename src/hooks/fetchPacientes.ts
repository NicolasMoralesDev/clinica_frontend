import axios from "axios"
import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"

const URL_BASE = "/medpatient-service/api/pacientes"

export const useObtenerPacientes = () => {
    return useMutation({
      mutationKey: ['pacientes'],
      mutationFn: async () => {
        return await axios.get(`${ FETCH_URL }${ URL_BASE }/obtenerTodos`)
      },
    })
}