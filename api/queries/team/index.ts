import { apiClient } from "@/api"
import { ICardPerson } from "@/constants"
import { useQuery } from "react-query"

// GET all team members
export async function all() {
  const res = await apiClient.get("/teams.php")
  return res.data
}

export function useAll() {
  return useQuery<ICardPerson[]>(["team"], () => all(), {
    retry: 2,
  })
}
