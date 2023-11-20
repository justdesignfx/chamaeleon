import { apiClient } from "@/api"
import { ISocial } from "@/constants"
import { useQuery } from "react-query"

// GET all portfolio items
export async function all() {
  const res = await apiClient.get("/socialMedia.php")
  return res.data
}

export function useAll() {
  return useQuery<ISocial[]>(["social-media"], () => all(), {
    retry: 2,
  })
}
