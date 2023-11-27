import axios from "axios"

export const apiClient = axios.create({
  baseURL: "https://jd-admin.chamaeleon.vc/services",
})
