import { File } from "buffer"
import * as yup from "yup"

export interface Values {
  description: string
  deck: File | null
  name: string
  email: string
  companyName: string
  website: string
  linkedin: string
}

export const formModel = {
  description: {
    placeholder: "Description*",
    name: "description",
    default: "",
    required: true,
    type: "text",
  },
  deck: {
    placeholder: "deck",
    name: "deck",
    default: null,
    required: true,
    type: "file",
  },
  name: {
    placeholder: "Name*",
    name: "name",
    default: "",
    required: true,
    type: "text",
  },
  email: {
    placeholder: "Email*",
    name: "email",
    default: "",
    required: true,
    type: "email",
  },
  companyName: {
    placeholder: "Company Name*",
    name: "companyName",
    default: "",
    required: true,
    type: "text",
  },
  website: {
    placeholder: "Website",
    name: "website",
    default: "",
    required: false,
    type: "text",
  },
  linkedin: {
    placeholder: "Linkedin",
    name: "linkedin",
    default: "",
    required: false,
    type: "text",
  },
}

export const formSchema = yup.object().shape({
  description: yup.string().required("This field is required."),
  deck: yup
    .mixed()
    .test("fileType", "Invalid file type. Only PDF files are allowed.", function (value: any) {
      if (!value) return false

      const allowedExtensions = ["pdf"] // Add more if needed

      const fileName = value.originalName || value.name
      const fileExtension = fileName.split(".").pop().toLowerCase()

      return allowedExtensions.includes(fileExtension)
    })
    .test("fileSize", "File size is too large. Maximum size allowed is 5MB.", (value: any) => {
      if (!value) return false

      const maxSize = 5 * 1024 * 1024 // 5MB
      return value.size <= maxSize
    })
    .required("This field is required."),
  name: yup.string().required("This field is required."),
  email: yup.string().email("It must be a valid email.").required("This field is required."),
  companyName: yup.string().required("This field is required."),
  website: yup.string(),
  linkedin: yup.string(),
})

export const initialValues: Values =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? {
        description: "test",
        deck: null,
        name: "test testoglu",
        email: "test@test.com",
        companyName: "test",
        website: "test.com",
        linkedin: "test",
      }
    : {
        description: formModel.description.default,
        deck: formModel.deck.default,
        name: formModel.name.default,
        email: formModel.email.default,
        companyName: formModel.companyName.default,
        website: formModel.website.default,
        linkedin: formModel.linkedin.default,
      }
