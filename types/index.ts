export interface CompanyBoxProps {
  description?: string
  id: string
  name: string
  logo: string
  url?: string
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
  description: string
  media: MediaProps
  title: string
  url: string
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
  date: string
  title: string
  readingTime: string
  cover: MediaProps
  text: HTMLElement
  image: MediaProps[]
  nexPost: string
}
