import { useMutation } from "react-query"
import { FETCH_URL } from "../constants/Fetch"
import axios from "axios"

const URL_BASE = "/spring-security-jwt/auth"

export const useLogin = (login: any) => {
    return useMutation({
      mutationKey: ['login'],
      mutationFn: async () => {
        return await axios.post(`${ FETCH_URL }${ URL_BASE }/login`, login)
      },
    })
}