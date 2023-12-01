import { apiClient } from "@/api"
import { CompanyBoxProps } from "@/types"
import { useQuery } from "react-query"

// GET all portfolio items
export async function all() {
  const res = await apiClient.get("/homePortfolio.php")
  return res.data
}

export function useAll() {
  return useQuery<CompanyBoxProps[]>(["home-portfolio"], () => all(), {
    retry: 2,
  })
}
