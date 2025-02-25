import axios from "axios"
import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"

const URL_BASE = "/medpatient-service/api/medicos"

export const useObtenerMedicos = () => {
    return useMutation({
      mutationKey: ['medicos'],
      mutationFn: async () => {
        return await axios.get(`${ FETCH_URL }${ URL_BASE }/obtenerTodos`)
      },
    })
}