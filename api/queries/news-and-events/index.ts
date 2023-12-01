import { apiClient } from "@/api"
import { CardPostProps, OptionProps } from "@/types"
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

export function useAll(limit: number, keyword?: string | null, sort?: OptionProps | null) {
  return useQuery<CardPostProps[]>(["all", keyword, sort, limit], () => all(limit, keyword, sort?.value), {
    retry: 2,
  })
}
