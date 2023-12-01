import { apiClient } from "@/api"
import { OptionProps } from "@/types"
import { useQuery } from "react-query"

// GET sort
async function getSortOptions() {
  const res = await apiClient.get("/sort.php")
  return res.data
}

export function useSortOptions() {
  return useQuery<OptionProps[]>(["sort-options"], () => getSortOptions(), {
    retry: 2,
  })
}
