import { apiClient } from "@/api"
import { CompanyBoxProps } from "@/types"
import { useQuery } from "react-query"

// GET all portfolio items
export async function all() {
  const res = await apiClient.get("/portfolio.php")
  return res.data
}

export function useAll() {
  return useQuery<CompanyBoxProps[]>(["portfolio"], () => all(), {
    retry: 2,
  })
}
