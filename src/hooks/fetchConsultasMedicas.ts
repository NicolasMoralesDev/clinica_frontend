import { useMutation } from 'react-query'
import axios from "axios"
import { ConsultaMedicaFiltro } from '../classes/ConsultaMedicaFiltro'

const URL_BASE = "/api/consultasMedicas"

export const useObtenerConsultas = (consultaMedica: ConsultaMedicaFiltro) => {
    return useMutation({
      mutationKey: ['consultasMedicas'],
      mutationFn: async () => {
        return await axios.post(`http://localhost:8080${ URL_BASE }/obtenerTodas`, consultaMedica)
      },
    })
}

export const useCerrarConsultas = (consultasSeleccionadas: any) => {
  return useMutation({
    mutationKey: ['consultaMedicas'],
    mutationFn: async () => {
      return await axios.post(`http://localhost:8080${ URL_BASE }/borrar`, consultasSeleccionadas)
    },
  })
}