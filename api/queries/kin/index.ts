import { apiClient } from "@/api"
import { CardPersonProps } from "@/types"
import { useQuery } from "react-query"

// GET all kin members
export async function all() {
  const res = await apiClient.get("/kin.php")
  return res.data
}

export function useAll() {
  return useQuery<CardPersonProps[]>(["kin"], () => all(), {
    retry: 2,
  })
}
