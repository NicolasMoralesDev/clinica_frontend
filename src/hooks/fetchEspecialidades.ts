
import axios from "axios"
import { useMutation } from "react-query"

const URL_BASE = "/api/especialidad"

export const useObtenerEspecialidades = () => {
    return useMutation({
      mutationKey: ['especialidades'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:9007${ URL_BASE }/obtenerTodas`)
      },
    })
}

export const useRegistrarEspecialidad = (especialidad: any) => {
    return useMutation({
      mutationKey: ['especialidades'],
      mutationFn: async () => {
        return await axios.post(`http://localhost:9007${ URL_BASE }/registro`, especialidad)
      },
    })
}