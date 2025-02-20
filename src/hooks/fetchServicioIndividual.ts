
import axios from "axios"
import { useMutation } from "react-query"
import { ServicioIndividual } from "../classes/ServicioIndividual"

const URL_BASE = "/servicio-individual"

export const useObtenerServIndividual = () => {
    return useMutation({
      mutationKey: ['servIndividual'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:8082${ URL_BASE }`)
      },
    })
}

export const useRegistrarServIndividual = (servIndividual: ServicioIndividual) => {
    return useMutation({
      mutationKey: ['servIndividual'],
      mutationFn: async () => {
        return await axios.post(`http://localhost:8082${ URL_BASE }`, servIndividual)
      },
    })
}