import axios from "axios"
import { useMutation } from "react-query"

const URL_BASE = "/api/emfermedades"

export const useObtenerEnfermedades = () => {
    return useMutation({
      mutationKey: ['emfermedades'],
      mutationFn: async () => {
        return await axios.get(`http://localhost:8080${ URL_BASE }/obtenerTodas`)
      },
    })
}