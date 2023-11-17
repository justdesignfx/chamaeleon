import { apiClient } from "@/api"
import { ICardPerson } from "@/constants"
import { useQuery } from "react-query"

// GET all kin members
export async function all() {
  const res = await apiClient.get("/kin.php")
  return res.data
}

export function useAll() {
  return useQuery<ICardPerson[]>(["kin"], () => all(), {
    retry: 2,
  })
}
