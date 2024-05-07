import { NextSeoProps } from "next-seo"

export interface CompanyBoxProps {
  description?: string
  id: string
  name: string
  logo: string
  url?: string
  companyStatus?: string
  type: "logo" | "portfolio"
}

export interface CardPersonProps {
  description: string
  media: MediaProps
  name: string
  title: string
  linkedin: string
  toggleDetail: () => void
}

export interface CardPostProps {
  id: string
  media: MediaProps
  title: string
  url: string
  date: string
  category: string
}

export interface SocialProps {
  icon: string
  url: string
}

export interface MediaProps {
  desktop: {
    height: string
    src: string
    width: string
  }
  mobile: {
    height: string
    src: string
    width: string
  }
}

export interface CardFloatProps {
  backgroundColor: string
  color: string
  icon?: {
    alignment: "tl" | "tr" | "bl" | "br"
    src: string
    size: "sm" | "md" | "lg"
  }
  title: string
  desc?: string
}

export interface Alignment {
  alignment: "tl" | "tr" | "bl" | "br"
}

export interface OptionProps {
  label: string
  value: string
}

export interface PostProps {
  id: string
  header: {
    title: string
    date: string
    readingTime: string
    banner: MediaProps
  }
  nextPost: string
  body: BlockProps
}

export interface BlockProps {
  id: string
  data: MediaProps[] | HTMLElement | any
  componentName: "Image" | "Text" | "Body"
  [key: string]: unknown
}

export interface Seo {
  title: NextSeoProps["title"]
  description: NextSeoProps["description"]
}

export type CursorType = "default" | "click" | "clickDark" | "menu"
