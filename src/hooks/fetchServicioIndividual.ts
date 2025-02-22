
import axios from "axios"
import { useMutation } from "react-query"

const URL_BASE = "/servicio-individual"

export const useObtenerServIndividual = () => {
    return useMutation({
      mutationKey: ['servicio-individual'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:8082${ URL_BASE }`)
      },
    })
}

export const useRegistrarServIndividual = (servIndividual: any) => {
    return useMutation({
      mutationKey: ['servicio-individual'],
      mutationFn: async () => {
        return await axios.post(`http://localhost:8082${ URL_BASE }`, servIndividual)
      },
    })
}