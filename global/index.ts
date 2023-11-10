export interface ICompanyBox {
  img: string
  url: string
}

export const companyBox: ICompanyBox = {
  img: "/img/beepro.png",
  url: "#",
}

export interface ICardPerson {
  img: string
  name: string
  role: string
  social: ISocial
}

export interface ISocial {
  icon: string
  url: string
}

export const cardPerson: ICardPerson = {
  img: "/img/nonu.png",
  name: "NUNO GONÇALVES PEDRO",
  role: "Managing Partner",
  social: {
    icon: "/img/icon-linkedin.svg",
    url: "#",
  },
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
    ui: "THE TEAM",
  },
  community: {
    name: "community",
    path: "community",
    ui: "COMMUNITY",
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
  contactUs: {
    name: "contact-us",
    path: "contact-us",
    ui: "CONTACT US",
  },
}
