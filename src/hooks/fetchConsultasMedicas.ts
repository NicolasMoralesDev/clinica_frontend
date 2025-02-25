import { useMutation } from 'react-query'
import axios from "axios"
import { ConsultaMedicaFiltro } from '../classes/ConsultaMedicaFiltro'
import { FETCH_URL } from '../constants/Fetch'

const URL_BASE = "medicalconsultationservice/api/consultasMedicas"

export const useObtenerConsultas = (consultaMedica: ConsultaMedicaFiltro) => {
    return useMutation({
      mutationKey: ['consultas-medicas'],
      mutationFn: async () => {
        return await axios.post(`${ FETCH_URL }${ URL_BASE }/obtenerTodas`, consultaMedica)
      },
    })
}

export const useCerrarConsultas = (consultasSeleccionadas: any) => {
  return useMutation({
    mutationKey: ['consulta-medicas'],
    mutationFn: async () => {
      return await axios.post(`${ FETCH_URL }${ URL_BASE }/borrar`, consultasSeleccionadas)
    },
  })
}