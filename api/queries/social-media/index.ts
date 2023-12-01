import { apiClient } from "@/api"
import { SocialProps } from "@/types"
import { useQuery } from "react-query"

// GET all portfolio items
export async function all() {
  const res = await apiClient.get("/socialMedia.php")
  return res.data
}

export function useAll() {
  return useQuery<SocialProps[]>(["social-media"], () => all(), {
    retry: 2,
  })
}
