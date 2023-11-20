import { Values } from "@/constants/form-contact"
import { useMutation } from "react-query"
import { apiClient } from ".."

// POST form
async function submitContactForm(values: Values) {
  const res = await apiClient.post("/contact.php", {
    params: {
      values,
    },
  })
  return res.data
}

export function useContactForm() {
  return useMutation(submitContactForm, {
    onMutate: (variables) => {
      console.log(variables)
    },
    onError: (err) => {
      console.log(`error`, err)
    },
    onSuccess: (res: Response) => {},
    onSettled: (res) => {},
  })
}
