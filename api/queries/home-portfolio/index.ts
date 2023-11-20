import { apiClient } from "@/api"
import { ICompanyBox } from "@/constants"
import { useQuery } from "react-query"

// GET all portfolio items
export async function all() {
  const res = await apiClient.get("/homePortfolio.php")
  return res.data
}

export function useAll() {
  return useQuery<ICompanyBox[]>(["home-portfolio"], () => all(), {
    retry: 2,
  })
}
