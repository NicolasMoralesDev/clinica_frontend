
import axios from "axios"
import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"

const URL_BASE = "/medical-service/servicio-individual"

export const useObtenerServIndividual = () => {
    return useMutation({
      mutationKey: ['servicio-individual'],
      mutationFn: async () => {
        return await axios.get(`${ FETCH_URL }${ URL_BASE }`)
      },
    })
}

export const useRegistrarServIndividual = (servIndividual: any) => {
    return useMutation({
      mutationKey: ['servicio-individual'],
      mutationFn: async () => {
        return await axios.post(`${ FETCH_URL }${ URL_BASE }`, servIndividual)
      },
    })
}