import { apiClient } from "@/api"
import { ICardBlog, IOption } from "@/constants"
import { useQuery } from "react-query"

// GET all
async function all(limit: number, keyword?: string | null, sort?: string) {
  const res = await apiClient.get("/newsAndEvents.php", {
    params: {
      keyword,
      sort,
      limit,
    },
  })
  return res.data
}

export function useAll(limit: number, keyword?: string | null, sort?: IOption | null) {
  return useQuery<ICardBlog[]>(["all", keyword, sort, limit], () => all(limit, keyword, sort?.value), {
    retry: 2,
  })
}
