import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://eatcrumby.com/jd-admin/services",
})

export default apiClient
