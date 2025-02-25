import axios from "axios"
import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"

const URL_BASE = "/medpatient-service/api/emfermedades"

export const useObtenerEnfermedades = () => {
    return useMutation({
      mutationKey: ['emfermedades'],
      mutationFn: async () => {
        return await axios.get(`${ FETCH_URL }${ URL_BASE }/obtenerTodas`)
      },
    })
}