import { useMutation } from 'react-query'
import axios from "axios"

const URL_BASE = "/api/consultasMedicas"

export const useObtenerConsultas = () => {
    return useMutation({
      mutationKey: ['consultasMedicas'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:8080${ URL_BASE }/obtenerTodas`)
      },
    })
}