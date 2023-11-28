import { apiClient } from "@/api"
import { IOption } from "@/constants"
import { useQuery } from "react-query"

// GET sort
async function getSortOptions() {
  const res = await apiClient.get("/sort.php")
  return res.data
}

export function useSortOptions() {
  return useQuery<IOption[]>(["sort-options"], () => getSortOptions(), {
    retry: 2,
  })
}
