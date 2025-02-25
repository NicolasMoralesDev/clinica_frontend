
import axios from "axios"
import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"

const URL_BASE = "/medpatient-service/api/especialidad"

export const useObtenerEspecialidades = () => {
    return useMutation({
      mutationKey: ['especialidades'],
      mutationFn: async () => {
        return await axios.get(`${ FETCH_URL }${ URL_BASE }/obtenerTodas`)
      },
    })
}

export const useRegistrarEspecialidad = (especialidad: any) => {
    return useMutation({
      mutationKey: ['especialidades'],
      mutationFn: async () => {
        return await axios.post(`${ FETCH_URL }${ URL_BASE }/registro`, especialidad)
      },
    })
}