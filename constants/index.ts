export interface ICompanyBox {
  description?: string
  id: string
  name: string
  logo: string
  url?: string
}

export interface ICardPerson {
  description: string
  media: Media
  name: string
  title: string
  linkedin: string
  toggleDetail: () => void
}

export interface ICardBlog {
  description: string
  media: Media
  title: string
  url: string
}

export interface ISocial {
  icon: string
  url: string
}

export interface Media {
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

export const routes = {
  home: {
    name: "home",
    path: "",
    ui: "HOME",
  },
  manifestoAndValues: {
    name: "manifesto-and-values",
    path: "manifesto-and-values",
    ui: "MANIFESTO & VALUES",
  },
  superpower: {
    name: "superpower",
    path: "superpower",
    ui: "SUPERPOWER",
  },
  team: {
    name: "team",
    path: "team",
    ui: "TEAM",
  },
  kin: {
    name: "kin",
    path: "kin",
    ui: "KIN",
  },
  portfolio: {
    name: "portfolio",
    path: "portfolio",
    ui: "PORTFOLIO",
  },
  newsAndEvents: {
    name: "news-and-events",
    path: "news-and-events",
    ui: "NEWS & EVENTS",
  },
  approach: {
    name: "approach",
    path: "approach",
    ui: "APPROACH",
  },
  contact: {
    name: "contact",
    path: "contact",
    ui: "CONTACT US",
  },
}

export interface ICardFloat {
  backgroundColor: string
  color: string
  icon?: {
    alignment: "tl" | "tr" | "bl" | "br"
    src: string
    size: "sm" | "md" | "lg"
  }
  rotate: number
  title: string
  desc?: string
}

export interface Alignment {
  alignment: "tl" | "tr" | "bl" | "br"
}

export interface IOption {
  label: string
  value: string
}
