import axios from "axios"
import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"

const URL_BASE = "/medpatient-service/api/dias-laborales"

export const useObtenerTurnosDisponibles = (filtro: any) => {
    return useMutation({
      mutationKey: ['dias-laborales'],
      mutationFn: async () => {
        return await axios.post(`${ FETCH_URL }${ URL_BASE }/obtenerTurno`, filtro)
      },
    })
}