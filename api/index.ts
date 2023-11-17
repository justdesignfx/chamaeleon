import axios from "axios"

export const apiClient = axios.create({
  baseURL: "https://chamaeleon.justdesignfx.com/jd-admin/services",
})
