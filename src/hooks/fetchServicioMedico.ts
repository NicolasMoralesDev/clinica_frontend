import axios from "axios"
import { useMutation } from "react-query"
import { ServicioMedico } from "../classes/ServicioMedico"

const URL_BASE = "/servicio-medico"

export const useObtenerServMedico = () => {
    return useMutation({
      mutationKey: ['servicio-medico'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:8082${ URL_BASE }`)
      },
    })
}

export const useRegistrarServMedico = (servMedico: ServicioMedico) => {
    return useMutation({
      mutationKey: ['servicio-medico'],
      mutationFn: async () => {
        return await axios.post(`http://localhost:8082${ URL_BASE }`, servMedico)
      },
    })
}