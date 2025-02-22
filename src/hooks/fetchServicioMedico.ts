import axios from "axios"
import { useMutation } from "react-query"

const URL_BASE = "/servicio-medico"

export const useObtenerServMedico = () => {
    return useMutation({
      mutationKey: ['servicio-medico'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:8082${ URL_BASE }`)
      },
    })
}

export const useRegistrarServMedico = (servMedico: any) => {
    return useMutation({
      mutationKey: ['servicio-medico'],
      mutationFn: async () => {
        return await axios.post(`http://localhost:8082${ URL_BASE }`, servMedico)
      },
    })
}