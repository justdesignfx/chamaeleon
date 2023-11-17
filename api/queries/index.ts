// // GET single
// async function single(url: string) {
//   const res = await apiClient.get(`/productDetail.php?url=${url}`)
//   return res.data
// }

// export function useSingle(url: string) {
//   return useQuery<IProduct>(["single", url], () => single(url), {
//     enabled: !!url,
//     retry: 2,
//   })
// }

// // GET sort
// async function getSortOptions() {
//   const res = await apiClient.get("/sort.php")
//   return res.data
// }

// export function useSortOptions() {
//   return useQuery<IOption[]>(["sort-options"], () => getSortOptions(), {
//     retry: 2,
//   })
// }

// // GET home products slider
// async function getHomeSlider() {
//   const res = await apiClient.get("/homeProducts.php")
//   return res.data
// }

// export function useHomeSlider() {
//   return useQuery<ICardProduct[]>(["home-slider"], () => getHomeSlider(), {
//     retry: 2,
//   })
// }
