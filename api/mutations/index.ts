import { apiClient } from "@/api"
import { Values } from "@/constants/form-contact"
import { useMutation } from "react-query"

// POST contact form
async function submitContactForm(values: Values) {
  const formData = new FormData()

  Object.entries(values).forEach(([key, value]) => {
    formData.append(`${key}`, value)
  })

  const res = await apiClient.post<{ success: boolean; message: string }>("/contact.php", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return res.data
}

export function useContactForm() {
  return useMutation(submitContactForm, {
    onMutate: (variables) => {
      // console.log(variables)
    },
    onError: (err) => {
      console.log(`error`, err)
    },
    onSuccess: (res) => {
      res
    },
    onSettled: (res) => {
      res
    },
  })
}
