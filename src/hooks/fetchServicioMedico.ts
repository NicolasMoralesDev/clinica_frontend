import axios from "axios"
import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"

const URL_BASE = "/medical-service/servicio-medico"

export const useObtenerServMedico = () => {
    return useMutation({
      mutationKey: ['servicio-medico'],
      mutationFn: async () => {
        return await axios.get(`${ FETCH_URL }${ URL_BASE }`)
      },
    })
}

export const useRegistrarServMedico = (servMedico: any) => {
    return useMutation({
      mutationKey: ['servicio-medico'],
      mutationFn: async () => {
        return await axios.post(`${ FETCH_URL }${ URL_BASE }`, servMedico)
      },
    })
}