export interface ICompanyBox {
  bgColor: string
  fontColor: string
  img: string
  url: string
}

export const companyBox: ICompanyBox = {
  bgColor: "var(--forested-juniper)",
  fontColor: "var(--greening)",
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
  theTeam: {
    name: "the-team",
    path: "the-team",
    ui: "THE TEAM",
  },
  kinCommunity: {
    name: "kin-community",
    path: "kin-community",
    ui: "KIN COMMUNITY",
  },
  manifestoAndValues: {
    name: "manifesto-and-values",
    path: "manifesto-and-values",
    ui: "MANIFESTO & VALUES",
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
  newsAndEvents: {
    name: "news-and-events",
    path: "news-and-events",
    ui: "NEWS & EVENTS",
  },
  portfolio: {
    name: "portfolio",
    path: "portfolio",
    ui: "PORTFOLIO",
  },
}
