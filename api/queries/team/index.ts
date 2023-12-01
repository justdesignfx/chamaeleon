import { apiClient } from "@/api"
import { CardPersonProps } from "@/types"
import { useQuery } from "react-query"

// GET all team members
export async function all() {
  const res = await apiClient.get("/teams.php")
  return res.data
}

export function useAll() {
  return useQuery<CardPersonProps[]>(["team"], () => all(), {
    retry: 2,
  })
}
